import { useEffect, useRef, useCallback } from 'react';

// ============================================================================
// Web Audio API - iOS Safari Compatible Animalese
// ============================================================================
// This implementation uses Web Audio API instead of HTMLAudioElement to fix
// iOS Safari issues where rapid Audio() creation fails silently.
//
// Key fixes for iOS Safari:
// 1. Shared AudioContext singleton (iOS limits to one context)
// 2. Explicit unlock on user interaction (required by iOS)
// 3. AudioBufferSourceNode for rapid playback (lightweight, designed for reuse)
// 4. Visibility change handler for iOS "interrupted" state
// ============================================================================

// Module-level singleton state
let audioContext: AudioContext | null = null;
let audioBuffer: AudioBuffer | null = null;
let isUnlocked = false;
let libraryLoadPromise: Promise<void> | null = null;

// Get or create the shared AudioContext
function getAudioContext(): AudioContext {
  if (!audioContext) {
    // Use webkitAudioContext fallback for older Safari
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioContext = new AudioContextClass();
  }
  return audioContext;
}

/**
 * Unlock audio for iOS Safari.
 * Must be called from a user interaction handler (click, tap, etc.)
 * Safe to call multiple times - will only unlock once.
 */
export async function unlockAudio(): Promise<void> {
  if (isUnlocked) return;

  const ctx = getAudioContext();

  // Resume if suspended (iOS requires this from user gesture)
  if (ctx.state === 'suspended') {
    try {
      await ctx.resume();
    } catch {
      // Ignore resume errors
    }
  }

  // Play a silent buffer to fully unlock on iOS
  // This is a well-known workaround for iOS Safari audio restrictions
  try {
    const silentBuffer = ctx.createBuffer(1, 1, 22050);
    const source = ctx.createBufferSource();
    source.buffer = silentBuffer;
    source.connect(ctx.destination);
    source.start(0);
  } catch {
    // Ignore errors - audio may still work
  }

  isUnlocked = true;

  // Also trigger the library load if not already started
  loadAndDecodeLibrary();
}

// Load and decode the animalese.wav into an AudioBuffer
async function loadAndDecodeLibrary(): Promise<void> {
  if (audioBuffer) return;
  if (libraryLoadPromise) {
    await libraryLoadPromise;
    return;
  }

  libraryLoadPromise = (async () => {
    try {
      const ctx = getAudioContext();
      const response = await fetch('/animalese.wav');
      const arrayBuffer = await response.arrayBuffer();
      audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    } catch (error) {
      console.error('Failed to load animalese library:', error);
      libraryLoadPromise = null;
    }
  })();

  await libraryLoadPromise;
}

export interface AnimaleseOptions {
  pitch?: number;
  shorten?: boolean;
}

// Audio debounce interval - play sound every N characters for better performance
const CHAR_SKIP_INTERVAL = 2;

// Library parameters (matching the animalese.wav format)
const SAMPLE_RATE = 44100;
const LIBRARY_LETTER_SECS = 0.15;
const LIBRARY_SAMPLES_PER_LETTER = Math.floor(LIBRARY_LETTER_SECS * SAMPLE_RATE);
const OUTPUT_LETTER_SECS_CHAR = 0.05; // Shorter for single char
const OUTPUT_LETTER_SECS_FULL = 0.075; // For full words
const OUTPUT_SAMPLES_PER_LETTER = Math.floor(OUTPUT_LETTER_SECS_FULL * SAMPLE_RATE);

// WAV header offset (skip the header to get to raw samples)
const WAV_HEADER_OFFSET = 44;

export function useAnimalese() {
  const isLoaded = useRef(false);
  const charCounterRef = useRef(0);

  // Load the library on mount + handle visibility changes for iOS
  useEffect(() => {
    // Start loading the library (will cache for future use)
    loadAndDecodeLibrary().then(() => {
      isLoaded.current = true;
    });

    // Handle visibility change for iOS "interrupted" state
    // When returning from background, iOS may suspend the audio context
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && audioContext) {
        if (audioContext.state !== 'running') {
          audioContext.resume().catch(() => {
            // Ignore resume errors
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Synthesize and play animalese for a full string
  const speak = useCallback((text: string, options: AnimaleseOptions = {}) => {
    if (!audioBuffer || !isUnlocked) return;

    const { pitch = 1.0, shorten = true } = options;
    const ctx = getAudioContext();

    // Resume context if needed (may have been suspended)
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    // Process the text - optionally shorten words to first+last letter
    let processedText = text;
    if (shorten) {
      processedText = text
        .replace(/[^a-z]/gi, ' ')
        .split(' ')
        .map(word => word.length > 1 ? word[0] + word[word.length - 1] : word)
        .join('');
    }

    // Get the raw audio data from the buffer (channel 0)
    const rawData = audioBuffer.getChannelData(0);

    // Create output buffer
    const outputLength = processedText.length * OUTPUT_SAMPLES_PER_LETTER;
    const outputBuffer = ctx.createBuffer(1, outputLength, SAMPLE_RATE);
    const outputData = outputBuffer.getChannelData(0);

    // Synthesize each character
    for (let cIndex = 0; cIndex < processedText.length; cIndex++) {
      const c = processedText.toUpperCase()[cIndex];
      if (c >= 'A' && c <= 'Z') {
        const letterIndex = c.charCodeAt(0) - 'A'.charCodeAt(0);
        const libraryLetterStart = LIBRARY_SAMPLES_PER_LETTER * letterIndex;

        for (let i = 0; i < OUTPUT_SAMPLES_PER_LETTER; i++) {
          const sourceIndex = libraryLetterStart + Math.floor(i * pitch);
          // Convert from 8-bit (0-255) to float (-1 to 1) if needed
          // Note: decodeAudioData already normalizes to -1..1
          outputData[cIndex * OUTPUT_SAMPLES_PER_LETTER + i] =
            rawData[WAV_HEADER_OFFSET + sourceIndex] || 0;
        }
      } else {
        // Non-pronounceable character or space - silence (0.0 for float audio)
        for (let i = 0; i < OUTPUT_SAMPLES_PER_LETTER; i++) {
          outputData[cIndex * OUTPUT_SAMPLES_PER_LETTER + i] = 0;
        }
      }
    }

    // Create and play source node
    const source = ctx.createBufferSource();
    source.buffer = outputBuffer;
    source.connect(ctx.destination);
    source.start(0);
  }, []);

  // Speak a single character (for typewriter effect) - with debouncing
  const speakChar = useCallback((char: string, options: AnimaleseOptions = {}) => {
    if (!audioBuffer || !isUnlocked) return;
    if (!/[a-zA-Z]/.test(char)) return; // Only speak letters

    // Debounce: only play audio every N characters for performance
    charCounterRef.current++;
    if (charCounterRef.current % CHAR_SKIP_INTERVAL !== 0) return;

    const { pitch = 1.0 } = options;
    const ctx = getAudioContext();

    // Resume context if needed (may have been suspended)
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const c = char.toUpperCase();
    const letterIndex = c.charCodeAt(0) - 'A'.charCodeAt(0);

    // Calculate the start time within the decoded buffer
    // The decoded buffer is in float format, not raw bytes
    const startTime = letterIndex * LIBRARY_LETTER_SECS;
    const duration = OUTPUT_LETTER_SECS_CHAR;

    // Create and play source node directly from the decoded buffer
    // AudioBufferSourceNode is lightweight and designed for rapid reuse
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = pitch;
    source.connect(ctx.destination);

    // Play a slice of the buffer (start offset and duration in seconds)
    source.start(0, startTime, duration);
  }, []);

  return { speak, speakChar, isLoaded: isLoaded.current };
}

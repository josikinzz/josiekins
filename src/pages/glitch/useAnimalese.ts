import { useEffect, useRef, useCallback } from 'react';

// Module-level cache for the animalese library to persist across mounts
let cachedLibrary: Uint8Array | null = null;
let libraryLoadPromise: Promise<Uint8Array> | null = null;

// RIFFWAVE helper for creating audio data URIs
class FastBase64 {
  static chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  static encLookup: string[] = [];
  static initialized = false;

  static init() {
    if (this.initialized) return;
    for (let i = 0; i < 4096; i++) {
      this.encLookup[i] = this.chars[i >> 6] + this.chars[i & 0x3F];
    }
    this.initialized = true;
  }

  static encode(src: number[]): string {
    this.init();
    let len = src.length;
    let dst = '';
    let i = 0;
    while (len > 2) {
      const n = (src[i] << 16) | (src[i + 1] << 8) | src[i + 2];
      dst += this.encLookup[n >> 12] + this.encLookup[n & 0xFFF];
      len -= 3;
      i += 3;
    }
    if (len > 0) {
      const n1 = (src[i] & 0xFC) >> 2;
      let n2 = (src[i] & 0x03) << 4;
      if (len > 1) n2 |= (src[++i] & 0xF0) >> 4;
      dst += this.chars[n1];
      dst += this.chars[n2];
      if (len === 2) {
        let n3 = (src[i++] & 0x0F) << 2;
        n3 |= (src[i] & 0xC0) >> 6;
        dst += this.chars[n3];
      }
      if (len === 1) dst += '=';
      dst += '=';
    }
    return dst;
  }
}

function u32ToArray(i: number): number[] {
  return [i & 0xFF, (i >> 8) & 0xFF, (i >> 16) & 0xFF, (i >> 24) & 0xFF];
}

function u16ToArray(i: number): number[] {
  return [i & 0xFF, (i >> 8) & 0xFF];
}

function createWaveDataUri(data: number[], sampleRate: number): string {
  const header = {
    chunkId: [0x52, 0x49, 0x46, 0x46], // "RIFF"
    format: [0x57, 0x41, 0x56, 0x45], // "WAVE"
    subChunk1Id: [0x66, 0x6d, 0x74, 0x20], // "fmt "
    subChunk1Size: 16,
    audioFormat: 1, // PCM
    numChannels: 1, // Mono
    sampleRate: sampleRate,
    bitsPerSample: 8,
    subChunk2Id: [0x64, 0x61, 0x74, 0x61], // "data"
  };

  const blockAlign = (header.numChannels * header.bitsPerSample) >> 3;
  const byteRate = blockAlign * header.sampleRate;
  const subChunk2Size = data.length * (header.bitsPerSample >> 3);
  const chunkSize = 36 + subChunk2Size;

  const wav = header.chunkId.concat(
    u32ToArray(chunkSize),
    header.format,
    header.subChunk1Id,
    u32ToArray(header.subChunk1Size),
    u16ToArray(header.audioFormat),
    u16ToArray(header.numChannels),
    u32ToArray(header.sampleRate),
    u32ToArray(byteRate),
    u16ToArray(blockAlign),
    u16ToArray(header.bitsPerSample),
    header.subChunk2Id,
    u32ToArray(subChunk2Size),
    data
  );

  return 'data:audio/wav;base64,' + FastBase64.encode(wav);
}

export interface AnimaleseOptions {
  pitch?: number;
  shorten?: boolean;
}

// Audio debounce interval - play sound every N characters for better performance
const CHAR_SKIP_INTERVAL = 2;

export function useAnimalese() {
  const letterLibrary = useRef<Uint8Array | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isLoaded = useRef(false);
  const charCounterRef = useRef(0); // Track characters for debouncing

  // Load the letter library on mount (with module-level caching)
  useEffect(() => {
    const loadLibrary = async () => {
      // Use cached library if available
      if (cachedLibrary) {
        letterLibrary.current = cachedLibrary;
        isLoaded.current = true;
        return;
      }

      // If already loading, wait for it
      if (libraryLoadPromise) {
        try {
          letterLibrary.current = await libraryLoadPromise;
          isLoaded.current = true;
        } catch {
          // Error already logged in the original promise
        }
        return;
      }

      // Start loading
      libraryLoadPromise = (async () => {
        const response = await fetch('/animalese.wav');
        const arrayBuffer = await response.arrayBuffer();
        const library = new Uint8Array(arrayBuffer);
        cachedLibrary = library;
        return library;
      })();

      try {
        letterLibrary.current = await libraryLoadPromise;
        isLoaded.current = true;
      } catch (error) {
        console.error('Failed to load animalese library:', error);
        libraryLoadPromise = null;
      }
    };

    loadLibrary();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Synthesize and play animalese for a string
  const speak = useCallback((text: string, options: AnimaleseOptions = {}) => {
    if (!isLoaded.current || !letterLibrary.current) return;

    const { pitch = 1.0, shorten = true } = options;
    const library = letterLibrary.current;

    // Process the text - optionally shorten words to first+last letter
    let processedText = text;
    if (shorten) {
      processedText = text
        .replace(/[^a-z]/gi, ' ')
        .split(' ')
        .map(word => word.length > 1 ? word[0] + word[word.length - 1] : word)
        .join('');
    }

    const data: number[] = [];
    const sampleFreq = 44100;
    const libraryLetterSecs = 0.15;
    const librarySamplesPerLetter = Math.floor(libraryLetterSecs * sampleFreq);
    const outputLetterSecs = 0.075;
    const outputSamplesPerLetter = Math.floor(outputLetterSecs * sampleFreq);

    for (let cIndex = 0; cIndex < processedText.length; cIndex++) {
      const c = processedText.toUpperCase()[cIndex];
      if (c >= 'A' && c <= 'Z') {
        const libraryLetterStart = librarySamplesPerLetter * (c.charCodeAt(0) - 'A'.charCodeAt(0));

        for (let i = 0; i < outputSamplesPerLetter; i++) {
          data[cIndex * outputSamplesPerLetter + i] =
            library[44 + libraryLetterStart + Math.floor(i * pitch)];
        }
      } else {
        // Non-pronounceable character or space - silence
        for (let i = 0; i < outputSamplesPerLetter; i++) {
          data[cIndex * outputSamplesPerLetter + i] = 127;
        }
      }
    }

    const dataUri = createWaveDataUri(data, sampleFreq);

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Create and play new audio
    audioRef.current = new Audio(dataUri);
    audioRef.current.play().catch(() => {
      // Ignore autoplay errors - browser may block until user interaction
    });
  }, []);

  // Speak a single character (for typewriter effect) - with debouncing
  const speakChar = useCallback((char: string, options: AnimaleseOptions = {}) => {
    if (!isLoaded.current || !letterLibrary.current) return;
    if (!/[a-zA-Z]/.test(char)) return; // Only speak letters

    // Debounce: only play audio every N characters for performance
    charCounterRef.current++;
    if (charCounterRef.current % CHAR_SKIP_INTERVAL !== 0) return;

    const { pitch = 1.0 } = options;
    const library = letterLibrary.current;

    const c = char.toUpperCase();
    const sampleFreq = 44100;
    const libraryLetterSecs = 0.15;
    const librarySamplesPerLetter = Math.floor(libraryLetterSecs * sampleFreq);
    const outputLetterSecs = 0.05; // Shorter for single char
    const outputSamplesPerLetter = Math.floor(outputLetterSecs * sampleFreq);

    const data: number[] = [];
    const libraryLetterStart = librarySamplesPerLetter * (c.charCodeAt(0) - 'A'.charCodeAt(0));

    for (let i = 0; i < outputSamplesPerLetter; i++) {
      data[i] = library[44 + libraryLetterStart + Math.floor(i * pitch)];
    }

    const dataUri = createWaveDataUri(data, sampleFreq);

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(dataUri);
    audioRef.current.play().catch(() => {
      // Ignore autoplay errors
    });
  }, []);

  return { speak, speakChar, isLoaded: isLoaded.current };
}

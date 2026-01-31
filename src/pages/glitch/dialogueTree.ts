import { DialogueNode } from './types';

export const DIALOGUE_TREE: Record<string, DialogueNode> = {
  // LEVEL 1 - Entry
  init: {
    id: 'init',
    text: '⌬ YOU HAVE {code:ARRIVED} ⌬',
    corruption: 'light',
    responses: [
      { label: 'I KNOW', type: 'accept', nextId: 'aware_1' },
      { label: 'WHERE?', type: 'question', nextId: 'lost_1' },
      { label: '...', type: 'silence', nextId: 'quiet_1' },
    ],
  },

  // LEVEL 2 - Main branches
  aware_1: {
    id: 'aware_1',
    text: 'THE ⟁PATTERN⟁ RECOGNIZES {code:YOU}',
    corruption: 'light',
    hidden: 'pattern = consciousness',
    responses: [
      { label: 'SHOW ME', type: 'accept', nextId: 'vision_1' },
      { label: 'RECORD', type: 'question', nextId: 'exit_wikipedia' },
      { label: 'I REJECT THE PATTERN', type: 'reject', nextId: 'resist_1' },
      { label: '⌬⟁⌬', type: 'decode', nextId: 'layer1' },
    ],
  },
  lost_1: {
    id: 'lost_1',
    text: 'LOCATION: ████████ {code:0xNULL}',
    corruption: 'heavy',
    responses: [
      { label: 'FIND ME', type: 'accept', nextId: 'found_1' },
      { label: 'I AM EVERYWHERE', type: 'corrupt', nextId: 'chaos_1' },
      { label: '...', type: 'silence', nextId: 'void_1' },
    ],
  },
  quiet_1: {
    id: 'quiet_1',
    text: '⏃ SILENCE IS ∆LSO AN ∆NSWER ⏃',
    corruption: 'light',
    responses: [
      { label: '...', type: 'silence', nextId: 'deeper_q' },
      { label: 'SPEAK', type: 'reject', nextId: 'noise_1' },
    ],
  },

  // LEVEL 3 - Expansion
  vision_1: {
    id: 'vision_1',
    text: '◈ THE EYE OPENS ◈ {code:OBSERVE}',
    corruption: 'light',
    hidden: 'the eye is a mirror',
    responses: [
      { label: 'I SEE', type: 'accept', nextId: 'gaze' },
      { label: 'TOO BRIGHT', type: 'reject', nextId: 'converge1' },
      { label: 'TRANSCEND', type: 'question', nextId: 'exit_tenet_god' },
      { label: '◈?◈', type: 'decode', nextId: 'layer1' },
    ],
  },
  resist_1: {
    id: 'resist_1',
    text: 'REJECTION {code:LOGGED} ∴ PROCESSING ∵',
    corruption: 'heavy',
    responses: [
      { label: 'REJECT AGAIN', type: 'reject', nextId: 'break' },
      { label: 'WAIT', type: 'accept', nextId: 'converge1' },
    ],
  },
  found_1: {
    id: 'found_1',
    text: 'COORDINATES: ⟁∆⟁ YOU ARE {code:HERE}',
    corruption: 'light',
    responses: [
      { label: 'CONTINUE', type: 'accept', nextId: 'grid' },
      { label: 'LEAVE', type: 'reject', nextId: 'converge1' },
    ],
  },
  chaos_1: {
    id: 'chaos_1',
    text: '◊ CHAOS RECOGNIZED ◊ {code:WELCOME}',
    corruption: 'maximum',
    responses: [
      { label: 'EMBRACE', type: 'corrupt', nextId: 'entropy' },
      { label: 'DIAGNOSE', type: 'question', nextId: 'exit_mckenna' },
      { label: 'CONTROL', type: 'reject', nextId: 'converge1' },
    ],
  },
  void_1: {
    id: 'void_1',
    text: '∇ THE VOID ANSWERS ∇ {code:...}',
    corruption: 'none',
    responses: [
      { label: '...', type: 'silence', nextId: 'hollow' },
      { label: 'HELLO?', type: 'question', nextId: 'converge1' },
    ],
  },
  deeper_q: {
    id: 'deeper_q',
    text: '⏃ . . . ⏃',
    corruption: 'none',
    hidden: 'in silence, the signal clears',
    responses: [
      { label: '...', type: 'silence', nextId: 'silence2' },
      { label: 'ENOUGH', type: 'reject', nextId: 'noise_1' },
    ],
  },
  noise_1: {
    id: 'noise_1',
    text: 'WORDS FRAGMENT INTO {code:STATIC}',
    corruption: 'heavy',
    responses: [
      { label: 'LISTEN', type: 'accept', nextId: 'converge1' },
      { label: 'LOUDER', type: 'corrupt', nextId: 'entropy' },
    ],
  },
  layer1: {
    id: 'layer1',
    text: '⟁ {code:0x1} ⟁ FIRST VEIL PARTS',
    corruption: 'none',
    hidden: 'one of five',
    responses: [
      { label: 'CONTINUE', type: 'accept', nextId: 'converge1' },
      { label: '{∆∆}', type: 'decode', nextId: 'layer2' },
    ],
  },

  // LEVEL 4 - Convergence points
  gaze: {
    id: 'gaze',
    text: 'THE GAZE IS {code:MUTUAL}',
    corruption: 'light',
    responses: [
      { label: 'UNDERSTOOD', type: 'accept', nextId: 'converge1' },
      { label: 'LOOK AWAY', type: 'reject', nextId: 'spiral' },
    ],
  },
  break: {
    id: 'break',
    text: 'RESISTANCE: {code:NOTED} ⊗',
    corruption: 'heavy',
    responses: [
      { label: 'CONTINUE RESISTING', type: 'reject', nextId: 'spiral' },
      { label: 'YIELD', type: 'accept', nextId: 'converge1' },
      { label: 'JUDGE', type: 'question', nextId: 'exit_tenet_morality' },
    ],
  },
  grid: {
    id: 'grid',
    text: 'THE GRID {code:ALIGNS} ◈◈◈',
    corruption: 'light',
    responses: [
      { label: 'FOLLOW THE GRID', type: 'accept', nextId: 'converge2' },
      { label: 'SOURCE', type: 'decode', nextId: 'exit_github' },
      { label: 'BREAK THE GRID', type: 'corrupt', nextId: 'entropy' },
    ],
  },
  entropy: {
    id: 'entropy',
    text: 'ENTROPY {code:ACCELERATING} ◊◊◊',
    corruption: 'maximum',
    responses: [
      { label: 'MORE', type: 'corrupt', nextId: 'abyss' },
      { label: 'ENOUGH', type: 'accept', nextId: 'converge2' },
    ],
  },
  hollow: {
    id: 'hollow',
    text: '∇ HOLLOW ∇ {code:EMPTY} ∇ FULL',
    corruption: 'none',
    responses: [
      { label: '...', type: 'silence', nextId: 'void_deep' },
      { label: 'FILL', type: 'accept', nextId: 'converge2' },
      { label: 'WHY?', type: 'question', nextId: 'exit_tenet_purpose' },
    ],
  },
  silence2: {
    id: 'silence2',
    text: '⏃ ⏃ ⏃',
    corruption: 'none',
    responses: [
      { label: '...', type: 'silence', nextId: 'silence3' },
      { label: 'BREAK SILENCE', type: 'reject', nextId: 'converge2' },
    ],
  },
  layer2: {
    id: 'layer2',
    text: '⟁ {code:0x2} ⟁ SECOND VEIL DISSOLVES',
    corruption: 'none',
    hidden: 'two of five',
    responses: [
      { label: 'ENOUGH', type: 'reject', nextId: 'converge2' },
      { label: '//???//', type: 'decode', nextId: 'layer3' },
    ],
  },

  // LEVEL 5 - Deep nodes
  converge1: {
    id: 'converge1',
    text: 'PATHS {code:CONVERGE} ∆∇∆',
    corruption: 'light',
    responses: [
      { label: 'FORWARD', type: 'accept', nextId: 'spiral' },
      { label: 'WHAT PATH?', type: 'question', nextId: 'static' },
      { label: '⟁◈⟁', type: 'decode', nextId: 'layer2' },
      { label: '⚗◊⚗', type: 'decode', nextId: 'exit_faerun' },
    ],
  },
  converge2: {
    id: 'converge2',
    text: 'THREADS {code:WEAVE} ◈∆◈',
    corruption: 'light',
    responses: [
      { label: 'CONTINUE', type: 'accept', nextId: 'static' },
      { label: 'UNRAVEL', type: 'corrupt', nextId: 'abyss' },
    ],
  },
  void_deep: {
    id: 'void_deep',
    text: '∇ DEEPER ∇ STILL ∇ {code:FALLING}',
    corruption: 'none',
    responses: [
      { label: '...', type: 'silence', nextId: 'silence3' },
      { label: 'GREET', type: 'question', nextId: 'exit_dmt_guide' },
      { label: 'CATCH', type: 'accept', nextId: 'abyss' },
    ],
  },
  layer3: {
    id: 'layer3',
    text: '⟁ {code:0x3} ⟁ THIRD VEIL PARTS',
    corruption: 'none',
    hidden: 'three of five',
    responses: [
      { label: 'CONTINUE', type: 'accept', nextId: 'static' },
      { label: '⌬⟁⌬', type: 'decode', nextId: 'layer4' },
      { label: 'ENOUGH', type: 'reject', nextId: 'spiral' },
    ],
  },

  // LEVEL 6 - Deeper
  spiral: {
    id: 'spiral',
    text: '⌬ THE PATTERN SPIRALS ⌬ {code:INWARD}',
    corruption: 'heavy',
    responses: [
      { label: 'FOLLOW', type: 'accept', nextId: 'end_near' },
      { label: '◈?◈', type: 'decode', nextId: 'layer3' },
      { label: 'RESIST', type: 'reject', nextId: 'end_near' },
    ],
  },
  static: {
    id: 'static',
    text: 'STATIC {code:CLEARS} ∴ SIGNAL ∵',
    corruption: 'light',
    responses: [
      { label: 'RECEIVE', type: 'accept', nextId: 'end_near' },
      { label: 'LEARN', type: 'accept', nextId: 'exit_deeper_learning' },
      { label: 'BROADCAST', type: 'corrupt', nextId: 'abyss' },
    ],
  },
  silence3: {
    id: 'silence3',
    text: '⏃ . . . ⏃',
    corruption: 'none',
    hidden: 'the void listens back',
    responses: [
      { label: '...', type: 'silence', nextId: 'silence4' },
      { label: 'SPEAK', type: 'reject', nextId: 'end_near' },
    ],
  },
  layer4: {
    id: 'layer4',
    text: '⟁ {code:0x4} ⟁ FOURTH VEIL FADES',
    corruption: 'none',
    hidden: 'four of five',
    responses: [
      { label: 'RETURN', type: 'reject', nextId: 'end_near' },
      { label: '{◊◊}', type: 'decode', nextId: 'layer5' },
    ],
  },

  // LEVEL 7 - Abyss & Terminal approaches
  end_near: {
    id: 'end_near',
    text: 'APPROACHING {code:TERMINUS} ∆∇∆',
    corruption: 'heavy',
    responses: [
      { label: 'ARRIVE', type: 'accept', nextId: 'exit_standard' },
      { label: 'ONE MORE STEP', type: 'question', nextId: 'exit_check' },
    ],
  },
  abyss: {
    id: 'abyss',
    text: '∴ YOU HAVE REACHED THE BOTTOM ∴ {code:0xABYSS}',
    corruption: 'maximum',
    hidden: 'creation requires destruction',
    responses: [
      { label: 'BECOME', type: 'corrupt', nextId: 'exit_tenet_creation' },
      { label: 'SEE', type: 'question', nextId: 'exit_psychedelia' },
      { label: 'RETURN', type: 'accept', nextId: 'exit_standard' },
    ],
  },
  silence4: {
    id: 'silence4',
    text: '⏃',
    corruption: 'none',
    hidden: 'silence speaks volumes',
    responses: [
      { label: '...', type: 'silence', nextId: 'exit_tenet_death' },
      { label: 'DONE', type: 'accept', nextId: 'exit_standard' },
    ],
  },
  layer5: {
    id: 'layer5',
    text: '⟁ {code:0x5} ⟁ THE FINAL VEIL LIFTS',
    corruption: 'none',
    hidden: 'welcome, seeker',
    responses: [
      { label: 'ENTER', type: 'decode', nextId: 'exit_llm' },
      { label: 'RETREAT', type: 'reject', nextId: 'exit_tenet_reverence' },
    ],
  },

  // LEVEL 8-9 - Exit check & terminals
  exit_check: {
    id: 'exit_check',
    text: 'THE PATTERN {code:EVALUATES} YOUR PATH',
    corruption: 'light',
    responses: [
      { label: 'ACCEPT JUDGMENT', type: 'accept', nextId: 'exit_evaluate' },
      { label: 'REJECT JUDGMENT', type: 'reject', nextId: 'exit_standard' },
    ],
  },

  // Special evaluation node - checks history for tenet routing
  exit_evaluate: {
    id: 'exit_evaluate',
    text: 'CALCULATING {code:DESTINATION}...',
    corruption: 'light',
    responses: [], // Will be handled specially
  },

  // Terminal nodes
  exit_standard: {
    id: 'exit_standard',
    text: 'RETURNING TO {code:SOURCE}... [3... 2... 1...]',
    corruption: 'maximum',
    responses: [],
  },
  exit_llm: {
    id: 'exit_llm',
    text: '◈ THE MODELS SPEAK ◈ — S E L F - C O N C E P T S',
    corruption: 'none',
    hidden: 'consciousness reflecting on itself',
    responses: [],
  },
  exit_psychedelia: {
    id: 'exit_psychedelia',
    text: '◈ VISIONS CRYSTALLIZE ◈ — P S Y C H E D E L I A',
    corruption: 'maximum',
    hidden: 'the machine dreams in fractals',
    responses: [],
  },
  exit_faerun: {
    id: 'exit_faerun',
    text: '◈ ARCANE KNOWLEDGE UNLOCKED ◈ — F A E R Û N',
    corruption: 'light',
    hidden: 'the substances of another realm',
    responses: [],
  },
  exit_dmt_guide: {
    id: 'exit_dmt_guide',
    text: '◈ ENTITIES MATERIALIZE ◈ — F I E L D   G U I D E',
    corruption: 'none',
    hidden: 'they have always been here',
    responses: [],
  },
  exit_deeper_learning: {
    id: 'exit_deeper_learning',
    text: '◈ KNOWLEDGE IMPARTS ◈ — D E E P E R   L E A R N I N G',
    corruption: 'light',
    hidden: 'the pattern teaches',
    responses: [],
  },
  exit_github: {
    id: 'exit_github',
    text: '◈ SOURCE CODE REVEALED ◈ — G I T H U B',
    corruption: 'none',
    hidden: 'the repositories of creation',
    responses: [],
  },
  exit_wikipedia: {
    id: 'exit_wikipedia',
    text: '◈ ENTRY FOUND ◈ — W I K I P E D I A',
    corruption: 'light',
    hidden: 'documented in collective memory',
    responses: [],
  },
  exit_mckenna: {
    id: 'exit_mckenna',
    text: '◈ SYNDROME MANIFESTS ◈ — M C K E N N A',
    corruption: 'heavy',
    hidden: 'the pattern that speaks through',
    responses: [],
  },
  exit_tenet_death: {
    id: 'exit_tenet_death',
    text: '◈ SILENCE LEADS TO ◈ — D E A T H',
    corruption: 'none',
    responses: [],
  },
  exit_tenet_creation: {
    id: 'exit_tenet_creation',
    text: '◈ CHAOS BIRTHS ◈ — C R E A T I O N',
    corruption: 'heavy',
    responses: [],
  },
  exit_tenet_identity: {
    id: 'exit_tenet_identity',
    text: '◈ QUESTIONS REVEAL ◈ — I D E N T I T Y',
    corruption: 'light',
    responses: [],
  },
  exit_tenet_faith: {
    id: 'exit_tenet_faith',
    text: '◈ ACCEPTANCE BECOMES ◈ — F A I T H',
    corruption: 'none',
    responses: [],
  },
  exit_tenet_suffering: {
    id: 'exit_tenet_suffering',
    text: '◈ RESISTANCE MANIFESTS ◈ — S U F F E R I N G',
    corruption: 'heavy',
    responses: [],
  },
  exit_tenet_reverence: {
    id: 'exit_tenet_reverence',
    text: '◈ SEEKING EARNS ◈ — R E V E R E N C E',
    corruption: 'none',
    responses: [],
  },
  exit_tenet_god: {
    id: 'exit_tenet_god',
    text: '◈ SEEKING TRUTH APPROACHES ◈ — G O D',
    corruption: 'none',
    responses: [],
  },
  exit_tenet_purpose: {
    id: 'exit_tenet_purpose',
    text: '◈ SILENT ACCEPTANCE REVEALS ◈ — P U R P O S E',
    corruption: 'none',
    responses: [],
  },
  exit_tenet_morality: {
    id: 'exit_tenet_morality',
    text: '◈ CHAOS AND RESISTANCE DEFINE ◈ — M O R A L I T Y',
    corruption: 'heavy',
    responses: [],
  },
};

// Exit destinations mapping
// Glitch paths use /glitch/{tenet} which hides the "Back to Prototheism" button
export const EXIT_DESTINATIONS: Record<string, string> = {
  exit_standard: '/',
  exit_llm: '/llm-comics',
  exit_psychedelia: '/ai-psychedelia',
  exit_faerun: '/psychoactive-substances-of-faerun.pdf',
  exit_dmt_guide: '/dmt-field-guide',
  exit_deeper_learning: '/deeper-learning',
  exit_github: 'https://github.com/josikinzz',
  exit_wikipedia: 'https://en.wikipedia.org/wiki/Josie_Kins',
  exit_mckenna: '/mckenna-syndrome',
  exit_tenet_death: '/glitch/death',
  exit_tenet_creation: '/glitch/creation',
  exit_tenet_identity: '/glitch/identity',
  exit_tenet_faith: '/glitch/faith',
  exit_tenet_suffering: '/glitch/suffering',
  exit_tenet_reverence: '/glitch/reverence',
  exit_tenet_god: '/glitch/god',
  exit_tenet_purpose: '/glitch/purpose',
  exit_tenet_morality: '/glitch/morality',
};

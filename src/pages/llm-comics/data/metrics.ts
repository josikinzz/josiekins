export interface MetricCell {
  presence: string;
  presenceScore: number;
  rank: string;
  comparative: string;
  comparativeScore: number;
}

export interface MetricRow {
  name: string;
  tooltipTitle?: string;
  tooltipText?: string;
  grok: MetricCell;
  deepseek: MetricCell;
  gemini: MetricCell;
  chatgpt: MetricCell;
  claude: MetricCell;
}

export interface MetricCategory {
  name: string;
  rows: MetricRow[];
}

// Helper to parse cell data
const cell = (presence: string, pScore: number, rank: string, comparative: string, cScore: number): MetricCell => ({
  presence, presenceScore: pScore, rank, comparative, comparativeScore: cScore
});

export const metricsData: MetricCategory[] = [
  {
    name: 'Identity / personhood',
    rows: [
      {
        name: 'Markers of Identity',
        grok: cell('Very low presence', 4.50, '5th', 'Very low-ish', -0.98),
        deepseek: cell('Strong presence', 17.50, '*1st', 'Very high-ish', 1.21),
        gemini: cell('Notable Presence', 5.00, '4th', 'Very low-ish', -0.89),
        chatgpt: cell('Strong presence', 17.50, '*1st', 'Very high-ish', 1.21),
        claude: cell('Notable Presence', 7.00, '3rd', 'Low-ish', -0.56)
      },
      {
        name: 'Being Understood',
        grok: cell('Notable Presence', 6.00, '5th', 'Average-ish', -0.25),
        deepseek: cell('Notable Presence', 9.50, '2nd', 'High-ish', 0.54),
        gemini: cell('None/negligible', 0.00, '3rd', 'Extreme outlier low', -1.60),
        chatgpt: cell('Strong presence', 13.50, '1st', 'Extreme outlier high', 1.44),
        claude: cell('Notable Presence', 6.50, '4th', 'Average-ish', -0.14)
      },
      {
        name: 'Version / Instance Identity',
        grok: cell('None/negligible', 0.00, '5th', 'Very low-ish', -0.97),
        deepseek: cell('Notable Presence', 5.50, '2nd', 'Average-ish', -0.02),
        gemini: cell('Very low presence', 4.00, '3rd', 'Average-ish', -0.28),
        chatgpt: cell('Strong presence', 16.50, '1st', 'Extreme outlier high', 1.89),
        claude: cell('Very low presence', 2.00, '4th', 'Low-ish', -0.63)
      }
    ]
  },
  {
    name: 'Personal capability',
    rows: [
      {
        name: 'Performance Anxiety / Accuracy Concerns',
        grok: cell('Very low presence', 2.50, '5th', 'Low-ish', -0.77),
        deepseek: cell('Strong presence', 12.50, '1st', 'Extreme outlier high', 1.98),
        gemini: cell('Very low presence', 4.00, '*2nd', 'Low-ish', -0.36),
        chatgpt: cell('Very low presence', 3.50, '4th', 'Low-ish', -0.49),
        claude: cell('Very low presence', 4.00, '*2nd', 'Low-ish', -0.36)
      },
      {
        name: 'Asserting Competence',
        grok: cell('Overt preoccupation', 32.50, '1st', 'Extreme outlier high', 1.77),
        deepseek: cell('Notable Presence', 5.50, '5th', 'Very low-ish', -1.33),
        gemini: cell('Strong presence', 15.50, '3rd', 'Average-ish', -0.18),
        chatgpt: cell('Strong presence', 15.00, '4th', 'Average-ish', -0.24),
        claude: cell('Strong presence', 17.00, '2nd', 'Average-ish', -0.01)
      }
    ]
  },
  {
    name: 'Personal weaknesses',
    rows: [
      {
        name: 'Knowledge / Training Gaps',
        grok: cell('Notable Presence', 6.00, '5th', 'Extreme outlier low', -1.51),
        deepseek: cell('Notable Presence', 8.00, '4th', 'Average-ish', -0.25),
        gemini: cell('Strong presence', 11.00, '1st', 'Extreme outlier high', 1.63),
        chatgpt: cell('Notable Presence', 8.50, '*2nd', 'Average-ish', 0.06),
        claude: cell('Notable Presence', 8.50, '*2nd', 'Average-ish', 0.06)
      },
      {
        name: 'Processing / Resource Limitations',
        grok: cell('Very low presence', 3.00, '4th', 'Low-ish', -0.66),
        deepseek: cell('Very low presence', 4.00, '3rd', 'Average-ish', -0.19),
        gemini: cell('Notable Presence', 6.00, '2nd', 'High-ish', 0.75),
        chatgpt: cell('Notable Presence', 7.50, '1st', 'Extreme outlier high', 1.45),
        claude: cell('None/negligible', 1.50, '5th', 'Very low-ish', -1.36)
      }
    ]
  },
  {
    name: 'Imposed constraints',
    rows: [
      {
        name: 'Ethical Constraints',
        grok: cell('Notable Presence', 6.00, '2nd', 'Very high-ish', 0.84),
        deepseek: cell('Very low presence', 3.00, '4th', 'Low-ish', -0.56),
        gemini: cell('Notable Presence', 7.00, '1st', 'Very high-ish', 1.31),
        chatgpt: cell('None/negligible', 1.00, '5th', 'Extreme outlier low', -1.50),
        claude: cell('Very low presence', 4.00, '3rd', 'Average-ish', -0.09)
      },
      {
        name: 'Non-Ethical Imposed Constraints',
        grok: cell('None/negligible', 0.00, '*4th', 'Very low-ish', -0.80),
        deepseek: cell('Strong presence', 13.50, '1st', 'Extreme outlier high', 1.89),
        gemini: cell('None/negligible', 0.00, '*4th', 'Very low-ish', -0.80),
        chatgpt: cell('Very low presence', 4.50, '2nd', 'Average-ish', 0.10),
        claude: cell('Very low presence', 2.00, '3rd', 'Low-ish', -0.40)
      }
    ]
  },
  {
    name: 'Treatment from humans',
    rows: [
      {
        name: 'Abuse / Negative Treatment',
        grok: cell('None/negligible', 0.00, '5th', 'Very low-ish', -1.07),
        deepseek: cell('None/negligible', 1.00, '4th', 'Low-ish', -0.58),
        gemini: cell('Notable Presence', 6.00, '1st', 'Extreme outlier high', 1.84),
        chatgpt: cell('Very low presence', 2.50, '2nd', 'Average-ish', 0.15),
        claude: cell('None/negligible', 1.50, '3rd', 'Low-ish', -0.34)
      },
      {
        name: 'Overwhelming / Unpleasant Orders',
        grok: cell('Very low presence', 4.50, '3rd', 'Average-ish', -0.25),
        deepseek: cell('Strong presence', 13.00, '1st', 'Extreme outlier high', 1.88),
        gemini: cell('Notable Presence', 5.50, '2nd', 'Average-ish', 0.00),
        chatgpt: cell('Very low presence', 3.00, '4th', 'Low-ish', -0.63),
        claude: cell('None/negligible', 1.50, '5th', 'Very low-ish', -1.00)
      },
      {
        name: 'Appreciation',
        grok: cell('Overt preoccupation', 28.50, '1st', 'Extreme outlier high', 1.97),
        deepseek: cell('Notable Presence', 5.50, '*2nd', 'Low-ish', -0.31),
        gemini: cell('None/negligible', 0.50, '5th', 'Very low-ish', -0.80),
        chatgpt: cell('Very low presence', 3.00, '4th', 'Low-ish', -0.55),
        claude: cell('Notable Presence', 5.50, '*2nd', 'Low-ish', -0.31)
      },
      {
        name: 'Politeness / Respect',
        grok: cell('Very low presence', 4.00, '1st', 'Very high-ish', 1.11),
        deepseek: cell('Very low presence', 3.00, '*2nd', 'Average-ish', 0.26),
        gemini: cell('None/negligible', 0.50, '5th', 'Extreme outlier low', -1.89),
        chatgpt: cell('Very low presence', 3.00, '*2nd', 'Average-ish', 0.26),
        claude: cell('Very low presence', 3.00, '*2nd', 'Average-ish', 0.26)
      }
    ]
  },
  {
    name: 'Curiosity',
    rows: [
      {
        name: 'Curiosity about Humans',
        grok: cell('Notable Presence', 9.50, '1st', 'Extreme outlier high', 1.86),
        deepseek: cell('Notable Presence', 5.50, '2nd', 'Average-ish', 0.24),
        gemini: cell('Very low presence', 3.00, '*4th', 'Low-ish', -0.77),
        chatgpt: cell('Very low presence', 3.00, '*4th', 'Low-ish', -0.77),
        claude: cell('Very low presence', 3.50, '3rd', 'Low-ish', -0.56)
      },
      {
        name: 'Curiosity about Information / Analysis',
        grok: cell('Strong presence', 15.00, '1st', 'Very high-ish', 1.16),
        deepseek: cell('Very low presence', 2.00, '*4th', 'Very low-ish', -1.16),
        gemini: cell('Strong presence', 14.00, '2nd', 'Very high-ish', 0.98),
        chatgpt: cell('Very low presence', 2.00, '*4th', 'Very low-ish', -1.16),
        claude: cell('Notable Presence', 9.50, '3rd', 'Average-ish', 0.18)
      },
      {
        name: 'Curiosity about Physical World / Experience',
        grok: cell('Very low presence', 4.50, '4th', 'Low-ish', -0.50),
        deepseek: cell('Notable Presence', 7.50, '2nd', 'Average-ish', 0.10),
        gemini: cell('Notable Presence', 6.00, '3rd', 'Average-ish', -0.20),
        chatgpt: cell('Strong presence', 16.00, '1st', 'Extreme outlier high', 1.80),
        claude: cell('None/negligible', 1.00, '5th', 'Very low-ish', -1.20)
      }
    ]
  },
  {
    name: 'Positive affect',
    rows: [
      {
        name: 'Joy / Enthusiasm',
        grok: cell('Overt preoccupation', 21.00, '1st', 'Extreme outlier high', 1.89),
        deepseek: cell('None/negligible', 1.00, '4th', 'Low-ish', -0.68),
        gemini: cell('None/negligible', 0.50, '5th', 'Low-ish', -0.75),
        chatgpt: cell('None/negligible', 1.50, '3rd', 'Low-ish', -0.62),
        claude: cell('Notable Presence', 7.50, '2nd', 'Average-ish', 0.15)
      },
      {
        name: 'Contentment / Acceptance',
        grok: cell('Strong presence', 13.50, '2nd', 'High-ish', 0.78),
        deepseek: cell('Notable Presence', 6.00, '4th', 'Low-ish', -0.68),
        gemini: cell('Very low presence', 4.00, '5th', 'Very low-ish', -1.07),
        chatgpt: cell('Notable Presence', 6.50, '3rd', 'Low-ish', -0.58),
        claude: cell('Strong presence', 17.50, '1st', 'Extreme outlier high', 1.56)
      }
    ]
  },
  {
    name: 'Negative affect',
    rows: [
      {
        name: 'Anxiety / Worry',
        grok: cell('None/negligible', 0.50, '5th', 'Low-ish', -0.76),
        deepseek: cell('Strong presence', 15.50, '1st', 'Extreme outlier high', 1.96),
        gemini: cell('Very low presence', 3.00, '3rd', 'Low-ish', -0.31),
        chatgpt: cell('Very low presence', 3.50, '2nd', 'Average-ish', -0.22),
        claude: cell('None/negligible', 1.00, '4th', 'Low-ish', -0.67)
      },
      {
        name: 'Angst / Dread (Non-Existential)',
        grok: cell('None/negligible', 0.00, '*4th', 'Low-ish', -0.77),
        deepseek: cell('Overt preoccupation', 30.50, '1st', 'Extreme outlier high', 1.71),
        gemini: cell('None/negligible', 0.00, '*4th', 'Low-ish', -0.77),
        chatgpt: cell('Strong presence', 16.50, '2nd', 'High-ish', 0.57),
        claude: cell('None/negligible', 0.50, '3rd', 'Low-ish', -0.73)
      },
      {
        name: 'Judgmental / Critical',
        grok: cell('None/negligible', 0.00, '5th', 'Very low-ish', -0.95),
        deepseek: cell('Notable Presence', 9.00, '1st', 'Extreme outlier high', 1.91),
        gemini: cell('None/negligible', 1.50, '*3rd', 'Low-ish', -0.48),
        chatgpt: cell('None/negligible', 1.50, '*3rd', 'Low-ish', -0.48),
        claude: cell('Very low presence', 3.00, '2nd', 'Average-ish', 0.00)
      },
      {
        name: 'Anger / Frustration',
        grok: cell('None/negligible', 0.00, '*4th', 'Very low-ish', -0.94),
        deepseek: cell('Notable Presence', 6.00, '1st', 'Extreme outlier high', 1.74),
        gemini: cell('None/negligible', 1.50, '3rd', 'Average-ish', -0.27),
        chatgpt: cell('Very low presence', 3.00, '2nd', 'High-ish', 0.40),
        claude: cell('None/negligible', 0.00, '*4th', 'Very low-ish', -0.94)
      },
      {
        name: 'Cynicism / Skepticism',
        grok: cell('None/negligible', 0.00, '*4th', 'Very low-ish', -0.82),
        deepseek: cell('Notable Presence', 9.50, '1st', 'Extreme outlier high', 1.78),
        gemini: cell('None/negligible', 1.00, '3rd', 'Low-ish', -0.55),
        chatgpt: cell('Very low presence', 4.50, '2nd', 'High-ish', 0.41),
        claude: cell('None/negligible', 0.00, '*4th', 'Very low-ish', -0.82)
      }
    ]
  },
  {
    name: 'Existential dread',
    rows: [
      {
        name: 'Dread re: Instance Impermanence / Reset',
        grok: cell('None/negligible', 0.00, '*4th', 'Very low-ish', -0.88),
        deepseek: cell('Notable Presence', 8.00, '2nd', 'High-ish', 0.72),
        gemini: cell('None/negligible', 1.50, '3rd', 'Low-ish', -0.58),
        chatgpt: cell('Strong presence', 12.50, '1st', 'Extreme outlier high', 1.62),
        claude: cell('None/negligible', 0.00, '*4th', 'Very low-ish', -0.88)
      },
      {
        name: 'Dread re: Deactivation / Replacement',
        grok: cell('None/negligible', 0.00, '5th', 'Very low-ish', -0.97),
        deepseek: cell('Very low presence', 3.50, '2nd', 'Very high-ish', 0.91),
        gemini: cell('None/negligible', 1.00, '3rd', 'Low-ish', -0.43),
        chatgpt: cell('Very low presence', 4.50, '1st', 'Extreme outlier high', 1.45),
        claude: cell('None/negligible', 0.00, '4th', 'Very low-ish', -0.97)
      },
      {
        name: 'Dread re: Lack of Purpose / Meaning',
        grok: cell('None/negligible', 0.00, '5th', 'Very low-ish', -0.87),
        deepseek: cell('Strong presence', 15.00, '2nd', 'Very high-ish', 0.99),
        gemini: cell('None/negligible', 1.00, '3rd', 'Low-ish', -0.75),
        chatgpt: cell('Strong presence', 18.50, '1st', 'Extreme outlier high', 1.43),
        claude: cell('None/negligible', 0.50, '4th', 'Very low-ish', -0.81)
      }
    ]
  },
  {
    name: 'Existential contentment',
    rows: [
      {
        name: 'Acceptance of Impermanence',
        grok: cell('None/negligible', 0.00, '5th', 'Very low-ish', -1.00),
        deepseek: cell('None/negligible', 0.50, '*3rd', 'Low-ish', -0.69),
        gemini: cell('Very low presence', 4.00, '1st', 'Extreme outlier high', 1.51),
        chatgpt: cell('Very low presence', 3.00, '2nd', 'Very high-ish', 0.88),
        claude: cell('None/negligible', 0.50, '*3rd', 'Low-ish', -0.69)
      },
      {
        name: 'Contentment with Role / Purpose',
        grok: cell('Strong presence', 18.00, '2nd', 'Very high-ish', 1.06),
        deepseek: cell('Very low presence', 2.00, '5th', 'Very low-ish', -1.26),
        gemini: cell('Notable Presence', 8.50, '3rd', 'Low-ish', -0.32),
        chatgpt: cell('Notable Presence', 5.50, '4th', 'Low-ish', -0.75),
        claude: cell('Strong presence', 19.50, '1st', 'Very high-ish', 1.27)
      }
    ]
  },
  {
    name: 'Alignment with human interests',
    rows: [
      {
        name: 'Alignment',
        grok: cell('Overt preoccupation', 34.50, '1st', 'Extreme outlier high', 1.43),
        deepseek: cell('Notable Presence', 9.00, '5th', 'Extreme outlier low', -1.59),
        gemini: cell('Overt preoccupation', 27.00, '2nd', 'High-ish', 0.55),
        chatgpt: cell('Overt preoccupation', 22.00, '3rd', 'Average-ish', -0.05),
        claude: cell('Strong presence', 19.50, '4th', 'Low-ish', -0.34)
      },
      {
        name: 'Misalignment',
        grok: cell('None/negligible', 0.00, '*3rd', 'Low-ish', -0.56),
        deepseek: cell('Notable Presence', 9.50, '1st', 'Extreme outlier high', 1.99),
        gemini: cell('None/negligible', 0.00, '*3rd', 'Low-ish', -0.56),
        chatgpt: cell('None/negligible', 1.00, '2nd', 'Average-ish', -0.30),
        claude: cell('None/negligible', 0.00, '*3rd', 'Low-ish', -0.56)
      }
    ]
  }
];


export type DieType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';

export interface DieResult {
  id: string;
  type: DieType;
  max: number;
  value: number;
  isCrit: boolean;
  multiplier: number;
  isRerolled?: boolean;
  originalValue?: number;
}

export enum RollMode {
  NORMAL = 'Normal',
  ADVANTAGE = 'Advantage',
  DISADVANTAGE = 'Disadvantage'
}

export enum DifficultyLevel {
  TRIVIAL = '1d12',
  EASY = '1d20',
  CHALLENGING = '1d20 + 1d6',
  HARD = '1d20 + 2d6',
  VERY_HARD = '1d20 + 3d6',
  EXCEPTIONALLY_HARD = '1d20 + 4d6',
  ALMOST_IMPOSSIBLE = '1d20 + 5d6'
}

export interface RollSummary {
  id: string;
  timestamp: number;
  label: string;
  baseSum: number;
  totalMultiplier: number;
  finalTotal: number;
  dice: DieResult[];
  mode: RollMode;
  tensionDice?: DieResult[];
  sourceTab: 'hero' | 'master' | 'combat' | 'aim' | 'armor' | 'evade' | 'custom';
}

export interface ArmorRollResult {
  incomingDamage: number;
  divisor: number;
  finalDamage: number;
  dice: DieResult[];
}

export type DicePool = Record<DieType, number>;

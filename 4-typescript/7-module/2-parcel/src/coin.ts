import { Coin } from './lib/types';

export function flipCoin(): Coin {
  if (Math.random() > 0.5) return "🦊";
  return "🦖";
}
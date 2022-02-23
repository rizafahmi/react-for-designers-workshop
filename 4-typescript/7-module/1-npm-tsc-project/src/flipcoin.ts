import { Coin } from './lib/types';

function flipCoin(): Coin {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

const outcome = flipCoin();
console.log(outcome);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flipCoin() {
    if (Math.random() > 0.5)
        return "heads";
    return "tails";
}
const outcome = flipCoin();
console.log(outcome);

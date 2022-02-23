let scores: number[] = [110, 530, 445, 60, 73];

function addNewScore(_scores: number[], score: number): number[] {
  return _scores.concat(score); // atau
  // return [..._scores, score];
}

console.log(scores);
console.log(addNewScore(scores, 87));
console.log(addNewScore(scores, 87));
console.log(addNewScore(scores, 87));
console.log(addNewScore(scores, 87)); // input yg sama akan selalu menghasilkan output yg sama
console.log(scores);
scores = addNewScore(scores, 87);
console.log(scores);
let scores: number[] = [110, 530, 445, 60, 73];

for(let index=0; index<scores.length; index+=1) {
  scores[index] = scores[index] / 10;
}

console.log(scores);

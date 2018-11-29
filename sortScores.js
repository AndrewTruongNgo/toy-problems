function sortScores(unorderedScores, highestPossibleScore) {

  // Sort the scores in O(n) time
  let scoreArr = new Array(highestPossibleScore + 1).fill(0);
  let results = [];

  unorderedScores.forEach((elem) => scoreArr[elem]++);

  for (let i = highestPossibleScore; i >= 0; i--) {

    let currScore = scoreArr[i];

    while (currScore > 0) {
      results.push(i);
      currScore--;
    }

  }

  return results;
}

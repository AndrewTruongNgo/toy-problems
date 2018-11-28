function meetingPlanner(slotsA, slotsB, dur) {
  let results = [];
  let ia = 0;
  let ib = 0;

  while(ia < slotsA.length && ib < slotsB.length) {
    let start = Math.max(slotsA[ia][0], slotsB[ib][0]);
    let end = Math.min(slotsA[ia][1], slotsB[ib][1]);

    if ((end - start) >= dur) {
      results.push(start, (start + dur));
      break;
    }

    if (slotsA[ia][1] > slotsB[ib][1]) {
      ib++;
    } else {
      ia++;
    }

  }
  return results;
}

console.log(meetingPlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8));

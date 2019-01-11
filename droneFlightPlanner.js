function droneFlightPlanner(route):
    largestEnergyDeficit = 0
    energyBalance = 0

    for i from 1 to route.length-1:
        energyBalance += (route[i-1][2] - route[i][2])
            if (energyBalance < largestEnergyDeficit):
                largestEnergyDeficit = energyBalance

    return -1*(largestEnergyDeficit)

function calcDroneMinEnergy(route) {
  // your code goes here
  let currState = route[0][2];
  let count = 0; // running total change in altitude
  let min = 0;

  for (let i = 1; i < route.length; i++) {
    if (route[i][2] < currState) {
      let diff = currState - route[i][2];
      count += diff;
      currState = route[i][2];
    } else {
      let diff = route[i][2] - currState;
      count -= diff;
      currState = route[i][2];

      if (count < min) {
        min = count;
      }
    }
  }
  return Math.abs(min);
}
// can you see this?

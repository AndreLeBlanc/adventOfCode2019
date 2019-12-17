const readOrbits = require('fs').readFileSync('txtfiles/day6.txt', 'utf-8')
    .split('\n')
    .filter(Boolean)
    .map(x => x.split(')'));

var orbits = {};
readOrbits.forEach(x => orbits[x[1]] = x[0]);

function numOrbs(orbit) {
  return orbit === "COM" ? 1 : numOrbs(orbits[orbit]) + 1;
}

function steps(orbit) {
  return orbit === "COM" ? [orbit] : [orbit].concat(steps(orbits[orbit]));
}

function day6(){
  const ansPart1 = readOrbits.map(x => numOrbs(x[0])).reduce((a, b) => a + b)
  const santasPath = steps(orbits["SAN"]);
  const myPath = steps(orbits["YOU"]);
  const commonOrbit = santasPath.filter(value => myPath.includes(value))
  const ansPart2 = santasPath.length + myPath.length - (2* commonOrbit.length);
  console.log("answer to part1:", ansPart1, "answer to part2:", ansPart2);
}

day6();

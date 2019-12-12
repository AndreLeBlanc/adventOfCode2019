function modWeights () {
  return require('fs').readFileSync('txtfiles/day1.txt', 'utf-8')
      .split('\n')
      .filter(Boolean);
 }

function cumulative(weight) {
  const fuel = Math.floor(weight/3 - 2);
  return (fuel > 0) ? fuel + cumulative(fuel) : 0;
}

function day1() {
  const modules = modWeights();
  const ansPart1 = modules.map(x => Math.floor(x/3 - 2)).reduce((a, b) => a + b, 0);
  const ansPart2 = modules.map(x => cumulative(x)).reduce((a, b) => a + b, 0);
  console.log("answer part 1:", ansPart1, "answer part 2:", ansPart2);
}

day1();

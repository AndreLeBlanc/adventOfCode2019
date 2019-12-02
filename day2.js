function modWeights () {
  return require('fs').readFileSync('txtfiles/day1.txt', 'utf-8')
    .split('\n')
    .filter(Boolean);
}

function cumulative(weight) {
  const fuel = Math.floor(weight/3 - 2);
  return (fuel > 0) ? fuel + cumulative(fuel) : 0;
}

function day2() {
  const modules = modWeights();
  const ans = modules.map(x => cumulative(x)).reduce((a, b) => a + b, 0);
  console.log(ans);
}

day2();

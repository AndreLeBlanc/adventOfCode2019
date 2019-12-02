function modWeights () {
  return require('fs').readFileSync('txtfiles/day1.txt', 'utf-8')
      .split('\n')
      .filter(Boolean);
 }

function day1() {
  const modules = modWeights();
  const ans = modules.map(x => Math.floor(x/3 - 2)).reduce((a, b) => a + b, 0);
  console.log(ans);
}

day1();

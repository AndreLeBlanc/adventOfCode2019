function isPass(x) {
  var duplicates = false;
  const digits = Array.from(x.toString()).map(Number);
  for (let i = 0; i < 5; i++) {
    if (digits[i] > digits[i+1])  return false;
    if (digits[i] === digits[i+1]) {
      duplicates = true;
    }
  }
 return duplicates;
}

function day4() {
  const potential = Array.from(new Array(471207), (x,i) => i+235741);
  const ans = potential.filter(x => isPass(x)).length;
  console.log(ans);
}

day4();

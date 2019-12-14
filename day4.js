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

function twoAdjacent(x) {
  const digits = Array.from(x.toString()).map(Number);
  for (let i = 0; i < 5; i++) {
    if(digits[i] === digits[i+1] && digits[i] !== digits[i+2]) return true;
    else {
      while(digits[i] === digits[i+1] && i < 4) i++;
    }
  }
  return false;
}

function day4() {
  const potential = Array.from(new Array(471207), (x,i) => i+235741);
  const ansPart1 = potential.filter(x => isPass(x));
  const ansPart2 = ansPart1.filter(x => twoAdjacent(x)).length;
  console.log("The answer part 1:", ansPart1.length, "The answer part2:", ansPart2);
}

day4();

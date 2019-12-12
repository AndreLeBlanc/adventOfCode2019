function readr () {
  return require('fs').readFileSync('txtfiles/day2.txt', 'utf-8')
    .split(',')
    .filter(Boolean)
    .map(Number);
}

function run(opcodes) {
  for(let i = 0; i < opcodes.length; i += 4) {
    switch(opcodes[i]) {
    case 99:
      return opcodes;
    case 1:
      opcodes[opcodes[i+3]] = opcodes[opcodes[i+1]] + opcodes[opcodes[i+2]];
      break;
    default:
      opcodes[opcodes[i+3]] = opcodes[opcodes[i+1]] * opcodes[opcodes[i+2]];
    }
  }
  return opcodes
}

function part2(opcodes) {
   for(let noun = 0; noun < 100; noun++) {
    for(let verb = 0; verb < 100; verb++) {
      var program = opcodes.slice();
      program[1] = noun;
      program[2] = verb
      program = run(program);
      if (program[0] === 19690720) {
        return 100*noun + verb;
      }
    }
  }
}

function part1(opcode) {
  opcode[1] = 12;
  opcode[2] = 2;
  run(opcode);
  return(opcode[0]);
}

function day2() {
  var opcodes = readr();
  const ansPart1 = part1(opcodes.slice());
  console.log("answer part1:", ansPart1);
  const ansPart2 = part2(opcodes);
  console.log("answer part2:", ansPart2);
}

day2();

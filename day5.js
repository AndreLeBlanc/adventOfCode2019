function readr (path) {
  return require('fs').readFileSync(path, 'utf-8')
    .split(',')
    .filter(Boolean)
    .map(Number);
}

function run(opcodes, code) {
  var i = 0; var output = 0 ;

  while(opcodes[i] != 99 && i < opcodes.length) {
    const params = opcodes[i].toString().split('').map(Number);
    let opcode = params[0];
    let pm1, pm2 = 0;
    if(1 < params.length ) {
      opcode = params[params.length-1];
      pm1 = params[params.length-3];
      pm2 = params[params.length-4];
    }

    const n = opcodes[i+1];
    const v = opcodes[i+2];
    let argN = pm1 ? n : opcodes[n];
    let argV = pm2 ? v : opcodes[v];

    switch(opcode) {
      case 1: {
        opcodes[opcodes[i+3]] = argN + argV;
        i += 4;
      }; break;
      case 2: {
        opcodes[opcodes[i+3]] = argN * argV;
        i += 4;
      }; break;
      case 3: {
        opcodes[opcodes[i+1]] = code;
        i += 2;
      }; break;
      case 4: {
        pm1 ? output = opcodes[i+1] : output = opcodes[opcodes[i+1]];
        i += 2;
      }; break;
      case 5: {
        (argN !== 0) ? i = argV : i += 3;
      }; break;
      case 6: {
        (argN === 0) ? i = argV : i += 3;
      }; break;
      case 7: {
        argN < argV ? opcodes[opcodes[i+3]] = 1 : opcodes[opcodes[i+3]] = 0;
        i += 4;
      }; break;
      case 8: {
        argN == argV ? opcodes[opcodes[i+3]] = 1 : opcodes[opcodes[i+3]] = 0;
         i += 4;
      };
    }
  }
  return output;
}

function day5() {
  const instructsPart1 = readr('txtfiles/day5.txt');
  const ansPart1 = run(instructsPart1, 1);
  console.log("The diagnostic code is", ansPart1, "for part 1");
  const instructsPart2 = readr('txtfiles/day5.2.txt');
  const ansPart2 = run(instructsPart2, 5);
  console.log("The diagnostic code is", ansPart2, "for part 2");
}

day5();

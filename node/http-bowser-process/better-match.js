function match(string) {
  let state = start
  for (let i of string) {
    state = state(i);
  }
  return state === end;
}

function start(char) {
  if (char === 'a') {
    return foundA
  } else {
    return start
  }
}
function foundA(char) {
  if (char === 'b') {
    return foundB
  } else {
    return start;
  }
}
function foundB(char) {
  if (char === 'c') {
    return end
  } else {
    return start;
  }
}
function end() {
  return end;
}
console.log(match('i abc good'))
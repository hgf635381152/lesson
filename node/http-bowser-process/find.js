// a  'I am good
function match(){
  for (let char of string){
    if (char === 'a'){
      return true;
    }
  }
  return false;
}

// abcdef 'I abc lay' 

function match1(string) {
  let foundA = false;
  let foundB = false;
  for (let char of string) {
    if (char === 'a') {
      foundA = true;
    }
    else if(foundA && char === 'b'){
      foundB = true;
    }
    else if (foundB && char === 'c') {
      return true
    }
    else{
      foundA = false;
      foundB = false;
    }
  }
  return false;
}
console.log(match1('i abc lay'));
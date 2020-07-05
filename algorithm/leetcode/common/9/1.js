var isPalindrome = function (x) {
  let Y = [];
  X = (x + "").split("");
  for(let i = 0; i < X.length; i++){
    Y[X.length-1-i] = X[i];
  }
  X = X.join('');
  Y = Y.join('');
  if(X === Y){
    return true;
  }
  else{
    return false;
  }
};

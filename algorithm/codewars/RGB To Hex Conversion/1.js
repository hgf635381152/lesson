function rgb(r, g, b) {
  // complete this function  
  let rstr = '', gstr = '', bstr = '';
  function zhuanhuan(n, nstr) {
    if (n <= 0) {
      nstr = '00'
    }
    else if (n > 0 && n < 16) {
      nstr = 0 + n.toString(16)
    }
    else if (n >= 16 && n < 255) {
      nstr = n.toString(16)
    }
    else {
      nstr = 'FF'
    }
    return nstr.toUpperCase()
  }
  return zhuanhuan(r, rstr) + zhuanhuan(g, gstr) + zhuanhuan(b, bstr)
}
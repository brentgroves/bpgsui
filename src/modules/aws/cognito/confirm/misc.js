// //////////////////////////////////////////////////////////
// AWS Library functions
// /////////////////////////////////////////////////////////
export function validEmail(x) {
  let atpos = x.indexOf('@')
  let dotpos = x.lastIndexOf('.')
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    //  alert("Not a valid e-mail address");
    return false
  }
  return true
}


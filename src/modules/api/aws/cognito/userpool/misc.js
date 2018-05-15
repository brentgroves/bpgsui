// //////////////////////////////////////////////////////////
// AWS Library functions
// /////////////////////////////////////////////////////////
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


export function validUserName(userName) {
    return userName && userName.length > 1;
}

export function validFirstName(firstName) {
    return firstName && firstName.length > 1;
}

export function validLastName(lastName) {
    return lastName && lastName.length > 1;
}


export function validPhoneNumber(phoneNumber){
        return /^\+?[1-9]\d{10}$/.test(phoneNumber);
}
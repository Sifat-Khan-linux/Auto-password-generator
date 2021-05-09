var inputBox = document.getElementById('password');
var button = document.getElementById('btn');

function createPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&"
  var passwordlength = 16;
  var password = "";

  for (var i = 0; i < passwordlength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  return password;
}
button.onclick = function generatePassword() {
  var password = createPassword();
  inputBox.value = password;
}
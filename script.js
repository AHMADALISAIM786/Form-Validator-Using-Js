const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error
function showError(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.classname = "form-control error";
  const small = formcontrol.queryselector("small");
  small.innerText = message;
}
//show success
function showSucess(input) {
  const formcontrol = input.parentElement;
  formcontrol.classname = "form-control sucess";
}
//check email is valid
function isEmailValid(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//check required function
function checkRequired(inputArr){
  


}

form.addEventListener("submit", function (e) {
  e.preventDefault();

checkRequired([username, email ,password,password2]);

});

const inputUsername = document.querySelector(".input-login-username");
const inputEmail = document.querySelector(".input-login-email");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");


btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      inputUsername.value === "" || 
      inputEmail.value === "" || 
      inputPassword.value === ""
      ) {
      alert("Blank cells cannot be empty");
    } else {
      const user = JSON.parse(localStorage.getItem(inputUsername.value));
      if (
        user.username === inputUsername.value &&
        user.email === inputEmail.value &&
        user.password === inputPassword.value
      ) {
        alert("Successful Login");
        window.location.href = "/html/huhushop.html";
      } 
      else{
        alert("Login Failure");
      }
    }
  });
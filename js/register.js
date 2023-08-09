const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputEmailRegister = document.querySelector(".input-signup-email");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const inputConfirmRegister = document.querySelector(".input-signup-confirm");
const btnRegister = document.querySelector(".signup__signInButton");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputEmailRegister.value === "" ||
    inputConfirmRegister.value === "" ||
    inputPasswordRegister.value === "") {
    alert("Blank cells cannot be empty");} 
    else if (
        inputPasswordRegister.value !== inputConfirmRegister.value
    )
    {
        alert("Confirm password mismatch!")
    }
    else  {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      email: inputEmailRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Successful Sign Up");
    window.location.href = "/html/login.html";
  }
});
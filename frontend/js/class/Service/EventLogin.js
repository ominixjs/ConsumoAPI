import AuthAPI from "../api/authAPI.js";

const btnLogin = document.getElementById("btn_login");

if (btnLogin) {
  btnLogin.addEventListener("click", function () {
    const email = document.getElementById("email")?.value;
    if (email == undefined) return;

    const password = document.getElementById("password")?.value;
    if (password == undefined) return;

    AuthAPI(email, password);
  });
}

const btnLogout = document.getElementById("btn_logout");

if (btnLogout) {
  btnLogout.addEventListener("click", function () {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  });
}

export default function AuthAPI(email, senha) {
  axios
    .post("http://localhost:3000/auth", { email, senha })
    .then((response) => {
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        alert("Seja bem vindo!");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

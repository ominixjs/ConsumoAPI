export default function AuthAPI(email, senha) {
  axios
    .post("http://localhost:3000/auth", { email, senha })
    .then((response) => {
      if (response.status == 200) {
        alert("Seja bem vindo!");
        console.log(response.data);
        
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export default function AxiosConfig() {
  const token = localStorage.getItem("token");

  if (!token) {
    return token;
  }

  return {
    headers: {
      authorization: "Bearer " + token,
    },
  };
}

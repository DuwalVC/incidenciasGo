import axios from "axios";

export const postAccess = async () =>
  await axios({
    method: "get",
    url: "http://localhost:3002/usuario",
  });

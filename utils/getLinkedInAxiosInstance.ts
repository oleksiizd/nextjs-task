import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.linkedin.com/",
});

export default instance;

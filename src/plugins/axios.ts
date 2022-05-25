import axios from "axios";

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => console.log(error)
);

export default axios;

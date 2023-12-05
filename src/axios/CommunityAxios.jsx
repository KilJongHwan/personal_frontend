import axios from "axios";
import Common from "../utils/common.jsx";

const AxiosApi = {
  // 로그인
  memberLogin: async (email, pw) => {
    console.log("로그인 : ", email, pw);
    const login = {
      email: email,
      password: pw,
    };
    return await axios.post(Common.DOMAIN + "/auth/login", login);
  },
};
export default AxiosApi;

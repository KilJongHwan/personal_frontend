import axios from "axios";
import Common from "../utils/common.jsx";

const AxiosApi = {
  // 게시글 조회
  communityList: async () => {
    return await axios.get(Common.DOMAIN + "/api/community/list", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  // 게시글 등록
  communityPost: async (communityDTO) => {
    return await axios.post(Common.DOMAIN + "/api/community", communityDTO, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
export default AxiosApi;

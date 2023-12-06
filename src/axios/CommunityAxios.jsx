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
    return await axios.post(
      Common.DOMAIN + "/api/community/new",
      communityDTO,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 댓글 조회
  commentList: async (communityId) => {
    return await axios.get(Common.DOMAIN + `/api/comment/list/${communityId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 댓글 쓰기
  commentWrite: async (email, communityId, parentCommentId, content) => {
    const comment = {
      communityId: communityId,
      parentCommentId: parentCommentId,
      email: email,
      content: content,
    };
    return await axios.post(Common.KH_DOMAIN + `/api/comment/new`, comment, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
export default AxiosApi;

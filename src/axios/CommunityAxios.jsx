import axios from "axios";
import Common from "../utils/common.jsx";

const AxiosApi = {
  // 게시글 조회
  getCommunityList: async (page, size) => {
    return await axios.get(
      Common.DOMAIN + `/api/community/list/page?page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 페이지 수 조회
  getCommunityTotalPages: async (size) => {
    return await axios.get(
      Common.DOMAIN + `/api/community/count?size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
  getCommunityDetail: async (communityId) => {
    return await axios.get(
      Common.DOMAIN + `/api/community/detail/${communityId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 댓글 조회
  getCommentList: async (communityId) => {
    return await axios.get(Common.DOMAIN + `/api/comment/list/${communityId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 댓글 쓰기
  commentWrite: async (email, communityId, content, parentCommentId) => {
    const comment = {
      email: email,
      communityId: communityId,
      content: content,
      parentCommentId: parentCommentId,
    };
    return await axios.post(Common.DOMAIN + `/api/comment/new`, comment, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
export default AxiosApi;

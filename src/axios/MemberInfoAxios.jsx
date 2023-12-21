import axios from "axios";
import Common from "../utils/Common";

const MemberInfoAxiosApi = {
  // 유저 정보 가져오기
  getUserInfo: async (email) => {
    return await axios.get(Common.DOMAIN + `/auth/infoByEmail?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 유저 음원 가져오기
  getUserMusic: async (userId) => {
    return await axios.get(Common.DOMAIN + `/music/user/${userId}/music`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 유저 공연 가져오기
  getUserInfoByPerformanceEmail: async (email) => {
    return await axios.get(
      Common.DOMAIN + `/performance/infoByEmail?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 포인트 충전
  increasePoints: async (email, points) => {
    return await axios.post(
      Common.DOMAIN + `/user/increasePoints`,
      {
        email: email,
        points: points.toString(), // points 값을 문자열로 변환
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 포인트 환전
  exchangePoints: async (email, points) => {
    return await axios.post(
      Common.DOMAIN + `/user/exchangePoints`,
      {
        email: email,
        points: points.toString(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default MemberInfoAxiosApi;

import axios from "axios";
import moment from "moment";
import "moment/locale/ko"; // 한글 로컬라이제이션
moment.locale("ko"); // 한글 설정 적용

export const CHORD8_DOMAIN = "";

const Common = {
  // accessToken
  setAccessToken: (accessToken) => {
    return window.localStorage.setItem("accessToken", accessToken);
  },
  getAccessToken: () => {
    return window.localStorage.getItem("accessToken");
  },
  // refreshToken
  setRefreshToken: (refreshToken) => {
    return window.localStorage.setItem("refreshToken", refreshToken);
  },
  getRefreshToken: () => {
    return window.localStorage.getItem("refreshToken");
  },
  DOMAIN: "http://localhost:8111",
  SOCKET_URL: "ws://localhost:8111/ws/comment",
  SOCKET_CHAT_URL: "ws://localhost:8111/ws/chat",

  formatDate: (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hour}:${minute}`;
  },

  timeFromNow: (timestamp) => {
    return moment(timestamp).fromNow();
  },
  formatDate: (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adds leading 0 if needed
    const day = ("0" + date.getDate()).slice(-2);
    const hour = ("0" + date.getHours()).slice(-2);
    const minute = ("0" + date.getMinutes()).slice(-2);
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  },
  truncateText: (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  },
};

export default Common;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MemberInfoAxiosApi from "../axios/MemberInfoAxios";
import { decode as jwtDecode } from "jwt-decode";
import Common from "../utils/Common.jsx";

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (_, { getState }) => {
    const { email } = getState().user;
    const response = await MemberInfoAxiosApi.getUserInfo(email);
    return response.data;
  }
);

export const fetchUserMusic = createAsyncThunk(
  "user/fetchUserMusic",
  async (_, { getState }) => {
    const { userInfo } = getState().user;
    if (userInfo) {
      const response = await MemberInfoAxiosApi.getUserMusic(userInfo.id);
      return response.data;
    }
  }
);

export const fetchUserPerformance = createAsyncThunk(
  "user/fetchUserPerformance",
  async (_, { getState }) => {
    const { email } = getState().user;
    const response = await MemberInfoAxiosApi.getUserInfoByPerformanceEmail(
      email
    );
    return response.data;
  }
);

const initialEmail = (() => {
  const token = Common.getAccessToken();
  if (token) {
    try {
      return jwtDecode(token).sub;
    } catch (error) {
      console.error("Invalid token", error);
      return "";
    }
  }
  return "";
})();

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: initialEmail,
    userInfo: null,
    userMusic: null,
    userPerformance: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(fetchUserMusic.fulfilled, (state, action) => {
        state.userMusic = action.payload;
      })
      .addCase(fetchUserPerformance.fulfilled, (state, action) => {
        state.userPerformance = action.payload;
      });
  },
});

export default userSlice.reducer;

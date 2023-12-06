import styled from "styled-components";
import profile from "../images/ProFileimage.png";

export const MyPageContainer = styled.div`
  width: 1920px;
  height: 2608px;
  opacity: var(--, 1);

  background: #fff;
`;
export const MainHead = styled.div`
  display: flex;

  width: 1920px;
  height: 356px;
  flex-shrink: 0;
  background: linear-gradient(98deg, #008bff 3.66%, #61e6ca 97.99%);
  overflow: hidden;
`;
export const MainProfile = styled.div`
  position: relative;
  width: 281px;
  height: 281px;
  flex-shrink: 0;
  border-radius: 281px;
  border: 50px solid #fff;
  opacity: var(--, 1);
  background: url(${profile}) no-repeat center / contain, lightgray;
  margin-top: 30px;
  margin-left: 70px;
`;
export const MainHeadBox = styled.div`
  width: 389px;
  height: 122px;
  flex-shrink: 0;
`;
export const MainHeadText = styled.div`
  display: flex;
  position: relative;
  width: 20rem;
  height: 2rem;
  margin: 2rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  color: #fff;

  opacity: var(--, 1);
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const NameText = styled.div`
  position: relative;
  color: #000;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

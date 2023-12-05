import styled from "styled-components";
import profile from "../images/ProFileimage.png";

export const MyPageContainer = styled.div`
  width: 1920px;
  height: 2608px;
  opacity: var(--, 1);

  background: #fff;
`;
export const MainHead = styled.div`
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
  margin-left: 50px;
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

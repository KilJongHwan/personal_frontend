import styled from "styled-components";
import profile from "../images/ProFileimage.png";

export const MyPageContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  opacity: 1;

  background: #fff;
`;
export const MainHead = styled.div`
  position: relative;

  display: flex;
  width: 100%;
  height: 24em;
  flex-shrink: 0;
  background: linear-gradient(98deg, #008bff 3.66%, #61e6ca 97.99%);
  overflow: hidden;
`;
export const MainProfile = styled.div`
  position: relative;
  width: 20em;
  height: 20em;
  flex-shrink: 0;
  border-radius: 20em;
  border: 50px solid #fff;
  opacity: 1;
  background: url(${profile}) no-repeat center / contain, lightgray;
  margin-top: 1.5em;
  margin-left: 5em;
`;
export const MainHeadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6em;
  width: 35em;
  height: 10em;
  flex-shrink: 0;
  flex-direction: row;
`;
export const MainHeadText = styled.div`
  display: flex;
  position: relative;
  padding-left: 1em;
  width: 10em;
  height: 1em;
  flex-direction: row;
  flex-shrink: 0;
  opacity: 1;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ArtistContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
`;
export const Artist = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 4em;
  flex-shrink: 0;
  color: #fff;

  font-family: Noto Sans KR;
  font-size: 10em;
  font-style: normal;
  font-weight: 100;
  line-height: 1;
`;

export const InterBox = styled.div`
  display: flex;
  position: relative;
  width: 6em;
  height: 3.3em;
  flex-shrink: 0;
  border-radius: 10em;
  opacity: 1;
  margin: 1.5em;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: #fff;
`;
export const InterBoxText = styled.div`
  display: flex;
  width: 3em;
  height: 1.5emx;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  flex-shrink: 0;
  color: #000;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const PointBox = styled.div`
  position: absolute;
  right: 0;
  width: 10em;
  height: 6em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: var(--, 1);
`;
export const MoveButton = styled.button`
  width: 124.85px;
  height: 57.174px;
  flex-shrink: 0;
  border-radius: 58.341px;
  border: 2.334px solid #fff;

  opacity: var(--, 1);

  background: rgba(255, 255, 255, 0);
  color: #fff;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 23.336px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NameText = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 10em;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

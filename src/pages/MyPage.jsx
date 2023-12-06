import {
  MainHead,
  MainHeadBox,
  MainHeadText,
  MainProfile,
  MyPageContainer,
  NameText,
} from "../style/MyPageStyle";

const MyPage = () => {
  return (
    <>
      <MyPageContainer>
        <MainHead>
          <MainProfile></MainProfile>
          <MainHeadBox>
            <MainHeadText>공연 횟수 : 8</MainHeadText>
            <MainHeadText>등록한 곡 : 6</MainHeadText>
          </MainHeadBox>
          <MainHeadText>가입일 : 2022-04-01</MainHeadText>
        </MainHead>
        <NameText>독산동 인디언</NameText>
      </MyPageContainer>
    </>
  );
};
export default MyPage;

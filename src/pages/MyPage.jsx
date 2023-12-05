import {
  MainHead,
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
        </MainHead>
        <NameText>독산동 인디언</NameText>
      </MyPageContainer>
    </>
  );
};
export default MyPage;

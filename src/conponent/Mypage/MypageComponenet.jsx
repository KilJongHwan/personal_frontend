import {
  ContentContainer,
  ItemList,
  ItemText1,
  ItemText2,
  ItemText3,
  ItemTextContainer,
  NameText,
  Picture,
  RegButton,
  SubTitle,
} from "../../style/MyPageStyle";

const MypageComponent = () => {
  return (
    <>
      <ContentContainer>
        <NameText>독산동 인디언</NameText>
        <SubTitle>
          노래 6<RegButton>음원 등록</RegButton>
        </SubTitle>
        <ItemList>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
        </ItemList>
        <SubTitle>작사/작곡 3</SubTitle>
        <ItemList>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
        </ItemList>
        <SubTitle>
          공연 8<RegButton>공연 등록</RegButton>
        </SubTitle>
      </ContentContainer>
    </>
  );
};

export default MypageComponent;

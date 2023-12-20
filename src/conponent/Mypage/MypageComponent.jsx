import {
  ButtonBox,
  ContentContainer,
  ItemList,
  ItemText1,
  ItemText2,
  ItemText3,
  ItemTextContainer,
  NameText,
  PerfomanceList,
  PerformanceBox,
  PerformanceButton,
  PerformancePicture,
  PerformancePictureBox,
  PerformanceText1,
  PerformanceText2,
  PerformanceText3,
  PerformanceText4,
  PerformanceTextBox,
  Picture,
  RegButton,
  SubTitle,
} from "../../style/MyPageStyle";

const MypageComponent = ({ userMusic, userPerformance }) => {
  return (
    <>
      <ContentContainer>
        <NameText>독산동 인디언</NameText>
        <SubTitle>
          노래 {userMusic ? userMusic.length : 0}
          <RegButton>음원 등록</RegButton>
        </SubTitle>
        <ItemList>
          {userMusic &&
            userMusic.map((music) => (
              <div key={music.musicId}>
                <Picture bgimg={music.musicDTO.thumbnailImage} />
                <ItemTextContainer>
                  <ItemText1>{music.musicDTO.musicTitle}</ItemText1>
                  <ItemText2>
                    {music.userResDto && music.userResDto.userNickname}
                  </ItemText2>
                  <ItemText3>{music.musicDTO.genre}</ItemText3>
                </ItemTextContainer>
              </div>
            ))}
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
          공연{" "}
          {userPerformance && userPerformance.performances
            ? userPerformance.performances.length
            : 0}
          <RegButton>공연 등록</RegButton>
        </SubTitle>
        {userPerformance &&
          userPerformance.performances &&
          userPerformance.performances.map((performance) => (
            <PerformanceBox key={performance.performanceId}>
              <PerformancePictureBox>
                <PerformancePicture
                  src={performance.performanceImage}
                ></PerformancePicture>
              </PerformancePictureBox>
              <PerformanceTextBox>
                <PerformanceText1>
                  {performance.performanceName}
                </PerformanceText1>
                <PerformanceText2>{performance.venue}</PerformanceText2>
                <PerformanceText3>
                  {/* performance.nicknames 배열이 ["아티스트1", "아티스트2", "아티스트3"]라면, performance.nicknames.join(", ")의 결과는 "아티스트1, 아티스트2, 아티스트3" */}
                  {performance.nicknames.join(", ")}
                </PerformanceText3>
                <PerformanceText4>
                  {performance.performanceDate}
                </PerformanceText4>
                <ButtonBox>
                  <PerformanceButton>공연 종료</PerformanceButton>
                  <RegButton>자세히</RegButton>
                </ButtonBox>
              </PerformanceTextBox>
            </PerformanceBox>
          ))}
      </ContentContainer>
    </>
  );
};

export default MypageComponent;

import {
  ButtonBox,
  ContentContainer,
  ItemList,
  ItemSlider,
  ItemText1,
  ItemText2,
  ItemText3,
  ItemTextContainer,
  NameText,
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
import Slider from "react-slick";

const MypageComponent = ({ userMusic, userPerformance }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    vertical: false,

    // responsive: [
    //   {
    //     breakpoint: 768, // 화면 크기가 768px 이하일 때
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 9999, // 화면 크기가 9999px 이하일 때 (무제한)
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    // ],
  };
  // 테스트용 데이터
  const testData = [
    {
      title: "음원 제목1",
      artist: "아티스트 이름1",
      genre: "장르1",
    },
    {
      title: "음원 제목2",
      artist: "아티스트 이름2",
      genre: "장르2",
    },
    {
      title: "음원 제목3",
      artist: "아티스트 이름3",
      genre: "장르3",
    },
  ];
  return (
    <>
      <ContentContainer>
        <NameText></NameText>
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
        <Slider {...settings}>
          {testData.map((data, index) => (
            <div key={index}>
              <ItemSlider>
                <Picture></Picture>
                <ItemTextContainer>
                  <ItemText1>음원 제목</ItemText1>
                  <ItemText2>아티스트 이름</ItemText2>
                  <ItemText3>장르</ItemText3>
                </ItemTextContainer>
              </ItemSlider>
            </div>
          ))}
        </Slider>
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

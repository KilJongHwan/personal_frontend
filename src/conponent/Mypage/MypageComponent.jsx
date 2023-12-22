import {
  ButtonBox,
  ContentContainer,
  ItemList,
  ItemSlider,
  ItemSlider2,
  ItemText1,
  ItemText2,
  ItemText3,
  ItemTextContainer,
  NameText,
  NextArrow,
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
  PrevArrow,
  RegButton,
  SubTitle,
} from "../../style/MyPageStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MypageComponent = ({ userMusic, userPerformance }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // 한 줄에 보여질 아이템 수
    slidesToScroll: 7, // 슬라이드할 때 한 번에 넘어갈 아이템 수
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 768, // 화면 크기가 768px 이하일 때
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 한 줄에 보여질 아이템 수
    slidesToScroll: 1, // 슬라이드할 때 한 번에 넘어갈 아이템 수
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <ContentContainer>
        <NameText></NameText>
        <SubTitle>
          노래 {userMusic ? userMusic.length : 0}
          <RegButton>음원 등록</RegButton>
        </SubTitle>
        {userMusic && userMusic.length >= 10 ? (
          <Slider {...settings}>
            {userMusic.map((music, index) => (
              <ItemSlider key={index}>
                <ItemTextContainer>
                  <Picture bgimg={music.musicDTO.thumbnailImage} />
                  <ItemText1>{music.musicDTO.musicTitle}</ItemText1>
                  <ItemText2>
                    {music.userResDto && music.userResDto.userNickname}
                  </ItemText2>
                  <ItemText3>{music.musicDTO.genre}</ItemText3>
                </ItemTextContainer>
              </ItemSlider>
            ))}
          </Slider>
        ) : (
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
        )}
        <SubTitle>
          공연{" "}
          {userPerformance && userPerformance.performances
            ? userPerformance.performances.length
            : 0}
          <RegButton>공연 등록</RegButton>
        </SubTitle>
        {userPerformance &&
        userPerformance.performances &&
        userPerformance.performances.length >= 5 ? (
          <Slider {...settings}>
            {userPerformance.performances.map((performance, index) => (
              <ItemSlider2 key={index}>
                <PerformanceBox>
                  <PerformancePictureBox>
                    <PerformancePicture src={performance.performanceImage} />
                  </PerformancePictureBox>
                  <PerformanceTextBox>
                    <PerformanceText1>
                      {performance.performanceName}
                    </PerformanceText1>
                    <PerformanceText2>{performance.venue}</PerformanceText2>
                    <PerformanceText3>
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
              </ItemSlider2>
            ))}
          </Slider>
        ) : userPerformance && userPerformance.performances ? (
          userPerformance.performances.map((performance, index) => (
            <ItemSlider2 key={index}>
              <PerformanceBox>
                <PerformancePictureBox>
                  <PerformancePicture src={performance.performanceImage} />
                </PerformancePictureBox>
                <PerformanceTextBox>
                  <PerformanceText1>
                    {performance.performanceName}
                  </PerformanceText1>
                  <PerformanceText2>{performance.venue}</PerformanceText2>
                  <PerformanceText3>
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
            </ItemSlider2>
          ))
        ) : null}
      </ContentContainer>
    </>
  );
};

export default MypageComponent;

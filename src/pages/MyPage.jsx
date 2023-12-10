import { ReactComponent as Heart } from "../images/HeartBox.svg";
import { ReactComponent as Subs } from "../images/SubscriberBox.svg";

import {
  Artist,
  ArtistContainer,
  InterBox,
  InterBoxText,
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
          <ArtistContainer>
            <MainHeadBox>
              <MainHeadText>공연 횟수 : 1</MainHeadText>
              <MainHeadText>등록한 곡 : 6</MainHeadText>
              <InterBox>
                <InterBoxText>
                  <Heart />
                  1000
                </InterBoxText>
              </InterBox>
              <InterBox>
                <InterBoxText>
                  <Subs />
                  1000
                </InterBoxText>
              </InterBox>
            </MainHeadBox>

            <Artist>
              <MainHeadText>가입일 : 2022-04-01</MainHeadText>
              ARTIST
            </Artist>
          </ArtistContainer>
        </MainHead>
        <NameText>독산동 인디언</NameText>
      </MyPageContainer>
    </>
  );
};
export default MyPage;

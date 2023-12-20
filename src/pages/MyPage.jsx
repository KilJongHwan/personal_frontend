import { useEffect, useState } from "react";
import MypageComponent from "../conponent/Mypage/MypageComponent";
import { ReactComponent as Heart } from "../images/HeartBox.svg";
import { ReactComponent as Subs } from "../images/SubscriberBox.svg";

import {
  Artist,
  ArtistContainer,
  InterBox,
  InterBoxText,
  MainHead,
  MainHeadBox,
  MainHeadDateText,
  MainHeadText,
  MainProfile,
  MoveButton,
  MoveButtonBox,
  MyPageContainer,
  PointBox,
} from "../style/MyPageStyle";
import MemberInfoAxiosApi from "../axios/MemberInfoAxios";
import ModalComponent from "../utils/ModalComponent";
import PayComponent from "../conponent/Mypage/PayComponent.tsx";

const MyPage = () => {
  const [email, setEmail] = useState("asd123@naver.com");
  const [userInfo, setUserInfo] = useState(null);
  const [userMusic, setUserMusic] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const fetchUserInfoAndMusic = async () => {
      try {
        const userInfoResponse = await MemberInfoAxiosApi.getUserInfo(email);
        setUserInfo(userInfoResponse.data);
        console.log(userInfoResponse.data);

        if (userInfoResponse.data) {
          const musicResponse = await MemberInfoAxiosApi.getUserMusic(
            userInfoResponse.data.id
          );
          setUserMusic(musicResponse.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchData = async () => {
      const response = await MemberInfoAxiosApi.getUserInfoByPerformanceEmail(
        email
      );
      setUserPerformance(response.data);
    };
    fetchData();
    fetchUserInfoAndMusic();
  }, [email]);
  return (
    <>
      <MyPageContainer>
        <MainHead>
          <MainProfile></MainProfile>
          <ArtistContainer>
            <MainHeadBox>
              <MainHeadText>
                공연 횟수 :{" "}
                {userPerformance && userPerformance.performances.length}
              </MainHeadText>
              <MainHeadText>
                등록된 음원 : {userMusic && userMusic.length}
              </MainHeadText>
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
              {/* <MainHeadDateText></MainHeadDateText> */}
              ARTIST
            </Artist>
          </ArtistContainer>
          <PointBox>
            <MainHeadText>MY 포인트</MainHeadText>
            {userInfo && userInfo.userPoint}

            <MoveButtonBox>
              <ModalComponent
                open={<MoveButton>충전하기</MoveButton>}
                content={
                  <PayComponent
                    email={userInfo && userInfo.userEmail}
                    username={userInfo && userInfo.userName}
                    phone={userInfo && userInfo.userPhone}
                  />
                }
                // customButton="충전하기"
                openButtonStyle={{
                  bgColor: "rgba(0,0,0,0)",
                  textColor: "black",
                }}
                close="닫기"
              />
              <ModalComponent
                open={<MoveButton>환전하기</MoveButton>}
                content="환전 모달 내용"
                customButton="환전하기"
                openButtonStyle={{
                  bgColor: "rgba(0,0,0,0)",
                  textColor: "black",
                }}
                close="닫기"
              />
            </MoveButtonBox>
          </PointBox>
        </MainHead>
        <MypageComponent
          userMusic={userMusic}
          userPerformance={userPerformance}
        />
      </MyPageContainer>
    </>
  );
};
export default MyPage;

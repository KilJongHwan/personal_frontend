import { ReactComponent as SvgS } from "../images/music-svgrepo-com.svg";
import { ReactComponent as Menu } from "../images/Menu.svg";
import { ReactComponent as Heart } from "../images/Heart.svg";
import { ReactComponent as Clip } from "../images/Clip.svg";
import { ReactComponent as User } from "../images/User.svg";
import { ReactComponent as Logo } from "../images/Symbol_color@300x.svg";
import { ReactComponent as Down } from "../images/Down.svg";
import { ReactComponent as Talk } from "../images/Talk.svg";

import {
  Aside,
  CommunityContainer,
  CommunityDashboard,
  CommunityProfileFrame,
  CommunityList,
  CommunityMenuList,
  CommunityProfilePart,
  CommunityProfile,
  CommunityProfileImg,
  Container,
  Hidden,
  Note,
  Page,
  Section,
  TextCenter,
  TextLog,
  TextFrame,
  Title,
  DashboardButton,
  DashboardButtonFrame,
  CommunityMenuItem,
  CommunityLink,
  CommunitySVG,
  CommunityMenuText,
  CommunityMenuButton,
  CommunityItem,
} from "../style/CommunityStyle";
import { useState } from "react";

const CommunityPage = () => {
  const [isList, setIsList] = useState(false);
  const ListOpen = () => {
    setIsList(!isList);
  };
  return (
    <>
      <Page>
        <Hidden>
          <Container>
            <Section>
              <Title>음악을 사랑하는 여러분의 의견을 나눠주세요.</Title>
              <Note>
                <SvgS />
              </Note>
            </Section>
          </Container>
          <CommunityContainer>
            <CommunityList>
              <Aside>
                <CommunityDashboard>
                  <CommunityProfile>
                    <CommunityProfileFrame>
                      <CommunityProfilePart></CommunityProfilePart>
                    </CommunityProfileFrame>
                    <CommunityProfileImg />
                  </CommunityProfile>
                  <TextCenter>
                    <TextFrame>
                      <TextLog>로그인 후 더 편하게 이용해 보세요</TextLog>
                    </TextFrame>
                  </TextCenter>
                  <DashboardButtonFrame>
                    <DashboardButton>로그인 / 회원가입</DashboardButton>
                  </DashboardButtonFrame>
                </CommunityDashboard>
                <CommunityMenuList>
                  <CommunityMenuItem>
                    <CommunityLink>
                      <CommunitySVG>
                        <Menu />
                        <CommunityMenuText>전체 게시판</CommunityMenuText>
                      </CommunitySVG>
                    </CommunityLink>
                    <CommunityLink>
                      <CommunitySVG>
                        <Heart />
                        <CommunityMenuText>인기 게시판</CommunityMenuText>
                      </CommunitySVG>
                    </CommunityLink>
                    <CommunityLink>
                      <CommunitySVG>
                        <Clip />
                        <CommunityMenuText>공지 게시판</CommunityMenuText>
                      </CommunitySVG>
                    </CommunityLink>
                    <CommunityLink>
                      <CommunitySVG>
                        <User />
                        <CommunityMenuText>팀원 모집</CommunityMenuText>
                      </CommunitySVG>
                    </CommunityLink>
                    <CommunityLink>
                      <CommunityMenuButton>
                        <Talk />
                        <CommunityItem onClick={ListOpen}>
                          <CommunityMenuText>일반 커뮤니티</CommunityMenuText>
                        </CommunityItem>
                        <Down />
                      </CommunityMenuButton>
                    </CommunityLink>
                  </CommunityMenuItem>
                </CommunityMenuList>
              </Aside>
            </CommunityList>
          </CommunityContainer>
        </Hidden>
      </Page>
    </>
  );
};

export default CommunityPage;

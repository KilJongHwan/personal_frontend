import {
  Block,
  ButtonFlex,
  ChoiceButton,
  HeadLine,
  HeadText,
  Heading,
  PostRankCategory,
  PostRankContent,
  PostRankFrame,
  PostRankLink,
  PostRankList,
  PostRankListItem,
  PostUpTime,
  PostUpTimeList,
  RoundedMd,
  Swiper,
  SwiperSlide,
  SwiperWrapper,
} from "../../style/CommunityPostStyle";

const CommunityRankComponent = () => {
  return (
    <>
      <Heading>
        <HeadText>전체 게시판</HeadText>
      </Heading>
      <HeadLine />
      <Block>
        <ButtonFlex>
          <ChoiceButton selected={true}>실시간</ChoiceButton>
          <ChoiceButton selected={false}>주간</ChoiceButton>
          <ChoiceButton selected={false}>월간</ChoiceButton>
        </ButtonFlex>
        <PostUpTime>
          <PostUpTimeList>
            <Swiper>
              <SwiperWrapper>
                <SwiperSlide>
                  <RoundedMd>
                    <PostRankList>
                      <PostRankListItem>
                        <PostRankLink>1</PostRankLink>
                        <PostRankCategory>자유 게시판</PostRankCategory>
                        <PostRankContent>
                          <PostRankFrame>팀원모집</PostRankFrame>
                        </PostRankContent>
                      </PostRankListItem>
                    </PostRankList>
                  </RoundedMd>
                </SwiperSlide>
                <SwiperSlide>
                  <RoundedMd>
                    <PostRankList>
                      <PostRankListItem>
                        <PostRankLink>6</PostRankLink>
                        <PostRankCategory>자유 게시판</PostRankCategory>
                        <PostRankContent>
                          <PostRankFrame>팀원모집</PostRankFrame>
                        </PostRankContent>
                      </PostRankListItem>
                    </PostRankList>
                  </RoundedMd>
                </SwiperSlide>
              </SwiperWrapper>
            </Swiper>
          </PostUpTimeList>
        </PostUpTime>
      </Block>
    </>
  );
};
export default CommunityRankComponent;

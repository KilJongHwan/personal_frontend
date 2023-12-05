import { ReactComponent as Write } from "../../images/Write.svg";
import { ReactComponent as Prev } from "../../images/Prev.svg";
import { ReactComponent as Next } from "../../images/Next.svg";
import {
  Block,
  ButtonFlex,
  ChoiceButton,
  Pagination,
  HeadLine,
  HeadText,
  Heading,
  InputContainer,
  MiddlePage,
  PageContant,
  PostBoarder,
  PostContainer,
  PostList,
  PostListTitle,
  PostPage,
  PostRankCategory,
  PostRankContent,
  PostRankFrame,
  PostRankLink,
  PostRankList,
  PostRankListItem,
  PostSection,
  PostTable,
  PostUpTime,
  PostUpTimeList,
  RoundedMd,
  SendButton,
  Swiper,
  SwiperSlide,
  SwiperWrapper,
  TableBody,
  TableNormalRow,
  TableRow,
  TableRowDataContent,
  TableRowDataDate,
  TableRowDataTitle,
  TableRowDataViews,
  TitleContent,
} from "../../style/CommunityPostStyle";

const CommunityComponent = ({ setInputClicked }) => {
  return (
    <>
      <PostContainer>
        <PostSection>
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
          <InputContainer>
            <PostBoarder
              placeholder="새 글을 작성하세요"
              type="text"
              onClick={() => setInputClicked(true)}
            ></PostBoarder>
            <SendButton>
              <Write />
            </SendButton>
          </InputContainer>
          <PostListTitle>
            <TitleContent>전체</TitleContent>
          </PostListTitle>
          <PostList>
            <PostTable>
              <TableBody>
                <TableRow>
                  <TableRowDataTitle>제목</TableRowDataTitle>
                  <TableRowDataContent>내용</TableRowDataContent>
                  <TableRowDataDate>등록일</TableRowDataDate>
                  <TableRowDataViews>조회수</TableRowDataViews>
                </TableRow>
                <TableNormalRow>
                  <TableRowDataTitle>제목</TableRowDataTitle>
                  <TableRowDataContent>내용</TableRowDataContent>
                  <TableRowDataDate>등록일</TableRowDataDate>
                  <TableRowDataViews>조회수</TableRowDataViews>
                </TableNormalRow>
              </TableBody>
            </PostTable>
            <PostPage>
              <Pagination>
                <PageContant>
                  <Prev />
                </PageContant>
                <PageContant>이전</PageContant>
              </Pagination>
              <MiddlePage></MiddlePage>
              <Pagination>
                <PageContant>다음</PageContant>
                <PageContant>
                  <Next />
                </PageContant>
              </Pagination>
            </PostPage>
          </PostList>
        </PostSection>
      </PostContainer>
    </>
  );
};

export default CommunityComponent;

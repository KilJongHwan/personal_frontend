import { ReactComponent as Write } from "../../images/Write.svg";
import { ReactComponent as Prev } from "../../images/Prev.svg";
import { ReactComponent as Next } from "../../images/Next.svg";
import {
  Pagination,
  InputContainer,
  MiddlePage,
  PageContant,
  PostBoarder,
  PostContainer,
  PostList,
  PostListTitle,
  PostPage,
  PostSection,
  PostTable,
  SendButton,
  TableBody,
  TableNormalRow,
  TableRow,
  TableRowDataContent,
  TableRowDataDate,
  TableRowDataTitle,
  TableRowDataViews,
  TitleContent,
} from "../../style/CommunityPostStyle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosApi from "../../axios/CommunityAxios";
import Common from "../../utils/common";
import CommunityRankComponent from "./CommunityRankComponent";

const CommunityComponent = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const extractContent = (html) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(html, "text/html");
    return parsedHtml.body.textContent || "";
  };
  useEffect(() => {
    // 서버에서 데이터를 가져오는 함수
    const postList = async () => {
      const response = await AxiosApi.getCommunityList();
      setPosts(response.data);
    };

    postList();
  }, []);

  return (
    <>
      <PostContainer>
        <PostSection>
          <CommunityRankComponent />
          <InputContainer>
            <PostBoarder
              placeholder="새 글을 작성하세요"
              type="text"
              onClick={() => {
                navigate("/community/write");
              }}
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
                  <TableRowDataDate>작성시간</TableRowDataDate>
                  <TableRowDataViews>조회수</TableRowDataViews>
                </TableRow>
                {posts.map((post) => (
                  <TableNormalRow
                    key={post.id}
                    onClick={() => {
                      navigate(`/community/detail/${post.id}`);
                    }}
                  >
                    <TableRowDataTitle>{post.title}</TableRowDataTitle>
                    <TableRowDataContent>
                      {extractContent(post.content)}
                    </TableRowDataContent>
                    <TableRowDataDate>
                      {Common.timeFromNow(post.regDate)}
                    </TableRowDataDate>
                    <TableRowDataViews>{post.viewCount}</TableRowDataViews>
                  </TableNormalRow>
                ))}
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

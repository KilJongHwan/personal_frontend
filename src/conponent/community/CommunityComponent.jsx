import { ReactComponent as Write } from "../../images/Write.svg";
import { ReactComponent as Prev } from "../../images/Prev.svg";
import { ReactComponent as Next } from "../../images/Next.svg";
import { ReactComponent as Text } from "../../images/write-svgrepo-com.svg";
import { ReactComponent as Image } from "../../images/image-svgrepo-com.svg";
import { ReactComponent as Video } from "../../images/video-camera-svgrepo-com.svg";
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
  TableRowDataDate,
  TableRowDataTitle,
  TableRowDataViews,
  TitleContent,
  TableRowDataWriter,
  Page,
  TableRowDataIcon,
} from "../../style/CommunityPostStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosApi from "../../axios/CommunityAxios";
import Common from "../../utils/common";
import CommunityRankComponent from "./CommunityRankComponent";

const CommunityComponent = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const categoryId = Number(useParams().categoryId);
  const validCategoryId = isNaN(categoryId) ? undefined : categoryId;
  console.log(useParams().categoryId);

  const pageSize = 10;

  const checkMediaContent = (html) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(html, "text/html");
    const imgTag = parsedHtml.querySelector("img");
    const videoTag = parsedHtml.querySelector("video");
    const iframeTag = parsedHtml.querySelector("iframe");

    return {
      image: imgTag !== null,
      video: videoTag !== null || iframeTag !== null, // iframe 태그 추가
    }; // 이미지 태그와 동영상 태그가 각각 있으면 true, 없으면 false를 반환
  };
  useEffect(() => {
    // 서버에서 데이터를 가져오는 함수
    const postPage = async () => {
      const responsePages = await AxiosApi.getCommunityTotalPages(pageSize);
      setTotalPages(responsePages.data);
    };

    postPage();
  }, [currentPage]);
  useEffect(() => {
    const postList = async () => {
      try {
        const rsp =
          validCategoryId === undefined
            ? await AxiosApi.getCommunityList(currentPage, pageSize)
            : await AxiosApi.getCommunityListByCategory(
                validCategoryId,
                currentPage,
                pageSize
              );
        setPosts(rsp.data);
      } catch (error) {
        console.log(error);
      }
    };
    postList();
  }, [categoryId, currentPage, pageSize, totalPages]);

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
                navigate(`/community/write`);
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
                  <TableRowDataIcon></TableRowDataIcon>
                  <TableRowDataWriter>작성자</TableRowDataWriter>
                  <TableRowDataTitle>제목</TableRowDataTitle>
                  <TableRowDataDate>작성시간</TableRowDataDate>
                  <TableRowDataViews>조회수</TableRowDataViews>
                </TableRow>
                {posts.map((post) => {
                  const segments = post.ipAddress
                    ? post.ipAddress.split(".")
                    : "";
                  const ipAddress = segments
                    ? `${segments[0]}.${segments[1]}`
                    : "";
                  const hasMediaContent = checkMediaContent(post.content);

                  return (
                    <TableNormalRow
                      key={post.id}
                      onClick={() => {
                        navigate(`/community/detail/${post.id}`);
                      }}
                    >
                      <TableRowDataIcon>
                        {hasMediaContent.video ? (
                          <Video />
                        ) : hasMediaContent.image ? (
                          <Image />
                        ) : (
                          <Text />
                        )}
                      </TableRowDataIcon>
                      <TableRowDataWriter>
                        {post.nickName}({ipAddress})
                      </TableRowDataWriter>
                      <TableRowDataTitle>{post.title}</TableRowDataTitle>
                      <TableRowDataDate>
                        {Common.timeFromNow(post.regDate)}
                      </TableRowDataDate>
                      <TableRowDataViews>{post.viewCount}</TableRowDataViews>
                    </TableNormalRow>
                  );
                })}
              </TableBody>
            </PostTable>
            <PostPage>
              <Pagination>
                <PageContant>
                  <Prev />
                </PageContant>
                <PageContant
                  onClick={() =>
                    setCurrentPage(currentPage > 1 ? currentPage - 1 : 0)
                  }
                  disabled={currentPage === 0}
                >
                  이전
                </PageContant>
              </Pagination>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <MiddlePage
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum - 1)}
                    active={currentPage === pageNum}
                  >
                    <Page selected={currentPage === pageNum - 1}>
                      {pageNum}
                    </Page>
                  </MiddlePage>
                )
              )}
              <Pagination>
                <PageContant
                  onClick={() =>
                    setCurrentPage(
                      currentPage < totalPages - 1
                        ? currentPage + 1
                        : currentPage
                    )
                  }
                  disabled={currentPage === totalPages - 1}
                >
                  다음
                </PageContant>
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

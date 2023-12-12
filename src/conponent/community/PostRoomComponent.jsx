import React, { useEffect, useState } from "react";
import {
  PostTitle,
  PostContent,
  PostDate,
  ReplyFormContainer,
  ReplyInput,
  ReplyButton,
  CommentContainer,
  CommentForm,
  CommentButton,
  PostContainer,
  PostHeader,
  PostAuthor,
  PostViews,
  PostVotes,
  PostUpvote,
  PostDownvote,
  CommentHeader,
  CommentContent,
  PostBody,
  Dropdown,
  WriterInfo,
  TitleContainer,
  InformationContainer,
  SmallInput,
  LargeInput,
  FormContainer,
} from "../../style/PostRoomStyle";
import CommunityAxiosApi from "../../axios/CommunityAxios";
import { useParams } from "react-router-dom";
import Common from "../../utils/common";
import CommunityRankComponent from "./CommunityRankComponent";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const [currentCommentPage, setCurrentCommentPage] = useState(0);
  const [totalCommentPages, setTotalCommentPages] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const segments = post.ipAddress ? post.ipAddress.split(".") : "";
  const ipAddress = `${segments[0]}.${segments[1]}`;
  const [replyOpen, setReplyOpen] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const postDetail = async () => {
      try {
        const response = await CommunityAxiosApi.getCommunityDetail(id);
        setPost(response.data);
        const commentResponse = await CommunityAxiosApi.getCommentList(
          id,
          currentCommentPage
        );
        setComments(commentResponse.data.content);
        setTotalCommentPages(commentResponse.data.totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    postDetail();
  }, [id, currentCommentPage]);

  const commentWrite = async () => {
    try {
      const response = await CommunityAxiosApi.commentWrite(
        email,
        nickName,
        password,
        id,
        newComment,
        null
      );
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error(error);
    }
  };
  const vote = async (isUpvote) => {
    try {
      await CommunityAxiosApi.vote(id, isUpvote);
      if (isUpvote) {
        alert("추천이 완료되었습니다.");
      } else {
        alert("비추천이 완료되었습니다.");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 400) {
        alert(error.response.data);
      } else {
        alert("오류가 발생하였습니다.");
      }
    }
  };
  const toggleReplyForm = (commentId) => {
    setReplyOpen((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
    console.log(commentId);
  };
  return (
    <PostContainer>
      <CommunityRankComponent />
      <PostHeader>
        <WriterInfo>
          <PostAuthor>
            {post.nickName}({ipAddress})
          </PostAuthor>
          <PostDate> {Common.formatDate(post.regDate)}</PostDate>
        </WriterInfo>
        <TitleContainer>
          <PostTitle>{post.title}</PostTitle>
          <PostViews>조회수: {post.viewCount}</PostViews>
        </TitleContainer>
      </PostHeader>
      <PostBody>
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </PostBody>
      <PostVotes>
        <PostUpvote onClick={() => vote(true)}>추천</PostUpvote>
        <PostTitle>{post.voteCount}</PostTitle>
        <PostDownvote onClick={() => vote(false)}>비추천</PostDownvote>
      </PostVotes>
      <CommentHeader>
        전체 댓글 수: {comments.length} <Dropdown></Dropdown>
      </CommentHeader>
      <CommentContainer>
        {comments.map((comment) => (
          <CommentContent
            key={comment.commentId}
            onClick={() => toggleReplyForm(comment.commentId)}
          >
            <span>{comment.nickName}</span>
            <span>{Common.formatDate(comment.regDate)}</span>
            {comment.content}
            {replyOpen[comment.commentId] && (
              <ReplyFormContainer>
                <ReplyInput />
                <ReplyButton></ReplyButton>
              </ReplyFormContainer>
            )}
          </CommentContent>
        ))}
        {currentCommentPage > 0 && ( // 현재 페이지가 0보다 클 때만 '이전 페이지' 버튼 표시
          <button onClick={() => setCurrentCommentPage(currentCommentPage - 1)}>
            이전
          </button>
        )}
        {currentCommentPage + 1 < totalCommentPages && ( // 현재 페이지가 마지막 페이지가 아닐 때만 '다음 페이지' 버튼 표시
          <button onClick={() => setCurrentCommentPage(currentCommentPage + 1)}>
            다음
          </button>
        )}
        <CommentForm>
          <FormContainer>
            {!email && (
              <>
                <InformationContainer>
                  <FormContainer>
                    <SmallInput
                      type="text"
                      value={nickName}
                      onChange={(e) => setNickName(e.target.value)}
                      placeholder="닉네임을 입력하세요"
                    />
                    <SmallInput
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호를 입력하세요"
                    />
                  </FormContainer>
                </InformationContainer>
              </>
            )}
            <LargeInput
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <CommentButton onClick={commentWrite}>댓글 작성</CommentButton>
          </FormContainer>
        </CommentForm>
      </CommentContainer>
    </PostContainer>
  );
};

export default Post;

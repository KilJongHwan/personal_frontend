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
  CommentInput,
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
} from "../../style/PostRoomStyle";
import AxiosApi from "../../axios/CommunityAxios";
import { useParams } from "react-router-dom";
import Common from "../../utils/common";
import CommunityRankComponent from "./CommunityRankComponent";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const [newComment, setNewComment] = useState("");
  const segments = post.ipAddress ? post.ipAddress.split(".") : "";
  const ipAddress = `${segments[0]}.${segments[1]}`;

  const { id } = useParams();

  useEffect(() => {
    const postDetail = async () => {
      try {
        const response = await AxiosApi.getCommunityDetail(id);
        setPost(response.data);
        const commentResponse = await AxiosApi.getCommentList(id);
        setComments(commentResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    postDetail();
  }, [id]);

  const commentWrite = async () => {
    try {
      const response = await AxiosApi.commentWrite(
        "test@email.com",
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
  const ReplyForm = ({ onSubmit }) => {
    const [content, setContent] = useState("");

    const sendComment = (e) => {
      e.preventDefault();
      onSubmit(content);
      setContent("");
    };

    return (
      <ReplyFormContainer>
        <form onSubmit={sendComment}>
          <ReplyInput
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <ReplyButton type="submit">등록</ReplyButton>
        </form>
      </ReplyFormContainer>
    );
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
        <PostUpvote>추천</PostUpvote>
        <PostDownvote>비추천</PostDownvote>
      </PostVotes>
      <CommentHeader>
        전체 댓글 수: {comments.length} <Dropdown></Dropdown>
      </CommentHeader>
      <CommentContainer>
        {comments.map((comment) => (
          <CommentContent key={comment.commentId}>
            {comment.content}
          </CommentContent>
        ))}
        <CommentForm>
          <CommentInput
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <CommentButton onClick={commentWrite}>댓글 작성</CommentButton>
        </CommentForm>
      </CommentContainer>
    </PostContainer>
  );
};

export default Post;

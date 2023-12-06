import React, { useEffect, useState } from "react";
import {
  PostTitle,
  PostContent,
  PostFooter,
  PostDate,
  PostButton,
  CommentContainer,
  CommentContent,
  CommentButton,
  ReplyFormContainer,
  ReplyInput,
  ReplyButton,
} from "../../style/PostRoomStyle";
import { PostContainer, PostSection } from "../../style/CommunityPostStyle";
import AxiosApi from "../../axios/CommunityAxios";

const Post = ({ title, content, date, id }) => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});

  useEffect(() => {
    const postList = async () => {
      try {
        const response = await AxiosApi.getCommunityDetail(id);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    postList();
  }, [id]);

  const Comment = ({ content, children, onReply }) => {
    return (
      <CommentContainer>
        <CommentContent>{content}</CommentContent>
        <CommentButton onClick={onReply}>답글 달기</CommentButton>
        {children}
      </CommentContainer>
    );
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
  const reply = (parentId) => {
    const replyContent = prompt("답글을 입력하세요.");
    setComments([...comments, { parentId, content: replyContent }]);
  };
  return (
    <PostContainer>
      <PostSection>
        <PostTitle>{post.title}</PostTitle>
        <PostContent>{post.content}</PostContent>
        <PostFooter>
          <PostDate>{post.date}</PostDate>
          <PostButton>Read More</PostButton>
        </PostFooter>
      </PostSection>
    </PostContainer>
  );
};

export default Post;

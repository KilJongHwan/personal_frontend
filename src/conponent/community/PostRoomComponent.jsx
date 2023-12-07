import React, { useEffect, useState } from "react";
import {
  PostTitle,
  PostContent,
  PostFooter,
  PostDate,
  CommentContainer,
  CommentContent,
  ReplyFormContainer,
  ReplyInput,
  ReplyButton,
} from "../../style/PostRoomStyle";
import { PostContainer, PostSection } from "../../style/CommunityPostStyle";
import AxiosApi from "../../axios/CommunityAxios";
import { useParams } from "react-router-dom";
import Common from "../../utils/common";
import CommunityRankComponent from "./CommunityRankComponent";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const [newComment, setNewComment] = useState("");

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
      <PostSection>
        <CommunityRankComponent />
        <PostTitle>{post.title}</PostTitle>
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        <PostFooter>
          <PostDate>{Common.timeFromNow(post.regDate)}</PostDate>
        </PostFooter>
        <div>
          {comments.map((comment) => (
            <div key={comment.commentId}>{comment.content}</div>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={commentWrite}>댓글 작성</button>
        </div>
      </PostSection>
    </PostContainer>
  );
};

export default Post;

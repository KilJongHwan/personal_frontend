import React from "react";
import {
  PostContainer,
  PostTitle,
  PostContent,
  PostFooter,
  PostDate,
  PostButton,
} from "../../style/PostRoomStyle";
import { PostSection } from "../../style/CommunityPostStyle";

const Post = ({ title, content, date }) => {
  return (
    <PostContainer>
      <PostSection>
        <PostTitle>{title}</PostTitle>
        <PostContent>{content}</PostContent>
        <PostFooter>
          <PostDate>{date}</PostDate>
          <PostButton>Read More</PostButton>
        </PostFooter>
      </PostSection>
    </PostContainer>
  );
};

export default Post;

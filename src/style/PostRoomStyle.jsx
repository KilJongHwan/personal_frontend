import styled from "styled-components";

export const PostTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const PostContent = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostDate = styled.span`
  font-size: 14px;
  color: #999;
`;

export const PostButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export const CommentContainer = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const CommentContent = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const CommentButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ReplyFormContainer = styled.div`
  margin-left: 20px;
`;

export const ReplyInput = styled.input`
  width: 70%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const ReplyButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

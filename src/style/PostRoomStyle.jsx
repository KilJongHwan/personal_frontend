import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  padding: 0px 21.6px 0px 36px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

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

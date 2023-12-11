import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: column;
  padding: 0px 21.6px 0px 36px;
  flex: 1 0 0;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  /* padding: 1em; */
  border-bottom: 1px solid #ccc;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
  font-size: 1em;
  color: #666;
`;

export const PostDate = styled.span`
  font-size: 0.8em;
  color: #999;
  padding: 1em;
`;

export const PostViews = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: flex-end;
  font-size: 1em;
  color: #999;
`;
export const PostBody = styled.div`
  width: 100%;
  padding: 20px;
  margin: 20px;
`;
export const PostTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #333;
  padding: 1em;
`;

export const PostContent = styled.div`
  font-size: 1em;
  color: #666;
  word-wrap: break-word;
  overflow: auto;
  line-height: 1.5;
  padding: 1em 0;
`;

export const PostVotes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`;

export const PostUpvote = styled.button`
  padding: 0.5em;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-right: 0.5em;
  &:hover {
    background-color: #0056b3;
  }
`;

export const PostDownvote = styled.button`
  padding: 0.5em;
  border: none;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;
export const CommentContainer = styled.div`
  position: relative;
  border-top: 2px solid #66baff;
  margin-top: 2em;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Malgun Gothic", "맑은 고딕", arial, Dotum, 돋움, sans-serif;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  overflow: hidden;
  width: 100%;
  height: 38px;
  margin-top: 15px;
  font-size: 13px;
  color: #333;
`;

export const InformationContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Malgun Gothic", "맑은 고딕", arial, Dotum, 돋움, sans-serif;
  font-style: normal;
`;
export const SmallInput = styled.input`
  display: block;
  width: 20%;
  height: 30px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  background: transparent;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Malgun Gothic", "맑은 고딕", arial, Dotum, 돋움, sans-serif;
  font-style: normal;
`;

export const LargeInput = styled.textarea`
  display: block;
  width: 70%; // 원하는 폭으로 조정
  height: 100px; // 원하는 높이로 조정
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  background: transparent;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Malgun Gothic", "맑은 고딕", arial, Dotum, 돋움, sans-serif;
  font-style: normal;
`;
export const CommentContent = styled.p`
  font-size: 1em;
  text-align: center;
  color: #666;
  line-height: 1.5;
  padding: 1em 0;
  border: 0;
`;
export const FormContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1em;
`;
export const CommentForm = styled.form`
  display: block;
  padding: 12px;
  background: #fafafa;
  border-top: 2px solid #66baff;
  border-bottom: 2px solid #66baff;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Malgun Gothic", "맑은 고딕", arial, Dotum, 돋움, sans-serif;
`;

export const CommentButton = styled.button`
  display: block;
  width: 100px;
  height: 50px;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Malgun Gothic", "맑은 고딕", arial, Dotum, 돋움, sans-serif;
  font-style: normal;
  &:after {
    clear: both;
    display: block;
    visibility: hidden;
    content: "";
  }
`;
export const Dropdown = styled.select`
  width: 200px;
  height: 40px;
  margin: 10px;
  padding: 5px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

export const ReplyFormContainer = styled.div`
  margin-left: 20px;
`;

export const ReplyInput = styled.input`
  width: 70%;
  padding: 1em;
  margin-right: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const ReplyButton = styled.button`
  padding: 1em;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

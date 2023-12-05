import styled from "styled-components";
import ReactQuill from "react-quill"; // ES6

export const WriteContainer = styled.div`
  display: flex;
  padding: 0px 21.6px 0px 36px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  opacity: var(--, 1);
`;

export const WriteSection = styled.div`
  height: 1494.03px;
  align-self: stretch;
  opacity: var(--, 1);
`;

export const WriteHeading = styled.div`
  display: flex;
  width: 718.41px;
  padding-right: 614.04px;
  flex-direction: column;
  align-items: flex-start;
`;
export const WriteHeadingText = styled.p`
  width: 200px;
  max-width: 718.41px;

  color: #000;

  /* ground.buv.co.kr/Inter/Bold 21.6 */
  font-family: Inter;
  font-size: 21.6px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.8px; /* 133.333% */
`;

export const Line = styled.div`
  width: 718.41px;
  height: 2px;
  flex-shrink: 0;
  margin-bottom: 20px;
  border-top: 2px solid #66b9ff;

  opacity: var(--, 1);
`;
export const WriteBorder = styled.input`
  display: flex;
  width: 718px;
  padding: 10px 13px;
  align-items: center;
  border-radius: 7.2px;
  border-top: 1px solid #66baff;

  border-right: 1px solid #66baff;

  border-bottom: 1px solid #66baff;

  border-left: 1px solid #66baff;

  opacity: var(--, 1);

  background: #fff;
`;
export const StyledReactQuill = styled(ReactQuill)`
  .ql-container {
    margin-top: 20px;
    width: 100%;
    height: 600px;
    max-width: 745px;
    max-height: 500px;
    overflow-y: auto;
    border-radius: 7.2px;
    border-top: 1px solid #fbf4f4;
    border-right: var(--, 1px) solid #fbf4f4;
    border-bottom: var(--, 1px) solid #fbf4f4;
    border-left: var(--, 1px) solid #fbf4f4;
    opacity: var(--, 1);
    background: #fcf2f2;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
  .ql-toolbar {
    max-width: 745px;
    display: flex;
    flex-wrap: wrap; // 버튼들이 다음 줄로 넘어가지 않도록
    justify-content: flex-start; // 버튼들을 왼쪽에서부터 나열
  }
  .ql-toolbar .ql-formats {
    margin-right: 2px !important; // 버튼들 사이의 간격을 2px로
  }
`;

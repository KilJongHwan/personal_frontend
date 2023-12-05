import "react-quill/dist/quill.snow.css"; // import styles

import {
  CancelButton,
  Line,
  StyledReactQuill,
  WriteBorder,
  WriteButton,
  WriteContainer,
  WriteHeading,
  WriteHeadingText,
  WriteSection,
} from "../../style/CommunityPostWriteStyle";
import { useState } from "react";

const WriteComponent = () => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }], // 헤더 레벨을 드롭다운 메뉴로
      ["bold", "italic", "underline", "strike"], // 텍스트 스타일 버튼
      [{ color: [] }, { background: [] }], // 색상 선택을 드롭다운 메뉴로
      [{ font: [] }], // 폰트 선택을 드롭다운 메뉴로
      [{ align: [] }], // 정렬 선택을 드롭다운 메뉴로
      ["link", "image", "video"], // 링크, 이미지, 동영상 업로드 버튼
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      ["clean"], // 포맷 초기화 버튼
    ],
  };
  return (
    <>
      <WriteContainer>
        <WriteSection>
          <WriteHeading>
            <WriteHeadingText>게시글 작성</WriteHeadingText>
          </WriteHeading>
          <Line />
          <WriteBorder placeholder="제목을 입력해주세요." />
          <StyledReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
          />
          <CancelButton>
            <div className="front">취소</div>
            <div className="back">cancel</div>
          </CancelButton>
          <WriteButton>
            <div className="front">등록</div>
            <div className="back">submit</div>
          </WriteButton>
        </WriteSection>
      </WriteContainer>
    </>
  );
};

export default WriteComponent;

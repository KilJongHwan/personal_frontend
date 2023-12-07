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
import AxiosApi from "../../axios/CommunityAxios";
import { useNavigate } from "react-router-dom";

const WriteComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("test@email.com");
  const [category, setCategory] = useState(5);

  const navigate = useNavigate();

  const PostRegister = async () => {
    const communityDTO = {
      email: email,
      title: title,
      content: content,
      categoryId: category,
    };
    try {
      const response = await AxiosApi.communityPost(communityDTO);
      console.log(response.data);
      if (response.status === 200) {
        alert("게시글이 등록되었습니다.");
        navigate("/");
      }
    } catch (error) {
      alert("게시글 등록에 실패했습니다.");
    }
  };
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
          <WriteBorder
            placeholder="제목을 입력해주세요."
            onChange={(e) => setTitle(e.target.value)}
          />
          <StyledReactQuill
            value={content}
            onChange={(value) => setContent(value)}
            modules={modules}
          />
          <CancelButton>
            <div className="front">취소</div>
            <div className="back">cancel</div>
          </CancelButton>
          <WriteButton onClick={PostRegister}>
            <div className="front">등록</div>
            <div className="back">submit</div>
          </WriteButton>
        </WriteSection>
      </WriteContainer>
    </>
  );
};

export default WriteComponent;

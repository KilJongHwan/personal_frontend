import "./App.css";
import { SuccessPage } from "./conponent/Mypage/SuccessComponent";
import StreamPlayer from "./conponent/stream/StreamPlayer";

import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/success" element={<SuccessPage />} />
          {/* 중첩 라우터로 커뮤니티 페이지안에 라우트를 연결해서 페이지안 컴포넌트만 변경 */}
          <Route path="/community/*" element={<CommunityPage />} />
          <Route path="/" element={<MyPage />} />
          <Route path="/stream" element={<StreamPlayer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

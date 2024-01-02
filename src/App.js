import "./App.css";
import { SuccessPage } from "./component/Mypage/SuccessComponent";
import StreamPlayer from "./component/stream/StreamPlayer";

import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import OtherPage from "./pages/OtherPage";
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
          <Route path="/communitypage/*" element={<CommunityPage />} />
          <Route path="/" element={<MyPage />} />
          <Route path="/stream" element={<StreamPlayer />} />
          <Route path="/otherpage/:email" element={<OtherPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

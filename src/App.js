import { store } from "./context/store";
import { Provider } from "react-redux";
import "./App.css";
import { SuccessPage } from "./component/Mypage/SuccessComponent";
import StreamPlayer from "./component/stream/StreamPlayer";

import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import OtherPage from "./pages/OtherPage";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterContext from "./context/FooterContext";
import { useState } from "react";

function App() {
  const [footerData, setFooterData] = useState([]);

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <FooterContext.Provider value={{ footerData, setFooterData }}>
          <Router>
            <Routes>
              <Route path="/success" element={<SuccessPage />} />
              {/* 중첩 라우터로 커뮤니티 페이지안에 라우트를 연결해서 페이지안 컴포넌트만 변경 */}
              <Route path="/communitypage/*" element={<CommunityPage />} />
              <Route path="/" element={<MyPage />} />
              <Route path="/stream" element={<StreamPlayer />} />
              <Route path="/otherpage/:email" element={<OtherPage />} />
              <Route path="/login" element={<LoginPage></LoginPage>} />
            </Routes>
          </Router>
        </FooterContext.Provider>
      </Provider>
    </>
  );
}

export default App;

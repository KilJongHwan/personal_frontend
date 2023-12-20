import "./App.css";
import { SuccessPage } from "./conponent/Mypage/SuccessComponent";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import GlobalStyle from "./style/GlobalStyle";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        {/* <CommunityPage /> */}
        <MyPage />
        <Routes>
          <Route path="/success" component={SuccessPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

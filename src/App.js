import "./App.css";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        {/* <CommunityPage /> */}
        <MyPage />
      </Router>
    </>
  );
}

export default App;

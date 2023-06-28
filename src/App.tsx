import { Route, Routes } from "react-router-dom";
import CoinExchange from "./pages/coin_exchange/CoinExchange";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import CoinData from "./pages/coin_detail/CoinData";
import CoinMap from "./pages/coin_map/CoinMap";
import CoinComparison from "./pages/coin_comparison/CoinComparison";
import DataDetail from "./pages/coin_detail/DataDetail";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";
import Member from "./pages/member/Member";
import Login from "./pages/member/Login";
import Join from "./pages/member/Join";
import Mypage from "./pages/mypage/MyPage";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline; 
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
html{
  font-size: 100%;
  scroll-behavior: smooth; 
}
body {   
  line-height: 1;
  font-family: "Pretendard",sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0;
	color: ${(props) => props.theme.textColor};
  width: 100%;
}
label{
  color : ${(props) => props.theme.labelColor};
}
input{
  background-color: ${(props) => props.theme.cardColor};
  border: 1px solid ${(props) => props.theme.inputBdColor};
  color: ${(props) => props.theme.inputTextColor};
}
select, button{  
  font-family: "Pretendard",sans-serif;
  background-color: ${(props) => props.theme.btnBgColor};
  color: ${(props) => props.theme.textColor};
  border:none;
}
option {
  font-family: "Pretendard",sans-serif;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color:inherit;
}
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
`;
const AppContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  padding: 0 3vw;
  position: relative;
`;
const AppInner = styled.div`
  width: 100%;
`;

function App() {
  const isDarkMode = useSelector(
    (state: { toggleMode: boolean }) => state.toggleMode
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <AppInner>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<CoinExchange />} />
              <Route path="/coin-map" element={<CoinMap />} />
              <Route path="/coin-detail" element={<CoinData />} />
              <Route path="/:coinId" element={<DataDetail />} />
              <Route path="/coin-comparison" element={<CoinComparison />} />
            </Route>
            <Route path="/member" element={<Member />}>
              <Route path="login" element={<Login />}></Route>
              <Route path="join" element={<Join />}></Route>
            </Route>
            <Route path="/mypage" element={<Mypage />} />
          </Routes>
        </AppInner>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

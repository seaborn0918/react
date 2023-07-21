import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";

function BasicPage2(props) {
  return (
    <div>
      <Header title={'리액트로 만드는 부트스트랩5'}/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default BasicPage2;
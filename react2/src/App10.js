import React, {useContext} from 'react';

// 컨텍스트 생성
const ThemeContext = React.createContext('light');
const UserContext = React.createContext('Guest');

// 개발자 도구에 표시하기 위한 이름 설정
UserContext.displayName = 'UserContext';

function App10(props) {
  const {theme, signedInUser} = props;
  return (
    // 컨텍스트에 데이터 저장 시 Provider 사용해야 함
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        {/* 컨텍스트를 사용할 자손 컴포넌트 지정 */}
        <Layout/>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

// 부모 컴포넌트가 직접 전달한 데이터가 없으므로 props가 비었음
function Layout(props) {
  return (
    // 자식 컴포넌트 호출. 전달할 데이터 없음
    <Content/>
  );
}

// 부모 컴포넌트가 직접 전달한 데이터가 없으므로 props가 비었음
function Content(props) {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <ProfilePage theme={theme} user={user}/>
  );
}

function ProfilePage(props) {
  return(
    <div>
      <p>{props.theme}</p>
      <p>{props.user}</p>
    </div>
  )
}

export default App10;
import logo from './logo.svg';
import './App.css';
import BoardList from "./board/BoardList";
import BoardDetail from "./board/BoardDetail";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BoardWrite from "./board/BoardWrite";
import BoardEdit from "./board/BoardEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path={'/board'} element={<BoardList/>}></Route>
          <Route path={'/board/:boardIdx'} element={<BoardDetail/>}></Route>
          <Route path={'/board/write'} element={<BoardWrite/>}></Route>
          <Route path={'/board/edit/:boardIdx'} element={<BoardEdit/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
    ;
}

export default App;

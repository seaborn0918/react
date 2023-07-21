import React from "react";
import ReactDOM from "react-dom/client";

// jsx
// index.html 파일에서 id값이 'root'인 태그를 선택
const root = ReactDOM.createRoot(document.getElementById('root'));

// 리액트를 사용하여 화면을 그려줌
class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>제목</h1>
                <div>Hello {this.props.toWhat}</div>)
            </div>)
    }
}

// id값이 root인 태그에 아래의 내용을 그려줌
root.render(
    <Hello toWhat={"World"}/>
)
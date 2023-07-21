import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name={'리액트 시작하기'} price={20000}></Book>
            <Book name={'스프링부트 시작하기'} price={30000}></Book>
            <Book name={'mysql 시작하기'} price={40000}></Book>
        </div>
    )
}

export default Library;
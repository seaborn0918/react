import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Profile1(props) {
  // useParams() 훅을 사용하여 파라미터로 전달된 데이터를 모두 가져옴
  const profile = useParams();
  console.log(profile);

  const navi = useNavigate();
  const goPrev = () => navi(-1);
  const goNext = () => navi(1);
  const goAbout = () => navi('/pages/about');

  return (
    <div>
      <h1>Profile1 페이지</h1>
      <h3>파라미터1 : {profile.username}</h3>
      <h3>파라미터2 : {profile.age}</h3>
      <button type={'button'} className={'btn btn-dark me-2'} onClick={goPrev}>이전 페이지</button>
      <button type={'button'} className={'btn btn-dark me-2'} onClick={goNext}>다음 페이지</button>
      <button type={'button'} className={'btn btn-dark'} onClick={goAbout}>About 페이지</button>
    </div>
  )
}

export default Profile1;
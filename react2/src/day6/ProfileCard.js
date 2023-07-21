import React from 'react';
import Card from "./Card";

function ProfileCard(props) {

  return (
    // 부모 컴포넌트인 ProfileCard에서 자식 컴포넌트인 Card 호출
    // 자식 컴포넌트인 title, backgroundColor 속성에 데이터 전달
    // 컴포넌트 합성 기법 중 포함 방식을 통해서 자식 컴포넌트에 html 태그 전달
    <div>
      <Card title={'동글이'} backgroundColor={'#fbceb1'}>
        <p>고양이 동글</p>
        <p>동그란 동그리</p>
      </Card>

      <Card title={'우유'} backgroundColor={'Beige'}>
        <p>우유우유우유</p>
      </Card>
    </div>
  )
}

export default ProfileCard;
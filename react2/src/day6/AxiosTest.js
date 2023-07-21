import React, {useEffect} from 'react';
import axios from "axios";

function AxiosTest(props) {

  useEffect(() => {
    axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230719')
      .then(req => {
        alert('통신 성공');
        console.log(req);

        const list = req.data.boxOfficeResult.dailyBoxOfficeList;

        for (let i = 0; i < list.length; i++) {
          console.log(`
            순번 : ${list[i].rnum}
            순위 : ${list[i].rank}          
            제목 : ${list[i].movieNm}
            개봉일 : ${list[i].openDt}
            관람객 : ${list[i].audiAcc}
          `);
        }


      })
      .catch(err => {
        alert('통신 실패');
        console.log(err);
      });
  }, []);

  return (
    <div>
    </div>
  )
}

export default AxiosTest;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { StyledHomePage } from './style';
import { axiosApi } from '../../consts/axios';
import { restListAtom } from '../../atom/restListAtom';
import { Bedge } from '../../components/Bedge';

export type RestType = {
  [key: string]: string | null;
};

export const HomePage = () => {
  const navigate = useNavigate();
  const [restList, setRestList] = useRecoilState<RestType[]>(restListAtom);
  const [pageList, setPageList] = useState(Array.from({ length: 5 }, (v, i) => i + 1));
  const [pageActive, setPageActive] = useState(1);

  const onClickPage = (pageNum: number) => {
    getRestList(pageNum);
  };

  // 휴게소 리스트
  const getRestList = async (page: number) => {
    try {
      // let data: FoodList[] = [];
      // let count = 1;
      // for (let i = 1; i <= count; i++) {
      // // 휴게소 전체
      //   const res = await axiosApi.get(
      //     `/openapi/restinfo/restThemeList?key=6761444832&type=json&pageNo=${i}&numOfRows=99`
      //   );
      //   count = res.data.pageSize;
      //   data.push(...res.data.list);
      // }
      // setRestList(data);

      const res = await axiosApi.get(
        `/openapi/restinfo/restThemeList?key=6761444832&type=json&pageNo=${page}&numOfRows=30`
      );
      setRestList(res.data.list);
      setPageActive(page);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRestList(1);
  }, []);

  return (
    <StyledHomePage>
      <div className="banner-container">
        <div className="inner">
          <p className="sec-title">전국 고속도로 휴게소 정보</p>
          <p className="sec-info">휴게소 편의 시설과 추천 음식을 간편하게 조회하세요.</p>
        </div>
      </div>

      <div className="rest-list-container">
        <div className="inner">
          <ul>
            {restList.map((item, idx) => (
              <li className="rest-list" key={idx}>
                <div onClick={() => navigate('/detail', { state: { codeNum: item.stdRestCd } })}>
                  <Bedge name={item.routeNm} />
                  <p className="rest-name">{item.stdRestNm}</p>
                  <p className="rest-address">{item.svarAddr}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="page-container">
            <button onClick={() => onClickPage(pageActive > 1 ? pageActive - 1 : 1)}>이전</button>
            {pageList.map((item) => (
              <button key={item} onClick={() => onClickPage(item)} className={item === pageActive ? 'active' : ''}>
                {item}
              </button>
            ))}
            <button onClick={() => onClickPage(pageActive < 5 ? pageActive + 1 : 5)}>다음</button>
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};

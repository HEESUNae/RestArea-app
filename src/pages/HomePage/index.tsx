import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { StyledHomePage } from './style';
import { axiosApi } from '../../consts/axios';
import { restListAtom } from '../../atom/restListAtom';

type RestType = {
  [key: string]: string | null;
};

export const HomePage = () => {
  const [restList, setRestList] = useRecoilState<RestType[]>(restListAtom);

  const [pageList, setPageList] = useState(Array.from({ length: 5 }, (v, i) => i + 1));
  const [pageActive, setPageActive] = useState(1);

  const onClickPage = (pageNum: number) => {
    getRestList(pageNum);
  };

  // 휴게소 전체
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

  // 휴게소 편의 시설
  const getFacilityList = async (code: string) => {
    try {
      const res = await axiosApi.get(
        `/openapi/restinfo/restConvList?key=6761444832&type=json&numOfRows=99&pageNo=1&stdRestCd=${code}`
      );
      return res.data.list;
    } catch (e) {
      console.log(e);
    }
  };

  // 휴게소 추천 음식
  const getFoodList = async (code: string) => {
    try {
      const res = await axiosApi.get(
        `/openapi/restinfo/restBestfoodList?key=6761444832&type=json&numOfRows=99&pageNo=1&recommendyn=Y&stdRestCd=${code}`
      );
      return res.data.list;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRestList(1);
    getFacilityList('000007');
    getFoodList('000007');
    // getFoodList();
  }, []);

  return (
    <StyledHomePage>
      <div className="banner-component">
        <div className="inner">
          <p className="sec-title">전국 고속도로 휴게소 정보</p>
          <p className="sec-info">휴게소 편의 시설과 추천 음식을 간편하게 조회하세요.</p>
        </div>
      </div>

      <div className="rest-list-component">
        <div className="inner">
          <ul>
            {restList.map((item, idx) => (
              <li className="rest-list" key={idx}>
                <a href="">
                  <div className="bedge">{item.routeNm}</div>
                  <p className="rest-name">{item.stdRestNm}</p>
                  <p className="rest-address">{item.svarAddr}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="page-component">
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

      {/* <div key={idx}>
          <div>{item.routeNm}</div>
          <strong>
            {item.stdRestNm}
            <span>{item.svarAddr}</span>
          </strong>
          {/* <p>{item.detail}</p> 
        </div> */}

      {/* <p>휴게소 추천 음식</p>
      <ul>
      {foodList.map((item, idx) => (
        <li key={idx}>
        <p>{item.foodNm}</p>
        <p>{item.etc}</p>
        <p>{item.stdRestNm}</p>
        <p>{item.svarAddr}</p>
        </li>
        ))}
      </ul> */}
    </StyledHomePage>
  );
};

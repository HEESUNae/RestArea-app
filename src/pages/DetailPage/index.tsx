import { useEffect, useState } from 'react';
import { StyledDetailPage } from './style';
import { useRecoilValue } from 'recoil';
import { restListAtom } from '../../atom/restListAtom';
import { useLocation, useNavigate } from 'react-router-dom';
import { RestType } from '../HomePage';
import { axiosApi } from '../../consts/axios';
import { Bedge } from '../../components/Bedge';
import { PrimaryBtn } from '../../components/Button/PrimaryBtn';
import { Preloader } from '../../components/Preloader';
import { KakaoMap } from '../../components/Map';

export const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const restList = useRecoilValue(restListAtom);
  const DetailCodeNum = location.state.codeNum;
  const [loading, setLoading] = useState(true);
  const [restDetail, setRestDetail] = useState<RestType>({});
  const [facilityList, setFacilityList] = useState<RestType[]>([]);
  const [foodList, setFoodList] = useState<RestType[]>([]);

  // 디테일 컨텐츠 셋팅
  const setDetailContent = async () => {
    setLoading(true);
    const targetList = restList.filter((item: RestType) => item.stdRestCd === DetailCodeNum);
    setRestDetail(targetList[0]);
    await getFacilityList(DetailCodeNum);
    await getFoodList(DetailCodeNum);
    setLoading(false);
  };

  // 휴게소 편의 시설
  const getFacilityList = async (code: string) => {
    try {
      const res = await axiosApi.get(
        `/openapi/restinfo/restConvList?key=${process.env.REACT_APP_REST_API}&type=json&numOfRows=99&pageNo=1&stdRestCd=${code}`
      );
      setFacilityList(res.data.list);
    } catch (e) {
      console.log(e);
    }
  };

  // 휴게소 추천 음식
  const getFoodList = async (code: string) => {
    try {
      const res = await axiosApi.get(
        `/openapi/restinfo/restBestfoodList?key=${process.env.REACT_APP_REST_API}&type=json&numOfRows=99&pageNo=1&recommendyn=Y&stdRestCd=${code}`
      );
      setFoodList(res.data.list);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setDetailContent();
  }, []);

  return (
    <StyledDetailPage>
      {loading ? (
        <Preloader />
      ) : (
        <div className="inner">
          <div className="detail-container">
            {/* 제목 */}
            <div className="rest-subject">
              <Bedge name={restDetail.routeNm} />
              <h2>{restDetail.stdRestNm}</h2>
              <p className="rest-address">{restDetail.svarAddr}</p>
            </div>

            {/* 컨텐츠 */}
            <div className="detail-contents">
              <div className="rest-content">
                <div className="rest-info">
                  <p>{restDetail.detail}</p>
                  <p className="date">{restDetail.lsttmAltrDttm}</p>
                </div>
                {/* 편의시설 */}
                <div className="rest-facility">
                  <p className="title">휴게소 편의 시설</p>
                  <ul>
                    {facilityList.length > 0
                      ? facilityList.map((item) => (
                          <li key={item.psCode}>
                            <strong>
                              {item.psName} <span>{item.psDesc ? '- ' + item.psDesc : ''}</span>
                            </strong>
                          </li>
                        ))
                      : '편의시설이 없습니다'}
                  </ul>
                </div>
              </div>
              {/* 지도 */}
              <div className="rest-map">
                <KakaoMap address={restDetail.svarAddr} title={restDetail.stdRestNm} />
              </div>
            </div>
          </div>

          {/* 추천음식 */}
          <div className="rest-food">
            <p className="title">휴게소 추천 음식</p>
            <ul>
              {foodList.length > 0
                ? foodList.map((item) => (
                    <li key={item.seq}>
                      <p className="title">{item.foodNm}</p>
                      <p className="food-etc">{item.etc}</p>
                      <p> ₩ {item.foodCost} 원</p>
                    </li>
                  ))
                : '추천 음식이 없습니다.'}
            </ul>
          </div>

          <div className="btn-container">
            <PrimaryBtn onClick={() => navigate(-1)}>목록으로</PrimaryBtn>
          </div>
        </div>
      )}
    </StyledDetailPage>
  );
};

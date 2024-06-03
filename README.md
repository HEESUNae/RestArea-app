## EX 고속도로 휴게소 홈페이지

[고속도로 공공데이터 포털](https://data.ex.co.kr/dataset/datasetList/list?pn=0&serviceType=OPENAPI&CATEGORY=BU&GROUP_TR=&searchDayFrom=2014.12.01&searchDayTo=2024.06.03&keyWord=) 에서 무료 Open API를 사용하여 고속도로 휴게소 정보 (편의시설, 추천정보) 를 조회할 수 있는 홈페이지.

### 작업내용

- [x] 전체 150 개의 홈페이지 리스트를 맵핑하여 1페이지당 30개씩 표출
- [x] 페이지 로드시 preloader 추가
- [x] 휴게소 정보, 편의시설, 추천음식 API 연동
- [x] 카카오 지도로 휴게소 위치 표츌 (입력된 주소가 올바르지 않아 표출이 정상적으로 되지않는 경우 발생)

### 기술스택

React, TypeScript, React-persist, Axios, Styled-components, Recoil, Kakao Map API

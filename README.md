<img width="705" alt="스크린샷 2020-12-14 오전 10 29 40" src="https://user-images.githubusercontent.com/48787170/102030752-46dc6f00-3df7-11eb-9364-89a1eb9b9261.png">

# Project - miniVIBE

> [NAVER VIBE](https://vibe.naver.com)를 클론하고,<br>
> 프로덕트의 UI/UX 향상, 이용자 행동 패턴 분석을 위한 사용자 이벤트를 수집하는 프로젝트<br>
> 부스트캠프 2020의 마지막 프로젝트로, WEB과 iOS가 협업하여 만들어낸 결과물

# WE ARE...

| 김민지 🕸 | 임지영 🕸 | 조정혜 🕸 | 조수정 🍎 | 홍동현 🍎 |
| -------- | -------- | -------- | -------- | -------- |
| <img width = 150 src = "https://i.imgur.com/STZ2UlQ.jpg"> | <img width = 150 src = "https://i.imgur.com/PLoZjoe.png"> | <img width = 150 src = "https://i.imgur.com/xQTVV3P.jpg"> | <img width = 150 src = "https://i.imgur.com/nEQpoCy.jpg"> | <img width = 150 src = "https://i.imgur.com/Jyw4DlC.png"> |
| [@mingd1023](https://github.com/mingd1023) | [@YimJiYoung](https://github.com/YimJiYoung) | [@Jeonghae10](https://github.com/Jeonghae10) | [@Sueaty](https://github.com/Sueaty) | [@TTOzzi](https://github.com/TTOzzi) |
|열심히 살자!!|집이 좋아 집순이|열냥이집사|스위리|또치|

# Collecting EVENTS

VIBE는 사용자의 음악 선호도 파악, 사용성 개선, 마케팅 등 다양한 목적으로 이벤트를 수집합니다.
miniVIBE 는 재생관련 이벤트와 비재생관련 **이벤트를 구분**하고
이벤트 **발생 시점을 정의**한 후 서버에게 보내질 **parameter**를 정합니다.

**예시** ---  [더 많은 목록 보러 가기🚀](https://docs.google.com/spreadsheets/d/1W8KAX4EZOb9gnNZEmdInBkUq_hEJURIaaHXE8MtaS4E/edit#gid=0)

|Event Name| Automatically Triggered When... | Parameters |
| -------- | -------- | -------- |
| Search   | 검색 탭에서 특정 검색어를 검색하였을 때 | event_id / user_id / timestamp / component_id / text   |

# miniVIBE In-Depth

| In-Depth | WEB 🕸 | iOS 🍎 |
| -------- | -------- | -------- |
| 기술스택 In-Depth     | [바로가기]()     | [바로가기]()     |
| 기술 특﹒장점 In-Depth     | [바로가기]()     | [바로가기]()     |
| 기능 In-Depth     | [바로가기](https://github.com/boostcamp-2020/Project01-B-User-Event-Collector#minivibe---web)     | [바로가기](https://github.com/boostcamp-2020/Project01-B-User-Event-Collector#minivibe---ios)     |
| 체험해보기     | [바로가기](http://mini-vibe.kro.kr)   | [기능 In-Depth]()  |


## miniVIBE - WEB 기능 In-Depth

## miniVIBE - iOS 기능 In-Depth
### 화면 별 표시할 정보 서버로부터 가져오기

| 예시 : TODAY 화면 | 설명 |
| --------  | -------- |
| <img width = 200 src = "https://i.imgur.com/Ijz99Ro.gif">| 1. 주어진 API의 JSON 구조에 맞게 JSONDecoder를 사용하여<br>원하는 타입으로 변환 후 뷰에 적용<br>2. 화면마다 또는 섹션마다 알맞은 스크롤 방향 설정<br>(Vertical / Horizontal) |

### 현재 재생목록에 Track 추가

| 현재 재생목록에 track 추가 | 설명 |
| --------  | -------- |
| <img width = 200 src = "https://i.imgur.com/HaxB2sL.gif">| 1. 재생을 원하는 곡을 선택하면 현재 재생목록 상단에 추가되고 재생 순서가 변경 됨<br> 2. 현재 재생목록은 플레이어를 열어 확인 가능 |

### 플레이어

| 플레이어 | 설명|
|-------- |-------- |
| <img width = 200 src = "https://i.imgur.com/pjG3KCV.gif">| 1. 재생/일시정지 가능 및 재생 상태에 따른 UI 변경<br>(자켓 사진의 변화, 가사 미리보기)<br>2. 재생 시 가사보기 가능<br>3. 특정 트랙에 좋아요/좋아요 취소<br>(트랙에 대한 평가는 '보관함'에 적용 됨.)<br>4. 현재 재생목록에 있는 트랙의 재생 순서 변경 및 목록에서 제거 가능 |

### 발생한 이벤트 전송

사전에 정의 된 이벤트가 발생할 경우 필요한 정보를 담아 서버에 전송<br>
인터넷 연결성을 확인하여 인터넷이 연결된 상태일 경우에는 바로 서버에 전송되고<br>
연결 상태가 아닐 경우 Core Data에 임시 저장되어 있다 연결이 회복되었을 경우 네트워크에 전송
| 서버로 보내진 이벤트 로그 웹 Admin에서 확인하기 |
|-------- |
|![](https://i.imgur.com/3mrP6nU.png)|





# 프로젝트 소개

<img width="705" alt="스크린샷 2020-12-14 오전 10 29 40" src="https://user-images.githubusercontent.com/48787170/102030752-46dc6f00-3df7-11eb-9364-89a1eb9b9261.png">

**Project miniVIBE는**
뮤직 웹앱 [NAVER VIBE](https://vibe.naver.com)를 클론하고,
프로덕트의 사용성 향상, 이용자 행동 패턴 분석을 위한 사용자 이벤트를 수집하는 프로젝트입니다

### [여기](http://mini-vibe.kro.kr)를 클릭하시면 miniVIBE Web으로 이동합니다🙌🏻

# 기능 소개

### 👀 사용자 이벤트 수집

VIBE는 사용자의 음악 선호도 파악, 사용성 개선, 마케팅 등 다양한 목적으로 이벤트를 수집합니다.
이에, 다음과 같이 이벤트의 종류를 도출 후 구현했습니다.  [더 많은 목록 보러 가기🚀](https://docs.google.com/spreadsheets/d/1W8KAX4EZOb9gnNZEmdInBkUq_hEJURIaaHXE8MtaS4E/edit?usp=sharing)

![https://i.imgur.com/WUBy7Ob.png](https://i.imgur.com/WUBy7Ob.png)

이벤트 예시

전체 동작

- DB에 저장되어 있는 콘텐츠를 각 페이지에서 조회
- 각 콘텐츠(매거진, 앨범, 트랙, 아티스트)를 클릭하여 각 상세 페이지로 이동
- 나만의 플레이리스트 생성
- 각 콘텐츠를 내 플레이리스트에 추가

보관함 

- 보관함에 내가 좋아한 트랙 / 플레이리스트 / 아티스트 / 앨범 저장
- 내 보관함에서 내가 좋아한 트랙 / 플레이리스트 / 아티스트 / 앨범 조회

뮤직 플레이어

- 트랙 / 앨범 / 플레이리스트 / 믹스테잎을 뮤직 플레이어 재생 목록에 추가
- 음원 재생을 제외한 뮤직 플레이어 기능

# 팀원 소개

<img width="731" alt="스크린샷 2020-12-14 오전 10 30 52" src="https://user-images.githubusercontent.com/48787170/102030812-755a4a00-3df7-11eb-8926-f703543484ee.png">


# 기술 스택

### WEB

![stack_w](https://user-images.githubusercontent.com/48787170/102030870-a3d82500-3df7-11eb-8bc3-92a80b976b33.png)

### iOS

![stack_i](https://user-images.githubusercontent.com/48787170/102030892-ac306000-3df7-11eb-9cce-63df365bc03e.png)

# 기술 특장점

### WEB

### Atomic Design & Storybook

- 주요 컴포넌트가 재사용되는 VIBE의 특성을 파악하여, 
아토믹 디자인 패턴으로 컴포넌트들을 설계하고 각 컴포넌트의 재사용성을 높였습니다.
- 수집 대상이 되는 중요한 이벤트들 역시 몇몇 특정한 컴포넌트에서 발생되기 때문에, 
아토믹 디자인 패턴은 이벤트 수집을 용이하게 합니다.
- 컴포넌트 구현 현황 확인과 테스트를 위해 모든 컴포넌트에 대해 story를 작성하여
Storybook을 활용하였습니다.

### 이벤트 수집 설계

- 각 이벤트를 수집하는 커스텀 훅을 구현하여
해당 이벤트를 발생시키는 컴포넌트에서 import 하여 간단히 사용할 수 있도록 설계했습니다.
- 중요성과 우선순위가 비교적 낮은 이벤트를 제외하고 
서비스 및 서비스의 수익성에 영향을 주는 이벤트를 중심으로 수집합니다.
- 각 이벤트의 분석 목적에 적합한 parameter들과 함께 로그로 남깁니다.
- 수집된 이벤트는 DB에 저장되어
사용자 음악 취향 파악 및 음원 수익 배분에 사용될 수 있습니다.
- 각 데이터의 특성을 고려하여 DB를 선택하였습니다.

### Mongo DB & MySQL

- 정형화된 트랙, 앨범, 플레이리스트, 아티스트 등의 데이터는 
관계형 데이터베이스인 MySQL에 저장합니다.
- 이벤트 수집이 사용자 경험에 영향을 미쳐서는 안 되므로, 
이벤트 삽입을 위해 빠른 삽입 연산을 지원하는 NoSQL인 Mongo DB를 선정했습니다.
- Mongo DB는 로그와 같은 비정형 데이터를 저장하기 유용한
JSON/Document 기반의 데이터베이스로도 적합합니다.
- Mongoose discriminator / schema를 적용하여 요청된 로그 데이터에 대해 
각 이벤트 타입에 맞는 구조의 데이터만 저장할 수 있도록 했습니다.

### Next.js

- React 환경에서 SSR을 지원하기 위해 사용하였습니다. Next.js를 사용하여 클라이언트에서 보다 쉽게 라우팅을 할 수 있습니다.
- SSR + code splitting을 통해 빠른 첫 페이지 로딩을 지원합니다.

### iOS

### SwiftUI

- 익숙한 UIKit에서 벗어나 **SwiftUI로만 뷰를 구성**하였습니다.
- 애플은 SwiftUI를 선보임에 재사용성을 특히 강조했습니다. (Reusable, parameterized views)
따라서, **뷰의 재사용성을 높이고**, extract 기능을 활용하여 **더 작은 단위로 나누고 나눠 구현**했습니다.
- SwiftUI에서 제공하는 Binding을 활용해 SwiftUI의 design principle 중 하나인 **Single Source of Truth**를 지켜 하나의 데이터를 참조하는 여러개의 뷰가 올바르게 그려지도록 구현했습니다.
- 다양한 기기들에서 레이아웃 대응을 하였습니다.
    - 시뮬레이터에서 매번 실행하지 않고도 SwiftUI가 제공하는 프리뷰 기능을 활용해 여러 프리뷰 디바이스를 그룹화 하여 동시에 확인할 수 있었습니다.
    - GeometryReader를 활용하여 SubView들의 크기를 설정했으므로 다양한 화면 크기 비율과 가로/세로 모드를 사용할 수 있습니다.
- **다크모드** 대응을 하였습니다. Color Asset 추가 및 System color를 사용하였고, 프리뷰에서 두 개의 모드를 동시에 확인하면서 구현했습니다.

### Combine

- Combine을 활용한 네트워크 통신과 같은 **비동기 이벤트를 처리**하였습니다.
- 단순히 Combine에만 한정된 것이 아닌, **함수형 Reactive Programming에서의 데이터 흐름에 대해 이해**하게 되었습니다.

### Core Data

- 기기가 **네트워크에 연결되지 않은 상태일 때** 수집한 이벤트 로그를 기기에 저장하도록 구현하였습니다.
- 앱을 재시작해도 현재 재생목록은 **최종  상태를 유지**하도록 구현하였습니다.

### MVVM 구조 & Test

![https://i.imgur.com/c9iNA1T.png](https://i.imgur.com/c9iNA1T.png)

- MVVM 구조로 구현하였습니다.
    - 네트워크 통신을 담당하는 `NetworkService`
    - `NetworkService`와 구체적 `EndPoint`를 활용해 서버에 요청을 보내고, 받아온 응답을 `ViewModel`이 필요로 하는 형태로 가공해주는 `UseCase`
    - `View`에서 발생하는 이벤트를 받아 `UseCase`를 통해 요청을 하고 `UseCase`에서 받아온 응답을 `View`를 그리는데 필요한 형태로 가공해주는 `ViewModel`
    - `ViewModel`과 바인딩되어 `ViewModel`의 `State`에 맞게 화면을 그리는 `View`
- **뷰와 로직을 분리**하여 뷰를 그리는 로직과 뷰에서 발생하는 이벤트에 대한 **테스트가 가능한 구조**로 구현하였습니다.
- 프로토콜로 각각의 **타입을 추상화**하고 **생성자를 통해 의존성을 주입**해주도록 구현하였습니다.
- 프로토콜을 채택한 원하는 결과를 반환하는 **모의 객체를 만들어 주입**해 실제 네트워크 통신이나, 뷰 없이 로직을 테스트하였습니다.

### 이벤트 로그 수집 프레임워크화

![https://i.imgur.com/tbBpwNe.png](https://i.imgur.com/tbBpwNe.png)

- **추상화된 이벤트 로그 타입들과 이벤트를 전송, 보관하는 객체의 구조를 프로토콜**로 제공합니다.
구체적인 데이터 구조는 사용자가 프로토콜을 채택하여 구현하게끔 하였습니다.
- 전체 이벤트를 관리하는 `EventLogger` 객체를 구체 타입으로 제공합니다.
`EventLogger`는 생성 시점에 `LocalStorageType`을 채택한 이벤트 로컬 저장 객체와, `ServerStorageType`을 채택한 이벤트 서버 전송 객체를 주입받아 사용합니다.
- [Reachability](https://github.com/ashleymills/Reachability.swift)를 활용해 기기의 네트워크 연결 상태를 확인하는 `ReachabilityObserver`를 구현하고, 이를 통해 로그를 서버로 전송할지, 로컬에 저장할지 결정합니다. 테스트 가능한 구조를 만들기 위해  `ReachabilityObserver`를 프로토콜로 추상화하여 `EventLogger`에 주입해주는 형태로 구현하였습니다.
- 특정 hostName을 넘겨 `ReachablityObserver`가 알맞은 상태값을 가지는지 테스트하고, `ReachabilityObserving` 을 채택한 모의 객체를 `EventLogger` 에 주입해서 네트워크의 상태에 맞게 로그를 전송, 저장하는지 테스트하였습니다.

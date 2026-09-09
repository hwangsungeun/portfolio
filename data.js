window.PORTFOLIO_PROJECTS = [
  {
    "id": "gurufin",
    "name": "Gurufin Wallet",
    "category": "WEB3 · FLUTTER",
    "period": "2025.10 — 현재",
    "company": "그루핀",
    "role": "차장 · Flutter 앱 전체 개발 및 배포",
    "desc": "자산 관리부터 DApp 연결, 보안과 운영까지. EVM·Cosmos를 하나의 모바일 경험으로 연결합니다.",
    "images": [
      "wallet",
      "garu-miner"
    ],
    "alt": [
      "Gurufin Wallet 자산 관리 화면",
      "Flame 기반 Garu Miner 리워드 게임 화면"
    ],
    "tags": [
      "Flutter",
      "Riverpod",
      "Reown WalletKit",
      "Shorebird"
    ],
    "context": "EVM·Cosmos 멀티체인 지갑의 Android·iOS 앱 전체를 담당했습니다. 토큰과 NFT부터 트랜잭션, 인증, KYC, 리워드까지 서로 연결되는 서비스 흐름을 개발했습니다.",
    "decisions": [
      [
        "서비스 구조",
        "Riverpod·Freezed·Repository 기반 MVVM으로 자산·인증·트랜잭션 상태를 관리하고, 대형 인증 ViewModel과 중복 블록체인 로직을 분리했습니다."
      ],
      [
        "연결과 복구",
        "WalletConnect의 앱 재실행 요청 복구, Relay 재연결, EVM·Cosmos·NFT 서명과 iOS 인앱 브라우저 연동을 안정화했습니다."
      ],
      [
        "키를 다루는 방식",
        "PIN·생체 인증, AES-GCM 보안 저장, 개인키 생명주기 관리와 민감정보 마스킹을 적용했습니다. 반복 Keychain 조회를 캐싱하고 키 파생 연산을 Isolate로 분리했습니다."
      ],
      [
        "출시 이후의 운영",
        "Google·Apple·Twitter 로그인, Firebase/ML Kit KYC, 6개 언어 국제화와 Shorebird OTA 환경을 구현했습니다. Flame 기반 Garu Miner와 출석·포인트·상점 기능도 개발했습니다."
      ]
    ],
    "outcome": "기존 1개였던 테스트 파일은 Git HEAD 기준 175개로 확대됐고, 이 중 171개를 본인 커밋으로 추가했습니다. 개인 비병합 커밋 150건 중 66건이 결함 수정·QA·안정화 작업입니다."
  },
  {
    "id": "mindhill",
    "name": "Mindhill",
    "category": "HEALTHCARE · FLUTTER",
    "period": "2024.09 — 2025.06",
    "company": "메가웍스",
    "role": "책임연구원 · Flutter Android·iOS 앱 전체 개발",
    "desc": "건강 기록과 심리상담을 한곳에서. 일상의 건강 데이터를 연결하는 크로스플랫폼 앱.",
    "images": [
      "mindhill",
      "mindhill-health"
    ],
    "alt": [
      "마인드힐 심리상담·스트레스 자가진단 화면",
      "마인드힐 건강 기록 화면"
    ],
    "tags": [
      "Flutter",
      "Dart",
      "Android",
      "iOS"
    ],
    "context": "마이데이터 기반 건강 데이터와 심리상담 기능을 제공하는 마인드힐 앱의 Android·iOS 전체 개발을 담당했습니다.",
    "decisions": [
      [
        "건강 데이터 기록",
        "마이데이터 기반 건강 데이터와 혈압계·인바디 등 건강 기록 기능을 구현했습니다."
      ],
      [
        "상담과 자가진단",
        "심리상담 예약 관리, 자가진단 설문조사와 관련 데이터 기록 기능을 개발했습니다."
      ]
    ],
    "outcome": "Flutter로 Android와 iOS 양쪽에서 건강 기록, 상담 예약, 자가진단 흐름을 구현했습니다."
  },
  {
    "id": "hanstyle",
    "name": "한스타일",
    "category": "COMMERCE · ANDROID",
    "period": "2022.08 — 2023.10",
    "company": "리앤한",
    "role": "차장 · Android 앱 전체 담당",
    "desc": "운영 중인 커머스를 이해하고, Android 네이티브 전환을 함께 진행했습니다.",
    "images": [
      "hanstyle",
      "hanstyle-curation"
    ],
    "alt": [
      "한스타일 리미티드 상품 소개 화면",
      "한스타일 큐레이션 소개 화면"
    ],
    "tags": [
      "Kotlin",
      "Hilt",
      "MVVM",
      "Paging3"
    ],
    "context": "한스타일 커머스의 Android 운영·개발을 담당하면서 기존 하이브리드 앱의 네이티브화 작업을 진행했습니다.",
    "decisions": [
      [
        "운영과 전환의 병행",
        "기존 서비스 운영과 Android Native 전환 작업을 병행했습니다."
      ],
      [
        "유지보수를 위한 구조",
        "Kotlin·Coroutines·Hilt·AAC 기반 MVVM 구조를 사용하고, Paging3·Retrofit2·OkHttp3 기반 페이징·네트워크 계층을 정리했습니다."
      ]
    ],
    "outcome": "커머스 운영 경험을 바탕으로 네이티브 전환과 앱 기능 유지보수를 담당했습니다."
  },
  {
    "id": "bithumb",
    "name": "빗썸라이브",
    "category": "LIVE COMMERCE · ANDROID",
    "period": "2022.04 — 2022.08",
    "company": "빗썸라이브",
    "role": "테크본부 파트장 · Android 개발 파트장",
    "desc": "실시간 방송과 쇼핑이 만나는 앱. 운영과 신규 개발을 이끄는 Android 파트장.",
    "images": [
      "bithumb"
    ],
    "alt": [
      "빗썸라이브 라이브 커머스 소개 화면"
    ],
    "tags": [
      "Kotlin",
      "Hilt",
      "ExoPlayer2",
      "Firebase"
    ],
    "context": "Android 개발 파트장으로 기존 빗썸라이브 커머스의 운영·개발과 신규 Android 앱 개발을 진행했습니다.",
    "decisions": [
      [
        "라이브와 커머스",
        "ExoPlayer2와 Firebase를 활용해 동영상 재생, 실시간 방송 흐름과 커머스 기능을 앱 구조 안에서 통합했습니다."
      ],
      [
        "Android 파트 리딩",
        "Kotlin·Coroutines·Hilt·AAC 기반 기술 구성을 사용해 Android 개발 파트를 담당했습니다."
      ]
    ],
    "outcome": "기존 서비스 운영과 신규 커머스 개발을 함께 수행한 파트 리딩 경험입니다."
  },
  {
    "id": "ppop",
    "name": "PPOP",
    "category": "MEDIA · ANDROID",
    "period": "2021.07 — 2022.04",
    "company": "피팝코리아",
    "role": "차장/팀장 · Android 전체 개발",
    "desc": "사연이 음악이 되기까지. 제작 요청부터 완성된 음원의 스트리밍까지 연결했습니다.",
    "images": [
      "ppop",
      "ppop-player"
    ],
    "alt": [
      "PPOP 뮤직 플레이어 화면",
      "PPOP 동영상 플레이어 화면"
    ],
    "tags": [
      "Kotlin",
      "Koin",
      "ExoPlayer2",
      "Coroutines"
    ],
    "context": "스트리밍 뮤직 플레이어와 동영상 플레이어를 포함한 PPOP Android 앱 전체를 개발했습니다.",
    "decisions": [
      [
        "제작 과정의 연결",
        "무료·유료 음악 제작 요청, 제작 과정 노출, 제작 완료 음원 업로드 흐름을 구현했습니다."
      ],
      [
        "미디어 처리",
        "사연 신청 시 동영상 업로드의 썸네일 자동 추출과 음악·동영상 재생 기능을 구현했습니다."
      ]
    ],
    "outcome": "음악을 요청하고, 제작 과정을 확인하고, 완성된 콘텐츠를 감상하는 흐름을 하나의 앱으로 구현했습니다."
  },
  {
    "id": "rebless",
    "name": "rebless",
    "category": "IOT · ROBOTICS",
    "period": "2020.10 — 2021.04",
    "company": "에이치로보틱스",
    "role": "선임연구원/팀장 · Android 전체 개발",
    "desc": "재활 장치와 스마트폰을 연결하고, 운동과 원격진료 경험으로 확장했습니다.",
    "images": [
      "rebless"
    ],
    "alt": [
      "rebless 일일 재활 목표 설정 소개 화면"
    ],
    "tags": [
      "Kotlin",
      "RxBluetooth",
      "Socket",
      "AWS Chime"
    ],
    "context": "모터 기반 재활운동 장치를 스마트폰에서 제어하는 IoT 앱과 원격진료 앱 개발을 담당했습니다.",
    "decisions": [
      [
        "하드웨어 연결",
        "재활운동 장치와 스마트폰을 Wi-Fi로 연동하고 Bluetooth·Socket 통신을 구현했습니다."
      ],
      [
        "원격진료 연계",
        "AWS Chime 기반 원격진료 기능을 개발해 IoT 재활 서비스와 비대면 진료 흐름을 연계했습니다."
      ]
    ],
    "outcome": "기기 제어와 운동을 지원하는 Android 앱 전체 개발, 원격진료 앱 개발 참여 경험을 쌓았습니다."
  },
  {
    "id": "michael",
    "name": "마이클 & 파트너스",
    "category": "MOBILITY · ANDROID",
    "period": "2019.06 — 2020.08",
    "company": "마카롱팩토리",
    "role": "과장 · Android 앱 개발",
    "desc": "운전자와 정비 업체, 양쪽의 흐름을 연결하는 차량 관리 서비스.",
    "images": [
      "michael",
      "michael-partners"
    ],
    "alt": [
      "마카롱(마이클) 차계부 홈 화면",
      "마카롱 파트너스 예약 시간 설정 화면"
    ],
    "tags": [
      "Kotlin",
      "RxKotlin",
      "Realm",
      "Lottie"
    ],
    "context": "차계부 앱 마카롱(마이클)과 파트너스 업주 앱의 Android 개발을 담당했습니다.",
    "decisions": [
      [
        "운전자 경험",
        "현대·기아 커넥티드카 연동, 주유 문자 자동 인식, 사고·주행·정비 기록, 엔진오일·타이어 예약 및 구매 기능을 개발했습니다."
      ],
      [
        "파트너의 운영",
        "예약 접수·확정·서비스 완료, 날짜·시간별 예약 제한, 리뷰·통계·업체 정보 관리 기능을 개발했습니다."
      ],
      [
        "인터랙션 제안",
        "Lottie 도입을 제안하고 앱 전반에 애니메이션 효과를 적용했습니다."
      ]
    ],
    "outcome": "운전자의 차량 관리와 파트너 업체의 예약 운영을 함께 이해하며 앱 기능을 개발했습니다."
  },
  {
    "id": "musicx",
    "name": "MusicX",
    "category": "AUDIO · DEVICE CONTROL",
    "period": "2018.12 — 2019.05",
    "company": "Novatron",
    "role": "과장 · Android 신규 앱 설계 및 개발",
    "desc": "오디오 장비의 재생 상태와 플레이리스트를 실시간으로 제어하는 앱.",
    "images": [
      "musicx"
    ],
    "alt": [
      "MusicX 오디오 장비 재생 제어 화면"
    ],
    "tags": [
      "Kotlin",
      "Socket",
      "HTTP",
      "Navigation"
    ],
    "context": "Wi-Fi로 오디오 장비와 연결하는 신규 MusicX Android 앱의 설계와 개발을 담당했습니다.",
    "decisions": [
      [
        "실시간 상태 제어",
        "플레이리스트와 현재 재생 정보처럼 실시간 반영이 필요한 영역은 Socket 통신으로 구현했습니다."
      ],
      [
        "통신 역할 분리",
        "일반 데이터는 HTTP로 분리 처리했습니다. 오디오 장비를 제어하는 구조로, 앱 자체의 음원 스트리밍은 제외됩니다."
      ]
    ],
    "outcome": "데이터 특성에 맞춰 Socket과 HTTP의 역할을 나눈 장비 연동 플레이어를 개발했습니다."
  },
  {
    "id": "visitkorea",
    "name": "VisitKorea",
    "category": "TOURISM · LOCATION",
    "period": "2017.06 — 2018.12",
    "company": "두유비",
    "role": "과장 · Android 앱 전체 개발",
    "desc": "위치와 관광 정보를 연결하는 한국관광공사 앱의 리뉴얼과 유지보수.",
    "images": [
      "visitkorea"
    ],
    "alt": [
      "VisitKorea 관광 정보 소개 화면"
    ],
    "tags": [
      "Android",
      "Location",
      "Beacon",
      "Maps"
    ],
    "context": "한국관광공사 VisitKorea 앱의 리뉴얼과 유지보수를 진행했습니다.",
    "decisions": [
      [
        "관광 정보와 위치",
        "관광 정보, 위치 기반 기능, 비콘과 지도 기능을 개발했습니다."
      ],
      [
        "다국어 서비스",
        "다국어 관광 정보를 제공하는 앱의 리뉴얼과 유지보수를 담당했습니다."
      ]
    ],
    "outcome": "관광 정보를 사용자의 위치와 연결하는 Android 앱 개발 경험입니다."
  },
  {
    "id": "nest",
    "name": "NEST BKK",
    "category": "LOCATION · FULL STACK",
    "period": "2016.05 — 2016.12",
    "company": "PassionFruit",
    "role": "수석연구원 · Android 및 Backend 개발",
    "desc": "지도에 직접 그린 영역 안에서 매물을 찾는, 태국 부동산 서비스.",
    "images": [
      "nest"
    ],
    "alt": [
      "NEST BKK 지도에 영역을 그리는 검색 기능 소개 화면"
    ],
    "tags": [
      "Java",
      "Google Maps",
      "PHP",
      "MySQL"
    ],
    "context": "태국 부동산 서비스의 Android 앱과 Windows 기반 PHP·MySQL·Java 백엔드를 개발하고 태국 현지 테스트를 수행했습니다.",
    "decisions": [
      [
        "직접 그리는 검색",
        "지도 위에 사용자가 자유롭게 영역을 그리면 해당 폴리곤 안에 있는 매물만 조회하는 검색 기능을 구현했습니다."
      ],
      [
        "앱과 백엔드",
        "매물 등록·검색, 지도 정보와 로그인 등 Android 기능부터 백엔드까지 개발했습니다."
      ]
    ],
    "outcome": "앱부터 백엔드, 현지 테스트까지 서비스 전체 흐름을 직접 경험했습니다."
  }
];

import React, { useState } from "react";
import "./DetailPage.css";
import Header2 from "./components/header2/header2";
import Footer from "./components/footer/footer";
import BigTitleDetail from "./components/BigTitleDetail/BigTitleDetail";
import SmallCard from "./components/SmallCard/SmallCard";
import AllDetailPage from "./components/AllDetailPage/AllDetailPage";

function DetailPage(props) {
  const { detailPage, setDetailPage } = props;
  const [midDetailPage, setMidDetailPage] = useState("전체");
  const [underlinedIndex, setUnderlinedIndex] = useState(null);
  // 상세페이지 타이틀
  const fashionData = [
    "전체",
    "패션 트렌드",
    "패션 아이템",
    "셀러브리티 스타일",
    "패션 화보",
    "패션 뉴스",
    "워치&주얼리",
  ];

  const beautyData = [
    "전체",
    "뷰티 트렌드",
    "뷰티 아이템",
    "웰니스",
    "뷰티 화보",
  ];
  const cultureData = ["전체", "엔터테인먼트", "아트", "셀럽 뉴스"];
  const lifeStyleData = ["전체", "여행", "푸드", "리빙", "뷰 포인트"];

  const midDataObject = {
    fashionTitle: "트렌드",
    date: "2025.03.20",
    subTitle: "코모의 햇살 아래, 정해인의 '이탈리안 뷰티'",
    img:
      detailPage === "FASHION"
        ? "/img/fashionmid.webp"
        : detailPage === "BEAUTY"
        ? "/img/midImg2.webp"
        : detailPage === "LIFESTYLE"
        ? "/img/lifemid.webp"
        : detailPage === "CULTURE"
        ? "/img/culturemid.webp"
        : detailPage === "VIDEO"
        ? "/img/videomid.webp"
        : "/img/fashionmid.webp",
  };

  const imagePaths = [
    "/img/mid1.webp",
    "/img/mid2.webp",
    "/img/mid3.webp",
    "/img/mid4.webp",
    "/img/mid5.webp",
    "/img/mid6.webp",
    "/img/mid7.webp",
    "/img/mid8.webp",
    "/img/mid9.webp",
    "/img/mid10.webp",
    "/img/mid11.webp",
    "/img/mid12.webp",
    "/img/mid13.webp",
    "/img/mid14.webp",
    "/img/mid15.webp",
    "/img/mid16.webp",
    "/img/mid17.webp",
  ];

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
  }
  // 패션 데이터
  const fashionAllData = [
    {
      fashionTitle: "패션 트렌드",
      subTitle: "20년 전처럼 도도하게 가방 들기",
      date: "2025.03.21",
      author: "이소미, Alexandre Marain",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "올봄 안 입고는 못 배길 청바지, 스키니 부츠컷!",
      date: "2025.03.20",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "2025년 가장 우아하게 버뮤다 팬츠 입는 법",
      date: "2025.03.20",
      author: "김현유",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "일자바지 입을 땐 '이 슈즈'를 신으세요!",
      date: "2025.03.19",
      author: "황혜원, Lucrezia Malavolta",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "런웨이에서 입을 모아 제안한 탱크 톱과 '이 팬츠'",
      date: "2025.03.19",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "올봄 '이 옷'만큼은 전형적으로 입어야 합니다",
      date: "2025.03.19",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "봄옷이 고민이라면, 우선 재킷과 청바지를 꺼내세요",
      date: "2025.03.18",
      author: "안건호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "이제 봄마다 당연하게 꺼내 입어야 할 색",
      date: "2025.03.17",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 트렌드",
      subTitle: "곧 거리에서 '실제로' 보게 될 2025 봄/여름 트렌드 8",
      date: "2025.03.13",
      author: "이소미, Madeline Fass, Talia Abbas, Laura Jackson",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "몸짓이 우아해지는, 올봄 가냘픈 신발",
      date: "2025.03.21",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "미니멀 스타일이 지겹던 참이라면, '이 로고'에 주목해보세요",
      date: "2025.03.20",
      author: "안건호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "2025년에 가장 사랑받을 ‘잇 백’ 10",
      date: "2025.03.20",
      author: "김현유",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "방금 LA에서 돌아왔는데 모두가 '이 운동화'를 신고 있었습니다",
      date: "2025.03.20",
      author: "이소미, Daisy Jones",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "2025년 봄 '제철 셔츠'는 이것!",
      date: "2025.03.19",
      author: "안건호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "2025년에도 꺼지지 않는 '이 운동화' 열풍",
      date: "2025.03.19",
      author: "황혜원, Cortne Bonilla",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "올봄 스타일의 중심을 잡아줄 바지 5",
      date: "2025.03.18",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "올 봄과 여름, 청바지보다 유용할 치마 한 벌",
      date: "2025.03.14",
      author: "이소미, Selene Oliva",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "두고두고 입게 될, 가장 실속 있는 봄 치마",
      date: "2025.03.13",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "리본으로 감싼 동화 같은 샤넬 백의 등장!",
      date: "2025.03.12",
      author: "황혜원",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "올봄 신발장 깊숙이 보관하던 이 신발을 다시 꺼냅니다",
      date: "2025.03.12",
      author: "김현유, Paulina Berges",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 아이템",
      subTitle: "2025년 봄에는 긴 티셔츠에 '이 스커트'를 함께 입어야 합니다",
      date: "2025.03.12",
      author: "김현유, Paulina Berges",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "볼캡과 후디로 완성하는 실패 없는 조합",
      date: "2025.03.21",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "경쾌하고 발랄하게! 올봄 내내 입기 좋은 만능 패턴의 귀환",
      date: "2025.03.21",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "티모시 샬라메의 데님 재킷(Ft. 밥 딜런)",
      date: "2025.03.19",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "올봄 멋 부리고 싶은 날은 이모 조끼에 청바지!",
      date: "2025.03.18",
      author: "황혜원",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "앤 해서웨이의 운동화에 자꾸만 눈이 가는 이유",
      date: "2025.03.18",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "조나단 앤더슨의 엉뚱하고 근사한 로에베 셀럽 룩 모아보기",
      date: "2025.03.18",
      author: "이소미, Hannah Jackson, Christian Allaire",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "현대적인 백설공주가 선택한 드레스 룩은?",
      date: "2025.03.17",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle:
        "블랙 앤 화이트 대신, 색색의 봄 재킷! 3월 셋째 주의 패션 인스타그램",
      date: "2025.03.17",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "더 로우 올슨 자매처럼 우아한 봄 룩을 완성하는 비결 6",
      date: "2025.03.17",
      author: "이소미, Cortne Bonilla",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "2025년의 청바지는 '여기'가 찢어져야 합니다",
      date: "2025.03.14",
      author: "이소미, Selene Oliva",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "생 로랑 걸, 로제가 파리에서 보여준 룩 3",
      date: "2025.03.14",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀러브리티 스타일",
      subTitle: "로제와 지수, 리사, 차은우까지 파리에서 만난 셀럽들",
      date: "2025.03.13",
      author: "황혜원, Olivia Allen",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "고민시의 이상한 놀이",
      date: "2025.03.21",
      author: "권민지",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "CARPE DIEM!",
      date: "2025.03.21",
      author: "최보경",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "깃털처럼 가볍게, 샤넬처럼 자유롭게",
      date: "2025.03.21",
      author: "손기호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "뉴욕, 일관성, 감정과 케이트! 캐서린 홀스타인과 나눈 대화",
      date: "2025.03.20",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "코모의 햇살 아래, 정해인의 '이탈리안 뷰티'",
      date: "2025.03.20",
      author: "권민지",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "흐트러짐 없이, 강하고 빠르게 까르띠에!",
      date: "2025.03.19",
      author: "VOGUE",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "지수, 프린세스 디올",
      date: "2025.03.19",
      author: "손은영, 김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "필릭스의 봄",
      date: "2025.03.18",
      author: "권민지",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "봄날의 차은우",
      date: "2025.03.06",
      author: "남윤진",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "혜리의 완벽한 골프웨어 스타일링",
      date: "2025.03.05",
      author: "유정수",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "정해인의 이유 있는 자신감",
      date: "2025.03.05",
      author: "소희진",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 화보",
      subTitle: "일의 격을 아는 여자들",
      date: "2025.02.28",
      author: "손은영",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle:
        "예술가의 창의성을 지키는 안전한 피난처, 2025 포토보그 페스티벌 폐막",
      date: "2025.03.21",
      author: "황혜원, Caterina De Biasio",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle: "탑샵이 쏘아 올린 부활의 신호탄",
      date: "2025.03.21",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle: "셀린느가 선보이는 필라테스 컬렉션",
      date: "2025.03.21",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle:
        "“구식이고 시대에 뒤처진 것처럼 보이는 것들이 최고죠” 알레산드로 미켈레",
      date: "2025.03.21",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle: "“지방시는 곧 실루엣이에요” 사라 버튼",
      date: "2025.03.21",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle:
        "“회의 중에 휴대폰이 울려서 봤더니 톰 포드더군요” 하이더 아커만",
      date: "2025.03.21",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle: "“여성 스스로를 위한 즐거움을 창출하는 옷” 로렌조 세라피니",
      date: "2025.03.21",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle: "다니엘 리가 건넨 7일, 버버리 비하인드 신",
      date: "2025.03.21",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle:
        "“어떤 반응이든 받아들일 준비가 되어 있었습니다” 드리스 반 노튼의 줄리앙 클라우스너",
      date: "2025.03.21",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle:
        "“할머니 ‘보그’에 제 이름이 나오게 할 거예요” 시몽 포르트 자크뮈스",
      date: "2025.03.21",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle: "유로파 패션 빅 리그! 마티유 블라지에게 전하는 샤넬의 메시지",
      date: "2025.03.21",
      author: "안건호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "패션 뉴스",
      subTitle: "유럽에서 가장 높은 런웨이에 착륙한 몽클레르 그레노블",
      date: "2025.03.20",
      author: "가남희",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "밤하늘을 모두 드리리",
      date: "2025.03.20",
      author: "손은영",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "코코를 그리는 칸초네, 까멜리아 컬렉션",
      date: "2025.03.19",
      author: "손기호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "사막 위 짙푸른 사랑의 징표",
      date: "2025.02.28",
      author: "손은영",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "새콤 발칙한 펜던트의 유혹",
      date: "2025.02.06",
      author: "손은영",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "불가리의 예술적 미학을 조우할 기회, ‘세르펜티 인피니토’",
      date: "2025.02.05",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "불가리의 시그니처, 세르펜티의 위대한 여정",
      date: "2025.02.05",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "현재를 영광으로, 세르펜티의 무한 진화",
      date: "2025.02.05",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "2025년 가장 뜨거운 디바와 세르펜티의 만남",
      date: "2025.02.04",
      author: "손기호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "불멸의 아름다움, 영원의 맹세",
      date: "2025.01.31",
      author: "신은지",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "THE WONDERS OF NATURE",
      date: "2025.01.23",
      author: "소희진",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "'길들여지지 않은 자연', 그 눈부신 발견에 관하여",
      date: "2025.01.24",
      author: "손기호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "워치&주얼리",
      subTitle: "불가리와 김지원의 우아한 랑데부",
      date: "2025.01.24",
      author: "손은영",
      img: getRandomImage(),
    },
  ];

  const beautyAllData = [
    {
      fashionTitle: "웰니스",
      subTitle: "올봄 우리가 반드시 꽃놀이를 가야 하는 정신적인 이유",
      date: "2025.03.20",
      author: "서명희",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Beauty",
      subTitle: "샤넬의 에끌라 프리미에 라 바즈 메이크업 베이스",
      date: "2025.03.24",
      author: "서명희",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 화보",
      subTitle: "류진과 톰 포드 뷰티의 관능적인 만남",
      date: "2025.03.24",
      author: "이주현",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "가장 행복하고 자신감 넘치는 나이는 몇 살입니까?",
      date: "2025.03.23",
      author: "장성실, Jeanne Ballion",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle:
        "매끼 먹었을 뿐인데, 체중 감소하고 수명은 연장되는 프로바이오틱스!",
      date: "2025.03.22",
      author: "김초롱, Ana Morales",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 아이템",
      subTitle: "지지 하디드는 황금기를 맞고 있다",
      date: "2025.03.20",
      author: "황혜원, Margaux Anbouba",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "얼굴에 콕, 매력 점! 3월 셋째 주의 뷰티 인스타그램",
      date: "2025.03.18",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 화보",
      subTitle: "손끝에 반짝이 보석, 네일 피어싱!",
      date: "2025.03.18",
      author: "김초롱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "매일 아침 단백질 30g씩 섭취했고, 이렇게 바뀌었습니다",
      date: "2025.03.21",
      author: "장성실, Desireé Oostland",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "할머니의 취미가 유행하고 있습니다",
      date: "2025.03.18",
      author: "황혜원, Jeanne Ballion",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "달콤함 속에 숨겨진 민낯, ‘제로 음료’의 배신",
      date: "2025.03.15",
      author: "윤혜선",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Beauty",
      subTitle:
        "디올 뷰티의 새로워진 '라 콜렉시옹 프리베 크리스챤 디올' 컬렉션",
      date: "2025.03.18",
      author: "서명희",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "피부과 전문의가 추천하는 이마 주름 없애는 효과적인 방법 5",
      date: "2025.03.16",
      author: "장성실, Kiana Murden",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "올봄엔 캐츠아이 대신 사랑스러운 퍼피 아이!",
      date: "2025.03.15",
      author: "김초롱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 아이템",
      subTitle: "발뒤꿈치 갈라졌을 때! 부드러운 아기 발 되는 법 6",
      date: "2025.03.14",
      author: "장성실, Beatrice Zocchi",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "자궁 건강의 게임 체인저, ‘이노시톨’에 주목해야 할 이유",
      date: "2025.03.14",
      author: "김현유, Lisa Niven-Phillips",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "우유보다 칼슘이 풍부한 식품 10가지",
      date: "2025.03.12",
      author: "장성실, Veronica Cristino",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "제니, 카일리 제너처럼 센스 있게 5:5 가르마 타는 법",
      date: "2025.03.12",
      author: "김초롱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "올봄엔 'like JENNIE'! 3월 둘째 주의 뷰티 인스타그램",
      date: "2025.03.11",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Beauty",
      subTitle:
        "향수를 즐기는 더욱 특별한 방법, 샤넬 NEW ‘코코 마드모아젤 펄스 스프레이’",
      date: "2025.03.11",
      author: "서명희",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "단백질을 쉽고 맛있게 섭취하는 새로운 방법, 프로피!",
      date: "2025.03.08",
      author: "김초롱, Margaux Anbouba",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "영양사가 추천하는, 장 건강을 위한 궁극의 프로바이오틱스 식품",
      date: "2025.03.07",
      author: "장성실, Ana Morales",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Beauty",
      subTitle:
        "피부 속부터 차오르는 맑은 빛을 위한 샤넬의 NEW 에끌라 프리미에",
      date: "2025.03.07",
      author: "서명희",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "단숨에 세계를 사로잡은 미키 매디슨의 매력적인 흑발 스타일링",
      date: "2025.03.07",
      author: "김초롱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Beauty",
      subTitle: "FIND YOUR TIRTIR, 티르티르 팝업스토어",
      date: "2025.03.07",
      author: "서명희",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Beauty",
      subTitle:
        "궁극의안티-에이징 & 브라이트닝 리추얼 '디올 프레스티지 뤼미에르' 컬렉션",
      date: "2025.03.06",
      author: "서명희",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle: "올봄은 고혹적인 무드의 컬단발!",
      date: "2025.03.05",
      author: "김초롱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰티 트렌드",
      subTitle:
        "“감탄할 준비를 하세요” 루이 비통의 첫 메이크업, 팻 맥그라스와의 대화",
      date: "2025.03.05",
      author: "황혜원, Jessica Diner",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "불행한 뉴스가 초래한 파멸적 식습관, '둠 이팅' 멈추는 법",
      date: "2025.03.03",
      author: "김현유, Devinder Bains",
      img: getRandomImage(),
    },
    {
      fashionTitle: "웰니스",
      subTitle: "탱글 쫀득한 피부, 전문가들이 말하는 콜라겐 감소 막는 습관 8",
      date: "2025.03.03",
      author: "장성실, Ana Morales",
      img: getRandomImage(),
    },
  ];

  const lifestyleAllData = [
    {
      fashionTitle: "여행",
      subTitle: "보통의 하루를 더블로 진하게게",
      date: "2025.03.18",
      author: "김우주",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰 포인트",
      subTitle: "일하고 사랑하고 때론 슬퍼하며 삶을 이어갈 여성들에게",
      date: "2025.03.18",
      author: "김나랑랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "여행",
      subTitle: "에메랄드빛 해변에서의 달콤한 꿈",
      date: "2025.03.22",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "여행",
      subTitle: "음악 따라 떠나는 여행, 클래식 축제 3",
      date: "2025.03.21",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "7년을 견딘 우정의 단단함",
      date: "2025.03.20",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "운동에도 에티켓이 필요하다",
      date: "2025.03.20",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "미식을 한층 더 품격 있게 즐기는 법, 호텔 갈라 디너 3",
      date: "2025.03.19",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "수면의 질과 음모론의 관계",
      date: "2025.03.13",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "자동차 운전면허증, 23년 만에 디자인 변경",
      date: "2025.03.12",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰 포인트",
      subTitle: "내 일이 경시됐다는 자격지심을 지울 수 없던 밤",
      date: "2025.02.24",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰 포인트",
      subTitle: "아름다운 남자에 찬탄할 준비",
      date: "2025.01.31",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "뷰 포인트",
      subTitle: "조상들이 쟁취한 품질보증서, K-라벨에 관하여",
      date: "2025.01.01",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "푸드",
      subTitle: "프라다의 아시아 첫 단독 레스토랑 '미 샹'",
      date: "2025.03.18",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "푸드",
      subTitle: "커피부터 술까지, 음미하며 독서하기 좋은 카페 4",
      date: "2025.03.18",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "푸드",
      subTitle: "어른들의 놀이터, 쿠킹 클래스 4",
      date: "2025.03.17",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "여행",
      subTitle: "홍콩에서 만나는 모든 예술, 홍콩 슈퍼 마치",
      date: "2025.03.14",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Lifestyle",
      subTitle: "메종 페리에 주에가 선보이는 예술에 대한 찬사",
      date: "2025.03.14",
      author: "이재은",
      img: getRandomImage(),
    },
    {
      fashionTitle: "푸드",
      subTitle: "프리미엄 테킬라가 온다",
      date: "2025.03.13",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "최현석부터 강민구까지, 3월의 미식 팝업",
      date: "2025.03.12",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Lifestyle",
      subTitle: "보통의 하루를 더블로 진하게",
      date: "2025.03.11",
      author: "신예지",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "집에서 나쁜 냄새 없애는 가장 기본적인 비법 7",
      date: "2025.03.10",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "여행",
      subTitle: "늦어진 봄, 2025 봄꽃 개화 시기와 명소는?",
      date: "2025.03.07",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "단 10대! 생 로랑 Х 뱅앤올룹슨 턴테이블",
      date: "2025.03.07",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "봄을 여는 책 3",
      date: "2025.03.05",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "비츠×샌디 리앙, 한층 사랑스러운 헤드폰의 등장",
      date: "2025.03.05",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "여행",
      subTitle: "떠나고 싶은 봄날, 자연과 가까운 숙소 4",
      date: "2025.03.01",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "여행",
      subTitle: "올해 파리에서 열리는 패션 전시 3",
      date: "2025.02.28",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "리빙",
      subTitle: "프랑스 올리베에 자리한 앨리스의 드림 하우스 #마이월드",
      date: "2025.02.28",
      author: "소지현",
      img: getRandomImage(),
    },
  ];
  const cultureAllData = [
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "인류애를 충전해드립니다, '폭싹 속았수다'",
      date: "2025.03.20",
      author: "VogTrend",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "애드리언 브로디가 받아들인 것",
      date: "2025.03.22",
      author: "VogTrend",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "믿음과 광기 사이 '계시록'",
      date: "2025.03.21",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "당신은 인간입니까? 인간과 비인간의 경계에 관해 '리미널'展",
      date: "2025.03.21",
      author: "황혜원",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "뷰티 서바이벌 '저스트 메이크업' MC 맡은 이효리",
      date: "2025.03.21",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "하이디 클룸 아들, 헨리 사무엘의 도전",
      date: "2025.03.20",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "갤 가돗, 할리우드 명예의 거리 헌액",
      date: "2025.03.19",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "박재범, 6년 만의 월드 투어",
      date: "2025.03.19",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "'코코' 두 번째 이야기 나온다",
      date: "2025.03.21",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "최우수 재즈 연주 음반의 지혜 리 오케스트라",
      date: "2025.03.21",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "최우수 재즈 보컬 음반의 남예지",
      date: "2025.03.19",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "봄에 찾아온 사진전 3",
      date: "2025.03.20",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "로에베, 조나단 앤더슨의 시간을 담은 아카이브 북 출간",
      date: "2025.03.20",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "한일 우정을 기념한 전시",
      date: "2025.03.20",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "최우수 포크 노래의 강아솔",
      date: "2025.03.19",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "2025 롤라팔루자 라인업에 이름 올린 K-팝 아티스트는?",
      date: "2025.03.19",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "2025 아이하트라디오 뮤직 어워즈 휩쓴 K-팝 아이돌",
      date: "2025.03.18",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "열애설에 휩싸인 톰 크루즈와 아나 디 아르마스",
      date: "2025.03.18",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "제니, 첫 콘서트 비하인드 포토 공개",
      date: "2025.03.18",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "‘폭싹 속았수다’, 소문이 많은 여자는 어떻게 소문을 극복하는가",
      date: "2025.03.17",
      author: "강병진",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "배고픈 고로 씨의 귀환 '고독한 미식가 더 무비'",
      date: "2025.03.17",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "제이홉의 '모나리자'",
      date: "2025.03.17",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "아트",
      subTitle: "2025 화랑미술제에서 만나는 한영수 작가",
      date: "2025.03.17",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "박은빈이 또 하나의 인생 캐릭터를 만났다, ‘하이퍼나이프’",
      date: "2025.03.15",
      author: "이숙명",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "로비 윌리엄스, 그 화려함의 시작 '베러맨'",
      date: "2025.03.14",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "셀레나 고메즈가 12달러에 판매한 다이아몬드 반지",
      date: "2025.03.14",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "탐구와 실험의 나날, 하종현의 모든 것",
      date: "2025.03.14",
      author: "황혜원",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "서울에서 만나는 베니스 비엔날레",
      date: "2025.03.14",
      author: "김나랑",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "부쉐론의 새로운 메종 프렌즈, 마크",
      date: "2025.03.13",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "양혜규와 김윤신, 해외 개인전 개최",
      date: "2025.03.13",
      author: "이정미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "사랑스러운 브리짓 존스의 새 이야기가 시작된다",
      date: "2025.03.13",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "마침내 울리기 시작한 '두 번째 시그널'",
      date: "2025.03.13",
      author: "오기쁨",
      img: getRandomImage(),
    },
  ];

  const videoAllData = [
    {
      fashionTitle: "Video",
      subTitle: "있지 류진이 1초 만에 간장계란밥 만드는 법?",
      date: "2025.03.19",
      author: "김하나나",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "손예진이 10년째 비밀을 유지한 향수 정보 단독 입수!",
      date: "2025.03.07",
      author: "장소라, 허단비",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "벽돌 가방 속 찐템만! 송은이의 왓츠 인 마이 백💖",
      date: "2025.02.27",
      author: "이인정, 허단비",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "이창섭은 정말 극내성일까? 그의 모든 소문을 밝힌다!",
      date: "2025.02.13",
      author: "장소라, 한다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "디올 뷰티 디렉터가 K-팝 아이돌 해린을 메이크업한다면?",
      date: "2025.02.06",
      author: "한다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "트로트 가수 박지현이 부르는 K-발라드는?! 😜🎤",
      date: "2025.01.29",
      author: "이인정, 허단비",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "나나피셜🚨 요즘 가장 핫한 ‘나나펌’의 중요 포인트!",
      date: "2025.01.23",
      author: "장소라",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "배우 신예은이 하고 싶은 의외의 예능 프로그램",
      date: "2024.12.24",
      author: "이인정, 한다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "나 홀로 사무실에서, 뮤지컬 배우 고은성의 캐럴 라이브",
      date: "2024.12.20",
      author: "장소라, 허단비",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "엔하이픈의 뜨겁고도 차가운 ‘Daydream’ 퍼포먼스",
      date: "2024.12.16",
      author: "가남희, 허단비",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "데이식스 도운, 최근 야구가 좋아진 이유",
      date: "2024.12.02",
      author: "장소라, 허단비",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "로제가 가장 좋아하는 캐럴과 함께 한국 첫 인마이백 공개🖤",
      date: "2024.11.30",
      author: "이인정, 한다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "지지 하디드가 '보그 코리아'에 보내온 서울 탐방기!",
      date: "2024.11.22",
      author: "안건호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "귀여운 거 좋아하면 마음에 쏙 들 '아일릿'의 가방",
      date: "2024.11.19",
      author: "이인정, 허단비, 한다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "고민시가 의사 선생님 추천받아 구입한 쿠팡템은?",
      date: "2024.11.11",
      author: "장소라, 한다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "슈퍼 젠지 아이리스 로의 가방 공개",
      date: "2024.10.31",
      author: "이인정, 조영경, 한다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "“삶은 나를 겁줄 수 없어!” 정호연이 용기가 필요할 때 읽는 문장",
      date: "2024.10.28",
      author: "손기호, 허단비",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "작고 귀여운 아이템이 가득! 최지우의 가방 속 최초 공개",
      date: "2024.10.25",
      author: "장소라, 한다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "펜싱 선수 오상욱이 '보그' 촬영 중 ‘그만!’이라고 외친 이유?",
      date: "2024.10.18",
      author: "장소라, 허단비",
      img: getRandomImage(),
    },
    {
      fashionTitle: "Video",
      subTitle: "배두나와 보낸 피렌체에서의 24시간",
      date: "2024.10.14",
      author: "권민지, 한다혜",
      img: getRandomImage(),
    },
  ];

  // alert 띄우기
  const handleMoreClick = () => {
    alert("준비중입니다.");
  };

  return (
    <div className="wrapper">
      <div className="my_header">
        <Header2
          setDetailPage={setDetailPage}
          setMidDetailPage={setMidDetailPage}
          setUnderlinedIndex={setUnderlinedIndex}
        />
      </div>

      {/* 상세페이지 타이틀 */}
      <div className="content">
        <div className="DetailPageContent">
          <BigTitleDetail
            BigTitle={detailPage}
            underlinedIndex={underlinedIndex}
            setUnderlinedIndex={setUnderlinedIndex}
            texts={
              detailPage === "FASHION"
                ? fashionData
                : detailPage === "BEAUTY"
                ? beautyData
                : detailPage === "LIFESTYLE"
                ? lifeStyleData
                : detailPage === "CULTURE"
                ? cultureData
                : []
            }
            midDetailPage={midDetailPage}
            setMidDetailPage={setMidDetailPage}
          />
          <div className="DetailAllWrap">
            <div className="DetailNotSticky">
              <div>
                {midDetailPage === "전체" || detailPage === "VIDEO" ? (
                  <AllDetailPage
                    detailPage={detailPage}
                    setDetailPage={setDetailPage}
                    fashionAllData={fashionAllData}
                    beautyAllData={beautyAllData}
                    lifestyleAllData={lifestyleAllData}
                    cultureAllData={cultureAllData}
                    videoAllData={videoAllData}
                    midDataObject={midDataObject}
                  />
                ) : (
                  <div className="MidCardsWrap">
                    {(() => {
                      let filteredData;
                      // midDetailPage에 맞는 데이터를 선택
                      if (detailPage === "FASHION") {
                        filteredData = fashionAllData.filter(
                          (data) =>
                            data.fashionTitle.toLowerCase() ===
                            midDetailPage.toLowerCase()
                        );
                      } else if (detailPage === "BEAUTY") {
                        filteredData = beautyAllData.filter(
                          (data) =>
                            data.fashionTitle.toLowerCase() ===
                            midDetailPage.toLowerCase()
                        );
                      } else if (detailPage === "LIFESTYLE") {
                        filteredData = lifestyleAllData.filter(
                          (data) =>
                            data.fashionTitle.toLowerCase() ===
                            midDetailPage.toLowerCase()
                        );
                      } else if (detailPage === "CULTURE") {
                        filteredData = cultureAllData.filter(
                          (data) =>
                            data.fashionTitle.toLowerCase() ===
                            midDetailPage.toLowerCase()
                        );
                      } else if (detailPage === "VIDEO") {
                        filteredData = videoAllData.filter(
                          (data) =>
                            data.fashionTitle.toLowerCase() ===
                            midDetailPage.toLowerCase()
                        );
                      }

                      // 필터링된 데이터를 맵핑하여 렌더링
                      return filteredData
                        .slice(0, 12)
                        .map((data, index) => (
                          <SmallCard
                            key={index}
                            smallCardData={data}
                            isSquare={true}
                          />
                        ));
                    })()}
                  </div>
                )}
              </div>
            </div>
            <div
              className="DetailPageSticky"
              onClick={() => alert("준비중입니다.")}
            >
              {/* 스티키 card */}
              <img src="/img/sticky.jpeg" alt="youtube" />
            </div>
          </div>
        </div>
      </div>
      <div className="my_footer">
        <Footer />
      </div>
    </div>
  );
}

export default DetailPage;

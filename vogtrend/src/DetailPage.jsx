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
  // 상세페이지 타이틀
  const fashionData = [
    "전체",
    "패션 트렌트",
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
    fashionTitle: "패션 화보",
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

  // alert 띄우기
  const handleMoreClick = () => {
    alert("준비중입니다.");
  };

  return (
    <div className="wrapper">
      <div className="my_header">
        <Header2 setDetailPage={setDetailPage} />
      </div>

      {/* 상세페이지 타이틀 */}
      <div className="content">
        <div className="DetailPageContent">
          <BigTitleDetail
            BigTitle={detailPage}
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
                {midDetailPage === "전체" ? (
                  <AllDetailPage
                    detailPage={detailPage}
                    setDetailPage={setDetailPage}
                    fashionAllData={fashionAllData}
                    midDataObject={midDataObject}
                  />
                ) : (
                  <div className="MidCardsWrap">
                    {fashionAllData.slice(0, 12).map((data, index) => (
                      <SmallCard
                        key={index}
                        smallCardData={data}
                        isSquare={true}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="DetailPageSticky">
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

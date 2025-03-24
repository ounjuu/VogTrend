import React, { useState, useEffect } from "react";
import "./DetailLeft.css";
import MidImgCard from "../MidImgCard/MidImgCard";
import SmallCard from "../SmallCard/SmallCard";
import MustRead from "../MustRead/MustRead";
import TitleText from "../TitleText/TitleText";
const DetailLeft = (props) => {
  const {
    detailPage,
    midDataObject,
    fashionAllData,
    handleMoreClick,
    beautyAllData,
    lifestyleAllData,
    cultureAllData,
    videoAllData,
  } = props;
  const imagePaths = [
    "/img/vog1.webp",
    "/img/vog2.webp",
    "/img/vog3.webp",
    "/img/vog4.webp",
    "/img/vog5.webp",
    "/img/vog6.webp",
    "/img/vog7.webp",
    "/img/vog8.webp",
    "/img/vog9.webp",
    "/img/vog10.webp",
  ];

  function getRandomImage() {
    const randomNum = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomNum];
  }

  const fashionData = [
    {
      fashionTitle: "트렌드",
      subTitle: "곧 거리에서 '실제로' 보게 될 2025 봄/여름 트렌드 8",
      date: "2025.03.13",
      author: "이소미, Madeline Fass, Talia Abbas, Laura Jackson",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "몸짓이 우아해지는, 올봄 가냘픈 신발",
      date: "2025.03.21",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "미니멀 스타일이 지겹던 참이라면, '이 로고'에 주목해보세요",
      date: "2025.03.20",
      author: "안건호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "2025년에 가장 사랑받을 ‘잇 백’ 10",
      date: "2025.03.20",
      author: "김현유",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "경쾌하고 발랄하게! 올봄 내내 입기 좋은 만능 패턴의 귀환",
      date: "2025.03.21",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "티모시 샬라메의 데님 재킷(Ft. 밥 딜런)",
      date: "2025.03.19",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "올봄 멋 부리고 싶은 날은 이모 조끼에 청바지!",
      date: "2025.03.18",
      author: "황혜원",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "앤 해서웨이의 운동화에 자꾸만 눈이 가는 이유",
      date: "2025.03.18",
      author: "이소미",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "조나단 앤더슨의 엉뚱하고 근사한 로에베 셀럽 룩 모아보기",
      date: "2025.03.18",
      author: "이소미, Hannah Jackson, Christian Allaire",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "깃털처럼 가볍게, 샤넬처럼 자유롭게",
      date: "2025.03.21",
      author: "손기호",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "뉴욕, 일관성, 감정과 케이트! 캐서린 홀스타인과 나눈 대화",
      date: "2025.03.20",
      author: "김다혜",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "코모의 햇살 아래, 정해인의 '이탈리안 뷰티'",
      date: "2025.03.20",
      author: "권민지",
      img: getRandomImage(),
    },
    {
      fashionTitle: "트렌드",
      subTitle: "흐트러짐 없이, 강하고 빠르게 까르띠에!",
      date: "2025.03.19",
      author: "VOGUE",
      img: getRandomImage(),
    },
  ];

  const beautyData = [
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
      fashionTitle: "뷰티 트렌드",
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
      fashionTitle: "뷰티 트렌드",
      subTitle: "손끝에 반짝이 보석, 네일 피어싱!",
      date: "2025.03.18",
      author: "김초롱",
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
  ];
  const lifestyleData = [
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
      fashionTitle: "프라다의 아시아 첫 단독 레스토랑 '미 샹'",
      subTitle: "푸드",
      date: "2025.03.18",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "커피부터 술까지, 음미하며 독서하기 좋은 카페 4",
      subTitle: "푸드",
      date: "2025.03.18",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "어른들의 놀이터, 쿠킹 클래스 4",
      subTitle: "푸드",
      date: "2025.03.17",
      author: "주현욱",
      img: getRandomImage(),
    },
    {
      fashionTitle: "홍콩에서 만나는 모든 예술, 홍콩 슈퍼 마치",
      subTitle: "여행",
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
  ];
  const cultureData = [
    {
      fashionTitle: "엔터테인먼트",
      subTitle: "인류애를 충전해드립니다, '폭싹 속았수다'",
      date: "2025.03.20",
      author: "VogTrend",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "애드리언 브로디가 받아들인 것",
      date: "2025.03.22",
      author: "VogTrend",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
      subTitle: "믿음과 광기 사이 '계시록'",
      date: "2025.03.21",
      author: "오기쁨",
      img: getRandomImage(),
    },
    {
      fashionTitle: "셀럽 뉴스",
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
  ];

  const videoData = [
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

  return (
    <div className="DetailLeftContainer">
      <div className="DetailLeft">
        <div className="cardBox">
          {/* 중간 사이즈 card */}
          <div className="DetailMidImgLeft">
            <MidImgCard midData={midDataObject} />
          </div>

          {/* 작은 사이즈 cards */}
          <div className="DetailRight">
            {fashionData.slice(0, 4).map((card, index) => (
              <SmallCard key={index} smallCardData={card} isSquare={false} />
            ))}
          </div>
        </div>
        {/* 패션 트렌트 */}
        <TitleText
          text={
            detailPage === "FASHION"
              ? "패션 트렌드"
              : detailPage === "BEAUTY"
              ? "뷰티 트렌드"
              : detailPage === "LIFESTYLE"
              ? "리빙"
              : detailPage === "CULTURE"
              ? "셀럽 뉴스"
              : ""
          }
        />
        {/* 패션 트렌트 작은 사이즈 cards */}
        <div className="fashionTrendBox">
          {detailPage !== "VIDEO" &&
            (() => {
              const allData = {
                FASHION: fashionAllData,
                BEAUTY: beautyData,
                LIFESTYLE: lifestyleData,
                CULTURE: cultureData,
                VIDEO: videoData,
              };
              const filterCriteria = {
                FASHION: "패션 트렌드",
                BEAUTY: "뷰티 트렌드",
                LIFESTYLE: "리빙",
                CULTURE: "셀럽 뉴스",
              };

              if (detailPage !== "VIDEO") {
                const filteredData = (allData[detailPage] || []).filter(
                  (card) => card.fashionTitle === filterCriteria[detailPage]
                );

                return filteredData
                  .slice(0, 3)
                  .map((card, index) => (
                    <SmallCard
                      key={index}
                      smallCardData={card}
                      isSquare={false}
                    />
                  ));
              }
            })()}
        </div>
        {/* 패션 아이템 */}
        <TitleText
          text={
            detailPage === "FASHION"
              ? "패션 아이템"
              : detailPage === "BEAUTY"
              ? "웰니스"
              : detailPage === "LIFESTYLE"
              ? "뷰 포인트"
              : detailPage === "CULTURE"
              ? "엔터테인먼트"
              : ""
          }
        />
        {/* 패션 아이템 작은 사이즈 cards */}
        <div className="fashionItemBox">
          {detailPage !== "VIDEO" &&
            (() => {
              const allData = {
                FASHION: fashionAllData,
                BEAUTY: beautyData,
                LIFESTYLE: lifestyleData,
                CULTURE: cultureData,
                VIDEO: videoData,
              };
              const filterCriteria = {
                FASHION: "패션 아이템",
                BEAUTY: "웰니스",
                LIFESTYLE: "뷰 포인트",
                CULTURE: "엔터테인먼트",
              };

              if (detailPage !== "VIDEO") {
                const filteredData2 = (allData[detailPage] || []).filter(
                  (card) => card.fashionTitle === filterCriteria[detailPage]
                );

                return filteredData2
                  .slice(0, 3)
                  .map((card, index) => (
                    <SmallCard
                      key={index}
                      smallCardData={card}
                      isSquare={false}
                    />
                  ));
              }
            })()}
        </div>
        {/* LATEST STORIES */}
      </div>
    </div>
  );
};

export default DetailLeft;

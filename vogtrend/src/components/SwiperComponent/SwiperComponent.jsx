import React, { useState, useEffect } from "react";
import "./SwiperComponent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import SmallCard from "../SmallCard/SmallCard";

const SwiperComponent = (props) => {
  const { smallCardData } = props;
  return (
    <div className="SwiperComponentContainer">
      <div className="SwiperComponent">
        {/* 작은 사이즈 cards 스와이퍼 */}
        <div className="SwiperComponentSwiper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {smallCardData.map((card, index) => (
              <SwiperSlide key={index}>
                <SmallCard
                  smallCardData={card}
                  swiperClass={true}
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;

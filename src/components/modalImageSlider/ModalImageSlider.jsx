import "./ModalImageSlider.scss";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

function ModalImageSlider(props) {
  const slides = [];

  for (let i = 0; i < props.images.length; i++) {
    slides.push(
      <SwiperSlide key={props.images[i]}>
        <img src={props.images[i]} alt="" />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        id="main"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides}
      </Swiper>
    </>
  );
}

export default ModalImageSlider;

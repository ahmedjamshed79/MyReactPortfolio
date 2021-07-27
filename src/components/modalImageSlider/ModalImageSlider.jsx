import './ModalImageSlider.scss';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, A11y]);


function ModalImageSlider() {
    return (
        <>
            <Swiper
                id="main"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide key={'1'}><img src="./Assets/flickerPhotoGallery.png" alt="" /></SwiperSlide>
                <SwiperSlide key={'2'}><img src="./Assets/flickerPhotoGallery.png" alt="" /></SwiperSlide>
                <SwiperSlide key={'3'}><img src="./Assets/flickerPhotoGallery.png" alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default ModalImageSlider;

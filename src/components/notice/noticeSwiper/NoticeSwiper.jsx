import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/swiper.scss'; // core Swiper
import SwiperCore, {Autoplay } from "swiper"

import style from './NoticeSwiper.module.scss'



const NoticeSwiper = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className={style.notice_swiper_area}>
            <Swiper
                slidesPerView={1}
                direction="vertical"
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay]}
                className={style.notice_swiper}
                >
                <SwiperSlide className={style.notice_slide}>
                    <span className={`${style.noti_label} ${style.type_new}`}>공지</span>
                    <a href="#/" className={style.noti_link}>공식사이트 검색 결과 정보 개편 안내</a>
                </SwiperSlide>
                <SwiperSlide className={style.notice_slide}>
                    <span className={`${style.noti_label} ${style.emergency_label} ${style.type_new}`}>긴급공지</span>
                    <a href="#/" className={style.noti_link}>[점검 안내] 블로그 DB 점검 안내</a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default NoticeSwiper
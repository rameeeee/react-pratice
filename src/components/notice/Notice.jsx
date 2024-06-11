import React from 'react'
import style from './Notice.module.scss'
import NoticeSwiper from './noticeSwiper/NoticeSwiper'

const Notice = () => {
  return (
    <div className={style.notice_area}>
         <div className={`${style.inner} inner`}>
            <NoticeSwiper />
            <a href="#/" className={style.notice_link}>
                공지 전체보기
            </a>
         </div>
    </div>
  )
}

export default Notice
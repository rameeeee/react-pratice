import React from 'react'
import style from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={style.banner_area}>
      <a href="#/" className={style.banner_link}>
        <span className="blind">똑똑하게 궁금점 확인하는 방법, 스마트봇에게 질문해 보세요!</span>
      </a>
    </div>
  )
}

export default Banner
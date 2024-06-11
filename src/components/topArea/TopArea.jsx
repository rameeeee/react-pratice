import React from 'react'
import style from './TopArea.module.scss'
import SearchArea from './searchArea/SearchArea'

const TopArea = () => {
    return (
        <>
        <div className={style.top_area}>
            <div className={`${style.inner} inner`}>
                <h2 className={style.top_title}>
                    네이버 고객센터
                </h2>
                <p className={style.top_text}>궁금한 점은 검색과 스마트봇으로<br className='only_mo' /> 쉽고 빠르게 해결하세요</p>
            </div>
        </div>
        <SearchArea />
        </>
    )
}

export default TopArea
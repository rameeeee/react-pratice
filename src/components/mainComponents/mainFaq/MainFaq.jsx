import React from 'react'
import style from './MainFaq.module.scss'
import FilterCategory from './filtersCategory/FiltersCategory'
import MainFaqList from './mainFaqList/MainFaqList'

const MainFaq = () => {
  return (
    <div className={style.main_faq_area}>
        <div className={`${style.inner} inner`}>
            <h2 className="section_title">
                자주 찾는 도움말
            </h2>
            <FilterCategory />
            <MainFaqList />
        </div>
    </div>
  )
}

export default MainFaq
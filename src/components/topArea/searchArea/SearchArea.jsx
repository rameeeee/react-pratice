import React from 'react'
import style from './SearchArea.module.scss'


const SearchArea = () => {
  return (
    <div className={style.search_area}>
        <div className="inner">
          <div className={style.search_box}>
              <input type="text" placeholder='궁금한 점을 검색해 보세요.' className={style.search_input}/>
              <button type='button' className={style.btn_search}>
                <span className="blind">검색</span>
              </button>
          </div>
        </div>
    </div>
  )
}

export default SearchArea
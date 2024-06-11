import React from 'react'
import style from './MainHelp.module.scss'
import MainHelpList from './mainHelpList/MainHelpList';


const MainHelp = () => {
  return (
    <div className={style.main_help_area}>
        <div className={`${style.inner} inner`}>
            <h2 className="section_title">
                다른 도움이 필요하신가요?
            </h2>
            <MainHelpList />
        </div>
    </div>
  )
}

export default MainHelp
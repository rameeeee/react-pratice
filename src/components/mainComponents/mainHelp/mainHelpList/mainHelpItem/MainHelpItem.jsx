import React from 'react'
import style from '../MainHelpList.module.scss'

export const MainHelpItem = ({helpItem}) => {
  return (
    <li className={style.help_item}>
      <a href="#/" className={style.help_item_link}>
        <div className={style.help_title_area}>
          <div className={style.img_wrap}>
          <img src={require(`../../../../../assets/img/mainpage/${helpItem.helpIcon}.png`)} alt={`${helpItem.helpTitle}`} />
          </div>
          <strong className={style.help_title}>
            {helpItem.helpTitle}
          </strong>
        </div>
        <p className={style.help_text}>
          {helpItem.helpText}
        </p>
      </a>
    </li>
  )
}
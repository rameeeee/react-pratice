import React from 'react'
import style from '../FooterList.module.scss'

const FooterItem = ({footerItem}) => {
  return (
    <li className={style.footer_item}>
      <a href="#/" className={style.footer_link}>
        <div className={style.img_wrap}>
          <img src={require(`../../../../assets/img/mainpage/${footerItem.footerTextIcon}.png`)} alt={`${footerItem.footerText}`} />
        </div>
        <span className={style.footer_text}>{footerItem.footerText}</span>
      </a>
    </li>
  )
}

export default FooterItem
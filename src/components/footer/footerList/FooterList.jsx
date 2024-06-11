import React from 'react'
import style from './FooterList.module.scss'
import FooterItem from './footerItem/FooterItem'
import { footerListText } from '../../../store/footerStore/footerList.type'

const FooterList = () => {
  return (
    <div className={style.footer_list_area}>
      <ul className={style.footer_list}>
        {footerListText.map(footerItem => <FooterItem key={footerItem.footerTextIcon}  footerItem={footerItem}/>)}
      </ul>
    </div>
  )
}

export default FooterList
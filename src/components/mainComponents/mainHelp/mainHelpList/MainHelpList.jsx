import React from 'react'
import { MainHelpItem } from './mainHelpItem/MainHelpItem';
import style from './MainHelpList.module.scss'
import { ServiceHelpText } from '../../../../store/mainHelpStore/mainHelp.type';
import { v4 as uuidv4 } from 'uuid';

const MainHelpList = () => {
  return (
    <div className={style.help_list_area}>
      <ul className={style.help_list}>
        {ServiceHelpText.map(helpItem => <MainHelpItem key={uuidv4()} helpItem={helpItem} />)}
      </ul>
    </div>
  )
}

export default MainHelpList
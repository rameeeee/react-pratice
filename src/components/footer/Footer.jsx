import React, {useState} from 'react'
import style from './Footer.module.scss'
import FooterList from './footerList/FooterList'

const Footer = () => {
  const [isAcitve, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleMainClick = () => {
      setIsActive(!isAcitve)
  }

  const handleSubClick = (index) => {
      setActiveIndex(index)
  }

  return (
    <div className={style.footer_area}>
        <div className={`${style.inner} inner`}>
            <FooterList />
            <div className={style.footer_info_wrap}>
                <ul className={`${style.footer_info_list} ${style.main_info}`}>
                  <li className={`${style.footer_info_item} ${isAcitve ? style.on : ''}`}>
                    <a href="#/" className={style.language_text} onClick={handleMainClick}>한국어</a>
                    <div className={style.language_list_wrap}>
                        <ul className={style.language_list}>
                            <li className={`${style.language_item} ${activeIndex === 0 ? style.on : ''}`}>
                                <a href="#/" className={style.language_item_link} onClick={() => handleSubClick(0)}>한국어</a>
                            </li>
                            <li className={`${style.language_item} ${activeIndex === 1 ? style.on : ''}`}>
                                <a href="#/" className={style.language_item_link} onClick={() => handleSubClick(1)}>English</a>
                            </li>
                        </ul>
                    </div>
                  </li>
                  <li className={style.footer_info_item}>
                    <a href="#/">
                      로그인
                    </a>
                  </li>
                  <li className={style.footer_info_item}>
                    <a href="#/">전체서비스</a>
                  </li>
                </ul>
                <ul className={style.footer_info_list}>
                  <li className={style.footer_info_item}>
                    <a href="#/">이용약관</a>
                  </li>
                  <li className={style.footer_info_item}>
                    <a href="#/">
                      <em className="bold">개인정보처리방침</em>
                    </a>
                  </li>
                  <li className={style.footer_info_item}>
                    <a href="#/">청소년보호정책</a>
                  </li>
                </ul>
                <ul className={style.footer_info_list}>
                  <li className={style.footer_info_item}>
                    대표번호 : 1588-3820
                    <button type='button' className={style.btn_detail}>(상세보기)</button>
                  </li>
                  <li className={`${style.footer_info_item} ${style.copyright}`}>
                    <a href="#/">&copy; NAVER Corp.</a>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
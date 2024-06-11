import React, {useState} from 'react'
import style from './Header.module.scss'

const Header = () => {
    const [isAcitve, setIsActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleMainClick = () => {
        setIsActive(!isAcitve)
    }

    const handleSubClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className={style.header}>
            <div className={`${style.inner} inner`}>
                <div className={style.logo_wrap}>
                    <a href="https://www.naver.com/" className={style.naver_link}>
                        <span className="blind">NAVER</span>
                    </a>
                    <h1 className={style.gnb_title}>
                        <a href="https://help.naver.com/index.help?lang=ko" className={style.gnb_link}>
                            고객센터
                        </a>
                    </h1>
                </div>
                <div className={style.gnb_wrap}>
                    <div className={`${style.language_area} ${isAcitve ? style.on : ''}`}>
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
                    </div>
                    <div className={style.login_area}>
                        <button type='button' className={style.btn_login}>
                            <span className="blind">로그인</span>
                        </button>
                    </div>
                    <div className={style.menu_area}>
                        <button type='button' className={style.btn_menu}>
                            <span className="blind">서비스 전체보기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
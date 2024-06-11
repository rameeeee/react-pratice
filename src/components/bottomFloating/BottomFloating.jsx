import React, {useState, useEffect} from 'react'
import style from './BottomFloating.module.scss'

const BottomFloating = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={style.bottom_floating_area}>
            {isVisible && (
                <button type='button' className={style.btn_top} onClick={scrollToTop} >
                    <span className="blind">맨 위로</span>
                </button>
            )}
            <button type='button' className={style.btn_smartbot}>
                <span className="blind">스마트봇 버튼</span>
            </button>
        </div>
    )
}

export default BottomFloating
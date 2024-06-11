import React from 'react'
import style from '../MainFaqList.module.scss'
import {FaqCategoriesName} from '../../../../../store/faqCategoryStore/faqCategories.type'
import { v4 as uuidv4 } from 'uuid';

const MainFaqItem = ({item, faqCategory, isChecked, onToggle}) => {
    const labels = item.labels[FaqCategoriesName[faqCategory]]
    const handleClick = (e) => {
        e.stopPropagation();
    }

    return (
        <li className={style.faq_item} onClick={onToggle}>
            <div className={style.item_content}>
                <p className={style.item_title}>
                    <span className="blind">Q</span>{item.qtext}
                </p>
                <div className={style.item_label_wrap}>
                    <span style={{background: `${item.labelColor}`}} className={style.item_label}>#{labels?.[0]}</span>
                </div>
                <button type='button' className={style.btn_item}>
                    <span className="blind">도움말 자세히보기</span>
                </button>
            </div>
            {isChecked && 
                <div className={style.layer_content_wrap} >
                    <div className={style.layer_content} onClick={handleClick}>
                        <button onClick={onToggle} className={style.btn_layer_close}>
                            <span className="blind">닫기</span>
                        </button>
                        <div className={style.title_area}>
                            <i className={style.ico_q}><span className="blind">질문</span></i>
                            <p className={style.layer_title}>
                                {item.qtext}
                            </p>
                        </div>
                        <div className={style.tag_list_area}>
                            <ul>
                            {labels?.map((label, index) => <li key={uuidv4()}>{label}</li>)}
                            </ul>
                        </div>
                        <div className={style.answer_area}>
                            <i className={style.ico_a}><span className="blind">답변</span></i>
                            <div className={style.answer_box}>
                                {item.atext}
                            </div>
                        </div>
                        <a href="#/" className={style.more_info}>
                            도움말 자세히 보기
                        </a>
                    </div>
                    <div className="dimmed"></div>
                </div>
            }
        </li>
    )
}

export default MainFaqItem

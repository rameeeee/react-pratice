import React from 'react'
import style from './RecommendKeyword.module.scss'
import {RecommendKeywordText} from '../../store/recommendKeywordStore/recommendKeyword.type.js'

import { v4 as uuidv4 } from 'uuid';

const RecommendKeyword = () => {
    return (
        <div className={style.recommend_keyword_area}>
            <div className={`${style.inner} inner`}>
                <strong className={style.keyword_title}>
                    추천 검색어
                </strong>
                <ul className={style.keyword_list}>
                    {RecommendKeywordText.map(keyword => (
                        <li key={uuidv4()} className={`${style.keyword_item} ${keyword.new ? style['new_item'] : ''}`}>
                        <a href="#/" className={style.keyword_link}>
                            {keyword.text}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecommendKeyword
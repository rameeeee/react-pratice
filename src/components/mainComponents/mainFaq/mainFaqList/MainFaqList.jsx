import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import MainFaqItem from './mainFqaItem/MainFaqItem'
import { fetchMainFaqContents } from '../../../../store/mainFaqStore/mainFaq.slice';

import style from './MainFaqList.module.scss'

import { v4 as uuidv4 } from 'uuid';

const MainFaqList = () => {
    const [showAll, setShowAll] = useState(false)
    const [checkItemId, setCheckItemId] = useState(null)


    const dispatch = useDispatch();
    const {mainFaqContents} = useSelector((state) => state.mainFaqSlice)
    const faqCategory = useSelector((state) => state.faqCategoriesSlice)

    useEffect(() => {
        dispatch(fetchMainFaqContents(faqCategory?.toLowerCase()));
    }, [faqCategory])

    const handleShowAll = () => {
        setShowAll(true);
    }

    const toggleLayer = (itemId) => {
        setCheckItemId(checkItemId === itemId ? null : itemId)
    }

    return (
        <div className={style.faq_list_area}>
            <ul className={style.faq_list}>

                {mainFaqContents.slice(0, showAll ? mainFaqContents.length : 8).map(mainFaqContent => <MainFaqItem key={mainFaqContent.id + uuidv4()} item={mainFaqContent} faqCategory={faqCategory} isChecked={checkItemId === mainFaqContent.id} onToggle={() => toggleLayer(mainFaqContent.id)}/>)}
            </ul>
            {!showAll && mainFaqContents.length > 8 && (
                <button type='button' onClick={handleShowAll} className='btn_more'>
                    도움말 더보기
                </button>
            )}
        </div>
    )
}

export default MainFaqList
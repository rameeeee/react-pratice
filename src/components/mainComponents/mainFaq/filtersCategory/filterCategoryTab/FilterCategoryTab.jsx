import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { setActiveFaqCategory } from '../../../../../store/faqCategoryStore/faqCategories.slice';
import style from '../FilterCategory.module.scss'


const FilterCategoryTab = ({text, faqCategoriesName}) => {
    const dispatch = useDispatch();
    const faqCategory = useSelector((state) => state.faqCategoriesSlice)

    const getActiveCategory = () => {
        dispatch(setActiveFaqCategory(faqCategoriesName))
    }
    
    return (
        <li className={`${style.category_item} ${faqCategoriesName === faqCategory ? style['active'] : ''}`}>
            <button 
                type='button'
                onClick={getActiveCategory}
                className={style.btn_category}
            >
                {text}
            </button>
        </li>
    )
}

export default FilterCategoryTab
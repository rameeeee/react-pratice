import {configureStore} from '@reduxjs/toolkit'
import faqCategoriesSlice from './faqCategoryStore/faqCategories.slice'
import mainFaqSlice from './mainFaqStore/mainFaq.slice'



export const store = configureStore({
    reducer: {
        faqCategoriesSlice,
        mainFaqSlice
    }
})
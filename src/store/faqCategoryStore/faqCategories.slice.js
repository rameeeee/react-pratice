import { createSlice } from '@reduxjs/toolkit';
import { FaqCategoriesName } from './faqCategories.type';


const initialState = FaqCategoriesName.All;

export const faqCategoriesSlice = createSlice({
    name: "faqCategory",
    initialState,
    reducers: {
        setActiveFaqCategory: (_, action) => action.payload
    }
})

export const {setActiveFaqCategory} = faqCategoriesSlice.actions;
export default faqCategoriesSlice.reducer;
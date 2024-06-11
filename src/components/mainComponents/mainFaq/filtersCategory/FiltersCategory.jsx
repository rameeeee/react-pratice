import React, {useState, useEffect, useRef} from 'react'
import FilterCategoryTab from './filterCategoryTab/FilterCategoryTab'
import { FaqCategoriesName } from '../../../../store/faqCategoryStore/faqCategories.type'
import style from './FilterCategory.module.scss'

const FilterCategory = () => {
  const [showButton, setShowButton] = useState(false);
  const [addOn, setAddOn] = useState(false)
  
  const ulRef = useRef(null);

  const checkUlHeight = () => {
    const ulHeight = ulRef.current.clientHeight;
    return ulHeight > 40;
  }
  const handleResize = () => {
    setShowButton(checkUlHeight())
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleAddOn = () => {
    setAddOn(prevOn => !prevOn)
  }


  return (
    <div className={`${style.filter_category_area} ${addOn ? style.on : ''}`}>
      <ul className={style.filter_category_list} ref={ulRef}>
        <FilterCategoryTab 
          text={"전체"}
          faqCategoriesName={FaqCategoriesName.All}
        />
        <FilterCategoryTab 
          text={"계정 관리"}
          faqCategoriesName={FaqCategoriesName.AccountManagement}
        />
        <FilterCategoryTab 
          text={"도용·보안"}
          faqCategoriesName={FaqCategoriesName.Security}
        />
        <FilterCategoryTab 
          text={"이용제한"}
          faqCategoriesName={FaqCategoriesName.RestrictionOfUse}
        />
        <FilterCategoryTab 
          text={"권리보호"}
          faqCategoriesName={FaqCategoriesName.ProtectionOfRights}
        />
        <FilterCategoryTab 
          text={"결제·환불"}
          faqCategoriesName={FaqCategoriesName.PaymentRefund}
        />
        <FilterCategoryTab 
          text={"예약·주문"}
          faqCategoriesName={FaqCategoriesName.ReservationOrder}
        />
        <FilterCategoryTab 
          text={"검색·검색어"}
          faqCategoriesName={FaqCategoriesName.SearchWord}
        />
        <FilterCategoryTab 
          text={"이벤트·혜택"}
          faqCategoriesName={FaqCategoriesName.EventBenefit}
        />
        <FilterCategoryTab 
          text={"프로필 설정"}
          faqCategoriesName={FaqCategoriesName.ProfileSettings}
        />
        <FilterCategoryTab 
          text={"알림 설정"}
          faqCategoriesName={FaqCategoriesName.NotiSettins}
        />
      </ul>
      {showButton && 
        <button type='button' className={style.btn_more} onClick={handleAddOn}>
          <span className="blind">메뉴 더보기</span>
        </button>
      }
    </div>
  )
}

export default FilterCategory
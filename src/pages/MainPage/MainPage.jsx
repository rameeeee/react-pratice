import React from 'react'
import TopArea from '../../components/topArea/TopArea'
import RecommendKeyword from '../../components/recommendKeyword/RecommendKeyword'
import MainFaq from '../../components/mainComponents/mainFaq/MainFaq'
import MainServiceCenter from '../../components/mainComponents/mainServiceCenter/MainServiceCenter'
import MainHelp from '../../components/mainComponents/mainHelp/MainHelp'
import Banner from '../../components/banner/Banner'
import Notice from '../../components/notice/Notice'
import BottomFloating from '../../components/bottomFloating/BottomFloating'

const MainPage = () => {
  return (
    <div className="content">
      <TopArea />
      <RecommendKeyword />
      <Notice/ >
      <MainFaq />
      <MainServiceCenter />
      <MainHelp />
      <Banner />
      <BottomFloating />
    </div>
  )
}

export default MainPage
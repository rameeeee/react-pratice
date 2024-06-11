import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const mainFaqContents = [
    // 전체
    { id: 1, qtext: "네이버 폼 서비스 소개", atext: "네이버 폼은 설문 제작, 편집, 참여 및 관리할 수 있는 서비스입니다.", labels: {"All" : ['(신)네이버 폼', '전체']}, labelColor: "rgb(3, 199, 90)", category: ['All']},
    { id: 2, qtext: "치지직 정산 실지급액 계산 안내", atext: "공급가액에서 원천세 3.3%를 제외한 금액이 실제 입금됩니다.", labels: {"All" : ['네이버 게임', '전체']}, labelColor: "rgb(78, 65, 219)", category: ['All'] },
    { id: 3, qtext: "Accentia 서비스 종료 (4/25)", atext: "Accentia 서비스가 2024년 4월 25일에 종료되었습니다.", labels: {"All" : ['Accentia', '전체']}, labelColor: "rgb(142, 45, 252)", category: ['All'] },
    { id: 4, qtext: "시작 페이지 설정 방법 (Chrome)", atext: "크롬 브라우저의 '설정'에서 시작 페이지를 네이버로 지정할 수 있습니다.", labels: {"All" : ['네이버 전반', '전체', 'PC']}, labelColor: "rgb(16, 167, 83)" },
    { id: 5, qtext: "최근검색어(자동저장) 켜기 관련 오류가 발생할 경우", atext: "'자동저장 끄기'가 아닌 '자동완성 끄기' 기능을 설정하였을 가능성이 있습니다.", labels: {"All" : ['검색어', '전체'], "SearchWord" : ['검색어', '검색·검색어']}, labelColor: "rgb(16, 167, 83)", category: ['All', 'SearchWord'] }, 
    { id: 6, qtext: "보호조치 사유 및 해제 방법", atext: "아이디의 도용이 의심되면, 추가 피해를 방지하기 위해 보호조치가 진행됩니다.", labels: {"All" : ['회원정보', '전체'], "Security" : ['회원정보', '도용·보안']}, labelColor: "rgb(16, 167, 83)", category: ['All'] }, 
    { id: 7, qtext: "네이버인증서 발급 방법", atext: "약관 동의 및 본인명의 휴대전화 인증, 계좌, 비밀번호 설정 후 발급 가능합니다.", labels: {"All" : ['네이버 인증서', '전체']}, labelColor: "rgb(57, 88, 236)", category: ['All'] },
    { id: 8, qtext: "새로운 환경 로그인 소개", atext: "새로운 환경에서 로그인할 경우 알림이 발송되는 서비스입니다.", labels: {"All" : ['회원정보', '전체'], "AccountManagement" : ['회원정보', '계정 관리']}, labelColor: "rgb(16, 167, 83)", category: ['All', 'AccountManagement'] }, 
    { id: 9, qtext: "도용 발생 시 대처 방법", atext: "네이버만의 안전한 비밀번호로 변경 후 이용해 보세요.", labels: {"All" : ['회원정보', '전체'], "Security" : ['회원정보', '도용·보안']}, labelColor: "rgb(16, 167, 83)", category: ['All', 'Security'] }, 
    { id: 10, qtext: "리뷰가 노출되지 않는 경우", atext: "장소를 검색 후 매칭하거나, 정책에 맞지 않는 경우 리뷰는 숨김 처리됩니다.", labels: {"All" : ['MY플레이스', '전체', 'MOBILE']}, labelColor: "rgb(25, 167, 142)", category: ['All'] },
    { id: 11, qtext: "MY플레이스 임시 이용 제한 안내", atext: "인증, 리뷰 작성의 부정사용이 발견되면 일정 기간 사용이 제한될 수 있습니다.", labels: {"All" : ['MY플레이스', '전체', 'MOBILE'], "RestrictionOfUse" : ['MY플레이스', '이용제한', 'MOBILE']}, labelColor: "rgb(25, 167, 142)", category: ['All', 'RestrictionOfUse'] }, 
    { id: 12, qtext: "네이버 결제내역 확인 방법(모르는 결제내역 확인)", atext: "네이버에서 결제한 내역은 네이버페이 > 결제내역 경로에서 확인할 수 있습니다.", labels: {"All" : ['네이버 전반', '전체'], "PaymentRefund" : ['네이버 전반', '결제·환불']}, labelColor: "rgb(16, 167, 83)", category: ['All', 'PaymentRefund'] }, 
    // 계정관리
    { id: 13, qtext: "개인 아이디 회원가입 방법", atext: "네이버 홈페이지에서 회원 가입 페이지로 접속하여 진행하실 수 있습니다.", labels: {"AccountManagement" : ['회원정보', '계정 관리']}, labelColor: "rgb(16, 167, 83)", category: ['AccountManagement'] },
    { id: 14, qtext: "단체 아이디 회원가입 방법", atext: "네이버 홈페이지에서 단체 회원 가입 페이지로 접속하여 진행하실 수 있습니다.", labels: {"AccountManagement" : ['회원정보', '계정 관리']}, labelColor: "rgb(16, 167, 83)", category: ['AccountManagement'] },
    { id: 15, qtext: "실명 회원 (실명 아이디) 소개", atext: "아이핀 또는 본인 명의 휴대전화 인증을 통해 실명 전환된 이용자입니다.", labels: {"AccountManagement" : ['회원정보', '계정 관리']}, labelColor: "rgb(16, 167, 83)", category: ['AccountManagement'] },
    { id: 16, qtext: "휴면 해제 방법", atext: "휴대전화로 본인확인 후 휴면 해제가 가능합니다.", labels: {"AccountManagement" : ['회원정보', '계정 관리']}, labelColor: "rgb(16, 167, 83)", category: ['AccountManagement'] },
    // 도용보안
    { id: 17, qtext: "내가 발급하지 않은 인증서가 확인되는 경우", atext: "인증서 삭제를 위해서는 본인 명의 휴대폰 또는 아이핀 인증이 필요합니다.", labels: {"Security" : ['네이버 인증서', '도용·보안']}, labelColor: "rgb(16, 167, 83)", category: ['Security'] },
    { id: 18, qtext: "도용이 의심되는 경우 안내", atext: "도용이 의심되는 경우 아래 내용을 확인해 보세요.", labels: {"Security" : ['회원 정보', '도용·보안']}, labelColor: "rgb(57, 88, 236)", category: ['Security'] },
    // 이용제한
    { id: 19, qtext: "이용제한 사유 및 해제 요청", atext: "이용제한 유형 및 상황별 안내에 따라 알맞은 해제 방법과 설명을 확인해 주세요.", labels: {"RestrictionOfUse" : ['이용제한', '이용제한']}, labelColor: "rgb(3, 199, 91)", category: ['RestrictionOfUse'] },
    { id: 20, qtext: "이용제한 게시물 유형 안내", atext: "네이버는 이용자의 권리를 보호하고자 몇 가지 규칙을 만들어 두었습니다.", labels: {"RestrictionOfUse" : ['이용제한', '이용제한']}, labelColor: "rgb(3, 199, 91)", category: ['RestrictionOfUse'] },
    // 권리보호
    { id: 21, qtext: "권리보호센터 서비스 소개", atext: "네이버에서 제공하는 모든 서비스에서 발생한 권리침해를 신고하실 수 있습니다.", labels: {"ProtectionOfRights" : ['권리보호센터', '권리보호']}, labelColor: "rgb(3, 199, 90)", category: ['ProtectionOfRights'] },
    { id: 22, qtext: "신고 가능한 게시물 유형", atext: "카페, 블로그, 지식iN 등 모든 서비스의 게시글, 댓글 등을 요청하실 수 있습니다.", labels: {"ProtectionOfRights" : ['권리보호센터', '권리보호']}, labelColor: "rgb(3, 199, 90)", category: ['ProtectionOfRights'] },
    // 결제환불
    { id: 23, qtext: "채널 정기구독 이용 방법", atext: "스트리머 채널을 정기적으로 유료 구독하여 정기 후원하는 것입니다.", labels: {"PaymentRefund" : ['네이버 게임', '결제·환불']}, labelColor: "rgb(78, 65, 219)", category: ['PaymentRefund'] },
    { id: 24, qtext: "네이버 결제내역 확인 방법(모르는 결제내역 확인)", atext: "네이버에서 결제한 내역은 네이버페이 > 결제내역 경로에서 확인할 수 있습니다.", labels: {"PaymentRefund" : ['네이버 전반', '결제·환불']}, labelColor: "rgb(16, 167, 83)", category: ['PaymentRefund'] },
    // 예약주문
    { id: 25, qtext: "만만한 캠핑 이벤트 안내", atext: "한국관광공사 고캠핑과 함께 만만한 캠핑 이벤트를 진행합니다.", labels: {"ReservationOrder" : ['네이버 예약주문 이용자', '예약·주문']}, labelColor: "rgb(3, 199, 91)", category: ['ReservationOrder'] },
    // 검색검색어
    { id: 26, qtext: "Cue: 서비스 소개", atext: "Cue:는 검색 경험의 확장을 위해 새롭게 선보이는 AI 검색 서비스입니다.", labels: {"SearchWord" : ['네이버 검색', '검색·검색어']}, labelColor: "rgb(3, 199, 91)", category: ['SearchWord'] },
    { id: 27, qtext: "최근검색어가 사라진 경우", atext: "PC에서 최대 10개, 모바일에서 최대 30개의 최근검색어 목록을 제공합니다.", labels: {"SearchWord" : ['검색어', '검색·검색어']}, labelColor: "rgb(16, 167, 83)", category: ['SearchWord'] },
    // 이벤트혜택
    { id: 28, qtext: "기간 한정 네이버플러스 멤버십 3개월 무료 프로모션, 멤버십 회원 대상 1만원 이상 구매 시 도착보장 무료배송 프로모션", atext: "멤버십 3개월 무료 이용권 제공 및 도착 보장 상품 무료 배송 프로모션을 진행합니다.", labels: {"EventBenefit" : ['네이버플러스 멤버십', '이벤트·혜택']}, labelColor: "rgb(3, 199, 91)", category: ['EventBenefit'] },
    { id: 29, qtext: "네이버 만보기 걷기 챌린지 소개", atext: "걷기 챌린지는 이용자의 꾸준한 걷기 활동을 위해 네이버가 매월 진행하는 소정의 경품 제공 이벤트입니다.", labels: {"EventBenefit" : ['네이버앱', '이벤트·혜택']}, labelColor: "rgb(3, 199, 91)", category: ['EventBenefit'] },
    { id: 30, qtext: "미션 참여 및 스탬프 획득 방법", atext: "각 미션에 해당하는 조건이 충족될 때마다 스탬프는 미션별 1개만 획득할 수 있습니다.", labels: {"EventBenefit" : ['MY플레이스', '이벤트·혜택', 'MOBILE']}, labelColor: "rgb(25, 167, 142)", category: ['EventBenefit'] },
    // 프로필 설정
    { id: 31, qtext: "프로필 변경 방법", atext: "개별 카페 프로필 설정을 통해 카페 내 정보를 변경할 수 있습니다.", labels: {"ProfileSettings" : ['카페', '프로필 설정', 'PC']}, labelColor: "rgb(3, 199, 91)", category: ['ProfileSettings'] },
    { id: 32, qtext: "프로필 정보 수정 방법", atext: "내 블로그 관리에서 블로그명, 별명, 소개 글, 프로필 사진 변경 가능합니다.", labels: {"ProfileSettings" : ['블로그', '프로필 설정', 'PC']}, labelColor: "rgb(3, 199, 91)", category: ['ProfileSettings'] },
    // 알림설정
    { id: 33, qtext: "도착 알림 문제 해결 방법", atext: "네이버앱 버전, 아이디 로그인 여부, 알림 허용을 확인해 주세요.", labels: {"NotiSettins" : ['네이버 전자문서', '알림 설정']}, labelColor: "rgb(0, 184, 217)", category: ['NotiSettins'] },
    { id: 34, qtext: "간편 알림 끄기/켜기 소개", atext: "끄고 싶은 알림의 더보기 버튼을 눌러 알림을 끄거나 켤 수 있습니다.", labels: {"NotiSettins" : ['네이버 알림', '알림 설정', 'MOBILE']}, labelColor: "rgb(3, 199, 91)", category: ['NotiSettins'] },
    { id: 35, qtext: "알림이 오지 않는 경우", atext: "서비스별 알림 설정 상태를 확인해주세요.", labels: {"NotiSettins" : ['네이버 알림', '알림 설정']}, labelColor: "rgb(3, 199, 91)", category: ['NotiSettins'] },
];

export const fetchMainFaqContents = createAsyncThunk(
    "mainFaqContents/fetchMainFaqContents",
    async (faqCategory, thunkAPI) => {
        try {
            if(faqCategory) {
                const filteredMainFaqContents = mainFaqContents.filter(mainFaqContent => mainFaqContent.category?.some(cat => cat.toLowerCase() === faqCategory.toLowerCase()));
                return filteredMainFaqContents
            } else {
                return mainFaqContents;
            }
        } catch(e) {
            return thunkAPI.rejectWithValue("Error loading products")
        }
    }
)

const initialState = {
    mainFaqContents: [],
    isLoading: false,
    error: ''
}

export const mainFaqSlice = createSlice({
    name: 'mainFaqContents',
    initialState, 
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(fetchMainFaqContents.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchMainFaqContents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.mainFaqContents = action.payload;
        })
        .addCase(fetchMainFaqContents.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default mainFaqSlice.reducer;
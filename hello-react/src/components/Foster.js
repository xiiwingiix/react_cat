import React,{Component, Fragment} from 'react';
import AnimalDetails from './AnimalDetails.js';
import BoardWrite from './BoardWrite.js';

import '../css/basic.css';
import '../css/style.css';


class Foster extends Component {
	constructor(props){
		super(props)
		this.state = {
            showPopup_details : false,
            showPopup_write : false,
            area_active : '전체',
            areaArr: [
                { value: "전체", name: "전체" },
                { value: "서울", name: "서울" },
                { value: "경기", name: "경기" },
                { value: "인천", name: "인천" },
                { value: "부산", name: "부산" },
                { value: "대구", name: "대구" },
                { value: "광주", name: "광주" },
                { value: "대전", name: "대전" },
                { value: "울산", name: "울산" },
            ],
            
		}
	}
	togglePopup_details(e) {
		this.setState({
			showPopup_details: !this.state.showPopup_details
		});

		return false;
    }
    
	togglePopup_write(e) {
		this.setState({
			showPopup_write: !this.state.showPopup_write
		});

		return false;
    }
    
    onChangeArea(Area){
        this.setState({
            area_active : Area
        })
    }
    render(){
        return(
            <Fragment>
                <section className="animal_list content">
                    <div className="top pb30">
                        <h1 className="tit">임시 보호</h1>
                        <p className="subtxt pb20">잠시나마 우리의 사랑을 나누어 주세요.</p>
                        <p className="btn_wrap roundBtn_wrap">
                            <span className={this.state.area_active === '전체' ? 'on' : '' } onClick = {(e) => this.onChangeArea('전체')}>전체</span>
                            <span className={this.state.area_active === '서울' ? 'on' : '' } onClick = {(e) => this.onChangeArea('서울')}>서울</span>
                            <span className={this.state.area_active === '경기' ? 'on' : '' } onClick = {(e) => this.onChangeArea('경기')}>경기</span>
                            <span className={this.state.area_active === '인천' ? 'on' : '' } onClick = {(e) => this.onChangeArea('인천')}>인천</span>
                            <span className={this.state.area_active === '부산' ? 'on' : '' } onClick = {(e) => this.onChangeArea('부산')}>부산</span>
                            <span className={this.state.area_active === '대구' ? 'on' : '' } onClick = {(e) => this.onChangeArea('대구')}>대구</span>
                            <span className={this.state.area_active === '광주' ? 'on' : '' } onClick = {(e) => this.onChangeArea('광주')}>광주</span>
                            <span className={this.state.area_active === '대전' ? 'on' : '' } onClick = {(e) => this.onChangeArea('대전')}>대전</span>
                            <span className={this.state.area_active === '울산' ? 'on' : '' } onClick = {(e) => this.onChangeArea('울산')}>울산</span>
                            <span className={this.state.area_active === '강원' ? 'on' : '' } onClick = {(e) => this.onChangeArea('강원')}>강원</span>
                            <span className={this.state.area_active === '충북' ? 'on' : '' } onClick = {(e) => this.onChangeArea('충북')}>충북</span>
                            <span className={this.state.area_active === '충남' ? 'on' : '' } onClick = {(e) => this.onChangeArea('충남')}>충남</span>
                            <span className={this.state.area_active === '전북' ? 'on' : '' } onClick = {(e) => this.onChangeArea('전북')}>전북</span>
                            <span className={this.state.area_active === '전남' ? 'on' : '' } onClick = {(e) => this.onChangeArea('전남')}>전남</span>
                            <span className={this.state.area_active === '경북' ? 'on' : '' } onClick = {(e) => this.onChangeArea('경북')}>경북</span>
                            <span className={this.state.area_active === '경남' ? 'on' : '' } onClick = {(e) => this.onChangeArea('경남')}>경남</span>
                            <span className={this.state.area_active === '제주' ? 'on' : '' } onClick = {(e) => this.onChangeArea('제주')}>제주</span>
                        </p>
                    </div>
                    <div className="mid">
                        <div className="btn_wrap">
                            <span className="sort kind">
                                <span className="on">강아지</span>
                                <span>고양이</span>
                            </span>
                            <span className="sort state">
                                <span className="on">진행 중</span>
                                <span>완료</span>
                            </span>
                            <div className="roundBtn_wrap">
                                <span onClick={this.togglePopup_write.bind(this)}>등록하기</span>
                            </div>
                        </div>

                        <ul className="list_wrap">
                            <li state="on" onClick={this.togglePopup_details.bind(this)}>
                                <div className="thumb" style={{"backgroundImage":"url(https://www.catjoa.com/dog_sale/photo_free/201912/1577725900_26588400.jpg)"}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">임보 보호자를 찾아요</p>
                                    <p className="subtxt mb20">	주유소에서 5냥이 구조하여 동물병원에서 분유사서 먹인다음 3마리는 입양보냈고 나머지 2마리는 본가에서 키웠습니다. 구조당시 어머냥이는 새끼를 낳고 무지개다리 건넜구요 ... 제가 본가에서 데려온지 한달이 지났는데 신랑이 고양이와 맞지않아 힘들어하여 입양을 결정하였습니다...곧 제 뱃속에 아가도 태어나서 신랑이 더 예민하네요 ...신랑과 계속 싸우는것도 힘들어서 힘들게 입양 결정합니다..</p>
                                    <p className="info">
                                        <span>코숏</span>
                                        <span>서울시 도봉구</span>
                                        <span>5년</span>
                                        <span>여아</span>
                                        <span>중성화</span>
                                        <span>예방접종</span>
                                    </p>
                                </div>
                            </li>
                            <li state="off" onClick={this.togglePopup_details.bind(this)}>
                                <div className="thumb" style={{"backgroundImage":"url(https://www.catjoa.com/dog_sale/photo_free/202001/1577847202_42135700.jpg)"}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">임보 보호자를 찾아요</p>
                                    <p className="subtxt mb20">서울강서)골골대장 반반이 집사님 찾아요~.. 3개월령이고 독트관 삼색무늬에 얼굴은 반반으로 나뉘 아수라냥입니다.. 돌보던 어미가 이소하고 2개월령때 구조되어 사람 손 탄 아기냥이예요만지면 고롱고롱 골골송 대장에 똥꼬발랄합니다. 냥이전문 동물병원샘이 카오스가 순하고 똑똑하데요..진짜 보시면 실물이 더 이뽀요!!입양조건)1.전가족동의.2 묘생함께할 경제력,책임감 3.방묘문 방묘창 설치권유 4.한동안 아이사진 공유5.계약서 작성, 데려다 드려요문의주시면 더 많은 사진 동영상 보내드려요..</p>
                                    <p className="info">
                                        <span>코숏</span>
                                        <span>서울시 도봉구</span>
                                        <span>5년</span>
                                        <span>여아</span>
                                        <span>중성화</span>
                                        <span>예방접종</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on" onClick={this.togglePopup_details.bind(this)}>
                                <div className="thumb" style={{"backgroundImage":"url(https://www.catjoa.com/dog_sale/photo_free/202001/1577845030_59707000.gif)"}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">임보 보호자를 찾아요</p>
                                    <p className="subtxt mb20">개인사정으로 분양합니다. 귀엽고 이쁘고 애교많아요. 잘 키워주실분 문자주세요...</p>
                                    <p className="info">
                                        <span>코숏</span>
                                        <span>서울시 도봉구</span>
                                        <span>5년</span>
                                        <span>여아</span>
                                        <span>중성화</span>
                                        <span>예방접종</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* 상세보기 팝업*/}
					{this.state.showPopup_details ? <AnimalDetails closePopup={this.togglePopup_details.bind(this)}/>: null}

                    {/* 등록하기 팝업*/}
					{this.state.showPopup_write ? <BoardWrite closePopup={this.togglePopup_write.bind(this)}/>: null}

                </section>
            </Fragment>
        )
    }
}
export default Foster;
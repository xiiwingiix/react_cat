import React,{Component, Fragment} from 'react';
import AnimalDetails from './AnimalDetails.js';
import BoardWrite from './BoardWrite.js';

import '../css/basic.css';
import '../css/style.css';


class Foster extends Component {
	constructor(props){
		super(props);
		this.onChangeSortKind = this.onChangeSortKind.bind(this);
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
				{ value: "강원", name: "강원" },
				{ value: "충북", name: "충북" },
				{ value: "충남", name: "충남" },
				{ value: "전북", name: "전북" },
				{ value: "전남", name: "전남" },
				{ value: "경북", name: "경북" },
				{ value: "경남", name: "경남" },
				{ value: "제주", name: "제주" }
			],
			sort_kind : 'dog',
			kindArr :[
				{value : 'dog', name : '강아지'},
				{value : 'cat', name : '고양이'},
				{value : 'etc', name : '기타'},
				{value : 'all', name : '전체'}
			],
			sort_state : 'isGoing'
		}
	}
	//팝업 상세보기
	togglePopup_details(e) {
		this.setState({
			showPopup_details: !this.state.showPopup_details
		});

		return false;
	}
	//팝업 등록하기
	togglePopup_write(e) {
		this.setState({
			showPopup_write: !this.state.showPopup_write
		});

		return false;
	}	
	//상단 지역 선택
	onChangeArea(Area){
		this.setState({area_active : Area})
	}

	//동물 분류 나누기 
	onClickSortKind(e){
		this.setState({sort_kind : e.target.value})
		console.log(this.state.sort_kind)
	}
	render(){

		return(
			<Fragment>
				<section className="animal_list content">
					<div className="top pb30">
						<h1 className="tit">임시 보호</h1>
						<p className="subtxt pb20">잠시나마 우리의 사랑을 나누어 주세요.</p>
						<p className="btn_wrap roundBtn_wrap">
							{
								this.state.areaArr.map((area, index) => {
									return(
										<span 
											key={ index } 
											className={ (this.state.area_active === area.value)? 'on' : '' } 
											onClick={ (e) => this.onChangeArea(area.value) }>
												{ area.name }
										</span>
									)
								})
							}
						</p>
					</div>
					<div className="mid">
						<div className="btn_wrap">
							<span className="sort kind">
								{
									this.state.kindArr.map((kind, index) => {
										return(
											<span 
												key={ index } 
												className={ (this.state.kind_active === kind.value)? 'on' : '' } 
												onClick={ (e) => this.onClickSortKind(kind.value) }>
													{ kind.name }
											</span>
										)
									})
								}

								{/* <button className={this.state.sort_kind === 'dog' ? 'on':''} onClick={this.onClickSortKind} value = 'dog'>강아지</button>
								<button className={this.state.sort_kind === 'cat' ? 'on':''} onClick={this.onClickSortKind} value = 'cat'>고양이</button>
								<button className={this.state.sort_kind === 'etc' ? 'on':''} onClick={this.onClickSortKind} value = 'etc'>기타</button>
								<button className={this.state.sort_kind === 'all' ? 'on':''} onClick={this.onClickSortKind} value = 'all'>전체</button> */}
							</span>
							<span className="sort state">
								<button className={this.state.sort_state === 'isGoing' ? 'on':''} onClick={this.onChangeSortKind} value = 'isGoing'>진행 중</button>
								<button className={this.state.sort_state === 'done' ? 'on':''} onClick={this.onChangeSortKind} value = 'done'>완료</button>
								<button className={this.state.sort_state === 'all' ? 'on':''} onClick={this.onChangeSortKind} value = 'isGoing'>전체</button>

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
import React,{Component, Fragment} from 'react';

class BoardWrite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCity : '서울',
			address_opt : [
				{id : 1, city : "서울", country : ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"]},
				{id : 2, city : "경기", country : ["가평군", "고양시", "과천시","광명시","광주시","구리시","군포시","김포시","남양주","동두천","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","양평군","여주군","연천군","오산시","용인시","의왕시","의정부","이천시","파주시","평택시","포천시","하남시","화성시"]},
				{id : 3, city : "인천", country : ["강화군","계양구","미추홀구","남동구","동구","부평구","서구","연수구","옹진군","중구"]},
				{id : 4, city : "부산", country : ["강서구","금정구","기장군","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구"]},
				{id : 5, city : "대구", country : ["남구","달서구","달성군","동구","북구","서구","수성구","중구"]},
				{id : 6, city : "광주", country : ["광산구","남구","동구","북구","서구" ]},
				{id : 7, city : "대전", country : ["대덕구","동구","서구","유성구","중구"]},
				{id : 8, city : "울산", country :["남구","동구","북구","울주군","중구"]},
				{id : 9, city : '강원', country : ["강릉시","고성군","동해시","삼척시","속초시","양구군","양양군","영월군","원주시","인제군","정선군","철원군","춘천시","태백시","평창군","홍천군","화천군","횡성군"]},
				{id : 10, city : '충북', country : ["괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","증평군","진천군","청원군","청주시","충주시" ]},
				{id : 11, city : '충남', country : ["계룡시","공주시","금산군","논산시","당진시","보령시","부여군","서산시","서천군","아산시","연기군","예산군","천안시","청양군","태안군","홍성군" ]},
				{id : 12, city : '전북', country :["고창군","군산시","김제시","남원시","무주군","부안군","순창군","완주군","익산시","임실군","장수군","전주시","정읍시","진안군" ]},
				{id : 13, city : '전남', country :["강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시","무안군","보성군","순천시","신안군","여수시","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"]},
				{id : 14, city : '경북', country :["경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군","상주시","성주군","안동시","영덕군","영양군","영주시","영천시","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군","포항시" ]},
				{id : 15, city : '경남', country :["거제시","거창군","고성군","김해시","남해군","밀양시","사천시","산청군","양산시","의령군","진주시","창녕군","창원시","통영시","하동군","함안군","함양군","합천군" ]},
				{id : 16, city : '제주', country : ["서귀포시","제주시"]}
			],
			selectedKind : 'dog',
			kind : [
				{id :1, classify :'dog', kind:["골든리트리버","그레이트덴","그레이트피레니즈","그레이하운드","꼬똥드툴레아","뉴펀들랜드","닥스훈트","달마시안","도고아르젠티노","도베르만","라브라도 리트리버","라사압소","라이카","로트와일러","마리노이즈","마스티프","말티즈","미니핀","바센지","바셋하운드","바이마리너","버니즈마운틴독","베들링턴 테리어","보더콜리","보스톤테리어","복서","볼조이","불개","불독","불테리어","브러쉘그리폰","브리타니","비글","비숑프리제","비어디드콜리","비즐라","빠삐용","사모예드","삽살이","샤페이","세인트버나드","세퍼트","셰틀랜드쉽독","슈나우저","스탠다드 푸들","시바견","시베리안허스키","시츄","아메리카코커스파니엘","아이리쉬세타","아키타","아프간하운드","알래스카 말라뮤트","에어데일 테리어","오브차카","올드 잉글리쉬 쉽독","와이어 폭스테리어","요크셔테리어","웰쉬코기 카디건","잉글리쉬코카스파니엘","잭 러셀 테리어","저패니즈스피츠","진돗개","차우차우","치와와","친(chin)","케인코르소","콜리","킹찰스스파니엘","토이푸들","퍼그","페키니즈","펨브록 웰시 코기","포메라니안","포인터","푸들","풍산개","프랜치불독","핏불테리어","화이트테리어","기타"]},
				{id :2, classify :'cat', kind:["노르웨이 숲","러시안 블루","뱅갈","버밀라","버미즈","버만","브리티쉬 숏헤어","사바나캣","샴","스코티쉬 폴드","스핑크스","아메리칸 밥테일","아메리칸 숏헤어","아비시니안","이집트 마우","엑죠틱 숏헤어","재패니스 밥테일","친칠라","터키쉬 밴","터키쉬 앙고라","페르시안","하바나","한국 고양이","히말라야","오리엔탈숏헤어","오리엔탈롱헤어","아메리칸와이어헤어","아메리칸머마즈","유럽피안버마즈","하바나브라운","아메리칸컬","코니쉬렉스","스노우슈","먼치킨","데몬렉스","싱가푸라","롱키니즈","메인쿤","소말리","봄베이","망스","라펌","렉돌","네바마스커레이드","셀커크 렉스","기타"]},
				{id :3, classify :'etc', kind : ['햄스터','앵무새','거북이','기타']}
			]
		}
	}
	componentDidMount(){

	}
	// 시/도 select 변경
	onChangeSelectCity = (e) => {
		this.setState({selectedCity : e.target.value});
	}
	// 동물 종류 변경
	onChangeSelectKind = (e) => {
		this.setState({selectedKind : e.target.value});

	}

	render(){
		// 시/도 옵션
		const cityOption = this.state.address_opt.map((addr, index) =>
			<option value = {addr.city} key = {index}>{addr.city}</option>
		)

		// 시/군/구 옵션
		const countryArray = this.state.address_opt.find(addr =>
			addr.city === this.state.selectedCity
		);
		const countryOption = countryArray.country.map((addr, index) =>
			<option value = {addr} key = {index}>{addr}</option>
		)

		// 품종 옵션
		const kindArray = this.state.kind.find(addr => addr.classify === this.state.selectedKind);
		const kindOption = kindArray.kind.map((addr, index) =>
			<option value = {addr} key = {index}>{addr}</option>
		)

		// console.log('선택된 도시 :'+this.state.selectedCity+'   선택된 동물:'+this.state.selectedKind);

		return(
			<Fragment>
				<div className="pop BoardWrite" >
					<div className="outer">
						<div className="inner">
							<div className="centered pop_wrap">
								<button className="close_btn" onClick={this.props.closePopup}>&times;</button>
								<div>
									<ul>
										<li>
											<div className='tit'>지역</div>
											<div className="subtxt">
												<select name="city" title="시/도선택" className="select width2 " onChange={this.onChangeSelectCity} defaultValue ={this.state.selectedCity}>{cityOption}</select>
												<select name="country" title="시/군/구선택" className="select width2 ">{countryOption}</select>
											</div>
										</li>
										<li>
											<div className="tit">동물선택</div>
											<div className="subtxt">
												<button className={'width4 '+ (this.state.selectedKind === 'dog' ? 'on':'')} onClick = {this.onChangeSelectKind} value = 'dog'>강아지</button>
												<button className={'width4 '+ (this.state.selectedKind === 'cat' ? 'on':'')} onClick = {this.onChangeSelectKind} value = 'cat'>고양이</button>
												<button className={'width4 '+ (this.state.selectedKind === 'etc' ? 'on':'')} onClick = {this.onChangeSelectKind} value = 'etc'>기타</button>
											</div>
											<div className="tit">품종</div>
											<div className="subtxt">
												<select className="width1" name="kind">{kindOption}</select>
											</div>

											<div className="tit">성별</div>
											<div className="subtxt">
												<button className="width4 on">남</button>
												<button className="width4">여</button>
											</div>

											<div className="tit">중성화</div>
											<div className="subtxt">
												<button className="width4 on">예</button>
												<button className="width4">아니오</button>
											</div>

											<div className="tit">나이</div>
											<div className="subtxt">
												<button className="btn_cnt minus">-</button>
												<input className="width4 input_cnt" type="text"/>
												<button className="btn_cnt plus">+</button>
											</div>

											<div className="tit">예방접종</div>
											<div className="subtxt">
												<button className="width4 on">예</button ><button className="width4">아니오</button><br/>
												<input className="width2 mt10" type="text"/>
												<button className="btn_subOpt ">삭제</button><button className="btn_subOpt">추가</button>
											</div>
										</li>
										<li>
											<div className="tit">사유</div>
											<div className="subtxt">
												<textarea className="width1"></textarea>
											</div>
										</li>
										<li>
											<div className="tit">연락처</div>
											<div className="subtxt">
												<input className="width2" type="text"/><br/>
											<input className="width2 mt10" type="text" placeholder="숫자코드 4자리 입력"/><button>인증번호 요청</button>
											</div>
										</li>
										<li>
											<div className="tit">이미지</div>
											<div className="subtxt">
												<ul>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
													<li></li>
												</ul>
											</div>
										</li>
									</ul>
									<div className="bottom">
										<button className="btn_cancel">취소</button>
										<button className="btn_ok">등록 완료</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default BoardWrite;

import React,{Component, Fragment} from 'react';

class BoardWrite extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
			]
		}
	}
	componentDidMount(){

	}
	selectCity = (e) => {

	}

	render(){
		const cityList = this.state.address_opt.map((addr, index) =>
			<option value = {addr.city} key = {index}>{addr.city}</option>
		)

		return(
			<Fragment>
				<div className="pop BoardWrite" >
					<div className="outer">
						<div className="inner">
							<div className="centered pop_wrap">
								<button className="close_btn">&times;</button>
									<dl>
										<dt>지역</dt>
										<dd>
											<select name="city" title="시/도선택" className="select" onChange={this.selectCity}>{cityList}</select>
										</dd>
										<dt>지역 상세</dt>
										<dd>
<select name="country" title="시/군/구선택" className="select">

</select>
</dd>
</dl>
</div>
</div>
</div>
</div>
</Fragment>
);
}
}

export default BoardWrite;

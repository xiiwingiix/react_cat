import React, {Component, Fragment} from 'react';
import Swiper from 'swiper';

import banner_06 from '../img/banner_06.jpg';
import banner_02 from '../img/banner_02.jpg';

class Main extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			showPopup : false
		}
	}
	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
		console.log(this.showPopup)
	}
    componentDidMount(){
        new Swiper('.Main_banner', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        new Swiper('.multiple', {
            slidesPerView: 5,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className="main content">
                    <div className="swiper-container Main_banner">
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide"><img src={banner_06} alt="배너이미지"/></li>
                            <li className="swiper-slide"><img src={banner_02} alt="배너이미지"/></li>
                        </ul>
                        {/* Add Pagination */}
                        <div className="swiper-pagination"></div>
                        {/* Add Arrows */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                
                    <div className="swiper-container multiple foster_slide">
                        <div className="top">
                            <h1 className="main_tit">Foster<br/><span>보호가 필요해요!</span></h1>
                            <div className="btn_wrap"><span>Dog</span><span>Cat</span><span>더보기</span></div>
                        </div>
                        <ul className="swiper-wrapper ">
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>

                                <div className="img"> <img alt="임보 사진" src="https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="임보 사진" src="https://i.pinimg.com/564x/95/05/2b/95052bdee0cec3b0a0294b063394752c.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="임보 사진" src="https://i.pinimg.com/564x/3b/57/b7/3b57b7c031dabb1b233f25b1bcadfb60.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="임보 사진" src="https://i.pinimg.com/564x/26/c9/a7/26c9a7986008a87226f92b73fcf3fdcb.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="임보 사진" src="https://i.pinimg.com/564x/cd/d8/f5/cdd8f5f2c19f083f661a0700212d44d4.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="임보 사진" src="https://i.pinimg.com/564x/3a/45/75/3a4575f4c27f05cf4d03989ecac701b4.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                        </ul>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                    <div className="swiper-container multiple adoption_slide">
                        <div className="top">
                            <h1 className="main_tit">Adoption<br/><span>새로운 가족을 찾아요!</span></h1>
                            <div className="btn_wrap"><span>Dog</span><span>Cat</span><span>더보기</span></div>
                        </div>
                        <ul className="swiper-wrapper">
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="분양 사진" src="https://i.pinimg.com/564x/ab/a7/ce/aba7ce37852157a1c686416523178035.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="분양 사진" src="https://i.pinimg.com/564x/22/73/93/227393359560902cd9d32235789d1a7c.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="분양 사진" src="https://i.pinimg.com/564x/83/51/62/835162fdc62fb9a40f0b3947f3273d5e.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="분양 사진" src="https://i.pinimg.com/564x/ec/fe/7f/ecfe7f475c82793b1fdf2452f65b86aa.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="분양 사진" src="https://i.pinimg.com/564x/96/7b/1f/967b1fe59eb9dc8d4e451f34d0bff78c.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                            <li className="swiper-slide" onClick={this.togglePopup.bind(this)}>
                                <div className="img"> <img alt="분양 사진" src="https://i.pinimg.com/564x/3c/6a/e6/3c6ae6bd16fbd3476f7cdadeb4c75b4a.jpg"/></div>
                                <div className="area">
                                    <p className="tit">경기 지역</p>
                                    <p className="txt">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</p>
                                    <p className="txt2 roundBtn_wrap"><span>한국고양이</span><span>남아</span><span> 6개월</span></p>
                                </div>
                            </li>
                        </ul>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
					{this.state.showPopup ? <AnimalDetails closePopup={this.togglePopup.bind(this)}/>: null}

              </div>
            </React.Fragment>
        )
    }
}

class AnimalDetails extends Component {

	componentDidMount(){
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 'auto',
			loopedSlides: 5,
			loop:true,
		});
		new Swiper('.gallery-top', {
			spaceBetween: 10,
			loop:true,
			loopedSlides: 5, //looped slides should be the same
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: galleryThumbs,
			},
		});

	}

    render(){
        return(
            <Fragment>
                <div className="pop AnimalDetails" onClick={this.props.closePopup}> 
					<div className="outer">
						<div className="inner">
							<div className="centered pop_wrap">
								<article className="top" style={{"backgroundImage":"url(https://i.pinimg.com/564x/95/05/2b/95052bdee0cec3b0a0294b063394752c.jpg)"}}>
									<div className="tag">임보 구함</div>
									<div className="tit">개인사정으로 인해 분양하게 되었습니다. 아가는 착해요</div>
									<p className="txt2 roundBtn_wrap">
										<span>경기도 안양</span>
										<span>한국고양이</span>
										<span>남아</span>
										<span>6개월</span>
										<span>중성화 완료</span>
										<span>예방접종 완료</span>
										<span>연락처 보기</span>
									</p>
								</article>
								<article className="mid">
										<div>
											<table>
												<colgroup>
													<col width="20%"/>
													<col width="30%"/>
													<col width="20%"/>
													<col width="30%" />
												</colgroup>
												<tbody>
													<tr>
														<th>지역</th><td>경기도 안양시</td>
														<th>연락처</th><td>010-1234-1234</td>
													</tr>
													<tr>
														<th>분류</th><td colSpan='3'>한국고양이</td>
													</tr>
													<tr>
														<th>성별</th><td>남아</td>
														<th>나이</th><td>6개월</td>
													</tr>
													<tr>
														<th>중성화</th><td>완료</td>
														<th>예방접종</th><td>완료</td>
													</tr>
												</tbody>


											</table>    
											<section>
												<div className="swiper-container gallery-top">
													<div className="swiper-wrapper">
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/95/05/2b/95052bdee0cec3b0a0294b063394752c.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/3b/57/b7/3b57b7c031dabb1b233f25b1bcadfb60.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/26/c9/a7/26c9a7986008a87226f92b73fcf3fdcb.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/95/05/2b/95052bdee0cec3b0a0294b063394752c.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/3b/57/b7/3b57b7c031dabb1b233f25b1bcadfb60.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/26/c9/a7/26c9a7986008a87226f92b73fcf3fdcb.jpg)"}}></div>

													</div>
													<div className="swiper-button-next swiper-button-white"></div>
													<div className="swiper-button-prev swiper-button-white"></div>
												</div>
												<div className="swiper-container gallery-thumbs">
													<div className="swiper-wrapper">
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/95/05/2b/95052bdee0cec3b0a0294b063394752c.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/3b/57/b7/3b57b7c031dabb1b233f25b1bcadfb60.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/26/c9/a7/26c9a7986008a87226f92b73fcf3fdcb.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/ba/f4/4c/baf44ce74e8458729116c5e69ae2c48c.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/95/05/2b/95052bdee0cec3b0a0294b063394752c.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/3b/57/b7/3b57b7c031dabb1b233f25b1bcadfb60.jpg)"}}></div>
														<div className="swiper-slide" style={{"backgroundImage":"url(https://i.pinimg.com/564x/26/c9/a7/26c9a7986008a87226f92b73fcf3fdcb.jpg)"}}></div>
													</div>
												</div>
											</section>
											<section className="txt">
												♡분양글양식♡<br/>
												*묘종&#38;견종 : 코리안 숏헤어<br/>
												*이름: 고순이랑 양희<br/>
												*성별: 여아<br/>
												*생년월일 : 2.3년 추정<br/>
												*중성화유무 : 유<br/>
												*접종유무 : 접종 완료<br/>
												*분양지역 : 충남 서산<br/>
												*분양조건 :<br/>
												#전업주부 대환영 #중성화수술 필수<br/>
												#미성년자 입양안됨 #가정방문 필수<br/>
												#입양계약서 작성 필수<br/>
												*입양문의: ***025<br/>
												<br/>
												☆사진첨부 및 하고픈말<br/>
												아기냥이들과 같이 버려진 고순이입니다..<br/>
												아기냥이(삼순이,먹물이)의 입양도 쉽지 않았기에....우리 고순이..입양글을 쓰기도<br/>
												전에 걱정부터 앞서네요...<br/>
												11월 중순 아기냥이들과 버려진건 한치건너 캣맘에게 듣고 임보를 시작했어요...<br/>
												고순이는 버려질만큼 고약스런 고양이가 아니에요...고약한 고양이라도 가족이라면 끝까지 함께해야하는게 맞구요....
												<br/>
												고순이는 느긋한 성격이에요~촐랑 거리는것도 없고...설렁설렁..제옆에서 앉아서 쉬는<br/>
												걸 좋아하고...생김새처럼 둥굴둥굴해요~~<br/>
												고순이 마저 입양 보내면 <br/>
												지인에게 맡겨둔 한짝이.반짝이 데려오려고 했는데...음....<br/><br/>오늘 입양간 양희의 파양 통보를 받았네요...ㅠ<br/>
												양희는 올 4월 천안으로 입양을 간 아이입니다.<br/>
												아파트 주민들의 민원으로 내쫒겨질 처지에 놓인 길고양이 양희를 구조하여 새가족을<br/>
												찾아줬네요...한데..평생 꽃길만 걷기를 바랬는데...보호자의 개인적인 사정으로 파양을 요청햐셨어요ㅠ<br/>
												지금 제가 구조한 냥이 둘도 고순이 때문에 지인집에 맡겨둔 상태라..양희를 제가 데<br/>
												려올수가 없어요...다행이 새로운 가족이 생길때까지 잠시 기다려 주신다고 하네요...<br/>
												양희는 사랑도 많고 순둥순당하다고 해요..다만 다른 고양이와 합사가 안되 파양을 결<br/>
												정하셨다고 해요,,...양희는 고양이가 없는 집으로 입양을 가야할것같아요....<br/>
												순하고 착한 우리 양희.....입양 부탁드립니다...고순이..양희...순한 아이들입니<br/>
												다...<br/>
												<br/>
												불쌍한 아이들 손잡아주세요.ㅠ<br/>
												<br/>
												어디든 아이들 데려다 드립니다...연락 부탁드립니다.....<br/>
											</section>

											<div>
												<strong>※ Pet It에서는 고양이 임보 및 입양에 대한 장소를 제공할 뿐이며 상호간의 거래에 대한 책임은 거래 당사자에게 있습니다.</strong>
												<br/><br/>

												<ol>
													<li> 임보 및 입양 시 유의사항을 꼭 읽어보시고 [임보 · 입양 계약서]를 2부 반드시 작성하여 1부씩 보관하시기 바랍니다.분양계약서 미교부시 어떤 보상도받으실 수 없습니다, 작성시 신분확인을 위한 신분증 혹은 사업자등록증을 필히 확인하세요.</li>
													<li>임보 및 입양 시 절대 길에서 혹은 밖에서 분양받지 않도록 합니다. 사업장 혹은 직접 가정방문 후 분양받으셔야 피해 발생 시 보상받을 수 있습니다.</li>
													<li>임보 및 입양 시 동물의 건강상태와 수의사의 진료기록 및 예방접종기록의 정보내용이 동일한지를 확인한 후 거래하셔야 합니다.</li>
													<li>임보 및 입양 시 동물을 인계 받고나서 대금을 지불하시고, 가급적 지역이 가까운곳에서 거래하시기 바랍니다.</li>
												</ol>
											</div>
										</div>
                        			</article>
                    		</div>
						</div>
					</div>
                </div>
						
            </Fragment>
        )
    }
}

export default Main 
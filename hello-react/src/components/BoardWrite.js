import React,{Component, Fragment} from 'react';

class BoardWrite extends Component {
    render(){
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
                                        <select name="city1" title="시/도선택" class="select">
								    		<option value="">:: 시/도 ::</option>
                                            <option value="서울특별시" title="서울특별시" selected="selected">서울특별시</option>
                                            <option value="부산광역시" title="부산광역시">부산광역시</option>
                                            <option value="대구광역시" title="대구광역시">대구광역시</option>
                                            <option value="인천광역시" title="인천광역시">인천광역시</option>
                                            <option value="광주광역시" title="광주광역시">광주광역시</option>
                                            <option value="대전광역시" title="대전광역시">대전광역시</option>
                                            <option value="울산광역시" title="울산광역시">울산광역시</option>
                                            <option value="세종특별자치시" title="세종특별자치시">세종특별자치시</option>
                                            <option value="경기도" title="경기도">경기도</option>
                                            <option value="강원도" title="강원도">강원도</option>
                                            <option value="충청북도" title="충청북도">충청북도</option>
                                            <option value="충청남도" title="충청남도">충청남도</option>
                                            <option value="전라북도" title="전라북도">전라북도</option>
                                            <option value="전라남도" title="전라남도">전라남도</option>
                                            <option value="경상북도" title="경상북도">경상북도</option>
                                            <option value="경상남도" title="경상남도">경상남도</option>
                                            <option value="제주특별자치도" title="제주특별자치도">제주특별자치도</option>
								    	</select>
                                    </dd>
                                    <dt>지역 상세</dt>
                                    <dd>

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
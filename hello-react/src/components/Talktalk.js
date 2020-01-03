import React,{Component, Fragment} from 'react';

class Talktalk extends Component {
  render(){
    return(
        <Fragment>
            <section className="product Recommendation content">
                <div className="top pb30">
                    <h1 className="tit">스토리 톡톡</h1>
                    <p className="subtxt pb20">귀엽고 이쁜 반려 동물의 이야기를 함께 공유해요. </p>
                    <p className="btn_wrap roundBtn_wrap">
                        <span className="on">전체</span>
                        <span>고양이</span>
                        <span>강아지</span>
                    </p>
                </div>
                <div className="mid">
                    <div class="writeBox">
                        <textarea name="contents" title="의견을 작성해주세요." cols="60" rows="5" style={{"width":"576px", "height":"118px;"}} readonly="">로그인 후 글을 남길 수 있습니다.</textarea>
                        <input type="submit" value="보내기" className="btn"/>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    )
  }
}

export default Talktalk;
import React, {Component} from 'react';
import ax from './../../img/tanaqolat/10120018-beer-battered-onion-rings.png'
import RowShowShowColEdit from "../../Sub/RowShowShowColEdit/RowShowShowColEdit";
import HeaderShowColEdit from "../../Sub/HederShowColEdit/HeaderShowColEdit";
import loader from "../../img/loader.gif";

class ChchiMan extends Component {
    render() {
        let {ChichiManInfo,chichiManImg}=this.props;
        console.log(ChichiManInfo)
        return (
            <div className='   w-100 float-right 'dir='rtl'>

                {/*<h2 className='d-flex justify-content-start col-12  mt-3 mb-3'>اطلاعات چی چی من :</h2>*/}
                <div className='w-100 d-flex   justify-content-center align-items-center mt-5 mb-5' >
                    <div className=' col-1   '>
                        <img src={chichiManImg} alt={chichiManImg} className=' br50px border-Img' style={{width:"4.5vw",height:"4.5vw"}}/>
                    </div>
                    <div className='col-10 row m-0 '>
                        {/*<HeaderShowColEdit label='نام و نام حانوادگی' value='احسان صمیمی راد' className='col-6'/>*/}
                        {/*<HeaderShowColEdit label='شماره تماس' value='09112561701' className='col-6'/>*/}
                        {/*<HeaderShowColEdit abel='نوع وسیله نقلیه' value='ماشین سواری' className='col-6'/>*/}
                        {/*<HeaderShowColEdit label='پلاک' value='62-162-9358' className='col-6'/>*/}
                        {
                             ChichiManInfo.length>0?
                                 ChichiManInfo.map((todo ,index)=>
                                     <RowShowShowColEdit label={todo['label']} value={todo['value']} className='col-6' key={index}/>
                                 ):<div className='d-flex   justify-content-center' ><img src={loader} alt={loader} className='loader'/></div>

                        }
                        {/*<RowShowShowColEdit label='نام و نام حانوادگی' value='احسان صمیمی راد' className='col-6'/>*/}
                        {/*<RowShowShowColEdit label='شماره تماس' value='09112561701' className='col-6'/>*/}
                        {/*<RowShowShowColEdit label='نوع وسیله نقلیه' value='ماشین سواری' className='col-6'/>*/}
                        {/*<RowShowShowColEdit label='پلاک' value='62-162-9358' className='col-6'/>*/}

                    </div>

                 </div>
                {/*<h2 className='d-flex justify-content-start col-12 mt-5 mb-3'>اطلاعات محصول :</h2>*/}
                <hr style={{width:"98%"}}/>

            </div>
        );
    }
}

export default ChchiMan;
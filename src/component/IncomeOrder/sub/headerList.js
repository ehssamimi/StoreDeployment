import React, {Component} from 'react';
import PrintRecipe from "../../Sub/PrintRecipe/PrintRecipe";
import {  Button } from "reactstrap";

class HeaderList extends Component {
    render() {
        let{recipe,time}=this.props;

        return (
            <div style={{height: '5em'}} className='d-flex align-items-center'>

                          <span className="mr-3 d-inline-block float-md-left col-2">
                              <div className="w-100 d-flex justify-content-center align-items-center">
                                  {recipe ?
                                       <PrintRecipe/>
                                      :

                                      <Button outline color="primary" className="mb-2 w-100 pr-0 pl-0 fs1vw  d-flex justify-content-center align-items-center marginZero btn-pb" >
                                          <span className="glyph-icon simple-icon-printer    "></span>      <span className='  pl-2'>چاپ فاکتور</span>
                                      </Button>
                                      }
                              </div>
                          </span>
                {recipe ? <h5 className="mb-0">فاکتور در پک باشد </h5> : <h5 className="mb-0">فاکتور در پک نباشد </h5>}

                <h5 className='ml-auto mr-5 mb-0'>  ساعت ورود : <span className='pt-2'>{time.toString().length>0?time:""}</span></h5>
                {/*<div className="  d-flex  w-100   justify-content-between  align-items-center  card-body paddingZero" dir='rtl'>*/}
                {/*<div className="mb-0 text-primary col-2 text-center  "><span>ایدی</span></div>*/}
                {/*<div className="mb-0 text-primary  col-2 text-center  "><span>عکس</span></div>*/}
                {/*<div className="mb-0 text-primary col-2 text-center  "><span>نام محصول</span></div>*/}
                {/*<div className="mb-0 text-primary col-2 text-center  "><span>تعداد</span></div>*/}
                {/*<div className="mb-0 text-primary col-2 text-center  "><span>قیمت واحد</span></div>*/}
                {/*<div className="mb-0 text-primary col-2 text-center  "><span>قیمت کل</span></div>*/}
            {/*</div>*/}


            </div>
        );
    }
}

export default HeaderList;
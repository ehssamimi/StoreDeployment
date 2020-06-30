import React, {Component} from 'react';
import RowLeftNav from "../../leftNav/RowLeftNav";
import loader from "../../img/loader.gif";
import chocolate from "../../img/tanaqolat/kisspng-chocolate-bar-clip-art-chocolate-5ab4c5acf0cff2.8319236815217965249864.jpg";
import chips from "../../img/tanaqolat/potato-chips-png-vector-clipart-png-m-1434276763-for-clipart-potato.jpg";
import RowMainList from "./RowMainList/RowMainList";
//
// const product=[{id: 1,  ax:chocolate ,name: 'chocolate', number: 3, per: '200', all: '600'},{id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'},
//     {id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'},{id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'},
//     {id: 1,  ax:chocolate ,name: 'chocolate', number: 3, per: '200', all: '600'}];

class MainOrderList extends Component {
    constructor(props) {
        super(props);
        this.state={
            Products:''
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.Products !== state.Products) {
            return {
                Products: props.Products,
            };
        }
        // Return null if the state hasn't changed
        return null;
    }


    render() {
        // console.log(this.props.Products);
        let {Products} = this.state;
        // console.log('Products');
        // console.log(Products);
        return (

            <div className='  mainlistOrder w-100 float-right position-relative mt-5'>
                {/*<div className="mb-3 table-heading   position-relative  ">*/}
                        <div className="  d-flex  w-100   justify-content-between   align-items-center  card-body paddingZero mb-3   " dir='rtl'>
                            <div className="mb-0 labelChichiMan col-2 text-center fs1vw "><span>ایدی</span></div>
                            <div className="mb-0 labelChichiMan  col-2 text-center  fs1vw "><span>عکس</span></div>
                            <div className="mb-0 labelChichiMan col-2 text-center fs1vw "><span>نام محصول</span></div>
                            <div className="mb-0 labelChichiMan col-2 text-center fs1vw "><span>تعداد</span></div>
                            <div className="mb-0 labelChichiMan col-2 text-center fs1vw  "><span>قیمت واحد</span></div>
                            <div className="mb-0 labelChichiMan col-2 text-center  fs1vw"><span>قیمت کل</span></div>
                        </div>
                <div className='w-100 mt2em'>

                    {/*{product!==undefined?product.map((todo ,index)=><div className=" mt-3" key={index}><RowMainList {...todo}/></div> ):*/}
                    {/*<div className='d-flex' ><img src={loader} alt={loader} className='loader'/></div>*/}
                    {/*}*/}

                { Products.length>0? Products.map((todo ,index)=><div className=" mt-3" key={index}><RowMainList {...todo}/></div> ):
                    <div className='d-flex   justify-content-center' ><img src={loader} alt={loader} className='loader'/></div>
                }
                </div>

            </div>
        );
    }
}

export default MainOrderList;
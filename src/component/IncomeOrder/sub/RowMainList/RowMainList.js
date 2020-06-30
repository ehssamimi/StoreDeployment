import React, {Component} from 'react';
import chips from "../../../img/tanaqolat/potato-chips-png-vector-clipart-png-m-1434276763-for-clipart-potato.jpg";

class RowMainList extends Component {
    render() {
        // {id: 1,  ax:chips ,name: 'chips', number: 2, per: '900', all: '1800'}
        let{id,ax,name,number,per,all}=this.props;
        return (
            <div className='col-12 d-flex'>
                <div className="mb-3 table-heading card w-100 paddingZero">
                    <div className="  d-flex  w-100   justify-content-between  align-items-center  card-body paddingZero" dir='rtl'>
                        <div className="mb-0  col-2 text-center  "><span>{id}</span></div>
                        <div className="mb-0  col-2 text-center  ">
                            <div className='axList d-flex justify-content-center mr-5'>
                                <img src={ax} className='w-100 h-100 br05  '/>
                            </div>
                        </div>
                        <div className="mb-0  col-2 text-center  "><span>{name}</span></div>
                        <div className="mb-0  col-2 text-center  "><span>{number}</span></div>
                        <div className="mb-0  col-2 text-center  "><span>{per.toLocaleString() }</span></div>
                        <div className="mb-0  col-2 text-center  "><span>{all.toLocaleString()}</span></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RowMainList;
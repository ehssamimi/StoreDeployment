import React, {Component} from 'react';

class RowShowShowColEdit extends Component {
    render() {
        let{label,value,className}=this.props;
        return (
            <div className={['d-flex','collapseSpanHeight','align-items-end','mt-2' ,className||''].join(' ')} dir='rtl'>
                <span className=' fs1vw labelChichiMan'>{label} <span className='pl-2'>:</span></span>
                <span className=' fs1vw'>{value}</span>
            </div>
        );
    }
}

export default RowShowShowColEdit;
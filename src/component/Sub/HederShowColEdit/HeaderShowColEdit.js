import React, {Component} from 'react';

class HeaderShowColEdit extends Component {
    render() {
        let{label,value,className}=this.props;
        return (
            <div className={['d-flex','collapseSpanHeight','align-items-end','mt-2' ,className||''].join(' ')} dir='rtl'>
                <span className=' fs15vw gray'>{label} <span className='pl-2'>:</span></span>
                <span className=' fs15vw'>{value}</span>
            </div>
        );
    }
}

export default HeaderShowColEdit;
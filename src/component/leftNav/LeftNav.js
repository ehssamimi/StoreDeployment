import React, {Component} from 'react';
import loader from './../img/loader.gif'
import RowLeftNav from "./RowLeftNav";


class LeftNav extends Component {

    constructor(props) {
        super(props);
        this.state={
            Rowid:0,product:'',clickZero:false
        }
    }


    GetClick(id){
        this.setState({
            Rowid:id
        })
    }

    defaultclick( ){
        this.setState({
            clickZero:false
        })
    }


    static getDerivedStateFromProps(props, state) {



        console.log("props.listProduct.length")
        console.log(props.listProduct.length)
        console.log("state.product.length")
        console.log(state.product.length)
        if (props.listProduct.length !== state.product.length) {
            // console.log(props.listProduct !== state.product);
            // console.log('listProduct');
            // console.log(props.listProduct);
            // console.log('product');
            // console.log(state.product);
            // console.log("aaaaaaaaaaaaaaaaaaa");


            return {
                product: props.listProduct,
                clickZero:true,
                Rowid:0
            };
        }
        // Return null if the state hasn't changed
        return null;
    }


    render() {
        let{Rowid,product,clickZero}=this.state;
        // let product=this.props.listProduct;
        // console.log('product');
        // console.log(product);
        return (
           <div className='w-100 childItems '>
               {product ? product.map((todo, index) => <div className=" mt-3" key={index}>
                       <RowLeftNav key={index} product={todo} index={index} click={this.GetClick.bind(this)}
                                   active={index === Rowid} ids={todo['id']} {...this.props} clickZero={clickZero} defaultclick={this.defaultclick.bind(this)}/></div>) :
                   <div className='d-flex'><img src={loader} alt={loader} className='loader'/></div>
               }

           </div>
        );
    }
}

export default LeftNav;
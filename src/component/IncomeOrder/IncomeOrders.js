import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import OrderList from "./OrderList";
import {
    GetProductList,
    GetProductDetail,
    GetState,
} from '../../Function/ServerFunction'
import {error_Notification, formattime, ProductDetails, ProductList1} from "../../Function/UseFullFunction";
import  io from 'socket.io-client'
import {endpoint} from '../Const'



class IncomeOrders extends Component {
    constructor(props) {
        super(props);
        this.state={
            listProduct:"",Products:'',id:'',TotalPrice:'',Receipt:false,time:'',update:''
        }
    }
    async componentDidMount(){
        // let socket = io.connect(endpoint);

        let socket = io.connect(endpoint);

        socket.on("state_change", data =>{
            console.log(JSON.parse(data)['Message']);
            switch (JSON.parse(data)['Message']) {
                case 'WaitForWareHouse':
                    this.setState({update: JSON.parse(data)['Data'] !== null ? JSON.parse(data)['Data']['id'] : false});
                    this.changeMainComponent();
                    break;
                default:
                    this.setState({ update: true});
            }
        });



        // socket.on('message', function (data) {
        //     console.log(data);
        //     let Data = JSON.parse(data);
        //     console.log(Data);
        //
        // },()=>{
        //     // console.log(this.state.response);
        // });
        this.changeMainComponent();
    }


    async changeMainComponent(ids){
        // *****get states from 30033****
        this.setState({
            Products:""
        });

        let situations=await GetState() ;
         // *********get list of package id from this state******
        // *******situations[2]=inProgress******

        let {state ,Description }=await GetProductList(situations[0]);
        let listProducts=Description;
        if (state===200){
            if (Array.isArray(listProducts) && listProducts.length>0) {
                // *******get list product from ListProducts******
                let listProduct=ProductList1(listProducts);
                this.setState({
                    listProduct
                })
            }
        }else {
            this.setState({
                listProduct:""
            })
            error_Notification(state ,Description)
        }

        const id=this.props.match.params.id;
        // console.log("changeMainComponent");
        if (id !==undefined &&  id.length>6){
            // ****get package detail from package id *****

            if (listProducts.length!==0){

                let {state ,Description }= await GetProductDetail(id)
                if (state===200){
                    let ProductDetail=Description;
                    let{Products,UserInfo ,StateChangingTiming:{WaitForWareHouse},TotalPrice}=ProductDetail;
                    console.log(ProductDetail);

                    // ****get time from timeStamp*****
                    let  time= formattime(WaitForWareHouse);
                    // ****get recipe true or false *****
                    let {Receipt}=UserInfo;
                    // ****get products details from  Products *****
                    let ProductsDetails=ProductDetails(Products);

                    this.setState({
                        Products:ProductsDetails,id,Receipt,time,TotalPrice
                    })

                }else {
                    error_Notification(state ,Description)
                }
            }

        }
    }






    render() {
        let{listProduct,Products,id,time}=this.state;
        return (
             <div className='rightMenuList d-flex'>
                <div className='col-9 p-0 m-0'>
                    <OrderList recipe={this.state.Receipt} chichiMan={false} totalPrice={this.state.TotalPrice} Kind='Gathering' Products={Products} id={id} time={this.state.time} changeMainComponent={this.changeMainComponent.bind(this)}/>
                </div>
                <div className='col-3 float-right arsenal parentItems p-0 m-0'   >
                    {
                        listProduct.length>0? <LeftNav listProduct={listProduct} url={'/orders/income/'} changeMainComponent={this.changeMainComponent.bind(this)} />:<div>....loader</div>
                    }
                </div>

            </div>

            // <div className='rightMenuList'>
            //     <LeftNav/>
            //     <div className='col-9'>
            //         <OrderList recipe={false} Kind='insert'/>
            //     </div>
            // </div>
        );
    }
}

export default IncomeOrders;
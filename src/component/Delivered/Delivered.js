import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import OrderList from "../IncomeOrder/OrderList";
// import MainDeliveried from "./MainDeliveried";
// import {GetProductDetail, GetProductList, GetState} from "../../Function/ServerFunction";
import {GetProductDetail33, GetProductList33, GetState33} from "../../Function/ServerFunction";
import {error_Notification, formattime, ProductDetails, ProductList} from "../../Function/UseFullFunction";
import io from "socket.io-client";
import {endpoint} from "../Const";

class Delivered extends Component {
    constructor(props) {
        super(props);
        this.state={
            listProduct:"",Products:'',id:'',Receipt:false,time:"",TotalPrice:'',update:""
        }
    }
    async componentDidMount(){
        let socket = io.connect(endpoint);

        socket.on("state_change", data =>{
            console.log(JSON.parse(data)['Message']);
            switch (JSON.parse(data)['Message']) {
                case 'WaitForAssign':
                    this.setState({update: JSON.parse(data)['Data'] !== null ? JSON.parse(data)['Data']['id'] : false});
                    this.changeMainComponent();
                    break;
                default:
                    this.setState({ update: true});
            }
        });


        this.changeMainComponent();
    }
    async changeMainComponent(ids){
        this.setState({
            Products:""
        });
        // *****get states from 30033****
        let situations=await GetState33() ;
        // *********get list of package id from this state******

        // *******situations[2]=inProgress******

        let {state ,Description}=await GetProductList33(situations[0]);
        let listProducts=Description;
        if (state===200){

            if (Array.isArray(listProducts) && listProducts.length>0) {
                // *******get list product from ListProducts******
                let listProduct=ProductList(listProducts);
                this.setState({
                    listProduct
                })
            }else {
                this.setState({
                    listProduct:""
                })
            }
        }else {
            error_Notification(state ,Description)
        }


        // let listProducts=await GetProductList33(situations[0]);
        // if (Array.isArray(listProducts) && listProducts.length>0) {
        //     // *******get list product from ListProducts******
        //     let listProduct=ProductList(listProducts);
        //     this.setState({
        //         listProduct
        //     })
        // }
        const id=this.props.match.params.id;
        // console.log("changeMainComponent");
        if (id !==undefined &&  id.length>6){
            if (listProducts.length!==0){
                // ****get package detail from package id *****
                let ProductDetail= await GetProductDetail33(id);
                let{Products,UserInfo ,StateChangingTiming,TotalPrice}=ProductDetail;
                // ****get time from timeStamp*****
                let  time= formattime(StateChangingTiming);
                // ****get recipe true or false *****
                let {Receipt}=UserInfo;
                // ****get products details from  Products *****
                let ProductsDetails=ProductDetails(Products);

                this.setState({
                    Products:ProductsDetails,id,Receipt,time,TotalPrice
                })
            }

        }
    }

    render() {
        let{listProduct,Products,id}=this.state;

        return (
            //<div style={{marginTop:'120px'}}>
            <div className='rightMenuList d-flex'>
                <div className='col-9   p-0 m-0'>
                    <OrderList recipe={this.state.Receipt} totalPrice={this.state.TotalPrice} chichiMan={false}
                               Kind='WaitingForChichiMan' Products={Products} id={id} time={this.state.time} changeMainComponent={this.changeMainComponent.bind(this)}/>
                </div>
                <div className='col-3 float-right arsenal p-0 m-0'>
                    {
                        listProduct.length>0? <LeftNav listProduct={listProduct} url={'/orders/delivery/'} changeMainComponent={this.changeMainComponent.bind(this)}/>:<div>....loader</div>
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


    // render() {
    //     return (
    //         <div className='rightMenuList d-flex'>
    //             <div className='col-9'>
    //                 <MainDeliveried/>
    //              </div>
    //             <div className='col-3 float-right arsenal'>
    //                 <LeftNav/>
    //             </div>
    //         </div>
    //
    //     );
    // }
}

export default Delivered;
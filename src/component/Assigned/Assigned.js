 import React, {Component} from 'react';
import LeftNav from "../leftNav/LeftNav";
import OrderList from "../IncomeOrder/OrderList";
  import {GetChichiManDetail, GetProductDetail33, GetProductList33, GetState33} from "../../Function/ServerFunction";
 import {
    chichiManInfoDetail, error_Notification,
    formattime,
    ProductDetails,
    ProductList,
     ProductList1
 } from "../../Function/UseFullFunction";
 import io from "socket.io-client";
 import {endpoint} from "../Const";
 import imag from "../img/tanaqolat/4th.jpg";



 class Assigned extends Component {
    constructor(props) {
        super(props);
        this.state={
            listProduct:"",Products:'',id:'',time:"",recipe:false,ChichiManInfo:'',chichiManImg:'',update:""
        }
    }
    async componentDidMount(){
        let socket = io.connect(endpoint);
        socket.on("state_change", data =>{
            console.log(JSON.parse(data)['Message']);
            switch (JSON.parse(data)['Message']) {
                case 'Assigned':
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
             Products:"",ChichiManInfo:""
         });
         // *****get states from 30033****
         let situations=await GetState33() ;
         // *********get list of package id from this state******
         // *******situations[2]=inProgress******
         let {state ,Description}=await GetProductList33(situations[1]);
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
             // ****get package detail from package id *****
             if (listProducts.length!==0){

                 let ProductDetail= await GetProductDetail33(id);
                 let{Products,UserInfo ,StateChangingTiming,TotalPrice}=ProductDetail;
                 // ****get time from timeStamp*****
                 let  time= formattime(StateChangingTiming);
                 // ****get recipe true or false *****
                 let {Receipt}=UserInfo;
                 // ****get products details from  Products *****
                 let ProductsDetails=ProductDetails(Products);

                 // ******chichiManInfo********

                 let{state,Description}=await GetChichiManDetail(id);
                 let ChichiManInfo,PersonalInfo=""
                 console.log("Description")
                 console.log(Description)
                 console.log("state")
                 console.log(state)


                 if (state===200){
                     PersonalInfo=Description.PersonalInfo;
                     let {_id,DeliveryInfo,}=Description;
                     ChichiManInfo=chichiManInfoDetail(PersonalInfo,DeliveryInfo);
                 }else {
                     PersonalInfo={First_Name:"چی چی من ",Last_Name:"پاک شده ",PhoneNumber:"09111111111",ProfilePic:imag}
                     let vehicle={VehicleModel:"ماشین ",PlateNumber:"پلاک داخل " }
                     ChichiManInfo=chichiManInfoDetail(PersonalInfo,vehicle);
                 }

                 this.setState({
                     Products:ProductsDetails,id,Receipt,time,TotalPrice,ChichiManInfo,chichiManImg:PersonalInfo['ProfilePic']
                 })
             }

             }


     }

    render() {
        let{listProduct,Products,id,ChichiManInfo,chichiManImg}=this.state;

        return (
            //<div style={{marginTop:'120px'}}>
            <div className='rightMenuList d-flex'>
                <div className='col-9 p-0 m-0'>
                    <OrderList recipe={this.state.Receipt} totalPrice={this.state.TotalPrice}
                               ChichiManInfo={ChichiManInfo} chichiManImg={chichiManImg} chichiMan={true}
                               Kind='assigned' Products={Products} id={id} time={this.state.time}/>
                </div>
                <div className='col-3 float-right p-0 m-0'>
                    {
                        listProduct.length>0? <LeftNav listProduct={listProduct} url={'/orders/assigned/'} changeMainComponent={this.changeMainComponent.bind(this)}/>:<div>....loader</div>
                    }
                </div>

            </div>

        );
    }

}

export default Assigned;
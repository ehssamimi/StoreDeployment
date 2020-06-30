import React, {Component} from 'react';
// import { Card, CustomInput, Badge } from "reactstrap";
import {AutoAssignChichiMan, ChangeState} from "../../../Function/ServerFunction";
import NotificationManager from "../../../components/common/react-notifications/NotificationManager";
import {error_Notification, success_Notification} from "../../../Function/UseFullFunction";


class FooterList extends Component {

   async changeState(){
        console.log(this.props.id);
       let response= await ChangeState(this.props.id,this.props.Kind);
       console.log(response);
       if (response==='d'){
           if (this.props.Kind==='Gathering'){
               success_Notification("پکیج به لیست در حال جمع اوری انتقال یافت ")

           }else if (this.props.Kind==='WaitForAssign'){
               success_Notification("پکیج به لیست در انتظار انتقال یافت ")

           }

           // setTimeout(function(){ alert("Hello"); }, 3000);
           this.props.changeMainComponent(this.props.id)
       }
    }

    async AutoChichiManAssign() {
        let {state, Description} = await AutoAssignChichiMan();
        console.log(Description);
        if (state === 200) {
            console.log(Description.CountOfAssigned)
            if (Description.CountOfAssigned===0){
                 error_Notification("ناموفق ", "چی چی منی در صف  نیست")
            }else {
                success_Notification("پکیج به چی چی من اضافه شد ")
                this.props.changeMainComponent(this.props.id)
            }

        } else {
            error_Notification(state, Description)
        }
    }

    render() {
        let{Kind,totalPrice}=this.props;

        return (
            <div className='footerList d-flex align-items-center flex-fill' style={{height: '9vh'}}>
                    <h5 dir='rtl' className='ml-5'>جمع کل: <span>{ totalPrice!==undefined?totalPrice.toLocaleString():''}</span></h5>
                {
                    Kind==='Gathering'?<button className="default  btn btn-primary ml-auto mr-4 fs1vw col-2 br50px" onClick={this.changeState.bind(this)}><span>اعلام جمع آوری</span></button>:''
                }
                {
                    // Kind==='collect'?<button className="default  btn btn-info ml-auto mr-4" onClick={()=>this.props.Action(true)}><span>تحویل به پیک</span></button>:''
                    Kind==='WaitForAssign'?<button className="default  btn btn-primary ml-auto mr-4 fs1vw col-2 br50px" onClick={this.changeState.bind(this)}><span>تحویل به پیک</span></button>:''
                }
                {
                    // Kind==='collect'?<button className="default  btn btn-info ml-auto mr-4" onClick={()=>this.props.Action(true)}><span>تحویل به پیک</span></button>:''
                    Kind==='WaitingForChichiMan'?<button className="default  btn btn-primary ml-auto mr-4 fs1vw col-2 br50px" onClick={this.AutoChichiManAssign.bind(this)}><span>َAutoAssign</span></button>:''
                }



            </div>
        );
    }
}

export default FooterList;
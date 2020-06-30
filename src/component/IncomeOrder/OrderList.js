import React, {Component} from 'react';
import { Card} from "reactstrap";
import HeaderList from "./sub/headerList";
import FooterList from "./sub/FooterList";
import MainOrderList from "./sub/MainOrderList";
import ChchiMan from "../CollectOrders/sub/ChchiMan";



class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state={
            chichiMan:''
        }
    }

    GetPackageToChichiMan(chichiMan){
        this.setState({
            chichiMan
        })
    }
    render() {
        return (
            <Card className='OrderList'>
                <HeaderList  recipe={this.props.recipe} time={this.props.time}/>
                {
                    // this.state.chichiMan?  <ChchiMan/>:
                    <div className='childItems2'>
                        {
                            this.props.chichiMan?<ChchiMan ChichiManInfo={this.props.ChichiManInfo} chichiManImg={this.props.chichiManImg}/>:""
                        }

                        <MainOrderList {...this.props}/>
                    </div>

                }
                <FooterList {...this.props} Action={this.GetPackageToChichiMan.bind(this) }/>
            </Card>
        );
    }
}

export default OrderList;
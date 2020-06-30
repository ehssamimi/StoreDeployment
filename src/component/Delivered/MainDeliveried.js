import React, {Component} from 'react';
import { Card} from "reactstrap";

import ChchiMan from "../CollectOrders/sub/ChchiMan";



class MainDeliveried extends Component {
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
              <ChchiMan/>
            </Card>
        );
    }
}

export default MainDeliveried;
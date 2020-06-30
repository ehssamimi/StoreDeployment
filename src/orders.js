import React, {Component} from 'react';
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../src/layout/AppLayout";
import IncomeOrders from "./component/IncomeOrder/IncomeOrders";
import CollectOrders from "./component/CollectOrders/CollectOrders";
import MainDeliveried from "./component/Delivered/MainDeliveried";
import Delivered from "./component/Delivered/Delivered";
import {GetState} from "./Function/ServerFunction";
import Assigned from "./component/Assigned/Assigned";
import Check from "./component/Check/Check";
// import gogo from "./gogo";
// import secondMenu from "./second-menu";
// import blankPage from "./blank-page";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state={
            situations:[]
        }
    }

    // async componentDidMount(){
    //     let situations=await GetState() ;
    //      // console.log(States)
    //     this.setState({
    //         situations
    //     })
    // }
    render() {
        const { match } = this.props;
        // let{situations}=this.state;
        // console.log(situations);

        return (
            <AppLayout>
                <Switch>
                    <Redirect exact from={`${match.url}/`} to={`${match.url}/income/:id?`} />
                    <Route path={`${match.url}/income/:id?`} component={IncomeOrders}  />
                    <Route path={`${match.url}/collect/:id?`} component={CollectOrders}  />
                    <Route path={`${match.url}/delivery/:id?`} component={Delivered}  />
                    <Route path={`${match.url}/assigned/:id?`} component={Assigned}  />
                    <Route path={`${match.url}/check/:id?`} component={Check}  />
                    <Route path={`${match.url}/cancel`} component={CollectOrders} />
                    {/*<Route path={`${match.url}/second-menu`} component={secondMenu} />*/}
                    {/*<Route path={`${match.url}/blank-page`} component={blankPage} />*/}
                    <Redirect to="/error" />
                </Switch>
            </AppLayout>
        );
    }
}
const mapStateToProps = ({ menu }) => {
    const { containerClassnames } = menu;
    return { containerClassnames };
};

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(Orders)
);

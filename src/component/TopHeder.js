import React, {Component} from 'react';

import {
    Collapse,
     NavbarToggler,
     Nav, Button
} from 'reactstrap';

import IntlMessages from "../../src/helpers/IntlMessages";
 import {NavLink} from "react-router-dom";
import io from "socket.io-client";
import {endpoint} from "./Const";


class TopHeder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // checkedCheckboxes: [],
            checkedCheckboxes: 1,
            WaitForWareHouse: false,
            Gathering: false,
            WaitForAssign: false,
            Assigned: false,
            Check:false,
            isOpen:false
        };
        // this.blinkHeader=this.blinkHeader.bind(this)
    }

     toggle = () => {
         const Width = window.outerWidth;

         if (Width <= 768) {
             this.setState(prevState => ({
                 isOpen:!prevState.isOpen
             }))
         } else {

          }

     };


    async componentDidMount(){
        let{pathname}=this.props.history.location;
        let Url=pathname.split("/");
        console.log(Url[2]);
        switch (Url[2]) {
            case 'income':
                this.checkButtonCheck(1);
                break;
            case 'collect':
                this.checkButtonCheck(2);
                break;
                case 'delivery':
                this.checkButtonCheck(3);
                break;
                case 'assigned':
                this.checkButtonCheck(4);
                break;
                case 'check':
                this.checkButtonCheck(5);
                break;
            default:
                this.checkButtonCheck(1)
            // code block
        }
        let socket = io.connect(endpoint);

        socket.on("state_change", data =>{
            console.log("data");
            console.log(JSON.parse(data)['Message']);
            switch (JSON.parse(data)['Message']) {
                case 'WaitForWareHouse':
                this.setState({WaitForWareHouse: JSON.parse(data)['Data'] !== null ? JSON.parse(data)['Data']['id'] : false});
                break;
                case "Gathering":
                    this.setState({Gathering: JSON.parse(data)['Data'] !== null ? JSON.parse(data)['Data']['id'] : false});
                    break;
                case "WaitForAssign":
                    this.setState({WaitForAssign: JSON.parse(data)['Data'] !== null ? JSON.parse(data)['Data']['id'] : false});
                    break;
                case "Assigned":
                    this.setState({Assigned: JSON.parse(data)['Data'] !== null ? JSON.parse(data)['Data']['id'] : false});
                    break;
                case "Check":
                    this.setState({Check: JSON.parse(data)['Data'] !== null ? JSON.parse(data)['Data']['id'] : false});
                    break;
                default:
                    this.setState({ WaitForWareHouse: true});
            }

        }


        );
     }

    blinkHeader(i, val) {
        var es;

        let element = document.getElementById(`button ${i}`);
        switch (i) {
            case 1:
                this.interval1 =setInterval(function(){ this.tick(element) }.bind(this), 2000);
                break;
            case 2:
                this.interval2 =setInterval(function(){ this.tick(element) }.bind(this), 2000);
                break;
            case 3:
                this.interval3 =setInterval(function(){ this.tick(element) }.bind(this), 2000);
                break;
            case 4:
                this.interval4 =setInterval(function(){ this.tick(element) }.bind(this), 2000);
                break;
            case 5:
                this.interval5 =setInterval(function(){ this.tick(element) }.bind(this), 2000);
                break;

            default:
                this.setState({ WaitForWareHouse: true});
        }


    }
    tick (element){
        console.log('tick');
        console.log(element);
        function timeFunction() {
            setTimeout(function () {
                element.classList.remove("BorderColorPrimary")
            }, 1000);
        }
        timeFunction();
        element.classList.add("BorderColorPrimary");

        // This function is called every 50 ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered

    }


    checkButtonCheck = i => {
        switch (i) {
            case 1:
                    clearInterval(this.interval1);
                     this.setState({WaitForWareHouse: false});
                break;
                case 2:
                    console.log("secend");
                    clearInterval(this.interval2);
                    this.setState({ Gathering: false});
                break;
                 case 3:
                     clearInterval(this.interval3);
                     this.setState({ WaitForAssign: false});
                break;
                case 4:
                    clearInterval(this.interval4);
                     this.setState({ Assigned: false});
                break;
                case 5:
                    clearInterval(this.interval5);
                     this.setState({ Check: false});
                break;
            // case 4:
            //     this.checkButtonCheck(4);
            //     break;
            // case 5:
            //     this.checkButtonCheck(5);
            //     break;
            default:
                this.setState({ WaitForWareHouse: true});
         }

        this.setState({ checkedCheckboxes: i});
    };

    setInt=()=>{
        let element = document.getElementById(`button 1`);
        this.setIntervalExam=setInterval(function(){ this.tick(element) }.bind(this), 2000);
    };
    removeInt=()=>{
        clearInterval(this.setIntervalExam)
    }


    render() {

        if (this.state.WaitForWareHouse!==false){
              this.blinkHeader(1,true);
        }else if(this.state.Gathering!==false){
            this.blinkHeader(2,true);
        }else if(this.state.WaitForAssign!==false){
            this.blinkHeader(3,true);
        }else if(this.state.Assigned!==false){
            this.blinkHeader(4,true);
        }else if(this.state.Check!==false){
            this.blinkHeader(5,true);
        }

        console.log(this.state.checkedCheckboxes);
        return (


                                            <div className="  headerSelection ">

                                                     <nav className="  navbar-expand-md navbar-light">
                                                     <NavbarToggler onClick={this.toggle} />
                                                    <Collapse isOpen={this.state.isOpen} navbar>
                                                        <Nav className="mr-auto" navbar>

                                                            <NavLink
                                                                to="/orders/income"  onClick={this.toggle}
                                                            >
                                                                <Button
                                                                    outline={false}
                                                                    // outline
                                                                    id="button 1"
                                                                    color="transparent"
                                                                    className="mb-2 ml-2 "
                                                                    onClick={() => this.checkButtonCheck(1)}
                                                                    // active={this.state.checkedCheckboxes.indexOf(2) !== -1}
                                                                    active={this.state.checkedCheckboxes === 1}
                                                                >
                                                                    <IntlMessages id="سفارش های ورودی"/>
                                                                </Button>
                                                            </NavLink>
                                                            <NavLink  onClick={this.toggle}
                                                                to="/orders/collect"
                                                            >
                                                                <Button
                                                                    // outline
                                                                    id="button 2"
                                                                    color="transparent"
                                                                    className="mb-2 ml-2"
                                                                    onClick={() => this.checkButtonCheck(2)}
                                                                    active={this.state.checkedCheckboxes === 2}

                                                                    // active={this.state.checkedCheckboxes.indexOf(3) !== -1}
                                                                >
                                                                    <IntlMessages id="در حال جمع آوری"/>
                                                                </Button>
                                                            </NavLink>
                                                            <NavLink  onClick={this.toggle}
                                                                to="/orders/delivery"
                                                            >
                                                                <Button
                                                                    // outline
                                                                    id="button 3"
                                                                    color="transparent"
                                                                    className="mb-2 ml-2"
                                                                    onClick={() => this.checkButtonCheck(3)}
                                                                    // active={this.state.checkedCheckboxes.indexOf(2) !== -1}
                                                                    active={this.state.checkedCheckboxes === 3}
                                                                >
                                                                    <IntlMessages id=" در انتظار پیک"/>
                                                                </Button>
                                                            </NavLink>
                                                            <NavLink  onClick={this.toggle}
                                                                to="/orders/assigned"
                                                            >
                                                                <Button
                                                                    // outline
                                                                    id="button 4"
                                                                    color="transparent"
                                                                    className="mb-2 ml-2"
                                                                    onClick={() => this.checkButtonCheck(4)}
                                                                    active={this.state.checkedCheckboxes === 4}

                                                                    // active={this.state.checkedCheckboxes.indexOf(3) !== -1}
                                                                >
                                                                    <IntlMessages id="تخصیص به پیک"/>
                                                                </Button>
                                                            </NavLink>
                                                            <NavLink  onClick={this.toggle}
                                                                to="/orders/check"
                                                            >
                                                                <Button
                                                                    // outline
                                                                    id="button 5"
                                                                    color="transparent"
                                                                    className="mb-2 ml-2"
                                                                    onClick={() => this.checkButtonCheck(5)}
                                                                    active={this.state.checkedCheckboxes === 5}

                                                                    // active={this.state.checkedCheckboxes.indexOf(3) !== -1}
                                                                >
                                                                    <IntlMessages id="تحویل به پیک "/>
                                                                </Button>
                                                            </NavLink>


                                                            {/*<button onClick={this.setInt} >set interval</button>*/}
                                                            {/*<button onClick={this.removeInt} >clear interval</button>*/}

                                                        </Nav>

                                                    </Collapse>
                                                    </nav>














                                                {/*<NavLink*/}
                                                    {/*to="/orders/cancel"*/}
                                                {/*>*/}
                                                    {/*<Button*/}
                                                        {/*outline*/}
                                                        {/*color="primary"*/}
                                                        {/*className="mb-2 ml-2"*/}
                                                        {/*onClick={() => this.checkButtonCheck(4)}*/}
                                                        {/*active={this.state.checkedCheckboxes === 4}*/}

                                                        {/*// active={this.state.checkedCheckboxes.indexOf(3) !== -1}*/}
                                                    {/*>*/}
                                                        {/*<IntlMessages id="لغو و برگشتی"/>*/}
                                                    {/*</Button>*/}
                                                {/*</NavLink>*/}

                        </div>


        );
    }
}

export default TopHeder;
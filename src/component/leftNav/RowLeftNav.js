import React, {Component} from 'react';

 import {Card, Button, Modal, ModalBody, ModalHeader} from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import ModalQrCode from "./ModalQrCode/ModalQrCode";


class RowLeftNav extends Component {
    constructor(props) {
        super(props);
        this.state={
            index:'',count:1,openModal:false
        }
    }
    //
    componentDidMount() {
      // console.log('index');
      // console.log(this.props.index);
            if (this.props.index === 0) {
                let item = document.querySelector(".clickAble");
                // console.log(item);
                item.click();
                // console.log(item)
            }
    }

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed


        if (this.props.clickZero  ) {
            if (this.props.index===0){
                let item = document.querySelector(".clickAble");
                // console.log(item);
                item.click();
                this.props.defaultclick();
            }
        }
        //
        // if (prevProps.Rowid!== this.state.index) {
        //     let item = document.querySelector(".clickAble");
        //             console.log(item);
        //             item.click();
        //             return {
        //                 index:prevProps.Rowid
        //             }
        // }
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.Rowid !== state.index) {
    //         let item = document.querySelector(".clickAble");
    //         // console.log(item);
    //         item.click();
    //         return {
    //             index: props.Rowid,
    //          };
    //     }
    //     // Return null if the state hasn't changed
    //     return null;
    // }


    toggleLarge = () => {
        this.setState(prevState => ({
            openModal: !prevState.openModal
        }));
    };

    onCheckItem(id,ids){
        this.props.click(id);
     }
 render() {
        let{product,active,ids,index}=this.props;

        return (
            <NavLink to={`${this.props.url}${product.id}`} className='clickAble ' onClick={event => this.props.changeMainComponent(event,ids)}>
                <div className='100 '  onClick={() => this.onCheckItem(index,ids)}   id={index} >
                    {
                        active?
                            <Card
                                className={classnames("d-flex flex-row", {
                                    active: active
                                })} >
                                <div className=" d-flex flex-grow-1 min-width-zero">
                                    <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                        <div className="w-40 w-sm-100">
                                            <Button outline color="secondary" className="mb-2 w-100 pr-0 pl-0 fs1vw" onClick={this.toggleLarge.bind(this)}>
                                                اسکن کد
                                            </Button>
                                        </div>
                                        {/*<NavLink to={`/orders/income/${product.id}`} className="w-40 w-sm-100" dir='rtl' id='clickAble'>*/}
                                        <div className="w-40 w-sm-100  " dir='rtl' >
                                            <p className="list-item-heading mb-1 truncate float-right fs1vw mainFontColor"   >
                                                {product.title}
                                            </p>
                                        </div>



                                        {/*<NavLink to={`${this.props.url}${product.id}`} className="w-40 w-sm-100 clickAble activation" dir='rtl'  >*/}
                                        {/*<p className="list-item-heading mb-1 truncate float-right"  onClick={event => this.props.changeMainComponent(event,ids)} >*/}
                                        {/*{product.title}*/}
                                        {/*</p>*/}
                                        {/*</NavLink>*/}
                                    </div>
                                </div>
                            </Card>
                            :
                            <div className=" d-flex flex-grow-1 min-width-zero">
                                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                    <div className="w-40 w-sm-100">
                                        <Button outline color="primary" className="mb-2 w-100 pr-0 pl-0 fs1vw">
                                            اسکن کد
                                        </Button>{" "}
                                    </div>

                                    <div className="w-40 w-sm-100  " dir='rtl'  >
                                        <p className="list-item-heading mb-1 truncate float-right font-weight-bold mainFontColor"   >
                                            {product.title}
                                        </p>
                                    </div>
                                    {/*<NavLink to={`${this.props.url}${product.id}`} className="w-40 w-sm-100 clickAble" dir='rtl' onClick={event => this.props.changeMainComponent(event,ids)}>*/}
                                    {/*<p className="list-item-heading mb-1 truncate float-right"   >*/}
                                    {/*{product.title}*/}
                                    {/*</p>*/}
                                    {/*</NavLink>*/}

                                </div>
                            </div>

                    }


                    {/*</ContextMenuTrigger>*/}
                </div>


                <Modal
                    isOpen={this.state.openModal}
                    size="md"
                    toggle={this.toggleLarge}
                >
                    <ModalHeader toggle={this.toggleLarge}>
                      اسکن کد
                    </ModalHeader>
                    <ModalBody>
                        <div className='col-8 offset-2 d-flex flex-column'>
                            <ModalQrCode value={product.id}/>
                        </div>
                    </ModalBody>
                </Modal>

            </NavLink>

        );
    }
}

export default RowLeftNav;
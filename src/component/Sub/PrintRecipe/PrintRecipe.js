import React, {Component} from 'react';
import ReactToPrint from 'react-to-print';
import {  Button } from "reactstrap";

class ComponentToPrint extends React.Component {
    render() {
        return (
            <div className="invoice overflow-auto">
                <div style={{minWidth: "600px"}}>
                    <header>
                        <div className="row">
                            <div className="col">
                                <a target="_blank" href="https://lobianijs.com">
                                    <img
                                        src="http://lobianijs.com/lobiadmin/version/1.0/ajax/img/logo/lobiadmin-logo-text-64.png"
                                        data-holder-rendered="true"/>
                                </a>
                            </div>
                            <div className="col company-details">
                                <h2 className="name">
                                    <a target="_blank" href="https://lobianijs.com">
                                        Arboshiki
                                    </a>
                                </h2>
                                <div>455 Foggy Heights, AZ 85004, US</div>
                                <div>(123) 456-789</div>
                                <div>company@example.com</div>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div className="row contacts">
                            <div className="col invoice-to">
                                <div className="text-gray-light">INVOICE TO:</div>
                                <h2 className="to">John Doe</h2>
                                <div className="address">796 Silver Harbour, TX 79273, US</div>
                                <div className="email"><a href="mailto:john@example.com">john@example.com</a></div>
                            </div>
                            <div className="col invoice-details">
                                <h1 className="invoice-id">INVOICE 3-2-1</h1>
                                <div className="date">Date of Invoice: 01/10/2018</div>
                                <div className="date">Due Date: 30/10/2018</div>
                            </div>
                        </div>
                        <table border="0" cellSpacing="0" cellPadding="0">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th className="text-left">DESCRIPTION</th>
                                <th className="text-right">HOUR PRICE</th>
                                <th className="text-right">HOURS</th>
                                <th className="text-right">TOTAL</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="no">04</td>
                                <td className="text-left"><h3>
                                    <a target="_blank" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                        Youtube channel
                                    </a>
                                </h3>
                                    <a target="_blank" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                        Useful videos
                                    </a>
                                    to improve your Javascript skills. Subscribe and stay tuned :)
                                </td>
                                <td className="unit">$0.00</td>
                                <td className="qty">100</td>
                                <td className="total">$0.00</td>
                            </tr>
                            <tr>
                                <td className="no">01</td>
                                <td className="text-left"><h3>Website Design</h3>Creating a recognizable design solution
                                    based on the company's existing visual identity
                                </td>
                                <td className="unit">$40.00</td>
                                <td className="qty">30</td>
                                <td className="total">$1,200.00</td>
                            </tr>
                            <tr>
                                <td className="no">02</td>
                                <td className="text-left"><h3>Website Development</h3>Developing a Content Management
                                    System-based Website
                                </td>
                                <td className="unit">$40.00</td>
                                <td className="qty">80</td>
                                <td className="total">$3,200.00</td>
                            </tr>
                            <tr>
                                <td className="no">03</td>
                                <td className="text-left"><h3>Search Engines Optimization</h3>Optimize the site for
                                    search engines (SEO)
                                </td>
                                <td className="unit">$40.00</td>
                                <td className="qty">20</td>
                                <td className="total">$800.00</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan="2"></td>
                                <td colSpan="2">SUBTOTAL</td>
                                <td>$5,200.00</td>
                            </tr>
                            <tr>
                                <td colSpan="2"></td>
                                <td colSpan="2">TAX 25%</td>
                                <td>$1,300.00</td>
                            </tr>
                            <tr>
                                <td colSpan="2"></td>
                                <td colSpan="2">GRAND TOTAL</td>
                                <td>$6,500.00</td>
                            </tr>
                            </tfoot>
                        </table>
                        <div className="thanks">Thank you!</div>
                        <div className="notices">
                            <div>NOTICE:</div>
                            <div className="notice">A finance charge of 1.5% will be made on unpaid balances after 30
                                days.
                            </div>
                        </div>
                    </main>
                    <footer>
                        Invoice was created on a computer and is valid without the signature and seal.
                    </footer>
                </div>
                <div></div>
            </div>
        );
    }
}

class Printable extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Invoice
                        <strong>01/01/01/2018</strong>
                        <span className="float-right"> <strong>Status:</strong> Pending</span>

                    </div>
                    <div className="card-body">
                        <div className="row mb-4">
                            <div className="col-sm-6">
                                <h6 className="mb-3">From:</h6>
                                <div>
                                    <strong>Webz Poland</strong>
                                </div>
                                <div>Madalinskiego 8</div>
                                <div>71-101 Szczecin, Poland</div>
                                <div>Email: info@webz.com.pl</div>
                                <div>Phone: +48 444 666 3333</div>
                            </div>

                            <div className="col-sm-6">
                                <h6 className="mb-3">To:</h6>
                                <div>
                                    <strong>Bob Mart</strong>
                                </div>
                                <div>Attn: Daniel Marek</div>
                                <div>43-190 Mikolow, Poland</div>
                                <div>Email: marek@daniel.com</div>
                                <div>Phone: +48 123 456 789</div>
                            </div>


                        </div>

                        <div className="table-responsive-sm">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th className="center">#</th>
                                    <th>Item</th>
                                    <th>Description</th>

                                    <th className="right">Unit Cost</th>
                                    <th className="center">Qty</th>
                                    <th className="right">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="center">1</td>
                                    <td className="left strong">Origin License</td>
                                    <td className="left">Extended License</td>

                                    <td className="right">$999,00</td>
                                    <td className="center">1</td>
                                    <td className="right">$999,00</td>
                                </tr>
                                <tr>
                                    <td className="center">2</td>
                                    <td className="left">Custom Services</td>
                                    <td className="left">Instalation and Customization (cost per hour)</td>

                                    <td className="right">$150,00</td>
                                    <td className="center">20</td>
                                    <td className="right">$3.000,00</td>
                                </tr>
                                <tr>
                                    <td className="center">3</td>
                                    <td className="left">Hosting</td>
                                    <td className="left">1 year subcription</td>

                                    <td className="right">$499,00</td>
                                    <td className="center">1</td>
                                    <td className="right">$499,00</td>
                                </tr>
                                <tr>
                                    <td className="center">4</td>
                                    <td className="left">Platinum Support</td>
                                    <td className="left">1 year subcription 24/7</td>

                                    <td className="right">$3.999,00</td>
                                    <td className="center">1</td>
                                    <td className="right">$3.999,00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-5">

                            </div>

                            <div className="col-lg-4 col-sm-5 ml-auto">
                                <table className="table table-clear">
                                    <tbody>
                                    <tr>
                                        <td className="left">
                                            <strong>Subtotal</strong>
                                        </td>
                                        <td className="right">$8.497,00</td>
                                    </tr>
                                    <tr>
                                        <td className="left">
                                            <strong>Discount (20%)</strong>
                                        </td>
                                        <td className="right">$1,699,40</td>
                                    </tr>
                                    <tr>
                                        <td className="left">
                                            <strong>VAT (10%)</strong>
                                        </td>
                                        <td className="right">$679,76</td>
                                    </tr>
                                    <tr>
                                        <td className="left">
                                            <strong>Total</strong>
                                        </td>
                                        <td className="right">
                                            <strong>$7.477,36</strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
class Printable2 extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Invoice
                        <strong>01/01/01/2018</strong>
                        <span className="float-right"> <strong>Status:</strong> Pending</span>

                    </div>

                </div>
            </div>
        );
    }
}

class PrintRecipe extends Component {

    render() {

        return (
            <div className='w-100'>
                <ReactToPrint
                    trigger={() =>
                        <Button outline color="primary" className="mb-2 w-100 pr-0 pl-0 fs1vw  d-flex justify-content-center align-items-center marginZero btn-pb" >
                            <span className="glyph-icon simple-icon-printer    "></span>      <span className='  pl-2'>چاپ فاکتور</span>
                        </Button>
                    }
                    content={() => this.componentRef2}
                     // content={() => <ComponentToPrint/>}
                />
                {/*<div style={{ display: "none" }}><ComponentToPrint ref={el => (this.componentRef = el)} /></div>*/}
                <div style={{ display: "none" }}><Printable ref={el => (this.componentRef = el)} /></div>
                <div style={{ display: "none" }}><Printable2 ref={el => (this.componentRef2 = el)} /></div>

             </div>

        );
    }
}

export default PrintRecipe;
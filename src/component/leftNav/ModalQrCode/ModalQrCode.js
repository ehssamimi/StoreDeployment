import React, {Component} from 'react';
import  QRCode from 'qrcode.react'

class ModalQrCode extends Component {
    render() {
        return (
            <div>
                <QRCode value={this.props.value} size={256}/>
            </div>
        );
    }
}

export default ModalQrCode;
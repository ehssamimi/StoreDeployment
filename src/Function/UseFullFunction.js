import RowShowShowColEdit from "../component/Sub/RowShowShowColEdit/RowShowShowColEdit";
import React from "react";
import NotificationManager from "../components/common/react-notifications/NotificationManager";

export const formattime=(TimeStamp)=>{
    var date = new Date(TimeStamp * 1000);
// Hours part from the timestamp
    var hours = date.getHours();
// Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
// Will display time in 10:30:23 format
//     return  hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return  hours + ':' + minutes.substr(-2)  ;
};
export const ProductDetails=(Products)=>{
    let ProductDetail=[];
    Products.map((todo, index) => {
        let item = {
            id: index+1,
            ax: todo['Images'],
            name: todo['Name'],
            number: todo['Count'],
            per: todo['CurrentPrice'],
            all: todo['Count'] * todo['CurrentPrice'],
            ProductId:todo['ProductId']
        };
        ProductDetail.push(item);
    });
    return ProductDetail
};
export const ProductList=(list)=>{
    let listProduct=[];
     list.map((todo ,index)=>{
        let item={id:todo['_id'],title:todo['PackageNumber'] };
        listProduct.push(item);
    });
     return listProduct
}

export const ProductList1=(list)=>{
    let listProduct=[];
    list.map((todo ,index)=>{
        let item={id:todo['_id'],title:todo['PackageInfo']['PackageNumber'] };
        listProduct.push(item);
    });
    return listProduct
}
export const chichiManInfoDetail=(Personal,vehicle)=>{

   let  listProduct = [{
        label: 'نام و نام خانوادگی',
        value: Personal['First_Name'] +" "+ Personal['Last_Name']
    }, {label: 'شماره تماس', value: Personal['PhoneNumber']}, {label: 'نوع وسیله نقلیه', value: vehicle['VehicleModel']}, {label: 'پلاک', value: vehicle['PlateNumber']}];


    return listProduct
}


export const error_Notification=(status,Response)=>{
    return NotificationManager.error(
        Response,
        status,
        3000,
        null,
        null,
        "error"
    );
};
export const success_Notification=(Response)=>{
    return NotificationManager.success(
        "موفق شدید",
        Response,
        3000,
        null,
        null,
        "success"
    );
};


import * as Const from "../Const/serverConst";
import axios from "axios";


export async  function  GetProductList(state){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    var resp={state: "",Description: ""}

    await axios.get(`${Const.product}warehouse/baskets/get/state?state=${state}` , {headers: headers}).then(function (response) {
        console.log(response);
         resp={state: response.status,Description: response.data};
    }).catch(function (error) {
        resp=Error(error);
    });
    return resp;
}
export async  function  GetProductDetail(id){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    var resp={state: "",Description: ""}
    await axios.get(`${Const.product}warehouse/baskets/detail?_id=${id}` , {headers: headers}).then(function (response) {
        resp={state: response.status,Description: response.data};
    }).catch(function (error) {
        console.log(error);
        resp=Error(error)
    });
    return resp;
}
export async  function  GetState(id){
      let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    var resp="";
    await axios.get(`${Const.product}warehouse/states` , {headers: headers}).then(function (response) {
        resp=response.data;
    }).catch(function (error) {
        console.log(error);
        resp='error'
    });
    return resp;
}

export async  function  ChangeState(id,action){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
        "accept": "application/json"
    };
    var resp="";
    console.log(`${Const.product}warehouse/baskets/state/action?basket_id=${id}&action=${action}`);
    await axios.get(`${Const.product}warehouse/baskets/state/action?basket_id=${id}&action=${action}` , {headers: headers}).then(function (response) {
        console.log(response);
        resp=response.data;
    }).catch(function (error) {
        console.log(error);
        resp='error'
    });
    return resp;
}
export async  function  UpdateCategories(CatId,Position,Image,DestinationId){
    let formData = new FormData();
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
        // 'category_id': CatId,
        'category_id': CatId,
    };
    formData.append("Position",Position);
    formData.append("Image",Image);
    formData.append("DestinationId",DestinationId);
    var resp="";
    await axios.put(`${Const.HomePage}admin/category/${CatId}/items/update`,formData, {headers: headers}).then(function (response) {
        // console.log(response);
        let { status } = response ;
        resp=status;
    }).catch(function (error) {
        console.log(error);
        resp='error'
    });
    return resp;
    // console.log(res);
    // let { ItemId } = res.data ;
    // let { status } = res ;
    // if (status===200) {
    //     return status
    // }else {
    //     return "error"
    // }

}


// ********30033***********

export async  function  GetState33(id){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    var resp="";
    await axios.get(`${Const.ChichiMan}warehouse/states` , {headers: headers}).then(function (response) {
        resp=response.data;
    }).catch(function (error) {
        console.log(error);
        resp='error'
    });
    return resp;
}
export async  function  GetProductList33(state){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    var resp="";
    await axios.get(`${Const.ChichiMan}warehouse/baskets/get/state?state=${state}` , {headers: headers}).then(function (response) {
        console.log(response);
        // let { ItemId } = response.data ;
        resp=response.data;
    }).catch(function (error) {
        console.log(error);
        resp='error'
    });
    return resp;
}
export async  function  GetProductDetail33(id){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    var resp="";
    await axios.get(`${Const.ChichiMan}warehouse/baskets/detail?_id=${id}` , {headers: headers}).then(function (response) {
        resp=response.data;
    }).catch(function (error) {
        console.log(error);
        resp='error'
    });
    return resp;
}
export async  function  GetChichiManDetail(id){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    var resp={state:"",Description:""};
    await axios.get(`${Const.ChichiMan}warehouse/baskets/chichiman?package_id=${id}` , {headers: headers}).then(function (response) {
        resp={state:response.status,Description:response.data};
    }).catch(function (error) {
         console.log(error.response);
        resp=Error(error)
    });
    return resp;
}
export async  function  AutoAssignChichiMan( ){
    let headers = {
        'Token': Const.Token,
        'Id': Const.ID,
    };
    var resp={state:"",Description:""};
    await axios.get(`${Const.ChichiMan}system/package/auto-assigner` , {headers: headers}).then(function (response) {
        console.log(response);
        resp={state:response.status,Description:response.data};
    }).catch(function (error) {
        console.log(error.response);
        resp=Error(error)
    });
    return resp;
}


function Error(error) {
    console.log(error.response);
    // console.log(error.response.data);

    console.log(error);
    var resp ="";
    if (error.response===undefined){
        resp={state: 400,Description: error.message}

    } else if (error.response.status===400) {
        resp={state: 400,Description: error.response.data.detail}
        if (error.response.data.detail==="access denied") {
            console.log("we are out !!!!!!!!!!");
            // cookie.remove('basket', { path: '/' });
            // localStorage.clear();
            // window.location.reload();
        }

    }else if (error.response.status===422){
        resp={state:422,Description:error.response.statusText}
    }else{
        resp={state:error.response.status||400,Description:error.response.data.detail||error.message}
    }
    return resp;
}



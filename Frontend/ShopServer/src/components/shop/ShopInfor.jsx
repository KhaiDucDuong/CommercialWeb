import { lazy } from "react";

function ShopInfor(props){
  return (
    <div class="">
    <table width="100%" class="table table-bordered">
        <tr>
        <td class="col-xs-4 user-img" rowspan="4">
                        <img src={props.shopData.shopImage}/>
            </td>
        </tr>  
        <tr >

            <td id="info-row" class="col-xs-4" colspan="1">
                <h2 class="user-name">{props.shopData.shopname}</h2>
                <p class="user-email">{props.shopData.shopEmail}</p>
            </td>
        </tr>
        <tr>
            <td id="info-row" class="col-xs-8 borderless-top borderless-bottom" colspan="2">
                <p class="user-infor">{props.shopData.shopInfor}</p>
            </td>
        </tr>
        <tr>
            <td id="info-row" class="col-xs-4" colspan="1">
                <div class="">
                    <span class="user-records">Liked: {props.shopData.shopLike}</span>
                    <span class="lnr lnr-heart vector-symbol"></span>
                </div>
            </td>
            <td id="info-row" class="col-xs-4" colspan="1">
                <div class="">
                    <span class="user-records">Products:69</span>
                </div>
            </td>
        </tr>
    </table>
    </div>
  );
};

export default ShopInfor;

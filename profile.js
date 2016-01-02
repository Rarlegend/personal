/**
 * Created by Amanpreet on 12/31/14.
 */

var orderButton;

$(document).ready(function(){
    orderButton = $(".btn.orderButton");
    orderButton.click(function(){
        orderClicked();
    });
});

function orderClicked(){
    $(".topLevel").show();

}
function noRecur(){
    $(".weekLevel").show();
}
function yesRecur(){
    $(".weekLevel").hide();
    $(".customOrder").hide();
}
function customSelect(){
    $(".customOrder").show();
}
function full(){
    $(".customOrder").hide();
}
function seven(){
    $(".customOrder").hide();
}
function five(){
    $(".customOrder").hide();
}
function fiveNoS(){
    $(".customOrder").hide();
}
function fiveNoB(){
    $(".customOrder").hide();
}
function fiveOnlyD(){
    $(".customOrder").hide();
}
function three(){
    $(".customOrder").hide();
}
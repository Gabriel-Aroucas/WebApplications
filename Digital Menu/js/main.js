//const { data } = require("jquery");

$("#hamburguers").on({
    click: () => {
        $("#hamburguers").css('animation', 'bounceOutLeft');
        $("#hamburguers").css('animation-duration', '1s');
        setTimeout(() => {
            location.href = "pages/cardápio.html";
        }, 900)
    }
})
$("#events").on({
    click: () => {
        $("#events").css('animation', 'bounceOutRight');
        $("#events").css('animation-duration', '1s');
        setTimeout(() => {
            location.href = "pages/eventos.html";
        }, 900)
    }
})
$("#combos").click(() => {

});
$("#combos").on({
    click: () => {
        $("#container").css('display', 'block');
        $("#ty").css('display', 'block');
    }
})
$("#reservas").on({
    click: () => {
        $("#modalError").css('display', 'block');
        $("#ty").css('display', 'block');
    }
})
$("#btnOkModal").on({
    click: () => {
        $("#modalError").css('display', 'none');
        $("#ty").css('display', 'none');
    }
})
$(".closeCart").on({
    click: () => {
        $("#cartOpen").css("display", "none");
    }
})
$(".cartIcon").on({
    click: () => {
        $("#cartOpen").css("display", "block");
    }
})

//get element in html for change it.
let shopStatusText = document.querySelector(".shopStatusText");
let shopStatusColor = document.querySelector(".shopStatusColor");

//receiv a local hour
const systemData = new Date;
const hours = systemData.getHours();

//week days
//0 - sunday | 1 - monday | 2 - trusday  etc..
const week = systemData.getDay();
if(week == 1){
    shopStatusColor.style.color='red';
    shopStatusText.innerHTML=' Fechado';
}
//operating hours
else if(hours >= 18 || hours <= 2){
    shopStatusColor.style.color='yellowGreen';
    shopStatusText.innerHTML='Aberto agora';
    localStorage.setItem('shopStatus','open')
}
else{
    shopStatusColor.style.color='red';
    shopStatusText.innerHTML=' Fechado';
    localStorage.setItem('shopStatus','closed')

}

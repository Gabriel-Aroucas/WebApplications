import { modal } from "../components/modal.js";
let data = new Date();
let parOuImpar = '';
let entradaEsaida = 0;

setInterval(() => {
    let data = new Date();

    let day = data.getDate();
    let month = data.getMonth(); month+=1;
    let year = data.getFullYear();
    
    let hour = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();


    
    $("#date").text(day + '/' + month + '/' + year)
    $("#hours").text(hour + ':' + minutes + ':' + seconds)

    if(hour >= 0 && hour<=4){
        $("#luminous").text('Boa Madrugada');
     }else if (hour >= 5 && hour<=11){
        $("#luminous").text('Bom Dia');
     }else if (hour >= 12 && hour<=18){
        $("#luminous").text('Boa Tarde');
     }else{
        $("#luminous").text('Boa Noite');
     }

}, 1000)

$("#pointerRegister").on({
    click:()=>{
        modal('Ponto Registrado','Você pode acompanhar na seção Histórico');
         entradaEsaida++;
         if(entradaEsaida%2 != 0){
            //entrada
            parOuImpar='par';
         }else{
            //saida
            parOuImpar='imapar';
         }
    }
})

$(".item1").on({
   click:()=>{
      $("#main").css('opacity','0');
      $(".historic").css('opacity','1');
   }
})
$(".headerBrand").on({
   click:()=>{
      $("#main").css('opacity','1');
      $(".historic").css('opacity','0');
   }
})

//headerBrand
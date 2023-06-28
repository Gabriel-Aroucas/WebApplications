
let valorFinal = 0;
let cartCounter = 0;
let repass = '';


let HB1 = document.querySelector('#HB1');
let CB1 = document.querySelector('#CB1');

let HB2 = document.querySelector('#HB2');
let CB2 = document.querySelector('#CB2');

let HB3 = document.querySelector('#HB3');
let CB3 = document.querySelector('#CB3');

let HB4 = document.querySelector('#HB4');
let CB4 = document.querySelector('#CB4');

let HB5 = document.querySelector('#HB5');
let CB5 = document.querySelector('#CB5');

let HB6 = document.querySelector('#HB6');
let CB6 = document.querySelector('#CB6');

let HB7 = document.querySelector('#HB7');
let CB7 = document.querySelector('#CB7');

let HB8 = document.querySelector('#HB8');
let CB8 = document.querySelector('#CB8');

let HB9 = document.querySelector('#HB9');
let CB9 = document.querySelector('#CB9');

let HB10 = document.querySelector('#HB10');
let CB10 = document.querySelector('#CB10');

let HB11 = document.querySelector('#HB11');

let cocacola2lt = document.querySelector('#cocacola2lt');
let fanta2lt = document.querySelector('#fanta2lt');
let fantalata350 = document.querySelector('#fantalata350');
let cocalata350 = document.querySelector('#cocalata350');
let delvale290 = document.querySelector('#delvale290');

let combocasal = document.querySelector('#combocasal');
let churrasco = document.querySelector('#churrasco');
let sonhodemenino = document.querySelector('#sonhodemenino');


let x = "<button type='button'>&times;</button>";
addToCart = (e) => {
    swalCartAdd();
    $("#placeholder").css('display', 'none');
    $("#cartCounter").css('opacity', '1').text(cartCounter++);
    switch (e) {
        case 'HB1':
            let trHB1 = document.createElement('tr');
            let tdHB1 = document.createElement('td');
            tdHB1.innerHTML = 'Hambúrguer Nº1' + "<button id='removeToCart' value='9.90' onclick='removeToCart(this)'>x</button";
            trHB1.appendChild(tdHB1);
            $("#content").append(trHB1);
            repass += '*Hambúrguer Nº1* %0A';

            valorFinal += parseFloat(HB1.attributes[1].nodeValue);
            let finalValueHB1 = document.getElementById('finalValue');
            finalValueHB1.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB1) => {
                esteHB1.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB1.value);
                finalValueHB1.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        case 'CB1':
            let trCB1 = document.createElement('tr');
            let tdCB1 = document.createElement('td');
            tdCB1.innerHTML = 'Combo Nº1' + "<button id='removeToCart' value='12.90' onclick='removeToCart(this)'>x</button";
            trCB1.appendChild(tdCB1);
            $("#content").append(trCB1);
            repass += '*Combo Nº1* %0A';

            valorFinal += parseFloat(CB1.attributes[1].nodeValue);
            let finalValueCB1 = document.getElementById('finalValue');
            finalValueCB1.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB1) => {
                esteCB1.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB1.value);
                finalValueCB1.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }

            break;

        case 'HB2':
            let trHB2 = document.createElement('tr');
            let tdHB2 = document.createElement('td');
            tdHB2.innerHTML = 'Hambúrguer Nº2' + "<button id='removeToCart' value='10.90' onclick='removeToCart(this)'>x</button";
            trHB2.appendChild(tdHB2);
            $("#content").append(trHB2);
            repass += '*Hambúrguer Nº2* %0A';

            valorFinal += parseFloat(HB2.attributes[1].nodeValue);
            let finalValueHB2 = document.getElementById('finalValue');
            finalValueHB2.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB2) => {
                esteHB2.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB2.value);
                finalValueHB2.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB2':
            let trCB2 = document.createElement('tr');
            let tdCB2 = document.createElement('td');
            tdCB2.innerHTML = 'Combo Nº2' + "<button id='removeToCart' value='13.90' onclick='removeToCart(this)'>x</button";
            trCB2.appendChild(tdCB2);
            $("#content").append(trCB2);
            repass += '*Combo Nº2* %0A';

            valorFinal += parseFloat(CB2.attributes[1].nodeValue);
            let finalValueCB2 = document.getElementById('finalValue');
            finalValueCB2.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB2) => {
                esteCB2.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB2.value);
                finalValueCB2.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;



        case 'HB3':
            let trHB3 = document.createElement('tr');
            let tdHB3 = document.createElement('td');
            tdHB3.innerHTML = 'Hambúrguer Nº3' + "<button id='removeToCart' value='11.90' onclick='removeToCart(this)'>x</button";
            trHB3.appendChild(tdHB3);
            $("#content").append(trHB3);
            repass += '*Hambúrguer Nº3* %0A';

            valorFinal += parseFloat(HB3.attributes[1].nodeValue);
            let finalValueHB3 = document.getElementById('finalValue');
            finalValueHB3.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB3) => {
                esteHB3.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB3.value);
                finalValueHB3.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB3':
            let trCB3 = document.createElement('tr');
            let tdCB3 = document.createElement('td');
            tdCB3.innerHTML = 'Combo Nº3' + "<button id='removeToCart' value='14.90' onclick='removeToCart(this)'>x</button";
            trCB3.appendChild(tdCB3);
            $("#content").append(trCB3);
            repass += '*Combo Nº3* %0A';

            valorFinal += parseFloat(CB3.attributes[1].nodeValue);
            let finalValueCB3 = document.getElementById('finalValue');
            finalValueCB3.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB3) => {
                esteCB3.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB3.value);
                finalValueCB3.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;



        case 'HB4':
            let trHB4 = document.createElement('tr');
            let tdHB4 = document.createElement('td');
            tdHB4.innerHTML = 'Hambúrguer Nº4' + "<button id='removeToCart' value='12.90' onclick='removeToCart(this)'>x</button";
            trHB4.appendChild(tdHB4);
            $("#content").append(trHB4);
            repass += '*Hambúrguer Nº4* %0A';

            valorFinal += parseFloat(HB4.attributes[1].nodeValue);
            let finalValueHB4 = document.getElementById('finalValue');
            finalValueHB4.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB4) => {
                esteHB4.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB4.value);
                finalValueHB4.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB4':
            let trCB4 = document.createElement('tr');
            let tdCB4 = document.createElement('td');
            tdCB4.innerHTML = 'Combo Nº4' + "<button id='removeToCart' value='15.90' onclick='removeToCart(this)'>x</button";
            trCB4.appendChild(tdCB4);
            $("#content").append(trCB4);
            repass += '*Combo Nº4* %0A';

            valorFinal += parseFloat(CB4.attributes[1].nodeValue);
            let finalValueCB4 = document.getElementById('finalValue');
            finalValueCB4.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB4) => {
                esteCB4.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB4.value);
                finalValueCB4.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        case 'HB5':
            let trHB5 = document.createElement('tr');
            let tdHB5 = document.createElement('td');
            tdHB5.innerHTML = 'Hambúrguer Nº5' + "<button id='removeToCart' value='13.90' onclick='removeToCart(this)'>x</button";
            trHB5.appendChild(tdHB5);
            $("#content").append(trHB5);
            repass += '*Hambúrguer Nº5* %0A';

            valorFinal += parseFloat(HB5.attributes[1].nodeValue);
            let finalValueHB5 = document.getElementById('finalValue');
            finalValueHB5.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB5) => {
                esteHB5.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB5.value);
                finalValueHB5.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB5':
            let trCB5 = document.createElement('tr');
            let tdCB5 = document.createElement('td');
            tdCB5.innerHTML = 'Combo Nº5' + "<button id='removeToCart' value='16.90' onclick='removeToCart(this)'>x</button";
            trCB5.appendChild(tdCB5);
            $("#content").append(trCB5);
            repass += '*Combo Nº5* %0A';

            valorFinal += parseFloat(CB5.attributes[1].nodeValue);
            let finalValueCB5 = document.getElementById('finalValue');
            finalValueCB5.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB5) => {
                esteCB5.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB5.value);
                finalValueCB5.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;
        case 'HB6':
            let trHB6 = document.createElement('tr');
            let tdHB6 = document.createElement('td');
            tdHB6.innerHTML = 'Hambúrguer Nº6' + "<button id='removeToCart' value='14.90' onclick='removeToCart(this)'>x</button";
            trHB6.appendChild(tdHB6);
            $("#content").append(trHB6);
            repass += '*Hambúrguer Nº6* %0A';

            valorFinal += parseFloat(HB6.attributes[1].nodeValue);
            let finalValueHB6 = document.getElementById('finalValue');
            finalValueHB6.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB6) => {
                esteHB6.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB6.value);
                finalValueHB6.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB6':
            let trCB6 = document.createElement('tr');
            let tdCB6 = document.createElement('td');
            tdCB6.innerHTML = 'Combo Nº6' + "<button id='removeToCart' value='17.90' onclick='removeToCart(this)'>x</button";
            trCB6.appendChild(tdCB6);
            $("#content").append(trCB6);
            repass += '*Combo Nº6* %0A';

            valorFinal += parseFloat(CB6.attributes[1].nodeValue);
            let finalValueCB6 = document.getElementById('finalValue');
            finalValueCB6.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB6) => {
                esteCB6.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB6.value);
                finalValueCB6.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'HB7':
            let trHB7 = document.createElement('tr');
            let tdHB7 = document.createElement('td');
            tdHB7.innerHTML = 'Hambúrguer Nº7' + "<button id='removeToCart' value='15.90' onclick='removeToCart(this)'>x</button";
            trHB7.appendChild(tdHB7);
            $("#content").append(trHB7);
            repass += '*Hambúrguer Nº7* %0A';


            valorFinal += parseFloat(HB7.attributes[1].nodeValue);
            let finalValueHB7 = document.getElementById('finalValue');
            finalValueHB7.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB7) => {
                esteHB7.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB7.value);
                finalValueHB7.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB7':
            let trCB7 = document.createElement('tr');
            let tdCB7 = document.createElement('td');
            tdCB7.innerHTML = 'Combo Nº7' + "<button id='removeToCart' value='18.90' onclick='removeToCart(this)'>x</button";
            trCB7.appendChild(tdCB7);
            $("#content").append(trCB7);
            repass += '*Combo Nº7* %0A';

            valorFinal += parseFloat(CB7.attributes[1].nodeValue);
            let finalValueCB7 = document.getElementById('finalValue');
            finalValueCB7.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB7) => {
                esteCB7.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB7.value);
                finalValueCB7.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'HB8':
            let trHB8 = document.createElement('tr');
            let tdHB8 = document.createElement('td');
            tdHB8.innerHTML = 'Hambúrguer Nº8' + "<button id='removeToCart' value='16.90' onclick='removeToCart(this)'>x</button";
            trHB8.appendChild(tdHB8);
            $("#content").append(trHB8);
            repass += '*Hambúrguer Nº8* %0A';

            valorFinal += parseFloat(HB8.attributes[1].nodeValue);
            let finalValueHB8 = document.getElementById('finalValue');
            finalValueHB8.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB8) => {
                esteHB8.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB8.value);
                finalValueHB8.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB8':
            let trCB8 = document.createElement('tr');
            let tdCB8 = document.createElement('td');
            tdCB8.innerHTML = 'Combo Nº8' + "<button id='removeToCart' value='19.90' onclick='removeToCart(this)'>x</button";
            trCB8.appendChild(tdCB8);
            $("#content").append(trCB8);
            repass += '*Combo Nº8* %0A';

            valorFinal += parseFloat(CB8.attributes[1].nodeValue);
            let finalValueCB8 = document.getElementById('finalValue');
            finalValueCB8.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB8) => {
                esteCB8.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB8.value);
                finalValueCB8.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        case 'HB9':
            let trHB9 = document.createElement('tr');
            let tdHB9 = document.createElement('td');
            tdHB9.innerHTML = 'Hambúrguer Nº9' + "<button id='removeToCart' value='17.90' onclick='removeToCart(this)'>x</button";
            trHB9.appendChild(tdHB9);
            $("#content").append(trHB9);
            repass += '*Hambúrguer Nº9* %0A';

            valorFinal += parseFloat(HB9.attributes[1].nodeValue);
            let finalValueHB9 = document.getElementById('finalValue');
            finalValueHB9.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB9) => {
                esteHB9.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB9.value);
                finalValueHB9.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB9':
            let trCB9 = document.createElement('tr');
            let tdCB9 = document.createElement('td');
            tdCB9.innerHTML = 'Combo Nº9' + "<button id='removeToCart' value='20.90' onclick='removeToCart(this)'>x</button";
            trCB9.appendChild(tdCB9);
            $("#content").append(trCB9);
            repass += '*Combo Nº9* %0A';

            valorFinal += parseFloat(CB9.attributes[1].nodeValue);
            let finalValueCB9 = document.getElementById('finalValue');
            finalValueCB9.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB9) => {
                esteCB9.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB9.value);
                finalValueCB9.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'HB10':
            let trHB10 = document.createElement('tr');
            let tdHB10 = document.createElement('td');
            tdHB10.innerHTML = 'Hambúrguer Nº10' + "<button id='removeToCart' value='18.90' onclick='removeToCart(this)'>x</button";
            trHB10.appendChild(tdHB10);
            $("#content").append(trHB10);
            repass += '*Hambúrguer Nº10* %0A';

            valorFinal += parseFloat(HB10.attributes[1].nodeValue);
            let finalValueHB10 = document.getElementById('finalValue');
            finalValueHB10.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB10) => {
                esteHB10.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB10.value);
                finalValueHB10.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'CB10':
            let trCB10 = document.createElement('tr');
            let tdCB10 = document.createElement('td');
            tdCB10.innerHTML = 'Combo Nº10' + "<button id='removeToCart' value='21.90' onclick='removeToCart(this)'>x</button";
            trCB10.appendChild(tdCB10);
            $("#content").append(trCB10);
            repass += '*Combo Nº10* %0A';

            valorFinal += parseFloat(CB10.attributes[1].nodeValue);
            let finalValueCB10 = document.getElementById('finalValue');
            finalValueCB10.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCB10) => {
                esteCB10.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCB10.value);
                finalValueCB10.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        case 'HB11':
            let trHB11 = document.createElement('tr');
            let tdHB11 = document.createElement('td');
            tdHB11.innerHTML = 'Hambúrguer Nº11' + "<button id='removeToCart' value='17.90' onclick='removeToCart(this)'>x</button";
            trHB11.appendChild(tdHB11);
            $("#content").append(trHB11);
            repass += '*Combo Nº11* %0A';

            valorFinal += parseFloat(HB11.attributes[1].nodeValue);
            let finalValueHB11 = document.getElementById('finalValue');
            finalValueHB11.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteHB11) => {
                esteHB11.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteHB11.value);
                finalValueCB10.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        /**************************
         *      refrigerantes     *
         * ************************/

        case 'cocacola2lt':
            let trRefri1 = document.createElement('tr');
            let tdRefri1 = document.createElement('td');
            tdRefri1.innerHTML = 'Coca Cola 2LT' + "<button id='removeToCart' value='9.90' onclick='removeToCart(this)'>x</button";
            trRefri1.appendChild(tdRefri1);
            $("#content").append(trRefri1);
            repass += '*Coca Cola 2LT* %0A';

            valorFinal += parseFloat(cocacola2lt.attributes[1].nodeValue);
            let finalValueRefri1 = document.getElementById('finalValue');
            finalValueRefri1.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteRefri1) => {
                esteRefri1.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteRefri1.value);
                finalValueRefri1.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        case 'fanta2lt':
            let trRefri2 = document.createElement('tr');
            let tdRefri2 = document.createElement('td');
            tdRefri2.innerHTML = 'Fanta 2LT' + "<button id='removeToCart' value='8.90' onclick='removeToCart(this)'>x</button";
            trRefri2.appendChild(tdRefri2);
            $("#content").append(trRefri2);
            repass += '*Fanta 2LT* %0A';

            valorFinal += parseFloat(fanta2lt.attributes[1].nodeValue);
            let finalValueRefri2 = document.getElementById('finalValue');
            finalValueRefri2.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteRefri2) => {
                esteRefri2.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteRefri2.value);
                finalValueRefri2.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        case 'cocalata350':
            let trRefri3 = document.createElement('tr');
            let tdRefri3 = document.createElement('td');
            tdRefri3.innerHTML = 'Coca Lata 350ml' + "<button id='removeToCart' value='4.90' onclick='removeToCart(this)'>x</button";
            trRefri3.appendChild(tdRefri3);
            $("#content").append(trRefri3);
            repass += '*Coca Lata 350ml* %0A';

            valorFinal += parseFloat(cocalata350.attributes[1].nodeValue);
            let finalValueRefri3 = document.getElementById('finalValue');
            finalValueRefri3.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteRefri3) => {
                esteRefri3.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteRefri3.value);
                finalValueRefri3.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;
        case 'delvale290':
            let trRefri4 = document.createElement('tr');
            let tdRefri4 = document.createElement('td');
            tdRefri4.innerHTML = 'Del valle 290ml' + "<button id='removeToCart' value='8.90' onclick='removeToCart(this)'>x</button";
            trRefri4.appendChild(tdRefri4);
            $("#content").append(trRefri4);
            repass += '*Del valle 290ml* %0A';

            valorFinal += parseFloat(delvale290.attributes[1].nodeValue);
            let finalValueRefri4 = document.getElementById('finalValue');
            finalValueRefri4.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteRefri4) => {
                esteRefri4.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteRefri4.value);
                finalValueRefri4.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        case 'fantalata350':
            let trRefri5 = document.createElement('tr');
            let tdRefri5 = document.createElement('td');
            tdRefri5.innerHTML = 'Fanta Lata 350ml' + "<button id='removeToCart' value='8.90' onclick='removeToCart(this)'>x</button";
            trRefri5.appendChild(tdRefri5);
            $("#content").append(trRefri5);
            repass += '*Fanta Lata 350ml* %0A';

            valorFinal += parseFloat(fantalata350.attributes[1].nodeValue);
            let finalValueRefri5 = document.getElementById('finalValue');
            finalValueRefri5.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteRefri5) => {
                esteRefri5.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteRefri5.value);
                finalValueRefri5.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;


        /****
         * combos especiais
        */
        case 'combocasal':
            let trCombo1 = document.createElement('tr');
            let tdCombo1 = document.createElement('td');
            tdCombo1.innerHTML = 'Combo Casal' + "<button id='removeToCart' value='38.90' onclick='removeToCart(this)'>x</button";
            trCombo1.appendChild(tdCombo1);
            $("#content").append(trCombo1);
            repass += '*Combo Casal* %0A';

            valorFinal += parseFloat(combocasal.attributes[1].nodeValue);
            let finalValueCombo1 = document.getElementById('finalValue');
            finalValueCombo1.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCombo1) => {
                esteCombo1.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCombo1.value);
                finalValueCombo1.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        case 'churrasco':
            let trCombo2 = document.createElement('tr');
            let tdCombo2 = document.createElement('td');
            tdCombo2.innerHTML = 'Combo - Churrasco' + "<button id='removeToCart' value='28.90' onclick='removeToCart(this)'>x</button";
            trCombo2.appendChild(tdCombo2);
            $("#content").append(trCombo2);
            repass += '*Combo Churrasco* %0A';

            valorFinal += parseFloat(churrasco.attributes[1].nodeValue);
            let finalValueCombo2 = document.getElementById('finalValue');
            finalValueCombo2.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCombo2) => {
                esteCombo2.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCombo2.value);
                finalValueCombo2.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;

        case 'sonhodemenino':
            let trCombo3 = document.createElement('tr');
            let tdCombo3 = document.createElement('td');
            tdCombo3.innerHTML = 'Combo - Sonho de Menino' + "<button id='removeToCart' value='48.90' onclick='removeToCart(this)'>x</button";
            trCombo3.appendChild(tdCombo3);
            $("#content").append(trCombo3);
            repass += '*Combo Sonho de Menino* %0A';

            valorFinal += parseFloat(churrasco.attributes[1].nodeValue);
            let finalValueCombo3 = document.getElementById('finalValue');
            finalValueCombo3.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            removeToCart = (esteCombo3) => {
                esteCombo3.parentNode.parentNode.remove();
                valorFinal -= parseFloat(esteCombo3.value);
                finalValueCombo3.innerHTML = valorFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                cartCounter--
                $("#cartCounter").text(cartCounter);
                if (cartCounter == 0) {
                    $("#cartCounter").css('opacity', '0');
                }
            }
            break;
    }



}
$("#finish").on({
    click: () => {
        if ($("#content")[0].lastChild.nodeName == '#text') {
            swalError();
        } else {
            $(".confirmationModal").css('display', 'block');
            $(".cartOpen").css('display', 'none');
            $("main").css('z-index', '-1');
        }
    }
})
$("#finishOrder").on({
    click: () => {
        const name = $("#clientName").val();
        const paymentMode = $("#payment").find(':selected').text();
        const adress = $("#adress").val();
        const number = $("#number").val();
        const sauces = $("#sauces").find(':selected').text();
        const additionalInformation = $("#additionalInformation").val();
        const exchanged = $("#exchanged").val();

        if (name.length <= 1) {
            $("#modalError").css('display', 'block');
            $("#DT").text('Campo de nome Vazio');
            $("#DD").text('Adicione ao menos um nome para finalizar a compra')
            $("#ty").css('display', 'block');

        } else if (paymentMode == 'Selecione uma opção') {
            $("#modalError").css('display', 'block');
            $("#DT").text('Campo de pagamento Vazio');
            $("#DD").text('Adicione ao menos uma forma de pagamento para finalizar a compra')
            $("#ty").css('display', 'block');
        } else if (sauces == 'Selecione uma opção') {
            $("#modalError").css('display', 'block');
            $("#DT").text('Campo de molhos Vazio');
            $("#DD").text('Caso não queira, pode usar a opção "nenhum" ')
            $("#ty").css('display', 'block')
        } else if (adress.length <= 5) {
            $("#modalError").css('display', 'block');
            $("#DT").text('Campo de Endereço Vazio');
            $("#DD").text('Adicione o endereço completo de sua residência para finalizar')
            $("#ty").css('display', 'block');


        } else if (number.length <= 0) {
            $("#modalError").css('display', 'block');
            $("#DT").text('Campo de Nº Vazio');
            $("#DD").text('Adicione o Número da residência finalrocoizar a compra')
            $("#ty").css('display', 'block');

        } else if ($("#payment").find(':selected').text() == "Dinheiro 💵" && exchanged.length <= 1) {
            //'Você precisa informar o valor que precisa de troco! Exemplo: Preciso de troco para uma nota de 100 reais'
            $("#modalError").css('display', 'block');
            $("#DT").text('Campo de Troco Vazio');
            $("#DD").text('Você precisa informar o valor que precisa de troco! Exemplo: Preciso de troco para uma nota de 100 reais')
            $("#ty").css('display', 'block');

        } else if ($("#payment").find(':selected').text() == "Dinheiro 💵") {
            window.location.href = `https://api.whatsapp.com/send?phone=+5521993084201&text= _Olá_, _Meu pedido é:_ %0A${repass}%0A _Meu nome é:_ *${name}*%0A _A forma de pagamento é:_ *${paymentMode}* .%0A _Meu endereço:_ *${adress}* _Nº_: *${number}* 📬. %0A _O molho é:_ *${sauces}* 🥫%0A _Precisa de troco ? :_ *${exchanged}* 🪙 %0A _Informações Adicionais:_ *${additionalInformation}* 📝`

        } else {
            let troco = 'Não';
            window.location.href = `https://api.whatsapp.com/send?phone=+5521993084201&text= _Olá_, _Meu pedido é:_ %0A${repass}%0A _Meu nome é:_ *${name}*%0A _A forma de pagamento é:_ *${paymentMode}* .%0A _Meu endereço:_ *${adress}* _Nº_: *${number}* 📬. %0A _O molho é:_ *${sauces}* 🥫%0A _Precisa de troco ? :_ *${troco}* 🪙 %0A _Informações Adicionais:_ *${additionalInformation}* 📝`

        }

    }
})
setInterval(() => {
    if ($("#payment").find(':selected').text() !== "Dinheiro 💵") {
        $(".exchangedMoney").css('display', 'none')
    } else {
        $(".exchangedMoney").css('display', 'block')

    }
}, 500)
setTimeout(() => {
    news();
}, 1000);
$("#closeConfirmationModal").on({
    click: () => {
        $(".confirmationModal").css('display', 'none');
        $("main").css('z-index', '0');

    }
})
setInterval(() => {
    $("#cartCounter").text(cartCounter);
}, 300);
let cartIcon = document.getElementById('cartIcon');
cartIcon.addEventListener('click', (e) => {
    $("#cartOpen").css('display', 'block');
})
let closeCart = document.getElementById('closeCart');
closeCart.addEventListener('click', (e) => {
    $("#cartOpen").css('display', 'none');

})

//operating shop

const systemData2 = new Date;
const hours2 = systemData2.getHours();

if(week == 1){
    localStorage.setItem('shopStatus','closed')
}
//operating hours
else if(hours >= 18 || hours2 <= 2){
    localStorage.setItem('shopStatus','open')
}
else{
    localStorage.setItem('shopStatus','closed')
}

    let shopStatus = localStorage.getItem('shopStatus');
    if (shopStatus == 'closed') {
        addToCart=null;
        setTimeout(()=>{
            swalShopClosed();
        },1000)
    }


swalCartAdd = () => {

    $("#modalError").css('display', 'block');
    $("#DT").text('Item adicionado ao carrinho');
    $("#DD").text('Adicione quantos produtos quiser antes de finalizar a compra 😁')
    $("#ty").css('display', 'block')
}
swalError = () => {
    $("#modalError").css('display', 'block');
    $("#DT").text('Carrinho Vazio');
    $("#DD").text('Adicione ao menos um produto ao carrinho para finalizar a compra')
    $("#ty").css('display', 'block')
}
swalShopClosed = () => {
    $("#modalError").css('display', 'block');
    $("#DT").text('Loja Fechada');
    $("#DD").text('Aguarde até o horário de abertura da loja para realizar um pedido')
    $("#ty").css('display', 'block')
}
swalErrorNome = () => {
    $("#modalError").css('display', 'block');
    $("#DT").text('Campo de nome Vazio');
    $("#DD").text('Adicione ao menos um nome para finalizar a compra')
    $("#ty").css('display', 'block')
}
news = () => {
    $("#modalError").css('display', 'block');
    $("#DT").text('Novidade na Área 😎').css('font-style', 'normal');
    $("#DD").text('Todos os combos Vem com : Hambúrguer + Coca cola Lata + Batata Pequena').css('font-style', 'normal');
    $("#ty").css('display', 'block')
}

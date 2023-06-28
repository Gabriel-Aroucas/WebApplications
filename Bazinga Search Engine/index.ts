
//const btn = document.querySelector("#btn");
//
//btn?.addEventListener('click', () => {
//    alert('a')
//})

let count:HTMLElement = document.querySelector("#count") as HTMLElement;
let num:number = 0;
setInterval(() => {
    count.innerHTML=`${num++}`;
}, 100)

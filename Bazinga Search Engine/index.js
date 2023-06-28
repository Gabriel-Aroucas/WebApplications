const inputSearchField = document.querySelector(".inputSearchField");
const searchButton = document.querySelector(".searchButton")

searchButton.addEventListener("click",()=>{

    let openverse =  `https://openverse.org/search/?q=${inputSearchField.value}&license_type=commercial,modification`;
    let ecosia = `https://www.ecosia.org/search?q=${inputSearchField.value}`;
    let ask = `https://www.ask.com/web?o=0&l=dir&qo=serpSearchTopBox&ad=dirN&rtb=20000&ueid=52b91aa6-a88f-4889-8387-5c25428fc747&q=${inputSearchField.value}`;
    let aol = `https://search.aol.com/aol/search?q=${inputSearchField.value}&s_qt=ac&rp=&s_chn=prt_bon&s_it=comsearch`;
    let duck = `https://duckduckgo.com/?q=${inputSearchField.value}&t=h_&ia=web`;

    const url = [openverse,ecosia,ask,aol,duck];
    const random = Math.floor(Math.random()*url.length)
    window.location.href=url[random]
})

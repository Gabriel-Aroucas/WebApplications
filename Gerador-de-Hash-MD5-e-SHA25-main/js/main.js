

function coresRandom() {
    
    setInterval(() => {
        const cores = ['red','pink','green','blue','orange','purple','aquamarine','brown','cadetblue','chartreuse','darkmagenta'];
        const randomize = cores[Math.floor(Math.random()*cores.length)];
        $("#principalName").css('color',`${randomize}`);
    },1000);

}
coresRandom()
gerarHash=()=>{

    var texto = $("#text").val();
    

    if($("#MD5").is(':checked')){
        var md5Hash = CryptoJS.MD5(texto);
        $("#hashGerado").text(md5Hash.toString());
    }else if($("#SHA256").is(':checked')){
        var sha256Hash = CryptoJS.SHA256(texto);
        $("#hashGerado").text(sha256Hash.toString());    

    }

//    $("#hashGerado").text(md5Hash.toString());
}
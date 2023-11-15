let qrimage=document.getElementById('qrImage');
let qrCode= document.getElementById('qrCode');


function generateQr(){
    let data = document.getElementById('Input').value;
    let urlData="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+data
    console.log(urlData)
    displayQr(urlData)
}

function displayQr(urlData){
        qrimage.src=urlData
        // qrCode.classList.add("show-img");
}


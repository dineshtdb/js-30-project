
let imgbox=document.getElementById("imgbox");
let qrimge=document.getElementById("i");
let qrtext=document.getElementById("qrtext");
function create(){
    if(qrtext.value.length>0){
       qrimge.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    imgbox.classList.add("show-img");
    }
    else{
        qrtext.classList.add('error');
        setTimeout(()=>{
            qrtext.classList.remove('error');
        },1000);
    }
    }
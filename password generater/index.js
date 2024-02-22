const pass=document.getElementById("Password");
const length=12;

const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz"
const num="0123456789";
const symbol="!@#$%^&*()_+";

const alchar=upper+lower+num+symbol;
btnn.addEventListener("click",()=>{
    let password="";
    while(length>password.length){
        password+=alchar[Math.floor(Math.random()*alchar.length)];
    }
    pass.value = password;
});
btn.addEventListener("click",()=>{
    pass.select();
    document.execCommand("copy");
});
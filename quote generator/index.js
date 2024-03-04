const api_url="https://api.quotable.io/random";
async function getquote(url){
    const response= await fetch(url);
    var data =await response.json();
    quote.innerHTML=data.content;
    auth.innerHTML=data.author;
    console.log(data);
}
getquote(api_url);
const quote=document.getElementById("quote");
const auth=document.getElementById("auth");
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML);
}
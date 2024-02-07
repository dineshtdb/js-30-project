const inputBox=document.getElementById("input");
const listContainer=document.getElementById("listContainer");
function addTask(){
    if(inputBox.value=='')
    alert("write something")
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
    }
}
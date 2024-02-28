const noteContainer=document.querySelector(".notesContainer");
const cbtn=document.querySelector(".dd");
let notes=document.querySelector("inputt");

cbtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let btn = document.createElement("button");
    
    inputbox.className = "inputt";
    inputbox.setAttribute("contenteditable", "true");
    
    btn.textContent = "delete";
    btn.addEventListener("click", () => {
        inputbox.remove(); 
    });

    noteContainer.appendChild(inputbox).appendChild(btn);;
});


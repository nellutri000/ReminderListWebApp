const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("Oh no! No task was written!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let SPAN= document.createElement("span");
        SPAN.innerHTML= "\u00d7";
        li.appendChild(SPAN);
    }
    inputBox.value= "";
    Save();
    
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        Save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        Save();
    }
}, false);

function Save(){
    localStorage.setItem("save",listContainer.innerHTML);
}

function ShowTheList(){
    listContainer.innerHTML=localStorage.getItem("save");
}
ShowTheList();
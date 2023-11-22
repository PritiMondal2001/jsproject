const inputbox=document.getElementById("input-box");
const listitems=document.getElementById("list-items");
function addtask(){
    if(inputbox.value === ''){
        alert("You should write something!!");
    }
    else{
        let li=document.createElement("li");//create html element for li tag
        li.innerHTML=inputbox.value;//whatever data inputted in input field will be added in li elements
        listitems.appendChild(li);//these li should be displayed in listitems
        let span =document.createElement("span");
        span.innerHTML="\u00d7";//cross icon
        li.appendChild(span);
    }
    inputbox.value=""; //after adding listitems input space will be again refresh
    savedata();
}
//remove items
//whenever we click in the container or listitems where we stored all the tasks
listitems.addEventListener("click",function(element){
    //if we have clicked on li then it add check mark and if check already marks ,then it removes the mark
     if(element.target.tagName ==="LI"){
        element.target.classList.toggle("check");
        savedata();
     }
     else if(element.target.tagName==="SPAN"){  //if click on span it delete the element
        element.target.parentElement.remove();
        savedata();
    }
},false);
//it will save our data
function savedata(){
    localStorage.setItem("data",listitems.innerHTML);
}
//it will show our saved data when we opened our websites
function showdata(){
    listitems.innerHTML=localStorage.getItem("data");
}
showdata();
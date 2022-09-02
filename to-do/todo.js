// displayComp = document.getElementById("display-complete");


let todoEl = document.getElementById("todo-el");
let displayEl = document.getElementById("display-el");
let displayComp = document.getElementById("display-complete");
let myItem = [];
let complete = [];


function addItem(){
    if(todoEl.value.length > 0){
        // let last = todoEl.value.length - 4;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(todoEl.value));
        /*li.innerHTML = `<input type="checkbox" onchange="delItem(this)" id="${todoEl.value + last}"> 
                    <label for="${todoEl.value + last}"> 
                    ${todoEl.value} </label>`;
        li.classList = li.id; */
        // li.className = todoEl.value + last;

        displayEl.appendChild(li);
        todoEl.value = "";
        li.setAttribute("onclick", "delItem(this)")

    }else{
        alert("You need to enter an activity!")
    }
}

function delItem(it){
   let st = it.classList.toggle('strike');
   if(st){
    displayComp.innerHTML += `<li> ${it.innerText} </li>`;
   }else{
    it.classList.add("remove");
   }
   return st;  
}


document.getElementById("new-el").addEventListener('click', function(){
    displayEl.innerHTML = "";
})
















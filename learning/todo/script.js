const div_tasks = document.querySelector('#div_tasks')
const add_btn = document.querySelector('#add-img')
const task_input = document.querySelector('#task-input')
const state_btns = document.querySelectorAll('.state-btn')
// const task_delete

let selected_for_update = -1


let tasks = [
    {task_name : "programming", completed : false},
    {task_name : "eting", completed : true},
    {task_name : "playing soccer", completed : false},
    {task_name : "watching tv", completed : true},
    {task_name : "fishing", completed : false},
]
// const tasks = [
   
// ]
add_btn.addEventListener('click', pushTask)

for (let btn of state_btns){
    btn.addEventListener('click', handleClick)
}

console.log("Adrijus".includes("j"));

// function displayCompletedTasks(arr)

function handleClick(e){

    // toggling the active state
    for (let btn of state_btns){
        btn.classList.remove("active")
    }
    e.target.classList.add('active')
    
    // filtering tasks
    if(e.target.innerHTML === "Completed"){
        const completed_tasks = tasks.filter(task =>{
            return task.completed
        })
        displayTasks(completed_tasks)
    }
    else if(e.target.innerHTML === "Pending"){
        const completed_tasks = tasks.filter(task =>{
            return !task.completed
        })
        displayTasks(completed_tasks)
    }else{
        displayTasks(tasks)
    }
}

function pushTask(){
    const input_val = task_input.value
    if(!input_val){
        alert("Cannot add empty task")
        return
    }
    if(tasks.map(task => task.task_name).includes(input_val)){
        alert(input_val+" already exists!")
        return
    }


    if(selected_for_update == -1){
        tasks.push({task_name: input_val, completed: false})
    }else{
        tasks[selected_for_update] = {task_name : input_val , completed : false}
    }
    displayTasks(tasks)
    task_input.value = ""
}

function displayTasks(arr){
    let tasksString = ""
    arr.forEach(task =>{
        tasksString += displayTask(task)
    })
    div_tasks.innerHTML = tasksString
}

function displayTask(task){
    return  `
        <div class="task">
            <input type="checkbox" class="task-checkbox" ${task.completed == true? "checked" : ""}>
            <p class="task-title">${task.task_name}</p>
            <img src="./images/pen.png" class="task-edit" onclick='modify_item(this)'>
            <img src="./images/delete.png" class="task-delete" onclick='remove_item(this)'>
        </div>`
}

let fruits = ["apples","banana","kiwi","watermlelon"]
console.log(fruits.indexOf("bananaa"));

function modify_item(item){
    let selected_one = tasks.find(task => task.task_name == item.parentNode.querySelector(".task-title").innerText)
    let selected_index = tasks.indexOf(selected_one)

    task_input.value = selected_one.task_name
    selected_for_update = selected_index
}

function remove_item(the_rmv_img){
    //the_div.parentNode.remove()
    const ones_to_keep = tasks.filter(task =>{
        return task.task_name !== the_rmv_img.parentNode.querySelector(".task-title").innerText
    })
    console.log(ones_to_keep)
    tasks = ones_to_keep
    
    displayTasks(tasks)
}

displayTasks(tasks)
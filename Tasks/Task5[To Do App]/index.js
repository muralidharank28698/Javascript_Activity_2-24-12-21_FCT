// get the element using query selector...

const $input = document.querySelector('.innercontainer input'); // get the value in input
// console.log($input);    
const $btn = document.querySelector('.innercontainer button'); // get the value in input
// console.log($btn);   
const $todolist = document.querySelector('.todolist');
// console.log($todolist) // get the value in input

//function for getting value from user...
$input.onkeyup = () => {
    let $userdata = $input.value; // get user value..
    if($userdata.trim() != 0) { // user value not only space..
        $btn.classList.add('active'); // if button only enable when user enter some value..
    } else {
        $btn.classList.remove('active'); // otherwise not enable..
    }
    // console.log($userdata);
}
showtask(); // show task fuction calling...

// onclick function...
$btn.onclick  = () => {
    let $userdata = $input.value;
    let getLocalStorage = localStorage.getItem("New Todo"); // get the local storage...
    if(getLocalStorage == null) { // local storage null..
        listArr = []; // empty arr creation
    } else {
        listArr = JSON.parse(getLocalStorage); // json string to object..
    }
    listArr.push($userdata); // add data to listArr
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // object to json string...
    showtask(); // call showtask function...
    $btn.classList.remove('active');
}

// show task function...
function showtask() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    let newlitag = ""; 
    listArr.forEach((element,index) => {
       newlitag += `<li ondblclick = "deletetask(${index})"; > ${element} </li>`; // ondblclick method to delete the task...
    });
    $todolist.innerHTML = newlitag; // add new li tag...
    $input.value = ""; // after data added input field is empty...
}

// delete task function...
function deletetask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); // delete the specific index list...
// after delete update in local storage...
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
}
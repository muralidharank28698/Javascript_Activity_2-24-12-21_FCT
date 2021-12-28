// get the element using query selector...

const $input = document.querySelector('.innercontainer input'); // get the value in input
// console.log($input);    

const $btn = document.querySelector('.innercontainer button'); // get the value in input
// console.log($btn);   

const $todolist = document.querySelector('.todolist');
console.log($todolist) // get the value in input


$input.onkeyup = () => {
    let $userdata = $input.value;
    if($userdata.trim() != 0) {
        $btn.classList.add('active');
    } else {
        $btn.classList.remove('active');
    }
    // console.log($userdata);
}
showtask();

$btn.onclick  = () => {
    let $userdata = $input.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push($userdata);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
    $btn.classList.remove('active');
}

function showtask() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    let newlitag = "";
    listArr.forEach((element,index) => {
       newlitag += `<li ondblclick = "deletetask(${index})"; > ${element} </li>`;
    });
    $todolist.innerHTML = newlitag;
    $input.value = "";
}

function deletetask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showtask();
}
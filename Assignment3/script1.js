let username=document.getElementById("username");
let password=document.getElementById("password");
let confirm=document.getElementById("confirm");
function execute(){
    if(password.value === confirm.value){
            alert("right");
    }
    else{
        alert("wrong");
    }
}
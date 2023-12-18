if (!localStorage.getItem('count')) {
    localStorage.setItem('count', 0);
}
let count=parseInt(localStorage.getItem('count')) ;
const min = document.getElementsByClassName("minus")[0];
const plus = document.getElementsByClassName("plus")[0];
const countSpan = document.getElementsByClassName("count")[0];
if(countSpan){
    countSpan.textContent = count;
}
if(document.getElementById("name"))
{
document.getElementById("name").innerHTML+=localStorage.getItem('name');
    
}
if(document.getElementById("nameUser")){
document.getElementById("nameUser").innerHTML+=localStorage.getItem('name');

}
function change(value) {
    count+=value;
    countSpan.textContent = count;
    localStorage.setItem('count',count)
}

min.addEventListener("click", function () {
    change(-1);
});

plus.addEventListener("click", function () {
    change(1);
});
function getName(){
    let nameUser = document.getElementById("name").value;
    localStorage.setItem('name', nameUser);
}

let div = document.querySelector('#d');
let style = getComputedStyle(div);
console.log(style.margin);

 let input = document.createElement("input");
 let btn = document.createElement("button")
 btn.innerHTML = "Send"
 document.body.appendChild(input);
 document.body.appendChild(btn);
 const check = /\d\d\d-\d\d\d-\d\d-\d\d/;
 const divError = document.getElementById('error')
btn.onclick = function(){
    if(check.test(input.value)){
        document.body.style.background = 'green';
    }
    else{
        divError.innerText = "Некоректно введенний номер телефону, введіть його у вигляді 000-000-00-00"
    }
}
/*
 i
        1. Якщо змінна a дорівнює 10, то виведіть 'Вірно', інакше виведіть 'Неправильно'.
        <br>
        іф переписати у тернарний
        2.У змінній min лежить число від 0 до 59. Визначте, в яку чверть години потрапляє це число
        (У першу, другу, третю або четверту).
        <br>
        Свіч
        3.Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення '1',
        то змінну result запишемо 'зима', якщо має значення '2' – 'весна' тощо.
        Розв'яжіть завдання через switch-case.
        <br>
        4. Використовуючи цикли та умовні конструкції намалюйте ялинку
*/
/*
const a = parseInt(prompt("Введіть число", "10"));


if(a === 10){
    alert("Вірно")
}else{
    alert("Неправильно")
}

a === 10 ? alert("Вірно") : alert("Неправильно");
*/

/*
У змінній min лежить число від 0 до 59. Визначте, в яку чверть години потрапляє це число
        (У першу, другу, третю або четверту).




if( min <= 15 && min > 0){
    document.write("першу")
}else if(min <= 30 && min > 0){
    document.write("другу")
}else if(min <= 45 && min > 0){
    document.write("третю")
}else if (min <= 59 && min > 0){
    document.write("четверту")
}else{
    console.error("Error")
}


const min = parseInt(prompt("input number", "1-60"));

min <= 15 && min > 0 ? document.write("першу") : 
min <= 30 && min > 0 ? document.write("другу") :
min <= 45 && min > 0 ? document.write("третю") : 
min <= 59 && min > 0 ? document.write("четверту") : console.error("Error");
*/
/*
Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення '1',
        то змінну result запишемо 'зима', якщо має значення '2' – 'весна' тощо.
        Розв'яжіть завдання через switch-case.


const data = parseFloat(prompt("Input 1-4", "5"));
let result;

switch (data){
    case 1 : 
    result = "Зима";
    break;
    case 2 : 
    result = "весна"
    break;
    case 4 : 
    result = "Осінь"
    break;
    case 3 : 
    result = "Літо"
    break;
    default : {
        document.body.style.backgroundColor = "tomato"
    }
}


document.write(result ? result : "щось пішло не так")

*/

for(let i = 0; i < 10; i++){
    document.write("<br>1");
    for(let j = 0; j < 10; j++){
        document.write("&nbsp;2")
    }

    
}
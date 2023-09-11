//Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].


const arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);
//console.log(arr1);
//Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.

const arr2 = ['a', 'b', 'c'];
const arr3 = [1, 2, 3];

//console.log(arr2.concat(arr3));

//Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його 
//виведіть на екран рядок 'a+b, c+d'.

const arr4 = ['a', 'b', 'c', 'd'];

//document.write( `${arr4[0]}+${arr4[1]}, ${arr4[2]}+${arr4[3]}` )

//Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.

const arr5 = ['a', 'b', 'c'];

//console.log(arr5.push(1,2,3));

/*
Дан багатовимірний масив arr:
            
                var arr = [
                    ['блакитний', 'червоний', 'зелений'],
                    ['blue', 'red', 'green'],
                ];
            
        
Виведіть за його допомогою слово 'блакитний' 'blue' .
*/

var arr = [
    ['блакитний', 'червоний', 'зелений'],
    ['blue', 'red', 'green'],
];

//document.write(arr[0][0], arr[1][0])

/*
Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою.
               
                var vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];
    
                // Ваш код

                
                document.write(str1); // "Капуста, Ріпа, Редиска, Морквина" */

const arr6 = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];

//console.log( arr6.join(","))

/*
Створити програму реєстратор нового учасника.  Ми маємо натиснути на кнопку додати нового студента, при натиску на кнопку у вас має з'явитись вікно запиту інформації якe приймає дані у вигляді "Імя.Прізвище.Мова програмування". Виводити кожного доданого студента на сторінку у таблицю, у футері таблиці має бути поле яке рахуватиме загальну кількість студентів.
*/

const btn = document.getElementById("btn"),
    tbody = document.getElementById("tbody"),
    count = document.getElementById("count");

let userData,
    counter = 0;


count.innerHTML = counter

btn.onclick = function () {
    userData = prompt("Введіть дані у форматі", "Імя Прізвище Мова програмування");
    if (userData === null) return;
    userData = userData.split(" ");
    if (userData.length !== 3) return;
    const tr = `
<tr>
<td>${counter + 1}</td>
<td>${userData[0]}</td>
<td>${userData[1]}</td>
<td>${userData[2]}</td>
</tr>
  `
    tbody.innerHTML += tr;
    counter++;

    count.innerHTML = counter
}

//Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.

const arr7 = [1, 2, 3];

arr7.unshift(4,5,6)

const arr8 = ['Привіт, ', 'світ', '!']

let str = "";

let counter1 = 0

while(counter1 < arr8.length) {

    str += arr8[counter1]
    counter1++
   
}


/*Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив на ту кількість елементів, яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.*/

const num = Math.floor(Math.random()*100),
arr9  = [];

for(let i = 0; i < num; i++){
    if(i % 2 === 0){
        document.write(`<span class="blue">${i}</span>`)
    }else{
        document.write(`<p>${i}</p>`)
    }
    arr9[i] = i
}
//Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.





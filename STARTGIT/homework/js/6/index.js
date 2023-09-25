function human(name, surname, age, email){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
}

let J = new human ("J", "Dodger", 20, "DodgerJ@gmail.com");
let Q = new human ("Q", "Dodger", 18, "DodgerQ@gmail.com");
let L = new human ("L", "Dodger", 19, "DodgerL@gmail.com");
let N = new human ("N", "Dodger", 17, "DodgerN@gmail.com");
let V = new human ("V", "Dodger", 21, "DodgerV@gmail.com");

let people = [J, Q, L, N, V];

for (let i = 0; i < people.length; i++) {
    document.write(people[i].name + " | " + people[i].surname + " | " + people[i].age + " | " + people[i].email + "<br />");
}

people.sort(function(a,b){
    return a.age - b.age;
})
console.log(people);
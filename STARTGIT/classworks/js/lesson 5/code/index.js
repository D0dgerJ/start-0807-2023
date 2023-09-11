

const tbody = document.getElementById("tbody");

document.getElementById("h1").innerHTML = `Курс на сьогодні ${data.date} від банку ${data.bank}`

//Array.isArray(data.exchangeRate) ? console.log("+") : console.error("-");

data.exchangeRate.forEach(function (el, index) {
    const str = `<tr><td>${index+1}</td><td>${el.currency}</td><td>${el.purchaseRate ? el.purchaseRate.toFixed(2) : "-"}</td><td>${el.saleRate? el.saleRate.toFixed(2) : "-" }</td></tr>`
   show(str)
})

function show (arg) {
    tbody.innerHTML += arg
}
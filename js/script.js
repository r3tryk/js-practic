let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате", "yyyy-mm-dd");

console.log(money, time);


let first = prompt("Введите обязательную статью расходов в этом месяце", "")
let ssecond = prompt("Во сколько это обойдется?", "")

let obj = {
    
}

let appDate = {
    cache : money,
    timeDate : time,
    expenses : {
        a : 'first',
        b : 'second', 
    },
    optionalExpenses : {},
    income : [],
}

console.log(appDate);
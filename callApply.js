const normalPerson = {
    firstName: 'Habu',
    lastName: 'Mia',
    salary: 20000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tax) {
        this.salary = this.salary - amount - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Jamal',
    salary: 30000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Kamal',
    salary: 15000
}
// const billOfHero = normalPerson.chargeBill.bind(heroPerson);
// billOfHero(5000);
// console.log(heroPerson.salary);
// normalPerson.chargeBill(2000);
// console.log(normalPerson.salary);

//bind = ekta object er method ke jokhon onno arekta object er method hisebe use korte hoy tokhon bind er dorkar hoy..

// const billOfHero = normalPerson.chargeBill.call(heroPerson,5000,2000);
// const billofFrndly = normalPerson.chargeBill.call(friendlyPerson, 3000, 1000);
const billOfHero = normalPerson.chargeBill.apply(heroPerson, [4500, 500]);
const billofFrndly = normalPerson.chargeBill.apply(friendlyPerson, [2000, 1000]);
console.log(billOfHero);
console.log(billofFrndly);
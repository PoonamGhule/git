'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Monika Gosavi',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1213,
};

const account2 = {
    owner: 'Poonam Ghule',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 1314,
};

const account3 = {
    owner: 'Pratiksha Kharade', // stw
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 1415,
};

const account4 = {
    owner: 'Priti Raut', // ss
    movements: [430, 1000, 700, 50, 90, 56, 66],
    interestRate: 1,
    pin: 1516,
};
const account5 = {
    owner: 'Pooja Ghule', // ss
    movements: [430, 1000, 700, 50, 90.50, -69, -33],
    interestRate: 1,
    pin: 1617,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

function updateMovements(m) {
    //console.log(m)
    m.forEach(function (el, index) {
        let textvalue = el > 0 ? "deposit" : "withdrawal"
        let html = `<div class="movements__row">
    <div class="movements__type movements__type--${textvalue}">${index + 1} ${textvalue}</div>
    <div class="movements__value">${el}€</div>`
        containerMovements.insertAdjacentHTML("beforeend", html)
    })
}

function calculatesummary(){
    
}




//user create
function createusername(mov) {
    mov.forEach(function (el) {
        el.username = el.owner.split(' ').map(function (word) {
            return word[0]
        }).join('').toLowerCase()
    })
}
createusername(accounts)
console.log(accounts)

//current account
let currentaccount;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault()
    let ownername = inputLoginUsername.value
    let ownerpin = inputLoginPin.value

    currentaccount = accounts.find(function (el) {
        return el.username == ownername && el.pin == ownerpin
    })
    console.log(currentaccount)
    containerApp.style.opacity = "100"
    inputLoginUsername.value = ""
    inputLoginPin.value = ""
    labelWelcome.textContent = `Welcome ${currentaccount.owner.split(' ')[0]} !`
    updateMovements(currentaccount.movements)
})






let pig = {
    balance: 100
};

const depositButton = document.getElementById('depositButton');
const withdrawButton = document.getElementById('withdrawButton');
const balanceButton = document.getElementById('balanceButton');
const royalPig = document.getElementById('royalPig');
const royalAudio = new Audio('kaching.mp3');
const farmPigs = new Audio('farmpigs.mp3');

console.log(royalPig);

balanceButton.textContent = "$" + pig.balance.toFixed(2);

depositButton.addEventListener('click', function deposit() {
    let depositAmt = prompt('How much would you like to deposit?');
    if(depositAmt === null) {
        return;
    } else if (isNaN(depositAmt)) {
        alert("Please enter an actual number.");
        deposit();
    } else {
        depositAmt = parseFloat(depositAmt);
        pig.balance += depositAmt;
        balanceButton.textContent = "$" + pig.balance.toFixed(2);
        farmPigs.play();
    }
});

withdrawButton.addEventListener('click', function withdraw() {
    let withdrawAmt = prompt('How much would you like to withdraw?');
    if(withdrawAmt === null) {
        return;
    }else if(pig.balance < parseFloat(withdrawAmt)) {
        return alert('Sorry your balance isn\'t large enough to withdraw that amount.');
    } else if (isNaN(withdrawAmt)) {
        alert('Please enter an actual number.');
        withdraw();
    } else {
        withdrawAmt = parseFloat(withdrawAmt);
        pig.balance -= withdrawAmt;
        balanceButton.textContent = "$" + pig.balance.toFixed(2);
        farmPigs.play();
    }
    
});

royalPig.addEventListener('click', function makeRandomNumber(){
    royalAudio.play();
    let myNumber = Math.floor(Math.random()*101);
    pig.balance += myNumber;
    balanceButton.textContent = "$" + pig.balance.toFixed(2);
    
});
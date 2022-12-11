
function moneyBox() {
    let saveCoins = 0

    function countCoins(coins) {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}

const myMoneyBox = moneyBox()

console.log(myMoneyBox(5))
console.log(myMoneyBox(5))
console.log(myMoneyBox(5))

const anaMoneyBox = moneyBox()

console.log(anaMoneyBox(10))
console.log(anaMoneyBox(10))
console.log(anaMoneyBox(10))



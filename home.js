const validPin = 1234;
// Add money
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const bank = document.getElementById('bank')
        const accountNumber = document.getElementById('account-number').value
        const addMoney = parseInt(document.getElementById('add-money').value)
        const addPin = parseInt(document.getElementById('add-pin').value)
        // console.log(bank, accountNumber, addMoney, addPin)
        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
        // console.log(availableBalance)

        if (accountNumber.length < 11) {
            alert('Enter a valid account number')
            return;
        }
        if (validPin !== addPin) {
            alert('Enter a valid pin')
            return;
        }

        const newAvailableBalance = addMoney + availableBalance
        document.getElementById('available-balance').innerText = newAvailableBalance

    })


//withdraw 

document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const AvailableBalance = parseInt(document.getElementById('available-balance').innerText)
    // console.log(addAmount, AvailableBalance);

    const agentNumber = document.getElementById('agent-number').value
    const pinNumber = parseInt(document.getElementById('pin-number').value)
    if (agentNumber.length < 11) {
        alert('Enter Valid Agent Number')
        return;
    }
    if (validPin !== pinNumber) {
        alert('Enter a valid pin')
        return;
    }

    const totalNewBalance = AvailableBalance - addAmount;
    document.getElementById('available-balance').innerText = totalNewBalance;
})





// toggle ing 

document.getElementById('add-m-btn').addEventListener('click', function () {
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('transfer-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('bonus-section').style.display = 'none'
})

document.getElementById('cashout-btn').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'block';
    document.getElementById('bonus-section').style.display = 'none'
})

document.getElementById('Transfer')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('transfer-section').style.display = 'block';
        document.getElementById('bonus-section').style.display = 'none'
    })

document.getElementById('get-bonus')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('transfer-section').style.display = 'none';
        document.getElementById('bonus-section').style.display = 'block'
    })
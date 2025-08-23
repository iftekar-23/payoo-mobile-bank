const validPin = 1234;
// functions to get input value
function getInputValueNumber(id){
    const getInputValueNumber = parseInt(document.getElementById(id).value)
    return getInputValueNumber;
}

function getInputValue (id){
    const getInputValue = document.getElementById(id).value
    return getInputValue;
}

// functions to get inner text

function getInnerText (id){
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    return availableBalance;
}

// function to set inner text
function setInnerText (value){
    document.getElementById('available-balance').innerText = value
}

// Add money
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const bank = document.getElementById('bank')
        const accountNumber = getInputValue('account-number')
        const addMoney = getInputValueNumber('add-money')
        const addPin = getInputValueNumber('add-pin')
        const availableBalance = getInnerText('available-balance')
        console.log(bank, accountNumber, addMoney, addPin, availableBalance)
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
        setInnerText(newAvailableBalance)

    })


//withdraw 

document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const addAmount = getInputValueNumber('add-amount')
    const AvailableBalance = getInnerText('available-balance')
    // console.log(addAmount, AvailableBalance);

    const agentNumber = getInputValue('agent-number')
    const pinNumber = getInputValueNumber('pin-number')
    if (agentNumber.length < 11) {
        alert('Enter Valid Agent Number')
        return;
    }
    if (validPin !== pinNumber) {
        alert('Enter a valid pin')
        return;
    }

    const totalNewBalance = AvailableBalance - addAmount;
    setInnerText(totalNewBalance);
})





// toggled section 

document.getElementById('add-m-btn').addEventListener('click', function () {
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none'
    document.getElementById('pay-bill-section').style.display = 'none'
    document.getElementById('add-money-section').style.display = 'block';
})

document.getElementById('cashout-btn').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none'
    document.getElementById('pay-bill-section').style.display = 'none'
    document.getElementById('cashout-section').style.display = 'block';
})

document.getElementById('Transfer')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('bonus-section').style.display = 'none'
        document.getElementById('pay-bill-section').style.display = 'none'
        document.getElementById('transfer-section').style.display = 'block';
    })

document.getElementById('get-bonus')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('transfer-section').style.display = 'none';
        document.getElementById('pay-bill-section').style.display = 'none'
        document.getElementById('bonus-section').style.display = 'block'
    })

document.getElementById('pay-bill')
    .addEventListener('click', function () {
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('transfer-section').style.display = 'none';
        document.getElementById('bonus-section').style.display = 'none';
        document.getElementById('pay-bill-section').style.display = 'block';
    })

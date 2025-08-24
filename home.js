const validPin = 1234;

const transactionsDetails = [];

// functions to get input value
function getInputValueNumber(id) {
    const getInputValueNumber = parseInt(document.getElementById(id).value)
    return getInputValueNumber;
}

function getInputValue(id) {
    const getInputValue = document.getElementById(id).value
    return getInputValue;
}

// functions to get inner text

function getInnerText(id) {
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    return availableBalance;
}

// function to set inner text
function setInnerText(value) {
    document.getElementById('available-balance').innerText = value
}

// function for toggle

function handleToggle(id) {
    const forms = document.getElementsByClassName('form')

    for (const form of forms) {
        form.style.display = 'none';
    }

    document.getElementById(id).style.display = 'block';
}
// function for btn toggle
function handleToggleBtn(id) {
    const formBtn = document.getElementsByClassName('form-btn')

    for (const btn of formBtn) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-200')
    }
    document.getElementById(id).classList.remove('border-gray-200')
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
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
        // console.log(bank, accountNumber, addMoney, addPin, availableBalance)
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

        const data = {
            name: 'Add money',
            date: new Date().toLocaleDateString()
        }

        transactionsDetails.push(data)
        // console.log(transactionsDetails)
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

    const data = {
        name: 'Cash-out',
        date: new Date().toLocaleDateString()
    }

    transactionsDetails.push(data)
    // console.log(transactionsDetails)


})




document.getElementById('transactions-btn').addEventListener('click', function () {
    // console.log('transactions-btn clicked');
    const transactionsSection = document.getElementById('trans-s');
    transactionsSection.innerText = ''

    for (const data of transactionsDetails) {
        const div = document.createElement('div');
        div.innerHTML = `
         <div class="bg-white mt-3 rounded-xl flex justify-between items-center">
                    <div class="flex items-center p-3 ">
                        <div>
                            <img src="./assets/wallet1.png" class="mx-auto border-2 p-3 rounded-full bg-[#f4f5f7]"
                                alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>

                    </div>
                    <i class="fa-solid fa-ellipsis-vertical mr-2"></i>
                </div>
        `
        transactionsSection.appendChild(div)
        // console.log(transactionsDetails)
    }
})



// toggled section 

document.getElementById('add-m-btn').addEventListener('click', function () {
    // const forms = document.getElementsByClassName('form')

    // for(const form of forms){
    //     form.style.display = 'none';
    // }

    // document.getElementById('add-money-section').style.display = 'block';
    handleToggle('add-money-section')
    handleToggleBtn('add-m-btn')
    // document.getElementById('cashout-section').style.display = 'none';
    // document.getElementById('transfer-section').style.display = 'none';
    // document.getElementById('bonus-section').style.display = 'none'
    // document.getElementById('pay-bill-section').style.display = 'none'
    // document.getElementById('add-money-section').style.display = 'block';
})

document.getElementById('cashout-btn').addEventListener('click', function () {
    handleToggle('cashout-section')
    handleToggleBtn('cashout-btn')
    // document.getElementById('add-money-section').style.display = 'none';
    // document.getElementById('transfer-section').style.display = 'none';
    // document.getElementById('bonus-section').style.display = 'none'
    // document.getElementById('pay-bill-section').style.display = 'none'
    // document.getElementById('cashout-section').style.display = 'block';
})

document.getElementById('Transfer')
    .addEventListener('click', function () {
        handleToggle('transfer-section')
        handleToggleBtn('Transfer')
        // document.getElementById('add-money-section').style.display = 'none';
        // document.getElementById('cashout-section').style.display = 'none';
        // document.getElementById('bonus-section').style.display = 'none'
        // document.getElementById('pay-bill-section').style.display = 'none'
        // document.getElementById('transfer-section').style.display = 'block';
    })

document.getElementById('get-bonus')
    .addEventListener('click', function () {
        handleToggle('bonus-section')
        handleToggleBtn('get-bonus')
        // document.getElementById('add-money-section').style.display = 'none';
        // document.getElementById('cashout-section').style.display = 'none';
        // document.getElementById('transfer-section').style.display = 'none';
        // document.getElementById('pay-bill-section').style.display = 'none'
        // document.getElementById('bonus-section').style.display = 'block'
    })

document.getElementById('pay-bill')
    .addEventListener('click', function () {
        handleToggle('pay-bill-section')
        handleToggleBtn('pay-bill')
        // document.getElementById('add-money-section').style.display = 'none';
        // document.getElementById('cashout-section').style.display = 'none';
        // document.getElementById('transfer-section').style.display = 'none';
        // document.getElementById('bonus-section').style.display = 'none';
        // document.getElementById('pay-bill-section').style.display = 'block';
    })
document.getElementById('transactions-btn').addEventListener('click', function () {
    handleToggle('transactions-section')
    handleToggleBtn('transactions-btn')
})

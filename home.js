const validPin = 1234;

document.getElementById('add-money-btn')
.addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank')
    const accountNumber = document.getElementById('account-number').value
    const addMoney = parseInt(document.getElementById('add-money').value)
    const addPin = parseInt(document.getElementById('add-pin').value)
    // console.log(bank, accountNumber, addMoney, addPin)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    // console.log(availableBalance)

    if(accountNumber.length < 11){
        alert('Enter a valid account number')
        return;
    }
    if( validPin !== addPin){
        alert('Enter a valid pin')
        return;
    }

    const newAvailableBalance = addMoney + availableBalance
    document.getElementById('available-balance').innerText = newAvailableBalance
    
})
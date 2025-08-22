document.getElementById('login-btn')
.addEventListener('click', function(e){
    e.preventDefault()
    
    const mobileNumber = 12345678910
    const pin = 1234

    const inputNumber = document.getElementById('input-number').value
    const convertedInputNumber = parseInt(inputNumber);

    const pinNumber = document.getElementById('input-pin').value
    const convertedPinNumber = parseInt(pinNumber)

    // console.log(convertedInputNumber, convertedPinNumber)
    if( convertedInputNumber === mobileNumber && convertedPinNumber === pin){
        window.location.href="./home.html"
    }
    else{
        alert('Your Input Value Invalid')
    }
})
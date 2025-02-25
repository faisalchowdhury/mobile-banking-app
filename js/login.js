
document.getElementById('login-btn').addEventListener('click' , function(p){
    p.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pinNumber);


    if(accountNumber.length != 12 || isNaN(accountNumber) ){
      alert('invalid account number');
    }else{


        if(pinNumber === 1234){
            console.log(pinNumber)
        }else {
           window.location.href = "dashboard.html"
        }
        

    }
    
    
})
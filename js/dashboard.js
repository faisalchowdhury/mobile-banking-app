// add Money
document.getElementById('add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const accountNumber = document.getElementById('add-money-account-number').value;
    const pinNumber = document.getElementById('add-money-pin-number').value;
    const convertedPin = parseInt(pinNumber)

    const amount = document.getElementById('add-monet-amount').value;
    const convertedAmount = parseFloat(amount)
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (accountNumber.length == 12) {

        if (convertedPin === 1234) {


            if(convertedAmount){
              const sumBalance = convertedMainBalance + convertedAmount;

              document.getElementById('main-balance').innerText = sumBalance
            }


        }

    } else {
        alert('Invalid account number');
    }
});
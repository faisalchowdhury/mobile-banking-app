



//Action movement
document.getElementById('addmoney').style.display = "none"
    document.getElementById('cashout').style.display = "block"



document.getElementById('add-money-box').addEventListener('click',function(){
    document.getElementById('add-money-box').classList.add('bg-white');
    document.getElementById('cashout-box').classList.remove('bg-white');

    document.getElementById('addmoney').style.display = "block"
    document.getElementById('cashout').style.display = "none"
})


document.getElementById('cashout-box').addEventListener('click' , function(){

    document.getElementById('cashout-box').classList.add('bg-white');
    document.getElementById('add-money-box').classList.remove('bg-white');


    document.getElementById('addmoney').style.display = "none"
    document.getElementById('cashout').style.display = "block"


})
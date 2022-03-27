function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositField = depositInput.value;
    const depositFieldAmount = parseFloat(depositField);
    
    //    deposit value clear

    depositInput.value = '';
    return depositFieldAmount;



}

function updateTotalField(totalFieldId,depositFieldAmount){
    const totalDeposit = document.getElementById(totalFieldId);
    const totalDepositText = totalDeposit.innerText;
    const totalDepositAmount = parseFloat(totalDepositText);
    totalDeposit.innerText = totalDepositAmount + depositFieldAmount;



}


function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalAmountBalance = parseFloat(totalBalanceText);
    return totalAmountBalance;



}

function updateBalance(depositFieldAmount,isAdd){
    const totalBalance = document.getElementById('balance-total');
    // const totalBalanceText = totalBalance.innerText;
    // const totalAmountBalance = parseFloat(totalBalanceText);
    const totalAmountBalance = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = totalAmountBalance + depositFieldAmount;

    }
    else{
        totalBalance.innerText = totalAmountBalance - depositFieldAmount;

    }


   


}
 








document.getElementById('deposit-btn').addEventListener('click',function(){
    //    const depositInput = document.getElementById('deposit-field');
    //    const depositField = depositInput.value;
    //    const depositFieldAmount = parseFloat(depositField);
    const depositFieldAmount = getInputValue('deposit-field');
    if(depositFieldAmount>0){
        updateTotalField('total-deposit',depositFieldAmount);
    updateBalance(depositFieldAmount,true);

    }
    
    
          
          

    //    const totalDeposit = document.getElementById('total-deposit');
    //    const totalDepositText = totalDeposit.innerText;
    //    const totalDepositAmount = parseFloat(totalDepositText);
    //    totalDeposit.innerText = totalDepositAmount + depositFieldAmount;
         

    //    const totalBalance = document.getElementById('balance-total');
    //    const totalBalanceText = totalBalance.innerText;
    //    const totalAmountBalance = parseFloat(totalBalanceText);

    //    totalBalance.innerText = totalAmountBalance + depositFieldAmount;
          

 


    // //    deposit value clear

    // depositInput.value = '';
       
       
});


document.getElementById('withdraw-btn').addEventListener('click',function(){
    //  const withdrawInput = document.getElementById('withdraw-input');
    //  const withdrawField = withdrawInput.value;
    //  const withdrawAmount = parseFloat(withdrawField);
        const withdrawAmount = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
        if(withdrawAmount>0 && withdrawAmount < currentBalance){
            updateTotalField('total-withdraw',withdrawAmount);
            updateBalance(withdrawAmount,false);

        }

        if(withdrawAmount>=currentBalance){
            alert('this is not possible because your current balance is must be bigger than your withdraw amount');
        }
       

    //  const totalWithdraw = document.getElementById('total-withdraw');
    //  const totalWithdrawText = totalWithdraw.innerText;
    //  const totalWithdrawAmount = parseFloat(totalWithdrawText);
    //  totalWithdraw.innerText = totalWithdrawAmount + withdrawAmount;

    //  const totalBalance = document.getElementById('balance-total');
    //    const totalBalanceText = totalBalance.innerText;
    //    const totalAmountBalance = parseFloat(totalBalanceText);

    //    totalBalance.innerText = totalAmountBalance - withdrawAmount;
    // updateTotalField('total-withdraw',withdrawAmount);
    // updateBalance(withdrawAmount,false);
    


    //  withdraw value clear

    // withdrawInput.value = '';
      
       


    

});
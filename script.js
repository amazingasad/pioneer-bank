// LOGIN BUTTON EVENT HANDLER
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
})
// DEPOSIT BUTTON EVENT HANDLER
const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);
    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);
    document.getElementById("deposit-amount").value = ""
})

// WITHDRAW BUTTON EVENT HANDLER
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    const currentWithdraw = document.getElementById("current-withdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance)
    const totalWithdraw = currentBalanceNumber - withdrawAmountNumber;
    document.getElementById("current-withdraw").innerText = withdrawAmountNumber + currentWithdrawNumber;
    document.getElementById("current-balance").innerText = totalWithdraw;
    document.getElementById("withdraw-amount").value = "";

})


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
// LOGIN BUTTON EVENT HANDLER
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    const emailInfo = document.getElementById("email").value;
    const passwordInfo = document.getElementById("password").value;
    if(emailInfo == "me@in-asad.com" && passwordInfo == "also"){
        transactionArea.style.display = "block";
        alert("Login Successful")
    }
    else{
        alert("You have entered wrong password")
        loginArea.style.display = "block";
    }
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
    const withdrawAmountNumber = getInputNumber("withdraw-amount");
    updateSpanText("current-withdraw", withdrawAmountNumber);
    updateSpanText("current-balance", -1 * withdrawAmountNumber);
    document.getElementById("withdraw-amount").value = "";

})
function getInputNumber(id){
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}
function updateSpanText(id, amount){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = amount + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
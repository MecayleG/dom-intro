// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
let billText = TextBill();
const billTypeText = document.querySelector(".billTypeText");
const textTotalAddBtn = document.querySelector(".addToBillBtn");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");


function textBillTotal(){
    var billsType = billTypeText.value;
    billText.totalTextBill(billsType)
    callsTotalElem.innerHTML = billText.getTotalForCalls();;
    smsTotalElem.innerHTML = billText.getTotalForSms();
    totalCostElem.innerHTML = billText.overallTotal();;
    totalCostElem.classList.add(billText.totalColor())

}


textTotalAddBtn.addEventListener('click', textBillTotal);


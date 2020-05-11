// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.


//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const billSettings = BillWithSettings();
const callCost = document.querySelector(".callCostSetting");
const smsCost = document.querySelector(".smsCostSetting");
const warningLevel = document.querySelector(".warningLevelSetting ");
const criticalLevel = document.querySelector(".criticalLevelSetting");
const updateSettingsBtn = document.querySelector(".updateSettings");

const radioTypeItem = document.querySelector(".billItemTypeWithSettings");
const settingsAddBtn = document.querySelector(".settingsAdd");


const radioCallTotalSettings = document.querySelector(".callTotalSettings");
const radioSmsTotalSettings = document.querySelector(".smsTotalSettings");
const radioTotalSettings = document.querySelector(".totalSettings");


 function forColor(){
 		radioTotalSettings.classList.remove("danger");
    	radioTotalSettings.classList.remove("warning");
    	radioTotalSettings.classList.add(billSettings.theColors())
 }

 function settingsTotal(){
  billSettings.setCallCost(callCost.value);
  billSettings.setSmsCost(smsCost.value);
  billSettings.setWarningLevel(warningLevel.value);
  billSettings.setCriticalLevel(criticalLevel.value);
  forColor();
 }
function callingAll(){

	var checkedRadioBtnTwo = document.querySelector("input[name='billItemTypeWithSettings']:checked");
	var radioItemType = checkedRadioBtnTwo.value;
	billSettings.forSettingsBill(radioItemType);
	radioTotalSettings.innerHTML = billSettings.getTotalCost();
	radioCallTotalSettings.innerHTML = billSettings.getCallCost();
	radioSmsTotalSettings.innerHTML = billSettings.getSmsCost();
	forColor();
}
updateSettingsBtn.addEventListener('click', settingsTotal);
settingsAddBtn.addEventListener('click', callingAll);






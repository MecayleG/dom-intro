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

var totalForCalls = 0;
var totalForSms = 0;
var allTotals = 0;
var callCostNew = 0;
var smsCostNew = 0;
var warningLevelNew = 0;
var criticalLevelNew = 0;


function firstAdd(billItemTypeTwo){
	
	if(billItemTypeTwo === 'call'){
		if(allTotals < criticalLevelNew){
		totalForCalls += callCostNew;
	
	}
	}

	else if (billItemTypeTwo === 'sms'){
		if(allTotals < criticalLevelNew){
		totalForSms += smsCostNew;
	
	}	

	}

	var forDecimals = totalForSms + totalForCalls;
	
	return forDecimals;
	}


 function forColor(allTotalsTwo){
 	const colorTotals = Number(allTotalsTwo);
 		radioTotalSettings.classList.remove("danger");
    	radioTotalSettings.classList.remove("warning");

	if(colorTotals >= warningLevelNew  && colorTotals < criticalLevelNew){
    	radioTotalSettings.classList.add("warning");
    } else if (colorTotals >= criticalLevelNew) {
		radioTotalSettings.classList.add("danger");
		allTotals = criticalLevelNew
    }
    else if(colorTotals < warningLevelNew && colorTotals < criticalLevelNew){
    	radioTotalSettings.classList.remove("danger");
    	radioTotalSettings.classList.remove("warning");
    }
 }

 function settingsTotal(){
  callCostNew = Number(callCost.value);
  smsCostNew = Number(smsCost.value);
  warningLevelNew = Number(warningLevel.value);
  criticalLevelNew = Number(criticalLevel.value);
  forColor(allTotals);
 }
function callingAll(){
	// alert('UPDATED')
	// alert(totalForCalls)
	// alert(totalForSms)
	// alert(allTotals)
	var checkedRadioBtnTwo = document.querySelector("input[name='billItemTypeWithSettings']:checked");
	var radioItemType = checkedRadioBtnTwo.value;
	var whateverName = firstAdd(radioItemType);
	forColor(whateverName);
	radioTotalSettings.innerHTML = whateverName.toFixed(2);
	radioCallTotalSettings.innerHTML = totalForCalls.toFixed(2);
	radioSmsTotalSettings.innerHTML = totalForSms.toFixed(2);
}
updateSettingsBtn.addEventListener('click', settingsTotal);
settingsAddBtn.addEventListener('click', callingAll);






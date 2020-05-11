function TextBill(){
	var callIs = 2.75;
	var smsIs = 0.75;
	var exceedLimitOne = 30;
	var exceedLimitTwo = 50;
	
	var totalCalls = 0;
	var totalSms = 0;

	function totalTextBill(billsType){
		var items = billsType.split(",");

		for(var i=0;i<items.length;i++){
			var allItems = items[i].trim();
			if(allItems === "call"){
				billText.wordCall();
			}
			else if(allItems === "sms"){
				billText.wordSms();
			}
		}
	}

	// function aCall(costForCall){
	// 	callIs = costForCall;
	// }
	// function getACall(){
	// 	return callIs;
	// }
	// function aSms(costForSms){
	// 	smsIs = costForSms;
	// }
	// function getASms(){
	// 	return smsIs;
	// }
	function limitOne(orange30){
		exceedLimitOne = orange30;
	}
	function getLimitOne(){
		return exceedLimitOne;
	}
	function limitTwo(red50){
		exceedLimitTwo = red50;
	}
	function getLimitTwo(){
		return exceedLimitTwo;
	}
	function wordCall(){
		totalCalls += callIs;
	}

	function getTotalForCalls(){
		return totalCalls;
	}
	function wordSms(){
		totalSms += smsIs;
	}
	function getTotalForSms(){
		return totalSms;
	}
	function overallTotal(){
		return (totalCalls + totalSms).toFixed(2);
	}
	function firstColors(){
		if(overallTotal()>getLimitTwo()){
			return "red";
		}
		else if(overallTotal()>getLimitOne()){
			return "orange";
		}
	}
	function totalColor(){
		if(billText.overallTotal() >= 50){
			return "danger";
		}
		else if(billText.overallTotal() >= 30){
			return "warning";
		}
	}
	
	return{
		totalTextBill,
		limitOne,
		getLimitOne,
		limitTwo,
		getLimitTwo,
		overallTotal,
		wordCall,
		wordSms,
		getTotalForCalls,
		getTotalForSms,
		firstColors,
		totalColor
		}
}
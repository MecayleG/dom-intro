function TextBill(){
	var callIs = 2.75;
	var smsIs = 0.75;
	var exceedLimitOne = 30;
	var exceedLimitTwo = 50;
	
	var totalCalls = 0;
	var totalSms = 0;

	function aCall(costForCall){
		callIs = costForCall;
	}
	function getACall(){
		return callIs;
	}
	function aSms(costForSms){
		smsIs = costForSms;
	}
	function getASms(){
		return smsIs;
	}
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
	function overallTotal(){
		return totalCalls + totalSms;
	}
	function getTotalForCalls(){
		return totalCalls;
	}
	function getTotalForSms(){
		return totalSms;
	}
	function wordSms(){
		totalSms += smsIs;
	}
	function totalColor(){
		if(overallTotal() >= getLimitTwo()){
			return "red"
		}
		if(overallTotal() >= getLimitOne()){
			return "orange"
		}
	}
	
	return{
		aCall,
		aSms,
		getACall,
		getASms,
		limitOne,
		getLimitOne,
		limitTwo,
		getLimitTwo,
		overallTotal,
		wordCall,
		wordSms,
		getTotalForCalls,
		getTotalForSms,
		totalColor
		}
}
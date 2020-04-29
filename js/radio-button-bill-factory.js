function ButtonBill(){
	var aCallCosts = 2.75;
	var aSmsCosts = 0.75;
	var orangeLevel = 30;
	var redLevel = 50;

	var allCallTotal = 0;
	var allSmsTotal = 0;

	function forACall(){
		return aCallCosts;
	}
	function forASms(){
		return aSmsCosts;
	}
	function theOrangeLevel(){
		return orangeLevel;
	}
	function theRedLevel(){
		return redLevel;
	}
	function callButton(){
		allCallTotal += aCallCosts;
	}
	function getCallButton(){
		return allCallTotal;
	}
	function smsButton(){
		allSmsTotal += aSmsCosts;
	}
	function getSmsButton(){
		return allSmsTotal;
	}
	function totalForAll(){
		return allCallTotal + allSmsTotal;
	}
	function colorChange(){
		if(totalForAll() >= theRedLevel()){
			return "red"
		}
		if(totalForAll() >= theOrangeLevel()){
			return"orange"
		}
	}
	return {
		forACall,
		forASms,
		theOrangeLevel,
		theRedLevel,
		callButton,
		getCallButton,
		smsButton,
		getSmsButton,
		totalForAll,
		colorChange
	}
}
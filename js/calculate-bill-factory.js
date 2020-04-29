function CalculateBill(){
	var costForCall = 2.75;
	var costForSms = 0.75;
	var exceed20 = 20;
	var exceed30 = 30;
	var callsTotal = 0;
	var smsTotal = 0;

	function setTheCallCost(callPrice){
		costForCall = callPrice;

	}
	function getTheCallCost(){
		return costForCall;
	}
	function setTheSmsCost(smsPrice){
		costForSms = smsPrice;
	}
	function getTheSmsCost(){
		return costForSms;
	}
	function setTotalFor20(orange){
		exceed20 = orange;
	}
	function getTotalFor20(){
		return exceed20;
	}
	function setTotalFor30(red){
		exceed30 = red;
	}
	function getTotalFor30(){
		return exceed30;
	}
	function callString(){
		callsTotal += costForCall;
	}
	function mainTotal(){
		return callsTotal + smsTotal;
	}
	function getCallsTotal(){
		return callsTotal;
	}
	function getSmsTotal(){
		return smsTotal;
	}
	function smsString(){
		smsTotal += costForSms;
	}
	function colorForTotal(){

		if(mainTotal() >= getTotalFor30()) {
			return "red"
		}
		if(mainTotal() >= getTotalFor20()){
			return "orange"
		}
	}

	return {
		setTheCallCost,
		getTheCallCost,
		setTheSmsCost,
		getTheSmsCost,
		setTotalFor20,
		getTotalFor20,
		setTotalFor30,
		getTotalFor30,
		mainTotal,
		callString,
		smsString,
		getCallsTotal,
		getSmsTotal,
		colorForTotal
	}

}
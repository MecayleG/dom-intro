describe("the calculate bill factory function", function(){

	it("should determine the call cost", function(){
		let firstWidget = CalculateBill();
		firstWidget.setTheCallCost(2.75);
		assert.equal(2.75, firstWidget.getTheCallCost());
	});
	it("should determine the sms cost", function(){
		let firstWidget = CalculateBill();
		firstWidget.setTheSmsCost(0.75);
		assert.equal(0.75, firstWidget.getTheSmsCost());
	});
	it("should determine the sms and call cost", function(){
		let firstWidget = CalculateBill();

		firstWidget.setTheSmsCost(0.75);
		firstWidget.setTheCallCost(2.75);
		assert.equal(0.75, firstWidget.getTheSmsCost());
		assert.equal(2.75, firstWidget.getTheCallCost());
	});
	it("if total exceeds 20 it should be orange", function(){
		let firstWidget = CalculateBill();

		firstWidget.setTotalFor20(20);
		
		assert.equal(20, firstWidget.getTotalFor20());
	});
	it("if total exceeds 30 it should be red", function(){
		let firstWidget = CalculateBill();

		firstWidget.setTotalFor30(30);
		
		assert.equal(30, firstWidget.getTotalFor30());
	});
	it("total should be updated when 3 calls are made @ 2.75", function(){
		let firstWidget = CalculateBill();

		firstWidget.setTheSmsCost(0.75);
		firstWidget.setTheCallCost(2.75);

		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		
		assert.equal(8.25, firstWidget.mainTotal());
		assert.equal(2.75, firstWidget.getTheCallCost());
		assert.equal(0.75, firstWidget.getTheSmsCost());
	});
	it("total should be updated when 4 sms's are made @ 0.75", function(){
		let firstWidget = CalculateBill();

		firstWidget.setTheSmsCost(0.75);
		firstWidget.setTheCallCost(2.75);

		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		
		assert.equal(3.00, firstWidget.mainTotal());
		assert.equal(2.75, firstWidget.getTheCallCost());
		assert.equal(0.75, firstWidget.getTheSmsCost());
	});
	it("total should be updated when 3 calls are made @ 2.75 and 4 sms's are made @ 0.75.", function(){
		let firstWidget = CalculateBill();

		firstWidget.setTheSmsCost(0.75);
		firstWidget.setTheCallCost(2.75);

		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		
		assert.equal(11.25, firstWidget.mainTotal());
		assert.equal(2.75, firstWidget.getTheCallCost());
		assert.equal(0.75, firstWidget.getTheSmsCost());
	});
	it("the total should be ORANGE when it exceeds 20", function(){
		let firstWidget = CalculateBill();

		firstWidget.setTheSmsCost(0.75);
		firstWidget.setTheCallCost(2.75);
		firstWidget.setTotalFor20(20);
		firstWidget.setTotalFor30(30);

		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		
		assert.equal('orange', firstWidget.colorForTotal());	
	});
	it("the total should be RED when it exceeds 30", function(){
		let firstWidget = CalculateBill();

		firstWidget.setTheSmsCost(0.75);
		firstWidget.setTheCallCost(2.75);
		firstWidget.setTotalFor20(20);
		firstWidget.setTotalFor30(30);

		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.smsString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		firstWidget.callString();
		
		assert.equal('red', firstWidget.colorForTotal());
		
	});
});
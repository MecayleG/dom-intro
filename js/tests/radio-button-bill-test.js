describe("the radio button bill factory function", function(){
	it("sets the call cost to R2.75", function(){
		let radioButton = ButtonBill();

		radioButton.forACall();

		assert.equal(2.75, radioButton.forACall());
	});
	it("sets the sms cost to R0.75", function(){
		let radioButton = ButtonBill();

		radioButton.forASms();

		assert.equal(0.75, radioButton.forASms());
	});
	it("makes the total ORANGE when it exceeds 30", function(){
		let radioButton = ButtonBill();

		radioButton.theOrangeLevel();

		assert.equal(30, radioButton.theOrangeLevel());
	});
	it("makes the total RED when it exceeds 50", function(){
		let radioButton = ButtonBill();

		radioButton.theRedLevel();

		assert.equal(50, radioButton.theRedLevel());
	});
	it("sets the call cost to R2.75", function(){
		let radioButton = ButtonBill();

		radioButton.forACall();

		assert.equal(2.75, radioButton.forACall());
	});
	it("total should be updated to  R13.75 when 5 calls are made ", function(){
		let radioButton = ButtonBill();

		radioButton.forACall();
		radioButton.forASms();

		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();

		assert.equal(13.75, radioButton.totalForAll());
		assert.equal(2.75, radioButton.forACall());
		assert.equal(0.75, radioButton.forASms());
	});
	it("total should be updated to  R3.00 when 4 sms's are made ", function(){
		let radioButton = ButtonBill();

		radioButton.forACall();
		radioButton.forASms();

		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.smsButton();

		assert.equal(3.00, radioButton.totalForAll());
		assert.equal(2.75, radioButton.forACall());
		assert.equal(0.75, radioButton.forASms());
	});
	it("total should be updated to  R9.75 when 2 sms's and 3 calls are made ", function(){
		let radioButton = ButtonBill();

		radioButton.forACall();
		radioButton.forASms();

		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		
		assert.equal(9.75, radioButton.totalForAll());
		assert.equal(2.75, radioButton.forACall());
		assert.equal(0.75, radioButton.forASms());
	});
	it("total is ORANGE when equal to or over 30", function(){
		let radioButton = ButtonBill();

		radioButton.forACall();
		radioButton.forASms();
		radioButton.theOrangeLevel();
		radioButton.theRedLevel();

		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		
		assert.equal("orange", radioButton.colorChange());
		
	});
	it("total is RED when equal to or over 50", function(){
		let radioButton = ButtonBill();

		radioButton.forACall();
		radioButton.forASms();
		radioButton.theOrangeLevel();
		radioButton.theRedLevel();

		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.smsButton();
		radioButton.smsButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		radioButton.callButton();
		
		assert.equal("red", radioButton.colorChange());
		
	});
});
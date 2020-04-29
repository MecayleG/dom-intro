describe("the text input bill factory function", function(){

	it("should set the cost of a call to R2.75", function(){
		let inputBill = TextBill();

		inputBill.aCall(2.75);
		assert.equal(2.75, inputBill.getACall());
	});
	it("should set the cost of a sms to R0.75", function(){
		let inputBill = TextBill();

		inputBill.aSms(0.75);
		assert.equal(0.75, inputBill.getASms());
	});
	it("should set the cost of a call and sms", function(){
		let inputBill = TextBill();

		inputBill.aCall(2.75);
		inputBill.aSms(0.75);
		assert.equal(2.75, inputBill.getACall());
		assert.equal(0.75, inputBill.getASms());
	});
	it("total should be orange when it exceeds 30", function(){
		let inputBill = TextBill();

		inputBill.limitOne(30);
		assert.equal(30, inputBill.getLimitOne());
		});
	it("total should be red when it exceeds 50", function(){
		let inputBill = TextBill();

		inputBill.limitTwo(50);
		assert.equal(50, inputBill.getLimitTwo());
		
	});
	it("total should be updated when 2 calls are made", function(){
		let inputBill = TextBill();

		inputBill.aSms(0.75);
		inputBill.aCall(2.75);

		inputBill.wordCall();
		inputBill.wordCall();

		assert.equal(5.50, inputBill.overallTotal());
		assert.equal(2.75, inputBill.getACall());
		assert.equal(0.75, inputBill.getASms());
		
	});
	it("total should be updated when 5 sms's are made", function(){
		let inputBill = TextBill();

		inputBill.aSms(0.75);
		inputBill.aCall(2.75);

		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();

		assert.equal(3.75, inputBill.overallTotal());
		assert.equal(2.75, inputBill.getACall());
		assert.equal(0.75, inputBill.getASms());
		
	});
	it("total should be updated when 4 sms's and 3 calls are made", function(){
		let inputBill = TextBill();

		inputBill.aSms(0.75);
		inputBill.aCall(2.75);

		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		

		assert.equal(11.25, inputBill.overallTotal());
		assert.equal(2.75, inputBill.getACall());
		assert.equal(0.75, inputBill.getASms());
		
	});
	it("total color should change to ORANGE when equal to or over 30", function(){
		let inputBill = TextBill();

		inputBill.aSms(0.75);
		inputBill.aCall(2.75);
		inputBill.limitOne(30);
		inputBill.limitTwo(50);

		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordCall();
		inputBill.wordCall();
		

		assert.equal("orange", inputBill.totalColor());
	});
	it("total color should change to RED when equal to or over 50", function(){
		let inputBill = TextBill();

		inputBill.aSms(0.75);
		inputBill.aCall(2.75);
		inputBill.limitOne(30);
		inputBill.limitTwo(50);

		
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordSms();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();
		inputBill.wordCall();

		assert.equal("red", inputBill.totalColor());
	});

});
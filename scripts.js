$(function(){
  	var iPhone6S = new Phone('Apple', 2250, 'silver', 5);
	var SamsungGalaxyS6 = new Phone('Samsung', 2000, 'black', 6);
	var OnePlusOne = new Phone('OnePlus', 1750, 'white', 7);
  	
  	function Phone(brand, price, color, screenSize) {
	this.brand = brand;
	this.price = price; 
	this.color = color;
	this.screenSize = screenSize;
	}

	Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and it has a " + this.screenSize + "-inch screen" + ".");
	}

	iPhone6S.printInfo();
	SamsungGalaxyS6.printInfo();
	OnePlusOne.printInfo();

});
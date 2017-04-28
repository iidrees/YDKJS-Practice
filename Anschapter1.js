const TAX_RATE = prompt('Please enter the tax rate: ');
const PHONE_PRICE = 400;
const ASSESSORY_PRICE = 100;
const SPENDING_THRESHOLD = prompt('My spending threshold is: ');






//Calculate the total tax to be paid for the purchases
function calculateTax(amt) {

	amt = amt + (amt * TAX_RATE);

	return amt;
}

function formatAmount(amt) {

	amt = amt.toFixed(2);
	return "$" + amt;
}

//calculate the total price of phone and accessories
var bank_balance = 10000;
var amt = 0;

while (amt < bank_balance) {
	amt = amt + PHONE_PRICE;

	if (amt < SPENDING_THRESHOLD) {
		amt = amt + ASSESSORY_PRICE;
	}
}

amt = amt + calculateTax(amt);

console.log("The price for these phones is: " + formatAmount(amt));

if (amt < bank_balance) {
	console.log("I can afford the phone")
} else {
	console.log("I cannot afford this phone at: " + amt);
}
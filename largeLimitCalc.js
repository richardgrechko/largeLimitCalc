// This is a calculator that can handle up to 2,147,483,647 digits
class largeLimitCalc
{
	constructor(k,exp)
	{
		this.result = 0;
		if((Math.log10(k)*exp)>=2147483647)
		{
			this.result = Infinity; // if it reaches ≥10^2147483647, it will overflow.
		}
		else if((Math.log10(k)*exp)>=10)
		{
			this.result = Math.pow(10,(Math.log10(k)*exp%1)).toFixed(9) + "E" + Math.floor(Math.log10(k)*exp); // return to scientific notation
		}
		else
		{
			this.result = k**exp; // k^exp
		}
		return this.result;
	}
}

// Suggested by Uni in unitextwall.glitch.me
class largeLimitCalc_Uni
{
	constructor(k,exp)
	{
		this.result = 0;
		if((Math.log10(k)*exp)>=9223372036854775807)
		{
			this.result = Infinity; // if it reaches ≥10^9223372036854775807, it will overflow.
		}
		else if((Math.log10(k)*exp)>=10)
		{
			this.result = Math.pow(10,(Math.log10(k)*exp%1)).toFixed(9) + "E" + Math.floor(Math.log10(k)*exp); // return to scientific notation
		}
		else
		{
			this.result = k**exp; // k^exp
		}
		return this.result;
	}
}

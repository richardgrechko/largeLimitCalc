// This is a calculator that can handle up to 2,147,483,647 digits
class largeLimitCalc
{
	constructor(k,exp)
	{
		this.result = 0;
		this.number = k;
		this.power = exp;
		this.exp = (Math.log10(k)*exp);
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
	toNumber()
	{
		let K = 0;
		if(this.exp>=2147483647)
		{
			K = Infinity; // if it reaches ≥10^2147483647, it will overflow.
		}
		else if(this.exp>=10)
		{
			K = Math.pow(10,this.exp).toFixed(9) + "E" + Math.floor(this.exp); // return to scientific notation
		}
		else
		{
			K = this.number**this.power; // k^exp
		}
		return K;
	}
}

// Suggested by Uni in unitextwall.glitch.me
// Go to unitextwall.glitch.me/~Uni
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

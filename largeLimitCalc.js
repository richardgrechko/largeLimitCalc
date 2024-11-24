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
	}
	toString()
	{
		return this.result;
	}
}
// It can go up to E1.7E38
class largeLimitCalcV2
{
	constructor(k,exp)
	{
		this.result = 0;
		if((Math.log10(k)*exp)>=((2**127)-1))
		{
			this.result = Infinity; // if it reaches ≥E1.7E38, it will overflow.
		}
		else if((Math.log10(k)*exp)>=2147483647)
		{
			this.result = "E" + Math.log10(k)*exp; // continue
		}
		else if((Math.log10(k)*exp)>=12)
		{
			this.result = Math.pow(10,(Math.log10(k)*exp%1)).toFixed(12) + "E" + Math.floor(Math.log10(k)*exp); // return to scientific notation
		}
		else
		{
			this.result = k**exp; // k^exp
		}
	}
	toString()
	{
		return this.result;
	}
}
largeLimitCalcV2.factorial = function(k)
{
	// NEW! Factorial
	this.result = 0;
	if(k>=1)
	{
		this.result = Math.log10(Math.floor(k))+(this.result-Math.log10(Math.floor(k-1))); // hmph
	}
	else
	{
		this.result = 0; // k^exp
	}
	return new largeLimitCalcV2(10,k).toString()
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
	}
	toString()
	{
		return this.result;
	}
}

// This is a calculator that can handle up to 2,147,483,647 digits
class largeLimitCalc
{
	constructor(k,exp)
	{
		this.result = 0;
		if((Math.log10(k)*exp)>=2147483647)
		{
			this.result = Infinity;
		}
		else if((Math.log10(k)*exp)>=10)
		{
			this.result = Math.pow(10,(Math.log10(k)*exp%1)).toFixed(9) + "E" + Math.floor(Math.log10(k)*exp);
		}
		else
		{
			this.result = Math.pow(10,(Math.log10(k)*exp))
		}
		return this.result;
	}
}

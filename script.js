function updateRate(){
		var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}


function compute()
{ 
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var year = new Date().getFullYear()+parseInt(years);	
var principal = document.getElementById("principal").value;
var interest=principal*years*rate/100;

		document.getElementById("result").innerHTML="If you deposit "+principal+",<br> at an interest rate of "+rate+"%<br> You will receive an amount of "+interest+"<br>in the year "+year;    
}
        

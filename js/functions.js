/**
We have 4 functions to use in GPAcalc.html
The first is: changeVal() to save the values of the hours drop list
The Second is:changeGrd() to save the values of the grade gaind from the drop list
The Thirs is: calculate() to calculate and print the answer to the user in GPAcalc.html and the equation for calculation is (Grade * hours)+(Grade * Hours)+.../Total sum of hours
The Forth is: clear() to clear all selected values on drop list and the filled forms

**/



//Equation (Grade * hours)+(Grade * Hours)/Total sum of hours



var get_val = new Array();
var get_grd = new Array();
var total=0 ;
var sumOfTotal=0;
var sumOfHours=0;


		function changeVal()//to save the values of drop list in GPAcalc.html
		{
			for(var i=1;i<=13;i++){

			get_val[i]=parseInt(document.getElementById("b"+i).value);
				}

			}
		
		function changeGrd()//to save the Grade of the course
	{

		for (var i=1;i<=13;i++)
		{
			get_grd[i]=parseFloat(document.getElementById("c"+i).value);

		}


	}

		function calculate()//  to calculate the Total GPA
		{

				for (var i=1;i<=13;i++)
				{

//alert(get_grd[i]);
					(isNaN(get_val[i] || get_grd[i]) ? 0 : sumOfTotal=get_val[i]*get_grd[i]);
					
					total=total+sumOfTotal;

				}

				for (var i=0;i<=13;i++)
				{
					(isNaN(get_val[i]) ? 0 : sumOfHours+=parseInt(get_val[i])) 


				}
				
				
				
				return (isNaN(total/sumOfHours) ? "Sorry , There is something wrong" : (total/sumOfHours).toFixed(2)) ;
					
				
		}

		function viewResults()
		{
			
			document.getElementById("Result").innerHTML="Your Overall GPA is:"+calculate();
			

		}



		function clear() //to clear the forms and the drop list on GPAcalc.html
		{
			document.forms["a1"].reset();
			//for (var i=1;i<=6;i++){	
			//	document.reset();	   
			//	document.getElementById("b"+i).selectedIndex=1;
			//	document.getElementById("c"+i).selectedIndex=0;
			//
			//

		}

	




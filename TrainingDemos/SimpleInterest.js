/* $(document).ready(
	function(){
		alert("Message from JQuery!!");
	}	
); */

var Astute = window.Astute || {};

Astute.JQuery = (
	function(){	
		function UpdateSimpleInterest()
		{
			var Principal, RateOfInterest, NumberOfYears;
			Principal = parseFloat($("#txtPrincipal").val());
			RateOfInterest =  parseFloat($("#txtInterestPercentage").val());
			NumberOfYears =  parseFloat($("#txtNoOfYears").val());
			
			var SimpleInterest = Principal * RateOfInterest /100 * NumberOfYears;
			
			$("#tdInterest").html(SimpleInterest);
			$("#trInterest").show();
		}
		
		return{
			SimpleInterest:UpdateSimpleInterest
		};
	}
)();

$(document).ready(
	function(){
		$("#btnCalculate").click (
			function(){
				Astute.JQuery.SimpleInterest();
			}
		);		
	}
);
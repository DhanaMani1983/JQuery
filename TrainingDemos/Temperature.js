/* $(document).ready(
	function(){
		alert("Message from JQuery!!");
	}	
); */

var Astute = window.Astute || {};

Astute.JQuery = (
	function(){	
		function UpdateChart()
		{
			var fromC, toC;
			fromC = parseInt($("#txtFrom").val());
			toC =  parseInt($("#txtTo").val());
			
			var res = [];
			res.push("<table id='tblChart'>");
			res.push("<caption>Centigrade to Fahrenheitheit Chart</caption>");
			
			//Find the result
			var c,f
			for(i=fromC; i<= toC; i++)
			{
				f = (i * 9/5.0) + 32;
				res.push("<tr>");
				res.push("<td>" + i + "</td>");
				res.push("<td>" + f.toFixed(4) + "</td>");
				res.push("</tr>");
			}
			res.push("</table>");
			$("#Result").html(res.join(""));
		}
		
		return{
			UpdateChart:UpdateChart
		};
	}
)();

$(document).ready(
	function(){
		$("#btnChart").click (
			function(){
				Astute.JQuery.UpdateChart();
			}
		);		
	}
);
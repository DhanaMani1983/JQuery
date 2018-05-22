/* $(document).ready(
	function(){
		alert("Message from JQuery!!");
	}	
); */

var Astute = window.Astute || {};

Astute.JQuery = (
	function(){	
		function UpdatePara()
		{
			var NameText = $("#Name").val();
			$("#Result").html( "Welcome Mr." + NameText);
		}
		
		return{
			UpdatePara:UpdatePara
		};
	}
)();

$(document).ready(
	function(){
		$("#Save").click (
			function(){
				Astute.JQuery.UpdatePara();
			}
		);		
	}
);
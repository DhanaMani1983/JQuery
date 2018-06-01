var Astute = window.Astute || {};

Astute.Jquery = (
	function(){
		function IsRamuFound(){
			var txtAreaText = $("#txtArea").val();
			
			var patt = /ramu/gi; // global ignore for gi
			var out = "";
			
			if(patt.test(txtAreaText))
			{
				out = "Ramu is found";
			}
			else{
				out = "Ramu is not found";
			}
			$("#result").html(out);
		}
		function HelloRamu()
		{
				alert("Hello Ramu!");
		}
		function PatternMatch(patt)
		{
			var txtAreaText = $("#txtArea").val();
			var res = patt.exec(txtAreaText);
			var out = "";
			while (res)
			{
				if (out.length>0)
					out += "<br/> ";
				
				out += res;
				res = patt.exec(txtAreaText);				
			}
			$("#result").html(out);
		}
		
		function StringMatch(Patt)
		{
				var TextAreaText = $("#txtArea").val();
				
				var out = TextAreaText.match(Patt);
				
				$("#result").html(out.join(","));
		}		
		return{
			IsRamuFound : IsRamuFound,
			HelloRamu : HelloRamu,		
		    PatternMatch : PatternMatch,
			StringMatch : StringMatch
		};
	}
)();

$(document).ready(
	function(){
		$("#btnGetMobileNumber").click(
			function(){
				Astute.Jquery.PatternMatch(/\d{11}/g);
			}
		);
		$("#btnGetWords").click(
			function(){
				Astute.Jquery.PatternMatch(/[a-z0-9]*m[a-z0-9]*/gi);
			}
		);		
		$("#btnGetMN").click(
			function(){
				Astute.Jquery.StringMatch(/\d{11}/g);
			}
		);			
		$("#btnRamuFound").click (
			function(){
				Astute.Jquery.IsRamuFound();
			}
		);	
		$("#btnMLM").click (
			function(){
				Astute.Jquery.StringMatch(/^my/gim);
			}
		);			
	}
);


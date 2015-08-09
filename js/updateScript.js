$(document).ready(function(){
	
	console.log('ddd'):
	$(".warning").on("click",function(){ 

		if(!$(".section").hasClass("shrink")){
			
			$(".section").removeClass("expand");
			$(".system-check.system-check-2").removeClass("expand");
			$(".date-range").removeClass("expand");	


			$(".section").addClass("shrink");
			$(".system-check.system-check-2").addClass("shrink");
			$(".date-range").addClass("shrink");	


		}else{
			$(".section").addClass("expand");
			$(".system-check.system-check-2").addClass("expand");
			$(".date-range").addClass("expand");	

			$(".section").removeClass("shrink");
			$(".system-check.system-check-2").removeClass("shrink");
			$(".date-range").removeClass("shrink");	
		}
		
	});
});
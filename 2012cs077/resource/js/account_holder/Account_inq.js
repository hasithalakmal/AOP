$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
	var baseURL = localStorage.getItem("baseURL");
	var pass_acch_id = localStorage.getItem("pass_acch_id");
	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please log in to the System.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}

	
	 
			$.ajax({  
			   type: "POST",  
			   url: baseURL+"account/one-account",  
			   dataType: "json", 
			   contentType: "application/json",
			   data: JSON.stringify({'acc_id':pass_acch_id}),
			   success: function(resp){
				if(resp.acc_id != 0){
					$("#att1").html("<sup style=\"font-size: 20px\">Rs.</sup>" + resp.acc_balance );
				$("#att2").html("<sup style=\"font-size: 20px\">Rs.</sup>" + resp.acc_min_balance);
				$("#att3").html(resp.acc_type );
				$("#att4").html(resp.acc_id );
				$("#att5").html(resp.acc_acch_id );
				$("#att6").html(resp.acc_create );
					
				}else{
					sweetAlert("Oops...", resp.msg , "error");
				}
					console.log(resp);
			   },  
			   error: function(e){  
				sweetAlert("Oops...", "Something went wrong!" + e, "error");
			   }  
			 }); 
	
	
		
});


function logout(){
			localStorage.setItem("usr_name", null);
			localStorage.setItem("usr_full_name", null);
			localStorage.setItem("usr_email", null);
			localStorage.setItem("usr_phone_number", null);
			localStorage.setItem("usr_api_key", null);
			localStorage.setItem("ucat_name", null);
			localStorage.setItem("ucat_description", null);
			localStorage.setItem("ou_recode_added_at", null);
			localStorage.setItem("pass_acch_id", null);
			
			var UIbaseURL = localStorage.getItem("UIbaseURL");
			window.location.href = UIbaseURL;
};
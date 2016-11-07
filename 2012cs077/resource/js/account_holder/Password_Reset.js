$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
	var baseURL = localStorage.getItem("baseURL");
	var pass_acch_id = localStorage.getItem("pass_acch_id");

	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please log in to the System.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}

	
	 
	 $( "#Pw_Reset" ).validate({
	  rules: {
		pass_password: {
		  required: true,
		  minlength: 4
		},
		pass_password1: {
		  required: true,
		  minlength: 4,
		  equalTo: "#pass_password"
		}
	  },
	  messages: {
		pass_password: {
		   required: "User Password required",
		 minlength:  "This should have a minimum of four characters"
		},
		pass_password1: {
		  required: "User Name is required",
		  minlength:  "This should have a minimum of four characters",
		  equalTo: "Not the same password"
		}
	  },
	  submitHandler: function(form) {
 
		  var pass_password= $('#pass_password').val();
		  
			$.ajax({  
			   type: "PUT",  
			   url: baseURL+"access/update",  
			   dataType: "json", 
			   contentType: "application/json",
			   data: JSON.stringify({'pass_password':pass_password, 'pass_user_name':sessionid}),
			   success: function(resp){
				if(resp.msg == "success"){
					sweetAlert("Success!", "Transaction is successfully done", "success" );
					$( '#Pw_Reset' ).each(function(){
						this.reset();
					});
				}else{
					sweetAlert("Oops...", resp.msg , "error");
				}
			   },  
			   error: function(e){  
				sweetAlert("Oops...", "Something went wrong!" + e, "error");
			   }  
			 }); 
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
			
			var UIbaseURL = localStorage.getItem("UIbaseURL");
			window.location.href = UIbaseURL;
};
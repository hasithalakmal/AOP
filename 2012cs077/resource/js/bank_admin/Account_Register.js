$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
	var baseURL = localStorage.getItem("baseURL");
	var pass_acch_id = localStorage.getItem("pass_acch_id");
	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please log in to the System.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}


	
	 
	 $( "#accountRegister" ).validate({
	  rules: {
		acc_acch_id: {
		  required: true
		},
		acc_balance: {
		  required: true,
		  min :500
		}
	  },
	  messages: {
		acc_acch_id: {
		  required: "Amount is Required"
		},
		acc_balance: {
		  required: "Amount is Required",
		  min : "Minimumly your deposit should be Rs.500"
		}
	  },
	  submitHandler: function(form) {
 
		  var acc_acch_id= $('#acc_acch_id').val();
		  var acc_balance= $('#acc_balance').val();
		  
			$.ajax({  
			   type: "POST",  
			   url: baseURL+"account/register",  
			   dataType: "json", 
			   contentType: "application/json",
			   data: JSON.stringify({'acc_acch_id':acc_acch_id, 'acc_balance':acc_balance}),
			   success: function(resp){
				if(resp.msg == "success"){
					sweetAlert("Success!", "User is successfully registerd", "success" );
					$( '#Message_sender' ).each(function(){
						this.reset();
					});
				}else{
					sweetAlert("Oops...", resp.msg , "error");
				}
					console.log(resp);
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
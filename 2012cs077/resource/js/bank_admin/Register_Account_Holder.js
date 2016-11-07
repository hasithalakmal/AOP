$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
	var baseURL = localStorage.getItem("baseURL");
	var pass_acch_id = localStorage.getItem("pass_acch_id");
	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please log in to the System.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}

	
	//for letters_and_space_only - full name
	jQuery.validator.addMethod("letters_and_space_only", function(value, element) {
		  return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
	}, "Letters only please"); 
	
	//for phone number - land phone number/mobile phone number
	jQuery.validator.addMethod("phone_numbers", function(value, element) {
		  return this.optional(element) || /^\(?0\d{2}\)?[\s\-]?\d{7}$/i.test(value);
	}, "Phone Number please"); 
	
	
	 
	 $( "#account_holder_register" ).validate({
	  rules: {
		acch_name: {
		  required: true,
		  letters_and_space_only: true
		},
		acch_mobile: {
		  required: true,
		  phone_numbers: true
		},
		acch_adress: {
		  required: true
		}
	  },
	  messages: {
		acch_name: {
		  required: "Amount is Required"
		},
		acch_mobile: {
		  required: "Amount is Required"
		},
		acch_adress: {
		  required: "Account Number is required"
		}
	  },
	  submitHandler: function(form) {
 
		  var acch_name= $('#acch_name').val();
		  var acch_mobile= $('#acch_mobile').val();
		   var acch_adress= $('#acch_adress').val();
		  
			$.ajax({  
			   type: "POST",  
			   url: baseURL+"account-holder/register",  
			   dataType: "json", 
			   contentType: "application/json",
			   data: JSON.stringify({'acch_name':acch_name, 'acch_mobile':acch_mobile, 'acch_adress':acch_adress}),
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
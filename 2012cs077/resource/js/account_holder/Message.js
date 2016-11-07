$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
	var baseURL = localStorage.getItem("baseURL");
	var pass_acch_id = localStorage.getItem("pass_acch_id");
	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please log in to the System.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}

	
	 
	 $( "#Message_sender" ).validate({
	  rules: {
		msg_title: {
		  required: true
		},
		msg_body: {
		  required: true
		}
	  },
	  messages: {
		msg_title: {
		  required: "Amount is Required"
		},
		msg_body: {
		  required: "Account Number is required"
		}
	  },
	  submitHandler: function(form) {
 
		  var msg_title= $('#msg_title').val();
		  var msg_body= $('#msg_body').val();
		  
			$.ajax({  
			   type: "POST",  
			   url: baseURL+"msg/register",  
			   dataType: "json", 
			   contentType: "application/json",
			   data: JSON.stringify({'msg_title':msg_title, 'msg_body':msg_body, 'msg_acch_id':pass_acch_id}),
			   success: function(resp){
				if(resp.msg == "success"){
					sweetAlert("Success!", "Transaction is successfully done", "success" );
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
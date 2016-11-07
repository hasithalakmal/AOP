$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
	var baseURL = localStorage.getItem("baseURL");
	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please log in to the System.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}

	
	 
	 $( "#schoolRegistrationForm" ).validate({
	  rules: {
		sname: {
		  required: true,
		  minlength: 4
		},
		spname: {
		  required: true,
		  minlength: 4
		}
	  },
	  messages: {
		sname: {
		  required: "School Name is Required",
		  minlength: "School Name is too short. It should have a minimum of four characters"
		},
		spname: {
		  required: "The City of the School is required",
		  minlength: "The City of the School is too short. It should have a minimum of four characters"
		}
	  },
	  submitHandler: function(form) {
 
		  var sname= $('#sname').val();
		  var spname= $('#spname').val();
		  
			$.ajax({  
			   type: "POST",  
			   url: baseURL+"student_ext_managment/SchoolService.php/school_register",  
			   dataType: "json", 
			   data: {'sch_name':sname, 'sch_situated_in':spname},
			   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', usr_api_key);},
			   success: function(resp){
					if(resp.error == false){
						sweetAlert("Success!", "School is successfully registered!", "success" );
						$( '#schoolRegistrationForm' ).each(function(){
							this.reset();
						});
					}else{
						sweetAlert("Oops...", resp.message, "error");
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
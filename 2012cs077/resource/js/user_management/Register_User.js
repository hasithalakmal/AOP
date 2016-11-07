$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
	var baseURL = localStorage.getItem("baseURL");
	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please login to the System.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}

	$.ajax({  
       type: "GET",  
       url: baseURL+"user_management/UserCategoryService.php/user_categories",  
       dataType: "json", 
	   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', usr_api_key);},
       success: function(resp){  
		for (i = 0; i < resp.user_category.length; i++) { 
			$( "#ugroup" ).append( "<option value=\""+resp.user_category[i].ucat_id+"\" >"+ resp.user_category[i].ucat_name +"</option>" );
		}
       },  
       error: function(e){  
         sweetAlert("Oops...", "Something went wrong!" + e, "error");
       }  
     });
	 
	 $( "#userRegistrationForm" ).validate({
	  rules: {
		uname: {
		  required: true,
		  minlength: 4
		},
		ufname: {
		  required: true,
		  minlength: 4
		},
		uemail: {
		  required: true,
		  email: true,
		},
		uphone: {
		  minlength: 10,
		  maxlength: 10
		},
		upass: {
		  required: true,
		  minlength: 4,
		  maxlength: 16
		},
		upassrep: {
		  required: true,
		  minlength: 4,
		  maxlength: 16,
		  equalTo: "#upass"
		}
	  },
	  messages: {
		uname: {
		  required: "User Name is required",
		  minlength: "User Name is too short. It should have a minimum of four characters"
		},
		ufname: {
		  required: "User Full Name is required",
		  minlength: "Full Name is too short. It should have a minimum of four characters"
		},
		uemail: {
		  required: "User Email is required",
		  email: "You entered an invalid Email Address"
		},
		uphone: {
		  minlength: "Phone number should contain only ten digits",
		  maxlength: "Phone number should contain only ten digits"
		},
		upass: {
		  required: "User Password required",
		  minlength: "This should have a minimum of four characters",
		  maxlength: "This should have a minimum of sixteen characters"
		},
		upassrep: {
		  required: "It is required to re-type User Password",
		  minlength: "This should have a minimum of four characters",
		  maxlength: "This should have a minimum of sixteen characters",
		  equalTo: "Passwords do not match"
		}
	  },
	  submitHandler: function(form) {
 
		  var uname= $('#uname').val();
		  var ufname= $('#ufname').val();
		  var uemail= $('#uemail').val();
		  var uphone= $('#uphone').val();
		  var upass= $('#upass').val();
		  var ugroup= $('#ugroup').val();

		  //alert(uname+" "+uphone+" "+ugroup);
		  
			$.ajax({  
			   type: "POST",  
			   url: baseURL+"user_management/OperationalUserService.php/operational_user_register",  
			   dataType: "json", 
			   data: {'usr_name':uname, 'usr_pwd':upass, 'usr_full_name':ufname, 'usr_email':uemail, 'usr_phone_number':uphone, 'usr_category':ugroup},
			   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', usr_api_key);},
			   success: function(resp){
					if(resp.message == "You are successfully registered"){
						sweetAlert("Success!", "User is successfully registered!", "success" );
						$( '#userRegistrationForm' ).each(function(){
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
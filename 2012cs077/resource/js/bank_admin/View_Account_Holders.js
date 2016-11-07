$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
	var baseURL = localStorage.getItem("baseURL");
	var pass_acch_id = localStorage.getItem("pass_acch_id");
	
	var transactionHistroytable = $("#transactionHistroytable").DataTable();
	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please log in to the System.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}

	
	 

			 
			 
			 $.ajax({  
			   type: "GET",  
			   url: baseURL+"account-holder/",  
			   dataType: "json", 
			   success: function(resp){
					//load data to stu reccomendation table
					transactionHistroytable.destroy();
					$('#transactionHistroyBody').empty();
					for (i = 0; i < resp.length; i++) {
						$("#transactionHistroyBody").append(
										"<tr><td>" + resp[i].acch_id + "</td><td>" 
										+ resp[i].acch_name + "</td><td>"
										+ resp[i].acch_mobile + "</td><td>"
										+ resp[i].acch_adress + "</td><td>"
										+resp[i].acch_state + "</td></tr>" );
					}			
					//to run data table
					transactionHistroytable = $("#transactionHistroytable").DataTable();	
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
			
			var UIbaseURL = localStorage.getItem("UIbaseURL");
			window.location.href = UIbaseURL;
};
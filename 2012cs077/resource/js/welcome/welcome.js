$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Pleace loggin to the system.",   timer: 3000,   showConfirmButton: false });
		setTimeout(function(){     window.location.href = "../../";   }, 3000);
	}

	
	//tool tips
	$( "#tool_tip_1" ).tooltip({
        content: "<h3>Thi is the explanation</h3><p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>",
        track:true
    });
	$( "#tool_tip_2" ).tooltip({
        content: "<h3>aaaa</h3><p>xgggxxxxxxxxxxxxxxx</p>",
        track:true
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

}
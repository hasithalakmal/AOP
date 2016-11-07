$(document).ready(function () {
    var sessionid = localStorage.getItem("usr_name");
    var usr_api_key = localStorage.getItem("usr_api_key");
    var baseURL = localStorage.getItem("baseURL");

    if (sessionid == null) {
        swal({title: "You are not logged in", text: "Pleace log in to the system.", timer: 3000, showConfirmButton: false});
        setTimeout(function () {
            window.location.href = "../../";
        }, 3000);
    }


    //loard supervisors in to dropdowns
    $.ajax({
        type: "GET",
        url: baseURL + "thurunu_saviya_managment/ProjectSupervisorService.php/projectSupervisors",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.projectSupervisors.length; i++) {
                $("#stu_para4").append("<option value=\"" + resp.projectSupervisors[i].tea_id + "\" >" + resp.projectSupervisors[i].tea_full_name  + "</option>");
            }
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });

	
	//loard project types in to dropdowns
    $.ajax({
        type: "GET",
        url: baseURL + "thurunu_saviya_managment/ProjectCatogoryService.php/project_catogories",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.projectCatogories.length; i++) {
                $("#stu_para5").append("<option value=\"" + resp.projectCatogories[i].pro_cat_id + "\" >" + resp.projectCatogories[i].pro_cat_name+" - "+ resp.projectCatogories[i].pro_cat_description + "</option>");
            }
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });



	//My validation functions 
	
	
    $("#projectRegistrationForm").validate({
        rules: {
			//students validations
			stu_para1: {
                required: true,
                minlength: 4,
				maxlength: 4,
				number: true,
				range: [1970, 2050]
            },
            stu_para2: {
                required: true,
                minlength: 4,
				maxlength:490
				
            },
            stu_para3: {
                minlength: 4,
				maxlength:5490
            },
            stu_para6: {
				required: true,
                minlength: 1,
				maxlength:2,
				number: true,
				range: [1, 30]
            }

        },
        messages: {
			//student validations
			stu_para1: {
                required: "Year of Recommendation is Required",
                minlength: "You entered less than four digits",
				maxlength: "You entered more than four digits",
				number: "This can only contain numbers",
				range: "The year should be within the range 1970-2050"
            },
            stu_para2: {
                required: "Topic of the Recommendation is required",
                minlength: "This should contain a minimum of four letters",
				maxlength:'This can only contain 490 characters'
				
            },
            stu_para3: {
                minlength: "This should have a minimum of four letters",
				maxlength:'This can only contain 5490 characters'
            },
            stu_para6: {
				required: "required group number",
                minlength: "should have minimam 1 letter",
				maxlength: "should have maxsimam 2 letter",
				number: "should be a number",
				range: "should be within 1-30"
            }
            
            
        },
        submitHandler: function (form) {
			

				
			   // alert(selected);
				var stu_para1 = $('#stu_para1').val();
				var stu_para2 = $('#stu_para2').val();
				var stu_para3 = $('#stu_para3').val();
				var stu_para4 = $('#stu_para4').val();
				var stu_para5 = $('#stu_para5').val();
				var stu_para6 = $('#stu_para6').val();

				//Rgister Reccomendation details
				$.ajax({
					type: "POST",
					url: baseURL + "thurunu_saviya_managment/ProjectService.php/project_register",
					dataType: "json",
					data: {'pro_year':stu_para1, 'pro_name':stu_para2, 'pro_discription':stu_para3, 'pro_supervisor_id':stu_para4, 'pro_catogory':stu_para5, 'pro_group_num':stu_para6},
					beforeSend: function (xhr) {
						xhr.setRequestHeader('Authorization', usr_api_key);
					},
					success: function (resp) {
						if(resp.error == false){
							sweetAlert("Success!", "Reccomendation added successfully!", "success");
						}else{
							sweetAlert("Oops...", "something went wrong" + resp.message, "error");
						}
					},
					error: function (e) {
						sweetAlert("Oops...", "Something went wrong!" + e, "error");
					}
				});	
				
			
		}
	});


});



function logout() {
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
;
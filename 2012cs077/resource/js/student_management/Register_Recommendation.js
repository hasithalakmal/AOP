$(document).ready(function () {
    var sessionid = localStorage.getItem("usr_name");
    var usr_api_key = localStorage.getItem("usr_api_key");
    var baseURL = localStorage.getItem("baseURL");
	
	
	//to submit form need those things
	var isValidAddmissionNumber = false;



    if (sessionid == null) {
        swal({title: "You are not logged in", text: "Pleace log in to the system.", timer: 3000, showConfirmButton: false});
        setTimeout(function () {
            window.location.href = "../../";
        }, 3000);
    }

	$("#studentNameFeild").hide();

    //loard occupation types in to dropdowns
    $.ajax({
        type: "GET",
        url: baseURL + "student_ext_managment/RecommendationTypeService.php/recommendation_type",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.recommendation_types.length; i++) {
                $("#stu_para3").append("<option value=\"" + resp.recommendation_types[i].rec_type_id + "\" >" + resp.recommendation_types[i].rec_type_name  + "</option>");
            }
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });


   
	
	//loard details using student
	$("#stu_para1").keyup(function(){
		var studentid = $("#stu_para1").val();
		if(studentid.length == 6){
			//get student details
			$.ajax({
				type: "GET",
				url: baseURL + "student_ext_managment/StudentService.php/student/"+studentid,
				dataType: "json",
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', usr_api_key);
				},
				success: function (resp) {
					var stuid = resp.student.stu_id;
					var stuname = resp.student.stu_full_name;
					if(stuid == null || stuid == ""){
						sweetAlert("Oops...", "This is invalid student Admission Number!", "error");
						$("#studentNameFeild").hide();
					}else{
						//hide gardian section
						$("#stu_para6").val(stuname);
						$("#studentNameFeild").show();
						isValidAddmissionNumber = true;
						

					}
				},
				error: function (e) {
					sweetAlert("Oops...", "Something went wrong!" + e, "error");
				}
			});
			
		
		}else if (studentid.length > 6){
			sweetAlert("Oops...", "This has more characters....", "error");
			$("#studentNameFeild").hide();
		}else{
			$("#studentNameFeild").hide();
		}
	});

	
	

	//My validation functions 
	
	//for letters_and_space_only - full name
	jQuery.validator.addMethod("letters_only", function(value, element) {
		  return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
	}, "Letters only please"); 
	//for letters_and_space_only - full name
	jQuery.validator.addMethod("letters_and_space_only", function(value, element) {
		  return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
	}, "Letters only please"); 
	//for letters_and_space_fillstop_only - name with initials
	jQuery.validator.addMethod("letters_and_space_fulstop_only", function(value, element) {
		  return this.optional(element) || /^[a-zA-Z.\s]+$/i.test(value);
	}, "Letters only please"); 
	//for phone number - land phone number/mobile phone number
	jQuery.validator.addMethod("phone_numbers", function(value, element) {
		  return this.optional(element) || /^\(?0\d{2}\)?[\s\-]?\d{7}$/i.test(value);
	}, "Letters only please"); 
	//for NIC number 
	jQuery.validator.addMethod("nic_numbers", function(value, element) {
		  return this.optional(element) || /^[0-9]{9}[vVxX]$/i.test(value);
	}, "Letters only please"); 

    $("#studentRegistrationForm").validate({
        rules: {
			//students validations
            stu_para1: {
                required: true,
                minlength: 6,
				maxlength: 6,
				number: true
            },
			stu_para2: {
                required: true,
                minlength: 4,
				maxlength: 4,
				number: true,
				range: [1970, 2050]
            },
            stu_para4: {
                required: true,
                minlength: 4,
				maxlength:500
				
            },
            stu_para5: {
                minlength: 4,
				maxlength:5490
            }
			
        },
        messages: {
			//student validations
            stu_para1: {
                required: "Student Admission Number is Required",
                minlength: "You entered less than six digits",
				maxlength: "You entered more than six digits",
				number: "This can only contain numbers"
            },
			stu_para2: {
                required: "Year of Recommendation is Required",
                minlength: "You entered less than four digits",
				maxlength: "You entered more than four digits",
				number: "This can only contain numbers",
				range: "The year should be within the range 1970-2050"
            },
            stu_para4: {
                required: "Topic of the Recommendation is required",
                minlength: "This should contain a minimum of four letters",
				maxlength:'This can only contain 500 characters'
				
            },
            stu_para5: {
                minlength: "This should have a minimum of four letters",
				maxlength:'This can only contain 5490 characters'
            }
            
            
        },
        submitHandler: function (form) {
			
			if(isValidAddmissionNumber){
				
			   // alert(selected);
				var stu_para1 = $('#stu_para1').val();
				var stu_para2 = $('#stu_para2').val();
				var stu_para3 = $('#stu_para3').val();
				var stu_para4 = $('#stu_para4').val();
				var stu_para5 = $('#stu_para5').val();

				//Rgister Reccomendation details
				$.ajax({
					type: "POST",
					url: baseURL + "student_ext_managment/RecommendationService.php/recommendation_register",
					dataType: "json",
					data: {'rec_stu_id':stu_para1, 'rec_year':stu_para2, 'rec_type_id':stu_para3, 'rec_topic':stu_para4, 'rec_discription':stu_para5},
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
				
			}else{
				sweetAlert("Oops...", "Admission Number is invalid", "error");
			}
			
			
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
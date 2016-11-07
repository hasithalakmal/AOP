$(document).ready(function () {
    var sessionid = localStorage.getItem("usr_name");
    var usr_api_key = localStorage.getItem("usr_api_key");
    var baseURL = localStorage.getItem("baseURL");
	
	
	//to submit form need those things
	var isValidAddmissionNumber = false;



    if (sessionid == null) {
        swal({title: "You are not logged in", text: "Pleace log in to the System.", timer: 3000, showConfirmButton: false});
        setTimeout(function () {
            window.location.href = "../../";
        }, 3000);
    }

	$("#studentNameFeild").hide();

    //loard occupation types in to dropdowns
    $.ajax({
        type: "GET",
        url: baseURL + "student_ext_managment/DiseasesService.php/diseases",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.diseases.length; i++) {
                $("#stu_para3").append("<option value=\"" + resp.diseases[i].dis_id + "\" >" + resp.diseases[i].dis_name+ "      "+ resp.diseases[i].dis_explanation + "</option>");
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
						sweetAlert("Oops...", "This is an Invalid Student Admission Number!", "error");
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
                required: "Year of Discovering the Disease is Required",
                minlength: "You entered less than four digits",
				maxlength: "You entered more than four digits",
				number: "This can only contain numbers",
				range: "The year should be within the range 1970-2050"
            }
            
        },
        submitHandler: function (form) {
			
			if(isValidAddmissionNumber){
				
			   // alert(selected);
				var stu_para1 = $('#stu_para1').val();
				var stu_para2 = $('#stu_para2').val();
				var stu_para3 = $('#stu_para3').val();


				//Rgister Reccomendation details
				$.ajax({
					type: "POST",
					url: baseURL + "student_ext_managment/StudentDiseasesService.php/student_diseases_register",
					dataType: "json",
					data: {'stu_id':stu_para1, 'dis_found_year':stu_para2, 'dis_id':stu_para3},
					beforeSend: function (xhr) {
						xhr.setRequestHeader('Authorization', usr_api_key);
					},
					success: function (resp) {
						if(resp.error == false){
							sweetAlert("Success!", "Student Diseases Added Successfully!", "success");
						}else{
							sweetAlert("Oops...", "something wrong" + resp.message, "error");
						}
					},
					error: function (e) {
						sweetAlert("Oops...", "Something went wrong!" + e, "error");
					}
				});	
				
			}else{
				sweetAlert("Oops...", "Admission Number is Invalid", "error");
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
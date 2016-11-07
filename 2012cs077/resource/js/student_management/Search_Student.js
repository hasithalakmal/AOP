$(document).ready(function () {
    var sessionid = localStorage.getItem("usr_name");
    var usr_api_key = localStorage.getItem("usr_api_key");
    var baseURL = localStorage.getItem("baseURL");
	
	
	//to submit form need those things
	var isValidAddmissionNumber = false;
	var studentidNo = null;
	var stusertable = $("#StudentSearchResultByName").DataTable();



    if (sessionid == null) {
        swal({title: "You are not logged in", text: "Pleace loggin to the system.", timer: 3000, showConfirmButton: false});
        setTimeout(function () {
            window.location.href = "../../";
        }, 3000);
    }
	
	
	
	//to get dynamic view for searching
	$("#studentSearchingTable").hide();
	$("#studentNameFeild").hide();
	$("#studentNameFeild2").hide();
    $('#byadmnum').click(function(){
		$("#stuadmNumber").show();
		$("#studentNameFeild").hide();
		$("#studentSearchingTable").hide();
	});
	$('#byfulname').click(function(){
		$("#stuadmNumber").hide();
		$("#studentNameFeild2").hide();
		$("#studentNameFeild").show();
	});

   
	
	//loard details using student
	$("#stu_para2").keyup(function(){
		var studentid = $("#stu_para2").val();
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
						$("#studentNameFeild2").hide();
					}else{
						studentidNo = stuid;
						$("#stu_para4").val(stuname);
						$("#studentNameFeild2").show();
						isValidAddmissionNumber = true;
						
						

					}
				},
				error: function (e) {
					sweetAlert("Oops...", "Something went wrong!" + e, "error");
				}
			});
			
		
		}else if (studentid.length > 6){
			sweetAlert("Oops...", "This has more characters....", "error");
			$("#studentNameFeild2").hide();
		}else{
			$("#studentNameFeild2").hide();
		}
	});


	//for letters_and_space_fillstop_only - name with initials
	jQuery.validator.addMethod("letters_and_space_fulstop_only", function(value, element) {
		  return this.optional(element) || /^[a-zA-Z.\s]+$/i.test(value);
	}, "Letters only please"); 
	
	
    $("#studentSearchForm").validate({
        rules: {
			//students validations
            stu_para2: {
                required: true,
                minlength: 6,
				maxlength: 6,
				number: true
            },
			stu_para3: {
                required: true,
                minlength: 3,
				letters_and_space_fulstop_only : true,
				maxlength:500
            }
			
        },
        messages: {
			//student validations
            stu_para2: {
                required: "Student Admission Number Required",
                minlength: "You entered less than six digits",
				maxlength: "You entered more than six digits",
				number: "This can only contain numbers"
            },
			stu_para3: {
                required: "Student Name or a Part of the Name is Required",
                minlength: "This should have a minimum of three letters",
				letters_and_space_fulstop_only: "This should be a valid name. This can only contain letters, spaces and fulstops ONLY",
				maxlength:'This can only contain 500 characters'
            }
            
        },
        submitHandler: function (form) {
			
			var stu_para1 = $('input[name=stu_para1]:checked', '#studentSearchForm').val();
			var stu_para2 = $('#stu_para2').val();
			var stu_para3 = $('#stu_para3').val();
			if (stu_para1 == 'admno' ){
				
				if(isValidAddmissionNumber){
					$("#studentSearchingTable").hide();
					localStorage.setItem("StuProfileAddmisionNumber",stu_para2);
					localStorage.setItem("StuProfileIdNumber", studentidNo);
					window.location.href ="../stu_profile/student_profile.html";
				}else{
					sweetAlert("Oops...", "Admission Number is invalid", "error");
				}
				
			}else if (stu_para1 == 'stuname'){
				//Search student by name
					$.ajax({
						type: "GET",
						url: baseURL + "student_ext_managment/StudentService.php/student_by_name/"+stu_para3,
						dataType: "json",
						beforeSend: function (xhr) {
							xhr.setRequestHeader('Authorization', usr_api_key);
						},
						success: function (resp) {
							stusertable.destroy();
							$('#stuSerchTableBody').empty();
							if(resp.error == false){
								for (i = 0; i < resp.student.length; i++) {
									$("#stuSerchTableBody").append("<tr><td>" + resp.student[i].stu_admission_number + "</td><td>" + resp.student[i].stu_full_name + "</td><td>"
									+ resp.student[i].name1 + "</td><td>" +resp.student[i].name2 + "</td><td>" 
									+resp.student[i].name3 + "</td><td>" +resp.student[i].stu_gender + "</td><td>" 
									+resp.student[i].stu_date_of_birth + "</td><td>" +resp.student[i].stu_city + "</td></tr>" );
								}
								
								
								//to run data table
								stusertable = $("#StudentSearchResultByName").DataTable();
								$("#studentSearchingTable").show();
								console.log(resp);
							}else{
								sweetAlert("Oops...", "Something went wrong" + resp.message, "error");
							}
						},
						error: function (e) {
							sweetAlert("Oops...", "Something went wrong!" + e, "error");
						}
					});	
			}else{
				$("#studentSearchingTable").hide();
				sweetAlert("Oops...", "Pleace select ONLY ONE Option.", "error");
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
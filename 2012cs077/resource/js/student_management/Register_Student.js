$(document).ready(function () {
    var sessionid = localStorage.getItem("usr_name");
    var usr_api_key = localStorage.getItem("usr_api_key");
    var baseURL = localStorage.getItem("baseURL");
	
	
	//to submit form need those things
	var isValidSibling = false;
	var isValidAddmissionNumber = false;
	var father_id = null;
	var mother_id = null;
	var guardian_id = null;
	var sibling_id = null;
	
	var mot_para1 = 'null';
	var far_para1 = 'null';
	var gar_para1 = 'null';
	


    if (sessionid == null) {
        swal({title: "You are not logged in", text: "Pleace loggin to the system.", timer: 3000, showConfirmButton: false});
        setTimeout(function () {
            window.location.href = "../../";
        }, 3000);
    }


    //Datemask dd/mm/yyyy
    $("#datemask").inputmask("yyyy/mm/dd", {"placeholder": "yyyy/mm/dd"});

    //Money Euro
    $("[data-mask]").inputmask();

    //loard occupation types in to dropdowns
    $.ajax({
        type: "GET",
        url: baseURL + "student_guardiant_management/OccupationTypeService.php/occupation_types",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.occupation_type.length; i++) {
                $("#mot_para7").append("<option value=\"" + resp.occupation_type[i].occ_type_id + "\" >" + resp.occupation_type[i].occ_type_name +" "+resp.occupation_type[i].occ_type_description + "</option>");
                $("#far_para7").append("<option value=\"" + resp.occupation_type[i].occ_type_id + "\" >" + resp.occupation_type[i].occ_type_name +" "+resp.occupation_type[i].occ_type_description + "</option>");
                $("#gar_para7").append("<option value=\"" + resp.occupation_type[i].occ_type_id + "\" >" + resp.occupation_type[i].occ_type_name +" "+resp.occupation_type[i].occ_type_description + "</option>");
            }
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });


    //loard Schools types in to dropdown
    $.ajax({
        type: "GET",
        url: baseURL + "student_ext_managment/SchoolService.php/schools",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.schools.length; i++) {
                $("#stu_para11").append("<option value=\"" + resp.schools[i].sch_id + "\" >" + resp.schools[i].sch_name +" - "+ resp.schools[i].sch_situated_in+ "</option>");
            }
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });


    //loard desises in to chek group
    $.ajax({
        type: "GET",
        url: baseURL + "student_ext_managment/DiseasesService.php/diseases",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.diseases.length; i++) {
                $("#stu_para12").append("<div class=\"checkbox\"><label><input type=\"checkbox\" name= \"" + resp.diseases[i].dis_id + "\">" + resp.diseases[i].dis_name + "<label></label>" + resp.diseases[i].dis_explanation + "</label></div>");

            }
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });
    
    
    //loard classes  in to drop down
    $.ajax({
        type: "GET",
        url: baseURL + "students_class_managment/ClassService.php/classes",
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.classes.length; i++) {
                $("#stu_para1_1").append("<option value=\"" + resp.classes[i].clz_id + "\" >" + resp.classes[i].clz_grade +" - "+ resp.classes[i].clz_class+ "</option>");

            }
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });
	
	
	//loard details using student sibling id
	$("#stu_para13").keyup(function(){
		var siblingid = $("#stu_para13").val();
		if(siblingid.length == 6){
			//get sibling details
			$.ajax({
				type: "GET",
				url: baseURL + "student_ext_managment/StudentService.php/student/"+siblingid,
				dataType: "json",
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', usr_api_key);
				},
				success: function (resp) {
					var siblingid = resp.student.stu_id;
					if(siblingid == null || siblingid == ""){
						sweetAlert("Oops...", "This is invalid Sibling Admission Number!", "error");
					}else{
						//hide gardian section
						$("#gardiandetails").hide();
						

						//get sibling details
						var stu_land_phone_number = resp.student.stu_land_phone_number;
						var stu_mobile_number = resp.student.stu_mobile_number;
						var stu_address = resp.student.stu_address;
						var stu_city = resp.student.stu_city;
						var distance_to_home = resp.student.distance_to_home;
						
						isValidSibling = true;
						sibling_id = resp.student.stu_id
						father_id = resp.student.father_id;
						mother_id = resp.student.mother_id;
						guardian_id = resp.student.guardian_id;
						
						
						$("#stu_para6").val(stu_land_phone_number);
						$("#stu_para7").val(stu_mobile_number);
						$("#stu_para8").val(stu_address);
						$("#stu_para9").val(stu_city);
						$("#stu_para10").val(distance_to_home);
						
					}
				},
				error: function (e) {
					sweetAlert("Oops...", "Something went wrong!" + e, "error");
				}
			});
			
		
		}else if (siblingid.length > 6){
			sweetAlert("Oops...", "This has more characters....", "error");
			$("#gardiandetails").show();
			isValidSibling = false;
			sibling_id = null;
			father_id = null;
			mother_id = null;
			guardian_id = null;
			$("#stu_para6").val('');
			$("#stu_para7").val('');
			$("#stu_para8").val('');
			$("#stu_para9").val('');
			$("#stu_para10").val('');
		}else{
			//show gardian section
			$("#gardiandetails").show();
			isValidSibling = false;
			sibling_id = null;
			father_id = null;
			mother_id = null;
			guardian_id = null;
			$("#stu_para6").val('');
			$("#stu_para7").val('');
			$("#stu_para8").val('');
			$("#stu_para9").val('');
			$("#stu_para10").val('');
		}
	});

	
	
	$("#stu_para1").keyup(function(){

		var studentID = $("#stu_para1").val();
		
		if (studentID.length <6 ){
			
		}else if (studentID.length ==6){
			//loard occupation types in to dropdowns
			$.ajax({
				type: "GET",
				url: baseURL + "student_ext_managment/StudentService.php/student/"+studentID,
				dataType: "json",
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', usr_api_key);
				},
				success: function (resp) {
					var resAddNo = resp.student.stu_admission_number;
					if (resAddNo == null || resAddNo == ''){
						isValidAddmissionNumber = true;
					}else{
						isValidAddmissionNumber = false;
						sweetAlert("Oops...", "This Admission Number already exists", "error");
					}
				},
				error: function (e) {
					sweetAlert("Oops...", "Something went wrong!" + e, "error");
				}
			});
		}else{
			
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
			stu_para1_2: {
                required: true,
                minlength: 4,
				maxlength: 4,
				number: true,
				range: [1970, 2050]
            },
            stu_para2: {
                required: true,
                minlength: 4,
				letters_and_space_only: true,
				maxlength:500
				
            },
            stu_para3: {
                required: true,
                minlength: 4,
				letters_and_space_fulstop_only : true,
				maxlength:500
            },
            stu_para5: {
                required: true
            },
			stu_para13: {
                minlength: 6,
				maxlength: 6,
				number: true
            },
			stu_para8: {
				required: true,
                minlength: 5,
				maxlength:500
            },
			stu_para6: {
                phone_numbers: true
            },
			stu_para7: {
                phone_numbers: true
            },
			stu_para10: {
                number: true,
				range: [0, 200]
            },
			stu_para14: {
                minlength: 4,
				maxlength: 4,
				number: true,
				range: [1970, 2050]
            },
			
			
			
			
			
			//mothers validations
			mot_para1: {
                minlength: 4,
				letters_and_space_fulstop_only: true,
				maxlength:500
				
            },
			mot_para2: {
                phone_numbers: true
            },
			mot_para4: {
                email: true
            },
			mot_para5: {
                nic_numbers: true
            },
			mot_para9: {
                phone_numbers: true
            },
			mot_para10: {
                minlength: 6,
				maxlength: 6,
				number: true
            },
			
			
			//fathers validations
			far_para1: {
                minlength: 4,
				letters_and_space_fulstop_only: true,
				maxlength:500
				
            },
			far_para2: {
                phone_numbers: true
            },
			far_para4: {
                email: true
            },
			far_para5: {
                nic_numbers: true
            },
			far_para9: {
                phone_numbers: true
            },
			far_para10: {
                minlength: 6,
				maxlength: 6,
				number: true
            },
			
			
			//gardian validations
			gar_para1: {
                minlength: 4,
				letters_and_space_fulstop_only: true,
				maxlength:500
				
            },
			gar_para2: {
                phone_numbers: true
            },
			gar_para4: {
                email: true
            },
			gar_para5: {
                nic_numbers: true
            },
			gar_para9: {
                phone_numbers: true
            },
			gar_para10: {
                minlength: 6,
				maxlength: 6,
				number: true
            },
			
			
			//only contain max length
			stu_para9: {
				maxlength:45
            },
			
			
			mot_para3: {
				maxlength:500
            },
			mot_para4: {
				maxlength:500
            },
			mot_para6: {
				maxlength:500
            },
			mot_para8: {
				maxlength:500
            },
			mot_para13: {
				maxlength:500
            },
            
			
			far_para3: {
				maxlength:500
            },
			far_para4: {
				maxlength:500
            },
			far_para6: {
				maxlength:500
            },
			far_para8: {
				maxlength:500
            },
			far_para13: {
				maxlength:500
            },
			
			
			gar_para3: {
				maxlength:500
            },
			gar_para4: {
				maxlength:500
            },
			gar_para6: {
				maxlength:500
            },
			gar_para8: {
				maxlength:500
            },
			gar_para13: {
				maxlength:500
            }
			
        },
        messages: {
			//student validations
            stu_para1: {
                required: "Admission Number required",
                minlength: "You entered less than six digits",
				maxlength: "You entered more than six digits",
				number: "This can only contain numbers"
            },
			stu_para1_2: {
                required: "Admission Year required",
                minlength: "You entered less than four digits",
				maxlength: "You entered more than four digits",
				number: "This can only contain numbers",
				range: "The year should be within the range 1970-2050"
            },
            stu_para2: {
                required: "Student Full Name is required",
                minlength: "This should contain a minimum of four letters",
				letters_and_space_only: "This can only contain letters",
				maxlength:'This can only contain 500 characters'
				
            },
            stu_para3: {
                required: "Name with initials is required",
                minlength: "This should have a minimum of four letters",
				letters_and_space_fulstop_only: "This should be a valid name",
				maxlength:'This can only contain 500 characters'
            },
            stu_para5: {
                required: "Date of birth is required"
            },
			stu_para13: {
                minlength: "You entered less than six characters",
				maxlength: "You entered more than six characters",
				number: "This can only contain numbers"
            },
			stu_para8: {
               required: "Address is required",
               minlength: "This should have a minimum of five letters",
			   maxlength:'This can only contain 500 characters'
            },
			stu_para6: {
                phone_numbers: "This should be a valid phone number"
            },
            stu_para7: {
                phone_numbers: "This should be a valid phone number"
            },
			stu_para10: {
                number: "This should be a number",
				range: "This should be within the range 0-200"
            },
            
			stu_para14: {
                minlength: "You entered less than four characters",
				maxlength: "You entered more than four characters",
				number: "This should only contain numbers",
				range: "This should be within the range 1970-2050"
            },
			
			
			
			
			//mothers validations
			mot_para1: {
                minlength: "This should contain a minimum of four characters",
				letters_and_space_fulstop_only: "This can only contain letters",
				maxlength:"This can only contain 500 characters"
				
            },
			mot_para2: {
                phone_numbers: "You entered an invalid Phone Number"
            },
			mot_para4: {
                email: "You eneterd an invalid Email"
            },
			mot_para5: {
                nic_numbers: "You entered an invalid NIC"
            },
			mot_para9: {
                phone_numbers: "You entered an invalid Phone Number"
            },
			mot_para10: {
                minlength: "You entered less than six digits",
				maxlength: "You entered more than six digits",
				number: "This should contain only numbers"
            },
			
			
			
			//Fathers validations
			far_para1: {
                minlength: "This should have a minimum of four characters",
				letters_and_space_fulstop_only: "This can only contain letters",
				maxlength:"This can only contain 500 characters"
				
            },
			far_para2: {
                phone_numbers: "You entered an invalid Phone Number"
            },
			far_para4: {
                email: "You eneterd an invalid Email"
            },
			far_para5: {
                nic_numbers: "You entered an invalid NIC"
            },
			far_para9: {
                phone_numbers: "You entered an invalid Phone Number"
            },
			far_para10: {
                minlength: "You entered less than six digits",
				maxlength: "You entered more than six digits",
				number: "This should contain only numbers"
            },
			
			
			
			//gardian validations
			gar_para1: {
                minlength: "This should have a minimum of four characters",
				letters_and_space_fulstop_only: "This can only contain letters",
				maxlength:"This can only contain 500 characters"
				
            },
			gar_para2: {
                phone_numbers: "You entered an invalid Phone Number"
            },
			gar_para4: {
                email: "You eneterd an invalid Email"
            },
			gar_para5: {
                nic_numbers: "You entered an invalid NIC"
            },
			gar_para9: {
                phone_numbers: "You entered an invalid Phone Number"
            },
			gar_para10: {
                minlength: "You entered less than six digits",
				maxlength: "You entered more than six digits",
				number: "This should contain only numbers"
            },
			
			
			
			//only contain max length
			stu_para9: {
				maxlength:"This can only contain 45 characters"
            },
			
			
			mot_para3: {
				maxlength:"This can only contain 500 characters"
            },
			mot_para4: {
				maxlength:"This can only contain 500 characters"
            },
			mot_para6: {
				maxlength:"This can only contain 500 characters"
            },
			mot_para8: {
				maxlength:"This can only contain 500 characters"
            },
			mot_para13: {
				maxlength:"This can only contain 500 characters"
            },
            
			
			far_para3: {
				maxlength:"This can only contain 500 characters"
            },
			far_para4: {
				maxlength:"This can only contain 500 characters"
            },
			far_para6: {
				maxlength:"This can only contain 500 characters"
            },
			far_para8: {
				maxlength:"This can only contain 500 characters"
            },
			far_para13: {
				maxlength:"This can only contain 500 characters"
            },
			
			
			gar_para3: {
				maxlength:"This can only contain 500 characters"
            },
			gar_para4: {
				maxlength:"This can only contain 500 characters"
            },
			gar_para6: {
				maxlength:"This can only contain 500 characters"
            },
			gar_para8: {
				maxlength:"This can only contain 500 characters"
            },
			gar_para13: {
				maxlength:"This can only contain 500 characters"
            }
			
            
            
        },
        submitHandler: function (form) {
			
			if(isValidAddmissionNumber){
				
				 var diseses = [];
				 $('#stu_para12 input:checked').each(function() {
						diseses.push($(this).attr('name'));
				 });
				
			   // alert(selected);
				var stu_para1 = $('#stu_para1').val();
				var stu_para2 = $('#stu_para2').val();
				var stu_para3 = $('#stu_para3').val();
				var stu_para4 = $('input[name=stu_para4]:checked', '#studentRegistrationForm').val();
				var stu_para5 = $('#stu_para5').val();
				var stu_para6 = $('#stu_para6').val();
				var stu_para7 = $('#stu_para7').val();
				var stu_para8 = $('#stu_para8').val();
				var stu_para9 = $('#stu_para9').val();
				var stu_para10 = $('#stu_para10').val();
				var stu_para11 = $('#stu_para11').val();
				var stu_para12 = diseses;
				var stu_para14 = $('#stu_para14').val();
				var stu_para1_1 = $('#stu_para1_1').val();
				var stu_para1_2 = $('#stu_para1_2').val();
				
				if(! isValidSibling){
					
					
					var mot_para1 = $('#mot_para1').val(); 
					var mot_para2 = $('#mot_para2').val(); 
					var mot_para3 = $('#mot_para3').val(); 
					var mot_para4 = $('#mot_para4').val(); 
					var mot_para5 = $('#mot_para5').val(); 
					var mot_para6 = $('#mot_para6').val(); 
					var mot_para7 = $('#mot_para7').val(); 
					var mot_para8 = $('#mot_para8').val(); 
					var mot_para9 = $('#mot_para9').val(); 
					var mot_para10 = $('#mot_para10').val(); 
					var mot_para11 = $('#mot_para11').val(); 
					var mot_para12 = $('#mot_para12').val(); 
					var mot_para13 = $('#mot_para13').val();
					
					var far_para1 = $('#far_para1').val(); 
					var far_para2 = $('#far_para2').val(); 
					var far_para3 = $('#far_para3').val(); 
					var far_para4 = $('#far_para4').val(); 
					var far_para5 = $('#far_para5').val(); 
					var far_para6 = $('#far_para6').val(); 
					var far_para7 = $('#far_para7').val(); 
					var far_para8 = $('#far_para8').val(); 
					var far_para9 = $('#far_para9').val(); 
					var far_para10 = $('#far_para10').val(); 
					var far_para11 = $('#far_para11').val(); 
					var far_para12 = $('#far_para12').val(); 
					var far_para13 = $('#far_para13').val(); 
					
					var gar_para1 = $('#gar_para1').val(); 
					var gar_para2 = $('#gar_para2').val(); 
					var gar_para3 = $('#gar_para3').val(); 
					var gar_para4 = $('#gar_para4').val(); 
					var gar_para5 = $('#gar_para5').val(); 
					var gar_para6 = $('#gar_para6').val(); 
					var gar_para7 = $('#gar_para7').val(); 
					var gar_para8 = $('#gar_para8').val(); 
					var gar_para9 = $('#gar_para9').val(); 
					var gar_para10 = $('#gar_para10').val(); 
					var gar_para11 = $('#gar_para11').val(); 
					var gar_para12 = $('#gar_para12').val(); 
					var gar_para13 = $('#gar_para13').val(); 
					
					//register mothers details
					$.ajax({
						type: "POST",
						url: baseURL + "student_guardiant_management/MotherService.php/mother_register",
						dataType: "json",
						data: {'mot_name': mot_para1, 'mot_phone_number':mot_para2, 'mot_adress':mot_para3, 'mot_email_address':mot_para4, 'mot_occupation':mot_para6, 'mot_occupation_type':mot_para7, 'mot_office_address':mot_para8, 'mot_office_phone_number':mot_para9, 'mot_stu_addmision_number':mot_para10, 'mot_old_student_number':mot_para11, 'mot_other_interactions_with_dp':mot_para13, 'mot_nic':mot_para5, 'mot_tea_id':mot_para12  },
						beforeSend: function (xhr) {
							xhr.setRequestHeader('Authorization', usr_api_key);
						},
						success: function (resp) {
							console.log(resp);
							mother_id = resp.message;
							
							//register fathers details
							$.ajax({
								type: "POST",
								url: baseURL + "student_guardiant_management/FatherService.php/father_register",
								dataType: "json",
								data: {'far_name': far_para1, 'far_phone_number':far_para2, 'far_adress':far_para3, 'far_email_address':far_para4, 'far_occupation':far_para6, 'far_occupation_type':far_para7, 'far_office_address':far_para8, 'far_office_phone_number':far_para9, 'far_stu_addmision_number':far_para10, 'far_old_student_number':far_para11, 'far_other_interactions_with_dp':far_para13, 'far_nic':far_para5, 'far_tea_id':far_para12 },
								beforeSend: function (xhr) {
									xhr.setRequestHeader('Authorization', usr_api_key);
								},
								success: function (resp) {
									console.log(resp);
									father_id = resp.message;
									
										//register gardians details
										$.ajax({
											type: "POST",
											url: baseURL + "student_guardiant_management/GuardianService.php/guardian_register",
											dataType: "json",
											data: {'gur_name':gar_para1, 'gur_phone_number':gar_para2, 'gur_adress':gar_para3, 'gur_email_address':gar_para4, 'gur_occupation':gar_para5, 'gur_occupation_type':gar_para6, 'gur_office_address':gar_para7, 'gur_office_phone_number':gar_para8, 'gur_stu_addmision_number':gar_para9, 'gur_old_student_number':gar_para10, 'gur_other_interactions_with_dp':gar_para11, 'gur_nic':gar_para12, 'gur_tea_id':gar_para13 },
											beforeSend: function (xhr) {
												xhr.setRequestHeader('Authorization', usr_api_key);
											},
											success: function (resp) {
												console.log(resp);
												guardian_id = resp.message;
												
													//insert data into student table
													$.ajax({
														type: "POST",
														url: baseURL + "student_ext_managment/StudentService.php/student_register",
														dataType: "json",
														data: {'stu_admission_number':stu_para1, 'stu_full_name':stu_para2, 'stu_name_with_initisals':stu_para3,
														'stu_gender':stu_para4, 'stu_date_of_birth':stu_para5, 'stu_land_phone_number':stu_para6, 'stu_mobile_number':stu_para7,
														'stu_address':stu_para8, 'stu_city':stu_para9, 'distance_to_home':stu_para10, 'father_id':father_id, 
														'mother_id':mother_id, 'guardian_id':guardian_id},
														beforeSend: function (xhr) {
															xhr.setRequestHeader('Authorization', usr_api_key);
														},
														success: function (resp) {
															
															
															console.log(resp);
															var student_id = resp.message;
														/*	//insert siblings
															$.ajax({
																type: "POST",
																url: baseURL + "student_guardiant_management/SiblingsService.php/siblings_register",
																dataType: "json",
																data:{'stu_id':student_id , 'slib_id':sibling_id},
																beforeSend: function (xhr) {
																	xhr.setRequestHeader('Authorization', usr_api_key);
																},
																success: function (resp) {
																	console.log(resp);*/

																	//insert school in to talbe
																	$.ajax({
																		type: "POST",
																		url: baseURL + "student_ext_managment/StudentSchoolService.php/student_school_register",
																		dataType: "json",
																		data:{'stu_id':student_id , 'sch_id':stu_para11, 'attend_year':stu_para14},
																		beforeSend: function (xhr) {
																			xhr.setRequestHeader('Authorization', usr_api_key);
																		},
																		success: function (resp) {
																			console.log(resp);
																			
																			//student class register
																							$.ajax({
																								type: "POST",
																								url: baseURL + "students_class_managment/StudentClassService.php/student_class_register",
																								dataType: "json",
																								data:{'stu_id':student_id , 'clz_id':stu_para1_1, 'year':stu_para1_2},
																								beforeSend: function (xhr) {
																									xhr.setRequestHeader('Authorization', usr_api_key);
																								},
																								success: function (resp) {
																									console.log(resp);

																										
																										for(i=0; i<diseses.length; i++){
																											//loard occupation types in to dropdowns
																												$.ajax({
																													type: "POST",
																													url: baseURL + "student_ext_managment/StudentDiseasesService.php/student_diseases_register",
																													dataType: "json",
																													data:{'stu_id':student_id , 'dis_id':diseses[i]},
																													beforeSend: function (xhr) {
																														xhr.setRequestHeader('Authorization', usr_api_key);
																													},
																													success: function (resp) {
																														console.log(resp);
																															
																														
																														
																													//error of diseses registration	
																													},
																													error: function (e) {
																														sweetAlert("Oops...", "Something went wrong!" + e, "error");
																													}
																												});
																										}

																							//stu class
																								},
																								error: function (e) {
																									sweetAlert("Oops...", "Something went wrong!" + e, "error");
																								}
																							});
																							
																							
																							
																			
																			sweetAlert("Success!", "Student Registration Successful", "success");
																			$( '#studentRegistrationForm' ).each(function(){
																				this.reset();
																			});	
																			
																			
																			
																			
																			
																		//error of student_school registration	
																		},
																		error: function (e) {
																			sweetAlert("Oops...", "Something went wrong!" + e, "error");
																		}
																	});

																	
																	
																	
																	
																	
																	
																//error of sibling registration	
															/*	},
																error: function (e) {
																	sweetAlert("Oops...", "Something went wrong!" + e, "error");
																}
															});*/
															
															
															
															
															
														//error of student registration	
														},
														error: function (e) {
															sweetAlert("Oops...", "Something went wrong!" + e, "error");
														}
													});
												
												
												
												
											//error of gardian registering
											},
											error: function (e) {
												sweetAlert("Oops...", "Something went wrong!" + e, "error");
											}
										});
									
									
									
									
								//error of father registering		
								},
								error: function (e) {
									sweetAlert("Oops...", "Something went wrong!" + e, "error");
								}
							});
						
						
						//error of mother registering	
						},
						error: function (e) {
							sweetAlert("Oops...", "Something went wrong!" + e, "error");
						}
					});
					

					
				}else{
					
					//insert data into student table
					$.ajax({
						type: "POST",
						url: baseURL + "student_ext_managment/StudentService.php/student_register",
						dataType: "json",
						data: {'stu_admission_number':stu_para1, 'stu_full_name':stu_para2, 'stu_name_with_initisals':stu_para3,
						'stu_gender':stu_para4, 'stu_date_of_birth':stu_para5, 'stu_land_phone_number':stu_para6, 'stu_mobile_number':stu_para7,
						'stu_address':stu_para8, 'stu_city':stu_para9, 'distance_to_home':stu_para10, 'father_id':father_id, 
						'mother_id':mother_id, 'guardian_id':guardian_id},
						beforeSend: function (xhr) {
							xhr.setRequestHeader('Authorization', usr_api_key);
						},
						success: function (resp) {
							console.log(resp);
							var student_id = resp.message;
							//insert siblings
							$.ajax({
								type: "POST",
								url: baseURL + "student_guardiant_management/SiblingsService.php/siblings_register",
								dataType: "json",
								data:{'stu_id':student_id , 'slib_id':sibling_id},
								beforeSend: function (xhr) {
									xhr.setRequestHeader('Authorization', usr_api_key);
								},
								success: function (resp) {
									console.log(resp);
									//insert school in to talbe
									$.ajax({
										type: "POST",
										url: baseURL + "student_ext_managment/StudentSchoolService.php/student_school_register",
										dataType: "json",
										data:{'stu_id':student_id , 'sch_id':stu_para11, 'attend_year':stu_para14},
										beforeSend: function (xhr) {
											xhr.setRequestHeader('Authorization', usr_api_key);
										},
										success: function (resp) {
											console.log(resp);
											
											//student class register
															$.ajax({
																type: "POST",
																url: baseURL + "students_class_managment/StudentClassService.php/student_class_register",
																dataType: "json",
																data:{'stu_id':student_id , 'clz_id':stu_para1_1, 'year':stu_para1_2},
																beforeSend: function (xhr) {
																	xhr.setRequestHeader('Authorization', usr_api_key);
																},
																success: function (resp) {
																	//stu class
																	console.log(resp);
																	
																		for(i=0; i<diseses.length; i++){
																			//loard occupation types in to dropdowns
																				$.ajax({
																					type: "POST",
																					url: baseURL + "student_ext_managment/StudentDiseasesService.php/student_diseases_register",
																					dataType: "json",
																					data:{'stu_id':student_id , 'dis_id':diseses[i]},
																					beforeSend: function (xhr) {
																						xhr.setRequestHeader('Authorization', usr_api_key);
																					},
																					success: function (resp) {
																						console.log(resp);
																							
																					//error of diseses registration	
																					},
																					error: function (e) {
																						sweetAlert("Oops...", "Something went wrong!" + e, "error");
																					}
																				});
																		}
																		
											

																},
																error: function (e) {
																	sweetAlert("Oops...", "Something went wrong!" + e, "error");
																}
															});
															
															
															
															
											
													sweetAlert("Success!", "Student Registration Successful", "success");
													$( '#studentRegistrationForm' ).each(function(){
														this.reset();
													});
													
											
											
											
											
											
										//error of student_school registration	
										},
										error: function (e) {
											sweetAlert("Oops...", "Something went wrong!" + e, "error");
										}
									});

									
									
									
									
									
									
								//error of sibling registration	
								},
								error: function (e) {
									sweetAlert("Oops...", "Something went wrong!" + e, "error");
								}
							});
							
							
							
							
							
						//error of student registration	
						},
						error: function (e) {
							sweetAlert("Oops...", "Something went wrong!" + e, "error");
						}
					});
					
				}
			

				
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
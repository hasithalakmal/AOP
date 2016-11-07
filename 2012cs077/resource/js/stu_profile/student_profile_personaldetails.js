$(document).ready(function () {

	var sessionid = localStorage.getItem("usr_name");
    var usr_api_key = localStorage.getItem("usr_api_key");
    var baseURL = localStorage.getItem("baseURL");
	
    if (sessionid == null) {
        swal({title: "You are not logged in", text: "Pleace loggin to the system.", timer: 3000, showConfirmButton: false});
        setTimeout(function () {
            window.location.href = "../../";
        }, 3000);
    }

    var StuProfileIdNumber = localStorage.getItem("StuProfileIdNumber");
    var StuProfileAddmisionNumber = localStorage.getItem("StuProfileAddmisionNumber");
	
	var sturestable = $("#StudentSearchResultByName").DataTable();
	
	var dataset_guna_1 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_2 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_3 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_4 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_5 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_6 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_7 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_8 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_9 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_10 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_11 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_12 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_13 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_14 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_15 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_16 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_17 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_18 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_19 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	var dataset_guna_20 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	
	var dataset_after_school_1 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_after_school_2 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_after_school_3 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_after_school_4 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_after_school_5 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_after_school_6 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_after_school_7 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	
	var dataset_tv_programmes_1 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_2 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_3 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_4 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_5 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_6 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_7 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_8 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_9 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_10 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_tv_programmes_11 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	
	var dataset_readings_1 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_readings_2 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_readings_3 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_readings_4 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_readings_5 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_readings_6 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	
	var dataset_responsibilities_1 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_2 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_3 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_4 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_5 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_6 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_7 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_8 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_9 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_responsibilities_10 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	
	var dataset_home_behavior_1 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_home_behavior_2 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_home_behavior_3 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_home_behavior_4 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_home_behavior_5 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	
	var dataset_talents_1 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_2 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_3 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_4 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_5 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_6 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_7 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_8 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_9 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_talents_10 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	
	var dataset_facilities_1 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_2 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_3 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_4 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_5 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_6 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_7 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_8 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_9 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_facilities_10 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];

	var dataset_family_details_1 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_2 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_3 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_4 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_5 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_6 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_7 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_8 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_9 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_10 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	var dataset_family_details_11 = ['NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA','NA'];
	
	

	//loard student personal details and thurnusaviya details
    $.ajax({
        type: "GET",
        url: baseURL + "student_ext_managment/StudentProfileService.php/student_personal_and_thurunusaviya/"+StuProfileAddmisionNumber,
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            if(resp.student.stu_admission_number != null){
				$('#studentPersonalDetails').append("<tr><td colspan='2' align='center' bgcolor='#3c8dbc' ><h3 style='color:white' >දරුවා පිලිබඳ තොරතුරු</h3></td></tr>");
				
				if(resp.student.stu_full_name != null){
					$('#studentPersonalDetails').append("<tr><td>සම්පුර්ණ නම</td><td>"+resp.student.stu_full_name+"</td></tr>");
				}
				if(resp.student.stu_name_with_initisals != null){
					$('#studentPersonalDetails').append("<tr><td>මුලකුරු සමග නම</td><td>"+resp.student.stu_name_with_initisals+"</td></tr>");
				}
				if(resp.student.stu_gender != null){
					$('#studentPersonalDetails').append("<tr><td>ස්ත්‍රී පුරුෂ භාවය</td><td>"+resp.student.stu_gender+"</td></tr>");
				}
				if(resp.student.stu_date_of_birth != null){
					$('#studentPersonalDetails').append("<tr><td>උපන් දිනය</td><td>"+resp.student.stu_date_of_birth+"</td></tr>");
				}
				if(resp.student.stu_land_phone_number != null){
					$('#studentPersonalDetails').append("<tr><td>ස්ථාවර දුරකථන අංකය</td><td>"+resp.student.stu_land_phone_number+"</td></tr>");
				}
				if(resp.student.stu_mobile_number != null){
					$('#studentPersonalDetails').append("<tr><td>ජංගම දුරකථන අංකය</td><td>"+resp.student.stu_mobile_number+"</td></tr>");
				}
				if(resp.student.stu_address != null){
					$('#studentPersonalDetails').append("<tr><td>ස්ථිර පදිංචි ලිපිනය</td><td>"+resp.student.stu_address+"</td></tr>");
				}
				if(resp.student.stu_city != null){
					$('#studentPersonalDetails').append("<tr><td>නගරය</td><td>"+resp.student.stu_city+"</td></tr>");
				}
				if(resp.student.distance_to_home != null){
					$('#studentPersonalDetails').append("<tr><td>නිවසේ සිට දහම්පසලට ඇති දුර</td><td>"+resp.student.distance_to_home+"</td></tr>");
				}
				if(resp.student.stu_email_address != null){
					$('#studentPersonalDetails').append("<tr><td>විද්‍යුත් තැපෑල</td><td>"+resp.student.stu_email_address+"</td></tr>");
				}
				if(resp.student.stu_nic_number != null){
					$('#studentPersonalDetails').append("<tr><td>ජාතික හැඳුනුම්පත් අංකය</td><td>"+resp.student.stu_nic_number+"</td></tr>");
				}
				
				//loard schools
				$.ajax({
					type: "GET",
					url: baseURL + "student_ext_managment/StudentProfileService.php/student_schools/"+StuProfileAddmisionNumber,
					dataType: "json",
					beforeSend: function (xhr) {
						xhr.setRequestHeader('Authorization', usr_api_key);
					},
					success: function (resp2) {
						var school = "";
						for (i = 0; i < resp2.student_schools.length; i++) {
							if(resp2.student_schools[i].leave_year == null){
								school = school + resp2.student_schools[i].sch_name  +" - "+resp2.student_schools[i].sch_situated_in+"("+resp2.student_schools[i].attend_year+" වසරේ සිට  වර්තමානය දක්වා ) <br>";
							}else{
								school = school + resp2.student_schools[i].sch_name  +" - "+resp2.student_schools[i].sch_situated_in+"("+resp2.student_schools[i].attend_year+" වසරේ සිට "+resp2.student_schools[i].leave_year+" දක්වා ) <br>";
							}
						}
						if(school != null){
							$('#studentPersonalDetails').append("<tr><td>දිනපතා පාසල </td><td>"+school+"</td></tr>");
						}
						
						
						
						//loard desises of the student
						$.ajax({
							type: "GET",
							url: baseURL + "student_ext_managment/StudentProfileService.php/student_diseases/"+StuProfileAddmisionNumber,
							dataType: "json",
							beforeSend: function (xhr) {
								xhr.setRequestHeader('Authorization', usr_api_key);
							},
							success: function (resp3) {
								var disieses = null;
								for (i = 0; i < resp3.student_diseases.length; i++) {
									disieses = disieses + resp3.student_diseases[i].dis_name+" - "+resp3.student_diseases[i].dis_explanation + " - වර්ෂ " + resp3.student_diseases[i].dis_found_year+ " සිට </br>";
								}
								if(disieses != null){
									$('#studentPersonalDetails').append("<tr><td>දරුවා සතු විශේෂ රෝගාභාධ </td><td>"+disieses+"</td></tr>");
								}
								
								//father details appending
								if(resp.student.far_name != null){
									$('#studentPersonalDetails').append("<tr><td colspan='2' align='center' bgcolor='#3c8dbc' ><h3 style='color:white' >පියා පිලිබඳ තොරතුරු</h3></td></tr>");
									$('#studentPersonalDetails').append("<tr><td>පියාගේ සම්පුර්ණ නම</td><td>"+resp.student.far_name+"</td></tr>");
									
									if(resp.student.far_phone_number != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ දුරකථන අංකය</td><td>"+resp.student.far_phone_number+"</td></tr>");
									}
									if(resp.student.far_adress != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ  ලිපිනය</td><td>"+resp.student.far_adress+"</td></tr>");
									}
									if(resp.student.far_email_address != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ විද්‍යුත් තැපෑල</td><td>"+resp.student.far_email_address+"</td></tr>");
									}
									if(resp.student.far_occupation != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ  රැකියාව</td><td>"+resp.student.far_occupation+"</td></tr>");
									}
									if(resp.student.far_occ_type_name != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ  රැකියා කාණ්ඩය</td><td>"+resp.student.far_occ_type_name+" - "+resp.student.far_occ_type_description+"</td></tr>");
									}
									if(resp.student.far_office_address != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ රාජකාරී ලිපිනය</td><td>"+resp.student.far_office_address+"</td></tr>");
									}
									if(resp.student.far_office_phone_number != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ රාජකාරී  දුරකථන අංකය</td><td>"+resp.student.far_office_phone_number+"</td></tr>");
									}
									if(resp.student.far_other_interactions_with_dp != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ දහම්පාසල සමග ඇති සම්බන්ධතා</td><td>"+resp.student.far_other_interactions_with_dp+"</td></tr>");
									}
									if(resp.student.far_stu_addmision_number != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ  ශිෂ්‍ය ඇතුලත් වීමේ අංකය</td><td>"+resp.student.far_stu_addmision_number+"</td></tr>");
									}
									if(resp.student.far_old_student_number != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ ආදිශිෂ්‍ය අංකය</td><td>"+resp.student.far_old_student_number+"</td></tr>");
									}
									if(resp.student.far_nic != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ  ජාතික හැඳුනුම්පත් අංකය</td><td>"+resp.student.far_nic+"</td></tr>");
									}
									if(resp.student.far_tea_id != null){
										$('#studentPersonalDetails').append("<tr><td>පියාගේ  දහම්පාසල් ගුරු ලියාපදිංචි අංකය</td><td>"+resp.student.far_tea_id+"</td></tr>");
									}
								}
								//mother details appending
								if(resp.student.mot_name != null){
									$('#studentPersonalDetails').append("<tr><td colspan='2' align='center' bgcolor='#3c8dbc' ><h3 style='color:white' >මව පිලිබඳ තොරතුරු</h3></td></tr>");
									$('#studentPersonalDetails').append("<tr><td>මවගේ සම්පුර්ණ නම</td><td>"+resp.student.mot_name+"</td></tr>");
									
									if(resp.student.mot_phone_number != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  දුරකථන අංකය</td><td>"+resp.student.mot_phone_number+"</td></tr>");
									}
									if(resp.student.mot_adress != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  ලිපිනය</td><td>"+resp.student.mot_adress+"</td></tr>");
									}
									if(resp.student.mot_email_address != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  විද්‍යුත් තැපෑල</td><td>"+resp.student.mot_email_address+"</td></tr>");
									}
									if(resp.student.mot_occupation != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  රැකියාව</td><td>"+resp.student.mot_occupation+"</td></tr>");
									}
									if(resp.student.mot_occ_type_name != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  රැකියා කාණ්ඩය</td><td>"+resp.student.mot_occ_type_name+" - "+resp.student.mot_occ_type_description+"</td></tr>");
									}
									if(resp.student.mot_office_address != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  රාජකාරී ලිපිනය</td><td>"+resp.student.mot_office_address+"</td></tr>");
									}
									if(resp.student.mot_office_phone_number != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  රාජකාරී  දුරකථන අංකය</td><td>"+resp.student.mot_office_phone_number+"</td></tr>");
									}
									if(resp.student.mot_other_interactions_with_dp != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  දහම්පාසල සමග ඇති සම්බන්ධතා</td><td>"+resp.student.mot_other_interactions_with_dp+"</td></tr>");
									}
									if(resp.student.mot_stu_addmision_number != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  ශිෂ්‍ය ඇතුලත් වීමේ අංකය</td><td>"+resp.student.mot_stu_addmision_number+"</td></tr>");
									}
									if(resp.student.mot_old_student_number != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  ආදිශිෂ්‍ය අංකය</td><td>"+resp.student.mot_old_student_number+"</td></tr>");
									}
									if(resp.student.mot_nic != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ  ජාතික හැඳුනුම්පත් අංකය</td><td>"+resp.student.mot_nic+"</td></tr>");
									}
									if(resp.student.mot_tea_id != null){
										$('#studentPersonalDetails').append("<tr><td>මවගේ   දහම්පාසල් ගුරු ලියාපදිංචි අංකය</td><td>"+resp.student.mot_tea_id+"</td></tr>");
									}
								}
								//gurdian details appending
								if(resp.student.gur_name != null){
									$('#studentPersonalDetails').append("<tr><td colspan='2' align='center' bgcolor='#3c8dbc' ><h3 style='color:white' >භාරකරු පිලිබඳ තොරතුරු</h3></td></tr>");
									$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ සම්පුර්ණ නම</td><td>"+resp.student.gur_name+"</td></tr>");
									
									if(resp.student.gur_phone_number != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  දුරකථන අංකය</td><td>"+resp.student.gur_phone_number+"</td></tr>");
									}
									if(resp.student.gur_adress != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  ලිපිනය</td><td>"+resp.student.gur_adress+"</td></tr>");
									}
									if(resp.student.gur_email_address != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ   විද්‍යුත් තැපෑල</td><td>"+resp.student.gur_email_address+"</td></tr>");
									}
									if(resp.student.gur_occupation != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  රැකියාව</td><td>"+resp.student.gur_occupation+"</td></tr>");
									}
									if(resp.student.gur_occ_type_name != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  රැකියා කාණ්ඩය</td><td>"+resp.student.gur_occ_type_name+" - "+resp.student.gur_occ_type_description+"</td></tr>");
									}
									if(resp.student.gur_office_address != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  රාජකාරී ලිපිනය</td><td>"+resp.student.gur_office_address+"</td></tr>");
									}
									if(resp.student.gur_office_phone_number != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  රාජකාරී  දුරකථන අංකය</td><td>"+resp.student.gur_office_phone_number+"</td></tr>");
									}
									if(resp.student.gur_other_interactions_with_dp != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  දහම්පාසල සමග ඇති සම්බන්ධතා</td><td>"+resp.student.gur_other_interactions_with_dp+"</td></tr>");
									}
									if(resp.student.gur_stu_addmision_number != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  ශිෂ්‍ය ඇතුලත් වීමේ අංකය</td><td>"+resp.student.gur_stu_addmision_number+"</td></tr>");
									}
									if(resp.student.gur_old_student_number != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  ආදිශිෂ්‍ය අංකය</td><td>"+resp.student.gur_old_student_number+"</td></tr>");
									}
									if(resp.student.gur_nic != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  ජාතික හැඳුනුම්පත් අංකය</td><td>"+resp.student.gur_nic+"</td></tr>");
									}
									if(resp.student.gur_tea_id != null){
										$('#studentPersonalDetails').append("<tr><td>භාරකරුගේ  දහම්පාසල් ගුරු ලියාපදිංචි අංකය</td><td>"+resp.student.gur_tea_id+"</td></tr>");
									}
								}
								
								
								
								
								
								
								
								
								
							//end of desises	
								
							},
							error: function (e) {
								sweetAlert("Oops...", "Something went wrong!" + e, "error");
							}
						});
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
					//end of school ajax call	
					},
					error: function (e) {
						sweetAlert("Oops...", "Something went wrong!" + e, "error");
					}
				});
				
				
				
		//end of personal detail ajax call		
			}
        
		//Gread 9 TS detail load
		$('#gread9TSTableBody').append("									   <tr>\n"
                + "                                                            <td>තුරුණු සවිය කණ්ඩායම</td>\n"
                + "                                                            <td>"+resp.student.ts9_group+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.ts9_daily_attendance+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ශිලවන්ත වෙනුවෙන් පොහොය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.ts9_poya_attendance+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්දේශය</td>\n"
                + "                                                            <td>"+resp.student.ts9_recomendation+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_1+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_2+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_3+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_4+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_5+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_6+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_7+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_8+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_9+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_10+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_11+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_12+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_13+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_14+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_15+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_16+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_17+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_18+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_19+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts9_evaluation_cri_20+"</td>\n"
                + "                                                        </tr>");
		
		
		//gread 10 thurunusaviya
		$('#gread10TSTableBody').append("									   <tr>\n"
                + "                                                            <td>තුරුණු සවිය කණ්ඩායම</td>\n"
                + "                                                            <td>"+resp.student.ts10_group+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.ts10_daily_attendance+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ශිලවන්ත වෙනුවෙන් පොහොය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.ts10_poya_attendance+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්දේශය</td>\n"
                + "                                                            <td>"+resp.student.ts10_recomendation+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_1+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_2+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_3+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_4+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_5+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_6+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_7+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_8+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_9+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_10+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_11+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_12+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_13+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_14+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_15+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_16+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_17+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_18+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_19+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_20+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_21+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_22+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_23+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_24+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_25+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_26+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_27+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_28+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_29+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts10_evaluation_cri_30+"</td>\n"
                + "                                                        </tr>");
		
		$('#gread11TSTableBody').append("									   <tr>\n"
                + "                                                            <td>තුරුණු සවිය කණ්ඩායම</td>\n"
                + "                                                            <td>"+resp.student.ts11_pro_id+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.ts11_daily_attendance+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ශිලවන්ත වෙනුවෙන් පොහොය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.ts11_poya_attendance+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්දේශය</td>\n"
                + "                                                            <td>"+resp.student.ts11_recomendation+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_1+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_2+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_3+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_4+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_5+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_6+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_7+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_8+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_9+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_10+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_11+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_12+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_13+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_14+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_15+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_16+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_17+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_18+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_19+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.ts11_evaluation_cri_20+"</td>\n"
                + "                                                        </tr>");
		
		$('#gread12TSTableBody').append("									   <tr>\n"
                + "                                                            <td>තුරුණු සවිය කණ්ඩායම</td>\n"
                + "                                                            <td>"+resp.student.np_pro1_id+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.np_pro2_id+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.np_pro3_id+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.np_pro4_id+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.np_daily_attendance+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ශිලවන්ත වෙනුවෙන් පොහොය පැමිණීම</td>\n"
                + "                                                            <td>"+resp.student.np_poya_attendance+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්දේශය</td>\n"
                + "                                                            <td>"+resp.student.np_recomendation+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_1+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_2+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_3+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_4+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_5+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_6+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_7+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_8+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_9+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_10+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_11+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_12+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_13+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_14+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_15+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_16+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_17+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_18+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_19+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_20+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_21+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_22+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_23+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_24+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_25+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_26+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_27+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_28+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_29+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_30+"</td>\n"
                + "                                                        </tr>\n"
				+ "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_31+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_32+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_33+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_34+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ඉරියව් පැවැත්වීම පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_35+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>ලනු හා ගැට භාවිතය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_36+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය පොරොන්දුව පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_37+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ලාංචනය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_38+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය ඉතිහාසය පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_39+"</td>\n"
                + "                                                        </tr>\n"
                + "                                                        <tr>\n"
                + "                                                            <td>තුරුණු සවිය නිර්මාතෘ පිලිබඳ නිපුනතාව</td>\n"
                + "                                                            <td>"+resp.student.np_evaluation_cri_40+"</td>\n"
                + "                                                        </tr>");
		
		},
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });


	
	
	//loard Reccomendations
    $.ajax({
        type: "GET",
        url: baseURL + "student_ext_managment/StudentProfileService.php/student_reccomendations/"+StuProfileAddmisionNumber,
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
            for (i = 0; i < resp.student_reccomendations.length; i++) {
				if(resp.student_reccomendations[i].rec_type_id == 1 ||  resp.student_reccomendations[i].rec_type_id == 5){
					$("#specialNotes").append("<div class='media service-box wow fadeInRight'><div class='pull-left'><i class='fa fa-trophy'></i></div><div class='media-body'><h4 class='media-heading' style='color : Green'>"+ resp.student_reccomendations[i].rec_topic+" - ( In "+resp.student_reccomendations[i].rec_year+" ) </h4><p>"+resp.student_reccomendations[i].rec_discription+"<br> It is under recommendation category - "+resp.student_reccomendations[i].rec_type_name+"</p></div></div>");
				}else if(resp.student_reccomendations[i].rec_type_id == 3 ||  resp.student_reccomendations[i].rec_type_id == 4){
					$("#specialNotes").append("<div class='media service-box wow fadeInRight'><div class='pull-left'><i class='fa fa-times'></i></div><div class='media-body'><h4 class='media-heading' style='color : red'>"+ resp.student_reccomendations[i].rec_topic+" - ( In "+resp.student_reccomendations[i].rec_year+" ) </h4><p>"+resp.student_reccomendations[i].rec_discription+"<br> It is under recommendation category - "+resp.student_reccomendations[i].rec_type_name+"</p></div></div>");
				}else if( resp.student_reccomendations[i].rec_type_id == 2){
					$("#specialNotes").append("<div class='media service-box wow fadeInRight'><div class='pull-left'><i class='fa fa-check'></i></div><div class='media-body'><h4 class='media-heading' style='color : Blue'>"+ resp.student_reccomendations[i].rec_topic+" - ( In "+resp.student_reccomendations[i].rec_year+" ) </h4><p>"+resp.student_reccomendations[i].rec_discription+"<br> It is under recommendation category - "+resp.student_reccomendations[i].rec_type_name+"</p></div></div>");
				}else{
					$("#specialNotes").append("<div class='media service-box wow fadeInRight'><div class='pull-left'><i class='fa fa-cubes'></i></div><div class='media-body'><h4 class='media-heading' style='color : black'>"+ resp.student_reccomendations[i].rec_topic+" - ( In "+resp.student_reccomendations[i].rec_year+" ) </h4><p>"+resp.student_reccomendations[i].rec_discription+"<br> It is under recommendation category - "+resp.student_reccomendations[i].rec_type_name+"</p></div></div>");
				}
            }
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });
	
	
	//loard Exam_Results
    $.ajax({
						type: "GET",
						url: baseURL + "student_ext_managment/StudentProfileService.php/student_exam_results/"+StuProfileAddmisionNumber,
						dataType: "json",
						beforeSend: function (xhr) {
							xhr.setRequestHeader('Authorization', usr_api_key);
						},
						success: function (resp) {
							sturestable.destroy();
							$('#stuSerchResultTableBody').empty();
							if(resp.error == false){
								for (i = 0; i < resp.student_exam_results.length; i++) {
									$("#stuSerchResultTableBody").append("<tr><td>" + resp.student_exam_results[i].exm_name + "</td><td>" + resp.student_exam_results[i].year + "</td><td>"
									+ resp.student_exam_results[i].stu_exm_index_number + "</td><td>" +resp.student_exam_results[i].result + "</td></tr>" );
								}
								
								
								//to run data table
								sturestable = $("#StudentSearchResultByName").DataTable();
								$("#StudentSearchResultByName").show();
							}else{
								sweetAlert("Oops...", "Something went wrong" + resp.message, "error");
							}
						},
						error: function (e) {
							sweetAlert("Oops...", "Something went wrong!" + e, "error");
						}
					});	
	
	//load student_class_report_and_prefect_report
	$.ajax({
        type: "GET",
        url: baseURL + "student_ext_managment/StudentProfileService.php/student_class_prefect/"+StuProfileAddmisionNumber,
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', usr_api_key);
        },
        success: function (resp) {
			for(i=0; i < resp.student_class_prefect.length; i++){
				if(resp.student_class_prefect[i].clz_grade == 2){
					//guna arry updating
					dataset_guna_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[0] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[0] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[0] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[0] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[0] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[0] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[0] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[0] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[0] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[0] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[0] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[0] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[0] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[0] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[0] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;

					//after_school arry updating
					dataset_after_school_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[0] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[0] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating 
					dataset_tv_programmes_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[0] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[0] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[0] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[0] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[0] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[0] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[0] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[0] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[0] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[0] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[0] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[0] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[0] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[0] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[0] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[0] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[0] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[0] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[0] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[0] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[0] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[0] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[0] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[0] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[0] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[0] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[0] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[0] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[0] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[0] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[0] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[0] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[0] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
				
					
					
				}else if (resp.student_class_prefect[i].clz_grade == 3){
					//guna arry updating
					dataset_guna_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[1] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[1] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[1] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[1] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[1] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[1] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[1] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[1] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[1] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[1] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[1] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[1] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[1] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[1] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[1] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[1] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[1] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating 
					dataset_tv_programmes_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[1] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[1] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[1] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[1] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[1] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[1] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[1] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[1] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[1] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[1] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[1] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[1] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[1] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[1] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[1] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[1] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[1] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[1] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[1] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[1] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[1] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[1] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[1] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[1] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[1] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[1] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[1] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[1] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[1] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[1] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[1] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[1] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[1] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}
				else if (resp.student_class_prefect[i].clz_grade == 4){
					//guna arry updating
					dataset_guna_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[2] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[2] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[2] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[2] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[2] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[2] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[2] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[2] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[2] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[2] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[2] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[2] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[2] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[2] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[2] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[2] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[2] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating 
					dataset_tv_programmes_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[2] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[2] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[2] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[2] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[2] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[2] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[2] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[2] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[2] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[2] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[2] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[2] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[2] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[2] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[2] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[2] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[2] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[2] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[2] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[2] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[2] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[2] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[2] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[2] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[2] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[2] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[2] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[2] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[2] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[2] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[2] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[2] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[2] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 5){
					//guna arry updating
					dataset_guna_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[3] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[3] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[3] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[3] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[3] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[3] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[3] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[3] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[3] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[3] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[3] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[3] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[3] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[3] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[3] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[3] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[3] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[3] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[3] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[3] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[3] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[3] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[3] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[3] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[3] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[3] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[3] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[3] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[3] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[3] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[3] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[3] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[3] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[3] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[3] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[3] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[3] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[3] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[3] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[3] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[3] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[3] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[3] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[3] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[3] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[3] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[3] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[3] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[3] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[3] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 6){
					//guna arry updating
					dataset_guna_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[4] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[4] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[4] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[4] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[4] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[4] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[4] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[4] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[4] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[4] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[4] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[4] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[4] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[4] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[4] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[4] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[4] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[4] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[4] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[4] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[4] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[4] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[4] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[4] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[4] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[4] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[4] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[4] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[4] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[4] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[4] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[4] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[4] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[4] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[4] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[4] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[4] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[4] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[4] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[4] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[4] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[4] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[4] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[4] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[4] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[4] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[4] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[4] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[4] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[4] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 7){
					//guna arry updating
					dataset_guna_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[5] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[5] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[5] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[5] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[5] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[5] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[5] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[5] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[5] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[5] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[5] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[5] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[5] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[5] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[5] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[5] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[5] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[5] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[5] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[5] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[5] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[5] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[5] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[5] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[5] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[5] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[5] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[5] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[5] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[5] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[5] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[5] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[5] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[5] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[5] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[5] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[5] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[5] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[5] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[5] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[5] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[5] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[5] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[5] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[5] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[5] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[5] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[5] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[5] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[5] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 8){
					//guna arry updating
					dataset_guna_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[6] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[6] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[6] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[6] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[6] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[6] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[6] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[6] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[6] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[6] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[6] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[6] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[6] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[6] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[6] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[6] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[6] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[6] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[6] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[6] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[6] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[6] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[6] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[6] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[6] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[6] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[6] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[6] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[6] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[6] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[6] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[6] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[6] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[6] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[6] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[6] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[6] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[6] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[6] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[6] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[6] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[6] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[6] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[6] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[6] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[6] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[6] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[6] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[6] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[6] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 9){
					//guna arry updating
					dataset_guna_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[7] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[7] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[7] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[7] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[7] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[7] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[7] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[7] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[7] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[7] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[7] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[7] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[7] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[7] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[7] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[7] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[7] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[7] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[7] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[7] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[7] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[7] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[7] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[7] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[7] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[7] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[7] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[7] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[7] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[7] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[7] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[7] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[7] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[7] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[7] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[7] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[7] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[7] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[7] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[7] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[7] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[7] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[7] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[7] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[7] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[7] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[7] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[7] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[7] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[7] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 10){
					//guna arry updating
					dataset_guna_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[8] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[8] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[8] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[8] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[8] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[8] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[8] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[8] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[8] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[8] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[8] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[8] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[8] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[8] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[8] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[8] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[8] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[8] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[8] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[8] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[8] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[8] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[8] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[8] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[8] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[8] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[8] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[8] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[8] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[8] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[8] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[8] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[8] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[8] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[8] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[8] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[8] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[8] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[8] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[8] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[8] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[8] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[8] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[8] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[8] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[8] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[8] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[8] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[8] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[8] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 11){
					//guna arry updating
					dataset_guna_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[9] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[9] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[9] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[9] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[9] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[9] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[9] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[9] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[9] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[9] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[9] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[9] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[9] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[9] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[9] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[9] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[9] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[9] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[9] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[9] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[9] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[9] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[9] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[9] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[9] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[9] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[9] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[9] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[9] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[9] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[9] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[9] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[9] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[9] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[9] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[9] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[9] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[9] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[9] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[9] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[9] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[9] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[9] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[9] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[9] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[9] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[9] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[9] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[9] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[9] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 12){
					//guna arry updating
					dataset_guna_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[10] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[10] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[10] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[10] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[10] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[10] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[10] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[10] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[10] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[10] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[10] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[10] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[10] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[10] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[10] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[10] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[10] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[10] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[10] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[10] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[10] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[10] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[10] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[10] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[10] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[10] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[10] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[10] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[10] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[10] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[10] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[10] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[10] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[10] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[10] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[10] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[10] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[10] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[10] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[10] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[10] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[10] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[10] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[10] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[10] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[10] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[10] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[10] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[10] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[10] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 13){
					//guna arry updating
					dataset_guna_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[11] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[11] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[11] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[11] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[11] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[11] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[11] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[11] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[11] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[11] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[11] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[11] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[11] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[11] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[11] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[11] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[11] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[11] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[11] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[11] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[11] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[11] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[11] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[11] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[11] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[11] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[11] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[11] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[11] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[11] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[11] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[11] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[11] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[11] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[11] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[11] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[11] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[11] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[11] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[11] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[11] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[11] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[11] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[11] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[11] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[11] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[11] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[11] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[11] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[11] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else if (resp.student_class_prefect[i].clz_grade == 14){
					//guna arry updating
					dataset_guna_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_3 * 20;
					dataset_guna_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_4 * 20;
					dataset_guna_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_5 * 20;
					dataset_guna_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_6 * 20;
					dataset_guna_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_7 * 20;
					dataset_guna_6[12] = resp.student_class_prefect[i].clz_evaluation_cri_8 * 20;
					dataset_guna_7[12] = resp.student_class_prefect[i].clz_evaluation_cri_9 * 20;
					dataset_guna_8[12] = resp.student_class_prefect[i].clz_evaluation_cri_10 * 20;
					dataset_guna_9[12] = resp.student_class_prefect[i].clz_evaluation_cri_11 * 20;
					dataset_guna_10[12] = resp.student_class_prefect[i].clz_evaluation_cri_12 * 20;
					dataset_guna_11[12] = resp.student_class_prefect[i].clz_evaluation_cri_13 * 20;
					dataset_guna_12[12] = resp.student_class_prefect[i].clz_evaluation_cri_14 * 20;
					dataset_guna_13[12] = resp.student_class_prefect[i].clz_evaluation_cri_15 * 20;
					dataset_guna_14[12] = resp.student_class_prefect[i].clz_evaluation_cri_16 * 20;
					dataset_guna_15[12] = resp.student_class_prefect[i].clz_evaluation_cri_17 * 20;
					dataset_guna_16[12] = resp.student_class_prefect[i].clz_evaluation_cri_18 * 20;
					dataset_guna_17[12] = resp.student_class_prefect[i].clz_evaluation_cri_19 * 20;
					dataset_guna_18[12] = resp.student_class_prefect[i].clz_evaluation_cri_20 * 20;
					dataset_guna_19[12] = resp.student_class_prefect[i].clz_evaluation_cri_21 * 20;
					dataset_guna_20[12] = resp.student_class_prefect[i].clz_evaluation_cri_22 * 20;
					
					//after_school arry updating
					dataset_after_school_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_23;
					dataset_after_school_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_24;
					dataset_after_school_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_25;
					dataset_after_school_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_26;
					dataset_after_school_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_27;
					dataset_after_school_6[12] = resp.student_class_prefect[i].clz_evaluation_cri_28;
					dataset_after_school_7[12] = resp.student_class_prefect[i].clz_evaluation_cri_29;
					
					//TV programmes array updating
					dataset_tv_programmes_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_30;
					dataset_tv_programmes_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_31;
					dataset_tv_programmes_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_32;
					dataset_tv_programmes_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_33;
					dataset_tv_programmes_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_34;
					dataset_tv_programmes_6[12] = resp.student_class_prefect[i].clz_evaluation_cri_35;
					dataset_tv_programmes_7[12] = resp.student_class_prefect[i].clz_evaluation_cri_36;
					dataset_tv_programmes_8[12] = resp.student_class_prefect[i].clz_evaluation_cri_37;
					dataset_tv_programmes_9[12] = resp.student_class_prefect[i].clz_evaluation_cri_38;
					dataset_tv_programmes_10[12] = resp.student_class_prefect[i].clz_evaluation_cri_39;
					dataset_tv_programmes_11[12] = resp.student_class_prefect[i].clz_evaluation_cri_40;
					
					//Reading arry updating
					dataset_readings_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_1_copy1;
					dataset_readings_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_2_copy1;
					dataset_readings_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_3_copy1;
					dataset_readings_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_4_copy1;
					dataset_readings_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_5_copy1;
					dataset_readings_6[12] = resp.student_class_prefect[i].clz_evaluation_cri_6_copy1;
					
					//responsibilities arry updating
					dataset_responsibilities_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_41;
					dataset_responsibilities_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_42;
					dataset_responsibilities_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_43;
					dataset_responsibilities_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_44;
					dataset_responsibilities_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_45;
					dataset_responsibilities_6[12] = resp.student_class_prefect[i].clz_evaluation_cri_46;
					dataset_responsibilities_7[12] = resp.student_class_prefect[i].clz_evaluation_cri_47;
					dataset_responsibilities_8[12] = resp.student_class_prefect[i].clz_evaluation_cri_48;
					dataset_responsibilities_9[12] = resp.student_class_prefect[i].clz_evaluation_cri_49;
					dataset_responsibilities_10[12] = resp.student_class_prefect[i].clz_evaluation_cri_50;

					//home behavior arry updating
					dataset_home_behavior_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_51;
					dataset_home_behavior_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_52;
					dataset_home_behavior_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_53;
					dataset_home_behavior_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_54;
					dataset_home_behavior_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_55;

					//talents arry updating
					dataset_talents_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_56;
					dataset_talents_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_57;
					dataset_talents_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_58;
					dataset_talents_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_59;
					dataset_talents_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_60;
					dataset_talents_6[12] = resp.student_class_prefect[i].clz_evaluation_cri_61;
					dataset_talents_7[12] = resp.student_class_prefect[i].clz_evaluation_cri_62;
					dataset_talents_8[12] = resp.student_class_prefect[i].clz_evaluation_cri_63;
					dataset_talents_9[12] = resp.student_class_prefect[i].clz_evaluation_cri_64;
					dataset_talents_10[12] = resp.student_class_prefect[i].clz_evaluation_cri_65;

					//facilities arry updating
					dataset_facilities_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_66;
					dataset_facilities_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_67;
					dataset_facilities_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_68;
					dataset_facilities_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_69;
					dataset_facilities_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_70;
					dataset_facilities_6[12] = resp.student_class_prefect[i].clz_evaluation_cri_71;
					dataset_facilities_7[12] = resp.student_class_prefect[i].clz_evaluation_cri_72;
					dataset_facilities_8[12] = resp.student_class_prefect[i].clz_evaluation_cri_73;
					dataset_facilities_9[12] = resp.student_class_prefect[i].clz_evaluation_cri_74;
					dataset_facilities_10[12] = resp.student_class_prefect[i].clz_evaluation_cri_75;

					//family details arry updating
					dataset_family_details_1[12] = resp.student_class_prefect[i].clz_evaluation_cri_41_copy1;
					dataset_family_details_2[12] = resp.student_class_prefect[i].clz_evaluation_cri_42_copy1;
					dataset_family_details_3[12] = resp.student_class_prefect[i].clz_evaluation_cri_43_copy1;
					dataset_family_details_4[12] = resp.student_class_prefect[i].clz_evaluation_cri_44_copy1;
					dataset_family_details_5[12] = resp.student_class_prefect[i].clz_evaluation_cri_45_copy1;
					dataset_family_details_6[12] = resp.student_class_prefect[i].clz_evaluation_cri_46_copy1;
					dataset_family_details_7[12] = resp.student_class_prefect[i].clz_evaluation_cri_47_copy1;
					dataset_family_details_8[12] = resp.student_class_prefect[i].clz_evaluation_cri_48_copy1;
					dataset_family_details_9[12] = resp.student_class_prefect[i].clz_evaluation_cri_49_copy1;
					dataset_family_details_10[12] = resp.student_class_prefect[i].clz_evaluation_cri_50_copy1;
					dataset_family_details_11[12] = resp.student_class_prefect[i].clz_evaluation_cri_51_copy1;
					
				}else{
					alert("cant happen");
				}
			}
			
			
			/* charts related to student behavior and other */
				//guna chart 1
				var lineChartData3 = {
					labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
					datasets: [
						{
							label: "උත්ස෿හය",
							fillColor: "rgba(255, 128, 128,0.2)",
							strokeColor: "rgba(255, 0, 0,1)",
							pointColor: "rgba(255, 0, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 0, 0,1)",
							data: dataset_guna_1
						},
						{
							label: "නිර්භීතකම",
							fillColor: "rgba(153, 153, 255,0.2)",
							strokeColor: "rgba(0, 0, 255,1)",
							pointColor: "rgba(0, 0, 255,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 0, 255,1)",
							data: dataset_guna_2
						}, {
							label: "දඟක෿රකම",
							fillColor: "rgba(102, 255, 102,0.2)",
							strokeColor: "rgba(0, 153, 0,1)",
							pointColor: "rgba(0, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 153, 0,1)",
							data: dataset_guna_3
						}, {
							label: "මුරණ්ඩුකම",
							fillColor: "rgba(255, 204, 128,0.2)",
							strokeColor: "rgba(255, 153, 0,1)",
							pointColor: "rgba(255, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 153, 0,1)",
							data: dataset_guna_4
						},
					]

				}
				var ctx3 = document.getElementById("canvas3").getContext("2d");
				window.myLine = new Chart(ctx3).Line(lineChartData3, {
					responsive: true
				});
				
				// guna chart 2
				var lineChartData4 = {
					labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
					datasets: [
						{
							label: "ප෿ලනයට අකම෿ති බව",
							fillColor: "rgba(255, 128, 128,0.2)",
							strokeColor: "rgba(255, 0, 0,1)",
							pointColor: "rgba(255, 0, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 0, 0,1)",
							data: dataset_guna_5
						},
						{
							label: "හරි ව෿රදි නොදන්න෿ බව",
							fillColor: "rgba(153, 153, 255,0.2)",
							strokeColor: "rgba(0, 0, 255,1)",
							pointColor: "rgba(0, 0, 255,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 0, 255,1)",
							data: dataset_guna_6
						}, {
							label: "ආදරය ර෿කවරණය සෙවීම",
							fillColor: "rgba(102, 255, 102,0.2)",
							strokeColor: "rgba(0, 153, 0,1)",
							pointColor: "rgba(0, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 153, 0,1)",
							data: dataset_guna_7
						}, {
							label: "මතක ෿ක්තිය ව෿ඩි බව",
							fillColor: "rgba(255, 204, 128,0.2)",
							strokeColor: "rgba(255, 153, 0,1)",
							pointColor: "rgba(255, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 153, 0,1)",
							data: dataset_guna_8
						},
					]

				}
				var ctx4 = document.getElementById("canvas4").getContext("2d");
				window.myLine = new Chart(ctx4).Line(lineChartData4, {
					responsive: true
				});
				
				
				// guna chart 3
				 var lineChartData5 = {
					labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
					datasets: [
						{
							label: "කුතුහලය",
							fillColor: "rgba(255, 128, 128,0.2)",
							strokeColor: "rgba(255, 0, 0,1)",
							pointColor: "rgba(255, 0, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 0, 0,1)",
							data: dataset_guna_9
						},
						{
							label: "තරගක෿රිත්වය",
							fillColor: "rgba(153, 153, 255,0.2)",
							strokeColor: "rgba(0, 0, 255,1)",
							pointColor: "rgba(0, 0, 255,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 0, 255,1)",
							data: dataset_guna_10
						}, {
							label: "න෿යකත්වය",
							fillColor: "rgba(102, 255, 102,0.2)",
							strokeColor: "rgba(0, 153, 0,1)",
							pointColor: "rgba(0, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 153, 0,1)",
							data: dataset_guna_11
						}, {
							label: "ස෿මුහික කටයුතු සඳහ෿ ක෿ම෿ත්ත",
							fillColor: "rgba(255, 204, 128,0.2)",
							strokeColor: "rgba(255, 153, 0,1)",
							pointColor: "rgba(255, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 153, 0,1)",
							data: dataset_guna_12
						},
					]

				}
				var ctx5 = document.getElementById("canvas5").getContext("2d");
				window.myLine = new Chart(ctx5).Line(lineChartData5, {
					responsive: true
				});

				
				
				// guna chart 4
				var lineChartData6 = {
					labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
					datasets: [
						{
							label: "වංච෿ වලින් තොර බව",
							fillColor: "rgba(255, 128, 128,0.2)",
							strokeColor: "rgba(255, 0, 0,1)",
							pointColor: "rgba(255, 0, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 0, 0,1)",
							data: dataset_guna_13
						},
						{
							label: "අවධ෿නය ග෿නීමට ඇති ක෿ම෿ත්ත",
							fillColor: "rgba(153, 153, 255,0.2)",
							strokeColor: "rgba(0, 0, 255,1)",
							pointColor: "rgba(0, 0, 255,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 0, 255,1)",
							data: dataset_guna_14
						}, {
							label: "කත෿ කිරීමට ඇති ප්‿රිය බව",
							fillColor: "rgba(102, 255, 102,0.2)",
							strokeColor: "rgba(0, 153, 0,1)",
							pointColor: "rgba(0, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 153, 0,1)",
							data: dataset_guna_15
						}, {
							label: "අන් යට උදව් කිරීම",
							fillColor: "rgba(255, 204, 128,0.2)",
							strokeColor: "rgba(255, 153, 0,1)",
							pointColor: "rgba(255, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 153, 0,1)",
							data: dataset_guna_16
						},
					]

				}
				var ctx6 = document.getElementById("canvas6").getContext("2d");
				window.myLine = new Chart(ctx6).Line(lineChartData6, {
					responsive: true
				});
				
				
				// guna chart 5
				var lineChartData7 = {
					labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
					datasets: [
						{
							label: "ඉදිරිපත්වීම",
							fillColor: "rgba(255, 128, 128,0.2)",
							strokeColor: "rgba(255, 0, 0,1)",
							pointColor: "rgba(255, 0, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 0, 0,1)",
							data: dataset_guna_17
						},
						{
							label: "ව෿ඩිහිටියන්ට ගරු කිරීම",
							fillColor: "rgba(153, 153, 255,0.2)",
							strokeColor: "rgba(0, 0, 255,1)",
							pointColor: "rgba(0, 0, 255,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 0, 255,1)",
							data: dataset_guna_18
						}
					]

				}
				var ctx7 = document.getElementById("canvas7").getContext("2d");
				window.myLine = new Chart(ctx7).Line(lineChartData7, {
					responsive: true
				});
				
				
				// guna chart 6
				var lineChartData8 = {
					labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
					datasets: [
						{
							label: "සංවර බව",
							fillColor: "rgba(255, 128, 128,0.2)",
							strokeColor: "rgba(255, 0, 0,1)",
							pointColor: "rgba(255, 0, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 0, 0,1)",
							data: dataset_guna_19
						},
						{
							label: "ඉදිරිපත් වීම",
							fillColor: "rgba(153, 153, 255,0.2)",
							strokeColor: "rgba(0, 0, 255,1)",
							pointColor: "rgba(0, 0, 255,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 0, 255,1)",
							data: dataset_guna_20
						}
					]

				}
				var ctx8 = document.getElementById("canvas8").getContext("2d");
				window.myLine = new Chart(ctx8).Line(lineChartData8, {
					responsive: true
				});

				
				/*Behavior detail Tables*/
				//after school table
				$('#home_behavior_table_body').append(
													"<tr style=\"background-color:yellow\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_after_school_1[0]+"</td>\n" +
														"<td>"+dataset_after_school_1[1]+"</td>\n" +
														"<td>"+dataset_after_school_1[2]+"</td>\n" +
														"<td>"+dataset_after_school_1[3]+"</td>\n" +
														"<td>"+dataset_after_school_1[4]+"</td>\n" +
														"<td>"+dataset_after_school_1[5]+"</td>\n" +
														"<td>"+dataset_after_school_1[6]+"</td>\n" +
														"<td>"+dataset_after_school_1[7]+"</td>\n" +
														"<td>"+dataset_after_school_1[8]+"</td>\n" +
														"<td>"+dataset_after_school_1[9]+"</td>\n" +
														"<td>"+dataset_after_school_1[10]+"</td>\n" +
														"<td>"+dataset_after_school_1[11]+"</td>\n" +
														"<td>"+dataset_after_school_1[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:yellow\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_after_school_2[0]+"</td>\n" +
														"<td>"+dataset_after_school_2[1]+"</td>\n" +
														"<td>"+dataset_after_school_2[2]+"</td>\n" +
														"<td>"+dataset_after_school_2[3]+"</td>\n" +
														"<td>"+dataset_after_school_2[4]+"</td>\n" +
														"<td>"+dataset_after_school_2[5]+"</td>\n" +
														"<td>"+dataset_after_school_2[6]+"</td>\n" +
														"<td>"+dataset_after_school_2[7]+"</td>\n" +
														"<td>"+dataset_after_school_2[8]+"</td>\n" +
														"<td>"+dataset_after_school_2[9]+"</td>\n" +
														"<td>"+dataset_after_school_2[10]+"</td>\n" +
														"<td>"+dataset_after_school_2[11]+"</td>\n" +
														"<td>"+dataset_after_school_2[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:yellow\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_after_school_3[0]+"</td>\n" +
														"<td>"+dataset_after_school_3[1]+"</td>\n" +
														"<td>"+dataset_after_school_3[2]+"</td>\n" +
														"<td>"+dataset_after_school_3[3]+"</td>\n" +
														"<td>"+dataset_after_school_3[4]+"</td>\n" +
														"<td>"+dataset_after_school_3[5]+"</td>\n" +
														"<td>"+dataset_after_school_3[6]+"</td>\n" +
														"<td>"+dataset_after_school_3[7]+"</td>\n" +
														"<td>"+dataset_after_school_3[8]+"</td>\n" +
														"<td>"+dataset_after_school_3[9]+"</td>\n" +
														"<td>"+dataset_after_school_3[10]+"</td>\n" +
														"<td>"+dataset_after_school_3[11]+"</td>\n" +
														"<td>"+dataset_after_school_3[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:yellow\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_after_school_4[0]+"</td>\n" +
														"<td>"+dataset_after_school_4[1]+"</td>\n" +
														"<td>"+dataset_after_school_4[2]+"</td>\n" +
														"<td>"+dataset_after_school_4[3]+"</td>\n" +
														"<td>"+dataset_after_school_4[4]+"</td>\n" +
														"<td>"+dataset_after_school_4[5]+"</td>\n" +
														"<td>"+dataset_after_school_4[6]+"</td>\n" +
														"<td>"+dataset_after_school_4[7]+"</td>\n" +
														"<td>"+dataset_after_school_4[8]+"</td>\n" +
														"<td>"+dataset_after_school_4[9]+"</td>\n" +
														"<td>"+dataset_after_school_4[10]+"</td>\n" +
														"<td>"+dataset_after_school_4[11]+"</td>\n" +
														"<td>"+dataset_after_school_4[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:yellow\">\n" +
													"<td>ගෙදරදොර කටයුතුවලට උපකාර කිරීම</td>\n" +
													"<td>"+dataset_after_school_5[0]+"</td>\n" +
														"<td>"+dataset_after_school_5[1]+"</td>\n" +
														"<td>"+dataset_after_school_5[2]+"</td>\n" +
														"<td>"+dataset_after_school_5[3]+"</td>\n" +
														"<td>"+dataset_after_school_5[4]+"</td>\n" +
														"<td>"+dataset_after_school_5[5]+"</td>\n" +
														"<td>"+dataset_after_school_5[6]+"</td>\n" +
														"<td>"+dataset_after_school_5[7]+"</td>\n" +
														"<td>"+dataset_after_school_5[8]+"</td>\n" +
														"<td>"+dataset_after_school_5[9]+"</td>\n" +
														"<td>"+dataset_after_school_5[10]+"</td>\n" +
														"<td>"+dataset_after_school_5[11]+"</td>\n" +
														"<td>"+dataset_after_school_5[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:yellow\">\n" +
													"<td>උපකාරක පන්ති වලට සහබාගි වීම</td>\n" +
													"<td>"+dataset_after_school_6[0]+"</td>\n" +
														"<td>"+dataset_after_school_6[1]+"</td>\n" +
														"<td>"+dataset_after_school_6[2]+"</td>\n" +
														"<td>"+dataset_after_school_6[3]+"</td>\n" +
														"<td>"+dataset_after_school_6[4]+"</td>\n" +
														"<td>"+dataset_after_school_6[5]+"</td>\n" +
														"<td>"+dataset_after_school_6[6]+"</td>\n" +
														"<td>"+dataset_after_school_6[7]+"</td>\n" +
														"<td>"+dataset_after_school_6[8]+"</td>\n" +
														"<td>"+dataset_after_school_6[9]+"</td>\n" +
														"<td>"+dataset_after_school_6[10]+"</td>\n" +
														"<td>"+dataset_after_school_6[11]+"</td>\n" +
														"<td>"+dataset_after_school_6[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:yellow\">\n" +
													"<td>වෙනත් කටයුතු</td>\n" +
													"<td>"+dataset_after_school_7[0]+"</td>\n" +
														"<td>"+dataset_after_school_7[1]+"</td>\n" +
														"<td>"+dataset_after_school_7[2]+"</td>\n" +
														"<td>"+dataset_after_school_7[3]+"</td>\n" +
														"<td>"+dataset_after_school_7[4]+"</td>\n" +
														"<td>"+dataset_after_school_7[5]+"</td>\n" +
														"<td>"+dataset_after_school_7[6]+"</td>\n" +
														"<td>"+dataset_after_school_7[7]+"</td>\n" +
														"<td>"+dataset_after_school_7[8]+"</td>\n" +
														"<td>"+dataset_after_school_7[9]+"</td>\n" +
														"<td>"+dataset_after_school_7[10]+"</td>\n" +
														"<td>"+dataset_after_school_7[11]+"</td>\n" +
														"<td>"+dataset_after_school_7[12]+"</td>\n" +
													"\n" +
													"</tr>"
													
												);
				//TV Programmes
				$('#Tv_programme_table_body').append(
													"<tr style=\"background-color:#4dff4d\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_tv_programmes_1[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_1[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_tv_programmes_2[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_2[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_tv_programmes_3[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_3[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_tv_programmes_4[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_4[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>ගෙදරදොර කටයුතුවලට උපකාර කිරීම</td>\n" +
													"<td>"+dataset_tv_programmes_5[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_5[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>උපකාරක පන්ති වලට සහබාගි වීම</td>\n" +
													"<td>"+dataset_tv_programmes_6[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_6[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>වෙනත් කටයුතු</td>\n" +
													"<td>"+dataset_tv_programmes_7[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_7[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_tv_programmes_8[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_8[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_tv_programmes_9[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_9[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_tv_programmes_10[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_10[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#4dff4d\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_tv_programmes_11[0]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[1]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[2]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[3]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[4]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[5]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[6]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[7]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[8]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[9]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[10]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[11]+"</td>\n" +
														"<td>"+dataset_tv_programmes_11[12]+"</td>\n" +
													"\n" +
													"</tr>"	
													);
				
				//Reading Pattern
				$('#Reding_interest_table_body').append(
													"<tr style=\"background-color:#ffff80\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_readings_1[0]+"</td>\n" +
														"<td>"+dataset_readings_1[1]+"</td>\n" +
														"<td>"+dataset_readings_1[2]+"</td>\n" +
														"<td>"+dataset_readings_1[3]+"</td>\n" +
														"<td>"+dataset_readings_1[4]+"</td>\n" +
														"<td>"+dataset_readings_1[5]+"</td>\n" +
														"<td>"+dataset_readings_1[6]+"</td>\n" +
														"<td>"+dataset_readings_1[7]+"</td>\n" +
														"<td>"+dataset_readings_1[8]+"</td>\n" +
														"<td>"+dataset_readings_1[9]+"</td>\n" +
														"<td>"+dataset_readings_1[10]+"</td>\n" +
														"<td>"+dataset_readings_1[11]+"</td>\n" +
														"<td>"+dataset_readings_1[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ffff80\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_readings_2[0]+"</td>\n" +
														"<td>"+dataset_readings_2[1]+"</td>\n" +
														"<td>"+dataset_readings_2[2]+"</td>\n" +
														"<td>"+dataset_readings_2[3]+"</td>\n" +
														"<td>"+dataset_readings_2[4]+"</td>\n" +
														"<td>"+dataset_readings_2[5]+"</td>\n" +
														"<td>"+dataset_readings_2[6]+"</td>\n" +
														"<td>"+dataset_readings_2[7]+"</td>\n" +
														"<td>"+dataset_readings_2[8]+"</td>\n" +
														"<td>"+dataset_readings_2[9]+"</td>\n" +
														"<td>"+dataset_readings_2[10]+"</td>\n" +
														"<td>"+dataset_readings_2[11]+"</td>\n" +
														"<td>"+dataset_readings_2[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ffff80\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_readings_3[0]+"</td>\n" +
														"<td>"+dataset_readings_3[1]+"</td>\n" +
														"<td>"+dataset_readings_3[2]+"</td>\n" +
														"<td>"+dataset_readings_3[3]+"</td>\n" +
														"<td>"+dataset_readings_3[4]+"</td>\n" +
														"<td>"+dataset_readings_3[5]+"</td>\n" +
														"<td>"+dataset_readings_3[6]+"</td>\n" +
														"<td>"+dataset_readings_3[7]+"</td>\n" +
														"<td>"+dataset_readings_3[8]+"</td>\n" +
														"<td>"+dataset_readings_3[9]+"</td>\n" +
														"<td>"+dataset_readings_3[10]+"</td>\n" +
														"<td>"+dataset_readings_3[11]+"</td>\n" +
														"<td>"+dataset_readings_3[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ffff80\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_readings_4[0]+"</td>\n" +
														"<td>"+dataset_readings_4[1]+"</td>\n" +
														"<td>"+dataset_readings_4[2]+"</td>\n" +
														"<td>"+dataset_readings_4[3]+"</td>\n" +
														"<td>"+dataset_readings_4[4]+"</td>\n" +
														"<td>"+dataset_readings_4[5]+"</td>\n" +
														"<td>"+dataset_readings_4[6]+"</td>\n" +
														"<td>"+dataset_readings_4[7]+"</td>\n" +
														"<td>"+dataset_readings_4[8]+"</td>\n" +
														"<td>"+dataset_readings_4[9]+"</td>\n" +
														"<td>"+dataset_readings_4[10]+"</td>\n" +
														"<td>"+dataset_readings_4[11]+"</td>\n" +
														"<td>"+dataset_readings_4[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ffff80\">\n" +
													"<td>ගෙදරදොර කටයුතුවලට උපකාර කිරීම</td>\n" +
													"<td>"+dataset_readings_5[0]+"</td>\n" +
														"<td>"+dataset_readings_5[1]+"</td>\n" +
														"<td>"+dataset_readings_5[2]+"</td>\n" +
														"<td>"+dataset_readings_5[3]+"</td>\n" +
														"<td>"+dataset_readings_5[4]+"</td>\n" +
														"<td>"+dataset_readings_5[5]+"</td>\n" +
														"<td>"+dataset_readings_5[6]+"</td>\n" +
														"<td>"+dataset_readings_5[7]+"</td>\n" +
														"<td>"+dataset_readings_5[8]+"</td>\n" +
														"<td>"+dataset_readings_5[9]+"</td>\n" +
														"<td>"+dataset_readings_5[10]+"</td>\n" +
														"<td>"+dataset_readings_5[11]+"</td>\n" +
														"<td>"+dataset_readings_5[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ffff80\">\n" +
													"<td>උපකාරක පන්ති වලට සහබාගි වීම</td>\n" +
													"<td>"+dataset_readings_6[0]+"</td>\n" +
														"<td>"+dataset_readings_6[1]+"</td>\n" +
														"<td>"+dataset_readings_6[2]+"</td>\n" +
														"<td>"+dataset_readings_6[3]+"</td>\n" +
														"<td>"+dataset_readings_6[4]+"</td>\n" +
														"<td>"+dataset_readings_6[5]+"</td>\n" +
														"<td>"+dataset_readings_6[6]+"</td>\n" +
														"<td>"+dataset_readings_6[7]+"</td>\n" +
														"<td>"+dataset_readings_6[8]+"</td>\n" +
														"<td>"+dataset_readings_6[9]+"</td>\n" +
														"<td>"+dataset_readings_6[10]+"</td>\n" +
														"<td>"+dataset_readings_6[11]+"</td>\n" +
														"<td>"+dataset_readings_6[12]+"</td>\n" +
													"\n" +
													"</tr>" 
				
												);
												
			//responsibilities table
			$('#responsibilities_table_body').append("<tr style=\"background-color:#77ff33\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_responsibilities_1[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_1[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_responsibilities_2[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_2[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_responsibilities_3[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_3[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_responsibilities_4[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_4[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
													"<td>ගෙදරදොර කටයුතුවලට උපකාර කිරීම</td>\n" +
													"<td>"+dataset_responsibilities_5[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_5[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
													"<td>උපකාරක පන්ති වලට සහබාගි වීම</td>\n" +
													"<td>"+dataset_responsibilities_6[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_6[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
													"<td>වෙනත් කටයුතු</td>\n" +
													"<td>"+dataset_responsibilities_7[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_7[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_responsibilities_8[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_8[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_responsibilities_9[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_9[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#77ff33\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_responsibilities_10[0]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[1]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[2]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[3]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[4]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[5]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[6]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[7]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[8]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[9]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[10]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[11]+"</td>\n" +
														"<td>"+dataset_responsibilities_10[12]+"</td>\n" +
													"\n" +
													"</tr>");
			
			//home behavior table 2 #ff80d5
			$('#home_behavior_table_body2').append("<tr style=\"background-color:#ff80d5\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_home_behavior_1[0]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[1]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[2]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[3]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[4]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[5]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[6]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[7]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[8]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[9]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[10]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[11]+"</td>\n" +
														"<td>"+dataset_home_behavior_1[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ff80d5\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_home_behavior_2[0]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[1]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[2]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[3]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[4]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[5]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[6]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[7]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[8]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[9]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[10]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[11]+"</td>\n" +
														"<td>"+dataset_home_behavior_2[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ff80d5\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_home_behavior_3[0]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[1]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[2]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[3]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[4]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[5]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[6]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[7]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[8]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[9]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[10]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[11]+"</td>\n" +
														"<td>"+dataset_home_behavior_3[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ff80d5\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_home_behavior_4[0]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[1]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[2]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[3]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[4]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[5]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[6]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[7]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[8]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[9]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[10]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[11]+"</td>\n" +
														"<td>"+dataset_home_behavior_4[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#ff80d5\">\n" +
													"<td>ගෙදරදොර කටයුතුවලට උපකාර කිරීම</td>\n" +
													"<td>"+dataset_home_behavior_5[0]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[1]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[2]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[3]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[4]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[5]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[6]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[7]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[8]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[9]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[10]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[11]+"</td>\n" +
														"<td>"+dataset_home_behavior_5[12]+"</td>\n" +
													"\n" +
													"</tr>");
			
			//talents table #80bfff
			$('#talents_table_body').append("<tr style=\"background-color:#80bfff\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_talents_1[0]+"</td>\n" +
														"<td>"+dataset_talents_1[1]+"</td>\n" +
														"<td>"+dataset_talents_1[2]+"</td>\n" +
														"<td>"+dataset_talents_1[3]+"</td>\n" +
														"<td>"+dataset_talents_1[4]+"</td>\n" +
														"<td>"+dataset_talents_1[5]+"</td>\n" +
														"<td>"+dataset_talents_1[6]+"</td>\n" +
														"<td>"+dataset_talents_1[7]+"</td>\n" +
														"<td>"+dataset_talents_1[8]+"</td>\n" +
														"<td>"+dataset_talents_1[9]+"</td>\n" +
														"<td>"+dataset_talents_1[10]+"</td>\n" +
														"<td>"+dataset_talents_1[11]+"</td>\n" +
														"<td>"+dataset_talents_1[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_talents_2[0]+"</td>\n" +
														"<td>"+dataset_talents_2[1]+"</td>\n" +
														"<td>"+dataset_talents_2[2]+"</td>\n" +
														"<td>"+dataset_talents_2[3]+"</td>\n" +
														"<td>"+dataset_talents_2[4]+"</td>\n" +
														"<td>"+dataset_talents_2[5]+"</td>\n" +
														"<td>"+dataset_talents_2[6]+"</td>\n" +
														"<td>"+dataset_talents_2[7]+"</td>\n" +
														"<td>"+dataset_talents_2[8]+"</td>\n" +
														"<td>"+dataset_talents_2[9]+"</td>\n" +
														"<td>"+dataset_talents_2[10]+"</td>\n" +
														"<td>"+dataset_talents_2[11]+"</td>\n" +
														"<td>"+dataset_talents_2[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_talents_3[0]+"</td>\n" +
														"<td>"+dataset_talents_3[1]+"</td>\n" +
														"<td>"+dataset_talents_3[2]+"</td>\n" +
														"<td>"+dataset_talents_3[3]+"</td>\n" +
														"<td>"+dataset_talents_3[4]+"</td>\n" +
														"<td>"+dataset_talents_3[5]+"</td>\n" +
														"<td>"+dataset_talents_3[6]+"</td>\n" +
														"<td>"+dataset_talents_3[7]+"</td>\n" +
														"<td>"+dataset_talents_3[8]+"</td>\n" +
														"<td>"+dataset_talents_3[9]+"</td>\n" +
														"<td>"+dataset_talents_3[10]+"</td>\n" +
														"<td>"+dataset_talents_3[11]+"</td>\n" +
														"<td>"+dataset_talents_3[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_talents_4[0]+"</td>\n" +
														"<td>"+dataset_talents_4[1]+"</td>\n" +
														"<td>"+dataset_talents_4[2]+"</td>\n" +
														"<td>"+dataset_talents_4[3]+"</td>\n" +
														"<td>"+dataset_talents_4[4]+"</td>\n" +
														"<td>"+dataset_talents_4[5]+"</td>\n" +
														"<td>"+dataset_talents_4[6]+"</td>\n" +
														"<td>"+dataset_talents_4[7]+"</td>\n" +
														"<td>"+dataset_talents_4[8]+"</td>\n" +
														"<td>"+dataset_talents_4[9]+"</td>\n" +
														"<td>"+dataset_talents_4[10]+"</td>\n" +
														"<td>"+dataset_talents_4[11]+"</td>\n" +
														"<td>"+dataset_talents_4[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
													"<td>ගෙදරදොර කටයුතුවලට උපකාර කිරීම</td>\n" +
													"<td>"+dataset_talents_5[0]+"</td>\n" +
														"<td>"+dataset_talents_5[1]+"</td>\n" +
														"<td>"+dataset_talents_5[2]+"</td>\n" +
														"<td>"+dataset_talents_5[3]+"</td>\n" +
														"<td>"+dataset_talents_5[4]+"</td>\n" +
														"<td>"+dataset_talents_5[5]+"</td>\n" +
														"<td>"+dataset_talents_5[6]+"</td>\n" +
														"<td>"+dataset_talents_5[7]+"</td>\n" +
														"<td>"+dataset_talents_5[8]+"</td>\n" +
														"<td>"+dataset_talents_5[9]+"</td>\n" +
														"<td>"+dataset_talents_5[10]+"</td>\n" +
														"<td>"+dataset_talents_5[11]+"</td>\n" +
														"<td>"+dataset_talents_5[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
													"<td>උපකාරක පන්ති වලට සහබාගි වීම</td>\n" +
													"<td>"+dataset_talents_6[0]+"</td>\n" +
														"<td>"+dataset_talents_6[1]+"</td>\n" +
														"<td>"+dataset_talents_6[2]+"</td>\n" +
														"<td>"+dataset_talents_6[3]+"</td>\n" +
														"<td>"+dataset_talents_6[4]+"</td>\n" +
														"<td>"+dataset_talents_6[5]+"</td>\n" +
														"<td>"+dataset_talents_6[6]+"</td>\n" +
														"<td>"+dataset_talents_6[7]+"</td>\n" +
														"<td>"+dataset_talents_6[8]+"</td>\n" +
														"<td>"+dataset_talents_6[9]+"</td>\n" +
														"<td>"+dataset_talents_6[10]+"</td>\n" +
														"<td>"+dataset_talents_6[11]+"</td>\n" +
														"<td>"+dataset_talents_6[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
													"<td>වෙනත් කටයුතු</td>\n" +
													"<td>"+dataset_talents_7[0]+"</td>\n" +
														"<td>"+dataset_talents_7[1]+"</td>\n" +
														"<td>"+dataset_talents_7[2]+"</td>\n" +
														"<td>"+dataset_talents_7[3]+"</td>\n" +
														"<td>"+dataset_talents_7[4]+"</td>\n" +
														"<td>"+dataset_talents_7[5]+"</td>\n" +
														"<td>"+dataset_talents_7[6]+"</td>\n" +
														"<td>"+dataset_talents_7[7]+"</td>\n" +
														"<td>"+dataset_talents_7[8]+"</td>\n" +
														"<td>"+dataset_talents_7[9]+"</td>\n" +
														"<td>"+dataset_talents_7[10]+"</td>\n" +
														"<td>"+dataset_talents_7[11]+"</td>\n" +
														"<td>"+dataset_talents_7[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_talents_8[0]+"</td>\n" +
														"<td>"+dataset_talents_8[1]+"</td>\n" +
														"<td>"+dataset_talents_8[2]+"</td>\n" +
														"<td>"+dataset_talents_8[3]+"</td>\n" +
														"<td>"+dataset_talents_8[4]+"</td>\n" +
														"<td>"+dataset_talents_8[5]+"</td>\n" +
														"<td>"+dataset_talents_8[6]+"</td>\n" +
														"<td>"+dataset_talents_8[7]+"</td>\n" +
														"<td>"+dataset_talents_8[8]+"</td>\n" +
														"<td>"+dataset_talents_8[9]+"</td>\n" +
														"<td>"+dataset_talents_8[10]+"</td>\n" +
														"<td>"+dataset_talents_8[11]+"</td>\n" +
														"<td>"+dataset_talents_8[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_talents_9[0]+"</td>\n" +
														"<td>"+dataset_talents_9[1]+"</td>\n" +
														"<td>"+dataset_talents_9[2]+"</td>\n" +
														"<td>"+dataset_talents_9[3]+"</td>\n" +
														"<td>"+dataset_talents_9[4]+"</td>\n" +
														"<td>"+dataset_talents_9[5]+"</td>\n" +
														"<td>"+dataset_talents_9[6]+"</td>\n" +
														"<td>"+dataset_talents_9[7]+"</td>\n" +
														"<td>"+dataset_talents_9[8]+"</td>\n" +
														"<td>"+dataset_talents_9[9]+"</td>\n" +
														"<td>"+dataset_talents_9[10]+"</td>\n" +
														"<td>"+dataset_talents_9[11]+"</td>\n" +
														"<td>"+dataset_talents_9[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#80bfff\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_talents_10[0]+"</td>\n" +
														"<td>"+dataset_talents_10[1]+"</td>\n" +
														"<td>"+dataset_talents_10[2]+"</td>\n" +
														"<td>"+dataset_talents_10[3]+"</td>\n" +
														"<td>"+dataset_talents_10[4]+"</td>\n" +
														"<td>"+dataset_talents_10[5]+"</td>\n" +
														"<td>"+dataset_talents_10[6]+"</td>\n" +
														"<td>"+dataset_talents_10[7]+"</td>\n" +
														"<td>"+dataset_talents_10[8]+"</td>\n" +
														"<td>"+dataset_talents_10[9]+"</td>\n" +
														"<td>"+dataset_talents_10[10]+"</td>\n" +
														"<td>"+dataset_talents_10[11]+"</td>\n" +
														"<td>"+dataset_talents_10[12]+"</td>\n" +
													"\n" +
													"</tr>");
			
			//facilities table #d6d6c2
			$('#facilities_table_body').append("<tr style=\"background-color:#d6d6c2\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_facilities_1[0]+"</td>\n" +
														"<td>"+dataset_facilities_1[1]+"</td>\n" +
														"<td>"+dataset_facilities_1[2]+"</td>\n" +
														"<td>"+dataset_facilities_1[3]+"</td>\n" +
														"<td>"+dataset_facilities_1[4]+"</td>\n" +
														"<td>"+dataset_facilities_1[5]+"</td>\n" +
														"<td>"+dataset_facilities_1[6]+"</td>\n" +
														"<td>"+dataset_facilities_1[7]+"</td>\n" +
														"<td>"+dataset_facilities_1[8]+"</td>\n" +
														"<td>"+dataset_facilities_1[9]+"</td>\n" +
														"<td>"+dataset_facilities_1[10]+"</td>\n" +
														"<td>"+dataset_facilities_1[11]+"</td>\n" +
														"<td>"+dataset_facilities_1[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_facilities_2[0]+"</td>\n" +
														"<td>"+dataset_facilities_2[1]+"</td>\n" +
														"<td>"+dataset_facilities_2[2]+"</td>\n" +
														"<td>"+dataset_facilities_2[3]+"</td>\n" +
														"<td>"+dataset_facilities_2[4]+"</td>\n" +
														"<td>"+dataset_facilities_2[5]+"</td>\n" +
														"<td>"+dataset_facilities_2[6]+"</td>\n" +
														"<td>"+dataset_facilities_2[7]+"</td>\n" +
														"<td>"+dataset_facilities_2[8]+"</td>\n" +
														"<td>"+dataset_facilities_2[9]+"</td>\n" +
														"<td>"+dataset_facilities_2[10]+"</td>\n" +
														"<td>"+dataset_facilities_2[11]+"</td>\n" +
														"<td>"+dataset_facilities_2[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_facilities_3[0]+"</td>\n" +
														"<td>"+dataset_facilities_3[1]+"</td>\n" +
														"<td>"+dataset_facilities_3[2]+"</td>\n" +
														"<td>"+dataset_facilities_3[3]+"</td>\n" +
														"<td>"+dataset_facilities_3[4]+"</td>\n" +
														"<td>"+dataset_facilities_3[5]+"</td>\n" +
														"<td>"+dataset_facilities_3[6]+"</td>\n" +
														"<td>"+dataset_facilities_3[7]+"</td>\n" +
														"<td>"+dataset_facilities_3[8]+"</td>\n" +
														"<td>"+dataset_facilities_3[9]+"</td>\n" +
														"<td>"+dataset_facilities_3[10]+"</td>\n" +
														"<td>"+dataset_facilities_3[11]+"</td>\n" +
														"<td>"+dataset_facilities_3[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_facilities_4[0]+"</td>\n" +
														"<td>"+dataset_facilities_4[1]+"</td>\n" +
														"<td>"+dataset_facilities_4[2]+"</td>\n" +
														"<td>"+dataset_facilities_4[3]+"</td>\n" +
														"<td>"+dataset_facilities_4[4]+"</td>\n" +
														"<td>"+dataset_facilities_4[5]+"</td>\n" +
														"<td>"+dataset_facilities_4[6]+"</td>\n" +
														"<td>"+dataset_facilities_4[7]+"</td>\n" +
														"<td>"+dataset_facilities_4[8]+"</td>\n" +
														"<td>"+dataset_facilities_4[9]+"</td>\n" +
														"<td>"+dataset_facilities_4[10]+"</td>\n" +
														"<td>"+dataset_facilities_4[11]+"</td>\n" +
														"<td>"+dataset_facilities_4[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
													"<td>ගෙදරදොර කටයුතුවලට උපකාර කිරීම</td>\n" +
													"<td>"+dataset_facilities_5[0]+"</td>\n" +
														"<td>"+dataset_facilities_5[1]+"</td>\n" +
														"<td>"+dataset_facilities_5[2]+"</td>\n" +
														"<td>"+dataset_facilities_5[3]+"</td>\n" +
														"<td>"+dataset_facilities_5[4]+"</td>\n" +
														"<td>"+dataset_facilities_5[5]+"</td>\n" +
														"<td>"+dataset_facilities_5[6]+"</td>\n" +
														"<td>"+dataset_facilities_5[7]+"</td>\n" +
														"<td>"+dataset_facilities_5[8]+"</td>\n" +
														"<td>"+dataset_facilities_5[9]+"</td>\n" +
														"<td>"+dataset_facilities_5[10]+"</td>\n" +
														"<td>"+dataset_facilities_5[11]+"</td>\n" +
														"<td>"+dataset_facilities_5[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
													"<td>උපකාරක පන්ති වලට සහබාගි වීම</td>\n" +
													"<td>"+dataset_facilities_6[0]+"</td>\n" +
														"<td>"+dataset_facilities_6[1]+"</td>\n" +
														"<td>"+dataset_facilities_6[2]+"</td>\n" +
														"<td>"+dataset_facilities_6[3]+"</td>\n" +
														"<td>"+dataset_facilities_6[4]+"</td>\n" +
														"<td>"+dataset_facilities_6[5]+"</td>\n" +
														"<td>"+dataset_facilities_6[6]+"</td>\n" +
														"<td>"+dataset_facilities_6[7]+"</td>\n" +
														"<td>"+dataset_facilities_6[8]+"</td>\n" +
														"<td>"+dataset_facilities_6[9]+"</td>\n" +
														"<td>"+dataset_facilities_6[10]+"</td>\n" +
														"<td>"+dataset_facilities_6[11]+"</td>\n" +
														"<td>"+dataset_facilities_6[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
													"<td>වෙනත් කටයුතු</td>\n" +
													"<td>"+dataset_facilities_7[0]+"</td>\n" +
														"<td>"+dataset_facilities_7[1]+"</td>\n" +
														"<td>"+dataset_facilities_7[2]+"</td>\n" +
														"<td>"+dataset_facilities_7[3]+"</td>\n" +
														"<td>"+dataset_facilities_7[4]+"</td>\n" +
														"<td>"+dataset_facilities_7[5]+"</td>\n" +
														"<td>"+dataset_facilities_7[6]+"</td>\n" +
														"<td>"+dataset_facilities_7[7]+"</td>\n" +
														"<td>"+dataset_facilities_7[8]+"</td>\n" +
														"<td>"+dataset_facilities_7[9]+"</td>\n" +
														"<td>"+dataset_facilities_7[10]+"</td>\n" +
														"<td>"+dataset_facilities_7[11]+"</td>\n" +
														"<td>"+dataset_facilities_7[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_facilities_8[0]+"</td>\n" +
														"<td>"+dataset_facilities_8[1]+"</td>\n" +
														"<td>"+dataset_facilities_8[2]+"</td>\n" +
														"<td>"+dataset_facilities_8[3]+"</td>\n" +
														"<td>"+dataset_facilities_8[4]+"</td>\n" +
														"<td>"+dataset_facilities_8[5]+"</td>\n" +
														"<td>"+dataset_facilities_8[6]+"</td>\n" +
														"<td>"+dataset_facilities_8[7]+"</td>\n" +
														"<td>"+dataset_facilities_8[8]+"</td>\n" +
														"<td>"+dataset_facilities_8[9]+"</td>\n" +
														"<td>"+dataset_facilities_8[10]+"</td>\n" +
														"<td>"+dataset_facilities_8[11]+"</td>\n" +
														"<td>"+dataset_facilities_8[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_facilities_9[0]+"</td>\n" +
														"<td>"+dataset_facilities_9[1]+"</td>\n" +
														"<td>"+dataset_facilities_9[2]+"</td>\n" +
														"<td>"+dataset_facilities_9[3]+"</td>\n" +
														"<td>"+dataset_facilities_9[4]+"</td>\n" +
														"<td>"+dataset_facilities_9[5]+"</td>\n" +
														"<td>"+dataset_facilities_9[6]+"</td>\n" +
														"<td>"+dataset_facilities_9[7]+"</td>\n" +
														"<td>"+dataset_facilities_9[8]+"</td>\n" +
														"<td>"+dataset_facilities_9[9]+"</td>\n" +
														"<td>"+dataset_facilities_9[10]+"</td>\n" +
														"<td>"+dataset_facilities_9[11]+"</td>\n" +
														"<td>"+dataset_facilities_9[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#d6d6c2\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_facilities_10[0]+"</td>\n" +
														"<td>"+dataset_facilities_10[1]+"</td>\n" +
														"<td>"+dataset_facilities_10[2]+"</td>\n" +
														"<td>"+dataset_facilities_10[3]+"</td>\n" +
														"<td>"+dataset_facilities_10[4]+"</td>\n" +
														"<td>"+dataset_facilities_10[5]+"</td>\n" +
														"<td>"+dataset_facilities_10[6]+"</td>\n" +
														"<td>"+dataset_facilities_10[7]+"</td>\n" +
														"<td>"+dataset_facilities_10[8]+"</td>\n" +
														"<td>"+dataset_facilities_10[9]+"</td>\n" +
														"<td>"+dataset_facilities_10[10]+"</td>\n" +
														"<td>"+dataset_facilities_10[11]+"</td>\n" +
														"<td>"+dataset_facilities_10[12]+"</td>\n" +
													"\n" +
													"</tr>" );
			
			//family details table #df9fdf
			$('#family_details_table_body').append("<tr style=\"background-color:#df9fdf\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_family_details_1[0]+"</td>\n" +
														"<td>"+dataset_family_details_1[1]+"</td>\n" +
														"<td>"+dataset_family_details_1[2]+"</td>\n" +
														"<td>"+dataset_family_details_1[3]+"</td>\n" +
														"<td>"+dataset_family_details_1[4]+"</td>\n" +
														"<td>"+dataset_family_details_1[5]+"</td>\n" +
														"<td>"+dataset_family_details_1[6]+"</td>\n" +
														"<td>"+dataset_family_details_1[7]+"</td>\n" +
														"<td>"+dataset_family_details_1[8]+"</td>\n" +
														"<td>"+dataset_family_details_1[9]+"</td>\n" +
														"<td>"+dataset_family_details_1[10]+"</td>\n" +
														"<td>"+dataset_family_details_1[11]+"</td>\n" +
														"<td>"+dataset_family_details_1[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_family_details_2[0]+"</td>\n" +
														"<td>"+dataset_family_details_2[1]+"</td>\n" +
														"<td>"+dataset_family_details_2[2]+"</td>\n" +
														"<td>"+dataset_family_details_2[3]+"</td>\n" +
														"<td>"+dataset_family_details_2[4]+"</td>\n" +
														"<td>"+dataset_family_details_2[5]+"</td>\n" +
														"<td>"+dataset_family_details_2[6]+"</td>\n" +
														"<td>"+dataset_family_details_2[7]+"</td>\n" +
														"<td>"+dataset_family_details_2[8]+"</td>\n" +
														"<td>"+dataset_family_details_2[9]+"</td>\n" +
														"<td>"+dataset_family_details_2[10]+"</td>\n" +
														"<td>"+dataset_family_details_2[11]+"</td>\n" +
														"<td>"+dataset_family_details_2[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_family_details_3[0]+"</td>\n" +
														"<td>"+dataset_family_details_3[1]+"</td>\n" +
														"<td>"+dataset_family_details_3[2]+"</td>\n" +
														"<td>"+dataset_family_details_3[3]+"</td>\n" +
														"<td>"+dataset_family_details_3[4]+"</td>\n" +
														"<td>"+dataset_family_details_3[5]+"</td>\n" +
														"<td>"+dataset_family_details_3[6]+"</td>\n" +
														"<td>"+dataset_family_details_3[7]+"</td>\n" +
														"<td>"+dataset_family_details_3[8]+"</td>\n" +
														"<td>"+dataset_family_details_3[9]+"</td>\n" +
														"<td>"+dataset_family_details_3[10]+"</td>\n" +
														"<td>"+dataset_family_details_3[11]+"</td>\n" +
														"<td>"+dataset_family_details_3[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_family_details_4[0]+"</td>\n" +
														"<td>"+dataset_family_details_4[1]+"</td>\n" +
														"<td>"+dataset_family_details_4[2]+"</td>\n" +
														"<td>"+dataset_family_details_4[3]+"</td>\n" +
														"<td>"+dataset_family_details_4[4]+"</td>\n" +
														"<td>"+dataset_family_details_4[5]+"</td>\n" +
														"<td>"+dataset_family_details_4[6]+"</td>\n" +
														"<td>"+dataset_family_details_4[7]+"</td>\n" +
														"<td>"+dataset_family_details_4[8]+"</td>\n" +
														"<td>"+dataset_family_details_4[9]+"</td>\n" +
														"<td>"+dataset_family_details_4[10]+"</td>\n" +
														"<td>"+dataset_family_details_4[11]+"</td>\n" +
														"<td>"+dataset_family_details_4[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>ගෙදරදොර කටයුතුවලට උපකාර කිරීම</td>\n" +
													"<td>"+dataset_family_details_5[0]+"</td>\n" +
														"<td>"+dataset_family_details_5[1]+"</td>\n" +
														"<td>"+dataset_family_details_5[2]+"</td>\n" +
														"<td>"+dataset_family_details_5[3]+"</td>\n" +
														"<td>"+dataset_family_details_5[4]+"</td>\n" +
														"<td>"+dataset_family_details_5[5]+"</td>\n" +
														"<td>"+dataset_family_details_5[6]+"</td>\n" +
														"<td>"+dataset_family_details_5[7]+"</td>\n" +
														"<td>"+dataset_family_details_5[8]+"</td>\n" +
														"<td>"+dataset_family_details_5[9]+"</td>\n" +
														"<td>"+dataset_family_details_5[10]+"</td>\n" +
														"<td>"+dataset_family_details_5[11]+"</td>\n" +
														"<td>"+dataset_family_details_5[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>උපකාරක පන්ති වලට සහබාගි වීම</td>\n" +
													"<td>"+dataset_family_details_6[0]+"</td>\n" +
														"<td>"+dataset_family_details_6[1]+"</td>\n" +
														"<td>"+dataset_family_details_6[2]+"</td>\n" +
														"<td>"+dataset_family_details_6[3]+"</td>\n" +
														"<td>"+dataset_family_details_6[4]+"</td>\n" +
														"<td>"+dataset_family_details_6[5]+"</td>\n" +
														"<td>"+dataset_family_details_6[6]+"</td>\n" +
														"<td>"+dataset_family_details_6[7]+"</td>\n" +
														"<td>"+dataset_family_details_6[8]+"</td>\n" +
														"<td>"+dataset_family_details_6[9]+"</td>\n" +
														"<td>"+dataset_family_details_6[10]+"</td>\n" +
														"<td>"+dataset_family_details_6[11]+"</td>\n" +
														"<td>"+dataset_family_details_6[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>වෙනත් කටයුතු</td>\n" +
													"<td>"+dataset_family_details_7[0]+"</td>\n" +
														"<td>"+dataset_family_details_7[1]+"</td>\n" +
														"<td>"+dataset_family_details_7[2]+"</td>\n" +
														"<td>"+dataset_family_details_7[3]+"</td>\n" +
														"<td>"+dataset_family_details_7[4]+"</td>\n" +
														"<td>"+dataset_family_details_7[5]+"</td>\n" +
														"<td>"+dataset_family_details_7[6]+"</td>\n" +
														"<td>"+dataset_family_details_7[7]+"</td>\n" +
														"<td>"+dataset_family_details_7[8]+"</td>\n" +
														"<td>"+dataset_family_details_7[9]+"</td>\n" +
														"<td>"+dataset_family_details_7[10]+"</td>\n" +
														"<td>"+dataset_family_details_7[11]+"</td>\n" +
														"<td>"+dataset_family_details_7[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
														"<td>රුපවාහිනිය නැරඹීම</td>\n" +
														"<td>"+dataset_family_details_8[0]+"</td>\n" +
														"<td>"+dataset_family_details_8[1]+"</td>\n" +
														"<td>"+dataset_family_details_8[2]+"</td>\n" +
														"<td>"+dataset_family_details_8[3]+"</td>\n" +
														"<td>"+dataset_family_details_8[4]+"</td>\n" +
														"<td>"+dataset_family_details_8[5]+"</td>\n" +
														"<td>"+dataset_family_details_8[6]+"</td>\n" +
														"<td>"+dataset_family_details_8[7]+"</td>\n" +
														"<td>"+dataset_family_details_8[8]+"</td>\n" +
														"<td>"+dataset_family_details_8[9]+"</td>\n" +
														"<td>"+dataset_family_details_8[10]+"</td>\n" +
														"<td>"+dataset_family_details_8[11]+"</td>\n" +
														"<td>"+dataset_family_details_8[12]+"</td>\n" +
														"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>ක්‍රීඩා කිරීම</td>\n" +
													"<td>"+dataset_family_details_9[0]+"</td>\n" +
														"<td>"+dataset_family_details_9[1]+"</td>\n" +
														"<td>"+dataset_family_details_9[2]+"</td>\n" +
														"<td>"+dataset_family_details_9[3]+"</td>\n" +
														"<td>"+dataset_family_details_9[4]+"</td>\n" +
														"<td>"+dataset_family_details_9[5]+"</td>\n" +
														"<td>"+dataset_family_details_9[6]+"</td>\n" +
														"<td>"+dataset_family_details_9[7]+"</td>\n" +
														"<td>"+dataset_family_details_9[8]+"</td>\n" +
														"<td>"+dataset_family_details_9[9]+"</td>\n" +
														"<td>"+dataset_family_details_9[10]+"</td>\n" +
														"<td>"+dataset_family_details_9[11]+"</td>\n" +
														"<td>"+dataset_family_details_9[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>නිදාගැනීම</td>\n" +
													"<td>"+dataset_family_details_10[0]+"</td>\n" +
														"<td>"+dataset_family_details_10[1]+"</td>\n" +
														"<td>"+dataset_family_details_10[2]+"</td>\n" +
														"<td>"+dataset_family_details_10[3]+"</td>\n" +
														"<td>"+dataset_family_details_10[4]+"</td>\n" +
														"<td>"+dataset_family_details_10[5]+"</td>\n" +
														"<td>"+dataset_family_details_10[6]+"</td>\n" +
														"<td>"+dataset_family_details_10[7]+"</td>\n" +
														"<td>"+dataset_family_details_10[8]+"</td>\n" +
														"<td>"+dataset_family_details_10[9]+"</td>\n" +
														"<td>"+dataset_family_details_10[10]+"</td>\n" +
														"<td>"+dataset_family_details_10[11]+"</td>\n" +
														"<td>"+dataset_family_details_10[12]+"</td>\n" +
													"\n" +
													"</tr>\n" +
													"<tr style=\"background-color:#df9fdf\">\n" +
													"<td>පොත්පත් කියවීම</td>\n" +
													"<td>"+dataset_family_details_11[0]+"</td>\n" +
														"<td>"+dataset_family_details_11[1]+"</td>\n" +
														"<td>"+dataset_family_details_11[2]+"</td>\n" +
														"<td>"+dataset_family_details_11[3]+"</td>\n" +
														"<td>"+dataset_family_details_11[4]+"</td>\n" +
														"<td>"+dataset_family_details_11[5]+"</td>\n" +
														"<td>"+dataset_family_details_11[6]+"</td>\n" +
														"<td>"+dataset_family_details_11[7]+"</td>\n" +
														"<td>"+dataset_family_details_11[8]+"</td>\n" +
														"<td>"+dataset_family_details_11[9]+"</td>\n" +
														"<td>"+dataset_family_details_11[10]+"</td>\n" +
														"<td>"+dataset_family_details_11[11]+"</td>\n" +
														"<td>"+dataset_family_details_11[12]+"</td>\n" +
													"\n" +
													"</tr>");

             
        },
        error: function (e) {
            sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

    var barChartData1 = {
        labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [70, 80, 50, 90, 70, 60, 85, 45, 65, 85, 0, 0, 0]
            },
            {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [90, 50, 30, 00, 40, 60, 75, 80, 75, 85, 0, 0, 0]
            }
        ]

    }

    var lineChartData2 = {
        labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
        datasets: [
            {
                label: "දිනපතා පැමිණීම",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [70, 80, 50, 90, 70, 60, 85, 45, 65, 85, 0, 0, 0]
            },
            {
                label: "පොහොය ප��?මිණීම",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [90, 50, 30, 00, 40, 60, 75, 80, 75, 85, 0, 0, 0]
            }
        ]

    }



    var ctx2 = document.getElementById("canvas2").getContext("2d");
    window.myLine = new Chart(ctx2).Line(lineChartData2, {
        responsive: true
    });


  
    

    
    

    
var lineChartData3to8 = {
					labels: ["Grade2", "Grade3", "Grade4", "Grade5", "Grade6", "Grade7", "Grade8", "Grade9", "Grade10", "Grade11", "Grade12", "Grade13", "Grade14"],
					datasets: [
						{
							label: "වංච෿ වලින් තොර බව",
							fillColor: "rgba(255, 128, 128,0.2)",
							strokeColor: "rgba(255, 0, 0,1)",
							pointColor: "rgba(255, 0, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 0, 0,1)",
							data: dataset_guna_13
						},
						{
							label: "අවධ෿නය ග෿නීමට ඇති ක෿ම෿ත්ත",
							fillColor: "rgba(153, 153, 255,0.2)",
							strokeColor: "rgba(0, 0, 255,1)",
							pointColor: "rgba(0, 0, 255,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 0, 255,1)",
							data: dataset_guna_14
						}, {
							label: "කත෿ කිරීමට ඇති ප්‿රිය බව",
							fillColor: "rgba(102, 255, 102,0.2)",
							strokeColor: "rgba(0, 153, 0,1)",
							pointColor: "rgba(0, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(0, 153, 0,1)",
							data: dataset_guna_15
						}, {
							label: "අන් යට උදව් කිරීම",
							fillColor: "rgba(255, 204, 128,0.2)",
							strokeColor: "rgba(255, 153, 0,1)",
							pointColor: "rgba(255, 153, 0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(255, 153, 0,1)",
							data: dataset_guna_16
						},
					]

				}
    

    var ctx9 = document.getElementById("canvas9").getContext("2d");
    window.myLine = new Chart(ctx9).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx10 = document.getElementById("canvas10").getContext("2d");
    window.myLine = new Chart(ctx10).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx11 = document.getElementById("canvas11").getContext("2d");
    window.myLine = new Chart(ctx11).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx12 = document.getElementById("canvas12").getContext("2d");
    window.myLine = new Chart(ctx12).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx13 = document.getElementById("canvas13").getContext("2d");
    window.myLine = new Chart(ctx13).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx14 = document.getElementById("canvas14").getContext("2d");
    window.myLine = new Chart(ctx14).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx15 = document.getElementById("canvas15").getContext("2d");
    window.myLine = new Chart(ctx15).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx16 = document.getElementById("canvas16").getContext("2d");
    window.myLine = new Chart(ctx16).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx17 = document.getElementById("canvas17").getContext("2d");
    window.myLine = new Chart(ctx17).Line(lineChartData3to8, {
        responsive: true
    });
    var ctx18 = document.getElementById("canvas18").getContext("2d");
    window.myLine = new Chart(ctx18).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx19 = document.getElementById("canvas19").getContext("2d");
    window.myLine = new Chart(ctx19).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx20 = document.getElementById("canvas20").getContext("2d");
    window.myLine = new Chart(ctx20).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx21 = document.getElementById("canvas21").getContext("2d");
    window.myLine = new Chart(ctx21).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx22 = document.getElementById("canvas22").getContext("2d");
    window.myLine = new Chart(ctx22).Line(lineChartData3to8, {
        responsive: true
    });
    var ctx23 = document.getElementById("canvas23").getContext("2d");
    window.myLine = new Chart(ctx23).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx24 = document.getElementById("canvas24").getContext("2d");
    window.myLine = new Chart(ctx24).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx25 = document.getElementById("canvas25").getContext("2d");
    window.myLine = new Chart(ctx25).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx26 = document.getElementById("canvas26").getContext("2d");
    window.myLine = new Chart(ctx26).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx27 = document.getElementById("canvas27").getContext("2d");
    window.myLine = new Chart(ctx27).Line(lineChartData3to8, {
        responsive: true
    });
    var ctx28 = document.getElementById("canvas28").getContext("2d");
    window.myLine = new Chart(ctx28).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx29 = document.getElementById("canvas29").getContext("2d");
    window.myLine = new Chart(ctx29).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx30 = document.getElementById("canvas30").getContext("2d");
    window.myLine = new Chart(ctx30).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx31 = document.getElementById("canvas31").getContext("2d");
    window.myLine = new Chart(ctx31).Line(lineChartData3to8, {
        responsive: true
    });

    var ctx32 = document.getElementById("canvas32").getContext("2d");
    window.myLine = new Chart(ctx32).Line(lineChartData3to8, {
        responsive: true
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
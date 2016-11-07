$(document).ready(function() {
	var sessionid = localStorage.getItem("usr_name");
	var usr_api_key = localStorage.getItem("usr_api_key");
    var baseURL = localStorage.getItem("baseURL");
	
	//excel to jason
	var excel_input = null;
	var excel_output = null;
	
	if(sessionid == null){
		swal({   title: "You are not logged in",   text: "Please login to the System.",   timer: 3000,   showConfirmButton: false });
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
	
	
	
	$("#studentBehaviorAddingForm").validate({
        rules: {
			ignore: ".ignore",
			//students validations
			ryear: {
                required: true,
                minlength: 4,
				maxlength: 4,
				number: true,
				range: [1970, 2050]
            },
            nsun: {
                required: true,
				number: true,
				range: [0, 50]
            },
			npoya: {
                required: true,
				number: true,
				range: [0, 13]
            }
			
        },
        messages: {
			//student validations
			ryear: {
                required: "Admission Year Required",
                minlength: "You entered less than four characters",
				maxlength: "You entered more than four characters",
				number: "This can only contain numbers",
				range: "This should be within the range 1970-2050"
            },
            nsun: {
                required: "Number of Sundays is required",
				number: "This should be a number",
				range: "This should be within the range 0-50"
				
            },
            npoya: {
                required: "Number of Poya Days is required",
				number: "This should be a number",
				range: "This should be within the range 0-13"
            }
            
        },
		ignore: "input[type='file']",
		
        submitHandler: function (form) {
			
			//get form values
			var ryear = $('#ryear').val();
			var nsun = $('#nsun').val();
			var npoya = $('#npoya').val();
			
			
			var excelsheets;
			for(var key in excel_input) {
				if(excel_input.hasOwnProperty(key)) {
					excelsheets = excel_input[key];
					for(i=0;i<excelsheets.length;i++){
						var inputsheet = excelsheets[i];
						
						var outputdata = {};
						
						outputdata.year = ryear;
						outputdata.stu_admission_number = inputsheet.stu_admission_number;
						
						//Attendence eka
						outputdata.clz_evaluation_cri_1 = (parseInt(inputsheet.sunday_attendence)/nsun)*100;
						outputdata.clz_evaluation_cri_2 = (parseInt(inputsheet.poyaday_attendence)/npoya)*100;

						//guna set eka
						outputdata.clz_evaluation_cri_3 = (parseInt(inputsheet.guna_1));
						outputdata.clz_evaluation_cri_4 = (parseInt(inputsheet.guna_2));
						outputdata.clz_evaluation_cri_5 = (parseInt(inputsheet.guna_3));
						outputdata.clz_evaluation_cri_6 = (parseInt(inputsheet.guna_4));
						outputdata.clz_evaluation_cri_7 = (parseInt(inputsheet.guna_5));
						outputdata.clz_evaluation_cri_8 = (parseInt(inputsheet.guna_6));
						outputdata.clz_evaluation_cri_9 = (parseInt(inputsheet.guna_7));
						outputdata.clz_evaluation_cri_10 = (parseInt(inputsheet.guna_8));
						outputdata.clz_evaluation_cri_11 = (parseInt(inputsheet.guna_9));
						outputdata.clz_evaluation_cri_12 = (parseInt(inputsheet.guna_10));
						outputdata.clz_evaluation_cri_13 = (parseInt(inputsheet.guna_11));
						outputdata.clz_evaluation_cri_14 = (parseInt(inputsheet.guna_12));
						outputdata.clz_evaluation_cri_15 = (parseInt(inputsheet.guna_13));
						outputdata.clz_evaluation_cri_16 = (parseInt(inputsheet.guna_14));
						outputdata.clz_evaluation_cri_17 = (parseInt(inputsheet.guna_15));
						outputdata.clz_evaluation_cri_18 = (parseInt(inputsheet.guna_16));
						outputdata.clz_evaluation_cri_19 = (parseInt(inputsheet.guna_17));
						outputdata.clz_evaluation_cri_20 = (parseInt(inputsheet.guna_18));
						outputdata.clz_evaluation_cri_21 = (parseInt(inputsheet.guna_19));
						outputdata.clz_evaluation_cri_22 = (parseInt(inputsheet.guna_20));
						
						//after_school_ details
						outputdata.clz_evaluation_cri_23 = (parseInt(inputsheet.after_school_1));
						outputdata.clz_evaluation_cri_24 = (parseInt(inputsheet.after_school_2));
						outputdata.clz_evaluation_cri_25 = (parseInt(inputsheet.after_school_3));
						outputdata.clz_evaluation_cri_26 = (parseInt(inputsheet.after_school_4));
						outputdata.clz_evaluation_cri_27 = (parseInt(inputsheet.after_school_5));
						outputdata.clz_evaluation_cri_28 = (parseInt(inputsheet.after_school_6));
						outputdata.clz_evaluation_cri_29 = (parseInt(inputsheet.after_school_7));
						
						//tv_programmes_ details
						outputdata.clz_evaluation_cri_30 = (parseInt(inputsheet.tv_programmes_1));
						outputdata.clz_evaluation_cri_31 = (parseInt(inputsheet.tv_programmes_2));
						outputdata.clz_evaluation_cri_32 = (parseInt(inputsheet.tv_programmes_3));
						outputdata.clz_evaluation_cri_33 = (parseInt(inputsheet.tv_programmes_4));
						outputdata.clz_evaluation_cri_34 = (parseInt(inputsheet.tv_programmes_5));
						outputdata.clz_evaluation_cri_35 = (parseInt(inputsheet.tv_programmes_6));
						outputdata.clz_evaluation_cri_36 = (parseInt(inputsheet.tv_programmes_7));
						outputdata.clz_evaluation_cri_37 = (parseInt(inputsheet.tv_programmes_8));
						outputdata.clz_evaluation_cri_38 = (parseInt(inputsheet.tv_programmes_9));
						outputdata.clz_evaluation_cri_39 = (parseInt(inputsheet.tv_programmes_10));
						outputdata.clz_evaluation_cri_40 = (parseInt(inputsheet.tv_programmes_11));
						
						//reading_choice details
						outputdata.clz_evaluation_cri_1_copy1 = (parseInt(inputsheet.reading_choice_1));
						outputdata.clz_evaluation_cri_2_copy1 = (parseInt(inputsheet.reading_choice_2));
						outputdata.clz_evaluation_cri_3_copy1 = (parseInt(inputsheet.reading_choice_3));
						outputdata.clz_evaluation_cri_4_copy1 = (parseInt(inputsheet.reading_choice_4));
						outputdata.clz_evaluation_cri_5_copy1 = (parseInt(inputsheet.reading_choice_5));
						outputdata.clz_evaluation_cri_6_copy1 = (parseInt(inputsheet.reading_choice_6));
						
						//responsibility of students
						if(inputsheet.responsibility_1 == 1){
						   outputdata.clz_evaluation_cri_41 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_41 = 'No';
						}

						if(inputsheet.responsibility_2 == 1){
						   outputdata.clz_evaluation_cri_42 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_42 = 'No';
						}

						if(inputsheet.responsibility_3 == 1){
						   outputdata.clz_evaluation_cri_43 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_43 = 'No';
						}

						if(inputsheet.responsibility_4 == 1){
						   outputdata.clz_evaluation_cri_44 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_44 = 'No';
						}

						if(inputsheet.responsibility_5 == 1){
						   outputdata.clz_evaluation_cri_45 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_45 = 'No';
						}

						if(inputsheet.responsibility_6 == 1){
						   outputdata.clz_evaluation_cri_46 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_46 = 'No';
						}

						if(inputsheet.responsibility_7 == 1){
						   outputdata.clz_evaluation_cri_47 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_47 = 'No';
						}

						if(inputsheet.responsibility_8 == 1){
						   outputdata.clz_evaluation_cri_48 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_48 = 'No';
						}

						if(inputsheet.responsibility_9 == 1){
						   outputdata.clz_evaluation_cri_49 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_49 = 'No';
						}

						if(inputsheet.responsibility_10 == 1){
						   outputdata.clz_evaluation_cri_50 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_50 = 'No';
						}
						
						
						//home_behavior_ details
						if(inputsheet.home_behavior_1 == 1){
						   outputdata.clz_evaluation_cri_51 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_51 = 'No';
						}

						if(inputsheet.home_behavior_2 == 1){
						   outputdata.clz_evaluation_cri_52 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_52 = 'No';
						}

						if(inputsheet.home_behavior_3 == 1){
						   outputdata.clz_evaluation_cri_53 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_53 = 'No';
						}

						if(inputsheet.home_behavior_4 == 1){
						   outputdata.clz_evaluation_cri_54 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_54 = 'No';
						}

						if(inputsheet.home_behavior_5 == 1){
						   outputdata.clz_evaluation_cri_55 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_55 = 'No';
						}
						
						
						//talent_ details
						if(inputsheet.talent_1 == 1){
						   outputdata.clz_evaluation_cri_56 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_56 = 'No';
						}

						if(inputsheet.talent_2 == 1){
						   outputdata.clz_evaluation_cri_57 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_57 = 'No';
						}

						if(inputsheet.talent_3 == 1){
						   outputdata.clz_evaluation_cri_58 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_58 = 'No';
						}

						if(inputsheet.talent_4 == 1){
						   outputdata.clz_evaluation_cri_59 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_59 = 'No';
						}

						if(inputsheet.talent_5 == 1){
						   outputdata.clz_evaluation_cri_60 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_60 = 'No';
						}

						if(inputsheet.talent_6 == 1){
						   outputdata.clz_evaluation_cri_61 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_61 = 'No';
						}

						if(inputsheet.talent_7 == 1){
						   outputdata.clz_evaluation_cri_62 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_62 = 'No';
						}

						if(inputsheet.talent_8 == 1){
						   outputdata.clz_evaluation_cri_63 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_63 = 'No';
						}

						if(inputsheet.talent_9 == 1){
						   outputdata.clz_evaluation_cri_64 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_64 = 'No';
						}

						if(inputsheet.talent_10 == 1){
						   outputdata.clz_evaluation_cri_65 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_65 = 'No';
						}
						
						//facilities_ of student home
						if(inputsheet.facilities_1 == 1){
						   outputdata.clz_evaluation_cri_66 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_66 = 'No';
						}

						if(inputsheet.facilities_2 == 1){
						   outputdata.clz_evaluation_cri_67 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_67 = 'No';
						}

						if(inputsheet.facilities_3 == 1){
						   outputdata.clz_evaluation_cri_68 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_68 = 'No';
						}

						if(inputsheet.facilities_4 == 1){
						   outputdata.clz_evaluation_cri_69 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_69 = 'No';
						}

						if(inputsheet.facilities_5 == 1){
						   outputdata.clz_evaluation_cri_70 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_70 = 'No';
						}

						if(inputsheet.facilities_6 == 1){
						   outputdata.clz_evaluation_cri_71 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_71 = 'No';
						}

						if(inputsheet.facilities_7 == 1){
						   outputdata.clz_evaluation_cri_72 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_72 = 'No';
						}

						if(inputsheet.facilities_8 == 1){
						   outputdata.clz_evaluation_cri_73 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_73 = 'No';
						}

						if(inputsheet.facilities_9 == 1){
						   outputdata.clz_evaluation_cri_74 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_74 = 'No';
						}

						if(inputsheet.facilities_10 == 1){
						   outputdata.clz_evaluation_cri_75 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_75 = 'No';
						}
						
						//family_details_ 
						if(inputsheet.family_details_1 == 1){
						   outputdata.clz_evaluation_cri_41_copy1 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_41_copy1 = 'No';
						}

						if(inputsheet.family_details_2 == 1){
						   outputdata.clz_evaluation_cri_42_copy1 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_42_copy1 = 'No';
						}

						if(inputsheet.family_details_3 == null){
						   outputdata.clz_evaluation_cri_43_copy1 = 'No';
						}else{
						   outputdata.clz_evaluation_cri_43_copy1 = inputsheet.family_details_3;
						}

						if(inputsheet.family_details_4 == null){
						   outputdata.clz_evaluation_cri_44_copy1 = 'No';
						}else{
						   outputdata.clz_evaluation_cri_44_copy1 = inputsheet.family_details_4;
						}

						if(inputsheet.family_details_5 == null){
						   outputdata.clz_evaluation_cri_45_copy1 = 'Un Known';
						}else{
						   outputdata.clz_evaluation_cri_45_copy1 = inputsheet.family_details_5;
						}

						if(inputsheet.family_details_6 == null){
						   outputdata.clz_evaluation_cri_46_copy1 = 'Un Known';
						}else{
						   outputdata.clz_evaluation_cri_46_copy1 = inputsheet.family_details_6;
						}

						if(inputsheet.family_details_7 == null){
						   outputdata.clz_evaluation_cri_47_copy1 = 'Un Known';
						}else{
						   outputdata.clz_evaluation_cri_47_copy1 = inputsheet.family_details_7;
						}

						if(inputsheet.family_details_8 == 1){
						   outputdata.clz_evaluation_cri_48_copy1 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_48_copy1 = 'No';
						}

						if(inputsheet.family_details_9 == 1){
						   outputdata.clz_evaluation_cri_49_copy1 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_49_copy1 = 'No';
						}

						if(inputsheet.family_details_10 == 1){
						   outputdata.clz_evaluation_cri_50_copy1 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_50_copy1 = 'No';
						}

						if(inputsheet.family_details_11 == 1){
						   outputdata.clz_evaluation_cri_51_copy1 = 'Yes';
						}else{
						   outputdata.clz_evaluation_cri_51_copy1 = 'No';
						}
						

	
						
						//log data
						//console.log(outputdata);

						//call service to insert one recode
						$.ajax({
							type: "POST",
							url: baseURL + "excelfeed/StudentBehaviorService.php/student_behavior_register",
							dataType: "json",
							data : outputdata,
							beforeSend: function (xhr) {
								xhr.setRequestHeader('Authorization', usr_api_key);
							},
							success: function (resp) {
								sweetAlert("Success!", "Successfully uploaded Excel File", "success");
							},
							error: function (e) {
								sweetAlert("Oops...", "Something went wrong!" + e, "error");
							}
						});
					
					}
				}
			}
						
		}
			
			
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



	
	//Excel file reader begin...	
	var X = XLSX;
	var XW = {
		/* worker message */
		msg: 'xlsx',
		/* worker scripts */
		rABS: './xlsxworker2.js',
		norABS: './xlsxworker1.js',
		noxfer: './xlsxworker.js'
	};

	var rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";


	var wtf_mode = false;

	function fixdata(data) {
		var o = "", l = 0, w = 10240;
		for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
		o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
		return o;
	}

	function ab2str(data) {
		var o = "", l = 0, w = 10240;
		for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint16Array(data.slice(l*w,l*w+w)));
		o+=String.fromCharCode.apply(null, new Uint16Array(data.slice(l*w)));
		return o;
	}

	function s2ab(s) {
		var b = new ArrayBuffer(s.length*2), v = new Uint16Array(b);
		for (var i=0; i != s.length; ++i) v[i] = s.charCodeAt(i);
		return [v, b];
	}

	function xw_noxfer(data, cb) {
		var worker = new Worker(XW.noxfer);
		worker.onmessage = function(e) {
			switch(e.data.t) {
				case 'ready': break;
				case 'e': console.error(e.data.d); break;
				case XW.msg: cb(JSON.parse(e.data.d)); break;
			}
		};
		var arr = rABS ? data : btoa(fixdata(data));
		worker.postMessage({d:arr,b:rABS});
	}

	function xw_xfer(data, cb) {
		var worker = new Worker(rABS ? XW.rABS : XW.norABS);
		worker.onmessage = function(e) {
			switch(e.data.t) {
				case 'ready': break;
				case 'e': console.error(e.data.d); break;
				default: xx=ab2str(e.data).replace(/\n/g,"\\n").replace(/\r/g,"\\r");  cb(JSON.parse(xx)); break;
			}
		};
		if(rABS) {
			var val = s2ab(data);
			worker.postMessage(val[1], [val[1]]);
		} else {
			worker.postMessage(data, [data]);
		}
	}

	function xw(data, cb) {
		transferable = true;
		if(transferable) xw_xfer(data, cb);
		else xw_noxfer(data, cb);
	}

	function get_radio_value( radioName ) {
		var radios = document.getElementsByName( radioName );
		for( var i = 0; i < radios.length; i++ ) {
			if( radios[i].checked || radios.length === 1 ) {
				return radios[i].value;
			}
		}
	}

	function to_json(workbook) {
		var result = {};
		workbook.SheetNames.forEach(function(sheetName) {
			var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
			if(roa.length > 0){
				result[sheetName] = roa;
			}
		});
		return result;
	}

	var tarea = document.getElementById('b64data');
	function b64it() {
		if(typeof console !== 'undefined') console.log("onload", new Date());
		var wb = X.read(tarea.value, {type: 'base64',WTF:wtf_mode});
		process_wb(wb);
	}

	function process_wb(wb) {
		var excel = JSON.stringify(to_json(wb), 2, 2);
		excel_input = JSON.parse(excel);
		//console.log(JSON.parse(excel));
	}

	var drop = document.getElementById('drop');
	function handleDrop(e) {
		e.stopPropagation();
		e.preventDefault();
		rABS = true;
		use_worker = true;
		var files = e.dataTransfer.files;
		var f = files[0];
		{
			var reader = new FileReader();
			var name = f.name;
			reader.onload = function(e) {
				if(typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
				var data = e.target.result;
				if(use_worker) {
					xw(data, process_wb);
				} else {
					var wb;
					if(rABS) {
						wb = X.read(data, {type: 'binary'});
					} else {
					var arr = fixdata(data);
						wb = X.read(btoa(arr), {type: 'base64'});
					}
					process_wb(wb);
				}
			};
			if(rABS) reader.readAsBinaryString(f);
			else reader.readAsArrayBuffer(f);
		}
	}

	function handleDragover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
	}

	if(drop.addEventListener) {
		drop.addEventListener('dragenter', handleDragover, false);
		drop.addEventListener('dragover', handleDragover, false);
		drop.addEventListener('drop', handleDrop, false);
	}


	var xlf = document.getElementById('xlf');
	function handleFile(e) {
		rABS = true;
		use_worker = true;
		var files = e.target.files;
		var f = files[0];
		{
			var reader = new FileReader();
			var name = f.name;
			reader.onload = function(e) {
				if(typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
				var data = e.target.result;
				if(use_worker) {
					xw(data, process_wb);
				} else {
					var wb;
					if(rABS) {
						wb = X.read(data, {type: 'binary'});
					} else {
					var arr = fixdata(data);
						wb = X.read(btoa(arr), {type: 'base64'});
					}
					process_wb(wb);
				}
			};
			if(rABS) reader.readAsBinaryString(f);
			else reader.readAsArrayBuffer(f);
		}
	}

	if(xlf.addEventListener) xlf.addEventListener('change', handleFile, false);
	//Excel file reader end...	
	
	
	
	
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
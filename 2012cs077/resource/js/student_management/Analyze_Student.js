$(document).ready(function () {
    var sessionid = localStorage.getItem("usr_name");
    var usr_api_key = localStorage.getItem("usr_api_key");
    var baseURL = localStorage.getItem("baseURL");
	
	
	//to submit form need those things
	var studentReccomendationTable = $("#studentReccomendationTable").DataTable();
	var desiescountTable = $("#desiescountTable").DataTable();
	var desiesTable = $("#desiesTable").DataTable();
	var schoolsTable = $("#schoolsTable").DataTable();
	var cityTable = $("#cityTable").DataTable();
	var far_occTable = $("#far_occTable").DataTable();
	var mot_occTable = $("#mot_occTable").DataTable();
	var gur_occTable = $("#gur_occTable").DataTable();
	var no_farTable = $("#no_farTable").DataTable();
	var no_motTable = $("#no_motTable").DataTable();
	
	
	var year = 1500;
	var greads = '0';
	var clases = 'x';
	
	var barChartOptions = {
				  //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
				  scaleBeginAtZero: true,
				  //Boolean - Whether grid lines are shown across the chart
				  scaleShowGridLines: true,
				  //String - Colour of the grid lines
				  scaleGridLineColor: "rgba(0,0,0,.05)",
				  //Number - Width of the grid lines
				  scaleGridLineWidth: 1,
				  //Boolean - Whether to show horizontal lines (except X axis)
				  scaleShowHorizontalLines: true,
				  //Boolean - Whether to show vertical lines (except Y axis)
				  scaleShowVerticalLines: true,
				  //Boolean - If there is a stroke on each bar
				  barShowStroke: true,
				  //Number - Pixel width of the bar stroke
				  barStrokeWidth: 2,
				  //Number - Spacing between each of the X value sets
				  barValueSpacing: 5,
				  //Number - Spacing between data sets within X values
				  barDatasetSpacing: 1,
				  //String - A legend template
				  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
				  //Boolean - whether to make the chart responsive
				  responsive: true,
				  maintainAspectRatio: true
				};

	var pieOptions = {
				  //Boolean - Whether we should show a stroke on each segment
				  segmentShowStroke: true,
				  //String - The colour of each segment stroke
				  segmentStrokeColor: "#fff",
				  //Number - The width of each segment stroke
				  segmentStrokeWidth: 2,
				  //Number - The percentage of the chart that we cut out of the middle
				  percentageInnerCutout: 50, // This is 0 for Pie charts
				  //Number - Amount of animation steps
				  animationSteps: 100,
				  //String - Animation easing effect
				  animationEasing: "easeOutBounce",
				  //Boolean - Whether we animate the rotation of the Doughnut
				  animateRotate: true,
				  //Boolean - Whether we animate scaling the Doughnut from the centre
				  animateScale: false,
				  //Boolean - whether to make the chart responsive to window resizing
				  responsive: true,
				  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
				  maintainAspectRatio: true,
				  //String - A legend template
				  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
				};

    if (sessionid == null) {
        swal({title: "You are not logged in", text: "Pleace loggin to the system.", timer: 3000, showConfirmButton: false});
        setTimeout(function () {
            window.location.href = "../../";
        }, 3000);
    }
	
	
	
	//to get dynamic view for searching
	$('#whole').click(function(){
		$("#zone").addClass("hidden");
		$("#gread").addClass("hidden");
		$("#class").addClass("hidden");
	});
    $('#zone_wise').click(function(){
		$("#zone").removeClass("hidden");
		$("#gread").addClass("hidden");
		$("#class").addClass("hidden");
	});
	$('#gread_wise').click(function(){
		$("#zone").addClass("hidden");
		$("#gread").removeClass("hidden");
		$("#class").addClass("hidden");
	});
	$('#class_wise').click(function(){
		$("#zone").addClass("hidden");
		$("#gread").removeClass("hidden");
		$("#class").removeClass("hidden");
	});
	
	//form submit
	$("#studentAnalyser").validate({
        rules: {
			//students validations
            years: {
                required: true
            }
        },
        messages: {
			//student validations
            years: {
                required: "Student analise years Required"
			}
        },
        submitHandler: function (form) {
			var selecter_type = $('input[name=select_wise]:checked', '#studentAnalyser').val();
			
			if(selecter_type == "whole"){
				greads = '2,3,4,5,6,7,8,9,10,11,12,13,14';
				clases = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p';
			}else if(selecter_type == "zone_wise"){
				var selected_zone = $("#zone1").val();
				if(selected_zone == "p"){
					greads = '2,3';
					clases = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p';
				}else if(selected_zone == "k"){
					greads = '4,5';
					clases = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p';
				}else if(selected_zone == "jp"){
					greads = '6,7,8,9,10';
					clases = 'a,b,c,d,e,f,g';
				}else if(selected_zone == "jg"){
					greads = '6,7,8,9,10';
					clases = 'h,i,j,k,l,m,n,o,p';
				}else if(selected_zone == "u"){
					greads = '11,12,13,14';
					clases = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p';
				}else{
					sweetAlert("Oops...", "Can't happen", "error");
				}
			}else if(selecter_type == "gread_wise"){
				var selected_gread = $("#gread1").val();
				greads = selected_gread;
				clases = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p';
			}else if(selecter_type == "class_wise"){
				var selected_gread = $("#gread1").val();
				var selected_class = $("#class1").val();
				greads = selected_gread;
				clases = selected_class;
			}else{
				sweetAlert("Oops...", "Can't happen", "error");
			}
			year = $("#years").val();
			var obj = {'repotYear':year, 'greads':greads, 'classes':clases};

			//load the data
			$.ajax({  
			   type: "POST",  
			   url: baseURL+"student_ext_managment/StudentProfileService.php/student_horizontal_analisis",  
			   dataType: "json", 
			   data: obj,
			   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', usr_api_key);},
			   success: function(resp){
				if(resp.error == false){
				console.log(resp);
					
				$("#att1").html(resp.behavior.Avarage_sunday + "<sup style=\"font-size: 20px\">%</sup>");
				$("#att2").html(resp.behavior.Max_sunday + "<sup style=\"font-size: 20px\">%</sup>");
				$("#att3").html(resp.behavior.Min_sunday + "<sup style=\"font-size: 20px\">%</sup>");
				$("#att4").html(resp.behavior.Avarage_poyaday + "<sup style=\"font-size: 20px\">%</sup>");
				$("#att5").html(resp.behavior.Max_poyaday + "<sup style=\"font-size: 20px\">%</sup>");
				$("#att6").html(resp.behavior.Min_poyaday + "<sup style=\"font-size: 20px\">%</sup>");
					
					
				//-------------
				//- Guna CHART -
				//-------------
				var gunaChartData = {
					  labels: ["උත්සාහය", "නිර්භීතකම", "හරි වැරදි දන්නා බව ", "කීකරු බව", "වංචාවලින් තොර බව", "අන් අයට උදවු කිරීම", "වැඩිහිටියන්ට ගරු කිරීම ", "සාමූහික කටයුතු", "මතක ශක්තිය වැඩි බව", "ක්‍රමානුකුලව බව", "නායකත්වය", "ඉදිරිපත් වීම", "ආදරය  සෙවීම ", "අවධානයට  කැමැත්ත ", "කතා කිරීමට ඇති ප්‍රිය බව ", "දඟකාරකම", "කුතුහලය", "තරඟකාරීත්වය", " මුරණ්ඩුකම ","පාලනයට අකමැති බව"],
					  datasets: [
						{
						  label: "ගුණ",
						  fillColor: "#f39c12",
						  strokeColor: "rgba(210, 214, 222, 1)",
						  pointColor: "rgba(210, 214, 222, 1)",
						  pointStrokeColor: "#c1c7d1",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(220,220,220,1)",
						  data: [parseInt(resp.behavior.guna_1), parseInt(resp.behavior.guna_2), parseInt(resp.behavior.guna_3), parseInt(resp.behavior.guna_4), parseInt(resp.behavior.guna_5),
								parseInt(resp.behavior.guna_6), parseInt(resp.behavior.guna_7), parseInt(resp.behavior.guna_8), parseInt(resp.behavior.guna_9), parseInt(resp.behavior.guna_10),
								parseInt(resp.behavior.guna_11), parseInt(resp.behavior.guna_12), parseInt(resp.behavior.guna_13), parseInt(resp.behavior.guna_14), parseInt(resp.behavior.guna_15),
								parseInt(resp.behavior.guna_16), parseInt(resp.behavior.guna_17), parseInt(resp.behavior.guna_18), parseInt(resp.behavior.guna_19), parseInt(resp.behavior.guna_20)]
						}
					  ]
						};
				var gunaChartCanvas = $("#guna_chart").get(0).getContext("2d");
				var gunaChart = new Chart(gunaChartCanvas);
				barChartOptions.datasetFill = false;
				gunaChart.Bar(gunaChartData, barChartOptions);	
					
				
				//-------------
				//- after_school CHART -
				//-------------
				var total_after_school = parseInt(resp.behavior.after_school_1) + parseInt(resp.behavior.after_school_2) + parseInt(resp.behavior.after_school_3) + parseInt(resp.behavior.after_school_4) 
										+ parseInt(resp.behavior.after_school_5) + parseInt(resp.behavior.after_school_6) + parseInt(resp.behavior.after_school_7);
				// Get context with jQuery - using jQuery's .get() method.
				var after_schoolCanvas = $("#after_school").get(0).getContext("2d");
				var after_schoolChart = new Chart(after_schoolCanvas);
				var after_schoolData = [
				  {
					value: (total_after_school - parseInt(resp.behavior.after_school_1)),
					color: "#f56954",
					highlight: "#f56954",
					label: "රුපවාහිනිය නැරඹීම"
				  },
				  {
					value: (total_after_school - parseInt(resp.behavior.after_school_2)),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "ක්‍රීඩා කිරීම"
				  },
				  {
					value: (total_after_school - parseInt(resp.behavior.after_school_3)),
					color: "#f39c12",
					highlight: "#f39c12",
					label: "නිදාගැනීම "
				  },
				  {
					value: (total_after_school - parseInt(resp.behavior.after_school_4)),
					color: "#00c0ef",
					highlight: "#00c0ef",
					label: "පොත්පත් කියවීම"
				  },
				  {
					value: (total_after_school - parseInt(resp.behavior.after_school_5)),
					color: "#3c8dbc",
					highlight: "#3c8dbc",
					label: "ගෙදරදොර කටයුතුවලට උපකාර කිරීම"
				  },
				  {
					value: (total_after_school - parseInt(resp.behavior.after_school_6)),
					color: "#d2d6de",
					highlight: "#d2d6de",
					label: "උපකාරක පන්ති වලට සහභාගි  වීම"
				  },
				  {
					value: (total_after_school - parseInt(resp.behavior.after_school_7)),
					color: "#4dff4d",
					highlight: "#4dff4d",
					label: "පරිගණක හා අන්තර්ජාල භාවිතය "
				  }
				];
				after_schoolChart.Doughnut(after_schoolData, pieOptions);
				legend(document.getElementById("after_schoolLegend"), after_schoolData, after_schoolChart);
				
				
				//-------------
				//- readings CHART -
				//-------------
				var total_readings = parseInt(resp.behavior.readings_1) + parseInt(resp.behavior.readings_2) + parseInt(resp.behavior.readings_3) + parseInt(resp.behavior.readings_4) 
										+ parseInt(resp.behavior.readings_5) + parseInt(resp.behavior.readings_6);
				// Get context with jQuery - using jQuery's .get() method.
				var readingsCanvas = $("#reading_pattern").get(0).getContext("2d");
				var readingsChart = new Chart(readingsCanvas);
				var readingsData = [
				  {
					value: (total_readings - parseInt(resp.behavior.readings_1)),
					color: "#f56954",
					highlight: "#f56954",
					label: "චිත්‍ර කතා"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_2)),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "සඟරා"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_3)),
					color: "#f39c12",
					highlight: "#f39c12",
					label: "පුවත්පත්"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_4)),
					color: "#00c0ef",
					highlight: "#00c0ef",
					label: "කතා පොත්"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_5)),
					color: "#3c8dbc",
					highlight: "#3c8dbc",
					label: "දහම් පොත්"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_6)),
					color: "#d2d6de",
					highlight: "#d2d6de",
					label: "විෂය සමගාමී පොත්"
				  }
				];
				readingsChart.Doughnut(readingsData, pieOptions);	
				legend(document.getElementById("readingLegend"), readingsData, readingsChart);	
					
				
				//-------------
				//- tv_programmes CHART -
				//-------------
				
				var total_tv_programmes = parseInt(resp.behavior.tv_programmes_1) + parseInt(resp.behavior.tv_programmes_2) + parseInt(resp.behavior.tv_programmes_3) + parseInt(resp.behavior.tv_programmes_4) 
										+ parseInt(resp.behavior.tv_programmes_5) + parseInt(resp.behavior.tv_programmes_6) + parseInt(resp.behavior.tv_programmes_7) + parseInt(resp.behavior.tv_programmes_8)
										+ parseInt(resp.behavior.tv_programmes_9) + parseInt(resp.behavior.tv_programmes_10) + parseInt(resp.behavior.tv_programmes_11);
				// Get context with jQuery - using jQuery's .get() method.
				var tv_programmesCanvas = $("#tv_programmes").get(0).getContext("2d");
				var tv_programmesChart = new Chart(tv_programmesCanvas);
				var tv_programmesData = [
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_1)),
					color: "#f56954",
					highlight: "#f56954",
					label: "කාටුන්"
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_2)),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "ළමා වැඩසටහන්"
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_3)),
					color: "#f39c12",
					highlight: "#f39c12",
					label: "දැනුම මිනුම වැඩසටහන්"
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_4)),
					color: "#00c0ef",
					highlight: "#00c0ef",
					label: "ටෙලිනාට්‍ය"
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_5)),
					color: "#3c8dbc",
					highlight: "#3c8dbc",
					label: "චිත්‍රපටි"
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_6)),
					color: "#d2d6de",
					highlight: "#d2d6de",
					label: "අධ්‍යපනික වැඩසටහන්   "
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_7)),
					color: "#4dff4d",
					highlight: "#4dff4d",
					label: "ගායන  හා නර්තන වැඩසටහන් "
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_8)),
					color: "#ffff66",
					highlight: "#ffff66",
					label: "ක්‍රීඩා වැඩසටහන්"
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_9)),
					color: "#ff66d9",
					highlight: "#ff66d9",
					label: "රූපවාහිනී සාකච්ඡා "
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_10)),
					color: "#ff8533",
					highlight: "#ff8533",
					label: "ප්‍රවaත්ති හා කාලීන වැඩසටහන්"
				  },
				  {
					value: (total_tv_programmes - parseInt(resp.behavior.tv_programmes_11)),
					color: "#800000",
					highlight: "#800000",
					label: "ආගමික වැඩසටහන්"
				  }
				];
				tv_programmesChart.Doughnut(tv_programmesData, pieOptions);
				legend(document.getElementById("tv_programmesLegend"), tv_programmesData, tv_programmesChart);
					
					
					
				//-------------
				//- Responsibilities CHART -
				//-------------
				var responsibilitiesChartData = {
					  labels: ["මුළුතැන්ගෙයි කටයුතු", " නිවස පිරිසිදු කරයි ", "ගෙවත්ත පිරිසිදු කරයි", "සොයුරන් රැකබලා ගනියි", " රෝගී ඥාතීන් රැකබලා ගනියි", "පෞද්ගලික වැඩ  කරගනියි ", "ආගමික කටයුතුවල නිරත වෙයි ", "වෙළඳපොලින් භාණ්ඩ රැගෙන එයි", "දෙමව්පියන්ගේ කටයුතුවලට ", "වෙනත් වගකීම් "],
					  datasets: [
						{
						  label: "වගකීම් දරණ දරුවන්",
						  fillColor: "#f39c12",
						  strokeColor: "#f39c12",
						  pointColor: "#f39c12",
						  pointStrokeColor: "#c1c7d1",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(220,220,220,1)",
						  data: [parseInt(resp.behavior.responsibilities_1_yes), parseInt(resp.behavior.responsibilities_2_yes), parseInt(resp.behavior.responsibilities_3_yes), parseInt(resp.behavior.responsibilities_4_yes), parseInt(resp.behavior.responsibilities_5_yes),
								parseInt(resp.behavior.responsibilities_6_yes), parseInt(resp.behavior.responsibilities_7_yes), parseInt(resp.behavior.responsibilities_8_yes), parseInt(resp.behavior.responsibilities_9_yes), parseInt(resp.behavior.responsibilities_10_yes)]
						},
						{
						  label: "වගකීම් නො දරණ දරුවන්",
						  fillColor: "rgba(60,141,188,0.9)",
						  strokeColor: "rgba(60,141,188,0.8)",
						  pointColor: "#3b8bba",
						  pointStrokeColor: "rgba(60,141,188,1)",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(60,141,188,1)",
						  data: [parseInt(resp.behavior.responsibilities_1_no), parseInt(resp.behavior.responsibilities_2_no), parseInt(resp.behavior.responsibilities_3_no), parseInt(resp.behavior.responsibilities_4_no), parseInt(resp.behavior.responsibilities_5_no),
								parseInt(resp.behavior.responsibilities_6_no), parseInt(resp.behavior.responsibilities_7_no), parseInt(resp.behavior.responsibilities_8_no), parseInt(resp.behavior.responsibilities_9_no), parseInt(resp.behavior.responsibilities_10_no)]
						}
					  ]
						};
				var responsibilitiesChartCanvas = $("#responsibilities_chart").get(0).getContext("2d");
				var responsibilitiesChart = new Chart(responsibilitiesChartCanvas);
				barChartOptions.datasetFill = false;
				responsibilitiesChart.Bar(responsibilitiesChartData, barChartOptions);
				legend(document.getElementById("responsibilitiesLegend"), responsibilitiesChartData, responsibilitiesChart);	
				
				
				
				//-------------
				//- HB CHART -
				//-------------
				var home_behaviorChartData = {
					  labels: ["තනිව සිටීමට කැමතියි", "දෙමව්පියන් හා නිතර ගැවසේ", "යහළුවන් ඇසුර සොයා යයි", "සැමදෙනාටම උපකාර කිරීමට පෙළඹේ", "නිතර කේන්ති ගනියි  "],
					  datasets: [
						{
						  label: "ඔව් ලෙස පිළිතුර ලබා දුන් දරුවන්",
						  fillColor: "#f39c12",
						  strokeColor: "#f39c12",
						  pointColor: "#f39c12",
						  pointStrokeColor: "#c1c7d1",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(220,220,220,1)",
						  data: [parseInt(resp.behavior.home_behavior_1_yes), parseInt(resp.behavior.home_behavior_2_yes), parseInt(resp.behavior.home_behavior_3_yes), parseInt(resp.behavior.home_behavior_4_yes), parseInt(resp.behavior.home_behavior_5_yes)]
						},
						{
						  label: "නැත ලෙස පිළිතුර ලබා දුන් දරුවන්",
						  fillColor: "rgba(60,141,188,0.9)",
						  strokeColor: "rgba(60,141,188,0.8)",
						  pointColor: "#3b8bba",
						  pointStrokeColor: "rgba(60,141,188,1)",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(60,141,188,1)",
						  data: [parseInt(resp.behavior.home_behavior_1_no), parseInt(resp.behavior.home_behavior_2_no), parseInt(resp.behavior.home_behavior_3_no), parseInt(resp.behavior.home_behavior_4_no), parseInt(resp.behavior.home_behavior_5_no)]
						}
					  ]
						};
				var home_behaviorChartCanvas = $("#home_behavior_chart").get(0).getContext("2d");
				var home_behaviorChart = new Chart(home_behaviorChartCanvas);
				barChartOptions.datasetFill = false;
				home_behaviorChart.Bar(home_behaviorChartData, barChartOptions);
				legend(document.getElementById("home_behaviorLegend"), home_behaviorChartData, home_behaviorChart);
				
				
				
				//-------------
				//- talents CHART -
				//-------------
				var talentsChartData = {
					  labels: ["කථිකත්වය", "චිත්‍ර ඇඳීම", "වාදනය", "ගායනය", "නර්තනය", "මුර්ති නිර්මාණය", "අලුත් දෑ නිර්මාණය", "නිර්මාණාත්මක ලේඛනය", "විශේෂ අධ්‍යාපනික දක්ෂතා ", "ක්‍රීඩා"],
					  datasets: [
						{
						  label: "හැකියාව සහිත දරුවන්",
						  fillColor: "#f39c12",
						  strokeColor: "#f39c12",
						  pointColor: "#f39c12",
						  pointStrokeColor: "#c1c7d1",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(220,220,220,1)",
						  data: [parseInt(resp.behavior.talents_1_yes), parseInt(resp.behavior.talents_2_yes), parseInt(resp.behavior.talents_3_yes), parseInt(resp.behavior.talents_4_yes), parseInt(resp.behavior.talents_5_yes),
								parseInt(resp.behavior.talents_6_yes), parseInt(resp.behavior.talents_7_yes), parseInt(resp.behavior.talents_8_yes), parseInt(resp.behavior.talents_9_yes), parseInt(resp.behavior.talents_10_yes)]
						},
						{
						  label: "හැකියාව නොමැති  දරුවන්",
						  fillColor: "rgba(60,141,188,0.9)",
						  strokeColor: "rgba(60,141,188,0.8)",
						  pointColor: "#3b8bba",
						  pointStrokeColor: "rgba(60,141,188,1)",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(60,141,188,1)",
						  data: [parseInt(resp.behavior.talents_1_no), parseInt(resp.behavior.talents_2_no), parseInt(resp.behavior.talents_3_no), parseInt(resp.behavior.talents_4_no), parseInt(resp.behavior.talents_5_no),
								parseInt(resp.behavior.talents_6_no), parseInt(resp.behavior.talents_7_no), parseInt(resp.behavior.talents_8_no), parseInt(resp.behavior.talents_9_no), parseInt(resp.behavior.talents_10_no)]
						}
					  ]
						};
				var talentsChartCanvas = $("#talents_chart").get(0).getContext("2d");
				var talentsChart = new Chart(talentsChartCanvas);
				barChartOptions.datasetFill = false;
				talentsChart.Bar(talentsChartData, barChartOptions);
				legend(document.getElementById("talentsLegend"), talentsChartData, talentsChart);	
					
					
				//-------------
				//- facilities CHART -
				//-------------
				var facilitiesChartData = {
					  labels: ["විදුලිය", "නළ ජලය", "ගුවන් විදුලිය", "රුපවාහිනිය", "දුරකථන", "පරිගණකය", "අන්තර්ජාලය", "සමාජ ජාලා භාවිතය", "Peo tv", "Smart Phone"],
					  datasets: [
						{
						  label: "Guna",
						  fillColor: "#f39c12",
						  strokeColor: "#f39c12",
						  pointColor: "#f39c12",
						  pointStrokeColor: "#c1c7d1",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(220,220,220,1)",
						  data: [parseInt(resp.behavior.facilities_1_yes), parseInt(resp.behavior.facilities_2_yes), parseInt(resp.behavior.facilities_3_yes), parseInt(resp.behavior.facilities_4_yes), parseInt(resp.behavior.facilities_5_yes),
								parseInt(resp.behavior.facilities_6_yes), parseInt(resp.behavior.facilities_7_yes), parseInt(resp.behavior.facilities_8_yes), parseInt(resp.behavior.facilities_9_yes), parseInt(resp.behavior.facilities_10_yes)]
						},
						{
						  label: "Digital Goods",
						  fillColor: "rgba(60,141,188,0.9)",
						  strokeColor: "rgba(60,141,188,0.8)",
						  pointColor: "#3b8bba",
						  pointStrokeColor: "rgba(60,141,188,1)",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(60,141,188,1)",
						  data: [parseInt(resp.behavior.facilities_1_no), parseInt(resp.behavior.facilities_2_no), parseInt(resp.behavior.facilities_3_no), parseInt(resp.behavior.facilities_4_no), parseInt(resp.behavior.facilities_5_no),
								parseInt(resp.behavior.facilities_6_no), parseInt(resp.behavior.facilities_7_no), parseInt(resp.behavior.facilities_8_no), parseInt(resp.behavior.facilities_9_no), parseInt(resp.behavior.facilities_10_no)]
						}
					  ]
						};
				var facilitiesChartCanvas = $("#facilities_chart").get(0).getContext("2d");
				var facilitiesChart = new Chart(facilitiesChartCanvas);
				barChartOptions.datasetFill = false;
				facilitiesChart.Bar(facilitiesChartData, barChartOptions);
				legend(document.getElementById("facilitiesLegend"), facilitiesChartData, facilitiesChart);		
					
					
					
				//-------------
				//- readings CHART -
				//-------------
		/*		var total_readings = parseInt(resp.behavior.readings_1) + parseInt(resp.behavior.readings_2) + parseInt(resp.behavior.readings_3) + parseInt(resp.behavior.readings_4) 
										+ parseInt(resp.behavior.readings_5) + parseInt(resp.behavior.readings_6);
				// Get context with jQuery - using jQuery's .get() method.
				var readingsCanvas = $("#reading_pattern").get(0).getContext("2d");
				var readingsChart = new Chart(readingsCanvas);
				var readingsData = [
				  {
					value: (total_readings - parseInt(resp.behavior.readings_1)),
					color: "#f56954",
					highlight: "#f56954",
					label: "Chrome"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_2)),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "IE"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_3)),
					color: "#f39c12",
					highlight: "#f39c12",
					label: "FireFox"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_4)),
					color: "#00c0ef",
					highlight: "#00c0ef",
					label: "Safari"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_5)),
					color: "#3c8dbc",
					highlight: "#3c8dbc",
					label: "Opera"
				  },
				  {
					value: (total_readings - parseInt(resp.behavior.readings_6)),
					color: "#d2d6de",
					highlight: "#d2d6de",
					label: "Navigator"
				  }
				];
				readingsChart.Doughnut(readingsData, pieOptions);	
				legend(document.getElementById("readingLegend"), readingsData, readingsChart);	*/
					
				
				//-------------
				//- father_live CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var father_liveCanvas = $("#father_live").get(0).getContext("2d");
				var father_liveChart = new Chart(father_liveCanvas);
				var father_liveData = [
				  {
					value: parseInt(resp.behavior.family_details_1_yes),
					color: "#f56954",
					highlight: "#f56954",
					label: "පියා ජීවතුන් අතර සිටින දරුවන්"
				  },
				  {
					value: parseInt(resp.behavior.family_details_1_no),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "පියා ජීවතුන් අතර නො සිටින දරුවන්"
				  }
				];
				father_liveChart.Doughnut(father_liveData, pieOptions);
				legend(document.getElementById("father_liveLegend"), father_liveData, father_liveChart);	
					
				//-------------
				//- mother_live CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var mother_liveCanvas = $("#mother_live").get(0).getContext("2d");
				var mother_liveChart = new Chart(mother_liveCanvas);
				var mother_liveData = [
				  {
					value: parseInt(resp.behavior.family_details_2_yes),
					color: "#f56954",
					highlight: "#f56954",
					label: "මව ජීවතුන් අතර සිටින දරුවන්"
				  },
				  {
					value: parseInt(resp.behavior.family_details_2_no),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "මව ජීවතුන් අතර නො  සිටින දරුවන්"
				  }
				];
				mother_liveChart.Doughnut(mother_liveData, pieOptions);
				legend(document.getElementById("mother_liveLegend"), mother_liveData, mother_liveChart);		
					
				//-------------
				//- father_ill CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var father_illCanvas = $("#father_ill").get(0).getContext("2d");
				var father_illChart = new Chart(father_illCanvas);
				var father_illData = [
				  {
					value: parseInt(resp.behavior.family_details_3_yes),
					color: "#f56954",
					highlight: "#f56954",
					label: "පියා දැඩි රෝගයකින් පෙලෙන දරුවන්"
				  },
				  {
					value: parseInt(resp.behavior.family_details_3_no),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "පියා දැඩි රෝගයකින්  නො පෙලෙන දරුවන්"
				  }
				];
				father_illChart.Doughnut(father_illData, pieOptions);
				legend(document.getElementById("father_illLegend"), father_illData, father_illChart);	
					
				//-------------
				//- mother_ill CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var mother_illCanvas = $("#mother_ill").get(0).getContext("2d");
				var mother_illChart = new Chart(mother_illCanvas);
				var mother_illData = [
				  {
					value: parseInt(resp.behavior.family_details_4_yes),
					color: "#f56954",
					highlight: "#f56954",
					label: "මව දැඩි රෝගයකින් පෙලෙන දරුවන්"
				  },
				  {
					value: parseInt(resp.behavior.family_details_4_no),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "මව දැඩි රෝගයකින් නො පෙලෙන දරුවන්"
				  }
				];
				mother_illChart.Doughnut(mother_illData, pieOptions);
				legend(document.getElementById("mother_illLegend"), mother_illData, mother_illChart);		


				//-------------
				//- lives with CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var lives_withCanvas = $("#lives_with").get(0).getContext("2d");
				var lives_withChart = new Chart(lives_withCanvas);
				var lives_withData = [
				  {
					value: parseInt(resp.behavior.family_details_5_1),
					color: "#f56954",
					highlight: "#f56954",
					label: "දෙමාපියන් සමග"
				  },
				  {
					value: parseInt(resp.behavior.family_details_5_2),
					color: "#4dff4d",
					highlight: "#4dff4d",
					label: "මව සමග "
				  },{
					value: parseInt(resp.behavior.family_details_5_3),
					color: "#ffff66",
					highlight: "#ffff66",
					label: "පියා සමග "
				  },
				  {
					value: parseInt(resp.behavior.family_details_5_4),
					color: "#ff66d9",
					highlight: "#ff66d9",
					label: "සහෝදර/සහෝදරියන් සමග "
				  },{
					value: parseInt(resp.behavior.family_details_5_5),
					color: "#ff8533",
					highlight: "#ff8533",
					label: "වෙනත් ඥාතියෙකු සමග"
				  },
				  {
					value: parseInt(resp.behavior.family_details_5_6),
					color: "#800000",
					highlight: "#800000",
					label: "යම් ආයතනයක භාරකරුවකු සමග "
				  }
				];
				lives_withChart.Doughnut(lives_withData, pieOptions);
				legend(document.getElementById("lives_withLegend"), lives_withData, lives_withChart);	
					
				//-------------
				//- comes with CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var comes_withCanvas = $("#comes_with").get(0).getContext("2d");
				var comes_withChart = new Chart(comes_withCanvas);
				var comes_withData = [
				  {
					value: parseInt(resp.behavior.family_details_6_1),
					color: "#f56954",
					highlight: "#f56954",
					label: "දෙමාපියන් සමග"
				  },
				  {
					value: parseInt(resp.behavior.family_details_6_2),
					color: "#4dff4d",
					highlight: "#4dff4d",
					label: "මව සමග "
				  },{
					value: parseInt(resp.behavior.family_details_6_3),
					color: "#ffff66",
					highlight: "#ffff66",
					label: "පියා සමග"
				  },
				  {
					value: parseInt(resp.behavior.family_details_6_4),
					color: "#ff66d9",
					highlight: "#ff66d9",
					label: "සහෝදර/සහෝදරියන් සමග"
				  },{
					value: parseInt(resp.behavior.family_details_6_5),
					color: "#ff8533",
					highlight: "#ff8533",
					label: "වෙනත් ඥාතියෙකු සමග"
				  },
				  {
					value: parseInt(resp.behavior.family_details_6_6),
					color: "#800000",
					highlight: "#800000",
					label: "යම් ආයතනයක භාරකරුවකු සමග "
				  }
				];
				comes_withChart.Doughnut(comes_withData, pieOptions);
				legend(document.getElementById("comes_withLegend"), comes_withData, comes_withChart);		
				
				//-------------
				//- comes from -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var comes_fromCanvas = $("#comes_from").get(0).getContext("2d");
				var comes_fromChart = new Chart(comes_fromCanvas);
				var comes_fromData = [
				  {
					value: parseInt(resp.behavior.family_details_7_1),
					color: "#f56954",
					highlight: "#f56954",
					label: "පා ගමනින් "
				  },
				  {
					value: parseInt(resp.behavior.family_details_7_2),
					color: "#4dff4d",
					highlight: "#4dff4d",
					label: "පොදු ප්‍රවාහන මගින් "
				  },{
					value: parseInt(resp.behavior.family_details_7_3),
					color: "#ffff66",
					highlight: "#ffff66",
					label: "පෞද්ගලික ප්‍රවාහන මගින් "
				  },
				  {
					value: parseInt(resp.behavior.family_details_7_4),
					color: "#ff66d9",
					highlight: "#ff66d9",
					label: "පාසල් වැන් රථ මගින් "
				  }
				];
				comes_fromChart.Doughnut(comes_fromData, pieOptions);
				legend(document.getElementById("comes_fromLegend"), comes_fromData, comes_fromChart);		
					
				//-------------
				//- father_sill CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var father_sillCanvas = $("#father_sill").get(0).getContext("2d");
				var father_sillChart = new Chart(father_sillCanvas);
				var father_sillData = [
				  {
					value: parseInt(resp.behavior.family_details_8_yes),
					color: "#f56954",
					highlight: "#f56954",
					label: "දරුවන් සමග පියා සිල් සමාදන් වන"
				  },
				  {
					value: parseInt(resp.behavior.family_details_8_no),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "දරුවන් සමග පියා සිල් සමාදන් නො වන"
				  }
				];
				father_sillChart.Doughnut(father_sillData, pieOptions);
				legend(document.getElementById("father_sillLegend"), father_sillData, father_sillChart);	
					
				//-------------
				//- mother_sill CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var mother_sillCanvas = $("#mother_sill").get(0).getContext("2d");
				var mother_sillChart = new Chart(mother_sillCanvas);
				var mother_sillData = [
				  {
					value: parseInt(resp.behavior.family_details_9_yes),
					color: "#f56954",
					highlight: "#f56954",
					label: "දරුවන් සමග මව සිල් සමාදන් වන"
				  },
				  {
					value: parseInt(resp.behavior.family_details_9_no),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "දරුවන් සමග මව සිල් සමාදන් නො වන"
				  }
				];
				mother_sillChart.Doughnut(mother_sillData, pieOptions);
				legend(document.getElementById("mother_sillLegend"), mother_sillData, mother_sillChart);		
	
					
				//-------------
				//- father_drink CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var father_drinkCanvas = $("#father_drink").get(0).getContext("2d");
				var father_drinkChart = new Chart(father_drinkCanvas);
				var father_drinkData = [
				  {
					value: parseInt(resp.behavior.family_details_8_yes),
					color: "#f56954",
					highlight: "#f56954",
					label: "පියා මත් පන් පානය කරන"
				  },
				  {
					value: parseInt(resp.behavior.family_details_8_no),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "පියා මත් පන් පානය නො කරන"
				  }
				];
				father_drinkChart.Doughnut(father_drinkData, pieOptions);
				legend(document.getElementById("father_drinkLegend"), father_drinkData, father_drinkChart);	
					
				//-------------
				//- mother_drink CHART -
				//-------------
				// Get context with jQuery - using jQuery's .get() method.
				var mother_drinkCanvas = $("#mother_drink").get(0).getContext("2d");
				var mother_drinkChart = new Chart(mother_drinkCanvas);
				var mother_drinkData = [
				  {
					value: parseInt(resp.behavior.family_details_9_yes),
					color: "#f56954",
					highlight: "#f56954",
					label: "නිවසේ වෙනත් අයෙක් මත් පැන් පානය කරන"
				  },
				  {
					value: parseInt(resp.behavior.family_details_9_no),
					color: "#00a65a",
					highlight: "#00a65a",
					label: "නිවසේ වෙනත් අයෙක් මත් පැන් පානය නො කරන"
				  }
				];
				mother_drinkChart.Doughnut(mother_drinkData, pieOptions);
				legend(document.getElementById("mother_drinkLegend"), mother_drinkData, mother_drinkChart);			
					
					
				//-------------
				//- Reccomendation CHART -
				//-------------
				var Numberof_recodes_reccomendation = parseInt(resp.reccomendation_count.Numberof_recodes);
				var rect1 = (parseInt(resp.reccomendation_count.t1rec)/Numberof_recodes_reccomendation)*100;
				var rect2 = (parseInt(resp.reccomendation_count.t2rec)/Numberof_recodes_reccomendation)*100;
				var rect3 = (parseInt(resp.reccomendation_count.t3rec)/Numberof_recodes_reccomendation)*100;
				var rect4 = (parseInt(resp.reccomendation_count.t4rec)/Numberof_recodes_reccomendation)*100;
				var rect5 = (parseInt(resp.reccomendation_count.t5rec)/Numberof_recodes_reccomendation)*100;
				var reccomendationChartData = {
					  labels: ["දක්ෂතා හා ජයග්‍රහණ ", "චර්යාවේ විෂමතා ", "පවුල් පසුබිමේ ව්‍යාකුලතා ", "නායකත්වය හා සහභාගීත්වය ", "යහපත් ක්‍රියාකාරකම් "],
					  datasets: [
						{
						  label: "නිර්දේශිත දරුවන් ප්‍රමාණය",
						  fillColor: "rgba(60,141,188,0.9)",
						  strokeColor: "rgba(60,141,188,0.8)",
						  pointColor: "#3b8bba",
						  pointStrokeColor: "rgba(60,141,188,1)",
						  pointHighlightFill: "#fff",
						  pointHighlightStroke: "rgba(60,141,188,1)",
						  data: [rect1, rect2, rect3, rect4, rect5]
						}
					  ]
						};
				var reccomendationChartCanvas = $("#reccomendation_chart").get(0).getContext("2d");
				var reccomendationChart = new Chart(reccomendationChartCanvas);
				barChartOptions.datasetFill = false;
				reccomendationChart.Bar(reccomendationChartData, barChartOptions);
				legend(document.getElementById("reccomendationLegend"), reccomendationChartData, reccomendationChart);	
					
					
					
				//load data to stu reccomendation table
				studentReccomendationTable.destroy();
				$('#studentReccomendationTableBody').empty();
				for (i = 0; i < resp.reccomendation.length; i++) {
					$("#studentReccomendationTableBody").append(
									"<tr><td>" + resp.reccomendation[i].rec_id + "</td><td>" + resp.reccomendation[i].stu_admission_number + "</td><td>"
									+ resp.reccomendation[i].stu_full_name + "</td><td>" +resp.reccomendation[i].rec_year + "</td><td>" 
									+resp.reccomendation[i].rec_type_name + "</td><td>" +resp.reccomendation[i].rec_topic + "</td><td>" 
									+resp.reccomendation[i].rec_discription + "</td></tr>" );
				}			
				//to run data table
				studentReccomendationTable = $("#studentReccomendationTable").DataTable();	
				
				
			
	
				//load data to stu desies table
				desiescountTable.destroy();
				$('#desiescountTableBody').empty();
				for (i = 0; i < resp.desies_count.length; i++) {
					$("#desiescountTableBody").append(
									"<tr><td>" + resp.desies_count[i].dis_name + "</td><td>" + resp.desies_count[i].dis_explanation + "</td><td>"
									+ resp.desies_count[i].number_of_student_falls_ill+ "</td></tr>" );
				}			
				//to run data table
				desiescountTable = $("#desiescountTable").DataTable();	
					
					
					
					
				//load data to stu desiesTable table
				desiesTable.destroy();
				$('#desiesTableBody').empty();
				for (i = 0; i < resp.desies.length; i++) {
					$("#desiesTableBody").append(
									"<tr><td>" + resp.desies[i].stu_admission_number + "</td><td>" + resp.desies[i].stu_full_name + "</td><td>"
									+ resp.desies[i].dis_name + "</td><td>" +resp.desies[i].dis_explanation + "</td><td>" 
									+resp.desies[i].dis_found_year + "</td></tr>" );
				}			
				desiesTable = $("#desiesTable").DataTable();		
				
				
				
				
				//load data to stu schoolsTable table
				schoolsTable.destroy();
				$('#schoolsTableBody').empty();
				for (i = 0; i < resp.schools.length; i++) {
					$("#schoolsTableBody").append(
									"<tr><td>" + resp.schools[i].sch_name + "</td><td>" + resp.schools[i].sch_situated_in + "</td><td>"
									+ resp.schools[i].number_of_student_attend+ "</td></tr>" );
				}			
				schoolsTable = $("#schoolsTable").DataTable();		
				
				
				
				//load data to stu cityTable table
				cityTable.destroy();
				$('#cityTableBody').empty();
				for (i = 0; i < resp.city.length; i++) {
					$("#cityTableBody").append(
									"<tr><td>" + resp.city[i].stu_city + "</td><td>" + resp.city[i].number_of_student_livesin+ "</td></tr>" );
				}			
				cityTable = $("#cityTable").DataTable();		
					
					
					
				$("#shd1").html(resp.distence.Avg_distance_to_home + "<sup style=\"font-size: 20px\">%</sup>");
				$("#shd2").html(resp.distence.Max_distance_to_home + "<sup style=\"font-size: 20px\">%</sup>");
				$("#shd3").html(resp.distence.Min_distance_to_home + "<sup style=\"font-size: 20px\">%</sup>");	
					
					
					
				//load data to stu far_occTable table
				far_occTable.destroy();
				$('#far_occTableBody').empty();
				for (i = 0; i < resp.far_occ.length; i++) {
					$("#far_occTableBody").append(
									"<tr><td>" + resp.far_occ[i].occ_type_name_far + "</td><td>" + resp.far_occ[i].occ_type_description_far + "</td><td>"
									+ resp.far_occ[i].number_of_workers_far+ "</td></tr>" );
				}			
				far_occTable = $("#far_occTable").DataTable();	

				//load data to stu mot_occTable table
				mot_occTable.destroy();
				$('#mot_occTableBody').empty();
				for (i = 0; i < resp.mot_occ.length; i++) {
					$("#mot_occTableBody").append(
									"<tr><td>" + resp.mot_occ[i].occ_type_name1_mot + "</td><td>" + resp.mot_occ[i].occ_type_description1_mot + "</td><td>"
									+ resp.mot_occ[i].number_of_workers_mot+ "</td></tr>" );
				}			
				mot_occTable = $("#mot_occTable").DataTable();	

				//load data to stu gur_occTable table
				gur_occTable.destroy();
				$('#gur_occTableBody').empty();
				for (i = 0; i < resp.gur_occ.length; i++) {
					$("#gur_occTableBody").append(
									"<tr><td>" + resp.gur_occ[i].occ_type_name_gur + "</td><td>" + resp.gur_occ[i].occ_type_description_gur + "</td><td>"
									+ resp.gur_occ[i].number_of_workers_gur+ "</td></tr>" );
				}			
				gur_occTable = $("#gur_occTable").DataTable();	



				
				
				//load data to stu no_farTable table
				no_farTable.destroy();
				$('#no_farTableBody').empty();
				for (i = 0; i < resp.no_far.length; i++) {
					$("#no_farTableBody").append(
									"<tr><td>" + resp.no_far[i].stu_admission_number + "</td><td>" + resp.no_far[i].stu_full_name + "</td><td>"
									+ resp.no_far[i].stu_gender + "</td><td>" +resp.no_far[i].stu_date_of_birth + "</td><td>" 
									+resp.no_far[i].stu_address + "</td></tr>");
				}			
				no_farTable = $("#no_farTable").DataTable();	
					
				//load data to stu no_motTable table
				no_motTable.destroy();
				$('#no_motTableBody').empty();
				for (i = 0; i < resp.no_far.length; i++) {
					$("#no_motTableBody").append(
									"<tr><td>" + resp.no_far[i].stu_admission_number + "</td><td>" + resp.no_far[i].stu_full_name + "</td><td>"
									+ resp.no_far[i].stu_gender + "</td><td>" +resp.no_far[i].stu_date_of_birth + "</td><td>" 
									+resp.no_far[i].stu_address + "</td></tr>");
				}			
				no_motTable = $("#no_motTable").DataTable();		
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
				}else{
						sweetAlert("Oops...", resp.message, "error");
				}
					
			   },  
			   error: function(e){  
				sweetAlert("Oops...", "Something went wrong!123" + e, "error");
			   }  
			 });
			 
			 
			 
			 //show analyse content
			$("#analyse_report").removeClass("hidden");
			
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
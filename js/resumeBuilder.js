var data = "%data%";

var bio = {
		"name" : "Adriano Ferreira", 
		"role" : "Developer", 
		"welcomeMessage" : "\"Doubt is the principle of wisdom\"", 
		"contacts" : {
			"mobile" : "+55 (48) 98827-7554", 
			"email" : "adrianorosaferreira@gmail.com", 
			"github" : "adrianorosaferreira", 
			"linkedin" : "adrianorosaferreira",
			"twitter" : "@4drianoFerreira", 
			"location" : "Florianópolis, SC, Brazil"
		},
		"skills" : [ 
			"JavaScript", "Quality Assurance", "Java", "AngularJS"
		],
		"pic" : "images/AdrianoFerreira_95x72.png",
		displayHeader : function(){

			var formattedName = HTMLheaderName.replace( data, bio.name);
			$("#topHeader").append(formattedName);
			var formattedRole = HTMLheaderRole.replace( data, bio.role);
			$("#topHeader").append(formattedRole);

			var formattedLocation = HTMLlocation.replace( data,bio.contacts.location);
			$("#topContacts").append(formattedLocation);
			var formattedMobile = HTMLmobile.replace( data,bio.contacts.mobile);
			$("#topContacts").append(formattedMobile);
			var formattedContact = HTMLcontactGeneric.replace( data,bio.contacts.linkedin);
			formattedContact = formattedContact.replace("%contact%","linkedin");
			$("#topContacts").append(formattedContact);
			var formattedEmail = HTMLemail.replace( data,bio.contacts.email);
			$("#topContacts").append(formattedEmail);
			var formattedTwitter = HTMLtwitter.replace( data,bio.contacts.twitter);
			$("#topContacts").append(formattedTwitter);
			var formattedGitHub = HTMLgithub.replace( data,bio.contacts.github);
			$("#topContacts").append(formattedGitHub);

			var formattedPic = HTMLbioPic.replace( data, bio.pic);
			$("#skills-entry").append(formattedPic);
			var formattedWelcomeMsg = HTMLwelcomeMsg.replace( data, bio.welcomeMessage);
			$("#skills-entry").append(formattedWelcomeMsg);

			if (bio.skills.length > 0){
				$("#skills-entry").append(HTMLskillsStart);

				bio.skills.forEach(function(skill) {
				    var formattedSkill = HTMLskills.replace( data, skill);
					$("#skills").append(formattedSkill);
				});
			}
		},
		displayFooter : function(){

			var formattedLocation = HTMLlocation.replace( data,bio.contacts.location);
			$("#footerContacts").append(formattedLocation);
			var formattedMobile = HTMLmobile.replace( data,bio.contacts.mobile);
			$("#footerContacts").append(formattedMobile);
			var formattedContact = HTMLcontactGeneric.replace( data,bio.contacts.linkedin);
			formattedContact = formattedContact.replace("%contact%","linkedin");
			$("#footerContacts").append(formattedContact);
			var formattedEmail = HTMLemail.replace( data,bio.contacts.email);
			$("#footerContacts").append(formattedEmail);
			var formattedTwitter = HTMLtwitter.replace( data,bio.contacts.twitter);
			$("#footerContacts").append(formattedTwitter);
			var formattedGitHub = HTMLgithub.replace( data,bio.contacts.github);
			$("#footerContacts").append(formattedGitHub);

		}
}

var work = {
	"jobs": [
		{
			"employer" : "Ibrowse", 
			"title" : "Fullstack Developer",
			"location" : "São José, SC, Brazil",
			"dates" : "Sept. 2016 – Currently",
			"description" : "Independently develop systems to support other analysts and/or developers maintenance of legacy systems of the Santa Catarina Court of Justice. Propose new solutions or functions based on customer requirements received and draw up plans in order tests to ensure the quality of routines and processes under my responsibility. Perform requirements gathering and lead the team to solution development. Create, monitor and execute the test plan, individually or in teams.Technologies: Angular JS, Bootstrap, Java, Caché."
		},{
			"employer" : "Conceitual", 
			"title" : "Developer",
			"location" : "São José, SC, Brazil",
			"dates" : "Oct. 2014 – Dec. 2015",
			"description" : "Independently develop systems to support other analysts and / or developers for maintenance of legacy systems of the Santa Catarina Court of Justice. Propose new solutions or functions based on customer requirements received and draw up plans in order tests to ensure the quality of routines and processes under my responsibility. Perform requirements gathering and lead the team to solution development. Create, monitor and execute the test plan, individually or in teams. "
		},{
			"employer" : "Calcenter Calçados", 
			"title" : "Java Developer",
			"location" : "São José, SC, Brazil",
			"dates" : "Mar. 2011 – July 2013",
			"description" : "Independently develop systems to support other analysts and / or developers for maintenance of legacy systems of the Santa Catarina Court of Justice. Propose new solutions or functions based on customer requirements received and draw up plans in order tests to ensure the quality of routines and processes under my responsibility. Perform requirements gathering and lead the team to solution development. Create, monitor and execute the test plan, individually or in teams. "
		}
	],
	display : function(){
		if (work.jobs.length > 0){
			work.jobs.forEach(function(job) {
			    $("#workExperience").append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace( data, job.employer);
				var formattedTitle = HTMLworkTitle.replace( data, job.title);
				var formatterEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formatterEmployerTitle);
				var formattedDates = HTMLworkDates.replace( data, job.dates);
				$(".work-entry:last").append(formattedDates);
				var formattedLocation = HTMLworkLocation.replace( data, job.location);
				$(".work-entry:last").append(formattedLocation);
				var formattedDescription = HTMLworkDescription.replace( data, job.description);
				$(".work-entry:last").append(formattedDescription);

			});
		}
	}
}

var projects = {
	"projects" : [
		{
			"title" : "Curriculo Online", 
			"dates" : "2017", 
			"description" : "Este projeto consiste na criação de um curriculo online onde, com o auxiliao de um script JS, combina minhas informações pessoais com os templates HTML e CSS pré-elaborados para gerar o meu currículo. O mesmo foi criado com uma sintaxe básica do JavaScript, que inclui manipulação de dados e criação de loops e funções. Ao mesmo tempo, ilustra a transformação de uma página Web estática em uma aplicação dinâmica através da utilização de alguns métodos simples de manipulação de jQuery DOM para criação do currículo no momento que um usuário abrir seu site.",
			"images" : [
				"images/resumeOnline_1.png",
				"images/resumeOnline_2.png"
			]
		},{
			"title" : "Site de Portifólio", 
			"dates" : "2017", 
			"description" : "Este projeto apresenta meu site de portfólio. Ele foi criado a partir de um mockup fornecido pela Udacity, onde tive que manter o design criado com HTML e CSS e aplicar as guias de estilos fornecidas pela mesma. Este projeto consiste em um site responsivo que exibe imagens, descrições e links para cada projeto que completei no Nanodegree Front-End.",
			"images" : [
				"images/portifolio_mockup.png",
				"images/portifolio_bootstrap.png",
				"images/portifolio_framework.png"
			]
		}
	],
	"display" : function() {

		projects.projects.forEach(function(project) {
		    $("#projects").append(HTMLprojectStart); 

			var formattedTitle = HTMLprojectTitle.replace( data, project.title);
			$(".project-entry:last").append(formattedTitle); 
			var formattedDates = HTMLprojectDates.replace( data, project.dates);
			$(".project-entry:last").append(formattedDates); 
			var formattedDescription = HTMLprojectDescription.replace( data, project.description);
			$(".project-entry:last").append(formattedDescription); 

			project.images.forEach(function(image) {
				var formattedImage = HTMLprojectImage.replace( data, image);
				$(".project-entry:last").append(formattedImage);
			});	
		});
	}
}
	
var education = { 
	"schools": [
		{
			"name" : "MBA in Project Management (Fundação Getulio Vargas)", 
			"location" : "Florianópolis, Santa Catarina", 
			"degree" : "Graduate", 
			"majors"  : [ "Postgraduate certificate" ], 
			"dates" : "2013",
			"url" : "http://www.sociesc.org.br/pt/fgv/conteudo.php?id=429&mnu=3785&top=0&crs=416"
		},{
			"name" : "Information Systems (Unisul)", 
			"location" : "Palhoça, Santa Catarina", 
			"degree" : "Undergraduate degree", 
			"majors"  : [ "Bachelor's degree" ], 
			"dates" : "2010",
			"url" : "http://www.unisul.br/wps/portal/home/ensino/graduacao/sistemas-de-informacao/"
		},{
			"name" : "Telecommunications Technician (Escola Técnica Federal)", 
			"location" : "São José, Santa Catarina", 
			"degree" : "High school + Associate degree", 
			"majors"  : [ "Associate degree" ], 
			"dates" : "1998",
			"url" : "https://curso.ifsc.edu.br/info/tecnicointegrado/tecnicointegradotelecomunicacoes/SJE"
		},{ 
			"name" : "English Course - ESL for Adults (SSLC Vancouver)", 
			"location" : "Vancouver, BC, Canada", 
			"degree" : "",
			"majors"  : [ "Not Applicable" ], 
			"dates" : "2015",
			"url" : "http://www.studysslc.com/esl/"
		}
	],
	"onlineCourses" : [
		{ 
			"title" : "Nanodegree Development Web Front-End", 
			"school" : "Udacity", 
			"dates" : "Mar 2017 - Dec 2017",
			"url" : "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
		},{ 
			"title" : "Full-Stack Web Development", 
			"school" : "Courcera", 
			"dates" : "2016 - Currently",
			"url" : "https://www.coursera.org/specializations/full-stack-mobile-app-development"
		},{ 
			"title" : "HTML, CSS e JavaScript", 
			"school" : "Courcera", 
			"dates" : "2016",
			"url" : "https://www.coursera.org/learn/html-css-javascript"
		}
	],
	display : function(){
		
		$("#education").append(HTMLschoolStart);
		
		education.schools.forEach(function(school) {
			var formattedEduName = HTMLschoolName.replace( data, school.name);
			var formattedEduUrl = formattedEduName.replace("#", school.url);
			var formattedEduDegree = HTMLschoolDegree.replace( data, school.degree);
			$(".education-entry:last").append(formattedEduUrl + formattedEduDegree);
			var formattedEduDates = HTMLschoolDates.replace( data, school.dates);
			$(".education-entry:last").append(formattedEduDates);
			var formattedEduLocation = HTMLschoolLocation.replace( data, school.location);
			$(".education-entry:last").append(formattedEduLocation);
			var formattedEduMajor = HTMLschoolMajor.replace( data, school.majors);
			$(".education-entry:last").append(formattedEduMajor);
		});

		$("#education:last").append(HTMLonlineClasses);
		$("#education:last").append(HTMLonlineStart);
		
		education.onlineCourses.forEach(function(course) {
			var formattedOLTitle = HTMLonlineTitle.replace( data, course.title);
			var formattedOLTitle = formattedOLTitle.replace("#", course.url);
			var formattedOLSchool = HTMLonlineSchool.replace( data, course.school);
			$(".education-online").append(formattedOLTitle + formattedOLSchool);
			var formattedOLDates = HTMLonlineDates.replace( data, course.dates);
			$(".education-online").append(formattedOLDates);
			var formattedOLURL = HTMLonlineURL.replace( data,"Site");
			var formattedOLURL = formattedOLURL.replace("#", course.url);
			$(".education-online").append(formattedOLURL);
		});
	}	
}

bio.displayHeader();
work.display();
education.display();
projects.display();
bio.displayFooter();

$("#mapDiv").append(googleMap);

if(document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('topContacts').style.display = 'none';
}
if(document.getElementsByTagName('h1').length === 0) {
  document.getElementById('header').style.display = 'none';
}
if(document.getElementsByClassName('work-entry').length === 0) {
  document.getElementById('workExperience').style.display = 'none';
}
if(document.getElementsByClassName('project-entry').length === 0) {
  document.getElementById('projects').style.display = 'none';
}
if(document.getElementsByClassName('education-entry').length === 0) {
  document.getElementById('education').style.display = 'none';
}
if(document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('lets-connect').style.display = 'none';
}
if(document.getElementById('map') === null) {
  document.getElementById('mapDiv').style.display = 'none';
}	
	



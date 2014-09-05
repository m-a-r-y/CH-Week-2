var data = {
	info: [
		{label: { value: "First Name", className: 'first-name'}, placeholder: "Please enter your first name"},
		{label: { value: "Last Name", className: 'last-name'}, placeholder: "Please enter your last name"},
		{label: { value: "email", className: 'email'}, placeholder: "Please enter your email"},
	]
};

var defaultContext = {label: "Question?", placeholder: "Answer"};

// function getUrlParameter(sParam)
// {
//     var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');
//     for (var i = 0; i < sURLVariables.length; i++) 
//     {
//         var sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] == sParam) 
//         {
//             return sParameterName[1];
//         }
//     }
// }  

$(document).ready(function(){
	var source   = $("#row-template").html();
	var template = Handlebars.compile(source);
	//1 var context = {label: "First Name", placeholder: "Please enter your first name"}
	//1 var html    = template(context);
	var html = template(data);
	$("table tbody").append(html);
	// var html1 = template(data.info.label);
	// $("table tbody").append(html1);

	$("button").on('click', function(){
		data.info.push(
			{label: { value: 'Question', className: 'question'}, placeholder: 'Answer'}
		);
	var html = template(data);
	$("table tbody").append(html);


		//1 var html = template(defaultContext);
		//1 $("table tbody").append(html);
	})
});

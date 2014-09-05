var data = [
	{label: "First Name", placeholder: "Please enter your first name"},
	{label: "Last Name", placeholder: "Please enter your last name"},
	{label: "Email", placeholder: "Please enter your email"},
];



function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}  





$(document).ready(function(){
	var counter = parseInt(getUrlParameter("rows"))-1;
	var lala = parseInt(getUrlParameter("rows"))-1;
	$('button').on('click', function(){
		$('.tablebody').append($('#tablerow').clone().show()[0].outerHTML.replace(/\{\{counter\}\}/g, ++counter));
	});

	for(var i = 0; i < lala; i++) {
		$('button').trigger('click');
	}; 
});

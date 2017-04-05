$('form').submit(function() {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url : "/",
		dataType : 'json' 
	})
})
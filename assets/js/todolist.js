
// we need to be able to:

// add a new todo
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var newItem = $(this).val();
		$(this).val(""); // clear input

		// create new li and add to li
		$("ul").append("<li><span class=\"deleteBtn\"><i class='fa fa-trash' aria-hidden='true'></i></span>" + newItem + "</li>");

	}
	
});

// strike through todo

$("ul").on("click", "li", function(){
	$(this).toggleClass("striked");
});

// delete a todo

$("ul").on("click", ".deleteBtn", function(){

	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	
	event.stopPropagation();
});

$("#addBtn").click(function() {
	$("input[type='text']").fadeToggle();
});
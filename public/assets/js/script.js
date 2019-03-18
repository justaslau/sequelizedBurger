$(document).ready(function() {
	$(".devour-form").on("submit", function(event) {
		event.preventDefault();
		var id = $(this).children(".burger_id").val();
		var customer = $(this).children(".customer_name").val();
		$.post("/burgers", {
			id,
			customer
		}, function(data, status) {
			location.reload();
		});
	});
});
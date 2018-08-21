$(function () {
	$('.book').click(function () {
		$('#modal').addClass('show');
	});
	$('.modal2_overlay').click(function() {
		$('#modal').removeClass('show')
	})
})
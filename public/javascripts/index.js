$(document).ready(function(){
	$("#create-account").on("click", function(e) {
		e.stopPropagation();
		$("#login").html('Create');
		$("#login").attr('id', 'signup');
		$("#passwordAgain").css('display', 'block');
		$("#cancel").css('display', 'block');
		$(this).hide();
		$("#form").attr('action', '/signup');
	});

	$("#cancel").on("click", function(e) {
		e.stopPropagation();
		$("#create-account").show();
		$("#signup").html('Sign In');
		$("#signup").attr('id', 'login');
		$(this).css('display', 'none');
		$("#passwordAgain").css('display', 'none');
		$('#form').attr('action', '/login');
	});

	$("#changePassword").on("click", function(e) {
		e.stopPropagation();
		$(".changePassword").css('display', 'block');
		$(this).css('display', 'none');
		$("#logout").css('display', 'none');
	});

	$("#cancelPassword").on("click", function(e) {
		e.stopPropagation();
		$("#changePassword").css('display', 'block');
		$("#logout").css('display', 'block');
		$(".changePassword").css('display', 'none');
	});
});
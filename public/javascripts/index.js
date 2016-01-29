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

	$('.grid').masonry({
	  // options
	  itemSelector: '.grid-item',
	  percentPosition: true
	});

	function checkImg(img) {
        if (img.naturalHeight <= 1 && img.naturalWidth <= 1) {
            // undersize image here
            img.src = "http://www.davidsonmalacco.com.br/wp-content/themes/openmind/img/no_image.png";
        }
    }

    $("img").each(function() {
        // if image already loaded, we can check it's height now
        if (this.complete) {
            checkImg(this);
        } else {
            // if not loaded yet, then set load and error handlers
            $(this).load(function() {
                checkImg(this);
            }).error(function() {
                // img did not load correctly
                // set new .src here
                this.src = "http://www.davidsonmalacco.com.br/wp-content/themes/openmind/img/no_image.png";
            });

        }
    });
});
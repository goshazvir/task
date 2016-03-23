head.ready(function() {

	// tabs script
	function tab() {
		$(".js-tab-nav").each(function(){

			var tabLink = $(this).find("a");
			var tabItem = $(this).find("li");
			var tabCont = $(this).parents(".js-tab").find(".js-tab-content");

			tabItem.first().addClass("is-active");
			$(this).parents(".js-tab").find(".js-tab1").addClass("is-active");

			tabLink.on("click", function() {
				var index = $(this).attr("href");
				tabItem.removeClass("is-active");
				$(this).parent().addClass("is-active");
				tabCont.removeClass("is-active");
				$(this).parents(".js-tab").find("."+index).addClass("is-active");
				return false;
			});

		});
	}
	tab();

	// accordion script
	function accordion(accordionItem) {
		if ( accordionItem.hasClass("is-active") ) {
			accordionItem.removeClass("is-active");
		} else {
			accordionItem.addClass('is-active').siblings().removeClass('is-active');
		}
	}
	
	$('.js-accordion li').on('click', function() {
		accordion( $(this) );
	});
});



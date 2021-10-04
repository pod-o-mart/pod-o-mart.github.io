(function($){
	$(document).ready(function () {
		// Dropdown menu
		if (($(".navbar-nav")[0]))
			{
			$('nav > ul.toplist > li.parent').addClass('dropdown');
			$('nav > ul.toplist > li.parent > a').addClass('dropdown-toggle');
			$('nav > ul.toplist > li.parent > a').attr('data-toggle', 'dropdown');
			$('nav > ul.toplist > li.parent > a').append('<b class="caret"></b>');
			$('nav > ul.toplist > li.parent > ul').addClass('dropdown-menu');
			}


// <a> zu <span>
$('.module-content > ul > li.deeper > a').each(function() {
  // Create a new element and assign it attributes from the current element
  var NewElement = $("<span />");
  $.each(this.attributes, function(i, attrib){
    $(NewElement).attr(attrib.name, attrib.value);
  });
  // Replace the current element with the new one and carry over the contents
  $(this).replaceWith(function () {
    return $(NewElement).append($(this).contents());
  });
});

$('.toplist > li.deeper.parent > a').each(function() {
  // Create a new element and assign it attributes from the current element
  var NewElement = $("<span />");
  $.each(this.attributes, function(i, attrib){
    $(NewElement).attr(attrib.name, attrib.value);
  });
  // Replace the current element with the new one and carry over the contents
  $(this).replaceWith(function () {
    return $(NewElement).append($(this).contents());
  });
});



		// Collapse menu - Eigenproduktion
		$('.module-content > ul').addClass('panel-group');
		$('.module-content > ul').attr('aria-multiselectable', 'true');
		$('.module-content > ul').attr('role', 'tablist');
		$('.module-content > ul').attr('id', 'accordion');
		$('.module-content > ul > li').addClass('panel panel-default');
		$('.module-content > ul > li > span').addClass('collapsed');
		$('.module-content > ul > li > span').attr('data-parent', '#accordion');
		$('.module-content > ul > li > span').attr('aria-expanded', 'false');
		$('.module-content > ul > li > span').addClass('opener');
//		$('.module-content > ul > li > span').removeAttr("href");
		$('.module-content > ul > li > ul').addClass('panel-collapse collapse');
		$('.module-content > ul > li > ul').attr('role', 'tabpanel');
		$('.module-content > ul > li.active.deeper.parent > ul').addClass('collapse in');
		$('.module-content > ul > li.active.deeper.parent > ul').attr('aria-expanded', 'true');
		$('.module-content > ul > li > ul > li > a').addClass('collapsed');
		$('.module-content > ul > li > ul > li > a').attr('data-parent', '#accordion');
		$('.module-content > ul > li > ul > li > a').attr('aria-expanded', 'true');
		$('.module-content > ul > li > ul > li > ul').addClass('panel-collapse collapse');
		$('.module-content > ul > li > ul > li > ul').attr('role', 'tabpanel');
		$('.module-content > ul > li > ul > li.active.deeper.parent > ul').addClass('collapse in');
		$('.module-content > ul > li > ul > li.active.deeper.parent > ul').attr('aria-expanded', 'true');
		$('.toplist > li.deeper.parent > span').removeAttr("href");
		$( 'html[lang=da-dk] #sg_password_wra > p > a.button').text('Ryd');
		$( 'html[lang=de-DE] #sg_password_wra > p > a.button').text('Löschen - erneute Eingabe');
		$( 'html[lang=ru-ru] #sg_password_wra > p > a.button').text('Очистить');
		
		// Captcha Alert
		$('#system-message > .alert-error').addClass('alert-danger');

// https://stackoverflow.com/a/23911764
	$(".toplist").show();
// Thank you

// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();
		// Fix hide dropdown
		$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
			e.stopPropagation();
		});
		// Tooltip
		$('.tooltip').tooltip({
			html: true
		});
		// To top
		var offset = 220;
		var duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(duration);
			} else {
				$('.back-to-top').fadeOut(duration);
			}
		});
		$('.back-to-top').click(function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, duration);
			return false;
		});

		// Fix mootools hide
		var bootstrapLoaded = (typeof $().carousel == 'function');
		var mootoolsLoaded = (typeof MooTools != 'undefined');
		if (bootstrapLoaded && mootoolsLoaded) {
			Element.implement({
				hide: function () {
					return this;
				},
				show: function (v) {
					return this;
				},
				slide: function (v) {
					return this;
				}
			});
		}
	});
})(jQuery);

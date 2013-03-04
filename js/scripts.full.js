$(document).ready(function()
{
	$( document ).bind( "mobileinit", function() {
      // jQuery Mobile configuration
      $.mobile.pushStateEnabled = false;
	  $.mobile.allowCrossDomainPages = true;
	});
	
});

var images = ["img/loading.png", "img/mmc_masthead.jpg", "img/754170_20817010b.jpg"];
var i = 0;

$(window).load(function(){ 

	setInterval(function(){
		$("body").css("background-image", function() {
			if (i >= images.length) {
				i=0;
			}
			return "url(" + images[i++] + ")"; 
		});
	}, 2000);

	setTimeout(function() {
		window.location = "http://www.spygraph.org/game/menu.php?deviceID=HOLDER";
	}, 6000);

});
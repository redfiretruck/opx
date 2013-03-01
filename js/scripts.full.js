$(document).ready(function()
{
	$( document ).bind( "mobileinit", function() {
      // jQuery Mobile configuration
      $.mobile.pushStateEnabled = false;
	  $.mobile.allowCrossDomainPages = true;
	});
	
});

$(window).load(function(){ 

  setTimeout(function() {
	window.location = "http://www.spygraph.org/game/menu.php?deviceID=HOLDER";
  }, 4000);

});
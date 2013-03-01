$(document).ready(function()
{
	$( document ).bind( "mobileinit", function() {
      // jQuery Mobile configuration
      $.mobile.pushStateEnabled = false;
	  $.mobile.allowCrossDomainPages = true;
	});
	
  // Custom code here!
  setTimeout(function() {
	window.location = "http://www.spygraph.org/game/tablet.php?deviceID=HOLDER";
  }, 2500);
  
});
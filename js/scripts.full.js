var deviceID = "pc";

$(document).ready(function()
{
	$( document ).bind( "mobileinit", function() {
      // jQuery Mobile configuration
      $.mobile.pushStateEnabled = false;
	  $.mobile.allowCrossDomainPages = true;
	});
	
  // Custom code here!
	try
	{
		deviceID = device.uuid;
	}
	catch (err) { }
		
	console.log("THE DEVICE ID IS : "+deviceID);
});

function showMMC()
{
	$("#mmcimg").fadeIn(2500, function() { hideMMC(); });
}

function hideMMC()
{
	$("#mmcimg").fadeOut(2500, function() { showGameLogo(); });
}

function showGameLogo()
{
	$("#gameimg").fadeIn(2500, function() { hideGameLogo(); });
}

function hideGameLogo()
{
	$("#gameimg").fadeOut(2500, function() { finishLoad(); });
}

function finishLoad()
{
	$("#mmcimg").remove();
	$("#gameimg").remove();

	setTimeout(function() {
	
		$("#gameframe").ready(function () {
			$("#loadingMessage").hide();
			$("#gameframe").show();
		});
		
		$("#gameframe").load(function () {
			$("#loadingMessage").hide();
			$("#gameframe").show();
		});
		
		$("#gameframe").attr("src", "http://www.spygraph.org/game/menu.php?deviceID=" + deviceID);
		
	}, 2500);
}
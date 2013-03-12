$(document).ready(function()
{
	$(document).bind("mobileinit", function() {
		// jQuery Mobile configuration
		$.mobile.pushStateEnabled = false;
		$.mobile.allowCrossDomainPages = true;
		$.support.cors = true;
	});
	
});

function onDeviceReady() 
{
	document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown() 
{
	setTimeout(function() {
		navigator.app.exitApp();
	}, 1000);
}

var deviceID = "pc";
if (typeof device != "undefined") 
{
	try 
	{
		deviceID = device.uuid;
	}
	catch (err) { }
}

$(document).on("pageinit", function(){

/*
	var images = ["img/loading.png", "img/mmc_masthead.jpg", "img/754170_20817010b.jpg"];
	var i = 0;
	setInterval(function(){
		$("body").css("background-image", function() {
			if (i >= images.length) {
				i=0;
			}
			return "url(" + images[i++] + ")"; 
		});
	}, 2000);
*/

	document.addEventListener("deviceready", onDeviceReady, false);

/*
	setTimeout(function() {
		window.location = "menu.html";
	}, 6000);
*/
});
$(document).ready(function()
{
	$( document ).bind( "mobileinit", function() {
		// jQuery Mobile configuration
		$.mobile.pushStateEnabled = false;
		$.mobile.allowCrossDomainPages = true;
	});
	
});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() 
{
	document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown() 
{
	navigator.app.exitApp();
}

var images = ["img/loading.png", "img/mmc_masthead.jpg", "img/754170_20817010b.jpg"];
var i = 0;
var deviceID = "pc";
if (device.uuid) deviceID = device.uuid;

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
		$("<iframe />");
		$("<iframe />", {
			name: "frame1",
			id: "frame1",
			src: "http://www.spygraph.org/game/menu.php?deviceID=" + deviceID
		}).appendTo("body");
	}, 6000);

});
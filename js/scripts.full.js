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
	alert("this should only fire when not on menu page, should go there otherwise");
	navigator.app.exitApp();
}

var deviceID = "pc";
if (typeof device != "undefined") 
{
	if (device.uuid) deviceID = device.uuid;
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

	$("").attr("src", "img/mmc_masthead.jpg");
	$("").attr("src", "img/754170_20817010b.jpg");
	document.addEventListener("message", function(e){
		alert("got message:" + e.data);
		/*
		if (e.data == "exit") {
			navigator.app.exitApp();
		}
		*/
	}, false);

	setTimeout(function() {
		alert("iframe");
		$("<iframe />", {
			name: "frame1",
			id: "frame1",
			width: "100%",
			height: "100%",
			scrolling: "auto",
			src: "http://www.spygraph.org/game/menu.php?deviceID=" + deviceID
		}).appendTo("body");
	}, 6000);

});
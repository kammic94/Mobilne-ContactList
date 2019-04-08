function init() {
	
document.addEventListener("deviceready",onDeviceReady, false);
}


function onDeviceReady() {
	navigator.notification.beep(1);
}
function checkContacts() {
    console.log(navigator.contacts);
}

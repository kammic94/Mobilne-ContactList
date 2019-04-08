function init() {
	
document.addEventListener("deviceready",onDeviceReady, false);
}
function onDeviceReady() {
	navigator.contacts.find(fields, onSuccess, onError, options);
}
function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};

function onError(contactError) {
    alert('onError!');
};

var options = new ContactFindOptions();
    options.filter   = "";
	options.multiple = true;
    var fields = ["displayName","phoneNumbers"];
    navigator.contacts.find(fields, onSuccessContact, onErrorContact, options);



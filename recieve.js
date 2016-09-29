chrome.runtime.onConnect.addListener(function(port){
	console.assert(port.name == "sentenceInit");
	port.onMessage.addListener(function(msg){
		alert(msg.test);
	});
});
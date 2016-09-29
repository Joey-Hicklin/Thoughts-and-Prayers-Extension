let pTags = document.getElementsByTagName("p");
port.onMessage.addListener(function(msg){
  alert("response recieved");
});
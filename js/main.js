$(document).ready(function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Thanks for checking out my project! I'm a noob developer who is working on his web resume!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
});

$('li a').on('click', function () {


  $(this).toggleClass("active");

});


/*
// EmailJS Code - commented out for now
var myform = $("form#myform");
myform.submit(function(event){
  event.preventDefault();

  var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});


  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "first";
  myform.find("button").text("Sending...");
  emailjs.send(service_id,template_id,params)
    .then(function(){ 
       alert("Sent!");
       myform.find("button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Annoy Nick");
    });
  return false;
});



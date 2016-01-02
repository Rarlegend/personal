function sendMessage(){
	console.log("submitting");
	var name = $("#name").val();
	var email = $("#email").val();
	var subject = $("#subject").val();
	var message = $("#message").val();
	if (name == "" || email == "" || subject == "" || message == ""){
		alert("Please fill in all the fields");
	}
	else if (!validateEmail(email)){
		alert("Please submit a valid email");
	}
	else{
		postRequest("http://www.akandola.com/contact.php", {
	        cf_name : name,
	        cf_email: email,
	        cf_message: message,
	        cf_subject: subject
	    }, function(data) {
	        if (data == "error"){
	        	alert("Sorry, an error occurred. You can contact me directly at amanpreet.kandola@gmail.com");
	        }
	 		else{
	 			$("#name").val("");
	 			$("#email").val("");
	 			$("#subject").val("");
	 			$("#message").val("");
	 			window.location.href = "#";
	 		}
	    });
	}
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

function connectionExists() {
    var xhr = new XMLHttpRequest();
    var file = "http://www.akandola.com/contact.php";

    xhr.open('HEAD', file, false);

    try {
        xhr.send();

        return xhr.status >= 200 && xhr.status < 304;
    } catch (e) {
        return false;
    }
}

function postRequest(url, params, funct, ajaxLoaderElement) {
    var element;
    var ajaxLoad = (arguments.length === 4);
    if (connectionExists()) {
        if (ajaxLoad) {
            var element = document.getElementById(ajaxLoaderElement);
            document.getElementById(ajaxLoaderElement).parentNode.replaceChild(loadIcon, element);
        }
        $.post(url, params,
            function(data){
                if (ajaxLoad) {
                    loadIcon.parentNode.replaceChild(element, loadIcon);
                    document.getElementById('body').appendChild(loadIcon);
                }
                funct(data);
            });
    } else {
        alert("There seems to be a problem connecting to our servers.");
        return;
    }
}
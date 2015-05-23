Template.download.events({
	'submit form': function(event, template) {

		event.preventDefault();
		var url = event.target.url.value.trim();
		var isValid = validateUrl(url);
		console.log("Download Button Pressed" + url);
		if(isValid){

			displaySuccess("Download Started");

			

			Meteor.call('downloadThisUrl', url, function(err, data){

				if(err){
					displayAlert("Error Occured in download");
					console.log(err.reason);
				}
				else{
					displaySuccess("download completed");
				}



			});
		}
		
		else{
			displayAlert("Not a valid URL");
		}
	}	
});


//regex for url /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

function validateUrl(url) {
	var re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
	var result = re.test(url);
	if(!result)
		displayAlert("Not a valid URL");
	return result;
}

function displayAlert(message){
	var alertbox = document.getElementById("loginErrormessage");
	console.log(alertbox);
	alertbox.style.display="block";
	alertbox.innerHTML = message;
}

function displaySuccess(message){
	var alertbox = document.getElementById("loginErrormessage");
	alertbox.className = "alert alert-success";
	alertbox.style.display="block";
	alertbox.innerHTML = message;
}


/*Fls.insert(url, function (err, fileObj) {
	        	// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP

	        	if(err){
	        		displayAlert("Error Occured in download");
	        		console.log(err.reason);
	        	}
	        	else{
	        		displaySuccess("download completed");
	        	}
	        });*/

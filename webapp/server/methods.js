Meteor.methods({

	'downloadThisUrl': function(url){
		console.log("Downloading this url "+ url);


		var newFile = new FS.File();
		return newFile.attachData(url, function (error) {
			if (error) throw error;
			//newFile.name("newImage.png");
			Fls.insert(newFile, function (error, fileObj) {
	    		//If !error, we have inserted new doc with ID fileObj._id, and
    			//remote URL data will be downloaded and stored on the server. The
    			//URL must support a HEAD request since we do one to get the 
    			//content type, size, etc. for filtering inserts.
    			console.log("download started inside server");
    			if(error){
    				console.log("Failed due to ");
    				console.log(err.reason);
    				return false;
    			}
    			else{
    				console.log("download completed in the server.");
    				return true;
    			}

    		});


		});

		/*return FileStore.insert(url, function (err, fileObj) {
	        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
	        console.log("download started inside server");
	        if(err){
	        	console.log("Failed due to ");
	        	console.log(err.reason);
	        	return false;
	        }
	        else{
	        	console.log("download completed in the server.");
	        	return true;
	        }

	    });*/





}

});
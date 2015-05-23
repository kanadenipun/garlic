# Project Garlic

##Problem

Organizations and Institutions have a hardware proxy installed in their networks in between your computer and internet
This Proxy is configured to block Urls which might be a risk to the organization or not inlign with your tasks in the organization
Other than these URLs other URLs are mostly open

##Proposed Solution

To build a web application, which can download the files from input url, split the file,  zip them and provide seperate download links for them. 

The application will be made available as a azure vm image or aws machine image,  so that any developer can deploy this application and download the files where he want. The use case scenario for this application is to allow downloads of files in institutions  and organizations where the web content is filtered using a proxy which denies downloads of files.

By providing the Cloud VM images, any person can create a free account in aws/azure and start a vm  with this image, and get his own download server which bears only the ip address, which will not be present in the blocked list of proxy. Along with this we will also try to add a proxy application to this so that the user can  browse any website as the prxy website is also hosted in his own server which is not blacklisted

##How to use

1. Create a AWS/AZURE free account
2. Log into the account and create a VM
3. Inside the VM :
  * install meteor
  * Clone this repository
  * inside the repository run "sudo meteor"
4. From your computer open the link to your VM something like myapp.cloudapp.net
5. Enjoy :)


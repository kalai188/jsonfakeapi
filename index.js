'use strict';

const token = 'abc'; // type here your verification token


var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        var theUrl = "https://my-json-server.typicode.com/kalai188/jsonfakeapi/product/1";
        xmlhttp.open("GET", theUrl);
		xmlhttp.setRequestHeader('Authorization', 'Bearer ' + "abc");
        xmlhttp.send();
		xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			response = JSON.parse(this.responseText);
			 return res.end(req.query.challenge);
			}
		};
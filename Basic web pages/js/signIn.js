function login(event){
	event.preventDefault();
	//console.log("Loging in");

	if(document.getElementById("name").value!="Precious" || document.getElementById("pin").value != "Hello"){
		document.getElementById("result").innerHTML="Wrong input, try again!";
	}else{
	 	document.getElementById("result").innerHTML="";
	 	window.location.href = "firstPage.html";
	 }
}
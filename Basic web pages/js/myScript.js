function login(e){
	e.preventDefault();
	//alert("login");
	var defaultEmail = "preccy@gmail.com";
	var defaultPassword = "Hello";
	var password = document.getElementById("pwd").value;
	var email = document.getElementById("email").value;
	//alert(email);
	//document.getElementById("display").innerHTML = email;
	if((email==defaultEmail) && (password==defaultPassword)){
		alert("Correct");
		document.getElementById("display").innerHTML = "";
		localStorage.setItem("Username", email);
		window.location.href = "Home.html";
	}else{
		document.getElementById("display").innerHTML = "incorrect user details, try again!";
		document.getElementById("pwd").value = "";
		document.getElementById("email").value = "";
	}
}

function displayHome(){
	var username = localStorage.getItem("Username");
	document.getElementById("username").innerHTML = username;
}

function Change(){
	document.getElementById("box").style.backgroundColor = "yellow";
}

//json javascript obj notation
var users = [
	{
		"username": "preccy@gmail.com", 
		"password": "Hello"
	},
	{
		"username": "suzy@gmail.com",
		"password": "Hi"
	}
]

console.log(users);

users.push({
	"username": "hello@yahoo.com",
	"password": "yahoo"
})

console.log(users);

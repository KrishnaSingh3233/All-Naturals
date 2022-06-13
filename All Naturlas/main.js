

	// login form
	var x = document.getElementById("login");
	var y = document.getElementById("signup");
	var z = document.getElementById("btn");
	function signup(){
		x.style.left = "-400px";
		y.style.left = "50px";
		z.style.left = "110px";
	}
	function login(){
		x.style.left = "50px";
		y.style.left = "450px";
		z.style.left = "0 ";
	}

	// Login Form Validation

	function validateForm(){
		if(!/^[a-zA-Z]*$/g.test(document.getElementById("fname").value)){
			document.getElementById("fn").innerHTML = "Please Enter a valid Fisrt Name";
			return false;
		}
		var lname = document.getElementById("lname").value;
		if(!isNaN(lname)){
			document.getElementById("ln").innerHTML = "Please Enter a valid Last Name";
			return false;
		}
	}
	// index js
	var MenuItems = document.getElementById("MenuItems");
	MenuItems.style.maxHeight = "0px";
	function menutoggle() {
	  if (MenuItems.style.maxHeight == "0px") {
		MenuItems.style.maxHeight = "200px";
	  } else {
		MenuItems.style.maxHeight = "0px";
	  }
	}


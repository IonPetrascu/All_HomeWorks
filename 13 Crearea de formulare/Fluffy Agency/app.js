function checkForm(el){
	let name = el.name.value;
	let textarea = el.textarea.value;
	let email = el.email.value;

	let fail = "";

	if(name == "" || textarea =="" || email ==""){
		fail = "Completati tot";
	}else if(name.lenght <= 2){
		fail = "Numele este prea scurt";
	}else if (name.split("&").lenght > 1){
		fail = "incorrect nume";
	}else if (name.lenght > 30){
		fail = "Numele este prea lung";
	}

	if(fail !=""){
		alert(fail);
	}else{
		alert("Toate datele au fost introduse corect");
		window.location = "https://google.com";
		
	}
	return false
}
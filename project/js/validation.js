function validateForm() {
    // find all fields with class="req"
    for(var i=0; i<myform.elements.length; i++){
	if(myform.elements[i].className=='req' && myform.elements[i].value.length==0){
	    alert("Please fill in all required fileds");
	    return false;
	}
    }

    var email = document.getElementById('email').value;
    var atpos = email.indexOf('@');
    var dotpos = email.lastIndexOf('.');

    // console.log(email);
    // console.log(atpos);
    // console.log(dotpos);

    if(atpos == -1 || dotpos == -1 || atpos == 0 || dotpos == 0 || atpos > dotpos){
	alert("Please type valid email address");
	return false;
    }
}

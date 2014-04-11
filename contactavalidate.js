function handleEnter (field, event) {
		var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
		if (keyCode == 13) {
			var i;
			for (i = 0; i < field.form.elements.length; i++)
				if (field == field.form.elements[i])
					break;
			i = (i + 1) % field.form.elements.length;
			field.form.elements[i].focus();
			return false;
		} 
		else
		return true;
	}     
	

function ValidateForm(){

if (document.form1.txtName.value < 1)
	{
		alert("Please enter your name");
		return false;
	}
else if (!(isNaN(document.form1.txtName.value)))
	{
		alert("Sorry, Name cannot be a number");
		return false;
		
	}
var emailID=document.form1.txteAddress
	
if (document.form1.txteAddress.value < 1)
	{
		alert("Please Enter your Email ID")
		return false;
	}

if (echeck(emailID.value)==false){
		emailID.value=""
		emailID.focus()
		return false;
		}

if (document.form1.txtPhone.value < 1)
	{
		alert("Please enter your Telephone Number")
		return false;
	}

else if(isNaN(document.form1.txtPhone.value))
	{
		alert("Sorry, Telephone Number must be a number")
		return false;	
	
	}

if (document.form1.select2.value ==0)
	{
		alert("Please select the Country")
		return false;
	}

if (document.form1.txtSubject.value <1)
	{
		alert("Please fill the subject field")	
		return false;
	}
if (document.form1.txtComments.value <1)
	{
		alert("Please enter in the Comment Box to email")
		return false;
	}

}


function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Please Enter a Correct Email Address")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Please Enter a Correct Email Address")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Please Enter a Correct Email Address")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Please Enter a Correct Email Address")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Please Enter a Correct Email Address")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Please Enter a Correct Email Address")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Please Enter a Correct Email Address")
		    return false
		 }

 		 return true					
	}

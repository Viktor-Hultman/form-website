// This code snippet below is made from a videotutorial done by Netninja: https://www.youtube.com/watch?v=b0pxAb_yy2U&ab_channel=TheNetNinja.

// Creation of variables and connect them to the form of the sign up page as well ass the error message before the submit button
let form  = document.forms.signUpForm;
let error = document.getElementById('error');

// A function which checks if any form-field is left empty when the submit button is clicked
form.onsubmit = function(){
    if(form.name.value == "" || form.email.value == "" || form.phone.value == "" || form.address.value == "" || form.zip.value == "" || form.package.value == ""){
        error.innerHTML = "You need to fill out the entire form to register!";
        return false;
    } else{
        error.innerHTML = "";
        return true;
    }
};
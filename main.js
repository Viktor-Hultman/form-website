
document.addEventListener('invalid', (function () {
    return function (e) {
        //prevent the browser from showing default error bubble/ hint
        e.preventDefault();
    };
})(), true);

//Validation function which fires of when the register button is clicked
function giveInfo() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let zip = document.getElementById("zip");
    let package = document.getElementById("package");

    //Creates a variable and set the value = to what is put in the name input field
    let nameValue = document.getElementById("name").value;

    //Then stores the variable value in the local storage to be used in the thank you message
    localStorage.setItem("textvalue", nameValue);

    //Checks if the current input in the fields are not valid, then adds some text to the message div if they are 
    if (!name.checkValidity()) {
        document.getElementById("error").innerHTML = "Please enter your name!";
    } else if (!email.checkValidity()) {
        document.getElementById("error").innerHTML = "Please enter your email address!";
    } else if (!phone.checkValidity()) {
        document.getElementById("error").innerHTML = "Please enter your phone number!";
    } else if (!address.checkValidity()) {
        document.getElementById("error").innerHTML = "Please enter your address!";
    } else if (!zip.checkValidity()) {
        document.getElementById("error").innerHTML = "Please enter your zip code!";
    } else if (!package.checkValidity()) {
        document.getElementById("error").innerHTML = "Please select one of the package options!";
    } else {
        document.getElementById("error").innerHTML = " ";
    }
}



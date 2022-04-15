


function ValidateContact() {
    let name = document.forms["sending"]["fname"].value;
    let email = document.forms["sending"]["femail"].value;
    let message = document.forms["sending"]["fmessage"].value;
    if (name == "" || email == "" || message == "") {
      alert("Please fill in all fields");
      return false;
    }  
  }
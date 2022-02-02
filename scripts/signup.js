const apiUrl = 'https://portifolio-website.herokuapp.com/';
const saveUser = () => {
  const firstName = document.getElementById('fname').value;
  const secondname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log( {
        "firstName": firstName,
        "secondName": secondname,
        "email": email,
        "password": password
      });
  fetch(`${apiUrl}api/users`, {
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify(
      {
        "firstName": firstName,
        "secondName": secondname,
        "email": email,
        "password": password
      }
    ),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json",
    },
  })
  .then((res) => {
     return res.json();
    // return Promise.reject(res);
    
  })
    .then((response) => {
      
      console.log(response);
      location.href = './login.html';
    })
    .catch((err) => {
      console.log(err);
    });
};



let form = document.getElementById("signup");
form.addEventListener("submit", (e) => {
  e.preventDefault();  
  saveUser();
});

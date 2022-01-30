export const baseURL = "https://portifolio-website.herokuapp.com/api";
const saveUser = (data) => {
  fetch(`https://portifolio-website.herokuapp.com/api/users/`, {
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify(
        data
     
    ),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(e.target);
  var object = {};
formData.forEach(function(value, key){
    object[key] = value;
});

  saveUser(object);
});

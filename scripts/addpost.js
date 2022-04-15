
const apiUrl = "https://portifolio-website.herokuapp.com/";

document.getElementById("insert").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Sending request");
  const formData = new FormData(e.target);

  fetch(`${apiUrl}api/articles`, {
    method: "POST",
    mode: "cors",
    body: formData,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let status = response.status;
      console.log(response);
      document.getElementsByClassName("add-post-div").innerHTML = `
      <h1>The post has been created</h1>
      <a href="./dashboard.html">View a list</a>
      `;
    })
    .catch(function (response) {
      console.log(response);
    });
});


const apiUrl = "http://localhost:5000/";

document.getElementById("insertpro").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Sending request");
  const formData = new FormData(e.target);

  fetch(`${apiUrl}api/projects`, {
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
      document.getElementsByClassName("add-pro-div").innerHTML = `
      <h1>The post has been created</h1>
      <a href="./projects.html">View a list</a>
      `;
    })
    .catch(function (response) {
      console.log(response);
    });
});

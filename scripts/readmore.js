
let id = localStorage.getItem("id");
const blogTitle = document.getElementById("header");
const blogDetail = document.getElementById("blodetail");
const hook = document.getElementById("hook");
const img = document.getElementById("image");

const sedDivInfo = () => {
  fetch(`${apiUrl}api/articles/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    referrer: "no-referrer",
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(function (response) {
      let responseData = response.data.data;
      console.log(response.data);
      blogTitle.innerHTML = responseData.title;
      blogDetail.innerHTML = responseData.content;
      hook.innerHTML = responseData.hook;
      img.src = responseData.banner;
    })
    .catch(function (err) {
      console.warn("Error", err);
    });
};
sedDivInfo();

document.getElementById("sendcomment").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("commentname").value;

  const email = document.getElementById("commentemail").value;

  const comment = document.getElementById("commentmessage").value;

  fetch(`${apiUrl}api/articles/${id}`, {
    method: "POST",
    mode: "cors",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: comment,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let status = response.status;
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
});

const token =
  localStorage.getItem("token") == "undefined"
    ? null
    : localStorage.getItem("token");
const user =
  localStorage.getItem("user") == "undefined"
    ? null
    : JSON.parse(localStorage.getItem("user"));
const apiUrl = "https://portifolio-website.herokuapp.com/";
const handleUserState = (state) => {
  if (state == "logout") {
    localStorage.clear();
    document.querySelectorAll(".loggedin").forEach((el) => {
      el.style.display = "none";
    });
    document.querySelectorAll(".loggedout").forEach((el) => {
      el.style.display = "block";
    });
  } else {
    document.querySelectorAll(".loggedin").forEach((el) => {
      el.style.display = "block";
    });
    document.querySelectorAll(".loggedout").forEach((el) => {
      el.style.display = "none";
    });
  }
};

window.addEventListener("load", () => {
  const authState = localStorage.getItem("authenticated");
  if (authState && authState == "true") {
    handleUserState();
  } else {
    handleUserState("logout");
  }
});

try {
  document.querySelectorAll(".userlogout").forEach((el) => {
    el.addEventListener("click", (e) => {
      let proceed = confirm("Do you want to logout");
      if (proceed) {
        localStorage.clear();
        location.pathname = "/";
      }
    });
  });
} catch (error) {
  console.log(error);
}

const readMore = (blogId) => {
  // console.log(blogId);
  localStorage.setItem("id", blogId);
  location.href = "./readmore.html";
};

const updateThisBlog = (blogId) => {
  localStorage.setItem("id", blogId);
  location.href = "./update.html";
};

const deleteBlog = (blogId) => {
  fetch(`${apiUrl}api/articles/${blogId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "applicaion/json",
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
      let responseData = response;
      console.log(responseData);
      selection();
    })
    .catch(function (err) {
      console.warn("Error", err);
      alert("Pease try again");
    });
};

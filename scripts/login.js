window.addEventListener("load", () => {
  const form = document.getElementById("login");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    fetch(`${apiUrl}api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((res) => {
        console.log("response", res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("authenticated", 'true');
        if (res.data.email === "d.twizeyima@alustudent.com") {
          location.href = "./admin.html";
        } else {
          location.href = "./dashboard.html";
        }
      })
      .catch((err) => {
        console.log(err);
        alert(`Invalid credentials`);
      });
  });
});





let timeLeft = 10;

let myCountdown = setInterval(() => {
  if (timeLeft <= 0){
    // say happy new year
    clearInterval(myCountdown);
    document.getElementById("countdown").innerHTML = "Happy New Year!!"
  }
  else {
    // decrement the timer
    document.getElementById("countdown").innerHTML = timeLeft
  }
  timeLeft -= 1;
}, 1000)

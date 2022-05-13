function selection() {
    var data = " ";
    var projectselected = document.getElementById("allprojects");
    fetch(`${apiUrl}api/projects`, {
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
        console.log(response);
        responseData.reverse()
        responseData.forEach((value) => {
          data += `<div class="project">
           <p class="proname">${value.proname}</p>
          </a>
          <img src="${value.url}" alt="">
          
          <p class="hook2">
            ${value.proexpl}
          </p>
          <div class="links">
         <button> <a href="${value.live}" target="_blank">View</a> </button>
          <button> <a href="${value.github}" target="_blank">Github</a> </button>
          </div>
         
        </div>`;
        });
        projectselected.innerHTML = data;
      })
      .catch(function (err) {
        console.warn("Error", err);
      });
  }
  selection();
  
  
  
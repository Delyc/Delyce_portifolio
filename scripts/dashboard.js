const firebaseConfig = {
  apiKey: "AIzaSyB2sPsNJu53VvCvnevHmpnq7B9xTVbbZB0",
  authDomain: "delyceportifolio.firebaseapp.com",
  projectId: "delyceportifolio",
  storageBucket: "delyceportifolio.appspot.com",
  messagingSenderId: "532561569646",
  appId: "1:532561569646:web:f16d1994049c3a4841c37f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.database();
function selection() {
  var data = " ";
  var postselected = document.getElementById("allposts");
  fetch(`http://localhost:5000/api/articles`, {
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
      responseData.forEach((value) => {
        data += `<div class="post">
      <p class="title">${value.title}</p>
        </a>
        <img src="${value.banner}" alt="">
        <p class="hook">
          ${value.hook}
        </p>
        <div class="post-actions">
          <button onclick="readMore('${value._id}')" class="buttondelete" type="submit">More<i class="fas fa-angle-right"></i> </button>
         
        </div>
      </div>`;
      });
      postselected.innerHTML = data;
    })
    .catch(function (err) {
      console.warn("Error", err);
    });
}
selection();

const searchForm = document.querySelector(".search-form")
searchForm.addEventListener("submit", (e)=>{

  e.preventDefault();
  var data = " ";
  var postselected = document.getElementById("allposts");
  let term = searchForm.search.value;

  if (term !=="") {
    fetch(`http://localhost:5000/api/articles/search?search=${term}`, {
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
      postselected.innerHTML = " ";
      
      let responseData = response.data;
      console.log(responseData);
      if (responseData.length === 0){ 
        
        postselected.innerHTML += `<div class = "nopost">
        <br><br><br> no post found <br><br><br> 
        </div>`
        
      } else{
        console.log(response);
      responseData.forEach((value) => {
        data += `<div class="post">
      <p class="title">${value.title}</p>
        </a>
        <img src="${value.banner}" alt="">
        <p class="hook">
          ${value.hook}
        </p>
        <div class="post-actions">
          <button onclick="readMore('${value._id}')" class="buttondelete" type="submit">More<i class="fas fa-angle-right"></i> </button>
         
        </div>
      </div>`;
      });
      postselected.innerHTML = data;
      }
      
    })
    .catch(function (err) {
      console.warn("Error", err);
    });



    console.log(term)
  }

})


 

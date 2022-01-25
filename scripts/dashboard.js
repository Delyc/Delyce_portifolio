const firebaseConfig = {
    apiKey: "AIzaSyB2sPsNJu53VvCvnevHmpnq7B9xTVbbZB0",
    authDomain: "delyceportifolio.firebaseapp.com",
    projectId: "delyceportifolio",
    storageBucket: "delyceportifolio.appspot.com",
    messagingSenderId: "532561569646",
    appId: "1:532561569646:web:f16d1994049c3a4841c37f"
  };

  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


const db = app.database();
function selection() {
  db.ref("posts").on("value", (snapshot) => {
    var data = " ";
    var postselected = document.getElementById("allposts");
    console.log(snapshot.val());
    var dbdata = snapshot.val();
    for (var i in dbdata) {
      data += `<div class="post">
      <p class="title">${dbdata[i].Title}</p>
    </a>
    <img src="${dbdata[i].image}" alt="">
    <p class="hook">
       ${dbdata[i].Hook}
    </p>
    <button onclick="readMore('${dbdata[i].id}')" class="buttondelete"type="submit">more<i class="fas fa-angle-right"></i> </button>
  </div>`;
    }
    postselected.innerHTML = data;
  });
}
selection(); 
  const readMore = (blogId) => {
    // console.log(blogId);
    localStorage.setItem('id',blogId);
    location.href =  './readmore.html';
  }
  
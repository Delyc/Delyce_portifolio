let id = localStorage.getItem("id");

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
if (id == null) {
  location.href = "./addpost.html";
}

function getBlogInfo(idInfo) {
  let idBlog = idInfo != null ? idInfo : id;
  
  var blogRef = db
    .ref("posts")
    .orderByChild("id")
    .limitToFirst(1)
    .equalTo(idBlog);
  const blogTitle = document.getElementById("header");
  const blogDetail = document.getElementById("blodetail");
  const hook = document.getElementById("hook");
  const img = document.getElementById("image");
  const btn = document.getElementById("buttons");
 
  blogRef.on("value", (snap) => {
    var data = snap.val();
    console.log(data);
      for (var i in data) {
      
      blogTitle.innerHTML = data[i].Title;
      blogDetail.innerHTML = data[i].Content;
      hook.innerHTML = data[i].Hook;
      img.src = data[i].image;

      var databutton = `<div class="buttons">
      


   <button onclick="update('${data[i].id}')" class="buttonupdate"type="submit">update</button>
   <button onclick="deletion('${data[i].id}')" class="buttondelete"type="submit"><i class="fas fa-minus-circle"></i>delete</button>
   
   
 </div>`;
      btn.innerHTML = databutton;
    }
  });
}
getBlogInfo(id);

// div buttons


function deletion(id){
    var query =db.ref('posts').orderByChild('id').limitToFirst(1).equalTo(id);
    query.once("value", function(snapshot) {
        console.log(snapshot.val());
        snapshot.forEach(function(child) {
            child.ref.remove();
            location.reload();
        })
    }) 
   }
  
  
  
  const update = (blogId) => {
      localStorage.setItem('id',blogId);
      location.href =  './articleupdate.html';
  }
  
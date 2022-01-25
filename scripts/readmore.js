let id = localStorage.getItem("id");

const firebaseConfig = {
  apiKey: "AIzaSyCn9-O8lgSYUJ9_xabwuaEOvsWcEdbXEKo",
  authDomain: "delyce-atlp.firebaseapp.com",
  projectId: "delyce-atlp",
  storageBucket: "delyce-atlp.appspot.com",
  messagingSenderId: "575898273914",
  appId: "1:575898273914:web:a73cb99a4c2111427c93c3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.database();
if (id == null) {
  location.href = "./articles.html";
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
    for (var i in data) {
      blogTitle.innerHTML = data[i].blogTitle;
      blogDetail.innerHTML = data[i].blogDetail;
      hook.innerHTML = data[i].hook;
      img.src = data[i].image;

      var databutton = `<div class="buttons">
      


   <button onclick="update('${data[i].id}')" class="buttonupdate"type="submit">update</button>
   <button onclick="deletion('${data[i].id}')" class="buttondelete"type="submit"><i class="fas fa-minus-circle"></i>delete</button>
   
   
 </div>`;
      btn.innerHTML = databutton;
    }
  });
}
getBlogInfo();
{
  /* <button onclick="readMore('${dbdata[i].id}')" class="buttondelete"type="submit">Read more</button> */
}

//blog creation
document.getElementById("postcomment").addEventListener("click", (e) => {
  e.preventDefault();

  const db = app.database();
  const comment = document.getElementById("comment").value;
  const name = document.getElementById("commentname").value;
  const email = document.getElementById("commentemail").value;
  console.log(comment);
  const uid = db.ref("commenting").push().key;
  db.ref("commenting")
    .push()
    .set({
      //remove     //update       //display, selecting, remove, todo : restriction
      id: uid,
      comment: comment,
      name: name,
      email: email,
    })
    .then(() => {
      alert("Comment added");
    });
  getBlogInfo();
});

// div buttons


function deletion(id){
    var query =db.ref('blogs').orderByChild('id').limitToFirst(1).equalTo(id);
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
  
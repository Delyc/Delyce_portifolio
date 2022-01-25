
const firebaseConfig = {
    apiKey: "AIzaSyB2sPsNJu53VvCvnevHmpnq7B9xTVbbZB0",
    authDomain: "delyceportifolio.firebaseapp.com",
    projectId: "delyceportifolio",
    storageBucket: "delyceportifolio.appspot.com",
    messagingSenderId: "532561569646",
    appId: "1:532561569646:web:f16d1994049c3a4841c37f"
  };



  
  const app = firebase.initializeApp(firebaseConfig);

  document.getElementById("insert").addEventListener("submit", (e) => {
  
    e.preventDefault();
    
    const db = app.database();
    const blogTitle = document.getElementById("title").value;
    
    const blogDetail = tinymce.activeEditor.getContent();

    const hook = document.getElementById("hook").value;   
    const image = document.getElementById("Arimage").files[0];  
    const name = image.name;
    var storageRef = firebase.storage().ref("blogimages/"+ name);
    const uploading = storageRef.put(image);  
    uploading.on("state_changed", function (snapshot) {}, function(error){console.log(error)}, function(){
    
      uploading.snapshot.ref.getDownloadURL().then(function (imageUrl) {
        const uid = db.ref("posts").push().key;                             
        db.ref("posts").push().set({                                   
          //remove     //update       //display, selecting, remove, todo : restriction
          id: uid,
          Title: blogTitle,
          Content: blogDetail,
          Hook: hook,
          image: imageUrl
        }).then(() => {
          alert("post successfully added !!")
        })
        selection();
              
      })
    })                            
  
  });
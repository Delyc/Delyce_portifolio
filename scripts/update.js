tinymce.init({
    selector: '#editor1',
    plugins: 'a11ychecker advcode casechange export formatpainter image linkchecker autolink lists checklist pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
    toolbar: 'a11ycheck addcomment showcomments casechange checklist image code export formatpainter  permanentpen table',
    toolbar_mode: 'floating',
    tinycomments_mode: 'embedded',
  });
  
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyB2sPsNJu53VvCvnevHmpnq7B9xTVbbZB0",
    authDomain: "delyceportifolio.firebaseapp.com",
    projectId: "delyceportifolio",
    storageBucket: "delyceportifolio.appspot.com",
    messagingSenderId: "532561569646",
    appId: "1:532561569646:web:f16d1994049c3a4841c37f"
  };
  
  
  
  
  const app = firebase.initializeApp(firebaseConfig);
  const Id = localStorage.getItem('id');

  const blogTitleI = document.getElementById("title");    
  const blogDetailI = tinymce.activeEditor.getContent();
  const hookI = document.getElementById("hook");   
  const imageI = document.getElementById("Arimage").files[0];  
  
  document.getElementById("insert").addEventListener("submit", (e) => {  
    e.preventDefault();    
    const blogTitle = document.getElementById("title").value;    
    const blogDetail = tinymce.activeEditor.getContent();
    const hook = document.getElementById("hook").value;   
    const image = document.getElementById("Arimage").files[0];  
   
    if(image){
      const name = image.name;
      var storageRef = firebase.storage().ref("blogimages/"+ name);
      const uploading = storageRef.put(image);  
      uploading.on("state_changed", function (snapshot) {}, function(error){console.log(error)}, function(){
    
        uploading.snapshot.ref.getDownloadURL().then(function (imageUrl) {
                                    
          fetch(`${apiUrl}api/articles/${Id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "title" : blogTitle,
              "hook" : hook,
              "content" : blogDetail,
              "banner" : imageUrl
            })
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            
            let status = response.status;
            console.log(response);
            
  
        }).catch(function (response) {
            console.log(response);      
        });        
                
        })
      })                           
    
    }
    else{
      alert("You need to select image");
    }
 
  });

const setInput = () => {
  fetch(`${apiUrl}api/articles/${Id}`, {
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
      let responseData = response;
      hookI.value = responseData.hook;
      blogDetailI.value = tinymce.activeEditor.setContent(responseData.content);
      blogTitleI.value = responseData.title;
    })
    .catch(function (err) {
      console.warn("Error", err);
    });
}

window.addEventListener('load', () =>{
  setInput();
})
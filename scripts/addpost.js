
tinymce.init({
  selector: '#editor1',
  plugins: 'a11ychecker advcode casechange export formatpainter image linkchecker autolink lists checklist pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
  toolbar: 'a11ycheck addcomment showcomments casechange checklist image code export formatpainter  permanentpen table',
  toolbar_mode: 'floating',
  tinycomments_mode: 'embedded',
});







  document.getElementById("insert").addEventListener("submit", (e) => {
  
    e.preventDefault();
    
    const blogTitle = document.getElementById("title").value;
    
    const blogDetail = tinymce.activeEditor.getContent();

    const hook = document.getElementById("hook").value;   
    const image = document.getElementById("Arimage").files[0];  
    const name = image.name;
    var storageRef = firebase.storage().ref("blogimages/"+ name);
    const uploading = storageRef.put(image);  
    uploading.on("state_changed", function (snapshot) {}, function(error){console.log(error)}, function(){
    
      uploading.snapshot.ref.getDownloadURL().then(function (imageUrl) {
                                  
        fetch(`${apiUrl}api/articles`, {
          method: 'POST',
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
  
  });
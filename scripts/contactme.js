



const firebaseConfig = {
    apiKey: "AIzaSyB2sPsNJu53VvCvnevHmpnq7B9xTVbbZB0",
    authDomain: "delyceportifolio.firebaseapp.com",
    projectId: "delyceportifolio",
    storageBucket: "delyceportifolio.appspot.com",
    messagingSenderId: "532561569646",
    appId: "1:532561569646:web:f16d1994049c3a4841c37f"
  };
  
  
  
  
  
  
  
  
    document.getElementById("sending").addEventListener("submit", (e) => {
    
      e.preventDefault();
      
      const fullname = document.getElementById("name").value;
      
      const email = document.getElementById("email").value;
  
      const message = document.getElementById("message").value;   
      
                                    
          fetch(`http://localhost:5000/api/queries`, {
            method: 'POST',
            mode: 'cors',
           
            headers: {
              'Content-Type': 'application/json',
             
          },
            body: JSON.stringify({
              "fullname" : fullname,
              "email" : email,
              "message" : message,
             
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
          
                
        
                               
    
    });




const firebaseConfig = {
  apiKey: "AIzaSyB2sPsNJu53VvCvnevHmpnq7B9xTVbbZB0",
  authDomain: "delyceportifolio.firebaseapp.com",
  projectId: "delyceportifolio",
  storageBucket: "delyceportifolio.appspot.com",
  messagingSenderId: "532561569646",
  appId: "1:532561569646:web:f16d1994049c3a4841c37f"
};








  document.getElementById("hireme").addEventListener("submit", (e) => {
  
    e.preventDefault();
    
    const name = document.getElementById("namehire").value;
    
    const email = document.getElementById("emailhire").value;

    const job = document.getElementById("jobhire").value;   
    
                                  
        fetch(`https://portifolio-website.herokuapp.com/api/hireme`, {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "name" : name,
            "email" : email,
            "job" : job,
           
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
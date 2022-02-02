



const apiUrl = 'https://portifolio-website.herokuapp.com/';
  
  
  
  
  
  
    document.getElementById("sending").addEventListener("submit", (e) => {
    
      e.preventDefault();
      
      const fullname = document.getElementById("name").value;
      
      const email = document.getElementById("email").value;
  
      const message = document.getElementById("message").value;   
      
                                    
          fetch(`${apiUrl}api/queries`, {
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
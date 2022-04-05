

  
  
  
  
  
  
    document.getElementById("sending").addEventListener("submit", (e) => {
    
      e.preventDefault();
      
      const fullname = document.getElementById("fname").value;
      
      const email = document.getElementById("femail").value;
  
      const message = document.getElementById("fmessage").value;   
      
                                    
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
            document.getElementById("sending").reset();

  
        }).catch(function (response) {
            console.log(response);      
        });
          
                
        
                               
    
    });
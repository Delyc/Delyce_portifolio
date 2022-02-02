




  document.getElementById("hireme").addEventListener("submit", (e) => {

  
    e.preventDefault();
    
    const name = document.getElementById("namehire").value;
    
    const email = document.getElementById("emailhire").value;

    const job = document.getElementById("jobhire").value;   
    
                                  
        fetch(`${apiUrl}api/hireme`, {
          method: 'POST',
          mode: 'cors',
         
          headers: {
            'Content-Type': 'application/json',
           
        },
          body: JSON.stringify({
            "name" : name,
            "email" : email,
            "message" : job,
           
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
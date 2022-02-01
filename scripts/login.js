window.addEventListener('load',() => {
   const form = document.getElementById('login');

   form.addEventListener('submit',(e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        fetch(`${apiUrl}api/users/login`,{
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
           
        },
           body: JSON.stringify({
             email : email,
             password: password 
           })
        })
        .then((res) => {
           if(res.ok){
            return res.json();
           }
           else{
              return Promise.reject(res);
           }           
        })
        .then((res) => {
           console.log(res);
           localStorage.setItem('token', res.token);
           localStorage.setItem('user', JSON.stringify(res.data));           
           location.href = './dashboard.html';
        })
        .catch((err) => {
           console.log(err);
           alert(`Invalid credentials`);
        })
   })
})
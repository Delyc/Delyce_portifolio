const token = localStorage.getItem('token') == 'undefined'  ? null : localStorage.getItem('token') ;
const user =  localStorage.getItem('user') == 'undefined' ? null : JSON.parse(localStorage.getItem('user'));
const apiUrl = 'https://portifolio-website.herokuapp.com/';


const readMore = (blogId) => {
    // console.log(blogId);
    localStorage.setItem("id", blogId);
    location.href = "./readmore.html";
  };
  
  const updateThisBlog = (blogId) => {
    localStorage.setItem("id", blogId);
    location.href = "./update.html";
  };
  
  const deleteBlog = (blogId) => {
    fetch(`${apiUrl}api/articles/${blogId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "applicaion/json",
      },
      referrer: "no-referrer",
    })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }else {
        return Promise.reject(response);
      }
    })
    .then(function (response) {
      let responseData = response;   
      console.log(responseData);
      selection()
    })
    .catch(function (err) {
      console.warn("Error", err);
      alert('Pease try again')
    });
}
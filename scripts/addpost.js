// tinymce.init({
//   selector: '#editor1',
//   plugins: 'a11ychecker advcode casechange export formatpainter image linkchecker autolink lists checklist pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
//   toolbar: 'a11ycheck addcomment showcomments casechange checklist image code export formatpainter  permanentpen table',
//   toolbar_mode: 'floating',
//   tinycomments_mode: 'embedded',
// });

const firebaseConfig = {
  apiKey: "AIzaSyB2sPsNJu53VvCvnevHmpnq7B9xTVbbZB0",
  authDomain: "delyceportifolio.firebaseapp.com",
  databaseURL: "https://delyceportifolio-default-rtdb.firebaseio.com",
  projectId: "delyceportifolio",
  storageBucket: "delyceportifolio.appspot.com",
  messagingSenderId: "532561569646",
  appId: "1:532561569646:web:f16d1994049c3a4841c37f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const apiUrl = "https://portifolio-website.herokuapp.com/";

document.getElementById("insert").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target)

  fetch(`${apiUrl}api/articles`, {
    method: "POST",
    mode: "cors",
   body: formData
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let status = response.status;
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
});

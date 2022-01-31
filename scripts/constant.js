const token = localStorage.getItem('token') == 'undefined'  ? null : localStorage.getItem('token') ;
const user =  localStorage.getItem('user') == 'undefined' ? null : JSON.parse(localStorage.getItem('user'));
const apiUrl = 'https://portifolio-website.herokuapp.com/';
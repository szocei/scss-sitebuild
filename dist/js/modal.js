
let modal = document.getElementById("myModal");

let btn1 = document.querySelector(".privacyLink");
let btn2 = document.querySelector(".termsLink");
let btn3 = document.querySelector(".faqLink");

let title=document.querySelector('.modal--title');


const span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
  title.innerHTML="Privacy"
}

btn2.onclick = function() {
  modal.style.display = "block";
  title.innerHTML="Terms"
}

btn3.onclick = function() {
  modal.style.display = "block";
  title.innerHTML="FAQ"
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
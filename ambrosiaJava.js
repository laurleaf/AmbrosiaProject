function displayLogin() {

}





// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openNav() {
    document.getElementById("tab").style.width = "20vw";
    document.getElementById("main").style.marginLeft = "20vw";
}

function closeNav() {
    document.getElementById("tab").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function openLogin() {
  document.getElementById('loginForm').style.height='30vw'
  document.getElementById('loginForm').style.display='block'
  // document.getElementById('loginStatus').style.display='none'
}

function closeLogin() {
  document.getElementById('loginForm').style.height='0vw'
  document.getElementById('loginForm').style.display='none'
  // document.getElementById('loginStatus').style.display='block'
}

function openSignUp() {
  document.getElementById('signUpForm').style.height='30vw'
  document.getElementById('signUpForm').style.display='block'
  // document.getElementById('signUpStatus').style.display='none'
}

function closeSignUp() {
  document.getElementById('signUpForm').style.height='0vw'
  document.getElementById('signUpForm').style.display='none'
  // document.getElementById('signUpStatus').style.display='block'
}

// function submitLogin() {
//   if
// }

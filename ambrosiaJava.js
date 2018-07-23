// $(document).ready(function() {
//
//     // var h = document.getElementById('nav').scrollHeight();
//     // console.log(h);
//     // var el1 = $( "header" );
//     // var h1 = el1.height();
//     // var el2 = $( "nav" );
//     // var h2 = el2.height();
//     // var h = h1 + h2 + 1000;
//     // var elChange = document.getElementById("offset");
//     // elChange.style.height=h;
// });


var shopList = [];

function addToShopList(){ //adds a new item from the user to the shopping list
  currfood = document.getElementById("foodName").value// finds the value that the user typed
  shopList.push(currfood); //adds the item to the list
  console.log(shopList); //prints to the console to test the function
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
    document.getElementById("tab").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("tab").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

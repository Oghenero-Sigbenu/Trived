$(document).ready(function(){
  $(".wrapper").toggleClass("collapse");
    $(".side").click(function(){
        $(".wrapper").toggleClass("collapse");
    });
    return false;
});

function openCard(cardName) { 
    var i;
    var x = document.getElementsByClassName("card");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cardName).style.display = "block";
}

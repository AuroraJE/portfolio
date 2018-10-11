
// A $( document ).ready() block.
$( document ).ready(function() {

$( ".slideshow" ).click(function() {
  var img = $(this).attr("src")
  $("#bigimage").attr("src", img) 
});



});
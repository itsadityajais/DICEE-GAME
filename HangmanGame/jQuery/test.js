$("h1").addClass("title margin");
// $("h1").removeClass("title");
console.log($("h1").hasClass("title margin")); //checks whether it has a class or not
$("button").text("Dont Click me!");
$("button").html("<em>hey<em>"); //innerHTML
// $("button").text("<em>hey<em>");
$("a").attr("href", "https://www.javatpoint.com/jquery-cdn"); //remember set and get thing
$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "purple");
});
// $("input").keypress(function (event) {
//   console.log(event.key);
// });
$(document).keypress(function (event) {
  $("h1").text(event.key);
});

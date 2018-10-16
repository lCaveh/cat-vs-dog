$(function() {
  $("button#meow").click(function(){
    $("ul.cat").prepend("<li>MEOW</li>");
    $("ul.cat").children("li").first().click(function() {
      $(this).after("<li><img src='./img/meow.jpg' alt='meowing'></li>");
    });
  });
  $("button#bark").click(function(){
    $("ul.dog").prepend("<li>RUFF</li>");
    $("ul.dog").children("li").first().click(function() {
      $(this).after("<li><img src='./img/bark.jpg' alt='barking'></li>");
    });
  });
});

$(document).ready(function() {

  $("form#application").submit(function(event) {
    event.preventDefault();
    var myInput = parseInt($('#userInput').val());
    var pingPongResult = pingPong (myInput);
    $("#result").slideDown("slow");
  })

  $("#About").click(function(event) {
    $("#menu").css('width', '250px');
    $(".info").fadeToggle();
  })

  $(".closebtn").click(function(event) {
    $("#menu").css('width', '0px');
    $(".info").fadeToggle();
  })
});

function pingPong(num) {
  for(var i = 1; i <= num; i++) {
    if((i % 15) === 0) {
      $("#list").append("<li>Ping Pong</li>");
    }else if((i % 5) === 0){
      $("#list").append("<li>Pong</li>");
    }else if((i % 3) === 0){
      $("#list").append("<li>Ping</li>");
    }else{
      $("#list").append("<li>"+i+"</li>");
    }
  }
};

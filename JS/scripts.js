$(document).ready(function() {

  $("form#application").submit(function(event) {
    event.preventDefault();
    var myInput = parseInt($('#userInput').val());
    var pingPongResult = pingPong (myInput);
    $(".text").text(pingPongResult);
    $("#result").show();
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
  var resultArray = [];
  for(var i = 1; i <= num; i++) {
    if((i % 15) === 0) {
      resultArray.push('pingPong');
      $("#list").append("<li>Ping Pong</li>");
    }else if((i % 5) === 0){
      resultArray.push('pong');
      $("#list").append("<li>Pong</li>");
    }else if((i % 3) === 0){
      resultArray.push('ping');
      $("#list").append("<li>Ping</li>");
    }else{
      resultArray.push(i);
      $("#list").append("<li>"+i+"</li>");
    }
  }

  return resultArray;
};

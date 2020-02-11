import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;

function checkTime(i) {
  if (i < 10) {
      i = "0" + i
    }  // add zero in front of numbers < 10
  return i;
}

function test(startH, startM, startS){
//   var h = today.getHours();
//   var m = today.getMinutes();
//   var s = today.getSeconds();
  var today = new Date();
  var timerH = today.getHours() - startH;
  var timerM = today.getMinutes() - startM;
  var timerS = today.getSeconds() - startS;
  if (timerS < 0){
    timerS = timerS + 60;
  }
  if (timerM < 0){
    timerM = timerM + 60;
  }
  if (timerH < 0){
    timerM = timerM + 12;
  }
  timerM = checkTime(timerM);
  timerS = checkTime(timerS);
  $("#timer").text(timerH + ":" + timerM + ":" + timerS);
  //var t = setTimeout(test(startH,startM,startS), 500);
}

$(document).ready(function() {
    //let infectTimer = setInterval(() => {game.infect();}, 120000);
    const today = new Date()
    const startH = today.getHours();
    const startM = today.getMinutes();
    const startS = today.getSeconds();
    //test(startH,startM,startS);
    let timer = setInterval(() => {test(startH, startM, startS)}, 1000);
    // console.log(timer);

    $("#startButton").click(function(){  
        console.log("start");
    })

    $("#endButton").click(function() {
        //clearInterval(timer);
    })
})


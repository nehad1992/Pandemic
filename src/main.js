import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Game, Player } from './game';

function checkTime(i) {
  if (i < 10) {
      i = "0" + i
    }  // add zero in front of numbers < 10
  return i;
}

 let game = new Game();

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

function updateGameVars(){
  setInterval(() => {
    console.log("UPDATE GAME VARS CALLED");
    $("#currentActionPoints").text(game.player.actionPoints);
    $("#currentLocation").text(game.player.currentLocation);
    $("#currentDiseaseCount-tokyo").text(game.cities[0].diseaseCount);
    $("#currentDiseaseCount-paris").text(game.cities[1].diseaseCount);
    $("#currentDiseaseCount-seattle").text(game.cities[2].diseaseCount);
  }, 2000);
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
      console.log("start") 
      game = new Game;
      game.setPlayerLocation(2);

      console.log("player actions: ", game.player.actionPoints);
      console.log("disease in seattle: ", game.cities[2].diseaseCount);
      game.setMoveTimer();
      game.setInfectTimer(2);
      game.player.setActionPoints();
      game.infect(1);
      updateGameVars();
    })

    $("#devButton").click(function(){ 
      console.log("dev") 
      // game.player.setActionPoints();
      // game.infect(1);
      updateGameVars();
    })

    $("#endButton").click(function() {
        //clearInterval(timer);
    })
})


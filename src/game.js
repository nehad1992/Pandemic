export class Player {
  constructor(){
    this.moveCount = 0;
    this.currentLocation = seattle;
  }

  treat(city){
    // disease count --
  }

  travel(){

  }
}

export class City {
  constructor(){
    this.diseaseCount = 0;
  }

  infect(){
    // disease count ++
  }
}

var seattle = new City;
var neha = new Player;
neha.treat(seattle);
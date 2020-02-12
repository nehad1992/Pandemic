

export class Player {
  constructor(){
    this.actionPoints = 0;
    this.currentLocation;
  }
  setActionPoints(){
    this.actionPoints ++
  }

  treat(city){
    if(this.actionPoints=== 0 || city.diseaseCount === 0){
      return false;
    }else{
      this.actionPoints --;
      city.diseaseCount --;
    }
  //how to target the city 

  }

  // travel(){
  //   this.actionPoints --
  //   // how to target city
  //   // give city a boolean true false if player is present
  // }
}


class City {
  constructor(){
    this.diseaseCount = 0;

  }
}

export class Game {
  constructor(){
    let tokyo = new City();
    let paris = new City();
    let seattle = new City(); 
    this.isGameOver = false;
    this.cities = [tokyo, paris, seattle];
    this.player = new Player();
  }
  //  To check the city number for subtraction needed for decreasing action pts.
  // let cityDictionary = {}
  // cityDictionary.put(cityName, cities.Length-1);
  // cityDictionary.hasKey("Seattle");

  getTotalDiseaseCount(){
    let totalDisease = 0;
    for (let i = 0; i < this.cities.length; i++){
      totalDisease += this.cities[i].diseaseCount;
    }
    return totalDisease;
  }

  setPlayerLocation(cityIndex){
    this.player.currentLocation = cityIndex;
  }

  infect(cityIndex){
      console.log("before infect/ disease in seattle: ", this.cities[2].diseaseCount);
    let totalDisease = this.getTotalDiseaseCount();

    if (totalDisease >= (3 * this.cities.length)){
      console.log("game over");
      this.isGameOver = true;
    } else if(this.cities[cityIndex].diseaseCount == 3){ 

      for (let i =0; i < this.cities.length; i++){
        if (i != cityIndex && this.cities[i].diseaseCount < 3) {
          this.cities[i].diseaseCount ++;
        }
      }

    } else{
      this.cities[cityIndex].diseaseCount ++;
    }
    console.log("after infect/ disease in seattle: ", this.cities[2].diseaseCount);
  }

  setInfectTimer(cityIndex){
    setInterval(() => {
      this.infect(cityIndex);
    }, 12000);
  }

  setMoveTimer(){
    setInterval(() => {
      this.player.setActionPoints();
    }, 6000);
  }
}

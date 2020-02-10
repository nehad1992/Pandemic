| Spec | Example Input | Expected Output |
| :-------------     | :------------- | :------------- |
|Creates three cities with 2 disease points on the board | 0 minutes| Seattle: diseaseCount: 0, Paris: diseaseCount: 0, Tokyo: diseaseCount: 2. | 
| "Infect" a city | Seattle: diseaseCount: 0, Paris: diseaseCount: 0, Tokyo: diseaseCount: 2 - => Infect Paris  | Seattle: diseaseCount: 0, Paris: diseaseCount: 1, Tokyo: diseaseCount: 2 |
| "Infect" a city after two minutes of time | Seattle: diseaseCount: 0, Paris: diseaseCount: 0, Tokyo: diseaseCount: 2 - => Infect Paris at 2 minute timer | Seattle: diseaseCount: 0, Paris: diseaseCount: 1, Tokyo: diseaseCount: 2 |
| "Infect" a same city after another two minutes of time |Seattle: diseaseCount: 0, Paris: diseaseCount: 1, Tokyo: diseaseCount: 2 - => Infect Paris at 4 minute timer | Seattle: diseaseCount: 0, Paris: diseaseCount: 2, Tokyo: diseaseCount: 2 |
| "Infect" nearby cities when the diseaseCount limit is maxed out at 3 | Seattle: diseaseCount: 0, Paris: diseaseCount: 3, Tokyo: diseaseCount: 2 - => Infect Paris | Seattle: diseaseCount: 1, Paris: diseaseCount: 3, Tokyo: diseaseCount: 3 |
| Randomize the city infections - every 2 minutes, the total of the existing diseaseCounts increases by 1 |Seattle: diseaseCount: 1, Paris: diseaseCount: 1, Tokyo: diseaseCount: 1 - => Infect X at 2 minute timer | Seattle: diseaseCount: 2, Paris: diseaseCount: 1, Tokyo: diseaseCount: 1 |
|construct a player class starting off with no moves| New game - 0 minutes |Player created|
| Player earns 1 move after 1 minute | Player: moveCount: 0, => 1 minute |Player: moveCount: 1|
| Player earns 1 move after 2 minutes | Player: moveCount: 1, => 2 minutes |Player: moveCount: 2|
| Player can "treat" disease in a city as 1 move | Player: moveCount: 1, Seattle: diseaseCount: 1, Paris: diseaseCount: 1, Tokyo: diseaseCount: 1 -- "treat" Seattle | Player: moveCount: 0, Seattle: diseaseCount: 0, Paris: diseaseCount: 1, Tokyo: diseaseCount: 1 |
| construct an active location feature for the "player"| 0 minutes| Player is "in" Seattle |
| Player can travel to a nearby city as 1 move | Player: moveCount: 1, location: Seattle; Seattle: diseaseCount: 1, Paris: diseaseCount: 1, Tokyo: diseaseCount: 1 -- move to Paris | Player: moveCount: 0, location: Paris; Seattle: diseaseCount: 1, Paris: diseaseCount: 1, Tokyo: diseaseCount: 1 |
import {City} from './../src/game.js';

describe("City", () => {
  test("should properly construct city with 0 disease points", () => {
    var seattle = new City;
    expect(seattle.diseaseCount).toEqual(0);
  })
})
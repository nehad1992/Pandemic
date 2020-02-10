import { City } from '../src/game.js';

describe("City", () => {
  jest.useFakeTimers();
  let seattle;

  beforeEach(function() {
    seattle = new City;
  })

  afterEach(function() {
    jest.clearAllTimers();
  })

  test("should properly construct city with 0 disease points", () => {
    expect(seattle.diseaseCount).toEqual(0);
  })
  test("should increase Seattle diseaseCount by 1 when Seattle is infected", () => {
    seattle.infect();
    expect(seattle.diseaseCount).toEqual(1);
  })
  test("should increase Seattle diseaseCount by 1 after two minutes", () => {
    jest.advanceTimersByTime(120001)
    expect(seattle.diseaseCount).toEqual(1);
  })
})

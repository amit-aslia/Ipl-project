let matchesPerYear = require("../ipl/matchesPerYear");

describe("Matches Played per season", () => {
  it("Matches Played in Every Season", () => {
    const dataSet= [
      {season:2013},
      {season:2013},
      {season:2013},
      {season:2009},
      {season:2009},
      {season:2011},
      {season:2011},
      {season:2011},	 
    ];
    const expectedOutput = {
      '2013':3,
      '2009':2,
      '2011':3
    };
    expect(matchesPerYear(dataSet)).toEqual(expectedOutput);
  });
  it("Matches Played if there is no data in dataset", () => {
    const dataSet = [];
    const expectedOutput = {};
    expect(matchesPerYear(dataSet)).toEqual(expectedOutput);
  });
})
    // return Matchesperyear;

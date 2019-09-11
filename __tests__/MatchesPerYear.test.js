const matchesPerYear = require('../ipl/matchesPerYear');

describe('Matches Played per season', () => {
  it('Matches Played in Every Season', () => {
    const matches= [
      {season: 2013},
      {season: 2013},
      {season: 2013},
      {season: 2009},
      {season: 2009},
      {season: 2011},
      {season: 2011},
      {season: 2011},
    ];
    const expectedOutput = {
      'year': ['2009', '2011', '2013'],
      'Matches': [2, 3, 3],
    };
    expect(matchesPerYear(matches)).toEqual(expectedOutput);
  });
  it('Matches Played if there is no data in dataset', () => {
    const dataSet = [];
    const expectedOutput = {'Matches': [],
      'year': []};
    expect(matchesPerYear(dataSet)).toEqual(expectedOutput);
  });
});
// return Matchesperyear;

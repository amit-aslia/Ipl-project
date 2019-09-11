const matchesWonPerYear = require('../ipl/matchesWonByTeam');

describe('Matches Played per season', () => {
  it('Matches Played in Every Season', () => {
    const dataSet= [
      {winner: 'Kolkata Night Riders', season: '2008'},
      {winner: 'Kolkata Night Riders', season: '2008'},
      {winner: 'Chennai Super Kings', season: '2008'},
      {winner: 'Chennai Super Kings', season: '2008'},
      {winner: 'Royal Challenger Bangalore', season: '2009'},
      {winner: 'Royal Challenger Bangalore', season: '2009'},
      {winner: 'Sunrisers Hyderabad', season: '2010'},
      {winner: 'Sunrisers Hyderabad', season: '2010'},
    ];
    const expectedOutput = {
      'Team': [
        'Kolkata Night Riders',

        'Chennai Super Kings',
        'Royal Challenger Bangalore',
        'Sunrisers Hyderabad',
      ],
      'valuePerYear': [
        {
          '2008': 2,
          '2009': 0,
          '2010': 0,
        },
        {
          '2008': 2,
          '2009': 0,
          '2010': 0,
        },
        {
          '2008': 0,
          '2009': 2,
          '2010': 0,
        },
        {
          '2008': 0,
          '2009': 0,
          '2010': 2,
        }],

    };
    expect(matchesWonPerYear(dataSet)).toEqual(expectedOutput);
  });
  it('Matches Played if there is no data in dataset', () => {
    const dataSet = [];
    const expectedOutput = {'Team': [],
      'valuePerYear': [],
    };

    expect(matchesWonPerYear(dataSet)).toEqual(expectedOutput);
  });
});

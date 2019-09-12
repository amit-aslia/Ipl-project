/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function matchesWonPerYear(matches) {
  const years = matches.reduce((acc, year) => {
    acc[year.season] = (acc[year.season] || 0);
    return acc;
  }, {});

  const team = matches.reduce((acc, Team) => {
    acc[Team.winner] = (acc[Team.winner] || 0);
    return acc;
  }, []);
  delete team[''];
  console.log(team);
  const teams = Object.keys(team).map(function(key) {
    return key;
  });


  // console.log(teams)
  const matchesWonPerYear = matches.filter((checkWinner) => {
    if (checkWinner.winner != ' ') {
      return checkWinner;
    }
  }).reduce((acc, match) => {
    acc[match.winner] = (acc[match.winner] || Object.assign({}, years));
    acc[match.winner][match.season] = (acc[match.winner][match.season] || 0) + 1;
    return acc;
  }, {});
  delete matchesWonPerYear[''];
  // console.log(matchesWonPerYear)
  const teamStat = {'Team': teams, 'valuePerYear': Object.values(matchesWonPerYear)};
  // console.log(teamStat)
  return teamStat;

  // console.log(matchesWonPerYear)
}
module.exports=matchesWonPerYear;

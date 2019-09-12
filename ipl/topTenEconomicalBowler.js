/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function topTenEconomicalBowler(matches, deliveries) {
  const idOf2015Matches = matches.filter((checkForYear) => {
    if (checkForYear.season == '2015') {
      return true;
    }
  }).map((checkId) => {
    return checkId.id;
  });
  // console.log(idOf2015Matches)
  const detailsOf2015Matches = deliveries.filter((check) => {
    if (idOf2015Matches.includes(check.match_id)) {
      return true;
    }
  });
  // console.log(detailsOf2015Matches);
  const noOfBowls = detailsOf2015Matches.reduce((acc, currentBowl) => {
    if (currentBowl.wide_runs != '0' || currentBowl.noball_runs != '0') {
      return acc;
    } else {
      acc[currentBowl.bowler] = (acc[currentBowl.bowler] || 0) + 1;
      return acc;
    }
  }, {});
    // console.log(noOfBowls)

  const noOfRuns = detailsOf2015Matches.reduce((acc, currentRun) => {
    acc[currentRun.bowler] = (acc[currentRun.bowler] || 0) + Number(currentRun.total_runs) - Number(currentRun.bye_runs) - Number(currentRun.legbye_runs);
    return acc;
  }, {});
    // console.log(noOfRuns)
  const totalBallsByBowler = Object.values(noOfBowls);
  // console.log(totalBallsByBowler)
  const bowlerName = Object.keys(noOfBowls);

  // console.log(bowlerName);
  const totalRunsGivenByBowler = Object.values(noOfRuns);
  // console.log(totalRunsGivenByBowler.length)
  economy = totalBallsByBowler.map(function(bowls, index) {
    return {'name': bowlerName[index], 'economy': (totalRunsGivenByBowler[index] * 6) / bowls};
  });
  // console.log(economy)

  const sortedEconomyRate = economy.sort(function(a, b) {
    return a.economy - b.economy;
  });
  // console.log(sortedEconomyRate)
  const topTenEconomicalBowlerArray = sortedEconomyRate.slice(0, 10);
  // console.log(topTenEconomicalBowler)
  const topTenEconomicalBowlerObject = topTenEconomicalBowlerArray.map((item) => ({[item.name]: item.economy}));
  const topTenEconomicalBowler = Object.assign({}, ...topTenEconomicalBowlerObject);
  // console.log(topTenEconomicalBowler)
  const topTenEconomicalBowlerStat = {'nameofBowlers': Object.keys(topTenEconomicalBowler), 'economy': Object.values(topTenEconomicalBowler)};
  return topTenEconomicalBowlerStat;
}

module.exports=topTenEconomicalBowler;


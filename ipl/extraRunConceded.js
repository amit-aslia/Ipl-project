/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function extraRunConceded(matches, deliveries) {
  const idOf2016Matches=matches.filter((checkForYear)=>{
    if (checkForYear.season=='2016') {
      return checkForYear;
    }
  }).map((checkId)=> {
    return checkId.id;
  });
  // console.log(idOf2016Matches)
  const detailsOf2016Matches=deliveries.filter((check)=> {
    if (idOf2016Matches.includes(check.match_id)) {
      return check;
    }
  });
  // console.log(detailsOf2016Matches);
  const extraRunsPerTeam=detailsOf2016Matches.reduce((acc, cv)=> {
    acc[cv.bowling_team]=(acc[cv.bowling_team] || 0)+Number(cv.extra_runs);
    return acc;
  }, {});
  const extraRunStat={'TeamsOf2016Season': Object.keys(extraRunsPerTeam), 'valuePerYear': Object.values(extraRunsPerTeam)};
  // console.log(extraRunStat);
  return extraRunStat;
}

module.exports=extraRunConceded;


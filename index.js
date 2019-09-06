//**************Third Function******************** */
function extraRunConceded() {
    let idOf2016Matches=matches.filter((checkForYear)=>{
        if(checkForYear.season=='2016')
        {
            return checkForYear;
        }
    }).map((checkId)=>
    {
        return checkId.id;
    })
    //console.log(idOf2016Matches)
    let detailsOf2016Matches=deliveries.filter((check)=>
    {
        if(idOf2016Matches.includes(check.match_id))
        return check;
    })
    //console.log(detailsOf2016Matches);
    let extraRunsPerTeam=detailsOf2016Matches.reduce((acc,cv)=>
    {
        acc[cv.bowling_team]=(acc[cv.bowling_team] || 0)+Number(cv.extra_runs);
        return acc;

    },{})
    delete matchesWonPerYear['']; 
    //console.log(matchesWonPerYear)
    let teamStat={"Team":teams,"valuePerYear":Object.values(matchesWonPerYear)};
   // console.log(teamStat)
    return teamStat;

    //console.log(matchesWonPerYear)
}








//Function Calling
matchesPerYear()
let teamStat= (matchesWonPerYear());
// let extraRunStat =extraRunConceded();





















// ***********************************************************************************
//let data={matchesPerYears};
// let data={matchesPerYears,teamStat,extraRunStat};
 let data={matchesPerYears,teamStat};
//let data={matchesPerYears};

(async () => {
    await writeJSONFile('public/data.json', data);
})();



    let extraRunStat={"TeamsOf2016Season":Object.keys(extraRunsPerTeam),"valuePerYear":Object.values(extraRunsPerTeam)};
    //console.log(extraRunStat);
    return extraRunStat;
    
    
    
    


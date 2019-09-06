const csvtoJSON=require("csvtojson")
const writeJSONFile=require('write-json-file')
csvtoJSON().fromFile("matches.csv").then((jsonArrayObj)=>
{
    (async () => {
        await writeJSONFile('matches-JSON-File.json', jsonArrayObj);
    })();
})
csvtoJSON().fromFile("deliveries.csv").then((jsonArrayObj)=>
{
    (async () => {
        await writeJSONFile('deliveries-JSON-File.json', jsonArrayObj);
    })();
})
const matches=require('./matches-JSON-File.json')
const deliveries=require('./deliveries-JSON-File.json')
// ****************First Function******************************
function matchesPerYear()  // Function matchesPerYear 
{
    let matchesPerYear=matches.reduce((accumulator,year)=>
    {
        if(accumulator[year.season])
        {
            accumulator[year.season]++;
        }
        else
        {
            accumulator[year.season]=1;
        }
    return accumulator;
    },{});
   matchesPerYears={"year":Object.keys(matchesPerYear),"Matches":Object.values(matchesPerYear)};
   return matchesPerYears;
}
// ********************Second Function*******************************
function matchesWonPerYear()
{
    let years=matches.reduce((acc,year)=>
    {
       acc[year.season]=(acc[year.season] || 0); 
       return acc;
    },{})
    
    let team=matches.reduce((acc,Team)=>
    {
        acc[Team.winner]=(acc[Team.winner] || 0)
        return acc;
    },[])
    delete team[''];
    var teams = Object.keys(team).map(function(key) {
        return key;
      });
      
    
    //console.log(teams)
    var matchesWonPerYear=matches.filter((checkWinner)=>
    {
        if(checkWinner.winner!=' ')
        {
            return checkWinner;
        }
    }).reduce((acc,match)=>
    {
        acc[match.winner]=(acc[match.winner] || Object.assign({},years));
        acc[match.winner][match.season]=(acc[match.winner][match.season] || 0)+1;
        return acc;
    },{})
    delete matchesWonPerYear['']; 
    //console.log(matchesWonPerYear)
    let teamStat={"Team":teams,"valuePerYear":Object.values(matchesWonPerYear)};
   // console.log(teamStat)
    return teamStat;

    //console.log(matchesWonPerYear)

    
}


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
    let extraRunStat={"TeamsOf2016Season":Object.keys(extraRunsPerTeam),"valuePerYear":Object.values(extraRunsPerTeam)};
    //console.log(extraRunStat);
    return extraRunStat;
    
    
    }
    






//Function Calling
matchesPerYear()
let teamStat= (matchesWonPerYear());
let extraRunStat =extraRunConceded();




// ***********************************************************************************

 let data={matchesPerYears,teamStat,extraRunStat};

(async () => {
    await writeJSONFile('public/data.json', data);
})();
































    
    
    


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








//Function Calling
matchesPerYear()
// let teamStat= (matchesWonPerYear());
// let extraRunStat =extraRunConceded();





















// ***********************************************************************************
let data={matchesPerYears};
// let data={matchesPerYears,teamStat,extraRunStat};
//let data={matchesPerYears};

(async () => {
    await writeJSONFile('public/data.json', data);
})();



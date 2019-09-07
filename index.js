const csvtoJSON = require("csvtojson")
const writeJSONFile = require('write-json-file')
csvtoJSON().fromFile("matches.csv").then((jsonArrayObj) => {
    (async () => {
        await writeJSONFile('matches-JSON-File.json', jsonArrayObj);
    })();
})
csvtoJSON().fromFile("deliveries.csv").then((jsonArrayObj) => {
    (async () => {
        await writeJSONFile('deliveries-JSON-File.json', jsonArrayObj);
    })();
})

const matches = require('./matches-JSON-File.json')
const deliveries = require('./deliveries-JSON-File.json')
// *************** Visualization-1******************************
function matchesPerYear()  // Function matchesPerYear 
{
    let matchesPerYear = matches.reduce((accumulator, year) => {
        accumulator[year.season] = (accumulator[year.season] || 0) + 1;
        return accumulator;
    }, {});
    matchesPerYears = { "year": Object.keys(matchesPerYear), "Matches": Object.values(matchesPerYear) };
    return matchesPerYears;
}
// ******************** Visualization-2*******************************
function matchesWonPerYear() {
    let years = matches.reduce((acc, year) => {
        acc[year.season] = (acc[year.season] || 0);
        return acc;
    }, {})

    let team = matches.reduce((acc, Team) => {
        acc[Team.winner] = (acc[Team.winner] || 0)
        return acc;
    }, [])
    delete team[''];
    var teams = Object.keys(team).map(function (key) {
        return key;
    });


    //console.log(teams)
    var matchesWonPerYear = matches.filter((checkWinner) => {
        if (checkWinner.winner != ' ') {
            return checkWinner;
        }
    }).reduce((acc, match) => {
        acc[match.winner] = (acc[match.winner] || Object.assign({}, years));
        acc[match.winner][match.season] = (acc[match.winner][match.season] || 0) + 1;
        return acc;
    }, {})
    delete matchesWonPerYear[''];
    //console.log(matchesWonPerYear)
    let teamStat = { "Team": teams, "valuePerYear": Object.values(matchesWonPerYear) };
    // console.log(teamStat)
    return teamStat;

    //console.log(matchesWonPerYear)


}


//************** Visualization-3******************** */
function extraRunConceded() {
    let idOf2016Matches = matches.filter((checkForYear) => {
        if (checkForYear.season == '2016') {
            return checkForYear;
        }
    }).map((checkId) => {
        return checkId.id;
    })
    //console.log(idOf2016Matches)
    let detailsOf2016Matches = deliveries.filter((check) => {
        if (idOf2016Matches.includes(check.match_id))
            return check;
    })
    //console.log(detailsOf2016Matches);
    let extraRunsPerTeam = detailsOf2016Matches.reduce((acc, cv) => {
        acc[cv.bowling_team] = (acc[cv.bowling_team] || 0) + Number(cv.extra_runs);
        return acc;

    }, {});
    //console.log(extraRunsPerTeam)
    let extraRunStat = { "TeamsOf2016Season": Object.keys(extraRunsPerTeam), "valuePerYear": Object.values(extraRunsPerTeam) };
    // console.log(extraRunStat);
    return extraRunStat;
    
    
    }
    

/******************Visualization-4******************************************** */
function topTenEconomicalBowler() {
    let idOf2015Matches = matches.filter((checkForYear) => {
        if (checkForYear.season == '2015') {
            return checkForYear;
        }
    }).map((checkId) => {
        return checkId.id;
    })
    //console.log(idOf2015Matches)
    let detailsOf2015Matches = deliveries.filter((check) => {
        if (idOf2015Matches.includes(check.match_id))
            return check;
    })
    //console.log(detailsOf2015Matches);
    let noOfBowls = detailsOf2015Matches.reduce((acc, currentBowl) => {

        if (currentBowl.wide_runs != '0' || currentBowl.noball_runs != '0') {
            return acc;
        }
        else {
            acc[currentBowl.bowler] = (acc[currentBowl.bowler] || 0) + 1;
            return acc;
        }
    }, {});
    // console.log(noOfBowls)

    let noOfRuns = detailsOf2015Matches.reduce((acc, currentRun) => {
        acc[currentRun.bowler] = (acc[currentRun.bowler] || 0) + Number(currentRun.total_runs) - Number(currentRun.bye_runs) - Number(currentRun.legbye_runs);
        return acc;
    }, {});
    //console.log(noOfRuns)
    var totalBallsByBowler = Object.values(noOfBowls)
     //console.log(totalBallsByBowler)
    var bowlerName = Object.keys(noOfBowls);
    
    //console.log(bowlerName);
    var totalRunsGivenByBowler = Object.values(noOfRuns)
    //console.log(totalRunsGivenByBowler.length)
    economy = totalBallsByBowler.map(function (bowls, index) {
        return { "name": bowlerName[index], "economy": (totalRunsGivenByBowler[index] * 6) / bowls };
    });
    //console.log(economy)

    let sortedEconomyRate = economy.sort(function (a, b) {
        return a.economy - b.economy;
    })
    //console.log(sortedEconomyRate)
    let topTenEconomicalBowlerArray = sortedEconomyRate.slice(0, 10);
    //console.log(topTenEconomicalBowler)
    var topTenEconomicalBowlerObject = topTenEconomicalBowlerArray.map(item => ({ [item.name]: item.economy }));
    var topTenEconomicalBowler = Object.assign({}, ...topTenEconomicalBowlerObject);
    let topTenEconomicalBowlerStat = { "nameofBowlers": Object.keys(topTenEconomicalBowler), "economy": Object.values(topTenEconomicalBowler) };
    return topTenEconomicalBowlerStat;

}


//Function Calling
matchesPerYear()
let teamStat= (matchesWonPerYear());
let extraRunStat =extraRunConceded();
let topTenEconomicalBowlerStat=topTenEconomicalBowler();




// ***********************************************************************************


 let data={matchesPerYears,teamStat,extraRunStat,topTenEconomicalBowlerStat};

(async () => {
    await writeJSONFile('public/data.json', data);
})();





































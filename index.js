/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const csvtoJSON = require('csvtojson');
const writeJSONFile = require('write-json-file');
csvtoJSON()
    .fromFile('matches.csv')
    .then((matches) => {
      csvtoJSON()
          .fromFile('deliveries.csv')
          .then((deliveries) => {
            const matchesPerYear=require('./ipl/matchesPerYear');
            const matchesWonPerYear=require('./ipl/matchesWonByTeam');
            const extraRunConceded=require('./ipl/extraRunConceded');
            const topTenEconomicalBowler=require('./ipl/topTenEconomicalBowler');


            // Function Calling
            matchesPerYear(matches);
            const teamStat = matchesWonPerYear(matches);
            const extraRunStat = extraRunConceded(matches, deliveries);
            const topTenEconomicalBowlerStat = topTenEconomicalBowler(matches, deliveries);

            // ***********************************************************************************

            const data = {matchesPerYears, teamStat, extraRunStat, topTenEconomicalBowlerStat};

            (async () => {
              await writeJSONFile('public/data.json', data);
            })();
          });
    });



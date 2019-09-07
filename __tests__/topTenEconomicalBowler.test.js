let topTenEconomicalBowler = require("../ipl/topTenEconomicalBowler");

describe("Top 10 economical bowlers in 2015", () => {
  it("best economical bowlers in 2015", () => {
    const matches = [
      { id: 1, season: "2015" },
      { id: 2, season: "2016" },
      { id: 3, season: "2008" },
      { id: 4, season: "2015" },
      { id: 5, season: "2009" },
      { id: 6, season: "2016" },
      { id: 7, season: "2015" },
      { id: 8, season: "2015" }
    ];
    const deliveries = [
      { match_id: 1, bowler: "Bumrah", ball: 1,bye_runs:0,legbye_runs:1,total_runs:2,noball_runs: 0,wide_runs: 0 },
      { match_id: 4, bowler: "Zaheer", ball: 1,bye_runs:0,legbye_runs:0,total_runs:1,noball_runs:0,wide_runs: 0},
      { match_id: 7, bowler: "Steyn", ball: 1,bye_runs:1,legbye_runs:1,total_runs:2,noball_runs: 0,wide_runs: 0 },
      { match_id: 8, bowler: "Grath", ball: 1,bye_runs:0,legbye_runs:0,total_runs:2,noball_runs: 0,wide_runs: 0 },
     
    ];
    const expectedOutput = {
        "nameofBowlers":['Steyn','Bumrah','Zaheer','Grath'],
        "economy":[0,6,6,12]
    };
    expect(topTenEconomicalBowler(matches, deliveries)).toEqual(expectedOutput);
  });
  it("deliveries containing all year but only checking economies in year 2015", () => {
    const matches = [
      { id: 1, season: "2015" },
      { id: 2, season: "2016" },
      { id: 3, season: "2008" },
      { id: 4, season: "2015" },
      { id: 5, season: "2009" },
      { id: 6, season: "2016" },
      { id: 7, season: "2015" },
      { id: 8, season: "2015" }
    ];
    const deliveries = [
      { match_id: 1, bowler: "Bumrah", ball: 1,bye_runs:0,legbye_runs:1,total_runs:2,noball_runs: 0,wide_runs: 0 },
      { match_id: 10, bowler: "Bumrah", ball: 1,bye_runs:0,legbye_runs:1,total_runs:2,noball_runs: 0,wide_runs: 0 },
      { match_id: 11, bowler: "Bumrah", ball: 1,bye_runs:0,legbye_runs:1,total_runs:2,noball_runs: 0,wide_runs: 0 },
      { match_id: 2, bowler: "Bumrah", ball: 1,bye_runs:0,legbye_runs:1,total_runs:2 ,noball_runs: 0,wide_runs: 0},
      { match_id: 4, bowler: "Zaheer", ball: 1,bye_runs:0,legbye_runs:0,total_runs:1 ,noball_runs: 0,wide_runs: 0},
      { match_id: 7, bowler: "Steyn", ball: 1,bye_runs:1,legbye_runs:1,total_runs:2 ,noball_runs: 0,wide_runs: 0},
      { match_id: 8, bowler: "Grath", ball: 1,bye_runs:0,legbye_runs:0,total_runs:2,noball_runs: 0,wide_runs: 0 },
     
    ];
    const expectedOutput = {
        nameofBowlers:['Steyn','Bumrah','Zaheer','Grath'],
        economy:[0,6,6,12]
    };
    expect(topTenEconomicalBowler(matches, deliveries)).toEqual(expectedOutput);
  });

});


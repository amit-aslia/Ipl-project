/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function fetchAndVisualizeData() {
  fetch('./data.json')
      .then((r) => r.json())
      .then((data) => {
        visualizeData(data);
      });
}

function visualizeData(data) {
  const teams=data.teamStat.Team;
  const score=data.teamStat.valuePerYear;
  const yearResult=teams.map((currentValue, index)=>{
    const toCreateDataOfEachTeam={};
    toCreateDataOfEachTeam['name']=currentValue;
    toCreateDataOfEachTeam['data']=Object.values(score[index]); 
    return toCreateDataOfEachTeam;
  });



  Highcharts.chart('container1', {
    chart: {
      inverted: false,
      polar: false,
    },

    title: {
      text: 'Number of Matches Played Per Season',
    },

    subtitle: {
      text: 'Visualizing IPL Data Set',
    },

    xAxis: {
      categories: data.matchesPerYears.year,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Matches Played Per season',
      },
    },

    series: [
      {
        type: 'column',
        colorByPoint: true,
        data: data.matchesPerYears.Matches,
        showInLegend: false,
      },
    ],
  });

  Highcharts.chart('container2', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'IPL Winning Statistics',
    },
    subtitle: {
      text: 'IPL Dataset Visualization',
    },
    xAxis: {
      categories: data.matchesPerYears.year,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Matches Won Per Year',
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true,
    },
    plotOptions: {
      column: {
        stacking: 'percent',
      },
    },

    series: yearResult,
  });

  Highcharts.chart('container3', {
    chart: {
      inverted: false,
      polar: false,
    },

    title: {
      text: 'Extra Run conceded by a Team',
    },

    subtitle: {
      text: 'Visualizing IPL Data Set',
    },

    xAxis: {
      categories: data.extraRunStat.TeamsOf2016Season,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Extra Run Conceded per Team',
      },
    },

    series: [
      {
        type: 'column',
        colorByPoint: true,
        data: data.extraRunStat.valuePerYear,
        showInLegend: false,
      },
    ],
  });
  Highcharts.chart('container4', {
    chart: {
      inverted: false,
      polar: false,
    },

    title: {
      text: 'Top ten Economical Bowlers',
    },

    subtitle: {
      text: 'Visualizing IPL Data Set',
    },

    xAxis: {
      categories: data.topTenEconomicalBowlerStat.nameofBowlers,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Economy',
      },
    },

    series: [
      {
        type: 'column',
        colorByPoint: true,
        data: data.topTenEconomicalBowlerStat.economy,
        showInLegend: false,
      },
    ],
  });
}

fetchAndVisualizeData();

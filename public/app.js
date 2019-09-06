function fetchAndVisualizeData() {
    fetch('./data.json')
    .then(r => r.json())
    .then(data => {
        visualizeData(data);
    })
}

function visualizeData(data) {
Highcharts.chart('container1', {
    chart:{
        inverted:false,
        polar:false
    },

    title: {
        text: 'Number of Matches Played Per Season'
    },

    subtitle: {
        text: 'Visualizing IPL Data Set'
    },

    xAxis: {
        categories: data.matchesPerYears.year
       
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches Played Per season'
        }
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        data: data.matchesPerYears.Matches,
        showInLegend: false
    }]

});


Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'IPL Winning Statistics'
    },
    subtitle: {
        text: 'IPL Dataset Visualization'
    },
    xAxis: {
        categories: data.matchesPerYears.year,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches Won Per Year'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },

    
    series: [
        {
        name: data.teamStat.Team[0],
        data: Object.values(data.teamStat.valuePerYear[0])
        },
    {
        name: data.teamStat.Team[1],
        data: Object.values(data.teamStat.valuePerYear[1])

    },
    {
        name: data.teamStat.Team[2],
        data: Object.values(data.teamStat.valuePerYear[2])

    },
    {
        name: data.teamStat.Team[3],
        data: Object.values(data.teamStat.valuePerYear[3])

    },
    {
        name: data.teamStat.Team[4],
        data: Object.values(data.teamStat.valuePerYear[4])

    },
    {
        name: data.teamStat.Team[5],
        data: Object.values(data.teamStat.valuePerYear[5])

    },
    {
        name: data.teamStat.Team[6],
        data: Object.values(data.teamStat.valuePerYear[6])

    },
    {
        name: data.teamStat.Team[7],
        data: Object.values(data.teamStat.valuePerYear[7])

    },
    {
        name: data.teamStat.Team[8],
        data: Object.values(data.teamStat.valuePerYear[8])

    },
    {
        name: data.teamStat.Team[9],
        data: Object.values(data.teamStat.valuePerYear[9])

    },
    {
        name: data.teamStat.Team[10],
        data: Object.values(data.teamStat.valuePerYear[10])

    },
    {
        name: data.teamStat.Team[11],
        data: Object.values(data.teamStat.valuePerYear[11])

    },
    {
        name: data.teamStat.Team[12],
        data: Object.values(data.teamStat.valuePerYear[12])

    },
    {
        name: data.teamStat.Team[13],
        data: Object.values(data.teamStat.valuePerYear[13])

    }

]
});





}

fetchAndVisualizeData();



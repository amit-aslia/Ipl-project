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







}

fetchAndVisualizeData();



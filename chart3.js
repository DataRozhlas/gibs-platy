Highcharts.chart('graf3', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Jak se zvyšovaly platy uniformovaných příslušníků'
    },

    subtitle: {
        text: 'Srovnání celostátních policejních útvarů a Generální inspekce bezpečnostních sborů'
    },

    yAxis: {
        title: {
            text: 'průměrný měsíční příjem'
        }
    },
    xAxis: {
        categories: ["2013", "2014", "2015", "2016", "2017", "2018"],
        crosshair: true
    },
    tooltip: {
        shared: true
    },

    series: [{
        name: 'Generální inspekce bezpečnostních sborů',
        data: [45804,47543,47430,49220,62198,62126],
        color: "#d52834" 
    },
    {
        name: 'Letecká služba',
        data: [54156,54503,56294,58407,63581,64138]
    },
    {
        name: 'Ochranná služba Policie ČR',
        data: [32912,33290,35158,37662,41557,44444]
    },
    {
        name: 'Útvar rychlého nasazení',
        data: [44190,44590,46304,49903,53445,57308]
    },
    {
        name: 'Útvar rychlého nasazení',
        data: [44190,44590,46304,49903,53445,57308]
    },
    {
        name: 'Útvar pro odhalování organizovaného zločinu SKPV',
        data: [45640,44498,46716]
    },
    {
        name: 'Útvar odhalování korupce a finanční kriminality SKPV',
        data: [45737,45957,48198]
    },
    {
        name: 'Národní centrála proti organizovanémuzločinu SKPV',
        data: [null,null,null,52326,56950,61146]
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
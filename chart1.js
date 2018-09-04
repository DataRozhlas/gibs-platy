Highcharts.setOptions({
    lang: {
        numericSymbols: [' tis.', ' mil.']
    },
    colors: ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#fdbf6f','#e31a1c','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928']
});

Highcharts.chart('graf1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Průměrné měsíční příjmy uniformovaných příslušníků od ledna do července 2018'
    },
    subtitle: {
        text: 'Srovnání celostátních policejních útvarů a Generální inspekce bezpečnostních sborů'
    },
    xAxis: {
        categories: ["Pyrotechnická služba",
        "Letecká služba",
        "Generální inspekce bezpečnostních sborů",
        "Národní centrála proti organizovanému zločinu SKPV",
        "Národní protidrogová centrála SKPV",
        "Útvar rychlého nasazení",
        "Úřad dokumentace a vyšetřování zločinů komunismu SKPV",
        "Útvar pro ochranu prezidenta ČR",
        "Útvar policejního vzdělávání a služební přípravy",
        "Kriminalistický ústav Praha",
        "Útvar zvláštních činností",
        "Ochranná služba Policie ČR",
        "Ředitelství služby cizinecké policie"],
        crosshair: true
    },
    legend: {
        enabled:false
    },
    credits: {
        enabled: true,
        text: 'Zdroj: Policejní prezidium České republiky a Generální inspekce bezpečnostních sborů',
        href: 'http://www.policie.cz/clanek/policejni-prezidium-ceske-republiky-600334.aspx'
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Kč'
        }
    },
    tooltip: {
        followPointer: true,
        formatter: function () {
            return '<b>' + this.x + '</b><br>' + 'Průměrný služební příjem příslušníků: <b>' + Highcharts.numberFormat(this.y,0) + ' Kč</b><br>' + 'Počet příslušníků: <b>' + this.point.id + '</b>';
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: "{y:,.0f} Kč"
            }
        }
    },
    series: [{
        visible: true,
        name: '',
        data: [{y:64924, id: 84},{y:64138, id: 51},{y:62126, color:"#d52834", id: 279},{y:61146,id:824},{y:58245,id:198},{y:57308,id:118},{y:56363,id:16},{y:52873,id:231},{y:51805,id:282},{y:51797,id:153},{y:49264,id:578},{y:44444,id:1189},{y:41548,id:983}]

    }]
});
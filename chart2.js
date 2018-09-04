Highcharts.chart('graf2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Průměrné měsíční příjmy uniformovaných příslušníků v roce 2017'
    },
    subtitle: {
        text: 'Srovnání celostátních policejních útvarů a Generální inspekce bezpečnostních sborů'
    },
    xAxis: {
        categories: ["Letecká služba","Generální inspekce bezpečnostních sborů","Národní centrála proti organizovanému zločinu SKPV","Pyrotechnická služba","Národní protidrogová centrála SKPV","Útvar rychlého nasazení","Útvar pro ochranu prezidenta ČR","Útvar policejního vzdělávání a služební přípravy","Úřad dokumentace a vyšetřování zločinů komunismu SKPV","Kriminalistický ústav Praha","Útvar zvláštních činností","Ochranná služba Policie ČR","Ředitelství služby cizinecké policie"],
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
        data: [{"name":"Letecká služba","y":63581,"id":46},
{"name":"Generální inspekce bezpečnostních sborů","y":62198,"id":252,"color":"#d52834"},
{"name":"Národní centrála proti organizovanému zločinu SKPV","y":56950,"id":800},
{"name":"Pyrotechnická služba","y":55807,"id":84},
{"name":"Národní protidrogová centrála SKPV","y":55122,"id":189},
{"name":"Útvar rychlého nasazení","y":53445,"id":118},
{"name":"Útvar pro ochranu prezidenta ČR","y":49465,"id":212},
{"name":"Útvar policejního vzdělávání a služební přípravy","y":48752,"id":261},
{"name":"Úřad dokumentace a vyšetřování zločinů komunismu SKPV","y":47353,"id":19},
{"name":"Kriminalistický ústav Praha","y":47284,"id":144},
{"name":"Útvar zvláštních činností","y":46299,"id":584},
{"name":"Ochranná služba Policie ČR","y":41557,"id":1177},
{"name":"Ředitelství služby cizinecké policie","y":39019,"id":932}]

    }]
});
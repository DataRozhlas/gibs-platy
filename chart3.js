Highcharts.chart('graf3', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Jak se zvyšovaly platy uniformovaných příslušníků'
    },

    subtitle: {
        text: 'Další útvary můžete přidat tak, že kliknete na jejich název v legendě grafu'
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
        shared: true,
        valueSuffix: " Kč"
    },
    credits: {
        enabled: true,
        text: 'Zdroj: Policejní prezidium České republiky a Generální inspekce bezpečnostních sborů',
        href: 'http://www.policie.cz/clanek/policejni-prezidium-ceske-republiky-600334.aspx'
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
        data: [44190,44590,46304,49903,53445,57308],
        visible: false
    },
        {
        name: 'Útvar pro odhalování organizovaného zločinu SKPV',
        data: [45640,44498,46716],
        visible: false
    },
    {
        name: 'Útvar odhalování korupce a finanční kriminality SKPV',
        data: [45737,45957,48198],
        visible: false
    },
    {
        name: 'Národní centrála proti organizovanémuzločinu SKPV',
        data: [null,null,null,52326,56950,61146]
    },
    {
        name: 'Kriminalistický ústav Praha',
        data: [38053,39603,41534,44119,47284,51797],
        visible: false
    },
    {
        name: 'Pyrotechnická služba',
        data: [42980,45852,51518,52706,55807,64924],
        visible: false
    },
    {
        name: 'Národní protidrogová centrála SKPV',
        data: [43412,44410,46045,49174,55122,58245],
        visible: false
    },
    {
        name: 'Útvar zvláštních činností',
        data: [38827,40143,41648,43121,46299,49264],
        visible: false
    },
    {
        name: 'Ředitelství služby cizinecké policie',
        data: [31995,32440,34293,36416,39019,41548],
        visible: false
    },
    {
        name: 'Útvar pro ochranu prezidenta ČR',
        data: [40108,40490,41901,46412,49465,52873],
        visible: false
    },
    {
        name: 'Úřad dokumentace a vyšetřování zločinů komunismu SKPV',
        data: [39834,40686,41839,45744,47353,56363],
        visible: false
    },
    {
        name: 'Útvar policejního vzdělávání a služební přípravy',
        data: [null,null,52116,46084,48752,51805],
        visible: false
    }

    ]
});
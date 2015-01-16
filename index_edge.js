/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://code.jquery.com/jquery-2.1.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'oinkbeest-loop',
                            display: 'none',
                            volume: '1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['914', '610', '320px', '45px', 'auto', 'auto'],
                            loop: 'loop',
                            source: [aud+"oinkbeest-loop.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'oinkbeest-intro',
                            volume: '0.8',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-8237px', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"oinkbeest-intro.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'bg',
                            type: 'rect',
                            rect: ['-2px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(14,82,89,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sterren',
                            symbolName: 'Sterren',
                            type: 'rect',
                            rect: ['195px', '38px', '1891', '1004', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['1.20523','1.0757']]
                        },
                        {
                            id: 'Instructies2',
                            symbolName: 'Instructies',
                            type: 'rect',
                            rect: ['1394px', '674px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'wolk3',
                            symbolName: 'Wolk3',
                            type: 'rect',
                            rect: ['-2px', '453', '1143', '627', 'auto', 'auto']
                        },
                        {
                            id: 'wolk1',
                            symbolName: 'Wolk1',
                            type: 'rect',
                            rect: ['-2px', '617', '1920', '463', 'auto', 'auto']
                        },
                        {
                            id: 'ijsberen',
                            symbolName: 'IJsberen',
                            display: 'none',
                            type: 'rect',
                            rect: ['750px', '364', '426', '229', 'auto', 'auto']
                        },
                        {
                            id: 'vuurwerk',
                            symbolName: 'Vuurwerk',
                            type: 'rect',
                            rect: ['-2px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'bergen',
                            symbolName: 'Bergen',
                            type: 'rect',
                            rect: ['-2px', '355', '1920', '725', 'auto', 'auto']
                        },
                        {
                            id: 'golf2',
                            symbolName: 'Golf2',
                            type: 'rect',
                            rect: ['-2px', '862', '1920', '218', 'auto', 'auto']
                        },
                        {
                            id: 'pinguins',
                            symbolName: 'Pinguins',
                            type: 'rect',
                            rect: ['-474px', '700px', '338', '330', 'auto', 'auto']
                        },
                        {
                            id: 'vis1',
                            symbolName: 'Vis1',
                            display: 'none',
                            type: 'rect',
                            rect: ['-2px', '878px', '218', '194', 'auto', 'auto']
                        },
                        {
                            id: 'golf1',
                            symbolName: 'Golf1',
                            type: 'rect',
                            rect: ['-4px', '953px', '1920', '131', 'auto', 'auto']
                        },
                        {
                            id: 'verstuur2',
                            display: 'block',
                            type: 'image',
                            rect: ['1456px', '-180px', '273px', '175px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"verstuur2.svg",'0px','0px']
                        },
                        {
                            id: 'boodschap',
                            symbolName: 'Boodschap',
                            display: 'none',
                            type: 'rect',
                            rect: ['-2px', '1px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'spandoek',
                            symbolName: 'Spandoek_Vogels_Main',
                            display: 'none',
                            type: 'rect',
                            rect: ['509px', '-380px', '915', '394', 'auto', 'auto'],
                            transform: [[],['-2'],[],['0.82647','0.82647']]
                        },
                        {
                            id: 'start',
                            type: 'image',
                            rect: ['826px', '402px', '362px', '182px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"start.svg",'0px','0px']
                        },
                        {
                            id: 'welkom',
                            type: 'image',
                            rect: ['704px', '82px', '562px', '237px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"welkom.svg",'0px','0px']
                        },
                        {
                            id: 'Credits',
                            symbolName: 'Credits',
                            type: 'rect',
                            rect: ['456px', '1080px', '906', '524', 'auto', 'auto']
                        },
                        {
                            id: 'Fade',
                            display: 'none',
                            type: 'rect',
                            rect: ['-16px', '-15px', '1952px', '1107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-26px', '-18px', '164px', '152px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.4878','0.5']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 300400,
                    autoPlay: true,
                    labels: {
                        "start": 2000,
                        "boodschap": 66000
                    },
                    data: [
                        [
                            "eid1421",
                            "top",
                            0,
                            2000,
                            "easeOutQuad",
                            "${Instructies2}",
                            '674px',
                            '76px'
                        ],
                        [
                            "eid1427",
                            "top",
                            2000,
                            597,
                            "easeOutQuad",
                            "${Instructies2}",
                            '76px',
                            '-234px'
                        ],
                        [
                            "eid1067",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Fade}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1060",
                            "display",
                            1250,
                            0,
                            "easeInQuad",
                            "${start}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1120",
                            "display",
                            2597,
                            0,
                            "easeInOutQuad",
                            "${start}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1140",
                            "opacity",
                            0,
                            2000,
                            "easeInOutElastic",
                            "${sterren}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1409",
                            "left",
                            1629,
                            0,
                            "linear",
                            "${sterren}",
                            '195px',
                            '195px'
                        ],
                        [
                            "eid1203",
                            "top",
                            67000,
                            1000,
                            "easeOutQuad",
                            "${spandoek}",
                            '-406px',
                            '-380px'
                        ],
                        [
                            "eid1435",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${Credits}",
                            '1080px',
                            '874px'
                        ],
                        [
                            "eid1433",
                            "top",
                            2000,
                            597,
                            "linear",
                            "${Credits}",
                            '874px',
                            '996px'
                        ],
                        [
                            "eid1202",
                            "left",
                            67000,
                            1000,
                            "easeOutQuad",
                            "${spandoek}",
                            '532px',
                            '509px'
                        ],
                        [
                            "eid1158",
                            "rotateZ",
                            66000,
                            2000,
                            "linear",
                            "${verstuur2}",
                            '0deg',
                            '-9deg'
                        ],
                        [
                            "eid1119",
                            "top",
                            17837,
                            0,
                            "easeInOutQuad",
                            "${golf1}",
                            '953px',
                            '953px'
                        ],
                        [
                            "eid1182",
                            "location",
                            0,
                            0,
                            "easeInOutElastic",
                            "${verstuur2}",
                            [[1592.5, -92.5, 0, 0, 0, 0,0],[1592.5, -92.5, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid1139",
                            "location",
                            46000,
                            2000,
                            "easeOutQuad",
                            "${verstuur2}",
                            [[1684.5, -104.5, 0, 0, 0, 0,0],[1805.7, 32.04, 63, 90.61, 129.59, 186.38,182.79],[1718.57, 113.79, -29.01, 182.45, -24.63, 154.93,312.66],[1748.5, 157.5, 0, 0, 0, 0,380.9]]
                        ],
                        [
                            "eid1157",
                            "location",
                            66000,
                            990,
                            "linear",
                            "${verstuur2}",
                            [[1748.5, 157.5, 0, 0, 0, 0,0],[1793.97, 359.33, 74.5, 132.01, 162.92, 288.69,209.44],[1923.3, 561.21, 0, 0, 0, 0,449.21]]
                        ],
                        [
                            "eid1193",
                            "location",
                            66990,
                            1010,
                            "linear",
                            "${verstuur2}",
                            [[1923.3, 561.21, 175.7, 505.77, 0, 0,0],[1693.17, 879.5, 0, 0, 0, 0,423.35]]
                        ],
                        [
                            "eid1159",
                            "top",
                            66000,
                            1000,
                            "linear",
                            "${boodschap}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid1199",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${verstuur2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1194",
                            "opacity",
                            66990,
                            0,
                            "linear",
                            "${verstuur2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1197",
                            "opacity",
                            67760,
                            240,
                            "linear",
                            "${verstuur2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1079",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${vis1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1088",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${vis1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1206",
                            "scaleX",
                            67000,
                            1000,
                            "easeOutQuad",
                            "${spandoek}",
                            '1',
                            '0.82647'
                        ],
                        [
                            "eid1056",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Fade}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1073",
                            "display",
                            2000,
                            0,
                            "easeInQuad",
                            "${Fade}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1198",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${verstuur2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1146",
                            "display",
                            68000,
                            0,
                            "linear",
                            "${verstuur2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1125",
                            "top",
                            2000,
                            597,
                            "easeOutQuad",
                            "${welkom}",
                            '82px',
                            '-284px'
                        ],
                        [
                            "eid1058",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${welkom}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1121",
                            "display",
                            2597,
                            0,
                            "easeInOutQuad",
                            "${welkom}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1075",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${welkom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1071",
                            "opacity",
                            2000,
                            598,
                            "linear",
                            "${welkom}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1054",
                            "display",
                            60101,
                            0,
                            "easeInQuad",
                            "${oinkbeest-loop}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1258",
                            "rotateZ",
                            20871,
                            0,
                            "easeInQuad",
                            "${spandoek}",
                            '-2deg',
                            '-2deg'
                        ],
                        [
                            "eid1210",
                            "rotateZ",
                            68000,
                            0,
                            "easeOutQuad",
                            "${spandoek}",
                            '-2deg',
                            '-2deg'
                        ],
                        [
                            "eid1207",
                            "scaleY",
                            67000,
                            1000,
                            "easeOutQuad",
                            "${spandoek}",
                            '1',
                            '0.82647'
                        ],
                        [
                            "eid1127",
                            "top",
                            2000,
                            597,
                            "linear",
                            "${start}",
                            '402px',
                            '1090px'
                        ],
                        [
                            "eid1420",
                            "left",
                            0,
                            2000,
                            "easeOutQuad",
                            "${Instructies2}",
                            '1394px',
                            '1372px'
                        ],
                        [
                            "eid1426",
                            "left",
                            2000,
                            597,
                            "easeOutQuad",
                            "${Instructies2}",
                            '1372px',
                            '1908px'
                        ],
                        [
                            "eid1019",
                            "display",
                            0,
                            0,
                            "linear",
                            "${boodschap}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1055",
                            "display",
                            60101,
                            0,
                            "easeInQuad",
                            "${boodschap}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1074",
                            "display",
                            66000,
                            0,
                            "easeInQuad",
                            "${boodschap}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1092",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ijsberen}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1093",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${ijsberen}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1076",
                            "opacity",
                            1250,
                            750,
                            "linear",
                            "${start}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1070",
                            "opacity",
                            2000,
                            597,
                            "linear",
                            "${start}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${spandoek}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1144",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${spandoek}",
                            'none',
                            'block'
                        ],
                            [ "eid1080", "trigger", 2500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${vis1}', [0] ] ],
                            [ "eid1069", "trigger", 3000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${oinkbeest-intro}', [] ] ],
                            [ "eid278", "trigger", 4618.5895415932, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${pinguins}', [0] ] ],
                            [ "eid205", "trigger", 12000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ijsberen}', [0] ] ],
                            [ "eid1130", "trigger", 16000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bergen}', [] ] ],
                            [ "eid1117", "trigger", 19000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${spandoek}', [0] ] ],
                            [ "eid1021", "trigger", 51000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${oinkbeest-loop}', [] ] ],
                            [ "eid1437", "trigger", 66000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${oinkbeest-loop}', [] ] ],
                            [ "eid1438", "trigger", 66000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${oinkbeest-intro}', [] ] ],
                            [ "eid1180", "trigger", 67000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${boodschap}', [0] ] ]
                    ]
                }
            },
            "IJsbeer1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '221px', '247', 'auto', 'auto'],
                            id: 'Group2',
                            type: 'group',
                            c: [
                            {
                                rect: ['102px', '23px', '109px', '99px', 'auto', 'auto'],
                                id: 'IJsbeer1_kop-01',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/IJsbeer1_kop-01.svg', '0px', '0px']
                            },
                            {
                                rect: ['23px', '18px', '134px', '229px', 'auto', 'auto'],
                                id: 'IJsbeer1_lijf-01',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/IJsbeer1_lijf-01.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'IJsbeer1_staart-01',
                                rect: ['8px', '1px', '35px', '36px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['86.1272%', '80.23%']],
                                fill: ['rgba(0,0,0,0)', 'images/IJsbeer1_staart-01.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['4296', '2514', '221', '247', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '221px', '378px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "buig": 1043
                    },
                    data: [
                        [
                            "eid675",
                            "rotateZ",
                            1043,
                            957,
                            "easeOutCubic",
                            "${IJsbeer1_kop-01}",
                            '0deg',
                            '20deg'
                        ],
                        [
                            "eid676",
                            "top",
                            1043,
                            957,
                            "easeOutCubic",
                            "${IJsbeer1_kop-01}",
                            '23px',
                            '33px'
                        ],
                        [
                            "eid235",
                            "rotateZ",
                            0,
                            465,
                            "linear",
                            "${IJsbeer1_staart-01}",
                            '0deg',
                            '18deg'
                        ]
                    ]
                }
            },
            "IJsbeer2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['10px', '20px', '131px', '88px', 'auto', 'auto'],
                            id: 'kop',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/IJsbeer2_kop-01.svg', '0px', '0px']
                        },
                        {
                            rect: ['94px', '-7px', '146px', '213px', 'auto', 'auto'],
                            id: 'lijf',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/IJsbeer2_lijf-01.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'staart',
                            rect: ['207px', '-29px', '26px', '35px', 'auto', 'auto'],
                            transform: [[], ['14'], [], [], ['0%', '99.9999%']],
                            fill: ['rgba(0,0,0,0)', 'images/IJsbeer2_staart-01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '146px', '213px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "buig": 1000
                    },
                    data: [
                        [
                            "eid230",
                            "rotateZ",
                            0,
                            470,
                            "linear",
                            "${staart}",
                            '14deg',
                            '0deg'
                        ],
                        [
                            "eid671",
                            "top",
                            1000,
                            1000,
                            "easeOutCubic",
                            "${kop}",
                            '20px',
                            '32px'
                        ],
                        [
                            "eid672",
                            "left",
                            1000,
                            1000,
                            "easeOutCubic",
                            "${kop}",
                            '10px',
                            '11px'
                        ],
                        [
                            "eid666",
                            "rotateZ",
                            1000,
                            1000,
                            "easeOutCubic",
                            "${kop}",
                            '0deg',
                            '-17deg'
                        ]
                    ]
                }
            },
            "Pinguin1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['42px', '17px', '347px', '358px', 'auto', 'auto'],
                            id: 'Group6',
                            transform: [[], ['-5'], [], ['-1'], ['28.3036%', '85.0477%']],
                            autoOrient: false,
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'vleugel2',
                                symbolName: 'Pinguin_vleugel2',
                                rect: ['200', '51', '147', '113', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'vleugel1',
                                symbolName: 'Pinguin1_vleugel1',
                                rect: ['46', '0', '75', '141', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                id: 'lijf',
                                rect: ['0px', '31px', '221px', '327px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Pinguin1-01.svg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'snavel',
                                symbolName: 'Snavel',
                                rect: ['199px', '9px', '29', '40', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '347px', '513px']
                        }
                    }
                },
                timeline: {
                    duration: 19500,
                    autoPlay: false,
                    labels: {
                        "wiebelen": 4500,
                        "ski": 6250
                    },
                    data: [
                        [
                            "eid463",
                            "location",
                            0,
                            6250,
                            "easeOutCubic",
                            "${Group6}",
                            [[140.23, 321.47, 0, 0, 0, 0,0],[603.38, 216.81, 432.91, -23.6, 651.49, -35.51,476.31],[899.78, 228.4, 0, 0, 0, 0,773.26]]
                        ],
                        [
                            "eid471",
                            "location",
                            6250,
                            2864,
                            "linear",
                            "${Group6}",
                            [[901.79, 234.4, 0, 0, 0, 0,0],[1352.64, 102.09, 47.25, -230.32, 77.75, -378.99,489.8],[824.38, -67.5, -126.28, -193.61, -168.42, -258.21,1059.6],[1247.71, -144.5, -119.15, -372.88, -78.91, -246.94,1520.01],[1040.21, -407.53, 0, 0, 0, 0,1858.51]]
                        ],
                        [
                            "eid482",
                            "location",
                            11500,
                            3000,
                            "easeInQuad",
                            "${Group6}",
                            [[1040.22, -407.53, 0, 0, 0, 0,0],[742.95, 18.22, -330.91, 205.82, -447.13, 278.11,524.64],[74.21, 198.47, 0, 0, 0, 0,1218.74]]
                        ],
                        [
                            "eid408",
                            "scaleX",
                            6250,
                            750,
                            "linear",
                            "${Group6}",
                            '1',
                            '0.8721'
                        ],
                        [
                            "eid498",
                            "scaleX",
                            7000,
                            53,
                            "linear",
                            "${Group6}",
                            '0.8721',
                            '-0.70173'
                        ],
                        [
                            "eid501",
                            "scaleX",
                            7053,
                            841,
                            "linear",
                            "${Group6}",
                            '-0.70173',
                            '-0.71165'
                        ],
                        [
                            "eid504",
                            "scaleX",
                            7894,
                            65,
                            "linear",
                            "${Group6}",
                            '-0.71165',
                            '0.6272'
                        ],
                        [
                            "eid510",
                            "scaleX",
                            7959,
                            541,
                            "linear",
                            "${Group6}",
                            '0.6272',
                            '0.49837'
                        ],
                        [
                            "eid519",
                            "scaleX",
                            8500,
                            102,
                            "linear",
                            "${Group6}",
                            '0.49837',
                            '-0.47368'
                        ],
                        [
                            "eid514",
                            "scaleX",
                            8602,
                            512,
                            "linear",
                            "${Group6}",
                            '-0.47368',
                            '-0.61083'
                        ],
                        [
                            "eid416",
                            "scaleX",
                            9114,
                            2386,
                            "easeOutCubic",
                            "${Group6}",
                            '-0.61083',
                            '-0.44836'
                        ],
                        [
                            "eid442",
                            "scaleX",
                            11500,
                            5250,
                            "easeInQuad",
                            "${Group6}",
                            '-0.44836',
                            '-1'
                        ],
                        [
                            "eid217",
                            "rotateZ",
                            4500,
                            1750,
                            "easeOutCubic",
                            "${Group6}",
                            '-5deg',
                            '-17deg'
                        ],
                        [
                            "eid509",
                            "rotateZ",
                            7000,
                            53,
                            "linear",
                            "${Group6}",
                            '-5deg',
                            '13deg'
                        ],
                        [
                            "eid507",
                            "rotateZ",
                            7053,
                            841,
                            "linear",
                            "${Group6}",
                            '13deg',
                            '17deg'
                        ],
                        [
                            "eid508",
                            "rotateZ",
                            7894,
                            65,
                            "linear",
                            "${Group6}",
                            '17deg',
                            '-13deg'
                        ],
                        [
                            "eid512",
                            "rotateZ",
                            7959,
                            541,
                            "linear",
                            "${Group6}",
                            '-13deg',
                            '-6deg'
                        ],
                        [
                            "eid521",
                            "rotateZ",
                            8500,
                            102,
                            "linear",
                            "${Group6}",
                            '-6deg',
                            '39deg'
                        ],
                        [
                            "eid515",
                            "rotateZ",
                            8602,
                            512,
                            "linear",
                            "${Group6}",
                            '39deg',
                            '19deg'
                        ],
                        [
                            "eid411",
                            "rotateZ",
                            9114,
                            278,
                            "linear",
                            "${Group6}",
                            '19deg',
                            '24deg'
                        ],
                        [
                            "eid517",
                            "rotateZ",
                            9392,
                            291,
                            "linear",
                            "${Group6}",
                            '24deg',
                            '13deg'
                        ],
                        [
                            "eid518",
                            "rotateZ",
                            9683,
                            386,
                            "easeOutCubic",
                            "${Group6}",
                            '13deg',
                            '-4deg'
                        ],
                        [
                            "eid412",
                            "rotateZ",
                            10068,
                            955,
                            "easeOutCubic",
                            "${Group6}",
                            '-4deg',
                            '-9deg'
                        ],
                        [
                            "eid409",
                            "scaleY",
                            6250,
                            750,
                            "linear",
                            "${Group6}",
                            '1',
                            '0.8721'
                        ],
                        [
                            "eid499",
                            "scaleY",
                            7000,
                            53,
                            "linear",
                            "${Group6}",
                            '0.8721',
                            '0.86306'
                        ],
                        [
                            "eid503",
                            "scaleY",
                            7053,
                            841,
                            "linear",
                            "${Group6}",
                            '0.86306',
                            '0.71965'
                        ],
                        [
                            "eid505",
                            "scaleY",
                            7894,
                            65,
                            "linear",
                            "${Group6}",
                            '0.71965',
                            '0.70857'
                        ],
                        [
                            "eid511",
                            "scaleY",
                            7959,
                            541,
                            "linear",
                            "${Group6}",
                            '0.70857',
                            '0.61626'
                        ],
                        [
                            "eid520",
                            "scaleY",
                            8500,
                            102,
                            "linear",
                            "${Group6}",
                            '0.61626',
                            '0.59886'
                        ],
                        [
                            "eid513",
                            "scaleY",
                            8602,
                            512,
                            "linear",
                            "${Group6}",
                            '0.59886',
                            '0.5116'
                        ],
                        [
                            "eid443",
                            "scaleY",
                            9114,
                            7636,
                            "easeInQuad",
                            "${Group6}",
                            '0.5116',
                            '1'
                        ]
                    ]
                }
            },
            "Pinguin2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-30px', '-5px', '256', '324', 'auto', 'auto'],
                            autoOrient: false,
                            transform: [[], ['329'], [], ['0.97972', '0.97972'], ['47.5941%', '99.7991%']],
                            c: [
                            {
                                type: 'image',
                                id: 'vleugel1',
                                rect: ['0px', '31px', '75px', '126px', 'auto', 'auto'],
                                transform: [[], ['-18'], [], [], ['97.7589%', '77.0768%']],
                                fill: ['rgba(0,0,0,0)', 'images/Pinguin2_vleugel1-01.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'vleugel2',
                                rect: ['154px', '44px', '94px', '88px', 'auto', 'auto'],
                                transform: [[], ['35'], [], [], ['12.4038%', '81.6595%']],
                                fill: ['rgba(0,0,0,0)', 'images/Pinguin2_vleugel2-01.svg', '0px', '0px']
                            },
                            {
                                rect: ['47px', '31px', '140px', '293px', 'auto', 'auto'],
                                id: 'lijf',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Pinguin2-01.svg', '0px', '0px']
                            },
                            {
                                rect: ['151px', '8px', null, null, 'auto', 'auto'],
                                id: 'snavel',
                                symbolName: 'Snavel',
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '256px', '536px']
                        }
                    }
                },
                timeline: {
                    duration: 21250,
                    autoPlay: false,
                    labels: {
                        "wiegen": 8091,
                        "salto": 10500
                    },
                    data: [
                        [
                            "eid544",
                            "scaleX",
                            10500,
                            1750,
                            "easeOutSine",
                            "${Group}",
                            '1',
                            '0.71'
                        ],
                        [
                            "eid559",
                            "scaleX",
                            13394,
                            7856,
                            "easeOutSine",
                            "${Group}",
                            '0.71',
                            '0.97972'
                        ],
                        [
                            "eid660",
                            "originY",
                            8750,
                            750,
                            "linear",
                            "${vleugel1}",
                            '77.0768%',
                            '50%'
                        ],
                        [
                            "eid658",
                            "originX",
                            8750,
                            750,
                            "linear",
                            "${vleugel1}",
                            '97.7589%',
                            '50%'
                        ],
                        [
                            "eid527",
                            "location",
                            0,
                            8091,
                            "easeInOutQuad",
                            "${Group}",
                            [[4, 386.32, 0, 0, 0, 0,0],[492.01, 256.52, 218.84, -14.75, 684.98, -46.17,507.02],[809.84, 315.55, 226, 3.41, 235.96, 3.56,831.07],[1000.8, 224.85, 288.87, 42.2, 201.93, 29.5,1047.75],[1164.55, 314.46, 196.71, 87.41, 228.14, 101.38,1237.37],[1345.6, 264.31, 0, 0, 0, 0,1431.54]]
                        ],
                        [
                            "eid540",
                            "location",
                            8091,
                            2159,
                            "easeInOutQuad",
                            "${Group}",
                            [[1345.61, 264.32, 0, 0, 0, 0,0],[1271.79, 283.39, -83.13, -3.09, -78.76, -2.92,76.61],[1211.6, 302.31, 0, 0, 0, 0,140.36]]
                        ],
                        [
                            "eid543",
                            "location",
                            10500,
                            10750,
                            "easeOutSine",
                            "${Group}",
                            [[1211.6, 302.31, 0, 0, 0, 0,0],[1137.32, 546.63, 272.26, 171.86, 381.94, 241.1,300.3],[1577.81, 534.58, -480.33, -195.28, -384.93, -156.49,802.34],[1359, 290.33, 0, 0, 0, 0,1139.48]]
                        ],
                        [
                            "eid545",
                            "scaleY",
                            10500,
                            1750,
                            "easeOutSine",
                            "${Group}",
                            '1',
                            '0.71'
                        ],
                        [
                            "eid560",
                            "scaleY",
                            13394,
                            7856,
                            "easeOutSine",
                            "${Group}",
                            '0.71',
                            '0.97972'
                        ],
                        [
                            "eid656",
                            "rotateZ",
                            8750,
                            750,
                            "linear",
                            "${vleugel2}",
                            '35deg',
                            '0deg'
                        ],
                        [
                            "eid662",
                            "rotateZ",
                            8750,
                            750,
                            "linear",
                            "${vleugel1}",
                            '-18deg',
                            '0deg'
                        ],
                        [
                            "eid528",
                            "rotateZ",
                            0,
                            1812,
                            "linear",
                            "${Group}",
                            '-16deg',
                            '-19deg'
                        ],
                        [
                            "eid529",
                            "rotateZ",
                            1812,
                            820,
                            "linear",
                            "${Group}",
                            '-19deg',
                            '-29deg'
                        ],
                        [
                            "eid530",
                            "rotateZ",
                            2632,
                            1118,
                            "linear",
                            "${Group}",
                            '-29deg',
                            '12deg'
                        ],
                        [
                            "eid531",
                            "rotateZ",
                            3750,
                            1250,
                            "linear",
                            "${Group}",
                            '12deg',
                            '-24deg'
                        ],
                        [
                            "eid651",
                            "rotateZ",
                            5000,
                            1091,
                            "linear",
                            "${Group}",
                            '-24deg',
                            '20deg'
                        ],
                        [
                            "eid214",
                            "rotateZ",
                            6091,
                            2000,
                            "linear",
                            "${Group}",
                            '20deg',
                            '-11deg'
                        ],
                        [
                            "eid621",
                            "rotateZ",
                            8092,
                            2158,
                            "easeInOutQuad",
                            "${Group}",
                            '-11deg',
                            '8deg'
                        ],
                        [
                            "eid618",
                            "rotateZ",
                            10500,
                            1000,
                            "easeOutSine",
                            "${Group}",
                            '0deg',
                            '-19deg'
                        ],
                        [
                            "eid624",
                            "rotateZ",
                            11500,
                            250,
                            "easeOutSine",
                            "${Group}",
                            '-19deg',
                            '135deg'
                        ],
                        [
                            "eid625",
                            "rotateZ",
                            11750,
                            500,
                            "easeOutSine",
                            "${Group}",
                            '135deg',
                            '142deg'
                        ],
                        [
                            "eid623",
                            "rotateZ",
                            12250,
                            500,
                            "easeOutSine",
                            "${Group}",
                            '142deg',
                            '125deg'
                        ],
                        [
                            "eid616",
                            "rotateZ",
                            12750,
                            1000,
                            "easeOutSine",
                            "${Group}",
                            '125deg',
                            '132deg'
                        ],
                        [
                            "eid626",
                            "rotateZ",
                            15875,
                            5375,
                            "easeOutSine",
                            "${Group}",
                            '132deg',
                            '351deg'
                        ]
                    ]
                }
            },
            "Pinguin3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group9',
                            rect: ['-2075px', '254px', '272', '316', 'auto', 'auto'],
                            transform: [[], ['-8'], [], [], ['42.2957%', '87.9851%']],
                            c: [
                            {
                                rect: ['20px', '30px', '185px', '286px', 'auto', 'auto'],
                                id: 'lijf',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Pinguin3-01.svg', '0px', '0px']
                            },
                            {
                                rect: ['137px', '3px', null, null, 'auto', 'auto'],
                                id: 'snavel',
                                symbolName: 'Snavel',
                                type: 'rect'
                            },
                            {
                                type: 'image',
                                id: 'vleugel1',
                                rect: ['0px', '0px', '85px', '144px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['92.1941%', '89.7384%']],
                                fill: ['rgba(0,0,0,0)', 'images/Pinguin3_vleugel1-01.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'vleugel2',
                                rect: ['151px', '30px', '121px', '103px', 'auto', 'auto'],
                                transform: [[], [], [], [], ['0%', '99.9999%']],
                                fill: ['rgba(0,0,0,0)', 'images/Pinguin3_vleugel2-01.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '272px', '420px']
                        }
                    }
                },
                timeline: {
                    duration: 18000,
                    autoPlay: false,
                    labels: {
                        "wiegen": 8250,
                        "stunt": 11000
                    },
                    data: [
                        [
                            "eid637",
                            "scaleX",
                            11000,
                            2500,
                            "easeInOutQuad",
                            "${Group9}",
                            '1',
                            '0.65803'
                        ],
                        [
                            "eid645",
                            "scaleX",
                            15500,
                            2500,
                            "easeInOutQuad",
                            "${Group9}",
                            '0.65803',
                            '1'
                        ],
                        [
                            "eid631",
                            "location",
                            0,
                            8250,
                            "easeInOutQuad",
                            "${Group9}",
                            [[-1959.96, 532.03, 0, 0, 0, 0,0],[-1069.4, 381.37, 1677.9, 647.56, 1187.8, 458.41,931.22],[134.04, 268.03, 0, 0, 0, 0,2171.55]]
                        ],
                        [
                            "eid632",
                            "location",
                            8250,
                            2360,
                            "easeInOutQuad",
                            "${Group9}",
                            [[134.06, 268.03, 0, 0, 0, 0,0],[98.04, 276.03, 0, 0, 0, 0,36.9]]
                        ],
                        [
                            "eid636",
                            "location",
                            11000,
                            2500,
                            "easeInOutQuad",
                            "${Group9}",
                            [[98.06, 276.03, 0, 0, 0, 0,0],[905.65, 216.59, 68.81, -134.41, 221.03, -431.72,829.15],[542.01, 138.67, -456.89, -318.83, -397.91, -277.67,1214.26],[354.04, -223.97, 0, 0, 0, 0,1632.6]]
                        ],
                        [
                            "eid642",
                            "location",
                            13500,
                            1250,
                            "easeInOutQuad",
                            "${Group9}",
                            [[354.06, -223.97, 0, 0, 0, 0,0],[364.04, -271.97, 0, 0, 0, 0,49.03]]
                        ],
                        [
                            "eid643",
                            "location",
                            14750,
                            250,
                            "easeInOutQuad",
                            "${Group9}",
                            [[364.06, -271.97, 0, 0, 0, 0,0],[352.04, -217.97, 0, 0, 0, 0,55.32]]
                        ],
                        [
                            "eid644",
                            "location",
                            15000,
                            3000,
                            "easeInOutQuad",
                            "${Group9}",
                            [[352.06, -217.97, 0, 0, 0, 0,0],[654.48, 151.8, 153.65, 55.8, 531.57, 193.04,488.65],[1485.24, 267.35, -760.36, 245.45, -420.07, 135.6,1361.98],[141.21, 285.32, 0, 0, 0, 0,2709.42]]
                        ],
                        [
                            "eid220",
                            "rotateZ",
                            8250,
                            2360,
                            "easeInOutQuad",
                            "${Group9}",
                            '4deg',
                            '-8deg'
                        ],
                        [
                            "eid639",
                            "rotateZ",
                            11000,
                            1750,
                            "easeInOutQuad",
                            "${Group9}",
                            '-8deg',
                            '50deg'
                        ],
                        [
                            "eid640",
                            "rotateZ",
                            12750,
                            750,
                            "easeInOutQuad",
                            "${Group9}",
                            '50deg',
                            '-22deg'
                        ],
                        [
                            "eid641",
                            "rotateZ",
                            13500,
                            500,
                            "easeInOutQuad",
                            "${Group9}",
                            '-22deg',
                            '5deg'
                        ],
                        [
                            "eid665",
                            "rotateZ",
                            8750,
                            1000,
                            "linear",
                            "${vleugel2}",
                            '0deg',
                            '23deg'
                        ],
                        [
                            "eid638",
                            "scaleY",
                            11000,
                            2500,
                            "easeInOutQuad",
                            "${Group9}",
                            '1',
                            '0.65803'
                        ],
                        [
                            "eid646",
                            "scaleY",
                            15500,
                            2500,
                            "easeInOutQuad",
                            "${Group9}",
                            '0.65803',
                            '1'
                        ],
                        [
                            "eid664",
                            "rotateZ",
                            8750,
                            1000,
                            "linear",
                            "${vleugel1}",
                            '0deg',
                            '-34deg'
                        ]
                    ]
                }
            },
            "Spandoek": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '735px', '201px', 'auto', 'auto'],
                            id: 'Spandoek-01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Spandoek-01.svg', '0px', '0px']
                        },
                        {
                            rect: ['210px', '60px', '297px', '76px', 'auto', 'auto'],
                            id: 'Siene_wit-01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Siene_wit-01.svg', '0px', '0px']
                        },
                        {
                            rect: ['210px', '60px', '296px', '75px', 'auto', 'auto'],
                            id: 'Siene_oranje-01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Siene_oranje-01.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['202px', '58px', '312px', '79px', 'auto', 'auto'],
                            id: 'Siene_geel-01',
                            fill: ['rgba(0,0,0,0)', 'images/Siene_geel-01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '735px', '201px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: false,
                    labels: {
                        "knipperen": 608
                    },
                    data: [
                        [
                            "eid715",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid716",
                            "display",
                            608,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid717",
                            "display",
                            750,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid718",
                            "display",
                            894,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid719",
                            "display",
                            1000,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid720",
                            "display",
                            1118,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid721",
                            "display",
                            1250,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid722",
                            "display",
                            1377,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid723",
                            "display",
                            1500,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid724",
                            "display",
                            1750,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid725",
                            "display",
                            1860,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid871",
                            "display",
                            2047,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid872",
                            "display",
                            2205,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid873",
                            "display",
                            2296,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid874",
                            "display",
                            2387,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid875",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid876",
                            "display",
                            2642,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid877",
                            "display",
                            2812,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid878",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid879",
                            "display",
                            3158,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid880",
                            "display",
                            3340,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid881",
                            "display",
                            3486,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid882",
                            "display",
                            3628,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid883",
                            "display",
                            3772,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid884",
                            "display",
                            3878,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid885",
                            "display",
                            3996,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid886",
                            "display",
                            4128,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid887",
                            "display",
                            4255,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid888",
                            "display",
                            4378,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid889",
                            "display",
                            4628,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid890",
                            "display",
                            4738,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid891",
                            "display",
                            4925,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid892",
                            "display",
                            5083,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid893",
                            "display",
                            5174,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid894",
                            "display",
                            5265,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid895",
                            "display",
                            5378,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid896",
                            "display",
                            5520,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid897",
                            "display",
                            5690,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid898",
                            "display",
                            5878,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid899",
                            "display",
                            6036,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid900",
                            "display",
                            6218,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid901",
                            "display",
                            6407,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid902",
                            "display",
                            6549,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid903",
                            "display",
                            6693,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid904",
                            "display",
                            6799,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid905",
                            "display",
                            6917,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid906",
                            "display",
                            7049,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid907",
                            "display",
                            7176,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid908",
                            "display",
                            7299,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid909",
                            "display",
                            7549,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid910",
                            "display",
                            7659,
                            0,
                            "easeOutQuad",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid911",
                            "display",
                            7846,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid912",
                            "display",
                            8004,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid913",
                            "display",
                            8095,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid914",
                            "display",
                            8186,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid915",
                            "display",
                            8299,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid916",
                            "display",
                            8441,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid917",
                            "display",
                            8611,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid918",
                            "display",
                            8799,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid919",
                            "display",
                            8957,
                            0,
                            "linear",
                            "${Siene_geel-01}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Vogel1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['10'], [0, 0, 0], [1, 1, 1]],
                            id: 'Vogel1_vleugel2-01',
                            type: 'image',
                            rect: ['104px', '36px', '155px', '93px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Vogel1_vleugel2-01.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['4'], [0, 0, 0], [1, 1, 1]],
                            id: 'Vogel1-01',
                            type: 'image',
                            rect: ['0px', '67px', '220px', '90px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Vogel1-01.svg', '0px', '0px']
                        },
                        {
                            rect: ['49px', '0px', '106px', '91px', 'auto', 'auto'],
                            id: 'Vogel1_Vleugel1-01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Vogel1_Vleugel1-01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '269px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid106",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${Vogel1_Vleugel1-01}",
                            '0deg',
                            '-6deg'
                        ],
                        [
                            "eid105",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Vogel1_Vleugel1-01}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid104",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${Vogel1_Vleugel1-01}",
                            '1',
                            '0.70831'
                        ],
                        [
                            "eid112",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Vogel1_vleugel2-01}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid110",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${Vogel1_vleugel2-01}",
                            '-12deg',
                            '10deg'
                        ],
                        [
                            "eid111",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Vogel1_vleugel2-01}",
                            '14px',
                            '36px'
                        ]
                    ]
                }
            },
            "Vogel2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-9'], [], ['1', '0.66317']],
                            id: 'Vogel2_Vleugel2-01',
                            type: 'image',
                            rect: ['2px', '12px', '139px', '115px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Vogel2_Vleugel2-01.svg', '0px', '0px']
                        },
                        {
                            rect: ['61px', '53px', '194px', '94px', 'auto', 'auto'],
                            id: 'Vogel2-01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Vogel2-01.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '0.5']],
                            id: 'Vogel2_Vleugel1-01',
                            type: 'image',
                            rect: ['121px', '0px', '100px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Vogel2_Vleugel1-01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '255px', '151px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid127",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${Vogel2_Vleugel2-01}",
                            '0.74701',
                            '0.66317'
                        ],
                        [
                            "eid128",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${Vogel2_Vleugel2-01}",
                            '10deg',
                            '-9deg'
                        ],
                        [
                            "eid126",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Vogel2_Vleugel2-01}",
                            '30px',
                            '2px'
                        ],
                        [
                            "eid113",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${Vogel2_Vleugel1-01}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid114",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Vogel2_Vleugel1-01}",
                            '0px',
                            '23px'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${Vogel2_Vleugel2-01}",
                            '1',
                            '0.80007'
                        ],
                        [
                            "eid125",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Vogel2_Vleugel2-01}",
                            '10px',
                            '12px'
                        ]
                    ]
                }
            },
            "Vis1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-107'], [], [], ['25.0429%', '195.0992%']],
                            id: 'Vis1-01',
                            type: 'image',
                            rect: ['1500px', '-153px', '218px', '194px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Vis1-01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '218px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 7640,
                    autoPlay: true,
                    data: [
                        [
                            "eid193",
                            "rotateZ",
                            0,
                            2376,
                            "linear",
                            "${Vis1-01}",
                            '-107deg',
                            '100deg'
                        ],
                        [
                            "eid194",
                            "rotateZ",
                            2376,
                            2376,
                            "linear",
                            "${Vis1-01}",
                            '-107deg',
                            '100deg'
                        ],
                        [
                            "eid195",
                            "rotateZ",
                            4752,
                            2376,
                            "linear",
                            "${Vis1-01}",
                            '-107deg',
                            '100deg'
                        ],
                        [
                            "eid188",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Vis1-01}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid184",
                            "left",
                            2376,
                            0,
                            "linear",
                            "${Vis1-01}",
                            '35px',
                            '734px'
                        ],
                        [
                            "eid197",
                            "left",
                            4752,
                            0,
                            "linear",
                            "${Vis1-01}",
                            '734px',
                            '1500px'
                        ]
                    ]
                }
            },
            "Spandoek_Vogels": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['637px', '1px', null, null, 'auto', 'auto'],
                            id: 'Vogel2',
                            symbolName: 'Vogel2',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '-13px', null, null, 'auto', 'auto'],
                            id: 'Vogel1',
                            symbolName: 'Vogel1',
                            type: 'rect'
                        },
                        {
                            rect: ['103px', '68px', '735', '201', 'auto', 'auto'],
                            id: 'Spandoek',
                            symbolName: 'Spandoek',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '886px', '273px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Spandoek_Vogels_Main": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['8'], [0, 0, 0], [1, 1, 1]],
                            rect: ['9px', '427px', '886', '273', 'auto', 'auto'],
                            id: 'Spandoek_Vogels',
                            symbolName: 'Spandoek_Vogels',
                            cursor: 'pointer',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '915px', '394px']
                        }
                    }
                },
                timeline: {
                    duration: 2901,
                    autoPlay: false,
                    data: [
                        [
                            "eid48",
                            "top",
                            0,
                            1605,
                            "easeOutQuint",
                            "${Spandoek_Vogels}",
                            '58px',
                            '447px'
                        ],
                        [
                            "eid88",
                            "top",
                            1605,
                            481,
                            "linear",
                            "${Spandoek_Vogels}",
                            '447px',
                            '425px'
                        ],
                        [
                            "eid90",
                            "top",
                            2086,
                            815,
                            "linear",
                            "${Spandoek_Vogels}",
                            '425px',
                            '427px'
                        ],
                        [
                            "eid85",
                            "rotateZ",
                            0,
                            565,
                            "linear",
                            "${Spandoek_Vogels}",
                            '8deg',
                            '-10deg'
                        ],
                        [
                            "eid86",
                            "rotateZ",
                            565,
                            754,
                            "linear",
                            "${Spandoek_Vogels}",
                            '-10deg',
                            '0deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            1319,
                            767,
                            "linear",
                            "${Spandoek_Vogels}",
                            '0deg',
                            '-2deg'
                        ],
                        [
                            "eid89",
                            "rotateZ",
                            2086,
                            815,
                            "linear",
                            "${Spandoek_Vogels}",
                            '-2deg',
                            '2deg'
                        ]
                    ]
                }
            },
            "IJsberen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.43', '0.43']],
                            rect: ['236px', '-460px', '42px', '47px', 'auto', 'auto'],
                            display: 'none',
                            id: 'hartje',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Hartje-01.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['240px', '116px', '42px', '47px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.49204', '0.49204']],
                            id: 'hartje2',
                            display: 'none',
                            autoOrient: 'true',
                            fill: ['rgba(0,0,0,0)', 'images/Hartje-01.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['240px', '116px', '42px', '47px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.49204', '0.49204']],
                            id: 'hartje3',
                            display: 'none',
                            autoOrient: 'true',
                            fill: ['rgba(0,0,0,0)', 'images/Hartje-01.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['240px', '116px', '42px', '47px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.49204', '0.49204']],
                            id: 'hartje4',
                            display: 'none',
                            autoOrient: 'true',
                            fill: ['rgba(0,0,0,0)', 'images/Hartje-01.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['261px', '139px', '42px', '47px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.49204', '0.49204']],
                            id: 'hartje5',
                            display: 'none',
                            autoOrient: 'true',
                            fill: ['rgba(0,0,0,0)', 'images/Hartje-01.svg', '0px', '0px']
                        },
                        {
                            rect: ['250px', '77px', '146', '213', 'auto', 'auto'],
                            id: 'ijsbeer2',
                            symbolName: 'IJsbeer2',
                            type: 'rect'
                        },
                        {
                            rect: ['41px', '78px', '134', '229', 'auto', 'auto'],
                            id: 'ijsbeer1',
                            symbolName: 'IJsbeer1',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '426px', '229px']
                        }
                    }
                },
                timeline: {
                    duration: 13250,
                    autoPlay: false,
                    labels: {
                        "hartjes": 8000
                    },
                    data: [
                        [
                            "eid710",
                            "scaleX",
                            8857,
                            0,
                            "easeOutCubic",
                            "${hartje5}",
                            '0.49204',
                            '0.49204'
                        ],
                        [
                            "eid268",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hartje}",
                            'none',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            4102,
                            0,
                            "linear",
                            "${hartje}",
                            'none',
                            'block'
                        ],
                        [
                            "eid703",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${hartje4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid708",
                            "display",
                            8603,
                            0,
                            "easeOutCubic",
                            "${hartje4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid711",
                            "scaleY",
                            8857,
                            0,
                            "easeOutCubic",
                            "${hartje5}",
                            '0.49204',
                            '0.49204'
                        ],
                        [
                            "eid701",
                            "scaleY",
                            8603,
                            0,
                            "easeOutCubic",
                            "${hartje4}",
                            '0.49204',
                            '0.49204'
                        ],
                        [
                            "eid275",
                            "scaleY",
                            4102,
                            3148,
                            "linear",
                            "${hartje}",
                            '0.43',
                            '2.21993'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            8603,
                            0,
                            "easeOutCubic",
                            "${hartje4}",
                            '0.49204',
                            '0.49204'
                        ],
                        [
                            "eid709",
                            "location",
                            8857,
                            2750,
                            "easeOutQuad",
                            "${hartje5}",
                            [[260.67, 139.17, 0, 0, 0, 0,0],[375.33, 55.67, 71.28, -227.44, 64.37, -205.39,148.48],[347.12, -168.7, -77.76, -342.12, -12.13, -53.37,377.43],[433.8, -390.63, 0, 0, 0, 0,625.24]]
                        ],
                        [
                            "eid244",
                            "left",
                            0,
                            1847,
                            "linear",
                            "${ijsbeer1}",
                            '5px',
                            '22px'
                        ],
                        [
                            "eid266",
                            "left",
                            3500,
                            275,
                            "linear",
                            "${ijsbeer1}",
                            '22px',
                            '41px'
                        ],
                        [
                            "eid693",
                            "scaleY",
                            8000,
                            0,
                            "easeOutCubic",
                            "${hartje2}",
                            '0.49204',
                            '0.49204'
                        ],
                        [
                            "eid705",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${hartje2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid706",
                            "display",
                            8000,
                            0,
                            "easeOutCubic",
                            "${hartje2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid700",
                            "location",
                            8603,
                            2750,
                            "easeOutQuad",
                            "${hartje4}",
                            [[260.67, 139.17, 0, 0, 0, 0,0],[361.12, -49.59, 6.93, -462.62, 3.51, -234.05,217.19],[268.47, -381.3, 0, 0, 0, 0,564.58]]
                        ],
                        [
                            "eid271",
                            "top",
                            4102,
                            3148,
                            "linear",
                            "${hartje}",
                            '100px',
                            '-460px'
                        ],
                        [
                            "eid696",
                            "location",
                            8273,
                            3080,
                            "easeOutQuad",
                            "${hartje3}",
                            [[260.67, 139.17, 0, 0, 0, 0,0],[239.5, 61.63, -127.4, -121.46, -126.37, -120.48,86.01],[68.62, -92.98, -115.75, -358.68, -68.32, -211.7,319.9],[91.67, -384.5, 0, 0, 0, 0,616.58]]
                        ],
                        [
                            "eid712",
                            "display",
                            397,
                            0,
                            "easeOutCubic",
                            "${hartje5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid713",
                            "display",
                            8857,
                            0,
                            "easeOutCubic",
                            "${hartje5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid695",
                            "scaleY",
                            8273,
                            0,
                            "easeOutCubic",
                            "${hartje3}",
                            '0.49204',
                            '0.49204'
                        ],
                        [
                            "eid694",
                            "scaleX",
                            8273,
                            0,
                            "easeOutCubic",
                            "${hartje3}",
                            '0.49204',
                            '0.49204'
                        ],
                        [
                            "eid202",
                            "top",
                            0,
                            1847,
                            "linear",
                            "${ijsbeer1}",
                            '555px',
                            '39px'
                        ],
                        [
                            "eid267",
                            "top",
                            3500,
                            275,
                            "linear",
                            "${ijsbeer1}",
                            '39px',
                            '78px'
                        ],
                        [
                            "eid243",
                            "left",
                            0,
                            1847,
                            "linear",
                            "${ijsbeer2}",
                            '285px',
                            '265px'
                        ],
                        [
                            "eid261",
                            "left",
                            3500,
                            275,
                            "linear",
                            "${ijsbeer2}",
                            '265px',
                            '250px'
                        ],
                        [
                            "eid691",
                            "location",
                            8000,
                            3353,
                            "easeOutQuad",
                            "${hartje2}",
                            [[261, 139.17, 0, 0, 0, 0,0],[219.5, 82.97, -127.4, -121.46, -126.37, -120.48,70.76],[83.29, -22.31, -115.75, -358.68, -68.32, -211.7,248.11],[182, -384.5, 0, 0, 0, 0,630.97]]
                        ],
                        [
                            "eid273",
                            "scaleX",
                            4102,
                            3148,
                            "linear",
                            "${hartje}",
                            '0.43',
                            '2.22'
                        ],
                        [
                            "eid200",
                            "top",
                            0,
                            1847,
                            "linear",
                            "${ijsbeer2}",
                            '555px',
                            '39px'
                        ],
                        [
                            "eid260",
                            "top",
                            3500,
                            275,
                            "linear",
                            "${ijsbeer2}",
                            '39px',
                            '77px'
                        ],
                        [
                            "eid692",
                            "scaleX",
                            8000,
                            0,
                            "easeOutCubic",
                            "${hartje2}",
                            '0.49204',
                            '0.49204'
                        ],
                        [
                            "eid704",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${hartje3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid707",
                            "display",
                            8273,
                            0,
                            "easeOutCubic",
                            "${hartje3}",
                            'none',
                            'block'
                        ],
                            [ "eid1090", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ijsbeer2}', [] ] ],
                            [ "eid1091", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ijsbeer1}', [] ] ],
                            [ "eid678", "trigger", 8000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ijsbeer1}', ['buig'] ] ],
                            [ "eid677", "trigger", 8000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ijsbeer2}', ['buig'] ] ]
                    ]
                }
            },
            "Golf1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-1788px', '0', '3840', '131', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'Golf1-01',
                                rect: ['1794px', 'auto', '1920px', '131px', 'auto', '0px'],
                                fill: ['rgba(0,0,0,0)', 'images/Golf1-01.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'Golf1-01Copy',
                                rect: ['0px', 'auto', '1920px', '131px', 'auto', '0px'],
                                fill: ['rgba(0,0,0,0)', 'images/Golf1-01.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '131px']
                        }
                    }
                },
                timeline: {
                    duration: 45000,
                    autoPlay: true,
                    data: [
                        [
                            "eid239",
                            "left",
                            0,
                            45000,
                            "linear",
                            "${Group}",
                            '-1788px',
                            '0px'
                        ]
                    ]
                }
            },
            "Golf2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-1804px', '0', '3840', '218', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'Golf2-01',
                                rect: ['1810px', 'auto', '1920px', '218px', 'auto', '0px'],
                                fill: ['rgba(0,0,0,0)', 'images/Golf2-01.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'Golf2-01Copy',
                                rect: ['0px', 'auto', '1920px', '218px', 'auto', '0px'],
                                fill: ['rgba(0,0,0,0)', 'images/Golf2-01.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '218px']
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: true,
                    data: [
                        [
                            "eid240",
                            "left",
                            0,
                            90000,
                            "linear",
                            "${Group}",
                            '-1804px',
                            '0px'
                        ]
                    ]
                }
            },
            "Pinguins": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            transform: [[], [], [], [], ['67.4746%', '99.399%']],
                            id: 'pinguin3',
                            symbolName: 'Pinguin3',
                            cursor: 'pointer',
                            rect: ['1859px', '46px', '185', '286', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], [], ['69.5089%', '97.9148%']],
                            id: 'pinguin2',
                            symbolName: 'Pinguin2',
                            cursor: 'pointer',
                            rect: ['200px', '73px', '140', '293', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], [], ['68.6085%', '98.3897%']],
                            id: 'pinguin1',
                            symbolName: 'Pinguin1',
                            cursor: 'pointer',
                            rect: ['103px', '95px', '221', '327', 'auto', 'auto']
                        },
                        {
                            rect: ['2506px', '-80px', '150px', '112px', 'auto', 'auto'],
                            id: 'hack_rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '338px', '330px']
                        }
                    }
                },
                timeline: {
                    duration: 21250,
                    autoPlay: false,
                    data: [
                            [ "eid1085", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${pinguin1}', [0] ] ],
                            [ "eid1086", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${pinguin2}', [0] ] ],
                            [ "eid1087", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${pinguin3}', [0] ] ]
                    ]
                }
            },
            "Sterren": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1891px', '1004px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Star": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '6px', '6px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '1',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '6px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid279",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Wolk3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group3',
                            rect: ['-1335px', '-131', '3281', '748', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'Wolk3-01',
                                rect: ['806px', 'auto', '1143px', '627px', 'auto', '0px'],
                                fill: ['rgba(0,0,0,0)', 'images/Wolk3-01.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'Wolk2-01',
                                rect: ['auto', 'auto', '993px', '639px', '0px', '0px'],
                                fill: ['rgba(0,0,0,0)', 'images/Wolk2-01.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'Wolk2-01Copy3',
                                rect: ['auto', 'auto', '993px', '639px', '2271px', '53px'],
                                transform: [[], [], [], ['-1.03116', '1.17008']],
                                fill: ['rgba(0,0,0,0)', 'images/Wolk2-01.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1143px', '627px']
                        }
                    }
                },
                timeline: {
                    duration: 300400,
                    autoPlay: true,
                    data: [
                        [
                            "eid301",
                            "left",
                            0,
                            300400,
                            "linear",
                            "${Group3}",
                            '-1334px',
                            '-41px'
                        ]
                    ]
                }
            },
            "Wolk1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group2',
                            rect: ['-1860', '0', '3780', '468', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'Wolk1-01',
                                rect: ['1860px', 'auto', '1920px', '463px', 'auto', '5px'],
                                fill: ['rgba(0,0,0,0)', 'images/Wolk1-01.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'Wolk1-01Copy',
                                rect: ['0px', 'auto', '1920px', '463px', 'auto', '0px'],
                                fill: ['rgba(0,0,0,0)', 'images/Wolk1-01.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '463px']
                        }
                    }
                },
                timeline: {
                    duration: 240000,
                    autoPlay: true,
                    data: [
                        [
                            "eid291",
                            "left",
                            0,
                            240000,
                            "linear",
                            "${Group2}",
                            '-1860px',
                            '-13px'
                        ]
                    ]
                }
            },
            "Pinguin_vleugel2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], [], ['0.1628%', '88.3516%']],
                            id: 'Pinguin1_vleugel2-01',
                            type: 'image',
                            rect: ['-19px', '-15px', '147px', '113px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pinguin1_vleugel2-01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '147px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 5120,
                    autoPlay: true,
                    data: [
                        [
                            "eid337",
                            "rotateZ",
                            0,
                            750,
                            "linear",
                            "${Pinguin1_vleugel2-01}",
                            '0deg',
                            '104deg'
                        ],
                        [
                            "eid349",
                            "rotateZ",
                            750,
                            750,
                            "linear",
                            "${Pinguin1_vleugel2-01}",
                            '104deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "Pinguin1_vleugel1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-172', '-122', '273', '263', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            transform: [[], [], [], [], ['84.3177%', '92.134%']],
                            c: [
                            {
                                transform: [[], [], [], [], ['89.0416%', '88.9738%']],
                                id: 'Pinguin1_vleugel1-01',
                                type: 'image',
                                rect: ['172px', '122px', '75px', '141px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Pinguin1_vleugel1-01.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1032",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0deg',
                            '-48deg'
                        ],
                        [
                            "eid1033",
                            "rotateZ",
                            500,
                            491,
                            "linear",
                            "${Group}",
                            '-48deg',
                            '0deg'
                        ],
                        [
                            "eid1034",
                            "rotateZ",
                            991,
                            500,
                            "linear",
                            "${Group}",
                            '0deg',
                            '-23deg'
                        ],
                        [
                            "eid1035",
                            "rotateZ",
                            1491,
                            500,
                            "linear",
                            "${Group}",
                            '-23deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "Snavel": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '29px', '40px', 'auto', 'auto'],
                            id: 'snavel',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/snavel.svg', '0px', '0px']
                        },
                        {
                            rect: ['1px', '-7px', '29px', '46px', 'auto', 'auto'],
                            id: 'toeter1',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/toeter1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '29px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1908,
                    autoPlay: true,
                    labels: {
                        "open": 0,
                        "dicht": 750,
                        "zingen": 1500
                    },
                    data: [
                        [
                            "eid366",
                            "display",
                            0,
                            0,
                            "linear",
                            "${snavel}",
                            'block',
                            'block'
                        ],
                        [
                            "eid367",
                            "display",
                            750,
                            0,
                            "linear",
                            "${snavel}",
                            'block',
                            'none'
                        ],
                        [
                            "eid370",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${snavel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid371",
                            "display",
                            1638,
                            0,
                            "linear",
                            "${snavel}",
                            'block',
                            'none'
                        ],
                        [
                            "eid376",
                            "display",
                            1908,
                            0,
                            "linear",
                            "${snavel}",
                            'none',
                            'none'
                        ],
                        [
                            "eid365",
                            "display",
                            0,
                            0,
                            "linear",
                            "${toeter1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid368",
                            "display",
                            750,
                            0,
                            "linear",
                            "${toeter1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid369",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${toeter1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid372",
                            "display",
                            1638,
                            0,
                            "linear",
                            "${toeter1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid375",
                            "display",
                            1908,
                            0,
                            "linear",
                            "${toeter1}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Bergen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bergen',
                            rect: ['-2px', '3px', '1920px', '725px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Bergen-01.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['814px', '11px', '446px', '296px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '725px']
                        }
                    }
                },
                timeline: {
                    duration: 62,
                    autoPlay: false,
                    data: [
                        [
                            "eid1128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1129",
                            "display",
                            62,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Vuurwerk": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1408px', '38px', '329px', '301px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.21595', '0.21595']],
                            filter: [0, 360, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'vuurwerk8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vuurwerk.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.18541', '0.18541']],
                            rect: ['878px', '-222px', '329px', '301px', 'auto', 'auto'],
                            type: 'image',
                            filter: [0, 131.94745060783, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'vuurwerk9',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/vuurwerk.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 6750,
                    autoPlay: false,
                    data: [
                        [
                            "eid827",
                            "top",
                            0,
                            0,
                            "linear",
                            "${vuurwerk8}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid830",
                            "top",
                            2544,
                            0,
                            "linear",
                            "${vuurwerk8}",
                            '62px',
                            '38px'
                        ],
                        [
                            "eid861",
                            "top",
                            4876,
                            0,
                            "linear",
                            "${vuurwerk8}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid784",
                            "scaleX",
                            0,
                            962,
                            "linear",
                            "${vuurwerk8}",
                            '0.22',
                            '1'
                        ],
                        [
                            "eid766",
                            "scaleX",
                            962,
                            1288,
                            "linear",
                            "${vuurwerk8}",
                            '1',
                            '0.21595'
                        ],
                        [
                            "eid804",
                            "scaleX",
                            2544,
                            923,
                            "linear",
                            "${vuurwerk8}",
                            '0.22',
                            '1.5177'
                        ],
                        [
                            "eid805",
                            "scaleX",
                            3467,
                            1236,
                            "linear",
                            "${vuurwerk8}",
                            '1.5177',
                            '0.21595'
                        ],
                        [
                            "eid868",
                            "scaleX",
                            4876,
                            666,
                            "linear",
                            "${vuurwerk8}",
                            '0.22',
                            '1.31769'
                        ],
                        [
                            "eid869",
                            "scaleX",
                            5542,
                            891,
                            "linear",
                            "${vuurwerk8}",
                            '1.31769',
                            '0.21595'
                        ],
                        [
                            "eid828",
                            "left",
                            0,
                            0,
                            "linear",
                            "${vuurwerk8}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid829",
                            "left",
                            2544,
                            0,
                            "linear",
                            "${vuurwerk8}",
                            '32px',
                            '1408px'
                        ],
                        [
                            "eid867",
                            "left",
                            4876,
                            0,
                            "linear",
                            "${vuurwerk8}",
                            '478px',
                            '478px'
                        ],
                        [
                            "eid780",
                            "scaleX",
                            1335,
                            905,
                            "linear",
                            "${vuurwerk9}",
                            '0.18541',
                            '1.17021'
                        ],
                        [
                            "eid782",
                            "scaleX",
                            2241,
                            759,
                            "linear",
                            "${vuurwerk9}",
                            '1.17021',
                            '0.05393'
                        ],
                        [
                            "eid841",
                            "scaleX",
                            3750,
                            820,
                            "linear",
                            "${vuurwerk9}",
                            '0.18541',
                            '1.17021'
                        ],
                        [
                            "eid842",
                            "scaleX",
                            4571,
                            688,
                            "linear",
                            "${vuurwerk9}",
                            '1.17021',
                            '0.05393'
                        ],
                        [
                            "eid859",
                            "scaleX",
                            5500,
                            680,
                            "linear",
                            "${vuurwerk9}",
                            '0.18541',
                            '1.17021'
                        ],
                        [
                            "eid860",
                            "scaleX",
                            6180,
                            570,
                            "linear",
                            "${vuurwerk9}",
                            '1.17021',
                            '0.05393'
                        ],
                        [
                            "eid781",
                            "scaleY",
                            1335,
                            905,
                            "linear",
                            "${vuurwerk9}",
                            '0.18541',
                            '1.17021'
                        ],
                        [
                            "eid783",
                            "scaleY",
                            2241,
                            759,
                            "linear",
                            "${vuurwerk9}",
                            '1.17021',
                            '0.05393'
                        ],
                        [
                            "eid845",
                            "scaleY",
                            3750,
                            820,
                            "linear",
                            "${vuurwerk9}",
                            '0.18541',
                            '1.17021'
                        ],
                        [
                            "eid846",
                            "scaleY",
                            4571,
                            688,
                            "linear",
                            "${vuurwerk9}",
                            '1.17021',
                            '0.05393'
                        ],
                        [
                            "eid853",
                            "scaleY",
                            5500,
                            680,
                            "linear",
                            "${vuurwerk9}",
                            '0.18541',
                            '1.17021'
                        ],
                        [
                            "eid854",
                            "scaleY",
                            6180,
                            570,
                            "linear",
                            "${vuurwerk9}",
                            '1.17021',
                            '0.05393'
                        ],
                        [
                            "eid850",
                            "left",
                            1335,
                            0,
                            "linear",
                            "${vuurwerk9}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid848",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${vuurwerk9}",
                            '134px',
                            '1128px'
                        ],
                        [
                            "eid858",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${vuurwerk9}",
                            '1128px',
                            '878px'
                        ],
                        [
                            "eid787",
                            "opacity",
                            0,
                            402,
                            "linear",
                            "${vuurwerk8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid789",
                            "opacity",
                            1649,
                            601,
                            "linear",
                            "${vuurwerk8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid806",
                            "opacity",
                            2544,
                            385,
                            "linear",
                            "${vuurwerk8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid807",
                            "opacity",
                            4126,
                            576,
                            "linear",
                            "${vuurwerk8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid865",
                            "opacity",
                            4876,
                            278,
                            "linear",
                            "${vuurwerk8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid866",
                            "opacity",
                            6017,
                            416,
                            "linear",
                            "${vuurwerk8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid803",
                            "filter.hue-rotate",
                            1335,
                            1665,
                            "linear",
                            "${vuurwerk9}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid847",
                            "filter.hue-rotate",
                            3750,
                            1509,
                            "linear",
                            "${vuurwerk9}",
                            '0deg',
                            '131.94745060783deg'
                        ],
                        [
                            "eid855",
                            "filter.hue-rotate",
                            5500,
                            1250,
                            "linear",
                            "${vuurwerk9}",
                            '0deg',
                            '131.94745060783deg'
                        ],
                        [
                            "eid799",
                            "filter.hue-rotate",
                            0,
                            2250,
                            "linear",
                            "${vuurwerk8}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid810",
                            "filter.hue-rotate",
                            2544,
                            2159,
                            "linear",
                            "${vuurwerk8}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid864",
                            "filter.hue-rotate",
                            4876,
                            1557,
                            "linear",
                            "${vuurwerk8}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid851",
                            "top",
                            1335,
                            0,
                            "linear",
                            "${vuurwerk9}",
                            '138px',
                            '138px'
                        ],
                        [
                            "eid849",
                            "top",
                            3750,
                            0,
                            "linear",
                            "${vuurwerk9}",
                            '138px',
                            '-130px'
                        ],
                        [
                            "eid852",
                            "top",
                            5500,
                            0,
                            "linear",
                            "${vuurwerk9}",
                            '-130px',
                            '-222px'
                        ],
                        [
                            "eid791",
                            "opacity",
                            1335,
                            431,
                            "linear",
                            "${vuurwerk9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid793",
                            "opacity",
                            2577,
                            422,
                            "linear",
                            "${vuurwerk9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid843",
                            "opacity",
                            3750,
                            391,
                            "linear",
                            "${vuurwerk9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid844",
                            "opacity",
                            4876,
                            383,
                            "linear",
                            "${vuurwerk9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid856",
                            "opacity",
                            5500,
                            324,
                            "linear",
                            "${vuurwerk9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid857",
                            "opacity",
                            6433,
                            317,
                            "linear",
                            "${vuurwerk9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid770",
                            "display",
                            0,
                            0,
                            "linear",
                            "${vuurwerk9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid771",
                            "display",
                            1335,
                            0,
                            "linear",
                            "${vuurwerk9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid785",
                            "scaleY",
                            0,
                            962,
                            "linear",
                            "${vuurwerk8}",
                            '0.21594',
                            '1'
                        ],
                        [
                            "eid767",
                            "scaleY",
                            962,
                            1288,
                            "linear",
                            "${vuurwerk8}",
                            '1',
                            '0.21595'
                        ],
                        [
                            "eid808",
                            "scaleY",
                            2544,
                            923,
                            "linear",
                            "${vuurwerk8}",
                            '0.21594',
                            '1.5177'
                        ],
                        [
                            "eid809",
                            "scaleY",
                            3467,
                            1236,
                            "linear",
                            "${vuurwerk8}",
                            '1.5177',
                            '0.21595'
                        ],
                        [
                            "eid862",
                            "scaleY",
                            4876,
                            666,
                            "linear",
                            "${vuurwerk8}",
                            '0.21594',
                            '1.31769'
                        ],
                        [
                            "eid863",
                            "scaleY",
                            5542,
                            891,
                            "linear",
                            "${vuurwerk8}",
                            '1.31769',
                            '0.21595'
                        ]
                    ]
                }
            },
            "Boodschap": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'overlay',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['703px', '167px', '640px', '480px', 'auto', 'auto'],
                            display: 'block',
                            id: 'camera_group',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '640px', '450px', 'auto', 'auto'],
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                id: 'cam_bg',
                                opacity: '0.34959349569266',
                                type: 'rect',
                                fill: ['rgba(0,0,0,1)']
                            },
                            {
                                rect: ['0px', '0px', '640px', '480px', 'auto', 'auto'],
                                id: 'div_vid',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,0.00)']
                            },
                            {
                                rect: ['2px', '1px', '640px', '480px', 'auto', 'auto'],
                                id: 'div_img',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,0.00)']
                            },
                            {
                                id: 'camera',
                                symbolName: 'Camera',
                                rect: ['60', '34', '525', '400', 'auto', 'auto'],
                                type: 'rect'
                            },
                            {
                                rect: ['0px', '0px', '640px', '480px', 'auto', 'auto'],
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                id: 'hitarea',
                                opacity: '1',
                                type: 'rect',
                                fill: ['rgba(0,0,0,0.00)']
                            }]
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['1', '-0.04247']],
                            opacity: '0',
                            display: 'block',
                            symbolName: 'Ballon1',
                            rect: ['226px', '454px', '599', '312', 'auto', 'auto'],
                            id: 'ballon1'
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            rect: ['787px', '492px', '599', '312', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'Ballon2',
                            clip: 'rect(51px 599px 312px 0px)',
                            id: 'ballon2'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.05518', '0.05518']],
                            opacity: '0',
                            display: 'block',
                            symbolName: 'Ballon3',
                            rect: ['1151px', '304px', '906', '524', 'auto', 'auto'],
                            id: 'ballon3'
                        },
                        {
                            rect: ['1608px', '752px', '273', '175', 'auto', 'auto'],
                            transform: [[], ['-12']],
                            id: 'versturen',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'envelop',
                                type: 'image',
                                rect: ['0px', '0px', '273px', '175px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/verstuur2.svg', '0px', '0px']
                            },
                            {
                                transform: [[], ['6']],
                                rect: ['27px', '98px', '170px', '36px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                                align: 'center',
                                id: 'verstuur_label',
                                text: 'versturen',
                                cursor: 'pointer',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['220px', '283px', '1497px', '817px', 'auto', 'auto'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'regenboog',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/regenboog.svg', '0px', '0px']
                        },
                        {
                            display: 'none',
                            rect: ['1482px', '79px', '359px', '109px', 'auto', 'auto'],
                            type: 'image',
                            filter: [0, 0, 1, 0, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'opnieuw',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/opnieuw.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'pi',
                            opacity: '0.0085470085470085',
                            cursor: 'pointer',
                            rect: ['1774px', '974px', '132px', '80px', 'auto', 'auto'],
                            display: 'none',
                            font: ['Times New Roman, Times, serif', [67, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            text: 'π'
                        },
                        {
                            rect: ['-954px', '574px', '982px', '869px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.69', '0.69']],
                            id: 'verrassing2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/verrassing.svg', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/oinkbeest-reverse.mp3'],
                            loop: 'loop',
                            id: 'oinkbeest-reverse',
                            rect: ['498', '1022', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            rect: ['652px', '501px', '768px', '520px', 'auto', 'auto'],
                            type: 'image',
                            filter: [0, 360, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'dankjewel',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/dankjewel.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Instructie_webcam',
                            symbolName: 'Instructie_webcam',
                            opacity: '1',
                            rect: ['1232', '-10', '599', '312', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1280px']
                        }
                    }
                },
                timeline: {
                    duration: 23604.211804577,
                    autoPlay: false,
                    labels: {
                        "versturen": 4500,
                        "unicorn": 9000
                    },
                    data: [
                        [
                            "eid1287",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${dankjewel}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1328",
                            "display",
                            7331,
                            0,
                            "linear",
                            "${dankjewel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1313",
                            "display",
                            9903,
                            0,
                            "linear",
                            "${dankjewel}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1284",
                            "display",
                            11000,
                            0,
                            "easeInQuad",
                            "${dankjewel}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1173",
                            "scaleY",
                            250,
                            750,
                            "easeOutQuad",
                            "${ballon3}",
                            '0.05518',
                            '1'
                        ],
                        [
                            "eid1230",
                            "scaleY",
                            4750,
                            1250,
                            "easeInQuad",
                            "${ballon3}",
                            '1',
                            '0.34216'
                        ],
                        [
                            "eid1260",
                            "scaleX",
                            4500,
                            1500,
                            "easeInQuad",
                            "${camera_group}",
                            '1',
                            '0.16875'
                        ],
                        [
                            "eid1279",
                            "filter.hue-rotate",
                            11000,
                            750,
                            "linear",
                            "${dankjewel}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1357",
                            "filter.hue-rotate",
                            11750,
                            750,
                            "linear",
                            "${dankjewel}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid1327",
                            "display",
                            0,
                            0,
                            "linear",
                            "${verrassing2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1326",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${verrassing2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1348",
                            "scaleY",
                            10403,
                            597,
                            "linear",
                            "${dankjewel}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid1297",
                            "scaleY",
                            11000,
                            1500,
                            "linear",
                            "${dankjewel}",
                            '1.2',
                            '0.91'
                        ],
                        [
                            "eid1186",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${overlay}",
                            '0',
                            '0.3760683834552765'
                        ],
                        [
                            "eid1302",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${overlay}",
                            '0.376068',
                            '0.376068'
                        ],
                        [
                            "eid1338",
                            "opacity",
                            7331,
                            554,
                            "linear",
                            "${overlay}",
                            '0.376068',
                            '0.65'
                        ],
                        [
                            "eid1322",
                            "location",
                            9000,
                            2175,
                            "linear",
                            "${verrassing2}",
                            [[-311, 864.5, 0, 0, 0, 0,0],[461.98, 392.79, 3117.79, 3249.82, 867.03, 903.74,1021.27],[2265, 428.5, 0, 0, 0, 0,3119.85]]
                        ],
                        [
                            "eid1165",
                            "scaleY",
                            0,
                            1000,
                            "easeOutQuad",
                            "${ballon1}",
                            '-0.04247',
                            '1'
                        ],
                        [
                            "eid1222",
                            "scaleY",
                            4500,
                            1500,
                            "easeInQuad",
                            "${ballon1}",
                            '1',
                            '0.29215'
                        ],
                        [
                            "eid1164",
                            "scaleX",
                            0,
                            1000,
                            "easeOutQuad",
                            "${ballon1}",
                            '0.05175',
                            '1'
                        ],
                        [
                            "eid1221",
                            "scaleX",
                            4500,
                            1500,
                            "easeInQuad",
                            "${ballon1}",
                            '1',
                            '0.29215'
                        ],
                        [
                            "eid1288",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${regenboog}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1315",
                            "display",
                            9903,
                            0,
                            "linear",
                            "${regenboog}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1283",
                            "display",
                            11000,
                            0,
                            "easeInQuad",
                            "${regenboog}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1184",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${camera_group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1275",
                            "display",
                            6000,
                            0,
                            "easeInQuad",
                            "${camera_group}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1175",
                            "opacity",
                            250,
                            750,
                            "easeOutQuad",
                            "${ballon3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1264",
                            "location",
                            1500,
                            3142,
                            "easeInQuad",
                            "${ballon2}",
                            [[1063.5, 634, 0, 0, 0, 0,0],[1073.5, 626, 0, 0, 0, 0,12.81]]
                        ],
                        [
                            "eid1253",
                            "location",
                            4642,
                            1358,
                            "easeInQuad",
                            "${ballon2}",
                            [[1073.5, 626, 0, 0, 0, 0,0],[1522.26, 657.61, 465.06, 146.2, 532.38, 167.36,452.14],[1754.5, 858, 0, 0, 0, 0,765.97]]
                        ],
                        [
                            "eid1347",
                            "scaleX",
                            10403,
                            597,
                            "linear",
                            "${dankjewel}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid1296",
                            "scaleX",
                            11000,
                            1500,
                            "linear",
                            "${dankjewel}",
                            '1.2',
                            '0.91'
                        ],
                        [
                            "eid1168",
                            "scaleX",
                            500,
                            500,
                            "easeOutQuad",
                            "${ballon2}",
                            '0.07846',
                            '1.02'
                        ],
                        [
                            "eid1225",
                            "scaleX",
                            4642,
                            1358,
                            "easeInQuad",
                            "${ballon2}",
                            '1.02',
                            '0.4858'
                        ],
                        [
                            "eid1380",
                            "opacity",
                            7331,
                            554,
                            "linear",
                            "${dankjewel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1375",
                            "opacity",
                            9000,
                            0,
                            "linear",
                            "${dankjewel}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1374",
                            "opacity",
                            9412,
                            0,
                            "linear",
                            "${dankjewel}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1354",
                            "opacity",
                            10634,
                            366,
                            "linear",
                            "${dankjewel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1305",
                            "top",
                            11000,
                            0,
                            "linear",
                            "${opnieuw}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid1218",
                            "top",
                            1000,
                            2938,
                            "linear",
                            "${versturen}",
                            '752px',
                            '764px'
                        ],
                        [
                            "eid1244",
                            "top",
                            6000,
                            1331,
                            "easeInElastic",
                            "${versturen}",
                            '764px',
                            '742px'
                        ],
                        [
                            "eid1268",
                            "location",
                            1000,
                            2938,
                            "easeInQuad",
                            "${camera_group}",
                            [[1023, 407, 0, 0, 0, 0,0],[1007, 399, 0, 0, 0, 0,17.89]]
                        ],
                        [
                            "eid1269",
                            "location",
                            3938,
                            562,
                            "easeInQuad",
                            "${camera_group}",
                            [[1007, 399, 0, 0, 0, 0,0],[1023, 407, 0, 0, 0, 0,17.89]]
                        ],
                        [
                            "eid1259",
                            "location",
                            4500,
                            1500,
                            "easeInQuad",
                            "${camera_group}",
                            [[1023, 407, 0, 0, 0, 0,0],[1208.92, 108.37, 419.52, 253.31, 633.23, 382.36,448.07],[1755, 849, 0, 0, 0, 0,1371.46]]
                        ],
                        [
                            "eid1261",
                            "scaleY",
                            4500,
                            1500,
                            "easeInQuad",
                            "${camera_group}",
                            '1',
                            '0.16875'
                        ],
                        [
                            "eid1257",
                            "display",
                            6000,
                            0,
                            "easeInQuad",
                            "${ballon1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1388",
                            "display",
                            0,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1389",
                            "display",
                            7331,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1318",
                            "opacity",
                            10634,
                            366,
                            "linear",
                            "${regenboog}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1332",
                            "opacity",
                            7885,
                            0,
                            "linear",
                            "${opnieuw}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1217",
                            "left",
                            1000,
                            2938,
                            "linear",
                            "${versturen}",
                            '1608px',
                            '1658px'
                        ],
                        [
                            "eid1243",
                            "left",
                            6000,
                            1331,
                            "easeInElastic",
                            "${versturen}",
                            '1658px',
                            '2084px'
                        ],
                        [
                            "eid1298",
                            "scaleX",
                            11000,
                            1500,
                            "linear",
                            "${regenboog}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid1266",
                            "location",
                            1000,
                            500,
                            "easeInQuad",
                            "${ballon3}",
                            [[1604, 566, 0, 0, 0, 0,0],[1604.07, 567, 0, 0, 0, 0,1]]
                        ],
                        [
                            "eid1387",
                            "location",
                            1500,
                            1326,
                            "linear",
                            "${ballon3}",
                            [[1604.07, 567, 1.79, 2.68, 0, 0,0],[1610.76, 574.3, 0, 0, 6.23, 8.58,9.91]]
                        ],
                        [
                            "eid1423",
                            "location",
                            2826,
                            1924,
                            "linear",
                            "${ballon3}",
                            [[1610.76, 574.3, 2.23, 3.07, 0, 0,0],[1612, 578, 0, 0, 0, 0,3.92],[1604, 566, 0, 0, 0, 0,18.34]]
                        ],
                        [
                            "eid1254",
                            "location",
                            4750,
                            1250,
                            "easeInQuad",
                            "${ballon3}",
                            [[1604, 566, 0, 0, 0, 0,0],[1821.88, 583.03, 126.39, 221.58, 116.17, 203.66,230.37],[1766, 850, 0, 0, 0, 0,510.38]]
                        ],
                        [
                            "eid1256",
                            "display",
                            6000,
                            0,
                            "easeInQuad",
                            "${ballon3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1382",
                            "scaleX",
                            4500,
                            1500,
                            "linear",
                            "${versturen}",
                            '1',
                            '1.35'
                        ],
                        [
                            "eid1299",
                            "scaleY",
                            11000,
                            1500,
                            "linear",
                            "${regenboog}",
                            '1',
                            '1.09'
                        ],
                        [
                            "eid1171",
                            "scaleX",
                            250,
                            750,
                            "easeOutQuad",
                            "${ballon3}",
                            '0.05518',
                            '1'
                        ],
                        [
                            "eid1229",
                            "scaleX",
                            4750,
                            1250,
                            "easeInQuad",
                            "${ballon3}",
                            '1',
                            '0.34216'
                        ],
                        [
                            "eid1179",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${ballon1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1262",
                            "location",
                            1000,
                            2938,
                            "easeInQuad",
                            "${ballon1}",
                            [[525.5, 610, 0, 0, 0, 0,0],[509.5, 632, 0, 0, 0, 0,27.2]]
                        ],
                        [
                            "eid1263",
                            "location",
                            3938,
                            562,
                            "easeInQuad",
                            "${ballon1}",
                            [[509.5, 632, 0, 0, 0, 0,0],[525.5, 610, 0, 0, 0, 0,27.2]]
                        ],
                        [
                            "eid1252",
                            "location",
                            4500,
                            1500,
                            "easeInQuad",
                            "${ballon1}",
                            [[525.5, 610, 0, 0, 0, 0,0],[1730.82, 539.32, 897.64, 180.98, 960.24, 193.6,1211.03],[1765.5, 860, 0, 0, 0, 0,1646.56]]
                        ],
                        [
                            "eid1383",
                            "scaleY",
                            4500,
                            1500,
                            "linear",
                            "${versturen}",
                            '1',
                            '1.35'
                        ],
                        [
                            "eid1255",
                            "display",
                            6000,
                            0,
                            "easeInQuad",
                            "${ballon2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1169",
                            "scaleY",
                            500,
                            500,
                            "easeOutQuad",
                            "${ballon2}",
                            '0.07846',
                            '1'
                        ],
                        [
                            "eid1226",
                            "scaleY",
                            4642,
                            1358,
                            "easeInQuad",
                            "${ballon2}",
                            '1',
                            '0.4858'
                        ],
                        [
                            "eid1304",
                            "left",
                            11000,
                            0,
                            "linear",
                            "${opnieuw}",
                            '1482px',
                            '1482px'
                        ],
                        [
                            "eid1377",
                            "display",
                            7331,
                            0,
                            "linear",
                            "${pi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1376",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${pi}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1379",
                            "opacity",
                            7331,
                            322,
                            "linear",
                            "${pi}",
                            '0.0085470085470085',
                            '1'
                        ],
                        [
                            "eid1286",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${opnieuw}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1331",
                            "display",
                            7331,
                            0,
                            "linear",
                            "${opnieuw}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1285",
                            "display",
                            11000,
                            0,
                            "easeInQuad",
                            "${opnieuw}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1177",
                            "opacity",
                            500,
                            500,
                            "easeOutQuad",
                            "${ballon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1216",
                            "opacity",
                            804,
                            196,
                            "linear",
                            "${versturen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1337",
                            "top",
                            7331,
                            554,
                            "linear",
                            "${dankjewel}",
                            '471px',
                            '311px'
                        ],
                        [
                            "eid1340",
                            "top",
                            10403,
                            597,
                            "linear",
                            "${dankjewel}",
                            '311px',
                            '501px'
                        ],
                            [ "eid1323", "trigger", 9184.6198045768, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${oinkbeest-reverse}', [] ] ]
                    ]
                }
            },
            "Ballon3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bg',
                            rect: ['0px', '0px', '906px', '524px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spreekballon3.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['238px', '137px', '463px', '243px', 'auto', 'auto'],
                            id: 'text',
                            text: 'Gebruik daarvoor <br>deze tekstballonnetjes. <br>Als je het leuk vindt kun je ook een selfie meesturen. Groetjes Rick en Hilde',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '906px', '524px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Ballon2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '599px', '312px', 'auto', 'auto'],
                            id: 'bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spreekballon2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'text',
                            text: 'Dat kan!',
                            align: 'center',
                            rect: ['174px', '69px', '280px', '150px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '312px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Ballon1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '599px', '312px', 'auto', 'auto'],
                            id: 'bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spreekballon1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'text',
                            text: 'Wil je een berichtje achterlaten voor Siene?',
                            align: 'center',
                            rect: ['82px', '63px', '435px', '162px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '312px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Camera": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'img_camera',
                            rect: ['136px', '98px', '273px', '208px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.37178', '1.37178']],
                            fill: ['rgba(0,0,0,0)', 'images/camera.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '525px', '400px']
                        }
                    }
                },
                timeline: {
                    duration: 1722,
                    autoPlay: false,
                    labels: {
                        "effect": 1278
                    },
                    data: [
                        [
                            "eid1408",
                            "scaleY",
                            1278,
                            444,
                            "linear",
                            "${img_camera}",
                            '1.37178',
                            '0.8'
                        ],
                        [
                            "eid1407",
                            "scaleX",
                            1278,
                            444,
                            "linear",
                            "${img_camera}",
                            '1.37178',
                            '0.8'
                        ]
                    ]
                }
            },
            "Instructies": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-282px', '-36px', '1041px', '416px', 'auto', 'auto'],
                            id: 'spreekballon2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spreekballon2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text',
                            text: 'Ga op onderzoek uit in in de wereld van Siene! Kijk en klik lekker rond. Staat je geluid aan?',
                            align: 'center',
                            rect: ['64px', '64px', '378px', '220px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '312px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Instructie_webcam": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-180'], [0, 0, 0], [1, 1, 1]],
                            id: 'spreekballon1',
                            type: 'image',
                            rect: ['134px', '-38px', '599px', '312px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spreekballon1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text2',
                            text: 'Nog even je webcam toestemming geven...',
                            align: 'center',
                            rect: ['262px', '84px', '350px', '118px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '312px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Credits": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'spreekballon3',
                            type: 'image',
                            rect: ['0px', '0px', '906px', '524px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/spreekballon3.svg', '0px', '0px']
                        },
                        {
                            rect: ['208px', '150px', '516px', '116px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: 'Ontwerp en realisate: Rick &amp; Hilde, 2014<br>Muziek: Elly &amp; Rikkert - Het Oinkbeest, 1972',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '906px', '524px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-517127520");

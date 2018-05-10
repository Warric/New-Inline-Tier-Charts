// ==UserScript==
// @name           New Inline Tier Charts
// @namespace      DusanAndWarric
// @description    This will provide an inline tier chart for Dawn of the Dragons.Maps created by Brayden.Tiers collected by Warric.
// @include        http://www.27thdimension.com/dotd/tierChartsStandalone.html
// @include        http://www.kongregate.com/games/5thplanetgames/dawn-of-the-dragons*
// @include        https://www.kongregate.com/games/5thplanetgames/dawn-of-the-dragons*
// @include        http://www.kongregate.com/games/5thPlanetGames/dawn-of-the-dragons*
// @include        https://www.kongregate.com/games/5thPlanetGames/dawn-of-the-dragons*
// @include        http://kongregate.com/games/5thplanetgames/dawn-of-the-dragons*
// @include        https://kongregate.com/games/5thplanetgames/dawn-of-the-dragons*
// @include        http://kongregate.com/games/5thPlanetGames/dawn-of-the-dragons*
// @include        https://kongregate.com/games/5thPlanetGames/dawn-of-the-dragons*
// @include        http://www.dawnofthedragons.com/game*
// @include        http://www.dawnofthedragons.com/
// @include        http://www.dawnofthedragons.com
// @include        http://dawnofthedragons.com/game*
// @include        https://apps.facebook.com/dawnofthedragons*
// @include        http://web1.dawnofthedragons.com/live_standalone*
// @include        *newgrounds.com/portal/view/609826*
// @include        http://dawnofthedragons.com/
// @include        https://armorgames.com/dawn-of-the-dragons-game/13509*
// @include        https://www.armorgames.com/dawn-of-the-dragons-game/13509*
// @include        https://armorgames.com/play/13509/dawn-of-the-dragons*
// @version        4.0.0
// @grant          none
// ==/UserScript==
(function() {
    "use strict";
    class NITCSplitter {
        constructor() {
            this.element = document.createElement('li');
        }
    };
    class NITCButton extends NITCSplitter {
        constructor(title, func) {
            super();
            this.element.appendChild(document.createElement('button'));
            this.element.firstChild.appendChild(document.createTextNode(title));
            this.element.onclick = func;
        }
    };
    class NITCButtonWithContent extends NITCButton {
        constructor(title, background, color) {
            super(title, function() {
                let status = this.getAttribute("class") === "active" ? "" : "active";
                for (let counter = 0; counter < this.parentNode.childNodes.length; counter++) {
                    this.parentNode.childNodes[counter].setAttribute("class", "");
                }
                this.setAttribute("class", status);
                this.parentNode.setAttribute("active", status);
            });
            this.element.appendChild(document.createElement('div'));
            if (background && color) {
                this.element.lastChild.setAttribute('style', 'background:'+background+';color:white');
            } else if (background) {
                this.element.lastChild.setAttribute('style', 'background:'+color);
            } else if (color) {
                this.element.lastChild.setAttribute('style', 'color:white');
            }
        }
    };
    class NITCTable extends NITCButtonWithContent {
        constructor(title, columns, lines, comment, url, background, color) {
            super(title, background, color);
            let table = document.createElement('table');
            let oversizedLastColumn = columns[columns.length-1] === 'All Tiers';
            let width = Math.floor(100 / (oversizedLastColumn ? columns.length + 2 : columns.length));
            table.appendChild(document.createElement('thead'));
            table.lastChild.appendChild(document.createElement('tr'));
            for (let column=0; column < columns.length; column++) {
                table.lastChild.lastChild.appendChild(document.createElement('th'));
                table.lastChild.lastChild.lastChild.setAttribute('style', 'width:' + width + '%');
                table.lastChild.lastChild.lastChild.appendChild(document.createTextNode(columns[column]));
            }
            if (oversizedLastColumn) {
                table.lastChild.lastChild.lastChild.setAttribute('style', 'width:' + (3 * width) + '%');
            }
            table.appendChild(document.createElement('tbody'));
            for (let line = 0; line < lines.length; line++) {
                table.lastChild.appendChild(document.createElement('tr'));
                for (let column = 0; column < lines[line].length; column++) {
                    table.lastChild.lastChild.appendChild(document.createElement('td'));
                    table.lastChild.lastChild.lastChild.appendChild(document.createTextNode((lines[line][column]+'').replace(/\//g, ' / ')));
                }
            }
            this.element.lastChild.appendChild(table);
            if(url) {
                this.element.lastChild.appendChild(document.createElement('img'));
                this.element.lastChild.lastChild.setAttribute('alt', title);
                this.element.lastChild.lastChild.setAttribute('src', url);
            }
            if(comment) {
                this.element.lastChild.appendChild(document.createElement('p'));
                this.element.lastChild.lastChild.appendChild(document.createTextNode (comment));
            }
        }
    };
    class NITCImage extends NITCButtonWithContent {
        constructor(title, url, background, color) {
            super(title, background, color);
            this.element.lastChild.appendChild(document.createElement('img'));
            this.element.lastChild.lastChild.setAttribute('alt', title);
            this.element.lastChild.lastChild.setAttribute('src', url);
        }
    };
    (function(list) {
        let element = document.createElement('ul');
        element.appendChild((new NITCButton("\u21C6", function() {
                this.parentNode.setAttribute("class", (this.parentNode.getAttribute("class") === "right" ? "" : "right"));
            }))
            .element);
        element.appendChild((new NITCSplitter()).element);
        element.setAttribute('id', 'NewInlineTierCharts');
        for (let item = 0; item < list.length; item++) {
            if(!list[item] || !list[item].element) {
                console.log(item+" failed to have an element");
                continue;
            }
            element.appendChild(list[item].element);
        }
        document.getElementsByTagName('body')[0].appendChild(element);
        document.getElementsByTagName('head')[0].appendChild((function() {
            let styles = document.createElement("style");
            styles.setAttribute("type", "text/css");
            styles.setAttribute("id", "NewInlineTierChartsStyles");
            styles.appendChild(document.createTextNode(
                "#NewInlineTierCharts p, #NewInlineTierCharts button, #NewInlineTierCharts table{font-size:11px;font-family: monospace;text-align: center;}" +
                "#NewInlineTierCharts{position:fixed;top:0;left:-65px;z-index:100000;max-height:100%;}" +
                "#NewInlineTierCharts:hover,#NewInlineTierCharts[active=\"active\"]{left:0;}" +
                "#NewInlineTierCharts.right{left:auto;right:-65px;}" +
                "#NewInlineTierCharts.right:hover,#NewInlineTierCharts.right[active=\"active\"]{right:0;}" +
                "#NewInlineTierCharts,#NewInlineTierCharts li{margin:0;padding:0;list-style: none;display:block;}" +
                "#NewInlineTierCharts li{min-height:0.25em;}" +
                "#NewInlineTierCharts img{width:auto;height:auto;max-width:100%;display:block;background-color:#fff;}" +
                "#NewInlineTierCharts div{padding:1px;width:auto;max-height:100%;display:none;overflow-x:hidden;overflow-y:auto;background:#fff;}" +
                "#NewInlineTierCharts button{border-radius:2px;background:#fff;height:auto;font-size: 13px;padding:1px;text-align: center;box-sizing: border-box;text-align:center;color:#000;border: 1px solid #000;width:75px;display:block;background-color:#fff;background-image:linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.2),rgba(0,0,0,0.1));font-weight:normal;line-height:normal;}" +
                "#NewInlineTierCharts .active div{display:block;position:fixed;top:0;left:75px;z-index:100000;}" +
                "#NewInlineTierCharts.right .active div{left:auto;right:75px;}" +
                "#NewInlineTierCharts .active button{background:#222;color:#fff;}" +
                "#NewInlineTierCharts table{max-width:100%;text-align:center;border-collapse:collapse;padding:1px;}" +
                "#NewInlineTierCharts td,#NewInlineTierCharts th{border:1px #ddd solid;}" +
                "#NewInlineTierCharts thead > tr > th{border-bottom:1px #000 solid;font-weight:bold;}" +
                "#NewInlineTierCharts tbody > tr > td{border-top:1px #000 solid;border-bottom:1px #000 solid;}" +
                "#NewInlineTierCharts tbody > tr > td:nth-of-type(1){text-align:left;}" +
                "#NewInlineTierCharts tbody > tr:nth-of-type(2n-1) > td{background:rgba(0,0,0,0.2);}"
            ));
            return styles;
        })());
        document.getElementsByTagName('head')[0].appendChild((function() {
            let styles = document.createElement("style");
            styles.setAttribute("type", "text/css");
            styles.setAttribute("id", "NewInlineTierChartsStylesResize");
            return styles;
        })());
        window.onresize = function() {
            document.getElementById("NewInlineTierChartsStylesResize")
                .innerText = "#NewInlineTierCharts .active div{max-width:" + Math.max(200, Math.min(600, window.innerWidth - 150)) + "px;}";
        };
        window.onresize();
    }([
        new NITCTable(
            'Z1-9',
            ['Name', 'AP', '2/9'],
            [
                ['Alice', '300k', '1.23m'],
                ['Ataxes', '200k', '480k'],
                ['Baroness', '1.36m', '5.576m'],
                ['Bellarius', '1.8m', '5.576m'],
                ['Bloodmane', '700k', '1.68m'],
                ['Bogstench', '1.8m', '2.25m'],
                ['Briareus', '450k', '1.08m'],
                ['Erakka-Sak', '1.24m', '5.084m'],
                ['Erebus', '600k', '750k'],
                ['Gravlok', '500k', '2.2m'],
                ['Grimsly', '1.44m', '5.904m'],
                ['Grune', '200k', '880k'],
                ['Guilbert', '2.2.m', '2.75m'],
                ['Gunnar', '1.2m', '2.88m'],
                ['Hargamesh', '1.8m', '4.32m'],
                ['Horgrak', '15k', '36k'],
                ['Hydra', '650k', '2.86m'],
                ['Ironclad', '1m', '2.4m'],
                ['Kalaxia', '1.6m', '2.08m'],
                ['Kang-Gsod', '950k', '4.18m'],
                ['Kerberos', '700k', '2.87m'],
                ['Lurking Horror', '350k', '1.54m'],
                ['Maraak', '1.5m', '3.6m'],
                ['Mardachus', '2.2m', '2.86m'],
                ['Mazalu', '100k', '410k'],
                ['Mesyra', '4m', '5m'],
                ['Nalagarst', '1.4m', '1.82m'],
                ['Nidhogg', '1.04m', '4.264m'],
                ['Nimrod', '4.8m', '6m'],
                ['Phaedra', '5.6m', '7m'],
                ['Rift', '1.25m', '5.5m'],
                ['Scylla', '500k', '2.05k'],
                ['Sir Cai', '1.4m', '1.75m'],
                ['Sisters', '2.4m', '3m'],
                ['Stein', '800k', '3.52m'],
                ['Tainted Erebus', '1m', '1.25m'],
                ['Tenebra', '4m', '5.2m'],
                ['Tyranthius', '1.2m', '1.56m'],
                ['Ulfrik', '2m', '2.5m'],
                ['Valanazes', '4.8m', '6.24m'],
                ['Wexxa', '1.1m', '4.84m'],
                ['Zombie', '900k', '3.69m']
            ]
        ),
        new NITCTable(
            'Small',
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['Alchemist', '400m', '400m', '1.5b', '400m/500m/650m/800m/1b/1.25b/1.5b'],
                ['Bad Blood', '534m', '1.5b', '5b', '500m/800m/1b/1.25b/1.5b/2b/2.5b/5b'],
                ['Bakku', '440m', '500m', '2b', '400m/500m/650m/800m/1b/1.25b/1.5b/2b'],
                ['Bloodsuckers', '1.75b', '2.5b', '10b', '2b/2.5b/5b/7.5b/10b'],
                ['Garganoth', '34.67b', '70b', '1.9t', '35b/40b/50b/70b/80b/130b/180b/275b/380b/650b/900b/1t/1.9t'],
                ['Krugnug', '80m', '100m', '1b', '100m/200m/300m/400m/500m/600m/700m/800m/900m/1t'],
                ['Lair', '57.7m', '150m', '675m', '105m/135m/150m/225m/300m/375m/450m/525m/600m/675m'],
                ['Nereidon', '250m', '300m', '5b', '240m/300m/400m/750m/1b/1.5b/2.5b/5b'],
                ['Rekkr 2', '360m', '400m', '3.5b', '300m/400m/500m/720m/1b/1.5b/2.5b/3.5b'],
                ['Serpina', '6.25m', '24.4m', '24.4m', '7.5m/9.4m/11.3m/13.2m/15m/16.9m/18.8m/20.7m/22.5m/24.4m'],
                ['Solus', '2.5b', '3b', '10b', '1b/3b/5b/6b/7b/8b/10b'],
                ['Snow Dragon', '1.5b', '2.5b', '7.5b', '1.5b/2b/2.5b/5b/7.5b'],
                ['Thaltherda', '150m', '180m', '1b', '120m/180m/225m/240m/300m/500m/750m/1b'],
                ['Valtrias', '500m', '500m', '5b', '500m/750m/1b/1.25b/1.5b/2b/2.5b/5b'],
                ['Zugen', '200m', '240m', '1.5b', '180m/225m/240m/300m/400m/750m/1b/1.5b']
            ],
            "OS values below AP and Tiers far below AP are not included. Script by Dusan, Idrinth and Warric"
        ),
        new NITCTable(
            "Medium",
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['Ascendant\'s Echo', '3b', '3b', '18b', '3b/5b/7.5b/10b/15b/18b'],
                ['BH LT', '50b', '55b/100b', '900b', '50b/55b/75b/100b/150b/225b/300b/400b/400b/500b/800b/900b'],
                ['Damned Shade', '2.5b', '2.5b', '15b', '2.5b/5b/7.5b/10b/15b'],
                ['Doppelganger', '480m', '1b', '2.5b', '500m/750m/1b/1.25b/1.5b/2b/2.5b'],
                ['Dryads', '3.2b', '5b', '30b', '3b/4b/5b/7.5b/10b/15b/20b/25b/30b'],
                ['Firecracker', '4.22t', '5/10/15t', '70t', '5t/10t/15t/30t/50t/70t'],
                ['Gulkinari', '150m', '180m', '1.5b', '135m/150m/180m/225m/300m/550m/900m/1.5b'],
                ['Hurkus', '113m', '150m', '900m', '90m/135m/150m/180m/225m/300m/550m/900m'],
                ['Korxun', '200m', '300m', '5b', '300m/400m/750m/1b/1.5b/2.5b/5b'],
                ['Lost', '5b', '7.5b', '20b', '5b/7.5b/10b/15b/20b'],
                ['Punishment', '1.2b', '2b/3b', '10b', '1b/1.5b/2b/2.5b/3b/3.5b/4b/5b/10b'],
                ['Ragunt', '255m', '310m', '5b', '225m/310m/400m/510m/750m/1b/1.5b/2.5b/5b'],
                ['Riddler', '80m', '100m', '1b', '100m/200m/300m/400m/500m/600m/700m/800m/900m/1b'],
                ['Rudaru', '368m', '370m', '1.5b', '300m/500m/750m/1b/1.5b'],
                ['Shadow', '350m', '350m', '1b', '300m/500m/750m/1b'],
                ['Thurmavus', '29.3b', '1t', '1t', '25b/30b/35b/40b/50b/80b/125b/175b/250b/350b/500b/750b/900b/1t'],
                ['Tisiphone', '75m', '150m', '675m', '75m/105m/135m/150m/225m/300m/375m/450m/525m/600m/675m'],
                ['Workshop', '2.6t', '10t', '30t', '1.5t/3t/8t/10t/20t/30t']
            ],
            "OS values below AP and Tiers far below AP are not included. Script by Dusan, Idrinth and Warric"
        ),
        new NITCTable(
            "Large",
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['Blood Dancer', '1b', '1b', '8b', '1b/1.5b/2b/2.5b/3b/3.5b/4b/5b/8b'],
                ['Drulcharus', '125m', '300m', '8b', '300m/400m/750m/1b/1.5b/2.5b/5b/8b'],
                ['Echo Raider', '2t', '12t', '40t', '1.5t/3t/8t/12t/25t/40t'],
                ['Gigantomachy', '500m', '500m', '8b', '500m/750m/1b/1.5b/2b/2.5b/5b/8b'],
                ['Green Killers', '250m', '300m', '5b', '300m/400m/500m/750m/1b/1.5b/2b/2.5b/3.5b/5b'],
                ['Initiates', '4b', '4b', '30b', '4b/5b/6b/8b/10b/12.5b/15b/20b/25b/30b'],
                ['Leonine', '80m', '100m', '1b', '100m/200m/300m/400m/500m/600m/700m/800m/900m/1b'],
                ['Lord Hoton', '3.5b', '4b', '25b', '3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b'],
                ['Malleus', '100m', '150m', '900m', '100m/150m/225m/300m/375m/450m/525m/600m/900m'],
                ['Present Bearer', '600m', '750m', '10b', '500m/750m/1b/1.5b/2b/2.5b/3b/3.5b/4b/4.5b/5b/10b'],
                ['Rathanas', '1.3t', '8t', '15t', '1.5t/3t/8t/15t'],
                ['Sporeforms', '2b', '3b', '20b', '2b/2.25b/2.5b/2.75b/3b/4b/5b/6b/8b/10b/12.5b/15b/20b'],
                ['Teremarthu', '120m', '120m', '1b', '100m/200m/300m/400m/500m/600m/700m/800m/900m/1b'],
                ['Thaw of Elvigar', '3b', '3b', '25b', '3b/4b/5b/6b/8b/10b/12.5b/15b/20b/25b'],
                ['Umbra Spider', '65b', '130b', '2.2t', 'TBD (no data available)'],
                ['Verkiteia', '112.5m', '250m', '1.5b', '100m/175m/250m/300m/375m/450m/525m/600m/900m/1.5b'],
                ['Z\'ralk\'thalat', '175m', '200m', '1b', '100m/200m/300m/400m/500m/600m/700m/800m/900m/1b']
            ],
            "* OS values below AP and tiers far below AP is not included. Script by Dusan,  Idrinth and Warric*"
        ),
        new NITCTable(
            "Epic",
             ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
             [
                ['Burbata', '10m', '100m', '1b', '100m/200m/300m/400m/500m/600m/700m/800m/900m/1b'],
                ['Colossus', '240m', '1.4b', '2b', '200m/300m/400m/500m/600m/700m/800m/900m/1b/1.4b/2b'],
                ['Darkness', '160m', '3b', '5b', '200m/300m/500m/750m/1b/1.5b/2b/2.5b/3b/4b/5b'],
                ['Forest', '1.1b', '1.25b', '40b', '1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b/4b/5b/6b/8b/10b/12.5b/15b/20b/25b/30b/35b/40b'],
                ['Frog-Men', '128m', '400m', '3b', '400m/500m/600m/700m/800m/900m/1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b'],
                ['Jack', '6m', '12m', '576m', '12m/60m/72m/144m/216m/288m/360m/432m/504m/576m'],
                ['Jack\'s Revenge', '30m', '60m', '3b', '60m/120m/180m/240m/300m/360m 720m/1.5b/3b'],
                ['Jershan\'thurn', '2.5b', '2.5b', '50b', '2.5b/3b/4b/5b/6b/8b/10b/12.5b/15b/20b/25b/30b/40b/50b'],
                ['Marius', '80m', '100m', '1b', '100m/200m/300m/400m/500m/600m/700m/800m/900m/1b'],
                ['Murgrux', '200m', '3.5b', '5b', '500m/750m/1b/1.5b/2b/2.5b/3b/3.5b/4b/4.5b/5b'],
                ['Odious Pods', '1.75b', '3b', '50b', '1.5b/2b/3b/4b/5b/7.5b/10b/15b/20b/25b/30b/40b/50b'],
                ['Rannveig', '120m', '3b', '3b', '100m/200m/300m/400m/500m/600m/700m/800m/900m/1b/2b/3b'],
                ['Reaper Mantis', '2b', '2b', '60b', '2b/2.5b/3b/4b/5b/6b/8b/10b/12.5b/15b/20b/25b/30b/40b/50b/60b'],
                ['Satyr', '3b', '3b', '50b', '3b/4b/5b/6b/8b/10b/12.5b/15b/20b/25b/30b/40b/50b'],
                ['Shaar', '120m', '300m', '8b', '300m/400m/750m/1b/1.5b/2.5b/5b/8b'],
                ['Shadow Assassins', '15.6b', '17b', '2t', 'TBD (insufficient data available)'],
                ['Stormship', '1.5b', '1.5b', '25b', '1.5b/2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b'],
                ['Underworld', '1.04t', '8t', '30t', '800b/1.5t/3t/8t/10t/20t/30t'],
                ['Valley of Death', '176m', '3b', '8b', '500m/750m/1b/1.5b/2b/2.5b/3b/3.5b/4b/4.5b/5b/6.5b/8b'],
                ['Void Queen', '1.69t', '12t', '40t', '1.5t/3t/8t/12t/25t/40t'],
                ['Yydian', '100m', '250m', '1.5b', '125m/175m/250m/300m/375m/450m/525m/625m/900m/1.5b']
            ],
            "* OS values below AP and tiers far below AP is not included. Script by Dusan,  Idrinth and Warric*"
        ),
        new NITCTable(
            "Colossal",
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['Abomination', '360m', '400m', '20b', '300m/400m/500m/600m/700m/800m/900m/1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b/4b/5b/6b/8b/10b/12.5b/15b/20b'],
                ['Ancients\' Engine', '3.2b', '5b', '100b', '1b/5b/10b/15b/20b/25b/30b/40b/50b/60b/80b/100b'],
                ['Badlands', '900m', '1.25b', '50b', '1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b/4b/5b/6b/8b/10b/12.5b/15b/20b/25b/30b/35b/40b/50b'],
                ['Balor', '6b', '10b', '200b', '5b/10b/12b/15b/20b/25b/30b/40b/50b/60b/80b/100b/150b/200b'],
                ['Beetle', '1.3t', '2.5t', '80t', '1t/2.5t/5t/10t/20t/40t/60t/80t'],
                ['Behemoth', '800m', '1b', '40b', '800m/900m/1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b/4b/5b/6b/8b/10b/12.5b/15b/20b/25b/30b/35b/40b'],
                ['Cannibal', '240m', '250m', '3.5b', '250m/300m/375m/480m/580m/660m/900m/1.5b/2b/2.8b/3.5b'],
                ['Caracalla', '200m', '400m', '3b', '400m/500m/600m/700m/800m/900m/1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b'],
                ['Clockwork Dragon', '280m', '300m', '10b', '300m/400m/750m/1b/1.5b/2b/2.5b/3b/4b/5b/6b/8b/10b'],
                ['Craenaestra', '2.08t', '12t', '150t', '3t/8t/12t/25t/50t/100t/150t'],
                ['Fear', '12.5b', '100b', '200b', '12.5b/15b/17.5b/20b/25b/30b/40b/50b/60b/70b/80b/90b/100b/150b/200b'],
                ['Frozen Spire', '2b', '5b', '60b', '1b/5b/10b/15b/20b/30b/40b/50b/60b'],
                ['Gateway', '1.67t', '10t', '20t', '200b/500b/800b/1t/2t/5t/10t/20t'],
                ['Hellemental', '300m', '300m', '10b', '300m/500m/750m/1b/1.5b/2b/2.5b/3b/4b/5b/6b/8b/10b'],
                ['Kanehuar', '400m', '500m', '15b', '500m/750m/1b/1.5b/2b/2.5b/3b/4b/5b/6b/8b/10b/12.5b/15b'],
                ['Karkata', '380m', '400m', '15b', '300m/400m/500m/600m/700m/800m/900m/1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b/4b/5b/6b/8b/10b/12.5b/15b'],
                ['Kr\'xunara', '250m', '300m', '10b', '300m/400m/750m/1b/1.5b/2b/2.5b/3b/4b/5b/6b/8b/10b'],
                ['Ruzzik', '220m', '500m', '3b', '300m/400m/500m/600m/700m/800m/900m/1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b'],
                ['Siculus', '4.25m', '400m', '2b', '400m/500m/600m/700m/800m/900m/1b/2b'],
                ['Stampede', '4.5b', '5b', '150b', '5b/10b/15b/20b/25b/30b/40b/50b/60b/80b/100b/150b'],
                ['Vortex', '205m', '400m', '3.5b', '200m/300m/400m/500m/600m/700m/800m/900m/1b/1.5b/2b/2.5b/3b/3.5b'],
                ['Way Warden', '460m', '500m', '25b', '400m/500m/600m/700m/800m/880m/1b/1.25b/1.5b/1.75b/2b/2.25b/2.5b/2.75b/3b/4b/5b/6b/8b/10b/12.5b/15b/20b/25b'],
                ['Xerkara', '260m', '300m', '8b', '300m/400m/750m/1b/1.5b/2.5b/5b/8b']
            ],
            "* OS values below AP and tiers far below AP is not included. Script by Dusan,  Idrinth and Warric*"
        ),
        new NITCTable(
            "Gigantic",
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['C.Work Destroyer', '10.57t', '30t', '1q', '10t/15t/20t/30t/40t/50t/100t/200t/400t/600t/1q'],
                ['D. Dreams', '1.25b', '3b', '100b', '1.5b/2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/40b/50b/60b/70b/80b/90b/100b'],
                ['Drakontos', '5b', '5b', '200b', '5b/6b/7b/8b/9b/10b/12.5b/15b/20b/25b/30b/40b/50b/60b/70b/80b/90b/100b/150b/200b'],
                ['Engines of War', '750m', '3b', '40b', '1b/1.5b/2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/35b/40b'],
                ['Euryino', '2.25b', '3b', '150b', '2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/40b/50b/60b/70b/80b/90b/100b/150b'],
                ['Gataalli', '937.5m', '2b', '40b', '1b/1.5b/2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/40b'],
                ['Horthania', '1.25b', '3b', '75b', '1.5b/2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/40b/50b/60b/75b'],
                ['Hybrid', '1.84b', '3b', '100b', '2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/40b/50b/60b/70b/80b/90b/100b'],
                ['Imryx', '450m', '2.5b', '25b', '500m/750m/1b/1.25b/1.5b/1.75b/2b/2.5b/3b/3.5b/4b/4.5b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b'],
                ['Jormungan', '1.875b', '3b', '100b', '2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/40b/50b/60b/70b/80b/90b/100b'],
                ['Konungar', '10b', '10b', '300b', '10b/15b/20b/30b/40b/50b/75b/100b/150b/200b/300b'],
                ['Lady Vas\'ok', '23b', '50b', '15t', '20b/40b/50b/80b/85b/130b/200b/300b/400b/700b/1t/1.3t/2.2t/8t/15t'],
                ['Pit of Bone', '569b', '5t', '40t', '500b/800b/1t/2t/5t/10t/20t/40t'],
                ['Red Snow', '2.084b', '3b', '150b', '2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/40b/50b/60b/70b/80b/90b/100b/125b/150b'],
                ['Trekex', '625m', '4b', '20b', '750m/1b/1.25b/1.5b/1.75b/2b/2.5b/3b/3.5b/4b/4.5b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b'],
                ['Wilds', '812.5m', '3b', '40b', '1b/1.5b/2b/2.5b/3b/4b/5b/6b/7b/8b/9b/10b/12.5b/15b/17.5b/20b/25b/30b/40b'],
                ['Winter Wyrm', '25b', '25b', '500b', '25b/30b/40b/50b/75b/100b/150b/200b/300b/400b/500b']
            ],
            "* OS values below AP and tiers far below AP is not included. Script by Dusan,  Idrinth and Warric*"
        ),
        new NITCTable(
            "Elite",
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['E. 5th Terror', 'No AP', '100b', '500b', '30b/40b/50b/60b/70b/80b/90b/100b/125b/150b/200b/250b/300b/400b/500b'],
                ['E. Alchemist', 'No AP', '10t', '40t', '200b/500b/800b/2t/2.5t/5t/10t/30t/40t'],
                ['E. Bad Blood', 'No AP', '10t', '35t', '5t/10t/30t/40t/60t'],
                ['E. Balor', 'No AP', '125t', '500b', '50b/75b/80b/100b/125b/150b/200b/250b/300b/400b/500b'],
                ['E. Bloodsuckers', 'No AP', '80b', '120b', '10b/20b/30b/40b/50b/60b/70b/80b/90b/100b/120b'],
                ['E. Butcher', 'No AP', '50b', '50b', '10b/15b/20b/25b/30b/37.5b/40b/50b'],
                ['E. Caster', 'No AP', '60b', '100b', '10b/15b/20b/25b/30b/35b/40b/45b/50b/55b/60b/70b/80b/90b/100b'],
                ['E. Cecile', 'No AP', '120b', '300b', '20b/25b/30b/35b/40b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b/120b/150b/200b/240b/300b'],
                ['E. Corrupted Wilds', 'No AP', '120b', '10t', '50b/70b/120b/150b/225b/300b/400b/500b/600b/700b/800b/1t/2t/10t'],
                ['E. Draconic Dreams', 'No AP', '40b/120b', '2t', '20b/40b/50b/70b/100b/120b/150b/250b/300b/400b/500b/600b/700b/800b/1t/2t'],
                ['E. Funny Bones', 'No AP', '70b', '150b', '10b/20b/25b/30b/35b/40b/45b/50b/55b/60b/70b/80b/90b/100b/125b/150b'],
                ['E. Initiates', 'No AP', '120b', '180b', '30b/35b/40b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b/120b/150b/180b'],
                ['E. Kane', 'No AP', '125b', '400b', '25b/30b/35b/40b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b/125b/150b/200b/250b/300b/400b'],
                ['E. Kang-Gsod', 'No AP', '10t', '100t', '3t/5t/10t/30t/50t/60/100t'],
                ['E. Karkata', 'No AP', '125b', '300b', '30b/35b/40b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b/125b/150b/200b/240b/300b'],
                ['E. Killers', 'No AP', '60b', '60b', '10b/15b/20b/25b/30b/35b/40b/45b/50b/55b/60b'],
                ['E. Malleus', 'No AP', '100b', '200b', '20b/25b/30b/35b/40b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b/150b/200b'],
                ['E. Mangler', 'No AP', '80b', '150b', '20b/25b/30b/35b/40b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b/125b/150b'],
                ['E. Marius', 'No AP', '240b', '20t', '100b/120b/150b/200b/240b/300b/400b/500b/600b/800b/1t/1.5t/2t/10t/15t/20t'],
                ['E. Murderer', 'No AP', '75b', '100b', '15b/20b/25b/30b/37.5b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b'],
                ['E. Rannveig', 'No AP', '50b/120b', '1t', '35b/50b/100b/120b/150b/225b/300b/400b/500b/600b/700b/800b/1t'],
                ['E. Reaper', 'No AP', '120b', '180b', '30b/35b/40b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b/120b/150b/180b'],
                ['E. Riders', 'No AP', '80b', '150b', '15b/20b/25b/30b/35b/40b/45b/50b/55b/60b/65b/70b/75b/80b/90b/100b/125b/150b'],
                ['E. Sanctuary', 'No AP', '70b/125b', '300b', '55b/60b/70b/80b/90b/100b/125b/150b/200b/300b'],
                ['E. Shadow Assassin', 'No AP', '200b', '40t', '200b/300b/500b/600b/800b/1.2t/2t/3t/8t/15t/20t/30t/40t'],
                ['E. Slitherer', 'No AP', '80b', '150b', '10b/20b/30b/40b/50b/60b/70b/80b/90b/100b/120b/150b'],
                ['E. Umbra Spider', 'No AP', '150b', '30t', '300b/500b/550b/600b/800b/1t/2t/3t/5t/10t/15t/20t/30t'],
                ['E. Warrior', 'No AP', '80b', '100b', '20b/30b/40b/50b/60b/70b/80b/90b/100b'],
                ['E. Way Warden', 'No AP', '120b', '10t', '50b/70b/100b/120b/150b/225b/300b/400b/500b/600b/700b/800b/1t/2t/10t'],
                ['E. Whispers', 'No AP', '70b', '125b', '10b/15b/20b/25b/30b/35b/40b/45b/50b/55b/60b/70b/80b/90b/100b/125b'],
                ['E. Yule PB', 'No AP', '120b', '225b', '50b/60b/70b/80b/90b/100b/120b/150b/200b/225b']
            ],
            "OS values below AP and Tiers far below AP are not included. Script by Dusan, Idrinth and Warric"
        ),
        new NITCTable(
            "Deadly",
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['Deadly BH LT', '1.5t', '5t', '100t', '500b/750b/1t/1.5t/2t/2.5t/3t/4t/5t/7.5t/10t/15t/20t/30t/40t/50t/100t'],
                ['Deadly Clockwork', '500b', '5t', '50t', '500b/750b/1t/1.5t/2t/2.5t/3t/4t/5t/7.5t/10t/15t/20t/30t/40t/50t'],
                ['Deadly Bastion', '500b', '5t', '50t', '500b/750b/1t/1.5t/2t/2.5t/3t/4t/5t/7.5t/10t/15t/20t/30t/40t/50t'],
                ['Deadly Drakontos', '5t', '5t', '600t', '1t/5t/10t/20t/30t/40t/50t/100t/150t/200t/300t/400t/600t'],
                ['Deadly Horgrak', '4t', '5t', '600t', '1t/5t/10t/20t/30t/40t/50t/100t/150t/200t/300t/400t/600t'],
                ['Deadly Lady Vas\'ok', '6.25t', '5t', '1q', '1t/5t/15t/20t/30t/40t/50t/100t/200t/300t/400t/500t/600t/1q'],
                ['Deadly Talon', '37.5t', '40t', '1.5q', '15t/20t/35t/40t/50t/100t/200t/250t/300t/400t/500t/1q/1.5q'],
                ['Deadly Verkiteia', '75t', '75t', '2q', '75t/100t/200t/300t/400t/800t/1.5q/2q (might be missing tiers)']
            ],
            "* OS values below AP and tiers far below AP is not included. Script by Dusan,  Idrinth and Warric*"
        ),
        new NITCSplitter(),
        new NITCTable(
            'Old Guild',
            ['Name', 'AP', '2/9', 'MS'],
            [
                ['Agony', '7m', '3.5m', '57.4m'],
                ['Al-Azab', '0.55m', '2.42m', '9.9m'],
                ['Arachna', '0.44m', '1.8m', '7.48m'],
                ['Banhammer bros', '4.44m', '19.5m', '79.9m'],
                ['Black Moon', '2.7m', '11.1m', '45.9m'],
                ['Celeano', '0.3m', '0.72m', '2.1m'],
                ['Deathglare', '0.9m', '3.69m', '15.3m'],
                ['Dirthax', '5.5m', '24.2m', '99m'],
                ['Dreadbloom', '9m', '4.5m', '73.8m'],
                ['Euphronios', '4.5m', '2.25m', '36.9m'],
                ['Gladiators', '1.2m', '2.88m', '8.4m'],
                ['Groblar', '0.6m', '1.44m', '4.2m'],
                ['Hammer', '4.4m', '18m', '74.8m'],
                ['Lunatics', '3.6m', '14.8m', '61.2m'],
                ['Obyron', '3m', '7.2m', '21m'],
                ['Ragetalon', '1.1m', '4.84m', '19.8m'],
                ['Scuttlegore', '2.2m', '9.68m', '39.6m'],
                ['Slaughterers', '2.4m', '5.76m', '16.8m'],
                ['Tetrarchos', '1.8m', '7.38m', '30.6m'],
                ['Tithrasia', '1.8m', '4.32m', '12.6m'],
                ['Varlachlech', '3.3m', '14.5m', '59.4m']
            ]
        ),
        new NITCTable(
            'Guild 1',
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['Adrastos', '50m', '55.5m', '1b', '16.5m/25.5m/35m/45m/55.5m/66.5m/78m/90m/103m/116m/129m/143m/158m/173m/188m/204m/221m/238m/255m/273m/292m/311m/330m/350m/1b'],
                ['Apoc Demon', '20m', '40m', '180m', '12m/28m/36m/40m/60m/80m/100m/120m/140m/160m/180m'],
                ['Bog Bodies', '75m', '78m', '1b', '16.5m/25.5m/35m/45m/55.5m/66.5m/78m/90m/103m/116m/129m/143m/158m/173m/188m/204m/221m/238m/255m/273m/292m/311m/330m/350m/1b'],
                ['Clockwork Giant', '100m', '150m', '5b', '100m/150m/200m/375m/500m/750m/1b/1.25b/1.5b/2b/2.5b/3.75b/5b'],
                ['Dar\'Hed\'Nal', '20m', '25.5m', '1b', '16.5m/25.5m/35m/45m/55.5m/66.5m/78m/90m/103m/116m/129m/143m/158m/173m/188m/204m/221m/238m/255m/273m/292m/311m/330m/350m/1b'],
                ['Doomglare', '15m', '16.5m', '1b', '16.5m/25.5m/35m/45m/55.5m/66.5m/78m/90m/103m/116m/129m/143m/158m/173m/188m/204m/221m/238m/255m/273m/292m/311m/330m/350m/1b'],
                ['Elite Gladiators', '7.5m', '39m', '39m', '15m/18m/21m/24m/27m/30m/33m/36m/39m'],
                ['Grundus', '60m', '1', '1', 'Any damage to this guild raid gets you loot'],
                ['Keron', '150m', '158m', '1b', '16.5m/25.5m/35m/45m/55.5m/66.5m/78m/90m/103m/116m/129m/143m/158m/173m/188m/204m/221m/238m/255m/273m/292m/311m/330m/350m/1b'],
                ['Krasgore', '5m', '20m', '90m', '10m/14m/18m/20m/30m/40m/50m/60m/70m/80m/90m'],
                ['Malchar', '5m', '20m', '90m', '10m/14m/18m/20m/30m/40m/50m/60m/70m/80m/90m'],
                ['N\'rlux', '100m', '103m', '350m', '16.5m/25.5m/35m/45m/55.5m/66.5m/78m/90m/103m/116m/129m/143m/158m/173m/188m/204m/221m/238m/255m/273m/292m/311m/330m/350m'],
                ['Nylatrix', '20m', '80m', '360m', '40m/56m/72m/80m/120m/160m/200m/240m/280m/320m/360m'],
                ['Paracoprion', '40m', '45m', '1b', '16.5m/25.5m/35m/45m/55.5m/66.5m/78m/90m/103m/116m/129m/143m/158m/173m/188m/204m/221m/238m/255m/273m/292m/311m/330m/350m/1b'],
                ['Rhalmarius', '39.1m', '1', '1', 'Any damage to this guild raid gets you loot'],
                ['Salome', '6.66m', '26.6m', '120m', '13.3m/18.6m/24m/26.6m/40m/53.3m/66.6m/79.9m/93.2m/107m/120m'],
                ['Tuxargus', '20m', '80m', '360m', '40m/56m/72m/80m/120m/160m/200m/240m/280m/320m/360m'],
                ['Xessus', '5m', '20m', '90m', '10m/14m/18m/20m/30m/40m/50m/60m/70m/80m/90m']
            ]
        ),
        new NITCTable(
            "Guild 2",
            ['Name', 'AP', 'OS', 'Max Tier', 'All Tiers'],
            [
                ['Bash Brothers', '1b', '1b', '20b', '1b/1.5b/2b/2.5b/3b/4b/5b/7.5b/10b/15b/20b'],
                ['BH Pillagers', '6b', '15b', '300b', '5b/7.5b/10b/15b/20b/25b/50b/100b/200b/300b'],
                ['Collector', '3.75b', '4b', '40b', '3b/4b/5b/7.5b/10b/15b/20b/25b/30b/40b'],
                ['Djinn', '750m', '750m', '25b', '750m/1b/1.5b/2b/2.5b/3b/4b/5b/7.5b/10b/15b/20b/25b'],
                ['Dreadmaw', '39b', '100b', '750b', '15b/50b/80b/100b/200b/500b/750b'],
                ['E. Devourer', 'No AP', '120b', '200b', '15b/20b/25b/30b/40b/50b/60b/70b/80b/90b/100b/120b/150b/200b'],
                ['Fae Dragon', '250m', '300m', '20b', '200m/300m/500m/750m/1b/1.5b/2b/2.5b/3b/4b/5b/7.5b/10b/15b/20b'],
                ['Fire Elemental', '240m', '300m', '10b', '200m/300m/500m/750m/1b/1.5b/2b/2.5b/3b/4b/5b/7.5b/10b'],
                ['Hullbore Wyrms', '375m', '500m', '25b', '500m/750m/1b/1.5b/2b/2.5b/3b/4b/5b/7.5b/10b/15b/20b/25b'],
                ['Soldier Ants', '1b', '1b', '20b', '1b/1.5b/2b/2.5b/3b/4b/5b/7.5b/10b/15b/20b'],
                ['Strength Potion', '200m', '200m', '1b', '200m/300m/400m/500m/750m/1b'],
                ['Unholy Rite', '2.5b', '3b', '25b', '2.5b/3b/4b/5b/7.5b/10b/15b/20b/25b'],
                ['Vathik', 'No AP', '1b', '70t', '1b/2b/3b/5b/10b/15b/20b/30b/40b/50b/100b/150b/200b/300b/600b/800b/1t/3t/5t/8t/10t/20t/50t/60t/70t'],
                ['Whitepelts', '3b', '3b', '50b', '3b/4b/5b/7.5b/10b/15b/20b/25b/50b'],
                ['Xax\'zisz', '26b', '100b', '500b', '15b/30b/50b/80b/100b/200b/500b']
            ]
        ),
        new NITCSplitter(),
        new NITCTable(
            'BoB Map',
            ['Tier', 'Total', 'CU/RE', 'Comments'],
            [
                ['5m', '62', '31/0', ''],
                ['25m', '64', '32/0', ''],
                ['75m', '66', '33/0', ''],
                ['100m', '68', '34/0', ''],
                ['200m', '84', '35/7', ''],
                ['250m', '88', '36/8', ''],
                ['320m', '92', '37/9', ''],
                ['375m', '96', '38/10', ''],
                ['480m', '100', '39/11', ''],
                ['550m', '114', '43/14', ''],
                ['640m', '126', '46/17', ''],
                ['960m', '140', '48/22', ''],
                ['1.5b', '148', '50/24', ''],
                ['2.4b', '158', '53/26', ''],
                ['2.75b', '168', '55/29', ''],
                ['5b', '200', '62/38', ''],
                ['7b', '212', '64/42', 'MS for 25,50,75 man'],
                ['10b', '232', '69/47', ''],
                ['15b', '252', '74/52', '']
            ],
            '',
            'https://nitc.idrinth.de/bob_map.jpg',
            'purple',
            true
        ),
        new NITCImage('MaM Map', 'http://image.prntscr.com/image/832f8eb0bd4a433cbf5b366fcbf66f3a.png'),
        new NITCImage('GD Map', 'http://image.prntscr.com/image/aeaada2593784f29ab056098bae4e18b.png'),
        new NITCImage('GoC Map', 'http://image.prntscr.com/image/333019c25a0e435593a15ef78986539b.png'),
        new NITCImage('FW Map', 'http://image.prntscr.com/image/4d0e0f3a7d30407887e3e323ee5350c4.png'),
        new NITCImage('NQ Map', 'https://image.prntscr.com/image/993789c610e6447d9d178360b1b52ef7.png'),
        new NITCImage('RT Map', 'http://image.prntscr.com/image/dac78691e48440de83a7366540de3da1.png'),
        new NITCImage('BHH Map', 'https://image.prntscr.com/image/06592f09a3d94f5c9b99add335e6ec46.png'),
        new NITCTable(
            'CC Map',
            ['Tier', 'Young Drake', 'Scarred Drake', 'Thorned Wyrm', 'Gilded Dragon(Gold)', 'Yathestraz'],
            [
                ['1b', 'Total = 28', 'Total = 28', '', '-', ''],
                ['2.5b', 'Total = 66', 'Total = 66', 'Total = 66', '-', ''],
                ['5b', 'Total = 125', 'Total = 125', '', '-', ''],
                ['7.5b', 'Total = 185', 'Total = 185', '', '-', 'Total = 211'],
                ['10b', 'Total = 320', 'Total = 320', '', '-', 'Total = 320'],
                ['15b', 'Total = 487', 'Total = 487', '', '', ''],
                ['20b?', '', '', '', '', ''],
                ['25b', 'Total = 893', 'Total = 893', 'Total = 929', '1442 SP, 202 Crafts', ''],
                ['50b', 'Total = 1786', 'Total = 1786', 'Total = 1859', '', 'Total = 1859'],
                ['100b', 'Total = 3445', 'Total = 3445', 'Total = 3451', '4031 SP, 604 Crafts', 'Total = 3578'],
                ['200b', 'Total = 6890', 'Total = 6890', 'Total 6902', '7177 SP, 2018 Crafts', 'Total = 7161'],
                ['300b', 'Total = 9649(MS)', 'Total = 9649', 'Total = 9665', '13862 SP, 2018 Crafts', 'Total 9997'],
                ['400b', '-', 'Total = 11031', 'Total = 11367', '16567 SP, 2692 Crafts', 'Total = 11367'],
                ['500b', '-', '-', '-', '18039 SP, 3365 Crafts', '-'],
                ['600b', '-', 'Total = 16550(MS)', 'Total = 17050(MS)', '18929 SP, 4038 Crafts', 'Total = 13479'],
                ['800b', '-', '-', '-', '20935 SP, 5384 Crafts', 'Total = 17979'],
                ['1t', '-', '-', '-', '24794SP, 6750 Crafts', 'Total = 22474']
            ],
            '',
            'https://nitc.idrinth.de/cc_map.jpg',
            'gold'
        ),
        new NITCImage('IH Map', 'https://image.prntscr.com/image/QXwcaZ1rSX2IxUzZyginHw.png')
    ]));
})();

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
// @include        http://www.newgrounds.com/portal/view/609826*
// @include        http://newgrounds.com/portal/view/609826*
// @include        http://dawnofthedragons.com/
// @include        http://armorgames.com/dawn-of-the-dragons-game/13509*
// @include        http://www.armorgames.com/dawn-of-the-dragons-game/13509*
// @include        http://armorgames.com/play/13509/dawn-of-the-dragons*
// @version        3.5.10
// @grant          none
// ==/UserScript==
( function ( data ) {
    "use strict";
    /**
     * creates a new element for the list
     * @param {string} label the name of the dataset
     * @param {string} src the image id
     * @param {Function} func the function to be called when clicked
     * @returns {unresolved}
     */
    var create = function ( label, src, func ) {
        var wrapper = document.createElement ( "li" );
        wrapper.onclick = func;
        if ( src ) {
            wrapper.appendChild ( document.createElement('div') );
            wrapper.firstChild.appendChild ( document.createElement ( "img" ) );
            wrapper.firstChild.firstChild.setAttribute ( "src", src );
            wrapper.firstChild.firstChild.setAttribute ( "alt", label );
        }
        if(label) {
          wrapper.appendChild ( document.createElement ( "button" ) );
          wrapper.lastChild.appendChild ( document.createTextNode ( label ) );
        }
        return wrapper;
    };
    var list = document.createElement ( "ul" );
    list.setAttribute ( "id", "NewInlineTierCharts" );
    list.appendChild ( create ( "\u21C6", "", function () {
        this.parentNode.setAttribute("class",( this.parentNode.getAttribute ( "class" ) === "right" ? "" : "right" ));
    } ) );
    /**
     * switches between active and inactive
     * @returns {undefined}
     */
    var showHide = function () {
        var status = this.getAttribute ( "class" ) === "active" ? "" : "active";
        for (var counter = 0; counter < this.parentNode.childNodes.length; counter++) {
            this.parentNode.childNodes[counter].setAttribute ( "class", "" );
        }
        this.setAttribute ( "class", status );
        this.parentNode.setAttribute("active",status);
    };
    for (var counter = 0; counter < data.length; counter++) {
        list.appendChild ( create ( data[counter][0], data[counter][1], showHide ) );
    }
    var styles = document.createElement ( "style" );
    styles.setAttribute ( "type", "text/css" );
    styles.setAttribute ( "id", "NewInlineTierChartsStyles" );
    styles.appendChild ( document.createTextNode (
            "#NewInlineTierCharts{position:fixed;top:0;left:-65px;z-index:100000;max-height:100%;}" +
            "#NewInlineTierCharts:hover,#NewInlineTierCharts[active=\"active\"]{left:0;}" +
            "#NewInlineTierCharts.right{left:auto;right:-65px;}" +
            "#NewInlineTierCharts.right:hover,#NewInlineTierCharts.right[active=\"active\"]{right:0;}" +
            "#NewInlineTierCharts,#NewInlineTierCharts li{margin:0;padding:0;list-style: none;display:block;}" +
            "#NewInlineTierCharts li{min-height:0.25em;}" +
            "#NewInlineTierCharts img{width:auto;height:auto;display:block;background-color:#fff;}" +
            "#NewInlineTierCharts div{width:auto;max-height:100%;display:none;overflow:auto;}" +
            "#NewInlineTierCharts button{border-radius:2px;background:#fff;height:auto;font-size: 12px;font-family: monospace;padding:1px;text-align: center;box-sizing: border-box;text-align:center;color:#000;border: 1px solid #000;width:75px;display:block;background-color:#fff;background-image:linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.2),rgba(0,0,0,0.1));font-weight:normal;line-height:normal;}" +
            "#NewInlineTierCharts .active div{display:block;position:fixed;top:0;left:75px;z-index:100000;max-height:100%;max-width:"+(window.innerWidth-150)+"px;}" +
            "#NewInlineTierCharts.right .active div{left:auto;right:75px;}" +
            "#NewInlineTierCharts .active button{background:#222;color:#fff;}"
            ) );
    window.addEventListener('resize',function() {
        document.getElementById("NewInlineTierChartsStyles").innerHTML = document.getElementById("NewInlineTierChartsStyles").innerHTML.replace(/(#NewInlineTierCharts .active div\{.*?max-width:)[0-9]+(px;.*?\})/,'$1'+(window.innerWidth-150)+'$2');
    });
    document.getElementsByTagName ( "head" )[0].appendChild ( styles );
    document.getElementsByTagName ( "body" )[0].appendChild ( list );
} ) (
        [
            [ "", "" ],
            [ "Z1-9", "http://image.prntscr.com/image/4f72335bf6a44a699472fb174e487a28.png" ],
            [ "Small", "http://image.prntscr.com/image/ebe0a58b24d9468ab735f7b588129daa.png" ],
            [ "Med", "http://image.prntscr.com/image/35be9e9ac5b4466cae5a1faa997499df.png" ],
            [ "Large", "http://image.prntscr.com/image/7e9b76a799e5409a8ae7413d6ac48375.png" ],
            [ "Epic", "http://image.prntscr.com/image/3ca7397851fe48dbbde979e5e9660726.png" ],
            [ "Colo", "http://image.prntscr.com/image/32ca6648468648dc83269be64f5f9c78.png" ],
            [ "Giga", "http://image.prntscr.com/image/aec4152d67c943ada2f1a9658d6fa750.png" ],
            [ "Elite", "http://image.prntscr.com/image/2fe587b74d824bb4980a32b092792e72.png" ],
            [ "", "" ],
            [ "Old Guild", "http://image.prntscr.com/image/6afdca29e2f14617ad6ee220615ebc54.png" ],
            [ "Guild 1/2", "http://image.prntscr.com/image/ecb8c73134954e61ad5990a476cd78d4.png" ],
            [ "Guild 2/2", "http://image.prntscr.com/image/1d2eb20b615f438282118e0f5d9cd5be.png" ],
            [ "", "" ],
            [ "BoB Map", "http://image.prntscr.com/image/f1b3999996334f42b293630ecf283bc9.png" ],
            [ "MaM Map", "http://image.prntscr.com/image/dd378a271f5e40979f2638f444ee0e7d.png" ],
            [ "GD Map", "http://image.prntscr.com/image/61350f40209243ffa416a3cd7fbe4931.png" ],
            [ "GoC Map", "http://image.prntscr.com/image/333019c25a0e435593a15ef78986539b.png" ],
            [ "FW Map", "http://image.prntscr.com/image/4d0e0f3a7d30407887e3e323ee5350c4.png" ],
            [ "NQ Map", "http://image.prntscr.com/image/14a4b5c29a0b4a0596f909c481050c02.png" ],
            [ "RT Map", "http://image.prntscr.com/image/10c56af4977c4bc19a128290a5405f83.png" ],
            [ "BHH Map", "http://image.prntscr.com/image/6ad2c236beda4bce8088b64a40d2c193.png" ],
            [ "", "" ],
            [ "Gore Gob", "http://image.prntscr.com/image/d397d9d4f23a45d3887f4283f7a54b10.png" ],
            [ "Snow", "http://image.prntscr.com/image/bf7dfd3f393647bd9704647b20934d05.png" ],
            [ "Treachery", "http://image.prntscr.com/image/d34bc68fa6f645908069c2eb7c0d3d02.png" ],
            [ "Glitters", "http://image.prntscr.com/image/4d425701f6f64fafa20490d83afc7f84.png" ]
        ]
);

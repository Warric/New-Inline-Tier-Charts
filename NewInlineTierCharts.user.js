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
// @version        3.5.1
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
            wrapper.firstChild.firstChild.setAttribute ( "src", "http://image.prntscr.com/image/" + src + ".png" );
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
    list.appendChild ( create ( "Switch Side", "", function () {
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
            "#NewInlineTierCharts{position:fixed;top:0;left:-65px;z-index:100000;max-height:100%;overflow-y:auto;}" +
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
            [ "Z1-9", "4f72335bf6a44a699472fb174e487a28" ],
            [ "Small", "ebe0a58b24d9468ab735f7b588129daa" ],
            [ "Med", "663ac3e4731e4aa7b7ade1f8e1b95251" ],
            [ "Large", "7e9b76a799e5409a8ae7413d6ac48375" ],
            [ "Epic", "3ca7397851fe48dbbde979e5e9660726" ],
            [ "Colo", "32ca6648468648dc83269be64f5f9c78" ],
            [ "Giga", "aec4152d67c943ada2f1a9658d6fa750" ],
            [ "Elite", "4dd259053e5a42f590523448797b52d4" ],
            [ "", "" ],
            [ "Old Guild", "6afdca29e2f14617ad6ee220615ebc54" ],
            [ "Guild 1/2", "ecb8c73134954e61ad5990a476cd78d4" ],
            [ "Guild 2/2", "7df09c5b6cd8466dadb589a1ec0f91e8" ],
            [ "", "" ],
            [ "BoB Map", "f1b3999996334f42b293630ecf283bc9" ],
            [ "MaM Map", "dd378a271f5e40979f2638f444ee0e7d" ],
            [ "GD Map", "61350f40209243ffa416a3cd7fbe4931" ],
            [ "GoC Map", "333019c25a0e435593a15ef78986539b" ],
            [ "FW Map", "4d0e0f3a7d30407887e3e323ee5350c4" ],
            [ "NQ Map", "14a4b5c29a0b4a0596f909c481050c02" ],
            [ "RT Map", "10c56af4977c4bc19a128290a5405f83" ],
            [ "", "" ],
            [ "WR", "ba2b52e1a1fd47ee9afd1686f7481416" ]
        ]
);

// ==UserScript==
// @name        New Inline Tier Charts
// @namespace   DusanAndWarric
// @description   This will provide an inline tier chart for Dawn of the Dragons.Maps created by Brayden.Tiers collected by Warric.
// @include     http://www.27thdimension.com/dotd/tierChartsStandalone.html
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
// @include        http://web1.dawnofthedragons.com/live_standalone*
// @include        http://www.newgrounds.com/portal/view/609826*
// @include        http://newgrounds.com/portal/view/609826*
// @include        http://dawnofthedragons.com/
// @include        http://armorgames.com/dawn-of-the-dragons-game/13509*
// @include        http://www.armorgames.com/dawn-of-the-dragons-game/13509*
// @version     3.1.3
// @grant       none
// ==/UserScript==
(function(data){
  "use strict";
  var create = function(label, src,addButton) {
  	var wrapper = document.createElement("li");
    wrapper.appendChild(document.createElement("img"));
    //handling image
    wrapper.firstChild.setAttribute("src",src);
    wrapper.firstChild.setAttribute("alt",label);
    wrapper.firstChild.setAttribute("onclick","this.parentNode.setAttribute('class','')");
    //adding button
    addButton(label,"this.parentNode.setAttribute('class',this.parentNode.getAttribute('class')==='active'?'':'active');",wrapper);
    //returning result
    return wrapper;
  };
  var addButton = function(label,func,parent) {
	  parent.appendChild(document.createElement("button"));
	  parent.lastChild.setAttribute("onclick",func);
	  parent.lastChild.appendChild(document.createTextNode(label));
  };
  var list = document.createElement("ul");
  list.setAttribute("id","NewInlineTierCharts");
  list.appendChild(document.createElement("li"));
  addButton("Switch Side","this.parentNode.parentNode.setAttribute('class',this.parentNode.parentNode.getAttribute('class')==='right'?'':'right');",list.firstChild);
  for(var counter=0;counter<data.length;counter++) {
    list.appendChild(create(data[counter][0],data[counter][1],addButton)); 
  }
  var styles = document.createElement("style");
  styles.setAttribute("type","text/css");
  styles.appendChild(document.createTextNode(
    "#NewInlineTierCharts{position:fixed;top:0;left:0;z-index:100000;}"+
    "#NewInlineTierCharts.right{left:auto;right:0;}"+
    "#NewInlineTierCharts,#NewInlineTierCharts li{margin:0;padding:0;list-style: none;display:block;}"+
    "#NewInlineTierCharts img{width:auto;display:none;background-color:#fff;}"+
    "#NewInlineTierCharts button{color:#000;border: 1px solid #000;width:60px;display:block;background-color:#fff;background-image:linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.2),rgba(0,0,0,0.1));font-weight:normal;line-height:normal;}"+
    "#NewInlineTierCharts .active img{display:block;position:fixed;top:0;left:62px;z-index:100000;}"+
    "#NewInlineTierCharts.right .active img{left:auto;right:62px;}"+
    "#NewInlineTierCharts .active button{background:#222;color:#fff;}"
  ));
  document.getElementsByTagName("head")[0].appendChild(styles);
  document.getElementsByTagName("body")[0].appendChild(list);
})(
[
  ["Z1-9","http://image.prntscr.com/image/4f72335bf6a44a699472fb174e487a28.png"],
  ["Small","http://image.prntscr.com/image/ebe0a58b24d9468ab735f7b588129daa.png"],
  ["Med","http://image.prntscr.com/image/663ac3e4731e4aa7b7ade1f8e1b95251.png"],
  ["Large","http://image.prntscr.com/image/7e9b76a799e5409a8ae7413d6ac48375.png"],
  ["Epic","http://image.prntscr.com/image/3ca7397851fe48dbbde979e5e9660726.png"],
  ["Colo","http://image.prntscr.com/image/32ca6648468648dc83269be64f5f9c78.png"],
  ["Giga","http://image.prntscr.com/image/aec4152d67c943ada2f1a9658d6fa750.png"],
  ["Elite","http://image.prntscr.com/image/4dd259053e5a42f590523448797b52d4.png"],
  ["Old Guild","http://image.prntscr.com/image/6afdca29e2f14617ad6ee220615ebc54.png"],
  ["Guild 1/2","http://image.prntscr.com/image/ecb8c73134954e61ad5990a476cd78d4.png"],
  ["Guild 2/2","http://image.prntscr.com/image/7df09c5b6cd8466dadb589a1ec0f91e8.png"],
  ["BoB Map","http://image.prntscr.com/image/cd6af9b64c8f469cae2140e8ac7fabfa.png"],
  ["MaM Map","http://image.prntscr.com/image/dd378a271f5e40979f2638f444ee0e7d.png"],
  ["GD Map","http://image.prntscr.com/image/61350f40209243ffa416a3cd7fbe4931.png"],
  ["GoC Map","http://image.prntscr.com/image/333019c25a0e435593a15ef78986539b.png"],
  ["FW Map","http://image.prntscr.com/image/4d0e0f3a7d30407887e3e323ee5350c4.png"],
  ["NQ Map","http://image.prntscr.com/image/14a4b5c29a0b4a0596f909c481050c02.png"],
  ["RT Map","http://image.prntscr.com/image/10c56af4977c4bc19a128290a5405f83.png"]
]
);

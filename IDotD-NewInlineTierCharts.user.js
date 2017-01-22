// ==UserScript==
// @name        New Inline Tier Charts(unofficial)
// @namespace   DusanAndWarric@IDotD
// @description   This will provide an inline tier chart for DotD on Armor games.Maps created by Brayden.Tiers collected by Warric
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
// @include        http://www.newgrounds.com/portal/view/609826*
// @include        http://newgrounds.com/portal/view/609826*
// @include        http://dawnofthedragons.com/
// @include        http://armorgames.com/dawn-of-the-dragons-game/13509*
// @include        http://www.armorgames.com/dawn-of-the-dragons-game/13509*
// @version     3.0
// @grant       none
// ==/UserScript==
(function(data){
  'use strict';
  var create = function(label, src,addButton) {
  	var wrapper = document.createElement('li');
    wrapper.appendChild(document.createElement('img'));
    //handling image
    wrapper.firstChild.setAttribute('src',src);
    wrapper.firstChild.setAttribute('alt',label);
    wrapper.firstChild.setAttribute('onclick','this.parentNode.setAttribute(\'class\',\'\')');
    //adding button
    addButton(label,'this.parentNode.setAttribute(\'class\',this.parentNode.parentNode.getAttribute(\'class\')===\'active\'?\'\':\'active\');',wrapper);
    //returning result
    return wrapper;
  };
  var addButton = function(label,func,parent) {
	  parent.appendChild(document.createElement('button'));
	  parent.lastChild.setAttribute('onclick',func);
	  parent.lastChild.appendChild(document.createTextNode(label));
  };
  var list = document.createElement('ul');
  list.setAttribute('id','NewInlineTierCharts');
  list.appendChild(document.createElement('li'));
  addButton('Switch Side','this.parentNode.parentNode.setAttribute(\'class\',this.parentNode.parentNode.getAttribute(\'class\')===\'right\'?\'\':\'right\');',list.firstChild);
  for(var counter=0;counter<data.length;counter++) {
    list.appendChild(create(data[counter][0],data[counter][1],addButton)); 
  }
  var styles = document.createElement('style');
  styles.setAttribute('type','text/css');
  styles.appendChild(document.createTextNode(
    "#NewInlineTierCharts{position:fixed;top:0;left:0;z-index:100000;}"+
    "#NewInlineTierCharts.right{left:auto;right:0;}"+
    "#NewInlineTierCharts,#NewInlineTierCharts li{margin:0;padding:0;list-style: none;display:block;}"+
    "#NewInlineTierCharts img{width:auto;display:none;background-color:#fff;}"+
    "#NewInlineTierCharts button{color:#000;border: 1px solid #000;width:60px;display:block;background-color:#fff;background-image:linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.2),rgba(0,0,0,0.1));}"+
    "#NewInlineTierCharts .active img{display:block;position:fixed;top:0;left:62px;z-index:100000;}"+
    "#NewInlineTierCharts.right .active img{left:auto;right:62px;}"+
    "#NewInlineTierCharts .active button{background:#222;color:#fff;}"
  ));
  document.getElementsByTagName('head')[0].appendChild(styles);
  document.getElementsByTagName('body')[0].appendChild(list);
})(
[
  ['Z1-9',"http://i.imgur.com/396UKjy.png"],
  ['Small',"http://image.prntscr.com/image/b6dd93cca3c94725aa4f76b32337cec3.png"],
  ['Med',"http://image.prntscr.com/image/6370121658fb4f859f877ae5d4e525d6.png"],
  ['Large',"http://image.prntscr.com/image/460e45426e3b4e5f9c7c54890cda0a42.png"],
  ['Epic',"http://image.prntscr.com/image/22daf6034f434cf489f754d00e199f2d.png"],
  ['Colo',"http://image.prntscr.com/image/4d6c9cf28e4f4bdfafdc34e50ee68fac.png"],
  ['Giga',"http://image.prntscr.com/image/60d795ad46094c318b22b5f2a4f07b66.png"],
  ['Elite',"http://image.prntscr.com/image/bbf3151e78624377a4c8a82fc32362c1.png"],
  ['Old Guild',"http://image.prntscr.com/image/6afdca29e2f14617ad6ee220615ebc54.png"],
  ['Guild 1/2',"http://image.prntscr.com/image/ecb8c73134954e61ad5990a476cd78d4.png"],
  ['Guild 2/2',"http://image.prntscr.com/image/7df09c5b6cd8466dadb589a1ec0f91e8.png"],
  ['All 1',"http://i.imgur.com/E0ip4Up.png"],
  ['All 2',"http://i.imgur.com/T5uTuL2.png"],
  ['BoB Map',"http://image.prntscr.com/image/c2e51e16d13d478fbf94519ce049205d.png"],
  ['MaM Map',"http://image.prntscr.com/image/930ff0b3014946e4b47640c0e911b20b.png"],
  ['GD Map',"http://image.prntscr.com/image/3e2dd0cba4a946019030e1de06b4d67d.png"],
  ['GoC Map',"http://image.prntscr.com/image/d7fd2caa19424243bf72de840299c7d0.png"],
  ['FW Map',"http://image.prntscr.com/image/9102f877110749389a61c294cdfdc5e7.png"],
  ['NQ Map',"http://image.prntscr.com/image/8ff8ffda715249ceab473cde5f1eca0d.png"],
  ['RT Map',"http://image.prntscr.com/image/c5e04173e4944041a02f234b7e4297fb.png"]
]
);

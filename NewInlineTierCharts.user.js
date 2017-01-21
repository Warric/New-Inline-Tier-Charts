// ==UserScript==
// @name        New Inline Tier Charts
// @namespace   DusanAndWarric
// @description   This will provide an inline tier chart for DotD on Armor games.Maps created by Brayden.Tiers collected by Warric
// @include     http://armorgames.com/dawn-of-the-dragons-game/*
// @include     http://www.27thdimension.com/dotd/tierChartsStandalone.html
// @include        http://www.newgrounds.com/portal/view/609826*
// @include        http://newgrounds.com/portal/view/609826*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @version     2.33
// @grant       none
// ==/UserScript==

//Pic for z1-9 raids
var lowTiers = "<img src='http://i.imgur.com/396UKjy.png'>";

//Pics for other S raids
var smallTiers = "<img src='http://image.prntscr.com/image/b6dd93cca3c94725aa4f76b32337cec3.png'>";
var mediumTiers = "<img src='http://image.prntscr.com/image/6370121658fb4f859f877ae5d4e525d6.png'>";
var largeTiers = "<img src='http://image.prntscr.com/image/460e45426e3b4e5f9c7c54890cda0a42.png'>";
var epicTiers = "<img src='http://image.prntscr.com/image/22daf6034f434cf489f754d00e199f2d.png'>";
var colosalTiers = "<img src='http://image.prntscr.com/image/4d6c9cf28e4f4bdfafdc34e50ee68fac.png'>";
var gigaTiers = "<img src='http://image.prntscr.com/image/60d795ad46094c318b22b5f2a4f07b66.png'>";
var eliteTiers = "<img src='http://image.prntscr.com/image/bbf3151e78624377a4c8a82fc32362c1.png'>";
//
var OldguildTiers = "<img src='http://image.prntscr.com/image/6afdca29e2f14617ad6ee220615ebc54.png'>";
var guildTiers = "<img src='http://image.prntscr.com/image/ecb8c73134954e61ad5990a476cd78d4.png'>";
var guildTiers2 = "<img src='http://image.prntscr.com/image/7df09c5b6cd8466dadb589a1ec0f91e8.png'>";
//OS,AP and MS only
var allTiers1 = "<img src='http://i.imgur.com/E0ip4Up.png'>";
var allTiers2 = "<img src='http://i.imgur.com/T5uTuL2.png'>";
///////ADDED
var BoBMap = "<img src='http://image.prntscr.com/image/c2e51e16d13d478fbf94519ce049205d.png'>";
var MaMMap = "<img src='http://image.prntscr.com/image/930ff0b3014946e4b47640c0e911b20b.png'>";
var GDMap = "<img src='http://image.prntscr.com/image/3e2dd0cba4a946019030e1de06b4d67d.png'>";
var GoCMap = "<img src='http://image.prntscr.com/image/d7fd2caa19424243bf72de840299c7d0.png'>";
var FWMap = "<img src='http://image.prntscr.com/image/9102f877110749389a61c294cdfdc5e7.png'>";
var NQMap = "<img src='http://image.prntscr.com/image/8ff8ffda715249ceab473cde5f1eca0d.png'>";
var RTMap = "<img src='http://image.prntscr.com/image/c5e04173e4944041a02f234b7e4297fb.png'>";
///////ADDED


// Create Tier Divs

var gameCanvas = document.getElementsByTagName('body')[0];

var lowTierDiv = document.createElement('div');
lowTierDiv.setAttribute('id','voorashLowTierDiv');
lowTierDiv.innerHTML = lowTiers; 
//
var smallTierDiv = document.createElement('div');
smallTierDiv.setAttribute('id','smallTierDiv');
smallTierDiv.innerHTML = smallTiers; 

var mediumTierDiv = document.createElement('div');
mediumTierDiv.setAttribute('id','mediumTierDiv');
mediumTierDiv.innerHTML = mediumTiers; 

var largeTierDiv = document.createElement('div');
largeTierDiv.setAttribute('id','largeTierDiv');
largeTierDiv.innerHTML = largeTiers;

var epicTierDiv = document.createElement('div');
epicTierDiv.setAttribute('id','epicTierDiv');
epicTierDiv.innerHTML = epicTiers; 

var colosalTierDiv = document.createElement('div');
colosalTierDiv.setAttribute('id','colosalTierDiv');
colosalTierDiv.innerHTML = colosalTiers; 

var gigaTierDiv = document.createElement('div');
gigaTierDiv.setAttribute('id','gigaTierDiv');
gigaTierDiv.innerHTML = gigaTiers; 

var eliteTierDiv = document.createElement('div');
eliteTierDiv.setAttribute('id','eliteTierDiv');
eliteTierDiv.innerHTML = eliteTiers; 
//

var OldguildTierDiv = document.createElement('div');
OldguildTierDiv.setAttribute('id','OldguildTierDiv');
OldguildTierDiv.innerHTML = OldguildTiers; 

var guildTierDiv = document.createElement('div');
guildTierDiv.setAttribute('id','guildTierDiv');
guildTierDiv.innerHTML = guildTiers; 

var guildTier2Div = document.createElement('div');
guildTier2Div.setAttribute('id','guildTier2Div');
guildTier2Div.innerHTML = guildTiers2; 

var allTiers1Div = document.createElement('div');
allTiers1Div.setAttribute('id','allTiers1Div');
allTiers1Div.innerHTML = allTiers1; 

var allTiers2Div = document.createElement('div');
allTiers2Div.setAttribute('id','allTiers2Div');
allTiers2Div.innerHTML = allTiers2; 

///////////ADDED
var BobMapDiv = document.createElement('div');
BobMapDiv.setAttribute('id','BobMapDiv');
BobMapDiv.innerHTML = BoBMap;

var MaMMapDiv = document.createElement('div');
MaMMapDiv.setAttribute('id','MaMMapDiv');
MaMMapDiv.innerHTML = MaMMap;

var GDMapDiv = document.createElement('div');
GDMapDiv.setAttribute('id','GDMapDiv');
GDMapDiv.innerHTML = GDMap;

var GoCMapDiv = document.createElement('div');
GoCMapDiv.setAttribute('id','GoCMapDiv');
GoCMapDiv.innerHTML = GoCMap;

var FWMapDiv = document.createElement('div');
FWMapDiv.setAttribute('id','FWMapDiv');
FWMapDiv.innerHTML = FWMap;

var NQMapDiv = document.createElement('div');
NQMapDiv.setAttribute('id','NQMapDiv');
NQMapDiv.innerHTML = NQMap;

var RTMapDiv = document.createElement('div');
RTMapDiv.setAttribute('id','RTMapDiv');
RTMapDiv.innerHTML = RTMap;
//////////ADDED


// Create button divs
var voorashLowTierButtonDiv = document.createElement('div');
voorashLowTierButtonDiv.setAttribute('id','voorashLowTierButtonDiv');
voorashLowTierButtonDiv.innerHTML = 'Z1-Z9';

///
var smallTierButtonDiv = document.createElement('div');
smallTierButtonDiv.setAttribute('id','smallTierButtonDiv');
smallTierButtonDiv.innerHTML = 'Small';

var mediumTierButtonDiv = document.createElement('div');
mediumTierButtonDiv.setAttribute('id','mediumTierButtonDiv');
mediumTierButtonDiv.innerHTML = 'Med';

var largeTierButtonDiv = document.createElement('div');
largeTierButtonDiv.setAttribute('id','largeTierButtonDiv');
largeTierButtonDiv.innerHTML = 'Large';

var epicTierButtonDiv = document.createElement('div');
epicTierButtonDiv.setAttribute('id','epicTierButtonDiv');
epicTierButtonDiv.innerHTML = 'Epic';

var colosalTierButtonDiv = document.createElement('div');
colosalTierButtonDiv.setAttribute('id','colosalTierButtonDiv');
colosalTierButtonDiv.innerHTML = 'Colo';

var gigaTierButtonDiv = document.createElement('div');
gigaTierButtonDiv.setAttribute('id','gigaTierButtonDiv');
gigaTierButtonDiv.innerHTML = 'Giga';

var eliteTierButtonDiv = document.createElement('div');
eliteTierButtonDiv.setAttribute('id','eliteTierButtonDiv');
eliteTierButtonDiv.innerHTML = 'Elite';
///

var OldGuildTierButtonDiv = document.createElement('div');
OldGuildTierButtonDiv.setAttribute('id','OldGuildTierButtonDiv');
OldGuildTierButtonDiv.innerHTML = 'Old Guild';

var voorashGuildTierButtonDiv = document.createElement('div');
voorashGuildTierButtonDiv.setAttribute('id','voorashGuildTierButtonDiv');
voorashGuildTierButtonDiv.innerHTML = 'Guild 1/2';

var voorashGuildTier2ButtonDiv = document.createElement('div');
voorashGuildTier2ButtonDiv.setAttribute('id','voorashGuildTier2ButtonDiv');
voorashGuildTier2ButtonDiv.innerHTML = 'Guild 2/2';

var allTiers1ButtonDiv = document.createElement('div');
allTiers1ButtonDiv.setAttribute('id','allTiers1ButtonDiv');
allTiers1ButtonDiv.innerHTML = 'All1';

var allTiers2ButtonDiv = document.createElement('div');
allTiers2ButtonDiv.setAttribute('id','allTiers2ButtonDiv');
allTiers2ButtonDiv.innerHTML = 'All2';

////////ADDED
var LoDBoBMapTierButtonDiv = document.createElement('div');
LoDBoBMapTierButtonDiv.setAttribute('id','LoDBoBMapTierButtonDiv');
LoDBoBMapTierButtonDiv.innerHTML = 'BoBMap';

var LoDMaMMapTierButtonDiv = document.createElement('div');
LoDMaMMapTierButtonDiv.setAttribute('id','LoDMaMMapTierButtonDiv');
LoDMaMMapTierButtonDiv.innerHTML = 'MaMMap';

var LoDGDMapTierButtonDiv = document.createElement('div');
LoDGDMapTierButtonDiv.setAttribute('id','LoDGDMapTierButtonDiv');
LoDGDMapTierButtonDiv.innerHTML = 'GDMap';

var LoDGoCMapTierButtonDiv = document.createElement('div');
LoDGoCMapTierButtonDiv.setAttribute('id','LoDGoCMapTierButtonDiv');
LoDGoCMapTierButtonDiv.innerHTML = 'GoCMap';

var LoDFWMapTierButtonDiv = document.createElement('div');
LoDFWMapTierButtonDiv.setAttribute('id','LoDFWMapTierButtonDiv');
LoDFWMapTierButtonDiv.innerHTML = 'FWMap';

var LoDNQMapTierButtonDiv = document.createElement('div');
LoDNQMapTierButtonDiv.setAttribute('id','LoDNQMapTierButtonDiv');
LoDNQMapTierButtonDiv.innerHTML = 'NQMap';

var LoDRTMapTierButtonDiv = document.createElement('div');
LoDRTMapTierButtonDiv.setAttribute('id','LoDRTMapTierButtonDiv');
LoDRTMapTierButtonDiv.innerHTML = 'RTMap';
////////ADDED


gameCanvas.appendChild(lowTierDiv);

///
gameCanvas.appendChild(smallTierDiv);

gameCanvas.appendChild(mediumTierDiv);

gameCanvas.appendChild(largeTierDiv);

gameCanvas.appendChild(epicTierDiv);

gameCanvas.appendChild(colosalTierDiv);

gameCanvas.appendChild(gigaTierDiv);

gameCanvas.appendChild(eliteTierDiv);
///

gameCanvas.appendChild(OldguildTierDiv);

gameCanvas.appendChild(guildTierDiv);

gameCanvas.appendChild(guildTier2Div);

gameCanvas.appendChild(allTiers1Div);

gameCanvas.appendChild(allTiers2Div);
////////ADDED
gameCanvas.appendChild(BobMapDiv);

gameCanvas.appendChild(MaMMapDiv);

gameCanvas.appendChild(GDMapDiv);

gameCanvas.appendChild(GoCMapDiv);

gameCanvas.appendChild(FWMapDiv);

gameCanvas.appendChild(NQMapDiv);

gameCanvas.appendChild(RTMapDiv);
///////ADDED

gameCanvas.appendChild(voorashLowTierButtonDiv);

gameCanvas.appendChild(allTiers1ButtonDiv);

gameCanvas.appendChild(allTiers2ButtonDiv);

///S raid buttons
gameCanvas.appendChild(smallTierButtonDiv);

gameCanvas.appendChild(mediumTierButtonDiv);

gameCanvas.appendChild(largeTierButtonDiv);

gameCanvas.appendChild(epicTierButtonDiv);

gameCanvas.appendChild(colosalTierButtonDiv);

gameCanvas.appendChild(gigaTierButtonDiv);

gameCanvas.appendChild(eliteTierButtonDiv);
///

gameCanvas.appendChild(OldGuildTierButtonDiv);

gameCanvas.appendChild(voorashGuildTierButtonDiv);

gameCanvas.appendChild(voorashGuildTier2ButtonDiv);

////////ADDED
gameCanvas.appendChild(LoDBoBMapTierButtonDiv);

gameCanvas.appendChild(LoDMaMMapTierButtonDiv);

gameCanvas.appendChild(LoDGDMapTierButtonDiv);

gameCanvas.appendChild(LoDGoCMapTierButtonDiv);

gameCanvas.appendChild(LoDFWMapTierButtonDiv);

gameCanvas.appendChild(LoDNQMapTierButtonDiv);


gameCanvas.appendChild(LoDRTMapTierButtonDiv);
///////ADDED

///Position of pictures if you want pics on right just change "left" into right

$("#voorashLowTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#voorashLowTierDiv").hide();
///
$("#smallTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#smallTierDiv").hide();

$("#mediumTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#mediumTierDiv").hide();

$("#largeTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#largeTierDiv").hide();

$("#epicTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#epicTierDiv").hide();

$("#colosalTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#colosalTierDiv").hide();

$("#gigaTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#gigaTierDiv").hide();

$("#eliteTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#eliteTierDiv").hide();
///

$("#OldguildTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#OldguildTierDiv").hide();

$("#guildTierDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#guildTierDiv").hide();

$("#guildTier2Div").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#guildTier2Div").hide();



$("#allTiers1Div").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#allTiers1Div").hide();

$("#allTiers2Div").css({"position":"fixed","top":"0px","right":"0px","z-index":"100000","background-color":"white"}); 
$("#allTiers2Div").hide();

/////////////ADDED
$("#BobMapDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#BobMapDiv").hide();

$("#MaMMapDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#MaMMapDiv").hide();

$("#GDMapDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#GDMapDiv").hide();

$("#GoCMapDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#GoCMapDiv").hide();

$("#FWMapDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#FWMapDiv").hide();

$("#NQMapDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#NQMapDiv").hide();

$("#RTMapDiv").css({"position":"fixed","top":"0px","left":"0px","z-index":"100000","background-color":"white"}); 
$("#RTMapDiv").hide();
////////////ADDED



//Positions of buttons if you want buttons on right just change "left" into "right" also if you want buttons on specific location just play with "top" and "left" px
var divWidth = "60px";
$("#voorashLowTierButtonDiv").css({"position":"fixed","top":"0px","left":"0px","width":divWidth,"border": "1px solid", "z-index":"99","background-color":"white"}); 
$("#voorashLowTierButtonDiv").show();

///

$("#smallTierButtonDiv").css({"position":"fixed","top":"20px","left":"0px","width":divWidth,"border": "1px solid", "z-index":"99","background-color":"white"}); 
$("#smallTierButtonDiv").show();

$("#mediumTierButtonDiv").css({"position":"fixed","top":"40px","left":"0px","width":divWidth,"border": "1px solid", "z-index":"99","background-color":"white"}); 
$("#mediumTierButtonDiv").show();

$("#largeTierButtonDiv").css({"position":"fixed","top":"60px","left":"0px","width":divWidth,"border": "1px solid", "z-index":"99","background-color":"white"}); 
$("#largeTierButtonDiv").show();

$("#epicTierButtonDiv").css({"position":"fixed","top":"80px","left":"0px","width":divWidth,"border": "1px solid", "z-index":"99","background-color":"white"}); 
$("#epicTierButtonDiv").show();

$("#colosalTierButtonDiv").css({"position":"fixed","top":"100px","left":"0px","width":divWidth,"border": "1px solid", "z-index":"99","background-color":"white"}); 
$("#colosalTierButtonDiv").show();

$("#gigaTierButtonDiv").css({"position":"fixed","top":"120px","left":"0px","width":divWidth,"border": "1px solid", "z-index":"99","background-color":"white"}); 
$("#gigaTierButtonDiv").show();

$("#eliteTierButtonDiv").css({"position":"fixed","top":"140px","left":"0px","width":divWidth,"border": "1px solid", "z-index":"99","background-color":"white"}); 
$("#eliteTierButtonDiv").show();
///

$("#OldGuildTierButtonDiv").css({"position":"fixed","top":"170px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#OldGuildTierButtonDiv").show();

$("#voorashGuildTierButtonDiv").css({"position":"fixed","top":"190px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#voorashGuildTierButtonDiv").show();

$("#voorashGuildTier2ButtonDiv").css({"position":"fixed","top":"210px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#voorashGuildTier2ButtonDiv").show();







//////////ADDED
$("#LoDBoBMapTierButtonDiv").css({"position":"fixed","top":"240px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#LoDBoBMapTierButtonDiv").show();

$("#LoDMaMMapTierButtonDiv").css({"position":"fixed","top":"260px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#LoDMaMMapTierButtonDiv").show();

$("#LoDGDMapTierButtonDiv").css({"position":"fixed","top":"280px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#LoDGDMapTierButtonDiv").show();

$("#LoDGoCMapTierButtonDiv").css({"position":"fixed","top":"300px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#LoDGoCMapTierButtonDiv").show();

$("#LoDFWMapTierButtonDiv").css({"position":"fixed","top":"320px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#LoDFWMapTierButtonDiv").show();

$("#LoDNQMapTierButtonDiv").css({"position":"fixed","top":"340px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#LoDNQMapTierButtonDiv").show();

$("#LoDRTMapTierButtonDiv").css({"position":"fixed","top":"360px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#LoDRTMapTierButtonDiv").show();
//////////ADDED
$("#allTiers1ButtonDiv").css({"position":"fixed","top":"390px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#allTiers1ButtonDiv").show();

$("#allTiers2ButtonDiv").css({"position":"fixed","top":"410px","left":"0px","width":divWidth,"border": "1px solid","z-index":"99","background-color":"white"}); 
$("#allTiers2ButtonDiv").show();

////////////////////////////
////////////////////////////
////////////////////////////

// Low Tier Div Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#voorashLowTierDiv\", \"click\", function() {$(\"#voorashLowTierDiv\").hide();});";
$("head").append( script );


var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#voorashLowTierButtonDiv\", \"click\", function() {$(\"#voorashLowTierDiv\").show();});";
$("head").append( script );

///

//Small tiers show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#smallTierDiv\", \"click\", function() {$(\"#smallTierDiv\").hide();});";
$("head").append( script );


var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#smallTierButtonDiv\", \"click\", function() {$(\"#smallTierDiv\").show();});";
$("head").append( script );

//Medium tiers show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#mediumTierDiv\", \"click\", function() {$(\"#mediumTierDiv\").hide();});";
$("head").append( script );


var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#mediumTierButtonDiv\", \"click\", function() {$(\"#mediumTierDiv\").show();});";
$("head").append( script );

//Large tiers show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#largeTierDiv\", \"click\", function() {$(\"#largeTierDiv\").hide();});";
$("head").append( script );


var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#largeTierButtonDiv\", \"click\", function() {$(\"#largeTierDiv\").show();});";
$("head").append( script );

//Epic tiers show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#epicTierDiv\", \"click\", function() {$(\"#epicTierDiv\").hide();});";
$("head").append( script );


var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#epicTierButtonDiv\", \"click\", function() {$(\"#epicTierDiv\").show();});";
$("head").append( script );

//Colosal tiers show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#colosalTierDiv\", \"click\", function() {$(\"#colosalTierDiv\").hide();});";
$("head").append( script );


var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#colosalTierButtonDiv\", \"click\", function() {$(\"#colosalTierDiv\").show();});";
$("head").append( script );

//Giga tiers show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#gigaTierDiv\", \"click\", function() {$(\"#gigaTierDiv\").hide();});";
$("head").append( script );


var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#gigaTierButtonDiv\", \"click\", function() {$(\"#gigaTierDiv\").show();});";
$("head").append( script );

//Elite tiers show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#eliteTierDiv\", \"click\", function() {$(\"#eliteTierDiv\").hide();});";
$("head").append( script );


var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#eliteTierButtonDiv\", \"click\", function() {$(\"#eliteTierDiv\").show();});";
$("head").append( script );


// Old Guild Tier Div Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#OldguildTierDiv\", \"click\", function() {$(\"#OldguildTierDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#OldGuildTierButtonDiv\", \"click\", function() {$(\"#OldguildTierDiv\").show();});";
$("head").append( script );


// Guild Tier Div Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#guildTierDiv\", \"click\", function() {$(\"#guildTierDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#voorashGuildTierButtonDiv\", \"click\", function() {$(\"#guildTierDiv\").show();});";
$("head").append( script );


// Guild Tier2 Div Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#guildTier2Div\", \"click\", function() {$(\"#guildTier2Div\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#voorashGuildTier2ButtonDiv\", \"click\", function() {$(\"#guildTier2Div\").show();});";
$("head").append( script );


///LoD BoB Map Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#BobMapDiv\", \"click\", function() {$(\"#BobMapDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#LoDBoBMapTierButtonDiv\", \"click\", function() {$(\"#BobMapDiv\").show();});";
$("head").append( script );

//LoD MaM Map Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#MaMMapDiv\", \"click\", function() {$(\"#MaMMapDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#LoDMaMMapTierButtonDiv\", \"click\", function() {$(\"#MaMMapDiv\").show();});";
$("head").append( script );

//LoD GD Map Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#GDMapDiv\", \"click\", function() {$(\"#GDMapDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#LoDGDMapTierButtonDiv\", \"click\", function() {$(\"#GDMapDiv\").show();});";
$("head").append( script );

//LoD GoC Map Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#GoCMapDiv\", \"click\", function() {$(\"#GoCMapDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#LoDGoCMapTierButtonDiv\", \"click\", function() {$(\"#GoCMapDiv\").show();});";
$("head").append( script );

//LoD FW Map Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#FWMapDiv\", \"click\", function() {$(\"#FWMapDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#LoDFWMapTierButtonDiv\", \"click\", function() {$(\"#FWMapDiv\").show();});";
$("head").append( script );

//LoD NQ Map Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#NQMapDiv\", \"click\", function() {$(\"#NQMapDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#LoDNQMapTierButtonDiv\", \"click\", function() {$(\"#NQMapDiv\").show();});";
$("head").append( script );

//LoD RT Map Show and Hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#RTMapDiv\", \"click\", function() {$(\"#RTMapDiv\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#LoDRTMapTierButtonDiv\", \"click\", function() {$(\"#RTMapDiv\").show();});";
$("head").append( script );

//All Tiers 1 show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#allTiers1Div\", \"click\", function() {$(\"#allTiers1Div\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#allTiers1ButtonDiv\", \"click\", function() {$(\"#allTiers1Div\").show();});";
$("head").append( script );

//All Tiers 2 show and hide
var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#allTiers2Div\", \"click\", function() {$(\"#allTiers2Div\").hide();});";
$("head").append( script );

var script = document.createElement( 'script' );
script.type = 'text/javascript';
script.text = "$(document).delegate(\"#allTiers2ButtonDiv\", \"click\", function() {$(\"#allTiers2Div\").show();});";
$("head").append( script );

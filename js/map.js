var map1;
var map2;
var map3;
var map4;
var map5;
var map6;
var map7;
var map8;
var map9;
var map10;
var map11;
var map12;
var map13;
/*
$('.about-me').click(function(){
  if ($exp_project == false && $inprogress == false && $contactopen == false)
  {
    s = new Date();
    growaboutme();
  }
});*/

function growaboutme () {

  $(".arrow").css("opacity", "1");

  if ($(window).width() < 500) {

  // set up proper image for dotted line
  $('.path').attr("src", "images/path_4x.svg?" + s);

  // set timings for the info boxes to appear
  maptimer(0, 4000, 8000, 12500, 14300, 16500, 18000, 19500, 21800, 23300, 26500, 28400, 30000);
  maparrows ('tri-right1','tri-left1','tri-top2','tri-right2','tri-top1','tri-right2','tri-left1','tri-right1','tri-right1','tri-bottom2','tri-left1','tri-left2','tri-right1');
  }


  if ($(window).width() >= 500 && $(window).width() < 768) {

  // set up proper image for dotted line
  $('.path').attr("src", "images/path_6x.svg?" + s);

  // set timings for the info boxes to appear
  maptimer(0, 2000, 3000, 11000, 13000, 14700, 17000, 19000, 21000, 21500, 25500, 28000, 30000);
  maparrows ('tri-right1','tri-left1','tri-top2','tri-top2','tri-left1','tri-left1','tri-right1','tri-bottom1','tri-right1','tri-bottom2','tri-left1','tri-left1','tri-right2');
  }


  if ($(window).width() >= 768 && $(window).width() < 1024) {

  // set up proper image for dotted line
  $('.path').attr("src", "images/path_8x.svg?" + s);

  // set timings for the info boxes to appear
  maptimer(0, 2000, 5000, 8000, 9500, 11300, 12500, 13500, 17800, 19100, 23500, 27000, 30000);
  maparrows ('tri-right1','tri-top2','tri-left2','tri-left2','tri-top1','tri-right2','tri-top2','tri-bottom1','tri-left2','tri-bottom2','tri-top1','tri-top2','tri-bottom2');
  }


  if ($(window).width() >= 1024 && $(window).width() < 1440) {

  // set up proper image for dotted line
  $('.path').attr("src", "images/path_10x.svg?" + s);

  // set timings for the info boxes to appear
  maptimer(0, 1500, 5000, 8000, 9800, 12000, 12400, 14300, 17500, 22500, 26500, 28500, 30000);
  maparrows ('tri-right1','tri-left2','tri-right1','tri-top2','tri-left1','tri-bottom2','tri-left2','tri-right1','tri-right1','tri-left2','tri-right1','tri-top1','tri-right1');
  }


  if ($(window).width() >= 1440) {

  // set up proper image for dotted line
  $('.path').attr("src", "images/path_14x.svg?" + s);

  // set timings for the info boxes to appear
  maptimer(0, 1500, 3700, 7500, 8800, 11300, 14000, 15000, 21000, 23000, 24500, 27000, 30000);
  maparrows ('tri-right1','tri-top1','tri-left1','tri-left1','tri-top1','tri-right1','tri-right1','tri-left1','tri-left1','tri-top2','tri-bottom1','tri-left1','tri-right2');
  }

};


function maptimer ($a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m) {

  // set timings for the info boxes to appear
  map1 = setTimeout(function() {$('.map-child').velocity({opacity:1}, {duration:500});},$a);
  map2 = setTimeout(function() {$('.map-college').velocity({opacity:1}, {duration:500});},$b);
  map3 = setTimeout(function() {$('.map-lasp').velocity({opacity:1}, {duration:500});},$c);
  map4 = setTimeout(function() {$('.map-lupton').velocity({opacity:1}, {duration:500});},$d);
  map5 = setTimeout(function() {$('.map-marry').velocity({opacity:1}, {duration:500});},$e);
  map6 = setTimeout(function() {$('.map-book').velocity({opacity:1}, {duration:500});},$f);
  map7 = setTimeout(function() {$('.map-belleview').velocity({opacity:1}, {duration:500});},$g);
  map8 = setTimeout(function() {$('.map-kid1').velocity({opacity:1}, {duration:500});},$h);
  map9 = setTimeout(function() {$('.map-wyzant').velocity({opacity:1}, {duration:500});},$i);
  map10 = setTimeout(function() {$('.map-kid2').velocity({opacity:1}, {duration:500});},$j);
  map11 = setTimeout(function() {$('.map-terraxml').velocity({opacity:1}, {duration:500});},$k);
  map12 = setTimeout(function() {$('.map-hss').velocity({opacity:1}, {duration:500});},$l);
  map13 = setTimeout(function() {$('.map-future').velocity({opacity:1}, {duration:500});},$m);

};


function maparrows ($n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x, $y, $z) {

  // position the arrows coming off each box
  $('.arrow-child').addClass($n);
  $('.arrow-college').addClass($o);
  $('.arrow-lasp').addClass($p);
  $('.arrow-lupton').addClass($q);
  $('.arrow-marry').addClass($r);
  $('.arrow-book').addClass($s);
  $('.arrow-belleview').addClass($t);
  $('.arrow-kid1').addClass($u);
  $('.arrow-wyzant1').addClass($v);
  $('.arrow-wyzant2').addClass($w);
  $('.arrow-kid2').addClass($x);
  $('.arrow-terraxml').addClass($y);
  $('.arrow-hss').addClass($z);

}

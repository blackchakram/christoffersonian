/* this file does the initial loading of each logo and image
to give the site a more slick appearance.
*/
var $drk1 = $('.drk1');
var $drk2 = $('.drk2');
var $drk3 = $('.drk3');
var $drk4 = $('.drk4');
var $drk5 = $('.drk5');
var $drk6 = $('.drk6');
var $drk7 = $('.drk7');
var $med1 = $('.med1');
var $med2 = $('.med2');
var $med3 = $('.med3');
var $med4 = $('.med4');
var $med5 = $('.med5');
var $med6 = $('.med6');
var $c_abt = $('.about-me');
var $c_hlp = $('.helping-hands');
var $c_crn = $('.cornucopia');
var $c_apt = $('.airport-navigator');
var $c_blg = $('.blog');
var $c_prt = $('.portfolio');

var $setone = $('.set1');
var $settwo = $('.set2');
var $setfour = $('.set4');
var $setseven = $('.set7');
var $setnine = $('.set9');


var $about_anim = false;
var $toc_anim = false;
var $objective_anim = false;
var $research_anim = false;
var $ia_anim = false;
var $mockups_anim = false;
var $branding_anim = false;
var $testing_anim = false;
var $future_anim = false;
var $result_anim = false;

var $windowtop = 0;
var $windowbottom = 0;
var $windowpos = 0;

$drk1.velocity({opacity:1}, {duration:400, delay:0});
$setone.velocity({opacity:1}, {duration:400, delay:150});
$med3.velocity({opacity:1}, {duration:400, delay:300});
$c_abt.velocity({opacity:1}, {duration:400, delay:450});
$settwo.velocity({opacity:1}, {duration:400, delay:450});
$drk2.velocity({opacity:1}, {duration:400, delay:600});
$med5.velocity({opacity:1}, {duration:400, delay:750});
$drk3.velocity({opacity:1}, {duration:400, delay:900});
$c_apt.velocity({opacity:1}, {duration:400, delay:1050});
$setfour.velocity({opacity:1}, {duration:400, delay:1050});
$med1.velocity({opacity:1}, {duration:400, delay:1200});
$drk7.velocity({opacity:1}, {duration:400, delay:1350});
$med2.velocity({opacity:1}, {duration:400, delay:1500});
$c_prt.velocity({opacity:1}, {duration:400, delay:1500});
$c_hlp.velocity({opacity:1}, {duration:400, delay:1650});
$setseven.velocity({opacity:1}, {duration:400, delay:1650});
$drk6.velocity({opacity:1}, {duration:400, delay:1800});
$c_blg.velocity({opacity:1}, {duration:400, delay:1800});
$drk5.velocity({opacity:1}, {duration:400, delay:1950});
$med4.velocity({opacity:1}, {duration:400, delay:2100});
$med6.velocity({opacity:1}, {duration:400, delay:2250});
$c_crn.velocity({opacity:1}, {duration:400, delay:2400});
$setnine.velocity({opacity:1}, {duration:400, delay:2400});
$drk4.velocity({opacity:1}, {duration:400, delay:2550});

// animate a few elements on hover
$('.linkedinicon').hover(function(){$(this).attr("src", "images/icon_linkedin_hover.svg");}, function(){$(this).attr("src", "images/icon_linkedin.svg");});
$('.infoform').hover(function(){$(this).attr("src", "images/icon_email_hover.svg");}, function(){$(this).attr("src", "images/icon_email.svg");});
$('.close_x, .close_form_x').hover(function(){$(this).css("color", "#777777");}, function(){$(this).css("color", "#000000");});
$('.submit').hover(function(){$(this).css("background-color", "#CCCCCC");}, function(){$(this).css("background-color", "#FFFFFF");});



// reload the animated icons when they come into the viewer window for the first time
$(window).scroll(function() {drawicons();});


function drawicons() {
  $windowpos = $(window).scrollTop() + $(window).height();

  if ( $about_anim == false && $windowpos > $('.icon_about').offset().top && $('.icon_about').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_about img').attr("src", "images/icon_about.svg?" + d);
    $about_anim = true;
  }
  if ( $toc_anim == false && $windowpos > $('.icon_toc').offset().top && $('.icon_toc').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_toc img').attr("src", "images/icon_toc.svg?" + d);
    $toc_anim = true;
  }
  if ( $objective_anim == false && $windowpos > $('.icon_objectives').offset().top && $('.icon_objectives').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_objectives img').attr("src", "images/icon_objectives.svg?" + d);
    $objective_anim = true;
  }
  if ( $research_anim == false && $windowpos > $('.icon_research').offset().top && $('.icon_research').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_research img').attr("src", "images/icon_research.svg?" + d);
    $research_anim = true;
  }
  if ( $ia_anim == false && $windowpos > $('.icon_ia').offset().top && $('.icon_ia').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_ia img').attr("src", "images/icon_ia.svg?" + d);
    $ia_anim = true;
  }
  if ( $mockups_anim == false && $windowpos > $('.icon_mockups').offset().top && $('.icon_mockups').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_mockups img').attr("src", "images/icon_mockups.svg?" + d);
    $mockups_anim = true;
  }
  if ( $branding_anim == false && $windowpos > $('.icon_branding').offset().top && $('.icon_branding').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_branding img').attr("src", "images/icon_branding.svg?" + d);
    $branding_anim = true;
  }
  if ( $testing_anim == false && $windowpos > $('.icon_testing').offset().top && $('.icon_testing').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_testing img').attr("src", "images/icon_testing.svg?" + d);
    $testing_anim = true;
  }
  if ( $future_anim == false && $windowpos > $('.icon_future').offset().top && $('.icon_future').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_future img').attr("src", "images/icon_future.svg?" + d);
    $future_anim = true;
  }
  if ( $result_anim == false && $windowpos > $('.icon_result').offset().top && $('.icon_result').offset().top > $(window).scrollTop() )
  {
    var d = new Date();
    $('.icon_result img').attr("src", "images/icon_result.svg?" + d);
    $result_anim = true;
  }
};

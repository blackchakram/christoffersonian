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
var $tools_anim = false;
var $research_anim = false;
var $mvp_anim = false;
var $branding_anim = false;
var $ia_anim = false;
var $mockups_anim = false;
var $future_anim = false;


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
$('.ghicon').hover(function(){$(this).attr("src", "images/icon_github_hover.svg");}, function(){$(this).attr("src", "images/icon_github.svg");});
$('.close_x, .close_form_x').hover(function(){$(this).css("color", "#777777");}, function(){$(this).css("color", "#000000");});
$('.submit').hover(function(){$(this).css("background-color", "#CCCCCC");}, function(){$(this).css("background-color", "#FFFFFF");});

// redraw the signature when clicked on
$('.sig').click(function(){
  var d = new Date();
  $('.sig').attr("src", "images/sig_animated.svg?" + d);
});

// reload the animated icons when they come into the viewer window for the first time
$(window).scroll(function() {drawicons();});


function drawicons() {
  $windowpos = $(window).scrollTop() + $(window).height();

  if ( $about_anim == false && $windowpos > $('.overview').offset().top && $('.overview').offset().top > $(window).scrollTop() )
  {
    $('.overview .subtitle').addClass("animated fadeInLeft");
    $('.overview .sub-blurb').addClass("animated fadeInRight");
    $about_anim = true;
  }
  if ( $tools_anim == false && $windowpos > $('.tools .content').offset().top && $('.tools .content').offset().top > $(window).scrollTop() )
  {
    $('.tools .subtitle').addClass("animated fadeInLeft");
    $('.tools .sub-blurb').addClass("animated fadeInRight");
    $tools_anim = true;
  }
  if ( $research_anim == false && $windowpos > $('.research .content').offset().top && $('.research .content').offset().top > $(window).scrollTop() )
  {
    $('.research .subtitle').addClass("animated fadeInLeft");
    $('.research .sub-blurb').addClass("animated fadeInRight");
    $research_anim = true;
  }
  if ( $mvp_anim == false && $windowpos > $('.mvp .content').offset().top && $('.mvp .content').offset().top > $(window).scrollTop() )
  {
    $('.mvp .subtitle').addClass("animated fadeInLeft");
    $('.mvp .sub-blurb').addClass("animated fadeInRight");
    $mvp_anim = true;
  }
  if ( $branding_anim == false && $windowpos > $('.branding .content').offset().top && $('.branding .content').offset().top > $(window).scrollTop() )
  {
    $('.branding .subtitle').addClass("animated fadeInLeft");
    $('.branding .sub-blurb').addClass("animated fadeInRight");
    $branding_anim = true;
  }
  if ( $ia_anim == false && $windowpos > $('.IA .content').offset().top && $('.IA .content').offset().top > $(window).scrollTop() )
  {
    $('.IA .subtitle').addClass("animated fadeInLeft");
    $('.IA .sub-blurb').addClass("animated fadeInRight");
    $ia_anim = true;
  }
  if ( $mockups_anim == false && $windowpos > $('.mockups .content').offset().top && $('.mockups .content').offset().top > $(window).scrollTop() )
  {
    $('.mockups .subtitle').addClass("animated fadeInLeft");
    $('.mockups .sub-blurb').addClass("animated fadeInRight");
    $mockups_anim = true;
  }
  if ( $future_anim == false && $windowpos > $('.future .content').offset().top && $('.future .content').offset().top > $(window).scrollTop() )
  {
    $('.future .subtitle').addClass("animated fadeInLeft");
    $('.future .sub-blurb').addClass("animated fadeInRight");
    $future_anim = true;
  }
};

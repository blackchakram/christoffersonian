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
var $drk8 = $('.drk8');
var $drk9 = $('.drk9');
var $drk10 = $('.drk10');
var $drk11 = $('.drk11');
var $drk12 = $('.drk12');
var $drk13 = $('.drk13');
var $med1 = $('.med1');
var $med2 = $('.med2');
var $med3 = $('.med3');
var $med4 = $('.med4');
var $med5 = $('.med5');
var $med6 = $('.med6');
var $med7 = $('.med7');
var $med8 = $('.med8');
var $med9 = $('.med9');
var $med10 = $('.med10');
var $med11 = $('.med11');
var $med12 = $('.med12');
var $med13 = $('.med13');
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
var $deliverable_anim = false;
var $future_anim = false;

var $exp_project = false;

var $windowtop = 0;
var $windowbottom = 0;
var $windowpos = 0;

$drk1.velocity({opacity:1}, {duration:400, delay:0});
$med11.velocity({opacity:1}, {duration:400, delay:150});
$med8.velocity({opacity:1}, {duration:400, delay:150});
$setone.velocity({opacity:1}, {duration:400, delay:150});
$med3.velocity({opacity:1}, {duration:400, delay:300});
$drk9.velocity({opacity:1}, {duration:400, delay:350});
$c_abt.velocity({opacity:1}, {duration:400, delay:450});
$settwo.velocity({opacity:1}, {duration:400, delay:450});
$drk2.velocity({opacity:1}, {duration:400, delay:600});
$med12.velocity({opacity:1}, {duration:400, delay:600});
$drk11.velocity({opacity:1}, {duration:400, delay:600});
$med5.velocity({opacity:1}, {duration:400, delay:750});
$med13.velocity({opacity:1}, {duration:400, delay:800});
$drk3.velocity({opacity:1}, {duration:400, delay:900});
$c_apt.velocity({opacity:1}, {duration:400, delay:1050});
$med7.velocity({opacity:1}, {duration:400, delay:1050});
$setfour.velocity({opacity:1}, {duration:400, delay:1050});
$med1.velocity({opacity:1}, {duration:400, delay:1200});
$drk7.velocity({opacity:1}, {duration:400, delay:1350});
$med8.velocity({opacity:1}, {duration:400, delay:1400});
$med2.velocity({opacity:1}, {duration:400, delay:1500});
$med9.velocity({opacity:1}, {duration:400, delay:1500});
$c_prt.velocity({opacity:1}, {duration:400, delay:1500});
$c_hlp.velocity({opacity:1}, {duration:400, delay:1650});
$setseven.velocity({opacity:1}, {duration:400, delay:1650});
$drk6.velocity({opacity:1}, {duration:400, delay:1800});
$c_blg.velocity({opacity:1}, {duration:400, delay:1800});
$drk5.velocity({opacity:1}, {duration:400, delay:1950});
$drk12.velocity({opacity:1}, {duration:400, delay:2000});
$med4.velocity({opacity:1}, {duration:400, delay:2100});
$med6.velocity({opacity:1}, {duration:400, delay:2250});
$drk10.velocity({opacity:1}, {duration:400, delay:2250});
$drk8.velocity({opacity:1}, {duration:400, delay:2300});
$c_crn.velocity({opacity:1}, {duration:400, delay:2400});
$drk13.velocity({opacity:1}, {duration:400, delay:2400});
$setnine.velocity({opacity:1}, {duration:400, delay:2400});
$med10.velocity({opacity:1}, {duration:400, delay:2400});
$drk4.velocity({opacity:1}, {duration:400, delay:2550});

// animate a few elements on hover
$('.linkedinicon').hover(function(){$(this).attr("src", "images/icon_linkedin_hover.svg");}, function(){$(this).attr("src", "images/icon_linkedin.svg");});
$('.infoform').hover(function(){$(this).attr("src", "images/icon_email_hover.svg");}, function(){$(this).attr("src", "images/icon_email.svg");});
$('.ghicon').hover(function(){$(this).attr("src", "images/icon_github_hover.svg");}, function(){$(this).attr("src", "images/icon_github.svg");});
$('.close_x, .close_form_x').hover(function(){$(this).css("color", "#777777");}, function(){$(this).css("color", "#000000");});
$('.submit').hover(function(){$(this).css("background-color", "#CCCCCC");}, function(){$(this).css("background-color", "#FFFFFF");});

$('.project, .blog').on({
  mouseenter: function() { $(this).find('.centering .subtitle_icon .subpara').velocity( {opacity:0.4}, {easing: "ease-in-out", duration: 300} ); },
  mouseleave: function() { $(this).find('.centering .subtitle_icon .subpara').velocity( {opacity:1}, {easing: "ease-in-out", duration: 300} ); }
});


// redraw the signature when clicked on
$('.sig').click(function(){
  var d = new Date();
  $('.sig').attr("src", "images/sig_animated.svg?" + d);
});

// reload the animated icons when they come into the viewer window for the first time
$(window).scroll(function() {
  if ($exp_project == true) {
    if (!$expanded_thing.hasClass('about-me')) {drawicons();}
    else {
      if ($(window).scrollTop() > $mapbase - $(window).height() && $(window).width() >= 768)
      {
        $(document).scrollTop($mapbase - $(window).height());
      }
     }
    }
  }
);


function drawicons() {
  $windowpos = $(window).scrollTop() + $(window).height();

  if ( $about_anim == false && $windowpos > $expanded_thing.find('.overview').offset().top && $expanded_thing.find('.overview').offset().top > $(window).scrollTop() )
  {
    $(".overview .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".overview .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $about_anim = true;
  }
  if ( $tools_anim == false && $windowpos > $expanded_thing.find('.tools .content').offset().top && $expanded_thing.find('.tools .content').offset().top > $(window).scrollTop() )
  {
    $(".tools .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".tools .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $tools_anim = true;
  }
  if ( $research_anim == false && $windowpos > $expanded_thing.find('.research .content').offset().top && $expanded_thing.find('.research .content').offset().top > $(window).scrollTop() )
  {
    $(".research .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".research .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $research_anim = true;
  }
  if ( $mvp_anim == false && $windowpos > $expanded_thing.find('.mvp .content').offset().top && $expanded_thing.find('.mvp .content').offset().top > $(window).scrollTop() )
  {
    $(".mvp .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".mvp .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $mvp_anim = true;
  }
  if ( $branding_anim == false && $windowpos > $expanded_thing.find('.branding .content').offset().top && $expanded_thing.find('.branding .content').offset().top > $(window).scrollTop() )
  {
    $(".branding .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".branding .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $branding_anim = true;
  }
  if ( $ia_anim == false && $windowpos > $expanded_thing.find('.IA .content').offset().top && $expanded_thing.find('.IA .content').offset().top > $(window).scrollTop() )
  {
    $(".IA .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".IA .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $ia_anim = true;
  }
  if ( $mockups_anim == false && $windowpos > $expanded_thing.find('.mockups .content').offset().top && $expanded_thing.find('.mockups .content').offset().top > $(window).scrollTop() )
  {
    $(".mockups .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".mockups .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $mockups_anim = true;
  }
  if ( $deliverable_anim == false && $windowpos > $expanded_thing.find('.deliverable .content').offset().top && $expanded_thing.find('.deliverable .content').offset().top > $(window).scrollTop() )
  {
    $(".deliverable .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".deliverable .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $mockups_anim = true;
  }
  if ( $future_anim == false && $windowpos > $expanded_thing.find('.future .content').offset().top && $expanded_thing.find('.future .content').offset().top > $(window).scrollTop() )
  {
    $(".future .subtitle").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $(".future .sub-blurb").velocity({opacity:1}, {easing: "ease-in-out", duration: 1500});
    $future_anim = true;
  }
};

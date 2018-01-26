/*
This script causes grid cards to grow when clicked
and to shrink back to their original size when clicked
again.
*/

var $exp_project = false;   //check which kinds of screen are open
var $exp_detail = false;
var $exp_image = false;
var $is_expanded = null;
var $gridDimensions = $('.main-grid');    // grabs dimensions of main grid
var $scrollpos = 0;                       // grab or set vertical scroll position
var $expanded_thing = null;               // keeps track of open window for resizing
var $inprogress = false;
var $image_inprogress = false;
var $contactopen = false;

// =================== EXPAND OR CONTRACT A CASE STUDY ========================

$('.project').click(function(){
if ($exp_project == false && $inprogress == false && $contactopen == false) // if a window not already expanded, expand one
{
  $inprogress = true;
  $exp_project = true;
  expander($(this));
  setTimeout(function() {$inprogress = false;}, 1500); // slight delay to prevent double click starting it again
}
});

// when close button in corner is clicked
$('.close_x').click(function(){
  if ($exp_project == true && $exp_image == false && $inprogress == false && $contactopen == false) {
    $inprogress = true;
    $exp_project = false;
    condenser($expanded_thing.find(".case-study"));
    history.pushState(null, '', '');
    setTimeout(function() {$inprogress = false;}, 1500); // slight delay to prevent double click starting it again
  }

  if ($exp_image == true && $image_inprogress == false  && $contactopen == false)
    {
      $('body').css("overflow-y", "auto");
      $exp_image = false;
      $image_inprogress = true;
      setTimeout(function() {$image_inprogress = false;}, 500);

      $('.image_viewer_wrapper').velocity({opacity:0}, {duration:1000});
      setTimeout(function() {
        $('.image_viewer_wrapper').css("display", "none");
        $('.iv-container').remove();
        $('<img class="image_viewer" />').appendTo(".image_container");
        $('.image_viewer_wrapper').css("z-index", -1);}, 1000);
    }

});

// when close button for form is clicked
$('.close_form_x').click(function(){
  $contactopen = false;
  setTimeout(function() { $('.formholder').css("display", "none");}, 600);
  $('.formholder').velocity({opacity:0}, {duration:500, delay:0});
  $('body').css("overflow-y", "auto");
});


// when escape key is pressed
$(document).keyup(function(e) {
   if (e.keyCode == 27 && $exp_project == true && $exp_image == false && $inprogress == false && $contactopen == false)  // escape key maps to keycode `27`
   {
     $inprogress = true;
     $exp_project = false;
     condenser($expanded_thing.find(".case-study"));
     setTimeout(function() {$inprogress = false;}, 1500); // slight delay to prevent double click starting it again
   }

   // when form is up
   if (e.keyCode == 27 && $contactopen == true)  // escape key maps to keycode `27`
   {
     $contactopen = false;
        setTimeout(function() { $('.formholder').css("display", "none");}, 600);
     $('.formholder').velocity({opacity:0}, {duration:500, delay:0});
     $('body').css("overflow-y", "auto");
   }

});


// when form icon is clicked
$('.infoform').click(function(){
  $contactopen = true;
  $('.formholder').css("display", "inherit");
  $('.formholder').velocity({opacity:1}, {duration:500, delay:0});
  $('body').css("overflow-y", "hidden");
});

// when form submit is clicked
$('.submit').click(function(){

  $contactopen = false;
  $('.confirmation').css("display", "flex");
  $('form').velocity({opacity:0}, {duration:500, delay:0});
  setTimeout(function() { $('.confirmation').css("z-index", "6000");}, 100);
  $('.confirmation').velocity({opacity:1}, {duration:500, delay:0});

  $('.formholder').velocity({opacity:0}, {duration:500, delay:1500});
  setTimeout(function() { $('.formholder').css("display", "none");}, 2500);

  setTimeout(function() { $('form').css("opacity", "1");}, 2500);
  setTimeout(function() { $('.confirmation').css("opacity", "0");}, 2500);
  setTimeout(function() { $('.confirmation').css("display", "none");}, 2500);

  $('body').css("overflow-y", "auto");
});

// ================================ FUNCTIONS =================================

function expander ($self) {

var $thing_to_expand =  $self.find(".case-study");
var $fade_in = $self.find(".case-study > li");
var $keep_style = $self.find(".case-study > .study-title");
var $detail_grids = $self.find(".case-study > .detail");
var $logo_to_fade = $self.find(".centering"); // wrapper for logo and icon
$scrollpos = $(window).scrollTop();
$expanded_thing = $self;              // marks this element for resizing window after its open

// show x in corner
$(".close_x").velocity({opacity:1}, {duration:500, delay:1000});

// set box to expand to current clicked box dimensions and position
$thing_to_expand.css("width", $self.width() + "px");
$thing_to_expand.css("height", $self.height() + "px");
$thing_to_expand.css("top", 0 + "px");
$thing_to_expand.css("left", 0 + "px");

// hide the logo and title
$logo_to_fade.velocity({opacity:0}, {duration:500, delay:0});

// undo the hidden attribute for the box to expand
setTimeout(function() { $thing_to_expand.css("opacity", 1);  }, 500);
setTimeout(function() { $thing_to_expand.css("display", "grid");  }, 500);

// scroll to the top of the screen so the user sees the case study from the start
setTimeout(function() { $(window).scrollTop(0); }, 1500);

// expand a cell of the original background grid so the case study can be tall enough
if ($(window).width() < 500) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 64 / 3");}, 1000);};
if ($(window).width() >= 500) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 68 / 3");}, 1000);};
if ($(window).width() >= 768) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 47 / 3");}, 1000);};
if ($(window).width() >= 1024) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 30 / 3");}, 1000);};
if ($(window).width() >= 1440) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 21 / 3");}, 1000);};

// check to see if grid is taller than visible screen so expansion fills whole screen
var $height = 0;
if ($gridDimensions.height() < $(window).scrollTop() + $(window).height())
{$height = $(window).scrollTop() + $(window).height();}
else {$height = $gridDimensions.height();}

$thing_to_expand.velocity({width: "100vw", height: $height + "px", top: -$self.offset().top + "px", left: -$self.offset().left + "px" }, {delay: 500, easing: "ease-in-out", duration: 500});
setTimeout(function() { $thing_to_expand.css("height", $gridDimensions.height() + "px"); }, 1110);

// fade in the new content inside the newly expanded case study
setTimeout(function() { $logo_to_fade.css("opacity", "1"); }, 1500);
setTimeout(function() { $fade_in.css("display", "inherit"); }, 1500);
setTimeout(function() { $detail_grids.css("display", "grid"); }, 1500);
$fade_in.velocity({opacity:1}, {duration:1000, delay:1500});
setTimeout(function() { $keep_style.css("display", "flex"); }, 1510);

/* ======== ALTER COLOR BOXES ======== */

var $dark_tiles = $(".edrk");
var $medium_tiles = $(".emed");
var $detail_subtitle = $('.detail .subtitle');
var $detail_icon = $('.detail .icon');

if ($self.hasClass('helping-hands'))
{
  $dark_tiles.css("background-color", "#BCDEB6");
  $medium_tiles.css("background-color", "#BDE2B6");
  $detail_subtitle.css("background-color", "#D8EDD4");
  $detail_icon.css("background-color", "#E3F9DF");
}

if ($self.hasClass('cornucopia'))
{
  $dark_tiles.css("background-color", "#DED5B6");
  $medium_tiles.css("background-color", "#E5DCBE");
  $detail_subtitle.css("background-color", "#EDEBD4");
  $detail_icon.css("background-color", "#F9F7DF");
}

if ($self.hasClass('airport-navigator'))
{
  $dark_tiles.css("background-color", "#B6D5DE");
  $medium_tiles.css("background-color", "#C8E1F3");
  $detail_subtitle.css("background-color", "#D4E9ED");
  $detail_icon.css("background-color", "#DFF8F9");
}

if ($self.hasClass('about-me'))
{
  $dark_tiles.css("background-color", "#DCB6DE");
  $medium_tiles.css("background-color", "#EAC8F3");
  $detail_subtitle.css("background-color", "#E4D4ED");
  $detail_icon.css("background-color", "#F2DFF9");
}

if ($self.hasClass('portfolio'))
{
  $dark_tiles.css("background-color", "#DEB6B6");
  $medium_tiles.css("background-color", "#F3C8C8");
  $detail_subtitle.css("background-color", "#EDD4D4");
  $detail_icon.css("background-color", "#F9DFDF");
}

};

// ============================================================================

function condenser ($itself) {

var $thing_to_condense =  $itself;
var $stuff_to_fade = $itself.children();
var $target_to_condense_to = $itself.closest(".project", ".detail");
var $logo_to_fade_in = $itself.siblings(".centering");

// hide x in corner
$(".close_x").velocity({opacity:0}, {duration:500, delay:1000});

// shrink expanded grid back to original size
if ($(window).width() < 500) { $(".drk4").css("grid-area", "13 / 4 / 14 / 5"); };
if ($(window).width() >= 500) { $(".drk4").css("grid-area", "1 / 6 / 2 / 7"); };
if ($(window).width() >= 768) { $(".drk4").css("grid-area", "7 / 4 / 8 / 5"); };
if ($(window).width() >= 1024) { $(".drk4").css("grid-area", "3 / 7 / 4 / 8"); };
if ($(window).width() >= 1440) { $(".drk4").css("grid-area", "5 / 11 / 7 / 13"); };

// fade out the content for the project or details
$stuff_to_fade.velocity({opacity:0}, {duration:500, delay:0});

// actual contraction of the background box
$thing_to_condense.velocity({width: $target_to_condense_to.width() + "px", height: $target_to_condense_to.height() + "px", top: 0, left: 0 }, {delay: 500, easing: "ease-in-out", duration: 500});

$logo_to_fade_in.css("opacity", 0); // make sure logo is off right now so it can fade in soon

// fade out the contracting box itself
$thing_to_condense.velocity({opacity:0}, {duration:500, delay:500});
setTimeout(function() { $thing_to_condense.css("display", "none"); }, 1000);

// re-scroll the window back to where it was originally
setTimeout(function() { $(window).scrollTop($scrollpos); }, 500);

// fade in the new logo again
$logo_to_fade_in.velocity({opacity:1}, {duration:500, delay:1200});

// make sure image viewer is well in the background
$('.image_viewer_wrapper').css("z-index", -1);

// allow reanimation of icons
$about_anim = false;
$toc_anim = false;
$objective_anim = false;
$research_anim = false;
$ia_anim = false;
$mockups_anim = false;
$branding_anim = false;
$testing_anim = false;
$result_anim = false;
$future_anim = false;

};

// ============================================================================

// If the user resizes the browsing window, re-grab the containing
// grid dimensions and alter the expanded card accordingly if one
// is currently expanded.
$(window).resize(function() {
  if ($exp_project == true)
  {
    drawicons();

  jQuery.each($('.case-study'), function() {
    $(this).css("width", "100vw");
    $(this).css("top", -$expanded_thing.offset().top + "px");
    $(this).css("left", -$expanded_thing.offset().left  + "px");

    if ($(window).width() < 500) { $(".drk4").css("grid-area", "10 / 2 / 64 / 3");};
    if ($(window).width() >= 500) { $(".drk4").css("grid-area", "10 / 2 / 68 / 3");};
    if ($(window).width() >= 768) { $(".drk4").css("grid-area", "10 / 2 / 47 / 3");};
    if ($(window).width() >= 1024) { $(".drk4").css("grid-area", "10 / 2 / 30 / 3");};
    if ($(window).width() >= 1440) { $(".drk4").css("grid-area", "10 / 2 / 21 / 3");};
    $(this).css("height", $gridDimensions.height() + "px");

    });
  }

  if ($exp_project == false)
  {
    if ($(window).width() < 500) { $(".drk4").css("grid-area", "13 / 4 / 14 / 5"); };
    if ($(window).width() >= 500) { $(".drk4").css("grid-area", "1 / 6 / 2 / 7"); };
    if ($(window).width() >= 768) { $(".drk4").css("grid-area", "7 / 4 / 8 / 5"); };
    if ($(window).width() >= 1024) { $(".drk4").css("grid-area", "3 / 7 / 4 / 8"); };
    if ($(window).width() >= 1440) { $(".drk4").css("grid-area", "5 / 11 / 7 / 13"); };
  }

  if ($exp_image == true)
  {
    $('.image_viewer_wrapper').css("width", $(window).innerWidth() + "px");
    $('.image_viewer_wrapper').css("height", $(window).innerHeight() + "px");

    $('.image_container, .image_viewer').css("width", "80vw");
    $('.image_container, .image_viewer').css("height", "80vh");
  }

});

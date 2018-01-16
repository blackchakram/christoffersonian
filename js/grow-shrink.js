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

// =================== EXPAND OR CONTRACT A CASE STUDY ========================

$('.project').click(function(){
if ($exp_project == false) // if a window not already expanded, expand one
{
  expander($(this));
  setTimeout(function() {$exp_project = true;}, 1500); // slight delay to prevent double click starting it again
}
});

$('.case-study').click(function(){
if ($exp_project == true && $exp_image == false) // only close if a window is already open
{
  condenser($(this));
  setTimeout(function() {$exp_project = false;}, 1500); // slight delay to prevent double click starting it again
}
});


// when close button in corner is clicked
$('.close_x').click(function(){
  if ($exp_project == true && $exp_image == false) {
    condenser($expanded_thing.find(".case-study"));
    setTimeout(function() {$exp_project = false;}, 1500); // slight delay to prevent double click starting it again
  }
});


// when escape key is pressed
$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
       condenser($expanded_thing.find(".case-study"));
       setTimeout(function() {$exp_project = false;}, 1500); // slight delay to prevent double click starting it again
    }
});


// ================================ FUNCTIONS =================================

function expander ($self) {

var $thing_to_expand =  $self.find(".case-study");
var $fade_in = $self.find(".case-study > li");
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

// actual expansion of the new box
$thing_to_expand.velocity({width: "100vw", height: $gridDimensions.height() + "px", top: -$self.offset().top + "px", left: -$self.offset().left + "px" }, {delay: 500, easing: "ease-in-out", duration: 500});

// fade in the new content inside the newly expanded case study
setTimeout(function() { $logo_to_fade.css("opacity", "1"); }, 1500);
setTimeout(function() { $fade_in.css("display", "inherit"); }, 1500);
setTimeout(function() { $detail_grids.css("display", "grid"); }, 1500);
$fade_in.velocity({opacity:1}, {duration:1000, delay:1500});

/* ======== ALTER COLOR BOXES ======== */

var $dark_tiles = $(".edrk");
var $medium_tiles = $(".emed");

if ($self.hasClass('helping-hands')){$dark_tiles.css("background-color", "#B1D5AA"); $medium_tiles.css("background-color", "#BDE2B6");}
if ($self.hasClass('cornucopia')){$dark_tiles.css("background-color", "#D5CCAA"); $medium_tiles.css("background-color", "#E5DCBE");}
if ($self.hasClass('airport-navigator')){$dark_tiles.css("background-color", "#AACED5"); $medium_tiles.css("background-color", "#C8E1F3");}
if ($self.hasClass('about-me')){$dark_tiles.css("background-color", "#E2E2E2"); $medium_tiles.css("background-color", "#F6F6F6");}

// expand a cell of the original background grid so the case study can be tall enough
if ($(window).width() < 500) {setTimeout(function() { $(".drk4").css("grid-area", "10 / 2 / 64 / 3");}, 1450);};
if ($(window).width() >= 500) {setTimeout(function() { $(".drk4").css("grid-area", "10 / 2 / 68 / 3");}, 1450);};
if ($(window).width() >= 768) {setTimeout(function() { $(".drk4").css("grid-area", "10 / 2 / 47 / 3");}, 1450);};
if ($(window).width() >= 1024) {setTimeout(function() { $(".drk4").css("grid-area", "10 / 2 / 30 / 3");}, 1450);};
if ($(window).width() >= 1440) {setTimeout(function() { $(".drk4").css("grid-area", "10 / 2 / 21 / 3");}, 1450);};

setTimeout(function() { $thing_to_expand.css("height", $gridDimensions.height() + "px");}, 1500);

//auto draw icons for the first 2 fields
var d = new Date();
$('.icon_about img').attr("src", "images/icon_about.svg?" + d);
$('.icon_toc img').attr("src", "images/icon_toc.svg?" + d);
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
$(".drk4").css("grid-area", "10 / 2 / 11 / 3");
if ($(window).width() >= 768) { $(".drk4").css("grid-area", "5 / 3 / 6 / 4"); };
if ($(window).width() >= 1024) { $(".drk4").css("grid-area", "3 / 7 / 4 / 8"); };
if ($(window).width() >= 1440) { $(".drk4").css("grid-area", "3 / 1 / 5 / 3"); };

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

    $('.image_viewer_wrapper, .image_container, .image_viewer').css("width", $(window).innerWidth() + "px");
    $('.image_viewer_wrapper, .image_container, .image_viewer').css("height", $(window).innerHeight() + "px");
    });
  }
});


// ========================== RESPONSIVE DESIGN ===============================

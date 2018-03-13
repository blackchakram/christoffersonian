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
var s = new Date();
var sizecategory = 0;     // helps with resizing when the "about me" is open.

// =================== NAVIGATE TO EACH SECTION ON CONTENTS CLICK =============



$('.go-about').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.about').offset().top); });
$('.go-objective').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.objective').offset().top); });
$('.go-research').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.research').offset().top); });
$('.go-ia').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.IA').offset().top); });
$('.go-mockups').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.mockups').offset().top); });
$('.go-branding').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.branding').offset().top); });
$('.go-testing').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.testing').offset().top); });
$('.go-result').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.result').offset().top); });
$('.go-future').click(function(){ $(window).scrollTop($(this).parents().eq(3).find('.future').offset().top); });


// =================== EXPAND OR CONTRACT A CASE STUDY ========================

$('.project').click(function(){
if ($exp_project == false && $inprogress == false && $contactopen == false) // if a window not already expanded, expand one
{
  if ($(this).hasClass('about-me'))
  {
    s = new Date();
    growaboutme();

  }

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

    history.pushState(null, '', '/');   // update things for google analytics
    document.title = "The Portfolio of Josh Christofferson";
    gtag('config', 'UA-113084862-1', {
      'page_title':'The Portfolio of Josh Christofferson',
      'page_location':'christoffersonian.com',
      'page_path':''
    });

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
  setTimeout(function() { $('.formholder, .formbg').css("display", "none");}, 600);
  $('.formholder, .formbg').velocity({opacity:0}, {duration:500, delay:0});
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

     history.pushState(null, '', '/');   // update things for google analytics
     document.title = "The Portfolio of Josh Christofferson";
     gtag('config', 'UA-113084862-1', {
       'page_title':'The Portfolio of Josh Christofferson',
       'page_location':'christoffersonian.com',
       'page_path':''
     });
   }

   // when form is up
   if (e.keyCode == 27 && $contactopen == true)  // escape key maps to keycode `27`
   {
     $contactopen = false;
        setTimeout(function() { $('.formholder, .formbg').css("display", "none");}, 600);
     $('.formholder, .formbg').velocity({opacity:0}, {duration:500, delay:0});
     $('body').css("overflow-y", "auto");
   }

});


// intercept a back button press and redirect to main site again
window.onhashchange = function() {

  if ($exp_project == true && $exp_image == false && $inprogress == false && $contactopen == false) {
    $inprogress = true;
    $exp_project = false;
    condenser($expanded_thing.find(".case-study"));

    history.pushState(null, '', '/');   // update things for google analytics
    document.title = "The Portfolio of Josh Christofferson";
    gtag('config', 'UA-113084862-1', {
      'page_title':'The Portfolio of Josh Christofferson',
      'page_location':'christoffersonian.com',
      'page_path':''
    });

    setTimeout(function() {$inprogress = false;}, 1500); // slight delay to prevent double click starting it again
  }else{

  }
}


// when form icon is clicked
$('.infoform').click(function(){
  $contactopen = true;
  $('.formholder, .formbg').css("display", "inherit");
  $('.formholder, .formbg').velocity({opacity:1}, {duration:500, delay:0});
  $('body').css("overflow-y", "hidden");
});

// when form submit is clicked
$('.submit').click(function(){

  $contactopen = false;
  $('.confirmation').css("display", "flex");
  $('form').velocity({opacity:0}, {duration:500, delay:0});
  setTimeout(function() { $('.confirmation').css("z-index", "6000");}, 100);
  $('.confirmation').velocity({opacity:1}, {duration:500, delay:0});

  $('.formholder, .formbg').velocity({opacity:0}, {duration:500, delay:1500});
  setTimeout(function() { $('.formholder, .formbg').css("display", "none");}, 2500);

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
$thing_to_expand.css("left", -8 + "px");

// hide the logo and title
$logo_to_fade.velocity({opacity:0}, {duration:500, delay:0});

// undo the hidden attribute for the box to expand
setTimeout(function() { $thing_to_expand.css("opacity", 1);  }, 500);
setTimeout(function() { $thing_to_expand.css("display", "block");  }, 500);

// scroll to the top of the screen so the user sees the case study from the start
setTimeout(function() { $(window).scrollTop(0); }, 1500);

// replace the title overlay image for case studies when large enough
if ($expanded_thing.hasClass('helping-hands')) {
    if ($(window).width() >= 768) {
      $('.titleoverlay').attr("src", "images/hh_title_overlay_large.svg");
    }else{
      $('.titleoverlay').attr("src", "images/hh_title_overlay.svg");
    }
  }

  if ($expanded_thing.hasClass('portfolio')) {
      if ($(window).width() >= 768) {
        $('.titleoverlay').attr("src", "images/pt_title_overlay_large.svg");
      }else{
        $('.titleoverlay').attr("src", "images/pt_title_overlay.svg");
      }
    }

// expand a cell of the original background grid so the case study can be tall enough
if ($(window).width() < 500) {
  if ($self.hasClass('about-me')) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 33 / 3");}, 1000);}
  else {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 81 / 3");}, 1000);};
  sizecategory = 1;
};
if ($(window).width() >= 500 && $(window).width() < 768) {
  if ($self.hasClass('about-me')) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 25 / 3");}, 1000);}
  else {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 98 / 3");}, 1000);};
  sizecategory = 2;
};
if ($(window).width() >= 768 && $(window).width() < 1024) {
  if ($self.hasClass('about-me')) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 16 / 3");}, 1000);}
  else {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 87 / 3");}, 1000);};
  sizecategory = 3;
};
if ($(window).width() >= 1024 && $(window).width() < 1440) {
  if ($self.hasClass('about-me')) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 14 / 3");}, 1000);}
  else {
    setTimeout(function() {
      var $gridheight = Math.floor(11000/($(window).width()/10));
      $(".drk4").css("grid-area", "10 / 2 / " + $gridheight + " / 3");}, 1000);
    };
  sizecategory = 4;
};
if ($(window).width() >= 1440) {
  if ($self.hasClass('about-me')) {setTimeout(function() {$(".drk4").css("grid-area", "10 / 2 / 9 / 3");}, 1000);}
  else {
    setTimeout(function() {
      var $gridheight = Math.floor(11000/($(window).width()/14));
      $(".drk4").css("grid-area", "10 / 2 / " + $gridheight + " / 3");}, 1000);
    };
  sizecategory = 5;
};




// check to see if grid is taller than visible screen so expansion fills whole screen
var $height = 0;
if ($gridDimensions.height() < $(window).scrollTop() + $(window).height())
{$height = $(window).scrollTop() + $(window).height();}
else {$height = $gridDimensions.height();}

// if the window is wide enough, slide bottom of scroll by constant amount instead of by grid size
if ($(window).width() >= 1024) {
  $height = 10570 + $(window).width()/2;
}

$thing_to_expand.velocity({width: "100vw", height: $height + "px", top: -$self.offset().top + "px", left: -$self.offset().left-8 + "px" }, {delay: 500, easing: "ease-in-out", duration: 500});

// if the window is wide enough, slide bottom of scroll by constant amount instead of by grid size
if ($(window).width() >= 1024) {
setTimeout(function() { $thing_to_expand.css("height", $height + "px"); }, 2110);
}else{
setTimeout(function() { $thing_to_expand.css("height", $gridDimensions.height() + "px"); }, 2110);
}

// fade in the new content inside the newly expanded case study
setTimeout(function() { $logo_to_fade.css("opacity", "1"); }, 1500);
setTimeout(function() { $fade_in.css("display", "inherit"); }, 1500);
setTimeout(function() { $detail_grids.css("display", "block"); }, 1500);
$fade_in.velocity({opacity:1}, {duration:1000, delay:1500});
setTimeout(function() { $keep_style.css("display", "block"); }, 1510);

//if about me, fade in all content
if ($self.hasClass('about-me')) {$(".am-opacity").velocity({opacity:1}, {duration:1000, delay:1500});}

/* ======== ALTER COLOR BOXES AND GOOGLE ANALYTICS REFERENCE ======== */

var $dark_tiles = $(".edrk");
var $medium_tiles = $(".emed");
var $detail_subtitle = $('.detail .subtitle');
var $detail_icon = $('.detail .icon');

var $am_title = $('.am-title-words');
var $am_title_img = $('.am-title-image');
var $am_subtitle = $('.subgroup-titlebar');
var $sub_content = $('.subgroup-content');

if ($self.hasClass('helping-hands'))
{
  document.title = "Christoffersonian - Helping Hands Case Study";
  gtag('config', 'UA-113084862-1', {
    'page_title':'Christoffersonian - Helping Hands Case Study',
    'page_location':'christoffersonian.com/#helping-hands',
    'page_path':'/#helping-hands'
  });
}

if ($self.hasClass('cornucopia'))
{
  document.title = "Christoffersonian - Cornucopia Case Study";
  gtag('config', 'UA-113084862-1', {
    'page_title':'Christoffersonian - Cornucopia Case Study',
    'page_location':'christoffersonian.com/#cornucopia',
    'page_path':'/#cornucopia'
  });
}

if ($self.hasClass('airport-navigator'))
{
  document.title = "Christoffersonian - Airport Navigator Case Study";
  gtag('config', 'UA-113084862-1', {
    'page_title':'Christoffersonian - Airport Navigator Case Study',
    'page_location':'christoffersonian.com/#airport-navigator',
    'page_path':'/#airport-navigator'
  });
}

if ($self.hasClass('about-me'))
{
  $dark_tiles.css("background-color", "#E4C3E9");
  $medium_tiles.css("background-color", "#EAC8F3");

  $am_title.css("background-color", "#E2C3EB");
  $am_title_img.css("background-color", "#E9C8F1");
  $am_subtitle.css("background-color", "#F1E2F0");
  $sub_content.css("background-color", "#FFFFFF");

  document.title = "Christoffersonian - About Me";
  gtag('config', 'UA-113084862-1', {
    'page_title':'Christoffersonian - About Me',
    'page_location':'christoffersonian.com/#about-me',
    'page_path':'/#about-me'
  });
}

if ($self.hasClass('portfolio'))
{
  document.title = "Christoffersonian - Portfolio Case Study";
  gtag('config', 'UA-113084862-1', {
    'page_title':'Christoffersonian - Portfolio Case Study',
    'page_location':'christoffersonian.com/#portfolio',
    'page_path':'/#portfolio'
  });
}
$('.future').css("z-index", "111");   // hack to make sure future section shows over result masking

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
if ($(window).width() < 500) { $(".drk4").css("grid-area", "12 / 4 / 13 / 5"); };
if ($(window).width() >= 500) { $(".drk4").css("grid-area", "1 / 6 / 2 / 7"); };
if ($(window).width() >= 768) { $(".drk4").css("grid-area", "7 / 4 / 8 / 5"); };
if ($(window).width() >= 1024) { $(".drk4").css("grid-area", "3 / 7 / 4 / 8"); };
if ($(window).width() >= 1440) { $(".drk4").css("grid-area", "5 / 11 / 7 / 13"); };

// fade out the content for the project or details
$stuff_to_fade.velocity({opacity:0}, {duration:500, delay:0});

//if about me, fade out all content
if ($expanded_thing.hasClass('about-me')) {
  $(".am-opacity").velocity({opacity:0}, {duration:500, delay:0});
  setTimeout(function() { $(".map-box").css("opacity", "0"); }, 700);
  /*setTimeout(function() { $(".arrow").css("opacity", "0"); }, 700);*/

  //halt all timeout functions that make boxes appear
  clearTimeout(map1);
  clearTimeout(map2);
  clearTimeout(map3);
  clearTimeout(map4);
  clearTimeout(map5);
  clearTimeout(map6);
  clearTimeout(map7);
  clearTimeout(map8);
  clearTimeout(map9);
  clearTimeout(map10);
  clearTimeout(map11);
  clearTimeout(map12);
  clearTimeout(map13);

  $('.arrow').removeClass('tri-top1 tri-top2 tri-right1 tri-right2 tri-left1 tri-left2 tri-bottom1 tri-bottom2');

}

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
    $(this).css("left", -$expanded_thing.offset().left-8  + "px");

    var oldsize = sizecategory;     // grabs current size category to see if its about to cross a threshhold

if ($expanded_thing.hasClass('helping-hands')) {
    if ($(window).width() >= 768) {
      $('.titleoverlay').attr("src", "images/hh_title_overlay_large.svg");
    }else{
      $('.titleoverlay').attr("src", "images/hh_title_overlay.svg");
    }
  }

  if ($expanded_thing.hasClass('portfolio')) {
      if ($(window).width() >= 768) {
        $('.titleoverlay').attr("src", "images/pt_title_overlay_large.svg");
      }else{
        $('.titleoverlay').attr("src", "images/pt_title_overlay.svg");
      }
    }



    if ($(window).width() < 500) {
      if ($expanded_thing.hasClass('about-me')) {$(".drk4").css("grid-area", "10 / 2 / 33 / 3");}
      else {$(".drk4").css("grid-area", "10 / 2 / 81 / 3");};
      sizecategory = 1;
    };
    if ($(window).width() >= 500 && $(window).width() < 768) {
      if ($expanded_thing.hasClass('about-me')) {$(".drk4").css("grid-area", "10 / 2 / 25 / 3");}
      else {$(".drk4").css("grid-area", "10 / 2 / 98 / 3");};
      sizecategory = 2;
    };
    if ($(window).width() >= 768 && $(window).width() < 1024) {
      if ($expanded_thing.hasClass('about-me')) {$(".drk4").css("grid-area", "10 / 2 / 16 / 3");}
      else {$(".drk4").css("grid-area", "10 / 2 / 87 / 3");};
      sizecategory = 3;
    };
    if ($(window).width() >= 1024 && $(window).width() < 1440) {
      if ($expanded_thing.hasClass('about-me')) {$(".drk4").css("grid-area", "10 / 2 / 14 / 3");}
      else {
        var $gridheight = Math.floor(11000/($(window).width()/10));
        $(".drk4").css("grid-area", "10 / 2 / " + $gridheight + " / 3");
      };
      sizecategory = 4;
    };
    if ($(window).width() >= 1440) {
      if ($expanded_thing.hasClass('about-me')) {$(".drk4").css("grid-area", "10 / 2 / 9 / 3");}
      else {
        var $gridheight = Math.floor(11000/($(window).width()/14));
        $(".drk4").css("grid-area", "10 / 2 / " + $gridheight + " / 3");
      };
      sizecategory = 5;
    };

    if ($(window).width() >= 1024) {
      $(this).css("height", 10570 + $(window).width()/2 + "px");
    } else {
      $(this).css("height", $gridDimensions.height() + "px");

    }


      // if size category has changed, erase and restart the about me stuff
      if (oldsize != sizecategory)
      {
        $(".map-box").css("opacity", "0");

        //halt all timeout functions that make boxes appear
        clearTimeout(map1);
        clearTimeout(map2);
        clearTimeout(map3);
        clearTimeout(map4);
        clearTimeout(map5);
        clearTimeout(map6);
        clearTimeout(map7);
        clearTimeout(map8);
        clearTimeout(map9);
        clearTimeout(map10);
        clearTimeout(map11);
        clearTimeout(map12);
        clearTimeout(map13);

        $('.arrow').removeClass('tri-top1 tri-top2 tri-right1 tri-right2 tri-left1 tri-left2 tri-bottom1 tri-bottom2');

        $('.skipanim').css("display", "inherit");
        $('.skipanim').css("opacity", "1");

        s = new Date();
        growaboutme();
      }

    });
  }

  if ($exp_project == false)
  {
    if ($(window).width() < 500) { $(".drk4").css("grid-area", "12 / 4 / 13 / 5"); };
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

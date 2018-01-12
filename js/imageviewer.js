/*
This script allows users to view images in larger scale.
Also uses imageviewer.js by Sudhanshu Yadav.
*/
var $exp_image = null;
//var $viewer = null;

$('.subimg').click(function(e){

  // show the image viewer
  $('.image_viewer_wrapper').css("display", "flex");

  e.stopPropagation();      // make sure trigger to close case study doesn't fire first
  setTimeout(function() {$exp_image = true;}, 500);

  // stretch the viewer to full screen
  $('.image_viewer_wrapper, .image_container, .image_viewer').css("width", $(window).innerWidth() + "px");
  $('.image_viewer_wrapper, .image_container, .image_viewer').css("height", $(window).innerHeight() + "px");

  // fade in the viewer
  $('.image_viewer_wrapper').velocity({opacity:1}, {duration:1000});

  if($(this).hasClass('hh-re1')){ $('.image_viewer').attr("src", "images/personas_small.png"); $('.image_viewer').attr("data-high-res-src", "images/personas.png");};
  if($(this).hasClass('hh-re2')){ $('.image_viewer').attr("src", "images/competitor_small.png"); $('.image_viewer').attr("data-high-res-src", "images/competitor.png");};
  if($(this).hasClass('hh-ia1')){ $('.image_viewer').attr("src", "images/flow_small.png"); $('.image_viewer').attr("data-high-res-src", "images/flow.png");};
  if($(this).hasClass('hh-mo1')){ $('.image_viewer').attr("src", "images/lofi_small.png"); $('.image_viewer').attr("data-high-res-src", "images/lofi.png");};
  if($(this).hasClass('hh-mo2')){ $('.image_viewer').attr("src", "images/lofi_sketch_small.png"); $('.image_viewer').attr("data-high-res-src", "images/lofi_sketch.png");};
  if($(this).hasClass('hh-br1')){ $('.image_viewer').attr("src", "images/branding_logo_small.png"); $('.image_viewer').attr("data-high-res-src", "images/branding_logo.png");};
  if($(this).hasClass('hh-br2')){ $('.image_viewer').attr("src", "images/branding_colors_small.png"); $('.image_viewer').attr("data-high-res-src", "images/branding_colors.png");};
  if($(this).hasClass('hh-br3')){ $('.image_viewer').attr("src", "images/branding_sketch_small.png"); $('.image_viewer').attr("data-high-res-src", "images/branding_sketch.png");};
  if($(this).hasClass('hh-br4')){ $('.image_viewer').attr("src", "images/branding_survey_small.png"); $('.image_viewer').attr("data-high-res-src", "images/branding_survey.png");};
  if($(this).hasClass('hh-ur1')){ $('.image_viewer').attr("src", "images/user_survey_small.png"); $('.image_viewer').attr("data-high-res-src", "images/user_survey.png");};
  if($(this).hasClass('hh-fr1')){ $('.image_viewer').attr("src", "images/future_small.png"); $('.image_viewer').attr("data-high-res-src", "images/future.png");};

  $('.image_viewer').ImageViewer();
  $viewer = $('.image_container').data('ImageViewer');

  $('.iv_container').css("width", $(window).innerWidth() + "px");
  $('.iv_container').css("height", $(window).innerHeight() + "px");

});


$('*').click(function(){
if ($exp_image == true)
  {
    $exp_image = false;
    $('.image_viewer_wrapper').velocity({opacity:0}, {duration:1000});
    setTimeout(function() {
      $('.image_viewer_wrapper').css("display", "none");
      $('.iv-container').remove();
      $('<img class="image_viewer" />').appendTo(".image_container");
    }, 1000);
  }
});

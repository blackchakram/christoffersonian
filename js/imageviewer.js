/*
This script allows users to view images in larger scale.
Also uses imageviewer.js by Sudhanshu Yadav.
*/


$('.subimg').click(function(e){

if ($image_inprogress == false && $exp_image == false)
  {
    // flag the image viewer as up so other stuff can't be opened or closed
  $exp_image = true;
  $image_inprogress = true;
  setTimeout(function() {$image_inprogress = false;}, 500);

  // prevent the background from scrolling
  $('body').css("overflow", "hidden");

  // show the image viewer
  $('.image_viewer_wrapper').css("display", "flex");
  $('.image_viewer_wrapper').css("z-index", 1200);

  e.stopPropagation();      // make sure trigger to close case study doesn't fire first

  // stretch the viewer to full screen
  $('.image_viewer_wrapper').css("width", $(window).innerWidth() + "px");
  $('.image_viewer_wrapper').css("height", $(window).innerHeight() + "px");

  $('.image_container, .image_viewer').css("width", "80vw");
  $('.image_container, .image_viewer').css("height", "80vh");

  // fade in the viewer
  $('.image_viewer_wrapper').velocity({opacity:1}, {duration:1000});

  if($(this).hasClass('hh-re1')){ $('.image_viewer').attr("src", "images/hh_personas_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_personas.png");};
  if($(this).hasClass('hh-re2')){ $('.image_viewer').attr("src", "images/hh_competitor_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_competitor.png");};
  if($(this).hasClass('hh-ia1')){ $('.image_viewer').attr("src", "images/hh_flow_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_flow.png");};
  if($(this).hasClass('hh-mo1')){ $('.image_viewer').attr("src", "images/hh_lofi_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_lofi.png");};
  if($(this).hasClass('hh-mo2')){ $('.image_viewer').attr("src", "images/hh_lofi_sketch_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_lofi_sketch.png");};
  if($(this).hasClass('hh-br2')){ $('.image_viewer').attr("src", "images/hh_branding_colors_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_branding_colors.png");};
  if($(this).hasClass('hh-br3')){ $('.image_viewer').attr("src", "images/hh_branding_sketch_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_branding_sketch.png");};
  if($(this).hasClass('hh-br4')){ $('.image_viewer').attr("src", "images/hh_branding_survey_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_branding_survey.png");};
  if($(this).hasClass('hh-ur1')){ $('.image_viewer').attr("src", "images/hh_user_survey_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_user_survey.png");};
  if($(this).hasClass('hh-fr1')){ $('.image_viewer').attr("src", "images/hh_future_small.png"); $('.image_viewer').attr("data-high-res-src", "images/hh_future.png");};

  if($(this).hasClass('pt-re1')){ $('.image_viewer').attr("src", "images/pt_research1_small.png"); $('.image_viewer').attr("data-high-res-src", "images/pt_research1.png");};
  if($(this).hasClass('pt-re2')){ $('.image_viewer').attr("src", "images/pt_research2_small.png"); $('.image_viewer').attr("data-high-res-src", "images/pt_research2.png");};
  if($(this).hasClass('pt-ia1')){ $('.image_viewer').attr("src", "images/pt_ia_small.jpg"); $('.image_viewer').attr("data-high-res-src", "images/pt_ia.jpg");};
  if($(this).hasClass('pt-mo1')){ $('.image_viewer').attr("src", "images/pt_mockup1_small.png"); $('.image_viewer').attr("data-high-res-src", "images/pt_mockup1.png");};
  if($(this).hasClass('pt-mo2')){ $('.image_viewer').attr("src", "images/pt_mockup2_small.png"); $('.image_viewer').attr("data-high-res-src", "images/pt_mockup2.png");};
  if($(this).hasClass('pt-br2')){ $('.image_viewer').attr("src", "images/pt_branding1_small.jpg"); $('.image_viewer').attr("data-high-res-src", "images/pt_branding1.jpg");};
  if($(this).hasClass('pt-br3')){ $('.image_viewer').attr("src", "images/pt_branding2_small.png"); $('.image_viewer').attr("data-high-res-src", "images/pt_branding2.png");};
  if($(this).hasClass('pt-br4')){ $('.image_viewer').attr("src", "images/pt_branding3_small.png"); $('.image_viewer').attr("data-high-res-src", "images/pt_branding3.png");};
  if($(this).hasClass('pt-ur1')){ $('.image_viewer').attr("src", "images/pt_testing1_small.png"); $('.image_viewer').attr("data-high-res-src", "images/pt_testing1.png");};
  if($(this).hasClass('pt-fr1')){ $('.image_viewer').attr("src", "images/pt_future1_small.png"); $('.image_viewer').attr("data-high-res-src", "images/pt_future1.png");};

  $('.image_viewer').ImageViewer();
  $viewer = $('.image_container').data('ImageViewer');

  $('.iv-large-image').css("height", "80vw");

  $('.iv_container').css("width", $(window).innerWidth() + "px");
  $('.iv_container').css("height", $(window).innerHeight() + "px");
  }
});

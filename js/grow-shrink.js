/*
This script causes the title cards to grow when clicked
and to shrink back to their original size when clicked
again.
*/


// grab the initial dimensions and position of the containing grid
$gridDimensions = $('.card-front');
$expandedBox = $('.card-expanded li');
$coords = $('.card-front').offset();


// If the user resizes the browsing window, re-grab the containing
// grid dimensions and alter the expanded card accordingly if one
// is currently expanded.
$(window).resize(function() {
  $gridDimensions = $('.card-front');
  $expandedBox = $('.card-expanded li');
  $coords = $('.card-front').offset();

  jQuery.each($('.card-expanded li'), function() {
    if( $(this).css('display') != 'none' ) {
      console.log("test2");
      $(this).css("width", "80vw");
      $(this).css("height", $gridDimensions.height() + "px");
      $(this).css("top", $coords.top + "px");
      $(this).css("left", $coords.left + "px");
    }
  });
});


// Expand a card to fill the whole grid. Uses velocity.js to
// linearly interpolate for a smooth animation. CSS setting
// before the animation moves and sets the card to overlay
// the front card before expanding.
$(".card-front li").click(function() {
  var $indexNo = $(this).index();

  $('.card-expanded li').eq($indexNo).css("width", $(this).width() + "px");
  $('.card-expanded li').eq($indexNo).css("height", $(this).height() + "px");
  $('.card-expanded li').eq($indexNo).css("display", "list-item");
  $('.card-expanded li').eq($indexNo).css("top", $(this).offset().top + "px");
  $('.card-expanded li').eq($indexNo).css("left", $(this).offset().left + "px");

  $('.card-expanded li').eq($indexNo).velocity({width: "80vw", height: $gridDimensions.height() + "px", top: $coords.top + "px", left: $coords.left + "px" }, {easing: "ease-in-out"});
});


// Shrink an expanded card back down to fit the dimensions of
// the original front card, then push it back to having a
// display of none.
$(".card-expanded li").click(function() {
  var $indexNo = $(this).index();
  var $targeted = $('.card-front li').eq($indexNo);

  $(this).velocity({width: $targeted.width() + "px", height: $targeted.height() + "px", top: $targeted.offset().top + "px", left: $targeted.offset().left + "px" }, {display: "none"});
});

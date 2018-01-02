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
  $bg_squares = $('.bg_squares');

  jQuery.each($('.card-expanded > li'), function() {
    if( $(this).css('display') != 'none' ) {
      if ($(window).width() < 500) {
        $(this).css("width", "96vw");
        $bg_squares.css("width", "96vw");
      }
      if ($(window).width() >= 500) {
        $(this).css("width", "90vw");
        $bg_squares.css("width", "90vw");
      }
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
  var $opacify = $(this).children('.opacify');
  var $indexNo = $(this).index();
  var $expanded = $('.card-expanded li').eq($indexNo);
  var $unopacify = $('.card-expanded .unopacify').eq($indexNo);

if ($indexNo != 0)
  {
  $opacify.velocity({opacity:0}, 500);

  $expanded.css("width", $(this).width() + "px");
  $expanded.css("height", $(this).height() + "px");
  setTimeout(function() { $expanded.css("display", "list-item");  }, 500);
  $expanded.css("top", $(this).offset().top + "px");
  $expanded.css("left", $(this).offset().left + "px");

  if ($(window).width() < 500) {$expanded.velocity({width: "96vw", height: $gridDimensions.height() + "px", top: $coords.top + "px", left: $coords.left + "px" }, {delay: 500, easing: "ease-in-out"});}
  if ($(window).width() >= 500) {$expanded.velocity({width: "90vw", height: $gridDimensions.height() + "px", top: $coords.top + "px", left: $coords.left + "px" }, {delay: 500, easing: "ease-in-out"});}

  $unopacify.velocity({opacity:1}, {duration:500, delay:1000});
  }

});


// Shrink an expanded card back down to fit the dimensions of
// the original front card, then push it back to having a
// display of none.
$(".card-expanded li").click(function() {
  var $indexNo = $(this).index();
  var $targeted = $('.card-front li').eq($indexNo);
  var $unopacify = $(this).children('.unopacify');
  var $opacify = $('.card-front .opacify').eq($indexNo);

  $unopacify.velocity({opacity:0}, 500);

  $(this).velocity({width: $targeted.width() + "px", height: $targeted.height() + "px", top: $targeted.offset().top + "px", left: $targeted.offset().left + "px" }, {delay: 500, display: "none"});

  $opacify.velocity({opacity:1}, {duration:500, delay:1000});

});

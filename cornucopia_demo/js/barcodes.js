JsBarcode(".barcode").init();

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$('.collapsible-header').click(function() {
  if ($(this).children('.collapser').hasClass('rotated'))
    {
      $(this).children('.collapser').velocity({rotateZ: 0}, {duration: 400} );
      $(this).children('.collapser').toggleClass('rotated');
    }
  else
    {
      $(this).children('.collapser').velocity({rotateZ: 90}, {duration: 400} );
      $(this).children('.collapser').toggleClass('rotated');
    }
});

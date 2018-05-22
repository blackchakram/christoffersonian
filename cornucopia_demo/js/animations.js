var opened = false;
var expanded = false;

$('.low').click(function() {
  if(opened == false)
   {
    $('.low .material-icons').velocity({rotateZ: -90}, {duration: 400} );
    $('.listbar').velocity({width: "84vw"}, {duration: 400});
    setTimeout(function(){ $('.listbar form input').css('padding-left', '12px') }, 50);
    $('.listbar form input').focus();
    $('.listbar form input').css('color', 'black');
    $(document).scrollTop($(document).height());
    opened = true;
   }
  else
   {
    $('.low .material-icons').velocity({rotateZ: 0}, {duration: 400} );
    $('.listbar').velocity({width: "1px"}, {duration: 400});
    setTimeout(function(){ $('.listbar form input').css('padding-left', '0') }, 380);
    opened = false;
   }
});

$('.lever1').click(function() {
  $(this).toggleClass('yellow lighten-4');
});

$('.lever2').click(function() {
  $(this).toggleClass('yellow lighten-4');
  if (expanded == false)
    {
      $('.collection-item.valign-wrapper.collapseit').velocity({height: '60px'}, {duration: 200});
      expanded = true;
    }
    else {
      $('.collection-item.valign-wrapper.collapseit').velocity({height: 0}, {duration: 200});
      expanded = false;
    }
});

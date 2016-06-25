$('#listview').click(function() {
  $('img').hide();
  $('.image-wrapper').css('border', 'none');
  $('.col-1of3').addClass('fullwidth');
  $('.product-box').css('height', 'auto');
});


$('#galleryview').click(function() {
  $('img').show();
  $('.image-wrapper').css('border', '2px solid black');
  $('.col-1of3').removeClass('fullwidth');
  $('.product-box').css('height', '500px');
});


 var slideLeft = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-left',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
  });

  var slideLeftBtn = document.querySelector('#c-button--slide-left');
  
  slideLeftBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideLeft.open();
  });
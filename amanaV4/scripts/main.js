'use strict';

$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  $('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $('.carousel').slick({
    autoplay: true,
    responsive: [{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    }]
  });

  
  // toggle the statistics in home page
  $('body').on('click', '.statistic', function (event) {
    event.preventDefault();
     $('.side-tabs-link').addClass('side-tabs-link-disabled').attr('disabled','disabled');
      $('.statistic-details').removeClass('show');
      $(this).parents('.statistics').addClass('opened');
      $('body').addClass('dropdown-open');
     

      if( $(this).hasClass('pink') ||  $(this).hasClass('green')){
        if($('.pinkDisplay').is(':visible')){
           $('.statistic-details').css('top','315px');
        }
         else {
          $('.statistic-details').css('top','122px');
        }
       
      }
      else {
          $('.statistic-details').css('top','122px');
        }
     
  });




  // toggle the users info in the user's side panel
  $('body').on('click', '.more-info', function (event) {
    $('.user-carousel').toggleClass('carousel-toggle');
  });



  // close dropdowns when press esc button
  $(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
      if ($('.statistics').hasClass('opened')) {
        $('body').removeClass('dropdown-open');
        $('.statistics').removeClass('opened');
        // $('.statistic-details').slideUp('400');
        $('.statistic-details').removeClass('show');
        $('.side-tabs-link').removeClass('side-tabs-link-disabled').addClass('side-tabs-link-enabled').removeAttr('disabled');

      } 
      if ($('.side-tabs').hasClass('side-tabs-opened')) {
          $('body').removeClass('dropdown-open');
          $('.side-tabs-item').hide();
          $('.side-tabs').removeClass('side-tabs-opened');
          $('.side-tabs-link').removeClass('side-tabs-link-disabled').addClass('side-tabs-link-enabled').removeAttr('disabled');
     
      }
    }
  });

  $('body').on('click', '.votes-actions a', function (event) {
    event.preventDefault();
    $('.votes-waiting').hide();
    $('.votes-done').show();
  });

  $('body').on('click', '.votes-back', function (event) {
    event.preventDefault();
    $('.votes-waiting').show();
    $('.votes-done').hide();
  });
});

// open Side Tabs
  function openSideTab(index, evt, tabName) {
    evt.preventDefault();

    $('.side-tabs').addClass('side-tabs-opened');
    $(window).scrollTop(0);

    if (!$(this).parent('.side-tabs-item').hasClass('opened')) {
      $('body').addClass('dropdown-open');
      $(this).parent('.side-tabs-item').addClass('opened');
      $(this).parents('.side-tabs').addClass('side-tabs-opened');
    } else {
      // $('body').removeClass('dropdown-open');
      $(this).parent('.side-tabs-item').removeClass('opened');
      $(this).parents('.side-tabs').removeClass('side-tabs-opened');
      $('.side-tabs').removeClass('side-tabs-opened');
    }

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('side-tabs-item');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('side-tabs-link');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
      tablinks[i].className = tablinks[i].className.replace(' side-tabs-link-enabled', ' side-tabs-link-disabled');
      tablinks[i].disabled = 'true';
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
    evt.currentTarget.className += ' side-tabs-link-enabled';
    index.removeClass('side-tabs-link-disabled');
    index.removeAttr('disabled');
  }

  $(document).mouseup(function (e) {
    var tabLink = $('.side-tabs-link');
    var tabItem = $('.side-tabs-item');

    var statistic = $('.statistic');
    var statisticDetails = $('.statistic-details');

    if( $('.statistics').hasClass('opened')){
      console.log('statistic')
      if (!statistic.is(e.target) && statistic.has(e.target).length === 0 && statisticDetails.has(e.target).length === 0 ) {
        $('body').removeClass('dropdown-open');
        $('.statistics ').removeClass('opened');
        statisticDetails.removeClass('show');
        $('.side-tabs-link').removeClass('side-tabs-link-disabled').addClass('side-tabs-link-enabled').removeAttr('disabled');
      }
    }
    else{
       console.log('side-tabs')
      // if the target of the click isn't the container nor a descendant of the container
      if (!tabLink.is(e.target) && tabLink.has(e.target).length === 0 && tabItem.has(e.target).length === 0 ) {
        $('body').removeClass('dropdown-open');

      // in case of tabs
      $('.side-tabs-item').hide();
      $('.side-tabs').removeClass('side-tabs-opened');
      $('.side-tabs-link').removeClass('side-tabs-link-disabled').addClass('side-tabs-link-enabled').removeAttr('disabled');

    }
  }

});


$(document).bind( 'touchstart', function(e){
   var tabLink = $('.side-tabs-link');
    var tabItem = $('.side-tabs-item');

    var statistic = $('.statistic');
    var statisticDetails = $('.statistic-details');

    if( $('.statistics').hasClass('opened')){
      console.log('statistic')
      if (!statistic.is(e.target) && statistic.has(e.target).length === 0 && statisticDetails.has(e.target).length === 0 ) {
        $('body').removeClass('dropdown-open');
        $('.statistics ').removeClass('opened');
        statisticDetails.removeClass('show');
        $('.side-tabs-link').removeClass('side-tabs-link-disabled').addClass('side-tabs-link-enabled').removeAttr('disabled');
      }
    }
    else{
       console.log('side-tabs')
      // if the target of the click isn't the container nor a descendant of the container
      if (!tabLink.is(e.target) && tabLink.has(e.target).length === 0 && tabItem.has(e.target).length === 0 ) {
        $('body').removeClass('dropdown-open');

      // in case of tabs
      $('.side-tabs-item').hide();
      $('.side-tabs').removeClass('side-tabs-opened');
      $('.side-tabs-link').removeClass('side-tabs-link-disabled').addClass('side-tabs-link-enabled').removeAttr('disabled');

    }
  }
});
$(document).bind( 'touchend', function(e){
  var tabLink = $('.side-tabs-link');
    var tabItem = $('.side-tabs-item');

    var statistic = $('.statistic');
    var statisticDetails = $('.statistic-details');

    if( $('.statistics').hasClass('opened')){
      console.log('statistic')
      if (!statistic.is(e.target) && statistic.has(e.target).length === 0 && statisticDetails.has(e.target).length === 0 ) {
        $('body').removeClass('dropdown-open');
        $('.statistics ').removeClass('opened');
        statisticDetails.removeClass('show');
        $('.side-tabs-link').removeClass('side-tabs-link-disabled').addClass('side-tabs-link-enabled').removeAttr('disabled');
      }
    }
    else{
       console.log('side-tabs')
      // if the target of the click isn't the container nor a descendant of the container
      if (!tabLink.is(e.target) && tabLink.has(e.target).length === 0 && tabItem.has(e.target).length === 0 ) {
        $('body').removeClass('dropdown-open');

      // in case of tabs
      $('.side-tabs-item').hide();
      $('.side-tabs').removeClass('side-tabs-opened');
      $('.side-tabs-link').removeClass('side-tabs-link-disabled').addClass('side-tabs-link-enabled').removeAttr('disabled');

    }
  }
});

//# sourceMappingURL=main.js.map

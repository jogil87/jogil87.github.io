$(function () {

    "use strict";

    var wind = $(window);


    /* smooth scroll
    -------------------------------------------------------*/
    $.scrollIt({
        upKey: 60,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 1500,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
    });


    /* navbar scrolling background
    -------------------------------------------------------*/
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar");

        if(bodyScroll > 300){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }

    });


    /* typejs
    -------------------------------------------------------*/
    $('.header .info-t li').typed({

        strings: ["UI/UX DESIGNER","PHOTOGRAPHER","WEB DEVELOPER"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000

    });


    /* Progress Bars
     -------------------------------------------------------*/
    wind.on("scroll",function () {

      var bodyScroll = wind.scrollTop()

      if(bodyScroll > 1300){

        $('#bar1').barfiller({
          // color of bar
          barColor: '#1f509e',
          // duration in ms
          duration: 2000
        });

        $('#bar2').barfiller({
            // color of bar
            barColor: '#1f509e',
            // duration in ms
            duration: 2000
        });

        $('#bar3').barfiller({
            // color of bar
            barColor: '#1f509e',
            // duration in ms
            duration: 1600
        });

        $('#bar4').barfiller({
            // color of bar
            barColor: '#1f509e',
            // duration in ms
            duration: 1700
        });

        $('#bar5').barfiller({
            // color of bar
            barColor: '#1f509e'
        });

        $('#bar6').barfiller({
            // color of bar
            barColor: '#1f509e',
            // duration in ms
            duration: 1800
        });

        $('#bar7').barfiller({
          // color of bar
          barColor: '#1f509e',
          // duration in ms
          duration: 1800
        });

        $('#bar8').barfiller({
            // color of bar
            barColor: '#1f509e'
          });
      }
    });

    /* magnificPopup
    -------------------------------------------------------*/
    $('.portfolio .link').magnificPopup({

        delegate: 'a',
        type: 'image'

    });


    /* stellar
    -------------------------------------------------------*/
    wind.stellar();


    /* sparallax
    -------------------------------------------------------*/
    $('.parallax').sparallax();


    /* owl carousel cliant
    -------------------------------------------------------*/
    $('.testimonel .owl-carousel').owlCarousel({

        items:1,
        mouseDrag:true,
        autoplay:true,
        smartSpeed:500

    });


    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });


  /* Preloader
    -------------------------------------------------------*/
  $(window).on("load",function (){

      $(".loading").fadeOut(500);

  });

})


$(window).load(function(){


    /* isotope
    -------------------------------------------------------*/
    var $gallery = $('.gallery').isotope({});
    $('.gallery').isotope({

      // options
      itemSelector: '.item-img'

    });


    /* filter items on button click
    -------------------------------------------------------*/
    $('.filtering').on( 'click', 'button', function() {

      var filterValue = $(this).attr('data-filter');

      $gallery.isotope({ filter: filterValue });

      });

    $('.filtering').on( 'click', 'button', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

})

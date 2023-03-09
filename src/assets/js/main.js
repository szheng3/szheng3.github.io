function gallery() {
  const $gallery = $('.portfolios-wrapper');

  $('.portfolio-filters button').on('click', function() {
    // tslint:disable-next-line:prefer-const
    let filterValue = $(this).attr('data-filter');
    $gallery.isotope({
      filter: filterValue
    });
    $gallery.data('lightGallery').destroy(true);
    $('.portfolios-wrapper').lightGallery({
      selector: filterValue.replace('*', '') + ' .portfolio-zoom-button'
    });

    $('.portfolio-filters button').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
  //
  $('.portfolios-wrapper').lightGallery({
    selector: '.portfolio-item .portfolio-zoom-button'
  });
}

function mainJs() {
  /* Testimonial Slider Active */
  $('.testimonial-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    easing: 'ease-in-out'
  });

  /* Bootstrap4 Tooltip Active */
  $('[data-toggle="tooltip"]').tooltip();
  gallery();
  /* Portfolio Filter & Popup Active */
  // function portfolioFilterLightgallery(){
  // 	var $gallery = $('.portfolios-wrapper');
  //
  //
  // 	$('.portfolio-filters button').on('click', function () {
  //
  // 		var filterValue = $(this).attr('data-filter');
  // 		$gallery.isotope({
  // 			filter: filterValue
  // 		});
  // 		$gallery.data('lightGallery').destroy(true);
  // 		$('.portfolios-wrapper').lightGallery({
  // 			selector: filterValue.replace('*', '') + ' .portfolio-zoom-button',
  // 		});
  //
  // 		$('.portfolio-filters button').removeClass('is-checked');
  // 		$(this).addClass('is-checked');
  //
  // 	});
  //   //
  // 	$('.portfolios-wrapper').lightGallery({
  // 		selector: '.portfolio-item .portfolio-zoom-button'
  // 	});
  // }
  // portfolioFilterLightgallery();

  /* Header Menu Effect */
  $('.header-navigation-trigger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.main-navigation').toggleClass('is-visible');
  });

  /* Mobile Menu */
  $('nav.main-navigation').meanmenu({
    // meanMenuClose: '<img class="black" src="/assets/images/icons/icon-close.png" alt="close icon"><img class="white" src="/assets/images/icons/icon-close-white.png" alt="close icon">',
    meanMenuClose: 'X',
    meanMenuCloseSize: '18px',
    meanScreenWidth: '991',
    meanExpandableChildren: true,
    meanMenuContainer: '.mobile-menu',
    onePage: true
  });

  /* Boxed Layout */
  if ($('.boxed-layout').length) {
    $('body').css('background-color', '#f1f1f1');
  }

  /* Counter Active */
  $('.counter-active').counterUp({
    delay: 10,
    time: 1000
  });

  /* Radial Progress */
  $('.radial-progress').waypoint(
    function() {
      $('.radial-progress').easyPieChart({
        lineWidth: 3,
        trackColor: false,
        scaleLength: 0,
        rotate: -45,
        barColor: '#555555'
      });
    },
    {
      triggerOnce: true,
      offset: 'bottom-in-view'
    }
  );

  /* Blog Item Height */
  $('.blog-item').matchHeight();

  /* Sticky Sidebar */
  $('.sticky-sidebar-active').theiaStickySidebar({
    additionalMarginTop: 30,
    additionalMarginBottom: 30
  });

  // $(window).on('scroll', function() {
  //   // tslint:disable-next-line:prefer-const
  //   let scrollPos = $(this).scrollTop();
  //   if (scrollPos > 200) {
  //     $('.sticky-header').addClass('is-sticky');
  //   } else {
  //     $('.sticky-header').removeClass('is-sticky');
  //   }
  // });
  function setIframeHeight(iframe) {
    if (iframe) {
      var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
      if (iframeWin.document.body) {
        iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
      }
    }
  }

  window.onload = function() {
    setIframeHeight(document.getElementById('external-frame'));
  };
}

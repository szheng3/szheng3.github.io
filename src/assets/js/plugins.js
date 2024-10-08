/*********************************************************************************

 Template Name: Karigor - Minimalist Bootstrap4 Portfolio Template
 Description: A perfect minimal template to build beautiful and unique portfolio websites. It comes with nice and clean design.
 Version: 1.0

 Note: This is plugin js.

 **********************************************************************************/

/**************************************************************

 PLUGINSHEET INDEXING
 |
 |
 |___ Avoid Console
 |___ Scroll Up
 |___ Slick Slider
 |___ Meanmenu
 |___ Nice Select
 |___ Images Loaded
 |___ Isotope
 |___ Light Gallery
 |___ Waypoints
 |___ Counter Up
 |___ Easy Pie
 |___ Match Height
 |___ Sticky Sidebar
 |
 |
 |___ END PLUGINSHEET INDEXING

 ***************************************************************/

/*************************************
 Avoid Console
 **************************************/

// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.

/*************************************
 Scroll Up
 **************************************/
/*!
 * scrollup v2.4.1
 *
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!(function(l, o, e) {
  'use strict';
  (l.fn.scrollUp = function(o) {
    l.data(e.body, 'scrollUp') || (l.data(e.body, 'scrollUp', !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function(r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger ? l(p.scrollTrigger) : l('<a/>', { id: p.scrollName, href: '#top' })),
        p.scrollTitle && d.attr('title', p.scrollTitle),
        d.appendTo('body'),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: 'none', position: 'fixed', zIndex: p.zIndex }),
        p.activeOverlay &&
          l('<div/>', { id: p.scrollName + '-active' })
            .css({
              position: 'absolute',
              top: p.scrollDistance + 'px',
              width: '100%',
              borderTop: '1px dotted' + p.activeOverlay,
              zIndex: p.zIndex
            })
            .appendTo('body'),
        p.animation)
      ) {
        case 'fade':
          (s = 'fadeIn'), (t = 'fadeOut'), (c = p.animationSpeed);
          break;
        case 'slide':
          (s = 'slideDown'), (t = 'slideUp'), (c = p.animationSpeed);
          break;
        default:
          (s = 'show'), (t = 'hide'), (c = 0);
      }
      (i = 'top' === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function() {
          l(o).scrollTop() > i ? f || (d[s](c), (f = !0)) : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? 'number' == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : 'string' == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function(o) {
          o.preventDefault(), l('html, body').animate({ scrollTop: a }, p.scrollSpeed, p.easingType);
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: 'scrollUp',
      scrollDistance: 300,
      scrollFrom: 'top',
      scrollSpeed: 300,
      easingType: 'linear',
      animation: 'fade',
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: 'Scroll to top',
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647
    }),
    (l.fn.scrollUp.destroy = function(r) {
      l.removeData(e.body, 'scrollUp'),
        l('#' + l.fn.scrollUp.settings.scrollName).remove(),
        l('#' + l.fn.scrollUp.settings.scrollName + '-active').remove(),
        l.fn.jquery.split('.')[1] >= 7 ? l(o).off('scroll', r) : l(o).unbind('scroll', r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*************************************
 Slick Slider
 **************************************/

/*
  Version: 1.9.0
  Author: Ken Wheeler
  Website: http://kenwheeler.github.io
  Docs: http://kenwheeler.github.io/slick
  Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
(function(i) {
  'use strict';
  'function' == typeof define && define.amd
    ? define(['jquery'], i)
    : 'undefined' != typeof exports
    ? (module.exports = i(require('jquery')))
    : i(jQuery);
})(function(i) {
  'use strict';
  var e = window.Slick || {};
  (e = (function() {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = 'hidden'),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = 'visibilitychange'),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data('slick') || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        'undefined' != typeof document.mozHidden
          ? ((n.hidden = 'mozHidden'), (n.visibilityChange = 'mozvisibilitychange'))
          : 'undefined' != typeof document.webkitHidden &&
            ((n.hidden = 'webkitHidden'), (n.visibilityChange = 'webkitvisibilitychange')),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.activateADA = function() {
      var i = this;
      i.$slideTrack
        .find('.slick-active')
        .attr({ 'aria-hidden': 'false' })
        .find('a, input, button, select')
        .attr({ tabindex: '0' });
    }),
    (e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
      var s = this;
      if ('boolean' == typeof t) {
        (o = t), (t = null);
      } else if (t < 0 || t >= s.slideCount) {
        return !1;
      }
      s.unload(),
        'number' == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
            ? i(e).insertBefore(s.$slides.eq(t))
            : i(e).insertAfter(s.$slides.eq(t))
          : o === !0
          ? i(e).prependTo(s.$slideTrack)
          : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
          i(t).attr('data-slick-index', e);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (e.prototype.animateHeight = function() {
      var i = this;
      if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function(e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t)
            : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t)
          : s.cssTransitions === !1
          ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(i) {
                  (i = Math.ceil(i)),
                    s.options.vertical === !1
                      ? ((o[s.animType] = 'translate(' + i + 'px, 0px)'), s.$slideTrack.css(o))
                      : ((o[s.animType] = 'translate(0px,' + i + 'px)'), s.$slideTrack.css(o));
                },
                complete: function() {
                  t && t.call();
                }
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            s.options.vertical === !1
              ? (o[s.animType] = 'translate3d(' + e + 'px, 0px, 0px)')
              : (o[s.animType] = 'translate3d(0px,' + e + 'px, 0px)'),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function() {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function() {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function(e) {
      var t = this,
        o = t.getNavTarget();
      null !== o &&
        'object' == typeof o &&
        o.each(function() {
          var t = i(this).slick('getSlick');
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function(i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] = e.transformType + ' ' + e.options.speed + 'ms ' + e.options.cssEase)
        : (t[e.transitionType] = 'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function() {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }),
    (e.prototype.autoPlayClear = function() {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function() {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (i.options.infinite === !1 &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 === 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function() {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass('slick-arrow')),
        (e.$nextArrow = i(e.options.nextArrow).addClass('slick-arrow')),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
            e.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
            e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
            e.options.infinite !== !0 && e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass('slick-hidden')
              .attr({ 'aria-disabled': 'true', tabindex: '-1' }));
    }),
    (e.prototype.buildDots = function() {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass('slick-dotted'), t = i('<ul />').addClass(o.options.dotsClass), e = 0;
          e <= o.getDotCount();
          e += 1
        ) {
          t.append(i('<li />').append(o.options.customPaging.call(this, o, e)));
        }
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots
            .find('li')
            .first()
            .addClass('slick-active');
      }
    }),
    (e.prototype.buildOut = function() {
      var e = this;
      (e.$slides = e.$slider.children(e.options.slide + ':not(.slick-cloned)').addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function(e, t) {
          i(t)
            .attr('data-slick-index', e)
            .data('originalStyling', i(t).attr('style') || '');
        }),
        e.$slider.addClass('slick-slider'),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css('opacity', 0),
        (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) || (e.options.slidesToScroll = 1),
        i('img[data-lazy]', e.$slider)
          .not('[src]')
          .addClass('slick-loading'),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses('number' == typeof e.currentSlide ? e.currentSlide : 0),
        e.options.draggable === !0 && e.$list.addClass('draggable');
    }),
    (e.prototype.buildRows = function() {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (((o = document.createDocumentFragment()), (n = l.$slider.children()), l.options.rows > 0)) {
        for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
          var d = document.createElement('div');
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement('div');
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({ width: 100 / l.options.slidesPerRow + '%', display: 'inline-block' });
      }
    }),
    (e.prototype.checkResponsive = function(e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ('window' === r.respondTo
          ? (n = a)
          : 'slider' === r.respondTo
          ? (n = d)
          : 'min' === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints) {
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        }
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger('breakpoint', [r, l]);
      }
    }),
    (e.prototype.changeSlide = function(e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is('a') && e.preventDefault(),
        l.is('li') || (l = l.closest('li')),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case 'previous':
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case 'next':
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case 'index':
          var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger('focus');
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function(i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1])) {
        i = e[e.length - 1];
      } else {
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      }
      return i;
    }),
    (e.prototype.cleanUpEvents = function() {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i('li', e.$dots)
          .off('click.slick', e.changeSlide)
          .off('mouseenter.slick', i.proxy(e.interrupt, e, !0))
          .off('mouseleave.slick', i.proxy(e.interrupt, e, !1)),
        e.options.accessibility === !0 && e.$dots.off('keydown.slick', e.keyHandler)),
        e.$slider.off('focus.slick blur.slick'),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
          e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide),
          e.options.accessibility === !0 &&
            (e.$prevArrow && e.$prevArrow.off('keydown.slick', e.keyHandler),
            e.$nextArrow && e.$nextArrow.off('keydown.slick', e.keyHandler))),
        e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
        e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
        e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
        e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
        e.$list.off('click.slick', e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        e.options.accessibility === !0 && e.$list.off('keydown.slick', e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack)
            .children()
            .off('click.slick', e.selectHandler),
        i(window).off('orientationchange.slick.slick-' + e.instanceUid, e.orientationChange),
        i(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
        i('[draggable!=true]', e.$slideTrack).off('dragstart', e.preventDefault),
        i(window).off('load.slick.slick-' + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function() {
      var e = this;
      e.$list.off('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.off('mouseleave.slick', i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function() {
      var i,
        e = this;
      e.options.rows > 0 && ((i = e.$slides.children().children()), i.removeAttr('style'), e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function(i) {
      var e = this;
      e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function(e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i('.slick-cloned', t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(i)),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(i)),
        t.$slides &&
          (t.$slides
            .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
            .removeAttr('aria-hidden')
            .removeAttr('data-slick-index')
            .each(function() {
              i(this).attr('style', i(this).data('originalStyling'));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass('slick-slider'),
        t.$slider.removeClass('slick-initialized'),
        t.$slider.removeClass('slick-dotted'),
        (t.unslicked = !0),
        e || t.$slider.trigger('destroy', [t]);
    }),
    (e.prototype.disableTransition = function(i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ''), e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function(i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function() {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function(i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing)
        : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
      var e = this;
      null !== i &&
        ((e.$slidesCache = e.$slides),
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit());
    }),
    (e.prototype.focusHandler = function() {
      var e = this;
      e.$slider
        .off('focus.slick blur.slick')
        .on('focus.slick', '*', function(t) {
          var o = i(this);
          setTimeout(function() {
            e.options.pauseOnFocus && o.is(':focus') && ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on('blur.slick', '*', function(t) {
          i(this);
          e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
      var i = this;
      return i.currentSlide;
    }),
    (e.prototype.getDotCount = function() {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0) {
        if (i.slideCount <= i.options.slidesToShow) {
          ++o;
        } else {
          for (; e < i.slideCount; ) {
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
          }
        }
      } else if (i.options.centerMode === !0) {
        o = i.slideCount;
      } else if (i.options.asNavFor) {
        for (; e < i.slideCount; ) {
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
        }
      } else {
        o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
      }
      return o - 1;
    }),
    (e.prototype.getLeft = function(i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        n.options.infinite === !0
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              n.options.vertical === !0 &&
                n.options.centerMode === !0 &&
                (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll !== 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
        n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
          : n.options.centerMode === !0 && n.options.infinite === !0
          ? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
          : n.options.centerMode === !0 &&
            ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r),
        n.options.variableWidth === !0 &&
          ((o =
            n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
              ? n.$slideTrack.children('.slick-slide').eq(i)
              : n.$slideTrack.children('.slick-slide').eq(i + n.options.slidesToShow)),
          (e =
            n.options.rtl === !0
              ? o[0]
                ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                : 0
              : o[0]
              ? o[0].offsetLeft * -1
              : 0),
          n.options.centerMode === !0 &&
            ((o =
              n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
                ? n.$slideTrack.children('.slick-slide').eq(i)
                : n.$slideTrack.children('.slick-slide').eq(i + n.options.slidesToShow + 1)),
            (e =
              n.options.rtl === !0
                ? o[0]
                  ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                  : 0
                : o[0]
                ? o[0].offsetLeft * -1
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption = function(i) {
      var e = this;
      return e.options[i];
    }),
    (e.prototype.getNavigableIndexes = function() {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = e.options.slidesToScroll * -1), (o = e.options.slidesToScroll * -1), (i = 2 * e.slideCount));
        t < i;

      ) {
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
      }
      return s;
    }),
    (e.prototype.getSlick = function() {
      return this;
    }),
    (e.prototype.getSlideCount = function() {
      var e,
        t,
        o,
        s,
        n = this;
      return (
        (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
        (o = n.swipeLeft * -1 + s),
        n.options.swipeToSlide === !0
          ? (n.$slideTrack.find('.slick-slide').each(function(e, s) {
              var r, l, d;
              if (
                ((r = i(s).outerWidth()),
                (l = s.offsetLeft),
                n.options.centerMode !== !0 && (l += r / 2),
                (d = l + r),
                o < d)
              ) {
                return (t = s), !1;
              }
            }),
            (e = Math.abs(i(t).attr('data-slick-index') - n.currentSlide) || 1))
          : n.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
      var t = this;
      t.changeSlide({ data: { message: 'index', index: parseInt(i) } }, e);
    }),
    (e.prototype.init = function(e) {
      var t = this;
      i(t.$slider).hasClass('slick-initialized') ||
        (i(t.$slider).addClass('slick-initialized'),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger('init', [t]),
        t.options.accessibility === !0 && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function() {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function(i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find('.slick-cloned'))
        .attr({ 'aria-hidden': 'true', tabindex: '-1' })
        .find('a, input, button, select')
        .attr({ tabindex: '-1' }),
        null !== e.$dots &&
          (e.$slides.not(e.$slideTrack.find('.slick-cloned')).each(function(t) {
            var s = o.indexOf(t);
            if ((i(this).attr({ role: 'tabpanel', id: 'slick-slide' + e.instanceUid + t, tabindex: -1 }), s !== -1)) {
              var n = 'slick-slide-control' + e.instanceUid + s;
              i('#' + n).length && i(this).attr({ 'aria-describedby': n });
            }
          }),
          e.$dots
            .attr('role', 'tablist')
            .find('li')
            .each(function(s) {
              var n = o[s];
              i(this).attr({ role: 'presentation' }),
                i(this)
                  .find('button')
                  .first()
                  .attr({
                    role: 'tab',
                    id: 'slick-slide-control' + e.instanceUid + s,
                    'aria-controls': 'slick-slide' + e.instanceUid + n,
                    'aria-label': s + 1 + ' of ' + t,
                    'aria-selected': null,
                    tabindex: '-1'
                  });
            })
            .eq(e.currentSlide)
            .find('button')
            .attr({ 'aria-selected': 'true', tabindex: '0' })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
        e.options.focusOnChange ? e.$slides.eq(s).attr({ tabindex: '0' }) : e.$slides.eq(s).removeAttr('tabindex');
      }
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function() {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, i.changeSlide),
        i.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, i.changeSlide),
        i.options.accessibility === !0 &&
          (i.$prevArrow.on('keydown.slick', i.keyHandler), i.$nextArrow.on('keydown.slick', i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function() {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (i('li', e.$dots).on('click.slick', { message: 'index' }, e.changeSlide),
        e.options.accessibility === !0 && e.$dots.on('keydown.slick', e.keyHandler)),
        e.options.dots === !0 &&
          e.options.pauseOnDotsHover === !0 &&
          e.slideCount > e.options.slidesToShow &&
          i('li', e.$dots)
            .on('mouseenter.slick', i.proxy(e.interrupt, e, !0))
            .on('mouseleave.slick', i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function() {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.on('mouseleave.slick', i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function() {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, e.swipeHandler),
        e.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, e.swipeHandler),
        e.$list.on('touchend.slick mouseup.slick', { action: 'end' }, e.swipeHandler),
        e.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, e.swipeHandler),
        e.$list.on('click.slick', e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.options.accessibility === !0 && e.$list.on('keydown.slick', e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack)
            .children()
            .on('click.slick', e.selectHandler),
        i(window).on('orientationchange.slick.slick-' + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on('resize.slick.slick-' + e.instanceUid, i.proxy(e.resize, e)),
        i('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
        i(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function() {
      var i = this;
      i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }),
    (e.prototype.keyHandler = function(i) {
      var e = this;
      i.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({ data: { message: e.options.rtl === !0 ? 'next' : 'previous' } })
          : 39 === i.keyCode &&
            e.options.accessibility === !0 &&
            e.changeSlide({ data: { message: e.options.rtl === !0 ? 'previous' : 'next' } }));
    }),
    (e.prototype.lazyLoad = function() {
      function e(e) {
        i('img[data-lazy]', e).each(function() {
          var e = i(this),
            t = i(this).attr('data-lazy'),
            o = i(this).attr('data-srcset'),
            s = i(this).attr('data-sizes') || r.$slider.attr('data-sizes'),
            n = document.createElement('img');
          (n.onload = function() {
            e.animate({ opacity: 0 }, 100, function() {
              o && (e.attr('srcset', o), s && e.attr('sizes', s)),
                e.attr('src', t).animate({ opacity: 1 }, 200, function() {
                  e.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                }),
                r.$slider.trigger('lazyLoaded', [r, e, t]);
            });
          }),
            (n.onerror = function() {
              e
                .removeAttr('data-lazy')
                .removeClass('slick-loading')
                .addClass('slick-lazyload-error'),
                r.$slider.trigger('lazyLoadError', [r, e, t]);
            }),
            (n.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      if (
        (r.options.centerMode === !0
          ? r.options.infinite === !0
            ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)), (n = s + r.options.slidesToShow + 2))
            : ((s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide),
            (n = Math.ceil(s + r.options.slidesToShow)),
            r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
        (t = r.$slider.find('.slick-slide').slice(s, n)),
        'anticipated' === r.options.lazyLoad)
      ) {
        for (var l = s - 1, d = n, a = r.$slider.find('.slick-slide'), c = 0; c < r.options.slidesToScroll; c++) {
          l < 0 && (l = r.slideCount - 1), (t = t.add(a.eq(l))), (t = t.add(a.eq(d))), l--, d++;
        }
      }
      e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find('.slick-slide')), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
          ? ((o = r.$slider.find('.slick-cloned').slice(0, r.options.slidesToShow)), e(o))
          : 0 === r.currentSlide && ((o = r.$slider.find('.slick-cloned').slice(r.options.slidesToShow * -1)), e(o));
    }),
    (e.prototype.loadSlider = function() {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass('slick-loading'),
        i.initUI(),
        'progressive' === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext = function() {
      var i = this;
      i.changeSlide({ data: { message: 'next' } });
    }),
    (e.prototype.orientationChange = function() {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause = function() {
      var i = this;
      i.autoPlayClear(), (i.paused = !0);
    }),
    (e.prototype.play = e.prototype.slickPlay = function() {
      var i = this;
      i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
    }),
    (e.prototype.postSlide = function(e) {
      var t = this;
      if (
        !t.unslicked &&
        (t.$slider.trigger('afterChange', [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))
      ) {
        var o = i(t.$slides.get(t.currentSlide));
        o.attr('tabindex', 0).focus();
      }
    }),
    (e.prototype.prev = e.prototype.slickPrev = function() {
      var i = this;
      i.changeSlide({ data: { message: 'previous' } });
    }),
    (e.prototype.preventDefault = function(i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function(e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i('img[data-lazy]', l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr('data-lazy')),
          (s = t.attr('data-srcset')),
          (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
          (r = document.createElement('img')),
          (r.onload = function() {
            s && (t.attr('srcset', s), n && t.attr('sizes', n)),
              t
                .attr('src', o)
                .removeAttr('data-lazy data-srcset data-sizes')
                .removeClass('slick-loading'),
              l.options.adaptiveHeight === !0 && l.setPosition(),
              l.$slider.trigger('lazyLoaded', [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function() {
            e < 3
              ? setTimeout(function() {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                l.$slider.trigger('lazyLoadError', [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger('allImagesLoaded', [l]);
    }),
    (e.prototype.refresh = function(e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: 'index', index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function() {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ('array' === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || 'window';
        for (e in n) {
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; ) {
              s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
            }
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        }
        s.breakpoints.sort(function(i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function() {
      var e = this;
      (e.$slides = e.$slideTrack.children(e.options.slide).addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack)
            .children()
            .on('click.slick', e.selectHandler),
        e.setSlideClasses('number' == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger('reInit', [e]);
    }),
    (e.prototype.resize = function() {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function() {
          (e.windowWidth = i(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
      var o = this;
      return (
        'boolean' == typeof i ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1)) : (i = e === !0 ? --i : i),
        !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
          (o.unload(),
          t === !0
            ? o.$slideTrack.children().remove(i)
            : o.$slideTrack
                .children(this.options.slide)
                .eq(i)
                .remove(i),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          void o.reinit())
      );
    }),
    (e.prototype.setCSS = function(i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = 'left' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (t = 'top' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = 'translate(' + e + ', ' + t + ')'), o.$slideTrack.css(s))
              : ((s[o.animType] = 'translate3d(' + e + ', ' + t + ', 0px)'), o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function() {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 && i.$list.css({ padding: '0px ' + i.options.centerPadding })
        : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
          i.options.centerMode === !0 && i.$list.css({ padding: i.options.centerPadding + ' 0px' })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children('.slick-slide').length)))
          : i.options.variableWidth === !0
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children('.slick-slide').length)
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 && i.$slideTrack.children('.slick-slide').width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function() {
      var e,
        t = this;
      t.$slides.each(function(o, s) {
        (e = t.slideWidth * o * -1),
          t.options.rtl === !0
            ? i(s).css({ position: 'relative', right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 })
            : i(s).css({ position: 'relative', left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
      }),
        t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function() {
      var i = this;
      if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css('height', e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption = function() {
      var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
      if (
        ('object' === i.type(arguments[0])
          ? ((o = arguments[0]), (l = arguments[1]), (n = 'multiple'))
          : 'string' === i.type(arguments[0]) &&
            ((o = arguments[0]),
            (s = arguments[1]),
            (l = arguments[2]),
            'responsive' === arguments[0] && 'array' === i.type(arguments[1])
              ? (n = 'responsive')
              : 'undefined' != typeof arguments[1] && (n = 'single')),
        'single' === n)
      ) {
        r.options[o] = s;
      } else if ('multiple' === n) {
        i.each(o, function(i, e) {
          r.options[i] = e;
        });
      } else if ('responsive' === n) {
        for (t in s) {
          if ('array' !== i.type(r.options.responsive)) {
            r.options.responsive = [s[t]];
          } else {
            for (e = r.options.responsive.length - 1; e >= 0; ) {
              r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            }
            r.options.responsive.push(s[t]);
          }
        }
      }
      l && (r.unload(), r.reinit());
    }),
    (e.prototype.setPosition = function() {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger('setPosition', [i]);
    }),
    (e.prototype.setProps = function() {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? 'top' : 'left'),
        'top' === i.positionProp ? i.$slider.addClass('slick-vertical') : i.$slider.removeClass('slick-vertical'),
        (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) ||
          (i.options.useCSS === !0 && (i.cssTransitions = !0)),
        i.options.fade &&
          ('number' == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = 'OTransform'),
          (i.transformType = '-o-transform'),
          (i.transitionType = 'OTransition'),
          void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = 'MozTransform'),
          (i.transformType = '-moz-transform'),
          (i.transitionType = 'MozTransition'),
          void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = 'webkitTransform'),
          (i.transformType = '-webkit-transform'),
          (i.transitionType = 'webkitTransition'),
          void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = 'msTransform'),
          (i.transformType = '-ms-transform'),
          (i.transitionType = 'msTransition'),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          i.animType !== !1 &&
          ((i.animType = 'transform'), (i.transformType = 'transform'), (i.transitionType = 'transition')),
        (i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function(i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
        n.$slides.eq(i).addClass('slick-current'),
        n.options.centerMode === !0)
      ) {
        var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          n.options.infinite === !0 &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')),
            0 === i
              ? t.eq(t.length - 1 - n.options.slidesToShow).addClass('slick-center')
              : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass('slick-center')),
          n.$slides.eq(i).addClass('slick-center');
      } else {
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass('slick-active')
              .attr('aria-hidden', 'false')
          : t.length <= n.options.slidesToShow
          ? t.addClass('slick-active').attr('aria-hidden', 'false')
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false'));
      }
      ('ondemand' !== n.options.lazyLoad && 'anticipated' !== n.options.lazyLoad) || n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function() {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
        s.options.infinite === !0 && s.options.fade === !1 && ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        ) {
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass('slick-cloned');
        }
        for (e = 0; e < o + s.slideCount; e += 1) {
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass('slick-cloned');
        }
        s.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function() {
            i(this).attr('id', '');
          });
      }
    }),
    (e.prototype.interrupt = function(i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function(e) {
      var t = this,
        o = i(e.target).is('.slick-slide') ? i(e.target) : i(e.target).parents('.slick-slide'),
        s = parseInt(o.attr('data-slick-index'));
      return (
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function(i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !((a.animating === !0 && a.options.waitForAnimate === !0) || (a.options.fade === !0 && a.currentSlide === i)))
      ) {
        return (
          e === !1 && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          a.options.infinite === !1 &&
          a.options.centerMode === !1 &&
          (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function() {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : a.options.infinite === !1 &&
              a.options.centerMode === !0 &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function() {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : (a.options.autoplay && clearInterval(a.autoPlayTimer),
              (s =
                o < 0
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                    : a.slideCount + o
                  : o >= a.slideCount
                  ? a.slideCount % a.options.slidesToScroll !== 0
                    ? 0
                    : o - a.slideCount
                  : o),
              (a.animating = !0),
              a.$slider.trigger('beforeChange', [a, a.currentSlide, s]),
              (n = a.currentSlide),
              (a.currentSlide = s),
              a.setSlideClasses(a.currentSlide),
              a.options.asNavFor &&
                ((l = a.getNavTarget()),
                (l = l.slick('getSlick')),
                l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)),
              a.updateDots(),
              a.updateArrows(),
              a.options.fade === !0
                ? (t !== !0
                    ? (a.fadeSlideOut(n),
                      a.fadeSlide(s, function() {
                        a.postSlide(s);
                      }))
                    : a.postSlide(s),
                  void a.animateHeight())
                : void (t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(d, function() {
                        a.postSlide(s);
                      })
                    : a.postSlide(s)))
        );
      }
    }),
    (e.prototype.startLoad = function() {
      var i = this;
      i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass('slick-loading');
    }),
    (e.prototype.swipeDirection = function() {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        o < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? s.options.rtl === !1
            ? 'left'
            : 'right'
          : o <= 360 && o >= 315
          ? s.options.rtl === !1
            ? 'left'
            : 'right'
          : o >= 135 && o <= 225
          ? s.options.rtl === !1
            ? 'right'
            : 'left'
          : s.options.verticalSwiping === !0
          ? o >= 35 && o <= 135
            ? 'down'
            : 'up'
          : 'vertical'
      );
    }),
    (e.prototype.swipeEnd = function(i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) {
        return (o.scrolling = !1), !1;
      }
      if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX)) {
        return !1;
      }
      if (
        (o.touchObject.edgeHit === !0 && o.$slider.trigger('edge', [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case 'left':
          case 'down':
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case 'right':
          case 'up':
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        'vertical' != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger('swipe', [o, t]));
      } else {
        o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
      }
    }),
    (e.prototype.swipeHandler = function(i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ('ontouchend' in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && i.type.indexOf('mouse') !== -1)
        )
      ) {
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case 'start':
            e.swipeStart(i);
            break;
          case 'move':
            e.swipeMove(i);
            break;
          case 'end':
            e.swipeEnd(i);
        }
      }
    }),
    (e.prototype.swipeMove = function(i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)))),
          (r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && ((l.swiping = !0), i.preventDefault()),
              (s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              l.options.infinite === !1 &&
                ((0 === l.currentSlide && 'right' === t) || (l.currentSlide >= l.getDotCount() && 'left' === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction), (l.touchObject.edgeHit = !0)),
              l.options.vertical === !1
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
              l.options.fade !== !0 &&
                l.options.touchMove !== !1 &&
                (l.animating === !0 ? ((l.swipeLeft = null), !1) : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function(i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
      var i = this;
      null !== i.$slidesCache &&
        (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit());
    }),
    (e.prototype.unload = function() {
      var e = this;
      i('.slick-cloned', e.$slider).remove(i),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(i),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(i),
        e.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '');
    }),
    (e.prototype.unslick = function(i) {
      var e = this;
      e.$slider.trigger('unslick', [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function() {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
          e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
          0 === e.currentSlide
            ? (e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
              e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1
            ? (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
              e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
            : e.currentSlide >= e.slideCount - 1 &&
              e.options.centerMode === !0 &&
              (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
              e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')));
    }),
    (e.prototype.updateDots = function() {
      var i = this;
      null !== i.$dots &&
        (i.$dots
          .find('li')
          .removeClass('slick-active')
          .end(),
        i.$dots
          .find('li')
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass('slick-active'));
    }),
    (e.prototype.visibility = function() {
      var i = this;
      i.options.autoplay && (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function() {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++) {
        if (
          ('object' == typeof s || 'undefined' == typeof s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          'undefined' != typeof t)
        ) {
          return t;
        }
      }
      return o;
    });
});

/*************************************
 Meanmenu
 **************************************/
!(function($) {
  'use strict';
  $.fn.meanmenu = function(e) {
    var n = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: 'body',
      meanMenuClose: 'X',
      meanMenuCloseSize: '18px',
      meanMenuOpen: '<span /><span /><span />',
      meanRevealPosition: 'right',
      meanRevealPositionDistance: '0',
      meanRevealColour: '',
      meanScreenWidth: '480',
      meanNavPush: '',
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: '+',
      meanContract: '-',
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: 'block',
      removeElements: ''
    };
    e = $.extend(n, e);
    var a = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function() {
      var n = e.meanMenuTarget,
        t = e.meanMenuContainer,
        r = e.meanMenuClose,
        i = e.meanMenuCloseSize,
        s = e.meanMenuOpen,
        u = e.meanRevealPosition,
        m = e.meanRevealPositionDistance,
        l = e.meanRevealColour,
        o = e.meanScreenWidth,
        c = e.meanNavPush,
        v = '.meanmenu-reveal',
        h = e.meanShowChildren,
        d = e.meanExpandableChildren,
        y = e.meanExpand,
        j = e.meanContract,
        Q = e.meanRemoveAttrs,
        f = e.onePage,
        g = e.meanDisplay,
        p = e.removeElements,
        C = !1;
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (C = !0),
        (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery('html').css('overflow-y', 'scroll');
      var w = '',
        x = function() {
          if ('center' === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + 'px';
            (w = 'left:' + n + ';right:auto;'),
              C ? jQuery('.meanmenu-reveal').animate({ left: n }) : jQuery('.meanmenu-reveal').css('left', n);
          }
        },
        A = !1,
        E = !1;
      'right' === u && (w = 'right:' + m + ';left:auto;'), 'left' === u && (w = 'left:' + m + ';right:auto;'), x();
      var M = '',
        P = function() {
          M.html(jQuery(M).is('.meanmenu-reveal.meanclose') ? r : s);
        },
        W = function() {
          jQuery('.mean-bar,.mean-push').remove(),
            jQuery(t).removeClass('mean-container'),
            jQuery(n).css('display', g),
            (A = !1),
            (E = !1),
            jQuery(p).removeClass('mean-remove');
        },
        b = function() {
          var e = 'background:' + l + ';color:' + l + ';' + w;
          if (o >= a) {
            jQuery(p).addClass('mean-remove'),
              (E = !0),
              jQuery(t).addClass('mean-container'),
              jQuery('.mean-container').prepend(
                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                  e +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              );
            var r = jQuery(n).html();
            jQuery('.mean-nav').html(r),
              Q &&
                jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function() {
                  jQuery(this).is('.mean-remove')
                    ? jQuery(this).attr('class', 'mean-remove')
                    : jQuery(this).removeAttr('class'),
                    jQuery(this).removeAttr('id');
                }),
              jQuery(n).before('<div class="mean-push" />'),
              jQuery('.mean-push').css('margin-top', c),
              jQuery(n).hide(),
              jQuery('.meanmenu-reveal').show(),
              jQuery(v).html(s),
              (M = jQuery(v)),
              jQuery('.mean-nav ul').hide(),
              h
                ? d
                  ? (jQuery('.mean-nav ul ul').each(function() {
                      jQuery(this).children().length &&
                        jQuery(this, 'li:first')
                          .parent()
                          .append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + '</a>');
                    }),
                    jQuery('.mean-expand').on('click', function(e) {
                      e.preventDefault(),
                        jQuery(this).hasClass('mean-clicked')
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev('ul')
                              .slideUp(300, function() {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev('ul')
                              .slideDown(300, function() {})),
                        jQuery(this).toggleClass('mean-clicked');
                    }))
                  : jQuery('.mean-nav ul ul').show()
                : jQuery('.mean-nav ul ul').hide(),
              jQuery('.mean-nav ul li')
                .last()
                .addClass('mean-last'),
              M.removeClass('meanclose'),
              jQuery(M).click(function(e) {
                e.preventDefault(),
                  A === !1
                    ? (M.css('text-align', 'center'),
                      M.css('text-indent', '0'),
                      M.css('font-size', i),
                      jQuery('.mean-nav ul:first').slideDown(),
                      (A = !0))
                    : (jQuery('.mean-nav ul:first').slideUp(), (A = !1)),
                  M.toggleClass('meanclose'),
                  P(),
                  jQuery(p).addClass('mean-remove');
              }),
              f &&
                jQuery('.mean-nav ul > li > a:first-child').on('click', function() {
                  jQuery('.mean-nav ul:first').slideUp(),
                    (A = !1),
                    jQuery(M)
                      .toggleClass('meanclose')
                      .html(s);
                });
          } else {
            W();
          }
        };
      C ||
        jQuery(window).resize(function() {
          (a = window.innerWidth || document.documentElement.clientWidth), a > o, W(), o >= a ? (b(), x()) : W();
        }),
        jQuery(window).resize(function() {
          (a = window.innerWidth || document.documentElement.clientWidth),
            C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()));
        }),
        b();
    });
  };
})(jQuery);

/*************************************
 Nice Select
 **************************************/
/*jQuery Nice Select - v1.0
  https://github.com/hernansartorio/jquery-nice-select
  Made by Hernán Sartorio  */
!(function(e) {
  e.fn.niceSelect = function(t) {
    function s(t) {
      t.after(
        e('<div></div>')
          .addClass('nice-select')
          .addClass(t.attr('class') || '')
          .addClass(t.attr('disabled') ? 'disabled' : '')
          .attr('tabindex', t.attr('disabled') ? null : '0')
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find('option'),
        i = t.find('option:selected');
      s.find('.current').html(i.data('display') || i.text()),
        n.each(function(t) {
          var n = e(this),
            i = n.data('display');
          s.find('ul').append(
            e('<li></li>')
              .attr('data-value', n.val())
              .attr('data-display', i || null)
              .addClass('option' + (n.is(':selected') ? ' selected' : '') + (n.is(':disabled') ? ' disabled' : ''))
              .html(n.text())
          );
        });
    }
    if ('string' == typeof t) {
      return (
        'update' == t
          ? this.each(function() {
              var t = e(this),
                n = e(this).next('.nice-select'),
                i = n.hasClass('open');
              n.length && (n.remove(), s(t), i && t.next().trigger('click'));
            })
          : 'destroy' == t
          ? (this.each(function() {
              var t = e(this),
                s = e(this).next('.nice-select');
              s.length && (s.remove(), t.css('display', ''));
            }),
            0 == e('.nice-select').length && e(document).off('.nice_select'))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    }
    this.hide(),
      this.each(function() {
        var t = e(this);
        t.next().hasClass('nice-select') || s(t);
      }),
      e(document).off('.nice_select'),
      e(document).on('click.nice_select', '.nice-select', function(t) {
        var s = e(this);
        e('.nice-select')
          .not(s)
          .removeClass('open'),
          s.toggleClass('open'),
          s.hasClass('open')
            ? (s.find('.option'), s.find('.focus').removeClass('focus'), s.find('.selected').addClass('focus'))
            : s.focus();
      }),
      e(document).on('click.nice_select', function(t) {
        0 === e(t.target).closest('.nice-select').length &&
          e('.nice-select')
            .removeClass('open')
            .find('.option');
      }),
      e(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(t) {
        var s = e(this),
          n = s.closest('.nice-select');
        n.find('.selected').removeClass('selected'), s.addClass('selected');
        var i = s.data('display') || s.text();
        n.find('.current').text(i),
          n
            .prev('select')
            .val(s.data('value'))
            .trigger('change');
      }),
      e(document).on('keydown.nice_select', '.nice-select', function(t) {
        var s = e(this),
          n = e(s.find('.focus') || s.find('.list .option.selected'));
        if (32 == t.keyCode || 13 == t.keyCode) {
          return s.hasClass('open') ? n.trigger('click') : s.trigger('click'), !1;
        }
        if (40 == t.keyCode) {
          if (s.hasClass('open')) {
            var i = n.nextAll('.option:not(.disabled)').first();
            i.length > 0 && (s.find('.focus').removeClass('focus'), i.addClass('focus'));
          } else {
            s.trigger('click');
          }
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass('open')) {
            var l = n.prevAll('.option:not(.disabled)').first();
            l.length > 0 && (s.find('.focus').removeClass('focus'), l.addClass('focus'));
          } else {
            s.trigger('click');
          }
          return !1;
        }
        if (27 == t.keyCode) {
          s.hasClass('open') && s.trigger('click');
        } else if (9 == t.keyCode && s.hasClass('open')) {
          return !1;
        }
      });
    var n = document.createElement('a').style;
    return (
      (n.cssText = 'pointer-events:auto'), 'auto' !== n.pointerEvents && e('html').addClass('no-csspointerevents'), this
    );
  };
})(jQuery);

/*************************************
 Images Loaded
 **************************************/
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function(e, t) {
  'function' == typeof define && define.amd
    ? define('ev-emitter/ev-emitter', t)
    : 'object' == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})('undefined' != typeof window ? window : this, function() {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function(e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function(e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function() {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function(e, t) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['ev-emitter/ev-emitter'], function(i) {
          return t(e, i);
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = t(e, require('ev-emitter')))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })('undefined' != typeof window ? window : this, function(e, t) {
    function i(e, t) {
      for (var i in t) {
        e[i] = t[i];
      }
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) {
        return e;
      }
      var t = 'object' == typeof e && 'number' == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) {
        return new o(e, t, r);
      }
      var s = e;
      return (
        'string' == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            'function' == typeof t ? (r = t) : i(this.options, t),
            r && this.on('always', r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error('Bad element for imagesLoaded ' + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function() {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function(e) {
        'IMG' == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll('img'), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ('string' == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t) {
          for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
        }
      }),
      (o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function() {
        function e(e, i, n) {
          setTimeout(function() {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function(t) {
                t.once('progress', e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function(e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent('progress', [this, e, t]),
          this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log('progress: ' + i, e, t);
      }),
      (o.prototype.complete = function() {
        var e = this.hasAnyBroken ? 'fail' : 'done';
        if (((this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent('always', [this]), this.jqDeferred)) {
          var t = this.hasAnyBroken ? 'reject' : 'resolve';
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, 'naturalWidth')
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener('load', this),
            this.proxyImage.addEventListener('error', this),
            this.img.addEventListener('load', this),
            this.img.addEventListener('error', this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function(e, t) {
        (this.isLoaded = e), this.emitEvent('progress', [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function(e) {
        var t = 'on' + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function() {
        this.confirm(!0, 'onload'), this.unbindEvents();
      }),
      (r.prototype.onerror = function() {
        this.confirm(!1, 'onerror'), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener('load', this),
          this.proxyImage.removeEventListener('error', this),
          this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function() {
        this.img.addEventListener('load', this), this.img.addEventListener('error', this), (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'), this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function() {
        this.img.removeEventListener('load', this), this.img.removeEventListener('error', this);
      }),
      (s.prototype.confirm = function(e, t) {
        (this.isLoaded = e), this.emitEvent('progress', [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function(e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/*************************************
 Isotope
 **************************************/
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function(t, e) {
  'function' == typeof define && define.amd
    ? define('jquery-bridget/jquery-bridget', ['jquery'], function(i) {
        return e(t, i);
      })
    : 'object' == typeof module && module.exports
    ? (module.exports = e(t, require('jquery')))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function(t, e) {
  'use strict';
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = '$().' + i + '("' + e + '")';
      return (
        t.each(function(t, u) {
          var h = a.data(u, i);
          if (!h) {
            return void r(i + ' not initialized. Cannot call methods, i.e. ' + s);
          }
          var d = h[e];
          if (!d || '_' == e.charAt(0)) {
            return void r(s + ' is not a valid method');
          }
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function(t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function(t) {
          if ('string' == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      'undefined' == typeof s
        ? function() {}
        : function(t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('ev-emitter/ev-emitter', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })('undefined' != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function(t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function(t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function() {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('get-size/get-size', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function() {
    'use strict';
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf('%') == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            'Style returned ' +
              e +
              '. Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1'
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement('div');
        (e.style.width = '200px'),
          (e.style.padding = '1px 2px 3px 4px'),
          (e.style.borderStyle = 'solid'),
          (e.style.borderWidth = '1px 2px 3px 4px'),
          (e.style.boxSizing = 'border-box');
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))), (s.isBoxSizeOuter = r), i.removeChild(e);
      }
    }
    function s(e) {
      if ((n(), 'string' == typeof e && (e = document.querySelector(e)), e && 'object' == typeof e && e.nodeType)) {
        var s = o(e);
        if ('none' == s.display) {
          return i();
        }
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (var d = (a.isBorderBox = 'border-box' == s.boxSizing), l = 0; l < h; l++) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        'undefined' == typeof console
          ? e
          : function(t) {
              console.error(t);
            },
      u = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function(t, e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('desandro-matches-selector/matches-selector', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function() {
    'use strict';
    var t = (function() {
      var t = window.Element.prototype;
      if (t.matches) {
        return 'matches';
      }
      if (t.matchesSelector) {
        return 'matchesSelector';
      }
      for (var e = ['webkit', 'moz', 'ms', 'o'], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + 'MatchesSelector';
        if (t[n]) {
          return n;
        }
      }
    })();
    return function(e, i) {
      return e[t](i);
    };
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(i) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('desandro-matches-selector')))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function(t, e) {
    var i = {};
    (i.extend = function(t, e) {
      for (var i in e) {
        t[i] = e[i];
      }
      return t;
    }),
      (i.modulo = function(t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function(t) {
      if (Array.isArray(t)) {
        return t;
      }
      if (null === t || void 0 === t) {
        return [];
      }
      var e = 'object' == typeof t && 'number' == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; ) {
          if (((t = t.parentNode), e(t, i))) {
            return t;
          }
        }
      }),
      (i.getQueryElement = function(t) {
        return 'string' == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function(t) {
        var e = 'on' + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function(t) {
            if (t instanceof HTMLElement) {
              if (!o) {
                return void n.push(t);
              }
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
                n.push(i[s]);
              }
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + 'Timeout';
        t.prototype[e] = function() {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function() {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function(t) {
        var e = document.readyState;
        'complete' == e || 'interactive' == e ? setTimeout(t) : document.addEventListener('DOMContentLoaded', t);
      }),
      (i.toDashed = function(t) {
        return t
          .replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + '-' + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function(e, o) {
        i.docReady(function() {
          var s = i.toDashed(o),
            r = 'data-' + s,
            a = document.querySelectorAll('[' + r + ']'),
            u = document.querySelectorAll('.js-' + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + '-options',
            l = t.jQuery;
          h.forEach(function(t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (n && n.error('Error parsing ' + r + ' on ' + t.className + ': ' + a));
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('ev-emitter'), require('get-size')))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function(t, e) {
    'use strict';
    function i(t) {
      for (var e in t) {
        return !1;
      }
      return (e = null), !0;
    }
    function o(t, e) {
      t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function(t) {
        return '-' + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = 'string' == typeof s.transition ? 'transition' : 'WebkitTransition',
      a = 'string' == typeof s.transform ? 'transform' : 'WebkitTransform',
      u = { WebkitTransition: 'webkitTransitionEnd', transition: 'transitionend' }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + 'Duration',
        transitionProperty: r + 'Property',
        transitionDelay: r + 'Delay'
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function() {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: 'absolute' });
      }),
      (d.handleEvent = function(t) {
        var e = 'on' + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function() {
        this.size = e(this.element);
      }),
      (d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function() {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption('originLeft'),
          i = this.layout._getOption('originTop'),
          o = t[e ? 'left' : 'right'],
          n = t[i ? 'top' : 'bottom'],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf('%') != -1 && (s = (s / 100) * a.width),
          n.indexOf('%') != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function() {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption('originLeft'),
          o = this.layout._getOption('originTop'),
          n = i ? 'paddingLeft' : 'paddingRight',
          s = i ? 'left' : 'right',
          r = i ? 'right' : 'left',
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = '');
        var u = o ? 'paddingTop' : 'paddingBottom',
          h = o ? 'top' : 'bottom',
          d = o ? 'bottom' : 'top',
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)), (e[d] = ''), this.css(e), this.emitEvent('layout', [this]);
      }),
      (d.getXValue = function(t) {
        var e = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + '%' : t + 'px';
      }),
      (d.getYValue = function(t) {
        var e = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + '%' : t + 'px';
      }),
      (d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning)) {
          return void this.layoutPosition();
        }
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
      }),
      (d.getTranslate = function(t, e) {
        var i = this.layout._getOption('originLeft'),
          o = this.layout._getOption('originTop');
        return (t = i ? t : -t), (e = o ? e : -e), 'translate3d(' + t + 'px, ' + e + 'px, 0)';
      }),
      (d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function(t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) {
          t.onTransitionEnd[e].call(this);
        }
      }),
      (d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
          return void this._nonTransition(t);
        }
        var e = this._transn;
        for (var i in t.onTransitionEnd) {
          e.onEnd[i] = t.onTransitionEnd[i];
        }
        for (i in t.to) {
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        }
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
      });
    var l = 'opacity,' + n(a);
    (d.enableTransition = function() {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = 'number' == typeof t ? t + 'ms' : t),
          this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function(t) {
        this.ontransitionend(t);
      });
    var f = { '-webkit-transform': 'transform' };
    (d.ontransitionend = function(t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean && ((this.element.style[t.propertyName] = ''), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent('transitionEnd', [this]);
      }
    }),
      (d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), (this.isTransitioning = !1);
      }),
      (d._removeStyles = function(t) {
        var e = {};
        for (var i in t) {
          e[i] = '';
        }
        this.css(e);
      });
    var c = { transitionProperty: '', transitionDuration: '', transitionDelay: '' };
    return (
      (d.removeTransitionStyles = function() {
        this.css(c);
      }),
      (d.stagger = function(t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + 'ms');
      }),
      (d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({ display: '' }), this.emitEvent('remove', [this]);
      }),
      (d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once('transitionEnd', function() {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function() {
        delete this.isHidden, this.css({ display: '' });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty('visibleStyle');
        (e[i] = this.onRevealTransitionEnd),
          this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
      }),
      (d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent('reveal');
      }),
      (d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) {
          return 'opacity';
        }
        for (var i in e) {
          return i;
        }
      }),
      (d.hide = function() {
        (this.isHidden = !0), this.css({ display: '' });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty('hiddenStyle');
        (e[i] = this.onHideTransitionEnd),
          this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
      }),
      (d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({ display: 'none' }), this.emitEvent('hide'));
      }),
      (d.destroy = function() {
        this.css({ position: '', left: '', right: '', top: '', bottom: '', transition: '', transform: '' });
      }),
      o
    );
  }),
  (function(t, e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('outlayer/outlayer', [
          'ev-emitter/ev-emitter',
          'get-size/get-size',
          'fizzy-ui-utils/utils',
          './item'
        ], function(i, o, n, s) {
          return e(t, i, o, n, s);
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('ev-emitter'),
          require('get-size'),
          require('fizzy-ui-utils'),
          require('./item')
        ))
      : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
  })(window, function(t, e, i, o, n) {
    'use strict';
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i) {
        return void (u && u.error('Bad element for ' + this.constructor.namespace + ': ' + (i || t)));
      }
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption('initLayout');
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
    }
    function a(t) {
      if ('number' == typeof t) {
        return t;
      }
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) {
        return 0;
      }
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function() {},
      l = 0,
      f = {};
    (s.namespace = 'outlayer'),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: 'relative' },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: '0.4s',
        hiddenStyle: { opacity: 0, transform: 'scale(0.001)' },
        visibleStyle: { opacity: 1, transform: 'scale(1)' }
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function(t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
      }),
      (c._create = function() {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption('resize');
        t && this.bindResize();
      }),
      (c.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function() {
        return this.items.map(function(t) {
          return t.element;
        });
      }),
      (c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption('layoutInstant'),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function() {
        this.getSize();
      }),
      (c.getSize = function() {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function(t, e) {
        var o,
          n = this.options[t];
        n
          ? ('string' == typeof n ? (o = this.element.querySelector(n)) : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function(t, e) {
        (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
      }),
      (c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function(t, e) {
        if ((this._emitCompleteOnItems('layout', t), t && t.length)) {
          var i = [];
          t.forEach(function(t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function() {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function(t) {
        this.updateStagger(),
          t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function() {
        this.resizeContainer();
      }),
      (c.resizeContainer = function() {
        var t = this._getOption('resizeContainer');
        if (t) {
          var e = this._getContainerSize();
          e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth
              : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? 'width' : 'height'] = t + 'px');
        }
      }),
      (c._emitCompleteOnItems = function(t, e) {
        function i() {
          n.dispatchEvent(t + 'Complete', null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) {
          return void i();
        }
        var r = 0;
        e.forEach(function(e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h)) {
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else {
            this.$element.trigger(t, i);
          }
        }
      }),
      (c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function(t) {
        (t = this._find(t)), t && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (c.unstamp = function(t) {
        (t = this._find(t)),
          t &&
            t.forEach(function(t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function(t) {
        if (t) {
          return 'string' == typeof t && (t = this.element.querySelectorAll(t)), (t = o.makeArray(t));
        }
      }),
      (c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function() {
        t.addEventListener('resize', this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function() {
        t.removeEventListener('resize', this), (this.isResizeBound = !1);
      }),
      (c.onresize = function() {
        this.resize();
      }),
      o.debounceMethod(s, 'onresize', 100),
      (c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function() {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function(t) {
        if ((this._emitCompleteOnItems('reveal', t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function(t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function(t) {
        if ((this._emitCompleteOnItems('hide', t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function(t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) {
            return i;
          }
        }
      }),
      (c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems('remove', e),
          e &&
            e.length &&
            e.forEach(function(t) {
              t.remove(i), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function() {
        var t = this.element.style;
        (t.height = ''),
          (t.position = ''),
          (t.width = ''),
          this.items.forEach(function(t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function(t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('isotope-layout/js/item', ['outlayer/outlayer'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('outlayer')))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function(t) {
    'use strict';
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function() {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function() {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData['original-order'] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function() {
        n.apply(this, arguments), this.css({ display: '' });
      }),
      e
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('get-size'), require('outlayer')))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function(t, e) {
    'use strict';
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        '_resetLayout',
        '_getItemLayoutPosition',
        '_manageStamp',
        '_getContainerSize',
        '_getElementOffset',
        'needsResizeLayout',
        '_getOption'
      ];
    return (
      n.forEach(function(t) {
        o[t] = function() {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function() {
        this.getSegmentSize('column', 'Width');
      }),
      (o.getRowHeight = function() {
        this.getSegmentSize('row', 'Height');
      }),
      (o.getSegmentSize = function(t, e) {
        var i = t + e,
          o = 'outer' + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size['inner' + e];
        }
      }),
      (o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function() {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function(t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('outlayer'), require('get-size')))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function(t, e) {
    var i = t.create('masonry');
    i.compatOptions.fitWidth = 'isFitWidth';
    var o = i.prototype;
    return (
      (o._resetLayout = function() {
        this.getSize(),
          this._getMeasurement('columnWidth', 'outerWidth'),
          this._getMeasurement('gutter', 'outerWidth'),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) {
          this.colYs.push(0);
        }
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function() {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? 'round' : 'floor';
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function() {
        var t = this._getOption('fitWidth'),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? 'round' : 'ceil',
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition',
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        ) {
          this.colYs[h] = a;
        }
        return r;
      }),
      (o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function(t) {
        if (t < 2) {
          return this.colYs;
        }
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
          e[o] = this._getColGroupY(o, t);
        }
        return e;
      }),
      (o._getColGroupY = function(t, e) {
        if (e < 2) {
          return this.colYs[t];
        }
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
      }),
      (o._manageStamp = function(t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption('originLeft'),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (var h = this._getOption('originTop'), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
          this.colYs[l] = Math.max(d, this.colYs[l]);
        }
      }),
      (o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return this._getOption('fitWidth') && (t.width = this._getContainerFitWidth()), t;
      }),
      (o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) {
          t++;
        }
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('../layout-mode'), require('masonry-layout')))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function(t, e) {
    'use strict';
    var i = t.create('masonry'),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) {
      n[s] || (o[s] = e.prototype[s]);
    }
    var r = o.measureColumns;
    o.measureColumns = function() {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function(t) {
        return 'fitWidth' == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], e)
      : 'object' == typeof exports
      ? (module.exports = e(require('../layout-mode')))
      : e(t.Isotope.LayoutMode);
  })(window, function(t) {
    'use strict';
    var e = t.create('fitRows'),
      i = e.prototype;
    return (
      (i._resetLayout = function() {
        (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement('gutter', 'outerWidth');
      }),
      (i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), o;
      }),
      (i._getContainerSize = function() {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('../layout-mode')))
      : e(t.Isotope.LayoutMode);
  })(window, function(t) {
    'use strict';
    var e = t.create('vertical', { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function() {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function() {
        return { height: this.y };
      }),
      e
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define([
          'outlayer/outlayer',
          'get-size/get-size',
          'desandro-matches-selector/matches-selector',
          'fizzy-ui-utils/utils',
          'isotope-layout/js/item',
          'isotope-layout/js/layout-mode',
          'isotope-layout/js/layout-modes/masonry',
          'isotope-layout/js/layout-modes/fit-rows',
          'isotope-layout/js/layout-modes/vertical'
        ], function(i, o, n, s, r, a) {
          return e(t, i, o, n, s, r, a);
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('outlayer'),
          require('get-size'),
          require('desandro-matches-selector'),
          require('fizzy-ui-utils'),
          require('isotope-layout/js/item'),
          require('isotope-layout/js/layout-mode'),
          require('isotope-layout/js/layout-modes/masonry'),
          require('isotope-layout/js/layout-modes/fit-rows'),
          require('isotope-layout/js/layout-modes/vertical')
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
      return function(i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function(t) {
            return t.trim();
          }
        : function(t) {
            return t.replace(/^\s+|\s+$/g, '');
          },
      d = e.create('isotope', { layoutMode: 'masonry', isJQueryFiltering: !0, sortAscending: !0 });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function() {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ['original-order']);
      for (var t in r.modes) {
        this._initLayoutMode(t);
      }
    }),
      (l.reloadItems = function() {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function(t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i), (this.modes[t] = new e(this));
      }),
      (l.layout = function() {
        return !this._isLayoutInited && this._getOption('initLayout') ? void this.arrange() : void this._layout();
      }),
      (l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
      }),
      (l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function() {
        var t = this._getOption('layoutInstant'),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function() {
        function t() {
          e && i && o && n.dispatchEvent('arrangeComplete', null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once('layoutComplete', function() {
          (e = !0), t();
        }),
          this.once('hideComplete', function() {
            (i = !0), t();
          }),
          this.once('revealComplete', function() {
            (o = !0), t();
          });
      }),
      (l._filter = function(t) {
        var e = this.options.filter;
        e = e || '*';
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering
          ? function(e) {
              return u(e.element).is(t);
            }
          : 'function' == typeof t
          ? function(e) {
              return t(e.element);
            }
          : function(e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function(t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function() {
      function t(t) {
        if ('string' != typeof t) {
          return t;
        }
        var i = h(t).split(' '),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function(t) {
              return t && a(r(t));
            }
          : function(t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function(e) {
              return e.getAttribute(t);
            }
          : function(t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function(t) {
        return parseInt(t, 10);
      },
      parseFloat: function(t) {
        return parseFloat(t);
      }
    }),
      (l._sort = function() {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++) {
          if (t[e] != this.sortHistory[e]) {
            return !1;
          }
        }
        return !0;
      }),
      (l._mode = function() {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) {
          throw new Error('No layout mode: ' + t);
        }
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function(t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function() {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
      }),
      (l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++) {
            (o = e[i]), this.element.appendChild(o.element);
          }
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) {
            e[i].isLayoutInstant = !0;
          }
          for (this.arrange(), i = 0; i < n; i++) {
            delete e[i].isLayoutInstant;
          }
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = 'random'), this._sort(), this._layout();
      }),
      (l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
          return t.element;
        });
      }),
      d
    );
  });

/*************************************
 Light Gallery
 **************************************/
/*! lightgallery - v1.6.11 - 2018-05-22
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2018 Sachin N; Licensed GPLv3 */
!(function(a, b) {
  'function' == typeof define && define.amd
    ? define(['jquery'], function(a) {
        return b(a);
      })
    : 'object' == typeof module && module.exports
    ? (module.exports = b(require('jquery')))
    : b(a.jQuery);
})(this, function(a) {
  !(function() {
    'use strict';
    function b(b, d) {
      if (
        ((this.el = b),
        (this.$el = a(b)),
        (this.s = a.extend({}, c, d)),
        this.s.dynamic &&
          'undefined' !== this.s.dynamicEl &&
          this.s.dynamicEl.constructor === Array &&
          !this.s.dynamicEl.length)
      ) {
        throw new Error('When using dynamic mode, you must also define dynamicEl as an Array.');
      }
      return (
        (this.modules = {}),
        (this.lGalleryOn = !1),
        (this.lgBusy = !1),
        (this.hideBartimeout = !1),
        (this.isTouch = 'ontouchstart' in document.documentElement),
        this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
        this.s.dynamic
          ? (this.$items = this.s.dynamicEl)
          : 'this' === this.s.selector
          ? (this.$items = this.$el)
          : '' !== this.s.selector
          ? this.s.selectWithin
            ? (this.$items = a(this.s.selectWithin).find(this.s.selector))
            : (this.$items = this.$el.find(a(this.s.selector)))
          : (this.$items = this.$el.children()),
        (this.$slide = ''),
        (this.$outer = ''),
        this.init(),
        this
      );
    }
    var c = {
      mode: 'lg-slide',
      cssEasing: 'ease',
      easing: 'linear',
      speed: 600,
      height: '100%',
      width: '100%',
      addClass: '',
      startClass: 'lg-start-zoom',
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: '.lg-sub-html',
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: '',
      selectWithin: '',
      nextHtml: '',
      prevHtml: '',
      index: !1,
      iframeMaxWidth: '100%',
      download: !0,
      counter: !0,
      appendCounterTo: '.lg-toolbar',
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1
    };
    (b.prototype.init = function() {
      var b = this;
      b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
      var c = window.location.hash;
      c.indexOf('lg=' + this.s.galleryId) > 0 &&
        ((b.index = parseInt(c.split('&slide=')[1], 10)),
        a('body').addClass('lg-from-hash'),
        a('body').hasClass('lg-on') ||
          (setTimeout(function() {
            b.build(b.index);
          }),
          a('body').addClass('lg-on'))),
        b.s.dynamic
          ? (b.$el.trigger('onBeforeOpen.lg'),
            (b.index = b.s.index || 0),
            a('body').hasClass('lg-on') ||
              setTimeout(function() {
                b.build(b.index), a('body').addClass('lg-on');
              }))
          : b.$items.on('click.lgcustom', function(c) {
              try {
                c.preventDefault(), c.preventDefault();
              } catch (a) {
                c.returnValue = !1;
              }
              b.$el.trigger('onBeforeOpen.lg'),
                (b.index = b.s.index || b.$items.index(this)),
                a('body').hasClass('lg-on') || (b.build(b.index), a('body').addClass('lg-on'));
            });
    }),
      (b.prototype.build = function(b) {
        var c = this;
        c.structure(),
          a.each(a.fn.lightGallery.modules, function(b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
          }),
          c.slide(b, !1, !1, !1),
          c.s.keyPress && c.keyPress(),
          c.$items.length > 1
            ? (c.arrow(),
              setTimeout(function() {
                c.enableDrag(), c.enableSwipe();
              }, 50),
              c.s.mousewheel && c.mousewheel())
            : c.$slide.on('click.lg', function() {
                c.$el.trigger('onSlideClick.lg');
              }),
          c.counter(),
          c.closeGallery(),
          c.$el.trigger('onAfterOpen.lg'),
          c.$outer.on('mousemove.lg click.lg touchstart.lg', function() {
            c.$outer.removeClass('lg-hide-items'),
              clearTimeout(c.hideBartimeout),
              (c.hideBartimeout = setTimeout(function() {
                c.$outer.addClass('lg-hide-items');
              }, c.s.hideBarsDelay));
          }),
          c.$outer.trigger('mousemove.lg');
      }),
      (b.prototype.structure = function() {
        var b,
          c = '',
          d = '',
          e = 0,
          f = '',
          g = this;
        for (
          a('body').append('<div class="lg-backdrop"></div>'),
            a('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms'),
            e = 0;
          e < this.$items.length;
          e++
        ) {
          c += '<div class="lg-item"></div>';
        }
        if (
          (this.s.controls &&
            this.$items.length > 1 &&
            (d =
              '<div class="lg-actions"><button class="lg-prev lg-icon">' +
              this.s.prevHtml +
              '</button><button class="lg-next lg-icon">' +
              this.s.nextHtml +
              '</button></div>'),
          '.lg-sub-html' === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'),
          (b =
            '<div class="lg-outer ' +
            this.s.addClass +
            ' ' +
            this.s.startClass +
            '"><div class="lg" style="width:' +
            this.s.width +
            '; height:' +
            this.s.height +
            '"><div class="lg-inner">' +
            c +
            '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
            d +
            f +
            '</div></div>'),
          a('body').append(b),
          (this.$outer = a('.lg-outer')),
          (this.$slide = this.$outer.find('.lg-item')),
          this.s.useLeft
            ? (this.$outer.addClass('lg-use-left'), (this.s.mode = 'lg-slide'))
            : this.$outer.addClass('lg-use-css3'),
          g.setTop(),
          a(window).on('resize.lg orientationchange.lg', function() {
            setTimeout(function() {
              g.setTop();
            }, 100);
          }),
          this.$slide.eq(this.index).addClass('lg-current'),
          this.doCss() ? this.$outer.addClass('lg-css3') : (this.$outer.addClass('lg-css'), (this.s.speed = 0)),
          this.$outer.addClass(this.s.mode),
          this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass('lg-grab'),
          this.s.showAfterLoad && this.$outer.addClass('lg-show-after-load'),
          this.doCss())
        ) {
          var h = this.$outer.find('.lg-inner');
          h.css('transition-timing-function', this.s.cssEasing), h.css('transition-duration', this.s.speed + 'ms');
        }
        setTimeout(function() {
          a('.lg-backdrop').addClass('in');
        }),
          setTimeout(function() {
            g.$outer.addClass('lg-visible');
          }, this.s.backdropDuration),
          this.s.download &&
            this.$outer
              .find('.lg-toolbar')
              .append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
          (this.prevScrollTop = a(window).scrollTop());
      }),
      (b.prototype.setTop = function() {
        if ('100%' !== this.s.height) {
          var b = a(window).height(),
            c = (b - parseInt(this.s.height, 10)) / 2,
            d = this.$outer.find('.lg');
          b >= parseInt(this.s.height, 10) ? d.css('top', c + 'px') : d.css('top', '0px');
        }
      }),
      (b.prototype.doCss = function() {
        return !!(function() {
          var a = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'],
            b = document.documentElement,
            c = 0;
          for (c = 0; c < a.length; c++) {
            if (a[c] in b.style) {
              return !0;
            }
          }
        })();
      }),
      (b.prototype.isVideo = function(a, b) {
        var c;
        if (((c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr('data-html')), !a)) {
          return c
            ? { html5: !0 }
            : (console.error(
                'lightGallery :- data-src is not pvovided on slide item ' +
                  (b + 1) +
                  '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html'
              ),
              !1);
        }
        var d = a.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
          ),
          e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
          f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
          g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
        return d ? { youtube: d } : e ? { vimeo: e } : f ? { dailymotion: f } : g ? { vk: g } : void 0;
      }),
      (b.prototype.counter = function() {
        this.s.counter &&
          a(this.s.appendCounterTo).append(
            '<div id="lg-counter"><span id="lg-counter-current">' +
              (parseInt(this.index, 10) + 1) +
              '</span> / <span id="lg-counter-all">' +
              this.$items.length +
              '</span></div>'
          );
      }),
      (b.prototype.addHtml = function(b) {
        var c,
          d,
          e = null;
        if (
          (this.s.dynamic
            ? this.s.dynamicEl[b].subHtmlUrl
              ? (c = this.s.dynamicEl[b].subHtmlUrl)
              : (e = this.s.dynamicEl[b].subHtml)
            : ((d = this.$items.eq(b)),
              d.attr('data-sub-html-url')
                ? (c = d.attr('data-sub-html-url'))
                : ((e = d.attr('data-sub-html')),
                  this.s.getCaptionFromTitleOrAlt &&
                    !e &&
                    (e =
                      d.attr('title') ||
                      d
                        .find('img')
                        .first()
                        .attr('alt')))),
          !c)
        ) {
          if (void 0 !== e && null !== e) {
            var f = e.substring(0, 1);
            ('.' !== f && '#' !== f) ||
              (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html());
          } else {
            e = '';
          }
        }
        '.lg-sub-html' === this.s.appendSubHtmlTo
          ? c
            ? this.$outer.find(this.s.appendSubHtmlTo).load(c)
            : this.$outer.find(this.s.appendSubHtmlTo).html(e)
          : c
          ? this.$slide.eq(b).load(c)
          : this.$slide.eq(b).append(e),
          void 0 !== e &&
            null !== e &&
            ('' === e
              ? this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html')
              : this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html')),
          this.$el.trigger('onAfterAppendSubHtml.lg', [b]);
      }),
      (b.prototype.preload = function(a) {
        var b = 1,
          c = 1;
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) {
          this.loadContent(a + b, !1, 0);
        }
        for (c = 1; c <= this.s.preload && !(a - c < 0); c++) {
          this.loadContent(a - c, !1, 0);
        }
      }),
      (b.prototype.loadContent = function(b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k = this,
          l = !1,
          m = function(b) {
            for (var c = [], d = [], e = 0; e < b.length; e++) {
              var g = b[e].split(' ');
              '' === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1]);
            }
            for (var h = a(window).width(), i = 0; i < c.length; i++) {
              if (parseInt(c[i], 10) > h) {
                f = d[i];
                break;
              }
            }
          };
        if (k.s.dynamic) {
          if (
            (k.s.dynamicEl[b].poster && ((l = !0), (g = k.s.dynamicEl[b].poster)),
            (j = k.s.dynamicEl[b].html),
            (f = k.s.dynamicEl[b].src),
            k.s.dynamicEl[b].responsive)
          ) {
            m(k.s.dynamicEl[b].responsive.split(','));
          }
          (h = k.s.dynamicEl[b].srcset), (i = k.s.dynamicEl[b].sizes);
        } else {
          if (
            (k.$items.eq(b).attr('data-poster') && ((l = !0), (g = k.$items.eq(b).attr('data-poster'))),
            (j = k.$items.eq(b).attr('data-html')),
            (f = k.$items.eq(b).attr('href') || k.$items.eq(b).attr('data-src')),
            k.$items.eq(b).attr('data-responsive'))
          ) {
            m(
              k.$items
                .eq(b)
                .attr('data-responsive')
                .split(',')
            );
          }
          (h = k.$items.eq(b).attr('data-srcset')), (i = k.$items.eq(b).attr('data-sizes'));
        }
        var n = !1;
        k.s.dynamic ? k.s.dynamicEl[b].iframe && (n = !0) : 'true' === k.$items.eq(b).attr('data-iframe') && (n = !0);
        var o = k.isVideo(f, b);
        if (!k.$slide.eq(b).hasClass('lg-loaded')) {
          if (n) {
            k.$slide
              .eq(b)
              .prepend(
                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                  k.s.iframeMaxWidth +
                  '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                  f +
                  '"  allowfullscreen="true"></iframe></div></div>'
              );
          } else if (l) {
            var p = '';
            (p = o && o.youtube ? 'lg-has-youtube' : o && o.vimeo ? 'lg-has-vimeo' : 'lg-has-html5'),
              k.$slide
                .eq(b)
                .prepend(
                  '<div class="lg-video-cont ' +
                    p +
                    ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                    g +
                    '" /></div></div>'
                );
          } else {
            o
              ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),
                k.$el.trigger('hasVideo.lg', [b, f, j]))
              : k.$slide
                  .eq(b)
                  .prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
          }
          if (
            (k.$el.trigger('onAferAppendSlide.lg', [b]),
            (e = k.$slide.eq(b).find('.lg-object')),
            i && e.attr('sizes', i),
            h)
          ) {
            e.attr('srcset', h);
            try {
              picturefill({ elements: [e[0]] });
            } catch (a) {
              console.warn(
                'lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.'
              );
            }
          }
          '.lg-sub-html' !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass('lg-loaded');
        }
        k.$slide
          .eq(b)
          .find('.lg-object')
          .on('load.lg error.lg', function() {
            var c = 0;
            d && !a('body').hasClass('lg-from-hash') && (c = d),
              setTimeout(function() {
                k.$slide.eq(b).addClass('lg-complete'), k.$el.trigger('onSlideItemLoad.lg', [b, d || 0]);
              }, c);
          }),
          o && o.html5 && !l && k.$slide.eq(b).addClass('lg-complete'),
          !0 === c &&
            (k.$slide.eq(b).hasClass('lg-complete')
              ? k.preload(b)
              : k.$slide
                  .eq(b)
                  .find('.lg-object')
                  .on('load.lg error.lg', function() {
                    k.preload(b);
                  }));
      }),
      (b.prototype.slide = function(b, c, d, e) {
        var f = this.$outer.find('.lg-current').index(),
          g = this;
        if (!g.lGalleryOn || f !== b) {
          var h = this.$slide.length,
            i = g.lGalleryOn ? this.s.speed : 0;
          if (!g.lgBusy) {
            if (this.s.download) {
              var j;
              (j = g.s.dynamic
                ? !1 !== g.s.dynamicEl[b].downloadUrl && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src)
                : 'false' !== g.$items.eq(b).attr('data-download-url') &&
                  (g.$items.eq(b).attr('data-download-url') ||
                    g.$items.eq(b).attr('href') ||
                    g.$items.eq(b).attr('data-src'))),
                j
                  ? (a('#lg-download').attr('href', j), g.$outer.removeClass('lg-hide-download'))
                  : g.$outer.addClass('lg-hide-download');
            }
            if (
              (this.$el.trigger('onBeforeSlide.lg', [f, b, c, d]),
              (g.lgBusy = !0),
              clearTimeout(g.hideBartimeout),
              '.lg-sub-html' === this.s.appendSubHtmlTo &&
                setTimeout(function() {
                  g.addHtml(b);
                }, i),
              this.arrowDisable(b),
              e || (b < f ? (e = 'prev') : b > f && (e = 'next')),
              c)
            ) {
              this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
              var k, l;
              h > 2
                ? ((k = b - 1),
                  (l = b + 1),
                  0 === b && f === h - 1 ? ((l = 0), (k = h - 1)) : b === h - 1 && 0 === f && ((l = 0), (k = h - 1)))
                : ((k = 0), (l = 1)),
                'prev' === e ? g.$slide.eq(l).addClass('lg-next-slide') : g.$slide.eq(k).addClass('lg-prev-slide'),
                g.$slide.eq(b).addClass('lg-current');
            } else {
              g.$outer.addClass('lg-no-trans'),
                this.$slide.removeClass('lg-prev-slide lg-next-slide'),
                'prev' === e
                  ? (this.$slide.eq(b).addClass('lg-prev-slide'), this.$slide.eq(f).addClass('lg-next-slide'))
                  : (this.$slide.eq(b).addClass('lg-next-slide'), this.$slide.eq(f).addClass('lg-prev-slide')),
                setTimeout(function() {
                  g.$slide.removeClass('lg-current'),
                    g.$slide.eq(b).addClass('lg-current'),
                    g.$outer.removeClass('lg-no-trans');
                }, 50);
            }
            g.lGalleryOn
              ? (setTimeout(function() {
                  g.loadContent(b, !0, 0);
                }, this.s.speed + 50),
                setTimeout(function() {
                  (g.lgBusy = !1), g.$el.trigger('onAfterSlide.lg', [f, b, c, d]);
                }, this.s.speed))
              : (g.loadContent(b, !0, g.s.backdropDuration),
                (g.lgBusy = !1),
                g.$el.trigger('onAfterSlide.lg', [f, b, c, d])),
              (g.lGalleryOn = !0),
              this.s.counter && a('#lg-counter-current').text(b + 1);
          }
          g.index = b;
        }
      }),
      (b.prototype.goToNextSlide = function(a) {
        var b = this,
          c = b.s.loop;
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index + 1 < b.$slide.length
              ? (b.index++, b.$el.trigger('onBeforeNextSlide.lg', [b.index]), b.slide(b.index, a, !1, 'next'))
              : c
              ? ((b.index = 0), b.$el.trigger('onBeforeNextSlide.lg', [b.index]), b.slide(b.index, a, !1, 'next'))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass('lg-right-end'),
                setTimeout(function() {
                  b.$outer.removeClass('lg-right-end');
                }, 400)));
      }),
      (b.prototype.goToPrevSlide = function(a) {
        var b = this,
          c = b.s.loop;
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index > 0
              ? (b.index--, b.$el.trigger('onBeforePrevSlide.lg', [b.index, a]), b.slide(b.index, a, !1, 'prev'))
              : c
              ? ((b.index = b.$items.length - 1),
                b.$el.trigger('onBeforePrevSlide.lg', [b.index, a]),
                b.slide(b.index, a, !1, 'prev'))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass('lg-left-end'),
                setTimeout(function() {
                  b.$outer.removeClass('lg-left-end');
                }, 400)));
      }),
      (b.prototype.keyPress = function() {
        var b = this;
        this.$items.length > 1 &&
          a(window).on('keyup.lg', function(a) {
            b.$items.length > 1 &&
              (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()),
              39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()));
          }),
          a(window).on('keydown.lg', function(a) {
            !0 === b.s.escKey &&
              27 === a.keyCode &&
              (a.preventDefault(),
              b.$outer.hasClass('lg-thumb-open') ? b.$outer.removeClass('lg-thumb-open') : b.destroy());
          });
      }),
      (b.prototype.arrow = function() {
        var a = this;
        this.$outer.find('.lg-prev').on('click.lg', function() {
          a.goToPrevSlide();
        }),
          this.$outer.find('.lg-next').on('click.lg', function() {
            a.goToNextSlide();
          });
      }),
      (b.prototype.arrowDisable = function(a) {
        !this.s.loop &&
          this.s.hideControlOnEnd &&
          (a + 1 < this.$slide.length
            ? this.$outer
                .find('.lg-next')
                .removeAttr('disabled')
                .removeClass('disabled')
            : this.$outer
                .find('.lg-next')
                .attr('disabled', 'disabled')
                .addClass('disabled'),
          a > 0
            ? this.$outer
                .find('.lg-prev')
                .removeAttr('disabled')
                .removeClass('disabled')
            : this.$outer
                .find('.lg-prev')
                .attr('disabled', 'disabled')
                .addClass('disabled'));
      }),
      (b.prototype.setTranslate = function(a, b, c) {
        this.s.useLeft ? a.css('left', b) : a.css({ transform: 'translate3d(' + b + 'px, ' + c + 'px, 0px)' });
      }),
      (b.prototype.touchMove = function(b, c) {
        var d = c - b;
        Math.abs(d) > 15 &&
          (this.$outer.addClass('lg-dragging'),
          this.setTranslate(this.$slide.eq(this.index), d, 0),
          this.setTranslate(a('.lg-prev-slide'), -this.$slide.eq(this.index).width() + d, 0),
          this.setTranslate(a('.lg-next-slide'), this.$slide.eq(this.index).width() + d, 0));
      }),
      (b.prototype.touchEnd = function(a) {
        var b = this;
        'lg-slide' !== b.s.mode && b.$outer.addClass('lg-slide'),
          this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0'),
          setTimeout(function() {
            b.$outer.removeClass('lg-dragging'),
              a < 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToNextSlide(!0)
                : a > 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToPrevSlide(!0)
                : Math.abs(a) < 5 && b.$el.trigger('onSlideClick.lg'),
              b.$slide.removeAttr('style');
          }),
          setTimeout(function() {
            b.$outer.hasClass('lg-dragging') || 'lg-slide' === b.s.mode || b.$outer.removeClass('lg-slide');
          }, b.s.speed + 100);
      }),
      (b.prototype.enableSwipe = function() {
        var a = this,
          b = 0,
          c = 0,
          d = !1;
        a.s.enableSwipe &&
          a.doCss() &&
          (a.$slide.on('touchstart.lg', function(c) {
            a.$outer.hasClass('lg-zoomed') ||
              a.lgBusy ||
              (c.preventDefault(), a.manageSwipeClass(), (b = c.originalEvent.targetTouches[0].pageX));
          }),
          a.$slide.on('touchmove.lg', function(e) {
            a.$outer.hasClass('lg-zoomed') ||
              (e.preventDefault(), (c = e.originalEvent.targetTouches[0].pageX), a.touchMove(b, c), (d = !0));
          }),
          a.$slide.on('touchend.lg', function() {
            a.$outer.hasClass('lg-zoomed') || (d ? ((d = !1), a.touchEnd(c - b)) : a.$el.trigger('onSlideClick.lg'));
          }));
      }),
      (b.prototype.enableDrag = function() {
        var b = this,
          c = 0,
          d = 0,
          e = !1,
          f = !1;
        b.s.enableDrag &&
          b.doCss() &&
          (b.$slide.on('mousedown.lg', function(d) {
            b.$outer.hasClass('lg-zoomed') ||
              b.lgBusy ||
              a(d.target)
                .text()
                .trim() ||
              (d.preventDefault(),
              b.manageSwipeClass(),
              (c = d.pageX),
              (e = !0),
              (b.$outer.scrollLeft += 1),
              (b.$outer.scrollLeft -= 1),
              b.$outer.removeClass('lg-grab').addClass('lg-grabbing'),
              b.$el.trigger('onDragstart.lg'));
          }),
          a(window).on('mousemove.lg', function(a) {
            e && ((f = !0), (d = a.pageX), b.touchMove(c, d), b.$el.trigger('onDragmove.lg'));
          }),
          a(window).on('mouseup.lg', function(g) {
            f
              ? ((f = !1), b.touchEnd(d - c), b.$el.trigger('onDragend.lg'))
              : (a(g.target).hasClass('lg-object') || a(g.target).hasClass('lg-video-play')) &&
                b.$el.trigger('onSlideClick.lg'),
              e && ((e = !1), b.$outer.removeClass('lg-grabbing').addClass('lg-grab'));
          }));
      }),
      (b.prototype.manageSwipeClass = function() {
        var a = this.index + 1,
          b = this.index - 1;
        this.s.loop &&
          this.$slide.length > 2 &&
          (0 === this.index ? (b = this.$slide.length - 1) : this.index === this.$slide.length - 1 && (a = 0)),
          this.$slide.removeClass('lg-next-slide lg-prev-slide'),
          b > -1 && this.$slide.eq(b).addClass('lg-prev-slide'),
          this.$slide.eq(a).addClass('lg-next-slide');
      }),
      (b.prototype.mousewheel = function() {
        var a = this;
        a.$outer.on('mousewheel.lg', function(b) {
          b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault());
        });
      }),
      (b.prototype.closeGallery = function() {
        var b = this,
          c = !1;
        this.$outer.find('.lg-close').on('click.lg', function() {
          b.destroy();
        }),
          b.s.closable &&
            (b.$outer.on('mousedown.lg', function(b) {
              c = !!(a(b.target).is('.lg-outer') || a(b.target).is('.lg-item ') || a(b.target).is('.lg-img-wrap'));
            }),
            b.$outer.on('mousemove.lg', function() {
              c = !1;
            }),
            b.$outer.on('mouseup.lg', function(d) {
              (a(d.target).is('.lg-outer') || a(d.target).is('.lg-item ') || (a(d.target).is('.lg-img-wrap') && c)) &&
                (b.$outer.hasClass('lg-dragging') || b.destroy());
            }));
      }),
      (b.prototype.destroy = function(b) {
        var c = this;
        b || (c.$el.trigger('onBeforeClose.lg'), a(window).scrollTop(c.prevScrollTop)),
          b && (c.s.dynamic || this.$items.off('click.lg click.lgcustom'), a.removeData(c.el, 'lightGallery')),
          this.$el.off('.lg.tm'),
          a.each(a.fn.lightGallery.modules, function(a) {
            c.modules[a] && c.modules[a].destroy();
          }),
          (this.lGalleryOn = !1),
          clearTimeout(c.hideBartimeout),
          (this.hideBartimeout = !1),
          a(window).off('.lg'),
          a('body').removeClass('lg-on lg-from-hash'),
          c.$outer && c.$outer.removeClass('lg-visible'),
          a('.lg-backdrop').removeClass('in'),
          setTimeout(function() {
            c.$outer && c.$outer.remove(i), a('.lg-backdrop').remove(i), b || c.$el.trigger('onCloseAfter.lg');
          }, c.s.backdropDuration + 50);
      }),
      (a.fn.lightGallery = function(c) {
        return this.each(function() {
          if (a.data(this, 'lightGallery')) {
            try {
              a(this)
                .data('lightGallery')
                .init();
            } catch (a) {
              console.error('lightGallery has not initiated properly');
            }
          } else {
            a.data(this, 'lightGallery', new b(this, c));
          }
        });
      }),
      (a.fn.lightGallery.modules = {});
  })();
});

/*************************************
 Waypoints
 **************************************/
/*!
Waypoints - 4.0.1
Copyright Ã‚Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function() {
  'use strict';
  function t(o) {
    if (!o) {
      throw new Error('No options passed to Waypoint constructor');
    }
    if (!o.element) {
      throw new Error('No element option passed to Waypoint constructor');
    }
    if (!o.handler) {
      throw new Error('No handler option passed to Waypoint constructor');
    }
    (this.key = 'waypoint-' + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? 'horizontal' : 'vertical'),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function(t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function(t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function() {
      this.context.remove(i), this.group.remove(i), delete i[this.key];
    }),
    (t.prototype.disable = function() {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function() {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function() {
      return this.group.next(this);
    }),
    (t.prototype.previous = function() {
      return this.group.previous(this);
    }),
    (t.invokeAll = function(t) {
      var e = [];
      for (var o in i) {
        e.push(i[o]);
      }
      for (var n = 0, r = e.length; r > n; n++) {
        e[n][t]();
      }
    }),
    (t.destroyAll = function() {
      t.invokeAll('destroy');
    }),
    (t.disableAll = function() {
      t.invokeAll('disable');
    }),
    (t.enableAll = function() {
      t.Context.refreshAll();
      for (var e in i) {
        i[e].enabled = !0;
      }
      return this;
    }),
    (t.refreshAll = function() {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function() {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = { context: window, continuous: !0, enabled: !0, group: 'default', horizontal: !1, offset: 0 }),
    (t.offsetAliases = {
      'bottom-in-view': function() {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      'right-in-view': function() {
        return this.context.innerWidth() - this.adapter.outerWidth();
      }
    }),
    (window.Waypoint = t);
})(),
  (function() {
    'use strict';
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = 'waypoint-context-' + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext || ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function(t) {
      var e = t.options.horizontal ? 'horizontal' : 'vertical';
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off('.waypoints'), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function() {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on('resize.waypoints', function() {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function() {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on('scroll.waypoints', function() {
          (!e.didScroll || n.isTouch) && ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function() {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function() {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left'
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up'
            }
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) {
          t[c].flushTriggers();
        }
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints) {
          for (var i in this.waypoints[e]) {
            t.push(this.waypoints[e][i]);
          }
        }
        for (var o = 0, n = t.length; n > o; o++) {
          t[o].destroy();
        }
      }),
      (e.prototype.refresh = function() {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
              offsetProp: 'left'
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
              offsetProp: 'top'
            }
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]),
              'function' == typeof f
                ? (f = f.apply(d))
                : 'string' == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf('%') > -1 && (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function() {
            for (var t in o) {
              o[t].flushTriggers();
            }
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function() {
        for (var t in o) {
          o[t].refresh();
        }
      }),
      (e.findByElement = function(t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function() {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function(e) {
        var i =
          window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function() {
    'use strict';
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + '-' + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function(t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = 'up' === i || 'left' === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function() {
        return this.waypoints[0];
      }),
      (i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function() {
    'use strict';
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      ['innerHeight', 'innerWidth', 'off', 'offset', 'on', 'outerHeight', 'outerWidth', 'scrollLeft', 'scrollTop'],
      function(e, i) {
        t.prototype[i] = function() {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(['extend', 'inArray', 'isEmptyObject'], function(i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: 'jquery', Adapter: t }),
      (i.Adapter = t);
  })(),
  (function() {
    'use strict';
    function t(t) {
      return function() {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) && ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function() {
            var n = t.extend({}, o, { element: this });
            'string' == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();

/*************************************
 Counter Up
 **************************************/
/*!
 *
 * jquery.counterup.js
 * https://github.com/bfintal/Counter-Up
 * v1.0
 *
 */
(function($) {
  'use strict';
  $.fn.counterUp = function(options) {
    var settings = $.extend(
        { time: 400, delay: 10, offset: 100, beginAt: 0, formatter: false, context: 'window', callback: function() {} },
        options
      ),
      s;
    return this.each(function() {
      var $this = $(this),
        counter = {
          time: $(this).data('counterup-time') || settings.time,
          delay: $(this).data('counterup-delay') || settings.delay,
          offset: $(this).data('counterup-offset') || settings.offset,
          beginAt: $(this).data('counterup-beginat') || settings.beginAt,
          context: $(this).data('counterup-context') || settings.context
        };
      var counterUpper = function() {
        var nums = [];
        var divisions = counter.time / counter.delay;
        var num = $(this).attr('data-num') ? $(this).attr('data-num') : $this.text();
        var isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, '');
        var decimalPlaces = (num.split('.')[1] || []).length;
        if (counter.beginAt > num) {
          counter.beginAt = num;
        }
        var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
        if (isTime) {
          var times = num.split(':'),
            m = 1;
          s = 0;
          while (times.length > 0) {
            s += m * parseInt(times.pop(), 10);
            m *= 60;
          }
        }
        for (var i = divisions; i >= (counter.beginAt / num) * divisions; i--) {
          var newNum = parseFloat((num / divisions) * i).toFixed(decimalPlaces);
          if (isTime) {
            newNum = parseInt((s / divisions) * i);
            var hours = parseInt(newNum / 3600) % 24;
            var minutes = parseInt(newNum / 60) % 60;
            var seconds = parseInt(newNum % 60, 10);
            newNum =
              (hours < 10 ? '0' + hours : hours) +
              ':' +
              (minutes < 10 ? '0' + minutes : minutes) +
              ':' +
              (seconds < 10 ? '0' + seconds : seconds);
          }
          if (isComma) {
            while (/(\d+)(\d{3})/.test(newNum.toString())) {
              newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
            }
          }
          if (settings.formatter) {
            newNum = settings.formatter.call(this, newNum);
          }
          nums.unshift(newNum);
        }
        $this.data('counterup-nums', nums);
        $this.text(counter.beginAt);
        var f = function() {
          if (!$this.data('counterup-nums')) {
            settings.callback.call(this);
            return;
          }
          $this.html($this.data('counterup-nums').shift());
          if ($this.data('counterup-nums').length) {
            setTimeout($this.data('counterup-func'), counter.delay);
          } else {
            $this.data('counterup-nums', null);
            $this.data('counterup-func', null);
            settings.callback.call(this);
          }
        };
        $this.data('counterup-func', f);
        setTimeout($this.data('counterup-func'), counter.delay);
      };
      $this.waypoint(
        function(direction) {
          counterUpper();
          this.destroy();
        },
        { offset: counter.offset + '%', context: counter.context }
      );
    });
  };
})(jQuery);

/*************************************
 Easy Pie
 **************************************/
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!(function(a, b) {
  'function' == typeof define && define.amd
    ? define(['jquery'], function(a) {
        return b(a);
      })
    : 'object' == typeof exports
    ? (module.exports = b(require('jquery')))
    : b(jQuery);
})(this, function(a) {
  var b = function(a, b) {
      var c,
        d = document.createElement('canvas');
      a.appendChild(d), 'object' == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
      var e = d.getContext('2d');
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 &&
        ((f = window.devicePixelRatio),
        (d.style.width = d.style.height = [b.size, 'px'].join('')),
        (d.width = d.height = b.size * f),
        e.scale(f, f)),
        e.translate(b.size / 2, b.size / 2),
        e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2),
        (Date.now =
          Date.now ||
          function() {
            return +new Date();
          });
      var h = function(a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), (e.strokeStyle = a), (e.lineWidth = b), e.stroke();
        },
        i = function() {
          var a, c;
          (e.lineWidth = 1), (e.fillStyle = b.scaleColor), e.save();
          for (var d = 24; d > 0; --d) {
            d % 6 === 0 ? ((c = b.scaleLength), (a = 0)) : ((c = 0.6 * b.scaleLength), (a = b.scaleLength - c)),
              e.fillRect(-b.size / 2 + a, 0, c, 1),
              e.rotate(Math.PI / 12);
          }
          e.restore();
        },
        j = (function() {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(a) {
              window.setTimeout(a, 1e3 / 60);
            }
          );
        })(),
        k = function() {
          b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1);
        };
      (this.getCanvas = function() {
        return d;
      }),
        (this.getCtx = function() {
          return e;
        }),
        (this.clear = function() {
          e.clearRect(b.size / -2, b.size / -2, b.size, b.size);
        }),
        (this.draw = function(a) {
          b.scaleColor || b.trackColor
            ? e.getImageData && e.putImageData
              ? c
                ? e.putImageData(c, 0, 0)
                : (k(), (c = e.getImageData(0, 0, b.size * f, b.size * f)))
              : (this.clear(), k())
            : this.clear(),
            (e.lineCap = b.lineCap);
          var d;
          (d = 'function' == typeof b.barColor ? b.barColor(a) : b.barColor), h(d, b.lineWidth, a / 100);
        }.bind(this)),
        (this.animate = function(a, c) {
          var d = Date.now();
          b.onStart(a, c);
          var e = function() {
            var f = Math.min(Date.now() - d, b.animate.duration),
              g = b.easing(this, f, a, c - a, b.animate.duration);
            this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e);
          }.bind(this);
          j(e);
        }.bind(this));
    },
    c = function(a, c) {
      var d = {
        barColor: '#ef1e25',
        trackColor: '#f9f9f9',
        scaleColor: '#dfe0e0',
        scaleLength: 5,
        lineCap: 'round',
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: { duration: 1e3, enabled: !0 },
        easing: function(a, b, c, d, e) {
          return (b /= e / 2), 1 > b ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c;
        },
        onStart: function(a, b) {},
        onStep: function(a, b, c) {},
        onStop: function(a, b) {}
      };
      if ('undefined' != typeof b) {
        d.renderer = b;
      } else {
        if ('undefined' == typeof SVGRenderer) {
          throw new Error('Please load either the SVG- or the CanvasRenderer');
        }
        d.renderer = SVGRenderer;
      }
      var e = {},
        f = 0,
        g = function() {
          (this.el = a), (this.options = e);
          for (var b in d) {
            d.hasOwnProperty(b) &&
              ((e[b] = c && 'undefined' != typeof c[b] ? c[b] : d[b]),
              'function' == typeof e[b] && (e[b] = e[b].bind(this)));
          }
          'string' == typeof e.easing && 'undefined' != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing])
            ? (e.easing = jQuery.easing[e.easing])
            : (e.easing = d.easing),
            'number' == typeof e.animate && (e.animate = { duration: e.animate, enabled: !0 }),
            'boolean' != typeof e.animate || e.animate || (e.animate = { duration: 1e3, enabled: e.animate }),
            (this.renderer = new e.renderer(a, e)),
            this.renderer.draw(f),
            a.dataset && a.dataset.percent
              ? this.update(parseFloat(a.dataset.percent))
              : a.getAttribute &&
                a.getAttribute('data-percent') &&
                this.update(parseFloat(a.getAttribute('data-percent')));
        }.bind(this);
      (this.update = function(a) {
        return (
          (a = parseFloat(a)), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), (f = a), this
        );
      }.bind(this)),
        (this.disableAnimation = function() {
          return (e.animate.enabled = !1), this;
        }),
        (this.enableAnimation = function() {
          return (e.animate.enabled = !0), this;
        }),
        g();
    };
  a.fn.easyPieChart = function(b) {
    return this.each(function() {
      var d;
      a.data(this, 'easyPieChart') ||
        ((d = a.extend({}, b, a(this).data())), a.data(this, 'easyPieChart', new c(this, d)));
    });
  };
});

/*************************************
 Match Height
 **************************************/
/**
 * jquery-match-height master by @liabru
 * http://brm.io/jquery-match-height/
 * License: MIT
 */
(function(t) {
  'use strict';
  'function' == typeof define && define.amd
    ? define(['jquery'], t)
    : 'undefined' != typeof module && module.exports
    ? (module.exports = t(require('jquery')))
    : t(jQuery);
})(function(t) {
  var e = -1,
    o = -1,
    a = function(t) {
      return parseFloat(t) || 0;
    },
    n = function(e) {
      var o = 1,
        n = t(e),
        i = null,
        r = [];
      return (
        n.each(function() {
          var e = t(this),
            n = e.offset().top - a(e.css('margin-top')),
            s = r.length > 0 ? r[r.length - 1] : null;
          null === s ? r.push(e) : Math.floor(Math.abs(i - n)) <= o ? (r[r.length - 1] = s.add(e)) : r.push(e), (i = n);
        }),
        r
      );
    },
    i = function(e) {
      var o = { byRow: !0, property: 'height', target: null, remove: !1 };
      return 'object' == typeof e
        ? t.extend(o, e)
        : ('boolean' == typeof e ? (o.byRow = e) : 'remove' === e && (o.remove = !0), o);
    },
    r = (t.fn.matchHeight = function(e) {
      var o = i(e);
      if (o.remove) {
        var a = this;
        return (
          this.css(o.property, ''),
          t.each(r._groups, function(t, e) {
            e.elements = e.elements.not(a);
          }),
          this
        );
      }
      return this.length <= 1 && !o.target
        ? this
        : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this);
    });
  (r.version = 'master'),
    (r._groups = []),
    (r._throttle = 80),
    (r._maintainScroll = !1),
    (r._beforeUpdate = null),
    (r._afterUpdate = null),
    (r._rows = n),
    (r._parse = a),
    (r._parseOptions = i),
    (r._apply = function(e, o) {
      var s = i(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t('html').outerHeight(!0),
        u = h.parents().filter(':hidden');
      return (
        u.each(function() {
          var e = t(this);
          e.data('style-cache', e.attr('style'));
        }),
        u.css('display', 'block'),
        s.byRow &&
          !s.target &&
          (h.each(function() {
            var e = t(this),
              o = e.css('display');
            'inline-block' !== o && 'flex' !== o && 'inline-flex' !== o && (o = 'block'),
              e.data('style-cache', e.attr('style')),
              e.css({
                display: o,
                'padding-top': '0',
                'padding-bottom': '0',
                'margin-top': '0',
                'margin-bottom': '0',
                'border-top-width': '0',
                'border-bottom-width': '0',
                height: '100px',
                overflow: 'hidden'
              });
          }),
          (l = n(h)),
          h.each(function() {
            var e = t(this);
            e.attr('style', e.data('style-cache') || '');
          })),
        t.each(l, function(e, o) {
          var n = t(o),
            i = 0;
          if (s.target) {
            i = s.target.outerHeight(!1);
          } else {
            if (s.byRow && n.length <= 1) {
              return void n.css(s.property, '');
            }
            n.each(function() {
              var e = t(this),
                o = e.attr('style'),
                a = e.css('display');
              'inline-block' !== a && 'flex' !== a && 'inline-flex' !== a && (a = 'block');
              var n = { display: a };
              (n[s.property] = ''),
                e.css(n),
                e.outerHeight(!1) > i && (i = e.outerHeight(!1)),
                o ? e.attr('style', o) : e.css('display', '');
            });
          }
          n.each(function() {
            var e = t(this),
              o = 0;
            (s.target && e.is(s.target)) ||
              ('border-box' !== e.css('box-sizing') &&
                ((o += a(e.css('border-top-width')) + a(e.css('border-bottom-width'))),
                (o += a(e.css('padding-top')) + a(e.css('padding-bottom')))),
              e.css(s.property, i - o + 'px'));
          });
        }),
        u.each(function() {
          var e = t(this);
          e.attr('style', e.data('style-cache') || null);
        }),
        r._maintainScroll && t(window).scrollTop((c / p) * t('html').outerHeight(!0)),
        this
      );
    }),
    (r._applyDataApi = function() {
      var e = {};
      t('[data-match-height], [data-mh]').each(function() {
        var o = t(this),
          a = o.attr('data-mh') || o.attr('data-match-height');
        a in e ? (e[a] = e[a].add(o)) : (e[a] = o);
      }),
        t.each(e, function() {
          this.matchHeight(!0);
        });
    });
  var s = function(e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups),
      t.each(r._groups, function() {
        r._apply(this.elements, this.options);
      }),
      r._afterUpdate && r._afterUpdate(e, r._groups);
  };
  (r._update = function(a, n) {
    if (n && 'resize' === n.type) {
      var i = t(window).width();
      if (i === e) {
        return;
      }
      e = i;
    }
    a
      ? o === -1 &&
        (o = setTimeout(function() {
          s(n), (o = -1);
        }, r._throttle))
      : s(n);
  }),
    t(r._applyDataApi);
  var h = t.fn.on ? 'on' : 'bind';
  t(window)[h]('load', function(t) {
    r._update(!1, t);
  }),
    t(window)[h]('resize orientationchange', function(t) {
      r._update(!0, t);
    });
});

/*************************************
 Sticky Sidebar
 **************************************/
!(function(i) {
  i.fn.theiaStickySidebar = function(t) {
    function e(t, e) {
      var a = o(t, e);
      a ||
        (console.log('TSS: Body width smaller than options.minWidth. Init is delayed.'),
        i(document).on(
          'scroll.' + t.namespace,
          (function(t, e) {
            return function(a) {
              var n = o(t, e);
              n && i(this).unbind(a);
            };
          })(t, e)
        ),
        i(window).on(
          'resize.' + t.namespace,
          (function(t, e) {
            return function(a) {
              var n = o(t, e);
              n && i(this).unbind(a);
            };
          })(t, e)
        ));
    }
    function o(t, e) {
      return t.initialized === !0 || (!(i('body').width() < t.minWidth) && (a(t, e), !0));
    }
    function a(t, e) {
      t.initialized = !0;
      var o = i('#theia-sticky-sidebar-stylesheet-' + t.namespace);
      0 === o.length &&
        i('head').append(
          i(
            '<style id="theia-sticky-sidebar-stylesheet-' +
              t.namespace +
              '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
          )
        ),
        e.each(function() {
          function e() {
            (a.fixedScrollTop = 0),
              a.sidebar.css({ 'min-height': '1px' }),
              a.stickySidebar.css({ position: 'static', width: '', transform: 'none' });
          }
          function o(t) {
            var e = t.height();
            return (
              t.children().each(function() {
                e = Math.max(e, i(this).height());
              }),
              e
            );
          }
          var a = {};
          if (
            ((a.sidebar = i(this)),
            (a.options = t || {}),
            (a.container = i(a.options.containerSelector)),
            0 == a.container.length && (a.container = a.sidebar.parent()),
            a.sidebar.parents().css('-webkit-transform', 'none'),
            a.sidebar.css({
              position: a.options.defaultPosition,
              overflow: 'visible',
              '-webkit-box-sizing': 'border-box',
              '-moz-box-sizing': 'border-box',
              'box-sizing': 'border-box'
            }),
            (a.stickySidebar = a.sidebar.find('.theiaStickySidebar')),
            0 == a.stickySidebar.length)
          ) {
            var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
            a.sidebar
              .find('script')
              .filter(function(i, t) {
                return 0 === t.type.length || t.type.match(s);
              })
              .remove(),
              (a.stickySidebar = i('<div>')
                .addClass('theiaStickySidebar')
                .append(a.sidebar.children())),
              a.sidebar.append(a.stickySidebar);
          }
          (a.marginBottom = parseInt(a.sidebar.css('margin-bottom'))),
            (a.paddingTop = parseInt(a.sidebar.css('padding-top'))),
            (a.paddingBottom = parseInt(a.sidebar.css('padding-bottom')));
          var r = a.stickySidebar.offset().top,
            d = a.stickySidebar.outerHeight();
          a.stickySidebar.css('padding-top', 1),
            a.stickySidebar.css('padding-bottom', 1),
            (r -= a.stickySidebar.offset().top),
            (d = a.stickySidebar.outerHeight() - d - r),
            0 == r
              ? (a.stickySidebar.css('padding-top', 0), (a.stickySidebarPaddingTop = 0))
              : (a.stickySidebarPaddingTop = 1),
            0 == d
              ? (a.stickySidebar.css('padding-bottom', 0), (a.stickySidebarPaddingBottom = 0))
              : (a.stickySidebarPaddingBottom = 1),
            (a.previousScrollTop = null),
            (a.fixedScrollTop = 0),
            e(),
            (a.onScroll = function(a) {
              if (a.stickySidebar.is(':visible')) {
                if (i('body').width() < a.options.minWidth) {
                  return void e();
                }
                if (a.options.disableOnResponsiveLayouts) {
                  var s = a.sidebar.outerWidth('none' == a.sidebar.css('float'));
                  if (s + 50 > a.container.width()) {
                    return void e();
                  }
                }
                var r = i(document).scrollTop(),
                  d = 'static';
                if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
                  var c,
                    p = a.paddingTop + t.additionalMarginTop,
                    b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                    l = a.sidebar.offset().top,
                    f = a.sidebar.offset().top + o(a.container),
                    h = 0 + t.additionalMarginTop,
                    g = a.stickySidebar.outerHeight() + p + b < i(window).height();
                  c = g
                    ? h + a.stickySidebar.outerHeight()
                    : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
                  var u = l - r + a.paddingTop,
                    S = f - r - a.paddingBottom - a.marginBottom,
                    y = a.stickySidebar.offset().top - r,
                    m = a.previousScrollTop - r;
                  'fixed' == a.stickySidebar.css('position') && 'modern' == a.options.sidebarBehavior && (y += m),
                    'stick-to-top' == a.options.sidebarBehavior && (y = t.additionalMarginTop),
                    'stick-to-bottom' == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()),
                    (y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight())),
                    (y = Math.max(y, u)),
                    (y = Math.min(y, S - a.stickySidebar.outerHeight()));
                  var k = a.container.height() == a.stickySidebar.outerHeight();
                  d =
                    (k || y != h) && (k || y != c - a.stickySidebar.outerHeight())
                      ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop
                        ? 'static'
                        : 'absolute'
                      : 'fixed';
                }
                if ('fixed' == d) {
                  var v = i(document).scrollLeft();
                  a.stickySidebar.css({
                    position: 'fixed',
                    width: n(a.stickySidebar) + 'px',
                    transform: 'translateY(' + y + 'px) translateZ(0px)',
                    left: a.sidebar.offset().left + parseInt(a.sidebar.css('padding-left')) - v + 'px',
                    top: '0px'
                  });
                } else if ('absolute' == d) {
                  var x = {};
                  'absolute' != a.stickySidebar.css('position') &&
                    ((x.position = 'absolute'),
                    (x.transform =
                      'translateY(' +
                      (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) +
                      'px) translateZ(0px)'),
                    (x.top = '0px')),
                    (x.width = n(a.stickySidebar) + 'px'),
                    (x.left = ''),
                    a.stickySidebar.css(x);
                } else {
                  'static' == d && e();
                }
                'static' != d &&
                  1 == a.options.updateSidebarHeight &&
                  a.sidebar.css({
                    'min-height':
                      a.stickySidebar.outerHeight() +
                      a.stickySidebar.offset().top -
                      a.sidebar.offset().top +
                      a.paddingBottom
                  }),
                  (a.previousScrollTop = r);
              }
            }),
            a.onScroll(a),
            i(document).on(
              'scroll.' + a.options.namespace,
              (function(i) {
                return function() {
                  i.onScroll(i);
                };
              })(a)
            ),
            i(window).on(
              'resize.' + a.options.namespace,
              (function(i) {
                return function() {
                  i.stickySidebar.css({ position: 'static' }), i.onScroll(i);
                };
              })(a)
            ),
            'undefined' != typeof ResizeSensor &&
              new ResizeSensor(
                a.stickySidebar[0],
                (function(i) {
                  return function() {
                    i.onScroll(i);
                  };
                })(a)
              );
        });
    }
    function n(i) {
      var t;
      try {
        t = i[0].getBoundingClientRect().width;
      } catch (i) {}
      return 'undefined' == typeof t && (t = i.width()), t;
    }
    var s = {
      containerSelector: '',
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: 'modern',
      defaultPosition: 'relative',
      namespace: 'TSS'
    };
    return (
      (t = i.extend(s, t)),
      (t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0),
      (t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0),
      e(t, this),
      this
    );
  };
})(jQuery);
(function($) {
  $.fn.buttonState = function(action) {
    const loadingText =
      ' <span class="fa fa-spinner fa-pulse fa-fw mr-2" role="status" aria-hidden="true"></span> loading...';

    if (action === 'loading') {
      this.data('original-text', this.html())
        .html(loadingText)
        .prop('disabled', true);
    }
    if (action === 'reset' && this.data('original-text')) {
      this.html(this.data('original-text')).prop('disabled', false);
    }
  };
})(jQuery);

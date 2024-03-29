!function (e) {
	"use strict";
	var t = 800,
	s = e(window);
	document.documentElement.setAttribute("data-useragent", navigator.userAgent);
	var i,
	o,
	a,
	n,
	l,
	r,
	d,
	c,
	u,
	f,
	m,
	h,
	p,
	w;
	e("html").addClass("ss-preload"),
	s.on("load", function () {
		e("#loader").fadeOut("slow", function () {
			e("#preloader").delay(300).fadeOut("slow")
		}),
		e("html").removeClass("ss-preload"),
		e("html").addClass("ss-loaded")
	}),
	e("pre").addClass("prettyprint"),
	e(document).ready(function () {
		prettyPrint()
	}),
	i = e(".page-hero"),
	o = e("header"),
	a = i.outerHeight() - 170,
	s.on("scroll", function () {
		var e = s.scrollTop();
		e > a ? o.addClass("sticky") : o.removeClass("sticky"),
		e > a + 20 ? o.addClass("offset") : o.removeClass("offset"),
		e > a + 150 ? o.addClass("scrolling") : o.removeClass("scrolling")
	}),
	n = e(".header-menu-toggle"),
	l = e(".header-nav-wrap"),
	n.on("click", function (e) {
		e.preventDefault(),
		n.toggleClass("is-clicked"),
		l.slideToggle()
	}),
	n.is(":visible") && l.addClass("mobile"),
	s.on("resize", function () {
		n.is(":visible") ? l.addClass("mobile") : l.removeClass("mobile")
	}),
	l.find("a").on("click", function () {
		l.hasClass("mobile") && (n.toggleClass("is-clicked"), l.slideToggle())
	}),
	(r = e(".masonry")).imagesLoaded(function () {
		r.masonry({
			itemSelector: ".masonry__brick",
			resize: !0
		})
	}),
	d = [],
	c = e(".pswp")[0],
	(u = e(".item-folio")).each(function (t) {
		var s = e(this),
		i = s.find(".thumb-link"),
		o = s.find(".item-folio__title"),
		a = s.find(".item-folio__caption"),
		n = "<h4>" + e.trim(o.html()) + "</h4>",
		l = e.trim(a.html()),
		r = i.attr("href"),
		c = i.data("size").split("x"),
		u = {
			src: r,
			w: c[0],
			h: c[1]
		};
		a.length > 0 && (u.title = e.trim(n + l)),
		d.push(u)
	}),
	u.each(function (t) {
		e(this).on("click", function (e) {
			new PhotoSwipe(c, PhotoSwipeUI_Default, d, {
				index: t,
				showHideOpacity: !0
			}).init()
		})
	}),
	e(".testimonials__slider").slick({
		arrows: !0,
		dots: !1,
		infinite: !0,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: "<div class='slick-prev'><i class='im im-arrow-left' aria-hidden='true'></i></div>",
		nextArrow: "<div class='slick-next'><i class='im im-arrow-right' aria-hidden='true'></i></div>",
		pauseOnFocus: !1,
		autoplaySpeed: 1500,
		responsive: [{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}),
	f = e(".target-section"),
	m = e(".header-nav li a"),
	f.waypoint({
		handler: function (t) {
			var s;
			s = e("section#" + this.element.id),
			"up" === t && (s = s.prevAll(".target-section").first());
			var i = e('.header-nav li a[href="#' + s.attr("id") + '"]');
			m.parent().removeClass("current"),
			i.parent().addClass("current")
		},
		offset: "25%"
	}),
	h = e(".s-stats"),
	p = e(".stats__count"),
	h.waypoint({
		handler: function (t) {
			"down" === t && p.each(function () {
				var t = e(this);
				e({
					Counter: 0
				}).animate({
					Counter: t.text()
				}, {
					duration: 4e3,
					easing: "swing",
					step: function (e) {
						t.text(Math.ceil(e))
					}
				})
			}),
			this.destroy()
		},
		offset: "90%"
	}),
	e(".smoothscroll").on("click", function (s) {
		var i = this.hash,
		o = e(i);
		s.preventDefault(),
		s.stopPropagation(),
		e("html, body").stop().animate({
			scrollTop: o.offset().top
		}, t, "swing", function () {
			window.location.hash = i
		})
	}),
	e("input, textarea, select").placeholder(),
	e(".alert-box").on("click", ".alert-box__close", function () {
		e(this).parent().fadeOut(500)
	}),
	w = e(".go-top"),
	e(window).on("scroll", function () {
		e(window).scrollTop() >= 500 ? w.fadeIn(400) : w.fadeOut(400)
	})
}
(jQuery);
/*jshint strict: false, eqeqeq: false*/

(function () {
    /* jshint ignore:start */
    function q(q) {
        function h(v, b, c) {
            v = v || {};
            p();
            !1 !== b && z();
            /* jshint ignore:end */
            I = k = d = null;
            f = -1;
            J = C = K = L = null;
            D = !1;
            E = null;
            F = !1;
            l = null;
            w(v);
            g();
            R(d.transition_type, !0);
            k.find(".ism-caption").css("visibility", "hidden");
            a();
            ba();
            t(d.play_type);
            ca();
            setTimeout(function () {
                n(c);
            }, 1E3);
            console.log("ISMSlider Ready");
        }

        function p() {
            var a = $("<div id='ism-loading-mask'></div>");
            a.css({
                position: "absolute",
                "z-index": 10,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                "background-color": "#eee"
            });
            $(".ism-slider").append(a);
        }

        function n(a) {
            /* jshint ignore:start */
            !0 !== a &&
                /* jshint ignore:end */
                $("#ism-loading-mask").fadeOut(400, function () {
                    $("#ism-loading-mask").remove();
                    M(0);
                    S(0);
                });
        }

        function w(a) {
            for (var b in G) {
                var c = typeof G[b];
                /* jshint ignore:start */
                0 == a[b] && "object" != c && (c = $(".ism-slider").data(b), void 0 != c && (a[b] = c));
                /* jshint ignore:end */
            }
            d = a || {};
            /* jshint ignore:start */
            for (b in G) void 0 == d[b] && (d[b] = G[b]);
            /* jshint ignore:end */
            d.captions = [];
            a = $(".ism-slider > ol > li").length;
            for (b = 0; b < a; b++)
                for (d.captions[b] = [], c = 0; 3 > c; c++) {
                    var N = {
                            enable: T[c].enable,
                            delay: T[c].delay
                        },
                        e = $(".ism-slider > ol > li:eq(" + b + ") .ism-caption-" + c);
                    e && (N.enable = !0, e = e.data("delay"), isNaN(e) ||
                        (N.delay = parseInt(e)));
                    d.captions[b][c] = N
                }
        }

        function z() {
            r();
            U();
            l && l.unbindEventListeners();
            b();
            $("ol.ism-radios input.ism-radio, ol.ism-radios .ism-radio-label").off("click touchstart", V);
            W();
            $(".ism-button").remove();
            $(".ism-radios").remove();
            $(".ism-cloned").remove();
            for ($(".ism-tmp-clone").remove(); 0 < $(".ism-frame").length;) $(".ism-slider .ism-slides").unwrap();
            0 < $(".ism-slider .ism-img-frame").length && $(".ism-slider .ism-img").unwrap();
            $(".ism-slider .ism-caption").removeAttr("style");
            $(".ism-slider .ism-slide").show();
            $(".ism-slider .ism-slide").removeAttr("style");
            $(".ism-slider .ism-slides").removeAttr("style");
            $(".ism-slider .ism-img").removeClass("ism-img");
            $(".ism-slider .ism-slide").removeClass("ism-slide ism-slide-0 ism-slide-1 ism-slide-2 ism-slide-3 ism-slide-4 ism-slide-5 ism-slide-6 ism-slide-7 ism-slide-8 ism-slide-9");
            $(".ism-slider .ism-slides").removeClass("ism-slides");
            $(".ism-slider").removeClass("active")
        }

        function g() {
            k = $(".ism-slider > ol");
            I = 100 / $(".ism-slider > ol > li").length;
            f = 0;
            k.addClass("ism-slides");
            $(".ism-slides > li").addClass("ism-slide");
            $(".ism-slides > .ism-slide > img, .ism-slides > .ism-slide > a > img").addClass("ism-img");
            k.find("li").each(function (a) {
                $(this).addClass("ism-slide-" + a)
            });
            k.find(".ism-slide:first-child");
            k.find(".ism-slide:last-child");
            $(".ism-slider").wrapInner("<div class='ism-frame'></div>");
            $(".ism-slider .ism-img").wrap("<div class='ism-img-frame'></div>")
        }

        function m() {
            return $(".ism-slider .ism-slide").length
        }

        function t(a) {
            d.play_type = a;
            W();
            $(".ism-slider .ism-pause-button").remove();
            d.pause_button && "manual" != d.play_type && (k.after("<div class='ism-pause-button'>&nbsp;</div>"), J = $(".ism-slider .ism-pause-button"), J.on("click touchstart", X));
            x()
        }

        function x() {
            D = !0;
            $(".ism-pause-button").removeClass("ism-play");
            "manual" != d.play_type && (clearTimeout(E), E = setTimeout(y, d.interval))
        }

        function y() {
            var a = f + 1;
            D && "manual" != d.play_type && ("once" == d.play_type && f == m() - 2 ? (A(a), r()) : "once-rewind" == d.play_type && f == m() - 1 ? (A(0), r()) : ("loop" == d.play_type && f == m() - 1 ? A(0) : A(a), x()))
        }

        function r() {
            D = !1;
            clearTimeout(E);
            E = null;
            $(".ism-pause-button").addClass("ism-play")
        }

        function u(a, b) {
            a != f && (r(), A(a, b))
        }

        function a() {
            d.buttons && (k.after("<div class='ism-button ism-button-prev'>&nbsp;</div><div class='ism-button ism-button-next'>&nbsp;</div>"), L = $(".ism-slider .ism-button-prev"), K = $(".ism-slider .ism-button-next"), L.on("click touchstart", c), K.on("click touchstart", e))
        }

        function b() {
            $(".ism-slider .ism-button-prev").off("click touchstart", c);
            $(".ism-slider .ism-button-next").off("click touchstart", e)
        }

        function c(a) {
            a.preventDefault();
            a.stopPropagation();
            u(f - 1)
        }

        function e(a) {
            a.preventDefault();
            a.stopPropagation();
            u(f + 1)
        }

        function ba() {
            if (d.radios) {
                $(".ism-slider").append("<ol class='ism-radios'></ol>");
                C = $("ol.ism-radios");
                "thumbnail" == d.radio_type && C.addClass("ism-radios-as-thumbnails");
                for (var a = 0; a < m(); a++) 0 == a ? C.append("<li class='ism-radio-" + a + " active'><input type='radio' name='ism-radio' class='ism-radio' id='ism-radio-" + a + "' checked='checked' /><label class='ism-radio-label' for='ism-radio-" + a + "'></label></li>") : C.append("<li class='ism-radio-" +
                    a + "'><input type='radio' name='ism-radio' class='ism-radio' id='ism-radio-" + a + "' /><label class='ism-radio-label' for='ism-radio-" + a + "'></label></li>");
                $("ol.ism-radios input.ism-radio, ol.ism-radios .ism-radio-label").on("click touchstart", V)
            }
        }

        function V(a) {
            a.preventDefault();
            a.stopPropagation();
            a = $(this).parent().index();
            u(a)
        }

        function Y(a) {
            d.radios && ($("ol.ism-radios li").removeClass("active"), $("ol.ism-radios li:eq(" + a + ")").addClass("active"), $("ol.ism-radios li:eq(" + a + ") input").prop("checked",
                "checked"))
        }

        function W() {
            $(".ism-slider .ism-pause-button").off("click touchstart", X)
        }

        function X(a) {
            a.preventDefault();
            a.stopPropagation();
            D ? r() : x()
        }

        function ca() {
            var a = $(".ism-slider").get(0),
                b = k.get(0);
            l = new Dragdealer(a, b, {
                steps: m(),
                x: 0,
                speed: .2,
                loose: !0,
                requestAnimationFrame: !0,
                dragStartCallback: function () {
                    r()
                },
                dragStopCallback: function (a, b) {
                    new_slide_index = l.getStep()[0] - 1;
                    r();
                    var v = new_slide_index,
                        c = f;
                    f = v;
                    O("afterswipe", [v]);
                    Y(v);
                    H(c, v, !1)
                },
                onAfterGlide: function () {
                    l.setStep(f + 1, 1, !0)
                }
            });
            $(window).load(function () {
                setTimeout(function () {
                        l.reflow()
                    },
                    150);
                setTimeout(function () {
                    l.reflow()
                }, 600)
            })
        }

        function Z() {
            l && (l.setStep(f + 1, 1, !0), l.reflow())
        }

        function O(a, b) {
            P[a] && P[a].apply(this, b)
        }

        function R(a, b) {
            if (1 == b || a != d.transition_type) {
                d.transition_type = a;
                $(".ism-slider .ism-slide").removeClass("ism-zoom-in");
                $(".ism-slider .ism-slide").show();
                var c = m();
                k.css("width", 100 * c + "%");
                k.find(".ism-slide").each(function (a) {
                    a = I * a + "%";
                    var b = 100 / c + "%";
                    $(this).css("width", b);
                    $(this).css("left", a)
                })
            }
        }

        function A(a, b) {
            if (!0 !== F && a != f) {
                F = !0;
                var c = f;
                a = parseInt(a);
                0 >
                    a ? a = m() - 1 : a >= m() && (a = 0);
                var e = a;
                Y(e);
                f = e;
                O("beforetransition", [e]);
                "instant" == d.transition_type ? (e = a, l.setStep(e + 1, 1, !0), H(c, e, !0, b)) : "slide" == d.transition_type ? da(c, a, b) : "fade" == d.transition_type ? aa(c, a, !1, b) : "zoom" == d.transition_type && aa(c, a, !0, b)
            }
        }

        function da(a, b, c) {
            var d = b / (m() - 1);
            l.startSlide(d, function () {
                H(a, b, !0, c)
            })
        }

        function aa(a, b, c, e) {
            $(".ism-slider li.ism-slide").removeClass("ism-zoom-in");
            var h = $(".ism-slider li.ism-slide-" + a),
                f = k.clone();
            f.addClass("ism-slides-clone");
            var g = b / (m() - 1),
                g = l.getOffsetsByRatios([g, 0]);
            f.hide();
            f.css("transform", "translateX(" + g[0] + "px)");
            f.insertAfter(k);
            c && h.addClass("ism-zoom-in");
            f.fadeIn(2 * d.transition_duration, function () {
                l.setStep(b + 1, 1, !0);
                $(".ism-slides-clone").remove();
                $(".ism-slides").show();
                H(a, b, !0, e)
            });
            k.fadeOut(1.8 * d.transition_duration, function () {})
        }

        function H(a, b, c, d) {
            b = parseInt(b);
            $(".ism-slides-clone").remove();
            $(".ism-slides").show();
            $(".ism-slider li.ism-slide").removeClass("ism-zoom-in");
            c && Z();
            d && d();
            M(b);
            S(b);
            F = !1;
            O("aftertransition", [b])
        }

        function M(a) {
            U();
            "none" != d.image_fx && ("zoompan" == d.image_fx ? $(".ism-slide-" + a + " .ism-img-frame").addClass("ism-zoom-pan") : "zoomrotate" == d.image_fx && $(".ism-slide-" + a + " .ism-img-frame").addClass("ism-zoom-rotate"))
        }

        function U() {
            $(".ism-slide .ism-img-frame").removeClass("ism-zoom-pan");
            $(".ism-slide .ism-img-frame").removeClass("ism-zoom-rotate")
        }

        function S(a) {
            k.find(".ism-caption").css("visibility", "hidden");
            k.find(".ism-caption").removeClass("ism-caption-anim");
            Q(a, 0);
            Q(a, 1);
            Q(a, 2)
        }

        function Q(a,
            b) {
            1 == d.captions[a][b].enable && setTimeout(function () {
                k.find(".ism-slide-" + a + " .ism-caption-" + b).css("visibility", "visible");
                k.find(".ism-slide-" + a + " .ism-caption-" + b).addClass("ism-caption-anim")
            }, d.captions[a][b].delay)
        }
        var G = {
                transition_type: "slide",
                play_type: "manual",
                interval: 7E3,
                image_fx: "none",
                buttons: !0,
                radios: !0,
                radio_type: "button",
                pause_button: !0,
                transition_duration: 350,
                swipe: !0
            },
            T = [{
                enable: !1,
                delay: 0
            }, {
                enable: !1,
                delay: 200
            }, {
                enable: !1,
                delay: 400
            }],
            d, k, I, f, L, K, C, J, D, E, F, l, P = {};
        h(q, !1, q.prevent_stop_loading ||
            !1);
        this.init = h;
        this.deinit = z;
        this.stopLoading = n;
        this.transition = A;
        this.listen = function (a, b) {
            P[a] = b
        };
        this.reflow = Z;
        this.setTransitionType = R;
        this.setPlayType = t;
        this.setInterval = function (a) {
            d.interval = a
        };
        this.setImageFx = function (a) {
            a != d.image_fx ? (d.image_fx = a, M(f)) : d.image_fx = a
        };
        this.setCaptionEnable = function (a, b, c) {
            d.captions[a][b].enable = c
        };
        this.setCaptionDelay = function (a, b, c) {
            d.captions[a][b].delay = c
        };
        this.enableButtons = function (c) {
            !0 !== c || d.buttons || (b(), $(".ism-button").remove(), a())
        };
        this.enableRadios =
            function (a) {};
        this.setRadioType = function (a) {
            "thumbnail" == a ? $("ol.ism-radios").addClass("ism-radios-as-thumbnails") : $("ol.ism-radios").removeClass("ism-radios-as-thumbnails")
        };
        this.getSlideCount = m;
        this.getActiveSlideIndex = function () {
            return f
        }
    }
    window.ISMSlider = q;
    window.ISMConfig = window.ISMConfig || {};
    $(function () {
        !0 !== window.ISMConfig.no_instantiation && (window.ISMSlider.instance = new q({}))
    })
})();
(function (q, B) {
    "function" === typeof define && define.amd ? define(B) : q.Dragdealer = B()
})(this, function () {
    function q(a) {
        var b = ["Webkit", "Moz", "ms", "O"],
            c = document.documentElement.style;
        if (void 0 !== c[a]) return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        for (var e = 0; e < b.length; e++)
            if (void 0 !== c[b[e] + a]) return b[e] + a
    }
    var B = function (a, b, c) {
        this.options = this.applyDefaults(c || {});
        this.bindMethods();
        this.wrapper = a;
        this.handle = b;
        this.init();
        this.bindEventListeners()
    };
    B.prototype = {
        defaults: {
            disabled: !1,
            horizontal: !0,
            vertical: !1,
            slide: !0,
            steps: 0,
            snap: !1,
            loose: !1,
            speed: .1,
            xPrecision: 0,
            yPrecision: 0,
            activeClass: "active",
            css3: !0,
            tapping: !0,
            afterSwipeCallback: function () {}
        },
        init: function () {
            if (this.options.css3) {
                var a = this.handle;
                t.backfaceVisibility && t.perspective && (a.style[t.perspective] = "1000px", a.style[t.backfaceVisibility] = "hidden")
            }
            this.value = {
                prev: [-1, -1],
                current: [this.options.x || 0, this.options.y || 0],
                target: [this.options.x || 0, this.options.y || 0]
            };
            this.offset = {
                wrapper: [0, 0],
                mouse: [0, 0],
                prev: [-999999, -999999],
                current: [0,
0],
                target: [0, 0]
            };
            this.change = [0, 0];
            this.stepRatios = this.calculateStepRatios();
            this.sliding = this.tapping = this.dragging = this.activity = !1;
            this.slide_count = 0;
            this.reflow();
            this.options.disabled && this.disable()
        },
        applyDefaults: function (a) {
            for (var b in this.defaults) a.hasOwnProperty(b) || (a[b] = this.defaults[b]);
            return a
        },
        calculateStepRatios: function () {
            var a = [];
            if (1 <= this.options.steps)
                for (var b = 0; b <= this.options.steps - 1; b++) a[b] = 1 < this.options.steps ? b / (this.options.steps - 1) : 0;
            return a
        },
        setWrapperOffset: function () {
            this.offset.wrapper =
                m.get(this.wrapper)
        },
        calculateBounds: function () {
            var a = {
                top: this.options.top || 0,
                bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
                left: this.options.left || 0,
                right: -(this.options.right || 0) + this.wrapper.offsetWidth
            };
            a.availWidth = a.right - a.left - this.handle.offsetWidth;
            a.availHeight = a.bottom - a.top - this.handle.offsetHeight;
            return a
        },
        calculateValuePrecision: function () {
            var a = this.options.xPrecision || Math.abs(this.bounds.availWidth),
                b = this.options.yPrecision || Math.abs(this.bounds.availHeight);
            return [a ?
1 / a : 0, b ? 1 / b : 0]
        },
        bindMethods: function () {
            this.requestAnimationFrame = "function" === typeof this.options.customRequestAnimationFrame ? h(this.options.customRequestAnimationFrame, window) : h(y, window);
            this.cancelAnimationFrame = "function" === typeof this.options.customCancelAnimationFrame ? h(this.options.customCancelAnimationFrame, window) : h(r, window);
            this.animateWithRequestAnimationFrame = h(this.animateWithRequestAnimationFrame, this);
            this.animate = h(this.animate, this);
            this.onHandleMouseDown = h(this.onHandleMouseDown,
                this);
            this.onHandleTouchStart = h(this.onHandleTouchStart, this);
            this.onDocumentMouseMove = h(this.onDocumentMouseMove, this);
            this.onWrapperTouchMove = h(this.onWrapperTouchMove, this);
            this.onWrapperMouseDown = h(this.onWrapperMouseDown, this);
            this.onWrapperTouchStart = h(this.onWrapperTouchStart, this);
            this.onDocumentMouseUp = h(this.onDocumentMouseUp, this);
            this.onDocumentTouchEnd = h(this.onDocumentTouchEnd, this);
            this.onHandleClick = h(this.onHandleClick, this);
            this.onWindowResize = h(this.onWindowResize, this)
        },
        bindEventListeners: function () {
            p(this.handle,
                "mousedown", this.onHandleMouseDown);
            p(this.handle, "touchstart", this.onHandleTouchStart);
            p(document, "mousemove", this.onDocumentMouseMove);
            p(this.wrapper, "touchmove", this.onWrapperTouchMove);
            p(this.wrapper, "mousedown", this.onWrapperMouseDown);
            p(this.wrapper, "touchstart", this.onWrapperTouchStart);
            p(document, "mouseup", this.onDocumentMouseUp);
            p(document, "touchend", this.onDocumentTouchEnd);
            p(this.handle, "click", this.onHandleClick);
            p(window, "resize", this.onWindowResize);
            this.animate(!1, !0);
            this.interval =
                this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
        },
        unbindEventListeners: function () {
            n(this.handle, "mousedown", this.onHandleMouseDown);
            n(this.handle, "touchstart", this.onHandleTouchStart);
            n(document, "mousemove", this.onDocumentMouseMove);
            n(this.wrapper, "touchmove", this.onWrapperTouchMove);
            n(this.wrapper, "mousedown", this.onWrapperMouseDown);
            n(this.wrapper, "touchstart", this.onWrapperTouchStart);
            n(document, "mouseup", this.onDocumentMouseUp);
            n(document, "touchend", this.onDocumentTouchEnd);
            n(this.handle,
                "click", this.onHandleClick);
            n(window, "resize", this.onWindowResize);
            this.cancelAnimationFrame(this.interval)
        },
        onHandleMouseDown: function (a) {
            "A" == a.target.tagName && 0 <= a.target.className.search(/ism-caption/) && (document.location = a.target.href);
            g.refresh(a);
            w(a);
            z(a);
            this.activity = !1;
            this.startDrag()
        },
        onHandleTouchStart: function (a) {
            "A" == a.target.tagName && 0 <= a.target.className.search(/ism-caption/) && (document.location = a.target.href);
            g.refresh(a);
            z(a);
            this.activity = !1;
            this.startDrag()
        },
        onDocumentMouseMove: function (a) {
            g.refresh(a);
            this.dragging && (this.activity = !0, w(a))
        },
        onWrapperTouchMove: function (a) {
            g.refresh(a);
            !this.activity && this.draggingOnDisabledAxis() ? this.dragging && this.stopDrag() : (w(a), this.activity = !0)
        },
        onWrapperMouseDown: function (a) {
            0 <= a.target.className.search(/ism-(button|radio|caption)/) || (g.refresh(a), w(a), this.startTap())
        },
        onWrapperTouchStart: function (a) {
            g.refresh(a);
            w(a);
            this.startTap()
        },
        onDocumentMouseUp: function (a) {
            this.stopDrag();
            this.stopTap();
            0 <= a.target.className.search(/ism-(button|radio|caption)/) ||
                this.options.afterSwipeCallback()
        },
        onDocumentTouchEnd: function (a) {
            this.stopDrag();
            this.stopTap();
            this.options.afterSwipeCallback()
        },
        onHandleClick: function (a) {
            0 <= a.target.className.search(/ism-(button|radio)/) || !this.activity || (w(a), z(a))
        },
        onWindowResize: function (a) {
            this.reflow()
        },
        enable: function () {
            this.disabled = !1;
            this.handle.className = this.handle.className.replace(/\s?disabled/g, "")
        },
        disable: function () {
            this.disabled = !0;
            this.handle.className += " disabled"
        },
        reflow: function () {
            this.setWrapperOffset();
            this.bounds = this.calculateBounds();
            this.valuePrecision = this.calculateValuePrecision();
            this.updateOffsetFromValue()
        },
        getStep: function () {
            return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])]
        },
        getValue: function () {
            return this.value.target
        },
        setStep: function (a, b, c) {
            this.setValue(this.options.steps && 1 < a ? (a - 1) / (this.options.steps - 1) : 0, this.options.steps && 1 < b ? (b - 1) / (this.options.steps - 1) : 0, c)
        },
        setValue: function (a, b, c) {
            this.setTargetValue([a, b || 0]);
            c && (this.groupCopy(this.value.current,
                this.value.target), this.updateOffsetFromValue(), this.callAnimationCallback())
        },
        startTap: function () {
            !this.disabled && this.options.tapping && (this.tapping = !0, this.setWrapperOffset(), this.setTargetValueByOffset([g.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, g.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]))
        },
        stopTap: function () {
            !this.disabled && this.tapping && (this.tapping = !1, this.setTargetValue(this.value.current))
        },
        startDrag: function () {
            this.disabled || (this.dragging = !0, this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame),
                this.setWrapperOffset(), this.offset.mouse = [g.x - m.get(this.handle)[0], g.y - m.get(this.handle)[1]], this.wrapper.className.match(this.options.activeClass) || (this.wrapper.className += " " + this.options.activeClass), this.callDragStartCallback())
        },
        stopDrag: function () {
            if (!this.disabled && this.dragging) {
                this.dragging = !1;
                var a = this.groupClone(this.value.current);
                if (this.options.slide) {
                    var b = this.change;
                    a[0] += 4 * b[0];
                    a[1] += 4 * b[1]
                }
                this.setTargetValue(a);
                this.wrapper.className = this.wrapper.className.replace(" " + this.options.activeClass,
                    "");
                this.callDragStopCallback()
            }
        },
        callAnimationCallback: function () {
            var a = this.value.current;
            this.options.snap && 1 < this.options.steps && (a = this.getClosestSteps(a));
            this.groupCompare(a, this.value.prev) || ("function" == typeof this.options.animationCallback && this.options.animationCallback.call(this, a[0], a[1]), this.groupCopy(this.value.prev, a))
        },
        callTargetCallback: function () {
            "function" == typeof this.options.callback && this.options.callback.call(this, this.value.target[0], this.value.target[1])
        },
        callDragStartCallback: function () {
            "function" ==
            typeof this.options.dragStartCallback && this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1])
        },
        callDragStopCallback: function () {
            "function" == typeof this.options.dragStopCallback && this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1])
        },
        startSlide: function (a, b) {
            this.slide_callback = b;
            this.sliding = !0;
            this.value.target[0] = a;
            this.slide_start = this.value.current[0];
            this.step_size = Math.abs(this.value.target[0] - this.value.current[0]);
            this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
        },
        animateWithRequestAnimationFrame: function (a) {
            a ? (this.timeOffset = this.timeStamp ? a - this.timeStamp : 0, this.timeStamp = a) : this.timeOffset = 25;
            this.sliding ? this.animateSlide() : this.animate();
            if (this.sliding || this.dragging || this.value.target[0] != this.value.current[0]) this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);
            else this.options.onAfterGlide()
        },
        animate: function (a, b) {
            if (!a || this.dragging) {
                if (this.dragging) {
                    var c = this.groupClone(this.value.target);
                    this.setTargetValueByOffset([g.x -
this.offset.wrapper[0] - this.offset.mouse[0], g.y - this.offset.wrapper[1] - this.offset.mouse[1]], this.options.loose);
                    this.change = [this.value.target[0] - c[0], this.value.target[1] - c[1]]
                }(this.dragging || b) && this.groupCopy(this.value.current, this.value.target);
                if (this.dragging || this.glide() || b) this.updateOffsetFromValue(), this.callAnimationCallback()
            }
        },
        glide: function () {
            var a = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
            if (!a[0] && !a[1]) return !1;
            Math.abs(a[0]) > this.valuePrecision[0] ||
                Math.abs(a[1]) > this.valuePrecision[1] ? (this.value.current[0] += a[0] * Math.min(this.options.speed * this.timeOffset / 25, 1), this.value.current[1] += a[1] * Math.min(this.options.speed * this.timeOffset / 25, 1)) : this.groupCopy(this.value.current, this.value.target);
            return !0
        },
        animateSlide: function () {
            for (var a = this.value.target[0] - this.value.current[0], b = 0 <= a ? 1 : -1, a = Math.abs(a), c = (this.value.current[0] - this.slide_start) / (this.value.target[0] - this.slide_start), e = c - .5, e = (-3 * e * e + .8) * this.step_size * .08; e > a;) e *= .5;.995 <
                c ? (this.groupCopy(this.value.current, this.value.target), this.sliding = !1, this.slide_callback()) : this.value.current[0] += b * e;
            this.updateOffsetFromValue();
            this.renderHandlePosition();
            isNaN(c)
        },
        updateOffsetFromValue: function () {
            this.offset.current = this.options.snap ? this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.getOffsetsByRatios(this.value.current);
            this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(), this.groupCopy(this.offset.prev, this.offset.current))
        },
        renderHandlePosition: function () {
            var a = "";
            this.options.css3 && t.transform ? (this.options.horizontal && (a += "translateX(" + this.offset.current[0] + "px)"), this.handle.style[t.transform] = a) : this.options.horizontal && (this.handle.style.left = this.offset.current[0] + "px")
        },
        setTargetValue: function (a, b) {
            var c = b ? this.getLooseValue(a) : this.getProperValue(a);
            this.groupCopy(this.value.target, c);
            this.offset.target = this.getOffsetsByRatios(c);
            this.callTargetCallback()
        },
        setTargetValueByOffset: function (a, b) {
            var c = this.getRatiosByOffsets(a),
                c = b ? this.getLooseValue(c) : this.getProperValue(c);
            this.groupCopy(this.value.target, c);
            this.offset.target = this.getOffsetsByRatios(c)
        },
        getLooseValue: function (a) {
            var b = this.getProperValue(a);
            return [b[0] + (a[0] - b[0]) / 4, b[1] + (a[1] - b[1]) / 4]
        },
        getProperValue: function (a) {
            a = this.groupClone(a);
            a[0] = Math.max(a[0], 0);
            a[1] = Math.max(a[1], 0);
            a[0] = Math.min(a[0], 1);
            a[1] = Math.min(a[1], 1);
            (!this.dragging && !this.tapping || this.options.snap) && 1 < this.options.steps && (a = this.getClosestSteps(a));
            return a
        },
        getRatiosByOffsets: function (a) {
            return [this.getRatioByOffset(a[0],
                this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(a[1], this.bounds.availHeight, this.bounds.top)]
        },
        getRatioByOffset: function (a, b, c) {
            return b ? (a - c) / b : 0
        },
        getOffsetsByRatios: function (a) {
            return [this.getOffsetByRatio(a[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(a[1], this.bounds.availHeight, this.bounds.top)]
        },
        getOffsetByRatio: function (a, b, c) {
            return Math.round(a * b) + c
        },
        getStepNumber: function (a) {
            return this.getClosestStep(a) * (this.options.steps - 1) + 1
        },
        getClosestSteps: function (a) {
            return [this.getClosestStep(a[0]),
this.getClosestStep(a[1])]
        },
        getClosestStep: function (a) {
            for (var b = 0, c = 1, e = 0; e <= this.options.steps - 1; e++) Math.abs(this.stepRatios[e] - a) < c && (c = Math.abs(this.stepRatios[e] - a), b = e);
            return this.stepRatios[b]
        },
        groupCompare: function (a, b) {
            return a[0] == b[0] && a[1] == b[1]
        },
        groupCopy: function (a, b) {
            a[0] = b[0];
            a[1] = b[1]
        },
        groupClone: function (a) {
            return [a[0], a[1]]
        },
        draggingOnDisabledAxis: function () {
            return !this.options.horizontal && g.xDiff > g.yDiff || !this.options.vertical && g.yDiff > g.xDiff
        }
    };
    for (var h = function (a, b) {
            return function () {
                return a.apply(b,
                    arguments)
            }
        }, p = function (a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
        }, n = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        }, w = function (a) {
            a || (a = window.event);
            a.preventDefault && a.preventDefault();
            a.returnValue = !1
        }, z = function (a) {
            a || (a = window.event);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = !0
        }, g = {
            x: 0,
            y: 0,
            xDiff: 0,
            yDiff: 0,
            refresh: function (a) {
                a || (a = window.event);
                "mousemove" == a.type ? this.set(a) :
                    a.touches && this.set(a.touches[0])
            },
            set: function (a) {
                var b = this.x,
                    c = this.y;
                if (a.clientX || a.clientY) this.x = a.clientX, this.y = a.clientY;
                else if (a.pageX || a.pageY) this.x = a.pageX - document.body.scrollLeft - document.documentElement.scrollLeft, this.y = a.pageY - document.body.scrollTop - document.documentElement.scrollTop;
                this.xDiff = Math.abs(this.x - b);
                this.yDiff = Math.abs(this.y - c)
            }
        }, m = {
            get: function (a) {
                var b = {
                    left: 0,
                    top: 0
                };
                void 0 !== a.getBoundingClientRect && (b = a.getBoundingClientRect());
                return [b.left, b.top]
            }
        }, t = {
            transform: q("transform"),
            perspective: q("perspective"),
            backfaceVisibility: q("backfaceVisibility")
        }, x = ["webkit", "moz"], y = window.requestAnimationFrame, r = window.cancelAnimationFrame, u = 0; u < x.length && !y; ++u) y = window[x[u] + "RequestAnimationFrame"], r = window[x[u] + "CancelAnimationFrame"] || window[x[u] + "CancelRequestAnimationFrame"];
    y || (y = function (a) {
        return setTimeout(a, 25)
    }, r = clearTimeout);
    return B
});
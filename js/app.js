(() => {
    var __webpack_modules__ = {
        972: function(__unused_webpack_module, exports) {
            !function(e, t) {
                true ? t(exports) : 0;
            }(0, (function(e) {
                "use strict";
                function _defineProperties(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(e, n.key, n);
                    }
                }
                function p() {
                    return "undefined" != typeof window;
                }
                function q() {
                    return P || p() && (P = window.gsap) && P.registerPlugin && P;
                }
                var P, k, R, _, C, H, M, A, F, B, I, U, t = (ScrollSmoother.register = function register(e) {
                    return k || (P = e || q(), p() && window.document && (R = window, _ = document, 
                    C = _.documentElement, H = _.body), P && (M = P.utils.toArray, A = P.utils.clamp, 
                    I = P.parseEase("expo"), F = P.core.globals().ScrollTrigger, P.core.globals("ScrollSmoother", ScrollSmoother), 
                    H && F && (U = F.core._getVelocityProp, k = 1))), k;
                }, function _createClass(e, t, r) {
                    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
                }(ScrollSmoother, [ {
                    key: "progress",
                    get: function get() {
                        return this.scrollTrigger.animation._time / 100;
                    }
                } ]), ScrollSmoother);
                function ScrollSmoother(e) {
                    var o = this;
                    k || ScrollSmoother.register(P) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), 
                    e = this.vars = e || {}, B && B.kill(), B = this;
                    function ja() {
                        return T.update(-g);
                    }
                    function la() {
                        return r.style.overflow = "visible";
                    }
                    function na(e) {
                        var t = e.getTween();
                        t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), u = !1, e.animation.progress(e.progress, !0);
                    }
                    function oa(e, t) {
                        (e !== g && !l || t) && (d && (r.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), 
                        w = e - g, g = e, F.isUpdating || F.update());
                    }
                    function pa(e) {
                        return arguments.length ? (l && (g = -e), x.y = -e, u = !0, h(e), this) : -g;
                    }
                    function ra(e) {
                        v.scrollTop = 0, F.isInViewport(e.target) || e.target === f || o.scrollTo(e.target, !1, "center center"), 
                        f = e.target;
                    }
                    function sa(e) {
                        var r, n, o, i;
                        b.forEach((function(t) {
                            r = t.pins, i = t.markers, e.forEach((function(e) {
                                e.trigger !== t.trigger && e.pinnedContainer !== t.trigger || t === e || (n = e.start, 
                                o = (n - t.start - t.offset) / t.ratio - (n - t.start), r.forEach((function(e) {
                                    return o -= e.distance / t.ratio - e.distance;
                                })), e.setPositions(n + o, e.end + o), e.markerStart && i.push(P.quickSetter([ e.markerStart, e.markerEnd ], "y", "px")), 
                                e.pin && 0 < e.end && (o = e.end - e.start, r.push({
                                    start: e.start,
                                    end: e.end,
                                    distance: o,
                                    trig: e
                                }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)));
                            }));
                        }));
                    }
                    function ta() {
                        la(), requestAnimationFrame(la), b && (b.forEach((function(e) {
                            var t = e.start, r = e.auto ? Math.min(F.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio, n = (r - e.end) / 2;
                            t -= n, r -= n, e.offset = n || 1e-4, e.pins.length = 0, e.setPositions(Math.min(t, r), Math.max(t, r)), 
                            e.vars.onRefresh(e);
                        })), sa(F.sort())), T.reset();
                    }
                    function ua() {
                        return b && b.forEach((function(e) {
                            return e.vars.onRefresh(e);
                        }));
                    }
                    function va() {
                        return b && b.forEach((function(e) {
                            return e.vars.onRefreshInit(e);
                        })), ua;
                    }
                    function wa(t, r, n, o) {
                        return function() {
                            var e = "function" == typeof r ? r(n, o) : r;
                            return e || 0 === e || (e = o.getAttribute("data-" + t) || ("speed" === t ? 1 : 0)), 
                            o.setAttribute("data-" + t, e), "auto" === e ? e : parseFloat(e);
                        };
                    }
                    function xa(r, e, t, n) {
                        function lb() {
                            e = a(), t = f(), o = parseFloat(e) || 1, c = (s = "auto" === e) ? 0 : .5, l && l.kill(), 
                            l = t && P.to(r, {
                                ease: I,
                                overwrite: !1,
                                y: "+=0",
                                duration: t
                            }), i && (i.ratio = o, i.autoSpeed = s);
                        }
                        function mb() {
                            d.y = h + "px", d.renderTransform(1), lb();
                        }
                        function qb(e) {
                            if (s) {
                                mb();
                                var t = function _autoDistance(e, t) {
                                    var r, n, o = e.parentNode || C, i = e.getBoundingClientRect(), a = o.getBoundingClientRect(), s = a.top - i.top, l = a.bottom - i.bottom, c = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - t), u = -c * t;
                                    return 0 < c && (u += -(n = .5 == (r = a.height / (R.innerHeight + a.height)) ? 2 * a.height : 2 * Math.min(a.height, -c * r / (2 * r - 1))) / 2, 
                                    c += n), {
                                        change: c,
                                        offset: u
                                    };
                                }(r, A(0, 1, -e.start / (e.end - e.start)));
                                m = t.change, u = t.offset;
                            } else m = (e.end - e.start) * (1 - o), u = 0;
                            g.forEach((function(e) {
                                return m -= e.distance * (1 - o);
                            })), e.vars.onUpdate(e), l && l.progress(1);
                        }
                        var o, i, s, l, c, u, a = wa("speed", e, n, r), f = wa("lag", t, n, r), h = P.getProperty(r, "y"), d = r._gsap, g = [], p = [], m = 0;
                        return lb(), (1 !== o || s || l) && (qb(i = F.create({
                            trigger: s ? r.parentNode : r,
                            scroller: v,
                            scrub: !0,
                            refreshPriority: -999,
                            onRefreshInit: mb,
                            onRefresh: qb,
                            onKill: function onKill(e) {
                                var t = b.indexOf(e);
                                0 <= t && b.splice(t, 1);
                            },
                            onUpdate: function onUpdate(e) {
                                var t, r, n, o = h + m * (e.progress - c), i = g.length, a = 0;
                                if (e.offset) {
                                    if (i) {
                                        for (r = -x.y, n = e.end; i--; ) {
                                            if ((t = g[i]).trig.isActive || r >= t.start && r <= t.end) return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, 
                                            t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(d.y), -w, !0), S && l.progress(1)));
                                            r > t.end && (a += t.distance), n -= t.distance;
                                        }
                                        o = h + a + m * ((P.utils.clamp(e.start, e.end, r) - e.start - a) / (n - e.start) - c);
                                    }
                                    o = function _round(e) {
                                        return Math.round(1e5 * e) / 1e5 || 0;
                                    }(o + u), p.length && !s && p.forEach((function(e) {
                                        return e(o - a);
                                    })), l ? (l.resetTo("y", o, -w, !0), S && l.progress(1)) : (d.y = o + "px", d.renderTransform(1));
                                }
                            }
                        })), P.core.getCache(i.trigger).stRevert = va, i.startY = h, i.pins = g, i.markers = p, 
                        i.ratio = o, i.autoSpeed = s, r.style.willChange = "transform"), i;
                    }
                    var r, v, t, n, b, i, a, s, l, c, u, f, h = F.getScrollFunc(R), d = 1 === F.isTouch ? !0 === e.smoothTouch ? .8 : parseFloat(e.smoothTouch) || 0 : 0 === e.smooth || !1 === e.smooth ? 0 : parseFloat(e.smooth) || .8, g = 0, w = 0, S = 1, p = e.onUpdate, m = e.onStop, T = U(0), x = {
                        y: 0
                    };
                    function refreshHeight() {
                        return t = r.clientHeight, r.style.overflow = "visible", H.style.height = t + "px", 
                        t - R.innerHeight;
                    }
                    F.addEventListener("refresh", ta), P.delayedCall(.5, (function() {
                        return S = 0;
                    })), this.scrollTop = pa, this.scrollTo = function(e, t, r) {
                        var n = P.utils.clamp(0, F.maxScroll(R), isNaN(e) ? o.offset(e, r) : +e);
                        t ? l ? P.to(o, {
                            duration: d,
                            scrollTop: n,
                            overwrite: "auto",
                            ease: I
                        }) : h(n) : pa(n);
                    }, this.offset = function(e, t) {
                        e = M(e)[0];
                        var r, n = P.getProperty(e, "y"), o = F.create({
                            trigger: e,
                            start: t || "top top"
                        });
                        return b && sa([ o ]), r = o.start, o.kill(!1), P.set(e, {
                            y: n
                        }), r;
                    }, this.content = function(e) {
                        return arguments.length ? (r = M(e || "#smooth-content")[0] || H.children[0], s = r.getAttribute("style") || "", 
                        P.set(r, {
                            overflow: "visible",
                            width: "100%"
                        }), this) : r;
                    }, this.wrapper = function(e) {
                        return arguments.length ? (v = M(e || "#smooth-wrapper")[0] || function _wrap(e) {
                            var t = _.createElement("div");
                            return t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), 
                            t.appendChild(e), t;
                        }(r), a = v.getAttribute("style") || "", refreshHeight(), P.set(v, d ? {
                            overflow: "hidden",
                            position: "fixed",
                            height: "100%",
                            width: "100%",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        } : {
                            overflow: "visible",
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            top: "auto",
                            bottom: "auto",
                            left: "auto",
                            right: "auto"
                        }), this) : v;
                    }, this.effects = function(e, t) {
                        if (b = b || [], !e) return b.slice(0);
                        (e = M(e)).forEach((function(e) {
                            for (var t = b.length; t--; ) b[t].trigger === e && (b[t].kill(), b.splice(t, 1));
                        }));
                        t = t || {};
                        var r, n, o = t.speed, i = t.lag, a = [];
                        for (r = 0; r < e.length; r++) (n = xa(e[r], o, i, r)) && a.push(n);
                        return b.push.apply(b, a), a;
                    }, this.content(e.content), this.wrapper(e.wrapper), this.render = function(e) {
                        return oa(e || 0 === e ? e : g);
                    }, this.getVelocity = function() {
                        return T.getVelocity(-g);
                    }, F.scrollerProxy(v, {
                        scrollTop: pa,
                        scrollHeight: function scrollHeight() {
                            return H.scrollHeight;
                        },
                        fixedMarkers: !1 !== e.fixedMarkers && !!d,
                        content: r,
                        getBoundingClientRect: function getBoundingClientRect() {
                            return {
                                top: 0,
                                left: 0,
                                width: R.innerWidth,
                                height: R.innerHeight
                            };
                        }
                    }), F.defaults({
                        scroller: v
                    });
                    var E = F.getAll().filter((function(e) {
                        return e.scroller === R || e.scroller === v;
                    }));
                    E.forEach((function(e) {
                        return e.revert(!0);
                    })), n = F.create({
                        animation: P.to(x, {
                            y: function y() {
                                return R.innerHeight - t;
                            },
                            ease: "none",
                            data: "ScrollSmoother",
                            duration: 100,
                            onUpdate: function onUpdate() {
                                var e = u;
                                e && (x.y = g, na(n)), oa(x.y, e), ja(), p && !l && p(o);
                            }
                        }),
                        onRefreshInit: function onRefreshInit() {
                            return x.y = 0;
                        },
                        id: "ScrollSmoother",
                        scroller: R,
                        invalidateOnRefresh: !0,
                        start: 0,
                        refreshPriority: -9999,
                        end: refreshHeight,
                        onScrubComplete: function onScrubComplete() {
                            T.reset(), m && m(o);
                        },
                        scrub: d || !0,
                        onRefresh: function onRefresh(e) {
                            na(e), oa(x.y);
                        }
                    }), this.smooth = function(e) {
                        return d = e, arguments.length ? n.scrubDuration(e) : n.getTween() ? n.getTween().duration() : 0;
                    }, n.getTween() && (n.getTween().vars.ease = e.ease || I), this.scrollTrigger = n, 
                    e.effects && this.effects(!0 === e.effects ? "[data-speed], [data-lag]" : e.effects, {}), 
                    E.forEach((function(e) {
                        e.vars.scroller = v, e.init(e.vars, e.animation);
                    })), this.paused = function(e) {
                        return arguments.length ? (!!l !== e && (e ? (n.getTween() && n.getTween().pause(), 
                        h(-g), T.reset(), (c = F.normalizeScroll()) && c.disable(), l = F.observe({
                            preventDefault: !0,
                            type: "wheel,touch,scroll",
                            debounce: !1,
                            onChangeY: function onChangeY() {
                                return pa(-g);
                            }
                        })) : (l.kill(), l = 0, c && c.enable(), n.progress = (-g - n.start) / (n.end - n.start), 
                        na(n))), this) : !!l;
                    }, this.kill = function() {
                        o.paused(!1), na(n), n.kill();
                        for (var e = b ? b.length : 0; e--; ) b[e].kill();
                        F.scrollerProxy(v), F.removeEventListener("refresh", ta), v.style.cssText = a, r.style.cssText = s;
                        var t = F.defaults({});
                        t && t.scroller === v && F.defaults({
                            scroller: R
                        }), o.observer && F.normalizeScroll(!1), clearInterval(i), B = null, R.removeEventListener("focusin", ra);
                    }, e.normalizeScroll && (this.observer = F.normalizeScroll({
                        debounce: !0
                    })), F.config(e), "overscrollBehavior" in R.getComputedStyle(H) && P.set(H, {
                        overscrollBehavior: "none"
                    }), R.addEventListener("focusin", ra), i = setInterval(ja, 250), "loading" === _.readyState || requestAnimationFrame((function() {
                        return F.refresh();
                    }));
                }
                t.version = "3.10.2", t.create = function(e) {
                    return B && e && B.content() === M(e.content)[0] ? B : new t(e);
                }, t.get = function() {
                    return B;
                }, q() && P.registerPlugin(t), e.ScrollSmoother = t, e.default = t;
                if (typeof window === "undefined" || window !== e) Object.defineProperty(e, "__esModule", {
                    value: !0
                }); else delete e.default;
            }));
        },
        368: function(__unused_webpack_module, exports) {
            /*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
            !function(e, t) {
                true ? t(exports) : 0;
            }(0, (function(e) {
                "use strict";
                function _defineProperties(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(e, n.key, n);
                    }
                }
                function r() {
                    return we || "undefined" != typeof window && (we = window.gsap) && we.registerPlugin && we;
                }
                function z(e, t) {
                    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
                }
                function A(e) {
                    return !!~t.indexOf(e);
                }
                function B(e, t, r, n, o) {
                    return e.addEventListener(t, r, {
                        passive: !n,
                        capture: !!o
                    });
                }
                function C(e, t, r, n) {
                    return e.removeEventListener(t, r, !!n);
                }
                function F() {
                    return Be && Be.isPressed || ze.cache++;
                }
                function G(r, n) {
                    function Tc(e) {
                        if (e || 0 === e) {
                            o && (Ce.history.scrollRestoration = "manual");
                            var t = Be && Be.isPressed;
                            e = Tc.v = Math.round(e) || (Be && Be.iOS ? 1 : 0), r(e), Tc.cacheID = ze.cache, 
                            t && i("ss", e);
                        } else (n || ze.cache !== Tc.cacheID || i("ref")) && (Tc.cacheID = ze.cache, Tc.v = r());
                        return Tc.v + Tc.offset;
                    }
                    return Tc.offset = 0, r && Tc;
                }
                function J(e) {
                    return we.utils.toArray(e)[0] || ("string" == typeof e && !1 !== we.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
                }
                function K(t, e) {
                    var r = e.s, n = e.sc;
                    A(t) && (t = Ee.scrollingElement || ke);
                    var o = ze.indexOf(t), i = n === Ke.sc ? 1 : 2;
                    ~o || (o = ze.push(t) - 1), ze[o + i] || t.addEventListener("scroll", F);
                    var a = ze[o + i], s = a || (ze[o + i] = G(z(t, r), !0) || (A(t) ? n : G((function(e) {
                        return arguments.length ? t[r] = e : t[r];
                    }))));
                    return s.target = t, a || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")), 
                    s;
                }
                function L(e, t, o) {
                    function pd(e, t) {
                        var r = Ne();
                        t || n < r - s ? (a = i, i = e, l = s, s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l);
                    }
                    var i = e, a = e, s = Ne(), l = s, n = t || 50, c = Math.max(500, 3 * n);
                    return {
                        update: pd,
                        reset: function reset() {
                            a = i = o ? 0 : i, l = s = 0;
                        },
                        getVelocity: function getVelocity(e) {
                            var t = l, r = a, n = Ne();
                            return !e && 0 !== e || e === i || pd(e), s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3;
                        }
                    };
                }
                function M(e, t) {
                    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
                }
                function N(e) {
                    var t = Math.max.apply(Math, e), r = Math.min.apply(Math, e);
                    return Math.abs(t) >= Math.abs(r) ? t : r;
                }
                function O() {
                    (Ae = we.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
                        var e = Ae.core, r = e.bridge || {}, t = e._scrollers, n = e._proxies;
                        t.push.apply(t, ze), n.push.apply(n, Fe), ze = t, Fe = n, i = function _bridge(e, t) {
                            return r[e](t);
                        };
                    }();
                }
                function P(e) {
                    return (we = e || r()) && "undefined" != typeof document && document.body && (Ce = window, 
                    ke = (Ee = document).documentElement, Me = Ee.body, t = [ Ce, Ee, ke, Me ], we.utils.clamp, 
                    Ie = we.core.context || function() {}, Oe = "onpointerenter" in Me ? "pointer" : "mouse", 
                    Pe = E.isTouch = Ce.matchMedia && Ce.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ce || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, 
                    De = E.eventTypes = ("ontouchstart" in ke ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ke ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), 
                    setTimeout((function() {
                        return o = 0;
                    }), 500), O(), Se = 1), Se;
                }
                var we, Se, Ce, Ee, ke, Me, Pe, Oe, Ae, t, Be, De, Ie, o = 1, Le = [], ze = [], Fe = [], Ne = Date.now, i = function _bridge(e, t) {
                    return t;
                }, n = "scrollLeft", a = "scrollTop", Xe = {
                    s: n,
                    p: "left",
                    p2: "Left",
                    os: "right",
                    os2: "Right",
                    d: "width",
                    d2: "Width",
                    a: "x",
                    sc: G((function(e) {
                        return arguments.length ? Ce.scrollTo(e, Ke.sc()) : Ce.pageXOffset || Ee[n] || ke[n] || Me[n] || 0;
                    }))
                }, Ke = {
                    s: a,
                    p: "top",
                    p2: "Top",
                    os: "bottom",
                    os2: "Bottom",
                    d: "height",
                    d2: "Height",
                    a: "y",
                    op: Xe,
                    sc: G((function(e) {
                        return arguments.length ? Ce.scrollTo(Xe.sc(), e) : Ce.pageYOffset || Ee[a] || ke[a] || Me[a] || 0;
                    }))
                };
                Xe.op = Ke, ze.cache = 0;
                var E = (Observer.prototype.init = function init(e) {
                    Se || P(we) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || O();
                    var o = e.tolerance, a = e.dragMinimum, t = e.type, i = e.target, r = e.lineHeight, n = e.debounce, s = e.preventDefault, l = e.onStop, c = e.onStopDelay, u = e.ignore, f = e.wheelSpeed, p = e.event, d = e.onDragStart, g = e.onDragEnd, h = e.onDrag, v = e.onPress, b = e.onRelease, m = e.onRight, y = e.onLeft, x = e.onUp, w = e.onDown, _ = e.onChangeX, T = e.onChangeY, S = e.onChange, E = e.onToggleX, k = e.onToggleY, D = e.onHover, I = e.onHoverEnd, R = e.onMove, Y = e.ignoreCheck, z = e.isNormalizer, X = e.onGestureStart, W = e.onGestureEnd, H = e.onWheel, U = e.onEnable, j = e.onDisable, q = e.onClick, V = e.scrollSpeed, G = e.capture, Z = e.allowClicks, $ = e.lockAxis, Q = e.onLockAxis;
                    function Qe() {
                        return ye = Ne();
                    }
                    function Re(e, t) {
                        return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || Y && Y(e, t);
                    }
                    function Te() {
                        var e = se.deltaX = N(be), t = se.deltaY = N(me), r = Math.abs(e) >= o, n = Math.abs(t) >= o;
                        S && (r || n) && S(se, e, t, be, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), 
                        _ && _(se), E && se.deltaX < 0 != le < 0 && E(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), 
                        n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), T && T(se), k && se.deltaY < 0 != ce < 0 && k(se), 
                        ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (R && R(se), re && (h(se), 
                        re = !1), ne = !1), ie && !(ie = !1) && Q && Q(se), oe && (H(se), oe = !1), ee = 0;
                    }
                    function Ue(e, t, r) {
                        be[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(Te) : Te();
                    }
                    function Ve(e, t) {
                        $ && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", ie = !0), "y" !== ae && (be[2] += e, 
                        se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(Te) : Te();
                    }
                    function We(e) {
                        if (!Re(e, 1)) {
                            var t = (e = M(e, s)).clientX, r = e.clientY, n = t - se.x, o = r - se.y, i = se.isDragging;
                            se.x = t, se.y = r, (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), 
                            i || (se.isDragging = !0), Ve(n, o), i || d && d(se));
                        }
                    }
                    function Ye(t) {
                        if (!Re(t, 1)) {
                            C(z ? i : ve, De[1], We, !0);
                            var e = !isNaN(se.y - se.startY), r = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)), n = M(t);
                            !r && e && (se._vx.reset(), se._vy.reset(), s && Z && we.delayedCall(.08, (function() {
                                if (300 < Ne() - ye && !t.defaultPrevented) if (t.target.click) t.target.click(); else if (ve.createEvent) {
                                    var e = ve.createEvent("MouseEvents");
                                    e.initMouseEvent("click", !0, !0, Ce, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), 
                                    t.target.dispatchEvent(e);
                                }
                            }))), se.isDragging = se.isGesturing = se.isPressed = !1, l && !z && te.restart(!0), 
                            g && r && g(se), b && b(se, r);
                        }
                    }
                    function Ze(e) {
                        return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && X(e, se.isDragging);
                    }
                    function $e() {
                        return (se.isGesturing = !1) || W(se);
                    }
                    function _e(e) {
                        if (!Re(e)) {
                            var t = ue(), r = fe();
                            Ue((t - pe) * V, (r - de) * V, 1), pe = t, de = r, l && te.restart(!0);
                        }
                    }
                    function af(e) {
                        if (!Re(e)) {
                            e = M(e, s), H && (oe = !0);
                            var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Ce.innerHeight : 1) * f;
                            Ue(e.deltaX * t, e.deltaY * t, 0), l && !z && te.restart(!0);
                        }
                    }
                    function bf(e) {
                        if (!Re(e)) {
                            var t = e.clientX, r = e.clientY, n = t - se.x, o = r - se.y;
                            se.x = t, se.y = r, ne = !0, (n || o) && Ve(n, o);
                        }
                    }
                    function cf(e) {
                        se.event = e, D(se);
                    }
                    function df(e) {
                        se.event = e, I(se);
                    }
                    function ef(e) {
                        return Re(e) || M(e, s) && q(se);
                    }
                    this.target = i = J(i) || ke, this.vars = e, u = u && we.utils.toArray(u), o = o || 1e-9, 
                    a = a || 0, f = f || 1, V = V || 1, t = t || "wheel,touch,pointer", n = !1 !== n, 
                    r = r || parseFloat(Ce.getComputedStyle(Me).lineHeight) || 22;
                    var ee, te, re, ne, oe, ie, ae, se = this, le = 0, ce = 0, ue = K(i, Xe), fe = K(i, Ke), pe = ue(), de = fe(), ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === De[0], he = A(i), ve = i.ownerDocument || Ee, be = [ 0, 0, 0 ], me = [ 0, 0, 0 ], ye = 0, xe = se.onPress = function(e) {
                        Re(e, 1) || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = M(e), le = ce = 0, 
                        se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), 
                        B(z ? i : ve, De[1], We, s, !0), se.deltaX = se.deltaY = 0, v && v(se));
                    };
                    te = se._dc = we.delayedCall(c || .25, (function onStopFunc() {
                        se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
                    })).pause(), se.deltaX = se.deltaY = 0, se._vx = L(0, 50, !0), se._vy = L(0, 50, !0), 
                    se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, 
                    Ie(this), se.enable = function(e) {
                        return se.isEnabled || (B(he ? ve : i, "scroll", F), 0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", _e, s, G), 
                        0 <= t.indexOf("wheel") && B(i, "wheel", af, s, G), (0 <= t.indexOf("touch") && Pe || 0 <= t.indexOf("pointer")) && (B(i, De[0], xe, s, G), 
                        B(ve, De[2], Ye), B(ve, De[3], Ye), Z && B(i, "click", Qe, !1, !0), q && B(i, "click", ef), 
                        X && B(ve, "gesturestart", Ze), W && B(ve, "gestureend", $e), D && B(i, Oe + "enter", cf), 
                        I && B(i, Oe + "leave", df), R && B(i, Oe + "move", bf)), se.isEnabled = !0, e && e.type && xe(e), 
                        U && U(se)), se;
                    }, se.disable = function() {
                        se.isEnabled && (Le.filter((function(e) {
                            return e !== se && A(e.target);
                        })).length || C(he ? ve : i, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), 
                        C(z ? i : ve, De[1], We, !0)), C(he ? ve : i, "scroll", _e, G), C(i, "wheel", af, G), 
                        C(i, De[0], xe, G), C(ve, De[2], Ye), C(ve, De[3], Ye), C(i, "click", Qe, !0), C(i, "click", ef), 
                        C(ve, "gesturestart", Ze), C(ve, "gestureend", $e), C(i, Oe + "enter", cf), C(i, Oe + "leave", df), 
                        C(i, Oe + "move", bf), se.isEnabled = se.isPressed = se.isDragging = !1, j && j(se));
                    }, se.kill = se.revert = function() {
                        se.disable();
                        var e = Le.indexOf(se);
                        0 <= e && Le.splice(e, 1), Be === se && (Be = 0);
                    }, Le.push(se), z && A(i) && (Be = se), se.enable(p);
                }, function _createClass(e, t, r) {
                    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
                }(Observer, [ {
                    key: "velocityX",
                    get: function get() {
                        return this._vx.getVelocity();
                    }
                }, {
                    key: "velocityY",
                    get: function get() {
                        return this._vy.getVelocity();
                    }
                } ]), Observer);
                function Observer(e) {
                    this.init(e);
                }
                E.version = "3.11.4", E.create = function(e) {
                    return new E(e);
                }, E.register = P, E.getAll = function() {
                    return Le.slice();
                }, E.getById = function(t) {
                    return Le.filter((function(e) {
                        return e.vars.id === t;
                    }))[0];
                }, r() && we.registerPlugin(E);
                function ya() {
                    return ot = 1;
                }
                function za() {
                    return ot = 0;
                }
                function Aa(e) {
                    return e;
                }
                function Ba(e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                }
                function Ca() {
                    return "undefined" != typeof window;
                }
                function Da() {
                    return He || Ca() && (He = window.gsap) && He.registerPlugin && He;
                }
                function Ea(e) {
                    return !!~l.indexOf(e);
                }
                function Fa(e) {
                    return z(e, "getBoundingClientRect") || (Ea(e) ? function() {
                        return Yt.width = Je.innerWidth, Yt.height = Je.innerHeight, Yt;
                    } : function() {
                        return Mt(e);
                    });
                }
                function Ia(e, t) {
                    var r = t.s, n = t.d2, o = t.d, i = t.a;
                    return (r = "scroll" + n) && (i = z(e, r)) ? i() - Fa(e)()[o] : Ea(e) ? (qe[r] || Ge[r]) - (Je["inner" + n] || qe["client" + n] || Ge["client" + n]) : e[r] - e["offset" + n];
                }
                function Ja(e, t) {
                    for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2]);
                }
                function Ka(e) {
                    return "string" == typeof e;
                }
                function La(e) {
                    return "function" == typeof e;
                }
                function Ma(e) {
                    return "number" == typeof e;
                }
                function Na(e) {
                    return "object" == typeof e;
                }
                function Oa(e, t, r) {
                    return e && e.progress(t ? 0 : 1) && r && e.pause();
                }
                function Pa(e, t) {
                    if (e.enabled) {
                        var r = t(e);
                        r && r.totalTime && (e.callbackAnimation = r);
                    }
                }
                function eb(e) {
                    return Je.getComputedStyle(e);
                }
                function gb(e, t) {
                    for (var r in t) r in e || (e[r] = t[r]);
                    return e;
                }
                function ib(e, t) {
                    var r = t.d2;
                    return e["offset" + r] || e["client" + r] || 0;
                }
                function jb(e) {
                    var t, r = [], n = e.labels, o = e.duration();
                    for (t in n) r.push(n[t] / o);
                    return r;
                }
                function lb(o) {
                    var i = He.utils.snap(o), a = Array.isArray(o) && o.slice(0).sort((function(e, t) {
                        return e - t;
                    }));
                    return a ? function(e, t, r) {
                        var n;
                        if (void 0 === r && (r = .001), !t) return i(e);
                        if (0 < t) {
                            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
                            return a[n - 1];
                        }
                        for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
                        return a[0];
                    } : function(e, t, r) {
                        void 0 === r && (r = .001);
                        var n = i(e);
                        return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o);
                    };
                }
                function nb(t, r, e, n) {
                    return e.split(",").forEach((function(e) {
                        return t(r, e, n);
                    }));
                }
                function ob(e, t, r, n, o) {
                    return e.addEventListener(t, r, {
                        passive: !n,
                        capture: !!o
                    });
                }
                function pb(e, t, r, n) {
                    return e.removeEventListener(t, r, !!n);
                }
                function qb(e, t, r) {
                    return r && r.wheelHandler && e(t, "wheel", r);
                }
                function ub(e, t) {
                    if (Ka(e)) {
                        var r = e.indexOf("="), n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                        ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in I ? I[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
                    }
                    return e;
                }
                function vb(e, t, r, n, o, i, a, s) {
                    var l = o.startColor, c = o.endColor, u = o.fontSize, f = o.indent, p = o.fontWeight, d = je.createElement("div"), g = Ea(r) || "fixed" === z(r, "pinType"), h = -1 !== e.indexOf("scroller"), v = g ? Ge : r, b = -1 !== e.indexOf("start"), m = b ? l : c, y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === Ke ? T : S) + ":" + (i + parseFloat(f)) + "px;"), 
                    a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), 
                    d._isStart = b, d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), 
                    d.style.cssText = y, d.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d), 
                    d._offset = d["offset" + n.op.d2], R(d, 0, n, b), d;
                }
                function Ab() {
                    return 34 < gt() - ht && (w = w || requestAnimationFrame(j));
                }
                function Bb() {
                    v && v.isPressed && !(v.startX > Ge.clientWidth) || (ze.cache++, v ? w = w || requestAnimationFrame(j) : j(), 
                    ht || W("scrollStart"), ht = gt());
                }
                function Cb() {
                    y = Je.innerWidth, m = Je.innerHeight;
                }
                function Db() {
                    ze.cache++, nt || h || je.fullscreenElement || je.webkitFullscreenElement || b && y === Je.innerWidth && !(Math.abs(Je.innerHeight - m) > .25 * Je.innerHeight) || c.restart(!0);
                }
                function Gb() {
                    return pb(Q, "scrollEnd", Gb) || It(!0);
                }
                function Jb(e) {
                    for (var t = 0; t < H.length; t += 5) (!e || H[t + 4] && H[t + 4].query === e) && (H[t].style.cssText = H[t + 1], 
                    H[t].getBBox && H[t].setAttribute("transform", H[t + 2] || ""), H[t + 3].uncache = 1);
                }
                function Kb(e, t) {
                    var r;
                    for (it = 0; it < At.length; it++) !(r = At[it]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
                    t && Jb(t), t || W("revert");
                }
                function Lb(e, t) {
                    ze.cache++, !t && ut || ze.forEach((function(e) {
                        return La(e) && e.cacheID++ && (e.rec = 0);
                    })), Ka(e) && (Je.history.scrollRestoration = x = e);
                }
                function Yb(e, t, r, n) {
                    if (!e._gsap.swappedIn) {
                        for (var o, i = q.length, a = t.style, s = e.style; i--; ) a[o = q[i]] = r[o];
                        a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), 
                        s[S] = s[T] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", 
                        a.boxSizing = "border-box", a[mt] = ib(e, Xe) + kt, a[yt] = ib(e, Ke) + kt, a[St] = s[Ct] = s.top = s.left = "0", 
                        Rt(n), s[mt] = s.maxWidth = r[mt], s[yt] = s.maxHeight = r[yt], s[St] = r[St], e.parentNode !== t && (e.parentNode.insertBefore(t, e), 
                        t.appendChild(e)), e._gsap.swappedIn = !0;
                    }
                }
                function _b(e) {
                    for (var t = V.length, r = e.style, n = [], o = 0; o < t; o++) n.push(V[o], r[V[o]]);
                    return n.t = e, n;
                }
                function cc(e, t, r, n, o, i, a, s, l, c, u, f, p) {
                    La(e) && (e = e(s)), Ka(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? ub("0" + e.substr(3), r) : 0));
                    var d, g, h, v = p ? p.time() : 0;
                    if (p && p.seek(0), Ma(e)) a && R(a, r, n, !0); else {
                        La(t) && (t = t(s));
                        var b, m, y, x, w = (e || "0").split(" ");
                        h = J(t) || Ge, (b = Mt(h) || {}) && (b.left || b.top) || "none" !== eb(h).display || (x = h.style.display, 
                        h.style.display = "block", b = Mt(h), x ? h.style.display = x : h.style.removeProperty("display")), 
                        m = ub(w[0], b[n.d]), y = ub(w[1] || "0", r), e = b[n.p] - l[n.p] - c + m + o - y, 
                        a && R(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y;
                    }
                    if (i) {
                        var _ = e + r, T = i._isStart;
                        d = "scroll" + n.d2, R(i, _, n, T && 20 < _ || !T && (u ? Math.max(Ge[d], qe[d]) : i.parentNode[d]) <= _ + 1), 
                        u && (l = Mt(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + kt));
                    }
                    return p && h && (d = Mt(h), p.seek(f), g = Mt(h), p._caScrollDist = d[n.p] - g[n.p], 
                    e = e / p._caScrollDist * f), p && p.seek(v), p ? e : Math.round(e);
                }
                function ec(e, t, r, n) {
                    if (e.parentNode !== t) {
                        var o, i, a = e.style;
                        if (t === Ge) {
                            for (o in e._stOrig = a.cssText, i = eb(e)) +o || $.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                            a.top = r, a.left = n;
                        } else a.cssText = e._stOrig;
                        He.core.getCache(e).uncache = 1, t.appendChild(e);
                    }
                }
                function fc(l, e) {
                    function Uj(e, t, r, n, o) {
                        var i = Uj.tween, a = t.onComplete, s = {};
                        return r = r || f(), o = n && o || 0, n = n || e - r, i && i.kill(), c = Math.round(r), 
                        t[p] = e, (t.modifiers = s)[p] = function(e) {
                            return (e = Math.round(f())) !== c && e !== u && 3 < Math.abs(e - c) && 3 < Math.abs(e - u) ? (i.kill(), 
                            Uj.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, u = c, c = Math.round(e);
                        }, t.onUpdate = function() {
                            ze.cache++, j();
                        }, t.onComplete = function() {
                            Uj.tween = 0, a && a.call(i);
                        }, i = Uj.tween = He.to(l, t);
                    }
                    var c, u, f = K(l, e), p = "_scroll" + e.p2;
                    return (l[p] = f).wheelHandler = function() {
                        return Uj.tween && Uj.tween.kill() && (Uj.tween = 0);
                    }, ob(l, "wheel", f.wheelHandler), Uj;
                }
                var He, s, Je, je, qe, Ge, l, c, et, tt, rt, u, nt, ot, f, it, p, d, g, at, st, h, v, b, m, y, k, lt, x, ct, w, ut, ft, pt, dt = 1, gt = Date.now, _ = gt(), ht = 0, vt = 0, bt = Math.abs, T = "right", S = "bottom", mt = "width", yt = "height", xt = "Right", wt = "Left", _t = "Top", Tt = "Bottom", St = "padding", Ct = "margin", Et = "Width", D = "Height", kt = "px", Mt = function _getBounds(e, t) {
                    var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== eb(e)[f] && He.to(e, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0
                    }).progress(1), n = e.getBoundingClientRect();
                    return r && r.progress(0).kill(), n;
                }, Pt = {
                    startColor: "green",
                    endColor: "red",
                    indent: 0,
                    fontSize: "16px",
                    fontWeight: "normal"
                }, Ot = {
                    toggleActions: "play",
                    anticipatePin: 0
                }, I = {
                    top: 0,
                    left: 0,
                    center: .5,
                    bottom: 1,
                    right: 1
                }, R = function _positionMarker(e, t, r, n) {
                    var o = {
                        display: "block"
                    }, i = r[n ? "os2" : "p2"], a = r[n ? "p2" : "os2"];
                    e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + Et] = 1, 
                    o["border" + a + Et] = 0, o[r.p] = t + "px", He.set(e, o);
                }, At = [], Bt = {}, Y = {}, X = [], W = function _dispatch(e) {
                    return Y[e] && Y[e].map((function(e) {
                        return e();
                    })) || X;
                }, H = [], Dt = 0, It = function _refreshAll(e, t) {
                    if (!ht || e) {
                        ut = Q.isRefreshing = !0, ze.forEach((function(e) {
                            return La(e) && e.cacheID++ && (e.rec = e());
                        }));
                        var r = W("refreshInit");
                        at && Q.sort(), t || Kb(), ze.forEach((function(e) {
                            La(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
                        })), At.slice(0).forEach((function(e) {
                            return e.refresh();
                        })), At.forEach((function(e, t) {
                            if (e._subPinOffset && e.pin) {
                                var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight", n = e.pin[r];
                                e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.revert(!1, 1);
                            }
                        })), At.forEach((function(e) {
                            return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ia(e.scroller, e._dir)));
                        })), r.forEach((function(e) {
                            return e && e.render && e.render(-1);
                        })), ze.forEach((function(e) {
                            La(e) && (e.smooth && requestAnimationFrame((function() {
                                return e.target.style.scrollBehavior = "smooth";
                            })), e.rec && e(e.rec));
                        })), Lb(x, 1), c.pause(), Dt++, j(2), At.forEach((function(e) {
                            return La(e.vars.onRefresh) && e.vars.onRefresh(e);
                        })), ut = Q.isRefreshing = !1, W("refresh");
                    } else ob(Q, "scrollEnd", Gb);
                }, U = 0, Lt = 1, j = function _updateAll(e) {
                    if (!ut || 2 === e) {
                        Q.isUpdating = !0, pt && pt.update(0);
                        var t = At.length, r = gt(), n = 50 <= r - _, o = t && At[0].scroll();
                        if (Lt = o < U ? -1 : 1, U = o, n && (ht && !ot && 200 < r - ht && (ht = 0, W("scrollEnd")), 
                        rt = _, _ = r), Lt < 0) {
                            for (it = t; 0 < it--; ) At[it] && At[it].update(0, n);
                            Lt = 1;
                        } else for (it = 0; it < t; it++) At[it] && At[it].update(0, n);
                        Q.isUpdating = !1;
                    }
                    w = 0;
                }, q = [ "left", "top", S, T, Ct + Tt, Ct + xt, Ct + _t, Ct + wt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order" ], V = q.concat([ mt, yt, "boxSizing", "max" + Et, "max" + D, "position", Ct, St, St + _t, St + xt, St + Tt, St + wt ]), Z = /([A-Z])/g, Rt = function _setState(e) {
                    if (e) {
                        var t, r, n = e.t.style, o = e.length, i = 0;
                        for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2) r = e[i + 1], 
                        t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Z, "-$1").toLowerCase());
                    }
                }, Yt = {
                    left: 0,
                    top: 0
                }, $ = /(webkit|moz|length|cssText|inset)/i, Q = (ScrollTrigger.prototype.init = function init(S, C) {
                    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), vt) {
                        var E, n, d, k, M, P, O, A, B, D, I, e, L, R, Y, F, N, t, X, b, W, H, m, U, y, j, x, r, w, _, q, o, g, V, G, Z, $, T, i, Q = (S = gb(Ka(S) || Ma(S) || S.nodeType ? {
                            trigger: S
                        } : S, Ot)).onUpdate, ee = S.toggleClass, a = S.id, te = S.onToggle, re = S.onRefresh, ne = S.scrub, oe = S.trigger, ie = S.pin, ae = S.pinSpacing, se = S.invalidateOnRefresh, le = S.anticipatePin, s = S.onScrubComplete, h = S.onSnapComplete, ce = S.once, ue = S.snap, fe = S.pinReparent, l = S.pinSpacer, pe = S.containerAnimation, de = S.fastScrollEnd, ge = S.preventOverlaps, he = S.horizontal || S.containerAnimation && !1 !== S.horizontal ? Xe : Ke, ve = !ne && 0 !== ne, be = J(S.scroller || Je), c = He.core.getCache(be), me = Ea(be), ye = "fixed" === ("pinType" in S ? S.pinType : z(be, "pinType") || me && "fixed"), xe = [ S.onEnter, S.onLeave, S.onEnterBack, S.onLeaveBack ], we = ve && S.toggleActions.split(" "), u = "markers" in S ? S.markers : Ot.markers, _e = me ? 0 : parseFloat(eb(be)["border" + he.p2 + Et]) || 0, Te = this, Se = S.onRefreshInit && function() {
                            return S.onRefreshInit(Te);
                        }, Ce = function _getSizeFunc(e, t, r) {
                            var n = r.d, o = r.d2, i = r.a;
                            return (i = z(e, "getBoundingClientRect")) ? function() {
                                return i()[n];
                            } : function() {
                                return (t ? Je["inner" + o] : e["client" + o]) || 0;
                            };
                        }(be, me, he), Ee = function _getOffsetsFunc(e, t) {
                            return !t || ~Fe.indexOf(e) ? Fa(e) : function() {
                                return Yt;
                            };
                        }(be, me), ke = 0, Me = 0, Pe = K(be, he);
                        if (lt(Te), Te._dir = he, le *= 45, Te.scroller = be, Te.scroll = pe ? pe.time.bind(pe) : Pe, 
                        k = Pe(), Te.vars = S, C = C || S.animation, "refreshPriority" in S && (at = 1, 
                        -9999 === S.refreshPriority && (pt = Te)), c.tweenScroll = c.tweenScroll || {
                            top: fc(be, Ke),
                            left: fc(be, Xe)
                        }, Te.tweenTo = E = c.tweenScroll[he.p], Te.scrubDuration = function(e) {
                            (o = Ma(e) && e) ? q ? q.duration(e) : q = He.to(C, {
                                ease: "expo",
                                totalProgress: "+=0.001",
                                duration: o,
                                paused: !0,
                                onComplete: function onComplete() {
                                    return s && s(Te);
                                }
                            }) : (q && q.progress(1).kill(), q = 0);
                        }, C && (C.vars.lazy = !1, C._initted || !1 !== C.vars.immediateRender && !1 !== S.immediateRender && C.duration() && C.render(0, !0, !0), 
                        Te.animation = C.pause(), (C.scrollTrigger = Te).scrubDuration(ne), w = 0, a = a || C.vars.id), 
                        At.push(Te), ue && (Na(ue) && !ue.push || (ue = {
                            snapTo: ue
                        }), "scrollBehavior" in Ge.style && He.set(me ? [ Ge, qe ] : be, {
                            scrollBehavior: "auto"
                        }), ze.forEach((function(e) {
                            return La(e) && e.target === (me ? je.scrollingElement || qe : be) && (e.smooth = !1);
                        })), d = La(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                            return function(e) {
                                return He.utils.snap(jb(t), e);
                            };
                        }(C) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                            return function(e, t) {
                                return lb(jb(r))(e, t.direction);
                            };
                        }(C) : !1 !== ue.directional ? function(e, t) {
                            return lb(ue.snapTo)(e, gt() - Me < 500 ? 0 : t.direction);
                        } : He.utils.snap(ue.snapTo), g = ue.duration || {
                            min: .1,
                            max: 2
                        }, g = Na(g) ? tt(g.min, g.max) : tt(g, g), V = He.delayedCall(ue.delay || o / 2 || .1, (function() {
                            var e = Pe(), t = gt() - Me < 500, r = E.tween;
                            if (!(t || Math.abs(Te.getVelocity()) < 10) || r || ot || ke === e) Te.isActive && ke !== e && V.restart(!0); else {
                                var n = (e - P) / L, o = C && !ve ? C.totalProgress() : n, i = t ? 0 : (o - _) / (gt() - rt) * 1e3 || 0, a = He.utils.clamp(-n, 1 - n, bt(i / 2) * i / .185), s = n + (!1 === ue.inertia ? 0 : a), l = tt(0, 1, d(s, Te)), c = Math.round(P + l * L), u = ue.onStart, f = ue.onInterrupt, p = ue.onComplete;
                                if (e <= O && P <= e && c !== e) {
                                    if (r && !r._initted && r.data <= bt(c - e)) return;
                                    !1 === ue.inertia && (a = l - n), E(c, {
                                        duration: g(bt(.185 * Math.max(bt(s - o), bt(l - o)) / i / .05 || 0)),
                                        ease: ue.ease || "power3",
                                        data: bt(c - e),
                                        onInterrupt: function onInterrupt() {
                                            return V.restart(!0) && f && f(Te);
                                        },
                                        onComplete: function onComplete() {
                                            Te.update(), ke = Pe(), w = _ = C && !ve ? C.totalProgress() : Te.progress, h && h(Te), 
                                            p && p(Te);
                                        }
                                    }, e, a * L, c - e - a * L), u && u(Te, E.tween);
                                }
                            }
                        })).pause()), a && (Bt[a] = Te), i = (i = (oe = Te.trigger = J(oe || ie)) && oe._gsap && oe._gsap.stRevert) && i(Te), 
                        ie = !0 === ie ? oe : J(ie), Ka(ee) && (ee = {
                            targets: oe,
                            className: ee
                        }), ie && (!1 === ae || ae === Ct || (ae = !(!ae && ie.parentNode && ie.parentNode.style && "flex" === eb(ie.parentNode).display) && St), 
                        Te.pin = ie, (n = He.core.getCache(ie)).spacer ? R = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), 
                        n.spacerIsNative = !!l, l && (n.spacerState = _b(l))), n.spacer = N = l || je.createElement("div"), 
                        N.classList.add("pin-spacer"), a && N.classList.add("pin-spacer-" + a), n.pinState = R = _b(ie)), 
                        !1 !== S.force3D && He.set(ie, {
                            force3D: !0
                        }), Te.spacer = N = n.spacer, r = eb(ie), m = r[ae + he.os2], X = He.getProperty(ie), 
                        b = He.quickSetter(ie, he.a, kt), Yb(ie, N, r), F = _b(ie)), u) {
                            e = Na(u) ? gb(u, Pt) : Pt, D = vb("scroller-start", a, be, he, e, 0), I = vb("scroller-end", a, be, he, e, 0, D), 
                            t = D["offset" + he.op.d2];
                            var f = J(z(be, "content") || be);
                            A = this.markerStart = vb("start", a, f, he, e, t, 0, pe), B = this.markerEnd = vb("end", a, f, he, e, t, 0, pe), 
                            pe && (T = He.quickSetter([ A, B ], he.a, kt)), ye || Fe.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                                var t = eb(e).position;
                                e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
                            }(me ? Ge : be), He.set([ D, I ], {
                                force3D: !0
                            }), y = He.quickSetter(D, he.a, kt), x = He.quickSetter(I, he.a, kt));
                        }
                        if (pe) {
                            var p = pe.vars.onUpdate, v = pe.vars.onUpdateParams;
                            pe.eventCallback("onUpdate", (function() {
                                Te.update(0, 0, 1), p && p.apply(v || []);
                            }));
                        }
                        Te.previous = function() {
                            return At[At.indexOf(Te) - 1];
                        }, Te.next = function() {
                            return At[At.indexOf(Te) + 1];
                        }, Te.revert = function(e, t) {
                            if (!t) return Te.kill(!0);
                            var r = !1 !== e || !Te.enabled, n = nt;
                            r !== Te.isReverted && (r && (Z = Math.max(Pe(), Te.scroll.rec || 0), G = Te.progress, 
                            $ = C && C.progress()), A && [ A, B, D, I ].forEach((function(e) {
                                return e.style.display = r ? "none" : "block";
                            })), r && (nt = 1, Te.update(r)), !ie || fe && Te.isActive || (r ? function _swapPinOut(e, t, r) {
                                Rt(r);
                                var n = e._gsap;
                                if (n.spacerIsNative) Rt(n.spacerState); else if (e._gsap.swappedIn) {
                                    var o = t.parentNode;
                                    o && (o.insertBefore(e, t), o.removeChild(t));
                                }
                                e._gsap.swappedIn = !1;
                            }(ie, N, R) : Yb(ie, N, eb(ie), U)), r || Te.update(r), nt = n, Te.isReverted = r);
                        }, Te.refresh = function(e, t) {
                            if (!nt && Te.enabled || t) if (ie && e && ht) ob(ScrollTrigger, "scrollEnd", Gb); else {
                                !ut && Se && Se(Te), nt = 1, Me = gt(), E.tween && (E.tween.kill(), E.tween = 0), 
                                q && q.pause(), se && C && C.revert({
                                    kill: !1
                                }).invalidate(), Te.isReverted || Te.revert(!0, !0), Te._subPinOffset = !1;
                                for (var r, n, o, i, a, s, l, c, u, f, p, d = Ce(), g = Ee(), h = pe ? pe.duration() : Ia(be, he), v = 0, b = 0, m = S.end, y = S.endTrigger || oe, x = S.start || (0 !== S.start && oe ? ie ? "0 0" : "0 100%" : 0), w = Te.pinnedContainer = S.pinnedContainer && J(S.pinnedContainer), _ = oe && Math.max(0, At.indexOf(Te)) || 0, T = _; T--; ) (s = At[T]).end || s.refresh(0, 1) || (nt = 1), 
                                !(l = s.pin) || l !== oe && l !== ie || s.isReverted || ((f = f || []).unshift(s), 
                                s.revert(!0, !0)), s !== At[T] && (_--, T--);
                                for (La(x) && (x = x(Te)), P = cc(x, oe, d, he, Pe(), A, D, Te, g, _e, ye, h, pe) || (ie ? -.001 : 0), 
                                La(m) && (m = m(Te)), Ka(m) && !m.indexOf("+=") && (~m.indexOf(" ") ? m = (Ka(x) ? x.split(" ")[0] : "") + m : (v = ub(m.substr(2), d), 
                                m = Ka(x) ? x : P + v, y = oe)), O = Math.max(P, cc(m || (y ? "100% 0" : h), y, d, he, Pe() + v, B, I, Te, g, _e, ye, h, pe)) || -.001, 
                                L = O - P || (P -= .01) && .001, v = 0, T = _; T--; ) (l = (s = At[T]).pin) && s.start - s._pinPush <= P && !pe && 0 < s.end && (r = s.end - s.start, 
                                (l === oe && s.start - s._pinPush < P || l === w) && !Ma(x) && (v += r * (1 - s.progress)), 
                                l === ie && (b += r));
                                if (P += v, O += v, Te._pinPush = b, A && v && ((r = {})[he.a] = "+=" + v, w && (r[he.p] = "-=" + Pe()), 
                                He.set([ A, B ], r)), ie) r = eb(ie), i = he === Ke, o = Pe(), W = parseFloat(X(he.a)) + b, 
                                !h && 1 < O && ((p = {
                                    style: p = (me ? je.scrollingElement || qe : be).style,
                                    value: p["overflow" + he.a.toUpperCase()]
                                })["overflow" + he.a.toUpperCase()] = "scroll"), Yb(ie, N, r), F = _b(ie), n = Mt(ie, !0), 
                                c = ye && K(be, i ? Xe : Ke)(), ae && ((U = [ ae + he.os2, L + b + kt ]).t = N, 
                                (T = ae === St ? ib(ie, he) + L + b : 0) && U.push(he.d, T + kt), Rt(U), w && At.forEach((function(e) {
                                    e.pin === w && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
                                })), ye && Pe(Z)), ye && ((a = {
                                    top: n.top + (i ? o - P : c) + kt,
                                    left: n.left + (i ? c : o - P) + kt,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[mt] = a.maxWidth = Math.ceil(n.width) + kt, a[yt] = a.maxHeight = Math.ceil(n.height) + kt, 
                                a[Ct] = a[Ct + _t] = a[Ct + xt] = a[Ct + Tt] = a[Ct + wt] = "0", a[St] = r[St], 
                                a[St + _t] = r[St + _t], a[St + xt] = r[St + xt], a[St + Tt] = r[St + Tt], a[St + wt] = r[St + wt], 
                                Y = function _copyState(e, t, r) {
                                    for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                                    return o.t = e.t, o;
                                }(R, a, fe), ut && Pe(0)), C ? (u = C._initted, st(1), C.render(C.duration(), !0, !0), 
                                H = X(he.a) - W + L + b, j = 1 < Math.abs(L - H), ye && j && Y.splice(Y.length - 2, 2), 
                                C.render(0, !0, !0), u || C.invalidate(!0), C.parent || C.totalTime(C.totalTime()), 
                                st(0)) : H = L, p && (p.value ? p.style["overflow" + he.a.toUpperCase()] = p.value : p.style.removeProperty("overflow-" + he.a)); else if (oe && Pe() && !pe) for (n = oe.parentNode; n && n !== Ge; ) n._pinOffset && (P -= n._pinOffset, 
                                O -= n._pinOffset), n = n.parentNode;
                                f && f.forEach((function(e) {
                                    return e.revert(!1, !0);
                                })), Te.start = P, Te.end = O, k = M = ut ? Z : Pe(), pe || ut || (k < Z && Pe(Z), 
                                Te.scroll.rec = 0), Te.revert(!1, !0), V && (ke = -1, Te.isActive && Pe(P + L * G), 
                                V.restart(!0)), nt = 0, C && ve && (C._initted || $) && C.progress() !== $ && C.progress($, !0).render(C.time(), !0, !0), 
                                G === Te.progress && !pe || (C && !ve && C.totalProgress(G, !0), Te.progress = (k - P) / L === G ? 0 : G), 
                                ie && ae && (N._pinOffset = Math.round(Te.progress * H)), re && !ut && re(Te);
                            }
                        }, Te.getVelocity = function() {
                            return (Pe() - M) / (gt() - rt) * 1e3 || 0;
                        }, Te.endAnimation = function() {
                            Oa(Te.callbackAnimation), C && (q ? q.progress(1) : C.paused() ? ve || Oa(C, Te.direction < 0, 1) : Oa(C, C.reversed()));
                        }, Te.labelToScroll = function(e) {
                            return C && C.labels && (P || Te.refresh() || P) + C.labels[e] / C.duration() * L || 0;
                        }, Te.getTrailing = function(t) {
                            var e = At.indexOf(Te), r = 0 < Te.direction ? At.slice(0, e).reverse() : At.slice(e + 1);
                            return (Ka(t) ? r.filter((function(e) {
                                return e.vars.preventOverlaps === t;
                            })) : r).filter((function(e) {
                                return 0 < Te.direction ? e.end <= P : e.start >= O;
                            }));
                        }, Te.update = function(e, t, r) {
                            if (!pe || r || e) {
                                var n, o, i, a, s, l, c, u = ut ? Z : Te.scroll(), f = e ? 0 : (u - P) / L, p = f < 0 ? 0 : 1 < f ? 1 : f || 0, d = Te.progress;
                                if (t && (M = k, k = pe ? Pe() : u, ue && (_ = w, w = C && !ve ? C.totalProgress() : p)), 
                                le && !p && ie && !nt && !dt && ht && P < u + (u - M) / (gt() - rt) * le && (p = 1e-4), 
                                p !== d && Te.enabled) {
                                    if (a = (s = (n = Te.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d, 
                                    Te.direction = d < p ? 1 : -1, Te.progress = p, a && !nt && (o = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3, 
                                    ve && (i = !s && "none" !== we[o + 1] && we[o + 1] || we[o], c = C && ("complete" === i || "reset" === i || i in C))), 
                                    ge && (s || c) && (c || ne || !C) && (La(ge) ? ge(Te) : Te.getTrailing(ge).forEach((function(e) {
                                        return e.endAnimation();
                                    }))), ve || (!q || nt || dt ? C && C.totalProgress(p, !!nt) : (q._dp._time - q._start !== q._time && q.render(q._dp._time - q._start), 
                                    q.resetTo ? q.resetTo("totalProgress", p, C._tTime / C._tDur) : (q.vars.totalProgress = p, 
                                    q.invalidate().restart()))), ie) if (e && ae && (N.style[ae + he.os2] = m), ye) {
                                        if (a) {
                                            if (l = !e && d < p && u < O + 1 && u + 1 >= Ia(be, he), fe) if (e || !n && !l) ec(ie, N); else {
                                                var g = Mt(ie, !0), h = u - P;
                                                ec(ie, Ge, g.top + (he === Ke ? h : 0) + kt, g.left + (he === Ke ? 0 : h) + kt);
                                            }
                                            Rt(n || l ? Y : F), j && p < 1 && n || b(W + (1 !== p || l ? 0 : H));
                                        }
                                    } else b(Ba(W + H * p));
                                    !ue || E.tween || nt || dt || V.restart(!0), ee && (s || ce && p && (p < 1 || !ct)) && et(ee.targets).forEach((function(e) {
                                        return e.classList[n || ce ? "add" : "remove"](ee.className);
                                    })), !Q || ve || e || Q(Te), a && !nt ? (ve && (c && ("complete" === i ? C.pause().totalProgress(1) : "reset" === i ? C.restart(!0).pause() : "restart" === i ? C.restart(!0) : C[i]()), 
                                    Q && Q(Te)), !s && ct || (te && s && Pa(Te, te), xe[o] && Pa(Te, xe[o]), ce && (1 === p ? Te.kill(!1, 1) : xe[o] = 0), 
                                    s || xe[o = 1 === p ? 1 : 3] && Pa(Te, xe[o])), de && !n && Math.abs(Te.getVelocity()) > (Ma(de) ? de : 2500) && (Oa(Te.callbackAnimation), 
                                    q ? q.progress(1) : Oa(C, "reverse" === i ? 1 : !p, 1))) : ve && Q && !nt && Q(Te);
                                }
                                if (x) {
                                    var v = pe ? u / pe.duration() * (pe._caScrollDist || 0) : u;
                                    y(v + (D._isFlipped ? 1 : 0)), x(v);
                                }
                                T && T(-u / pe.duration() * (pe._caScrollDist || 0));
                            }
                        }, Te.enable = function(e, t) {
                            Te.enabled || (Te.enabled = !0, ob(be, "resize", Db), ob(me ? je : be, "scroll", Bb), 
                            Se && ob(ScrollTrigger, "refreshInit", Se), !1 !== e && (Te.progress = G = 0, k = M = ke = Pe()), 
                            !1 !== t && Te.refresh());
                        }, Te.getTween = function(e) {
                            return e && E ? E.tween : q;
                        }, Te.setPositions = function(e, t) {
                            ie && (W += e - P, H += t - e - L, ae === St && Te.adjustPinSpacing(t - e - L)), 
                            Te.start = P = e, Te.end = O = t, L = t - e, Te.update();
                        }, Te.adjustPinSpacing = function(e) {
                            if (U) {
                                var t = U.indexOf(he.d) + 1;
                                U[t] = parseFloat(U[t]) + e + kt, U[1] = parseFloat(U[1]) + e + kt, Rt(U);
                            }
                        }, Te.disable = function(e, t) {
                            if (Te.enabled && (!1 !== e && Te.revert(!0, !0), Te.enabled = Te.isActive = !1, 
                            t || q && q.pause(), Z = 0, n && (n.uncache = 1), Se && pb(ScrollTrigger, "refreshInit", Se), 
                            V && (V.pause(), E.tween && E.tween.kill() && (E.tween = 0)), !me)) {
                                for (var r = At.length; r--; ) if (At[r].scroller === be && At[r] !== Te) return;
                                pb(be, "resize", Db), pb(be, "scroll", Bb);
                            }
                        }, Te.kill = function(e, t) {
                            Te.disable(e, t), q && !t && q.kill(), a && delete Bt[a];
                            var r = At.indexOf(Te);
                            0 <= r && At.splice(r, 1), r === it && 0 < Lt && it--, r = 0, At.forEach((function(e) {
                                return e.scroller === Te.scroller && (r = 1);
                            })), r || ut || (Te.scroll.rec = 0), C && (C.scrollTrigger = null, e && C.revert({
                                kill: !1
                            }), t || C.kill()), A && [ A, B, D, I ].forEach((function(e) {
                                return e.parentNode && e.parentNode.removeChild(e);
                            })), pt === Te && (pt = 0), ie && (n && (n.uncache = 1), r = 0, At.forEach((function(e) {
                                return e.pin === ie && r++;
                            })), r || (n.spacer = 0)), S.onKill && S.onKill(Te);
                        }, Te.enable(!1, !1), i && i(Te), C && C.add && !L ? He.delayedCall(.01, (function() {
                            return P || O || Te.refresh();
                        })) && (L = .01) && (P = O = 0) : Te.refresh(), ie && function _queueRefreshAll() {
                            if (ft !== Dt) {
                                var e = ft = Dt;
                                requestAnimationFrame((function() {
                                    return e === Dt && It(!0);
                                }));
                            }
                        }();
                    } else this.update = this.refresh = this.kill = Aa;
                }, ScrollTrigger.register = function register(e) {
                    return s || (He = e || Da(), Ca() && window.document && ScrollTrigger.enable(), 
                    s = vt), s;
                }, ScrollTrigger.defaults = function defaults(e) {
                    if (e) for (var t in e) Ot[t] = e[t];
                    return Ot;
                }, ScrollTrigger.disable = function disable(t, r) {
                    vt = 0, At.forEach((function(e) {
                        return e[r ? "kill" : "disable"](t);
                    })), pb(Je, "wheel", Bb), pb(je, "scroll", Bb), clearInterval(u), pb(je, "touchcancel", Aa), 
                    pb(Ge, "touchstart", Aa), nb(pb, je, "pointerdown,touchstart,mousedown", ya), nb(pb, je, "pointerup,touchend,mouseup", za), 
                    c.kill(), Ja(pb);
                    for (var e = 0; e < ze.length; e += 3) qb(pb, ze[e], ze[e + 1]), qb(pb, ze[e], ze[e + 2]);
                }, ScrollTrigger.enable = function enable() {
                    if (Je = window, je = document, qe = je.documentElement, Ge = je.body, He && (et = He.utils.toArray, 
                    tt = He.utils.clamp, lt = He.core.context || Aa, st = He.core.suppressOverwrites || Aa, 
                    x = Je.history.scrollRestoration || "auto", He.core.globals("ScrollTrigger", ScrollTrigger), 
                    Ge)) {
                        vt = 1, E.register(He), ScrollTrigger.isTouch = E.isTouch, k = E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), 
                        ob(Je, "wheel", Bb), l = [ Je, je, qe, Ge ], He.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                            var t, r = He.matchMedia();
                            for (t in e) r.add(t, e[t]);
                            return r;
                        }, He.addEventListener("matchMediaInit", (function() {
                            return Kb();
                        })), He.addEventListener("matchMediaRevert", (function() {
                            return Jb();
                        })), He.addEventListener("matchMedia", (function() {
                            It(0, 1), W("matchMedia");
                        })), He.matchMedia("(orientation: portrait)", (function() {
                            return Cb(), Cb;
                        }))) : console.warn("Requires GSAP 3.11.0 or later"), Cb(), ob(je, "scroll", Bb);
                        var e, t, r = Ge.style, n = r.borderTopStyle, o = He.core.Animation.prototype;
                        for (o.revert || Object.defineProperty(o, "revert", {
                            value: function value() {
                                return this.time(-.01, !0);
                            }
                        }), r.borderTopStyle = "solid", e = Mt(Ge), Ke.m = Math.round(e.top + Ke.sc()) || 0, 
                        Xe.m = Math.round(e.left + Xe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), 
                        u = setInterval(Ab, 250), He.delayedCall(.5, (function() {
                            return dt = 0;
                        })), ob(je, "touchcancel", Aa), ob(Ge, "touchstart", Aa), nb(ob, je, "pointerdown,touchstart,mousedown", ya), 
                        nb(ob, je, "pointerup,touchend,mouseup", za), f = He.utils.checkPrefix("transform"), 
                        V.push(f), s = gt(), c = He.delayedCall(.2, It).pause(), g = [ je, "visibilitychange", function() {
                            var e = Je.innerWidth, t = Je.innerHeight;
                            je.hidden ? (p = e, d = t) : p === e && d === t || Db();
                        }, je, "DOMContentLoaded", It, Je, "load", It, Je, "resize", Db ], Ja(ob), At.forEach((function(e) {
                            return e.enable(0, 1);
                        })), t = 0; t < ze.length; t += 3) qb(pb, ze[t], ze[t + 1]), qb(pb, ze[t], ze[t + 2]);
                    }
                }, ScrollTrigger.config = function config(e) {
                    "limitCallbacks" in e && (ct = !!e.limitCallbacks);
                    var t = e.syncInterval;
                    t && clearInterval(u) || (u = t) && setInterval(Ab, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), 
                    "autoRefreshEvents" in e && (Ja(pb) || Ja(ob, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
                }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
                    var r = J(e), n = ze.indexOf(r), o = Ea(r);
                    ~n && ze.splice(n, o ? 6 : 2), t && (o ? Fe.unshift(Je, t, Ge, t, qe, t) : Fe.unshift(r, t));
                }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
                    At.forEach((function(e) {
                        return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                    }));
                }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
                    var n = (Ka(e) ? J(e) : e).getBoundingClientRect(), o = n[r ? mt : yt] * t || 0;
                    return r ? 0 < n.right - o && n.left + o < Je.innerWidth : 0 < n.bottom - o && n.top + o < Je.innerHeight;
                }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
                    Ka(e) && (e = J(e));
                    var n = e.getBoundingClientRect(), o = n[r ? mt : yt], i = null == t ? o / 2 : t in I ? I[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
                    return r ? (n.left + i) / Je.innerWidth : (n.top + i) / Je.innerHeight;
                }, ScrollTrigger.killAll = function killAll(e) {
                    if (At.slice(0).forEach((function(e) {
                        return "ScrollSmoother" !== e.vars.id && e.kill();
                    })), !0 !== e) {
                        var t = Y.killAll || [];
                        Y = {}, t.forEach((function(e) {
                            return e();
                        }));
                    }
                }, ScrollTrigger);
                function ScrollTrigger(e, t) {
                    s || ScrollTrigger.register(He) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), 
                    this.init(e, t);
                }
                Q.version = "3.11.4", Q.saveStyles = function(e) {
                    return e ? et(e).forEach((function(e) {
                        if (e && e.style) {
                            var t = H.indexOf(e);
                            0 <= t && H.splice(t, 5), H.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), He.core.getCache(e), lt());
                        }
                    })) : H;
                }, Q.revert = function(e, t) {
                    return Kb(!e, t);
                }, Q.create = function(e, t) {
                    return new Q(e, t);
                }, Q.refresh = function(e) {
                    return e ? Db() : (s || Q.register()) && It(!0);
                }, Q.update = function(e) {
                    return ++ze.cache && j(!0 === e ? 2 : 0);
                }, Q.clearScrollMemory = Lb, Q.maxScroll = function(e, t) {
                    return Ia(e, t ? Xe : Ke);
                }, Q.getScrollFunc = function(e, t) {
                    return K(J(e), t ? Xe : Ke);
                }, Q.getById = function(e) {
                    return Bt[e];
                }, Q.getAll = function() {
                    return At.filter((function(e) {
                        return "ScrollSmoother" !== e.vars.id;
                    }));
                }, Q.isScrolling = function() {
                    return !!ht;
                }, Q.snapDirectional = lb, Q.addEventListener = function(e, t) {
                    var r = Y[e] || (Y[e] = []);
                    ~r.indexOf(t) || r.push(t);
                }, Q.removeEventListener = function(e, t) {
                    var r = Y[e], n = r && r.indexOf(t);
                    0 <= n && r.splice(n, 1);
                }, Q.batch = function(e, t) {
                    function Io(e, t) {
                        var r = [], n = [], o = He.delayedCall(i, (function() {
                            t(r, n), r = [], n = [];
                        })).pause();
                        return function(e) {
                            r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
                        };
                    }
                    var r, n = [], o = {}, i = t.interval || .016, a = t.batchMax || 1e9;
                    for (r in t) o[r] = "on" === r.substr(0, 2) && La(t[r]) && "onRefreshInit" !== r ? Io(0, t[r]) : t[r];
                    return La(a) && (a = a(), ob(Q, "refresh", (function() {
                        return a = t.batchMax();
                    }))), et(e).forEach((function(e) {
                        var t = {};
                        for (r in o) t[r] = o[r];
                        t.trigger = e, n.push(Q.create(t));
                    })), n;
                };
                function hc(e, t, r, n) {
                    return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
                }
                function ic(e, t) {
                    !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "") : "none", 
                    e === qe && ic(Ge, t);
                }
                function kc(e) {
                    var t, r = e.event, n = e.target, o = e.axis, i = (r.changedTouches ? r.changedTouches[0] : r).target, a = i._gsap || He.core.getCache(i), s = gt();
                    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
                        for (;i && i !== Ge && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !te[(t = eb(i)).overflowY] && !te[t.overflowX]); ) i = i.parentNode;
                        a._isScroll = i && i !== n && !Ea(i) && (te[(t = eb(i)).overflowY] || te[t.overflowX]), 
                        a._isScrollT = s;
                    }
                    !a._isScroll && "x" !== o || (r.stopPropagation(), r._gsapAllow = !0);
                }
                function lc(e, t, r, n) {
                    return E.create({
                        target: e,
                        capture: !0,
                        debounce: !1,
                        lockAxis: !0,
                        type: t,
                        onWheel: n = n && kc,
                        onPress: n,
                        onDrag: n,
                        onScroll: n,
                        onEnable: function onEnable() {
                            return r && ob(je, E.eventTypes[0], ne, !1, !0);
                        },
                        onDisable: function onDisable() {
                            return pb(je, E.eventTypes[0], ne, !0);
                        }
                    });
                }
                function pc(e) {
                    function Ep() {
                        return o = !1;
                    }
                    function Hp() {
                        i = Ia(p, Ke), S = tt(k ? 1 : 0, i), f && (T = tt(0, Ia(p, Xe))), l = Dt;
                    }
                    function Ip() {
                        h._gsap.y = Ba(parseFloat(h._gsap.y) + v.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", 
                        v.offset = v.cacheID = 0;
                    }
                    function Op() {
                        Hp(), a.isActive() && a.vars.scrollY > i && (v() > i ? a.progress(1) && v(i) : a.resetTo("scrollY", i));
                    }
                    Na(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), 
                    e.debounce = !!e.debounce, e.id = e.id || "normalizer";
                    var n, i, l, o, a, c, u, s, f = e.normalizeScrollX, t = e.momentum, r = e.allowNestedScroll, p = J(e.target) || qe, d = He.core.globals().ScrollSmoother, g = d && d.get(), h = k && (e.content && J(e.content) || g && !1 !== e.content && !g.smooth() && g.content()), v = K(p, Ke), b = K(p, Xe), m = 1, y = (E.isTouch && Je.visualViewport ? Je.visualViewport.scale * Je.visualViewport.width : Je.outerWidth) / Je.innerWidth, x = 0, w = La(t) ? function() {
                        return t(n);
                    } : function() {
                        return t || 2.8;
                    }, _ = lc(p, e.type, !0, r), T = Aa, S = Aa;
                    return h && He.set(h, {
                        y: "+=0"
                    }), e.ignoreCheck = function(e) {
                        return k && "touchmove" === e.type && function ignoreDrag() {
                            if (o) {
                                requestAnimationFrame(Ep);
                                var e = Ba(n.deltaY / 2), t = S(v.v - e);
                                if (h && t !== v.v + v.offset) {
                                    v.offset = t - v.v;
                                    var r = Ba((parseFloat(h && h._gsap.y) || 0) - v.offset);
                                    h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", 
                                    h._gsap.y = r + "px", v.cacheID = ze.cache, j();
                                }
                                return !0;
                            }
                            v.offset && Ip(), o = !0;
                        }() || 1.05 < m && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length;
                    }, e.onPress = function() {
                        var e = m;
                        m = Ba((Je.visualViewport && Je.visualViewport.scale || 1) / y), a.pause(), e !== m && ic(p, 1.01 < m || !f && "x"), 
                        c = b(), u = v(), Hp(), l = Dt;
                    }, e.onRelease = e.onGestureStart = function(e, t) {
                        if (v.offset && Ip(), t) {
                            ze.cache++;
                            var r, n, o = w();
                            f && (n = (r = b()) + .05 * o * -e.velocityX / .227, o *= hc(b, r, n, Ia(p, Xe)), 
                            a.vars.scrollX = T(n)), n = (r = v()) + .05 * o * -e.velocityY / .227, o *= hc(v, r, n, Ia(p, Ke)), 
                            a.vars.scrollY = S(n), a.invalidate().duration(o).play(.01), (k && a.vars.scrollY >= i || i - 1 <= r) && He.to({}, {
                                onUpdate: Op,
                                duration: o
                            });
                        } else s.restart(!0);
                    }, e.onWheel = function() {
                        a._ts && a.pause(), 1e3 < gt() - x && (l = 0, x = gt());
                    }, e.onChange = function(e, t, r, n, o) {
                        if (Dt !== l && Hp(), t && f && b(T(n[2] === t ? c + (e.startX - e.x) : b() + t - n[1])), 
                        r) {
                            v.offset && Ip();
                            var i = o[2] === r, a = i ? u + e.startY - e.y : v() + r - o[1], s = S(a);
                            i && a !== s && (u += s - a), v(s);
                        }
                        (r || t) && j();
                    }, e.onEnable = function() {
                        ic(p, !f && "x"), Q.addEventListener("refresh", Op), ob(Je, "resize", Op), v.smooth && (v.target.style.scrollBehavior = "auto", 
                        v.smooth = b.smooth = !1), _.enable();
                    }, e.onDisable = function() {
                        ic(p, !0), pb(Je, "resize", Op), Q.removeEventListener("refresh", Op), _.kill();
                    }, e.lockAxis = !1 !== e.lockAxis, ((n = new E(e)).iOS = k) && !v() && v(1), k && He.ticker.add(Aa), 
                    s = n._dc, a = He.to(n, {
                        ease: "power4",
                        paused: !0,
                        scrollX: f ? "+=0.1" : "+=0",
                        scrollY: "+=0.1",
                        onComplete: s.vars.onComplete
                    }), n;
                }
                var ee, te = {
                    auto: 1,
                    scroll: 1
                }, re = /(input|label|select|textarea)/i, ne = function _captureInputs(e) {
                    var t = re.test(e.target.tagName);
                    (t || ee) && (e._gsapAllow = !0, ee = t);
                };
                Q.sort = function(e) {
                    return At.sort(e || function(e, t) {
                        return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
                    });
                }, Q.observe = function(e) {
                    return new E(e);
                }, Q.normalizeScroll = function(e) {
                    if (void 0 === e) return v;
                    if (!0 === e && v) return v.enable();
                    if (!1 === e) return v && v.kill();
                    var t = e instanceof E ? e : pc(e);
                    return v && v.target === t.target && v.kill(), Ea(t.target) && (v = t), t;
                }, Q.core = {
                    _getVelocityProp: L,
                    _inputObserver: lc,
                    _scrollers: ze,
                    _proxies: Fe,
                    bridge: {
                        ss: function ss() {
                            ht || W("scrollStart"), ht = gt();
                        },
                        ref: function ref() {
                            return nt;
                        }
                    }
                }, Da() && He.registerPlugin(Q), e.ScrollTrigger = Q, e.default = Q;
                if (typeof window === "undefined" || window !== e) Object.defineProperty(e, "__esModule", {
                    value: !0
                }); else delete e.default;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`Ой ой, настройку data-watch-margin нужно задавать в PX или %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? FLS(`[Наблюдатель]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function digitsCounter() {
            if (document.querySelectorAll("[data-digits-counter]").length) document.querySelectorAll("[data-digits-counter]").forEach((element => {
                element.dataset.digitsCounter = element.innerHTML;
                element.innerHTML = `0`;
            }));
            function digitsCountersInit(digitsCountersItems) {
                let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
                if (digitsCounters.length) digitsCounters.forEach((digitsCounter => {
                    digitsCountersAnimate(digitsCounter);
                }));
            }
            function digitsCountersAnimate(digitsCounter) {
                let startTimestamp = null;
                const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1e3;
                const startValue = parseInt(digitsCounter.dataset.digitsCounter);
                const startPosition = 0;
                const step = timestamp => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    digitsCounter.innerHTML = new Intl.NumberFormat("fr-FR").format(Math.floor(progress * (startPosition + startValue)));
                    if (progress < 1) window.requestAnimationFrame(step);
                };
                window.requestAnimationFrame(step);
            }
            function digitsCounterAction(e) {
                const entry = e.detail.entry;
                const targetElement = entry.target;
                if (targetElement.querySelectorAll("[data-digits-counter]").length) digitsCountersInit(targetElement.querySelectorAll("[data-digits-counter]"));
            }
            document.addEventListener("watcherCallback", digitsCounterAction);
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        function _assertThisInitialized(self) {
            if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        /*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/        var _suppressOverwrites, _reverting, _context, _globalTimeline, _win, _coreInitted, _doc, _coreReady, _lastRenderedFrame, _quickTween, _tickerActive, _config = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        }, _defaults = {
            duration: .5,
            overwrite: false,
            delay: 0
        }, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
            return typeof value === "string";
        }, _isFunction = function _isFunction(value) {
            return typeof value === "function";
        }, _isNumber = function _isNumber(value) {
            return typeof value === "number";
        }, _isUndefined = function _isUndefined(value) {
            return typeof value === "undefined";
        }, _isObject = function _isObject(value) {
            return typeof value === "object";
        }, _isNotFalse = function _isNotFalse(value) {
            return value !== false;
        }, _windowExists = function _windowExists() {
            return typeof window !== "undefined";
        }, _isFuncOrString = function _isFuncOrString(value) {
            return _isFunction(value) || _isString(value);
        }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globals = {}, _installScope = {}, _install = function _install(scope) {
            return (_installScope = _merge(scope, _globals)) && gsap;
        }, _missingPlugin = function _missingPlugin(property, value) {
            return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
        }, _warn = function _warn(message, suppress) {
            return !suppress && console.warn(message);
        }, _addGlobal = function _addGlobal(name, obj) {
            return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
        }, _emptyFunc = function _emptyFunc() {
            return 0;
        }, _startAtRevertConfig = {
            suppressEvents: true,
            isStart: true,
            kill: false
        }, _revertConfigNoKill = {
            suppressEvents: true,
            kill: false
        }, _revertConfig = {
            suppressEvents: true
        }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
            var harnessPlugin, i, target = targets[0];
            _isObject(target) || _isFunction(target) || (targets = [ targets ]);
            if (!(harnessPlugin = (target._gsap || {}).harness)) {
                i = _harnessPlugins.length;
                while (i-- && !_harnessPlugins[i].targetTest(target)) ;
                harnessPlugin = _harnessPlugins[i];
            }
            i = targets.length;
            while (i--) targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
            return targets;
        }, _getCache = function _getCache(target) {
            return target._gsap || _harness(toArray(target))[0]._gsap;
        }, _getProperty = function _getProperty(target, property, v) {
            return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
        }, _forEachName = function _forEachName(names, func) {
            return (names = names.split(",")).forEach(func) || names;
        }, _round = function _round(value) {
            return Math.round(value * 1e5) / 1e5 || 0;
        }, _roundPrecise = function _roundPrecise(value) {
            return Math.round(value * 1e7) / 1e7 || 0;
        }, _parseRelative = function _parseRelative(start, value) {
            var operator = value.charAt(0), end = parseFloat(value.substr(2));
            start = parseFloat(start);
            return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
        }, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
            var l = toFind.length, i = 0;
            for (;toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) ;
            return i < l;
        }, _lazyRender = function _lazyRender() {
            var i, tween, l = _lazyTweens.length, a = _lazyTweens.slice(0);
            _lazyLookup = {};
            _lazyTweens.length = 0;
            for (i = 0; i < l; i++) {
                tween = a[i];
                tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
            }
        }, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
            _lazyTweens.length && !_reverting && _lazyRender();
            animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
            _lazyTweens.length && !_reverting && _lazyRender();
        }, _numericIfPossible = function _numericIfPossible(value) {
            var n = parseFloat(value);
            return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
        }, _passThrough = function _passThrough(p) {
            return p;
        }, _setDefaults = function _setDefaults(obj, defaults) {
            for (var p in defaults) p in obj || (obj[p] = defaults[p]);
            return obj;
        }, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
            return function(obj, defaults) {
                for (var p in defaults) p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
            };
        }, _merge = function _merge(base, toMerge) {
            for (var p in toMerge) base[p] = toMerge[p];
            return base;
        }, _mergeDeep = function _mergeDeep(base, toMerge) {
            for (var p in toMerge) p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
            return base;
        }, _copyExcluding = function _copyExcluding(obj, excluding) {
            var p, copy = {};
            for (p in obj) p in excluding || (copy[p] = obj[p]);
            return copy;
        }, _inheritDefaults = function _inheritDefaults(vars) {
            var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
            if (_isNotFalse(vars.inherit)) while (parent) {
                func(vars, parent.vars.defaults);
                parent = parent.parent || parent._dp;
            }
            return vars;
        }, _arraysMatch = function _arraysMatch(a1, a2) {
            var i = a1.length, match = i === a2.length;
            while (match && i-- && a1[i] === a2[i]) ;
            return i < 0;
        }, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
            if (firstProp === void 0) firstProp = "_first";
            if (lastProp === void 0) lastProp = "_last";
            var t, prev = parent[lastProp];
            if (sortBy) {
                t = child[sortBy];
                while (prev && prev[sortBy] > t) prev = prev._prev;
            }
            if (prev) {
                child._next = prev._next;
                prev._next = child;
            } else {
                child._next = parent[firstProp];
                parent[firstProp] = child;
            }
            if (child._next) child._next._prev = child; else parent[lastProp] = child;
            child._prev = prev;
            child.parent = child._dp = parent;
            return child;
        }, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
            if (firstProp === void 0) firstProp = "_first";
            if (lastProp === void 0) lastProp = "_last";
            var prev = child._prev, next = child._next;
            if (prev) prev._next = next; else if (parent[firstProp] === child) parent[firstProp] = next;
            if (next) next._prev = prev; else if (parent[lastProp] === child) parent[lastProp] = prev;
            child._next = child._prev = child.parent = null;
        }, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
            child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
            child._act = 0;
        }, _uncache = function _uncache(animation, child) {
            if (animation && (!child || child._end > animation._dur || child._start < 0)) {
                var a = animation;
                while (a) {
                    a._dirty = 1;
                    a = a.parent;
                }
            }
            return animation;
        }, _recacheAncestors = function _recacheAncestors(animation) {
            var parent = animation.parent;
            while (parent && parent.parent) {
                parent._dirty = 1;
                parent.totalDuration();
                parent = parent.parent;
            }
            return animation;
        }, _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
            return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
        }, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
            return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
        }, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
            return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
        }, _animationCycle = function _animationCycle(tTime, cycleDuration) {
            var whole = Math.floor(tTime /= cycleDuration);
            return tTime && whole === tTime ? whole - 1 : whole;
        }, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
            return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
        }, _setEnd = function _setEnd(animation) {
            return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
        }, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
            var parent = animation._dp;
            if (parent && parent.smoothChildTiming && animation._ts) {
                animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
                _setEnd(animation);
                parent._dirty || _uncache(parent, animation);
            }
            return animation;
        }, _postAddChecks = function _postAddChecks(timeline, child) {
            var t;
            if (child._time || child._initted && !child._dur) {
                t = _parentToChildTotalTime(timeline.rawTime(), child);
                if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
            }
            if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
                if (timeline._dur < timeline.duration()) {
                    t = timeline;
                    while (t._dp) {
                        t.rawTime() >= 0 && t.totalTime(t._tTime);
                        t = t._dp;
                    }
                }
                timeline._zTime = -_tinyNum;
            }
        }, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
            child.parent && _removeFromParent(child);
            child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
            child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
            _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
            _isFromOrFromStart(child) || (timeline._recent = child);
            skipChecks || _postAddChecks(timeline, child);
            timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
            return timeline;
        }, _scrollTrigger = function _scrollTrigger(animation, trigger) {
            return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
        }, _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
            _initTween(tween, time, tTime);
            if (!tween._initted) return 1;
            if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
                _lazyTweens.push(tween);
                tween._lazy = [ tTime, suppressEvents ];
                return 1;
            }
        }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
            var parent = _ref.parent;
            return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
        }, _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
            var data = _ref2.data;
            return data === "isFromStart" || data === "isStart";
        }, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
            var pt, iteration, prevIteration, prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0;
            if (repeatDelay && tween._repeat) {
                tTime = _clamp(0, tween._tDur, totalTime);
                iteration = _animationCycle(tTime, repeatDelay);
                tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
                if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
                    prevRatio = 1 - ratio;
                    tween.vars.repeatRefresh && tween._initted && tween.invalidate();
                }
            }
            if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
                if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) return;
                prevIteration = tween._zTime;
                tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
                suppressEvents || (suppressEvents = totalTime && !prevIteration);
                tween.ratio = ratio;
                tween._from && (ratio = 1 - ratio);
                tween._time = 0;
                tween._tTime = tTime;
                pt = tween._pt;
                while (pt) {
                    pt.r(ratio, pt.d);
                    pt = pt._next;
                }
                totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
                tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
                tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
                if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
                    ratio && _removeFromParent(tween, 1);
                    if (!suppressEvents && !_reverting) {
                        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                        tween._prom && tween._prom();
                    }
                }
            } else if (!tween._zTime) tween._zTime = totalTime;
        }, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
            var child;
            if (time > prevTime) {
                child = animation._first;
                while (child && child._start <= time) {
                    if (child.data === "isPause" && child._start > prevTime) return child;
                    child = child._next;
                }
            } else {
                child = animation._last;
                while (child && child._start >= time) {
                    if (child.data === "isPause" && child._start < prevTime) return child;
                    child = child._prev;
                }
            }
        }, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
            var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
            totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
            animation._dur = dur;
            animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
            totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
            animation.parent && _setEnd(animation);
            skipUncache || _uncache(animation.parent, animation);
            return animation;
        }, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
            return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
        }, _zeroPosition = {
            _start: 0,
            endTime: _emptyFunc,
            totalDuration: _emptyFunc
        }, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
            var i, offset, isPercent, labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur;
            if (_isString(position) && (isNaN(position) || position in labels)) {
                offset = position.charAt(0);
                isPercent = position.substr(-1) === "%";
                i = position.indexOf("=");
                if (offset === "<" || offset === ">") {
                    i >= 0 && (position = position.replace(/=/, ""));
                    return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
                }
                if (i < 0) {
                    position in labels || (labels[position] = clippedDuration);
                    return labels[position];
                }
                offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
                if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
                return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
            }
            return position == null ? clippedDuration : +position;
        }, _createTweenType = function _createTweenType(type, params, timeline) {
            var irVars, parent, isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex];
            isLegacy && (vars.duration = params[1]);
            vars.parent = timeline;
            if (type) {
                irVars = vars;
                parent = timeline;
                while (parent && !("immediateRender" in irVars)) {
                    irVars = parent.vars.defaults || {};
                    parent = _isNotFalse(parent.vars.inherit) && parent.parent;
                }
                vars.immediateRender = _isNotFalse(irVars.immediateRender);
                type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
            }
            return new Tween(params[0], vars, params[varsIndex + 1]);
        }, _conditionalReturn = function _conditionalReturn(value, func) {
            return value || value === 0 ? func(value) : func;
        }, _clamp = function _clamp(min, max, value) {
            return value < min ? min : value > max ? max : value;
        }, getUnit = function getUnit(value, v) {
            return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
        }, clamp = function clamp(min, max, value) {
            return _conditionalReturn(value, (function(v) {
                return _clamp(min, max, v);
            }));
        }, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
            return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
        }, _flatten = function _flatten(ar, leaveStrings, accumulator) {
            if (accumulator === void 0) accumulator = [];
            return ar.forEach((function(value) {
                var _accumulator;
                return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
            })) || accumulator;
        }, toArray = function toArray(value, scope, leaveStrings) {
            return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [ value ] : [];
        }, selector = function selector(value) {
            value = toArray(value)[0] || _warn("Invalid scope") || {};
            return function(v) {
                var el = value.current || value.nativeElement || value;
                return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
            };
        }, shuffle = function shuffle(a) {
            return a.sort((function() {
                return .5 - Math.random();
            }));
        }, distribute = function distribute(v) {
            if (_isFunction(v)) return v;
            var vars = _isObject(v) ? v : {
                each: v
            }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
            if (_isString(from)) ratioX = ratioY = {
                center: .5,
                edges: .5,
                end: 1
            }[from] || 0; else if (!isDecimal && ratios) {
                ratioX = from[0];
                ratioY = from[1];
            }
            return function(i, target, a) {
                var originX, originY, x, y, d, j, max, min, wrapAt, l = (a || vars).length, distances = cache[l];
                if (!distances) {
                    wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [ 1, _bigNum ])[1];
                    if (!wrapAt) {
                        max = -_bigNum;
                        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) ;
                        wrapAt--;
                    }
                    distances = cache[l] = [];
                    originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
                    originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
                    max = 0;
                    min = _bigNum;
                    for (j = 0; j < l; j++) {
                        x = j % wrapAt - originX;
                        y = originY - (j / wrapAt | 0);
                        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                        d > max && (max = d);
                        d < min && (min = d);
                    }
                    from === "random" && shuffle(distances);
                    distances.max = max - min;
                    distances.min = min;
                    distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
                    distances.b = l < 0 ? base - l : base;
                    distances.u = getUnit(vars.amount || vars.each) || 0;
                    ease = ease && l < 0 ? _invertEase(ease) : ease;
                }
                l = (distances[i] - distances.min) / distances.max || 0;
                return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
            };
        }, _roundModifier = function _roundModifier(v) {
            var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
            return function(raw) {
                var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
                return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
            };
        }, snap = function snap(snapTo, value) {
            var radius, is2D, isArray = _isArray(snapTo);
            if (!isArray && _isObject(snapTo)) {
                radius = isArray = snapTo.radius || _bigNum;
                if (snapTo.values) {
                    snapTo = toArray(snapTo.values);
                    if (is2D = !_isNumber(snapTo[0])) radius *= radius;
                } else snapTo = _roundModifier(snapTo.increment);
            }
            return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
                is2D = snapTo(raw);
                return Math.abs(is2D - raw) <= radius ? is2D : raw;
            } : function(raw) {
                var dx, dy, x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length;
                while (i--) {
                    if (is2D) {
                        dx = snapTo[i].x - x;
                        dy = snapTo[i].y - y;
                        dx = dx * dx + dy * dy;
                    } else dx = Math.abs(snapTo[i] - x);
                    if (dx < min) {
                        min = dx;
                        closest = i;
                    }
                }
                closest = !radius || min <= radius ? snapTo[closest] : raw;
                return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
            });
        }, random = function random(min, max, roundingIncrement, returnFunction) {
            return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, (function() {
                return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
            }));
        }, pipe = function pipe() {
            for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) functions[_key] = arguments[_key];
            return function(value) {
                return functions.reduce((function(v, f) {
                    return f(v);
                }), value);
            };
        }, unitize = function unitize(func, unit) {
            return function(value) {
                return func(parseFloat(value)) + (unit || getUnit(value));
            };
        }, normalize = function normalize(min, max, value) {
            return mapRange(min, max, 0, 1, value);
        }, _wrapArray = function _wrapArray(a, wrapper, value) {
            return _conditionalReturn(value, (function(index) {
                return a[~~wrapper(index)];
            }));
        }, wrap = function wrap(min, max, value) {
            var range = max - min;
            return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, (function(value) {
                return (range + (value - min) % range) % range + min;
            }));
        }, wrapYoyo = function wrapYoyo(min, max, value) {
            var range = max - min, total = range * 2;
            return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, (function(value) {
                value = (total + (value - min) % total) % total || 0;
                return min + (value > range ? total - value : value);
            }));
        }, _replaceRandom = function _replaceRandom(value) {
            var i, nums, end, isArray, prev = 0, s = "";
            while (~(i = value.indexOf("random(", prev))) {
                end = value.indexOf(")", i);
                isArray = value.charAt(i + 7) === "[";
                nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
                s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
                prev = end + 1;
            }
            return s + value.substr(prev, value.length - prev);
        }, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
            var inRange = inMax - inMin, outRange = outMax - outMin;
            return _conditionalReturn(value, (function(value) {
                return outMin + ((value - inMin) / inRange * outRange || 0);
            }));
        }, interpolate = function interpolate(start, end, progress, mutate) {
            var func = isNaN(start + end) ? 0 : function(p) {
                return (1 - p) * start + p * end;
            };
            if (!func) {
                var p, i, interpolators, l, il, isString = _isString(start), master = {};
                progress === true && (mutate = 1) && (progress = null);
                if (isString) {
                    start = {
                        p: start
                    };
                    end = {
                        p: end
                    };
                } else if (_isArray(start) && !_isArray(end)) {
                    interpolators = [];
                    l = start.length;
                    il = l - 2;
                    for (i = 1; i < l; i++) interpolators.push(interpolate(start[i - 1], start[i]));
                    l--;
                    func = function func(p) {
                        p *= l;
                        var i = Math.min(il, ~~p);
                        return interpolators[i](p - i);
                    };
                    progress = end;
                } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
                if (!interpolators) {
                    for (p in end) _addPropTween.call(master, start, p, "get", end[p]);
                    func = function func(p) {
                        return _renderPropTweens(p, master) || (isString ? start.p : start);
                    };
                }
            }
            return _conditionalReturn(progress, func);
        }, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
            var p, distance, label, labels = timeline.labels, min = _bigNum;
            for (p in labels) {
                distance = labels[p] - fromTime;
                if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
                    label = p;
                    min = distance;
                }
            }
            return label;
        }, _callback = function _callback(animation, type, executeLazyFirst) {
            var params, scope, result, v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx;
            if (!callback) return;
            params = v[type + "Params"];
            scope = v.callbackScope || animation;
            executeLazyFirst && _lazyTweens.length && _lazyRender();
            context && (_context = context);
            result = params ? callback.apply(scope, params) : callback.call(scope);
            _context = prevContext;
            return result;
        }, _interrupt = function _interrupt(animation) {
            _removeFromParent(animation);
            animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
            animation.progress() < 1 && _callback(animation, "onInterrupt");
            return animation;
        }, _createPlugin = function _createPlugin(config) {
            config = !config.name && config["default"] || config;
            var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
                this._props = [];
            } : config, instanceDefaults = {
                init: _emptyFunc,
                render: _renderPropTweens,
                add: _addPropTween,
                kill: _killPropTweensOf,
                modifier: _addPluginModifier,
                rawVars: 0
            }, statics = {
                targetTest: 0,
                get: 0,
                getSetter: _getSetter,
                aliases: {},
                register: 0
            };
            _wake();
            if (config !== Plugin) {
                if (_plugins[name]) return;
                _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
                _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
                _plugins[Plugin.prop = name] = Plugin;
                if (config.targetTest) {
                    _harnessPlugins.push(Plugin);
                    _reservedProps[name] = 1;
                }
                name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
            }
            _addGlobal(name, Plugin);
            config.register && config.register(gsap, Plugin, PropTween);
        }, _255 = 255, _colorLookup = {
            aqua: [ 0, _255, _255 ],
            lime: [ 0, _255, 0 ],
            silver: [ 192, 192, 192 ],
            black: [ 0, 0, 0 ],
            maroon: [ 128, 0, 0 ],
            teal: [ 0, 128, 128 ],
            blue: [ 0, 0, _255 ],
            navy: [ 0, 0, 128 ],
            white: [ _255, _255, _255 ],
            olive: [ 128, 128, 0 ],
            yellow: [ _255, _255, 0 ],
            orange: [ _255, 165, 0 ],
            gray: [ 128, 128, 128 ],
            purple: [ 128, 0, 128 ],
            green: [ 0, 128, 0 ],
            red: [ _255, 0, 0 ],
            pink: [ _255, 192, 203 ],
            cyan: [ 0, _255, _255 ],
            transparent: [ _255, _255, _255, 0 ]
        }, _hue = function _hue(h, m1, m2) {
            h += h < 0 ? 1 : h > 1 ? -1 : 0;
            return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
        }, splitColor = function splitColor(v, toHSL, forceAlpha) {
            var r, g, b, h, s, l, max, min, d, wasHSL, a = !v ? _colorLookup.black : _isNumber(v) ? [ v >> 16, v >> 8 & _255, v & _255 ] : 0;
            if (!a) {
                if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
                if (_colorLookup[v]) a = _colorLookup[v]; else if (v.charAt(0) === "#") {
                    if (v.length < 6) {
                        r = v.charAt(1);
                        g = v.charAt(2);
                        b = v.charAt(3);
                        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
                    }
                    if (v.length === 9) {
                        a = parseInt(v.substr(1, 6), 16);
                        return [ a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255 ];
                    }
                    v = parseInt(v.substr(1), 16);
                    a = [ v >> 16, v >> 8 & _255, v & _255 ];
                } else if (v.substr(0, 3) === "hsl") {
                    a = wasHSL = v.match(_strictNumExp);
                    if (!toHSL) {
                        h = +a[0] % 360 / 360;
                        s = +a[1] / 100;
                        l = +a[2] / 100;
                        g = l <= .5 ? l * (s + 1) : l + s - l * s;
                        r = l * 2 - g;
                        a.length > 3 && (a[3] *= 1);
                        a[0] = _hue(h + 1 / 3, r, g);
                        a[1] = _hue(h, r, g);
                        a[2] = _hue(h - 1 / 3, r, g);
                    } else if (~v.indexOf("=")) {
                        a = v.match(_numExp);
                        forceAlpha && a.length < 4 && (a[3] = 1);
                        return a;
                    }
                } else a = v.match(_strictNumExp) || _colorLookup.transparent;
                a = a.map(Number);
            }
            if (toHSL && !wasHSL) {
                r = a[0] / _255;
                g = a[1] / _255;
                b = a[2] / _255;
                max = Math.max(r, g, b);
                min = Math.min(r, g, b);
                l = (max + min) / 2;
                if (max === min) h = s = 0; else {
                    d = max - min;
                    s = l > .5 ? d / (2 - max - min) : d / (max + min);
                    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
                    h *= 60;
                }
                a[0] = ~~(h + .5);
                a[1] = ~~(s * 100 + .5);
                a[2] = ~~(l * 100 + .5);
            }
            forceAlpha && a.length < 4 && (a[3] = 1);
            return a;
        }, _colorOrderData = function _colorOrderData(v) {
            var values = [], c = [], i = -1;
            v.split(_colorExp).forEach((function(v) {
                var a = v.match(_numWithUnitExp) || [];
                values.push.apply(values, a);
                c.push(i += a.length + 1);
            }));
            values.c = c;
            return values;
        }, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
            var c, shell, d, l, result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0;
            if (!colors) return s;
            colors = colors.map((function(color) {
                return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
            }));
            if (orderMatchData) {
                d = _colorOrderData(s);
                c = orderMatchData.c;
                if (c.join(result) !== d.c.join(result)) {
                    shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
                    l = shell.length - 1;
                    for (;i < l; i++) result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
                }
            }
            if (!shell) {
                shell = s.split(_colorExp);
                l = shell.length - 1;
                for (;i < l; i++) result += shell[i] + colors[i];
            }
            return result + shell[l];
        }, _colorExp = function() {
            var p, s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (p in _colorLookup) s += "|" + p + "\\b";
            return new RegExp(s + ")", "gi");
        }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
            var toHSL, combined = a.join(" ");
            _colorExp.lastIndex = 0;
            if (_colorExp.test(combined)) {
                toHSL = _hslExp.test(combined);
                a[1] = _formatColors(a[1], toHSL);
                a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
                return true;
            }
        }, _ticker = function() {
            var _id, _req, _raf, _self, _delta, _i, _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _tick = function _tick(v) {
                var overlap, dispatch, time, frame, elapsed = _getTime() - _lastUpdate, manual = v === true;
                elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
                _lastUpdate += elapsed;
                time = _lastUpdate - _startTime;
                overlap = time - _nextTime;
                if (overlap > 0 || manual) {
                    frame = ++_self.frame;
                    _delta = time - _self.time * 1e3;
                    _self.time = time /= 1e3;
                    _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
                    dispatch = 1;
                }
                manual || (_id = _req(_tick));
                if (dispatch) for (_i = 0; _i < _listeners.length; _i++) _listeners[_i](time, _delta, frame, v);
            };
            _self = {
                time: 0,
                frame: 0,
                tick: function tick() {
                    _tick(true);
                },
                deltaRatio: function deltaRatio(fps) {
                    return _delta / (1e3 / (fps || 60));
                },
                wake: function wake() {
                    if (_coreReady) {
                        if (!_coreInitted && _windowExists()) {
                            _win = _coreInitted = window;
                            _doc = _win.document || {};
                            _globals.gsap = gsap;
                            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                            _raf = _win.requestAnimationFrame;
                        }
                        _id && _self.sleep();
                        _req = _raf || function(f) {
                            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
                        };
                        _tickerActive = 1;
                        _tick(2);
                    }
                },
                sleep: function sleep() {
                    (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
                    _tickerActive = 0;
                    _req = _emptyFunc;
                },
                lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
                    _lagThreshold = threshold || 1 / 0;
                    _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
                },
                fps: function fps(_fps) {
                    _gap = 1e3 / (_fps || 240);
                    _nextTime = _self.time * 1e3 + _gap;
                },
                add: function add(callback, once, prioritize) {
                    var func = once ? function(t, d, f, v) {
                        callback(t, d, f, v);
                        _self.remove(func);
                    } : callback;
                    _self.remove(callback);
                    _listeners[prioritize ? "unshift" : "push"](func);
                    _wake();
                    return func;
                },
                remove: function remove(callback, i) {
                    ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
                },
                _listeners
            };
            return _self;
        }(), _wake = function _wake() {
            return !_tickerActive && _ticker.wake();
        }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
            var index, val, parsedVal, obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length;
            for (;i < l; i++) {
                val = split[i];
                index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
                parsedVal = val.substr(0, index);
                obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
                key = val.substr(index + 1).trim();
            }
            return obj;
        }, _valueInParentheses = function _valueInParentheses(value) {
            var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
            return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
        }, _configEaseFromString = function _configEaseFromString(name) {
            var split = (name + "").split("("), ease = _easeMap[split[0]];
            return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [ _parseObjectInString(split[1]) ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
        }, _invertEase = function _invertEase(ease) {
            return function(p) {
                return 1 - ease(1 - p);
            };
        }, _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
            var ease, child = timeline._first;
            while (child) {
                if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo); else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo); else {
                    ease = child._ease;
                    child._ease = child._yEase;
                    child._yEase = ease;
                    child._yoyo = isYoyo;
                }
                child = child._next;
            }
        }, _parseEase = function _parseEase(ease, defaultEase) {
            return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
        }, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
            if (easeOut === void 0) easeOut = function easeOut(p) {
                return 1 - easeIn(1 - p);
            };
            if (easeInOut === void 0) easeInOut = function easeInOut(p) {
                return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
            };
            var lowercaseName, ease = {
                easeIn,
                easeOut,
                easeInOut
            };
            _forEachName(names, (function(name) {
                _easeMap[name] = _globals[name] = ease;
                _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
                for (var p in ease) _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
            }));
            return ease;
        }, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
            return function(p) {
                return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
            };
        }, _configElastic = function _configElastic(type, amplitude, period) {
            var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
                return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
            }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
                return 1 - easeOut(1 - p);
            } : _easeInOutFromOut(easeOut);
            p2 = _2PI / p2;
            ease.config = function(amplitude, period) {
                return _configElastic(type, amplitude, period);
            };
            return ease;
        }, _configBack = function _configBack(type, overshoot) {
            if (overshoot === void 0) overshoot = 1.70158;
            var easeOut = function easeOut(p) {
                return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
            }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
                return 1 - easeOut(1 - p);
            } : _easeInOutFromOut(easeOut);
            ease.config = function(overshoot) {
                return _configBack(type, overshoot);
            };
            return ease;
        };
        _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", (function(name, i) {
            var power = i < 5 ? i + 1 : i;
            _insertEase(name + ",Power" + (power - 1), i ? function(p) {
                return Math.pow(p, power);
            } : function(p) {
                return p;
            }, (function(p) {
                return 1 - Math.pow(1 - p, power);
            }), (function(p) {
                return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
            }));
        }));
        _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
        _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
        (function(n, c) {
            var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
                return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
            };
            _insertEase("Bounce", (function(p) {
                return 1 - easeOut(1 - p);
            }), easeOut);
        })(7.5625, 2.75);
        _insertEase("Expo", (function(p) {
            return p ? Math.pow(2, 10 * (p - 1)) : 0;
        }));
        _insertEase("Circ", (function(p) {
            return -(_sqrt(1 - p * p) - 1);
        }));
        _insertEase("Sine", (function(p) {
            return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
        }));
        _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
        _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
            config: function config(steps, immediateStart) {
                if (steps === void 0) steps = 1;
                var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
                return function(p) {
                    return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
                };
            }
        };
        _defaults.ease = _easeMap["quad.out"];
        _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(name) {
            return _callbackNames += name + "," + name + "Params,";
        }));
        var GSCache = function GSCache(target, harness) {
            this.id = _gsID++;
            target._gsap = this;
            this.target = target;
            this.harness = harness;
            this.get = harness ? harness.get : _getProperty;
            this.set = harness ? harness.getSetter : _getSetter;
        };
        var Animation = function() {
            function Animation(vars) {
                this.vars = vars;
                this._delay = +vars.delay || 0;
                if (this._repeat = vars.repeat === 1 / 0 ? -2 : vars.repeat || 0) {
                    this._rDelay = vars.repeatDelay || 0;
                    this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
                }
                this._ts = 1;
                _setDuration(this, +vars.duration, 1, 1);
                this.data = vars.data;
                if (_context) {
                    this._ctx = _context;
                    _context.data.push(this);
                }
                _tickerActive || _ticker.wake();
            }
            var _proto = Animation.prototype;
            _proto.delay = function delay(value) {
                if (value || value === 0) {
                    this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
                    this._delay = value;
                    return this;
                }
                return this._delay;
            };
            _proto.duration = function duration(value) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
            };
            _proto.totalDuration = function totalDuration(value) {
                if (!arguments.length) return this._tDur;
                this._dirty = 0;
                return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
            };
            _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
                _wake();
                if (!arguments.length) return this._tTime;
                var parent = this._dp;
                if (parent && parent.smoothChildTiming && this._ts) {
                    _alignPlayhead(this, _totalTime);
                    !parent._dp || parent.parent || _postAddChecks(parent, this);
                    while (parent && parent.parent) {
                        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                        parent = parent.parent;
                    }
                    if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
                }
                if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
                    this._ts || (this._pTime = _totalTime);
                    _lazySafeRender(this, _totalTime, suppressEvents);
                }
                return this;
            };
            _proto.time = function time(value, suppressEvents) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
            };
            _proto.totalProgress = function totalProgress(value, suppressEvents) {
                return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
            };
            _proto.progress = function progress(value, suppressEvents) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
            };
            _proto.iteration = function iteration(value, suppressEvents) {
                var cycleDuration = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
            };
            _proto.timeScale = function timeScale(value) {
                if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
                if (this._rts === value) return this;
                var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
                this._rts = +value || 0;
                this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
                this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
                _setEnd(this);
                return _recacheAncestors(this);
            };
            _proto.paused = function paused(value) {
                if (!arguments.length) return this._ps;
                if (this._ps !== value) {
                    this._ps = value;
                    if (value) {
                        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                        this._ts = this._act = 0;
                    } else {
                        _wake();
                        this._ts = this._rts;
                        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
                    }
                }
                return this;
            };
            _proto.startTime = function startTime(value) {
                if (arguments.length) {
                    this._start = value;
                    var parent = this.parent || this._dp;
                    parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
                    return this;
                }
                return this._start;
            };
            _proto.endTime = function endTime(includeRepeats) {
                return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
            };
            _proto.rawTime = function rawTime(wrapRepeats) {
                var parent = this.parent || this._dp;
                return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
            };
            _proto.revert = function revert(config) {
                if (config === void 0) config = _revertConfig;
                var prevIsReverting = _reverting;
                _reverting = config;
                if (this._initted || this._startAt) {
                    this.timeline && this.timeline.revert(config);
                    this.totalTime(-.01, config.suppressEvents);
                }
                this.data !== "nested" && config.kill !== false && this.kill();
                _reverting = prevIsReverting;
                return this;
            };
            _proto.globalTime = function globalTime(rawTime) {
                var animation = this, time = arguments.length ? rawTime : animation.rawTime();
                while (animation) {
                    time = animation._start + time / (animation._ts || 1);
                    animation = animation._dp;
                }
                return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(rawTime) : time;
            };
            _proto.repeat = function repeat(value) {
                if (arguments.length) {
                    this._repeat = value === 1 / 0 ? -2 : value;
                    return _onUpdateTotalDuration(this);
                }
                return this._repeat === -2 ? 1 / 0 : this._repeat;
            };
            _proto.repeatDelay = function repeatDelay(value) {
                if (arguments.length) {
                    var time = this._time;
                    this._rDelay = value;
                    _onUpdateTotalDuration(this);
                    return time ? this.time(time) : this;
                }
                return this._rDelay;
            };
            _proto.yoyo = function yoyo(value) {
                if (arguments.length) {
                    this._yoyo = value;
                    return this;
                }
                return this._yoyo;
            };
            _proto.seek = function seek(position, suppressEvents) {
                return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
            };
            _proto.restart = function restart(includeDelay, suppressEvents) {
                return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
            };
            _proto.play = function play(from, suppressEvents) {
                from != null && this.seek(from, suppressEvents);
                return this.reversed(false).paused(false);
            };
            _proto.reverse = function reverse(from, suppressEvents) {
                from != null && this.seek(from || this.totalDuration(), suppressEvents);
                return this.reversed(true).paused(false);
            };
            _proto.pause = function pause(atTime, suppressEvents) {
                atTime != null && this.seek(atTime, suppressEvents);
                return this.paused(true);
            };
            _proto.resume = function resume() {
                return this.paused(false);
            };
            _proto.reversed = function reversed(value) {
                if (arguments.length) {
                    !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
                    return this;
                }
                return this._rts < 0;
            };
            _proto.invalidate = function invalidate() {
                this._initted = this._act = 0;
                this._zTime = -_tinyNum;
                return this;
            };
            _proto.isActive = function isActive() {
                var rawTime, parent = this.parent || this._dp, start = this._start;
                return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
            };
            _proto.eventCallback = function eventCallback(type, callback, params) {
                var vars = this.vars;
                if (arguments.length > 1) {
                    if (!callback) delete vars[type]; else {
                        vars[type] = callback;
                        params && (vars[type + "Params"] = params);
                        type === "onUpdate" && (this._onUpdate = callback);
                    }
                    return this;
                }
                return vars[type];
            };
            _proto.then = function then(onFulfilled) {
                var self = this;
                return new Promise((function(resolve) {
                    var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                        var _then = self.then;
                        self.then = null;
                        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                        resolve(f);
                        self.then = _then;
                    };
                    if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve(); else self._prom = _resolve;
                }));
            };
            _proto.kill = function kill() {
                _interrupt(this);
            };
            return Animation;
        }();
        _setDefaults(Animation.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: false,
            parent: null,
            _initted: false,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -_tinyNum,
            _prom: 0,
            _ps: false,
            _rts: 1
        });
        var Timeline = function(_Animation) {
            _inheritsLoose(Timeline, _Animation);
            function Timeline(vars, position) {
                var _this;
                if (vars === void 0) vars = {};
                _this = _Animation.call(this, vars) || this;
                _this.labels = {};
                _this.smoothChildTiming = !!vars.smoothChildTiming;
                _this.autoRemoveChildren = !!vars.autoRemoveChildren;
                _this._sort = _isNotFalse(vars.sortChildren);
                _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
                vars.reversed && _this.reverse();
                vars.paused && _this.paused(true);
                vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
                return _this;
            }
            var _proto2 = Timeline.prototype;
            _proto2.to = function to(targets, vars, position) {
                _createTweenType(0, arguments, this);
                return this;
            };
            _proto2.from = function from(targets, vars, position) {
                _createTweenType(1, arguments, this);
                return this;
            };
            _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
                _createTweenType(2, arguments, this);
                return this;
            };
            _proto2.set = function set(targets, vars, position) {
                vars.duration = 0;
                vars.parent = this;
                _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
                vars.immediateRender = !!vars.immediateRender;
                new Tween(targets, vars, _parsePosition(this, position), 1);
                return this;
            };
            _proto2.call = function call(callback, params, position) {
                return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
            };
            _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                vars.duration = duration;
                vars.stagger = vars.stagger || stagger;
                vars.onComplete = onCompleteAll;
                vars.onCompleteParams = onCompleteAllParams;
                vars.parent = this;
                new Tween(targets, vars, _parsePosition(this, position));
                return this;
            };
            _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                vars.runBackwards = 1;
                _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
                return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
            };
            _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
                toVars.startAt = fromVars;
                _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
                return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
            };
            _proto2.render = function render(totalTime, suppressEvents, force) {
                var time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo, prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur);
                this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
                if (tTime !== this._tTime || force || crossingStart) {
                    if (prevTime !== this._time && dur) {
                        tTime += this._time - prevTime;
                        totalTime += this._time - prevTime;
                    }
                    time = tTime;
                    prevStart = this._start;
                    timeScale = this._ts;
                    prevPaused = !timeScale;
                    if (crossingStart) {
                        dur || (prevTime = this._zTime);
                        (totalTime || !suppressEvents) && (this._zTime = totalTime);
                    }
                    if (this._repeat) {
                        yoyo = this._yoyo;
                        cycleDuration = dur + this._rDelay;
                        if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                        time = _roundPrecise(tTime % cycleDuration);
                        if (tTime === tDur) {
                            iteration = this._repeat;
                            time = dur;
                        } else {
                            iteration = ~~(tTime / cycleDuration);
                            if (iteration && iteration === tTime / cycleDuration) {
                                time = dur;
                                iteration--;
                            }
                            time > dur && (time = dur);
                        }
                        prevIteration = _animationCycle(this._tTime, cycleDuration);
                        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
                        if (yoyo && iteration & 1) {
                            time = dur - time;
                            isYoyo = 1;
                        }
                        if (iteration !== prevIteration && !this._lock) {
                            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                            iteration < prevIteration && (rewinding = !rewinding);
                            prevTime = rewinding ? 0 : dur;
                            this._lock = 1;
                            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                            this._tTime = tTime;
                            !suppressEvents && this.parent && _callback(this, "onRepeat");
                            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            dur = this._dur;
                            tDur = this._tDur;
                            if (doesWrap) {
                                this._lock = 2;
                                prevTime = rewinding ? dur : -1e-4;
                                this.render(prevTime, true);
                                this.vars.repeatRefresh && !isYoyo && this.invalidate();
                            }
                            this._lock = 0;
                            if (!this._ts && !prevPaused) return this;
                            _propagateYoyoEase(this, isYoyo);
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2) {
                        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                        if (pauseTween) tTime -= time - (time = pauseTween._start);
                    }
                    this._tTime = tTime;
                    this._time = time;
                    this._act = !timeScale;
                    if (!this._initted) {
                        this._onUpdate = this.vars.onUpdate;
                        this._initted = 1;
                        this._zTime = totalTime;
                        prevTime = 0;
                    }
                    if (!prevTime && time && !suppressEvents) {
                        _callback(this, "onStart");
                        if (this._tTime !== tTime) return this;
                    }
                    if (time >= prevTime && totalTime >= 0) {
                        child = this._first;
                        while (child) {
                            next = child._next;
                            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                                if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                                child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                                if (time !== this._time || !this._ts && !prevPaused) {
                                    pauseTween = 0;
                                    next && (tTime += this._zTime = -_tinyNum);
                                    break;
                                }
                            }
                            child = next;
                        }
                    } else {
                        child = this._last;
                        var adjustedTime = totalTime < 0 ? totalTime : time;
                        while (child) {
                            next = child._prev;
                            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                                if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                                child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
                                if (time !== this._time || !this._ts && !prevPaused) {
                                    pauseTween = 0;
                                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                                    break;
                                }
                            }
                            child = next;
                        }
                    }
                    if (pauseTween && !suppressEvents) {
                        this.pause();
                        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                        if (this._ts) {
                            this._start = prevStart;
                            _setEnd(this);
                            return this.render(totalTime, suppressEvents, force);
                        }
                    }
                    this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
                    if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
                return this;
            };
            _proto2.add = function add(child, position) {
                var _this2 = this;
                _isNumber(position) || (position = _parsePosition(this, position, child));
                if (!(child instanceof Animation)) {
                    if (_isArray(child)) {
                        child.forEach((function(obj) {
                            return _this2.add(obj, position);
                        }));
                        return this;
                    }
                    if (_isString(child)) return this.addLabel(child, position);
                    if (_isFunction(child)) child = Tween.delayedCall(0, child); else return this;
                }
                return this !== child ? _addToTimeline(this, child, position) : this;
            };
            _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
                if (nested === void 0) nested = true;
                if (tweens === void 0) tweens = true;
                if (timelines === void 0) timelines = true;
                if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
                var a = [], child = this._first;
                while (child) {
                    if (child._start >= ignoreBeforeTime) if (child instanceof Tween) tweens && a.push(child); else {
                        timelines && a.push(child);
                        nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                    }
                    child = child._next;
                }
                return a;
            };
            _proto2.getById = function getById(id) {
                var animations = this.getChildren(1, 1, 1), i = animations.length;
                while (i--) if (animations[i].vars.id === id) return animations[i];
            };
            _proto2.remove = function remove(child) {
                if (_isString(child)) return this.removeLabel(child);
                if (_isFunction(child)) return this.killTweensOf(child);
                _removeLinkedListItem(this, child);
                if (child === this._recent) this._recent = this._last;
                return _uncache(this);
            };
            _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
                if (!arguments.length) return this._tTime;
                this._forcing = 1;
                if (!this._dp && this._ts) this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
                _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
                this._forcing = 0;
                return this;
            };
            _proto2.addLabel = function addLabel(label, position) {
                this.labels[label] = _parsePosition(this, position);
                return this;
            };
            _proto2.removeLabel = function removeLabel(label) {
                delete this.labels[label];
                return this;
            };
            _proto2.addPause = function addPause(position, callback, params) {
                var t = Tween.delayedCall(0, callback || _emptyFunc, params);
                t.data = "isPause";
                this._hasPause = 1;
                return _addToTimeline(this, t, _parsePosition(this, position));
            };
            _proto2.removePause = function removePause(position) {
                var child = this._first;
                position = _parsePosition(this, position);
                while (child) {
                    if (child._start === position && child.data === "isPause") _removeFromParent(child);
                    child = child._next;
                }
            };
            _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
                while (i--) _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
                return this;
            };
            _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
                var children, a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive);
                while (child) {
                    if (child instanceof Tween) {
                        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
                    } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
                    child = child._next;
                }
                return a;
            };
            _proto2.tweenTo = function tweenTo(position, vars) {
                vars = vars || {};
                var initted, tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween.to(tl, _setDefaults({
                    ease: vars.ease || "none",
                    lazy: false,
                    immediateRender: false,
                    time: endTime,
                    overwrite: "auto",
                    duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
                    onStart: function onStart() {
                        tl.pause();
                        if (!initted) {
                            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                            initted = 1;
                        }
                        _onStart && _onStart.apply(tween, onStartParams || []);
                    }
                }, vars));
                return immediateRender ? tween.render(0) : tween;
            };
            _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
                return this.tweenTo(toPosition, _setDefaults({
                    startAt: {
                        time: _parsePosition(this, fromPosition)
                    }
                }, vars));
            };
            _proto2.recent = function recent() {
                return this._recent;
            };
            _proto2.nextLabel = function nextLabel(afterTime) {
                if (afterTime === void 0) afterTime = this._time;
                return _getLabelInDirection(this, _parsePosition(this, afterTime));
            };
            _proto2.previousLabel = function previousLabel(beforeTime) {
                if (beforeTime === void 0) beforeTime = this._time;
                return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
            };
            _proto2.currentLabel = function currentLabel(value) {
                return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
            };
            _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
                if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
                var p, child = this._first, labels = this.labels;
                while (child) {
                    if (child._start >= ignoreBeforeTime) {
                        child._start += amount;
                        child._end += amount;
                    }
                    child = child._next;
                }
                if (adjustLabels) for (p in labels) if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
                return _uncache(this);
            };
            _proto2.invalidate = function invalidate(soft) {
                var child = this._first;
                this._lock = 0;
                while (child) {
                    child.invalidate(soft);
                    child = child._next;
                }
                return _Animation.prototype.invalidate.call(this, soft);
            };
            _proto2.clear = function clear(includeLabels) {
                if (includeLabels === void 0) includeLabels = true;
                var next, child = this._first;
                while (child) {
                    next = child._next;
                    this.remove(child);
                    child = next;
                }
                this._dp && (this._time = this._tTime = this._pTime = 0);
                includeLabels && (this.labels = {});
                return _uncache(this);
            };
            _proto2.totalDuration = function totalDuration(value) {
                var prev, start, parent, max = 0, self = this, child = self._last, prevStart = _bigNum;
                if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
                if (self._dirty) {
                    parent = self.parent;
                    while (child) {
                        prev = child._prev;
                        child._dirty && child.totalDuration();
                        start = child._start;
                        if (start > prevStart && self._sort && child._ts && !self._lock) {
                            self._lock = 1;
                            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                        } else prevStart = start;
                        if (start < 0 && child._ts) {
                            max -= start;
                            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                                self._start += start / self._ts;
                                self._time -= start;
                                self._tTime -= start;
                            }
                            self.shiftChildren(-start, false, -Infinity);
                            prevStart = 0;
                        }
                        child._end > max && child._ts && (max = child._end);
                        child = prev;
                    }
                    _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
                    self._dirty = 0;
                }
                return self._tDur;
            };
            Timeline.updateRoot = function updateRoot(time) {
                if (_globalTimeline._ts) {
                    _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
                    _lastRenderedFrame = _ticker.frame;
                }
                if (_ticker.frame >= _nextGCFrame) {
                    _nextGCFrame += _config.autoSleep || 120;
                    var child = _globalTimeline._first;
                    if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
                        while (child && !child._ts) child = child._next;
                        child || _ticker.sleep();
                    }
                }
            };
            return Timeline;
        }(Animation);
        _setDefaults(Timeline.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var _overwritingTween, _forceAllPropTweens, _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
            var result, startNums, color, endNum, chunk, startNum, hasRandom, a, pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0;
            pt.b = start;
            pt.e = end;
            start += "";
            end += "";
            if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
            if (stringFilter) {
                a = [ start, end ];
                stringFilter(a, target, prop);
                start = a[0];
                end = a[1];
            }
            startNums = start.match(_complexStringNumExp) || [];
            while (result = _complexStringNumExp.exec(end)) {
                endNum = result[0];
                chunk = end.substring(index, result.index);
                if (color) color = (color + 1) % 5; else if (chunk.substr(-5) === "rgba(") color = 1;
                if (endNum !== startNums[matchIndex++]) {
                    startNum = parseFloat(startNums[matchIndex - 1]) || 0;
                    pt._pt = {
                        _next: pt._pt,
                        p: chunk || matchIndex === 1 ? chunk : ",",
                        s: startNum,
                        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                        m: color && color < 4 ? Math.round : 0
                    };
                    index = _complexStringNumExp.lastIndex;
                }
            }
            pt.c = index < end.length ? end.substring(index, end.length) : "";
            pt.fp = funcParam;
            if (_relExp.test(end) || hasRandom) pt.e = 0;
            this._pt = pt;
            return pt;
        }, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
            _isFunction(end) && (end = end(index || 0, target, targets));
            var pt, currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc;
            if (_isString(end)) {
                if (~end.indexOf("random(")) end = _replaceRandom(end);
                if (end.charAt(1) === "=") {
                    pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
                    if (pt || pt === 0) end = pt;
                }
            }
            if (!optional || parsedStart !== end || _forceAllPropTweens) {
                if (!isNaN(parsedStart * end) && end !== "") {
                    pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
                    funcParam && (pt.fp = funcParam);
                    modifier && pt.modifier(modifier, this, target);
                    return this._pt = pt;
                }
                !currentValue && !(prop in target) && _missingPlugin(prop, end);
                return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
            }
        }, _processVars = function _processVars(vars, index, target, targets, tween) {
            _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
            if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
            var p, copy = {};
            for (p in vars) copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
            return copy;
        }, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
            var plugin, pt, ptLookup, i;
            if (_plugins[property] && (plugin = new _plugins[property]).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
                if (tween !== _quickTween) {
                    ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
                    i = plugin._props.length;
                    while (i--) ptLookup[plugin._props[i]] = pt;
                }
            }
            return plugin;
        }, _initTween = function _initTween(tween, time, tTime) {
            var cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten, vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline;
            tl && (!keyframes || !ease) && (ease = "none");
            tween._ease = _parseEase(ease, _defaults.ease);
            tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
            if (yoyoEase && tween._yoyo && !tween._repeat) {
                yoyoEase = tween._yEase;
                tween._yEase = tween._ease;
                tween._ease = yoyoEase;
            }
            tween._from = !tl && !!vars.runBackwards;
            if (!tl || keyframes && !vars.stagger) {
                harness = targets[0] ? _getCache(targets[0]).harness : 0;
                harnessVars = harness && vars[harness.prop];
                cleanVars = _copyExcluding(vars, _reservedProps);
                if (prevStartAt) {
                    prevStartAt._zTime < 0 && prevStartAt.progress(1);
                    time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
                    prevStartAt._lazy = 0;
                }
                if (startAt) {
                    _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                        data: "isStart",
                        overwrite: false,
                        parent,
                        immediateRender: true,
                        lazy: !prevStartAt && _isNotFalse(lazy),
                        startAt: null,
                        delay: 0,
                        onUpdate,
                        onUpdateParams,
                        callbackScope,
                        stagger: 0
                    }, startAt)));
                    tween._startAt._dp = 0;
                    tween._startAt._sat = tween;
                    time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
                    if (immediateRender) if (dur && time <= 0 && tTime <= 0) {
                        time && (tween._zTime = time);
                        return;
                    }
                } else if (runBackwards && dur) if (!prevStartAt) {
                    time && (immediateRender = false);
                    p = _setDefaults({
                        overwrite: false,
                        data: "isFromStart",
                        lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                        immediateRender,
                        stagger: 0,
                        parent
                    }, cleanVars);
                    harnessVars && (p[harness.prop] = harnessVars);
                    _removeFromParent(tween._startAt = Tween.set(targets, p));
                    tween._startAt._dp = 0;
                    tween._startAt._sat = tween;
                    time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                    tween._zTime = time;
                    if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum); else if (!time) return;
                }
                tween._pt = tween._ptCache = 0;
                lazy = dur && _isNotFalse(lazy) || lazy && !dur;
                for (i = 0; i < targets.length; i++) {
                    target = targets[i];
                    gsData = target._gsap || _harness(targets)[i]._gsap;
                    tween._ptLookup[i] = ptLookup = {};
                    _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
                    index = fullTargets === targets ? i : fullTargets.indexOf(target);
                    if (harness && (plugin = new harness).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                        plugin._props.forEach((function(name) {
                            ptLookup[name] = pt;
                        }));
                        plugin.priority && (hasPriority = 1);
                    }
                    if (!harness || harnessVars) for (p in cleanVars) if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1); else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                    tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
                    if (autoOverwrite && tween._pt) {
                        _overwritingTween = tween;
                        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
                        overwritten = !tween.parent;
                        _overwritingTween = 0;
                    }
                    tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
                }
                hasPriority && _sortPropTweensByPriority(tween);
                tween._onInit && tween._onInit(tween);
            }
            tween._onUpdate = onUpdate;
            tween._initted = (!tween._op || tween._pt) && !overwritten;
            keyframes && time <= 0 && tl.render(_bigNum, true, true);
        }, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
            var pt, rootPT, lookup, i, ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property];
            if (!ptCache) {
                ptCache = tween._ptCache[property] = [];
                lookup = tween._ptLookup;
                i = tween._targets.length;
                while (i--) {
                    pt = lookup[i][property];
                    if (pt && pt.d && pt.d._pt) {
                        pt = pt.d._pt;
                        while (pt && pt.p !== property && pt.fp !== property) pt = pt._next;
                    }
                    if (!pt) {
                        _forceAllPropTweens = 1;
                        tween.vars[property] = "+=0";
                        _initTween(tween, time);
                        _forceAllPropTweens = 0;
                        return 1;
                    }
                    ptCache.push(pt);
                }
            }
            i = ptCache.length;
            while (i--) {
                rootPT = ptCache[i];
                pt = rootPT._pt || rootPT;
                pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
                pt.c = value - pt.s;
                rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
                rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
            }
        }, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
            var copy, p, i, aliases, harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases;
            if (!propertyAliases) return vars;
            copy = _merge({}, vars);
            for (p in propertyAliases) if (p in copy) {
                aliases = propertyAliases[p].split(",");
                i = aliases.length;
                while (i--) copy[aliases[i]] = copy[p];
            }
            return copy;
        }, _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
            var p, a, ease = obj.ease || easeEach || "power1.inOut";
            if (_isArray(obj)) {
                a = allProps[prop] || (allProps[prop] = []);
                obj.forEach((function(value, i) {
                    return a.push({
                        t: i / (obj.length - 1) * 100,
                        v: value,
                        e: ease
                    });
                }));
            } else for (p in obj) {
                a = allProps[p] || (allProps[p] = []);
                p === "ease" || a.push({
                    t: parseFloat(prop),
                    v: obj[p],
                    e: ease
                });
            }
        }, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
            return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
        }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
        _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", (function(name) {
            return _staggerPropsToSkip[name] = 1;
        }));
        var Tween = function(_Animation2) {
            _inheritsLoose(Tween, _Animation2);
            function Tween(targets, vars, position, skipInherit) {
                var _this3;
                if (typeof vars === "number") {
                    position.duration = vars;
                    vars = position;
                    position = null;
                }
                _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
                var tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge, _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [ targets ] : toArray(targets);
                _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
                _this3._ptLookup = [];
                _this3._overwrite = overwrite;
                if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                    vars = _this3.vars;
                    tl = _this3.timeline = new Timeline({
                        data: "nested",
                        defaults: defaults || {},
                        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
                    });
                    tl.kill();
                    tl.parent = tl._dp = _assertThisInitialized(_this3);
                    tl._start = 0;
                    if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                        l = parsedTargets.length;
                        staggerFunc = stagger && distribute(stagger);
                        if (_isObject(stagger)) for (p in stagger) if (~_staggerTweenProps.indexOf(p)) {
                            staggerVarsToMerge || (staggerVarsToMerge = {});
                            staggerVarsToMerge[p] = stagger[p];
                        }
                        for (i = 0; i < l; i++) {
                            copy = _copyExcluding(vars, _staggerPropsToSkip);
                            copy.stagger = 0;
                            yoyoEase && (copy.yoyoEase = yoyoEase);
                            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                            curTarget = parsedTargets[i];
                            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                            if (!stagger && l === 1 && copy.delay) {
                                _this3._delay = delay = copy.delay;
                                _this3._start += delay;
                                copy.delay = 0;
                            }
                            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                            tl._ease = _easeMap.none;
                        }
                        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
                    } else if (keyframes) {
                        _inheritDefaults(_setDefaults(tl.vars.defaults, {
                            ease: "none"
                        }));
                        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                        var a, kf, v, time = 0;
                        if (_isArray(keyframes)) {
                            keyframes.forEach((function(frame) {
                                return tl.to(parsedTargets, frame, ">");
                            }));
                            tl.duration();
                        } else {
                            copy = {};
                            for (p in keyframes) p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                            for (p in copy) {
                                a = copy[p].sort((function(a, b) {
                                    return a.t - b.t;
                                }));
                                time = 0;
                                for (i = 0; i < a.length; i++) {
                                    kf = a[i];
                                    v = {
                                        ease: kf.e,
                                        duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                                    };
                                    v[p] = kf.v;
                                    tl.to(parsedTargets, v, time);
                                    time += v.duration;
                                }
                            }
                            tl.duration() < duration && tl.to({}, {
                                duration: duration - tl.duration()
                            });
                        }
                    }
                    duration || _this3.duration(duration = tl.duration());
                } else _this3.timeline = 0;
                if (overwrite === true && !_suppressOverwrites) {
                    _overwritingTween = _assertThisInitialized(_this3);
                    _globalTimeline.killTweensOf(parsedTargets);
                    _overwritingTween = 0;
                }
                _addToTimeline(parent, _assertThisInitialized(_this3), position);
                vars.reversed && _this3.reverse();
                vars.paused && _this3.paused(true);
                if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
                    _this3._tTime = -_tinyNum;
                    _this3.render(Math.max(0, -delay) || 0);
                }
                scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
                return _this3;
            }
            var _proto3 = Tween.prototype;
            _proto3.render = function render(totalTime, suppressEvents, force) {
                var time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase, prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime;
                if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force); else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
                    time = tTime;
                    timeline = this.timeline;
                    if (this._repeat) {
                        cycleDuration = dur + this._rDelay;
                        if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                        time = _roundPrecise(tTime % cycleDuration);
                        if (tTime === tDur) {
                            iteration = this._repeat;
                            time = dur;
                        } else {
                            iteration = ~~(tTime / cycleDuration);
                            if (iteration && iteration === tTime / cycleDuration) {
                                time = dur;
                                iteration--;
                            }
                            time > dur && (time = dur);
                        }
                        isYoyo = this._yoyo && iteration & 1;
                        if (isYoyo) {
                            yoyoEase = this._yEase;
                            time = dur - time;
                        }
                        prevIteration = _animationCycle(this._tTime, cycleDuration);
                        if (time === prevTime && !force && this._initted) {
                            this._tTime = tTime;
                            return this;
                        }
                        if (iteration !== prevIteration) {
                            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                                this._lock = force = 1;
                                this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                            }
                        }
                    }
                    if (!this._initted) {
                        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                            this._tTime = 0;
                            return this;
                        }
                        if (prevTime !== this._time) return this;
                        if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
                    }
                    this._tTime = tTime;
                    this._time = time;
                    if (!this._act && this._ts) {
                        this._act = 1;
                        this._lazy = 0;
                    }
                    this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
                    if (this._from) this.ratio = ratio = 1 - ratio;
                    if (time && !prevTime && !suppressEvents) {
                        _callback(this, "onStart");
                        if (this._tTime !== tTime) return this;
                    }
                    pt = this._pt;
                    while (pt) {
                        pt.r(ratio, pt.d);
                        pt = pt._next;
                    }
                    timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
                    if (this._onUpdate && !suppressEvents) {
                        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
                        _callback(this, "onUpdate");
                    }
                    this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
                    if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
                return this;
            };
            _proto3.targets = function targets() {
                return this._targets;
            };
            _proto3.invalidate = function invalidate(soft) {
                (!soft || !this.vars.runBackwards) && (this._startAt = 0);
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
                this._ptLookup = [];
                this.timeline && this.timeline.invalidate(soft);
                return _Animation2.prototype.invalidate.call(this, soft);
            };
            _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
                _tickerActive || _ticker.wake();
                this._ts || this.play();
                var ratio, time = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                this._initted || _initTween(this, time);
                ratio = this._ease(time / this._dur);
                if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) return this.resetTo(property, value, start, startIsRelative);
                _alignPlayhead(this, 0);
                this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
                return this.render(0);
            };
            _proto3.kill = function kill(targets, vars) {
                if (vars === void 0) vars = "all";
                if (!targets && (!vars || vars === "all")) {
                    this._lazy = this._pt = 0;
                    return this.parent ? _interrupt(this) : this;
                }
                if (this.timeline) {
                    var tDur = this.timeline.totalDuration();
                    this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
                    this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
                    return this;
                }
                var overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i, parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt;
                if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
                    vars === "all" && (this._pt = 0);
                    return _interrupt(this);
                }
                overwrittenProps = this._op = this._op || [];
                if (vars !== "all") {
                    if (_isString(vars)) {
                        p = {};
                        _forEachName(vars, (function(name) {
                            return p[name] = 1;
                        }));
                        vars = p;
                    }
                    vars = _addAliasesToVars(parsedTargets, vars);
                }
                i = parsedTargets.length;
                while (i--) if (~killingTargets.indexOf(parsedTargets[i])) {
                    curLookup = propTweenLookup[i];
                    if (vars === "all") {
                        overwrittenProps[i] = vars;
                        props = curLookup;
                        curOverwriteProps = {};
                    } else {
                        curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                        props = vars;
                    }
                    for (p in props) {
                        pt = curLookup && curLookup[p];
                        if (pt) {
                            if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                            delete curLookup[p];
                        }
                        if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
                    }
                }
                this._initted && !this._pt && firstPT && _interrupt(this);
                return this;
            };
            Tween.to = function to(targets, vars) {
                return new Tween(targets, vars, arguments[2]);
            };
            Tween.from = function from(targets, vars) {
                return _createTweenType(1, arguments);
            };
            Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
                return new Tween(callback, 0, {
                    immediateRender: false,
                    lazy: false,
                    overwrite: false,
                    delay,
                    onComplete: callback,
                    onReverseComplete: callback,
                    onCompleteParams: params,
                    onReverseCompleteParams: params,
                    callbackScope: scope
                });
            };
            Tween.fromTo = function fromTo(targets, fromVars, toVars) {
                return _createTweenType(2, arguments);
            };
            Tween.set = function set(targets, vars) {
                vars.duration = 0;
                vars.repeatDelay || (vars.repeat = 0);
                return new Tween(targets, vars);
            };
            Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                return _globalTimeline.killTweensOf(targets, props, onlyActive);
            };
            return Tween;
        }(Animation);
        _setDefaults(Tween.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        });
        _forEachName("staggerTo,staggerFrom,staggerFromTo", (function(name) {
            Tween[name] = function() {
                var tl = new Timeline, params = _slice.call(arguments, 0);
                params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
                return tl[name].apply(tl, params);
            };
        }));
        var _setterPlain = function _setterPlain(target, property, value) {
            return target[property] = value;
        }, _setterFunc = function _setterFunc(target, property, value) {
            return target[property](value);
        }, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
            return target[property](data.fp, value);
        }, _setterAttribute = function _setterAttribute(target, property, value) {
            return target.setAttribute(property, value);
        }, _getSetter = function _getSetter(target, property) {
            return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
        }, _renderPlain = function _renderPlain(ratio, data) {
            return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
        }, _renderBoolean = function _renderBoolean(ratio, data) {
            return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
        }, _renderComplexString = function _renderComplexString(ratio, data) {
            var pt = data._pt, s = "";
            if (!ratio && data.b) s = data.b; else if (ratio === 1 && data.e) s = data.e; else {
                while (pt) {
                    s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
                    pt = pt._next;
                }
                s += data.c;
            }
            data.set(data.t, data.p, s, data);
        }, _renderPropTweens = function _renderPropTweens(ratio, data) {
            var pt = data._pt;
            while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        }, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
            var next, pt = this._pt;
            while (pt) {
                next = pt._next;
                pt.p === property && pt.modifier(modifier, tween, target);
                pt = next;
            }
        }, _killPropTweensOf = function _killPropTweensOf(property) {
            var hasNonDependentRemaining, next, pt = this._pt;
            while (pt) {
                next = pt._next;
                if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt"); else if (!pt.dep) hasNonDependentRemaining = 1;
                pt = next;
            }
            return !hasNonDependentRemaining;
        }, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
            data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
        }, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
            var next, pt2, first, last, pt = parent._pt;
            while (pt) {
                next = pt._next;
                pt2 = first;
                while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
                if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt; else first = pt;
                if (pt._next = pt2) pt2._prev = pt; else last = pt;
                pt = next;
            }
            parent._pt = first;
        };
        var PropTween = function() {
            function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
                this.t = target;
                this.s = start;
                this.c = change;
                this.p = prop;
                this.r = renderer || _renderPlain;
                this.d = data || this;
                this.set = setter || _setterPlain;
                this.pr = priority || 0;
                this._next = next;
                if (next) next._prev = this;
            }
            var _proto4 = PropTween.prototype;
            _proto4.modifier = function modifier(func, tween, target) {
                this.mSet = this.mSet || this.set;
                this.set = _setterWithModifier;
                this.m = func;
                this.mt = target;
                this.tween = tween;
            };
            return PropTween;
        }();
        _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(name) {
            return _reservedProps[name] = 1;
        }));
        _globals.TweenMax = _globals.TweenLite = Tween;
        _globals.TimelineLite = _globals.TimelineMax = Timeline;
        _globalTimeline = new Timeline({
            sortChildren: false,
            defaults: _defaults,
            autoRemoveChildren: true,
            id: "root",
            smoothChildTiming: true
        });
        _config.stringFilter = _colorStringFilter;
        var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _dispatch = function _dispatch(type) {
            return (_listeners[type] || _emptyArray).map((function(f) {
                return f();
            }));
        }, _onMediaChange = function _onMediaChange() {
            var time = Date.now(), matches = [];
            if (time - _lastMediaTime > 2) {
                _dispatch("matchMediaInit");
                _media.forEach((function(c) {
                    var match, p, anyMatch, toggled, queries = c.queries, conditions = c.conditions;
                    for (p in queries) {
                        match = _win.matchMedia(queries[p]).matches;
                        match && (anyMatch = 1);
                        if (match !== conditions[p]) {
                            conditions[p] = match;
                            toggled = 1;
                        }
                    }
                    if (toggled) {
                        c.revert();
                        anyMatch && matches.push(c);
                    }
                }));
                _dispatch("matchMediaRevert");
                matches.forEach((function(c) {
                    return c.onMatch(c);
                }));
                _lastMediaTime = time;
                _dispatch("matchMedia");
            }
        };
        var Context = function() {
            function Context(func, scope) {
                this.selector = scope && selector(scope);
                this.data = [];
                this._r = [];
                this.isReverted = false;
                func && this.add(func);
            }
            var _proto5 = Context.prototype;
            _proto5.add = function add(name, func, scope) {
                if (_isFunction(name)) {
                    scope = func;
                    func = name;
                    name = _isFunction;
                }
                var self = this, f = function f() {
                    var result, prev = _context, prevSelector = self.selector;
                    prev && prev !== self && prev.data.push(self);
                    scope && (self.selector = selector(scope));
                    _context = self;
                    result = func.apply(self, arguments);
                    _isFunction(result) && self._r.push(result);
                    _context = prev;
                    self.selector = prevSelector;
                    self.isReverted = false;
                    return result;
                };
                self.last = f;
                return name === _isFunction ? f(self) : name ? self[name] = f : f;
            };
            _proto5.ignore = function ignore(func) {
                var prev = _context;
                _context = null;
                func(this);
                _context = prev;
            };
            _proto5.getTweens = function getTweens() {
                var a = [];
                this.data.forEach((function(e) {
                    return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
                }));
                return a;
            };
            _proto5.clear = function clear() {
                this._r.length = this.data.length = 0;
            };
            _proto5.kill = function kill(revert, matchMedia) {
                var _this4 = this;
                if (revert) {
                    var tweens = this.getTweens();
                    this.data.forEach((function(t) {
                        if (t.data === "isFlip") {
                            t.revert();
                            t.getChildren(true, true, false).forEach((function(tween) {
                                return tweens.splice(tweens.indexOf(tween), 1);
                            }));
                        }
                    }));
                    tweens.map((function(t) {
                        return {
                            g: t.globalTime(0),
                            t
                        };
                    })).sort((function(a, b) {
                        return b.g - a.g || -1;
                    })).forEach((function(o) {
                        return o.t.revert(revert);
                    }));
                    this.data.forEach((function(e) {
                        return !(e instanceof Animation) && e.revert && e.revert(revert);
                    }));
                    this._r.forEach((function(f) {
                        return f(revert, _this4);
                    }));
                    this.isReverted = true;
                } else this.data.forEach((function(e) {
                    return e.kill && e.kill();
                }));
                this.clear();
                if (matchMedia) {
                    var i = _media.indexOf(this);
                    !!~i && _media.splice(i, 1);
                }
            };
            _proto5.revert = function revert(config) {
                this.kill(config || {});
            };
            return Context;
        }();
        var MatchMedia = function() {
            function MatchMedia(scope) {
                this.contexts = [];
                this.scope = scope;
            }
            var _proto6 = MatchMedia.prototype;
            _proto6.add = function add(conditions, func, scope) {
                _isObject(conditions) || (conditions = {
                    matches: conditions
                });
                var mq, p, active, context = new Context(0, scope || this.scope), cond = context.conditions = {};
                this.contexts.push(context);
                func = context.add("onMatch", func);
                context.queries = conditions;
                for (p in conditions) if (p === "all") active = 1; else {
                    mq = _win.matchMedia(conditions[p]);
                    if (mq) {
                        _media.indexOf(context) < 0 && _media.push(context);
                        (cond[p] = mq.matches) && (active = 1);
                        mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                    }
                }
                active && func(context);
                return this;
            };
            _proto6.revert = function revert(config) {
                this.kill(config || {});
            };
            _proto6.kill = function kill(revert) {
                this.contexts.forEach((function(c) {
                    return c.kill(revert, true);
                }));
            };
            return MatchMedia;
        }();
        var _gsap = {
            registerPlugin: function registerPlugin() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                args.forEach((function(config) {
                    return _createPlugin(config);
                }));
            },
            timeline: function timeline(vars) {
                return new Timeline(vars);
            },
            getTweensOf: function getTweensOf(targets, onlyActive) {
                return _globalTimeline.getTweensOf(targets, onlyActive);
            },
            getProperty: function getProperty(target, property, unit, uncache) {
                _isString(target) && (target = toArray(target)[0]);
                var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
                unit === "native" && (unit = "");
                return !target ? target : !property ? function(property, unit, uncache) {
                    return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
                } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
            },
            quickSetter: function quickSetter(target, property, unit) {
                target = toArray(target);
                if (target.length > 1) {
                    var setters = target.map((function(t) {
                        return gsap.quickSetter(t, property, unit);
                    })), l = setters.length;
                    return function(value) {
                        var i = l;
                        while (i--) setters[i](value);
                    };
                }
                target = target[0] || {};
                var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
                    var p = new Plugin;
                    _quickTween._pt = 0;
                    p.init(target, unit ? value + unit : value, _quickTween, 0, [ target ]);
                    p.render(1, p);
                    _quickTween._pt && _renderPropTweens(1, _quickTween);
                } : cache.set(target, p);
                return Plugin ? setter : function(value) {
                    return setter(target, p, unit ? value + unit : value, cache, 1);
                };
            },
            quickTo: function quickTo(target, property, vars) {
                var _merge2;
                var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, 
                _merge2), vars || {})), func = function func(value, start, startIsRelative) {
                    return tween.resetTo(property, value, start, startIsRelative);
                };
                func.tween = tween;
                return func;
            },
            isTweening: function isTweening(targets) {
                return _globalTimeline.getTweensOf(targets, true).length > 0;
            },
            defaults: function defaults(value) {
                value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
                return _mergeDeep(_defaults, value || {});
            },
            config: function config(value) {
                return _mergeDeep(_config, value || {});
            },
            registerEffect: function registerEffect(_ref3) {
                var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
                (plugins || "").split(",").forEach((function(pluginName) {
                    return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
                }));
                _effects[name] = function(targets, vars, tl) {
                    return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
                };
                if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
                    return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
                };
            },
            registerEase: function registerEase(name, ease) {
                _easeMap[name] = _parseEase(ease);
            },
            parseEase: function parseEase(ease, defaultEase) {
                return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
            },
            getById: function getById(id) {
                return _globalTimeline.getById(id);
            },
            exportRoot: function exportRoot(vars, includeDelayedCalls) {
                if (vars === void 0) vars = {};
                var child, next, tl = new Timeline(vars);
                tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
                _globalTimeline.remove(tl);
                tl._dp = 0;
                tl._time = tl._tTime = _globalTimeline._time;
                child = _globalTimeline._first;
                while (child) {
                    next = child._next;
                    if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
                    child = next;
                }
                _addToTimeline(_globalTimeline, tl, 0);
                return tl;
            },
            context: function context(func, scope) {
                return func ? new Context(func, scope) : _context;
            },
            matchMedia: function matchMedia(scope) {
                return new MatchMedia(scope);
            },
            matchMediaRefresh: function matchMediaRefresh() {
                return _media.forEach((function(c) {
                    var found, p, cond = c.conditions;
                    for (p in cond) if (cond[p]) {
                        cond[p] = false;
                        found = 1;
                    }
                    found && c.revert();
                })) || _onMediaChange();
            },
            addEventListener: function addEventListener(type, callback) {
                var a = _listeners[type] || (_listeners[type] = []);
                ~a.indexOf(callback) || a.push(callback);
            },
            removeEventListener: function removeEventListener(type, callback) {
                var a = _listeners[type], i = a && a.indexOf(callback);
                i >= 0 && a.splice(i, 1);
            },
            utils: {
                wrap,
                wrapYoyo,
                distribute,
                random,
                snap,
                normalize,
                getUnit,
                clamp,
                splitColor,
                toArray,
                selector,
                mapRange,
                pipe,
                unitize,
                interpolate,
                shuffle
            },
            install: _install,
            effects: _effects,
            ticker: _ticker,
            updateRoot: Timeline.updateRoot,
            plugins: _plugins,
            globalTimeline: _globalTimeline,
            core: {
                PropTween,
                globals: _addGlobal,
                Tween,
                Timeline,
                Animation,
                getCache: _getCache,
                _removeLinkedListItem,
                reverting: function reverting() {
                    return _reverting;
                },
                context: function context(toAdd) {
                    if (toAdd && _context) {
                        _context.data.push(toAdd);
                        toAdd._ctx = _context;
                    }
                    return _context;
                },
                suppressOverwrites: function suppressOverwrites(value) {
                    return _suppressOverwrites = value;
                }
            }
        };
        _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", (function(name) {
            return _gsap[name] = Tween[name];
        }));
        _ticker.add(Timeline.updateRoot);
        _quickTween = _gsap.to({}, {
            duration: 0
        });
        var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
            var pt = plugin._pt;
            while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) pt = pt._next;
            return pt;
        }, _addModifiers = function _addModifiers(tween, modifiers) {
            var p, i, pt, targets = tween._targets;
            for (p in modifiers) {
                i = targets.length;
                while (i--) {
                    pt = tween._ptLookup[i][p];
                    if (pt && (pt = pt.d)) {
                        if (pt._pt) pt = _getPluginPropTween(pt, p);
                        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
                    }
                }
            }
        }, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
            return {
                name,
                rawVars: 1,
                init: function init(target, vars, tween) {
                    tween._onInit = function(tween) {
                        var temp, p;
                        if (_isString(vars)) {
                            temp = {};
                            _forEachName(vars, (function(name) {
                                return temp[name] = 1;
                            }));
                            vars = temp;
                        }
                        if (modifier) {
                            temp = {};
                            for (p in vars) temp[p] = modifier(vars[p]);
                            vars = temp;
                        }
                        _addModifiers(tween, vars);
                    };
                }
            };
        };
        var gsap = _gsap.registerPlugin({
            name: "attr",
            init: function init(target, vars, tween, index, targets) {
                var p, pt, v;
                this.tween = tween;
                for (p in vars) {
                    v = target.getAttribute(p) || "";
                    pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
                    pt.op = p;
                    pt.b = v;
                    this._props.push(p);
                }
            },
            render: function render(ratio, data) {
                var pt = data._pt;
                while (pt) {
                    _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
                    pt = pt._next;
                }
            }
        }, {
            name: "endArray",
            init: function init(target, value) {
                var i = value.length;
                while (i--) this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
            }
        }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
        Tween.version = Timeline.version = gsap.version = "3.11.4";
        _coreReady = 1;
        _windowExists() && _wake();
        _easeMap.Power0, _easeMap.Power1, _easeMap.Power2, _easeMap.Power3, _easeMap.Power4, 
        _easeMap.Linear, _easeMap.Quad, _easeMap.Cubic, _easeMap.Quart, _easeMap.Quint, 
        _easeMap.Strong, _easeMap.Elastic, _easeMap.Back, _easeMap.SteppedEase, _easeMap.Bounce, 
        _easeMap.Sine, _easeMap.Expo, _easeMap.Circ;
        /*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var CSSPlugin_win, CSSPlugin_doc, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, CSSPlugin_reverting, _supports3D, CSSPlugin_windowExists = function _windowExists() {
            return typeof window !== "undefined";
        }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, CSSPlugin_bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        }, _renderCSSProp = function _renderCSSProp(ratio, data) {
            return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
            return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
            return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
        }, _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
            var value = data.s + data.c * ratio;
            data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
        }, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
            return data.set(data.t, data.p, ratio ? data.e : data.b, data);
        }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
            return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
        }, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
            return target.style[property] = value;
        }, _setterCSSProp = function _setterCSSProp(target, property, value) {
            return target.style.setProperty(property, value);
        }, _setterTransform = function _setterTransform(target, property, value) {
            return target._gsap[property] = value;
        }, _setterScale = function _setterScale(target, property, value) {
            return target._gsap.scaleX = target._gsap.scaleY = value;
        }, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
            var cache = target._gsap;
            cache.scaleX = cache.scaleY = value;
            cache.renderTransform(ratio, cache);
        }, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
            var cache = target._gsap;
            cache[property] = value;
            cache.renderTransform(ratio, cache);
        }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle(property, isNotCSS) {
            var _this = this;
            var target = this.target, style = target.style;
            if (property in _transformProps) {
                this.tfm = this.tfm || {};
                if (property !== "transform") {
                    property = _propertyAliases[property] || property;
                    ~property.indexOf(",") ? property.split(",").forEach((function(a) {
                        return _this.tfm[a] = _get(target, a);
                    })) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
                }
                if (this.props.indexOf(_transformProp) >= 0) return;
                if (target._gsap.svg) {
                    this.svgo = target.getAttribute("data-svg-origin");
                    this.props.push(_transformOriginProp, isNotCSS, "");
                }
                property = _transformProp;
            }
            (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
        }, _removeIndependentTransforms = function _removeIndependentTransforms(style) {
            if (style.translate) {
                style.removeProperty("translate");
                style.removeProperty("scale");
                style.removeProperty("rotate");
            }
        }, _revertStyle = function _revertStyle() {
            var i, p, props = this.props, target = this.target, style = target.style, cache = target._gsap;
            for (i = 0; i < props.length; i += 3) props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace(_capsExp, "-$1").toLowerCase());
            if (this.tfm) {
                for (p in this.tfm) cache[p] = this.tfm[p];
                if (cache.svg) {
                    cache.renderTransform();
                    target.setAttribute("data-svg-origin", this.svgo || "");
                }
                i = CSSPlugin_reverting();
                if (i && !i.isStart && !style[_transformProp]) {
                    _removeIndependentTransforms(style);
                    cache.uncache = 1;
                }
            }
        }, _getStyleSaver = function _getStyleSaver(target, properties) {
            var saver = {
                target,
                props: [],
                revert: _revertStyle,
                save: _saveStyle
            };
            properties && properties.split(",").forEach((function(p) {
                return saver.save(p);
            }));
            return saver;
        }, _createElement = function _createElement(type, ns) {
            var e = CSSPlugin_doc.createElementNS ? CSSPlugin_doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : CSSPlugin_doc.createElement(type);
            return e.style ? e : CSSPlugin_doc.createElement(type);
        }, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
            var cs = getComputedStyle(target);
            return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
        }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
            var e = element || _tempDiv, s = e.style, i = 5;
            if (property in s && !preferPrefix) return property;
            property = property.charAt(0).toUpperCase() + property.substr(1);
            while (i-- && !(_prefixes[i] + property in s)) ;
            return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
        }, _initCore = function _initCore() {
            if (CSSPlugin_windowExists() && window.document) {
                CSSPlugin_win = window;
                CSSPlugin_doc = CSSPlugin_win.document;
                _docElement = CSSPlugin_doc.documentElement;
                _tempDiv = _createElement("div") || {
                    style: {}
                };
                _createElement("div");
                _transformProp = _checkPropPrefix(_transformProp);
                _transformOriginProp = _transformProp + "Origin";
                _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
                _supports3D = !!_checkPropPrefix("perspective");
                CSSPlugin_reverting = gsap.core.reverting;
                _pluginInitted = 1;
            }
        }, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
            var bbox, svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText;
            _docElement.appendChild(svg);
            svg.appendChild(this);
            this.style.display = "block";
            if (swapIfPossible) try {
                bbox = this.getBBox();
                this._gsapBBox = this.getBBox;
                this.getBBox = _getBBoxHack;
            } catch (e) {} else if (this._gsapBBox) bbox = this._gsapBBox();
            if (oldParent) if (oldSibling) oldParent.insertBefore(this, oldSibling); else oldParent.appendChild(this);
            _docElement.removeChild(svg);
            this.style.cssText = oldCSS;
            return bbox;
        }, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
            var i = attributesArray.length;
            while (i--) if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
        }, _getBBox = function _getBBox(target) {
            var bounds;
            try {
                bounds = target.getBBox();
            } catch (error) {
                bounds = _getBBoxHack.call(target, true);
            }
            bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
            return bounds && !bounds.width && !bounds.x && !bounds.y ? {
                x: +_getAttributeFallbacks(target, [ "x", "cx", "x1" ]) || 0,
                y: +_getAttributeFallbacks(target, [ "y", "cy", "y1" ]) || 0,
                width: 0,
                height: 0
            } : bounds;
        }, _isSVG = function _isSVG(e) {
            return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
        }, _removeProperty = function _removeProperty(target, property) {
            if (property) {
                var style = target.style;
                if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
                if (style.removeProperty) {
                    if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
                    style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
                } else style.removeAttribute(property);
            }
        }, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
            var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
            plugin._pt = pt;
            pt.b = beginning;
            pt.e = end;
            plugin._props.push(property);
            return pt;
        }, _nonConvertibleUnits = {
            deg: 1,
            rad: 1,
            turn: 1
        }, _nonStandardLayouts = {
            grid: 1,
            flex: 1
        }, _convertToUnit = function _convertToUnit(target, property, value, unit) {
            var px, parent, cache, isSVG, curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%";
            if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
            curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
            isSVG = target.getCTM && _isSVG(target);
            if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
                px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
                return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
            }
            style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
            parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
            if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
            if (!parent || parent === CSSPlugin_doc || !parent.appendChild) parent = CSSPlugin_doc.body;
            cache = parent._gsap;
            if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) return _round(curValue / cache.width * amount); else {
                (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
                parent === target && (style.position = "static");
                parent.appendChild(_tempDiv);
                px = _tempDiv[measureProperty];
                parent.removeChild(_tempDiv);
                style.position = "absolute";
                if (horizontal && toPercent) {
                    cache = _getCache(parent);
                    cache.time = _ticker.time;
                    cache.width = parent[measureProperty];
                }
            }
            return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
        }, _get = function _get(target, property, unit, uncache) {
            var value;
            _pluginInitted || _initCore();
            if (property in _propertyAliases && property !== "transform") {
                property = _propertyAliases[property];
                if (~property.indexOf(",")) property = property.split(",")[0];
            }
            if (_transformProps[property] && property !== "transform") {
                value = _parseTransform(target, uncache);
                value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
            } else {
                value = target.style[property];
                if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
            }
            return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
        }, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
            if (!start || start === "none") {
                var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
                if (s && s !== start) {
                    prop = p;
                    start = s;
                } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
            }
            var a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues, pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0;
            pt.b = start;
            pt.e = end;
            start += "";
            end += "";
            if (end === "auto") {
                target.style[prop] = end;
                end = _getComputedProperty(target, prop) || end;
                target.style[prop] = start;
            }
            a = [ start, end ];
            _colorStringFilter(a);
            start = a[0];
            end = a[1];
            startValues = start.match(_numWithUnitExp) || [];
            endValues = end.match(_numWithUnitExp) || [];
            if (endValues.length) {
                while (result = _numWithUnitExp.exec(end)) {
                    endValue = result[0];
                    chunk = end.substring(index, result.index);
                    if (color) color = (color + 1) % 5; else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
                    if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                        startNum = parseFloat(startValue) || 0;
                        startUnit = startValue.substr((startNum + "").length);
                        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
                        endNum = parseFloat(endValue);
                        endUnit = endValue.substr((endNum + "").length);
                        index = _numWithUnitExp.lastIndex - endUnit.length;
                        if (!endUnit) {
                            endUnit = endUnit || _config.units[prop] || startUnit;
                            if (index === end.length) {
                                end += endUnit;
                                pt.e += endUnit;
                            }
                        }
                        if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                        pt._pt = {
                            _next: pt._pt,
                            p: chunk || matchIndex === 1 ? chunk : ",",
                            s: startNum,
                            c: endNum - startNum,
                            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                        };
                    }
                }
                pt.c = index < end.length ? end.substring(index, end.length) : "";
            } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
            _relExp.test(end) && (pt.e = 0);
            this._pt = pt;
            return pt;
        }, _keywordToPercent = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
            var split = value.split(" "), x = split[0], y = split[1] || "50%";
            if (x === "top" || x === "bottom" || y === "left" || y === "right") {
                value = x;
                x = y;
                y = value;
            }
            split[0] = _keywordToPercent[x] || x;
            split[1] = _keywordToPercent[y] || y;
            return split.join(" ");
        }, _renderClearProps = function _renderClearProps(ratio, data) {
            if (data.tween && data.tween._time === data.tween._dur) {
                var prop, clearTransforms, i, target = data.t, style = target.style, props = data.u, cache = target._gsap;
                if (props === "all" || props === true) {
                    style.cssText = "";
                    clearTransforms = 1;
                } else {
                    props = props.split(",");
                    i = props.length;
                    while (--i > -1) {
                        prop = props[i];
                        if (_transformProps[prop]) {
                            clearTransforms = 1;
                            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                        }
                        _removeProperty(target, prop);
                    }
                }
                if (clearTransforms) {
                    _removeProperty(target, _transformProp);
                    if (cache) {
                        cache.svg && target.removeAttribute("transform");
                        _parseTransform(target, 1);
                        cache.uncache = 1;
                        _removeIndependentTransforms(style);
                    }
                }
            }
        }, _specialProps = {
            clearProps: function clearProps(plugin, target, property, endValue, tween) {
                if (tween.data !== "isFromStart") {
                    var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
                    pt.u = endValue;
                    pt.pr = -10;
                    pt.tween = tween;
                    plugin._props.push(property);
                    return 1;
                }
            }
        }, _identity2DMatrix = [ 1, 0, 0, 1, 0, 0 ], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
            return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
        }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
            var matrixString = _getComputedProperty(target, _transformProp);
            return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
        }, _getMatrix = function _getMatrix(target, force2D) {
            var parent, nextSibling, temp, addedToDOM, cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target);
            if (cache.svg && target.getAttribute("transform")) {
                temp = target.transform.baseVal.consolidate().matrix;
                matrix = [ temp.a, temp.b, temp.c, temp.d, temp.e, temp.f ];
                return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
            } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
                temp = style.display;
                style.display = "block";
                parent = target.parentNode;
                if (!parent || !target.offsetParent) {
                    addedToDOM = 1;
                    nextSibling = target.nextElementSibling;
                    _docElement.appendChild(target);
                }
                matrix = _getComputedTransformMatrixAsArray(target);
                temp ? style.display = temp : _removeProperty(target, "display");
                if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
            }
            return force2D && matrix.length > 6 ? [ matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13] ] : matrix;
        }, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
            var bounds, determinant, x, y, cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0;
            if (!originIsAbsolute) {
                bounds = _getBBox(target);
                xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
                yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
            } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
                x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
                y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
                xOrigin = x;
                yOrigin = y;
            }
            if (smooth || smooth !== false && cache.smooth) {
                tx = xOrigin - xOriginOld;
                ty = yOrigin - yOriginOld;
                cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
                cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
            } else cache.xOffset = cache.yOffset = 0;
            cache.xOrigin = xOrigin;
            cache.yOrigin = yOrigin;
            cache.smooth = !!smooth;
            cache.origin = origin;
            cache.originIsAbsolute = !!originIsAbsolute;
            target.style[_transformOriginProp] = "0px 0px";
            if (pluginToAddPropTweensTo) {
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
            }
            target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
        }, _parseTransform = function _parseTransform(target, uncache) {
            var cache = target._gsap || new GSCache(target);
            if ("x" in cache && !uncache && !cache.uncache) return cache;
            var x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32, style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0";
            x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
            scaleX = scaleY = 1;
            cache.svg = !!(target.getCTM && _isSVG(target));
            if (cs.translate) {
                if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
                style.scale = style.rotate = style.translate = "none";
            }
            matrix = _getMatrix(target, cache.svg);
            if (cache.svg) {
                if (cache.uncache) {
                    t2 = target.getBBox();
                    origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
                    t1 = "";
                } else t1 = !uncache && target.getAttribute("data-svg-origin");
                _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
            }
            xOrigin = cache.xOrigin || 0;
            yOrigin = cache.yOrigin || 0;
            if (matrix !== _identity2DMatrix) {
                a = matrix[0];
                b = matrix[1];
                c = matrix[2];
                d = matrix[3];
                x = a12 = matrix[4];
                y = a22 = matrix[5];
                if (matrix.length === 6) {
                    scaleX = Math.sqrt(a * a + b * b);
                    scaleY = Math.sqrt(d * d + c * c);
                    rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
                    skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
                    skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
                    if (cache.svg) {
                        x -= xOrigin - (xOrigin * a + yOrigin * c);
                        y -= yOrigin - (xOrigin * b + yOrigin * d);
                    }
                } else {
                    a32 = matrix[6];
                    a42 = matrix[7];
                    a13 = matrix[8];
                    a23 = matrix[9];
                    a33 = matrix[10];
                    a43 = matrix[11];
                    x = matrix[12];
                    y = matrix[13];
                    z = matrix[14];
                    angle = _atan2(a32, a33);
                    rotationX = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(-angle);
                        sin = Math.sin(-angle);
                        t1 = a12 * cos + a13 * sin;
                        t2 = a22 * cos + a23 * sin;
                        t3 = a32 * cos + a33 * sin;
                        a13 = a12 * -sin + a13 * cos;
                        a23 = a22 * -sin + a23 * cos;
                        a33 = a32 * -sin + a33 * cos;
                        a43 = a42 * -sin + a43 * cos;
                        a12 = t1;
                        a22 = t2;
                        a32 = t3;
                    }
                    angle = _atan2(-c, a33);
                    rotationY = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(-angle);
                        sin = Math.sin(-angle);
                        t1 = a * cos - a13 * sin;
                        t2 = b * cos - a23 * sin;
                        t3 = c * cos - a33 * sin;
                        a43 = d * sin + a43 * cos;
                        a = t1;
                        b = t2;
                        c = t3;
                    }
                    angle = _atan2(b, a);
                    rotation = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(angle);
                        sin = Math.sin(angle);
                        t1 = a * cos + b * sin;
                        t2 = a12 * cos + a22 * sin;
                        b = b * cos - a * sin;
                        a22 = a22 * cos - a12 * sin;
                        a = t1;
                        a12 = t2;
                    }
                    if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                        rotationX = rotation = 0;
                        rotationY = 180 - rotationY;
                    }
                    scaleX = _round(Math.sqrt(a * a + b * b + c * c));
                    scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
                    angle = _atan2(a12, a22);
                    skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
                    perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
                }
                if (cache.svg) {
                    t1 = target.getAttribute("transform");
                    cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
                    t1 && target.setAttribute("transform", t1);
                }
            }
            if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) if (invertedScaleX) {
                scaleX *= -1;
                skewX += rotation <= 0 ? 180 : -180;
                rotation += rotation <= 0 ? 180 : -180;
            } else {
                scaleY *= -1;
                skewX += skewX <= 0 ? 180 : -180;
            }
            uncache = uncache || cache.uncache;
            cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
            cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
            cache.z = z + px;
            cache.scaleX = _round(scaleX);
            cache.scaleY = _round(scaleY);
            cache.rotation = _round(rotation) + deg;
            cache.rotationX = _round(rotationX) + deg;
            cache.rotationY = _round(rotationY) + deg;
            cache.skewX = skewX + deg;
            cache.skewY = skewY + deg;
            cache.transformPerspective = perspective + px;
            if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
            cache.xOffset = cache.yOffset = 0;
            cache.force3D = _config.force3D;
            cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
            cache.uncache = 0;
            return cache;
        }, _firstTwoOnly = function _firstTwoOnly(value) {
            return (value = value.split(" "))[0] + " " + value[1];
        }, _addPxTranslate = function _addPxTranslate(target, start, value) {
            var unit = getUnit(start);
            return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
        }, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
            cache.z = "0px";
            cache.rotationY = cache.rotationX = "0deg";
            cache.force3D = 0;
            _renderCSSTransforms(ratio, cache);
        }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
            var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
            if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
                var cos, angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle);
                angle = parseFloat(rotationX) * _DEG2RAD;
                cos = Math.cos(angle);
                x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
                y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
                z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
            }
            if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
            if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
            if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
            if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
            if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
            if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
            if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
            if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
            target.style[_transformProp] = transforms || "translate(0, 0)";
        }, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
            var a11, a21, a12, a22, temp, _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y);
            rotation = parseFloat(rotation);
            skewX = parseFloat(skewX);
            skewY = parseFloat(skewY);
            if (skewY) {
                skewY = parseFloat(skewY);
                skewX += skewY;
                rotation += skewY;
            }
            if (rotation || skewX) {
                rotation *= _DEG2RAD;
                skewX *= _DEG2RAD;
                a11 = Math.cos(rotation) * scaleX;
                a21 = Math.sin(rotation) * scaleX;
                a12 = Math.sin(rotation - skewX) * -scaleY;
                a22 = Math.cos(rotation - skewX) * scaleY;
                if (skewX) {
                    skewY *= _DEG2RAD;
                    temp = Math.tan(skewX - skewY);
                    temp = Math.sqrt(1 + temp * temp);
                    a12 *= temp;
                    a22 *= temp;
                    if (skewY) {
                        temp = Math.tan(skewY);
                        temp = Math.sqrt(1 + temp * temp);
                        a11 *= temp;
                        a21 *= temp;
                    }
                }
                a11 = _round(a11);
                a21 = _round(a21);
                a12 = _round(a12);
                a22 = _round(a22);
            } else {
                a11 = scaleX;
                a22 = scaleY;
                a21 = a12 = 0;
            }
            if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
                tx = _convertToUnit(target, "x", x, "px");
                ty = _convertToUnit(target, "y", y, "px");
            }
            if (xOrigin || yOrigin || xOffset || yOffset) {
                tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
                ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
            }
            if (xPercent || yPercent) {
                temp = target.getBBox();
                tx = _round(tx + xPercent / 100 * temp.width);
                ty = _round(ty + yPercent / 100 * temp.height);
            }
            temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
            target.setAttribute("transform", temp);
            forceCSS && (target.style[_transformProp] = temp);
        }, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
            var direction, pt, cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg";
            if (isString) {
                direction = endValue.split("_")[1];
                if (direction === "short") {
                    change %= cap;
                    if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
                }
                if (direction === "cw" && change < 0) change = (change + cap * CSSPlugin_bigNum) % cap - ~~(change / cap) * cap; else if (direction === "ccw" && change > 0) change = (change - cap * CSSPlugin_bigNum) % cap - ~~(change / cap) * cap;
            }
            plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
            pt.e = finalValue;
            pt.u = "deg";
            plugin._props.push(property);
            return pt;
        }, _assign = function _assign(target, source) {
            for (var p in source) target[p] = source[p];
            return target;
        }, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
            var endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit, startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style;
            if (startCache.svg) {
                startValue = target.getAttribute("transform");
                target.setAttribute("transform", "");
                style[_transformProp] = transforms;
                endCache = _parseTransform(target, 1);
                _removeProperty(target, _transformProp);
                target.setAttribute("transform", startValue);
            } else {
                startValue = getComputedStyle(target)[_transformProp];
                style[_transformProp] = transforms;
                endCache = _parseTransform(target, 1);
                style[_transformProp] = startValue;
            }
            for (p in _transformProps) {
                startValue = startCache[p];
                endValue = endCache[p];
                if (startValue !== endValue && exclude.indexOf(p) < 0) {
                    startUnit = getUnit(startValue);
                    endUnit = getUnit(endValue);
                    startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
                    endNum = parseFloat(endValue);
                    plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
                    plugin._pt.u = endUnit || 0;
                    plugin._props.push(p);
                }
            }
            _assign(endCache, startCache);
        };
        _forEachName("padding,margin,Width,Radius", (function(name, index) {
            var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [ t, r, b, l ] : [ t + l, t + r, b + r, b + l ]).map((function(side) {
                return index < 2 ? name + side : "border" + side + name;
            }));
            _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
                var a, vars;
                if (arguments.length < 4) {
                    a = props.map((function(prop) {
                        return _get(plugin, prop, property);
                    }));
                    vars = a.join(" ");
                    return vars.split(a[0]).length === 5 ? a[0] : vars;
                }
                a = (endValue + "").split(" ");
                vars = {};
                props.forEach((function(prop, i) {
                    return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
                }));
                plugin.init(target, vars, tween);
            };
        }));
        var CSSPlugin = {
            name: "css",
            register: _initCore,
            targetTest: function targetTest(target) {
                return target.style && target.nodeType;
            },
            init: function init(target, vars, tween, index, targets) {
                var startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, props = this._props, style = target.style, startAt = tween.vars.startAt;
                _pluginInitted || _initCore();
                this.styles = this.styles || _getStyleSaver(target);
                inlineProps = this.styles.props;
                this.tween = tween;
                for (p in vars) {
                    if (p === "autoRound") continue;
                    endValue = vars[p];
                    if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
                    type = typeof endValue;
                    specialProp = _specialProps[p];
                    if (type === "function") {
                        endValue = endValue.call(tween, index, target, targets);
                        type = typeof endValue;
                    }
                    if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
                    if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1); else if (p.substr(0, 2) === "--") {
                        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                        endValue += "";
                        _colorExp.lastIndex = 0;
                        if (!_colorExp.test(startValue)) {
                            startUnit = getUnit(startValue);
                            endUnit = getUnit(endValue);
                        }
                        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                        props.push(p);
                        inlineProps.push(p, 0, style[p]);
                    } else if (type !== "undefined") {
                        if (startAt && p in startAt) {
                            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
                        } else startValue = _get(target, p);
                        startNum = parseFloat(startValue);
                        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                        relative && (endValue = endValue.substr(2));
                        endNum = parseFloat(endValue);
                        if (p in _propertyAliases) {
                            if (p === "autoAlpha") {
                                if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
                                inlineProps.push("visibility", 0, style.visibility);
                                _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                            }
                            if (p !== "scale" && p !== "transform") {
                                p = _propertyAliases[p];
                                ~p.indexOf(",") && (p = p.split(",")[0]);
                            }
                        }
                        isTransformRelated = p in _transformProps;
                        if (isTransformRelated) {
                            this.styles.save(p);
                            if (!transformPropTween) {
                                cache = target._gsap;
                                cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                                smooth = vars.smoothOrigin !== false && cache.smooth;
                                transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                                transformPropTween.dep = 1;
                            }
                            if (p === "scale") {
                                this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                                this._pt.u = 0;
                                props.push("scaleY", p);
                                p += "X";
                            } else if (p === "transformOrigin") {
                                inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                                endValue = _convertKeywordsToPercentages(endValue);
                                if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this); else {
                                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                                }
                                continue;
                            } else if (p === "svgOrigin") {
                                _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                                continue;
                            } else if (p in _rotationalProperties) {
                                _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                                continue;
                            } else if (p === "smoothOrigin") {
                                _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                                continue;
                            } else if (p === "force3D") {
                                cache[p] = endValue;
                                continue;
                            } else if (p === "transform") {
                                _addRawTransformPTs(this, endValue, target);
                                continue;
                            }
                        } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                            startUnit = (startValue + "").substr((startNum + "").length);
                            endNum || (endNum = 0);
                            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                            this._pt.u = endUnit || 0;
                            if (startUnit !== endUnit && endUnit !== "%") {
                                this._pt.b = startValue;
                                this._pt.r = _renderCSSPropWithBeginning;
                            }
                        } else if (!(p in style)) {
                            if (p in target) this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets); else if (p !== "parseTransform") {
                                _missingPlugin(p, endValue);
                                continue;
                            }
                        } else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                        props.push(p);
                    }
                }
                hasPriority && _sortPropTweensByPriority(this);
            },
            render: function render(ratio, data) {
                if (data.tween._time || !CSSPlugin_reverting()) {
                    var pt = data._pt;
                    while (pt) {
                        pt.r(ratio, pt.d);
                        pt = pt._next;
                    }
                } else data.styles.revert();
            },
            get: _get,
            aliases: _propertyAliases,
            getSetter: function getSetter(target, property, plugin) {
                var p = _propertyAliases[property];
                p && p.indexOf(",") < 0 && (property = p);
                return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
            },
            core: {
                _removeProperty,
                _getMatrix
            }
        };
        gsap.utils.checkPrefix = _checkPropPrefix;
        gsap.core.getStyleSaver = _getStyleSaver;
        (function(positionAndScale, rotation, others, aliases) {
            var all = _forEachName(positionAndScale + "," + rotation + "," + others, (function(name) {
                _transformProps[name] = 1;
            }));
            _forEachName(rotation, (function(name) {
                _config.units[name] = "deg";
                _rotationalProperties[name] = 1;
            }));
            _propertyAliases[all[13]] = positionAndScale + "," + rotation;
            _forEachName(aliases, (function(name) {
                var split = name.split(":");
                _propertyAliases[split[1]] = all[split[0]];
            }));
        })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
        _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(name) {
            _config.units[name] = "px";
        }));
        gsap.registerPlugin(CSSPlugin);
        var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
        gsapWithCSS.core.Tween;
        var ScrollTrigger_min = __webpack_require__(368);
        var ScrollSmoother_min = __webpack_require__(972);
        gsapWithCSS.registerPlugin(ScrollTrigger_min.ScrollTrigger, ScrollSmoother_min.ScrollSmoother);
        function init() {
            if (ScrollTrigger_min.ScrollTrigger.isTouch !== 1) {
                ScrollSmoother_min.ScrollSmoother.create({
                    wrapper: ".wrapper",
                    content: ".content",
                    smooth: 1.2,
                    effects: true
                });
                const timeline = gsapWithCSS.timeline({
                    defaults: {
                        opacity: 0,
                        ease: "ease-in"
                    }
                });
                timeline.from(".hero__title", {
                    y: 50,
                    duration: .5
                }, "<").from(".hero__text", {
                    y: 50,
                    duration: .5
                }).from(".hero__btn", {
                    y: 50,
                    duration: .5
                }).from(".hero__list > li", {
                    x: -600,
                    stagger: .1,
                    duration: 1
                }, "-=0.5");
                gsapWithCSS.fromTo(".hero", {
                    opacity: 1
                }, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: ".hero",
                        start: "200",
                        end: "bottom",
                        scrub: true
                    }
                });
                gsapWithCSS.fromTo(".info__content_1", {
                    y: 100,
                    opacity: 0
                }, {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".info__content_1",
                        start: "-900",
                        end: "-300",
                        scrub: true
                    }
                });
                gsapWithCSS.fromTo(".info__content_2", {
                    y: 100,
                    opacity: 0
                }, {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".info__content_2",
                        start: "-900",
                        end: "-300",
                        scrub: true
                    }
                });
                gsapWithCSS.fromTo(".info__content_3", {
                    y: 100,
                    opacity: 0
                }, {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".info__content_3",
                        start: "-900",
                        end: "-300",
                        scrub: true
                    }
                });
                gsapWithCSS.fromTo(".numbers", {
                    y: 100,
                    opacity: 0
                }, {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".numbers",
                        start: "-900",
                        end: "-300",
                        scrub: true
                    }
                });
                gsapWithCSS.fromTo(".info__image_player ", {
                    x: 100,
                    opacity: 0
                }, {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: ".info__image_player  ",
                        start: "-900",
                        end: "-100",
                        scrub: true
                    }
                });
                gsapWithCSS.fromTo(".info__image_3 ", {
                    x: 100,
                    opacity: 0
                }, {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: ".info__image_3  ",
                        start: "-900",
                        end: "-100",
                        scrub: true
                    }
                });
                gsapWithCSS.fromTo(".info__image_2", {
                    x: -100,
                    opacity: 0
                }, {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: ".info__image_2",
                        start: "-900",
                        end: "-100",
                        scrub: true
                    }
                });
            }
        }
        window.addEventListener("load", (function(event) {
            init();
        }));
        const parentContainer = document.querySelectorAll(".readmore");
        if (parentContainer) for (const element of parentContainer) element.addEventListener("click", (event => {
            const current = event.target;
            const isReadMoreBtn = current.className.includes("readmore__dots");
            if (!isReadMoreBtn) return;
            const currentText = event.target.parentNode.querySelector(".readmore__text");
            current.classList.toggle("readmore__button_active");
            element.classList.add("readmore_active");
            currentText.classList.toggle("readmore__text_show");
            current.textContent = current.textContent.includes("Весь отзыв") ? false || "дочитать" : "Весь отзыв";
        }));
        const script_showMore = document.querySelector(".answers__btn");
        if (script_showMore) {
            const spollersLength = document.querySelectorAll(".answers__item ").length;
            let items = 3;
            script_showMore.addEventListener("click", (() => {
                console.log("clicked");
                items += 2;
                const array = Array.from(document.querySelector(".answers__items").children);
                const visItems = array.slice(0, items);
                visItems.forEach((element => {
                    element.classList.add("is-visible");
                }));
                if (visItems.length == spollersLength) script_showMore.style.display = "none";
            }));
        }
        window["FLS"] = false;
        isWebp();
        addLoadedClass();
        menuInit();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
        pageNavigation();
        digitsCounter();
    })();
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 15314, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(198216),
        o = e.i(272043);
    e.s(["default", 0, e => (0, t.jsx)("div", {
        className: (0, o.default)(r.default.fullBleedGrid, e.className),
        "data-testid": "full-bleed-grid",
        style: {
            "--max-content-width": e.maxContentWidth ? `${e.maxContentWidth}px` : "1400px",
            ...e.style
        },
        children: e.children
    })])
}, 681845, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        o = e.i(399430);
    let n = {
        default: {
            backgroundColor: o.colorWhite,
            textColor: o.colorBlack,
            navHeaderTheme: "default",
            promoPillBgColor: o.colorWhite
        },
        blackBg: {
            backgroundColor: o.colorBlack,
            textColor: o.colorWhite,
            navHeaderTheme: "onBlack",
            promoPillBgColor: o.colorBlack
        },
        whiteBg: {
            backgroundColor: o.colorWhite,
            textColor: o.colorBlack,
            navHeaderTheme: "onWhite",
            promoPillBgColor: o.colorWhite
        },
        fallReleaseHero: {
            backgroundColor: o.colorWhite,
            textColor: o.colorBlack,
            navHeaderTheme: "onGreen",
            promoPillBgColor: o.colorCashGreen
        },
        greenBg: {
            backgroundColor: o.colorCashGreen,
            textColor: o.colorBlack,
            navHeaderTheme: "onGreen",
            promoPillBgColor: o.colorCashGreen
        }
    };
    var l = e.i(239378);
    let a = (0, r.createContext)(void 0);
    e.s(["ThemeProvider", 0, e => {
        let {
            children: o,
            defaultTheme: i = "default",
            customColors: c = {}
        } = e, [s, u] = (0, r.useState)(i), [f, d] = (0, r.useState)(c || {}), p = (0, r.useMemo)(() => ({ ...n[s] || {}
        }), [s]), m = (0, r.useMemo)(() => ({ ...p,
            ...f
        }), [f, p]), y = (0, r.useMemo)(() => ({
            name: s,
            colors: m
        }), [s, m]), h = (0, r.useCallback)(e => {
            u(e)
        }, []), g = (0, r.useCallback)(e => {
            d(t => ({ ...t,
                ...e
            }))
        }, []), _ = (0, r.useCallback)(e => {
            let t = {};
            return Object.keys(e || {}).forEach(r => {
                "string" == typeof e[r] && (t[(0, l.default)(r)] = e[r])
            }), t
        }, []), v = (0, r.useMemo)(() => ({
            theme: y,
            setTheme: h,
            updateColors: g,
            applyTheme: _
        }), [y, h, g, _]);
        return (0, t.jsx)(a.Provider, {
            value: v,
            children: o
        })
    }, "useTheme", 0, () => {
        let e = (0, r.useContext)(a);
        if (!e) throw Error("useTheme must be used within a ThemeProvider");
        return e
    }], 681845)
}, 495302, e => {
    e.v({
        disclaimerBody: "typograhy-module-sass-module__c_dKMG__disclaimerBody",
        homeFallReleasePage: "typograhy-module-sass-module__c_dKMG__homeFallReleasePage"
    })
}, 8213, e => {
    e.v({
        cardSection: "fall-release-footer-section-module-sass-module__zADGta__cardSection",
        container: "fall-release-footer-section-module-sass-module__zADGta__container",
        disclaimerBody: "fall-release-footer-section-module-sass-module__zADGta__disclaimerBody",
        disclaimerSection: "fall-release-footer-section-module-sass-module__zADGta__disclaimerSection",
        footer: "fall-release-footer-section-module-sass-module__zADGta__footer",
        footerHeroSection: "fall-release-footer-section-module-sass-module__zADGta__footerHeroSection",
        headline: "fall-release-footer-section-module-sass-module__zADGta__headline",
        homeFallReleasePage: "fall-release-footer-section-module-sass-module__zADGta__homeFallReleasePage",
        learnMoreSection: "fall-release-footer-section-module-sass-module__zADGta__learnMoreSection",
        linksSection: "fall-release-footer-section-module-sass-module__zADGta__linksSection",
        secondaryContactInfoOnDesktop: "fall-release-footer-section-module-sass-module__zADGta__secondaryContactInfoOnDesktop",
        secondaryContactInfoOnMobileAndTablet: "fall-release-footer-section-module-sass-module__zADGta__secondaryContactInfoOnMobileAndTablet",
        socialLinksOnDesktop: "fall-release-footer-section-module-sass-module__zADGta__socialLinksOnDesktop",
        socialLinksOnMobile: "fall-release-footer-section-module-sass-module__zADGta__socialLinksOnMobile",
        textSection: "fall-release-footer-section-module-sass-module__zADGta__textSection"
    })
}, 501199, e => {
    e.v({
        description: "footer-text-card-module-sass-module__IdH9zq__description",
        disclaimerBody: "footer-text-card-module-sass-module__IdH9zq__disclaimerBody",
        footerTextCard: "footer-text-card-module-sass-module__IdH9zq__footerTextCard",
        homeFallReleasePage: "footer-text-card-module-sass-module__IdH9zq__homeFallReleasePage",
        linkWrapper: "footer-text-card-module-sass-module__IdH9zq__linkWrapper",
        title: "footer-text-card-module-sass-module__IdH9zq__title",
        withBorder: "footer-text-card-module-sass-module__IdH9zq__withBorder"
    })
}, 579613, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        o = e.i(8213),
        n = e.i(358304),
        l = e.i(645350),
        a = e.i(51517),
        i = e.i(453992),
        c = e.i(197199),
        s = e.i(348151),
        u = e.i(681845),
        f = e.i(41158),
        d = e.i(501199),
        p = e.i(272043);
    let m = e => {
            let {
                title: r,
                description: o,
                href: n,
                backgroundColor: l,
                ...a
            } = e, i = (0, p.default)(d.default.footerTextCard, {
                [d.default.withBorder]: !l
            }), c = (0, t.jsxs)("div", {
                className: i,
                style: {
                    "--text-color": e.textColor || "currentColor",
                    backgroundColor: l || "transparent"
                },
                ...a,
                children: [(0, t.jsx)("h3", {
                    className: d.default.title,
                    children: r
                }), (0, t.jsx)("p", {
                    className: d.default.description,
                    children: o
                })]
            });
            return n ? (0, t.jsx)(f.default, {
                href: n,
                className: d.default.linkWrapper,
                children: c
            }) : c
        },
        y = a.linkAnalyticsIdentifier.FOOTER_LINK;
    e.s(["default", 0, e => {
        let a = r.default.useRef(null),
            {
                setTheme: f
            } = (0, u.useTheme)();
        (0, r.useEffect)(() => {
            if (!a.current) return;
            let e = a.current,
                t = new IntersectionObserver(e => {
                    let t = e[0],
                        r = window.innerHeight;
                    t.boundingClientRect.top < r && f("blackBg")
                }, {
                    root: null,
                    rootMargin: "-50%",
                    threshold: [0, .1, .5, .75, 1]
                });
            return t.observe(e), () => {
                e && t.unobserve(e)
            }
        }, [a, f]);
        let d = r => (0, t.jsx)("div", {
                className: r,
                children: e.socialLinks.links.map(e => (0, t.jsx)(l.default, {
                    href: e.href,
                    target: "_blank",
                    rel: ["noopener", "noreferrer"],
                    analyticsIdentifier: y,
                    children: (0, t.jsx)(i.default, {
                        name: e.iconKey
                    })
                }, e.title))
            }),
            p = r => e.secondaryContactInfo ? (0, t.jsx)("div", {
                className: r,
                children: (0, t.jsx)(c.default, { ...e.secondaryContactInfo
                })
            }) : null;
        return (0, t.jsx)("footer", {
            className: o.default.footer,
            "data-testid": "fall-release-footer-section",
            ref: a,
            "data-scroll-section": !0,
            "data-identifier": "footer",
            children: (0, t.jsxs)("div", {
                className: o.default.container,
                children: [(0, t.jsxs)("div", {
                    className: o.default.footerHeroSection,
                    children: [e ? .headline && (0, t.jsx)("div", {
                        className: o.default.headline,
                        children: e.headline
                    }), e ? .cards && (0, t.jsx)("div", {
                        className: o.default.cardSection,
                        children: e.cards.map((e, r) => (0, t.jsx)(m, { ...e
                        }, `footer_card_${r}`))
                    })]
                }), (0, t.jsxs)("div", {
                    className: o.default.textSection,
                    children: [(0, t.jsx)("div", {
                        className: o.default.primaryContactInfo,
                        children: (0, t.jsx)(c.default, { ...e.contactInfo
                        })
                    }), p(o.default.secondaryContactInfoOnMobileAndTablet)]
                }), p(o.default.secondaryContactInfoOnDesktop), (0, t.jsxs)("div", {
                    className: o.default.linksSection,
                    children: [(0, t.jsxs)("div", {
                        className: o.default.learnMoreSection,
                        children: [e.learnMoreLinks.links.map(e => (0, t.jsx)(l.default, {
                            href: e.href,
                            target: "_blank",
                            analyticsIdentifier: y,
                            rel: ["noopener", "noreferrer"],
                            children: e.title
                        }, e.title)), e.showCookiePreferencesLink && (0, t.jsx)(s.default, {})]
                    }), d(o.default.socialLinksOnMobile)]
                }), d(o.default.socialLinksOnDesktop), (0, t.jsx)("div", {
                    className: o.default.disclaimerSection,
                    children: e.disclaimers && e.disclaimers.map((e, t) => (0, r.createElement)(n.default, { ...e,
                        format: "gallery",
                        key: `disclaimer_${t}`
                    }))
                })]
            })
        })
    }], 579613)
}, 24324, e => {
    e.v({
        backgroundVideo: "background-video-module-sass-module__cXTqMG__backgroundVideo",
        bottomLeft: "background-video-module-sass-module__cXTqMG__bottomLeft",
        bottomRight: "background-video-module-sass-module__cXTqMG__bottomRight",
        bottomRightWithMargin: "background-video-module-sass-module__cXTqMG__bottomRightWithMargin",
        controlStyleTransparentDark: "background-video-module-sass-module__cXTqMG__controlStyleTransparentDark",
        playPauseButton: "background-video-module-sass-module__cXTqMG__playPauseButton",
        playPauseButtonContainer: "background-video-module-sass-module__cXTqMG__playPauseButtonContainer",
        playPauseIcon: "background-video-module-sass-module__cXTqMG__playPauseIcon"
    })
}, 227452, 660926, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788);
    let o = "(prefers-reduced-motion: no-preference)",
        n = function() {
            let [e, t] = (0, r.useState)(!0);
            return (0, r.useEffect)(() => {
                let e = window.matchMedia(o);
                t(!window.matchMedia(o).matches);
                let r = e => {
                    t(!e.matches)
                };
                return e.addEventListener("change", r), () => {
                    e.removeEventListener("change", r)
                }
            }, []), e
        };
    e.s(["default", 0, n], 660926);
    var l = e.i(774195);
    let a = e => {
        let {
            shouldPauseIfNavOpen: o,
            shouldPlay: n,
            sources: a,
            controls: i,
            shouldAutoplayIfPossible: c,
            lazy: s,
            placeholderImage: u,
            shouldPlaySound: f = !1
        } = e, d = (0, r.useRef)(null), [p] = (0, l.default)(), [m, y] = (0, r.useState)(null), h = e => {
            !e.paused && e.readyState > e.HAVE_CURRENT_DATA && e.pause()
        }, g = e => {
            e.paused && e.readyState > e.HAVE_CURRENT_DATA && e.play()
        };
        return (0, r.useEffect)(() => {
            o && (p ? h(d.current) : g(d.current))
        }, [p, d, o]), (0, r.useEffect)(() => {
            null !== n && (n ? g(d.current) : h(d.current))
        }, [n, d]), (0, r.useEffect)(() => {
            d.current && (d.current.muted = !f)
        }, [f, d]), (0, r.useEffect)(() => {
            let e;
            return a.length > 0 ? e = a.map(e => {
                let t = window.matchMedia(`(${e.mediaQuery})`),
                    r = t => {
                        t.matches && y(e)
                    };
                return t.matches && y(e), t.addEventListener("change", r), {
                    query: t,
                    handler: r
                }
            }) : y(a[0]), () => {
                e.forEach(e => {
                    let {
                        query: t,
                        handler: r
                    } = e;
                    t.removeEventListener("change", r)
                })
            }
        }, [a]), (0, t.jsx)("video", {
            "data-testid": "video",
            ref: d,
            controls: i,
            ...c && !s && {
                autoPlay: !0
            },
            poster: u ? .src || null,
            preload: s ? "none" : "auto",
            muted: !!f,
            loop: !0,
            playsInline: !0,
            children: m && (0, t.jsx)("source", {
                src: m.src,
                type: m.type
            })
        })
    };
    e.i(977210);
    var i = e.i(757046),
        c = e.i(24324),
        s = e.i(272043),
        u = e.i(380336),
        f = e.i(482315);
    let d = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"%3E%3Cpath fill="%23000" d="M0 0h2v6H0zm4 0h2v6H4z"/%3E%3C/svg%3E',
        p = e => {
            let {
                className: o,
                backgroundColor: l,
                lazy: p
            } = e, m = n(), [y, h] = (0, r.useState)(m), [g, _] = (0, r.useState)(d), v = e.controlPlacement || "bottom-right", b = (0, r.useCallback)(() => {
                h(!y)
            }, [y]);
            (0, r.useEffect)(() => {
                _(y ? d : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"%3E%3Cpath fill="%23000" d="M0 0l6 3-6 3z"/%3E%3C/svg%3E')
            }, [y]), (0, r.useEffect)(() => {
                h(!m)
            }, [m]);
            let C = y ? "Pause" : "Play",
                x = (0, s.default)("", {
                    [c.default.bottomLeft]: "bottom-left" === v,
                    [c.default.bottomRight]: "bottom-right" === v,
                    [c.default.bottomRightWithMargin]: "bottom-right-with-margin" === v,
                    [c.default.controlStyleTransparentDark]: "transparent-dark" === e.controlStyle
                }),
                S = (0, f.default)(e.posterImages || []) || e.placeholderImage;
            return (0, t.jsxs)("div", {
                className: (0, s.default)(c.default.backgroundVideo, o),
                ...l ? {
                    style: {
                        backgroundColor: l
                    }
                } : {},
                children: [(0, t.jsx)(a, { ...e,
                    placeholderImage: S,
                    shouldPlay: y,
                    shouldAutoplayIfPossible: !m
                }), (0, t.jsx)(u.default, {
                    className: (0, s.default)(c.default.playPauseButtonContainer, x),
                    onClick: b,
                    "aria-label": C,
                    children: (0, t.jsx)("div", {
                        className: c.default.playPauseButton,
                        children: (0, t.jsx)(i.default, {
                            src: g,
                            alt: C,
                            lazy: p,
                            className: c.default.playPauseIcon
                        })
                    })
                })]
            })
        };
    var m = e.i(123860);
    e.s(["default", 0, e => (e => {
        switch (e.type) {
            case "image":
                return (0, t.jsx)(m.default, {
                    imageSet: e.model,
                    className: e.className || null
                });
            case "video":
                return (0, t.jsx)(p, { ...e.model,
                    controls: e.model.controls || !1,
                    controlPlacement: e.model.controlPlacement || "bottom-left",
                    className: e.className || null
                });
            default:
                return console.error(`Unsupported media type: ${e.type}`), null
        }
    })(e)], 227452)
}, 498165, e => {
    e.v({
        emptyExperimentContainer: "experiment-container-module-sass-module__cF2U9q__emptyExperimentContainer",
        fullHeight: "experiment-container-module-sass-module__cF2U9q__fullHeight"
    })
}, 534293, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        o = e.i(608547),
        n = e.i(924088),
        l = e.i(498165),
        a = e.i(272043);
    e.s(["default", 0, e => {
        let {
            experimentKey: i,
            control: c,
            variants: s,
            reserveSpaceBeforeLoad: u = !0
        } = e, f = (0, r.useContext)(o.ExperimentsContext), [d, p] = r.default.useState(null), [m, y] = r.default.useState(null);
        return ((0, r.useEffect)(() => {
            f && p(f[i] || "control")
        }, [f, i]), (0, r.useEffect)(() => {
            d && (y(s.find(e => e.name === d) ? .component || c), (0, o.logExposureEvent)(i, d || "control"))
        }, [d, c, s, i]), m) ? (0, t.jsx)(n.default, { ...m
        }) : (0, t.jsx)("div", {
            className: (0, a.default)(l.default.emptyExperimentContainer, {
                [l.default.fullHeight]: u
            })
        })
    }])
}, 630412, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(718888);
    let o = "u" > typeof document ? t.useLayoutEffect : t.useEffect,
        n = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        a = {},
        i = r.default,
        c = function(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                c = a;
            n(e) ? (c = e, e = null, r = "dependencies" in c ? c.dependencies : l) : n(r) && (r = "dependencies" in (c = r) ? c.dependencies : l), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
            let {
                scope: s,
                revertOnUpdate: u
            } = c, f = (0, t.useRef)(!1), d = (0, t.useRef)(i.context(() => {}, s)), p = (0, t.useRef)(e => d.current.add(null, e)), m = r && r.length && !u;
            return m && o(() => (f.current = !0, () => d.current.revert()), l), o(() => {
                if (e && d.current.add(e, s), !m || !f.current) return () => d.current.revert()
            }, r), {
                context: d.current,
                contextSafe: p.current
            }
        };
    c.register = e => {
        i = e
    }, c.headless = !0, e.s(["useGSAP", 0, c])
}, 367593, e => {
    "use strict";
    e.s(["getCookie", 0, e => {
        if ("u" < typeof document) return;
        let t = document ? .cookie.split("; ").find(t => t.startsWith(`${e}=`));
        if (t) return t.split(`${e}=`)[1]
    }])
}, 864931, e => {
    "use strict";
    var t, r = e.i(191788),
        o = e.i(768264),
        n = ((t = n || {}).control = "control", t.treatment = "treatment", t.null = "null", t),
        l = e.i(608547);
    let a = {
        "home-2025": {
            variant: n.control,
            experimentId: "home-fall-release-2025"
        },
        "home-fall-release-2025": {
            variant: n.treatment,
            experimentId: "home-fall-release-2025"
        }
    };

    function i(e) {
        let t = (0, o.default)();
        (0, r.useEffect)(() => {
            a[e] && (0, l.logExposureEvent)(a[e].experimentId, a[e].variant)
        }, [t, e])
    }
    e.s(["default", () => i], 864931)
}, 920955, (e, t, r) => {
    var o = {
            229: function(e) {
                var t, r, o, n = e.exports = {};

                function l() {
                    throw Error("setTimeout has not been defined")
                }

                function a() {
                    throw Error("clearTimeout has not been defined")
                }
                try {
                    t = "function" == typeof setTimeout ? setTimeout : l
                } catch (e) {
                    t = l
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    r = a
                }

                function i(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === l || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (r) {
                        try {
                            return t.call(null, e, 0)
                        } catch (r) {
                            return t.call(this, e, 0)
                        }
                    }
                }
                var c = [],
                    s = !1,
                    u = -1;

                function f() {
                    s && o && (s = !1, o.length ? c = o.concat(c) : u = -1, c.length && d())
                }

                function d() {
                    if (!s) {
                        var e = i(f);
                        s = !0;
                        for (var t = c.length; t;) {
                            for (o = c, c = []; ++u < t;) o && o[u].run();
                            u = -1, t = c.length
                        }
                        o = null, s = !1,
                            function(e) {
                                if (r === clearTimeout) return clearTimeout(e);
                                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function p(e, t) {
                    this.fun = e, this.array = t
                }

                function m() {}
                n.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    c.push(new p(e, t)), 1 !== c.length || s || i(d)
                }, p.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
                    return []
                }, n.binding = function(e) {
                    throw Error("process.binding is not supported")
                }, n.cwd = function() {
                    return "/"
                }, n.chdir = function(e) {
                    throw Error("process.chdir is not supported")
                }, n.umask = function() {
                    return 0
                }
            }
        },
        n = {};

    function l(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var r = n[e] = {
                exports: {}
            },
            a = !0;
        try {
            o[e](r, r.exports, l), a = !1
        } finally {
            a && delete n[e]
        }
        return r.exports
    }
    l.ab = "/ROOT/node_modules/next/dist/compiled/process/", t.exports = l(229)
}, 350461, (e, t, r) => {
    "use strict";
    var o, n;
    t.exports = (null == (o = e.g.process) ? void 0 : o.env) && "object" == typeof(null == (n = e.g.process) ? void 0 : n.env) ? e.g.process : e.r(920955)
}, 708481, (e, t, r) => {
    "use strict";
    var o = Symbol.for("react.transitional.element");

    function n(e, t, r) {
        var n = null;
        if (void 0 !== r && (n = "" + r), void 0 !== t.key && (n = "" + t.key), "key" in t)
            for (var l in r = {}, t) "key" !== l && (r[l] = t[l]);
        else r = t;
        return {
            $$typeof: o,
            type: e,
            key: n,
            ref: void 0 !== (t = r.ref) ? t : null,
            props: r
        }
    }
    r.Fragment = Symbol.for("react.fragment"), r.jsx = n, r.jsxs = n
}, 391398, (e, t, r) => {
    "use strict";
    t.exports = e.r(708481)
}, 361556, (e, t, r) => {
    "use strict";
    var o = e.i(350461),
        n = Symbol.for("react.transitional.element"),
        l = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        s = Symbol.for("react.consumer"),
        u = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        m = Symbol.for("react.lazy"),
        y = Symbol.for("react.activity"),
        h = Symbol.iterator,
        g = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        _ = Object.assign,
        v = {};

    function b(e, t, r) {
        this.props = e, this.context = t, this.refs = v, this.updater = r || g
    }

    function C() {}

    function x(e, t, r) {
        this.props = e, this.context = t, this.refs = v, this.updater = r || g
    }
    b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, C.prototype = b.prototype;
    var S = x.prototype = new C;
    S.constructor = x, _(S, b.prototype), S.isPureReactComponent = !0;
    var E = Array.isArray;

    function k() {}
    var w = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        j = Object.prototype.hasOwnProperty;

    function O(e, t, r) {
        var o = r.ref;
        return {
            $$typeof: n,
            type: e,
            key: t,
            ref: void 0 !== o ? o : null,
            props: r
        }
    }

    function P(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
    }
    var T = /\/+/g;

    function M(e, t) {
        var r, o;
        return "object" == typeof e && null !== e && null != e.key ? (r = "" + e.key, o = {
            "=": "=0",
            ":": "=2"
        }, "$" + r.replace(/[=:]/g, function(e) {
            return o[e]
        })) : t.toString(36)
    }

    function A(e, t, r) {
        if (null == e) return e;
        var o = [],
            a = 0;
        return ! function e(t, r, o, a, i) {
            var c, s, u, f = typeof t;
            ("undefined" === f || "boolean" === f) && (t = null);
            var d = !1;
            if (null === t) d = !0;
            else switch (f) {
                case "bigint":
                case "string":
                case "number":
                    d = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case n:
                        case l:
                            d = !0;
                            break;
                        case m:
                            return e((d = t._init)(t._payload), r, o, a, i)
                    }
            }
            if (d) return i = i(t), d = "" === a ? "." + M(t, 0) : a, E(i) ? (o = "", null != d && (o = d.replace(T, "$&/") + "/"), e(i, r, o, "", function(e) {
                return e
            })) : null != i && (P(i) && (c = i, s = o + (null == i.key || t && t.key === i.key ? "" : ("" + i.key).replace(T, "$&/") + "/") + d, i = O(c.type, s, c.props)), r.push(i)), 1;
            d = 0;
            var p = "" === a ? "." : a + ":";
            if (E(t))
                for (var y = 0; y < t.length; y++) f = p + M(a = t[y], y), d += e(a, r, o, f, i);
            else if ("function" == typeof(y = null === (u = t) || "object" != typeof u ? null : "function" == typeof(u = h && u[h] || u["@@iterator"]) ? u : null))
                for (t = y.call(t), y = 0; !(a = t.next()).done;) f = p + M(a = a.value, y++), d += e(a, r, o, f, i);
            else if ("object" === f) {
                if ("function" == typeof t.then) return e(function(e) {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            switch ("string" == typeof e.status ? e.then(k, k) : (e.status = "pending", e.then(function(t) {
                                "pending" === e.status && (e.status = "fulfilled", e.value = t)
                            }, function(t) {
                                "pending" === e.status && (e.status = "rejected", e.reason = t)
                            })), e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason
                            }
                    }
                    throw e
                }(t), r, o, a, i);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (r = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.")
            }
            return d
        }(e, o, "", "", function(e) {
            return t.call(r, e, a++)
        }), o
    }

    function R(e) {
        if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
            }, function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
            }), -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.default;
        throw e._result
    }
    var B = "function" == typeof reportError ? reportError : function(e) {
        if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if ("object" == typeof o.default && "function" == typeof o.default.emit) return void o.default.emit("uncaughtException", e);
        console.error(e)
    };
    r.Activity = y, r.Children = {
        map: A,
        forEach: function(e, t, r) {
            A(e, function() {
                t.apply(this, arguments)
            }, r)
        },
        count: function(e) {
            var t = 0;
            return A(e, function() {
                t++
            }), t
        },
        toArray: function(e) {
            return A(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    }, r.Component = b, r.Fragment = a, r.Profiler = c, r.PureComponent = x, r.StrictMode = i, r.Suspense = d, r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return w.H.useMemoCache(e)
        }
    }, r.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }, r.cacheSignal = function() {
        return null
    }, r.cloneElement = function(e, t, r) {
        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
        var o = _({}, e.props),
            n = e.key;
        if (null != t)
            for (l in void 0 !== t.key && (n = "" + t.key), t) j.call(t, l) && "key" !== l && "__self" !== l && "__source" !== l && ("ref" !== l || void 0 !== t.ref) && (o[l] = t[l]);
        var l = arguments.length - 2;
        if (1 === l) o.children = r;
        else if (1 < l) {
            for (var a = Array(l), i = 0; i < l; i++) a[i] = arguments[i + 2];
            o.children = a
        }
        return O(e.type, n, o)
    }, r.createContext = function(e) {
        return (e = {
            $$typeof: u,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = e, e.Consumer = {
            $$typeof: s,
            _context: e
        }, e
    }, r.createElement = function(e, t, r) {
        var o, n = {},
            l = null;
        if (null != t)
            for (o in void 0 !== t.key && (l = "" + t.key), t) j.call(t, o) && "key" !== o && "__self" !== o && "__source" !== o && (n[o] = t[o]);
        var a = arguments.length - 2;
        if (1 === a) n.children = r;
        else if (1 < a) {
            for (var i = Array(a), c = 0; c < a; c++) i[c] = arguments[c + 2];
            n.children = i
        }
        if (e && e.defaultProps)
            for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return O(e, l, n)
    }, r.createRef = function() {
        return {
            current: null
        }
    }, r.forwardRef = function(e) {
        return {
            $$typeof: f,
            render: e
        }
    }, r.isValidElement = P, r.lazy = function(e) {
        return {
            $$typeof: m,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: R
        }
    }, r.memo = function(e, t) {
        return {
            $$typeof: p,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, r.startTransition = function(e) {
        var t = w.T,
            r = {};
        w.T = r;
        try {
            var o = e(),
                n = w.S;
            null !== n && n(r, o), "object" == typeof o && null !== o && "function" == typeof o.then && o.then(k, B)
        } catch (e) {
            B(e)
        } finally {
            null !== t && null !== r.types && (t.types = r.types), w.T = t
        }
    }, r.unstable_useCacheRefresh = function() {
        return w.H.useCacheRefresh()
    }, r.use = function(e) {
        return w.H.use(e)
    }, r.useActionState = function(e, t, r) {
        return w.H.useActionState(e, t, r)
    }, r.useCallback = function(e, t) {
        return w.H.useCallback(e, t)
    }, r.useContext = function(e) {
        return w.H.useContext(e)
    }, r.useDebugValue = function() {}, r.useDeferredValue = function(e, t) {
        return w.H.useDeferredValue(e, t)
    }, r.useEffect = function(e, t) {
        return w.H.useEffect(e, t)
    }, r.useEffectEvent = function(e) {
        return w.H.useEffectEvent(e)
    }, r.useId = function() {
        return w.H.useId()
    }, r.useImperativeHandle = function(e, t, r) {
        return w.H.useImperativeHandle(e, t, r)
    }, r.useInsertionEffect = function(e, t) {
        return w.H.useInsertionEffect(e, t)
    }, r.useLayoutEffect = function(e, t) {
        return w.H.useLayoutEffect(e, t)
    }, r.useMemo = function(e, t) {
        return w.H.useMemo(e, t)
    }, r.useOptimistic = function(e, t) {
        return w.H.useOptimistic(e, t)
    }, r.useReducer = function(e, t, r) {
        return w.H.useReducer(e, t, r)
    }, r.useRef = function(e) {
        return w.H.useRef(e)
    }, r.useState = function(e) {
        return w.H.useState(e)
    }, r.useSyncExternalStore = function(e, t, r) {
        return w.H.useSyncExternalStore(e, t, r)
    }, r.useTransition = function() {
        return w.H.useTransition()
    }, r.version = "19.2.3"
}, 191788, (e, t, r) => {
    "use strict";
    t.exports = e.r(361556)
}, 741705, (e, t, r) => {
    "use strict";
    r._ = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, 713584, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HeadManagerContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e.r(741705)._(e.r(191788)).default.createContext({})
}, 894470, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e => {}
}, 952456, (e, t, r) => {
    "use strict";

    function o(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            r = new WeakMap;
        return (o = function(e) {
            return e ? r : t
        })(e)
    }
    r._ = function(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var r = o(t);
        if (r && r.has(e)) return r.get(e);
        var n = {
                __proto__: null
            },
            l = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                var i = l ? Object.getOwnPropertyDescriptor(e, a) : null;
                i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
            }
        return n.default = e, r && r.set(e, n), n
    }
}, 394941, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let o = e.r(191788),
        n = "u" < typeof window,
        l = n ? () => {} : o.useLayoutEffect,
        a = n ? () => {} : o.useEffect;

    function i(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function i() {
            if (t && t.mountedInstances) {
                let e = o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), i()), l(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), l(() => (t && (t._pendingUpdate = i), () => {
            t && (t._pendingUpdate = i)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 280963, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return y
        },
        defaultHead: function() {
            return f
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let l = e.r(741705),
        a = e.r(952456),
        i = e.r(391398),
        c = a._(e.r(191788)),
        s = l._(e.r(394941)),
        u = e.r(713584);

    function f() {
        return [(0, i.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, i.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function d(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === c.default.Fragment ? e.concat(c.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(894470);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e) {
        let t, r, o, n;
        return e.reduce(d, []).reverse().concat(f().reverse()).filter((t = new Set, r = new Set, o = new Set, n = {}, e => {
            let l = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? l = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? l = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) o.has(r) ? l = !1 : o.add(r);
                            else {
                                let t = e.props[r],
                                    o = n[r] || new Set;
                                ("name" !== r || !a) && o.has(t) ? l = !1 : (o.add(t), n[r] = o)
                            }
                    }
            }
            return l
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return c.default.cloneElement(e, {
                key: r
            })
        })
    }
    let y = function(e) {
        let {
            children: t
        } = e, r = (0, c.useContext)(u.HeadManagerContext);
        return (0, i.jsx)(s.default, {
            reduceComponentsToState: m,
            headManager: r,
            children: t
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 17431, (e, t, r) => {
    "use strict";
    var o = e.r(191788);

    function n(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function l() {}
    var a = {
            d: {
                f: l,
                r: function() {
                    throw Error(n(522))
                },
                D: l,
                C: l,
                L: l,
                m: l,
                X: l,
                S: l,
                M: l
            },
            p: 0,
            findDOMNode: null
        },
        i = Symbol.for("react.portal"),
        c = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function s(e, t) {
        return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
    }
    r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, r.createPortal = function(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(n(299));
        return function(e, t, r) {
            var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: i,
                key: null == o ? null : "" + o,
                children: e,
                containerInfo: t,
                implementation: r
            }
        }(e, t, null, r)
    }, r.flushSync = function(e) {
        var t = c.T,
            r = a.p;
        try {
            if (c.T = null, a.p = 2, e) return e()
        } finally {
            c.T = t, a.p = r, a.d.f()
        }
    }, r.preconnect = function(e, t) {
        "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, a.d.C(e, t))
    }, r.prefetchDNS = function(e) {
        "string" == typeof e && a.d.D(e)
    }, r.preinit = function(e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
            var r = t.as,
                o = s(r, t.crossOrigin),
                n = "string" == typeof t.integrity ? t.integrity : void 0,
                l = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
            "style" === r ? a.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                crossOrigin: o,
                integrity: n,
                fetchPriority: l
            }) : "script" === r && a.d.X(e, {
                crossOrigin: o,
                integrity: n,
                fetchPriority: l,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0
            })
        }
    }, r.preinitModule = function(e, t) {
        if ("string" == typeof e)
            if ("object" == typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                    var r = s(t.as, t.crossOrigin);
                    a.d.M(e, {
                        crossOrigin: r,
                        integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                        nonce: "string" == typeof t.nonce ? t.nonce : void 0
                    })
                }
            } else null == t && a.d.M(e)
    }, r.preload = function(e, t) {
        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
            var r = t.as,
                o = s(r, t.crossOrigin);
            a.d.L(e, r, {
                crossOrigin: o,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                type: "string" == typeof t.type ? t.type : void 0,
                fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" == typeof t.media ? t.media : void 0
            })
        }
    }, r.preloadModule = function(e, t) {
        if ("string" == typeof e)
            if (t) {
                var r = s(t.as, t.crossOrigin);
                a.d.m(e, {
                    as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                    crossOrigin: r,
                    integrity: "string" == typeof t.integrity ? t.integrity : void 0
                })
            } else a.d.m(e)
    }, r.requestFormReset = function(e) {
        a.d.r(e)
    }, r.unstable_batchedUpdates = function(e, t) {
        return e(t)
    }, r.useFormState = function(e, t, r) {
        return c.H.useFormState(e, t, r)
    }, r.useFormStatus = function() {
        return c.H.useHostTransitionStatus()
    }, r.version = "19.2.3"
}, 730943, (e, t, r) => {
    "use strict";
    ! function e() {
        if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
            console.error(e)
        }
    }(), t.exports = e.r(17431)
}, 272043, (e, t, r) => {
    ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function o() {
            for (var e = "", t = 0; t < arguments.length; t++) {
                var l = arguments[t];
                l && (e = n(e, function(e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return o.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var l in e) r.call(e, l) && e[l] && (t = n(t, l));
                    return t
                }(l)))
            }
            return e
        }

        function n(e, t) {
            return t ? e ? e + " " + t : e + t : e
        }
        if (t.exports) o.default = o, t.exports = o;
        else if ("function" == typeof define && "object" == typeof define.amd && define.amd) void 0 !== o && e.v(o);
        else window.classNames = o
    }()
}, 399430, e => {
    "use strict";
    e.s(["colorBackgroundGreen", 0, "#00b840", "colorBankingAccent", 0, "#C91963", "colorBankingAccentSecondary", 0, "#E0B2FF", "colorBankingMagenta", 0, "#B800B8", "colorBitcoinAccent", 0, "#295BEE", "colorBitcoinAccentSecondary", 0, "#3AD8F4", "colorBitcoinBlue", 0, "#2445E6", "colorBlack", 0, "#000000", "colorCardPurplePink", 0, "#E348CB", "colorCashGreen", 0, "#00E013", "colorCashGreenGallery", 0, "#00e013", "colorCashGreenWcagAaa", 0, "#005620", "colorCashGreenWcagAaaDarkened", 0, "#00511e", "colorEyeballGreen", 0, "#00D54B", "colorFamiliesAccent", 0, "#FF03B1", "colorFamiliesPink", 0, "#2253B5", "colorGiftCardsPurple", 0, "#4B09E7", "colorGray23", 0, "#4B4B4B", "colorGray25", 0, "#666666", "colorGray45", 0, "#747171", "colorGray90", 0, "#E5E5E5", "colorGray91", 0, "#E9E6E0", "colorGray93", 0, "#EEEEEE", "colorGray95", 0, "#F4F4F4", "colorGray96", 0, "#F8F8F8", "colorGray98", 0, "#FAFAFA", "colorLogoGreen", 0, "#00D632", "colorPresaleGreen", 0, "#01D74F", "colorPresalePurple", 0, "#5420C2", "colorSecurityGreen", 0, "#61D361", "colorSendAccent", 0, "#028088", "colorSendAccentSecondary", 0, "#00F6F8", "colorSendPurple", 0, "#5300E8", "colorSpendAccent", 0, "#A222C6", "colorSpendAccentSecondary", 0, "#FFA5D8", "colorSpendViolet", 0, "#9A20D6", "colorStocksAccent", 0, "#5C2FA0", "colorStocksAccentSecondary", 0, "#F6ABFF", "colorStocksBlue", 0, "#5D00E8", "colorTaxesAccent", 0, "#6715E6", "colorTaxesPurple", 0, "#5837BE", "colorTaxesSecondaryButton", 0, "#CECAD5", "colorWhite", 0, "#FFFFFF"])
}, 198216, e => {
    e.v({
        fullBleedGrid: "full-bleed-grid-module-sass-module__vs_0IG__fullBleedGrid"
    })
}, 723344, e => {
    e.v({
        cashLogoLockup: "logo-module-sass-module__aW2LoW__cashLogoLockup",
        logoType: "logo-module-sass-module__aW2LoW__logoType"
    })
}, 769272, 194899, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(399430);
    let o = {
        default: {
            textColor: r.colorBlack,
            solidCurrencySymbol: !1,
            logoColor: r.colorCashGreenGallery
        },
        defaultFilled: {
            textColor: r.colorBlack,
            solidCurrencySymbol: !0,
            logoColor: r.colorCashGreenGallery
        },
        defaultFilledBlack: {
            textColor: r.colorBlack,
            solidCurrencySymbol: !0,
            logoColor: r.colorCashGreenGallery,
            currencyFillColor: r.colorBlack
        },
        white: {
            textColor: r.colorWhite,
            solidCurrencySymbol: !1,
            logoColor: r.colorWhite
        },
        black: {
            textColor: r.colorBlack,
            solidCurrencySymbol: !1,
            logoColor: r.colorBlack
        },
        blackFilled: {
            textColor: r.colorBlack,
            solidCurrencySymbol: !0,
            logoColor: r.colorBlack
        },
        blackFilledGreen: {
            textColor: r.colorBlack,
            solidCurrencySymbol: !0,
            logoColor: r.colorBlack,
            currencyFillColor: r.colorCashGreenGallery
        },
        investingPurple: {
            textColor: r.colorStocksBlue,
            solidCurrencySymbol: !1,
            logoColor: r.colorStocksBlue
        },
        green: {
            textColor: r.colorWhite,
            solidCurrencySymbol: !1,
            logoColor: r.colorCashGreenGallery
        },
        greenLogoWhiteText: {
            textColor: r.colorWhite,
            solidCurrencySymbol: !1,
            logoColor: r.colorCashGreenGallery
        },
        greenLogoBlackText: {
            textColor: r.colorBlack,
            solidCurrencySymbol: !1,
            logoColor: r.colorCashGreenGallery
        }
    };
    e.s(["LogoColorVariants", 0, o], 194899);
    var n = e.i(723344);
    e.s(["default", 0, e => {
        let {
            altText: r = "Cash App Logo",
            colorVariant: l = "default",
            withText: a
        } = e, {
            textColor: i,
            solidCurrencySymbol: c,
            logoColor: s,
            currencyFillColor: u
        } = "string" == typeof l ? o[l] : { ...l
        };
        return (0, t.jsx)("div", {
            className: n.default.cashLogoLockup,
            children: (0, t.jsxs)("svg", {
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                width: "100%",
                viewBox: e.withText ? "0 0 897.4 210" : "0 0 210 210",
                xmlSpace: "preserve",
                fill: "none",
                children: [r && (0, t.jsx)("title", {
                    children: r
                }), a && (0, t.jsxs)("g", {
                    className: n.default.logoType,
                    "data-show-on-mobile": e.showLogoTypeOnMobileSkeleton || !1,
                    children: [(0, t.jsx)("path", {
                        fill: i,
                        d: "M320.7,141.8c11.1,0,19.5-6.4,23-17.1c0.4-1.3,1.8-2,3.1-1.6l14.3,4.8c1.3,0.4,2,1.9,1.5,3.2     c-6.6,17.6-21.2,28.5-41.9,28.5c-28.4,0-49-22.5-49-54.5c0-32.1,20.6-54.5,49-54.5c20.7,0,35.3,10.9,41.9,28.5     c0.5,1.3-0.2,2.7-1.5,3.2l-14.3,4.8c-1.3,0.4-2.7-0.3-3.1-1.6c-3.6-10.7-11.9-17.1-23-17.1c-16.8,0-28.7,14.5-28.7,36.7     S303.9,141.8,320.7,141.8z"
                    }), (0, t.jsx)("path", {
                        fill: i,
                        d: "M417.5,121.9l-15.9,3.3c-7.1,1.5-12.5,3.8-12.5,10.3c0,5.7,4.2,8.9,10.7,8.9c9.1,0,17.7-4.8,17.7-13.9V121.9L417.5,121.9     z M370.2,136.5c0-15.1,11.7-21.6,27-24.5l20.3-4.1v-1.3c0-7-3.6-11.3-12.6-11.3c-7.3,0-11.4,3-13.5,8.9c-0.4,1.1-1.6,1.8-2.8,1.5     l-13.3-2.8c-1.5-0.3-2.3-1.9-1.8-3.3C378,87.9,389.1,79,405.6,79c19.1,0,30.6,8.9,30.6,26.8v32.5c0,3.5,1.2,5,4.2,5.1     c1.3,0.1,2.4,1.1,2.4,2.4v9.9c0,1.2-0.9,2.3-2.2,2.4c-11.6,1.1-18.3-1.5-21.2-7.5c-4.9,5.5-12.9,8.6-23,8.6     C381.5,159.4,370.2,150.3,370.2,136.5z"
                    }), (0, t.jsx)("path", {
                        fill: i,
                        d: "M459.5,134c1-0.9,2.6-0.8,3.5,0.2c5.2,6.2,13.4,10.1,21.4,10.1c7.2,0,13.7-2.5,13.7-8.8s-6.1-7-18.4-9.4     c-12.4-2.5-26.3-5.7-26.3-22.3c0-14.5,12.7-24.8,30.9-24.8c12.6,0,23.9,5,30.2,12.2c0.8,1,0.8,2.4-0.1,3.3l-8.4,8.4     c-1,1-2.6,1-3.5-0.1c-4.8-5.5-11.5-8.6-19-8.6c-6.9,0-11.3,3-11.3,7.7c0,5.3,5.4,6.3,15,8.3c13.3,2.8,29.6,5.7,29.6,23.4     c0,15.9-14.7,25.9-32.7,25.9c-13.3,0-26.9-4.8-34.3-13.7c-0.8-1-0.7-2.4,0.3-3.3L459.5,134z"
                    }), (0, t.jsx)("path", {
                        fill: i,
                        d: "M529.1,52.2h14.3c1.3,0,2.4,1.1,2.4,2.4v34.1c4.3-5.1,11.3-9.6,21.3-9.6c16.2,0,26,11.1,26,27.9v48.6     c0,1.3-1.1,2.4-2.4,2.4h-14.3c-1.3,0-2.4-1.1-2.4-2.4v-43.1c0-9.1-3.7-15.7-13-15.7c-7.6,0-15.2,5.5-15.2,16.1v42.7     c0,1.3-1.1,2.4-2.4,2.4h-14.3c-1.3,0-2.4-1.1-2.4-2.4v-101C526.7,53.3,527.8,52.2,529.1,52.2z"
                    }), (0, t.jsx)("path", {
                        fill: i,
                        d: "M662.6,117.1h31.6l-15.9-42.4L662.6,117.1z M690.8,53.8l38,101c0.6,1.6-0.6,3.3-2.3,3.3h-15.3c-1,0-1.9-0.6-2.3-1.6     l-8.2-21.9h-44.5l-8.1,21.9c-0.4,1-1.3,1.6-2.3,1.6h-14.9c-1.7,0-2.9-1.7-2.3-3.3l38-101c0.4-0.9,1.3-1.6,2.3-1.6h19.7     C689.5,52.2,690.4,52.8,690.8,53.8z"
                    }), (0, t.jsx)("path", {
                        fill: i,
                        d: "M756.8,121.6c0,13.7,7.8,21.4,18.2,21.4c12.2,0,18.8-9.7,18.8-23.7s-6.6-23.7-18.8-23.7c-10.4,0-18.2,7.6-18.2,21.5     V121.6z M757.2,150v32c0,1.3-1.1,2.4-2.4,2.4h-14.3c-1.3,0-2.4-1.1-2.4-2.4V83c0-1.3,1.1-2.4,2.4-2.4h14.3c1.3,0,2.4,1.1,2.4,2.4     v5.7c4.7-5.7,12.1-9.6,22-9.6c21.5,0,33.9,18.3,33.9,40.2c0,22-12.4,40.3-33.9,40.3C769.3,159.6,762,155.7,757.2,150z"
                    }), (0, t.jsx)("path", {
                        fill: i,
                        d: "M841.1,121.6c0,13.7,7.8,21.4,18.2,21.4c12.2,0,18.8-9.7,18.8-23.7s-6.6-23.7-18.8-23.7c-10.4,0-18.2,7.6-18.2,21.5     V121.6z M841.5,150v32c0,1.3-1.1,2.4-2.4,2.4h-14.3c-1.3,0-2.4-1.1-2.4-2.4V83c0-1.3,1.1-2.4,2.4-2.4h14.3c1.3,0,2.4,1.1,2.4,2.4     v5.7c4.7-5.7,12.1-9.6,22-9.6c21.5,0,33.9,18.3,33.9,40.2c0,22-12.4,40.3-33.9,40.3C853.6,159.6,846.3,155.7,841.5,150z"
                    })]
                }), c && (0, t.jsx)("rect", {
                    width: "150",
                    height: "150",
                    x: "25",
                    y: "25",
                    rx: "7.81424",
                    fill: u || "#fff"
                }), (0, t.jsx)("path", {
                    fill: s,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M206.398,30.286c-4.502-12.394-14.307-22.189-26.713-26.687C168.48,0,158.075,0,136.865,0h-63.63   c-21.11,0-31.615,0-42.92,3.498C17.909,7.996,8.104,17.792,3.602,30.186C0,41.58,0,52.075,0,73.165v63.57   c0,21.19,0,31.585,3.502,42.98c4.502,12.394,14.307,22.189,26.713,26.687C41.62,210,52.125,210,73.135,210h63.63   c21.11,0,31.615,0,42.92-3.598c12.406-4.498,22.211-14.293,26.713-26.687C210,168.32,210,157.825,210,136.735v-63.47   C210,52.175,210,41.68,206.398,30.286z M151.472,71.866l-12.106,9.895c-1.101,0.9-2.601,0.7-3.402-0.4   c-6.203-7.596-15.807-11.894-26.312-11.894c-11.706,0-19.009,5.098-19.009,12.294c-0.2,6.097,5.503,9.196,23.011,12.994   c22.111,4.698,32.215,13.893,32.215,29.386c0,19.391-15.808,33.684-40.519,35.283l-2.401,11.495   c-0.2,1.099-1.201,1.899-2.401,1.899H81.539c-1.601,0-2.701-1.499-2.401-2.999l3.001-12.794   c-12.206-3.498-22.111-10.295-27.813-18.591c-0.7-1.099-0.5-2.499,0.5-3.298l13.206-10.395c1.101-0.9,2.701-0.6,3.502,0.5   c7.003,9.795,17.808,15.593,30.815,15.593c11.706,0,20.51-5.697,20.51-13.893c0-6.297-4.402-9.196-19.309-12.294   c-25.412-5.497-35.517-14.793-35.517-30.286c0-17.991,15.107-31.485,37.918-33.284l2.501-11.894c0.2-1.099,1.201-1.899,2.401-1.899   h18.709c1.501,0,2.701,1.399,2.401,2.899l-2.901,13.294c9.805,2.999,17.808,8.396,22.811,15.093   C152.673,69.567,152.473,71.066,151.472,71.866z"
                })]
            })
        })
    }], 769272)
}, 348151, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(645350);
    e.s(["default", 0, e => {
        let {
            locale: o = "en-us"
        } = e;
        return (0, t.jsx)(r.default, {
            className: "optanon-show-settings",
            href: "#",
            analyticsIdentifier: "FOOTER_LINK",
            onClick: e => {
                e.preventDefault()
            },
            children: "es-us" === o ? "Preferencias de privacidad" : "Your Privacy Choices"
        }, "cookie-preferences")
    }])
}, 276067, e => {
    "use strict";
    var t = e.i(191788);

    function r() {
        let [e, r] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let e = () => {
                r(!0)
            };
            if ("complete" !== document.readyState) return window.addEventListener("load", e), () => {
                window.removeEventListener("load", e)
            };
            e()
        }, []), e
    }
    e.s(["default", () => r])
}, 608547, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        o = e.i(464798);
    e.i(667861);
    var n = e.i(843981),
        l = e.i(848970),
        a = e.i(816918);
    let i = [],
        c = async e => {
            let t = (0, a.getRegionConfig)();
            t ? .hasOptedIntoStatisticsTracking && await (0, l.logEvent)({
                event: e,
                region: t.region,
                middleware: o.default
            })
        },
        s = (0, r.createContext)({});
    e.s(["ExperimentsContext", 0, s, "ExperimentsProvider", 0, e => {
        let {
            children: n
        } = e, [l, a] = (0, r.useState)(null), [i, c] = (0, r.useState)(null), [u] = function(e, t) {
            let [o, n] = (0, r.useState)(() => {
                {
                    let t = localStorage.getItem(e);
                    return t ? JSON.parse(t) : null
                }
            });
            return (0, r.useEffect)(() => {
                function t(t) {
                    t.key === e && n(JSON.parse(localStorage.getItem(e) ? ? ""))
                }
                return window.addEventListener("storage", t), () => {
                    window.removeEventListener("storage", t)
                }
            }, [e]), [o, t => {
                try {
                    n(t), localStorage.setItem(e, JSON.stringify(t)), window.dispatchEvent(new StorageEvent("storage", {
                        key: e
                    }))
                } catch (e) {
                    console.error(e)
                }
            }]
        }("experimentsOverrides", 0);
        return (0, r.useEffect)(() => {
            i && a({ ...i,
                ...u
            })
        }, [i, u]), (0, r.useEffect)(() => {
            if (i) return;
            let e = {
                namespace: "marketing"
            };
            (async () => {
                try {
                    let t = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        },
                        [r, n] = await (0, o.default)("/2.0/cash/web/experiment", t),
                        l = await fetch(r, n);
                    if (l.ok) {
                        let {
                            experiments: e = {}
                        } = await l.json();
                        c(e)
                    } else c({}), console.error(`Experiments api fetch response status ${l.status}`, l.statusText)
                } catch (e) {
                    c({}), console.error("Experiments api failed to fetch:", e)
                }
            })()
        }, []), (0, t.jsx)(s.Provider, {
            value: l,
            children: n
        })
    }, "logExposureEvent", 0, (e, t) => {
        !i.includes(e) && (i.push(e), c((0, n.ExperimentActivateView)({
            experimentId: e,
            variationId: t,
            experimentSource: "AMPLITUDE"
        })), window ? .FS && "function" == typeof window ? .FS && window.FS("setProperties", {
            type: "User",
            properties: {
                experiment_key: e,
                experiment_bucket: t
            }
        }))
    }], 608547)
}, 799604, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        cancelIdleCallback: function() {
            return a
        },
        requestIdleCallback: function() {
            return l
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let l = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        a = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 889129, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        DecodeError: function() {
            return g
        },
        MiddlewareNotFoundError: function() {
            return C
        },
        MissingStaticPage: function() {
            return b
        },
        NormalizeError: function() {
            return _
        },
        PageNotFoundError: function() {
            return v
        },
        SP: function() {
            return y
        },
        ST: function() {
            return h
        },
        WEB_VITALS: function() {
            return l
        },
        execOnce: function() {
            return a
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return s
        },
        getURL: function() {
            return u
        },
        isAbsoluteUrl: function() {
            return c
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return m
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return x
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let l = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function a(e) {
        let t, r = !1;
        return function() {
            for (var o = arguments.length, n = Array(o), l = 0; l < o; l++) n[l] = arguments[l];
            return r || (r = !0, t = e(...n)), t
        }
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        c = e => i.test(e);

    function s() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function u() {
        let {
            href: e
        } = window.location, t = s();
        return e.substring(t.length)
    }

    function f(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function d(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function m(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await m(t.Component, t.ctx)
        } : {};
        let o = await e.getInitialProps(t);
        if (r && d(r)) return o;
        if (!o) throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return o
    }
    let y = "u" > typeof performance,
        h = y && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class g extends Error {}
    class _ extends Error {}
    class v extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class b extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class C extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function x(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 771914, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useIntersection", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let o = e.r(191788),
        n = e.r(799604),
        l = "function" == typeof IntersectionObserver,
        a = new Map,
        i = [];

    function c(e) {
        let {
            rootRef: t,
            rootMargin: r,
            disabled: c
        } = e, s = c || !l, [u, f] = (0, o.useState)(!1), d = (0, o.useRef)(null), p = (0, o.useCallback)(e => {
            d.current = e
        }, []);
        return (0, o.useEffect)(() => {
            if (l) {
                if (s || u) return;
                let e = d.current;
                if (e && e.tagName) return function(e, t, r) {
                    let {
                        id: o,
                        observer: n,
                        elements: l
                    } = function(e) {
                        let t, r = {
                                root: e.root || null,
                                margin: e.rootMargin || ""
                            },
                            o = i.find(e => e.root === r.root && e.margin === r.margin);
                        if (o && (t = a.get(o))) return t;
                        let n = new Map;
                        return t = {
                            id: r,
                            observer: new IntersectionObserver(e => {
                                e.forEach(e => {
                                    let t = n.get(e.target),
                                        r = e.isIntersecting || e.intersectionRatio > 0;
                                    t && r && t(r)
                                })
                            }, e),
                            elements: n
                        }, i.push(r), a.set(r, t), t
                    }(r);
                    return l.set(e, t), n.observe(e),
                        function() {
                            if (l.delete(e), n.unobserve(e), 0 === l.size) {
                                n.disconnect(), a.delete(o);
                                let e = i.findIndex(e => e.root === o.root && e.margin === o.margin);
                                e > -1 && i.splice(e, 1)
                            }
                        }
                }(e, e => e && f(e), {
                    root: t ? .current,
                    rootMargin: r
                })
            } else if (!u) {
                let e = (0, n.requestIdleCallback)(() => f(!0));
                return () => (0, n.cancelIdleCallback)(e)
            }
        }, [s, r, t, u, d.current]), [p, u, (0, o.useCallback)(() => {
            f(!1)
        }, [])]
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 154471, (e, t, r) => {
    "use strict";

    function o(e, t, r, o) {
        return !1
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getDomainLocale", {
        enumerable: !0,
        get: function() {
            return o
        }
    }), e.r(270090), ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 663230, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let o = e.r(191788);

    function n(e, t) {
        let r = (0, o.useRef)(null),
            n = (0, o.useRef)(null);
        return (0, o.useCallback)(o => {
            if (null === o) {
                let e = r.current;
                e && (r.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (r.current = l(e, o)), t && (n.current = l(t, o))
        }, [e, t])
    }

    function l(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 548735, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e => {}
}, 539149, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return E
        },
        useLinkStatus: function() {
            return S
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let l = e.r(952456),
        a = e.r(391398),
        i = l._(e.r(191788)),
        c = e.r(160472),
        s = e.r(471112),
        u = e.r(728169),
        f = e.r(889129),
        d = e.r(514862),
        p = e.r(425479),
        m = e.r(771914),
        y = e.r(154471),
        h = e.r(344113),
        g = e.r(663230);
    e.r(548735);
    let _ = new Set;

    function v(e, t, r, o) {
        if (!("u" < typeof window) && (0, s.isLocalURL)(t)) {
            if (!o.bypassPrefetchedCheck) {
                let n = t + "%" + r + "%" + (void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0);
                if (_.has(n)) return;
                _.add(n)
            }
            e.prefetch(t, r, o).catch(e => {})
        }
    }

    function b(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e)
    }
    let C = i.default.forwardRef(function(e, t) {
            let r, o, {
                href: n,
                as: l,
                children: u,
                prefetch: _ = null,
                passHref: C,
                replace: x,
                shallow: S,
                scroll: E,
                locale: k,
                onClick: w,
                onNavigate: j,
                onMouseEnter: O,
                onTouchStart: P,
                legacyBehavior: T = !1,
                ...M
            } = e;
            r = u, T && ("string" == typeof r || "number" == typeof r) && (r = (0, a.jsx)("a", {
                children: r
            }));
            let A = i.default.useContext(p.RouterContext),
                R = !1 !== _,
                {
                    href: B,
                    as: I
                } = i.default.useMemo(() => {
                    if (!A) {
                        let e = b(n);
                        return {
                            href: e,
                            as: l ? b(l) : e
                        }
                    }
                    let [e, t] = (0, c.resolveHref)(A, n, !0);
                    return {
                        href: e,
                        as: l ? (0, c.resolveHref)(A, l) : t || e
                    }
                }, [A, n, l]),
                L = i.default.useRef(B),
                G = i.default.useRef(I);
            T && (o = i.default.Children.only(r));
            let N = T ? o && "object" == typeof o && o.ref : t,
                [D, F, H] = (0, m.useIntersection)({
                    rootMargin: "200px"
                }),
                z = i.default.useCallback(e => {
                    (G.current !== I || L.current !== B) && (H(), G.current = I, L.current = B), D(e)
                }, [I, B, H, D]),
                U = (0, g.useMergedRef)(z, N);
            i.default.useEffect(() => {
                !A || F && R && v(A, B, I, {
                    locale: k
                })
            }, [I, B, F, k, R, A ? .locale, A]);
            let $ = {
                ref: U,
                onClick(e) {
                    T || "function" != typeof w || w(e), T && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), !A || e.defaultPrevented || function(e, t, r, o, n, l, a, i, c) {
                        let u, {
                            nodeName: f
                        } = e.currentTarget;
                        if (!("A" === f.toUpperCase() && ((u = e.currentTarget.getAttribute("target")) && "_self" !== u || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which) || e.currentTarget.hasAttribute("download"))) {
                            if (!(0, s.isLocalURL)(r)) {
                                n && (e.preventDefault(), location.replace(r));
                                return
                            }
                            e.preventDefault(), (() => {
                                if (c) {
                                    let e = !1;
                                    if (c({
                                            preventDefault: () => {
                                                e = !0
                                            }
                                        }), e) return
                                }
                                let e = a ? ? !0;
                                "beforePopState" in t ? t[n ? "replace" : "push"](r, o, {
                                    shallow: l,
                                    locale: i,
                                    scroll: e
                                }) : t[n ? "replace" : "push"](o || r, {
                                    scroll: e
                                })
                            })()
                        }
                    }(e, A, B, I, x, S, E, k, j)
                },
                onMouseEnter(e) {
                    T || "function" != typeof O || O(e), T && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), A && v(A, B, I, {
                        locale: k,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                },
                onTouchStart: function(e) {
                    T || "function" != typeof P || P(e), T && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), A && v(A, B, I, {
                        locale: k,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                }
            };
            if ((0, f.isAbsoluteUrl)(I)) $.href = I;
            else if (!T || C || "a" === o.type && !("href" in o.props)) {
                let e = void 0 !== k ? k : A ? .locale;
                $.href = A ? .isLocaleDomain && (0, y.getDomainLocale)(I, e, A ? .locales, A ? .domainLocales) || (0, h.addBasePath)((0, d.addLocale)(I, e, A ? .defaultLocale))
            }
            return T ? i.default.cloneElement(o, $) : (0, a.jsx)("a", { ...M,
                ...$,
                children: r
            })
        }),
        x = (0, i.createContext)({
            pending: !1
        }),
        S = () => (0, i.useContext)(x),
        E = C;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 41158, (e, t, r) => {
    t.exports = e.r(539149)
}]);
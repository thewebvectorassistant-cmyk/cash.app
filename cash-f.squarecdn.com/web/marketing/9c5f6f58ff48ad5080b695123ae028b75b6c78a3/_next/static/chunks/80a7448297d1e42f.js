(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 903e3, e => {
    e.v({
        themed: "themeable-module-sass-module__iQwJhG__themed"
    })
}, 47, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(175486),
        n = e.i(903e3);
    e.s(["default", 0, e => {
        let a, s, {
            theme: o,
            backgroundColor: i = null,
            children: l
        } = e;
        return (0, t.jsx)("div", {
            className: n.default.themed,
            style: (a = r.Theme.apply(o), (s = o ? .backgroundColor || i) && (a.backgroundColor = s), a),
            children: l
        })
    }])
}, 330972, e => {
    e.v({
        articleTag: "article-tag-module-sass-module__Wi7B4W__articleTag"
    })
}, 589894, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(330972),
        n = e.i(272043);
    e.s(["default", 0, e => {
        let {
            tag: a,
            href: s,
            className: o,
            ...i
        } = e;
        return (0, t.jsx)("a", {
            href: s,
            className: (0, n.default)(r.default.articleTag, o),
            ...i,
            children: a
        })
    }])
}, 274097, e => {
    e.v({
        campaignForm: "campaign-form-module-sass-module__B0Q0GW__campaignForm",
        disclaimerText: "campaign-form-module-sass-module__B0Q0GW__disclaimerText",
        errorState: "campaign-form-module-sass-module__B0Q0GW__errorState",
        icon: "campaign-form-module-sass-module__B0Q0GW__icon",
        loading: "campaign-form-module-sass-module__B0Q0GW__loading",
        loadingState: "campaign-form-module-sass-module__B0Q0GW__loadingState",
        message: "campaign-form-module-sass-module__B0Q0GW__message",
        pulse: "campaign-form-module-sass-module__B0Q0GW__pulse",
        submitButton: "campaign-form-module-sass-module__B0Q0GW__submitButton",
        successState: "campaign-form-module-sass-module__B0Q0GW__successState",
        title: "campaign-form-module-sass-module__B0Q0GW__title"
    })
}, 254022, e => {
    e.v({
        addressFields: "address-input-field-module-sass-module__ItSZ7a__addressFields",
        fullWidth: "address-input-field-module-sass-module__ItSZ7a__fullWidth"
    })
}, 21162, e => {
    e.v({
        error: "select-field-with-label-module-sass-module__phdoAq__error",
        selectField: "select-field-with-label-module-sass-module__phdoAq__selectField"
    })
}, 37960, e => {
    e.v({
        checkbox: "checkbox-with-label-module-sass-module__q7M1zW__checkbox",
        checkboxWrapper: "checkbox-with-label-module-sass-module__q7M1zW__checkboxWrapper",
        error: "checkbox-with-label-module-sass-module__q7M1zW__error"
    })
}, 402832, 264359, 237473, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(254022),
        n = e.i(923004);
    let a = {
        AL: "Alabama",
        AK: "Alaska",
        AS: "American Samoa",
        AZ: "Arizona",
        AR: "Arkansas",
        CA: "California",
        CO: "Colorado",
        CT: "Connecticut",
        DE: "Delaware",
        DC: "District Of Columbia",
        FM: "Federated States Of Micronesia",
        FL: "Florida",
        GA: "Georgia",
        GU: "Guam",
        HI: "Hawaii",
        ID: "Idaho",
        IL: "Illinois",
        IN: "Indiana",
        IA: "Iowa",
        KS: "Kansas",
        KY: "Kentucky",
        LA: "Louisiana",
        ME: "Maine",
        MH: "Marshall Islands",
        MD: "Maryland",
        MA: "Massachusetts",
        MI: "Michigan",
        MN: "Minnesota",
        MS: "Mississippi",
        MO: "Missouri",
        MT: "Montana",
        NE: "Nebraska",
        NV: "Nevada",
        NH: "New Hampshire",
        NJ: "New Jersey",
        NM: "New Mexico",
        NY: "New York",
        NC: "North Carolina",
        ND: "North Dakota",
        MP: "Northern Mariana Islands",
        OH: "Ohio",
        OK: "Oklahoma",
        OR: "Oregon",
        PW: "Palau",
        PA: "Pennsylvania",
        PR: "Puerto Rico",
        RI: "Rhode Island",
        SC: "South Carolina",
        SD: "South Dakota",
        TN: "Tennessee",
        TX: "Texas",
        UT: "Utah",
        VT: "Vermont",
        VI: "Virgin Islands",
        VA: "Virginia",
        WA: "Washington",
        WV: "West Virginia",
        WI: "Wisconsin",
        WY: "Wyoming"
    };
    var s = e.i(517735),
        o = e.i(21162),
        i = e.i(272043),
        l = e.i(191788),
        u = e.i(280716),
        c = e.i(399430);
    let d = e => {
        let r = `label_${e.name}`,
            n = (0, l.useRef)(null),
            {
                isValid: a,
                errorMessage: d
            } = (0, u.useValidation)(n, e.validation),
            f = "custom" === e.name ? e.labelText : null;
        return (0, t.jsxs)("div", {
            className: (0, i.default)(s.default.fieldWrapper, e.className || ""),
            children: [(0, t.jsx)("label", {
                "aria-label": e.labelText,
                id: r,
                className: s.default.label,
                children: e.labelText
            }), (0, t.jsxs)("select", {
                ref: n,
                name: e.name,
                required: e.required,
                "aria-labelledby": r,
                autoComplete: e.autoComplete || "false",
                className: (0, i.default)(s.default.field, o.default.selectField, {
                    [s.default.hasError]: !a
                }),
                style: {
                    backgroundColor: e.backgroundColor || c.colorWhite
                },
                "aria-invalid": e.required,
                ...f ? {
                    "data-custom-title": f
                } : null,
                children: [(0, t.jsx)("option", {
                    disabled: !0,
                    selected: !0,
                    value: null,
                    children: e.placeholderText
                }), e.options.map(e => (0, t.jsx)("option", {
                    value: e.value,
                    children: e.label || e.value
                }, e.value))]
            }), (0, t.jsx)("div", {
                className: s.default.errorMessage,
                ...!a ? {
                    role: "alert"
                } : {},
                children: d
            })]
        })
    };
    e.s(["default", 0, d], 264359);
    let f = Object.keys(a).map(e => ({
        value: e,
        label: a[e]
    }));
    e.s(["default", 0, e => (0, t.jsxs)("fieldset", {
        className: r.default.addressFields,
        children: [(0, t.jsx)(n.default, {
            className: r.default.fullWidth,
            name: "address_1",
            labelText: "Street Address",
            required: e.required,
            backgroundColor: e.backgroundColor
        }), (0, t.jsx)(n.default, {
            className: r.default.fullWidth,
            name: "address_2",
            labelText: "Apartment/Unit",
            required: !1,
            backgroundColor: e.backgroundColor
        }), (0, t.jsx)(n.default, {
            name: "city",
            labelText: "City",
            required: e.required,
            backgroundColor: e.backgroundColor
        }), (0, t.jsx)(d, {
            name: "state",
            labelText: "State",
            required: !0,
            placeholderText: "Select a State",
            options: f,
            backgroundColor: e.backgroundColor
        }), (0, t.jsx)(n.default, {
            name: "postal_code",
            labelText: "ZIP Code",
            required: e.required,
            backgroundColor: e.backgroundColor
        })]
    })], 402832);
    var h = e.i(176342),
        p = e.i(37960);
    e.s(["default", 0, e => {
        let r = (0, l.useRef)(null),
            {
                isValid: n
            } = (0, u.useValidation)(r, null);
        return (0, t.jsxs)("div", {
            className: p.default.checkboxWrapper,
            children: [(0, t.jsx)("input", {
                "aria-labelledby": "checkbox_label",
                type: "checkbox",
                id: "checkbox",
                required: e.required,
                style: {
                    backgroundColor: e.backgroundColor || c.colorWhite
                },
                className: (0, i.default)(p.default.checkbox, {
                    [p.default.error]: !n
                }),
                ref: r,
                "aria-invalid": e.required
            }), (0, t.jsx)("label", {
                id: "checkbox_label",
                htmlFor: "checkbox",
                children: (0, t.jsx)(h.default, { ...e.label
                })
            })]
        })
    }], 237473)
}, 131427, e => {
    "use strict";
    var t, r = e.i(391398),
        n = e.i(191788),
        a = e.i(989606),
        s = e.i(176342),
        o = e.i(274097),
        i = e.i(923004),
        l = e.i(194375),
        u = e.i(402832),
        c = e.i(237473),
        d = e.i(920176),
        f = e.i(47),
        h = e.i(264359),
        p = e.i(399430),
        m = e.i(272043);
    let g = () => (0, r.jsxs)("svg", {
            width: "100%",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, r.jsx)("path", {
                d: "M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z",
                stroke: "black",
                strokeWidth: "2"
            }), (0, r.jsx)("path", {
                d: "M15 15L25 25M25 15L15 25",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round"
            })]
        }),
        y = () => (0, r.jsxs)("svg", {
            width: "100%",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, r.jsx)("path", {
                d: "M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z",
                stroke: "black",
                strokeWidth: "2"
            }), (0, r.jsx)("path", {
                d: "M12 20L18 26L28 14",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }),
        b = "Try Again",
        v = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.colorGray93;
            switch (e) {
                case "name":
                    return (0, r.jsx)(i.default, {
                        name: "name",
                        labelText: "Full Name",
                        required: !0,
                        validation: {
                            pattern: d.default.fullName,
                            errorMessage: "Please enter your full name"
                        },
                        backgroundColor: n
                    }, t);
                case "cashtag":
                    return (0, r.jsx)(i.default, {
                        name: "cashtag",
                        labelText: "Cashtag",
                        required: !0,
                        validation: {
                            pattern: d.default.cashtag,
                            errorMessage: "Please enter a valid $Cashtag"
                        },
                        backgroundColor: n
                    }, t);
                case "email":
                    return (0, r.jsx)(i.default, {
                        fieldType: "email",
                        name: "email",
                        labelText: "Email Address",
                        required: !0,
                        validation: {
                            errorMessage: "Please enter a valid email"
                        },
                        autoComplete: "email",
                        backgroundColor: n
                    }, t);
                case "phone_number":
                    return (0, r.jsx)(i.default, {
                        fieldType: "tel",
                        name: "phone_number",
                        labelText: "Phone Number",
                        required: !0,
                        validation: {
                            pattern: d.default.phoneNumber,
                            errorMessage: "Please enter a valid phone number"
                        },
                        autoComplete: "tel",
                        backgroundColor: n
                    }, t);
                case "address":
                    return (0, r.jsx)(u.default, {
                        required: !0,
                        backgroundColor: n
                    }, t);
                default:
                    if ("object" == typeof e)
                        if (e.hasOwnProperty("options")) return (0, r.jsx)(h.default, { ...e,
                            backgroundColor: n
                        }, t);
                        else return (0, r.jsx)(i.default, { ...e,
                            backgroundColor: n
                        }, t);
                    return null
            }
        };
    var k = ((t = k || {})[t.init = 0] = "init", t[t.submitting = 1] = "submitting", t[t.success = 2] = "success", t[t.error = 3] = "error", t);
    let S = e => {
        let [t, i] = (0, n.useState)(0), l = t => {
            let r, n = t.target,
                a = Array.from(n.elements),
                s = {
                    campaign_token: e.campaignId
                };
            if (!n.checkValidity()) return void t.preventDefault();
            a.forEach(e => {
                e.name.match(/address_1|address_2|city|state|postal_code|custom/) || e.name && "" !== e.name && (s[e.name] = e.value)
            });
            let o = a.filter(e => "custom" === e.name).map(e => ({
                title: e.getAttribute("data-custom-title"),
                string_response: e.value
            }));
            o.length && (s.customFields = o), e.fields.includes("address") && (r = {
                address_1: null,
                address_2: null,
                city: null,
                state: null,
                postal_code: null
            }, a.filter(e => !!e.name.match(/address_1|address_2|city|state|postal_code/)).forEach(e => {
                r[e.name] = e.value
            }), s.address = [r.address_1 || "", r.address_2 || "", r.city || "", r.state || "", r.postal_code.toString() || ""].reduce((e, t) => e && "" !== e ? t && "" !== t ? [e, t].join(", ").trim() : e : t, "")), i(1), fetch("/cash-app/social/event", {
                method: "POST",
                body: new Blob([JSON.stringify(s, null, 2)], {
                    type: "application/json; charset=utf-8"
                }),
                credentials: "same-origin"
            }).then(e => {
                200 === e.status ? i(2) : i(3)
            }), t.preventDefault()
        };
        return (0, r.jsx)("div", {
            className: o.default.campaignForm,
            "data-state": t,
            children: (0, r.jsx)(f.default, {
                theme: e.theme,
                children: (() => {
                    switch (t) {
                        case 0:
                            return (0, r.jsxs)("div", {
                                children: [e.headline && (0, r.jsx)("div", {
                                    className: o.default.title,
                                    children: (0, r.jsx)("h3", {
                                        children: e.headline
                                    })
                                }), (0, r.jsxs)("form", {
                                    onSubmit: l,
                                    name: "form",
                                    noValidate: !0,
                                    children: [e.fields.map((e, t) => v(e, `field_${t}`)), (0, r.jsxs)("div", {
                                        className: o.default.submitWrapper,
                                        children: [e.termsAndConditions && (0, r.jsx)("div", {
                                            className: o.default.termsAndConditions,
                                            children: (0, r.jsx)(c.default, {
                                                required: !0,
                                                label: e.termsAndConditions.text,
                                                backgroundColor: "#eee"
                                            })
                                        }), (0, r.jsx)(a.default, {
                                            type: "submit",
                                            style: "black",
                                            title: "Submit",
                                            size: "default",
                                            action: () => {
                                                i(0)
                                            }
                                        })]
                                    }), e.disclaimerText && (0, r.jsx)("div", {
                                        className: o.default.disclaimerText,
                                        children: (0, r.jsx)(s.default, { ...e.disclaimerText
                                        })
                                    })]
                                })]
                            });
                        case 1:
                            return (0, r.jsxs)("div", {
                                className: o.default.successState,
                                children: [(0, r.jsx)("div", {
                                    className: (0, m.default)(o.default.icon, o.default.loading)
                                }), (0, r.jsx)("h3", {
                                    children: "Submitting..."
                                }), (0, r.jsx)("p", {
                                    className: o.default.message,
                                    children: "Please wait a moment"
                                })]
                            });
                        case 2:
                            return (0, r.jsxs)("div", {
                                className: o.default.successState,
                                style: {
                                    "--icon-success": `url(${y()})`
                                },
                                children: [(0, r.jsx)("div", {
                                    className: (0, m.default)(o.default.icon, o.default.success),
                                    children: y()
                                }), (0, r.jsx)("h3", {
                                    children: e.successMessage ? .title || "Success"
                                }), (0, r.jsx)("p", {
                                    className: o.default.message,
                                    children: e.successMessage ? .message || "We’ve received your information and will send you more details soon."
                                })]
                            });
                        case 3:
                            return (0, r.jsxs)("div", {
                                className: o.default.errorState,
                                style: {
                                    "--icon-error": `url(${g()})`
                                },
                                children: [(0, r.jsx)("div", {
                                    className: (0, m.default)(o.default.icon, o.default.error),
                                    children: g()
                                }), (0, r.jsx)("h3", {
                                    children: e.errorMessage ? .title || "Something went wrong"
                                }), (0, r.jsx)("p", {
                                    className: o.default.message,
                                    children: e.errorMessage ? .message || "We couldn’t process your request. Please try again."
                                }), (0, r.jsx)(a.default, {
                                    className: o.default.submitButton,
                                    style: "black",
                                    size: "default",
                                    title: b,
                                    action: () => {
                                        i(0)
                                    }
                                }), e.cancelAction && (0, r.jsx)(a.default, {
                                    className: o.default.submitButton,
                                    style: "secondary",
                                    size: "default",
                                    title: b,
                                    action: () => {
                                        e.cancelAction()
                                    }
                                })]
                            })
                    }
                })()
            })
        })
    };
    (0, l.registerComponent)("CampaignForm", S), e.s(["default", 0, S])
}, 796013, (e, t, r) => {}, 683176, (e, t, r) => {
    ! function() {
        "use strict";
        var e = "u" > typeof window && void 0 !== window.document ? window.document : {},
            r = t.exports,
            n = function() {
                for (var t, r = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], n = 0, a = r.length, s = {}; n < a; n++)
                    if ((t = r[n]) && t[1] in e) {
                        for (n = 0; n < t.length; n++) s[r[0][n]] = t[n];
                        return s
                    }
                return !1
            }(),
            a = {
                change: n.fullscreenchange,
                error: n.fullscreenerror
            },
            s = {
                request: function(t, r) {
                    return new Promise((function(a, s) {
                        var o = (function() {
                            this.off("change", o), a()
                        }).bind(this);
                        this.on("change", o);
                        var i = (t = t || e.documentElement)[n.requestFullscreen](r);
                        i instanceof Promise && i.then(o).catch(s)
                    }).bind(this))
                },
                exit: function() {
                    return new Promise((function(t, r) {
                        if (!this.isFullscreen) return void t();
                        var a = (function() {
                            this.off("change", a), t()
                        }).bind(this);
                        this.on("change", a);
                        var s = e[n.exitFullscreen]();
                        s instanceof Promise && s.then(a).catch(r)
                    }).bind(this))
                },
                toggle: function(e, t) {
                    return this.isFullscreen ? this.exit() : this.request(e, t)
                },
                onchange: function(e) {
                    this.on("change", e)
                },
                onerror: function(e) {
                    this.on("error", e)
                },
                on: function(t, r) {
                    var n = a[t];
                    n && e.addEventListener(n, r, !1)
                },
                off: function(t, r) {
                    var n = a[t];
                    n && e.removeEventListener(n, r, !1)
                },
                raw: n
            };
        if (!n) return r ? t.exports = {
            isEnabled: !1
        } : window.screenfull = {
            isEnabled: !1
        };
        Object.defineProperties(s, {
            isFullscreen: {
                get: function() {
                    return !!e[n.fullscreenElement]
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return e[n.fullscreenElement]
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
                    return !!e[n.fullscreenEnabled]
                }
            }
        }), r ? t.exports = s : window.screenfull = s
    }()
}, 247141, 414637, 213150, e => {
    "use strict";
    var t, r, n, a, s, o, i, l = e.i(391398),
        u = e.i(191788),
        c = T(),
        d = e => x(e, c),
        f = T();
    d.write = e => x(e, f);
    var h = T();
    d.onStart = e => x(e, h);
    var p = T();
    d.onFrame = e => x(e, p);
    var m = T();
    d.onFinish = e => x(e, m);
    var g = [];
    d.setTimeout = (e, t) => {
        let r = d.now() + t,
            n = () => {
                let e = g.findIndex(e => e.cancel == n);
                ~e && g.splice(e, 1), k -= !!~e
            },
            a = {
                time: r,
                handler: e,
                cancel: n
            };
        return g.splice(y(r), 0, a), k += 1, w(), a
    };
    var y = e => ~(~g.findIndex(t => t.time > e) || ~g.length);
    d.cancel = e => {
        h.delete(e), p.delete(e), m.delete(e), c.delete(e), f.delete(e)
    }, d.sync = e => {
        S = !0, d.batchedUpdates(e), S = !1
    }, d.throttle = e => {
        let t;

        function r() {
            try {
                e(...t)
            } finally {
                t = null
            }
        }

        function n() {
            for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
            t = n, d.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
            h.delete(r), t = null
        }, n
    };
    var b = "u" > typeof window ? window.requestAnimationFrame : () => {};
    d.use = e => b = e, d.now = "u" > typeof performance ? () => performance.now() : Date.now, d.batchedUpdates = e => e(), d.catch = console.error, d.frameLoop = "always", d.advance = () => {
        "demand" !== d.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : C()
    };
    var v = -1,
        k = 0,
        S = !1;

    function x(e, t) {
        S ? (t.delete(e), e(0)) : (t.add(e), w())
    }

    function w() {
        v < 0 && (v = 0, "demand" !== d.frameLoop && b(P))
    }

    function P() {
        ~v && (b(P), d.batchedUpdates(C))
    }

    function C() {
        let e = v,
            t = y(v = d.now());
        (t && (_(g.splice(0, t), e => e.handler()), k -= t), k) ? (h.flush(), c.flush(e ? Math.min(64, v - e) : 16.667), p.flush(), f.flush(), m.flush()) : v = -1
    }

    function T() {
        let e = new Set,
            t = e;
        return {
            add(r) {
                k += +!(t != e || e.has(r)), e.add(r)
            },
            delete: r => (k -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
            flush(r) {
                t.size && (e = new Set, k -= t.size, _(t, t => t(r) && e.add(t)), k += e.size, t = e)
            }
        }
    }

    function _(e, t) {
        e.forEach(e => {
            try {
                t(e)
            } catch (e) {
                d.catch(e)
            }
        })
    }
    var E = Object.defineProperty,
        R = {},
        I = {
            assign: () => q,
            colors: () => B,
            createStringInterpolator: () => n,
            skipAnimation: () => z,
            to: () => a,
            willAdvance: () => V
        };
    for (var O in I) E(R, O, {
        get: I[O],
        enumerable: !0
    });

    function M() {}
    var F = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
    };

    function A(e, t) {
        if (F.arr(e)) {
            if (!F.arr(t) || e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++)
                if (e[r] !== t[r]) return !1;
            return !0
        }
        return e === t
    }

    function j(e, t, r) {
        if (F.arr(e)) {
            for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
            return
        }
        for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
    }
    var N = e => F.und(e) ? [] : F.arr(e) ? e : [e];

    function $(e, t) {
        if (e.size) {
            let r = Array.from(e);
            e.clear(), r.forEach(t)
        }
    }
    var D = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return $(e, e => e(...r))
        },
        L = () => "u" < typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        B = null,
        z = !1,
        V = M,
        q = e => {
            e.to && (a = e.to), e.now && (d.now = e.now), void 0 !== e.colors && (B = e.colors), null != e.skipAnimation && (z = e.skipAnimation), e.createStringInterpolator && (n = e.createStringInterpolator), e.requestAnimationFrame && d.use(e.requestAnimationFrame), e.batchedUpdates && (d.batchedUpdates = e.batchedUpdates), e.willAdvance && (V = e.willAdvance), e.frameLoop && (d.frameLoop = e.frameLoop)
        },
        W = new Set,
        H = [],
        U = [],
        G = 0,
        Q = {
            get idle() {
                return !W.size && !H.length
            },
            start(e) {
                G > e.priority ? (W.add(e), d.onStart(K)) : (X(e), d(Z))
            },
            advance: Z,
            sort(e) {
                if (G) d.onFrame(() => Q.sort(e));
                else {
                    let t = H.indexOf(e);
                    ~t && (H.splice(t, 1), Y(e))
                }
            },
            clear() {
                H = [], W.clear()
            }
        };

    function K() {
        W.forEach(X), W.clear(), d(Z)
    }

    function X(e) {
        H.includes(e) || Y(e)
    }

    function Y(e) {
        var t, r;
        let n;
        H.splice((t = H, r = t => t.priority > e.priority, (n = t.findIndex(r)) < 0 ? t.length : n), 0, e)
    }

    function Z(e) {
        let t = U;
        for (let r = 0; r < H.length; r++) {
            let n = H[r];
            G = n.priority, !n.idle && (V(n), n.advance(e), n.idle || t.push(n))
        }
        return G = 0, (U = H).length = 0, (H = t).length > 0
    }
    var J = "[-+]?\\d*\\.?\\d+",
        ee = J + "%";

    function et() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
    }
    var er = RegExp("rgb" + et(J, J, J)),
        en = RegExp("rgba" + et(J, J, J, J)),
        ea = RegExp("hsl" + et(J, ee, ee)),
        es = RegExp("hsla" + et(J, ee, ee, J)),
        eo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ei = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        el = /^#([0-9a-fA-F]{6})$/,
        eu = /^#([0-9a-fA-F]{8})$/;

    function ec(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
    }

    function ed(e, t, r) {
        let n = r < .5 ? r * (1 + t) : r + t - r * t,
            a = 2 * r - n;
        return Math.round(255 * ec(a, n, e + 1 / 3)) << 24 | Math.round(255 * ec(a, n, e)) << 16 | Math.round(255 * ec(a, n, e - 1 / 3)) << 8
    }

    function ef(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
    }

    function eh(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
    }

    function ep(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
    }

    function em(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
    }

    function eg(e) {
        let t, r = "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 0xffffffff ? e : null : (t = el.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : B && void 0 !== B[e] ? B[e] : (t = er.exec(e)) ? (ef(t[1]) << 24 | ef(t[2]) << 16 | ef(t[3]) << 8 | 255) >>> 0 : (t = en.exec(e)) ? (ef(t[1]) << 24 | ef(t[2]) << 16 | ef(t[3]) << 8 | ep(t[4])) >>> 0 : (t = eo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = eu.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ei.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ea.exec(e)) ? (255 | ed(eh(t[1]), em(t[2]), em(t[3]))) >>> 0 : (t = es.exec(e)) ? (ed(eh(t[1]), em(t[2]), em(t[3])) | ep(t[4])) >>> 0 : null;
        if (null === r) return e;
        let n = (0xff000000 & (r = r || 0)) >>> 24,
            a = (0xff0000 & r) >>> 16,
            s = (65280 & r) >>> 8,
            o = (255 & r) / 255;
        return `rgba(${n}, ${a}, ${s}, ${o})`
    }
    var ey = (e, t, r) => {
            if (F.fun(e)) return e;
            if (F.arr(e)) return ey({
                range: e,
                output: t,
                extrapolate: r
            });
            if (F.str(e.output[0])) return n(e);
            let a = e.output,
                s = e.range || [0, 1],
                o = e.extrapolateLeft || e.extrapolate || "extend",
                i = e.extrapolateRight || e.extrapolate || "extend",
                l = e.easing || (e => e);
            return t => {
                let r = function(e, t) {
                    for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
                    return r - 1
                }(t, s);
                return function(e, t, r, n, a, s, o, i, l) {
                    let u = l ? l(e) : e;
                    if (u < t)
                        if ("identity" === o) return u;
                        else "clamp" === o && (u = t);
                    if (u > r)
                        if ("identity" === i) return u;
                        else "clamp" === i && (u = r);
                    return n === a ? n : t === r ? e <= t ? n : a : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = s(u), n === -1 / 0 ? u = -u : a === 1 / 0 ? u += n : u = u * (a - n) + n, u)
                }(t, s[r], s[r + 1], a[r], a[r + 1], l, o, i, e.map)
            }
        },
        eb = 2 * Math.PI / 3,
        ev = 2 * Math.PI / 4.5,
        ek = e => e < .36363636363636365 ? 7.5625 * e * e : e < .7272727272727273 ? 7.5625 * (e -= .5454545454545454) * e + .75 : e < .9090909090909091 ? 7.5625 * (e -= .8181818181818182) * e + .9375 : 7.5625 * (e -= .9545454545454546) * e + .984375,
        eS = {
            linear: e => e,
            easeInQuad: e => e * e,
            easeOutQuad: e => 1 - (1 - e) * (1 - e),
            easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
            easeInCubic: e => e * e * e,
            easeOutCubic: e => 1 - Math.pow(1 - e, 3),
            easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
            easeInQuart: e => e * e * e * e,
            easeOutQuart: e => 1 - Math.pow(1 - e, 4),
            easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
            easeInQuint: e => e * e * e * e * e,
            easeOutQuint: e => 1 - Math.pow(1 - e, 5),
            easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
            easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
            easeOutSine: e => Math.sin(e * Math.PI / 2),
            easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
            easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
            easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
            easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
            easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
            easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
            easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
            easeInBack: e => 2.70158 * e * e * e - 1.70158 * e * e,
            easeOutBack: e => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
            easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + 2.5949095) + 2) / 2,
            easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * eb),
            easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * eb) + 1,
            easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ev)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ev) / 2 + 1,
            easeInBounce: e => 1 - ek(1 - e),
            easeOutBounce: ek,
            easeInOutBounce: e => e < .5 ? (1 - ek(1 - 2 * e)) / 2 : (1 + ek(2 * e - 1)) / 2,
            steps: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
                return r => {
                    let n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
                    return Math.min(Math.max(("end" === t ? Math.floor(n) : Math.ceil(n)) / e, 0), 1)
                }
            }
        },
        ex = Symbol.for("FluidValue.get"),
        ew = Symbol.for("FluidValue.observers"),
        eP = e => !!(e && e[ex]),
        eC = e => e && e[ex] ? e[ex]() : e,
        eT = e => e[ew] || null;

    function e_(e, t) {
        let r = e[ew];
        r && r.forEach(e => {
            e.eventObserved ? e.eventObserved(t) : e(t)
        })
    }
    var eE = class {
            constructor(e) {
                if (!e && !(e = this.get)) throw Error("Unknown getter");
                eR(this, e)
            }
        },
        eR = (e, t) => eM(e, ex, t);

    function eI(e, t) {
        if (e[ex]) {
            let r = e[ew];
            r || eM(e, ew, r = new Set), !r.has(t) && (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
    }

    function eO(e, t) {
        let r = e[ew];
        if (r && r.has(t)) {
            let n = r.size - 1;
            n ? r.delete(t) : e[ew] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
    }
    var eM = (e, t, r) => Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        }),
        eF = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        eA = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ej = RegExp(`(${eF.source})(%|[a-z]+)`, "i"),
        eN = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        e$ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        eD = e => {
            let [t, r] = eL(e);
            if (!t || L()) return e;
            let n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
            if (n) return n.trim();
            if (r && r.startsWith("--")) {
                let e = window.getComputedStyle(document.documentElement).getPropertyValue(r);
                if (e) return e
            } else if (r && e$.test(r)) return eD(r);
            else if (r) return r;
            return e
        },
        eL = e => {
            let t = e$.exec(e);
            if (!t) return [, ];
            let [, r, n] = t;
            return [r, n]
        },
        eB = (e, t, r, n, a) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,
        ez = e => {
            s || (s = B ? RegExp(`(${Object.keys(B).join("|")})(?!\\w)`, "g") : /^\b$/);
            let t = e.output.map(e => eC(e).replace(e$, eD).replace(eA, eg).replace(s, eg)),
                r = t.map(e => e.match(eF).map(Number)),
                n = r[0].map((e, t) => r.map(e => {
                    if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                    return e[t]
                })).map(t => ey({ ...e,
                    output: t
                }));
            return e => {
                let r = !ej.test(t[0]) && t.find(e => ej.test(e)) ? .replace(eF, ""),
                    a = 0;
                return t[0].replace(eF, () => `${n[a++](e)}${r||""}`).replace(eN, eB)
            }
        },
        eV = "react-spring: ",
        eq = e => {
            let t = !1;
            if ("function" != typeof e) throw TypeError(`${eV}once requires a function parameter`);
            return function() {
                for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                t || (e(...n), t = !0)
            }
        },
        eW = eq(console.warn);

    function eH() {
        eW(`${eV}The "interpolate" function is deprecated in v9 (use "to" instead)`)
    }
    var eU = eq(console.warn);

    function eG(e) {
        return F.str(e) && ("#" == e[0] || /\d/.test(e) || !L() && e$.test(e) || e in (B || {}))
    }
    var eQ = new WeakMap,
        eK = e => e.forEach(e => {
            let {
                target: t,
                contentRect: r
            } = e;
            return eQ.get(t) ? .forEach(e => e(r))
        }),
        eX = new Set,
        eY = function(e) {
            let t, {
                container: r = document.documentElement
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (r === document.documentElement) {
                let t;
                return eX.add(e), i || (t = () => {
                    eX.forEach(e => e({
                        width: window.innerWidth,
                        height: window.innerHeight
                    }))
                }, window.addEventListener("resize", t), i = () => {
                    window.removeEventListener("resize", t)
                }), () => {
                    eX.delete(e), !eX.size && i && (i(), i = void 0)
                }
            }
            return !o && "u" > typeof ResizeObserver && (o = new ResizeObserver(eK)), (t = eQ.get(r)) || (t = new Set, eQ.set(r, t)), t.add(e), o && o.observe(r), () => {
                let t = eQ.get(r);
                t && (t.delete(e), !t.size && o && o.unobserve(r))
            }
        },
        eZ = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        },
        eJ = class {
            constructor(e, t) {
                this.createAxis = () => ({
                    current: 0,
                    progress: 0,
                    scrollLength: 0
                }), this.updateAxis = e => {
                    let t, r, n = this.info[e],
                        {
                            length: a,
                            position: s
                        } = eZ[e];
                    n.current = this.container[`scroll${s}`], n.scrollLength = this.container[`scroll${a}`] - this.container[`client${a}`], t = n.scrollLength, r = n.current, n.progress = t - 0 == 0 ? 1 : (r - 0) / (t - 0)
                }, this.update = () => {
                    this.updateAxis("x"), this.updateAxis("y")
                }, this.sendEvent = () => {
                    this.callback(this.info)
                }, this.advance = () => {
                    this.update(), this.sendEvent()
                }, this.callback = e, this.container = t, this.info = {
                    time: 0,
                    x: this.createAxis(),
                    y: this.createAxis()
                }
            }
        },
        e0 = new WeakMap,
        e1 = new WeakMap,
        e2 = new WeakMap,
        e3 = e => e === document.documentElement ? window : e,
        e5 = function(e) {
            let {
                container: t = document.documentElement
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = e2.get(t);
            r || (r = new Set, e2.set(t, r));
            let n = new eJ(e, t);
            if (r.add(n), !e0.has(t)) {
                let e = () => (r ? .forEach(e => e.advance()), !0);
                e0.set(t, e);
                let n = e3(t);
                window.addEventListener("resize", e, {
                    passive: !0
                }), t !== document.documentElement && e1.set(t, eY(e, {
                    container: t
                })), n.addEventListener("scroll", e, {
                    passive: !0
                })
            }
            let a = e0.get(t);
            return d(a), () => {
                d.cancel(a);
                let e = e2.get(t);
                if (!e || (e.delete(n), e.size)) return;
                let r = e0.get(t);
                e0.delete(t), r && (e3(t).removeEventListener("scroll", r), window.removeEventListener("resize", r), e1.get(t) ? .())
            }
        },
        e4 = L() ? u.useEffect : u.useLayoutEffect;

    function e9() {
        let e, t = (0, u.useState)()[1],
            r = (e = (0, u.useRef)(!1), e4(() => (e.current = !0, () => {
                e.current = !1
            }), []), e);
        return () => {
            r.current && t(Math.random())
        }
    }
    var e6 = e => (0, u.useEffect)(e, e8),
        e8 = [];

    function e7(e) {
        let t = (0, u.useRef)();
        return (0, u.useEffect)(() => {
            t.current = e
        }), t.current
    }
    var te = () => {
            let [e, t] = (0, u.useState)(null);
            return e4(() => {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    r = e => {
                        t(e.matches), q({
                            skipAnimation: e.matches
                        })
                    };
                return r(e), e.addEventListener ? e.addEventListener("change", r) : e.addListener(r), () => {
                    e.removeEventListener ? e.removeEventListener("change", r) : e.removeListener(r)
                }
            }, []), e
        },
        tt = Symbol.for("Animated:node"),
        tr = e => e && e[tt],
        tn = (e, t) => Object.defineProperty(e, tt, {
            value: t,
            writable: !0,
            configurable: !0
        }),
        ta = e => e && e[tt] && e[tt].getPayload(),
        ts = class {
            constructor() {
                tn(this, this)
            }
            getPayload() {
                return this.payload || []
            }
        },
        to = class extends ts {
            constructor(e) {
                super(), this._value = e, this.done = !0, this.durationProgress = 0, F.num(this._value) && (this.lastPosition = this._value)
            }
            static create(e) {
                return new to(e)
            }
            getPayload() {
                return [this]
            }
            getValue() {
                return this._value
            }
            setValue(e, t) {
                return F.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
            }
            reset() {
                let {
                    done: e
                } = this;
                this.done = !1, F.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
            }
        },
        ti = class extends to {
            constructor(e) {
                super(0), this._string = null, this._toString = ey({
                    output: [e, e]
                })
            }
            static create(e) {
                return new ti(e)
            }
            getValue() {
                let e = this._string;
                return null == e ? this._string = this._toString(this._value) : e
            }
            setValue(e) {
                if (F.str(e)) {
                    if (e == this._string) return !1;
                    this._string = e, this._value = 1
                } else {
                    if (!super.setValue(e)) return !1;
                    this._string = null
                }
                return !0
            }
            reset(e) {
                e && (this._toString = ey({
                    output: [this.getValue(), e]
                })), this._value = 0, super.reset()
            }
        },
        tl = {
            dependencies: null
        },
        tu = class extends ts {
            constructor(e) {
                super(), this.source = e, this.setValue(e)
            }
            getValue(e) {
                let t = {};
                return j(this.source, (r, n) => {
                    r && r[tt] === r ? t[n] = r.getValue(e) : eP(r) ? t[n] = eC(r) : e || (t[n] = r)
                }), t
            }
            setValue(e) {
                this.source = e, this.payload = this._makePayload(e)
            }
            reset() {
                let e;
                this.payload && (e = this.payload, e.forEach(e => e.reset()))
            }
            _makePayload(e) {
                if (e) {
                    let t = new Set;
                    return j(e, this._addToPayload, t), Array.from(t)
                }
            }
            _addToPayload(e) {
                let t;
                tl.dependencies && eP(e) && tl.dependencies.add(e);
                let r = ta(e);
                r && (t = e => this.add(e), r.forEach(t))
            }
        },
        tc = class extends tu {
            constructor(e) {
                super(e)
            }
            static create(e) {
                return new tc(e)
            }
            getValue() {
                return this.source.map(e => e.getValue())
            }
            setValue(e) {
                let t = this.getPayload();
                return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(td)), !0)
            }
        };

    function td(e) {
        return (eG(e) ? ti : to).create(e)
    }

    function tf(e) {
        let t = tr(e);
        return t ? t.constructor : F.arr(e) ? tc : eG(e) ? ti : to
    }
    var th = (e, t) => {
            let r = !F.fun(e) || e.prototype && e.prototype.isReactComponent;
            return (0, u.forwardRef)((n, a) => {
                var s, o;
                let i, l = (0, u.useRef)(null),
                    c = r && (0, u.useCallback)(e => {
                        var t, r;
                        t = a, r = e, t && (F.fun(t) ? t(r) : t.current = r), l.current = r
                    }, [a]),
                    [f, h] = (s = n, o = t, tl.dependencies = i = new Set, s.style && (s = { ...s,
                        style: o.createAnimatedStyle(s.style)
                    }), s = new tu(s), tl.dependencies = null, [s, i]),
                    p = e9(),
                    m = () => {
                        let e = l.current;
                        r && !e || !1 === (!!e && t.applyAnimatedValues(e, f.getValue(!0))) && p()
                    },
                    g = new tp(m, h),
                    y = (0, u.useRef)();
                e4(() => {
                    let e;
                    return y.current = g, e = e => eI(e, g), h.forEach(e), () => {
                        if (y.current) {
                            let e;
                            e = y.current.deps, e.forEach(e => eO(e, y.current)), d.cancel(y.current.update)
                        }
                    }
                }), (0, u.useEffect)(m, []), e6(() => () => {
                    let e, t = y.current;
                    e = t.deps, e.forEach(e => eO(e, t))
                });
                let b = t.getComponentProps(f.getValue());
                return u.createElement(e, { ...b,
                    ref: c
                })
            })
        },
        tp = class {
            constructor(e, t) {
                this.update = e, this.deps = t
            }
            eventObserved(e) {
                "change" == e.type && d.write(this.update)
            }
        },
        tm = Symbol.for("AnimatedComponent"),
        tg = e => F.str(e) ? e : e && F.str(e.displayName) ? e.displayName : F.fun(e) && e.name || null,
        ty = class {};

    function tb(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return F.fun(e) ? e(...r) : e
    }
    e.s(["Any", () => ty], 353022);
    var tv = (e, t) => !0 === e || !!(t && e && (F.fun(e) ? e(t) : N(e).includes(t))),
        tk = (e, t) => F.obj(e) ? t && e[t] : e,
        tS = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        tx = e => e,
        tw = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tx,
                r = tP;
            e.default && !0 !== e.default && (r = Object.keys(e = e.default));
            let n = {};
            for (let a of r) {
                let r = t(e[a], a);
                F.und(r) || (n[a] = r)
            }
            return n
        },
        tP = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        tC = {
            config: 1,
            from: 1,
            to: 1,
            ref: 1,
            loop: 1,
            reset: 1,
            pause: 1,
            cancel: 1,
            reverse: 1,
            immediate: 1,
            default: 1,
            delay: 1,
            onProps: 1,
            onStart: 1,
            onChange: 1,
            onPause: 1,
            onResume: 1,
            onRest: 1,
            onResolve: 1,
            items: 1,
            trail: 1,
            sort: 1,
            expires: 1,
            initial: 1,
            enter: 1,
            update: 1,
            leave: 1,
            children: 1,
            onDestroyed: 1,
            keys: 1,
            callId: 1,
            parentId: 1
        };

    function tT(e) {
        let t = function(e) {
            let t = {},
                r = 0;
            if (j(e, (e, n) => {
                    !tC[n] && (t[n] = e, r++)
                }), r) return t
        }(e);
        if (t) {
            let r = {
                to: t
            };
            return j(e, (e, n) => n in t || (r[n] = e)), r
        }
        return { ...e
        }
    }

    function t_(e) {
        return e = eC(e), F.arr(e) ? e.map(t_) : eG(e) ? R.createStringInterpolator({
            range: [0, 1],
            output: [e, e]
        })(1) : e
    }

    function tE(e) {
        for (let t in e) return !0;
        return !1
    }

    function tR(e) {
        return F.fun(e) || F.arr(e) && F.obj(e[0])
    }

    function tI(e, t) {
        e.ref ? .delete(e), t ? .delete(e)
    }

    function tO(e, t) {
        t && e.ref !== t && (e.ref ? .delete(e), t.add(e), e.ref = t)
    }

    function tM(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
        e4(() => {
            if (t) {
                let n = 0;
                e.forEach((e, a) => {
                    let s = e.current;
                    if (s.length) {
                        let o = r * t[a];
                        isNaN(o) ? o = n : n = o, s.forEach(e => {
                            let t;
                            t = e.queue, t.forEach(e => {
                                let t = e.delay;
                                e.delay = e => o + tb(t || 0, e)
                            })
                        }), e.start()
                    }
                })
            } else {
                let t = Promise.resolve();
                e.forEach(e => {
                    let r = e.current;
                    if (r.length) {
                        let n = r.map(e => {
                            let t = e.queue;
                            return e.queue = [], t
                        });
                        t = t.then(() => {
                            let t;
                            return t = (e, t) => {
                                let r, a;
                                return r = n[t] || [], a = t => e.queue.push(t), r.forEach(a)
                            }, r.forEach(t), Promise.all(e.start())
                        })
                    }
                })
            }
        })
    }
    var tF = {
            default: {
                tension: 170,
                friction: 26
            },
            gentle: {
                tension: 120,
                friction: 14
            },
            wobbly: {
                tension: 180,
                friction: 12
            },
            stiff: {
                tension: 210,
                friction: 20
            },
            slow: {
                tension: 280,
                friction: 60
            },
            molasses: {
                tension: 280,
                friction: 120
            }
        },
        tA = { ...tF.default,
            mass: 1,
            damping: 1,
            easing: eS.linear,
            clamp: !1
        },
        tj = class {
            constructor() {
                this.velocity = 0, Object.assign(this, tA)
            }
        };

    function tN(e, t) {
        if (F.und(t.decay)) {
            let r = !F.und(t.tension) || !F.und(t.friction);
            !r && F.und(t.frequency) && F.und(t.damping) && F.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
    }
    var t$ = [],
        tD = class {
            constructor() {
                this.changed = !1, this.values = t$, this.toValues = null, this.fromValues = t$, this.config = new tj, this.immediate = !1
            }
        };

    function tL(e, t) {
        let {
            key: r,
            props: n,
            defaultProps: a,
            state: s,
            actions: o
        } = t;
        return new Promise((t, i) => {
            let l, u, c = tv(n.cancel ? ? a ? .cancel, r);
            if (c) p();
            else {
                F.und(n.pause) || (s.paused = tv(n.pause, r));
                let e = a ? .pause;
                !0 !== e && (e = s.paused || tv(e, r)), l = tb(n.delay || 0, r), e ? (s.resumeQueue.add(h), o.pause()) : (o.resume(), h())
            }

            function f() {
                s.resumeQueue.add(h), s.timeouts.delete(u), u.cancel(), l = u.time - d.now()
            }

            function h() {
                l > 0 && !R.skipAnimation ? (s.delayed = !0, u = d.setTimeout(p, l), s.pauseQueue.add(f), s.timeouts.add(u)) : p()
            }

            function p() {
                s.delayed && (s.delayed = !1), s.pauseQueue.delete(f), s.timeouts.delete(u), e <= (s.cancelId || 0) && (c = !0);
                try {
                    o.start({ ...n,
                        callId: e,
                        cancel: c
                    }, t)
                } catch (e) {
                    i(e)
                }
            }
        })
    }
    var tB = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? tq(e.get()) : t.every(e => e.noop) ? tz(e.get()) : tV(e.get(), t.every(e => e.finished)),
        tz = e => ({
            value: e,
            noop: !0,
            finished: !0,
            cancelled: !1
        }),
        tV = function(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return {
                value: e,
                finished: t,
                cancelled: r
            }
        },
        tq = e => ({
            value: e,
            cancelled: !0,
            finished: !1
        });

    function tW(e, t, r, n) {
        let {
            callId: a,
            parentId: s,
            onRest: o
        } = t, {
            asyncTo: i,
            promise: l
        } = r;
        return s || e !== i || t.reset ? r.promise = (async () => {
            let u, c, f;
            r.asyncId = a, r.asyncTo = e;
            let h = tw(t, (e, t) => "onRest" === t ? void 0 : e),
                p = new Promise((e, t) => (u = e, c = t)),
                m = e => {
                    let t = a <= (r.cancelId || 0) && tq(n) || a !== r.asyncId && tV(n, !1);
                    if (t) throw e.result = t, c(e), e
                },
                g = (e, t) => {
                    let s = new tU,
                        o = new tG;
                    return (async () => {
                        if (R.skipAnimation) throw tH(r), o.result = tV(n, !1), c(o), o;
                        m(s);
                        let i = F.obj(e) ? { ...e
                        } : { ...t,
                            to: e
                        };
                        i.parentId = a, j(h, (e, t) => {
                            F.und(i[t]) && (i[t] = e)
                        });
                        let l = await n.start(i);
                        return m(s), r.paused && await new Promise(e => {
                            r.resumeQueue.add(e)
                        }), l
                    })()
                };
            if (R.skipAnimation) return tH(r), tV(n, !1);
            try {
                let t;
                t = F.arr(e) ? (async e => {
                    for (let t of e) await g(t)
                })(e) : Promise.resolve(e(g, n.stop.bind(n))), await Promise.all([t.then(u), p]), f = tV(n.get(), !0, !1)
            } catch (e) {
                if (e instanceof tU) f = e.result;
                else if (e instanceof tG) f = e.result;
                else throw e
            } finally {
                a == r.asyncId && (r.asyncId = s, r.asyncTo = s ? i : void 0, r.promise = s ? l : void 0)
            }
            return F.fun(o) && d.batchedUpdates(() => {
                o(f, n, n.item)
            }), f
        })() : l
    }

    function tH(e, t) {
        $(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
    }
    var tU = class extends Error {
            constructor() {
                super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
            }
        },
        tG = class extends Error {
            constructor() {
                super("SkipAnimationSignal")
            }
        },
        tQ = 1,
        tK = class extends eE {
            constructor() {
                super(...arguments), this.id = tQ++, this._priority = 0
            }
            get priority() {
                return this._priority
            }
            set priority(e) {
                this._priority != e && (this._priority = e, this._onPriorityChange(e))
            }
            get() {
                let e = tr(this);
                return e && e.getValue()
            }
            to() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return R.to(this, t)
            }
            interpolate() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return eH(), R.to(this, t)
            }
            toJSON() {
                return this.get()
            }
            observerAdded(e) {
                1 == e && this._attach()
            }
            observerRemoved(e) {
                0 == e && this._detach()
            }
            _attach() {}
            _detach() {}
            _onChange(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e_(this, {
                    type: "change",
                    parent: this,
                    value: e,
                    idle: t
                })
            }
            _onPriorityChange(e) {
                this.idle || Q.sort(this), e_(this, {
                    type: "priority",
                    parent: this,
                    priority: e
                })
            }
        },
        tX = Symbol.for("SpringPhase"),
        tY = e => (1 & e[tX]) > 0,
        tZ = e => (2 & e[tX]) > 0,
        tJ = e => (4 & e[tX]) > 0,
        t0 = (e, t) => t ? e[tX] |= 3 : e[tX] &= -3,
        t1 = (e, t) => t ? e[tX] |= 4 : e[tX] &= -5,
        t2 = class extends tK {
            constructor(e, t) {
                if (super(), this.animation = new tD, this.defaultProps = {}, this._state = {
                        paused: !1,
                        delayed: !1,
                        pauseQueue: new Set,
                        resumeQueue: new Set,
                        timeouts: new Set
                    }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !F.und(e) || !F.und(t)) {
                    const r = F.obj(e) ? { ...e
                    } : { ...t,
                        from: e
                    };
                    F.und(r.default) && (r.default = !0), this.start(r)
                }
            }
            get idle() {
                return !(tZ(this) || this._state.asyncTo) || tJ(this)
            }
            get goal() {
                return eC(this.animation.to)
            }
            get velocity() {
                let e = tr(this);
                return e instanceof to ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
            }
            get hasAnimated() {
                return tY(this)
            }
            get isAnimating() {
                return tZ(this)
            }
            get isPaused() {
                return tJ(this)
            }
            get isDelayed() {
                return this._state.delayed
            }
            advance(e) {
                let t = !0,
                    r = !1,
                    n = this.animation,
                    {
                        toValues: a
                    } = n,
                    {
                        config: s
                    } = n,
                    o = ta(n.to);
                !o && eP(n.to) && (a = N(eC(n.to))), n.values.forEach((i, l) => {
                    if (i.done) return;
                    let u = i.constructor == ti ? 1 : o ? o[l].lastPosition : a[l],
                        c = n.immediate,
                        d = u;
                    if (!c) {
                        let t;
                        if (d = i.lastPosition, s.tension <= 0) {
                            i.done = !0;
                            return
                        }
                        let r = i.elapsedTime += e,
                            a = n.fromValues[l],
                            o = null != i.v0 ? i.v0 : i.v0 = F.arr(s.velocity) ? s.velocity[l] : s.velocity,
                            f = s.precision || (a == u ? .005 : Math.min(1, .001 * Math.abs(u - a)));
                        if (F.und(s.duration))
                            if (s.decay) {
                                let e = !0 === s.decay ? .998 : s.decay,
                                    n = Math.exp(-(1 - e) * r);
                                d = a + o / (1 - e) * (1 - n), c = Math.abs(i.lastPosition - d) <= f, t = o * n
                            } else {
                                t = null == i.lastVelocity ? o : i.lastVelocity;
                                let r = s.restVelocity || f / 10,
                                    n = s.clamp ? 0 : s.bounce,
                                    l = !F.und(n),
                                    h = a == u ? i.v0 > 0 : a < u,
                                    p = Math.ceil(e / 1);
                                for (let e = 0; e < p && !(!(Math.abs(t) > r) && (c = Math.abs(u - d) <= f)); ++e) {
                                    l && (d == u || d > u == h) && (t = -t * n, d = u);
                                    let e = (-(1e-6 * s.tension) * (d - u) + -(.001 * s.friction) * t) / s.mass;
                                    t += +e, d += +t
                                }
                            }
                        else {
                            let n = 1;
                            s.duration > 0 && (this._memoizedDuration !== s.duration && (this._memoizedDuration = s.duration, i.durationProgress > 0 && (i.elapsedTime = s.duration * i.durationProgress, r = i.elapsedTime += e)), i.durationProgress = n = (n = (s.progress || 0) + r / this._memoizedDuration) > 1 ? 1 : n < 0 ? 0 : n), t = ((d = a + s.easing(n) * (u - a)) - i.lastPosition) / e, c = 1 == n
                        }
                        i.lastVelocity = t, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
                    }
                    o && !o[l].done && (c = !1), c ? i.done = !0 : t = !1, i.setValue(d, s.round) && (r = !0)
                });
                let i = tr(this),
                    l = i.getValue();
                if (t) {
                    let e = eC(n.to);
                    (l !== e || r) && !s.decay ? (i.setValue(e), this._onChange(e)) : r && s.decay && this._onChange(l), this._stop()
                } else r && this._onChange(l)
            }
            set(e) {
                return d.batchedUpdates(() => {
                    this._stop(), this._focus(e), this._set(e)
                }), this
            }
            pause() {
                this._update({
                    pause: !0
                })
            }
            resume() {
                this._update({
                    pause: !1
                })
            }
            finish() {
                if (tZ(this)) {
                    let {
                        to: e,
                        config: t
                    } = this.animation;
                    d.batchedUpdates(() => {
                        this._onStart(), t.decay || this._set(e, !1), this._stop()
                    })
                }
                return this
            }
            update(e) {
                return (this.queue || (this.queue = [])).push(e), this
            }
            start(e, t) {
                let r;
                return F.und(e) ? (r = this.queue || [], this.queue = []) : r = [F.obj(e) ? e : { ...t,
                    to: e
                }], Promise.all(r.map(e => this._update(e))).then(e => tB(this, e))
            }
            stop(e) {
                let {
                    to: t
                } = this.animation;
                return this._focus(this.get()), tH(this._state, e && this._lastCallId), d.batchedUpdates(() => this._stop(t, e)), this
            }
            reset() {
                this._update({
                    reset: !0
                })
            }
            eventObserved(e) {
                "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
            }
            _prepareNode(e) {
                let t = this.key || "",
                    {
                        to: r,
                        from: n
                    } = e;
                (null == (r = F.obj(r) ? r[t] : r) || tR(r)) && (r = void 0), null == (n = F.obj(n) ? n[t] : n) && (n = void 0);
                let a = {
                    to: r,
                    from: n
                };
                return !tY(this) && (e.reverse && ([r, n] = [n, r]), n = eC(n), F.und(n) ? tr(this) || this._set(r) : this._set(n)), a
            }
            _update(e, t) {
                let { ...r
                } = e, {
                    key: n,
                    defaultProps: a
                } = this;
                r.default && Object.assign(a, tw(r, (e, t) => /^on/.test(t) ? tk(e, n) : e)), t8(this, r, "onProps"), t7(this, "onProps", r, this);
                let s = this._prepareNode(r);
                if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
                let o = this._state;
                return tL(++this._lastCallId, {
                    key: n,
                    props: r,
                    defaultProps: a,
                    state: o,
                    actions: {
                        pause: () => {
                            tJ(this) || (t1(this, !0), D(o.pauseQueue), t7(this, "onPause", tV(this, t3(this, this.animation.to)), this))
                        },
                        resume: () => {
                            tJ(this) && (t1(this, !1), tZ(this) && this._resume(), D(o.resumeQueue), t7(this, "onResume", tV(this, t3(this, this.animation.to)), this))
                        },
                        start: this._merge.bind(this, s)
                    }
                }).then(e => {
                    if (r.loop && e.finished && !(t && e.noop)) {
                        let e = t5(r);
                        if (e) return this._update(e, !0)
                    }
                    return e
                })
            }
            _merge(e, t, r) {
                if (t.cancel) return this.stop(!0), r(tq(this));
                let n = !F.und(e.to),
                    a = !F.und(e.from);
                if (n || a)
                    if (!(t.callId > this._lastToId)) return r(tq(this));
                    else this._lastToId = t.callId;
                let {
                    key: s,
                    defaultProps: o,
                    animation: i
                } = this, {
                    to: l,
                    from: u
                } = i, {
                    to: c = l,
                    from: f = u
                } = e;
                a && !n && (!t.default || F.und(c)) && (c = f), t.reverse && ([c, f] = [f, c]);
                let h = !A(f, u);
                h && (i.from = f), f = eC(f);
                let p = !A(c, l);
                p && this._focus(c);
                let m = tR(t.to),
                    {
                        config: g
                    } = i,
                    {
                        decay: y,
                        velocity: b
                    } = g;
                (n || a) && (g.velocity = 0), t.config && !m && function(e, t, r) {
                    for (let n in r && (tN(r = { ...r
                        }, t), t = { ...r,
                            ...t
                        }), tN(e, t), Object.assign(e, t), tA) null == e[n] && (e[n] = tA[n]);
                    let {
                        frequency: n,
                        damping: a
                    } = e, {
                        mass: s
                    } = e;
                    F.und(n) || (n < .01 && (n = .01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * s, e.friction = 4 * Math.PI * a * s / n)
                }(g, tb(t.config, s), t.config !== o.config ? tb(o.config, s) : void 0);
                let v = tr(this);
                if (!v || F.und(c)) return r(tV(this, !0));
                let k = F.und(t.reset) ? a && !t.default : !F.und(f) && tv(t.reset, s),
                    S = k ? f : this.get(),
                    x = t_(c),
                    w = F.num(x) || F.arr(x) || eG(x),
                    P = !m && (!w || tv(o.immediate || t.immediate, s));
                if (p) {
                    let e = tf(c);
                    if (e !== v.constructor)
                        if (P) v = this._set(x);
                        else throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`)
                }
                let C = v.constructor,
                    T = eP(c),
                    _ = !1;
                if (!T) {
                    let e = k || !tY(this) && h;
                    (p || e) && (T = !(_ = A(t_(S), x))), (A(i.immediate, P) || P) && A(g.decay, y) && A(g.velocity, b) || (T = !0)
                }
                if (_ && tZ(this) && (i.changed && !k ? T = !0 : T || this._stop(l)), !m && ((T || eP(l)) && (i.values = v.getPayload(), i.toValues = eP(c) ? null : C == ti ? [1] : N(x)), i.immediate != P && (i.immediate = P, P || k || this._set(l)), T)) {
                    let e, {
                        onRest: n
                    } = i;
                    e = e => t8(this, t, e), t6.forEach(e);
                    let a = tV(this, t3(this, l));
                    D(this._pendingCalls, a), this._pendingCalls.add(r), i.changed && d.batchedUpdates(() => {
                        i.changed = !k, n ? .(a, this), k ? tb(o.onRest, a) : i.onStart ? .(a, this)
                    })
                }
                k && this._set(S), m ? r(tW(t.to, t, this._state, this)) : T ? this._start() : tZ(this) && !p ? this._pendingCalls.add(r) : r(tz(S))
            }
            _focus(e) {
                let t = this.animation;
                e !== t.to && (eT(this) && this._detach(), t.to = e, eT(this) && this._attach())
            }
            _attach() {
                let e = 0,
                    {
                        to: t
                    } = this.animation;
                eP(t) && (eI(t, this), t instanceof tK && (e = t.priority + 1)), this.priority = e
            }
            _detach() {
                let {
                    to: e
                } = this.animation;
                eP(e) && eO(e, this)
            }
            _set(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = eC(e);
                if (!F.und(r)) {
                    let e = tr(this);
                    if (!e || !A(r, e.getValue())) {
                        let n = tf(r);
                        e && e.constructor == n ? e.setValue(r) : tn(this, n.create(r)), e && d.batchedUpdates(() => {
                            this._onChange(r, t)
                        })
                    }
                }
                return tr(this)
            }
            _onStart() {
                let e = this.animation;
                e.changed || (e.changed = !0, t7(this, "onStart", tV(this, t3(this, e.to)), this))
            }
            _onChange(e, t) {
                t || (this._onStart(), tb(this.animation.onChange, e, this)), tb(this.defaultProps.onChange, e, this), super._onChange(e, t)
            }
            _start() {
                let e = this.animation;
                tr(this).reset(eC(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), !tZ(this) && (t0(this, !0), tJ(this) || this._resume())
            }
            _resume() {
                R.skipAnimation ? this.finish() : Q.start(this)
            }
            _stop(e, t) {
                if (tZ(this)) {
                    let r;
                    t0(this, !1);
                    let n = this.animation;
                    r = n.values, r.forEach(e => {
                        e.done = !0
                    }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), e_(this, {
                        type: "idle",
                        parent: this
                    });
                    let a = t ? tq(this.get()) : tV(this.get(), t3(this, e ? ? n.to));
                    D(this._pendingCalls, a), n.changed && (n.changed = !1, t7(this, "onRest", a, this))
                }
            }
        };

    function t3(e, t) {
        let r = t_(t);
        return A(t_(e.get()), r)
    }

    function t5(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.loop,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to,
            n = tb(t);
        if (n) {
            let a = !0 !== n && tT(n),
                s = (a || e).reverse,
                o = !a || a.reset;
            return t4({ ...e,
                loop: t,
                default: !1,
                pause: void 0,
                to: !s || tR(r) ? r : void 0,
                from: o ? e.from : void 0,
                reset: o,
                ...a
            })
        }
    }

    function t4(e) {
        let {
            to: t,
            from: r
        } = e = tT(e), n = new Set;
        return F.obj(t) && t9(t, n), F.obj(r) && t9(r, n), e.keys = n.size ? Array.from(n) : null, e
    }

    function t9(e, t) {
        j(e, (e, r) => null != e && t.add(r))
    }
    var t6 = ["onStart", "onRest", "onChange", "onPause", "onResume"];

    function t8(e, t, r) {
        e.animation[r] = t[r] !== tS(t, r) ? tk(t[r], e.key) : void 0
    }

    function t7(e, t) {
        for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) n[a - 2] = arguments[a];
        e.animation[t] ? .(...n), e.defaultProps[t] ? .(...n)
    }
    var re = ["onStart", "onChange", "onRest"],
        rt = 1,
        rr = class {
            constructor(e, t) {
                this.id = rt++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                    paused: !1,
                    pauseQueue: new Set,
                    resumeQueue: new Set,
                    timeouts: new Set
                }, this._events = {
                    onStart: new Map,
                    onChange: new Map,
                    onRest: new Map
                }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                    default: !0,
                    ...e
                })
            }
            get idle() {
                return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
            }
            get item() {
                return this._item
            }
            set item(e) {
                this._item = e
            }
            get() {
                let e = {};
                return this.each((t, r) => e[r] = t.get()), e
            }
            set(e) {
                for (let t in e) {
                    let r = e[t];
                    F.und(r) || this.springs[t].set(r)
                }
            }
            update(e) {
                return e && this.queue.push(t4(e)), this
            }
            start(e) {
                let {
                    queue: t
                } = this;
                return (e ? t = N(e).map(t4) : this.queue = [], this._flush) ? this._flush(this, t) : (ru(this, t), rn(this, t))
            }
            stop(e, t) {
                if (!!e !== e && (t = e), t) {
                    let r, n = this.springs;
                    r = N(t), r.forEach(t => n[t].stop(!!e))
                } else tH(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
                return this
            }
            pause(e) {
                if (F.und(e)) this.start({
                    pause: !0
                });
                else {
                    let t, r = this.springs;
                    t = N(e), t.forEach(e => r[e].pause())
                }
                return this
            }
            resume(e) {
                if (F.und(e)) this.start({
                    pause: !1
                });
                else {
                    let t, r = this.springs;
                    t = N(e), t.forEach(e => r[e].resume())
                }
                return this
            }
            each(e) {
                j(this.springs, e)
            }
            _onFrame() {
                let {
                    onStart: e,
                    onChange: t,
                    onRest: r
                } = this._events, n = this._active.size > 0, a = this._changed.size > 0;
                (n && !this._started || a && !this._started) && (this._started = !0, $(e, e => {
                    let [t, r] = e;
                    r.value = this.get(), t(r, this, this._item)
                }));
                let s = !n && this._started,
                    o = a || s && r.size ? this.get() : null;
                a && t.size && $(t, e => {
                    let [t, r] = e;
                    r.value = o, t(r, this, this._item)
                }), s && (this._started = !1, $(r, e => {
                    let [t, r] = e;
                    r.value = o, t(r, this, this._item)
                }))
            }
            eventObserved(e) {
                if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
                else {
                    if ("idle" != e.type) return;
                    this._active.delete(e.parent)
                }
                d.onFrame(this._onFrame)
            }
        };

    function rn(e, t) {
        return Promise.all(t.map(t => ra(e, t))).then(t => tB(e, t))
    }
    async function ra(e, t, r) {
        let {
            keys: n,
            to: a,
            from: s,
            loop: o,
            onRest: i,
            onResolve: l
        } = t, u = F.obj(t.default) && t.default;
        o && (t.loop = !1), !1 === a && (t.to = null), !1 === s && (t.from = null);
        let c = F.arr(a) || F.fun(a) ? a : void 0;
        if (c) t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0);
        else re.forEach(r => {
            let n = t[r];
            if (F.fun(n)) {
                let a = e._events[r];
                t[r] = e => {
                    let {
                        finished: t,
                        cancelled: r
                    } = e, s = a.get(n);
                    s ? (t || (s.finished = !1), r && (s.cancelled = !0)) : a.set(n, {
                        value: null,
                        finished: t || !1,
                        cancelled: r || !1
                    })
                }, u && (u[r] = t[r])
            }
        });
        let f = e._state;
        !f.paused === t.pause ? (f.paused = t.pause, D(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
        let h = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
            p = !0 === t.cancel || !0 === tS(t, "cancel");
        (c || p && f.asyncId) && h.push(tL(++e._lastAsyncId, {
            props: t,
            state: f,
            actions: {
                pause: M,
                resume: M,
                start(t, r) {
                    p ? (tH(f, e._lastAsyncId), r(tq(e))) : (t.onRest = i, r(tW(c, t, f, e)))
                }
            }
        })), f.paused && await new Promise(e => {
            f.resumeQueue.add(e)
        });
        let m = tB(e, await Promise.all(h));
        if (o && m.finished && !(r && m.noop)) {
            let r = t5(t, o, a);
            if (r) return ru(e, [r]), ra(e, r, !0)
        }
        return l && d.batchedUpdates(() => l(m, e, e.item)), m
    }

    function rs(e, t) {
        let r, n, a = { ...e.springs
        };
        return t && (r = N(t), n = e => {
            F.und(e.keys) && (e = t4(e)), F.obj(e.to) || (e = { ...e,
                to: void 0
            }), rl(a, e, e => ri(e))
        }, r.forEach(n)), ro(e, a), a
    }

    function ro(e, t) {
        j(t, (t, r) => {
            e.springs[r] || (e.springs[r] = t, eI(t, e))
        })
    }

    function ri(e, t) {
        let r = new t2;
        return r.key = e, t && eI(r, t), r
    }

    function rl(e, t, r) {
        let n;
        t.keys && (n = t.keys, n.forEach(n => {
            (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
    }

    function ru(e, t) {
        t.forEach(t => {
            rl(e.springs, t, t => ri(t, e))
        })
    }
    var rc = e => {
            let {
                children: t,
                ...r
            } = e, n = (0, u.useContext)(rd), a = r.pause || !!n.pause, s = r.immediate || !!n.immediate;
            r = function(e, t) {
                let [r] = (0, u.useState)(() => ({
                    inputs: t,
                    result: e()
                })), n = (0, u.useRef)(), a = n.current, s = a;
                return s ? t && s.inputs && function(e, t) {
                    if (e.length !== t.length) return !1;
                    for (let r = 0; r < e.length; r++)
                        if (e[r] !== t[r]) return !1;
                    return !0
                }(t, s.inputs) || (s = {
                    inputs: t,
                    result: e()
                }) : s = r, (0, u.useEffect)(() => {
                    n.current = s, a == r && (r.inputs = r.result = void 0)
                }, [s]), s.result
            }(() => ({
                pause: a,
                immediate: s
            }), [a, s]);
            let {
                Provider: o
            } = rd;
            return u.createElement(o, {
                value: r
            }, t)
        },
        rd = (r = {}, Object.assign(t = rc, u.createContext(r)), t.Provider._context = t, t.Consumer._context = t, t);
    rc.Provider = rd.Provider, rc.Consumer = rd.Consumer;
    var rf = () => {
        let e = [],
            t = function(t) {
                let n;
                eU(`${eV}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
                let a = [];
                return n = (e, n) => {
                    if (F.und(t)) a.push(e.start());
                    else {
                        let s = r(t, e, n);
                        s && a.push(e.start(s))
                    }
                }, e.forEach(n), a
            };
        t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
        }, t.delete = function(t) {
            let r = e.indexOf(t);
            ~r && e.splice(r, 1)
        }, t.pause = function() {
            let t;
            return t = e => e.pause(...arguments), e.forEach(t), this
        }, t.resume = function() {
            let t;
            return t = e => e.resume(...arguments), e.forEach(t), this
        }, t.set = function(t) {
            e.forEach((e, r) => {
                let n = F.fun(t) ? t(r, e) : t;
                n && e.set(n)
            })
        }, t.start = function(t) {
            let r, n = [];
            return r = (e, r) => {
                if (F.und(t)) n.push(e.start());
                else {
                    let a = this._getProps(t, e, r);
                    a && n.push(e.start(a))
                }
            }, e.forEach(r), n
        }, t.stop = function() {
            let t;
            return t = e => e.stop(...arguments), e.forEach(t), this
        }, t.update = function(t) {
            let r;
            return r = (e, r) => e.update(this._getProps(t, e, r)), e.forEach(r), this
        };
        let r = function(e, t, r) {
            return F.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
    };

    function rh(e, t, r) {
        let n = F.fun(t) && t;
        n && !r && (r = []);
        let a = (0, u.useMemo)(() => n || 3 == arguments.length ? rf() : void 0, []),
            s = (0, u.useRef)(0),
            o = e9(),
            i = (0, u.useMemo)(() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                    let r = rs(e, t);
                    return !(s.current > 0) || i.queue.length || Object.keys(r).some(t => !e.springs[t]) ? new Promise(n => {
                        ro(e, r), i.queue.push(() => {
                            n(rn(e, t))
                        }), o()
                    }) : rn(e, t)
                }
            }), []),
            l = (0, u.useRef)([...i.ctrls]),
            c = [],
            d = e7(e) || 0;

        function f(e, r) {
            for (let a = e; a < r; a++) {
                let e = l.current[a] || (l.current[a] = new rr(null, i.flush)),
                    r = n ? n(a, e) : t[a];
                r && (c[a] = function(e) {
                    let t = t4(e);
                    return F.und(t.default) && (t.default = tw(t)), t
                }(r))
            }
        }(0, u.useMemo)(() => {
            let t;
            t = l.current.slice(e, d), t.forEach(e => {
                tI(e, a), e.stop(!0)
            }), l.current.length = e, f(d, e)
        }, [e]), (0, u.useMemo)(() => {
            f(0, Math.min(d, e))
        }, r);
        let h = l.current.map((e, t) => rs(e, c[t])),
            p = (0, u.useContext)(rc),
            m = e7(p),
            g = p !== m && tE(p);
        e4(() => {
            let e;
            s.current++, i.ctrls = l.current;
            let {
                queue: t
            } = i;
            t.length && (i.queue = [], t.forEach(e => e()));
            e = l.current, e.forEach((e, t) => {
                a ? .add(e), g && e.start({
                    default: p
                });
                let r = c[t];
                r && (tO(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
            })
        }), e6(() => () => {
            let e;
            e = i.ctrls, e.forEach(e => e.stop(!0))
        });
        let y = h.map(e => ({ ...e
        }));
        return a ? [y, a] : y
    }

    function rp(e, t) {
        let r = F.fun(e),
            [
                [n], a
            ] = rh(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, a] : n
    }
    var rm = () => rf(),
        rg = () => (0, u.useState)(rm)[0],
        ry = (e, t) => {
            var r;
            let n, a = (r = () => new t2(e, t), null === (n = (0, u.useRef)(null)).current && (n.current = r()), n.current);
            return e6(() => () => {
                a.stop()
            }), a
        };

    function rb(e, t, r) {
        let n, a = F.fun(t) && t;
        a && !r && (r = []);
        let s = !0,
            o = rh(e, (e, r) => {
                let o = a ? a(e, r) : t;
                return n = o.ref, s = s && o.reverse, o
            }, r || [{}]);
        if (e4(() => {
                let e;
                e = o[1].current, e.forEach((e, t) => {
                    let r = o[1].current[t + (s ? 1 : -1)];
                    if (tO(e, n), e.ref) {
                        r && e.update({
                            to: r.springs
                        });
                        return
                    }
                    r ? e.start({
                        to: r.springs
                    }) : e.start()
                })
            }, r), a || 3 == arguments.length) {
            let e = n ? ? o[1];
            return e._getProps = (t, r, n) => {
                let a = F.fun(t) ? t(n, r) : t;
                if (a) {
                    let t = e.current[n + (a.reverse ? 1 : -1)];
                    return t && (a.to = t.springs), a
                }
            }, o
        }
        return o[0]
    }

    function rv(e, t, r) {
        let n, a = F.fun(t) && t,
            {
                reset: s,
                sort: o,
                trail: i = 0,
                expires: l = !0,
                exitBeforeEnter: c = !1,
                onDestroyed: d,
                ref: f,
                config: h
            } = a ? a() : t,
            p = (0, u.useMemo)(() => a || 3 == arguments.length ? rf() : void 0, []),
            m = N(e),
            g = [],
            y = (0, u.useRef)(null),
            b = s ? null : y.current;
        e4(() => {
            y.current = g
        }), e6(() => {
            let e;
            return e = e => {
                p ? .add(e.ctrl), e.ctrl.ref = p
            }, g.forEach(e), () => {
                let e;
                e = y.current, e.forEach(e => {
                    e.expired && clearTimeout(e.expirationId), tI(e.ctrl, p), e.ctrl.stop(!0)
                })
            }
        });
        let v = function(e, t, r) {
                let {
                    key: n,
                    keys: a = n
                } = t;
                if (null === a) {
                    let t = new Set;
                    return e.map(e => {
                        let n = r && r.find(r => r.item === e && "leave" !== r.phase && !t.has(r));
                        return n ? (t.add(n), n.key) : rk++
                    })
                }
                return F.und(a) ? e : F.fun(a) ? e.map(a) : N(a)
            }(m, a ? a() : t, b),
            k = s && y.current || [];
        e4(() => {
            let e;
            return e = e => {
                let {
                    ctrl: t,
                    item: r,
                    key: n
                } = e;
                tI(t, p), tb(d, r, n)
            }, k.forEach(e)
        });
        let S = [];
        if (b && b.forEach((e, t) => {
                e.expired ? (clearTimeout(e.expirationId), k.push(e)) : ~(t = S[t] = v.indexOf(e.key)) && (g[t] = e)
            }), n = (e, t) => {
                g[t] || (g[t] = {
                    key: v[t],
                    item: e,
                    phase: "mount",
                    ctrl: new rr
                }, g[t].ctrl.item = e)
            }, m.forEach(n), S.length) {
            let e = -1,
                {
                    leave: r
                } = a ? a() : t;
            S.forEach((t, n) => {
                let a = b[n];
                ~t ? (e = g.indexOf(a), g[e] = { ...a,
                    item: m[t]
                }) : r && g.splice(++e, 0, a)
            })
        }
        F.fun(o) && g.sort((e, t) => o(e.item, t.item));
        let x = -i,
            w = e9(),
            P = tw(t),
            C = new Map,
            T = (0, u.useRef)(new Map),
            _ = (0, u.useRef)(!1);
        g.forEach((e, r) => {
            let n, s, o = e.key,
                u = e.phase,
                d = a ? a() : t,
                p = tb(d.delay || 0, o);
            if ("mount" == u) n = d.enter, s = "enter";
            else {
                let e = 0 > v.indexOf(o);
                if ("leave" != u)
                    if (e) n = d.leave, s = "leave";
                    else {
                        if (!(n = d.update)) return;
                        s = "update"
                    }
                else {
                    if (e) return;
                    n = d.enter, s = "enter"
                }
            }
            if (n = tb(n, e.item, r), !(n = F.obj(n) ? tT(n) : {
                    to: n
                }).config) {
                let t = h || P.config;
                n.config = tb(t, e.item, r, s)
            }
            x += i;
            let m = { ...P,
                delay: p + x,
                ref: f,
                immediate: d.immediate,
                reset: !1,
                ...n
            };
            if ("enter" == s && F.und(m.from)) {
                let n = a ? a() : t;
                m.from = tb(F.und(n.initial) || b ? n.from : n.initial, e.item, r)
            }
            let {
                onResolve: g
            } = m;
            m.onResolve = e => {
                tb(g, e);
                let t = y.current,
                    r = t.find(e => e.key === o);
                if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                    let e = t.every(e => e.ctrl.idle);
                    if ("leave" == r.phase) {
                        let t = tb(l, r.item);
                        if (!1 !== t) {
                            let n = !0 === t ? 0 : t;
                            if (r.expired = !0, !e && n > 0) {
                                n <= 0x7fffffff && (r.expirationId = setTimeout(w, n));
                                return
                            }
                        }
                    }
                    e && t.some(e => e.expired) && (T.current.delete(r), c && (_.current = !0), w())
                }
            };
            let k = rs(e.ctrl, m);
            "leave" === s && c ? T.current.set(e, {
                phase: s,
                springs: k,
                payload: m
            }) : C.set(e, {
                phase: s,
                springs: k,
                payload: m
            })
        });
        let E = (0, u.useContext)(rc),
            R = e7(E),
            I = E !== R && tE(E);
        e4(() => {
            I && g.forEach(e => {
                e.ctrl.start({
                    default: E
                })
            })
        }, [E]), C.forEach((e, t) => {
            if (T.current.size) {
                let e = g.findIndex(e => e.key === t.key);
                g.splice(e, 1)
            }
        }), e4(() => {
            let e;
            e = T.current.size ? T.current : C, e.forEach((e, t) => {
                let {
                    phase: r,
                    payload: n
                } = e, {
                    ctrl: a
                } = t;
                t.phase = r, p ? .add(a), I && "enter" == r && a.start({
                    default: E
                }), n && (tO(a, n.ref), (a.ref || p) && !_.current ? a.update(n) : (a.start(n), _.current && (_.current = !1)))
            })
        }, s ? void 0 : r);
        let O = e => u.createElement(u.Fragment, null, g.map((t, r) => {
            let {
                springs: n
            } = C.get(t) || t.ctrl, a = e({ ...n
            }, t.item, t, r);
            return a && a.type ? u.createElement(a.type, { ...a.props,
                key: F.str(t.key) || F.num(t.key) ? t.key : t.ctrl.id,
                ref: a.ref
            }) : a
        }));
        return p ? [O, p] : O
    }
    var rk = 1,
        rS = function() {
            let {
                container: e,
                ...t
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, n] = rp(() => ({
                scrollX: 0,
                scrollY: 0,
                scrollXProgress: 0,
                scrollYProgress: 0,
                ...t
            }), []);
            return e4(() => {
                let t = e5(e => {
                    let {
                        x: t,
                        y: r
                    } = e;
                    n.start({
                        scrollX: t.current,
                        scrollXProgress: t.progress,
                        scrollY: r.current,
                        scrollYProgress: r.progress
                    })
                }, {
                    container: e ? .current || void 0
                });
                return () => {
                    let e;
                    e = Object.values(r), e.forEach(e => e.stop()), t()
                }
            }, []), r
        },
        rx = e => {
            let {
                container: t,
                ...r
            } = e, [n, a] = rp(() => ({
                width: 0,
                height: 0,
                ...r
            }), []);
            return e4(() => {
                let e = eY(e => {
                    let {
                        width: t,
                        height: r
                    } = e;
                    a.start({
                        width: t,
                        height: r,
                        immediate: 0 === n.width.get() || 0 === n.height.get()
                    })
                }, {
                    container: t ? .current || void 0
                });
                return () => {
                    let t;
                    t = Object.values(n), t.forEach(e => e.stop()), e()
                }
            }, []), n
        },
        rw = {
            any: 0,
            all: 1
        };

    function rP(e, t) {
        let [r, n] = (0, u.useState)(!1), a = (0, u.useRef)(), s = F.fun(e) && e, {
            to: o = {},
            from: i = {},
            ...l
        } = s ? s() : {}, c = s ? t : e, [d, f] = rp(() => ({
            from: i,
            ...l
        }), []);
        return (e4(() => {
            let e = a.current,
                {
                    root: t,
                    once: s,
                    amount: l = "any",
                    ...u
                } = c ? ? {};
            if (!e || s && r || "u" < typeof IntersectionObserver) return;
            let d = new WeakMap,
                h = new IntersectionObserver(e => {
                    e.forEach(e => {
                        let t = d.get(e.target);
                        if (!!t !== e.isIntersecting)
                            if (e.isIntersecting) {
                                let t = (o && f.start(o), n(!0), s ? void 0 : () => {
                                    i && f.start(i), n(!1)
                                });
                                F.fun(t) ? d.set(e.target, t) : h.unobserve(e.target)
                            } else t && (t(), d.delete(e.target))
                    })
                }, {
                    root: t && t.current || void 0,
                    threshold: "number" == typeof l || Array.isArray(l) ? l : rw[l],
                    ...u
                });
            return h.observe(e), () => h.unobserve(e)
        }, [c]), s) ? [a, d] : [a, r]
    }

    function rC(e) {
        let {
            children: t,
            ...r
        } = e;
        return t(rp(r))
    }

    function rT(e) {
        let {
            items: t,
            children: r,
            ...n
        } = e, a = rb(t.length, n);
        return t.map((e, t) => {
            let n = r(e, t);
            return F.fun(n) ? n(a[t]) : n
        })
    }

    function r_(e) {
        let {
            items: t,
            children: r,
            ...n
        } = e;
        return rv(t, n)(r)
    }
    var rE = class extends tK {
        constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = ey(...t);
            const r = this._get();
            tn(this, tf(r).create(r))
        }
        advance(e) {
            let t = this._get();
            A(t, this.get()) || (tr(this).setValue(t), this._onChange(t, this.idle)), !this.idle && rI(this._active) && rO(this)
        }
        _get() {
            let e = F.arr(this.source) ? this.source.map(eC) : N(eC(this.source));
            return this.calc(...e)
        }
        _start() {
            if (this.idle && !rI(this._active)) {
                let e;
                this.idle = !1, e = ta(this), e.forEach(e => {
                    e.done = !1
                }), R.skipAnimation ? (d.batchedUpdates(() => this.advance()), rO(this)) : Q.start(this)
            }
        }
        _attach() {
            let e, t, r = 1;
            e = N(this.source), t = e => {
                eP(e) && eI(e, this), e instanceof tK && (e.idle || this._active.add(e), r = Math.max(r, e.priority + 1))
            }, e.forEach(t), this.priority = r, this._start()
        }
        _detach() {
            let e, t;
            e = N(this.source), t = e => {
                eP(e) && eO(e, this)
            }, e.forEach(t), this._active.clear(), rO(this)
        }
        eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = N(this.source).reduce((e, t) => Math.max(e, (t instanceof tK ? t.priority : 0) + 1), 0))
        }
    };

    function rR(e) {
        return !1 !== e.idle
    }

    function rI(e) {
        return !e.size || Array.from(e).every(rR)
    }

    function rO(e) {
        if (!e.idle) {
            let t;
            e.idle = !0, t = ta(e), t.forEach(e => {
                e.done = !0
            }), e_(e, {
                type: "idle",
                parent: e
            })
        }
    }
    var rM = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return new rE(e, r)
        },
        rF = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return eH(), new rE(e, r)
        };
    R.assign({
        createStringInterpolator: ez,
        to: (e, t) => new rE(e, t)
    });
    var rA = Q.advance;
    e.s(["BailSignal", () => tU, "Controller", () => rr, "FrameValue", () => tK, "Interpolation", () => rE, "Spring", () => rC, "SpringContext", () => rc, "SpringRef", () => rf, "SpringValue", () => t2, "Trail", () => rT, "Transition", () => r_, "config", () => tF, "inferTo", () => tT, "interpolate", () => rF, "to", () => rM, "update", () => rA, "useChain", () => tM, "useInView", () => rP, "useResize", () => rx, "useScroll", () => rS, "useSpring", () => rp, "useSpringRef", () => rg, "useSpringValue", () => ry, "useSprings", () => rh, "useTrail", () => rb, "useTransition", () => rv], 173388);
    var rj = e.i(730943),
        rN = /^--/,
        r$ = {},
        rD = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        rL = ["Webkit", "Ms", "Moz", "O"];
    rD = Object.keys(rD).reduce((e, t) => (rL.forEach(r => e[r + t.charAt(0).toUpperCase() + t.substring(1)] = e[t]), e), rD);
    var rB = /^(matrix|translate|scale|rotate|skew)/,
        rz = /^(translate)/,
        rV = /^(rotate|skew)/,
        rq = (e, t) => F.num(e) && 0 !== e ? e + t : e,
        rW = (e, t) => F.arr(e) ? e.every(e => rW(e, t)) : F.num(e) ? e === t : parseFloat(e) === t,
        rH = class extends tu {
            constructor({
                x: e,
                y: t,
                z: r,
                ...n
            }) {
                const a = [],
                    s = [];
                (e || t || r) && (a.push([e || 0, t || 0, r || 0]), s.push(e => [`translate3d(${e.map(e=>rq(e,"px")).join(",")})`, rW(e, 0)])), j(n, (e, t) => {
                    if ("transform" === t) a.push([e || ""]), s.push(e => [e, "" === e]);
                    else if (rB.test(t)) {
                        if (delete n[t], F.und(e)) return;
                        let r = rz.test(t) ? "px" : rV.test(t) ? "deg" : "";
                        a.push(N(e)), s.push("rotate3d" === t ? e => {
                            let [t, n, a, s] = e;
                            return [`rotate3d(${t},${n},${a},${rq(s,r)})`, rW(s, 0)]
                        } : e => [`${t}(${e.map(e=>rq(e,r)).join(",")})`, rW(e, +!!t.startsWith("scale"))])
                    }
                }), a.length && (n.transform = new rU(a, s)), super(n)
            }
        },
        rU = class extends eE {
            constructor(e, t) {
                super(), this.inputs = e, this.transforms = t, this._value = null
            }
            get() {
                return this._value || (this._value = this._get())
            }
            _get() {
                let e, t, r = "",
                    n = !0;
                return e = this.inputs, t = (e, t) => {
                    let a = eC(e[0]),
                        [s, o] = this.transforms[t](F.arr(a) ? a : e.map(eC));
                    r += " " + s, n = n && o
                }, e.forEach(t), n ? "none" : r
            }
            observerAdded(e) {
                let t, r;
                1 == e && (t = this.inputs, r = e => {
                    let t;
                    return t = e => eP(e) && eI(e, this), e.forEach(t)
                }, t.forEach(r))
            }
            observerRemoved(e) {
                let t, r;
                0 == e && (t = this.inputs, r = e => {
                    let t;
                    return t = e => eP(e) && eO(e, this), e.forEach(t)
                }, t.forEach(r))
            }
            eventObserved(e) {
                "change" == e.type && (this._value = null), e_(this, e)
            }
        };
    R.assign({
        batchedUpdates: rj.unstable_batchedUpdates,
        createStringInterpolator: ez,
        colors: {
            transparent: 0,
            aliceblue: 0xf0f8ffff,
            antiquewhite: 0xfaebd7ff,
            aqua: 0xffffff,
            aquamarine: 0x7fffd4ff,
            azure: 0xf0ffffff,
            beige: 0xf5f5dcff,
            bisque: 0xffe4c4ff,
            black: 255,
            blanchedalmond: 0xffebcdff,
            blue: 65535,
            blueviolet: 0x8a2be2ff,
            brown: 0xa52a2aff,
            burlywood: 0xdeb887ff,
            burntsienna: 0xea7e5dff,
            cadetblue: 0x5f9ea0ff,
            chartreuse: 0x7fff00ff,
            chocolate: 0xd2691eff,
            coral: 0xff7f50ff,
            cornflowerblue: 0x6495edff,
            cornsilk: 0xfff8dcff,
            crimson: 0xdc143cff,
            cyan: 0xffffff,
            darkblue: 35839,
            darkcyan: 9145343,
            darkgoldenrod: 0xb8860bff,
            darkgray: 0xa9a9a9ff,
            darkgreen: 6553855,
            darkgrey: 0xa9a9a9ff,
            darkkhaki: 0xbdb76bff,
            darkmagenta: 0x8b008bff,
            darkolivegreen: 0x556b2fff,
            darkorange: 0xff8c00ff,
            darkorchid: 0x9932ccff,
            darkred: 0x8b0000ff,
            darksalmon: 0xe9967aff,
            darkseagreen: 0x8fbc8fff,
            darkslateblue: 0x483d8bff,
            darkslategray: 0x2f4f4fff,
            darkslategrey: 0x2f4f4fff,
            darkturquoise: 0xced1ff,
            darkviolet: 0x9400d3ff,
            deeppink: 0xff1493ff,
            deepskyblue: 0xbfffff,
            dimgray: 0x696969ff,
            dimgrey: 0x696969ff,
            dodgerblue: 0x1e90ffff,
            firebrick: 0xb22222ff,
            floralwhite: 0xfffaf0ff,
            forestgreen: 0x228b22ff,
            fuchsia: 0xff00ffff,
            gainsboro: 0xdcdcdcff,
            ghostwhite: 0xf8f8ffff,
            gold: 0xffd700ff,
            goldenrod: 0xdaa520ff,
            gray: 0x808080ff,
            green: 8388863,
            greenyellow: 0xadff2fff,
            grey: 0x808080ff,
            honeydew: 0xf0fff0ff,
            hotpink: 0xff69b4ff,
            indianred: 0xcd5c5cff,
            indigo: 0x4b0082ff,
            ivory: 0xfffff0ff,
            khaki: 0xf0e68cff,
            lavender: 0xe6e6faff,
            lavenderblush: 0xfff0f5ff,
            lawngreen: 0x7cfc00ff,
            lemonchiffon: 0xfffacdff,
            lightblue: 0xadd8e6ff,
            lightcoral: 0xf08080ff,
            lightcyan: 0xe0ffffff,
            lightgoldenrodyellow: 0xfafad2ff,
            lightgray: 0xd3d3d3ff,
            lightgreen: 0x90ee90ff,
            lightgrey: 0xd3d3d3ff,
            lightpink: 0xffb6c1ff,
            lightsalmon: 0xffa07aff,
            lightseagreen: 0x20b2aaff,
            lightskyblue: 0x87cefaff,
            lightslategray: 0x778899ff,
            lightslategrey: 0x778899ff,
            lightsteelblue: 0xb0c4deff,
            lightyellow: 0xffffe0ff,
            lime: 0xff00ff,
            limegreen: 0x32cd32ff,
            linen: 0xfaf0e6ff,
            magenta: 0xff00ffff,
            maroon: 0x800000ff,
            mediumaquamarine: 0x66cdaaff,
            mediumblue: 52735,
            mediumorchid: 0xba55d3ff,
            mediumpurple: 0x9370dbff,
            mediumseagreen: 0x3cb371ff,
            mediumslateblue: 0x7b68eeff,
            mediumspringgreen: 0xfa9aff,
            mediumturquoise: 0x48d1ccff,
            mediumvioletred: 0xc71585ff,
            midnightblue: 0x191970ff,
            mintcream: 0xf5fffaff,
            mistyrose: 0xffe4e1ff,
            moccasin: 0xffe4b5ff,
            navajowhite: 0xffdeadff,
            navy: 33023,
            oldlace: 0xfdf5e6ff,
            olive: 0x808000ff,
            olivedrab: 0x6b8e23ff,
            orange: 0xffa500ff,
            orangered: 0xff4500ff,
            orchid: 0xda70d6ff,
            palegoldenrod: 0xeee8aaff,
            palegreen: 0x98fb98ff,
            paleturquoise: 0xafeeeeff,
            palevioletred: 0xdb7093ff,
            papayawhip: 0xffefd5ff,
            peachpuff: 0xffdab9ff,
            peru: 0xcd853fff,
            pink: 0xffc0cbff,
            plum: 0xdda0ddff,
            powderblue: 0xb0e0e6ff,
            purple: 0x800080ff,
            rebeccapurple: 0x663399ff,
            red: 0xff0000ff,
            rosybrown: 0xbc8f8fff,
            royalblue: 0x4169e1ff,
            saddlebrown: 0x8b4513ff,
            salmon: 0xfa8072ff,
            sandybrown: 0xf4a460ff,
            seagreen: 0x2e8b57ff,
            seashell: 0xfff5eeff,
            sienna: 0xa0522dff,
            silver: 0xc0c0c0ff,
            skyblue: 0x87ceebff,
            slateblue: 0x6a5acdff,
            slategray: 0x708090ff,
            slategrey: 0x708090ff,
            snow: 0xfffafaff,
            springgreen: 0xff7fff,
            steelblue: 0x4682b4ff,
            tan: 0xd2b48cff,
            teal: 8421631,
            thistle: 0xd8bfd8ff,
            tomato: 0xff6347ff,
            turquoise: 0x40e0d0ff,
            violet: 0xee82eeff,
            wheat: 0xf5deb3ff,
            white: 0xffffffff,
            whitesmoke: 0xf5f5f5ff,
            yellow: 0xffff00ff,
            yellowgreen: 0x9acd32ff
        }
    });
    var rG = function(e) {
        let {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: r = e => new tu(e),
            getComponentProps: n = e => e
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = {
            applyAnimatedValues: t,
            createAnimatedStyle: r,
            getComponentProps: n
        }, s = e => {
            let t = tg(e) || "Anonymous";
            return (e = F.str(e) ? s[e] || (s[e] = th(e, a)) : e[tm] || (e[tm] = th(e, a))).displayName = `Animated(${t})`, e
        };
        return j(e, (t, r) => {
            F.arr(e) && (r = tg(t)), s[r] = s(t)
        }), {
            animated: s
        }
    }(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
        applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
                {
                    className: n,
                    style: a,
                    children: s,
                    scrollTop: o,
                    scrollLeft: i,
                    viewBox: l,
                    ...u
                } = t,
                c = Object.values(u),
                d = Object.keys(u).map(t => r || e.hasAttribute(t) ? t : r$[t] || (r$[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            for (let t in void 0 !== s && (e.textContent = s), a)
                if (a.hasOwnProperty(t)) {
                    var f;
                    let r = null == (f = a[t]) || "boolean" == typeof f || "" === f ? "" : "number" != typeof f || 0 === f || rN.test(t) || rD.hasOwnProperty(t) && rD[t] ? ("" + f).trim() : f + "px";
                    rN.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
                }
            d.forEach((t, r) => {
                e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== o && (e.scrollTop = o), void 0 !== i && (e.scrollLeft = i), void 0 !== l && e.setAttribute("viewBox", l)
        },
        createAnimatedStyle: e => new rH(e),
        getComponentProps: e => {
            let {
                scrollTop: t,
                scrollLeft: r,
                ...n
            } = e;
            return n
        }
    }).animated;
    e.s(["a", () => rG, "animated", () => rG], 728947), e.i(173388), e.i(353022), e.s(["Any", () => ty, "BailSignal", () => tU, "Controller", () => rr, "FrameValue", () => tK, "Globals", () => R, "Interpolation", () => rE, "Spring", () => rC, "SpringContext", () => rc, "SpringRef", () => rf, "SpringValue", () => t2, "Trail", () => rT, "Transition", () => r_, "config", () => tF, "createInterpolator", () => ey, "easings", () => eS, "inferTo", () => tT, "interpolate", () => rF, "to", () => rM, "update", () => rA, "useChain", () => tM, "useInView", () => rP, "useIsomorphicLayoutEffect", () => e4, "useReducedMotion", () => te, "useResize", () => rx, "useScroll", () => rS, "useSpring", () => rp, "useSpringRef", () => rg, "useSpringValue", () => ry, "useSprings", () => rh, "useTrail", () => rb, "useTransition", () => rv], 645886), e.i(728947), e.i(645886), e.i(350461);
    let rQ = {
        toVector: (e, t) => (void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]),
        add: (e, t) => [e[0] + t[0], e[1] + t[1]],
        sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
        addTo(e, t) {
            e[0] += t[0], e[1] += t[1]
        },
        subTo(e, t) {
            e[0] -= t[0], e[1] -= t[1]
        }
    };

    function rK(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
    }

    function rX(e, t, r) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === n ? Math.max(t, Math.min(e, r)) : e < t ? -rK(t - e, r - t, n) + t : e > r ? +rK(e - r, r - t, n) + r : e
    }

    function rY(e, t, r) {
        var n;
        return (t = "symbol" == typeof(n = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(t, "string")) ? n : String(n)) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function rZ(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function rJ(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? rZ(Object(r), !0).forEach(function(t) {
                rY(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rZ(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    let r0 = {
        pointer: {
            start: "down",
            change: "move",
            end: "up"
        },
        mouse: {
            start: "down",
            change: "move",
            end: "up"
        },
        touch: {
            start: "start",
            change: "move",
            end: "end"
        },
        gesture: {
            start: "start",
            change: "change",
            end: "end"
        }
    };

    function r1(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
    }
    let r2 = ["enter", "leave"],
        r3 = ["gotpointercapture", "lostpointercapture"];

    function r5(e) {
        return "touches" in e
    }

    function r4(e) {
        return r5(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
    }

    function r9(e) {
        return r5(e) ? ("touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches)[0] : e
    }

    function r6(e) {
        let t = r9(e);
        return r5(e) ? t.identifier : t.pointerId
    }

    function r8(e) {
        let t = r9(e);
        return [t.clientX, t.clientY]
    }

    function r7(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return "function" == typeof e ? e(...r) : e
    }

    function ne() {}

    function nt(e, t) {
        return Object.assign({}, t, e || {})
    }
    class nr {
        constructor(e, t, r) {
            this.ctrl = e, this.args = t, this.key = r, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
            return this.ctrl.state[this.key]
        }
        set state(e) {
            this.ctrl.state[this.key] = e
        }
        get shared() {
            return this.ctrl.state.shared
        }
        get eventStore() {
            return this.ctrl.gestureEventStores[this.key]
        }
        get timeoutStore() {
            return this.ctrl.gestureTimeoutStores[this.key]
        }
        get config() {
            return this.ctrl.config[this.key]
        }
        get sharedConfig() {
            return this.ctrl.config.shared
        }
        get handler() {
            return this.ctrl.handlers[this.key]
        }
        reset() {
            let {
                state: e,
                shared: t,
                ingKey: r,
                args: n
            } = this;
            t[r] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
                [-1 / 0, 1 / 0],
                [-1 / 0, 1 / 0]
            ], e.args = n, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
            let t = this.state,
                r = this.config;
            t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? r7(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
        }
        computeValues(e) {
            let t = this.state;
            t._values = e, t.values = this.config.transform(e)
        }
        computeInitial() {
            let e = this.state;
            e._initial = e._values, e.initial = e.values
        }
        compute(e) {
            let {
                state: t,
                config: r,
                shared: n
            } = this;
            t.args = this.args;
            let a = 0;
            if (e && (t.event = e, r.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, n.locked = !!document.pointerLockElement, Object.assign(n, function(e) {
                    let t = {};
                    if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                        let {
                            shiftKey: r,
                            altKey: n,
                            metaKey: a,
                            ctrlKey: s
                        } = e;
                        Object.assign(t, {
                            shiftKey: r,
                            altKey: n,
                            metaKey: a,
                            ctrlKey: s
                        })
                    }
                    return t
                }(e)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, a = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
                let e = t._delta.map(Math.abs);
                rQ.addTo(t._distance, e)
            }
            this.axisIntent && this.axisIntent(e);
            let [s, o] = t._movement, [i, l] = r.threshold, {
                _step: u,
                values: c
            } = t;
            if (r.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(s) >= i && c[0]), !1 === u[1] && (u[1] = Math.abs(o) >= l && c[1])) : (!1 === u[0] && (u[0] = Math.abs(s) >= i && Math.sign(s) * i), !1 === u[1] && (u[1] = Math.abs(o) >= l && Math.sign(o) * l)), t.intentional = !1 !== u[0] || !1 !== u[1], !t.intentional) return;
            let d = [0, 0];
            if (r.hasCustomTransform) {
                let [e, t] = c;
                d[0] = !1 !== u[0] ? e - u[0] : 0, d[1] = !1 !== u[1] ? t - u[1] : 0
            } else d[0] = !1 !== u[0] ? s - u[0] : 0, d[1] = !1 !== u[1] ? o - u[1] : 0;
            this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
            let f = t.offset,
                h = t._active && !t._blocked || t.active;
            h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = r7(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
            let [p, m] = t.offset, [
                [g, y],
                [b, v]
            ] = t._bounds;
            t.overflow = [p < g ? -1 : +(p > y), m < b ? -1 : +(m > v)], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
            let k = t._active && r.rubberband || [0, 0];
            if (t.offset = function(e, t, r) {
                    let [n, a] = t, [s, o] = r, [
                        [i, l],
                        [u, c]
                    ] = e;
                    return [rX(n, i, l, s), rX(a, u, c, o)]
                }(t._bounds, t.offset, k), t.delta = rQ.sub(t.offset, f), this.computeMovement(), h && (!t.last || a > 32)) {
                t.delta = rQ.sub(t.offset, f);
                let e = t.delta.map(Math.abs);
                rQ.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && a > 0 && (t.velocity = [e[0] / a, e[1] / a], t.timeDelta = a)
            }
        }
        emit() {
            let e = this.state,
                t = this.shared,
                r = this.config;
            if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
            let n = this.handler(rJ(rJ(rJ({}, t), e), {}, {
                [this.aliasKey]: e.values
            }));
            void 0 !== n && (e.memo = n)
        }
        clean() {
            this.eventStore.clean(), this.timeoutStore.clean()
        }
    }
    class nn extends nr {
        constructor(...e) {
            super(...e), rY(this, "aliasKey", "xy")
        }
        reset() {
            super.reset(), this.state.axis = void 0
        }
        init() {
            this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
            this.state.offset = rQ.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
            this.state.movement = rQ.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
            let t = this.state,
                r = this.config;
            if (!t.axis && e) {
                let n = "object" == typeof r.axisThreshold ? r.axisThreshold[r4(e)] : r.axisThreshold;
                t.axis = function(e, t) {
                    let [r, n] = e, a = Math.abs(r), s = Math.abs(n);
                    return a > s && a > t ? "x" : s > a && s > t ? "y" : void 0
                }(t._movement, n)
            }
            t._blocked = (r.lockDirection || !!r.axis) && !t.axis || !!r.axis && r.axis !== t.axis
        }
        restrictToAxis(e) {
            if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
                case "x":
                    e[1] = 0;
                    break;
                case "y":
                    e[0] = 0
            }
        }
    }
    let na = e => e,
        ns = {
            enabled() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return e
            },
            eventOptions: (e, t, r) => rJ(rJ({}, r.shared.eventOptions), e),
            preventDefault() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e
            },
            triggerAllEvents() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e
            },
            rubberband() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                switch (e) {
                    case !0:
                        return [.15, .15];
                    case !1:
                        return [0, 0];
                    default:
                        return rQ.toVector(e)
                }
            },
            from: e => "function" == typeof e ? e : null != e ? rQ.toVector(e) : void 0,
            transform(e, t, r) {
                let n = e || r.shared.transform;
                return this.hasCustomTransform = !!n, n || na
            },
            threshold: e => rQ.toVector(e, 0)
        },
        no = rJ(rJ({}, ns), {}, {
            axis(e, t, r) {
                let {
                    axis: n
                } = r;
                if (this.lockDirection = "lock" === n, !this.lockDirection) return n
            },
            axisThreshold() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return e
            },
            bounds() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("function" == typeof e) return t => no.bounds(e(t));
                if ("current" in e) return () => e.current;
                if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
                let {
                    left: t = -1 / 0,
                    right: r = 1 / 0,
                    top: n = -1 / 0,
                    bottom: a = 1 / 0
                } = e;
                return [
                    [t, r],
                    [n, a]
                ]
            }
        }),
        ni = {
            ArrowRight: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return [e * t, 0]
            },
            ArrowLeft: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return [-1 * e * t, 0]
            },
            ArrowUp: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return [0, -1 * e * t]
            },
            ArrowDown: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return [0, e * t]
            }
        },
        nl = "u" > typeof window && window.document && window.document.createElement;

    function nu() {
        return nl && "ontouchstart" in window
    }
    let nc = {
            isBrowser: nl,
            gesture: function() {
                try {
                    return "constructor" in GestureEvent
                } catch (e) {
                    return !1
                }
            }(),
            touch: nu(),
            touchscreen: nu() || nl && window.navigator.maxTouchPoints > 1,
            pointer: nl && "onpointerdown" in window,
            pointerLock: nl && "exitPointerLock" in window.document
        },
        nd = {
            mouse: 0,
            touch: 0,
            pen: 8
        },
        nf = rJ(rJ({}, no), {}, {
            device(e, t, r) {
                let {
                    pointer: {
                        touch: n = !1,
                        lock: a = !1,
                        mouse: s = !1
                    } = {}
                } = r;
                return (this.pointerLock = a && nc.pointerLock, nc.touch && n) ? "touch" : this.pointerLock ? "mouse" : nc.pointer && !s ? "pointer" : nc.touch ? "touch" : "mouse"
            },
            preventScrollAxis(e, t, r) {
                let {
                    preventScroll: n
                } = r;
                if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, nc.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
            },
            pointerCapture(e, t, r) {
                let {
                    pointer: {
                        capture: n = !0,
                        buttons: a = 1,
                        keys: s = !0
                    } = {}
                } = r;
                return this.pointerButtons = a, this.keys = s, !this.pointerLock && "pointer" === this.device && n
            },
            threshold(e, t, r) {
                let {
                    filterTaps: n = !1,
                    tapsThreshold: a = 3,
                    axis: s
                } = r, o = rQ.toVector(e, n ? a : +!!s);
                return this.filterTaps = n, this.tapsThreshold = a, o
            },
            swipe() {
                let {
                    velocity: e = .5,
                    distance: t = 50,
                    duration: r = 250
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    velocity: this.transform(rQ.toVector(e)),
                    distance: this.transform(rQ.toVector(t)),
                    duration: r
                }
            },
            delay() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                switch (e) {
                    case !0:
                        return 180;
                    case !1:
                        return 0;
                    default:
                        return e
                }
            },
            axisThreshold: e => e ? rJ(rJ({}, nd), e) : nd,
            keyboardDisplacement() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                return e
            }
        });
    rJ(rJ({}, ns), {}, {
        device(e, t, r) {
            let {
                shared: n,
                pointer: {
                    touch: a = !1
                } = {}
            } = r;
            if (n.target && !nc.touch && nc.gesture) return "gesture";
            if (nc.touch && a) return "touch";
            if (nc.touchscreen) {
                if (nc.pointer) return "pointer";
                if (nc.touch) return "touch"
            }
        },
        bounds(e, t, r) {
            let {
                scaleBounds: n = {},
                angleBounds: a = {}
            } = r, s = e => {
                let t = nt(r7(n, e), {
                    min: -1 / 0,
                    max: 1 / 0
                });
                return [t.min, t.max]
            }, o = e => {
                let t = nt(r7(a, e), {
                    min: -1 / 0,
                    max: 1 / 0
                });
                return [t.min, t.max]
            };
            return "function" != typeof n && "function" != typeof a ? [s(), o()] : e => [s(e), o(e)]
        },
        threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, rQ.toVector(e, this.lockDirection ? [.1, 3] : 0)
        },
        modifierKey: e => void 0 === e ? "ctrlKey" : e,
        pinchOnWheel() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return e
        }
    }), rJ(rJ({}, no), {}, {
        mouseOnly: function() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return e
        }
    }), rJ(rJ({}, no), {}, {
        mouseOnly: function() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return e
        }
    });
    let nh = new Map,
        np = new Map,
        nm = {
            key: "drag",
            engine: class extends nn {
                constructor(...e) {
                    super(...e), rY(this, "ingKey", "dragging")
                }
                reset() {
                    super.reset();
                    let e = this.state;
                    e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this)
                }
                setup() {
                    let e = this.state;
                    if (e._bounds instanceof HTMLElement) {
                        let t = e._bounds.getBoundingClientRect(),
                            r = e.currentTarget.getBoundingClientRect(),
                            n = {
                                left: t.left - r.left + e.offset[0],
                                right: t.right - r.right + e.offset[0],
                                top: t.top - r.top + e.offset[1],
                                bottom: t.bottom - r.bottom + e.offset[1]
                            };
                        e._bounds = no.bounds(n)
                    }
                }
                cancel() {
                    let e = this.state;
                    e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
                        this.compute(), this.emit()
                    }, 0))
                }
                setActive() {
                    this.state._active = this.state._pointerActive || this.state._keyboardActive
                }
                clean() {
                    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
                }
                pointerDown(e) {
                    let t = this.config,
                        r = this.state;
                    if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
                    let n = this.ctrl.setEventIds(e);
                    t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = r6(e), r._pointerActive = !0, this.computeValues(r8(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== r4(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
                }
                startPointerDrag(e) {
                    let t = this.state;
                    t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
                }
                pointerMove(e) {
                    let t = this.state,
                        r = this.config;
                    if (!t._pointerActive) return;
                    let n = r6(e);
                    if (void 0 !== t._pointerId && n !== t._pointerId) return;
                    let a = r8(e);
                    if (document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = rQ.sub(a, t._values), this.computeValues(a)), rQ.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional) {
                        this.timeoutStore.remove("dragDelay"), t.active = !1, this.startPointerDrag(e);
                        return
                    }
                    if (r.preventScrollAxis && !t._preventScroll)
                        if (!t.axis) return;
                        else if (t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis) {
                        t._active = !1, this.clean();
                        return
                    } else {
                        this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(e);
                        return
                    }
                    this.emit()
                }
                pointerUp(e) {
                    this.ctrl.setEventIds(e);
                    try {
                        this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
                    } catch (e) {}
                    let t = this.state,
                        r = this.config;
                    if (!t._active || !t._pointerActive) return;
                    let n = r6(e);
                    if (void 0 !== t._pointerId && n !== t._pointerId) return;
                    this.state._pointerActive = !1, this.setActive(), this.compute(e);
                    let [a, s] = t._distance;
                    if (t.tap = a <= r.tapsThreshold && s <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
                    else {
                        let [e, n] = t._delta, [a, s] = t._movement, [o, i] = r.swipe.velocity, [l, u] = r.swipe.distance, c = r.swipe.duration;
                        if (t.elapsedTime < c) {
                            let r = Math.abs(e / t.timeDelta),
                                c = Math.abs(n / t.timeDelta);
                            r > o && Math.abs(a) > l && (t.swipe[0] = Math.sign(e)), c > i && Math.abs(s) > u && (t.swipe[1] = Math.sign(n))
                        }
                    }
                    this.emit()
                }
                pointerClick(e) {
                    !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
                }
                setupPointer(e) {
                    let t = this.config,
                        r = t.device;
                    t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, r, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "cancel", this.pointerUp.bind(this)))
                }
                pointerClean() {
                    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
                }
                preventScroll(e) {
                    this.state._preventScroll && e.cancelable && e.preventDefault()
                }
                setupScrollPrevention(e) {
                    var t;
                    this.state._preventScroll = !1, "persist" in (t = e) && "function" == typeof t.persist && t.persist();
                    let r = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                        passive: !1
                    });
                    this.eventStore.add(this.sharedConfig.window, "touch", "end", r), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", r), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e)
                }
                setupDelayTrigger(e) {
                    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
                        this.state._step = [0, 0], this.startPointerDrag(e)
                    }, this.config.delay)
                }
                keyDown(e) {
                    let t = ni[e.key];
                    if (t) {
                        let r = this.state,
                            n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                        this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, rQ.addTo(r._movement, r._delta), this.compute(e), this.emit()
                    }
                }
                keyUp(e) {
                    e.key in ni && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
                }
                bind(e) {
                    let t = this.config.device;
                    e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                        capture: !0,
                        passive: !1
                    })
                }
            },
            resolver: nf
        },
        ng = {
            target(e) {
                if (e) return () => "current" in e ? e.current : e
            },
            enabled() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return e
            },
            window() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nc.isBrowser ? window : void 0;
                return e
            },
            eventOptions() {
                let {
                    passive: e = !0,
                    capture: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    passive: e,
                    capture: t
                }
            },
            transform: e => e
        },
        ny = ["target", "eventOptions", "window", "enabled", "transform"];

    function nb() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            r = {};
        for (let [n, a] of Object.entries(t)) switch (typeof a) {
            case "function":
                r[n] = a.call(r, e[n], n, e);
                break;
            case "object":
                r[n] = nb(e[n], a);
                break;
            case "boolean":
                a && (r[n] = e[n])
        }
        return r
    }
    class nv {
        constructor(e, t) {
            rY(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, a) {
            let s = this._listeners,
                o = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = r0[e];
                    return e + (r && r[t] || t)
                }(t, r),
                i = rJ(rJ({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), a);
            e.addEventListener(o, n, i);
            let l = () => {
                e.removeEventListener(o, n, i), s.delete(l)
            };
            return s.add(l), l
        }
        clean() {
            this._listeners.forEach(e => e()), this._listeners.clear()
        }
    }
    class nk {
        constructor() {
            rY(this, "_timeouts", new Map)
        }
        add(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
            for (var n = arguments.length, a = Array(n > 3 ? n - 3 : 0), s = 3; s < n; s++) a[s - 3] = arguments[s];
            this.remove(e), this._timeouts.set(e, window.setTimeout(t, r, ...a))
        }
        remove(e) {
            let t = this._timeouts.get(e);
            t && window.clearTimeout(t)
        }
        clean() {
            this._timeouts.forEach(e => void window.clearTimeout(e)), this._timeouts.clear()
        }
    }
    class nS {
        constructor(e) {
            rY(this, "gestures", new Set), rY(this, "_targetEventStore", new nv(this)), rY(this, "gestureEventStores", {}), rY(this, "gestureTimeoutStores", {}), rY(this, "handlers", {}), rY(this, "config", {}), rY(this, "pointerIds", new Set), rY(this, "touchIds", new Set), rY(this, "state", {
                    shared: {
                        shiftKey: !1,
                        metaKey: !1,
                        ctrlKey: !1,
                        altKey: !1
                    }
                }),
                function(e, t) {
                    t.drag && nx(e, "drag"), t.wheel && nx(e, "wheel"), t.scroll && nx(e, "scroll"), t.move && nx(e, "move"), t.pinch && nx(e, "pinch"), t.hover && nx(e, "hover")
                }(this, e)
        }
        setEventIds(e) {
            if (r5(e)) return this.touchIds = new Set(Array.from(e.touches).filter(t => {
                var r, n;
                return t.target === e.currentTarget || (null == (r = e.currentTarget) || null == (n = r.contains) ? void 0 : n.call(r, t.target))
            }).map(e => e.identifier)), this.touchIds;
            if ("pointerId" in e) return "pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds
        }
        applyHandlers(e, t) {
            this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
            this.config = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        target: n,
                        eventOptions: a,
                        window: s,
                        enabled: o,
                        transform: i
                    } = e,
                    l = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = function(e, t) {
                            if (null == e) return {};
                            var r, n, a = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                        }
                        return a
                    }(e, ny);
                if (r.shared = nb({
                        target: n,
                        eventOptions: a,
                        window: s,
                        enabled: o,
                        transform: i
                    }, ng), t) {
                    let e = np.get(t);
                    r[t] = nb(rJ({
                        shared: r.shared
                    }, l), e)
                } else
                    for (let e in l) {
                        let t = np.get(e);
                        t && (r[e] = nb(rJ({
                            shared: r.shared
                        }, l[e]), t))
                    }
                return r
            }(e, t, this.config)
        }
        clean() {
            for (let e of (this._targetEventStore.clean(), this.gestures)) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean()
        }
        effect() {
            return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind() {
            let e;
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            let a = this.config.shared,
                s = {};
            if (!a.target || (e = a.target())) {
                if (a.enabled) {
                    for (let t of this.gestures) {
                        let n = this.config[t],
                            a = nw(s, n.eventOptions, !!e);
                        n.enabled && new(nh.get(t))(this, r, t).bind(a)
                    }
                    let t = nw(s, a.eventOptions, !!e);
                    for (let e in this.nativeHandlers) t(e, "", t => this.nativeHandlers[e](rJ(rJ({}, this.state.shared), {}, {
                        event: t,
                        args: r
                    })), void 0, !0)
                }
                for (let e in s) s[e] = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return 0 === t.length ? ne : 1 === t.length ? t[0] : function() {
                        let e;
                        for (let r of t) e = r.apply(this, arguments) || e;
                        return e
                    }
                }(...s[e]);
                if (!e) return s;
                for (let t in s) {
                    let {
                        device: r,
                        capture: n,
                        passive: a
                    } = function(e) {
                        let t = e.substring(2).toLowerCase(),
                            r = !!~t.indexOf("passive");
                        r && (t = t.replace("passive", ""));
                        let n = r3.includes(t) ? "capturecapture" : "capture",
                            a = !!~t.indexOf(n);
                        return a && (t = t.replace("capture", "")), {
                            device: t,
                            capture: a,
                            passive: r
                        }
                    }(t);
                    this._targetEventStore.add(e, r, "", s[t], {
                        capture: n,
                        passive: a
                    })
                }
            }
        }
    }

    function nx(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new nv(e, t), e.gestureTimeoutStores[t] = new nk
    }
    let nw = (e, t, r) => function(n, a, s) {
        var o, i;
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            u = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            c = null != (o = l.capture) ? o : t.capture,
            d = null != (i = l.passive) ? i : t.passive,
            f = u ? n : function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = r0[e],
                    a = n && n[t] || t;
                return "on" + r1(e) + r1(a) + (! function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return e && !r2.includes(t)
                }(r, a) ? "" : "Capture")
            }(n, a, c);
        r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(s)
    };

    function nP(e, t) {
        return nh.set(nm.key, nm.engine), np.set(nm.key, nm.resolver),
            function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    a = u.default.useMemo(() => new nS(e), []);
                if (a.applyHandlers(e, n), a.applyConfig(t, r), u.default.useEffect(a.effect.bind(a)), u.default.useEffect(() => a.clean.bind(a), []), void 0 === t.target) return a.bind.bind(a)
            }({
                drag: e
            }, t || {}, "drag")
    }
    e.i(796013);
    var nC = e.i(189280);

    function nT(e) {
        return "function" == typeof e
    }

    function n_(e) {
        var t = e(function(e) {
            Error.call(e), e.stack = Error().stack
        });
        return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
    }
    var nE = n_(function(e) {
        return function(t) {
            e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
                return t + 1 + ") " + e.toString()
            }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
        }
    });

    function nR(e, t) {
        if (e) {
            var r = e.indexOf(t);
            0 <= r && e.splice(r, 1)
        }
    }
    var nI = function() {
            var e;

            function t(e) {
                this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
            }
            return t.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var e, t, r, n, a, s = this._parentage;
                    if (s)
                        if (this._parentage = null, Array.isArray(s)) try {
                            for (var o = (0, nC.__values)(s), i = o.next(); !i.done; i = o.next()) i.value.remove(this)
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (t = o.return) && t.call(o)
                            } finally {
                                if (e) throw e.error
                            }
                        } else s.remove(this);
                    var l = this.initialTeardown;
                    if (nT(l)) try {
                        l()
                    } catch (e) {
                        a = e instanceof nE ? e.errors : [e]
                    }
                    var u = this._finalizers;
                    if (u) {
                        this._finalizers = null;
                        try {
                            for (var c = (0, nC.__values)(u), d = c.next(); !d.done; d = c.next()) {
                                var f = d.value;
                                try {
                                    nF(f)
                                } catch (e) {
                                    a = null != a ? a : [], e instanceof nE ? a = (0, nC.__spreadArray)((0, nC.__spreadArray)([], (0, nC.__read)(a)), (0, nC.__read)(e.errors)) : a.push(e)
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                d && !d.done && (n = c.return) && n.call(c)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }
                    if (a) throw new nE(a)
                }
            }, t.prototype.add = function(e) {
                var r;
                if (e && e !== this)
                    if (this.closed) nF(e);
                    else {
                        if (e instanceof t) {
                            if (e.closed || e._hasParent(this)) return;
                            e._addParent(this)
                        }(this._finalizers = null != (r = this._finalizers) ? r : []).push(e)
                    }
            }, t.prototype._hasParent = function(e) {
                var t = this._parentage;
                return t === e || Array.isArray(t) && t.includes(e)
            }, t.prototype._addParent = function(e) {
                var t = this._parentage;
                this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
            }, t.prototype._removeParent = function(e) {
                var t = this._parentage;
                t === e ? this._parentage = null : Array.isArray(t) && nR(t, e)
            }, t.prototype.remove = function(e) {
                var r = this._finalizers;
                r && nR(r, e), e instanceof t && e._removeParent(this)
            }, (e = new t).closed = !0, t.EMPTY = e, t
        }(),
        nO = nI.EMPTY;

    function nM(e) {
        return e instanceof nI || e && "closed" in e && nT(e.remove) && nT(e.add) && nT(e.unsubscribe)
    }

    function nF(e) {
        nT(e) ? e() : e.unsubscribe()
    }
    var nA = void 0,
        nj = {
            setTimeout: function(e, t) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var a = nj.delegate;
                return (null == a ? void 0 : a.setTimeout) ? a.setTimeout.apply(a, (0, nC.__spreadArray)([e, t], (0, nC.__read)(r))) : setTimeout.apply(void 0, (0, nC.__spreadArray)([e, t], (0, nC.__read)(r)))
            },
            clearTimeout: function(e) {
                var t = nj.delegate;
                return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
            },
            delegate: void 0
        };

    function nN() {}
    var n$ = nD("C", void 0, void 0);

    function nD(e, t, r) {
        return {
            kind: e,
            value: t,
            error: r
        }
    }
    var nL = null;

    function nB(e) {
        var t, r, n, a;
        1;
        e()
    }
    var nz = function(e) {
            function t(t) {
                var r = e.call(this) || this;
                return r.isStopped = !1, t ? (r.destination = t, nM(t) && t.add(r)) : r.destination = nQ, r
            }
            return (0, nC.__extends)(t, e), t.create = function(e, t, r) {
                return new nH(e, t, r)
            }, t.prototype.next = function(e) {
                this.isStopped ? nG(nD("N", e, void 0), this) : this._next(e)
            }, t.prototype.error = function(e) {
                this.isStopped ? nG(nD("E", void 0, e), this) : (this.isStopped = !0, this._error(e))
            }, t.prototype.complete = function() {
                this.isStopped ? nG(n$, this) : (this.isStopped = !0, this._complete())
            }, t.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
            }, t.prototype._next = function(e) {
                this.destination.next(e)
            }, t.prototype._error = function(e) {
                try {
                    this.destination.error(e)
                } finally {
                    this.unsubscribe()
                }
            }, t.prototype._complete = function() {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }, t
        }(nI),
        nV = Function.prototype.bind;

    function nq(e, t) {
        return nV.call(e, t)
    }
    var nW = function() {
            function e(e) {
                this.partialObserver = e
            }
            return e.prototype.next = function(e) {
                var t = this.partialObserver;
                if (t.next) try {
                    t.next(e)
                } catch (e) {
                    nU(e)
                }
            }, e.prototype.error = function(e) {
                var t = this.partialObserver;
                if (t.error) try {
                    t.error(e)
                } catch (e) {
                    nU(e)
                } else nU(e)
            }, e.prototype.complete = function() {
                var e = this.partialObserver;
                if (e.complete) try {
                    e.complete()
                } catch (e) {
                    nU(e)
                }
            }, e
        }(),
        nH = function(e) {
            function t(t, r, n) {
                var a, s, o = e.call(this) || this;
                return nT(t) || !t ? a = {
                    next: null != t ? t : void 0,
                    error: null != r ? r : void 0,
                    complete: null != n ? n : void 0
                } : a = t, o.destination = new nW(a), o
            }
            return (0, nC.__extends)(t, e), t
        }(nz);

    function nU(e) {
        nj.setTimeout(function() {
            !1;
            throw e
        })
    }

    function nG(e, t) {}
    var nQ = {
            closed: !0,
            next: nN,
            error: function(e) {
                throw e
            },
            complete: nN
        },
        nK = "function" == typeof Symbol && Symbol.observable || "@@observable",
        nX = function() {
            function e(e) {
                e && (this._subscribe = e)
            }
            return e.prototype.lift = function(t) {
                var r = new e;
                return r.source = this, r.operator = t, r
            }, e.prototype.subscribe = function(e, t, r) {
                var n = this,
                    a = ! function(e) {
                        return e && e instanceof nz || e && nT(e.next) && nT(e.error) && nT(e.complete) && nM(e)
                    }(e) ? new nH(e, t, r) : e;
                return nB(function() {
                    var e = n.operator,
                        t = n.source;
                    a.add(e ? e.call(a, t) : t ? n._subscribe(a) : n._trySubscribe(a))
                }), a
            }, e.prototype._trySubscribe = function(e) {
                try {
                    return this._subscribe(e)
                } catch (t) {
                    e.error(t)
                }
            }, e.prototype.forEach = function(e, t) {
                var r = this;
                return new(t = nY(t))(function(t, n) {
                    var a = new nH({
                        next: function(t) {
                            try {
                                e(t)
                            } catch (e) {
                                n(e), a.unsubscribe()
                            }
                        },
                        error: n,
                        complete: t
                    });
                    r.subscribe(a)
                })
            }, e.prototype._subscribe = function(e) {
                var t;
                return null == (t = this.source) ? void 0 : t.subscribe(e)
            }, e.prototype[nK] = function() {
                return this
            }, e.prototype.pipe = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return (0 === e.length ? function(e) {
                    return e
                } : 1 === e.length ? e[0] : function(t) {
                    return e.reduce(function(e, t) {
                        return t(e)
                    }, t)
                })(this)
            }, e.prototype.toPromise = function(e) {
                var t = this;
                return new(e = nY(e))(function(e, r) {
                    var n;
                    t.subscribe(function(e) {
                        return n = e
                    }, function(e) {
                        return r(e)
                    }, function() {
                        return e(n)
                    })
                })
            }, e.create = function(t) {
                return new e(t)
            }, e
        }();

    function nY(e) {
        var t;
        return null != (t = null != e ? e : nA) ? t : Promise
    }
    var nZ = n_(function(e) {
            return function() {
                e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
            }
        }),
        nJ = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
            }
            return (0, nC.__extends)(t, e), t.prototype.lift = function(e) {
                var t = new n0(this, this);
                return t.operator = e, t
            }, t.prototype._throwIfClosed = function() {
                if (this.closed) throw new nZ
            }, t.prototype.next = function(e) {
                var t = this;
                nB(function() {
                    var r, n;
                    if (t._throwIfClosed(), !t.isStopped) {
                        t.currentObservers || (t.currentObservers = Array.from(t.observers));
                        try {
                            for (var a = (0, nC.__values)(t.currentObservers), s = a.next(); !s.done; s = a.next()) s.value.next(e)
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (n = a.return) && n.call(a)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                    }
                })
            }, t.prototype.error = function(e) {
                var t = this;
                nB(function() {
                    if (t._throwIfClosed(), !t.isStopped) {
                        t.hasError = t.isStopped = !0, t.thrownError = e;
                        for (var r = t.observers; r.length;) r.shift().error(e)
                    }
                })
            }, t.prototype.complete = function() {
                var e = this;
                nB(function() {
                    if (e._throwIfClosed(), !e.isStopped) {
                        e.isStopped = !0;
                        for (var t = e.observers; t.length;) t.shift().complete()
                    }
                })
            }, t.prototype.unsubscribe = function() {
                this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
            }, Object.defineProperty(t.prototype, "observed", {
                get: function() {
                    var e;
                    return (null == (e = this.observers) ? void 0 : e.length) > 0
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype._trySubscribe = function(t) {
                return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
            }, t.prototype._subscribe = function(e) {
                return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e)
            }, t.prototype._innerSubscribe = function(e) {
                var t = this,
                    r = this.hasError,
                    n = this.isStopped,
                    a = this.observers;
                return r || n ? nO : (this.currentObservers = null, a.push(e), new nI(function() {
                    t.currentObservers = null, nR(a, e)
                }))
            }, t.prototype._checkFinalizedStatuses = function(e) {
                var t = this.hasError,
                    r = this.thrownError,
                    n = this.isStopped;
                t ? e.error(r) : n && e.complete()
            }, t.prototype.asObservable = function() {
                var e = new nX;
                return e.source = this, e
            }, t.create = function(e, t) {
                return new n0(e, t)
            }, t
        }(nX),
        n0 = function(e) {
            function t(t, r) {
                var n = e.call(this) || this;
                return n.destination = t, n.source = r, n
            }
            return (0, nC.__extends)(t, e), t.prototype.next = function(e) {
                var t, r;
                null == (r = null == (t = this.destination) ? void 0 : t.next) || r.call(t, e)
            }, t.prototype.error = function(e) {
                var t, r;
                null == (r = null == (t = this.destination) ? void 0 : t.error) || r.call(t, e)
            }, t.prototype.complete = function() {
                var e, t;
                null == (t = null == (e = this.destination) ? void 0 : e.complete) || t.call(e)
            }, t.prototype._subscribe = function(e) {
                var t, r;
                return null != (r = null == (t = this.source) ? void 0 : t.subscribe(e)) ? r : nO
            }, t
        }(nJ),
        n1 = e.i(683176);

    function n2() {
        let e = (0, u.useRef)(new nJ);
        return {
            useListenToCustomEvent: function(t) {
                (0, u.useEffect)(() => {
                    let r = e.current.subscribe(t);
                    return () => r.unsubscribe()
                }, [t])
            },
            emitObservable: t => {
                e.current.next(t)
            }
        }
    }
    let n3 = "u" > typeof window ? u.useLayoutEffect : u.useEffect;

    function n5(e) {
        let t = (0, u.useRef)(!1);
        n3(() => {
            if (!t.current) {
                let r = e();
                return t.current = !0, () => {
                    r && r()
                }
            }
        }, [])
    }

    function n4(e) {
        let {
            mainCarouselWrapperRef: t,
            emitObservable: r,
            handleResize: n
        } = e, a = (0, u.useRef)(!1);
        return n5(() => {
            function e() {
                document.fullscreenElement && (a.current = !0, r({
                    eventName: "onFullscreenChange",
                    isFullscreen: !0
                }), n && n()), document.fullscreenElement || (a.current = !1, r({
                    eventName: "onFullscreenChange",
                    isFullscreen: !1
                }), n && n())
            }
            if (n1.default.isEnabled) return n1.default.on("change", e), () => {
                n1.default.isEnabled && n1.default.off("change", e)
            }
        }), {
            enterFullscreen: function(e) {
                n1.default.isEnabled && n1.default.request(e || t.current)
            },
            exitFullscreen: function() {
                n1.default.isEnabled && n1.default.exit()
            },
            getIsFullscreen: function() {
                return a.current
            }
        }
    }

    function n9(e) {
        let {
            items: t,
            withThumbs: r,
            thumbsSlideAxis: n = "x",
            springConfig: a,
            prepareThumbsData: s,
            getFluidWrapperScrollValue: o = () => 0,
            getSlideValue: i = () => 0,
            slideType: c
        } = e, d = (0, u.useRef)(null), [f, h] = rp(() => ({
            x: 0,
            y: 0,
            config: a,
            onChange: e => {
                let {
                    value: t
                } = e;
                d.current && "fluid" === c && (d.current["x" === n ? "scrollLeft" : "scrollTop"] = Math.abs(t[n]))
            }
        }));

        function p() {
            return d.current["x" === n ? "scrollLeft" : "scrollTop"]
        }

        function m() {
            var e;
            return Math.round(Number(null == (e = d.current) ? void 0 : e["x" === n ? "scrollWidth" : "scrollHeight"]) - d.current.getBoundingClientRect()["x" === n ? "width" : "height"])
        }

        function g() {
            let e = Math.round(o() / i());
            return m() / e
        }
        return n5(() => {
            if (r && !d.current) throw Error("The thumbs wrapper is not defined. If you've passed a Functional component, be sure to wrap your component in forwardRef.")
        }), {
            thumbsFragment: r ? (0, l.jsx)(rG.div, Object.assign({
                ref: d,
                className: "use-spring-carousel-thumbs-wrapper",
                onWheel: () => {
                    f[n].stop()
                },
                style: Object.assign({
                    display: "flex",
                    flex: 1,
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    flexDirection: "x" === n ? "row" : "column"
                }, "x" === n ? {
                    overflowX: "auto"
                } : {
                    overflowY: "auto",
                    maxHeight: "100%"
                })
            }, {
                children: (function() {
                    function e(e) {
                        return e.map(e => ({
                            id: e.id,
                            renderThumb: e.renderThumb
                        }))
                    }
                    return s ? s(e(t)) : e(t)
                })().map(e => {
                    let {
                        id: t,
                        renderThumb: r
                    } = e, n = `thumb-${t}`;
                    return (0, l.jsx)("div", Object.assign({
                        id: n,
                        className: "thumb-item"
                    }, {
                        children: r
                    }), n)
                })
            })) : null,
            handleThumbsScroll: function(e, r) {
                if ("fluid" === c) {
                    let e = m();
                    if ("next" === r) {
                        let t = p() + g();
                        h.start({
                            from: {
                                [n]: p()
                            },
                            to: {
                                [n]: t > e ? e : t
                            }
                        })
                    }
                    if ("prev" === r) {
                        let e = p() - g();
                        h.start({
                            from: {
                                [n]: p()
                            },
                            to: {
                                [n]: e < 0 ? 0 : e
                            }
                        })
                    }
                } else {
                    let a = d.current.querySelector(`#thumb-${t[e].id}`);
                    if (a) {
                        let s = d.current,
                            o = "x" === n ? "offsetWidth" : "offsetHeight",
                            i = function(e) {
                                let {
                                    thumbNode: t,
                                    offsetDirection: r,
                                    offsetDimension: n
                                } = e;
                                return t[r] + t[n] / 2
                            }({
                                thumbNode: a,
                                offsetDimension: o,
                                offsetDirection: "x" === n ? "offsetLeft" : "offsetTop"
                            }),
                            l = function(e) {
                                let {
                                    thumbWrapper: t,
                                    offsetDimension: r
                                } = e;
                                return t[r] / 2
                            }({
                                thumbWrapper: s,
                                offsetDimension: o
                            }),
                            u = function(e) {
                                let {
                                    thumbWrapper: t,
                                    scrollDirection: r
                                } = e;
                                return t[r]
                            }({
                                thumbWrapper: s,
                                scrollDirection: "x" === n ? "scrollLeft" : "scrollTop"
                            }),
                            c = function(r) {
                                let {
                                    thumbWrapper: a,
                                    thumbOffsetPosition: s,
                                    thumbScrollDimension: o,
                                    offsetDimension: i
                                } = r, l = "x" === n ? "scrollWidth" : "scrollHeight";
                                return e === t.length - 1 || s - o > a[l] - a[i] ? a[l] - a[i] : 0 === e ? 0 : s - o
                            }({
                                thumbWrapper: s,
                                thumbOffsetPosition: i,
                                thumbScrollDimension: l,
                                offsetDimension: o
                            });
                        h.start({
                            from: {
                                [n]: u
                            },
                            to: {
                                [n]: "prev" === r && c < 0 ? 0 : c
                            },
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                "x" === n ? d.current.scrollLeft = t.x : d.current.scrollTop = t.y
                            }
                        })
                    }
                }
            }
        }
    }
    let n6 = (0, u.createContext)(void 0),
        n8 = Object.assign(Object.assign({}, tF.default), {
            mass: 1,
            velocity: 0
        });

    function n7(e) {
        let t, {
                items: r,
                withLoop: n = !1,
                draggingSlideTreshold: a,
                springConfig: s = tF.default,
                shouldResizeOnWindowResize: o = !0,
                withThumbs: i = !1,
                enableThumbsWrapperScroll: c = !0,
                slideWhenThresholdIsReached: d = !0,
                carouselSlideAxis: f = "x",
                thumbsSlideAxis: h = "x",
                prepareThumbsData: p,
                initialActiveItem: m = 0,
                initialStartingPosition: g,
                disableGestures: y = !1,
                gutter: b = 0,
                startEndGutter: v = 0,
                touchAction: k,
                slideAmount: S,
                freeScroll: x = !1,
                enableFreeScrollDrag: w,
                itemsPerSlide: P = 1,
                slideType: C = "fixed"
            } = e,
            T = (0, u.useRef)(!0),
            _ = (0, u.useRef)("initial"),
            E = n ? r.length === P ? [...r, ...r, ...r, ...r, ...r] : [...r, ...r, ...r] : r,
            R = (0, u.useRef)(m),
            I = (0, u.useRef)(null),
            O = (0, u.useRef)(null),
            M = (0, u.useRef)(!1),
            F = (0, u.useRef)(!1),
            A = (0, u.useRef)(!1),
            j = (0, u.useRef)(0),
            N = (0, u.useRef)(!1),
            $ = (0, u.useRef)(0),
            D = (0, u.useRef)(0),
            L = (0, u.useRef)(0),
            B = (0, u.useRef)(r),
            z = (0, u.useRef)(null != a ? a : 0),
            V = (0, u.useRef)(P),
            q = (0, u.useRef)(b),
            W = (0, u.useRef)(v),
            H = (0, u.useRef)(m),
            U = (0, u.useRef)(g),
            G = (0, u.useRef)(f);
        V.current = P, q.current = b, W.current = v, H.current = m, U.current = g, G.current = f;
        let [Q, K] = rp(() => ({
            y: 0,
            x: 0,
            onChange: e => {
                let {
                    value: t
                } = e;
                I.current && x && (I.current["x" === G.current ? "scrollLeft" : "scrollTop"] = Math.abs(t[G.current]))
            }
        }));

        function X() {
            var e;
            let t = null == (e = O.current) ? void 0 : e.querySelector(".use-spring-carousel-item");
            if (!t) throw Error("No carousel items available!");
            return t.getBoundingClientRect()["x" === G.current ? "width" : "height"] + q.current
        }

        function Y() {
            return Q[G.current].get()
        }

        function Z() {
            return X() * r.length < function() {
                if (!I.current) throw Error("mainCarouselWrapperRef is not available");
                return I.current.getBoundingClientRect()["x" === G.current ? "width" : "height"]
            }()
        }

        function J() {
            var e;
            return Math.round(Number(null == (e = O.current) ? void 0 : e["x" === G.current ? "scrollWidth" : "scrollHeight"]) - O.current.getBoundingClientRect()["x" === G.current ? "width" : "height"])
        }

        function ee() {
            return 0 === eb()
        }

        function et() {
            if (!O.current) return 0;
            let e = X();
            if ("fluid" === C && "number" == typeof S) {
                if (S < e) throw Error("slideAmount must be greater than the width of a single item.");
                return S
            }
            return e
        }

        function er(e, t) {
            var a, s;
            let o = "x" === G.current ? "left" : "top";

            function i() {
                return X() * r.length
            }

            function l(r) {
                n ? (e.style.top = "0px", e.style[o] = `-${r-W.current}px`) : (e.style.left = "0px", e.style.top = "0px", t && T.current && (e.style[o] = `calc(-${t} * 100%)`))
            }
            if ("fixed" === C)
                if (V.current > 1) switch (U.current) {
                    default:
                        case "start":
                        l(i());
                    break;
                    case "center":
                            a = V.current,
                        l(i() - et() * Math.round((a - 1) / 2));
                        break;
                    case "end":
                            s = V.current,
                        l(i() - et() * Math.round(s - 1))
                }
            else l(i());
            else l(i())
        }

        function en() {
            if ($.current = window.innerWidth, "fluid" === C) {
                if (Z()) return void K.start({
                    immediate: !0,
                    [G.current]: 0
                });
                if (j.current = J(), N.current) {
                    let e = -j.current;
                    K.start({
                        immediate: !0,
                        [G.current]: e
                    })
                }
                D.current = window.innerWidth
            } else K.start({
                immediate: !0,
                [G.current]: -et() * eb()
            });
            j.current = J(), er(O.current)
        }

        function ea() {
            window.innerWidth === $.current || x || en()
        }
        n3(() => {
            z.current = a || Math.floor(et() / 2 / 2), en()
        }, [a, P, b, v, m, g, f, h]);
        let {
            useListenToCustomEvent: es,
            emitObservable: eo
        } = n2(), {
            enterFullscreen: ei,
            exitFullscreen: el,
            getIsFullscreen: eu
        } = n4({
            mainCarouselWrapperRef: I,
            emitObservable: eo,
            handleResize: ea
        }), {
            thumbsFragment: ec,
            handleThumbsScroll: ed
        } = n9({
            withThumbs: i,
            items: r,
            thumbsSlideAxis: h,
            springConfig: s,
            prepareThumbsData: p,
            slideType: C,
            getFluidWrapperScrollValue: J,
            getSlideValue: et
        });

        function ef() {
            if (!I.current) throw Error("Missing mainCarouselWrapperRef.current");
            return I.current["x" === G.current ? "scrollLeft" : "scrollTop"]
        }

        function eh() {
            return "boolean" == typeof w ? w : "function" == typeof w && w()
        }
        let ep = nP(e => {
            let t = e.dragging,
                r = e.offset[+("x" !== G.current)],
                a = e.movement[+("x" !== G.current)],
                o = a > z.current,
                i = a < -z.current,
                l = e.direction[+("x" !== G.current)];

            function u() {
                e.cancel()
            }

            function c() {
                em(l > 0 ? "prev" : "next")
            }

            function f() {
                eo(Object.assign({
                    eventName: "onDrag",
                    slideActionType: eg()
                }, e))
            }

            function h() {
                "fluid" === C ? Z() || ee() && "prev" === eg() ? K.start({
                    [G.current]: 0,
                    config: Object.assign({
                        velocity: e.velocity
                    }, s)
                }) : N.current && "next" === eg() ? K.start({
                    [G.current]: -j.current,
                    config: Object.assign({
                        velocity: e.velocity
                    }, s)
                }) : K.start({
                    [G.current]: L.current,
                    config: Object.assign({
                        velocity: e.velocity
                    }, s)
                }) : K.start({
                    [G.current]: -eb() * et(),
                    config: Object.assign({
                        velocity: e.velocity
                    }, s)
                })
            }

            function p() {
                Math.abs(Y()) + 100 >= j.current && "next" === eg() && (N.current = !0), "prev" === eg() && (N.current = !1)
            }
            if (x && eh()) return t && (ek() || ev(!0), c(), f(), p()), K.start({
                from: {
                    [G.current]: ef()
                },
                to: {
                    [G.current]: -r
                },
                config: {
                    velocity: e.velocity,
                    friction: 50,
                    tension: 1400
                }
            }), 0 === ef() && "prev" === eg() ? void u() : void(e.last && ("prev" === eg() ? eC(e.velocity) : eT(e.velocity), ev(!1)));
            if (t) {
                if (ek() || ev(!0), f(), c(), p(), x) {
                    if (eh()) {
                        if (0 === ef() && "prev" === eg()) return void u();
                        K.start({
                            config: {
                                velocity: e.velocity,
                                friction: 50,
                                tension: 1400
                            },
                            from: {
                                [G.current]: ef()
                            },
                            to: {
                                [G.current]: -r
                            }
                        })
                    }
                    return
                }
                if (K.start({
                        [G.current]: r,
                        config: {
                            velocity: e.velocity,
                            friction: 50,
                            tension: 1e3
                        }
                    }), (o || i) && Z() && "fluid" === C) u(), h();
                else if (N.current && "next" === eg() && i) N.current = !1, u(), K.start({
                    [G.current]: -j.current
                });
                else if (d) {
                    if (i) return u(), void(!n && eP() ? h() : eT(e.velocity));
                    if (o) return u(), void(!n && ee() ? h() : eC(e.velocity))
                }
            }
            e.last && !d && (i || o) && !x ? (ev(!1), i ? !n && eP() ? h() : eT(e.velocity) : o && (!n && ee() ? h() : eC(e.velocity))) : !e.last || i || o || x || (h(), eo(Object.assign({
                eventName: "onDrag",
                slideActionType: eg()
            }, e)))
        }, {
            enabled: !y,
            axis: G.current,
            from: () => x ? "x" === G.current ? [-ef(), 0] : [0, -ef()] : [Q.x.get(), Q.y.get()]
        });

        function em(e) {
            _.current = e
        }

        function eg() {
            return _.current
        }

        function ey(e) {
            R.current = e
        }

        function eb() {
            return R.current
        }

        function ev(e) {
            M.current = e
        }

        function ek() {
            return M.current
        }

        function eS(e) {
            return r.findIndex(t => t.id === e)
        }

        function ex(e, t) {
            if ("number" == typeof e) return {
                [G.current]: e
            };
            if ("number" != typeof t) throw Error("to values is not a number!");
            return {
                [G.current]: -et() * t
            }
        }

        function ew(e) {
            let {
                from: t,
                to: n = -1,
                customTo: a,
                immediate: o = !1,
                onRest: l = () => {},
                velocity: u
            } = e;
            o || (ey(n), F.current = !0, eo({
                eventName: "onSlideStartChange",
                slideActionType: eg(),
                nextItem: {
                    index: "fluid" === C ? -1 : n,
                    id: "fluid" === C ? "" : r[n].id
                }
            })), L.current = ex(a, n)[f], K.start(Object.assign(Object.assign(Object.assign(Object.assign({}, "number" == typeof t ? {
                from: {
                    [G.current]: t
                }
            } : {}), {
                to: ex(a, n)
            }), u ? {
                config: Object.assign(Object.assign({}, n8), {
                    velocity: u,
                    friction: void 0,
                    tension: void 0
                })
            } : {
                config: Object.assign({
                    velocity: 0
                }, s)
            }), {
                immediate: o,
                onRest: e => {
                    e.finished && (ev(!1), F.current = !1, l(), o || eo({
                        eventName: "onSlideChange",
                        slideActionType: eg(),
                        currentItem: {
                            index: "fluid" === C ? -1 : eb(),
                            id: "fluid" === C ? "" : r[eb()].id
                        }
                    }))
                }
            })), c && i && !o && ed(n, eg())
        }

        function eP() {
            return eb() === r.length - 1
        }

        function eC(e) {
            if (em("prev"), N.current = !1, "fluid" === C) {
                if (N.current = !1, Z()) return;
                let t = Y() + et() + 200;
                if (x) {
                    let t = I.current.scrollLeft - et();
                    ew({
                        customTo: t < 0 ? 0 : t,
                        from: I.current.scrollLeft,
                        velocity: e
                    })
                } else ew(t >= 0 ? n ? {
                    from: Y() - X() * r.length,
                    velocity: e,
                    customTo: Y() - X() * r.length + et()
                } : {
                    customTo: 0,
                    velocity: e
                } : {
                    customTo: Y() + et(),
                    velocity: e
                })
            } else {
                let t;
                if (!n && 0 === eb() || A.current) return;
                ee() ? ew({
                    from: Y() - et() * r.length,
                    to: r.length - 1,
                    velocity: e
                }) : ew({
                    to: 0 === (t = eb()) ? r.length - 1 : t - 1,
                    velocity: e
                })
            }
        }

        function eT(e) {
            if (em("next"), "fluid" === C) {
                if (Z()) return;
                let t = Math.abs(Y() - et()) + 100 >= j.current;
                if (x) {
                    let t = I.current.scrollLeft + et() > j.current,
                        r = I.current.scrollLeft + et();
                    ew({
                        velocity: e,
                        customTo: t ? j.current : r,
                        from: I.current.scrollLeft
                    })
                } else if (n && Math.abs(Y() - et()) >= r.length * X()) {
                    let t = X() * r.length;
                    ew({
                        from: Y() + t,
                        customTo: Y() + t - et(),
                        velocity: e
                    })
                } else {
                    if (N.current) return;
                    t ? (N.current = !0, ew({
                        customTo: -j.current,
                        velocity: e
                    })) : ew({
                        customTo: Y() - et(),
                        velocity: e
                    })
                }
            } else {
                let t;
                if (!n && eb() === E.length - 1 || A.current) return;
                Math.abs(Y() - et() + 25) > j.current && !ek() ? N.current = !0 : N.current ? ew({
                    to: r.length - V.current,
                    velocity: e
                }) : eP() ? ew({
                    from: Y() + et() * r.length,
                    to: 0,
                    velocity: e
                }) : ew({
                    to: (t = eb()) === r.length - 1 ? 0 : t + 1,
                    velocity: e
                })
            }
        }

        function e_(e) {
            let t = 0;
            if ((t = "string" == typeof e ? r.findIndex(t => t.id === e) : e) >= r.length) throw Error("The item you want to slide to doesn't exist. This could be due to the fact that \n        you provide a wrong id or a higher numeric index.");
            if (t === eb() || r.length !== B.current.length && eb() < r.length) return;
            let n = eS(B.current[eb()].id);
            em(eS(r[t].id) > n ? "next" : "prev"), ew({
                to: t
            })
        }
        n5(() => {
            if (P % 2 == 0 && U.current) throw Error("initialStartingPosition can be only used if itemsPerSlide is an even value.");
            if (z.current < 0) throw Error("draggingSlideTreshold must be greater than 0");
            if (z.current > et() / 2) throw Error(`draggingSlideTreshold must be equal or less than the half of the width of an item, which is ${Math.floor(et()/2)}`);
            if (V.current < 1) throw Error("The itemsPerSlide prop can't be less than 1.");
            if (V.current > r.length) throw Error("The itemsPerSlide prop can't be greater than the total length of the items you provide.");
            if (H.current < 0) throw Error("The initialActiveItem cannot be less than 0.");
            if (H.current > r.length) throw Error("The initialActiveItem cannot be greater than the total length of the items you provide.");
            o || console.warn("You set shouldResizeOnWindowResize={false}; be aware that the carousel could behave in a strange way if you also use the fullscreen functionality or if you change the mobile orientation.")
        }), n5(() => {
            function e() {
                document.hidden ? A.current = !0 : A.current = !1
            }
            return document.addEventListener("visibilitychange", e), () => {
                document.removeEventListener("visibilitychange", e)
            }
        }), n5(() => {
            T.current = !1, j.current = J(), D.current = window.innerWidth, $.current = window.innerWidth, m > 0 && (ew({
                to: m,
                immediate: !0
            }), ey(m), !n && O.current && (O.current.style.top = "0px", O.current.style.left = "0px"))
        }), n3(() => {
            m < r.length && m !== R.current && (ew({
                to: m,
                immediate: !0
            }), ey(m))
        }, [m]), n3(() => {
            if (o) return window.addEventListener("resize", ea), () => {
                window.removeEventListener("resize", ea)
            }
        }, [o]), n3(() => {
            O.current && ("x" === G.current && (O.current.style.top = "0px"), "y" === G.current && (O.current.style.left = "0px"))
        }, [f]), n3(() => {
            j.current = J(), r.length !== B.current.length && r.length < B.current.length && e_(r.length - 1), B.current = r
        }, [J, r]);
        let eE = Object.assign({
                useListenToCustomEvent: es,
                getIsFullscreen: eu,
                enterFullscreen: ei,
                exitFullscreen: el,
                getIsAnimating: function() {
                    return F.current
                },
                getIsDragging: ek,
                getIsNextItem: function(e) {
                    let t = eS(e),
                        a = eb();
                    return n && a === r.length - 1 ? 0 === t : t === a + 1
                },
                getIsPrevItem: function(e) {
                    let t = eS(e),
                        a = eb();
                    return n && 0 === a ? t === r.length - 1 : t === a - 1
                },
                slideToPrevItem() {
                    eC()
                },
                slideToNextItem() {
                    eT()
                }
            }, "fixed" === C ? {
                slideToItem: e_,
                getIsActiveItem: e => eS(e) === eb(),
                getCurrentActiveItem: () => ({
                    id: r[eb()].id,
                    index: eb()
                })
            } : {}),
            eR = (0, l.jsx)(n6.Provider, Object.assign({
                value: eE
            }, {
                children: (0, l.jsx)("div", Object.assign({
                    ref: I,
                    className: "use-spring-carousel-main-wrapper",
                    "data-testid": "use-spring-carousel-wrapper"
                }, x ? {
                    onWheel() {
                        Q[G.current].stop()
                    }
                } : {}, {
                    style: Object.assign({
                        display: "flex",
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    }, x ? "x" === G.current ? {
                        overflowX: "auto"
                    } : {
                        overflowY: "auto"
                    } : {})
                }, {
                    children: (0, l.jsx)(rG.div, Object.assign({}, ep(), {
                        className: "use-spring-carousel-track-wrapper",
                        "data-testid": "use-spring-carousel-animated-wrapper",
                        ref: e => {
                            e && (O.current = e, er(e, H.current))
                        },
                        style: Object.assign(Object.assign(Object.assign({
                            display: "flex",
                            position: "relative",
                            touchAction: y ? "unset" : k || ("x" === G.current ? "pan-y" : "pan-x"),
                            flexDirection: "x" === G.current ? "row" : "column"
                        }, (t = `calc(100% - ${2*W.current}px)`, {
                            width: "x" === G.current ? t : "100%",
                            height: "y" === G.current ? t : "100%"
                        })), function() {
                            let e = r.length / P * 100,
                                t = 100 / P,
                                n = "x" === G.current ? "left" : "y",
                                a = Math.floor(50 / t);
                            if ("fixed" === C) {
                                if ("center" === U.current) return {
                                    [n]: `calc(-${e}% + ${t*a}%)`
                                };
                                if ("end" === U.current) return {
                                    [n]: `calc(-${e}% + ${2*a*t}%)`
                                }
                            }
                            return {
                                [n]: "0px"
                            }
                        }()), x ? {} : Q)
                    }, {
                        children: E.map((e, t) => {
                            var r;
                            let {
                                id: n,
                                renderItem: a
                            } = e;
                            return (0, l.jsx)("div", Object.assign({
                                className: "use-spring-carousel-item",
                                "data-testid": "use-spring-carousel-item-wrapper",
                                style: Object.assign({
                                    display: "flex",
                                    position: "relative"
                                }, (r = V.current, "fixed" === C ? Object.assign(Object.assign({}, "x" === G.current ? {
                                    marginRight: `${q.current}px`
                                } : {
                                    marginBottom: `${q.current}px`
                                }), {
                                    flex: `1 0 calc(100% / ${r} - ${q.current*(r-1)/r}px)`
                                }) : Object.assign({}, "x" === G.current ? {
                                    marginRight: `${q.current}px`
                                } : {
                                    marginBottom: `${q.current}px`
                                })))
                            }, {
                                children: a
                            }), `${n}-${t}`)
                        })
                    }))
                }))
            })),
            eI = (0, l.jsx)(n6.Provider, Object.assign({
                value: eE
            }, {
                children: ec
            }));
        return Object.assign(Object.assign({}, eE), {
            carouselFragment: eR,
            thumbsFragment: eI
        })
    }
    e.s(["useSpringCarousel", () => n7], 414637);
    let ae = (0, u.createContext)(void 0);

    function at(e) {
        let t, {
                items: r,
                withLoop: n = !1,
                withThumbs: a = !1,
                springConfig: s = tF.default,
                thumbsSlideAxis: o = "x",
                enableThumbsWrapperScroll: i = !0,
                draggingSlideTreshold: c = 50,
                prepareThumbsData: d,
                toPrevItemSpringProps: f,
                toNextItemSpringProps: h,
                disableGestures: p = !1,
                trail: m,
                exitBeforeEnter: g = !1,
                springAnimationProps: y = {
                    initial: {
                        opacity: 1,
                        position: "absolute"
                    },
                    from: {
                        opacity: 0,
                        position: "absolute"
                    },
                    enter: {
                        opacity: 1,
                        position: "absolute"
                    },
                    leave: {
                        opacity: 0,
                        position: "absolute"
                    }
                }
            } = e,
            b = (0, u.useRef)("next"),
            v = (0, u.useRef)(null),
            k = (0, u.useRef)(!1),
            [S, x] = (0, u.useState)(0),
            {
                emitObservable: w,
                useListenToCustomEvent: P
            } = n2(),
            {
                enterFullscreen: C,
                exitFullscreen: T,
                getIsFullscreen: _
            } = n4({
                emitObservable: w,
                mainCarouselWrapperRef: v
            }),
            {
                thumbsFragment: E,
                handleThumbsScroll: R
            } = n9({
                items: r,
                withThumbs: a,
                thumbsSlideAxis: o,
                springConfig: s,
                prepareThumbsData: d,
                slideType: "fixed"
            }),
            I = nP(e => {
                let {
                    last: t,
                    movement: [a]
                } = e;
                if (!M() && t) {
                    let e = 0 === S,
                        t = S === r.length - 1;
                    if (a < -c) {
                        if (!n && t) return;
                        j(), w({
                            eventName: "onLeftSwipe"
                        })
                    } else if (a > c) {
                        if (!n && e) return;
                        N(), w({
                            eventName: "onRightSwipe"
                        })
                    }
                }
            }, {
                enabled: !p
            }),
            O = rv(S, Object.assign(Object.assign({
                config: s
            }, "prev" === (t = A()) && f ? {
                initial: Object.assign({}, y.initial),
                from: Object.assign({}, f.from),
                enter: Object.assign({}, f.enter),
                leave: Object.assign({}, f.leave)
            } : "next" === t && h ? {
                initial: Object.assign({}, y.initial),
                from: Object.assign({}, h.from),
                enter: Object.assign({}, h.enter),
                leave: Object.assign({}, h.leave)
            } : {
                initial: Object.assign({}, y.initial),
                from: Object.assign({}, y.from),
                enter: Object.assign({}, y.enter),
                leave: Object.assign({}, y.leave)
            }), {
                onStart: () => {
                    k.current = !0
                },
                trail: m,
                exitBeforeEnter: g,
                key: r[S].id,
                onRest: e => {
                    e.finished && (k.current = !1, w({
                        eventName: "onSlideChange",
                        slideActionType: A(),
                        currentItem: {
                            index: S,
                            id: r[S].id
                        }
                    }))
                }
            }))((e, t) => (0, l.jsx)(rG.div, Object.assign({
                style: Object.assign(Object.assign({}, e), {
                    flex: "1 0 100%",
                    width: "100%",
                    height: "100%"
                })
            }, {
                children: r[t].renderItem
            })));

        function M() {
            return k.current
        }

        function F(e) {
            b.current = e
        }

        function A() {
            return b.current
        }

        function j() {
            let e = S === r.length - 1;
            n ? (F("next"), e ? (w({
                eventName: "onSlideStartChange",
                slideActionType: A(),
                nextItem: {
                    index: 0,
                    id: r[0].id
                }
            }), x(0)) : (w({
                eventName: "onSlideStartChange",
                slideActionType: A(),
                nextItem: {
                    index: S + 1,
                    id: r[S + 1].id
                }
            }), x(S + 1))) : e || (w({
                eventName: "onSlideStartChange",
                slideActionType: A(),
                nextItem: {
                    index: S + 1,
                    id: r[S + 1].id
                }
            }), F("next"), x(S + 1))
        }

        function N() {
            let e = 0 === S;
            n ? (F("prev"), e ? (w({
                eventName: "onSlideStartChange",
                slideActionType: A(),
                nextItem: {
                    index: r.length - 1,
                    id: r[r.length - 1].id
                }
            }), x(r.length - 1)) : (w({
                eventName: "onSlideStartChange",
                slideActionType: A(),
                nextItem: {
                    index: S - 1,
                    id: r[S - 1].id
                }
            }), x(S - 1))) : e || (F("prev"), w({
                eventName: "onSlideStartChange",
                slideActionType: A(),
                nextItem: {
                    index: S - 1,
                    id: r[S - 1].id
                }
            }), x(S - 1))
        }

        function $(e) {
            return r.findIndex(t => t.id === e)
        }
        let D = {
            activeItem: S,
            slideToItem: function(e) {
                let t = 0;
                if ((t = "string" == typeof e ? r.findIndex(t => t.id === e) : e) >= r.length) throw Error("The item you want to slide to doesn't exist. This could be due to the fact that \n        you provide a wrong id or a higher numeric index.");
                if (t === S) return;
                let n = $(r[S].id),
                    s = $(r[t].id);
                w({
                    eventName: "onSlideStartChange",
                    slideActionType: A(),
                    nextItem: {
                        index: s,
                        id: r[t].id
                    }
                }), F(s > n ? "next" : "prev"), x(t), i && a && R(t)
            },
            slideToNextItem: j,
            slideToPrevItem: N,
            enterFullscreen: C,
            exitFullscreen: T,
            useListenToCustomEvent: P,
            getIsNextItem: function(e) {
                let t = $(e);
                return n && S === r.length - 1 ? 0 === t : t === S + 1
            },
            getIsPrevItem: function(e) {
                let t = $(e);
                return n && 0 === S ? t === r.length - 1 : t === S - 1
            },
            getIsAnimating: M,
            getIsFullscreen: _,
            getIsActiveItem: e => $(e) === S,
            getCurrentActiveItem: () => ({
                id: r[S].id,
                index: S
            })
        };
        return Object.assign({
            carouselFragment: (0, l.jsx)(ae.Provider, Object.assign({
                value: D
            }, {
                children: (0, l.jsx)("div", Object.assign({
                    ref: v
                }, I(), {
                    style: {
                        display: "flex",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }
                }, {
                    children: O
                }))
            })),
            thumbsFragment: (0, l.jsx)(ae.Provider, Object.assign({
                value: D
            }, {
                children: E
            }))
        }, D)
    }
    e.s(["useTransitionCarousel", () => at], 213150), e.s([], 247141)
}, 947964, (e, t, r) => {
    "use strict";
    var n = e.r(191788),
        a = e.r(730943);

    function s(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var o = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        l = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        d = Symbol.for("react.consumer"),
        f = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.suspense_list"),
        g = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        b = Symbol.for("react.scope"),
        v = Symbol.for("react.activity"),
        k = Symbol.for("react.legacy_hidden"),
        S = Symbol.for("react.memo_cache_sentinel"),
        x = Symbol.for("react.view_transition"),
        w = Symbol.iterator;

    function P(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = w && e[w] || e["@@iterator"]) ? e : null
    }
    var C = Array.isArray;

    function T(e, t) {
        var r = 3 & e.length,
            n = e.length - r,
            a = t;
        for (t = 0; t < n;) {
            var s = 255 & e.charCodeAt(t) | (255 & e.charCodeAt(++t)) << 8 | (255 & e.charCodeAt(++t)) << 16 | (255 & e.charCodeAt(++t)) << 24;
            ++t, a ^= s = 0x1b873593 * (65535 & (s = (s = 0xcc9e2d51 * (65535 & s) + ((0xcc9e2d51 * (s >>> 16) & 65535) << 16) | 0) << 15 | s >>> 17)) + ((0x1b873593 * (s >>> 16) & 65535) << 16) | 0, a = (65535 & (a = 5 * (65535 & (a = a << 13 | a >>> 19)) + ((5 * (a >>> 16) & 65535) << 16) | 0)) + 27492 + (((a >>> 16) + 58964 & 65535) << 16)
        }
        switch (s = 0, r) {
            case 3:
                s ^= (255 & e.charCodeAt(t + 2)) << 16;
            case 2:
                s ^= (255 & e.charCodeAt(t + 1)) << 8;
            case 1:
                s ^= 255 & e.charCodeAt(t), a ^= 0x1b873593 * (65535 & (s = (s = 0xcc9e2d51 * (65535 & s) + ((0xcc9e2d51 * (s >>> 16) & 65535) << 16) | 0) << 15 | s >>> 17)) + ((0x1b873593 * (s >>> 16) & 65535) << 16)
        }
        return a ^= e.length, a ^= a >>> 16, a = 0x85ebca6b * (65535 & a) + ((0x85ebca6b * (a >>> 16) & 65535) << 16) | 0, a ^= a >>> 13, ((a = 0xc2b2ae35 * (65535 & a) + ((0xc2b2ae35 * (a >>> 16) & 65535) << 16) | 0) ^ a >>> 16) >>> 0
    }
    var _ = Object.assign,
        E = Object.prototype.hasOwnProperty,
        R = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        I = {},
        O = {};

    function M(e) {
        return !!E.call(O, e) || !E.call(I, e) && (R.test(e) ? O[e] = !0 : (I[e] = !0, !1))
    }
    var F = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),
        A = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        j = /["'&<>]/;

    function N(e) {
        if ("boolean" == typeof e || "number" == typeof e || "bigint" == typeof e) return "" + e;
        e = "" + e;
        var t = j.exec(e);
        if (t) {
            var r, n = "",
                a = 0;
            for (r = t.index; r < e.length; r++) {
                switch (e.charCodeAt(r)) {
                    case 34:
                        t = "&quot;";
                        break;
                    case 38:
                        t = "&amp;";
                        break;
                    case 39:
                        t = "&#x27;";
                        break;
                    case 60:
                        t = "&lt;";
                        break;
                    case 62:
                        t = "&gt;";
                        break;
                    default:
                        continue
                }
                a !== r && (n += e.slice(a, r)), a = r + 1, n += t
            }
            e = a !== r ? n + e.slice(a, r) : n
        }
        return e
    }
    var $ = /([A-Z])/g,
        D = /^ms-/,
        L = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function B(e) {
        return L.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var z = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        V = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        q = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        W = V.d;
    V.d = {
        f: W.f,
        r: W.r,
        D: function(e) {
            var t = tX || null;
            if (t) {
                var r, n, a = t.resumableState,
                    s = t.renderState;
                "string" == typeof e && e && (a.dnsResources.hasOwnProperty(e) || (a.dnsResources[e] = null, (n = (a = s.headers) && 0 < a.remainingCapacity) && (r = "<" + ("" + e).replace(eU, eG) + ">; rel=dns-prefetch", n = 0 <= (a.remainingCapacity -= r.length + 2)), n ? (s.resets.dns[e] = null, a.preconnects && (a.preconnects += ", "), a.preconnects += r) : (ef(r = [], {
                    href: e,
                    rel: "dns-prefetch"
                }), s.preconnects.add(r))), rA(t))
            } else W.D(e)
        },
        C: function(e, t) {
            var r = tX || null;
            if (r) {
                var n = r.resumableState,
                    a = r.renderState;
                if ("string" == typeof e && e) {
                    var s, o, i = "use-credentials" === t ? "credentials" : "string" == typeof t ? "anonymous" : "default";
                    n.connectResources[i].hasOwnProperty(e) || (n.connectResources[i][e] = null, (o = (n = a.headers) && 0 < n.remainingCapacity) && (o = "<" + ("" + e).replace(eU, eG) + ">; rel=preconnect", "string" == typeof t && (o += '; crossorigin="' + ("" + t).replace(eQ, eK) + '"'), s = o, o = 0 <= (n.remainingCapacity -= s.length + 2)), o ? (a.resets.connect[i][e] = null, n.preconnects && (n.preconnects += ", "), n.preconnects += s) : (ef(i = [], {
                        rel: "preconnect",
                        href: e,
                        crossOrigin: t
                    }), a.preconnects.add(i))), rA(r)
                }
            } else W.C(e, t)
        },
        L: function(e, t, r) {
            var n = tX || null;
            if (n) {
                var a = n.resumableState,
                    s = n.renderState;
                if (t && e) {
                    switch (t) {
                        case "image":
                            if (r) var o, i = r.imageSrcSet,
                                l = r.imageSizes,
                                u = r.fetchPriority;
                            var c = i ? i + "\n" + (l || "") : e;
                            if (a.imageResources.hasOwnProperty(c)) return;
                            a.imageResources[c] = H, (a = s.headers) && 0 < a.remainingCapacity && "string" != typeof i && "high" === u && (o = eH(e, t, r), 0 <= (a.remainingCapacity -= o.length + 2)) ? (s.resets.image[c] = H, a.highImagePreloads && (a.highImagePreloads += ", "), a.highImagePreloads += o) : (ef(a = [], _({
                                rel: "preload",
                                href: i ? void 0 : e,
                                as: t
                            }, r)), "high" === u ? s.highImagePreloads.add(a) : (s.bulkPreloads.add(a), s.preloads.images.set(c, a)));
                            break;
                        case "style":
                            if (a.styleResources.hasOwnProperty(e)) return;
                            ef(i = [], _({
                                rel: "preload",
                                href: e,
                                as: t
                            }, r)), a.styleResources[e] = r && ("string" == typeof r.crossOrigin || "string" == typeof r.integrity) ? [r.crossOrigin, r.integrity] : H, s.preloads.stylesheets.set(e, i), s.bulkPreloads.add(i);
                            break;
                        case "script":
                            if (a.scriptResources.hasOwnProperty(e)) return;
                            i = [], s.preloads.scripts.set(e, i), s.bulkPreloads.add(i), ef(i, _({
                                rel: "preload",
                                href: e,
                                as: t
                            }, r)), a.scriptResources[e] = r && ("string" == typeof r.crossOrigin || "string" == typeof r.integrity) ? [r.crossOrigin, r.integrity] : H;
                            break;
                        default:
                            if (a.unknownResources.hasOwnProperty(t)) {
                                if ((i = a.unknownResources[t]).hasOwnProperty(e)) return
                            } else i = {}, a.unknownResources[t] = i;
                            i[e] = H, (a = s.headers) && 0 < a.remainingCapacity && "font" === t && (c = eH(e, t, r), 0 <= (a.remainingCapacity -= c.length + 2)) ? (s.resets.font[e] = H, a.fontPreloads && (a.fontPreloads += ", "), a.fontPreloads += c) : (ef(a = [], e = _({
                                rel: "preload",
                                href: e,
                                as: t
                            }, r)), "font" === t) ? s.fontPreloads.add(a) : s.bulkPreloads.add(a)
                    }
                    rA(n)
                }
            } else W.L(e, t, r)
        },
        m: function(e, t) {
            var r = tX || null;
            if (r) {
                var n = r.resumableState,
                    a = r.renderState;
                if (e) {
                    var s = t && "string" == typeof t.as ? t.as : "script";
                    if ("script" === s) {
                        if (n.moduleScriptResources.hasOwnProperty(e)) return;
                        s = [], n.moduleScriptResources[e] = t && ("string" == typeof t.crossOrigin || "string" == typeof t.integrity) ? [t.crossOrigin, t.integrity] : H, a.preloads.moduleScripts.set(e, s)
                    } else {
                        if (n.moduleUnknownResources.hasOwnProperty(s)) {
                            var o = n.unknownResources[s];
                            if (o.hasOwnProperty(e)) return
                        } else o = {}, n.moduleUnknownResources[s] = o;
                        s = [], o[e] = H
                    }
                    ef(s, _({
                        rel: "modulepreload",
                        href: e
                    }, t)), a.bulkPreloads.add(s), rA(r)
                }
            } else W.m(e, t)
        },
        X: function(e, t) {
            var r = tX || null;
            if (r) {
                var n = r.resumableState,
                    a = r.renderState;
                if (e) {
                    var s = n.scriptResources.hasOwnProperty(e) ? n.scriptResources[e] : void 0;
                    null !== s && (n.scriptResources[e] = null, t = _({
                        src: e,
                        async: !0
                    }, t), s && (2 === s.length && eW(t, s), e = a.preloads.scripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), ey(e, t), rA(r))
                }
            } else W.X(e, t)
        },
        S: function(e, t, r) {
            var n = tX || null;
            if (n) {
                var a = n.resumableState,
                    s = n.renderState;
                if (e) {
                    t = t || "default";
                    var o = s.styles.get(t),
                        i = a.styleResources.hasOwnProperty(e) ? a.styleResources[e] : void 0;
                    null !== i && (a.styleResources[e] = null, o || (o = {
                        precedence: N(t),
                        rules: [],
                        hrefs: [],
                        sheets: new Map
                    }, s.styles.set(t, o)), t = {
                        state: 0,
                        props: _({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, r)
                    }, i && (2 === i.length && eW(t.props, i), (s = s.preloads.stylesheets.get(e)) && 0 < s.length ? s.length = 0 : t.state = 1), o.sheets.set(e, t), rA(n))
                }
            } else W.S(e, t, r)
        },
        M: function(e, t) {
            var r = tX || null;
            if (r) {
                var n = r.resumableState,
                    a = r.renderState;
                if (e) {
                    var s = n.moduleScriptResources.hasOwnProperty(e) ? n.moduleScriptResources[e] : void 0;
                    null !== s && (n.moduleScriptResources[e] = null, t = _({
                        src: e,
                        type: "module",
                        async: !0
                    }, t), s && (2 === s.length && eW(t, s), e = a.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), ey(e, t), rA(r))
                }
            } else W.M(e, t)
        }
    };
    var H = [],
        U = null,
        G = /(<\/|<)(s)(cript)/gi;

    function Q(e, t, r, n) {
        return "" + t + ("s" === r ? "\\u0073" : "\\u0053") + n
    }

    function K(e, t, r, n) {
        return {
            insertionMode: e,
            selectedValue: t,
            tagScope: r,
            viewTransition: n
        }
    }

    function X(e, t, r) {
        var n = -25 & e.tagScope;
        switch (t) {
            case "noscript":
                return K(2, null, 1 | n, null);
            case "select":
                return K(2, null != r.value ? r.value : r.defaultValue, n, null);
            case "svg":
                return K(4, null, n, null);
            case "picture":
                return K(2, null, 2 | n, null);
            case "math":
                return K(5, null, n, null);
            case "foreignObject":
                return K(2, null, n, null);
            case "table":
                return K(6, null, n, null);
            case "thead":
            case "tbody":
            case "tfoot":
                return K(7, null, n, null);
            case "colgroup":
                return K(9, null, n, null);
            case "tr":
                return K(8, null, n, null);
            case "head":
                if (2 > e.insertionMode) return K(3, null, n, null);
                break;
            case "html":
                if (0 === e.insertionMode) return K(1, null, n, null)
        }
        return 6 <= e.insertionMode || 2 > e.insertionMode ? K(2, null, n, null) : e.tagScope !== n ? K(e.insertionMode, e.selectedValue, n, null) : e
    }

    function Y(e) {
        return null === e ? null : {
            update: e.update,
            enter: "none",
            exit: "none",
            share: e.update,
            name: e.autoName,
            autoName: e.autoName,
            nameIdx: 0
        }
    }

    function Z(e, t) {
        return 32 & t.tagScope && (e.instructions |= 128), K(t.insertionMode, t.selectedValue, 12 | t.tagScope, Y(t.viewTransition))
    }

    function J(e, t) {
        e = Y(t.viewTransition);
        var r = 16 | t.tagScope;
        return null !== e && "none" !== e.share && (r |= 64), K(t.insertionMode, t.selectedValue, r, e)
    }
    var ee = new Map;

    function et(e, t) {
        if ("object" != typeof t) throw Error(s(62));
        var r, n = !0;
        for (r in t)
            if (E.call(t, r)) {
                var a = t[r];
                if (null != a && "boolean" != typeof a && "" !== a) {
                    if (0 === r.indexOf("--")) {
                        var o = N(r);
                        a = N(("" + a).trim())
                    } else void 0 === (o = ee.get(r)) && (o = N(r.replace($, "-$1").toLowerCase().replace(D, "-ms-")), ee.set(r, o)), a = "number" == typeof a ? 0 === a || F.has(r) ? "" + a : a + "px" : N(("" + a).trim());
                    n ? (n = !1, e.push(' style="', o, ":", a)) : e.push(";", o, ":", a)
                }
            }
        n || e.push('"')
    }

    function er(e, t, r) {
        r && "function" != typeof r && "symbol" != typeof r && e.push(" ", t, '=""')
    }

    function en(e, t, r) {
        "function" != typeof r && "symbol" != typeof r && "boolean" != typeof r && e.push(" ", t, '="', N(r), '"')
    }
    var ea = N("javascript:throw new Error('React form unexpectedly submitted.')");

    function es(e, t) {
        this.push('<input type="hidden"'), eo(e), en(this, "name", t), en(this, "value", e), this.push("/>")
    }

    function eo(e) {
        if ("string" != typeof e) throw Error(s(480))
    }

    function ei(e, t) {
        if ("function" == typeof t.$$FORM_ACTION) {
            var r = e.nextFormID++;
            e = e.idPrefix + r;
            try {
                var n = t.$$FORM_ACTION(e);
                if (n) {
                    var a = n.data;
                    null != a && a.forEach(eo)
                }
                return n
            } catch (e) {
                if ("object" == typeof e && null !== e && "function" == typeof e.then) throw e
            }
        }
        return null
    }

    function el(e, t, r, n, a, s, o, i) {
        var l = null;
        if ("function" == typeof n) {
            var u = ei(t, n);
            null !== u ? (i = u.name, n = u.action || "", a = u.encType, s = u.method, o = u.target, l = u.data) : (e.push(" ", "formAction", '="', ea, '"'), o = s = a = n = i = null, ed(t, r))
        }
        return null != i && eu(e, "name", i), null != n && eu(e, "formAction", n), null != a && eu(e, "formEncType", a), null != s && eu(e, "formMethod", s), null != o && eu(e, "formTarget", o), l
    }

    function eu(e, t, r) {
        switch (t) {
            case "className":
                en(e, "class", r);
                break;
            case "tabIndex":
                en(e, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                en(e, t, r);
                break;
            case "style":
                et(e, r);
                break;
            case "src":
            case "href":
                if ("" === r) break;
            case "action":
            case "formAction":
                if (null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) break;
                r = B("" + r), e.push(" ", t, '="', N(r), '"');
                break;
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "ref":
                break;
            case "autoFocus":
            case "multiple":
            case "muted":
                er(e, t.toLowerCase(), r);
                break;
            case "xlinkHref":
                if ("function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) break;
                r = B("" + r), e.push(" ", "xlink:href", '="', N(r), '"');
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                "function" != typeof r && "symbol" != typeof r && e.push(" ", t, '="', N(r), '"');
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && "function" != typeof r && "symbol" != typeof r && e.push(" ", t, '=""');
                break;
            case "capture":
            case "download":
                !0 === r ? e.push(" ", t, '=""') : !1 !== r && "function" != typeof r && "symbol" != typeof r && e.push(" ", t, '="', N(r), '"');
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r && e.push(" ", t, '="', N(r), '"');
                break;
            case "rowSpan":
            case "start":
                "function" == typeof r || "symbol" == typeof r || isNaN(r) || e.push(" ", t, '="', N(r), '"');
                break;
            case "xlinkActuate":
                en(e, "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                en(e, "xlink:arcrole", r);
                break;
            case "xlinkRole":
                en(e, "xlink:role", r);
                break;
            case "xlinkShow":
                en(e, "xlink:show", r);
                break;
            case "xlinkTitle":
                en(e, "xlink:title", r);
                break;
            case "xlinkType":
                en(e, "xlink:type", r);
                break;
            case "xmlBase":
                en(e, "xml:base", r);
                break;
            case "xmlLang":
                en(e, "xml:lang", r);
                break;
            case "xmlSpace":
                en(e, "xml:space", r);
                break;
            default:
                if ((!(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && M(t = A.get(t) || t)) {
                    switch (typeof r) {
                        case "function":
                        case "symbol":
                            return;
                        case "boolean":
                            var n = t.toLowerCase().slice(0, 5);
                            if ("data-" !== n && "aria-" !== n) return
                    }
                    e.push(" ", t, '="', N(r), '"')
                }
        }
    }

    function ec(e, t, r) {
        if (null != t) {
            if (null != r) throw Error(s(60));
            if ("object" != typeof t || !("__html" in t)) throw Error(s(61));
            null != (t = t.__html) && e.push("" + t)
        }
    }

    function ed(e, t) {
        if (0 == (16 & e.instructions)) {
            e.instructions |= 16;
            var r = t.preamble,
                n = t.bootstrapChunks;
            (r.htmlChunks || r.headChunks) && 0 === n.length ? (n.push(t.startInlineScript), eV(n, e), n.push(">", 'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});', "</script>")) : n.unshift(t.startInlineScript, ">", 'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});', "</script>")
        }
    }

    function ef(e, t) {
        for (var r in e.push(ex("link")), t)
            if (E.call(t, r)) {
                var n = t[r];
                if (null != n) switch (r) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(s(399, "link"));
                    default:
                        eu(e, r, n)
                }
            }
        return e.push("/>"), null
    }
    var eh = /(<\/|<)(s)(tyle)/gi;

    function ep(e, t, r, n) {
        return "" + t + ("s" === r ? "\\73 " : "\\53 ") + n
    }

    function em(e, t, r) {
        for (var n in e.push(ex(r)), t)
            if (E.call(t, n)) {
                var a = t[n];
                if (null != a) switch (n) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(s(399, r));
                    default:
                        eu(e, n, a)
                }
            }
        return e.push("/>"), null
    }

    function eg(e, t) {
        e.push(ex("title"));
        var r, n = null,
            a = null;
        for (r in t)
            if (E.call(t, r)) {
                var s = t[r];
                if (null != s) switch (r) {
                    case "children":
                        n = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        a = s;
                        break;
                    default:
                        eu(e, r, s)
                }
            }
        return e.push(">"), "function" != typeof(t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n) && "symbol" != typeof t && null != t && e.push(N("" + t)), ec(e, a, n), e.push(eP("title")), null
    }

    function ey(e, t) {
        e.push(ex("script"));
        var r, n = null,
            a = null;
        for (r in t)
            if (E.call(t, r)) {
                var s = t[r];
                if (null != s) switch (r) {
                    case "children":
                        n = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        a = s;
                        break;
                    default:
                        eu(e, r, s)
                }
            }
        return e.push(">"), ec(e, a, n), "string" == typeof n && e.push(("" + n).replace(G, Q)), e.push(eP("script")), null
    }

    function eb(e, t, r) {
        e.push(ex(r));
        var n, a = r = null;
        for (n in t)
            if (E.call(t, n)) {
                var s = t[n];
                if (null != s) switch (n) {
                    case "children":
                        r = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        a = s;
                        break;
                    default:
                        eu(e, n, s)
                }
            }
        return e.push(">"), ec(e, a, r), r
    }

    function ev(e, t, r) {
        e.push(ex(r));
        var n, a = r = null;
        for (n in t)
            if (E.call(t, n)) {
                var s = t[n];
                if (null != s) switch (n) {
                    case "children":
                        r = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        a = s;
                        break;
                    default:
                        eu(e, n, s)
                }
            }
        return e.push(">"), ec(e, a, r), "string" == typeof r ? (e.push(N(r)), null) : r
    }
    var ek = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        eS = new Map;

    function ex(e) {
        var t = eS.get(e);
        if (void 0 === t) {
            if (!ek.test(e)) throw Error(s(65, e));
            t = "<" + e, eS.set(e, t)
        }
        return t
    }
    var ew = new Map;

    function eP(e) {
        var t = ew.get(e);
        return void 0 === t && (t = "</" + e + ">", ew.set(e, t)), t
    }

    function eC(e, t) {
        null === (e = e.preamble).htmlChunks && t.htmlChunks && (e.htmlChunks = t.htmlChunks), null === e.headChunks && t.headChunks && (e.headChunks = t.headChunks), null === e.bodyChunks && t.bodyChunks && (e.bodyChunks = t.bodyChunks)
    }

    function eT(e, t) {
        t = t.bootstrapChunks;
        for (var r = 0; r < t.length - 1; r++) e.push(t[r]);
        return !(r < t.length) || (r = t[r], t.length = 0, e.push(r))
    }

    function e_(e, t, r) {
        if (e.push('<!--$?--><template id="'), null === r) throw Error(s(395));
        return e.push(t.boundaryPrefix), t = r.toString(16), e.push(t), e.push('"></template>')
    }
    var eE = /[<\u2028\u2029]/g,
        eR = /[&><\u2028\u2029]/g;

    function eI(e) {
        return JSON.stringify(e).replace(eR, function(e) {
            switch (e) {
                case "&":
                    return "\\u0026";
                case ">":
                    return "\\u003e";
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
            }
        })
    }
    var eO = !1,
        eM = !0;

    function eF(e) {
        var t = e.rules,
            r = e.hrefs,
            n = 0;
        if (r.length) {
            for (this.push(U.startInlineStyle), this.push(' media="not all" data-precedence="'), this.push(e.precedence), this.push('" data-href="'); n < r.length - 1; n++) this.push(r[n]), this.push(" ");
            for (this.push(r[n]), this.push('">'), n = 0; n < t.length; n++) this.push(t[n]);
            eM = this.push("</style>"), eO = !0, t.length = 0, r.length = 0
        }
    }

    function eA(e) {
        return 2 !== e.state && (eO = !0)
    }

    function ej(e, t, r) {
        return eO = !1, eM = !0, U = r, t.styles.forEach(eF, e), U = null, t.stylesheets.forEach(eA), eO && (r.stylesToHoist = !0), eM
    }

    function eN(e) {
        for (var t = 0; t < e.length; t++) this.push(e[t]);
        e.length = 0
    }
    var e$ = [];

    function eD(e) {
        ef(e$, e.props);
        for (var t = 0; t < e$.length; t++) this.push(e$[t]);
        e$.length = 0, e.state = 2
    }

    function eL(e) {
        var t = 0 < e.sheets.size;
        e.sheets.forEach(eD, this), e.sheets.clear();
        var r = e.rules,
            n = e.hrefs;
        if (!t || n.length) {
            if (this.push(U.startInlineStyle), this.push(' data-precedence="'), this.push(e.precedence), e = 0, n.length) {
                for (this.push('" data-href="'); e < n.length - 1; e++) this.push(n[e]), this.push(" ");
                this.push(n[e])
            }
            for (this.push('">'), e = 0; e < r.length; e++) this.push(r[e]);
            this.push("</style>"), r.length = 0, n.length = 0
        }
    }

    function eB(e) {
        if (0 === e.state) {
            e.state = 1;
            var t = e.props;
            for (ef(e$, {
                    rel: "preload",
                    as: "style",
                    href: e.props.href,
                    crossOrigin: t.crossOrigin,
                    fetchPriority: t.fetchPriority,
                    integrity: t.integrity,
                    media: t.media,
                    hrefLang: t.hrefLang,
                    referrerPolicy: t.referrerPolicy
                }), e = 0; e < e$.length; e++) this.push(e$[e]);
            e$.length = 0
        }
    }

    function ez(e) {
        e.sheets.forEach(eB, this), e.sheets.clear()
    }

    function eV(e, t) {
        0 == (32 & t.instructions) && (t.instructions |= 32, e.push(' id="', N("_" + t.idPrefix + "R_"), '"'))
    }

    function eq() {
        return {
            styles: new Set,
            stylesheets: new Set,
            suspenseyImages: !1
        }
    }

    function eW(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t[0]), null == e.integrity && (e.integrity = t[1])
    }

    function eH(e, t, r) {
        for (var n in t = "<" + (e = ("" + e).replace(eU, eG)) + '>; rel=preload; as="' + (t = ("" + t).replace(eQ, eK)) + '"', r) E.call(r, n) && "string" == typeof(e = r[n]) && (t += "; " + n.toLowerCase() + '="' + ("" + e).replace(eQ, eK) + '"');
        return t
    }
    var eU = /[<>\r\n]/g;

    function eG(e) {
        switch (e) {
            case "<":
                return "%3C";
            case ">":
                return "%3E";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
        }
    }
    var eQ = /["';,\r\n]/g;

    function eK(e) {
        switch (e) {
            case '"':
                return "%22";
            case "'":
                return "%27";
            case ";":
                return "%3B";
            case ",":
                return "%2C";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
        }
    }

    function eX(e) {
        this.styles.add(e)
    }

    function eY(e) {
        this.stylesheets.add(e)
    }

    function eZ(e, t) {
        t.styles.forEach(eX, e), t.stylesheets.forEach(eY, e), t.suspenseyImages && (e.suspenseyImages = !0)
    }

    function eJ(e, t, r, n) {
        return r.generateStaticMarkup ? (e.push(N(t)), !1) : ("" === t ? e = n : (n && e.push("<!-- -->"), e.push(N(t)), e = !0), e)
    }

    function e0(e, t, r, n) {
        t.generateStaticMarkup || r && n && e.push("<!-- -->")
    }
    var e1 = Function.prototype.bind,
        e2 = Symbol.for("react.client.reference");

    function e3(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.$$typeof === e2 ? null : e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case l:
                return "Fragment";
            case c:
                return "Profiler";
            case u:
                return "StrictMode";
            case p:
                return "Suspense";
            case m:
                return "SuspenseList";
            case v:
                return "Activity"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case i:
                return "Portal";
            case f:
                return e.displayName || "Context";
            case d:
                return (e._context.displayName || "Context") + ".Consumer";
            case h:
                var t = e.render;
                return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case g:
                return null !== (t = e.displayName || null) ? t : e3(e.type) || "Memo";
            case y:
                t = e._payload, e = e._init;
                try {
                    return e3(e(t))
                } catch (e) {}
        }
        return null
    }
    var e5 = {},
        e4 = null;

    function e9(e, t) {
        if (e !== t) {
            e.context._currentValue2 = e.parentValue, e = e.parent;
            var r = t.parent;
            if (null === e) {
                if (null !== r) throw Error(s(401))
            } else {
                if (null === r) throw Error(s(401));
                e9(e, r)
            }
            t.context._currentValue2 = t.value
        }
    }

    function e6(e) {
        var t = e4;
        t !== e && (null === t ? function e(t) {
            var r = t.parent;
            null !== r && e(r), t.context._currentValue2 = t.value
        }(e) : null === e ? function e(t) {
            t.context._currentValue2 = t.parentValue, null !== (t = t.parent) && e(t)
        }(t) : t.depth === e.depth ? e9(t, e) : t.depth > e.depth ? function e(t, r) {
            if (t.context._currentValue2 = t.parentValue, null === (t = t.parent)) throw Error(s(402));
            t.depth === r.depth ? e9(t, r) : e(t, r)
        }(t, e) : function e(t, r) {
            var n = r.parent;
            if (null === n) throw Error(s(402));
            t.depth === n.depth ? e9(t, n) : e(t, n), r.context._currentValue2 = r.value
        }(t, e), e4 = e)
    }
    var e8 = {
            enqueueSetState: function(e, t) {
                null !== (e = e._reactInternals).queue && e.queue.push(t)
            },
            enqueueReplaceState: function(e, t) {
                (e = e._reactInternals).replace = !0, e.queue = [t]
            },
            enqueueForceUpdate: function() {}
        },
        e7 = {
            id: 1,
            overflow: ""
        };

    function te(e, t, r) {
        var n = e.id;
        e = e.overflow;
        var a = 32 - tt(n) - 1;
        n &= ~(1 << a), r += 1;
        var s = 32 - tt(t) + a;
        if (30 < s) {
            var o = a - a % 5;
            return s = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, {
                id: 1 << 32 - tt(t) + a | r << a | n,
                overflow: s + e
            }
        }
        return {
            id: 1 << s | r << a | n,
            overflow: e
        }
    }
    var tt = Math.clz32 ? Math.clz32 : function(e) {
            return 0 == (e >>>= 0) ? 32 : 31 - (tr(e) / tn | 0) | 0
        },
        tr = Math.log,
        tn = Math.LN2;

    function ta() {}
    var ts = Error(s(460)),
        to = null;

    function ti() {
        if (null === to) throw Error(s(459));
        var e = to;
        return to = null, e
    }
    var tl = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        tu = null,
        tc = null,
        td = null,
        tf = null,
        th = null,
        tp = null,
        tm = !1,
        tg = !1,
        ty = 0,
        tb = 0,
        tv = -1,
        tk = 0,
        tS = null,
        tx = null,
        tw = 0;

    function tP() {
        if (null === tu) throw Error(s(321));
        return tu
    }

    function tC() {
        if (0 < tw) throw Error(s(312));
        return {
            memoizedState: null,
            queue: null,
            next: null
        }
    }

    function tT() {
        return null === tp ? null === th ? (tm = !1, th = tp = tC()) : (tm = !0, tp = th) : null === tp.next ? (tm = !1, tp = tp.next = tC()) : (tm = !0, tp = tp.next), tp
    }

    function t_() {
        var e = tS;
        return tS = null, e
    }

    function tE() {
        tf = td = tc = tu = null, tg = !1, th = null, tw = 0, tp = tx = null
    }

    function tR(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function tI(e, t, r) {
        if (tu = tP(), tp = tT(), tm) {
            var n = tp.queue;
            if (t = n.dispatch, null !== tx && void 0 !== (r = tx.get(n))) {
                tx.delete(n), n = tp.memoizedState;
                do n = e(n, r.action), r = r.next; while (null !== r) return tp.memoizedState = n, [n, t]
            }
            return [tp.memoizedState, t]
        }
        return e = e === tR ? "function" == typeof t ? t() : t : void 0 !== r ? r(t) : t, tp.memoizedState = e, e = (e = tp.queue = {
            last: null,
            dispatch: null
        }).dispatch = tM.bind(null, tu, e), [tp.memoizedState, e]
    }

    function tO(e, t) {
        if (tu = tP(), tp = tT(), t = void 0 === t ? null : t, null !== tp) {
            var r = tp.memoizedState;
            if (null !== r && null !== t) {
                var n = r[1];
                e: if (null === n) n = !1;
                    else {
                        for (var a = 0; a < n.length && a < t.length; a++)
                            if (!tl(t[a], n[a])) {
                                n = !1;
                                break e
                            }
                        n = !0
                    }
                if (n) return r[0]
            }
        }
        return e = e(), tp.memoizedState = [e, t], e
    }

    function tM(e, t, r) {
        if (25 <= tw) throw Error(s(301));
        if (e === tu)
            if (tg = !0, e = {
                    action: r,
                    next: null
                }, null === tx && (tx = new Map), void 0 === (r = tx.get(t))) tx.set(t, e);
            else {
                for (t = r; null !== t.next;) t = t.next;
                t.next = e
            }
    }

    function tF() {
        throw Error(s(440))
    }

    function tA() {
        throw Error(s(394))
    }

    function tj() {
        throw Error(s(479))
    }

    function tN(e, t, r) {
        tP();
        var n = tb++,
            a = td;
        if ("function" == typeof e.$$FORM_ACTION) {
            var s = null,
                o = tf;
            a = a.formState;
            var i = e.$$IS_SIGNATURE_EQUAL;
            if (null !== a && "function" == typeof i) {
                var l = a[1];
                i.call(e, a[2], a[3]) && l === (s = void 0 !== r ? "p" + r : "k" + T(JSON.stringify([o, null, n]), 0)) && (tv = n, t = a[0])
            }
            var u = e.bind(null, t);
            return e = function(e) {
                u(e)
            }, "function" == typeof u.$$FORM_ACTION && (e.$$FORM_ACTION = function(e) {
                e = u.$$FORM_ACTION(e), void 0 !== r && (r += "", e.action = r);
                var t = e.data;
                return t && (null === s && (s = void 0 !== r ? "p" + r : "k" + T(JSON.stringify([o, null, n]), 0)), t.append("$ACTION_KEY", s)), e
            }), [t, e, !1]
        }
        var c = e.bind(null, t);
        return [t, function(e) {
            c(e)
        }, !1]
    }

    function t$(e) {
        var t = tk;
        tk += 1, null === tS && (tS = []);
        var r = tS,
            n = e,
            a = t;
        switch (void 0 === (a = r[a]) ? r.push(n) : a !== n && (n.then(ta, ta), n = a), n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw n.reason;
            default:
                switch ("string" == typeof n.status ? n.then(ta, ta) : ((r = n).status = "pending", r.then(function(e) {
                    if ("pending" === n.status) {
                        var t = n;
                        t.status = "fulfilled", t.value = e
                    }
                }, function(e) {
                    if ("pending" === n.status) {
                        var t = n;
                        t.status = "rejected", t.reason = e
                    }
                })), n.status) {
                    case "fulfilled":
                        return n.value;
                    case "rejected":
                        throw n.reason
                }
                throw to = n, ts
        }
    }

    function tD() {
        throw Error(s(393))
    }
    var tL, tB, tz = {
            readContext: function(e) {
                return e._currentValue2
            },
            use: function(e) {
                if (null !== e && "object" == typeof e) {
                    if ("function" == typeof e.then) return t$(e);
                    if (e.$$typeof === f) return e._currentValue2
                }
                throw Error(s(438, String(e)))
            },
            useContext: function(e) {
                return tP(), e._currentValue2
            },
            useMemo: tO,
            useReducer: tI,
            useRef: function(e) {
                tu = tP();
                var t = (tp = tT()).memoizedState;
                return null === t ? (e = {
                    current: e
                }, tp.memoizedState = e) : t
            },
            useState: function(e) {
                return tI(tR, e)
            },
            useInsertionEffect: ta,
            useLayoutEffect: ta,
            useCallback: function(e, t) {
                return tO(function() {
                    return e
                }, t)
            },
            useImperativeHandle: ta,
            useEffect: ta,
            useDebugValue: ta,
            useDeferredValue: function(e, t) {
                return tP(), void 0 !== t ? t : e
            },
            useTransition: function() {
                return tP(), [!1, tA]
            },
            useId: function() {
                var e = tc.treeContext,
                    t = e.overflow;
                e = ((e = e.id) & ~(1 << 32 - tt(e) - 1)).toString(32) + t;
                var r = tV;
                if (null === r) throw Error(s(404));
                return t = ty++, e = "_" + r.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_"
            },
            useSyncExternalStore: function(e, t, r) {
                if (void 0 === r) throw Error(s(407));
                return r()
            },
            useOptimistic: function(e) {
                return tP(), [e, tj]
            },
            useActionState: tN,
            useFormState: tN,
            useHostTransitionStatus: function() {
                return tP(), q
            },
            useMemoCache: function(e) {
                for (var t = Array(e), r = 0; r < e; r++) t[r] = S;
                return t
            },
            useCacheRefresh: function() {
                return tD
            },
            useEffectEvent: function() {
                return tF
            }
        },
        tV = null,
        tq = {
            getCacheForType: function() {
                throw Error(s(248))
            },
            cacheSignal: function() {
                throw Error(s(248))
            }
        };

    function tW(e) {
        if (void 0 === tL) try {
            throw Error()
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            tL = t && t[1] || "", tB = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return "\n" + tL + e + tB
    }
    var tH = !1;

    function tU(e, t) {
        if (!e || tH) return "";
        tH = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var r = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(r.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(r, [])
                                } catch (e) {
                                    var n = e
                                }
                                Reflect.construct(e, [], r)
                            } else {
                                try {
                                    r.call()
                                } catch (e) {
                                    n = e
                                }
                                e.call(r.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                n = e
                            }(r = e()) && "function" == typeof r.catch && r.catch(function() {})
                        }
                    } catch (e) {
                        if (e && n && "string" == typeof e.stack) return [e.stack, n.stack]
                    }
                    return [null, null]
                }
            };
            n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var s = n.DetermineComponentFrameRoot(),
                o = s[0],
                i = s[1];
            if (o && i) {
                var l = o.split("\n"),
                    u = i.split("\n");
                for (a = n = 0; n < l.length && !l[n].includes("DetermineComponentFrameRoot");) n++;
                for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                if (n === l.length || a === u.length)
                    for (n = l.length - 1, a = u.length - 1; 1 <= n && 0 <= a && l[n] !== u[a];) a--;
                for (; 1 <= n && 0 <= a; n--, a--)
                    if (l[n] !== u[a]) {
                        if (1 !== n || 1 !== a)
                            do
                                if (n--, a--, 0 > a || l[n] !== u[a]) {
                                    var c = "\n" + l[n].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                }
                        while (1 <= n && 0 <= a) break
                    }
            }
        } finally {
            tH = !1, Error.prepareStackTrace = r
        }
        return (r = e ? e.displayName || e.name : "") ? tW(r) : ""
    }

    function tG(e, t) {
        return 500 < t.byteSize && null === t.contentPreamble
    }

    function tQ(e) {
        if ("object" == typeof e && null !== e && "string" == typeof e.environmentName) {
            var t = e.environmentName;
            "string" == typeof(e = [e])[0] ? e.splice(0, 1, "[%s] " + e[0], " " + t + " "): e.splice(0, 0, "[%s]", " " + t + " "), e.unshift(console), (t = e1.apply(console.error, e))()
        } else console.error(e);
        return null
    }

    function tK(e, t, r, n, a, s, o, i, l, u, c) {
        var d = new Set;
        this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = r, this.progressiveChunkSize = void 0 === n ? 12800 : n, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = d, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === a ? tQ : a, this.onPostpone = void 0 === u ? ta : u, this.onAllReady = void 0 === s ? ta : s, this.onShellReady = void 0 === o ? ta : o, this.onShellError = void 0 === i ? ta : i, this.onFatalError = void 0 === l ? ta : l, this.formState = void 0 === c ? null : c
    }
    var tX = null;

    function tY(e, t) {
        e.pingedTasks.push(t), 1 === e.pingedTasks.length && (e.flushScheduled = null !== e.destination, rx(e))
    }

    function tZ(e, t, r, n, a) {
        return r = {
            status: 0,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            row: t,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: r,
            errorDigest: null,
            contentState: eq(),
            fallbackState: eq(),
            contentPreamble: n,
            fallbackPreamble: a,
            trackedContentKeyPath: null,
            trackedFallbackNode: null
        }, null !== t && (t.pendingTasks++, null !== (n = t.boundaries) && (e.allPendingTasks++, r.pendingTasks++, n.push(r)), null !== (e = t.inheritedHoistables) && eZ(r.contentState, e)), r
    }

    function tJ(e, t, r, n, a, s, o, i, l, u, c, d, f, h, p) {
        e.allPendingTasks++, null === a ? e.pendingRootTasks++ : a.pendingTasks++, null !== h && h.pendingTasks++;
        var m = {
            replay: null,
            node: r,
            childIndex: n,
            ping: function() {
                return tY(e, m)
            },
            blockedBoundary: a,
            blockedSegment: s,
            blockedPreamble: o,
            hoistableState: i,
            abortSet: l,
            keyPath: u,
            formatContext: c,
            context: d,
            treeContext: f,
            row: h,
            componentStack: p,
            thenableState: t
        };
        return l.add(m), m
    }

    function t0(e, t, r, n, a, s, o, i, l, u, c, d, f, h) {
        e.allPendingTasks++, null === s ? e.pendingRootTasks++ : s.pendingTasks++, null !== f && f.pendingTasks++, r.pendingTasks++;
        var p = {
            replay: r,
            node: n,
            childIndex: a,
            ping: function() {
                return tY(e, p)
            },
            blockedBoundary: s,
            blockedSegment: null,
            blockedPreamble: null,
            hoistableState: o,
            abortSet: i,
            keyPath: l,
            formatContext: u,
            context: c,
            treeContext: d,
            row: f,
            componentStack: h,
            thenableState: t
        };
        return i.add(p), p
    }

    function t1(e, t, r, n, a, s) {
        return {
            status: 0,
            parentFlushed: !1,
            id: -1,
            index: t,
            chunks: [],
            children: [],
            preambleChildren: [],
            parentFormatContext: n,
            boundary: r,
            lastPushedText: a,
            textEmbedded: s
        }
    }

    function t2(e) {
        var t = e.node;
        "object" == typeof t && null !== t && t.$$typeof === o && (e.componentStack = {
            parent: e.componentStack,
            type: t.type
        })
    }

    function t3(e) {
        return null === e ? null : {
            parent: e.parent,
            type: "Suspense Fallback"
        }
    }

    function t5(e) {
        var t = {};
        return e && Object.defineProperty(t, "componentStack", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    var r = "",
                        n = e;
                    do r += function e(t) {
                        if ("string" == typeof t) return tW(t);
                        if ("function" == typeof t) return t.prototype && t.prototype.isReactComponent ? tU(t, !0) : tU(t, !1);
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case h:
                                    return tU(t.render, !1);
                                case g:
                                    return tU(t.type, !1);
                                case y:
                                    var r = t,
                                        n = r._payload;
                                    r = r._init;
                                    try {
                                        t = r(n)
                                    } catch (e) {
                                        return tW("Lazy")
                                    }
                                    return e(t)
                            }
                            if ("string" == typeof t.name) {
                                e: {
                                    n = t.name,
                                    r = t.env;
                                    var a = t.debugLocation;
                                    if (null != a && (t = Error.prepareStackTrace, Error.prepareStackTrace = void 0, a = a.stack, Error.prepareStackTrace = t, a.startsWith("Error: react-stack-top-frame\n") && (a = a.slice(29)), -1 !== (t = a.indexOf("\n")) && (a = a.slice(t + 1)), -1 !== (t = a.indexOf("react_stack_bottom_frame")) && (t = a.lastIndexOf("\n", t)), -1 !== (t = -1 === (a = (t = -1 !== t ? a = a.slice(0, t) : "").lastIndexOf("\n")) ? t : t.slice(a + 1)).indexOf(n))) {
                                        n = "\n" + t;
                                        break e
                                    }
                                    n = tW(n + (r ? " [" + r + "]" : ""))
                                }
                                return n
                            }
                        }
                        switch (t) {
                            case m:
                                return tW("SuspenseList");
                            case p:
                                return tW("Suspense")
                        }
                        return ""
                    }(n.type), n = n.parent; while (n) var a = r
                } catch (e) {
                    a = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return Object.defineProperty(t, "componentStack", {
                    value: a
                }), a
            }
        }), t
    }

    function t4(e, t, r) {
        if (null == (t = (e = e.onError)(t, r)) || "string" == typeof t) return t
    }

    function t9(e, t) {
        var r = e.onShellError,
            n = e.onFatalError;
        r(t), n(t), null !== e.destination ? (e.status = 14, e.destination.destroy(t)) : (e.status = 13, e.fatalError = t)
    }

    function t6(e, t) {
        t8(e, t.next, t.hoistables)
    }

    function t8(e, t, r) {
        for (; null !== t;) {
            null !== r && (eZ(t.hoistables, r), t.inheritedHoistables = r);
            var n = t.boundaries;
            if (null !== n) {
                t.boundaries = null;
                for (var a = 0; a < n.length; a++) {
                    var s = n[a];
                    null !== r && eZ(s.contentState, r), rS(e, s, null, null)
                }
            }
            if (t.pendingTasks--, 0 < t.pendingTasks) break;
            r = t.hoistables, t = t.next
        }
    }

    function t7(e, t) {
        var r = t.boundaries;
        if (null !== r && t.pendingTasks === r.length) {
            for (var n = !0, a = 0; a < r.length; a++) {
                var s = r[a];
                if (1 !== s.pendingTasks || s.parentFlushed || tG(e, s)) {
                    n = !1;
                    break
                }
            }
            n && t8(e, t, t.hoistables)
        }
    }

    function re(e) {
        var t = {
            pendingTasks: 1,
            boundaries: null,
            hoistables: eq(),
            inheritedHoistables: null,
            together: !1,
            next: null
        };
        return null !== e && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t
    }

    function rt(e, t, r, n, a) {
        var s = t.keyPath,
            o = t.treeContext,
            i = t.row;
        t.keyPath = r, r = n.length;
        var l = null;
        if (null !== t.replay) {
            var u = t.replay.slots;
            if (null !== u && "object" == typeof u)
                for (var c = 0; c < r; c++) {
                    var d = "backwards" !== a && "unstable_legacy-backwards" !== a ? c : r - 1 - c,
                        f = n[d];
                    t.row = l = re(l), t.treeContext = te(o, r, d);
                    var h = u[d];
                    "number" == typeof h ? (rs(e, t, h, f, d), delete u[d]) : rp(e, t, f, d), 0 == --l.pendingTasks && t6(e, l)
                } else
                    for (u = 0; u < r; u++) d = n[c = "backwards" !== a && "unstable_legacy-backwards" !== a ? u : r - 1 - u], t.row = l = re(l), t.treeContext = te(o, r, c), rp(e, t, d, c), 0 == --l.pendingTasks && t6(e, l)
        } else if ("backwards" !== a && "unstable_legacy-backwards" !== a)
            for (a = 0; a < r; a++) u = n[a], t.row = l = re(l), t.treeContext = te(o, r, a), rp(e, t, u, a), 0 == --l.pendingTasks && t6(e, l);
        else {
            for (u = (a = t.blockedSegment).children.length, c = a.chunks.length, d = r - 1; 0 <= d; d--) {
                f = n[d], t.row = l = re(l), t.treeContext = te(o, r, d), h = t1(e, c, null, t.formatContext, 0 !== d || a.lastPushedText, !0), a.children.splice(u, 0, h), t.blockedSegment = h;
                try {
                    rp(e, t, f, d), e0(h.chunks, e.renderState, h.lastPushedText, h.textEmbedded), h.status = 1, 0 == --l.pendingTasks && t6(e, l)
                } catch (t) {
                    throw h.status = 12 === e.status ? 3 : 4, t
                }
            }
            t.blockedSegment = a, a.lastPushedText = !1
        }
        null !== i && null !== l && 0 < l.pendingTasks && (i.pendingTasks++, l.next = i), t.treeContext = o, t.row = i, t.keyPath = s
    }

    function rr(e, t, r, n, a, s) {
        var o = t.thenableState;
        for (t.thenableState = null, tu = {}, tc = t, td = e, tf = r, tb = ty = 0, tv = -1, tk = 0, tS = o, e = n(a, s); tg;) tg = !1, tb = ty = 0, tv = -1, tk = 0, tw += 1, tp = null, e = n(a, s);
        return tE(), e
    }

    function rn(e, t, r, n, a, s, o) {
        var i = !1;
        if (0 !== s && null !== e.formState) {
            var l = t.blockedSegment;
            if (null !== l) {
                i = !0, l = l.chunks;
                for (var u = 0; u < s; u++) u === o ? l.push("<!--F!-->") : l.push("<!--F-->")
            }
        }
        s = t.keyPath, t.keyPath = r, a ? (r = t.treeContext, t.treeContext = te(r, 1, 0), rp(e, t, n, -1), t.treeContext = r) : i ? rp(e, t, n, -1) : ro(e, t, n, -1), t.keyPath = s
    }

    function ra(e, t, r, a, o, i) {
        if ("function" == typeof a)
            if (a.prototype && a.prototype.isReactComponent) {
                var S = o;
                if ("ref" in o)
                    for (var w in S = {}, o) "ref" !== w && (S[w] = o[w]);
                var T = a.defaultProps;
                if (T)
                    for (var R in S === o && (S = _({}, S, o)), T) void 0 === S[R] && (S[R] = T[R]);
                o = S, S = e5, "object" == typeof(T = a.contextType) && null !== T && (S = T._currentValue2);
                var I = void 0 !== (S = new a(o, S)).state ? S.state : null;
                if (S.updater = e8, S.props = o, S.state = I, T = {
                        queue: [],
                        replace: !1
                    }, S._reactInternals = T, i = a.contextType, S.context = "object" == typeof i && null !== i ? i._currentValue2 : e5, "function" == typeof(i = a.getDerivedStateFromProps) && (I = null == (i = i(o, I)) ? I : _({}, I, i), S.state = I), "function" != typeof a.getDerivedStateFromProps && "function" != typeof S.getSnapshotBeforeUpdate && ("function" == typeof S.UNSAFE_componentWillMount || "function" == typeof S.componentWillMount))
                    if (a = S.state, "function" == typeof S.componentWillMount && S.componentWillMount(), "function" == typeof S.UNSAFE_componentWillMount && S.UNSAFE_componentWillMount(), a !== S.state && e8.enqueueReplaceState(S, S.state, null), null !== T.queue && 0 < T.queue.length)
                        if (a = T.queue, i = T.replace, T.queue = null, T.replace = !1, i && 1 === a.length) S.state = a[0];
                        else {
                            for (T = i ? a[0] : S.state, I = !0, i = +!!i; i < a.length; i++) null != (R = "function" == typeof(R = a[i]) ? R.call(S, T, o, void 0) : R) && (I ? (I = !1, T = _({}, T, R)) : _(T, R));
                            S.state = T
                        }
                else T.queue = null;
                if (a = S.render(), 12 === e.status) throw null;
                o = t.keyPath, t.keyPath = r, ro(e, t, a, -1), t.keyPath = o
            } else {
                if (a = rr(e, t, r, a, o, void 0), 12 === e.status) throw null;
                rn(e, t, r, a, 0 !== ty, tb, tv)
            }
        else if ("string" == typeof a)
            if (null === (S = t.blockedSegment)) S = o.children, T = t.formatContext, I = t.keyPath, t.formatContext = X(T, a, o), t.keyPath = r, rp(e, t, S, -1), t.formatContext = T, t.keyPath = I;
            else {
                if (I = function(e, t, r, a, o, i, l, u, c) {
                        switch (t) {
                            case "div":
                            case "span":
                            case "svg":
                            case "path":
                            case "g":
                            case "p":
                            case "li":
                            case "annotation-xml":
                            case "color-profile":
                            case "font-face":
                            case "font-face-src":
                            case "font-face-uri":
                            case "font-face-format":
                            case "font-face-name":
                            case "missing-glyph":
                                break;
                            case "a":
                                e.push(ex("a"));
                                var d, f = null,
                                    h = null;
                                for (d in r)
                                    if (E.call(r, d)) {
                                        var p = r[d];
                                        if (null != p) switch (d) {
                                            case "children":
                                                f = p;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                h = p;
                                                break;
                                            case "href":
                                                "" === p ? en(e, "href", "") : eu(e, d, p);
                                                break;
                                            default:
                                                eu(e, d, p)
                                        }
                                    }
                                if (e.push(">"), ec(e, h, f), "string" == typeof f) {
                                    e.push(N(f));
                                    var m = null
                                } else m = f;
                                return m;
                            case "select":
                                e.push(ex("select"));
                                var g, y = null,
                                    b = null;
                                for (g in r)
                                    if (E.call(r, g)) {
                                        var v = r[g];
                                        if (null != v) switch (g) {
                                            case "children":
                                                y = v;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                b = v;
                                                break;
                                            case "defaultValue":
                                            case "value":
                                                break;
                                            default:
                                                eu(e, g, v)
                                        }
                                    }
                                return e.push(">"), ec(e, b, y), y;
                            case "option":
                                var k = u.selectedValue;
                                e.push(ex("option"));
                                var S, x = null,
                                    w = null,
                                    P = null,
                                    T = null;
                                for (S in r)
                                    if (E.call(r, S)) {
                                        var R = r[S];
                                        if (null != R) switch (S) {
                                            case "children":
                                                x = R;
                                                break;
                                            case "selected":
                                                P = R;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                T = R;
                                                break;
                                            case "value":
                                                w = R;
                                            default:
                                                eu(e, S, R)
                                        }
                                    }
                                if (null != k) {
                                    var I, O, F = null !== w ? "" + w : (I = x, O = "", n.Children.forEach(I, function(e) {
                                        null != e && (O += e)
                                    }), O);
                                    if (C(k)) {
                                        for (var A = 0; A < k.length; A++)
                                            if ("" + k[A] === F) {
                                                e.push(' selected=""');
                                                break
                                            }
                                    } else "" + k === F && e.push(' selected=""')
                                } else P && e.push(' selected=""');
                                return e.push(">"), ec(e, T, x), x;
                            case "textarea":
                                e.push(ex("textarea"));
                                var j, $ = null,
                                    D = null,
                                    L = null;
                                for (j in r)
                                    if (E.call(r, j)) {
                                        var z = r[j];
                                        if (null != z) switch (j) {
                                            case "children":
                                                L = z;
                                                break;
                                            case "value":
                                                $ = z;
                                                break;
                                            case "defaultValue":
                                                D = z;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                throw Error(s(91));
                                            default:
                                                eu(e, j, z)
                                        }
                                    }
                                if (null === $ && null !== D && ($ = D), e.push(">"), null != L) {
                                    if (null != $) throw Error(s(92));
                                    if (C(L)) {
                                        if (1 < L.length) throw Error(s(93));
                                        $ = "" + L[0]
                                    }
                                    $ = "" + L
                                }
                                return "string" == typeof $ && "\n" === $[0] && e.push("\n"), null !== $ && e.push(N("" + $)), null;
                            case "input":
                                e.push(ex("input"));
                                var V, q = null,
                                    W = null,
                                    U = null,
                                    G = null,
                                    Q = null,
                                    K = null,
                                    X = null,
                                    Y = null,
                                    Z = null;
                                for (V in r)
                                    if (E.call(r, V)) {
                                        var J = r[V];
                                        if (null != J) switch (V) {
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                throw Error(s(399, "input"));
                                            case "name":
                                                q = J;
                                                break;
                                            case "formAction":
                                                W = J;
                                                break;
                                            case "formEncType":
                                                U = J;
                                                break;
                                            case "formMethod":
                                                G = J;
                                                break;
                                            case "formTarget":
                                                Q = J;
                                                break;
                                            case "defaultChecked":
                                                Z = J;
                                                break;
                                            case "defaultValue":
                                                X = J;
                                                break;
                                            case "checked":
                                                Y = J;
                                                break;
                                            case "value":
                                                K = J;
                                                break;
                                            default:
                                                eu(e, V, J)
                                        }
                                    }
                                var ee = el(e, a, o, W, U, G, Q, q);
                                return null !== Y ? er(e, "checked", Y) : null !== Z && er(e, "checked", Z), null !== K ? eu(e, "value", K) : null !== X && eu(e, "value", X), e.push("/>"), null != ee && ee.forEach(es, e), null;
                            case "button":
                                e.push(ex("button"));
                                var eo, ek = null,
                                    eS = null,
                                    ew = null,
                                    eC = null,
                                    eT = null,
                                    e_ = null,
                                    eE = null;
                                for (eo in r)
                                    if (E.call(r, eo)) {
                                        var eR = r[eo];
                                        if (null != eR) switch (eo) {
                                            case "children":
                                                ek = eR;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                eS = eR;
                                                break;
                                            case "name":
                                                ew = eR;
                                                break;
                                            case "formAction":
                                                eC = eR;
                                                break;
                                            case "formEncType":
                                                eT = eR;
                                                break;
                                            case "formMethod":
                                                e_ = eR;
                                                break;
                                            case "formTarget":
                                                eE = eR;
                                                break;
                                            default:
                                                eu(e, eo, eR)
                                        }
                                    }
                                var eI = el(e, a, o, eC, eT, e_, eE, ew);
                                if (e.push(">"), null != eI && eI.forEach(es, e), ec(e, eS, ek), "string" == typeof ek) {
                                    e.push(N(ek));
                                    var eO = null
                                } else eO = ek;
                                return eO;
                            case "form":
                                e.push(ex("form"));
                                var eM, eF = null,
                                    eA = null,
                                    ej = null,
                                    eN = null,
                                    e$ = null,
                                    eD = null;
                                for (eM in r)
                                    if (E.call(r, eM)) {
                                        var eL = r[eM];
                                        if (null != eL) switch (eM) {
                                            case "children":
                                                eF = eL;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                eA = eL;
                                                break;
                                            case "action":
                                                ej = eL;
                                                break;
                                            case "encType":
                                                eN = eL;
                                                break;
                                            case "method":
                                                e$ = eL;
                                                break;
                                            case "target":
                                                eD = eL;
                                                break;
                                            default:
                                                eu(e, eM, eL)
                                        }
                                    }
                                var eB = null,
                                    ez = null;
                                if ("function" == typeof ej) {
                                    var eV = ei(a, ej);
                                    null !== eV ? (ej = eV.action || "", eN = eV.encType, e$ = eV.method, eD = eV.target, eB = eV.data, ez = eV.name) : (e.push(" ", "action", '="', ea, '"'), eD = e$ = eN = ej = null, ed(a, o))
                                }
                                if (null != ej && eu(e, "action", ej), null != eN && eu(e, "encType", eN), null != e$ && eu(e, "method", e$), null != eD && eu(e, "target", eD), e.push(">"), null !== ez && (e.push('<input type="hidden"'), en(e, "name", ez), e.push("/>"), null != eB && eB.forEach(es, e)), ec(e, eA, eF), "string" == typeof eF) {
                                    e.push(N(eF));
                                    var eq = null
                                } else eq = eF;
                                return eq;
                            case "menuitem":
                                for (var eU in e.push(ex("menuitem")), r)
                                    if (E.call(r, eU)) {
                                        var eG = r[eU];
                                        if (null != eG) switch (eU) {
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                throw Error(s(400));
                                            default:
                                                eu(e, eU, eG)
                                        }
                                    }
                                return e.push(">"), null;
                            case "object":
                                e.push(ex("object"));
                                var eQ, eK = null,
                                    eX = null;
                                for (eQ in r)
                                    if (E.call(r, eQ)) {
                                        var eY = r[eQ];
                                        if (null != eY) switch (eQ) {
                                            case "children":
                                                eK = eY;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                eX = eY;
                                                break;
                                            case "data":
                                                var eZ = B("" + eY);
                                                if ("" === eZ) break;
                                                e.push(" ", "data", '="', N(eZ), '"');
                                                break;
                                            default:
                                                eu(e, eQ, eY)
                                        }
                                    }
                                if (e.push(">"), ec(e, eX, eK), "string" == typeof eK) {
                                    e.push(N(eK));
                                    var eJ = null
                                } else eJ = eK;
                                return eJ;
                            case "title":
                                var e0 = 1 & u.tagScope,
                                    e1 = 4 & u.tagScope;
                                if (4 === u.insertionMode || e0 || null != r.itemProp) var e2 = eg(e, r);
                                else e1 ? e2 = null : (eg(o.hoistableChunks, r), e2 = void 0);
                                return e2;
                            case "link":
                                var e3 = 1 & u.tagScope,
                                    e5 = 4 & u.tagScope,
                                    e4 = r.rel,
                                    e9 = r.href,
                                    e6 = r.precedence;
                                if (4 === u.insertionMode || e3 || null != r.itemProp || "string" != typeof e4 || "string" != typeof e9 || "" === e9) {
                                    ef(e, r);
                                    var e8 = null
                                } else if ("stylesheet" === r.rel)
                                    if ("string" != typeof e6 || null != r.disabled || r.onLoad || r.onError) e8 = ef(e, r);
                                    else {
                                        var e7 = o.styles.get(e6),
                                            te = a.styleResources.hasOwnProperty(e9) ? a.styleResources[e9] : void 0;
                                        if (null !== te) {
                                            a.styleResources[e9] = null, e7 || (e7 = {
                                                precedence: N(e6),
                                                rules: [],
                                                hrefs: [],
                                                sheets: new Map
                                            }, o.styles.set(e6, e7));
                                            var tt = {
                                                state: 0,
                                                props: _({}, r, {
                                                    "data-precedence": r.precedence,
                                                    precedence: null
                                                })
                                            };
                                            if (te) {
                                                2 === te.length && eW(tt.props, te);
                                                var tr = o.preloads.stylesheets.get(e9);
                                                tr && 0 < tr.length ? tr.length = 0 : tt.state = 1
                                            }
                                            e7.sheets.set(e9, tt), l && l.stylesheets.add(tt)
                                        } else if (e7) {
                                            var tn = e7.sheets.get(e9);
                                            tn && l && l.stylesheets.add(tn)
                                        }
                                        c && e.push("<!-- -->"), e8 = null
                                    }
                                else r.onLoad || r.onError ? e8 = ef(e, r) : (c && e.push("<!-- -->"), e8 = e5 ? null : ef(o.hoistableChunks, r));
                                return e8;
                            case "script":
                                var ta = 1 & u.tagScope,
                                    ts = r.async;
                                if ("string" != typeof r.src || !r.src || !ts || "function" == typeof ts || "symbol" == typeof ts || r.onLoad || r.onError || 4 === u.insertionMode || ta || null != r.itemProp) var to = ey(e, r);
                                else {
                                    var ti = r.src;
                                    if ("module" === r.type) var tl = a.moduleScriptResources,
                                        tu = o.preloads.moduleScripts;
                                    else tl = a.scriptResources, tu = o.preloads.scripts;
                                    var tc = tl.hasOwnProperty(ti) ? tl[ti] : void 0;
                                    if (null !== tc) {
                                        tl[ti] = null;
                                        var td = r;
                                        if (tc) {
                                            2 === tc.length && eW(td = _({}, r), tc);
                                            var tf = tu.get(ti);
                                            tf && (tf.length = 0)
                                        }
                                        var th = [];
                                        o.scripts.add(th), ey(th, td)
                                    }
                                    c && e.push("<!-- -->"), to = null
                                }
                                return to;
                            case "style":
                                var tp = 1 & u.tagScope,
                                    tm = r.precedence,
                                    tg = r.href,
                                    ty = r.nonce;
                                if (4 === u.insertionMode || tp || null != r.itemProp || "string" != typeof tm || "string" != typeof tg || "" === tg) {
                                    e.push(ex("style"));
                                    var tb, tv = null,
                                        tk = null;
                                    for (tb in r)
                                        if (E.call(r, tb)) {
                                            var tS = r[tb];
                                            if (null != tS) switch (tb) {
                                                case "children":
                                                    tv = tS;
                                                    break;
                                                case "dangerouslySetInnerHTML":
                                                    tk = tS;
                                                    break;
                                                default:
                                                    eu(e, tb, tS)
                                            }
                                        }
                                    e.push(">");
                                    var tx = Array.isArray(tv) ? 2 > tv.length ? tv[0] : null : tv;
                                    "function" != typeof tx && "symbol" != typeof tx && null != tx && e.push(("" + tx).replace(eh, ep)), ec(e, tk, tv), e.push(eP("style"));
                                    var tw = null
                                } else {
                                    var tP = o.styles.get(tm);
                                    if (null !== (a.styleResources.hasOwnProperty(tg) ? a.styleResources[tg] : void 0)) {
                                        a.styleResources[tg] = null, tP || (tP = {
                                            precedence: N(tm),
                                            rules: [],
                                            hrefs: [],
                                            sheets: new Map
                                        }, o.styles.set(tm, tP));
                                        var tC = o.nonce.style;
                                        if (!tC || tC === ty) {
                                            tP.hrefs.push(N(tg));
                                            var tT, t_ = tP.rules,
                                                tE = null,
                                                tR = null;
                                            for (tT in r)
                                                if (E.call(r, tT)) {
                                                    var tI = r[tT];
                                                    if (null != tI) switch (tT) {
                                                        case "children":
                                                            tE = tI;
                                                            break;
                                                        case "dangerouslySetInnerHTML":
                                                            tR = tI
                                                    }
                                                }
                                            var tO = Array.isArray(tE) ? 2 > tE.length ? tE[0] : null : tE;
                                            "function" != typeof tO && "symbol" != typeof tO && null != tO && t_.push(("" + tO).replace(eh, ep)), ec(t_, tR, tE)
                                        }
                                    }
                                    tP && l && l.styles.add(tP), c && e.push("<!-- -->"), tw = void 0
                                }
                                return tw;
                            case "meta":
                                var tM = 1 & u.tagScope,
                                    tF = 4 & u.tagScope;
                                if (4 === u.insertionMode || tM || null != r.itemProp) var tA = em(e, r, "meta");
                                else c && e.push("<!-- -->"), tA = tF ? null : "string" == typeof r.charSet ? em(o.charsetChunks, r, "meta") : "viewport" === r.name ? em(o.viewportChunks, r, "meta") : em(o.hoistableChunks, r, "meta");
                                return tA;
                            case "listing":
                            case "pre":
                                e.push(ex(t));
                                var tj, tN = null,
                                    t$ = null;
                                for (tj in r)
                                    if (E.call(r, tj)) {
                                        var tD = r[tj];
                                        if (null != tD) switch (tj) {
                                            case "children":
                                                tN = tD;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                t$ = tD;
                                                break;
                                            default:
                                                eu(e, tj, tD)
                                        }
                                    }
                                if (e.push(">"), null != t$) {
                                    if (null != tN) throw Error(s(60));
                                    if ("object" != typeof t$ || !("__html" in t$)) throw Error(s(61));
                                    var tL = t$.__html;
                                    null != tL && ("string" == typeof tL && 0 < tL.length && "\n" === tL[0] ? e.push("\n", tL) : e.push("" + tL))
                                }
                                return "string" == typeof tN && "\n" === tN[0] && e.push("\n"), tN;
                            case "img":
                                var tB = 3 & u.tagScope,
                                    tz = r.src,
                                    tV = r.srcSet;
                                if (!("lazy" === r.loading || !tz && !tV || "string" != typeof tz && null != tz || "string" != typeof tV && null != tV || "low" === r.fetchPriority || tB) && ("string" != typeof tz || ":" !== tz[4] || "d" !== tz[0] && "D" !== tz[0] || "a" !== tz[1] && "A" !== tz[1] || "t" !== tz[2] && "T" !== tz[2] || "a" !== tz[3] && "A" !== tz[3]) && ("string" != typeof tV || ":" !== tV[4] || "d" !== tV[0] && "D" !== tV[0] || "a" !== tV[1] && "A" !== tV[1] || "t" !== tV[2] && "T" !== tV[2] || "a" !== tV[3] && "A" !== tV[3])) {
                                    null !== l && 64 & u.tagScope && (l.suspenseyImages = !0);
                                    var tq = "string" == typeof r.sizes ? r.sizes : void 0,
                                        tW = tV ? tV + "\n" + (tq || "") : tz,
                                        tH = o.preloads.images,
                                        tU = tH.get(tW);
                                    if (tU)("high" === r.fetchPriority || 10 > o.highImagePreloads.size) && (tH.delete(tW), o.highImagePreloads.add(tU));
                                    else if (!a.imageResources.hasOwnProperty(tW)) {
                                        a.imageResources[tW] = H;
                                        var tG, tQ = r.crossOrigin,
                                            tK = "string" == typeof tQ ? "use-credentials" === tQ ? tQ : "" : void 0,
                                            tX = o.headers;
                                        tX && 0 < tX.remainingCapacity && "string" != typeof r.srcSet && ("high" === r.fetchPriority || 500 > tX.highImagePreloads.length) && (tG = eH(tz, "image", {
                                            imageSrcSet: r.srcSet,
                                            imageSizes: r.sizes,
                                            crossOrigin: tK,
                                            integrity: r.integrity,
                                            nonce: r.nonce,
                                            type: r.type,
                                            fetchPriority: r.fetchPriority,
                                            referrerPolicy: r.refererPolicy
                                        }), 0 <= (tX.remainingCapacity -= tG.length + 2)) ? (o.resets.image[tW] = H, tX.highImagePreloads && (tX.highImagePreloads += ", "), tX.highImagePreloads += tG) : (ef(tU = [], {
                                            rel: "preload",
                                            as: "image",
                                            href: tV ? void 0 : tz,
                                            imageSrcSet: tV,
                                            imageSizes: tq,
                                            crossOrigin: tK,
                                            integrity: r.integrity,
                                            type: r.type,
                                            fetchPriority: r.fetchPriority,
                                            referrerPolicy: r.referrerPolicy
                                        }), "high" === r.fetchPriority || 10 > o.highImagePreloads.size ? o.highImagePreloads.add(tU) : (o.bulkPreloads.add(tU), tH.set(tW, tU)))
                                    }
                                }
                                return em(e, r, "img");
                            case "base":
                            case "area":
                            case "br":
                            case "col":
                            case "embed":
                            case "hr":
                            case "keygen":
                            case "param":
                            case "source":
                            case "track":
                            case "wbr":
                                return em(e, r, t);
                            case "head":
                                if (2 > u.insertionMode) {
                                    var tY = i || o.preamble;
                                    if (tY.headChunks) throw Error(s(545, "`<head>`"));
                                    null !== i && e.push("<!--head-->"), tY.headChunks = [];
                                    var tZ = eb(tY.headChunks, r, "head")
                                } else tZ = ev(e, r, "head");
                                return tZ;
                            case "body":
                                if (2 > u.insertionMode) {
                                    var tJ = i || o.preamble;
                                    if (tJ.bodyChunks) throw Error(s(545, "`<body>`"));
                                    null !== i && e.push("<!--body-->"), tJ.bodyChunks = [];
                                    var t0 = eb(tJ.bodyChunks, r, "body")
                                } else t0 = ev(e, r, "body");
                                return t0;
                            case "html":
                                if (0 === u.insertionMode) {
                                    var t1 = i || o.preamble;
                                    if (t1.htmlChunks) throw Error(s(545, "`<html>`"));
                                    null !== i && e.push("<!--html-->"), t1.htmlChunks = [""];
                                    var t2 = eb(t1.htmlChunks, r, "html")
                                } else t2 = ev(e, r, "html");
                                return t2;
                            default:
                                if (-1 !== t.indexOf("-")) {
                                    e.push(ex(t));
                                    var t3, t5 = null,
                                        t4 = null;
                                    for (t3 in r)
                                        if (E.call(r, t3)) {
                                            var t9 = r[t3];
                                            if (null != t9) {
                                                var t6 = t3;
                                                switch (t3) {
                                                    case "children":
                                                        t5 = t9;
                                                        break;
                                                    case "dangerouslySetInnerHTML":
                                                        t4 = t9;
                                                        break;
                                                    case "style":
                                                        et(e, t9);
                                                        break;
                                                    case "suppressContentEditableWarning":
                                                    case "suppressHydrationWarning":
                                                    case "ref":
                                                        break;
                                                    case "className":
                                                        t6 = "class";
                                                    default:
                                                        if (M(t3) && "function" != typeof t9 && "symbol" != typeof t9 && !1 !== t9) {
                                                            if (!0 === t9) t9 = "";
                                                            else if ("object" == typeof t9) continue;
                                                            e.push(" ", t6, '="', N(t9), '"')
                                                        }
                                                }
                                            }
                                        }
                                    return e.push(">"), ec(e, t4, t5), t5
                                }
                        }
                        return ev(e, r, t)
                    }(S.chunks, a, o, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, S.lastPushedText), S.lastPushedText = !1, T = t.formatContext, i = t.keyPath, t.keyPath = r, 3 === (t.formatContext = X(T, a, o)).insertionMode) {
                    r = t1(e, 0, null, t.formatContext, !1, !1), S.preambleChildren.push(r), t.blockedSegment = r;
                    try {
                        r.status = 6, rp(e, t, I, -1), e0(r.chunks, e.renderState, r.lastPushedText, r.textEmbedded), r.status = 1
                    } finally {
                        t.blockedSegment = S
                    }
                } else rp(e, t, I, -1);
                t.formatContext = T, t.keyPath = i;
                e: {
                    switch (t = S.chunks, e = e.resumableState, a) {
                        case "title":
                        case "style":
                        case "script":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "img":
                        case "input":
                        case "keygen":
                        case "link":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                            break e;
                        case "body":
                            if (1 >= T.insertionMode) {
                                e.hasBody = !0;
                                break e
                            }
                            break;
                        case "html":
                            if (0 === T.insertionMode) {
                                e.hasHtml = !0;
                                break e
                            }
                            break;
                        case "head":
                            if (1 >= T.insertionMode) break e
                    }
                    t.push(eP(a))
                }
                S.lastPushedText = !1
            }
        else {
            switch (a) {
                case k:
                case u:
                case c:
                case l:
                    a = t.keyPath, t.keyPath = r, ro(e, t, o.children, -1), t.keyPath = a;
                    return;
                case v:
                    null === (a = t.blockedSegment) ? "hidden" !== o.mode && (a = t.keyPath, t.keyPath = r, rp(e, t, o.children, -1), t.keyPath = a) : "hidden" !== o.mode && (e.renderState.generateStaticMarkup || a.chunks.push("<!--&-->"), a.lastPushedText = !1, S = t.keyPath, t.keyPath = r, rp(e, t, o.children, -1), t.keyPath = S, e.renderState.generateStaticMarkup || a.chunks.push("<!--/&-->"), a.lastPushedText = !1);
                    return;
                case m:
                    e: {
                        if (a = o.children, "forwards" === (o = o.revealOrder) || "backwards" === o || "unstable_legacy-backwards" === o) {
                            if (C(a)) {
                                rt(e, t, r, a, o);
                                break e
                            }
                            if ((S = P(a)) && (S = S.call(a))) {
                                if (!(T = S.next()).done) {
                                    do T = S.next(); while (!T.done) rt(e, t, r, a, o)
                                }
                                break e
                            }
                        }
                        "together" === o ? (o = t.keyPath, S = t.row, (T = t.row = re(null)).boundaries = [], T.together = !0, t.keyPath = r, ro(e, t, a, -1), 0 == --T.pendingTasks && t6(e, T), t.keyPath = o, t.row = S, null !== S && 0 < T.pendingTasks && (S.pendingTasks++, T.next = S)) : (o = t.keyPath, t.keyPath = r, ro(e, t, a, -1), t.keyPath = o)
                    }
                    return;
                case x:
                case b:
                    throw Error(s(343));
                case p:
                    e: if (null !== t.replay) {
                        a = t.keyPath, S = t.formatContext, T = t.row, t.keyPath = r, t.formatContext = J(e.resumableState, S), t.row = null, r = o.children;
                        try {
                            rp(e, t, r, -1)
                        } finally {
                            t.keyPath = a, t.formatContext = S, t.row = T
                        }
                    } else {
                        a = t.keyPath, i = t.formatContext;
                        var O = t.row,
                            F = t.blockedBoundary;
                        R = t.blockedPreamble;
                        var A = t.hoistableState;
                        w = t.blockedSegment;
                        var j = o.fallback;
                        o = o.children;
                        var $ = new Set,
                            D = tZ(e, t.row, $, null, null);
                        null !== e.trackedPostpones && (D.trackedContentKeyPath = r);
                        var L = t1(e, w.chunks.length, D, t.formatContext, !1, !1);
                        w.children.push(L), w.lastPushedText = !1;
                        var z = t1(e, 0, null, t.formatContext, !1, !1);
                        if (z.parentFlushed = !0, null !== e.trackedPostpones) {
                            S = t.componentStack, I = [(T = [r[0], "Suspense Fallback", r[2]])[1], T[2],
                                [], null
                            ], e.trackedPostpones.workingMap.set(T, I), D.trackedFallbackNode = I, t.blockedSegment = L, t.blockedPreamble = D.fallbackPreamble, t.keyPath = T, t.formatContext = Z(e.resumableState, i), t.componentStack = t3(S), L.status = 6;
                            try {
                                rp(e, t, j, -1), e0(L.chunks, e.renderState, L.lastPushedText, L.textEmbedded), L.status = 1
                            } catch (t) {
                                throw L.status = 12 === e.status ? 3 : 4, t
                            } finally {
                                t.blockedSegment = w, t.blockedPreamble = R, t.keyPath = a, t.formatContext = i
                            }
                            t2(t = tJ(e, null, o, -1, D, z, D.contentPreamble, D.contentState, t.abortSet, r, J(e.resumableState, t.formatContext), t.context, t.treeContext, null, S)), e.pingedTasks.push(t)
                        } else {
                            t.blockedBoundary = D, t.blockedPreamble = D.contentPreamble, t.hoistableState = D.contentState, t.blockedSegment = z, t.keyPath = r, t.formatContext = J(e.resumableState, i), t.row = null, z.status = 6;
                            try {
                                if (rp(e, t, o, -1), e0(z.chunks, e.renderState, z.lastPushedText, z.textEmbedded), z.status = 1, rk(D, z), 0 === D.pendingTasks && 0 === D.status) {
                                    if (D.status = 1, !tG(e, D)) {
                                        null !== O && 0 == --O.pendingTasks && t6(e, O), 0 === e.pendingRootTasks && t.blockedPreamble && rC(e);
                                        break e
                                    }
                                } else null !== O && O.together && t7(e, O)
                            } catch (r) {
                                D.status = 4, 12 === e.status ? (z.status = 3, S = e.fatalError) : (z.status = 4, S = r), D.errorDigest = I = t4(e, S, T = t5(t.componentStack)), rd(e, D)
                            } finally {
                                t.blockedBoundary = F, t.blockedPreamble = R, t.hoistableState = A, t.blockedSegment = w, t.keyPath = a, t.formatContext = i, t.row = O
                            }
                            t2(t = tJ(e, null, j, -1, F, L, D.fallbackPreamble, D.fallbackState, $, [r[0], "Suspense Fallback", r[2]], Z(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, t3(t.componentStack))), e.pingedTasks.push(t)
                        }
                    }
                    return
            }
            if ("object" == typeof a && null !== a) switch (a.$$typeof) {
                case h:
                    if ("ref" in o)
                        for (j in S = {}, o) "ref" !== j && (S[j] = o[j]);
                    else S = o;
                    a = rr(e, t, r, a.render, S, i), rn(e, t, r, a, 0 !== ty, tb, tv);
                    return;
                case g:
                    ra(e, t, r, a.type, o, i);
                    return;
                case f:
                    if (T = o.children, S = t.keyPath, o = o.value, I = a._currentValue2, a._currentValue2 = o, e4 = a = {
                            parent: i = e4,
                            depth: null === i ? 0 : i.depth + 1,
                            context: a,
                            parentValue: I,
                            value: o
                        }, t.context = a, t.keyPath = r, ro(e, t, T, -1), null === (e = e4)) throw Error(s(403));
                    e.context._currentValue2 = e.parentValue, e = e4 = e.parent, t.context = e, t.keyPath = S;
                    return;
                case d:
                    a = (o = o.children)(a._context._currentValue2), o = t.keyPath, t.keyPath = r, ro(e, t, a, -1), t.keyPath = o;
                    return;
                case y:
                    if (a = (S = a._init)(a._payload), 12 === e.status) throw null;
                    ra(e, t, r, a, o, i);
                    return
            }
            throw Error(s(130, null == a ? a : typeof a, ""))
        }
    }

    function rs(e, t, r, n, a) {
        var s = t.replay,
            o = t.blockedBoundary,
            i = t1(e, 0, null, t.formatContext, !1, !1);
        i.id = r, i.parentFlushed = !0;
        try {
            t.replay = null, t.blockedSegment = i, rp(e, t, n, a), i.status = 1, null === o ? e.completedRootSegment = i : (rk(o, i), o.parentFlushed && e.partialBoundaries.push(o))
        } finally {
            t.replay = s, t.blockedSegment = null
        }
    }

    function ro(e, t, r, n) {
        null !== t.replay && "number" == typeof t.replay.slots ? rs(e, t, t.replay.slots, r, n) : (t.node = r, t.childIndex = n, r = t.componentStack, t2(t), ri(e, t), t.componentStack = r)
    }

    function ri(e, t) {
        var r = t.node,
            n = t.childIndex;
        if (null !== r) {
            if ("object" == typeof r) {
                switch (r.$$typeof) {
                    case o:
                        var a = r.type,
                            l = r.key,
                            u = r.props,
                            c = void 0 !== (r = u.ref) ? r : null,
                            d = e3(a),
                            h = null == l ? -1 === n ? 0 : n : l;
                        if (l = [t.keyPath, d, h], null !== t.replay) e: {
                            var m = t.replay;
                            for (r = 0, n = m.nodes; r < n.length; r++) {
                                var g = n[r];
                                if (h === g[1]) {
                                    if (4 === g.length) {
                                        if (null !== d && d !== g[0]) throw Error(s(490, g[0], d));
                                        var b = g[2];
                                        d = g[3], h = t.node, t.replay = {
                                            nodes: b,
                                            slots: d,
                                            pendingTasks: 1
                                        };
                                        try {
                                            if (ra(e, t, l, a, u, c), 1 === t.replay.pendingTasks && 0 < t.replay.nodes.length) throw Error(s(488));
                                            t.replay.pendingTasks--
                                        } catch (s) {
                                            if ("object" == typeof s && null !== s && (s === ts || "function" == typeof s.then)) throw t.node === h ? t.replay = m : n.splice(r, 1), s;
                                            t.replay.pendingTasks--, u = t5(t.componentStack), l = e, e = t.blockedBoundary, u = t4(l, a = s, u), rg(l, e, b, d, a, u)
                                        }
                                        t.replay = m
                                    } else {
                                        if (a !== p) throw Error(s(490, "Suspense", e3(a) || "Unknown"));
                                        t: {
                                            m = void 0,
                                            a = g[5],
                                            c = g[2],
                                            d = g[3],
                                            h = null === g[4] ? [] : g[4][2],
                                            g = null === g[4] ? null : g[4][3];
                                            var v = t.keyPath,
                                                k = t.formatContext,
                                                S = t.row,
                                                x = t.replay,
                                                w = t.blockedBoundary,
                                                T = t.hoistableState,
                                                _ = u.children,
                                                E = u.fallback,
                                                R = new Set;
                                            (u = tZ(e, t.row, R, null, null)).parentFlushed = !0,
                                            u.rootSegmentID = a,
                                            t.blockedBoundary = u,
                                            t.hoistableState = u.contentState,
                                            t.keyPath = l,
                                            t.formatContext = J(e.resumableState, k),
                                            t.row = null,
                                            t.replay = {
                                                nodes: c,
                                                slots: d,
                                                pendingTasks: 1
                                            };
                                            try {
                                                if (rp(e, t, _, -1), 1 === t.replay.pendingTasks && 0 < t.replay.nodes.length) throw Error(s(488));
                                                if (t.replay.pendingTasks--, 0 === u.pendingTasks && 0 === u.status) {
                                                    u.status = 1, e.completedBoundaries.push(u);
                                                    break t
                                                }
                                            } catch (r) {
                                                u.status = 4, m = t4(e, r, b = t5(t.componentStack)), u.errorDigest = m, t.replay.pendingTasks--, e.clientRenderedBoundaries.push(u)
                                            } finally {
                                                t.blockedBoundary = w, t.hoistableState = T, t.replay = x, t.keyPath = v, t.formatContext = k, t.row = S
                                            }
                                            t2(b = t0(e, null, {
                                                nodes: h,
                                                slots: g,
                                                pendingTasks: 0
                                            }, E, -1, w, u.fallbackState, R, [l[0], "Suspense Fallback", l[2]], Z(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, t3(t.componentStack))),
                                            e.pingedTasks.push(b)
                                        }
                                    }
                                    n.splice(r, 1);
                                    break e
                                }
                            }
                        }
                        else ra(e, t, l, a, u, c);
                        return;
                    case i:
                        throw Error(s(257));
                    case y:
                        if (r = (b = r._init)(r._payload), 12 === e.status) throw null;
                        ro(e, t, r, n);
                        return
                }
                if (C(r)) return void rl(e, t, r, n);
                if ((b = P(r)) && (b = b.call(r))) {
                    if (!(r = b.next()).done) {
                        u = [];
                        do u.push(r.value), r = b.next(); while (!r.done) rl(e, t, u, n)
                    }
                    return
                }
                if ("function" == typeof r.then) return t.thenableState = null, ro(e, t, t$(r), n);
                if (r.$$typeof === f) return ro(e, t, r._currentValue2, n);
                throw Error(s(31, "[object Object]" === (n = Object.prototype.toString.call(r)) ? "object with keys {" + Object.keys(r).join(", ") + "}" : n))
            }
            "string" == typeof r ? null !== (n = t.blockedSegment) && (n.lastPushedText = eJ(n.chunks, r, e.renderState, n.lastPushedText)) : ("number" == typeof r || "bigint" == typeof r) && null !== (n = t.blockedSegment) && (n.lastPushedText = eJ(n.chunks, "" + r, e.renderState, n.lastPushedText))
        }
    }

    function rl(e, t, r, n) {
        var a = t.keyPath;
        if (-1 !== n && (t.keyPath = [t.keyPath, "Fragment", n], null !== t.replay)) {
            for (var o = t.replay, i = o.nodes, l = 0; l < i.length; l++) {
                var u = i[l];
                if (u[1] === n) {
                    t.replay = {
                        nodes: n = u[2],
                        slots: u = u[3],
                        pendingTasks: 1
                    };
                    try {
                        if (rl(e, t, r, -1), 1 === t.replay.pendingTasks && 0 < t.replay.nodes.length) throw Error(s(488));
                        t.replay.pendingTasks--
                    } catch (a) {
                        if ("object" == typeof a && null !== a && (a === ts || "function" == typeof a.then)) throw a;
                        t.replay.pendingTasks--, r = t5(t.componentStack);
                        var c = t.blockedBoundary;
                        r = t4(e, a, r), rg(e, c, n, u, a, r)
                    }
                    t.replay = o, i.splice(l, 1);
                    break
                }
            }
            t.keyPath = a;
            return
        }
        if (o = t.treeContext, i = r.length, null !== t.replay && null !== (l = t.replay.slots) && "object" == typeof l) {
            for (n = 0; n < i; n++) u = r[n], t.treeContext = te(o, i, n), "number" == typeof(c = l[n]) ? (rs(e, t, c, u, n), delete l[n]) : rp(e, t, u, n);
            t.treeContext = o, t.keyPath = a;
            return
        }
        for (l = 0; l < i; l++) n = r[l], t.treeContext = te(o, i, l), rp(e, t, n, l);
        t.treeContext = o, t.keyPath = a
    }

    function ru(e, t, r) {
        if (r.status = 5, r.rootSegmentID = e.nextSegmentId++, null === (e = r.trackedContentKeyPath)) throw Error(s(486));
        var n = r.trackedFallbackNode,
            a = t.workingMap.get(e);
        return void 0 === a ? (r = [e[1], e[2],
            [], null, n, r.rootSegmentID
        ], t.workingMap.set(e, r), rj(r, e[0], t), r) : (a[4] = n, a[5] = r.rootSegmentID, a)
    }

    function rc(e, t, r, n) {
        n.status = 5;
        var a = r.keyPath,
            o = r.blockedBoundary;
        if (null === o) n.id = e.nextSegmentId++, t.rootSlots = n.id, null !== e.completedRootSegment && (e.completedRootSegment.status = 5);
        else {
            if (null !== o && 0 === o.status) {
                var i = ru(e, t, o);
                if (o.trackedContentKeyPath === a && -1 === r.childIndex) {
                    -1 === n.id && (n.id = n.parentFlushed ? o.rootSegmentID : e.nextSegmentId++), i[3] = n.id;
                    return
                }
            }
            if (-1 === n.id && (n.id = n.parentFlushed && null !== o ? o.rootSegmentID : e.nextSegmentId++), -1 === r.childIndex) null === a ? t.rootSlots = n.id : void 0 === (r = t.workingMap.get(a)) ? rj(r = [a[1], a[2],
                [], n.id
            ], a[0], t) : r[3] = n.id;
            else {
                if (null === a) {
                    if (null === (e = t.rootSlots)) e = t.rootSlots = {};
                    else if ("number" == typeof e) throw Error(s(491))
                } else if (void 0 === (i = (o = t.workingMap).get(a))) e = {}, i = [a[1], a[2],
                    [], e
                ], o.set(a, i), rj(i, a[0], t);
                else if (null === (e = i[3])) e = i[3] = {};
                else if ("number" == typeof e) throw Error(s(491));
                e[r.childIndex] = n.id
            }
        }
    }

    function rd(e, t) {
        null !== (e = e.trackedPostpones) && null !== (t = t.trackedContentKeyPath) && void 0 !== (t = e.workingMap.get(t)) && (t.length = 4, t[2] = [], t[3] = null)
    }

    function rf(e, t, r) {
        return t0(e, r, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack)
    }

    function rh(e, t, r) {
        var n = t.blockedSegment,
            a = t1(e, n.chunks.length, null, t.formatContext, n.lastPushedText, !0);
        return n.children.push(a), n.lastPushedText = !1, tJ(e, r, t.node, t.childIndex, t.blockedBoundary, a, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack)
    }

    function rp(e, t, r, n) {
        var a = t.formatContext,
            s = t.context,
            o = t.keyPath,
            i = t.treeContext,
            l = t.componentStack,
            u = t.blockedSegment;
        if (null === u) {
            u = t.replay;
            try {
                return ro(e, t, r, n)
            } catch (c) {
                if (tE(), r = c === ts ? ti() : c, 12 !== e.status && "object" == typeof r && null !== r) {
                    if ("function" == typeof r.then) {
                        e = rf(e, t, n = c === ts ? t_() : null).ping, r.then(e, e), t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, t.componentStack = l, t.replay = u, e6(s);
                        return
                    }
                    if ("Maximum call stack size exceeded" === r.message) {
                        r = rf(e, t, r = c === ts ? t_() : null), e.pingedTasks.push(r), t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, t.componentStack = l, t.replay = u, e6(s);
                        return
                    }
                }
            }
        } else {
            var c = u.children.length,
                d = u.chunks.length;
            try {
                return ro(e, t, r, n)
            } catch (n) {
                if (tE(), u.children.length = c, u.chunks.length = d, r = n === ts ? ti() : n, 12 !== e.status && "object" == typeof r && null !== r) {
                    if ("function" == typeof r.then) {
                        u = r, e = rh(e, t, r = n === ts ? t_() : null).ping, u.then(e, e), t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, t.componentStack = l, e6(s);
                        return
                    }
                    if ("Maximum call stack size exceeded" === r.message) {
                        u = rh(e, t, u = n === ts ? t_() : null), e.pingedTasks.push(u), t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, t.componentStack = l, e6(s);
                        return
                    }
                }
            }
        }
        throw t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, e6(s), r
    }

    function rm(e) {
        var t = e.blockedBoundary,
            r = e.blockedSegment;
        null !== r && (r.status = 3, rS(this, t, e.row, r))
    }

    function rg(e, t, r, n, a, o) {
        for (var i = 0; i < r.length; i++) {
            var l = r[i];
            if (4 === l.length) rg(e, t, l[2], l[3], a, o);
            else {
                l = l[5];
                var u = tZ(e, null, new Set, null, null);
                u.parentFlushed = !0, u.rootSegmentID = l, u.status = 4, u.errorDigest = o, u.parentFlushed && e.clientRenderedBoundaries.push(u)
            }
        }
        if (r.length = 0, null !== n) {
            if (null === t) throw Error(s(487));
            if (4 !== t.status && (t.status = 4, t.errorDigest = o, t.parentFlushed && e.clientRenderedBoundaries.push(t)), "object" == typeof n)
                for (var c in n) delete n[c]
        }
    }

    function ry(e, t) {
        try {
            var r = e.renderState,
                n = r.onHeaders;
            if (n) {
                var a = r.headers;
                if (a) {
                    r.headers = null;
                    var s = a.preconnects;
                    if (a.fontPreloads && (s && (s += ", "), s += a.fontPreloads), a.highImagePreloads && (s && (s += ", "), s += a.highImagePreloads), !t) {
                        var o = r.styles.values(),
                            i = o.next();
                        t: for (; 0 < a.remainingCapacity && !i.done; i = o.next())
                            for (var l = i.value.sheets.values(), u = l.next(); 0 < a.remainingCapacity && !u.done; u = l.next()) {
                                var c = u.value,
                                    d = c.props,
                                    f = d.href,
                                    h = c.props,
                                    p = eH(h.href, "style", {
                                        crossOrigin: h.crossOrigin,
                                        integrity: h.integrity,
                                        nonce: h.nonce,
                                        type: h.type,
                                        fetchPriority: h.fetchPriority,
                                        referrerPolicy: h.referrerPolicy,
                                        media: h.media
                                    });
                                if (0 <= (a.remainingCapacity -= p.length + 2)) r.resets.style[f] = H, s && (s += ", "), s += p, r.resets.style[f] = "string" == typeof d.crossOrigin || "string" == typeof d.integrity ? [d.crossOrigin, d.integrity] : H;
                                else break t
                            }
                    }
                    n(s ? {
                        Link: s
                    } : {})
                }
            }
        } catch (t) {
            t4(e, t, {})
        }
    }

    function rb(e) {
        null === e.trackedPostpones && ry(e, !0), null === e.trackedPostpones && rC(e), e.onShellError = ta, (e = e.onShellReady)()
    }

    function rv(e) {
        ry(e, null === e.trackedPostpones || null === e.completedRootSegment || 5 !== e.completedRootSegment.status), rC(e), (e = e.onAllReady)()
    }

    function rk(e, t) {
        if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary && -1 === t.children[0].id) {
            var r = t.children[0];
            r.id = t.id, r.parentFlushed = !0, 1 !== r.status && 3 !== r.status && 4 !== r.status || rk(e, r)
        } else e.completedSegments.push(t)
    }

    function rS(e, t, r, n) {
        if (null !== r && (0 == --r.pendingTasks ? t6(e, r) : r.together && t7(e, r)), e.allPendingTasks--, null === t) {
            if (null !== n && n.parentFlushed) {
                if (null !== e.completedRootSegment) throw Error(s(389));
                e.completedRootSegment = n
            }
            e.pendingRootTasks--, 0 === e.pendingRootTasks && rb(e)
        } else if (t.pendingTasks--, 4 !== t.status)
            if (0 === t.pendingTasks) {
                if (0 === t.status && (t.status = 1), null !== n && n.parentFlushed && (1 === n.status || 3 === n.status) && rk(t, n), t.parentFlushed && e.completedBoundaries.push(t), 1 === t.status) null !== (r = t.row) && eZ(r.hoistables, t.contentState), tG(e, t) || (t.fallbackAbortableTasks.forEach(rm, e), t.fallbackAbortableTasks.clear(), null !== r && 0 == --r.pendingTasks && t6(e, r)), 0 === e.pendingRootTasks && null === e.trackedPostpones && null !== t.contentPreamble && rC(e);
                else if (5 === t.status && null !== (t = t.row)) {
                    if (null !== e.trackedPostpones) {
                        r = e.trackedPostpones;
                        var a = t.next;
                        if (null !== a && null !== (n = a.boundaries))
                            for (a.boundaries = null, a = 0; a < n.length; a++) {
                                var o = n[a];
                                ru(e, r, o), rS(e, o, null, null)
                            }
                    }
                    0 == --t.pendingTasks && t6(e, t)
                }
            } else null === n || !n.parentFlushed || 1 !== n.status && 3 !== n.status || (rk(t, n), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t)), null !== (t = t.row) && t.together && t7(e, t);
        0 === e.allPendingTasks && rv(e)
    }

    function rx(e) {
        if (14 !== e.status && 13 !== e.status) {
            var t = e4,
                r = z.H;
            z.H = tz;
            var n = z.A;
            z.A = tq;
            var a = tX;
            tX = e;
            var o = tV;
            tV = e.resumableState;
            try {
                var i, l = e.pingedTasks;
                for (i = 0; i < l.length; i++) {
                    var u = l[i],
                        c = e,
                        d = u.blockedSegment;
                    if (null === d) {
                        var f = c;
                        if (0 !== u.replay.pendingTasks) {
                            e6(u.context);
                            try {
                                if ("number" == typeof u.replay.slots ? rs(f, u, u.replay.slots, u.node, u.childIndex) : ri(f, u), 1 === u.replay.pendingTasks && 0 < u.replay.nodes.length) throw Error(s(488));
                                u.replay.pendingTasks--, u.abortSet.delete(u), rS(f, u.blockedBoundary, u.row, null)
                            } catch (e) {
                                tE();
                                var h = e === ts ? ti() : e;
                                if ("object" == typeof h && null !== h && "function" == typeof h.then) {
                                    var p = u.ping;
                                    h.then(p, p), u.thenableState = e === ts ? t_() : null
                                } else {
                                    u.replay.pendingTasks--, u.abortSet.delete(u);
                                    var m = t5(u.componentStack);
                                    c = void 0;
                                    var g = f,
                                        y = u.blockedBoundary,
                                        b = 12 === f.status ? f.fatalError : h,
                                        v = u.replay.nodes,
                                        k = u.replay.slots;
                                    c = t4(g, b, m), rg(g, y, v, k, b, c), f.pendingRootTasks--, 0 === f.pendingRootTasks && rb(f), f.allPendingTasks--, 0 === f.allPendingTasks && rv(f)
                                }
                            } finally {}
                        }
                    } else if (f = void 0, g = d, 0 === g.status) {
                        g.status = 6, e6(u.context);
                        var S = g.children.length,
                            x = g.chunks.length;
                        try {
                            ri(c, u), e0(g.chunks, c.renderState, g.lastPushedText, g.textEmbedded), u.abortSet.delete(u), g.status = 1, rS(c, u.blockedBoundary, u.row, g)
                        } catch (e) {
                            tE(), g.children.length = S, g.chunks.length = x;
                            var w = e === ts ? ti() : 12 === c.status ? c.fatalError : e;
                            if (12 === c.status && null !== c.trackedPostpones) {
                                var P = c.trackedPostpones,
                                    C = t5(u.componentStack);
                                u.abortSet.delete(u), t4(c, w, C), rc(c, P, u, g), rS(c, u.blockedBoundary, u.row, g)
                            } else if ("object" == typeof w && null !== w && "function" == typeof w.then) {
                                g.status = 0, u.thenableState = e === ts ? t_() : null;
                                var T = u.ping;
                                w.then(T, T)
                            } else {
                                var _ = t5(u.componentStack);
                                u.abortSet.delete(u), g.status = 4;
                                var E = u.blockedBoundary,
                                    R = u.row;
                                if (null !== R && 0 == --R.pendingTasks && t6(c, R), c.allPendingTasks--, f = t4(c, w, _), null === E) t9(c, w);
                                else if (E.pendingTasks--, 4 !== E.status) {
                                    E.status = 4, E.errorDigest = f, rd(c, E);
                                    var I = E.row;
                                    null !== I && 0 == --I.pendingTasks && t6(c, I), E.parentFlushed && c.clientRenderedBoundaries.push(E), 0 === c.pendingRootTasks && null === c.trackedPostpones && null !== E.contentPreamble && rC(c)
                                }
                                0 === c.allPendingTasks && rv(c)
                            }
                        } finally {}
                    }
                }
                l.splice(0, i), null !== e.destination && rF(e, e.destination)
            } catch (t) {
                t4(e, t, {}), t9(e, t)
            } finally {
                tV = o, z.H = r, z.A = n, r === tz && e6(t), tX = a
            }
        }
    }

    function rw(e, t, r) {
        t.preambleChildren.length && r.push(t.preambleChildren);
        for (var n = !1, a = 0; a < t.children.length; a++) n = rP(e, t.children[a], r) || n;
        return n
    }

    function rP(e, t, r) {
        var n = t.boundary;
        if (null === n) return rw(e, t, r);
        var a = n.contentPreamble,
            o = n.fallbackPreamble;
        if (null === a || null === o) return !1;
        switch (n.status) {
            case 1:
                if (eC(e.renderState, a), e.byteSize += n.byteSize, !(t = n.completedSegments[0])) throw Error(s(391));
                return rw(e, t, r);
            case 5:
                if (null !== e.trackedPostpones) return !0;
            case 4:
                if (1 === t.status) return eC(e.renderState, o), rw(e, t, r);
            default:
                return !0
        }
    }

    function rC(e) {
        if (e.completedRootSegment && null === e.completedPreambleSegments) {
            var t = [],
                r = e.byteSize,
                n = rP(e, e.completedRootSegment, t),
                a = e.renderState.preamble;
            !1 === n || a.headChunks && a.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = r
        }
    }

    function rT(e, t, r, n) {
        switch (r.parentFlushed = !0, r.status) {
            case 0:
                r.id = e.nextSegmentId++;
            case 5:
                return n = r.id, r.lastPushedText = !1, r.textEmbedded = !1, e = e.renderState, t.push('<template id="'), t.push(e.placeholderPrefix), e = n.toString(16), t.push(e), t.push('"></template>');
            case 1:
                r.status = 2;
                var a = !0,
                    o = r.chunks,
                    i = 0;
                r = r.children;
                for (var l = 0; l < r.length; l++) {
                    for (a = r[l]; i < a.index; i++) t.push(o[i]);
                    a = rE(e, t, a, n)
                }
                for (; i < o.length - 1; i++) t.push(o[i]);
                return i < o.length && (a = t.push(o[i])), a;
            case 3:
                return !0;
            default:
                throw Error(s(390))
        }
    }
    var r_ = 0;

    function rE(e, t, r, n) {
        var a = r.boundary;
        if (null === a) return rT(e, t, r, n);
        if (a.parentFlushed = !0, 4 === a.status) {
            var o = a.row;
            return null !== o && 0 == --o.pendingTasks && t6(e, o), e.renderState.generateStaticMarkup || (a = a.errorDigest, t.push("<!--$!-->"), t.push("<template"), a && (t.push(' data-dgst="'), a = N(a), t.push(a), t.push('"')), t.push("></template>")), rT(e, t, r, n), e = !!e.renderState.generateStaticMarkup || t.push("<!--/$-->")
        }
        if (1 !== a.status) return 0 === a.status && (a.rootSegmentID = e.nextSegmentId++), 0 < a.completedSegments.length && e.partialBoundaries.push(a), e_(t, e.renderState, a.rootSegmentID), n && eZ(n, a.fallbackState), rT(e, t, r, n), t.push("<!--/$-->");
        if (!rM && tG(e, a) && r_ + a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), e_(t, e.renderState, a.rootSegmentID), rT(e, t, r, n), t.push("<!--/$-->");
        if (r_ += a.byteSize, n && eZ(n, a.contentState), null !== (r = a.row) && tG(e, a) && 0 == --r.pendingTasks && t6(e, r), e.renderState.generateStaticMarkup || t.push("<!--$-->"), 1 !== (r = a.completedSegments).length) throw Error(s(391));
        return rE(e, t, r[0], n), e = !!e.renderState.generateStaticMarkup || t.push("<!--/$-->")
    }

    function rR(e, t, r, n) {
        switch (! function(e, t, r, n) {
            switch (r.insertionMode) {
                case 0:
                case 1:
                case 3:
                case 2:
                    return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
                case 4:
                    return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
                case 5:
                    return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
                case 6:
                    return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
                case 7:
                    return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
                case 8:
                    return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
                case 9:
                    return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = n.toString(16), e.push(t), e.push('">');
                default:
                    throw Error(s(397))
            }
        }(t, e.renderState, r.parentFormatContext, r.id), rE(e, t, r, n), r.parentFormatContext.insertionMode) {
            case 0:
            case 1:
            case 3:
            case 2:
                return t.push("</div>");
            case 4:
                return t.push("</svg>");
            case 5:
                return t.push("</math>");
            case 6:
                return t.push("</table>");
            case 7:
                return t.push("</tbody></table>");
            case 8:
                return t.push("</tr></table>");
            case 9:
                return t.push("</colgroup></table>");
            default:
                throw Error(s(397))
        }
    }

    function rI(e, t, r) {
        r_ = r.byteSize;
        for (var n, a, o = r.completedSegments, i = 0; i < o.length; i++) rO(e, t, r, o[i]);
        o.length = 0, null !== (o = r.row) && tG(e, r) && 0 == --o.pendingTasks && t6(e, o), ej(t, r.contentState, e.renderState), o = e.resumableState, e = e.renderState, i = r.rootSegmentID, r = r.contentState;
        var l = e.stylesToHoist;
        return e.stylesToHoist = !1, t.push(e.startInlineScript), t.push(">"), l ? (0 == (4 & o.instructions) && (o.instructions |= 4, t.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};')), 0 == (2 & o.instructions) && (o.instructions |= 2, t.push('$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};')), 0 == (8 & o.instructions) ? (o.instructions |= 8, t.push('$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("')) : t.push('$RR("')) : (0 == (2 & o.instructions) && (o.instructions |= 2, t.push('$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};')), t.push('$RC("')), o = i.toString(16), t.push(e.boundaryPrefix), t.push(o), t.push('","'), t.push(e.segmentPrefix), t.push(o), l ? (t.push('",'), n = r, t.push("["), a = "[", n.stylesheets.forEach(function(e) {
            if (2 !== e.state)
                if (3 === e.state) t.push(a), e = eI("" + e.props.href), t.push(e), t.push("]"), a = ",[";
                else {
                    t.push(a);
                    var r = e.props["data-precedence"],
                        n = e.props,
                        o = B("" + e.props.href);
                    for (var i in o = eI(o), t.push(o), r = "" + r, t.push(","), r = eI(r), t.push(r), n)
                        if (E.call(n, i) && null != (r = n[i])) switch (i) {
                            case "href":
                            case "rel":
                            case "precedence":
                            case "data-precedence":
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(s(399, "link"));
                            default:
                                ! function(e, t, r) {
                                    var n = t.toLowerCase();
                                    switch (typeof r) {
                                        case "function":
                                        case "symbol":
                                            return
                                    }
                                    switch (t) {
                                        case "innerHTML":
                                        case "dangerouslySetInnerHTML":
                                        case "suppressContentEditableWarning":
                                        case "suppressHydrationWarning":
                                        case "style":
                                        case "ref":
                                            return;
                                        case "className":
                                            n = "class", t = "" + r;
                                            break;
                                        case "hidden":
                                            if (!1 === r) return;
                                            t = "";
                                            break;
                                        case "src":
                                        case "href":
                                            t = "" + (r = B(r));
                                            break;
                                        default:
                                            if (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]) || !M(t)) return;
                                            t = "" + r
                                    }
                                    e.push(","), n = eI(n), e.push(n), e.push(","), n = eI(t), e.push(n)
                                }(t, i, r)
                        }
                    t.push("]"), a = ",[", e.state = 3
                }
        }), t.push("]")) : t.push('"'), r = t.push(")</script>"), eT(t, e) && r
    }

    function rO(e, t, r, n) {
        if (2 === n.status) return !0;
        var a = r.contentState,
            o = n.id;
        if (-1 === o) {
            if (-1 === (n.id = r.rootSegmentID)) throw Error(s(392));
            return rR(e, t, n, a)
        }
        return o === r.rootSegmentID ? rR(e, t, n, a) : (rR(e, t, n, a), r = e.resumableState, e = e.renderState, t.push(e.startInlineScript), t.push(">"), 0 == (1 & r.instructions) ? (r.instructions |= 1, t.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')) : t.push('$RS("'), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push('","'), t.push(e.placeholderPrefix), t.push(o), t = t.push('")</script>'))
    }
    var rM = !1;

    function rF(e, t) {
        try {
            if (!(0 < e.pendingRootTasks)) {
                var r, n = e.completedRootSegment;
                if (null !== n) {
                    if (5 === n.status) return;
                    var a = e.completedPreambleSegments;
                    if (null === a) return;
                    r_ = e.byteSize;
                    var s, o = e.resumableState,
                        i = e.renderState,
                        l = i.preamble,
                        u = l.htmlChunks,
                        c = l.headChunks;
                    if (u) {
                        for (s = 0; s < u.length; s++) t.push(u[s]);
                        if (c)
                            for (s = 0; s < c.length; s++) t.push(c[s]);
                        else {
                            var d = ex("head");
                            t.push(d), t.push(">")
                        }
                    } else if (c)
                        for (s = 0; s < c.length; s++) t.push(c[s]);
                    var f = i.charsetChunks;
                    for (s = 0; s < f.length; s++) t.push(f[s]);
                    f.length = 0, i.preconnects.forEach(eN, t), i.preconnects.clear();
                    var h = i.viewportChunks;
                    for (s = 0; s < h.length; s++) t.push(h[s]);
                    h.length = 0, i.fontPreloads.forEach(eN, t), i.fontPreloads.clear(), i.highImagePreloads.forEach(eN, t), i.highImagePreloads.clear(), U = i, i.styles.forEach(eL, t), U = null;
                    var p = i.importMapChunks;
                    for (s = 0; s < p.length; s++) t.push(p[s]);
                    p.length = 0, i.bootstrapScripts.forEach(eN, t), i.scripts.forEach(eN, t), i.scripts.clear(), i.bulkPreloads.forEach(eN, t), i.bulkPreloads.clear(), o.instructions |= 32;
                    var m = i.hoistableChunks;
                    for (s = 0; s < m.length; s++) t.push(m[s]);
                    for (o = m.length = 0; o < a.length; o++) {
                        var g = a[o];
                        for (i = 0; i < g.length; i++) rE(e, t, g[i], null)
                    }
                    var y = e.renderState.preamble,
                        b = y.headChunks;
                    if (y.htmlChunks || b) {
                        var v = eP("head");
                        t.push(v)
                    }
                    var k = y.bodyChunks;
                    if (k)
                        for (a = 0; a < k.length; a++) t.push(k[a]);
                    rE(e, t, n, null), e.completedRootSegment = null;
                    var S = e.renderState;
                    if (0 !== e.allPendingTasks || 0 !== e.clientRenderedBoundaries.length || 0 !== e.completedBoundaries.length || null !== e.trackedPostpones && (0 !== e.trackedPostpones.rootNodes.length || null !== e.trackedPostpones.rootSlots)) {
                        var x = e.resumableState;
                        if (0 == (64 & x.instructions)) {
                            if (x.instructions |= 64, t.push(S.startInlineScript), 0 == (32 & x.instructions)) {
                                x.instructions |= 32;
                                var w = "_" + x.idPrefix + "R_";
                                t.push(' id="');
                                var P = N(w);
                                t.push(P), t.push('"')
                            }
                            t.push(">"), t.push("requestAnimationFrame(function(){$RT=performance.now()});"), t.push("</script>")
                        }
                    }
                    eT(t, S)
                }
                var C = e.renderState;
                n = 0;
                var T = C.viewportChunks;
                for (n = 0; n < T.length; n++) t.push(T[n]);
                T.length = 0, C.preconnects.forEach(eN, t), C.preconnects.clear(), C.fontPreloads.forEach(eN, t), C.fontPreloads.clear(), C.highImagePreloads.forEach(eN, t), C.highImagePreloads.clear(), C.styles.forEach(ez, t), C.scripts.forEach(eN, t), C.scripts.clear(), C.bulkPreloads.forEach(eN, t), C.bulkPreloads.clear();
                var _ = C.hoistableChunks;
                for (n = 0; n < _.length; n++) t.push(_[n]);
                _.length = 0;
                var E = e.clientRenderedBoundaries;
                for (r = 0; r < E.length; r++) {
                    var R = E[r];
                    C = t;
                    var I = e.resumableState,
                        O = e.renderState,
                        M = R.rootSegmentID,
                        F = R.errorDigest;
                    C.push(O.startInlineScript), C.push(">"), 0 == (4 & I.instructions) ? (I.instructions |= 4, C.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("')) : C.push('$RX("'), C.push(O.boundaryPrefix);
                    var A = M.toString(16);
                    if (C.push(A), C.push('"'), F) {
                        C.push(",");
                        var j, $ = (j = F || "", JSON.stringify(j).replace(eE, function(e) {
                            switch (e) {
                                case "<":
                                    return "\\u003c";
                                case "\u2028":
                                    return "\\u2028";
                                case "\u2029":
                                    return "\\u2029";
                                default:
                                    throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
                            }
                        }));
                        C.push($)
                    }
                    var D = C.push(")</script>");
                    if (!D) {
                        e.destination = null, r++, E.splice(0, r);
                        return
                    }
                }
                E.splice(0, r);
                var L = e.completedBoundaries;
                for (r = 0; r < L.length; r++)
                    if (!rI(e, t, L[r])) {
                        e.destination = null, r++, L.splice(0, r);
                        return
                    }
                L.splice(0, r), rM = !0;
                var B = e.partialBoundaries;
                for (r = 0; r < B.length; r++) {
                    var z = B[r];
                    e: {
                        E = e,
                        R = t,
                        r_ = z.byteSize;
                        var V = z.completedSegments;
                        for (D = 0; D < V.length; D++)
                            if (!rO(E, R, z, V[D])) {
                                D++, V.splice(0, D);
                                var q = !1;
                                break e
                            }
                        V.splice(0, D);
                        var W = z.row;null !== W && W.together && 1 === z.pendingTasks && (1 === W.pendingTasks ? t8(E, W, W.hoistables) : W.pendingTasks--),
                        q = ej(R, z.contentState, E.renderState)
                    }
                    if (!q) {
                        e.destination = null, r++, B.splice(0, r);
                        return
                    }
                }
                B.splice(0, r), rM = !1;
                var H = e.completedBoundaries;
                for (r = 0; r < H.length; r++)
                    if (!rI(e, t, H[r])) {
                        e.destination = null, r++, H.splice(0, r);
                        return
                    }
                H.splice(0, r)
            }
        } finally {
            rM = !1, 0 === e.allPendingTasks && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length && (e.flushScheduled = !1, (r = e.resumableState).hasBody && (B = eP("body"), t.push(B)), r.hasHtml && (r = eP("html"), t.push(r)), e.status = 14, t.push(null), e.destination = null)
        }
    }

    function rA(e) {
        if (!1 === e.flushScheduled && 0 === e.pingedTasks.length && null !== e.destination) {
            e.flushScheduled = !0;
            var t = e.destination;
            t ? rF(e, t) : e.flushScheduled = !1
        }
    }

    function rj(e, t, r) {
        if (null === t) r.rootNodes.push(e);
        else {
            var n = r.workingMap,
                a = n.get(t);
            void 0 === a && (a = [t[1], t[2],
                [], null
            ], n.set(t, a), rj(a, t[0], r)), a[2].push(e)
        }
    }

    function rN() {}

    function r$(e, t, r, n) {
        var a, o, i, l, u, c = !1,
            d = null,
            f = "",
            h = !1;
        t = {
            idPrefix: void 0 === (a = t ? t.identifierPrefix : void 0) ? "" : a,
            nextFormID: 0,
            streamingFormat: 0,
            bootstrapScriptContent: void 0,
            bootstrapScripts: void 0,
            bootstrapModules: void 0,
            instructions: 0,
            hasBody: !1,
            hasHtml: !1,
            unknownResources: {},
            dnsResources: {},
            connectResources: {
                default: {},
                anonymous: {},
                credentials: {}
            },
            imageResources: {},
            styleResources: {},
            scriptResources: {},
            moduleUnknownResources: {},
            moduleScriptResources: {}
        }, o = e, i = t, l = function(e, t) {
            var r = e.idPrefix,
                n = [],
                a = e.bootstrapScriptContent,
                s = e.bootstrapScripts,
                o = e.bootstrapModules;
            void 0 !== a && (n.push("<script"), eV(n, e), n.push(">", ("" + a).replace(G, Q), "</script>")), a = r + "P:";
            var i = r + "S:";
            r += "B:";
            var l = new Set,
                u = new Set,
                c = new Set,
                d = new Map,
                f = new Set,
                h = new Set,
                p = new Set,
                m = {
                    images: new Map,
                    stylesheets: new Map,
                    scripts: new Map,
                    moduleScripts: new Map
                };
            if (void 0 !== s)
                for (var g = 0; g < s.length; g++) {
                    var y, b = s[g],
                        v = void 0,
                        k = void 0,
                        S = {
                            rel: "preload",
                            as: "script",
                            fetchPriority: "low",
                            nonce: void 0
                        };
                    "string" == typeof b ? S.href = y = b : (S.href = y = b.src, S.integrity = k = "string" == typeof b.integrity ? b.integrity : void 0, S.crossOrigin = v = "string" == typeof b || null == b.crossOrigin ? void 0 : "use-credentials" === b.crossOrigin ? "use-credentials" : "");
                    var x = y;
                    (b = e).scriptResources[x] = null, b.moduleScriptResources[x] = null, ef(b = [], S), f.add(b), n.push('<script src="', N(y), '"'), "string" == typeof k && n.push(' integrity="', N(k), '"'), "string" == typeof v && n.push(' crossorigin="', N(v), '"'), eV(n, e), n.push(' async=""></script>')
                }
            if (void 0 !== o)
                for (s = 0; s < o.length; s++) S = o[s], v = y = void 0, k = {
                    rel: "modulepreload",
                    fetchPriority: "low",
                    nonce: void 0
                }, "string" == typeof S ? k.href = g = S : (k.href = g = S.src, k.integrity = v = "string" == typeof S.integrity ? S.integrity : void 0, k.crossOrigin = y = "string" == typeof S || null == S.crossOrigin ? void 0 : "use-credentials" === S.crossOrigin ? "use-credentials" : ""), S = e, b = g, S.scriptResources[b] = null, S.moduleScriptResources[b] = null, ef(S = [], k), f.add(S), n.push('<script type="module" src="', N(g), '"'), "string" == typeof v && n.push(' integrity="', N(v), '"'), "string" == typeof y && n.push(' crossorigin="', N(y), '"'), eV(n, e), n.push(' async=""></script>');
            return {
                placeholderPrefix: a,
                segmentPrefix: i,
                boundaryPrefix: r,
                startInlineScript: "<script",
                startInlineStyle: "<style",
                preamble: {
                    htmlChunks: null,
                    headChunks: null,
                    bodyChunks: null
                },
                externalRuntimeScript: null,
                bootstrapChunks: n,
                importMapChunks: [],
                onHeaders: void 0,
                headers: null,
                resets: {
                    font: {},
                    dns: {},
                    connect: {
                        default: {},
                        anonymous: {},
                        credentials: {}
                    },
                    image: {},
                    style: {}
                },
                charsetChunks: [],
                viewportChunks: [],
                hoistableChunks: [],
                preconnects: l,
                fontPreloads: u,
                highImagePreloads: c,
                styles: d,
                bootstrapScripts: f,
                scripts: h,
                bulkPreloads: p,
                preloads: m,
                nonce: {
                    script: void 0,
                    style: void 0
                },
                stylesToHoist: !1,
                generateStaticMarkup: t
            }
        }(t, r), (l = t1(i = new tK(i, l, u = K(0, null, 0, null), 1 / 0, rN, void 0, function() {
            h = !0
        }, void 0, void 0, void 0, void 0), 0, null, u, !1, !1)).parentFlushed = !0, t2(o = tJ(i, null, o, -1, null, l, null, null, i.abortableTasks, null, u, null, e7, null, null)), i.pingedTasks.push(o), (e = i).flushScheduled = null !== e.destination, rx(e), 10 === e.status && (e.status = 11), null === e.trackedPostpones && ry(e, 0 === e.pendingRootTasks);
        var p = e;
        (11 === p.status || 10 === p.status) && (p.status = 12);
        try {
            var m = p.abortableTasks;
            if (0 < m.size) {
                var g = void 0 === n ? Error(s(432)) : "object" == typeof n && null !== n && "function" == typeof n.then ? Error(s(530)) : n;
                p.fatalError = g, m.forEach(function(e) {
                    return function e(t, r, n) {
                        var a = t.blockedBoundary,
                            s = t.blockedSegment;
                        if (null !== s) {
                            if (6 === s.status) return;
                            s.status = 3
                        }
                        var o = t5(t.componentStack);
                        if (null === a) {
                            if (13 !== r.status && 14 !== r.status) {
                                if (null === (a = t.replay)) return void(null !== r.trackedPostpones && null !== s ? (a = r.trackedPostpones, t4(r, n, o), rc(r, a, t, s), rS(r, null, t.row, s)) : (t4(r, n, o), t9(r, n)));
                                a.pendingTasks--, 0 === a.pendingTasks && 0 < a.nodes.length && (s = t4(r, n, o), rg(r, null, a.nodes, a.slots, n, s)), r.pendingRootTasks--, 0 === r.pendingRootTasks && rb(r)
                            }
                        } else {
                            var i = r.trackedPostpones;
                            if (4 !== a.status) {
                                if (null !== i && null !== s) return t4(r, n, o), rc(r, i, t, s), a.fallbackAbortableTasks.forEach(function(t) {
                                    return e(t, r, n)
                                }), a.fallbackAbortableTasks.clear(), rS(r, a, t.row, s);
                                a.status = 4, s = t4(r, n, o), a.status = 4, a.errorDigest = s, rd(r, a), a.parentFlushed && r.clientRenderedBoundaries.push(a)
                            }
                            a.pendingTasks--, null !== (s = a.row) && 0 == --s.pendingTasks && t6(r, s), a.fallbackAbortableTasks.forEach(function(t) {
                                return e(t, r, n)
                            }), a.fallbackAbortableTasks.clear()
                        }
                        null !== (t = t.row) && 0 == --t.pendingTasks && t6(r, t), r.allPendingTasks--, 0 === r.allPendingTasks && rv(r)
                    }(e, p, g)
                }), m.clear()
            }
            null !== p.destination && rF(p, p.destination)
        } catch (e) {
            t4(p, e, {}), t9(p, e)
        }
        var y = e,
            b = {
                push: function(e) {
                    return null !== e && (f += e), !0
                },
                destroy: function(e) {
                    c = !0, d = e
                }
            };
        if (13 === y.status) y.status = 14, b.destroy(y.fatalError);
        else if (14 !== y.status && null === y.destination) {
            y.destination = b;
            try {
                rF(y, b)
            } catch (e) {
                t4(y, e, {}), t9(y, e)
            }
        }
        if (c && d !== n) throw d;
        if (!h) throw Error(s(426));
        return f
    }
    r.renderToStaticMarkup = function(e, t) {
        return r$(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')
    }, r.renderToString = function(e, t) {
        return r$(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')
    }, r.version = "19.2.3"
}, 901288, (e, t, r) => {
    "use strict";
    var n = e.r(191788),
        a = e.r(730943);

    function s(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var o = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        l = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        d = Symbol.for("react.consumer"),
        f = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.suspense_list"),
        g = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        b = Symbol.for("react.scope"),
        v = Symbol.for("react.activity"),
        k = Symbol.for("react.legacy_hidden"),
        S = Symbol.for("react.memo_cache_sentinel"),
        x = Symbol.for("react.view_transition"),
        w = Symbol.iterator;

    function P(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = w && e[w] || e["@@iterator"]) ? e : null
    }
    var C = Array.isArray;

    function T(e, t) {
        var r = 3 & e.length,
            n = e.length - r,
            a = t;
        for (t = 0; t < n;) {
            var s = 255 & e.charCodeAt(t) | (255 & e.charCodeAt(++t)) << 8 | (255 & e.charCodeAt(++t)) << 16 | (255 & e.charCodeAt(++t)) << 24;
            ++t, a ^= s = 0x1b873593 * (65535 & (s = (s = 0xcc9e2d51 * (65535 & s) + ((0xcc9e2d51 * (s >>> 16) & 65535) << 16) | 0) << 15 | s >>> 17)) + ((0x1b873593 * (s >>> 16) & 65535) << 16) | 0, a = (65535 & (a = 5 * (65535 & (a = a << 13 | a >>> 19)) + ((5 * (a >>> 16) & 65535) << 16) | 0)) + 27492 + (((a >>> 16) + 58964 & 65535) << 16)
        }
        switch (s = 0, r) {
            case 3:
                s ^= (255 & e.charCodeAt(t + 2)) << 16;
            case 2:
                s ^= (255 & e.charCodeAt(t + 1)) << 8;
            case 1:
                s ^= 255 & e.charCodeAt(t), a ^= 0x1b873593 * (65535 & (s = (s = 0xcc9e2d51 * (65535 & s) + ((0xcc9e2d51 * (s >>> 16) & 65535) << 16) | 0) << 15 | s >>> 17)) + ((0x1b873593 * (s >>> 16) & 65535) << 16)
        }
        return a ^= e.length, a ^= a >>> 16, a = 0x85ebca6b * (65535 & a) + ((0x85ebca6b * (a >>> 16) & 65535) << 16) | 0, a ^= a >>> 13, ((a = 0xc2b2ae35 * (65535 & a) + ((0xc2b2ae35 * (a >>> 16) & 65535) << 16) | 0) ^ a >>> 16) >>> 0
    }
    var _ = new MessageChannel,
        E = [];

    function R(e) {
        E.push(e), _.port2.postMessage(null)
    }

    function I(e) {
        setTimeout(function() {
            throw e
        })
    }
    _.port1.onmessage = function() {
        var e = E.shift();
        e && e()
    };
    var O = Promise,
        M = "function" == typeof queueMicrotask ? queueMicrotask : function(e) {
            O.resolve(null).then(e).catch(I)
        },
        F = null,
        A = 0;

    function j(e, t) {
        if (0 !== t.byteLength)
            if (2048 < t.byteLength) 0 < A && (e.enqueue(new Uint8Array(F.buffer, 0, A)), F = new Uint8Array(2048), A = 0), e.enqueue(t);
            else {
                var r = F.length - A;
                r < t.byteLength && (0 === r ? e.enqueue(F) : (F.set(t.subarray(0, r), A), e.enqueue(F), t = t.subarray(r)), F = new Uint8Array(2048), A = 0), F.set(t, A), A += t.byteLength
            }
    }

    function N(e, t) {
        return j(e, t), !0
    }

    function $(e) {
        F && 0 < A && (e.enqueue(new Uint8Array(F.buffer, 0, A)), F = null, A = 0)
    }
    var D = new TextEncoder;

    function L(e) {
        return D.encode(e)
    }

    function B(e) {
        return D.encode(e)
    }

    function z(e) {
        return e.byteLength
    }

    function V(e, t) {
        "function" == typeof e.error ? e.error(t) : e.close()
    }
    var q = Object.assign,
        W = Object.prototype.hasOwnProperty,
        H = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        U = {},
        G = {};

    function Q(e) {
        return !!W.call(G, e) || !W.call(U, e) && (H.test(e) ? G[e] = !0 : (U[e] = !0, !1))
    }
    var K = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),
        X = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        Y = /["'&<>]/;

    function Z(e) {
        if ("boolean" == typeof e || "number" == typeof e || "bigint" == typeof e) return "" + e;
        e = "" + e;
        var t = Y.exec(e);
        if (t) {
            var r, n = "",
                a = 0;
            for (r = t.index; r < e.length; r++) {
                switch (e.charCodeAt(r)) {
                    case 34:
                        t = "&quot;";
                        break;
                    case 38:
                        t = "&amp;";
                        break;
                    case 39:
                        t = "&#x27;";
                        break;
                    case 60:
                        t = "&lt;";
                        break;
                    case 62:
                        t = "&gt;";
                        break;
                    default:
                        continue
                }
                a !== r && (n += e.slice(a, r)), a = r + 1, n += t
            }
            e = a !== r ? n + e.slice(a, r) : n
        }
        return e
    }
    var J = /([A-Z])/g,
        ee = /^ms-/,
        et = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function er(e) {
        return et.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var en = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        ea = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        es = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        eo = ea.d;
    ea.d = {
        f: eo.f,
        r: eo.r,
        D: function(e) {
            var t = nV || null;
            if (t) {
                var r, n, a = t.resumableState,
                    s = t.renderState;
                "string" == typeof e && e && (a.dnsResources.hasOwnProperty(e) || (a.dnsResources[e] = null, (n = (a = s.headers) && 0 < a.remainingCapacity) && (r = "<" + ("" + e).replace(r$, rD) + ">; rel=dns-prefetch", n = 0 <= (a.remainingCapacity -= r.length + 2)), n ? (s.resets.dns[e] = null, a.preconnects && (a.preconnects += ", "), a.preconnects += r) : (e4(r = [], {
                    href: e,
                    rel: "dns-prefetch"
                }), s.preconnects.add(r))), aE(t))
            } else eo.D(e)
        },
        C: function(e, t) {
            var r = nV || null;
            if (r) {
                var n = r.resumableState,
                    a = r.renderState;
                if ("string" == typeof e && e) {
                    var s, o, i = "use-credentials" === t ? "credentials" : "string" == typeof t ? "anonymous" : "default";
                    n.connectResources[i].hasOwnProperty(e) || (n.connectResources[i][e] = null, (o = (n = a.headers) && 0 < n.remainingCapacity) && (o = "<" + ("" + e).replace(r$, rD) + ">; rel=preconnect", "string" == typeof t && (o += '; crossorigin="' + ("" + t).replace(rL, rB) + '"'), s = o, o = 0 <= (n.remainingCapacity -= s.length + 2)), o ? (a.resets.connect[i][e] = null, n.preconnects && (n.preconnects += ", "), n.preconnects += s) : (e4(i = [], {
                        rel: "preconnect",
                        href: e,
                        crossOrigin: t
                    }), a.preconnects.add(i))), aE(r)
                }
            } else eo.C(e, t)
        },
        L: function(e, t, r) {
            var n = nV || null;
            if (n) {
                var a = n.resumableState,
                    s = n.renderState;
                if (t && e) {
                    switch (t) {
                        case "image":
                            if (r) var o, i = r.imageSrcSet,
                                l = r.imageSizes,
                                u = r.fetchPriority;
                            var c = i ? i + "\n" + (l || "") : e;
                            if (a.imageResources.hasOwnProperty(c)) return;
                            a.imageResources[c] = ei, (a = s.headers) && 0 < a.remainingCapacity && "string" != typeof i && "high" === u && (o = rN(e, t, r), 0 <= (a.remainingCapacity -= o.length + 2)) ? (s.resets.image[c] = ei, a.highImagePreloads && (a.highImagePreloads += ", "), a.highImagePreloads += o) : (e4(a = [], q({
                                rel: "preload",
                                href: i ? void 0 : e,
                                as: t
                            }, r)), "high" === u ? s.highImagePreloads.add(a) : (s.bulkPreloads.add(a), s.preloads.images.set(c, a)));
                            break;
                        case "style":
                            if (a.styleResources.hasOwnProperty(e)) return;
                            e4(i = [], q({
                                rel: "preload",
                                href: e,
                                as: t
                            }, r)), a.styleResources[e] = r && ("string" == typeof r.crossOrigin || "string" == typeof r.integrity) ? [r.crossOrigin, r.integrity] : ei, s.preloads.stylesheets.set(e, i), s.bulkPreloads.add(i);
                            break;
                        case "script":
                            if (a.scriptResources.hasOwnProperty(e)) return;
                            i = [], s.preloads.scripts.set(e, i), s.bulkPreloads.add(i), e4(i, q({
                                rel: "preload",
                                href: e,
                                as: t
                            }, r)), a.scriptResources[e] = r && ("string" == typeof r.crossOrigin || "string" == typeof r.integrity) ? [r.crossOrigin, r.integrity] : ei;
                            break;
                        default:
                            if (a.unknownResources.hasOwnProperty(t)) {
                                if ((i = a.unknownResources[t]).hasOwnProperty(e)) return
                            } else i = {}, a.unknownResources[t] = i;
                            i[e] = ei, (a = s.headers) && 0 < a.remainingCapacity && "font" === t && (c = rN(e, t, r), 0 <= (a.remainingCapacity -= c.length + 2)) ? (s.resets.font[e] = ei, a.fontPreloads && (a.fontPreloads += ", "), a.fontPreloads += c) : (e4(a = [], e = q({
                                rel: "preload",
                                href: e,
                                as: t
                            }, r)), "font" === t) ? s.fontPreloads.add(a) : s.bulkPreloads.add(a)
                    }
                    aE(n)
                }
            } else eo.L(e, t, r)
        },
        m: function(e, t) {
            var r = nV || null;
            if (r) {
                var n = r.resumableState,
                    a = r.renderState;
                if (e) {
                    var s = t && "string" == typeof t.as ? t.as : "script";
                    if ("script" === s) {
                        if (n.moduleScriptResources.hasOwnProperty(e)) return;
                        s = [], n.moduleScriptResources[e] = t && ("string" == typeof t.crossOrigin || "string" == typeof t.integrity) ? [t.crossOrigin, t.integrity] : ei, a.preloads.moduleScripts.set(e, s)
                    } else {
                        if (n.moduleUnknownResources.hasOwnProperty(s)) {
                            var o = n.unknownResources[s];
                            if (o.hasOwnProperty(e)) return
                        } else o = {}, n.moduleUnknownResources[s] = o;
                        s = [], o[e] = ei
                    }
                    e4(s, q({
                        rel: "modulepreload",
                        href: e
                    }, t)), a.bulkPreloads.add(s), aE(r)
                }
            } else eo.m(e, t)
        },
        X: function(e, t) {
            var r = nV || null;
            if (r) {
                var n = r.resumableState,
                    a = r.renderState;
                if (e) {
                    var s = n.scriptResources.hasOwnProperty(e) ? n.scriptResources[e] : void 0;
                    null !== s && (n.scriptResources[e] = null, t = q({
                        src: e,
                        async: !0
                    }, t), s && (2 === s.length && rj(t, s), e = a.preloads.scripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), tn(e, t), aE(r))
                }
            } else eo.X(e, t)
        },
        S: function(e, t, r) {
            var n = nV || null;
            if (n) {
                var a = n.resumableState,
                    s = n.renderState;
                if (e) {
                    t = t || "default";
                    var o = s.styles.get(t),
                        i = a.styleResources.hasOwnProperty(e) ? a.styleResources[e] : void 0;
                    null !== i && (a.styleResources[e] = null, o || (o = {
                        precedence: L(Z(t)),
                        rules: [],
                        hrefs: [],
                        sheets: new Map
                    }, s.styles.set(t, o)), t = {
                        state: 0,
                        props: q({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, r)
                    }, i && (2 === i.length && rj(t.props, i), (s = s.preloads.stylesheets.get(e)) && 0 < s.length ? s.length = 0 : t.state = 1), o.sheets.set(e, t), aE(n))
                }
            } else eo.S(e, t, r)
        },
        M: function(e, t) {
            var r = nV || null;
            if (r) {
                var n = r.resumableState,
                    a = r.renderState;
                if (e) {
                    var s = n.moduleScriptResources.hasOwnProperty(e) ? n.moduleScriptResources[e] : void 0;
                    null !== s && (n.moduleScriptResources[e] = null, t = q({
                        src: e,
                        type: "module",
                        async: !0
                    }, t), s && (2 === s.length && rj(t, s), e = a.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), tn(e, t), aE(r))
                }
            } else eo.M(e, t)
        }
    };
    var ei = [],
        el = null;
    B('"></template>');
    var eu = B("<script"),
        ec = B("</script>"),
        ed = B('<script src="'),
        ef = B('<script type="module" src="'),
        eh = B(' nonce="'),
        ep = B(' integrity="'),
        em = B(' crossorigin="'),
        eg = B(' async=""></script>'),
        ey = B("<style"),
        eb = /(<\/|<)(s)(cript)/gi;

    function ev(e, t, r, n) {
        return "" + t + ("s" === r ? "\\u0073" : "\\u0053") + n
    }
    var ek = B('<script type="importmap">'),
        eS = B("</script>");

    function ex(e, t, r, n, a, s) {
        var o = void 0 === (r = "string" == typeof t ? t : t && t.script) ? eu : B('<script nonce="' + Z(r) + '"'),
            i = "string" == typeof t ? void 0 : t && t.style,
            l = void 0 === i ? ey : B('<style nonce="' + Z(i) + '"'),
            u = e.idPrefix,
            c = [],
            d = e.bootstrapScriptContent,
            f = e.bootstrapScripts,
            h = e.bootstrapModules;
        if (void 0 !== d && (c.push(o), rR(c, e), c.push(eY, L(("" + d).replace(eb, ev)), ec)), d = [], void 0 !== n && (d.push(ek), d.push(L(("" + JSON.stringify(n)).replace(eb, ev))), d.push(eS)), n = a ? {
                preconnects: "",
                fontPreloads: "",
                highImagePreloads: "",
                remainingCapacity: 2 + ("number" == typeof s ? s : 2e3)
            } : null, a = {
                placeholderPrefix: B(u + "P:"),
                segmentPrefix: B(u + "S:"),
                boundaryPrefix: B(u + "B:"),
                startInlineScript: o,
                startInlineStyle: l,
                preamble: eP(),
                externalRuntimeScript: null,
                bootstrapChunks: c,
                importMapChunks: d,
                onHeaders: a,
                headers: n,
                resets: {
                    font: {},
                    dns: {},
                    connect: {
                        default: {},
                        anonymous: {},
                        credentials: {}
                    },
                    image: {},
                    style: {}
                },
                charsetChunks: [],
                viewportChunks: [],
                hoistableChunks: [],
                preconnects: new Set,
                fontPreloads: new Set,
                highImagePreloads: new Set,
                styles: new Map,
                bootstrapScripts: new Set,
                scripts: new Set,
                bulkPreloads: new Set,
                preloads: {
                    images: new Map,
                    stylesheets: new Map,
                    scripts: new Map,
                    moduleScripts: new Map
                },
                nonce: {
                    script: r,
                    style: i
                },
                hoistableState: null,
                stylesToHoist: !1
            }, void 0 !== f)
            for (n = 0; n < f.length; n++) u = f[n], i = o = void 0, l = {
                rel: "preload",
                as: "script",
                fetchPriority: "low",
                nonce: t
            }, "string" == typeof u ? l.href = s = u : (l.href = s = u.src, l.integrity = i = "string" == typeof u.integrity ? u.integrity : void 0, l.crossOrigin = o = "string" == typeof u || null == u.crossOrigin ? void 0 : "use-credentials" === u.crossOrigin ? "use-credentials" : ""), u = e, d = s, u.scriptResources[d] = null, u.moduleScriptResources[d] = null, e4(u = [], l), a.bootstrapScripts.add(u), c.push(ed, L(Z(s)), eB), r && c.push(eh, L(Z(r)), eB), "string" == typeof i && c.push(ep, L(Z(i)), eB), "string" == typeof o && c.push(em, L(Z(o)), eB), rR(c, e), c.push(eg);
        if (void 0 !== h)
            for (t = 0; t < h.length; t++) i = h[t], s = n = void 0, o = {
                rel: "modulepreload",
                fetchPriority: "low",
                nonce: r
            }, "string" == typeof i ? o.href = f = i : (o.href = f = i.src, o.integrity = s = "string" == typeof i.integrity ? i.integrity : void 0, o.crossOrigin = n = "string" == typeof i || null == i.crossOrigin ? void 0 : "use-credentials" === i.crossOrigin ? "use-credentials" : ""), i = e, l = f, i.scriptResources[l] = null, i.moduleScriptResources[l] = null, e4(i = [], o), a.bootstrapScripts.add(i), c.push(ef, L(Z(f)), eB), r && c.push(eh, L(Z(r)), eB), "string" == typeof s && c.push(ep, L(Z(s)), eB), "string" == typeof n && c.push(em, L(Z(n)), eB), rR(c, e), c.push(eg);
        return a
    }

    function ew(e, t, r, n, a) {
        return {
            idPrefix: void 0 === e ? "" : e,
            nextFormID: 0,
            streamingFormat: 0,
            bootstrapScriptContent: r,
            bootstrapScripts: n,
            bootstrapModules: a,
            instructions: 0,
            hasBody: !1,
            hasHtml: !1,
            unknownResources: {},
            dnsResources: {},
            connectResources: {
                default: {},
                anonymous: {},
                credentials: {}
            },
            imageResources: {},
            styleResources: {},
            scriptResources: {},
            moduleUnknownResources: {},
            moduleScriptResources: {}
        }
    }

    function eP() {
        return {
            htmlChunks: null,
            headChunks: null,
            bodyChunks: null
        }
    }

    function eC(e, t, r, n) {
        return {
            insertionMode: e,
            selectedValue: t,
            tagScope: r,
            viewTransition: n
        }
    }

    function eT(e) {
        return eC("http://www.w3.org/2000/svg" === e ? 4 : 5 * ("http://www.w3.org/1998/Math/MathML" === e), null, 0, null)
    }

    function e_(e, t, r) {
        var n = -25 & e.tagScope;
        switch (t) {
            case "noscript":
                return eC(2, null, 1 | n, null);
            case "select":
                return eC(2, null != r.value ? r.value : r.defaultValue, n, null);
            case "svg":
                return eC(4, null, n, null);
            case "picture":
                return eC(2, null, 2 | n, null);
            case "math":
                return eC(5, null, n, null);
            case "foreignObject":
                return eC(2, null, n, null);
            case "table":
                return eC(6, null, n, null);
            case "thead":
            case "tbody":
            case "tfoot":
                return eC(7, null, n, null);
            case "colgroup":
                return eC(9, null, n, null);
            case "tr":
                return eC(8, null, n, null);
            case "head":
                if (2 > e.insertionMode) return eC(3, null, n, null);
                break;
            case "html":
                if (0 === e.insertionMode) return eC(1, null, n, null)
        }
        return 6 <= e.insertionMode || 2 > e.insertionMode ? eC(2, null, n, null) : e.tagScope !== n ? eC(e.insertionMode, e.selectedValue, n, null) : e
    }

    function eE(e) {
        return null === e ? null : {
            update: e.update,
            enter: "none",
            exit: "none",
            share: e.update,
            name: e.autoName,
            autoName: e.autoName,
            nameIdx: 0
        }
    }

    function eR(e, t) {
        return 32 & t.tagScope && (e.instructions |= 128), eC(t.insertionMode, t.selectedValue, 12 | t.tagScope, eE(t.viewTransition))
    }

    function eI(e, t) {
        e = eE(t.viewTransition);
        var r = 16 | t.tagScope;
        return null !== e && "none" !== e.share && (r |= 64), eC(t.insertionMode, t.selectedValue, r, e)
    }
    var eO = B("<!-- -->");

    function eM(e, t, r, n) {
        return "" === t ? n : (n && e.push(eO), e.push(L(Z(t))), !0)
    }
    var eF = new Map,
        eA = B(' style="'),
        ej = B(":"),
        eN = B(";");

    function e$(e, t) {
        if ("object" != typeof t) throw Error(s(62));
        var r, n = !0;
        for (r in t)
            if (W.call(t, r)) {
                var a = t[r];
                if (null != a && "boolean" != typeof a && "" !== a) {
                    if (0 === r.indexOf("--")) {
                        var o = L(Z(r));
                        a = L(Z(("" + a).trim()))
                    } else void 0 === (o = eF.get(r)) && (o = B(Z(r.replace(J, "-$1").toLowerCase().replace(ee, "-ms-"))), eF.set(r, o)), a = "number" == typeof a ? 0 === a || K.has(r) ? L("" + a) : L(a + "px") : L(Z(("" + a).trim()));
                    n ? (n = !1, e.push(eA, o, ej, a)) : e.push(eN, o, ej, a)
                }
            }
        n || e.push(eB)
    }
    var eD = B(" "),
        eL = B('="'),
        eB = B('"'),
        ez = B('=""');

    function eV(e, t, r) {
        r && "function" != typeof r && "symbol" != typeof r && e.push(eD, L(t), ez)
    }

    function eq(e, t, r) {
        "function" != typeof r && "symbol" != typeof r && "boolean" != typeof r && e.push(eD, L(t), eL, L(Z(r)), eB)
    }
    var eW = B(Z("javascript:throw new Error('React form unexpectedly submitted.')")),
        eH = B('<input type="hidden"');

    function eU(e, t) {
        this.push(eH), eG(e), eq(this, "name", t), eq(this, "value", e), this.push(eZ)
    }

    function eG(e) {
        if ("string" != typeof e) throw Error(s(480))
    }

    function eQ(e, t) {
        if ("function" == typeof t.$$FORM_ACTION) {
            var r = e.nextFormID++;
            e = e.idPrefix + r;
            try {
                var n = t.$$FORM_ACTION(e);
                if (n) {
                    var a = n.data;
                    null != a && a.forEach(eG)
                }
                return n
            } catch (e) {
                if ("object" == typeof e && null !== e && "function" == typeof e.then) throw e
            }
        }
        return null
    }

    function eK(e, t, r, n, a, s, o, i) {
        var l = null;
        if ("function" == typeof n) {
            var u = eQ(t, n);
            null !== u ? (i = u.name, n = u.action || "", a = u.encType, s = u.method, o = u.target, l = u.data) : (e.push(eD, L("formAction"), eL, eW, eB), o = s = a = n = i = null, e2(t, r))
        }
        return null != i && eX(e, "name", i), null != n && eX(e, "formAction", n), null != a && eX(e, "formEncType", a), null != s && eX(e, "formMethod", s), null != o && eX(e, "formTarget", o), l
    }

    function eX(e, t, r) {
        switch (t) {
            case "className":
                eq(e, "class", r);
                break;
            case "tabIndex":
                eq(e, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                eq(e, t, r);
                break;
            case "style":
                e$(e, r);
                break;
            case "src":
            case "href":
                if ("" === r) break;
            case "action":
            case "formAction":
                if (null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) break;
                r = er("" + r), e.push(eD, L(t), eL, L(Z(r)), eB);
                break;
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "ref":
                break;
            case "autoFocus":
            case "multiple":
            case "muted":
                eV(e, t.toLowerCase(), r);
                break;
            case "xlinkHref":
                if ("function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) break;
                r = er("" + r), e.push(eD, L("xlink:href"), eL, L(Z(r)), eB);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                "function" != typeof r && "symbol" != typeof r && e.push(eD, L(t), eL, L(Z(r)), eB);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && "function" != typeof r && "symbol" != typeof r && e.push(eD, L(t), ez);
                break;
            case "capture":
            case "download":
                !0 === r ? e.push(eD, L(t), ez) : !1 !== r && "function" != typeof r && "symbol" != typeof r && e.push(eD, L(t), eL, L(Z(r)), eB);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r && e.push(eD, L(t), eL, L(Z(r)), eB);
                break;
            case "rowSpan":
            case "start":
                "function" == typeof r || "symbol" == typeof r || isNaN(r) || e.push(eD, L(t), eL, L(Z(r)), eB);
                break;
            case "xlinkActuate":
                eq(e, "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                eq(e, "xlink:arcrole", r);
                break;
            case "xlinkRole":
                eq(e, "xlink:role", r);
                break;
            case "xlinkShow":
                eq(e, "xlink:show", r);
                break;
            case "xlinkTitle":
                eq(e, "xlink:title", r);
                break;
            case "xlinkType":
                eq(e, "xlink:type", r);
                break;
            case "xmlBase":
                eq(e, "xml:base", r);
                break;
            case "xmlLang":
                eq(e, "xml:lang", r);
                break;
            case "xmlSpace":
                eq(e, "xml:space", r);
                break;
            default:
                if ((!(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && Q(t = X.get(t) || t)) {
                    switch (typeof r) {
                        case "function":
                        case "symbol":
                            return;
                        case "boolean":
                            var n = t.toLowerCase().slice(0, 5);
                            if ("data-" !== n && "aria-" !== n) return
                    }
                    e.push(eD, L(t), eL, L(Z(r)), eB)
                }
        }
    }
    var eY = B(">"),
        eZ = B("/>");

    function eJ(e, t, r) {
        if (null != t) {
            if (null != r) throw Error(s(60));
            if ("object" != typeof t || !("__html" in t)) throw Error(s(61));
            null != (t = t.__html) && e.push(L("" + t))
        }
    }
    var e0 = B(' selected=""'),
        e1 = B('addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});');

    function e2(e, t) {
        if (0 == (16 & e.instructions)) {
            e.instructions |= 16;
            var r = t.preamble,
                n = t.bootstrapChunks;
            (r.htmlChunks || r.headChunks) && 0 === n.length ? (n.push(t.startInlineScript), rR(n, e), n.push(eY, e1, ec)) : n.unshift(t.startInlineScript, eY, e1, ec)
        }
    }
    var e3 = B("<!--F!-->"),
        e5 = B("<!--F-->");

    function e4(e, t) {
        for (var r in e.push(tu("link")), t)
            if (W.call(t, r)) {
                var n = t[r];
                if (null != n) switch (r) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(s(399, "link"));
                    default:
                        eX(e, r, n)
                }
            }
        return e.push(eZ), null
    }
    var e9 = /(<\/|<)(s)(tyle)/gi;

    function e6(e, t, r, n) {
        return "" + t + ("s" === r ? "\\73 " : "\\53 ") + n
    }

    function e8(e, t, r) {
        for (var n in e.push(tu(r)), t)
            if (W.call(t, n)) {
                var a = t[n];
                if (null != a) switch (n) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(s(399, r));
                    default:
                        eX(e, n, a)
                }
            }
        return e.push(eZ), null
    }

    function e7(e, t) {
        e.push(tu("title"));
        var r, n = null,
            a = null;
        for (r in t)
            if (W.call(t, r)) {
                var s = t[r];
                if (null != s) switch (r) {
                    case "children":
                        n = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        a = s;
                        break;
                    default:
                        eX(e, r, s)
                }
            }
        return e.push(eY), "function" != typeof(t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n) && "symbol" != typeof t && null != t && e.push(L(Z("" + t))), eJ(e, a, n), e.push(tf("title")), null
    }
    var te = B("<!--head-->"),
        tt = B("<!--body-->"),
        tr = B("<!--html-->");

    function tn(e, t) {
        e.push(tu("script"));
        var r, n = null,
            a = null;
        for (r in t)
            if (W.call(t, r)) {
                var s = t[r];
                if (null != s) switch (r) {
                    case "children":
                        n = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        a = s;
                        break;
                    default:
                        eX(e, r, s)
                }
            }
        return e.push(eY), eJ(e, a, n), "string" == typeof n && e.push(L(("" + n).replace(eb, ev))), e.push(tf("script")), null
    }

    function ta(e, t, r) {
        e.push(tu(r));
        var n, a = r = null;
        for (n in t)
            if (W.call(t, n)) {
                var s = t[n];
                if (null != s) switch (n) {
                    case "children":
                        r = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        a = s;
                        break;
                    default:
                        eX(e, n, s)
                }
            }
        return e.push(eY), eJ(e, a, r), r
    }

    function ts(e, t, r) {
        e.push(tu(r));
        var n, a = r = null;
        for (n in t)
            if (W.call(t, n)) {
                var s = t[n];
                if (null != s) switch (n) {
                    case "children":
                        r = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        a = s;
                        break;
                    default:
                        eX(e, n, s)
                }
            }
        return e.push(eY), eJ(e, a, r), "string" == typeof r ? (e.push(L(Z(r))), null) : r
    }
    var to = B("\n"),
        ti = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        tl = new Map;

    function tu(e) {
        var t = tl.get(e);
        if (void 0 === t) {
            if (!ti.test(e)) throw Error(s(65, e));
            t = B("<" + e), tl.set(e, t)
        }
        return t
    }
    var tc = B("<!DOCTYPE html>"),
        td = new Map;

    function tf(e) {
        var t = td.get(e);
        return void 0 === t && (t = B("</" + e + ">"), td.set(e, t)), t
    }

    function th(e, t) {
        null === (e = e.preamble).htmlChunks && t.htmlChunks && (e.htmlChunks = t.htmlChunks), null === e.headChunks && t.headChunks && (e.headChunks = t.headChunks), null === e.bodyChunks && t.bodyChunks && (e.bodyChunks = t.bodyChunks)
    }

    function tp(e, t) {
        t = t.bootstrapChunks;
        for (var r = 0; r < t.length - 1; r++) j(e, t[r]);
        return !(r < t.length) || (r = t[r], t.length = 0, N(e, r))
    }
    var tm = B("requestAnimationFrame(function(){$RT=performance.now()});"),
        tg = B('<template id="'),
        ty = B('"></template>'),
        tb = B("<!--&-->"),
        tv = B("<!--/&-->"),
        tk = B("<!--$-->"),
        tS = B('<!--$?--><template id="'),
        tx = B('"></template>'),
        tw = B("<!--$!-->"),
        tP = B("<!--/$-->"),
        tC = B("<template"),
        tT = B('"'),
        t_ = B(' data-dgst="');
    B(' data-msg="'), B(' data-stck="'), B(' data-cstck="');
    var tE = B("></template>");

    function tR(e, t, r) {
        if (j(e, tS), null === r) throw Error(s(395));
        return j(e, t.boundaryPrefix), j(e, L(r.toString(16))), N(e, tx)
    }
    var tI = B('<div hidden id="'),
        tO = B('">'),
        tM = B("</div>"),
        tF = B('<svg aria-hidden="true" style="display:none" id="'),
        tA = B('">'),
        tj = B("</svg>"),
        tN = B('<math aria-hidden="true" style="display:none" id="'),
        t$ = B('">'),
        tD = B("</math>"),
        tL = B('<table hidden id="'),
        tB = B('">'),
        tz = B("</table>"),
        tV = B('<table hidden><tbody id="'),
        tq = B('">'),
        tW = B("</tbody></table>"),
        tH = B('<table hidden><tr id="'),
        tU = B('">'),
        tG = B("</tr></table>"),
        tQ = B('<table hidden><colgroup id="'),
        tK = B('">'),
        tX = B("</colgroup></table>"),
        tY = B('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),
        tZ = B('$RS("'),
        tJ = B('","'),
        t0 = B('")</script>');
    B('<template data-rsi="" data-sid="'), B('" data-pid="');
    var t1 = B('$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};');
    L('$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),"auto"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+K++ +"_"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll("[vt-share]"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute("vt-name"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if("/$"===r)if(0===f)break;else f--;else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute("vt-name"),y=m.get(D);k(d,y?"vt-share":"vt-exit");y&&(k(y,"vt-share"),m.set(D,null));var E=d.querySelectorAll("[vt-share]");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute("vt-name"),\nH=m.get(G);H&&(k(F,"vt-share"),k(H,"vt-share"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute("vt-name"))&&k(t,"vt-enter"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute("vt-update");J&&"none"!==J&&!l.includes(n)&&k(n,"vt-update");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&"none"!==c.getAttribute("vt-update"));u.push.apply(u,I.querySelectorAll(\'img[src]:not([loading="lazy"])\'))}}}if(B){var z=\ndocument.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener("load",q);w.g.addEventListener("error",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=\nperformance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===b.getAttribute("style")&&b.removeAttribute("style")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);');
    var t2 = B('$RC("'),
        t3 = B('$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=\n"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("'),
        t5 = B('$RR("'),
        t4 = B('","'),
        t9 = B('",'),
        t6 = B('"'),
        t8 = B(")</script>");
    B('<template data-rci="" data-bid="'), B('<template data-rri="" data-bid="'), B('" data-sid="'), B('" data-sty="');
    var t7 = B('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'),
        re = B('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'),
        rt = B('$RX("'),
        rr = B('"'),
        rn = B(","),
        ra = B(")</script>");
    B('<template data-rxi="" data-bid="'), B('" data-dgst="'), B('" data-msg="'), B('" data-stck="'), B('" data-cstck="');
    var rs = /[<\u2028\u2029]/g,
        ro = /[&><\u2028\u2029]/g;

    function ri(e) {
        return JSON.stringify(e).replace(ro, function(e) {
            switch (e) {
                case "&":
                    return "\\u0026";
                case ">":
                    return "\\u003e";
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
            }
        })
    }
    var rl = B(' media="not all" data-precedence="'),
        ru = B('" data-href="'),
        rc = B('">'),
        rd = B("</style>"),
        rf = !1,
        rh = !0;

    function rp(e) {
        var t = e.rules,
            r = e.hrefs,
            n = 0;
        if (r.length) {
            for (j(this, el.startInlineStyle), j(this, rl), j(this, e.precedence), j(this, ru); n < r.length - 1; n++) j(this, r[n]), j(this, rx);
            for (j(this, r[n]), j(this, rc), n = 0; n < t.length; n++) j(this, t[n]);
            rh = N(this, rd), rf = !0, t.length = 0, r.length = 0
        }
    }

    function rm(e) {
        return 2 !== e.state && (rf = !0)
    }

    function rg(e, t, r) {
        return rf = !1, rh = !0, el = r, t.styles.forEach(rp, e), el = null, t.stylesheets.forEach(rm), rf && (r.stylesToHoist = !0), rh
    }

    function ry(e) {
        for (var t = 0; t < e.length; t++) j(this, e[t]);
        e.length = 0
    }
    var rb = [];

    function rv(e) {
        e4(rb, e.props);
        for (var t = 0; t < rb.length; t++) j(this, rb[t]);
        rb.length = 0, e.state = 2
    }
    var rk = B(' data-precedence="'),
        rS = B('" data-href="'),
        rx = B(" "),
        rw = B('">'),
        rP = B("</style>");

    function rC(e) {
        var t = 0 < e.sheets.size;
        e.sheets.forEach(rv, this), e.sheets.clear();
        var r = e.rules,
            n = e.hrefs;
        if (!t || n.length) {
            if (j(this, el.startInlineStyle), j(this, rk), j(this, e.precedence), e = 0, n.length) {
                for (j(this, rS); e < n.length - 1; e++) j(this, n[e]), j(this, rx);
                j(this, n[e])
            }
            for (j(this, rw), e = 0; e < r.length; e++) j(this, r[e]);
            j(this, rP), r.length = 0, n.length = 0
        }
    }

    function rT(e) {
        if (0 === e.state) {
            e.state = 1;
            var t = e.props;
            for (e4(rb, {
                    rel: "preload",
                    as: "style",
                    href: e.props.href,
                    crossOrigin: t.crossOrigin,
                    fetchPriority: t.fetchPriority,
                    integrity: t.integrity,
                    media: t.media,
                    hrefLang: t.hrefLang,
                    referrerPolicy: t.referrerPolicy
                }), e = 0; e < rb.length; e++) j(this, rb[e]);
            rb.length = 0
        }
    }

    function r_(e) {
        e.sheets.forEach(rT, this), e.sheets.clear()
    }
    B('<link rel="expect" href="#'), B('" blocking="render"/>');
    var rE = B(' id="');

    function rR(e, t) {
        0 == (32 & t.instructions) && (t.instructions |= 32, e.push(rE, L(Z("_" + t.idPrefix + "R_")), eB))
    }
    var rI = B("["),
        rO = B(",["),
        rM = B(","),
        rF = B("]");

    function rA() {
        return {
            styles: new Set,
            stylesheets: new Set,
            suspenseyImages: !1
        }
    }

    function rj(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t[0]), null == e.integrity && (e.integrity = t[1])
    }

    function rN(e, t, r) {
        for (var n in t = "<" + (e = ("" + e).replace(r$, rD)) + '>; rel=preload; as="' + (t = ("" + t).replace(rL, rB)) + '"', r) W.call(r, n) && "string" == typeof(e = r[n]) && (t += "; " + n.toLowerCase() + '="' + ("" + e).replace(rL, rB) + '"');
        return t
    }
    var r$ = /[<>\r\n]/g;

    function rD(e) {
        switch (e) {
            case "<":
                return "%3C";
            case ">":
                return "%3E";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
        }
    }
    var rL = /["';,\r\n]/g;

    function rB(e) {
        switch (e) {
            case '"':
                return "%22";
            case "'":
                return "%27";
            case ";":
                return "%3B";
            case ",":
                return "%2C";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
        }
    }

    function rz(e) {
        this.styles.add(e)
    }

    function rV(e) {
        this.stylesheets.add(e)
    }

    function rq(e, t) {
        t.styles.forEach(rz, e), t.stylesheets.forEach(rV, e), t.suspenseyImages && (e.suspenseyImages = !0)
    }

    function rW(e) {
        return 0 < e.stylesheets.size || e.suspenseyImages
    }
    var rH = Function.prototype.bind,
        rU = Symbol.for("react.client.reference");

    function rG(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.$$typeof === rU ? null : e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case l:
                return "Fragment";
            case c:
                return "Profiler";
            case u:
                return "StrictMode";
            case p:
                return "Suspense";
            case m:
                return "SuspenseList";
            case v:
                return "Activity"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case i:
                return "Portal";
            case f:
                return e.displayName || "Context";
            case d:
                return (e._context.displayName || "Context") + ".Consumer";
            case h:
                var t = e.render;
                return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case g:
                return null !== (t = e.displayName || null) ? t : rG(e.type) || "Memo";
            case y:
                t = e._payload, e = e._init;
                try {
                    return rG(e(t))
                } catch (e) {}
        }
        return null
    }
    var rQ = {},
        rK = null;

    function rX(e, t) {
        if (e !== t) {
            e.context._currentValue = e.parentValue, e = e.parent;
            var r = t.parent;
            if (null === e) {
                if (null !== r) throw Error(s(401))
            } else {
                if (null === r) throw Error(s(401));
                rX(e, r)
            }
            t.context._currentValue = t.value
        }
    }

    function rY(e) {
        var t = rK;
        t !== e && (null === t ? function e(t) {
            var r = t.parent;
            null !== r && e(r), t.context._currentValue = t.value
        }(e) : null === e ? function e(t) {
            t.context._currentValue = t.parentValue, null !== (t = t.parent) && e(t)
        }(t) : t.depth === e.depth ? rX(t, e) : t.depth > e.depth ? function e(t, r) {
            if (t.context._currentValue = t.parentValue, null === (t = t.parent)) throw Error(s(402));
            t.depth === r.depth ? rX(t, r) : e(t, r)
        }(t, e) : function e(t, r) {
            var n = r.parent;
            if (null === n) throw Error(s(402));
            t.depth === n.depth ? rX(t, n) : e(t, n), r.context._currentValue = r.value
        }(t, e), rK = e)
    }
    var rZ = {
            enqueueSetState: function(e, t) {
                null !== (e = e._reactInternals).queue && e.queue.push(t)
            },
            enqueueReplaceState: function(e, t) {
                (e = e._reactInternals).replace = !0, e.queue = [t]
            },
            enqueueForceUpdate: function() {}
        },
        rJ = {
            id: 1,
            overflow: ""
        };

    function r0(e, t, r) {
        var n = e.id;
        e = e.overflow;
        var a = 32 - r1(n) - 1;
        n &= ~(1 << a), r += 1;
        var s = 32 - r1(t) + a;
        if (30 < s) {
            var o = a - a % 5;
            return s = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, {
                id: 1 << 32 - r1(t) + a | r << a | n,
                overflow: s + e
            }
        }
        return {
            id: 1 << s | r << a | n,
            overflow: e
        }
    }
    var r1 = Math.clz32 ? Math.clz32 : function(e) {
            return 0 == (e >>>= 0) ? 32 : 31 - (r2(e) / r3 | 0) | 0
        },
        r2 = Math.log,
        r3 = Math.LN2;

    function r5() {}
    var r4 = Error(s(460)),
        r9 = null;

    function r6() {
        if (null === r9) throw Error(s(459));
        var e = r9;
        return r9 = null, e
    }
    var r8 = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        r7 = null,
        ne = null,
        nt = null,
        nr = null,
        nn = null,
        na = null,
        ns = !1,
        no = !1,
        ni = 0,
        nl = 0,
        nu = -1,
        nc = 0,
        nd = null,
        nf = null,
        nh = 0;

    function np() {
        if (null === r7) throw Error(s(321));
        return r7
    }

    function nm() {
        if (0 < nh) throw Error(s(312));
        return {
            memoizedState: null,
            queue: null,
            next: null
        }
    }

    function ng() {
        return null === na ? null === nn ? (ns = !1, nn = na = nm()) : (ns = !0, na = nn) : null === na.next ? (ns = !1, na = na.next = nm()) : (ns = !0, na = na.next), na
    }

    function ny() {
        var e = nd;
        return nd = null, e
    }

    function nb() {
        nr = nt = ne = r7 = null, no = !1, nn = null, nh = 0, na = nf = null
    }

    function nv(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function nk(e, t, r) {
        if (r7 = np(), na = ng(), ns) {
            var n = na.queue;
            if (t = n.dispatch, null !== nf && void 0 !== (r = nf.get(n))) {
                nf.delete(n), n = na.memoizedState;
                do n = e(n, r.action), r = r.next; while (null !== r) return na.memoizedState = n, [n, t]
            }
            return [na.memoizedState, t]
        }
        return e = e === nv ? "function" == typeof t ? t() : t : void 0 !== r ? r(t) : t, na.memoizedState = e, e = (e = na.queue = {
            last: null,
            dispatch: null
        }).dispatch = nx.bind(null, r7, e), [na.memoizedState, e]
    }

    function nS(e, t) {
        if (r7 = np(), na = ng(), t = void 0 === t ? null : t, null !== na) {
            var r = na.memoizedState;
            if (null !== r && null !== t) {
                var n = r[1];
                e: if (null === n) n = !1;
                    else {
                        for (var a = 0; a < n.length && a < t.length; a++)
                            if (!r8(t[a], n[a])) {
                                n = !1;
                                break e
                            }
                        n = !0
                    }
                if (n) return r[0]
            }
        }
        return e = e(), na.memoizedState = [e, t], e
    }

    function nx(e, t, r) {
        if (25 <= nh) throw Error(s(301));
        if (e === r7)
            if (no = !0, e = {
                    action: r,
                    next: null
                }, null === nf && (nf = new Map), void 0 === (r = nf.get(t))) nf.set(t, e);
            else {
                for (t = r; null !== t.next;) t = t.next;
                t.next = e
            }
    }

    function nw() {
        throw Error(s(440))
    }

    function nP() {
        throw Error(s(394))
    }

    function nC() {
        throw Error(s(479))
    }

    function nT(e, t, r) {
        np();
        var n = nl++,
            a = nt;
        if ("function" == typeof e.$$FORM_ACTION) {
            var s = null,
                o = nr;
            a = a.formState;
            var i = e.$$IS_SIGNATURE_EQUAL;
            if (null !== a && "function" == typeof i) {
                var l = a[1];
                i.call(e, a[2], a[3]) && l === (s = void 0 !== r ? "p" + r : "k" + T(JSON.stringify([o, null, n]), 0)) && (nu = n, t = a[0])
            }
            var u = e.bind(null, t);
            return e = function(e) {
                u(e)
            }, "function" == typeof u.$$FORM_ACTION && (e.$$FORM_ACTION = function(e) {
                e = u.$$FORM_ACTION(e), void 0 !== r && (r += "", e.action = r);
                var t = e.data;
                return t && (null === s && (s = void 0 !== r ? "p" + r : "k" + T(JSON.stringify([o, null, n]), 0)), t.append("$ACTION_KEY", s)), e
            }), [t, e, !1]
        }
        var c = e.bind(null, t);
        return [t, function(e) {
            c(e)
        }, !1]
    }

    function n_(e) {
        var t = nc;
        nc += 1, null === nd && (nd = []);
        var r = nd,
            n = e,
            a = t;
        switch (void 0 === (a = r[a]) ? r.push(n) : a !== n && (n.then(r5, r5), n = a), n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw n.reason;
            default:
                switch ("string" == typeof n.status ? n.then(r5, r5) : ((r = n).status = "pending", r.then(function(e) {
                    if ("pending" === n.status) {
                        var t = n;
                        t.status = "fulfilled", t.value = e
                    }
                }, function(e) {
                    if ("pending" === n.status) {
                        var t = n;
                        t.status = "rejected", t.reason = e
                    }
                })), n.status) {
                    case "fulfilled":
                        return n.value;
                    case "rejected":
                        throw n.reason
                }
                throw r9 = n, r4
        }
    }

    function nE() {
        throw Error(s(393))
    }
    var nR, nI, nO = {
            readContext: function(e) {
                return e._currentValue
            },
            use: function(e) {
                if (null !== e && "object" == typeof e) {
                    if ("function" == typeof e.then) return n_(e);
                    if (e.$$typeof === f) return e._currentValue
                }
                throw Error(s(438, String(e)))
            },
            useContext: function(e) {
                return np(), e._currentValue
            },
            useMemo: nS,
            useReducer: nk,
            useRef: function(e) {
                r7 = np();
                var t = (na = ng()).memoizedState;
                return null === t ? (e = {
                    current: e
                }, na.memoizedState = e) : t
            },
            useState: function(e) {
                return nk(nv, e)
            },
            useInsertionEffect: r5,
            useLayoutEffect: r5,
            useCallback: function(e, t) {
                return nS(function() {
                    return e
                }, t)
            },
            useImperativeHandle: r5,
            useEffect: r5,
            useDebugValue: r5,
            useDeferredValue: function(e, t) {
                return np(), void 0 !== t ? t : e
            },
            useTransition: function() {
                return np(), [!1, nP]
            },
            useId: function() {
                var e = ne.treeContext,
                    t = e.overflow;
                e = ((e = e.id) & ~(1 << 32 - r1(e) - 1)).toString(32) + t;
                var r = nM;
                if (null === r) throw Error(s(404));
                return t = ni++, e = "_" + r.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_"
            },
            useSyncExternalStore: function(e, t, r) {
                if (void 0 === r) throw Error(s(407));
                return r()
            },
            useOptimistic: function(e) {
                return np(), [e, nC]
            },
            useActionState: nT,
            useFormState: nT,
            useHostTransitionStatus: function() {
                return np(), es
            },
            useMemoCache: function(e) {
                for (var t = Array(e), r = 0; r < e; r++) t[r] = S;
                return t
            },
            useCacheRefresh: function() {
                return nE
            },
            useEffectEvent: function() {
                return nw
            }
        },
        nM = null,
        nF = {
            getCacheForType: function() {
                throw Error(s(248))
            },
            cacheSignal: function() {
                throw Error(s(248))
            }
        };

    function nA(e) {
        if (void 0 === nR) try {
            throw Error()
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            nR = t && t[1] || "", nI = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return "\n" + nR + e + nI
    }
    var nj = !1;

    function nN(e, t) {
        if (!e || nj) return "";
        nj = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var r = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(r.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(r, [])
                                } catch (e) {
                                    var n = e
                                }
                                Reflect.construct(e, [], r)
                            } else {
                                try {
                                    r.call()
                                } catch (e) {
                                    n = e
                                }
                                e.call(r.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                n = e
                            }(r = e()) && "function" == typeof r.catch && r.catch(function() {})
                        }
                    } catch (e) {
                        if (e && n && "string" == typeof e.stack) return [e.stack, n.stack]
                    }
                    return [null, null]
                }
            };
            n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var s = n.DetermineComponentFrameRoot(),
                o = s[0],
                i = s[1];
            if (o && i) {
                var l = o.split("\n"),
                    u = i.split("\n");
                for (a = n = 0; n < l.length && !l[n].includes("DetermineComponentFrameRoot");) n++;
                for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                if (n === l.length || a === u.length)
                    for (n = l.length - 1, a = u.length - 1; 1 <= n && 0 <= a && l[n] !== u[a];) a--;
                for (; 1 <= n && 0 <= a; n--, a--)
                    if (l[n] !== u[a]) {
                        if (1 !== n || 1 !== a)
                            do
                                if (n--, a--, 0 > a || l[n] !== u[a]) {
                                    var c = "\n" + l[n].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                }
                        while (1 <= n && 0 <= a) break
                    }
            }
        } finally {
            nj = !1, Error.prepareStackTrace = r
        }
        return (r = e ? e.displayName || e.name : "") ? nA(r) : ""
    }

    function n$(e, t) {
        return (500 < t.byteSize || rW(t.contentState)) && null === t.contentPreamble
    }

    function nD(e) {
        if ("object" == typeof e && null !== e && "string" == typeof e.environmentName) {
            var t = e.environmentName;
            "string" == typeof(e = [e])[0] ? e.splice(0, 1, "%c%s%c " + e[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", ""): e.splice(0, 0, "%c%s%c", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", ""), e.unshift(console), (t = rH.apply(console.error, e))()
        } else console.error(e);
        return null
    }

    function nL(e, t, r, n, a, s, o, i, l, u, c) {
        var d = new Set;
        this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = r, this.progressiveChunkSize = void 0 === n ? 12800 : n, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = d, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === a ? nD : a, this.onPostpone = void 0 === u ? r5 : u, this.onAllReady = void 0 === s ? r5 : s, this.onShellReady = void 0 === o ? r5 : o, this.onShellError = void 0 === i ? r5 : i, this.onFatalError = void 0 === l ? r5 : l, this.formState = void 0 === c ? null : c
    }

    function nB(e, t, r, n, a, s, o, i, l, u, c, d) {
        return (r = nG(t = new nL(t, r, n, a, s, o, i, l, u, c, d), 0, null, n, !1, !1)).parentFlushed = !0, nQ(e = nH(t, null, e, -1, null, r, null, null, t.abortableTasks, null, n, null, rJ, null, null)), t.pingedTasks.push(e), t
    }

    function nz(e, t, r, n, a, s, o, i, l) {
        return ((r = new nL(t.resumableState, r, t.rootFormatContext, t.progressiveChunkSize, n, a, s, o, i, l, null)).nextSegmentId = t.nextSegmentId, "number" == typeof t.replaySlots) ? ((n = nG(r, 0, null, t.rootFormatContext, !1, !1)).parentFlushed = !0, nQ(e = nH(r, null, e, -1, null, n, null, null, r.abortableTasks, null, t.rootFormatContext, null, rJ, null, null))) : nQ(e = nU(r, null, {
            nodes: t.replayNodes,
            slots: t.replaySlots,
            pendingTasks: 0
        }, e, -1, null, null, r.abortableTasks, null, t.rootFormatContext, null, rJ, null, null)), r.pingedTasks.push(e), r
    }
    var nV = null;

    function nq(e, t) {
        e.pingedTasks.push(t), 1 === e.pingedTasks.length && (e.flushScheduled = null !== e.destination, null !== e.trackedPostpones || 10 === e.status ? M(function() {
            return am(e)
        }) : R(function() {
            return am(e)
        }))
    }

    function nW(e, t, r, n, a) {
        return r = {
            status: 0,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            row: t,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: r,
            errorDigest: null,
            contentState: rA(),
            fallbackState: rA(),
            contentPreamble: n,
            fallbackPreamble: a,
            trackedContentKeyPath: null,
            trackedFallbackNode: null
        }, null !== t && (t.pendingTasks++, null !== (n = t.boundaries) && (e.allPendingTasks++, r.pendingTasks++, n.push(r)), null !== (e = t.inheritedHoistables) && rq(r.contentState, e)), r
    }

    function nH(e, t, r, n, a, s, o, i, l, u, c, d, f, h, p) {
        e.allPendingTasks++, null === a ? e.pendingRootTasks++ : a.pendingTasks++, null !== h && h.pendingTasks++;
        var m = {
            replay: null,
            node: r,
            childIndex: n,
            ping: function() {
                return nq(e, m)
            },
            blockedBoundary: a,
            blockedSegment: s,
            blockedPreamble: o,
            hoistableState: i,
            abortSet: l,
            keyPath: u,
            formatContext: c,
            context: d,
            treeContext: f,
            row: h,
            componentStack: p,
            thenableState: t
        };
        return l.add(m), m
    }

    function nU(e, t, r, n, a, s, o, i, l, u, c, d, f, h) {
        e.allPendingTasks++, null === s ? e.pendingRootTasks++ : s.pendingTasks++, null !== f && f.pendingTasks++, r.pendingTasks++;
        var p = {
            replay: r,
            node: n,
            childIndex: a,
            ping: function() {
                return nq(e, p)
            },
            blockedBoundary: s,
            blockedSegment: null,
            blockedPreamble: null,
            hoistableState: o,
            abortSet: i,
            keyPath: l,
            formatContext: u,
            context: c,
            treeContext: d,
            row: f,
            componentStack: h,
            thenableState: t
        };
        return i.add(p), p
    }

    function nG(e, t, r, n, a, s) {
        return {
            status: 0,
            parentFlushed: !1,
            id: -1,
            index: t,
            chunks: [],
            children: [],
            preambleChildren: [],
            parentFormatContext: n,
            boundary: r,
            lastPushedText: a,
            textEmbedded: s
        }
    }

    function nQ(e) {
        var t = e.node;
        "object" == typeof t && null !== t && t.$$typeof === o && (e.componentStack = {
            parent: e.componentStack,
            type: t.type
        })
    }

    function nK(e) {
        return null === e ? null : {
            parent: e.parent,
            type: "Suspense Fallback"
        }
    }

    function nX(e) {
        var t = {};
        return e && Object.defineProperty(t, "componentStack", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    var r = "",
                        n = e;
                    do r += function e(t) {
                        if ("string" == typeof t) return nA(t);
                        if ("function" == typeof t) return t.prototype && t.prototype.isReactComponent ? nN(t, !0) : nN(t, !1);
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case h:
                                    return nN(t.render, !1);
                                case g:
                                    return nN(t.type, !1);
                                case y:
                                    var r = t,
                                        n = r._payload;
                                    r = r._init;
                                    try {
                                        t = r(n)
                                    } catch (e) {
                                        return nA("Lazy")
                                    }
                                    return e(t)
                            }
                            if ("string" == typeof t.name) {
                                e: {
                                    n = t.name,
                                    r = t.env;
                                    var a = t.debugLocation;
                                    if (null != a && (t = Error.prepareStackTrace, Error.prepareStackTrace = void 0, a = a.stack, Error.prepareStackTrace = t, a.startsWith("Error: react-stack-top-frame\n") && (a = a.slice(29)), -1 !== (t = a.indexOf("\n")) && (a = a.slice(t + 1)), -1 !== (t = a.indexOf("react_stack_bottom_frame")) && (t = a.lastIndexOf("\n", t)), -1 !== (t = -1 === (a = (t = -1 !== t ? a = a.slice(0, t) : "").lastIndexOf("\n")) ? t : t.slice(a + 1)).indexOf(n))) {
                                        n = "\n" + t;
                                        break e
                                    }
                                    n = nA(n + (r ? " [" + r + "]" : ""))
                                }
                                return n
                            }
                        }
                        switch (t) {
                            case m:
                                return nA("SuspenseList");
                            case p:
                                return nA("Suspense")
                        }
                        return ""
                    }(n.type), n = n.parent; while (n) var a = r
                } catch (e) {
                    a = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return Object.defineProperty(t, "componentStack", {
                    value: a
                }), a
            }
        }), t
    }

    function nY(e, t, r) {
        if (null == (t = (e = e.onError)(t, r)) || "string" == typeof t) return t
    }

    function nZ(e, t) {
        var r = e.onShellError,
            n = e.onFatalError;
        r(t), n(t), null !== e.destination ? (e.status = 14, V(e.destination, t)) : (e.status = 13, e.fatalError = t)
    }

    function nJ(e, t) {
        n0(e, t.next, t.hoistables)
    }

    function n0(e, t, r) {
        for (; null !== t;) {
            null !== r && (rq(t.hoistables, r), t.inheritedHoistables = r);
            var n = t.boundaries;
            if (null !== n) {
                t.boundaries = null;
                for (var a = 0; a < n.length; a++) {
                    var s = n[a];
                    null !== r && rq(s.contentState, r), ap(e, s, null, null)
                }
            }
            if (t.pendingTasks--, 0 < t.pendingTasks) break;
            r = t.hoistables, t = t.next
        }
    }

    function n1(e, t) {
        var r = t.boundaries;
        if (null !== r && t.pendingTasks === r.length) {
            for (var n = !0, a = 0; a < r.length; a++) {
                var s = r[a];
                if (1 !== s.pendingTasks || s.parentFlushed || n$(e, s)) {
                    n = !1;
                    break
                }
            }
            n && n0(e, t, t.hoistables)
        }
    }

    function n2(e) {
        var t = {
            pendingTasks: 1,
            boundaries: null,
            hoistables: rA(),
            inheritedHoistables: null,
            together: !1,
            next: null
        };
        return null !== e && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t
    }

    function n3(e, t, r, n, a) {
        var s = t.keyPath,
            o = t.treeContext,
            i = t.row;
        t.keyPath = r, r = n.length;
        var l = null;
        if (null !== t.replay) {
            var u = t.replay.slots;
            if (null !== u && "object" == typeof u)
                for (var c = 0; c < r; c++) {
                    var d = "backwards" !== a && "unstable_legacy-backwards" !== a ? c : r - 1 - c,
                        f = n[d];
                    t.row = l = n2(l), t.treeContext = r0(o, r, d);
                    var h = u[d];
                    "number" == typeof h ? (n6(e, t, h, f, d), delete u[d]) : ao(e, t, f, d), 0 == --l.pendingTasks && nJ(e, l)
                } else
                    for (u = 0; u < r; u++) d = n[c = "backwards" !== a && "unstable_legacy-backwards" !== a ? u : r - 1 - u], t.row = l = n2(l), t.treeContext = r0(o, r, c), ao(e, t, d, c), 0 == --l.pendingTasks && nJ(e, l)
        } else if ("backwards" !== a && "unstable_legacy-backwards" !== a)
            for (a = 0; a < r; a++) u = n[a], t.row = l = n2(l), t.treeContext = r0(o, r, a), ao(e, t, u, a), 0 == --l.pendingTasks && nJ(e, l);
        else {
            for (u = (a = t.blockedSegment).children.length, c = a.chunks.length, d = r - 1; 0 <= d; d--) {
                f = n[d], t.row = l = n2(l), t.treeContext = r0(o, r, d), h = nG(e, c, null, t.formatContext, 0 !== d || a.lastPushedText, !0), a.children.splice(u, 0, h), t.blockedSegment = h;
                try {
                    ao(e, t, f, d), h.lastPushedText && h.textEmbedded && h.chunks.push(eO), h.status = 1, ah(e, t.blockedBoundary, h), 0 == --l.pendingTasks && nJ(e, l)
                } catch (t) {
                    throw h.status = 12 === e.status ? 3 : 4, t
                }
            }
            t.blockedSegment = a, a.lastPushedText = !1
        }
        null !== i && null !== l && 0 < l.pendingTasks && (i.pendingTasks++, l.next = i), t.treeContext = o, t.row = i, t.keyPath = s
    }

    function n5(e, t, r, n, a, s) {
        var o = t.thenableState;
        for (t.thenableState = null, r7 = {}, ne = t, nt = e, nr = r, nl = ni = 0, nu = -1, nc = 0, nd = o, e = n(a, s); no;) no = !1, nl = ni = 0, nu = -1, nc = 0, nh += 1, na = null, e = n(a, s);
        return nb(), e
    }

    function n4(e, t, r, n, a, s, o) {
        var i = !1;
        if (0 !== s && null !== e.formState) {
            var l = t.blockedSegment;
            if (null !== l) {
                i = !0, l = l.chunks;
                for (var u = 0; u < s; u++) u === o ? l.push(e3) : l.push(e5)
            }
        }
        s = t.keyPath, t.keyPath = r, a ? (r = t.treeContext, t.treeContext = r0(r, 1, 0), ao(e, t, n, -1), t.treeContext = r) : i ? ao(e, t, n, -1) : n8(e, t, n, -1), t.keyPath = s
    }

    function n9(e, t, r, a, o, i) {
        if ("function" == typeof a)
            if (a.prototype && a.prototype.isReactComponent) {
                var S = o;
                if ("ref" in o)
                    for (var w in S = {}, o) "ref" !== w && (S[w] = o[w]);
                var T = a.defaultProps;
                if (T)
                    for (var _ in S === o && (S = q({}, S, o)), T) void 0 === S[_] && (S[_] = T[_]);
                o = S, S = rQ, "object" == typeof(T = a.contextType) && null !== T && (S = T._currentValue);
                var E = void 0 !== (S = new a(o, S)).state ? S.state : null;
                if (S.updater = rZ, S.props = o, S.state = E, T = {
                        queue: [],
                        replace: !1
                    }, S._reactInternals = T, i = a.contextType, S.context = "object" == typeof i && null !== i ? i._currentValue : rQ, "function" == typeof(i = a.getDerivedStateFromProps) && (E = null == (i = i(o, E)) ? E : q({}, E, i), S.state = E), "function" != typeof a.getDerivedStateFromProps && "function" != typeof S.getSnapshotBeforeUpdate && ("function" == typeof S.UNSAFE_componentWillMount || "function" == typeof S.componentWillMount))
                    if (a = S.state, "function" == typeof S.componentWillMount && S.componentWillMount(), "function" == typeof S.UNSAFE_componentWillMount && S.UNSAFE_componentWillMount(), a !== S.state && rZ.enqueueReplaceState(S, S.state, null), null !== T.queue && 0 < T.queue.length)
                        if (a = T.queue, i = T.replace, T.queue = null, T.replace = !1, i && 1 === a.length) S.state = a[0];
                        else {
                            for (T = i ? a[0] : S.state, E = !0, i = +!!i; i < a.length; i++) null != (_ = "function" == typeof(_ = a[i]) ? _.call(S, T, o, void 0) : _) && (E ? (E = !1, T = q({}, T, _)) : q(T, _));
                            S.state = T
                        }
                else T.queue = null;
                if (a = S.render(), 12 === e.status) throw null;
                o = t.keyPath, t.keyPath = r, n8(e, t, a, -1), t.keyPath = o
            } else {
                if (a = n5(e, t, r, a, o, void 0), 12 === e.status) throw null;
                n4(e, t, r, a, 0 !== ni, nl, nu)
            }
        else if ("string" == typeof a)
            if (null === (S = t.blockedSegment)) S = o.children, T = t.formatContext, E = t.keyPath, t.formatContext = e_(T, a, o), t.keyPath = r, ao(e, t, S, -1), t.formatContext = T, t.keyPath = E;
            else {
                if (E = function(e, t, r, a, o, i, l, u, c) {
                        switch (t) {
                            case "div":
                            case "span":
                            case "svg":
                            case "path":
                            case "g":
                            case "p":
                            case "li":
                            case "annotation-xml":
                            case "color-profile":
                            case "font-face":
                            case "font-face-src":
                            case "font-face-uri":
                            case "font-face-format":
                            case "font-face-name":
                            case "missing-glyph":
                                break;
                            case "a":
                                e.push(tu("a"));
                                var d, f = null,
                                    h = null;
                                for (d in r)
                                    if (W.call(r, d)) {
                                        var p = r[d];
                                        if (null != p) switch (d) {
                                            case "children":
                                                f = p;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                h = p;
                                                break;
                                            case "href":
                                                "" === p ? eq(e, "href", "") : eX(e, d, p);
                                                break;
                                            default:
                                                eX(e, d, p)
                                        }
                                    }
                                if (e.push(eY), eJ(e, h, f), "string" == typeof f) {
                                    e.push(L(Z(f)));
                                    var m = null
                                } else m = f;
                                return m;
                            case "select":
                                e.push(tu("select"));
                                var g, y = null,
                                    b = null;
                                for (g in r)
                                    if (W.call(r, g)) {
                                        var v = r[g];
                                        if (null != v) switch (g) {
                                            case "children":
                                                y = v;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                b = v;
                                                break;
                                            case "defaultValue":
                                            case "value":
                                                break;
                                            default:
                                                eX(e, g, v)
                                        }
                                    }
                                return e.push(eY), eJ(e, b, y), y;
                            case "option":
                                var k = u.selectedValue;
                                e.push(tu("option"));
                                var S, x = null,
                                    w = null,
                                    P = null,
                                    T = null;
                                for (S in r)
                                    if (W.call(r, S)) {
                                        var _ = r[S];
                                        if (null != _) switch (S) {
                                            case "children":
                                                x = _;
                                                break;
                                            case "selected":
                                                P = _;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                T = _;
                                                break;
                                            case "value":
                                                w = _;
                                            default:
                                                eX(e, S, _)
                                        }
                                    }
                                if (null != k) {
                                    var E, R, I = null !== w ? "" + w : (E = x, R = "", n.Children.forEach(E, function(e) {
                                        null != e && (R += e)
                                    }), R);
                                    if (C(k)) {
                                        for (var O = 0; O < k.length; O++)
                                            if ("" + k[O] === I) {
                                                e.push(e0);
                                                break
                                            }
                                    } else "" + k === I && e.push(e0)
                                } else P && e.push(e0);
                                return e.push(eY), eJ(e, T, x), x;
                            case "textarea":
                                e.push(tu("textarea"));
                                var M, F = null,
                                    A = null,
                                    j = null;
                                for (M in r)
                                    if (W.call(r, M)) {
                                        var N = r[M];
                                        if (null != N) switch (M) {
                                            case "children":
                                                j = N;
                                                break;
                                            case "value":
                                                F = N;
                                                break;
                                            case "defaultValue":
                                                A = N;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                throw Error(s(91));
                                            default:
                                                eX(e, M, N)
                                        }
                                    }
                                if (null === F && null !== A && (F = A), e.push(eY), null != j) {
                                    if (null != F) throw Error(s(92));
                                    if (C(j)) {
                                        if (1 < j.length) throw Error(s(93));
                                        F = "" + j[0]
                                    }
                                    F = "" + j
                                }
                                return "string" == typeof F && "\n" === F[0] && e.push(to), null !== F && e.push(L(Z("" + F))), null;
                            case "input":
                                e.push(tu("input"));
                                var $, D = null,
                                    B = null,
                                    z = null,
                                    V = null,
                                    H = null,
                                    U = null,
                                    G = null,
                                    K = null,
                                    X = null;
                                for ($ in r)
                                    if (W.call(r, $)) {
                                        var Y = r[$];
                                        if (null != Y) switch ($) {
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                throw Error(s(399, "input"));
                                            case "name":
                                                D = Y;
                                                break;
                                            case "formAction":
                                                B = Y;
                                                break;
                                            case "formEncType":
                                                z = Y;
                                                break;
                                            case "formMethod":
                                                V = Y;
                                                break;
                                            case "formTarget":
                                                H = Y;
                                                break;
                                            case "defaultChecked":
                                                X = Y;
                                                break;
                                            case "defaultValue":
                                                G = Y;
                                                break;
                                            case "checked":
                                                K = Y;
                                                break;
                                            case "value":
                                                U = Y;
                                                break;
                                            default:
                                                eX(e, $, Y)
                                        }
                                    }
                                var J = eK(e, a, o, B, z, V, H, D);
                                return null !== K ? eV(e, "checked", K) : null !== X && eV(e, "checked", X), null !== U ? eX(e, "value", U) : null !== G && eX(e, "value", G), e.push(eZ), null != J && J.forEach(eU, e), null;
                            case "button":
                                e.push(tu("button"));
                                var ee, et = null,
                                    en = null,
                                    ea = null,
                                    es = null,
                                    eo = null,
                                    el = null,
                                    eu = null;
                                for (ee in r)
                                    if (W.call(r, ee)) {
                                        var ec = r[ee];
                                        if (null != ec) switch (ee) {
                                            case "children":
                                                et = ec;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                en = ec;
                                                break;
                                            case "name":
                                                ea = ec;
                                                break;
                                            case "formAction":
                                                es = ec;
                                                break;
                                            case "formEncType":
                                                eo = ec;
                                                break;
                                            case "formMethod":
                                                el = ec;
                                                break;
                                            case "formTarget":
                                                eu = ec;
                                                break;
                                            default:
                                                eX(e, ee, ec)
                                        }
                                    }
                                var ed = eK(e, a, o, es, eo, el, eu, ea);
                                if (e.push(eY), null != ed && ed.forEach(eU, e), eJ(e, en, et), "string" == typeof et) {
                                    e.push(L(Z(et)));
                                    var ef = null
                                } else ef = et;
                                return ef;
                            case "form":
                                e.push(tu("form"));
                                var eh, ep = null,
                                    em = null,
                                    eg = null,
                                    ey = null,
                                    eb = null,
                                    ev = null;
                                for (eh in r)
                                    if (W.call(r, eh)) {
                                        var ek = r[eh];
                                        if (null != ek) switch (eh) {
                                            case "children":
                                                ep = ek;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                em = ek;
                                                break;
                                            case "action":
                                                eg = ek;
                                                break;
                                            case "encType":
                                                ey = ek;
                                                break;
                                            case "method":
                                                eb = ek;
                                                break;
                                            case "target":
                                                ev = ek;
                                                break;
                                            default:
                                                eX(e, eh, ek)
                                        }
                                    }
                                var eS = null,
                                    ex = null;
                                if ("function" == typeof eg) {
                                    var ew = eQ(a, eg);
                                    null !== ew ? (eg = ew.action || "", ey = ew.encType, eb = ew.method, ev = ew.target, eS = ew.data, ex = ew.name) : (e.push(eD, L("action"), eL, eW, eB), ev = eb = ey = eg = null, e2(a, o))
                                }
                                if (null != eg && eX(e, "action", eg), null != ey && eX(e, "encType", ey), null != eb && eX(e, "method", eb), null != ev && eX(e, "target", ev), e.push(eY), null !== ex && (e.push(eH), eq(e, "name", ex), e.push(eZ), null != eS && eS.forEach(eU, e)), eJ(e, em, ep), "string" == typeof ep) {
                                    e.push(L(Z(ep)));
                                    var eP = null
                                } else eP = ep;
                                return eP;
                            case "menuitem":
                                for (var eC in e.push(tu("menuitem")), r)
                                    if (W.call(r, eC)) {
                                        var eT = r[eC];
                                        if (null != eT) switch (eC) {
                                            case "children":
                                            case "dangerouslySetInnerHTML":
                                                throw Error(s(400));
                                            default:
                                                eX(e, eC, eT)
                                        }
                                    }
                                return e.push(eY), null;
                            case "object":
                                e.push(tu("object"));
                                var e_, eE = null,
                                    eR = null;
                                for (e_ in r)
                                    if (W.call(r, e_)) {
                                        var eI = r[e_];
                                        if (null != eI) switch (e_) {
                                            case "children":
                                                eE = eI;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                eR = eI;
                                                break;
                                            case "data":
                                                var eM = er("" + eI);
                                                if ("" === eM) break;
                                                e.push(eD, L("data"), eL, L(Z(eM)), eB);
                                                break;
                                            default:
                                                eX(e, e_, eI)
                                        }
                                    }
                                if (e.push(eY), eJ(e, eR, eE), "string" == typeof eE) {
                                    e.push(L(Z(eE)));
                                    var eF = null
                                } else eF = eE;
                                return eF;
                            case "title":
                                var eA = 1 & u.tagScope,
                                    ej = 4 & u.tagScope;
                                if (4 === u.insertionMode || eA || null != r.itemProp) var eN = e7(e, r);
                                else ej ? eN = null : (e7(o.hoistableChunks, r), eN = void 0);
                                return eN;
                            case "link":
                                var ez = 1 & u.tagScope,
                                    eG = 4 & u.tagScope,
                                    e1 = r.rel,
                                    e3 = r.href,
                                    e5 = r.precedence;
                                if (4 === u.insertionMode || ez || null != r.itemProp || "string" != typeof e1 || "string" != typeof e3 || "" === e3) {
                                    e4(e, r);
                                    var ti = null
                                } else if ("stylesheet" === r.rel)
                                    if ("string" != typeof e5 || null != r.disabled || r.onLoad || r.onError) ti = e4(e, r);
                                    else {
                                        var tl = o.styles.get(e5),
                                            td = a.styleResources.hasOwnProperty(e3) ? a.styleResources[e3] : void 0;
                                        if (null !== td) {
                                            a.styleResources[e3] = null, tl || (tl = {
                                                precedence: L(Z(e5)),
                                                rules: [],
                                                hrefs: [],
                                                sheets: new Map
                                            }, o.styles.set(e5, tl));
                                            var th = {
                                                state: 0,
                                                props: q({}, r, {
                                                    "data-precedence": r.precedence,
                                                    precedence: null
                                                })
                                            };
                                            if (td) {
                                                2 === td.length && rj(th.props, td);
                                                var tp = o.preloads.stylesheets.get(e3);
                                                tp && 0 < tp.length ? tp.length = 0 : th.state = 1
                                            }
                                            tl.sheets.set(e3, th), l && l.stylesheets.add(th)
                                        } else if (tl) {
                                            var tm = tl.sheets.get(e3);
                                            tm && l && l.stylesheets.add(tm)
                                        }
                                        c && e.push(eO), ti = null
                                    }
                                else r.onLoad || r.onError ? ti = e4(e, r) : (c && e.push(eO), ti = eG ? null : e4(o.hoistableChunks, r));
                                return ti;
                            case "script":
                                var tg = 1 & u.tagScope,
                                    ty = r.async;
                                if ("string" != typeof r.src || !r.src || !ty || "function" == typeof ty || "symbol" == typeof ty || r.onLoad || r.onError || 4 === u.insertionMode || tg || null != r.itemProp) var tb = tn(e, r);
                                else {
                                    var tv = r.src;
                                    if ("module" === r.type) var tk = a.moduleScriptResources,
                                        tS = o.preloads.moduleScripts;
                                    else tk = a.scriptResources, tS = o.preloads.scripts;
                                    var tx = tk.hasOwnProperty(tv) ? tk[tv] : void 0;
                                    if (null !== tx) {
                                        tk[tv] = null;
                                        var tw = r;
                                        if (tx) {
                                            2 === tx.length && rj(tw = q({}, r), tx);
                                            var tP = tS.get(tv);
                                            tP && (tP.length = 0)
                                        }
                                        var tC = [];
                                        o.scripts.add(tC), tn(tC, tw)
                                    }
                                    c && e.push(eO), tb = null
                                }
                                return tb;
                            case "style":
                                var tT = 1 & u.tagScope,
                                    t_ = r.precedence,
                                    tE = r.href,
                                    tR = r.nonce;
                                if (4 === u.insertionMode || tT || null != r.itemProp || "string" != typeof t_ || "string" != typeof tE || "" === tE) {
                                    e.push(tu("style"));
                                    var tI, tO = null,
                                        tM = null;
                                    for (tI in r)
                                        if (W.call(r, tI)) {
                                            var tF = r[tI];
                                            if (null != tF) switch (tI) {
                                                case "children":
                                                    tO = tF;
                                                    break;
                                                case "dangerouslySetInnerHTML":
                                                    tM = tF;
                                                    break;
                                                default:
                                                    eX(e, tI, tF)
                                            }
                                        }
                                    e.push(eY);
                                    var tA = Array.isArray(tO) ? 2 > tO.length ? tO[0] : null : tO;
                                    "function" != typeof tA && "symbol" != typeof tA && null != tA && e.push(L(("" + tA).replace(e9, e6))), eJ(e, tM, tO), e.push(tf("style"));
                                    var tj = null
                                } else {
                                    var tN = o.styles.get(t_);
                                    if (null !== (a.styleResources.hasOwnProperty(tE) ? a.styleResources[tE] : void 0)) {
                                        a.styleResources[tE] = null, tN || (tN = {
                                            precedence: L(Z(t_)),
                                            rules: [],
                                            hrefs: [],
                                            sheets: new Map
                                        }, o.styles.set(t_, tN));
                                        var t$ = o.nonce.style;
                                        if (!t$ || t$ === tR) {
                                            tN.hrefs.push(L(Z(tE)));
                                            var tD, tL = tN.rules,
                                                tB = null,
                                                tz = null;
                                            for (tD in r)
                                                if (W.call(r, tD)) {
                                                    var tV = r[tD];
                                                    if (null != tV) switch (tD) {
                                                        case "children":
                                                            tB = tV;
                                                            break;
                                                        case "dangerouslySetInnerHTML":
                                                            tz = tV
                                                    }
                                                }
                                            var tq = Array.isArray(tB) ? 2 > tB.length ? tB[0] : null : tB;
                                            "function" != typeof tq && "symbol" != typeof tq && null != tq && tL.push(L(("" + tq).replace(e9, e6))), eJ(tL, tz, tB)
                                        }
                                    }
                                    tN && l && l.styles.add(tN), c && e.push(eO), tj = void 0
                                }
                                return tj;
                            case "meta":
                                var tW = 1 & u.tagScope,
                                    tH = 4 & u.tagScope;
                                if (4 === u.insertionMode || tW || null != r.itemProp) var tU = e8(e, r, "meta");
                                else c && e.push(eO), tU = tH ? null : "string" == typeof r.charSet ? e8(o.charsetChunks, r, "meta") : "viewport" === r.name ? e8(o.viewportChunks, r, "meta") : e8(o.hoistableChunks, r, "meta");
                                return tU;
                            case "listing":
                            case "pre":
                                e.push(tu(t));
                                var tG, tQ = null,
                                    tK = null;
                                for (tG in r)
                                    if (W.call(r, tG)) {
                                        var tX = r[tG];
                                        if (null != tX) switch (tG) {
                                            case "children":
                                                tQ = tX;
                                                break;
                                            case "dangerouslySetInnerHTML":
                                                tK = tX;
                                                break;
                                            default:
                                                eX(e, tG, tX)
                                        }
                                    }
                                if (e.push(eY), null != tK) {
                                    if (null != tQ) throw Error(s(60));
                                    if ("object" != typeof tK || !("__html" in tK)) throw Error(s(61));
                                    var tY = tK.__html;
                                    null != tY && ("string" == typeof tY && 0 < tY.length && "\n" === tY[0] ? e.push(to, L(tY)) : e.push(L("" + tY)))
                                }
                                return "string" == typeof tQ && "\n" === tQ[0] && e.push(to), tQ;
                            case "img":
                                var tZ = 3 & u.tagScope,
                                    tJ = r.src,
                                    t0 = r.srcSet;
                                if (!("lazy" === r.loading || !tJ && !t0 || "string" != typeof tJ && null != tJ || "string" != typeof t0 && null != t0 || "low" === r.fetchPriority || tZ) && ("string" != typeof tJ || ":" !== tJ[4] || "d" !== tJ[0] && "D" !== tJ[0] || "a" !== tJ[1] && "A" !== tJ[1] || "t" !== tJ[2] && "T" !== tJ[2] || "a" !== tJ[3] && "A" !== tJ[3]) && ("string" != typeof t0 || ":" !== t0[4] || "d" !== t0[0] && "D" !== t0[0] || "a" !== t0[1] && "A" !== t0[1] || "t" !== t0[2] && "T" !== t0[2] || "a" !== t0[3] && "A" !== t0[3])) {
                                    null !== l && 64 & u.tagScope && (l.suspenseyImages = !0);
                                    var t1 = "string" == typeof r.sizes ? r.sizes : void 0,
                                        t2 = t0 ? t0 + "\n" + (t1 || "") : tJ,
                                        t3 = o.preloads.images,
                                        t5 = t3.get(t2);
                                    if (t5)("high" === r.fetchPriority || 10 > o.highImagePreloads.size) && (t3.delete(t2), o.highImagePreloads.add(t5));
                                    else if (!a.imageResources.hasOwnProperty(t2)) {
                                        a.imageResources[t2] = ei;
                                        var t4, t9 = r.crossOrigin,
                                            t6 = "string" == typeof t9 ? "use-credentials" === t9 ? t9 : "" : void 0,
                                            t8 = o.headers;
                                        t8 && 0 < t8.remainingCapacity && "string" != typeof r.srcSet && ("high" === r.fetchPriority || 500 > t8.highImagePreloads.length) && (t4 = rN(tJ, "image", {
                                            imageSrcSet: r.srcSet,
                                            imageSizes: r.sizes,
                                            crossOrigin: t6,
                                            integrity: r.integrity,
                                            nonce: r.nonce,
                                            type: r.type,
                                            fetchPriority: r.fetchPriority,
                                            referrerPolicy: r.refererPolicy
                                        }), 0 <= (t8.remainingCapacity -= t4.length + 2)) ? (o.resets.image[t2] = ei, t8.highImagePreloads && (t8.highImagePreloads += ", "), t8.highImagePreloads += t4) : (e4(t5 = [], {
                                            rel: "preload",
                                            as: "image",
                                            href: t0 ? void 0 : tJ,
                                            imageSrcSet: t0,
                                            imageSizes: t1,
                                            crossOrigin: t6,
                                            integrity: r.integrity,
                                            type: r.type,
                                            fetchPriority: r.fetchPriority,
                                            referrerPolicy: r.referrerPolicy
                                        }), "high" === r.fetchPriority || 10 > o.highImagePreloads.size ? o.highImagePreloads.add(t5) : (o.bulkPreloads.add(t5), t3.set(t2, t5)))
                                    }
                                }
                                return e8(e, r, "img");
                            case "base":
                            case "area":
                            case "br":
                            case "col":
                            case "embed":
                            case "hr":
                            case "keygen":
                            case "param":
                            case "source":
                            case "track":
                            case "wbr":
                                return e8(e, r, t);
                            case "head":
                                if (2 > u.insertionMode) {
                                    var t7 = i || o.preamble;
                                    if (t7.headChunks) throw Error(s(545, "`<head>`"));
                                    null !== i && e.push(te), t7.headChunks = [];
                                    var re = ta(t7.headChunks, r, "head")
                                } else re = ts(e, r, "head");
                                return re;
                            case "body":
                                if (2 > u.insertionMode) {
                                    var rt = i || o.preamble;
                                    if (rt.bodyChunks) throw Error(s(545, "`<body>`"));
                                    null !== i && e.push(tt), rt.bodyChunks = [];
                                    var rr = ta(rt.bodyChunks, r, "body")
                                } else rr = ts(e, r, "body");
                                return rr;
                            case "html":
                                if (0 === u.insertionMode) {
                                    var rn = i || o.preamble;
                                    if (rn.htmlChunks) throw Error(s(545, "`<html>`"));
                                    null !== i && e.push(tr), rn.htmlChunks = [tc];
                                    var ra = ta(rn.htmlChunks, r, "html")
                                } else ra = ts(e, r, "html");
                                return ra;
                            default:
                                if (-1 !== t.indexOf("-")) {
                                    e.push(tu(t));
                                    var rs, ro = null,
                                        ri = null;
                                    for (rs in r)
                                        if (W.call(r, rs)) {
                                            var rl = r[rs];
                                            if (null != rl) {
                                                var ru = rs;
                                                switch (rs) {
                                                    case "children":
                                                        ro = rl;
                                                        break;
                                                    case "dangerouslySetInnerHTML":
                                                        ri = rl;
                                                        break;
                                                    case "style":
                                                        e$(e, rl);
                                                        break;
                                                    case "suppressContentEditableWarning":
                                                    case "suppressHydrationWarning":
                                                    case "ref":
                                                        break;
                                                    case "className":
                                                        ru = "class";
                                                    default:
                                                        if (Q(rs) && "function" != typeof rl && "symbol" != typeof rl && !1 !== rl) {
                                                            if (!0 === rl) rl = "";
                                                            else if ("object" == typeof rl) continue;
                                                            e.push(eD, L(ru), eL, L(Z(rl)), eB)
                                                        }
                                                }
                                            }
                                        }
                                    return e.push(eY), eJ(e, ri, ro), ro
                                }
                        }
                        return ts(e, r, t)
                    }(S.chunks, a, o, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, S.lastPushedText), S.lastPushedText = !1, T = t.formatContext, i = t.keyPath, t.keyPath = r, 3 === (t.formatContext = e_(T, a, o)).insertionMode) {
                    r = nG(e, 0, null, t.formatContext, !1, !1), S.preambleChildren.push(r), t.blockedSegment = r;
                    try {
                        r.status = 6, ao(e, t, E, -1), r.lastPushedText && r.textEmbedded && r.chunks.push(eO), r.status = 1, ah(e, t.blockedBoundary, r)
                    } finally {
                        t.blockedSegment = S
                    }
                } else ao(e, t, E, -1);
                t.formatContext = T, t.keyPath = i;
                e: {
                    switch (t = S.chunks, e = e.resumableState, a) {
                        case "title":
                        case "style":
                        case "script":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "img":
                        case "input":
                        case "keygen":
                        case "link":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                            break e;
                        case "body":
                            if (1 >= T.insertionMode) {
                                e.hasBody = !0;
                                break e
                            }
                            break;
                        case "html":
                            if (0 === T.insertionMode) {
                                e.hasHtml = !0;
                                break e
                            }
                            break;
                        case "head":
                            if (1 >= T.insertionMode) break e
                    }
                    t.push(tf(a))
                }
                S.lastPushedText = !1
            }
        else {
            switch (a) {
                case k:
                case u:
                case c:
                case l:
                    a = t.keyPath, t.keyPath = r, n8(e, t, o.children, -1), t.keyPath = a;
                    return;
                case v:
                    null === (a = t.blockedSegment) ? "hidden" !== o.mode && (a = t.keyPath, t.keyPath = r, ao(e, t, o.children, -1), t.keyPath = a) : "hidden" !== o.mode && (a.chunks.push(tb), a.lastPushedText = !1, S = t.keyPath, t.keyPath = r, ao(e, t, o.children, -1), t.keyPath = S, a.chunks.push(tv), a.lastPushedText = !1);
                    return;
                case m:
                    e: {
                        if (a = o.children, "forwards" === (o = o.revealOrder) || "backwards" === o || "unstable_legacy-backwards" === o) {
                            if (C(a)) {
                                n3(e, t, r, a, o);
                                break e
                            }
                            if ((S = P(a)) && (S = S.call(a))) {
                                if (!(T = S.next()).done) {
                                    do T = S.next(); while (!T.done) n3(e, t, r, a, o)
                                }
                                break e
                            }
                        }
                        "together" === o ? (o = t.keyPath, S = t.row, (T = t.row = n2(null)).boundaries = [], T.together = !0, t.keyPath = r, n8(e, t, a, -1), 0 == --T.pendingTasks && nJ(e, T), t.keyPath = o, t.row = S, null !== S && 0 < T.pendingTasks && (S.pendingTasks++, T.next = S)) : (o = t.keyPath, t.keyPath = r, n8(e, t, a, -1), t.keyPath = o)
                    }
                    return;
                case x:
                case b:
                    throw Error(s(343));
                case p:
                    e: if (null !== t.replay) {
                        a = t.keyPath, S = t.formatContext, T = t.row, t.keyPath = r, t.formatContext = eI(e.resumableState, S), t.row = null, r = o.children;
                        try {
                            ao(e, t, r, -1)
                        } finally {
                            t.keyPath = a, t.formatContext = S, t.row = T
                        }
                    } else {
                        a = t.keyPath, i = t.formatContext;
                        var R = t.row;
                        _ = t.blockedBoundary, w = t.blockedPreamble;
                        var I = t.hoistableState,
                            O = t.blockedSegment,
                            M = o.fallback;
                        o = o.children;
                        var F = new Set,
                            A = 2 > t.formatContext.insertionMode ? nW(e, t.row, F, eP(), eP()) : nW(e, t.row, F, null, null);
                        null !== e.trackedPostpones && (A.trackedContentKeyPath = r);
                        var j = nG(e, O.chunks.length, A, t.formatContext, !1, !1);
                        O.children.push(j), O.lastPushedText = !1;
                        var N = nG(e, 0, null, t.formatContext, !1, !1);
                        if (N.parentFlushed = !0, null !== e.trackedPostpones) {
                            S = t.componentStack, E = [(T = [r[0], "Suspense Fallback", r[2]])[1], T[2],
                                [], null
                            ], e.trackedPostpones.workingMap.set(T, E), A.trackedFallbackNode = E, t.blockedSegment = j, t.blockedPreamble = A.fallbackPreamble, t.keyPath = T, t.formatContext = eR(e.resumableState, i), t.componentStack = nK(S), j.status = 6;
                            try {
                                ao(e, t, M, -1), j.lastPushedText && j.textEmbedded && j.chunks.push(eO), j.status = 1, ah(e, _, j)
                            } catch (t) {
                                throw j.status = 12 === e.status ? 3 : 4, t
                            } finally {
                                t.blockedSegment = O, t.blockedPreamble = w, t.keyPath = a, t.formatContext = i
                            }
                            nQ(t = nH(e, null, o, -1, A, N, A.contentPreamble, A.contentState, t.abortSet, r, eI(e.resumableState, t.formatContext), t.context, t.treeContext, null, S)), e.pingedTasks.push(t)
                        } else {
                            t.blockedBoundary = A, t.blockedPreamble = A.contentPreamble, t.hoistableState = A.contentState, t.blockedSegment = N, t.keyPath = r, t.formatContext = eI(e.resumableState, i), t.row = null, N.status = 6;
                            try {
                                if (ao(e, t, o, -1), N.lastPushedText && N.textEmbedded && N.chunks.push(eO), N.status = 1, ah(e, A, N), af(A, N), 0 === A.pendingTasks && 0 === A.status) {
                                    if (A.status = 1, !n$(e, A)) {
                                        null !== R && 0 == --R.pendingTasks && nJ(e, R), 0 === e.pendingRootTasks && t.blockedPreamble && ab(e);
                                        break e
                                    }
                                } else null !== R && R.together && n1(e, R)
                            } catch (r) {
                                A.status = 4, 12 === e.status ? (N.status = 3, S = e.fatalError) : (N.status = 4, S = r), A.errorDigest = E = nY(e, S, T = nX(t.componentStack)), an(e, A)
                            } finally {
                                t.blockedBoundary = _, t.blockedPreamble = w, t.hoistableState = I, t.blockedSegment = O, t.keyPath = a, t.formatContext = i, t.row = R
                            }
                            nQ(t = nH(e, null, M, -1, _, j, A.fallbackPreamble, A.fallbackState, F, [r[0], "Suspense Fallback", r[2]], eR(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, nK(t.componentStack))), e.pingedTasks.push(t)
                        }
                    }
                    return
            }
            if ("object" == typeof a && null !== a) switch (a.$$typeof) {
                case h:
                    if ("ref" in o)
                        for (O in S = {}, o) "ref" !== O && (S[O] = o[O]);
                    else S = o;
                    a = n5(e, t, r, a.render, S, i), n4(e, t, r, a, 0 !== ni, nl, nu);
                    return;
                case g:
                    n9(e, t, r, a.type, o, i);
                    return;
                case f:
                    if (T = o.children, S = t.keyPath, o = o.value, E = a._currentValue, a._currentValue = o, rK = a = {
                            parent: i = rK,
                            depth: null === i ? 0 : i.depth + 1,
                            context: a,
                            parentValue: E,
                            value: o
                        }, t.context = a, t.keyPath = r, n8(e, t, T, -1), null === (e = rK)) throw Error(s(403));
                    e.context._currentValue = e.parentValue, e = rK = e.parent, t.context = e, t.keyPath = S;
                    return;
                case d:
                    a = (o = o.children)(a._context._currentValue), o = t.keyPath, t.keyPath = r, n8(e, t, a, -1), t.keyPath = o;
                    return;
                case y:
                    if (a = (S = a._init)(a._payload), 12 === e.status) throw null;
                    n9(e, t, r, a, o, i);
                    return
            }
            throw Error(s(130, null == a ? a : typeof a, ""))
        }
    }

    function n6(e, t, r, n, a) {
        var s = t.replay,
            o = t.blockedBoundary,
            i = nG(e, 0, null, t.formatContext, !1, !1);
        i.id = r, i.parentFlushed = !0;
        try {
            t.replay = null, t.blockedSegment = i, ao(e, t, n, a), i.status = 1, ah(e, o, i), null === o ? e.completedRootSegment = i : (af(o, i), o.parentFlushed && e.partialBoundaries.push(o))
        } finally {
            t.replay = s, t.blockedSegment = null
        }
    }

    function n8(e, t, r, n) {
        null !== t.replay && "number" == typeof t.replay.slots ? n6(e, t, t.replay.slots, r, n) : (t.node = r, t.childIndex = n, r = t.componentStack, nQ(t), n7(e, t), t.componentStack = r)
    }

    function n7(e, t) {
        var r = t.node,
            n = t.childIndex;
        if (null !== r) {
            if ("object" == typeof r) {
                switch (r.$$typeof) {
                    case o:
                        var a = r.type,
                            l = r.key,
                            u = r.props,
                            c = void 0 !== (r = u.ref) ? r : null,
                            d = rG(a),
                            h = null == l ? -1 === n ? 0 : n : l;
                        if (l = [t.keyPath, d, h], null !== t.replay) e: {
                            var m = t.replay;
                            for (r = 0, n = m.nodes; r < n.length; r++) {
                                var g = n[r];
                                if (h === g[1]) {
                                    if (4 === g.length) {
                                        if (null !== d && d !== g[0]) throw Error(s(490, g[0], d));
                                        var b = g[2];
                                        d = g[3], h = t.node, t.replay = {
                                            nodes: b,
                                            slots: d,
                                            pendingTasks: 1
                                        };
                                        try {
                                            if (n9(e, t, l, a, u, c), 1 === t.replay.pendingTasks && 0 < t.replay.nodes.length) throw Error(s(488));
                                            t.replay.pendingTasks--
                                        } catch (s) {
                                            if ("object" == typeof s && null !== s && (s === r4 || "function" == typeof s.then)) throw t.node === h ? t.replay = m : n.splice(r, 1), s;
                                            t.replay.pendingTasks--, u = nX(t.componentStack), l = e, e = t.blockedBoundary, u = nY(l, a = s, u), al(l, e, b, d, a, u)
                                        }
                                        t.replay = m
                                    } else {
                                        if (a !== p) throw Error(s(490, "Suspense", rG(a) || "Unknown"));
                                        t: {
                                            m = void 0,
                                            a = g[5],
                                            c = g[2],
                                            d = g[3],
                                            h = null === g[4] ? [] : g[4][2],
                                            g = null === g[4] ? null : g[4][3];
                                            var v = t.keyPath,
                                                k = t.formatContext,
                                                S = t.row,
                                                x = t.replay,
                                                w = t.blockedBoundary,
                                                T = t.hoistableState,
                                                _ = u.children,
                                                E = u.fallback,
                                                R = new Set;
                                            (u = 2 > t.formatContext.insertionMode ? nW(e, t.row, R, eP(), eP()) : nW(e, t.row, R, null, null)).parentFlushed = !0,
                                            u.rootSegmentID = a,
                                            t.blockedBoundary = u,
                                            t.hoistableState = u.contentState,
                                            t.keyPath = l,
                                            t.formatContext = eI(e.resumableState, k),
                                            t.row = null,
                                            t.replay = {
                                                nodes: c,
                                                slots: d,
                                                pendingTasks: 1
                                            };
                                            try {
                                                if (ao(e, t, _, -1), 1 === t.replay.pendingTasks && 0 < t.replay.nodes.length) throw Error(s(488));
                                                if (t.replay.pendingTasks--, 0 === u.pendingTasks && 0 === u.status) {
                                                    u.status = 1, e.completedBoundaries.push(u);
                                                    break t
                                                }
                                            } catch (r) {
                                                u.status = 4, m = nY(e, r, b = nX(t.componentStack)), u.errorDigest = m, t.replay.pendingTasks--, e.clientRenderedBoundaries.push(u)
                                            } finally {
                                                t.blockedBoundary = w, t.hoistableState = T, t.replay = x, t.keyPath = v, t.formatContext = k, t.row = S
                                            }
                                            nQ(b = nU(e, null, {
                                                nodes: h,
                                                slots: g,
                                                pendingTasks: 0
                                            }, E, -1, w, u.fallbackState, R, [l[0], "Suspense Fallback", l[2]], eR(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, nK(t.componentStack))),
                                            e.pingedTasks.push(b)
                                        }
                                    }
                                    n.splice(r, 1);
                                    break e
                                }
                            }
                        }
                        else n9(e, t, l, a, u, c);
                        return;
                    case i:
                        throw Error(s(257));
                    case y:
                        if (r = (b = r._init)(r._payload), 12 === e.status) throw null;
                        n8(e, t, r, n);
                        return
                }
                if (C(r)) return void ae(e, t, r, n);
                if ((b = P(r)) && (b = b.call(r))) {
                    if (!(r = b.next()).done) {
                        u = [];
                        do u.push(r.value), r = b.next(); while (!r.done) ae(e, t, u, n)
                    }
                    return
                }
                if ("function" == typeof r.then) return t.thenableState = null, n8(e, t, n_(r), n);
                if (r.$$typeof === f) return n8(e, t, r._currentValue, n);
                throw Error(s(31, "[object Object]" === (n = Object.prototype.toString.call(r)) ? "object with keys {" + Object.keys(r).join(", ") + "}" : n))
            }
            "string" == typeof r ? null !== (n = t.blockedSegment) && (n.lastPushedText = eM(n.chunks, r, e.renderState, n.lastPushedText)) : ("number" == typeof r || "bigint" == typeof r) && null !== (n = t.blockedSegment) && (n.lastPushedText = eM(n.chunks, "" + r, e.renderState, n.lastPushedText))
        }
    }

    function ae(e, t, r, n) {
        var a = t.keyPath;
        if (-1 !== n && (t.keyPath = [t.keyPath, "Fragment", n], null !== t.replay)) {
            for (var o = t.replay, i = o.nodes, l = 0; l < i.length; l++) {
                var u = i[l];
                if (u[1] === n) {
                    t.replay = {
                        nodes: n = u[2],
                        slots: u = u[3],
                        pendingTasks: 1
                    };
                    try {
                        if (ae(e, t, r, -1), 1 === t.replay.pendingTasks && 0 < t.replay.nodes.length) throw Error(s(488));
                        t.replay.pendingTasks--
                    } catch (a) {
                        if ("object" == typeof a && null !== a && (a === r4 || "function" == typeof a.then)) throw a;
                        t.replay.pendingTasks--, r = nX(t.componentStack);
                        var c = t.blockedBoundary;
                        r = nY(e, a, r), al(e, c, n, u, a, r)
                    }
                    t.replay = o, i.splice(l, 1);
                    break
                }
            }
            t.keyPath = a;
            return
        }
        if (o = t.treeContext, i = r.length, null !== t.replay && null !== (l = t.replay.slots) && "object" == typeof l) {
            for (n = 0; n < i; n++) u = r[n], t.treeContext = r0(o, i, n), "number" == typeof(c = l[n]) ? (n6(e, t, c, u, n), delete l[n]) : ao(e, t, u, n);
            t.treeContext = o, t.keyPath = a;
            return
        }
        for (l = 0; l < i; l++) n = r[l], t.treeContext = r0(o, i, l), ao(e, t, n, l);
        t.treeContext = o, t.keyPath = a
    }

    function at(e, t, r) {
        if (r.status = 5, r.rootSegmentID = e.nextSegmentId++, null === (e = r.trackedContentKeyPath)) throw Error(s(486));
        var n = r.trackedFallbackNode,
            a = t.workingMap.get(e);
        return void 0 === a ? (r = [e[1], e[2],
            [], null, n, r.rootSegmentID
        ], t.workingMap.set(e, r), aO(r, e[0], t), r) : (a[4] = n, a[5] = r.rootSegmentID, a)
    }

    function ar(e, t, r, n) {
        n.status = 5;
        var a = r.keyPath,
            o = r.blockedBoundary;
        if (null === o) n.id = e.nextSegmentId++, t.rootSlots = n.id, null !== e.completedRootSegment && (e.completedRootSegment.status = 5);
        else {
            if (null !== o && 0 === o.status) {
                var i = at(e, t, o);
                if (o.trackedContentKeyPath === a && -1 === r.childIndex) {
                    -1 === n.id && (n.id = n.parentFlushed ? o.rootSegmentID : e.nextSegmentId++), i[3] = n.id;
                    return
                }
            }
            if (-1 === n.id && (n.id = n.parentFlushed && null !== o ? o.rootSegmentID : e.nextSegmentId++), -1 === r.childIndex) null === a ? t.rootSlots = n.id : void 0 === (r = t.workingMap.get(a)) ? aO(r = [a[1], a[2],
                [], n.id
            ], a[0], t) : r[3] = n.id;
            else {
                if (null === a) {
                    if (null === (e = t.rootSlots)) e = t.rootSlots = {};
                    else if ("number" == typeof e) throw Error(s(491))
                } else if (void 0 === (i = (o = t.workingMap).get(a))) e = {}, i = [a[1], a[2],
                    [], e
                ], o.set(a, i), aO(i, a[0], t);
                else if (null === (e = i[3])) e = i[3] = {};
                else if ("number" == typeof e) throw Error(s(491));
                e[r.childIndex] = n.id
            }
        }
    }

    function an(e, t) {
        null !== (e = e.trackedPostpones) && null !== (t = t.trackedContentKeyPath) && void 0 !== (t = e.workingMap.get(t)) && (t.length = 4, t[2] = [], t[3] = null)
    }

    function aa(e, t, r) {
        return nU(e, r, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack)
    }

    function as(e, t, r) {
        var n = t.blockedSegment,
            a = nG(e, n.chunks.length, null, t.formatContext, n.lastPushedText, !0);
        return n.children.push(a), n.lastPushedText = !1, nH(e, r, t.node, t.childIndex, t.blockedBoundary, a, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack)
    }

    function ao(e, t, r, n) {
        var a = t.formatContext,
            s = t.context,
            o = t.keyPath,
            i = t.treeContext,
            l = t.componentStack,
            u = t.blockedSegment;
        if (null === u) {
            u = t.replay;
            try {
                return n8(e, t, r, n)
            } catch (c) {
                if (nb(), r = c === r4 ? r6() : c, 12 !== e.status && "object" == typeof r && null !== r) {
                    if ("function" == typeof r.then) {
                        e = aa(e, t, n = c === r4 ? ny() : null).ping, r.then(e, e), t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, t.componentStack = l, t.replay = u, rY(s);
                        return
                    }
                    if ("Maximum call stack size exceeded" === r.message) {
                        r = aa(e, t, r = c === r4 ? ny() : null), e.pingedTasks.push(r), t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, t.componentStack = l, t.replay = u, rY(s);
                        return
                    }
                }
            }
        } else {
            var c = u.children.length,
                d = u.chunks.length;
            try {
                return n8(e, t, r, n)
            } catch (n) {
                if (nb(), u.children.length = c, u.chunks.length = d, r = n === r4 ? r6() : n, 12 !== e.status && "object" == typeof r && null !== r) {
                    if ("function" == typeof r.then) {
                        u = r, e = as(e, t, r = n === r4 ? ny() : null).ping, u.then(e, e), t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, t.componentStack = l, rY(s);
                        return
                    }
                    if ("Maximum call stack size exceeded" === r.message) {
                        u = as(e, t, u = n === r4 ? ny() : null), e.pingedTasks.push(u), t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, t.componentStack = l, rY(s);
                        return
                    }
                }
            }
        }
        throw t.formatContext = a, t.context = s, t.keyPath = o, t.treeContext = i, rY(s), r
    }

    function ai(e) {
        var t = e.blockedBoundary,
            r = e.blockedSegment;
        null !== r && (r.status = 3, ap(this, t, e.row, r))
    }

    function al(e, t, r, n, a, o) {
        for (var i = 0; i < r.length; i++) {
            var l = r[i];
            if (4 === l.length) al(e, t, l[2], l[3], a, o);
            else {
                l = l[5];
                var u = nW(e, null, new Set, null, null);
                u.parentFlushed = !0, u.rootSegmentID = l, u.status = 4, u.errorDigest = o, u.parentFlushed && e.clientRenderedBoundaries.push(u)
            }
        }
        if (r.length = 0, null !== n) {
            if (null === t) throw Error(s(487));
            if (4 !== t.status && (t.status = 4, t.errorDigest = o, t.parentFlushed && e.clientRenderedBoundaries.push(t)), "object" == typeof n)
                for (var c in n) delete n[c]
        }
    }

    function au(e, t) {
        try {
            var r = e.renderState,
                n = r.onHeaders;
            if (n) {
                var a = r.headers;
                if (a) {
                    r.headers = null;
                    var s = a.preconnects;
                    if (a.fontPreloads && (s && (s += ", "), s += a.fontPreloads), a.highImagePreloads && (s && (s += ", "), s += a.highImagePreloads), !t) {
                        var o = r.styles.values(),
                            i = o.next();
                        t: for (; 0 < a.remainingCapacity && !i.done; i = o.next())
                            for (var l = i.value.sheets.values(), u = l.next(); 0 < a.remainingCapacity && !u.done; u = l.next()) {
                                var c = u.value,
                                    d = c.props,
                                    f = d.href,
                                    h = c.props,
                                    p = rN(h.href, "style", {
                                        crossOrigin: h.crossOrigin,
                                        integrity: h.integrity,
                                        nonce: h.nonce,
                                        type: h.type,
                                        fetchPriority: h.fetchPriority,
                                        referrerPolicy: h.referrerPolicy,
                                        media: h.media
                                    });
                                if (0 <= (a.remainingCapacity -= p.length + 2)) r.resets.style[f] = ei, s && (s += ", "), s += p, r.resets.style[f] = "string" == typeof d.crossOrigin || "string" == typeof d.integrity ? [d.crossOrigin, d.integrity] : ei;
                                else break t
                            }
                    }
                    n(s ? {
                        Link: s
                    } : {})
                }
            }
        } catch (t) {
            nY(e, t, {})
        }
    }

    function ac(e) {
        null === e.trackedPostpones && au(e, !0), null === e.trackedPostpones && ab(e), e.onShellError = r5, (e = e.onShellReady)()
    }

    function ad(e) {
        au(e, null === e.trackedPostpones || null === e.completedRootSegment || 5 !== e.completedRootSegment.status), ab(e), (e = e.onAllReady)()
    }

    function af(e, t) {
        if (0 === t.chunks.length && 1 === t.children.length && null === t.children[0].boundary && -1 === t.children[0].id) {
            var r = t.children[0];
            r.id = t.id, r.parentFlushed = !0, 1 !== r.status && 3 !== r.status && 4 !== r.status || af(e, r)
        } else e.completedSegments.push(t)
    }

    function ah(e, t, r) {
        if (null !== z) {
            r = r.chunks;
            for (var n = 0, a = 0; a < r.length; a++) n += r[a].byteLength;
            null === t ? e.byteSize += n : t.byteSize += n
        }
    }

    function ap(e, t, r, n) {
        if (null !== r && (0 == --r.pendingTasks ? nJ(e, r) : r.together && n1(e, r)), e.allPendingTasks--, null === t) {
            if (null !== n && n.parentFlushed) {
                if (null !== e.completedRootSegment) throw Error(s(389));
                e.completedRootSegment = n
            }
            e.pendingRootTasks--, 0 === e.pendingRootTasks && ac(e)
        } else if (t.pendingTasks--, 4 !== t.status)
            if (0 === t.pendingTasks) {
                if (0 === t.status && (t.status = 1), null !== n && n.parentFlushed && (1 === n.status || 3 === n.status) && af(t, n), t.parentFlushed && e.completedBoundaries.push(t), 1 === t.status) null !== (r = t.row) && rq(r.hoistables, t.contentState), n$(e, t) || (t.fallbackAbortableTasks.forEach(ai, e), t.fallbackAbortableTasks.clear(), null !== r && 0 == --r.pendingTasks && nJ(e, r)), 0 === e.pendingRootTasks && null === e.trackedPostpones && null !== t.contentPreamble && ab(e);
                else if (5 === t.status && null !== (t = t.row)) {
                    if (null !== e.trackedPostpones) {
                        r = e.trackedPostpones;
                        var a = t.next;
                        if (null !== a && null !== (n = a.boundaries))
                            for (a.boundaries = null, a = 0; a < n.length; a++) {
                                var o = n[a];
                                at(e, r, o), ap(e, o, null, null)
                            }
                    }
                    0 == --t.pendingTasks && nJ(e, t)
                }
            } else null === n || !n.parentFlushed || 1 !== n.status && 3 !== n.status || (af(t, n), 1 === t.completedSegments.length && t.parentFlushed && e.partialBoundaries.push(t)), null !== (t = t.row) && t.together && n1(e, t);
        0 === e.allPendingTasks && ad(e)
    }

    function am(e) {
        if (14 !== e.status && 13 !== e.status) {
            var t = rK,
                r = en.H;
            en.H = nO;
            var n = en.A;
            en.A = nF;
            var a = nV;
            nV = e;
            var o = nM;
            nM = e.resumableState;
            try {
                var i, l = e.pingedTasks;
                for (i = 0; i < l.length; i++) {
                    var u = l[i],
                        c = e,
                        d = u.blockedSegment;
                    if (null === d) {
                        var f = c;
                        if (0 !== u.replay.pendingTasks) {
                            rY(u.context);
                            try {
                                if ("number" == typeof u.replay.slots ? n6(f, u, u.replay.slots, u.node, u.childIndex) : n7(f, u), 1 === u.replay.pendingTasks && 0 < u.replay.nodes.length) throw Error(s(488));
                                u.replay.pendingTasks--, u.abortSet.delete(u), ap(f, u.blockedBoundary, u.row, null)
                            } catch (e) {
                                nb();
                                var h = e === r4 ? r6() : e;
                                if ("object" == typeof h && null !== h && "function" == typeof h.then) {
                                    var p = u.ping;
                                    h.then(p, p), u.thenableState = e === r4 ? ny() : null
                                } else {
                                    u.replay.pendingTasks--, u.abortSet.delete(u);
                                    var m = nX(u.componentStack);
                                    c = void 0;
                                    var g = f,
                                        y = u.blockedBoundary,
                                        b = 12 === f.status ? f.fatalError : h,
                                        v = u.replay.nodes,
                                        k = u.replay.slots;
                                    c = nY(g, b, m), al(g, y, v, k, b, c), f.pendingRootTasks--, 0 === f.pendingRootTasks && ac(f), f.allPendingTasks--, 0 === f.allPendingTasks && ad(f)
                                }
                            } finally {}
                        }
                    } else if (f = void 0, g = d, 0 === g.status) {
                        g.status = 6, rY(u.context);
                        var S = g.children.length,
                            x = g.chunks.length;
                        try {
                            n7(c, u), g.lastPushedText && g.textEmbedded && g.chunks.push(eO), u.abortSet.delete(u), g.status = 1, ah(c, u.blockedBoundary, g), ap(c, u.blockedBoundary, u.row, g)
                        } catch (e) {
                            nb(), g.children.length = S, g.chunks.length = x;
                            var w = e === r4 ? r6() : 12 === c.status ? c.fatalError : e;
                            if (12 === c.status && null !== c.trackedPostpones) {
                                var P = c.trackedPostpones,
                                    C = nX(u.componentStack);
                                u.abortSet.delete(u), nY(c, w, C), ar(c, P, u, g), ap(c, u.blockedBoundary, u.row, g)
                            } else if ("object" == typeof w && null !== w && "function" == typeof w.then) {
                                g.status = 0, u.thenableState = e === r4 ? ny() : null;
                                var T = u.ping;
                                w.then(T, T)
                            } else {
                                var _ = nX(u.componentStack);
                                u.abortSet.delete(u), g.status = 4;
                                var E = u.blockedBoundary,
                                    R = u.row;
                                if (null !== R && 0 == --R.pendingTasks && nJ(c, R), c.allPendingTasks--, f = nY(c, w, _), null === E) nZ(c, w);
                                else if (E.pendingTasks--, 4 !== E.status) {
                                    E.status = 4, E.errorDigest = f, an(c, E);
                                    var I = E.row;
                                    null !== I && 0 == --I.pendingTasks && nJ(c, I), E.parentFlushed && c.clientRenderedBoundaries.push(E), 0 === c.pendingRootTasks && null === c.trackedPostpones && null !== E.contentPreamble && ab(c)
                                }
                                0 === c.allPendingTasks && ad(c)
                            }
                        } finally {}
                    }
                }
                l.splice(0, i), null !== e.destination && aT(e, e.destination)
            } catch (t) {
                nY(e, t, {}), nZ(e, t)
            } finally {
                nM = o, en.H = r, en.A = n, r === nO && rY(t), nV = a
            }
        }
    }

    function ag(e, t, r) {
        t.preambleChildren.length && r.push(t.preambleChildren);
        for (var n = !1, a = 0; a < t.children.length; a++) n = ay(e, t.children[a], r) || n;
        return n
    }

    function ay(e, t, r) {
        var n = t.boundary;
        if (null === n) return ag(e, t, r);
        var a = n.contentPreamble,
            o = n.fallbackPreamble;
        if (null === a || null === o) return !1;
        switch (n.status) {
            case 1:
                if (th(e.renderState, a), e.byteSize += n.byteSize, !(t = n.completedSegments[0])) throw Error(s(391));
                return ag(e, t, r);
            case 5:
                if (null !== e.trackedPostpones) return !0;
            case 4:
                if (1 === t.status) return th(e.renderState, o), ag(e, t, r);
            default:
                return !0
        }
    }

    function ab(e) {
        if (e.completedRootSegment && null === e.completedPreambleSegments) {
            var t = [],
                r = e.byteSize,
                n = ay(e, e.completedRootSegment, t),
                a = e.renderState.preamble;
            !1 === n || a.headChunks && a.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = r
        }
    }

    function av(e, t, r, n) {
        switch (r.parentFlushed = !0, r.status) {
            case 0:
                r.id = e.nextSegmentId++;
            case 5:
                return n = r.id, r.lastPushedText = !1, r.textEmbedded = !1, e = e.renderState, j(t, tg), j(t, e.placeholderPrefix), j(t, e = L(n.toString(16))), N(t, ty);
            case 1:
                r.status = 2;
                var a = !0,
                    o = r.chunks,
                    i = 0;
                r = r.children;
                for (var l = 0; l < r.length; l++) {
                    for (a = r[l]; i < a.index; i++) j(t, o[i]);
                    a = aS(e, t, a, n)
                }
                for (; i < o.length - 1; i++) j(t, o[i]);
                return i < o.length && (a = N(t, o[i])), a;
            case 3:
                return !0;
            default:
                throw Error(s(390))
        }
    }
    var ak = 0;

    function aS(e, t, r, n) {
        var a = r.boundary;
        if (null === a) return av(e, t, r, n);
        if (a.parentFlushed = !0, 4 === a.status) {
            var o = a.row;
            null !== o && 0 == --o.pendingTasks && nJ(e, o), a = a.errorDigest, N(t, tw), j(t, tC), a && (j(t, t_), j(t, L(Z(a))), j(t, tT)), N(t, tE), av(e, t, r, n)
        } else if (1 !== a.status) 0 === a.status && (a.rootSegmentID = e.nextSegmentId++), 0 < a.completedSegments.length && e.partialBoundaries.push(a), tR(t, e.renderState, a.rootSegmentID), n && rq(n, a.fallbackState), av(e, t, r, n);
        else if (!aC && n$(e, a) && (ak + a.byteSize > e.progressiveChunkSize || rW(a.contentState))) a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), tR(t, e.renderState, a.rootSegmentID), av(e, t, r, n);
        else {
            if (ak += a.byteSize, n && rq(n, a.contentState), null !== (r = a.row) && n$(e, a) && 0 == --r.pendingTasks && nJ(e, r), N(t, tk), 1 !== (r = a.completedSegments).length) throw Error(s(391));
            aS(e, t, r[0], n)
        }
        return N(t, tP)
    }

    function ax(e, t, r, n) {
        switch (! function(e, t, r, n) {
            switch (r.insertionMode) {
                case 0:
                case 1:
                case 3:
                case 2:
                    return j(e, tI), j(e, t.segmentPrefix), j(e, L(n.toString(16))), N(e, tO);
                case 4:
                    return j(e, tF), j(e, t.segmentPrefix), j(e, L(n.toString(16))), N(e, tA);
                case 5:
                    return j(e, tN), j(e, t.segmentPrefix), j(e, L(n.toString(16))), N(e, t$);
                case 6:
                    return j(e, tL), j(e, t.segmentPrefix), j(e, L(n.toString(16))), N(e, tB);
                case 7:
                    return j(e, tV), j(e, t.segmentPrefix), j(e, L(n.toString(16))), N(e, tq);
                case 8:
                    return j(e, tH), j(e, t.segmentPrefix), j(e, L(n.toString(16))), N(e, tU);
                case 9:
                    return j(e, tQ), j(e, t.segmentPrefix), j(e, L(n.toString(16))), N(e, tK);
                default:
                    throw Error(s(397))
            }
        }(t, e.renderState, r.parentFormatContext, r.id), aS(e, t, r, n), r.parentFormatContext.insertionMode) {
            case 0:
            case 1:
            case 3:
            case 2:
                return N(t, tM);
            case 4:
                return N(t, tj);
            case 5:
                return N(t, tD);
            case 6:
                return N(t, tz);
            case 7:
                return N(t, tW);
            case 8:
                return N(t, tG);
            case 9:
                return N(t, tX);
            default:
                throw Error(s(397))
        }
    }

    function aw(e, t, r) {
        ak = r.byteSize;
        for (var n, a, o = r.completedSegments, i = 0; i < o.length; i++) aP(e, t, r, o[i]);
        o.length = 0, null !== (o = r.row) && n$(e, r) && 0 == --o.pendingTasks && nJ(e, o), rg(t, r.contentState, e.renderState), o = e.resumableState, e = e.renderState, i = r.rootSegmentID, r = r.contentState;
        var l = e.stylesToHoist;
        return e.stylesToHoist = !1, j(t, e.startInlineScript), j(t, eY), l ? (0 == (4 & o.instructions) && (o.instructions |= 4, j(t, t7)), 0 == (2 & o.instructions) && (o.instructions |= 2, j(t, t1)), 0 == (8 & o.instructions) ? (o.instructions |= 8, j(t, t3)) : j(t, t5)) : (0 == (2 & o.instructions) && (o.instructions |= 2, j(t, t1)), j(t, t2)), o = L(i.toString(16)), j(t, e.boundaryPrefix), j(t, o), j(t, t4), j(t, e.segmentPrefix), j(t, o), l ? (j(t, t9), n = r, j(t, rI), a = rI, n.stylesheets.forEach(function(e) {
            if (2 !== e.state)
                if (3 === e.state) j(t, a), j(t, L(ri("" + e.props.href))), j(t, rF), a = rO;
                else {
                    j(t, a);
                    var r = e.props["data-precedence"],
                        n = e.props;
                    for (var o in j(t, L(ri(er("" + e.props.href)))), r = "" + r, j(t, rM), j(t, L(ri(r))), n)
                        if (W.call(n, o) && null != (r = n[o])) switch (o) {
                            case "href":
                            case "rel":
                            case "precedence":
                            case "data-precedence":
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(s(399, "link"));
                            default:
                                ! function(e, t, r) {
                                    var n = t.toLowerCase();
                                    switch (typeof r) {
                                        case "function":
                                        case "symbol":
                                            return
                                    }
                                    switch (t) {
                                        case "innerHTML":
                                        case "dangerouslySetInnerHTML":
                                        case "suppressContentEditableWarning":
                                        case "suppressHydrationWarning":
                                        case "style":
                                        case "ref":
                                            return;
                                        case "className":
                                            n = "class", t = "" + r;
                                            break;
                                        case "hidden":
                                            if (!1 === r) return;
                                            t = "";
                                            break;
                                        case "src":
                                        case "href":
                                            t = "" + (r = er(r));
                                            break;
                                        default:
                                            if (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]) || !Q(t)) return;
                                            t = "" + r
                                    }
                                    j(e, rM), j(e, L(ri(n))), j(e, rM), j(e, L(ri(t)))
                                }(t, o, r)
                        }
                    j(t, rF), a = rO, e.state = 3
                }
        }), j(t, rF)) : j(t, t6), r = N(t, t8), tp(t, e) && r
    }

    function aP(e, t, r, n) {
        if (2 === n.status) return !0;
        var a = r.contentState,
            o = n.id;
        if (-1 === o) {
            if (-1 === (n.id = r.rootSegmentID)) throw Error(s(392));
            return ax(e, t, n, a)
        }
        return o === r.rootSegmentID ? ax(e, t, n, a) : (ax(e, t, n, a), r = e.resumableState, j(t, (e = e.renderState).startInlineScript), j(t, eY), 0 == (1 & r.instructions) ? (r.instructions |= 1, j(t, tY)) : j(t, tZ), j(t, e.segmentPrefix), j(t, o = L(o.toString(16))), j(t, tJ), j(t, e.placeholderPrefix), j(t, o), t = N(t, t0))
    }
    var aC = !1;

    function aT(e, t) {
        F = new Uint8Array(2048), A = 0;
        try {
            if (!(0 < e.pendingRootTasks)) {
                var r, n = e.completedRootSegment;
                if (null !== n) {
                    if (5 === n.status) return;
                    var a = e.completedPreambleSegments;
                    if (null === a) return;
                    ak = e.byteSize;
                    var s, o = e.resumableState,
                        i = e.renderState,
                        l = i.preamble,
                        u = l.htmlChunks,
                        c = l.headChunks;
                    if (u) {
                        for (s = 0; s < u.length; s++) j(t, u[s]);
                        if (c)
                            for (s = 0; s < c.length; s++) j(t, c[s]);
                        else j(t, tu("head")), j(t, eY)
                    } else if (c)
                        for (s = 0; s < c.length; s++) j(t, c[s]);
                    var d = i.charsetChunks;
                    for (s = 0; s < d.length; s++) j(t, d[s]);
                    d.length = 0, i.preconnects.forEach(ry, t), i.preconnects.clear();
                    var f = i.viewportChunks;
                    for (s = 0; s < f.length; s++) j(t, f[s]);
                    f.length = 0, i.fontPreloads.forEach(ry, t), i.fontPreloads.clear(), i.highImagePreloads.forEach(ry, t), i.highImagePreloads.clear(), el = i, i.styles.forEach(rC, t), el = null;
                    var h = i.importMapChunks;
                    for (s = 0; s < h.length; s++) j(t, h[s]);
                    h.length = 0, i.bootstrapScripts.forEach(ry, t), i.scripts.forEach(ry, t), i.scripts.clear(), i.bulkPreloads.forEach(ry, t), i.bulkPreloads.clear(), u || c || (o.instructions |= 32);
                    var p = i.hoistableChunks;
                    for (s = 0; s < p.length; s++) j(t, p[s]);
                    for (o = p.length = 0; o < a.length; o++) {
                        var m = a[o];
                        for (i = 0; i < m.length; i++) aS(e, t, m[i], null)
                    }
                    var g = e.renderState.preamble,
                        y = g.headChunks;
                    (g.htmlChunks || y) && j(t, tf("head"));
                    var b = g.bodyChunks;
                    if (b)
                        for (a = 0; a < b.length; a++) j(t, b[a]);
                    aS(e, t, n, null), e.completedRootSegment = null;
                    var v = e.renderState;
                    if (0 !== e.allPendingTasks || 0 !== e.clientRenderedBoundaries.length || 0 !== e.completedBoundaries.length || null !== e.trackedPostpones && (0 !== e.trackedPostpones.rootNodes.length || null !== e.trackedPostpones.rootSlots)) {
                        var k = e.resumableState;
                        if (0 == (64 & k.instructions)) {
                            if (k.instructions |= 64, j(t, v.startInlineScript), 0 == (32 & k.instructions)) {
                                k.instructions |= 32;
                                var S = "_" + k.idPrefix + "R_";
                                j(t, rE), j(t, L(Z(S))), j(t, eB)
                            }
                            j(t, eY), j(t, tm), N(t, ec)
                        }
                    }
                    tp(t, v)
                }
                var x = e.renderState;
                n = 0;
                var w = x.viewportChunks;
                for (n = 0; n < w.length; n++) j(t, w[n]);
                w.length = 0, x.preconnects.forEach(ry, t), x.preconnects.clear(), x.fontPreloads.forEach(ry, t), x.fontPreloads.clear(), x.highImagePreloads.forEach(ry, t), x.highImagePreloads.clear(), x.styles.forEach(r_, t), x.scripts.forEach(ry, t), x.scripts.clear(), x.bulkPreloads.forEach(ry, t), x.bulkPreloads.clear();
                var P = x.hoistableChunks;
                for (n = 0; n < P.length; n++) j(t, P[n]);
                P.length = 0;
                var C = e.clientRenderedBoundaries;
                for (r = 0; r < C.length; r++) {
                    var T, _ = C[r];
                    x = t;
                    var E = e.resumableState,
                        R = e.renderState,
                        I = _.rootSegmentID,
                        O = _.errorDigest;
                    j(x, R.startInlineScript), j(x, eY), 0 == (4 & E.instructions) ? (E.instructions |= 4, j(x, re)) : j(x, rt), j(x, R.boundaryPrefix), j(x, L(I.toString(16))), j(x, rr), O && (j(x, rn), j(x, L((T = O || "", JSON.stringify(T).replace(rs, function(e) {
                        switch (e) {
                            case "<":
                                return "\\u003c";
                            case "\u2028":
                                return "\\u2028";
                            case "\u2029":
                                return "\\u2029";
                            default:
                                throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")
                        }
                    })))));
                    var M = N(x, ra);
                    if (!M) {
                        e.destination = null, r++, C.splice(0, r);
                        return
                    }
                }
                C.splice(0, r);
                var D = e.completedBoundaries;
                for (r = 0; r < D.length; r++)
                    if (!aw(e, t, D[r])) {
                        e.destination = null, r++, D.splice(0, r);
                        return
                    }
                D.splice(0, r), $(t), F = new Uint8Array(2048), A = 0, aC = !0;
                var B = e.partialBoundaries;
                for (r = 0; r < B.length; r++) {
                    var z = B[r];
                    e: {
                        C = e,
                        _ = t,
                        ak = z.byteSize;
                        var V = z.completedSegments;
                        for (M = 0; M < V.length; M++)
                            if (!aP(C, _, z, V[M])) {
                                M++, V.splice(0, M);
                                var q = !1;
                                break e
                            }
                        V.splice(0, M);
                        var W = z.row;null !== W && W.together && 1 === z.pendingTasks && (1 === W.pendingTasks ? n0(C, W, W.hoistables) : W.pendingTasks--),
                        q = rg(_, z.contentState, C.renderState)
                    }
                    if (!q) {
                        e.destination = null, r++, B.splice(0, r);
                        return
                    }
                }
                B.splice(0, r), aC = !1;
                var H = e.completedBoundaries;
                for (r = 0; r < H.length; r++)
                    if (!aw(e, t, H[r])) {
                        e.destination = null, r++, H.splice(0, r);
                        return
                    }
                H.splice(0, r)
            }
        } finally {
            aC = !1, 0 === e.allPendingTasks && 0 === e.clientRenderedBoundaries.length && 0 === e.completedBoundaries.length ? (e.flushScheduled = !1, (r = e.resumableState).hasBody && j(t, tf("body")), r.hasHtml && j(t, tf("html")), $(t), e.status = 14, t.close(), e.destination = null) : $(t)
        }
    }

    function a_(e) {
        e.flushScheduled = null !== e.destination, M(function() {
            return am(e)
        }), R(function() {
            10 === e.status && (e.status = 11), null === e.trackedPostpones && au(e, 0 === e.pendingRootTasks)
        })
    }

    function aE(e) {
        !1 === e.flushScheduled && 0 === e.pingedTasks.length && null !== e.destination && (e.flushScheduled = !0, R(function() {
            var t = e.destination;
            t ? aT(e, t) : e.flushScheduled = !1
        }))
    }

    function aR(e, t) {
        if (13 === e.status) e.status = 14, V(t, e.fatalError);
        else if (14 !== e.status && null === e.destination) {
            e.destination = t;
            try {
                aT(e, t)
            } catch (t) {
                nY(e, t, {}), nZ(e, t)
            }
        }
    }

    function aI(e, t) {
        (11 === e.status || 10 === e.status) && (e.status = 12);
        try {
            var r = e.abortableTasks;
            if (0 < r.size) {
                var n = void 0 === t ? Error(s(432)) : "object" == typeof t && null !== t && "function" == typeof t.then ? Error(s(530)) : t;
                e.fatalError = n, r.forEach(function(t) {
                    return function e(t, r, n) {
                        var a = t.blockedBoundary,
                            s = t.blockedSegment;
                        if (null !== s) {
                            if (6 === s.status) return;
                            s.status = 3
                        }
                        var o = nX(t.componentStack);
                        if (null === a) {
                            if (13 !== r.status && 14 !== r.status) {
                                if (null === (a = t.replay)) return void(null !== r.trackedPostpones && null !== s ? (a = r.trackedPostpones, nY(r, n, o), ar(r, a, t, s), ap(r, null, t.row, s)) : (nY(r, n, o), nZ(r, n)));
                                a.pendingTasks--, 0 === a.pendingTasks && 0 < a.nodes.length && (s = nY(r, n, o), al(r, null, a.nodes, a.slots, n, s)), r.pendingRootTasks--, 0 === r.pendingRootTasks && ac(r)
                            }
                        } else {
                            var i = r.trackedPostpones;
                            if (4 !== a.status) {
                                if (null !== i && null !== s) return nY(r, n, o), ar(r, i, t, s), a.fallbackAbortableTasks.forEach(function(t) {
                                    return e(t, r, n)
                                }), a.fallbackAbortableTasks.clear(), ap(r, a, t.row, s);
                                a.status = 4, s = nY(r, n, o), a.status = 4, a.errorDigest = s, an(r, a), a.parentFlushed && r.clientRenderedBoundaries.push(a)
                            }
                            a.pendingTasks--, null !== (s = a.row) && 0 == --s.pendingTasks && nJ(r, s), a.fallbackAbortableTasks.forEach(function(t) {
                                return e(t, r, n)
                            }), a.fallbackAbortableTasks.clear()
                        }
                        null !== (t = t.row) && 0 == --t.pendingTasks && nJ(r, t), r.allPendingTasks--, 0 === r.allPendingTasks && ad(r)
                    }(t, e, n)
                }), r.clear()
            }
            null !== e.destination && aT(e, e.destination)
        } catch (t) {
            nY(e, t, {}), nZ(e, t)
        }
    }

    function aO(e, t, r) {
        if (null === t) r.rootNodes.push(e);
        else {
            var n = r.workingMap,
                a = n.get(t);
            void 0 === a && (a = [t[1], t[2],
                [], null
            ], n.set(t, a), aO(a, t[0], r)), a[2].push(e)
        }
    }

    function aM(e) {
        var t = e.trackedPostpones;
        if (null === t || 0 === t.rootNodes.length && null === t.rootSlots) return e.trackedPostpones = null;
        if (null === e.completedRootSegment || 5 !== e.completedRootSegment.status && null !== e.completedPreambleSegments) {
            var r = e.nextSegmentId,
                n = t.rootSlots,
                a = e.resumableState;
            a.bootstrapScriptContent = void 0, a.bootstrapScripts = void 0, a.bootstrapModules = void 0
        } else {
            r = 0, n = -1, a = e.resumableState;
            var s = e.renderState;
            a.nextFormID = 0, a.hasBody = !1, a.hasHtml = !1, a.unknownResources = {
                font: s.resets.font
            }, a.dnsResources = s.resets.dns, a.connectResources = s.resets.connect, a.imageResources = s.resets.image, a.styleResources = s.resets.style, a.scriptResources = {}, a.moduleUnknownResources = {}, a.moduleScriptResources = {}, a.instructions = 0
        }
        return {
            nextSegmentId: r,
            rootFormatContext: e.rootFormatContext,
            progressiveChunkSize: e.progressiveChunkSize,
            resumableState: e.resumableState,
            replayNodes: t.rootNodes,
            replaySlots: n
        }
    }

    function aF() {
        var e = n.version;
        if ("19.2.3" !== e) throw Error(s(527, e, "19.2.3"))
    }
    aF(), aF(), r.prerender = function(e, t) {
        return new Promise(function(r, n) {
            var a, s, o, i, l, u = t ? t.onHeaders : void 0;
            u && (l = function(e) {
                u(new Headers(e))
            });
            var c = ew(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0),
                d = (a = e, s = ex(c, void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, l, t ? t.maxHeadersLength : void 0), o = eT(t ? t.namespaceURI : void 0), i = t ? t.progressiveChunkSize : void 0, (a = nB(a, c, s, o, i, t ? t.onError : void 0, function() {
                    var e = new ReadableStream({
                        type: "bytes",
                        pull: function(e) {
                            aR(d, e)
                        },
                        cancel: function(e) {
                            d.destination = null, aI(d, e)
                        }
                    }, {
                        highWaterMark: 0
                    });
                    r(e = {
                        postponed: aM(d),
                        prelude: e
                    })
                }, void 0, void 0, n, t ? t.onPostpone : void 0, void 0)).trackedPostpones = {
                    workingMap: new Map,
                    rootNodes: [],
                    rootSlots: null
                }, a);
            if (t && t.signal) {
                var f = t.signal;
                if (f.aborted) aI(d, f.reason);
                else {
                    var h = function() {
                        aI(d, f.reason), f.removeEventListener("abort", h)
                    };
                    f.addEventListener("abort", h)
                }
            }
            a_(d)
        })
    }, r.renderToReadableStream = function(e, t) {
        return new Promise(function(r, n) {
            var a, s, o, i = new Promise(function(e, t) {
                    s = e, a = t
                }),
                l = t ? t.onHeaders : void 0;
            l && (o = function(e) {
                l(new Headers(e))
            });
            var u = ew(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0),
                c = nB(e, u, ex(u, t ? t.nonce : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, o, t ? t.maxHeadersLength : void 0), eT(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, s, function() {
                    var e = new ReadableStream({
                        type: "bytes",
                        pull: function(e) {
                            aR(c, e)
                        },
                        cancel: function(e) {
                            c.destination = null, aI(c, e)
                        }
                    }, {
                        highWaterMark: 0
                    });
                    e.allReady = i, r(e)
                }, function(e) {
                    i.catch(function() {}), n(e)
                }, a, t ? t.onPostpone : void 0, t ? t.formState : void 0);
            if (t && t.signal) {
                var d = t.signal;
                if (d.aborted) aI(c, d.reason);
                else {
                    var f = function() {
                        aI(c, d.reason), d.removeEventListener("abort", f)
                    };
                    d.addEventListener("abort", f)
                }
            }
            a_(c)
        })
    }, r.resume = function(e, t, r) {
        return new Promise(function(n, a) {
            var s, o, i = new Promise(function(e, t) {
                    o = e, s = t
                }),
                l = nz(e, t, ex(t.resumableState, r ? r.nonce : void 0, void 0, void 0, void 0, void 0), r ? r.onError : void 0, o, function() {
                    var e = new ReadableStream({
                        type: "bytes",
                        pull: function(e) {
                            aR(l, e)
                        },
                        cancel: function(e) {
                            l.destination = null, aI(l, e)
                        }
                    }, {
                        highWaterMark: 0
                    });
                    e.allReady = i, n(e)
                }, function(e) {
                    i.catch(function() {}), a(e)
                }, s, r ? r.onPostpone : void 0);
            if (r && r.signal) {
                var u = r.signal;
                if (u.aborted) aI(l, u.reason);
                else {
                    var c = function() {
                        aI(l, u.reason), u.removeEventListener("abort", c)
                    };
                    u.addEventListener("abort", c)
                }
            }
            a_(l)
        })
    }, r.resumeAndPrerender = function(e, t, r) {
        return new Promise(function(n, a) {
            var s, o, i = (s = e, o = ex(t.resumableState, void 0, void 0, void 0, void 0, void 0), (s = nz(s, t, o, r ? r.onError : void 0, function() {
                var e = new ReadableStream({
                    type: "bytes",
                    pull: function(e) {
                        aR(i, e)
                    },
                    cancel: function(e) {
                        i.destination = null, aI(i, e)
                    }
                }, {
                    highWaterMark: 0
                });
                n(e = {
                    postponed: aM(i),
                    prelude: e
                })
            }, void 0, void 0, a, r ? r.onPostpone : void 0)).trackedPostpones = {
                workingMap: new Map,
                rootNodes: [],
                rootSlots: null
            }, s);
            if (r && r.signal) {
                var l = r.signal;
                if (l.aborted) aI(i, l.reason);
                else {
                    var u = function() {
                        aI(i, l.reason), l.removeEventListener("abort", u)
                    };
                    l.addEventListener("abort", u)
                }
            }
            a_(i)
        })
    }, r.version = "19.2.3"
}, 681688, (e, t, r) => {
    "use strict";
    var n, a;
    n = e.r(947964), a = e.r(901288), r.version = n.version, r.renderToString = n.renderToString, r.renderToStaticMarkup = n.renderToStaticMarkup, r.renderToReadableStream = a.renderToReadableStream, r.resume = a.resume
}, 94339, 310410, 673981, 5309, e => {
    "use strict";
    var t = e.i(391398);
    let r = e => {
        let {
            direction: r
        } = e;
        return (0, t.jsx)("svg", {
            width: "100%",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M1.19585 7.46241L6.34436 12.8342C6.58048 13.0807 6.9375 13.0484 7.14087 12.7637C7.34498 12.4785 7.319 12.0478 7.08287 11.8013L3.13647 7.68436L12.4351 7.68435C12.7469 7.68435 13 7.37918 13 7.00214C13 6.6251 12.7469 6.31992 12.4351 6.31992L2.99449 6.31992L5.24393 3.89533L7.00115 2.21707C7.24556 1.9833 7.28736 1.55441 7.09379 1.25879C6.98232 1.08869 6.81699 0.999999 6.65015 0.999999C6.52738 0.999999 6.40386 1.04775 6.29991 1.14736L4.51746 2.85199L1.18907 6.43772C1.0678 6.56825 0.998884 6.75563 1.00001 6.95211C1.00152 7.14813 1.07232 7.33415 1.19585 7.46241Z",
                fill: "currentColor",
                stroke: "currentColor",
                style: "right" === r ? {
                    transformOrigin: "center"
                } : {},
                transform: "right" === r ? "rotate(180 0 0)" : void 0
            })
        })
    };
    e.s(["NavArrow", 0, r, "default", 0, r], 94339), e.s(["default", 0, function(e) {
        let t = 0;
        return 0 === e.length ? t : (Array.from(e).forEach((r, n) => {
            t = (t << 5) - t + e.charCodeAt(n) | 0
        }), Math.abs(t))
    }], 310410), e.s(["default", 0, function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = RegExp("</?([^>]+)(>|$)", "gi");
        return (e = e.replace(r, (e, r) => t && t.includes(r) ? e : "")).trim()
    }], 673981);
    var n = e.i(666742);
    class a {
        static makeHomepageStructuredData() {
            return {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Cash App",
                url: "https://cash.app",
                logo: {
                    "@type": "ImageObject",
                    url: "https://cash-f.squarecdn.com/static/favicon.svg"
                }
            }
        }
        static makeBreadcrumbListStructuredData(e, t, r) {
            let a = [{
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://cash.app"
            }];
            if (!t) return {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: a
            };
            if (r && !(0, n.isEquivalentPath)(t, r.fields.urlPath) && a.push({
                    "@type": "ListItem",
                    position: 2,
                    name: r.fields.title,
                    item: `https://cash.app/${r.fields.urlPath}`
                }), !(0, n.isHomePage)(t)) {
                let r = e.fields.breadcrumbName || (0, n.slugToName)(t) || e.fields.title;
                a.push({
                    "@type": "ListItem",
                    position: a.length + 1,
                    name: r,
                    item: t
                })
            }
            return {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: a
            }
        }
        static makeFaqPageStructuredData(e, t) {
            return e.faqItems ? .length ? {
                "@type": "FAQPage",
                "@context": "https://schema.org",
                mainEntity: e.faqItems.map(e => ({
                    "@type": "Question",
                    name: e.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: t(e.answer)
                    }
                }))
            } : e.faqSegments ? .length ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: e.faqSegments.flatMap(e => e.faqItems.map(e => ({
                    "@type": "Question",
                    name: e.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: t(e.answer)
                    }
                })))
            } : void 0
        }
    }
    e.s(["StructuredDataModelFactory", () => a], 5309)
}]);
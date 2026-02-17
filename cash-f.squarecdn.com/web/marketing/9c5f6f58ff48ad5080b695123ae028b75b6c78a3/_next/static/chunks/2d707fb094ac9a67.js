(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 517735, e => {
    e.v({
        errorMessage: "base-form-styles-module-sass-module__DjeePa__errorMessage",
        field: "base-form-styles-module-sass-module__DjeePa__field",
        fieldWrapper: "base-form-styles-module-sass-module__DjeePa__fieldWrapper",
        hasError: "base-form-styles-module-sass-module__DjeePa__hasError",
        label: "base-form-styles-module-sass-module__DjeePa__label"
    })
}, 923004, 280716, 920176, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(517735),
        o = e.i(191788),
        n = e.i(272043);

    function i(e, t) {
        let [r, n] = (0, o.useState)({
            isValid: !0,
            errorMessage: ""
        });
        return (0, o.useEffect)(() => {
            r.isValid ? e.current.setAttribute("aria-invalid", !1) : e.current.setAttribute("aria-invalid", !0)
        }, [r, e]), (0, o.useEffect)(() => {
            let r = e.current;
            if (!r) return;
            let o = () => {
                    n({
                        isValid: !0,
                        errorMessage: ""
                    }), r.checkValidity()
                },
                i = () => {
                    r.validity.valueMissing ? n({
                        isValid: !1,
                        errorMessage: "Required"
                    }) : r.validity.typeMismatch || r.validity.patternMismatch || t ? .minValue !== void 0 && r.value < t.minValue ? n({
                        isValid: !1,
                        errorMessage: t.errorMessage
                    }) : t ? .maxValue !== void 0 && r.value > t.minValue && n({
                        isValid: !1,
                        errorMessage: t.errorMessage
                    })
                };
            return t ? .pattern && r.setAttribute("pattern", t.pattern), t ? .minValue !== void 0 && r.setAttribute("min", t.minValue.toString()), t ? .maxValue !== void 0 && r.setAttribute("max", t.maxValue.toString()), r.addEventListener("invalid", i), r.addEventListener("blur", o), () => {
                r.removeEventListener("invalid", i), r.removeEventListener("blur", o)
            }
        }, [e, t]), r
    }
    e.s(["useValidation", () => i], 280716);
    var l = e.i(399430);
    e.s(["default", 0, e => {
        let c = `label_${e.name}`,
            a = (0, o.useRef)(null),
            {
                isValid: u,
                errorMessage: s
            } = i(a, e.validation),
            f = "custom" === e.name ? e.labelText : null;
        return (0, t.jsxs)("div", {
            className: (0, n.default)(r.default.fieldWrapper, e.className || ""),
            children: [(0, t.jsx)("label", {
                "aria-label": e.labelText,
                id: c,
                className: r.default.label,
                children: e.labelText
            }), (0, t.jsx)("input", {
                ref: a,
                type: e.fieldType || "text",
                name: e.name,
                required: e.required,
                placeholder: e.placeholderText,
                "aria-labelledby": c,
                autoComplete: e.autoComplete || "false",
                className: (0, n.default)(r.default.field, {
                    [r.default.hasError]: !u
                }),
                style: {
                    backgroundColor: e.backgroundColor || l.colorWhite
                },
                "aria-invalid": e.required,
                ...f ? {
                    "data-custom-title": f
                } : null,
                ...e.value ? {
                    value: e.value
                } : null,
                ...e.onChangeHandler ? {
                    onChange: t => e.onChangeHandler(t.target.value)
                } : null
            }), (0, t.jsx)("div", {
                className: r.default.errorMessage,
                ...!u ? {
                    role: "alert"
                } : {},
                children: s
            })]
        })
    }], 923004), e.s(["default", 0, {
        fullName: "^[a-zA-ZÀ-ɏḀ-ỿ, .'-]+$",
        cashtag: "^[$][a-zA-Z0-9]{4,}",
        email: "[a-zA-Z0-9-_.+]+@[a-zA-Z]+\\.[a-zA-Z]+",
        phoneNumber: "^(\\+?\\d{0,2})?[\\D]?\\(?(\\d{3})\\)?[\\D]?(\\d{3})[\\D]?(\\d{4})$",
        url: "^https?:\\/\\/[a-z0-9\\-\\.]+\\.[a-z0-9]{2,6}[a-zA-Z0-9\\/\\.?=_\\-]+",
        hexCode: "^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
        appsFlyerId: "[a-zA-Z0-9]+$"
    }], 920176)
}, 920955, (e, t, r) => {
    var o = {
            229: function(e) {
                var t, r, o, n = e.exports = {};

                function i() {
                    throw Error("setTimeout has not been defined")
                }

                function l() {
                    throw Error("clearTimeout has not been defined")
                }
                try {
                    t = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    t = i
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : l
                } catch (e) {
                    r = l
                }

                function c(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
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
                var a = [],
                    u = !1,
                    s = -1;

                function f() {
                    u && o && (u = !1, o.length ? a = o.concat(a) : s = -1, a.length && d())
                }

                function d() {
                    if (!u) {
                        var e = c(f);
                        u = !0;
                        for (var t = a.length; t;) {
                            for (o = a, a = []; ++s < t;) o && o[s].run();
                            s = -1, t = a.length
                        }
                        o = null, u = !1,
                            function(e) {
                                if (r === clearTimeout) return clearTimeout(e);
                                if ((r === l || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
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

                function y() {}
                n.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    a.push(new p(e, t)), 1 !== a.length || u || c(d)
                }, p.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = y, n.addListener = y, n.once = y, n.off = y, n.removeListener = y, n.removeAllListeners = y, n.emit = y, n.prependListener = y, n.prependOnceListener = y, n.listeners = function(e) {
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

    function i(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var r = n[e] = {
                exports: {}
            },
            l = !0;
        try {
            o[e](r, r.exports, i), l = !1
        } finally {
            l && delete n[e]
        }
        return r.exports
    }
    i.ab = "/ROOT/node_modules/next/dist/compiled/process/", t.exports = i(229)
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
            for (var i in r = {}, t) "key" !== i && (r[i] = t[i]);
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
        i = Symbol.for("react.portal"),
        l = Symbol.for("react.fragment"),
        c = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        u = Symbol.for("react.consumer"),
        s = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        h = Symbol.for("react.activity"),
        g = Symbol.iterator,
        m = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        v = Object.assign,
        _ = {};

    function b(e, t, r) {
        this.props = e, this.context = t, this.refs = _, this.updater = r || m
    }

    function S() {}

    function C(e, t, r) {
        this.props = e, this.context = t, this.refs = _, this.updater = r || m
    }
    b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, S.prototype = b.prototype;
    var E = C.prototype = new S;
    E.constructor = C, v(E, b.prototype), E.isPureReactComponent = !0;
    var x = Array.isArray;

    function w() {}
    var k = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        O = Object.prototype.hasOwnProperty;

    function T(e, t, r) {
        var o = r.ref;
        return {
            $$typeof: n,
            type: e,
            key: t,
            ref: void 0 !== o ? o : null,
            props: r
        }
    }

    function j(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
    }
    var A = /\/+/g;

    function P(e, t) {
        var r, o;
        return "object" == typeof e && null !== e && null != e.key ? (r = "" + e.key, o = {
            "=": "=0",
            ":": "=2"
        }, "$" + r.replace(/[=:]/g, function(e) {
            return o[e]
        })) : t.toString(36)
    }

    function M(e, t, r) {
        if (null == e) return e;
        var o = [],
            l = 0;
        return ! function e(t, r, o, l, c) {
            var a, u, s, f = typeof t;
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
                        case i:
                            d = !0;
                            break;
                        case y:
                            return e((d = t._init)(t._payload), r, o, l, c)
                    }
            }
            if (d) return c = c(t), d = "" === l ? "." + P(t, 0) : l, x(c) ? (o = "", null != d && (o = d.replace(A, "$&/") + "/"), e(c, r, o, "", function(e) {
                return e
            })) : null != c && (j(c) && (a = c, u = o + (null == c.key || t && t.key === c.key ? "" : ("" + c.key).replace(A, "$&/") + "/") + d, c = T(a.type, u, a.props)), r.push(c)), 1;
            d = 0;
            var p = "" === l ? "." : l + ":";
            if (x(t))
                for (var h = 0; h < t.length; h++) f = p + P(l = t[h], h), d += e(l, r, o, f, c);
            else if ("function" == typeof(h = null === (s = t) || "object" != typeof s ? null : "function" == typeof(s = g && s[g] || s["@@iterator"]) ? s : null))
                for (t = h.call(t), h = 0; !(l = t.next()).done;) f = p + P(l = l.value, h++), d += e(l, r, o, f, c);
            else if ("object" === f) {
                if ("function" == typeof t.then) return e(function(e) {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            switch ("string" == typeof e.status ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
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
                }(t), r, o, l, c);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (r = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.")
            }
            return d
        }(e, o, "", "", function(e) {
            return t.call(r, e, l++)
        }), o
    }

    function F(e) {
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
    r.Activity = h, r.Children = {
        map: M,
        forEach: function(e, t, r) {
            M(e, function() {
                t.apply(this, arguments)
            }, r)
        },
        count: function(e) {
            var t = 0;
            return M(e, function() {
                t++
            }), t
        },
        toArray: function(e) {
            return M(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!j(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    }, r.Component = b, r.Fragment = l, r.Profiler = a, r.PureComponent = C, r.StrictMode = c, r.Suspense = d, r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return k.H.useMemoCache(e)
        }
    }, r.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }, r.cacheSignal = function() {
        return null
    }, r.cloneElement = function(e, t, r) {
        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
        var o = v({}, e.props),
            n = e.key;
        if (null != t)
            for (i in void 0 !== t.key && (n = "" + t.key), t) O.call(t, i) && "key" !== i && "__self" !== i && "__source" !== i && ("ref" !== i || void 0 !== t.ref) && (o[i] = t[i]);
        var i = arguments.length - 2;
        if (1 === i) o.children = r;
        else if (1 < i) {
            for (var l = Array(i), c = 0; c < i; c++) l[c] = arguments[c + 2];
            o.children = l
        }
        return T(e.type, n, o)
    }, r.createContext = function(e) {
        return (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = e, e.Consumer = {
            $$typeof: u,
            _context: e
        }, e
    }, r.createElement = function(e, t, r) {
        var o, n = {},
            i = null;
        if (null != t)
            for (o in void 0 !== t.key && (i = "" + t.key), t) O.call(t, o) && "key" !== o && "__self" !== o && "__source" !== o && (n[o] = t[o]);
        var l = arguments.length - 2;
        if (1 === l) n.children = r;
        else if (1 < l) {
            for (var c = Array(l), a = 0; a < l; a++) c[a] = arguments[a + 2];
            n.children = c
        }
        if (e && e.defaultProps)
            for (o in l = e.defaultProps) void 0 === n[o] && (n[o] = l[o]);
        return T(e, i, n)
    }, r.createRef = function() {
        return {
            current: null
        }
    }, r.forwardRef = function(e) {
        return {
            $$typeof: f,
            render: e
        }
    }, r.isValidElement = j, r.lazy = function(e) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: F
        }
    }, r.memo = function(e, t) {
        return {
            $$typeof: p,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, r.startTransition = function(e) {
        var t = k.T,
            r = {};
        k.T = r;
        try {
            var o = e(),
                n = k.S;
            null !== n && n(r, o), "object" == typeof o && null !== o && "function" == typeof o.then && o.then(w, B)
        } catch (e) {
            B(e)
        } finally {
            null !== t && null !== r.types && (t.types = r.types), k.T = t
        }
    }, r.unstable_useCacheRefresh = function() {
        return k.H.useCacheRefresh()
    }, r.use = function(e) {
        return k.H.use(e)
    }, r.useActionState = function(e, t, r) {
        return k.H.useActionState(e, t, r)
    }, r.useCallback = function(e, t) {
        return k.H.useCallback(e, t)
    }, r.useContext = function(e) {
        return k.H.useContext(e)
    }, r.useDebugValue = function() {}, r.useDeferredValue = function(e, t) {
        return k.H.useDeferredValue(e, t)
    }, r.useEffect = function(e, t) {
        return k.H.useEffect(e, t)
    }, r.useEffectEvent = function(e) {
        return k.H.useEffectEvent(e)
    }, r.useId = function() {
        return k.H.useId()
    }, r.useImperativeHandle = function(e, t, r) {
        return k.H.useImperativeHandle(e, t, r)
    }, r.useInsertionEffect = function(e, t) {
        return k.H.useInsertionEffect(e, t)
    }, r.useLayoutEffect = function(e, t) {
        return k.H.useLayoutEffect(e, t)
    }, r.useMemo = function(e, t) {
        return k.H.useMemo(e, t)
    }, r.useOptimistic = function(e, t) {
        return k.H.useOptimistic(e, t)
    }, r.useReducer = function(e, t, r) {
        return k.H.useReducer(e, t, r)
    }, r.useRef = function(e) {
        return k.H.useRef(e)
    }, r.useState = function(e) {
        return k.H.useState(e)
    }, r.useSyncExternalStore = function(e, t, r) {
        return k.H.useSyncExternalStore(e, t, r)
    }, r.useTransition = function() {
        return k.H.useTransition()
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
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                var c = i ? Object.getOwnPropertyDescriptor(e, l) : null;
                c && (c.get || c.set) ? Object.defineProperty(n, l, c) : n[l] = e[l]
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
            return c
        }
    });
    let o = e.r(191788),
        n = "u" < typeof window,
        i = n ? () => {} : o.useLayoutEffect,
        l = n ? () => {} : o.useEffect;

    function c(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function c() {
            if (t && t.mountedInstances) {
                let e = o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), c()), i(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), i(() => (t && (t._pendingUpdate = c), () => {
            t && (t._pendingUpdate = c)
        })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
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
            return h
        },
        defaultHead: function() {
            return f
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let i = e.r(741705),
        l = e.r(952456),
        c = e.r(391398),
        a = l._(e.r(191788)),
        u = i._(e.r(394941)),
        s = e.r(713584);

    function f() {
        return [(0, c.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, c.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function d(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(894470);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function y(e) {
        let t, r, o, n;
        return e.reduce(d, []).reverse().concat(f().reverse()).filter((t = new Set, r = new Set, o = new Set, n = {}, e => {
            let i = !0,
                l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? i = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? i = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) o.has(r) ? i = !1 : o.add(r);
                            else {
                                let t = e.props[r],
                                    o = n[r] || new Set;
                                ("name" !== r || !l) && o.has(t) ? i = !1 : (o.add(t), n[r] = o)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return a.default.cloneElement(e, {
                key: r
            })
        })
    }
    let h = function(e) {
        let {
            children: t
        } = e, r = (0, a.useContext)(s.HeadManagerContext);
        return (0, c.jsx)(u.default, {
            reduceComponentsToState: y,
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

    function i() {}
    var l = {
            d: {
                f: i,
                r: function() {
                    throw Error(n(522))
                },
                D: i,
                C: i,
                L: i,
                m: i,
                X: i,
                S: i,
                M: i
            },
            p: 0,
            findDOMNode: null
        },
        c = Symbol.for("react.portal"),
        a = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function u(e, t) {
        return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
    }
    r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, r.createPortal = function(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(n(299));
        return function(e, t, r) {
            var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: c,
                key: null == o ? null : "" + o,
                children: e,
                containerInfo: t,
                implementation: r
            }
        }(e, t, null, r)
    }, r.flushSync = function(e) {
        var t = a.T,
            r = l.p;
        try {
            if (a.T = null, l.p = 2, e) return e()
        } finally {
            a.T = t, l.p = r, l.d.f()
        }
    }, r.preconnect = function(e, t) {
        "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, l.d.C(e, t))
    }, r.prefetchDNS = function(e) {
        "string" == typeof e && l.d.D(e)
    }, r.preinit = function(e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
            var r = t.as,
                o = u(r, t.crossOrigin),
                n = "string" == typeof t.integrity ? t.integrity : void 0,
                i = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
            "style" === r ? l.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                crossOrigin: o,
                integrity: n,
                fetchPriority: i
            }) : "script" === r && l.d.X(e, {
                crossOrigin: o,
                integrity: n,
                fetchPriority: i,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0
            })
        }
    }, r.preinitModule = function(e, t) {
        if ("string" == typeof e)
            if ("object" == typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                    var r = u(t.as, t.crossOrigin);
                    l.d.M(e, {
                        crossOrigin: r,
                        integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                        nonce: "string" == typeof t.nonce ? t.nonce : void 0
                    })
                }
            } else null == t && l.d.M(e)
    }, r.preload = function(e, t) {
        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
            var r = t.as,
                o = u(r, t.crossOrigin);
            l.d.L(e, r, {
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
                var r = u(t.as, t.crossOrigin);
                l.d.m(e, {
                    as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                    crossOrigin: r,
                    integrity: "string" == typeof t.integrity ? t.integrity : void 0
                })
            } else l.d.m(e)
    }, r.requestFormReset = function(e) {
        l.d.r(e)
    }, r.unstable_batchedUpdates = function(e, t) {
        return e(t)
    }, r.useFormState = function(e, t, r) {
        return a.H.useFormState(e, t, r)
    }, r.useFormStatus = function() {
        return a.H.useHostTransitionStatus()
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
                var i = arguments[t];
                i && (e = n(e, function(e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return o.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var i in e) r.call(e, i) && e[i] && (t = n(t, i));
                    return t
                }(i)))
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
            colorVariant: i = "default",
            withText: l
        } = e, {
            textColor: c,
            solidCurrencySymbol: a,
            logoColor: u,
            currencyFillColor: s
        } = "string" == typeof i ? o[i] : { ...i
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
                }), l && (0, t.jsxs)("g", {
                    className: n.default.logoType,
                    "data-show-on-mobile": e.showLogoTypeOnMobileSkeleton || !1,
                    children: [(0, t.jsx)("path", {
                        fill: c,
                        d: "M320.7,141.8c11.1,0,19.5-6.4,23-17.1c0.4-1.3,1.8-2,3.1-1.6l14.3,4.8c1.3,0.4,2,1.9,1.5,3.2     c-6.6,17.6-21.2,28.5-41.9,28.5c-28.4,0-49-22.5-49-54.5c0-32.1,20.6-54.5,49-54.5c20.7,0,35.3,10.9,41.9,28.5     c0.5,1.3-0.2,2.7-1.5,3.2l-14.3,4.8c-1.3,0.4-2.7-0.3-3.1-1.6c-3.6-10.7-11.9-17.1-23-17.1c-16.8,0-28.7,14.5-28.7,36.7     S303.9,141.8,320.7,141.8z"
                    }), (0, t.jsx)("path", {
                        fill: c,
                        d: "M417.5,121.9l-15.9,3.3c-7.1,1.5-12.5,3.8-12.5,10.3c0,5.7,4.2,8.9,10.7,8.9c9.1,0,17.7-4.8,17.7-13.9V121.9L417.5,121.9     z M370.2,136.5c0-15.1,11.7-21.6,27-24.5l20.3-4.1v-1.3c0-7-3.6-11.3-12.6-11.3c-7.3,0-11.4,3-13.5,8.9c-0.4,1.1-1.6,1.8-2.8,1.5     l-13.3-2.8c-1.5-0.3-2.3-1.9-1.8-3.3C378,87.9,389.1,79,405.6,79c19.1,0,30.6,8.9,30.6,26.8v32.5c0,3.5,1.2,5,4.2,5.1     c1.3,0.1,2.4,1.1,2.4,2.4v9.9c0,1.2-0.9,2.3-2.2,2.4c-11.6,1.1-18.3-1.5-21.2-7.5c-4.9,5.5-12.9,8.6-23,8.6     C381.5,159.4,370.2,150.3,370.2,136.5z"
                    }), (0, t.jsx)("path", {
                        fill: c,
                        d: "M459.5,134c1-0.9,2.6-0.8,3.5,0.2c5.2,6.2,13.4,10.1,21.4,10.1c7.2,0,13.7-2.5,13.7-8.8s-6.1-7-18.4-9.4     c-12.4-2.5-26.3-5.7-26.3-22.3c0-14.5,12.7-24.8,30.9-24.8c12.6,0,23.9,5,30.2,12.2c0.8,1,0.8,2.4-0.1,3.3l-8.4,8.4     c-1,1-2.6,1-3.5-0.1c-4.8-5.5-11.5-8.6-19-8.6c-6.9,0-11.3,3-11.3,7.7c0,5.3,5.4,6.3,15,8.3c13.3,2.8,29.6,5.7,29.6,23.4     c0,15.9-14.7,25.9-32.7,25.9c-13.3,0-26.9-4.8-34.3-13.7c-0.8-1-0.7-2.4,0.3-3.3L459.5,134z"
                    }), (0, t.jsx)("path", {
                        fill: c,
                        d: "M529.1,52.2h14.3c1.3,0,2.4,1.1,2.4,2.4v34.1c4.3-5.1,11.3-9.6,21.3-9.6c16.2,0,26,11.1,26,27.9v48.6     c0,1.3-1.1,2.4-2.4,2.4h-14.3c-1.3,0-2.4-1.1-2.4-2.4v-43.1c0-9.1-3.7-15.7-13-15.7c-7.6,0-15.2,5.5-15.2,16.1v42.7     c0,1.3-1.1,2.4-2.4,2.4h-14.3c-1.3,0-2.4-1.1-2.4-2.4v-101C526.7,53.3,527.8,52.2,529.1,52.2z"
                    }), (0, t.jsx)("path", {
                        fill: c,
                        d: "M662.6,117.1h31.6l-15.9-42.4L662.6,117.1z M690.8,53.8l38,101c0.6,1.6-0.6,3.3-2.3,3.3h-15.3c-1,0-1.9-0.6-2.3-1.6     l-8.2-21.9h-44.5l-8.1,21.9c-0.4,1-1.3,1.6-2.3,1.6h-14.9c-1.7,0-2.9-1.7-2.3-3.3l38-101c0.4-0.9,1.3-1.6,2.3-1.6h19.7     C689.5,52.2,690.4,52.8,690.8,53.8z"
                    }), (0, t.jsx)("path", {
                        fill: c,
                        d: "M756.8,121.6c0,13.7,7.8,21.4,18.2,21.4c12.2,0,18.8-9.7,18.8-23.7s-6.6-23.7-18.8-23.7c-10.4,0-18.2,7.6-18.2,21.5     V121.6z M757.2,150v32c0,1.3-1.1,2.4-2.4,2.4h-14.3c-1.3,0-2.4-1.1-2.4-2.4V83c0-1.3,1.1-2.4,2.4-2.4h14.3c1.3,0,2.4,1.1,2.4,2.4     v5.7c4.7-5.7,12.1-9.6,22-9.6c21.5,0,33.9,18.3,33.9,40.2c0,22-12.4,40.3-33.9,40.3C769.3,159.6,762,155.7,757.2,150z"
                    }), (0, t.jsx)("path", {
                        fill: c,
                        d: "M841.1,121.6c0,13.7,7.8,21.4,18.2,21.4c12.2,0,18.8-9.7,18.8-23.7s-6.6-23.7-18.8-23.7c-10.4,0-18.2,7.6-18.2,21.5     V121.6z M841.5,150v32c0,1.3-1.1,2.4-2.4,2.4h-14.3c-1.3,0-2.4-1.1-2.4-2.4V83c0-1.3,1.1-2.4,2.4-2.4h14.3c1.3,0,2.4,1.1,2.4,2.4     v5.7c4.7-5.7,12.1-9.6,22-9.6c21.5,0,33.9,18.3,33.9,40.2c0,22-12.4,40.3-33.9,40.3C853.6,159.6,846.3,155.7,841.5,150z"
                    })]
                }), a && (0, t.jsx)("rect", {
                    width: "150",
                    height: "150",
                    x: "25",
                    y: "25",
                    rx: "7.81424",
                    fill: s || "#fff"
                }), (0, t.jsx)("path", {
                    fill: u,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M206.398,30.286c-4.502-12.394-14.307-22.189-26.713-26.687C168.48,0,158.075,0,136.865,0h-63.63   c-21.11,0-31.615,0-42.92,3.498C17.909,7.996,8.104,17.792,3.602,30.186C0,41.58,0,52.075,0,73.165v63.57   c0,21.19,0,31.585,3.502,42.98c4.502,12.394,14.307,22.189,26.713,26.687C41.62,210,52.125,210,73.135,210h63.63   c21.11,0,31.615,0,42.92-3.598c12.406-4.498,22.211-14.293,26.713-26.687C210,168.32,210,157.825,210,136.735v-63.47   C210,52.175,210,41.68,206.398,30.286z M151.472,71.866l-12.106,9.895c-1.101,0.9-2.601,0.7-3.402-0.4   c-6.203-7.596-15.807-11.894-26.312-11.894c-11.706,0-19.009,5.098-19.009,12.294c-0.2,6.097,5.503,9.196,23.011,12.994   c22.111,4.698,32.215,13.893,32.215,29.386c0,19.391-15.808,33.684-40.519,35.283l-2.401,11.495   c-0.2,1.099-1.201,1.899-2.401,1.899H81.539c-1.601,0-2.701-1.499-2.401-2.999l3.001-12.794   c-12.206-3.498-22.111-10.295-27.813-18.591c-0.7-1.099-0.5-2.499,0.5-3.298l13.206-10.395c1.101-0.9,2.701-0.6,3.502,0.5   c7.003,9.795,17.808,15.593,30.815,15.593c11.706,0,20.51-5.697,20.51-13.893c0-6.297-4.402-9.196-19.309-12.294   c-25.412-5.497-35.517-14.793-35.517-30.286c0-17.991,15.107-31.485,37.918-33.284l2.501-11.894c0.2-1.099,1.201-1.899,2.401-1.899   h18.709c1.501,0,2.701,1.399,2.401,2.899l-2.901,13.294c9.805,2.999,17.808,8.396,22.811,15.093   C152.673,69.567,152.473,71.066,151.472,71.866z"
                })]
            })
        })
    }], 769272)
}, 198216, e => {
    e.v({
        fullBleedGrid: "full-bleed-grid-module-sass-module__vs_0IG__fullBleedGrid"
    })
}, 608547, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        o = e.i(464798);
    e.i(667861);
    var n = e.i(843981),
        i = e.i(848970),
        l = e.i(816918);
    let c = [],
        a = async e => {
            let t = (0, l.getRegionConfig)();
            t ? .hasOptedIntoStatisticsTracking && await (0, i.logEvent)({
                event: e,
                region: t.region,
                middleware: o.default
            })
        },
        u = (0, r.createContext)({});
    e.s(["ExperimentsContext", 0, u, "ExperimentsProvider", 0, e => {
        let {
            children: n
        } = e, [i, l] = (0, r.useState)(null), [c, a] = (0, r.useState)(null), [s] = function(e, t) {
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
            c && l({ ...c,
                ...s
            })
        }, [c, s]), (0, r.useEffect)(() => {
            if (c) return;
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
                        i = await fetch(r, n);
                    if (i.ok) {
                        let {
                            experiments: e = {}
                        } = await i.json();
                        a(e)
                    } else a({}), console.error(`Experiments api fetch response status ${i.status}`, i.statusText)
                } catch (e) {
                    a({}), console.error("Experiments api failed to fetch:", e)
                }
            })()
        }, []), (0, t.jsx)(u.Provider, {
            value: i,
            children: n
        })
    }, "logExposureEvent", 0, (e, t) => {
        !c.includes(e) && (c.push(e), a((0, n.ExperimentActivateView)({
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
}]);
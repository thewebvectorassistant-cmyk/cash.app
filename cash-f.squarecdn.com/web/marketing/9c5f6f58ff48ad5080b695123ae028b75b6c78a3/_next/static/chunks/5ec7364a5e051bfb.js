(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 547745, (e, t, r) => {
    let n;
    e.e, n = e.r(191788), t.exports = (() => {
        var e = {
                "./node_modules/css-mediaquery/index.js": (e, t) => {
                    "use strict";
                    t.match = function(e, t) {
                        return s(e).some(function(e) {
                            var r = e.inverse,
                                n = "all" === e.type || t.type === e.type;
                            if (n && r || !(n || r)) return !1;
                            var o = e.expressions.every(function(e) {
                                var r = e.feature,
                                    n = e.modifier,
                                    o = e.value,
                                    a = t[r];
                                if (!a) return !1;
                                switch (r) {
                                    case "orientation":
                                    case "scan":
                                        return a.toLowerCase() === o.toLowerCase();
                                    case "width":
                                    case "height":
                                    case "device-width":
                                    case "device-height":
                                        o = l(o), a = l(a);
                                        break;
                                    case "resolution":
                                        o = c(o), a = c(a);
                                        break;
                                    case "aspect-ratio":
                                    case "device-aspect-ratio":
                                    case "device-pixel-ratio":
                                        o = u(o), a = u(a);
                                        break;
                                    case "grid":
                                    case "color":
                                    case "color-index":
                                    case "monochrome":
                                        o = parseInt(o, 10) || 1, a = parseInt(a, 10) || 0
                                }
                                switch (n) {
                                    case "min":
                                        return a >= o;
                                    case "max":
                                        return a <= o;
                                    default:
                                        return a === o
                                }
                            });
                            return o && !r || !o && r
                        })
                    }, t.parse = s;
                    var r = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                        n = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                        o = /^(?:(min|max)-)?(.+)/,
                        a = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                        i = /(dpi|dpcm|dppx)?$/;

                    function s(e) {
                        return e.split(",").map(function(e) {
                            var t = (e = e.trim()).match(r),
                                a = t[1],
                                i = t[2],
                                s = t[3] || "",
                                u = {};
                            return u.inverse = !!a && "not" === a.toLowerCase(), u.type = i ? i.toLowerCase() : "all", u.expressions = (s = s.match(/\([^\)]+\)/g) || []).map(function(e) {
                                var t = e.match(n),
                                    r = t[1].toLowerCase().match(o);
                                return {
                                    modifier: r[1],
                                    feature: r[2],
                                    value: t[2]
                                }
                            }), u
                        })
                    }

                    function u(e) {
                        var t, r = Number(e);
                        return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r
                    }

                    function c(e) {
                        var t = parseFloat(e);
                        switch (String(e).match(i)[1]) {
                            case "dpcm":
                                return t / 2.54;
                            case "dppx":
                                return 96 * t;
                            default:
                                return t
                        }
                    }

                    function l(e) {
                        var t = parseFloat(e);
                        switch (String(e).match(a)[1]) {
                            case "em":
                            case "rem":
                                return 16 * t;
                            case "cm":
                                return 96 * t / 2.54;
                            case "mm":
                                return 96 * t / 2.54 / 10;
                            case "in":
                                return 96 * t;
                            case "pt":
                                return 72 * t;
                            case "pc":
                                return 72 * t / 12;
                            default:
                                return t
                        }
                    }
                },
                "./node_modules/hyphenate-style-name/index.js": (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        default: () => s
                    });
                    var n = /[A-Z]/g,
                        o = /^ms-/,
                        a = {};

                    function i(e) {
                        return "-" + e.toLowerCase()
                    }
                    let s = function(e) {
                        if (a.hasOwnProperty(e)) return a[e];
                        var t = e.replace(n, i);
                        return a[e] = o.test(t) ? "-" + t : t
                    }
                },
                "./node_modules/matchmediaquery/index.js": (e, t, r) => {
                    "use strict";
                    var n = r("./node_modules/css-mediaquery/index.js").match,
                        o = "u" > typeof window ? window.matchMedia : null;

                    function a(e, t, r) {
                        var a = this;
                        if (o && !r) {
                            var i = o.call(window, e);
                            this.matches = i.matches, this.media = i.media, i.addListener(s)
                        } else this.matches = n(e, t), this.media = e;

                        function s(e) {
                            a.matches = e.matches, a.media = e.media
                        }
                        this.addListener = function(e) {
                            i && i.addListener(e)
                        }, this.removeListener = function(e) {
                            i && i.removeListener(e)
                        }, this.dispose = function() {
                            i && i.removeListener(s)
                        }
                    }
                    e.exports = function(e, t, r) {
                        return new a(e, t, r)
                    }
                },
                "./node_modules/object-assign/index.js": e => {
                    "use strict";
                    var t = Object.getOwnPropertySymbols,
                        r = Object.prototype.hasOwnProperty,
                        n = Object.prototype.propertyIsEnumerable;
                    e.exports = ! function() {
                        try {
                            var e = new String("abc");
                            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                            for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                            var n = Object.getOwnPropertyNames(t).map(function(e) {
                                return t[e]
                            });
                            if ("0123456789" !== n.join("")) return !1;
                            var o = {};
                            if ("abcdefghijklmnopqrst".split("").forEach(function(e) {
                                    o[e] = e
                                }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, o)).join("")) return !1;
                            return !0
                        } catch (e) {
                            return !1
                        }
                    }() ? function(e, o) {
                        for (var a, i, s = function(e) {
                                if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                                return Object(e)
                            }(e), u = 1; u < arguments.length; u++) {
                            for (var c in a = Object(arguments[u])) r.call(a, c) && (s[c] = a[c]);
                            if (t) {
                                i = t(a);
                                for (var l = 0; l < i.length; l++) n.call(a, i[l]) && (s[i[l]] = a[i[l]])
                            }
                        }
                        return s
                    } : Object.assign
                },
                "./node_modules/prop-types/checkPropTypes.js": (e, t, r) => {
                    "use strict";
                    var n = function() {},
                        o = r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),
                        a = {},
                        i = r("./node_modules/prop-types/lib/has.js");

                    function s(e, t, r, s, u) {
                        for (var c in e)
                            if (i(e, c)) {
                                var l;
                                try {
                                    if ("function" != typeof e[c]) {
                                        var f = Error((s || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                        throw f.name = "Invariant Violation", f
                                    }
                                    l = e[c](t, c, s, r, null, o)
                                } catch (e) {
                                    l = e
                                }
                                if (!l || l instanceof Error || n((s || "React class") + ": type specification of " + r + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), l instanceof Error && !(l.message in a)) {
                                    a[l.message] = !0;
                                    var d = u ? u() : "";
                                    n("Failed " + r + " type: " + l.message + (null != d ? d : ""))
                                }
                            }
                    }
                    n = function(e) {
                        var t = "Warning: " + e;
                        "u" > typeof console && console.error(t);
                        try {
                            throw Error(t)
                        } catch (e) {}
                    }, s.resetWarningCache = function() {
                        a = {}
                    }, e.exports = s
                },
                "./node_modules/prop-types/factoryWithTypeCheckers.js": (e, t, r) => {
                    "use strict";
                    var n = r("./node_modules/react-is/index.js"),
                        o = r("./node_modules/object-assign/index.js"),
                        a = r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),
                        i = r("./node_modules/prop-types/lib/has.js"),
                        s = r("./node_modules/prop-types/checkPropTypes.js"),
                        u = function() {};

                    function c() {
                        return null
                    }
                    u = function(e) {
                        var t = "Warning: " + e;
                        "u" > typeof console && console.error(t);
                        try {
                            throw Error(t)
                        } catch (e) {}
                    }, e.exports = function(e, t) {
                        var r = "function" == typeof Symbol && Symbol.iterator,
                            l = "<<anonymous>>",
                            f = {
                                array: m("array"),
                                bigint: m("bigint"),
                                bool: m("boolean"),
                                func: m("function"),
                                number: m("number"),
                                object: m("object"),
                                string: m("string"),
                                symbol: m("symbol"),
                                any: p(c),
                                arrayOf: function(e) {
                                    return p(function(t, r, n, o, i) {
                                        if ("function" != typeof e) return new d("Property `" + i + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                                        var s = t[r];
                                        if (!Array.isArray(s)) return new d("Invalid " + o + " `" + i + "` of type " + ("`" + h(s)) + "` supplied to `" + n + "`, expected an array.");
                                        for (var u = 0; u < s.length; u++) {
                                            var c = e(s, u, n, o, i + "[" + u + "]", a);
                                            if (c instanceof Error) return c
                                        }
                                        return null
                                    })
                                },
                                element: p(function(t, r, n, o, a) {
                                    var i = t[r];
                                    return e(i) ? null : new d("Invalid " + o + " `" + a + "` of type " + ("`" + h(i)) + "` supplied to `" + n + "`, expected a single ReactElement.")
                                }),
                                elementType: p(function(e, t, r, o, a) {
                                    var i = e[t];
                                    return n.isValidElementType(i) ? null : new d("Invalid " + o + " `" + a + "` of type " + ("`" + h(i)) + "` supplied to `" + r + "`, expected a single ReactElement type.")
                                }),
                                instanceOf: function(e) {
                                    return p(function(t, r, n, o, a) {
                                        if (!(t[r] instanceof e)) {
                                            var i, s = e.name || l;
                                            return new d("Invalid " + o + " `" + a + "` of type " + ("`" + ((i = t[r]).constructor && i.constructor.name ? i.constructor.name : l)) + "` supplied to `" + n + "`, expected instance of `" + s + "`.")
                                        }
                                        return null
                                    })
                                },
                                node: p(function(t, n, o, a, i) {
                                    return ! function t(n) {
                                        switch (typeof n) {
                                            case "number":
                                            case "string":
                                            case "undefined":
                                                return !0;
                                            case "boolean":
                                                return !n;
                                            case "object":
                                                if (Array.isArray(n)) return n.every(t);
                                                if (null === n || e(n)) return !0;
                                                var o = function(e) {
                                                    var t = e && (r && e[r] || e["@@iterator"]);
                                                    if ("function" == typeof t) return t
                                                }(n);
                                                if (!o) return !1;
                                                var a, i = o.call(n);
                                                if (o !== n.entries) {
                                                    for (; !(a = i.next()).done;)
                                                        if (!t(a.value)) return !1
                                                } else
                                                    for (; !(a = i.next()).done;) {
                                                        var s = a.value;
                                                        if (s && !t(s[1])) return !1
                                                    }
                                                return !0;
                                            default:
                                                return !1
                                        }
                                    }(t[n]) ? new d("Invalid " + a + " `" + i + "` supplied to `" + o + "`, expected a ReactNode.") : null
                                }),
                                objectOf: function(e) {
                                    return p(function(t, r, n, o, s) {
                                        if ("function" != typeof e) return new d("Property `" + s + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                                        var u = t[r],
                                            c = h(u);
                                        if ("object" !== c) return new d("Invalid " + o + " `" + s + "` of type " + ("`" + c) + "` supplied to `" + n + "`, expected an object.");
                                        for (var l in u)
                                            if (i(u, l)) {
                                                var f = e(u, l, n, o, s + "." + l, a);
                                                if (f instanceof Error) return f
                                            }
                                        return null
                                    })
                                },
                                oneOf: function(e) {
                                    return Array.isArray(e) ? p(function(t, r, n, o, a) {
                                        for (var i, s = t[r], u = 0; u < e.length; u++)
                                            if (s === (i = e[u]) ? 0 !== s || 1 / s == 1 / i : s != s && i != i) return null;
                                        var c = JSON.stringify(e, function(e, t) {
                                            return "symbol" === g(t) ? String(t) : t
                                        });
                                        return new d("Invalid " + o + " `" + a + "` of value `" + String(s) + "` " + ("supplied to `" + n) + "`, expected one of " + c + ".")
                                    }) : (arguments.length > 1 ? u("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : u("Invalid argument supplied to oneOf, expected an array."), c)
                                },
                                oneOfType: function(e) {
                                    if (!Array.isArray(e)) return u("Invalid argument supplied to oneOfType, expected an instance of array."), c;
                                    for (var t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        if ("function" != typeof r) return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + function(e) {
                                            var t = g(e);
                                            switch (t) {
                                                case "array":
                                                case "object":
                                                    return "an " + t;
                                                case "boolean":
                                                case "date":
                                                case "regexp":
                                                    return "a " + t;
                                                default:
                                                    return t
                                            }
                                        }(r) + " at index " + t + "."), c
                                    }
                                    return p(function(t, r, n, o, s) {
                                        for (var u = [], c = 0; c < e.length; c++) {
                                            var l = (0, e[c])(t, r, n, o, s, a);
                                            if (null == l) return null;
                                            l.data && i(l.data, "expectedType") && u.push(l.data.expectedType)
                                        }
                                        return new d("Invalid " + o + " `" + s + "` supplied to " + ("`" + n) + "`" + (u.length > 0 ? ", expected one of type [" + u.join(", ") + "]" : "") + ".")
                                    })
                                },
                                shape: function(e) {
                                    return p(function(t, r, n, o, i) {
                                        var s = t[r],
                                            u = h(s);
                                        if ("object" !== u) return new d("Invalid " + o + " `" + i + "` of type `" + u + "` supplied to `" + n + "`, expected `object`.");
                                        for (var c in e) {
                                            var l = e[c];
                                            if ("function" != typeof l) return y(n, o, i, c, g(l));
                                            var f = l(s, c, n, o, i + "." + c, a);
                                            if (f) return f
                                        }
                                        return null
                                    })
                                },
                                exact: function(e) {
                                    return p(function(t, r, n, s, u) {
                                        var c = t[r],
                                            l = h(c);
                                        if ("object" !== l) return new d("Invalid " + s + " `" + u + "` of type `" + l + "` supplied to `" + n + "`, expected `object`.");
                                        var f = o({}, t[r], e);
                                        for (var p in f) {
                                            var m = e[p];
                                            if (i(e, p) && "function" != typeof m) return y(n, s, u, p, g(m));
                                            if (!m) return new d("Invalid " + s + " `" + u + "` key `" + p + "` supplied to `" + n + "`.\nBad object: " + JSON.stringify(t[r], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                            var v = m(c, p, n, s, u + "." + p, a);
                                            if (v) return v
                                        }
                                        return null
                                    })
                                }
                            };

                        function d(e, t) {
                            this.message = e, this.data = t && "object" == typeof t ? t : {}, this.stack = ""
                        }

                        function p(e) {
                            var r = {},
                                n = 0;

                            function o(o, i, s, c, f, p, m) {
                                if (c = c || l, p = p || s, m !== a) {
                                    if (t) {
                                        var y = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                        throw y.name = "Invariant Violation", y
                                    } else if ("u" > typeof console) {
                                        var h = c + ":" + s;
                                        !r[h] && n < 3 && (u("You are manually calling a React.PropTypes validation function for the `" + p + "` prop on `" + c + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), r[h] = !0, n++)
                                    }
                                }
                                return null != i[s] ? e(i, s, c, f, p) : o ? new d(null === i[s] ? "The " + f + " `" + p + "` is marked as required in `" + c + "`, but its value is `null`." : "The " + f + " `" + p + "` is marked as required in `" + c + "`, but its value is `undefined`.") : null
                            }
                            var i = o.bind(null, !1);
                            return i.isRequired = o.bind(null, !0), i
                        }

                        function m(e) {
                            return p(function(t, r, n, o, a, i) {
                                var s = t[r];
                                return h(s) !== e ? new d("Invalid " + o + " `" + a + "` of type " + ("`" + g(s)) + "` supplied to `" + n + "`, expected `" + e + "`.", {
                                    expectedType: e
                                }) : null
                            })
                        }

                        function y(e, t, r, n, o) {
                            return new d((e || "React class") + ": " + t + " type `" + r + "." + n + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + o + "`.")
                        }

                        function h(e) {
                            var t = typeof e;
                            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : "symbol" === t || e && ("Symbol" === e["@@toStringTag"] || "function" == typeof Symbol && e instanceof Symbol) ? "symbol" : t
                        }

                        function g(e) {
                            if (null == e) return "" + e;
                            var t = h(e);
                            if ("object" === t) {
                                if (e instanceof Date) return "date";
                                else if (e instanceof RegExp) return "regexp"
                            }
                            return t
                        }
                        return d.prototype = Error.prototype, f.checkPropTypes = s, f.resetWarningCache = s.resetWarningCache, f.PropTypes = f, f
                    }
                },
                "./node_modules/prop-types/index.js": (e, t, r) => {
                    var n = r("./node_modules/react-is/index.js");
                    e.exports = r("./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement, !0)
                },
                "./node_modules/prop-types/lib/ReactPropTypesSecret.js": e => {
                    "use strict";
                    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                },
                "./node_modules/prop-types/lib/has.js": e => {
                    e.exports = Function.call.bind(Object.prototype.hasOwnProperty)
                },
                "./node_modules/react-is/cjs/react-is.development.js": (e, t) => {
                    "use strict";
                    ! function() {
                        var e = "function" == typeof Symbol && Symbol.for,
                            r = e ? Symbol.for("react.element") : 60103,
                            n = e ? Symbol.for("react.portal") : 60106,
                            o = e ? Symbol.for("react.fragment") : 60107,
                            a = e ? Symbol.for("react.strict_mode") : 60108,
                            i = e ? Symbol.for("react.profiler") : 60114,
                            s = e ? Symbol.for("react.provider") : 60109,
                            u = e ? Symbol.for("react.context") : 60110,
                            c = e ? Symbol.for("react.async_mode") : 60111,
                            l = e ? Symbol.for("react.concurrent_mode") : 60111,
                            f = e ? Symbol.for("react.forward_ref") : 60112,
                            d = e ? Symbol.for("react.suspense") : 60113,
                            p = e ? Symbol.for("react.suspense_list") : 60120,
                            m = e ? Symbol.for("react.memo") : 60115,
                            y = e ? Symbol.for("react.lazy") : 60116,
                            h = e ? Symbol.for("react.block") : 60121,
                            g = e ? Symbol.for("react.fundamental") : 60117,
                            v = e ? Symbol.for("react.responder") : 60118,
                            b = e ? Symbol.for("react.scope") : 60119;

                        function _(e) {
                            if ("object" == typeof e && null !== e) {
                                var t = e.$$typeof;
                                switch (t) {
                                    case r:
                                        var p = e.type;
                                        switch (p) {
                                            case c:
                                            case l:
                                            case o:
                                            case i:
                                            case a:
                                            case d:
                                                return p;
                                            default:
                                                var h = p && p.$$typeof;
                                                switch (h) {
                                                    case u:
                                                    case f:
                                                    case y:
                                                    case m:
                                                    case s:
                                                        return h;
                                                    default:
                                                        return t
                                                }
                                        }
                                    case n:
                                        return t
                                }
                            }
                        }
                        var x = !1;

                        function w(e) {
                            return _(e) === l
                        }
                        t.AsyncMode = c, t.ConcurrentMode = l, t.ContextConsumer = u, t.ContextProvider = s, t.Element = r, t.ForwardRef = f, t.Fragment = o, t.Lazy = y, t.Memo = m, t.Portal = n, t.Profiler = i, t.StrictMode = a, t.Suspense = d, t.isAsyncMode = function(e) {
                            return x || (x = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(e) || _(e) === c
                        }, t.isConcurrentMode = w, t.isContextConsumer = function(e) {
                            return _(e) === u
                        }, t.isContextProvider = function(e) {
                            return _(e) === s
                        }, t.isElement = function(e) {
                            return "object" == typeof e && null !== e && e.$$typeof === r
                        }, t.isForwardRef = function(e) {
                            return _(e) === f
                        }, t.isFragment = function(e) {
                            return _(e) === o
                        }, t.isLazy = function(e) {
                            return _(e) === y
                        }, t.isMemo = function(e) {
                            return _(e) === m
                        }, t.isPortal = function(e) {
                            return _(e) === n
                        }, t.isProfiler = function(e) {
                            return _(e) === i
                        }, t.isStrictMode = function(e) {
                            return _(e) === a
                        }, t.isSuspense = function(e) {
                            return _(e) === d
                        }, t.isValidElementType = function(e) {
                            return "string" == typeof e || "function" == typeof e || e === o || e === l || e === i || e === a || e === d || e === p || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === s || e.$$typeof === u || e.$$typeof === f || e.$$typeof === g || e.$$typeof === v || e.$$typeof === b || e.$$typeof === h)
                        }, t.typeOf = _
                    }()
                },
                "./node_modules/react-is/index.js": (e, t, r) => {
                    "use strict";
                    e.exports = r("./node_modules/react-is/cjs/react-is.development.js")
                },
                "./node_modules/shallow-equal/dist/index.esm.js": (e, t, r) => {
                    "use strict";

                    function n(e, t) {
                        if (e === t) return !0;
                        if (!e || !t) return !1;
                        var r = Object.keys(e),
                            n = Object.keys(t),
                            o = r.length;
                        if (n.length !== o) return !1;
                        for (var a = 0; a < o; a++) {
                            var i = r[a];
                            if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
                        }
                        return !0
                    }

                    function o(e, t) {
                        if (e === t) return !0;
                        if (!e || !t) return !1;
                        var r = e.length;
                        if (t.length !== r) return !1;
                        for (var n = 0; n < r; n++)
                            if (e[n] !== t[n]) return !1;
                        return !0
                    }
                    r.r(t), r.d(t, {
                        shallowEqualArrays: () => o,
                        shallowEqualObjects: () => n
                    })
                },
                "./src/Component.ts": function(e, t, r) {
                    "use strict";
                    var n = this && this.__rest || function(e, t) {
                            var r = {};
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                            return r
                        },
                        o = this && this.__importDefault || function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = o(r("./src/useMediaQuery.ts"));
                    t.default = function(e) {
                        var t = e.children,
                            r = e.device,
                            o = e.onChange,
                            i = n(e, ["children", "device", "onChange"]),
                            s = (0, a.default)(i, r, o);
                        return "function" == typeof t ? t(s) : s ? t : null
                    }
                },
                "./src/Context.ts": (e, t, r) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = (0, r("react").createContext)(void 0)
                },
                "./src/index.ts": function(e, t, r) {
                    "use strict";
                    var n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Context = t.toQuery = t.useMediaQuery = t.default = void 0, t.useMediaQuery = n(r("./src/useMediaQuery.ts")).default, t.default = n(r("./src/Component.ts")).default, t.toQuery = n(r("./src/toQuery.ts")).default, t.Context = n(r("./src/Context.ts")).default
                },
                "./src/mediaQuery.ts": function(e, t, r) {
                    "use strict";
                    var n = this && this.__assign || function() {
                            return (n = Object.assign || function(e) {
                                for (var t, r = 1, n = arguments.length; r < n; r++)
                                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        },
                        o = this && this.__rest || function(e, t) {
                            var r = {};
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
                            return r
                        },
                        a = this && this.__importDefault || function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = a(r("./node_modules/prop-types/index.js")),
                        s = i.default.oneOfType([i.default.string, i.default.number]),
                        u = {
                            all: i.default.bool,
                            grid: i.default.bool,
                            aural: i.default.bool,
                            braille: i.default.bool,
                            handheld: i.default.bool,
                            print: i.default.bool,
                            projection: i.default.bool,
                            screen: i.default.bool,
                            tty: i.default.bool,
                            tv: i.default.bool,
                            embossed: i.default.bool
                        },
                        c = {
                            orientation: i.default.oneOf(["portrait", "landscape"]),
                            scan: i.default.oneOf(["progressive", "interlace"]),
                            aspectRatio: i.default.string,
                            deviceAspectRatio: i.default.string,
                            height: s,
                            deviceHeight: s,
                            width: s,
                            deviceWidth: s,
                            color: i.default.bool,
                            colorIndex: i.default.bool,
                            monochrome: i.default.bool,
                            resolution: s,
                            type: Object.keys(u)
                        };
                    c.type;
                    var l = o(c, ["type"]),
                        f = n({
                            minAspectRatio: i.default.string,
                            maxAspectRatio: i.default.string,
                            minDeviceAspectRatio: i.default.string,
                            maxDeviceAspectRatio: i.default.string,
                            minHeight: s,
                            maxHeight: s,
                            minDeviceHeight: s,
                            maxDeviceHeight: s,
                            minWidth: s,
                            maxWidth: s,
                            minDeviceWidth: s,
                            maxDeviceWidth: s,
                            minColor: i.default.number,
                            maxColor: i.default.number,
                            minColorIndex: i.default.number,
                            maxColorIndex: i.default.number,
                            minMonochrome: i.default.number,
                            maxMonochrome: i.default.number,
                            minResolution: s,
                            maxResolution: s
                        }, l);
                    t.default = {
                        all: n(n({}, u), f),
                        types: u,
                        matchers: c,
                        features: f
                    }
                },
                "./src/toQuery.ts": function(e, t, r) {
                    "use strict";
                    var n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = n(r("./node_modules/hyphenate-style-name/index.js")),
                        a = n(r("./src/mediaQuery.ts")),
                        i = function(e, t) {
                            var r = (0, o.default)(e);
                            return ("number" == typeof t && (t = "".concat(t, "px")), !0 === t) ? r : !1 === t ? "not ".concat(r) : "(".concat(r, ": ").concat(t, ")")
                        };
                    t.default = function(e) {
                        var t = [];
                        return Object.keys(a.default.all).forEach(function(r) {
                            var n = e[r];
                            null != n && t.push(i(r, n))
                        }), t.join(" and ")
                    }
                },
                "./src/useMediaQuery.ts": function(e, t, r) {
                    "use strict";
                    var n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = r("react"),
                        a = n(r("./node_modules/matchmediaquery/index.js")),
                        i = n(r("./node_modules/hyphenate-style-name/index.js")),
                        s = r("./node_modules/shallow-equal/dist/index.esm.js"),
                        u = n(r("./src/toQuery.ts")),
                        c = n(r("./src/Context.ts")),
                        l = function(e) {
                            if (e) return Object.keys(e).reduce(function(t, r) {
                                return t[(0, i.default)(r)] = e[r], t
                            }, {})
                        },
                        f = function() {
                            var e = (0, o.useRef)(!1);
                            return (0, o.useEffect)(function() {
                                e.current = !0
                            }, []), e.current
                        },
                        d = function(e) {
                            var t = (0, o.useContext)(c.default),
                                r = function() {
                                    return l(e) || l(t)
                                },
                                n = (0, o.useState)(r),
                                a = n[0],
                                i = n[1];
                            return (0, o.useEffect)(function() {
                                var e = r();
                                (0, s.shallowEqualObjects)(a, e) || i(e)
                            }, [e, t]), a
                        },
                        p = function(e) {
                            var t = function() {
                                    return e.query || (0, u.default)(e)
                                },
                                r = (0, o.useState)(t),
                                n = r[0],
                                a = r[1];
                            return (0, o.useEffect)(function() {
                                var e = t();
                                n !== e && a(e)
                            }, [e]), n
                        },
                        m = function(e, t) {
                            var r = function() {
                                    return (0, a.default)(e, t || {}, !!t)
                                },
                                n = (0, o.useState)(r),
                                i = n[0],
                                s = n[1],
                                u = f();
                            return (0, o.useEffect)(function() {
                                if (u) {
                                    var e = r();
                                    return s(e),
                                        function() {
                                            e && e.dispose()
                                        }
                                }
                            }, [e, t]), i
                        },
                        y = function(e) {
                            var t = (0, o.useState)(e.matches),
                                r = t[0],
                                n = t[1];
                            return (0, o.useEffect)(function() {
                                var t = function(e) {
                                    n(e.matches)
                                };
                                return e.addListener(t), n(e.matches),
                                    function() {
                                        e.removeListener(t)
                                    }
                            }, [e]), r
                        };
                    t.default = function(e, t, r) {
                        var n = d(t),
                            a = p(e);
                        if (!a) throw Error("Invalid or missing MediaQuery!");
                        var i = m(a, n),
                            s = y(i),
                            u = f();
                        return (0, o.useEffect)(function() {
                            u && r && r(s)
                        }, [s]), (0, o.useEffect)(function() {
                            return function() {
                                i && i.dispose()
                            }
                        }, []), s
                    }
                },
                react: e => {
                    "use strict";
                    e.exports = n
                }
            },
            t = {};

        function r(n) {
            var o = t[n];
            if (void 0 !== o) return o.exports;
            var a = t[n] = {
                exports: {}
            };
            return e[n].call(a.exports, a, a.exports, r), a.exports
        }
        return r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
            "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r("./src/index.ts")
    })()
}, 799604, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        cancelIdleCallback: function() {
            return i
        },
        requestIdleCallback: function() {
            return a
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let a = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
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
        i = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
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
    var n = {
        DecodeError: function() {
            return g
        },
        MiddlewareNotFoundError: function() {
            return x
        },
        MissingStaticPage: function() {
            return _
        },
        NormalizeError: function() {
            return v
        },
        PageNotFoundError: function() {
            return b
        },
        SP: function() {
            return y
        },
        ST: function() {
            return h
        },
        WEB_VITALS: function() {
            return a
        },
        execOnce: function() {
            return i
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return c
        },
        getURL: function() {
            return l
        },
        isAbsoluteUrl: function() {
            return u
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
            return w
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function i(e) {
        let t, r = !1;
        return function() {
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return r || (r = !0, t = e(...o)), t
        }
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = e => s.test(e);

    function c() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function l() {
        let {
            href: e
        } = window.location, t = c();
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
        let n = await e.getInitialProps(t);
        if (r && d(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let y = "u" > typeof performance,
        h = y && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class g extends Error {}
    class v extends Error {}
    class b extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class _ extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class x extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function w(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 681845, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        n = e.i(399430);
    let o = {
        default: {
            backgroundColor: n.colorWhite,
            textColor: n.colorBlack,
            navHeaderTheme: "default",
            promoPillBgColor: n.colorWhite
        },
        blackBg: {
            backgroundColor: n.colorBlack,
            textColor: n.colorWhite,
            navHeaderTheme: "onBlack",
            promoPillBgColor: n.colorBlack
        },
        whiteBg: {
            backgroundColor: n.colorWhite,
            textColor: n.colorBlack,
            navHeaderTheme: "onWhite",
            promoPillBgColor: n.colorWhite
        },
        fallReleaseHero: {
            backgroundColor: n.colorWhite,
            textColor: n.colorBlack,
            navHeaderTheme: "onGreen",
            promoPillBgColor: n.colorCashGreen
        },
        greenBg: {
            backgroundColor: n.colorCashGreen,
            textColor: n.colorBlack,
            navHeaderTheme: "onGreen",
            promoPillBgColor: n.colorCashGreen
        }
    };
    var a = e.i(239378);
    let i = (0, r.createContext)(void 0);
    e.s(["ThemeProvider", 0, e => {
        let {
            children: n,
            defaultTheme: s = "default",
            customColors: u = {}
        } = e, [c, l] = (0, r.useState)(s), [f, d] = (0, r.useState)(u || {}), p = (0, r.useMemo)(() => ({ ...o[c] || {}
        }), [c]), m = (0, r.useMemo)(() => ({ ...p,
            ...f
        }), [f, p]), y = (0, r.useMemo)(() => ({
            name: c,
            colors: m
        }), [c, m]), h = (0, r.useCallback)(e => {
            l(e)
        }, []), g = (0, r.useCallback)(e => {
            d(t => ({ ...t,
                ...e
            }))
        }, []), v = (0, r.useCallback)(e => {
            let t = {};
            return Object.keys(e || {}).forEach(r => {
                "string" == typeof e[r] && (t[(0, a.default)(r)] = e[r])
            }), t
        }, []), b = (0, r.useMemo)(() => ({
            theme: y,
            setTheme: h,
            updateColors: g,
            applyTheme: v
        }), [y, h, g, v]);
        return (0, t.jsx)(i.Provider, {
            value: b,
            children: n
        })
    }, "useTheme", 0, () => {
        let e = (0, r.useContext)(i);
        if (!e) throw Error("useTheme must be used within a ThemeProvider");
        return e
    }], 681845)
}, 626016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "setAttributesFromProps", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        },
        o = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

    function a(e) {
        return ["async", "defer", "noModule"].includes(e)
    }

    function i(e, t) {
        for (let [r, i] of Object.entries(t)) {
            if (!t.hasOwnProperty(r) || o.includes(r) || void 0 === i) continue;
            let s = n[r] || r.toLowerCase();
            "SCRIPT" === e.tagName && a(s) ? e[s] = !!i : e.setAttribute(s, String(i)), (!1 === i || "SCRIPT" === e.tagName && a(s) && (!i || "false" === i)) && (e.setAttribute(s, ""), e.removeAttribute(s))
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 161457, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return b
        },
        handleClientScriptLoad: function() {
            return h
        },
        initScriptLoader: function() {
            return g
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let a = e.r(741705),
        i = e.r(952456),
        s = e.r(391398),
        u = a._(e.r(730943)),
        c = i._(e.r(191788)),
        l = e.r(713584),
        f = e.r(626016),
        d = e.r(799604),
        p = new Map,
        m = new Set,
        y = e => {
            let {
                src: t,
                id: r,
                onLoad: n = () => {},
                onReady: o = null,
                dangerouslySetInnerHTML: a,
                children: i = "",
                strategy: s = "afterInteractive",
                onError: c,
                stylesheets: l
            } = e, d = r || t;
            if (d && m.has(d)) return;
            if (p.has(t)) {
                m.add(d), p.get(t).then(n, c);
                return
            }
            let y = () => {
                    o && o(), m.add(d)
                },
                h = document.createElement("script"),
                g = new Promise((e, t) => {
                    h.addEventListener("load", function(t) {
                        e(), n && n.call(this, t), y()
                    }), h.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    c && c(e)
                });
            a ? (h.innerHTML = a.__html || "", y()) : i ? (h.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", y()) : t && (h.src = t, p.set(t, g)), (0, f.setAttributesFromProps)(h, e), "worker" === s && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", s), l && (e => {
                if (u.default.preinit) return e.forEach(e => {
                    u.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("u" > typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let r = document.createElement("link");
                        r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                    })
                }
            })(l), document.body.appendChild(h)
        };

    function h(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, d.requestIdleCallback)(() => y(e))
        }) : y(e)
    }

    function g(e) {
        e.forEach(h), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            m.add(t)
        })
    }

    function v(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: o = null,
            strategy: a = "afterInteractive",
            onError: i,
            stylesheets: f,
            ...p
        } = e, {
            updateScripts: h,
            scripts: g,
            getIsSsr: v,
            appDir: b,
            nonce: _
        } = (0, c.useContext)(l.HeadManagerContext);
        _ = p.nonce || _;
        let x = (0, c.useRef)(!1);
        (0, c.useEffect)(() => {
            let e = t || r;
            x.current || (o && e && m.has(e) && o(), x.current = !0)
        }, [o, t, r]);
        let w = (0, c.useRef)(!1);
        if ((0, c.useEffect)(() => {
                if (!w.current) {
                    if ("afterInteractive" === a) y(e);
                    else "lazyOnload" === a && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => y(e)) : window.addEventListener("load", () => {
                        (0, d.requestIdleCallback)(() => y(e))
                    }));
                    w.current = !0
                }
            }, [e, a]), ("beforeInteractive" === a || "worker" === a) && (h ? (g[a] = (g[a] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: o,
                onError: i,
                ...p,
                nonce: _
            }]), h(g)) : v && v() ? m.add(t || r) : v && !v() && y({ ...e,
                nonce: _
            })), b) {
            if (f && f.forEach(e => {
                    u.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === a)
                if (!r) return p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, s.jsx)("script", {
                    nonce: _,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...p,id:t}])})`
                    }
                });
                else return u.default.preload(r, p.integrity ? {
                    as: "script",
                    integrity: p.integrity,
                    nonce: _,
                    crossOrigin: p.crossOrigin
                } : {
                    as: "script",
                    nonce: _,
                    crossOrigin: p.crossOrigin
                }), (0, s.jsx)("script", {
                    nonce: _,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...p,id:t}])})`
                    }
                });
            "afterInteractive" === a && r && u.default.preload(r, p.integrity ? {
                as: "script",
                integrity: p.integrity,
                nonce: _,
                crossOrigin: p.crossOrigin
            } : {
                as: "script",
                nonce: _,
                crossOrigin: p.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(v, "__nextScript", {
        value: !0
    });
    let b = v;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 194182, (e, t, r) => {
    t.exports = e.r(161457)
}, 414594, 953024, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        n = e.i(194182);
    let o = (0, r.memo)(function(e) {
        let {
            gtmId: r
        } = e;
        if (!r) return null;
        let o = window ? .cspn || "{{{cspNonce}}}";
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(n.default, {
                id: "gtmScript",
                nonce: o,
                "data-nonce": o,
                dangerouslySetInnerHTML: {
                    __html: `(function(w,d,s,l,i){
            w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            var n=d.querySelector('[nonce]');n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));
            w[l].push({'nonce':n.nonce||n.getAttribute('nonce')});f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${r}');`
                }
            }), (0, t.jsx)("noscript", {
                children: (0, t.jsx)("iframe", {
                    src: `https://www.googletagmanager.com/ns.html?id=${r}`,
                    height: "0",
                    width: "0",
                    style: {
                        display: "none",
                        visibility: "hidden"
                    }
                })
            })]
        })
    });
    e.s(["default", 0, o], 953024);
    let a = {
            staging: {
                GTM_CONTAINER_ID: "GTM-MZ8KXV4S",
                ONE_TRUST_ID: "0196632b-47f4-7a2f-9807-8c6c20fb9d4d-test"
            },
            production: {
                GTM_CONTAINER_ID: "GTM-WS5CT69P",
                ONE_TRUST_ID: "0196632b-47f4-7a2f-9807-8c6c20fb9d4d"
            }
        },
        i = (0, r.memo)(function(e) {
            let {
                isFallRelease: r,
                isLegalPage: i
            } = e, s = "cash.app" === window.location.host || "cash.me" === window.location.host ? "production" : "staging";
            if (window ? .featureFlagsJson ? .["cash-frontend-marketing-gtm-visibility"] !== !0) return null;
            let {
                GTM_CONTAINER_ID: u,
                ONE_TRUST_ID: c
            } = a[s];
            return document.documentElement.style.setProperty("--one-trust-banner-bottom-mobile", i ? "0px" : "80px"), r && document.documentElement.style.setProperty("--one-trust-banner-bottom-desktop", "100px"), (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(n.default, {
                    src: `https://cdn.cookielaw.org/consent/${c}/otSDKStub.js`,
                    type: "text/javascript",
                    "data-domain-script": c,
                    nonce: window ? .cspn || "{{{cspNonce}}}",
                    "data-language": "en"
                }), (0, t.jsx)(o, {
                    gtmId: u
                })]
            })
        });
    e.s(["default", 0, i], 414594)
}, 316027, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(608547);
    e.i(667861);
    var n = e.i(482404),
        o = e.i(191788),
        a = e.i(768264),
        i = e.i(816918);
    let s = e => {
            let r = (0, a.default)();
            return (0, o.useEffect)(() => {
                (() => {
                    let e = "initial_referrer",
                        {
                            referrer: t
                        } = document,
                        r = (0, i.getRegionConfig)();
                    if (!r ? .hasOptedIntoStatisticsTracking) return;
                    let n = new Date(Date.now() + 18e5).toUTCString(),
                        o = document.cookie.split("; ").find(t => t.startsWith(`${e}=`));
                    if (o) {
                        let t = decodeURIComponent(o.split("=")[1]);
                        document.cookie = `${e}=${encodeURIComponent(t)}; path=/; SameSite=Strict; expires=${n}`;
                        return
                    }
                    t && (t.includes("cash.app") || (document.cookie = `${e}=${encodeURIComponent(t)}; path=/; SameSite=Strict; expires=${n}`))
                })()
            }, []), (0, o.useEffect)(() => {
                r((0, n.WebViewViewPage)({
                    pageName: e.pageName
                }))
            }, [r, e.pageName]), (0, t.jsx)(t.Fragment, {})
        },
        u = e => {
            let {
                pageName: t
            } = e, r = (0, a.default)();
            return (0, o.useEffect)(() => {
                let e = () => {
                        document.hidden && r((0, n.WebViewPageHide)({
                            pageName: t,
                            trigger: "VISIBILITY_CHANGE"
                        }))
                    },
                    o = () => {
                        r((0, n.WebViewPageHide)({
                            pageName: t,
                            trigger: "PAGE_HIDE"
                        }))
                    };
                return document.addEventListener("visibilitychange", e), window.addEventListener("pagehide", o), () => {
                    document.removeEventListener("visibilitychange", e), window.removeEventListener("pagehide", o)
                }
            }, [r, t]), null
        };
    var c = e.i(682704),
        l = e.i(953024),
        f = e.i(414594),
        d = e.i(464798),
        p = e.i(605570);
    let m = e => {
            "u" > typeof document && (document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`)
        },
        y = () => {
            let {
                consent: e
            } = (0, o.useContext)(p.OneTrustConsentContext);
            return e.performance || ["_gid", "_ga_*", "fs_uid", "fs_lua", "_dd_s", "_ga", "route"].forEach(m), e.functionality || ["squareGeo"].forEach(m), e.targeting || ["_gcl_au", "cid", "_gat_gtag_*", "IDE", "test_cookie"].forEach(m), (0, t.jsx)(t.Fragment, {})
        };
    var h = e.i(681845);

    function g(e) {
        let {
            Component: i,
            pageProps: m
        } = e;
        (0, c.default)(), m.model && (m.globalHeadModel = m.model.globalHeadModel, m.showCookieBanner = m.model.showCookieBanner, m.gtmId = m.model.gtmId, m.isLegalPage = m.model.isLegalPage);
        let g = (0, a.default)();
        (0, o.useEffect)(() => {
            (async () => {
                let e = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({})
                    },
                    [t, r] = await (0, d.default)("/2.0/cash/web/cookie-refresh", e);
                await fetch(t, r)
            })()
        }, []);
        let v = {
            isLegalPage: m.isLegalPage
        };
        return (0, t.jsx)(r.ExperimentsProvider, {
            children: (0, t.jsxs)(p.OneTrustConsentProvider, {
                logCdfEvent: e => g((0, n.WebConsentConsentGiven)(e)),
                children: [(0, t.jsx)(y, {}), (0, t.jsx)(s, {
                    pageName: m.globalHeadModel ? .title
                }), (0, t.jsx)(u, {
                    pageName: m.globalHeadModel ? .title
                }), !!m.showCookieBanner && (0, t.jsx)(f.default, { ...v
                }), !m.showCookieBanner && m.gtmId && (0, t.jsx)(l.default, {
                    gtmId: m.gtmId
                }), (0, t.jsx)(h.ThemeProvider, {
                    value: null,
                    children: (0, t.jsx)(i, { ...m
                    })
                })]
            })
        })
    }
    e.s(["default", () => g], 316027)
}, 294757, (e, t, r) => {
    let n = "/_app";
    (window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(316027)]), t.hot && t.hot.dispose(function() {
        window.__NEXT_P.push([n])
    })
}, 648761, e => {
    e.v(t => Promise.all(["static/chunks/a92f2f62a0caeaa8.js"].map(t => e.l(t))).then(() => t(493594)))
}, 828805, e => {
    e.v(t => Promise.all(["static/chunks/6a38f77c212293cb.js"].map(t => e.l(t))).then(() => t(879466)))
}]);
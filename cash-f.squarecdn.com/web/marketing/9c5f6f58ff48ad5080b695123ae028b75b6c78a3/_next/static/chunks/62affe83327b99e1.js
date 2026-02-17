(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 194375, e => {
    "use strict";
    let t = {};

    function r(e, r) {
        t[e] = r
    }
    e.s(["ComponentMap", () => t, "registerComponent", () => r])
}, 900169, e => {
    "use strict";
    let t = /Android|iPhone/i;
    e.s(["isMobilePhone", 0, () => void 0 === navigator ? (console.error(`
      You're likely calling this method from inside at build time. 
      NextJS SSR/SSG cannot detect the device. 
      Wrap this call in a useEffect or useLayoutEffect hook instead.
      `), !1) : t.test(navigator.userAgent)])
}, 559175, e => {
    e.v({
        common: "product-page-button-module-sass-module__Bz7Rpq__common",
        dark: "product-page-button-module-sass-module__Bz7Rpq__dark",
        default: "product-page-button-module-sass-module__Bz7Rpq__default",
        gradientBackgroundTextClip: "product-page-button-module-sass-module__Bz7Rpq__gradientBackgroundTextClip",
        gradientText: "product-page-button-module-sass-module__Bz7Rpq__gradientText",
        investing: "product-page-button-module-sass-module__Bz7Rpq__investing",
        large: "product-page-button-module-sass-module__Bz7Rpq__large",
        light: "product-page-button-module-sass-module__Bz7Rpq__light",
        presalePrimary: "product-page-button-module-sass-module__Bz7Rpq__presalePrimary",
        themed: "product-page-button-module-sass-module__Bz7Rpq__themed",
        withBoxShadow: "product-page-button-module-sass-module__Bz7Rpq__withBoxShadow"
    })
}, 732334, e => {
    e.v({
        clickable: "qr-code-badge-module-sass-module__fTfiRa__clickable",
        header: "qr-code-badge-module-sass-module__fTfiRa__header",
        outlined: "qr-code-badge-module-sass-module__fTfiRa__outlined",
        qrCodeBadge: "qr-code-badge-module-sass-module__fTfiRa__qrCodeBadge",
        title: "qr-code-badge-module-sass-module__fTfiRa__title"
    })
}, 845777, 375257, 362721, e => {
    "use strict";
    let t, r, n;
    var o, i, a, l, s, c, u = e.i(391398),
        d = e.i(900169),
        f = e.i(559175),
        p = e.i(191788),
        y = e.i(272043),
        h = e.i(726617);
    let m = e => {
        let {
            withBoxShadow: t = !1,
            style: r,
            href: n = null,
            onClick: o = null,
            size: i,
            children: a,
            analyticsIdentifier: l = null
        } = e, s = (0, y.default)(f.default.common, f.default[i], f.default[r], {
            [f.default.withBoxShadow]: t
        }), c = (0, p.useRef)(null);
        (0, h.default)({
            ref: c,
            href: n,
            analyticsIdentifier: l,
            onClick: o
        });
        let d = "gradientText" === r ? (0, u.jsx)("span", {
            className: f.default.gradientBackgroundTextClip,
            children: a
        }) : a;
        return n ? (0, u.jsx)("a", {
            className: s,
            href: n,
            ref: c,
            children: d
        }) : (0, u.jsx)("button", {
            className: `${s} ${f.default.button}`,
            onClick: o,
            children: d
        })
    };
    var g = e.i(217879),
        v = e.i(732334);
    let b = e => {
        let {
            qrCodeImage: t,
            title: r,
            variant: n = "default",
            onClick: o = null,
            logoColor: i = null
        } = e, a = (0, y.default)(v.default.qrCodeBadge, {
            [v.default.outlined]: "outlined" === n,
            [v.default.clickable]: null !== o
        });
        return (0, u.jsxs)("div", {
            className: a,
            onClick: o,
            children: [r && (0, u.jsx)("div", {
                className: v.default.header,
                children: (0, u.jsx)("div", {
                    className: v.default.title,
                    children: r
                })
            }), function(e, t) {
                if (!e) return null;
                switch (e.type) {
                    case "image":
                        return (0, u.jsx)("img", {
                            src: e.image.src,
                            alt: e.image.alt
                        });
                    case "generatedQrCodeImage":
                        return (0, u.jsx)("img", {
                            src: (0, g.buildQRUrl)({
                                id: e.token,
                                path: e.path,
                                margin: "20",
                                logoColor: t
                            }),
                            alt: e.altText
                        });
                    default:
                        throw Error("Unsupported qr code image type")
                }
            }(t, i)]
        })
    };
    e.s(["default", 0, b], 375257);
    var E = e.i(51517),
        _ = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 8290,
            4: 8291,
            5: 8288,
            6: 65279,
            7: 8289,
            8: 119155,
            9: 119156,
            a: 119157,
            b: 119158,
            c: 119159,
            d: 119160,
            e: 119161,
            f: 119162
        },
        C = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 65279
        },
        S = [, , , , ].fill(String.fromCodePoint(C[0])).join(""),
        O = Object.fromEntries(Object.entries(C).map(e => e.reverse())),
        L = Object.fromEntries(Object.entries(_).map(e => e.reverse())),
        T = `${Object.values(_).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
        A = RegExp(`[${T}]{4,}`, "gu");
    (function() {
        if (s) return;
        s = 1;
        var e = function() {
            if (a) return i;
            a = 1;
            var e = Object.prototype.hasOwnProperty,
                t = Object.prototype.toString;
            return i = function(r, n, o) {
                if ("[object Function]" !== t.call(n)) throw TypeError("iterator must be a function");
                var i = r.length;
                if (i === +i)
                    for (var a = 0; a < i; a++) n.call(o, r[a], a, r);
                else
                    for (var l in r) e.call(r, l) && n.call(o, r[l], l, r)
            }
        }();

        function t(e, r, n) {
            if (3 == arguments.length) return t.set(e, r, n);
            if (2 == arguments.length) return t.get(e, r);
            var o = t.bind(t, e);
            for (var i in t) t.hasOwnProperty(i) && (o[i] = t[i].bind(o, e));
            return o
        }
        l = t, t.get = function(e, r) {
            for (var n = Array.isArray(r) ? r : t.parse(r), o = 0; o < n.length; ++o) {
                var i = n[o];
                if (!("object" == typeof e && i in e)) throw Error("Invalid reference token: " + i);
                e = e[i]
            }
            return e
        }, t.set = function(e, r, n) {
            var o = Array.isArray(r) ? r : t.parse(r),
                i = o[0];
            if (0 === o.length) throw Error("Can not set the root object");
            for (var a = 0; a < o.length - 1; ++a) {
                var l = o[a];
                "string" != typeof l && "number" != typeof l && (l = String(l)), "__proto__" !== l && "constructor" !== l && "prototype" !== l && ("-" === l && Array.isArray(e) && (l = e.length), i = o[a + 1], l in e || (i.match(/^(\d+|-)$/) ? e[l] = [] : e[l] = {}), e = e[l])
            }
            return "-" === i && Array.isArray(e) && (i = e.length), e[i] = n, this
        }, t.remove = function(e, r) {
            var n = Array.isArray(r) ? r : t.parse(r),
                o = n[n.length - 1];
            if (void 0 === o) throw Error('Invalid JSON pointer for remove: "' + r + '"');
            var i = t.get(e, n.slice(0, -1));
            if (Array.isArray(i)) {
                var a = +o;
                if ("" === o && isNaN(a)) throw Error('Invalid array index: "' + o + '"');
                Array.prototype.splice.call(i, a, 1)
            } else delete i[o]
        }, t.dict = function(e, r) {
            var n = {};
            return t.walk(e, function(e, t) {
                n[t] = e
            }, r), n
        }, t.walk = function(r, n, o) {
            var i = [];
            o = o || function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object Object]" === t || "[object Array]" === t
                },
                function r(a) {
                    e(a, function(e, a) {
                        i.push(String(a)), o(e) ? r(e) : n(e, t.compile(i)), i.pop()
                    })
                }(r)
        }, t.has = function(e, r) {
            try {
                t.get(e, r)
            } catch {
                return !1
            }
            return !0
        }, t.escape = function(e) {
            return e.toString().replace(/~/g, "~0").replace(/\//g, "~1")
        }, t.unescape = function(e) {
            return e.replace(/~1/g, "/").replace(/~0/g, "~")
        }, t.parse = function(e) {
            if ("" === e) return [];
            if ("/" !== e.charAt(0)) throw Error("Invalid JSON pointer: " + e);
            return e.substring(1).split(/\//).map(t.unescape)
        }, t.compile = function(e) {
            return 0 === e.length ? "" : "/" + e.map(t.escape).join("/")
        }
    })();
    let w = "4.8.4",
        j = !1,
        P = e => function() {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            j && console[e](...r)
        },
        I = {
            error: P("error"),
            warn: P("warn"),
            log: P("log")
        },
        B = new Set(["AREA", "BASE", "BR", "COL", "EMBED", "HR", "IMG", "INPUT", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"]);

    function x(e, t, r) {
        let n = { ...t,
            method: e,
            source: "live-preview-sdk",
            location: window.location.href,
            version: w
        };
        I.log("Send message", n), r.forEach(e => {
            window.top ? .postMessage(n, e)
        })
    }
    var k = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : e.g,
        N = {
            exports: {}
        };
    N.exports;
    let R = (c || (c = 1, function(e, t) {
        var r, n, o, i = "__lodash_hash_undefined__",
            a = "[object Arguments]",
            l = "[object Array]",
            s = "[object Boolean]",
            c = "[object Date]",
            u = "[object Error]",
            d = "[object Function]",
            f = "[object Map]",
            p = "[object Number]",
            y = "[object Object]",
            h = "[object Promise]",
            m = "[object RegExp]",
            g = "[object Set]",
            v = "[object String]",
            b = "[object WeakMap]",
            E = "[object ArrayBuffer]",
            _ = "[object DataView]",
            C = /^\[object .+?Constructor\]$/,
            S = /^(?:0|[1-9]\d*)$/,
            O = {};
        O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = !0, O[a] = O[l] = O[E] = O[s] = O[_] = O[c] = O[u] = O[d] = O[f] = O[p] = O[y] = O[m] = O[g] = O[v] = O[b] = !1;
        var L = "object" == typeof k && k && k.Object === Object && k,
            T = "object" == typeof self && self && self.Object === Object && self,
            A = L || T || Function("return this")(),
            w = t && !t.nodeType && t,
            j = w && e && !e.nodeType && e,
            P = j && j.exports === w,
            I = P && L.process,
            B = function() {
                try {
                    return I && I.binding && I.binding("util")
                } catch {}
            }(),
            x = B && B.isTypedArray;

        function N(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(e, n) {
                r[++t] = [n, e]
            }), r
        }

        function R(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(e) {
                r[++t] = e
            }), r
        }
        var D = Array.prototype,
            M = Function.prototype,
            G = Object.prototype,
            H = A["__core-js_shared__"],
            K = M.toString,
            U = G.hasOwnProperty,
            F = (r = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
            W = G.toString,
            z = RegExp("^" + K.call(U).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            Y = P ? A.Buffer : void 0,
            V = A.Symbol,
            $ = A.Uint8Array,
            q = G.propertyIsEnumerable,
            Z = D.splice,
            J = V ? V.toStringTag : void 0,
            Q = Object.getOwnPropertySymbols,
            X = Y ? Y.isBuffer : void 0,
            ee = (n = Object.keys, o = Object, function(e) {
                return n(o(e))
            }),
            et = eL(A, "DataView"),
            er = eL(A, "Map"),
            en = eL(A, "Promise"),
            eo = eL(A, "Set"),
            ei = eL(A, "WeakMap"),
            ea = eL(Object, "create"),
            el = ew(et),
            es = ew(er),
            ec = ew(en),
            eu = ew(eo),
            ed = ew(ei),
            ef = V ? V.prototype : void 0,
            ep = ef ? ef.valueOf : void 0;

        function ey(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function eh(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function em(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function eg(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.__data__ = new em; ++t < r;) this.add(e[t])
        }

        function ev(e) {
            var t = this.__data__ = new eh(e);
            this.size = t.size
        }

        function eb(e, t) {
            for (var r = e.length; r--;)
                if (ej(e[r][0], t)) return r;
            return -1
        }

        function eE(e) {
            var t;
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : J && J in Object(e) ? function(e) {
                var t = U.call(e, J),
                    r = e[J];
                try {
                    e[J] = void 0;
                    var n = !0
                } catch {}
                var o = W.call(e);
                return n && (t ? e[J] = r : delete e[J]), o
            }(e) : (t = e, W.call(t))
        }

        function e_(e) {
            return eR(e) && eE(e) == a
        }

        function eC(e, t, r, n, o, i) {
            var a = 1 & r,
                l = e.length,
                s = t.length;
            if (l != s && !(a && s > l)) return !1;
            var c = i.get(e);
            if (c && i.get(t)) return c == t;
            var u = -1,
                d = !0,
                f = 2 & r ? new eg : void 0;
            for (i.set(e, t), i.set(t, e); ++u < l;) {
                var p = e[u],
                    y = t[u];
                if (n) var h = a ? n(y, p, u, t, e, i) : n(p, y, u, e, t, i);
                if (void 0 !== h) {
                    if (h) continue;
                    d = !1;
                    break
                }
                if (f) {
                    if (! function(e, t) {
                            for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                                if (t(e[r], r, e)) return !0;
                            return !1
                        }(t, function(e, t) {
                            if (!f.has(t) && (p === e || o(p, e, r, n, i))) return f.push(t)
                        })) {
                        d = !1;
                        break
                    }
                } else if (!(p === y || o(p, y, r, n, i))) {
                    d = !1;
                    break
                }
            }
            return i.delete(e), i.delete(t), d
        }

        function eS(e) {
            var t;
            return t = eM(e), eI(e) ? t : function(e, t) {
                for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
                return e
            }(t, eT(e))
        }

        function eO(e, t) {
            var r, n, o = e.__data__;
            return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? o["string" == typeof t ? "string" : "hash"] : o.map
        }

        function eL(e, t) {
            var r, n = e ? .[t];
            return !(!eN(n) || (r = n, F && F in r)) && (ex(n) ? z : C).test(ew(n)) ? n : void 0
        }
        ey.prototype.clear = function() {
            this.__data__ = ea ? ea(null) : {}, this.size = 0
        }, ey.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= !!t, t
        }, ey.prototype.get = function(e) {
            var t = this.__data__;
            if (ea) {
                var r = t[e];
                return r === i ? void 0 : r
            }
            return U.call(t, e) ? t[e] : void 0
        }, ey.prototype.has = function(e) {
            var t = this.__data__;
            return ea ? void 0 !== t[e] : U.call(t, e)
        }, ey.prototype.set = function(e, t) {
            var r = this.__data__;
            return this.size += +!this.has(e), r[e] = ea && void 0 === t ? i : t, this
        }, eh.prototype.clear = function() {
            this.__data__ = [], this.size = 0
        }, eh.prototype.delete = function(e) {
            var t = this.__data__,
                r = eb(t, e);
            return !(r < 0) && (r == t.length - 1 ? t.pop() : Z.call(t, r, 1), --this.size, !0)
        }, eh.prototype.get = function(e) {
            var t = this.__data__,
                r = eb(t, e);
            return r < 0 ? void 0 : t[r][1]
        }, eh.prototype.has = function(e) {
            return eb(this.__data__, e) > -1
        }, eh.prototype.set = function(e, t) {
            var r = this.__data__,
                n = eb(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }, em.prototype.clear = function() {
            this.size = 0, this.__data__ = {
                hash: new ey,
                map: new(er || eh),
                string: new ey
            }
        }, em.prototype.delete = function(e) {
            var t = eO(this, e).delete(e);
            return this.size -= !!t, t
        }, em.prototype.get = function(e) {
            return eO(this, e).get(e)
        }, em.prototype.has = function(e) {
            return eO(this, e).has(e)
        }, em.prototype.set = function(e, t) {
            var r = eO(this, e),
                n = r.size;
            return r.set(e, t), this.size += +(r.size != n), this
        }, eg.prototype.add = eg.prototype.push = function(e) {
            return this.__data__.set(e, i), this
        }, eg.prototype.has = function(e) {
            return this.__data__.has(e)
        }, ev.prototype.clear = function() {
            this.__data__ = new eh, this.size = 0
        }, ev.prototype.delete = function(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }, ev.prototype.get = function(e) {
            return this.__data__.get(e)
        }, ev.prototype.has = function(e) {
            return this.__data__.has(e)
        }, ev.prototype.set = function(e, t) {
            var r = this.__data__;
            if (r instanceof eh) {
                var n = r.__data__;
                if (!er || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new em(n)
            }
            return r.set(e, t), this.size = r.size, this
        };
        var eT = Q ? function(e) {
                return null == e ? [] : function(e, t) {
                    for (var r = -1, n = null == e ? 0 : e.length, o = 0, i = []; ++r < n;) {
                        var a = e[r];
                        t(a, r, e) && (i[o++] = a)
                    }
                    return i
                }(Q(e = Object(e)), function(t) {
                    return q.call(e, t)
                })
            } : function() {
                return []
            },
            eA = eE;

        function ew(e) {
            if (null != e) {
                try {
                    return K.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }

        function ej(e, t) {
            return e === t || e != e && t != t
        }(et && eA(new et(new ArrayBuffer(1))) != _ || er && eA(new er) != f || en && eA(en.resolve()) != h || eo && eA(new eo) != g || ei && eA(new ei) != b) && (eA = function(e) {
            var t = eE(e),
                r = t == y ? e.constructor : void 0,
                n = r ? ew(r) : "";
            if (n) switch (n) {
                case el:
                    return _;
                case es:
                    return f;
                case ec:
                    return h;
                case eu:
                    return g;
                case ed:
                    return b
            }
            return t
        });
        var eP = e_(function() {
                return arguments
            }()) ? e_ : function(e) {
                return eR(e) && U.call(e, "callee") && !q.call(e, "callee")
            },
            eI = Array.isArray,
            eB = X || function() {
                return !1
            };

        function ex(e) {
            if (!eN(e)) return !1;
            var t = eE(e);
            return t == d || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }

        function ek(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
        }

        function eN(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }

        function eR(e) {
            return null != e && "object" == typeof e
        }
        var eD = x ? function(e) {
            return x(e)
        } : function(e) {
            return eR(e) && ek(e.length) && !!O[eE(e)]
        };

        function eM(e) {
            return null != e && ek(e.length) && !ex(e) ? function(e, t) {
                var r, n, o = eI(e),
                    i = !o && eP(e),
                    a = !o && !i && eB(e),
                    l = !o && !i && !a && eD(e),
                    s = o || i || a || l,
                    c = s ? function(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    }(e.length, String) : [],
                    u = c.length;
                for (var d in e) {
                    U.call(e, d) && !(s && ("length" == d || a && ("offset" == d || "parent" == d) || l && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || (r = d, (n = (n = u) ? ? 0x1fffffffffffff) && ("number" == typeof r || S.test(r)) && r > -1 && r % 1 == 0 && r < n))) && c.push(d)
                }
                return c
            }(e) : function(e) {
                if (r = (t = e) && t.constructor, t !== ("function" == typeof r && r.prototype || G)) return ee(e);
                var t, r, n = [];
                for (var o in Object(e)) U.call(e, o) && "constructor" != o && n.push(o);
                return n
            }(e)
        }
        e.exports = function(e, t) {
            return function e(t, r, n, o, i) {
                return t === r || (null != t && null != r && (eR(t) || eR(r)) ? function(e, t, r, n, o, i) {
                    var d = eI(e),
                        h = eI(t),
                        b = d ? l : eA(e),
                        C = h ? l : eA(t);
                    b = b == a ? y : b, C = C == a ? y : C;
                    var S = b == y,
                        O = C == y,
                        L = b == C;
                    if (L && eB(e)) {
                        if (!eB(t)) return !1;
                        d = !0, S = !1
                    }
                    if (L && !S) return i || (i = new ev), d || eD(e) ? eC(e, t, r, n, o, i) : function(e, t, r, n, o, i, a) {
                        switch (r) {
                            case _:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                e = e.buffer, t = t.buffer;
                            case E:
                                return !(e.byteLength != t.byteLength || !i(new $(e), new $(t)));
                            case s:
                            case c:
                            case p:
                                return ej(+e, +t);
                            case u:
                                return e.name == t.name && e.message == t.message;
                            case m:
                            case v:
                                return e == t + "";
                            case f:
                                var l = N;
                            case g:
                                var d = 1 & n;
                                if (l || (l = R), e.size != t.size && !d) break;
                                var y = a.get(e);
                                if (y) return y == t;
                                n |= 2, a.set(e, t);
                                var h = eC(l(e), l(t), n, o, i, a);
                                return a.delete(e), h;
                            case "[object Symbol]":
                                if (ep) return ep.call(e) == ep.call(t)
                        }
                        return !1
                    }(e, t, b, r, n, o, i);
                    if (!(1 & r)) {
                        var T = S && U.call(e, "__wrapped__"),
                            A = O && U.call(t, "__wrapped__");
                        if (T || A) {
                            var w = T ? e.value() : e,
                                j = A ? t.value() : t;
                            return i || (i = new ev), o(w, j, r, n, i)
                        }
                    }
                    return !!L && (i || (i = new ev), function(e, t, r, n, o, i) {
                        var a = 1 & r,
                            l = eS(e),
                            s = l.length;
                        if (s != eS(t).length && !a) return !1;
                        for (var c = s; c--;) {
                            var u = l[c];
                            if (!(a ? u in t : U.call(t, u))) return !1
                        }
                        var d = i.get(e);
                        if (d && i.get(t)) return d == t;
                        var f = !0;
                        i.set(e, t), i.set(t, e);
                        for (var p = a; ++c < s;) {
                            var y = e[u = l[c]],
                                h = t[u];
                            if (n) var m = a ? n(h, y, u, t, e, i) : n(y, h, u, e, t, i);
                            if (!(void 0 === m ? y === h || o(y, h, r, n, i) : m)) {
                                f = !1;
                                break
                            }
                            p || (p = "constructor" == u)
                        }
                        if (f && !p) {
                            var g = e.constructor,
                                v = t.constructor;
                            g != v && "constructor" in e && "constructor" in t && !("function" == typeof g && g instanceof g && "function" == typeof v && v instanceof v) && (f = !1)
                        }
                        return i.delete(e), i.delete(t), f
                    }(e, t, r, n, o, i))
                }(t, r, n, o, e, i) : t != t && r != r)
            }(e, t)
        }
    }(N, N.exports)), (o = N.exports) && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")) ? o.default : o;
    var D = ((t = D || {}).FIELD_ID = "data-contentful-field-id", t.ENTRY_ID = "data-contentful-entry-id", t.ASSET_ID = "data-contentful-asset-id", t.LOCALE = "data-contentful-locale", t.SPACE = "data-contentful-space", t.ENVIRONMENT = "data-contentful-environment", t),
        M = ((r = M || {}).MOUSE_MOVE = "MOUSE_MOVE", r.SCROLL_START = "SCROLL_START", r.SCROLL_END = "SCROLL_END", r.RESIZE_START = "RESIZE_START", r.RESIZE_END = "RESIZE_END", r.TAGGED_ELEMENTS = "TAGGED_ELEMENTS", r.INSPECTOR_MODE_CHANGED = "INSPECTOR_MODE_CHANGED", r),
        G = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 8290,
            4: 8291,
            5: 8288,
            6: 65279,
            7: 8289,
            8: 119155,
            9: 119156,
            a: 119157,
            b: 119158,
            c: 119159,
            d: 119160,
            e: 119161,
            f: 119162
        },
        H = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 65279
        };
    [, , , , ].fill(String.fromCodePoint(H[0])).join(""), Object.fromEntries(Object.entries(H).map(e => e.reverse())), Object.fromEntries(Object.entries(G).map(e => e.reverse()));
    var K = `${Object.values(G).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
        U = RegExp(`[${K}]{4,}`, "gu");

    function F(e, t) {
        return e.href === t.href
    }

    function W(e) {
        var t, r;
        let n, {
                root: o = window.document,
                options: i
            } = e,
            a = [...i.ignoreManuallyTaggedElements ? [] : o.querySelectorAll(`[${D.ASSET_ID}][${D.FIELD_ID}], [${D.ENTRY_ID}][${D.FIELD_ID}]`)].map(e => ({
                element: e,
                attributes: function(e, t) {
                    if (!(e && e.nodeType === Node.ELEMENT_NODE && !(!e.hasAttribute(D.FIELD_ID) || !e.hasAttribute(D.ENTRY_ID) && !e.hasAttribute(D.ASSET_ID)))) return null;
                    let r = {
                        fieldId: e.getAttribute(D.FIELD_ID),
                        locale: e.getAttribute(D.LOCALE) ? ? t.locale,
                        environment: e.getAttribute(D.ENVIRONMENT) ? ? t.environment,
                        space: e.getAttribute(D.SPACE) ? ? t.space,
                        manuallyTagged: !0
                    };
                    if (!r.fieldId) return I.warn("Element is missing field ID attribute and cannot be tagged", {
                        id: e.getAttribute(D.ENTRY_ID) ? ? e.getAttribute(D.ASSET_ID),
                        sharedProps: r
                    }), null;
                    let n = e.getAttribute(D.ENTRY_ID);
                    if (n) return { ...r,
                        entryId: n
                    };
                    let o = e.getAttribute(D.ASSET_ID);
                    return o ? { ...r,
                        assetId: o
                    } : null
                }(e, i)
            })).filter(e => {
                let {
                    attributes: t
                } = e;
                return null !== t
            }),
            l = [];
        for (let {
                node: e,
                text: r
            } of (t = "body" in o ? o.body : o, n = [], "function" == typeof t.matches && t.matches("*") && (n = [t]), [...n, ...Array.from(t.querySelectorAll("*:not(script,style,meta,title)"))].map(e => {
                var t;
                return {
                    node: e,
                    text: (t = e).matches("input[type=submit], input[type=button], input[type=reset]") ? t.value : t.matches("img, video") ? t.alt : Array.from(t.childNodes).filter(e => e.nodeType === Node.TEXT_NODE && !!e.textContent).map(e => e.textContent).join("")
                }
            }).filter(e => {
                let {
                    text: t
                } = e;
                return !!(t && t.match(U))
            }))) {
            let t = function(e) {
                let t = e.match(A);
                return t ? function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = Array.from(e);
                    if (r.length % 2 == 0) {
                        if (r.length % 4 || !e.startsWith(S)) return function(e, t) {
                            var r;
                            let n = [];
                            for (let t = .5 * e.length; t--;) {
                                let r = `${L[e[2*t].codePointAt(0)]}${L[e[2*t+1].codePointAt(0)]}`;
                                n.unshift(String.fromCharCode(parseInt(r, 16)))
                            }
                            let o = [],
                                i = [n.join("")],
                                a = 10;
                            for (; i.length;) {
                                let e = i.shift();
                                try {
                                    if (o.push(JSON.parse(e)), t) break
                                } catch (n) {
                                    if (!a--) throw n;
                                    let t = +(null == (r = n.message.match(/\sposition\s(\d+)$/)) ? void 0 : r[1]);
                                    if (!t) throw n;
                                    i.unshift(e.substring(0, t), e.substring(t))
                                }
                            }
                            return o
                        }(r, t)
                    } else throw Error("Encoded data has invalid length");
                    let n = [];
                    for (let e = .25 * r.length; e--;) {
                        let t = r.slice(4 * e, 4 * e + 4).map(e => O[e.codePointAt(0)]).join("");
                        n.unshift(String.fromCharCode(parseInt(t, 4)))
                    }
                    if (t) {
                        n.shift();
                        let e = n.indexOf("\0");
                        return -1 === e && (e = n.length), [JSON.parse(n.slice(0, e).join(""))]
                    }
                    return n.join("").split("\0").filter(Boolean).map(e => JSON.parse(e))
                }(t[0], !0)[0] : void 0
            }(r);
            if (!t || !t.origin.includes("contentful.com")) {
                I.warn("Element has missing or invalid ContentSourceMap, please check if you have correctly enabled ContentSourceMaps and that the element's data originates from Contentful", {
                    node: e,
                    sourceMap: t
                });
                continue
            }
            if (!(function(e, t) {
                    for (let r of t)
                        if (r.element === e || r.element.contains(e)) return !0;
                    return !1
                }(e, a) || l.some(r => r.element.contains(e) && F(r.sourceMap, t)))) {
                if (e.matches("img")) {
                    let r = e.closest("figure") || e.closest("picture") || e;
                    l.push({
                        element: r,
                        sourceMap: t
                    });
                    continue
                }
                l.push({
                    element: e,
                    sourceMap: t
                })
            }
        }
        let s = l.filter((e, t) => l.findIndex(t => !(!F(e.sourceMap, t.sourceMap) || e.element !== t.element)) === t);
        for (let {
                element: e,
                sourceMap: t
            } of s) {
            let n = null;
            if (t.href) {
                let r = function(e) {
                    try {
                        let t, r, n = new URL(e),
                            o = n.searchParams.get("focusedField"),
                            i = n.searchParams.get("focusedLocale"),
                            a = n.pathname.split("/").filter(Boolean),
                            l = a.indexOf("spaces"),
                            s = a.indexOf("environments"),
                            c = -1 !== l ? a[l + 1] : void 0,
                            u = -1 !== s ? a[s + 1] : void 0,
                            d = a.indexOf("entries"),
                            f = a.indexOf("assets");
                        return -1 !== d ? (t = "Entry", r = a[d + 1]) : -1 !== f && (t = "Asset", r = a[f + 1]), t && r ? o ? i ? c && u ? {
                            entityId: r,
                            entityType: t,
                            fieldId: o,
                            locale: i,
                            space: c,
                            environment: u
                        } : (console.warn("Missing space or environment in href path", {
                            href: e
                        }), null) : (console.warn("Missing focusedLocale query parameter in href", {
                            href: e
                        }), null) : (console.warn("Missing focusedField query parameter in href", {
                            href: e
                        }), null) : (console.warn("Unable to determine entityType or entityId from href", {
                            href: e
                        }), null)
                    } catch (t) {
                        return console.warn("Invalid href URL", {
                            href: e,
                            error: t
                        }), null
                    }
                }(t.href);
                if (!r) continue;
                if ("Asset" === r.entityType) n = {
                    fieldId: r.fieldId,
                    locale: r.locale,
                    space: r.space,
                    environment: r.environment,
                    assetId: r.entityId
                };
                else if ("Entry" === r.entityType) n = {
                    fieldId: r.fieldId,
                    locale: r.locale,
                    space: r.space,
                    environment: r.environment,
                    entryId: r.entityId
                };
                else {
                    I.warn("Unknown entityType", {
                        element: e,
                        sourceMap: t
                    });
                    continue
                }
            } else {
                if (t.contentful && (r = t.contentful) && "string" == typeof r.entity && "string" == typeof r.field && "string" == typeof r.locale && "string" == typeof r.space && "string" == typeof r.environment && ("Asset" === r.entityType || "Entry" === r.entityType)) {
                    let r = t.contentful;
                    if (!r.entity || !r.field || !r.locale || !r.space || !r.environment) {
                        I.warn("Element has missing information in their ContentSourceMap, please check if you have restricted the platform for the encoding. (Missing parameters in `contentful`)", {
                            element: e,
                            sourceMap: t
                        });
                        continue
                    }
                    let o = {
                        fieldId: r.field,
                        locale: r.locale,
                        space: r.space,
                        environment: r.environment
                    };
                    if ("Asset" === r.entityType) o.assetId = r.entity, n = o;
                    else if ("Entry" === r.entityType) o.entryId = r.entity, n = o;
                    else {
                        I.warn("Unknown entityType in contentful data", {
                            element: e,
                            sourceMap: t
                        });
                        continue
                    }
                } else {
                    I.warn("Element has neither href nor contentful data in their ContentSourceMap, unable to extract attributes.", {
                        element: e,
                        sourceMap: t
                    });
                    continue
                }
            }
            a.push({
                element: e,
                attributes: n
            })
        }
        let c = a.filter(e => {
            let {
                attributes: t
            } = e;
            return t ? .manuallyTagged === !1 || !t ? .manuallyTagged
        }).length;
        return {
            taggedElements: a,
            manuallyTaggedCount: a.length - c,
            automaticallyTaggedCount: c,
            autoTaggedElements: s
        }
    }

    function z(e) {
        let {
            options: t
        } = e;
        return [...new Set(W({
            options: t
        }).taggedElements.map(e => e.attributes && "entryId" in e.attributes ? e.attributes.entryId : null).filter(Boolean))]
    }
    let Y = function(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.document,
                {
                    top: n,
                    right: o,
                    bottom: i,
                    left: a
                } = t,
                l = r.elementFromPoint(a + 1, n + 1),
                s = r.elementFromPoint(o - 1, n + 1),
                c = r.elementFromPoint(a + 1, i - 1),
                u = r.elementFromPoint(o - 1, i - 1),
                d = t => !!t && (e === t || e.contains(t));
            return [d(l), d(s), d(c), d(u)].filter(Boolean).length < 2
        },
        V = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document;
            return e.map(e => ({ ...e,
                isVisible: e.element.checkVisibility({
                    checkOpacity: !0,
                    checkVisibilityCSS: !0
                }),
                isCoveredByOtherElement: Y(e.element, e.coordinates, t)
            }))
        },
        $ = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document;
            return V(e.map(e => {
                let {
                    element: t,
                    attributes: r
                } = e;
                return {
                    element: t,
                    coordinates: t.getBoundingClientRect(),
                    attributes: r
                }
            }), t)
        };
    class q {
        constructor(e) {
            this.options = e, this.intersectionObserver = new IntersectionObserver(e => {
                let t = this.taggedElements;
                for (let r of e)
                    if (r.isIntersecting)
                        for (let e of t) e.element === r.target && (e.coordinates = r.intersectionRect, e.isVisible = r.target.checkVisibility({
                            checkOpacity: !0,
                            checkVisibilityCSS: !0
                        }));
                this.taggedElements = t, this.sendTaggedElements()
            }, {
                threshold: .15
            })
        }
        delay = 300;
        isScrolling = !1;
        scrollTimeout;
        isResizing = !1;
        resizeTimeout;
        hoveredElement;
        taggedElements = [];
        manuallyTaggedCount = 0;
        automaticallyTaggedCount = 0;
        releaseId;
        intersectionObserver;
        observersCB = [];
        cleanupCB = [];
        init = () => {
            this.cleanupCB = [this.addScrollListener(), this.addMutationListener(document.body), this.addResizeListener(), this.addHoverListener()], this.updateElements()
        };
        cleanup = () => {
            this.observersCB.forEach(e => e()), this.cleanupCB.forEach(e => e())
        };
        receiveMessage = e => {
            if (e.method === M.INSPECTOR_MODE_CHANGED) {
                let {
                    isInspectorActive: t,
                    releaseId: r
                } = e;
                this.releaseId = r, t ? this.init() : this.cleanup()
            }
        };
        observe = e => {
            this.intersectionObserver.observe(e);
            let t = this.addMutationListener(e);
            this.observersCB.push(t, () => this.intersectionObserver.unobserve(e))
        };
        addScrollListener = () => {
            let {
                targetOrigin: e
            } = this.options, t = () => {
                this.isScrolling || (this.isScrolling = !0, x(M.SCROLL_START, {}, e)), this.scrollTimeout && clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout(() => {
                    this.isScrolling = !1, x(M.SCROLL_END, {}, e), this.updateElements()
                }, this.delay)
            }, r = {
                capture: !0,
                passive: !0
            };
            return window.addEventListener("scroll", t, r), () => window.removeEventListener("scroll", t, r)
        };
        addMutationListener = e => {
            let t = new MutationObserver(() => {
                this.updateElements()
            });
            return t.observe(e, {
                characterData: !0,
                attributes: !0,
                attributeFilter: [D.ENTRY_ID, D.FIELD_ID, D.LOCALE, D.SPACE, D.ENVIRONMENT, "class", "style"],
                childList: !0,
                subtree: !0
            }), () => t.disconnect()
        };
        addResizeListener = () => {
            let {
                targetOrigin: e
            } = this.options, t = new ResizeObserver(() => {
                this.isResizing || (this.isResizing = !0, x(M.RESIZE_START, {}, e)), this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => {
                    this.isResizing = !1, x(M.RESIZE_END, {}, e), this.updateElements()
                }, this.delay)
            });
            return t.observe(document.body), () => t.disconnect()
        };
        addHoverListener = () => {
            let e = function(e) {
                    let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                    var n = this;
                    return function() {
                        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                        clearTimeout(t), t = setTimeout(() => {
                            e.apply(n, i)
                        }, r)
                    }
                }(e => {
                    let t;
                    for (let r of e) {
                        let e = r;
                        if ("BODY" === e.nodeName) break;
                        let n = this.taggedElements.find(t => t.element === e);
                        if (n) {
                            t = n;
                            break
                        }
                    }
                    this.hoveredElement = t ? .element, this.updateElements()
                }, this.delay),
                t = t => {
                    e(t.composedPath())
                };
            return window.addEventListener("mouseover", t, {
                passive: !0
            }), () => window.removeEventListener("mouseover", t)
        };
        sendTaggedElements = () => {
            x(M.TAGGED_ELEMENTS, {
                elements: this.taggedElements.map(e => ({
                    coordinates: e.coordinates,
                    isVisible: !!e.isVisible,
                    attributes: e.attributes,
                    isHovered: this.hoveredElement === e.element,
                    isCoveredByOtherElement: !!e.isCoveredByOtherElement,
                    snapshot: B.has(e.element.tagName.toUpperCase()) ? {
                        [e.element.tagName.toLowerCase()]: Array.from(e.element.attributes).map(e => `${e.name}="${e.value}"`).join(" ")
                    } : {
                        [e.element.tagName.toLowerCase()]: e.element.innerHTML
                    }
                })),
                automaticallyTaggedCount: this.automaticallyTaggedCount,
                manuallyTaggedCount: this.manuallyTaggedCount,
                ...void 0 !== this.releaseId && {
                    releaseId: this.releaseId
                }
            }, this.options.targetOrigin)
        };
        updateElements = () => {
            let {
                taggedElements: e,
                manuallyTaggedCount: t,
                automaticallyTaggedCount: r
            } = W({
                options: this.options
            }), n = $(e);
            R(n, this.taggedElements) || (this.observersCB.forEach(e => e()), this.observersCB = [], this.taggedElements = n, e.forEach(e => {
                let {
                    element: t
                } = e;
                return this.observe(t)
            }), this.manuallyTaggedCount = t, this.automaticallyTaggedCount = r)
        }
    }
    let {
        stringify: Z
    } = JSON, J = String, Q = (e, t) => t, X = (e, t, r) => {
        let n = J(t.push(r) - 1);
        return e.set(r, n), n
    };
    var ee = ((n = ee || {}).CONNECTED = "CONNECTED", n.DISCONNECTED = "DISCONNECTED", n.ERROR = "ERROR", n.TAGGED_FIELD_CLICKED = "TAGGED_FIELD_CLICKED", n.URL_CHANGED = "URL_CHANGED", n.SUBSCRIBED = "SUBSCRIBED", n.UNSUBSCRIBED = "UNSUBSCRIBED", n.ENTRY_UPDATED = "ENTRY_UPDATED", n.ENTRY_SAVED = "ENTRY_SAVED", n.DEBUG_MODE_ENABLED = "DEBUG_MODE_ENABLED", n);
    class et {
        subscriptions = new Map;
        defaultLocale;
        sendMessage;
        constructor({
            locale: e,
            targetOrigin: t
        }) {
            this.defaultLocale = e, this.sendMessage = (e, r) => x(e, r, t)
        }
        async receiveMessage(e) {
            if (e.method === ee.ENTRY_UPDATED) {
                let {
                    data: t,
                    subscriptionId: r
                } = e, n = this.subscriptions.get(r);
                n ? (n.callback(t), n.data = t, this.subscriptions.set(r, n)) : I.error("Received an update for an unknown subscription", {
                    subscriptionId: r,
                    data: t,
                    subscriptions: this.subscriptions
                })
            }
        }
        subscribe(e) {
            let t = `${performance.now()}-${Math.random().toString(36).slice(2)}`,
                r = e.locale ? ? this.defaultLocale;
            this.subscriptions.set(t, { ...e
            });
            let n = {
                locale: r,
                event: "edit",
                id: t,
                config: ((e, t, r) => {
                    let n = new Map,
                        o = [],
                        i = [],
                        a = +X(n, o, Q.call({
                            "": e
                        }, "", e)),
                        l = !a;
                    for (; a < o.length;) l = !0, i[a] = Z(o[a++], s, r);
                    return "[" + i.join(",") + "]";

                    function s(e, t) {
                        if (l) return l = !l, t;
                        let r = Q.call(this, e, t);
                        switch (typeof r) {
                            case "object":
                                if (null === r) break;
                            case "string":
                                return n.get(r) || X(n, o, r)
                        }
                        return r
                    }
                })(e)
            };
            return this.sendMessage(ee.SUBSCRIBED, n), () => {
                this.sendMessage(ee.UNSUBSCRIBED, n), this.subscriptions.delete(t)
            }
        }
    }
    class er {
        locale;
        options;
        inspectorModeEnabled;
        subscription;
        constructor({
            locale: e,
            options: t,
            inspectorModeEnabled: r
        }) {
            this.locale = e, this.options = t, this.inspectorModeEnabled = r
        }
        subscribe(e) {
            return this.subscription && I.log("There is already a subscription for the save event, the existing one will be replaced."), this.subscription = e, () => {
                this.subscription = void 0
            }
        }
        receiveMessage(e) {
            if (e.method === ee.ENTRY_SAVED && this.subscription) {
                let {
                    entity: t
                } = e;
                this.inspectorModeEnabled ? z({
                    options: this.options
                }).includes(t.sys.id) && this.subscription(t) : this.subscription(t)
            }
        }
    }
    let en = ["https://app.contentful.com", "https://app.eu.contentful.com", "http://localhost:3001"];
    class eo {
        static initialized = !1;
        static inspectorMode = null;
        static liveUpdates = null;
        static saveEvent = null;
        static inspectorModeEnabled = !0;
        static liveUpdatesEnabled = !0;
        static locale;
        static space;
        static environment;
        static sendMessage;
        static targetOrigin;
        static init(e) {
            if ("object" != typeof e || !e ? .locale) throw Error("Init function has to be called with a locale configuration (for example: `ContentfulLivePreview.init({ locale: 'en-US'})`)");
            let {
                debugMode: t,
                enableInspectorMode: r,
                enableLiveUpdates: n,
                locale: o,
                environment: i,
                space: a,
                targetOrigin: l
            } = e;
            if ("u" > typeof window) {
                if (! function() {
                        try {
                            return window.top ? .location.href !== window.location.href
                        } catch {
                            return !0
                        }
                    }()) return this.liveUpdatesEnabled = !1, Promise.resolve(null);
                if (t && (j = t), "boolean" == typeof r && (this.inspectorModeEnabled = r), "boolean" == typeof n && (this.liveUpdatesEnabled = n), this.locale = o, this.space = a, this.environment = i, this.initTargetOrigin(l), this.initialized) return I.log("You have already initialized the Live Preview SDK."), Promise.resolve(eo.inspectorMode);
                this.inspectorModeEnabled && (this.inspectorMode = new q({
                        locale: o,
                        space: a,
                        environment: i,
                        targetOrigin: this.targetOrigin,
                        ignoreManuallyTaggedElements: e.experimental ? .ignoreManuallyTaggedElements
                    })), this.liveUpdatesEnabled && (this.liveUpdates = new et({
                        locale: o,
                        targetOrigin: this.targetOrigin
                    }), this.saveEvent = new er({
                        locale: o,
                        options: {
                            locale: this.locale,
                            space: this.space,
                            environment: this.environment,
                            targetOrigin: this.targetOrigin
                        },
                        inspectorModeEnabled: this.inspectorModeEnabled
                    })), window.addEventListener("message", e => {
                        if ("object" == typeof e.data && e.data && "source" in e.data && "live-preview-editor" === e.data.source) {
                            if (I.log("Received message", e.data), e.data.method === ee.DEBUG_MODE_ENABLED) return void(j = !0);
                            this.inspectorModeEnabled && this.inspectorMode ? .receiveMessage(e.data), this.liveUpdatesEnabled && (this.liveUpdates ? .receiveMessage(e.data), this.saveEvent ? .receiveMessage(e.data))
                        }
                    }),
                    function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                            r = window.location.href,
                            n = setInterval(() => {
                                let t = window.location.href;
                                t !== r && (r = t, e(t))
                            }, t)
                    }(() => {
                        x(ee.URL_CHANGED, {
                            action: ee.URL_CHANGED,
                            taggedElementCount: document.querySelectorAll(`[${D.ENTRY_ID}]`).length
                        }, this.targetOrigin)
                    });
                let {
                    taggedElements: s,
                    manuallyTaggedCount: c,
                    automaticallyTaggedCount: u
                } = this.inspectorModeEnabled ? W({
                    options: {
                        locale: this.locale,
                        space: this.space,
                        environment: this.environment
                    }
                }) : {
                    taggedElements: [],
                    manuallyTaggedCount: 0,
                    automaticallyTaggedCount: 0
                }, d = s.length;
                return x(ee.CONNECTED, {
                    action: ee.CONNECTED,
                    connected: !0,
                    tags: d,
                    taggedElementCount: d,
                    locale: this.locale,
                    isInspectorEnabled: this.inspectorModeEnabled,
                    isLiveUpdatesEnabled: this.liveUpdatesEnabled,
                    manuallyTaggedElementCount: c,
                    automaticallyTaggedElementCount: u,
                    hideCoveredElementOutlines: e.experimental ? .hideCoveredElementOutlines,
                    version: w
                }, this.targetOrigin), this.initialized = !0, Promise.resolve(eo.inspectorMode)
            }
        }
        static initTargetOrigin(e) {
            if (e) this.targetOrigin = Array.isArray(e) ? e : [e];
            else {
                let e = window.location.ancestorOrigins,
                    t = e ? en.find(t => e.contains(t)) : en.find(e => document.referrer.includes(e));
                if (!t) throw Error("The current origin is not supported. Please provide a targetOrigin in the live preview configuration.");
                this.targetOrigin = [t]
            }
        }
        static subscribe(e, t) {
            if (!this.liveUpdatesEnabled) return () => {};
            let r = "string" == typeof e ? e : "edit",
                n = "object" == typeof e ? e : t;
            if ("save" === r) {
                if (!this.saveEvent) throw Error("Save event is not initialized, please call `ContentfulLivePreview.init()` first.");
                return this.saveEvent.subscribe(n.callback)
            }
            if (!this.liveUpdates) throw Error("Live updates are not initialized, please call `ContentfulLivePreview.init()` first.");
            return this.liveUpdates.subscribe(n)
        }
        static getProps(e) {
            let {
                fieldId: t,
                locale: r,
                environment: n,
                space: o
            } = e;
            if (!this.inspectorModeEnabled) return null;
            if (t) {
                let i = { ...r ? {
                        [D.LOCALE]: r
                    } : {},
                    ...n ? {
                        [D.ENVIRONMENT]: n
                    } : {},
                    ...o ? {
                        [D.SPACE]: o
                    } : {},
                    [D.FIELD_ID]: t
                };
                if (r && (i[D.LOCALE] = r), void 0 !== e.assetId) return { ...i,
                    [D.ASSET_ID]: e.assetId
                };
                if (void 0 !== e.entryId) return { ...i,
                    [D.ENTRY_ID]: e.entryId
                }
            }
            return I.warn("Missing property for inspector mode", { ...e
            }), null
        }
        static toggleInspectorMode() {
            return this.inspectorModeEnabled = !this.inspectorModeEnabled, this.inspectorModeEnabled
        }
        static toggleLiveUpdatesMode() {
            return this.liveUpdatesEnabled = !this.liveUpdatesEnabled, this.liveUpdatesEnabled
        }
        static openEntryInEditor(e) {
            let t = {
                locale: this.locale,
                environment: this.environment,
                space: this.space
            };
            if (void 0 !== e.assetId && e.fieldId || void 0 !== e.entryId && e.fieldId) {
                var r, n;
                return void(r = { ...t,
                    ...e
                }, n = this.targetOrigin, x("TAGGED_FIELD_CLICKED", {
                    action: "TAGGED_FIELD_CLICKED",
                    ...r
                }, n))
            }
            I.error("Please provide field id and entry/asset id to openEntryInEditor.", { ...e
            })
        }
        static getEntryList() {
            return z({
                options: {
                    locale: this.locale,
                    space: this.space,
                    environment: this.environment
                }
            })
        }
    }
    let ei = (0, p.createContext)(null);

    function ea(e) {
        let t = (0, p.useContext)(ei);
        return (0, p.useCallback)(r => t ? .enableInspectorMode ? eo.getProps({ ...e,
            ...r
        }) : null, [t ? .enableInspectorMode, e])
    }
    e.s(["useContentfulInspectorMode", () => ea], 362721), e.s(["default", 0, e => {
        let {
            qrCodeBadgeModel: t,
            ctaUrl: r,
            title: n,
            ctaStyle: o = "light",
            applyButtonDropShadow: i = !0,
            qrCodeLogoColor: a = null,
            entryId: l = null
        } = e, [s, c] = (0, p.useState)(!1), f = null !== t, y = ea({
            entryId: l
        });
        return ((0, p.useEffect)(() => {
            c((0, d.isMobilePhone)())
        }, []), !t || s) ? (0, u.jsx)("div", { ...y({
                fieldId: "internalName"
            }),
            children: (0, u.jsx)(m, {
                href: r,
                size: "large",
                style: o,
                withBoxShadow: i,
                analyticsIdentifier: E.linkAnalyticsIdentifier.DOWNLOAD_APP,
                children: n
            })
        }) : f ? (0, u.jsx)("div", { ...y({
                fieldId: "internalName"
            }),
            children: (0, u.jsx)(b, { ...t,
                ...a && {
                    logoColor: a
                }
            })
        }) : (0, u.jsx)(u.Fragment, {})
    }], 845777)
}, 175486, 239378, e => {
    "use strict";
    var t, r, n = ((t = {}).black = "000000", t),
        o = e.i(399430);
    let i = function(e) {
        let t = e.replace(/[A-Z]/g, function(e) {
            return `-${e.toLowerCase()}`
        });
        return `--${t}`
    };
    e.s(["default", 0, i], 239378);
    let a = {
        backgroundColor: o.colorWhite,
        primaryTextColor: o.colorBlack
    };
    var l = ((r = l || {}).dark = "dark", r.light = "light", r.lightGray = "lightGray", r.darkTextOnGray = "darkTextOnGray", r.cashPrimary = "cashPrimary", r.bankPrimary = "bankPrimary", r.bankSecondary = "bankSecondary", r.bitcoinPrimary = "bitcoinPrimary", r.bitcoinSecondary = "bitcoinSecondary", r.familiesPrimary = "familiesPrimary", r.familiesSecondary = "familiesSecondary", r.giftCardsSecondary = "giftCardsSecondary", r.greenAndBlackPrimary = "greenAndBlackPrimary", r.greenAndBlackSecondary = "greenAndBlackSecondary", r.savingsPrimary = "savingsPrimary", r.savingsSecondary = "savingsSecondary", r.securityPrimary = "securityPrimary", r.securitySecondary = "securitySecondary", r.sendPrimary = "sendPrimary", r.sendSecondary = "sendSecondary", r.spendPrimary = "spendPrimary", r.spendSecondary = "spendSecondary", r.stocksPrimary = "stocksPrimary", r.stocksSecondary = "stocksSecondary", r.taxesPrimary = "taxesPrimary", r.taxesSecondary = "taxesSecondary", r.drakePresalePrimary = "drakePresalePrimary", r.drakePresaleSecondary = "drakePresaleSecondary", r.oneUpSourGummyPrimary = "oneUpSourGummyPrimary", r.oneUpSourGummySecondary = "oneUpSourGummySecondary", r.whiteAndBlackPrimary = "whiteAndBlackPrimary", r.whiteAndBlackSecondary = "whiteAndBlackSecondary", r);
    let s = {
            dark: {
                primaryTextColor: o.colorWhite
            },
            light: {
                primaryAccentColor: o.colorBlack,
                primaryTextColor: o.colorBlack
            },
            darkTextOnGray: {
                primaryAccentColor: o.colorBlack,
                primaryTextColor: o.colorBlack,
                linkColor: o.colorCashGreenWcagAaa,
                linkHoverColor: o.colorCashGreenWcagAaaDarkened
            },
            lightGray: {
                primaryTextColor: o.colorGray45
            },
            cashPrimary: {
                primaryTextColor: o.colorWhite,
                backgroundColor: o.colorCashGreen
            },
            bankPrimary: {
                backgroundColor: o.colorBankingMagenta,
                primaryAccentColor: o.colorBankingAccent,
                secondaryAccentColor: o.colorWhite,
                primaryTextColor: o.colorWhite,
                buttonColor: o.colorWhite,
                buttonTextColor: o.colorBankingMagenta
            },
            bankSecondary: {
                primaryAccentColor: o.colorBlack,
                secondaryAccentColor: o.colorBankingAccentSecondary,
                ...a,
                buttonTextColor: o.colorWhite,
                buttonColor: o.colorBlack
            },
            bitcoinPrimary: {
                backgroundColor: o.colorBitcoinBlue,
                primaryAccentColor: o.colorBitcoinAccent,
                secondaryAccentColor: o.colorWhite,
                primaryTextColor: o.colorWhite
            },
            bitcoinSecondary: {
                primaryAccentColor: o.colorBitcoinBlue,
                secondaryAccentColor: o.colorBitcoinAccentSecondary,
                ...a
            },
            familiesPrimary: {
                backgroundColor: o.colorFamiliesPink,
                primaryAccentColor: o.colorWhite,
                primaryTextColor: o.colorFamiliesAccent
            },
            familiesSecondary: {
                primaryAccentColor: o.colorFamiliesAccent,
                linkColor: o.colorFamiliesAccent,
                ...a
            },
            giftCardsSecondary: {
                primaryAccentColor: o.colorGiftCardsPurple,
                backgroundColor: o.colorWhite,
                primaryTextColor: o.colorGray23
            },
            savingsPrimary: {
                primaryTextColor: o.colorBlack,
                backgroundColor: o.colorWhite,
                primaryAccentColor: o.colorBlack,
                secondaryAccentColor: o.colorBlack,
                buttonColor: o.colorBlack,
                buttonTextColor: o.colorWhite
            },
            savingsSecondary: {
                primaryTextColor: o.colorGray23,
                primaryAccentColor: o.colorBlack,
                backgroundColor: o.colorWhite,
                secondaryAccentColor: o.colorCashGreen,
                buttonColor: o.colorBlack,
                buttonTextColor: o.colorWhite,
                linkColor: o.colorGray25,
                linkHoverColor: o.colorBlack,
                secondaryTextColor: o.colorBlack
            },
            securityPrimary: {
                backgroundColor: o.colorSecurityGreen,
                primaryAccentColor: o.colorBlack,
                primaryTextColor: o.colorBlack
            },
            securitySecondary: {
                primaryAccentColor: o.colorBlack,
                primaryTextColor: o.colorGray23
            },
            sendPrimary: {
                backgroundColor: o.colorSendPurple,
                primaryAccentColor: o.colorSendAccent,
                secondaryAccentColor: o.colorWhite,
                primaryTextColor: o.colorWhite
            },
            sendSecondary: {
                primaryAccentColor: o.colorSendPurple,
                secondaryAccentColor: o.colorSendAccentSecondary,
                ...a
            },
            spendPrimary: {
                backgroundColor: o.colorSpendViolet,
                primaryAccentColor: o.colorSpendAccent,
                secondaryAccentColor: o.colorWhite,
                primaryTextColor: o.colorWhite
            },
            spendSecondary: {
                primaryAccentColor: o.colorSpendViolet,
                secondaryAccentColor: o.colorSpendAccentSecondary,
                ...a
            },
            stocksPrimary: {
                backgroundColor: o.colorStocksBlue,
                primaryAccentColor: o.colorStocksAccent,
                secondaryAccentColor: o.colorWhite,
                primaryTextColor: o.colorWhite
            },
            stocksSecondary: {
                primaryAccentColor: o.colorStocksBlue,
                secondaryAccentColor: o.colorStocksAccentSecondary,
                ...a
            },
            taxesPrimary: {
                primaryAccentColor: o.colorTaxesPurple,
                backgroundColor: o.colorTaxesPurple,
                primaryTextColor: o.colorWhite,
                buttonColor: o.colorWhite,
                buttonTextColor: o.colorTaxesPurple,
                secondaryButtonColor: o.colorTaxesSecondaryButton,
                secondaryButtonTextColor: o.colorTaxesPurple
            },
            taxesSecondary: {
                primaryAccentColor: o.colorTaxesPurple,
                primaryTextColor: o.colorGray23,
                linkColor: o.colorStocksBlue,
                qrCodeLogoColor: n.black
            },
            drakePresalePrimary: {
                backgroundColor: o.colorCashGreen,
                primaryTextColor: o.colorPresalePurple
            },
            drakePresaleSecondary: {
                primaryAccentColor: o.colorPresalePurple,
                secondaryAccentColor: o.colorCashGreen,
                primaryTextColor: o.colorBlack
            },
            oneUpSourGummyPrimary: {
                primaryAccentColor: o.colorEyeballGreen,
                primaryTextColor: o.colorEyeballGreen,
                backgroundColor: o.colorBlack,
                buttonColor: o.colorEyeballGreen
            },
            oneUpSourGummySecondary: {
                primaryTextColor: o.colorBlack,
                primaryAccentColor: o.colorBlack,
                secondaryAccentColor: o.colorPresaleGreen
            },
            greenAndBlackPrimary: {
                primaryAccentColor: o.colorLogoGreen,
                primaryTextColor: o.colorEyeballGreen,
                backgroundColor: o.colorBlack
            },
            greenAndBlackSecondary: {
                primaryTextColor: o.colorBlack,
                primaryAccentColor: o.colorBlack,
                secondaryAccentColor: o.colorPresaleGreen
            },
            whiteAndBlackPrimary: {
                primaryAccentColor: o.colorWhite,
                primaryTextColor: o.colorWhite,
                backgroundColor: o.colorBlack
            },
            whiteAndBlackSecondary: {
                primaryTextColor: o.colorBlack,
                primaryAccentColor: o.colorBlack,
                secondaryAccentColor: o.colorCashGreen,
                secondaryTextColor: o.colorBlack,
                buttonColor: o.colorBlack,
                buttonTextColor: o.colorWhite
            }
        },
        c = {
            cashGreen: {
                navPrimaryAccentColor: o.colorCashGreen,
                navLoginButtonColor: o.colorCashGreen,
                navLoginButtonTextColor: o.colorBlack
            },
            default: {
                navPrimaryAccentColor: o.colorWhite
            },
            defaultDark: {
                navPrimaryAccentColor: o.colorBlack,
                navLoginButtonColor: o.colorBlack,
                navLoginButtonTextColor: o.colorWhite
            },
            drakePresale: {
                navPrimaryAccentColor: o.colorPresalePurple
            },
            security: {
                navPrimaryAccentColor: o.colorBlack,
                navLoginButtonColor: o.colorBlack,
                navLoginButtonTextColor: o.colorSecurityGreen
            }
        },
        u = {
            default: {
                backgroundColor: o.colorCashGreen,
                primaryTextColor: o.colorBlack
            },
            taxes: {
                backgroundColor: o.colorTaxesAccent,
                primaryTextColor: o.colorWhite,
                qrCodeColor: "black"
            }
        },
        d = {
            bank: {
                primary: s.bankPrimary,
                secondary: s.bankSecondary
            },
            bankLegacy: {
                primary: {
                    backgroundColor: "#DD245C",
                    primaryAccentColor: "#C91963",
                    secondaryAccentColor: "#EACBFF",
                    primaryTextColor: o.colorWhite
                },
                secondary: {
                    primaryAccentColor: "#C91963",
                    secondaryAccentColor: "#E0B2FF",
                    ...a
                }
            },
            banking: {
                primary: s.bankPrimary,
                secondary: s.bankSecondary
            },
            bitcoin: {
                primary: s.bitcoinPrimary,
                secondary: s.bitcoinSecondary
            },
            bitcoinLegacy: {
                primary: {
                    backgroundColor: "#0C5CF7",
                    primaryAccentColor: o.colorBitcoinAccent,
                    secondaryAccentColor: o.colorBitcoinAccentSecondary,
                    primaryTextColor: o.colorWhite
                },
                secondary: {
                    primaryAccentColor: o.colorBitcoinAccent,
                    secondaryAccentColor: o.colorBitcoinAccentSecondary,
                    ...a
                }
            },
            bitcoinMarket: {
                primary: s.light,
                secondary: { ...s.light,
                    backgroundColor: o.colorGray95,
                    buttonColor: o.colorBlack,
                    buttonTextColor: o.colorWhite
                }
            },
            card: {
                primary: {
                    backgroundColor: o.colorCardPurplePink,
                    primaryAccentColor: o.colorCardPurplePink,
                    secondaryAccentColor: o.colorWhite,
                    primaryTextColor: o.colorWhite,
                    buttonColor: o.colorWhite,
                    buttonTextColor: o.colorCardPurplePink
                },
                secondary: s.dark
            },
            darkText: {
                primary: { ...s.light,
                    buttonColor: o.colorBlack,
                    buttonTextColor: o.colorWhite
                },
                secondary: { ...s.light,
                    primaryTextColor: o.colorGray23,
                    secondaryAccentColor: o.colorBackgroundGreen,
                    linkColor: o.colorBackgroundGreen,
                    buttonColor: o.colorBlack,
                    buttonTextColor: o.colorWhite,
                    secondaryTextColor: o.colorBlack
                },
                pageHeaderTheme: c.defaultDark
            },
            default: {
                primary: s.dark,
                secondary: s.light
            },
            families: {
                primary: s.familiesPrimary,
                secondary: s.familiesSecondary,
                pageHeaderTheme: {
                    navPrimaryAccentColor: o.colorFamiliesAccent,
                    navLoginButtonColor: o.colorFamiliesAccent,
                    navLoginButtonTextColor: o.colorWhite
                }
            },
            giftcards: {
                primary: s.dark,
                secondary: s.giftCardsSecondary
            },
            greenAndBlack: {
                primary: s.greenAndBlackPrimary,
                secondary: s.greenAndBlackSecondary,
                pageHeaderTheme: c.cashGreen
            },
            savings: {
                primary: s.savingsPrimary,
                secondary: s.savingsSecondary
            },
            security: {
                primary: s.securityPrimary,
                secondary: s.securitySecondary,
                pageHeaderTheme: c.security
            },
            send: {
                primary: s.sendPrimary,
                secondary: s.sendSecondary
            },
            sendLegacy: {
                primary: {
                    backgroundColor: "#058189",
                    primaryAccentColor: "#028088",
                    secondaryAccentColor: o.colorSendPurple,
                    primaryTextColor: o.colorWhite
                },
                secondary: {
                    primaryAccentColor: "#028088",
                    secondaryAccentColor: o.colorSendPurple,
                    ...a
                }
            },
            spend: {
                primary: s.spendPrimary,
                secondary: s.spendSecondary
            },
            spendLegacy: {
                primary: {
                    backgroundColor: "#B106CD",
                    primaryAccentColor: o.colorSpendAccent,
                    secondaryAccentColor: "#FFA5D8",
                    primaryTextColor: o.colorWhite
                },
                secondary: {
                    primaryAccentColor: o.colorSpendAccent,
                    secondaryAccentColor: "#FFA5D8",
                    ...a
                }
            },
            stocks: {
                primary: s.stocksPrimary,
                secondary: s.stocksSecondary
            },
            stocksLegacy: {
                primary: {
                    backgroundColor: "#7527F4",
                    primaryAccentColor: o.colorStocksAccent,
                    secondaryAccentColor: "#F6ABFF",
                    primaryTextColor: o.colorWhite
                },
                secondary: {
                    primaryAccentColor: o.colorStocksAccent,
                    secondaryAccentColor: "#F6ABFF",
                    ...a
                }
            },
            taxes: {
                primary: s.taxesPrimary,
                secondary: s.taxesSecondary,
                pageFooterTheme: u.taxes
            },
            drakePresale: {
                primary: s.drakePresalePrimary,
                secondary: s.drakePresaleSecondary
            },
            oneUpSourGummy: {
                primary: s.oneUpSourGummyPrimary,
                secondary: s.oneUpSourGummySecondary
            },
            whiteAndBlack: {
                primary: s.whiteAndBlackPrimary,
                secondary: s.whiteAndBlackSecondary
            }
        };
    class f {
        static apply(e) {
            let t = {};
            return Object.keys(e || {}).forEach(r => {
                t[i(r)] = e[r]
            }), t
        }
        static getPageTheme(e) {
            return d[e] || d.default
        }
        static getProductTheme(e) {
            return f.getPageTheme(e)
        }
    }
    e.s(["FooterThemes", 0, u, "PageThemes", 0, d, "Theme", () => f, "Themes", 0, s], 175486)
}, 953886, (e, t, r) => {
    var n = {
            296: (e, t, r) => {
                var n = /^\s+|\s+$/g,
                    o = /^[-+]0x[0-9a-f]+$/i,
                    i = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    l = parseInt,
                    s = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                    c = "object" == typeof self && self && self.Object === Object && self,
                    u = s || c || Function("return this")(),
                    d = Object.prototype.toString,
                    f = Math.max,
                    p = Math.min,
                    y = function() {
                        return u.Date.now()
                    };

                function h(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function m(e) {
                    if ("number" == typeof e) return e;
                    if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == d.call(t)) return NaN;
                    if (h(e)) {
                        var t, r = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = h(r) ? r + "" : r
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(n, "");
                    var s = i.test(e);
                    return s || a.test(e) ? l(e.slice(2), s ? 2 : 8) : o.test(e) ? NaN : +e
                }
                e.exports = function(e, t, r) {
                    var n, o, i, a, l, s, c = 0,
                        u = !1,
                        d = !1,
                        g = !0;
                    if ("function" != typeof e) throw TypeError("Expected a function");

                    function v(t) {
                        var r = n,
                            i = o;
                        return n = o = void 0, c = t, a = e.apply(i, r)
                    }

                    function b(e) {
                        var r = e - s;
                        return void 0 === s || r >= t || r < 0 || d && e - c >= i
                    }

                    function E() {
                        var e, r = y();
                        if (b(r)) return _(r);
                        l = setTimeout(E, (e = t - (r - s), d ? p(e, i - (r - c)) : e))
                    }

                    function _(e) {
                        return l = void 0, g && n ? v(e) : (n = o = void 0, a)
                    }

                    function C() {
                        var e, r = y(),
                            i = b(r);
                        if (n = arguments, o = this, s = r, i) {
                            if (void 0 === l) return c = e = s, l = setTimeout(E, t), u ? v(e) : a;
                            if (d) return l = setTimeout(E, t), v(s)
                        }
                        return void 0 === l && (l = setTimeout(E, t)), a
                    }
                    return t = m(t) || 0, h(r) && (u = !!r.leading, i = (d = "maxWait" in r) ? f(m(r.maxWait) || 0, t) : i, g = "trailing" in r ? !!r.trailing : g), C.cancel = function() {
                        void 0 !== l && clearTimeout(l), c = 0, n = s = o = l = void 0
                    }, C.flush = function() {
                        return void 0 === l ? a : _(y())
                    }, C
                }
            },
            96: (e, t, r) => {
                var n = "Expected a function",
                    o = NaN,
                    i = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    l = /^0b[01]+$/i,
                    s = /^0o[0-7]+$/i,
                    c = parseInt,
                    u = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                    d = "object" == typeof self && self && self.Object === Object && self,
                    f = u || d || Function("return this")(),
                    p = Object.prototype.toString,
                    y = Math.max,
                    h = Math.min,
                    m = function() {
                        return f.Date.now()
                    };

                function g(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function v(e) {
                    if ("number" == typeof e) return e;
                    if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == p.call(t)) return o;
                    if (g(e)) {
                        var t, r = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = g(r) ? r + "" : r
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(i, "");
                    var n = l.test(e);
                    return n || s.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? o : +e
                }
                e.exports = function(e, t, r) {
                    var o = !0,
                        i = !0;
                    if ("function" != typeof e) throw TypeError(n);
                    return g(r) && (o = "leading" in r ? !!r.leading : o, i = "trailing" in r ? !!r.trailing : i),
                        function(e, t, r) {
                            var o, i, a, l, s, c, u = 0,
                                d = !1,
                                f = !1,
                                p = !0;
                            if ("function" != typeof e) throw TypeError(n);

                            function b(t) {
                                var r = o,
                                    n = i;
                                return o = i = void 0, u = t, l = e.apply(n, r)
                            }

                            function E(e) {
                                var r = e - c;
                                return void 0 === c || r >= t || r < 0 || f && e - u >= a
                            }

                            function _() {
                                var e, r = m();
                                if (E(r)) return C(r);
                                s = setTimeout(_, (e = t - (r - c), f ? h(e, a - (r - u)) : e))
                            }

                            function C(e) {
                                return s = void 0, p && o ? b(e) : (o = i = void 0, l)
                            }

                            function S() {
                                var e, r = m(),
                                    n = E(r);
                                if (o = arguments, i = this, c = r, n) {
                                    if (void 0 === s) return u = e = c, s = setTimeout(_, t), d ? b(e) : l;
                                    if (f) return s = setTimeout(_, t), b(c)
                                }
                                return void 0 === s && (s = setTimeout(_, t)), l
                            }
                            return t = v(t) || 0, g(r) && (d = !!r.leading, a = (f = "maxWait" in r) ? y(v(r.maxWait) || 0, t) : a, p = "trailing" in r ? !!r.trailing : p), S.cancel = function() {
                                void 0 !== s && clearTimeout(s), u = 0, o = c = i = s = void 0
                            }, S.flush = function() {
                                return void 0 === s ? l : C(m())
                            }, S
                        }(e, t, {
                            leading: o,
                            maxWait: t,
                            trailing: i
                        })
                }
            },
            703: (e, t, r) => {
                "use strict";
                var n = r(414);

                function o() {}

                function i() {}
                i.resetWarningCache = o, e.exports = function() {
                    function e(e, t, r, o, i, a) {
                        if (a !== n) {
                            var l = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw l.name = "Invariant Violation", l
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var r = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: o
                    };
                    return r.PropTypes = r, r
                }
            },
            697: (e, t, r) => {
                e.exports = r(703)()
            },
            414: e => {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }
        },
        o = {};

    function i(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = o[e] = {
            exports: {}
        };
        return n[e](r, r.exports, i), r.exports
    }
    i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
        "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var a = {};
    (() => {
        "use strict";
        i.r(a), i.d(a, {
            LazyLoadComponent: () => H,
            LazyLoadImage: () => Z,
            trackWindowScroll: () => P
        });
        let t = e.r(191788);
        var r = i.n(t),
            n = i(697);

        function o() {
            return "u" > typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype
        }

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function c(e) {
            var t = function(e, t) {
                if ("object" !== l(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== l(n)) return n;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === l(t) ? t : String(t)
        }

        function u(e, t) {
            return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var f = function(e) {
                e.forEach(function(e) {
                    e.isIntersecting && e.target.onVisible()
                })
            },
            p = {},
            y = function(e) {
                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                a.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), e && u(a, e);
                var t, n, i = (n = function() {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, t = d(a);
                    e = n ? Reflect.construct(t, arguments, d(this).constructor) : t.apply(this, arguments);
                    if (e && ("object" === l(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                    if (void 0 === this) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return this
                });

                function a(e) {
                    var t, r;
                    return function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, a), (t = i.call(this, e)).supportsObserver = !e.scrollPosition && e.useIntersectionObserver && o(), t.supportsObserver && (p[r = e.threshold] = p[r] || new IntersectionObserver(f, {
                        rootMargin: r + "px"
                    }), t.observer = p[r]), t
                }
                return t = [{
                        key: "componentDidMount",
                        value: function() {
                            this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.observer && this.placeholder && this.observer.unobserve(this.placeholder)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.supportsObserver || this.updateVisibility()
                        }
                    }, {
                        key: "getPlaceholderBoundingBox",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition,
                                t = this.placeholder.getBoundingClientRect(),
                                r = this.placeholder.style,
                                n = parseInt(r.getPropertyValue("margin-left"), 10) || 0,
                                o = parseInt(r.getPropertyValue("margin-top"), 10) || 0;
                            return {
                                bottom: e.y + t.bottom + o,
                                left: e.x + t.left + n,
                                right: e.x + t.right + n,
                                top: e.y + t.top + o
                            }
                        }
                    }, {
                        key: "isPlaceholderInViewport",
                        value: function() {
                            if ("u" < typeof window || !this.placeholder) return !1;
                            var e = this.props,
                                t = e.scrollPosition,
                                r = e.threshold,
                                n = this.getPlaceholderBoundingBox(t),
                                o = t.y + window.innerHeight,
                                i = t.x,
                                a = t.x + window.innerWidth;
                            return !!(t.y - r <= n.bottom && o + r >= n.top && i - r <= n.right && a + r >= n.left)
                        }
                    }, {
                        key: "updateVisibility",
                        value: function() {
                            this.isPlaceholderInViewport() && this.props.onVisible()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.className,
                                o = t.height,
                                i = t.placeholder,
                                a = t.style,
                                l = t.width;
                            if (i && "function" != typeof i.type) return r().cloneElement(i, {
                                ref: function(t) {
                                    return e.placeholder = t
                                }
                            });
                            var u = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                                        var n, o;
                                        n = t, o = r[t], (n = c(n)) in e ? Object.defineProperty(e, n, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[n] = o
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    })
                                }
                                return e
                            }({
                                display: "inline-block"
                            }, a);
                            return void 0 !== l && (u.width = l), void 0 !== o && (u.height = o), r().createElement("span", {
                                className: n,
                                ref: function(t) {
                                    return e.placeholder = t
                                },
                                style: u
                            }, i)
                        }
                    }],
                    function(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c(n.key), n)
                        }
                    }(a.prototype, t), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), a
            }(r().Component);
        y.propTypes = {
            onVisible: n.PropTypes.func.isRequired,
            className: n.PropTypes.string,
            height: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]),
            placeholder: n.PropTypes.element,
            threshold: n.PropTypes.number,
            useIntersectionObserver: n.PropTypes.bool,
            scrollPosition: n.PropTypes.shape({
                x: n.PropTypes.number.isRequired,
                y: n.PropTypes.number.isRequired
            }),
            width: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string])
        }, y.defaultProps = {
            className: "",
            placeholder: null,
            threshold: 100,
            useIntersectionObserver: !0
        };
        var h = i(296),
            m = i.n(h),
            g = i(96),
            v = i.n(g),
            b = function(e) {
                var t = getComputedStyle(e, null);
                return t.getPropertyValue("overflow") + t.getPropertyValue("overflow-y") + t.getPropertyValue("overflow-x")
            };
        let E = function(e) {
            if (!(e instanceof HTMLElement)) return window;
            for (var t = e; t && t instanceof HTMLElement;) {
                if (/(scroll|auto)/.test(b(t))) return t;
                t = t.parentNode
            }
            return window
        };

        function _(e) {
            return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var C = ["delayMethod", "delayTime"];

        function S() {
            return (S = Object.assign.bind()).apply(this, arguments)
        }

        function O(e, t) {
            return (O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function L(e, t) {
            if (t && ("object" === _(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
            return T(e)
        }

        function T(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function A(e) {
            return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var w = function() {
                return "u" < typeof window ? 0 : window.scrollX || window.pageXOffset
            },
            j = function() {
                return "u" < typeof window ? 0 : window.scrollY || window.pageYOffset
            };
        let P = function(e) {
            var t = function(t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                l.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: l,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(l, "prototype", {
                    writable: !1
                }), t && O(l, t);
                var n, i, a = (i = function() {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, t = A(l);
                    return e = i ? Reflect.construct(t, arguments, A(this).constructor) : t.apply(this, arguments), L(this, e)
                });

                function l(e) {
                    if (function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, l), (t = a.call(this, e)).useIntersectionObserver = e.useIntersectionObserver && o(), t.useIntersectionObserver) return L(t);
                    var t, n = t.onChangeScroll.bind(T(t));
                    return "debounce" === e.delayMethod ? t.delayedScroll = m()(n, e.delayTime) : "throttle" === e.delayMethod && (t.delayedScroll = v()(n, e.delayTime)), t.state = {
                        scrollPosition: {
                            x: w(),
                            y: j()
                        }
                    }, t.baseComponentRef = r().createRef(), t
                }
                return n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.addListeners()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.removeListeners()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            "u" < typeof window || this.useIntersectionObserver || E(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners())
                        }
                    }, {
                        key: "addListeners",
                        value: function() {
                            "u" < typeof window || this.useIntersectionObserver || (this.scrollElement = E(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, {
                                passive: !0
                            }), window.addEventListener("resize", this.delayedScroll, {
                                passive: !0
                            }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, {
                                passive: !0
                            }))
                        }
                    }, {
                        key: "removeListeners",
                        value: function() {
                            "u" < typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll))
                        }
                    }, {
                        key: "onChangeScroll",
                        value: function() {
                            this.useIntersectionObserver || this.setState({
                                scrollPosition: {
                                    x: w(),
                                    y: j()
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                n = (t.delayMethod, t.delayTime, function(e, t) {
                                    if (null == e) return {};
                                    var r, n, o = function(e, t) {
                                        if (null == e) return {};
                                        var r, n, o = {},
                                            i = Object.keys(e);
                                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                        return o
                                    }(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                                    }
                                    return o
                                }(t, C)),
                                o = this.useIntersectionObserver ? null : this.state.scrollPosition;
                            return r().createElement(e, S({
                                forwardRef: this.baseComponentRef,
                                scrollPosition: o
                            }, n))
                        }
                    }],
                    function(e, t) {
                        for (var r, n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (r = function(e, t) {
                                if ("object" !== _(e) || null === e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, "string");
                                    if ("object" !== _(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return String(e)
                            }(o.key), "symbol" === _(r) ? r : String(r)), o)
                        }
                    }(l.prototype, n), Object.defineProperty(l, "prototype", {
                        writable: !1
                    }), l
            }(r().Component);
            return t.propTypes = {
                delayMethod: n.PropTypes.oneOf(["debounce", "throttle"]),
                delayTime: n.PropTypes.number,
                useIntersectionObserver: n.PropTypes.bool
            }, t.defaultProps = {
                delayMethod: "throttle",
                delayTime: 300,
                useIntersectionObserver: !0
            }, t
        };

        function I(e) {
            return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function B(e, t) {
            return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function x(e) {
            return (x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        let k = P(function(e) {
            if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
            i.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: i,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(i, "prototype", {
                writable: !1
            }), e && B(i, e);
            var t, n, o = (n = function() {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, t = x(i);
                e = n ? Reflect.construct(t, arguments, x(this).constructor) : t.apply(this, arguments);
                if (e && ("object" === I(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                if (void 0 === this) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return this
            });

            function i(e) {
                return function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, i), o.call(this, e)
            }
            return t = [{
                    key: "render",
                    value: function() {
                        return r().createElement(y, this.props)
                    }
                }],
                function(e, t) {
                    for (var r, n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (r = function(e, t) {
                            if ("object" !== I(e) || null === e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, "string");
                                if ("object" !== I(n)) return n;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o.key), "symbol" === I(r) ? r : String(r)), o)
                    }
                }(i.prototype, t), Object.defineProperty(i, "prototype", {
                    writable: !1
                }), i
        }(r().Component));

        function N(e) {
            return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function R(e, t) {
            return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function D(e) {
            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function M(e) {
            return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var G = function(e) {
            if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
            a.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(a, "prototype", {
                writable: !1
            }), e && R(a, e);
            var t, n, i = (n = function() {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, t = M(a);
                e = n ? Reflect.construct(t, arguments, M(this).constructor) : t.apply(this, arguments);
                if (e && ("object" === N(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                return D(this)
            });

            function a(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, a), t = i.call(this, e);
                var t, r = e.afterLoad,
                    n = e.beforeLoad,
                    o = e.scrollPosition,
                    l = e.visibleByDefault;
                return t.state = {
                    visible: l
                }, l && (n(), r()), t.onVisible = t.onVisible.bind(D(t)), t.isScrollTracked = !!(o && Number.isFinite(o.x) && o.x >= 0 && Number.isFinite(o.y) && o.y >= 0), t
            }
            return t = [{
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        t.visible !== this.state.visible && this.props.afterLoad()
                    }
                }, {
                    key: "onVisible",
                    value: function() {
                        this.props.beforeLoad(), this.setState({
                            visible: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.state.visible) return this.props.children;
                        var e = this.props,
                            t = e.className,
                            n = e.delayMethod,
                            i = e.delayTime,
                            a = e.height,
                            l = e.placeholder,
                            s = e.scrollPosition,
                            c = e.style,
                            u = e.threshold,
                            d = e.useIntersectionObserver,
                            f = e.width;
                        return this.isScrollTracked || d && o() ? r().createElement(y, {
                            className: t,
                            height: a,
                            onVisible: this.onVisible,
                            placeholder: l,
                            scrollPosition: s,
                            style: c,
                            threshold: u,
                            useIntersectionObserver: d,
                            width: f
                        }) : r().createElement(k, {
                            className: t,
                            delayMethod: n,
                            delayTime: i,
                            height: a,
                            onVisible: this.onVisible,
                            placeholder: l,
                            style: c,
                            threshold: u,
                            width: f
                        })
                    }
                }],
                function(e, t) {
                    for (var r, n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (r = function(e, t) {
                            if ("object" !== N(e) || null === e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, "string");
                                if ("object" !== N(n)) return n;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o.key), "symbol" === N(r) ? r : String(r)), o)
                    }
                }(a.prototype, t), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), a
        }(r().Component);
        G.propTypes = {
            afterLoad: n.PropTypes.func,
            beforeLoad: n.PropTypes.func,
            useIntersectionObserver: n.PropTypes.bool,
            visibleByDefault: n.PropTypes.bool
        }, G.defaultProps = {
            afterLoad: function() {
                return {}
            },
            beforeLoad: function() {
                return {}
            },
            useIntersectionObserver: !0,
            visibleByDefault: !1
        };
        let H = G;

        function K(e) {
            return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var U = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];

        function F(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(r), !0).forEach(function(t) {
                    var n, o, i;
                    n = e, o = t, i = r[t], (o = Y(o)) in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function z() {
            return (z = Object.assign.bind()).apply(this, arguments)
        }

        function Y(e) {
            var t = function(e, t) {
                if ("object" !== K(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== K(n)) return n;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" === K(t) ? t : String(t)
        }

        function V(e, t) {
            return (V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function $(e) {
            return ($ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var q = function(e) {
            if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
            i.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: i,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(i, "prototype", {
                writable: !1
            }), e && V(i, e);
            var t, n, o = (n = function() {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, t = $(i);
                e = n ? Reflect.construct(t, arguments, $(this).constructor) : t.apply(this, arguments);
                if (e && ("object" === K(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                if (void 0 === this) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return this
            });

            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, i), (t = o.call(this, e)).state = {
                    loaded: !1
                }, t
            }
            return t = [{
                    key: "onImageLoad",
                    value: function() {
                        var e = this;
                        return this.state.loaded ? null : function(t) {
                            e.props.onLoad(t), e.props.afterLoad(), e.setState({
                                loaded: !0
                            })
                        }
                    }
                }, {
                    key: "getImg",
                    value: function() {
                        var e = this.props,
                            t = (e.afterLoad, e.beforeLoad, e.delayMethod, e.delayTime, e.effect, e.placeholder, e.placeholderSrc, e.scrollPosition, e.threshold, e.useIntersectionObserver, e.visibleByDefault, e.wrapperClassName, e.wrapperProps, function(e, t) {
                                if (null == e) return {};
                                var r, n, o = function(e, t) {
                                    if (null == e) return {};
                                    var r, n, o = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                                }
                                return o
                            }(e, U));
                        return r().createElement("img", z({}, t, {
                            onLoad: this.onImageLoad()
                        }))
                    }
                }, {
                    key: "getLazyLoadImage",
                    value: function() {
                        var e = this.props,
                            t = e.beforeLoad,
                            n = e.className,
                            o = e.delayMethod,
                            i = e.delayTime,
                            a = e.height,
                            l = e.placeholder,
                            s = e.scrollPosition,
                            c = e.style,
                            u = e.threshold,
                            d = e.useIntersectionObserver,
                            f = e.visibleByDefault,
                            p = e.width;
                        return r().createElement(H, {
                            beforeLoad: t,
                            className: n,
                            delayMethod: o,
                            delayTime: i,
                            height: a,
                            placeholder: l,
                            scrollPosition: s,
                            style: c,
                            threshold: u,
                            useIntersectionObserver: d,
                            visibleByDefault: f,
                            width: p
                        }, this.getImg())
                    }
                }, {
                    key: "getWrappedLazyLoadImage",
                    value: function(e) {
                        var t = this.props,
                            n = t.effect,
                            o = t.height,
                            i = t.placeholderSrc,
                            a = t.width,
                            l = t.wrapperClassName,
                            s = t.wrapperProps,
                            c = this.state.loaded;
                        return r().createElement("span", z({
                            className: l + " lazy-load-image-background " + n + (c ? " lazy-load-image-loaded" : ""),
                            style: W(W({}, c || !i ? {} : {
                                backgroundImage: "url(".concat(i, ")"),
                                backgroundSize: "100% 100%"
                            }), {}, {
                                color: "transparent",
                                display: "inline-block",
                                height: o,
                                width: a
                            })
                        }, s), e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.effect,
                            r = e.placeholderSrc,
                            n = e.visibleByDefault,
                            o = e.wrapperClassName,
                            i = e.wrapperProps,
                            a = this.getLazyLoadImage();
                        return (t || r) && !n || o || i ? this.getWrappedLazyLoadImage(a) : a
                    }
                }],
                function(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y(n.key), n)
                    }
                }(i.prototype, t), Object.defineProperty(i, "prototype", {
                    writable: !1
                }), i
        }(r().Component);
        q.propTypes = {
            onLoad: n.PropTypes.func,
            afterLoad: n.PropTypes.func,
            beforeLoad: n.PropTypes.func,
            delayMethod: n.PropTypes.string,
            delayTime: n.PropTypes.number,
            effect: n.PropTypes.string,
            placeholderSrc: n.PropTypes.string,
            threshold: n.PropTypes.number,
            useIntersectionObserver: n.PropTypes.bool,
            visibleByDefault: n.PropTypes.bool,
            wrapperClassName: n.PropTypes.string,
            wrapperProps: n.PropTypes.object
        }, q.defaultProps = {
            onLoad: function() {},
            afterLoad: function() {
                return {}
            },
            beforeLoad: function() {
                return {}
            },
            delayMethod: "throttle",
            delayTime: 300,
            effect: "",
            placeholderSrc: null,
            threshold: 100,
            useIntersectionObserver: !0,
            visibleByDefault: !1,
            wrapperClassName: ""
        };
        let Z = q
    })(), t.exports = a
}, 567215, e => {
    e.v({
        fadein: "image-module-sass-module__r2BKGa__fadein",
        isLoaded: "image-module-sass-module__r2BKGa__isLoaded",
        lazyImage: "image-module-sass-module__r2BKGa__lazyImage"
    })
}, 977210, 757046, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        n = e.i(953886),
        o = e.i(272043),
        i = e.i(567215);
    e.s(["default", 0, e => {
        let {
            lazy: a,
            alt: l = "",
            setImageRef: s,
            ref: c,
            threshold: u = 180,
            ...d
        } = e, f = (0, r.useRef)(null), [p, y] = (0, r.useState)(!1), h = (0, r.useCallback)(() => {
            y(!0), document.removeEventListener("scroll", h)
        }, []);
        if ((0, r.useEffect)(() => {
                if (a) return document.addEventListener("scroll", h), () => {
                    document.removeEventListener("scroll", h)
                }
            }, [a, h]), (0, r.useEffect)(() => {
                s && p && s(f)
            }, [p, s]), !a && !s) return (0, t.jsx)("img", { ...d,
            alt: l,
            ...c && {
                ref: c
            }
        });
        let m = (0, o.default)(d.className, i.default.lazyImage, {
            [i.default.isLoaded]: p || !a
        });
        return s || p ? (0, t.jsx)("img", { ...d,
            className: m,
            alt: l,
            ...f && {
                ref: f
            }
        }) : (0, t.jsx)(n.LazyLoadImage, {
            threshold: u,
            ...d,
            className: m,
            alt: l,
            afterLoad: () => {
                y(!0)
            }
        })
    }], 757046), e.s([], 977210)
}, 786528, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BLOCKS", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    var n, o = ((n = {}).DOCUMENT = "document", n.PARAGRAPH = "paragraph", n.HEADING_1 = "heading-1", n.HEADING_2 = "heading-2", n.HEADING_3 = "heading-3", n.HEADING_4 = "heading-4", n.HEADING_5 = "heading-5", n.HEADING_6 = "heading-6", n.OL_LIST = "ordered-list", n.UL_LIST = "unordered-list", n.LIST_ITEM = "list-item", n.HR = "hr", n.QUOTE = "blockquote", n.EMBEDDED_ENTRY = "embedded-entry-block", n.EMBEDDED_ASSET = "embedded-asset-block", n.EMBEDDED_RESOURCE = "embedded-resource-block", n.TABLE = "table", n.TABLE_ROW = "table-row", n.TABLE_CELL = "table-cell", n.TABLE_HEADER_CELL = "table-header-cell", n)
}, 283798, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "INLINES", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    var n, o = ((n = {}).ASSET_HYPERLINK = "asset-hyperlink", n.EMBEDDED_ENTRY = "embedded-entry-inline", n.EMBEDDED_RESOURCE = "embedded-resource-inline", n.ENTRY_HYPERLINK = "entry-hyperlink", n.HYPERLINK = "hyperlink", n.RESOURCE_HYPERLINK = "resource-hyperlink", n)
}, 442377, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "MARKS", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    var n, o = ((n = {}).BOLD = "bold", n.ITALIC = "italic", n.UNDERLINE = "underline", n.CODE = "code", n.SUPERSCRIPT = "superscript", n.SUBSCRIPT = "subscript", n.STRIKETHROUGH = "strikethrough", n)
}, 976464, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        get CONTAINERS() {
            return h
        },
        get HEADINGS() {
            return m
        },
        get LIST_ITEM_BLOCKS() {
            return f
        },
        get TABLE_BLOCKS() {
            return p
        },
        get TEXT_CONTAINERS() {
            return g
        },
        get TOP_LEVEL_BLOCKS() {
            return d
        },
        get V1_MARKS() {
            return b
        },
        get V1_NODE_TYPES() {
            return v
        },
        get VOID_BLOCKS() {
            return y
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: Object.getOwnPropertyDescriptor(n, o).get
    });
    var i, a = e.r(786528),
        l = e.r(283798),
        s = e.r(442377);

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function u(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var d = [a.BLOCKS.PARAGRAPH, a.BLOCKS.HEADING_1, a.BLOCKS.HEADING_2, a.BLOCKS.HEADING_3, a.BLOCKS.HEADING_4, a.BLOCKS.HEADING_5, a.BLOCKS.HEADING_6, a.BLOCKS.OL_LIST, a.BLOCKS.UL_LIST, a.BLOCKS.HR, a.BLOCKS.QUOTE, a.BLOCKS.EMBEDDED_ENTRY, a.BLOCKS.EMBEDDED_ASSET, a.BLOCKS.EMBEDDED_RESOURCE, a.BLOCKS.TABLE],
        f = [a.BLOCKS.PARAGRAPH, a.BLOCKS.HEADING_1, a.BLOCKS.HEADING_2, a.BLOCKS.HEADING_3, a.BLOCKS.HEADING_4, a.BLOCKS.HEADING_5, a.BLOCKS.HEADING_6, a.BLOCKS.OL_LIST, a.BLOCKS.UL_LIST, a.BLOCKS.HR, a.BLOCKS.QUOTE, a.BLOCKS.EMBEDDED_ENTRY, a.BLOCKS.EMBEDDED_ASSET, a.BLOCKS.EMBEDDED_RESOURCE],
        p = [a.BLOCKS.TABLE, a.BLOCKS.TABLE_ROW, a.BLOCKS.TABLE_CELL, a.BLOCKS.TABLE_HEADER_CELL],
        y = [a.BLOCKS.HR, a.BLOCKS.EMBEDDED_ENTRY, a.BLOCKS.EMBEDDED_ASSET, a.BLOCKS.EMBEDDED_RESOURCE],
        h = (u(i = {}, a.BLOCKS.OL_LIST, [a.BLOCKS.LIST_ITEM]), u(i, a.BLOCKS.UL_LIST, [a.BLOCKS.LIST_ITEM]), u(i, a.BLOCKS.LIST_ITEM, f), u(i, a.BLOCKS.QUOTE, [a.BLOCKS.PARAGRAPH]), u(i, a.BLOCKS.TABLE, [a.BLOCKS.TABLE_ROW]), u(i, a.BLOCKS.TABLE_ROW, [a.BLOCKS.TABLE_CELL, a.BLOCKS.TABLE_HEADER_CELL]), u(i, a.BLOCKS.TABLE_CELL, [a.BLOCKS.PARAGRAPH, a.BLOCKS.UL_LIST, a.BLOCKS.OL_LIST]), u(i, a.BLOCKS.TABLE_HEADER_CELL, [a.BLOCKS.PARAGRAPH]), i),
        m = [a.BLOCKS.HEADING_1, a.BLOCKS.HEADING_2, a.BLOCKS.HEADING_3, a.BLOCKS.HEADING_4, a.BLOCKS.HEADING_5, a.BLOCKS.HEADING_6],
        g = [a.BLOCKS.PARAGRAPH].concat(function(e) {
            if (Array.isArray(e)) return c(e)
        }(m) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(m) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, void 0);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, void 0)
            }
        }(m) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()),
        v = [a.BLOCKS.DOCUMENT, a.BLOCKS.PARAGRAPH, a.BLOCKS.HEADING_1, a.BLOCKS.HEADING_2, a.BLOCKS.HEADING_3, a.BLOCKS.HEADING_4, a.BLOCKS.HEADING_5, a.BLOCKS.HEADING_6, a.BLOCKS.OL_LIST, a.BLOCKS.UL_LIST, a.BLOCKS.LIST_ITEM, a.BLOCKS.HR, a.BLOCKS.QUOTE, a.BLOCKS.EMBEDDED_ENTRY, a.BLOCKS.EMBEDDED_ASSET, l.INLINES.HYPERLINK, l.INLINES.ENTRY_HYPERLINK, l.INLINES.ASSET_HYPERLINK, l.INLINES.EMBEDDED_ENTRY, "text"],
        b = [s.MARKS.BOLD, s.MARKS.CODE, s.MARKS.ITALIC, s.MARKS.UNDERLINE]
}, 858900, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    })
}, 139929, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    })
}, 348764, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    var n = e.r(786528),
        o = {
            nodeType: n.BLOCKS.DOCUMENT,
            data: {},
            content: [{
                nodeType: n.BLOCKS.PARAGRAPH,
                data: {},
                content: [{
                    nodeType: "text",
                    value: "",
                    marks: [],
                    data: {}
                }]
            }]
        }
}, 914162, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        get isBlock() {
            return c
        },
        get isEmptyParagraph() {
            return d
        },
        get isInline() {
            return s
        },
        get isText() {
            return u
        },
        get stripEmptyTrailingParagraphFromDocument() {
            return f
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: Object.getOwnPropertyDescriptor(n, o).get
    });
    var i = e.r(786528),
        a = e.r(283798);

    function l(e, t) {
        var r = !0,
            n = !1,
            o = void 0;
        try {
            for (var i, a = Object.keys(e)[Symbol.iterator](); !(r = (i = a.next()).done); r = !0) {
                var l = i.value;
                if (t === e[l]) return !0
            }
        } catch (e) {
            n = !0, o = e
        } finally {
            try {
                r || null == a.return || a.return()
            } finally {
                if (n) throw o
            }
        }
        return !1
    }

    function s(e) {
        return l(a.INLINES, e.nodeType)
    }

    function c(e) {
        return l(i.BLOCKS, e.nodeType)
    }

    function u(e) {
        return "text" === e.nodeType
    }

    function d(e) {
        if (e.nodeType !== i.BLOCKS.PARAGRAPH || 1 !== e.content.length) return !1;
        var t = e.content[0];
        return "text" === t.nodeType && "" === t.value
    }

    function f(e) {
        var t, r;
        return !(null != e && (void 0 === e ? "undefined" : e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e) == "object" && "content" in e && Array.isArray(e.content)) || e.content.length < 2 ? e : d(e.content[e.content.length - 1]) ? (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({}, e), r = r = {
            content: e.content.slice(0, -1)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t) : e
    }
}, 698935, (e, t, r) => {
    "use strict";
    t.exports = e => {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }
}, 896704, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        get enumError() {
            return c
        },
        get maxSizeError() {
            return s
        },
        get minSizeError() {
            return l
        },
        get requiredPropertyError() {
            return d
        },
        get typeMismatchError() {
            return a
        },
        get unknownPropertyError() {
            return u
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: Object.getOwnPropertyDescriptor(n, o).get
    });

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var a = function(e) {
            var t = e.path,
                r = e.property,
                n = e.typeName,
                o = e.value;
            return {
                details: 'The type of "'.concat(r, '" is incorrect, expected type: ').concat(n),
                name: "type",
                path: t.toArray(),
                type: n,
                value: o
            }
        },
        l = function(e) {
            var t = e.min,
                r = e.value;
            return {
                name: "size",
                min: t,
                path: e.path.toArray(),
                details: "Size must be at least ".concat(t),
                value: r
            }
        },
        s = function(e) {
            var t = e.max,
                r = e.value;
            return {
                name: "size",
                max: t,
                path: e.path.toArray(),
                details: "Size must be at most ".concat(t),
                value: r
            }
        },
        c = function(e) {
            var t = e.expected,
                r = e.value,
                n = e.path;
            return {
                details: "Value must be one of expected values",
                name: "in",
                expected: ((function(e) {
                    if (Array.isArray(e)) return i(e)
                })(t) || function(e) {
                    if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, void 0);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, void 0)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).sort(),
                path: n.toArray(),
                value: r
            }
        },
        u = function(e) {
            var t = e.property,
                r = e.path;
            return {
                details: 'The property "'.concat(t, '" is not expected'),
                name: "unexpected",
                path: r.toArray()
            }
        },
        d = function(e) {
            var t = e.property,
                r = e.path;
            return {
                details: 'The property "'.concat(t, '" is required here'),
                name: "required",
                path: r.toArray()
            }
        }
}, 531084, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ObjectAssertion", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    var n, o = (n = e.r(698935)) && n.__esModule ? n : {
            default: n
        },
        i = e.r(896704);

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function l(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function s(e) {
        return function(e) {
            if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, void 0);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, void 0)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var c = function() {
        var e;

        function t(e, r) {
            var n = this,
                a = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            l(this, "obj", void 0), l(this, "path", void 0), l(this, "_errors", void 0), l(this, "catch", void 0), l(this, "exists", void 0), l(this, "object", void 0), l(this, "string", void 0), l(this, "number", void 0), l(this, "array", void 0), l(this, "enum", void 0), l(this, "empty", void 0), l(this, "minLength", void 0), l(this, "noAdditionalProperties", void 0), l(this, "each", void 0), this.obj = e, this.path = r, this._errors = [], this.catch = function() {
                for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                (e = a._errors).push.apply(e, s(r))
            }, this.exists = function(e) {
                return e in n.obj || (n.catch((0, i.requiredPropertyError)({
                    property: e,
                    path: n.path.of(e)
                })), !1)
            }, this.object = function(e) {
                var t, r = e ? n.obj[e] : n.obj;
                if (e && !n.exists(e)) return !1;
                if ((0, o.default)(r)) return !0;
                var a = e ? n.path.of(e) : n.path,
                    l = null != (t = null != e ? e : n.path.last()) ? t : "value";
                return n.catch((0, i.typeMismatchError)({
                    typeName: "Object",
                    property: l,
                    path: a,
                    value: r
                })), !1
            }, this.string = function(e) {
                var t = n.obj[e];
                return (!e || !!n.exists(e)) && ("string" == typeof t || (n.catch((0, i.typeMismatchError)({
                    typeName: "String",
                    property: e,
                    path: n.path.of(e),
                    value: t
                })), !1))
            }, this.number = function(e, t) {
                var r = n.obj[e];
                return !!t && !(e in n.obj) || !!n.exists(e) && (!("number" != typeof r || Number.isNaN(r)) || (n.catch((0, i.typeMismatchError)({
                    typeName: "Number",
                    property: e,
                    path: n.path.of(e),
                    value: r
                })), !1))
            }, this.array = function(e) {
                var t = n.obj[e];
                return (!e || !!n.exists(e)) && (!!Array.isArray(t) || (n.catch((0, i.typeMismatchError)({
                    typeName: "Array",
                    property: e,
                    path: n.path.of(e),
                    value: t
                })), !1))
            }, this.enum = function(e, t) {
                var r = n.obj[e];
                return !!("string" == typeof r && t.includes(r)) || (n.catch((0, i.enumError)({
                    expected: t,
                    value: r,
                    path: n.path.of(e)
                })), !1)
            }, this.empty = function(e) {
                if (!n.array(e)) return !1;
                var t = n.obj[e];
                return 0 === t.length || (n.catch((0, i.maxSizeError)({
                    max: 0,
                    value: t,
                    path: n.path.of(e)
                })), !1)
            }, this.minLength = function(e, t) {
                if (!n.array(e)) return !1;
                var r = n.obj[e];
                return r.length >= t || (n.catch((0, i.minSizeError)({
                    min: t,
                    value: r,
                    path: n.path.of(e)
                })), !1)
            }, this.noAdditionalProperties = function(e) {
                var t = Object.keys(n.obj).sort().filter(function(t) {
                    return !e.includes(t)
                });
                return t.forEach(function(e) {
                    return n.catch((0, i.unknownPropertyError)({
                        property: e,
                        path: n.path.of(e)
                    }))
                }), 0 === t.length
            }, this.each = function(e, t) {
                if (n.array(e)) {
                    var r = n.obj[e],
                        o = !1;
                    r.forEach(function(r, i) {
                        if (!o) {
                            var a = t(r, n.path.of(e).of(i));
                            a.length > 0 && (o = !0), n.catch.apply(n, s(a))
                        }
                    })
                }
            }
        }
        return e = [{
                key: "errors",
                get: function() {
                    var e = this,
                        t = function(e) {
                            return JSON.stringify({
                                details: e.details,
                                path: e.path
                            })
                        };
                    return this._errors.filter(function(r, n) {
                        return e._errors.findIndex(function(e) {
                            return t(r) === t(e)
                        }) === n
                    })
                }
            }],
            function(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }(t.prototype, e), t
    }()
}, 488035, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        get EntityLinkAssertion() {
            return v
        },
        get HyperLinkAssertion() {
            return b
        },
        get NodeAssertion() {
            return g
        },
        get VOID_CONTENT() {
            return m
        },
        get assert() {
            return E
        },
        get assertLink() {
            return _
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: Object.getOwnPropertyDescriptor(n, o).get
    });
    var i = e.r(531084);

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t, r) {
        var n, o, i;
        return t = d(t), n = e, (o = h() ? Reflect.construct(t, r || [], d(e).constructor) : t.apply(e, r)) && ("object" == ((i = o) && "u" > typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) || "function" == typeof o) ? o : l(n)
    }

    function c(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function u(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && p(e, t)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, void 0);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, void 0)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h() {
        try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (h = function() {
            return !!e
        })()
    }
    var m = [],
        g = function() {
            var e;

            function t(e, r) {
                c(this, t), u(this, "contentRule", void 0), u(this, "validateData", void 0), this.contentRule = e, this.validateData = r
            }
            return e = [{
                    key: "assert",
                    value: function(e, t) {
                        var r = new i.ObjectAssertion(e, t);
                        if (!r.object()) return r.errors;
                        r.noAdditionalProperties(["nodeType", "data", "content"]);
                        var n = Array.isArray(this.contentRule) ? {
                                nodeTypes: this.contentRule
                            } : this.contentRule(e, t),
                            o = n.nodeTypes,
                            a = n.min,
                            l = void 0 === a ? 0 : a;
                        if (0 === o.length && l > 0) throw Error("Invalid content rule. Cannot have enforce a 'min' of ".concat(l, " with no nodeTypes"));
                        if (r.minLength("content", l), 0 === o.length ? r.empty("content") : r.each("content", function(e, t) {
                                var r = new i.ObjectAssertion(e, t);
                                return r.object() && r.enum("nodeType", o), r.errors
                            }), r.object("data")) {
                            var s, c, u = null != (c = null == (s = this.validateData) ? void 0 : s.call(this, e.data, t.of("data"))) ? c : [];
                            r.catch.apply(r, y(u))
                        }
                        return r.errors
                    }
                }],
                function(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(t.prototype, e), t
        }(),
        v = function(e) {
            function t(e, r) {
                var n;
                return c(this, t), u(n = s(this, t, [r, function(e, t) {
                    return l(n).assertLink(e, t)
                }]), "linkType", void 0), u(n, "type", void 0), u(n, "assertLink", void 0), n.linkType = e, n.assertLink = function(e, t) {
                    var r = new i.ObjectAssertion(e, t);
                    if (r.object("target")) {
                        var o = new i.ObjectAssertion(e.target.sys, t.of("target").of("sys"));
                        o.object() && (o.enum("type", [n.type]), o.enum("linkType", [n.linkType]), "Link" === n.type ? (o.string("id"), o.noAdditionalProperties(["type", "linkType", "id"])) : "ResourceLink" === n.type && (o.string("urn"), o.noAdditionalProperties(["type", "linkType", "urn"]))), r.catch.apply(r, y(o.errors))
                    }
                    return r.noAdditionalProperties(["target"]), r.errors
                }, n.type = n.linkType.startsWith("Contentful:") ? "ResourceLink" : "Link", n
            }
            return f(t, e), t
        }(g),
        b = function(e) {
            function t() {
                var e;
                return c(this, t), u(e = s(this, t, [
                    ["text"],
                    function(t, r) {
                        return l(e).assertLink(t, r)
                    }
                ]), "assertLink", function(e, t) {
                    var r = new i.ObjectAssertion(e, t);
                    return r.string("uri"), r.noAdditionalProperties(["uri"]), r.errors
                }), e
            }
            return f(t, e), t
        }(g),
        E = function(e, t) {
            return new g(e, t)
        },
        _ = function(e, t) {
            return new v(e, t)
        }
}, 843758, (e, t, r) => {
    "use strict";

    function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function o(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Path", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    var i = function e() {
        var t = this,
            r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
        o(this, "path", void 0), o(this, "of", void 0), o(this, "isRoot", void 0), o(this, "last", void 0), o(this, "toArray", void 0), this.path = r, this.of = function(r) {
            var o;
            return new e(((function(e) {
                if (Array.isArray(e)) return n(e)
            })(o = t.path) || function(e) {
                if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, void 0);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, void 0)
                }
            }(o) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).concat([r]))
        }, this.isRoot = function() {
            return 0 === t.path.length
        }, this.last = function() {
            return t.path[t.path.length - 1]
        }, this.toArray = function() {
            return t.path
        }
    }
}, 994155, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "assertText", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    var n = e.r(531084);

    function o(e, t) {
        var r = new n.ObjectAssertion(e, t);
        return r.object() && (r.noAdditionalProperties(["nodeType", "data", "value", "marks"]), r.object("data"), r.each("marks", function(e, t) {
            var r = new n.ObjectAssertion(e, t);
            return r.object() && r.string("type"), r.errors
        }), r.string("value")), r.errors
    }
}, 594884, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "validateRichTextDocument", {
        enumerable: !0,
        get: function() {
            return b
        }
    });
    var n, o = e.r(786528),
        i = e.r(283798),
        a = e.r(976464),
        l = e.r(531084),
        s = e.r(488035),
        c = e.r(843758),
        u = e.r(994155);

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function f(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function p(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, void 0);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, void 0)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var y = (0, s.assert)(p(Object.values(i.INLINES)).concat(["text"]).sort()),
        h = (0, s.assert)([o.BLOCKS.LIST_ITEM]),
        m = (0, s.assertLink)("Entry", s.VOID_CONTENT),
        g = (0, s.assert)(function() {
            return {
                nodeTypes: [o.BLOCKS.PARAGRAPH],
                min: 1
            }
        }, function(e, t) {
            var r = new l.ObjectAssertion(e, t);
            return r.noAdditionalProperties(["colspan", "rowspan"]), r.number("colspan", !0), r.number("rowspan", !0), r.errors
        }),
        v = (f(n = {}, o.BLOCKS.DOCUMENT, (0, s.assert)(a.TOP_LEVEL_BLOCKS)), f(n, o.BLOCKS.PARAGRAPH, y), f(n, o.BLOCKS.HEADING_1, y), f(n, o.BLOCKS.HEADING_2, y), f(n, o.BLOCKS.HEADING_3, y), f(n, o.BLOCKS.HEADING_4, y), f(n, o.BLOCKS.HEADING_5, y), f(n, o.BLOCKS.HEADING_6, y), f(n, o.BLOCKS.QUOTE, (0, s.assert)(a.CONTAINERS[o.BLOCKS.QUOTE])), f(n, o.BLOCKS.EMBEDDED_ENTRY, m), f(n, o.BLOCKS.EMBEDDED_ASSET, (0, s.assertLink)("Asset", s.VOID_CONTENT)), f(n, o.BLOCKS.EMBEDDED_RESOURCE, (0, s.assertLink)("Contentful:Entry", s.VOID_CONTENT)), f(n, o.BLOCKS.HR, (0, s.assert)(s.VOID_CONTENT)), f(n, o.BLOCKS.OL_LIST, h), f(n, o.BLOCKS.UL_LIST, h), f(n, o.BLOCKS.LIST_ITEM, (0, s.assert)(p(a.LIST_ITEM_BLOCKS).sort())), f(n, o.BLOCKS.TABLE, (0, s.assert)(function() {
            return {
                nodeTypes: [o.BLOCKS.TABLE_ROW],
                min: 1
            }
        })), f(n, o.BLOCKS.TABLE_ROW, (0, s.assert)(function() {
            return {
                nodeTypes: [o.BLOCKS.TABLE_CELL, o.BLOCKS.TABLE_HEADER_CELL],
                min: 1
            }
        })), f(n, o.BLOCKS.TABLE_CELL, g), f(n, o.BLOCKS.TABLE_HEADER_CELL, g), f(n, i.INLINES.HYPERLINK, new s.HyperLinkAssertion), f(n, i.INLINES.EMBEDDED_ENTRY, m), f(n, i.INLINES.EMBEDDED_RESOURCE, (0, s.assertLink)("Contentful:Entry", s.VOID_CONTENT)), f(n, i.INLINES.ENTRY_HYPERLINK, (0, s.assertLink)("Entry", ["text"])), f(n, i.INLINES.ASSET_HYPERLINK, (0, s.assertLink)("Asset", ["text"])), f(n, i.INLINES.RESOURCE_HYPERLINK, (0, s.assertLink)("Contentful:Entry", ["text"])), n),
        b = function(e) {
            var t = new c.Path,
                r = new l.ObjectAssertion(e, t);
            return (r.object() && r.enum("nodeType", [o.BLOCKS.DOCUMENT]), r.errors.length > 0) ? r.errors : function e(t, r) {
                if ("text" === t.nodeType) return (0, u.assertText)(t, r);
                var n = v[t.nodeType].assert(t, r);
                if (n.length > 0) return n;
                var o = new l.ObjectAssertion(t, r);
                return o.each("content", function(t, r) {
                    return e(t, r)
                }), o.errors
            }(e, t)
        }
}, 854525, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        get BLOCKS() {
            return i.BLOCKS
        },
        get EMPTY_DOCUMENT() {
            return s.EMPTY_DOCUMENT
        },
        get INLINES() {
            return a.INLINES
        },
        get MARKS() {
            return l.MARKS
        },
        get helpers() {
            return c
        },
        get validateRichTextDocument() {
            return u.validateRichTextDocument
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: Object.getOwnPropertyDescriptor(n, o).get
    });
    var i = e.r(786528),
        a = e.r(283798),
        l = e.r(442377);
    d(e.r(976464), r), d(e.r(858900), r), d(e.r(139929), r);
    var s = e.r(348764),
        c = function(e, t) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = f(void 0);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e, r && r.set(e, n), n
        }(e.r(914162)),
        u = e.r(594884);

    function d(e, t) {
        return Object.keys(e).forEach(function(r) {
            "default" === r || Object.prototype.hasOwnProperty.call(t, r) || Object.defineProperty(t, r, {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        }), e
    }

    function f(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            r = new WeakMap;
        return (f = function(e) {
            return e ? r : t
        })(e)
    }
}, 479668, (e, t, r) => {
    "use strict";
    var n = e.r(191788),
        o = e.r(854525);
    let i = {
            [o.BLOCKS.DOCUMENT]: (e, t) => t,
            [o.BLOCKS.PARAGRAPH]: (e, t) => n.createElement("p", null, t),
            [o.BLOCKS.HEADING_1]: (e, t) => n.createElement("h1", null, t),
            [o.BLOCKS.HEADING_2]: (e, t) => n.createElement("h2", null, t),
            [o.BLOCKS.HEADING_3]: (e, t) => n.createElement("h3", null, t),
            [o.BLOCKS.HEADING_4]: (e, t) => n.createElement("h4", null, t),
            [o.BLOCKS.HEADING_5]: (e, t) => n.createElement("h5", null, t),
            [o.BLOCKS.HEADING_6]: (e, t) => n.createElement("h6", null, t),
            [o.BLOCKS.EMBEDDED_ENTRY]: (e, t) => n.createElement("div", null, t),
            [o.BLOCKS.EMBEDDED_RESOURCE]: (e, t) => n.createElement("div", null, t),
            [o.BLOCKS.UL_LIST]: (e, t) => n.createElement("ul", null, t),
            [o.BLOCKS.OL_LIST]: (e, t) => n.createElement("ol", null, t),
            [o.BLOCKS.LIST_ITEM]: (e, t) => n.createElement("li", null, t),
            [o.BLOCKS.QUOTE]: (e, t) => n.createElement("blockquote", null, t),
            [o.BLOCKS.HR]: () => n.createElement("hr", null),
            [o.BLOCKS.TABLE]: (e, t) => n.createElement("table", null, n.createElement("tbody", null, t)),
            [o.BLOCKS.TABLE_ROW]: (e, t) => n.createElement("tr", null, t),
            [o.BLOCKS.TABLE_HEADER_CELL]: (e, t) => n.createElement("th", null, t),
            [o.BLOCKS.TABLE_CELL]: (e, t) => n.createElement("td", null, t),
            [o.INLINES.ASSET_HYPERLINK]: e => l(o.INLINES.ASSET_HYPERLINK, e),
            [o.INLINES.ENTRY_HYPERLINK]: e => l(o.INLINES.ENTRY_HYPERLINK, e),
            [o.INLINES.RESOURCE_HYPERLINK]: e => s(o.INLINES.RESOURCE_HYPERLINK, e),
            [o.INLINES.EMBEDDED_ENTRY]: e => l(o.INLINES.EMBEDDED_ENTRY, e),
            [o.INLINES.EMBEDDED_RESOURCE]: (e, t) => s(o.INLINES.EMBEDDED_RESOURCE, e),
            [o.INLINES.HYPERLINK]: (e, t) => n.createElement("a", {
                href: e.data.uri
            }, t)
        },
        a = {
            [o.MARKS.BOLD]: e => n.createElement("b", null, e),
            [o.MARKS.ITALIC]: e => n.createElement("i", null, e),
            [o.MARKS.UNDERLINE]: e => n.createElement("u", null, e),
            [o.MARKS.CODE]: e => n.createElement("code", null, e),
            [o.MARKS.SUPERSCRIPT]: e => n.createElement("sup", null, e),
            [o.MARKS.SUBSCRIPT]: e => n.createElement("sub", null, e),
            [o.MARKS.STRIKETHROUGH]: e => n.createElement("s", null, e)
        };

    function l(e, t) {
        return n.createElement("span", {
            key: t.data.target.sys.id
        }, "type: ", t.nodeType, " id: ", t.data.target.sys.id)
    }

    function s(e, t) {
        return n.createElement("span", {
            key: t.data.target.sys.urn
        }, "type: ", t.nodeType, " urn: ", t.data.target.sys.urn)
    }
    r.documentToReactComponents = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e) return null;
        let r = e;
        return t.stripEmptyTrailingParagraph && (r = o.helpers.stripEmptyTrailingParagraphFromDocument(e)),
            function e(t, r) {
                let {
                    renderNode: i,
                    renderMark: a,
                    renderText: l,
                    preserveWhitespace: s
                } = r;
                if (o.helpers.isText(t)) {
                    let e = l ? l(t.value) : t.value;
                    if (s && !l) {
                        let t = (e = e.replace(/ {2,}/g, e => " ".repeat(e.length))).split("\n"),
                            r = [];
                        t.forEach((e, o) => {
                            r.push(e), o !== t.length - 1 && r.push(n.createElement("br", null))
                        }), e = r
                    }
                    return t.marks.reduce((e, t) => a[t.type] ? a[t.type](e) : e, e)
                } {
                    var c;
                    let o = (c = t.content, c.map((t, o) => {
                        var i;
                        return i = e(t, r), n.isValidElement(i) && null === i.key ? n.cloneElement(i, {
                            key: o
                        }) : i
                    }));
                    return t.nodeType && i[t.nodeType] ? i[t.nodeType](t, o) : n.createElement(n.Fragment, null, o)
                }
            }(r, {
                renderNode: { ...i,
                    ...t.renderNode
                },
                renderMark: { ...a,
                    ...t.renderMark
                },
                renderText: t.renderText,
                preserveWhitespace: t.preserveWhitespace
            })
    }
}, 269140, e => {
    "use strict";
    var t = e.i(191788);
    e.s(["deserialize", 0, (e, r) => (function e(r) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 ? arguments[2] : void 0,
            {
                reviver: i
            } = n,
            {
                components: a = {}
            } = n;
        if ("object" != typeof r || null === r) return r;
        if (r instanceof Array) return r.map((t, r) => e(t, n, r));
        let {
            props: l
        } = r, s = r.type;
        if ("string" != typeof s) throw Error(`Deserialization error: element type: ${r.type} must be string`);
        let c = a[s] || s.toLowerCase();
        return l.children && (l = { ...l,
            children: e(l.children, n)
        }), i && ({
            type: c,
            props: l,
            key: o,
            components: a
        } = i({
            type: c,
            props: l,
            key: o,
            components: a
        })), t.createElement(c, { ...l,
            key: o
        })
    })(JSON.parse(e), r), "serialize", 0, e => JSON.stringify(e, (e, t) => {
        switch (e) {
            case "type":
                if ("string" == typeof t);
                else if ("function" == typeof t) return t.name;
                return t;
            case "_owner":
            case "_store":
            case "ref":
            case "key":
                return;
            default:
                return t
        }
    })])
}, 615399, e => {
    e.v({
        embeddedBlock: "formatted-text-module-sass-module__hDSBiW__embeddedBlock",
        formattedText: "formatted-text-module-sass-module__hDSBiW__formattedText"
    })
}, 123658, e => {
    e.v({
        alignCenter: "product-page-text-module-sass-module__o8JHuG__alignCenter",
        bold: "product-page-text-module-sass-module__o8JHuG__bold",
        medium: "product-page-text-module-sass-module__o8JHuG__medium",
        semiBold: "product-page-text-module-sass-module__o8JHuG__semiBold",
        "size-1": "product-page-text-module-sass-module__o8JHuG__size-1",
        "size-2": "product-page-text-module-sass-module__o8JHuG__size-2",
        "size-3": "product-page-text-module-sass-module__o8JHuG__size-3"
    })
}, 406184, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(123658),
        n = e.i(272043);
    let o = e => {
        let {
            size: t,
            fontWeight: o,
            align: i
        } = e;
        return (0, n.default)(r.default[`size-${t}`], {
            [r.default.alignCenter]: "center" === i,
            [r.default.bold]: "bold" === o,
            [r.default.medium]: "medium" === o
        })
    };
    e.s(["FormattedProductPageText", 0, e => {
        let r = o(e);
        return (0, t.jsx)("div", {
            className: r,
            children: e.children
        })
    }, "default", 0, e => {
        let r = o(e);
        return (0, t.jsx)("p", {
            className: r,
            children: e.children
        })
    }])
}, 678137, 268539, 857807, 799484, e => {
    "use strict";
    var t, r, n, o, i, a = ((n = {}).DOCUMENT = "document", n.PARAGRAPH = "paragraph", n.HEADING_1 = "heading-1", n.HEADING_2 = "heading-2", n.HEADING_3 = "heading-3", n.HEADING_4 = "heading-4", n.HEADING_5 = "heading-5", n.HEADING_6 = "heading-6", n.OL_LIST = "ordered-list", n.UL_LIST = "unordered-list", n.LIST_ITEM = "list-item", n.HR = "hr", n.QUOTE = "blockquote", n.EMBEDDED_ENTRY = "embedded-entry-block", n.EMBEDDED_ASSET = "embedded-asset-block", n.EMBEDDED_RESOURCE = "embedded-resource-block", n.TABLE = "table", n.TABLE_ROW = "table-row", n.TABLE_CELL = "table-cell", n.TABLE_HEADER_CELL = "table-header-cell", n);
    e.s(["BLOCKS", () => a], 268539);
    var l = ((t = {}).ASSET_HYPERLINK = "asset-hyperlink", t.EMBEDDED_ENTRY = "embedded-entry-inline", t.EMBEDDED_RESOURCE = "embedded-resource-inline", t.ENTRY_HYPERLINK = "entry-hyperlink", t.HYPERLINK = "hyperlink", t.RESOURCE_HYPERLINK = "resource-hyperlink", t);
    e.s(["INLINES", () => l], 857807);
    var s = ((r = {}).BOLD = "bold", r.ITALIC = "italic", r.UNDERLINE = "underline", r.CODE = "code", r.SUPERSCRIPT = "superscript", r.SUBSCRIPT = "subscript", r.STRIKETHROUGH = "strikethrough", r);

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function u(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    e.s(["MARKS", () => s], 799484);
    var d = [a.PARAGRAPH, a.HEADING_1, a.HEADING_2, a.HEADING_3, a.HEADING_4, a.HEADING_5, a.HEADING_6, a.OL_LIST, a.UL_LIST, a.HR, a.QUOTE, a.EMBEDDED_ENTRY, a.EMBEDDED_ASSET, a.EMBEDDED_RESOURCE, a.TABLE],
        f = [a.PARAGRAPH, a.HEADING_1, a.HEADING_2, a.HEADING_3, a.HEADING_4, a.HEADING_5, a.HEADING_6, a.OL_LIST, a.UL_LIST, a.HR, a.QUOTE, a.EMBEDDED_ENTRY, a.EMBEDDED_ASSET, a.EMBEDDED_RESOURCE];
    a.TABLE, a.TABLE_ROW, a.TABLE_CELL, a.TABLE_HEADER_CELL, a.HR, a.EMBEDDED_ENTRY, a.EMBEDDED_ASSET, a.EMBEDDED_RESOURCE;
    var p = (u(o = {}, a.OL_LIST, [a.LIST_ITEM]), u(o, a.UL_LIST, [a.LIST_ITEM]), u(o, a.LIST_ITEM, f), u(o, a.QUOTE, [a.PARAGRAPH]), u(o, a.TABLE, [a.TABLE_ROW]), u(o, a.TABLE_ROW, [a.TABLE_CELL, a.TABLE_HEADER_CELL]), u(o, a.TABLE_CELL, [a.PARAGRAPH, a.UL_LIST, a.OL_LIST]), u(o, a.TABLE_HEADER_CELL, [a.PARAGRAPH]), o),
        y = [a.HEADING_1, a.HEADING_2, a.HEADING_3, a.HEADING_4, a.HEADING_5, a.HEADING_6];

    function h(e, t) {
        var r = !0,
            n = !1,
            o = void 0;
        try {
            for (var i, a = Object.keys(e)[Symbol.iterator](); !(r = (i = a.next()).done); r = !0) {
                var l = i.value;
                if (t === e[l]) return !0
            }
        } catch (e) {
            n = !0, o = e
        } finally {
            try {
                r || null == a.return || a.return()
            } finally {
                if (n) throw o
            }
        }
        return !1
    }

    function m(e) {
        return h(l, e.nodeType)
    }

    function g(e) {
        return h(a, e.nodeType)
    }

    function v(e) {
        return "text" === e.nodeType
    }

    function b(e) {
        if (e.nodeType !== a.PARAGRAPH || 1 !== e.content.length) return !1;
        var t = e.content[0];
        return "text" === t.nodeType && "" === t.value
    }

    function E(e) {
        var t, r;
        return !(null != e && (void 0 === e ? "undefined" : e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e) == "object" && "content" in e && Array.isArray(e.content)) || e.content.length < 2 ? e : b(e.content[e.content.length - 1]) ? (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({}, e), r = r = {
            content: e.content.slice(0, -1)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t) : e
    }[a.PARAGRAPH].concat(function(e) {
        if (Array.isArray(e)) return c(e)
    }(y) || function(e) {
        if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(y) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return c(e, void 0);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, void 0)
        }
    }(y) || function() {
        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()), a.DOCUMENT, a.PARAGRAPH, a.HEADING_1, a.HEADING_2, a.HEADING_3, a.HEADING_4, a.HEADING_5, a.HEADING_6, a.OL_LIST, a.UL_LIST, a.LIST_ITEM, a.HR, a.QUOTE, a.EMBEDDED_ENTRY, a.EMBEDDED_ASSET, l.HYPERLINK, l.ENTRY_HYPERLINK, l.ASSET_HYPERLINK, l.EMBEDDED_ENTRY, s.BOLD, s.CODE, s.ITALIC, s.UNDERLINE, a.DOCUMENT, a.PARAGRAPH, e.s(["isBlock", () => g, "isEmptyParagraph", () => b, "isInline", () => m, "isText", () => v, "stripEmptyTrailingParagraphFromDocument", () => E], 939588), e.i(939588);
    var _ = e.i(698935);

    function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    var S = function(e) {
            var t = e.path,
                r = e.property,
                n = e.typeName,
                o = e.value;
            return {
                details: 'The type of "'.concat(r, '" is incorrect, expected type: ').concat(n),
                name: "type",
                path: t.toArray(),
                type: n,
                value: o
            }
        },
        O = function(e) {
            var t = e.min,
                r = e.value;
            return {
                name: "size",
                min: t,
                path: e.path.toArray(),
                details: "Size must be at least ".concat(t),
                value: r
            }
        },
        L = function(e) {
            var t = e.max,
                r = e.value;
            return {
                name: "size",
                max: t,
                path: e.path.toArray(),
                details: "Size must be at most ".concat(t),
                value: r
            }
        },
        T = function(e) {
            var t = e.expected,
                r = e.value,
                n = e.path;
            return {
                details: "Value must be one of expected values",
                name: "in",
                expected: ((function(e) {
                    if (Array.isArray(e)) return C(e)
                })(t) || function(e) {
                    if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return C(e, void 0);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(e, void 0)
                    }
                }(t) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).sort(),
                path: n.toArray(),
                value: r
            }
        },
        A = function(e) {
            var t = e.property,
                r = e.path;
            return {
                details: 'The property "'.concat(t, '" is not expected'),
                name: "unexpected",
                path: r.toArray()
            }
        },
        w = function(e) {
            var t = e.property,
                r = e.path;
            return {
                details: 'The property "'.concat(t, '" is required here'),
                name: "required",
                path: r.toArray()
            }
        };

    function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function P(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function I(e) {
        return function(e) {
            if (Array.isArray(e)) return j(e)
        }(e) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return j(e, void 0);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(e, void 0)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var B = function() {
        var e;

        function t(e, r) {
            var n = this,
                o = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            P(this, "obj", void 0), P(this, "path", void 0), P(this, "_errors", void 0), P(this, "catch", void 0), P(this, "exists", void 0), P(this, "object", void 0), P(this, "string", void 0), P(this, "number", void 0), P(this, "array", void 0), P(this, "enum", void 0), P(this, "empty", void 0), P(this, "minLength", void 0), P(this, "noAdditionalProperties", void 0), P(this, "each", void 0), this.obj = e, this.path = r, this._errors = [], this.catch = function() {
                for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                (e = o._errors).push.apply(e, I(r))
            }, this.exists = function(e) {
                return e in n.obj || (n.catch(w({
                    property: e,
                    path: n.path.of(e)
                })), !1)
            }, this.object = function(e) {
                var t, r = e ? n.obj[e] : n.obj;
                if (e && !n.exists(e)) return !1;
                if ((0, _.default)(r)) return !0;
                var o = e ? n.path.of(e) : n.path,
                    i = null != (t = null != e ? e : n.path.last()) ? t : "value";
                return n.catch(S({
                    typeName: "Object",
                    property: i,
                    path: o,
                    value: r
                })), !1
            }, this.string = function(e) {
                var t = n.obj[e];
                return (!e || !!n.exists(e)) && ("string" == typeof t || (n.catch(S({
                    typeName: "String",
                    property: e,
                    path: n.path.of(e),
                    value: t
                })), !1))
            }, this.number = function(e, t) {
                var r = n.obj[e];
                return !!t && !(e in n.obj) || !!n.exists(e) && (!("number" != typeof r || Number.isNaN(r)) || (n.catch(S({
                    typeName: "Number",
                    property: e,
                    path: n.path.of(e),
                    value: r
                })), !1))
            }, this.array = function(e) {
                var t = n.obj[e];
                return (!e || !!n.exists(e)) && (!!Array.isArray(t) || (n.catch(S({
                    typeName: "Array",
                    property: e,
                    path: n.path.of(e),
                    value: t
                })), !1))
            }, this.enum = function(e, t) {
                var r = n.obj[e];
                return !!("string" == typeof r && t.includes(r)) || (n.catch(T({
                    expected: t,
                    value: r,
                    path: n.path.of(e)
                })), !1)
            }, this.empty = function(e) {
                if (!n.array(e)) return !1;
                var t = n.obj[e];
                return 0 === t.length || (n.catch(L({
                    max: 0,
                    value: t,
                    path: n.path.of(e)
                })), !1)
            }, this.minLength = function(e, t) {
                if (!n.array(e)) return !1;
                var r = n.obj[e];
                return r.length >= t || (n.catch(O({
                    min: t,
                    value: r,
                    path: n.path.of(e)
                })), !1)
            }, this.noAdditionalProperties = function(e) {
                var t = Object.keys(n.obj).sort().filter(function(t) {
                    return !e.includes(t)
                });
                return t.forEach(function(e) {
                    return n.catch(A({
                        property: e,
                        path: n.path.of(e)
                    }))
                }), 0 === t.length
            }, this.each = function(e, t) {
                if (n.array(e)) {
                    var r = n.obj[e],
                        o = !1;
                    r.forEach(function(r, i) {
                        if (!o) {
                            var a = t(r, n.path.of(e).of(i));
                            a.length > 0 && (o = !0), n.catch.apply(n, I(a))
                        }
                    })
                }
            }
        }
        return e = [{
                key: "errors",
                get: function() {
                    var e = this,
                        t = function(e) {
                            return JSON.stringify({
                                details: e.details,
                                path: e.path
                            })
                        };
                    return this._errors.filter(function(r, n) {
                        return e._errors.findIndex(function(e) {
                            return t(r) === t(e)
                        }) === n
                    })
                }
            }],
            function(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }(t.prototype, e), t
    }();

    function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function k(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function N(e, t, r) {
        var n, o, i;
        return t = M(t), n = e, (o = U() ? Reflect.construct(t, r || [], M(e).constructor) : t.apply(e, r)) && ("object" == ((i = o) && "u" > typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i) || "function" == typeof o) ? o : k(n)
    }

    function R(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function D(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function M(e) {
        return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function G(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && H(e, t)
    }

    function H(e, t) {
        return (H = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function K(e) {
        return function(e) {
            if (Array.isArray(e)) return x(e)
        }(e) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return x(e, void 0);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return x(e, void 0)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function U() {
        try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (U = function() {
            return !!e
        })()
    }
    var F = [],
        W = function() {
            var e;

            function t(e, r) {
                R(this, t), D(this, "contentRule", void 0), D(this, "validateData", void 0), this.contentRule = e, this.validateData = r
            }
            return e = [{
                    key: "assert",
                    value: function(e, t) {
                        var r = new B(e, t);
                        if (!r.object()) return r.errors;
                        r.noAdditionalProperties(["nodeType", "data", "content"]);
                        var n = Array.isArray(this.contentRule) ? {
                                nodeTypes: this.contentRule
                            } : this.contentRule(e, t),
                            o = n.nodeTypes,
                            i = n.min,
                            a = void 0 === i ? 0 : i;
                        if (0 === o.length && a > 0) throw Error("Invalid content rule. Cannot have enforce a 'min' of ".concat(a, " with no nodeTypes"));
                        if (r.minLength("content", a), 0 === o.length ? r.empty("content") : r.each("content", function(e, t) {
                                var r = new B(e, t);
                                return r.object() && r.enum("nodeType", o), r.errors
                            }), r.object("data")) {
                            var l, s, c = null != (s = null == (l = this.validateData) ? void 0 : l.call(this, e.data, t.of("data"))) ? s : [];
                            r.catch.apply(r, K(c))
                        }
                        return r.errors
                    }
                }],
                function(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(t.prototype, e), t
        }(),
        z = function(e) {
            function t(e, r) {
                var n;
                return R(this, t), D(n = N(this, t, [r, function(e, t) {
                    return k(n).assertLink(e, t)
                }]), "linkType", void 0), D(n, "type", void 0), D(n, "assertLink", void 0), n.linkType = e, n.assertLink = function(e, t) {
                    var r = new B(e, t);
                    if (r.object("target")) {
                        var o = new B(e.target.sys, t.of("target").of("sys"));
                        o.object() && (o.enum("type", [n.type]), o.enum("linkType", [n.linkType]), "Link" === n.type ? (o.string("id"), o.noAdditionalProperties(["type", "linkType", "id"])) : "ResourceLink" === n.type && (o.string("urn"), o.noAdditionalProperties(["type", "linkType", "urn"]))), r.catch.apply(r, K(o.errors))
                    }
                    return r.noAdditionalProperties(["target"]), r.errors
                }, n.type = n.linkType.startsWith("Contentful:") ? "ResourceLink" : "Link", n
            }
            return G(t, e), t
        }(W),
        Y = function(e) {
            function t() {
                var e;
                return R(this, t), D(e = N(this, t, [
                    ["text"],
                    function(t, r) {
                        return k(e).assertLink(t, r)
                    }
                ]), "assertLink", function(e, t) {
                    var r = new B(e, t);
                    return r.string("uri"), r.noAdditionalProperties(["uri"]), r.errors
                }), e
            }
            return G(t, e), t
        }(W),
        V = function(e, t) {
            return new W(e, t)
        },
        $ = function(e, t) {
            return new z(e, t)
        };

    function q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function Z(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function J(e) {
        return function(e) {
            if (Array.isArray(e)) return q(e)
        }(e) || function(e) {
            if ("u" > typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return q(e, void 0);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return q(e, void 0)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var Q = V(J(Object.values(l)).concat(["text"]).sort()),
        X = V([a.LIST_ITEM]),
        ee = $("Entry", F),
        et = V(function() {
            return {
                nodeTypes: [a.PARAGRAPH],
                min: 1
            }
        }, function(e, t) {
            var r = new B(e, t);
            return r.noAdditionalProperties(["colspan", "rowspan"]), r.number("colspan", !0), r.number("rowspan", !0), r.errors
        });
    Z(i = {}, a.DOCUMENT, V(d)), Z(i, a.PARAGRAPH, Q), Z(i, a.HEADING_1, Q), Z(i, a.HEADING_2, Q), Z(i, a.HEADING_3, Q), Z(i, a.HEADING_4, Q), Z(i, a.HEADING_5, Q), Z(i, a.HEADING_6, Q), Z(i, a.QUOTE, V(p[a.QUOTE])), Z(i, a.EMBEDDED_ENTRY, ee), Z(i, a.EMBEDDED_ASSET, $("Asset", F)), Z(i, a.EMBEDDED_RESOURCE, $("Contentful:Entry", F)), Z(i, a.HR, V(F)), Z(i, a.OL_LIST, X), Z(i, a.UL_LIST, X), Z(i, a.LIST_ITEM, V(J(f).sort())), Z(i, a.TABLE, V(function() {
        return {
            nodeTypes: [a.TABLE_ROW],
            min: 1
        }
    })), Z(i, a.TABLE_ROW, V(function() {
        return {
            nodeTypes: [a.TABLE_CELL, a.TABLE_HEADER_CELL],
            min: 1
        }
    })), Z(i, a.TABLE_CELL, et), Z(i, a.TABLE_HEADER_CELL, et), Z(i, l.HYPERLINK, new Y), Z(i, l.EMBEDDED_ENTRY, ee), Z(i, l.EMBEDDED_RESOURCE, $("Contentful:Entry", F)), Z(i, l.ENTRY_HYPERLINK, $("Entry", ["text"])), Z(i, l.ASSET_HYPERLINK, $("Asset", ["text"])), Z(i, l.RESOURCE_HYPERLINK, $("Contentful:Entry", ["text"])), e.s([], 678137)
}, 779504, e => {
    e.v({
        alignCenter: "product-page-heading-text-module-sass-module__gJLFSq__alignCenter",
        alignLeft: "product-page-heading-text-module-sass-module__gJLFSq__alignLeft",
        bold: "product-page-heading-text-module-sass-module__gJLFSq__bold",
        h1: "product-page-heading-text-module-sass-module__gJLFSq__h1",
        h2: "product-page-heading-text-module-sass-module__gJLFSq__h2",
        h3: "product-page-heading-text-module-sass-module__gJLFSq__h3",
        h4: "product-page-heading-text-module-sass-module__gJLFSq__h4",
        h5: "product-page-heading-text-module-sass-module__gJLFSq__h5",
        medium: "product-page-heading-text-module-sass-module__gJLFSq__medium",
        productPageHeading: "product-page-heading-text-module-sass-module__gJLFSq__productPageHeading",
        semiBold: "product-page-heading-text-module-sass-module__gJLFSq__semiBold",
        smaller: "product-page-heading-text-module-sass-module__gJLFSq__smaller"
    })
}, 893820, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(779504),
        n = e.i(272043);
    let o = /<[^>]*>|[^\s<]+|[\s]+/gi,
        i = /<[^>]*>/,
        a = function(e) {
            let t;
            if (!e || "string" != typeof e) return e;
            let r = (e = e.replace(/  +/g, " ").trim()).match(o),
                n = r.length - 1,
                a = n,
                l = 0;
            for (; n > 0;) {
                if (!(t = r[n]).match(i)) {
                    let r = t.length,
                        o = l + r,
                        i = e.length - o;
                    if (l > 0 && o <= 20 && (i / o >= .6 || (e.length - l) / l > 2) && (a = n + 1), l >= 10) break;
                    l += r
                }
                n--
            }
            for (n = a; n < r.length; n++) " " === r[n] && (r[n] = " ");
            return r.join("")
        };
    e.s(["default", 0, e => {
        let {
            size: o,
            level: i,
            children: l,
            align: s,
            fontWeight: c,
            applySmartWrap: u = !1,
            reducedSize: d = !1
        } = e, f = (0, n.default)(r.default.productPageHeading, r.default[`h${o}`], {
            [r.default.alignCenter]: "center" === s,
            [r.default.alignLeft]: "left" === s,
            [r.default.bold]: "bold" === c,
            [r.default.medium]: "medium" === c,
            [r.default.smaller]: !!d
        });
        return (0, t.createElement)(`h${i||o}`, {
            className: f
        }, u ? a(l) : l)
    }], 893820)
}, 4175, e => {
    e.v({
        circle: "ordered-list-module-sass-module__YbAica__circle",
        orderedList: "ordered-list-module-sass-module__YbAica__orderedList",
        roundedRect: "ordered-list-module-sass-module__YbAica__roundedRect"
    })
}, 116281, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(4175);
    e.s(["default", 0, e => {
        let {
            children: n,
            variant: o
        } = e;
        return (0, t.jsx)("ol", {
            className: `${r.default.orderedList} ${r.default[o]}`,
            children: n
        })
    }])
}, 923241, e => {
    e.v({
        center: "heading-module-sass-module__j-slkW__center",
        h1: "heading-module-sass-module__j-slkW__h1",
        h2: "heading-module-sass-module__j-slkW__h2",
        h3: "heading-module-sass-module__j-slkW__h3",
        h4: "heading-module-sass-module__j-slkW__h4",
        left: "heading-module-sass-module__j-slkW__left",
        right: "heading-module-sass-module__j-slkW__right"
    })
}, 390996, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(923241);
    e.s(["default", 0, e => {
        let {
            size: n,
            children: o,
            align: i
        } = e;
        switch (n) {
            case 1:
                return (0, t.jsx)("h1", {
                    className: `${r.default.h1} ${r.default[i]}`,
                    children: o
                });
            case 2:
                return (0, t.jsx)("h2", {
                    className: `${r.default.h2} ${r.default[i]}`,
                    children: o
                });
            case 3:
                return (0, t.jsx)("h3", {
                    className: `${r.default.h3} ${r.default[i]}`,
                    children: o
                });
            case 4:
                return (0, t.jsx)("h4", {
                    className: `${r.default.h4} ${r.default[i]}`,
                    children: o
                })
        }
    }])
}, 29255, e => {
    "use strict";
    class t {
        static makeFromCmsResponse(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return {
                src: function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = t ? Object.keys(t).map(e => {
                            let r;
                            switch (e) {
                                case "width":
                                    r = "w";
                                    break;
                                case "height":
                                    r = "h";
                                    break;
                                case "format":
                                    r = "fm";
                                    break;
                                default:
                                    r = void 0
                            }
                            return `${r}=${t[e]}`
                        }).join("&") : null;
                    return `https:${e}${r?`?${r}`:""}`
                }(e.fields.file.url, t),
                alt: e.fields.description || ""
            }
        }
    }
    e.s(["ImageModelFactory", () => t])
}, 467431, e => {
    e.v({
        link: "link-module-sass-module__tgZFLq__link"
    })
}, 645350, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(467431),
        n = e.i(191788),
        o = e.i(51517),
        i = e.i(726617);
    e.s(["default", 0, e => {
        let {
            href: a,
            children: l,
            onClick: s,
            color: c,
            className: u = null,
            identifier: d = null,
            target: f = "_self",
            analyticsIdentifier: p = o.linkAnalyticsIdentifier.LINK_CLICK,
            rel: y = [],
            tabIndex: h = null,
            style: m = {},
            ariaLabel: g
        } = e, v = c || m ? {
            color: c,
            ...m
        } : null, b = [r.default.link].concat([u]).join(" "), E = y.join(" "), _ = (0, n.useRef)(null);
        return (0, i.default)({
            ref: _,
            href: a,
            identifier: d,
            analyticsIdentifier: p,
            onClick: s
        }), (0, t.jsx)("a", {
            className: b,
            target: f,
            "data-identifier": d,
            "data-cy": d,
            href: a,
            style: v,
            rel: E,
            ref: _,
            ...h ? {
                tabIndex: h
            } : {},
            ...g ? {
                "aria-label": g
            } : {},
            children: l
        })
    }])
}, 602108, e => {
    "use strict";
    let t = "Download Cash App";
    class r {
        static mapButtonStyle(e) {
            switch (e) {
                case "Primary - Green":
                    return "default";
                case "Secondary - White":
                    return "light";
                case "Themed":
                    return "themed";
                default:
                    throw Error(`unsupported button style: ${e}`)
            }
        }
        static makeFromToken(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default",
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "light",
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return e ? {
                qrCodeBadgeModel: {
                    title: t,
                    variant: n,
                    qrCodeImage: {
                        type: "generatedQrCodeImage",
                        token: e,
                        altText: `Scan to ${r}`
                    }
                },
                title: r,
                ctaStyle: o,
                ctaUrl: `https://click.cash.app/ui6m/${e}`,
                applyButtonDropShadow: i
            } : null
        }
        static makeFromCMSResponse(e) {
            return {
                entryId: e.sys.id,
                qrCodeBadgeModel: {
                    title: e.fields.qrCodeTitle || null,
                    variant: "Outlined" === e.fields.qrCodeBadgeStyle ? "outlined" : "default",
                    qrCodeImage: {
                        type: "generatedQrCodeImage",
                        token: e.fields.appsflyerCampaignId,
                        altText: `Scan to ${e.fields.qrCodeTitle||e.fields.buttonTitle}`
                    }
                },
                title: e.fields.buttonTitle,
                ctaStyle: r.mapButtonStyle(e.fields.buttonStyle),
                ctaUrl: e.fields.buttonUrl,
                applyButtonDropShadow: e.fields.applyButtonDropShadow
            }
        }
    }
    e.s(["default", 0, r])
}, 244289, e => {
    e.v({
        galleryInlineDisclaimer: "gallery-inline-disclaimer-module-sass-module__wMI4Zq__galleryInlineDisclaimer"
    })
}, 730153, e => {
    e.v({
        galleryFormattedText: "gallery-formatted-text-module-sass-module__y0Y4BG__galleryFormattedText",
        galleryPage: "gallery-formatted-text-module-sass-module__y0Y4BG__galleryPage"
    })
}, 499081, e => {
    e.v({
        disclaimer: "disclaimer-text-module-sass-module__LpB5la__disclaimer"
    })
}, 358304, 197199, 960483, e => {
    "use strict";
    e.s(["default", () => h], 358304);
    var t = e.i(391398),
        r = e.i(176342);
    e.s(["default", () => p], 960483);
    var n = e.i(244289),
        o = e.i(604293);
    e.i(678137);
    var i = e.i(268539);
    e.s(["default", () => d], 197199);
    var a = e.i(191788),
        l = e.i(730153),
        s = e.i(269140),
        c = e.i(479668),
        u = e.i(272043);
    let d = e => {
            let r = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                switch (e.type) {
                    case "rawText":
                        return (0, a.createElement)(e.rootTag || "p", null, e.value);
                    case "serializedJSX":
                        return (0, s.deserialize)(e.value, t ? .jsx || {
                            components: {}
                        });
                    case "contentfulRichText":
                        return (0, c.documentToReactComponents)(e.value, t ? .contentful || {
                            renderMark: {},
                            renderNode: {}
                        })
                }
            };
            return (0, t.jsx)(o.default.Consumer, {
                children: n => (0, t.jsx)("div", {
                    "data-identifier": "rich-text",
                    className: (0, u.default)(l.default.galleryFormattedText, e.className),
                    children: r(e.data, n)
                })
            })
        },
        f = {
            jsx: {
                components: {
                    p: e => (0, t.jsx)("small", {
                        children: e.children
                    })
                }
            },
            contentful: {
                renderNode: {
                    [i.BLOCKS.PARAGRAPH]: (e, r) => (0, t.jsx)("small", {
                        children: r
                    })
                }
            }
        },
        p = e => (0, t.jsx)("div", {
            className: n.default.galleryInlineDisclaimer,
            "data-testid": "gallery-inline-disclaimer",
            children: (0, t.jsx)(o.FormattedTextProvider, {
                value: f,
                children: (0, t.jsx)(d, { ...e.disclaimer
                })
            })
        });
    var y = e.i(499081);
    let h = e => {
        let n = e.referenceMarker ? {
            "--marker": `"${e.referenceMarker}"`
        } : {};
        return (0, t.jsx)("div", {
            className: y.default.disclaimer,
            style: n,
            children: "gallery" === e.format ? (0, t.jsx)(p, {
                disclaimer: e.disclaimerText
            }) : (0, t.jsx)(r.default, { ...e.disclaimerText
            })
        })
    }
}, 604293, 757309, 848468, e => {
    "use strict";
    e.s(["FormattedTextProvider", () => T, "default", () => L], 604293);
    var t = e.i(391398),
        r = e.i(191788);
    e.i(678137);
    var n = e.i(268539),
        o = e.i(857807),
        i = e.i(799484),
        a = e.i(893820),
        l = e.i(406184),
        s = e.i(116281),
        c = e.i(390996),
        u = e.i(29255),
        d = e.i(645350),
        f = e.i(845777),
        p = e.i(602108),
        y = e.i(358304),
        h = e.i(269140);
    let m = class {
        static makeFromCMSResponse(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return {
                size: t,
                data: {
                    type: "contentfulRichText",
                    value: function(e) {
                        if (!e) return null;
                        let t = JSON.parse(JSON.stringify(e));
                        for (; t.content[t.content.length - 1] ? .nodeType === n.BLOCKS.PARAGRAPH && t.content[t.content.length - 1] ? .content ? .[0] ? .value ? .length === 0;) t.content.pop();
                        return t
                    }(e) || null,
                    renderingOptions: null
                }
            }
        }
        static makeFromJSX(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return {
                size: t,
                data: {
                    type: "serializedJSX",
                    value: (0, h.serialize)(e),
                    renderingOptions: null
                }
            }
        }
        static makeFromString(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "p";
            return {
                size: t,
                data: {
                    type: "rawText",
                    value: e,
                    rootTag: r
                }
            }
        }
    };
    e.s(["default", 0, m], 757309);
    let g = class {
        static make(e, t) {
            return {
                disclaimerText: m.makeFromJSX(e),
                referenceMarker: t
            }
        }
        static makeFromCMSResponse(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
            if (e.sys.contentType) switch (e.sys.contentType.sys.id) {
                case "marketingComponentFooterDisclaimer":
                    return {
                        disclaimerText: m.makeFromCMSResponse(e.fields.disclaimer.fields.disclaimerText),
                        referenceMarker: e.fields.referenceMark || null,
                        format: t
                    };
                case "marketingComponentInlineDisclaimer":
                    return {
                        disclaimerText: m.makeFromCMSResponse(e.fields.disclaimerText)
                    };
                default:
                    throw Error(`Could not handle CMS response: ${e.sys.contentType.sys.id} as DisclaimerText`)
            }
        }
    };
    var v = e.i(769272),
        b = e.i(989606);
    class E {
        static mapButtonStyle(e) {
            switch (e) {
                case "Primary":
                    return "primary";
                case "Primary Dark":
                    return "primaryDark";
                case "Secondary":
                    return "secondary";
                case "Secondary Inverted":
                    return "secondaryInverted";
                case "Black":
                    return "black"
            }
        }
        static mapButtonSize(e) {
            switch (e) {
                case "Auto":
                    return "auto";
                case "Default":
                    return "default";
                case "Large":
                    return "large";
                case "Medium":
                    return "medium";
                case "Small":
                    return "small";
                default:
                    throw Error(`Button size ${e} is not supported`)
            }
        }
        static makeFromCMSResponse(e) {
            return {
                entryId: e.sys.id,
                title: e.fields.title,
                style: E.mapButtonStyle(e.fields.style),
                size: E.mapButtonSize(e.fields.size),
                href: e.fields.url
            }
        }
    }
    e.s(["default", 0, E], 848468);
    var _ = e.i(615399);
    let C = {
            components: {
                ProductPageText: l.default,
                Fragment: r.Fragment,
                ProductPageHeadingText: a.default,
                OrderedList: s.default,
                Heading: c.default,
                Logo: e => (0, t.jsx)(v.default, { ...e,
                    colorVariant: "default"
                }),
                h5: e => (0, t.jsx)(a.default, {
                    size: 5,
                    fontWeight: "bold",
                    children: e.children
                }),
                a: e => (0, t.jsx)(d.default, {
                    href: e.href,
                    children: e.children
                }),
                div: e => e["data-fragment"] ? (0, t.jsx)(r.Fragment, {
                    children: e.children
                }) : (0, t.jsx)("div", {
                    style: e.style,
                    children: e.children
                })
            }
        },
        S = {
            renderNode: {
                [n.BLOCKS.HEADING_1]: (e, r) => (0, t.jsx)(a.default, {
                    size: 1,
                    children: r
                }),
                [n.BLOCKS.HEADING_2]: (e, r) => (0, t.jsx)(a.default, {
                    size: 2,
                    children: r
                }),
                [n.BLOCKS.HEADING_3]: (e, r) => (0, t.jsx)(a.default, {
                    size: 3,
                    children: r
                }),
                [n.BLOCKS.HEADING_4]: (e, r) => (0, t.jsx)(a.default, {
                    size: 4,
                    children: r
                }),
                [n.BLOCKS.HEADING_5]: (e, r) => (0, t.jsx)(a.default, {
                    size: 5,
                    fontWeight: "medium",
                    children: r
                }),
                [n.BLOCKS.UL_LIST]: (e, r) => (0, t.jsx)("ul", {
                    children: r
                }),
                [n.BLOCKS.PARAGRAPH]: (e, r) => (0, t.jsx)(l.default, {
                    size: 1,
                    children: r
                }),
                [n.BLOCKS.LIST_ITEM]: (e, r) => (0, t.jsx)("li", {
                    children: r
                }),
                [n.BLOCKS.EMBEDDED_ENTRY]: e => {
                    let r;
                    switch (e.data.target.sys.contentType ? .sys.id) {
                        case "marketingComponentAdaptiveCta":
                            r = (0, t.jsx)(f.default, { ...p.default.makeFromCMSResponse(e.data.target)
                            });
                            break;
                        case "marketingComponentInlineDisclaimer":
                            r = (0, t.jsx)(y.default, { ...g.makeFromCMSResponse(e.data.target)
                            });
                            break;
                        case "marketingComponentButton":
                            r = (0, t.jsx)(b.default, { ...E.makeFromCMSResponse(e.data.target)
                            });
                            break;
                        default:
                            return null
                    }
                    return (0, t.jsx)("div", {
                        className: _.default.embeddedBlock,
                        children: r
                    })
                },
                [o.INLINES.ASSET_HYPERLINK]: e => {
                    let r = u.ImageModelFactory.makeFromCmsResponse(e.data.target);
                    return (0, t.jsx)("img", { ...r,
                        alt: r.alt || ""
                    })
                },
                [o.INLINES.HYPERLINK]: (e, r) => {
                    let n = e.data.uri;
                    return /https?:\/\/(?!cash\.app)/.test(n) ? (0, t.jsx)(d.default, {
                        href: n,
                        target: "_blank",
                        rel: ["nofollow", "noreferrer"],
                        children: r
                    }) : (0, t.jsx)(d.default, {
                        href: n,
                        children: r
                    })
                }
            },
            renderMark: {
                [i.MARKS.BOLD]: e => (0, t.jsx)("strong", {
                    children: e
                }),
                [i.MARKS.ITALIC]: e => (0, t.jsx)("em", {
                    children: e
                }),
                [i.MARKS.SUPERSCRIPT]: e => (0, t.jsx)("sup", {
                    children: e
                })
            },
            preserveWhitespace: !0
        },
        O = (0, r.createContext)(null),
        L = O,
        T = e => {
            let {
                children: r,
                value: n
            } = e;
            return (0, t.jsx)(O.Consumer, {
                children: e => {
                    let o;
                    return (0, t.jsx)(O.Provider, {
                        value: (o = e || {
                            contentful: S,
                            jsx: C
                        }, {
                            contentful: {
                                renderNode: { ...o.contentful ? .renderNode || {},
                                    ...n.contentful ? .renderNode || {}
                                },
                                renderMark: { ...o.contentful ? .renderMark || {},
                                    ...n.contentful ? .renderMark || {}
                                },
                                preserveWhitespace: n.contentful ? .preserveWhitespace || o.contentful ? .preserveWhitespace
                            },
                            jsx: {
                                components: { ...o.jsx ? .components || {},
                                    ...n.jsx ? .components || {}
                                }
                            }
                        }),
                        children: r
                    })
                }
            })
        }
}, 176342, e => {
    "use strict";
    e.s(["default", () => l]);
    var t = e.i(391398),
        r = e.i(479668),
        n = e.i(269140),
        o = e.i(615399),
        i = e.i(406184),
        a = e.i(604293);
    let l = e => {
        let {
            size: l = 1,
            data: s
        } = e, c = function(e) {
            let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!e) return null;
            switch (e.type) {
                case "rawText":
                    return (0, t.jsx)("p", {
                        children: e.value
                    });
                case "serializedJSX":
                    return (0, n.deserialize)(e.value, o ? .jsx || {
                        components: {}
                    });
                case "contentfulRichText":
                    if (!e.value) return null;
                    return (0, r.documentToReactComponents)(e.value, o ? .contentful || {
                        renderMark: {},
                        renderNode: {}
                    })
            }
        };
        return (0, t.jsx)(a.default.Consumer, {
            children: e => (0, t.jsx)("div", {
                "data-identifier": "rich-text",
                className: o.default.formattedText,
                children: (0, t.jsx)(i.FormattedProductPageText, {
                    size: l,
                    children: c(s, e)
                })
            })
        })
    }
}, 843770, e => {
    "use strict";
    e.s(["bpTabletLandscape", 0, "1024px", "breakpointMax", 0, "1680px", "breakpointMedium", 0, "1024px", "breakpointSmall", 0, "760px"])
}, 60550, e => {
    e.v({
        unstyledButton: "unstyled-button-module-sass-module___RoP_W__unstyledButton"
    })
}, 380336, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(60550),
        n = e.i(272043);
    e.s(["default", 0, e => {
        let {
            children: o,
            className: i,
            ...a
        } = e;
        return (0, t.jsx)("button", { ...a,
            className: (0, n.default)(r.default.unstyledButton, {
                [i]: i
            }),
            children: o
        })
    }])
}, 958678, (e, t, r) => {
    t.exports = e.r(280963)
}, 118891, e => {
    "use strict";
    var t = e.i(391398);
    e.s(["default", 0, e => {
        let {
            structuredData: r
        } = e;
        return (0, t.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: {
                __html: JSON.stringify(r, null, 2)
            }
        })
    }])
}, 666742, 54593, e => {
    "use strict";
    let t = e => e ? e.trim().replace(/\s+/g, " ").toLowerCase().replace(/\b([a-z])/g, e => e.toUpperCase()) : "";
    e.s(["kebabCase", 0, e => (e || "").trim().replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-"), "titleCase", 0, t], 54593), e.s(["addQueryParamToURL", 0, (e, t, r) => {
        let n = new URL(e);
        return n.searchParams.append(t, r), n.toString()
    }, "isEquivalentPath", 0, (e, t) => {
        let r = e => {
            let t;
            if (!e) return "/";
            try {
                t = new URL(e).pathname
            } catch {
                let r = e.trim().split(/[?#]/, 1)[0].replace(/^[a-z]+:\/\//i, "");
                t = /^[^/]+\//.test(r) && !r.startsWith("/") ? r.substring(r.indexOf("/")) : r.startsWith("/") ? r : "/" + r
            }
            try {
                t = decodeURI(t)
            } catch {}
            return (t = t.replace(/\/{2,}/g, "/")).length > 1 && t.endsWith("/") && (t = t.slice(0, -1)), t
        };
        return r(e) === r(t)
    }, "isHomePage", 0, e => {
        if (!e) return !1;
        try {
            let t = new URL(e),
                r = t.hostname.replace(/^www\./i, "").toLowerCase();
            return "cash.app" === r && ("/" === t.pathname || "" === t.pathname)
        } catch {
            return "cash.app" === e.trim().replace(/^[a-z]+:\/\//i, "").replace(/^www\./i, "").replace(/\/$/, "").toLowerCase()
        }
    }, "slugToName", 0, e => {
        let r;
        if (!e) return "";
        try {
            let {
                pathname: t
            } = new URL(e);
            r = t.split("/").pop() || ""
        } catch {
            r = e.trim().replace(/^[a-z]+:\/\//i, "").replace(/^www\./i, "").replace(/\/$/, "").toLowerCase().split("/").pop() || ""
        }
        return (r = r.split(/[?#]/, 1)[0].replace(/[-_]+/g, " ").trim()) ? t(r) : ""
    }], 666742)
}, 924088, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(194375);
    e.s(["default", 0, e => {
        if (!e || !r.ComponentMap.hasOwnProperty(e.type)) throw Error(`Component (${e.type}) isn't defined in the component map`);
        return (0, t.createElement)(r.ComponentMap[e.type], e.model)
    }])
}, 76731, (e, t, r) => {
    e.e, t.exports = function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(e) {
            "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, (function(t) {
                    return e[t]
                }).bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 0)
    }([function(e, t, r) {
        "use strict";
        r.r(t);
        var n = function(e) {
                return Array.isArray(e) ? e : [e]
            },
            o = function(e) {
                return e instanceof Node
            },
            i = function(e, t) {
                if (e && t) {
                    e = e instanceof NodeList ? e : [e];
                    for (var r = 0; r < e.length && !0 !== t(e[r], r, e.length); r++);
                }
            },
            a = function(e) {
                return console.error("[scroll-lock] ".concat(e))
            },
            l = function(e) {
                if (Array.isArray(e)) return e.join(", ")
            },
            s = function(e) {
                var t = [];
                return i(e, function(e) {
                    return t.push(e)
                }), t
            },
            c = function(e, t) {
                var r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document;
                if (r && -1 !== s(n.querySelectorAll(t)).indexOf(e)) return e;
                for (;
                    (e = e.parentElement) && -1 === s(n.querySelectorAll(t)).indexOf(e););
                return e
            },
            u = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
                return -1 !== s(r.querySelectorAll(t)).indexOf(e)
            },
            d = function(e) {
                if (e) return "hidden" === getComputedStyle(e).overflow
            },
            f = function(e) {
                if (e) return !!d(e) || e.scrollTop <= 0
            },
            p = function(e) {
                if (e) {
                    if (d(e)) return !0;
                    var t = e.scrollTop,
                        r = e.scrollHeight;
                    return t + e.offsetHeight >= r
                }
            },
            y = function(e) {
                if (e) return !!d(e) || e.scrollLeft <= 0
            },
            h = function(e) {
                if (e) {
                    if (d(e)) return !0;
                    var t = e.scrollLeft,
                        r = e.scrollWidth;
                    return t + e.offsetWidth >= r
                }
            };
        r.d(t, "disablePageScroll", function() {
            return v
        }), r.d(t, "enablePageScroll", function() {
            return b
        }), r.d(t, "getScrollState", function() {
            return E
        }), r.d(t, "clearQueueScrollLocks", function() {
            return _
        }), r.d(t, "getTargetScrollBarWidth", function() {
            return C
        }), r.d(t, "getCurrentTargetScrollBarWidth", function() {
            return S
        }), r.d(t, "getPageScrollBarWidth", function() {
            return O
        }), r.d(t, "getCurrentPageScrollBarWidth", function() {
            return L
        }), r.d(t, "addScrollableTarget", function() {
            return T
        }), r.d(t, "removeScrollableTarget", function() {
            return A
        }), r.d(t, "addScrollableSelector", function() {
            return w
        }), r.d(t, "removeScrollableSelector", function() {
            return j
        }), r.d(t, "addLockableTarget", function() {
            return P
        }), r.d(t, "addLockableSelector", function() {
            return I
        }), r.d(t, "setFillGapMethod", function() {
            return B
        }), r.d(t, "addFillGapTarget", function() {
            return x
        }), r.d(t, "removeFillGapTarget", function() {
            return k
        }), r.d(t, "addFillGapSelector", function() {
            return N
        }), r.d(t, "removeFillGapSelector", function() {
            return R
        }), r.d(t, "refillGaps", function() {
            return D
        });
        var m = ["padding", "margin", "width", "max-width", "none"],
            g = {
                scroll: !0,
                queue: 0,
                scrollableSelectors: ["[data-scroll-lock-scrollable]"],
                lockableSelectors: ["body", "[data-scroll-lock-lockable]"],
                fillGapSelectors: ["body", "[data-scroll-lock-fill-gap]", "[data-scroll-lock-lockable]"],
                fillGapMethod: m[0],
                startTouchY: 0,
                startTouchX: 0
            },
            v = function(e) {
                g.queue <= 0 && (g.scroll = !1, M(), W()), T(e), g.queue++
            },
            b = function(e) {
                g.queue > 0 && g.queue--, g.queue <= 0 && (g.scroll = !0, G(), z()), A(e)
            },
            E = function() {
                return g.scroll
            },
            _ = function() {
                g.queue = 0
            },
            C = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!o(e)) return 0;
                var r = e.style.overflowY;
                t ? E() || (e.style.overflowY = e.getAttribute("data-scroll-lock-saved-overflow-y-property")) : e.style.overflowY = "scroll";
                var n = S(e);
                return e.style.overflowY = r, n
            },
            S = function(e) {
                if (!o(e)) return 0;
                if (e === document.body) {
                    var t = document.documentElement.clientWidth;
                    return window.innerWidth - t
                }
                var r = e.style.borderLeftWidth,
                    n = e.style.borderRightWidth;
                e.style.borderLeftWidth = "0px", e.style.borderRightWidth = "0px";
                var i = e.offsetWidth - e.clientWidth;
                return e.style.borderLeftWidth = r, e.style.borderRightWidth = n, i
            },
            O = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return C(document.body, e)
            },
            L = function() {
                return S(document.body)
            },
            T = function(e) {
                e && n(e).map(function(e) {
                    i(e, function(e) {
                        o(e) ? e.setAttribute("data-scroll-lock-scrollable", "") : a('"'.concat(e, '" is not a Element.'))
                    })
                })
            },
            A = function(e) {
                e && n(e).map(function(e) {
                    i(e, function(e) {
                        o(e) ? e.removeAttribute("data-scroll-lock-scrollable") : a('"'.concat(e, '" is not a Element.'))
                    })
                })
            },
            w = function(e) {
                e && n(e).map(function(e) {
                    g.scrollableSelectors.push(e)
                })
            },
            j = function(e) {
                e && n(e).map(function(e) {
                    g.scrollableSelectors = g.scrollableSelectors.filter(function(t) {
                        return t !== e
                    })
                })
            },
            P = function(e) {
                e && (n(e).map(function(e) {
                    i(e, function(e) {
                        o(e) ? e.setAttribute("data-scroll-lock-lockable", "") : a('"'.concat(e, '" is not a Element.'))
                    })
                }), E() || M())
            },
            I = function(e) {
                e && (n(e).map(function(e) {
                    g.lockableSelectors.push(e)
                }), E() || M(), N(e))
            },
            B = function(e) {
                if (e)
                    if (-1 !== m.indexOf(e)) g.fillGapMethod = e, D();
                    else {
                        var t = m.join(", ");
                        a('"'.concat(e, '" method is not available!\nAvailable fill gap methods: ').concat(t, "."))
                    }
            },
            x = function(e) {
                e && n(e).map(function(e) {
                    i(e, function(e) {
                        o(e) ? (e.setAttribute("data-scroll-lock-fill-gap", ""), g.scroll || V(e)) : a('"'.concat(e, '" is not a Element.'))
                    })
                })
            },
            k = function(e) {
                e && n(e).map(function(e) {
                    i(e, function(e) {
                        o(e) ? (e.removeAttribute("data-scroll-lock-fill-gap"), g.scroll || q(e)) : a('"'.concat(e, '" is not a Element.'))
                    })
                })
            },
            N = function(e) {
                e && n(e).map(function(e) {
                    -1 === g.fillGapSelectors.indexOf(e) && (g.fillGapSelectors.push(e), g.scroll || Y(e))
                })
            },
            R = function(e) {
                e && n(e).map(function(e) {
                    g.fillGapSelectors = g.fillGapSelectors.filter(function(t) {
                        return t !== e
                    }), g.scroll || $(e)
                })
            },
            D = function() {
                g.scroll || W()
            },
            M = function() {
                H(l(g.lockableSelectors))
            },
            G = function() {
                K(l(g.lockableSelectors))
            },
            H = function(e) {
                i(document.querySelectorAll(e), function(e) {
                    U(e)
                })
            },
            K = function(e) {
                i(document.querySelectorAll(e), function(e) {
                    F(e)
                })
            },
            U = function(e) {
                if (o(e) && "true" !== e.getAttribute("data-scroll-lock-locked")) {
                    var t = window.getComputedStyle(e);
                    e.setAttribute("data-scroll-lock-saved-overflow-y-property", t.overflowY), e.setAttribute("data-scroll-lock-saved-inline-overflow-property", e.style.overflow), e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property", e.style.overflowY), e.style.overflow = "hidden", e.setAttribute("data-scroll-lock-locked", "true")
                }
            },
            F = function(e) {
                o(e) && "true" === e.getAttribute("data-scroll-lock-locked") && (e.style.overflow = e.getAttribute("data-scroll-lock-saved-inline-overflow-property"), e.style.overflowY = e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"), e.removeAttribute("data-scroll-lock-saved-overflow-property"), e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"), e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"), e.removeAttribute("data-scroll-lock-locked"))
            },
            W = function() {
                g.fillGapSelectors.map(function(e) {
                    Y(e)
                })
            },
            z = function() {
                g.fillGapSelectors.map(function(e) {
                    $(e)
                })
            },
            Y = function(e) {
                var t = document.querySelectorAll(e),
                    r = -1 !== g.lockableSelectors.indexOf(e);
                i(t, function(e) {
                    V(e, r)
                })
            },
            V = function(e) {
                var t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (o(e)) {
                    t = "" === e.getAttribute("data-scroll-lock-lockable") || r ? C(e, !0) : C(c(e, l(g.lockableSelectors)), !0), "true" === e.getAttribute("data-scroll-lock-filled-gap") && q(e);
                    var n = window.getComputedStyle(e);
                    if (e.setAttribute("data-scroll-lock-filled-gap", "true"), e.setAttribute("data-scroll-lock-current-fill-gap-method", g.fillGapMethod), "margin" === g.fillGapMethod) {
                        var i = parseFloat(n.marginRight);
                        e.style.marginRight = "".concat(i + t, "px")
                    } else if ("width" === g.fillGapMethod) e.style.width = "calc(100% - ".concat(t, "px)");
                    else if ("max-width" === g.fillGapMethod) e.style.maxWidth = "calc(100% - ".concat(t, "px)");
                    else if ("padding" === g.fillGapMethod) {
                        var a = parseFloat(n.paddingRight);
                        e.style.paddingRight = "".concat(a + t, "px")
                    }
                }
            },
            $ = function(e) {
                i(document.querySelectorAll(e), function(e) {
                    q(e)
                })
            },
            q = function(e) {
                if (o(e) && "true" === e.getAttribute("data-scroll-lock-filled-gap")) {
                    var t = e.getAttribute("data-scroll-lock-current-fill-gap-method");
                    e.removeAttribute("data-scroll-lock-filled-gap"), e.removeAttribute("data-scroll-lock-current-fill-gap-method"), "margin" === t ? e.style.marginRight = "" : "width" === t ? e.style.width = "" : "max-width" === t ? e.style.maxWidth = "" : "padding" === t && (e.style.paddingRight = "")
                }
            };
        "u" > typeof window && window.addEventListener("resize", function(e) {
            D()
        }), "u" > typeof document && (document.addEventListener("touchstart", function(e) {
            g.scroll || (g.startTouchY = e.touches[0].clientY, g.startTouchX = e.touches[0].clientX)
        }), document.addEventListener("touchmove", function(e) {
            if (!g.scroll) {
                var t = g.startTouchY,
                    r = g.startTouchX,
                    n = e.touches[0].clientY,
                    o = e.touches[0].clientX;
                if (e.touches.length < 2) {
                    var i = l(g.scrollableSelectors),
                        a = {
                            up: t < n,
                            down: t > n,
                            left: r < o,
                            right: r > o
                        },
                        s = {
                            up: t + 3 < n,
                            down: t - 3 > n,
                            left: r + 3 < o,
                            right: r - 3 > o
                        };
                    ! function t(r) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (r) {
                            var o = c(r, i, !1);
                            if (u(r, 'input[type="range"]')) return !1;
                            if (n || u(r, 'textarea, [contenteditable="true"]') && c(r, i) || u(r, i)) {
                                var l = !1;
                                y(r) && h(r) ? (a.up && f(r) || a.down && p(r)) && (l = !0) : f(r) && p(r) ? (a.left && y(r) || a.right && h(r)) && (l = !0) : (s.up && f(r) || s.down && p(r) || s.left && y(r) || s.right && h(r)) && (l = !0), l && (o ? t(o, !0) : e.cancelable && e.preventDefault())
                            } else t(o)
                        } else e.cancelable && e.preventDefault()
                    }(e.target)
                }
            }
        }, {
            passive: !1
        }), document.addEventListener("touchend", function(e) {
            g.scroll || (g.startTouchY = 0, g.startTouchX = 0)
        })), t.default = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n, o, i;
                    n = e, o = t, i = r[t], o in n ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = i
                })
            }
            return e
        }({
            disablePageScroll: v,
            enablePageScroll: b,
            getScrollState: E,
            clearQueueScrollLocks: _,
            getTargetScrollBarWidth: C,
            getCurrentTargetScrollBarWidth: S,
            getPageScrollBarWidth: O,
            getCurrentPageScrollBarWidth: L,
            addScrollableSelector: w,
            removeScrollableSelector: j,
            addScrollableTarget: T,
            removeScrollableTarget: A,
            addLockableSelector: I,
            addLockableTarget: P,
            addFillGapSelector: N,
            removeFillGapSelector: R,
            addFillGapTarget: x,
            removeFillGapTarget: k,
            setFillGapMethod: B,
            refillGaps: D,
            _state: g
        }, {
            hide: function(e) {
                a('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'), v(e)
            },
            show: function(e) {
                a('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'), b(e)
            },
            toggle: function(e) {
                a('"toggle" is deprecated! Do not use it.'), E() ? v() : b(e)
            },
            getState: function() {
                return a('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'), E()
            },
            getWidth: function() {
                return a('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'), O()
            },
            getCurrentWidth: function() {
                return a('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'), L()
            },
            setScrollableTargets: function(e) {
                a('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'), T(e)
            },
            setFillGapSelectors: function(e) {
                a('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'), N(e)
            },
            setFillGapTargets: function(e) {
                a('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'), x(e)
            },
            clearQueue: function() {
                a('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'), _()
            }
        })
    }]).default
}, 90065, e => {
    e.v({
        button: "gallery-nav-header-module-sass-module__-FcLfG__button",
        buttonContainer: "gallery-nav-header-module-sass-module__-FcLfG__buttonContainer",
        contentHubNavDropdownContainer: "gallery-nav-header-module-sass-module__-FcLfG__contentHubNavDropdownContainer",
        fallReleaseGrid: "gallery-nav-header-module-sass-module__-FcLfG__fallReleaseGrid",
        galleryNavHeader: "gallery-nav-header-module-sass-module__-FcLfG__galleryNavHeader",
        galleryPage: "gallery-nav-header-module-sass-module__-FcLfG__galleryPage",
        promoPillContainer: "gallery-nav-header-module-sass-module__-FcLfG__promoPillContainer",
        qrCodeContainer: "gallery-nav-header-module-sass-module__-FcLfG__qrCodeContainer",
        rightAlignedContainer: "gallery-nav-header-module-sass-module__-FcLfG__rightAlignedContainer",
        showQrCode: "gallery-nav-header-module-sass-module__-FcLfG__showQrCode",
        showSignupOnMobile: "gallery-nav-header-module-sass-module__-FcLfG__showSignupOnMobile",
        signupArrow: "gallery-nav-header-module-sass-module__-FcLfG__signupArrow",
        signupButton: "gallery-nav-header-module-sass-module__-FcLfG__signupButton",
        signupButtowRow: "gallery-nav-header-module-sass-module__-FcLfG__signupButtowRow",
        taxesSignupButton: "gallery-nav-header-module-sass-module__-FcLfG__taxesSignupButton"
    })
}, 984014, e => {
    e.v({
        active: "gallery-menu-button-module-sass-module__Hy86Ia__active",
        galleryMenuButton: "gallery-menu-button-module-sass-module__Hy86Ia__galleryMenuButton"
    })
}, 855846, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(272043),
        n = e.i(984014),
        o = e.i(175486);
    e.s(["default", 0, e => {
        let i = e.theme ? o.Theme.apply(e.theme) : {};
        return (0, t.jsx)("a", {
            className: (0, r.default)(n.default.galleryMenuButton, {
                [n.default.active]: "active" === e.state
            }),
            onClick: e.onClick,
            ...e["aria-controls"] ? {
                "aria-controls": e["aria-controls"]
            } : {},
            style: i
        })
    }])
}, 774195, e => {
    "use strict";
    var t = e.i(191788);
    let r = !1,
        n = new Set;

    function o(e) {
        r = e, n.forEach(e => e())
    }

    function i() {
        let [e, i] = (0, t.useState)(r);
        return (0, t.useEffect)(() => {
            let e = () => {
                i(r)
            };
            return n.add(e), e(), () => {
                n.delete(e)
            }
        }, []), [e, o]
    }
    e.s(["default", () => i])
}, 306214, e => {
    e.v({
        galleryPageGrid: "gallery-page-grid-module-sass-module__QP1JYa__galleryPageGrid"
    })
}, 796617, e => {
    e.v({
        contentWrapper: "gallery-nav-menu-section-module-sass-module__RzGW4G__contentWrapper",
        fallReleaseGrid: "gallery-nav-menu-section-module-sass-module__RzGW4G__fallReleaseGrid",
        galleryNavMenuSection: "gallery-nav-menu-section-module-sass-module__RzGW4G__galleryNavMenuSection",
        galleryPage: "gallery-nav-menu-section-module-sass-module__RzGW4G__galleryPage",
        header: "gallery-nav-menu-section-module-sass-module__RzGW4G__header",
        iconWrapper: "gallery-nav-menu-section-module-sass-module__RzGW4G__iconWrapper",
        learnMoreSection: "gallery-nav-menu-section-module-sass-module__RzGW4G__learnMoreSection",
        primaryNavItemsWrapper: "gallery-nav-menu-section-module-sass-module__RzGW4G__primaryNavItemsWrapper",
        secondaryNavItemsWrapper: "gallery-nav-menu-section-module-sass-module__RzGW4G__secondaryNavItemsWrapper",
        socialSection: "gallery-nav-menu-section-module-sass-module__RzGW4G__socialSection",
        tertiaryNavItemsWrapper: "gallery-nav-menu-section-module-sass-module__RzGW4G__tertiaryNavItemsWrapper",
        visible: "gallery-nav-menu-section-module-sass-module__RzGW4G__visible"
    })
}, 285101, e => {
    e.v({
        galleryPrimaryNavItem: "gallery-primary-nav-item-module-sass-module__F6Eo5W__galleryPrimaryNavItem",
        imageWrapper: "gallery-primary-nav-item-module-sass-module__F6Eo5W__imageWrapper",
        navTitle: "gallery-primary-nav-item-module-sass-module__F6Eo5W__navTitle"
    })
}, 118240, e => {
    e.v({
        gallerySecondaryNavItem: "gallery-secondary-nav-item-module-sass-module___CZAXa__gallerySecondaryNavItem",
        imageWrapper: "gallery-secondary-nav-item-module-sass-module___CZAXa__imageWrapper"
    })
}, 633010, 966486, e => {
    "use strict";
    var t = e.i(391398);
    e.i(977210);
    var r = e.i(757046),
        n = e.i(645350),
        o = e.i(285101);
    e.s(["GalleryPrimaryNavItem", 0, e => {
        let {
            title: i,
            imageModel: a,
            href: l,
            analyticsIdentifier: s
        } = e;
        return (0, t.jsxs)(n.default, {
            className: o.default.galleryPrimaryNavItem,
            href: l,
            analyticsIdentifier: s,
            children: [(0, t.jsx)("div", {
                className: o.default.imageWrapper,
                children: (0, t.jsx)(r.default, {
                    src: a.src,
                    alt: a.alt,
                    lazy: !0
                })
            }), (0, t.jsx)("h4", {
                className: o.default.navTitle,
                children: i
            })]
        })
    }], 633010);
    var i = e.i(118240);
    e.s(["GallerySecondaryNavItem", 0, e => {
        let {
            title: o,
            imageModel: a,
            href: l,
            analyticsIdentifier: s
        } = e;
        return (0, t.jsxs)(n.default, {
            className: i.default.gallerySecondaryNavItem,
            href: l,
            analyticsIdentifier: s,
            children: [(0, t.jsx)("div", {
                className: i.default.imageWrapper,
                children: (0, t.jsx)(r.default, {
                    src: a.src,
                    alt: a.alt,
                    lazy: !0
                })
            }), (0, t.jsx)("p", {
                className: i.default.navTitle,
                children: o
            })]
        })
    }], 966486)
}, 453992, e => {
    "use strict";
    var t = e.i(391398);
    let r = {
        verse: (0, t.jsx)("svg", {
            width: "21",
            viewBox: "0 0 20 24",
            fill: "none",
            children: (0, t.jsx)("path", {
                d: "M9.90331 23.0138L0.359375 15.8548V0.210449L9.90399 7.36937L19.4484 0.210449V15.8549L9.90331 23.0138ZM3.89674 15.1915L9.90341 19.6973L15.911 15.1914L9.90399 10.6857L3.89674 15.1915ZM3.01257 5.51693V12.5382L7.69312 9.02769L3.01257 5.51693ZM12.1148 9.02769L16.7952 12.5382V5.51693L12.1148 9.02769Z",
                fill: "white"
            })
        }),
        square: (0, t.jsx)("svg", {
            width: "21",
            height: "21",
            viewBox: "0 0 21 21",
            fill: "none",
            children: (0, t.jsx)("path", {
                d: "M16.9722 0.257324H3.39497C1.52827 0.257324 0 1.78483 0 3.6523V17.2299C0 19.0958 1.52827 20.6237 3.39497 20.6237H16.9726C18.8393 20.6237 20.3675 19.0962 20.3675 17.2299V3.6523C20.3672 1.78483 18.8389 0.257324 16.9722 0.257324ZM16.6636 15.8417C16.6636 16.4351 16.1778 16.9194 15.584 16.9194H4.78237C4.18897 16.9194 3.70277 16.4348 3.70277 15.8417V5.04046C3.70277 4.44706 4.18897 3.96086 4.78237 3.96086H15.584C16.1778 3.96086 16.6636 4.44706 16.6636 5.04046V15.8417ZM12.9616 12.6007C12.9616 12.941 12.6837 13.2178 12.3453 13.2178H8.02497C7.6854 13.2178 7.40861 12.9406 7.40861 12.6007V8.28077C7.40861 7.94119 7.6854 7.66402 8.02497 7.66402H12.3449C12.6837 7.66402 12.9612 7.94157 12.9612 8.28077V12.6007H12.9616Z",
                fill: "white"
            })
        }),
        afterpay: (0, t.jsx)("svg", {
            width: "24",
            height: "24",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 21 21",
            children: (0, t.jsx)("path", {
                d: "M19.33,5.05,16.48,3.41l-2.9-1.66a2.88,2.88,0,0,0-4.31,2.5v.37a.58.58,0,0,0,.28.5l1.35.77a.56.56,0,0,0,.83-.49V4.52A.57.57,0,0,1,12.59,4l2.64,1.52,2.64,1.51a.57.57,0,0,1,0,1L15.23,9.56l-2.64,1.52a.57.57,0,0,1-.86-.49v-.44a2.88,2.88,0,0,0-4.31-2.5L4.52,9.31,1.67,11a2.88,2.88,0,0,0,0,5l2.85,1.64,2.9,1.66a2.88,2.88,0,0,0,4.31-2.5v-.37a.58.58,0,0,0-.28-.5l-1.35-.77a.56.56,0,0,0-.83.49v.88a.57.57,0,0,1-.86.49L5.77,15.45,3.13,13.94a.57.57,0,0,1,0-1l2.64-1.51L8.41,9.92a.57.57,0,0,1,.86.49v.44a2.88,2.88,0,0,0,4.31,2.5l2.9-1.66,2.85-1.64A2.88,2.88,0,0,0,19.33,5.05Z",
                fill: "white"
            })
        }),
        twitter: (0, t.jsxs)("svg", {
            role: "img",
            width: "22",
            height: "17",
            viewBox: "0 0 22 17",
            fill: "none",
            children: [(0, t.jsx)("title", {
                children: "Twitter Logo"
            }), (0, t.jsx)("path", {
                d: "M6.91583 16.9827C14.7834 16.9827 19.0856 10.4648 19.0856 4.8129C19.0856 4.62777 19.0818 4.44347 19.0735 4.26001C19.9087 3.65625 20.6346 2.90281 21.2071 2.04512C20.4407 2.38578 19.616 2.61511 18.7508 2.71851C19.6339 2.18897 20.3119 1.3513 20.6317 0.352687C19.8053 0.842613 18.8901 1.1987 17.9156 1.39091C17.1351 0.559498 16.0239 0.0395508 14.7935 0.0395508C12.4314 0.0395508 10.5159 1.95506 10.5159 4.3163C10.5159 4.65195 10.5534 4.97843 10.6268 5.29156C7.07179 5.11269 3.91958 3.41066 1.81019 0.822599C1.44285 1.45471 1.23103 2.18897 1.23103 2.97244C1.23103 4.4564 1.98614 5.76648 3.13445 6.53285C2.43271 6.51117 1.7735 6.31853 1.19726 5.99789C1.19663 6.01584 1.19663 6.03334 1.19663 6.05252C1.19663 8.12397 2.67099 9.85351 4.6282 10.2455C4.26878 10.3434 3.8906 10.396 3.50033 10.396C3.22513 10.396 2.95703 10.3689 2.69643 10.3188C3.24098 12.0184 4.82 13.2551 6.69215 13.2897C5.2282 14.4371 3.38399 15.1205 1.37967 15.1205C1.03485 15.1205 0.694193 15.1009 0.359375 15.0613C2.25237 16.2747 4.50019 16.9827 6.91605 16.9827",
                fill: "white"
            })]
        }),
        instagram: (0, t.jsxs)("svg", {
            role: "img",
            width: "21",
            height: "21",
            viewBox: "0 0 21 21",
            fill: "none",
            children: [(0, t.jsx)("title", {
                children: "Instagram Logo"
            }), (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.78717 0.602863C7.85251 0.555338 8.19311 0.543457 10.902 0.543457C13.6109 0.543457 13.9515 0.555338 15.0208 0.598903C16.0862 0.646427 16.8109 0.816724 17.4446 1.06227C18.0981 1.31969 18.6565 1.66029 19.2109 2.21474C19.7654 2.7692 20.1099 3.32366 20.3634 3.98108C20.6089 4.6187 20.7792 5.34346 20.8268 6.40484C20.8743 7.47019 20.8862 7.80682 20.8862 10.5197C20.8862 13.2326 20.8743 13.5692 20.8268 14.6345C20.7792 15.6999 20.6089 16.4246 20.3634 17.0583C20.106 17.7118 19.7654 18.2702 19.2109 18.8246C18.6565 19.3791 18.102 19.7237 17.4446 19.9771C16.807 20.2227 16.0822 20.393 15.0208 20.4405C13.9555 20.488 13.6189 20.4999 10.906 20.4999C8.19311 20.4999 7.85647 20.488 6.79113 20.4405C5.72578 20.393 5.00103 20.2227 4.36737 19.9771C3.7139 19.7197 3.15548 19.3791 2.60103 18.8246C2.04657 18.2702 1.70202 17.7157 1.44855 17.0583C1.20301 16.4207 1.03271 15.6959 0.985187 14.6345C0.937662 13.5692 0.925781 13.2286 0.925781 10.5197C0.925781 7.81078 0.937662 7.47019 0.985187 6.4088C1.03271 5.34346 1.20301 4.6187 1.44855 3.98504C1.70598 3.33158 2.04657 2.77316 2.60103 2.2187C3.15548 1.66425 3.70994 1.31969 4.36737 1.06623C5.00103 0.820685 5.72578 0.650388 6.78717 0.602863ZM14.9326 2.40071C13.8791 2.35319 13.5663 2.34131 10.9009 2.34131C8.23558 2.34131 7.92271 2.34923 6.86925 2.40071C5.89499 2.44428 5.36826 2.61062 5.01578 2.74527C4.54845 2.92349 4.21578 3.14131 3.86726 3.48982C3.51875 3.83834 3.30489 4.17101 3.12271 4.63834C2.9841 4.99081 2.82172 5.51755 2.77816 6.4918C2.73063 7.54527 2.71875 7.85814 2.71875 10.5235C2.71875 13.1888 2.73063 13.5017 2.77816 14.5552C2.82172 15.5294 2.98806 16.0562 3.12271 16.4086C3.30093 16.876 3.51875 17.2086 3.86726 17.5571C4.21578 17.9057 4.54845 18.1195 5.01578 18.3017C5.36826 18.4403 5.89499 18.6027 6.86925 18.6463C7.92271 18.6938 8.23558 18.7057 10.9009 18.7057C13.5663 18.7057 13.8791 18.6938 14.9326 18.6463C15.9069 18.6027 16.4336 18.4364 16.7861 18.3017C17.2534 18.1235 17.5861 17.9057 17.9346 17.5571C18.2831 17.2086 18.497 16.876 18.6791 16.4086C18.8178 16.0562 18.9801 15.5294 19.0237 14.5552C19.0712 13.5017 19.0831 13.1888 19.0831 10.5235C19.0831 7.85814 19.0712 7.54527 19.0237 6.4918C18.9801 5.51755 18.8138 4.99081 18.6791 4.63834C18.5009 4.17101 18.2831 3.83834 17.9346 3.48982C17.5861 3.14131 17.2534 2.92745 16.7861 2.74527C16.4336 2.60666 15.9069 2.44428 14.9326 2.40071Z",
                fill: "white"
            }), (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.77734 10.5198C5.77734 7.68809 8.07437 5.39502 10.9021 5.39502C13.7298 5.39502 16.0268 7.69205 16.0268 10.5198C16.0268 13.3475 13.7298 15.6445 10.9021 15.6445C8.07437 15.6445 5.77734 13.3515 5.77734 10.5198ZM7.57422 10.5196C7.57422 12.3572 9.06333 13.8463 10.901 13.8463C12.7386 13.8463 14.2277 12.3572 14.2277 10.5196C14.2277 8.68198 12.7386 7.19287 10.901 7.19287C9.06333 7.19287 7.57422 8.68198 7.57422 10.5196Z",
                fill: "white"
            }), (0, t.jsx)("path", {
                d: "M16.2273 6.38915C16.8878 6.38915 17.4233 5.85366 17.4233 5.19311C17.4233 4.53256 16.8878 3.99707 16.2273 3.99707C15.5667 3.99707 15.0312 4.53256 15.0312 5.19311C15.0312 5.85366 15.5667 6.38915 16.2273 6.38915Z",
                fill: "white"
            })]
        }),
        twitch: (0, t.jsxs)("svg", {
            role: "img",
            width: "20",
            height: "24",
            viewBox: "0 0 20 24",
            fill: "none",
            children: [(0, t.jsx)("title", {
                children: "Twitch Logo"
            }), (0, t.jsx)("path", {
                d: "M4.34904 0.563965L0.253906 4.6591V19.4016H5.16807V23.4967L9.26321 19.4016H12.5393L19.9106 12.0304V0.563965H4.34904ZM18.2725 11.2113L14.9964 14.4874H11.7203L8.8537 17.354V14.4874H5.16807V2.20202H18.2725V11.2113Z",
                fill: "white"
            }), (0, t.jsx)("path", {
                d: "M15.8138 5.06885H14.1758V9.98301H15.8138V5.06885Z",
                fill: "white"
            }), (0, t.jsx)("path", {
                d: "M11.3138 5.06885H9.67578V9.98301H11.3138V5.06885Z",
                fill: "white"
            })]
        }),
        tiktok: (0, t.jsxs)("svg", {
            width: "18",
            height: "21",
            viewBox: "0 0 18 21",
            fill: "none",
            children: [(0, t.jsx)("title", {
                children: "Tik Tok Logo"
            }), (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.2177 0.563477C13.547 3.39546 15.1276 5.08387 17.8758 5.26348V8.44871C16.2832 8.60438 14.8881 8.08349 13.2656 7.10158V13.0589C13.2656 20.6268 5.01513 22.9918 1.69818 17.5673C-0.43329 14.0767 0.871936 7.95177 7.7094 7.70629V11.0652C7.18851 11.149 6.63169 11.2807 6.12277 11.4543C4.60201 11.9692 3.73984 12.9332 3.97933 14.6336C4.44035 17.8906 10.4156 18.8546 9.9187 12.4901V0.569464H13.2177V0.563477Z",
                fill: "white"
            })]
        }),
        linkedIn: (0, t.jsxs)("svg", {
            role: "img",
            width: "21",
            height: "21",
            viewBox: "0 0 21 21",
            fill: "none",
            children: [(0, t.jsx)("title", {
                children: "LinkedIn Logo"
            }), (0, t.jsx)("path", {
                d: "M10.1163 8.10498V15.8225V8.10498ZM6.14062 8.10498V15.8225V8.10498Z",
                fill: "white"
            }), (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.30624 0.543457C1.36693 0.543457 0.605469 1.30492 0.605469 2.24422V18.7991C0.605469 19.7384 1.36693 20.4999 2.30624 20.4999H18.8611C19.8004 20.4999 20.5619 19.7384 20.5619 18.7991V2.24422C20.5619 1.30492 19.8004 0.543457 18.8611 0.543457H2.30624ZM7.5797 5.92285C7.5797 6.71934 6.93403 7.36502 6.13754 7.36502C5.34105 7.36502 4.69538 6.71934 4.69538 5.92285C4.69538 5.12637 5.34105 4.48069 6.13754 4.48069C6.93403 4.48069 7.5797 5.12637 7.5797 5.92285ZM4.8515 8.10561V15.8231H7.42401V8.10561H4.8515ZM11.3997 15.8231V11.1751C11.5302 10.5324 12.0094 9.97608 12.7667 9.97608C13.7022 9.97608 14.053 10.6777 14.053 11.7301V15.8227H16.6255V11.4182C16.6255 9.04062 15.3782 7.94925 13.6632 7.94925C12.3871 7.94925 11.7254 8.63588 11.3997 9.1392V8.10561H8.8272V15.8231H11.3997Z",
                fill: "white"
            })]
        }),
        link: (0, t.jsxs)("svg", {
            role: "img",
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, t.jsx)("title", {
                children: "Link Icon"
            }), (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.6461 11.6861L16.7297 9.60247C18.9264 7.40578 18.9264 3.84422 16.7297 1.64752C14.533 -0.549176 10.9715 -0.549173 8.77476 1.64753L6.66818 3.75411C4.47148 5.95081 4.47148 9.51236 6.66818 11.7091L6.75618 11.6211L6.75932 11.6242C7.29629 12.1612 8.16689 12.1612 8.70386 11.6242C9.24083 11.0872 9.24083 10.2166 8.70386 9.67965L8.70072 9.67652L8.7895 9.58774C7.76437 8.56262 7.76437 6.90056 8.7895 5.87543L10.8961 3.76885C11.9212 2.74372 13.5833 2.74372 14.6084 3.76884C15.6335 4.79397 15.6335 6.45603 14.6084 7.48115L14.1045 7.9851C14.6329 9.17364 14.8153 10.4606 14.6461 11.6861ZM3.73114 6.74122L1.64752 8.82484C-0.549175 11.0215 -0.549175 14.5831 1.64752 16.7798C3.84422 18.9765 7.40578 18.9765 9.60248 16.7798L11.7091 14.6732C13.9058 12.4765 13.9058 8.91495 11.7091 6.71825L11.6211 6.80626L11.6179 6.80312C11.081 6.26614 10.2104 6.26614 9.67338 6.80312C9.13641 7.34009 9.13641 8.21069 9.67338 8.74766L9.67652 8.75079L9.58774 8.83957C10.6129 9.8647 10.6129 11.5268 9.58774 12.5519L7.48116 14.6585C6.45603 15.6836 4.79397 15.6836 3.76884 14.6585C2.74372 13.6333 2.74372 11.9713 3.76884 10.9462L4.27279 10.4422C3.74438 9.25367 3.56191 7.96674 3.73114 6.74122Z",
                fill: "white"
            })]
        }),
        x: (0, t.jsxs)("svg", {
            role: "img",
            width: "20",
            height: "20",
            viewBox: "-50 -50 1300 1327",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, t.jsx)("title", {
                children: "X Logo"
            }), (0, t.jsx)("path", {
                d: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
                fill: "white"
            })]
        }),
        "x-negative": (0, t.jsxs)("svg", {
            role: "img",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, t.jsx)("title", {
                children: "X Logo"
            }), (0, t.jsx)("g", {
                clipPath: "url(#clip0_1970_8943)",
                children: (0, t.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M29 -0.512695H-0.0732422V28.9999H29V-0.512695ZM17.96 1.87498H15.2034L10.6609 7.06748L6.73335 1.87498H1.04502L7.84168 10.7625L1.40002 18.125H4.15835L9.13002 12.4441L13.475 18.125H19.0225L11.9375 8.75831L17.96 1.87498ZM15.7634 16.475H14.2359L4.26418 3.43831H5.90335L15.7634 16.475Z"
                })
            }), (0, t.jsx)("defs", {
                children: (0, t.jsx)("clipPath", {
                    id: "clip0_1970_8943",
                    children: (0, t.jsx)("rect", {
                        width: "20",
                        height: "20",
                        rx: "1.75758"
                    })
                })
            })]
        }),
        facebook: (0, t.jsx)("svg", {
            width: "21",
            height: "21",
            viewBox: "0 0 11 20",
            children: (0, t.jsx)("path", {
                d: "M6.742 20v-9.123h3.062l.458-3.555h-3.52v-2.27c0-1.03.285-1.731 1.762-1.731l1.882-.001V.14A25.198 25.198 0 0 0 7.643 0C4.928 0 3.07 1.657 3.07 4.7v2.622H0v3.555h3.07V20h3.672",
                fill: "currentColor",
                fillRule: "evenodd"
            })
        })
    };
    e.s(["default", 0, e => {
        let {
            name: t
        } = e;
        return r[t]
    }], 453992)
}, 992537, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(272043),
        n = e.i(306214),
        o = e.i(796617),
        i = e.i(633010),
        a = e.i(966486),
        l = e.i(645350),
        s = e.i(51517),
        c = e.i(453992),
        u = e.i(198216);
    e.s(["default", 0, e => {
        let {
            visible: d,
            navigationModel: f,
            id: p,
            grid: y
        } = e, {
            primaryNavItems: h,
            secondaryNavItems: m,
            learnMoreSection: g,
            socialSection: v
        } = f, b = s.linkAnalyticsIdentifier.NAV_LINK_CLICK, E = (0, r.default)(o.default.galleryNavMenuSection, {
            [o.default.visible]: d,
            [o.default.fallReleaseGrid]: "fall-release" === y
        }), _ = (0, r.default)({
            [u.default.fullBleedGrid]: "fall-release" === y,
            [n.default.galleryPageGrid]: "fall-release" !== y,
            [o.default.fallReleaseGrid]: "fall-release" === y
        });
        return (0, t.jsx)("nav", {
            "aria-label": "Navigation overlay",
            className: E,
            children: (0, t.jsx)("div", {
                role: "navigation",
                className: _,
                id: p,
                "data-scroll-lock-scrollable": !0,
                children: (0, t.jsxs)("div", {
                    className: o.default.contentWrapper,
                    children: [(0, t.jsx)("div", {
                        className: o.default.primaryNavItemsWrapper,
                        children: h.map((e, r) => (0, t.jsx)(i.GalleryPrimaryNavItem, { ...e
                        }, `${r}_primary`))
                    }), (0, t.jsx)("div", {
                        className: o.default.secondaryNavItemsWrapper,
                        children: m.map((e, r) => (0, t.jsx)(a.GallerySecondaryNavItem, { ...e
                        }, `${r}_secondary`))
                    }), (0, t.jsxs)("div", {
                        className: o.default.tertiaryNavItemsWrapper,
                        children: [(0, t.jsxs)("div", {
                            className: o.default.learnMoreSection,
                            children: [(0, t.jsx)("h6", {
                                className: o.default.header,
                                children: g.title
                            }), (0, t.jsx)("ul", {
                                className: o.default.learnMoreSection,
                                children: g.links.map(e => (0, t.jsx)("li", {
                                    children: (0, t.jsx)(l.default, {
                                        href: e.href,
                                        analyticsIdentifier: b,
                                        children: (0, t.jsx)("span", {
                                            children: e.title
                                        })
                                    })
                                }, e.title))
                            })]
                        }), (0, t.jsxs)("div", {
                            className: o.default.socialSection,
                            children: [(0, t.jsx)("h6", {
                                className: o.default.header,
                                children: v.title
                            }), (0, t.jsx)("ul", {
                                className: o.default.iconWrapper,
                                children: v.links.map(e => (0, t.jsx)("li", {
                                    children: (0, t.jsx)(l.default, {
                                        href: e.href,
                                        analyticsIdentifier: b,
                                        rel: ["noopener", "noreferrer"],
                                        children: e.iconKey && (0, t.jsx)(c.default, {
                                            name: e.iconKey
                                        })
                                    })
                                }, e.title))
                            })]
                        })]
                    })]
                })
            })
        })
    }])
}, 624959, e => {
    e.v({
        disclaimerBody: "gallery-promo-pill-module-sass-module__SosY8q__disclaimerBody",
        galleryPromoPill: "gallery-promo-pill-module-sass-module__SosY8q__galleryPromoPill",
        homeFallReleasePage: "gallery-promo-pill-module-sass-module__SosY8q__homeFallReleasePage"
    })
}, 394757, 966351, 708974, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        n = e.i(726617),
        o = e.i(624959);
    let i = function() {
        let {
            size: e = 13
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, t.jsx)("svg", {
            width: "100%",
            viewBox: `0 0 ${e} ${e}`,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.82276 0.500619L11.7722 5.45007C12.0759 5.75379 12.0759 6.24622 11.7722 6.54994L6.82276 11.4994C6.51904 11.8031 6.0266 11.8031 5.72288 11.4994C5.41916 11.1957 5.41916 10.7032 5.72288 10.3995L9.34466 6.77774H0.777731C0.348202 6.77774 0 6.42954 0 6.00001C0 5.57048 0.348202 5.22228 0.777731 5.22228H9.34466L5.72288 1.6005C5.41916 1.29677 5.41916 0.804342 5.72288 0.500619C6.0266 0.196896 6.51904 0.196896 6.82276 0.500619Z",
                fill: "currentColor"
            })
        })
    };
    e.s(["default", 0, i], 966351), e.s(["default", 0, e => {
        let a = (0, r.useRef)(null);
        return (0, n.default)({
            ref: a,
            href: e.href,
            onClick: null
        }), (0, t.jsxs)("a", {
            className: o.default.galleryPromoPill,
            href: e.href,
            ref: a,
            children: [e.text, (0, t.jsx)(i, {})]
        })
    }], 394757);
    var a = e.i(399430);
    let l = {
        whiteFilled: {
            buttonBackgroundColor: a.colorWhite,
            buttonBorderColor: a.colorBlack,
            buttonTextColor: a.colorBlack
        },
        whiteFilledNoBorder: {
            buttonBackgroundColor: a.colorWhite,
            buttonBorderColor: "transparent",
            buttonTextColor: a.colorBlack
        },
        blackFilled: {
            buttonBackgroundColor: a.colorBlack,
            buttonBorderColor: "rgba(255,255,255,0.5)",
            buttonTextColor: a.colorWhite
        },
        whiteOutline: {
            buttonBackgroundColor: "transparent",
            buttonBorderColor: a.colorWhite,
            buttonTextColor: a.colorWhite
        },
        blackOutline: {
            buttonBackgroundColor: "transparent",
            buttonBorderColor: a.colorBlack,
            buttonTextColor: a.colorBlack
        },
        greenFilled: {
            buttonBackgroundColor: a.colorCashGreen,
            buttonBorderColor: "transparent",
            buttonTextColor: a.colorBlack
        }
    };
    e.s(["GalleryButtonThemes", 0, l, "default", 0, {
        default: {
            logoColor: "defaultFilled",
            buttonTheme: "blackFilled",
            signupButtonTheme: "greenFilled"
        },
        monochrome: {
            logoColor: "blackFilled",
            buttonTheme: "blackFilled",
            signupButtonTheme: "whiteFilled"
        },
        onGreen: {
            logoColor: "blackFilledGreen",
            buttonTheme: "blackFilled",
            signupButtonTheme: "whiteFilledNoBorder"
        },
        onWhite: {
            logoColor: "defaultFilled",
            buttonTheme: "blackFilled",
            signupButtonTheme: "greenFilled"
        },
        onBlack: {
            logoColor: "defaultFilledBlack",
            buttonTheme: "blackFilled",
            signupButtonTheme: "greenFilled"
        }
    }], 708974)
}, 793334, e => {
    e.v({
        buttonText: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__buttonText",
        dropdownArrow: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__dropdownArrow",
        eyebrow: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__eyebrow",
        galleryPage: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__galleryPage",
        navButton: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__navButton",
        navDropdown: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__navDropdown",
        navMenu: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__navMenu",
        navMenuItem: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__navMenuItem",
        overlay: "content-hub-nav-dropdown-module-sass-module__OKg_Ia__overlay"
    })
}, 89553, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(191788),
        n = e.i(76731);
    e.i(667861);
    var o = e.i(114767),
        i = e.i(90065),
        a = e.i(769272),
        l = e.i(855846),
        s = e.i(272043),
        c = e.i(774195),
        u = e.i(768264),
        d = e.i(992537),
        f = e.i(645350),
        p = e.i(900169),
        y = e.i(394757),
        h = e.i(708974),
        m = e.i(175486),
        g = e.i(793334),
        v = e.i(380336);
    let b = [{
            label: "Featured",
            value: "featured",
            href: "/learn/featured"
        }, {
            label: "Bitcoin",
            value: "bitcoin",
            href: "/learn/bitcoin"
        }, {
            label: "Credit",
            value: "credit",
            href: "/learn/credit"
        }, {
            label: "Savings",
            value: "savings",
            href: "/learn/savings"
        }, {
            label: "How To's",
            value: "how-tos",
            href: "/learn/how-tos"
        }, {
            label: "Investing 101",
            value: "investing-101",
            href: "/learn/investing-101"
        }, {
            label: "Trust & Security",
            value: "trust-security",
            href: "/learn/trust-security"
        }],
        E = e => {
            let {
                initialOption: n,
                options: o,
                onOptionSelect: i,
                eyebrow: a = "The Newsroom",
                defaultDisplayText: l = "Explore more"
            } = e, [s, c] = (0, r.useState)(!1), u = (0, r.useRef)(null), d = r.default.useId();
            (0, r.useEffect)(() => {
                let e = e => {
                        u.current && !u.current.contains(e.target) && c(!1)
                    },
                    t = e => {
                        "Escape" === e.key && c(!1)
                    };
                return s && (document.addEventListener("mousedown", e), document.addEventListener("keydown", t), window.innerWidth < 760 && (document.body.style.overflow = "hidden")), () => {
                    document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t), document.body.style.overflow = ""
                }
            }, [s]);
            let f = o && o.length > 0 ? o : b;
            if (!f || 0 === f.length) return null;
            let p = f.find(e => e.value === n),
                y = p ? p.label : l;
            return (0, t.jsxs)(t.Fragment, {
                children: [s && (0, t.jsx)("div", {
                    className: g.default.overlay,
                    onClick: () => c(!1),
                    "aria-hidden": "true"
                }), (0, t.jsxs)("div", {
                    className: g.default.navDropdown,
                    ref: u,
                    children: [(0, t.jsx)("div", {
                        className: g.default.eyebrow,
                        children: a
                    }), (0, t.jsxs)(v.default, {
                        type: "button",
                        className: g.default.navButton,
                        onClick: () => c(!s),
                        "aria-label": "Select option",
                        "aria-expanded": s,
                        "aria-haspopup": "true",
                        "aria-controls": s ? d : void 0,
                        children: [(0, t.jsx)("span", {
                            className: g.default.buttonText,
                            children: y
                        }), (0, t.jsx)("span", {
                            className: g.default.dropdownArrow,
                            "aria-hidden": "true",
                            children: "▾"
                        })]
                    }), s && (0, t.jsx)("div", {
                        className: g.default.navMenu,
                        role: "menu",
                        id: d,
                        children: f.map(e => {
                            let r = e.value === n;
                            return (0, t.jsx)("button", {
                                type: "button",
                                className: g.default.navMenuItem,
                                onClick: () => {
                                    c(!1), i ? i(e) : window.location.href = e.href
                                },
                                disabled: r,
                                role: "menuitem",
                                "aria-current": r ? "true" : void 0,
                                children: e.label
                            }, e.value)
                        })
                    })]
                })]
            })
        },
        _ = "navigation-overlay",
        C = e => {
            let {
                theme: r = h.GalleryButtonThemes.greenFilled,
                showOnMobile: n = !1
            } = e, o = "/login?su"; {
                let e = new URLSearchParams(window.location.search).toString();
                e && (o += `&${e}`)
            }
            return (0, t.jsx)(f.default, {
                className: (0, s.default)(i.default.button, i.default.signupButton, {
                    [i.default.showSignupOnMobile]: n
                }),
                href: o,
                identifier: "signup",
                style: m.Theme.apply(r),
                children: (0, t.jsxs)("div", {
                    className: i.default.signupButtowRow,
                    children: ["Sign up", (0, t.jsx)("div", {
                        className: i.default.signupArrow,
                        children: (0, t.jsx)("svg", {
                            width: "100%",
                            viewBox: "0 -2 13 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, t.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M6.82276 0.500619L11.7722 5.45007C12.0759 5.75379 12.0759 6.24622 11.7722 6.54994L6.82276 11.4994C6.51904 11.8031 6.0266 11.8031 5.72288 11.4994C5.41916 11.1957 5.41916 10.7032 5.72288 10.3995L9.34466 6.77774H0.777731C0.348202 6.77774 0 6.42954 0 6.00001C0 5.57048 0.348202 5.22228 0.777731 5.22228H9.34466L5.72288 1.6005C5.41916 1.29677 5.41916 0.804342 5.72288 0.500619C6.0266 0.196896 6.51904 0.196896 6.82276 0.500619Z",
                                fill: "currentColor"
                            })
                        })
                    })]
                })
            })
        };
    e.s(["default", 0, e => {
        let [g, v] = (0, c.default)(), b = (0, u.default)(), S = g ? h.default.default : h.default[e.theme || "default"];
        (0, r.useEffect)(() => {
            (0, p.isMobilePhone)() || (g ? (0, n.disablePageScroll)() : (0, n.enablePageScroll)())
        }, [g]);
        let O = e => {
            let {
                key: t
            } = e;
            "Escape" === t && g && v(!1)
        };
        (0, r.useEffect)(() => (window.addEventListener("keyup", O), () => {
            window.removeEventListener("keyup", O)
        }));
        let L = (0, s.default)(i.default.galleryNavHeader, {
                [i.default.navOpen]: !!g,
                [i.default.fallReleaseGrid]: "fall-release" === e.grid
            }),
            T = m.Theme.apply(h.default[e.theme]);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("header", {
                className: L,
                "data-show-promo-pill": !!e.showPromoPill,
                "data-nav-open": g,
                style: T,
                children: [(0, t.jsxs)("div", {
                    className: i.default.buttonContainer,
                    children: [(0, t.jsx)("a", {
                        href: "/",
                        children: (0, t.jsx)(a.default, {
                            colorVariant: S.logoColor,
                            withText: !1
                        })
                    }), e ? .contentHubNavDropdownModel && (0, t.jsx)("div", {
                        className: i.default.contentHubNavDropdownContainer,
                        children: (0, t.jsx)(E, { ...e.contentHubNavDropdownModel
                        })
                    }), e.promoPill && (0, t.jsx)("div", {
                        className: i.default.promoPillContainer,
                        children: (0, t.jsx)(y.default, { ...e.promoPill
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: i.default.rightAlignedContainer,
                    children: [!e.hideSignupButton && (0, t.jsx)(C, {
                        theme: h.GalleryButtonThemes[S.signupButtonTheme],
                        showOnMobile: e.enableSignupOnMobile
                    }), (0, t.jsx)(f.default, {
                        className: i.default.button,
                        href: e.loginButtonHref,
                        style: m.Theme.apply(h.GalleryButtonThemes[S.buttonTheme]),
                        children: "Log in"
                    }), e.navigationModel && (0, t.jsx)(l.default, {
                        "aria-controls": _,
                        onClick: () => {
                            g || b((0, o.MarketingNavToggleOpen)()), v(!g)
                        },
                        state: g ? "active" : "inactive",
                        theme: h.GalleryButtonThemes[S.buttonTheme]
                    })]
                })]
            }), e.navigationModel && (0, t.jsx)(d.default, {
                visible: g,
                id: _,
                ...e.navigationModel && {
                    navigationModel: e.navigationModel
                },
                grid: e.grid
            })]
        })
    }], 89553)
}, 482315, e => {
    "use strict";
    var t = e.i(191788),
        r = e.i(843770);
    let n = parseInt(r.breakpointSmall, 10) - 1,
        o = parseInt(r.breakpointMedium, 10) - 1,
        i = function(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            switch (e.viewportSize) {
                case "mobile":
                    if (!r) return "all";
                    return `(max-width:${n}px)`;
                case "tablet":
                    if (t && "mobile" === t.viewportSize) return `(min-width:${n+1}px) ${r?`and (max-width:${o}px)`:""}`;
                    return `(max-width:${o}px)`;
                case "desktop":
                    if (!t) return "all";
                    if ("mobile" === t.viewportSize) return `(min-width:${n+1}px)`;
                    if ("tablet" === t.viewportSize) return `(min-width:${o+1}px)`
            }
        };
    e.s(["default", 0, function(e) {
        let [r, n] = (0, t.useState)(null), o = e.sort((e, t) => {
            let r = ["mobile", "tablet", "desktop"];
            return r.indexOf(e.viewportSize) - r.indexOf(t.viewportSize)
        });
        return (0, t.useEffect)(() => {
            o.map((e, t) => {
                let r = o[t - 1],
                    a = o[t + 1],
                    l = window.matchMedia(i(e, r, a));
                l.matches && n(e), l.addEventListener("change", t => {
                    t.matches && n(e)
                })
            })
        }, [o]), r ? r.imageModel : null
    }])
}, 859686, e => {
    e.v({
        responsiveImage: "responsive-image-module-sass-module__yuR0Wa__responsiveImage"
    })
}, 123860, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(859686),
        n = e.i(272043),
        o = e.i(482315);
    e.s(["default", 0, e => {
        let i = (0, o.default)(e.imageSet || []);
        return i ? .src ? (0, t.jsx)("img", {
            src: i.src,
            alt: e.imageSet[0] ? .imageModel.alt || "",
            className: (0, n.default)(r.default.responsiveImage, e.className)
        }) : null
    }])
}, 722023, e => {
    e.v({
        "spacing-normal": "spacer-module-sass-module__c7purG__spacing-normal"
    })
}, 574622, e => {
    "use strict";
    var t = e.i(391398),
        r = e.i(722023);
    e.s(["default", 0, e => (0, t.jsx)("div", {
        className: r.default[`spacing-${e.spacing}`]
    })])
}, 671599, (e, t, r) => {
    t.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }
}, 605570, e => {
    "use strict";
    e.i(350461);
    var t = e.i(191788),
        r = e.i(391398);

    function n(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) e[n] = r[n]
        }
        return e
    }
    var o = function e(t, r) {
        function o(e, o, i) {
            if ("u" > typeof document) {
                "number" == typeof(i = n({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var a = "";
                for (var l in i) i[l] && (a += "; " + l, !0 !== i[l] && (a += "=" + i[l].split(";")[0]));
                return document.cookie = e + "=" + t.write(o, e) + a
            }
        }
        return Object.create({
            set: o,
            get: function(e) {
                if ("u" > typeof document && (!arguments.length || e)) {
                    for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < r.length; o++) {
                        var i = r[o].split("="),
                            a = i.slice(1).join("=");
                        try {
                            var l = decodeURIComponent(i[0]);
                            if (n[l] = t.read(a, l), e === l) break
                        } catch (e) {}
                    }
                    return e ? n[e] : n
                }
            },
            remove: function(e, t) {
                o(e, "", n({}, t, {
                    expires: -1
                }))
            },
            withAttributes: function(t) {
                return e(this.converter, n({}, this.attributes, t))
            },
            withConverter: function(t) {
                return e(n({}, this.converter, t), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(r)
            },
            converter: {
                value: Object.freeze(t)
            }
        })
    }({
        read: function(e) {
            return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    });
    e.i(671599), Object.create(null);
    (0, t.createContext)();
    let i = "groups",
        a = {
            essential: !0,
            performance: !1,
            functionality: !1,
            targeting: !1
        },
        l = () => {
            if ("u" < typeof window) return a;
            let e = o.get("OptanonConsent");
            if (!e) return a;
            let t = new URLSearchParams(e);
            if (!t.get(i)) return a;
            let r = decodeURIComponent(t.get(i) || "");
            return r ? {
                essential: !0,
                performance: r.includes("C0002:1"),
                functionality: r.includes("C0003:1"),
                targeting: r.includes("C0004:1")
            } : a
        },
        s = (0, t.createContext)({
            consent: l()
        }),
        c = e => {
            let {
                children: n,
                logCdfEvent: o
            } = e, [i, a] = (0, t.useState)(l());
            return (0, t.useEffect)(() => {
                if ("u" < typeof window) return;
                let e = () => {
                    let e = l();
                    (i.essential !== e.essential || i.performance !== e.performance || i.functionality !== e.functionality || i.targeting !== e.targeting) && (null == o || o({
                        consentGroups: `C0001:${e.essential?"1":"0"},C0002:${e.performance?"1":"0"},C0003:${e.functionality?"1":"0"},C0004:${e.targeting?"1":"0"}`
                    }), a(e))
                };
                return window.addEventListener("OneTrustGroupsUpdated", e), () => {
                    window.removeEventListener("OneTrustGroupsUpdated", e)
                }
            }, [i, o]), (0, r.jsx)(s.Provider, {
                value: {
                    consent: i
                },
                children: n
            })
        };
    e.s(["OneTrustConsentContext", () => s, "OneTrustConsentProvider", () => c], 605570)
}]);
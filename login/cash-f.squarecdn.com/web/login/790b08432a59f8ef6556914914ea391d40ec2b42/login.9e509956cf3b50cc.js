"use strict";
(self.webpackChunklogin = self.webpackChunklogin || []).push([
    [966], {
        5952: (e, t, n) => {
            n.r(t), n.d(t, {
                LOGIN_TRACKING_NAME: () => Ae,
                Login: () => Ee,
                getCategory: () => Ie,
                getInvestFileKey: () => Te,
                goTo: () => Ye
            });
            n(93831), n(45993), n(25152), n(66952), n(28344), n(97643), n(6190), n(257);
            var o = n(14041),
                r = n(83659),
                i = n(43971),
                a = n(69926),
                l = n(65374),
                s = n(83182),
                c = n(41526);
            const d = () => {
                const e = (0, c.u)("cash-web-one-trust-banner-visibility");
                return Boolean(e && !0)
            };
            n(98304);
            var u = n(66154),
                p = n(82309),
                h = n(76784),
                g = n(68204),
                m = n(47432),
                f = n(69453),
                b = n(83663),
                w = n(83637);

            function k(e) {
                const t = (0, c.u)("cash-frontend-tax-upgrade");
                return Boolean(t && ((0, g.Az)(e) || (0, g.CR)()))
            }
            var v = n(28827),
                y = n(74427),
                x = n(4255),
                A = n(33615),
                I = n(51143),
                T = n(54380);
            const Y = (0, v.A)("div", {
                    target: "e18dmsrz1"
                })({
                    name: "i330bg",
                    styles: "display:flex;flex-direction:column;width:100%;align-items:center;justify-content:center;padding:8rem 0"
                }),
                C = (0, v.A)(y.S, {
                    target: "e18dmsrz0"
                })({
                    name: "1rjcsgu",
                    styles: "animation-duration:1s;animation-name:slidein;@keyframes slidein{from{width:100%;}to{width:100%;}}"
                });

            function E({
                onEndFlow: e
            }) {
                const {
                    t
                } = (0, u.Bd)();
                return (0, T.FD)(Y, {
                    children: [(0, T.Y)(x.G, {
                        children: (0, T.Y)(C, {
                            "data-testid": "success-icon",
                            size: 32,
                            onAnimationEnd: () => {
                                null == e || e()
                            }
                        })
                    }), (0, T.Y)(A.A, {
                        size: "xxl"
                    }), (0, T.Y)(I.A, {
                        typography: "header",
                        color: "textStandard",
                        as: "h2",
                        children: t("Welcome to Cash App", {
                            context: "success message before being redirected to another page"
                        })
                    })]
                })
            }
            var _ = n(89008),
                D = n(47977);
            const S = () => {
                const {
                    t: e
                } = (0, u.Bd)();
                return (0, T.Y)("button", {
                    onClick: e => {
                        var t;
                        e.preventDefault(), null == (t = window) || null == (t = t.OneTrust) || null == t.ToggleInfoDisplay || t.ToggleInfoDisplay()
                    },
                    children: e("Your Privacy Choices", {
                        context: "Cookie preferences link label"
                    })
                })
            };
            var N = n(35740),
                L = n(9604);
            const F = () => "production" !== (0, L.vQ)() ? "https://taxes.cashstaging.app" : "https://taxes.cash.app",
                B = () => {
                    const e = "production" !== (0, L.vQ)() ? "https://cashtaxorg--litterbox.sandbox.my.site.com/" : "https://taxeshelp.cash.app/";
                    try {
                        if (window.taxesHelpUrl && "https:" === new URL(window.taxesHelpUrl).protocol) return window.taxesHelpUrl
                    } catch {
                        return e
                    }
                    return e
                },
                U = () => {
                    const {
                        t: e
                    } = (0, u.Bd)();
                    return (0, T.FD)(T.FK, {
                        children: [(0, T.Y)("a", {
                            href: B(),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e("Support", {
                                context: "External link to Cash App Taxes support"
                            })
                        }), (0, T.Y)("a", {
                            href: `${F()}/pages/terms-of-service`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e("Cash App Taxes Legal", {
                                context: "External link to Cash App Taxes terms of service"
                            })
                        }), (0, T.Y)("a", {
                            href: `${F()}/pages/privacy-policy`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e("Privacy Notice", {
                                context: "External link to Cash App Taxes privacy policy"
                            })
                        })]
                    })
                };
            var R = n(37666),
                P = n(10575);
            const O = ({
                    children: e,
                    link: t,
                    ariaLabel: n
                }) => (0, T.Y)(R.A, {
                    href: t,
                    target: "_blank",
                    rel: "noreferrer",
                    ariaLabel: n,
                    typography: "disclaimerLink",
                    children: e
                }),
                G = ({
                    region: e = "US"
                }) => {
                    const {
                        t
                    } = (0, u.Bd)(), {
                        links: {
                            disclosures: n
                        },
                        showDisclosuresOnLogin: o
                    } = P.z[e];
                    return o ? (0, T.Y)(I.A, {
                        typography: "disclaimer",
                        color: "textSubtle",
                        children: (0, T.Y)(u.x6, {
                            i18nKey: "Banking services provided by Cash App\u2019s bank partners. Debit cards issued by Sutton Bank. Brokerage services by Cash App Investing LLC, member FINRA, subsidiary of Block, Inc formerly known as Square, Inc. Bitcoin services by Block, Inc. Cash App Investing does not trade bitcoin and Block, Inc. is not a member of FINRA or SIPC. Tax filing services by Cash App Taxes, Inc. <Disclosures>Disclosures</Disclosures>",
                            context: "Footer text. Links to terms of service, e-sign consent, and privacy policy.",
                            components: {
                                Disclosures: (0, T.Y)(O, {
                                    ariaLabel: t("URL link to disclosures", {
                                        context: "Disclosures link"
                                    }),
                                    link: n
                                }, n)
                            }
                        })
                    }) : null
                };
            const $ = (0, v.A)("footer", {
                    target: "e1dt9x5a2"
                })({
                    name: "1j5fbs0",
                    styles: "margin-top:auto;min-height:5rem"
                }),
                j = (0, v.A)(i.A, {
                    target: "e1dt9x5a1"
                })("margin:", a.A.l, " auto;margin-top:0;max-width:", ({
                    theme: e
                }) => e.maxWidths.standalonePage, ";padding:0 ", a.A.l, ";text-align:left;", e => e.theme.breakpoints.tablet, "{text-align:center;}"),
                q = (0, v.A)("div", {
                    target: "e1dt9x5a0"
                })("display:grid;row-gap:", a.A.m, ";column-gap:", a.A.l, ";justify-content:flex-start;", e => e.theme.breakpoints.tablet, "{display:flex;justify-content:center;}a,button{", e => e.theme.typography.disclaimer, ";color:", ({
                    theme: e
                }) => e.arcadeColors.semantic.textSubtle, ";text-decoration:none;:hover{text-decoration:underline;}}button{background:none;border:none;cursor:pointer;padding:0;width:fit-content;}"),
                z = ({
                    isTaxFlow: e
                }) => {
                    var t;
                    const {
                        active: n
                    } = (0, D.$)(), o = (0, N.BX)(), r = "alias_blocker" === (null == n || null == (t = n.blockerData) ? void 0 : t.type), i = d();
                    return (0, T.Y)($, {
                        children: (0, T.FD)(j, {
                            space: a.A.m,
                            children: [(0, T.FD)(q, {
                                children: [e && (0, T.Y)(U, {}), i ? (0, T.Y)(S, {}) : null]
                            }), r && !e && (0, T.Y)(G, {
                                region: o || "US"
                            })]
                        })
                    })
                },
                K = (0, v.A)("div", {
                    target: "eknxyku3"
                })("background-color:", ({
                    theme: e
                }) => e.colors.background, ";", r.A.tablet, "{background-color:", ({
                    theme: e
                }) => e.colors.loginBackground, ";}"),
                M = (0, v.A)("div", {
                    target: "eknxyku2"
                })("min-height:100vh;display:flex;flex-direction:column;padding-bottom:", ({
                    theme: e
                }) => e.spacing.m, ";max-width:", _.qE, ";margin-right:auto;margin-left:auto;"),
                W = (0, v.A)("div", {
                    target: "eknxyku1"
                })("width:100%;", r.A.tablet, "{max-width:31rem;}"),
                J = (0, v.A)("div", {
                    target: "eknxyku0"
                })("display:flex;justify-content:center;margin:", ({
                    theme: {
                        spacing: e
                    }
                }) => `${e.default} ${e.l}`, ";"),
                H = o.forwardRef(({
                    children: e
                }, t) => {
                    const {
                        active: n
                    } = (0, D.$)(), o = k(null == n ? void 0 : n.clientScenario);
                    return (0, T.Y)(K, {
                        children: (0, T.FD)(M, {
                            children: [(0, T.Y)("div", {
                                children: (0, T.Y)("div", {
                                    ref: t,
                                    children: (0, T.Y)(J, {
                                        children: (0, T.Y)(W, {
                                            children: e
                                        })
                                    })
                                })
                            }), (0, T.Y)(z, {
                                isTaxFlow: o
                            })]
                        })
                    })
                });
            var X = n(81170),
                V = n(20018);
            const Q = ({
                outageBannerIncident: e
            }) => {
                const {
                    t
                } = (0, u.Bd)(), {
                    severityLevel: n,
                    details: o
                } = e;
                if (!n || !o) return null;
                const r = t("Check status", {
                    context: "banner link label"
                });
                return (0, T.Y)(X.A, {
                    variant: "error",
                    title: o,
                    actionButton: (0, T.Y)(V.A, {
                        "aria-label": r,
                        href: "https://status.cash.app/",
                        isDestructive: !0,
                        prominence: "prominent",
                        size: "compact",
                        target: "_blank",
                        children: r
                    })
                })
            };
            n(30935);
            const Z = e => "string" == typeof e ? e : `${e}px`,
                ee = ({
                    oneTrustId: e = "0196632b-47f4-7a2f-9807-8c6c20fb9d4d",
                    isProduction: t = !1,
                    margin: n,
                    hidden: o = !1
                }) => {
                    var r, i, a, l;
                    e = ((e, t) => e + (window.location.hostname.includes("cash.app") || t ? "" : "-test"))(e, t);
                    const s = document.querySelector(`script[data-domain-script="${e}"]`) || document.querySelector('script[src="https://cdn.cookielaw.org/scripttemplates/*/otBannerSdk.js"]');
                    if ("undefined" == typeof window || s) return null;
                    var c;
                    (null != n && null != (r = n.bottom) && r.mobile && document.documentElement.style.setProperty("--one-trust-banner-bottom-mobile", Z(n.bottom.mobile)), null != n && null != (i = n.bottom) && i.desktop && document.documentElement.style.setProperty("--one-trust-banner-bottom-desktop", Z(n.bottom.desktop)), null != n && null != (a = n.right) && a.mobile && document.documentElement.style.setProperty("--one-trust-banner-right-padding-mobile", Z(n.right.mobile)), null != n && null != (l = n.right) && l.desktop && document.documentElement.style.setProperty("--one-trust-banner-right-padding-desktop", Z(n.right.desktop)), o) && (null == (c = window) || null == (c = c.OneTrust) || null == c.Close || c.Close());
                    const d = document.createElement("script");
                    return d.src = `https://cdn.cookielaw.org/consent/${e}/otSDKStub.js`, d.type = "text/javascript", d.setAttribute("data-domain-script", e), d.setAttribute("data-language", "en"), document.head.appendChild(d), null
                };
            var te = n(57712),
                ne = n(83568),
                oe = n(32161);
            n(66264);
            const re = new Proxy({}, {
                    get: (e, t) => {
                        throw new Error(`Tried to access "${String(t)}" outside of react context`)
                    }
                }),
                ie = (0, o.createContext)(re),
                ae = ({
                    children: e
                }) => {
                    const [t, n] = (0, o.useState)({});
                    return (0, T.Y)(ie.Provider, {
                        value: {
                            attributes: t,
                            setAttribute: (e, t) => {
                                n(n => ({ ...n,
                                    [e]: t
                                }))
                            }
                        },
                        children: e
                    })
                };
            var le = n(40736),
                se = n(89450),
                ce = n(58510);
            const de = ["SIGN_UP", "LOGIN"],
                ue = ["SIGN_UP", "LOGIN", "UNKNOWN_SIGN_IN_TYPE"],
                pe = ({
                    children: e
                }) => {
                    const {
                        setAttribute: t
                    } = (0, o.useContext)(ie), n = (0, oe.Cm)(), r = (0, b.g)(), i = (0, o.useCallback)(async e => {
                        const o = null == e ? void 0 : e.sign_in_type;
                        if (null != o)
                            if (i = o, ue.includes(i)) {
                                if (t("signInType", o), (e => de.includes(e))(o)) {
                                    await n((0, ce.pm_)({
                                        signInType: o
                                    }));
                                    const e = "SIGN_UP" === o ? "sign-up" : "login";
                                    r.setVariant("login", e)
                                }
                            } else le.A.error(new Error(`Invalid sign_in_type received: ${o}.`));
                        var i;
                        return e
                    }, [t, n, r]), a = (0, o.useCallback)(e => [...e, i], [i]);
                    return (0, T.Y)(se.oV, {
                        name: "verifyAlias",
                        response: a,
                        children: e
                    })
                };
            var he = n(80900),
                ge = n(27128),
                me = n(37719),
                fe = n(86896),
                be = n(6651),
                we = n(16352),
                ke = n(39535);
            var ve = n(28380);
            const ye = (0, v.A)("a", {
                    target: "enk5q0l0"
                })("cursor:pointer;height:", e => e.theme.pxToRem(40), ";text-decoration:none;width:", e => e.theme.pxToRem(40), ";-webkit-tap-highlight-color:transparent;"),
                xe = ({
                    showTaxesLogo: e = !1
                }) => (0, T.Y)(ye, {
                    "aria-label": "Link to home page",
                    href: e ? "/taxes" : "/",
                    children: (0, T.Y)(ve.A, {
                        variant: e ? "taxes" : "default",
                        altText: "Cash App",
                        height: 40,
                        width: 40
                    })
                }),
                Ae = "Login",
                Ie = () => (0, l.P)("category"),
                Te = () => (0, l.P)("invest_file_key"),
                Ye = e => {
                    window.location.assign(e.toString())
                },
                Ce = {
                    trackingFlowName: "login",
                    clientScenario: p.Y.ONBOARDING,
                    blockerDescriptors: [{
                        blocker: {
                            alias_blocker: {}
                        }
                    }],
                    queriesToInvalidate: []
                },
                Ee = () => {
                    var e, t, n;
                    const l = !window.csrfToken ? Ce : void 0,
                        v = (0, b.g)(),
                        y = (0, ge.q)({
                            initialFlow: l,
                            onCancelFlow() {
                                v.completeJourney(w.I.LOGIN, te.Ht.JOURNEY_OUTCOME_USER_CANCELED)
                            },
                            onCompleteFlow() {
                                v.completeJourney(w.I.LOGIN, te.Ht.JOURNEY_OUTCOME_SUCCEEDED)
                            },
                            onBlockerView: () => window.scrollTo && window.scrollTo({
                                left: 0,
                                top: 0
                            })
                        }),
                        x = (0, fe.xs)({
                            target: "outlet:login"
                        });
                    (0, we.E)(() => {
                        null != l && v.startJourney(w.I.LOGIN)
                    }), (0, he.tm)(!0), (0, he.R_)();
                    const A = (0, be.A)(r.A.tablet),
                        I = (0, s.L)(),
                        Y = (0, c.u)("cash-web-incidents"),
                        C = null == Y || null == (e = Y.incidents) ? void 0 : e[0],
                        D = (0, oe.Cm)();
                    o.useEffect(() => {
                        D((0, ce._fA)({
                            pageName: Ae
                        }))
                    }, [D]), (0, oe.Bw)();
                    const S = function(e) {
                            const t = (0, oe.Cm)();
                            return () => {
                                t((0, ce.Na_)({
                                    flowToken: e
                                }))
                            }
                        }(null == (t = y.active) ? void 0 : t.flowToken),
                        N = o.useRef(null),
                        L = d(),
                        F = () => {
                            S();
                            const e = (0, ke.OF)(),
                                t = Te(),
                                n = (0, ke.kY)();
                            if (t) {
                                const e = new URL(`/invest/statements/redirect?file_key=${t}`, window.location.href);
                                Ye(e)
                            } else if (U);
                            else if (null != window.context && "" !== window.context && n) Ye(new URL(n));
                            else if (e)(e => {
                                const t = e.match(/^\//) ? e : `/${e}`,
                                    n = new URL(t, window.location.href),
                                    o = Ie();
                                "support" === e && o && n.searchParams.append("category", o), Ye(n)
                            })(e);
                            else {
                                const e = new URL("/account", window.location.href);
                                Ye(e)
                            }
                        },
                        B = !y.isInProgress,
                        {
                            isTaxFlow: U
                        } = function(e) {
                            var t;
                            const {
                                t: n
                            } = (0, u.Bd)(), r = k(null == (t = e.active) ? void 0 : t.clientScenario), i = (0, o.useRef)(!1), a = (0, b.g)(), l = r && null != window.csrfToken && !e.isInProgress, s = (0, f.ri)(), c = (0, o.useMemo)(() => ({
                                trackingFlowName: "tax upgrade failed",
                                clientScenario: p.Y.INITIATE_TAX_UPGRADE,
                                blockerDescriptors: [{
                                    blocker: {
                                        form: (0, m.v)(n)
                                    }
                                }],
                                queriesToInvalidate: []
                            }), [n]), d = (0, o.useCallback)(async () => {
                                try {
                                    a.startJourney(w.I.TAXES_UPGRADE);
                                    const t = (await (0, g.dM)()).replace(/.+\/f\//, ""),
                                        n = {
                                            trackingFlowName: "tax upgrade",
                                            clientScenario: p.Y.INITIATE_TAX_UPGRADE,
                                            flow: {
                                                initiationData: t
                                            },
                                            queriesToInvalidate: []
                                        };
                                    e.isInProgress ? e.updateWithFlow(n) : e.startWithFlow(n)
                                } catch {
                                    e.startWithBlockerDescriptors(c)
                                }
                            }, [c, e, a]);
                            return (0, o.useEffect)(() => {
                                l && !i.current && (i.current = !0, d())
                            }, [l, d]), {
                                isTaxFlow: r,
                                onStatus: async e => {
                                    e.action === h.Su.INSTANT_REDIRECT && r && await s("instant_redirect")
                                }
                            }
                        }(y);
                    let R = (0, T.Y)(E, {
                        onEndFlow: F
                    });
                    return (U || I) && (R = (0, T.Y)(ne.nC, {
                        onEndFlow: F
                    })), (0, T.Y)(me.g, {
                        flow: y,
                        children: (0, T.Y)(ae, {
                            children: (0, T.Y)(pe, {
                                children: (0, T.FD)(H, {
                                    ref: N,
                                    children: [(0, T.Y)(_.Uz, {
                                        children: (0, T.FD)(i.A, {
                                            space: a.A.xxl,
                                            children: ["MEDIUM" === (null == C ? void 0 : C.severityLevel) && (0, T.Y)(Q, {
                                                outageBannerIncident: C
                                            }), B ? R : null != x ? x : (0, T.FD)(T.FK, {
                                                children: [(0, T.Y)(xe, {
                                                    showTaxesLogo: U || I
                                                }), (0, T.Y)(ne.oI, {})]
                                            }), "LOW" === (null == C ? void 0 : C.severityLevel) && (0, T.Y)(Q, {
                                                outageBannerIncident: C
                                            })]
                                        })
                                    }), L ? (0, T.Y)(ee, {
                                        margin: {
                                            right: {
                                                mobile: a.A.headerSpacing
                                            }
                                        },
                                        hidden: "alias_blocker" !== (null == (n = y.active) || null == (n = n.blockerData) ? void 0 : n.type) && !A
                                    }) : null]
                                })
                            })
                        })
                    })
                }
        }
    }
]);
//# sourceMappingURL=login.9e509956cf3b50cc.js.map
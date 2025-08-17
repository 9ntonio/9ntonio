"use strict";
(self.webpackChunkantonio_almena_portfolio = self.webpackChunkantonio_almena_portfolio || []).push([
	[7],
	{
		215: function (e, t, n) {
			n(4978),
				n(6433),
				(t.__esModule = !0),
				(t.getForwards = function (e) {
					return null == e
						? void 0
						: e.flatMap(function (e) {
								return (null == e ? void 0 : e.forward) || [];
							});
				});
		},
		2537: function (e, t, n) {
			(t.__esModule = !0),
				(t.injectPartytownSnippet = function (e) {
					if (!e.length) return;
					var t = document.querySelector("script[data-partytown]"),
						n = document.querySelector('iframe[src*="~partytown/partytown-sandbox-sw"]');
					t && t.remove();
					n && n.remove();
					var a = (0, o.getForwards)(e),
						i = document.createElement("script");
					(i.dataset.partytown = ""), (i.innerHTML = (0, r.partytownSnippet)({ forward: a })), document.head.appendChild(i);
				});
			var r = n(54),
				o = n(215);
		},
		6620: function (e, t, n) {
			var r;
			n.r(t),
				n.d(t, {
					BaseContext: function () {
						return g;
					},
					Link: function () {
						return G;
					},
					Location: function () {
						return ee;
					},
					LocationContext: function () {
						return E;
					},
					LocationProvider: function () {
						return Z;
					},
					Match: function () {
						return ne;
					},
					Redirect: function () {
						return _;
					},
					Router: function () {
						return ue;
					},
					ServerLocation: function () {
						return te;
					},
					createHistory: function () {
						return h;
					},
					createMemorySource: function () {
						return f;
					},
					globalHistory: function () {
						return m;
					},
					insertParams: function () {
						return O;
					},
					isRedirect: function () {
						return R;
					},
					match: function () {
						return S;
					},
					navigate: function () {
						return y;
					},
					pick: function () {
						return T;
					},
					redirectTo: function () {
						return k;
					},
					resolve: function () {
						return L;
					},
					shallowCompare: function () {
						return V;
					},
					startsWith: function () {
						return P;
					},
					useBaseContext: function () {
						return b;
					},
					useLocation: function () {
						return pe;
					},
					useLocationContext: function () {
						return w;
					},
					useMatch: function () {
						return de;
					},
					useNavigate: function () {
						return he;
					},
					useParams: function () {
						return fe;
					},
					validateRedirect: function () {
						return $;
					},
				});
			var o = n(3746),
				a = n(5983),
				i = n.n(a),
				s = n(6180),
				c = n.n(s);
			function u() {
				return (
					(u = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					u.apply(this, arguments)
				);
			}
			function l(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = {},
					a = Object.keys(e);
				for (r = 0; r < a.length; r++) t.indexOf((n = a[r])) >= 0 || (o[n] = e[n]);
				return o;
			}
			const p = (e) => {
					const { search: t, hash: n, href: r, origin: o, protocol: a, host: i, hostname: s, port: c } = e.location;
					let { pathname: u } = e.location;
					return (
						!u && r && d && (u = new URL(r).pathname),
						{
							pathname: encodeURI(decodeURI(u)),
							search: t,
							hash: n,
							href: r,
							origin: o,
							protocol: a,
							host: i,
							hostname: s,
							port: c,
							state: e.history.state,
							key: (e.history.state && e.history.state.key) || "initial",
						}
					);
				},
				h = (e, t) => {
					let n = [],
						r = p(e),
						o = !1,
						a = () => {};
					return {
						get location() {
							return r;
						},
						get transitioning() {
							return o;
						},
						_onTransitionComplete() {
							(o = !1), a();
						},
						listen(t) {
							n.push(t);
							const o = () => {
								(r = p(e)), t({ location: r, action: "POP" });
							};
							return (
								e.addEventListener("popstate", o),
								() => {
									e.removeEventListener("popstate", o), (n = n.filter((e) => e !== t));
								}
							);
						},
						navigate(t, { state: i, replace: s = !1 } = {}) {
							if ("number" == typeof t) e.history.go(t);
							else {
								i = u({}, i, { key: Date.now() + "" });
								try {
									o || s ? e.history.replaceState(i, null, t) : e.history.pushState(i, null, t);
								} catch (n) {
									e.location[s ? "replace" : "assign"](t);
								}
							}
							(r = p(e)), (o = !0);
							const c = new Promise((e) => (a = e));
							return n.forEach((e) => e({ location: r, action: "PUSH" })), c;
						},
					};
				},
				f = (e = "/") => {
					const t = e.indexOf("?"),
						n = { pathname: t > -1 ? e.substr(0, t) : e, search: t > -1 ? e.substr(t) : "" };
					let r = 0;
					const o = [n],
						a = [null];
					return {
						get location() {
							return o[r];
						},
						addEventListener(e, t) {},
						removeEventListener(e, t) {},
						history: {
							get entries() {
								return o;
							},
							get index() {
								return r;
							},
							get state() {
								return a[r];
							},
							pushState(e, t, n) {
								const [i, s = ""] = n.split("?");
								r++, o.push({ pathname: i, search: s.length ? `?${s}` : s }), a.push(e);
							},
							replaceState(e, t, n) {
								const [i, s = ""] = n.split("?");
								(o[r] = { pathname: i, search: s }), (a[r] = e);
							},
							go(e) {
								const t = r + e;
								t < 0 || t > a.length - 1 || (r = t);
							},
						},
					};
				},
				d = !("undefined" == typeof window || !window.document || !window.document.createElement),
				m = h(d ? window : f()),
				{ navigate: y } = m;
			function v(e, t) {
				return o.createServerContext
					? ((e, t = null) => (
							globalThis.__SERVER_CONTEXT || (globalThis.__SERVER_CONTEXT = {}),
							globalThis.__SERVER_CONTEXT[e] || (globalThis.__SERVER_CONTEXT[e] = o.createServerContext(e, t)),
							globalThis.__SERVER_CONTEXT[e]
						))(e, t)
					: o.createContext(t);
			}
			const g = v("Base", { baseuri: "/", basepath: "/" }),
				E = v("Location"),
				b = () => o.useContext(g),
				w = () => o.useContext(E);
			function C(e) {
				this.uri = e;
			}
			const R = (e) => e instanceof C,
				k = (e) => {
					throw new C(e);
				};
			function x(e) {
				const { to: t, replace: n = !0, state: r, noThrow: a, baseuri: i } = e;
				o.useEffect(() => {
					Promise.resolve().then(() => {
						const o = L(t, i);
						y(O(o, e), { replace: n, state: r });
					});
				}, []);
				const s = L(t, i);
				return a || k(O(s, e)), null;
			}
			const _ = (e) => {
				const t = w(),
					{ baseuri: n } = b();
				return o.createElement(x, u({}, t, { baseuri: n }, e));
			};
			_.propTypes = { from: i().string, to: i().string.isRequired };
			const P = (e, t) => e.substr(0, t.length) === t,
				T = (e, t) => {
					let n, r;
					const [o] = t.split("?"),
						a = q(o),
						i = "" === a[0],
						s = I(e);
					for (let u = 0, l = s.length; u < l; u++) {
						let e = !1;
						const o = s[u].route;
						if (o.default) {
							r = { route: o, params: {}, uri: t };
							continue;
						}
						const l = q(o.path),
							p = {},
							h = Math.max(a.length, l.length);
						let f = 0;
						for (; f < h; f++) {
							const t = l[f],
								n = a[f];
							if (N(t)) {
								p[t.slice(1) || "*"] = a.slice(f).map(decodeURIComponent).join("/");
								break;
							}
							if (void 0 === n) {
								e = !0;
								break;
							}
							const r = j.exec(t);
							if (r && !i) {
								const e = -1 === D.indexOf(r[1]);
								c()(e, `<Router> dynamic segment "${r[1]}" is a reserved name. Please use a different name in path "${o.path}".`);
								const t = decodeURIComponent(n);
								p[r[1]] = t;
							} else if (t !== n) {
								e = !0;
								break;
							}
						}
						if (!e) {
							n = { route: o, params: p, uri: "/" + a.slice(0, f).join("/") };
							break;
						}
					}
					return n || r || null;
				},
				S = (e, t) => T([{ path: e }], t),
				L = (e, t) => {
					if (P(e, "/")) return e;
					const [n, r] = e.split("?"),
						[o] = t.split("?"),
						a = q(n),
						i = q(o);
					if ("" === a[0]) return B(o, r);
					if (!P(a[0], ".")) {
						const e = i.concat(a).join("/");
						return B(("/" === o ? "" : "/") + e, r);
					}
					const s = i.concat(a),
						c = [];
					for (let u = 0, l = s.length; u < l; u++) {
						const e = s[u];
						".." === e ? c.pop() : "." !== e && c.push(e);
					}
					return B("/" + c.join("/"), r);
				},
				O = (e, t) => {
					const [n, r = ""] = e.split("?");
					let o =
						"/" +
						q(n)
							.map((e) => {
								const n = j.exec(e);
								return n ? t[n[1]] : e;
							})
							.join("/");
					const { location: { search: a = "" } = {} } = t,
						i = a.split("?")[1] || "";
					return (o = B(o, r, i)), o;
				},
				$ = (e, t) => {
					const n = (e) => M(e);
					return q(e).filter(n).sort().join("/") === q(t).filter(n).sort().join("/");
				},
				j = /^:(.+)/,
				M = (e) => j.test(e),
				N = (e) => e && "*" === e[0],
				U = (e, t) => ({ route: e, score: e.default ? 0 : q(e.path).reduce((e, t) => ((e += 4), ((e) => "" === e)(t) ? (e += 1) : M(t) ? (e += 2) : N(t) ? (e -= 5) : (e += 3), e), 0), index: t }),
				I = (e) => e.map(U).sort((e, t) => (e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index)),
				q = (e) => e.replace(/(^\/+|\/+$)/g, "").split("/"),
				B = (e, ...t) => e + ((t = t.filter((e) => e && e.length > 0)) && t.length > 0 ? `?${t.join("&")}` : ""),
				D = ["uri", "path"],
				V = (e, t) => {
					const n = Object.keys(e);
					return n.length === Object.keys(t).length && n.every((n) => t.hasOwnProperty(n) && e[n] === t[n]);
				},
				X = (e) => e.replace(/(^\/+|\/+$)/g, ""),
				F = (e) => (t) => {
					if (!t) return null;
					if (t.type === o.Fragment && t.props.children) return o.Children.map(t.props.children, F(e));
					if (
						(c()(
							t.props.path || t.props.default || t.type === _,
							`<Router>: Children of <Router> must have a \`path\` or \`default\` prop, or be a \`<Redirect>\`. None found on element type \`${t.type}\``,
						),
						c()(!!(t.type !== _ || (t.props.from && t.props.to)), `<Redirect from="${t.props.from}" to="${t.props.to}"/> requires both "from" and "to" props when inside a <Router>.`),
						c()(
							!(t.type === _ && !$(t.props.from, t.props.to)),
							`<Redirect from="${t.props.from} to="${t.props.to}"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.`,
						),
						t.props.default)
					)
						return { value: t, default: !0 };
					const n = t.type === _ ? t.props.from : t.props.path,
						r = "/" === n ? e : `${X(e)}/${X(n)}`;
					return { value: t, default: t.props.default, path: t.props.children ? `${X(r)}/*` : r };
				},
				H = ["innerRef"],
				K = ["to", "state", "replace", "getProps"],
				W = ["key"];
			let { forwardRef: A } = r || (r = n.t(o, 2));
			void 0 === A && (A = (e) => e);
			const z = () => {},
				G = A((e, t) => {
					let { innerRef: n } = e,
						r = l(e, H);
					const { baseuri: a } = b(),
						{ location: i } = w(),
						{ to: s, state: c, replace: p, getProps: h = z } = r,
						f = l(r, K),
						d = L(s, a),
						m = encodeURI(d),
						v = i.pathname === m,
						g = P(i.pathname, m);
					return o.createElement(
						"a",
						u({ ref: t || n, "aria-current": v ? "page" : void 0 }, f, h({ isCurrent: v, isPartiallyCurrent: g, href: d, location: i }), {
							href: d,
							onClick: (e) => {
								if ((f.onClick && f.onClick(e), ((e) => !e.defaultPrevented && 0 === e.button && !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey))(e))) {
									e.preventDefault();
									let t = p;
									if ("boolean" != typeof p && v) {
										const e = l(u({}, i.state), W);
										t = V(u({}, c), e);
									}
									y(d, { state: c, replace: t });
								}
							},
						}),
					);
				});
			(G.displayName = "Link"), (G.propTypes = { to: i().string.isRequired });
			class J extends o.Component {
				constructor(...e) {
					super(...e), (this.displayName = "ReactUseErrorBoundary");
				}
				componentDidCatch(...e) {
					this.setState({}), this.props.onError(...e);
				}
				render() {
					return this.props.children;
				}
			}
			const Q = o.createContext({ componentDidCatch: { current: void 0 }, error: void 0, setError: () => !1 });
			function Y({ children: e }) {
				const [t, n] = o.useState(),
					r = o.useRef(),
					a = o.useMemo(() => ({ componentDidCatch: r, error: t, setError: n }), [t]);
				return o.createElement(
					Q.Provider,
					{ value: a },
					o.createElement(
						J,
						{
							error: t,
							onError: (e, t) => {
								n(e), null == r.current || r.current(e, t);
							},
						},
						e,
					),
				);
			}
			Y.displayName = "ReactUseErrorBoundaryContext";
			const Z = (function (e) {
					var t, n;
					function r(t) {
						return o.createElement(Y, null, o.createElement(e, u({ key: "WrappedComponent" }, t)));
					}
					return (r.displayName = `WithErrorBoundary(${null != (t = null != (n = e.displayName) ? n : e.name) ? t : "Component"})`), r;
				})(({ history: e = m, children: t }) => {
					const { location: n } = e,
						[r, a] = o.useState({ location: n }),
						[i] = (function () {
							const e = o.useContext(Q);
							e.componentDidCatch.current = void 0;
							const t = o.useCallback(() => {
								e.setError(void 0);
							}, []);
							return [e.error, t];
						})();
					if (
						(o.useEffect(() => {
							e._onTransitionComplete();
						}, [r.location]),
						o.useEffect(() => {
							let t = !1;
							const n = e.listen(({ location: e }) => {
								Promise.resolve().then(() => {
									requestAnimationFrame(() => {
										t || a({ location: e });
									});
								});
							});
							return () => {
								(t = !0), n();
							};
						}, []),
						i)
					) {
						if (!R(i)) throw i;
						y(i.uri, { replace: !0 });
					}
					return o.createElement(E.Provider, { value: r }, "function" == typeof t ? t(r) : t || null);
				}),
				ee = ({ children: e }) => {
					const t = w();
					return t ? e(t) : o.createElement(Z, null, e);
				},
				te = ({ url: e, children: t }) => {
					const n = e.indexOf("?");
					let r,
						a = "";
					return n > -1 ? ((r = e.substring(0, n)), (a = e.substring(n))) : (r = e), o.createElement(E.Provider, { value: { location: { pathname: r, search: a, hash: "" } } }, t);
				},
				ne = ({ path: e, children: t }) => {
					const { baseuri: n } = b(),
						{ location: r } = w(),
						o = L(e, n),
						a = S(o, r.pathname);
					return t({ location: r, match: a ? u({}, a.params, { uri: a.uri, path: e }) : null });
				},
				re = ["uri", "location", "component"],
				oe = ["children", "style", "component", "uri", "location"],
				ae = (e) => {
					let { uri: t, location: n, component: r } = e,
						a = l(e, re);
					return o.createElement(se, u({}, a, { component: r, uri: t, location: n }));
				};
			let ie = 0;
			const se = (e) => {
					let { children: t, style: n, component: r = "div", uri: a, location: i } = e,
						s = l(e, oe);
					const c = o.useRef(),
						p = o.useRef(!0),
						h = o.useRef(a),
						f = o.useRef(i.pathname),
						d = o.useRef(!1);
					o.useEffect(
						() => (
							ie++,
							m(),
							() => {
								ie--, 0 === ie && (p.current = !0);
							}
						),
						[],
					),
						o.useEffect(() => {
							let e = !1,
								t = !1;
							a !== h.current && ((h.current = a), (e = !0)), i.pathname !== f.current && ((f.current = i.pathname), (t = !0)), (d.current = e || (t && i.pathname === a)), d.current && m();
						}, [a, i]);
					const m = o.useCallback(() => {
						var e;
						p.current ? (p.current = !1) : ((e = c.current), d.current && e && e.focus());
					}, []);
					return o.createElement(r, u({ style: u({ outline: "none" }, n), tabIndex: "-1", ref: c }, s), t);
				},
				ce = ["location", "primary", "children", "basepath", "baseuri", "component"],
				ue = (e) => {
					const t = b(),
						n = w();
					return o.createElement(le, u({}, t, n, e));
				};
			function le(e) {
				const { location: t, primary: n = !0, children: r, basepath: a, component: i = "div" } = e,
					s = l(e, ce),
					c = o.Children.toArray(r).reduce((e, t) => {
						const n = F(a)(t);
						return e.concat(n);
					}, []),
					{ pathname: p } = t,
					h = T(c, p);
				if (h) {
					const {
							params: e,
							uri: r,
							route: c,
							route: { value: l },
						} = h,
						p = c.default ? a : c.path.replace(/\*$/, ""),
						f = u({}, e, { uri: r, location: t }),
						d = o.cloneElement(l, f, l.props.children ? o.createElement(ue, { location: t, primary: n }, l.props.children) : void 0),
						m = n ? ae : i,
						y = n ? u({ uri: r, location: t, component: i }, s) : s;
					return o.createElement(g.Provider, { value: { baseuri: r, basepath: p } }, o.createElement(m, y, d));
				}
				return null;
			}
			const pe = () => {
					const e = w();
					if (!e) throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
					return e.location;
				},
				he = () => {
					throw new Error("useNavigate is removed. Use import { navigate } from 'gatsby' instead");
				},
				fe = () => {
					const e = b();
					if (!e) throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
					const t = pe(),
						n = S(e.basepath, t.pathname);
					return n ? n.params : null;
				},
				de = (e) => {
					if (!e) throw new Error("useMatch(path: string) requires an argument of a string to match against");
					const t = b();
					if (!t) throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
					const n = pe(),
						r = L(e, t.baseuri),
						o = S(r, n.pathname);
					return o ? u({}, o.params, { uri: o.uri, path: e }) : null;
				};
		},
		7249: function (e, t, n) {
			(t.__esModule = !0), (t.onInitialClientRender = void 0);
			n(1553), n(2537);
			t.onInitialClientRender = function () {};
		},
	},
]);
//# sourceMappingURL=gatsby-a16dfdb5d46c80c1a39e.js.map

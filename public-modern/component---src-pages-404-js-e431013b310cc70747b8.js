/*! For license information please see component---src-pages-404-js-e431013b310cc70747b8.js.LICENSE.txt */
"use strict";
(self.webpackChunkantonio_almena_portfolio = self.webpackChunkantonio_almena_portfolio || []).push([
	[125],
	{
		5423: function (t, e, r) {
			r.r(e),
				r.d(e, {
					default: function () {
						return h;
					},
				});
			r(4751), r(6371), r(4559), r(3528), r(4644), r(9086), r(1612), r(7538), r(9976), r(1974), r(6200), r(1503), r(6314), r(9180), r(9991), r(9795), r(2401), r(6288), r(16), r(1677);
			var n = r(3746),
				o = r(4529),
				i = r(7219),
				a = r.p + "static/hazard-f135eac84809272715bbf16e19389dd5.webp",
				c = r(2218);
			function u(t) {
				return (
					(u =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
								}),
					u(t)
				);
			}
			function f(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function l(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? f(Object(r), !0).forEach(function (e) {
								s(t, e, r[e]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
							: f(Object(r)).forEach(function (e) {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
								});
				}
				return t;
			}
			function s(t, e, r) {
				return (
					(e = (function (t) {
						var e = (function (t, e) {
							if ("object" != u(t) || !t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || "default");
								if ("object" != u(n)) return n;
								throw new TypeError("@@toPrimitive must return a primitive value.");
							}
							return ("string" === e ? String : Number)(t);
						})(t, "string");
						return "symbol" == u(e) ? e : e + "";
					})(e)) in t
						? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
						: (t[e] = r),
					t
				);
			}
			function d(t, e) {
				return (
					(function (t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function (t, e) {
						var r = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
						if (null != r) {
							var n,
								o,
								i,
								a,
								c = [],
								u = !0,
								f = !1;
							try {
								if (((i = (r = r.call(t)).next), 0 === e)) {
									if (Object(r) !== r) return;
									u = !1;
								} else for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
							} catch (t) {
								(f = !0), (o = t);
							} finally {
								try {
									if (!u && null != r.return && ((a = r.return()), Object(a) !== a)) return;
								} finally {
									if (f) throw o;
								}
							}
							return c;
						}
					})(t, e) ||
					(function (t, e) {
						if (t) {
							if ("string" == typeof t) return m(t, e);
							var r = {}.toString.call(t).slice(8, -1);
							return (
								"Object" === r && t.constructor && (r = t.constructor.name),
								"Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? m(t, e) : void 0
							);
						}
					})(t, e) ||
					(function () {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function m(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
				return n;
			}
			var p = {
					container: {
						fontFamily: "Fredoka, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						minHeight: "100vh",
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						textAlign: "center",
						padding: "0 1rem",
						backgroundColor: "#333",
						backgroundImage: "url(".concat(a, ")"),
						backgroundSize: "cover",
						backgroundPosition: "center",
					},
					errorCode: {
						fontWeight: 700,
						color: "#fff",
						lineHeight: 0.9,
						background: "#ff0000",
						padding: "1.5rem",
						borderRadius: "1rem",
						border: "1px solid #ff0000",
						boxSizing: "border-box",
						marginBottom: "3rem",
					},
					buttonPrimary: {
						padding: "0.5rem 0.75rem",
						fontSize: "1.25rem",
						fontWeight: 600,
						backgroundColor: "#ff0000",
						color: "#fff",
						border: "none",
						borderRadius: "0.5rem",
						cursor: "pointer",
						textDecoration: "none",
						transition: "all 0.25s ease-out",
					},
					buttonPrimaryHover: { backgroundColor: "#fff", color: "#ff0000" },
				},
				h = function (t) {
					var e = t.location,
						r = d(n.useState(!1), 2),
						a = r[0],
						u = r[1],
						f = d(n.useState(!1), 2),
						s = f[0],
						m = f[1];
					return (
						n.useEffect(
							function () {
								console.log("404 error occurred at path: ".concat(e.pathname));
							},
							[e.pathname],
						),
						n.useEffect(function () {
							var t = window.matchMedia("(max-width: 575px)"),
								e = function (t) {
									return m(t.matches);
								};
							return (
								m(t.matches),
								t.addEventListener("change", e),
								function () {
									return t.removeEventListener("change", e);
								}
							);
						}, []),
						(0, n.useEffect)(function () {
							if ("undefined" != typeof document) {
								document.title = "Antonio Almena | Page Not Found";
								var t = document.querySelector('meta[name="description"]');
								t || ((t = document.createElement("meta")).setAttribute("name", "description"), document.head.appendChild(t)),
									t.setAttribute("content", "The page you're looking for doesn't exist or has been moved.");
							}
						}, []),
						(0, c.jsxs)("div", {
							style: p.container,
							children: [
								(0, c.jsx)(i.A, {}),
								(0, c.jsxs)("h1", { style: l(l({}, p.errorCode), {}, { fontSize: s ? "3rem" : "10rem" }), children: ["Don't Forget", (0, c.jsx)("br", {}), "to Dream"] }),
								(0, c.jsx)("div", {
									children: (0, c.jsx)(o.Link, {
										to: "/",
										style: l(l({}, p.buttonPrimary), a && p.buttonPrimaryHover),
										onMouseEnter: function () {
											return u(!0);
										},
										onMouseLeave: function () {
											return u(!1);
										},
										"aria-label": "Go to home page",
										children: "Home",
									}),
								}),
							],
						})
					);
				};
		},
		7219: function (t, e, r) {
			r(4751), r(6371), r(4559), r(1612), r(3726), r(7538), r(1974), r(327), r(9991), r(1814), r(6288), r(16), r(1677);
			var n = r(3746);
			function o(t) {
				return (
					(o =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
								}),
					o(t)
				);
			}
			function i() {
				i = function () {
					return e;
				};
				var t,
					e = {},
					r = Object.prototype,
					n = r.hasOwnProperty,
					a =
						Object.defineProperty ||
						function (t, e, r) {
							t[e] = r.value;
						},
					c = "function" == typeof Symbol ? Symbol : {},
					u = c.iterator || "@@iterator",
					f = c.asyncIterator || "@@asyncIterator",
					l = c.toStringTag || "@@toStringTag";
				function s(t, e, r) {
					return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
				}
				try {
					s({}, "");
				} catch (t) {
					s = function (t, e, r) {
						return (t[e] = r);
					};
				}
				function d(t, e, r, n) {
					var o = e && e.prototype instanceof b ? e : b,
						i = Object.create(o.prototype),
						c = new C(n || []);
					return a(i, "_invoke", { value: P(t, r, c) }), i;
				}
				function m(t, e, r) {
					try {
						return { type: "normal", arg: t.call(e, r) };
					} catch (t) {
						return { type: "throw", arg: t };
					}
				}
				e.wrap = d;
				var p = "suspendedStart",
					h = "suspendedYield",
					y = "executing",
					v = "completed",
					g = {};
				function b() {}
				function w() {}
				function k() {}
				var x = {};
				s(x, u, function () {
					return this;
				});
				var E = Object.getPrototypeOf,
					L = E && E(E(T([])));
				L && L !== r && n.call(L, u) && (x = L);
				var j = (k.prototype = b.prototype = Object.create(x));
				function O(t) {
					["next", "throw", "return"].forEach(function (e) {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function S(t, e) {
					function r(i, a, c, u) {
						var f = m(t[i], t, a);
						if ("throw" !== f.type) {
							var l = f.arg,
								s = l.value;
							return s && "object" == o(s) && n.call(s, "__await")
								? e.resolve(s.__await).then(
										function (t) {
											r("next", t, c, u);
										},
										function (t) {
											r("throw", t, c, u);
										},
									)
								: e.resolve(s).then(
										function (t) {
											(l.value = t), c(l);
										},
										function (t) {
											return r("throw", t, c, u);
										},
									);
						}
						u(f.arg);
					}
					var i;
					a(this, "_invoke", {
						value: function (t, n) {
							function o() {
								return new e(function (e, o) {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					var o = p;
					return function (i, a) {
						if (o === y) throw Error("Generator is already running");
						if (o === v) {
							if ("throw" === i) throw a;
							return { value: t, done: !0 };
						}
						for (n.method = i, n.arg = a; ; ) {
							var c = n.delegate;
							if (c) {
								var u = _(c, n);
								if (u) {
									if (u === g) continue;
									return u;
								}
							}
							if ("next" === n.method) n.sent = n._sent = n.arg;
							else if ("throw" === n.method) {
								if (o === p) throw ((o = v), n.arg);
								n.dispatchException(n.arg);
							} else "return" === n.method && n.abrupt("return", n.arg);
							o = y;
							var f = m(e, r, n);
							if ("normal" === f.type) {
								if (((o = n.done ? v : h), f.arg === g)) continue;
								return { value: f.arg, done: n.done };
							}
							"throw" === f.type && ((o = v), (n.method = "throw"), (n.arg = f.arg));
						}
					};
				}
				function _(e, r) {
					var n = r.method,
						o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							("throw" === n && e.iterator.return && ((r.method = "return"), (r.arg = t), _(e, r), "throw" === r.method)) ||
								("return" !== n && ((r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
							g
						);
					var i = m(o, e.iterator, r.arg);
					if ("throw" === i.type) return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g;
					var a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value), (r.next = e.nextLoc), "return" !== r.method && ((r.method = "next"), (r.arg = t)), (r.delegate = null), g)
							: a
						: ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), g);
				}
				function A(t) {
					var e = { tryLoc: t[0] };
					1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
				}
				function F(t) {
					var e = t.completion || {};
					(e.type = "normal"), delete e.arg, (t.completion = e);
				}
				function C(t) {
					(this.tryEntries = [{ tryLoc: "root" }]), t.forEach(A, this), this.reset(!0);
				}
				function T(e) {
					if (e || "" === e) {
						var r = e[u];
						if (r) return r.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var i = -1,
								a = function r() {
									for (; ++i < e.length; ) if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
									return (r.value = t), (r.done = !0), r;
								};
							return (a.next = a);
						}
					}
					throw new TypeError(o(e) + " is not iterable");
				}
				return (
					(w.prototype = k),
					a(j, "constructor", { value: k, configurable: !0 }),
					a(k, "constructor", { value: w, configurable: !0 }),
					(w.displayName = s(k, l, "GeneratorFunction")),
					(e.isGeneratorFunction = function (t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name));
					}),
					(e.mark = function (t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, k) : ((t.__proto__ = k), s(t, l, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
					}),
					(e.awrap = function (t) {
						return { __await: t };
					}),
					O(S.prototype),
					s(S.prototype, f, function () {
						return this;
					}),
					(e.AsyncIterator = S),
					(e.async = function (t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new S(d(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
								});
					}),
					O(j),
					s(j, l, "Generator"),
					s(j, u, function () {
						return this;
					}),
					s(j, "toString", function () {
						return "[object Generator]";
					}),
					(e.keys = function (t) {
						var e = Object(t),
							r = [];
						for (var n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									var n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(C.prototype = {
						constructor: C,
						reset: function (e) {
							if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(F), !e))
								for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (e) {
							if (this.done) throw e;
							var r = this;
							function o(n, o) {
								return (c.type = "throw"), (c.arg = e), (r.next = n), o && ((r.method = "next"), (r.arg = t)), !!o;
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									c = a.completion;
								if ("root" === a.tryLoc) return o("end");
								if (a.tryLoc <= this.prev) {
									var u = n.call(a, "catchLoc"),
										f = n.call(a, "finallyLoc");
									if (u && f) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (u) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!f) throw Error("try statement without catch or finally");
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
							var a = i ? i.completion : {};
							return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), g) : this.complete(a);
						},
						complete: function (t, e) {
							if ("throw" === t.type) throw t.arg;
							return (
								"break" === t.type || "continue" === t.type
									? (this.next = t.arg)
									: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
								g
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), F(r), g;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ("throw" === n.type) {
										var o = n.arg;
										F(r);
									}
									return o;
								}
							}
							throw Error("illegal catch attempt");
						},
						delegateYield: function (e, r, n) {
							return (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }), "next" === this.method && (this.arg = t), g;
						},
					}),
					e
				);
			}
			function a(t, e, r, n, o, i, a) {
				try {
					var c = t[i](a),
						u = c.value;
				} catch (t) {
					return void r(t);
				}
				c.done ? e(u) : Promise.resolve(u).then(n, o);
			}
			e.A = function () {
				return (
					(0, n.useEffect)(function () {
						if (("undefined" != typeof performance && performance.mark && performance.mark("font-loading-start"), "fonts" in document)) {
							document.documentElement.classList.add("font-loading");
							var t = (function () {
								var t,
									e =
										((t = i().mark(function t() {
											var e, r;
											return i().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.prev = 0), (t.next = 1), document.fonts.load("400 1em Fredoka");
															case 1:
																return "undefined" != typeof performance && performance.mark && performance.mark("critical-font-loaded"), (t.next = 2), document.fonts.load("500 1em Fredoka");
															case 2:
																document.documentElement.classList.remove("font-loading"),
																	document.documentElement.classList.add("font-loaded"),
																	"undefined" != typeof performance &&
																		performance.mark &&
																		(performance.mark("font-loading-complete"), performance.measure("font-loading-duration", "font-loading-start", "font-loading-complete")),
																	(e = function () {
																		Promise.all([document.fonts.load("300 1em Fredoka"), document.fonts.load("600 1em Fredoka"), document.fonts.load("700 1em Fredoka")]).catch(function (t) {
																			console.warn("Additional font weights failed to load:", t);
																		});
																	}),
																	"undefined" != typeof requestIdleCallback ? requestIdleCallback(e, { timeout: 2e3 }) : setTimeout(e, 100),
																	(t.next = 4);
																break;
															case 3:
																(t.prev = 3),
																	(r = t.catch(0)),
																	console.warn("Font loading failed, using fallbacks:", r),
																	document.documentElement.classList.remove("font-loading"),
																	document.documentElement.classList.add("font-fallback"),
																	"undefined" != typeof performance && performance.mark && performance.mark("font-fallback-activated");
															case 4:
															case "end":
																return t.stop();
														}
												},
												t,
												null,
												[[0, 3]],
											);
										})),
										function () {
											var e = this,
												r = arguments;
											return new Promise(function (n, o) {
												var i = t.apply(e, r);
												function c(t) {
													a(i, n, o, c, u, "next", t);
												}
												function u(t) {
													a(i, n, o, c, u, "throw", t);
												}
												c(void 0);
											});
										});
								return function () {
									return e.apply(this, arguments);
								};
							})();
							t();
							var e = setTimeout(function () {
								document.documentElement.classList.contains("font-loading") &&
									(document.documentElement.classList.remove("font-loading"),
									document.documentElement.classList.add("font-timeout"),
									"undefined" != typeof performance && performance.mark && performance.mark("font-loading-timeout"));
							}, 2e3);
							return function () {
								clearTimeout(e);
							};
						}
						document.documentElement.classList.add("font-no-api"), "undefined" != typeof performance && performance.mark && performance.mark("font-no-api-fallback");
					}, []),
					null
				);
			};
		},
	},
]);
//# sourceMappingURL=component---src-pages-404-js-e431013b310cc70747b8.js.map

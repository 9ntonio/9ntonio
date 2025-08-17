/*! For license information please see app-19c13fa4234ae8c2f47a.js.LICENSE.txt */
(self.webpackChunkantonio_almena_portfolio = self.webpackChunkantonio_almena_portfolio || []).push([
	[524],
	{
		54: function (e, t) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 });
			(t.SCRIPT_TYPE = "text/partytown"),
				(t.partytownSnippet = (e) =>
					((e, t) => {
						const { forward: n = [], ...r } = e || {},
							o = JSON.stringify(r, (e, t) => ("function" == typeof t && (t = String(t)).startsWith(e + "(") && (t = "function " + t), t));
						return [
							"!(function(w,p,f,c){",
							Object.keys(r).length > 0 ? `c=w[p]=Object.assign(w[p]||{},${o});` : "c=w[p]=w[p]||{};",
							"c[f]=(c[f]||[])",
							n.length > 0 ? `.concat(${JSON.stringify(n)})` : "",
							"})(window,'partytown','forward');",
							t,
						].join("");
					})(
						e,
						'/* Partytown 0.7.6 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll(\'script[type="text/partytown"]\'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.7.6":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);',
					));
		},
		87: function (e, t, n) {
			"use strict";
			n.d(t, {
				Wi: function () {
					return C;
				},
				N5: function () {
					return W;
				},
				Ay: function () {
					return F;
				},
				Rh: function () {
					return Q;
				},
				LE: function () {
					return J;
				},
				Zf: function () {
					return q;
				},
				iC: function () {
					return U;
				},
			});
			n(4751),
				n(6371),
				n(4559),
				n(3528),
				n(5510),
				n(4644),
				n(7912),
				n(9086),
				n(7595),
				n(1612),
				n(9802),
				n(7538),
				n(7878),
				n(9976),
				n(1974),
				n(1173),
				n(6200),
				n(5865),
				n(1503),
				n(6314),
				n(327),
				n(9180),
				n(9991),
				n(9182),
				n(1814),
				n(189),
				n(5068),
				n(9795),
				n(2401),
				n(83),
				n(9613),
				n(743),
				n(6288),
				n(9292),
				n(4188),
				n(3089),
				n(8381),
				n(2682),
				n(3563),
				n(7461),
				n(2029),
				n(275),
				n(941),
				n(9467),
				n(6262),
				n(7442),
				n(7960),
				n(945),
				n(4121),
				n(7923),
				n(7821),
				n(5195),
				n(4996),
				n(5797),
				n(4607),
				n(1472),
				n(4223),
				n(7686),
				n(1829),
				n(3674),
				n(7236),
				n(3570),
				n(4119),
				n(3379),
				n(16),
				n(1677);
			var r = n(8523);
			function o(e) {
				return (
					(o =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					o(e)
				);
			}
			var i = (function (e) {
					if ("undefined" === ("undefined" == typeof document ? "undefined" : o(document))) return !1;
					var t = document.createElement("link");
					try {
						if (t.relList && "function" === o(t.relList.supports)) return t.relList.supports(e);
					} catch (n) {
						return !1;
					}
					return !1;
				})("prefetch")
					? function (e, t) {
							return new Promise(function (n, r) {
								if ("undefined" !== ("undefined" == typeof document ? "undefined" : o(document))) {
									var i = document.createElement("link");
									i.setAttribute("rel", "prefetch"),
										i.setAttribute("href", e),
										Object.keys(t).forEach(function (e) {
											i.setAttribute(e, t[e]);
										}),
										(i.onload = n),
										(i.onerror = r),
										(document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode).appendChild(i);
								} else r();
							});
						}
					: function (e) {
							return new Promise(function (t, n) {
								var r = new XMLHttpRequest();
								r.open("GET", e, !0),
									(r.onload = function () {
										200 === r.status ? t() : n();
									}),
									r.send(null);
							});
						},
				a = {},
				c = function (e, t) {
					return new Promise(function (n) {
						a[e]
							? n()
							: i(e, t)
									.then(function () {
										n(), (a[e] = !0);
									})
									.catch(function () {});
					});
				},
				u = n(420),
				s = n(2785);
			function l(e, t, n) {
				return (
					(t = h(t)),
					(function (e, t) {
						if (t && ("object" == _(t) || "function" == typeof t)) return t;
						if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
						return (function (e) {
							if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return e;
						})(e);
					})(e, f() ? Reflect.construct(t, n || [], h(e).constructor) : t.apply(e, n))
				);
			}
			function f() {
				try {
					var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (e) {}
				return (f = function () {
					return !!e;
				})();
			}
			function p(e, t, n, r) {
				var o = d(h(1 & r ? e.prototype : e), t, n);
				return 2 & r && "function" == typeof o
					? function (e) {
							return o.apply(n, e);
						}
					: o;
			}
			function d() {
				return (
					(d =
						"undefined" != typeof Reflect && Reflect.get
							? Reflect.get.bind()
							: function (e, t, n) {
									var r = (function (e, t) {
										for (; !{}.hasOwnProperty.call(e, t) && null !== (e = h(e)); );
										return e;
									})(e, t);
									if (r) {
										var o = Object.getOwnPropertyDescriptor(r, t);
										return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value;
									}
								}),
					d.apply(null, arguments)
				);
			}
			function h(e) {
				return (
					(h = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
							}),
					h(e)
				);
			}
			function y(e, t) {
				return (
					(y = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
							}),
					y(e, t)
				);
			}
			function v(e, t) {
				var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = k(e)) || (t && e && "number" == typeof e.length)) {
						n && (e = n);
						var r = 0,
							o = function () {};
						return {
							s: o,
							n: function () {
								return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
							},
							e: function (e) {
								throw e;
							},
							f: o,
						};
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				var i,
					a = !0,
					c = !1;
				return {
					s: function () {
						n = n.call(e);
					},
					n: function () {
						var e = n.next();
						return (a = e.done), e;
					},
					e: function (e) {
						(c = !0), (i = e);
					},
					f: function () {
						try {
							a || null == n.return || n.return();
						} finally {
							if (c) throw i;
						}
					},
				};
			}
			function b(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function m(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? b(Object(n), !0).forEach(function (t) {
								S(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: b(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function g(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return R(e);
					})(e) ||
					(function (e) {
						if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
					})(e) ||
					k(e) ||
					(function () {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function w(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
			}
			function O(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, P(r.key), r);
				}
			}
			function j(e, t, n) {
				return t && O(e.prototype, t), n && O(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
			}
			function S(e, t, n) {
				return (t = P(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
			}
			function P(e) {
				var t = (function (e, t) {
					if ("object" != _(e) || !e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" != _(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" == _(t) ? t : t + "";
			}
			function _(e) {
				return (
					(_ =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					_(e)
				);
			}
			function E(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
						if (null != n) {
							var r,
								o,
								i,
								a,
								c = [],
								u = !0,
								s = !1;
							try {
								if (((i = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
							} catch (e) {
								(s = !0), (o = e);
							} finally {
								try {
									if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
								} finally {
									if (s) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					k(e, t) ||
					(function () {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function k(e, t) {
				if (e) {
					if ("string" == typeof e) return R(e, t);
					var n = {}.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(e, t) : void 0
					);
				}
			}
			function R(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			var C = { Error: "error", Success: "success" },
				D = function (e) {
					var t,
						n = E(e.split("?"), 2),
						r = n[0],
						o = n[1],
						i = "/" === r ? "index" : (t = "/" === (t = r)[0] ? t.slice(1) : t).endsWith("/") ? t.slice(0, -1) : t;
					return ""
						.concat("", "/page-data/")
						.concat(i, "/page-data.json")
						.concat(o ? "?".concat(o) : "");
				},
				T = function (e) {
					return e.startsWith("//");
				};
			function x(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET";
				return new Promise(function (n) {
					var r = new XMLHttpRequest();
					r.open(t, e, !0),
						(r.onreadystatechange = function () {
							4 == r.readyState && n(r);
						}),
						r.send(null);
				});
			}
			var A = /bot|crawler|spider|crawling/i,
				N = function (e) {
					var t,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
						r = arguments.length > 2 ? arguments[2] : void 0,
						o = {
							componentChunkName: e.componentChunkName,
							path: e.path,
							webpackCompilationHash: e.webpackCompilationHash,
							matchPath: e.matchPath,
							staticQueryHashes: e.staticQueryHashes,
							getServerDataError: e.getServerDataError,
							slicesMap: null !== (t = e.slicesMap) && void 0 !== t ? t : {},
						};
					return { component: n, head: r, json: e.result, page: o };
				};
			function I(e) {
				return new Promise(function (t) {
					try {
						var n = e.readRoot();
						t(n);
					} catch (r) {
						if (!Object.hasOwnProperty.call(r, "_response") || !Object.hasOwnProperty.call(r, "_status")) throw r;
						setTimeout(function () {
							I(e).then(t);
						}, 200);
					}
				});
			}
			var L,
				H = (function () {
					return j(
						function e(t, n) {
							w(this, e),
								S(this, "inFlightNetworkRequests", new Map()),
								(this.pageDb = new Map()),
								(this.inFlightDb = new Map()),
								(this.staticQueryDb = {}),
								(this.pageDataDb = new Map()),
								(this.partialHydrationDb = new Map()),
								(this.slicesDataDb = new Map()),
								(this.sliceInflightDb = new Map()),
								(this.slicesDb = new Map()),
								(this.isPrefetchQueueRunning = !1),
								(this.prefetchQueued = []),
								(this.prefetchTriggered = new Set()),
								(this.prefetchCompleted = new Set()),
								(this.loadComponent = t),
								(0, s.QX)(n);
						},
						[
							{
								key: "memoizedGet",
								value: function (e) {
									var t = this,
										n = this.inFlightNetworkRequests.get(e);
									return (
										n || ((n = x(e, "GET")), this.inFlightNetworkRequests.set(e, n)),
										n
											.then(function (n) {
												return t.inFlightNetworkRequests.delete(e), n;
											})
											.catch(function (n) {
												throw (t.inFlightNetworkRequests.delete(e), n);
											})
									);
								},
							},
							{
								key: "setApiRunner",
								value: function (e) {
									(this.apiRunner = e),
										(this.prefetchDisabled = e("disableCorePrefetching").some(function (e) {
											return e;
										}));
								},
							},
							{
								key: "fetchPageDataJson",
								value: function (e) {
									var t = this,
										n = e.pagePath,
										r = e.retries,
										o = void 0 === r ? 0 : r,
										i = D(n);
									return this.memoizedGet(i).then(function (r) {
										var i = r.status,
											a = r.responseText;
										if (200 === i)
											try {
												var c = JSON.parse(a);
												if (void 0 === c.path) throw new Error("not a valid pageData response");
												var u = n.split("?")[1];
												return u && !c.path.includes(u) && (c.path += "?".concat(u)), Object.assign(e, { status: C.Success, payload: c });
											} catch (s) {}
										return 404 === i || 200 === i
											? "/404.html" === n || "/500.html" === n
												? Object.assign(e, { status: C.Error })
												: t.fetchPageDataJson(Object.assign(e, { pagePath: "/404.html", notFound: !0 }))
											: 500 === i
												? t.fetchPageDataJson(Object.assign(e, { pagePath: "/500.html", internalServerError: !0 }))
												: o < 3
													? t.fetchPageDataJson(Object.assign(e, { retries: o + 1 }))
													: Object.assign(e, { status: C.Error });
									});
								},
							},
							{
								key: "fetchPartialHydrationJson",
								value: function (e) {
									var t = this,
										n = e.pagePath,
										r = e.retries,
										o = void 0 === r ? 0 : r,
										i = D(n).replace(".json", "-rsc.json");
									return this.memoizedGet(i).then(function (r) {
										var i = r.status,
											a = r.responseText;
										if (200 === i)
											try {
												return Object.assign(e, { status: C.Success, payload: a });
											} catch (c) {}
										return 404 === i || 200 === i
											? "/404.html" === n || "/500.html" === n
												? Object.assign(e, { status: C.Error })
												: t.fetchPartialHydrationJson(Object.assign(e, { pagePath: "/404.html", notFound: !0 }))
											: 500 === i
												? t.fetchPartialHydrationJson(Object.assign(e, { pagePath: "/500.html", internalServerError: !0 }))
												: o < 3
													? t.fetchPartialHydrationJson(Object.assign(e, { retries: o + 1 }))
													: Object.assign(e, { status: C.Error });
									});
								},
							},
							{
								key: "loadPageDataJson",
								value: function (e) {
									var t = this,
										n = (0, s.Hh)(e);
									if (this.pageDataDb.has(n)) {
										var r = this.pageDataDb.get(n);
										return Promise.resolve(r);
									}
									return this.fetchPageDataJson({ pagePath: n }).then(function (e) {
										return t.pageDataDb.set(n, e), e;
									});
								},
							},
							{
								key: "loadPartialHydrationJson",
								value: function (e) {
									var t = this,
										n = (0, s.Hh)(e);
									if (this.partialHydrationDb.has(n)) {
										var r = this.partialHydrationDb.get(n);
										return Promise.resolve(r);
									}
									return this.fetchPartialHydrationJson({ pagePath: n }).then(function (e) {
										return t.partialHydrationDb.set(n, e), e;
									});
								},
							},
							{
								key: "loadSliceDataJson",
								value: function (e) {
									var t = this;
									if (this.slicesDataDb.has(e)) {
										var n = this.slicesDataDb.get(e);
										return Promise.resolve({ sliceName: e, jsonPayload: n });
									}
									return x("".concat("", "/slice-data/").concat(e, ".json"), "GET").then(function (n) {
										var r = JSON.parse(n.responseText);
										return t.slicesDataDb.set(e, r), { sliceName: e, jsonPayload: r };
									});
								},
							},
							{
								key: "findMatchPath",
								value: function (e) {
									return (0, s.Yl)(e);
								},
							},
							{
								key: "loadPage",
								value: function (e) {
									var t = this,
										n = (0, s.Hh)(e);
									if (this.pageDb.has(n)) {
										var o = this.pageDb.get(n);
										return o.error ? Promise.resolve({ error: o.error, status: o.status }) : Promise.resolve(o.payload);
									}
									if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
									var i = [this.loadAppData(), this.loadPageDataJson(n)];
									var a = Promise.all(i).then(function (e) {
										var o = E(e, 3),
											i = o[0],
											a = o[1],
											c = o[2];
										if (a.status === C.Error || (null == c ? void 0 : c.status) === C.Error) return { status: C.Error };
										var s = a.payload,
											l = s,
											f = l.componentChunkName,
											p = l.staticQueryHashes,
											d = void 0 === p ? [] : p,
											h = l.slicesMap,
											y = void 0 === h ? {} : h,
											b = {},
											w = Array.from(new Set(Object.values(y))),
											O = function (e) {
												if (t.slicesDb.has(e.name)) return t.slicesDb.get(e.name);
												if (t.sliceInflightDb.has(e.name)) return t.sliceInflightDb.get(e.name);
												var n = t.loadComponent(e.componentChunkName).then(function (t) {
													return { component: ((n = t), (n && n.default) || n), sliceContext: e.result.sliceContext, data: e.result.data };
													var n;
												});
												return (
													t.sliceInflightDb.set(e.name, n),
													n.then(function (n) {
														t.slicesDb.set(e.name, n), t.sliceInflightDb.delete(e.name);
													}),
													n
												);
											};
										return Promise.all(
											w.map(function (e) {
												return t.loadSliceDataJson(e);
											}),
										).then(function (e) {
											for (var o = [], l = g(d), p = 0, h = Object.values(e); p < h.length; p++) {
												var y = h[p],
													w = y.jsonPayload,
													j = y.sliceName;
												o.push(m({ name: j }, w));
												var S,
													P = v(w.staticQueryHashes);
												try {
													for (P.s(); !(S = P.n()).done; ) {
														var k = S.value;
														l.includes(k) || l.push(k);
													}
												} catch (x) {
													P.e(x);
												} finally {
													P.f();
												}
											}
											var R = [Promise.all(o.map(O)), t.loadComponent(f, "head")];
											R.push(t.loadComponent(f));
											var D = Promise.all(R).then(function (e) {
													var t = E(e, 3),
														n = t[0],
														o = t[1],
														u = t[2];
													b.createdAt = new Date();
													var l,
														f,
														p = v(n);
													try {
														for (p.s(); !(l = p.n()).done; ) {
															var d = l.value;
															(!d || d instanceof Error) && ((b.status = C.Error), (b.error = d));
														}
													} catch (x) {
														p.e(x);
													} finally {
														p.f();
													}
													if (((!u || u instanceof Error) && ((b.status = C.Error), (b.error = u)), b.status !== C.Error)) {
														if (
															((b.status = C.Success),
															(!0 !== a.notFound && !0 !== (null == c ? void 0 : c.notFound)) || (b.notFound = !0),
															(s = Object.assign(s, { webpackCompilationHash: i ? i.webpackCompilationHash : "" })),
															"string" === _(null == c ? void 0 : c.payload))
														) {
															(f = N(s, null, o)).partialHydration = c.payload;
															var h = new ReadableStream({
																start: function (e) {
																	var t = new TextEncoder();
																	e.enqueue(t.encode(c.payload));
																},
																pull: function (e) {
																	e.close();
																},
																cancel: function () {},
															});
															return I((0, r.createFromReadableStream)(h)).then(function (e) {
																return (f.partialHydration = e), f;
															});
														}
														f = N(s, u, o);
													}
													return f;
												}),
												T = Promise.all(
													l.map(function (e) {
														if (t.staticQueryDb[e]) {
															var n = t.staticQueryDb[e];
															return { staticQueryHash: e, jsonPayload: n };
														}
														return t
															.memoizedGet("".concat("", "/page-data/sq/d/").concat(e, ".json"))
															.then(function (t) {
																var n = JSON.parse(t.responseText);
																return { staticQueryHash: e, jsonPayload: n };
															})
															.catch(function () {
																throw new Error("We couldn't load \"".concat("", "/page-data/sq/d/").concat(e, '.json"'));
															});
													}),
												).then(function (e) {
													var n = {};
													return (
														e.forEach(function (e) {
															var r = e.staticQueryHash,
																o = e.jsonPayload;
															(n[r] = o), (t.staticQueryDb[r] = o);
														}),
														n
													);
												});
											return Promise.all([D, T])
												.then(function (e) {
													var r,
														o = E(e, 2),
														i = o[0],
														a = o[1];
													return (
														i && ((r = m(m({}, i), {}, { staticQueryResults: a })), (b.payload = r), u.A.emit("onPostLoadPageResources", { page: r, pageResources: r })),
														t.pageDb.set(n, b),
														b.error ? { error: b.error, status: b.status } : r
													);
												})
												.catch(function (e) {
													return { error: e, status: C.Error };
												});
										});
									});
									return (
										a
											.then(function () {
												t.inFlightDb.delete(n);
											})
											.catch(function (e) {
												throw (t.inFlightDb.delete(n), e);
											}),
										this.inFlightDb.set(n, a),
										a
									);
								},
							},
							{
								key: "loadPageSync",
								value: function (e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
										n = (0, s.Hh)(e);
									if (this.pageDb.has(n)) {
										var r = this.pageDb.get(n);
										if (r.payload) return r.payload;
										if (null != t && t.withErrorDetails) return { error: r.error, status: r.status };
									}
								},
							},
							{
								key: "shouldPrefetch",
								value: function (e) {
									return (
										!!(function () {
											if ("connection" in navigator && "undefined" !== _(navigator.connection)) {
												if ((navigator.connection.effectiveType || "").includes("2g")) return !1;
												if (navigator.connection.saveData) return !1;
											}
											return !0;
										})() &&
										(!navigator.userAgent || !A.test(navigator.userAgent)) &&
										!this.pageDb.has(e)
									);
								},
							},
							{
								key: "prefetch",
								value: function (e) {
									var t = this;
									if (!this.shouldPrefetch(e))
										return {
											then: function (e) {
												return e(!1);
											},
											abort: function () {},
										};
									if (this.prefetchTriggered.has(e))
										return {
											then: function (e) {
												return e(!0);
											},
											abort: function () {},
										};
									var n = { resolve: null, reject: null, promise: null };
									(n.promise = new Promise(function (e, t) {
										(n.resolve = e), (n.reject = t);
									})),
										this.prefetchQueued.push([e, n]);
									var r = new AbortController();
									return (
										r.signal.addEventListener("abort", function () {
											var n = t.prefetchQueued.findIndex(function (t) {
												return E(t, 1)[0] === e;
											});
											-1 !== n && t.prefetchQueued.splice(n, 1);
										}),
										this.isPrefetchQueueRunning ||
											((this.isPrefetchQueueRunning = !0),
											setTimeout(function () {
												t._processNextPrefetchBatch();
											}, 3e3)),
										{
											then: function (e, t) {
												return n.promise.then(e, t);
											},
											abort: r.abort.bind(r),
										}
									);
								},
							},
							{
								key: "_processNextPrefetchBatch",
								value: function () {
									var e = this;
									(
										window.requestIdleCallback ||
										function (e) {
											return setTimeout(e, 0);
										}
									)(function () {
										var t = e.prefetchQueued.splice(0, 4),
											n = Promise.all(
												t.map(function (t) {
													var n = E(t, 2),
														r = n[0],
														o = n[1];
													return (
														e.prefetchTriggered.has(r) || (e.apiRunner("onPrefetchPathname", { pathname: r }), e.prefetchTriggered.add(r)),
														e.prefetchDisabled
															? o.resolve(!1)
															: e.doPrefetch((0, s.Hh)(r)).then(function () {
																	e.prefetchCompleted.has(r) || (e.apiRunner("onPostPrefetchPathname", { pathname: r }), e.prefetchCompleted.add(r)), o.resolve(!0);
																})
													);
												}),
											);
										e.prefetchQueued.length
											? n.then(function () {
													setTimeout(function () {
														e._processNextPrefetchBatch();
													}, 3e3);
												})
											: (e.isPrefetchQueueRunning = !1);
									});
								},
							},
							{
								key: "doPrefetch",
								value: function (e) {
									var t = this,
										n = D(e);
									return c(n, { crossOrigin: "anonymous", as: "fetch" }).then(function () {
										return t.loadPageDataJson(e);
									});
								},
							},
							{
								key: "hovering",
								value: function (e) {
									this.loadPage(e);
								},
							},
							{
								key: "getResourceURLsForPathname",
								value: function (e) {
									var t = (0, s.Hh)(e),
										n = this.pageDataDb.get(t);
									if (n) {
										var r = N(n.payload);
										return [].concat(g(M(r.page.componentChunkName)), [D(t)]);
									}
									return null;
								},
							},
							{
								key: "isPageNotFound",
								value: function (e) {
									var t = (0, s.Hh)(e),
										n = this.pageDb.get(t);
									return !n || n.notFound;
								},
							},
							{
								key: "loadAppData",
								value: function () {
									var e = this,
										t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
									return this.memoizedGet("".concat("", "/page-data/app-data.json")).then(function (n) {
										var r,
											o = n.status,
											i = n.responseText;
										if (200 !== o && t < 3) return e.loadAppData(t + 1);
										if (200 === o)
											try {
												var a = JSON.parse(i);
												if (void 0 === a.webpackCompilationHash) throw new Error("not a valid app-data response");
												r = a;
											} catch (c) {}
										return r;
									});
								},
							},
						],
					);
				})(),
				M = function (e) {
					return (window.___chunkMapping[e] || []).map(function (e) {
						return "" + e;
					});
				},
				W = (function (e) {
					function t(e, n, r) {
						var o;
						w(this, t);
						return (
							(o = l(this, t, [
								function (t) {
									var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "components";
									if (!e[(n = "components")][t]) throw new Error("We couldn't find the correct component chunk with the name \"".concat(t, '"'));
									return e[n][t]().catch(function (e) {
										return e;
									});
								},
								n,
							])),
							r && o.pageDataDb.set((0, s.Hh)(r.path), { pagePath: r.path, payload: r, status: "success" }),
							o
						);
					}
					return (
						(function (e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
							(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && y(e, t);
						})(t, e),
						j(t, [
							{
								key: "doPrefetch",
								value: function (e) {
									return p(
										t,
										"doPrefetch",
										this,
										3,
									)([e]).then(function (e) {
										if (e.status !== C.Success) return Promise.resolve();
										var t = e.payload,
											n = t.componentChunkName,
											r = M(n);
										return Promise.all(r.map(c)).then(function () {
											return t;
										});
									});
								},
							},
							{
								key: "loadPageDataJson",
								value: function (e) {
									return p(
										t,
										"loadPageDataJson",
										this,
										3,
									)([e]).then(function (t) {
										return t.notFound
											? T(e)
												? t
												: x(e, "HEAD").then(function (e) {
														return 200 === e.status ? { status: C.Error } : t;
													})
											: t;
									});
								},
							},
							{
								key: "loadPartialHydrationJson",
								value: function (e) {
									return p(
										t,
										"loadPartialHydrationJson",
										this,
										3,
									)([e]).then(function (t) {
										return t.notFound
											? T(e)
												? t
												: x(e, "HEAD").then(function (e) {
														return 200 === e.status ? { status: C.Error } : t;
													})
											: t;
									});
								},
							},
						])
					);
				})(H),
				U = function (e) {
					L = e;
				},
				q = {
					enqueue: function (e) {
						return L.prefetch(e);
					},
					getResourceURLsForPathname: function (e) {
						return L.getResourceURLsForPathname(e);
					},
					loadPage: function (e) {
						return L.loadPage(e);
					},
					loadPageSync: function (e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return L.loadPageSync(e, t);
					},
					prefetch: function (e) {
						return L.prefetch(e);
					},
					isPageNotFound: function (e) {
						return L.isPageNotFound(e);
					},
					hovering: function (e) {
						return L.hovering(e);
					},
					loadAppData: function () {
						return L.loadAppData();
					},
				},
				F = q;
			function J() {
				return L ? L.staticQueryDb : {};
			}
			function Q() {
				return L ? L.slicesDb : {};
			}
		},
		420: function (e, t, n) {
			"use strict";
			n.d(t, {
				A: function () {
					return r;
				},
			});
			var r = (function (e) {
				return (
					(e = e || Object.create(null)),
					{
						on: function (t, n) {
							(e[t] || (e[t] = [])).push(n);
						},
						off: function (t, n) {
							e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
						},
						emit: function (t, n) {
							(e[t] || []).slice().map(function (e) {
								e(n);
							}),
								(e["*"] || []).slice().map(function (e) {
									e(t, n);
								});
						},
					}
				);
			})();
		},
		700: function (e, t, n) {
			"use strict";
			n.d(t, {
				Jr: function () {
					return a;
				},
				dd: function () {
					return o;
				},
				hr: function () {
					return c;
				},
				j$: function () {
					return i;
				},
			});
			var r = n(3746),
				o = r.createContext({}),
				i = r.createContext({}),
				a = r.createContext({}),
				c = r.createContext({});
		},
		928: function (e, t, n) {
			"use strict";
			n.d(t, {
				de: function () {
					return p;
				},
				G: function () {
					return l;
				},
				GR: function () {
					return d;
				},
			});
			n(4751), n(6371), n(4559), n(1612), n(6200), n(9991), n(6288), n(1677);
			var r = n(3746),
				o = n(5983),
				i = n.n(o);
			n(4260);
			var a = n(2218);
			function c(e) {
				return (
					(c =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					c(e)
				);
			}
			var u,
				s,
				l =
					((u = "StaticQuery"),
					(s = {}),
					r.createServerContext
						? (function (e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
								return (
									globalThis.__SERVER_CONTEXT || (globalThis.__SERVER_CONTEXT = {}),
									globalThis.__SERVER_CONTEXT[e] || (globalThis.__SERVER_CONTEXT[e] = r.createServerContext(e, t)),
									globalThis.__SERVER_CONTEXT[e]
								);
							})(u, s)
						: r.createContext(s));
			function f(e) {
				var t = e.staticQueryData,
					n = e.data,
					o = e.query,
					i = e.render,
					c = n ? n.data : t[o] && t[o].data;
				return (0, a.jsxs)(r.Fragment, { children: [c && i(c), !c && (0, a.jsx)("div", { children: "Loading (StaticQuery)" })] });
			}
			var p = function (e) {
				var t = e.data,
					n = e.query,
					r = e.render,
					o = e.children;
				return (0, a.jsx)(l.Consumer, {
					children: function (e) {
						return (0, a.jsx)(f, { data: t, query: n, render: r || o, staticQueryData: e });
					},
				});
			};
			p.propTypes = { data: i().object, query: i().string.isRequired, render: i().func, children: i().func };
			var d = function (e) {
				var t;
				c(r.useContext);
				var n = r.useContext(l);
				if (isNaN(Number(e)))
					throw new Error(
						"useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`".concat(
							e,
							"`);\n",
						),
					);
				if (null !== (t = n[e]) && void 0 !== t && t.data) return n[e].data;
				throw new Error(
					"The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues",
				);
			};
		},
		959: function (e, t, n) {
			"use strict";
			n.r(t),
				n.d(t, {
					onRouteUpdate: function () {
						return r;
					},
				});
			n(4529), n(9217);
			const r = function ({ location: e }, t) {
				0;
			};
		},
		1033: function (e, t, n) {
			n(1612),
				n(9991),
				n(1814),
				n(6288),
				n(1677),
				(t.components = {
					"component---src-pages-404-js": function () {
						return Promise.all([n.e(263), n.e(296), n.e(389), n.e(125)]).then(n.bind(n, 5423));
					},
					"component---src-pages-index-js": function () {
						return Promise.all([n.e(263), n.e(296), n.e(389), n.e(830), n.e(293)]).then(n.bind(n, 3246));
					},
					"component---src-pages-unknown-pleasures-js": function () {
						return Promise.all([n.e(263), n.e(296), n.e(389), n.e(830), n.e(754)]).then(n.bind(n, 9832));
					},
				});
		},
		1351: function (e, t, n) {
			"use strict";
			n.r(t);
			n(4751), n(6371), n(4559), n(3528), n(4644), n(1612), n(9976), n(6200), n(1503), n(6314), n(9180), n(9991), n(6288), n(16), n(1677);
			var r = n(3746),
				o = n(5983),
				i = n.n(o),
				a = n(87),
				c = n(2824);
			function u(e) {
				return (
					(u =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					u(e)
				);
			}
			function s(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function l(e, t, n) {
				return (
					(t = (function (e) {
						var t = (function (e, t) {
							if ("object" != u(e) || !e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" != u(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.");
							}
							return ("string" === t ? String : Number)(e);
						})(e, "string");
						return "symbol" == u(t) ? t : t + "";
					})(t)) in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			var f = function (e) {
				var t = e.location,
					n = a.Ay.loadPageSync(t.pathname);
				return n
					? r.createElement(
							c.A,
							(function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2
										? s(Object(n), !0).forEach(function (t) {
												l(e, t, n[t]);
											})
										: Object.getOwnPropertyDescriptors
											? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
											: s(Object(n)).forEach(function (t) {
													Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
												});
								}
								return e;
							})({ location: t, pageResources: n }, n.json),
						)
					: null;
			};
			(f.propTypes = { location: i().shape({ pathname: i().string.isRequired }).isRequired }), (t.default = f);
		},
		1553: function (e, t, n) {
			"use strict";
			n.r(t),
				n.d(t, {
					Script: function () {
						return h;
					},
					ScriptStrategy: function () {
						return s;
					},
					collectedScriptsByPage: function () {
						return c;
					},
					scriptCache: function () {
						return p;
					},
					scriptCallbackCache: function () {
						return d;
					},
				});
			var r = n(3746),
				o = n(6620);
			function i() {
				return (
					(i = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					i.apply(this, arguments)
				);
			}
			const a = new Map(),
				c = {
					get: (e) => a.get(e) || [],
					set(e, t) {
						const n = a.get(e) || [];
						n.push(t), a.set(e, n);
					},
					delete(e) {
						a.delete(e);
					},
				},
				u =
					("undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
					function (e) {
						const t = Date.now();
						return setTimeout(function () {
							e({
								didTimeout: !1,
								timeRemaining: function () {
									return Math.max(0, 50 - (Date.now() - t));
								},
							});
						}, 1);
					};
			var s, l;
			((l = s || (s = {})).postHydrate = "post-hydrate"), (l.idle = "idle"), (l.offMainThread = "off-main-thread");
			const f = new Set(["src", "strategy", "dangerouslySetInnerHTML", "children", "onLoad", "onError"]),
				p = new Set(),
				d = new Map();
			function h(e) {
				return r.createElement(o.Location, null, () => r.createElement(y, e));
			}
			function y(e) {
				const { src: t, strategy: n = s.postHydrate } = e || {},
					{ pathname: a } = (0, o.useLocation)();
				if (
					((0, r.useEffect)(() => {
						let t;
						switch (n) {
							case s.postHydrate:
								t = v(e);
								break;
							case s.idle:
								u(() => {
									t = v(e);
								});
								break;
							case s.offMainThread: {
								const t = m(e);
								c.set(a, t);
							}
						}
						return () => {
							const { script: e, loadCallback: n, errorCallback: r } = t || {};
							n && (null == e || e.removeEventListener("load", n)), r && (null == e || e.removeEventListener("error", r)), null == e || e.remove();
						};
					}, []),
					n === s.offMainThread)
				) {
					const o = b(e),
						u = m(e);
					return (
						"undefined" == typeof window && c.set(a, u),
						r.createElement(
							"script",
							o
								? i({ type: "text/partytown", "data-strategy": n, crossOrigin: "anonymous" }, u, { dangerouslySetInnerHTML: { __html: b(e) } })
								: i({ type: "text/partytown", src: g(t), "data-strategy": n, crossOrigin: "anonymous" }, u),
						)
					);
				}
				return null;
			}
			function v(e) {
				const { id: t, src: n, strategy: r = s.postHydrate, onLoad: o, onError: a } = e || {},
					c = t || n,
					u = ["load", "error"],
					l = { load: o, error: a };
				if (c) {
					for (const e of u)
						if (null != l && l[e]) {
							var f;
							const t = d.get(c) || {},
								{ callbacks: n = [] } = (null == t ? void 0 : t[e]) || {};
							var h, y;
							n.push(null == l ? void 0 : l[e]),
								null != t && null != (f = t[e]) && f.event
									? null == l || null == (h = l[e]) || h.call(l, null == t || null == (y = t[e]) ? void 0 : y.event)
									: d.set(c, i({}, t, { [e]: { callbacks: n } }));
						}
					if (p.has(c)) return null;
				}
				const v = b(e),
					g = m(e),
					O = document.createElement("script");
				t && (O.id = t), (O.dataset.strategy = r);
				for (const [i, s] of Object.entries(g)) O.setAttribute(i, s);
				v && (O.textContent = v), n && (O.src = n);
				const j = {};
				if (c) {
					for (const e of u) {
						const t = (t) => w(t, c, e);
						O.addEventListener(e, t), (j[`${e}Callback`] = t);
					}
					p.add(c);
				}
				return document.body.appendChild(O), { script: O, loadCallback: j.loadCallback, errorCallback: j.errorCallback };
			}
			function b(e) {
				const { dangerouslySetInnerHTML: t, children: n = "" } = e || {},
					{ __html: r = "" } = t || {};
				return r || n;
			}
			function m(e) {
				const t = {};
				for (const [n, r] of Object.entries(e)) f.has(n) || (t[n] = r);
				return t;
			}
			function g(e) {
				if (e) return `/__third-party-proxy?url=${encodeURIComponent(e)}`;
			}
			function w(e, t, n) {
				const r = d.get(t) || {};
				for (const i of (null == r || null == (o = r[n]) ? void 0 : o.callbacks) || []) {
					var o;
					i(e);
				}
				d.set(t, { [n]: { event: e } });
			}
		},
		1812: function (e) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
		},
		2785: function (e, t, n) {
			"use strict";
			n.d(t, {
				Yl: function () {
					return v;
				},
				Hh: function () {
					return m;
				},
				UA: function () {
					return b;
				},
				QX: function () {
					return y;
				},
			});
			n(4751),
				n(6371),
				n(4559),
				n(5510),
				n(9086),
				n(1612),
				n(9802),
				n(7538),
				n(1974),
				n(1173),
				n(9991),
				n(9795),
				n(2401),
				n(9613),
				n(6288),
				n(4188),
				n(3089),
				n(8381),
				n(2682),
				n(3563),
				n(7461),
				n(2029),
				n(275),
				n(941),
				n(9467),
				n(6262),
				n(7442),
				n(7960),
				n(945),
				n(1677),
				n(316),
				n(228),
				n(68);
			var r = n(6620),
				o = n(7145);
			function i(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
						if (null != n) {
							var r,
								o,
								i,
								a,
								c = [],
								u = !0,
								s = !1;
							try {
								if (((i = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
							} catch (e) {
								(s = !0), (o = e);
							} finally {
								try {
									if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
								} finally {
									if (s) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return a(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function a(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			var c = function (e) {
					if (void 0 === e) return e;
					var t = i(e.split("?"), 2),
						n = t[0],
						r = t[1],
						o = void 0 === r ? "" : r;
					return o && (o = "?" + o), "/" === n ? "/" + o : "/" === n.charAt(n.length - 1) ? n.slice(0, -1) + o : n + o;
				},
				u = n(4918);
			function s(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
						if (null != n) {
							var r,
								o,
								i,
								a,
								c = [],
								u = !0,
								s = !1;
							try {
								if (((i = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
							} catch (e) {
								(s = !0), (o = e);
							} finally {
								try {
									if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
								} finally {
									if (s) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return l(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function l(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			var f = new Map(),
				p = [],
				d = function (e) {
					var t = e;
					if (-1 !== e.indexOf("?")) {
						var n = s(e.split("?"), 2),
							r = n[0],
							i = n[1];
						t = "".concat(r, "?").concat(encodeURIComponent(i));
					}
					var a = decodeURIComponent(t);
					return (0, o.A)(a, decodeURIComponent("")).split("#")[0];
				};
			function h(e) {
				return e.startsWith("/") || e.startsWith("https://") || e.startsWith("http://") ? e : new URL(e, window.location.href + (window.location.href.endsWith("/") ? "" : "/")).pathname;
			}
			var y = function (e) {
					p = e;
				},
				v = function (e) {
					var t = g(e),
						n = p.map(function (e) {
							var t = e.path;
							return { path: e.matchPath, originalPath: t };
						}),
						o = (0, r.pick)(n, t);
					return o ? c(o.route.originalPath) : null;
				},
				b = function (e) {
					var t = g(e),
						n = p.map(function (e) {
							var t = e.path;
							return { path: e.matchPath, originalPath: t };
						}),
						o = (0, r.pick)(n, t);
					return o ? o.params : {};
				},
				m = function (e) {
					var t = d(h(e));
					if (f.has(t)) return f.get(t);
					var n = (0, u.X)(e);
					if (n) return m(n.toPath);
					var r = v(t);
					return r || (r = g(e)), f.set(t, r), r;
				},
				g = function (e) {
					var t = d(h(e));
					return "/index.html" === t && (t = "/"), (t = c(t));
				};
		},
		2824: function (e, t, n) {
			"use strict";
			n.d(t, {
				A: function () {
					return F;
				},
			});
			n(4751), n(6371), n(4559), n(3528), n(4644), n(1612), n(9976), n(6200), n(1503), n(6314), n(9180), n(9991), n(6288), n(16), n(1677);
			var r = n(3746),
				o = n(5983),
				i = n.n(o),
				a = n(7304),
				c = n(2785),
				u = (n(9086), n(7595), n(7538), n(1974), n(9795), n(2401), n(743), n(4529)),
				s = n(6620),
				l = n(4152);
			function f(e) {
				var t = e.children,
					n = e.callback;
				return (
					(0, r.useEffect)(function () {
						n();
					}),
					t
				);
			}
			n(5510),
				n(7912),
				n(4402),
				n(7878),
				n(1173),
				n(5414),
				n(83),
				n(3089),
				n(8381),
				n(2682),
				n(3563),
				n(7461),
				n(2029),
				n(275),
				n(941),
				n(9467),
				n(6262),
				n(7442),
				n(7960),
				n(945),
				n(4121),
				n(7923),
				n(7821),
				n(5195),
				n(4996),
				n(5797),
				n(4607),
				n(1472),
				n(4223),
				n(7686),
				n(1829),
				n(3674),
				n(7236),
				n(3570),
				n(4119),
				n(3379);
			var p = ["link", "meta", "style", "title", "base", "noscript", "script", "html", "body"];
			function d(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
						if (null != n) {
							var r,
								o,
								i,
								a,
								c = [],
								u = !0,
								s = !1;
							try {
								if (((i = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
							} catch (e) {
								(s = !0), (o = e);
							} finally {
								try {
									if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
								} finally {
									if (s) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					g(e, t) ||
					(function () {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function h(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return w(e);
					})(e) ||
					(function (e) {
						if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
					})(e) ||
					g(e) ||
					(function () {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function y(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function v(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? y(Object(n), !0).forEach(function (t) {
								b(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: y(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function b(e, t, n) {
				return (
					(t = (function (e) {
						var t = (function (e, t) {
							if ("object" != O(e) || !e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" != O(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.");
							}
							return ("string" === t ? String : Number)(e);
						})(e, "string");
						return "symbol" == O(t) ? t : t + "";
					})(t)) in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function m(e, t) {
				var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = g(e)) || (t && e && "number" == typeof e.length)) {
						n && (e = n);
						var r = 0,
							o = function () {};
						return {
							s: o,
							n: function () {
								return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
							},
							e: function (e) {
								throw e;
							},
							f: o,
						};
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				var i,
					a = !0,
					c = !1;
				return {
					s: function () {
						n = n.call(e);
					},
					n: function () {
						var e = n.next();
						return (a = e.done), e;
					},
					e: function (e) {
						(c = !0), (i = e);
					},
					f: function () {
						try {
							a || null == n.return || n.return();
						} finally {
							if (c) throw i;
						}
					},
				};
			}
			function g(e, t) {
				if (e) {
					if ("string" == typeof e) return w(e, t);
					var n = {}.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
					);
				}
			}
			function w(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function O(e) {
				return (
					(O =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					O(e)
				);
			}
			function j(e) {
				var t,
					n = e.oldNodes,
					r = e.newNodes,
					o = e.onStale,
					i = e.onNew,
					a = m(n);
				try {
					var c = function () {
						var e = t.value,
							n = r.findIndex(function (t) {
								return (function (e, t) {
									if (e instanceof HTMLElement && t instanceof HTMLElement) {
										var n = t.getAttribute("nonce");
										if (n && !e.getAttribute("nonce")) {
											var r = t.cloneNode(!0);
											return r.setAttribute("nonce", ""), (r.nonce = n), n === e.nonce && e.isEqualNode(r);
										}
									}
									return e.isEqualNode(t);
								})(t, e);
							});
						-1 === n ? o(e) : r.splice(n, 1);
					};
					for (a.s(); !(t = a.n()).done; ) c();
				} catch (l) {
					a.e(l);
				} finally {
					a.f();
				}
				var u,
					s = m(r);
				try {
					for (s.s(); !(u = s.n()).done; ) {
						i(u.value);
					}
				} catch (l) {
					s.e(l);
				} finally {
					s.f();
				}
			}
			function S(e) {
				var t,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { html: {}, body: {} },
					r = new Map(),
					o = [],
					i = m(e.childNodes);
				try {
					for (i.s(); !(t = i.n()).done; ) {
						var a,
							c,
							u = t.value,
							s = u.nodeName.toLowerCase(),
							l = null === (a = u.attributes) || void 0 === a || null === (c = a.id) || void 0 === c ? void 0 : c.value;
						if (E(u)) {
							if (_(s))
								if ("html" === s || "body" === s) {
									var f,
										p = m(u.attributes);
									try {
										for (p.s(); !(f = p.n()).done; ) {
											var d,
												y = f.value,
												b = "style" === y.name;
											if (((n[s] = v({}, n[s])), b || (n[s][y.name] = y.value), b)) n[s].style = "".concat(null !== (d = n[s]) && void 0 !== d && d.style ? n[s].style : "").concat(y.value, " ");
										}
									} catch (j) {
										p.e(j);
									} finally {
										p.f();
									}
								} else {
									var g = u.cloneNode(!0);
									if ((g.setAttribute("data-gatsby-head", !0), "script" === g.nodeName.toLowerCase() && (g = P(g)), l))
										if (r.has(l)) {
											var w,
												O = r.get(l);
											null === (w = o[O].parentNode) || void 0 === w || w.removeChild(o[O]), (o[O] = g);
										} else o.push(g), r.set(l, o.length - 1);
									else o.push(g);
								}
							u.childNodes.length && o.push.apply(o, h(S(u, n).validHeadNodes));
						}
					}
				} catch (j) {
					i.e(j);
				} finally {
					i.f();
				}
				return { validHeadNodes: o, htmlAndBodyAttributes: n };
			}
			function P(e) {
				var t,
					n = document.createElement("script"),
					r = m(e.attributes);
				try {
					for (r.s(); !(t = r.n()).done; ) {
						var o = t.value;
						n.setAttribute(o.name, o.value);
					}
				} catch (i) {
					r.e(i);
				} finally {
					r.f();
				}
				return (n.innerHTML = e.innerHTML), n;
			}
			function _(e) {
				return p.includes(e);
			}
			function E(e) {
				return 1 === e.nodeType;
			}
			var k = n(2218);
			function R(e) {
				return (
					(R =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					R(e)
				);
			}
			function C(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function D(e, t, n) {
				return (
					(t = (function (e) {
						var t = (function (e, t) {
							if ("object" != R(e) || !e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" != R(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.");
							}
							return ("string" === t ? String : Number)(e);
						})(e, "string");
						return "symbol" == R(t) ? t : t + "";
					})(t)) in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function T(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return x(e);
					})(e) ||
					(function (e) {
						if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
					})(e) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return x(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x(e, t) : void 0
							);
						}
					})(e) ||
					(function () {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function x(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			var A = document.createElement("div"),
				N = { html: [], body: [] },
				I = function () {
					var e,
						t = S(A),
						n = t.validHeadNodes,
						r = t.htmlAndBodyAttributes;
					(N.html = Object.keys(r.html)),
						(N.body = Object.keys(r.body)),
						(function (e) {
							if (e) {
								var t = e.html,
									n = e.body,
									r = document.querySelector("html");
								r &&
									Object.entries(t).forEach(function (e) {
										var t = d(e, 2),
											n = t[0],
											o = t[1];
										r.setAttribute(n, o);
									});
								var o = document.querySelector("body");
								o &&
									Object.entries(n).forEach(function (e) {
										var t = d(e, 2),
											n = t[0],
											r = t[1];
										o.setAttribute(n, r);
									});
							}
						})(r);
					var o = document.querySelectorAll("[data-gatsby-head]");
					if (0 !== o.length) {
						var i = [];
						j({
							oldNodes: o,
							newNodes: n,
							onStale: function (e) {
								return e.parentNode.removeChild(e);
							},
							onNew: function (e) {
								return i.push(e);
							},
						}),
							(e = document.head).append.apply(e, i);
					} else {
						var a;
						(a = document.head).append.apply(a, T(n));
					}
				};
			function L(e) {
				var t = e.pageComponent,
					n = e.staticQueryResults,
					o = e.pageComponentProps;
				(0, r.useEffect)(function () {
					if (null != t && t.Head) {
						!(function (e) {
							if ("function" !== O(e)) throw new Error('Expected "Head" export to be a function got "'.concat(O(e), '".'));
						})(t.Head);
						var e = (0, l.n)().render,
							r = (0, k.jsx)(
								t.Head,
								(function (e) {
									for (var t = 1; t < arguments.length; t++) {
										var n = null != arguments[t] ? arguments[t] : {};
										t % 2
											? C(Object(n), !0).forEach(function (t) {
													D(e, t, n[t]);
												})
											: Object.getOwnPropertyDescriptors
												? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
												: C(Object(n)).forEach(function (t) {
														Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
													});
									}
									return e;
								})({}, { location: { pathname: (c = o).location.pathname }, params: c.params, data: c.data || {}, serverData: c.serverData, pageContext: c.pageContext }),
							),
							i = (0, a.N)("wrapRootElement", { element: r }, r, function (e) {
								return { element: e.result };
							}).pop();
						e((0, k.jsx)(f, { callback: I, children: (0, k.jsx)(u.StaticQueryContext.Provider, { value: n, children: (0, k.jsx)(s.LocationProvider, { children: i }) }) }), A);
					}
					var c;
					return function () {
						!(function () {
							var e,
								t = m(document.querySelectorAll("[data-gatsby-head]"));
							try {
								for (t.s(); !(e = t.n()).done; ) {
									var n = e.value;
									n.parentNode.removeChild(n);
								}
							} catch (r) {
								t.e(r);
							} finally {
								t.f();
							}
						})(),
							(function (e) {
								if (e) {
									var t = e.html,
										n = e.body;
									if (t) {
										var r = document.querySelector("html");
										t.forEach(function (e) {
											r && r.removeAttribute(e);
										});
									}
									if (n) {
										var o = document.querySelector("body");
										n.forEach(function (e) {
											o && o.removeAttribute(e);
										});
									}
								}
							})(N);
					};
				});
			}
			function H(e) {
				return (
					(H =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					H(e)
				);
			}
			function M(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function W(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? M(Object(n), !0).forEach(function (t) {
								U(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: M(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function U(e, t, n) {
				return (
					(t = (function (e) {
						var t = (function (e, t) {
							if ("object" != H(e) || !e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" != H(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.");
							}
							return ("string" === t ? String : Number)(e);
						})(e, "string");
						return "symbol" == H(t) ? t : t + "";
					})(t)) in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			function q(e) {
				var t,
					n,
					o = W(W({}, e), {}, { params: W(W({}, (0, c.UA)(e.location.pathname)), e.pageResources.json.pageContext.__params) });
				return (
					(t = e.pageResources.partialHydration
						? e.pageResources.partialHydration
						: (0, r.createElement)(((n = e.pageResources.component) && n.default) || n, W(W({}, o), {}, { key: e.path || e.pageResources.page.path }))),
					L({ pageComponent: e.pageResources.head, staticQueryResults: e.pageResources.staticQueryResults, pageComponentProps: o }),
					(0, a.N)("wrapPageElement", { element: t, props: o }, t, function (e) {
						return { element: e.result, props: o };
					}).pop()
				);
			}
			q.propTypes = { location: i().object.isRequired, pageResources: i().object.isRequired, data: i().object, pageContext: i().object.isRequired };
			var F = q;
		},
		2926: function (e, t, n) {
			"use strict";
			var r = n(904);
			(t.__esModule = !0), (t.ScrollHandler = t.ScrollContext = void 0);
			var o = r(n(6498)),
				i = r(n(6108)),
				a = (function (e, t) {
					if (!t && e && e.__esModule) return e;
					if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
					var n = s(t);
					if (n && n.has(e)) return n.get(e);
					var r = {},
						o = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var i in e)
						if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
							var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
							a && (a.get || a.set) ? Object.defineProperty(r, i, a) : (r[i] = e[i]);
						}
					(r.default = e), n && n.set(e, r);
					return r;
				})(n(3746)),
				c = r(n(5983)),
				u = n(7699);
			function s(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap(),
					n = new WeakMap();
				return (s = function (e) {
					return e ? n : t;
				})(e);
			}
			var l = a.createContext(new u.SessionStorage());
			(t.ScrollContext = l), (l.displayName = "GatsbyScrollContext");
			var f = (function (e) {
				function t() {
					for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
					return (
						((t = e.call.apply(e, [this].concat(r)) || this)._stateStorage = new u.SessionStorage()),
						(t._isTicking = !1),
						(t._latestKnownScrollY = 0),
						(t.scrollListener = function () {
							(t._latestKnownScrollY = window.scrollY), t._isTicking || ((t._isTicking = !0), requestAnimationFrame(t._saveScroll.bind((0, o.default)(t))));
						}),
						(t.windowScroll = function (e, n) {
							t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e);
						}),
						(t.scrollToHash = function (e, n) {
							var r = document.getElementById(e.substring(1));
							r && t.shouldUpdateScroll(n, t.props) && r.scrollIntoView();
						}),
						(t.shouldUpdateScroll = function (e, n) {
							var r = t.props.shouldUpdateScroll;
							return !r || r.call((0, o.default)(t), e, n);
						}),
						t
					);
				}
				(0, i.default)(t, e);
				var n = t.prototype;
				return (
					(n._saveScroll = function () {
						var e = this.props.location.key || null;
						e && this._stateStorage.save(this.props.location, e, this._latestKnownScrollY), (this._isTicking = !1);
					}),
					(n.componentDidMount = function () {
						var e;
						window.addEventListener("scroll", this.scrollListener);
						var t = this.props.location,
							n = t.key,
							r = t.hash;
						n && (e = this._stateStorage.read(this.props.location, n)), r ? this.scrollToHash(decodeURI(r), void 0) : e && this.windowScroll(e, void 0);
					}),
					(n.componentWillUnmount = function () {
						window.removeEventListener("scroll", this.scrollListener);
					}),
					(n.componentDidUpdate = function (e) {
						var t,
							n = this.props.location,
							r = n.hash,
							o = n.key;
						o && (t = this._stateStorage.read(this.props.location, o)), r ? this.scrollToHash(decodeURI(r), e) : this.windowScroll(t, e);
					}),
					(n.render = function () {
						return a.createElement(l.Provider, { value: this._stateStorage }, this.props.children);
					}),
					t
				);
			})(a.Component);
			(t.ScrollHandler = f), (f.propTypes = { shouldUpdateScroll: c.default.func, children: c.default.element.isRequired, location: c.default.object.isRequired });
		},
		2969: function (e, t, n) {
			var r;
			e.exports = ((r = n(1351)) && r.default) || r;
		},
		3386: function (e, t, n) {
			e.exports = [
				{
					plugin: n(4019),
					options: {
						plugins: [],
						trackingId: "G-640WERC942",
						head: !1,
						anonymize: !0,
						gtagConfig: { anonymize_ip: !0, cookie_expires: 63072e3, send_page_view: !1 },
						pluginConfig: { respectDNT: !0, exclude: ["/preview/**", "/do-not-track/me/too/"], delayOnRouteUpdate: 0 },
					},
				},
				{
					plugin: n(959),
					options: {
						plugins: [],
						name: "Antonio Almena - Design Technologist",
						short_name: "Antonio Almena",
						start_url: "/",
						background_color: "#00474f",
						theme_color: "#b5f5ec",
						display: "minimal-ui",
						icon: "static/favicon.ico",
						legacy: !0,
						theme_color_in_head: !0,
						cache_busting_mode: "query",
						crossOrigin: "anonymous",
						include_favicon: !0,
						cacheDigest: "e77acbbdedf37d05e255723fe73f7d01",
					},
				},
				{ plugin: n(7464), options: { plugins: [] } },
				{ plugin: n(7249), options: { plugins: [] } },
			];
		},
		3447: function (e, t, n) {
			"use strict";
			var r = n(3746),
				o = { stream: !0 },
				i = new Map(),
				a = Symbol.for("react.element"),
				c = Symbol.for("react.lazy"),
				u = Symbol.for("react.default_value"),
				s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;
			function l(e, t, n) {
				(this._status = e), (this._value = t), (this._response = n);
			}
			function f(e) {
				switch (e._status) {
					case 3:
						return e._value;
					case 1:
						var t = JSON.parse(e._value, e._response._fromJSON);
						return (e._status = 3), (e._value = t);
					case 2:
						for (var r = (t = e._value).chunks, o = 0; o < r.length; o++) {
							var a = i.get(r[o]);
							if (null !== a) throw a;
						}
						return (r = n(t.id)), (t = "*" === t.name ? r : "" === t.name ? (r.__esModule ? r.default : r) : r[t.name]), (e._status = 3), (e._value = t);
					case 0:
						throw e;
					default:
						throw e._value;
				}
			}
			function p() {
				return f(b(this, 0));
			}
			function d(e, t) {
				return new l(3, t, e);
			}
			function h(e) {
				if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])();
			}
			function y(e, t) {
				if (0 === e._status) {
					var n = e._value;
					(e._status = 4), (e._value = t), h(n);
				}
			}
			function v(e, t) {
				e._chunks.forEach(function (e) {
					y(e, t);
				});
			}
			function b(e, t) {
				var n = e._chunks,
					r = n.get(t);
				return r || ((r = new l(0, null, e)), n.set(t, r)), r;
			}
			function m(e) {
				v(e, Error("Connection closed."));
			}
			function g(e, t) {
				if ("" !== t) {
					var o = t[0],
						a = t.indexOf(":", 1),
						c = parseInt(t.substring(1, a), 16);
					switch (((a = t.substring(a + 1)), o)) {
						case "J":
							(o = (t = e._chunks).get(c)) ? 0 === o._status && ((e = o._value), (o._status = 1), (o._value = a), h(e)) : t.set(c, new l(1, a, e));
							break;
						case "M":
							(o = (t = e._chunks).get(c)), (a = JSON.parse(a, e._fromJSON));
							var f = e._bundlerConfig;
							f = (a = f ? f[a.id][a.name] : a).chunks;
							for (var p = 0; p < f.length; p++) {
								var v = f[p];
								if (void 0 === i.get(v)) {
									var b = n.e(v),
										m = i.set.bind(i, v, null),
										g = i.set.bind(i, v);
									b.then(m, g), i.set(v, b);
								}
							}
							o ? 0 === o._status && ((e = o._value), (o._status = 2), (o._value = a), h(e)) : t.set(c, new l(2, a, e));
							break;
						case "P":
							e._chunks.set(
								c,
								d(
									e,
									(function (e) {
										return s[e] || (s[e] = r.createServerContext(e, u)), s[e];
									})(a).Provider,
								),
							);
							break;
						case "S":
							(o = JSON.parse(a)), e._chunks.set(c, d(e, Symbol.for(o)));
							break;
						case "E":
							(t = JSON.parse(a)), ((o = Error(t.message)).stack = t.stack), (a = (t = e._chunks).get(c)) ? y(a, o) : t.set(c, new l(4, o, e));
							break;
						default:
							throw Error("Error parsing the data. It's probably an error code or network corruption.");
					}
				}
			}
			function w(e) {
				return function (t, n) {
					return "string" == typeof n
						? (function (e, t, n) {
								switch (n[0]) {
									case "$":
										return "$" === n ? a : "$" === n[1] || "@" === n[1] ? n.substring(1) : f((e = b(e, parseInt(n.substring(1), 16))));
									case "@":
										return (e = b(e, parseInt(n.substring(1), 16))), { $$typeof: c, _payload: e, _init: f };
								}
								return n;
							})(e, 0, n)
						: "object" == typeof n && null !== n
							? n[0] === a
								? { $$typeof: a, type: n[1], key: n[2], ref: null, props: n[3], _owner: null }
								: n
							: n;
				};
			}
			function O(e) {
				var t = new TextDecoder();
				return ((e = { _bundlerConfig: e, _chunks: new Map(), readRoot: p, _partialRow: "", _stringDecoder: t })._fromJSON = w(e)), e;
			}
			function j(e, t) {
				function n(t) {
					v(e, t);
				}
				var r = t.getReader();
				r.read().then(function t(i) {
					var a = i.value;
					if (!i.done) {
						(i = a), (a = e._stringDecoder);
						for (var c = i.indexOf(10); -1 < c; ) {
							var u = e._partialRow,
								s = i.subarray(0, c);
							(s = a.decode(s)), g(e, u + s), (e._partialRow = ""), (c = (i = i.subarray(c + 1)).indexOf(10));
						}
						return (e._partialRow += a.decode(i, o)), r.read().then(t, n);
					}
					m(e);
				}, n);
			}
			(l.prototype.then = function (e) {
				0 === this._status ? (null === this._value && (this._value = []), this._value.push(e)) : e();
			}),
				(t.createFromReadableStream = function (e, t) {
					return j((t = O(t && t.moduleMap ? t.moduleMap : null)), e), t;
				});
		},
		4019: function (e, t) {
			"use strict";
			var n =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				};
			t.onRouteUpdate = function (e) {
				var t = e.location,
					r = window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID,
					o = window.GATSBY_GTAG_PLUGIN_ANONYMIZE || !1;
				if (r && "function" == typeof window.gtag) {
					var i = "";
					t && (i = "" + t.pathname + t.search + t.hash);
					var a = {};
					o && (a = { anonymize_ip: !0 }), window.gtag("config", r, n({ page_path: i }, a));
				}
			};
		},
		4152: function (e, t, n) {
			"use strict";
			n.d(t, {
				n: function () {
					return o;
				},
			});
			n(1612), n(9991), n(6288), n(9072), n(6664), n(1677);
			var r = new WeakMap();
			function o() {
				var e = n(8372);
				return {
					render: function (t, n) {
						var o = r.get(n);
						o || r.set(n, (o = e.createRoot(n))), o.render(t);
					},
					hydrate: function (t, n) {
						return e.hydrateRoot(n, t);
					},
				};
			}
		},
		4179: function (e, t, n) {
			"use strict";
			n(4751), n(6371), n(4559), n(3528), n(4644), n(7595), n(1612), n(9976), n(6200), n(1503), n(6314), n(327), n(9180), n(9991), n(189), n(9795), n(743), n(6288), n(9621), n(6294), n(16), n(1677);
			var r = n(7304),
				o = n(3746),
				i = n(6620),
				a = n(8536),
				c = n(928),
				u = n(700),
				s = (n(7538), n(5983)),
				l = n.n(s),
				f = n(87),
				p = n(4918),
				d = n(420),
				h = {
					id: "gatsby-announcer",
					style: { position: "absolute", top: 0, width: 1, height: 1, padding: 0, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 },
					"aria-live": "assertive",
					"aria-atomic": "true",
				},
				y = n(8188),
				v = n(2218);
			function b(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function m(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? b(Object(n), !0).forEach(function (t) {
								g(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: b(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function g(e, t, n) {
				return (t = S(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
			}
			function w(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
			}
			function O(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, S(r.key), r);
				}
			}
			function j(e, t, n) {
				return t && O(e.prototype, t), n && O(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
			}
			function S(e) {
				var t = (function (e, t) {
					if ("object" != C(e) || !e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" != C(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" == C(t) ? t : t + "";
			}
			function P(e, t, n) {
				return (
					(t = E(t)),
					(function (e, t) {
						if (t && ("object" == C(t) || "function" == typeof t)) return t;
						if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
						return (function (e) {
							if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return e;
						})(e);
					})(e, _() ? Reflect.construct(t, n || [], E(e).constructor) : t.apply(e, n))
				);
			}
			function _() {
				try {
					var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (e) {}
				return (_ = function () {
					return !!e;
				})();
			}
			function E(e) {
				return (
					(E = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
							}),
					E(e)
				);
			}
			function k(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && R(e, t);
			}
			function R(e, t) {
				return (
					(R = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
							}),
					R(e, t)
				);
			}
			function C(e) {
				return (
					(C =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					C(e)
				);
			}
			function D(e) {
				var t = (0, p.X)(e),
					n = window.location,
					r = n.hash,
					o = n.search;
				return null != t && (window.___replace(t.toPath + o + r), !0);
			}
			var T = "";
			window.addEventListener("unhandledrejection", function (e) {
				/loading chunk \d* failed./i.test(e.reason) && T && (window.location.pathname = T);
			});
			var x = function (e, t) {
					D(e.pathname) || ((T = e.pathname), (0, r.N)("onPreRouteUpdate", { location: e, prevLocation: t }));
				},
				A = function (e, t) {
					D(e.pathname) || (0, r.N)("onRouteUpdate", { location: e, prevLocation: t });
				},
				N = function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					if ("number" !== C(e)) {
						var n = (0, y.Rr)(e),
							o = n.pathname,
							a = n.search,
							c = n.hash,
							u = (0, p.X)(o);
						if ((u && (e = u.toPath + a + c), window.___swUpdated)) window.location = o + a + c;
						else {
							var s = setTimeout(function () {
								d.A.emit("onDelayedLoadPageResources", { pathname: o }), (0, r.N)("onRouteUpdateDelayed", { location: window.location });
							}, 1e3);
							f.Ay.loadPage(o + a).then(function (n) {
								if (!n || n.status === f.Wi.Error) return window.history.replaceState({}, "", location.href), (window.location = o), void clearTimeout(s);
								n &&
									n.page.webpackCompilationHash !== window.___webpackCompilationHash &&
									("serviceWorker" in navigator &&
										null !== navigator.serviceWorker.controller &&
										"activated" === navigator.serviceWorker.controller.state &&
										navigator.serviceWorker.controller.postMessage({ gatsbyApi: "clearPathResources" }),
									(window.location = o + a + c)),
									(0, i.navigate)(e, t),
									clearTimeout(s);
							});
						}
					} else i.globalHistory.navigate(e);
				};
			function I(e, t) {
				var n = this,
					o = t.location,
					i = o.pathname,
					a = o.hash,
					c = (0, r.N)("shouldUpdateScroll", {
						prevRouterProps: e,
						pathname: i,
						routerProps: { location: o },
						getSavedScrollPosition: function (e) {
							return [0, n._stateStorage.read(e, e.key)];
						},
					});
				if (c.length > 0) return c[c.length - 1];
				if (e && e.location.pathname === i) return a ? decodeURI(a.slice(1)) : [0, 0];
				return !0;
			}
			var L = (function (e) {
					function t(e) {
						var n;
						return w(this, t), ((n = P(this, t, [e])).announcementRef = o.createRef()), n;
					}
					return (
						k(t, e),
						j(t, [
							{
								key: "componentDidUpdate",
								value: function (e, t) {
									var n = this;
									requestAnimationFrame(function () {
										var e = "new page at ".concat(n.props.location.pathname);
										document.title && (e = document.title);
										var t = document.querySelectorAll("#gatsby-focus-wrapper h1");
										t && t.length && (e = t[0].textContent);
										var r = "Navigated to ".concat(e);
										n.announcementRef.current && n.announcementRef.current.innerText !== r && (n.announcementRef.current.innerText = r);
									});
								},
							},
							{
								key: "render",
								value: function () {
									return (0, v.jsx)("div", m(m({}, h), {}, { ref: this.announcementRef }));
								},
							},
						])
					);
				})(o.Component),
				H = function (e, t) {
					var n, r;
					return e.href !== t.href || (null == e || null === (n = e.state) || void 0 === n ? void 0 : n.key) !== (null == t || null === (r = t.state) || void 0 === r ? void 0 : r.key);
				},
				M = (function (e) {
					function t(e) {
						var n;
						return w(this, t), (n = P(this, t, [e])), x(e.location, null), n;
					}
					return (
						k(t, e),
						j(t, [
							{
								key: "componentDidMount",
								value: function () {
									A(this.props.location, null);
								},
							},
							{
								key: "shouldComponentUpdate",
								value: function (e) {
									return !!H(this.props.location, e.location) && (x(e.location, this.props.location), !0);
								},
							},
							{
								key: "componentDidUpdate",
								value: function (e) {
									H(e.location, this.props.location) && A(this.props.location, e.location);
								},
							},
							{
								key: "render",
								value: function () {
									return (0, v.jsxs)(o.Fragment, { children: [this.props.children, (0, v.jsx)(L, { location: location })] });
								},
							},
						])
					);
				})(o.Component);
			M.propTypes = { location: l().object.isRequired };
			var W = n(2824),
				U = n(1033);
			function q(e, t) {
				for (var n in e) if (!(n in t)) return !0;
				for (var r in t) if (e[r] !== t[r]) return !0;
				return !1;
			}
			function F(e) {
				return (
					(F =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					F(e)
				);
			}
			function J(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function Q(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? J(Object(n), !0).forEach(function (t) {
								B(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: J(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function B(e, t, n) {
				return (t = $(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
			}
			function G(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, $(r.key), r);
				}
			}
			function $(e) {
				var t = (function (e, t) {
					if ("object" != F(e) || !e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" != F(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" == F(t) ? t : t + "";
			}
			function z(e, t, n) {
				return (
					(t = X(t)),
					(function (e, t) {
						if (t && ("object" == F(t) || "function" == typeof t)) return t;
						if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
						return (function (e) {
							if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return e;
						})(e);
					})(e, Y() ? Reflect.construct(t, n || [], X(e).constructor) : t.apply(e, n))
				);
			}
			function Y() {
				try {
					var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (e) {}
				return (Y = function () {
					return !!e;
				})();
			}
			function X(e) {
				return (
					(X = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
							}),
					X(e)
				);
			}
			function K(e, t) {
				return (
					(K = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
							}),
					K(e, t)
				);
			}
			var V = (function (e) {
					function t(e) {
						var n;
						!(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
						})(this, t),
							(n = z(this, t));
						var r = e.location,
							o = e.pageResources;
						return (n.state = { location: Q({}, r), pageResources: o || f.Ay.loadPageSync(r.pathname + r.search, { withErrorDetails: !0 }) }), n;
					}
					return (
						(function (e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
							(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && K(e, t);
						})(t, e),
						(n = t),
						(o = [
							{
								key: "getDerivedStateFromProps",
								value: function (e, t) {
									var n = e.location;
									return t.location.href !== n.href ? { pageResources: f.Ay.loadPageSync(n.pathname + n.search, { withErrorDetails: !0 }), location: Q({}, n) } : { location: Q({}, n) };
								},
							},
						]),
						(r = [
							{
								key: "loadResources",
								value: function (e) {
									var t = this;
									f.Ay.loadPage(e).then(function (n) {
										n && n.status !== f.Wi.Error ? t.setState({ location: Q({}, window.location), pageResources: n }) : (window.history.replaceState({}, "", location.href), (window.location = e));
									});
								},
							},
							{
								key: "shouldComponentUpdate",
								value: function (e, t) {
									return t.pageResources
										? this.state.pageResources !== t.pageResources ||
												this.state.pageResources.component !== t.pageResources.component ||
												this.state.pageResources.json !== t.pageResources.json ||
												!(this.state.location.key === t.location.key || !t.pageResources.page || (!t.pageResources.page.matchPath && !t.pageResources.page.path)) ||
												(function (e, t, n) {
													return q(e.props, t) || q(e.state, n);
												})(this, e, t)
										: (this.loadResources(e.location.pathname + e.location.search), !1);
								},
							},
							{
								key: "render",
								value: function () {
									return this.props.children(this.state);
								},
							},
						]) && G(n.prototype, r),
						o && G(n, o),
						Object.defineProperty(n, "prototype", { writable: !1 }),
						n
					);
					var n, r, o;
				})(o.Component),
				Z = n(7145),
				ee = n(4152);
			function te(e) {
				return (
					(te =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					te(e)
				);
			}
			function ne(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
			}
			function re(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, de(r.key), r);
				}
			}
			function oe(e, t, n) {
				return t && re(e.prototype, t), n && re(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
			}
			function ie(e, t, n) {
				return (
					(t = ce(t)),
					(function (e, t) {
						if (t && ("object" == te(t) || "function" == typeof t)) return t;
						if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
						return (function (e) {
							if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return e;
						})(e);
					})(e, ae() ? Reflect.construct(t, n || [], ce(e).constructor) : t.apply(e, n))
				);
			}
			function ae() {
				try {
					var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (e) {}
				return (ae = function () {
					return !!e;
				})();
			}
			function ce(e) {
				return (
					(ce = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
							}),
					ce(e)
				);
			}
			function ue(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && se(e, t);
			}
			function se(e, t) {
				return (
					(se = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
							}),
					se(e, t)
				);
			}
			function le(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function fe(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? le(Object(n), !0).forEach(function (t) {
								pe(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: le(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function pe(e, t, n) {
				return (t = de(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
			}
			function de(e) {
				var t = (function (e, t) {
					if ("object" != te(e) || !e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" != te(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" == te(t) ? t : t + "";
			}
			var he = new f.N5(U, [], window.pageData);
			(0, f.iC)(he), he.setApiRunner(r.N);
			var ye = (0, ee.n)(),
				ve = ye.render,
				be = ye.hydrate;
			(window.asyncRequires = U),
				(window.___emitter = d.A),
				(window.___loader = f.Zf),
				i.globalHistory.listen(function (e) {
					e.location.action = e.action;
				}),
				(window.___push = function (e) {
					return N(e, { replace: !1 });
				}),
				(window.___replace = function (e) {
					return N(e, { replace: !0 });
				}),
				(window.___navigate = function (e, t) {
					return N(e, t);
				});
			var me = "gatsby-reload-compilation-hash-match";
			(0, r.v)("onClientEntry").then(function () {
				(0, r.N)("registerServiceWorker").filter(Boolean).length > 0 && n(5958);
				var e = function (e) {
						return (0, v.jsx)(i.BaseContext.Provider, { value: { baseuri: "/", basepath: "/" }, children: (0, v.jsx)(W.A, fe({}, e)) });
					},
					t = o.createContext({}),
					s = { renderEnvironment: "browser" },
					l = (function (e) {
						function n() {
							return ne(this, n), ie(this, n, arguments);
						}
						return (
							ue(n, e),
							oe(n, [
								{
									key: "render",
									value: function () {
										var e = this.props.children;
										return (0, v.jsx)(i.Location, {
											children: function (n) {
												var r = n.location;
												return (0, v.jsx)(V, {
													location: r,
													children: function (n) {
														var r = n.pageResources,
															o = n.location,
															i = (0, f.LE)(),
															a = (0, f.Rh)();
														return (0, v.jsx)(c.G.Provider, {
															value: i,
															children: (0, v.jsx)(u.j$.Provider, {
																value: s,
																children: (0, v.jsx)(u.dd.Provider, {
																	value: a,
																	children: (0, v.jsx)(u.Jr.Provider, { value: r.page.slicesMap, children: (0, v.jsx)(t.Provider, { value: { pageResources: r, location: o }, children: e }) }),
																}),
															}),
														});
													},
												});
											},
										});
									},
								},
							])
						);
					})(o.Component),
					p = (function (n) {
						function r() {
							return ne(this, r), ie(this, r, arguments);
						}
						return (
							ue(r, n),
							oe(r, [
								{
									key: "render",
									value: function () {
										var n = this;
										return (0, v.jsx)(t.Consumer, {
											children: function (t) {
												var r = t.pageResources,
													o = t.location;
												return (0, v.jsx)(M, {
													location: o,
													children: (0, v.jsx)(a.z_, {
														location: o,
														shouldUpdateScroll: I,
														children: (0, v.jsx)(i.Router, {
															basepath: "",
															location: o,
															id: "gatsby-focus-wrapper",
															children: (0, v.jsx)(
																e,
																fe(
																	fe(
																		{ path: "/404.html" === r.page.path || "/500.html" === r.page.path ? (0, Z.A)(o.pathname, "") : encodeURI((r.page.matchPath || r.page.path).split("?")[0]) },
																		n.props,
																	),
																	{},
																	{ location: o, pageResources: r },
																	r.json,
																),
															),
														}),
													}),
												});
											},
										});
									},
								},
							])
						);
					})(o.Component),
					d = window,
					h = d.pagePath,
					y = d.location;
				h &&
					"" + h !== y.pathname + (h.includes("?") ? y.search : "") &&
					!(he.findMatchPath((0, Z.A)(y.pathname, "")) || h.match(/^\/(404|500)(\/?|.html)$/) || h.match(/^\/offline-plugin-app-shell-fallback\/?$/)) &&
					(0, i.navigate)("" + h + (h.includes("?") ? "" : y.search) + y.hash, { replace: !0 });
				var b = function () {
					try {
						return sessionStorage;
					} catch (e) {
						return null;
					}
				};
				f.Zf.loadPage(y.pathname + y.search).then(function (e) {
					var t,
						n = b();
					if (
						null != e &&
						null !== (t = e.page) &&
						void 0 !== t &&
						t.webpackCompilationHash &&
						e.page.webpackCompilationHash !== window.___webpackCompilationHash &&
						("serviceWorker" in navigator &&
							null !== navigator.serviceWorker.controller &&
							"activated" === navigator.serviceWorker.controller.state &&
							navigator.serviceWorker.controller.postMessage({ gatsbyApi: "clearPathResources" }),
						n && !("1" === n.getItem(me)))
					)
						return n.setItem(me, "1"), void window.location.reload(!0);
					if ((n && n.removeItem(me), !e || e.status === f.Wi.Error)) {
						var i = "page resources for ".concat(y.pathname, " not found. Not rendering React");
						if (e && e.error) throw (console.error(i), e.error);
						throw new Error(i);
					}
					var a = (0, r.N)("wrapRootElement", { element: (0, v.jsx)(p, {}) }, (0, v.jsx)(p, {}), function (e) {
							return { element: e.result };
						}).pop(),
						c = function () {
							var e = o.useRef(!1);
							return (
								o.useEffect(function () {
									e.current || ((e.current = !0), performance.mark && performance.mark("onInitialClientRender"), (0, r.N)("onInitialClientRender"));
								}, []),
								(0, v.jsx)(l, { children: a })
							);
						},
						u = document.getElementById("gatsby-focus-wrapper"),
						s = ve;
					u && u.children.length && (s = be);
					var d = (0, r.N)("replaceHydrateFunction", void 0, s)[0];
					function h() {
						var e = "undefined" !== ("undefined" == typeof window ? "undefined" : te(window)) ? document.getElementById("___gatsby") : null;
						d((0, v.jsx)(c, {}), e);
					}
					var m = document;
					if ("complete" === m.readyState || ("loading" !== m.readyState && !m.documentElement.doScroll))
						setTimeout(function () {
							h();
						}, 0);
					else {
						var g = function () {
							m.removeEventListener("DOMContentLoaded", g, !1), window.removeEventListener("load", g, !1), h();
						};
						m.addEventListener("DOMContentLoaded", g, !1), window.addEventListener("load", g, !1);
					}
				});
			});
		},
		4529: function (e, t, n) {
			"use strict";
			n.r(t),
				n.d(t, {
					Link: function () {
						return c.N_;
					},
					PageRenderer: function () {
						return i();
					},
					Script: function () {
						return M.Script;
					},
					ScriptStrategy: function () {
						return M.ScriptStrategy;
					},
					Slice: function () {
						return I;
					},
					StaticQuery: function () {
						return u.de;
					},
					StaticQueryContext: function () {
						return u.G;
					},
					collectedScriptsByPage: function () {
						return M.collectedScriptsByPage;
					},
					graphql: function () {
						return U;
					},
					navigate: function () {
						return c.oo;
					},
					parsePath: function () {
						return c.Rr;
					},
					prefetchPathname: function () {
						return W;
					},
					scriptCache: function () {
						return M.scriptCache;
					},
					scriptCallbackCache: function () {
						return M.scriptCallbackCache;
					},
					useScrollRestoration: function () {
						return a.RV;
					},
					useStaticQuery: function () {
						return u.GR;
					},
					withAssetPrefix: function () {
						return c.Zf;
					},
					withPrefix: function () {
						return c.Fe;
					},
				});
			var r = n(87),
				o = n(2969),
				i = n.n(o),
				a = n(8536),
				c = n(8188),
				u = n(928),
				s =
					(n(4751),
					n(6371),
					n(4559),
					n(3528),
					n(5510),
					n(4644),
					n(9086),
					n(1612),
					n(4402),
					n(9802),
					n(7538),
					n(9976),
					n(1974),
					n(1173),
					n(6200),
					n(5414),
					n(1503),
					n(6314),
					n(327),
					n(9180),
					n(9991),
					n(189),
					n(9795),
					n(2401),
					n(6288),
					n(9574),
					n(3089),
					n(8381),
					n(2682),
					n(3563),
					n(7461),
					n(2029),
					n(275),
					n(941),
					n(9467),
					n(6262),
					n(7442),
					n(7960),
					n(945),
					n(16),
					n(1677),
					n(3746)),
				l = n(9712),
				f = n(700),
				p = function (e) {
					var t = e.sliceId,
						n = e.children,
						r = [s.createElement("slice-start", { id: "".concat(t, "-1") }), s.createElement("slice-end", { id: "".concat(t, "-1") })];
					return n && (r.push(n), r.push(s.createElement("slice-start", { id: "".concat(t, "-2") }), s.createElement("slice-end", { id: "".concat(t, "-2") }))), r;
				},
				d = n(2218),
				h = ["sliceName", "allowEmpty", "children"];
			var y = function (e) {
				var t = e.sliceName,
					n = e.allowEmpty,
					r = e.children,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = (function (e, t) {
								if (null == e) return {};
								var n = {};
								for (var r in e)
									if ({}.hasOwnProperty.call(e, r)) {
										if (-1 !== t.indexOf(r)) continue;
										n[r] = e[r];
									}
								return n;
							})(e, t);
						if (Object.getOwnPropertySymbols) {
							var i = Object.getOwnPropertySymbols(e);
							for (r = 0; r < i.length; r++) (n = i[r]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
						}
						return o;
					})(e, h),
					i = (0, s.useContext)(f.Jr),
					a = (0, s.useContext)(f.hr),
					c = i[t];
				if (!c) {
					if (n) return null;
					throw new Error('Slice "'.concat(c, '" for "').concat(t, '" slot not found'));
				}
				var u = (function (e, t) {
						if (!Object.keys(t).length) return e;
						var n = (0, l.U)(t);
						return "".concat(e, "-").concat(n);
					})(c, o),
					y = a[u];
				return y ? r && (y.hasChildren = !0) : (a[u] = y = { props: o, sliceName: c, hasChildren: !!r }), (0, d.jsx)(p, { sliceId: u, children: r });
			};
			function v(e) {
				return (
					(v =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					v(e)
				);
			}
			var b = ["sliceName", "allowEmpty", "children"];
			function m(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function g(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? m(Object(n), !0).forEach(function (t) {
								w(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: m(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function w(e, t, n) {
				return (
					(t = (function (e) {
						var t = (function (e, t) {
							if ("object" != v(e) || !e) return e;
							var n = e[Symbol.toPrimitive];
							if (void 0 !== n) {
								var r = n.call(e, t || "default");
								if ("object" != v(r)) return r;
								throw new TypeError("@@toPrimitive must return a primitive value.");
							}
							return ("string" === t ? String : Number)(e);
						})(e, "string");
						return "symbol" == v(t) ? t : t + "";
					})(t)) in e
						? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
						: (e[t] = n),
					e
				);
			}
			var O = function (e) {
				var t = e.sliceName,
					n = e.allowEmpty,
					r = e.children,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = (function (e, t) {
								if (null == e) return {};
								var n = {};
								for (var r in e)
									if ({}.hasOwnProperty.call(e, r)) {
										if (-1 !== t.indexOf(r)) continue;
										n[r] = e[r];
									}
								return n;
							})(e, t);
						if (Object.getOwnPropertySymbols) {
							var i = Object.getOwnPropertySymbols(e);
							for (r = 0; r < i.length; r++) (n = i[r]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
						}
						return o;
					})(e, b),
					i = (0, s.useContext)(f.Jr),
					a = (0, s.useContext)(f.dd),
					c = i[t],
					u = a.get(c);
				if (!u) {
					if (n) return null;
					throw new Error('Slice "'.concat(c, '" for "').concat(t, '" slot not found'));
				}
				return (0, d.jsx)(u.component, g(g({ sliceContext: u.sliceContext, data: u.data }, o), {}, { children: r }));
			};
			function j(e) {
				return (
					(j =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					j(e)
				);
			}
			function S(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
						if (null != n) {
							var r,
								o,
								i,
								a,
								c = [],
								u = !0,
								s = !1;
							try {
								if (((i = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									u = !1;
								} else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
							} catch (e) {
								(s = !0), (o = e);
							} finally {
								try {
									if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
								} finally {
									if (s) throw o;
								}
							}
							return c;
						}
					})(e, t) ||
					(function (e, t) {
						if (e) {
							if ("string" == typeof e) return P(e, t);
							var n = {}.toString.call(e).slice(8, -1);
							return (
								"Object" === n && e.constructor && (n = e.constructor.name),
								"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(e, t) : void 0
							);
						}
					})(e, t) ||
					(function () {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
					})()
				);
			}
			function P(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function _(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, N(r.key), r);
				}
			}
			function E(e, t, n) {
				return (
					(t = D(t)),
					(function (e, t) {
						if (t && ("object" == j(t) || "function" == typeof t)) return t;
						if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
						return (function (e) {
							if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return e;
						})(e);
					})(e, R() ? Reflect.construct(t, n || [], D(e).constructor) : t.apply(e, n))
				);
			}
			function k(e) {
				var t = "function" == typeof Map ? new Map() : void 0;
				return (
					(k = function (e) {
						if (
							null === e ||
							!(function (e) {
								try {
									return -1 !== Function.toString.call(e).indexOf("[native code]");
								} catch (t) {
									return "function" == typeof e;
								}
							})(e)
						)
							return e;
						if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
						if (void 0 !== t) {
							if (t.has(e)) return t.get(e);
							t.set(e, n);
						}
						function n() {
							return (function (e, t, n) {
								if (R()) return Reflect.construct.apply(null, arguments);
								var r = [null];
								r.push.apply(r, t);
								var o = new (e.bind.apply(e, r))();
								return n && C(o, n.prototype), o;
							})(e, arguments, D(this).constructor);
						}
						return (n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), C(n, e);
					}),
					k(e)
				);
			}
			function R() {
				try {
					var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (e) {}
				return (R = function () {
					return !!e;
				})();
			}
			function C(e, t) {
				return (
					(C = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
							}),
					C(e, t)
				);
			}
			function D(e) {
				return (
					(D = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
							}),
					D(e)
				);
			}
			function T(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function x(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? T(Object(n), !0).forEach(function (t) {
								A(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: T(Object(n)).forEach(function (t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
								});
				}
				return e;
			}
			function A(e, t, n) {
				return (t = N(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
			}
			function N(e) {
				var t = (function (e, t) {
					if ("object" != j(e) || !e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" != j(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" == j(t) ? t : t + "";
			}
			function I(e) {
				var t = x(x({}, e), {}, { sliceName: e.alias });
				delete t.alias, delete t.__renderedByLocation;
				var n = (0, s.useContext)(f.j$),
					r = H(e);
				if (Object.keys(r).length) throw new L("browser" === n.renderEnvironment, t.sliceName, r, e.__renderedByLocation);
				if ("server" === n.renderEnvironment) return (0, d.jsx)(y, x({}, t));
				if ("browser" === n.renderEnvironment) return (0, d.jsx)(O, x({}, t));
				if ("engines" === n.renderEnvironment || "dev-ssr" === n.renderEnvironment) return (0, d.jsx)(O, x({}, t));
				if ("slices" === n.renderEnvironment) {
					var o = "";
					try {
						o = '\n\nSlice component "'.concat(n.sliceRoot.name, '" (').concat(n.sliceRoot.componentPath, ') tried to render <Slice alias="').concat(e.alias, '"/>');
					} catch (i) {}
					throw new Error("Nested slices are not supported.".concat(o, "\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices"));
				}
				throw new Error('Slice context "'.concat(n.renderEnvironment, '" is not supported.'));
			}
			var L = (function (e) {
					function t(e, n, r, o) {
						var i;
						!(function (e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
						})(this, t);
						var a = Object.entries(r)
								.map(function (e) {
									var t = S(e, 2),
										n = t[0],
										r = t[1];
									return 'not serializable "'.concat(r, '" type passed to "').concat(n, '" prop');
								})
								.join(", "),
							c = "SlicePropsError",
							u = "",
							l = "";
						if (e) {
							var f = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack().trim().split("\n").slice(1);
							(f[0] = f[0].trim()), (u = "\n" + f.join("\n")), (l = 'Slice "'.concat(n, '" was passed props that are not serializable (').concat(a, ")."));
						} else {
							l = "".concat(c, ': Slice "').concat(n, '" was passed props that are not serializable (').concat(a, ").");
							var p = new Error().stack.trim().split("\n").slice(2);
							u = "".concat(l, "\n").concat(p.join("\n"));
						}
						return ((i = E(this, t, [l])).name = c), u ? (i.stack = u) : Error.captureStackTrace(i, t), o && (i.forcedLocation = x(x({}, o), {}, { functionName: "Slice" })), i;
					}
					return (
						(function (e, t) {
							if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
							(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && C(e, t);
						})(t, e),
						(n = t),
						r && _(n.prototype, r),
						o && _(n, o),
						Object.defineProperty(n, "prototype", { writable: !1 }),
						n
					);
					var n, r, o;
				})(k(Error)),
				H = function (e) {
					for (
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
							r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
							o = 0,
							i = Object.entries(e);
						o < i.length;
						o++
					) {
						var a = S(i[o], 2),
							c = a[0],
							u = a[1];
						if (null != u && (r || "children" !== c)) {
							var s = r ? "".concat(r, ".").concat(c) : c;
							"function" === j(u) ? (t[s] = j(u)) : "object" === j(u) && n.indexOf(u) <= 0 && (n.push(u), H(u, t, n, s));
						}
					}
					return t;
				},
				M = n(1553),
				W = r.Ay.enqueue;
			function U() {
				throw new Error(
					"It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.",
				);
			}
		},
		4691: function (e, t, n) {
			"use strict";
			var r = n(1812);
			function o() {}
			function i() {}
			(i.resetWarningCache = o),
				(e.exports = function () {
					function e(e, t, n, o, i, a) {
						if (a !== r) {
							var c = new Error(
								"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
							);
							throw ((c.name = "Invariant Violation"), c);
						}
					}
					function t() {
						return e;
					}
					e.isRequired = e;
					var n = {
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
						resetWarningCache: o,
					};
					return (n.PropTypes = n), n;
				});
		},
		4918: function (e, t, n) {
			"use strict";
			n.d(t, {
				X: function () {
					return i;
				},
			});
			n(1612), n(1173), n(9991), n(6288), n(3089), n(8381), n(2682), n(3563), n(7461), n(2029), n(275), n(941), n(9467), n(6262), n(7442), n(7960), n(945), n(16), n(1677);
			var r = new Map(),
				o = new Map();
			function i(e) {
				var t = r.get(e);
				return t || (t = o.get(e.toLowerCase())), t;
			}
			[].forEach(function (e) {
				e.ignoreCase ? o.set(e.fromPath, e) : r.set(e.fromPath, e);
			});
		},
		4977: function (e, t) {
			"use strict";
			function n(e, t) {
				var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
				if (!n) {
					if (
						Array.isArray(e) ||
						(n = (function (e, t) {
							if (e) {
								if ("string" == typeof e) return r(e, t);
								var n = {}.toString.call(e).slice(8, -1);
								return (
									"Object" === n && e.constructor && (n = e.constructor.name),
									"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
								);
							}
						})(e)) ||
						(t && e && "number" == typeof e.length)
					) {
						n && (e = n);
						var o = 0,
							i = function () {};
						return {
							s: i,
							n: function () {
								return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
							},
							e: function (e) {
								throw e;
							},
							f: i,
						};
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				var a,
					c = !0,
					u = !1;
				return {
					s: function () {
						n = n.call(e);
					},
					n: function () {
						var e = n.next();
						return (c = e.done), e;
					},
					e: function (e) {
						(u = !0), (a = e);
					},
					f: function () {
						try {
							c || null == n.return || n.return();
						} finally {
							if (u) throw a;
						}
					},
				};
			}
			function r(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			t.T = void 0;
			var o = [".html", ".json", ".js", ".map", ".txt", ".xml", ".pdf"];
			t.T = function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "always";
				if ("/" === e) return e;
				var r = e.endsWith("/");
				return (function (e, t) {
					var r,
						o = n(e);
					try {
						for (o.s(); !(r = o.n()).done; ) {
							var i = r.value;
							if (t.endsWith(i)) return !0;
						}
					} catch (a) {
						o.e(a);
					} finally {
						o.f();
					}
					return !1;
				})(o, e)
					? e
					: "always" === t
						? r
							? e
							: "".concat(e, "/")
						: "never" === t && r
							? e.slice(0, -1)
							: e;
			};
		},
		5958: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(7304);
			"https:" !== window.location.protocol && "localhost" !== window.location.hostname
				? console.error("Service workers can only be used over HTTPS, or on localhost for development")
				: "serviceWorker" in navigator &&
					navigator.serviceWorker
						.register("".concat("", "/sw.js"))
						.then(function (e) {
							e.addEventListener("updatefound", function () {
								(0, r.N)("onServiceWorkerUpdateFound", { serviceWorker: e });
								var t = e.installing;
								console.log("installingWorker", t),
									t.addEventListener("statechange", function () {
										switch (t.state) {
											case "installed":
												navigator.serviceWorker.controller
													? ((window.___swUpdated = !0),
														(0, r.N)("onServiceWorkerUpdateReady", { serviceWorker: e }),
														window.___failedResources && (console.log("resources failed, SW updated - reloading"), window.location.reload()))
													: (console.log("Content is now available offline!"), (0, r.N)("onServiceWorkerInstalled", { serviceWorker: e }));
												break;
											case "redundant":
												console.error("The installing service worker became redundant."), (0, r.N)("onServiceWorkerRedundant", { serviceWorker: e });
												break;
											case "activated":
												(0, r.N)("onServiceWorkerActive", { serviceWorker: e });
										}
									});
							});
						})
						.catch(function (e) {
							console.error("Error during service worker registration:", e);
						});
		},
		5983: function (e, t, n) {
			e.exports = n(4691)();
		},
		6180: function (e) {
			"use strict";
			e.exports = function (e, t, n, r, o, i, a, c) {
				if (!e) {
					var u;
					if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						var s = [n, r, o, i, a, c],
							l = 0;
						(u = new Error(
							t.replace(/%s/g, function () {
								return s[l++];
							}),
						)).name = "Invariant Violation";
					}
					throw ((u.framesToPop = 1), u);
				}
			};
		},
		7145: function (e, t, n) {
			"use strict";
			n.d(t, {
				A: function () {
					return r;
				},
			});
			n(7538), n(4188);
			function r(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return t ? (e === t ? "/" : e.startsWith("".concat(t, "/")) ? e.slice(t.length) : e) : e;
			}
		},
		7304: function (e, t, n) {
			function r(e) {
				return (
					(r =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
								}),
					r(e)
				);
			}
			n(4751), n(6371), n(4559), n(4644), n(1612), n(9802), n(5412), n(9991), n(1814), n(6288), n(1677);
			var o = n(3386),
				i = n(87).Zf,
				a = i.getResourceURLsForPathname,
				c = i.loadPage,
				u = i.loadPageSync;
			(t.N = function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = arguments.length > 2 ? arguments[2] : void 0,
					i = arguments.length > 3 ? arguments[3] : void 0;
				var s = o.map(function (n) {
					if (n.plugin[e]) {
						(t.getResourceURLsForPathname = a), (t.loadPage = c), (t.loadPageSync = u);
						var r = n.plugin[e](t, n.options);
						return r && i && (t = i({ args: t, result: r, plugin: n })), r;
					}
				});
				return (s = s.filter(function (e) {
					return "undefined" !== r(e);
				})).length > 0
					? s
					: n
						? [n]
						: [];
			}),
				(t.v = function (e, t, n) {
					return o.reduce(function (n, r) {
						return r.plugin[e]
							? n.then(function () {
									return r.plugin[e](t, r.options);
								})
							: n;
					}, Promise.resolve());
				});
		},
		7464: function (e, t, n) {
			"use strict";
			n.r(t),
				n.d(t, {
					onClientEntry: function () {
						return r;
					},
					onRouteUpdate: function () {
						return o;
					},
				});
			n(9991), n(16);
			var r = function () {
					"serviceWorker" in navigator &&
						navigator.serviceWorker
							.register("/sw.js")
							.then(function (e) {
								console.log("SW registered: ", e);
							})
							.catch(function (e) {
								console.log("SW registration failed: ", e);
							});
					var e = function () {
						document.querySelectorAll('link[rel="preload"][as="style"]').forEach(function (e) {
							setTimeout(function () {
								e.onload ? e.onload() : (e.rel = "stylesheet");
							}, 100);
						});
					};
					"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
				},
				o = function (e) {
					var t = e.location,
						n = e.prevLocation;
					if (n && t.pathname !== n.pathname && !document.querySelector('link[href*="styles"]')) {
						var r = document.createElement("link");
						(r.rel = "stylesheet"), (r.href = "/styles.css"), document.head.appendChild(r);
					}
				};
		},
		7699: function (e, t) {
			"use strict";
			(t.__esModule = !0), (t.SessionStorage = void 0);
			var n = "___GATSBY_REACT_ROUTER_SCROLL",
				r = (function () {
					function e() {}
					var t = e.prototype;
					return (
						(t.read = function (e, t) {
							var r = this.getStateKey(e, t);
							try {
								var o = window.sessionStorage.getItem(r);
								return o ? JSON.parse(o) : 0;
							} catch (i) {
								return window && window[n] && window[n][r] ? window[n][r] : 0;
							}
						}),
						(t.save = function (e, t, r) {
							var o = this.getStateKey(e, t),
								i = JSON.stringify(r);
							try {
								window.sessionStorage.setItem(o, i);
							} catch (a) {
								(window && window[n]) || (window[n] = {}), (window[n][o] = JSON.parse(i));
							}
						}),
						(t.getStateKey = function (e, t) {
							var n = "@@scroll|" + e.pathname;
							return null == t ? n : n + "|" + t;
						}),
						e
					);
				})();
			t.SessionStorage = r;
		},
		8188: function (e, t, n) {
			"use strict";
			n.d(t, {
				Fe: function () {
					return d;
				},
				N_: function () {
					return j;
				},
				Rr: function () {
					return u;
				},
				Zf: function () {
					return m;
				},
				oo: function () {
					return S;
				},
			});
			var r = n(5983),
				o = n(3746),
				i = n(6620),
				a = n(4977);
			function c() {
				return (
					(c = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					c.apply(this, arguments)
				);
			}
			function u(e) {
				let t = e || "/",
					n = "",
					r = "";
				const o = t.indexOf("#");
				-1 !== o && ((r = t.slice(o)), (t = t.slice(0, o)));
				const i = t.indexOf("?");
				return -1 !== i && ((n = t.slice(i)), (t = t.slice(0, i))), { pathname: t, search: "?" === n ? "" : n, hash: "#" === r ? "" : r };
			}
			const s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
				l = (e) => {
					if ("string" == typeof e) return !((e) => s.test(e))(e);
				},
				f = () => "",
				p = () => "";
			function d(e, t = f()) {
				var n;
				if (!l(e)) return e;
				if (e.startsWith("./") || e.startsWith("../")) return e;
				const r = null != (n = null != t ? t : p()) ? n : "/";
				return `${null != r && r.endsWith("/") ? r.slice(0, -1) : r}${e.startsWith("/") ? e : `/${e}`}`;
			}
			const h = (e) => (null == e ? void 0 : e.startsWith("/"));
			function y(e, t) {
				const { pathname: n, search: r, hash: o } = u(e);
				return `${(0, a.T)(n, t)}${r}${o}`;
			}
			const v = (e, t) =>
					"number" == typeof e
						? e
						: l(e)
							? h(e)
								? (function (e) {
										const t = d(e),
											n = "always";
										return y(t, n);
									})(e)
								: (function (e, t) {
										if (h(e)) return e;
										const n = "always",
											r = (0, i.resolve)(e, t);
										return y(r, n);
									})(e, t)
							: e,
				b = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];
			function m(e) {
				return d(e, p());
			}
			const g = { activeClassName: r.string, activeStyle: r.object, partiallyActive: r.bool };
			function w(e) {
				return o.createElement(i.Location, null, ({ location: t }) => o.createElement(O, c({}, e, { _location: t })));
			}
			class O extends o.Component {
				constructor(e) {
					super(e),
						(this.defaultGetProps = ({ isPartiallyCurrent: e, isCurrent: t }) =>
							(this.props.partiallyActive ? e : t)
								? { className: [this.props.className, this.props.activeClassName].filter(Boolean).join(" "), style: c({}, this.props.style, this.props.activeStyle) }
								: null);
					let t = !1;
					"undefined" != typeof window && window.IntersectionObserver && (t = !0), (this.state = { IOSupported: t }), (this.abortPrefetch = null), (this.handleRef = this.handleRef.bind(this));
				}
				_prefetch() {
					let e = window.location.pathname + window.location.search;
					this.props._location && this.props._location.pathname && (e = this.props._location.pathname + this.props._location.search);
					const t = u(v(this.props.to, e)),
						n = t.pathname + t.search;
					if (e !== n) return ___loader.enqueue(n);
				}
				componentWillUnmount() {
					if (!this.io) return;
					const { instance: e, el: t } = this.io;
					this.abortPrefetch && this.abortPrefetch.abort(), e.unobserve(t), e.disconnect();
				}
				handleRef(e) {
					this.props.innerRef && Object.prototype.hasOwnProperty.call(this.props.innerRef, "current") ? (this.props.innerRef.current = e) : this.props.innerRef && this.props.innerRef(e),
						this.state.IOSupported &&
							e &&
							(this.io = ((e, t) => {
								const n = new window.IntersectionObserver((n) => {
									n.forEach((n) => {
										e === n.target && t(n.isIntersecting || n.intersectionRatio > 0);
									});
								});
								return n.observe(e), { instance: n, el: e };
							})(e, (e) => {
								e ? (this.abortPrefetch = this._prefetch()) : this.abortPrefetch && this.abortPrefetch.abort();
							}));
				}
				render() {
					const e = this.props,
						{ to: t, getProps: n = this.defaultGetProps, onClick: r, onMouseEnter: a, state: s, replace: f, _location: p } = e,
						d = (function (e, t) {
							if (null == e) return {};
							var n,
								r,
								o = {},
								i = Object.keys(e);
							for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
							return o;
						})(e, b),
						h = v(t, p.pathname);
					return l(h)
						? o.createElement(
								i.Link,
								c(
									{
										to: h,
										state: s,
										getProps: n,
										innerRef: this.handleRef,
										onMouseEnter: (e) => {
											a && a(e);
											const t = u(h);
											___loader.hovering(t.pathname + t.search);
										},
										onClick: (e) => {
											if ((r && r(e), !(0 !== e.button || this.props.target || e.defaultPrevented || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey))) {
												e.preventDefault();
												let t = f;
												const n = encodeURI(h) === p.pathname;
												"boolean" != typeof f && n && (t = !0), window.___navigate(h, { state: s, replace: t });
											}
											return !0;
										},
									},
									d,
								),
							)
						: o.createElement("a", c({ href: h }, d));
				}
			}
			O.propTypes = c({}, g, { onClick: r.func, to: r.string.isRequired, replace: r.bool, state: r.object });
			const j = o.forwardRef((e, t) => o.createElement(w, c({ innerRef: t }, e))),
				S = (e, t) => {
					window.___navigate(v(e, window.location.pathname), t);
				};
		},
		8516: function (e, t, n) {
			"use strict";
			(t.__esModule = !0),
				(t.useScrollRestoration = function (e) {
					var t = (0, i.useLocation)(),
						n = (0, o.useContext)(r.ScrollContext),
						a = (0, o.useRef)(null);
					return (
						(0, o.useLayoutEffect)(
							function () {
								if (a.current) {
									var r = n.read(t, e);
									a.current.scrollTo(0, r || 0);
								}
							},
							[t.key],
						),
						{
							ref: a,
							onScroll: function () {
								a.current && n.save(t, e, a.current.scrollTop);
							},
						}
					);
				});
			var r = n(2926),
				o = n(3746),
				i = n(6620);
		},
		8523: function (e, t, n) {
			"use strict";
			e.exports = n(3447);
		},
		8536: function (e, t, n) {
			"use strict";
			t.RV = t.z_ = void 0;
			var r = n(2926);
			t.z_ = r.ScrollHandler;
			var o = n(8516);
			t.RV = o.useScrollRestoration;
		},
		9217: function (e, t, n) {
			"use strict";
			var r = n(4529);
		},
		9712: function (e, t) {
			t.U = function () {
				return "";
			};
		},
	},
	function (e) {
		e.O(0, [734, 198, 593, 869, 263, 296, 389, 7], function () {
			return (t = 4179), e((e.s = t));
			var t;
		});
		e.O();
	},
]);
//# sourceMappingURL=app-19c13fa4234ae8c2f47a.js.map

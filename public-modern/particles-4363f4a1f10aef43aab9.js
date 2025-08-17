"use strict";
(self.webpackChunkantonio_almena_portfolio = self.webpackChunkantonio_almena_portfolio || []).push([
	[300],
	{
		8957: function (t, r, e) {
			e.r(r),
				e.d(r, {
					Particles: function () {
						return P;
					},
					default: function () {
						return x;
					},
				});
			var n = e(9820),
				i = e(1204),
				o = e(8850),
				a = e(8484),
				s = e(4203),
				u = e(9553),
				c = e(2016),
				l = e(8748),
				p = e(6721),
				f = e.n(p),
				h = e(3746),
				y = e(7773);
			function d(t, r) {
				var e = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
				if (!e) {
					if (
						Array.isArray(t) ||
						(e = (function (t, r) {
							if (t) {
								if ("string" == typeof t) return v(t, r);
								var e = {}.toString.call(t).slice(8, -1);
								return (
									"Object" === e && t.constructor && (e = t.constructor.name),
									"Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? v(t, r) : void 0
								);
							}
						})(t)) ||
						(r && t && "number" == typeof t.length)
					) {
						e && (t = e);
						var n = 0,
							i = function () {};
						return {
							s: i,
							n: function () {
								return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
							},
							e: function (t) {
								throw t;
							},
							f: i,
						};
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
				}
				var o,
					a = !0,
					s = !1;
				return {
					s: function () {
						e = e.call(t);
					},
					n: function () {
						var t = e.next();
						return (a = t.done), t;
					},
					e: function (t) {
						(s = !0), (o = t);
					},
					f: function () {
						try {
							a || null == e.return || e.return();
						} finally {
							if (s) throw o;
						}
					},
				};
			}
			function v(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var e = 0, n = Array(r); e < r; e++) n[e] = t[e];
				return n;
			}
			var m = function (t) {
				return "object" == typeof t && null !== t;
			};
			function b(t, r) {
				var e =
					arguments.length > 2 && void 0 !== arguments[2]
						? arguments[2]
						: function () {
								return !1;
							};
				if (!m(t) || !m(r)) return t === r;
				var n = Object.keys(t).filter(function (t) {
						return !e(t);
					}),
					i = Object.keys(r).filter(function (t) {
						return !e(t);
					});
				if (n.length !== i.length) return !1;
				var o,
					a = d(n);
				try {
					for (a.s(); !(o = a.n()).done; ) {
						var s = o.value,
							u = t[s],
							c = r[s];
						if (m(u) && m(c)) {
							if (u === r && c === t) continue;
							if (!b(u, c, e)) return !1;
						} else if (Array.isArray(u) && Array.isArray(c)) {
							if (!A(u, c, e)) return !1;
						} else if (u !== c) return !1;
					}
				} catch (l) {
					a.e(l);
				} finally {
					a.f();
				}
				return !0;
			}
			function A(t, r, e) {
				if (t.length !== r.length) return !1;
				for (var n = 0; n < t.length; n++) {
					var i = t[n],
						o = r[n];
					if (Array.isArray(i) && Array.isArray(o)) {
						if (!A(i, o, e)) return !1;
					} else if (m(i) && m(o)) {
						if (!b(i, o, e)) return !1;
					} else if (i !== o) return !1;
				}
				return !0;
			}
			function g(t, r) {
				var e = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					r &&
						(n = n.filter(function (r) {
							return Object.getOwnPropertyDescriptor(t, r).enumerable;
						})),
						e.push.apply(e, n);
				}
				return e;
			}
			function k(t) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {};
					r % 2
						? g(Object(e), !0).forEach(function (r) {
								(0, n.A)(t, r, e[r]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
							: g(Object(e)).forEach(function (r) {
									Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
								});
				}
				return t;
			}
			function w() {
				try {
					var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (t) {}
				return (w = function () {
					return !!t;
				})();
			}
			var O = "tsparticles",
				j = (function (t) {
					function r(t) {
						var e, n, i, a;
						return (
							(0, o.A)(this, r),
							(n = this),
							(i = r),
							(a = [t]),
							(i = (0, u.A)(i)),
							((e = (0, s.A)(n, w() ? Reflect.construct(i, a || [], (0, u.A)(n).constructor) : i.apply(n, a))).state = { init: !1, library: void 0 }),
							e
						);
					}
					return (
						(0, l.A)(r, t),
						(0, a.A)(r, [
							{
								key: "destroy",
								value: function () {
									this.state.library && (this.state.library.destroy(), this.setState({ library: void 0 }));
								},
							},
							{
								key: "shouldComponentUpdate",
								value: function (t) {
									var r,
										e,
										n = null !== (r = t.options) && void 0 !== r ? r : t.params,
										i = null !== (e = this.props.options) && void 0 !== e ? e : this.props.params;
									return (
										t.url !== this.props.url ||
										t.id !== this.props.id ||
										t.canvasClassName !== this.props.canvasClassName ||
										t.className !== this.props.className ||
										t.height !== this.props.height ||
										t.width !== this.props.width ||
										!b(t.style, this.props.style) ||
										t.init !== this.props.init ||
										t.loaded !== this.props.loaded ||
										!b(n, i, function (t) {
											return t.startsWith("_");
										})
									);
								},
							},
							{
								key: "componentDidUpdate",
								value: function () {
									this.refresh();
								},
							},
							{
								key: "forceUpdate",
								value: function () {
									var t = this;
									this.refresh().then(function () {
										var e, n, i, o, a;
										((e = r),
										(n = "forceUpdate"),
										(i = t),
										(o = 3),
										(a = (0, c.A)((0, u.A)(1 & o ? e.prototype : e), n, i)),
										2 & o && "function" == typeof a
											? function (t) {
													return a.apply(i, t);
												}
											: a)([]);
									});
								},
							},
							{
								key: "componentDidMount",
								value: function () {
									var t = this;
									(0, i.A)(
										f().mark(function r() {
											return f().wrap(function (r) {
												for (;;)
													switch ((r.prev = r.next)) {
														case 0:
															if (!t.props.init) {
																r.next = 3;
																break;
															}
															return (r.next = 3), t.props.init(y.$k);
														case 3:
															t.setState(
																{ init: !0 },
																(0, i.A)(
																	f().mark(function r() {
																		return f().wrap(function (r) {
																			for (;;)
																				switch ((r.prev = r.next)) {
																					case 0:
																						return (r.next = 2), t.loadParticles();
																					case 2:
																					case "end":
																						return r.stop();
																				}
																		}, r);
																	}),
																),
															);
														case 4:
														case "end":
															return r.stop();
													}
											}, r);
										}),
									)();
								},
							},
							{
								key: "componentWillUnmount",
								value: function () {
									this.destroy();
								},
							},
							{
								key: "render",
								value: function () {
									var t = this.props,
										r = t.width,
										e = t.height,
										n = t.className,
										i = t.canvasClassName,
										o = t.id;
									return h.createElement("div", { className: n, id: o }, h.createElement("canvas", { className: i, style: k(k({}, this.props.style), {}, { width: r, height: e }) }));
								},
							},
							{
								key: "refresh",
								value:
									((n = (0, i.A)(
										f().mark(function t() {
											return f().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return this.destroy(), (t.next = 3), this.loadParticles();
															case 3:
															case "end":
																return t.stop();
														}
												},
												t,
												this,
											);
										}),
									)),
									function () {
										return n.apply(this, arguments);
									}),
							},
							{
								key: "loadParticles",
								value:
									((e = (0, i.A)(
										f().mark(function t() {
											var e, n, i, o, a;
											return f().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																if (this.state.init) {
																	t.next = 2;
																	break;
																}
																return t.abrupt("return");
															case 2:
																return (
																	(o = null !== (e = null !== (n = this.props.id) && void 0 !== n ? n : r.defaultProps.id) && void 0 !== e ? e : O),
																	(t.next = 5),
																	y.$k.load({ url: this.props.url, id: o, options: null !== (i = this.props.options) && void 0 !== i ? i : this.props.params })
																);
															case 5:
																if (((a = t.sent), this.props.container && (this.props.container.current = a), this.setState({ library: a }), !this.props.loaded)) {
																	t.next = 11;
																	break;
																}
																return (t.next = 11), this.props.loaded(a);
															case 11:
															case "end":
																return t.stop();
														}
												},
												t,
												this,
											);
										}),
									)),
									function () {
										return e.apply(this, arguments);
									}),
							},
						])
					);
					var e, n;
				})(h.Component);
			j.defaultProps = { width: "100%", height: "100%", options: {}, style: {}, url: void 0, id: O };
			var P = j,
				x = j;
		},
	},
]);
//# sourceMappingURL=particles-4363f4a1f10aef43aab9.js.map

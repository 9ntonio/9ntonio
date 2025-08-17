"use strict";
(self.webpackChunkantonio_almena_portfolio = self.webpackChunkantonio_almena_portfolio || []).push([
	[906],
	{
		319: function (t, n, r) {
			r.d(n, {
				AE: function () {
					return d;
				},
				B9: function () {
					return c;
				},
				E9: function () {
					return b;
				},
				Et: function () {
					return A;
				},
				Gv: function () {
					return z;
				},
				Kg: function () {
					return M;
				},
				Lm: function () {
					return w;
				},
				TA: function () {
					return p;
				},
				Tj: function () {
					return v;
				},
				Tn: function () {
					return k;
				},
				Vh: function () {
					return h;
				},
				Xs: function () {
					return m;
				},
				cy: function () {
					return T;
				},
				hn: function () {
					return s;
				},
				lV: function () {
					return f;
				},
				tG: function () {
					return l;
				},
				tZ: function () {
					return a;
				},
				wJ: function () {
					return g;
				},
				zw: function () {
					return y;
				},
			});
			var e = r(5285),
				i = (r(6721), r(4904)),
				o = ["mode"],
				u = { debug: console.debug, error: console.error, info: console.info, log: console.log, verbose: console.log, warning: console.warn };
			function a() {
				return u;
			}
			function c() {
				return "undefined" == typeof window || !window || void 0 === window.document || !window.document;
			}
			function f(t) {
				if (!c() && "undefined" != typeof matchMedia) return matchMedia(t);
			}
			function l(t) {
				if (!c() && "undefined" != typeof MutationObserver) return new MutationObserver(t);
			}
			function s(t, n) {
				return t === n || (T(n) && n.indexOf(t) > -1);
			}
			function h(t, n) {
				return t[
					void 0 !== n && (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
						? n % t.length
						: (function (t) {
								return Math.floor((0, i.G0)() * t.length);
							})(t)
				];
			}
			function v(t, n, r, e, i) {
				return (function (t, n, r, e) {
					var i = !0;
					(e && "bottom" !== e) || (i = t.top < n.height + r.x);
					!i || (e && "left" !== e) || (i = t.right > r.x);
					!i || (e && "right" !== e) || (i = t.left < n.width + r.y);
					!i || (e && "top" !== e) || (i = t.bottom > r.y);
					return i;
				})(d(t, null != e ? e : 0), n, r, i);
			}
			function d(t, n) {
				return { bottom: t.y + n, left: t.x - n, right: t.x + n, top: t.y - n };
			}
			function y(t) {
				for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
				for (var i = 0, o = r; i < o.length; i++) {
					var u = o[i];
					if (null != u)
						if (z(u)) {
							var a = Array.isArray(u);
							!a || (!z(t) && t && Array.isArray(t)) ? a || (!z(t) && t && !Array.isArray(t)) || (t = {}) : (t = []);
							var c = function (n) {
								if ("__proto__" === n) return 1;
								var r = u[n],
									e = t;
								e[n] =
									z(r) && Array.isArray(r)
										? r.map(function (t) {
												return y(e[n], t);
											})
										: y(e[n], r);
							};
							for (var f in u) c(f);
						} else t = u;
				}
				return t;
			}
			function g(t, n) {
				return T(t)
					? t.map(function (t, r) {
							return n(t, r);
						})
					: n(t, 0);
			}
			function p(t, n, r) {
				return T(t) ? h(t, n, r) : t;
			}
			function m(t, n) {
				var r = t.value,
					e = t.animation,
					o = { delayTime: 1e3 * (0, i.VG)(e.delay), enable: e.enable, value: (0, i.VG)(t.value) * n, max: (0, i.W9)(r) * n, min: (0, i.Sg)(r) * n, loops: 0, maxLoops: (0, i.VG)(e.count), time: 0 };
				if (e.enable) {
					switch (((o.decay = 1 - (0, i.VG)(e.decay)), e.mode)) {
						case "increase":
							o.status = "increasing";
							break;
						case "decrease":
							o.status = "decreasing";
							break;
						case "random":
							o.status = (0, i.G0)() >= 0.5 ? "increasing" : "decreasing";
					}
					var u = "auto" === e.mode;
					switch (e.startValue) {
						case "min":
							(o.value = o.min), u && (o.status = "increasing");
							break;
						case "max":
							(o.value = o.max), u && (o.status = "decreasing");
							break;
						default:
							(o.value = (0, i.U4)(o)), u && (o.status = (0, i.G0)() >= 0.5 ? "increasing" : "decreasing");
					}
				}
				return (o.initialValue = o.value), o;
			}
			function x(t, n) {
				if (!("percent" === t.mode)) {
					t.mode;
					return (0, e.A)(t, o);
				}
				return "x" in t ? { x: (t.x / 100) * n.width, y: (t.y / 100) * n.height } : { width: (t.width / 100) * n.width, height: (t.height / 100) * n.height };
			}
			function b(t, n) {
				return x(t, n);
			}
			function w(t) {
				return "boolean" == typeof t;
			}
			function M(t) {
				return "string" == typeof t;
			}
			function A(t) {
				return "number" == typeof t;
			}
			function k(t) {
				return "function" == typeof t;
			}
			function z(t) {
				return "object" == typeof t && null !== t;
			}
			function T(t) {
				return Array.isArray(t);
			}
		},
		2426: function (t, n, r) {
			r.d(n, {
				j: function () {
					return h;
				},
			});
			var e = r(8850),
				i = r(8484),
				o = r(4203),
				u = r(9553),
				a = r(8748),
				c = r(7981),
				f = r(2825),
				l = r(4904);
			function s() {
				try {
					var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (t) {}
				return (s = function () {
					return !!t;
				})();
			}
			var h = (function (t) {
				function n(t, r, i) {
					var a, c, f, l;
					return (
						(0, e.A)(this, n), (c = this), (f = n), (l = [t, r]), (f = (0, u.A)(f)), ((a = (0, o.A)(c, s() ? Reflect.construct(f, l || [], (0, u.A)(c).constructor) : f.apply(c, l))).radius = i), a
					);
				}
				return (
					(0, a.A)(n, t),
					(0, i.A)(n, [
						{
							key: "contains",
							value: function (t) {
								return (0, l.Yf)(t, this.position) <= this.radius;
							},
						},
						{
							key: "intersects",
							value: function (t) {
								var r = this.position,
									e = t.position,
									i = { x: Math.abs(e.x - r.x), y: Math.abs(e.y - r.y) },
									o = this.radius;
								if (t instanceof n) return o + t.radius > Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2));
								if (t instanceof f.M) {
									var u = t.size,
										a = u.width,
										c = u.height;
									return Math.pow(i.x - a, 2) + Math.pow(i.y - c, 2) <= Math.pow(o, 2) || (i.x <= o + a && i.y <= o + c) || i.x <= a || i.y <= c;
								}
								return !1;
							},
						},
					])
				);
			})(c.Q);
		},
		2584: function (t, n, r) {
			r.d(n, {
				BN: function () {
					return d;
				},
				LC: function () {
					return M;
				},
				O_: function () {
					return z;
				},
				PG: function () {
					return k;
				},
				R5: function () {
					return g;
				},
				YL: function () {
					return m;
				},
				_h: function () {
					return A;
				},
				a9: function () {
					return s;
				},
				ay: function () {
					return x;
				},
				pz: function () {
					return T;
				},
				xx: function () {
					return w;
				},
			});
			var e = r(8419),
				i = r(4904),
				o = r(319);
			function u(t, n) {
				var r = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
				if (!r) {
					if (
						Array.isArray(t) ||
						(r = (function (t, n) {
							if (t) {
								if ("string" == typeof t) return a(t, n);
								var r = {}.toString.call(t).slice(8, -1);
								return (
									"Object" === r && t.constructor && (r = t.constructor.name),
									"Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(t, n) : void 0
								);
							}
						})(t)) ||
						(n && t && "number" == typeof t.length)
					) {
						r && (t = r);
						var e = 0,
							i = function () {};
						return {
							s: i,
							n: function () {
								return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
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
					u = !0,
					c = !1;
				return {
					s: function () {
						r = r.call(t);
					},
					n: function () {
						var t = r.next();
						return (u = t.done), t;
					},
					e: function (t) {
						(c = !0), (o = t);
					},
					f: function () {
						try {
							u || null == r.return || r.return();
						} finally {
							if (c) throw o;
						}
					},
				};
			}
			function a(t, n) {
				(null == n || n > t.length) && (n = t.length);
				for (var r = 0, e = Array(n); r < n; r++) e[r] = t[r];
				return e;
			}
			var c = "random",
				f = "mid",
				l = new Map();
			function s(t) {
				l.set(t.key, t);
			}
			function h(t, n, r) {
				return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (n - t) * r : r < 0.5 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
			}
			function v(t) {
				var n,
					r = u(l);
				try {
					for (r.s(); !(n = r.n()).done; ) {
						var i = (0, e.A)(n.value, 2)[1];
						if (t.startsWith(i.stringPrefix)) return i.parseString(t);
					}
				} catch (c) {
					r.e(c);
				} finally {
					r.f();
				}
				var o = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, function (t, n, r, e, i) {
						return n + n + r + r + e + e + (void 0 !== i ? i + i : "");
					}),
					a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(o);
				return a ? { a: void 0 !== a[4] ? parseInt(a[4], 16) / 255 : 1, b: parseInt(a[3], 16), g: parseInt(a[2], 16), r: parseInt(a[1], 16) } : void 0;
			}
			function d(t, n) {
				var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
				if (t) {
					var i = (0, o.Kg)(t) ? { value: t } : t;
					if ((0, o.Kg)(i.value)) return y(i.value, n, r);
					if ((0, o.cy)(i.value)) return d({ value: (0, o.Vh)(i.value, n, r) });
					var a,
						c = u(l);
					try {
						for (c.s(); !(a = c.n()).done; ) {
							var f = (0, e.A)(a.value, 2)[1].handleRangeColor(i);
							if (f) return f;
						}
					} catch (s) {
						c.e(s);
					} finally {
						c.f();
					}
				}
			}
			function y(t, n) {
				var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
				if (t) {
					var i = (0, o.Kg)(t) ? { value: t } : t;
					if ((0, o.Kg)(i.value))
						return i.value === c
							? b()
							: (function (t) {
									return v(t);
								})(i.value);
					if ((0, o.cy)(i.value)) return y({ value: (0, o.Vh)(i.value, n, r) });
					var a,
						f = u(l);
					try {
						for (f.s(); !(a = f.n()).done; ) {
							var s = (0, e.A)(a.value, 2)[1].handleColor(i);
							if (s) return s;
						}
					} catch (h) {
						f.e(h);
					} finally {
						f.f();
					}
				}
			}
			function g(t, n) {
				var r = d(t, n, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]);
				return r ? p(r) : void 0;
			}
			function p(t) {
				var n = t.r / 255,
					r = t.g / 255,
					e = t.b / 255,
					i = Math.max(n, r, e),
					o = Math.min(n, r, e),
					u = { h: 0, l: (i + o) / 2, s: 0 };
				return (
					i !== o && ((u.s = u.l < 0.5 ? (i - o) / (i + o) : (i - o) / (2 - i - o)), (u.h = n === i ? (r - e) / (i - o) : (u.h = r === i ? 2 + (e - n) / (i - o) : 4 + (n - r) / (i - o)))),
					(u.l *= 100),
					(u.s *= 100),
					(u.h *= 60),
					u.h < 0 && (u.h += 360),
					u.h >= 360 && (u.h -= 360),
					u
				);
			}
			function m(t) {
				var n = { b: 0, g: 0, r: 0 },
					r = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
				if (r.s) {
					var e = r.l < 0.5 ? r.l * (1 + r.s) : r.l + r.s - r.l * r.s,
						i = 2 * r.l - e;
					(n.r = h(i, e, r.h + 1 / 3)), (n.g = h(i, e, r.h)), (n.b = h(i, e, r.h - 1 / 3));
				} else n.r = n.g = n.b = r.l;
				return (n.r = Math.floor(255 * n.r)), (n.g = Math.floor(255 * n.g)), (n.b = Math.floor(255 * n.b)), n;
			}
			function x(t) {
				var n = m(t);
				return { a: t.a, b: n.b, g: n.g, r: n.r };
			}
			function b(t) {
				var n = null != t ? t : 0;
				return { b: Math.floor((0, i.U4)((0, i.DT)(n, 256))), g: Math.floor((0, i.U4)((0, i.DT)(n, 256))), r: Math.floor((0, i.U4)((0, i.DT)(n, 256))) };
			}
			function w(t, n) {
				return "rgba("
					.concat(t.r, ", ")
					.concat(t.g, ", ")
					.concat(t.b, ", ")
					.concat(null != n ? n : 1, ")");
			}
			function M(t, n) {
				return "hsla("
					.concat(t.h, ", ")
					.concat(t.s, "%, ")
					.concat(t.l, "%, ")
					.concat(null != n ? n : 1, ")");
			}
			function A(t, n, r) {
				if (r === c) return b();
				if (r !== f) return r;
				var e,
					o,
					u = null !== (e = t.getFillColor()) && void 0 !== e ? e : t.getStrokeColor(),
					a = null !== (o = null == n ? void 0 : n.getFillColor()) && void 0 !== o ? o : null == n ? void 0 : n.getStrokeColor();
				if (u && a && n)
					return (
						(l = u),
						(s = a),
						(h = t.getRadius()),
						(v = n.getRadius()),
						(y = s),
						void 0 === (d = l).r && (d = m(l)),
						void 0 === y.r && (y = m(s)),
						{ b: (0, i.jh)(d.b, y.b, h, v), g: (0, i.jh)(d.g, y.g, h, v), r: (0, i.jh)(d.r, y.r, h, v) }
					);
				var l,
					s,
					h,
					v,
					d,
					y,
					g = null != u ? u : a;
				return g ? m(g) : void 0;
			}
			function k(t, n, r) {
				var e = (0, o.Kg)(t) ? t : t.value;
				return e === c ? (r ? d({ value: e }) : n ? c : f) : e === f ? f : d({ value: e });
			}
			function z(t) {
				return void 0 !== t ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0;
			}
			function T(t, n, r) {
				var e = { h: { enable: !1, value: t.h }, s: { enable: !1, value: t.s }, l: { enable: !1, value: t.l } };
				return n && (P(e.h, n.h, r), P(e.s, n.s, r), P(e.l, n.l, r)), e;
			}
			function P(t, n, r) {
				(t.enable = n.enable),
					t.enable
						? ((t.velocity = ((0, i.VG)(n.speed) / 100) * r),
							(t.decay = 1 - (0, i.VG)(n.decay)),
							(t.status = "increasing"),
							(t.loops = 0),
							(t.maxLoops = (0, i.VG)(n.count)),
							(t.time = 0),
							(t.delayTime = 1e3 * (0, i.VG)(n.delay)),
							n.sync || ((t.velocity *= (0, i.G0)()), (t.value *= (0, i.G0)())),
							(t.initialValue = t.value))
						: (t.velocity = 0);
			}
		},
		2825: function (t, n, r) {
			r.d(n, {
				M: function () {
					return l;
				},
			});
			var e = r(8850),
				i = r(8484),
				o = r(4203),
				u = r(9553),
				a = r(8748),
				c = r(2426);
			function f() {
				try {
					var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (t) {}
				return (f = function () {
					return !!t;
				})();
			}
			var l = (function (t) {
				function n(t, r, i, a) {
					var c, l, s, h;
					return (
						(0, e.A)(this, n),
						(l = this),
						(s = n),
						(h = [t, r]),
						(s = (0, u.A)(s)),
						((c = (0, o.A)(l, f() ? Reflect.construct(s, h || [], (0, u.A)(l).constructor) : s.apply(l, h))).size = { height: a, width: i }),
						c
					);
				}
				return (
					(0, a.A)(n, t),
					(0, i.A)(n, [
						{
							key: "contains",
							value: function (t) {
								var n = this.size.width,
									r = this.size.height,
									e = this.position;
								return t.x >= e.x && t.x <= e.x + n && t.y >= e.y && t.y <= e.y + r;
							},
						},
						{
							key: "intersects",
							value: function (t) {
								t instanceof c.j && t.intersects(this);
								var r = this.size.width,
									e = this.size.height,
									i = this.position,
									o = t.position,
									u = t instanceof n ? t.size : { width: 0, height: 0 },
									a = u.width,
									f = u.height;
								return o.x < i.x + r && o.x + a > i.x && o.y < i.y + e && o.y + f > i.y;
							},
						},
					])
				);
			})(r(7981).Q);
		},
		2870: function (t, n, r) {
			r.d(n, {
				p: function () {
					return a;
				},
			});
			var e = r(8850),
				i = r(8484),
				o = r(7005),
				u = r(319),
				a = (function () {
					function t(n, r, i) {
						var a = this;
						if (
							((0, e.A)(this, t),
							(this._updateFromAngle = function (t, n) {
								(a.x = Math.cos(t) * n), (a.y = Math.sin(t) * n);
							}),
							!(0, u.Et)(n) && n)
						) {
							(this.x = n.x), (this.y = n.y);
							var c = n;
							this.z = c.z ? c.z : 0;
						} else {
							if (void 0 === n || void 0 === r) throw new Error("".concat(o.dI, " Vector3d not initialized correctly"));
							(this.x = n), (this.y = r), (this.z = null != i ? i : 0);
						}
					}
					return (0, i.A)(
						t,
						[
							{
								key: "angle",
								get: function () {
									return Math.atan2(this.y, this.x);
								},
								set: function (t) {
									this._updateFromAngle(t, this.length);
								},
							},
							{
								key: "length",
								get: function () {
									return Math.sqrt(this.getLengthSq());
								},
								set: function (t) {
									this._updateFromAngle(this.angle, t);
								},
							},
							{
								key: "add",
								value: function (n) {
									return t.create(this.x + n.x, this.y + n.y, this.z + n.z);
								},
							},
							{
								key: "addTo",
								value: function (t) {
									(this.x += t.x), (this.y += t.y), (this.z += t.z);
								},
							},
							{
								key: "copy",
								value: function () {
									return t.clone(this);
								},
							},
							{
								key: "distanceTo",
								value: function (t) {
									return this.sub(t).length;
								},
							},
							{
								key: "distanceToSq",
								value: function (t) {
									return this.sub(t).getLengthSq();
								},
							},
							{
								key: "div",
								value: function (n) {
									return t.create(this.x / n, this.y / n, this.z / n);
								},
							},
							{
								key: "divTo",
								value: function (t) {
									(this.x /= t), (this.y /= t), (this.z /= t);
								},
							},
							{
								key: "getLengthSq",
								value: function () {
									return Math.pow(this.x, 2) + Math.pow(this.y, 2);
								},
							},
							{
								key: "mult",
								value: function (n) {
									return t.create(this.x * n, this.y * n, this.z * n);
								},
							},
							{
								key: "multTo",
								value: function (t) {
									(this.x *= t), (this.y *= t), (this.z *= t);
								},
							},
							{
								key: "normalize",
								value: function () {
									var t = this.length;
									0 != t && this.multTo(1 / t);
								},
							},
							{
								key: "rotate",
								value: function (n) {
									return t.create(this.x * Math.cos(n) - this.y * Math.sin(n), this.x * Math.sin(n) + this.y * Math.cos(n), 0);
								},
							},
							{
								key: "setTo",
								value: function (t) {
									(this.x = t.x), (this.y = t.y);
									var n = t;
									this.z = n.z ? n.z : 0;
								},
							},
							{
								key: "sub",
								value: function (n) {
									return t.create(this.x - n.x, this.y - n.y, this.z - n.z);
								},
							},
							{
								key: "subFrom",
								value: function (t) {
									(this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
								},
							},
						],
						[
							{
								key: "origin",
								get: function () {
									return t.create(0, 0, 0);
								},
							},
							{
								key: "clone",
								value: function (n) {
									return t.create(n.x, n.y, n.z);
								},
							},
							{
								key: "create",
								value: function (n, r, e) {
									return new t(n, r, e);
								},
							},
						],
					);
				})();
		},
		4277: function (t, n, r) {
			r.d(n, {
				O: function () {
					return u;
				},
			});
			var e = r(8850),
				i = r(8484),
				o = r(319),
				u = (function () {
					function t() {
						(0, e.A)(this, t), (this.value = "");
					}
					return (0, i.A)(
						t,
						[
							{
								key: "load",
								value: function (t) {
									void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value);
								},
							},
						],
						[
							{
								key: "create",
								value: function (n, r) {
									var e = new t();
									return e.load(n), void 0 !== r && ((0, o.Kg)(r) || (0, o.cy)(r) ? e.load({ value: r }) : e.load(r)), e;
								},
							},
						],
					);
				})();
		},
		4904: function (t, n, r) {
			r.d(n, {
				$m: function () {
					return m;
				},
				DT: function () {
					return v;
				},
				G0: function () {
					return u;
				},
				JY: function () {
					return p;
				},
				M3: function () {
					return b;
				},
				Nx: function () {
					return x;
				},
				Sg: function () {
					return s;
				},
				U4: function () {
					return f;
				},
				VG: function () {
					return l;
				},
				W9: function () {
					return h;
				},
				Yf: function () {
					return g;
				},
				_W: function () {
					return d;
				},
				jh: function () {
					return c;
				},
				qE: function () {
					return a;
				},
				vr: function () {
					return y;
				},
			});
			var e = r(319),
				i = r(6234),
				o = Math.random;
			new Map();
			function u() {
				return a(o(), 0, 1 - 1e-16);
			}
			function a(t, n, r) {
				return Math.min(Math.max(t, n), r);
			}
			function c(t, n, r, e) {
				return Math.floor((t * r + n * e) / (r + e));
			}
			function f(t) {
				var n = h(t),
					r = s(t);
				return n === r && (r = 0), u() * (n - r) + r;
			}
			function l(t) {
				return (0, e.Et)(t) ? t : f(t);
			}
			function s(t) {
				return (0, e.Et)(t) ? t : t.min;
			}
			function h(t) {
				return (0, e.Et)(t) ? t : t.max;
			}
			function v(t, n) {
				if (t === n || (void 0 === n && (0, e.Et)(t))) return t;
				var r = s(t),
					i = h(t);
				return void 0 !== n ? { min: Math.min(r, n), max: Math.max(i, n) } : v(r, i);
			}
			function d(t) {
				var n = t.random,
					r = (0, e.Lm)(n) ? { enable: n, minimumValue: 0 } : n,
					i = r.enable,
					o = r.minimumValue;
				return l(i ? v(t.value, o) : t.value);
			}
			function y(t, n) {
				var r = t.x - n.x,
					e = t.y - n.y;
				return { dx: r, dy: e, distance: Math.sqrt(Math.pow(r, 2) + Math.pow(e, 2)) };
			}
			function g(t, n) {
				return y(t, n).distance;
			}
			function p(t, n, r) {
				if ((0, e.Et)(t)) return (t * Math.PI) / 180;
				switch (t) {
					case "top":
						return -Math.PI / 2;
					case "top-right":
						return -Math.PI / 4;
					case "right":
						return 0;
					case "bottom-right":
						return Math.PI / 4;
					case "bottom":
						return Math.PI / 2;
					case "bottom-left":
						return (3 * Math.PI) / 4;
					case "left":
						return Math.PI;
					case "top-left":
						return (-3 * Math.PI) / 4;
					case "inside":
						return Math.atan2(r.y - n.y, r.x - n.x);
					case "outside":
						return Math.atan2(n.y - r.y, n.x - r.x);
					default:
						return u() * Math.PI * 2;
				}
			}
			function m(t) {
				var n = i.M.origin;
				return (n.length = 1), (n.angle = t), n;
			}
			function x(t) {
				var n, r, e, i;
				return {
					x: null !== (n = null === (r = t.position) || void 0 === r ? void 0 : r.x) && void 0 !== n ? n : u() * t.size.width,
					y: null !== (e = null === (i = t.position) || void 0 === i ? void 0 : i.y) && void 0 !== e ? e : u() * t.size.height,
				};
			}
			function b(t) {
				return t ? (t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)) : 1;
			}
		},
		6234: function (t, n, r) {
			r.d(n, {
				M: function () {
					return f;
				},
			});
			var e = r(8850),
				i = r(8484),
				o = r(4203),
				u = r(9553),
				a = r(8748);
			function c() {
				try {
					var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
				} catch (t) {}
				return (c = function () {
					return !!t;
				})();
			}
			var f = (function (t) {
				function n(t, r) {
					return (0, e.A)(this, n), (i = this), (a = n), (f = [t, r, 0]), (a = (0, u.A)(a)), (0, o.A)(i, c() ? Reflect.construct(a, f || [], (0, u.A)(i).constructor) : a.apply(i, f));
					var i, a, f;
				}
				return (
					(0, a.A)(n, t),
					(0, i.A)(n, null, [
						{
							key: "origin",
							get: function () {
								return n.create(0, 0);
							},
						},
						{
							key: "clone",
							value: function (t) {
								return n.create(t.x, t.y);
							},
						},
						{
							key: "create",
							value: function (t, r) {
								return new n(t, r);
							},
						},
					])
				);
			})(r(2870).p);
		},
		6563: function (t, n, r) {
			r.d(n, {
				D4: function () {
					return o;
				},
				IU: function () {
					return c;
				},
				Md: function () {
					return a;
				},
				Sn: function () {
					return u;
				},
				V6: function () {
					return i;
				},
				Wb: function () {
					return s;
				},
				e_: function () {
					return l;
				},
				p0: function () {
					return f;
				},
				yx: function () {
					return h;
				},
			});
			var e = r(2584);
			function i(t, n, r) {
				t.beginPath(), t.moveTo(n.x, n.y), t.lineTo(r.x, r.y), t.closePath();
			}
			function o(t, n, r, e) {
				t.beginPath(), t.moveTo(n.x, n.y), t.lineTo(r.x, r.y), t.lineTo(e.x, e.y), t.closePath();
			}
			function u(t, n, r) {
				(t.fillStyle = null != r ? r : "rgba(0,0,0,0)"), t.fillRect(0, 0, n.width, n.height);
			}
			function a(t, n, r, e) {
				r && ((t.globalAlpha = e), t.drawImage(r, 0, 0, n.width, n.height), (t.globalAlpha = 1));
			}
			function c(t, n) {
				t.clearRect(0, 0, n.width, n.height);
			}
			function f(t) {
				var n,
					r,
					i,
					o,
					u,
					a = t.container,
					c = t.context,
					f = t.particle,
					l = t.delta,
					s = t.colorStyles,
					h = t.backgroundMask,
					v = t.composite,
					d = t.radius,
					y = t.opacity,
					g = t.shadow,
					p = t.transform,
					m = f.getPosition(),
					x = f.rotation + (f.pathRotation ? f.velocity.angle : 0),
					b = Math.sin(x),
					w = Math.cos(x),
					M = {
						a: w * (null !== (n = p.a) && void 0 !== n ? n : 1),
						b: b * (null !== (r = p.b) && void 0 !== r ? r : 1),
						c: -b * (null !== (i = p.c) && void 0 !== i ? i : 1),
						d: w * (null !== (o = p.d) && void 0 !== o ? o : 1),
					};
				c.setTransform(M.a, M.b, M.c, M.d, m.x, m.y), c.beginPath(), h && (c.globalCompositeOperation = v);
				var A = f.shadowColor;
				g.enable && A && ((c.shadowBlur = g.blur), (c.shadowColor = (0, e.xx)(A)), (c.shadowOffsetX = g.offset.x), (c.shadowOffsetY = g.offset.y)), s.fill && (c.fillStyle = s.fill);
				var k = null !== (u = f.strokeWidth) && void 0 !== u ? u : 0;
				(c.lineWidth = k),
					s.stroke && (c.strokeStyle = s.stroke),
					(function (t, n, r, e, i, o) {
						if (!r.shape) return;
						var u = t.drawers.get(r.shape);
						if (!u) return;
						u.draw(n, r, e, i, o, t.retina.pixelRatio);
					})(a, c, f, d, y, l),
					k > 0 && c.stroke(),
					f.close && c.closePath(),
					f.fill && c.fill(),
					(function (t, n, r, e, i, o) {
						if (!r.shape) return;
						var u = t.drawers.get(r.shape);
						if (!u || !u.afterEffect) return;
						u.afterEffect(n, r, e, i, o, t.retina.pixelRatio);
					})(a, c, f, d, y, l),
					(c.globalCompositeOperation = "source-over"),
					c.setTransform(1, 0, 0, 1, 0, 0);
			}
			function l(t, n, r) {
				n.draw && n.draw(t, r);
			}
			function s(t, n, r, e) {
				n.drawParticle && n.drawParticle(t, r, e);
			}
			function h(t, n, r) {
				return { h: t.h, s: t.s, l: t.l + ("darken" === n ? -1 : 1) * r };
			}
		},
		7005: function (t, n, r) {
			r.d(n, {
				Bp: function () {
					return l;
				},
				DG: function () {
					return s;
				},
				G3: function () {
					return h;
				},
				NF: function () {
					return v;
				},
				Rb: function () {
					return c;
				},
				Z0: function () {
					return u;
				},
				dI: function () {
					return y;
				},
				eb: function () {
					return e;
				},
				ms: function () {
					return i;
				},
				nK: function () {
					return d;
				},
				s7: function () {
					return f;
				},
				sf: function () {
					return a;
				},
				vo: function () {
					return o;
				},
			});
			var e = "generated",
				i = "pointerdown",
				o = "pointerup",
				u = "pointerleave",
				a = "pointerout",
				c = "pointermove",
				f = "touchstart",
				l = "touchend",
				s = "touchmove",
				h = "touchcancel",
				v = "resize",
				d = "visibilitychange",
				y = "tsParticles - Error";
		},
		7981: function (t, n, r) {
			r.d(n, {
				Q: function () {
					return o;
				},
			});
			var e = r(8484),
				i = r(8850),
				o = (0, e.A)(function t(n, r) {
					(0, i.A)(this, t), (this.position = { x: n, y: r });
				});
		},
	},
]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687-c7e4286aa4f85703979f.js.map

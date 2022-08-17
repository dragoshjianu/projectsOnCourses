/* a11y-slider - v0.4.15
 * https://github.com/mmahandev/a11y-slider
 * Copyright (c) 2022 mmahandev. Licensed MIT */
!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define(t)
		: ((e = e || self).A11YSlider = t());
})(this, function () {
	'use strict';
	var e =
		'undefined' != typeof globalThis
			? globalThis
			: 'undefined' != typeof window
			? window
			: 'undefined' != typeof global
			? global
			: 'undefined' != typeof self
			? self
			: {};
	function t(e, t) {
		return e((t = { exports: {} }), t.exports), t.exports;
	}
	var i = function (e) {
			return e && e.Math == Math && e;
		},
		n =
			i('object' == typeof globalThis && globalThis) ||
			i('object' == typeof window && window) ||
			i('object' == typeof self && self) ||
			i('object' == typeof e && e) ||
			Function('return this')(),
		r = function (e) {
			try {
				return !!e();
			} catch (e) {
				return !0;
			}
		},
		s = !r(function () {
			return (
				7 !=
				Object.defineProperty({}, 1, {
					get: function () {
						return 7;
					},
				})[1]
			);
		}),
		o = {}.propertyIsEnumerable,
		a = Object.getOwnPropertyDescriptor,
		l = {
			f:
				a && !o.call({ 1: 2 }, 1)
					? function (e) {
							var t = a(this, e);
							return !!t && t.enumerable;
					  }
					: o,
		},
		u = function (e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t,
			};
		},
		c = {}.toString,
		d = function (e) {
			return c.call(e).slice(8, -1);
		},
		h = ''.split,
		f = r(function () {
			return !Object('z').propertyIsEnumerable(0);
		})
			? function (e) {
					return 'String' == d(e) ? h.call(e, '') : Object(e);
			  }
			: Object,
		p = function (e) {
			if (null == e) throw TypeError("Can't call method on " + e);
			return e;
		},
		v = function (e) {
			return f(p(e));
		},
		y = function (e) {
			return 'object' == typeof e ? null !== e : 'function' == typeof e;
		},
		b = function (e, t) {
			if (!y(e)) return e;
			var i, n;
			if (t && 'function' == typeof (i = e.toString) && !y((n = i.call(e)))) return n;
			if ('function' == typeof (i = e.valueOf) && !y((n = i.call(e)))) return n;
			if (!t && 'function' == typeof (i = e.toString) && !y((n = i.call(e)))) return n;
			throw TypeError("Can't convert object to primitive value");
		},
		m = {}.hasOwnProperty,
		g = function (e, t) {
			return m.call(e, t);
		},
		_ = n.document,
		S = y(_) && y(_.createElement),
		w = function (e) {
			return S ? _.createElement(e) : {};
		},
		E =
			!s &&
			!r(function () {
				return (
					7 !=
					Object.defineProperty(w('div'), 'a', {
						get: function () {
							return 7;
						},
					}).a
				);
			}),
		A = Object.getOwnPropertyDescriptor,
		L = {
			f: s
				? A
				: function (e, t) {
						if (((e = v(e)), (t = b(t, !0)), E))
							try {
								return A(e, t);
							} catch (e) {}
						if (g(e, t)) return u(!l.f.call(e, t), e[t]);
				  },
		},
		O = function (e) {
			if (!y(e)) throw TypeError(String(e) + ' is not an object');
			return e;
		},
		C = Object.defineProperty,
		T = {
			f: s
				? C
				: function (e, t, i) {
						if ((O(e), (t = b(t, !0)), O(i), E))
							try {
								return C(e, t, i);
							} catch (e) {}
						if ('get' in i || 'set' in i) throw TypeError('Accessors not supported');
						return 'value' in i && (e[t] = i.value), e;
				  },
		},
		k = s
			? function (e, t, i) {
					return T.f(e, t, u(1, i));
			  }
			: function (e, t, i) {
					return (e[t] = i), e;
			  },
		x = function (e, t) {
			try {
				k(n, e, t);
			} catch (i) {
				n[e] = t;
			}
			return t;
		},
		j = '__core-js_shared__',
		M = n[j] || x(j, {}),
		N = Function.toString;
	'function' != typeof M.inspectSource &&
		(M.inspectSource = function (e) {
			return N.call(e);
		});
	var P,
		D,
		I,
		H = M.inspectSource,
		X = n.WeakMap,
		B = 'function' == typeof X && /native code/.test(H(X)),
		F = t(function (e) {
			(e.exports = function (e, t) {
				return M[e] || (M[e] = void 0 !== t ? t : {});
			})('versions', []).push({
				version: '3.6.4',
				mode: 'global',
				copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
			});
		}),
		R = 0,
		V = Math.random(),
		W = function (e) {
			return 'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++R + V).toString(36);
		},
		z = F('keys'),
		q = function (e) {
			return z[e] || (z[e] = W(e));
		},
		G = {},
		U = n.WeakMap;
	if (B) {
		var Y = new U(),
			$ = Y.get,
			K = Y.has,
			J = Y.set;
		(P = function (e, t) {
			return J.call(Y, e, t), t;
		}),
			(D = function (e) {
				return $.call(Y, e) || {};
			}),
			(I = function (e) {
				return K.call(Y, e);
			});
	} else {
		var Q = q('state');
		(G[Q] = !0),
			(P = function (e, t) {
				return k(e, Q, t), t;
			}),
			(D = function (e) {
				return g(e, Q) ? e[Q] : {};
			}),
			(I = function (e) {
				return g(e, Q);
			});
	}
	var Z,
		ee,
		te = {
			set: P,
			get: D,
			has: I,
			enforce: function (e) {
				return I(e) ? D(e) : P(e, {});
			},
			getterFor: function (e) {
				return function (t) {
					var i;
					if (!y(t) || (i = D(t)).type !== e)
						throw TypeError('Incompatible receiver, ' + e + ' required');
					return i;
				};
			},
		},
		ie = t(function (e) {
			var t = te.get,
				i = te.enforce,
				r = String(String).split('String');
			(e.exports = function (e, t, s, o) {
				var a = !!o && !!o.unsafe,
					l = !!o && !!o.enumerable,
					u = !!o && !!o.noTargetGet;
				'function' == typeof s &&
					('string' != typeof t || g(s, 'name') || k(s, 'name', t),
					(i(s).source = r.join('string' == typeof t ? t : ''))),
					e !== n
						? (a ? !u && e[t] && (l = !0) : delete e[t], l ? (e[t] = s) : k(e, t, s))
						: l
						? (e[t] = s)
						: x(t, s);
			})(Function.prototype, 'toString', function () {
				return ('function' == typeof this && t(this).source) || H(this);
			});
		}),
		ne = n,
		re = function (e) {
			return 'function' == typeof e ? e : void 0;
		},
		se = function (e, t) {
			return arguments.length < 2
				? re(ne[e]) || re(n[e])
				: (ne[e] && ne[e][t]) || (n[e] && n[e][t]);
		},
		oe = Math.ceil,
		ae = Math.floor,
		le = function (e) {
			return isNaN((e = +e)) ? 0 : (e > 0 ? ae : oe)(e);
		},
		ue = Math.min,
		ce = function (e) {
			return e > 0 ? ue(le(e), 9007199254740991) : 0;
		},
		de = Math.max,
		he = Math.min,
		fe = function (e, t) {
			var i = le(e);
			return i < 0 ? de(i + t, 0) : he(i, t);
		},
		pe = function (e) {
			return function (t, i, n) {
				var r,
					s = v(t),
					o = ce(s.length),
					a = fe(n, o);
				if (e && i != i) {
					for (; o > a; ) if ((r = s[a++]) != r) return !0;
				} else for (; o > a; a++) if ((e || a in s) && s[a] === i) return e || a || 0;
				return !e && -1;
			};
		},
		ve = { includes: pe(!0), indexOf: pe(!1) },
		ye = ve.indexOf,
		be = function (e, t) {
			var i,
				n = v(e),
				r = 0,
				s = [];
			for (i in n) !g(G, i) && g(n, i) && s.push(i);
			for (; t.length > r; ) g(n, (i = t[r++])) && (~ye(s, i) || s.push(i));
			return s;
		},
		me = [
			'constructor',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'toLocaleString',
			'toString',
			'valueOf',
		],
		ge = me.concat('length', 'prototype'),
		_e = {
			f:
				Object.getOwnPropertyNames ||
				function (e) {
					return be(e, ge);
				},
		},
		Se = { f: Object.getOwnPropertySymbols },
		we =
			se('Reflect', 'ownKeys') ||
			function (e) {
				var t = _e.f(O(e)),
					i = Se.f;
				return i ? t.concat(i(e)) : t;
			},
		Ee = function (e, t) {
			for (var i = we(t), n = T.f, r = L.f, s = 0; s < i.length; s++) {
				var o = i[s];
				g(e, o) || n(e, o, r(t, o));
			}
		},
		Ae = /#|\.prototype\./,
		Le = function (e, t) {
			var i = Ce[Oe(e)];
			return i == ke || (i != Te && ('function' == typeof t ? r(t) : !!t));
		},
		Oe = (Le.normalize = function (e) {
			return String(e).replace(Ae, '.').toLowerCase();
		}),
		Ce = (Le.data = {}),
		Te = (Le.NATIVE = 'N'),
		ke = (Le.POLYFILL = 'P'),
		xe = Le,
		je = L.f,
		Me = function (e, t) {
			var i,
				r,
				s,
				o,
				a,
				l = e.target,
				u = e.global,
				c = e.stat;
			if ((i = u ? n : c ? n[l] || x(l, {}) : (n[l] || {}).prototype))
				for (r in t) {
					if (
						((o = t[r]),
						(s = e.noTargetGet ? (a = je(i, r)) && a.value : i[r]),
						!xe(u ? r : l + (c ? '.' : '#') + r, e.forced) && void 0 !== s)
					) {
						if (typeof o == typeof s) continue;
						Ee(o, s);
					}
					(e.sham || (s && s.sham)) && k(o, 'sham', !0), ie(i, r, o, e);
				}
		},
		Ne =
			Array.isArray ||
			function (e) {
				return 'Array' == d(e);
			},
		Pe = function (e) {
			return Object(p(e));
		},
		De = function (e, t, i) {
			var n = b(t);
			n in e ? T.f(e, n, u(0, i)) : (e[n] = i);
		},
		Ie =
			!!Object.getOwnPropertySymbols &&
			!r(function () {
				return !String(Symbol());
			}),
		He = Ie && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
		Xe = F('wks'),
		Be = n.Symbol,
		Fe = He ? Be : (Be && Be.withoutSetter) || W,
		Re = function (e) {
			return (
				g(Xe, e) || (Ie && g(Be, e) ? (Xe[e] = Be[e]) : (Xe[e] = Fe('Symbol.' + e))),
				Xe[e]
			);
		},
		Ve = Re('species'),
		We = function (e, t) {
			var i;
			return (
				Ne(e) &&
					('function' != typeof (i = e.constructor) || (i !== Array && !Ne(i.prototype))
						? y(i) && null === (i = i[Ve]) && (i = void 0)
						: (i = void 0)),
				new (void 0 === i ? Array : i)(0 === t ? 0 : t)
			);
		},
		ze = se('navigator', 'userAgent') || '',
		qe = n.process,
		Ge = qe && qe.versions,
		Ue = Ge && Ge.v8;
	Ue
		? (ee = (Z = Ue.split('.'))[0] + Z[1])
		: ze &&
		  (!(Z = ze.match(/Edge\/(\d+)/)) || Z[1] >= 74) &&
		  (Z = ze.match(/Chrome\/(\d+)/)) &&
		  (ee = Z[1]);
	var Ye = ee && +ee,
		$e = Re('species'),
		Ke = function (e) {
			return (
				Ye >= 51 ||
				!r(function () {
					var t = [];
					return (
						((t.constructor = {})[$e] = function () {
							return { foo: 1 };
						}),
						1 !== t[e](Boolean).foo
					);
				})
			);
		},
		Je = Re('isConcatSpreadable'),
		Qe = 9007199254740991,
		Ze = 'Maximum allowed index exceeded',
		et =
			Ye >= 51 ||
			!r(function () {
				var e = [];
				return (e[Je] = !1), e.concat()[0] !== e;
			}),
		tt = Ke('concat'),
		it = function (e) {
			if (!y(e)) return !1;
			var t = e[Je];
			return void 0 !== t ? !!t : Ne(e);
		};
	Me(
		{ target: 'Array', proto: !0, forced: !et || !tt },
		{
			concat: function (e) {
				var t,
					i,
					n,
					r,
					s,
					o = Pe(this),
					a = We(o, 0),
					l = 0;
				for (t = -1, n = arguments.length; t < n; t++)
					if (it((s = -1 === t ? o : arguments[t]))) {
						if (l + (r = ce(s.length)) > Qe) throw TypeError(Ze);
						for (i = 0; i < r; i++, l++) i in s && De(a, l, s[i]);
					} else {
						if (l >= Qe) throw TypeError(Ze);
						De(a, l++, s);
					}
				return (a.length = l), a;
			},
		}
	);
	var nt = function (e, t, i) {
			if (
				((function (e) {
					if ('function' != typeof e) throw TypeError(String(e) + ' is not a function');
				})(e),
				void 0 === t)
			)
				return e;
			switch (i) {
				case 0:
					return function () {
						return e.call(t);
					};
				case 1:
					return function (i) {
						return e.call(t, i);
					};
				case 2:
					return function (i, n) {
						return e.call(t, i, n);
					};
				case 3:
					return function (i, n, r) {
						return e.call(t, i, n, r);
					};
			}
			return function () {
				return e.apply(t, arguments);
			};
		},
		rt = [].push,
		st = function (e) {
			var t = 1 == e,
				i = 2 == e,
				n = 3 == e,
				r = 4 == e,
				s = 6 == e,
				o = 5 == e || s;
			return function (a, l, u, c) {
				for (
					var d,
						h,
						p = Pe(a),
						v = f(p),
						y = nt(l, u, 3),
						b = ce(v.length),
						m = 0,
						g = c || We,
						_ = t ? g(a, b) : i ? g(a, 0) : void 0;
					b > m;
					m++
				)
					if ((o || m in v) && ((h = y((d = v[m]), m, p)), e))
						if (t) _[m] = h;
						else if (h)
							switch (e) {
								case 3:
									return !0;
								case 5:
									return d;
								case 6:
									return m;
								case 2:
									rt.call(_, d);
							}
						else if (r) return !1;
				return s ? -1 : n || r ? r : _;
			};
		},
		ot = {
			forEach: st(0),
			map: st(1),
			filter: st(2),
			some: st(3),
			every: st(4),
			find: st(5),
			findIndex: st(6),
		},
		at = function (e, t) {
			var i = [][e];
			return (
				!!i &&
				r(function () {
					i.call(
						null,
						t ||
							function () {
								throw 1;
							},
						1
					);
				})
			);
		},
		lt = Object.defineProperty,
		ut = {},
		ct = function (e) {
			throw e;
		},
		dt = function (e, t) {
			if (g(ut, e)) return ut[e];
			t || (t = {});
			var i = [][e],
				n = !!g(t, 'ACCESSORS') && t.ACCESSORS,
				o = g(t, 0) ? t[0] : ct,
				a = g(t, 1) ? t[1] : void 0;
			return (ut[e] =
				!!i &&
				!r(function () {
					if (n && !s) return !0;
					var e = { length: -1 };
					n ? lt(e, 1, { enumerable: !0, get: ct }) : (e[1] = 1), i.call(e, o, a);
				}));
		},
		ht = ot.forEach,
		ft = at('forEach'),
		pt = dt('forEach'),
		vt =
			ft && pt
				? [].forEach
				: function (e) {
						return ht(this, e, arguments.length > 1 ? arguments[1] : void 0);
				  };
	Me({ target: 'Array', proto: !0, forced: [].forEach != vt }, { forEach: vt });
	var yt = ve.indexOf,
		bt = [].indexOf,
		mt = !!bt && 1 / [1].indexOf(1, -0) < 0,
		gt = at('indexOf'),
		_t = dt('indexOf', { ACCESSORS: !0, 1: 0 });
	Me(
		{ target: 'Array', proto: !0, forced: mt || !gt || !_t },
		{
			indexOf: function (e) {
				return mt
					? bt.apply(this, arguments) || 0
					: yt(this, e, arguments.length > 1 ? arguments[1] : void 0);
			},
		}
	);
	var St = ot.map,
		wt = Ke('map'),
		Et = dt('map');
	Me(
		{ target: 'Array', proto: !0, forced: !wt || !Et },
		{
			map: function (e) {
				return St(this, e, arguments.length > 1 ? arguments[1] : void 0);
			},
		}
	);
	var At,
		Lt =
			Object.setPrototypeOf ||
			('__proto__' in {}
				? (function () {
						var e,
							t = !1,
							i = {};
						try {
							(e = Object.getOwnPropertyDescriptor(
								Object.prototype,
								'__proto__'
							).set).call(i, []),
								(t = i instanceof Array);
						} catch (e) {}
						return function (i, n) {
							return (
								O(i),
								(function (e) {
									if (!y(e) && null !== e)
										throw TypeError("Can't set " + String(e) + ' as a prototype');
								})(n),
								t ? e.call(i, n) : (i.__proto__ = n),
								i
							);
						};
				  })()
				: void 0),
		Ot = function (e, t, i) {
			var n, r;
			return (
				Lt &&
					'function' == typeof (n = t.constructor) &&
					n !== i &&
					y((r = n.prototype)) &&
					r !== i.prototype &&
					Lt(e, r),
				e
			);
		},
		Ct =
			Object.keys ||
			function (e) {
				return be(e, me);
			},
		Tt = s
			? Object.defineProperties
			: function (e, t) {
					O(e);
					for (var i, n = Ct(t), r = n.length, s = 0; r > s; ) T.f(e, (i = n[s++]), t[i]);
					return e;
			  },
		kt = se('document', 'documentElement'),
		xt = q('IE_PROTO'),
		jt = function () {},
		Mt = function (e) {
			return '<script>' + e + '</' + 'script>';
		},
		Nt = function () {
			try {
				At = document.domain && new ActiveXObject('htmlfile');
			} catch (e) {}
			var e, t;
			Nt = At
				? (function (e) {
						e.write(Mt('')), e.close();
						var t = e.parentWindow.Object;
						return (e = null), t;
				  })(At)
				: (((t = w('iframe')).style.display = 'none'),
				  kt.appendChild(t),
				  (t.src = String('javascript:')),
				  (e = t.contentWindow.document).open(),
				  e.write(Mt('document.F=Object')),
				  e.close(),
				  e.F);
			for (var i = me.length; i--; ) delete Nt.prototype[me[i]];
			return Nt();
		};
	G[xt] = !0;
	var Pt =
			Object.create ||
			function (e, t) {
				var i;
				return (
					null !== e
						? ((jt.prototype = O(e)), (i = new jt()), (jt.prototype = null), (i[xt] = e))
						: (i = Nt()),
					void 0 === t ? i : Tt(i, t)
				);
			},
		Dt = '\t\n\v\f\r                　\u2028\u2029\ufeff',
		It = '[' + Dt + ']',
		Ht = RegExp('^' + It + It + '*'),
		Xt = RegExp(It + It + '*$'),
		Bt = function (e) {
			return function (t) {
				var i = String(p(t));
				return 1 & e && (i = i.replace(Ht, '')), 2 & e && (i = i.replace(Xt, '')), i;
			};
		},
		Ft = { start: Bt(1), end: Bt(2), trim: Bt(3) },
		Rt = _e.f,
		Vt = L.f,
		Wt = T.f,
		zt = Ft.trim,
		qt = 'Number',
		Gt = n.Number,
		Ut = Gt.prototype,
		Yt = d(Pt(Ut)) == qt,
		$t = function (e) {
			var t,
				i,
				n,
				r,
				s,
				o,
				a,
				l,
				u = b(e, !1);
			if ('string' == typeof u && u.length > 2)
				if (43 === (t = (u = zt(u)).charCodeAt(0)) || 45 === t) {
					if (88 === (i = u.charCodeAt(2)) || 120 === i) return NaN;
				} else if (48 === t) {
					switch (u.charCodeAt(1)) {
						case 66:
						case 98:
							(n = 2), (r = 49);
							break;
						case 79:
						case 111:
							(n = 8), (r = 55);
							break;
						default:
							return +u;
					}
					for (o = (s = u.slice(2)).length, a = 0; a < o; a++)
						if ((l = s.charCodeAt(a)) < 48 || l > r) return NaN;
					return parseInt(s, n);
				}
			return +u;
		};
	if (xe(qt, !Gt(' 0o1') || !Gt('0b1') || Gt('+0x1'))) {
		for (
			var Kt,
				Jt = function (e) {
					var t = arguments.length < 1 ? 0 : e,
						i = this;
					return i instanceof Jt &&
						(Yt
							? r(function () {
									Ut.valueOf.call(i);
							  })
							: d(i) != qt)
						? Ot(new Gt($t(t)), i, Jt)
						: $t(t);
				},
				Qt = s
					? Rt(Gt)
					: 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
							','
					  ),
				Zt = 0;
			Qt.length > Zt;
			Zt++
		)
			g(Gt, (Kt = Qt[Zt])) && !g(Jt, Kt) && Wt(Jt, Kt, Vt(Gt, Kt));
		(Jt.prototype = Ut), (Ut.constructor = Jt), ie(n, qt, Jt);
	}
	var ei = Ft.trim,
		ti = n.parseInt,
		ii = /^[+-]?0[Xx]/,
		ni =
			8 !== ti(Dt + '08') || 22 !== ti(Dt + '0x16')
				? function (e, t) {
						var i = ei(String(e));
						return ti(i, t >>> 0 || (ii.test(i) ? 16 : 10));
				  }
				: ti;
	Me({ target: 'Number', stat: !0, forced: Number.parseInt != ni }, { parseInt: ni });
	var ri = Object.assign,
		si = Object.defineProperty,
		oi =
			!ri ||
			r(function () {
				if (
					s &&
					1 !==
						ri(
							{ b: 1 },
							ri(
								si({}, 'a', {
									enumerable: !0,
									get: function () {
										si(this, 'b', { value: 3, enumerable: !1 });
									},
								}),
								{ b: 2 }
							)
						).b
				)
					return !0;
				var e = {},
					t = {},
					i = Symbol(),
					n = 'abcdefghijklmnopqrst';
				return (
					(e[i] = 7),
					n.split('').forEach(function (e) {
						t[e] = e;
					}),
					7 != ri({}, e)[i] || Ct(ri({}, t)).join('') != n
				);
			})
				? function (e, t) {
						for (var i = Pe(e), n = arguments.length, r = 1, o = Se.f, a = l.f; n > r; )
							for (
								var u,
									c = f(arguments[r++]),
									d = o ? Ct(c).concat(o(c)) : Ct(c),
									h = d.length,
									p = 0;
								h > p;

							)
								(u = d[p++]), (s && !a.call(c, u)) || (i[u] = c[u]);
						return i;
				  }
				: ri;
	Me({ target: 'Object', stat: !0, forced: Object.assign !== oi }, { assign: oi });
	var ai = l.f,
		li = function (e) {
			return function (t) {
				for (var i, n = v(t), r = Ct(n), o = r.length, a = 0, l = []; o > a; )
					(i = r[a++]), (s && !ai.call(n, i)) || l.push(e ? [i, n[i]] : n[i]);
				return l;
			};
		},
		ui = { entries: li(!0), values: li(!1) }.entries;
	Me(
		{ target: 'Object', stat: !0 },
		{
			entries: function (e) {
				return ui(e);
			},
		}
	);
	for (var ci in {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0,
	}) {
		var di = n[ci],
			hi = di && di.prototype;
		if (hi && hi.forEach !== vt)
			try {
				k(hi, 'forEach', vt);
			} catch (e) {
				hi.forEach = vt;
			}
	}
	function fi(e) {
		return (fi =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e &&
							'function' == typeof Symbol &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  })(e);
	}
	function pi(e, t) {
		for (var i = 0; i < t.length; i++) {
			var n = t[i];
			(n.enumerable = n.enumerable || !1),
				(n.configurable = !0),
				'value' in n && (n.writable = !0),
				Object.defineProperty(e, n.key, n);
		}
	}
	function vi(e, t, i) {
		return (
			t in e
				? Object.defineProperty(e, t, {
						value: i,
						enumerable: !0,
						configurable: !0,
						writable: !0,
				  })
				: (e[t] = i),
			e
		);
	}
	function yi(e, t) {
		var i = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			t &&
				(n = n.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				})),
				i.push.apply(i, n);
		}
		return i;
	}
	function bi(e) {
		for (var t = 1; t < arguments.length; t++) {
			var i = null != arguments[t] ? arguments[t] : {};
			t % 2
				? yi(Object(i), !0).forEach(function (t) {
						vi(e, t, i[t]);
				  })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
				: yi(Object(i)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
				  });
		}
		return e;
	}
	function mi(e, t) {
		if (null == e) return {};
		var i,
			n,
			r = (function (e, t) {
				if (null == e) return {};
				var i,
					n,
					r = {},
					s = Object.keys(e);
				for (n = 0; n < s.length; n++) (i = s[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
				return r;
			})(e, t);
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (n = 0; n < s.length; n++)
				(i = s[n]),
					t.indexOf(i) >= 0 ||
						(Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
		}
		return r;
	}
	function gi(e, t) {
		return (
			(function (e) {
				if (Array.isArray(e)) return e;
			})(e) ||
			(function (e, t) {
				if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var i = [],
					n = !0,
					r = !1,
					s = void 0;
				try {
					for (
						var o, a = e[Symbol.iterator]();
						!(n = (o = a.next()).done) && (i.push(o.value), !t || i.length !== t);
						n = !0
					);
				} catch (e) {
					(r = !0), (s = e);
				} finally {
					try {
						n || null == a.return || a.return();
					} finally {
						if (r) throw s;
					}
				}
				return i;
			})(e, t) ||
			Si(e, t) ||
			(function () {
				throw new TypeError(
					'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			})()
		);
	}
	function _i(e) {
		return (
			(function (e) {
				if (Array.isArray(e)) return wi(e);
			})(e) ||
			(function (e) {
				if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
					return Array.from(e);
			})(e) ||
			Si(e) ||
			(function () {
				throw new TypeError(
					'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			})()
		);
	}
	function Si(e, t) {
		if (e) {
			if ('string' == typeof e) return wi(e, t);
			var i = Object.prototype.toString.call(e).slice(8, -1);
			return (
				'Object' === i && e.constructor && (i = e.constructor.name),
				'Map' === i || 'Set' === i
					? Array.from(e)
					: 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
					? wi(e, t)
					: void 0
			);
		}
	}
	function wi(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
		return n;
	}
	var Ei = function (e, t, i) {
			var n;
			return (
				void 0 === t && (t = 50),
				void 0 === i && (i = { isImmediate: !1 }),
				function () {
					for (var r = [], s = arguments.length; s--; ) r[s] = arguments[s];
					var o = this,
						a = i.isImmediate && void 0 === n;
					void 0 !== n && clearTimeout(n),
						(n = setTimeout(function () {
							(n = void 0), i.isImmediate || e.apply(o, r);
						}, t)),
						a && e.apply(o, r);
				}
			);
		},
		Ai = Re('unscopables'),
		Li = Array.prototype;
	null == Li[Ai] && T.f(Li, Ai, { configurable: !0, value: Pt(null) });
	var Oi = ve.includes;
	Me(
		{ target: 'Array', proto: !0, forced: !dt('indexOf', { ACCESSORS: !0, 1: 0 }) },
		{
			includes: function (e) {
				return Oi(this, e, arguments.length > 1 ? arguments[1] : void 0);
			},
		}
	),
		(function (e) {
			Li[Ai][e] = !0;
		})('includes');
	var Ci = Ke('slice'),
		Ti = dt('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
		ki = Re('species'),
		xi = [].slice,
		ji = Math.max;
	Me(
		{ target: 'Array', proto: !0, forced: !Ci || !Ti },
		{
			slice: function (e, t) {
				var i,
					n,
					r,
					s = v(this),
					o = ce(s.length),
					a = fe(e, o),
					l = fe(void 0 === t ? o : t, o);
				if (
					Ne(s) &&
					('function' != typeof (i = s.constructor) || (i !== Array && !Ne(i.prototype))
						? y(i) && null === (i = i[ki]) && (i = void 0)
						: (i = void 0),
					i === Array || void 0 === i)
				)
					return xi.call(s, a, l);
				for (n = new (void 0 === i ? Array : i)(ji(l - a, 0)), r = 0; a < l; a++, r++)
					a in s && De(n, r, s[a]);
				return (n.length = r), n;
			},
		}
	);
	var Mi = {};
	Mi[Re('toStringTag')] = 'z';
	var Ni = '[object z]' === String(Mi),
		Pi = Re('toStringTag'),
		Di =
			'Arguments' ==
			d(
				(function () {
					return arguments;
				})()
			),
		Ii = Ni
			? d
			: function (e) {
					var t, i, n;
					return void 0 === e
						? 'Undefined'
						: null === e
						? 'Null'
						: 'string' ==
						  typeof (i = (function (e, t) {
								try {
									return e[t];
								} catch (e) {}
						  })((t = Object(e)), Pi))
						? i
						: Di
						? d(t)
						: 'Object' == (n = d(t)) && 'function' == typeof t.callee
						? 'Arguments'
						: n;
			  },
		Hi = Ni
			? {}.toString
			: function () {
					return '[object ' + Ii(this) + ']';
			  };
	Ni || ie(Object.prototype, 'toString', Hi, { unsafe: !0 });
	var Xi = function () {
			var e = O(this),
				t = '';
			return (
				e.global && (t += 'g'),
				e.ignoreCase && (t += 'i'),
				e.multiline && (t += 'm'),
				e.dotAll && (t += 's'),
				e.unicode && (t += 'u'),
				e.sticky && (t += 'y'),
				t
			);
		},
		Bi = 'toString',
		Fi = RegExp.prototype,
		Ri = Fi.toString,
		Vi = r(function () {
			return '/a/b' != Ri.call({ source: 'a', flags: 'b' });
		}),
		Wi = Ri.name != Bi;
	(Vi || Wi) &&
		ie(
			RegExp.prototype,
			Bi,
			function () {
				var e = O(this),
					t = String(e.source),
					i = e.flags;
				return (
					'/' +
					t +
					'/' +
					String(void 0 === i && e instanceof RegExp && !('flags' in Fi) ? Xi.call(e) : i)
				);
			},
			{ unsafe: !0 }
		);
	var zi = Re('match'),
		qi = function (e) {
			if (
				(function (e) {
					var t;
					return y(e) && (void 0 !== (t = e[zi]) ? !!t : 'RegExp' == d(e));
				})(e)
			)
				throw TypeError("The method doesn't accept regular expressions");
			return e;
		},
		Gi = Re('match');
	Me(
		{
			target: 'String',
			proto: !0,
			forced: !(function (e) {
				var t = /./;
				try {
					'/./'[e](t);
				} catch (i) {
					try {
						return (t[Gi] = !1), '/./'[e](t);
					} catch (e) {}
				}
				return !1;
			})('includes'),
		},
		{
			includes: function (e) {
				return !!~String(p(this)).indexOf(
					qi(e),
					arguments.length > 1 ? arguments[1] : void 0
				);
			},
		}
	);
	var Ui,
		Yi,
		$i,
		Ki,
		Ji = function (e) {
			var t = new DOMParser().parseFromString(e, 'text/html').body.firstChild;
			if (t instanceof HTMLElement) return t;
			throw new Error('Supplied markup does not create an HTML Element');
		},
		Qi = function (e) {
			var t = e.charCode || e.keyCode,
				i = e.type;
			return (
				'click' === i ||
				('keydown' === i && (32 === t || 13 === t) && (e.preventDefault(), !0))
			);
		},
		Zi = function (e) {
			return (
				'number' == typeof e &&
				isFinite(e) &&
				Math.floor(e) === e &&
				null != e &&
				!isNaN(Number(e.toString()))
			);
		},
		en = function (e) {
			return 'object' === fi(e) && null !== e;
		},
		tn = function (e, t) {
			if (void 0 !== e) {
				var i = (function (e) {
					if (Array.isArray(e)) return !0;
					var t = Object.prototype.toString.call(e);
					return !(
						'[object HTMLCollection]' !== t &&
						'[object NodeList]' !== t &&
						('object' !== fi(e) ||
							!e.hasOwnProperty('length') ||
							e.length < 0 ||
							(0 !== e.length && (!e[0] || !e[0].nodeType)))
					);
				})(e)
					? e
					: [e];
				Array.prototype.slice.call(i).forEach(function (e) {
					e instanceof HTMLElement && t && t(e);
				});
			}
		},
		nn = function (e, t, i) {
			var n = !!window.getComputedStyle,
				r = window.getComputedStyle || function () {},
				s = (function () {
					if (!n) return !1;
					var e = document.body || document.documentElement,
						t = document.createElement('div');
					(t.style.cssText =
						'width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;'),
						e.appendChild(t);
					var i = '10px' === r(t, null).width;
					return e.removeChild(t), i;
				})(),
				o = function (e) {
					return (
						(e = parseFloat(e)), (t = e), !isNaN(parseFloat(t)) && isFinite(t) ? e : 0
					);
					var t;
				};
			return (function (e, t, i) {
				if (n) {
					i = i || r(e, null);
					var a = o(i[t]);
					return (
						s || 'width' !== t
							? s ||
							  'height' !== t ||
							  (a +=
									o(i.paddingTop) +
									o(i.paddingBottom) +
									o(i.borderTopWidth) +
									o(i.borderBottomWidth))
							: (a +=
									o(i.paddingLeft) +
									o(i.paddingRight) +
									o(i.borderLeftWidth) +
									o(i.borderRightWidth)),
						a
					);
				}
				return o(e.style[t]);
			})(e, t, i);
		},
		rn = function (e) {
			for (
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
					i = [],
					n = e.nextSibling;
				n && i.length < t;

			)
				i.push(n), (n = n.nextSibling);
			return i;
		};
	return (
		(function (e) {
			(e[(e.Prev = 0)] = 'Prev'), (e[(e.Next = 1)] = 'Next');
		})(Ui || (Ui = {})),
		(function (e) {
			(e[(e.Enabled = 1)] = 'Enabled'), (e[(e.Disabled = 0)] = 'Disabled');
		})(Yi || (Yi = {})),
		(function (e) {
			(e[(e.Enable = 0)] = 'Enable'), (e[(e.Disable = 1)] = 'Disable');
		})($i || ($i = {})),
		(function (e) {
			(e[(e.Yes = 0)] = 'Yes'), (e[(e.No = 0)] = 'No');
		})(Ki || (Ki = {})),
		(function () {
			function e(t, i) {
				var n = this;
				if (
					((function (e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					})(this, e),
					!(t instanceof HTMLElement))
				)
					throw new Error('The required input [element] must be an HTMLElement');
				if (void 0 !== i && !en(i))
					throw new Error('The required input [options] must be an Object');
				(this.slider = t),
					(this.slides = t.children),
					(this.sliderContainer = Ji('<div class="a11y-slider-container"></div>')),
					(this._activeClass = 'a11y-slider-active'),
					(this._visibleClass = 'a11y-slider-visible'),
					(this._dotsClass = 'a11y-slider-dots'),
					(this._sliderClass = 'a11y-slider'),
					(this._focusable =
						'a, area, input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]'),
					(this._autoplayTimer = Ki.No),
					(this.autoplayBtn = Ji(
						'<button type="button" class="a11y-slider-autoplay">Toggle slider autoplay</button>'
					)),
					(this._pauseOnMouseLeave = !1),
					(this._skipBtns = []),
					(this.dots = null),
					(this.swipe = !0),
					(this.activeSlide = this.slides[0]),
					(this.visibleSlides = []),
					(this.sliderEnabled = Yi.Disabled),
					(this.modernBrowser = !!HTMLElement.prototype.scrollTo),
					(this.isPlatformiOS = (function () {
						switch (navigator.platform) {
							case 'iPod':
							case 'iPhone':
							case 'iPad':
							case 'iPod Simulator':
							case 'iPhone Simulator':
							case 'iPad Simulator':
								return !0;
						}
						return !(!navigator.userAgent.includes('Mac') || !('ontouchend' in document));
					})()),
					(this.mouseDown = !1),
					(this.touchStart = !1),
					(this.swipeStartX = 0),
					(this.swipeX = 0),
					(this.swipeXCached = 0),
					(this._hasCustomArrows = !!((i && i.prevArrow) || (i && i.nextArrow))),
					(this.options = {
						container: !0,
						arrows: !0,
						prevArrow:
							(i && i.prevArrow) ||
							Ji(
								'<button type="button" class="a11y-slider-prev">Previous slide</button>'
							),
						nextArrow:
							(i && i.nextArrow) ||
							Ji('<button type="button" class="a11y-slider-next">Next slide</button>'),
						dots: !0,
						adaptiveHeight: !1,
						skipBtn: !0,
						slidesToShow: null,
						autoplay: !1,
						autoplaySpeed: 4e3,
						autoplayHoverPause: !0,
						centerMode: !1,
						infinite: !0,
						disable: !1,
						responsive: null,
						customPaging: null,
						swipe: !0,
					}),
					(this.options = bi(bi({}, this.options), i)),
					(this._handlePrev = this._handlePrev.bind(this)),
					(this._handleNext = this._handleNext.bind(this)),
					(this._handleAutoplay = this._handleAutoplay.bind(this)),
					(this._handleAutoplayHover = this._handleAutoplayHover.bind(this)),
					(this._handleAutoplayEvent = this._handleAutoplayEvent.bind(this)),
					(this._checkShouldEnableDebounced = Ei(
						this._checkShouldEnable.bind(this),
						250
					)),
					(this._updateHeightDebounced = Ei(this._updateHeight.bind(this), 250)),
					(this._generateDotsDebounced = Ei(this._generateDots.bind(this), 250)),
					(this._updateScrollPosition = Ei(function () {
						return n.scrollToSlide(n.activeSlide);
					}, 250)),
					(this._handleScroll = Ei(this._handleScroll.bind(this), 10)),
					(this._scrollFinish = Ei(this._scrollFinish.bind(this), 175)),
					(this._swipeMouseDown = this._swipeMouseDown.bind(this)),
					(this._swipeMouseUp = this._swipeMouseUp.bind(this)),
					(this._swipeMouseMove = this._swipeMouseMove.bind(this)),
					(this._swipeTouchStart = this._swipeTouchStart.bind(this)),
					(this._swipeTouchEnd = this._swipeTouchEnd.bind(this)),
					(this._swipeTouchMove = this._swipeTouchMove.bind(this)),
					this._init();
			}
			var t, i, n;
			return (
				(t = e),
				(i = [
					{
						key: '_init',
						value: function () {
							var e = this;
							setTimeout(function () {
								return (e.slider.scrollLeft = 0);
							}, 1),
								en(this.options.responsive) && this._checkResponsive(),
								this._checkShouldEnable(),
								window.addEventListener('resize', this._checkShouldEnableDebounced),
								this._dispatchEvent('init', { a11ySlider: this });
						},
					},
					{
						key: '_checkShouldEnable',
						value: function () {
							var e = this,
								t = !0;
							!0 === this.options.disable && (t = !1),
								this.slides.length <= 1 && (t = !1),
								Zi(this.options.slidesToShow)
									? this.slides.length === this.options.slidesToShow && (t = !1)
									: this._getActiveAndVisible(null, function (i) {
											i.length === e.slides.length && (t = !1);
									  }),
								t && this.sliderEnabled === Yi.Disabled
									? this._enableSlider()
									: t || this.sliderEnabled !== Yi.Enabled || this._disableSlider(),
								!t &&
									this._hasCustomArrows &&
									(tn(this.options.prevArrow, function (e) {
										e.classList.add('a11y-slider-hide');
									}),
									tn(this.options.nextArrow, function (e) {
										e.classList.add('a11y-slider-hide');
									}));
						},
					},
					{
						key: '_enableSlider',
						value: function () {
							var e = this;
							(this.sliderEnabled = Yi.Enabled),
								this.options.container &&
									(this.slider.insertAdjacentElement('beforebegin', this.sliderContainer),
									this.sliderContainer.insertAdjacentElement('afterbegin', this.slider)),
								this.options.skipBtn && this._addSkipBtn(),
								this.options.arrows &&
									!this._hasCustomArrows &&
									(this.options.prevArrow instanceof HTMLElement &&
										this.slider.insertAdjacentElement(
											'beforebegin',
											this.options.prevArrow
										),
									this.options.nextArrow instanceof HTMLElement &&
										this.slider.insertAdjacentElement(
											'beforebegin',
											this.options.nextArrow
										)),
								tn(this.options.prevArrow, function (t) {
									t.addEventListener('click', e._handlePrev, { passive: !0 }),
										t.addEventListener('keypress', e._handlePrev, { passive: !0 }),
										e._hasCustomArrows && t.classList.remove('a11y-slider-hide');
								}),
								tn(this.options.nextArrow, function (t) {
									t.addEventListener('click', e._handleNext, { passive: !0 }),
										t.addEventListener('keypress', e._handleNext, { passive: !0 }),
										e._hasCustomArrows && t.classList.remove('a11y-slider-hide');
								}),
								this.options.dots && this._generateDots(),
								this.slider.addEventListener('scroll', this._handleScroll, !1),
								this._setCSS(),
								!0 === this.options.adaptiveHeight &&
									(this._updateHeight(this.activeSlide),
									window.addEventListener(
										'resize',
										this._updateHeightDebounced.bind(this)
									)),
								this.options.autoplay && this._enableAutoplay(),
								window.addEventListener('resize', this._updateScrollPosition),
								this.options.swipe && this._enableSwipe();
						},
					},
					{
						key: '_disableSlider',
						value: function () {
							var e = this;
							(this.sliderEnabled = Yi.Disabled),
								document.body.contains(this.sliderContainer) &&
									(this.sliderContainer.insertAdjacentElement('beforebegin', this.slider),
									this.sliderContainer.parentNode &&
										this.sliderContainer.parentNode.removeChild(this.sliderContainer)),
								this._removeSkipBtn(),
								tn(this.options.prevArrow, function (t) {
									t.removeEventListener('click', e._handlePrev),
										t.removeEventListener('keypress', e._handlePrev),
										e._hasCustomArrows
											? t.classList.add('a11y-slider-hide')
											: t.parentNode && t.parentNode.removeChild(t);
								}),
								tn(this.options.nextArrow, function (t) {
									t.removeEventListener('click', e._handleNext),
										t.removeEventListener('keypress', e._handleNext),
										e._hasCustomArrows
											? t.classList.add('a11y-slider-hide')
											: t.parentNode && t.parentNode.removeChild(t);
								}),
								this._removeDots(),
								this.slider.removeEventListener('scroll', this._handleScroll, !1),
								this._removeCSS(),
								window.removeEventListener('resize', this._updateHeightDebounced),
								this._updateHeight(!1),
								this.options.autoplay && this._disableAutoplay(),
								this._disableSwipe(),
								window.removeEventListener('resize', this._updateScrollPosition),
								this.options.swipe && this._disableSwipe();
						},
					},
					{
						key: '_setCSS',
						value: function (e) {
							var t = this;
							this._addSlidesWidth(),
								this._getActiveAndVisible(e || null),
								this.slider.classList.add(this._sliderClass),
								tn(this.slides, function (e) {
									e.classList.remove(t._activeClass), e.classList.remove(t._visibleClass);
								}),
								this.activeSlide.classList.add(this._activeClass),
								tn(this.visibleSlides, function (e) {
									e.classList.add(t._visibleClass);
								}),
								this._updateDots(this.activeSlide),
								this._updateA11Y();
						},
					},
					{
						key: '_removeCSS',
						value: function () {
							var e = this;
							this._removeSlidesWidth(),
								this.slider.classList.remove(this._sliderClass),
								tn(this.slides, function (t) {
									t.classList.remove(e._activeClass), t.classList.remove(e._visibleClass);
								}),
								this._removeA11Y();
						},
					},
					{
						key: '_checkResponsive',
						value: function () {
							var e = this;
							if (en(this.options.responsive)) {
								var t = this.options,
									i = (t.responsive, mi(t, ['responsive'])),
									n = [],
									r = Object.entries(this.options.responsive).sort(function (e, t) {
										return e[1] - t[1];
									});
								n.push({
									mql: window.matchMedia(
										'screen and (max-width: '.concat(Number.parseInt(r[0][0]) - 1, 'px)')
									),
									options: i,
								}),
									r.forEach(function (t, i) {
										var s = gi(t, 2),
											o = s[0],
											a = s[1],
											l = bi({}, e.options),
											u = 'screen and (min-width: '.concat(o, 'px)');
										i !== r.length - 1 &&
											(u = u.concat(
												' and (max-width: '.concat(
													Number.parseInt(r[i + 1][0]) - 1,
													'px)'
												)
											)),
											n.forEach(function (e) {
												Object.assign(l, e.options);
											}),
											Object.assign(l, a),
											n.push({ mql: window.matchMedia(u), options: l });
									}),
									n.map(function (t) {
										t.mql.matches && Object.assign(e.options, t.options),
											t.mql.addListener(function () {
												t.mql.matches && e.updateOptions(t.options);
											});
									});
							}
						},
					},
					{
						key: '_addSlidesWidth',
						value: function () {
							if (Zi(this.options.slidesToShow)) {
								var e = 100 / this.options.slidesToShow;
								(this.slider.style.display = 'flex'),
									tn(this.slides, function (t) {
										(t.style.width = ''.concat(e, '%')), (t.style.flex = '0 0 auto');
									});
							} else this._removeSlidesWidth();
						},
					},
					{
						key: '_removeSlidesWidth',
						value: function () {
							this.slider.style.removeProperty('display'),
								tn(this.slides, function (e) {
									e.style.removeProperty('width'), e.style.removeProperty('flex');
								});
						},
					},
					{
						key: '_updateA11Y',
						value: function () {
							var e = this;
							if (
								(this._removeA11Y(),
								tn(this.slides, function (t) {
									var i = t.querySelectorAll(e._focusable);
									t.classList.contains(e._visibleClass) ||
										(t.setAttribute('tabindex', '-1'),
										t.setAttribute('aria-hidden', 'true')),
										tn(i, function (i) {
											t.classList.contains(e._visibleClass) ||
												i.setAttribute('tabindex', '-1');
										});
								}),
								!1 === this.options.infinite)
							) {
								var t = this.slider.firstElementChild,
									i = this.slider.lastElementChild,
									n = this.visibleSlides[0],
									r = this.visibleSlides[this.visibleSlides.length - 1];
								n === t &&
									tn(this.options.prevArrow, function (e) {
										e.setAttribute('disabled', '');
									}),
									r === i &&
										tn(this.options.nextArrow, function (e) {
											e.setAttribute('disabled', '');
										});
							}
						},
					},
					{
						key: '_removeA11Y',
						value: function () {
							var e = this;
							tn(this.slides, function (t) {
								var i = t.querySelectorAll(e._focusable);
								t.removeAttribute('tabindex'),
									t.removeAttribute('aria-hidden'),
									tn(i, function (e) {
										e.removeAttribute('tabindex');
									});
							}),
								tn(this.options.prevArrow, function (e) {
									return e.removeAttribute('disabled');
								}),
								tn(this.options.nextArrow, function (e) {
									return e.removeAttribute('disabled');
								});
						},
					},
					{
						key: '_addSkipBtn',
						value: function () {
							var e = Ji(
									'<button class="a11y-slider-sr-only" type="button" tabindex="0">Click to skip slider carousel</button>'
								),
								t = Ji(
									'<div class="a11y-slider-sr-only" tabindex="-1">End of slider carousel</div>'
								),
								i = function (e) {
									!0 === Qi(e) && t.focus();
								};
							e.addEventListener('click', i, { passive: !0 }),
								e.addEventListener('keypress', i, { passive: !0 }),
								this.slider.insertAdjacentElement('beforebegin', e),
								this.slider.insertAdjacentElement('afterend', t),
								(this._skipBtns = []),
								this._skipBtns.push(e, t);
						},
					},
					{
						key: '_removeSkipBtn',
						value: function () {
							var e = [].concat(
								_i(
									(function (e) {
										for (
											var t =
													arguments.length > 1 && void 0 !== arguments[1]
														? arguments[1]
														: 10,
												i = [],
												n = e.previousSibling;
											n && i.length < t;

										)
											i.push(n), (n = n.previousSibling);
										return i;
									})(this.slider)
								),
								_i(rn(this.slider))
							);
							tn(this._skipBtns, function (e) {
								e.parentNode && e.parentNode.removeChild(e);
							}),
								tn(e, function (e) {
									e.classList.contains('a11y-slider-sr-only') &&
										e.parentNode &&
										e.parentNode.removeChild(e);
								});
						},
					},
					{
						key: '_generateDots',
						value: function () {
							var e = this;
							if (
								!1 !== this.options.dots &&
								(this._removeDots(), this.sliderEnabled !== Yi.Disabled)
							) {
								this.dots = Ji('<ul class="'.concat(this._dotsClass, '"></ul>'));
								for (
									var t = function (t) {
											var i = Ji('<li></li>'),
												n = void 0;
											e.options.customPaging
												? (n = Ji(e.options.customPaging(t, e)))
												: ((n = Ji('<button type="button"></button>')).textContent =
														'Move slider to item #'.concat(t + 1));
											var r = function (i) {
												!0 === Qi(i) &&
													(e.scrollToSlide(e.slides[t]), e._toggleAutoplay($i.Disable));
											};
											n.addEventListener('click', r, { passive: !0 }),
												n.addEventListener('keypress', r, { passive: !0 }),
												i.insertAdjacentElement('beforeend', n),
												e.dots.insertAdjacentElement('beforeend', i);
										},
										i = 0;
									i < this._getDotCount();
									i++
								)
									t(i);
								this._updateDots(this.activeSlide),
									this.slider.insertAdjacentElement('afterend', this.dots),
									window.addEventListener('resize', this._generateDotsDebounced);
							}
						},
					},
					{
						key: '_getDotCount',
						value: function () {
							return (
								this.slides.length -
								(this.options.slidesToShow || this.visibleSlides.length || 1) +
								1
							);
						},
					},
					{
						key: '_removeDots',
						value: function () {
							var e = this;
							window.removeEventListener('resize', this._generateDotsDebounced);
							var t = rn(this.slider);
							this.dots instanceof HTMLElement &&
								this.dots.parentNode &&
								this.dots.parentNode.removeChild(this.dots),
								tn(t, function (t) {
									t.classList.contains(e._dotsClass) &&
										t.parentNode &&
										t.parentNode.removeChild(t);
								});
						},
					},
					{
						key: '_updateDots',
						value: function (e) {
							if (this.dots instanceof HTMLElement) {
								var t,
									i,
									n = Array.prototype.indexOf.call(
										e.parentNode && e.parentNode.children,
										e
									);
								n > this.dots.children.length && (n = this.dots.children.length - 1),
									tn(this.dots.children, function (e) {
										var t;
										return null === (t = e.querySelector('button')) || void 0 === t
											? void 0
											: t.classList.remove('active');
									}),
									null === (t = this.dots.children[n]) ||
										void 0 === t ||
										null === (i = t.querySelector('button')) ||
										void 0 === i ||
										i.classList.add('active');
							}
						},
					},
					{
						key: '_enableAutoplay',
						value: function () {
							this.autoplayBtn.addEventListener('click', this._handleAutoplay, {
								passive: !0,
							}),
								this.autoplayBtn.addEventListener('keypress', this._handleAutoplay, {
									passive: !0,
								}),
								this.slider.addEventListener('click', this._handleAutoplayEvent, {
									passive: !0,
								}),
								this.slider.addEventListener('touchstart', this._handleAutoplayEvent, {
									passive: !0,
								}),
								this.options.autoplayHoverPause &&
									(this.slider.addEventListener('mouseenter', this._handleAutoplayHover, {
										passive: !0,
									}),
									this.slider.addEventListener('mouseleave', this._handleAutoplayHover, {
										passive: !0,
									})),
								this.slider.insertAdjacentElement('beforebegin', this.autoplayBtn),
								this._toggleAutoplay($i.Enable);
						},
					},
					{
						key: '_disableAutoplay',
						value: function () {
							var e;
							this._toggleAutoplay($i.Disable),
								this.autoplayBtn.removeEventListener('click', this._handleAutoplay),
								this.autoplayBtn.removeEventListener('keypress', this._handleAutoplay),
								this.slider.removeEventListener('click', this._handleAutoplayEvent),
								this.slider.removeEventListener('touchstart', this._handleAutoplayEvent),
								this.slider.removeEventListener('mouseenter', this._handleAutoplayHover),
								this.slider.removeEventListener('mouseleave', this._handleAutoplayHover),
								null === (e = this.autoplayBtn.parentNode) ||
									void 0 === e ||
									e.removeChild(this.autoplayBtn);
						},
					},
					{
						key: '_enableSwipe',
						value: function () {
							this.options.swipe &&
								(this.slider.addEventListener('mousedown', this._swipeMouseDown),
								this.slider.addEventListener('mouseleave', this._swipeMouseUp),
								this.slider.addEventListener('mouseup', this._swipeMouseUp),
								this.slider.addEventListener('mousemove', this._swipeMouseMove),
								this.slider.addEventListener('touchstart', this._swipeTouchStart),
								this.slider.addEventListener('touchend', this._swipeTouchEnd),
								this.slider.addEventListener('touchmove', this._swipeTouchMove));
						},
					},
					{
						key: '_swipeMouseDown',
						value: function (e) {
							(this.mouseDown = !0),
								this.slider.classList.add('a11y-slider-scrolling'),
								(this.swipeStartX = e.pageX - this.slider.offsetLeft),
								(this.swipeX = this.slider.scrollLeft),
								(this.swipeXCached = this.slider.scrollLeft);
						},
					},
					{
						key: '_swipeMouseUp',
						value: function () {
							if (this.mouseDown) {
								var e =
									(this.swipeXCached - (this.swipeX - 1)) *
										(this.swipeXCached - (this.swipeX + 1)) <=
									0;
								(this.mouseDown = !1),
									this.slider.classList.remove('a11y-slider-scrolling'),
									this.modernBrowser &&
										this.slider.scroll({
											left: e ? this.swipeXCached : this.swipeXCached - 1,
											behavior: this.isPlatformiOS ? 'auto' : 'smooth',
										});
							}
						},
					},
					{
						key: '_swipeMouseMove',
						value: function (e) {
							if (this.mouseDown) {
								e.preventDefault();
								var t = 2 * (e.pageX - this.slider.offsetLeft - this.swipeStartX);
								(this.slider.scrollLeft = this.swipeX - t),
									(this.swipeXCached = this.slider.scrollLeft);
							}
						},
					},
					{
						key: '_swipeTouchStart',
						value: function (e) {
							(this.touchStart = !0),
								this.slider.classList.add('a11y-slider-scrolling'),
								(this.swipeStartX = e.touches[0].pageX - this.slider.offsetLeft),
								(this.swipeX = this.slider.scrollLeft),
								(this.swipeXCached = this.slider.scrollLeft);
						},
					},
					{
						key: '_swipeTouchEnd',
						value: function () {
							if (this.touchStart) {
								var e =
									(this.swipeXCached - (this.swipeX - 1)) *
										(this.swipeXCached - (this.swipeX + 1)) <=
									0;
								(this.touchStart = !1),
									this.slider.classList.remove('a11y-slider-scrolling'),
									this.modernBrowser &&
										this.slider.scroll({
											left: e ? this.swipeXCached : this.swipeXCached - 1,
											behavior: this.isPlatformiOS ? 'auto' : 'smooth',
										});
							}
						},
					},
					{
						key: '_swipeTouchMove',
						value: function (e) {
							if (this.touchStart) {
								e.preventDefault();
								var t =
									2 * (e.touches[0].pageX - this.slider.offsetLeft - this.swipeStartX);
								(this.slider.scrollLeft = this.swipeX - t),
									(this.swipeXCached = this.slider.scrollLeft);
							}
						},
					},
					{
						key: '_disableSwipe',
						value: function () {
							this.slider.removeEventListener('mousedown', this._swipeMouseDown),
								this.slider.removeEventListener('mouseleave', this._swipeMouseUp),
								this.slider.removeEventListener('mouseup', this._swipeMouseUp),
								this.slider.removeEventListener('mousemove', this._swipeMouseMove),
								this.slider.removeEventListener('touchstart', this._swipeTouchStart),
								this.slider.removeEventListener('touchend', this._swipeTouchEnd),
								this.slider.removeEventListener('touchmove', this._swipeTouchMove);
						},
					},
					{
						key: '_toggleAutoplay',
						value: function (e) {
							var t = this;
							e === $i.Enable
								? ((t._autoplayTimer = window.setInterval(function () {
										t._goPrevOrNext(Ui.Next);
								  }, t.options.autoplaySpeed)),
								  t.autoplayBtn.setAttribute('data-autoplaying', 'true'),
								  t._dispatchEvent('autoplayStart', {
										currentSlide: t.activeSlide,
										a11ySlider: t,
								  }))
								: e === $i.Disable &&
								  (window.clearInterval(t._autoplayTimer),
								  (t._autoplayTimer = Ki.No),
								  t.autoplayBtn.setAttribute('data-autoplaying', 'false'),
								  t._dispatchEvent('autoplayStop', {
										currentSlide: t.activeSlide,
										a11ySlider: t,
								  }));
						},
					},
					{
						key: '_goPrevOrNext',
						value: function (e) {
							var t = this;
							this._getActiveAndVisible(null, function (i, n) {
								var r = t.slider.firstElementChild,
									s = t.slider.lastElementChild,
									o = i[0],
									a = i[i.length - 1];
								e === Ui.Next
									? a === s
										? !0 === t.options.infinite && t.scrollToSlide(r)
										: t.scrollToSlide(n && n.nextElementSibling)
									: e === Ui.Prev &&
									  (o === r
											? !0 === t.options.infinite && t.scrollToSlide(s)
											: t.scrollToSlide(n && n.previousElementSibling));
							});
						},
					},
					{
						key: 'scrollToSlide',
						value: function (e) {
							var t,
								i = this,
								n = this.slider.scrollLeft;
							if (Zi(e)) t = this.slides[e];
							else {
								if (!(e instanceof HTMLElement))
									throw new Error('scrollToSlide only accepts an HTMLElement or number');
								t = e;
							}
							this._dispatchEvent('beforeChange', {
								currentSlide: this.activeSlide,
								nextSlide: t,
								a11ySlider: this,
							}),
								!0 === this.options.adaptiveHeight && this._updateHeight(t),
								this.modernBrowser
									? this.slider.scroll({
											left: t.offsetLeft,
											behavior: this.isPlatformiOS ? 'auto' : 'smooth',
									  })
									: (this.slider.scrollLeft = t.offsetLeft),
								setTimeout(function () {
									i.slider.scrollLeft === n &&
										i.sliderEnabled === Yi.Enabled &&
										i._setCSS(t);
								}, 50),
								this._updateDots(t);
						},
					},
					{
						key: 'updateOptions',
						value: function (e) {
							Object.assign(this.options, e),
								this._disableSlider(),
								this._checkShouldEnable();
						},
					},
					{
						key: '_updateHeight',
						value: function (e) {
							if (e instanceof HTMLElement) {
								var t = nn(e, 'height');
								this.slider.style.height = ''.concat(t, 'px');
							} else this.slider.style.height = '';
						},
					},
					{
						key: 'refreshHeight',
						value: function () {
							this._updateHeight(this.activeSlide);
						},
					},
					{
						key: '_getActiveAndVisible',
						value: function (e, t) {
							var i = !this.slider.classList.contains(this._sliderClass),
								n = this.slider.style.borderWidth;
							(this.slider.style.borderWidth = '0px'),
								i && this.slider.classList.add(this._sliderClass);
							var r = [],
								s = Math.round(this.slider.getBoundingClientRect().width),
								o = this.slider.scrollLeft - 1 < 0 ? 0 : this.slider.scrollLeft - 1;
							if (
								(tn(this.slides, function (e) {
									var t = e.offsetLeft < 0 ? 0 : e.offsetLeft;
									t >= o && t < o + s && r.push(e);
								}),
								(this.slider.style.borderWidth = n),
								i && this.slider.classList.remove(this._sliderClass),
								(this.visibleSlides = r),
								e)
							)
								this.activeSlide = e;
							else if (!0 === this.options.centerMode)
								this.activeSlide =
									this.visibleSlides[Math.floor((this.visibleSlides.length - 1) / 2)];
							else {
								var a;
								this.activeSlide =
									null !== (a = r[0]) && void 0 !== a ? a : this.slides[0];
							}
							t && t(this.visibleSlides, this.activeSlide);
						},
					},
					{
						key: '_handlePrev',
						value: function (e) {
							!0 === Qi(e) &&
								(this._goPrevOrNext(Ui.Prev), this._toggleAutoplay($i.Disable));
						},
					},
					{
						key: '_handleNext',
						value: function (e) {
							!0 === Qi(e) &&
								(this._goPrevOrNext(Ui.Next), this._toggleAutoplay($i.Disable));
						},
					},
					{
						key: '_handleAutoplay',
						value: function (e) {
							!0 === Qi(e) &&
								(this._autoplayTimer === Ki.No
									? this._toggleAutoplay($i.Enable)
									: this._toggleAutoplay($i.Disable));
						},
					},
					{
						key: '_handleAutoplayHover',
						value: function (e) {
							'mouseenter' === e.type
								? this._autoplayTimer !== Ki.No &&
								  (this._toggleAutoplay($i.Disable), (this._pauseOnMouseLeave = !0))
								: 'mouseleave' === e.type &&
								  this._pauseOnMouseLeave &&
								  this._autoplayTimer === Ki.No &&
								  (this._toggleAutoplay($i.Enable), (this._pauseOnMouseLeave = !1));
						},
					},
					{
						key: '_handleAutoplayEvent',
						value: function (e) {
							(this._pauseOnMouseLeave = !1), this._toggleAutoplay($i.Disable);
						},
					},
					{
						key: '_handleScroll',
						value: function () {
							this._scrollFinish();
						},
					},
					{
						key: '_scrollFinish',
						value: function () {
							this._setCSS(),
								this._dispatchEvent('afterChange', {
									currentSlide: this.activeSlide,
									a11ySlider: this,
								});
						},
					},
					{
						key: '_dispatchEvent',
						value: function (e, t) {
							var i = (function (e, t) {
								var i = document.createEvent('CustomEvent');
								return (
									(t = t || { bubbles: !1, cancelable: !1, detail: void 0 }),
									i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
									i
								);
							})(e, { detail: t });
							this.slider.dispatchEvent(i);
						},
					},
					{
						key: 'destroy',
						value: function () {
							this._disableSlider(),
								window.removeEventListener('resize', this._checkShouldEnableDebounced),
								this._dispatchEvent('destroy', { a11ySlider: this });
						},
					},
				]) && pi(t.prototype, i),
				n && pi(t, n),
				e
			);
		})()
	);
});

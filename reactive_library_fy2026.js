(function(sttc) {
    'use strict';
    var r, aa = Object.defineProperty, ba = globalThis, ca = typeof Symbol === "function" && typeof Symbol("x") === "symbol", da = {}, ea = {};
    function fa(a, b, c) {
        if (!c || a != null) {
            c = ea[b];
            if (c == null)
                return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }
    function ha(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = d.length === 1;
                var e = d[0], f;
                !a && e in da ? f = da : f = ba;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f))
                        break a;
                    f = f[g]
                }
                d = d[d.length - 1];
                c = ca && c === "es6" ? f[d] : null;
                b = b(c);
                b != null && (a ? aa(da, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (ea[d] === void 0 && (a = Math.random() * 1E9 >>> 0,
                ea[d] = ca ? ba.Symbol(d) : "$jscp$" + a + "$" + d),
                aa(f, ea[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    }
    ha("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var t = this || self;
    function ia(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = t, e = 0; e < c.length; e++)
                if (d = d[c[e]],
                d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }
    function ja(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    function ka(a) {
        var b = ja(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }
    function la(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }
    function x(a) {
        return Object.prototype.hasOwnProperty.call(a, ma) && a[ma] || (a[ma] = ++na)
    }
    var ma = "closure_uid_" + (Math.random() * 1E9 >>> 0)
      , na = 0;
    function oa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function pa(a, b, c) {
        if (!a)
            throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function qa(a, b, c) {
        qa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? oa : pa;
        return qa.apply(null, arguments)
    }
    function ra(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    ;var sa;
    function ta(a) {
        t.setTimeout( () => {
            throw a;
        }
        , 0)
    }
    ;var ua = ia(610401301, !1)
      , va = ia(748402147, !0);
    function wa() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var xa;
    const ya = t.navigator;
    xa = ya ? ya.userAgentData || null : null;
    function za() {
        if (!ua || !xa)
            return !1;
        for (let a = 0; a < xa.brands.length; a++) {
            let {brand: b} = xa.brands[a];
            if (b && b.indexOf("Chromium") != -1)
                return !0
        }
        return !1
    }
    function y(a) {
        return wa().indexOf(a) != -1
    }
    ;function Aa() {
        return ua ? !!xa && xa.brands.length > 0 : !1
    }
    function Ba() {
        return Aa() ? za() : (y("Chrome") || y("CriOS")) && !(Aa() ? 0 : y("Edge")) || y("Silk")
    }
    ;function Ca(a, b) {
        if (typeof a === "string")
            return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Da(a, b) {
        var c = a.length
          , d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Ea(a, b) {
        var c = a.length
          , d = []
          , e = 0
          , f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                let k = f[g];
                b.call(void 0, k, g, a) && (d[e++] = k)
            }
        return d
    }
    function Fa(a, b) {
        var c = a.length
          , d = Array(c)
          , e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Ga(a, b) {
        var c = a.length
          , d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ha(a, b) {
        return Ca(a, b) >= 0
    }
    function Ia(a) {
        var b = a.length;
        if (b > 0) {
            let c = Array(b);
            for (let d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Ja(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            let d = arguments[c];
            if (ka(d)) {
                let e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++)
                    a[e + g] = d[g]
            } else
                a.push(d)
        }
    }
    function Ka(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            let d = Math.floor(b() * (c + 1))
              , e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    }
    ;function La(a) {
        La[" "](a);
        return a
    }
    La[" "] = function() {}
    ;
    var Ma = y("Gecko") && !(wa().toLowerCase().indexOf("webkit") != -1 && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge")
      , Na = wa().toLowerCase().indexOf("webkit") != -1 && !y("Edge");
    function Oa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    }
    ;let Pa = void 0, Qa;
    function Ra(a) {
        if (Qa)
            throw Error("");
        Qa = b => {
            t.setTimeout( () => {
                a(b)
            }
            , 0)
        }
    }
    function Sa(a) {
        if (Qa)
            try {
                Qa(a)
            } catch (b) {
                throw b.cause = a,
                b;
            }
    }
    function Ta(a) {
        a = Error(a);
        Oa(a, "warning");
        Sa(a);
        return a
    }
    ;function Ua(a, b=!1) {
        return b && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol()
    }
    var Va = Ua()
      , Wa = Ua()
      , Xa = Ua()
      , Ya = Ua("m_m", !0);
    const z = Ua("jas", !0);
    var Za;
    const $a = [];
    $a[z] = 7;
    Za = Object.freeze($a);
    function ab(a) {
        if (4 & a)
            return 512 & a ? 512 : 1024 & a ? 1024 : 0
    }
    ;var bb = {};
    function cb(a, b) {
        return b === void 0 ? a.g !== db && !!(2 & (a.Y[z] | 0)) : !!(2 & b) && a.g !== db
    }
    const db = {};
    var eb = Object.freeze({})
      , fb = Object.freeze({});
    function gb(a) {
        var b = hb;
        if (!ib(a))
            throw b = (typeof b === "function" ? b() : b)?.concat("\n") ?? "",
            Error(b + String(a));
        return a
    }
    function jb(a) {
        a.bf = !0;
        return a
    }
    let hb = void 0;
    var kb = jb(a => typeof a === "number")
      , lb = jb(a => typeof a === "string")
      , ib = jb(a => typeof a === "function")
      , mb = jb(a => Array.isArray(a));
    function nb() {
        return jb(a => mb(a) ? a.every(b => kb(b)) : !1)
    }
    ;function ob(a) {
        if (lb(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a))
                throw Error(String(a));
        } else if (kb(a) && !Number.isSafeInteger(a))
            throw Error(String(a));
        return BigInt(a)
    }
    var rb = jb(a => a >= pb && a <= qb);
    const pb = BigInt(Number.MIN_SAFE_INTEGER)
      , qb = BigInt(Number.MAX_SAFE_INTEGER);
    let sb = 0
      , tb = 0;
    function ub(a) {
        var b = a >>> 0;
        sb = b;
        tb = (a - b) / 4294967296 >>> 0
    }
    function vb(a) {
        if (a < 0) {
            ub(-a);
            a = sb;
            var b = tb;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            let[c,d] = [a, b];
            sb = c >>> 0;
            tb = d >>> 0
        } else
            ub(a)
    }
    function wb(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }
    ;const xb = typeof BigInt === "function" ? BigInt.asIntN : void 0
      , yb = Number.isSafeInteger
      , zb = Number.isFinite
      , Ab = Math.trunc
      , Bb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function Cb(a) {
        switch (typeof a) {
        case "bigint":
            return !0;
        case "number":
            return zb(a);
        case "string":
            return Bb.test(a);
        default:
            return !1
        }
    }
    function Db(a) {
        if (!zb(a))
            throw Ta("enum");
        return a | 0
    }
    function Eb(a) {
        return a == null ? a : Db(a)
    }
    function Fb(a) {
        return a == null ? a : zb(a) ? a | 0 : void 0
    }
    function Gb(a) {
        if (typeof a !== "number")
            throw Ta("int32");
        if (!zb(a))
            throw Ta("int32");
        return a | 0
    }
    function Hb(a) {
        return a == null ? a : Gb(a)
    }
    function Ib(a) {
        if (a == null)
            return a;
        if (typeof a === "string" && a)
            a = +a;
        else if (typeof a !== "number")
            return;
        return zb(a) ? a | 0 : void 0
    }
    function Jb(a) {
        if (!Cb(a))
            throw Ta("int64");
        switch (typeof a) {
        case "string":
            return Kb(a);
        case "bigint":
            return ob(xb(64, a));
        default:
            return Lb(a)
        }
    }
    function Kb(a) {
        var b = Ab(Number(a));
        if (yb(b))
            return ob(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return ob(xb(64, BigInt(a)))
    }
    function Lb(a) {
        if (yb(a)) {
            var b = Ab(a);
            if (!yb(b)) {
                vb(b);
                a = sb;
                var c = tb;
                if (b = c & 2147483648)
                    a = ~a + 1 >>> 0,
                    c = ~c >>> 0,
                    a == 0 && (c = c + 1 >>> 0);
                let d = c * 4294967296 + (a >>> 0);
                a = Number.isSafeInteger(d) ? d : wb(a, c);
                b = typeof a === "number" ? b ? -a : a : b ? "-" + a : a
            }
            b = ob(b)
        } else
            a = Ab(a),
            yb(a) ? b = String(a) : (vb(a),
            a = sb,
            c = tb,
            c & 2147483648 ? b = "" + (BigInt(c | 0) << BigInt(32) | BigInt(a >>> 0)) : b = wb(a, c)),
            b = ob(b);
        return b
    }
    function Nb(a) {
        var b = typeof a;
        if (a == null)
            return a;
        if (b === "bigint")
            return ob(xb(64, a));
        if (Cb(a))
            return b === "string" ? Kb(a) : Lb(a)
    }
    function Ob(a) {
        if (typeof a !== "string")
            throw Error();
        return a
    }
    function Pb(a) {
        if (a != null && typeof a !== "string")
            throw Error();
        return a
    }
    function Qb(a) {
        return a == null || typeof a === "string" ? a : void 0
    }
    function Rb(a, b, c, d) {
        if (a != null && a[Ya] === bb)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? b[Va] || (b[Va] = Sb(b)) : new b : void 0;
        c = a[z] | 0;
        d = c | d & 32 | d & 2;
        d !== c && (a[z] = d);
        return new b(a)
    }
    function Sb(a) {
        a = new a;
        var b = a.Y;
        b[z] |= 34;
        return a
    }
    ;function Tb(a) {
        return a
    }
    ;function Ub(a, b, c, d) {
        var e = d !== void 0;
        d = !!d;
        var f = []
          , g = a.length
          , k = 4294967295
          , h = !1
          , n = !!(b & 64)
          , l = n ? b & 128 ? 0 : -1 : void 0;
        if (!(b & 1)) {
            var m = g && a[g - 1];
            m != null && typeof m === "object" && m.constructor === Object ? (g--,
            k = g) : m = void 0;
            !n || b & 128 || e || (h = !0,
            k = (Vb ?? Tb)(k - l, l, a, m, void 0) + l)
        }
        b = void 0;
        for (e = 0; e < g; e++) {
            let p = a[e];
            if (p != null && (p = c(p, d)) != null)
                if (n && e >= k) {
                    let q = e - l;
                    (b ?? (b = {}))[q] = p
                } else
                    f[e] = p
        }
        if (m)
            for (let p in m) {
                if (!Object.prototype.hasOwnProperty.call(m, p))
                    continue;
                a = m[p];
                if (a == null || (a = c(a, d)) == null)
                    continue;
                g = +p;
                let q;
                n && !Number.isNaN(g) && (q = g + l) < k ? f[q] = a : (b ?? (b = {}))[p] = a
            }
        b && (h ? f.push(b) : f[k] = b);
        return f
    }
    function Wb(a) {
        switch (typeof a) {
        case "number":
            return Number.isFinite(a) ? a : "" + a;
        case "bigint":
            return rb(a) ? Number(a) : "" + a;
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (Array.isArray(a)) {
                let b = a[z] | 0;
                return a.length === 0 && b & 1 ? void 0 : Ub(a, b, Wb)
            }
            if (a != null && a[Ya] === bb)
                return Xb(a);
            return
        }
        return a
    }
    let Vb;
    function Xb(a) {
        a = a.Y;
        return Ub(a, a[z] | 0, Wb)
    }
    ;function Yb(a, b, c, d=0) {
        if (a == null) {
            var e = 32;
            c ? (a = [c],
            e |= 128) : a = [];
            b && (e = e & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a))
                throw Error("narr");
            e = a[z] | 0;
            if (va && 1 & e)
                throw Error("rfarr");
            2048 & e && !(2 & e) && Zb();
            if (e & 256)
                throw Error("farr");
            if (e & 64)
                return (e | d) !== e && (a[z] = e | d),
                a;
            if (c && (e |= 128,
            c !== a[0]))
                throw Error("mid");
            a: {
                c = a;
                e |= 64;
                var f = c.length;
                if (f) {
                    var g = f - 1;
                    let h = c[g];
                    if (h != null && typeof h === "object" && h.constructor === Object) {
                        b = e & 128 ? 0 : -1;
                        g -= b;
                        if (g >= 1024)
                            throw Error("pvtlmt");
                        for (var k in h) {
                            if (!Object.prototype.hasOwnProperty.call(h, k))
                                continue;
                            f = +k;
                            if (f < g)
                                c[f + b] = h[k],
                                delete h[k];
                            else
                                break
                        }
                        e = e & -16760833 | (g & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    k = Math.max(b, f - (e & 128 ? 0 : -1));
                    if (k > 1024)
                        throw Error("spvt");
                    e = e & -16760833 | (k & 1023) << 14
                }
            }
        }
        a[z] = e | 64 | d;
        return a
    }
    function Zb() {
        if (va)
            throw Error("carr");
        if (Xa != null) {
            var a = Pa ?? (Pa = {});
            var b = a[Xa] || 0;
            b >= 5 || (a[Xa] = b + 1,
            a = Error(),
            Oa(a, "incident"),
            Qa ? Sa(a) : ta(a))
        }
    }
    ;function $b(a, b) {
        if (typeof a !== "object")
            return a;
        if (Array.isArray(a)) {
            var c = a[z] | 0;
            a.length === 0 && c & 1 ? a = void 0 : c & 2 || (!b || 4096 & c || 16 & c ? a = ac(a, c, !1, b && !(c & 16)) : (a[z] |= 34,
            c & 4 && Object.freeze(a)));
            return a
        }
        if (a != null && a[Ya] === bb)
            return b = a.Y,
            c = b[z] | 0,
            cb(a, c) ? a : bc(a, b, c) ? cc(a, b) : ac(b, c)
    }
    function cc(a, b, c) {
        a = new a.constructor(b);
        c && (a.g = db);
        a.j = db;
        return a
    }
    function ac(a, b, c, d) {
        d ?? (d = !!(34 & b));
        a = Ub(a, b, $b, d);
        d = 32;
        c && (d |= 2);
        b = b & 16769217 | d;
        a[z] = b;
        return a
    }
    function dc(a) {
        var b = a.Y
          , c = b[z] | 0;
        return cb(a, c) ? bc(a, b, c) ? cc(a, b, !0) : new a.constructor(ac(b, c, !1)) : a
    }
    function ec(a) {
        var b = a.Y
          , c = b[z] | 0;
        return cb(a, c) ? a : bc(a, b, c) ? cc(a, b) : new a.constructor(ac(b, c, !0))
    }
    function fc(a) {
        if (a.g !== db)
            return !1;
        var b = a.Y;
        b = ac(b, b[z] | 0);
        b[z] |= 2048;
        a.Y = b;
        a.g = void 0;
        a.j = void 0;
        return !0
    }
    function hc(a) {
        if (!fc(a) && cb(a, a.Y[z] | 0))
            throw Error();
    }
    function ic(a, b) {
        b === void 0 && (b = a[z] | 0);
        b & 32 && !(b & 4096) && (a[z] = b | 4096)
    }
    function bc(a, b, c) {
        return c & 2 ? !0 : c & 32 && !(c & 4096) ? (b[z] = c | 2,
        a.g = db,
        !0) : !1
    }
    ;const jc = ob(0)
      , B = {};
    function C(a, b, c, d) {
        b = kc(a.Y, b, void 0, d);
        if (b !== null || c && a.j !== db)
            return b
    }
    function kc(a, b, c, d) {
        if (b === -1)
            return null;
        var e = b + (c ? 0 : -1)
          , f = a.length - 1;
        if (!(f < 1 + (c ? 0 : -1))) {
            if (e >= f) {
                var g = a[f];
                if (g != null && typeof g === "object" && g.constructor === Object) {
                    c = g[b];
                    var k = !0
                } else if (e === f)
                    c = g;
                else
                    return
            } else
                c = a[e];
            if (d && c != null) {
                d = d(c);
                if (d == null)
                    return d;
                if (!Object.is(d, c))
                    return k ? g[b] = d : a[e] = d,
                    d
            }
            return c
        }
    }
    function lc(a, b, c) {
        hc(a);
        var d = a.Y;
        mc(d, d[z] | 0, b, c);
        return a
    }
    function mc(a, b, c, d) {
        var e = c + -1
          , f = a.length - 1;
        if (f >= 0 && e >= f) {
            let g = a[f];
            if (g != null && typeof g === "object" && g.constructor === Object)
                return g[c] = d,
                b
        }
        if (e <= f)
            return a[e] = d,
            b;
        d !== void 0 && (f = (b ?? (b = a[z] | 0)) >> 14 & 1023 || 536870912,
        c >= f ? d != null && (a[f + -1] = {
            [c]: d
        }) : a[e] = d);
        return b
    }
    function nc() {
        return void 0 === eb ? 2 : 4
    }
    function oc(a, b, c, d, e) {
        var f = a.Y
          , g = f[z] | 0;
        d = cb(a, g) ? 1 : d;
        e = !!e || d === 3;
        d === 2 && fc(a) && (f = a.Y,
        g = f[z] | 0);
        a = pc(f, b);
        var k = a === Za ? 7 : a[z] | 0
          , h = qc(k, g);
        var n = 4 & h ? !1 : !0;
        if (n) {
            4 & h && (a = [...a],
            k = 0,
            h = rc(h, g),
            g = mc(f, g, b, a));
            let l = 0
              , m = 0;
            for (; l < a.length; l++) {
                let p = c(a[l]);
                p != null && (a[m++] = p)
            }
            m < l && (a.length = m);
            c = (h | 4) & -513;
            h = c &= -1025;
            h &= -4097
        }
        h !== k && (a[z] = h,
        2 & h && Object.freeze(a));
        return a = sc(a, h, f, g, b, d, n, e)
    }
    function sc(a, b, c, d, e, f, g, k) {
        var h = b;
        f === 1 || (f !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? tc(b) || (b |= !a.length || g && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256,
        b !== h && (a[z] = b),
        Object.freeze(a)) : (f === 2 && tc(b) && (a = [...a],
        h = 0,
        b = rc(b, d),
        d = mc(c, d, e, a)),
        tc(b) || (k || (b |= 16),
        b !== h && (a[z] = b)));
        2 & b || !(4096 & b || 16 & b) || ic(c, d);
        return a
    }
    function pc(a, b) {
        a = kc(a, b);
        return Array.isArray(a) ? a : Za
    }
    function qc(a, b) {
        2 & b && (a |= 2);
        return a | 1
    }
    function tc(a) {
        return !!(2 & a) && !!(4 & a) || !!(256 & a)
    }
    function uc(a, b, c, d) {
        hc(a);
        var e = a.Y
          , f = e[z] | 0;
        if (c == null)
            return mc(e, f, b),
            a;
        var g = c === Za ? 7 : c[z] | 0
          , k = g
          , h = tc(g)
          , n = h || Object.isFrozen(c);
        h || (g = 0);
        n || (c = [...c],
        k = 0,
        g = rc(g, f),
        n = !1);
        g |= 5;
        h = ab(g) ?? 1024;
        g |= h;
        for (let l = 0; l < c.length; l++) {
            let m = c[l]
              , p = d(m, h);
            Object.is(m, p) || (n && (c = [...c],
            k = 0,
            g = rc(g, f),
            n = !1),
            c[l] = p)
        }
        g !== k && (n && (c = [...c],
        g = rc(g, f)),
        c[z] = g);
        mc(e, f, b, c);
        return a
    }
    function vc(a, b, c, d) {
        hc(a);
        var e = a.Y;
        mc(e, e[z] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }
    function wc(a, b, c, d) {
        hc(a);
        var e = a.Y
          , f = e[z] | 0;
        if (d == null) {
            let g = xc(e);
            if (yc(g, e, f, c) === b)
                g.set(c, 0);
            else
                return a
        } else
            f = zc(e, f, c, b);
        mc(e, f, b, d);
        return a
    }
    function Ac(a, b, c) {
        a = a.Y;
        return yc(xc(a), a, void 0, b) === c ? c : -1
    }
    function xc(a) {
        return a[Wa] ?? (a[Wa] = new Map)
    }
    function zc(a, b, c, d) {
        var e = xc(a)
          , f = yc(e, a, b, c);
        f !== d && (f && (b = mc(a, b, f)),
        e.set(c, d));
        return b
    }
    function yc(a, b, c, d) {
        var e = a.get(d);
        if (e != null)
            return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            let g = d[f];
            kc(b, g) != null && (e !== 0 && (c = mc(b, c, e)),
            e = g)
        }
        a.set(d, e);
        return e
    }
    function Bc(a, b, c) {
        hc(a);
        a = a.Y;
        var d = a[z] | 0
          , e = kc(a, c)
          , f = void 0 === fb;
        b = Rb(e, b, !f, d);
        if (!f || b)
            return b = dc(b),
            e !== b && (d = mc(a, d, c, b),
            ic(a, d)),
            b
    }
    function Cc(a, b, c, d) {
        var e = !1;
        d = kc(a, d, void 0, f => {
            var g = Rb(f, c, !1, b);
            e = g !== f && g != null;
            return g
        }
        );
        if (d != null)
            return e && !cb(d) && ic(a, b),
            d
    }
    function Dc(a, b, c) {
        var d = a.Y
          , e = d[z] | 0;
        b = Cc(d, e, b, c);
        if (b == null)
            return b;
        e = d[z] | 0;
        if (!cb(a, e)) {
            let f = dc(b);
            f !== b && (fc(a) && (d = a.Y,
            e = d[z] | 0),
            b = f,
            e = mc(d, e, c, b),
            ic(d, e))
        }
        return b
    }
    function Ec(a, b, c) {
        var d = nc()
          , e = a.Y
          , f = e;
        e = e[z] | 0;
        var g = cb(a, e)
          , k = g ? 1 : d;
        d = k === 3;
        var h = !g;
        (k === 2 || h) && fc(a) && (f = a.Y,
        e = f[z] | 0);
        a = pc(f, c);
        var n = a === Za ? 7 : a[z] | 0
          , l = qc(n, e);
        if (g = !(4 & l)) {
            var m = a
              , p = e;
            let q = !!(2 & l);
            q && (p |= 2);
            let w = !q
              , A = !0
              , I = 0
              , Z = 0;
            for (; I < m.length; I++) {
                let M = Rb(m[I], b, !1, p);
                if (M instanceof b) {
                    if (!q) {
                        let u = cb(M);
                        w && (w = !u);
                        A && (A = u)
                    }
                    m[Z++] = M
                }
            }
            Z < I && (m.length = Z);
            l |= 4;
            l = A ? l & -4097 : l | 4096;
            l = w ? l | 8 : l & -9
        }
        l !== n && (a[z] = l,
        2 & l && Object.freeze(a));
        if (h && !(8 & l || !a.length && (k === 1 || (k !== 4 ? 0 : 2 & l || !(16 & l) && 32 & e)))) {
            tc(l) && (a = [...a],
            l = rc(l, e),
            e = mc(f, e, c, a));
            b = a;
            h = l;
            for (n = 0; n < b.length; n++)
                m = b[n],
                l = dc(m),
                m !== l && (b[n] = l);
            h |= 8;
            l = h = b.length ? h | 4096 : h & -4097;
            a[z] = l
        }
        return a = sc(a, l, f, e, c, k, g, d)
    }
    function Fc(a) {
        a == null && (a = void 0);
        return a
    }
    function Gc(a, b, c) {
        c = Fc(c);
        lc(a, b, c);
        c && !cb(c) && ic(a.Y);
        return a
    }
    function Hc(a, b, c, d) {
        d = Fc(d);
        wc(a, b, c, d);
        d && !cb(d) && ic(a.Y);
        return a
    }
    function rc(a, b) {
        return a = (2 & b ? a | 2 : a & -3) & -273
    }
    function Ic(a, b, c) {
        a = C(a, b, c);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }
    function Jc(a, b, c) {
        return Qb(C(a, b, c))
    }
    function Kc(a, b) {
        return C(a, b, void 0, Nb) ?? jc
    }
    function Lc(a, b, c) {
        a = oc(a, b, Ib, 3, !0);
        if (typeof c !== "number" || c < 0 || c >= a.length)
            throw Error();
        return a[c]
    }
    function Mc(a, b, c) {
        return vc(a, b, c == null ? c : Jb(c), "0")
    }
    function Nc(a, b, c) {
        return vc(a, b, Pb(c), "")
    }
    ;function Oc(a) {
        return ec(a)
    }
    var D = class {
        constructor(a) {
            this.Y = Yb(a, void 0, void 0, 2048)
        }
        toJSON() {
            return Xb(this)
        }
    }
    ;
    D.prototype[Ya] = bb;
    function Pc(a) {
        return () => a[Va] || (a[Va] = Sb(a))
    }
    function Qc(a) {
        return b => {
            if (b == null || b == "")
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("dnarr");
                b[z] |= 32;
                b = new a(b)
            }
            return b
        }
    }
    ;function Rc(a) {
        a && typeof a.dispose == "function" && a.dispose()
    }
    ;function E() {
        this.N = this.N;
        this.Fa = this.Fa
    }
    E.prototype.N = !1;
    E.prototype.dispose = function() {
        this.N || (this.N = !0,
        this.jb())
    }
    ;
    E.prototype[fa(Symbol, "dispose")] = function() {
        this.dispose()
    }
    ;
    function F(a, b) {
        G(a, ra(Rc, b))
    }
    function G(a, b) {
        a.N ? b() : (a.Fa || (a.Fa = []),
        a.Fa.push(b))
    }
    E.prototype.jb = function() {
        if (this.Fa)
            for (; this.Fa.length; )
                this.Fa.shift()()
    }
    ;
    function Sc(a, b) {
        if (a)
            for (let c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    function Tc(a) {
        var b = [];
        Sc(a, c => {
            b.push(c)
        }
        );
        return b
    }
    ;function Uc(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null)
                a: {
                    try {
                        La(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch {
            return !1
        }
    }
    function Vc(a) {
        return Uc(a.top) ? a.top : null
    }
    ;function Wc() {
        return !1
    }
    function Xc() {
        return !0
    }
    function Yc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function Zc(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    function $c(a) {
        var b = a;
        return function() {
            if (b) {
                let c = b;
                b = null;
                c()
            }
        }
    }
    function ad(a) {
        function b() {
            d = t.setTimeout(c, 100);
            var g = f;
            f = [];
            a.apply(void 0, g)
        }
        function c() {
            d = 0;
            e && (e = !1,
            b())
        }
        var d = 0
          , e = !1
          , f = [];
        return function(g) {
            f = arguments;
            d ? e = !0 : b()
        }
    }
    ;function bd() {
        return ua && xa ? xa.mobile : !cd() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }
    function cd() {
        return ua && xa ? !xa.mobile && (y("iPad") || y("Android") || y("Silk")) : y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    }
    function dd() {
        return !bd() && !cd()
    }
    ;/* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/
    let ed = globalThis.trustedTypes, fd;
    function gd() {
        var a = null;
        if (!ed)
            return a;
        try {
            let b = c => c;
            a = ed.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    }
    function hd() {
        fd === void 0 && (fd = gd());
        return fd
    }
    ;var id = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    function jd(a) {
        var b = hd();
        a = b ? b.createScriptURL(a) : a;
        return new id(a)
    }
    ;var kd = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var ld = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    function md(a=document) {
        a = a.querySelector?.("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    }
    ;var nd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    function od(a) {
        var b = md(a.ownerDocument);
        b && a.setAttribute("nonce", b)
    }
    ;var pd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    }
    ;
    function qd(a) {
        var b = rd`* { pointer-events: none; }`;
        if (b instanceof pd)
            b = b.g;
        else
            throw Error("");
        a.textContent = b
    }
    ;function sd(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(td, function(e, f) {
            var g = c[e];
            if (g)
                return g;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)),
            isNaN(f) || (g = String.fromCharCode(f)));
            if (!g) {
                g = e + " ";
                g = (f = hd()) ? f.createHTML(g) : g;
                g = new ld(g);
                if (d.nodeType === 1 && /^(script|style)$/i.test(d.tagName))
                    throw Error("");
                if (g instanceof ld)
                    g = g.g;
                else
                    throw Error("");
                d.innerHTML = g;
                g = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = g
        })
    }
    var td = /&([^;\s<&]+);?/g;
    function ud(a) {
        var b = 0;
        for (let c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }
    function vd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function wd(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function xd(a) {
        if (Ba() && bd()) {
            var b = Vc(a);
            if (b) {
                a = yd() === 0;
                var c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]')
                  , d = b.innerWidth;
                b = b.outerWidth;
                if (d === 0)
                    a = 1;
                else {
                    var e = Math.round((b / d + Number.EPSILON) * 100) / 100;
                    a = e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
                }
            } else
                a = 1
        } else
            a = 1;
        return a
    }
    var yd = Zc( () => bd() ? 2 : cd() ? 1 : 0);
    function zd() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            let a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    }
    ;let Ad, Bd = 64;
    function Cd() {
        try {
            return Ad ?? (Ad = new Uint32Array(64)),
            Bd >= 64 && (crypto.getRandomValues(Ad),
            Bd = 0),
            Ad[Bd++]
        } catch (a) {
            return Math.floor(Math.random() * 2 ** 32)
        }
    }
    ;function Dd(a) {
        if (!kb(a.goog_pvsid))
            try {
                let b = Cd() + (Cd() & 2 ** 21 - 1) * 2 ** 32;
                Object.defineProperty(a, "goog_pvsid", {
                    value: b,
                    configurable: !1
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
    ;function rd(a) {
        return new pd(a[0])
    }
    ;function Ed(a, ...b) {
        if (b.length === 0)
            return jd(a[0]);
        var c = a[0];
        for (let d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return jd(c)
    }
    ;function Fd(a, b) {
        var c = Gd("SCRIPT", a);
        if (b instanceof id)
            b = b.g;
        else
            throw Error("");
        c.src = b;
        od(c);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }
    function Hd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    var Id = /^([0-9.]+)px$/
      , Jd = /^(-?[0-9.]{1,30})$/;
    function Kd(a) {
        if (!Jd.test(a))
            return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    function Ld(a) {
        return (a = Id.exec(a)) ? +a[1] : null
    }
    var H = (a, b) => {
        Sc(b, (c, d) => {
            a.style.setProperty(d, c, "important")
        }
        )
    }
      , Md = (a, b) => {
        for (a = [a]; a.length; ) {
            var c = a.shift();
            b(c) !== !1 && (c = Ea(c.children || c.childNodes || [], d => d.nodeType === 1),
            c.length && a.unshift(...c))
        }
    }
      , Od = (a, b) => {
        if ("length"in a.style) {
            a = a.style;
            let c = a.length;
            for (let d = 0; d < c; d++) {
                let e = a[d];
                b(a[e], e, a)
            }
        } else
            a = Nd(a.style.cssText),
            Sc(a, b)
    }
      , Nd = a => {
        var b = {};
        if (a) {
            let c = /\s*:\s*/;
            Da((a || "").split(/\s*;\s*/), d => {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            }
            )
        }
        return b
    }
      , Pd = (a, b= () => !0) => {
        var c = /!\s*important/i;
        Od(a, (d, e) => {
            !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
        }
        )
    }
    ;
    const Qd = {
        ["http://googleads.g.doubleclick.net"]: !0,
        ["http://pagead2.googlesyndication.com"]: !0,
        ["https://googleads.g.doubleclick.net"]: !0,
        ["https://pagead2.googlesyndication.com"]: !0
    }
      , Rd = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/
      , Sd = /.*domain\.test$/
      , Td = /\.prod\.google\.com(:\d+)?$/;
    function Gd(a, b=document) {
        return b.createElement(String(a).toLowerCase())
    }
    ;function Vd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }
    function Wd(a) {
        return Vd.apply(null, arguments) / arguments.length
    }
    ;function Xd(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    r = Xd.prototype;
    r.equals = function(a) {
        return a instanceof Xd && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    }
    ;
    function Yd(a, b) {
        return new Xd(a.x - b.x,a.y - b.y)
    }
    r.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    r.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    r.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    r.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    }
    ;
    function Zd(a, b) {
        this.width = a;
        this.height = b
    }
    r = Zd.prototype;
    r.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    r.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    r.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    }
    ;
    function $d(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new Zd(a.clientWidth,a.clientHeight)
    }
    function ae(a) {
        var b = a.document
          , c = 0;
        if (b) {
            c = b.body;
            let d = b.documentElement;
            if (!d || !c)
                return 0;
            a = $d(a).height;
            if (b.compatMode == "CSS1Compat" && d.scrollHeight)
                c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                b = d.scrollHeight;
                let e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight,
                e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }
    function be(a) {
        return a ? a.defaultView : window
    }
    function ce(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function de(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function ee(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    }
    function fe(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    function ge(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (d == null || c <= d); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function he(a) {
        this.g = a || t.document || document
    }
    function ie(a, b) {
        return ce(a.g, b)
    }
    he.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    function je(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    r = je.prototype;
    r.getWidth = function() {
        return this.right - this.left
    }
    ;
    r.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    function ke(a) {
        return new je(a.top,a.right,a.bottom,a.left)
    }
    r.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    r.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    r.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    r.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    function J(a, b, c) {
        if (typeof b === "string")
            le(a, c, b);
        else
            for (let d in b)
                le(a, b[d], d)
    }
    var me = /^--.+/;
    function le(a, b, c) {
        (c = ne(a, c)) && (me.test(c) ? a.style.setProperty(c, b) : a.style[c] = b)
    }
    var oe = {};
    function ne(a, b) {
        var c = oe[b];
        if (!c) {
            var d = vd(b);
            c = d;
            a.style[d] === void 0 && (d = (Na ? "Webkit" : Ma ? "Moz" : null) + wd(d),
            a.style[d] !== void 0 && (c = d));
            oe[b] = c
        }
        return c
    }
    function pe(a, b) {
        var c = fe(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function qe(a, b) {
        return pe(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function re(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    function se(a) {
        var b = fe(a)
          , c = new Xd(0,0);
        if (a == (b ? fe(b) : document).documentElement)
            return c;
        a = re(a);
        var d = (b ? new he(fe(b)) : sa || (sa = new he)).g;
        b = d.scrollingElement ? d.scrollingElement : Na || d.compatMode != "CSS1Compat" ? d.body || d.documentElement : d.documentElement;
        d = d.defaultView;
        b = new Xd(d?.pageXOffset || b.scrollLeft,d?.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function te(a) {
        if (a.nodeType == 1)
            return a = re(a),
            new Xd(a.left,a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new Xd(a.clientX,a.clientY)
    }
    function ue(a, b) {
        if (b instanceof Zd) {
            var c = b.height;
            b = b.width
        } else
            throw Error("missing height argument");
        a.style.width = ve(b, !0);
        a.style.height = ve(c, !0)
    }
    function ve(a, b) {
        typeof a == "number" && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    function we(a) {
        var b = xe;
        if (qe(a, "display") != "none")
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    function xe(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = Na && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = re(a),
        new Zd(a.right - a.left,a.bottom - a.top)) : new Zd(b,c)
    }
    function ye(a, b) {
        var c = pe(a, b + "Left")
          , d = pe(a, b + "Right")
          , e = pe(a, b + "Top");
        a = pe(a, b + "Bottom");
        return new je(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))
    }
    ;var ze = {
        capture: !0
    }
      , Ae = {
        passive: !0
    }
      , Be = Zc( () => {
        var a = !1;
        try {
            let b = Object.defineProperty({}, "passive", {
                get() {
                    a = !0
                }
            });
            t.addEventListener("test", null, b)
        } catch (b) {}
        return a
    }
    );
    function Ce(a) {
        return a ? a.passive && Be() ? a : a.capture || !1 : !1
    }
    function L(a, b, c, d) {
        return typeof a.addEventListener === "function" ? (a.addEventListener(b, c, Ce(d)),
        !0) : !1
    }
    function O(a, b, c, d) {
        return typeof a.removeEventListener === "function" ? (a.removeEventListener(b, c, Ce(d)),
        !0) : !1
    }
    function De(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;function Ee(a, b, c=null, d=!1, e=!1) {
        Fe(a, b, c, d, e)
    }
    function Fe(a, b, c, d, e=!1) {
        a.google_image_requests || (a.google_image_requests = []);
        var f = Gd("IMG", a.document);
        if (c || d) {
            let g = k => {
                c && c(k);
                if (d) {
                    k = a.google_image_requests;
                    let h = Ca(k, f);
                    h >= 0 && Array.prototype.splice.call(k, h, 1)
                }
                O(f, "load", g);
                O(f, "error", g)
            }
            ;
            L(f, "load", g);
            L(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    function Ge(a) {
        var b = window, c;
        if (c = b.navigator)
            c = b.navigator.userAgent,
            c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
        c && typeof b.navigator.sendBeacon === "function" ? b.navigator.sendBeacon(a) : Ee(b, a, void 0, !1)
    }
    function He(a) {
        var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
        Sc(a, (c, d) => {
            if (c || c === 0)
                b += `&${d}=${encodeURIComponent(String(c))}`
        }
        );
        Ie(b)
    }
    function Ie(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Ee(b, a, void 0, !1, !1)
    }
    ;function Je(a, b) {
        Ge(`https://pagead2.googlesyndication.com/pagead/gen_204?id=a_x_i&c=FLOATING_IFRAME_ADSENSE&env=${b}&dn=&dos=&ov=&av=&rn=`);
        a.j = !0
    }
    var Ke = class {
        constructor() {
            this.g = this.j = !1
        }
    }
    ;
    class Le {
        constructor() {
            this.promise = new Promise( (a, b) => {
                this.resolve = a;
                this.reject = b
            }
            )
        }
    }
    ;function Me() {
        var a = new Ne;
        {
            t.google_llp || (t.google_llp = {});
            var b = t.google_llp;
            let c = b[1];
            if (!c) {
                let {promise: d, resolve: e} = new Le;
                c = {
                    promise: d,
                    resolve: e
                };
                b[1] = c
            }
            b = c
        }
        b.resolve(a)
    }
    ;var Oe = class {
        constructor(a, b) {
            this.error = a;
            this.meta = {};
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror"
        }
    }
    ;
    function Pe(a) {
        return new Oe(a,{
            message: Qe(a)
        })
    }
    function Qe(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    let d;
                    for (; a != d; )
                        d = a,
                        a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    b = a.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (d) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    }
    ;const Re = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Se = class {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    }
      , Te = class {
        constructor(a, b) {
            this.url = a;
            this.g = !!b;
            this.depth = null
        }
    }
    ;
    let Ue = null;
    function Ve() {
        var a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function We(a=t) {
        return (a = a.performance) && a.now ? a.now() : null
    }
    function Xe(a, b=t) {
        return b.performance?.timing?.[a] || 0
    }
    function Ye(a=t) {
        var b = Math.min(Xe("domLoading", a) || Infinity, Xe("domInteractive", a) || Infinity);
        return b === Infinity ? Math.max(Xe("responseEnd", a), Xe("navigationStart", a)) : b
    }
    ;var Ze = class {
        constructor(a, b) {
            var c = We() || Ve();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    }
    ;
    const $e = t.performance
      , af = !!($e && $e.mark && $e.measure && $e.clearMarks)
      , bf = Zc( () => {
        var a;
        if (a = af) {
            var b;
            a = window;
            if (Ue === null) {
                Ue = "";
                try {
                    let c = "";
                    try {
                        c = a.top.location.hash
                    } catch (d) {
                        c = a.location.hash
                    }
                    c && (Ue = (b = c.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {}
            }
            b = Ue;
            a = !!b.indexOf && b.indexOf("1337") >= 0
        }
        return a
    }
    );
    function cf(a) {
        a && $e && bf() && ($e.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
        $e.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    function df(a) {
        a.g = !1;
        a.events !== a.j.google_js_reporting_queue && (bf() && Da(a.events, cf),
        a.events.length = 0)
    }
    var ef = class {
        constructor(a) {
            this.events = [];
            this.j = a || t;
            var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
            this.events = a.google_js_reporting_queue,
            b = a.google_measure_js_timing);
            this.g = bf() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g)
                return null;
            a = new Ze(a,b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            $e && bf() && $e.mark(b);
            return a
        }
        end(a) {
            if (this.g && kb(a.value)) {
                a.duration = (We() || Ve()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                $e && bf() && $e.mark(b);
                !this.g || this.events.length > 2048 || this.events.push(a)
            }
        }
    }
    ;
    function ff(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
    function gf(a, b, c, d, e) {
        var f = [];
        Sc(a, (g, k) => {
            (g = hf(g, b, c, d, e)) && f.push(`${k}=${g}`)
        }
        );
        return f.join(b)
    }
    function hf(a, b, c, d, e) {
        if (a == null)
            return "";
        b = b || "&";
        c = c || ",$";
        lb(c) && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0),
            d < c.length) {
                let f = [];
                for (let g = 0; g < a.length; g++)
                    f.push(hf(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object")
            return e || (e = 0),
            e < 2 ? encodeURIComponent(gf(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function jf(a) {
        var b = 1;
        for (let c in a.j)
            c.length > b && (b = c.length);
        return 3997 - b - a.l.length - 1
    }
    function kf(a, b, c) {
        b = "https://" + b + c;
        var d = jf(a) - c.length;
        if (d < 0)
            return "";
        a.g.sort( (f, g) => f - g);
        c = null;
        var e = "";
        for (let f = 0; f < a.g.length; f++) {
            let g = a.g[f]
              , k = a.j[g];
            for (let h = 0; h < k.length; h++) {
                if (!d) {
                    c = c == null ? g : c;
                    break
                }
                let n = gf(k[h], a.l, ",$");
                if (n) {
                    n = e + n;
                    if (d >= n.length) {
                        d -= n.length;
                        b += n;
                        e = a.l;
                        break
                    }
                    c = c == null ? g : c
                }
            }
        }
        a = "";
        c != null && (a = `${e}trn=${c}`);
        return b + a
    }
    var lf = class {
        constructor() {
            this.l = "&";
            this.j = {};
            this.A = 0;
            this.g = []
        }
    }
    ;
    const mf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    var pf = class {
        constructor(a=null) {
            this.pinger = nf;
            this.g = a;
            this.j = null;
            this.A = !1;
            this.F = this.Ja
        }
        l(a) {
            this.j = a
        }
        B(a) {
            this.A = a
        }
        Aa(a, b, c) {
            try {
                if (this.g && this.g.g) {
                    var d = this.g.start(a.toString(), 3);
                    var e = b();
                    this.g.end(d)
                } else
                    e = b()
            } catch (f) {
                b = !0;
                try {
                    cf(d),
                    b = this.F(a, Pe(f), void 0, c)
                } catch (g) {
                    this.Ja(217, g)
                }
                if (b)
                    window.console?.error?.(f);
                else
                    throw f;
            }
            return e
        }
        ea(a, b) {
            return (...c) => this.Aa(a, () => b.apply(void 0, c))
        }
        Ja(a, b, c, d, e) {
            e = e || "jserror";
            var f = void 0;
            try {
                let v = new lf;
                var g = v;
                g.g.push(1);
                g.j[1] = ff("context", a);
                b.error && b.meta && b.id || (b = Pe(b));
                g = b;
                if (g.msg) {
                    b = v;
                    var k = g.msg.substring(0, 512);
                    b.g.push(2);
                    b.j[2] = ff("msg", k)
                }
                var h = g.meta || {};
                k = h;
                if (this.j)
                    try {
                        this.j(k)
                    } catch (K) {}
                if (d)
                    try {
                        d(k)
                    } catch (K) {}
                d = v;
                h = [h];
                d.g.push(3);
                d.j[3] = h;
                var n;
                if (!(n = p)) {
                    d = t;
                    h = [];
                    k = null;
                    do {
                        var l = d;
                        if (Uc(l)) {
                            var m = l.location.href;
                            k = l.document && l.document.referrer || null
                        } else
                            m = k,
                            k = null;
                        h.push(new Te(m || ""));
                        try {
                            d = l.parent
                        } catch (K) {
                            d = null
                        }
                    } while (d && l !== d);
                    for (let K = 0, Mb = h.length - 1; K <= Mb; ++K)
                        h[K].depth = Mb - K;
                    l = t;
                    if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length === h.length - 1)
                        for (m = 1; m < h.length; ++m) {
                            let K = h[m];
                            K.url || (K.url = l.location.ancestorOrigins[m - 1] || "",
                            K.g = !0)
                        }
                    n = h
                }
                var p = n;
                let R = new Te(t.location.href,!1);
                n = null;
                let N = p.length - 1;
                for (l = N; l >= 0; --l) {
                    var q = p[l];
                    !n && Re.test(q.url) && (n = q);
                    if (q.url && !q.g) {
                        R = q;
                        break
                    }
                }
                q = null;
                let X = p.length && p[N].url;
                R.depth !== 0 && X && (q = p[N]);
                f = new Se(R,q);
                if (f.j) {
                    p = v;
                    var w = f.j.url || "";
                    p.g.push(4);
                    p.j[4] = ff("top", w)
                }
                var A = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    let K = f.g.url.match(mf);
                    var I = K[1]
                      , Z = K[3]
                      , M = K[4];
                    w = "";
                    I && (w += I + ":");
                    Z && (w += "//",
                    w += Z,
                    M && (w += ":" + M));
                    var u = w
                } else
                    u = "";
                I = v;
                A = [A, {
                    url: u
                }];
                I.g.push(5);
                I.j[5] = A;
                of(this.pinger, e, v, this.A, c)
            } catch (v) {
                try {
                    of(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Qe(v),
                        url: f?.g.url ?? ""
                    }, this.A, c)
                } catch (R) {}
            }
            return !0
        }
    }
    ;
    var qf = class extends D {
    }
    ;
    function rf(a, b) {
        try {
            let c = d => [{
                [d.nc]: d.fc
            }];
            return JSON.stringify([a.filter(d => d.Gb).map(c), Xb(b), a.filter(d => !d.Gb).map(c)])
        } catch (c) {
            return sf(c, b),
            ""
        }
    }
    function sf(a, b) {
        try {
            He({
                m: Qe(a instanceof Error ? a : Error(String(a))),
                b: (Fb(C(b, 1)) ?? 0) || null,
                v: (Jc(b, 2) ?? "") || null
            })
        } catch (c) {}
    }
    function tf(a) {
        if (a.A) {
            var b = a.l
              , c = Set;
            var d = oc(a.l, 3, Ib, nc());
            c = [...(new c([...d, ...a.A()]))];
            uc(b, 3, c, Gb)
        }
        return ec(a.l)
    }
    var uf = class {
        constructor(a, b, c) {
            this.A = c;
            c = new qf;
            a = vc(c, 1, Eb(a), 0);
            this.l = Nc(a, 2, b)
        }
    }
    ;
    function vf(a) {
        var b = new CompressionStream("gzip")
          , c = (new Response(b.readable)).arrayBuffer()
          , d = b.writable.getWriter()
          , e = typeof a === "string" ? (new TextEncoder).encode(a) : a;
        return d.ready.then( () => d.write(e)).then( () => d.close()).then( () => c).then(f => new Uint8Array(f))
    }
    ;function wf(a) {
        var b = new xf;
        return uc(b, 1, a, Db)
    }
    var xf = class extends D {
    }
    ;
    var yf = class extends D {
        getTagSessionCorrelator() {
            return Kc(this, 13)
        }
    }
      , zf = [12];
    var Af = class extends D {
        getTagSessionCorrelator() {
            return Kc(this, 1)
        }
        mb(a) {
            return Lc(this, 5, a)
        }
    }
      , Bf = [3, 4, 6, 7, 8, 9];
    var Cf = class extends D {
    }
    ;
    var Df = class extends D {
    }
    ;
    function Ef(a) {
        var b = Math
          , c = b.trunc;
        a: {
            if (globalThis.performance) {
                var d = performance.timeOrigin + performance.now();
                if (Number.isFinite(d) && d > 0)
                    break a
            }
            d = Date.now();
            d = Number.isFinite(d) && d > 0 ? d : 0
        }
        return Mc(a, 7, c.call(b, d))
    }
    function Ff(a) {
        var b = new Gf;
        return vc(b, 10, Hb(a), 0)
    }
    var Gf = class extends D {
        getTagSessionCorrelator() {
            return Kc(this, 8)
        }
        mb(a) {
            return Lc(this, 12, a)
        }
        getNoShowReasons() {
            return Kc(this, Ac(this, Hf, 4))
        }
    }
      , Hf = [3, 4, 6];
    var If = class extends D {
    }
    ;
    function Jf() {
        var a = Kf();
        a = dc(a);
        return Nc(a, 1, Lf())
    }
    var Mf = class extends D {
    }
    ;
    var Nf = class extends D {
    }
    ;
    var Of = class extends D {
        getTagSessionCorrelator() {
            return Kc(this, 1)
        }
        mb(a) {
            return Lc(this, 2, a)
        }
    }
    ;
    var Pf = class extends D {
    }
      , Qf = [1, 7]
      , Sf = [4, 6, 8];
    class Tf extends uf {
        constructor() {
            super(...arguments)
        }
    }
    function Uf(a, ...b) {
        Vf(a, ...b.map(c => ({
            Gb: !0,
            nc: 3,
            fc: Xb(c)
        })))
    }
    function Wf(a, ...b) {
        Vf(a, ...b.map(c => ({
            Gb: !0,
            nc: 19,
            fc: Xb(c)
        })))
    }
    function Xf(a, ...b) {
        Vf(a, ...b.map(c => ({
            Gb: !0,
            nc: 28,
            fc: Xb(c)
        })))
    }
    var Yf = class extends Tf {
    }
    ;
    function Zf(a, b) {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch( () => {}
        )
    }
    function $f(a, b, c=1, d=!1) {
        var e = typeof CompressionStream === "function";
        typeof document !== "undefined" && document.visibilityState !== "hidden" && d && e ? vf(b).then(f => {
            Zf(`${a}?e=${c === 1 ? 5 : 6}`, f)
        }
        ).catch( () => {
            Zf(`${a}?e=${c}`, b)
        }
        ) : Zf(`${a}?e=${c}`, b)
    }
    ;function Vf(a, ...b) {
        try {
            a.g.push(...b),
            a.g.length >= 100 && ag(a),
            a.g.length && a.j === null && (a.j = setTimeout( () => {
                ag(a)
            }
            , a.F))
        } catch (c) {
            sf(c, tf(a))
        }
    }
    function ag(a) {
        a.j !== null && (clearTimeout(a.j),
        a.j = null);
        if (a.g.length) {
            var b = rf(a.g, tf(a));
            a.B("https://pagead2.googlesyndication.com/pagead/ping", b, 1, !1);
            a.g = []
        }
    }
    var cg = class extends Yf {
        constructor(a, b) {
            super(2, a, bg);
            this.B = $f;
            this.F = b;
            this.g = [];
            this.j = null
        }
    }
      , dg = class extends cg {
        constructor(a, b=1E3) {
            super(a, b)
        }
    }
    ;
    var eg = a => {
        var b = "Yb";
        if (a.Yb && a.hasOwnProperty(b))
            return a.Yb;
        b = new a;
        return a.Yb = b
    }
    ;
    function fg(a, b, c) {
        return b[a] || c
    }
    ;function gg(a, b) {
        a.g = c => fg(3, b, () => [])(c ?? 1)
    }
    class hg {
        g() {
            return []
        }
    }
    function bg(a) {
        return eg(hg).g(a)
    }
    ;function of(a, b, c, d=!1, e) {
        if ((d ? a.g : Math.random()) < (e || .01))
            try {
                let f;
                c instanceof lf ? f = c : (f = new lf,
                Sc(c, (k, h) => {
                    var n = f
                      , l = n.A++;
                    k = ff(h, k);
                    n.g.push(l);
                    n.j[l] = k
                }
                ));
                let g = kf(f, a.domain, a.path + b + "&");
                g && Ee(t, g)
            } catch (f) {}
    }
    function ig(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    var jg = class {
        constructor() {
            this.domain = "pagead2.googlesyndication.com";
            this.path = "/pagead/gen_204?id=";
            this.g = Math.random()
        }
    }
    ;
    let nf, kg;
    const lg = new ef(window);
    (function(a) {
        nf = a ?? new jg;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        ig(nf, window.google_srt);
        kg = new pf(lg);
        kg.l( () => {}
        );
        kg.B(!0);
        window.document.readyState === "complete" ? window.google_measure_js_timing || df(lg) : lg.g && L(window, "load", () => {
            window.google_measure_js_timing || df(lg)
        }
        )
    }
    )();
    var mg = a => {
        a = a.google_unique_id;
        return kb(a) ? a : 0
    }
    ;
    function ng(a, b) {
        return a.g[og(b)] !== void 0
    }
    function pg(a) {
        var b = [];
        for (let c in a.g)
            a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    var qg = class {
        constructor() {
            this.g = {};
            this.j = {}
        }
        set(a, b) {
            var c = og(a);
            this.g[c] = b;
            this.j[c] = a
        }
        get(a, b) {
            a = og(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        Eb() {
            return pg(this).length
        }
        clear() {
            this.g = {};
            this.j = {}
        }
    }
    ;
    function og(a) {
        return a instanceof Object ? String(x(a)) : a + ""
    }
    ;var rg = class {
        constructor(a) {
            this.F = a.g != null ? a.g : !0;
            this.B = a.H != null ? a.H : 0;
            this.A = a.B != null ? a.B : .9;
            this.j = a.j != null ? a.j : 1.05;
            this.minWidth = a.G != null ? a.G : 0;
            this.G = a.A != null ? a.A : 25;
            this.l = a.l != null ? a.l : 0;
            this.N = a.F != null ? a.F : !1;
            this.H = a.N || null;
            this.g = a.J || null
        }
    }
      , sg = class {
        build() {
            return new rg(this)
        }
    }
    ;
    function tg(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }
    ;var ug = 728 * 1.38;
    function vg(a) {
        return a.innerHeight >= a.innerWidth
    }
    function wg(a) {
        a = a.document;
        var b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }
    function P(a) {
        return wg(a).clientWidth ?? void 0
    }
    function xg(a, b) {
        var c = wg(a);
        return b ? c.scrollHeight === wg(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }
    function yg(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }
    function zg(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }
    function Ag(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }
    function Bg(a) {
        var b = {}, c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                let d = c[a];
                if ("key"in d && "value"in d) {
                    let e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }
    function Cg(a) {
        var b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Da(Object.keys(b), c => {
            var d = a.style[vd(c)];
            (typeof d !== "undefined" ? d : a.style[ne(a, c)]) || J(a, c, b[c])
        }
        );
        Pd(a)
    }
    ;function Dg(a, b) {
        var c = P(a);
        var d = wg(a).clientHeight;
        if (typeof c !== "number" || typeof d !== "number")
            throw Error("No VP width and/or height.");
        c = new Zd(c,d);
        d = Ag(a);
        a = zg(a);
        a = Eg(a, c.width + d, c.height + a, d);
        return (tg(b, a) ? new je(Math.max(b.top, a.top),Math.min(b.right, a.right),Math.min(b.bottom, a.bottom),Math.max(b.left, a.left)) : null) || Eg(0, 0, 0, 0)
    }
    function Fg(a, b) {
        var c = Ag(b)
          , d = zg(b);
        if (a.getBoundingClientRect)
            return a = a.getBoundingClientRect(),
            Gg(a) ? Eg(a.top + d, a.right + c, a.bottom + d, a.left + c) : Eg(0, 0, 0, 0);
        b = b.document.createRange();
        b.selectNodeContents(a);
        return b.collapsed ? Eg(0, 0, 0, 0) : b.getBoundingClientRect ? (a = b.getBoundingClientRect(),
        Gg(a) ? Eg(a.top + d, a.right + c, a.bottom + d, a.left + c) : Eg(0, 0, 0, 0)) : Eg(0, 0, 0, 0)
    }
    function Gg(a) {
        return !!a && typeof a.top === "number" && !isNaN(a.top) && typeof a.right === "number" && !isNaN(a.right) && typeof a.bottom === "number" && !isNaN(a.bottom) && typeof a.left === "number" && !isNaN(a.left)
    }
    const Eg = (a, b, c, d) => new je(Math.ceil(a),Math.floor(b),Math.floor(c),Math.ceil(d));
    function Hg(a, b) {
        Ig(a).forEach(b, void 0)
    }
    function Ig(a) {
        var b = []
          , c = a.length;
        for (let d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    ;function Jg(a, b) {
        return ng(a.g, b)
    }
    var Kg = class {
        constructor(a) {
            this.g = new qg;
            if (a)
                for (let b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
    }
    ;
    class Lg {
        constructor(a, b) {
            this.g = a[t.Symbol.iterator]();
            this.j = b
        }
        [Symbol.iterator]() {
            return this
        }
        next() {
            var a = this.g.next();
            return {
                value: a.done ? void 0 : this.j.call(void 0, a.value),
                done: a.done
            }
        }
    }
    function Mg(a, b) {
        return new Lg(a,b)
    }
    ;function Ng() {}
    Ng.prototype.next = function() {
        return Og
    }
    ;
    const Og = {
        done: !0,
        value: void 0
    };
    Ng.prototype.Ma = function() {
        return this
    }
    ;
    function Pg(a) {
        if (a instanceof Ng)
            return a;
        if (typeof a.Ma == "function")
            return a.Ma(!1);
        if (ka(a)) {
            let b = 0
              , c = new Ng;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        return Og;
                    if (b in a)
                        return {
                            value: a[b++],
                            done: !1
                        };
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function Qg(a) {
        a = Pg(a);
        var {done: b, value: c} = a.next();
        return b ? null : c
    }
    ;function Rg(a) {
        if (a instanceof Sg || a instanceof Tg || a instanceof Ug)
            return a;
        if (typeof a.next == "function")
            return new Sg( () => a);
        if (typeof a[Symbol.iterator] == "function")
            return new Sg( () => a[Symbol.iterator]());
        if (typeof a.Ma == "function")
            return new Sg( () => a.Ma());
        throw Error("Not an iterator or iterable.");
    }
    class Sg {
        constructor(a) {
            this.g = a
        }
        Ma() {
            return new Tg(this.g())
        }
        [Symbol.iterator]() {
            return new Ug(this.g())
        }
        j() {
            return new Ug(this.g())
        }
    }
    class Tg extends Ng {
        constructor(a) {
            super();
            this.g = a
        }
        next() {
            return this.g.next()
        }
        [Symbol.iterator]() {
            return new Ug(this.g)
        }
        j() {
            return new Ug(this.g)
        }
    }
    class Ug extends Sg {
        constructor(a) {
            super( () => a);
            this.l = a
        }
        next() {
            return this.l.next()
        }
    }
    ;function Vg(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Vg)
                for (c = Wg(a),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    }
    r = Vg.prototype;
    r.Eb = function() {
        return this.size
    }
    ;
    function Wg(a) {
        Xg(a);
        return a.g.concat()
    }
    r.has = function(a) {
        return Yg(this.j, a)
    }
    ;
    r.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.size != a.Eb())
            return !1;
        b = b || Zg;
        Xg(this);
        var c;
        for (let d = 0; c = this.g[d]; d++)
            if (!b(this.get(c), a.get(c)))
                return !1;
        return !0
    }
    ;
    function Zg(a, b) {
        return a === b
    }
    r.isEmpty = function() {
        return this.size == 0
    }
    ;
    r.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    }
    ;
    r.delete = function(a) {
        return Yg(this.j, a) ? (delete this.j[a],
        --this.size,
        this.l++,
        this.g.length > 2 * this.size && Xg(this),
        !0) : !1
    }
    ;
    function Xg(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                Yg(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            b = {};
            for (d = c = 0; c < a.g.length; ) {
                let e = a.g[c];
                Yg(b, e) || (a.g[d++] = e,
                b[e] = 1);
                c++
            }
            a.g.length = d
        }
    }
    r.get = function(a, b) {
        return Yg(this.j, a) ? this.j[a] : b
    }
    ;
    r.set = function(a, b) {
        Yg(this.j, a) || (this.size += 1,
        this.g.push(a),
        this.l++);
        this.j[a] = b
    }
    ;
    r.forEach = function(a, b) {
        var c = Wg(this);
        for (let d = 0; d < c.length; d++) {
            let e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    r.keys = function() {
        return Rg(this.Ma(!0)).j()
    }
    ;
    r.values = function() {
        return Rg(this.Ma(!1)).j()
    }
    ;
    r.entries = function() {
        var a = this;
        return Mg(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    r.Ma = function(a) {
        Xg(this);
        var b = 0
          , c = this.l
          , d = this
          , e = new Ng;
        e.next = function() {
            if (c != d.l)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                return Og;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        }
        ;
        return e
    }
    ;
    function Yg(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function $g(a) {
        return a == "transparent" || a.substring(0, 4) == "rgba" && (a = a.split(","),
        a.length == 4 && parseFloat(a[3]) < .5) ? !0 : !1
    }
    function ah() {
        Da(bh, a => {
            a.J = null;
            a.G = null
        }
        )
    }
    function ch(a) {
        if (!a.I.ownerDocument)
            throw Error("Wrapped node should have an owner document.");
        return a.I.ownerDocument
    }
    function dh(a) {
        a = ch(a);
        return a.defaultView || a.parentWindow
    }
    function eh(a) {
        var b = a.l.g(a.l.j);
        return b == a || b != a && ee(b.I, a.I)
    }
    function fh(a) {
        return Ig(a.I.childNodes).map(b => a.l.g(b)).filter(Yc(b => b === null))
    }
    function gh(a) {
        if (!a.g())
            return null;
        var b = fh(a.g());
        a = Ca(b, a);
        if (a == -1)
            return null;
        for (a += 1; a < b.length; ++a)
            if (b[a].A() || b[a].O())
                return b[a];
        return null
    }
    function hh(a) {
        var b = gh(a);
        return b ? b : a.g() ? hh(a.g()) : null
    }
    function ih(a, b) {
        b.push(a);
        a = fh(a);
        for (let c = 0; c < a.length; ++c)
            ih(a[c], b)
    }
    function jh(a) {
        var b = a.j();
        if (b.top != 0 || b.right != 0 || b.bottom != 0 || b.left != 0) {
            var c = Ag(dh(a));
            a = zg(dh(a));
            c = -c;
            a = -a;
            c instanceof Xd ? (b.left += c.x,
            b.right += c.x,
            b.top += c.y,
            b.bottom += c.y) : (b.left += c,
            b.right += c,
            typeof a === "number" && (b.top += a,
            b.bottom += a))
        }
        return b
    }
    function Q(a, b) {
        if (a.I.nodeType != 1)
            return null;
        a.B = a.B || dh(a).getComputedStyle(a.I);
        return a.B ? a.B[b] || a.B.getPropertyValue(b) || "" : ""
    }
    function kh(a, b, c) {
        if (a.H[b] !== void 0)
            return a.H[b];
        a.H[b] = lh(a, b, c);
        return a.H[b]
    }
    function mh(a) {
        if (a.L !== void 0)
            return a.L;
        var b = Q(a, "position");
        if (b == "fixed" || b == "sticky")
            b = a;
        else {
            var c = a.g();
            b = c && a.I.tagName != "BODY" ? (c = mh(c)) || b != "absolute" && b != "relative" ? c : a : null
        }
        a.L = b;
        return a.L
    }
    function nh(a, b) {
        var c = mh(a);
        if (c && Q(c, "position") != "relative")
            if (b != null)
                a: {
                    do {
                        let d = a.j();
                        if ((d.right - d.left) * (d.bottom - d.top) > b) {
                            b = !1;
                            break a
                        }
                        if (a == c)
                            break;
                        a = a.g()
                    } while (a !== null);
                    b = !0
                }
            else
                b = !0;
        else
            b = !1;
        return b
    }
    function lh(a, b, c) {
        var d = Q(a, "position");
        a: switch (b) {
        case 0:
            var e = Q(a, "overflow") == "hidden" || Q(a, "overflow") == "scroll" || Q(a, "overflow-x") == "hidden" || Q(a, "overflow-x") == "scroll";
            break a;
        case 1:
            e = Q(a, "overflow") == "hidden" || Q(a, "overflow") == "scroll" || Q(a, "overflow-y") == "hidden" || Q(a, "overflow-y") == "scroll";
            break a;
        default:
            throw Error("Unknown pageAxis: " + b);
        }
        switch (d) {
        case "fixed":
            if (e)
                return a;
            break;
        case "static":
        case "":
        case null:
            if (e && !c)
                return a;
            if (a.g())
                return kh(a.g(), b, c);
            break;
        case "absolute":
        case "relative":
            if (e)
                return a;
            if (a.g())
                return kh(a.g(), b, d == "absolute");
            break;
        default:
            t.console.error("Unknown position value: " + d)
        }
        return null
    }
    function oh(a) {
        var b = a.I.scrollHeight
          , c = a.I.clientHeight
          , d = ch(a).createElement("div");
        d.style.width = "100%";
        d.style.height = Math.max(b, c) + 100 + "px";
        d.style.clear = "both";
        a.I.appendChild(d);
        b = a.I.scrollHeight > a.I.clientHeight && a.I.scrollHeight - b > a.I.clientHeight - c;
        a.I.removeChild(d);
        return b
    }
    function ph(a) {
        return a.N !== null ? a.N : Q(a, "opacity") != "1" || a.g() && !ph(a.g()) ? a.N = !1 : a.N = !0
    }
    function qh(a) {
        a = a.j();
        a = new je(Math.max(a.top, 0),Math.max(a.right, 0),Math.max(a.bottom, 0),Math.max(a.left, 0));
        return a.left < a.right && a.top < a.bottom
    }
    function rh(a) {
        return a.F !== null ? a.F : a.g() && rh(a.g()) || Q(a, "opacity") == "0" || Q(a, "display") == "none" || Q(a, "visibility") == "hidden" || a.I.tagName && a.I.tagName.toLowerCase() == "input" && a.I.type && a.I.type == "hidden" ? a.F = !0 : a.F = !1
    }
    function sh(a, b) {
        return b(a) ? !0 : a.g() ? sh(a.g(), b) : !1
    }
    function th(a) {
        return !sh(a, b => Q(b, "overflow-y") == "hidden")
    }
    function uh(a) {
        a = Q(a, "position");
        return a == "absolute" || a == "relative"
    }
    function vh(a) {
        return a.A() && (a = parseInt(Q(a, "z-index"), 10),
        !isNaN(a)) ? a : 0
    }
    function wh(a, b) {
        return sh(a, c => !!c.I.tagName && c.I.tagName == b)
    }
    function xh(a, b) {
        return sh(a, c => {
            c = c.I;
            return !!c.id && !!c.id.match && !!c.id.match(b)
        }
        )
    }
    function yh(a, b) {
        return sh(a, c => {
            a: {
                c = zh(c);
                for (let d = 0; d < c.length; ++d)
                    if (c[d].match(b)) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        }
        )
    }
    function zh(a) {
        return (a = a.I.className) && typeof a.split === "function" ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : []
    }
    function Ah(a) {
        return a.I.tagName == "A" ? a.I.getAttribute("href") : (a = a.g()) ? Ah(a) : null
    }
    function Bh(a) {
        if (a.I.nodeType != 1) {
            var b = a.g();
            return b ? Bh(b) : 0
        }
        var c = ch(a).createTextNode("A");
        a.I.appendChild(c);
        b = a.l.g(c);
        if (!b)
            throw a.I.removeChild(c),
            Error("Unable to insert textnode");
        a = b.j();
        b.I.parentNode && b.I.parentNode.removeChild(b.I);
        return a.bottom - a.top
    }
    function Ch(a, b) {
        if (b || a.K == null) {
            if (b && !b(a))
                return 0;
            let c = 0;
            if (a.O())
                c = a.I.textContent.trim().length;
            else {
                let d = fh(a);
                for (let e = 0; e < d.length; e++)
                    c += Ch(d[e], b)
            }
            b || (a.K = c);
            return c
        }
        return a.K
    }
    var Dh = class {
        constructor(a, b) {
            this.I = a;
            this.l = b;
            this.F = this.N = this.Fa = this.W = null;
            this.H = {};
            this.B = this.G = this.K = null;
            new Vg
        }
        g() {
            return this.I != this.l.j && this.I.parentNode ? this.l.g(this.I.parentNode) : null
        }
        A() {
            return this.I.nodeType == 1
        }
        O() {
            return this.I.nodeType == 3
        }
        j() {
            if (!this.J) {
                this.G || (this.G = Fg(this.I, dh(this)));
                var a = ke(this.G);
                var b = Q(this, "position");
                if (b == "fixed")
                    b = Dg(dh(this), a);
                else if (this.g()) {
                    var c = kh(this.g(), 0, b == "absolute");
                    if (c) {
                        var d = c.j();
                        c = d.left;
                        d = d.right;
                        a = a.left >= d || a.right <= c ? null : Eg(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c))
                    }
                    a && (b = kh(this.g(), 1, b == "absolute")) && (c = b.j(),
                    b = a,
                    a = c.top,
                    c = c.bottom,
                    a = b.top >= c || b.bottom <= a ? null : Eg(Math.max(b.top, a), b.right, Math.min(b.bottom, c), b.left));
                    b = a && mh(this) && Q(mh(this), "position") == "fixed" ? Dg(dh(this), a) : a || new je(0,0,0,0)
                } else
                    b = a;
                this.J = b
            }
            return ke(this.J)
        }
        Ua() {
            return !qh(this) || rh(this)
        }
        Zb() {
            var a = Q(this, "background-color");
            if (a = a ? $g(a) : !0)
                a = Q(this, "background-image"),
                a = !(a && a != "none");
            return a
        }
        toString() {
            switch (this.I.nodeType) {
            case 1:
                let a = this.I
                  , b = a.tagName;
                a.id && (b += "#" + a.id);
                a.className && typeof a.className.split === "function" && (b += "." + a.className.split(/\s+/).join("."));
                return b;
            case 3:
                return "TEXT#" + this.I.textContent.substr(0, 10);
            default:
                return "HtmlNode"
            }
        }
    }
    ;
    function Eh(a, b) {
        var c = x(b)
          , d = a.A.get(c);
        if (typeof d === "boolean")
            return d;
        d = a.B && b.nodeType == 3 ? !/\S/.test(b.data) : b.nodeType != 1 && b.nodeType != 3 && b.nodeType != 9 || b.tagName && (b.tagName == "SCRIPT" || b.tagName == "STYLE") ? !0 : !1;
        !d && b.parentNode && b != a.j && (d = Eh(a, b.parentNode));
        a.A.set(c, d);
        return d
    }
    var Fh = class {
        constructor(a, b) {
            this.j = a;
            this.B = b;
            this.A = new qg;
            this.l = new qg
        }
        g(a) {
            var b = x(a)
              , c = this.l.get(b);
            if (c)
                return c;
            if (Eh(this, a))
                return null;
            a = new Dh(a,this);
            this.l.set(b, a);
            return a
        }
    }
      , bh = [];
    var Hh = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            return Jg(Gh(this.l, a), this.j)
        }
    }
    ;
    function Gh(a, b) {
        var c = x(b)
          , d = a.j.get(c);
        if (d)
            return d;
        b = a.g(b);
        a.j.set(c, b);
        return b
    }
    var Ih = class {
        constructor() {
            this.j = new qg
        }
    }
    ;
    function Jh(a, b) {
        var c = Ah(b);
        if (a.l.g(b) && c !== null)
            return c;
        b = fh(b);
        if (b.length < 1)
            return null;
        c = Jh(a, b[0]);
        for (let d = 1; d < b.length; ++d)
            if (Jh(a, b[d]) != c)
                return null;
        return c
    }
    var Kh = class extends Ih {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new Kg(Jh(this, a) !== null ? [1] : [])
        }
    }
    ;
    var Lh = class extends Ih {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            a: if (a.I.nodeType == 3)
                var b = this.l.g(a);
            else {
                b = !1;
                a = fh(a);
                for (let c of a) {
                    if ((a = Q(c, "display")) && a != "inline") {
                        b = !1;
                        break a
                    }
                    Jg(Gh(this, c), 0) && (b = !0)
                }
            }
            return new Kg(b ? [0] : [])
        }
    }
    ;
    function Mh(a, b) {
        return Ch(b, c => !a.l.g(c))
    }
    var Nh = class extends Ih {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.l = b;
            this.B = c
        }
        g(a) {
            if (this.A.g(a) && !this.l.g(a) && !this.B.g(a) && Mh(this, a) >= 50) {
                var b = Bh(a);
                a = a.j();
                b = a.bottom - a.top >= 2 * b || !1
            } else
                b = !1;
            return new Kg(b ? [3] : [])
        }
    }
    ;
    function Oh(a) {
        return a.classList ? a.classList.contains("adsbygoogle") : Ha(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
    }
    ;function Ph(a, b) {
        return a.l.g(b) ? sh(b, function(c) {
            switch (c.I.tagName) {
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
                return !0
            }
            return !1
        }) || Qh(b) && Ch(b) >= 5 ? !0 : (b = b.g()) ? Jg(Gh(a, b), 2) : !1 : !1
    }
    function Qh(a) {
        a = zh(a);
        for (let b of a)
            if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/))
                return !0;
        return !1
    }
    var Rh = class extends Ih {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new Kg(Ph(this, a) ? [2] : [])
        }
    }
    ;
    function Sh(a) {
        var b = [];
        Da(a, c => {
            c.I.nodeType == 1 && (Th(c, ":before", b),
            Th(c, ":after", b))
        }
        );
        return b
    }
    function Uh(a) {
        a = Q(a, "content");
        if (!a || "none" == a || /\(.*\)/.test(a))
            return !1;
        /^['"].*['"]$/.test(a) && (a = a.substring(1, a.length - 1));
        return a.trim().length > 0
    }
    var Vh = class extends Dh {
        constructor(a, b) {
            super(a.I, a.l);
            this.T = a;
            this.ca = b;
            this.B = dh(a).getComputedStyle(a.I, this.ca)
        }
        A() {
            return !1
        }
        O() {
            return !1
        }
        Ua() {
            if (!Uh(this) && this.Zb())
                var a = !0;
            else if (!(a = this.g().Ua() || rh(this) || !qh(this))) {
                a = Uh(this);
                let c = Q(this, "width");
                var b = Q(this, "height");
                b = a && b == "auto" || parseFloat(b) > 0;
                a = !((a && c == "auto" || parseFloat(c) > 0) && b)
            }
            return a
        }
        g() {
            return this.T
        }
        Zb() {
            var a = this.g().I;
            a = qe(a, "backgroundColor");
            var b = Q(this, "background-color");
            return b == null || b == a || $g(b) || Q(this, "position") != "fixed"
        }
        j() {
            switch (Q(this, "position")) {
            case "absolute":
                var a = this.g().j();
                let b = a.top + parseInt(Q(this, "top"), 10);
                a = a.left + parseInt(Q(this, "left"), 10);
                let c = parseInt(Q(this, "width"), 10)
                  , d = parseInt(Q(this, "height"), 10);
                return new je(b,a + c,b + d,a);
            case "fixed":
                return new je(0,parseInt(Q(this, "width"), 10),parseInt(Q(this, "height"), 10),0);
            default:
                return this.g().j()
            }
        }
    }
    ;
    const Th = (a, b, c) => {
        if (b == ":before" || b == ":after") {
            var d = new Vh(a,b);
            if (!d.Ua())
                switch (c.push(d),
                b) {
                case ":before":
                    a.W = d;
                    break;
                case ":after":
                    a.Fa = d;
                    break;
                default:
                    throw Error("Unsupported pseudo type " + b);
                }
        }
    }
    ;
    const Wh = new Kg("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    var Xh = class extends Ih {
        g(a) {
            var b = a.I
              , c = ch(a);
            if (b.nodeType == 3) {
                var d = b.data;
                c = d.indexOf("&") != -1 ? sd(d, c) : d;
                c = /\S/.test(c)
            } else
                c = !1;
            (c = c || (a instanceof Vh ? Uh(a) : !1)) || (b = b.tagName,
            c = !!b && Jg(Wh, b.toUpperCase()));
            a = c && !a.Ua();
            return new Kg(a ? [6] : [])
        }
    }
    ;
    function Yh(a) {
        a.B || (a.B = new Xh);
        return a.B
    }
    function Zh(a) {
        a.j || (a.j = new Lh(new Hh(Yh(a),6)));
        return a.j
    }
    function $h(a) {
        a.l || (a.l = new Rh(new Hh(Zh(a),0)));
        return a.l
    }
    var ai = class {
        constructor() {
            this.A = this.l = this.g = this.j = this.B = null
        }
    }
    ;
    var bi = class {
        constructor() {
            this.g = new ai
        }
    }
    ;
    function ci(a) {
        var b = [];
        for (let c of a.g)
            b.push(c);
        return b
    }
    var di = class {
        constructor() {
            this.g = [];
            this.l = new Kg
        }
    }
    ;
    var ei = class {
        constructor(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        }
        sa() {
            return this.l
        }
    }
    ;
    const gi = (a, b, c) => {
        b = fi(a.W, b, c);
        var d = new ei(a,0,b++);
        c.Ba.push(d);
        for (var e of fh(a))
            b = gi(e, b, c);
        e = new ei(a,1,b++);
        c.Ba.push(e);
        c.map.set(x(a), {
            start: d,
            end: e
        });
        return b = fi(a.Fa, b, c)
    }
      , fi = (a, b, c) => {
        if (!a)
            return b;
        var d = new ei(a,0,b++)
          , e = new ei(a,1,b++);
        c.Ba.push(d);
        c.Ba.push(e);
        c.map.set(x(a), {
            start: d,
            end: e
        });
        return b
    }
    ;
    function hi(a) {
        if (a instanceof Vh)
            return !0;
        if (!a.A())
            return !1;
        var b = a.I
          , c = Q(a, "position");
        if (b.tagName == "HTML" || c == "fixed" || Q(a, "z-index") != "auto" && (c == "absolute" || c == "relative"))
            return !0;
        a = Q(a, "opacity");
        return a != "1" && a != "" ? !0 : !1
    }
    function ii(a) {
        var b = a.g.g();
        return b ? ji(a.j, b) : null
    }
    var ki = class {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    }
      , ni = class {
        constructor() {
            this.g = new li
        }
        compare(a, b) {
            var c = ji(this.g, a)
              , d = ji(this.g, b);
            c = mi(c, d);
            if (!c)
                return 0;
            switch (c.Pb) {
            case 0:
                return vh(a) - vh(c.Nb.g);
            case 1:
                return vh(c.Mb.g) - vh(b);
            case 2:
                return vh(c.Mb.g) - vh(c.Nb.g);
            default:
                throw Error("Unhandled adjacency.");
            }
        }
    }
    ;
    function ji(a, b) {
        var c = x(b)
          , d = a.g.get(c);
        if (d)
            return d;
        d = b.g();
        b = !d || hi(b) ? new ki(b,a) : ji(a, d);
        a.g.set(c, b);
        return b
    }
    var li = class {
        constructor() {
            this.g = new qg
        }
    }
    ;
    function mi(a, b) {
        if (a == b)
            return null;
        for (var c = new qg, d = b, e; e = ii(d); ) {
            if (a == e)
                return {
                    Mb: a,
                    Pb: 0,
                    Nb: d
                };
            c.set(x(e), d);
            d = e
        }
        for (; e = ii(a); ) {
            if (e == b)
                return {
                    Mb: a,
                    Pb: 1,
                    Nb: b
                };
            if (d = c.get(x(e)))
                return {
                    Mb: a,
                    Pb: 2,
                    Nb: d
                };
            a = e
        }
        throw Error("Contexts not in same DOM.");
    }
    ;function oi(a, b, c, d=[]) {
        a = [].concat(a, d);
        b = new pi(b,c);
        for (let e of a)
            e.Zb() || e.Ua() || (c = b,
            a = e,
            c.g.push(a),
            c.l.add(x(a)));
        return b
    }
    var pi = class extends di {
        constructor(a, b) {
            super();
            this.j = a;
            this.B = b
        }
        A(a, b=!1) {
            var c = a.j();
            b = b ? ci(this) : this.g.slice(0);
            for (let f = 0; f < b.length; ++f) {
                var d = b[f];
                if (!eh(d))
                    continue;
                var e = d.j();
                if (!tg(e, c))
                    continue;
                let g = this.B.compare(d, a);
                if (!(e = g > 0) && (e = g == 0 && !(d != a && ee(d.I, a.I))))
                    a: {
                        e = a;
                        if (uh(d) && !uh(e)) {
                            e = !0;
                            break a
                        }
                        if (!uh(d) && uh(e)) {
                            e = !1;
                            break a
                        }
                        e = this.j.map.get(x(e));
                        d = this.j.map.get(x(d));
                        e = e && d && e.end.sa() < d.start.sa() ? !0 : !1
                    }
                if (e)
                    return !0
            }
            return !1
        }
    }
    ;
    var qi = class {
        constructor(a, b) {
            this.Rd = a;
            this.Wd = b
        }
    }
    ;
    function ri(a, b) {
        var c = 0
          , d = null
          , e = a.g.slice(0);
        for (let f = 0; f < e.length; ++f) {
            let g = a.j.map.get(x(e[f]));
            g.end.sa() < b && g.end.sa() > c && (d = g,
            c = g.end.sa())
        }
        return d
    }
    var si = class extends di {
        constructor(a) {
            super();
            this.j = a
        }
    }
    ;
    var ti = class extends si {
        constructor(a, b) {
            super(a);
            this.B = b
        }
        A(a, b=!1) {
            var c = a.j()
              , d = nh(a);
            b = b ? ci(this) : this.g.slice(0);
            for (let e = 0; e < b.length; ++e) {
                let f = b[e];
                if (eh(f) && (d || !(this.B.compare(a, f) > 0)) && tg(b[e].j(), c))
                    return !0
            }
            return !1
        }
    }
    ;
    var ui = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.g = c
        }
    }
    ;
    var vi = class {
        constructor(a, b, c, d, e, f, g, k) {
            this.j = a;
            this.B = b;
            this.V = c;
            this.R = d;
            this.A = e;
            this.l = f;
            this.g = g;
            this.F = k
        }
    }
    ;
    var wi = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.g = d
        }
    }
    ;
    var xi = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            a = a.j();
            a = a.right - a.left;
            return this.j <= a && a <= this.l ? [] : [4]
        }
    }
    ;
    var yi = class {
        constructor(a, b) {
            this.g = a;
            this.j = b || null
        }
    }
    ;
    function zi(a) {
        if (a.j != 0)
            throw Error("Already resolved/rejected.");
    }
    var Ci = class {
        constructor() {
            this.g = new Ai(this);
            this.j = 0
        }
        resolve(a) {
            zi(this);
            this.j = 1;
            this.A = a;
            Bi(this.g)
        }
        reject(a) {
            zi(this);
            this.j = 2;
            this.l = a;
            Bi(this.g)
        }
    }
    ;
    function Bi(a) {
        switch (a.g.j) {
        case 0:
            break;
        case 1:
            a.j && a.j(a.g.A);
            break;
        case 2:
            a.l && a.l(a.g.l);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    }
    var Ai = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.j)
                throw Error("Then functions already set.");
            this.j = a;
            this.l = b;
            Bi(this)
        }
    }
    ;
    function Di(a, b, c) {
        var d = new Ci;
        a.g(new yi(function() {
            d.resolve(b())
        }
        ,c));
        return d.g
    }
    function Ei(a, b, c, d) {
        a.g(new yi(function() {
            b.resolve(c)
        }
        ,d))
    }
    function Fi(a, b) {
        a.g(new yi(function() {
            b.reject("n")
        }
        ,"rrej"))
    }
    var Gi = class {
    }
    ;
    var Hi = class {
        constructor(a) {
            this.g = a
        }
    }
    ;
    function Ii(a, b) {
        var c = new Ci;
        a.g.g(new yi(function() {
            Ji(a, b, c)
        }
        ,"idom"));
        return c.g
    }
    function Ki(a) {
        return Di(a.g, function() {
            return new bi
        }, "icla")
    }
    function Li(a, b, c) {
        var d = new Ci;
        Mi(a, b, new Hi(c.g)).then(function(e) {
            Ni(a, b).then(function(f) {
                Oi(a, b, e).then(function(g) {
                    d.resolve(new ui(f,g,e))
                })
            })
        });
        return d.g
    }
    function Pi(a, b, c) {
        var d = new Ci;
        Ii(a, b).then(function(e) {
            Ki(a).then(function(f) {
                Li(a, e, f).then(function(g) {
                    Ei(a.g, d, new wi(e,g,f,c))
                }, d.reject.bind(d))
            }, d.reject.bind(d))
        }, d.reject.bind(d));
        return d.g
    }
    function Ji(a, b, c) {
        var d = b.document.body;
        if (d) {
            var e = b.document.body.getBoundingClientRect().width;
            if (e == null)
                c.reject("bw");
            else {
                var f = P(b)
                  , g = wg(b).clientHeight;
                if (f == null || g == null)
                    c.reject("vp");
                else {
                    var k = (new Fh(d,!0)).g(d);
                    if (k) {
                        var h = new ni;
                        Qi(a, k).then(n => {
                            bh = n;
                            Ri(a, k).then(l => {
                                c.resolve(new vi(b,e,f,g,k,n,l,h))
                            }
                            )
                        }
                        )
                    } else
                        c.reject("nt")
                }
            }
        } else
            c.reject("b")
    }
    function Qi(a, b) {
        return Di(a.g, function() {
            var c = [];
            ih(b, c);
            return c
        }, "iflt")
    }
    function Ri(a, b) {
        return Di(a.g, function() {
            var c = {
                map: new qg,
                Ba: []
            };
            gi(b, 0, c);
            return c
        }, "intm")
    }
    function Mi(a, b, c) {
        return Di(a.g, function() {
            var d = b.l
              , e = new ti(b.g,b.F)
              , f = new Hh(Yh(c.g),6);
            for (let k of d)
                if (f.g(k)) {
                    d = e;
                    var g = k;
                    d.g.push(g);
                    d.l.add(x(g))
                }
            return e
        }, "ivis")
    }
    function Ni(a, b) {
        return Di(a.g, function() {
            var c = Sh(b.l);
            return oi(b.l, b.g, b.F, c)
        }, "ibck")
    }
    function Oi(a, b, c) {
        return Di(a.g, function() {
            var d = b.g
              , e = new qg
              , f = 0;
            for (var g = 0; g < d.Ba.length; ++g) {
                var k = d.Ba[g], h = k.g, n;
                if (n = k.j == 1)
                    n = Q(h, "float"),
                    n = n == "left" || n == "right";
                n && (h = h.j().bottom,
                h > f && (f = h));
                e.set(x(k), f)
            }
            f = new qg;
            g = Number.MAX_VALUE;
            for (k = d.Ba.length - 1; k >= 0; --k)
                h = d.Ba[k],
                n = h.g,
                h.j == 0 && Jg(c.l, x(n)) && (n = n.j().top,
                n < g && (g = n)),
                f.set(x(h), g);
            d = new qg;
            g = pg(e);
            for (k = 0; k < g.length; ++k) {
                h = e.get(g[k]);
                n = f.get(g[k]);
                if (typeof n !== "number")
                    throw Error("No entry in minSubsequentTopBounds for terminal UID!");
                d.set(g[k], new qi(h,n))
            }
            return d
        }, "irel")
    }
    var Si = class {
        constructor(a) {
            this.g = a
        }
    }
    ;
    function Ti(a) {
        var b = [];
        Hg(a.getElementsByTagName("p"), function(c) {
            Ui(c) >= 100 && b.push(c)
        });
        return b
    }
    function Ui(a) {
        if (a.nodeType == 3)
            return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT")
            return 0;
        var b = 0;
        Hg(a.childNodes, function(c) {
            b += Ui(c)
        });
        return b
    }
    function Vi(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    function Wi(a, b) {
        if (a.g == null)
            return b;
        switch (a.g) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.g);
        }
    }
    var Xi = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.j = b;
            this.l = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.A,
                occurrenceIndex: this.j,
                paragraphIndex: this.l,
                ignoreMode: this.g
            })
        }
    }
    ;
    function Yi(a) {
        if (a.nodeType != 1)
            var b = !1;
        else if (b = a.tagName == "INS")
            a: {
                b = ["adsbygoogle-placeholder"];
                var c = a.className ? a.className.split(/\s+/) : [];
                a = {};
                for (let d = 0; d < c.length; ++d)
                    a[c[d]] = !0;
                for (c = 0; c < b.length; ++c)
                    if (!a[b[c]]) {
                        b = !1;
                        break a
                    }
                b = !0
            }
        return b
    }
    ;var Zi = class {
        constructor(a=1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    }
    ;
    function $i(a, b, c) {
        var d = [];
        for (let e of a.g)
            b(e) ? d.push(e) : c(e);
        return new aj(d)
    }
    function bj(a, b=1) {
        a = a.g.slice(0);
        var c = new Zi(b);
        Ka(a, () => c.next());
        return new aj(a)
    }
    var aj = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach( (b, c) => void a(b, c, this))
        }
        filter(a) {
            return new aj(Ea(this.g, a))
        }
        apply(a) {
            return new aj(a(this.g.slice(0)))
        }
        sort(a) {
            return new aj(this.g.slice(0).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            var b = this.g.slice(0);
            b.push(a);
            return new aj(b)
        }
    }
    ;
    var cj = class extends D {
        getId() {
            return Jc(this, 3, B)
        }
    }
    ;
    var dj = class {
        constructor(a, {nd: b, Ke: c, af: d, ge: e}) {
            this.B = a;
            this.j = c;
            this.A = new aj(b || []);
            this.g = e;
            this.l = d
        }
    }
    ;
    var ej = a => {
        var b = a.split("~").filter(c => c.length > 0);
        a = new qg;
        for (let c of b)
            b = c.indexOf("."),
            b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
        return a
    }
      , gj = a => {
        var b = fj(a);
        a = [];
        for (let c of b)
            b = String(c.kb),
            a.push(c.Wa + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
        return a.join("~")
    }
    ;
    const fj = a => {
        var b = []
          , c = a.A;
        c && c.g.length && b.push({
            Wa: "a",
            kb: hj(c)
        });
        a.j != null && b.push({
            Wa: "as",
            kb: a.j
        });
        a.l != null && b.push({
            Wa: "i",
            kb: String(a.l)
        });
        a.g != null && b.push({
            Wa: "rp",
            kb: String(a.g)
        });
        b.sort(function(d, e) {
            return d.Wa.localeCompare(e.Wa)
        });
        b.unshift({
            Wa: "t",
            kb: ij(a.B)
        });
        return b
    }
      , ij = a => {
        switch (a) {
        case 0:
            return "aa";
        case 1:
            return "ma";
        default:
            throw Error("Invalid slot type" + a);
        }
    }
      , hj = a => {
        a = a.g.slice(0).map(jj);
        a = JSON.stringify(a);
        {
            let c = a.length;
            if (c === 0)
                a = 0;
            else {
                var b = 305419896;
                for (let d = 0; d < c; d++)
                    b ^= (b << 5) + (b >> 2) + a.charCodeAt(d) & 4294967295;
                a = b > 0 ? b : 4294967296 + b
            }
        }
        return a
    }
      , jj = a => {
        var b = {};
        Jc(a, 7) != null && (b.q = Jc(a, 7, B));
        Ib(C(a, 2)) != null && (b.o = Ib(C(a, 2, B)));
        Ib(C(a, 5)) != null && (b.p = Ib(C(a, 5, B)));
        return b
    }
    ;
    var kj = class extends D {
        setLocation(a) {
            return lc(this, 1, Eb(a))
        }
    }
    ;
    function lj(a, b, c) {
        switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if (c = b.parentNode) {
                let d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && d.nodeType == 8; )
                        d = d.nextSibling;
                c.insertBefore(a, d)
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a)
        }
        Yi(b) && (b.setAttribute("data-init-display", b.style.display),
        b.style.display = "block")
    }
    function mj(a) {
        if (a && a.parentNode) {
            let b = a.parentNode;
            b.removeChild(a);
            Yi(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    }
    ;var S = class {
        constructor(a, b=!1) {
            this.g = a;
            this.defaultValue = b
        }
    }
      , nj = class {
        constructor(a, b=0) {
            this.g = a;
            this.defaultValue = b
        }
    }
    ;
    var oj = new S(698926295,!0)
      , pj = new S(1397)
      , qj = new nj(1359)
      , rj = new nj(1358)
      , sj = new S(1360)
      , tj = new nj(1357)
      , uj = new nj(1340,.2)
      , vj = new nj(1339,.3)
      , wj = new S(1337)
      , xj = new nj(728201648,100)
      , yj = new S(1342,!0)
      , zj = new S(313)
      , Aj = new S(752401956,!0)
      , Bj = new S(45719801)
      , Cj = new S(789511913,!0)
      , Dj = new S(823552246)
      , Ej = new S(730909245)
      , Fj = new S(730909244)
      , Gj = new S(755437760)
      , Hj = new S(730909246)
      , Ij = new S(730909247)
      , Jj = new nj(913774067)
      , Kj = new S(45775975,!0)
      , Lj = new S(838458490,!0)
      , Mj = new S(45753661)
      , Nj = new S(45712481)
      , Oj = new S(458320011)
      , Pj = new nj(458320009,.4)
      , Qj = new S(732272249)
      , Rj = new S(775698923)
      , Sj = new S(732217385)
      , Tj = new S(733329085)
      , Uj = new nj(732217386,1E4)
      , Vj = new nj(794150639,5E3)
      , Wj = new nj(732217387,500)
      , Xj = new S(791377772)
      , Yj = new nj(811376351,.5)
      , Zj = new nj(733329086,3E4)
      , ck = new nj(629808663,100)
      , dk = new nj(550718588,250)
      , ek = new S(45459826)
      , fk = new S(531007060)
      , gk = new S(45545724)
      , hk = new S(45430975)
      , ik = new S(531582260)
      , jk = new S(886091922,!0)
      , kk = new S(907534769)
      , lk = new S(885814544)
      , mk = new S(897236184,!0);
    var nk = class {
        constructor() {
            var a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? a[b] : c;
            this.B = (b, c) => a[b] != null ? a[b] : c;
            this.F = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.g = () => {}
        }
    }
    ;
    function T(a) {
        return eg(nk).j(a.g, a.defaultValue)
    }
    function ok(a) {
        return eg(nk).l(a.g, a.defaultValue)
    }
    ;var qk = (a, b, c) => {
        var d = pk(b, c);
        if (d.init) {
            for (c = b = d.init; c = d.oa(c); )
                b = c;
            d = {
                anchor: b,
                position: d.Jb
            }
        } else
            d = {
                anchor: b,
                position: c
            };
        a["google-ama-order-assurance"] = 0;
        lj(a, d.anchor, d.position)
    }
    ;
    function pk(a, b) {
        var c = e => {
            e = rk(e);
            return e == null ? !1 : 0 < e
        }
          , d = e => {
            e = rk(e);
            return e == null ? !1 : 0 > e
        }
        ;
        switch (b) {
        case 0:
            return {
                init: sk(a.previousSibling, c),
                oa: e => sk(e.previousSibling, c),
                Jb: 0
            };
        case 2:
            return {
                init: sk(a.lastChild, c),
                oa: e => sk(e.previousSibling, c),
                Jb: 0
            };
        case 3:
            return {
                init: sk(a.nextSibling, d),
                oa: e => sk(e.nextSibling, d),
                Jb: 3
            };
        case 1:
            return {
                init: sk(a.firstChild, d),
                oa: e => sk(e.nextSibling, d),
                Jb: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function rk(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function sk(a, b) {
        return a && b(a) ? a : null
    }
    ;const tk = {
        0: 0,
        1: 1,
        2: 2,
        3: 3
    };
    const uk = {
        BODY: {
            ba: [1, 2],
            ha: !1,
            ia: 2,
            ga: 4
        },
        HEADER: {
            ba: [0, 3, 1, 2],
            ha: !1,
            ia: 1,
            ga: 3
        },
        NAV: {
            ba: [0, 3],
            ha: !1,
            ia: 1,
            ga: 3
        },
        H1: {
            ba: [0],
            ha: !1,
            ia: 1,
            ga: 2
        },
        IMG: {
            ba: [0, 3],
            ha: !0,
            ia: 0,
            ga: 1
        },
        DIV: {
            ba: [0, 3, 1, 2],
            ha: !0,
            ia: 0,
            ga: 1
        },
        TABLE: {
            ba: [0, 3],
            ha: !0,
            ia: 0,
            ga: 1
        },
        TD: {
            ba: [1, 2],
            ha: !0,
            ia: 0,
            ga: 1
        },
        ASIDE: {
            ba: [0, 3, 1, 2],
            ha: !0,
            ia: 0,
            ga: 1
        },
        LI: {
            ba: [1, 2],
            ha: !0,
            ia: 0,
            ga: 1
        },
        SECTION: {
            ba: [0, 3, 1, 2],
            ha: !0,
            ia: 0,
            ga: 1
        },
        H2: {
            ba: [0],
            ha: !1,
            ia: 0,
            ga: 2
        },
        H3: {
            ba: [0],
            ha: !1,
            ia: 0,
            ga: 2
        },
        H4: {
            ba: [0],
            ha: !1,
            ia: 0,
            ga: 2
        },
        H5: {
            ba: [0],
            ha: !1,
            ia: 0,
            ga: 2
        },
        H6: {
            ba: [0],
            ha: !1,
            ia: 0,
            ga: 2
        },
        P: {
            ba: [0],
            ha: !0,
            ia: 0,
            ga: 1
        },
        BLOCKQUOTE: {
            ba: [0, 3],
            ha: !0,
            ia: 0,
            ga: 1
        },
        HR: {
            ba: [0, 3],
            ha: !1,
            ia: 0,
            ga: 1
        },
        VIDEO: {
            ba: [0, 3],
            ha: !0,
            ia: 0,
            ga: 1
        }
    };
    var vk = a => ({
        ba: a.ba.slice(0),
        ha: a.ha,
        ia: a.ia,
        ga: a.ga
    })
      , wk = (a, b) => {
        var c = vk(a);
        c.ba = Ea(a.ba, d => b[d]);
        return c
    }
    ;
    function xk(a) {
        var b = a.length - 1
          , c = new Ng;
        c.next = function() {
            return b < 0 ? Og : {
                value: a[b--],
                done: !1
            }
        }
        ;
        return c
    }
    ;const yk = {
        0: !0,
        1: !0
    }
      , zk = {
        2: !0,
        3: !0
    }
      , Ak = {
        3: !0
    };
    var Bk = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.g = c
        }
        oa() {
            for (var a = Qg(this.j); a !== null; a = Qg(this.j)) {
                a: {
                    var b = a.g;
                    if (b.I.nodeType != 1) {
                        b = null;
                        break a
                    }
                    var c = uk[b.I.tagName];
                    if (!c) {
                        b = null;
                        break a
                    }
                    a = wk(c, a.j == 0 ? yk : fh(a.g).length > 0 ? zk : Ak);
                    b = {
                        node: b,
                        Rb: a,
                        identifier: {}
                    }
                }
                if (b && (a = b.node.j().getWidth(),
                c = this.l,
                a == null || c == null ? 0 : a >= c * this.g.A && a <= c * this.g.j))
                    return a = new Ci,
                    a.resolve(b),
                    a.g
            }
            b = new Ci;
            b.reject("na");
            return b.g
        }
    }
    ;
    function Ck(a, b) {
        do {
            let c = Hd(a, b);
            if (c && c.position === "fixed")
                return !1
        } while (a = a.parentElement);
        return !0
    }
    function Dk(a, b, c) {
        var d;
        return a.style && !!a.style[c] && Ld(a.style[c]) || (d = Hd(a, b)) && !!d[c] && Ld(d[c]) || null
    }
    function Ek(a, b) {
        try {
            let c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }
    function Fk(a, b) {
        a = Ek(a, b);
        return (a ? a.y : 0) < wg(b).clientHeight - 100
    }
    function Gk(a, b) {
        var c = Dk(b, a, "height");
        if (c)
            return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Dk(b, a, "height");
        b.style.height = d;
        if (c)
            return c;
        c = Infinity;
        do
            (d = b.style && Ld(b.style.height)) && (c = Math.min(c, d)),
            (d = Dk(b, a, "maxHeight")) && (c = Math.min(c, d));
        while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
        return c
    }
    ;function Hk(a, b) {
        var c;
        return a.style && a.style.zIndex || (c = Hd(a, b)) && c.zIndex || null
    }
    ;function Ik(a, b) {
        for (let c = 0; c < b.length; c++) {
            let d = b[c]
              , e = vd(d.property);
            a[e] = d.value
        }
    }
    function Jk(a, b, c) {
        var d = [];
        if (c = c && c.g())
            a.lb.className = c.join(" ");
        a = a.Pa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        d.length && a.setAttribute("data-ad-channel", d.join("+"))
    }
    function Kk(a, b) {
        var c = b.Tb || !1
          , d = ie(new he(a), "DIV")
          , e = d.style;
        e.width = "100%";
        e.height = "auto";
        e.clear = c ? "both" : "none";
        c = d.style;
        c.textAlign = "center";
        b.Ib && Ik(c, b.Ib);
        a = ie(new he(a), "INS");
        c = a.style;
        c.display = "block";
        c.margin = "auto";
        c.backgroundColor = "transparent";
        b.mc && (c.marginTop = b.mc);
        b.Sb && (c.marginBottom = b.Sb);
        b.yb && Ik(c, b.yb);
        d.appendChild(a);
        return {
            lb: d,
            Pa: a
        }
    }
    ;function Lk(a, b=!1) {
        if (a.g)
            return a.g;
        if (b = a.H(b))
            ah(),
            !a.j && b && (a.j = b.j());
        return b
    }
    function Mk(a) {
        return a.J.node || null
    }
    function Nk(a) {
        return (a = Mk(a)) && a.A() ? Yi(a.I) : !1
    }
    function Ok(a) {
        return pg(a.K.g).map(b => {
            switch (b) {
            case 1:
                return "IN ARTICLE";
            case 2:
                return "ABOVE FOOTER";
            case 3:
                return "ABOVE COMMENT";
            case 4:
                return "PEDESTAL";
            case 5:
                return "BELOW CONTENT";
            default:
                return null
            }
        }
        ).filter(b => b != null).join(", ")
    }
    var Pk = class {
        constructor(a) {
            this.J = a.j;
            this.l = a.A;
            this.j = this.g = null;
            this.B = !1;
            this.K = new Kg(pg(a.g.g))
        }
        G() {}
        H() {}
        N() {}
        A() {}
    }
      , Qk = class {
        constructor(a, b) {
            this.j = a;
            this.A = b;
            this.g = new Kg;
            this.l = []
        }
        build() {}
    }
    ;
    var Rk = class {
        constructor(a, b) {
            this.aa = a;
            this.height = b
        }
        g(a) {
            return a > 300 && this.height > 300 ? this.aa : Math.min(1200, Math.round(a))
        }
    }
    ;
    var Sk = class extends Rk {
        j() {}
    }
    ;
    function Tk(a) {
        return b => !!(b.Z() & a)
    }
    var Uk = class extends Sk {
        constructor(a, b, c, d=!1) {
            super(a, b);
            this.A = c;
            this.l = d
        }
        Z() {
            return this.A
        }
        bc() {
            return this.l
        }
        j(a, b, c) {
            c.style.height = `${this.height}px`;
            b.rpe = !0
        }
    }
    ;
    const Vk = {
        image_stacked: 1 / 1.91,
        image_sidebyside: 1 / 3.82,
        mobile_banner_image_sidebyside: 1 / 3.82,
        pub_control_image_stacked: 1 / 1.91,
        pub_control_image_sidebyside: 1 / 3.82,
        pub_control_image_card_stacked: 1 / 1.91,
        pub_control_image_card_sidebyside: 1 / 3.74,
        pub_control_text: 0,
        pub_control_text_card: 0
    }
      , Wk = {
        image_stacked: 80,
        image_sidebyside: 0,
        mobile_banner_image_sidebyside: 0,
        pub_control_image_stacked: 80,
        pub_control_image_sidebyside: 0,
        pub_control_image_card_stacked: 85,
        pub_control_image_card_sidebyside: 0,
        pub_control_text: 80,
        pub_control_text_card: 80
    }
      , Xk = {
        pub_control_image_stacked: 100,
        pub_control_image_sidebyside: 200,
        pub_control_image_card_stacked: 150,
        pub_control_image_card_sidebyside: 250,
        pub_control_text: 100,
        pub_control_text_card: 150
    };
    function Yk(a) {
        var b = 0;
        a.za && b++;
        a.wa && b++;
        a.xa && b++;
        if (b < 3)
            return {
                La: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
            };
        b = a.za.split(",");
        var c = a.xa.split(",");
        a = a.wa.split(",");
        if (b.length !== c.length || b.length !== a.length)
            return {
                La: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
            };
        if (b.length > 2)
            return {
                La: `The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
            };
        var d = []
          , e = [];
        for (let g = 0; g < b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || f === 0)
                return {
                    La: `Wrong value '${c[g]}' for data-matched-content-rows-num.`
                };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || f === 0)
                return {
                    La: `Wrong value '${a[g]}' for data-matched-content-columns-num.`
                };
            e.push(f)
        }
        return {
            xa: d,
            wa: e,
            Mc: b
        }
    }
    function Zk(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }
    function $k(a, b) {
        return a * Vk[b] + Wk[b]
    }
    function al(a, b, c, d) {
        b = Math.floor($k((a - 8 * b - 8) / b, d) * c + 8 * c + 8);
        return a > 1500 ? {
            width: 0,
            height: 0,
            ne: `Calculated slot width is too large: ${a}`
        } : b > 1500 ? {
            width: 0,
            height: 0,
            ne: `Calculated slot height is too large: ${b}`
        } : {
            width: a,
            height: b
        }
    }
    function bl(a, b) {
        var c = a - 8 - 8;
        --b;
        return {
            width: a,
            height: Math.floor(c / 1.91 + 70) + Math.floor($k(c, "mobile_banner_image_sidebyside") * b + 8 * b + 8)
        }
    }
    ;var cl = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    function dl(a, b, c, d, e) {
        if (a !== a.top)
            return Vc(a) ? 3 : 16;
        if (!(P(a) < 488))
            return 4;
        if (!vg(a))
            return 5;
        var f = P(a);
        if (!f || (f - c) / f > d)
            a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true")
                a: {
                    c = b.parentElement;
                    for (b = P(a); c; c = c.parentElement) {
                        d = Hd(c, a);
                        if (!d)
                            continue;
                        if ((e = Ld(d.width)) && !(e >= b) && d.overflow !== "visible") {
                            c = !0;
                            break a
                        }
                    }
                    c = !1
                }
            a = c ? 7 : !0
        }
        return a
    }
    function el(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }
    function fl(a, b) {
        if (b.nodeType === 3)
            return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName))
                return !1;
            let c;
            try {
                c = Hd(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }
    function gl(a, b, c) {
        a = Ek(b, a);
        return c === "rtl" ? -a.x : a.x
    }
    function hl(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Hd(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            el(b, c, "0px");
            d.width = `${P(a)}px`;
            if (gl(a, b, c) !== 0) {
                el(b, c, "0px");
                var e = gl(a, b, c);
                el(b, c, `${-1 * e}px`);
                a = gl(a, b, c);
                a !== 0 && a !== e && el(b, c, `${e / (a - e) * e}px`)
            }
            d.zIndex = "30"
        }
    }
    ;function il(a, b) {
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (a.indexOf(b) != -1)
            return !0;
        var c = "";
        for (let d of b.split("_"))
            c += d.substring(0, 2);
        b = c;
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }
    ;const jl = La("script");
    var kl = class {
        constructor(a, b, c=null, d=null, e=null, f=null, g=null, k=null, h=null, n=null, l=null, m=null) {
            this.G = a;
            this.Ka = b;
            this.Z = c;
            this.g = d;
            this.H = e;
            this.ja = f;
            this.Da = g;
            this.A = k;
            this.B = h;
            this.j = n;
            this.l = l;
            this.F = m
        }
        size() {
            return this.Ka
        }
    }
    ;
    var ll = class extends Error {
        constructor(a="") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, ll) : this.stack = Error().stack || ""
        }
    }
    ;
    var ml = class extends Sk {
        constructor(a, b) {
            super(a, b)
        }
        g(a) {
            return Math.min(1200, Math.max(this.aa, Math.round(a)))
        }
    }
    ;
    function nl(a, b) {
        ol(a, b);
        if (b.google_content_recommendation_ui_type === "pedestal" && !T(pj))
            return new kl(9,new ml(a,Math.floor(a * 2.189)));
        if (T(sj)) {
            var c = bd()
              , d = ok(tj)
              , e = ok(rj)
              , f = ok(qj);
            a < 468 ? c ? (a = bl(a, d),
            a = {
                Ia: a.width,
                Ha: a.height,
                wa: 1,
                xa: d,
                za: "mobile_banner_image_sidebyside"
            }) : (a = al(a, 1, d, "image_sidebyside"),
            a = {
                Ia: a.width,
                Ha: a.height,
                wa: 1,
                xa: d,
                za: "image_sidebyside"
            }) : (a = Zk(a),
            e === 1 && (a.height = Math.floor(a.height * .5)),
            a = {
                Ia: a.width,
                Ha: a.height,
                wa: f,
                xa: e,
                za: "image_stacked"
            })
        } else
            T(pj) ? (d = Zk(a),
            e = 4,
            f = 2,
            a < 468 && (e = 1,
            f = 6,
            d = {
                width: a,
                height: Math.floor($k(a, "image_stacked") * f + 8 * f + 8)
            }),
            a = {
                Ia: d.width,
                Ha: d.height,
                wa: e,
                xa: f,
                za: "image_stacked"
            }) : (d = bd(),
            a < 468 ? d ? (a = bl(a, 12),
            a = {
                Ia: a.width,
                Ha: a.height,
                wa: 1,
                xa: 12,
                za: "mobile_banner_image_sidebyside"
            }) : (a = Zk(a),
            a = {
                Ia: a.width,
                Ha: a.height,
                wa: 1,
                xa: 13,
                za: "image_sidebyside"
            }) : (a = Zk(a),
            a = {
                Ia: a.width,
                Ha: a.height,
                wa: 4,
                xa: 2,
                za: "image_stacked"
            }));
        pl(b, a);
        return new kl(9,new ml(a.Ia,a.Ha))
    }
    function ql(a, b) {
        ol(a, b);
        {
            let f = Yk({
                xa: b.google_content_recommendation_rows_num,
                wa: b.google_content_recommendation_columns_num,
                za: b.google_content_recommendation_ui_type
            });
            if (f.La)
                a = {
                    Ia: 0,
                    Ha: 0,
                    wa: 0,
                    xa: 0,
                    za: "image_stacked",
                    La: f.La
                };
            else {
                var c = f.Mc.length === 2 && a >= 468 ? 1 : 0;
                var d = f.Mc[c];
                d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
                var e = Xk[d];
                let g = f.wa[c];
                for (; a / g < e && g > 1; )
                    g--;
                e = g;
                c = f.xa[c];
                a = al(a, e, c, d);
                a = {
                    Ia: a.width,
                    Ha: a.height,
                    wa: e,
                    xa: c,
                    za: d
                }
            }
        }
        if (a.La)
            throw new ll(a.La);
        pl(b, a);
        return new kl(9,new ml(a.Ia,a.Ha))
    }
    function ol(a, b) {
        if (a <= 0)
            throw new ll(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }
    function pl(a, b) {
        a.google_content_recommendation_ui_type = b.za;
        a.google_content_recommendation_columns_num = b.wa;
        a.google_content_recommendation_rows_num = b.xa
    }
    ;var rl = class extends Sk {
        constructor(a, b) {
            super(a, b)
        }
        g() {
            return this.aa
        }
        j(a, b, c) {
            hl(a, c);
            c.style.height = `${this.height}px`;
            b.rpe = !0
        }
    }
    ;
    const sl = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var tl = class extends Sk {
        constructor(a, b) {
            super(a, b)
        }
        g() {
            return Math.min(1200, this.aa)
        }
    }
    ;
    function ul(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false")
                a = g;
            else if (a = dl(b, c, g, ok(uj), e),
            a !== !0)
                e.gfwrnwer = a,
                a = g;
            else if (a = P(b))
                if (e.google_full_width_responsive_allowed = !0,
                c.parentElement) {
                    b: {
                        g = c;
                        for (let k = 0; k < 100 && g.parentElement; ++k) {
                            let h = g.parentElement.childNodes;
                            for (let n = 0; n < h.length; ++n) {
                                let l = h[n];
                                if (l !== g && fl(b, l))
                                    break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    hl(b, c)
                } else
                    a = g;
            else
                a = g
        }
        if (a < 250)
            throw new ll(`Fluid responsive ads must be at least 250px wide: availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50)
                throw new ll(`Fluid responsive ads must be at least 50px tall: height=${f}`);
            return new kl(11,new Sk(a,f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)
                for (b = [],
                e = 0; e < d; e++)
                    b.push(parseInt(c[e], 36) / 1E3);
            else
                b = null;
            if (!b)
                throw new ll(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++)
                c += b[g] * d,
                d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f))
                throw new ll(`Invalid height: height=${f}`);
            if (f < 50)
                throw new ll(`Fluid responsive ads must be at least 50px tall: height=${f}`);
            if (f > 1200)
                throw new ll(`Fluid responsive ads must be at most 1200px tall: height=${f}`);
            return new kl(11,new Sk(a,f))
        }
        d = sl[f];
        if (!d)
            throw new ll("Invalid data-ad-layout value: " + f);
        c = Fk(c, b);
        b = P(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
        return new kl(11,f === "in-article" ? new tl(a,b) : new Sk(a,b))
    }
    ;var vl = [{
        aa: 970,
        height: 90,
        Z: 2
    }, {
        aa: 728,
        height: 90,
        Z: 2
    }, {
        aa: 468,
        height: 60,
        Z: 2
    }, {
        aa: 336,
        height: 280,
        Z: 1
    }, {
        aa: 320,
        height: 100,
        Z: 2
    }, {
        aa: 320,
        height: 50,
        Z: 2
    }, {
        aa: 300,
        height: 600,
        Z: 4
    }, {
        aa: 300,
        height: 250,
        Z: 1
    }, {
        aa: 250,
        height: 250,
        Z: 1
    }, {
        aa: 234,
        height: 60,
        Z: 2
    }, {
        aa: 200,
        height: 200,
        Z: 1
    }, {
        aa: 180,
        height: 150,
        Z: 1
    }, {
        aa: 160,
        height: 600,
        Z: 4
    }, {
        aa: 125,
        height: 125,
        Z: 1
    }, {
        aa: 120,
        height: 600,
        Z: 4
    }, {
        aa: 120,
        height: 240,
        Z: 4
    }, {
        aa: 120,
        height: 120,
        Z: 1,
        bc: !0
    }].map(a => new Uk(a.aa,a.height,a.Z,a.bc ?? !1))
      , wl = [6, 12, 3, 0, 7, 14, 1, 8, 10, 4, 15, 2, 11, 5, 13, 9, 16].map(a => vl[a]);
    function Lf() {
        return "m202605280101"
    }
    ;var xl = Pc(If);
    var Kf = Pc(Mf);
    function yl(a, b) {
        return b(a) ? a : void 0
    }
    function zl(a, b, c, d, e) {
        c = c instanceof Oe ? c.error : c;
        var f = new Pf
          , g = new Of;
        try {
            var k = Dd(window);
            Mc(g, 1, k)
        } catch (p) {}
        try {
            var h = bg();
            uc(g, 2, h, Gb)
        } catch (p) {}
        try {
            Nc(g, 3, window.document.URL)
        } catch (p) {}
        k = Gc(f, 2, g);
        h = new Nf;
        b = vc(h, 1, Eb(b), 0);
        try {
            var n = lb(c?.name) ? c.name : "Unknown error";
            Nc(b, 2, n)
        } catch (p) {}
        try {
            var l = lb(c?.message) ? c.message : `Caught ${c}`;
            Nc(b, 3, l)
        } catch (p) {}
        try {
            var m = lb(c?.stack) ? c.stack : Error().stack;
            m && uc(b, 4, m.split(/\n\s*/), Ob)
        } catch (p) {}
        n = Hc(k, 1, Qf, b);
        if (e) {
            l = 0;
            switch (e.errSrc) {
            case "LCC":
                l = 1;
                break;
            case "PVC":
                l = 2
            }
            m = Jf();
            b = yl(e.shv, lb);
            m = Nc(m, 2, b);
            l = vc(m, 6, Eb(l), 0);
            m = xl();
            m = dc(m);
            b = yl(e.es, nb());
            m = uc(m, 1, b, Gb);
            m = ec(m);
            l = Gc(l, 4, m);
            m = yl(e.client, lb);
            l = lc(l, 3, Pb(m));
            m = yl(e.slotname, lb);
            l = Nc(l, 7, m);
            e = yl(e.tag_origin, lb);
            e = Nc(l, 8, e);
            e = ec(e)
        } else
            e = Oc(Jf());
        e = Hc(n, 6, Sf, e);
        d = Mc(e, 5, d ?? 1);
        Uf(a, d)
    }
    ;var Cl = class {
        constructor() {
            this.g = Al
        }
        ab(a) {
            return Bl(this.g(), a)
        }
    }
      , Dl = class {
        constructor() {
            this.g = Al()
        }
        ab(a) {
            return Bl(this.g, a)
        }
    }
    ;
    function Al() {
        return {
            Xd: Cd() + (Cd() & 2 ** 21 - 1) * 2 ** 32,
            ud: Number.MAX_SAFE_INTEGER
        }
    }
    function Bl(a, b) {
        return b > 0 && a.Xd * b <= a.ud
    }
    ;var Gl = class {
        constructor(a=!1) {
            var b = El;
            this.pinger = Fl;
            this.j = a;
            this.F = b;
            this.g = null;
            this.A = this.Ja
        }
        l(a) {
            this.g = a
        }
        B() {}
        Aa(a, b, c) {
            try {
                var d = b()
            } catch (e) {
                b = this.j;
                try {
                    b = this.A(a, Pe(e), void 0, c)
                } catch (f) {
                    this.Ja(217, f)
                }
                if (b)
                    window.console?.error?.(e);
                else
                    throw e;
            }
            return d
        }
        ea(a, b) {
            return (...c) => this.Aa(a, () => b.apply(void 0, c))
        }
        Ja(a, b, c, d) {
            try {
                let f = c === void 0 ? 1 / this.F : c === 0 ? 0 : 1 / c;
                if ((new Cl).ab(f)) {
                    var e = this.pinger;
                    c = {};
                    if (this.g)
                        try {
                            this.g(c)
                        } catch (g) {}
                    if (d)
                        try {
                            d(c)
                        } catch (g) {}
                    zl(e, a, b, f, c)
                }
            } catch (f) {}
            return this.j
        }
    }
    ;
    let Fl, Hl, Il, Jl, El;
    const Kl = new ef(t);
    (function(a, b, c=!0) {
        ({fe: El, Id: Il} = Ll());
        Hl = a || new jg;
        ig(Hl, Il);
        Fl = b || new dg(Lf(),1E3);
        Jl = new Gl(c);
        t.document.readyState === "complete" ? t.google_measure_js_timing || df(Kl) : Kl.g && L(t, "load", () => {
            t.google_measure_js_timing || df(Kl)
        }
        )
    }
    )();
    function Ml(a, b, c) {
        return Jl.Aa(a, b, c)
    }
    function Nl(a, b) {
        return Jl.ea(a, b)
    }
    function Ol(a, b, c=.01) {
        var d = bg();
        !b.eid && d.length && (b.eid = d.toString());
        of(Hl, a, b, !0, c)
    }
    function Ll() {
        if (kb(t.google_srt)) {
            var a = t.google_srt;
            var b = t.google_srt === 0 ? 1 : .01
        } else
            a = Math.random(),
            b = .01;
        return {
            fe: b,
            Id: a
        }
    }
    ;const Pl = 2 / 3;
    function Ql(a) {
        return b => b.aa <= a
    }
    function Rl(a) {
        return b => b.height <= a
    }
    function Sl(a, b) {
        return b.Qb && b.ac ? Math.max(250, wg(a).clientHeight * Pl) : 250
    }
    function Tl(a, b, c) {
        var d = c.Pd && Fk(b, a)
          , e = Sl(a, {
            Qb: c.Qb,
            ac: c.ac
        });
        return f => !(d && f.height >= e)
    }
    ;function Ul(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b))
                    return !1;
            return !0
        }
    }
    function Vl(a, b) {
        var c = wl.length
          , d = null;
        for (let e = 0; e < c; ++e) {
            let f = wl[e];
            if (a(f)) {
                if (b == null || b(f))
                    return f;
                d === null && (d = f)
            }
        }
        return d
    }
    ;function Wl(a, b, c, d, e) {
        e.google_full_width_responsive === "false" ? c = {
            va: a,
            ja: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || b === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = dl(c, d, a, ok(vj), e),
        b !== !0 ? e = b : e.google_full_width_responsive === "true" || Ck(d, c) ? (e = P(c),
        b = e - a,
        e = e && b >= 0 ? !0 : e ? b < -10 ? 11 : b < 0 ? 14 : 12 : 10) : e = 9,
        c = e !== !0 ? {
            va: a,
            ja: e
        } : {
            va: P(c) || a,
            ja: !0
        }) : c = {
            va: a,
            ja: 2
        };
        var {va: f, ja: g} = c;
        return g !== !0 ? {
            va: a,
            ja: g
        } : d.parentElement ? {
            va: f,
            ja: g
        } : {
            va: a,
            ja: g
        }
    }
    function Xl(a, b, c, d, e) {
        var {va: f, ja: g} = Ml(247, () => Wl(a, b, c, d, e))
          , k = g === !0
          , h = Ld(d.style.width)
          , n = Ld(d.style.height)
          , {Ka: l, Da: m, Z: p, Lc: q} = Yl(f, b, c, d, e, k);
        k = Zl(b, p);
        var w, A = (w = Dk(d, c, "marginLeft")) ? `${w}px` : "", I = (w = Dk(d, c, "marginRight")) ? `${w}px` : "";
        w = Hk(d, c) || "";
        return new kl(k,l,p,null,q,g,m,A,I,n,h,w)
    }
    function Yl(a, b, c, d, e, f) {
        b = $l(c, a, b);
        var g = P(c) < 488
          , k = g ? Ck(d, c) : void 0
          , h = [Ql(a), Tk(b)];
        T(yj) || h.push(Tl(c, d, {
            Pd: g,
            Qb: !(!k || !Fk(d, c)),
            ac: mg(c) === 0
        }));
        e.google_max_responsive_height != null && h.push(Rl(e.google_max_responsive_height));
        g = [p => !p.bc()];
        if (k) {
            let p = Gk(c, d);
            g.push(Rl(p))
        }
        var n = Vl(Ul(h), Ul(g));
        if (!n)
            throw new ll(`No slot size for availableWidth=${a}`);
        var {Ka: l, Da: m} = Ml(248, () => {
            var p;
            a: if (f) {
                if (e.gfwrnh && (p = Ld(e.gfwrnh))) {
                    p = {
                        Ka: new rl(a,p),
                        Da: !0
                    };
                    break a
                }
                if (e.google_resizing_allowed || e.google_full_width_responsive === "true")
                    p = Infinity;
                else {
                    p = d;
                    let w = Infinity;
                    do {
                        var q = Dk(p, c, "height");
                        q && (w = Math.min(w, q));
                        (q = Dk(p, c, "maxHeight")) && (w = Math.min(w, q))
                    } while (p.parentElement && (p = p.parentElement) && p.tagName !== "HTML");
                    p = w
                }
                !(T(wj) && p <= a * 2) && (p = Math.min(a, p),
                p < a * .5 || p < 100) && (p = a);
                p = {
                    Ka: new rl(a,Math.floor(p)),
                    Da: p < a ? 102 : !0
                }
            } else
                p = {
                    Ka: n,
                    Da: 100
                };
            return p
        }
        );
        return e.google_ad_layout === "in-article" ? {
            Ka: am(a, c, d, l, e),
            Da: !1,
            Z: b,
            Lc: k
        } : {
            Ka: l,
            Da: m,
            Z: b,
            Lc: k
        }
    }
    function Zl(a, b) {
        if (a === "auto")
            return 1;
        switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8;
        default:
            throw Error("bad mask");
        }
    }
    function $l(a, b, c) {
        if (c === "auto")
            c = Math.min(1200, P(a)),
            b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (let d in cl)
                c.indexOf(d) !== -1 && (b |= cl[d])
        }
        return b
    }
    function am(a, b, c, d, e) {
        var f = e.google_ad_height || Dk(c, b, "height");
        b = ul(a, b, c, f, e).size();
        return b.aa * b.height > a * d.height ? new Uk(b.aa,b.height,1) : d
    }
    ;function bm(a, b, c, d, e) {
        var f;
        (f = P(b)) ? P(b) < 488 ? vg(b) ? (e.google_full_width_responsive_allowed = !0,
        hl(b, c),
        f = {
            va: f,
            ja: !0
        }) : f = {
            va: a,
            ja: 5
        } : f = {
            va: a,
            ja: 4
        } : f = {
            va: a,
            ja: 10
        };
        var {va: g, ja: k} = f;
        if (k !== !0 || a === g)
            return new kl(12,new Sk(a,d),null,null,!0,k,100);
        var {Ka: h, Da: n, Z: l} = Yl(g, "auto", b, c, e, !0);
        return new kl(1,h,l,2,!0,k,n)
    }
    ;function cm(a, b, c, d, e) {
        var f = d.google_ad_height || Dk(c, e, "height") || 0;
        switch (a) {
        case 5:
            let {va: g, ja: k} = Ml(247, () => Wl(b, d.google_ad_format, e, c, d));
            k === !0 && b !== g && hl(e, c);
            k === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
            d.gfwrnwer = k);
            return nl(g, d);
        case 9:
            return T(pj) ? nl(b, d) : ql(b, d);
        case 8:
            return ul(b, e, c, f, d);
        case 10:
            return bm(b, e, c, f, d)
        }
    }
    ;var dm = class extends Pk {
        constructor(a) {
            super(a);
            this.F = ""
        }
        G() {
            return 1
        }
        H(a=!1) {
            var b = Mk(this);
            if (!b)
                return null;
            Nk(this) && (this.F = b.I.style.display);
            var c = Ok(this)
              , d = ch(b)
              , e = Kk(d, {
                mc: "10px",
                Sb: "10px",
                Tb: this.B
            });
            e.lb.className = "google-auto-placed";
            var f = e.Pa
              , g = f.style;
            g.display = "inline-block";
            g.boxSizing = "border-box";
            g.width = "100%";
            g.height = a ? "auto" : "100px";
            g.backgroundColor = "#f60";
            g.border = "#000 solid 1px";
            c && (g = d.createElement("span"),
            g.style.fontSize = "small",
            g.appendChild(d.createTextNode(c)),
            f.appendChild(g));
            c = e.lb;
            e = e.Pa;
            d = b.I;
            f = tk[this.l];
            T(zj) ? qk(c, d, f) : lj(c, d, f);
            if (a)
                try {
                    this.N(e, be())
                } catch (k) {
                    e.style.height = "100px"
                }
            this.g = b.l.g(c);
            this.g || (c.parentNode.removeChild(c),
            Nk(this) && (b.I.style.display = this.F));
            return this.g
        }
        N(a, b) {
            var c = 1
              , d = {
                google_ad_format: "auto"
            }
              , e = a.offsetWidth || (d.google_ad_resize || !1) && Dk(a, b, "width") || d.google_ad_width || 0;
            c === 4 && (d.google_ad_format = "auto",
            c = 1);
            var f = (f = cm(c, e, a, d, b)) ? f : Xl(e, d.google_ad_format, b, a, d);
            f.size().j(b, d, a);
            f.Z != null && (d.google_responsive_formats = f.Z);
            f.H != null && (d.google_safe_for_responsive_override = f.H);
            f.ja != null && (f.ja === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
            d.gfwrnwer = f.ja));
            f.Da != null && f.Da !== !0 && (d.gfwrnher = f.Da);
            b = f.l || d.google_ad_width;
            b != null && (d.google_resizing_width = b);
            b = f.j || d.google_ad_height;
            b != null && (d.google_resizing_height = b);
            b = f.size().g(e);
            var g = f.size().height;
            d.google_ad_width = b;
            d.google_ad_height = g;
            var k = f.size();
            d.google_ad_format = `${k.g(e)}x${k.height}`;
            d.google_responsive_auto_format = f.G;
            f.g != null && (d.armr = f.g);
            d.google_ad_resizable = !0;
            d.google_override_format = 1;
            d.google_loader_features_used = 128;
            f.ja === !0 && (d.gfwrnh = `${f.size().height}px`);
            f.A != null && (d.gfwroml = f.A);
            f.B != null && (d.gfwromr = f.B);
            f.j != null && (d.gfwroh = f.j);
            f.l != null && (d.gfwrow = f.l);
            f.F != null && (d.gfwroz = f.F);
            e = Vc(window) || window;
            il(e.location, "google_responsive_dummy_ad") && (Ha([1, 2, 3, 4, 5, 6, 7, 8], f.G) || f.g === 1) && f.g !== 2 && (e = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }),
            d.dash = `<${jl}>window.top.postMessage('${e}', '*'); 
          </${jl}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`);
            c !== 1 && (c = f.size().height,
            a.style.height = `${c}px`)
        }
        A() {
            if (this.g) {
                var a = this.g;
                a.I.parentNode && a.I.parentNode.removeChild(a.I);
                this.g = null;
                Nk(this) && (Mk(this).I.style.display = this.F);
                ah()
            }
        }
    }
      , em = class extends Qk {
        build() {
            return new dm(this)
        }
    }
    ;
    new Kg(["comments"]);
    new Kg(["allcomments"]);
    new Kg(["post-container", "post", "type-post"]);
    var gm = (a, b, c) => {
        var d = [];
        a.map(e => fm(e, b, c)).forEach(e => Ja(d, e));
        return d
    }
      , fm = (a, b, c) => {
        var d = a.Rb.ba
          , e = a.node;
        if (!e)
            return [];
        var f = [];
        e.g() && Ha(d, 0) && f.push(0);
        Ha(d, 1) && f.push(1);
        Ha(d, 2) && (!Ha(d, 1) || fh(e).length > 0) && f.push(2);
        e.g() && Ha(d, 3) && f.push(3);
        return f.map(g => {
            g = new em(a,g);
            b.forEach(g.g.add, g.g);
            g.l.push(...c);
            return g.build()
        }
        )
    }
      , hm = (a, b) => {
        a = Mk(b) ? a.map.get(x(Mk(b))) : void 0;
        if (!a)
            return -1;
        switch (b.l) {
        case 0:
            return a.start.sa();
        case 1:
            return a.start.sa() + 1;
        case 2:
            return a.end.sa();
        case 3:
            return a.end.sa() + 1
        }
        return -1
    }
      , im = (a, b) => {
        a = Mk(b) ? a.map.get(x(Mk(b))) : void 0;
        if (!a)
            return -1;
        switch (b.l) {
        case 0:
            return a.start.sa() - .1;
        case 3:
            return a.end.sa() + .1;
        case 1:
            return a.start.sa() + .1;
        case 2:
            return a.end.sa() - .1
        }
        return -1
    }
    ;
    function jm(a, b) {
        b && a.g.push(b);
        return a
    }
    function km(a, b) {
        a.j.push(b);
        return a
    }
    function lm(a, b) {
        return Di(a.A, () => {
            var c = [];
            for (let d = 0; d < a.j.length; ++d) {
                let e = a.j[d].g(b);
                Ja(c, e);
                if (e.length > 0)
                    break
            }
            return c
        }
        , "flap")
    }
    function mm(a, b) {
        return Di(a.A, () => {
            if (a.g.length == 0)
                var c = [];
            else {
                var d = Math.floor(im(a.B, b));
                if ((d = d != -1 ? d + b.G() + "|" + b.B + "|10px|10px" : null) && ng(a.l, d))
                    c = a.l.get(d);
                else {
                    var e = []
                      , f = Lk(b);
                    try {
                        for (let g = 0; g < a.g.length; ++g)
                            if (c = a.g[g].g(f),
                            Ja(e, c),
                            c.length > 0) {
                                b.A();
                                break
                            }
                    } finally {
                        b.A()
                    }
                    d != null && a.l.set(d, e);
                    c = e
                }
            }
            return c
        }
        , "flfa")
    }
    function nm(a, b) {
        var c = new Ci;
        lm(a, b).then(d => {
            d.length > 0 ? c.resolve(d) : mm(a, b).then(e => {
                c.resolve(d.concat(e))
            }
            )
        }
        );
        return c.g
    }
    var om = class {
        constructor(a, b) {
            this.A = a;
            this.g = [];
            this.j = [];
            this.B = b;
            this.l = new qg
        }
    }
    ;
    var pm = class {
        constructor(a) {
            this.j = a
        }
        g(a) {
            if (!a)
                return [];
            for (let b = 0; b < this.j.length; ++b)
                if (this.j[b].A(a, !1))
                    return [2];
            return []
        }
    }
    ;
    function qm(a, b) {
        Ja(a.l, b);
        return a
    }
    var rm = class {
        constructor() {
            this.j = [];
            this.l = [];
            this.A = []
        }
        g(a) {
            if (a = Mk(a)) {
                for (var b = 0; b < this.A.length; ++b)
                    if (wh(a, this.A[b]))
                        return [6];
                for (b = 0; b < this.j.length; ++b)
                    if (xh(a, this.j[b]))
                        return [6];
                for (b = 0; b < this.l.length; ++b)
                    if (yh(a, this.l[b]))
                        return [6]
            }
            return []
        }
    }
      , sm = [/cookie/, /(^|(-|_))sticky((-|_)|$)/]
      , tm = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/]
      , um = [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/]
      , vm = [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/]
      , wm = ["A", "FORM", "BUTTON"];
    var xm = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            var b = xg(this.j, !0);
            return b == null ? [16] : b - a.j().bottom < this.l ? [17] : []
        }
    }
    ;
    var ym = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            for (a = Math.floor(im(this.j, a)); a > 0; a--) {
                let b = this.j.Ba[a];
                if (!b.g.Ua()) {
                    if ((b.j == 0 ? jh(b.g).top : jh(b.g).bottom) <= this.l)
                        break;
                    return []
                }
            }
            return [10]
        }
    }
    ;
    var zm = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
    }
    ;
    var Am = class {
        constructor(a) {
            var b = [];
            a = a.g.slice(0);
            for (let c = 0; c < a.length; ++c)
                b.push(a[c].j());
            this.l = b;
            this.j = new qg
        }
        g(a) {
            var b = x(a);
            if (ng(this.j, b))
                return this.j.get(b);
            a: {
                var c = a.j();
                c = new zm(c.left,c.top + a.I.scrollHeight,a.I.scrollWidth);
                for (e of this.l) {
                    b: {
                        if (c.g >= Math.floor(e.bottom)) {
                            var d = !1;
                            break b
                        }
                        d = Math.ceil(e.left);
                        let f = c.j + c.l;
                        d = !(Math.floor(e.right) <= c.j || f <= d)
                    }
                    if (d) {
                        var e = !0;
                        break a
                    }
                }
                e = !1
            }
            e = !e && a.I.scrollHeight > a.I.clientHeight && th(a);
            c = a.g();
            c = !c || this.g(c);
            a = e && c ? !0 : e ? oh(a) : c && !oh(a);
            this.j.set(b, a);
            return a
        }
    }
    ;
    var Bm = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            var b = Mk(a);
            if (!b)
                return [];
            switch (a.l) {
            case 0:
            case 3:
                return a = b.g(),
                b != this.l && a && this.j.g(a) ? [] : [14];
            case 1:
            case 2:
                return this.j.g(b) ? [] : [14];
            default:
                throw Error("Unhandled position.");
            }
        }
    }
    ;
    var Cm = class {
        constructor(a) {
            this.j = a
        }
        g(a) {
            return (a = Mk(a)) && nh(a, this.j) ? [11] : []
        }
    }
    ;
    var Dm = class {
    }
    ;
    function Em(a=null) {
        ({googletag: a} = a ?? window);
        return a?.apiReady ? a : void 0
    }
    ;function Fm(a, b) {
        var c = Gm(b, ".google-auto-placed")
          , d = Gm(b, "ins.adsbygoogle[data-anchor-status]")
          , e = Gm(b, "ins.adsbygoogle[data-ad-format=autorelaxed]");
        var f = (Hm(b) || Gm(b, "div[id^=div-gpt-ad]")).concat(Gm(b, "iframe[id^=google_ads_iframe]"));
        var g = Gm(b, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
          , k = Gm(b, "ins.adsbygoogle-ablated-ad-slot")
          , h = Gm(b, "div.googlepublisherpluginad")
          , n = Gm(b, "html > ins.adsbygoogle")
          , l = [].concat(...Gm(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), ...Gm(b, "body ins.adsbygoogle"))
          , m = [];
        a.Re && (m = m.concat(Gm(b, "ins.adsbygoogle[data-ad-hi]")));
        for (let[p,q] of [[a.Ue, c], [a.Jc, d], [a.Xe, e], [a.Ve, f], [a.Ye, g], [a.Te, k], [a.We, h], [a.Ze, n]])
            b = q,
            p === !1 ? m = m.concat(b) : l = l.concat(b);
        l = Im(l);
        m = Im(m);
        l = l.slice(0);
        for (let p of m)
            for (m = 0; m < l.length; m++)
                (p.contains(l[m]) || l[m].contains(p)) && l.splice(m, 1);
        return a.Hd ? Jm(l) : l
    }
    function Km(a) {
        return !!a.className && a.className.indexOf("google-auto-placed") != -1
    }
    function Lm(a) {
        var b = Hm(be(fe(a))) || [];
        return !!ge(a, c => {
            if (!la(c) || c.nodeType != 1)
                return !1;
            var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
            return !d || Ha(b, c) || Ga(Object.values(Mm), e => d.call(c, e))
        }
        , !1, 20)
    }
    function Hm(a) {
        var b = Em(a);
        return b ? Ea(Fa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    }
    const Mm = {
        we: "ins.adsbygoogle-ablated-ad-slot",
        ye: "body ins.adsbygoogle",
        xe: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
        ze: ".google-auto-placed",
        Ae: "ins.adsbygoogle[data-anchor-status]",
        Ce: "iframe[id^=google_ads_iframe]",
        Ee: "div[id^=div-gpt-ad]",
        He: "ins.adsbygoogle[data-ad-format=autorelaxed]",
        Ie: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
        De: "div.googlepublisherpluginad",
        Je: "html > ins.adsbygoogle",
        Be: "div.autors-widget",
        Fe: "ins.adsbygoogle[data-ad-hi]"
    };
    function Gm(a, b) {
        return Ia(a.document.querySelectorAll(b))
    }
    function Jm(a) {
        return a.filter(b => !b.querySelector('[data-google-ad-efd="true"]'))
    }
    function Im(a) {
        var b = [];
        for (let c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                let e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    }
    ;var Nm = Nl(453, Fm);
    function Om(a) {
        a = Pm(a);
        Qm(a);
        return new Rm(a)
    }
    function Sm(a) {
        return a.g.map(b => b.box)
    }
    var Rm = class {
        constructor(a) {
            this.g = a.slice(0)
        }
    }
    ;
    function Pm(a) {
        var b = Nm({
            Jc: !1,
            Hd: !1
        }, a)
          , c = Ag(a)
          , d = zg(a);
        return b.map(e => {
            var f = e.getBoundingClientRect();
            return (e = Km(e)) || (f.bottom - f.top) * (f.right - f.left) > 1 ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Le: e ? 1 : 0
            } : null
        }
        ).filter(Yc(e => e === null))
    }
    function Qm(a) {
        Fa(a, () => new Dm)
    }
    ;var Tm = class {
        constructor(a, b, c) {
            this.j = Nm({}, c).map(qa(a.g, a)).filter(Yc(d => d === null));
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            a = a.j();
            for (let d = 0; d < this.j.length; d++) {
                let e = this.j[d].j();
                var b;
                if (b = (e.bottom - e.top) * (e.right - e.left) > 1) {
                    b = a.top;
                    var c = this.l;
                    (b = e.top - c < b && b < e.bottom + c) || (b = a.bottom,
                    c = this.l,
                    b = e.top - c < b && b < e.bottom + c)
                }
                if (b)
                    return [8]
            }
            return []
        }
    }
    ;
    var Um = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (Nk(a))
                return [];
            a = im(this.j.j, a);
            var b = ri(this.j, a);
            if (!b)
                return [];
            var c = this.l.g(b.start.g);
            b = b.end.sa();
            return c && a - b <= 10 ? [5] : []
        }
    }
    ;
    const Vm = "ASIDE DIV IMG LI SECTION TABLE TD".split(" ");
    var Wm = class {
        g(a) {
            a = Mk(a);
            if (!a)
                return [12];
            if (!Vm.includes(a.I.tagName) || a.I.id)
                return [];
            var b = zh(a)
              , c = ch(a);
            for (let d of b)
                if (c.getElementsByClassName(d).length == 1)
                    return [];
            return a.j().getHeight() <= 150 ? [13] : []
        }
    }
    ;
    var Xm = class {
        g(a) {
            return a && !a.Ua() && ph(a) ? [] : [3]
        }
    }
    ;
    function Ym(a, b) {
        return a.g.length > 0 ? (b.resolve(a.g.shift()),
        !0) : !1
    }
    var Zm = class {
        constructor(a, b) {
            this.j = a;
            this.B = b;
            this.G = [];
            this.A = [];
            this.g = []
        }
        oa() {
            var a = new Ci;
            this.j.g(new yi(qa(this.l, this, a),"p"));
            return a.g
        }
        l(a) {
            Ym(this, a) || this.B.oa().then(qa(this.F, this, a), a.reject.bind(a))
        }
        F(a, b) {
            b = gm([b], this.G, this.A);
            Ja(this.g, b);
            Ym(this, a) || this.j.g(new yi(qa(this.l, this, a),"p"))
        }
    }
    ;
    var $m = class {
        constructor(a) {
            this.g = a.filter(b => Nk(b));
            this.j = a.filter(b => !Nk(b))
        }
        oa() {
            return this.g.shift() || this.j.shift() || null
        }
    }
    ;
    var an = class {
    }
    ;
    function bn(a, b) {
        a.j.g(new yi( () => {
            var c = a.g ? a.g.oa() : null;
            c ? cn(a, b, c) : a.B.oa().then(qa(a.F, a, b), qa(a.H, a, b))
        }
        ,"r"))
    }
    function cn(a, b, c) {
        a.A && a.A.apply(c);
        a.l ? nm(a.l, c).then(function(d) {
            d.length == 0 ? (a.g.g.length > 0 || (a.g = null),
            Ei(a.j, b, c, "rres")) : (a.G.push(new an),
            bn(a, b))
        }) : Ei(a.j, b, c, "rres")
    }
    var dn = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.B = b;
            this.A = c;
            this.l = d;
            this.g = null;
            this.G = []
        }
        oa() {
            var a = new Ci;
            bn(this, a);
            return a.g
        }
        F(a, b) {
            this.g = b;
            bn(this, a)
        }
        H(a) {
            Fi(this.j, a)
        }
    }
    ;
    var en = class {
        constructor(a) {
            this.g = a
        }
        oa() {
            var a = new Ci;
            this.g.oa().then(b => {
                a.resolve(new $m([b]))
            }
            , a.reject.bind(a));
            return a.g
        }
    }
    ;
    var fn = class {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
        apply(a) {
            var b = hm(this.g, a);
            b = this.j.get(x(this.g.Ba[b]));
            a.B = b.Rd <= b.Wd
        }
    }
    ;
    var gn = class {
        constructor(a) {
            this.j = a
        }
        g(a) {
            a: {
                let b = Mk(a);
                if (b) {
                    switch (a.l) {
                    case 0:
                    case 3:
                        if (a = b.g())
                            break a;
                        throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
                    case 1:
                    case 2:
                        a = b;
                        break a
                    }
                    throw Error("Un-handled ad placement position.");
                }
                a = null
            }
            return a && Ha(this.j, a.I) ? [18] : []
        }
    }
    ;
    var hn = [{
        hostname: /^([a-z]+.)?m.wikihow.com$/,
        Bd: "mw-mf-viewport"
    }];
    const jn = a => {
        if (!a.location || !a.location.hostname)
            return [];
        var b = a.location.hostname
          , c = [];
        Da(hn, function(d) {
            b.match(d.hostname) && (d = a.document.getElementById(d.Bd)) && c.push(d)
        });
        return c
    }
    ;
    function kn(a, b) {
        a.j.g(new yi(function() {
            if (a.g)
                if (a.l.g(a.g)) {
                    var c = a.g;
                    a.g = hh(a.g);
                    b.resolve(c)
                } else {
                    a: {
                        c = a.g;
                        let d = fh(c);
                        for (let e = 0; e < d.length; ++e)
                            if (d[e].A()) {
                                c = d[e];
                                break a
                            }
                        c = hh(c)
                    }
                    a.g = c;
                    kn(a, b)
                }
            else
                b.reject(null)
        }
        ,"fpar"))
    }
    var ln = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
        oa() {
            var a = new Ci;
            kn(this, a);
            return a.g
        }
    }
    ;
    var mn = class {
        constructor(a) {
            this.j = a;
            this.g = []
        }
        reset() {
            var a = this.g;
            this.g = [];
            return a
        }
    }
    ;
    const nn = {
        ba: [3],
        ha: !1,
        ia: 0,
        ga: 1
    }
      , on = new Kg(["LI", "TR", "TD", "TH"]);
    function pn(a, b) {
        a.j.g(new yi(function() {
            a.B.oa().then(qa(a.A, a, b), qa(a.l, a, b))
        }
        ,"para"))
    }
    var qn = class {
        constructor(a, b, c) {
            this.j = a;
            this.B = b;
            this.g = new mn(c)
        }
        oa() {
            var a = new Ci;
            pn(this, a);
            return a.g
        }
        A(a, b) {
            var c = this.g;
            if (c.g.length) {
                var d = c.g[c.g.length - 1];
                var e = c.j;
                let f = e.j.map.get(x(b));
                (e = f ? ri(e, f.start.sa()) : null) ? (e = e.start.g,
                d = d == e || d != e && ee(d.I, e.I)) : d = !0
            } else
                d = !0;
            d ? c.g.push(b) : c.g = [b];
            b = this.g;
            (b = b.g.length >= 3 ? b.g[b.g.length - 3 + 1] : null) && !Jg(on, b.I.tagName) ? a.resolve({
                node: b,
                Rb: vk(nn),
                identifier: {}
            }) : pn(this, a)
        }
        l(a) {
            a.reject("na")
        }
    }
    ;
    var rn = class extends Gi {
        constructor() {
            super();
            this.j = [];
            this.l = !1
        }
        g(a) {
            this.j.push(a);
            if (!this.l) {
                this.l = !0;
                try {
                    for (; this.j.length > 0; )
                        this.j.shift().g()
                } finally {
                    this.l = !1
                }
            }
        }
    }
    ;
    var sn = class {
        constructor() {
            this.g = Date.now();
            this.j = Date.now()
        }
    }
    ;
    class tn {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = 0;
            this.g = null
        }
        get() {
            if (this.j > 0) {
                this.j--;
                var a = this.g;
                this.g = a.next;
                a.next = null
            } else
                a = this.l();
            return a
        }
    }
    ;function un() {
        var a = vn
          , b = null;
        a.g && (b = a.g,
        a.g = a.g.next,
        a.g || (a.j = null),
        b.next = null);
        return b
    }
    class wn {
        constructor() {
            this.j = this.g = null
        }
        add(a, b) {
            var c = xn.get();
            c.set(a, b);
            this.j ? this.j.next = c : this.g = c;
            this.j = c
        }
    }
    var xn = new tn( () => new yn,a => a.reset());
    class yn {
        constructor() {
            this.next = this.g = this.j = null
        }
        set(a, b) {
            this.j = a;
            this.g = b;
            this.next = null
        }
        reset() {
            this.next = this.g = this.j = null
        }
    }
    ;let zn, An = !1, vn = new wn, Cn = (a, b) => {
        zn || Bn();
        An || (zn(),
        An = !0);
        vn.add(a, b)
    }
    , Bn = () => {
        var a = Promise.resolve(void 0);
        zn = () => {
            a.then(Dn)
        }
    }
    ;
    function Dn() {
        for (var a; a = un(); ) {
            try {
                a.j.call(a.g)
            } catch (c) {
                ta(c)
            }
            var b = xn;
            b.A(a);
            b.j < 100 && (b.j++,
            a.next = b.g,
            b.g = a)
        }
        An = !1
    }
    ;var En = class extends Gi {
        constructor(a, b, c) {
            var d = new sn;
            super();
            this.N = a;
            this.j = d;
            this.F = b || null;
            this.A = c || null;
            this.l = [];
            this.B = !1;
            this.J = Cn
        }
        g(a) {
            this.l.push(a);
            this.B || this.J(this.H, this)
        }
        H() {
            this.F ? this.F(qa(this.G, this)) : this.G()
        }
        G() {
            if (!this.B) {
                this.B = !0;
                try {
                    for (this.j.g = Date.now(); this.l.length > 0; ) {
                        let a = this.l.shift();
                        this.j.j = Date.now();
                        a.g();
                        this.A && this.A.j(Date.now() - this.j.j, a.j);
                        if (Date.now() - this.j.g + 10 > 50)
                            break
                    }
                    this.l.length > 0 && this.N.setTimeout(qa(this.H, this), 0)
                } finally {
                    this.B = !1,
                    this.A && this.A.g(Date.now() - this.j.g)
                }
            }
        }
    }
    ;
    function Fn(a, b) {
        var c = new Ci
          , d = b.N ? new En(a,ra(Ml, b.g ? "lr:apf:" + b.g : "lr:apf"),b.H) : new rn;
        d.g(new yi(function() {
            Pi(new Si(d), a, b).then(function(e) {
                var f = e.j
                  , g = e.A
                  , k = e.l;
                a: {
                    var h = e.j
                      , n = e.g.B;
                    switch (n) {
                    case 2:
                        var l = h.A;
                        h = e.l.g;
                        h.A || (n = new Hh(Zh(h),0),
                        h.g || (h.g = new Kh(new Hh(Zh(h),0))),
                        h.A = new Nh(n,new Hh(h.g,1),new Hh($h(h),2)));
                        l = new qn(d,new ln(d,l,new Hh(h.A,3)),e.A.g);
                        break a;
                    default:
                        l = h.B;
                        var m = h.g.Ba;
                        h = e.g;
                        n = n == 1 ? xk(m) : Pg(m);
                        l = new Bk(l,n,h)
                    }
                }
                l = new en(new Zm(d,l));
                h = new fn(f.g,g.l);
                n = new om(d,f.g);
                e.g.F && km(n, new ym(f.g,f.R));
                m = jn(f.j);
                k = km(km(km(km(n, new gn(m)), new Um(g.g,new Hh($h(k.g),2))), new Wm), new Bm(f.A,new Am(g.g)));
                m = new rm;
                Ja(m.j, sm);
                m = qm(qm(m, tm), um);
                Ja(m.A, wm);
                Ja(m.j, vm);
                k = jm(km(km(k, qm(m, vm)), new Cm(f.V * f.R)), new Xm);
                var p = e.g
                  , q = e.j.B;
                m = Math.max(q * p.A, p.minWidth);
                p = q * p.j;
                m = m !== void 0 ? m : 0;
                p = p !== void 0 ? p : Infinity;
                if (m < 0 || p < 0)
                    throw Error("apf::wf");
                jm(jm(jm(k, m <= 0 && p === Infinity ? null : new xi(m,p)), new Tm(f.A.l,e.g.G,f.j)), new pm([g.g, g.j]));
                e.g.l > 0 && jm(n, new xm(f.j,e.g.l));
                Ei(d, c, new dn(d,l,h,n), "itres")
            }, c.reject.bind(c))
        }
        ,"i"));
        return c.g
    }
    ;var Gn = class {
        constructor(a) {
            this.g = new Kg(a)
        }
    }
    ;
    var Hn = class {
        constructor(a) {
            this.g = a
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()),
            a instanceof Hn ? a : new Hn({
                value: a
            })) : this
        }
    }
    ;
    function In(a) {
        return b => {
            for (let c of a)
                c(b)
        }
    }
    ;var Jn = class extends D {
        getValue() {
            return Jc(this, 2, B)
        }
    }
    ;
    var Kn = class extends D {
    }
    ;
    var Ln = class extends D {
    }
    ;
    var Mn = class extends D {
    }
    ;
    var Nn = class extends D {
    }
      , On = Qc(Nn);
    gj(new dj(0,{}));
    gj(new dj(1,{}));
    var Pn = class {
        constructor() {
            this.g = Ed`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`
        }
        Ja(a, b, c=.01, d="jserror") {
            if (Math.random() > c)
                return !1;
            b.error && b.meta && b.id || (b = new Oe(b,{
                context: a,
                id: d
            }));
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (Fd(t.document, this.g),
            t.error_rep_loaded = !0);
            return !1
        }
        Aa(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.Ja(a, c, .01, "jserror"))
                    throw c;
            }
        }
        ea(a, b) {
            return (...c) => this.Aa(a, () => b.apply(void 0, c))
        }
    }
    ;
    function Qn(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    }
    function Rn(a, b, c) {
        var d = c || window
          , e = typeof queueMicrotask !== "undefined";
        return function(...f) {
            e && queueMicrotask( () => {
                d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                d.google_rum_task_id_counter += 1
            }
            );
            var g = We()
              , k = 3;
            try {
                var h = a.apply(this, f)
            } catch (n) {
                k = 13;
                if (!b)
                    throw n;
                b(754, n)
            } finally {
                d.google_measure_js_timing && g && Qn({
                    label: (754).toString(),
                    value: g,
                    duration: (We() || 0) - g,
                    type: k,
                    ...(e && {
                        taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                    })
                }, d)
            }
            return h
        }
    }
    function Sn(a, b) {
        return Rn(a, (c, d) => {
            (new Pn).Ja(c, d)
        }
        , b)
    }
    ;function Tn(a, b) {
        return Sn(a, b).apply()
    }
    const Un = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function Vn(a) {
        return a == null ? a : Un[a]
    }
    function Wn(a) {
        var b = [];
        for (let c = 0; c < a.length; c++) {
            let d = Jc(a[c], 1, B)
              , e = a[c].getValue();
            d && e != null && b.push({
                property: d,
                value: e
            })
        }
        return b
    }
    function Xn(a, b) {
        var c = {};
        a && (c.mc = Jc(a, 1, B),
        c.Sb = Jc(a, 2, B),
        c.Tb = !!Ic(a, 3, B));
        b && (c.Ib = Wn(Ec(b, Jn, 3).map(d => dc(d))),
        c.yb = Wn(Ec(b, Jn, 4).map(d => dc(d))));
        return c
    }
    const Yn = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    var Zn = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            c = Kk(d.document, this.g);
            c.Pa.setAttribute("data-ad-format", "auto");
            Jk(c, a, b);
            return c
        }
    }
    ;
    var $n = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            var e = Ec(this.g, Kn, 9).length > 0 ? Ec(this.g, Kn, 9)[0] : null
              , f = this.g.Y;
            (f = Cc(f, f[z] | 0, Ln, 3)) || (f = Ln[Va] || (Ln[Va] = Sb(Ln)));
            f = Xn(f, e);
            if (!e)
                return null;
            if (e = Jc(e, 1, B)) {
                d = d.document;
                var g = c.tagName;
                c = ie(new he(d), g);
                c.style.clear = f.Tb ? "both" : "none";
                g == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Ib && Ik(c.style, f.Ib);
                d = ie(new he(d), "INS");
                f.yb && Ik(d.style, f.yb);
                c.appendChild(d);
                f = {
                    lb: c,
                    Pa: d
                };
                f.Pa.setAttribute("data-ad-type", "text");
                f.Pa.setAttribute("data-native-settings-key", e);
                Jk(f, a, b);
                a = f
            } else
                a = null;
            return a
        }
    }
    ;
    var ao = class {
        constructor(a, b) {
            this.j = a;
            this.g = b
        }
    }
    ;
    function bo(a) {
        return a.A
    }
    function co(a, b) {
        ng(a.j, 0) || a.j.set(0, []);
        a.j.get(0).push(b)
    }
    var eo = class {
        constructor(a, b, c, d, e, f, g, k=null, h=null) {
            this.g = a;
            this.H = b;
            this.N = c;
            this.Oc = d;
            e || new kj;
            this.l = f;
            this.F = g;
            this.B = k;
            (this.G = h) && Dc(h, cj, 1) && (a = Dc(h, cj, 1),
            Ib(C(a, 5)));
            this.J = [];
            this.A = !1;
            this.j = new qg
        }
        sa() {
            return this.F
        }
    }
    ;
    var fo = a => {
        switch (a.Oc) {
        case 0:
        case 1:
            var b = a.G;
            b == null ? a = null : (a = Dc(b, cj, 1),
            a == null ? a = null : (b = Fb(C(b, 2, B)),
            a = b == null ? null : new dj(0,{
                nd: [a],
                ge: b
            })));
            return a != null ? new Hn({
                value: a
            }) : new Hn(null);
        case 2:
            return new Hn(null);
        default:
            return new Hn(null)
        }
    }
    ;
    function go(a, b=window) {
        if (Ic(a, 5) ?? !1)
            try {
                return b.localStorage
            } catch {}
        return null
    }
    ;var ho = Qc(class extends D {
    }
    );
    function io(a) {
        return fo(a.Ea).map(b => gj(b))
    }
    function jo(a) {
        a.j = a.j || io(a);
        return a.j
    }
    const ko = class {
        constructor(a, b, c) {
            this.Ea = a;
            this.g = b;
            this.Va = c;
            this.j = null
        }
        fill(a, b) {
            var c = this.Ea;
            if (a = c.H.j(a, b, this.g, c.l)) {
                b = a.lb;
                if (this.Ea.A)
                    throw Error("AMA:AP:AP");
                c = this.g;
                var d = this.Ea.g.g;
                T(zj) ? qk(b, c, d) : lj(b, c, d);
                c = this.Ea;
                c.A = !0;
                b != null && c.J.push(b)
            }
            return a
        }
    }
    ;
    function lo(a) {
        switch (a) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default:
            return null
        }
    }
    ;function mo(a, b) {
        return Tn( () => {
            var c = []
              , d = [];
            try {
                var e = [];
                for (var f = 0; f < a.length; f++) {
                    var g = a[f];
                    a: {
                        var k = g.g.j
                          , h = [];
                        try {
                            h = g.l.document.querySelectorAll(k.A)
                        } catch (v) {}
                        if (!h.length) {
                            var n = [];
                            break a
                        }
                        let u = Ia(h);
                        u = Wi(k, u);
                        b: {
                            if (typeof k.j !== "number")
                                break b;
                            let v = k.j;
                            v < 0 && (v += u.length);
                            u = v >= 0 && v < u.length ? [u[v]] : []
                        }
                        b: {
                            h = k;
                            var l = u;
                            if (typeof h.l !== "number") {
                                u = l;
                                break b
                            }
                            let v = [];
                            for (let R = 0; R < l.length; R++) {
                                let N = Ti(l[R])
                                  , X = h.l;
                                X < 0 && (X += N.length);
                                X >= 0 && X < N.length && v.push(N[X])
                            }
                            u = v
                        }
                        n = u
                    }
                    h = n;
                    var m = h.length > 0 ? h[0] : null;
                    m && e.push({
                        Kb: g,
                        vc: m
                    })
                }
                for (g = 0; g < e.length; g++) {
                    n = d;
                    var p = n.push;
                    {
                        var q = e[g];
                        let u = q.vc
                          , v = q.Kb;
                        var w = v.N;
                        let R = v.l.document.createElement("div");
                        R.className = "google-auto-placed";
                        let N = R.style;
                        N.textAlign = "center";
                        N.width = "100%";
                        N.height = "0px";
                        N.clear = w ? "both" : "none";
                        m = R;
                        try {
                            k = m;
                            f = u;
                            var A = v.g.g;
                            T(zj) ? qk(k, f, A) : lj(k, f, A);
                            var I = m
                        } catch (X) {
                            throw mj(m),
                            X;
                        }
                    }
                    p.call(n, I)
                }
                let Z = zg(b)
                  , M = Ag(b);
                for (p = 0; p < d.length; p++) {
                    let u = d[p].getBoundingClientRect()
                      , v = e[p];
                    c.push(new ko(v.Kb,v.vc,new zm(u.left + M,u.top + Z,u.right - u.left)))
                }
            } finally {
                for (e = 0; e < d.length; e++)
                    mj(d[e])
            }
            return c
        }
        , b)
    }
    ;function no(a, b) {
        var c = {
            top: b.g - 25,
            right: b.j + b.l,
            bottom: b.g + 25,
            left: b.j
        };
        return !Ga(a, d => tg(d, c))
    }
    ;function oo(a) {
        return function(b) {
            return mo(b, a)
        }
    }
    function po(a) {
        var b = Sm(Om(a));
        return c => no(b, c.Va)
    }
    function qo(a) {
        if (!a.length)
            return Wc;
        var b = new Gn(a);
        return c => Jg(b.g, c.Oc)
    }
    function ro(a, b) {
        if (a <= 0)
            return Xc;
        var c = wg(b).scrollHeight - a;
        return function(d) {
            return d.Va.g <= c
        }
    }
    const so = (a, b) => b.Va.g >= a
      , to = (a, b, c) => {
        c = c.Va.l;
        return a <= c && c <= b
    }
    ;
    var uo = class {
        Sa(a) {
            return po(a)
        }
        Ta() {
            return 9
        }
    }
    ;
    var vo = class {
        constructor(a) {
            this.g = a
        }
        Sa(a) {
            return ro(this.g, a)
        }
        Ta() {
            return 13
        }
    }
    ;
    var wo = class {
        Sa(a) {
            var b = wg(a).clientHeight;
            return b ? ra(so, b + zg(a)) : Wc
        }
        Ta() {
            return 12
        }
    }
    ;
    var xo = class {
        constructor(a) {
            this.g = a
        }
        Sa() {
            return qo(this.g)
        }
        Ta() {
            return 1
        }
    }
    ;
    var yo = class {
        Sa() {
            return Yc(bo)
        }
        Ta() {
            return 7
        }
    }
    ;
    var zo = class {
        constructor(a, b) {
            this.minWidth = a;
            this.g = b
        }
        Sa() {
            return ra(to, this.minWidth, this.g)
        }
        Ta() {
            return 10
        }
    }
    ;
    var Ao = class {
        constructor(a) {
            this.A = a.j.slice(0);
            this.j = a.g.slice(0);
            this.l = a.l;
            this.B = a.B;
            this.g = a.A
        }
    }
    ;
    function Bo(a=0, b=Infinity) {
        var c = new Co
          , d = [0];
        c.A = d;
        c.j.push(new xo(d));
        c.j.push(new yo);
        c.g.push(new uo);
        c.g.push(new zo(a,b));
        return c
    }
    function Do(a, b=0) {
        a.g.push(new vo(b));
        return a
    }
    var Co = class {
        constructor() {
            this.l = 0;
            this.B = !1;
            this.j = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new Ao(this)
        }
    }
    ;
    function Eo(a, b, c) {
        ng(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    var Fo = class {
        constructor() {
            this.g = new qg
        }
    }
    ;
    function Go(a, b, c) {
        var d = b.Ea;
        if (!ng(a.g, d)) {
            var e = a.g
              , f = e.set;
            b = jo(b);
            b.g != null && b.getValue();
            f.call(e, d, new Ho)
        }
        c(a.g.get(d))
    }
    function Io(a, b) {
        Go(a, b, c => {
            c.g = !0
        }
        )
    }
    function Jo(a, b) {
        Go(a, b, c => {
            c.j = !0
        }
        )
    }
    var Ko = class {
        constructor() {
            this.g = new qg
        }
    }
    ;
    class Ho {
        constructor() {
            this.j = this.g = !1
        }
    }
    ;var Lo = class {
        constructor(a) {
            this.j = a;
            this.g = -1
        }
    }
    ;
    function Mo(a) {
        for (var b = 0; a; )
            (!b || a.previousElementSibling || a.nextElementSibling) && b++,
            a = a.parentElement;
        return b
    }
    ;function No(a) {
        var b = null.Ge.filter(c => pg(c.Vb).every(d => c.Vb.get(d) === a.get(d)));
        return b.length === 0 ? (null.md.push(19),
        null) : b.reduce( (c, d) => c.Vb.Eb() > d.Vb.Eb() ? c : d, b[0])
    }
    function Oo(a) {
        a = jo(a);
        if (a.g == null)
            return null.md.push(18),
            null;
        a = a.getValue();
        if (ng(null.Xc, a))
            return null.Xc.get(a);
        var b = ej(a);
        b = No(b);
        null.Xc.set(a, b);
        return b
    }
    ;function Po(a) {
        return a.g.length == 0 ? a : a.sort( (b, c) => (Oo(b)?.ee ?? Number.MAX_VALUE) - (Oo(c)?.ee ?? Number.MAX_VALUE))
    }
    function Qo(a, b) {
        var c = b.g
          , d = b.Ea.g.g;
        c = b.Va.g + 200 * Math.min(20, d == 0 || d == 3 ? Mo(c.parentElement) : Mo(c));
        a = a.g;
        a.g < 0 && (a.g = wg(a.j).scrollHeight || 0);
        b = a.g - b.Va.g;
        return c + (b > 1E3 ? 0 : 2 * (1E3 - b))
    }
    function Ro(a, b) {
        return b.g.length == 0 ? b : b.sort( (c, d) => Qo(a, c) - Qo(a, d))
    }
    function So(a, b) {
        return b.sort( (c, d) => {
            var e = c.Ea.B, f = d.Ea.B, g;
            e == null || f == null ? g = e == null && f == null ? Qo(a, c) - Qo(a, d) : e == null ? 1 : -1 : g = e - f;
            return g
        }
        )
    }
    var To = class {
        constructor(a) {
            this.g = new Lo(a)
        }
    }
    ;
    function Uo(a, b) {
        var c = a.l;
        for (var d of b.A)
            c = $i(c, d.Sa(a.g), Vo(d.Ta()));
        d = c = c.apply(oo(a.g));
        for (let e of b.j)
            d = $i(d, e.Sa(a.g), In([Wo(e.Ta()), () => {}
            ]));
        switch (b.l) {
        case 1:
            d = Ro(a.j, d);
            break;
        case 2:
            d = So(a.j, d);
            break;
        case 3:
            let e = eg(Ko);
            d = Po(d);
            c.forEach(f => {
                Io(e, f)
            }
            );
            d.forEach(f => Jo(e, f))
        }
        b.B && (d = bj(d, ud(a.g.location.href + a.g.localStorage.google_experiment_mod)));
        b.g?.length === 1 && Eo(a.A, b.g[0], {
            Me: c.g.length,
            gf: d.g.length
        });
        return d.g.slice(0)
    }
    var Xo = class {
        constructor(a, b) {
            this.l = new aj(a);
            this.j = new To(b);
            this.g = b;
            this.A = new Fo
        }
    }
    ;
    const Vo = a => b => co(b, a)
      , Wo = a => b => co(b.Ea, a);
    function Yo(a, b, c, d=null) {
        var e = g => {
            try {
                var k = JSON.parse(g.data)
            } catch (h) {
                return
            }
            !k || k.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(k, g) || c(k, g)
        }
        ;
        L(a, "message", e);
        var f = !1;
        return () => {
            var g = !1;
            f || (f = !0,
            g = O(a, "message", e));
            return g
        }
    }
    function Zo(a, b, c, d, e) {
        if (!(e <= 0) && (c.googMsgType = b,
        a.postMessage(JSON.stringify(c), d),
        a = a.frames))
            for (let f = 0; f < a.length; ++f)
                e > 1 && Zo(a[f], b, c, d, --e)
    }
    ;function $o(a, b, c, d) {
        return Yo(a, "fullscreen", d.ea(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType"in e))
                    throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }
        ))
    }
    function ap(a, b) {
        b.googMsgType = "fullscreen";
        a.postMessage(JSON.stringify(b), "*")
    }
    ;async function bp(a) {
        return a.l.promise
    }
    async function cp(a) {
        return a.g.promise
    }
    async function dp(a) {
        return a.j.promise
    }
    function ep(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.Ob.oe;
        b.version = a.Ob.version;
        of(a.pinger, "fullscreen_tag", b, !1, .25)
    }
    class fp extends E {
        constructor(a, b, c, d, e) {
            super();
            this.slotType = 1;
            this.pubWin = a;
            this.Ub = b;
            this.M = c;
            this.pinger = d;
            this.Ob = e;
            this.state = 1;
            this.qem = null;
            this.l = new Le;
            this.g = new Le;
            this.j = new Le
        }
        init() {
            var a = $o(this.pubWin, this.Ub, b => {
                if (b.eventType === "adError")
                    this.j.resolve(),
                    this.state = 4;
                else if (b.eventType === "adReady" && this.state === 1)
                    this.qem = b.qem,
                    b.slotType !== this.slotType && (ep(this, {
                        cur_st: this.state,
                        evt: b.eventType,
                        adp_tp: b.slotType
                    }),
                    this.state = 4),
                    this.l.resolve(),
                    this.state = 2;
                else if (b.eventType === "adClosed" && this.state === 2)
                    this.g.resolve(b.result),
                    this.state = 3;
                else if (b.eventType !== "adClosed" || this.state !== 3)
                    b.eventType === "adClosed" && b.closeAfterError && (this.g.resolve(b.result),
                    this.state = 3),
                    ep(this, {
                        cur_st: this.state,
                        evt: b.eventType
                    }),
                    this.state = 4
            }
            , this.M);
            G(this, a)
        }
    }
    function gp(a, b, c, d, e) {
        a = new fp(a,b,c,d,e);
        a.init();
        return a
    }
    ;function hp(a) {
        return a ? jb(b => {
            try {
                if (b instanceof a)
                    return !0;
                let c = b?.ownerDocument?.defaultView?.[a.name];
                return ib(c) && b instanceof c
            } catch {
                return !1
            }
        }
        ) : jb( () => !1)
    }
    hp(Node);
    hp(globalThis.Element);
    var ip = hp(globalThis.HTMLElement);
    hp(globalThis.SVGElement);
    function jp(a) {
        return jb(b => ip(b) && b.tagName.toLowerCase() === a)
    }
    ;var kp = class {
        constructor() {
            this.l = this.A = 1;
            this.g = new Map;
            this.j = new Set;
            this.isDrawerVisible = !1
        }
        takeNextPageEventIndex() {
            return this.A++
        }
        takeNextAnnotationEntryId() {
            return this.l++
        }
        getTermUsageCount(a) {
            return this.g.get(a) ?? 0
        }
        incrementTermUsageCount(a) {
            var b = this.g.get(a) ?? 0;
            this.g.set(a, b + 1)
        }
        onDrawerCollapse(a) {
            this.j.add(a)
        }
        notifyDrawerCollapsed() {
            for (let a of this.j)
                a()
        }
    }
    ;
    function U(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set),
        a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map),
        a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map),
        a.google_reactive_ads_global_state.sideRailMutationCallbacks == null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = []),
        a.google_reactive_ads_global_state.adIntentsPageState == null && (a.google_reactive_ads_global_state.adIntentsPageState = new kp)) : a.google_reactive_ads_global_state = new lp;
        return a.google_reactive_ads_global_state
    }
    var lp = class {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new mp;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.g = null;
            this.clickTriggeredInterstitialMayBeDisplayed = !1;
            this.adIntentsPageState = new kp
        }
    }
      , mp = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    function np(a, b) {
        a = U(a)?.tagSpecificState[1];
        return a == null ? null : a.debugCard?.getAdType() === b ? a.debugCard : null
    }
    ;function op(a, b) {
        var c = b.adClient;
        if (lb(c) && c) {
            a.A = c;
            a.B = !!b.adTest;
            c = b.pubVars;
            la(c) && (a.F = c);
            if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
                a.g = {};
                for (d of b.fillMessage)
                    a.g[d.key] = d.value
            }
            a.l = b.adWidth;
            a.j = b.adHeight;
            a.J = !!b.delayVisibleUntilCreativeReadyMessage;
            kb(a.l) && a.l > 0 && kb(a.j) && a.j > 0 || Ol("rctnosize", b);
            var d = !0
        } else
            d = !1;
        return d && a.G(b)
    }
    var pp = class {
        constructor() {
            this.Za = this.N = this.g = this.F = this.B = this.A = null;
            this.j = this.l = 0;
            this.J = !1
        }
        G() {
            return !0
        }
    }
    ;
    var qp = class extends pp {
        constructor() {
            super();
            this.g = null;
            this.H = !1
        }
        G(a) {
            a.hasFillMessage || (this.g = null);
            this.H = !!a.blockLocationFallback;
            a.anchorPlusConfig && (a = a.anchorPlusConfig,
            isFinite(Number(a.maxHeight)) && (this.N = Number(a.maxHeight)),
            isFinite(Number(a.animationSpeedPxPerMillis)) && (this.Za = Number(a.animationSpeedPxPerMillis)));
            return !0
        }
    }
    ;
    function rp(a, b, c, d) {
        a.dataset.adsbygoogleStatus = "reserved";
        a.className += " adsbygoogle-noablate";
        c.adsbygoogle || (c.adsbygoogle = [],
        Fd(c.document, Ed`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
        c.adsbygoogle.push({
            element: a,
            params: b,
            ...(d ? {
                ofxVI: d
            } : null)
        })
    }
    ;const sp = [1, 2];
    function tp(a, b, c) {
        var d = ce(document, "INS");
        d.className = "adsbygoogle";
        b.document.body.appendChild(d);
        var e = c.F || {};
        e.google_ad_client = c.A;
        e.google_ad_width = c.l;
        e.google_ad_height = c.j;
        e.google_reactive_ad_format = a.g;
        c.g && (e.google_reactive_fill_message = c.g);
        c.H && (e.google_reactive_block_location_fallback = !0);
        c.N && (e.google_reactive_anchor_plus_max_height = c.N);
        c.Za && (e.google_reactive_anchor_plus_animation_speed_px_per_millis = c.Za);
        c.B && (e.google_adtest = "on");
        c.J && (e.gdvucrm = c.J);
        rp(d, e, b)
    }
    var up = class {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            var c = U(a);
            if (c.wasReactiveAdConfigReceived[this.g])
                return !1;
            var d = new qp;
            if (!op(d, b))
                return !1;
            sp.forEach(e => {
                c.wasReactiveAdConfigReceived[e] = !0
            }
            );
            tp(this, a, d);
            return !0
        }
    }
    ;
    var wp = Zc(vp);
    function vp() {
        var a = "";
        for (let b of xp())
            b <= 15 && (a += "0"),
            a += b.toString(16);
        return a
    }
    function xp() {
        if (typeof window.crypto?.getRandomValues === "function") {
            var a = new Uint8Array(16);
            window.crypto.getRandomValues(a);
            return a
        }
        a = window;
        if (typeof a.msCrypto?.getRandomValues === "function") {
            var b = new Uint8Array(16);
            a.msCrypto.getRandomValues(b);
            return b
        }
        a = Array(16);
        for (b = 0; b < a.length; b++)
            a[b] = Math.floor(Math.random() * 255);
        return a
    }
    ;function yp(a, b, c) {
        try {
            if (!zp(a, c.origin) || !yg(c, a.K.contentWindow))
                return
        } catch (f) {
            return
        }
        var d = b.msg_type
          , e = null;
        lb(d) && (e = a.na[d]) && a.M.Aa(168, () => {
            e.call(a, b, c)
        }
        )
    }
    function zp(a, b) {
        (a = a.nb.includes(b)) || (a = Qd[b] || Rd.test(b) || Sd.test(b) || Td.test(b));
        return a
    }
    var Ap = class extends E {
        constructor(a, b, c, d, e={}, f=[]) {
            super();
            this.j = a;
            this.K = b;
            this.M = c;
            this.pinger = d;
            this.nb = f;
            this.na = {};
            this.ca = [];
            this.tb = this.M.ea(168, (g, k) => void yp(this, g, k));
            this.ub = this.M.ea(169, (g, k) => {
                of(this.pinger, "ras::xsf", {
                    c: k.data.substring(0, 500),
                    u: this.j.location.href.substring(0, 500)
                }, !0, .1);
                return !0
            }
            );
            this.init(e)
        }
        init(a) {
            this.W(this.na, a);
            this.ca.push(Yo(this.j, "sth", this.tb, this.ub))
        }
        jb() {
            for (let a of this.ca)
                a();
            this.ca.length = 0;
            super.jb()
        }
    }
    ;
    var Bp = class extends Ap {
        constructor(a, b) {
            var c = Jl
              , d = Hl;
            var e = T(Qj) ? [`https:${`//${wp()}.safeframe.googlesyndication.com`}`] : [];
            super(a, b, c, d, {}, e)
        }
    }
    ;
    function Cp(a) {
        var b = c => {
            try {
                let e = JSON.parse(c.data);
                if (e.type === "floating" && e.message === "loaded") {
                    var d = a.g;
                    d.hc = !0;
                    let f = d.j;
                    d.Oa && d.hc && f?.setAttribute("data-anchor-status", "ready-to-display");
                    Dp(a.g, !0);
                    a.j.removeEventListener("message", b)
                }
            } catch {}
        }
        ;
        a.j.addEventListener("message", b);
        G(a, () => {
            a.j.removeEventListener("message", b)
        }
        )
    }
    var Lp = class extends Bp {
        constructor(a, b, c, d=!1) {
            super(a, b.l);
            a = this.g = b;
            if ((b = a.j) && !a.A) {
                for (var e in Ep)
                    !Ep.hasOwnProperty(e) || e in c || (c[e] = Ep[e]);
                a.tc = c.use_manual_view === "true" || a.B === "top" || !!U(a.g).wasReactiveAdConfigReceived[2];
                a.rc = c.use_important === "true";
                if (e = c.af_l)
                    a.ya = e === "true";
                a.X = c.wait_for_scroll === "true" || a.B === "top";
                a.bd = a.X && (c.tsec === "true" || a.B === "top");
                a.kc = parseInt(c.lims, 10);
                Fp(a, c);
                a.A = Gp(a, c);
                c = a.F.height + 5;
                a.B === "bottom" && Hp(a.g) && (c += 20);
                a.pa = new Zd(a.F.width,c);
                a.tb = a.R >= a.dd;
                c = a.j;
                e = a.A && Ip(a.A);
                c && e && (a.B === "top" ? c.appendChild(e) : c.insertBefore(e, c.firstChild));
                Jp(a);
                a.fa = !0;
                b.setAttribute("data-anchor-status", "ready-to-display")
            }
            d ? (d = this.g,
            d.Oa = !0,
            d.j?.removeAttribute("data-anchor-status"),
            Cp(this)) : Dp(this.g, !0)
        }
        W(a) {
            a.dismiss = $c( () => {
                var b = this.g;
                b.A && Kp(b.A, !0)
            }
            )
        }
    }
    ;
    function Mp({Yc: a, Cc: b, Rc: c, Zc: d, Dc: e, Sc: f}) {
        var g = [];
        for (let m = 0; m < f; m++)
            for (let p = 0; p < c; p++) {
                var k = p
                  , h = c - 1
                  , n = m
                  , l = f - 1;
                g.push({
                    x: a + (h === 0 ? 0 : k / h) * (b - a),
                    y: d + (l === 0 ? 0 : n / l) * (e - d)
                })
            }
        return g
    }
    function Np(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    }
    ;function Op(a, b) {
        a: {
            for (let e of b) {
                var c;
                b = a;
                var d = Np(b.U.document, e);
                if (d) {
                    if (!(c = Pp(b, d, e))) {
                        c: {
                            c = b.U.document;
                            for (d = d.offsetParent; d && d !== c.body; d = d.offsetParent) {
                                let f = Pp(b, d, e);
                                if (f) {
                                    b = f;
                                    break c
                                }
                            }
                            b = null
                        }
                        c = b
                    }
                    b = c || null
                } else
                    b = null;
                b = !b || b.hasAttribute("google-allow-overlap") ? null : b;
                if (b) {
                    a = b;
                    break a
                }
            }
            a = null
        }
        return a != null
    }
    function Pp(a, b, c) {
        if (qe(b, "position") !== "fixed")
            return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || we(b).width <= 1 && we(b).height <= 1 || a.g.Ac && !a.g.Ac(b) ? !0 : !1;
        a.g.Fc && a.g.Fc(b, c, d);
        return d ? null : b
    }
    var Qp = class {
        constructor(a, b={}) {
            this.U = a;
            this.g = b
        }
    }
    ;
    function Rp(a, b) {
        return Op(Sp(a, c => c.getAttribute("google-anchor-overlappable") !== "true"), b)
    }
    function Sp(a, b) {
        return new Qp(a,{
            Fc: void 0,
            Ac: b
        })
    }
    function Hp(a) {
        var b = a.screen.height === 812 && a.screen.width === 375 || a.screen.width === 812 && a.screen.height === 375 || a.screen.width === 414 && a.screen.height === 896 || a.screen.width === 896 && a.screen.height === 414;
        return (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) != null && b
    }
    const Tp = 90 * 1.38;
    var Up = {
        uc: !1,
        Qc: !1,
        Gc: !1,
        pb: void 0,
        Cb: !1,
        Db: !1,
        Bc: !1,
        wc: !1
    };
    var Xp = class {
        constructor(a, b) {
            this.callback = a;
            this.j = !1;
            this.g = b.ea(264, c => {
                this.j && (Vp || (c = Date.now()),
                this.callback(c),
                Vp ? Wp.call(t, this.g) : t.setTimeout(this.g, 17))
            }
            )
        }
        start() {
            this.j || (this.j = !0,
            Vp ? Wp.call(t, this.g) : this.g(0))
        }
        stop() {
            this.j = !1
        }
    }
      , Wp = t.requestAnimationFrame || t.webkitRequestAnimationFrame
      , Vp = !!Wp && !/'iPhone'/.test(t.navigator.userAgent);
    function Yp(a) {
        return a * a * a
    }
    function Zp(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    function $p(a) {
        a.j = !1;
        a.A.start()
    }
    var aq = class {
        constructor(a, b, c, d) {
            this.start = a;
            this.end = b;
            this.time = c;
            this.progress = 0;
            this.startTime = null;
            this.j = !1;
            this.g = [];
            this.l = null;
            this.A = new Xp(e => {
                if (this.j)
                    this.A.stop();
                else {
                    this.startTime === null && (this.startTime = e);
                    this.progress = (e - this.startTime) / this.time;
                    this.progress >= 1 && (this.progress = 1);
                    e = this.l ? this.l(this.progress) : this.progress;
                    this.g = [];
                    for (let f = 0; f < this.start.length; f++)
                        this.g.push((this.end[f] - this.start[f]) * e + this.start[f]);
                    this.H();
                    this.progress === 1 && (this.A.stop(),
                    this.F())
                }
            }
            ,d)
        }
        F() {}
        H() {}
        stop() {
            this.j = !0
        }
        reset(a, b, c) {
            this.startTime = null;
            this.start = a;
            this.end = b;
            this.time = c;
            this.progress = 0
        }
    }
    ;
    function V(a) {
        return `${a}px`
    }
    ;var bq = class extends aq {
        constructor(a, b, c, d, e, f, g=null, k=null, h=!1) {
            super([b], [c], d, f);
            this.element = a;
            this.N = e;
            this.G = g;
            this.l = k;
            this.B = h && d === 0
        }
        H() {
            this.B && J(this.element, "display", "none");
            var a = {};
            a[this.N] = V(this.g[0]);
            J(this.element, a)
        }
        F() {
            this.B && J(this.element, "display", "block");
            this.G && this.G()
        }
    }
    ;
    function cq(a) {
        a.element && O(a.element, a.event, a.handler, ze)
    }
    class dq extends E {
        constructor(a, b, c) {
            super();
            this.element = a;
            this.event = b;
            this.handler = this.handler = c;
            L(this.element, this.event, this.handler, ze);
            G(this, () => void cq(this))
        }
    }
    class eq {
        constructor(a) {
            this.g = a;
            this.history = [];
            this.index = 0;
            this.reset()
        }
        add(a) {
            var b = Date.now();
            this.history.push({
                time: b,
                coords: a
            });
            for (a = this.index; a < this.history.length; ++a)
                if (b - this.history[a].time >= this.g)
                    delete this.history[a];
                else
                    break;
            this.index = a;
            a >= this.history.length && this.reset()
        }
        reset() {
            this.history = [];
            this.index = 0
        }
    }
    function fq(a, b) {
        a.B && a.stop();
        a.B = !0;
        a.l = a.L();
        a.j = gq(b);
        a.g = a.j;
        a.A = new eq(a.ka);
        a.A.add(a.j);
        a.H = new dq(a.document,"mousemove",c => {
            hq(a, c)
        }
        );
        F(a, a.H);
        a.K = new dq(a.document,"touchmove",c => {
            hq(a, c)
        }
        );
        F(a, a.K);
        a.G = new dq(a.document,"mouseup",c => {
            iq(a, c)
        }
        );
        F(a, a.G);
        a.J = new dq(a.document,"touchend",c => {
            iq(a, c)
        }
        );
        F(a, a.J)
    }
    function gq(a) {
        a = a.touches && a.touches[0] || a;
        return new Xd(a.clientX,a.clientY)
    }
    function hq(a, b) {
        if (a.B)
            if (b.preventDefault(),
            a.g = gq(b),
            a.A.add(a.g),
            a.F)
                a.T();
            else {
                var c = a.j
                  , d = a.g;
                b = c.x - d.x;
                c = c.y - d.y;
                Math.sqrt(b * b + c * c) >= 10 && (a.T(),
                a.F = !0)
            }
    }
    function iq(a, b) {
        a.F ? (b.preventDefault(),
        a.g = gq(b),
        a.ca()) : a.O = !0;
        a.stop()
    }
    var jq = class extends E {
        constructor(a, b, c=b, d=100) {
            super();
            this.document = a;
            this.target = b;
            this.handle = c;
            this.ka = d;
            this.F = this.B = this.O = !1;
            this.A = this.g = this.j = this.l = this.J = this.G = this.K = this.H = null;
            this.qa = new dq(this.handle,"mousedown",e => {
                e.button === 0 && fq(this, e)
            }
            );
            F(this, this.qa);
            this.ua = new dq(this.handle,"touchstart",e => {
                fq(this, e)
            }
            );
            F(this, this.ua);
            this.pa = new dq(this.handle,"click",e => {
                this.O ? (this.onClick(),
                this.O = !1) : e.stopPropagation()
            }
            );
            F(this, this.pa)
        }
        T() {
            if (this.l && this.j && this.g) {
                var a = this.l
                  , b = Yd(this.g, this.j);
                var c = new Xd(a.x + b.x,a.y + b.y);
                a = this.target;
                c instanceof Xd ? (b = c.x,
                c = c.y) : (b = c,
                c = void 0);
                a.style.left = ve(b, !1);
                a.style.top = ve(c, !1)
            }
        }
        ca() {}
        onClick() {}
        L() {
            var a = this.target
              , b = a.parentElement || null;
            var c = te(a);
            b = te(b);
            c = new Xd(c.x - b.x,c.y - b.y);
            a = ye(a, "margin");
            return Yd(c, new Xd(a.left,a.top))
        }
        stop() {
            this.F = this.B = !1;
            this.A = this.g = this.j = this.l = null;
            this.H && cq(this.H);
            this.K && cq(this.K);
            this.G && cq(this.G);
            this.J && cq(this.J)
        }
    }
    ;
    function kq(a) {
        var b = lq(a);
        Da(a.floatingAdsStacking.maxZIndexListeners, c => c(b))
    }
    function lq(a) {
        a = Tc(a.floatingAdsStacking.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    function mq(a, b) {
        a.floatingAdsStacking.maxZIndexListeners.push(b);
        b(lq(a))
    }
    var nq = class {
        constructor(a) {
            this.floatingAdsStacking = U(a).floatingAdsStacking
        }
    }
      , oq = class {
        constructor(a) {
            this.controller = a;
            this.g = null
        }
    }
    ;
    function pq(a, b) {
        var c = a.ownerDocument
          , d = c.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", b ? "32" : "22");
        d.setAttribute("y1", "18");
        d.setAttribute("x2", b ? "38" : "28");
        d.setAttribute("y2", "12");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", b ? "38" : "28");
        c.setAttribute("y1", "12");
        c.setAttribute("x2", b ? "44" : "34");
        c.setAttribute("y2", "18");
        a.appendChild(c)
    }
    function qq(a, b) {
        var c = a.ownerDocument
          , d = c.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", b ? "32" : "22");
        d.setAttribute("y1", "12");
        d.setAttribute("x2", b ? "38" : "28");
        d.setAttribute("y2", "18");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", b ? "38" : "28");
        c.setAttribute("y1", "18");
        c.setAttribute("x2", b ? "44" : "34");
        c.setAttribute("y2", "12");
        a.appendChild(c)
    }
    function Kp(a, b) {
        if (!a.B && a.j) {
            var c = parseInt(a.j.style[a.g], 10)
              , d = -(a.A === 4 ? a.l.maxHeight + 5 : a.G.height) - (b ? 30 : 0)
              , e = (c - d) / rq(a);
            a.g === "bottom" && Hp(a.U) && a.M.Aa(405, () => {
                sq(a, "21px", e, "ease-in")
            }
            );
            b || tq(a, !0);
            c === d ? b || (a.A = 0) : a.ya() ? (a.B = !0,
            $p(new bq(a.j,c,d,e,a.g,a.M, () => {
                a.B = !1;
                b ? a.Ca() : (a.A = 0,
                tq(a, !0));
                a.j.setAttribute("data-anchor-status", "dismissed")
            }
            ,Yp,a.L.Cb))) : tq(a, !1)
        }
    }
    function uq(a, b) {
        Cg(b);
        var c = {
            "background-color": "#FAFAFA",
            display: "block",
            position: "relative",
            "z-index": "1",
            height: V(5),
            "box-shadow": vq(a)
        };
        wq(a) && Object.assign(c, xq(a));
        H(b, c);
        a.g === "top" && H(a.F ?? b, {
            position: "absolute",
            top: V(a.l ? a.l.maxHeight + 5 : a.G.height),
            width: "100%"
        });
        if (a.W) {
            let d = Gd("SPAN", a.U.document);
            d.appendChild(yq(a));
            let e = f => {
                f.target === d && (f.preventDefault && f.preventDefault(),
                f.stopImmediatePropagation && f.stopImmediatePropagation(),
                f.stopPropagation && f.stopPropagation())
            }
            ;
            L(d, "click", e);
            G(a, () => {
                O(d, "click", e)
            }
            );
            zq(a, d);
            b.className = "ee";
            b.appendChild(d)
        }
    }
    function wq(a) {
        return a.L.pb ?? dd()
    }
    function vq(a) {
        return a.g === "top" ? wq(a) ? "rgba(0, 0, 0, 0.5) 0px 4px 12px -4px, rgba(0, 0, 0, 0.3) 0px -4px 8px -3px" : "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : wq(a) ? "rgba(0, 0, 0, 0.5) 0px -4px 12px -4px, rgba(0, 0, 0, 0.3) 0px 4px 8px -3px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    }
    function Aq(a, b) {
        a.g === "top" && H(a.F ?? a.J, {
            top: V(b)
        })
    }
    function xq(a) {
        var b = a.K() ? "0" : V(5);
        return a.g === "bottom" ? {
            "border-top-left-radius": b,
            "border-top-right-radius": V(5)
        } : {
            "border-bottom-left-radius": b,
            "border-bottom-right-radius": V(5)
        }
    }
    function yq(a) {
        var b = ""
          , c = ""
          , d = ""
          , e = ""
          , f = () => {}
        ;
        switch (a.g) {
        case "top":
            b = "dropShadowBottom";
            c = a.K() ? "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 56,4 Z" : wq(a) ? "M10,4 L10,22 A6,6 0 0,0 16,28 L60,28 A6,6 0 0,0 66,22 L66,10 66,4 Z" : "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
            d = "0";
            e = "up";
            f = (p, q) => {
                pq(p, q)
            }
            ;
            break;
        case "bottom":
            b = "dropShadowTop",
            c = a.K() ? "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 56,26 Z" : wq(a) ? "M10,26 L10,6 A6,6 0 0,1 16,1 L60,1 A6,6 0 0,1 66,6 L66,20 66,26 Z" : "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z",
            d = "25",
            e = "down",
            f = (p, q) => {
                qq(p, q)
            }
        }
        var g = a.U.document
          , k = g.createElementNS("http://www.w3.org/2000/svg", "svg");
        k.style.setProperty("margin", "0 0 0 0px", "important");
        k.style.setProperty("position", "absolute", "important");
        k.style.setProperty(a.g, "0", "important");
        k.style.setProperty("left", "0%", "important");
        k.style.setProperty("display", "block", "important");
        k.style.setProperty("width", "80px", "important");
        k.style.setProperty("height", "30px", "important");
        k.style.setProperty("transform", "none", "important");
        k.style.setProperty("pointer-events", "initial", "important");
        a.K() && k.style.setProperty("overflow", "visible", "important");
        var h = g.createElementNS("http://www.w3.org/2000/svg", "defs")
          , n = g.createElementNS("http://www.w3.org/2000/svg", "filter");
        n.setAttribute("id", b);
        n.setAttribute("filterUnits", "userSpaceOnUse");
        n.setAttribute("color-interpolation-filters", "sRGB");
        var l = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        l.setAttribute("in", "SourceAlpha");
        l.setAttribute("result", "TransferredAlpha");
        var m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        n.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        l.setAttribute("in", "TransferredAlpha");
        l.setAttribute("stdDeviation", "2");
        n.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        l.setAttribute("dx", "0");
        l.setAttribute("dy", "0");
        l.setAttribute("result", "offsetblur");
        n.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        l.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        m = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        m.setAttribute("in", "SourceGraphic");
        l.appendChild(m);
        n.appendChild(l);
        h.appendChild(n);
        k.appendChild(h);
        h = g.createElementNS("http://www.w3.org/2000/svg", "path");
        h.setAttribute("d", c);
        h.setAttribute("stroke", "#FAFAFA");
        h.setAttribute("stroke-width", "1");
        h.setAttribute("fill", "#FAFAFA");
        h.style.setProperty("filter", `url(#${b})`);
        k.appendChild(h);
        b = g.createElementNS("http://www.w3.org/2000/svg", "rect");
        b.setAttribute("x", "0");
        b.setAttribute("y", d);
        b.setAttribute("width", "80");
        b.setAttribute("height", "5");
        b.style.setProperty("fill", "#FAFAFA");
        k.appendChild(b);
        d = g.createElementNS("http://www.w3.org/2000/svg", "g");
        d.setAttribute("class", e);
        d.setAttribute("stroke", "#616161");
        d.setAttribute("stroke-width", "2px");
        d.setAttribute("stroke-linecap", "square");
        f(d, wq(a) && !a.K());
        k.appendChild(d);
        return k
    }
    function zq(a, b) {
        var c = {
            display: "block",
            width: "80px",
            height: "45px",
            [a.g]: "0",
            left: "0%",
            marginLeft: "0px",
            "pointer-events": "none"
        };
        wq(a) && (c.position = "absolute",
        a.K() ? (c.left = "0",
        c.transform = "none") : (c.left = "50%",
        c.transform = "translateX(-50%)"));
        a = b.getElementsByTagName("svg")[0];
        H(b, c);
        Pd(a)
    }
    function Bq(a, b=a.X) {
        switch (a.A) {
        case 1:
            a.O();
            break;
        case 2:
            Cq(a);
            break;
        case 0:
            a.l ? Cq(a) : a.O();
            break;
        case 3:
            Kp(a, b);
            break;
        case 4:
            a.O()
        }
    }
    function Ip(a) {
        return a.F ?? a.J
    }
    function tq(a, b) {
        if (a.W) {
            var c = a.J.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];
            let d;
            for (; d = c.firstChild; )
                c.removeChild(d);
            switch (a.g) {
            case "top":
                (b ? qq : pq)(c, wq(a) && !a.K());
                break;
            case "bottom":
                (b ? pq : qq)(c, wq(a) && !a.K())
            }
        } else
            (a = a.J.firstElementChild) && de(a)
    }
    function Dq(a, b, c, d) {
        b = {
            i: b,
            dc: a.A === 0 ? "1" : "0",
            fdc: c ? "1" : "0",
            ds: a.X ? "1" : "0",
            expId: a.Oa,
            sc: a.la ? "1" : "0",
            off: d,
            vw: P(a.U),
            req: a.H.src,
            tp: a.g,
            h: a.G.height,
            w: a.G.width,
            qemId: a.Na
        };
        of(a.pinger, "flgr", b, !0, 1)
    }
    function Cq(a) {
        if (!a.B) {
            Eq(a);
            var b = parseInt(a.j.style[a.g], 10)
              , c = () => {
                a.B = !1;
                a.A = 4;
                Fq(a);
                a.j.setAttribute("data-anchor-status", "displayed");
                a.j.setAttribute("data-anchor-shown", "true");
                tq(a, !1)
            }
            ;
            if (b) {
                a.B = !0;
                let d = -b / rq(a);
                Gq(a, d);
                tq(a, !1);
                b = new bq(a.j,b,0,d,a.g,a.M,c,Zp,!0);
                a.fa();
                $p(b)
            } else
                c()
        }
    }
    function Eq(a) {
        var b = a.l.maxHeight
          , c = a.l.maxHeight + 5;
        a.A !== 4 && (a.j.style[a.g] = `-${b - (parseInt(a.j.style.height, 10) + parseInt(a.j.style[a.g], 10))}px`);
        a.j.style.height = `${c}px`;
        a.H.parentElement.style.height = `${b}px`;
        a.H.style.height = `${b}px`;
        a.H.style.maxHeight = "none";
        a.H.height = "100%";
        Aq(a, c);
        a.ca?.na(c)
    }
    function sq(a, b, c, d) {
        J(a.H, {
            transition: `${c / 1E3}s`,
            "transition-timing-function": d,
            "margin-top": b
        })
    }
    function Gq(a, b) {
        a.g === "bottom" && Hp(a.U) && a.M.Aa(404, () => {
            sq(a, "0px", b, "ease-out")
        }
        )
    }
    function Fq(a) {
        a.pa();
        a.pa = () => {}
    }
    function rq(a) {
        return a.G.height >= Math.floor(a.U.document.documentElement.clientHeight * .3) ? Infinity : a.l ? a.l.Za ? a.l.Za : Infinity : .1
    }
    function Hq(a, b) {
        if (a.g !== "bottom" && a.g !== "top")
            throw Error("unsupported reactive type");
        var c = f => {
            a.onClick(f)
        }
        ;
        L(a.J, "click", c);
        G(a, () => {
            O(a.J, "click", c)
        }
        );
        a.F && (L(a.F, "click", c),
        G(a, () => {
            a.F && O(a.F, "click", c)
        }
        ));
        J(b, {
            opacity: 1
        });
        var d = a.U.document;
        if (d) {
            a.j = b;
            var e = a.l ? a.l.maxHeight + 5 : a.G.height;
            a.Qa && (a.ca = new (a.g === "top" ? Iq : Jq)(a,d,e,b,a.J),
            F(a, a.ca));
            d = {
                position: "fixed",
                left: V(0)
            };
            wq(a) && (d.left = "50%",
            d.transform = "translateX(-50%)",
            d["box-shadow"] = vq(a),
            d["border-radius"] = "5px");
            d[a.g] = V(-e - 30);
            J(b, d);
            H(b, {
                overflow: "visible",
                background: "#FAFAFA"
            });
            mq(a.ua, f => {
                var g = a.qa === null ? 2147483647 : a.qa;
                J(b, {
                    zIndex: f === null ? g : Math.min(f, g)
                })
            }
            );
            Bq(a)
        }
    }
    var Kq = class extends E {
        constructor(a, b, c, d, e, f= () => {}
        , g= () => {}
        , k, h, n, l, m, p=Up, q=!1, w= () => !1) {
            super();
            this.config = a;
            this.U = b;
            this.H = c;
            this.G = d;
            this.g = e;
            this.Ca = f;
            this.pa = g;
            this.M = k;
            this.pinger = h;
            this.ya = n;
            this.fa = l;
            this.l = m;
            this.L = p;
            this.ka = q;
            this.K = w;
            this.F = null;
            this.B = !1;
            this.T = 0;
            this.na = !1;
            this.j = this.ca = null;
            this.A = m ? 2 : 1;
            G(this, () => {
                Kp(this, !0)
            }
            );
            this.J = Gd("INS", b.document);
            typeof HTMLElement.prototype.attachShadow !== "function" || this.M.Aa(1013, () => {
                this.F = Gd("DIV", b.document);
                this.F.className = "grippy-host";
                this.F.attachShadow({
                    mode: "closed"
                }).appendChild(this.J);
                G(this, () => {
                    this.F = null
                }
                );
                return !0
            }
            ) || (this.F = null);
            this.R = b.innerHeight;
            this.la = this.config.scroll_detached === "true";
            this.X = this.config.dismissable === "true";
            this.Qa = (this.W = !(this.L.Qc || this.ka) || !!this.l) && (this.config.draggable === "true" || this.g !== "top");
            this.Oa = this.config.expId || "";
            this.Na = this.config.qemId || "";
            a = parseInt(this.config.z_index_override, 10);
            this.qa = isNaN(a) ? null : a;
            this.ua = new nq(b);
            !this.X && t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval( () => {
                var A = this.U.innerHeight;
                if (Math.abs(A - 460) < 2 || Math.abs(A - 529) < 2)
                    A < this.R && Math.abs(zg(this.U) - this.T - 68) < 2 && (this.na = !0,
                    this.A === 0 && Bq(this)),
                    this.R = A
            }
            , 300);
            uq(this, this.J)
        }
        onClick(a) {
            this.W && (a.preventDefault(),
            this.B || (this.na = !0,
            Bq(this),
            Dq(this, "c", this.A !== 0, 0)))
        }
        O() {
            if (!this.B) {
                var a = this.l && parseInt(this.j.style.height, 10) > this.G.height;
                (this.L.Qc || this.ka) && a && (this.W = !1);
                var b = parseInt(this.j.style[this.g], 10);
                if (b || a) {
                    var c = () => {
                        this.A = 3;
                        if (a) {
                            let f = this.G.height;
                            this.j.style[this.g] = "0";
                            this.j.style.height = `${f}px`;
                            this.H.parentElement.style.height = `${f}px`;
                            this.H.height = `${f}`;
                            this.H.style.height = `${f}px`;
                            this.H.style.maxHeight = "30vh";
                            Aq(this, f);
                            this.ca?.na(f)
                        }
                        this.B = !1;
                        Fq(this);
                        this.j.setAttribute("data-anchor-status", "displayed");
                        this.j.setAttribute("data-anchor-shown", "true");
                        tq(this, !1)
                    }
                    ;
                    this.B = !0;
                    if (b && !a) {
                        var d = -b / rq(this);
                        Gq(this, d);
                        tq(this, !1);
                        b = new bq(this.j,b,0,d,this.g,this.M,c,Zp,this.L.Cb);
                        this.fa();
                        $p(b)
                    } else if (a) {
                        var e = this.l.maxHeight + 5;
                        d = this.G.height - e;
                        e = (e + b > this.G.height ? -1 : 1) * (d - b) / rq(this);
                        Gq(this, e);
                        b === d ? c() : (b = new bq(this.j,b,d,e,this.g,this.M,c,Zp,this.L.Cb),
                        this.fa(),
                        $p(b))
                    }
                }
            }
        }
        Ra() {
            return this.A === 4
        }
    }
    ;
    class Lq extends jq {
        constructor(a, b, c, d, e) {
            super(b, d, e);
            this.la = a;
            this.W = c
        }
        na(a) {
            this.W = a
        }
        ca() {
            var a = this.la;
            if (!a.B) {
                let b = parseInt(a.j.style[a.g], 10)
                  , c = b + parseInt(a.j.style.height, 10)
                  , d = a.G.height / 2;
                c >= (a.l ? (a.l.maxHeight + 5) / 2 : Number.MAX_SAFE_INTEGER) ? (Cq(a),
                Dq(a, "d", !1, b)) : c >= d ? (a.O(),
                Dq(a, "d", !1, b)) : (Kp(a, a.X),
                Dq(a, "d", !0, b))
            }
        }
        T() {
            if (this.l !== null && this.j !== null && this.g !== null) {
                var a = this.fa(this.l.y, Yd(this.g, this.j).y);
                a > 0 && (a = 0);
                a < -this.W && (a = -this.W);
                var b = {};
                b[this.X()] = V(a);
                J(this.target, b)
            }
        }
    }
    class Iq extends Lq {
        L() {
            return new Xd(0,parseInt(this.target.style.top, 10))
        }
        fa(a, b) {
            return b - a
        }
        X() {
            return "top"
        }
    }
    class Jq extends Lq {
        L() {
            return new Xd(0,parseInt(this.target.style.bottom, 10))
        }
        fa(a, b) {
            return a - b
        }
        X() {
            return "bottom"
        }
    }
    ;function Mq(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            let b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }
    function Nq(a, b=[]) {
        var c = Date.now();
        return Ea(b, d => c - d < a * 1E3)
    }
    function Oq(a, b, c) {
        try {
            let d = a.getItem(c);
            if (!d)
                return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Ga(e, f => !Number.isInteger(f)))
                return a.removeItem(c),
                [];
            e = Nq(b, e);
            e.length || a?.removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }
    function Pq(a, b, c) {
        return b <= 0 || a == null || !Mq(a) ? null : Oq(a, b, c)
    }
    ;function Qq(a, b, c, d=!1) {
        if (!a.la) {
            a.la = [];
            for (var e = a.l.parentElement; e; ) {
                a.la.push(e);
                if (a.Na(e))
                    break;
                e = e.parentNode && e.parentNode.nodeType === 1 ? e.parentNode : null
            }
        }
        e = a.la.slice();
        !c && a.Na(e[e.length - 1]) && e.pop();
        var f;
        if (d)
            for (c = e.length - 1; c >= 0; --c)
                (f = e[c]) && b.call(a, f, c, e);
        else
            for (c = 0; c < e.length; ++c)
                (f = e[c]) && b.call(a, f, c, e)
    }
    var Rq = class extends E {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.g = b;
            this.j = c;
            this.la = null;
            G(this, () => this.la = null)
        }
        Na(a) {
            return this.j === a
        }
    }
    ;
    function Sq(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5,
            "": 0
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] ?? 0
    }
    ;function Tq(a, b, c) {
        b !== null && Kd(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && Kd(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = V(b));
        c !== null && (a.style.height = V(c))
    }
    ;function Dp(a, b=!1) {
        a.rb || W(a, b, 9);
        a.rb = !0;
        if (a.L || !Uq(a, b) || !a.ka && a.ya)
            !a.ka && a.ya && W(a, b, 12);
        else {
            var c = a.j;
            c ? (Qq(a, d => {
                Cg(d)
            }
            , !0),
            b = Vq(a),
            Wq(a, b),
            Hq(a.A, c),
            a.H.Db && dd() && Xq(a, b),
            Yq(a),
            W(a, !0, 14),
            a.L = !0,
            (c = a.l.contentWindow) && Zo(c, "ig", {
                rr: "vis-aa"
            }, "*", 2),
            Zq(a),
            $q(a, a.H.uc),
            ar(a),
            br(a)) : W(a, b, 13)
        }
    }
    function cr(a) {
        dr(a);
        var b = a.g.innerWidth;
        a = we(a.l).height || +a.l.height || 0;
        return new Zd(b,a)
    }
    function er(a) {
        if (a.qa) {
            var b = a.j;
            b && (b.style.display = "none");
            fr(a, a.na, !0, !0);
            a.qa = !1
        }
    }
    function gr(a) {
        a.ca = "touchcancel";
        t.setTimeout(a.M.ea(274, () => {
            a.ca === "touchcancel" && (a.O = 0,
            a.T = !1,
            hr(a))
        }
        ), 1E3)
    }
    function ir(a, b) {
        if (b && b.touches) {
            a.ca = "touchend";
            var c = b.touches.length;
            c < 2 ? t.setTimeout(a.M.ea(256, () => {
                a.ca === "touchend" && (a.O = c,
                a.T = !1,
                hr(a))
            }
            ), 1E3) : (a.O = c,
            hr(a))
        }
    }
    function jr(a) {
        var b = a.g;
        O(b, "orientationchange", a.Uc);
        O(b, "resize", a.Vc);
        O(b, "scroll", a.fd);
        O(b, "touchcancel", a.gd);
        O(b, "touchend", a.hd);
        O(b, "touchmove", a.jd);
        O(b, "touchstart", a.oc)
    }
    function Jp(a) {
        var b = a.g;
        L(b, "orientationchange", a.Uc);
        L(b, "resize", a.Vc);
        L(b, "scroll", a.fd);
        L(b, "touchcancel", a.gd);
        L(b, "touchend", a.hd);
        L(b, "touchmove", a.jd);
        L(b, "touchstart", a.oc);
        G(a, () => {
            jr(a)
        }
        )
    }
    function Fp(a, b) {
        var c = parseInt(b.ht, 10)
          , d = c > 0 ? c : null;
        b = parseInt(b.wd, 10);
        var e = b > 0 ? b : null;
        d !== null && (a.F.height = d);
        e !== null && (a.F.width = e);
        Qq(a, f => {
            Tq(f, e, d)
        }
        , !1, !0);
        Tq(a.l, e, d)
    }
    function Gp(a, b) {
        b = new Kq(b,a.g,a.l,a.F,a.B, () => {
            a.dismiss()
        }
        , () => void kr(a),a.M,a.pinger, () => {
            if (!a.W && (a.W = !0,
            lr(a, null),
            a.ua)) {
                var c = a.ua
                  , d = (a.g.performance ? a.g.performance.now() : Date.now()) - a.kd;
                if (c.j) {
                    var e = c.g;
                    c = c.environment;
                    e.j || Je(e, c);
                    e.g || (e.g = !0,
                    e = `https://pagead2.googlesyndication.com/pagead/gen_204?id=a_x&xt=GENERIC_COLLAPSE_BUTTON&c=FLOATING_IFRAME_ADSENSE&env=${c}&dn=&dos=&ov=&av=&rn=`,
                    d !== void 0 && (e += `&d=${d}`),
                    Ge(e))
                }
            }
            return !0
        }
        , () => {
            a.W && (a.W = !1,
            lr(a, null));
            return !0
        }
        ,a.G,a.H,!1, () => Vq(a) !== 1);
        F(a, b);
        return b
    }
    function kr(a) {
        a.tc && !a.ed && (a.ed = !0,
        a.M.Aa(257, () => {
            var b = {
                msg_type: "manual-send-view"
            }
              , c = a.l.contentWindow;
            c && c.postMessage(JSON.stringify(b), "*")
        }
        ))
    }
    function Vq(a) {
        if (!a.H.Db || !dd())
            return 1;
        var b = Number(a.l.width) || a.F.width
          , c = a.F.height;
        return b <= 0 || c <= 0 ? 1 : b <= Math.min(a.g.innerWidth * a.H.Qd, 600) && b / c <= 3 ? a.H.Bc ? 0 : 2 : 1
    }
    function W(a, b, c) {
        b && !a.L && a.Qa && a.Qa.ec({
            C: c
        })
    }
    function Uq(a, b=!1) {
        W(a, b, 20);
        if (!a.qb())
            return W(a, b, 21),
            !1;
        if (a.Oa && !a.hc)
            return W(a, b, 22),
            !1;
        if (!a.L && a.X) {
            a.kc && setTimeout( () => {
                if (!a.L) {
                    a.X = !1;
                    W(a, b, 24);
                    Dp(a, !0);
                    let d = ke(a.J);
                    d.top = mr(a, a.W);
                    fr(a, d, !0)
                }
            }
            , a.kc);
            a.bd && (a.K += Math.max(zg(a.g) - a.Ra, 0));
            let c = !1;
            switch (a.B) {
            case "bottom":
                return (c = a.K >= a.ld || a.tb) || W(a, b, 27),
                c;
            case "top":
                return (c = a.K > mr(a)) || W(a, b, 29),
                c;
            default:
                return !0
            }
        }
        W(a, b, 31);
        return !0
    }
    function Wq(a, b) {
        var c = a.j;
        if (c && a.l.parentElement && a.pa) {
            ue(c, a.pa);
            var d = wg(a.g).scrollWidth
              , e = a.g.innerWidth;
            c.style.width = a.H.pb ?? dd() ? "auto" : d > e ? V(e) : "100%";
            nr(a, b);
            a.G && H(a.l.parentElement, {
                height: `${a.G.maxHeight}px`,
                display: "inline-block"
            })
        }
    }
    function Xq(a, b) {
        var c = a.j;
        c && (b === 1 ? (a.H.pb ?? dd()) && H(c, {
            left: "50%",
            right: "auto",
            transform: "translateX(-50%)"
        }) : (a = b === 0,
        H(c, {
            left: a ? "0" : "auto",
            right: a ? "auto" : "0",
            transform: "none"
        })))
    }
    function Yq(a) {
        var b = a.j;
        if (b) {
            var c = a.A
              , d = c.U
              , e = zg(d);
            if (!(Math.abs(e - c.T) < 10)) {
                var f = e < 10;
                d = e + 10 + wg(d).clientHeight > xg(d);
                f = f || d;
                c.la || c.na || c.B || (c.A === 0 || f ? c.A === 0 && f && Bq(c) : Bq(c, !1));
                c.T = e
            }
            a.qa || (c = fr,
            dr(a),
            e = ye(a.g.document.body, "padding"),
            a.B === "bottom" && (e.bottom += a.pa.height + 25),
            c(a, e),
            b.style.display = "block",
            a.qa = !0)
        }
    }
    function Zq(a) {
        if (!((a.H.pb ?? (dd() || cd())) && a.H.Db)) {
            var b = a.F.height >= Math.floor(a.g.document.documentElement.clientHeight * .5)
              , c = a.H.Gc && a.F.height >= Math.floor(a.g.document.documentElement.clientHeight * .3);
            if (a.G || b || c)
                if (b = Pq(a.nb, 604800, "__lsa__"))
                    b.push(Date.now()),
                    a.nb?.setItem("__lsa__", JSON.stringify(b))
        }
    }
    function $q(a, b) {
        if (a.G) {
            var c = () => {
                if (a.G) {
                    var d = a.l
                      , e = d.parentElement
                      , f = e.style.display;
                    H(e, {
                        height: `${a.G.maxHeight + 1}px`,
                        display: "inline-block"
                    });
                    b && H(d, {
                        height: `${a.G.maxHeight + 1}px`
                    });
                    setTimeout( () => {
                        a.G && (H(e, {
                            height: `${a.G.maxHeight}px`,
                            display: f
                        }),
                        b && H(d, {
                            height: `${a.G.maxHeight}px`
                        }))
                    }
                    , 100)
                }
            }
            ;
            a.H.wc && a.ka ? c() : a.l.onload = () => {
                c()
            }
        }
    }
    function ar(a) {
        if (a.G) {
            var b = Gd("div");
            b.id = "click-protector";
            b.style.position = "relative";
            b.style.width = "65px";
            b.style.height = "25px";
            b.style.left = "0";
            b.style.top = a.B === "bottom" ? "-100%" : "-25px";
            a.j.appendChild(b);
            b.addEventListener("click", c => {
                c.stopPropagation();
                c.preventDefault()
            }
            )
        }
    }
    function br(a) {
        if (a.G)
            var b = 100
              , c = setInterval( () => {
                a.g.document.getElementsByClassName("fc-message-root").length ? (a.A?.Ra() && (a.A?.O(),
                a.nb?.removeItem("__lsa__")),
                a.Qa?.ec({
                    C: 32
                }),
                clearInterval(c)) : --b <= 0 && clearInterval(c)
            }
            , 100)
    }
    function fr(a, b, c=!0, d=!1) {
        var e = a.J.top - b.top
          , f = zg(a.g);
        f < e && !d || (d = a.g.document.body,
        d.style.paddingTop = V(b.top),
        d.style.paddingRight = V(b.right),
        d.style.paddingBottom = V(b.bottom),
        d.style.paddingLeft = V(b.left),
        a.J = b,
        c && a.g.scrollTo(0, f - e))
    }
    function nr(a, b=1) {
        Qq(a, d => {
            a.H.pb ?? dd() ? d.style.height = ve(a.F.height, !0) : (ue(d, a.F),
            d.style.width = "100%")
        }
        , !1, !0);
        var c = a.l;
        c.style.display = "block";
        switch (b) {
        case 0:
            c.style.margin = "0 auto 0 0";
            break;
        case 2:
            c.style.margin = "0 0 0 auto";
            break;
        default:
            c.style.margin = "0 auto"
        }
        if (a.rc) {
            let d = a.j;
            Md(d, e => {
                Pd(e, f => e === d && /display|bottom/i.test(f) ? !1 : !0);
                if (e.nodeName === "svg")
                    return !1
            }
            )
        }
    }
    function dr(a) {
        if (a.B !== "bottom" && a.B !== "top")
            throw Error(`Unexpected position: ${a.B}`);
    }
    function hr(a, b=!1) {
        W(a, b, 15);
        a.fa ? a.Ca ? W(a, b, 17) : a.O >= 2 && a.T && W(a, b, 18) : W(a, b, 16);
        !a.fa || a.Ca || a.O >= 2 && a.T || !Uq(a, b) ? er(a) : (W(a, b, 19),
        Dp(a, b),
        Yq(a))
    }
    function lr(a, b) {
        var c = a.qa ? mr(a, a.W) : a.na.top;
        if (a.B === "top" && a.g.document.body && a.fa && a.A && a.L && a.J.top !== c && b !== 0) {
            var d = ke(a.J);
            b === null ? (d.top = c,
            fr(a, d)) : (b > 0 && a.J.top > c && (d.top = Math.max(c, a.J.top - b),
            fr(a, d, !1)),
            b < 0 && a.J.top < c && (d.top = Math.min(c, a.J.top - b),
            fr(a, d, !1)))
        }
    }
    function mr(a, b=!1) {
        return b ? a.na.top + 30 : a.na.top + 30 + a.pa.height - 5
    }
    var pr = class extends Rq {
        constructor(a, b, c, d, e, f, g, k=null, h=Up, n=null, l) {
            super(a, b, f);
            this.M = d;
            this.pinger = e;
            this.nb = g;
            this.G = k;
            this.H = h;
            this.Qa = n;
            this.ua = l;
            this.K = this.sb = this.Ra = 0;
            this.Ca = this.qc = !1;
            this.A = null;
            this.T = this.fa = !1;
            this.ca = null;
            this.O = 0;
            this.rb = this.L = !1;
            this.qa = !0;
            this.pa = null;
            this.X = this.ya = this.ka = this.ed = this.rc = this.tc = !1;
            this.kc = 0;
            this.bd = this.W = this.tb = this.hc = this.Oa = !1;
            this.kd = b.performance ? b.performance.now() : Date.now();
            this.ua && this.l.contentWindow && or(this.ua);
            this.na = ye(b.document.body, "padding");
            this.J = ye(b.document.body, "padding");
            this.B = c;
            this.F = cr(this);
            this.ld = $d(b || window).height / 2;
            this.R = $d(b || window).height;
            this.dd = ae(b);
            er(this);
            this.Uc = this.M.ea(266, () => {
                W(this, !0, 33);
                hr(this, !0)
            }
            );
            this.Vc = this.M.ea(267, () => {
                W(this, !0, 34);
                hr(this, !0)
            }
            );
            this.fd = this.M.ea(268, () => {
                if (this.L && this.j && this.A) {
                    var m = this.A;
                    m.T = zg(m.U)
                }
                m = zg(this.g);
                var p = m - this.Ra;
                lr(this, p);
                this.X && (p > 0 && (this.K += p),
                this.tb = this.dd - m <= this.R,
                this.Ra = m);
                hr(this)
            }
            );
            this.gd = this.M.ea(269, () => {
                gr(this)
            }
            );
            this.hd = this.M.ea(270, m => {
                ir(this, m)
            }
            );
            this.jd = this.M.ea(271, m => {
                if (m && m.touches) {
                    this.ca = "touchmove";
                    this.O = m.touches.length;
                    this.T = !0;
                    hr(this);
                    if (!this.qc && m.touches && m.touches.length !== 0 && m.touches[0]) {
                        m = m.touches[0].pageY;
                        var p = m - this.sb;
                        this.sb = m;
                        m = p
                    } else
                        m = 0;
                    m > 0 && (this.K += m);
                    lr(this, m)
                }
            }
            );
            this.oc = this.M.ea(272, m => {
                m && m.touches && m.touches[0] && (this.ca = "touchstart",
                this.O = m.touches.length,
                this.T = !1,
                hr(this),
                this.sb = m.touches[0].pageY,
                this.qc = (m = m.target) && this.B === "top" && this.fa && this.A && Ip(this.A) && m.nodeType === 1 ? ee(Ip(this.A), m) : !1)
            }
            );
            this.ub = this.M.ea(273, () => {
                this.ob()
            }
            );
            L(a, "load", this.ub);
            G(this, () => {
                O(a, "load", this.ub)
            }
            )
        }
        dismiss() {
            if (!this.Ca) {
                this.Ca = !0;
                jr(this);
                var a = this.j;
                de(a);
                fr(this, this.na, !0, !0);
                a && (a.style.display = "none")
            }
        }
        ob() {
            if (this.ka)
                return !1;
            this.ka = !0;
            O(this.l, "load", this.ub);
            if (this.ya && !this.rb)
                return !1;
            hr(this, !0);
            return !0
        }
        qb() {
            return vg(this.g)
        }
    }
      , Ep = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var rr = class extends pr {
        constructor(a, b, c, d, e, f, g, k=null) {
            var h = Jl
              , n = Hl
              , l = {
                uc: T(oj),
                Gc: T(Nj),
                Cb: T(Lj),
                Db: T(Mj),
                Qd: ok(Pj),
                Bc: T(Oj),
                wc: T(Kj)
            };
            var m = ok(Jj);
            m = new qr(m);
            c = go(f, c);
            super(a, b, d, h, n, e, c, g, l, k, m)
        }
        Na(a) {
            return Oh(a)
        }
        ob() {
            if (!super.ob())
                return !1;
            var a = np(this.g, this.B === "top" ? 3 : 2);
            a && a.displayAdLoadedContent(!this.X && !this.Oa);
            return !0
        }
        qb() {
            if (this.F.width > ug) {
                var a = this.g;
                var b = this.F.width;
                let c = xd(a);
                a = a.innerWidth * c >= b && a.innerHeight * c >= (b > ug ? 450 : 0)
            } else
                a = super.qb();
            return a
        }
    }
    ;
    var sr = class extends D {
    }
      , tr = Qc(sr);
    function ur(a) {
        vr(a, !1);
        var b = a.j;
        Qq(a, c => {
            H(c, wr);
            Cg(c)
        }
        , !0);
        a.l.setAttribute("width", "");
        a.l.setAttribute("height", "");
        J(a.l, wr);
        J(a.l, xr);
        J(b, yr);
        Cg(b);
        Cg(a.l)
    }
    function vr(a, b) {
        var c = a.j;
        b ? zr(a, c) : (H(c, {
            display: "none"
        }),
        a.A && H(a.A, {
            display: "none"
        }),
        a.F && (t.clearInterval(a.F),
        a.F = 0),
        Ar(a))
    }
    function Br(a, b) {
        var c = a.j;
        if (!b)
            return !1;
        var d = Mk(b);
        if (!d || !d.A())
            return !1;
        d = d.I;
        if (!d)
            return !1;
        a.A = a.g.document.createElement("ins");
        H(a.A, {
            display: "inline-block",
            width: "100%"
        });
        var e = a.A;
        b = tk[b.l];
        T(zj) ? qk(e, d, b) : lj(e, d, b);
        a.G();
        H(c, {
            position: "absolute"
        });
        vr(a, !0);
        return !0
    }
    function zr(a, b) {
        H(b, {
            display: "block"
        });
        a.F = t.setInterval( () => a.G, 250)
    }
    function Ar(a) {
        a.H != null && (a.B.body.style.overflow = a.H);
        a.J != null && (a.B.documentElement.style.overflow = a.J)
    }
    function Cr(a) {
        var b = a.j
          , c = a.g.innerHeight;
        H(b, {
            height: `${c}px`
        });
        a.g.scrollTo(0, se(a.A).y);
        b && (H(b, {
            top: "0"
        }),
        a.A && H(a.A, {
            height: `${c}px`
        }),
        H(b, {
            position: "fixed"
        }),
        a.B.body && a.B.body.style.overflow !== "hidden" && (a.H = a.B.body.style.overflow,
        a.J = a.B.documentElement.style.overflow,
        a.B.body.style.overflow = "hidden",
        a.B.documentElement.style.overflow = "hidden"))
    }
    var Dr = class extends Rq {
        constructor(a, b, c) {
            super(a, b, c);
            this.H = null;
            this.F = 0;
            this.J = null;
            this.K = 0;
            this.A = null;
            this.L = 0;
            this.B = b.document;
            ur(this)
        }
        G() {
            if (this.B.body.style.overflow !== "hidden" && this.B.body.style.position !== "fixed") {
                var a = this.j;
                let b = this.g.innerHeight;
                if (this.L < b) {
                    let c = {
                        height: `${b}px`
                    };
                    H(a, c);
                    this.A && H(this.A, c);
                    this.L = b
                }
                (a = this.j) && this.A && (this.K = se(this.A).y,
                a.style.top !== `${this.K}px` && H(a, {
                    top: `${this.K}px`
                }))
            }
        }
    }
      , yr = {
        backgroundColor: "white",
        opacity: "1",
        position: "fixed",
        left: "0px",
        top: "0px",
        display: "none !important",
        zIndex: "2147483646"
    }
      , wr = {
        width: "100%",
        height: "100%",
        zIndex: "2147483646"
    }
      , xr = {
        left: "0",
        position: "absolute",
        top: "0"
    };
    function Er(a, b) {
        var c = a.document.body;
        if (!c || !b)
            return Ol("sci_evt", {
                amacerr: 1
            }, .1),
            null;
        b = Ec(b, Mn, 1);
        var d = [];
        for (let w = 0; w < b.length; w++) {
            a: {
                var e = b[w];
                var f = w
                  , g = a
                  , k = Dc(e, cj, 1);
                if (!k) {
                    e = null;
                    break a
                }
                b: {
                    var h = k;
                    if (!h) {
                        var n = null;
                        break b
                    }
                    n = Jc(h, 7, B);
                    if (Jc(h, 1, B) || h.getId() || oc(h, 4, Qb, nc()).length > 0) {
                        var l = h.getId()
                          , m = Jc(h, 1, B);
                        n = oc(h, 4, Qb, nc());
                        var p = Ib(C(h, 2, B))
                          , q = Ib(C(h, 5, B));
                        h = Vn(Fb(C(h, 6, B)));
                        let A = "";
                        m && (A += m);
                        l && (A += "#" + Vi(l));
                        if (n)
                            for (l = 0; l < n.length; l++)
                                A += "." + Vi(n[l]);
                        n = A ? new Xi(A,p,q,h) : null
                    } else
                        n = n ? new Xi(n,Ib(C(h, 2, B)),Ib(C(h, 5, B)),Vn(Fb(C(h, 6, B)))) : null
                }
                p = n;
                if (!p) {
                    e = null;
                    break a
                }
                n = Fb(C(e, 2, B));
                n = Yn[n];
                q = n === void 0 ? null : n;
                if (q === null) {
                    e = null;
                    break a
                }
                n = (n = Dc(e, Ln, 3)) ? Ic(n, 3, B) : null;
                p = new ao(p,q);
                q = oc(e, 10, Fb, nc()).slice(0);
                Ib(C(k, 5)) != null && q.push(1);
                k = Ib(C(e, 12, B));
                q = e.Y;
                q = Cc(q, q[z] | 0, kj, 4) !== void 0 ? Dc(e, kj, 4) : null;
                e = Fb(C(e, 8)) == 1 ? new eo(p,new Zn(Xn(Dc(e, Ln, 3), null)),n,0,q,g,f,k,e) : Fb(C(e, 8)) == 2 ? new eo(p,new $n(e),n,1,q,g,f,k,e) : null
            }
            e !== null && d.push(e)
        }
        b = new Xo(d,a);
        d = a.innerHeight;
        a = a.innerWidth;
        a = Do(Bo(.85 * a, a), d);
        a.g.push(new wo);
        a.l = 1;
        a = a.build();
        a = Uo(b, a)[0] || null;
        if (!a)
            return null;
        c = {
            node: (new Fh(c,!1)).g(a.g) || void 0,
            Rb: void 0,
            identifier: {}
        };
        if (!c.node)
            throw Error("amac:n");
        b = lo(a.Ea.g.g);
        if (b === null)
            throw Error("amac:p");
        return (c = (new em(c,b)).build()) ? {
            Kb: c,
            ve: a.Va.g
        } : null
    }
    function Fr(a) {
        var b = new sg;
        b.g = !0;
        b.B = .85;
        b.j = 1;
        b.A = 25;
        b.l = a.innerHeight;
        b.F = !0;
        b = b.build();
        return Fn(a, b)
    }
    ;function Gr(a) {
        var b = xg(a, !0)
          , c = wg(a).scrollWidth
          , d = wg(a).scrollHeight
          , e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = zg(a)
          , g = []
          , k = []
          , h = []
          , n = []
          , l = []
          , m = []
          , p = []
          , q = 0
          , w = 0
          , A = Infinity
          , I = Infinity
          , Z = null
          , M = Fm({
            Jc: !1
        }, a);
        for (let N of M) {
            M = N.getBoundingClientRect();
            let X = b - (M.bottom + f);
            var u = void 0
              , v = void 0;
            if (N.className && N.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                u = N.getAttribute("google_element_uid");
                let K;
                if (v = a.fqjyf) {
                    if (u && v[u] && (K = v[u].LmpfC),
                    !K)
                        continue
                } else
                    continue;
                a: {
                    u = Number(K.google_ad_width);
                    v = Number(K.google_ad_height);
                    if (!(u > 0 && v > 0)) {
                        b: {
                            try {
                                let Ud = String(K.google_ad_format);
                                if (Ud && Ud.match) {
                                    let Rf = Ud.match(/(\d+)x(\d+)/i);
                                    if (Rf) {
                                        let ak = parseInt(Rf[1], 10)
                                          , bk = parseInt(Rf[2], 10);
                                        if (ak > 0 && bk > 0) {
                                            var R = {
                                                width: ak,
                                                height: bk
                                            };
                                            break b
                                        }
                                    }
                                }
                            } catch (Ud) {}
                            R = null
                        }
                        let Mb = R;
                        if (!Mb) {
                            u = null;
                            break a
                        }
                        u = u > 0 ? u : Mb.width;
                        v = v > 0 ? v : Mb.height
                    }
                    u = {
                        width: u,
                        height: v
                    }
                }
                u = (v = u) ? v.height : 0;
                v = v ? v.width : 0
            } else if (u = M.bottom - M.top,
            v = M.right - M.left,
            u <= 1 || v <= 1)
                continue;
            g.push(u);
            h.push(v);
            n.push(u * v);
            Km(N) ? (w += 1,
            N.className && N.className.indexOf("pedestal_container") != -1 && (Z = u)) : (A = Math.min(A, X),
            m.push(M),
            q += 1,
            k.push(u),
            l.push(u * v));
            I = Math.min(I, X);
            p.push(M)
        }
        A = A === Infinity ? null : A;
        I = I === Infinity ? null : I;
        f = Hr(m);
        p = Hr(p);
        k = Ir(b, k);
        m = Ir(b, g);
        l = Ir(b * c, l);
        R = Ir(b * c, n);
        return new Jr(a,{
            zd: e,
            Tc: b,
            be: c,
            ae: d,
            Pc: q,
            xc: w,
            yc: Kr(g),
            rd: Kr(h),
            qd: Kr(n),
            Vd: f,
            Ud: p,
            Td: A,
            Sd: I,
            xd: k,
            vd: m,
            pd: l,
            od: R,
            ce: Z
        })
    }
    function Lr(a, b=0) {
        a = Gr(a);
        return ((a.g.yc || 0) * (a.g.Pc + a.g.xc) + b) / (a.g.Tc + b)
    }
    function Mr(a, b) {
        var c = bd() && !(P(a.j) >= 900)
          , d = Ea([], e => Ha(a.l, e)).join(",");
        b = {
            wpc: "",
            su: b,
            eid: d,
            doc: a.g.zd ?? null,
            pg_h: Y(a.g.Tc),
            pg_w: Y(a.g.be),
            pg_hs: Y(a.g.ae),
            c: Y(a.g.Pc),
            aa_c: Y(a.g.xc),
            av_h: Y(a.g.yc),
            av_w: Y(a.g.rd),
            av_a: Y(a.g.qd),
            s: Y(a.g.Vd),
            all_s: Y(a.g.Ud),
            b: Y(a.g.Td),
            all_b: Y(a.g.Sd),
            d: Y(a.g.xd),
            all_d: Y(a.g.vd),
            ard: Y(a.g.pd),
            all_ard: Y(a.g.od),
            pd_h: Y(a.g.ce),
            dt: c ? "m" : "d"
        };
        c = {};
        for (let e of Object.keys(b))
            b[e] !== null && (c[e] = b[e]);
        return c
    }
    var Jr = class {
        constructor(a, b) {
            this.l = [];
            this.j = a;
            this.g = b
        }
    }
    ;
    function Kr(a) {
        return Wd.apply(null, Ea(a, b => b > 0)) || null
    }
    function Ir(a, b) {
        return a <= 0 ? null : Vd.apply(null, b) / a
    }
    function Hr(a) {
        var b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e]
                  , d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }
    function Y(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;function Nr(a, b, c) {
        a.g = Pq(b, c, "__lsv__");
        return !!a.g && a.g?.length === 0
    }
    function Or(a, b) {
        var c = Pr();
        try {
            if (!a || !Nr(c, a, b))
                return !1;
            c.g.push(Date.now());
            let d = JSON.stringify(c.g);
            a.setItem("__lsv__", d);
            return a.getItem("__lsv__") === d
        } catch (d) {
            return !1
        }
    }
    var Qr = class {
        constructor() {
            this.g = null
        }
    }
    ;
    function Pr() {
        Rr || (Rr = new Sr);
        return Rr
    }
    var Sr = class extends Qr {
    }
      , Rr = null;
    function Tr(a, b) {
        if (a.pa)
            Promise.resolve(!1);
        else {
            a.pa = !0;
            b = Bg(b);
            a.fa = b["i-fvs"] === "true";
            var c = b.i_expid;
            c && (a.L = c);
            b.qid && (a.H = b.qid);
            a.F = parseFloat(b.den_lim) || 0;
            b = parseInt(b.sti_lt, 10);
            isNaN(b) || (a.T = b);
            a.G = !0;
            if (Ur(a))
                Promise.resolve(!1);
            else {
                var d = new Le
                  , e = () => {
                    var g = xg(a.j, !0);
                    Vr(a, {
                        nip: 1,
                        ph: g,
                        vh: a.j.innerHeight,
                        iplt: Date.now() - a.O,
                        ama: a.J.toString(),
                        url: a.j.location ? a.j.location.href : ""
                    }, .1);
                    d.resolve(!1)
                }
                  , f = (g, k) => {
                    Vr(a, {
                        iplt: Date.now() - a.O,
                        ama: a.J.toString(),
                        y: k
                    }, .01);
                    d.resolve(Wr(a, g))
                }
                ;
                a.O = Date.now();
                a.J ? (b = Er(a.j, a.Ca)) && a.G && !Ur(a) ? f(b.Kb, b.ve) : (Vr(a, {
                    amacerr: 1
                }, .1),
                e()) : Fr(a.j).then(g => {
                    a.G && !Ur(a) && g.oa().then(k => {
                        if (k.j)
                            var h = k.j;
                        else
                            k.g || (Lk(k, !1),
                            k.A()),
                            h = k.g,
                            !k.j && h && (k.j = h.j()),
                            h = k.j;
                        f(k, h ? h.top : -1)
                    }
                    , e);
                    d.resolve(!1)
                }
                )
            }
        }
    }
    function Ur(a) {
        return a.fa ? !1 : U(a.j).wasReactiveAdVisible[8] ? (Vr(a, {
            vigs: 1
        }, .1),
        !0) : !1
    }
    function Vr(a, b, c) {
        b = b || {};
        a.H && (b.qid = a.H);
        a.L && (b.eid = a.L);
        a.ta && (b.tsl = Date.now() - a.ta);
        a.X && (b.tslo = Date.now() - a.X,
        b.tl = a.ua);
        a.K.src && (b.req = a.K.src);
        Ol("sci_evt", b, c)
    }
    function Wr(a, b) {
        Xr(a) && Yr(a) && Br(a.g, b) && (a.ta = Date.now(),
        Zr(a),
        a.fa ? $r(a) : a.requestAnimationFrame.call(a.j, () => {
            as(a)
        }
        ));
        return !!a.ta
    }
    function bs(a) {
        a.Ya = !0;
        a.l = !1;
        vr(a.g, !1);
        a.A && (O(a.j, "orientationchange", a.A),
        a.A = null);
        a.B && (O(a.j, "resize", a.B),
        a.B = null)
    }
    function Xr(a) {
        var b = a.j.innerHeight;
        if (!b)
            return !1;
        var c = !vg(a.j);
        var d = a.j;
        var e = P(d);
        d = wg(d).scrollWidth <= e;
        var f;
        if (c)
            return Vr(a, {
                lnd: 1
            }, .1),
            !1;
        if (a.F && (f = Lr(a.j, b)) > a.F)
            return b = Mr(Gr(a.j), a.j.location.hostname),
            Vr(a, {
                den: f,
                lim: a.F,
                ...b
            }, 1),
            !1;
        d || Vr(a, {
            pwev: 1
        }, .1);
        return !0
    }
    function Yr(a) {
        if (a.ka)
            return !0;
        a = go(a.la, a.pubWin);
        return Nr(Pr(), a, 3600)
    }
    function Zr(a) {
        a.A = Nl(519, () => {
            !a.Ya && a.l && Vr(a, {
                tto: Date.now() - a.ta,
                por: vg(a.j) ? 1 : 0
            }, .1)
        }
        );
        L(a.j, "orientationchange", a.A);
        a.B = Nl(520, () => {
            a.Ya || (a.g.G(),
            a.l && Vr(a, {
                ttre: Date.now() - a.ta
            }, .1))
        }
        );
        L(a.j, "resize", a.B)
    }
    function $r(a) {
        a.qa || (a.K.contentWindow.postMessage(JSON.stringify({
            msg_type: "i-view"
        }), "https://googleads.g.doubleclick.net"),
        a.qa = !0)
    }
    function as(a) {
        if (!a.Ya)
            if (Ur(a))
                bs(a);
            else {
                var b = a.g.j.getBoundingClientRect().top
                  , c = a.j.innerHeight;
                a.g.G();
                (c - b) / c >= .5 && $r(a);
                if (b < c) {
                    U(a.j).wasReactiveAdVisible[9] = !0;
                    if (!a.ka) {
                        let d = go(a.la, a.pubWin);
                        Or(d, 3600)
                    }
                    a.ya = !0
                }
                b <= 0 ? (a.T >= 0 && cs(a),
                Vr(a, {
                    sice: "true",
                    vh: c,
                    gvto: b
                }, .1)) : a.requestAnimationFrame && a.requestAnimationFrame.call(a.j, () => {
                    as(a)
                }
                )
            }
    }
    function cs(a) {
        a.X = Date.now();
        a.l = !0;
        a.ua++;
        Cr(a.g);
        t.setTimeout( () => {
            if (a.l) {
                a.l = !1;
                var b = a.g;
                let c = b.j;
                H(c, {
                    top: `${se(b.A).y}px`
                });
                H(c, {
                    position: "absolute"
                });
                Ar(b)
            }
        }
        , Math.max(0, a.T))
    }
    var ds = class extends Bp {
        constructor(a, b, c, d, e, f, g) {
            super(a, c);
            this.pubWin = b;
            this.ka = e;
            this.la = g;
            this.Ya = !1;
            this.L = null;
            this.l = this.fa = this.G = this.pa = !1;
            this.ua = this.X = this.ta = 0;
            this.B = this.A = this.H = null;
            this.ya = this.qa = !1;
            this.F = this.O = this.T = 0;
            this.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame;
            this.g = new Dr(c,a,f);
            this.J = Ic(d, 1) ?? !1;
            this.Ca = Dc(d, Nn, 2) ?? null
        }
        W(a) {
            a["sti-fill"] = b => {
                Tr(this, b)
            }
            ;
            a["i-no"] = () => {
                this.G = !1;
                !this.ya && this.ta && bs(this)
            }
        }
    }
    ;
    var es = class extends pp {
        constructor() {
            super(...arguments);
            this.K = !1;
            this.H = null
        }
        G(a) {
            this.K = !!a.enableAma;
            if (a = a.amaConfig)
                try {
                    var b = On(a)
                } catch (c) {
                    b = null
                }
            else
                b = null;
            this.H = b;
            return !0
        }
    }
    ;
    var fs = class {
        verifyAndProcessConfig(a, b, c) {
            var d = U(a);
            if (d.wasReactiveAdConfigReceived[9])
                return !1;
            var e = new es;
            if (!op(e, b))
                return !1;
            d.wasReactiveAdConfigReceived[9] = !0;
            if (!e.B && !Nr(Pr(), c, 3600))
                return !1;
            b = ce(document, "INS");
            b.className = "adsbygoogle";
            H(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.F || {};
            c.google_ad_client = e.A;
            c.google_ad_height = wg(a).clientHeight || 0;
            c.google_ad_width = P(a) || 0;
            c.google_reactive_ad_format = 9;
            d = new sr;
            var f = e.K;
            if (f != null && typeof f !== "boolean")
                throw Error(`Expected boolean but got ${ja(f)}: ${f}`);
            d = lc(d, 1, f);
            e.H && Gc(d, 2, e.H);
            d = JSON.stringify(Xb(d));
            c.google_rasc = d;
            e.B && (c.google_adtest = "on");
            rp(b, c, a);
            return !0
        }
    }
    ;
    var gs = class {
        constructor(a) {
            this.g = a;
            this.j = 0;
            this.pinger = new dg(Lf());
            this.hb = new Dl
        }
        ec(a) {
            var b = ok(xj);
            if (this.hb.ab(b)) {
                var c = this.g.de
                  , d = this.g.Ab
                  , e = this.g.xb;
                a = a.C;
                var f = new yf;
                a = wc(f, 12, zf, Eb(a));
                e = lc(a, 9, Pb(e));
                e = lc(e, 10, Hb(b));
                d = lc(e, 11, Pb(d));
                lc(d, 13, c == null ? c : Jb(c));
                d = Bc(a, xf, 5);
                hc(d);
                d = oc(d, 1, Fb, 2, !0);
                d.push(Db(9, ab(d === Za ? 7 : d[z] | 0) ?? 1024));
                d = new Af;
                c = Mc(d, 1, c);
                b = Mc(c, 2, b);
                b = Hc(b, 6, Bf, a);
                a: {
                    hc(b);
                    if (void 0 === fb) {
                        if (Ac(b, Bf, 6) !== 6) {
                            c = void 0;
                            break a
                        }
                    } else
                        zc(b.Y, void 0, Bf, 6);
                    c = Bc(b, yf, 6)
                }
                a = this.j++;
                lc(c, 1, Hb(a));
                Xf(this.pinger, b)
            }
        }
    }
    ;
    var is = class {
        constructor(a, b, c) {
            var d = hs;
            this.pinger = a;
            this.hb = b;
            this.params = c;
            this.g = d;
            this.j = 0
        }
        D(a) {
            var {ie: b} = this.g();
            if (this.hb.ab(b)) {
                var c = this.params.cd
                  , d = this.params.Ab
                  , e = this.params.wb
                  , f = this.params.xb
                  , g = this.params.mb
                  , k = a.C;
                a = this.pinger;
                b = Ff(b);
                var h = this.j++;
                b = vc(b, 1, Hb(h), 0);
                b = Ef(b);
                k = wc(b, 3, Hf, Eb(k));
                d = Nc(k, 11, d);
                c = Mc(d, 8, c);
                e = Oc(wf([e]));
                e = Gc(c, 5, e);
                f = Nc(e, 9, f);
                g = g();
                g = uc(f, 12, g, Gb);
                Wf(a, ec(g))
            }
        }
    }
    ;
    var js = class extends is {
        constructor(a) {
            if (b == null) {
                var b = new Dl;
                b = {
                    pinger: new dg(a.xb),
                    hb: b
                }
            }
            super(b.pinger, b.hb, a)
        }
    }
    ;
    function hs() {
        return {
            ie: ok(ck),
            Od: 0
        }
    }
    ;var ms = class extends Bp {
        constructor(a, b) {
            super(a, b.l);
            this.g = b
        }
        W(a) {
            a.dismiss = () => {
                var b = this.g;
                ks(b, -30);
                ls(b, "dismissed")
            }
        }
    }
    ;
    function ns(a, b) {
        var c = Gd("STYLE", a);
        qd(c);
        a?.head.appendChild(c);
        setTimeout( () => {
            a?.head.removeChild(c)
        }
        , b)
    }
    function os(a, b, c) {
        if (!a.body)
            return null;
        var d = new ps;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && ns(b.document, e);
            J(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.A,
                top: d.B
            });
            b.scrollTo(0, d.j)
        }
    }
    class ps {
        constructor() {
            this.g = this.B = this.A = this.l = null;
            this.j = 0
        }
        apply(a, b) {
            this.l = a.body.style.overflow;
            this.A = a.body.style.position;
            this.B = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.j = zg(b);
            J(a.body, "top", `${-this.j}px`)
        }
    }
    ;function qs(a, b) {
        var c = a.j;
        if (c)
            if (b) {
                b = a.G;
                if (b.g == null) {
                    var d = b.controller;
                    let e = d.floatingAdsStacking.nextRestrictionId++;
                    d.floatingAdsStacking.maxZIndexRestrictions[e] = 2147483646;
                    kq(d);
                    b.g = e
                }
                H(c, {
                    display: "block"
                });
                a.B.body && !a.A && (a.A = os(a.B, a.g, a.H));
                c.setAttribute("tabindex", "0");
                c.setAttribute("aria-hidden", "false");
                a.B.body.setAttribute("aria-hidden", "true")
            } else
                b = a.G,
                b.g != null && (d = b.controller,
                delete d.floatingAdsStacking.maxZIndexRestrictions[b.g],
                kq(d),
                b.g = null),
                H(c, {
                    display: "none"
                }),
                a.A && (a.A(),
                a.A = null),
                a.B.body.setAttribute("aria-hidden", "false"),
                c.setAttribute("aria-hidden", "true")
    }
    function rs(a) {
        qs(a, !1);
        var b = a.j;
        if (b) {
            var c = ss(a.F);
            Qq(a, d => {
                H(d, c);
                Cg(d)
            }
            , !0);
            a.l.setAttribute("width", "");
            a.l.setAttribute("height", "");
            J(a.l, c);
            J(a.l, ts);
            J(b, us);
            J(b, {
                background: "transparent"
            });
            H(b, {
                display: "none",
                position: "fixed"
            });
            Cg(b);
            Cg(a.l);
            xd(a.F) <= 1 || (J(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }),
            Pd(b))
        }
    }
    var vs = class extends Rq {
        constructor(a, b, c) {
            var d = ok(dk);
            super(a, b, c);
            this.F = b;
            this.H = d;
            this.A = null;
            this.B = b.document;
            a = new nq(b);
            this.G = new oq(a)
        }
    }
      , us = {
        backgroundColor: "white",
        opacity: "1",
        position: "fixed",
        left: "0px",
        top: "0px",
        margin: "0px",
        padding: "0px",
        display: "none",
        zIndex: "2147483647"
    }
      , ts = {
        left: "0",
        position: "absolute",
        top: "0"
    };
    function ss(a) {
        a = xd(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    ;var ws = class extends vs {
        constructor(a, b, c) {
            super(b, a, c);
            rs(this)
        }
        Na(a) {
            return Oh(a)
        }
    }
    ;
    function xs() {
        var {promise: a, resolve: b} = new Le;
        return {
            me: (c, d) => {
                d?.ports.length && b(new ys(d.ports[0]))
            }
            ,
            ke: a
        }
    }
    var ys = class extends E {
        constructor(a) {
            super();
            var {promise: b, resolve: c} = new Le;
            this.promise = b;
            a.onmessage = () => c();
            G(this, () => {
                a.close()
            }
            )
        }
    }
    ;
    const zs = "youtube.com youtube-nocookie.com vimeo.com dailymotion.com twitch.tv kick.com rumble.com".split(" ");
    function As(a, b) {
        a = a.getComputedStyle(b);
        return b.offsetWidth > 0 && b.offsetHeight > 0 && a.display !== "none" && a.visibility !== "hidden" && a.opacity !== "0"
    }
    function Bs(a) {
        return Array.from(a.document.querySelectorAll("video")).some(b => As(a, b) && !(!b.currentSrc && !b.src)) || Array.from(a.document.querySelectorAll("iframe")).some(b => Cs(a, b))
    }
    function Cs(a, b) {
        return As(a, b) && zs.some(c => b.src?.includes(c))
    }
    ;const Ds = ["mousemove", "mousedown", "scroll", "keydown"];
    function Es(a, b=3E4) {
        return new Fs(a,b)
    }
    function Gs(a) {
        var b = null
          , c = null
          , d = f => {
            if (b && f.timeStamp - b > a.Xb) {
                if (Bs(a.g)) {
                    a.dispose();
                    return
                }
                var g = {
                    ib: f.timeStamp,
                    Nd: f.timeStamp - b,
                    ue: c
                };
                for (let k of a.j)
                    try {
                        k(g)
                    } catch (h) {}
            }
            b = f.timeStamp
        }
        ;
        for (let f of Ds)
            a.g.addEventListener(f, d);
        var e = null;
        a.g.navigator?.userActivation && a.g.performance?.now && (e = a.g.setInterval( () => {
            a.g.navigator.userActivation.isActive && (c = a.g.performance.now())
        }
        , 1E3));
        G(a, () => {
            for (let f of Ds)
                a.g.removeEventListener(f, d);
            e && a.g.clearInterval(e)
        }
        )
    }
    var Fs = class extends E {
        constructor(a, b) {
            super();
            this.g = a;
            this.Xb = b;
            this.j = [];
            this.l = $c( () => {
                Gs(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    const Hs = Array.from({
        length: 11
    }, (a, b) => b / 10);
    function Is(a) {
        var b = d => {
            d.isTrusted && (a.B = !0,
            a.j(d.timeStamp))
        }
          , c = d => {
            d.isTrusted && (a.B = !1,
            a.j(d.timeStamp))
        }
        ;
        L(a.g, "focus", b);
        L(a.g, "blur", c);
        G(a, () => void a.g.removeEventListener("focus", b));
        G(a, () => void a.g.removeEventListener("blur", c));
        a.B = a.g.document.hasFocus()
    }
    function Js(a) {
        var b = c => {
            c.isTrusted && (a.A = Sq(a.g.document) === 1 ? !0 : !1,
            a.j(c.timeStamp))
        }
        ;
        L(a.g.document, "visibilitychange", b);
        G(a, () => void a.g.document.removeEventListener("visibilitychange", b));
        a.A = Sq(a.g.document) === 1
    }
    function Ks(a) {
        var b = a.g.document.body.getBoundingClientRect().top + 10
          , c = d => {
            d.isTrusted && (a.F = d.clientY < b ? !0 : !1,
            a.j(d.timeStamp))
        }
        ;
        L(a.g.document.body, "mouseleave", c);
        L(a.g.document.body, "mouseenter", c);
        G(a, () => void a.g.document.body.removeEventListener("mouseleave", c));
        G(a, () => void a.g.document.body.removeEventListener("mouseenter", c));
        a.F = !1
    }
    function Ls(a) {
        var b = a.g.document.querySelectorAll("article");
        if (b.length) {
            var c = new IntersectionObserver(d => {
                for (let e of d)
                    e.boundingClientRect.bottom <= a.g.innerHeight && (a.j(e.time),
                    c.unobserve(e.target))
            }
            ,{
                root: null,
                threshold: Hs
            });
            for (let d of b)
                c.observe(d);
            G(a, () => void c.disconnect())
        }
    }
    function Ms(a) {
        var b = a.g.scrollY
          , c = d => {
            d.isTrusted && (a.T = a.g.scrollY - b,
            b = a.g.scrollY,
            a.j(d.timeStamp))
        }
        ;
        L(a.g, "scroll", c);
        G(a, () => void a.g.removeEventListener("scroll", c))
    }
    function Ns(a) {
        var b = a.g.navigation;
        if (b && (Ba() || (Aa() ? 0 : y("Edge")) || (Aa() ? 0 : y("Opera"))) && !b.canGoForward && ib(a.g.history.pushState)) {
            var c = d => {
                d.navigationType === "traverse" ? (!a.Bb || a.g.history.state?.Jd) && d.intercept({
                    async handler() {
                        a.O = !0;
                        a.j(d.timeStamp)
                    }
                }) : a.H || d.navigationType !== "push" || d.destination.url !== a.g.location.href || d.intercept({
                    async handler() {}
                })
            }
            ;
            L(b, "navigate", c);
            G(a, () => void b.removeEventListener("navigate", c));
            a.g.history.pushState(a.Bb ? {
                Jd: !0
            } : {}, "", a.g.location.href);
            a.H = !0
        }
    }
    function Os(a) {
        var b = a.g.navigation;
        if (b && (Ba() || (Aa() ? 0 : y("Edge")) || (Aa() ? 0 : y("Opera")))) {
            var c = d => {
                d.formData || d.sourceElement && d.sourceElement.tagName === "A" || d.destination.url === a.g.location.href || d.destination.url.includes("#google_vignette") || !d.canIntercept || (a.K = a.g.location.href,
                d.intercept({
                    handler: async () => {
                        a.j(d.timeStamp);
                        b.removeEventListener("navigate", c)
                    }
                }))
            }
            ;
            L(b, "navigate", c);
            G(a, () => void b.removeEventListener("navigate", c))
        }
    }
    function Ps(a) {
        var b = new Set(["password", "file", "image"])
          , c = d => {
            if (d.isTrusted && d.target instanceof HTMLFormElement) {
                var e = d.target;
                if (!Array.from(e.querySelectorAll("input")).some(g => b.has(g.type)) && !a.ca(e)) {
                    var f = d.submitter;
                    f && a.ca(f) || (a.J = e,
                    d.preventDefault(),
                    d.stopImmediatePropagation(),
                    a.j(d.timeStamp))
                }
            }
        }
        ;
        L(a.g.document, "submit", c, {
            capture: !0
        });
        G(a, () => void a.g.document.removeEventListener("submit", c))
    }
    var Qs = class extends E {
        constructor(a, b, c=!1, d= () => !1) {
            super();
            this.g = a;
            this.Bb = c;
            this.ca = d;
            this.H = this.O = this.F = this.B = this.A = !1;
            this.T = 0;
            this.J = this.K = null;
            if (We(a))
                for (let e of b)
                    switch (e) {
                    case 0:
                        Is(this);
                        break;
                    case 1:
                        Js(this);
                        break;
                    case 2:
                        Ks(this);
                        break;
                    case 3:
                        Ls(this);
                        break;
                    case 4:
                        Ms(this);
                        break;
                    case 5:
                        Ns(this);
                        break;
                    case 6:
                        Os(this);
                        break;
                    case 7:
                        Ps(this)
                    }
            else
                this.dispose()
        }
        init() {
            this.N || this.j(We(this.g))
        }
        na() {
            return this.K
        }
    }
    ;
    function Rs(a, b) {
        a.ma ? a.ka(b) : (a.W.resolve(b),
        a.dispose())
    }
    var Ss = class extends Qs {
        constructor(a, b, c, d=!1, e=!1, f) {
            super(a, c, e, f);
            this.ka = b;
            this.ma = d;
            this.W = new Le;
            this.l = this.W.promise
        }
        dismiss() {}
    }
    ;
    var Ts = class extends Ss {
        constructor(a, b, c=!1) {
            super(a, b, [0, 1, 2], c);
            this.G = 0;
            this.init()
        }
        j(a) {
            switch (this.G) {
            case 0:
                this.B && !this.F && (this.G = 1);
                break;
            case 1:
                if (!this.B && this.A && this.F) {
                    this.G = 2;
                    let b = setTimeout( () => {
                        this.j(a)
                    }
                    , 200);
                    G(this, () => void clearTimeout(b))
                }
                break;
            case 2:
                !this.B && this.A && this.F ? Rs(this, a) : this.G = 1
            }
        }
    }
    ;
    function Us(a) {
        var b = !1
          , c = ({isTrusted: e}) => {
            e && (b = !0)
        }
          , d = ({timeStamp: e, isTrusted: f}) => {
            if (f = f && !b)
                f = (f = a.g.document.referrer) && typeof URL === "function" ? (new URL(f)).origin === a.g.location.origin : !1;
            if (f) {
                e = {
                    ib: e
                };
                for (let g of a.j)
                    try {
                        g(e)
                    } catch (k) {}
            }
        }
        ;
        a.g.addEventListener("focus", d);
        a.g.addEventListener("blur", c);
        G(a, () => {
            a.g.removeEventListener("focus", d);
            a.g.removeEventListener("blur", c)
        }
        )
    }
    var Vs = class extends E {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.l = $c( () => {
                Us(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    function Ws(a) {
        var b = null
          , c = ({timeStamp: e, isTrusted: f}) => {
            f && (b = e)
        }
          , d = ({timeStamp: e, isTrusted: f}) => {
            if (f) {
                e = {
                    ib: e,
                    ...(b ? {
                        pe: e - b
                    } : null)
                };
                for (let g of a.j)
                    try {
                        g(e)
                    } catch (k) {}
            }
        }
        ;
        a.g.addEventListener("focus", d);
        a.g.addEventListener("blur", c);
        G(a, () => {
            a.g.removeEventListener("focus", d);
            a.g.removeEventListener("blur", c)
        }
        )
    }
    var Xs = class extends E {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.l = $c( () => {
                Ws(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    var Ys = class extends Ss {
        constructor(a, b, c=!1) {
            super(a, b, [1], c);
            this.init()
        }
        j(a) {
            this.G ?? (this.G = 0);
            switch (this.G) {
            case 0:
                this.A && (this.G = 1);
                break;
            case 1:
                this.A || (this.G = 2,
                this.X = a);
                break;
            case 2:
                this.A && (this.L = a - this.X,
                Rs(this, a))
            }
        }
    }
    ;
    var Zs = class extends E {
        constructor(a, b, c, d, e, f=!1) {
            super();
            this.pinger = c;
            this.l = d;
            this.wb = 9;
            this.j = Math.floor(zd() * 2147483647);
            this.g = (g, k, h={}) => {
                g = Object.assign({
                    etc: this.j,
                    e: g,
                    t: Math.round(k),
                    qqid: this.l,
                    ptt: this.wb
                }, h);
                of(this.pinger, "eit", g, !0, 1)
            }
            ;
            this.g(1, b);
            for (let g of e)
                switch (g) {
                case 101:
                    b = h => void this.g(g, h);
                    c = new Ts(a,b,f);
                    f || c.l.then(b);
                    F(this, c);
                    break;
                case 102:
                    b = h => void this.g(g, h, {
                        tbd: Math.round(k.L || -1)
                    });
                    let k = new Ys(a,b,f);
                    f || k.l.then(b);
                    F(this, k);
                    break;
                case 103:
                    b = new Xs(a);
                    b.listen(h => {
                        this.g(g, h.ib, {
                            tsb: h.pe ?? -1
                        })
                    }
                    );
                    F(this, b);
                    break;
                case 104:
                    b = Es(a);
                    b.listen(h => {
                        this.g(g, h.ib, {
                            it: h.Nd,
                            ualta: h.ue ?? -1
                        })
                    }
                    );
                    F(this, b);
                    break;
                case 105:
                    b = new Vs(a),
                    b.listen(h => {
                        this.g(g, h.ib)
                    }
                    ),
                    F(this, b)
                }
        }
    }
    ;
    var $s = class extends Ss {
        constructor(a, b, c=!1, d=!1) {
            super(a, b, [5], c, d);
            this.init()
        }
        j(a) {
            this.O && Rs(this, a)
        }
    }
    ;
    var at = class {
        constructor(a, b) {
            this.j = b;
            this.g = a.document.documentElement;
            this.body = a.document.body;
            this.H = this.g.style.height;
            this.N = this.g.style.overflowY;
            this.A = this.body.style.height;
            this.F = this.body.style.overflow;
            this.G = this.body.style.position;
            this.B = this.body.style.margin;
            this.l = this.body.style.padding
        }
        start() {
            H(this.g, {
                height: `${this.j}px`,
                "overflow-y": "auto"
            });
            H(this.body, {
                height: `${this.j}px`,
                overflow: "hidden",
                position: "relative",
                margin: "0px",
                padding: "0px"
            })
        }
        stop() {
            H(this.g, {
                height: this.H,
                "overflow-y": this.N
            });
            H(this.body, {
                height: this.A,
                overflow: this.F,
                position: this.G,
                margin: this.B,
                padding: this.l
            })
        }
    }
    ;
    function bt(a, b, c, d, e) {
        var f = a.document.createElement("div");
        f.id = "goog-continue-reading-wrapper";
        b = {
            position: "absolute",
            top: `${b}px`,
            left: `${c}px`,
            transform: "translateX(-50%)",
            "z-index": "2147483647",
            width: `${d}px`,
            height: `${e}px`
        };
        Object.assign(b, {});
        H(f, b);
        b = f.attachShadow({
            mode: "open"
        });
        c = a.document.createElement("button");
        c.textContent = "Continue reading";
        c.id = "goog-continue-reading-btn";
        a = a.document.createElement("style");
        a.textContent = "\n    :host {\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    button {\n      background-color: #1a73e8; /* Google blue 600 */\n      color: white;\n      border: none;\n      padding: 10px 16px;\n      text-align: center;\n      font-family: 'Google Sans';\n      text-decoration: none;\n      display: flex; /* Use flex to center content */\n      align-items: center;\n      justify-content: center;\n      font-size: 14px;\n      line-height: normal; /* Adjust line-height */\n      cursor: pointer;\n      border-radius: 20px;\n      height: 100%; /* Fill wrapper */\n      width: 100%; /* Fill wrapper */\n      box-sizing: border-box;\n      overflow: visible;\n    }\n  ";
        b.appendChild(a);
        b.appendChild(c);
        return f
    }
    function ct(a, b, c, d={}) {
        a = a.document.createElement("div");
        b = {
            position: "absolute",
            top: `${b}px`,
            left: "0px",
            width: "100%",
            height: `${c}px`,
            "-webkit-backdrop-filter": "blur(16px)",
            "backdrop-filter": "blur(16px)",
            filter: "blur(8px)",
            "z-index": "2147483646"
        };
        Object.assign(b, d);
        a.id = "goog-content-pause-scrim";
        H(a, b);
        return a
    }
    ;function dt(a, b, c, d=null) {
        return new et(a,b,c,d)
    }
    function ft(a) {
        if (!a.G && gt(a)) {
            a.G = !0;
            var b = a.g.setInterval( () => {
                a.g.document.querySelector('[data-anchor-status="displayed"],[data-anchor-status="ready-to-display"]') || (a.g.clearInterval(b),
                ht(a))
            }
            , 200);
            G(a, () => {
                a.g.clearInterval(b)
            }
            )
        }
    }
    function gt(a) {
        a.l.D({
            C: 114
        });
        if (a.g.scrollY + a.g.innerHeight >= a.g.document.documentElement.scrollHeight)
            return a.l.D({
                C: 115
            }),
            !1;
        if (!Nr(Pr(), a.localStorage, a.j.Ne))
            return a.l.D({
                C: 116
            }),
            !1;
        a.l.D({
            C: 117
        });
        return !0
    }
    function ht(a) {
        var b = a.g.scrollY + a.g.innerHeight
          , c = a.g.document.documentElement.scrollHeight - b;
        a.button = bt(a.g, b + a.j.lc, a.g.innerWidth / 2, a.j.Pe, a.j.td);
        a.A = ct(a.g, b, c, {
            "webkit-mask-image": `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 5px, rgba(0, 0, 0, 1) ${a.j.lc}px, rgba(0, 0, 0, 1) 100%)`,
            "webkit-mask-repeat": "no-repeat",
            "webkit-mask-size": "cover",
            "mask-image": `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 5px, rgba(0, 0, 0, 1) ${a.j.lc}px, rgba(0, 0, 0, 1) 100%)`,
            "mask-repeat": "no-repeat",
            "mask-size": "cover"
        });
        a.B = new at(a.g,b + a.j.td + a.j.lc + a.j.df);
        a.g.document.body.appendChild(a.button);
        a.g.document.body.appendChild(a.A);
        a.B.start();
        a.l.D({
            C: 118
        });
        var d = new IntersectionObserver(f => {
            for (let g of f) {
                if (!g.isIntersecting)
                    break;
                a.l.D({
                    C: 119
                });
                d.disconnect()
            }
        }
        ,{
            root: null,
            threshold: 0
        });
        d.observe(a.button);
        var e = () => {
            it(a);
            var f = {
                ib: a.g.performance.now()
            };
            for (let g of a.F)
                try {
                    g(f)
                } catch (k) {}
            a.l.D({
                C: 120
            })
        }
        ;
        a.button.addEventListener("click", e);
        G(a, () => {
            it(a);
            a.button?.removeEventListener("click", e)
        }
        )
    }
    function it(a) {
        a.button?.remove();
        a.A?.remove();
        a.B?.stop()
    }
    var et = class extends E {
        constructor(a, b, c, d=null) {
            super();
            this.g = a;
            this.j = b;
            this.l = c;
            this.localStorage = d;
            this.F = [];
            this.B = this.A = this.button = null;
            this.G = !1
        }
        listen(a) {
            ft(this);
            this.F.push(a)
        }
        dismiss() {
            it(this)
        }
        H() {
            it(this)
        }
    }
    ;
    var jt = class extends Ss {
        constructor(a, b, c, d, e, f, g=!1) {
            super(a, b, [4], g);
            this.fa = c;
            this.la = d;
            this.L = 0;
            this.X = null;
            this.G = [];
            var k = a.document.body.scrollHeight;
            k < a.innerHeight ? this.dispose() : (b = a.document.querySelectorAll("article"),
            e && b.length !== 1 ? this.dispose() : (this.G = [...b].filter(h => {
                var {height: n, top: l, bottom: m} = h.getBoundingClientRect();
                return m > 0 && m < a.innerHeight && l > 0 ? !1 : n / k >= f
            }
            ),
            this.G.length === 0 ? this.dispose() : this.init()))
        }
        j(a) {
            switch (this.L) {
            case 0:
                for (let b of this.G) {
                    let {bottom: c} = b.getBoundingClientRect();
                    c > 0 && c < this.g.innerHeight && (this.X = setTimeout( () => {
                        Rs(this, a + this.fa)
                    }
                    , this.fa),
                    this.L = 1)
                }
                break;
            case 1:
                this.T > -this.la || (clearTimeout(this.X),
                Rs(this, a))
            }
        }
    }
    ;
    var kt = class extends Ss {
        constructor(a, b, c=!1, d) {
            super(a, b, [7], c, !1, d);
            this.init()
        }
        j(a) {
            this.J && Rs(this, a)
        }
        dismiss() {
            var a = this.J;
            if (a) {
                var b = new Event("submit",{
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(b) && a.submit()
            }
        }
    }
    ;
    var lt = class extends Ss {
        constructor(a, b, c=!1) {
            super(a, b, [6], c);
            this.init()
        }
        j(a) {
            this.K !== null && Rs(this, a)
        }
    }
    ;
    var mt = class extends Ss {
        constructor(a, b, c) {
            super(a, b, [], !1);
            this.G = c;
            this.init()
        }
        j(a) {
            this.G(a) && Rs(this, a)
        }
    }
    ;
    var nt = class extends E {
        constructor(a, b, c, d, e, f, g, k=null) {
            super();
            this.A = !1;
            this.j = this.g = this.l = void 0;
            c.promise.then( () => void this.dispose());
            var h = n => {
                d(n) && this.dispose()
            }
            ;
            for (let n of b)
                switch (n) {
                case 2:
                    b = new Ys(a, () => void h(n),e.ma);
                    F(this, b);
                    e.ma || b.l.then( () => void c.resolve(n));
                    break;
                case 3:
                    if (yd() !== 0)
                        break;
                    b = new Ts(a, () => void h(n),e.ma);
                    F(this, b);
                    e.ma || b.l.then( () => void c.resolve(n));
                    break;
                case 4:
                    b = new Vs(a);
                    F(this, b);
                    b.listen(e.ma ? () => void h(n) : () => void c.resolve(n));
                    break;
                case 5:
                    b = Es(a, e.Xb);
                    F(this, b);
                    b.listen(e.ma ? () => void h(n) : () => void c.resolve(n));
                    break;
                case 6:
                    b = new jt(a, () => void h(n),e.Gd,e.Ed,e.Fd,e.Dd ?? -1,e.ma);
                    F(this, b);
                    e.ma || b.l.then( () => void c.resolve(n));
                    break;
                case 8:
                    b = new mt(a, () => void h(n),e.cf);
                    F(this, b);
                    b.l.then( () => void c.resolve(n));
                    break;
                case 9:
                    b = new $s(a, () => void h(n),e.ma,e.Bb);
                    F(this, b);
                    e.ma || b.l.then( () => void c.resolve(n));
                    this.A = b.H;
                    break;
                case 10:
                    this.l = new lt(a, () => void h(n),e.ma);
                    F(this, this.l);
                    e.ma || this.l.l.then( () => void c.resolve(n));
                    break;
                case 11:
                    this.g = dt(a, e.Oe, f, k);
                    F(this, this.g);
                    this.g.listen(e.ma ? () => void h(n) : () => void c.resolve(n));
                    break;
                case 15:
                    this.j = new kt(a, () => void h(n),e.ma,g),
                    F(this, this.j),
                    e.ma || this.j.l.then( () => void c.resolve(n))
                }
        }
        F() {
            return this.A
        }
        B() {
            return this.l?.na()
        }
        dismiss() {
            this.g?.dismiss();
            this.j?.dismiss()
        }
        G() {
            this.g?.H()
        }
    }
    ;
    const ot = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1,
        NOSCRIPT: 1
    }
      , pt = {
        IMG: " ",
        BR: "\n"
    };
    function qt(a, b, c, d) {
        if (!(a.nodeName in ot))
            if (a.nodeType === 3)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in pt)
                d && a.nodeName === "IMG" && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")),
                b.push(pt[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    qt(a, b, c, d),
                    a = a.nextSibling
    }
    var rt = / \xAD /g
      , st = /\xAD/g
      , tt = /\u200B/g
      , ut = / +/g
      , vt = /^\s*/;
    function wt(a) {
        var b = new Set;
        a.forEach(c => {
            switch (c) {
            case 1:
                b.add(1);
                break;
            case 2:
                b.add(2);
                break;
            case 3:
                b.add(3);
                break;
            case 5:
                b.add(5);
                break;
            case 6:
                b.add(6);
                break;
            case 8:
                b.add(8);
                break;
            case 9:
                b.add(9);
                break;
            case 10:
                b.add(10);
                break;
            case 11:
                b.add(11);
                break;
            case 12:
                b.add(4);
                break;
            case 13:
                b.add(12);
                break;
            case 14:
                b.add(13);
                break;
            case 15:
                b.add(14);
                break;
            case 17:
                b.add(16);
                break;
            case 16:
                b.add(15);
                break;
            case 18:
                b.add(17)
            }
        }
        );
        return b
    }
    function xt(a) {
        switch (a) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 5:
            return 5;
        case 6:
            return 6;
        case 8:
            return 8;
        case 9:
            return 9;
        case 10:
            return 10;
        case 11:
            return 11;
        case 4:
            return 12;
        case 12:
            return 13;
        case 13:
            return 14;
        case 14:
            return 15;
        case 16:
            return 17;
        case 17:
            return 18;
        case 15:
            return 16;
        default:
            return 0
        }
    }
    ;function yt(a) {
        a = a.match(mf);
        var b = a[6];
        return (a[5] || "") + (b ? "?" + b : "") || "/"
    }
    function zt(a, b) {
        b ? a.j = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b","ig") : a.j = null
    }
    function At(a, b, c, d, e) {
        if (!c)
            return a.g?.D({
                C: 83
            }),
            !1;
        switch (b.target) {
        case "_top":
        case "_parent":
            break;
        case "":
        case "_self":
            if (e)
                return a.g?.D({
                    C: 84
                }),
                !1;
            break;
        default:
            return a.g?.D({
                C: 85
            }),
            !1
        }
        return d ? !a.B && Bt(a, d) && yt(c) === a.F ? (a.g?.D({
            C: 70
        }),
        !1) : !0 : (a.g?.D({
            C: 86
        }),
        !1)
    }
    function Bt(a, b) {
        return b.replace(Ct, "") === a.hostname.replace(Ct, "")
    }
    function Dt(a, b, c, d=!1) {
        if (!d && Ga(["data-google-vignette", "data-google-interstitial"], f => b.getAttribute(f) === "false" || !1))
            return a.g?.D({
                C: 82
            }),
            !1;
        var e = (d = b.href) && (d.match(mf)[3] || null);
        if (!At(a, b, d, e, c))
            return !1;
        a.l = !!e && Bt(a, e);
        c = !c && !Lm(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d);
        if (!a.A && a.l)
            return a.g?.D({
                C: 123
            }),
            !1;
        a.l || c || a.g?.D({
            C: 87
        });
        return a.l || c
    }
    function Et(a, b) {
        if (!b || !a.j)
            return [];
        var c = [];
        qt(b, c, !0, !0);
        b = c.join("");
        b = b.replace(rt, " ").replace(st, "");
        b = b.replace(tt, "");
        b = b.replace(ut, " ");
        b !== " " && (b = b.replace(vt, ""));
        if (!b)
            return [];
        a = b.match(a.j);
        b = [];
        for (c = 0; a && c < a.length; c++) {
            let d = a[c].toLowerCase();
            Ca(b, d) >= 0 || b.push(d)
        }
        return b
    }
    var Ft = class {
        constructor(a, b, c, d=!0) {
            this.g = b;
            this.B = c;
            this.A = d;
            this.j = null;
            this.l = !1;
            this.hostname = a.match(mf)[3] || "";
            this.F = yt(a)
        }
    }
      , Ct = /^(www\.|m\.|mobile\.)*/i;
    async function Gt(a) {
        if (a.scheduler?.yield)
            return await a.scheduler.yield(),
            1;
        if (a.scheduler?.postTask)
            return await new Promise(b => void a.scheduler.postTask(b, {
                priority: "user-blocking"
            })),
            2;
        await new Promise(b => {
            a.setTimeout( () => void b(), 0)
        }
        );
        return 3
    }
    ;function Ht(a) {
        a.L && a.L.dispose();
        var b = gp(a.j, a.K.contentWindow, a.M, a.pinger, a.B.Ob);
        F(a, b);
        bp(b).then( () => {
            a.X.j?.setAttribute("data-vignette-loaded", "true");
            a.J.Nc || (a.J.Nc = Ve())
        }
        );
        cp(b).then(c => void It(a, c));
        dp(b).then( () => {
            a.g.D({
                C: 23
            });
            a.J.Kc = !0
        }
        );
        return b
    }
    function Jt(a) {
        a.g.D({
            C: 41
        });
        if (a.l.Ga)
            a.g.D({
                C: 42
            });
        else {
            a.l.Ga = a.M.ea(527, c => {
                if (a.B.Xa)
                    if (a.g.D({
                        C: 44
                    }),
                    c)
                        if (c.isTrusted)
                            if (a.A.ta)
                                a.g.D({
                                    C: 50
                                });
                            else if (a.N)
                                a.g.D({
                                    C: 47
                                });
                            else if (a.l.da)
                                a.g.D({
                                    C: 74
                                });
                            else {
                                var d = Kt(a, c);
                                d ? Lt(a, d) ? (a.l.da = d,
                                c.stopImmediatePropagation(),
                                c.preventDefault(),
                                a.B.je && (U(a.j).clickTriggeredInterstitialMayBeDisplayed = !0),
                                Mt(a, a.B.Wb && a.l.da.classList.contains("google-anno-oc") ? 16 : 1),
                                a.g.D({
                                    C: 53
                                })) : a.g.D({
                                    C: 49
                                }) : a.g.D({
                                    C: 48
                                })
                            }
                        else
                            a.g.D({
                                C: 73
                            });
                    else
                        a.g.D({
                            C: 45
                        });
                else
                    Nt(a, c)
            }
            );
            if (a.l.Ga !== null) {
                let c = a.l.Ga;
                L(a.j.document, "click", d => {
                    c(d)
                }
                , ze)
            }
            var b = a.j.frames;
            for (let c = 0; c < b.length; c++)
                try {
                    a.ya(b[c].frameElement) || L(b[c].document, "click", a.l.Ga, ze)
                } catch (d) {}
            a.g.D({
                C: 43
            })
        }
    }
    function Mt(a, b) {
        a.g.D({
            C: 28
        });
        switch (b) {
        case 1:
            a.g.D({
                C: 66
            });
            break;
        case 2:
            a.g.D({
                C: 67
            });
            break;
        case 3:
            a.g.D({
                C: 68
            });
            break;
        case 4:
            a.g.D({
                C: 69
            });
            break;
        case 5:
            a.g.D({
                C: 71
            });
            break;
        case 6:
            a.g.D({
                C: 72
            });
            break;
        case 8:
            a.g.D({
                C: 89
            });
            break;
        case 9:
            a.g.D({
                C: 103
            });
            break;
        case 10:
            a.g.D({
                C: 106
            });
            break;
        case 11:
            a.g.D({
                C: 109
            });
            break;
        case 12:
            a.g.D({
                C: 112
            });
            break;
        case 13:
            a.g.D({
                C: 113
            });
            break;
        case 14:
            a.g.D({
                C: 121
            });
            break;
        case 15:
            a.g.D({
                C: 127
            });
            break;
        case 16:
            a.g.D({
                C: 130
            });
            break;
        case 17:
            a.g.D({
                C: 132
            })
        }
        if (!Lt(a))
            return a.g.D({
                C: 29
            }),
            !1;
        a.triggerType = b;
        var c = a.B.Xa ? b === 1 && jp("a")(a.l.da) : b === 1, d;
        (d = a.A).zb || (d.zb = !(c || b === 9 || b === 10));
        if (!a.Ca())
            return a.g.D({
                C: 30
            }),
            c && a.l.ra ? (a.g.D({
                C: 31
            }),
            Ot(a, a.l.ra.href)) : c && a.l.da && (a.g.D({
                C: 75
            }),
            a.l.da.click(),
            a.l.da = void 0),
            !1;
        a.A.ta = Date.now();
        U(a.j).wasReactiveAdVisible[8] = !0;
        a.triggerType === 10 && (a.A.Hb = a.j.location.href);
        c && a.l.ra && (a.A.Hb = a.l.ra.href);
        ap(a.L.Ub, {
            eventType: "triggerType",
            payload: {
                triggerType: xt(b)
            }
        });
        a.qb || t.IntersectionObserver || ap(a.L.Ub, {
            eventType: "visible"
        });
        a.l.ra ? Pt(a, a.l.ra.href) : a.l.da && jp("a")(a.l.da) && (Pt(a, a.l.da.href),
        a.g.D({
            C: 76
        }));
        Qt(a);
        L(a.j, "pagehide", a.M.ea(528, () => {
            Rt(a)
        }
        ));
        c && a.sb?.(a.A.ta);
        qs(a.X, !0);
        var e = () => {
            var f = a.g
              , g = xt(b)
              , k = a.H
              , {Od: h} = f.g();
            if (f.hb.ab(h)) {
                var n = f.params.cd
                  , l = f.params.Ab
                  , m = f.params.wb
                  , p = f.params.xb
                  , q = f.params.mb
                  , w = f.pinger;
                h = Ff(h);
                f = f.j++;
                f = vc(h, 1, Hb(f), 0);
                f = Ef(f);
                l = Nc(f, 11, l);
                n = Mc(l, 8, n);
                m = Oc(wf([m]));
                m = Gc(n, 5, m);
                p = Nc(m, 9, p);
                q = q();
                q = uc(p, 12, q, Gb);
                p = new Df;
                k = Nc(p, 2, k);
                p = new Cf;
                g = lc(p, 1, Eb(g));
                g = ec(g);
                g = Gc(k, 1, g);
                g = ec(g);
                g = Hc(q, 6, Hf, g);
                Wf(w, ec(g))
            }
        }
        ;
        a.B.hf ? Gt(a.j).then( () => {
            e()
        }
        ) : e();
        a.G?.dispose();
        a.g.D({
            C: 32
        });
        return !0
    }
    function It(a, b) {
        a.g.D({
            C: 33
        });
        if (b.dismissSource === 2 && (a.g.D({
            C: 128
        }),
        a.B.Se && a.triggerType === 3))
            return;
        a.A.zb ? (St(a) ? (a.g.D({
            C: 34
        }),
        Tt(a)) : (a.g.D({
            C: 35
        }),
        Rt(a)),
        a.G?.dismiss(),
        a.B.Xa && a.l.da && (a.l.da.click(),
        jp("input")(a.l.da) && a.l.da.focus(),
        a.l.da = void 0),
        a.g.D({
            C: 36
        })) : (t.setTimeout( () => {
            Rt(a);
            a.G?.dismiss()
        }
        , 1E3),
        a.triggerType === 9 && (a.j.history.back(),
        a.j.history.back()),
        a.B.Xa && a.l.da ? (a.A.Lb && (a.A.Fb = !1),
        a.B.re && St(a) && a.j.history.back(),
        a.l.da.click(),
        a.l.da = void 0) : a.A.Hb ? (a.A.Lb && (a.A.Fb = !1),
        Ot(a, a.A.Hb)) : a.g.D({
            C: 37
        }))
    }
    function St(a) {
        return a.j.location.hash.indexOf("google_vignette") !== -1
    }
    function Tt(a) {
        var b = a.j.location.href;
        b.includes("about:blank#google_vignette") ? a.g.D({
            C: 79
        }) : (a.g.D({
            C: 77
        }),
        a.j.history.replaceState(a.j.history.state, "", b.replace("#google_vignette", "")));
        Rt(a)
    }
    function Rt(a) {
        a.g.D({
            C: 38
        });
        a.A.ta || (a.g.D({
            C: 39
        }),
        a.L = Ht(a));
        a.A.Ya = !0;
        a.l.Ga && (O(a.j.document, "click", a.l.Ga),
        a.l.Ga = void 0);
        a.A.gb && a.A.gb.parentNode && (a.A.gb.parentNode.removeChild(a.A.gb),
        a.A.gb = void 0);
        a.A.fb && a.A.fb.parentNode && (a.A.fb.parentNode.removeChild(a.A.fb),
        a.A.fb = void 0);
        qs(a.X, !1);
        a.ua();
        a.g.D({
            C: 40
        })
    }
    function Ot(a, b) {
        a = a.j.location;
        b = kd.test(b) ? b : void 0;
        b !== void 0 && a.replace(b)
    }
    function Qt(a) {
        if (!St(a)) {
            let b = new URL(a.j.location.href);
            b.hash = "google_vignette";
            a.G?.F() && a.triggerType !== 9 && !a.j.location.href.includes("about:blank") ? history.replaceState(a.j.history.state, "", b) : a.B.te && !a.j.location.href.includes("about:blank") ? history.pushState(a.j.history.state, "", b) : a.j.location.hash = "google_vignette"
        }
        a.A.Lb = a.M.ea(526, () => {
            a.g.D({
                C: 62
            });
            if (a.A.Fb) {
                if (St(a))
                    a.g.D({
                        C: 64
                    }),
                    a.B.Xa ? a.l.da && (a.l.da.click(),
                    a.l.da = void 0) : Ot(a, a.l.ra.href);
                else {
                    let b = a.G?.B();
                    !a.pa && a.triggerType === 10 && b && (Ot(a, b),
                    a.pa = !0);
                    a.A.Hc || a.g.D({
                        C: 80
                    });
                    a.A.Hc = !1;
                    Rt(a);
                    a.G?.G()
                }
                a.g.D({
                    C: 65
                })
            } else
                a.g.D({
                    C: 63
                })
        }
        );
        t.setTimeout(ra(L, a.j, "hashchange", a.A.Lb), 0)
    }
    function Lt(a, b) {
        a.g.D({
            C: 10
        });
        var c = Ve()
          , d = U(a.j).wasReactiveAdVisible[9];
        b = b ? Et(a.F, b) : [];
        var e;
        if (!(e = a.B.Md)) {
            var f = a.j;
            e = P(f);
            f = f.innerWidth;
            e = Math.abs((e && f ? e / f : 0) - 1) < .05
        }
        f = a.requestedSize.width < a.requestedSize.height === vg(a.j);
        if (c - a.Ra >= a.zc * 60 * 1E3)
            return a.g.D({
                C: 11
            }),
            !1;
        a: switch (a.ka.tag) {
        case 0:
            c = !0;
            break a;
        case 1:
            c = !1;
            break a;
        default:
            c = !1
        }
        if (!c)
            return a.g.D({
                C: 12
            }),
            !1;
        if (a.J.Kc)
            return a.g.D({
                C: 13
            }),
            !1;
        if (St(a))
            return a.g.D({
                C: 14
            }),
            !1;
        if (!a.J.Nc)
            return a.g.D({
                C: 15
            }),
            !1;
        if (!a.la && d)
            return a.g.D({
                C: 16
            }),
            !1;
        a.la && a.g.D({
            C: 17
        });
        d && a.g.D({
            C: 18
        });
        if (b.length)
            return a.g.D({
                C: 19
            }),
            !1;
        if (!e)
            return a.g.D({
                C: 20
            }),
            !1;
        if (!f)
            return a.g.D({
                C: 21
            }),
            !1;
        if (U(a.j).adIntentsPageState.isDrawerVisible)
            return a.g.D({
                C: 124
            }),
            !1;
        if (a.B.yd && a.j.document.getElementsByClassName("fc-monetization-dialog-container").length > 0)
            return a.g.D({
                C: 125
            }),
            !1;
        a.g.D({
            C: 22
        });
        return !0
    }
    function Ut(a, b, c) {
        a = Gd("LINK", a.j.document);
        a.setAttribute("rel", c);
        a.setAttribute("href", b);
        return a
    }
    function Pt(a, b) {
        var c;
        if (!(c = !a.B.Qe)) {
            a: {
                try {
                    if (!HTMLScriptElement.supports?.("speculationrules") || (new URL(b)).origin !== a.j.origin) {
                        var d = !1;
                        break a
                    }
                    let k = a.j.document.createElement("script");
                    k.type = "speculationrules";
                    c = k;
                    let h = JSON.stringify({
                        prerender: [{
                            urls: [b]
                        }]
                    }).replace(/</g, "\\u003C")
                      , n = hd();
                    var e = n ? n.createScript(h) : h;
                    var f = new nd(e);
                    if (f instanceof nd)
                        var g = f.g;
                    else
                        throw Error("");
                    c.textContent = g;
                    od(c);
                    a.j.document.body.append(k);
                    d = !0;
                    break a
                } catch (k) {
                    a.M.Ja(1334, k);
                    d = !1;
                    break a
                }
                d = void 0
            }
            c = !d
        }
        c && (a.A.gb = Ut(a, b, "prerender"),
        a.A.fb = Ut(a, b, "prefetch"),
        a.j.document.body.appendChild(a.A.gb),
        a.j.document.body.appendChild(a.A.fb))
    }
    function Kt(a, b) {
        for (b = b.target; b; ) {
            if ("nodeName"in b && b.nodeName === "A") {
                if (Dt(a.F, b, b.ownerDocument !== a.j.document, a.B.Ld))
                    return b;
                break
            } else {
                if (a.B.qe && jp("button")(b))
                    return b;
                if (a.B.se && jp("input")(b))
                    return b;
                if (a.B.Wb && jp("span")(b) && b.classList.contains("google-anno-oc"))
                    return b;
                if (a.B.Wb && jp("div")(b) && b.classList.contains("google-anno-oc"))
                    return b
            }
            b = "parentElement"in b ? b.parentElement : null
        }
        return null
    }
    function Nt(a, b) {
        a.g.D({
            C: 44
        });
        if (b)
            if (a.B.Cd && !b.isTrusted)
                a.g.D({
                    C: 73
                });
            else if (b.defaultPrevented)
                a.g.D({
                    C: 46
                });
            else if (a.A.ta)
                a.g.D({
                    C: 50
                });
            else if (a.A.Hb)
                a.g.D({
                    C: 51
                });
            else if (a.N)
                a.g.D({
                    C: 47
                });
            else if (a.l.ra)
                a.g.D({
                    C: 52
                });
            else {
                var c = Kt(a, b);
                c ? Lt(a, c) ? (a.l.ra = c,
                De(b),
                b.preventDefault = () => b && (b.preventDefaultTriggered = !0),
                t.setTimeout(qa(a.rb, a, b), 0),
                a.B.je && (U(a.j).clickTriggeredInterstitialMayBeDisplayed = !0),
                a.g.D({
                    C: 53
                })) : a.g.D({
                    C: 49
                }) : a.g.D({
                    C: 48
                })
            }
        else
            a.g.D({
                C: 45
            })
    }
    var Vt = class extends Ap {
        constructor(a, b, c, d, e, f, g, k, h, n) {
            super(a, b, c, e, {
                heavyAdInterventionResponse: k.Kd
            });
            this.X = d;
            this.requestedSize = f;
            this.B = k;
            this.g = n;
            this.triggerType = this.localStorage = null;
            this.Ra = Ve();
            this.la = g["i-fvs"] === "true";
            this.H = g.qid;
            this.F = new Ft(a.location.href,this.g,this.B.Xa,h.has(1) || h.has(13));
            this.zc = k.zc || 1440;
            this.qb = g.iobs === "true" && "IntersectionObserver"in this.j;
            zt(this.F, g.stop_word?.split(";") ?? null);
            this.J = {
                Kc: !1
            };
            this.l = {};
            this.ka = {
                tag: 0
            };
            this.A = {
                ef: !0,
                Ya: !1,
                zb: !1,
                Fb: !0,
                Hc: !1
            };
            this.pa = !1;
            this.L = Ht(this);
            Jt(this);
            if (h.size) {
                b = new Le;
                b.promise.then(l => {
                    this.A.ta || this.N || Mt(this, l)
                }
                );
                this.G = new nt(a,h,b,l => this.A.ta || this.N ? !1 : Mt(this, l),k,this.g,l => Et(this.F, l).length > 0,this.localStorage);
                F(this, this.G);
                for (let l of h)
                    switch (l) {
                    case 1:
                        this.g.D({
                            C: 91
                        });
                        break;
                    case 2:
                        this.g.D({
                            C: 92
                        });
                        break;
                    case 3:
                        this.g.D({
                            C: 93
                        });
                        break;
                    case 4:
                        this.g.D({
                            C: 94
                        });
                        break;
                    case 5:
                        this.g.D({
                            C: 95
                        });
                        break;
                    case 6:
                        this.g.D({
                            C: 96
                        });
                        break;
                    case 8:
                        this.g.D({
                            C: 98
                        });
                        break;
                    case 9:
                        this.g.D({
                            C: 104
                        });
                        break;
                    case 10:
                        this.g.D({
                            C: 105
                        });
                        break;
                    case 11:
                        this.g.D({
                            C: 108
                        });
                        break;
                    case 12:
                        this.g.D({
                            C: 110
                        });
                        break;
                    case 13:
                        this.g.D({
                            C: 111
                        });
                        break;
                    case 14:
                        this.g.D({
                            C: 122
                        });
                        break;
                    case 15:
                        this.g.D({
                            C: 126
                        });
                        break;
                    case 16:
                        this.g.D({
                            C: 129
                        });
                        break;
                    case 17:
                        this.g.D({
                            C: 131
                        })
                    }
            }
            if (k.Ec?.length && (h = We(a))) {
                let l = new Zs(a,h,e,this.H,k.Ec,k.ma);
                F(this, l);
                this.sb = m => {
                    l.g(2, m - Ye(a))
                }
            }
        }
        W(a, b) {
            a["i-blur"] = () => {
                this.g.D({
                    C: 27
                });
                this.A.zb = !0;
                this.A.Lb && (this.A.Fb = !0)
            }
            ;
            a["i-no"] = c => {
                this.g.D({
                    C: 26
                });
                this.ka = {
                    tag: 1,
                    ff: c.i_tslv ? c.i_tslv : void 0
                }
            }
            ;
            if (b.heavyAdInterventionResponse) {
                let c = gb(b.heavyAdInterventionResponse);
                if (c) {
                    let {me: d, ke: e} = xs();
                    a["i-hai-aux"] = d;
                    e.then(f => {
                        F(this, f);
                        f.promise.then( () => c())
                    }
                    )
                }
            }
        }
        jb() {
            this.g.D({
                C: 24
            });
            super.jb();
            St(this) && (this.B.Xa ? this.l.da && (this.l.da.click(),
            this.l.da = void 0) : this.l.ra && Ot(this, this.l.ra.href),
            Rt(this));
            this.l.Ga && (O(this.j.document, "click", this.l.Ga),
            this.l.Ga = void 0);
            this.g.D({
                C: 25
            })
        }
        ua() {}
        ya() {
            return !1
        }
        rb(a) {
            this.g.D({
                C: 54
            });
            this.A.ta ? this.g.D({
                C: 56
            }) : this.N ? this.g.D({
                C: 57
            }) : this.l.ra ? a.preventDefaultTriggered ? (this.g.D({
                C: 59
            }),
            this.l.ra = void 0) : Dt(this.F, this.l.ra, this.l.ra.ownerDocument !== this.j.document, this.B.Ld) ? Lt(this) ? (Mt(this, 1),
            this.g.D({
                C: 61
            })) : (this.g.D({
                C: 60
            }),
            Ot(this, this.l.ra.href)) : (this.g.D({
                C: 55
            }),
            Ot(this, this.l.ra.href)) : this.g.D({
                C: 58
            })
        }
        Ca() {
            return !0
        }
    }
    ;
    function Wt(a, b) {
        b = b || a.j.document;
        if (!b.getElementById("vignette-style-id")) {
            var c = ie(b ? new he(fe(b)) : sa || (sa = new he), "STYLE");
            c.id = "vignette-style-id";
            c.textContent = "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";
            b.head.appendChild(c);
            a.O.push(c)
        }
    }
    function Xt(a, b, c) {
        var d = 0;
        for (let e = b.links.length; e >= 0; e--) {
            let f = b.links[e];
            f && (f.classList.remove("google_vignette_inst"),
            Dt(a.F, f, c) && !Et(a.F, f).length && (d++,
            f.classList.add("google_vignette_inst")))
        }
        return d
    }
    var Yt = class extends Vt {
        constructor(a, b, c, d, e, f, g, k, h, n, l, m) {
            var p = [];
            T(fk) && yd() === 0 && p.push(101);
            T(ik) && p.push(102);
            T(hk) && p.push(103);
            T(ek) && p.push(104);
            T(gk) && p.push(105);
            super(a, c, f, new ws(a,c,g), Hl, e, n, {
                Ec: p,
                Ob: {
                    oe: 1,
                    version: Lf()
                },
                Md: !0,
                Kd: null,
                Xa: T(Fj) || m.has(14),
                Cd: T(Aj),
                re: T(Gj),
                qe: T(Ej),
                se: T(Hj),
                te: T(Ij),
                Gd: yd() !== 0 ? ok(Vj) : ok(Uj),
                Ed: ok(Wj),
                Fd: T(Xj),
                Dd: ok(Yj),
                Xb: ok(Zj),
                yd: T(jk),
                Bb: T(lk),
                ma: T(mk),
                Wb: T(kk) && m.has(16)
            }, m, l);
            this.Qa = b;
            this.Na = d;
            this.Oa = k;
            this.ob = h;
            this.O = [];
            this.T = 0;
            l.D({
                C: 88
            });
            if (this.qa = il(this.j.location, "google_ia_debug"))
                this.fa(),
                this.T = t.setInterval(qa(this.fa, this), 5E3)
        }
        ua() {
            if (this.qa) {
                for (let b = 0; b < this.O.length; ++b) {
                    var a = this.O[b];
                    de(a.ownerNode || a.owningElement || a)
                }
                this.O = [];
                this.T && t.clearInterval(this.T)
            }
        }
        fa() {
            var a = Xt(this, this.j.document, !1);
            Wt(this);
            var b = this.j.frames;
            for (let c = 0; c < b.length; c++)
                try {
                    a += Xt(this, b[c].document, !0),
                    Wt(this, b[c].document)
                } catch (d) {}
            b = np(this.j, 1);
            b != null && b.setLinksInstrumented(a)
        }
        Ca() {
            var a = go(this.Oa, this.Qa)
              , b = !!a && Mq(a);
            return this.Na || !b || Or(a, this.ob)
        }
        ya(a) {
            return /aswift_[0-9]+/.test(a.id)
        }
    }
    ;
    function or(a) {
        a.j && Je(a.g, a.environment)
    }
    var qr = class {
        constructor(a) {
            var b = new Cl
              , c = new Ke;
            this.environment = "WEB_ADSENSE";
            this.g = c;
            this.j = b.ab(a)
        }
    }
    ;
    function Zt(a) {
        var b = a.j.document.createElement("span")
          , c = Math.round(($t(a) - 50) / 2);
        H(b, {
            background: "#FAFAFA",
            position: "absolute",
            left: V(c),
            right: V(c),
            top: V(au(a) + 5),
            "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
        });
        b.className = `${a.l}-side-rail-dismiss-btn`;
        b.appendChild(bu(a));
        var d = () => {
            a.G()
        }
        ;
        L(b, "click", d);
        G(a, () => O(b, "click", d));
        return b
    }
    function au(a) {
        return Number(we(a.g).height || a.g.height)
    }
    function $t(a) {
        return Number(we(a.g).width || a.g.width)
    }
    function bu(a) {
        var b = a.j.document
          , c = b.createElementNS("http://www.w3.org/2000/svg", "svg");
        H(c, {
            position: "absolute",
            top: "0px",
            display: "block",
            width: V(50),
            height: V(30),
            "margin-top": "-5px",
            transform: "none",
            "pointer-events": "initial"
        });
        var d = b.createElementNS("http://www.w3.org/2000/svg", "defs")
          , e = b.createElementNS("http://www.w3.org/2000/svg", "filter");
        a = `${a.l}-side-rail-drop-shadow`;
        e.setAttribute("id", a);
        e.setAttribute("filterUnits", "userSpaceOnUse");
        e.setAttribute("color-interpolation-filters", "sRGB");
        var f = b.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        f.setAttribute("in", "SourceAlpha");
        f.setAttribute("result", "TransferredAlpha");
        var g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        f.setAttribute("in", "TransferredAlpha");
        f.setAttribute("stdDeviation", "2");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        f.setAttribute("dx", "0");
        f.setAttribute("dy", "0");
        f.setAttribute("result", "offsetblur");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        f.appendChild(b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        g = b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        g.setAttribute("in", "SourceGraphic");
        f.appendChild(g);
        e.appendChild(f);
        d.appendChild(e);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("d", "M5,5 L5,17 A8,8 0 0,0 13,25 L37,25 A8,8 0 0,0 45,17 L45,5 Z");
        d.setAttribute("stroke", "#FAFAFA");
        d.setAttribute("stroke-width", "1");
        d.setAttribute("fill", "#FAFAFA");
        d.style.setProperty("filter", `url(#${a})`);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "rect");
        d.setAttribute("x", "0");
        d.setAttribute("y", "0");
        d.setAttribute("width", "50");
        d.setAttribute("height", "5");
        d.style.setProperty("fill", "#FAFAFA");
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "g");
        d.setAttribute("stroke", "#616161");
        d.setAttribute("stroke-width", "2px");
        d.setAttribute("stroke-linecap", "square");
        e = b.createElementNS("http://www.w3.org/2000/svg", "line");
        e.setAttribute("x1", "18");
        e.setAttribute("y1", "18");
        e.setAttribute("x2", "25");
        e.setAttribute("y2", "12");
        d.appendChild(e);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "25");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "32");
        b.setAttribute("y2", "18");
        d.appendChild(b);
        c.appendChild(d);
        return c
    }
    var cu = class extends E {
        constructor(a, b, c, d, e) {
            super();
            this.g = a;
            this.j = b;
            this.A = c;
            this.l = d;
            this.G = e;
            a = this.j.document.createElement("span");
            a.className = `${this.l}-side-rail-edge`;
            H(a, {
                background: "#FAFAFA",
                position: "absolute",
                left: "0px",
                top: V(au(this)),
                width: V($t(this)),
                height: V(5),
                "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
            });
            this.B = a;
            this.F = Zt(this);
            this.A.appendChild(this.B);
            this.A.appendChild(this.F)
        }
    }
    ;
    const du = ["body", "html"];
    function eu(a, b) {
        return ge(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c), !0) !== null
    }
    function fu(a) {
        return ge(a, b => b.nodeType === Node.ELEMENT_NODE && b.hasAttribute("google-side-rail-overlap"), !0)?.getAttribute("google-side-rail-overlap") || null
    }
    function gu(a, b) {
        return ge(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed", !0)
    }
    function hu(a) {
        var b = [];
        for (let c of a.document.querySelectorAll("*")) {
            let d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }
    function iu(a, b) {
        var {top: c, left: d, bottom: e, right: f} = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }
    function ju(a, b, c=!1) {
        var d = fu(a);
        if (d === "true")
            return !0;
        if (d === "false" || c && !b.flags.Yd && !b.flags.Wc)
            return !1;
        if (b.flags.Zd && du.includes(a.tagName.toLowerCase()))
            return !0;
        if (b.flags.Wc) {
            let {width: e, height: f, top: g} = a.getBoundingClientRect();
            a = f >= b.R * .25;
            d = e >= b.V * .9;
            return c ? d && a : d ? a ? !0 : g + (b.U.scrollY || b.U.pageYOffset) > b.R * .15 : !1
        }
        c = a.offsetHeight >= b.R * .25;
        return a.offsetWidth >= b.V * .9 && c
    }
    function ku(a) {
        return Math.round(Math.round(a / 10) * 10)
    }
    function lu(a) {
        return `${a.position}-${ku(a.V)}x${ku(a.R)}-${ku(a.scrollY + a.eb)}Y`
    }
    function mu(a) {
        return `f-${lu({
            position: a.position,
            eb: a.eb,
            scrollY: 0,
            V: a.V,
            R: a.R
        })}`
    }
    function nu(a, b) {
        a = Math.min(a ?? Infinity, b ?? Infinity);
        return a !== Infinity ? a : 0
    }
    function ou(a, b, c) {
        var d = U(c.U).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0)
                  , g = Math.min(e.bottom + 10, c.R)
                  , k = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.V);
                for (var h = c.V * .3; f <= g; f += 10) {
                    if (e > 0 && k < h) {
                        var n = mu({
                            position: "left",
                            eb: f,
                            V: c.V,
                            R: c.R
                        });
                        b.set(n, nu(b.get(n), k))
                    }
                    if (k < c.V && e > c.V - h) {
                        n = mu({
                            position: "right",
                            eb: f,
                            V: c.V,
                            R: c.R
                        });
                        let l = c.V - e;
                        b.set(n, nu(b.get(n), l))
                    }
                }
                d.add(a)
            }
        }
    }
    function pu(a, b) {
        var c = b.U
          , d = b.flags
          , e = `f-${ku(b.V)}x${ku(b.R)}`;
        a.has(e) || (a.set(e, 0),
        e = hu(c),
        d.Ic || d.jc ? (qu(a, b, e.filter(f => iu(c, f))),
        ru(c, e.filter(f => !iu(c, f)).concat(d.jc ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : qu(a, b, e))
    }
    function qu(a, b, c) {
        var d = b.bb
          , e = b.U;
        U(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (let f of c)
            eu(f, d) || ju(f, b, !0) || ou(f, a, b)
    }
    function su(a) {
        if (a.V < 1200 || a.R < 650)
            return null;
        var b = U(a.U).sideRailAvailableSpace;
        pu(b, {
            U: a.U,
            V: a.V,
            R: a.R,
            bb: a.bb,
            flags: a.flags
        });
        var c = []
          , d = a.R * .9
          , e = zg(a.U)
          , f = (a.R - d) / 2
          , g = f
          , k = d / 7;
        for (var h = 0; h < 8; h++) {
            var n = c
              , l = n.push;
            a: {
                var m = g;
                var p = a.position
                  , q = b
                  , w = {
                    U: a.U,
                    V: a.V,
                    R: a.R,
                    bb: a.bb,
                    flags: a.flags
                };
                let I = mu({
                    position: p,
                    eb: m,
                    V: w.V,
                    R: w.R
                })
                  , Z = lu({
                    position: p,
                    eb: m,
                    scrollY: e,
                    V: w.V,
                    R: w.R
                });
                if (q.has(Z)) {
                    m = nu(q.get(I), q.get(Z));
                    break a
                }
                let M = p === "left" ? 20 : w.V - 20
                  , u = M;
                p = w.V * .3 / 5 * (p === "left" ? 1 : -1);
                let v = 0
                  , R = !1;
                for (let N = 0; N < 6; N++) {
                    var A = Np(w.U.document, {
                        x: Math.round(u),
                        y: Math.round(m)
                    });
                    let X = gu(A, w.U)
                      , K = eu(A, w.bb);
                    A = ju(A, w) || K;
                    if (X === null || K)
                        if (A)
                            v = Math.round(Math.abs(u - M) + 20);
                        else if (u !== M)
                            u -= p,
                            p /= 2;
                        else {
                            v = 0;
                            break
                        }
                    else {
                        q.delete(Z);
                        R = !0;
                        if (!X || !ju(X, w, !0)) {
                            ou(X, q, w);
                            v = q.get(I) ?? 0;
                            break
                        }
                        v = Math.round(Math.abs(u - M) + 20)
                    }
                    u += p
                }
                R || q.set(Z, v);
                m = v
            }
            l.call(n, m);
            g += k
        }
        b = a.he;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        l = [];
        k = Array(c.length).fill(0);
        for (n = 0; n < c.length; n++) {
            for (; l.length !== 0 && c[l[l.length - 1]] >= c[n]; )
                l.pop();
            k[n] = l.length === 0 ? 0 : l[l.length - 1] + 1;
            l.push(n)
        }
        l = [];
        h = c.length - 1;
        n = Array(c.length).fill(0);
        for (m = h; m >= 0; m--) {
            for (; l.length !== 0 && c[l[l.length - 1]] >= c[m]; )
                l.pop();
            n[m] = l.length === 0 ? h : l[l.length - 1] - 1;
            l.push(m)
        }
        l = null;
        for (h = 0; h < c.length; h++)
            if (m = {
                position: e,
                width: Math.round(c[h]),
                height: Math.round((n[h] - k[h] + 1) * d),
                offsetY: f + k[h] * d
            },
            q = m.width >= g && m.height >= a,
            b === 0 && q) {
                l = m;
                break
            } else
                b === 1 && q && (!l || m.width * m.height > l.width * l.height) && (l = m);
        return l
    }
    function ru(a, b) {
        var c = U(a);
        if (b.length && !c.g) {
            var d = new MutationObserver( () => {
                setTimeout( () => {
                    tu(a);
                    for (let e of c.sideRailMutationCallbacks)
                        e()
                }
                , 500)
            }
            );
            for (let e of b)
                d.observe(e, {
                    attributes: !0
                });
            c.g = d
        }
    }
    function uu(a, b) {
        U(a).sideRailMutationCallbacks.push(b)
    }
    function tu(a) {
        ({sideRailAvailableSpace: a} = U(a));
        var b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (let c of b)
            a.delete(c)
    }
    function vu(a) {
        if (a.M)
            return a.M.Aa(1228, () => su(a)) || null;
        try {
            return su(a)
        } catch {}
        return null
    }
    ;function ls(a, b) {
        a.state !== "dismissed" && (a.state = b,
        a.j.setAttribute("data-side-rail-status", a.state))
    }
    function wu(a, b) {
        if (a.state === "dismissed")
            var c = !1;
        else {
            c = a.j;
            var d = vu({
                U: a.g,
                he: 0,
                position: a.position,
                V: a.g.innerWidth,
                R: a.g.innerHeight,
                bb: new Set([c]),
                minWidth: a.B.width + 15,
                minHeight: a.B.height + 5 + 30,
                M: a.M,
                flags: a.flags
            });
            if (d) {
                var e = Math.round(d.width - a.B.width - 15);
                a.A = Math.min(a.A ?? e, e);
                a.offsetY = Math.round(d.offsetY);
                H(c, {
                    margin: V(0),
                    padding: V(0),
                    position: "fixed",
                    [a.position]: V(a.A),
                    top: V(a.offsetY),
                    transition: "all 500ms ease-in",
                    overflow: "visible"
                });
                a.G || H(c, {
                    "z-index": "2147483647"
                });
                c = !0
            } else
                c = !1
        }
        c ? xu(a, b) : ks(a, b)
    }
    function ks(a, b=0) {
        a.state === "displayed" && (H(a.j, {
            transition: "all 500ms ease-in",
            opacity: "0",
            top: V(a.offsetY + b)
        }),
        clearTimeout(a.F),
        a.F = setTimeout( () => {
            ls(a, "idle");
            H(a.j, {
                display: "none"
            })
        }
        , 500))
    }
    function xu(a, b=0) {
        a.state === "idle" && (H(a.j, {
            transition: "",
            display: "block",
            opacity: "0",
            top: V(a.offsetY - b)
        }),
        clearTimeout(a.F),
        a.F = setTimeout( () => {
            ls(a, "displayed");
            H(a.j, {
                transition: "all 500ms ease-in",
                opacity: "1",
                top: V(a.offsetY)
            })
        }
        , 10))
    }
    var yu = class extends Rq {
        constructor(a, b, c, d, e, f, g) {
            var k = {
                Ic: !0,
                jc: !0,
                Zd: T(Cj),
                Yd: T(Bj),
                Wc: T(Dj)
            };
            super(a, b, c);
            this.B = e;
            this.M = f;
            this.G = g;
            this.flags = k;
            this.state = "idle";
            this.offsetY = this.F = 0;
            this.A = null;
            this.H = 0;
            this.position = d === 3 ? "left" : "right";
            this.J = new cu(a,b,c,this.position, () => {
                ks(this, -30);
                ls(this, "dismissed")
            }
            );
            F(this, this.J);
            ls(this, "idle");
            H(c, {
                display: "none"
            });
            var h = f.ea(273, () => {
                wu(this)
            }
            );
            L(a, "load", h);
            G(this, () => O(a, "load", h));
            var n = f.ea(267, () => {
                this.A = null;
                wu(this)
            }
            );
            L(b, "resize", n);
            G(this, () => O(b, "resize", n));
            var l = f.ea(268, ad( () => {
                var m = zg(this.g);
                wu(this, this.B.height / 3 * Math.sign(this.H - m));
                this.H = m
            }
            ));
            L(b, "scroll", l, Ae);
            G(this, () => O(b, "scroll", l));
            this.G && mq(this.G, m => {
                H(c, {
                    "z-index": String(m || 2147483647)
                })
            }
            );
            if (this.flags.Ic || this.flags.jc)
                uu(b, () => void wu(this)),
                G(this, () => {
                    var m = U(b);
                    m.g?.disconnect();
                    m.g = null;
                    m.sideRailMutationCallbacks.length = 0
                }
                )
        }
    }
    ;
    var zu = class {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            if (this.g !== 3 && this.g !== 4)
                return !1;
            var c = new pp;
            if (!op(c, b))
                return !1;
            b = a.document.createElement("ins");
            b.className = "adsbygoogle";
            a.document.body.appendChild(b);
            var d = c.F || {};
            d.google_ad_client = c.A;
            d.google_ad_width = c.l;
            d.google_ad_height = c.j;
            d.google_reactive_ad_format = this.g;
            rp(b, d, a);
            return !0
        }
    }
    ;
    var Au = class extends pp {
        constructor() {
            super(...arguments);
            this.K = 86400;
            this.H = new Set
        }
        G(a) {
            a.capIntervalMinutes && (this.K = a.capIntervalMinutes * 60);
            a = a.triggers;
            Array.isArray(a) && (a = new Set(a.map(b => b)),
            this.H = wt(a));
            return !0
        }
    }
    ;
    var Bu = class {
        verifyAndProcessConfig(a, b) {
            var c = U(a);
            if (c.wasReactiveAdConfigReceived[8])
                return !1;
            var d = new Au;
            if (!op(d, b))
                return !1;
            c.wasReactiveAdConfigReceived[8] = !0;
            b = Gd("INS");
            b.className = "adsbygoogle";
            H(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = d.F || {};
            c.google_ad_client = d.A;
            c.google_ad_width = d.l;
            c.google_ad_height = d.j;
            c.google_reactive_ad_format = 8;
            c.vfcs = d.K;
            d.g && (c.google_reactive_fill_message = d.g);
            d.B && (c.google_adtest = "on");
            d = d.H;
            T(Sj) && d.add(6);
            T(Tj) && d.add(5);
            T(Rj) && d.add(9);
            d = Array.from(d);
            rp(b, c, a, {
                bPXfr: {
                    hvlaW: d
                }
            });
            return !0
        }
    }
    ;
    var Ne = class {
        configProcessorForAdFormat(a) {
            switch (a) {
            case 1:
            case 2:
                return new up(a);
            case 3:
            case 4:
                return new zu(a);
            case 8:
                return eg(Bu);
            case 9:
                return eg(fs);
            default:
                return null
            }
        }
        createAdSlot(a, b, c, d, e, f, g) {
            a: {
                e = ho(e);
                var k = b.google_reactive_ad_format;
                switch (k) {
                case 1:
                case 2:
                    var h = k;
                    g = b.google_reactive_block_location_fallback === !0;
                    k = a && il(a.location, "google_anchor_debug");
                    if (h === 2 || k)
                        h = Mp({
                            Yc: 0,
                            Cc: a.innerWidth,
                            Rc: 3,
                            Zc: 0,
                            Dc: Math.min(Math.round(a.innerWidth / 320 * 50), Tp) + 15,
                            Sc: 3
                        }),
                        g = Rp(a, h) && !g ? "bottom" : "top";
                    else {
                        h = a.innerWidth;
                        k = a.innerHeight;
                        var n = Math.min(Math.round(a.innerWidth / 320 * 50), Tp) + 15;
                        let l = Mp({
                            Yc: 0,
                            Cc: h,
                            Rc: 3,
                            Zc: k - n,
                            Dc: k,
                            Sc: 3
                        });
                        n > 25 && l.push({
                            x: h - 25,
                            y: k - 25
                        });
                        g = Rp(a, l) && !g ? "top" : "bottom"
                    }
                    h = b.google_reactive_anchor_plus_max_height;
                    k = b.google_reactive_anchor_plus_animation_speed_px_per_millis;
                    h !== void 0 && (c.style.height = "");
                    n = new gs({
                        Ab: window.location.href,
                        wb: 9,
                        de: Dd(a),
                        xb: Lf()
                    });
                    n.ec({
                        C: 8
                    });
                    c = new rr(c,a,f,g,d,e,h ? {
                        maxHeight: h,
                        Za: k
                    } : void 0,n);
                    new Lp(a,c,b.google_reactive_fill_message,b.gdvucrm);
                    break a;
                case 3:
                case 4:
                    new ms(a,new yu(c,a,d,k,new Zd(b.google_ad_width,b.google_ad_height),Jl,new nq(a)));
                    break a;
                case 8:
                    h = new Set;
                    g.OSwJs === 1 && (g = g.mqAVR?.bPXfr?.hvlaW) && (h = new Set(g));
                    new Yt(a,f,c,b.google_adtest === "on",new Zd(b.google_ad_width,b.google_ad_height),Jl,d,e,b.vfcs,b.google_reactive_fill_message,new js({
                        cd: Dd(a),
                        Ab: window.location.href,
                        wb: 9,
                        xb: Lf(),
                        mb: bg
                    }),h);
                    break a;
                case 9:
                    g = b.google_rasc;
                    if (g === void 0 || g === null)
                        h = null;
                    else
                        try {
                            h = tr(g)
                        } catch (l) {
                            Ol("rasf_fsi_ama", {}, .1),
                            h = null
                        }
                    g = h || new sr;
                    new ds(a,f,c,g,b.google_adtest === "on",d,e)
                }
            }
        }
    }
    ;
    function Cu() {
        var a = window;
        return t.google_adtest === "on" || t.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : []
    }
    ;class Du {
    }
    ;function Eu() {
        var a = t.ggeac || (t.ggeac = {});
        gg(eg(hg), a);
        Fu(a);
        eg(Du);
        eg(nk).g()
    }
    function Fu(a) {
        var b = eg(nk);
        b.j = (c, d) => fg(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => fg(6, a, () => 0)(c, d, 1);
        b.B = (c, d) => fg(7, a, () => "")(c, d, 1);
        b.F = (c, d) => fg(8, a, () => [])(c, d, 1);
        b.A = (c, d) => fg(17, a, () => [])(c, d, 1);
        b.g = () => {
            fg(15, a, () => {}
            )(1)
        }
    }
    ;function Gu() {
        var a = Hu().jTCuI;
        Jl.l(b => {
            b.shv = String(a);
            b.mjsv = Lf();
            var c = bg()
              , d = Cu();
            b.eid = c.concat(d).join(",")
        }
        )
    }
    ;function Hu() {
        var a = window;
        return a.adsbygoogle && "pageState"in a.adsbygoogle && a.adsbygoogle.pageState ? a.adsbygoogle.pageState : {
            stavq: 0,
            jTCuI: "",
            OmOVT: !1,
            xujKL: !1,
            AyxaY: void 0,
            SLqBY: "",
            xVQAt: "",
            OSCLM: {
                UWEfJ: !1,
                YguOd: !1,
                SVQEK: !1
            },
            jzoix: {
                PygXN: []
            },
            FJPve: !1,
            GLnKw: !1,
            tYcft: Promise.resolve(void 0),
            EGzMj: Promise.resolve(!0),
            uNjDc: !1
        }
    }
    ;Ml(210, () => {
        var a = new dg(Lf());
        try {
            Ra(b => {
                zl(a, 1195, b)
            }
            )
        } catch (b) {}
        Gu();
        Eu();
        Me()
    }
    );
}
).call(this, "");

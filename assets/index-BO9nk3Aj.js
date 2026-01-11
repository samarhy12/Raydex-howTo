function Wx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function Hx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gm = { exports: {} },
  Go = {},
  ym = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Js = Symbol.for("react.element"),
  qx = Symbol.for("react.portal"),
  Yx = Symbol.for("react.fragment"),
  Gx = Symbol.for("react.strict_mode"),
  Kx = Symbol.for("react.profiler"),
  Qx = Symbol.for("react.provider"),
  Xx = Symbol.for("react.context"),
  Jx = Symbol.for("react.forward_ref"),
  Zx = Symbol.for("react.suspense"),
  ev = Symbol.for("react.memo"),
  tv = Symbol.for("react.lazy"),
  gd = Symbol.iterator;
function nv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gd && e[gd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vm = Object.assign,
  wm = {};
function zr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wm),
    (this.updater = n || xm);
}
zr.prototype.isReactComponent = {};
zr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bm() {}
bm.prototype = zr.prototype;
function Iu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wm),
    (this.updater = n || xm);
}
var zu = (Iu.prototype = new bm());
zu.constructor = Iu;
vm(zu, zr.prototype);
zu.isPureReactComponent = !0;
var yd = Array.isArray,
  km = Object.prototype.hasOwnProperty,
  Bu = { current: null },
  Sm = { key: !0, ref: !0, __self: !0, __source: !0 };
function jm(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      km.call(t, r) && !Sm.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Js,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Bu.current,
  };
}
function rv(e, t) {
  return {
    $$typeof: Js,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Js;
}
function sv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xd = /\/+/g;
function Ea(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sv("" + e.key)
    : t.toString(36);
}
function $i(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Js:
          case qx:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + Ea(o, 0) : r),
      yd(s)
        ? ((n = ""),
          e != null && (n = e.replace(xd, "$&/") + "/"),
          $i(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (Uu(s) &&
            (s = rv(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(xd, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), yd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Ea(i, a);
      o += $i(i, t, n, l, s);
    }
  else if (((l = nv(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Ea(i, a++)), (o += $i(i, t, n, l, s));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function mi(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    $i(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function iv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  Wi = { transition: null },
  ov = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: Wi,
    ReactCurrentOwner: Bu,
  };
function Nm() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: mi,
  forEach: function (e, t, n) {
    mi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      mi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Uu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = zr;
I.Fragment = Yx;
I.Profiler = Kx;
I.PureComponent = Iu;
I.StrictMode = Gx;
I.Suspense = Zx;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov;
I.act = Nm;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = vm({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Bu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      km.call(t, l) &&
        !Sm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Js, type: e.type, key: s, ref: i, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Xx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qx, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = jm;
I.createFactory = function (e) {
  var t = jm.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Jx, render: e };
};
I.isValidElement = Uu;
I.lazy = function (e) {
  return { $$typeof: tv, _payload: { _status: -1, _result: e }, _init: iv };
};
I.memo = function (e, t) {
  return { $$typeof: ev, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Wi.transition;
  Wi.transition = {};
  try {
    e();
  } finally {
    Wi.transition = t;
  }
};
I.unstable_act = Nm;
I.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Le.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
I.useId = function () {
  return Le.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Le.current.useRef(e);
};
I.useState = function (e) {
  return Le.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Le.current.useTransition();
};
I.version = "18.3.1";
ym.exports = I;
var k = ym.exports;
const Ko = Hx(k),
  av = Wx({ __proto__: null, default: Ko }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lv = k,
  uv = Symbol.for("react.element"),
  cv = Symbol.for("react.fragment"),
  dv = Object.prototype.hasOwnProperty,
  fv = lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pm(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) dv.call(t, r) && !hv.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: uv,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: fv.current,
  };
}
Go.Fragment = cv;
Go.jsx = Pm;
Go.jsxs = Pm;
gm.exports = Go;
var u = gm.exports,
  vl = {},
  Cm = { exports: {} },
  Qe = {},
  Em = { exports: {} },
  Tm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, M) {
    var F = T.length;
    T.push(M);
    e: for (; 0 < F; ) {
      var D = (F - 1) >>> 1,
        $ = T[D];
      if (0 < s($, M)) (T[D] = M), (T[F] = $), (F = D);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var M = T[0],
      F = T.pop();
    if (F !== M) {
      T[0] = F;
      e: for (var D = 0, $ = T.length, lt = $ >>> 1; D < lt; ) {
        var De = 2 * (D + 1) - 1,
          Et = T[De],
          We = De + 1,
          Tn = T[We];
        if (0 > s(Et, F))
          We < $ && 0 > s(Tn, Et)
            ? ((T[D] = Tn), (T[We] = F), (D = We))
            : ((T[D] = Et), (T[De] = F), (D = De));
        else if (We < $ && 0 > s(Tn, F)) (T[D] = Tn), (T[We] = F), (D = We);
        else break e;
      }
    }
    return M;
  }
  function s(T, M) {
    var F = T.sortIndex - M.sortIndex;
    return F !== 0 ? F : T.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    g = !1,
    p = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(T) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= T)
        r(c), (M.sortIndex = M.expirationTime), t(l, M);
      else break;
      M = n(c);
    }
  }
  function b(T) {
    if (((v = !1), y(T), !p))
      if (n(l) !== null) (p = !0), U(j);
      else {
        var M = n(c);
        M !== null && Re(b, M.startTime - T);
      }
  }
  function j(T, M) {
    (p = !1), v && ((v = !1), x(P), (P = -1)), (g = !0);
    var F = h;
    try {
      for (
        y(M), f = n(l);
        f !== null && (!(f.expirationTime > M) || (T && !ae()));

      ) {
        var D = f.callback;
        if (typeof D == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var $ = D(f.expirationTime <= M);
          (M = e.unstable_now()),
            typeof $ == "function" ? (f.callback = $) : f === n(l) && r(l),
            y(M);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var lt = !0;
      else {
        var De = n(c);
        De !== null && Re(b, De.startTime - M), (lt = !1);
      }
      return lt;
    } finally {
      (f = null), (h = F), (g = !1);
    }
  }
  var E = !1,
    N = null,
    P = -1,
    A = 5,
    L = -1;
  function ae() {
    return !(e.unstable_now() - L < A);
  }
  function se() {
    if (N !== null) {
      var T = e.unstable_now();
      L = T;
      var M = !0;
      try {
        M = N(!0, T);
      } finally {
        M ? le() : ((E = !1), (N = null));
      }
    } else E = !1;
  }
  var le;
  if (typeof m == "function")
    le = function () {
      m(se);
    };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(),
      at = K.port2;
    (K.port1.onmessage = se),
      (le = function () {
        at.postMessage(null);
      });
  } else
    le = function () {
      w(se, 0);
    };
  function U(T) {
    (N = T), E || ((E = !0), le());
  }
  function Re(T, M) {
    P = w(function () {
      T(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || g || ((p = !0), U(j));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = h;
      }
      var F = h;
      h = M;
      try {
        return T();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, M) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var F = h;
      h = T;
      try {
        return M();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (T, M, F) {
      var D = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? D + F : D))
          : (F = D),
        T)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = F + $),
        (T = {
          id: d++,
          callback: M,
          priorityLevel: T,
          startTime: F,
          expirationTime: $,
          sortIndex: -1,
        }),
        F > D
          ? ((T.sortIndex = F),
            t(c, T),
            n(l) === null &&
              T === n(c) &&
              (v ? (x(P), (P = -1)) : (v = !0), Re(b, F - D)))
          : ((T.sortIndex = $), t(l, T), p || g || ((p = !0), U(j))),
        T
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (T) {
      var M = h;
      return function () {
        var F = h;
        h = M;
        try {
          return T.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(Tm);
Em.exports = Tm;
var mv = Em.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pv = k,
  Ge = mv;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Rm = new Set(),
  Cs = {};
function tr(e, t) {
  Tr(e, t), Tr(e + "Capture", t);
}
function Tr(e, t) {
  for (Cs[e] = t, e = 0; e < t.length; e++) Rm.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wl = Object.prototype.hasOwnProperty,
  gv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vd = {},
  wd = {};
function yv(e) {
  return wl.call(wd, e)
    ? !0
    : wl.call(vd, e)
    ? !1
    : gv.test(e)
    ? (wd[e] = !0)
    : ((vd[e] = !0), !1);
}
function xv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function vv(e, t, n, r) {
  if (t === null || typeof t > "u" || xv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, s, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $u = /[\-:]([a-z])/g;
function Wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($u, Wu);
    Se[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($u, Wu);
    Se[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($u, Wu);
  Se[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hu(e, t, n, r) {
  var s = Se.hasOwnProperty(t) ? Se[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (vv(t, n, s, r) && (n = null),
    r || s === null
      ? yv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pi = Symbol.for("react.element"),
  ar = Symbol.for("react.portal"),
  lr = Symbol.for("react.fragment"),
  qu = Symbol.for("react.strict_mode"),
  bl = Symbol.for("react.profiler"),
  Dm = Symbol.for("react.provider"),
  Mm = Symbol.for("react.context"),
  Yu = Symbol.for("react.forward_ref"),
  kl = Symbol.for("react.suspense"),
  Sl = Symbol.for("react.suspense_list"),
  Gu = Symbol.for("react.memo"),
  Kt = Symbol.for("react.lazy"),
  Am = Symbol.for("react.offscreen"),
  bd = Symbol.iterator;
function Yr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bd && e[bd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Ta;
function as(e) {
  if (Ta === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ta = (t && t[1]) || "";
    }
  return (
    `
` +
    Ta +
    e
  );
}
var Ra = !1;
function Da(e, t) {
  if (!e || Ra) return "";
  Ra = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Ra = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? as(e) : "";
}
function wv(e) {
  switch (e.tag) {
    case 5:
      return as(e.type);
    case 16:
      return as("Lazy");
    case 13:
      return as("Suspense");
    case 19:
      return as("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Da(e.type, !1)), e;
    case 11:
      return (e = Da(e.type.render, !1)), e;
    case 1:
      return (e = Da(e.type, !0)), e;
    default:
      return "";
  }
}
function jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case lr:
      return "Fragment";
    case ar:
      return "Portal";
    case bl:
      return "Profiler";
    case qu:
      return "StrictMode";
    case kl:
      return "Suspense";
    case Sl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mm:
        return (e.displayName || "Context") + ".Consumer";
      case Dm:
        return (e._context.displayName || "Context") + ".Provider";
      case Yu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gu:
        return (
          (t = e.displayName || null), t !== null ? t : jl(e.type) || "Memo"
        );
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return jl(e(t));
        } catch {}
    }
  return null;
}
function bv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return jl(t);
    case 8:
      return t === qu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Om(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function kv(e) {
  var t = Om(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gi(e) {
  e._valueTracker || (e._valueTracker = kv(e));
}
function Lm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Om(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function co(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nl(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function kd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Fm(e, t) {
  (t = t.checked), t != null && Hu(e, "checked", t, !1);
}
function Pl(e, t) {
  Fm(e, t);
  var n = gn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Cl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Cl(e, t.type, gn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Cl(e, t, n) {
  (t !== "number" || co(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ls = Array.isArray;
function Sr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function El(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (ls(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gn(n) };
}
function _m(e, t) {
  var n = gn(t.value),
    r = gn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Nd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Tl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var yi,
  Im = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        yi = yi || document.createElement("div"),
          yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Es(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Sv = ["Webkit", "ms", "Moz", "O"];
Object.keys(fs).forEach(function (e) {
  Sv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fs[t] = fs[e]);
  });
});
function zm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (fs.hasOwnProperty(e) && fs[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = zm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var jv = re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Rl(e, t) {
  if (t) {
    if (jv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Dl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ml = null;
function Ku(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Al = null,
  jr = null,
  Nr = null;
function Pd(e) {
  if ((e = ti(e))) {
    if (typeof Al != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = ea(t)), Al(e.stateNode, e.type, t));
  }
}
function Um(e) {
  jr ? (Nr ? Nr.push(e) : (Nr = [e])) : (jr = e);
}
function $m() {
  if (jr) {
    var e = jr,
      t = Nr;
    if (((Nr = jr = null), Pd(e), t)) for (e = 0; e < t.length; e++) Pd(t[e]);
  }
}
function Wm(e, t) {
  return e(t);
}
function Hm() {}
var Ma = !1;
function qm(e, t, n) {
  if (Ma) return e(t, n);
  Ma = !0;
  try {
    return Wm(e, t, n);
  } finally {
    (Ma = !1), (jr !== null || Nr !== null) && (Hm(), $m());
  }
}
function Ts(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ea(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Ol = !1;
if (_t)
  try {
    var Gr = {};
    Object.defineProperty(Gr, "passive", {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener("test", Gr, Gr),
      window.removeEventListener("test", Gr, Gr);
  } catch {
    Ol = !1;
  }
function Nv(e, t, n, r, s, i, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var hs = !1,
  fo = null,
  ho = !1,
  Ll = null,
  Pv = {
    onError: function (e) {
      (hs = !0), (fo = e);
    },
  };
function Cv(e, t, n, r, s, i, o, a, l) {
  (hs = !1), (fo = null), Nv.apply(Pv, arguments);
}
function Ev(e, t, n, r, s, i, o, a, l) {
  if ((Cv.apply(this, arguments), hs)) {
    if (hs) {
      var c = fo;
      (hs = !1), (fo = null);
    } else throw Error(C(198));
    ho || ((ho = !0), (Ll = c));
  }
}
function nr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ym(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cd(e) {
  if (nr(e) !== e) throw Error(C(188));
}
function Tv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nr(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return Cd(s), e;
        if (i === r) return Cd(s), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = s), (r = i);
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Gm(e) {
  return (e = Tv(e)), e !== null ? Km(e) : null;
}
function Km(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Km(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qm = Ge.unstable_scheduleCallback,
  Ed = Ge.unstable_cancelCallback,
  Rv = Ge.unstable_shouldYield,
  Dv = Ge.unstable_requestPaint,
  ue = Ge.unstable_now,
  Mv = Ge.unstable_getCurrentPriorityLevel,
  Qu = Ge.unstable_ImmediatePriority,
  Xm = Ge.unstable_UserBlockingPriority,
  mo = Ge.unstable_NormalPriority,
  Av = Ge.unstable_LowPriority,
  Jm = Ge.unstable_IdlePriority,
  Qo = null,
  St = null;
function Ov(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(Qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : _v,
  Lv = Math.log,
  Fv = Math.LN2;
function _v(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Lv(e) / Fv) | 0)) | 0;
}
var xi = 64,
  vi = 4194304;
function us(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function po(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = us(a)) : ((i &= o), i !== 0 && (r = us(i)));
  } else (o = n & ~s), o !== 0 ? (r = us(o)) : i !== 0 && (r = us(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function Vv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Iv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - mt(i),
      a = 1 << o,
      l = s[o];
    l === -1
      ? (!(a & n) || a & r) && (s[o] = Vv(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Fl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Zm() {
  var e = xi;
  return (xi <<= 1), !(xi & 4194240) && (xi = 64), e;
}
function Aa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function zv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - mt(n),
      i = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function Xu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var q = 0;
function ep(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var tp,
  Ju,
  np,
  rp,
  sp,
  _l = !1,
  wi = [],
  on = null,
  an = null,
  ln = null,
  Rs = new Map(),
  Ds = new Map(),
  Jt = [],
  Bv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Td(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ds.delete(t.pointerId);
  }
}
function Kr(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = ti(t)), t !== null && Ju(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Uv(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (on = Kr(on, e, t, n, r, s)), !0;
    case "dragenter":
      return (an = Kr(an, e, t, n, r, s)), !0;
    case "mouseover":
      return (ln = Kr(ln, e, t, n, r, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return Rs.set(i, Kr(Rs.get(i) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (i = s.pointerId), Ds.set(i, Kr(Ds.get(i) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function ip(e) {
  var t = Vn(e.target);
  if (t !== null) {
    var n = nr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ym(n)), t !== null)) {
          (e.blockedOn = t),
            sp(e.priority, function () {
              np(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ml = r), n.target.dispatchEvent(r), (Ml = null);
    } else return (t = ti(n)), t !== null && Ju(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Rd(e, t, n) {
  Hi(e) && n.delete(t);
}
function $v() {
  (_l = !1),
    on !== null && Hi(on) && (on = null),
    an !== null && Hi(an) && (an = null),
    ln !== null && Hi(ln) && (ln = null),
    Rs.forEach(Rd),
    Ds.forEach(Rd);
}
function Qr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _l ||
      ((_l = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, $v)));
}
function Ms(e) {
  function t(s) {
    return Qr(s, e);
  }
  if (0 < wi.length) {
    Qr(wi[0], e);
    for (var n = 1; n < wi.length; n++) {
      var r = wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && Qr(on, e),
      an !== null && Qr(an, e),
      ln !== null && Qr(ln, e),
      Rs.forEach(t),
      Ds.forEach(t),
      n = 0;
    n < Jt.length;
    n++
  )
    (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    ip(n), n.blockedOn === null && Jt.shift();
}
var Pr = Ut.ReactCurrentBatchConfig,
  go = !0;
function Wv(e, t, n, r) {
  var s = q,
    i = Pr.transition;
  Pr.transition = null;
  try {
    (q = 1), Zu(e, t, n, r);
  } finally {
    (q = s), (Pr.transition = i);
  }
}
function Hv(e, t, n, r) {
  var s = q,
    i = Pr.transition;
  Pr.transition = null;
  try {
    (q = 4), Zu(e, t, n, r);
  } finally {
    (q = s), (Pr.transition = i);
  }
}
function Zu(e, t, n, r) {
  if (go) {
    var s = Vl(e, t, n, r);
    if (s === null) $a(e, t, r, yo, n), Td(e, r);
    else if (Uv(s, e, t, n, r)) r.stopPropagation();
    else if ((Td(e, r), t & 4 && -1 < Bv.indexOf(e))) {
      for (; s !== null; ) {
        var i = ti(s);
        if (
          (i !== null && tp(i),
          (i = Vl(e, t, n, r)),
          i === null && $a(e, t, r, yo, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else $a(e, t, r, null, n);
  }
}
var yo = null;
function Vl(e, t, n, r) {
  if (((yo = null), (e = Ku(r)), (e = Vn(e)), e !== null))
    if (((t = nr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ym(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (yo = e), null;
}
function op(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Mv()) {
        case Qu:
          return 1;
        case Xm:
          return 4;
        case mo:
        case Av:
          return 16;
        case Jm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  ec = null,
  qi = null;
function ap() {
  if (qi) return qi;
  var e,
    t = ec,
    n = t.length,
    r,
    s = "value" in nn ? nn.value : nn.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (qi = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Yi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bi() {
  return !0;
}
function Dd() {
  return !1;
}
function Xe(e) {
  function t(n, r, s, i, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? bi
        : Dd),
      (this.isPropagationStopped = Dd),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = bi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = bi));
      },
      persist: function () {},
      isPersistent: bi,
    }),
    t
  );
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tc = Xe(Br),
  ei = re({}, Br, { view: 0, detail: 0 }),
  qv = Xe(ei),
  Oa,
  La,
  Xr,
  Xo = re({}, ei, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xr &&
            (Xr && e.type === "mousemove"
              ? ((Oa = e.screenX - Xr.screenX), (La = e.screenY - Xr.screenY))
              : (La = Oa = 0),
            (Xr = e)),
          Oa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : La;
    },
  }),
  Md = Xe(Xo),
  Yv = re({}, Xo, { dataTransfer: 0 }),
  Gv = Xe(Yv),
  Kv = re({}, ei, { relatedTarget: 0 }),
  Fa = Xe(Kv),
  Qv = re({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xv = Xe(Qv),
  Jv = re({}, Br, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Zv = Xe(Jv),
  e0 = re({}, Br, { data: 0 }),
  Ad = Xe(e0),
  t0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  n0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  r0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function s0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = r0[e]) ? !!t[e] : !1;
}
function nc() {
  return s0;
}
var i0 = re({}, ei, {
    key: function (e) {
      if (e.key) {
        var t = t0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? n0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nc,
    charCode: function (e) {
      return e.type === "keypress" ? Yi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  o0 = Xe(i0),
  a0 = re({}, Xo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Od = Xe(a0),
  l0 = re({}, ei, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc,
  }),
  u0 = Xe(l0),
  c0 = re({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  d0 = Xe(c0),
  f0 = re({}, Xo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  h0 = Xe(f0),
  m0 = [9, 13, 27, 32],
  rc = _t && "CompositionEvent" in window,
  ms = null;
_t && "documentMode" in document && (ms = document.documentMode);
var p0 = _t && "TextEvent" in window && !ms,
  lp = _t && (!rc || (ms && 8 < ms && 11 >= ms)),
  Ld = " ",
  Fd = !1;
function up(e, t) {
  switch (e) {
    case "keyup":
      return m0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function cp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ur = !1;
function g0(e, t) {
  switch (e) {
    case "compositionend":
      return cp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fd = !0), Ld);
    case "textInput":
      return (e = t.data), e === Ld && Fd ? null : e;
    default:
      return null;
  }
}
function y0(e, t) {
  if (ur)
    return e === "compositionend" || (!rc && up(e, t))
      ? ((e = ap()), (qi = ec = nn = null), (ur = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return lp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var x0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _d(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!x0[e.type] : t === "textarea";
}
function dp(e, t, n, r) {
  Um(r),
    (t = xo(t, "onChange")),
    0 < t.length &&
      ((n = new tc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ps = null,
  As = null;
function v0(e) {
  kp(e, 0);
}
function Jo(e) {
  var t = fr(e);
  if (Lm(t)) return e;
}
function w0(e, t) {
  if (e === "change") return t;
}
var fp = !1;
if (_t) {
  var _a;
  if (_t) {
    var Va = "oninput" in document;
    if (!Va) {
      var Vd = document.createElement("div");
      Vd.setAttribute("oninput", "return;"),
        (Va = typeof Vd.oninput == "function");
    }
    _a = Va;
  } else _a = !1;
  fp = _a && (!document.documentMode || 9 < document.documentMode);
}
function Id() {
  ps && (ps.detachEvent("onpropertychange", hp), (As = ps = null));
}
function hp(e) {
  if (e.propertyName === "value" && Jo(As)) {
    var t = [];
    dp(t, As, e, Ku(e)), qm(v0, t);
  }
}
function b0(e, t, n) {
  e === "focusin"
    ? (Id(), (ps = t), (As = n), ps.attachEvent("onpropertychange", hp))
    : e === "focusout" && Id();
}
function k0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Jo(As);
}
function S0(e, t) {
  if (e === "click") return Jo(t);
}
function j0(e, t) {
  if (e === "input" || e === "change") return Jo(t);
}
function N0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : N0;
function Os(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!wl.call(t, s) || !gt(e[s], t[s])) return !1;
  }
  return !0;
}
function zd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bd(e, t) {
  var n = zd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zd(n);
  }
}
function mp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? mp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pp() {
  for (var e = window, t = co(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = co(e.document);
  }
  return t;
}
function sc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function P0(e) {
  var t = pp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && sc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        (r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Bd(n, i));
        var o = Bd(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var C0 = _t && "documentMode" in document && 11 >= document.documentMode,
  cr = null,
  Il = null,
  gs = null,
  zl = !1;
function Ud(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zl ||
    cr == null ||
    cr !== co(r) ||
    ((r = cr),
    "selectionStart" in r && sc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (gs && Os(gs, r)) ||
      ((gs = r),
      (r = xo(Il, "onSelect")),
      0 < r.length &&
        ((t = new tc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cr))));
}
function ki(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dr = {
    animationend: ki("Animation", "AnimationEnd"),
    animationiteration: ki("Animation", "AnimationIteration"),
    animationstart: ki("Animation", "AnimationStart"),
    transitionend: ki("Transition", "TransitionEnd"),
  },
  Ia = {},
  gp = {};
_t &&
  ((gp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dr.animationend.animation,
    delete dr.animationiteration.animation,
    delete dr.animationstart.animation),
  "TransitionEvent" in window || delete dr.transitionend.transition);
function Zo(e) {
  if (Ia[e]) return Ia[e];
  if (!dr[e]) return e;
  var t = dr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gp) return (Ia[e] = t[n]);
  return e;
}
var yp = Zo("animationend"),
  xp = Zo("animationiteration"),
  vp = Zo("animationstart"),
  wp = Zo("transitionend"),
  bp = new Map(),
  $d =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bn(e, t) {
  bp.set(e, t), tr(t, [e]);
}
for (var za = 0; za < $d.length; za++) {
  var Ba = $d[za],
    E0 = Ba.toLowerCase(),
    T0 = Ba[0].toUpperCase() + Ba.slice(1);
  bn(E0, "on" + T0);
}
bn(yp, "onAnimationEnd");
bn(xp, "onAnimationIteration");
bn(vp, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(wp, "onTransitionEnd");
Tr("onMouseEnter", ["mouseout", "mouseover"]);
Tr("onMouseLeave", ["mouseout", "mouseover"]);
Tr("onPointerEnter", ["pointerout", "pointerover"]);
Tr("onPointerLeave", ["pointerout", "pointerover"]);
tr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var cs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  R0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));
function Wd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ev(r, t, void 0, e), (e.currentTarget = null);
}
function kp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          Wd(s, a, c), (i = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          Wd(s, a, c), (i = l);
        }
    }
  }
  if (ho) throw ((e = Ll), (ho = !1), (Ll = null), e);
}
function X(e, t) {
  var n = t[Hl];
  n === void 0 && (n = t[Hl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Sp(t, e, 2, !1), n.add(r));
}
function Ua(e, t, n) {
  var r = 0;
  t && (r |= 4), Sp(n, e, r, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function Ls(e) {
  if (!e[Si]) {
    (e[Si] = !0),
      Rm.forEach(function (n) {
        n !== "selectionchange" && (R0.has(n) || Ua(n, !1, e), Ua(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || ((t[Si] = !0), Ua("selectionchange", !1, t));
  }
}
function Sp(e, t, n, r) {
  switch (op(t)) {
    case 1:
      var s = Wv;
      break;
    case 4:
      s = Hv;
      break;
    default:
      s = Zu;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function $a(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Vn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qm(function () {
    var c = i,
      d = Ku(n),
      f = [];
    e: {
      var h = bp.get(e);
      if (h !== void 0) {
        var g = tc,
          p = e;
        switch (e) {
          case "keypress":
            if (Yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = o0;
            break;
          case "focusin":
            (p = "focus"), (g = Fa);
            break;
          case "focusout":
            (p = "blur"), (g = Fa);
            break;
          case "beforeblur":
          case "afterblur":
            g = Fa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Md;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Gv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = u0;
            break;
          case yp:
          case xp:
          case vp:
            g = Xv;
            break;
          case wp:
            g = d0;
            break;
          case "scroll":
            g = qv;
            break;
          case "wheel":
            g = h0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Od;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          x = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var m = c, y; m !== null; ) {
          y = m;
          var b = y.stateNode;
          if (
            (y.tag === 5 &&
              b !== null &&
              ((y = b),
              x !== null && ((b = Ts(m, x)), b != null && v.push(Fs(m, b, y)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < v.length &&
          ((h = new g(h, p, null, n, d)), f.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ml &&
            (p = n.relatedTarget || n.fromElement) &&
            (Vn(p) || p[Vt]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((p = n.relatedTarget || n.toElement),
              (g = c),
              (p = p ? Vn(p) : null),
              p !== null &&
                ((w = nr(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((g = null), (p = c)),
          g !== p)
        ) {
          if (
            ((v = Md),
            (b = "onMouseLeave"),
            (x = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Od),
              (b = "onPointerLeave"),
              (x = "onPointerEnter"),
              (m = "pointer")),
            (w = g == null ? h : fr(g)),
            (y = p == null ? h : fr(p)),
            (h = new v(b, m + "leave", g, n, d)),
            (h.target = w),
            (h.relatedTarget = y),
            (b = null),
            Vn(d) === c &&
              ((v = new v(x, m + "enter", p, n, d)),
              (v.target = y),
              (v.relatedTarget = w),
              (b = v)),
            (w = b),
            g && p)
          )
            t: {
              for (v = g, x = p, m = 0, y = v; y; y = ir(y)) m++;
              for (y = 0, b = x; b; b = ir(b)) y++;
              for (; 0 < m - y; ) (v = ir(v)), m--;
              for (; 0 < y - m; ) (x = ir(x)), y--;
              for (; m--; ) {
                if (v === x || (x !== null && v === x.alternate)) break t;
                (v = ir(v)), (x = ir(x));
              }
              v = null;
            }
          else v = null;
          g !== null && Hd(f, h, g, v, !1),
            p !== null && w !== null && Hd(f, w, p, v, !0);
        }
      }
      e: {
        if (
          ((h = c ? fr(c) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var j = w0;
        else if (_d(h))
          if (fp) j = j0;
          else {
            j = k0;
            var E = b0;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = S0);
        if (j && (j = j(e, c))) {
          dp(f, j, n, d);
          break e;
        }
        E && E(e, h, c),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            Cl(h, "number", h.value);
      }
      switch (((E = c ? fr(c) : window), e)) {
        case "focusin":
          (_d(E) || E.contentEditable === "true") &&
            ((cr = E), (Il = c), (gs = null));
          break;
        case "focusout":
          gs = Il = cr = null;
          break;
        case "mousedown":
          zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zl = !1), Ud(f, n, d);
          break;
        case "selectionchange":
          if (C0) break;
        case "keydown":
        case "keyup":
          Ud(f, n, d);
      }
      var N;
      if (rc)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        ur
          ? up(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (lp &&
          n.locale !== "ko" &&
          (ur || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && ur && (N = ap())
            : ((nn = d),
              (ec = "value" in nn ? nn.value : nn.textContent),
              (ur = !0))),
        (E = xo(c, P)),
        0 < E.length &&
          ((P = new Ad(P, e, null, n, d)),
          f.push({ event: P, listeners: E }),
          N ? (P.data = N) : ((N = cp(n)), N !== null && (P.data = N)))),
        (N = p0 ? g0(e, n) : y0(e, n)) &&
          ((c = xo(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Ad("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = N)));
    }
    kp(f, t);
  });
}
function Fs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Ts(e, n)),
      i != null && r.unshift(Fs(e, i, s)),
      (i = Ts(e, t)),
      i != null && r.push(Fs(e, i, s))),
      (e = e.return);
  }
  return r;
}
function ir(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Hd(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((l = Ts(n, i)), l != null && o.unshift(Fs(n, l, a)))
        : s || ((l = Ts(n, i)), l != null && o.push(Fs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var D0 = /\r\n?/g,
  M0 = /\u0000|\uFFFD/g;
function qd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      D0,
      `
`
    )
    .replace(M0, "");
}
function ji(e, t, n) {
  if (((t = qd(t)), qd(e) !== t && n)) throw Error(C(425));
}
function vo() {}
var Bl = null,
  Ul = null;
function $l(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wl = typeof setTimeout == "function" ? setTimeout : void 0,
  A0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yd = typeof Promise == "function" ? Promise : void 0,
  O0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yd < "u"
      ? function (e) {
          return Yd.resolve(null).then(e).catch(L0);
        }
      : Wl;
function L0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wa(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Ms(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Ms(t);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ur = Math.random().toString(36).slice(2),
  bt = "__reactFiber$" + Ur,
  _s = "__reactProps$" + Ur,
  Vt = "__reactContainer$" + Ur,
  Hl = "__reactEvents$" + Ur,
  F0 = "__reactListeners$" + Ur,
  _0 = "__reactHandles$" + Ur;
function Vn(e) {
  var t = e[bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vt] || n[bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gd(e); e !== null; ) {
          if ((n = e[bt])) return n;
          e = Gd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ti(e) {
  return (
    (e = e[bt] || e[Vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function ea(e) {
  return e[_s] || null;
}
var ql = [],
  hr = -1;
function kn(e) {
  return { current: e };
}
function J(e) {
  0 > hr || ((e.current = ql[hr]), (ql[hr] = null), hr--);
}
function Q(e, t) {
  hr++, (ql[hr] = e.current), (e.current = t);
}
var yn = {},
  Ee = kn(yn),
  Ie = kn(!1),
  Kn = yn;
function Rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function wo() {
  J(Ie), J(Ee);
}
function Kd(e, t, n) {
  if (Ee.current !== yn) throw Error(C(168));
  Q(Ee, t), Q(Ie, n);
}
function jp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(C(108, bv(e) || "Unknown", s));
  return re({}, n, r);
}
function bo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    (Kn = Ee.current),
    Q(Ee, e),
    Q(Ie, Ie.current),
    !0
  );
}
function Qd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = jp(e, t, Kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J(Ie),
      J(Ee),
      Q(Ee, e))
    : J(Ie),
    Q(Ie, n);
}
var Dt = null,
  ta = !1,
  Ha = !1;
function Np(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function V0(e) {
  (ta = !0), Np(e);
}
function Sn() {
  if (!Ha && Dt !== null) {
    Ha = !0;
    var e = 0,
      t = q;
    try {
      var n = Dt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), (ta = !1);
    } catch (s) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), Qm(Qu, Sn), s);
    } finally {
      (q = t), (Ha = !1);
    }
  }
  return null;
}
var mr = [],
  pr = 0,
  ko = null,
  So = 0,
  tt = [],
  nt = 0,
  Qn = null,
  Mt = 1,
  At = "";
function An(e, t) {
  (mr[pr++] = So), (mr[pr++] = ko), (ko = e), (So = t);
}
function Pp(e, t, n) {
  (tt[nt++] = Mt), (tt[nt++] = At), (tt[nt++] = Qn), (Qn = e);
  var r = Mt;
  e = At;
  var s = 32 - mt(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - mt(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Mt = (1 << (32 - mt(t) + s)) | (n << s) | r),
      (At = i + e);
  } else (Mt = (1 << i) | (n << s) | r), (At = e);
}
function ic(e) {
  e.return !== null && (An(e, 1), Pp(e, 1, 0));
}
function oc(e) {
  for (; e === ko; )
    (ko = mr[--pr]), (mr[pr] = null), (So = mr[--pr]), (mr[pr] = null);
  for (; e === Qn; )
    (Qn = tt[--nt]),
      (tt[nt] = null),
      (At = tt[--nt]),
      (tt[nt] = null),
      (Mt = tt[--nt]),
      (tt[nt] = null);
}
var Ye = null,
  qe = null,
  Z = !1,
  ft = null;
function Cp(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (qe = un(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qn !== null ? { id: Mt, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gl(e) {
  if (Z) {
    var t = qe;
    if (t) {
      var n = t;
      if (!Xd(e, t)) {
        if (Yl(e)) throw Error(C(418));
        t = un(n.nextSibling);
        var r = Ye;
        t && Xd(e, t)
          ? Cp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ye = e));
      }
    } else {
      if (Yl(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Ye = e);
    }
  }
}
function Jd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Ni(e) {
  if (e !== Ye) return !1;
  if (!Z) return Jd(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$l(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (Yl(e)) throw (Ep(), Error(C(418)));
    for (; t; ) Cp(e, t), (t = un(t.nextSibling));
  }
  if ((Jd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Ye ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function Ep() {
  for (var e = qe; e; ) e = un(e.nextSibling);
}
function Dr() {
  (qe = Ye = null), (Z = !1);
}
function ac(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var I0 = Ut.ReactCurrentBatchConfig;
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Zd(e) {
  var t = e._init;
  return t(e._payload);
}
function Tp(e) {
  function t(x, m) {
    if (e) {
      var y = x.deletions;
      y === null ? ((x.deletions = [m]), (x.flags |= 16)) : y.push(m);
    }
  }
  function n(x, m) {
    if (!e) return null;
    for (; m !== null; ) t(x, m), (m = m.sibling);
    return null;
  }
  function r(x, m) {
    for (x = new Map(); m !== null; )
      m.key !== null ? x.set(m.key, m) : x.set(m.index, m), (m = m.sibling);
    return x;
  }
  function s(x, m) {
    return (x = hn(x, m)), (x.index = 0), (x.sibling = null), x;
  }
  function i(x, m, y) {
    return (
      (x.index = y),
      e
        ? ((y = x.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((x.flags |= 2), m) : y)
            : ((x.flags |= 2), m))
        : ((x.flags |= 1048576), m)
    );
  }
  function o(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function a(x, m, y, b) {
    return m === null || m.tag !== 6
      ? ((m = Ja(y, x.mode, b)), (m.return = x), m)
      : ((m = s(m, y)), (m.return = x), m);
  }
  function l(x, m, y, b) {
    var j = y.type;
    return j === lr
      ? d(x, m, y.props.children, b, y.key)
      : m !== null &&
        (m.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === Kt &&
            Zd(j) === m.type))
      ? ((b = s(m, y.props)), (b.ref = Jr(x, m, y)), (b.return = x), b)
      : ((b = eo(y.type, y.key, y.props, null, x.mode, b)),
        (b.ref = Jr(x, m, y)),
        (b.return = x),
        b);
  }
  function c(x, m, y, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = Za(y, x.mode, b)), (m.return = x), m)
      : ((m = s(m, y.children || [])), (m.return = x), m);
  }
  function d(x, m, y, b, j) {
    return m === null || m.tag !== 7
      ? ((m = Wn(y, x.mode, b, j)), (m.return = x), m)
      : ((m = s(m, y)), (m.return = x), m);
  }
  function f(x, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Ja("" + m, x.mode, y)), (m.return = x), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case pi:
          return (
            (y = eo(m.type, m.key, m.props, null, x.mode, y)),
            (y.ref = Jr(x, null, m)),
            (y.return = x),
            y
          );
        case ar:
          return (m = Za(m, x.mode, y)), (m.return = x), m;
        case Kt:
          var b = m._init;
          return f(x, b(m._payload), y);
      }
      if (ls(m) || Yr(m))
        return (m = Wn(m, x.mode, y, null)), (m.return = x), m;
      Pi(x, m);
    }
    return null;
  }
  function h(x, m, y, b) {
    var j = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return j !== null ? null : a(x, m, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case pi:
          return y.key === j ? l(x, m, y, b) : null;
        case ar:
          return y.key === j ? c(x, m, y, b) : null;
        case Kt:
          return (j = y._init), h(x, m, j(y._payload), b);
      }
      if (ls(y) || Yr(y)) return j !== null ? null : d(x, m, y, b, null);
      Pi(x, y);
    }
    return null;
  }
  function g(x, m, y, b, j) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (x = x.get(y) || null), a(m, x, "" + b, j);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case pi:
          return (x = x.get(b.key === null ? y : b.key) || null), l(m, x, b, j);
        case ar:
          return (x = x.get(b.key === null ? y : b.key) || null), c(m, x, b, j);
        case Kt:
          var E = b._init;
          return g(x, m, y, E(b._payload), j);
      }
      if (ls(b) || Yr(b)) return (x = x.get(y) || null), d(m, x, b, j, null);
      Pi(m, b);
    }
    return null;
  }
  function p(x, m, y, b) {
    for (
      var j = null, E = null, N = m, P = (m = 0), A = null;
      N !== null && P < y.length;
      P++
    ) {
      N.index > P ? ((A = N), (N = null)) : (A = N.sibling);
      var L = h(x, N, y[P], b);
      if (L === null) {
        N === null && (N = A);
        break;
      }
      e && N && L.alternate === null && t(x, N),
        (m = i(L, m, P)),
        E === null ? (j = L) : (E.sibling = L),
        (E = L),
        (N = A);
    }
    if (P === y.length) return n(x, N), Z && An(x, P), j;
    if (N === null) {
      for (; P < y.length; P++)
        (N = f(x, y[P], b)),
          N !== null &&
            ((m = i(N, m, P)), E === null ? (j = N) : (E.sibling = N), (E = N));
      return Z && An(x, P), j;
    }
    for (N = r(x, N); P < y.length; P++)
      (A = g(N, x, P, y[P], b)),
        A !== null &&
          (e && A.alternate !== null && N.delete(A.key === null ? P : A.key),
          (m = i(A, m, P)),
          E === null ? (j = A) : (E.sibling = A),
          (E = A));
    return (
      e &&
        N.forEach(function (ae) {
          return t(x, ae);
        }),
      Z && An(x, P),
      j
    );
  }
  function v(x, m, y, b) {
    var j = Yr(y);
    if (typeof j != "function") throw Error(C(150));
    if (((y = j.call(y)), y == null)) throw Error(C(151));
    for (
      var E = (j = null), N = m, P = (m = 0), A = null, L = y.next();
      N !== null && !L.done;
      P++, L = y.next()
    ) {
      N.index > P ? ((A = N), (N = null)) : (A = N.sibling);
      var ae = h(x, N, L.value, b);
      if (ae === null) {
        N === null && (N = A);
        break;
      }
      e && N && ae.alternate === null && t(x, N),
        (m = i(ae, m, P)),
        E === null ? (j = ae) : (E.sibling = ae),
        (E = ae),
        (N = A);
    }
    if (L.done) return n(x, N), Z && An(x, P), j;
    if (N === null) {
      for (; !L.done; P++, L = y.next())
        (L = f(x, L.value, b)),
          L !== null &&
            ((m = i(L, m, P)), E === null ? (j = L) : (E.sibling = L), (E = L));
      return Z && An(x, P), j;
    }
    for (N = r(x, N); !L.done; P++, L = y.next())
      (L = g(N, x, P, L.value, b)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? P : L.key),
          (m = i(L, m, P)),
          E === null ? (j = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        N.forEach(function (se) {
          return t(x, se);
        }),
      Z && An(x, P),
      j
    );
  }
  function w(x, m, y, b) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === lr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case pi:
          e: {
            for (var j = y.key, E = m; E !== null; ) {
              if (E.key === j) {
                if (((j = y.type), j === lr)) {
                  if (E.tag === 7) {
                    n(x, E.sibling),
                      (m = s(E, y.props.children)),
                      (m.return = x),
                      (x = m);
                    break e;
                  }
                } else if (
                  E.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Kt &&
                    Zd(j) === E.type)
                ) {
                  n(x, E.sibling),
                    (m = s(E, y.props)),
                    (m.ref = Jr(x, E, y)),
                    (m.return = x),
                    (x = m);
                  break e;
                }
                n(x, E);
                break;
              } else t(x, E);
              E = E.sibling;
            }
            y.type === lr
              ? ((m = Wn(y.props.children, x.mode, b, y.key)),
                (m.return = x),
                (x = m))
              : ((b = eo(y.type, y.key, y.props, null, x.mode, b)),
                (b.ref = Jr(x, m, y)),
                (b.return = x),
                (x = b));
          }
          return o(x);
        case ar:
          e: {
            for (E = y.key; m !== null; ) {
              if (m.key === E)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(x, m.sibling),
                    (m = s(m, y.children || [])),
                    (m.return = x),
                    (x = m);
                  break e;
                } else {
                  n(x, m);
                  break;
                }
              else t(x, m);
              m = m.sibling;
            }
            (m = Za(y, x.mode, b)), (m.return = x), (x = m);
          }
          return o(x);
        case Kt:
          return (E = y._init), w(x, m, E(y._payload), b);
      }
      if (ls(y)) return p(x, m, y, b);
      if (Yr(y)) return v(x, m, y, b);
      Pi(x, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(x, m.sibling), (m = s(m, y)), (m.return = x), (x = m))
          : (n(x, m), (m = Ja(y, x.mode, b)), (m.return = x), (x = m)),
        o(x))
      : n(x, m);
  }
  return w;
}
var Mr = Tp(!0),
  Rp = Tp(!1),
  jo = kn(null),
  No = null,
  gr = null,
  lc = null;
function uc() {
  lc = gr = No = null;
}
function cc(e) {
  var t = jo.current;
  J(jo), (e._currentValue = t);
}
function Kl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Cr(e, t) {
  (No = e),
    (lc = gr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ve = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (lc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gr === null)) {
      if (No === null) throw Error(C(308));
      (gr = e), (No.dependencies = { lanes: 0, firstContext: e });
    } else gr = gr.next = e;
  return t;
}
var In = null;
function dc(e) {
  In === null ? (In = [e]) : In.push(e);
}
function Dp(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), dc(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    It(e, r)
  );
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function fc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Mp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      It(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), dc(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    It(e, n)
  );
}
function Gi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
  }
}
function ef(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Po(e, t, n, r) {
  var s = e.updateQueue;
  Qt = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (i = c) : (o.next = c), (o = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = s.baseState;
    (o = 0), (d = c = l = null), (a = i);
    do {
      var h = a.lane,
        g = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            v = a;
          switch (((h = t), (g = n), v.tag)) {
            case 1:
              if (((p = v.payload), typeof p == "function")) {
                f = p.call(g, f, h);
                break e;
              }
              f = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = v.payload),
                (h = typeof p == "function" ? p.call(g, f, h) : p),
                h == null)
              )
                break e;
              f = re({}, f, h);
              break e;
            case 2:
              Qt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [a]) : h.push(a));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = g), (l = f)) : (d = d.next = g),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (s.baseState = l),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (o |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (Jn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function tf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(C(191, s));
        s.call(r);
      }
    }
}
var ni = {},
  jt = kn(ni),
  Vs = kn(ni),
  Is = kn(ni);
function zn(e) {
  if (e === ni) throw Error(C(174));
  return e;
}
function hc(e, t) {
  switch ((Q(Is, t), Q(Vs, e), Q(jt, ni), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Tl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Tl(t, e));
  }
  J(jt), Q(jt, t);
}
function Ar() {
  J(jt), J(Vs), J(Is);
}
function Ap(e) {
  zn(Is.current);
  var t = zn(jt.current),
    n = Tl(t, e.type);
  t !== n && (Q(Vs, e), Q(jt, n));
}
function mc(e) {
  Vs.current === e && (J(jt), J(Vs));
}
var ee = kn(0);
function Co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qa = [];
function pc() {
  for (var e = 0; e < qa.length; e++)
    qa[e]._workInProgressVersionPrimary = null;
  qa.length = 0;
}
var Ki = Ut.ReactCurrentDispatcher,
  Ya = Ut.ReactCurrentBatchConfig,
  Xn = 0,
  ne = null,
  ge = null,
  ve = null,
  Eo = !1,
  ys = !1,
  zs = 0,
  z0 = 0;
function je() {
  throw Error(C(321));
}
function gc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function yc(e, t, n, r, s, i) {
  if (
    ((Xn = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ki.current = e === null || e.memoizedState === null ? W0 : H0),
    (e = n(r, s)),
    ys)
  ) {
    i = 0;
    do {
      if (((ys = !1), (zs = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (ve = ge = null),
        (t.updateQueue = null),
        (Ki.current = q0),
        (e = n(r, s));
    } while (ys);
  }
  if (
    ((Ki.current = To),
    (t = ge !== null && ge.next !== null),
    (Xn = 0),
    (ve = ge = ne = null),
    (Eo = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function xc() {
  var e = zs !== 0;
  return (zs = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ve === null ? (ne.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function ot() {
  if (ge === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = ve === null ? ne.memoizedState : ve.next;
  if (t !== null) (ve = t), (ge = e);
  else {
    if (e === null) throw Error(C(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      ve === null ? (ne.memoizedState = ve = e) : (ve = ve.next = e);
  }
  return ve;
}
function Bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ga(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ge,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (r.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      c = i;
    do {
      var d = c.lane;
      if ((Xn & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (ne.lanes |= d),
          (Jn |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? (o = r) : (l.next = a),
      gt(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (ne.lanes |= i), (Jn |= i), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ka(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== s);
    gt(i, t.memoizedState) || (Ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Op() {}
function Lp(e, t) {
  var n = ne,
    r = ot(),
    s = t(),
    i = !gt(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Ve = !0)),
    (r = r.queue),
    vc(Vp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Us(9, _p.bind(null, n, r, s, t), void 0, null),
      we === null)
    )
      throw Error(C(349));
    Xn & 30 || Fp(n, t, s);
  }
  return s;
}
function Fp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _p(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ip(t) && zp(e);
}
function Vp(e, t, n) {
  return n(function () {
    Ip(t) && zp(e);
  });
}
function Ip(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function zp(e) {
  var t = It(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function nf(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $0.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function Us(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bp() {
  return ot().memoizedState;
}
function Qi(e, t, n, r) {
  var s = wt();
  (ne.flags |= e),
    (s.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r));
}
function na(e, t, n, r) {
  var s = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var o = ge.memoizedState;
    if (((i = o.destroy), r !== null && gc(r, o.deps))) {
      s.memoizedState = Us(t, n, i, r);
      return;
    }
  }
  (ne.flags |= e), (s.memoizedState = Us(1 | t, n, i, r));
}
function rf(e, t) {
  return Qi(8390656, 8, e, t);
}
function vc(e, t) {
  return na(2048, 8, e, t);
}
function Up(e, t) {
  return na(4, 2, e, t);
}
function $p(e, t) {
  return na(4, 4, e, t);
}
function Wp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), na(4, 4, Wp.bind(null, t, e), n)
  );
}
function wc() {}
function qp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gp(e, t, n) {
  return Xn & 21
    ? (gt(n, t) || ((n = Zm()), (ne.lanes |= n), (Jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
}
function B0(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ya.transition;
  Ya.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (Ya.transition = r);
  }
}
function Kp() {
  return ot().memoizedState;
}
function U0(e, t, n) {
  var r = fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qp(e))
  )
    Xp(t, n);
  else if (((n = Dp(e, t, n, r)), n !== null)) {
    var s = Oe();
    pt(n, e, r, s), Jp(n, t, r);
  }
}
function $0(e, t, n) {
  var r = fn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qp(e)) Xp(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), gt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((s.next = s), dc(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = Dp(e, t, s, r)),
      n !== null && ((s = Oe()), pt(n, e, r, s), Jp(n, t, r));
  }
}
function Qp(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function Xp(e, t) {
  ys = Eo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
  }
}
var To = {
    readContext: it,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  W0 = {
    readContext: it,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: rf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qi(4194308, 4, Wp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = U0.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: nf,
    useDebugValue: wc,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = nf(!1),
        t = e[0];
      return (e = B0.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        s = wt();
      if (Z) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(C(349));
        Xn & 30 || Fp(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        rf(Vp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Us(9, _p.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = we.identifierPrefix;
      if (Z) {
        var n = At,
          r = Mt;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = zs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = z0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  H0 = {
    readContext: it,
    useCallback: qp,
    useContext: it,
    useEffect: vc,
    useImperativeHandle: Hp,
    useInsertionEffect: Up,
    useLayoutEffect: $p,
    useMemo: Yp,
    useReducer: Ga,
    useRef: Bp,
    useState: function () {
      return Ga(Bs);
    },
    useDebugValue: wc,
    useDeferredValue: function (e) {
      var t = ot();
      return Gp(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Ga(Bs)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Op,
    useSyncExternalStore: Lp,
    useId: Kp,
    unstable_isNewReconciler: !1,
  },
  q0 = {
    readContext: it,
    useCallback: qp,
    useContext: it,
    useEffect: vc,
    useImperativeHandle: Hp,
    useInsertionEffect: Up,
    useLayoutEffect: $p,
    useMemo: Yp,
    useReducer: Ka,
    useRef: Bp,
    useState: function () {
      return Ka(Bs);
    },
    useDebugValue: wc,
    useDeferredValue: function (e) {
      var t = ot();
      return ge === null ? (t.memoizedState = e) : Gp(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Ka(Bs)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Op,
    useSyncExternalStore: Lp,
    useId: Kp,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ql(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ra = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      s = fn(e),
      i = Lt(r, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = cn(e, i, s)),
      t !== null && (pt(t, e, s, r), Gi(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      s = fn(e),
      i = Lt(r, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = cn(e, i, s)),
      t !== null && (pt(t, e, s, r), Gi(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = fn(e),
      s = Lt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = cn(e, s, r)),
      t !== null && (pt(t, e, r, n), Gi(t, e, r));
  },
};
function sf(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Os(n, r) || !Os(s, i)
      : !0
  );
}
function Zp(e, t, n) {
  var r = !1,
    s = yn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((s = ze(t) ? Kn : Ee.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Rr(e, s) : yn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ra),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function of(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ra.enqueueReplaceState(t, t.state, null);
}
function Xl(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), fc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = it(i))
    : ((i = ze(t) ? Kn : Ee.current), (s.context = Rr(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ql(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && ra.enqueueReplaceState(s, s.state, null),
      Po(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Or(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wv(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Qa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Y0 = typeof WeakMap == "function" ? WeakMap : Map;
function eg(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Do || ((Do = !0), (lu = r)), Jl(e, t);
    }),
    n
  );
}
function tg(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Jl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Jl(e, t),
          typeof r != "function" &&
            (dn === null ? (dn = new Set([this])) : dn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function af(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Y0();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = a1.bind(null, e, t, n)), t.then(e, e));
}
function lf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function uf(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var G0 = Ut.ReactCurrentOwner,
  Ve = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Rp(t, null, n, r) : Mr(t, e.child, n, r);
}
function cf(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Cr(t, s),
    (r = yc(e, t, n, r, i, s)),
    (n = xc()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        zt(e, t, s))
      : (Z && n && ic(t), (t.flags |= 1), Ae(e, t, r, s), t.child)
  );
}
function df(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ec(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ng(e, t, i, r, s))
      : ((e = eo(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Os), n(o, r) && e.ref === t.ref)
    )
      return zt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = hn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ng(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Os(i, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Ve = !0);
      else return (t.lanes = e.lanes), zt(e, t, s);
  }
  return Zl(e, t, n, r, s);
}
function rg(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(xr, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(xr, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Q(xr, He),
        (He |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(xr, He),
      (He |= r);
  return Ae(e, t, s, n), t.child;
}
function sg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zl(e, t, n, r, s) {
  var i = ze(n) ? Kn : Ee.current;
  return (
    (i = Rr(t, i)),
    Cr(t, s),
    (n = yc(e, t, n, r, i, s)),
    (r = xc()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        zt(e, t, s))
      : (Z && r && ic(t), (t.flags |= 1), Ae(e, t, n, s), t.child)
  );
}
function ff(e, t, n, r, s) {
  if (ze(n)) {
    var i = !0;
    bo(t);
  } else i = !1;
  if ((Cr(t, s), t.stateNode === null))
    Xi(e, t), Zp(t, n, r), Xl(t, n, r, s), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = it(c))
      : ((c = ze(n) ? Kn : Ee.current), (c = Rr(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && of(t, o, r, c)),
      (Qt = !1);
    var h = t.memoizedState;
    (o.state = h),
      Po(t, r, o, s),
      (l = t.memoizedState),
      a !== r || h !== l || Ie.current || Qt
        ? (typeof d == "function" && (Ql(t, n, d, r), (l = t.memoizedState)),
          (a = Qt || sf(t, n, a, r, h, l, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Mp(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : ct(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = it(l))
        : ((l = ze(n) ? Kn : Ee.current), (l = Rr(t, l)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && of(t, o, r, l)),
      (Qt = !1),
      (h = t.memoizedState),
      (o.state = h),
      Po(t, r, o, s);
    var p = t.memoizedState;
    a !== f || h !== p || Ie.current || Qt
      ? (typeof g == "function" && (Ql(t, n, g, r), (p = t.memoizedState)),
        (c = Qt || sf(t, n, c, r, h, p, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, p, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, p, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (o.props = r),
        (o.state = p),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return eu(e, t, n, r, i, s);
}
function eu(e, t, n, r, s, i) {
  sg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Qd(t, n, !1), zt(e, t, i);
  (r = t.stateNode), (G0.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Mr(t, e.child, null, i)), (t.child = Mr(t, null, a, i)))
      : Ae(e, t, a, i),
    (t.memoizedState = r.state),
    s && Qd(t, n, !0),
    t.child
  );
}
function ig(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Kd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Kd(e, t.context, !1),
    hc(e, t.containerInfo);
}
function hf(e, t, n, r, s) {
  return Dr(), ac(s), (t.flags |= 256), Ae(e, t, n, r), t.child;
}
var tu = { dehydrated: null, treeContext: null, retryLane: 0 };
function nu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function og(e, t, n) {
  var r = t.pendingProps,
    s = ee.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    Q(ee, s & 1),
    e === null)
  )
    return (
      Gl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = oa(o, r, 0, null)),
              (e = Wn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = nu(n)),
              (t.memoizedState = tu),
              e)
            : bc(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return K0(e, t, o, r, a, s, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = hn(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = hn(a, i)) : ((i = Wn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? nu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = tu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = hn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bc(e, t) {
  return (
    (t = oa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ci(e, t, n, r) {
  return (
    r !== null && ac(r),
    Mr(t, e.child, null, n),
    (e = bc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function K0(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Qa(Error(C(422)))), Ci(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (s = t.mode),
        (r = oa({ mode: "visible", children: r.children }, s, 0, null)),
        (i = Wn(i, s, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Mr(t, e.child, null, o),
        (t.child.memoizedState = nu(o)),
        (t.memoizedState = tu),
        i);
  if (!(t.mode & 1)) return Ci(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(C(419))), (r = Qa(i, r, void 0)), Ci(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ve || a)) {
    if (((r = we), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), It(e, s), pt(r, e, s, -1));
    }
    return Cc(), (r = Qa(Error(C(421)))), Ci(e, t, o, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = l1.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (qe = un(s.nextSibling)),
      (Ye = t),
      (Z = !0),
      (ft = null),
      e !== null &&
        ((tt[nt++] = Mt),
        (tt[nt++] = At),
        (tt[nt++] = Qn),
        (Mt = e.id),
        (At = e.overflow),
        (Qn = t)),
      (t = bc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Kl(e.return, t, n);
}
function Xa(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function ag(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Ae(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mf(e, n, t);
        else if (e.tag === 19) mf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Q(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Co(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Xa(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Co(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Xa(t, !0, n, null, i);
        break;
      case "together":
        Xa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Q0(e, t, n) {
  switch (t.tag) {
    case 3:
      ig(t), Dr();
      break;
    case 5:
      Ap(t);
      break;
    case 1:
      ze(t.type) && bo(t);
      break;
    case 4:
      hc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      Q(jo, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? og(e, t, n)
          : (Q(ee, ee.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      Q(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ag(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        Q(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rg(e, t, n);
  }
  return zt(e, t, n);
}
var lg, ru, ug, cg;
lg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ru = function () {};
ug = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), zn(jt.current);
    var i = null;
    switch (n) {
      case "input":
        (s = Nl(e, s)), (r = Nl(e, r)), (i = []);
        break;
      case "select":
        (s = re({}, s, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (s = El(e, s)), (r = El(e, r)), (i = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vo);
    }
    Rl(n, r);
    var o;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Cs.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Cs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && X("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
cg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zr(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function X0(e, t, n) {
  var r = t.pendingProps;
  switch ((oc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return ze(t.type) && wo(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ar(),
        J(Ie),
        J(Ee),
        pc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ni(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (du(ft), (ft = null)))),
        ru(e, t),
        Ne(t),
        null
      );
    case 5:
      mc(t);
      var s = zn(Is.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ug(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Ne(t), null;
        }
        if (((e = zn(jt.current)), Ni(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[bt] = t), (r[_s] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < cs.length; s++) X(cs[s], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              kd(r, i), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              jd(r, i), X("invalid", r);
          }
          Rl(n, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ji(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ji(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : Cs.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              gi(r), Sd(r, i, !0);
              break;
            case "textarea":
              gi(r), Nd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = vo);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[bt] = t),
            (e[_s] = r),
            lg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Dl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < cs.length; s++) X(cs[s], e);
                s = r;
                break;
              case "source":
                X("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (s = r);
                break;
              case "details":
                X("toggle", e), (s = r);
                break;
              case "input":
                kd(e, r), (s = Nl(e, r)), X("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = re({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                jd(e, r), (s = El(e, r)), X("invalid", e);
                break;
              default:
                s = r;
            }
            Rl(n, s), (a = s);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Bm(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Im(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Es(e, l)
                    : typeof l == "number" && Es(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Cs.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && X("scroll", e)
                      : l != null && Hu(e, i, l, o));
              }
            switch (n) {
              case "input":
                gi(e), Sd(e, r, !1);
                break;
              case "textarea":
                gi(e), Nd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Sr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Sr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = vo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) cg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = zn(Is.current)), zn(jt.current), Ni(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[bt] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                ji(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ji(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[bt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (J(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && qe !== null && t.mode & 1 && !(t.flags & 128))
          Ep(), Dr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ni(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[bt] = t;
          } else
            Dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else ft !== null && (du(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? xe === 0 && (xe = 3) : Cc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Ar(), ru(e, t), e === null && Ls(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return cc(t.type._context), Ne(t), null;
    case 17:
      return ze(t.type) && wo(), Ne(t), null;
    case 19:
      if ((J(ee), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Zr(i, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Co(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Zr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ue() > Lr &&
            ((t.flags |= 128), (r = !0), Zr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Co(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !Z)
            )
              return Ne(t), null;
          } else
            2 * ue() - i.renderingStartTime > Lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ue()),
          (t.sibling = null),
          (n = ee.current),
          Q(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Pc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function J0(e, t) {
  switch ((oc(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && wo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ar(),
        J(Ie),
        J(Ee),
        pc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mc(t), null;
    case 13:
      if ((J(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Dr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return J(ee), null;
    case 4:
      return Ar(), null;
    case 10:
      return cc(t.type._context), null;
    case 22:
    case 23:
      return Pc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ei = !1,
  Pe = !1,
  Z0 = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function yr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function su(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var pf = !1;
function e1(e, t) {
  if (((Bl = go), (e = pp()), sc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (s !== 0 && f.nodeType !== 3) || (a = o + s),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (h = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === s && (a = o),
                h === i && ++d === r && (l = o),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ul = { focusedElem: e, selectionRange: n }, go = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var v = p.memoizedProps,
                    w = p.memoizedState,
                    x = t.stateNode,
                    m = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : ct(t.type, v),
                      w
                    );
                  x.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (b) {
          ie(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (p = pf), (pf = !1), p;
}
function xs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && su(t, n, i);
      }
      s = s.next;
    } while (s !== r);
  }
}
function sa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function iu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function dg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), dg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[bt], delete t[_s], delete t[Hl], delete t[F0], delete t[_0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = vo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; ) ou(e, t, n), (e = e.sibling);
}
function au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (au(e, t, n), e = e.sibling; e !== null; ) au(e, t, n), (e = e.sibling);
}
var be = null,
  dt = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) hg(e, t, n), (n = n.sibling);
}
function hg(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(Qo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || yr(n, t);
    case 6:
      var r = be,
        s = dt;
      (be = null),
        Ht(e, t, n),
        (be = r),
        (dt = s),
        be !== null &&
          (dt
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null &&
        (dt
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wa(e.parentNode, n)
              : e.nodeType === 1 && Wa(e, n),
            Ms(e))
          : Wa(be, n.stateNode));
      break;
    case 4:
      (r = be),
        (s = dt),
        (be = n.stateNode.containerInfo),
        (dt = !0),
        Ht(e, t, n),
        (be = r),
        (dt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && su(n, t, o),
            (s = s.next);
        } while (s !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (
        !Pe &&
        (yr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ie(n, t, a);
        }
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), Ht(e, t, n), (Pe = r))
        : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function yf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Z0()),
      t.forEach(function (r) {
        var s = u1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (be = a.stateNode), (dt = !1);
              break e;
            case 3:
              (be = a.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (be = a.stateNode.containerInfo), (dt = !0);
              break e;
          }
          a = a.return;
        }
        if (be === null) throw Error(C(160));
        hg(i, o, s), (be = null), (dt = !1);
        var l = s.alternate;
        l !== null && (l.return = null), (s.return = null);
      } catch (c) {
        ie(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mg(t, e), (t = t.sibling);
}
function mg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), xt(e), r & 4)) {
        try {
          xs(3, e, e.return), sa(3, e);
        } catch (v) {
          ie(e, e.return, v);
        }
        try {
          xs(5, e, e.return);
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 1:
      ut(t, e), xt(e), r & 512 && n !== null && yr(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        xt(e),
        r & 512 && n !== null && yr(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Es(s, "");
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Fm(s, i),
              Dl(a, o);
            var c = Dl(a, i);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                f = l[o + 1];
              d === "style"
                ? Bm(s, f)
                : d === "dangerouslySetInnerHTML"
                ? Im(s, f)
                : d === "children"
                ? Es(s, f)
                : Hu(s, d, f, c);
            }
            switch (a) {
              case "input":
                Pl(s, i);
                break;
              case "textarea":
                _m(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Sr(s, !!i.multiple, g, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Sr(s, !!i.multiple, i.defaultValue, !0)
                      : Sr(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[_s] = i;
          } catch (v) {
            ie(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ut(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (v) {
          ie(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ms(t.containerInfo);
        } catch (v) {
          ie(e, e.return, v);
        }
      break;
    case 4:
      ut(t, e), xt(e);
      break;
    case 13:
      ut(t, e),
        xt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (jc = ue())),
        r & 4 && yf(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (c = Pe) || d), ut(t, e), (Pe = c)) : ut(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (f = R = d; R !== null; ) {
              switch (((h = R), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xs(4, h, h.return);
                  break;
                case 1:
                  yr(h, h.return);
                  var p = h.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (v) {
                      ie(r, n, v);
                    }
                  }
                  break;
                case 5:
                  yr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    vf(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (R = g)) : vf(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (s = f.stateNode),
                  c
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = zm("display", o)));
              } catch (v) {
                ie(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                ie(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), xt(e), r & 4 && yf(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Es(s, ""), (r.flags &= -33));
          var i = gf(e);
          au(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = gf(e);
          ou(e, a, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (l) {
      ie(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function t1(e, t, n) {
  (R = e), pg(e);
}
function pg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var s = R,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Ei;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Pe;
        a = Ei;
        var c = Pe;
        if (((Ei = o), (Pe = l) && !c))
          for (R = s; R !== null; )
            (o = R),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? wf(s)
                : l !== null
                ? ((l.return = o), (R = l))
                : wf(s);
        for (; i !== null; ) (R = i), pg(i), (i = i.sibling);
        (R = s), (Ei = a), (Pe = c);
      }
      xf(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (R = i)) : xf(e);
  }
}
function xf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || sa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && tf(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                tf(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Ms(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        Pe || (t.flags & 512 && iu(t));
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function vf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function wf(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            sa(4, t);
          } catch (l) {
            ie(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ie(t, s, l);
            }
          }
          var i = t.return;
          try {
            iu(t);
          } catch (l) {
            ie(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            iu(t);
          } catch (l) {
            ie(t, o, l);
          }
      }
    } catch (l) {
      ie(t, t.return, l);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (R = a);
      break;
    }
    R = t.return;
  }
}
var n1 = Math.ceil,
  Ro = Ut.ReactCurrentDispatcher,
  kc = Ut.ReactCurrentOwner,
  st = Ut.ReactCurrentBatchConfig,
  B = 0,
  we = null,
  me = null,
  ke = 0,
  He = 0,
  xr = kn(0),
  xe = 0,
  $s = null,
  Jn = 0,
  ia = 0,
  Sc = 0,
  vs = null,
  _e = null,
  jc = 0,
  Lr = 1 / 0,
  Rt = null,
  Do = !1,
  lu = null,
  dn = null,
  Ti = !1,
  rn = null,
  Mo = 0,
  ws = 0,
  uu = null,
  Ji = -1,
  Zi = 0;
function Oe() {
  return B & 6 ? ue() : Ji !== -1 ? Ji : (Ji = ue());
}
function fn(e) {
  return e.mode & 1
    ? B & 2 && ke !== 0
      ? ke & -ke
      : I0.transition !== null
      ? (Zi === 0 && (Zi = Zm()), Zi)
      : ((e = q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : op(e.type))),
        e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < ws) throw ((ws = 0), (uu = null), Error(C(185)));
  Zs(e, n, r),
    (!(B & 2) || e !== we) &&
      (e === we && (!(B & 2) && (ia |= n), xe === 4 && Zt(e, ke)),
      Be(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Lr = ue() + 500), ta && Sn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Iv(e, t);
  var r = po(e, e === we ? ke : 0);
  if (r === 0)
    n !== null && Ed(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ed(n), t === 1))
      e.tag === 0 ? V0(bf.bind(null, e)) : Np(bf.bind(null, e)),
        O0(function () {
          !(B & 6) && Sn();
        }),
        (n = null);
    else {
      switch (ep(r)) {
        case 1:
          n = Qu;
          break;
        case 4:
          n = Xm;
          break;
        case 16:
          n = mo;
          break;
        case 536870912:
          n = Jm;
          break;
        default:
          n = mo;
      }
      n = Sg(n, gg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function gg(e, t) {
  if (((Ji = -1), (Zi = 0), B & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Er() && e.callbackNode !== n) return null;
  var r = po(e, e === we ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ao(e, r);
  else {
    t = r;
    var s = B;
    B |= 2;
    var i = xg();
    (we !== e || ke !== t) && ((Rt = null), (Lr = ue() + 500), $n(e, t));
    do
      try {
        i1();
        break;
      } catch (a) {
        yg(e, a);
      }
    while (!0);
    uc(),
      (Ro.current = i),
      (B = s),
      me !== null ? (t = 0) : ((we = null), (ke = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Fl(e)), s !== 0 && ((r = s), (t = cu(e, s)))), t === 1)
    )
      throw ((n = $s), $n(e, 0), Zt(e, r), Be(e, ue()), n);
    if (t === 6) Zt(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !r1(s) &&
          ((t = Ao(e, r)),
          t === 2 && ((i = Fl(e)), i !== 0 && ((r = i), (t = cu(e, i)))),
          t === 1))
      )
        throw ((n = $s), $n(e, 0), Zt(e, r), Be(e, ue()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          On(e, _e, Rt);
          break;
        case 3:
          if (
            (Zt(e, r), (r & 130023424) === r && ((t = jc + 500 - ue()), 10 < t))
          ) {
            if (po(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Wl(On.bind(null, e, _e, Rt), t);
            break;
          }
          On(e, _e, Rt);
          break;
        case 4:
          if ((Zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - mt(r);
            (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
          }
          if (
            ((r = s),
            (r = ue() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * n1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wl(On.bind(null, e, _e, Rt), r);
            break;
          }
          On(e, _e, Rt);
          break;
        case 5:
          On(e, _e, Rt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Be(e, ue()), e.callbackNode === n ? gg.bind(null, e) : null;
}
function cu(e, t) {
  var n = vs;
  return (
    e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
    (e = Ao(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && du(t)),
    e
  );
}
function du(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function r1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!gt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Zt(e, t) {
  for (
    t &= ~Sc,
      t &= ~ia,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bf(e) {
  if (B & 6) throw Error(C(327));
  Er();
  var t = po(e, 0);
  if (!(t & 1)) return Be(e, ue()), null;
  var n = Ao(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fl(e);
    r !== 0 && ((t = r), (n = cu(e, r)));
  }
  if (n === 1) throw ((n = $s), $n(e, 0), Zt(e, t), Be(e, ue()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    On(e, _e, Rt),
    Be(e, ue()),
    null
  );
}
function Nc(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((Lr = ue() + 500), ta && Sn());
  }
}
function Zn(e) {
  rn !== null && rn.tag === 0 && !(B & 6) && Er();
  var t = B;
  B |= 1;
  var n = st.transition,
    r = q;
  try {
    if (((st.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (st.transition = n), (B = t), !(B & 6) && Sn();
  }
}
function Pc() {
  (He = xr.current), J(xr);
}
function $n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), A0(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((oc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wo();
          break;
        case 3:
          Ar(), J(Ie), J(Ee), pc();
          break;
        case 5:
          mc(r);
          break;
        case 4:
          Ar();
          break;
        case 13:
          J(ee);
          break;
        case 19:
          J(ee);
          break;
        case 10:
          cc(r.type._context);
          break;
        case 22:
        case 23:
          Pc();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (me = e = hn(e.current, null)),
    (ke = He = t),
    (xe = 0),
    ($s = null),
    (Sc = ia = Jn = 0),
    (_e = vs = null),
    In !== null)
  ) {
    for (t = 0; t < In.length; t++)
      if (((n = In[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (r.next = o);
        }
        n.pending = r;
      }
    In = null;
  }
  return e;
}
function yg(e, t) {
  do {
    var n = me;
    try {
      if ((uc(), (Ki.current = To), Eo)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Eo = !1;
      }
      if (
        ((Xn = 0),
        (ve = ge = ne = null),
        (ys = !1),
        (zs = 0),
        (kc.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), ($s = t), (me = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = ke),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = lf(o);
          if (g !== null) {
            (g.flags &= -257),
              uf(g, o, a, i, t),
              g.mode & 1 && af(i, c, t),
              (t = g),
              (l = c);
            var p = t.updateQueue;
            if (p === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              af(i, c, t), Cc();
              break e;
            }
            l = Error(C(426));
          }
        } else if (Z && a.mode & 1) {
          var w = lf(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              uf(w, o, a, i, t),
              ac(Or(l, a));
            break e;
          }
        }
        (i = l = Or(l, a)),
          xe !== 4 && (xe = 2),
          vs === null ? (vs = [i]) : vs.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var x = eg(i, l, t);
              ef(i, x);
              break e;
            case 1:
              a = l;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (dn === null || !dn.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = tg(i, a, t);
                ef(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      wg(n);
    } catch (j) {
      (t = j), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xg() {
  var e = Ro.current;
  return (Ro.current = To), e === null ? To : e;
}
function Cc() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    we === null || (!(Jn & 268435455) && !(ia & 268435455)) || Zt(we, ke);
}
function Ao(e, t) {
  var n = B;
  B |= 2;
  var r = xg();
  (we !== e || ke !== t) && ((Rt = null), $n(e, t));
  do
    try {
      s1();
      break;
    } catch (s) {
      yg(e, s);
    }
  while (!0);
  if ((uc(), (B = n), (Ro.current = r), me !== null)) throw Error(C(261));
  return (we = null), (ke = 0), xe;
}
function s1() {
  for (; me !== null; ) vg(me);
}
function i1() {
  for (; me !== null && !Rv(); ) vg(me);
}
function vg(e) {
  var t = kg(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? wg(e) : (me = t),
    (kc.current = null);
}
function wg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = J0(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (me = null);
        return;
      }
    } else if (((n = X0(n, t, He)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function On(e, t, n) {
  var r = q,
    s = st.transition;
  try {
    (st.transition = null), (q = 1), o1(e, t, n, r);
  } finally {
    (st.transition = s), (q = r);
  }
  return null;
}
function o1(e, t, n, r) {
  do Er();
  while (rn !== null);
  if (B & 6) throw Error(C(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (zv(e, i),
    e === we && ((me = we = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ti ||
      ((Ti = !0),
      Sg(mo, function () {
        return Er(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = st.transition), (st.transition = null);
    var o = q;
    q = 1;
    var a = B;
    (B |= 4),
      (kc.current = null),
      e1(e, n),
      mg(n, e),
      P0(Ul),
      (go = !!Bl),
      (Ul = Bl = null),
      (e.current = n),
      t1(n),
      Dv(),
      (B = a),
      (q = o),
      (st.transition = i);
  } else e.current = n;
  if (
    (Ti && ((Ti = !1), (rn = e), (Mo = s)),
    (i = e.pendingLanes),
    i === 0 && (dn = null),
    Ov(n.stateNode),
    Be(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Do) throw ((Do = !1), (e = lu), (lu = null), e);
  return (
    Mo & 1 && e.tag !== 0 && Er(),
    (i = e.pendingLanes),
    i & 1 ? (e === uu ? ws++ : ((ws = 0), (uu = e))) : (ws = 0),
    Sn(),
    null
  );
}
function Er() {
  if (rn !== null) {
    var e = ep(Mo),
      t = st.transition,
      n = q;
    try {
      if (((st.transition = null), (q = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (Mo = 0), B & 6)) throw Error(C(331));
        var s = B;
        for (B |= 4, R = e.current; R !== null; ) {
          var i = R,
            o = i.child;
          if (R.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (R = c; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (R = f);
                  else
                    for (; R !== null; ) {
                      d = R;
                      var h = d.sibling,
                        g = d.return;
                      if ((dg(d), d === c)) {
                        R = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (R = h);
                        break;
                      }
                      R = g;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var v = p.child;
                if (v !== null) {
                  p.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (R = o);
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xs(9, i, i.return);
                }
              var x = i.sibling;
              if (x !== null) {
                (x.return = i.return), (R = x);
                break e;
              }
              R = i.return;
            }
        }
        var m = e.current;
        for (R = m; R !== null; ) {
          o = R;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (R = y);
          else
            e: for (o = m; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sa(9, a);
                  }
                } catch (j) {
                  ie(a, a.return, j);
                }
              if (a === o) {
                R = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (R = b);
                break e;
              }
              R = a.return;
            }
        }
        if (
          ((B = s), Sn(), St && typeof St.onPostCommitFiberRoot == "function")
        )
          try {
            St.onPostCommitFiberRoot(Qo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (st.transition = t);
    }
  }
  return !1;
}
function kf(e, t, n) {
  (t = Or(n, t)),
    (t = eg(e, t, 1)),
    (e = cn(e, t, 1)),
    (t = Oe()),
    e !== null && (Zs(e, 1, t), Be(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) kf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dn === null || !dn.has(r)))
        ) {
          (e = Or(n, e)),
            (e = tg(t, e, 1)),
            (t = cn(t, e, 1)),
            (e = Oe()),
            t !== null && (Zs(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function a1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (ke & n) === n &&
      (xe === 4 || (xe === 3 && (ke & 130023424) === ke && 500 > ue() - jc)
        ? $n(e, 0)
        : (Sc |= n)),
    Be(e, t);
}
function bg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vi), (vi <<= 1), !(vi & 130023424) && (vi = 4194304))
      : (t = 1));
  var n = Oe();
  (e = It(e, t)), e !== null && (Zs(e, t, n), Be(e, n));
}
function l1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bg(e, n);
}
function u1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), bg(e, n);
}
var kg;
kg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), Q0(e, t, n);
      Ve = !!(e.flags & 131072);
    }
  else (Ve = !1), Z && t.flags & 1048576 && Pp(t, So, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xi(e, t), (e = t.pendingProps);
      var s = Rr(t, Ee.current);
      Cr(t, n), (s = yc(null, t, r, e, s, n));
      var i = xc();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((i = !0), bo(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            fc(t),
            (s.updater = ra),
            (t.stateNode = s),
            (s._reactInternals = t),
            Xl(t, r, e, n),
            (t = eu(null, t, r, !0, i, n)))
          : ((t.tag = 0), Z && i && ic(t), Ae(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xi(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = d1(r)),
          (e = ct(r, e)),
          s)
        ) {
          case 0:
            t = Zl(null, t, r, e, n);
            break e;
          case 1:
            t = ff(null, t, r, e, n);
            break e;
          case 11:
            t = cf(null, t, r, e, n);
            break e;
          case 14:
            t = df(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        Zl(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        ff(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((ig(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Mp(e, t),
          Po(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = Or(Error(C(423)), t)), (t = hf(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Or(Error(C(424)), t)), (t = hf(e, t, r, n, s));
            break e;
          } else
            for (
              qe = un(t.stateNode.containerInfo.firstChild),
                Ye = t,
                Z = !0,
                ft = null,
                n = Rp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Dr(), r === s)) {
            t = zt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ap(t),
        e === null && Gl(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        $l(r, s) ? (o = null) : i !== null && $l(r, i) && (t.flags |= 32),
        sg(e, t),
        Ae(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Gl(t), null;
    case 13:
      return og(e, t, n);
    case 4:
      return (
        hc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        cf(e, t, r, s, n)
      );
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          Q(jo, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (gt(i.value, o)) {
            if (i.children === s.children && !Ie.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Lt(-1, n & -n)), (l.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Kl(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Kl(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ae(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Cr(t, n),
        (s = it(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = ct(r, t.pendingProps)),
        (s = ct(r.type, s)),
        df(e, t, r, s, n)
      );
    case 15:
      return ng(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : ct(r, s)),
        Xi(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), bo(t)) : (e = !1),
        Cr(t, n),
        Zp(t, r, s),
        Xl(t, r, s, n),
        eu(null, t, r, !0, e, n)
      );
    case 19:
      return ag(e, t, n);
    case 22:
      return rg(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Sg(e, t) {
  return Qm(e, t);
}
function c1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new c1(e, t, n, r);
}
function Ec(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function d1(e) {
  if (typeof e == "function") return Ec(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yu)) return 11;
    if (e === Gu) return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function eo(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ec(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case lr:
        return Wn(n.children, s, i, t);
      case qu:
        (o = 8), (s |= 8);
        break;
      case bl:
        return (
          (e = rt(12, n, t, s | 2)), (e.elementType = bl), (e.lanes = i), e
        );
      case kl:
        return (e = rt(13, n, t, s)), (e.elementType = kl), (e.lanes = i), e;
      case Sl:
        return (e = rt(19, n, t, s)), (e.elementType = Sl), (e.lanes = i), e;
      case Am:
        return oa(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Dm:
              o = 10;
              break e;
            case Mm:
              o = 9;
              break e;
            case Yu:
              o = 11;
              break e;
            case Gu:
              o = 14;
              break e;
            case Kt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Wn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function oa(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Am),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ja(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function Za(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function f1(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Aa(0)),
    (this.expirationTimes = Aa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Aa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Tc(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new f1(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fc(i),
    e
  );
}
function h1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ar,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jg(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (nr(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return jp(e, n, t);
  }
  return t;
}
function Ng(e, t, n, r, s, i, o, a, l) {
  return (
    (e = Tc(n, r, !0, e, s, i, o, a, l)),
    (e.context = jg(null)),
    (n = e.current),
    (r = Oe()),
    (s = fn(n)),
    (i = Lt(r, s)),
    (i.callback = t ?? null),
    cn(n, i, s),
    (e.current.lanes = s),
    Zs(e, s, r),
    Be(e, r),
    e
  );
}
function aa(e, t, n, r) {
  var s = t.current,
    i = Oe(),
    o = fn(s);
  return (
    (n = jg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = cn(s, t, o)),
    e !== null && (pt(e, s, o, i), Gi(e, s, o)),
    o
  );
}
function Oo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Rc(e, t) {
  Sf(e, t), (e = e.alternate) && Sf(e, t);
}
function m1() {
  return null;
}
var Pg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dc(e) {
  this._internalRoot = e;
}
la.prototype.render = Dc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  aa(e, t, null, null);
};
la.prototype.unmount = Dc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      aa(null, e, null, null);
    }),
      (t[Vt] = null);
  }
};
function la(e) {
  this._internalRoot = e;
}
la.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
    Jt.splice(n, 0, e), n === 0 && ip(e);
  }
};
function Mc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ua(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function jf() {}
function p1(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Oo(o);
        i.call(c);
      };
    }
    var o = Ng(t, r, e, 0, null, !1, !1, "", jf);
    return (
      (e._reactRootContainer = o),
      (e[Vt] = o.current),
      Ls(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Oo(l);
      a.call(c);
    };
  }
  var l = Tc(e, 0, !1, null, null, !1, !1, "", jf);
  return (
    (e._reactRootContainer = l),
    (e[Vt] = l.current),
    Ls(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      aa(t, l, n, r);
    }),
    l
  );
}
function ca(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Oo(o);
        a.call(l);
      };
    }
    aa(t, o, e, s);
  } else o = p1(n, t, e, s, r);
  return Oo(o);
}
tp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = us(t.pendingLanes);
        n !== 0 &&
          (Xu(t, n | 1), Be(t, ue()), !(B & 6) && ((Lr = ue() + 500), Sn()));
      }
      break;
    case 13:
      Zn(function () {
        var r = It(e, 1);
        if (r !== null) {
          var s = Oe();
          pt(r, e, 1, s);
        }
      }),
        Rc(e, 1);
  }
};
Ju = function (e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Oe();
      pt(t, e, 134217728, n);
    }
    Rc(e, 134217728);
  }
};
np = function (e) {
  if (e.tag === 13) {
    var t = fn(e),
      n = It(e, t);
    if (n !== null) {
      var r = Oe();
      pt(n, e, t, r);
    }
    Rc(e, t);
  }
};
rp = function () {
  return q;
};
sp = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
Al = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = ea(r);
            if (!s) throw Error(C(90));
            Lm(r), Pl(r, s);
          }
        }
      }
      break;
    case "textarea":
      _m(e, n);
      break;
    case "select":
      (t = n.value), t != null && Sr(e, !!n.multiple, t, !1);
  }
};
Wm = Nc;
Hm = Zn;
var g1 = { usingClientEntryPoint: !1, Events: [ti, fr, ea, Um, $m, Nc] },
  es = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  y1 = {
    bundleType: es.bundleType,
    version: es.version,
    rendererPackageName: es.rendererPackageName,
    rendererConfig: es.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: es.findFiberByHostInstance || m1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ri.isDisabled && Ri.supportsFiber)
    try {
      (Qo = Ri.inject(y1)), (St = Ri);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g1;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mc(t)) throw Error(C(200));
  return h1(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!Mc(e)) throw Error(C(299));
  var n = !1,
    r = "",
    s = Pg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Tc(e, 1, !1, null, null, n, !1, r, s)),
    (e[Vt] = t.current),
    Ls(e.nodeType === 8 ? e.parentNode : e),
    new Dc(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Gm(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return Zn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!ua(t)) throw Error(C(200));
  return ca(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!Mc(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = Pg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Ng(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[Vt] = t.current),
    Ls(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new la(t);
};
Qe.render = function (e, t, n) {
  if (!ua(t)) throw Error(C(200));
  return ca(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!ua(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Zn(function () {
        ca(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vt] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = Nc;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ua(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return ca(e, t, n, !1, r);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function Cg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cg);
    } catch (e) {
      console.error(e);
    }
}
Cg(), (Cm.exports = Qe);
var x1 = Cm.exports,
  Nf = x1;
(vl.createRoot = Nf.createRoot), (vl.hydrateRoot = Nf.hydrateRoot);
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ws() {
  return (
    (Ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ws.apply(this, arguments)
  );
}
var sn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(sn || (sn = {}));
const Pf = "popstate";
function v1(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: o, hash: a } = r.location;
    return fu(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Lo(s);
  }
  return b1(t, n, null, e);
}
function de(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ac(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function w1() {
  return Math.random().toString(36).substr(2, 8);
}
function Cf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ws(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $r(t) : t,
      { state: n, key: (t && t.key) || r || w1() }
    )
  );
}
function Lo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function $r(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function b1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    a = sn.Pop,
    l = null,
    c = d();
  c == null && ((c = 0), o.replaceState(Ws({}, o.state, { idx: c }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = sn.Pop;
    let w = d(),
      x = w == null ? null : w - c;
    (c = w), l && l({ action: a, location: v.location, delta: x });
  }
  function h(w, x) {
    a = sn.Push;
    let m = fu(v.location, w, x);
    c = d() + 1;
    let y = Cf(m, c),
      b = v.createHref(m);
    try {
      o.pushState(y, "", b);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      s.location.assign(b);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function g(w, x) {
    a = sn.Replace;
    let m = fu(v.location, w, x);
    c = d();
    let y = Cf(m, c),
      b = v.createHref(m);
    o.replaceState(y, "", b),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function p(w) {
    let x = s.location.origin !== "null" ? s.location.origin : s.location.href,
      m = typeof w == "string" ? w : Lo(w);
    return (
      (m = m.replace(/ $/, "%20")),
      de(
        x,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, x)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(s, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Pf, f),
        (l = w),
        () => {
          s.removeEventListener(Pf, f), (l = null);
        }
      );
    },
    createHref(w) {
      return t(s, w);
    },
    createURL: p,
    encodeLocation(w) {
      let x = p(w);
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: h,
    replace: g,
    go(w) {
      return o.go(w);
    },
  };
  return v;
}
var Ef;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ef || (Ef = {}));
function k1(e, t, n) {
  return n === void 0 && (n = "/"), S1(e, t, n);
}
function S1(e, t, n, r) {
  let s = typeof t == "string" ? $r(t) : t,
    i = Oc(s.pathname || "/", n);
  if (i == null) return null;
  let o = Eg(e);
  j1(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let c = F1(i);
    a = A1(o[l], c);
  }
  return a;
}
function Eg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (de(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = mn([r, l.relativePath]),
      d = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (de(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Eg(i.children, t, d, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: D1(c, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of Tg(i.path)) s(i, o, l);
    }),
    t
  );
}
function Tg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let o = Tg(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function j1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : M1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const N1 = /^:[\w-]+$/,
  P1 = 3,
  C1 = 2,
  E1 = 1,
  T1 = 10,
  R1 = -2,
  Tf = (e) => e === "*";
function D1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Tf) && (r += R1),
    t && (r += C1),
    n
      .filter((s) => !Tf(s))
      .reduce((s, i) => s + (N1.test(i) ? P1 : i === "" ? E1 : T1), r)
  );
}
function M1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function A1(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = O1(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        d
      ),
      h = l.route;
    if (!f) return null;
    Object.assign(s, f.params),
      o.push({
        params: s,
        pathname: mn([i, f.pathname]),
        pathnameBase: B1(mn([i, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (i = mn([i, f.pathnameBase]));
  }
  return o;
}
function O1(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = L1(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: h, isOptional: g } = d;
      if (h === "*") {
        let v = a[f] || "";
        o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const p = a[f];
      return (
        g && !p ? (c[h] = void 0) : (c[h] = (p || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function L1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ac(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function F1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ac(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Oc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const _1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  V1 = (e) => _1.test(e);
function I1(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: s = "",
    } = typeof e == "string" ? $r(e) : e,
    i;
  if (n)
    if (V1(n)) i = n;
    else {
      if (n.includes("//")) {
        let o = n;
        (n = n.replace(/\/\/+/g, "/")),
          Ac(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (o + " -> " + n)
          );
      }
      n.startsWith("/") ? (i = Rf(n.substring(1), "/")) : (i = Rf(n, t));
    }
  else i = t;
  return { pathname: i, search: U1(r), hash: $1(s) };
}
function Rf(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function el(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function z1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Lc(e, t) {
  let n = z1(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Fc(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = $r(e))
    : ((s = Ws({}, e)),
      de(
        !s.pathname || !s.pathname.includes("?"),
        el("?", "pathname", "search", s)
      ),
      de(
        !s.pathname || !s.pathname.includes("#"),
        el("#", "pathname", "hash", s)
      ),
      de(!s.search || !s.search.includes("#"), el("#", "search", "hash", s)));
  let i = e === "" || s.pathname === "",
    o = i ? "/" : s.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      s.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = I1(s, a),
    c = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
const mn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  B1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  U1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  $1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function W1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Rg = ["post", "put", "patch", "delete"];
new Set(Rg);
const H1 = ["get", ...Rg];
new Set(H1);
/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hs() {
  return (
    (Hs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hs.apply(this, arguments)
  );
}
const _c = k.createContext(null),
  q1 = k.createContext(null),
  jn = k.createContext(null),
  da = k.createContext(null),
  $t = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Dg = k.createContext(null);
function Y1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Wr() || de(!1);
  let { basename: r, navigator: s } = k.useContext(jn),
    { hash: i, pathname: o, search: a } = Og(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : mn([r, o])),
    s.createHref({ pathname: l, search: a, hash: i })
  );
}
function Wr() {
  return k.useContext(da) != null;
}
function Nn() {
  return Wr() || de(!1), k.useContext(da).location;
}
function Mg(e) {
  k.useContext(jn).static || k.useLayoutEffect(e);
}
function Pn() {
  let { isDataRoute: e } = k.useContext($t);
  return e ? ow() : G1();
}
function G1() {
  Wr() || de(!1);
  let e = k.useContext(_c),
    { basename: t, future: n, navigator: r } = k.useContext(jn),
    { matches: s } = k.useContext($t),
    { pathname: i } = Nn(),
    o = JSON.stringify(Lc(s, n.v7_relativeSplatPath)),
    a = k.useRef(!1);
  return (
    Mg(() => {
      a.current = !0;
    }),
    k.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = Fc(c, JSON.parse(o), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : mn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, o, i, e]
    )
  );
}
function Ag() {
  let { matches: e } = k.useContext($t),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Og(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(jn),
    { matches: s } = k.useContext($t),
    { pathname: i } = Nn(),
    o = JSON.stringify(Lc(s, r.v7_relativeSplatPath));
  return k.useMemo(() => Fc(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function K1(e, t) {
  return Q1(e, t);
}
function Q1(e, t, n, r) {
  Wr() || de(!1);
  let { navigator: s } = k.useContext(jn),
    { matches: i } = k.useContext($t),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Nn(),
    d;
  if (t) {
    var f;
    let w = typeof t == "string" ? $r(t) : t;
    l === "/" || ((f = w.pathname) != null && f.startsWith(l)) || de(!1),
      (d = w);
  } else d = c;
  let h = d.pathname || "/",
    g = h;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    g = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let p = k1(e, { pathname: g }),
    v = tw(
      p &&
        p.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: mn([
              l,
              s.encodeLocation
                ? s.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : mn([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? k.createElement(
        da.Provider,
        {
          value: {
            location: Hs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: sn.Pop,
          },
        },
        v
      )
    : v;
}
function X1() {
  let e = iw(),
    t = W1(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: s }, n) : null,
    null
  );
}
const J1 = k.createElement(X1, null);
class Z1 extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          $t.Provider,
          { value: this.props.routeContext },
          k.createElement(Dg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ew(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = k.useContext(_c);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement($t.Provider, { value: t }, r)
  );
}
function tw(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let d = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || de(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: h, errors: g } = n,
          p =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || p) {
          (l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, f, h) => {
    let g,
      p = !1,
      v = null,
      w = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (v = f.route.errorElement || J1),
      l &&
        (c < 0 && h === 0
          ? (aw("route-fallback"), (p = !0), (w = null))
          : c === h &&
            ((p = !0), (w = f.route.hydrateFallbackElement || null))));
    let x = t.concat(o.slice(0, h + 1)),
      m = () => {
        let y;
        return (
          g
            ? (y = v)
            : p
            ? (y = w)
            : f.route.Component
            ? (y = k.createElement(f.route.Component, null))
            : f.route.element
            ? (y = f.route.element)
            : (y = d),
          k.createElement(ew, {
            match: f,
            routeContext: { outlet: d, matches: x, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? k.createElement(Z1, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: m(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Lg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Lg || {}),
  Fg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Fg || {});
function nw(e) {
  let t = k.useContext(_c);
  return t || de(!1), t;
}
function rw(e) {
  let t = k.useContext(q1);
  return t || de(!1), t;
}
function sw(e) {
  let t = k.useContext($t);
  return t || de(!1), t;
}
function _g(e) {
  let t = sw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || de(!1), n.route.id;
}
function iw() {
  var e;
  let t = k.useContext(Dg),
    n = rw(),
    r = _g();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ow() {
  let { router: e } = nw(Lg.UseNavigateStable),
    t = _g(Fg.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Mg(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (s, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Hs({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Df = {};
function aw(e, t, n) {
  Df[e] || (Df[e] = !0);
}
function lw(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Mf(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  Wr() || de(!1);
  let { future: i, static: o } = k.useContext(jn),
    { matches: a } = k.useContext($t),
    { pathname: l } = Nn(),
    c = Pn(),
    d = Fc(t, Lc(a, i.v7_relativeSplatPath), l, s === "path"),
    f = JSON.stringify(d);
  return (
    k.useEffect(
      () => c(JSON.parse(f), { replace: n, state: r, relative: s }),
      [c, f, s, n, r]
    ),
    null
  );
}
function Ze(e) {
  de(!1);
}
function uw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = sn.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  Wr() && de(!1);
  let l = t.replace(/^\/*/, "/"),
    c = k.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Hs({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o]
    );
  typeof r == "string" && (r = $r(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: g = null,
      key: p = "default",
    } = r,
    v = k.useMemo(() => {
      let w = Oc(d, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: h, state: g, key: p },
            navigationType: s,
          };
    }, [l, d, f, h, g, p, s]);
  return v == null
    ? null
    : k.createElement(
        jn.Provider,
        { value: c },
        k.createElement(da.Provider, { children: n, value: v })
      );
}
function cw(e) {
  let { children: t, location: n } = e;
  return K1(hu(t), n);
}
new Promise(() => {});
function hu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, s) => {
      if (!k.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === k.Fragment) {
        n.push.apply(n, hu(r.props.children, i));
        return;
      }
      r.type !== Ze && de(!1), !r.props.index || !r.props.children || de(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = hu(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mu() {
  return (
    (mu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mu.apply(this, arguments)
  );
}
function dw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    (s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function fw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function hw(e, t) {
  return e.button === 0 && (!t || t === "_self") && !fw(e);
}
const mw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  pw = "6";
try {
  window.__reactRouterVersion = pw;
} catch {}
const gw = "startTransition",
  Af = av[gw];
function yw(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = k.useRef();
  i.current == null && (i.current = v1({ window: s, v5Compat: !0 }));
  let o = i.current,
    [a, l] = k.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    d = k.useCallback(
      (f) => {
        c && Af ? Af(() => l(f)) : l(f);
      },
      [l, c]
    );
  return (
    k.useLayoutEffect(() => o.listen(d), [o, d]),
    k.useEffect(() => lw(r), [r]),
    k.createElement(uw, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const xw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  vw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  z = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: i,
        replace: o,
        state: a,
        target: l,
        to: c,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      h = dw(t, mw),
      { basename: g } = k.useContext(jn),
      p,
      v = !1;
    if (typeof c == "string" && vw.test(c) && ((p = c), xw))
      try {
        let y = new URL(window.location.href),
          b = c.startsWith("//") ? new URL(y.protocol + c) : new URL(c),
          j = Oc(b.pathname, g);
        b.origin === y.origin && j != null
          ? (c = j + b.search + b.hash)
          : (v = !0);
      } catch {}
    let w = Y1(c, { relative: s }),
      x = ww(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: s,
        viewTransition: f,
      });
    function m(y) {
      r && r(y), y.defaultPrevented || x(y);
    }
    return k.createElement(
      "a",
      mu({}, h, { href: p || w, onClick: v || i ? r : m, ref: n, target: l })
    );
  });
var Of;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Of || (Of = {}));
var Lf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Lf || (Lf = {}));
function ww(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: i,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Pn(),
    c = Nn(),
    d = Og(e, { relative: o });
  return k.useCallback(
    (f) => {
      if (hw(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Lo(c) === Lo(d);
        l(e, {
          replace: h,
          state: s,
          preventScrollReset: i,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [c, l, d, r, s, n, e, i, o, a]
  );
}
let bw = { data: "" },
  kw = (e) => {
    if (typeof window == "object") {
      let t =
        (e ? e.querySelector("#_goober") : window._goober) ||
        Object.assign(document.createElement("style"), {
          innerHTML: " ",
          id: "_goober",
        });
      return (
        (t.nonce = window.__nonce__),
        t.parentNode || (e || document.head).appendChild(t),
        t.firstChild
      );
    }
    return e || bw;
  },
  Sw = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  jw = /\/\*[^]*?\*\/|  +/g,
  Ff = /\n+/g,
  en = (e, t) => {
    let n = "",
      r = "",
      s = "";
    for (let i in e) {
      let o = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (n = i + " " + o + ";")
          : (r +=
              i[1] == "f"
                ? en(o, i)
                : i + "{" + en(o, i[1] == "k" ? "" : t) + "}")
        : typeof o == "object"
        ? (r += en(
            o,
            t
              ? t.replace(/([^,])+/g, (a) =>
                  i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) =>
                    /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l
                  )
                )
              : i
          ))
        : o != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (s += en.p ? en.p(i, o) : i + ":" + o + ";"));
    }
    return n + (t && s ? t + "{" + s + "}" : s) + r;
  },
  Tt = {},
  Vg = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Vg(e[n]);
      return t;
    }
    return e;
  },
  Nw = (e, t, n, r, s) => {
    let i = Vg(e),
      o =
        Tt[i] ||
        (Tt[i] = ((l) => {
          let c = 0,
            d = 11;
          for (; c < l.length; ) d = (101 * d + l.charCodeAt(c++)) >>> 0;
          return "go" + d;
        })(i));
    if (!Tt[o]) {
      let l =
        i !== e
          ? e
          : ((c) => {
              let d,
                f,
                h = [{}];
              for (; (d = Sw.exec(c.replace(jw, ""))); )
                d[4]
                  ? h.shift()
                  : d[3]
                  ? ((f = d[3].replace(Ff, " ").trim()),
                    h.unshift((h[0][f] = h[0][f] || {})))
                  : (h[0][d[1]] = d[2].replace(Ff, " ").trim());
              return h[0];
            })(e);
      Tt[o] = en(s ? { ["@keyframes " + o]: l } : l, n ? "" : "." + o);
    }
    let a = n && Tt.g ? Tt.g : null;
    return (
      n && (Tt.g = Tt[o]),
      ((l, c, d, f) => {
        f
          ? (c.data = c.data.replace(f, l))
          : c.data.indexOf(l) === -1 && (c.data = d ? l + c.data : c.data + l);
      })(Tt[o], t, r, a),
      o
    );
  },
  Pw = (e, t, n) =>
    e.reduce((r, s, i) => {
      let o = t[i];
      if (o && o.call) {
        let a = o(n),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        o = l
          ? "." + l
          : a && typeof a == "object"
          ? a.props
            ? ""
            : en(a, "")
          : a === !1
          ? ""
          : a;
      }
      return r + s + (o ?? "");
    }, "");
function fa(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Nw(
    n.unshift
      ? n.raw
        ? Pw(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, s) => Object.assign(r, s && s.call ? s(t.p) : s), {})
      : n,
    kw(t.target),
    t.g,
    t.o,
    t.k
  );
}
let Ig, pu, gu;
fa.bind({ g: 1 });
let Bt = fa.bind({ k: 1 });
function Cw(e, t, n, r) {
  (en.p = t), (Ig = e), (pu = n), (gu = r);
}
function Cn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function s(i, o) {
      let a = Object.assign({}, i),
        l = a.className || s.className;
      (n.p = Object.assign({ theme: pu && pu() }, a)),
        (n.o = / *go\d+/.test(l)),
        (a.className = fa.apply(n, r) + (l ? " " + l : ""));
      let c = e;
      return (
        e[0] && ((c = a.as || e), delete a.as), gu && c[0] && gu(a), Ig(c, a)
      );
    }
    return s;
  };
}
var Ew = (e) => typeof e == "function",
  Fo = (e, t) => (Ew(e) ? e(t) : e),
  Tw = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  zg = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Rw = 20,
  Vc = "default",
  Bg = (e, t) => {
    let { toastLimit: n } = e.settings;
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, n) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((o) =>
            o.id === t.toast.id ? { ...o, ...t.toast } : o
          ),
        };
      case 2:
        let { toast: r } = t;
        return Bg(e, {
          type: e.toasts.find((o) => o.id === r.id) ? 1 : 0,
          toast: r,
        });
      case 3:
        let { toastId: s } = t;
        return {
          ...e,
          toasts: e.toasts.map((o) =>
            o.id === s || s === void 0
              ? { ...o, dismissed: !0, visible: !1 }
              : o
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let i = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + i,
          })),
        };
    }
  },
  to = [],
  Ug = { toasts: [], pausedAt: void 0, settings: { toastLimit: Rw } },
  kt = {},
  $g = (e, t = Vc) => {
    (kt[t] = Bg(kt[t] || Ug, e)),
      to.forEach(([n, r]) => {
        n === t && r(kt[t]);
      });
  },
  Wg = (e) => Object.keys(kt).forEach((t) => $g(e, t)),
  Dw = (e) => Object.keys(kt).find((t) => kt[t].toasts.some((n) => n.id === e)),
  ha =
    (e = Vc) =>
    (t) => {
      $g(t, e);
    },
  Mw = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Aw = (e = {}, t = Vc) => {
    let [n, r] = k.useState(kt[t] || Ug),
      s = k.useRef(kt[t]);
    k.useEffect(
      () => (
        s.current !== kt[t] && r(kt[t]),
        to.push([t, r]),
        () => {
          let o = to.findIndex(([a]) => a === t);
          o > -1 && to.splice(o, 1);
        }
      ),
      [t]
    );
    let i = n.toasts.map((o) => {
      var a, l, c;
      return {
        ...e,
        ...e[o.type],
        ...o,
        removeDelay:
          o.removeDelay ||
          ((a = e[o.type]) == null ? void 0 : a.removeDelay) ||
          (e == null ? void 0 : e.removeDelay),
        duration:
          o.duration ||
          ((l = e[o.type]) == null ? void 0 : l.duration) ||
          (e == null ? void 0 : e.duration) ||
          Mw[o.type],
        style: {
          ...e.style,
          ...((c = e[o.type]) == null ? void 0 : c.style),
          ...o.style,
        },
      };
    });
    return { ...n, toasts: i };
  },
  Ow = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Tw(),
  }),
  ri = (e) => (t, n) => {
    let r = Ow(t, e, n);
    return ha(r.toasterId || Dw(r.id))({ type: 2, toast: r }), r.id;
  },
  ye = (e, t) => ri("blank")(e, t);
ye.error = ri("error");
ye.success = ri("success");
ye.loading = ri("loading");
ye.custom = ri("custom");
ye.dismiss = (e, t) => {
  let n = { type: 3, toastId: e };
  t ? ha(t)(n) : Wg(n);
};
ye.dismissAll = (e) => ye.dismiss(void 0, e);
ye.remove = (e, t) => {
  let n = { type: 4, toastId: e };
  t ? ha(t)(n) : Wg(n);
};
ye.removeAll = (e) => ye.remove(void 0, e);
ye.promise = (e, t, n) => {
  let r = ye.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    typeof e == "function" && (e = e()),
    e
      .then((s) => {
        let i = t.success ? Fo(t.success, s) : void 0;
        return (
          i
            ? ye.success(i, {
                id: r,
                ...n,
                ...(n == null ? void 0 : n.success),
              })
            : ye.dismiss(r),
          s
        );
      })
      .catch((s) => {
        let i = t.error ? Fo(t.error, s) : void 0;
        i
          ? ye.error(i, { id: r, ...n, ...(n == null ? void 0 : n.error) })
          : ye.dismiss(r);
      }),
    e
  );
};
var Lw = 1e3,
  Fw = (e, t = "default") => {
    let { toasts: n, pausedAt: r } = Aw(e, t),
      s = k.useRef(new Map()).current,
      i = k.useCallback((f, h = Lw) => {
        if (s.has(f)) return;
        let g = setTimeout(() => {
          s.delete(f), o({ type: 4, toastId: f });
        }, h);
        s.set(f, g);
      }, []);
    k.useEffect(() => {
      if (r) return;
      let f = Date.now(),
        h = n.map((g) => {
          if (g.duration === 1 / 0) return;
          let p = (g.duration || 0) + g.pauseDuration - (f - g.createdAt);
          if (p < 0) {
            g.visible && ye.dismiss(g.id);
            return;
          }
          return setTimeout(() => ye.dismiss(g.id, t), p);
        });
      return () => {
        h.forEach((g) => g && clearTimeout(g));
      };
    }, [n, r, t]);
    let o = k.useCallback(ha(t), [t]),
      a = k.useCallback(() => {
        o({ type: 5, time: Date.now() });
      }, [o]),
      l = k.useCallback(
        (f, h) => {
          o({ type: 1, toast: { id: f, height: h } });
        },
        [o]
      ),
      c = k.useCallback(() => {
        r && o({ type: 6, time: Date.now() });
      }, [r, o]),
      d = k.useCallback(
        (f, h) => {
          let {
              reverseOrder: g = !1,
              gutter: p = 8,
              defaultPosition: v,
            } = h || {},
            w = n.filter(
              (y) => (y.position || v) === (f.position || v) && y.height
            ),
            x = w.findIndex((y) => y.id === f.id),
            m = w.filter((y, b) => b < x && y.visible).length;
          return w
            .filter((y) => y.visible)
            .slice(...(g ? [m + 1] : [0, m]))
            .reduce((y, b) => y + (b.height || 0) + p, 0);
        },
        [n]
      );
    return (
      k.useEffect(() => {
        n.forEach((f) => {
          if (f.dismissed) i(f.id, f.removeDelay);
          else {
            let h = s.get(f.id);
            h && (clearTimeout(h), s.delete(f.id));
          }
        });
      }, [n, i]),
      {
        toasts: n,
        handlers: {
          updateHeight: l,
          startPause: a,
          endPause: c,
          calculateOffset: d,
        },
      }
    );
  },
  _w = Bt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Vw = Bt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Iw = Bt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  zw = Cn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_w} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Vw} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Iw} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Bw = Bt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Uw = Cn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Bw} 1s linear infinite;
`,
  $w = Bt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Ww = Bt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Hw = Cn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$w} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ww} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  qw = Cn("div")`
  position: absolute;
`,
  Yw = Cn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Gw = Bt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Kw = Cn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Gw} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Qw = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? k.createElement(Kw, null, t)
        : t
      : n === "blank"
      ? null
      : k.createElement(
          Yw,
          null,
          k.createElement(Uw, { ...r }),
          n !== "loading" &&
            k.createElement(
              qw,
              null,
              n === "error"
                ? k.createElement(zw, { ...r })
                : k.createElement(Hw, { ...r })
            )
        );
  },
  Xw = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Jw = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  Zw = "0%{opacity:0;} 100%{opacity:1;}",
  eb = "0%{opacity:1;} 100%{opacity:0;}",
  tb = Cn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  nb = Cn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  rb = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, s] = zg() ? [Zw, eb] : [Xw(n), Jw(n)];
    return {
      animation: t
        ? `${Bt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Bt(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  sb = k.memo(({ toast: e, position: t, style: n, children: r }) => {
    let s = e.height
        ? rb(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = k.createElement(Qw, { toast: e }),
      o = k.createElement(nb, { ...e.ariaProps }, Fo(e.message, e));
    return k.createElement(
      tb,
      { className: e.className, style: { ...s, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: o })
        : k.createElement(k.Fragment, null, i, o)
    );
  });
Cw(k.createElement);
var ib = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: s,
  }) => {
    let i = k.useCallback(
      (o) => {
        if (o) {
          let a = () => {
            let l = o.getBoundingClientRect().height;
            r(e, l);
          };
          a(),
            new MutationObserver(a).observe(o, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return k.createElement("div", { ref: i, className: t, style: n }, s);
  },
  ob = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      s = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: zg() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...s,
    };
  },
  ab = fa`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Di = 16,
  lb = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: s,
    toasterId: i,
    containerStyle: o,
    containerClassName: a,
  }) => {
    let { toasts: l, handlers: c } = Fw(n, i);
    return k.createElement(
      "div",
      {
        "data-rht-toaster": i || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Di,
          left: Di,
          right: Di,
          bottom: Di,
          pointerEvents: "none",
          ...o,
        },
        className: a,
        onMouseEnter: c.startPause,
        onMouseLeave: c.endPause,
      },
      l.map((d) => {
        let f = d.position || t,
          h = c.calculateOffset(d, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          g = ob(f, h);
        return k.createElement(
          ib,
          {
            id: d.id,
            key: d.id,
            onHeightUpdate: c.updateHeight,
            className: d.visible ? ab : "",
            style: g,
          },
          d.type === "custom"
            ? Fo(d.message, d)
            : s
            ? s(d)
            : k.createElement(sb, { toast: d, position: f })
        );
      })
    );
  },
  V = ye;
function Hg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ub } = Object.prototype,
  { getPrototypeOf: Ic } = Object,
  { iterator: ma, toStringTag: qg } = Symbol,
  pa = ((e) => (t) => {
    const n = ub.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  yt = (e) => ((e = e.toLowerCase()), (t) => pa(t) === e),
  ga = (e) => (t) => typeof t === e,
  { isArray: Hr } = Array,
  Fr = ga("undefined");
function si(e) {
  return (
    e !== null &&
    !Fr(e) &&
    e.constructor !== null &&
    !Fr(e.constructor) &&
    Ue(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Yg = yt("ArrayBuffer");
function cb(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Yg(e.buffer)),
    t
  );
}
const db = ga("string"),
  Ue = ga("function"),
  Gg = ga("number"),
  ii = (e) => e !== null && typeof e == "object",
  fb = (e) => e === !0 || e === !1,
  no = (e) => {
    if (pa(e) !== "object") return !1;
    const t = Ic(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(qg in e) &&
      !(ma in e)
    );
  },
  hb = (e) => {
    if (!ii(e) || si(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  mb = yt("Date"),
  pb = yt("File"),
  gb = yt("Blob"),
  yb = yt("FileList"),
  xb = (e) => ii(e) && Ue(e.pipe),
  vb = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ue(e.append) &&
          ((t = pa(e)) === "formdata" ||
            (t === "object" &&
              Ue(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  wb = yt("URLSearchParams"),
  [bb, kb, Sb, jb] = ["ReadableStream", "Request", "Response", "Headers"].map(
    yt
  ),
  Nb = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Hr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    if (si(e)) return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Kg(e, t) {
  if (si(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Bn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Qg = (e) => !Fr(e) && e !== Bn;
function yu() {
  const { caseless: e, skipUndefined: t } = (Qg(this) && this) || {},
    n = {},
    r = (s, i) => {
      const o = (e && Kg(n, i)) || i;
      no(n[o]) && no(s)
        ? (n[o] = yu(n[o], s))
        : no(s)
        ? (n[o] = yu({}, s))
        : Hr(s)
        ? (n[o] = s.slice())
        : (!t || !Fr(s)) && (n[o] = s);
    };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && oi(arguments[s], r);
  return n;
}
const Pb = (e, t, n, { allOwnKeys: r } = {}) => (
    oi(
      t,
      (s, i) => {
        n && Ue(s) ? (e[i] = Hg(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Cb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Eb = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Tb = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && Ic(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Rb = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Db = (e) => {
    if (!e) return null;
    if (Hr(e)) return e;
    let t = e.length;
    if (!Gg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Mb = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ic(Uint8Array)),
  Ab = (e, t) => {
    const r = (e && e[ma]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  Ob = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Lb = yt("HTMLFormElement"),
  Fb = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  _f = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  _b = yt("RegExp"),
  Xg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    oi(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  Vb = (e) => {
    Xg(e, (t, n) => {
      if (Ue(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ue(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Ib = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return Hr(e) ? r(e) : r(String(e).split(t)), n;
  },
  zb = () => {},
  Bb = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Ub(e) {
  return !!(e && Ue(e.append) && e[qg] === "FormData" && e[ma]);
}
const $b = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (ii(r)) {
          if (t.indexOf(r) >= 0) return;
          if (si(r)) return r;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = Hr(r) ? [] : {};
            return (
              oi(r, (o, a) => {
                const l = n(o, s + 1);
                !Fr(l) && (i[a] = l);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Wb = yt("AsyncFunction"),
  Hb = (e) => e && (ii(e) || Ue(e)) && Ue(e.then) && Ue(e.catch),
  Jg = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Bn.addEventListener(
            "message",
            ({ source: s, data: i }) => {
              s === Bn && i === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Bn.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ue(Bn.postMessage)
  ),
  qb =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Bn)
      : (typeof process < "u" && process.nextTick) || Jg,
  Yb = (e) => e != null && Ue(e[ma]),
  S = {
    isArray: Hr,
    isArrayBuffer: Yg,
    isBuffer: si,
    isFormData: vb,
    isArrayBufferView: cb,
    isString: db,
    isNumber: Gg,
    isBoolean: fb,
    isObject: ii,
    isPlainObject: no,
    isEmptyObject: hb,
    isReadableStream: bb,
    isRequest: kb,
    isResponse: Sb,
    isHeaders: jb,
    isUndefined: Fr,
    isDate: mb,
    isFile: pb,
    isBlob: gb,
    isRegExp: _b,
    isFunction: Ue,
    isStream: xb,
    isURLSearchParams: wb,
    isTypedArray: Mb,
    isFileList: yb,
    forEach: oi,
    merge: yu,
    extend: Pb,
    trim: Nb,
    stripBOM: Cb,
    inherits: Eb,
    toFlatObject: Tb,
    kindOf: pa,
    kindOfTest: yt,
    endsWith: Rb,
    toArray: Db,
    forEachEntry: Ab,
    matchAll: Ob,
    isHTMLForm: Lb,
    hasOwnProperty: _f,
    hasOwnProp: _f,
    reduceDescriptors: Xg,
    freezeMethods: Vb,
    toObjectSet: Ib,
    toCamelCase: Fb,
    noop: zb,
    toFiniteNumber: Bb,
    findKey: Kg,
    global: Bn,
    isContextDefined: Qg,
    isSpecCompliantForm: Ub,
    toJSONObject: $b,
    isAsyncFn: Wb,
    isThenable: Hb,
    setImmediate: Jg,
    asap: qb,
    isIterable: Yb,
  };
function _(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
S.inherits(_, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Zg = _.prototype,
  ey = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ey[e] = { value: e };
});
Object.defineProperties(_, ey);
Object.defineProperty(Zg, "isAxiosError", { value: !0 });
_.from = (e, t, n, r, s, i) => {
  const o = Object.create(Zg);
  S.toFlatObject(
    e,
    o,
    function (d) {
      return d !== Error.prototype;
    },
    (c) => c !== "isAxiosError"
  );
  const a = e && e.message ? e.message : "Error",
    l = t == null && e ? e.code : t;
  return (
    _.call(o, a, l, n, r, s),
    e &&
      o.cause == null &&
      Object.defineProperty(o, "cause", { value: e, configurable: !0 }),
    (o.name = (e && e.name) || "Error"),
    i && Object.assign(o, i),
    o
  );
};
const Gb = null;
function xu(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function ty(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Vf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = ty(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Kb(e) {
  return S.isArray(e) && !e.some(xu);
}
const Qb = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ya(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, w) {
        return !S.isUndefined(w[v]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || d,
    i = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(s)) throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (S.isDate(p)) return p.toISOString();
    if (S.isBoolean(p)) return p.toString();
    if (!l && S.isBlob(p))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(p) || S.isTypedArray(p)
      ? l && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function d(p, v, w) {
    let x = p;
    if (p && !w && typeof p == "object") {
      if (S.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (S.isArray(p) && Kb(p)) ||
        ((S.isFileList(p) || S.endsWith(v, "[]")) && (x = S.toArray(p)))
      )
        return (
          (v = ty(v)),
          x.forEach(function (y, b) {
            !(S.isUndefined(y) || y === null) &&
              t.append(
                o === !0 ? Vf([v], b, i) : o === null ? v : v + "[]",
                c(y)
              );
          }),
          !1
        );
    }
    return xu(p) ? !0 : (t.append(Vf(w, v, i), c(p)), !1);
  }
  const f = [],
    h = Object.assign(Qb, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: xu,
    });
  function g(p, v) {
    if (!S.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(p),
        S.forEach(p, function (x, m) {
          (!(S.isUndefined(x) || x === null) &&
            s.call(t, x, S.isString(m) ? m.trim() : m, v, h)) === !0 &&
            g(x, v ? v.concat(m) : [m]);
        }),
        f.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function If(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function zc(e, t) {
  (this._pairs = []), e && ya(e, this, t);
}
const ny = zc.prototype;
ny.append = function (t, n) {
  this._pairs.push([t, n]);
};
ny.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, If);
      }
    : If;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Xb(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function ry(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Xb;
  S.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = S.isURLSearchParams(t) ? t.toString() : new zc(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class zf {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const sy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Jb = typeof URLSearchParams < "u" ? URLSearchParams : zc,
  Zb = typeof FormData < "u" ? FormData : null,
  ek = typeof Blob < "u" ? Blob : null,
  tk = {
    isBrowser: !0,
    classes: { URLSearchParams: Jb, FormData: Zb, Blob: ek },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Bc = typeof window < "u" && typeof document < "u",
  vu = (typeof navigator == "object" && navigator) || void 0,
  nk =
    Bc &&
    (!vu || ["ReactNative", "NativeScript", "NS"].indexOf(vu.product) < 0),
  rk =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  sk = (Bc && window.location.href) || "http://localhost",
  ik = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Bc,
        hasStandardBrowserEnv: nk,
        hasStandardBrowserWebWorkerEnv: rk,
        navigator: vu,
        origin: sk,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ce = { ...ik, ...tk };
function ok(e, t) {
  return ya(e, new Ce.classes.URLSearchParams(), {
    visitor: function (n, r, s, i) {
      return Ce.isNode && S.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : i.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function ak(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function lk(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function iy(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = i >= n.length;
    return (
      (o = !o && S.isArray(s) ? s.length : o),
      l
        ? (S.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
        : ((!s[o] || !S.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && S.isArray(s[o]) && (s[o] = lk(s[o])),
          !a)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, s) => {
        t(ak(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function uk(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ai = {
  transitional: sy,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = S.isObject(t);
      if ((i && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return s ? JSON.stringify(iy(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ok(t, this.formSerializer).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return ya(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), uk(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ai.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? _.from(a, _.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ce.classes.FormData, Blob: Ce.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ai.headers[e] = {};
});
const ck = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  dk = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && ck[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Bf = Symbol("internals");
function ts(e) {
  return e && String(e).trim().toLowerCase();
}
function ro(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(ro) : String(e);
}
function fk(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const hk = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tl(e, t, n, r, s) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function mk(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function pk(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
let $e = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, l, c) {
      const d = ts(l);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = S.findKey(s, d);
      (!f || s[f] === void 0 || c === !0 || (c === void 0 && s[f] !== !1)) &&
        (s[f || l] = ro(a));
    }
    const o = (a, l) => S.forEach(a, (c, d) => i(c, d, l));
    if (S.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (S.isString(t) && (t = t.trim()) && !hk(t)) o(dk(t), n);
    else if (S.isObject(t) && S.isIterable(t)) {
      let a = {},
        l,
        c;
      for (const d of t) {
        if (!S.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        a[(c = d[0])] = (l = a[c])
          ? S.isArray(l)
            ? [...l, d[1]]
            : [l, d[1]]
          : d[1];
      }
      o(a, n);
    } else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = ts(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return fk(s);
        if (S.isFunction(n)) return n.call(this, s, r);
        if (S.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ts(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || tl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = ts(o)), o)) {
        const a = S.findKey(r, o);
        a && (!n || tl(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return S.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || tl(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (s, i) => {
        const o = S.findKey(r, i);
        if (o) {
          (n[o] = ro(s)), delete n[i];
          return;
        }
        const a = t ? mk(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = ro(s)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Bf] = this[Bf] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = ts(o);
      r[a] || (pk(s, o), (r[a] = !0));
    }
    return S.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
$e.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors($e.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods($e);
function nl(e, t) {
  const n = this || ai,
    r = t || n,
    s = $e.from(r.headers);
  let i = r.data;
  return (
    S.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function oy(e) {
  return !!(e && e.__CANCEL__);
}
function qr(e, t, n) {
  _.call(this, e ?? "canceled", _.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
S.inherits(qr, _, { __CANCEL__: !0 });
function ay(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new _(
          "Request failed with status code " + n.status,
          [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function gk(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function yk(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        d = r[i];
      o || (o = c), (n[s] = l), (r[s] = c);
      let f = i,
        h = 0;
      for (; f !== s; ) (h += n[f++]), (f = f % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t)) return;
      const g = d && c - d;
      return g ? Math.round((h * 1e3) / g) : void 0;
    }
  );
}
function xk(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (c, d = Date.now()) => {
    (n = d), (s = null), i && (clearTimeout(i), (i = null)), e(...c);
  };
  return [
    (...c) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? o(c, d)
        : ((s = c),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - f)));
    },
    () => s && o(s),
  ];
}
const _o = (e, t, n = 3) => {
    let r = 0;
    const s = yk(50, 250);
    return xk((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = o - r,
        c = s(l),
        d = o <= a;
      r = o;
      const f = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: c || void 0,
        estimated: c && a && d ? (a - o) / c : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Uf = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  $f =
    (e) =>
    (...t) =>
      S.asap(() => e(...t)),
  vk = Ce.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Ce.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Ce.origin),
        Ce.navigator && /(msie|trident)/i.test(Ce.navigator.userAgent)
      )
    : () => !0,
  wk = Ce.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i, o) {
          if (typeof document > "u") return;
          const a = [`${e}=${encodeURIComponent(t)}`];
          S.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`),
            S.isString(r) && a.push(`path=${r}`),
            S.isString(s) && a.push(`domain=${s}`),
            i === !0 && a.push("secure"),
            S.isString(o) && a.push(`SameSite=${o}`),
            (document.cookie = a.join("; "));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.match(
            new RegExp("(?:^|; )" + e + "=([^;]*)")
          );
          return t ? decodeURIComponent(t[1]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function bk(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function kk(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ly(e, t, n) {
  let r = !bk(t);
  return e && (r || n == !1) ? kk(e, t) : t;
}
const Wf = (e) => (e instanceof $e ? { ...e } : e);
function er(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, f, h) {
    return S.isPlainObject(c) && S.isPlainObject(d)
      ? S.merge.call({ caseless: h }, c, d)
      : S.isPlainObject(d)
      ? S.merge({}, d)
      : S.isArray(d)
      ? d.slice()
      : d;
  }
  function s(c, d, f, h) {
    if (S.isUndefined(d)) {
      if (!S.isUndefined(c)) return r(void 0, c, f, h);
    } else return r(c, d, f, h);
  }
  function i(c, d) {
    if (!S.isUndefined(d)) return r(void 0, d);
  }
  function o(c, d) {
    if (S.isUndefined(d)) {
      if (!S.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, d);
  }
  function a(c, d, f) {
    if (f in t) return r(c, d);
    if (f in e) return r(void 0, c);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, d, f) => s(Wf(c), Wf(d), f, !0),
  };
  return (
    S.forEach(Object.keys({ ...e, ...t }), function (d) {
      const f = l[d] || s,
        h = f(e[d], t[d], d);
      (S.isUndefined(h) && f !== a) || (n[d] = h);
    }),
    n
  );
}
const uy = (e) => {
    const t = er({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    if (
      ((t.headers = o = $e.from(o)),
      (t.url = ry(
        ly(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        ),
      S.isFormData(n))
    ) {
      if (Ce.hasStandardBrowserEnv || Ce.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if (S.isFunction(n.getHeaders)) {
        const l = n.getHeaders(),
          c = ["content-type", "content-length"];
        Object.entries(l).forEach(([d, f]) => {
          c.includes(d.toLowerCase()) && o.set(d, f);
        });
      }
    }
    if (
      Ce.hasStandardBrowserEnv &&
      (r && S.isFunction(r) && (r = r(t)), r || (r !== !1 && vk(t.url)))
    ) {
      const l = s && i && wk.read(i);
      l && o.set(s, l);
    }
    return t;
  },
  Sk = typeof XMLHttpRequest < "u",
  jk =
    Sk &&
    function (e) {
      return new Promise(function (n, r) {
        const s = uy(e);
        let i = s.data;
        const o = $e.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = s,
          d,
          f,
          h,
          g,
          p;
        function v() {
          g && g(),
            p && p(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d);
        }
        let w = new XMLHttpRequest();
        w.open(s.method.toUpperCase(), s.url, !0), (w.timeout = s.timeout);
        function x() {
          if (!w) return;
          const y = $e.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            j = {
              data:
                !a || a === "text" || a === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: y,
              config: e,
              request: w,
            };
          ay(
            function (N) {
              n(N), v();
            },
            function (N) {
              r(N), v();
            },
            j
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = x)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(x);
            }),
          (w.onabort = function () {
            w &&
              (r(new _("Request aborted", _.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function (b) {
            const j = b && b.message ? b.message : "Network Error",
              E = new _(j, _.ERR_NETWORK, e, w);
            (E.event = b || null), r(E), (w = null);
          }),
          (w.ontimeout = function () {
            let b = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const j = s.transitional || sy;
            s.timeoutErrorMessage && (b = s.timeoutErrorMessage),
              r(
                new _(
                  b,
                  j.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            S.forEach(o.toJSON(), function (b, j) {
              w.setRequestHeader(j, b);
            }),
          S.isUndefined(s.withCredentials) ||
            (w.withCredentials = !!s.withCredentials),
          a && a !== "json" && (w.responseType = s.responseType),
          c && (([h, p] = _o(c, !0)), w.addEventListener("progress", h)),
          l &&
            w.upload &&
            (([f, g] = _o(l)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", g)),
          (s.cancelToken || s.signal) &&
            ((d = (y) => {
              w &&
                (r(!y || y.type ? new qr(null, e, w) : y),
                w.abort(),
                (w = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
        const m = gk(s.url);
        if (m && Ce.protocols.indexOf(m) === -1) {
          r(new _("Unsupported protocol " + m + ":", _.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(i || null);
      });
    },
  Nk = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (c) {
        if (!s) {
          (s = !0), a();
          const d = c instanceof Error ? c : this.reason;
          r.abort(
            d instanceof _ ? d : new qr(d instanceof Error ? d.message : d)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new _(`timeout ${t} of ms exceeded`, _.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(i)
              : c.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", i));
      const { signal: l } = r;
      return (l.unsubscribe = () => S.asap(a)), l;
    }
  },
  Pk = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  Ck = async function* (e, t) {
    for await (const n of Ek(e)) yield* Pk(n, t);
  },
  Ek = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Hf = (e, t, n, r) => {
    const s = Ck(e, t);
    let i = 0,
      o,
      a = (l) => {
        o || ((o = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: c, value: d } = await s.next();
            if (c) {
              a(), l.close();
              return;
            }
            let f = d.byteLength;
            if (n) {
              let h = (i += f);
              n(h);
            }
            l.enqueue(new Uint8Array(d));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(l) {
          return a(l), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  qf = 64 * 1024,
  { isFunction: Mi } = S,
  Tk = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    S.global
  ),
  { ReadableStream: Yf, TextEncoder: Gf } = S.global,
  Kf = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Rk = (e) => {
    e = S.merge.call({ skipUndefined: !0 }, Tk, e);
    const { fetch: t, Request: n, Response: r } = e,
      s = t ? Mi(t) : typeof fetch == "function",
      i = Mi(n),
      o = Mi(r);
    if (!s) return !1;
    const a = s && Mi(Yf),
      l =
        s &&
        (typeof Gf == "function"
          ? (
              (p) => (v) =>
                p.encode(v)
            )(new Gf())
          : async (p) => new Uint8Array(await new n(p).arrayBuffer())),
      c =
        i &&
        a &&
        Kf(() => {
          let p = !1;
          const v = new n(Ce.origin, {
            body: new Yf(),
            method: "POST",
            get duplex() {
              return (p = !0), "half";
            },
          }).headers.has("Content-Type");
          return p && !v;
        }),
      d = o && a && Kf(() => S.isReadableStream(new r("").body)),
      f = { stream: d && ((p) => p.body) };
    s &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
        !f[p] &&
          (f[p] = (v, w) => {
            let x = v && v[p];
            if (x) return x.call(v);
            throw new _(
              `Response type '${p}' is not supported`,
              _.ERR_NOT_SUPPORT,
              w
            );
          });
      });
    const h = async (p) => {
        if (p == null) return 0;
        if (S.isBlob(p)) return p.size;
        if (S.isSpecCompliantForm(p))
          return (
            await new n(Ce.origin, { method: "POST", body: p }).arrayBuffer()
          ).byteLength;
        if (S.isArrayBufferView(p) || S.isArrayBuffer(p)) return p.byteLength;
        if ((S.isURLSearchParams(p) && (p = p + ""), S.isString(p)))
          return (await l(p)).byteLength;
      },
      g = async (p, v) => {
        const w = S.toFiniteNumber(p.getContentLength());
        return w ?? h(v);
      };
    return async (p) => {
      let {
          url: v,
          method: w,
          data: x,
          signal: m,
          cancelToken: y,
          timeout: b,
          onDownloadProgress: j,
          onUploadProgress: E,
          responseType: N,
          headers: P,
          withCredentials: A = "same-origin",
          fetchOptions: L,
        } = uy(p),
        ae = t || fetch;
      N = N ? (N + "").toLowerCase() : "text";
      let se = Nk([m, y && y.toAbortSignal()], b),
        le = null;
      const K =
        se &&
        se.unsubscribe &&
        (() => {
          se.unsubscribe();
        });
      let at;
      try {
        if (
          E &&
          c &&
          w !== "get" &&
          w !== "head" &&
          (at = await g(P, x)) !== 0
        ) {
          let D = new n(v, { method: "POST", body: x, duplex: "half" }),
            $;
          if (
            (S.isFormData(x) &&
              ($ = D.headers.get("content-type")) &&
              P.setContentType($),
            D.body)
          ) {
            const [lt, De] = Uf(at, _o($f(E)));
            x = Hf(D.body, qf, lt, De);
          }
        }
        S.isString(A) || (A = A ? "include" : "omit");
        const U = i && "credentials" in n.prototype,
          Re = {
            ...L,
            signal: se,
            method: w.toUpperCase(),
            headers: P.normalize().toJSON(),
            body: x,
            duplex: "half",
            credentials: U ? A : void 0,
          };
        le = i && new n(v, Re);
        let T = await (i ? ae(le, L) : ae(v, Re));
        const M = d && (N === "stream" || N === "response");
        if (d && (j || (M && K))) {
          const D = {};
          ["status", "statusText", "headers"].forEach((Et) => {
            D[Et] = T[Et];
          });
          const $ = S.toFiniteNumber(T.headers.get("content-length")),
            [lt, De] = (j && Uf($, _o($f(j), !0))) || [];
          T = new r(
            Hf(T.body, qf, lt, () => {
              De && De(), K && K();
            }),
            D
          );
        }
        N = N || "text";
        let F = await f[S.findKey(f, N) || "text"](T, p);
        return (
          !M && K && K(),
          await new Promise((D, $) => {
            ay(D, $, {
              data: F,
              headers: $e.from(T.headers),
              status: T.status,
              statusText: T.statusText,
              config: p,
              request: le,
            });
          })
        );
      } catch (U) {
        throw (
          (K && K(),
          U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message)
            ? Object.assign(new _("Network Error", _.ERR_NETWORK, p, le), {
                cause: U.cause || U,
              })
            : _.from(U, U && U.code, p, le))
        );
      }
    };
  },
  Dk = new Map(),
  cy = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: s } = t,
      i = [r, s, n];
    let o = i.length,
      a = o,
      l,
      c,
      d = Dk;
    for (; a--; )
      (l = i[a]),
        (c = d.get(l)),
        c === void 0 && d.set(l, (c = a ? new Map() : Rk(t))),
        (d = c);
    return c;
  };
cy();
const Uc = { http: Gb, xhr: jk, fetch: { get: cy } };
S.forEach(Uc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qf = (e) => `- ${e}`,
  Mk = (e) => S.isFunction(e) || e === null || e === !1;
function Ak(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let a;
    if (
      ((s = r),
      !Mk(r) && ((s = Uc[(a = String(r)).toLowerCase()]), s === void 0))
    )
      throw new _(`Unknown adapter '${a}'`);
    if (s && (S.isFunction(s) || (s = s.get(t)))) break;
    i[a || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([l, c]) =>
        `adapter ${l} ` +
        (c === !1
          ? "is not supported by the environment"
          : "is not available in the build")
    );
    let a = n
      ? o.length > 1
        ? `since :
` +
          o.map(Qf).join(`
`)
        : " " + Qf(o[0])
      : "as no adapter specified";
    throw new _(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const dy = { getAdapter: Ak, adapters: Uc };
function rl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new qr(null, e);
}
function Xf(e) {
  return (
    rl(e),
    (e.headers = $e.from(e.headers)),
    (e.data = nl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    dy
      .getAdapter(
        e.adapter || ai.adapter,
        e
      )(e)
      .then(
        function (r) {
          return (
            rl(e),
            (r.data = nl.call(e, e.transformResponse, r)),
            (r.headers = $e.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            oy(r) ||
              (rl(e),
              r &&
                r.response &&
                ((r.response.data = nl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = $e.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const fy = "1.13.2",
  xa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    xa[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Jf = {};
xa.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      "[Axios v" +
      fy +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, a) => {
    if (t === !1)
      throw new _(
        s(o, " has been removed" + (n ? " in " + n : "")),
        _.ERR_DEPRECATED
      );
    return (
      n &&
        !Jf[o] &&
        ((Jf[o] = !0),
        console.warn(
          s(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, a) : !0
    );
  };
};
xa.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ok(e, t, n) {
  if (typeof e != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const a = e[i],
        l = a === void 0 || o(a, i, e);
      if (l !== !0)
        throw new _("option " + i + " must be " + l, _.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new _("Unknown option " + i, _.ERR_BAD_OPTION);
  }
}
const so = { assertOptions: Ok, validators: xa },
  vt = so.validators;
let Hn = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new zf(), response: new zf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = er(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      so.assertOptions(
        r,
        {
          silentJSONParsing: vt.transitional(vt.boolean),
          forcedJSONParsing: vt.transitional(vt.boolean),
          clarifyTimeoutError: vt.transitional(vt.boolean),
        },
        !1
      ),
      s != null &&
        (S.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : so.assertOptions(
              s,
              { encode: vt.function, serialize: vt.function },
              !0
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      so.assertOptions(
        n,
        {
          baseUrl: vt.spelling("baseURL"),
          withXsrfToken: vt.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && S.merge(i.common, i[n.method]);
    i &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete i[p];
        }
      ),
      (n.headers = $e.concat(o, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (v) {
      c.push(v.fulfilled, v.rejected);
    });
    let d,
      f = 0,
      h;
    if (!l) {
      const p = [Xf.bind(this), void 0];
      for (
        p.unshift(...a), p.push(...c), h = p.length, d = Promise.resolve(n);
        f < h;

      )
        d = d.then(p[f++], p[f++]);
      return d;
    }
    h = a.length;
    let g = n;
    for (; f < h; ) {
      const p = a[f++],
        v = a[f++];
      try {
        g = p(g);
      } catch (w) {
        v.call(this, w);
        break;
      }
    }
    try {
      d = Xf.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, h = c.length; f < h; ) d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = er(this.defaults, t);
    const n = ly(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ry(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function (t) {
  Hn.prototype[t] = function (n, r) {
    return this.request(
      er(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        er(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (Hn.prototype[t] = n()), (Hn.prototype[t + "Form"] = n(!0));
});
let Lk = class hy {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        r.reason || ((r.reason = new qr(i, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new hy(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
};
function Fk(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function _k(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const wu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(wu).forEach(([e, t]) => {
  wu[t] = e;
});
function my(e) {
  const t = new Hn(e),
    n = Hg(Hn.prototype.request, t);
  return (
    S.extend(n, Hn.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return my(er(e, s));
    }),
    n
  );
}
const fe = my(ai);
fe.Axios = Hn;
fe.CanceledError = qr;
fe.CancelToken = Lk;
fe.isCancel = oy;
fe.VERSION = fy;
fe.toFormData = ya;
fe.AxiosError = _;
fe.Cancel = fe.CanceledError;
fe.all = function (t) {
  return Promise.all(t);
};
fe.spread = Fk;
fe.isAxiosError = _k;
fe.mergeConfig = er;
fe.AxiosHeaders = $e;
fe.formToJSON = (e) => iy(S.isHTMLForm(e) ? new FormData(e) : e);
fe.getAdapter = dy.getAdapter;
fe.HttpStatusCode = wu;
fe.default = fe;
const {
    Axios: kE,
    AxiosError: SE,
    CanceledError: jE,
    isCancel: NE,
    CancelToken: PE,
    VERSION: CE,
    all: EE,
    Cancel: TE,
    isAxiosError: RE,
    spread: DE,
    toFormData: ME,
    AxiosHeaders: AE,
    HttpStatusCode: OE,
    formToJSON: LE,
    getAdapter: FE,
    mergeConfig: _E,
  } = fe,
  Vk = "https://howto.raydexhub.com/api",
  ce = fe.create({
    baseURL: Vk,
    headers: { "Content-Type": "application/json" },
  });
ce.interceptors.request.use((e) => {
  const t = localStorage.getItem("user");
  if (t)
    try {
      const { token: n } = JSON.parse(t);
      n && (e.headers.Authorization = `Bearer ${n}`);
    } catch (n) {
      console.error("Error parsing user token:", n);
    }
  return e;
});
ce.interceptors.response.use(
  (e) => e,
  (e) => {
    var t, n, r, s, i, o, a, l;
    return (
      console.error("API Error:", {
        url: (t = e.config) == null ? void 0 : t.url,
        method: (n = e.config) == null ? void 0 : n.method,
        status: (r = e.response) == null ? void 0 : r.status,
        data: (s = e.response) == null ? void 0 : s.data,
        message: e.message,
      }),
      ((i = e.response) == null ? void 0 : i.status) === 401 &&
        (l =
          (a = (o = e.response) == null ? void 0 : o.data) == null
            ? void 0
            : a.error) != null &&
        l.includes("Token") &&
        (localStorage.removeItem("user"), (window.location.href = "/login")),
      Promise.reject(e)
    );
  }
);
const qn = {
    getAll: async (e = "") => {
      const t = e ? `/posts?q=${encodeURIComponent(e)}` : "/posts";
      return (await ce.get(t)).data;
    },
    getById: async (e) => (await ce.get(`/posts/${e}`)).data,
    create: async (e) =>
      (
        await ce.post("/posts", e, {
          headers: { "Content-Type": "multipart/form-data" },
        })
      ).data,
    update: async (e, t) =>
      (
        await ce.put(`/posts/${e}`, t, {
          headers: { "Content-Type": "multipart/form-data" },
        })
      ).data,
    delete: async (e) => (await ce.delete(`/posts/${e}`)).data,
  },
  Ik = {
    getAll: async (e) => (await ce.get(`/posts/${e}/comments`)).data,
    add: async (e, t) => {
      const n = new FormData();
      return (
        n.append("name", t.name),
        n.append("email", t.email),
        n.append("comment", t.comment),
        (
          await ce.post(`/posts/${e}/comments`, n, {
            headers: { "Content-Type": "multipart/form-data" },
          })
        ).data
      );
    },
    getAllAdmin: async () => (await ce.get("/admin/comments")).data,
    delete: async (e) => (await ce.delete(`/comments/${e}`)).data,
  },
  bs = {
    create: async (e) => (await ce.post("/requests", e)).data,
    getAll: async () => (await ce.get("/requests")).data,
    getById: async (e) => (await ce.get(`/requests/${e}`)).data,
    updateStatus: async (e, t, n = null, r = null) => {
      const s = { status: t };
      return (
        n && (s.estimated_delivery = n),
        r && (s.article_id = r),
        (await ce.put(`/requests/${e}`, s)).data
      );
    },
    delete: async (e) => (await ce.delete(`/requests/${e}`)).data,
  },
  zk = {
    getDashboard: async () => (await ce.get("/admin/dashboard")).data,
    getComments: async () => (await ce.get("/admin/comments")).data,
  },
  py = k.createContext(null),
  Wt = () => {
    const e = k.useContext(py);
    if (!e) throw new Error("useAuth must be used within AuthProvider");
    return e;
  },
  Bk = ({ children: e }) => {
    const [t, n] = k.useState(null),
      [r, s] = k.useState(!0);
    k.useEffect(() => {
      const f = localStorage.getItem("user");
      if (f)
        try {
          const h = JSON.parse(f);
          n(h), i(h);
        } catch {
          localStorage.removeItem("user");
        }
      s(!1);
    }, []);
    const i = async (f) => {
        var h;
        try {
          await ce.get("/auth/verify");
        } catch (g) {
          ((h = g.response) == null ? void 0 : h.status) === 401 &&
            (localStorage.removeItem("user"), n(null));
        }
      },
      d = {
        user: t,
        loading: r,
        login: async (f, h) => {
          var g, p;
          try {
            const v = await ce.post("/auth/login", { email: f, password: h });
            if (v.data.success) {
              const w = { ...v.data.user, token: v.data.token };
              return (
                n(w),
                localStorage.setItem("user", JSON.stringify(w)),
                w.role === "admin"
                  ? V.success("Welcome back, Admin!")
                  : V.success(`Welcome back, ${w.name}!`),
                { success: !0, user: w }
              );
            }
            return (
              V.error(v.data.error || "Login failed"),
              { success: !1, error: v.data.error }
            );
          } catch (v) {
            const w =
              ((p = (g = v.response) == null ? void 0 : g.data) == null
                ? void 0
                : p.error) || "Login failed. Please try again.";
            return V.error(w), { success: !1, error: w };
          }
        },
        register: async (f, h, g) => {
          var p, v;
          try {
            const w = await ce.post("/auth/register", {
              name: f,
              email: h,
              password: g,
            });
            if (w.data.success) {
              const x = { ...w.data.user, token: w.data.token };
              return (
                n(x),
                localStorage.setItem("user", JSON.stringify(x)),
                V.success(`Welcome to Raydex How-To, ${f}!`),
                { success: !0, user: x }
              );
            }
            return (
              V.error(w.data.error || "Registration failed"),
              { success: !1, error: w.data.error }
            );
          } catch (w) {
            const x =
              ((v = (p = w.response) == null ? void 0 : p.data) == null
                ? void 0
                : v.error) || "Registration failed. Please try again.";
            return V.error(x), { success: !1, error: x };
          }
        },
        logout: () => {
          n(null),
            localStorage.removeItem("user"),
            V.success("Logged out successfully");
        },
        updateProfile: async (f) => {
          try {
            const h = { ...t, ...f };
            return (
              n(h),
              localStorage.setItem("user", JSON.stringify(h)),
              V.success("Profile updated successfully"),
              { success: !0 }
            );
          } catch (h) {
            return (
              V.error("Failed to update profile"),
              { success: !1, error: h.message }
            );
          }
        },
        isAuthenticated: !!t,
        isAdmin: (t == null ? void 0 : t.role) === "admin",
      };
    return r
      ? u.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: u.jsx("div", {
            className:
              "w-12 h-12 border-3 border-border border-t-accent rounded-full animate-spin-slow",
          }),
        })
      : u.jsx(py.Provider, { value: d, children: e });
  },
  Dn = ({ children: e, adminOnly: t = !1 }) => {
    const { isAuthenticated: n, isAdmin: r, loading: s } = Wt(),
      i = Nn();
    return s
      ? u.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: u.jsx("div", {
            className:
              "w-12 h-12 border-3 border-border border-t-accent rounded-full animate-spin-slow",
          }),
        })
      : n
      ? t && !r
        ? u.jsx(Mf, { to: "/", replace: !0 })
        : e
      : u.jsx(Mf, { to: "/login", state: { from: i }, replace: !0 });
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Uk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $k = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Y = (e, t) => {
    const n = k.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: l,
          ...c
        },
        d
      ) =>
        k.createElement(
          "svg",
          {
            ref: d,
            ...Uk,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(s) : i,
            className: ["lucide", `lucide-${$k(e)}`, a].join(" "),
            ...c,
          },
          [
            ...t.map(([f, h]) => k.createElement(f, h)),
            ...(Array.isArray(l) ? l : [l]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $c = Y("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wk = Y("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hk = Y("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qs = Y("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qk = Y("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gy = Y("Calendar", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      ry: "2",
      key: "eu3xkr",
    },
  ],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yk = Y("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bu = Y("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _r = Y("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gk = Y("ExternalLink", [
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kk = Y("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qk = Y("FileText", [
  [
    "path",
    {
      d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      key: "1nnpy2",
    },
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ku = Y("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tn = Y("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xk = Y("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jk = Y("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wc = Y("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = Y("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yy = Y("Save", [
  [
    "path",
    {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
      key: "1owoqh",
    },
  ],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zk = Y("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xy = Y("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e2 = Y("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ai = Y("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn",
    },
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vo = Y("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Su = Y("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t2 = Y("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ys = Y("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n2 = Y("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  r2 = () => {
    var f;
    const e = Nn(),
      t = Pn(),
      { user: n, isAuthenticated: r, isAdmin: s, logout: i } = Wt(),
      [o, a] = k.useState(!1),
      l = k.useRef(null),
      c = e.pathname.startsWith("/admin");
    k.useEffect(() => {
      const h = (g) => {
        l.current && !l.current.contains(g.target) && a(!1);
      };
      return (
        document.addEventListener("mousedown", h),
        () => document.removeEventListener("mousedown", h)
      );
    }, []);
    const d = () => {
      i(), a(!1), t("/");
    };
    return u.jsx("nav", {
      className: "sticky top-0 z-50 glass border-b border-border",
      children: u.jsx("div", {
        className: "max-w-container mx-auto px-6 md:px-8 py-4 md:py-6",
        children: u.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            u.jsxs(z, {
              to: "/",
              className:
                "flex items-center gap-4 group transition-transform duration-base hover:translate-x-0.5",
              children: [
                u.jsx("span", {
                  className:
                    "text-xl text-accent leading-none group-hover:animate-bounce-subtle",
                  children: "◆",
                }),
                u.jsxs("div", {
                  className: "flex flex-col gap-0.5",
                  children: [
                    u.jsx("span", {
                      className:
                        "font-serif text-lg font-semibold text-ink leading-none tracking-tight",
                      children: "Raydex",
                    }),
                    u.jsx("span", {
                      className:
                        "font-sans text-xs font-medium text-ink-muted uppercase tracking-widest leading-none hidden sm:block",
                      children: "How-To",
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "flex items-center gap-4 md:gap-6",
              children: [
                c
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsxs(z, {
                          to: "/admin",
                          className: `relative font-sans text-sm font-medium px-3 py-2 rounded-sm transition-all duration-fast hidden md:block ${
                            e.pathname === "/admin"
                              ? "text-accent"
                              : "text-ink-soft hover:text-ink hover:bg-hover"
                          }`,
                          children: [
                            "Dashboard",
                            e.pathname === "/admin" &&
                              u.jsx("span", {
                                className:
                                  "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full",
                              }),
                          ],
                        }),
                        u.jsxs(z, {
                          to: "/admin/requests",
                          className: `relative font-sans text-sm font-medium px-3 py-2 rounded-sm transition-all duration-fast hidden md:block ${
                            e.pathname === "/admin/requests"
                              ? "text-accent"
                              : "text-ink-soft hover:text-ink hover:bg-hover"
                          }`,
                          children: [
                            "Requests",
                            e.pathname === "/admin/requests" &&
                              u.jsx("span", {
                                className:
                                  "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full",
                              }),
                          ],
                        }),
                        u.jsx(z, {
                          to: "/",
                          className:
                            "font-sans text-sm font-medium text-accent px-4 py-2 border border-border rounded-md transition-all duration-base hover:bg-accent hover:text-surface hover:border-accent hover:-translate-y-0.5",
                          children: "← View Site",
                        }),
                      ],
                    })
                  : u.jsxs(u.Fragment, {
                      children: [
                        u.jsxs(z, {
                          to: "/",
                          className: `relative font-sans text-sm font-medium px-3 py-2 rounded-sm transition-all duration-fast hidden md:block ${
                            e.pathname === "/"
                              ? "text-accent"
                              : "text-ink-soft hover:text-ink hover:bg-hover"
                          }`,
                          children: [
                            "Articles",
                            e.pathname === "/" &&
                              u.jsx("span", {
                                className:
                                  "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full",
                              }),
                          ],
                        }),
                        r &&
                          u.jsxs(z, {
                            to: "/dashboard",
                            className: `relative font-sans text-sm font-medium px-3 py-2 rounded-sm transition-all duration-fast hidden md:block ${
                              e.pathname === "/dashboard"
                                ? "text-accent"
                                : "text-ink-soft hover:text-ink hover:bg-hover"
                            }`,
                            children: [
                              "My Requests",
                              e.pathname === "/dashboard" &&
                                u.jsx("span", {
                                  className:
                                    "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full",
                                }),
                            ],
                          }),
                      ],
                    }),
                r
                  ? u.jsxs("div", {
                      className: "relative",
                      ref: l,
                      children: [
                        u.jsxs("button", {
                          onClick: () => a(!o),
                          className:
                            "flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-base hover:bg-hover",
                          children: [
                            u.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-soft flex items-center justify-center font-serif text-sm font-semibold text-surface",
                              children:
                                ((f = n == null ? void 0 : n.name) == null
                                  ? void 0
                                  : f.charAt(0).toUpperCase()) || "U",
                            }),
                            u.jsx("span", {
                              className:
                                "hidden md:block font-sans text-sm font-medium text-ink",
                              children: n == null ? void 0 : n.name,
                            }),
                          ],
                        }),
                        o &&
                          u.jsxs("div", {
                            className:
                              "absolute right-0 mt-2 w-56 glass rounded-lg shadow-xl py-2 animate-fade-in",
                            children: [
                              u.jsxs("div", {
                                className:
                                  "px-4 py-3 border-b border-border-soft",
                                children: [
                                  u.jsx("p", {
                                    className: "text-sm font-semibold text-ink",
                                    children: n == null ? void 0 : n.name,
                                  }),
                                  u.jsx("p", {
                                    className:
                                      "text-xs text-ink-muted truncate",
                                    children: n == null ? void 0 : n.email,
                                  }),
                                  s &&
                                    u.jsx("span", {
                                      className:
                                        "inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-accent-light text-accent rounded",
                                      children: "Admin",
                                    }),
                                ],
                              }),
                              u.jsxs("div", {
                                className: "py-2",
                                children: [
                                  !c &&
                                    u.jsxs(z, {
                                      to: "/dashboard",
                                      className:
                                        "flex items-center gap-3 px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-hover transition-colors",
                                      onClick: () => a(!1),
                                      children: [
                                        u.jsx(Qk, { size: 16 }),
                                        "My Requests",
                                      ],
                                    }),
                                  u.jsxs(z, {
                                    to: "/profile",
                                    className:
                                      "flex items-center gap-3 px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-hover transition-colors",
                                    onClick: () => a(!1),
                                    children: [
                                      u.jsx(e2, { size: 16 }),
                                      "Settings",
                                    ],
                                  }),
                                  s &&
                                    !c &&
                                    u.jsxs(z, {
                                      to: "/admin",
                                      className:
                                        "flex items-center gap-3 px-4 py-2 text-sm text-accent hover:bg-accent-light transition-colors",
                                      onClick: () => a(!1),
                                      children: [
                                        u.jsx(Ys, { size: 16 }),
                                        "Admin Panel",
                                      ],
                                    }),
                                ],
                              }),
                              u.jsx("div", {
                                className: "border-t border-border-soft pt-2",
                                children: u.jsxs("button", {
                                  onClick: d,
                                  className:
                                    "flex items-center gap-3 px-4 py-2 w-full text-sm text-error hover:bg-error-light transition-colors",
                                  children: [u.jsx(Jk, { size: 16 }), "Logout"],
                                }),
                              }),
                            ],
                          }),
                      ],
                    })
                  : u.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        u.jsxs(z, {
                          to: "/login",
                          className:
                            "flex items-center gap-2 font-sans text-sm font-medium text-ink-soft px-4 py-2 rounded-md transition-all duration-base hover:text-ink hover:bg-hover",
                          children: [
                            u.jsx(Xk, { size: 16 }),
                            u.jsx("span", {
                              className: "hidden md:inline",
                              children: "Login",
                            }),
                          ],
                        }),
                        u.jsxs(z, {
                          to: "/register",
                          className:
                            "flex items-center gap-2 font-sans text-sm font-medium text-surface px-4 py-2 bg-accent rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md",
                          children: [
                            u.jsx(t2, { size: 16 }),
                            u.jsx("span", {
                              className: "hidden md:inline",
                              children: "Sign Up",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      }),
    });
  };
function G(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
      t === "[object Number]" ||
      typeof e == "string" ||
      t === "[object String]"
    ? new Date(e)
    : new Date(NaN);
}
function xn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const vy = 6048e5,
  s2 = 864e5,
  Oi = 43200,
  eh = 1440;
let i2 = {};
function li() {
  return i2;
}
function Gs(e, t) {
  var a, l, c, d;
  const n = li(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    s = G(e),
    i = s.getDay(),
    o = (i < r ? 7 : 0) + i - r;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s;
}
function Io(e) {
  return Gs(e, { weekStartsOn: 1 });
}
function wy(e) {
  const t = G(e),
    n = t.getFullYear(),
    r = xn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const s = Io(r),
    i = xn(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const o = Io(i);
  return t.getTime() >= s.getTime()
    ? n + 1
    : t.getTime() >= o.getTime()
    ? n
    : n - 1;
}
function th(e) {
  const t = G(e);
  return t.setHours(0, 0, 0, 0), t;
}
function zo(e) {
  const t = G(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function o2(e, t) {
  const n = th(e),
    r = th(t),
    s = +n - zo(n),
    i = +r - zo(r);
  return Math.round((s - i) / s2);
}
function a2(e) {
  const t = wy(e),
    n = xn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Io(n);
}
function io(e, t) {
  const n = G(e),
    r = G(t),
    s = n.getTime() - r.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function l2(e) {
  return xn(e, Date.now());
}
function u2(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function c2(e) {
  if (!u2(e) && typeof e != "number") return !1;
  const t = G(e);
  return !isNaN(Number(t));
}
function d2(e, t) {
  const n = G(e),
    r = G(t),
    s = n.getFullYear() - r.getFullYear(),
    i = n.getMonth() - r.getMonth();
  return s * 12 + i;
}
function f2(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function h2(e, t) {
  return +G(e) - +G(t);
}
function m2(e) {
  const t = G(e);
  return t.setHours(23, 59, 59, 999), t;
}
function p2(e) {
  const t = G(e),
    n = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function g2(e) {
  const t = G(e);
  return +m2(t) == +p2(t);
}
function y2(e, t) {
  const n = G(e),
    r = G(t),
    s = io(n, r),
    i = Math.abs(d2(n, r));
  let o;
  if (i < 1) o = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30),
      n.setMonth(n.getMonth() - s * i);
    let a = io(n, r) === -s;
    g2(G(e)) && i === 1 && io(e, r) === 1 && (a = !1),
      (o = s * (i - Number(a)));
  }
  return o === 0 ? 0 : o;
}
function x2(e, t, n) {
  const r = h2(e, t) / 1e3;
  return f2(n == null ? void 0 : n.roundingMethod)(r);
}
function v2(e) {
  const t = G(e),
    n = xn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const w2 = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  b2 = (e, t, n) => {
    let r;
    const s = w2[e];
    return (
      typeof s == "string"
        ? (r = s)
        : t === 1
        ? (r = s.one)
        : (r = s.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function sl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const k2 = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  S2 = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  j2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  N2 = {
    date: sl({ formats: k2, defaultWidth: "full" }),
    time: sl({ formats: S2, defaultWidth: "full" }),
    dateTime: sl({ formats: j2, defaultWidth: "full" }),
  },
  P2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  C2 = (e, t, n, r) => P2[e];
function ns(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let s;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth,
        a = n != null && n.width ? String(n.width) : o;
      s = e.formattingValues[a] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth,
        a = n != null && n.width ? String(n.width) : e.defaultWidth;
      s = e.values[a] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return s[i];
  };
}
const E2 = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  T2 = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  R2 = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  D2 = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  M2 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  A2 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  O2 = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  L2 = {
    ordinalNumber: O2,
    era: ns({ values: E2, defaultWidth: "wide" }),
    quarter: ns({
      values: T2,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: ns({ values: R2, defaultWidth: "wide" }),
    day: ns({ values: D2, defaultWidth: "wide" }),
    dayPeriod: ns({
      values: M2,
      defaultWidth: "wide",
      formattingValues: A2,
      defaultFormattingWidth: "wide",
    }),
  };
function rs(e) {
  return (t, n = {}) => {
    const r = n.width,
      s = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(s);
    if (!i) return null;
    const o = i[0],
      a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(a) ? _2(a, (f) => f.test(o)) : F2(a, (f) => f.test(o));
    let c;
    (c = e.valueCallback ? e.valueCallback(l) : l),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const d = t.slice(o.length);
    return { value: c, rest: d };
  };
}
function F2(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function _2(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function V2(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const s = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const a = t.slice(s.length);
    return { value: o, rest: a };
  };
}
const I2 = /^(\d+)(th|st|nd|rd)?/i,
  z2 = /\d+/i,
  B2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  U2 = { any: [/^b/i, /^(a|c)/i] },
  $2 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  W2 = { any: [/1/i, /2/i, /3/i, /4/i] },
  H2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  q2 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Y2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  G2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  K2 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Q2 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  X2 = {
    ordinalNumber: V2({
      matchPattern: I2,
      parsePattern: z2,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: rs({
      matchPatterns: B2,
      defaultMatchWidth: "wide",
      parsePatterns: U2,
      defaultParseWidth: "any",
    }),
    quarter: rs({
      matchPatterns: $2,
      defaultMatchWidth: "wide",
      parsePatterns: W2,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: rs({
      matchPatterns: H2,
      defaultMatchWidth: "wide",
      parsePatterns: q2,
      defaultParseWidth: "any",
    }),
    day: rs({
      matchPatterns: Y2,
      defaultMatchWidth: "wide",
      parsePatterns: G2,
      defaultParseWidth: "any",
    }),
    dayPeriod: rs({
      matchPatterns: K2,
      defaultMatchWidth: "any",
      parsePatterns: Q2,
      defaultParseWidth: "any",
    }),
  },
  by = {
    code: "en-US",
    formatDistance: b2,
    formatLong: N2,
    formatRelative: C2,
    localize: L2,
    match: X2,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function J2(e) {
  const t = G(e);
  return o2(t, v2(t)) + 1;
}
function Z2(e) {
  const t = G(e),
    n = +Io(t) - +a2(t);
  return Math.round(n / vy) + 1;
}
function ky(e, t) {
  var d, f, h, g;
  const n = G(e),
    r = n.getFullYear(),
    s = li(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : f.firstWeekContainsDate) ??
      s.firstWeekContainsDate ??
      ((g = (h = s.locale) == null ? void 0 : h.options) == null
        ? void 0
        : g.firstWeekContainsDate) ??
      1,
    o = xn(e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const a = Gs(o, t),
    l = xn(e, 0);
  l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
  const c = Gs(l, t);
  return n.getTime() >= a.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
    ? r
    : r - 1;
}
function eS(e, t) {
  var a, l, c, d;
  const n = li(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      1,
    s = ky(e, t),
    i = xn(e, 0);
  return i.setFullYear(s, 0, r), i.setHours(0, 0, 0, 0), Gs(i, t);
}
function tS(e, t) {
  const n = G(e),
    r = +Gs(n, t) - +eS(n, t);
  return Math.round(r / vy) + 1;
}
function W(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const qt = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return W(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : W(n + 1, 2);
    },
    d(e, t) {
      return W(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return W(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return W(e.getHours(), t.length);
    },
    m(e, t) {
      return W(e.getMinutes(), t.length);
    },
    s(e, t) {
      return W(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        s = Math.trunc(r * Math.pow(10, n - 3));
      return W(s, t.length);
    },
  },
  or = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  nh = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          s = r > 0 ? r : 1 - r;
        return n.ordinalNumber(s, { unit: "year" });
      }
      return qt.y(e, t);
    },
    Y: function (e, t, n, r) {
      const s = ky(e, r),
        i = s > 0 ? s : 1 - s;
      if (t === "YY") {
        const o = i % 100;
        return W(o, 2);
      }
      return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : W(i, t.length);
    },
    R: function (e, t) {
      const n = wy(e);
      return W(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return W(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return W(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return W(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return qt.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return W(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const s = tS(e, r);
      return t === "wo" ? n.ordinalNumber(s, { unit: "week" }) : W(s, t.length);
    },
    I: function (e, t, n) {
      const r = Z2(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : W(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : qt.d(e, t);
    },
    D: function (e, t, n) {
      const r = J2(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : W(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const s = e.getDay(),
        i = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(i);
        case "ee":
          return W(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
        case "eee":
          return n.day(s, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(s, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(s, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(s, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const s = e.getDay(),
        i = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(i);
        case "cc":
          return W(i, t.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
        case "ccc":
          return n.day(s, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(s, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(s, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(s, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        s = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(s);
        case "ii":
          return W(s, t.length);
        case "io":
          return n.ordinalNumber(s, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const s = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(s, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let s;
      switch (
        (r === 12
          ? (s = or.noon)
          : r === 0
          ? (s = or.midnight)
          : (s = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(s, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let s;
      switch (
        (r >= 17
          ? (s = or.evening)
          : r >= 12
          ? (s = or.afternoon)
          : r >= 4
          ? (s = or.morning)
          : (s = or.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return qt.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : qt.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : W(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : W(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : qt.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : qt.s(e, t);
    },
    S: function (e, t) {
      return qt.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return sh(r);
        case "XXXX":
        case "XX":
          return Ln(r);
        case "XXXXX":
        case "XXX":
        default:
          return Ln(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return sh(r);
        case "xxxx":
        case "xx":
          return Ln(r);
        case "xxxxx":
        case "xxx":
        default:
          return Ln(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + rh(r, ":");
        case "OOOO":
        default:
          return "GMT" + Ln(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + rh(r, ":");
        case "zzzz":
        default:
          return "GMT" + Ln(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return W(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return W(r, t.length);
    },
  };
function rh(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    s = Math.trunc(r / 60),
    i = r % 60;
  return i === 0 ? n + String(s) : n + String(s) + t + W(i, 2);
}
function sh(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + W(Math.abs(e) / 60, 2) : Ln(e, t);
}
function Ln(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    s = W(Math.trunc(r / 60), 2),
    i = W(r % 60, 2);
  return n + s + t + i;
}
const ih = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  Sy = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  nS = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      s = n[2];
    if (!s) return ih(e, t);
    let i;
    switch (r) {
      case "P":
        i = t.dateTime({ width: "short" });
        break;
      case "PP":
        i = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = t.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", ih(r, t)).replace("{{time}}", Sy(s, t));
  },
  rS = { p: Sy, P: nS },
  sS = /^D+$/,
  iS = /^Y+$/,
  oS = ["D", "DD", "YY", "YYYY"];
function aS(e) {
  return sS.test(e);
}
function lS(e) {
  return iS.test(e);
}
function uS(e, t, n) {
  const r = cS(e, t, n);
  if ((console.warn(r), oS.includes(e))) throw new RangeError(r);
}
function cS(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const dS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  fS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  hS = /^'([^]*?)'?$/,
  mS = /''/g,
  pS = /[a-zA-Z]/;
function Yn(e, t, n) {
  var d, f, h, g;
  const r = li(),
    s = r.locale ?? by,
    i =
      r.firstWeekContainsDate ??
      ((f = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      1,
    o =
      r.weekStartsOn ??
      ((g = (h = r.locale) == null ? void 0 : h.options) == null
        ? void 0
        : g.weekStartsOn) ??
      0,
    a = G(e);
  if (!c2(a)) throw new RangeError("Invalid time value");
  let l = t
    .match(fS)
    .map((p) => {
      const v = p[0];
      if (v === "p" || v === "P") {
        const w = rS[v];
        return w(p, s.formatLong);
      }
      return p;
    })
    .join("")
    .match(dS)
    .map((p) => {
      if (p === "''") return { isToken: !1, value: "'" };
      const v = p[0];
      if (v === "'") return { isToken: !1, value: gS(p) };
      if (nh[v]) return { isToken: !0, value: p };
      if (v.match(pS))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            v +
            "`"
        );
      return { isToken: !1, value: p };
    });
  s.localize.preprocessor && (l = s.localize.preprocessor(a, l));
  const c = { firstWeekContainsDate: i, weekStartsOn: o, locale: s };
  return l
    .map((p) => {
      if (!p.isToken) return p.value;
      const v = p.value;
      (lS(v) || aS(v)) && uS(v, t, String(e));
      const w = nh[v[0]];
      return w(a, v, s.localize, c);
    })
    .join("");
}
function gS(e) {
  const t = e.match(hS);
  return t ? t[1].replace(mS, "'") : e;
}
function yS(e, t, n) {
  const r = li(),
    s = (n == null ? void 0 : n.locale) ?? r.locale ?? by,
    i = 2520,
    o = io(e, t);
  if (isNaN(o)) throw new RangeError("Invalid time value");
  const a = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: o,
  });
  let l, c;
  o > 0 ? ((l = G(t)), (c = G(e))) : ((l = G(e)), (c = G(t)));
  const d = x2(c, l),
    f = (zo(c) - zo(l)) / 1e3,
    h = Math.round((d - f) / 60);
  let g;
  if (h < 2)
    return n != null && n.includeSeconds
      ? d < 5
        ? s.formatDistance("lessThanXSeconds", 5, a)
        : d < 10
        ? s.formatDistance("lessThanXSeconds", 10, a)
        : d < 20
        ? s.formatDistance("lessThanXSeconds", 20, a)
        : d < 40
        ? s.formatDistance("halfAMinute", 0, a)
        : d < 60
        ? s.formatDistance("lessThanXMinutes", 1, a)
        : s.formatDistance("xMinutes", 1, a)
      : h === 0
      ? s.formatDistance("lessThanXMinutes", 1, a)
      : s.formatDistance("xMinutes", h, a);
  if (h < 45) return s.formatDistance("xMinutes", h, a);
  if (h < 90) return s.formatDistance("aboutXHours", 1, a);
  if (h < eh) {
    const p = Math.round(h / 60);
    return s.formatDistance("aboutXHours", p, a);
  } else {
    if (h < i) return s.formatDistance("xDays", 1, a);
    if (h < Oi) {
      const p = Math.round(h / eh);
      return s.formatDistance("xDays", p, a);
    } else if (h < Oi * 2)
      return (g = Math.round(h / Oi)), s.formatDistance("aboutXMonths", g, a);
  }
  if (((g = y2(c, l)), g < 12)) {
    const p = Math.round(h / Oi);
    return s.formatDistance("xMonths", p, a);
  } else {
    const p = g % 12,
      v = Math.trunc(g / 12);
    return p < 3
      ? s.formatDistance("aboutXYears", v, a)
      : p < 9
      ? s.formatDistance("overXYears", v, a)
      : s.formatDistance("almostXYears", v + 1, a);
  }
}
function ju(e, t) {
  return yS(e, l2(e), t);
}
const xS = () => {
    const { isAuthenticated: e } = Wt(),
      [t, n] = k.useState([]),
      [r, s] = k.useState(!0),
      [i, o] = k.useState(""),
      [a, l] = k.useState("");
    k.useEffect(() => {
      c();
    }, [i]);
    const c = async () => {
        s(!0);
        try {
          const f = await qn.getAll(i);
          n(f.posts || []);
        } catch (f) {
          console.error("Error loading posts:", f),
            V.error("Failed to load articles"),
            n([]);
        } finally {
          s(!1);
        }
      },
      d = (f) => {
        f.preventDefault(), o(a);
      };
    return u.jsxs("div", {
      className: "min-h-screen pb-20",
      children: [
        u.jsxs("section", {
          className:
            "py-20 md:py-28 bg-gradient-to-b from-surface via-paper to-paper border-b border-border-soft relative overflow-hidden",
          children: [
            u.jsx("div", {
              className:
                "absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl",
            }),
            u.jsx("div", {
              className:
                "absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl",
            }),
            u.jsx("div", {
              className: "max-w-container mx-auto px-6 md:px-8 relative",
              children: u.jsxs("div", {
                className: "max-w-4xl mx-auto text-center",
                children: [
                  u.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 px-4 py-2 bg-accent-light border border-accent/20 rounded-full text-sm font-medium text-accent mb-6 animate-fade-in",
                    children: [
                      u.jsx(Ai, { size: 16 }),
                      "Request Custom How-To Guides",
                    ],
                  }),
                  u.jsxs("h1", {
                    className:
                      "font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink mb-6 animate-fade-in stagger-1",
                    children: [
                      "Learn How To Build",
                      u.jsx("br", {}),
                      u.jsx("span", {
                        className: "text-gradient",
                        children: "Anything Worth Building",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    className:
                      "font-sans text-lg md:text-xl text-ink-soft leading-relaxed mb-10 animate-fade-in stagger-2 max-w-2xl mx-auto",
                    children:
                      "In-depth guides and tutorials for developers, designers, and makers. Can't find what you need? Request a custom guide with 48-hour delivery.",
                  }),
                  u.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in stagger-3",
                    children: [
                      u.jsxs("a", {
                        href: "#articles",
                        className:
                          "inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-1 hover:shadow-xl",
                        children: ["Browse Articles", u.jsx(qs, { size: 18 })],
                      }),
                      e
                        ? u.jsxs(z, {
                            to: "/request",
                            className:
                              "inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface text-accent border-2 border-accent rounded-lg font-medium transition-all duration-base hover:bg-accent-light hover:-translate-y-1 hover:shadow-xl",
                            children: [
                              u.jsx(Ai, { size: 18 }),
                              "Request Custom Guide",
                            ],
                          })
                        : u.jsxs(z, {
                            to: "/register",
                            className:
                              "inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface text-accent border-2 border-accent rounded-lg font-medium transition-all duration-base hover:bg-accent-light hover:-translate-y-1 hover:shadow-xl",
                            children: [
                              u.jsx(Ai, { size: 18 }),
                              "Get Started Free",
                            ],
                          }),
                    ],
                  }),
                  u.jsx("form", {
                    onSubmit: d,
                    className:
                      "max-w-2xl mx-auto relative animate-fade-in stagger-4",
                    children: u.jsxs("div", {
                      className: "relative",
                      children: [
                        u.jsx("div", {
                          className:
                            "absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none",
                          children: u.jsx(Zk, {
                            className: "w-5 h-5 text-ink-muted",
                          }),
                        }),
                        u.jsx("input", {
                          type: "text",
                          className:
                            "w-full font-sans text-base py-5 pl-16 pr-16 border-2 border-border rounded-xl bg-surface text-ink placeholder-ink-muted shadow-lg transition-all duration-base focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light focus:shadow-xl",
                          placeholder:
                            "Search articles... (e.g., React, Flask, TypeScript)",
                          value: a,
                          onChange: (f) => l(f.target.value),
                        }),
                        a &&
                          u.jsx("button", {
                            type: "button",
                            className:
                              "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-hover rounded-md transition-all duration-fast",
                            onClick: () => {
                              l(""), o("");
                            },
                            children: "✕",
                          }),
                      ],
                    }),
                  }),
                  i &&
                    u.jsxs("p", {
                      className: "text-sm text-ink-soft mt-6 animate-fade-in",
                      children: [
                        "Showing results for",
                        " ",
                        u.jsxs("strong", {
                          className: "text-accent",
                          children: ['"', i, '"'],
                        }),
                      ],
                    }),
                ],
              }),
            }),
          ],
        }),
        u.jsx("section", {
          id: "articles",
          className: "py-20 md:py-24",
          children: u.jsxs("div", {
            className: "max-w-container mx-auto px-6 md:px-8",
            children: [
              u.jsxs("div", {
                className: "flex items-baseline justify-between mb-12",
                children: [
                  u.jsx("h2", {
                    className:
                      "font-serif text-3xl md:text-4xl font-bold text-ink",
                    children: "Latest Guides",
                  }),
                  u.jsxs("span", {
                    className: "text-sm text-ink-muted",
                    children: [
                      t.length,
                      " ",
                      t.length === 1 ? "article" : "articles",
                    ],
                  }),
                ],
              }),
              r
                ? u.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: [1, 2, 3, 4, 5, 6].map((f) =>
                      u.jsx(
                        "div",
                        {
                          className:
                            "h-[420px] bg-gradient-to-r from-surface via-hover to-surface bg-[length:200%_100%] animate-shimmer rounded-xl border border-border",
                        },
                        f
                      )
                    ),
                  })
                : t.length === 0
                ? u.jsxs("div", {
                    className: "text-center py-24 max-w-md mx-auto",
                    children: [
                      u.jsx("div", {
                        className: "text-7xl text-ink-muted opacity-20 mb-6",
                        children: "◇",
                      }),
                      u.jsx("h3", {
                        className:
                          "font-serif text-2xl font-semibold text-ink mb-4",
                        children: i ? "No articles found" : "No articles yet",
                      }),
                      u.jsx("p", {
                        className:
                          "text-base text-ink-soft leading-relaxed mb-8",
                        children: i
                          ? "Try adjusting your search terms or browse all articles"
                          : "Check back soon for new content",
                      }),
                      i &&
                        u.jsx("button", {
                          onClick: () => {
                            o(""), l("");
                          },
                          className:
                            "inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md",
                          children: "Clear Search",
                        }),
                    ],
                  })
                : u.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: t.map((f, h) =>
                      u.jsx(vS, { post: f, delay: h * 100 }, f.id)
                    ),
                  }),
            ],
          }),
        }),
        !i &&
          u.jsx("section", {
            className: "py-20 md:py-24 border-t border-border-soft",
            children: u.jsx("div", {
              className: "max-w-container mx-auto px-6 md:px-8",
              children: u.jsxs("div", {
                className:
                  "max-w-3xl mx-auto text-center bg-gradient-to-br from-accent-light to-accent-light/50 rounded-2xl p-12 border border-accent/20",
                children: [
                  u.jsx("div", { className: "text-5xl mb-6", children: "🎯" }),
                  u.jsx("h2", {
                    className:
                      "font-serif text-3xl md:text-4xl font-bold text-ink mb-4",
                    children: "Need Something Specific?",
                  }),
                  u.jsx("p", {
                    className: "text-lg text-ink-soft mb-8 leading-relaxed",
                    children:
                      "Can't find the guide you're looking for? Request a custom how-to tutorial and we'll create it for you within 48 hours.",
                  }),
                  e
                    ? u.jsxs(z, {
                        to: "/request",
                        className:
                          "inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-1 hover:shadow-xl",
                        children: [
                          u.jsx(Ai, { size: 18 }),
                          "Request Custom Guide",
                        ],
                      })
                    : u.jsxs(z, {
                        to: "/register",
                        className:
                          "inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-1 hover:shadow-xl",
                        children: [
                          "Sign Up to Request",
                          u.jsx(qs, { size: 18 }),
                        ],
                      }),
                ],
              }),
            }),
          }),
      ],
    });
  },
  vS = ({ post: e, delay: t }) => {
    var r;
    const n =
      (r = e.content) == null ? void 0 : r.find((s) => s.type === "image");
    return u.jsxs(z, {
      to: `/post/${e.id}`,
      className:
        "group flex flex-col bg-surface border border-border rounded-xl overflow-hidden transition-all duration-base hover:-translate-y-2 hover:shadow-xl hover:border-accent animate-fade-in",
      style: { animationDelay: `${t}ms` },
      children: [
        n
          ? u.jsxs("div", {
              className: "relative w-full h-56 bg-hover overflow-hidden",
              children: [
                u.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-transparent to-ink/10",
                }),
                u.jsx("img", {
                  src: `/static/uploads/${n.data}`,
                  alt: e.title,
                  className:
                    "w-full h-full object-cover transition-transform duration-slow group-hover:scale-110",
                  loading: "lazy",
                }),
              ],
            })
          : u.jsx("div", {
              className:
                "w-full h-56 bg-gradient-to-br from-accent-light to-accent-light/30 flex items-center justify-center",
              children: u.jsx("span", {
                className: "text-6xl opacity-30",
                children: "◆",
              }),
            }),
        u.jsxs("div", {
          className: "flex flex-col gap-4 p-6 flex-1",
          children: [
            u.jsxs("div", {
              className:
                "flex items-center gap-2 text-xs font-medium text-ink-muted uppercase tracking-wider",
              children: [
                u.jsx("time", {
                  children: Yn(new Date(e.created_at), "MMM d, yyyy"),
                }),
                u.jsx("span", { className: "opacity-50", children: "•" }),
                u.jsxs("span", { children: [e.views, " views"] }),
              ],
            }),
            u.jsx("h2", {
              className:
                "font-serif text-xl font-semibold text-ink leading-snug tracking-tight group-hover:text-accent transition-colors duration-fast line-clamp-2",
              children: e.title,
            }),
            e.subtitle &&
              u.jsx("p", {
                className:
                  "font-sans text-sm text-ink-soft leading-relaxed line-clamp-2",
                children: e.subtitle,
              }),
            u.jsxs("div", {
              className:
                "flex items-center justify-between pt-4 mt-auto border-t border-border-soft",
              children: [
                u.jsxs("span", {
                  className: "text-xs text-ink-muted",
                  children: ["By ", e.author],
                }),
                u.jsxs("span", {
                  className:
                    "flex items-center gap-1 text-xs font-medium text-accent transition-all duration-fast group-hover:gap-2",
                  children: ["Read article", u.jsx(qs, { size: 14 })],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  va = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  wa = k.createContext({}),
  Hc = k.createContext(null),
  ba = typeof document < "u",
  qc = ba ? k.useLayoutEffect : k.useEffect,
  jy = k.createContext({ strict: !1 }),
  Yc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  wS = "framerAppearId",
  Ny = "data-" + Yc(wS);
function bS(e, t, n, r) {
  const { visualElement: s } = k.useContext(wa),
    i = k.useContext(jy),
    o = k.useContext(Hc),
    a = k.useContext(va).reducedMotion,
    l = k.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const c = l.current;
  k.useInsertionEffect(() => {
    c && c.update(n, o);
  });
  const d = k.useRef(!!(n[Ny] && !window.HandoffComplete));
  return (
    qc(() => {
      c &&
        (c.render(),
        d.current && c.animationState && c.animationState.animateChanges());
    }),
    k.useEffect(() => {
      c &&
        (c.updateFeatures(),
        !d.current && c.animationState && c.animationState.animateChanges(),
        d.current && ((d.current = !1), (window.HandoffComplete = !0)));
    }),
    c
  );
}
function vr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function kS(e, t, n) {
  return k.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : vr(n) && (n.current = r));
    },
    [t]
  );
}
function Ks(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ka(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Gc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Kc = ["initial", ...Gc];
function Sa(e) {
  return ka(e.animate) || Kc.some((t) => Ks(e[t]));
}
function Py(e) {
  return !!(Sa(e) || e.variants);
}
function SS(e, t) {
  if (Sa(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ks(n) ? n : void 0,
      animate: Ks(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function jS(e) {
  const { initial: t, animate: n } = SS(e, k.useContext(wa));
  return k.useMemo(() => ({ initial: t, animate: n }), [oh(t), oh(n)]);
}
function oh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ah = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Qs = {};
for (const e in ah) Qs[e] = { isEnabled: (t) => ah[e].some((n) => !!t[n]) };
function NS(e) {
  for (const t in e) Qs[t] = { ...Qs[t], ...e[t] };
}
const Cy = k.createContext({}),
  Ey = k.createContext({}),
  PS = Symbol.for("motionComponentSymbol");
function CS({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  e && NS(e);
  function i(a, l) {
    let c;
    const d = { ...k.useContext(va), ...a, layoutId: ES(a) },
      { isStatic: f } = d,
      h = jS(a),
      g = r(a, f);
    if (!f && ba) {
      h.visualElement = bS(s, g, d, t);
      const p = k.useContext(Ey),
        v = k.useContext(jy).strict;
      h.visualElement && (c = h.visualElement.loadFeatures(d, v, e, p));
    }
    return k.createElement(
      wa.Provider,
      { value: h },
      c && h.visualElement
        ? k.createElement(c, { visualElement: h.visualElement, ...d })
        : null,
      n(s, a, kS(g, h.visualElement, l), g, f, h.visualElement)
    );
  }
  const o = k.forwardRef(i);
  return (o[PS] = s), o;
}
function ES({ layoutId: e }) {
  const t = k.useContext(Cy).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function TS(e) {
  function t(r, s = {}) {
    return CS(e(r, s));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, s) => (n.has(s) || n.set(s, t(s)), n.get(s)),
  });
}
const RS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Qc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(RS.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Bo = {};
function DS(e) {
  Object.assign(Bo, e);
}
const ui = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  rr = new Set(ui);
function Ty(e, { layout: t, layoutId: n }) {
  return (
    rr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Bo[e] || e === "opacity"))
  );
}
const Te = (e) => !!(e && e.getVelocity),
  MS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  AS = ui.length;
function OS(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  s
) {
  let i = "";
  for (let o = 0; o < AS; o++) {
    const a = ui[o];
    if (e[a] !== void 0) {
      const l = MS[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    s ? (i = s(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const Ry = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Dy = Ry("--"),
  Nu = Ry("var(--"),
  LS =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  FS = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  vn = (e, t, n) => Math.min(Math.max(n, e), t),
  sr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ks = { ...sr, transform: (e) => vn(0, 1, e) },
  Li = { ...sr, default: 1 },
  Ss = (e) => Math.round(e * 1e5) / 1e5,
  ja = /(-)?([\d]*\.?[\d])+/g,
  My =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  _S =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ci(e) {
  return typeof e == "string";
}
const di = (e) => ({
    test: (t) => ci(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Yt = di("deg"),
  Nt = di("%"),
  O = di("px"),
  VS = di("vh"),
  IS = di("vw"),
  lh = {
    ...Nt,
    parse: (e) => Nt.parse(e) / 100,
    transform: (e) => Nt.transform(e * 100),
  },
  uh = { ...sr, transform: Math.round },
  Ay = {
    borderWidth: O,
    borderTopWidth: O,
    borderRightWidth: O,
    borderBottomWidth: O,
    borderLeftWidth: O,
    borderRadius: O,
    radius: O,
    borderTopLeftRadius: O,
    borderTopRightRadius: O,
    borderBottomRightRadius: O,
    borderBottomLeftRadius: O,
    width: O,
    maxWidth: O,
    height: O,
    maxHeight: O,
    size: O,
    top: O,
    right: O,
    bottom: O,
    left: O,
    padding: O,
    paddingTop: O,
    paddingRight: O,
    paddingBottom: O,
    paddingLeft: O,
    margin: O,
    marginTop: O,
    marginRight: O,
    marginBottom: O,
    marginLeft: O,
    rotate: Yt,
    rotateX: Yt,
    rotateY: Yt,
    rotateZ: Yt,
    scale: Li,
    scaleX: Li,
    scaleY: Li,
    scaleZ: Li,
    skew: Yt,
    skewX: Yt,
    skewY: Yt,
    distance: O,
    translateX: O,
    translateY: O,
    translateZ: O,
    x: O,
    y: O,
    z: O,
    perspective: O,
    transformPerspective: O,
    opacity: ks,
    originX: lh,
    originY: lh,
    originZ: O,
    zIndex: uh,
    fillOpacity: ks,
    strokeOpacity: ks,
    numOctaves: uh,
  };
function Xc(e, t, n, r) {
  const { style: s, vars: i, transform: o, transformOrigin: a } = e;
  let l = !1,
    c = !1,
    d = !0;
  for (const f in t) {
    const h = t[f];
    if (Dy(f)) {
      i[f] = h;
      continue;
    }
    const g = Ay[f],
      p = FS(h, g);
    if (rr.has(f)) {
      if (((l = !0), (o[f] = p), !d)) continue;
      h !== (g.default || 0) && (d = !1);
    } else f.startsWith("origin") ? ((c = !0), (a[f] = p)) : (s[f] = p);
  }
  if (
    (t.transform ||
      (l || r
        ? (s.transform = OS(e.transform, n, d, r))
        : s.transform && (s.transform = "none")),
    c)
  ) {
    const { originX: f = "50%", originY: h = "50%", originZ: g = 0 } = a;
    s.transformOrigin = `${f} ${h} ${g}`;
  }
}
const Jc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Oy(e, t, n) {
  for (const r in t) !Te(t[r]) && !Ty(r, n) && (e[r] = t[r]);
}
function zS({ transformTemplate: e }, t, n) {
  return k.useMemo(() => {
    const r = Jc();
    return (
      Xc(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function BS(e, t, n) {
  const r = e.style || {},
    s = {};
  return (
    Oy(s, r, e),
    Object.assign(s, zS(e, t, n)),
    e.transformValues ? e.transformValues(s) : s
  );
}
function US(e, t, n) {
  const r = {},
    s = BS(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = s),
    r
  );
}
const $S = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Uo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    $S.has(e)
  );
}
let Ly = (e) => !Uo(e);
function WS(e) {
  e && (Ly = (t) => (t.startsWith("on") ? !Uo(t) : e(t)));
}
try {
  WS(require("@emotion/is-prop-valid").default);
} catch {}
function HS(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Ly(s) ||
        (n === !0 && Uo(s)) ||
        (!t && !Uo(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function ch(e, t, n) {
  return typeof e == "string" ? e : O.transform(t + n * e);
}
function qS(e, t, n) {
  const r = ch(t, e.x, e.width),
    s = ch(n, e.y, e.height);
  return `${r} ${s}`;
}
const YS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  GS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function KS(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? YS : GS;
  e[i.offset] = O.transform(-r);
  const o = O.transform(t),
    a = O.transform(n);
  e[i.array] = `${o} ${a}`;
}
function Zc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  d,
  f,
  h
) {
  if ((Xc(e, c, d, h), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: p, dimensions: v } = e;
  g.transform && (v && (p.transform = g.transform), delete g.transform),
    v &&
      (s !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = qS(
        v,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    o !== void 0 && KS(g, o, a, l, !1);
}
const Fy = () => ({ ...Jc(), attrs: {} }),
  ed = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function QS(e, t, n, r) {
  const s = k.useMemo(() => {
    const i = Fy();
    return (
      Zc(i, t, { enableHardwareAcceleration: !1 }, ed(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Oy(i, e.style, e), (s.style = { ...i, ...s.style });
  }
  return s;
}
function XS(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const l = (Qc(n) ? QS : US)(r, i, o, n),
      d = { ...HS(r, typeof n == "string", e), ...l, ref: s },
      { children: f } = r,
      h = k.useMemo(() => (Te(f) ? f.get() : f), [f]);
    return k.createElement(n, { ...d, children: h });
  };
}
function _y(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Vy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Iy(e, t, n, r) {
  _y(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(Vy.has(s) ? s : Yc(s), t.attrs[s]);
}
function td(e, t) {
  const { style: n } = e,
    r = {};
  for (const s in n)
    (Te(n[s]) || (t.style && Te(t.style[s])) || Ty(s, e)) && (r[s] = n[s]);
  return r;
}
function zy(e, t) {
  const n = td(e, t);
  for (const r in e)
    if (Te(e[r]) || Te(t[r])) {
      const s =
        ui.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[s] = e[r];
    }
  return n;
}
function nd(e, t, n, r = {}, s = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, s)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, s)),
    t
  );
}
function rd(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const $o = (e) => Array.isArray(e),
  JS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  ZS = (e) => ($o(e) ? e[e.length - 1] || 0 : e);
function oo(e) {
  const t = Te(e) ? e.get() : e;
  return JS(t) ? t.toValue() : t;
}
function ej(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  s,
  i
) {
  const o = { latestValues: tj(r, s, i, e), renderState: t() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const By = (e) => (t, n) => {
  const r = k.useContext(wa),
    s = k.useContext(Hc),
    i = () => ej(e, t, r, s);
  return n ? i() : rd(i);
};
function tj(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const h in i) s[h] = oo(i[h]);
  let { initial: o, animate: a } = e;
  const l = Sa(e),
    c = Py(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  return (
    f &&
      typeof f != "boolean" &&
      !ka(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const p = nd(e, g);
        if (!p) return;
        const { transitionEnd: v, transition: w, ...x } = p;
        for (const m in x) {
          let y = x[m];
          if (Array.isArray(y)) {
            const b = d ? y.length - 1 : 0;
            y = y[b];
          }
          y !== null && (s[m] = y);
        }
        for (const m in v) s[m] = v[m];
      }),
    s
  );
}
const oe = (e) => e;
class dh {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function nj(e) {
  let t = new dh(),
    n = new dh(),
    r = 0,
    s = !1,
    i = !1;
  const o = new WeakSet(),
    a = {
      schedule: (l, c = !1, d = !1) => {
        const f = d && s,
          h = f ? t : n;
        return c && o.add(l), h.add(l) && f && s && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), o.delete(l);
      },
      process: (l) => {
        if (s) {
          i = !0;
          return;
        }
        if (((s = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            const d = t.order[c];
            d(l), o.has(d) && (a.schedule(d), e());
          }
        (s = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const Fi = ["prepare", "read", "update", "preRender", "render", "postRender"],
  rj = 40;
function sj(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = Fi.reduce((f, h) => ((f[h] = nj(() => (n = !0))), f), {}),
    o = (f) => i[f].process(s),
    a = () => {
      const f = performance.now();
      (n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(f - s.timestamp, rj), 1)),
        (s.timestamp = f),
        (s.isProcessing = !0),
        Fi.forEach(o),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), s.isProcessing || e(a);
    };
  return {
    schedule: Fi.reduce((f, h) => {
      const g = i[h];
      return (f[h] = (p, v = !1, w = !1) => (n || l(), g.schedule(p, v, w))), f;
    }, {}),
    cancel: (f) => Fi.forEach((h) => i[h].cancel(f)),
    state: s,
    steps: i,
  };
}
const {
    schedule: H,
    cancel: Ct,
    state: pe,
    steps: il,
  } = sj(typeof requestAnimationFrame < "u" ? requestAnimationFrame : oe, !0),
  ij = {
    useVisualState: By({
      scrapeMotionValuesFromProps: zy,
      createRenderState: Fy,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        H.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          H.render(() => {
            Zc(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              ed(t.tagName),
              e.transformTemplate
            ),
              Iy(t, n);
          });
      },
    }),
  },
  oj = {
    useVisualState: By({
      scrapeMotionValuesFromProps: td,
      createRenderState: Jc,
    }),
  };
function aj(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Qc(e) ? ij : oj),
    preloadedFeatures: n,
    useRender: XS(t),
    createVisualElement: r,
    Component: e,
  };
}
function Ot(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Uy = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Na(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const lj = (e) => (t) => Uy(t) && e(t, Na(t));
function Ft(e, t, n, r) {
  return Ot(e, t, lj(n), r);
}
const uj = (e, t) => (n) => t(e(n)),
  pn = (...e) => e.reduce(uj);
function $y(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const fh = $y("dragHorizontal"),
  hh = $y("dragVertical");
function Wy(e) {
  let t = !1;
  if (e === "y") t = hh();
  else if (e === "x") t = fh();
  else {
    const n = fh(),
      r = hh();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Hy() {
  const e = Wy(!0);
  return e ? (e(), !1) : !0;
}
class En {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function mh(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    s = (i, o) => {
      if (i.pointerType === "touch" || Hy()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && H.update(() => a[r](i, o));
    };
  return Ft(e.current, n, s, { passive: !e.getProps()[r] });
}
class cj extends En {
  mount() {
    this.unmount = pn(mh(this.node, !0), mh(this.node, !1));
  }
  unmount() {}
}
class dj extends En {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = pn(
      Ot(this.node.current, "focus", () => this.onFocus()),
      Ot(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const qy = (e, t) => (t ? (e === t ? !0 : qy(e, t.parentElement)) : !1);
function ol(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Na(n));
}
class fj extends En {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = oe),
      (this.removeEndListeners = oe),
      (this.removeAccessibleListeners = oe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = Ft(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: c,
                onTapCancel: d,
                globalTapTarget: f,
              } = this.node.getProps();
              H.update(() => {
                !f && !qy(this.node.current, a.target)
                  ? d && d(a, l)
                  : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = Ft(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = pn(i, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                ol("up", (l, c) => {
                  const { onTap: d } = this.node.getProps();
                  d && H.update(() => d(l, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Ot(this.node.current, "keyup", o)),
              ol("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Ot(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ol("cancel", (i, o) => this.cancelPress(i, o));
          },
          s = Ot(this.node.current, "blur", r);
        this.removeAccessibleListeners = pn(n, s);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: s } = this.node.getProps();
    s &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && H.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Hy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && H.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Ft(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Ot(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Pu = new WeakMap(),
  al = new WeakMap(),
  hj = (e) => {
    const t = Pu.get(e.target);
    t && t(e);
  },
  mj = (e) => {
    e.forEach(hj);
  };
function pj({ root: e, ...t }) {
  const n = e || document;
  al.has(n) || al.set(n, {});
  const r = al.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(mj, { root: e, ...t })), r[s];
}
function gj(e, t, n) {
  const r = pj(t);
  return (
    Pu.set(e, n),
    r.observe(e),
    () => {
      Pu.delete(e), r.unobserve(e);
    }
  );
}
const yj = { some: 0, all: 1 };
class xj extends En {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : yj[s],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(l);
      };
    return gj(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(vj(t, n)) && this.startObserver();
  }
  unmount() {}
}
function vj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const wj = {
  inView: { Feature: xj },
  tap: { Feature: fj },
  focus: { Feature: dj },
  hover: { Feature: cj },
};
function Yy(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function bj(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function kj(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Pa(e, t, n) {
  const r = e.getProps();
  return nd(r, t, n !== void 0 ? n : r.custom, bj(e), kj(e));
}
let Sj = oe,
  sd = oe;
const Gn = (e) => e * 1e3,
  Pt = (e) => e / 1e3,
  jj = { current: !1 },
  Gy = (e) => Array.isArray(e) && typeof e[0] == "number";
function Ky(e) {
  return !!(
    !e ||
    (typeof e == "string" && Qy[e]) ||
    Gy(e) ||
    (Array.isArray(e) && e.every(Ky))
  );
}
const ds = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Qy = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ds([0, 0.65, 0.55, 1]),
    circOut: ds([0.55, 0, 1, 0.45]),
    backIn: ds([0.31, 0.01, 0.66, -0.59]),
    backOut: ds([0.33, 1.53, 0.69, 0.99]),
  };
function Xy(e) {
  if (e) return Gy(e) ? ds(e) : Array.isArray(e) ? e.map(Xy) : Qy[e];
}
function Nj(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = Xy(a);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: s,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function Pj(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Jy = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Cj = 1e-7,
  Ej = 12;
function Tj(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (i = Jy(o, r, s) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > Cj && ++a < Ej);
  return o;
}
function fi(e, t, n, r) {
  if (e === t && n === r) return oe;
  const s = (i) => Tj(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Jy(s(i), t, r));
}
const Rj = fi(0.42, 0, 1, 1),
  Dj = fi(0, 0, 0.58, 1),
  Zy = fi(0.42, 0, 0.58, 1),
  Mj = (e) => Array.isArray(e) && typeof e[0] != "number",
  ex = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  tx = (e) => (t) => 1 - e(1 - t),
  id = (e) => 1 - Math.sin(Math.acos(e)),
  nx = tx(id),
  Aj = ex(id),
  rx = fi(0.33, 1.53, 0.69, 0.99),
  od = tx(rx),
  Oj = ex(od),
  Lj = (e) =>
    (e *= 2) < 1 ? 0.5 * od(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Fj = {
    linear: oe,
    easeIn: Rj,
    easeInOut: Zy,
    easeOut: Dj,
    circIn: id,
    circInOut: Aj,
    circOut: nx,
    backIn: od,
    backInOut: Oj,
    backOut: rx,
    anticipate: Lj,
  },
  ph = (e) => {
    if (Array.isArray(e)) {
      sd(e.length === 4);
      const [t, n, r, s] = e;
      return fi(t, n, r, s);
    } else if (typeof e == "string") return Fj[e];
    return e;
  },
  ad = (e, t) => (n) =>
    !!(
      (ci(n) && _S.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  sx = (e, t, n) => (r) => {
    if (!ci(r)) return r;
    const [s, i, o, a] = r.match(ja);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  _j = (e) => vn(0, 255, e),
  ll = { ...sr, transform: (e) => Math.round(_j(e)) },
  Un = {
    test: ad("rgb", "red"),
    parse: sx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ll.transform(e) +
      ", " +
      ll.transform(t) +
      ", " +
      ll.transform(n) +
      ", " +
      Ss(ks.transform(r)) +
      ")",
  };
function Vj(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Cu = { test: ad("#"), parse: Vj, transform: Un.transform },
  wr = {
    test: ad("hsl", "hue"),
    parse: sx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Nt.transform(Ss(t)) +
      ", " +
      Nt.transform(Ss(n)) +
      ", " +
      Ss(ks.transform(r)) +
      ")",
  },
  Me = {
    test: (e) => Un.test(e) || Cu.test(e) || wr.test(e),
    parse: (e) =>
      Un.test(e) ? Un.parse(e) : wr.test(e) ? wr.parse(e) : Cu.parse(e),
    transform: (e) =>
      ci(e) ? e : e.hasOwnProperty("red") ? Un.transform(e) : wr.transform(e),
  },
  te = (e, t, n) => -n * e + n * t + e;
function ul(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Ij({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (s = ul(l, a, e + 1 / 3)), (i = ul(l, a, e)), (o = ul(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const cl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  zj = [Cu, Un, wr],
  Bj = (e) => zj.find((t) => t.test(e));
function gh(e) {
  const t = Bj(e);
  let n = t.parse(e);
  return t === wr && (n = Ij(n)), n;
}
const ix = (e, t) => {
  const n = gh(e),
    r = gh(t),
    s = { ...n };
  return (i) => (
    (s.red = cl(n.red, r.red, i)),
    (s.green = cl(n.green, r.green, i)),
    (s.blue = cl(n.blue, r.blue, i)),
    (s.alpha = te(n.alpha, r.alpha, i)),
    Un.transform(s)
  );
};
function Uj(e) {
  var t, n;
  return (
    isNaN(e) &&
    ci(e) &&
    (((t = e.match(ja)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(My)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const ox = { regex: LS, countKey: "Vars", token: "${v}", parse: oe },
  ax = { regex: My, countKey: "Colors", token: "${c}", parse: Me.parse },
  lx = { regex: ja, countKey: "Numbers", token: "${n}", parse: sr.parse };
function dl(e, { regex: t, countKey: n, token: r, parse: s }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(s)));
}
function Wo(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && dl(n, ox), dl(n, ax), dl(n, lx), n;
}
function ux(e) {
  return Wo(e).values;
}
function cx(e) {
  const { values: t, numColors: n, numVars: r, tokenised: s } = Wo(e),
    i = t.length;
  return (o) => {
    let a = s;
    for (let l = 0; l < i; l++)
      l < r
        ? (a = a.replace(ox.token, o[l]))
        : l < r + n
        ? (a = a.replace(ax.token, Me.transform(o[l])))
        : (a = a.replace(lx.token, Ss(o[l])));
    return a;
  };
}
const $j = (e) => (typeof e == "number" ? 0 : e);
function Wj(e) {
  const t = ux(e);
  return cx(e)(t.map($j));
}
const wn = {
    test: Uj,
    parse: ux,
    createTransformer: cx,
    getAnimatableNone: Wj,
  },
  dx = (e, t) => (n) => `${n > 0 ? t : e}`;
function fx(e, t) {
  return typeof e == "number"
    ? (n) => te(e, t, n)
    : Me.test(e)
    ? ix(e, t)
    : e.startsWith("var(")
    ? dx(e, t)
    : mx(e, t);
}
const hx = (e, t) => {
    const n = [...e],
      r = n.length,
      s = e.map((i, o) => fx(i, t[o]));
    return (i) => {
      for (let o = 0; o < r; o++) n[o] = s[o](i);
      return n;
    };
  },
  Hj = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const s in n)
      e[s] !== void 0 && t[s] !== void 0 && (r[s] = fx(e[s], t[s]));
    return (s) => {
      for (const i in r) n[i] = r[i](s);
      return n;
    };
  },
  mx = (e, t) => {
    const n = wn.createTransformer(t),
      r = Wo(e),
      s = Wo(t);
    return r.numVars === s.numVars &&
      r.numColors === s.numColors &&
      r.numNumbers >= s.numNumbers
      ? pn(hx(r.values, s.values), n)
      : dx(e, t);
  },
  Vr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  yh = (e, t) => (n) => te(e, t, n);
function qj(e) {
  return typeof e == "number"
    ? yh
    : typeof e == "string"
    ? Me.test(e)
      ? ix
      : mx
    : Array.isArray(e)
    ? hx
    : typeof e == "object"
    ? Hj
    : yh;
}
function Yj(e, t, n) {
  const r = [],
    s = n || qj(e[0]),
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || oe : t;
      a = pn(l, a);
    }
    r.push(a);
  }
  return r;
}
function ld(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((sd(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = Yj(t, r, s),
    a = o.length,
    l = (c) => {
      let d = 0;
      if (a > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = Vr(e[d], e[d + 1], c);
      return o[d](f);
    };
  return n ? (c) => l(vn(e[0], e[i - 1], c)) : l;
}
function Gj(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Vr(0, t, r);
    e.push(te(n, 1, s));
  }
}
function px(e) {
  const t = [0];
  return Gj(t, e.length - 1), t;
}
function Kj(e, t) {
  return e.map((n) => n * t);
}
function Qj(e, t) {
  return e.map(() => t || Zy).splice(0, e.length - 1);
}
function Ho({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = Mj(r) ? r.map(ph) : ph(r),
    i = { done: !1, value: t[0] },
    o = Kj(n && n.length === t.length ? n : px(t), e),
    a = ld(o, t, { ease: Array.isArray(s) ? s : Qj(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
function ud(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Xj = 5;
function gx(e, t, n) {
  const r = Math.max(t - Xj, 0);
  return ud(n - e(r), t - r);
}
const fl = 0.001,
  Jj = 0.01,
  Zj = 10,
  eN = 0.05,
  tN = 1;
function nN({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let s,
    i,
    o = 1 - t;
  (o = vn(eN, tN, o)),
    (e = vn(Jj, Zj, Pt(e))),
    o < 1
      ? ((s = (c) => {
          const d = c * o,
            f = d * e,
            h = d - n,
            g = Eu(c, o),
            p = Math.exp(-f);
          return fl - (h / g) * p;
        }),
        (i = (c) => {
          const f = c * o * e,
            h = f * n + n,
            g = Math.pow(o, 2) * Math.pow(c, 2) * e,
            p = Math.exp(-f),
            v = Eu(Math.pow(c, 2), o);
          return ((-s(c) + fl > 0 ? -1 : 1) * ((h - g) * p)) / v;
        }))
      : ((s = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -fl + d * f;
        }),
        (i = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        }));
  const a = 5 / e,
    l = sN(s, i, a);
  if (((e = Gn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const rN = 12;
function sN(e, t, n) {
  let r = n;
  for (let s = 1; s < rN; s++) r = r - e(r) / t(r);
  return r;
}
function Eu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const iN = ["duration", "bounce"],
  oN = ["stiffness", "damping", "mass"];
function xh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function aN(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!xh(e, oN) && xh(e, iN)) {
    const n = nN(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function yx({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const s = e[0],
    i = e[e.length - 1],
    o = { done: !1, value: s },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = aN({ ...r, velocity: -Pt(r.velocity || 0) }),
    g = f || 0,
    p = l / (2 * Math.sqrt(a * c)),
    v = i - s,
    w = Pt(Math.sqrt(a / c)),
    x = Math.abs(v) < 5;
  n || (n = x ? 0.01 : 2), t || (t = x ? 0.005 : 0.5);
  let m;
  if (p < 1) {
    const y = Eu(w, p);
    m = (b) => {
      const j = Math.exp(-p * w * b);
      return (
        i - j * (((g + p * w * v) / y) * Math.sin(y * b) + v * Math.cos(y * b))
      );
    };
  } else if (p === 1) m = (y) => i - Math.exp(-w * y) * (v + (g + w * v) * y);
  else {
    const y = w * Math.sqrt(p * p - 1);
    m = (b) => {
      const j = Math.exp(-p * w * b),
        E = Math.min(y * b, 300);
      return (
        i - (j * ((g + p * w * v) * Math.sinh(E) + y * v * Math.cosh(E))) / y
      );
    };
  }
  return {
    calculatedDuration: (h && d) || null,
    next: (y) => {
      const b = m(y);
      if (h) o.done = y >= d;
      else {
        let j = g;
        y !== 0 && (p < 1 ? (j = gx(m, y, b)) : (j = 0));
        const E = Math.abs(j) <= n,
          N = Math.abs(i - b) <= t;
        o.done = E && N;
      }
      return (o.value = o.done ? i : b), o;
    },
  };
}
function vh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    g = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    p = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let v = n * t;
  const w = f + v,
    x = o === void 0 ? w : o(w);
  x !== w && (v = x - f);
  const m = (P) => -v * Math.exp(-P / r),
    y = (P) => x + m(P),
    b = (P) => {
      const A = m(P),
        L = y(P);
      (h.done = Math.abs(A) <= c), (h.value = h.done ? x : L);
    };
  let j, E;
  const N = (P) => {
    g(h.value) &&
      ((j = P),
      (E = yx({
        keyframes: [h.value, p(h.value)],
        velocity: gx(y, P, h.value),
        damping: s,
        stiffness: i,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let A = !1;
        return (
          !E && j === void 0 && ((A = !0), b(P), N(P)),
          j !== void 0 && P > j ? E.next(P - j) : (!A && b(P), h)
        );
      },
    }
  );
}
const lN = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => H.update(t, !0),
      stop: () => Ct(t),
      now: () => (pe.isProcessing ? pe.timestamp : performance.now()),
    };
  },
  wh = 2e4;
function bh(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < wh; ) (t += n), (r = e.next(t));
  return t >= wh ? 1 / 0 : t;
}
const uN = { decay: vh, inertia: vh, tween: Ho, keyframes: Ho, spring: yx };
function Xs({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = lN,
  keyframes: r,
  type: s = "keyframes",
  repeat: i = 0,
  repeatDelay: o = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: c,
  onComplete: d,
  onUpdate: f,
  ...h
}) {
  let g = 1,
    p = !1,
    v,
    w;
  const x = () => {
    w = new Promise((D) => {
      v = D;
    });
  };
  x();
  let m;
  const y = uN[s] || Ho;
  let b;
  y !== Ho &&
    typeof r[0] != "number" &&
    ((b = ld([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const j = y({ ...h, keyframes: r });
  let E;
  a === "mirror" &&
    (E = y({
      ...h,
      keyframes: [...r].reverse(),
      velocity: -(h.velocity || 0),
    }));
  let N = "idle",
    P = null,
    A = null,
    L = null;
  j.calculatedDuration === null && i && (j.calculatedDuration = bh(j));
  const { calculatedDuration: ae } = j;
  let se = 1 / 0,
    le = 1 / 0;
  ae !== null && ((se = ae + o), (le = se * (i + 1) - o));
  let K = 0;
  const at = (D) => {
      if (A === null) return;
      g > 0 && (A = Math.min(A, D)),
        g < 0 && (A = Math.min(D - le / g, A)),
        P !== null ? (K = P) : (K = Math.round(D - A) * g);
      const $ = K - t * (g >= 0 ? 1 : -1),
        lt = g >= 0 ? $ < 0 : $ > le;
      (K = Math.max($, 0)), N === "finished" && P === null && (K = le);
      let De = K,
        Et = j;
      if (i) {
        const Ca = Math.min(K, le) / se;
        let hi = Math.floor(Ca),
          Rn = Ca % 1;
        !Rn && Ca >= 1 && (Rn = 1),
          Rn === 1 && hi--,
          (hi = Math.min(hi, i + 1)),
          !!(hi % 2) &&
            (a === "reverse"
              ? ((Rn = 1 - Rn), o && (Rn -= o / se))
              : a === "mirror" && (Et = E)),
          (De = vn(0, 1, Rn) * se);
      }
      const We = lt ? { done: !1, value: r[0] } : Et.next(De);
      b && (We.value = b(We.value));
      let { done: Tn } = We;
      !lt && ae !== null && (Tn = g >= 0 ? K >= le : K <= 0);
      const $x = P === null && (N === "finished" || (N === "running" && Tn));
      return f && f(We.value), $x && T(), We;
    },
    U = () => {
      m && m.stop(), (m = void 0);
    },
    Re = () => {
      (N = "idle"), U(), v(), x(), (A = L = null);
    },
    T = () => {
      (N = "finished"), d && d(), U(), v();
    },
    M = () => {
      if (p) return;
      m || (m = n(at));
      const D = m.now();
      l && l(),
        P !== null ? (A = D - P) : (!A || N === "finished") && (A = D),
        N === "finished" && x(),
        (L = A),
        (P = null),
        (N = "running"),
        m.start();
    };
  e && M();
  const F = {
    then(D, $) {
      return w.then(D, $);
    },
    get time() {
      return Pt(K);
    },
    set time(D) {
      (D = Gn(D)),
        (K = D),
        P !== null || !m || g === 0 ? (P = D) : (A = m.now() - D / g);
    },
    get duration() {
      const D = j.calculatedDuration === null ? bh(j) : j.calculatedDuration;
      return Pt(D);
    },
    get speed() {
      return g;
    },
    set speed(D) {
      D === g || !m || ((g = D), (F.time = Pt(K)));
    },
    get state() {
      return N;
    },
    play: M,
    pause: () => {
      (N = "paused"), (P = K);
    },
    stop: () => {
      (p = !0), N !== "idle" && ((N = "idle"), c && c(), Re());
    },
    cancel: () => {
      L !== null && at(L), Re();
    },
    complete: () => {
      N = "finished";
    },
    sample: (D) => ((A = 0), at(D)),
  };
  return F;
}
function cN(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const dN = cN(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  fN = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  _i = 10,
  hN = 2e4,
  mN = (e, t) => t.type === "spring" || e === "backgroundColor" || !Ky(t.ease);
function pN(e, t, { onUpdate: n, onComplete: r, ...s }) {
  if (
    !(
      dN() &&
      fN.has(t) &&
      !s.repeatDelay &&
      s.repeatType !== "mirror" &&
      s.damping !== 0 &&
      s.type !== "inertia"
    )
  )
    return !1;
  let o = !1,
    a,
    l,
    c = !1;
  const d = () => {
    l = new Promise((y) => {
      a = y;
    });
  };
  d();
  let { keyframes: f, duration: h = 300, ease: g, times: p } = s;
  if (mN(t, s)) {
    const y = Xs({ ...s, repeat: 0, delay: 0 });
    let b = { done: !1, value: f[0] };
    const j = [];
    let E = 0;
    for (; !b.done && E < hN; ) (b = y.sample(E)), j.push(b.value), (E += _i);
    (p = void 0), (f = j), (h = E - _i), (g = "linear");
  }
  const v = Nj(e.owner.current, t, f, { ...s, duration: h, ease: g, times: p }),
    w = () => {
      (c = !1), v.cancel();
    },
    x = () => {
      (c = !0), H.update(w), a(), d();
    };
  return (
    (v.onfinish = () => {
      c || (e.set(Pj(f, s)), r && r(), x());
    }),
    {
      then(y, b) {
        return l.then(y, b);
      },
      attachTimeline(y) {
        return (v.timeline = y), (v.onfinish = null), oe;
      },
      get time() {
        return Pt(v.currentTime || 0);
      },
      set time(y) {
        v.currentTime = Gn(y);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(y) {
        v.playbackRate = y;
      },
      get duration() {
        return Pt(h);
      },
      play: () => {
        o || (v.play(), Ct(w));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((o = !0), v.playState === "idle")) return;
        const { currentTime: y } = v;
        if (y) {
          const b = Xs({ ...s, autoplay: !1 });
          e.setWithVelocity(b.sample(y - _i).value, b.sample(y).value, _i);
        }
        x();
      },
      complete: () => {
        c || v.finish();
      },
      cancel: x,
    }
  );
}
function gN({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const s = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: oe,
      pause: oe,
      stop: oe,
      then: (i) => (i(), Promise.resolve()),
      cancel: oe,
      complete: oe,
    }
  );
  return t
    ? Xs({ keyframes: [0, 1], duration: 0, delay: t, onComplete: s })
    : s();
}
const yN = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  xN = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  vN = { type: "keyframes", duration: 0.8 },
  wN = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  bN = (e, { keyframes: t }) =>
    t.length > 2
      ? vN
      : rr.has(e)
      ? e.startsWith("scale")
        ? xN(t[1])
        : yN
      : wN,
  Tu = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (wn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  kN = new Set(["brightness", "contrast", "saturate", "opacity"]);
function SN(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(ja) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = kN.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const jN = /([a-z-]*)\(.*?\)/g,
  Ru = {
    ...wn,
    getAnimatableNone: (e) => {
      const t = e.match(jN);
      return t ? t.map(SN).join(" ") : e;
    },
  },
  NN = {
    ...Ay,
    color: Me,
    backgroundColor: Me,
    outlineColor: Me,
    fill: Me,
    stroke: Me,
    borderColor: Me,
    borderTopColor: Me,
    borderRightColor: Me,
    borderBottomColor: Me,
    borderLeftColor: Me,
    filter: Ru,
    WebkitFilter: Ru,
  },
  cd = (e) => NN[e];
function xx(e, t) {
  let n = cd(e);
  return (
    n !== Ru && (n = wn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const vx = (e) => /^0[^.\s]+$/.test(e);
function PN(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || vx(e);
}
function CN(e, t, n, r) {
  const s = Tu(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const o = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let c = 0; c < i.length; c++)
    i[c] === null && (i[c] = c === 0 ? o : i[c - 1]),
      PN(i[c]) && l.push(c),
      typeof i[c] == "string" && i[c] !== "none" && i[c] !== "0" && (a = i[c]);
  if (s && l.length && a)
    for (let c = 0; c < l.length; c++) {
      const d = l[c];
      i[d] = xx(t, a);
    }
  return i;
}
function EN({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
function dd(e, t) {
  return e[t] || e.default || e;
}
const TN = { skipAnimations: !1 },
  fd =
    (e, t, n, r = {}) =>
    (s) => {
      const i = dd(r, e) || {},
        o = i.delay || r.delay || 0;
      let { elapsed: a = 0 } = r;
      a = a - Gn(o);
      const l = CN(t, e, n, i),
        c = l[0],
        d = l[l.length - 1],
        f = Tu(e, c),
        h = Tu(e, d);
      let g = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...i,
        delay: -a,
        onUpdate: (p) => {
          t.set(p), i.onUpdate && i.onUpdate(p);
        },
        onComplete: () => {
          s(), i.onComplete && i.onComplete();
        },
      };
      if (
        (EN(i) || (g = { ...g, ...bN(e, g) }),
        g.duration && (g.duration = Gn(g.duration)),
        g.repeatDelay && (g.repeatDelay = Gn(g.repeatDelay)),
        !f || !h || jj.current || i.type === !1 || TN.skipAnimations)
      )
        return gN(g);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const p = pN(t, e, g);
        if (p) return p;
      }
      return Xs(g);
    };
function qo(e) {
  return !!(Te(e) && e.add);
}
const wx = (e) => /^\-?\d*\.?\d+$/.test(e);
function hd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function md(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class pd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return hd(this.subscriptions, t), () => md(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const RN = (e) => !isNaN(parseFloat(e));
class DN {
  constructor(t, n = {}) {
    (this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: o } = pe;
        this.lastUpdated !== o &&
          ((this.timeDelta = i),
          (this.lastUpdated = o),
          H.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => H.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = RN(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new pd());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            H.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? ud(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ht(e, t) {
  return new DN(e, t);
}
const bx = (e) => (t) => t.test(e),
  MN = { test: (e) => e === "auto", parse: (e) => e },
  kx = [sr, O, Nt, Yt, IS, VS, MN],
  ss = (e) => kx.find(bx(e)),
  AN = [...kx, Me, wn],
  ON = (e) => AN.find(bx(e));
function LN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ht(n));
}
function FN(e, t) {
  const n = Pa(e, t);
  let {
    transitionEnd: r = {},
    transition: s = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = ZS(i[o]);
    LN(e, o, a);
  }
}
function _N(e, t, n) {
  var r, s;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    o = i.length;
  if (o)
    for (let a = 0; a < o; a++) {
      const l = i[a],
        c = t[l];
      let d = null;
      Array.isArray(c) && (d = c[0]),
        d === null &&
          (d =
            (s = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && s !== void 0
              ? s
              : t[l]),
        d != null &&
          (typeof d == "string" && (wx(d) || vx(d))
            ? (d = parseFloat(d))
            : !ON(d) && wn.test(c) && (d = xx(l, c)),
          e.addValue(l, ht(d, { owner: e })),
          n[l] === void 0 && (n[l] = d),
          d !== null && e.setBaseTarget(l, d));
    }
}
function VN(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function IN(e, t, n) {
  const r = {};
  for (const s in e) {
    const i = VN(s, t);
    if (i !== void 0) r[s] = i;
    else {
      const o = n.getValue(s);
      o && (r[s] = o.get());
    }
  }
  return r;
}
function zN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function BN(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function Sx(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: o,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const c = [],
    d = s && e.animationState && e.animationState.getState()[s];
  for (const f in a) {
    const h = e.getValue(f),
      g = a[f];
    if (!h || g === void 0 || (d && zN(d, f))) continue;
    const p = { delay: n, elapsed: 0, ...dd(i || {}, f) };
    if (window.HandoffAppearAnimations) {
      const x = e.getProps()[Ny];
      if (x) {
        const m = window.HandoffAppearAnimations(x, f, h, H);
        m !== null && ((p.elapsed = m), (p.isHandoff = !0));
      }
    }
    let v = !p.isHandoff && !BN(h, g);
    if (
      (p.type === "spring" && (h.getVelocity() || p.velocity) && (v = !1),
      h.animation && (v = !1),
      v)
    )
      continue;
    h.start(fd(f, h, g, e.shouldReduceMotion && rr.has(f) ? { type: !1 } : p));
    const w = h.animation;
    qo(l) && (l.add(f), w.then(() => l.remove(f))), c.push(w);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        o && FN(e, o);
      }),
    c
  );
}
function Du(e, t, n = {}) {
  const r = Pa(e, t, n.custom);
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = r ? () => Promise.all(Sx(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = s;
            return UN(e, t, c + l, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [i, o] : [o, i];
    return l().then(() => c());
  } else return Promise.all([i(), o(n.delay)]);
}
function UN(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort($N)
      .forEach((c, d) => {
        c.notify("AnimationStart", t),
          o.push(
            Du(c, t, { ...i, delay: n + l(d) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function $N(e, t) {
  return e.sortNodePosition(t);
}
function WN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Du(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Du(e, t, n);
  else {
    const s = typeof t == "function" ? Pa(e, t, n.custom) : t;
    r = Promise.all(Sx(e, s, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const HN = [...Gc].reverse(),
  qN = Gc.length;
function YN(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => WN(e, n, r)));
}
function GN(e) {
  let t = YN(e);
  const n = QN();
  let r = !0;
  const s = (l, c) => {
    const d = Pa(e, c);
    if (d) {
      const { transition: f, transitionEnd: h, ...g } = d;
      l = { ...l, ...g, ...h };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function o(l, c) {
    const d = e.getProps(),
      f = e.getVariantContext(!0) || {},
      h = [],
      g = new Set();
    let p = {},
      v = 1 / 0;
    for (let x = 0; x < qN; x++) {
      const m = HN[x],
        y = n[m],
        b = d[m] !== void 0 ? d[m] : f[m],
        j = Ks(b),
        E = m === c ? y.isActive : null;
      E === !1 && (v = x);
      let N = b === f[m] && b !== d[m] && j;
      if (
        (N && r && e.manuallyAnimateOnMount && (N = !1),
        (y.protectedKeys = { ...p }),
        (!y.isActive && E === null) ||
          (!b && !y.prevProp) ||
          ka(b) ||
          typeof b == "boolean")
      )
        continue;
      let A =
          KN(y.prevProp, b) ||
          (m === c && y.isActive && !N && j) ||
          (x > v && j),
        L = !1;
      const ae = Array.isArray(b) ? b : [b];
      let se = ae.reduce(s, {});
      E === !1 && (se = {});
      const { prevResolvedValues: le = {} } = y,
        K = { ...le, ...se },
        at = (U) => {
          (A = !0),
            g.has(U) && ((L = !0), g.delete(U)),
            (y.needsAnimating[U] = !0);
        };
      for (const U in K) {
        const Re = se[U],
          T = le[U];
        if (p.hasOwnProperty(U)) continue;
        let M = !1;
        $o(Re) && $o(T) ? (M = !Yy(Re, T)) : (M = Re !== T),
          M
            ? Re !== void 0
              ? at(U)
              : g.add(U)
            : Re !== void 0 && g.has(U)
            ? at(U)
            : (y.protectedKeys[U] = !0);
      }
      (y.prevProp = b),
        (y.prevResolvedValues = se),
        y.isActive && (p = { ...p, ...se }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          (!N || L) &&
          h.push(
            ...ae.map((U) => ({ animation: U, options: { type: m, ...l } }))
          );
    }
    if (g.size) {
      const x = {};
      g.forEach((m) => {
        const y = e.getBaseTarget(m);
        y !== void 0 && (x[m] = y);
      }),
        h.push({ animation: x });
    }
    let w = !!h.length;
    return (
      r &&
        (d.initial === !1 || d.initial === d.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? t(h) : Promise.resolve()
    );
  }
  function a(l, c, d) {
    var f;
    if (n[l].isActive === c) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((g) => {
        var p;
        return (p = g.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, c);
      }),
      (n[l].isActive = c);
    const h = o(d, l);
    for (const g in n) n[g].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function KN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Yy(t, e) : !1;
}
function Mn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function QN() {
  return {
    animate: Mn(!0),
    whileInView: Mn(),
    whileHover: Mn(),
    whileTap: Mn(),
    whileDrag: Mn(),
    whileFocus: Mn(),
    exit: Mn(),
  };
}
class XN extends En {
  constructor(t) {
    super(t), t.animationState || (t.animationState = GN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ka(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let JN = 0;
class ZN extends En {
  constructor() {
    super(...arguments), (this.id = JN++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === s) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const eP = { animation: { Feature: XN }, exit: { Feature: ZN } },
  kh = (e, t) => Math.abs(e - t);
function tP(e, t) {
  const n = kh(e.x, t.x),
    r = kh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class jx {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = ml(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          g = tP(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !g) return;
        const { point: p } = f,
          { timestamp: v } = pe;
        this.history.push({ ...p, timestamp: v });
        const { onStart: w, onMove: x } = this.handlers;
        h ||
          (w && w(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = hl(h, this.transformPagePoint)),
          H.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: g, onSessionEnd: p, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = ml(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : hl(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(f, w), p && p(f, w);
      }),
      !Uy(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const o = Na(t),
      a = hl(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = pe;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, ml(a, this.history)),
      (this.removeListeners = pn(
        Ft(this.contextWindow, "pointermove", this.handlePointerMove),
        Ft(this.contextWindow, "pointerup", this.handlePointerUp),
        Ft(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ct(this.updatePoint);
  }
}
function hl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Sh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ml({ point: e }, t) {
  return {
    point: e,
    delta: Sh(e, Nx(t)),
    offset: Sh(e, nP(t)),
    velocity: rP(t, 0.1),
  };
}
function nP(e) {
  return e[0];
}
function Nx(e) {
  return e[e.length - 1];
}
function rP(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = Nx(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Gn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Pt(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Ke(e) {
  return e.max - e.min;
}
function Mu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function jh(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = te(t.min, t.max, e.origin)),
    (e.scale = Ke(n) / Ke(t)),
    (Mu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = te(n.min, n.max, e.origin) - e.originPoint),
    (Mu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function js(e, t, n, r) {
  jh(e.x, t.x, n.x, r ? r.originX : void 0),
    jh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Nh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ke(t));
}
function sP(e, t, n) {
  Nh(e.x, t.x, n.x), Nh(e.y, t.y, n.y);
}
function Ph(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ke(t));
}
function Ns(e, t, n) {
  Ph(e.x, t.x, n.x), Ph(e.y, t.y, n.y);
}
function iP(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? te(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? te(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ch(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function oP(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: Ch(e.x, n, s), y: Ch(e.y, t, r) };
}
function Eh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function aP(e, t) {
  return { x: Eh(e.x, t.x), y: Eh(e.y, t.y) };
}
function lP(e, t) {
  let n = 0.5;
  const r = Ke(e),
    s = Ke(t);
  return (
    s > r
      ? (n = Vr(t.min, t.max - r, e.min))
      : r > s && (n = Vr(e.min, e.max - s, t.min)),
    vn(0, 1, n)
  );
}
function uP(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Au = 0.35;
function cP(e = Au) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Au),
    { x: Th(e, "left", "right"), y: Th(e, "top", "bottom") }
  );
}
function Th(e, t, n) {
  return { min: Rh(e, t), max: Rh(e, n) };
}
function Rh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Dh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  br = () => ({ x: Dh(), y: Dh() }),
  Mh = () => ({ min: 0, max: 0 }),
  he = () => ({ x: Mh(), y: Mh() });
function et(e) {
  return [e("x"), e("y")];
}
function Px({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function dP({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function fP(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function pl(e) {
  return e === void 0 || e === 1;
}
function Ou({ scale: e, scaleX: t, scaleY: n }) {
  return !pl(e) || !pl(t) || !pl(n);
}
function Fn(e) {
  return Ou(e) || Cx(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Cx(e) {
  return Ah(e.x) || Ah(e.y);
}
function Ah(e) {
  return e && e !== "0%";
}
function Yo(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function Oh(e, t, n, r, s) {
  return s !== void 0 && (e = Yo(e, s, r)), Yo(e, n, r) + t;
}
function Lu(e, t = 0, n = 1, r, s) {
  (e.min = Oh(e.min, t, n, r, s)), (e.max = Oh(e.max, t, n, r, s));
}
function Ex(e, { x: t, y: n }) {
  Lu(e.x, t.translate, t.scale, t.originPoint),
    Lu(e.y, n.translate, n.scale, n.originPoint);
}
function hP(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    (i = n[a]), (o = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        kr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Ex(e, o)),
      r && Fn(i.latestValues) && kr(e, i.latestValues));
  }
  (t.x = Lh(t.x)), (t.y = Lh(t.y));
}
function Lh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Xt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Fh(e, t, [n, r, s]) {
  const i = t[s] !== void 0 ? t[s] : 0.5,
    o = te(e.min, e.max, i);
  Lu(e, t[n], t[r], o, t.scale);
}
const mP = ["x", "scaleX", "originX"],
  pP = ["y", "scaleY", "originY"];
function kr(e, t) {
  Fh(e.x, t, mP), Fh(e.y, t, pP);
}
function Tx(e, t) {
  return Px(fP(e.getBoundingClientRect(), t));
}
function gP(e, t, n) {
  const r = Tx(e, n),
    { scroll: s } = t;
  return s && (Xt(r.x, s.offset.x), Xt(r.y, s.offset.y)), r;
}
const Rx = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  yP = new WeakMap();
class xP {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = he()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Na(d, "page").point);
      },
      i = (d, f) => {
        const { drag: h, dragPropagation: g, onDragStart: p } = this.getProps();
        if (
          h &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Wy(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          et((w) => {
            let x = this.getAxisMotionValue(w).get() || 0;
            if (Nt.test(x)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const y = m.layout.layoutBox[w];
                y && (x = Ke(y) * (parseFloat(x) / 100));
              }
            }
            this.originPoint[w] = x;
          }),
          p && H.update(() => p(d, f), !1, !0);
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: g,
          onDirectionLock: p,
          onDrag: v,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: w } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = vP(w)),
            this.currentDirection !== null && p && p(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, w),
          this.updateAxis("y", f.point, w),
          this.visualElement.render(),
          v && v(d, f);
      },
      a = (d, f) => this.stop(d, f),
      l = () =>
        et((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new jx(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Rx(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && H.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Vi(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = iP(o, this.constraints[t], this.elastic[t])),
      i.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && vr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
      ? (this.constraints = oP(s.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = cP(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        et((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = uP(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !vr(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = gP(r, s.root, this.visualElement.getTransformPagePoint());
    let o = aP(s.layout.layoutBox, i);
    if (n) {
      const a = n(dP(o));
      (this.hasMutatedConstraints = !!a), a && (o = Px(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = et((d) => {
        if (!Vi(d, n, this.currentDirection)) return;
        let f = (l && l[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = s ? 200 : 1e6,
          g = s ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(d, p);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(fd(t, r, 0, n));
  }
  stopAnimation() {
    et((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    et((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    et((n) => {
      const { drag: r } = this.getProps();
      if (!Vi(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - te(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!vr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    et((o) => {
      const a = this.getAxisMotionValue(o);
      if (a) {
        const l = a.get();
        s[o] = lP({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      et((o) => {
        if (!Vi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(te(l, c, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    yP.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ft(t, "pointerdown", (l) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        vr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), r();
    const o = Ot(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (et((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += l[d].translate),
                f.set(f.get() + l[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = Au,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Vi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function vP(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class wP extends En {
  constructor(t) {
    super(t),
      (this.removeGroupControls = oe),
      (this.removeListeners = oe),
      (this.controls = new xP(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || oe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const _h = (e) => (t, n) => {
  e && H.update(() => e(t, n));
};
class bP extends En {
  constructor() {
    super(...arguments), (this.removePointerDownListener = oe);
  }
  onPointerDown(t) {
    this.session = new jx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Rx(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: _h(t),
      onStart: _h(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && H.update(() => s(i, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ft(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function kP() {
  const e = k.useContext(Hc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    s = k.useId();
  return k.useEffect(() => r(s), []), !t && n ? [!1, () => n && n(s)] : [!0];
}
const ao = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Vh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const is = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (O.test(e)) e = parseFloat(e);
        else return e;
      const n = Vh(e, t.target.x),
        r = Vh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  SP = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = wn.parse(e);
      if (s.length > 5) return r;
      const i = wn.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (s[0 + o] /= a), (s[1 + o] /= l);
      const c = te(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= c),
        typeof s[3 + o] == "number" && (s[3 + o] /= c),
        i(s)
      );
    },
  };
class jP extends Ko.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    DS(NP),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ao.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              H.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Dx(e) {
  const [t, n] = kP(),
    r = k.useContext(Cy);
  return Ko.createElement(jP, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(Ey),
    isPresent: t,
    safeToRemove: n,
  });
}
const NP = {
    borderRadius: {
      ...is,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: is,
    borderTopRightRadius: is,
    borderBottomLeftRadius: is,
    borderBottomRightRadius: is,
    boxShadow: SP,
  },
  Mx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  PP = Mx.length,
  Ih = (e) => (typeof e == "string" ? parseFloat(e) : e),
  zh = (e) => typeof e == "number" || O.test(e);
function CP(e, t, n, r, s, i) {
  s
    ? ((e.opacity = te(0, n.opacity !== void 0 ? n.opacity : 1, EP(r))),
      (e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, TP(r))))
    : i &&
      (e.opacity = te(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < PP; o++) {
    const a = `border${Mx[o]}Radius`;
    let l = Bh(t, a),
      c = Bh(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || zh(l) === zh(c)
        ? ((e[a] = Math.max(te(Ih(l), Ih(c), r), 0)),
          (Nt.test(c) || Nt.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r));
}
function Bh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const EP = Ax(0, 0.5, nx),
  TP = Ax(0.5, 0.95, oe);
function Ax(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Vr(e, t, r)));
}
function Uh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Je(e, t) {
  Uh(e.x, t.x), Uh(e.y, t.y);
}
function $h(e, t, n, r, s) {
  return (
    (e -= t), (e = Yo(e, 1 / n, r)), s !== void 0 && (e = Yo(e, 1 / s, r)), e
  );
}
function RP(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (Nt.test(t) &&
      ((t = parseFloat(t)), (t = te(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = te(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = $h(e.min, t, n, a, s)),
    (e.max = $h(e.max, t, n, a, s));
}
function Wh(e, t, [n, r, s], i, o) {
  RP(e, t[n], t[r], t[s], t.scale, i, o);
}
const DP = ["x", "scaleX", "originX"],
  MP = ["y", "scaleY", "originY"];
function Hh(e, t, n, r) {
  Wh(e.x, t, DP, n ? n.x : void 0, r ? r.x : void 0),
    Wh(e.y, t, MP, n ? n.y : void 0, r ? r.y : void 0);
}
function qh(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ox(e) {
  return qh(e.x) && qh(e.y);
}
function AP(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Lx(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Yh(e) {
  return Ke(e.x) / Ke(e.y);
}
class OP {
  constructor() {
    this.members = [];
  }
  add(t) {
    hd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (md(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Gh(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((s || i) && (r = `translate3d(${s}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: c, rotateY: d } = n;
    l && (r += `rotate(${l}deg) `),
      c && (r += `rotateX(${c}deg) `),
      d && (r += `rotateY(${d}deg) `);
  }
  const o = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || "none";
}
const LP = (e, t) => e.depth - t.depth;
class FP {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    hd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    md(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(LP),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function _P(e, t) {
  const n = performance.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (Ct(r), e(i - t));
    };
  return H.read(r, !0), () => Ct(r);
}
function VP(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function IP(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function zP(e, t, n) {
  const r = Te(e) ? e : ht(e);
  return r.start(fd("", r, t, n)), r.animation;
}
const Kh = ["", "X", "Y", "Z"],
  BP = { visibility: "hidden" },
  Qh = 1e3;
let UP = 0;
const _n = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Fx({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = UP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (_n.totalNodes =
              _n.resolvedTargetDeltas =
              _n.recalculatedProjection =
                0),
            this.nodes.forEach(HP),
            this.nodes.forEach(QP),
            this.nodes.forEach(XP),
            this.nodes.forEach(qP),
            VP(_n);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new FP());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new pd()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = IP(o)), (this.instance = o);
      const { layoutId: l, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = _P(h, 250)),
            ao.hasAnimatedSinceResize &&
              ((ao.hasAnimatedSinceResize = !1), this.nodes.forEach(Jh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          d &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: g,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || d.getDefaultTransition() || nC,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: x } =
                  d.getProps(),
                m = !this.targetLayout || !Lx(this.targetLayout, p) || g,
                y = !h && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (h && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, y);
                const b = { ...dd(v, "layout"), onPlay: w, onComplete: x };
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b);
              } else
                h || Jh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = p;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ct(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(JP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Xh);
        return;
      }
      this.isUpdating || this.nodes.forEach(GP),
        (this.isUpdating = !1),
        this.nodes.forEach(KP),
        this.nodes.forEach($P),
        this.nodes.forEach(WP),
        this.clearAllSnapshots();
      const a = performance.now();
      (pe.delta = vn(0, 1e3 / 60, a - pe.timestamp)),
        (pe.timestamp = a),
        (pe.isProcessing = !0),
        il.update.process(pe),
        il.preRender.process(pe),
        il.render.process(pe),
        (pe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(YP), this.sharedNodes.forEach(ZP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        H.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      H.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = he()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!s) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Ox(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        (a || Fn(this.latestValues) || d) &&
        (s(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        rC(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return he();
      const a = o.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Xt(a.x, l.offset.x), Xt(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = he();
      Je(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l],
          { scroll: d, options: f } = c;
        if (c !== this.root && d && f.layoutScroll) {
          if (d.isRoot) {
            Je(a, o);
            const { scroll: h } = this.root;
            h && (Xt(a.x, -h.offset.x), Xt(a.y, -h.offset.y));
          }
          Xt(a.x, d.offset.x), Xt(a.y, d.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = he();
      Je(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          kr(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          Fn(d.latestValues) && kr(l, d.latestValues);
      }
      return Fn(this.latestValues) && kr(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = he();
      Je(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Fn(c.latestValues)) continue;
        Ou(c.latestValues) && c.updateSnapshot();
        const d = he(),
          f = c.measurePageBox();
        Je(d, f),
          Hh(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return Fn(this.latestValues) && Hh(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== pe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = pe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = he()),
              (this.relativeTargetOrigin = he()),
              Ns(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Je(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = he()), (this.targetWithTransforms = he())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                sP(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Je(this.target, this.layout.layoutBox),
                Ex(this.target, this.targetDelta))
              : Je(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = he()),
                (this.relativeTargetOrigin = he()),
                Ns(this.relativeTargetOrigin, this.target, g.target),
                Je(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          _n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ou(this.parent.latestValues) ||
          Cx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === pe.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      Je(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        g = this.treeScale.y;
      hP(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: p } = a;
      if (!p) {
        this.projectionTransform &&
          ((this.projectionDelta = br()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = br()),
        (this.projectionDeltaWithTransform = br()));
      const v = this.projectionTransform;
      js(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.projectionTransform = Gh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== h ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        _n.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        d = { ...this.latestValues },
        f = br();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = he(),
        g = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        v = g !== p,
        w = this.getStack(),
        x = !w || w.members.length <= 1,
        m = !!(v && !x && this.options.crossfade === !0 && !this.path.some(tC));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (b) => {
        const j = b / 1e3;
        Zh(f.x, o.x, j),
          Zh(f.y, o.y, j),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ns(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            eC(this.relativeTarget, this.relativeTargetOrigin, h, j),
            y && AP(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = he()),
            Je(y, this.relativeTarget)),
          v &&
            ((this.animationValues = d), CP(d, c, this.latestValues, j, m, x)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = j);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Ct(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = H.update(() => {
          (ao.hasAnimatedSinceResize = !0),
            (this.currentAnimation = zP(0, Qh, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Qh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          _x(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || he();
          const f = Ke(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
          const h = Ke(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
        }
        Je(a, l),
          kr(a, d),
          js(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new OP()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const c = {};
      for (let d = 0; d < Kh.length; d++) {
        const f = "rotate" + Kh[d];
        l[f] && ((c[f] = l[f]), o.setStaticValue(f, 0));
      }
      o.render();
      for (const d in c) o.setStaticValue(d, c[d]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return BP;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = oo(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = oo(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Fn(this.latestValues) &&
            ((v.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Gh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        d && (c.transform = d(h, c.transform));
      const { x: g, y: p } = this.projectionDelta;
      (c.transformOrigin = `${g.origin * 100}% ${p.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (c.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const v in Bo) {
        if (h[v] === void 0) continue;
        const { correct: w, applyTo: x } = Bo[v],
          m = c.transform === "none" ? h[v] : w(h[v], f);
        if (x) {
          const y = x.length;
          for (let b = 0; b < y; b++) c[x[b]] = m;
        } else c[v] = m;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? oo(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Xh),
        this.root.sharedNodes.clear();
    }
  };
}
function $P(e) {
  e.updateLayout();
}
function WP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? et((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            g = Ke(h);
          (h.min = r[f].min), (h.max = h.min + g);
        })
      : _x(i, n.layoutBox, r) &&
        et((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            g = Ke(r[f]);
          (h.max = h.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const a = br();
    js(a, r, n.layoutBox);
    const l = br();
    o ? js(l, e.applyTransform(s, !0), n.measuredBox) : js(l, r, n.layoutBox);
    const c = !Ox(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: g } = f;
        if (h && g) {
          const p = he();
          Ns(p, n.layoutBox, h.layoutBox);
          const v = he();
          Ns(v, r, g.layoutBox),
            Lx(p, v) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = p),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function HP(e) {
  _n.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function qP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function YP(e) {
  e.clearSnapshot();
}
function Xh(e) {
  e.clearMeasurements();
}
function GP(e) {
  e.isLayoutDirty = !1;
}
function KP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Jh(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function QP(e) {
  e.resolveTargetDelta();
}
function XP(e) {
  e.calcProjection();
}
function JP(e) {
  e.resetRotation();
}
function ZP(e) {
  e.removeLeadSnapshot();
}
function Zh(e, t, n) {
  (e.translate = te(t.translate, 0, n)),
    (e.scale = te(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function em(e, t, n, r) {
  (e.min = te(t.min, n.min, r)), (e.max = te(t.max, n.max, r));
}
function eC(e, t, n, r) {
  em(e.x, t.x, n.x, r), em(e.y, t.y, n.y, r);
}
function tC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const nC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  tm = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  nm = tm("applewebkit/") && !tm("chrome/") ? Math.round : oe;
function rm(e) {
  (e.min = nm(e.min)), (e.max = nm(e.max));
}
function rC(e) {
  rm(e.x), rm(e.y);
}
function _x(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Mu(Yh(t), Yh(n), 0.2))
  );
}
const sC = Fx({
    attachResizeListener: (e, t) => Ot(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  gl = { current: void 0 },
  Vx = Fx({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!gl.current) {
        const e = new sC({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (gl.current = e);
      }
      return gl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  iC = {
    pan: { Feature: bP },
    drag: { Feature: wP, ProjectionNode: Vx, MeasureLayout: Dx },
  },
  oC = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function aC(e) {
  const t = oC.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Fu(e, t, n = 1) {
  const [r, s] = aC(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return wx(o) ? parseFloat(o) : o;
  } else return Nu(s) ? Fu(s, t, n + 1) : s;
}
function lC(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((s) => {
      const i = s.get();
      if (!Nu(i)) return;
      const o = Fu(i, r);
      o && s.set(o);
    });
  for (const s in t) {
    const i = t[s];
    if (!Nu(i)) continue;
    const o = Fu(i, r);
    o && ((t[s] = o), n || (n = {}), n[s] === void 0 && (n[s] = i));
  }
  return { target: t, transitionEnd: n };
}
const uC = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Ix = (e) => uC.has(e),
  cC = (e) => Object.keys(e).some(Ix),
  sm = (e) => e === sr || e === O,
  im = (e, t) => parseFloat(e.split(", ")[t]),
  om =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/);
      if (s) return im(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? im(i[1], e) : 0;
      }
    },
  dC = new Set(["x", "y", "z"]),
  fC = ui.filter((e) => !dC.has(e));
function hC(e) {
  const t = [];
  return (
    fC.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Ir = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: om(4, 13),
  y: om(5, 14),
};
Ir.translateX = Ir.x;
Ir.translateY = Ir.y;
const mC = (e, t, n) => {
    const r = t.measureViewportBox(),
      s = t.current,
      i = getComputedStyle(s),
      { display: o } = i,
      a = {};
    o === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((c) => {
        a[c] = Ir[c](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((c) => {
        const d = t.getValue(c);
        d && d.jump(a[c]), (e[c] = Ir[c](l, i));
      }),
      e
    );
  },
  pC = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const s = Object.keys(t).filter(Ix);
    let i = [],
      o = !1;
    const a = [];
    if (
      (s.forEach((l) => {
        const c = e.getValue(l);
        if (!e.hasValue(l)) return;
        let d = n[l],
          f = ss(d);
        const h = t[l];
        let g;
        if ($o(h)) {
          const p = h.length,
            v = h[0] === null ? 1 : 0;
          (d = h[v]), (f = ss(d));
          for (let w = v; w < p && h[w] !== null; w++)
            g ? sd(ss(h[w]) === g) : (g = ss(h[w]));
        } else g = ss(h);
        if (f !== g)
          if (sm(f) && sm(g)) {
            const p = c.get();
            typeof p == "string" && c.set(parseFloat(p)),
              typeof h == "string"
                ? (t[l] = parseFloat(h))
                : Array.isArray(h) && g === O && (t[l] = h.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            g != null &&
            g.transform &&
            (d === 0 || h === 0)
              ? d === 0
                ? c.set(g.transform(d))
                : (t[l] = f.transform(h))
              : (o || ((i = hC(e)), (o = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                c.jump(h));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        c = mC(t, e, a);
      return (
        i.length &&
          i.forEach(([d, f]) => {
            e.getValue(d).set(f);
          }),
        e.render(),
        ba && l !== null && window.scrollTo({ top: l }),
        { target: c, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function gC(e, t, n, r) {
  return cC(t) ? pC(e, t, n, r) : { target: t, transitionEnd: r };
}
const yC = (e, t, n, r) => {
    const s = lC(e, t, r);
    return (t = s.target), (r = s.transitionEnd), gC(e, t, n, r);
  },
  _u = { current: null },
  zx = { current: !1 };
function xC() {
  if (((zx.current = !0), !!ba))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (_u.current = e.matches);
      e.addListener(t), t();
    } else _u.current = !1;
}
function vC(e, t, n) {
  const { willChange: r } = t;
  for (const s in t) {
    const i = t[s],
      o = n[s];
    if (Te(i)) e.addValue(s, i), qo(r) && r.add(s);
    else if (Te(o)) e.addValue(s, ht(i, { owner: e })), qo(r) && r.remove(s);
    else if (o !== i)
      if (e.hasValue(s)) {
        const a = e.getValue(s);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(s);
        e.addValue(s, ht(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const s in n) t[s] === void 0 && e.removeValue(s);
  return t;
}
const am = new WeakMap(),
  Bx = Object.keys(Qs),
  wC = Bx.length,
  lm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  bC = Kc.length;
class kC {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      visualState: i,
    },
    o = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => H.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = i;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = o),
      (this.isControllingVariants = Sa(n)),
      (this.isVariantNode = Py(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in d) {
      const h = d[f];
      a[f] !== void 0 && Te(h) && (h.set(a[f], !1), qo(c) && c.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      am.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      zx.current || xC(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : _u.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    am.delete(this.current),
      this.projection && this.projection.unmount(),
      Ct(this.notifyUpdate),
      Ct(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = rr.has(t),
      s = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && H.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      s(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, s, i) {
    let o, a;
    for (let l = 0; l < wC; l++) {
      const c = Bx[l],
        {
          isEnabled: d,
          Feature: f,
          ProjectionNode: h,
          MeasureLayout: g,
        } = Qs[c];
      h && (o = h),
        d(n) &&
          (!this.features[c] && f && (this.features[c] = new f(this)),
          g && (a = g));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      o
    ) {
      this.projection = new o(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: c,
        drag: d,
        dragConstraints: f,
        layoutScroll: h,
        layoutRoot: g,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!d || (f && vr(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: g,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : he();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < lm.length; r++) {
      const s = lm[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = t["on" + s];
      i && (this.propEventSubscriptions[s] = this.on(s, i));
    }
    (this.prevMotionValues = vC(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < bC; r++) {
      const s = Kc[r],
        i = this.props[s];
      (Ks(i) || i === !1) && (n[s] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ht(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      s =
        typeof r == "string" || typeof r == "object"
          ? (n = nd(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Te(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new pd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Ux extends kC {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: s },
    i
  ) {
    let o = IN(r, t || {}, this);
    if ((s && (n && (n = s(n)), r && (r = s(r)), o && (o = s(o))), i)) {
      _N(this, r, o);
      const a = yC(this, r, o, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function SC(e) {
  return window.getComputedStyle(e);
}
class jC extends Ux {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (rr.has(n)) {
      const r = cd(n);
      return (r && r.default) || 0;
    } else {
      const r = SC(t),
        s = (Dy(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Tx(t, n);
  }
  build(t, n, r, s) {
    Xc(t, n, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return td(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Te(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, s) {
    _y(t, n, r, s);
  }
}
class NC extends Ux {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (rr.has(n)) {
      const r = cd(n);
      return (r && r.default) || 0;
    }
    return (n = Vy.has(n) ? n : Yc(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return he();
  }
  scrapeMotionValuesFromProps(t, n) {
    return zy(t, n);
  }
  build(t, n, r, s) {
    Zc(t, n, r, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    Iy(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = ed(t.tagName)), super.mount(t);
  }
}
const PC = (e, t) =>
    Qc(e)
      ? new NC(t, { enableHardwareAcceleration: !1 })
      : new jC(t, { enableHardwareAcceleration: !0 }),
  CC = { layout: { ProjectionNode: Vx, MeasureLayout: Dx } },
  EC = { ...eP, ...wj, ...iC, ...CC },
  TC = TS((e, t) => aj(e, t, EC, PC));
function RC(e) {
  const t = rd(() => ht(e)),
    { isStatic: n } = k.useContext(va);
  if (n) {
    const [, r] = k.useState(e);
    k.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function DC(e, t = {}) {
  const { isStatic: n } = k.useContext(va),
    r = k.useRef(null),
    s = RC(Te(e) ? e.get() : e),
    i = () => {
      r.current && r.current.stop();
    };
  return (
    k.useInsertionEffect(
      () =>
        s.attach((o, a) => {
          if (n) return a(o);
          if (
            (i(),
            (r.current = Xs({
              keyframes: [s.get(), o],
              velocity: s.getVelocity(),
              type: "spring",
              restDelta: 0.001,
              restSpeed: 0.01,
              ...t,
              onUpdate: a,
            })),
            !pe.isProcessing)
          ) {
            const l = performance.now() - pe.timestamp;
            l < 30 && (r.current.time = Pt(l));
          }
          return s.get();
        }, i),
      [JSON.stringify(t)]
    ),
    qc(() => {
      if (Te(e)) return e.on("change", (o) => s.set(parseFloat(o)));
    }, [s]),
    s
  );
}
function MC(e, t, n) {
  return (
    typeof e == "string"
      ? (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const lo = new WeakMap();
let Gt;
function AC(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function OC({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = lo.get(e)) === null ||
    r === void 0 ||
    r.forEach((s) => {
      s({
        target: e,
        contentSize: t,
        get size() {
          return AC(e, n);
        },
      });
    });
}
function LC(e) {
  e.forEach(OC);
}
function FC() {
  typeof ResizeObserver > "u" || (Gt = new ResizeObserver(LC));
}
function _C(e, t) {
  Gt || FC();
  const n = MC(e);
  return (
    n.forEach((r) => {
      let s = lo.get(r);
      s || ((s = new Set()), lo.set(r, s)),
        s.add(t),
        Gt == null || Gt.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const s = lo.get(r);
        s == null || s.delete(t),
          (s != null && s.size) || Gt == null || Gt.unobserve(r);
      });
    }
  );
}
const uo = new Set();
let Ps;
function VC() {
  (Ps = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    uo.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Ps);
}
function IC(e) {
  return (
    uo.add(e),
    Ps || VC(),
    () => {
      uo.delete(e), !uo.size && Ps && (Ps = void 0);
    }
  );
}
function zC(e, t) {
  return typeof e == "function" ? IC(e) : _C(e, t);
}
const BC = 50,
  um = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  UC = () => ({ time: 0, x: um(), y: um() }),
  $C = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function cm(e, t, n, r) {
  const s = n[t],
    { length: i, position: o } = $C[t],
    a = s.current,
    l = n.time;
  (s.current = e["scroll" + o]),
    (s.scrollLength = e["scroll" + i] - e["client" + i]),
    (s.offset.length = 0),
    (s.offset[0] = 0),
    (s.offset[1] = s.scrollLength),
    (s.progress = Vr(0, s.scrollLength, s.current));
  const c = r - l;
  s.velocity = c > BC ? 0 : ud(s.current - a, c);
}
function WC(e, t, n) {
  cm(e, "x", t, n), cm(e, "y", t, n), (t.time = n);
}
function HC(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const s = r.getBoundingClientRect();
      r = r.parentElement;
      const i = r.getBoundingClientRect();
      (n.x += s.left - i.left), (n.y += s.top - i.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: s, y: i } = r.getBBox();
      (n.x += s), (n.y += i);
      let o = null,
        a = r.parentNode;
      for (; !o; ) a.tagName === "svg" && (o = a), (a = r.parentNode);
      r = o;
    } else break;
  return n;
}
const qC = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Vu = { start: 0, center: 0.5, end: 1 };
function dm(e, t, n = 0) {
  let r = 0;
  if ((Vu[e] !== void 0 && (e = Vu[e]), typeof e == "string")) {
    const s = parseFloat(e);
    e.endsWith("px")
      ? (r = s)
      : e.endsWith("%")
      ? (e = s / 100)
      : e.endsWith("vw")
      ? (r = (s / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (s / 100) * document.documentElement.clientHeight)
      : (e = s);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const YC = [0, 0];
function GC(e, t, n, r) {
  let s = Array.isArray(e) ? e : YC,
    i = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (s = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (s = e.split(" ")) : (s = [e, Vu[e] ? e : "0"])),
    (i = dm(s[0], n, r)),
    (o = dm(s[1], t)),
    i - o
  );
}
const KC = { x: 0, y: 0 };
function QC(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function XC(e, t, n) {
  let { offset: r = qC.All } = n;
  const { target: s = e, axis: i = "y" } = n,
    o = i === "y" ? "height" : "width",
    a = s !== e ? HC(s, e) : KC,
    l = s === e ? { width: e.scrollWidth, height: e.scrollHeight } : QC(s),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[i].offset.length = 0;
  let d = !t[i].interpolate;
  const f = r.length;
  for (let h = 0; h < f; h++) {
    const g = GC(r[h], c[o], l[o], a[i]);
    !d && g !== t[i].interpolatorOffsets[h] && (d = !0), (t[i].offset[h] = g);
  }
  d &&
    ((t[i].interpolate = ld(t[i].offset, px(r))),
    (t[i].interpolatorOffsets = [...t[i].offset])),
    (t[i].progress = t[i].interpolate(t[i].current));
}
function JC(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function ZC(e, t, n, r = {}) {
  return {
    measure: () => JC(e, r.target, n),
    update: (s) => {
      WC(e, n, s), (r.offset || r.target) && XC(e, n, r);
    },
    notify: () => t(n),
  };
}
const os = new WeakMap(),
  fm = new WeakMap(),
  yl = new WeakMap(),
  hm = (e) => (e === document.documentElement ? window : e);
function eE(e, { container: t = document.documentElement, ...n } = {}) {
  let r = yl.get(t);
  r || ((r = new Set()), yl.set(t, r));
  const s = UC(),
    i = ZC(t, e, s, n);
  if ((r.add(i), !os.has(t))) {
    const a = () => {
        for (const h of r) h.measure();
      },
      l = () => {
        for (const h of r) h.update(pe.timestamp);
      },
      c = () => {
        for (const h of r) h.notify();
      },
      d = () => {
        H.read(a, !1, !0), H.read(l, !1, !0), H.update(c, !1, !0);
      };
    os.set(t, d);
    const f = hm(t);
    window.addEventListener("resize", d, { passive: !0 }),
      t !== document.documentElement && fm.set(t, zC(t, d)),
      f.addEventListener("scroll", d, { passive: !0 });
  }
  const o = os.get(t);
  return (
    H.read(o, !1, !0),
    () => {
      var a;
      Ct(o);
      const l = yl.get(t);
      if (!l || (l.delete(i), l.size)) return;
      const c = os.get(t);
      os.delete(t),
        c &&
          (hm(t).removeEventListener("scroll", c),
          (a = fm.get(t)) === null || a === void 0 || a(),
          window.removeEventListener("resize", c));
    }
  );
}
function mm(e, t) {
  Sj(!!(!t || t.current));
}
const tE = () => ({
  scrollX: ht(0),
  scrollY: ht(0),
  scrollXProgress: ht(0),
  scrollYProgress: ht(0),
});
function nE({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const s = rd(tE);
  return (
    (n ? qc : k.useEffect)(
      () => (
        mm("target", t),
        mm("container", e),
        eE(
          ({ x: o, y: a }) => {
            s.scrollX.set(o.current),
              s.scrollXProgress.set(o.progress),
              s.scrollY.set(a.current),
              s.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    s
  );
}
const rE = () => {
    const { id: e } = Ag(),
      { user: t, isAuthenticated: n } = Wt(),
      [r, s] = k.useState(null),
      [i, o] = k.useState([]),
      [a, l] = k.useState(!0),
      [c, d] = k.useState({
        name: (t == null ? void 0 : t.name) || "",
        email: (t == null ? void 0 : t.email) || "",
        comment: "",
      }),
      [f, h] = k.useState(!1),
      { scrollYProgress: g } = nE(),
      p = DC(g, { stiffness: 100, damping: 30, restDelta: 0.001 }),
      v = k.useCallback(async () => {
        l(!0);
        try {
          const x = await qn.getById(e);
          s(x.post);
          const y = await (await fetch(`/api/posts/${e}/comments`)).json();
          y.success && o(y.comments);
        } catch (x) {
          console.error("Error loading post:", x),
            V.error("Failed to load article");
        } finally {
          l(!1);
        }
      }, [e]);
    k.useEffect(() => {
      v();
    }, [v]);
    const w = async (x) => {
      x.preventDefault(), h(!0);
      try {
        const m = await Ik.add(e, c);
        m.success &&
          (V.success("Comment added successfully!"),
          o([m.comment, ...i]),
          d({ ...c, comment: "" }));
      } catch {
        V.error("Failed to add comment");
      } finally {
        h(!1);
      }
    };
    return a
      ? u.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: u.jsx("div", {
            className:
              "w-12 h-12 border-3 border-border border-t-accent rounded-full animate-spin-slow",
          }),
        })
      : r
      ? u.jsxs("article", {
          className: "min-h-screen pb-20",
          children: [
            u.jsx(TC.div, {
              className:
                "fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50",
              style: { scaleX: p },
            }),
            u.jsx("div", {
              className: "max-w-container mx-auto px-6 md:px-8 pt-8",
              children: u.jsxs(z, {
                to: "/",
                className:
                  "inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-accent transition-colors group",
                children: [
                  u.jsx(Hk, {
                    size: 16,
                    className:
                      "transition-transform group-hover:-translate-x-1",
                  }),
                  "Back to articles",
                ],
              }),
            }),
            u.jsx("header", {
              className: "max-w-reading mx-auto px-6 md:px-8 pt-12 pb-16",
              children: u.jsxs("div", {
                className: "animate-fade-in",
                children: [
                  u.jsx("h1", {
                    className:
                      "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight",
                    children: r.title,
                  }),
                  r.subtitle &&
                    u.jsx("p", {
                      className:
                        "text-xl md:text-2xl text-ink-soft leading-relaxed mb-8",
                      children: r.subtitle,
                    }),
                  u.jsxs("div", {
                    className:
                      "flex flex-wrap items-center gap-6 pt-8 border-t border-border-soft",
                    children: [
                      u.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-ink-soft",
                        children: [
                          u.jsx(Ys, { size: 16 }),
                          u.jsx("span", {
                            className: "font-medium",
                            children: r.author,
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-ink-muted",
                        children: [
                          u.jsx(gy, { size: 16 }),
                          u.jsx("time", {
                            children: Yn(
                              new Date(r.created_at),
                              "MMMM d, yyyy"
                            ),
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-ink-muted",
                        children: [
                          u.jsx(_r, { size: 16 }),
                          u.jsxs("span", {
                            children: [
                              Math.ceil(r.content.length * 2),
                              " min read",
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-ink-muted",
                        children: [
                          u.jsx(Kk, { size: 16 }),
                          u.jsxs("span", { children: [r.views, " views"] }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            u.jsx("div", {
              className: "max-w-reading mx-auto px-6 md:px-8",
              children: u.jsx("div", {
                className: "prose-custom",
                children: r.content.map((x, m) =>
                  u.jsx(sE, { block: x, index: m }, m)
                ),
              }),
            }),
            u.jsxs("footer", {
              className:
                "max-w-reading mx-auto px-6 md:px-8 mt-20 pt-12 border-t-2 border-border",
              children: [
                u.jsxs("div", {
                  className: "mb-16",
                  children: [
                    u.jsx("p", {
                      className: "text-sm font-medium text-ink-muted mb-4",
                      children: "Share this article",
                    }),
                    u.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        u.jsx(xl, {
                          platform: "Twitter",
                          url: window.location.href,
                          text: r.title,
                        }),
                        u.jsx(xl, {
                          platform: "Facebook",
                          url: window.location.href,
                        }),
                        u.jsx(xl, {
                          platform: "LinkedIn",
                          url: window.location.href,
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-12",
                  children: [
                    u.jsxs("div", {
                      children: [
                        u.jsx("h2", {
                          className:
                            "font-serif text-3xl font-bold text-ink mb-2",
                          children: "Comments",
                        }),
                        u.jsxs("p", {
                          className: "text-base text-ink-soft",
                          children: [
                            i.length,
                            " ",
                            i.length === 1 ? "comment" : "comments",
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className:
                        "bg-surface border border-border rounded-lg p-6 md:p-8",
                      children: [
                        u.jsx("h3", {
                          className:
                            "font-serif text-xl font-semibold text-ink mb-6",
                          children: "Leave a comment",
                        }),
                        u.jsxs("form", {
                          onSubmit: w,
                          className: "space-y-6",
                          children: [
                            u.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("label", {
                                      htmlFor: "name",
                                      className:
                                        "block text-sm font-medium text-ink mb-2",
                                      children: "Name *",
                                    }),
                                    u.jsx("input", {
                                      type: "text",
                                      id: "name",
                                      required: !0,
                                      className:
                                        "w-full py-3 px-4 border border-border rounded-md bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                                      placeholder: "Your name",
                                      value: c.name,
                                      onChange: (x) =>
                                        d({ ...c, name: x.target.value }),
                                      disabled: n,
                                    }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("label", {
                                      htmlFor: "email",
                                      className:
                                        "block text-sm font-medium text-ink mb-2",
                                      children: "Email *",
                                    }),
                                    u.jsx("input", {
                                      type: "email",
                                      id: "email",
                                      required: !0,
                                      className:
                                        "w-full py-3 px-4 border border-border rounded-md bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                                      placeholder: "your@email.com",
                                      value: c.email,
                                      onChange: (x) =>
                                        d({ ...c, email: x.target.value }),
                                      disabled: n,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "comment",
                                  className:
                                    "block text-sm font-medium text-ink mb-2",
                                  children: "Comment *",
                                }),
                                u.jsx("textarea", {
                                  id: "comment",
                                  required: !0,
                                  rows: "6",
                                  className:
                                    "w-full py-3 px-4 border border-border rounded-md bg-surface text-ink placeholder-ink-muted resize-y min-h-[150px] leading-relaxed transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                                  placeholder: "Share your thoughts...",
                                  value: c.comment,
                                  onChange: (x) =>
                                    d({ ...c, comment: x.target.value }),
                                }),
                              ],
                            }),
                            u.jsx("button", {
                              type: "submit",
                              disabled: f,
                              className:
                                "inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-md font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
                              children: f
                                ? u.jsxs(u.Fragment, {
                                    children: [
                                      u.jsx("div", {
                                        className:
                                          "w-4 h-4 border-2 border-surface border-t-transparent rounded-full animate-spin-slow",
                                      }),
                                      "Posting...",
                                    ],
                                  })
                                : u.jsxs(u.Fragment, {
                                    children: [
                                      u.jsx(xy, { size: 16 }),
                                      "Post Comment",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "space-y-6",
                      children:
                        i.length === 0
                          ? u.jsx("div", {
                              className:
                                "text-center py-12 bg-hover rounded-lg",
                              children: u.jsx("p", {
                                className: "text-ink-soft",
                                children:
                                  "No comments yet. Be the first to comment!",
                              }),
                            })
                          : i.map((x, m) =>
                              u.jsx(iE, { comment: x, delay: m * 100 }, x.id)
                            ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : u.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: u.jsxs("div", {
            className: "text-center",
            children: [
              u.jsx("div", {
                className: "text-6xl mb-6 opacity-30",
                children: "📄",
              }),
              u.jsx("h2", {
                className: "font-serif text-3xl font-bold text-ink mb-4",
                children: "Article not found",
              }),
              u.jsx(z, {
                to: "/",
                className: "text-accent hover:text-accent-soft font-medium",
                children: "← Back to articles",
              }),
            ],
          }),
        });
  },
  sE = ({ block: e, index: t }) =>
    e.type === "text"
      ? u.jsx("div", {
          className: "content-text mb-8 animate-fade-in",
          style: { animationDelay: `${t * 100}ms` },
          children: u.jsx("p", {
            className: "text-lg leading-relaxed text-ink",
            children: e.data,
          }),
        })
      : e.type === "image"
      ? u.jsxs("figure", {
          className: "my-12 animate-fade-in",
          style: { animationDelay: `${t * 100}ms` },
          children: [
            u.jsx("div", {
              className: "relative rounded-lg overflow-hidden shadow-lg",
              children: u.jsx("img", {
                src: `/static/uploads/${e.data}`,
                alt: e.caption || "Article image",
                className: "w-full h-auto",
                loading: "lazy",
              }),
            }),
            e.caption &&
              u.jsx("figcaption", {
                className:
                  "mt-4 text-center text-sm italic text-ink-muted leading-relaxed px-4",
                children: e.caption,
              }),
          ],
        })
      : null,
  xl = ({ platform: e, url: t, text: n }) => {
    const r = {
      Twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        t
      )}&text=${encodeURIComponent(n || "")}`,
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        t
      )}`,
      LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        t
      )}`,
    };
    return u.jsx("a", {
      href: r[e],
      target: "_blank",
      rel: "noopener noreferrer",
      className:
        "px-4 py-2 border border-border rounded-md text-sm font-medium text-ink-soft hover:text-ink hover:border-accent hover:bg-accent-light transition-all duration-fast",
      children: e,
    });
  },
  iE = ({ comment: e, delay: t }) =>
    u.jsxs("div", {
      className:
        "bg-surface border border-border rounded-lg p-6 animate-fade-in",
      style: { animationDelay: `${t}ms` },
      children: [
        u.jsx("div", {
          className: "flex items-start justify-between mb-4",
          children: u.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              u.jsx("div", {
                className:
                  "w-10 h-10 rounded-full bg-gradient-to-br from-accent-light to-accent-light/50 flex items-center justify-center font-serif text-sm font-semibold text-accent",
                children: e.name.charAt(0).toUpperCase(),
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("div", {
                    className: "font-medium text-ink",
                    children: e.name,
                  }),
                  u.jsx("div", {
                    className: "text-xs text-ink-muted",
                    children: ju(new Date(e.created_at), { addSuffix: !0 }),
                  }),
                ],
              }),
            ],
          }),
        }),
        u.jsx("p", {
          className: "text-ink-soft leading-relaxed",
          children: e.comment,
        }),
      ],
    }),
  oE = () => {
    var c, d;
    const e = Pn(),
      t = Nn(),
      { login: n } = Wt(),
      [r, s] = k.useState({ email: "", password: "" }),
      [i, o] = k.useState(!1),
      a =
        ((d = (c = t.state) == null ? void 0 : c.from) == null
          ? void 0
          : d.pathname) || "/",
      l = async (f) => {
        f.preventDefault(),
          o(!0),
          (await n(r.email, r.password)).success && e(a, { replace: !0 }),
          o(!1);
      };
    return u.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
      children: u.jsxs("div", {
        className: "max-w-md w-full space-y-8 animate-fade-in-up",
        children: [
          u.jsxs("div", {
            className: "text-center",
            children: [
              u.jsx("div", {
                className: "flex justify-center mb-4",
                children: u.jsx("span", {
                  className: "text-4xl text-accent animate-bounce-subtle",
                  children: "◆",
                }),
              }),
              u.jsx("h2", {
                className: "font-serif text-4xl font-bold text-ink mb-2",
                children: "Welcome Back",
              }),
              u.jsx("p", {
                className: "text-base text-ink-soft",
                children:
                  "Login to access your account and request how-to guides",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "bg-info-light border border-info/20 rounded-lg p-4",
            children: [
              u.jsx("p", {
                className: "text-sm font-medium text-ink mb-2",
                children: "Demo Credentials:",
              }),
              u.jsxs("div", {
                className: "space-y-1 text-xs text-ink-soft",
                children: [
                  u.jsxs("p", {
                    children: [
                      u.jsx("strong", { children: "Admin:" }),
                      " admin@raydex.com / admin123",
                    ],
                  }),
                  u.jsxs("p", {
                    children: [
                      u.jsx("strong", { children: "User:" }),
                      " Any email / password (6+ chars)",
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("form", {
            className: "mt-8 space-y-6",
            onSubmit: l,
            children: [
              u.jsxs("div", {
                className: "space-y-4",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "email",
                        className: "block text-sm font-medium text-ink mb-2",
                        children: "Email Address",
                      }),
                      u.jsxs("div", {
                        className: "relative",
                        children: [
                          u.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                            children: u.jsx(Wc, {
                              size: 18,
                              className: "text-ink-muted",
                            }),
                          }),
                          u.jsx("input", {
                            id: "email",
                            name: "email",
                            type: "email",
                            autoComplete: "email",
                            required: !0,
                            className:
                              "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                            placeholder: "you@example.com",
                            value: r.email,
                            onChange: (f) => s({ ...r, email: f.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "password",
                        className: "block text-sm font-medium text-ink mb-2",
                        children: "Password",
                      }),
                      u.jsxs("div", {
                        className: "relative",
                        children: [
                          u.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                            children: u.jsx(tn, {
                              size: 18,
                              className: "text-ink-muted",
                            }),
                          }),
                          u.jsx("input", {
                            id: "password",
                            name: "password",
                            type: "password",
                            autoComplete: "current-password",
                            required: !0,
                            className:
                              "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                            placeholder: "••••••••",
                            value: r.password,
                            onChange: (f) =>
                              s({ ...r, password: f.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("button", {
                type: "submit",
                disabled: i,
                className:
                  "group w-full flex items-center justify-center gap-2 py-3.5 px-4 border border-transparent text-sm font-medium rounded-lg text-surface bg-accent hover:bg-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-light transition-all duration-base hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                children: i
                  ? u.jsx("div", {
                      className:
                        "w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin-slow",
                    })
                  : u.jsxs(u.Fragment, {
                      children: [
                        "Sign In",
                        u.jsx(qs, {
                          size: 18,
                          className:
                            "transition-transform group-hover:translate-x-1",
                        }),
                      ],
                    }),
              }),
            ],
          }),
          u.jsx("div", {
            className: "text-center",
            children: u.jsxs("p", {
              className: "text-sm text-ink-soft",
              children: [
                "Don't have an account?",
                " ",
                u.jsx(z, {
                  to: "/register",
                  className:
                    "font-medium text-accent hover:text-accent-soft transition-colors",
                  children: "Sign up for free",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  aE = () => {
    const e = Pn(),
      { register: t } = Wt(),
      [n, r] = k.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }),
      [s, i] = k.useState(!1),
      [o, a] = k.useState(""),
      l = async (c) => {
        if ((c.preventDefault(), a(""), n.password !== n.confirmPassword)) {
          a("Passwords do not match");
          return;
        }
        i(!0);
        const d = await t(n.name, n.email, n.password);
        d.success ? e("/dashboard") : a(d.error), i(!1);
      };
    return u.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
      children: u.jsxs("div", {
        className: "max-w-md w-full space-y-8 animate-fade-in-up",
        children: [
          u.jsxs("div", {
            className: "text-center",
            children: [
              u.jsx("div", {
                className: "flex justify-center mb-4",
                children: u.jsx("span", {
                  className: "text-4xl text-accent animate-bounce-subtle",
                  children: "◆",
                }),
              }),
              u.jsx("h2", {
                className: "font-serif text-4xl font-bold text-ink mb-2",
                children: "Join Raydex How-To",
              }),
              u.jsx("p", {
                className: "text-base text-ink-soft",
                children:
                  "Create your account and start requesting custom how-to guides",
              }),
            ],
          }),
          u.jsxs("form", {
            className: "mt-8 space-y-6",
            onSubmit: l,
            children: [
              o &&
                u.jsx("div", {
                  className:
                    "bg-error-light border border-error/20 rounded-lg p-4 text-sm text-error",
                  children: o,
                }),
              u.jsxs("div", {
                className: "space-y-4",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "name",
                        className: "block text-sm font-medium text-ink mb-2",
                        children: "Full Name",
                      }),
                      u.jsxs("div", {
                        className: "relative",
                        children: [
                          u.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                            children: u.jsx(Ys, {
                              size: 18,
                              className: "text-ink-muted",
                            }),
                          }),
                          u.jsx("input", {
                            id: "name",
                            name: "name",
                            type: "text",
                            autoComplete: "name",
                            required: !0,
                            className:
                              "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                            placeholder: "John Doe",
                            value: n.name,
                            onChange: (c) => r({ ...n, name: c.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "email",
                        className: "block text-sm font-medium text-ink mb-2",
                        children: "Email Address",
                      }),
                      u.jsxs("div", {
                        className: "relative",
                        children: [
                          u.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                            children: u.jsx(Wc, {
                              size: 18,
                              className: "text-ink-muted",
                            }),
                          }),
                          u.jsx("input", {
                            id: "email",
                            name: "email",
                            type: "email",
                            autoComplete: "email",
                            required: !0,
                            className:
                              "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                            placeholder: "you@example.com",
                            value: n.email,
                            onChange: (c) => r({ ...n, email: c.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "password",
                        className: "block text-sm font-medium text-ink mb-2",
                        children: "Password",
                      }),
                      u.jsxs("div", {
                        className: "relative",
                        children: [
                          u.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                            children: u.jsx(tn, {
                              size: 18,
                              className: "text-ink-muted",
                            }),
                          }),
                          u.jsx("input", {
                            id: "password",
                            name: "password",
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                            minLength: 6,
                            className:
                              "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                            placeholder: "••••••••",
                            value: n.password,
                            onChange: (c) =>
                              r({ ...n, password: c.target.value }),
                          }),
                        ],
                      }),
                      u.jsx("p", {
                        className: "mt-1 text-xs text-ink-muted",
                        children: "Must be at least 6 characters",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "confirmPassword",
                        className: "block text-sm font-medium text-ink mb-2",
                        children: "Confirm Password",
                      }),
                      u.jsxs("div", {
                        className: "relative",
                        children: [
                          u.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                            children: u.jsx(tn, {
                              size: 18,
                              className: "text-ink-muted",
                            }),
                          }),
                          u.jsx("input", {
                            id: "confirmPassword",
                            name: "confirmPassword",
                            type: "password",
                            autoComplete: "new-password",
                            required: !0,
                            className:
                              "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                            placeholder: "••••••••",
                            value: n.confirmPassword,
                            onChange: (c) =>
                              r({ ...n, confirmPassword: c.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("button", {
                type: "submit",
                disabled: s,
                className:
                  "group w-full flex items-center justify-center gap-2 py-3.5 px-4 border border-transparent text-sm font-medium rounded-lg text-surface bg-accent hover:bg-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-light transition-all duration-base hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                children: s
                  ? u.jsx("div", {
                      className:
                        "w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin-slow",
                    })
                  : u.jsxs(u.Fragment, {
                      children: [
                        "Create Account",
                        u.jsx(qs, {
                          size: 18,
                          className:
                            "transition-transform group-hover:translate-x-1",
                        }),
                      ],
                    }),
              }),
            ],
          }),
          u.jsx("div", {
            className: "text-center",
            children: u.jsxs("p", {
              className: "text-sm text-ink-soft",
              children: [
                "Already have an account?",
                " ",
                u.jsx(z, {
                  to: "/login",
                  className:
                    "font-medium text-accent hover:text-accent-soft transition-colors",
                  children: "Sign in",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  lE = () => {
    const { user: e } = Wt(),
      [t, n] = k.useState([]),
      [r, s] = k.useState(!0),
      [i, o] = k.useState("all");
    k.useEffect(() => {
      a();
    }, []);
    const a = async () => {
        s(!0);
        try {
          const d = await bs.getAll();
          d.success && n(d.requests);
        } catch (d) {
          console.error("Error loading requests:", d);
        } finally {
          s(!1);
        }
      },
      l = t.filter((d) => (i === "all" ? !0 : d.status === i)),
      c = {
        total: t.length,
        pending: t.filter((d) => d.status === "pending").length,
        inProgress: t.filter((d) => d.status === "in-progress").length,
        completed: t.filter((d) => d.status === "completed").length,
      };
    return u.jsx("div", {
      className: "min-h-screen py-12 pb-20",
      children: u.jsxs("div", {
        className: "max-w-container mx-auto px-6 md:px-8",
        children: [
          u.jsxs("header", {
            className:
              "flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-12 border-b-2 border-border",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("h1", {
                    className:
                      "font-serif text-4xl md:text-5xl font-bold text-ink mb-2 animate-fade-in",
                    children: "My Dashboard",
                  }),
                  u.jsx("p", {
                    className:
                      "text-base text-ink-soft animate-fade-in stagger-1",
                    children:
                      "Track your how-to guide requests and their progress",
                  }),
                ],
              }),
              u.jsxs(z, {
                to: "/request",
                className:
                  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-accent text-surface rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md animate-fade-in stagger-2",
                children: [u.jsx(Zf, { size: 18 }), "New Request"],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12",
            children: [
              u.jsx(Ii, {
                label: "Total Requests",
                value: c.total,
                icon: "📝",
                color: "border-ink/10",
              }),
              u.jsx(Ii, {
                label: "Pending",
                value: c.pending,
                icon: "⏳",
                color: "border-warning/20 bg-warning-light/30",
              }),
              u.jsx(Ii, {
                label: "In Progress",
                value: c.inProgress,
                icon: "⚡",
                color: "border-info/20 bg-info-light/30",
              }),
              u.jsx(Ii, {
                label: "Completed",
                value: c.completed,
                icon: "✅",
                color: "border-success/20 bg-success-light/30",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex flex-wrap gap-3 mb-8",
            children: [
              u.jsx(zi, {
                label: "All Requests",
                count: c.total,
                active: i === "all",
                onClick: () => o("all"),
              }),
              u.jsx(zi, {
                label: "Pending",
                count: c.pending,
                active: i === "pending",
                onClick: () => o("pending"),
              }),
              u.jsx(zi, {
                label: "In Progress",
                count: c.inProgress,
                active: i === "in-progress",
                onClick: () => o("in-progress"),
              }),
              u.jsx(zi, {
                label: "Completed",
                count: c.completed,
                active: i === "completed",
                onClick: () => o("completed"),
              }),
            ],
          }),
          r
            ? u.jsx("div", {
                className: "space-y-4",
                children: [1, 2, 3].map((d) =>
                  u.jsx(
                    "div",
                    {
                      className:
                        "h-40 bg-gradient-to-r from-surface via-hover to-surface bg-[length:200%_100%] animate-shimmer rounded-lg border border-border",
                    },
                    d
                  )
                ),
              })
            : l.length === 0
            ? u.jsxs("div", {
                className:
                  "text-center py-20 bg-surface border-2 border-dashed border-border rounded-lg",
                children: [
                  u.jsx("div", {
                    className: "text-6xl mb-6 opacity-30",
                    children: "📭",
                  }),
                  u.jsx("h3", {
                    className:
                      "font-serif text-2xl font-semibold text-ink mb-4",
                    children:
                      i === "all" ? "No requests yet" : `No ${i} requests`,
                  }),
                  u.jsx("p", {
                    className: "text-base text-ink-soft mb-8 max-w-md mx-auto",
                    children:
                      i === "all"
                        ? "Haven't requested any how-to guides yet. Submit your first request to get started!"
                        : `You don't have any ${i} requests at the moment.`,
                  }),
                  i === "all" &&
                    u.jsxs(z, {
                      to: "/request",
                      className:
                        "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-accent text-surface rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md",
                      children: [
                        u.jsx(Zf, { size: 18 }),
                        "Submit Your First Request",
                      ],
                    }),
                ],
              })
            : u.jsx("div", {
                className: "space-y-6",
                children: l.map((d, f) =>
                  u.jsx(uE, { request: d, delay: f * 100 }, d.id)
                ),
              }),
        ],
      }),
    });
  },
  Ii = ({ label: e, value: t, icon: n, color: r }) =>
    u.jsxs("div", {
      className: `bg-surface border ${r} rounded-lg p-4 md:p-6 transition-all duration-base hover:-translate-y-1 hover:shadow-md animate-fade-in`,
      children: [
        u.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            u.jsx("span", { className: "text-2xl md:text-3xl", children: n }),
            u.jsx("div", {
              className: "font-serif text-2xl md:text-3xl font-bold text-ink",
              children: t,
            }),
          ],
        }),
        u.jsx("div", {
          className: "text-xs md:text-sm font-medium text-ink-muted",
          children: e,
        }),
      ],
    }),
  zi = ({ label: e, count: t, active: n, onClick: r }) =>
    u.jsxs("button", {
      onClick: r,
      className: `px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-base ${
        n
          ? "bg-accent text-surface shadow-md"
          : "bg-surface text-ink-soft border border-border hover:border-accent hover:text-accent"
      }`,
      children: [
        e,
        " ",
        u.jsxs("span", { className: "opacity-70", children: ["(", t, ")"] }),
      ],
    }),
  uE = ({ request: e, delay: t }) => {
    const n = {
        pending: {
          color: "bg-warning-light text-warning border-warning/20",
          icon: u.jsx(_r, { size: 16 }),
          label: "Pending Review",
        },
        "in-progress": {
          color: "bg-info-light text-info border-info/20",
          icon: u.jsx($c, { size: 16 }),
          label: "In Progress",
        },
        completed: {
          color: "bg-success-light text-success border-success/20",
          icon: u.jsx(bu, { size: 16 }),
          label: "Completed",
        },
      },
      r = n[e.status] || n.pending,
      s = e.estimatedDelivery ? new Date(e.estimatedDelivery) : null,
      i = s && s < new Date() && e.status !== "completed";
    return u.jsxs("div", {
      className:
        "bg-surface border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-md animate-fade-in",
      style: { animationDelay: `${t}ms` },
      children: [
        u.jsx("div", {
          className:
            "flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4",
          children: u.jsxs("div", {
            className: "flex-1",
            children: [
              u.jsxs("div", {
                className: "flex items-start gap-3 mb-3",
                children: [
                  u.jsx("h3", {
                    className:
                      "font-serif text-xl font-semibold text-ink flex-1",
                    children: e.title,
                  }),
                  u.jsxs("span", {
                    className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${r.color}`,
                    children: [r.icon, r.label],
                  }),
                ],
              }),
              u.jsx("p", {
                className:
                  "text-sm text-ink-soft leading-relaxed mb-4 line-clamp-2",
                children: e.description,
              }),
              u.jsxs("div", {
                className:
                  "flex flex-wrap items-center gap-4 text-xs text-ink-muted",
                children: [
                  u.jsx("span", {
                    className: "flex items-center gap-1.5",
                    children: u.jsx("span", {
                      className:
                        "px-2 py-1 bg-hover rounded text-ink-soft font-medium",
                      children: e.category,
                    }),
                  }),
                  u.jsxs("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                      u.jsx("span", {
                        className: `w-2 h-2 rounded-full ${
                          e.priority === "high"
                            ? "bg-error"
                            : e.priority === "medium"
                            ? "bg-warning"
                            : "bg-success"
                        }`,
                      }),
                      e.priority,
                      " priority",
                    ],
                  }),
                  u.jsxs("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                      u.jsx(gy, { size: 14 }),
                      ju(new Date(e.createdAt), { addSuffix: !0 }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        e.status !== "completed" &&
          s &&
          u.jsx("div", {
            className: `mt-4 pt-4 border-t border-border-soft ${
              i ? "text-error" : "text-ink-soft"
            }`,
            children: u.jsxs("div", {
              className: "flex items-center gap-2 text-sm",
              children: [
                u.jsx(_r, { size: 16 }),
                u.jsxs("span", {
                  className: "font-medium",
                  children: [i ? "Overdue" : "Estimated delivery", ":"],
                }),
                u.jsx("span", { children: Yn(s, "MMM d, yyyy • h:mm a") }),
                u.jsxs("span", {
                  className: "text-xs opacity-70",
                  children: ["(", ju(s, { addSuffix: !0 }), ")"],
                }),
              ],
            }),
          }),
        e.status === "completed" &&
          e.articleId &&
          u.jsx("div", {
            className: "mt-4 pt-4 border-t border-border-soft",
            children: u.jsx(z, {
              to: `/post/${e.articleId}`,
              className:
                "inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-soft transition-colors",
              children: "View Published Article →",
            }),
          }),
      ],
    });
  },
  cE = () => {
    const e = Pn(),
      { user: t } = Wt(),
      [n, r] = k.useState({
        title: "",
        category: "",
        priority: "medium",
        description: "",
      }),
      [s, i] = k.useState(!1),
      o = [
        "Web Development",
        "Mobile Development",
        "UI/UX Design",
        "Database & Backend",
        "DevOps & Deployment",
        "Data Science & AI",
        "Business & Marketing",
        "Project Management",
        "Productivity Tools",
        "Other",
      ],
      a = async (c) => {
        c.preventDefault(), i(!0);
        try {
          const d = {
              ...n,
              userId: t.id,
              userName: t.name,
              userEmail: t.email,
            },
            f = await bs.create(d);
          if (f.success) {
            const h = JSON.parse(
              localStorage.getItem("questionRequests") || "[]"
            );
            h.push(f.request),
              localStorage.setItem("questionRequests", JSON.stringify(h)),
              V.success(
                "Request submitted successfully! We'll deliver within 48 hours."
              ),
              e("/dashboard");
          }
        } catch (d) {
          V.error("Failed to submit request. Please try again."),
            console.error("Error submitting request:", d);
        } finally {
          i(!1);
        }
      },
      l = n.title && n.category && n.description;
    return u.jsx("div", {
      className: "min-h-screen py-12 pb-20",
      children: u.jsxs("div", {
        className: "max-w-3xl mx-auto px-6 md:px-8",
        children: [
          u.jsxs("header", {
            className: "text-center mb-12 animate-fade-in",
            children: [
              u.jsx("div", {
                className: "flex justify-center mb-4",
                children: u.jsx("div", {
                  className:
                    "w-16 h-16 bg-accent-light rounded-full flex items-center justify-center",
                  children: u.jsx("span", {
                    className: "text-3xl",
                    children: "💡",
                  }),
                }),
              }),
              u.jsx("h1", {
                className:
                  "font-serif text-4xl md:text-5xl font-bold text-ink mb-4",
                children: "Request a How-To Guide",
              }),
              u.jsx("p", {
                className: "text-lg text-ink-soft max-w-2xl mx-auto",
                children:
                  "Tell us what you need help with, and we'll create a comprehensive tutorial just for you",
              }),
            ],
          }),
          u.jsx("div", {
            className:
              "bg-gradient-to-r from-accent-light to-accent-light/50 border border-accent/20 rounded-lg p-6 mb-8 animate-fade-in stagger-1",
            children: u.jsxs("div", {
              className: "flex items-start gap-4",
              children: [
                u.jsx("div", {
                  className:
                    "w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0",
                  children: u.jsx(_r, { size: 20, className: "text-surface" }),
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h3", {
                      className:
                        "font-serif text-lg font-semibold text-ink mb-1",
                      children: "48-Hour Delivery Promise",
                    }),
                    u.jsx("p", {
                      className: "text-sm text-ink-soft leading-relaxed",
                      children:
                        "We're committed to delivering your custom how-to guide within 48 hours of submission. You'll receive a notification when it's ready, and it will appear in your dashboard.",
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsxs("form", {
            onSubmit: a,
            className: "space-y-8 animate-fade-in stagger-2",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("label", {
                    htmlFor: "title",
                    className: "block text-sm font-semibold text-ink mb-2",
                    children: "What do you want to learn? *",
                  }),
                  u.jsx("input", {
                    type: "text",
                    id: "title",
                    className:
                      "w-full py-3.5 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                    placeholder: "e.g., How to build a REST API with Flask",
                    value: n.title,
                    onChange: (c) => r({ ...n, title: c.target.value }),
                    required: !0,
                  }),
                  u.jsx("p", {
                    className: "mt-2 text-xs text-ink-muted",
                    children:
                      "Be specific and clear about what you want to learn",
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "category",
                        className: "block text-sm font-semibold text-ink mb-2",
                        children: "Category *",
                      }),
                      u.jsxs("select", {
                        id: "category",
                        className:
                          "w-full py-3.5 px-4 border border-border rounded-lg bg-surface text-ink transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                        value: n.category,
                        onChange: (c) => r({ ...n, category: c.target.value }),
                        required: !0,
                        children: [
                          u.jsx("option", {
                            value: "",
                            children: "Select a category",
                          }),
                          o.map((c) =>
                            u.jsx("option", { value: c, children: c }, c)
                          ),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "priority",
                        className: "block text-sm font-semibold text-ink mb-2",
                        children: "Priority Level",
                      }),
                      u.jsxs("select", {
                        id: "priority",
                        className:
                          "w-full py-3.5 px-4 border border-border rounded-lg bg-surface text-ink transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                        value: n.priority,
                        onChange: (c) => r({ ...n, priority: c.target.value }),
                        children: [
                          u.jsx("option", {
                            value: "low",
                            children: "Low - Learning for fun",
                          }),
                          u.jsx("option", {
                            value: "medium",
                            children: "Medium - For a project",
                          }),
                          u.jsx("option", {
                            value: "high",
                            children: "High - Urgent need",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("label", {
                    htmlFor: "description",
                    className: "block text-sm font-semibold text-ink mb-2",
                    children: "Detailed Description *",
                  }),
                  u.jsx("textarea", {
                    id: "description",
                    rows: "8",
                    className:
                      "w-full py-3.5 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted resize-y min-h-[200px] leading-relaxed transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                    placeholder: `Provide as much detail as possible about what you want to learn. Include:
• Your current skill level
• Specific technologies or tools you want to use
• What you're trying to build or achieve
• Any challenges you're facing
• Preferred learning style (step-by-step, video, code examples, etc.)`,
                    value: n.description,
                    onChange: (c) => r({ ...n, description: c.target.value }),
                    required: !0,
                  }),
                  u.jsx("p", {
                    className: "mt-2 text-xs text-ink-muted",
                    children:
                      "The more details you provide, the better we can tailor the guide to your needs",
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "bg-info-light border border-info/20 rounded-lg p-4 flex items-start gap-3",
                children: [
                  u.jsx($c, {
                    size: 20,
                    className: "text-info flex-shrink-0 mt-0.5",
                  }),
                  u.jsxs("div", {
                    className: "text-sm text-ink-soft leading-relaxed",
                    children: [
                      u.jsx("strong", {
                        className: "text-ink",
                        children: "What happens next:",
                      }),
                      " Our team will review your request and create a comprehensive, step-by-step guide. You'll be notified via email when it's ready, and it will appear in your dashboard with links to the full article.",
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row gap-4 pt-6 border-t border-border",
                children: [
                  u.jsx(z, {
                    to: "/dashboard",
                    className:
                      "flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 border border-border rounded-lg bg-surface text-ink-soft font-medium transition-all duration-base hover:bg-hover hover:border-accent hover:text-ink",
                    children: "Cancel",
                  }),
                  u.jsx("button", {
                    type: "submit",
                    disabled: s || !l,
                    className:
                      "flex-1 group inline-flex items-center justify-center gap-2 py-3.5 px-6 border border-transparent rounded-lg text-surface bg-accent hover:bg-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-light transition-all duration-base hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-medium",
                    children: s
                      ? u.jsxs(u.Fragment, {
                          children: [
                            u.jsx("div", {
                              className:
                                "w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin-slow",
                            }),
                            "Submitting...",
                          ],
                        })
                      : u.jsxs(u.Fragment, {
                          children: [
                            u.jsx(xy, { size: 18 }),
                            "Submit Request",
                            u.jsx("span", {
                              className: "text-xs opacity-70 ml-1",
                              children: "(48hr delivery)",
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "mt-12 pt-8 border-t border-border-soft text-center",
            children: u.jsxs("p", {
              className: "text-sm text-ink-muted",
              children: [
                "Have questions about the request process?",
                " ",
                u.jsx(z, {
                  to: "/",
                  className: "text-accent hover:text-accent-soft font-medium",
                  children: "View our guide articles",
                }),
                " ",
                "or contact support.",
              ],
            }),
          }),
        ],
      }),
    });
  },
  dE = () => {
    var w;
    const { user: e, updateProfile: t, logout: n } = Wt(),
      r = Pn(),
      [s, i] = k.useState("profile"),
      [o, a] = k.useState({
        name: (e == null ? void 0 : e.name) || "",
        email: (e == null ? void 0 : e.email) || "",
      }),
      [l, c] = k.useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }),
      [d, f] = k.useState(!1),
      h = async (x) => {
        x.preventDefault(), f(!0);
        try {
          t(o), V.success("Profile updated successfully!");
        } catch {
          V.error("Failed to update profile");
        } finally {
          f(!1);
        }
      },
      g = async (x) => {
        if ((x.preventDefault(), l.newPassword !== l.confirmPassword)) {
          V.error("Passwords do not match");
          return;
        }
        if (l.newPassword.length < 6) {
          V.error("Password must be at least 6 characters");
          return;
        }
        f(!0);
        try {
          V.success("Password updated successfully!"),
            c({ currentPassword: "", newPassword: "", confirmPassword: "" });
        } catch {
          V.error("Failed to update password");
        } finally {
          f(!1);
        }
      },
      p = () => {
        window.confirm(
          "Are you sure you want to delete your account? This action cannot be undone."
        ) && (n(), r("/"), V.success("Account deleted successfully"));
      },
      v = (x) => {
        const m = x.target.files[0];
        if (m) {
          const y = new FileReader();
          (y.onload = (b) => {
            t({ avatar: b.target.result }),
              V.success("Avatar updated successfully!");
          }),
            y.readAsDataURL(m);
        }
      };
    return u.jsx("div", {
      className: "min-h-screen py-12 pb-20",
      children: u.jsxs("div", {
        className: "max-w-4xl mx-auto px-6 md:px-8",
        children: [
          u.jsxs("header", {
            className: "pb-8 mb-12 border-b-2 border-border animate-fade-in",
            children: [
              u.jsx("h1", {
                className:
                  "font-serif text-4xl md:text-5xl font-bold text-ink mb-2",
                children: "Account Settings",
              }),
              u.jsx("p", {
                className: "text-base text-ink-soft",
                children: "Manage your profile, security, and preferences",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
            children: [
              u.jsx("div", {
                className: "lg:col-span-1",
                children: u.jsxs("nav", {
                  className: "space-y-2 sticky top-24",
                  children: [
                    u.jsxs("button", {
                      onClick: () => i("profile"),
                      className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-base ${
                        s === "profile"
                          ? "bg-accent text-surface"
                          : "text-ink-soft hover:bg-hover hover:text-ink"
                      }`,
                      children: [u.jsx(Ys, { size: 18 }), "Profile"],
                    }),
                    u.jsxs("button", {
                      onClick: () => i("security"),
                      className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-base ${
                        s === "security"
                          ? "bg-accent text-surface"
                          : "text-ink-soft hover:bg-hover hover:text-ink"
                      }`,
                      children: [u.jsx(tn, { size: 18 }), "Security"],
                    }),
                    u.jsxs("button", {
                      onClick: () => i("danger"),
                      className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-base ${
                        s === "danger"
                          ? "bg-error text-surface"
                          : "text-ink-soft hover:bg-error-light hover:text-error"
                      }`,
                      children: [u.jsx(Vo, { size: 18 }), "Danger Zone"],
                    }),
                  ],
                }),
              }),
              u.jsxs("div", {
                className: "lg:col-span-3",
                children: [
                  s === "profile" &&
                    u.jsx("div", {
                      className: "animate-fade-in",
                      children: u.jsxs("div", {
                        className:
                          "bg-surface border border-border rounded-lg p-6 md:p-8",
                        children: [
                          u.jsx("h2", {
                            className:
                              "font-serif text-2xl font-semibold text-ink mb-6",
                            children: "Profile Information",
                          }),
                          u.jsxs("div", {
                            className: "mb-8",
                            children: [
                              u.jsx("label", {
                                className:
                                  "block text-sm font-medium text-ink mb-4",
                                children: "Profile Picture",
                              }),
                              u.jsxs("div", {
                                className: "flex items-center gap-6",
                                children: [
                                  u.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      u.jsx("div", {
                                        className:
                                          "w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent-soft flex items-center justify-center font-serif text-3xl font-semibold text-surface overflow-hidden",
                                        children:
                                          e != null && e.avatar
                                            ? u.jsx("img", {
                                                src: e.avatar,
                                                alt: e.name,
                                                className:
                                                  "w-full h-full object-cover",
                                              })
                                            : (w =
                                                e == null ? void 0 : e.name) ==
                                              null
                                            ? void 0
                                            : w.charAt(0).toUpperCase(),
                                      }),
                                      u.jsxs("label", {
                                        className:
                                          "absolute bottom-0 right-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-soft transition-colors shadow-md",
                                        children: [
                                          u.jsx(Yk, {
                                            size: 16,
                                            className: "text-surface",
                                          }),
                                          u.jsx("input", {
                                            type: "file",
                                            accept: "image/*",
                                            className: "hidden",
                                            onChange: v,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("p", {
                                        className: "text-sm text-ink-soft mb-1",
                                        children:
                                          "Upload a new profile picture",
                                      }),
                                      u.jsx("p", {
                                        className: "text-xs text-ink-muted",
                                        children:
                                          "JPG, PNG or GIF. Max size 2MB.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("form", {
                            onSubmit: h,
                            className: "space-y-6",
                            children: [
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "name",
                                    className:
                                      "block text-sm font-medium text-ink mb-2",
                                    children: "Full Name",
                                  }),
                                  u.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      u.jsx("div", {
                                        className:
                                          "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                        children: u.jsx(Ys, {
                                          size: 18,
                                          className: "text-ink-muted",
                                        }),
                                      }),
                                      u.jsx("input", {
                                        type: "text",
                                        id: "name",
                                        className:
                                          "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                                        value: o.name,
                                        onChange: (x) =>
                                          a({ ...o, name: x.target.value }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "email",
                                    className:
                                      "block text-sm font-medium text-ink mb-2",
                                    children: "Email Address",
                                  }),
                                  u.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      u.jsx("div", {
                                        className:
                                          "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                        children: u.jsx(Wc, {
                                          size: 18,
                                          className: "text-ink-muted",
                                        }),
                                      }),
                                      u.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        className:
                                          "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                                        value: o.email,
                                        onChange: (x) =>
                                          a({ ...o, email: x.target.value }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              u.jsx("div", {
                                className: "flex justify-end pt-4",
                                children: u.jsxs("button", {
                                  type: "submit",
                                  disabled: d,
                                  className:
                                    "inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
                                  children: [
                                    u.jsx(yy, { size: 18 }),
                                    d ? "Saving..." : "Save Changes",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  s === "security" &&
                    u.jsx("div", {
                      className: "animate-fade-in",
                      children: u.jsxs("div", {
                        className:
                          "bg-surface border border-border rounded-lg p-6 md:p-8",
                        children: [
                          u.jsx("h2", {
                            className:
                              "font-serif text-2xl font-semibold text-ink mb-6",
                            children: "Change Password",
                          }),
                          u.jsxs("form", {
                            onSubmit: g,
                            className: "space-y-6",
                            children: [
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "currentPassword",
                                    className:
                                      "block text-sm font-medium text-ink mb-2",
                                    children: "Current Password",
                                  }),
                                  u.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      u.jsx("div", {
                                        className:
                                          "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                        children: u.jsx(tn, {
                                          size: 18,
                                          className: "text-ink-muted",
                                        }),
                                      }),
                                      u.jsx("input", {
                                        type: "password",
                                        id: "currentPassword",
                                        className:
                                          "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                                        placeholder: "••••••••",
                                        value: l.currentPassword,
                                        onChange: (x) =>
                                          c({
                                            ...l,
                                            currentPassword: x.target.value,
                                          }),
                                        required: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "newPassword",
                                    className:
                                      "block text-sm font-medium text-ink mb-2",
                                    children: "New Password",
                                  }),
                                  u.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      u.jsx("div", {
                                        className:
                                          "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                        children: u.jsx(tn, {
                                          size: 18,
                                          className: "text-ink-muted",
                                        }),
                                      }),
                                      u.jsx("input", {
                                        type: "password",
                                        id: "newPassword",
                                        className:
                                          "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                                        placeholder: "••••••••",
                                        value: l.newPassword,
                                        onChange: (x) =>
                                          c({
                                            ...l,
                                            newPassword: x.target.value,
                                          }),
                                        required: !0,
                                        minLength: 6,
                                      }),
                                    ],
                                  }),
                                  u.jsx("p", {
                                    className: "mt-2 text-xs text-ink-muted",
                                    children: "Must be at least 6 characters",
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    htmlFor: "confirmPassword",
                                    className:
                                      "block text-sm font-medium text-ink mb-2",
                                    children: "Confirm New Password",
                                  }),
                                  u.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      u.jsx("div", {
                                        className:
                                          "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                        children: u.jsx(tn, {
                                          size: 18,
                                          className: "text-ink-muted",
                                        }),
                                      }),
                                      u.jsx("input", {
                                        type: "password",
                                        id: "confirmPassword",
                                        className:
                                          "w-full pl-12 pr-4 py-3.5 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                                        placeholder: "••••••••",
                                        value: l.confirmPassword,
                                        onChange: (x) =>
                                          c({
                                            ...l,
                                            confirmPassword: x.target.value,
                                          }),
                                        required: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              u.jsx("div", {
                                className: "flex justify-end pt-4",
                                children: u.jsxs("button", {
                                  type: "submit",
                                  disabled: d,
                                  className:
                                    "inline-flex items-center gap-2 px-6 py-3 bg-accent text-surface rounded-lg font-medium transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
                                  children: [
                                    u.jsx(tn, { size: 18 }),
                                    d ? "Updating..." : "Update Password",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  s === "danger" &&
                    u.jsx("div", {
                      className: "animate-fade-in",
                      children: u.jsxs("div", {
                        className:
                          "bg-error-light border-2 border-error/30 rounded-lg p-6 md:p-8",
                        children: [
                          u.jsx("h2", {
                            className:
                              "font-serif text-2xl font-semibold text-error mb-4",
                            children: "Delete Account",
                          }),
                          u.jsx("p", {
                            className:
                              "text-sm text-ink-soft mb-6 leading-relaxed",
                            children:
                              "Once you delete your account, there is no going back. This will permanently delete your profile, all your question requests, and remove your access to the platform.",
                          }),
                          u.jsxs("button", {
                            onClick: p,
                            className:
                              "inline-flex items-center gap-2 px-6 py-3 bg-error text-surface rounded-lg font-medium transition-all duration-base hover:bg-error/90 hover:-translate-y-0.5 hover:shadow-md",
                            children: [
                              u.jsx(Vo, { size: 18 }),
                              "Delete My Account",
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  fE = () => {
    const [e, t] = k.useState([]),
      [n, r] = k.useState({
        totalPosts: 0,
        totalViews: 0,
        totalComments: 0,
        totalRequests: 0,
        pendingRequests: 0,
      }),
      [s, i] = k.useState(!0);
    k.useEffect(() => {
      o();
    }, []);
    const o = async () => {
        i(!0);
        try {
          const [l, c] = await Promise.all([zk.getDashboard(), qn.getAll()]);
          if ((l.success && r(l.stats), c.success)) {
            const d = c.posts.map((f) => ({ ...f, commentCount: 0 }));
            t(d);
          }
          console.log("Dashboard loaded:", l, c);
        } catch (l) {
          console.error("Error loading dashboard:", l),
            V.error("Failed to load dashboard data");
        } finally {
          i(!1);
        }
      },
      a = async (l) => {
        var c, d;
        if (window.confirm("Are you sure you want to delete this post?"))
          try {
            (await qn.delete(l)).success &&
              (V.success("Post deleted successfully!"),
              t(e.filter((h) => h.id !== l)),
              r((h) => ({ ...h, totalPosts: h.totalPosts - 1 })));
          } catch (f) {
            console.error("Error deleting post:", f);
            const h =
              ((d = (c = f.response) == null ? void 0 : c.data) == null
                ? void 0
                : d.error) || "Failed to delete post";
            V.error(h);
          }
      };
    return s
      ? u.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: u.jsx("div", {
            className:
              "w-12 h-12 border-3 border-border border-t-accent rounded-full animate-spin-slow",
          }),
        })
      : u.jsx("div", {
          className: "min-h-screen py-12 pb-20",
          children: u.jsxs("div", {
            className: "max-w-container mx-auto px-6 md:px-8",
            children: [
              u.jsxs("header", {
                className:
                  "flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-12 border-b-2 border-border",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("h1", {
                        className:
                          "font-serif text-4xl md:text-5xl font-bold text-ink mb-2",
                        children: "Dashboard",
                      }),
                      u.jsx("p", {
                        className: "text-base text-ink-soft",
                        children: "Manage your content and monitor performance",
                      }),
                    ],
                  }),
                  u.jsx(z, {
                    to: "/admin/create",
                    className:
                      "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-accent text-surface rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md",
                    children: "Create New Post",
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",
                children: [
                  u.jsxs("div", {
                    className:
                      "bg-surface border border-border rounded-lg p-6 flex items-center gap-6 transition-all duration-base hover:border-accent hover:-translate-y-0.5 hover:shadow-md",
                    children: [
                      u.jsx("div", {
                        className: "text-5xl opacity-80",
                        children: "📝",
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("div", {
                            className:
                              "font-serif text-3xl font-bold text-ink leading-none mb-1",
                            children: n.totalPosts,
                          }),
                          u.jsx("div", {
                            className: "text-sm font-medium text-ink-muted",
                            children: "Total Posts",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "bg-surface border border-border rounded-lg p-6 flex items-center gap-6 transition-all duration-base hover:border-accent hover:-translate-y-0.5 hover:shadow-md",
                    children: [
                      u.jsx("div", {
                        className: "text-5xl opacity-80",
                        children: "👁",
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("div", {
                            className:
                              "font-serif text-3xl font-bold text-ink leading-none mb-1",
                            children: n.totalViews.toLocaleString(),
                          }),
                          u.jsx("div", {
                            className: "text-sm font-medium text-ink-muted",
                            children: "Total Views",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "bg-surface border border-border rounded-lg p-6 flex items-center gap-6 transition-all duration-base hover:border-accent hover:-translate-y-0.5 hover:shadow-md",
                    children: [
                      u.jsx("div", {
                        className: "text-5xl opacity-80",
                        children: "💬",
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("div", {
                            className:
                              "font-serif text-3xl font-bold text-ink leading-none mb-1",
                            children: n.totalComments,
                          }),
                          u.jsx("div", {
                            className: "text-sm font-medium text-ink-muted",
                            children: "Total Comments",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "bg-surface border border-border rounded-lg p-6 flex items-center gap-6 transition-all duration-base hover:border-accent hover:-translate-y-0.5 hover:shadow-md",
                    children: [
                      u.jsx("div", {
                        className: "text-5xl opacity-80",
                        children: "📮",
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsxs("div", {
                            className:
                              "font-serif text-3xl font-bold text-ink leading-none mb-1",
                            children: [
                              n.pendingRequests,
                              u.jsxs("span", {
                                className: "text-lg text-ink-muted font-normal",
                                children: ["/", n.totalRequests],
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className: "text-sm font-medium text-ink-muted",
                            children: "Pending Requests",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("section", {
                className: "mb-16",
                children: [
                  u.jsx("h2", {
                    className:
                      "font-serif text-2xl font-semibold text-ink mb-6",
                    children: "Quick Actions",
                  }),
                  u.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [
                      u.jsxs(z, {
                        to: "/admin/create",
                        className:
                          "p-6 bg-surface border-2 border-border rounded-lg hover:border-accent hover:-translate-y-0.5 transition-all duration-base group",
                        children: [
                          u.jsx("div", {
                            className:
                              "text-3xl mb-3 group-hover:scale-110 transition-transform duration-base",
                            children: "✍️",
                          }),
                          u.jsx("h3", {
                            className:
                              "font-serif text-lg font-semibold text-ink mb-1",
                            children: "Create Post",
                          }),
                          u.jsx("p", {
                            className: "text-sm text-ink-soft",
                            children: "Write and publish a new article",
                          }),
                        ],
                      }),
                      u.jsxs(z, {
                        to: "/admin/requests",
                        className:
                          "p-6 bg-surface border-2 border-border rounded-lg hover:border-accent hover:-translate-y-0.5 transition-all duration-base group",
                        children: [
                          u.jsx("div", {
                            className:
                              "text-3xl mb-3 group-hover:scale-110 transition-transform duration-base",
                            children: "📬",
                          }),
                          u.jsx("h3", {
                            className:
                              "font-serif text-lg font-semibold text-ink mb-1",
                            children: "View Requests",
                          }),
                          u.jsxs("p", {
                            className: "text-sm text-ink-soft",
                            children: [
                              "Manage question requests",
                              n.pendingRequests > 0 &&
                                u.jsx("span", {
                                  className:
                                    "ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold text-accent-soft bg-accent rounded-full",
                                  children: n.pendingRequests,
                                }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("button", {
                        onClick: o,
                        className:
                          "p-6 bg-surface border-2 border-border rounded-lg hover:border-accent hover:-translate-y-0.5 transition-all duration-base group text-left",
                        children: [
                          u.jsx("div", {
                            className:
                              "text-3xl mb-3 group-hover:scale-110 group-hover:rotate-180 transition-all duration-base",
                            children: "🔄",
                          }),
                          u.jsx("h3", {
                            className:
                              "font-serif text-lg font-semibold text-ink mb-1",
                            children: "Refresh Data",
                          }),
                          u.jsx("p", {
                            className: "text-sm text-ink-soft",
                            children: "Reload dashboard statistics",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("section", {
                children: [
                  u.jsxs("div", {
                    className:
                      "flex items-baseline justify-between pb-6 mb-8 border-b border-border-soft",
                    children: [
                      u.jsx("h2", {
                        className: "font-serif text-3xl font-semibold text-ink",
                        children: "All Posts",
                      }),
                      u.jsxs("span", {
                        className:
                          "text-sm font-medium text-ink-muted uppercase tracking-wider",
                        children: [e.length, " articles"],
                      }),
                    ],
                  }),
                  e.length === 0
                    ? u.jsxs("div", {
                        className:
                          "text-center py-20 bg-surface border border-border rounded-lg",
                        children: [
                          u.jsx("div", {
                            className: "text-6xl mb-6 opacity-30",
                            children: "📄",
                          }),
                          u.jsx("h3", {
                            className:
                              "font-serif text-2xl font-semibold text-ink mb-4",
                            children: "No posts yet",
                          }),
                          u.jsx("p", {
                            className: "text-base text-ink-soft mb-8",
                            children: "Create your first post to get started",
                          }),
                          u.jsx(z, {
                            to: "/admin/create",
                            className:
                              "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-accent text-surface rounded-md transition-all duration-base hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-md",
                            children: "Create Post",
                          }),
                        ],
                      })
                    : u.jsx("div", {
                        className: "space-y-6",
                        children: e.map((l) =>
                          u.jsx(hE, { post: l, onDelete: a }, l.id)
                        ),
                      }),
                ],
              }),
            ],
          }),
        });
  },
  hE = ({ post: e, onDelete: t }) =>
    u.jsxs("div", {
      className:
        "flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-surface border border-border rounded-lg transition-all duration-base hover:border-accent hover:shadow-md",
      children: [
        u.jsxs("div", {
          className: "flex-1 min-w-0",
          children: [
            u.jsx(z, {
              to: `/post/${e.id}`,
              className:
                "font-serif text-xl font-semibold text-ink hover:text-accent transition-colors duration-fast block mb-2 truncate",
              children: e.title,
            }),
            e.subtitle &&
              u.jsx("p", {
                className: "text-sm text-ink-soft mb-3 truncate",
                children: e.subtitle,
              }),
            u.jsxs("div", {
              className:
                "flex flex-wrap items-center gap-4 text-xs font-medium text-ink-muted",
              children: [
                u.jsxs("span", {
                  className: "flex items-center gap-1.5",
                  children: [
                    u.jsxs("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      className: "opacity-60",
                      children: [
                        u.jsx("path", {
                          d: "M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                        }),
                        u.jsx("path", {
                          d: "M8 4v4l3 2",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                    Yn(new Date(e.created_at), "MMM d, yyyy"),
                  ],
                }),
                u.jsxs("span", {
                  className: "flex items-center gap-1.5",
                  children: [
                    u.jsxs("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      className: "opacity-60",
                      children: [
                        u.jsx("path", {
                          d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                        }),
                        u.jsx("circle", {
                          cx: "8",
                          cy: "8",
                          r: "2",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                        }),
                      ],
                    }),
                    e.views,
                    " views",
                  ],
                }),
                e.commentCount !== void 0 &&
                  u.jsxs("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                      u.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "opacity-60",
                        children: u.jsx("path", {
                          d: "M14 10c0 .6-.4 1-1 1H4l-3 3V2c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v8z",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                        }),
                      }),
                      e.commentCount,
                      " comments",
                    ],
                  }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className:
            "flex items-center gap-3 md:border-l md:border-border-soft md:pl-6",
          children: [
            u.jsx(z, {
              to: `/post/${e.id}`,
              className:
                "w-10 h-10 flex items-center justify-center border border-border rounded-md bg-surface text-ink-soft hover:bg-hover hover:border-info hover:text-info transition-all duration-fast",
              title: "View",
              children: u.jsxs("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                children: [
                  u.jsx("path", {
                    d: "M1 9s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                  }),
                  u.jsx("circle", {
                    cx: "9",
                    cy: "9",
                    r: "2.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                  }),
                ],
              }),
            }),
            u.jsx(z, {
              to: `/admin/edit/${e.id}`,
              className:
                "w-10 h-10 flex items-center justify-center border border-border rounded-md bg-surface text-ink-soft hover:bg-hover hover:border-accent hover:text-accent transition-all duration-fast",
              title: "Edit",
              children: u.jsx("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                children: u.jsx("path", {
                  d: "M13 2l3 3-9 9H4v-3l9-9z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              }),
            }),
            u.jsx("button", {
              onClick: () => t(e.id),
              className:
                "w-10 h-10 flex items-center justify-center border border-border rounded-md bg-surface text-ink-soft hover:bg-error-light hover:border-error hover:text-error transition-all duration-fast",
              title: "Delete",
              children: u.jsx("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                children: u.jsx("path", {
                  d: "M2 4h14M6 4V2h6v2M7 8v5M11 8v5M3 4h12v11c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  mE = () => {
    const [e, t] = k.useState([]),
      [n, r] = k.useState(!0),
      [s, i] = k.useState("all");
    k.useEffect(() => {
      o();
    }, []);
    const o = async () => {
        var f, h;
        r(!0);
        try {
          const g = await bs.getAll();
          g.success
            ? (t(g.requests), console.log("Loaded requests:", g.requests))
            : V.error("Failed to load requests");
        } catch (g) {
          console.error("Error loading requests:", g);
          const p =
            ((h = (f = g.response) == null ? void 0 : f.data) == null
              ? void 0
              : h.error) || "Failed to load requests";
          V.error(p);
        } finally {
          r(!1);
        }
      },
      a = async (f, h) => {
        var g, p;
        try {
          (await bs.updateStatus(f, h)).success &&
            (t(e.map((w) => (w.id === f ? { ...w, status: h } : w))),
            V.success(`Request marked as ${h}`));
        } catch (v) {
          console.error("Error updating status:", v);
          const w =
            ((p = (g = v.response) == null ? void 0 : g.data) == null
              ? void 0
              : p.error) || "Failed to update status";
          V.error(w);
        }
      },
      l = async (f) => {
        var h, g;
        if (window.confirm("Are you sure you want to delete this request?"))
          try {
            (await bs.delete(f)).success &&
              (t(e.filter((v) => v.id !== f)),
              V.success("Request deleted successfully"));
          } catch (p) {
            console.error("Error deleting request:", p);
            const v =
              ((g = (h = p.response) == null ? void 0 : h.data) == null
                ? void 0
                : g.error) || "Failed to delete request";
            V.error(v);
          }
      },
      c = e.filter((f) => (s === "all" ? !0 : f.status === s)),
      d = {
        total: e.length,
        pending: e.filter((f) => f.status === "pending").length,
        inProgress: e.filter((f) => f.status === "in-progress").length,
        completed: e.filter((f) => f.status === "completed").length,
      };
    return u.jsx("div", {
      className: "min-h-screen py-12 pb-20",
      children: u.jsxs("div", {
        className: "max-w-container mx-auto px-6 md:px-8",
        children: [
          u.jsxs("header", {
            className:
              "flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-12 border-b-2 border-border",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsxs(z, {
                    to: "/admin",
                    className:
                      "inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-accent transition-colors mb-4 group",
                    children: [
                      u.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className:
                          "transition-transform group-hover:-translate-x-1",
                        children: u.jsx("path", {
                          d: "M10 12L6 8l4-4",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      }),
                      "Back to Dashboard",
                    ],
                  }),
                  u.jsx("h1", {
                    className:
                      "font-serif text-4xl md:text-5xl font-bold text-ink mb-2 animate-fade-in",
                    children: "Question Requests",
                  }),
                  u.jsx("p", {
                    className:
                      "text-base text-ink-soft animate-fade-in stagger-1",
                    children:
                      "Manage and respond to user how-to guide requests",
                  }),
                ],
              }),
              u.jsxs("button", {
                onClick: o,
                className:
                  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 bg-surface border border-border text-ink-soft rounded-md transition-all duration-base hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-md",
                children: [
                  u.jsxs("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    className: "transition-transform hover:rotate-180",
                    children: [
                      u.jsx("path", {
                        d: "M14 8A6 6 0 1 1 8 2",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                      }),
                      u.jsx("path", {
                        d: "M8 2v4l2-2",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    ],
                  }),
                  "Refresh",
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12",
            children: [
              u.jsx(Bi, {
                label: "Total Requests",
                value: d.total,
                icon: "📝",
                color: "border-ink/10",
              }),
              u.jsx(Bi, {
                label: "Pending",
                value: d.pending,
                icon: "⏳",
                color: "border-warning/20 bg-warning-light/30",
              }),
              u.jsx(Bi, {
                label: "In Progress",
                value: d.inProgress,
                icon: "⚡",
                color: "border-info/20 bg-info-light/30",
              }),
              u.jsx(Bi, {
                label: "Completed",
                value: d.completed,
                icon: "✅",
                color: "border-success/20 bg-success-light/30",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex flex-wrap gap-3 mb-8",
            children: [
              u.jsx(Ui, {
                label: "All Requests",
                count: d.total,
                active: s === "all",
                onClick: () => i("all"),
              }),
              u.jsx(Ui, {
                label: "Pending",
                count: d.pending,
                active: s === "pending",
                onClick: () => i("pending"),
              }),
              u.jsx(Ui, {
                label: "In Progress",
                count: d.inProgress,
                active: s === "in-progress",
                onClick: () => i("in-progress"),
              }),
              u.jsx(Ui, {
                label: "Completed",
                count: d.completed,
                active: s === "completed",
                onClick: () => i("completed"),
              }),
            ],
          }),
          n
            ? u.jsx("div", {
                className: "space-y-4",
                children: [1, 2, 3].map((f) =>
                  u.jsx(
                    "div",
                    {
                      className:
                        "h-32 bg-gradient-to-r from-surface via-hover to-surface bg-[length:200%_100%] animate-shimmer rounded-lg border border-border",
                    },
                    f
                  )
                ),
              })
            : c.length === 0
            ? u.jsxs("div", {
                className:
                  "text-center py-20 bg-surface border-2 border-dashed border-border rounded-lg",
                children: [
                  u.jsx("div", {
                    className: "text-6xl mb-6 opacity-30",
                    children: "📭",
                  }),
                  u.jsx("h3", {
                    className:
                      "font-serif text-2xl font-semibold text-ink mb-4",
                    children:
                      s === "all" ? "No requests yet" : `No ${s} requests`,
                  }),
                  u.jsx("p", {
                    className: "text-base text-ink-soft",
                    children:
                      s === "all"
                        ? "Waiting for users to submit their first how-to guide requests"
                        : `No ${s} requests at the moment`,
                  }),
                ],
              })
            : u.jsx("div", {
                className: "space-y-4",
                children: c.map((f, h) =>
                  u.jsx(
                    pE,
                    {
                      request: f,
                      onStatusChange: a,
                      onDelete: l,
                      delay: h * 50,
                    },
                    f.id
                  )
                ),
              }),
        ],
      }),
    });
  },
  Bi = ({ label: e, value: t, icon: n, color: r }) =>
    u.jsxs("div", {
      className: `bg-surface border ${r} rounded-lg p-4 md:p-6 transition-all duration-base hover:-translate-y-1 hover:shadow-md animate-fade-in`,
      children: [
        u.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            u.jsx("span", { className: "text-2xl md:text-3xl", children: n }),
            u.jsx("div", {
              className: "font-serif text-2xl md:text-3xl font-bold text-ink",
              children: t,
            }),
          ],
        }),
        u.jsx("div", {
          className: "text-xs md:text-sm font-medium text-ink-muted",
          children: e,
        }),
      ],
    }),
  Ui = ({ label: e, count: t, active: n, onClick: r }) =>
    u.jsxs("button", {
      onClick: r,
      className: `px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-base ${
        n
          ? "bg-accent text-surface shadow-md"
          : "bg-surface text-ink-soft border border-border hover:border-accent hover:text-accent"
      }`,
      children: [
        e,
        " ",
        u.jsxs("span", { className: "opacity-70", children: ["(", t, ")"] }),
      ],
    }),
  pE = ({ request: e, onStatusChange: t, onDelete: n, delay: r }) => {
    const s = {
        pending: {
          color: "bg-warning-light text-warning border-warning/20",
          icon: u.jsx(_r, { size: 16 }),
        },
        "in-progress": {
          color: "bg-info-light text-info border-info/20",
          icon: u.jsx($c, { size: 16 }),
        },
        completed: {
          color: "bg-success-light text-success border-success/20",
          icon: u.jsx(bu, { size: 16 }),
        },
      },
      i = s[e.status] || s.pending;
    return u.jsx("div", {
      className:
        "bg-surface border border-border rounded-lg p-6 transition-all duration-base hover:border-accent hover:shadow-md animate-fade-in",
      style: { animationDelay: `${r}ms` },
      children: u.jsxs("div", {
        className: "flex flex-col lg:flex-row lg:items-start gap-6",
        children: [
          u.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [
              u.jsxs("div", {
                className: "flex items-start gap-3 mb-3",
                children: [
                  u.jsxs("div", {
                    className: "flex-1",
                    children: [
                      u.jsx("h3", {
                        className:
                          "font-serif text-xl font-semibold text-ink mb-2",
                        children: e.title,
                      }),
                      u.jsx("p", {
                        className:
                          "text-sm text-ink-soft leading-relaxed mb-3 line-clamp-2",
                        children: e.description,
                      }),
                      u.jsxs("div", {
                        className:
                          "flex flex-wrap items-center gap-4 text-xs text-ink-muted",
                        children: [
                          u.jsx("span", {
                            className: "flex items-center gap-1.5",
                            children: u.jsx("span", {
                              className:
                                "px-2 py-1 bg-hover rounded text-ink-soft font-medium",
                              children: e.category,
                            }),
                          }),
                          u.jsxs("span", {
                            className: "flex items-center gap-1.5",
                            children: [
                              u.jsx("span", {
                                className: `w-2 h-2 rounded-full ${
                                  e.priority === "high"
                                    ? "bg-error"
                                    : e.priority === "medium"
                                    ? "bg-warning"
                                    : "bg-success"
                                }`,
                              }),
                              e.priority,
                              " priority",
                            ],
                          }),
                          u.jsx("span", {
                            children: Yn(
                              new Date(e.createdAt),
                              "MMM d, yyyy • h:mm a"
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("span", {
                    className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${i.color} flex-shrink-0`,
                    children: [i.icon, e.status],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "mt-4 pt-4 border-t border-border-soft",
                children: u.jsxs("div", {
                  className: "flex items-center gap-2 text-sm text-ink-soft",
                  children: [
                    u.jsx("span", {
                      className: "font-medium",
                      children: "Requested by:",
                    }),
                    u.jsx("span", { children: e.userName }),
                    u.jsx("span", { className: "opacity-50", children: "•" }),
                    u.jsx("span", {
                      className: "text-ink-muted",
                      children: e.userEmail,
                    }),
                  ],
                }),
              }),
              (e.estimatedDelivery || e.completedAt) &&
                u.jsxs("div", {
                  className:
                    "mt-2 flex items-center gap-4 text-xs text-ink-muted",
                  children: [
                    e.estimatedDelivery &&
                      e.status !== "completed" &&
                      u.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                          u.jsx(_r, { size: 12 }),
                          "Est. delivery:",
                          " ",
                          Yn(new Date(e.estimatedDelivery), "MMM d, yyyy"),
                        ],
                      }),
                    e.completedAt &&
                      u.jsxs("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                          u.jsx(bu, { size: 12 }),
                          "Completed:",
                          " ",
                          Yn(new Date(e.completedAt), "MMM d, yyyy"),
                        ],
                      }),
                  ],
                }),
            ],
          }),
          u.jsxs("div", {
            className: "flex lg:flex-col gap-2 lg:min-w-[140px]",
            children: [
              e.status === "pending" &&
                u.jsx("button", {
                  onClick: () => t(e.id, "in-progress"),
                  className:
                    "flex-1 lg:flex-none px-4 py-2 text-sm font-medium bg-info-light text-info border border-info/20 rounded-md hover:bg-info hover:text-surface transition-all duration-fast",
                  children: "Start Work",
                }),
              e.status === "in-progress" &&
                u.jsx("button", {
                  onClick: () => t(e.id, "completed"),
                  className:
                    "flex-1 lg:flex-none px-4 py-2 text-sm font-medium bg-success-light text-success border border-success/20 rounded-md hover:bg-success hover:text-surface transition-all duration-fast",
                  children: "Mark Done",
                }),
              e.status === "completed" &&
                e.articleId &&
                u.jsxs(z, {
                  to: `/post/${e.articleId}`,
                  className:
                    "flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-accent-light text-accent border border-accent/20 rounded-md hover:bg-accent hover:text-surface transition-all duration-fast",
                  children: [u.jsx(Gk, { size: 14 }), "View Post"],
                }),
              u.jsxs("button", {
                onClick: () => n(e.id),
                className:
                  "flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-error-light text-error border border-error/20 rounded-md hover:bg-error hover:text-surface transition-all duration-fast",
                children: [u.jsx(Vo, { size: 14 }), "Delete"],
              }),
            ],
          }),
        ],
      }),
    });
  },
  pm = () => {
    const { id: e } = Ag(),
      t = Pn(),
      n = !!e,
      [r, s] = k.useState({ title: "", subtitle: "" }),
      [i, o] = k.useState([]),
      [a, l] = k.useState(n),
      [c, d] = k.useState(!1);
    k.useEffect(() => {
      n && f();
    }, [e, n]);
    const f = async () => {
        l(!0);
        try {
          const m = await qn.getById(e);
          s({ title: m.post.title || "", subtitle: m.post.subtitle || "" });
          const y = m.post.content || [];
          o(y),
            console.log("Loaded post:", m.post),
            console.log("Loaded blocks:", y);
        } catch (m) {
          console.error("Error loading post:", m),
            V.error("Failed to load post for editing"),
            t("/admin");
        } finally {
          l(!1);
        }
      },
      h = () => {
        o([...i, { type: "text", data: "" }]);
      },
      g = () => {
        o([...i, { type: "image", data: null, caption: "" }]);
      },
      p = (m, y) => {
        const b = [...i];
        (b[m] = { ...b[m], ...y }), o(b);
      },
      v = (m) => {
        o(i.filter((y, b) => b !== m));
      },
      w = (m, y) => {
        const b = [...i],
          j = y === "up" ? m - 1 : m + 1;
        j < 0 || j >= i.length || (([b[m], b[j]] = [b[j], b[m]]), o(b));
      },
      x = async (m) => {
        var y, b;
        if ((m.preventDefault(), !r.title.trim())) {
          V.error("Title is required");
          return;
        }
        if (i.length === 0) {
          V.error("Add at least one content block");
          return;
        }
        d(!0);
        try {
          const j = new FormData();
          j.append("title", r.title),
            j.append("subtitle", r.subtitle || ""),
            i.forEach((N, P) => {
              j.append(`block_type_${P}`, N.type),
                N.type === "text"
                  ? j.append(`text_${P}`, N.data || "")
                  : N.type === "image" &&
                    (N.data instanceof File
                      ? j.append(`image_${P}`, N.data)
                      : typeof N.data == "string" &&
                        N.data &&
                        j.append(`existing_image_${P}`, N.data),
                    j.append(`caption_${P}`, N.caption || ""));
            });
          let E;
          n
            ? ((E = await qn.update(e, j)),
              V.success("Post updated successfully!"))
            : ((E = await qn.create(j)),
              V.success("Post created successfully!")),
            console.log("Save response:", E),
            t("/admin");
        } catch (j) {
          console.error("Error saving post:", j);
          const E =
            ((b = (y = j.response) == null ? void 0 : y.data) == null
              ? void 0
              : b.error) || "Failed to save post";
          V.error(E);
        } finally {
          d(!1);
        }
      };
    return a
      ? u.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: u.jsx("div", {
            className:
              "w-12 h-12 border-3 border-border border-t-accent rounded-full animate-spin-slow",
          }),
        })
      : u.jsx("div", {
          className: "min-h-screen py-12 pb-20",
          children: u.jsxs("div", {
            className: "max-w-4xl mx-auto px-6 md:px-8",
            children: [
              u.jsxs("header", {
                className: "mb-12",
                children: [
                  u.jsxs(z, {
                    to: "/admin",
                    className:
                      "inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-accent transition-colors mb-6 group",
                    children: [
                      u.jsx(n2, {
                        size: 16,
                        className:
                          "transition-transform group-hover:-translate-x-1",
                      }),
                      "Cancel",
                    ],
                  }),
                  u.jsx("h1", {
                    className:
                      "font-serif text-4xl md:text-5xl font-bold text-ink mb-2",
                    children: n ? "Edit Post" : "Create New Post",
                  }),
                  u.jsx("p", {
                    className: "text-base text-ink-soft",
                    children: n
                      ? "Update your article content"
                      : "Write and publish a new article",
                  }),
                ],
              }),
              u.jsxs("form", {
                onSubmit: x,
                className: "space-y-8",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "title",
                        className: "block text-sm font-semibold text-ink mb-2",
                        children: "Title *",
                      }),
                      u.jsx("input", {
                        type: "text",
                        id: "title",
                        required: !0,
                        className:
                          "w-full py-4 px-4 border-2 border-border rounded-lg bg-surface text-ink text-xl font-serif placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                        placeholder: "Enter article title...",
                        value: r.title,
                        onChange: (m) => s({ ...r, title: m.target.value }),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "subtitle",
                        className: "block text-sm font-semibold text-ink mb-2",
                        children: "Subtitle (Optional)",
                      }),
                      u.jsx("input", {
                        type: "text",
                        id: "subtitle",
                        className:
                          "w-full py-3 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                        placeholder: "Add a subtitle or description...",
                        value: r.subtitle,
                        onChange: (m) => s({ ...r, subtitle: m.target.value }),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsxs("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                          u.jsx("label", {
                            className: "block text-sm font-semibold text-ink",
                            children: "Content Blocks *",
                          }),
                          u.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              u.jsxs("button", {
                                type: "button",
                                onClick: h,
                                className:
                                  "inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md text-sm font-medium text-ink-soft hover:text-ink hover:border-accent hover:bg-accent-light transition-all duration-fast",
                                children: [u.jsx(Su, { size: 16 }), "Add Text"],
                              }),
                              u.jsxs("button", {
                                type: "button",
                                onClick: g,
                                className:
                                  "inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-md text-sm font-medium text-ink-soft hover:text-ink hover:border-accent hover:bg-accent-light transition-all duration-fast",
                                children: [
                                  u.jsx(ku, { size: 16 }),
                                  "Add Image",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.length === 0
                        ? u.jsxs("div", {
                            className:
                              "text-center py-16 bg-hover border-2 border-dashed border-border rounded-lg",
                            children: [
                              u.jsx("div", {
                                className: "text-5xl mb-4 opacity-30",
                                children: "📝",
                              }),
                              u.jsx("p", {
                                className: "text-ink-soft mb-6",
                                children: "No content blocks yet",
                              }),
                              u.jsxs("div", {
                                className: "flex gap-3 justify-center",
                                children: [
                                  u.jsxs("button", {
                                    type: "button",
                                    onClick: h,
                                    className:
                                      "inline-flex items-center gap-2 px-4 py-2 bg-accent text-surface rounded-md font-medium transition-all duration-base hover:bg-accent-soft",
                                    children: [
                                      u.jsx(Su, { size: 16 }),
                                      "Add Text Block",
                                    ],
                                  }),
                                  u.jsxs("button", {
                                    type: "button",
                                    onClick: g,
                                    className:
                                      "inline-flex items-center gap-2 px-4 py-2 bg-info text-surface rounded-md font-medium transition-all duration-base hover:bg-info/90",
                                    children: [
                                      u.jsx(ku, { size: 16 }),
                                      "Add Image Block",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : u.jsx("div", {
                            className: "space-y-4",
                            children: i.map((m, y) =>
                              u.jsx(
                                gE,
                                {
                                  block: m,
                                  index: y,
                                  totalBlocks: i.length,
                                  onUpdate: (b) => p(y, b),
                                  onRemove: () => v(y),
                                  onMove: (b) => w(y, b),
                                },
                                y
                              )
                            ),
                          }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-4 pt-8 border-t-2 border-border",
                    children: [
                      u.jsx(z, {
                        to: "/admin",
                        className:
                          "flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 border-2 border-border rounded-lg bg-surface text-ink-soft font-medium transition-all duration-base hover:bg-hover hover:border-accent hover:text-ink",
                        children: "Cancel",
                      }),
                      u.jsx("button", {
                        type: "submit",
                        disabled: c,
                        className:
                          "flex-1 group inline-flex items-center justify-center gap-2 py-3.5 px-6 border-2 border-transparent rounded-lg text-surface bg-accent hover:bg-accent-soft focus:outline-none focus:ring-4 focus:ring-accent-light transition-all duration-base hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 font-medium",
                        children: c
                          ? u.jsxs(u.Fragment, {
                              children: [
                                u.jsx("div", {
                                  className:
                                    "w-5 h-5 border-2 border-surface border-t-transparent rounded-full animate-spin-slow",
                                }),
                                "Saving...",
                              ],
                            })
                          : u.jsxs(u.Fragment, {
                              children: [
                                u.jsx(yy, { size: 18 }),
                                n ? "Update Post" : "Publish Post",
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  gE = ({
    block: e,
    index: t,
    totalBlocks: n,
    onUpdate: r,
    onRemove: s,
    onMove: i,
  }) => {
    const o = (d) => {
        const f = d.target.files[0];
        if (f) {
          if (!f.type.startsWith("image/")) {
            V.error("Please select a valid image file");
            return;
          }
          if (f.size > 16777216) {
            V.error("Image must be smaller than 16MB");
            return;
          }
          r({ data: f });
        }
      },
      a = e.data && typeof e.data == "string",
      l = e.data instanceof File;
    return u.jsxs("div", {
      className:
        "bg-surface border-2 border-border rounded-lg p-6 animate-fade-in",
      children: [
        u.jsxs("div", {
          className: "flex items-start justify-between mb-4",
          children: [
            u.jsxs("span", {
              className:
                "inline-flex items-center gap-2 px-3 py-1 bg-hover rounded-md text-sm font-medium text-ink-soft",
              children: [
                e.type === "text"
                  ? u.jsx(Su, { size: 14 })
                  : u.jsx(ku, { size: 14 }),
                e.type === "text" ? "Text Block" : "Image Block",
              ],
            }),
            u.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                u.jsx("button", {
                  type: "button",
                  onClick: () => i("up"),
                  disabled: t === 0,
                  className:
                    "p-2 text-ink-muted hover:text-ink hover:bg-hover rounded-md transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                  title: "Move up",
                  children: u.jsx(qk, { size: 16 }),
                }),
                u.jsx("button", {
                  type: "button",
                  onClick: () => i("down"),
                  disabled: t === n - 1,
                  className:
                    "p-2 text-ink-muted hover:text-ink hover:bg-hover rounded-md transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                  title: "Move down",
                  children: u.jsx(Wk, { size: 16 }),
                }),
                u.jsx("button", {
                  type: "button",
                  onClick: s,
                  className:
                    "p-2 text-error hover:bg-error-light rounded-md transition-all",
                  title: "Remove block",
                  children: u.jsx(Vo, { size: 16 }),
                }),
              ],
            }),
          ],
        }),
        e.type === "text"
          ? u.jsx("textarea", {
              className:
                "w-full py-3 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted resize-y min-h-[150px] leading-relaxed transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
              placeholder: "Write your content here...",
              value: e.data || "",
              onChange: (d) => r({ data: d.target.value }),
            })
          : u.jsxs("div", {
              className: "space-y-4",
              children: [
                a &&
                  u.jsxs("div", {
                    className:
                      "mb-4 p-4 bg-hover rounded-lg border border-border-soft",
                    children: [
                      u.jsx("p", {
                        className: "text-sm font-medium text-ink mb-2",
                        children: "Current Image:",
                      }),
                      u.jsx("img", {
                        src: `https://howto.raydexhub.com/api/static/uploads/${e.data}`,
                        alt: "Current",
                        className:
                          "max-w-full h-auto rounded-lg border-2 border-border shadow-md",
                        onError: (d) => {
                          console.error("Image load error:", e.data),
                            (d.target.src =
                              'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23f0f0f0" width="200" height="200"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23999">Image not found</text></svg>');
                        },
                      }),
                      u.jsxs("p", {
                        className: "text-xs text-ink-muted mt-2",
                        children: ["File: ", e.data],
                      }),
                    ],
                  }),
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      className: "block text-sm font-medium text-ink mb-2",
                      children: a ? "Replace Image (Optional)" : "Image File *",
                    }),
                    u.jsx("input", {
                      type: "file",
                      accept:
                        "image/png,image/jpeg,image/jpg,image/gif,image/webp",
                      onChange: o,
                      className:
                        "w-full py-2 px-4 border border-border rounded-lg bg-surface text-ink file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-accent file:text-surface hover:file:bg-accent-soft transition-all",
                    }),
                    l &&
                      u.jsxs("div", {
                        className:
                          "mt-2 p-2 bg-success-light border border-success/20 rounded text-sm text-success",
                        children: [
                          "✓ New image selected: ",
                          e.data.name,
                          u.jsx("br", {}),
                          u.jsxs("span", {
                            className: "text-xs",
                            children: [
                              "This will",
                              " ",
                              a ? "replace the current image" : "be uploaded",
                              " ",
                              "when you save",
                            ],
                          }),
                        ],
                      }),
                    !a &&
                      !l &&
                      u.jsx("p", {
                        className: "text-xs text-ink-muted mt-1",
                        children:
                          "Accepted formats: PNG, JPG, GIF, WEBP (max 16MB)",
                      }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      className: "block text-sm font-medium text-ink mb-2",
                      children: "Caption (Optional)",
                    }),
                    u.jsx("input", {
                      type: "text",
                      className:
                        "w-full py-2 px-4 border border-border rounded-lg bg-surface text-ink placeholder-ink-muted transition-all duration-fast focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent-light",
                      placeholder: "Add image caption...",
                      value: e.caption || "",
                      onChange: (d) => r({ caption: d.target.value }),
                    }),
                  ],
                }),
              ],
            }),
      ],
    });
  };
function yE() {
  return u.jsx(Bk, {
    children: u.jsxs(yw, {
      children: [
        u.jsxs("div", {
          className: "min-h-screen flex flex-col bg-paper",
          children: [
            u.jsx(r2, {}),
            u.jsx("main", {
              className: "flex-1",
              children: u.jsxs(cw, {
                children: [
                  u.jsx(Ze, { path: "/", element: u.jsx(xS, {}) }),
                  u.jsx(Ze, { path: "/post/:id", element: u.jsx(rE, {}) }),
                  u.jsx(Ze, { path: "/login", element: u.jsx(oE, {}) }),
                  u.jsx(Ze, { path: "/register", element: u.jsx(aE, {}) }),
                  u.jsx(Ze, {
                    path: "/dashboard",
                    element: u.jsx(Dn, { children: u.jsx(lE, {}) }),
                  }),
                  u.jsx(Ze, {
                    path: "/request",
                    element: u.jsx(Dn, { children: u.jsx(cE, {}) }),
                  }),
                  u.jsx(Ze, {
                    path: "/profile",
                    element: u.jsx(Dn, { children: u.jsx(dE, {}) }),
                  }),
                  u.jsx(Ze, {
                    path: "/admin",
                    element: u.jsx(Dn, {
                      adminOnly: !0,
                      children: u.jsx(fE, {}),
                    }),
                  }),
                  u.jsx(Ze, {
                    path: "/admin/requests",
                    element: u.jsx(Dn, {
                      adminOnly: !0,
                      children: u.jsx(mE, {}),
                    }),
                  }),
                  u.jsx(Ze, {
                    path: "/admin/create",
                    element: u.jsx(Dn, {
                      adminOnly: !0,
                      children: u.jsx(pm, {}),
                    }),
                  }),
                  u.jsx(Ze, {
                    path: "/admin/edit/:id",
                    element: u.jsx(Dn, {
                      adminOnly: !0,
                      children: u.jsx(pm, {}),
                    }),
                  }),
                ],
              }),
            }),
            u.jsx(xE, {}),
          ],
        }),
        u.jsx(lb, {
          position: "top-right",
          toastOptions: {
            duration: 4e3,
            style: {
              background: "#FFFFFF",
              color: "#1A1917",
              border: "1px solid #E5E3DC",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "14px",
            },
            success: {
              iconTheme: { primary: "#2C5F2D", secondary: "#FFFFFF" },
            },
            error: { iconTheme: { primary: "#8B2C2C", secondary: "#FFFFFF" } },
          },
        }),
      ],
    }),
  });
}
const xE = () =>
  u.jsx("footer", {
    className: "mt-auto py-12 border-t border-border bg-surface",
    children: u.jsx("div", {
      className: "max-w-container mx-auto px-6 md:px-8",
      children: u.jsxs("div", {
        className:
          "flex flex-col md:flex-row items-center justify-between gap-6",
        children: [
          u.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              u.jsx("span", {
                className: "text-lg text-accent opacity-70",
                children: "◆",
              }),
              u.jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  u.jsx("span", {
                    className: "font-serif text-base font-semibold text-ink",
                    children: "Raydex How-To",
                  }),
                  u.jsx("span", {
                    className: "font-sans text-xs text-ink-muted italic",
                    children: "Knowledge worth sharing",
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "text-xs text-ink-muted",
            children: [
              "© ",
              new Date().getFullYear(),
              " Agyarey Raphael. All rights reserved.",
            ],
          }),
        ],
      }),
    }),
  });
vl.createRoot(document.getElementById("root")).render(
  u.jsx(Ko.StrictMode, { children: u.jsx(yE, {}) })
);

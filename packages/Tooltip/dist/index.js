'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;

	var l = Symbol.for("react.element"),
	  n = Symbol.for("react.portal"),
	  p = Symbol.for("react.fragment"),
	  q = Symbol.for("react.strict_mode"),
	  r = Symbol.for("react.profiler"),
	  t = Symbol.for("react.provider"),
	  u = Symbol.for("react.context"),
	  v = Symbol.for("react.forward_ref"),
	  w = Symbol.for("react.suspense"),
	  x = Symbol.for("react.memo"),
	  y = Symbol.for("react.lazy"),
	  z = Symbol.iterator;
	function A(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = z && a[z] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var B = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  C = Object.assign,
	  D = {};
	function E(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D;
	  this.updater = e || B;
	}
	E.prototype.isReactComponent = {};
	E.prototype.setState = function (a, b) {
	  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	  this.updater.enqueueSetState(this, a, b, "setState");
	};
	E.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {}
	F.prototype = E.prototype;
	function G(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D;
	  this.updater = e || B;
	}
	var H = G.prototype = new F();
	H.constructor = G;
	C(H, E.prototype);
	H.isPureReactComponent = !0;
	var I = Array.isArray,
	  J = Object.prototype.hasOwnProperty,
	  K = {
	    current: null
	  },
	  L = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };
	function M(a, b, e) {
	  var d,
	    c = {},
	    k = null,
	    h = null;
	  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
	  var g = arguments.length - 2;
	  if (1 === g) c.children = e;else if (1 < g) {
	    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	    c.children = f;
	  }
	  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
	  return {
	    $$typeof: l,
	    type: a,
	    key: k,
	    ref: h,
	    props: c,
	    _owner: K.current
	  };
	}
	function N(a, b) {
	  return {
	    $$typeof: l,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  };
	}
	function O(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === l;
	}
	function escape(a) {
	  var b = {
	    "=": "=0",
	    ":": "=2"
	  };
	  return "$" + a.replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}
	var P = /\/+/g;
	function Q(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R(a, b, e, d, c) {
	  var k = typeof a;
	  if ("undefined" === k || "boolean" === k) a = null;
	  var h = !1;
	  if (null === a) h = !0;else switch (k) {
	    case "string":
	    case "number":
	      h = !0;
	      break;
	    case "object":
	      switch (a.$$typeof) {
	        case l:
	        case n:
	          h = !0;
	      }
	  }
	  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
	    return a;
	  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
	  h = 0;
	  d = "" === d ? "." : d + ":";
	  if (I(a)) for (var g = 0; g < a.length; g++) {
	    k = a[g];
	    var f = d + Q(k, g);
	    h += R(k, b, e, f, c);
	  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
	  return h;
	}
	function S(a, b, e) {
	  if (null == a) return a;
	  var d = [],
	    c = 0;
	  R(a, d, "", "", function (a) {
	    return b.call(e, a, c++);
	  });
	  return d;
	}
	function T(a) {
	  if (-1 === a._status) {
	    var b = a._result;
	    b = b();
	    b.then(function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
	    }, function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
	    });
	    -1 === a._status && (a._status = 0, a._result = b);
	  }
	  if (1 === a._status) return a._result.default;
	  throw a._result;
	}
	var U = {
	    current: null
	  },
	  V = {
	    transition: null
	  },
	  W = {
	    ReactCurrentDispatcher: U,
	    ReactCurrentBatchConfig: V,
	    ReactCurrentOwner: K
	  };
	react_production_min.Children = {
	  map: S,
	  forEach: function (a, b, e) {
	    S(a, function () {
	      b.apply(this, arguments);
	    }, e);
	  },
	  count: function (a) {
	    var b = 0;
	    S(a, function () {
	      b++;
	    });
	    return b;
	  },
	  toArray: function (a) {
	    return S(a, function (a) {
	      return a;
	    }) || [];
	  },
	  only: function (a) {
	    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
	    return a;
	  }
	};
	react_production_min.Component = E;
	react_production_min.Fragment = p;
	react_production_min.Profiler = r;
	react_production_min.PureComponent = G;
	react_production_min.StrictMode = q;
	react_production_min.Suspense = w;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	react_production_min.cloneElement = function (a, b, e) {
	  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
	  var d = C({}, a.props),
	    c = a.key,
	    k = a.ref,
	    h = a._owner;
	  if (null != b) {
	    void 0 !== b.ref && (k = b.ref, h = K.current);
	    void 0 !== b.key && (c = "" + b.key);
	    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	  }
	  var f = arguments.length - 2;
	  if (1 === f) d.children = e;else if (1 < f) {
	    g = Array(f);
	    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	    d.children = g;
	  }
	  return {
	    $$typeof: l,
	    type: a.type,
	    key: c,
	    ref: k,
	    props: d,
	    _owner: h
	  };
	};
	react_production_min.createContext = function (a) {
	  a = {
	    $$typeof: u,
	    _currentValue: a,
	    _currentValue2: a,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null,
	    _defaultValue: null,
	    _globalName: null
	  };
	  a.Provider = {
	    $$typeof: t,
	    _context: a
	  };
	  return a.Consumer = a;
	};
	react_production_min.createElement = M;
	react_production_min.createFactory = function (a) {
	  var b = M.bind(null, a);
	  b.type = a;
	  return b;
	};
	react_production_min.createRef = function () {
	  return {
	    current: null
	  };
	};
	react_production_min.forwardRef = function (a) {
	  return {
	    $$typeof: v,
	    render: a
	  };
	};
	react_production_min.isValidElement = O;
	react_production_min.lazy = function (a) {
	  return {
	    $$typeof: y,
	    _payload: {
	      _status: -1,
	      _result: a
	    },
	    _init: T
	  };
	};
	react_production_min.memo = function (a, b) {
	  return {
	    $$typeof: x,
	    type: a,
	    compare: void 0 === b ? null : b
	  };
	};
	react_production_min.startTransition = function (a) {
	  var b = V.transition;
	  V.transition = {};
	  try {
	    a();
	  } finally {
	    V.transition = b;
	  }
	};
	react_production_min.unstable_act = function () {
	  throw Error("act(...) is not supported in production builds of React.");
	};
	react_production_min.useCallback = function (a, b) {
	  return U.current.useCallback(a, b);
	};
	react_production_min.useContext = function (a) {
	  return U.current.useContext(a);
	};
	react_production_min.useDebugValue = function () {};
	react_production_min.useDeferredValue = function (a) {
	  return U.current.useDeferredValue(a);
	};
	react_production_min.useEffect = function (a, b) {
	  return U.current.useEffect(a, b);
	};
	react_production_min.useId = function () {
	  return U.current.useId();
	};
	react_production_min.useImperativeHandle = function (a, b, e) {
	  return U.current.useImperativeHandle(a, b, e);
	};
	react_production_min.useInsertionEffect = function (a, b) {
	  return U.current.useInsertionEffect(a, b);
	};
	react_production_min.useLayoutEffect = function (a, b) {
	  return U.current.useLayoutEffect(a, b);
	};
	react_production_min.useMemo = function (a, b) {
	  return U.current.useMemo(a, b);
	};
	react_production_min.useReducer = function (a, b, e) {
	  return U.current.useReducer(a, b, e);
	};
	react_production_min.useRef = function (a) {
	  return U.current.useRef(a);
	};
	react_production_min.useState = function (a) {
	  return U.current.useState(a);
	};
	react_production_min.useSyncExternalStore = function (a, b, e) {
	  return U.current.useSyncExternalStore(a, b, e);
	};
	react_production_min.useTransition = function () {
	  return U.current.useTransition();
	};
	react_production_min.version = "18.1.0";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
react_development.exports;

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function () {

		    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		    }
		    var ReactVersion = '18.1.0';

		    // -----------------------------------------------------------------------------

		    var enableScopeAPI = false; // Experimental Create Event Handle API.
		    var enableCacheElement = false;
		    var enableTransitionTracing = false; // No known bugs, but needs performance testing

		    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		    // stuff. Intended to enable React core members to more easily debug scheduling
		    // issues in DEV builds.

		    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		    // ATTENTION

		    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		    var REACT_MEMO_TYPE = Symbol.for('react.memo');
		    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		    var FAUX_ITERATOR_SYMBOL = '@@iterator';
		    function getIteratorFn(maybeIterable) {
		      if (maybeIterable === null || typeof maybeIterable !== 'object') {
		        return null;
		      }
		      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
		      if (typeof maybeIterator === 'function') {
		        return maybeIterator;
		      }
		      return null;
		    }

		    /**
		     * Keeps track of the current dispatcher.
		     */
		    var ReactCurrentDispatcher = {
		      /**
		       * @internal
		       * @type {ReactComponent}
		       */
		      current: null
		    };

		    /**
		     * Keeps track of the current batch's configuration such as how long an update
		     * should suspend for if it needs to.
		     */
		    var ReactCurrentBatchConfig = {
		      transition: null
		    };
		    var ReactCurrentActQueue = {
		      current: null,
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		      isBatchingLegacy: false,
		      didScheduleLegacyUpdate: false
		    };

		    /**
		     * Keeps track of the current owner.
		     *
		     * The current owner is the component who should own any components that are
		     * currently being constructed.
		     */
		    var ReactCurrentOwner = {
		      /**
		       * @internal
		       * @type {ReactComponent}
		       */
		      current: null
		    };
		    var ReactDebugCurrentFrame = {};
		    var currentExtraStackFrame = null;
		    function setExtraStackFrame(stack) {
		      {
		        currentExtraStackFrame = stack;
		      }
		    }
		    {
		      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		        {
		          currentExtraStackFrame = stack;
		        }
		      }; // Stack implementation injected by the current renderer.

		      ReactDebugCurrentFrame.getCurrentStack = null;
		      ReactDebugCurrentFrame.getStackAddendum = function () {
		        var stack = ''; // Add an extra top frame while an element is being validated

		        if (currentExtraStackFrame) {
		          stack += currentExtraStackFrame;
		        } // Delegate to the injected renderer-specific implementation

		        var impl = ReactDebugCurrentFrame.getCurrentStack;
		        if (impl) {
		          stack += impl() || '';
		        }
		        return stack;
		      };
		    }
		    var ReactSharedInternals = {
		      ReactCurrentDispatcher: ReactCurrentDispatcher,
		      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		      ReactCurrentOwner: ReactCurrentOwner
		    };
		    {
		      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		      ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		    }

		    // by calls to these methods by a Babel plugin.
		    //
		    // In PROD (or in packages without access to React internals),
		    // they are left as they are instead.

		    function warn(format) {
		      {
		        {
		          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		            args[_key - 1] = arguments[_key];
		          }
		          printWarning('warn', format, args);
		        }
		      }
		    }
		    function error(format) {
		      {
		        {
		          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		            args[_key2 - 1] = arguments[_key2];
		          }
		          printWarning('error', format, args);
		        }
		      }
		    }
		    function printWarning(level, format, args) {
		      // When changing this logic, you might want to also
		      // update consoleWithStackDev.www.js as well.
		      {
		        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		        var stack = ReactDebugCurrentFrame.getStackAddendum();
		        if (stack !== '') {
		          format += '%s';
		          args = args.concat([stack]);
		        } // eslint-disable-next-line react-internal/safe-string-coercion

		        var argsWithFormat = args.map(function (item) {
		          return String(item);
		        }); // Careful: RN currently depends on this prefix

		        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		        // breaks IE9: https://github.com/facebook/react/issues/13610
		        // eslint-disable-next-line react-internal/no-production-logging

		        Function.prototype.apply.call(console[level], console, argsWithFormat);
		      }
		    }
		    var didWarnStateUpdateForUnmountedComponent = {};
		    function warnNoop(publicInstance, callerName) {
		      {
		        var _constructor = publicInstance.constructor;
		        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		        var warningKey = componentName + "." + callerName;
		        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		          return;
		        }
		        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
		        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		      }
		    }
		    /**
		     * This is the abstract API for an update queue.
		     */

		    var ReactNoopUpdateQueue = {
		      /**
		       * Checks whether or not this composite component is mounted.
		       * @param {ReactClass} publicInstance The instance we want to test.
		       * @return {boolean} True if mounted, false otherwise.
		       * @protected
		       * @final
		       */
		      isMounted: function (publicInstance) {
		        return false;
		      },
		      /**
		       * Forces an update. This should only be invoked when it is known with
		       * certainty that we are **not** in a DOM transaction.
		       *
		       * You may want to call this when you know that some deeper aspect of the
		       * component's state has changed but `setState` was not called.
		       *
		       * This will not invoke `shouldComponentUpdate`, but it will invoke
		       * `componentWillUpdate` and `componentDidUpdate`.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} callerName name of the calling function in the public API.
		       * @internal
		       */
		      enqueueForceUpdate: function (publicInstance, callback, callerName) {
		        warnNoop(publicInstance, 'forceUpdate');
		      },
		      /**
		       * Replaces all of the state. Always use this or `setState` to mutate state.
		       * You should treat `this.state` as immutable.
		       *
		       * There is no guarantee that `this.state` will be immediately updated, so
		       * accessing `this.state` after calling this method may return the old value.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {object} completeState Next state.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} callerName name of the calling function in the public API.
		       * @internal
		       */
		      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		        warnNoop(publicInstance, 'replaceState');
		      },
		      /**
		       * Sets a subset of the state. This only exists because _pendingState is
		       * internal. This provides a merging strategy that is not available to deep
		       * properties which is confusing. TODO: Expose pendingState or don't use it
		       * during the merge.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {object} partialState Next partial state to be merged with state.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} Name of the calling function in the public API.
		       * @internal
		       */
		      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		        warnNoop(publicInstance, 'setState');
		      }
		    };
		    var assign = Object.assign;
		    var emptyObject = {};
		    {
		      Object.freeze(emptyObject);
		    }
		    /**
		     * Base class helpers for the updating state of a component.
		     */

		    function Component(props, context, updater) {
		      this.props = props;
		      this.context = context; // If a component has string refs, we will assign a different object later.

		      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		      // renderer.

		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    Component.prototype.isReactComponent = {};
		    /**
		     * Sets a subset of the state. Always use this to mutate
		     * state. You should treat `this.state` as immutable.
		     *
		     * There is no guarantee that `this.state` will be immediately updated, so
		     * accessing `this.state` after calling this method may return the old value.
		     *
		     * There is no guarantee that calls to `setState` will run synchronously,
		     * as they may eventually be batched together.  You can provide an optional
		     * callback that will be executed when the call to setState is actually
		     * completed.
		     *
		     * When a function is provided to setState, it will be called at some point in
		     * the future (not synchronously). It will be called with the up to date
		     * component arguments (state, props, context). These values can be different
		     * from this.* because your function may be called after receiveProps but before
		     * shouldComponentUpdate, and this new state, props, and context will not yet be
		     * assigned to this.
		     *
		     * @param {object|function} partialState Next partial state or function to
		     *        produce next partial state to be merged with current state.
		     * @param {?function} callback Called after state is updated.
		     * @final
		     * @protected
		     */

		    Component.prototype.setState = function (partialState, callback) {
		      if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		        throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		      }
		      this.updater.enqueueSetState(this, partialState, callback, 'setState');
		    };
		    /**
		     * Forces an update. This should only be invoked when it is known with
		     * certainty that we are **not** in a DOM transaction.
		     *
		     * You may want to call this when you know that some deeper aspect of the
		     * component's state has changed but `setState` was not called.
		     *
		     * This will not invoke `shouldComponentUpdate`, but it will invoke
		     * `componentWillUpdate` and `componentDidUpdate`.
		     *
		     * @param {?function} callback Called after update is complete.
		     * @final
		     * @protected
		     */

		    Component.prototype.forceUpdate = function (callback) {
		      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		    };
		    /**
		     * Deprecated APIs. These APIs used to exist on classic React classes but since
		     * we would like to deprecate them, we're not going to move them over to this
		     * modern base class. Instead, we define a getter that warns if it's accessed.
		     */

		    {
		      var deprecatedAPIs = {
		        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		      };
		      var defineDeprecationWarning = function (methodName, info) {
		        Object.defineProperty(Component.prototype, methodName, {
		          get: function () {
		            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
		            return undefined;
		          }
		        });
		      };
		      for (var fnName in deprecatedAPIs) {
		        if (deprecatedAPIs.hasOwnProperty(fnName)) {
		          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		        }
		      }
		    }
		    function ComponentDummy() {}
		    ComponentDummy.prototype = Component.prototype;
		    /**
		     * Convenience component with default shallow equality check for sCU.
		     */

		    function PureComponent(props, context, updater) {
		      this.props = props;
		      this.context = context; // If a component has string refs, we will assign a different object later.

		      this.refs = emptyObject;
		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		    assign(pureComponentPrototype, Component.prototype);
		    pureComponentPrototype.isPureReactComponent = true;

		    // an immutable object with a single mutable value
		    function createRef() {
		      var refObject = {
		        current: null
		      };
		      {
		        Object.seal(refObject);
		      }
		      return refObject;
		    }
		    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		    function isArray(a) {
		      return isArrayImpl(a);
		    }

		    /*
		     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		     *
		     * The functions in this module will throw an easier-to-understand,
		     * easier-to-debug exception with a clear errors message message explaining the
		     * problem. (Instead of a confusing exception thrown inside the implementation
		     * of the `value` object).
		     */
		    // $FlowFixMe only called in DEV, so void return is not possible.
		    function typeName(value) {
		      {
		        // toStringTag is needed for namespaced types like Temporal.Instant
		        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		        return type;
		      }
		    } // $FlowFixMe only called in DEV, so void return is not possible.

		    function willCoercionThrow(value) {
		      {
		        try {
		          testStringCoercion(value);
		          return false;
		        } catch (e) {
		          return true;
		        }
		      }
		    }
		    function testStringCoercion(value) {
		      // If you ended up here by following an exception call stack, here's what's
		      // happened: you supplied an object or symbol value to React (as a prop, key,
		      // DOM attribute, CSS property, string ref, etc.) and when React tried to
		      // coerce it to a string using `'' + value`, an exception was thrown.
		      //
		      // The most common types that will cause this exception are `Symbol` instances
		      // and Temporal objects like `Temporal.Instant`. But any object that has a
		      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		      // exception. (Library authors do this to prevent users from using built-in
		      // numeric operators like `+` or comparison operators like `>=` because custom
		      // methods are needed to perform accurate arithmetic or comparison.)
		      //
		      // To fix the problem, coerce this object or symbol value to a string before
		      // passing it to React. The most reliable way is usually `String(value)`.
		      //
		      // To find which value is throwing, check the browser or debugger console.
		      // Before this exception was thrown, there should be `console.error` output
		      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		      // problem and how that type was used: key, atrribute, input value prop, etc.
		      // In most cases, this console output also shows the component and its
		      // ancestor components where the exception happened.
		      //
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      return '' + value;
		    }
		    function checkKeyStringCoercion(value) {
		      {
		        if (willCoercionThrow(value)) {
		          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
		          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		        }
		      }
		    }

		    function getWrappedName(outerType, innerType, wrapperName) {
		      var displayName = outerType.displayName;
		      if (displayName) {
		        return displayName;
		      }
		      var functionName = innerType.displayName || innerType.name || '';
		      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		    } // Keep in sync with react-reconciler/getComponentNameFromFiber

		    function getContextName(type) {
		      return type.displayName || 'Context';
		    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

		    function getComponentNameFromType(type) {
		      if (type == null) {
		        // Host root, text node or just invalid type.
		        return null;
		      }
		      {
		        if (typeof type.tag === 'number') {
		          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		        }
		      }
		      if (typeof type === 'function') {
		        return type.displayName || type.name || null;
		      }
		      if (typeof type === 'string') {
		        return type;
		      }
		      switch (type) {
		        case REACT_FRAGMENT_TYPE:
		          return 'Fragment';
		        case REACT_PORTAL_TYPE:
		          return 'Portal';
		        case REACT_PROFILER_TYPE:
		          return 'Profiler';
		        case REACT_STRICT_MODE_TYPE:
		          return 'StrictMode';
		        case REACT_SUSPENSE_TYPE:
		          return 'Suspense';
		        case REACT_SUSPENSE_LIST_TYPE:
		          return 'SuspenseList';
		      }
		      if (typeof type === 'object') {
		        switch (type.$$typeof) {
		          case REACT_CONTEXT_TYPE:
		            var context = type;
		            return getContextName(context) + '.Consumer';
		          case REACT_PROVIDER_TYPE:
		            var provider = type;
		            return getContextName(provider._context) + '.Provider';
		          case REACT_FORWARD_REF_TYPE:
		            return getWrappedName(type, type.render, 'ForwardRef');
		          case REACT_MEMO_TYPE:
		            var outerName = type.displayName || null;
		            if (outerName !== null) {
		              return outerName;
		            }
		            return getComponentNameFromType(type.type) || 'Memo';
		          case REACT_LAZY_TYPE:
		            {
		              var lazyComponent = type;
		              var payload = lazyComponent._payload;
		              var init = lazyComponent._init;
		              try {
		                return getComponentNameFromType(init(payload));
		              } catch (x) {
		                return null;
		              }
		            }

		          // eslint-disable-next-line no-fallthrough
		        }
		      }

		      return null;
		    }
		    var hasOwnProperty = Object.prototype.hasOwnProperty;
		    var RESERVED_PROPS = {
		      key: true,
		      ref: true,
		      __self: true,
		      __source: true
		    };
		    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
		    {
		      didWarnAboutStringRefs = {};
		    }
		    function hasValidRef(config) {
		      {
		        if (hasOwnProperty.call(config, 'ref')) {
		          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
		          if (getter && getter.isReactWarning) {
		            return false;
		          }
		        }
		      }
		      return config.ref !== undefined;
		    }
		    function hasValidKey(config) {
		      {
		        if (hasOwnProperty.call(config, 'key')) {
		          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
		          if (getter && getter.isReactWarning) {
		            return false;
		          }
		        }
		      }
		      return config.key !== undefined;
		    }
		    function defineKeyPropWarningGetter(props, displayName) {
		      var warnAboutAccessingKey = function () {
		        {
		          if (!specialPropKeyWarningShown) {
		            specialPropKeyWarningShown = true;
		            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		          }
		        }
		      };
		      warnAboutAccessingKey.isReactWarning = true;
		      Object.defineProperty(props, 'key', {
		        get: warnAboutAccessingKey,
		        configurable: true
		      });
		    }
		    function defineRefPropWarningGetter(props, displayName) {
		      var warnAboutAccessingRef = function () {
		        {
		          if (!specialPropRefWarningShown) {
		            specialPropRefWarningShown = true;
		            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		          }
		        }
		      };
		      warnAboutAccessingRef.isReactWarning = true;
		      Object.defineProperty(props, 'ref', {
		        get: warnAboutAccessingRef,
		        configurable: true
		      });
		    }
		    function warnIfStringRefCannotBeAutoConverted(config) {
		      {
		        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
		          if (!didWarnAboutStringRefs[componentName]) {
		            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
		            didWarnAboutStringRefs[componentName] = true;
		          }
		        }
		      }
		    }
		    /**
		     * Factory method to create a new React element. This no longer adheres to
		     * the class pattern, so do not use new to call it. Also, instanceof check
		     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		     * if something is a React Element.
		     *
		     * @param {*} type
		     * @param {*} props
		     * @param {*} key
		     * @param {string|object} ref
		     * @param {*} owner
		     * @param {*} self A *temporary* helper to detect places where `this` is
		     * different from the `owner` when React.createElement is called, so that we
		     * can warn. We want to get rid of owner and replace string `ref`s with arrow
		     * functions, and as long as `this` and owner are the same, there will be no
		     * change in behavior.
		     * @param {*} source An annotation object (added by a transpiler or otherwise)
		     * indicating filename, line number, and/or other information.
		     * @internal
		     */

		    var ReactElement = function (type, key, ref, self, source, owner, props) {
		      var element = {
		        // This tag allows us to uniquely identify this as a React Element
		        $$typeof: REACT_ELEMENT_TYPE,
		        // Built-in properties that belong on the element
		        type: type,
		        key: key,
		        ref: ref,
		        props: props,
		        // Record the component responsible for creating this element.
		        _owner: owner
		      };
		      {
		        // The validation flag is currently mutative. We put it on
		        // an external backing store so that we can freeze the whole object.
		        // This can be replaced with a WeakMap once they are implemented in
		        // commonly used development environments.
		        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		        // the validation flag non-enumerable (where possible, which should
		        // include every environment we run tests in), so the test framework
		        // ignores it.

		        Object.defineProperty(element._store, 'validated', {
		          configurable: false,
		          enumerable: false,
		          writable: true,
		          value: false
		        }); // self and source are DEV only properties.

		        Object.defineProperty(element, '_self', {
		          configurable: false,
		          enumerable: false,
		          writable: false,
		          value: self
		        }); // Two elements created in two different places should be considered
		        // equal for testing purposes and therefore we hide it from enumeration.

		        Object.defineProperty(element, '_source', {
		          configurable: false,
		          enumerable: false,
		          writable: false,
		          value: source
		        });
		        if (Object.freeze) {
		          Object.freeze(element.props);
		          Object.freeze(element);
		        }
		      }
		      return element;
		    };
		    /**
		     * Create and return a new ReactElement of the given type.
		     * See https://reactjs.org/docs/react-api.html#createelement
		     */

		    function createElement(type, config, children) {
		      var propName; // Reserved names are extracted

		      var props = {};
		      var key = null;
		      var ref = null;
		      var self = null;
		      var source = null;
		      if (config != null) {
		        if (hasValidRef(config)) {
		          ref = config.ref;
		          {
		            warnIfStringRefCannotBeAutoConverted(config);
		          }
		        }
		        if (hasValidKey(config)) {
		          {
		            checkKeyStringCoercion(config.key);
		          }
		          key = '' + config.key;
		        }
		        self = config.__self === undefined ? null : config.__self;
		        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		        for (propName in config) {
		          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		            props[propName] = config[propName];
		          }
		        }
		      } // Children can be more than one argument, and those are transferred onto
		      // the newly allocated props object.

		      var childrenLength = arguments.length - 2;
		      if (childrenLength === 1) {
		        props.children = children;
		      } else if (childrenLength > 1) {
		        var childArray = Array(childrenLength);
		        for (var i = 0; i < childrenLength; i++) {
		          childArray[i] = arguments[i + 2];
		        }
		        {
		          if (Object.freeze) {
		            Object.freeze(childArray);
		          }
		        }
		        props.children = childArray;
		      } // Resolve default props

		      if (type && type.defaultProps) {
		        var defaultProps = type.defaultProps;
		        for (propName in defaultProps) {
		          if (props[propName] === undefined) {
		            props[propName] = defaultProps[propName];
		          }
		        }
		      }
		      {
		        if (key || ref) {
		          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
		          if (key) {
		            defineKeyPropWarningGetter(props, displayName);
		          }
		          if (ref) {
		            defineRefPropWarningGetter(props, displayName);
		          }
		        }
		      }
		      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		    }
		    function cloneAndReplaceKey(oldElement, newKey) {
		      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		      return newElement;
		    }
		    /**
		     * Clone and return a new ReactElement using element as the starting point.
		     * See https://reactjs.org/docs/react-api.html#cloneelement
		     */

		    function cloneElement(element, config, children) {
		      if (element === null || element === undefined) {
		        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		      }
		      var propName; // Original props are copied

		      var props = assign({}, element.props); // Reserved names are extracted

		      var key = element.key;
		      var ref = element.ref; // Self is preserved since the owner is preserved.

		      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		      // transpiler, and the original source is probably a better indicator of the
		      // true owner.

		      var source = element._source; // Owner will be preserved, unless ref is overridden

		      var owner = element._owner;
		      if (config != null) {
		        if (hasValidRef(config)) {
		          // Silently steal the ref from the parent.
		          ref = config.ref;
		          owner = ReactCurrentOwner.current;
		        }
		        if (hasValidKey(config)) {
		          {
		            checkKeyStringCoercion(config.key);
		          }
		          key = '' + config.key;
		        } // Remaining properties override existing props

		        var defaultProps;
		        if (element.type && element.type.defaultProps) {
		          defaultProps = element.type.defaultProps;
		        }
		        for (propName in config) {
		          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		            if (config[propName] === undefined && defaultProps !== undefined) {
		              // Resolve default props
		              props[propName] = defaultProps[propName];
		            } else {
		              props[propName] = config[propName];
		            }
		          }
		        }
		      } // Children can be more than one argument, and those are transferred onto
		      // the newly allocated props object.

		      var childrenLength = arguments.length - 2;
		      if (childrenLength === 1) {
		        props.children = children;
		      } else if (childrenLength > 1) {
		        var childArray = Array(childrenLength);
		        for (var i = 0; i < childrenLength; i++) {
		          childArray[i] = arguments[i + 2];
		        }
		        props.children = childArray;
		      }
		      return ReactElement(element.type, key, ref, self, source, owner, props);
		    }
		    /**
		     * Verifies the object is a ReactElement.
		     * See https://reactjs.org/docs/react-api.html#isvalidelement
		     * @param {?object} object
		     * @return {boolean} True if `object` is a ReactElement.
		     * @final
		     */

		    function isValidElement(object) {
		      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		    }
		    var SEPARATOR = '.';
		    var SUBSEPARATOR = ':';
		    /**
		     * Escape and wrap key so it is safe to use as a reactid
		     *
		     * @param {string} key to be escaped.
		     * @return {string} the escaped key.
		     */

		    function escape(key) {
		      var escapeRegex = /[=:]/g;
		      var escaperLookup = {
		        '=': '=0',
		        ':': '=2'
		      };
		      var escapedString = key.replace(escapeRegex, function (match) {
		        return escaperLookup[match];
		      });
		      return '$' + escapedString;
		    }
		    /**
		     * TODO: Test that a single child and an array with one item have the same key
		     * pattern.
		     */

		    var didWarnAboutMaps = false;
		    var userProvidedKeyEscapeRegex = /\/+/g;
		    function escapeUserProvidedKey(text) {
		      return text.replace(userProvidedKeyEscapeRegex, '$&/');
		    }
		    /**
		     * Generate a key string that identifies a element within a set.
		     *
		     * @param {*} element A element that could contain a manual key.
		     * @param {number} index Index that is used if a manual key is not provided.
		     * @return {string}
		     */

		    function getElementKey(element, index) {
		      // Do some typechecking here since we call this blindly. We want to ensure
		      // that we don't block potential future ES APIs.
		      if (typeof element === 'object' && element !== null && element.key != null) {
		        // Explicit key
		        {
		          checkKeyStringCoercion(element.key);
		        }
		        return escape('' + element.key);
		      } // Implicit key determined by the index in the set

		      return index.toString(36);
		    }
		    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		      var type = typeof children;
		      if (type === 'undefined' || type === 'boolean') {
		        // All of the above are perceived as null.
		        children = null;
		      }
		      var invokeCallback = false;
		      if (children === null) {
		        invokeCallback = true;
		      } else {
		        switch (type) {
		          case 'string':
		          case 'number':
		            invokeCallback = true;
		            break;
		          case 'object':
		            switch (children.$$typeof) {
		              case REACT_ELEMENT_TYPE:
		              case REACT_PORTAL_TYPE:
		                invokeCallback = true;
		            }
		        }
		      }
		      if (invokeCallback) {
		        var _child = children;
		        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		        // so that it's consistent if the number of children grows:

		        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
		        if (isArray(mappedChild)) {
		          var escapedChildKey = '';
		          if (childKey != null) {
		            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		          }
		          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		            return c;
		          });
		        } else if (mappedChild != null) {
		          if (isValidElement(mappedChild)) {
		            {
		              // The `if` statement here prevents auto-disabling of the safe
		              // coercion ESLint rule, so we must manually disable it below.
		              // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		              if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		                checkKeyStringCoercion(mappedChild.key);
		              }
		            }
		            mappedChild = cloneAndReplaceKey(mappedChild,
		            // Keep both the (mapped) and old keys if they differ, just as
		            // traverseAllChildren used to do for objects as children
		            escapedPrefix + (
		            // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		            mappedChild.key && (!_child || _child.key !== mappedChild.key) ?
		            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		            // eslint-disable-next-line react-internal/safe-string-coercion
		            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		          }
		          array.push(mappedChild);
		        }
		        return 1;
		      }
		      var child;
		      var nextName;
		      var subtreeCount = 0; // Count of children found in the current subtree.

		      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
		      if (isArray(children)) {
		        for (var i = 0; i < children.length; i++) {
		          child = children[i];
		          nextName = nextNamePrefix + getElementKey(child, i);
		          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		        }
		      } else {
		        var iteratorFn = getIteratorFn(children);
		        if (typeof iteratorFn === 'function') {
		          var iterableChildren = children;
		          {
		            // Warn about using Maps as children
		            if (iteratorFn === iterableChildren.entries) {
		              if (!didWarnAboutMaps) {
		                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		              }
		              didWarnAboutMaps = true;
		            }
		          }
		          var iterator = iteratorFn.call(iterableChildren);
		          var step;
		          var ii = 0;
		          while (!(step = iterator.next()).done) {
		            child = step.value;
		            nextName = nextNamePrefix + getElementKey(child, ii++);
		            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		          }
		        } else if (type === 'object') {
		          // eslint-disable-next-line react-internal/safe-string-coercion
		          var childrenString = String(children);
		          throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		        }
		      }
		      return subtreeCount;
		    }

		    /**
		     * Maps children that are typically specified as `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		     *
		     * The provided mapFunction(child, index) will be called for each
		     * leaf child.
		     *
		     * @param {?*} children Children tree container.
		     * @param {function(*, int)} func The map function.
		     * @param {*} context Context for mapFunction.
		     * @return {object} Object containing the ordered map of results.
		     */
		    function mapChildren(children, func, context) {
		      if (children == null) {
		        return children;
		      }
		      var result = [];
		      var count = 0;
		      mapIntoArray(children, result, '', '', function (child) {
		        return func.call(context, child, count++);
		      });
		      return result;
		    }
		    /**
		     * Count the number of children that are typically specified as
		     * `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrencount
		     *
		     * @param {?*} children Children tree container.
		     * @return {number} The number of children.
		     */

		    function countChildren(children) {
		      var n = 0;
		      mapChildren(children, function () {
		        n++; // Don't return anything
		      });

		      return n;
		    }

		    /**
		     * Iterates through children that are typically specified as `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		     *
		     * The provided forEachFunc(child, index) will be called for each
		     * leaf child.
		     *
		     * @param {?*} children Children tree container.
		     * @param {function(*, int)} forEachFunc
		     * @param {*} forEachContext Context for forEachContext.
		     */
		    function forEachChildren(children, forEachFunc, forEachContext) {
		      mapChildren(children, function () {
		        forEachFunc.apply(this, arguments); // Don't return anything.
		      }, forEachContext);
		    }
		    /**
		     * Flatten a children object (typically specified as `props.children`) and
		     * return an array with appropriately re-keyed children.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		     */

		    function toArray(children) {
		      return mapChildren(children, function (child) {
		        return child;
		      }) || [];
		    }
		    /**
		     * Returns the first child in a collection of children and verifies that there
		     * is only one child in the collection.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		     *
		     * The current implementation of this function assumes that a single child gets
		     * passed without a wrapper, but the purpose of this helper function is to
		     * abstract away the particular structure of children.
		     *
		     * @param {?object} children Child collection structure.
		     * @return {ReactElement} The first and only `ReactElement` contained in the
		     * structure.
		     */

		    function onlyChild(children) {
		      if (!isValidElement(children)) {
		        throw new Error('React.Children.only expected to receive a single React element child.');
		      }
		      return children;
		    }
		    function createContext(defaultValue) {
		      // TODO: Second argument used to be an optional `calculateChangedBits`
		      // function. Warn to reserve for future use?
		      var context = {
		        $$typeof: REACT_CONTEXT_TYPE,
		        // As a workaround to support multiple concurrent renderers, we categorize
		        // some renderers as primary and others as secondary. We only expect
		        // there to be two concurrent renderers at most: React Native (primary) and
		        // Fabric (secondary); React DOM (primary) and React ART (secondary).
		        // Secondary renderers store their context values on separate fields.
		        _currentValue: defaultValue,
		        _currentValue2: defaultValue,
		        // Used to track how many concurrent renderers this context currently
		        // supports within in a single renderer. Such as parallel server rendering.
		        _threadCount: 0,
		        // These are circular
		        Provider: null,
		        Consumer: null,
		        // Add these to use same hidden class in VM as ServerContext
		        _defaultValue: null,
		        _globalName: null
		      };
		      context.Provider = {
		        $$typeof: REACT_PROVIDER_TYPE,
		        _context: context
		      };
		      var hasWarnedAboutUsingNestedContextConsumers = false;
		      var hasWarnedAboutUsingConsumerProvider = false;
		      var hasWarnedAboutDisplayNameOnConsumer = false;
		      {
		        // A separate object, but proxies back to the original context object for
		        // backwards compatibility. It has a different $$typeof, so we can properly
		        // warn for the incorrect usage of Context as a Consumer.
		        var Consumer = {
		          $$typeof: REACT_CONTEXT_TYPE,
		          _context: context
		        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		        Object.defineProperties(Consumer, {
		          Provider: {
		            get: function () {
		              if (!hasWarnedAboutUsingConsumerProvider) {
		                hasWarnedAboutUsingConsumerProvider = true;
		                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		              }
		              return context.Provider;
		            },
		            set: function (_Provider) {
		              context.Provider = _Provider;
		            }
		          },
		          _currentValue: {
		            get: function () {
		              return context._currentValue;
		            },
		            set: function (_currentValue) {
		              context._currentValue = _currentValue;
		            }
		          },
		          _currentValue2: {
		            get: function () {
		              return context._currentValue2;
		            },
		            set: function (_currentValue2) {
		              context._currentValue2 = _currentValue2;
		            }
		          },
		          _threadCount: {
		            get: function () {
		              return context._threadCount;
		            },
		            set: function (_threadCount) {
		              context._threadCount = _threadCount;
		            }
		          },
		          Consumer: {
		            get: function () {
		              if (!hasWarnedAboutUsingNestedContextConsumers) {
		                hasWarnedAboutUsingNestedContextConsumers = true;
		                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		              }
		              return context.Consumer;
		            }
		          },
		          displayName: {
		            get: function () {
		              return context.displayName;
		            },
		            set: function (displayName) {
		              if (!hasWarnedAboutDisplayNameOnConsumer) {
		                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
		                hasWarnedAboutDisplayNameOnConsumer = true;
		              }
		            }
		          }
		        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		        context.Consumer = Consumer;
		      }
		      {
		        context._currentRenderer = null;
		        context._currentRenderer2 = null;
		      }
		      return context;
		    }
		    var Uninitialized = -1;
		    var Pending = 0;
		    var Resolved = 1;
		    var Rejected = 2;
		    function lazyInitializer(payload) {
		      if (payload._status === Uninitialized) {
		        var ctor = payload._result;
		        var thenable = ctor(); // Transition to the next state.
		        // This might throw either because it's missing or throws. If so, we treat it
		        // as still uninitialized and try again next time. Which is the same as what
		        // happens if the ctor or any wrappers processing the ctor throws. This might
		        // end up fixing it if the resolution was a concurrency bug.

		        thenable.then(function (moduleObject) {
		          if (payload._status === Pending || payload._status === Uninitialized) {
		            // Transition to the next state.
		            var resolved = payload;
		            resolved._status = Resolved;
		            resolved._result = moduleObject;
		          }
		        }, function (error) {
		          if (payload._status === Pending || payload._status === Uninitialized) {
		            // Transition to the next state.
		            var rejected = payload;
		            rejected._status = Rejected;
		            rejected._result = error;
		          }
		        });
		        if (payload._status === Uninitialized) {
		          // In case, we're still uninitialized, then we're waiting for the thenable
		          // to resolve. Set it as pending in the meantime.
		          var pending = payload;
		          pending._status = Pending;
		          pending._result = thenable;
		        }
		      }
		      if (payload._status === Resolved) {
		        var moduleObject = payload._result;
		        {
		          if (moduleObject === undefined) {
		            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
		            // Break up imports to avoid accidentally parsing them as dependencies.
		            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		          }
		        }
		        {
		          if (!('default' in moduleObject)) {
		            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
		            // Break up imports to avoid accidentally parsing them as dependencies.
		            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		          }
		        }
		        return moduleObject.default;
		      } else {
		        throw payload._result;
		      }
		    }
		    function lazy(ctor) {
		      var payload = {
		        // We use these fields to store the result.
		        _status: Uninitialized,
		        _result: ctor
		      };
		      var lazyType = {
		        $$typeof: REACT_LAZY_TYPE,
		        _payload: payload,
		        _init: lazyInitializer
		      };
		      {
		        // In production, this would just set it on the object.
		        var defaultProps;
		        var propTypes; // $FlowFixMe

		        Object.defineProperties(lazyType, {
		          defaultProps: {
		            configurable: true,
		            get: function () {
		              return defaultProps;
		            },
		            set: function (newDefaultProps) {
		              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
		              defaultProps = newDefaultProps; // Match production behavior more closely:
		              // $FlowFixMe

		              Object.defineProperty(lazyType, 'defaultProps', {
		                enumerable: true
		              });
		            }
		          },
		          propTypes: {
		            configurable: true,
		            get: function () {
		              return propTypes;
		            },
		            set: function (newPropTypes) {
		              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
		              propTypes = newPropTypes; // Match production behavior more closely:
		              // $FlowFixMe

		              Object.defineProperty(lazyType, 'propTypes', {
		                enumerable: true
		              });
		            }
		          }
		        });
		      }
		      return lazyType;
		    }
		    function forwardRef(render) {
		      {
		        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		        } else if (typeof render !== 'function') {
		          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		        } else {
		          if (render.length !== 0 && render.length !== 2) {
		            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		          }
		        }
		        if (render != null) {
		          if (render.defaultProps != null || render.propTypes != null) {
		            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		          }
		        }
		      }
		      var elementType = {
		        $$typeof: REACT_FORWARD_REF_TYPE,
		        render: render
		      };
		      {
		        var ownName;
		        Object.defineProperty(elementType, 'displayName', {
		          enumerable: false,
		          configurable: true,
		          get: function () {
		            return ownName;
		          },
		          set: function (name) {
		            ownName = name; // The inner component shouldn't inherit this display name in most cases,
		            // because the component may be used elsewhere.
		            // But it's nice for anonymous functions to inherit the name,
		            // so that our component-stack generation logic will display their frames.
		            // An anonymous function generally suggests a pattern like:
		            //   React.forwardRef((props, ref) => {...});
		            // This kind of inner function is not used elsewhere so the side effect is okay.

		            if (!render.name && !render.displayName) {
		              render.displayName = name;
		            }
		          }
		        });
		      }
		      return elementType;
		    }
		    var REACT_MODULE_REFERENCE;
		    {
		      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		    }
		    function isValidElementType(type) {
		      if (typeof type === 'string' || typeof type === 'function') {
		        return true;
		      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

		      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
		        return true;
		      }
		      if (typeof type === 'object' && type !== null) {
		        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
		        // This needs to include all possible module reference object
		        // types supported by any Flight configuration anywhere since
		        // we don't know which Flight build this will end up being used
		        // with.
		        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		          return true;
		        }
		      }
		      return false;
		    }
		    function memo(type, compare) {
		      {
		        if (!isValidElementType(type)) {
		          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		        }
		      }
		      var elementType = {
		        $$typeof: REACT_MEMO_TYPE,
		        type: type,
		        compare: compare === undefined ? null : compare
		      };
		      {
		        var ownName;
		        Object.defineProperty(elementType, 'displayName', {
		          enumerable: false,
		          configurable: true,
		          get: function () {
		            return ownName;
		          },
		          set: function (name) {
		            ownName = name; // The inner component shouldn't inherit this display name in most cases,
		            // because the component may be used elsewhere.
		            // But it's nice for anonymous functions to inherit the name,
		            // so that our component-stack generation logic will display their frames.
		            // An anonymous function generally suggests a pattern like:
		            //   React.memo((props) => {...});
		            // This kind of inner function is not used elsewhere so the side effect is okay.

		            if (!type.name && !type.displayName) {
		              type.displayName = name;
		            }
		          }
		        });
		      }
		      return elementType;
		    }
		    function resolveDispatcher() {
		      var dispatcher = ReactCurrentDispatcher.current;
		      {
		        if (dispatcher === null) {
		          error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		        }
		      } // Will result in a null access error if accessed outside render phase. We
		      // intentionally don't throw our own error because this is in a hot path.
		      // Also helps ensure this is inlined.

		      return dispatcher;
		    }
		    function useContext(Context) {
		      var dispatcher = resolveDispatcher();
		      {
		        // TODO: add a more generic warning for invalid values.
		        if (Context._context !== undefined) {
		          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		          // and nobody should be using this in existing code.

		          if (realContext.Consumer === Context) {
		            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		          } else if (realContext.Provider === Context) {
		            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		          }
		        }
		      }
		      return dispatcher.useContext(Context);
		    }
		    function useState(initialState) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useState(initialState);
		    }
		    function useReducer(reducer, initialArg, init) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useReducer(reducer, initialArg, init);
		    }
		    function useRef(initialValue) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useRef(initialValue);
		    }
		    function useEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useEffect(create, deps);
		    }
		    function useInsertionEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useInsertionEffect(create, deps);
		    }
		    function useLayoutEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useLayoutEffect(create, deps);
		    }
		    function useCallback(callback, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useCallback(callback, deps);
		    }
		    function useMemo(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useMemo(create, deps);
		    }
		    function useImperativeHandle(ref, create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useImperativeHandle(ref, create, deps);
		    }
		    function useDebugValue(value, formatterFn) {
		      {
		        var dispatcher = resolveDispatcher();
		        return dispatcher.useDebugValue(value, formatterFn);
		      }
		    }
		    function useTransition() {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useTransition();
		    }
		    function useDeferredValue(value) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useDeferredValue(value);
		    }
		    function useId() {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useId();
		    }
		    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		    }

		    // Helpers to patch console.logs to avoid logging during side-effect free
		    // replaying on render function. This currently only patches the object
		    // lazily which won't cover if the log function was extracted eagerly.
		    // We could also eagerly patch the method.
		    var disabledDepth = 0;
		    var prevLog;
		    var prevInfo;
		    var prevWarn;
		    var prevError;
		    var prevGroup;
		    var prevGroupCollapsed;
		    var prevGroupEnd;
		    function disabledLog() {}
		    disabledLog.__reactDisabledLog = true;
		    function disableLogs() {
		      {
		        if (disabledDepth === 0) {
		          /* eslint-disable react-internal/no-production-logging */
		          prevLog = console.log;
		          prevInfo = console.info;
		          prevWarn = console.warn;
		          prevError = console.error;
		          prevGroup = console.group;
		          prevGroupCollapsed = console.groupCollapsed;
		          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		          var props = {
		            configurable: true,
		            enumerable: true,
		            value: disabledLog,
		            writable: true
		          }; // $FlowFixMe Flow thinks console is immutable.

		          Object.defineProperties(console, {
		            info: props,
		            log: props,
		            warn: props,
		            error: props,
		            group: props,
		            groupCollapsed: props,
		            groupEnd: props
		          });
		          /* eslint-enable react-internal/no-production-logging */
		        }

		        disabledDepth++;
		      }
		    }
		    function reenableLogs() {
		      {
		        disabledDepth--;
		        if (disabledDepth === 0) {
		          /* eslint-disable react-internal/no-production-logging */
		          var props = {
		            configurable: true,
		            enumerable: true,
		            writable: true
		          }; // $FlowFixMe Flow thinks console is immutable.

		          Object.defineProperties(console, {
		            log: assign({}, props, {
		              value: prevLog
		            }),
		            info: assign({}, props, {
		              value: prevInfo
		            }),
		            warn: assign({}, props, {
		              value: prevWarn
		            }),
		            error: assign({}, props, {
		              value: prevError
		            }),
		            group: assign({}, props, {
		              value: prevGroup
		            }),
		            groupCollapsed: assign({}, props, {
		              value: prevGroupCollapsed
		            }),
		            groupEnd: assign({}, props, {
		              value: prevGroupEnd
		            })
		          });
		          /* eslint-enable react-internal/no-production-logging */
		        }

		        if (disabledDepth < 0) {
		          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		        }
		      }
		    }
		    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		    var prefix;
		    function describeBuiltInComponentFrame(name, source, ownerFn) {
		      {
		        if (prefix === undefined) {
		          // Extract the VM specific prefix used by each line.
		          try {
		            throw Error();
		          } catch (x) {
		            var match = x.stack.trim().match(/\n( *(at )?)/);
		            prefix = match && match[1] || '';
		          }
		        } // We use the prefix to ensure our stacks line up with native stack frames.

		        return '\n' + prefix + name;
		      }
		    }
		    var reentry = false;
		    var componentFrameCache;
		    {
		      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		      componentFrameCache = new PossiblyWeakMap();
		    }
		    function describeNativeComponentFrame(fn, construct) {
		      // If something asked for a stack inside a fake render, it should get ignored.
		      if (!fn || reentry) {
		        return '';
		      }
		      {
		        var frame = componentFrameCache.get(fn);
		        if (frame !== undefined) {
		          return frame;
		        }
		      }
		      var control;
		      reentry = true;
		      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		      Error.prepareStackTrace = undefined;
		      var previousDispatcher;
		      {
		        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		        // for warnings.

		        ReactCurrentDispatcher$1.current = null;
		        disableLogs();
		      }
		      try {
		        // This should throw.
		        if (construct) {
		          // Something should be setting the props in the constructor.
		          var Fake = function () {
		            throw Error();
		          }; // $FlowFixMe

		          Object.defineProperty(Fake.prototype, 'props', {
		            set: function () {
		              // We use a throwing setter instead of frozen or non-writable props
		              // because that won't throw in a non-strict mode function.
		              throw Error();
		            }
		          });
		          if (typeof Reflect === 'object' && Reflect.construct) {
		            // We construct a different control for this case to include any extra
		            // frames added by the construct call.
		            try {
		              Reflect.construct(Fake, []);
		            } catch (x) {
		              control = x;
		            }
		            Reflect.construct(fn, [], Fake);
		          } else {
		            try {
		              Fake.call();
		            } catch (x) {
		              control = x;
		            }
		            fn.call(Fake.prototype);
		          }
		        } else {
		          try {
		            throw Error();
		          } catch (x) {
		            control = x;
		          }
		          fn();
		        }
		      } catch (sample) {
		        // This is inlined manually because closure doesn't do it for us.
		        if (sample && control && typeof sample.stack === 'string') {
		          // This extracts the first frame from the sample that isn't also in the control.
		          // Skipping one frame that we assume is the frame that calls the two.
		          var sampleLines = sample.stack.split('\n');
		          var controlLines = control.stack.split('\n');
		          var s = sampleLines.length - 1;
		          var c = controlLines.length - 1;
		          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		            // We expect at least one stack frame to be shared.
		            // Typically this will be the root most one. However, stack frames may be
		            // cut off due to maximum stack limits. In this case, one maybe cut off
		            // earlier than the other. We assume that the sample is longer or the same
		            // and there for cut off earlier. So we should find the root most frame in
		            // the sample somewhere in the control.
		            c--;
		          }
		          for (; s >= 1 && c >= 0; s--, c--) {
		            // Next we find the first one that isn't the same which should be the
		            // frame that called our sample function and the control.
		            if (sampleLines[s] !== controlLines[c]) {
		              // In V8, the first line is describing the message but other VMs don't.
		              // If we're about to return the first line, and the control is also on the same
		              // line, that's a pretty good indicator that our sample threw at same line as
		              // the control. I.e. before we entered the sample frame. So we ignore this result.
		              // This can happen if you passed a class to function component, or non-function.
		              if (s !== 1 || c !== 1) {
		                do {
		                  s--;
		                  c--; // We may still have similar intermediate frames from the construct call.
		                  // The next one that isn't the same should be our match though.

		                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                    // but we have a user-provided "displayName"
		                    // splice it in to make the stack more readable.

		                    if (fn.displayName && _frame.includes('<anonymous>')) {
		                      _frame = _frame.replace('<anonymous>', fn.displayName);
		                    }
		                    {
		                      if (typeof fn === 'function') {
		                        componentFrameCache.set(fn, _frame);
		                      }
		                    } // Return the line we found.

		                    return _frame;
		                  }
		                } while (s >= 1 && c >= 0);
		              }
		              break;
		            }
		          }
		        }
		      } finally {
		        reentry = false;
		        {
		          ReactCurrentDispatcher$1.current = previousDispatcher;
		          reenableLogs();
		        }
		        Error.prepareStackTrace = previousPrepareStackTrace;
		      } // Fallback to just using the name if we couldn't make it throw.

		      var name = fn ? fn.displayName || fn.name : '';
		      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
		      {
		        if (typeof fn === 'function') {
		          componentFrameCache.set(fn, syntheticFrame);
		        }
		      }
		      return syntheticFrame;
		    }
		    function describeFunctionComponentFrame(fn, source, ownerFn) {
		      {
		        return describeNativeComponentFrame(fn, false);
		      }
		    }
		    function shouldConstruct(Component) {
		      var prototype = Component.prototype;
		      return !!(prototype && prototype.isReactComponent);
		    }
		    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
		      if (type == null) {
		        return '';
		      }
		      if (typeof type === 'function') {
		        {
		          return describeNativeComponentFrame(type, shouldConstruct(type));
		        }
		      }
		      if (typeof type === 'string') {
		        return describeBuiltInComponentFrame(type);
		      }
		      switch (type) {
		        case REACT_SUSPENSE_TYPE:
		          return describeBuiltInComponentFrame('Suspense');
		        case REACT_SUSPENSE_LIST_TYPE:
		          return describeBuiltInComponentFrame('SuspenseList');
		      }
		      if (typeof type === 'object') {
		        switch (type.$$typeof) {
		          case REACT_FORWARD_REF_TYPE:
		            return describeFunctionComponentFrame(type.render);
		          case REACT_MEMO_TYPE:
		            // Memo may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
		          case REACT_LAZY_TYPE:
		            {
		              var lazyComponent = type;
		              var payload = lazyComponent._payload;
		              var init = lazyComponent._init;
		              try {
		                // Lazy may contain any component type so we recursively resolve it.
		                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		              } catch (x) {}
		            }
		        }
		      }
		      return '';
		    }
		    var loggedTypeFailures = {};
		    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
		    function setCurrentlyValidatingElement(element) {
		      {
		        if (element) {
		          var owner = element._owner;
		          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		        } else {
		          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		        }
		      }
		    }
		    function checkPropTypes(typeSpecs, values, location, componentName, element) {
		      {
		        // $FlowFixMe This is okay but Flow doesn't know it.
		        var has = Function.call.bind(hasOwnProperty);
		        for (var typeSpecName in typeSpecs) {
		          if (has(typeSpecs, typeSpecName)) {
		            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		            // fail the render phase where it didn't fail before. So we log it.
		            // After these have been cleaned up, we'll let them throw.

		            try {
		              // This is intentionally an invariant that gets caught. It's the same
		              // behavior as without this statement except with a better message.
		              if (typeof typeSpecs[typeSpecName] !== 'function') {
		                // eslint-disable-next-line react-internal/prod-error-codes
		                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		                err.name = 'Invariant Violation';
		                throw err;
		              }
		              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		            } catch (ex) {
		              error$1 = ex;
		            }
		            if (error$1 && !(error$1 instanceof Error)) {
		              setCurrentlyValidatingElement(element);
		              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
		              setCurrentlyValidatingElement(null);
		            }
		            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		              // Only monitor this failure once because there tends to be a lot of the
		              // same error.
		              loggedTypeFailures[error$1.message] = true;
		              setCurrentlyValidatingElement(element);
		              error('Failed %s type: %s', location, error$1.message);
		              setCurrentlyValidatingElement(null);
		            }
		          }
		        }
		      }
		    }
		    function setCurrentlyValidatingElement$1(element) {
		      {
		        if (element) {
		          var owner = element._owner;
		          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		          setExtraStackFrame(stack);
		        } else {
		          setExtraStackFrame(null);
		        }
		      }
		    }
		    var propTypesMisspellWarningShown;
		    {
		      propTypesMisspellWarningShown = false;
		    }
		    function getDeclarationErrorAddendum() {
		      if (ReactCurrentOwner.current) {
		        var name = getComponentNameFromType(ReactCurrentOwner.current.type);
		        if (name) {
		          return '\n\nCheck the render method of `' + name + '`.';
		        }
		      }
		      return '';
		    }
		    function getSourceInfoErrorAddendum(source) {
		      if (source !== undefined) {
		        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		        var lineNumber = source.lineNumber;
		        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		      }
		      return '';
		    }
		    function getSourceInfoErrorAddendumForProps(elementProps) {
		      if (elementProps !== null && elementProps !== undefined) {
		        return getSourceInfoErrorAddendum(elementProps.__source);
		      }
		      return '';
		    }
		    /**
		     * Warn if there's no key explicitly set on dynamic arrays of children or
		     * object keys are not valid. This allows us to keep track of children between
		     * updates.
		     */

		    var ownerHasKeyUseWarning = {};
		    function getCurrentComponentErrorInfo(parentType) {
		      var info = getDeclarationErrorAddendum();
		      if (!info) {
		        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
		        if (parentName) {
		          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		        }
		      }
		      return info;
		    }
		    /**
		     * Warn if the element doesn't have an explicit key assigned to it.
		     * This element is in an array. The array could grow and shrink or be
		     * reordered. All children that haven't already been validated are required to
		     * have a "key" property assigned to it. Error statuses are cached so a warning
		     * will only be shown once.
		     *
		     * @internal
		     * @param {ReactElement} element Element that requires a key.
		     * @param {*} parentType element's parent's type.
		     */

		    function validateExplicitKey(element, parentType) {
		      if (!element._store || element._store.validated || element.key != null) {
		        return;
		      }
		      element._store.validated = true;
		      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
		      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		        return;
		      }
		      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		      // property, it may be the creator of the child that's responsible for
		      // assigning it a key.

		      var childOwner = '';
		      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		        // Give the component that originally created this child.
		        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		      }
		      {
		        setCurrentlyValidatingElement$1(element);
		        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
		        setCurrentlyValidatingElement$1(null);
		      }
		    }
		    /**
		     * Ensure that every element either is passed in a static location, in an
		     * array with an explicit keys property defined, or in an object literal
		     * with valid key property.
		     *
		     * @internal
		     * @param {ReactNode} node Statically passed child of any type.
		     * @param {*} parentType node's parent's type.
		     */

		    function validateChildKeys(node, parentType) {
		      if (typeof node !== 'object') {
		        return;
		      }
		      if (isArray(node)) {
		        for (var i = 0; i < node.length; i++) {
		          var child = node[i];
		          if (isValidElement(child)) {
		            validateExplicitKey(child, parentType);
		          }
		        }
		      } else if (isValidElement(node)) {
		        // This element was passed in a valid location.
		        if (node._store) {
		          node._store.validated = true;
		        }
		      } else if (node) {
		        var iteratorFn = getIteratorFn(node);
		        if (typeof iteratorFn === 'function') {
		          // Entry iterators used to provide implicit keys,
		          // but now we print a separate warning for them later.
		          if (iteratorFn !== node.entries) {
		            var iterator = iteratorFn.call(node);
		            var step;
		            while (!(step = iterator.next()).done) {
		              if (isValidElement(step.value)) {
		                validateExplicitKey(step.value, parentType);
		              }
		            }
		          }
		        }
		      }
		    }
		    /**
		     * Given an element, validate that its props follow the propTypes definition,
		     * provided by the type.
		     *
		     * @param {ReactElement} element
		     */

		    function validatePropTypes(element) {
		      {
		        var type = element.type;
		        if (type === null || type === undefined || typeof type === 'string') {
		          return;
		        }
		        var propTypes;
		        if (typeof type === 'function') {
		          propTypes = type.propTypes;
		        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
		        // Note: Memo only checks outer props here.
		        // Inner props are checked in the reconciler.
		        type.$$typeof === REACT_MEMO_TYPE)) {
		          propTypes = type.propTypes;
		        } else {
		          return;
		        }
		        if (propTypes) {
		          // Intentionally inside to avoid triggering lazy initializers:
		          var name = getComponentNameFromType(type);
		          checkPropTypes(propTypes, element.props, 'prop', name, element);
		        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		          var _name = getComponentNameFromType(type);
		          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		        }
		        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		        }
		      }
		    }
		    /**
		     * Given a fragment, validate that it can only be provided with fragment props
		     * @param {ReactElement} fragment
		     */

		    function validateFragmentProps(fragment) {
		      {
		        var keys = Object.keys(fragment.props);
		        for (var i = 0; i < keys.length; i++) {
		          var key = keys[i];
		          if (key !== 'children' && key !== 'key') {
		            setCurrentlyValidatingElement$1(fragment);
		            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
		            setCurrentlyValidatingElement$1(null);
		            break;
		          }
		        }
		        if (fragment.ref !== null) {
		          setCurrentlyValidatingElement$1(fragment);
		          error('Invalid attribute `ref` supplied to `React.Fragment`.');
		          setCurrentlyValidatingElement$1(null);
		        }
		      }
		    }
		    function createElementWithValidation(type, props, children) {
		      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		      // succeed and there will likely be errors in render.

		      if (!validType) {
		        var info = '';
		        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		        }
		        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
		        if (sourceInfo) {
		          info += sourceInfo;
		        } else {
		          info += getDeclarationErrorAddendum();
		        }
		        var typeString;
		        if (type === null) {
		          typeString = 'null';
		        } else if (isArray(type)) {
		          typeString = 'array';
		        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		          typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		          info = ' Did you accidentally export a JSX literal instead of a component?';
		        } else {
		          typeString = typeof type;
		        }
		        {
		          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		        }
		      }
		      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		      // TODO: Drop this when these are no longer allowed as the type argument.

		      if (element == null) {
		        return element;
		      } // Skip key warning if the type isn't valid since our key validation logic
		      // doesn't expect a non-string/function type and can throw confusing errors.
		      // We don't want exception behavior to differ between dev and prod.
		      // (Rendering will throw with a helpful message and as soon as the type is
		      // fixed, the key warnings will appear.)

		      if (validType) {
		        for (var i = 2; i < arguments.length; i++) {
		          validateChildKeys(arguments[i], type);
		        }
		      }
		      if (type === REACT_FRAGMENT_TYPE) {
		        validateFragmentProps(element);
		      } else {
		        validatePropTypes(element);
		      }
		      return element;
		    }
		    var didWarnAboutDeprecatedCreateFactory = false;
		    function createFactoryWithValidation(type) {
		      var validatedFactory = createElementWithValidation.bind(null, type);
		      validatedFactory.type = type;
		      {
		        if (!didWarnAboutDeprecatedCreateFactory) {
		          didWarnAboutDeprecatedCreateFactory = true;
		          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		        } // Legacy hook: remove it

		        Object.defineProperty(validatedFactory, 'type', {
		          enumerable: false,
		          get: function () {
		            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
		            Object.defineProperty(this, 'type', {
		              value: type
		            });
		            return type;
		          }
		        });
		      }
		      return validatedFactory;
		    }
		    function cloneElementWithValidation(element, props, children) {
		      var newElement = cloneElement.apply(this, arguments);
		      for (var i = 2; i < arguments.length; i++) {
		        validateChildKeys(arguments[i], newElement.type);
		      }
		      validatePropTypes(newElement);
		      return newElement;
		    }
		    function startTransition(scope, options) {
		      var prevTransition = ReactCurrentBatchConfig.transition;
		      ReactCurrentBatchConfig.transition = {};
		      var currentTransition = ReactCurrentBatchConfig.transition;
		      {
		        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		      }
		      try {
		        scope();
		      } finally {
		        ReactCurrentBatchConfig.transition = prevTransition;
		        {
		          if (prevTransition === null && currentTransition._updatedFibers) {
		            var updatedFibersCount = currentTransition._updatedFibers.size;
		            if (updatedFibersCount > 10) {
		              warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		            }
		            currentTransition._updatedFibers.clear();
		          }
		        }
		      }
		    }
		    var didWarnAboutMessageChannel = false;
		    var enqueueTaskImpl = null;
		    function enqueueTask(task) {
		      if (enqueueTaskImpl === null) {
		        try {
		          // read require off the module object to get around the bundlers.
		          // we don't want them to detect a require and bundle a Node polyfill.
		          var requireString = ('require' + Math.random()).slice(0, 7);
		          var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		          // version of setImmediate, bypassing fake timers if any.

		          enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		        } catch (_err) {
		          // we're in a browser
		          // we can't use regular timers because they may still be faked
		          // so we try MessageChannel+postMessage instead
		          enqueueTaskImpl = function (callback) {
		            {
		              if (didWarnAboutMessageChannel === false) {
		                didWarnAboutMessageChannel = true;
		                if (typeof MessageChannel === 'undefined') {
		                  error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		                }
		              }
		            }
		            var channel = new MessageChannel();
		            channel.port1.onmessage = callback;
		            channel.port2.postMessage(undefined);
		          };
		        }
		      }
		      return enqueueTaskImpl(task);
		    }
		    var actScopeDepth = 0;
		    var didWarnNoAwaitAct = false;
		    function act(callback) {
		      {
		        // `act` calls can be nested, so we track the depth. This represents the
		        // number of `act` scopes on the stack.
		        var prevActScopeDepth = actScopeDepth;
		        actScopeDepth++;
		        if (ReactCurrentActQueue.current === null) {
		          // This is the outermost `act` scope. Initialize the queue. The reconciler
		          // will detect the queue and use it instead of Scheduler.
		          ReactCurrentActQueue.current = [];
		        }
		        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		        var result;
		        try {
		          // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		          // set to `true` while the given callback is executed, not for updates
		          // triggered during an async event, because this is how the legacy
		          // implementation of `act` behaved.
		          ReactCurrentActQueue.isBatchingLegacy = true;
		          result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		          // which flushed updates immediately after the scope function exits, even
		          // if it's an async function.

		          if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		            var queue = ReactCurrentActQueue.current;
		            if (queue !== null) {
		              ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		              flushActQueue(queue);
		            }
		          }
		        } catch (error) {
		          popActScope(prevActScopeDepth);
		          throw error;
		        } finally {
		          ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		        }
		        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		          var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		          // for it to resolve before exiting the current scope.

		          var wasAwaited = false;
		          var thenable = {
		            then: function (resolve, reject) {
		              wasAwaited = true;
		              thenableResult.then(function (returnValue) {
		                popActScope(prevActScopeDepth);
		                if (actScopeDepth === 0) {
		                  // We've exited the outermost act scope. Recursively flush the
		                  // queue until there's no remaining work.
		                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		                } else {
		                  resolve(returnValue);
		                }
		              }, function (error) {
		                // The callback threw an error.
		                popActScope(prevActScopeDepth);
		                reject(error);
		              });
		            }
		          };
		          {
		            if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		              // eslint-disable-next-line no-undef
		              Promise.resolve().then(function () {}).then(function () {
		                if (!wasAwaited) {
		                  didWarnNoAwaitAct = true;
		                  error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		                }
		              });
		            }
		          }
		          return thenable;
		        } else {
		          var returnValue = result; // The callback is not an async function. Exit the current scope
		          // immediately, without awaiting.

		          popActScope(prevActScopeDepth);
		          if (actScopeDepth === 0) {
		            // Exiting the outermost act scope. Flush the queue.
		            var _queue = ReactCurrentActQueue.current;
		            if (_queue !== null) {
		              flushActQueue(_queue);
		              ReactCurrentActQueue.current = null;
		            } // Return a thenable. If the user awaits it, we'll flush again in
		            // case additional work was scheduled by a microtask.

		            var _thenable = {
		              then: function (resolve, reject) {
		                // Confirm we haven't re-entered another `act` scope, in case
		                // the user does something weird like await the thenable
		                // multiple times.
		                if (ReactCurrentActQueue.current === null) {
		                  // Recursively flush the queue until there's no remaining work.
		                  ReactCurrentActQueue.current = [];
		                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		                } else {
		                  resolve(returnValue);
		                }
		              }
		            };
		            return _thenable;
		          } else {
		            // Since we're inside a nested `act` scope, the returned thenable
		            // immediately resolves. The outer scope will flush the queue.
		            var _thenable2 = {
		              then: function (resolve, reject) {
		                resolve(returnValue);
		              }
		            };
		            return _thenable2;
		          }
		        }
		      }
		    }
		    function popActScope(prevActScopeDepth) {
		      {
		        if (prevActScopeDepth !== actScopeDepth - 1) {
		          error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		        }
		        actScopeDepth = prevActScopeDepth;
		      }
		    }
		    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		      {
		        var queue = ReactCurrentActQueue.current;
		        if (queue !== null) {
		          try {
		            flushActQueue(queue);
		            enqueueTask(function () {
		              if (queue.length === 0) {
		                // No additional work was scheduled. Finish.
		                ReactCurrentActQueue.current = null;
		                resolve(returnValue);
		              } else {
		                // Keep flushing work until there's none left.
		                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		              }
		            });
		          } catch (error) {
		            reject(error);
		          }
		        } else {
		          resolve(returnValue);
		        }
		      }
		    }
		    var isFlushing = false;
		    function flushActQueue(queue) {
		      {
		        if (!isFlushing) {
		          // Prevent re-entrance.
		          isFlushing = true;
		          var i = 0;
		          try {
		            for (; i < queue.length; i++) {
		              var callback = queue[i];
		              do {
		                callback = callback(true);
		              } while (callback !== null);
		            }
		            queue.length = 0;
		          } catch (error) {
		            // If something throws, leave the remaining callbacks on the queue.
		            queue = queue.slice(i + 1);
		            throw error;
		          } finally {
		            isFlushing = false;
		          }
		        }
		      }
		    }
		    var createElement$1 = createElementWithValidation;
		    var cloneElement$1 = cloneElementWithValidation;
		    var createFactory = createFactoryWithValidation;
		    var Children = {
		      map: mapChildren,
		      forEach: forEachChildren,
		      count: countChildren,
		      toArray: toArray,
		      only: onlyChild
		    };
		    exports.Children = Children;
		    exports.Component = Component;
		    exports.Fragment = REACT_FRAGMENT_TYPE;
		    exports.Profiler = REACT_PROFILER_TYPE;
		    exports.PureComponent = PureComponent;
		    exports.StrictMode = REACT_STRICT_MODE_TYPE;
		    exports.Suspense = REACT_SUSPENSE_TYPE;
		    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		    exports.cloneElement = cloneElement$1;
		    exports.createContext = createContext;
		    exports.createElement = createElement$1;
		    exports.createFactory = createFactory;
		    exports.createRef = createRef;
		    exports.forwardRef = forwardRef;
		    exports.isValidElement = isValidElement;
		    exports.lazy = lazy;
		    exports.memo = memo;
		    exports.startTransition = startTransition;
		    exports.unstable_act = act;
		    exports.useCallback = useCallback;
		    exports.useContext = useContext;
		    exports.useDebugValue = useDebugValue;
		    exports.useDeferredValue = useDeferredValue;
		    exports.useEffect = useEffect;
		    exports.useId = useId;
		    exports.useImperativeHandle = useImperativeHandle;
		    exports.useInsertionEffect = useInsertionEffect;
		    exports.useLayoutEffect = useLayoutEffect;
		    exports.useMemo = useMemo;
		    exports.useReducer = useReducer;
		    exports.useRef = useRef;
		    exports.useState = useState;
		    exports.useSyncExternalStore = useSyncExternalStore;
		    exports.useTransition = useTransition;
		    exports.version = ReactVersion;
		    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		    }
		  })();
		} 
	} (react_development, react_development.exports));
	return react_development.exports;
}

if (process.env.NODE_ENV === 'production') {
  react.exports = requireReact_production_min();
} else {
  react.exports = requireReact_development();
}

var reactExports = react.exports;
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
classnames.exports;

(function (module) {
	/* global define */

	(function () {

	  var hasOwn = {}.hasOwnProperty;
	  function classNames() {
	    var classes = [];
	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (!arg) continue;
	      var argType = typeof arg;
	      if (argType === 'string' || argType === 'number') {
	        classes.push(arg);
	      } else if (Array.isArray(arg)) {
	        if (arg.length) {
	          var inner = classNames.apply(null, arg);
	          if (inner) {
	            classes.push(inner);
	          }
	        }
	      } else if (argType === 'object') {
	        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
	          classes.push(arg.toString());
	          continue;
	        }
	        for (var key in arg) {
	          if (hasOwn.call(arg, key) && arg[key]) {
	            classes.push(key);
	          }
	        }
	      }
	    }
	    return classes.join(' ');
	  }
	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})(); 
} (classnames));

var classnamesExports = classnames.exports;
var s = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = options || {};
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements
    } = state;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }
});

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

async function convertValueToCoords(state, value) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value(state) : value;

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: 'offset',
    options: value,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || '').toLowerCase() : '';
}

let uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map(item => item.brand + "/" + item.version).join(' ');
    return uaString;
  }
  return navigator.userAgent;
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try to use feature detection here instead.
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;

  // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (backdropFilter ? backdropFilter !== 'none' : false) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective'].some(value => css.willChange.includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => {
    // Add type check for old browsers.
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}

/**
 * Determines whether or not `.getBoundingClientRect()` is affected by visual
 * viewport offsets. In Safari, the `x`/`y` offsets are values relative to the
 * visual viewport, while in other engines, they are values relative to the
 * layout viewport.
 */
function isClientRectVisualViewportBased() {
  // TODO: Try to use feature detection here instead. Feature detection for
  // this can fail in various ways, making the userAgent check the most
  // reliable:
  // • Always-visible scrollbar or not
  // • Width of <html>

  // Is Safari.
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

const FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const win = domElement ? getWindow(domElement) : window;
  const addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  let x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  let y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    // `getParentNode` will never return a `Document` due to the fallback
    // check, so it's either the <html> or <body> element.
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const mutableRect = {
      ...clippingAncestor
    };
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      const win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, true, strategy === 'fixed', offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
function h(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===r&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e));}}h(":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}");const f=(e,t,r)=>{let o=null;return function(...l){const n=()=>{o=null,r||e.apply(this,l);};r&&!o&&(e.apply(this,l),o=setTimeout(n,t)),r||(o&&clearTimeout(o),o=setTimeout(n,t));}},y="DEFAULT_TOOLTIP_ID",w={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},_=reactExports.createContext({getTooltipData:()=>w});function g(e=y){return reactExports.useContext(_).getTooltipData(e)}const A="undefined"!=typeof window?reactExports.useLayoutEffect:reactExports.useEffect,k=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:r=null,place:o="top",offset:l=10,strategy:n="absolute",middlewares:i=[offset(Number(l)),flip(),shift({padding:5})]})=>{if(!e)return {tooltipStyles:{},tooltipArrowStyles:{},place:o};if(null===t)return {tooltipStyles:{},tooltipArrowStyles:{},place:o};const c=i;return r?(c.push(arrow({element:r,padding:5})),computePosition(e,t,{placement:o,strategy:n,middleware:c}).then((({x:e,y:t,placement:r,middlewareData:o})=>{var l,n;const i={left:`${e}px`,top:`${t}px`},{x:c,y:a}=null!==(l=o.arrow)&&void 0!==l?l:{x:0,y:0};return {tooltipStyles:i,tooltipArrowStyles:{left:null!=c?`${c}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",[null!==(n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]])&&void 0!==n?n:"bottom"]:"-4px"},place:r}}))):computePosition(e,t,{placement:"bottom",strategy:n,middleware:c}).then((({x:e,y:t,placement:r})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:r})))};var E={tooltip:"styles-module_tooltip__mnnfp",fixed:"styles-module_fixed__7ciUi",arrow:"styles-module_arrow__K0L3T",noArrow:"styles-module_noArrow__T8y2L",clickable:"styles-module_clickable__Bv9o7",show:"styles-module_show__2NboJ",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};h(".styles-module_tooltip__mnnfp{border-radius:3px;font-size:90%;left:0;opacity:0;padding:8px 16px;pointer-events:none;position:absolute;top:0;transition:opacity .3s ease-out;visibility:hidden;width:max-content;will-change:opacity,visibility}.styles-module_fixed__7ciUi{position:fixed}.styles-module_arrow__K0L3T{background:inherit;height:8px;position:absolute;transform:rotate(45deg);width:8px}.styles-module_noArrow__T8y2L{display:none}.styles-module_clickable__Bv9o7{pointer-events:auto}.styles-module_show__2NboJ{opacity:var(--rt-opacity);visibility:visible}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}");const T=({id:t,className:o,classNameArrow:l,variant:n="dark",anchorId:a,anchorSelect:u,place:d="top",offset:p=10,events:v=["hover"],openOnClick:m=!1,positionStrategy:h="absolute",middlewares:y,wrapper:w,delayShow:_=0,delayHide:b=0,float:S=!1,hidden:T=!1,noArrow:x=!1,clickable:N=!1,closeOnEsc:O=!1,style:L,position:R,afterShow:$,afterHide:C,content:H,contentWrapperRef:I,isOpen:W,setIsOpen:j,activeAnchor:q,setActiveAnchor:D})=>{const B=reactExports.useRef(null),K=reactExports.useRef(null),X=reactExports.useRef(null),J=reactExports.useRef(null),[M,z]=reactExports.useState(d),[U,F]=reactExports.useState({}),[P,Z]=reactExports.useState({}),[Y,G]=reactExports.useState(!1),[Q,V]=reactExports.useState(!1),ee=reactExports.useRef(!1),te=reactExports.useRef(null),{anchorRefs:re,setActiveAnchor:oe}=g(t),le=reactExports.useRef(!1),[ne,ie]=reactExports.useState([]),ce=reactExports.useRef(!1),ae=m||v.includes("click");A((()=>(ce.current=!0,()=>{ce.current=!1;})),[]),reactExports.useEffect((()=>{if(!Y){const e=setTimeout((()=>{V(!1);}),150);return ()=>{clearTimeout(e);}}return ()=>null}),[Y]);const se=e=>{ce.current&&(e&&V(!0),setTimeout((()=>{ce.current&&(null==j||j(e),void 0===W&&G(e));}),10));};reactExports.useEffect((()=>{if(void 0===W)return ()=>null;W&&V(!0);const e=setTimeout((()=>{G(W);}),10);return ()=>{clearTimeout(e);}}),[W]),reactExports.useEffect((()=>{Y!==ee.current&&(ee.current=Y,Y?null==$||$():null==C||C());}),[Y]);const ue=(e=b)=>{J.current&&clearTimeout(J.current),J.current=setTimeout((()=>{le.current||se(!1);}),e);},de=e=>{var t;if(!e)return;const r=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==r?void 0:r.isConnected))return D(null),void oe({current:null});_?(X.current&&clearTimeout(X.current),X.current=setTimeout((()=>{se(!0);}),_)):se(!0),D(r),oe({current:r}),J.current&&clearTimeout(J.current);},pe=()=>{N?ue(b||100):b?ue():se(!1),X.current&&clearTimeout(X.current);},ve=({x:e,y:t})=>{k({place:d,offset:p,elementReference:{getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})},tooltipReference:B.current,tooltipArrowReference:K.current,strategy:h,middlewares:y}).then((e=>{Object.keys(e.tooltipStyles).length&&F(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&Z(e.tooltipArrowStyles),z(e.place);}));},me=e=>{if(!e)return;const t=e,r={x:t.clientX,y:t.clientY};ve(r),te.current=r;},he=e=>{de(e),b&&ue();},fe=e=>{var t;[document.querySelector(`[id='${a}']`),...ne].some((t=>null==t?void 0:t.contains(e.target)))||(null===(t=B.current)||void 0===t?void 0:t.contains(e.target))||se(!1);},ye=e=>{"Escape"===e.key&&se(!1);},we=f(de,50,!0),_e=f(pe,50,!0);reactExports.useEffect((()=>{var e,t;const r=new Set(re);ne.forEach((e=>{r.add({current:e});}));const o=document.querySelector(`[id='${a}']`);o&&r.add({current:o}),O&&window.addEventListener("keydown",ye);const l=[];ae?(window.addEventListener("click",fe),l.push({event:"click",listener:he})):(l.push({event:"mouseenter",listener:we},{event:"mouseleave",listener:_e},{event:"focus",listener:we},{event:"blur",listener:_e}),S&&l.push({event:"mousemove",listener:me}));const n=()=>{le.current=!0;},i=()=>{le.current=!1,pe();};return N&&!ae&&(null===(e=B.current)||void 0===e||e.addEventListener("mouseenter",n),null===(t=B.current)||void 0===t||t.addEventListener("mouseleave",i)),l.forEach((({event:e,listener:t})=>{r.forEach((r=>{var o;null===(o=r.current)||void 0===o||o.addEventListener(e,t);}));})),()=>{var e,t;ae&&window.removeEventListener("click",fe),O&&window.removeEventListener("keydown",ye),N&&!ae&&(null===(e=B.current)||void 0===e||e.removeEventListener("mouseenter",n),null===(t=B.current)||void 0===t||t.removeEventListener("mouseleave",i)),l.forEach((({event:e,listener:t})=>{r.forEach((r=>{var o;null===(o=r.current)||void 0===o||o.removeEventListener(e,t);}));}));}}),[Q,re,ne,O,v]),reactExports.useEffect((()=>{let e=null!=u?u:"";!e&&t&&(e=`[data-tooltip-id='${t}']`);const r=new MutationObserver((r=>{const o=[];r.forEach((r=>{if("attributes"===r.type&&"data-tooltip-id"===r.attributeName){r.target.getAttribute("data-tooltip-id")===t&&o.push(r.target);}if("childList"===r.type&&(q&&[...r.removedNodes].some((e=>{var t;return !!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,q))&&(V(!1),se(!1),D(null),!0)})),e))try{const t=[...r.addedNodes].filter((e=>1===e.nodeType));o.push(...t.filter((t=>t.matches(e)))),o.push(...t.flatMap((t=>[...t.querySelectorAll(e)])));}catch(e){}})),o.length&&ie((e=>[...e,...o]));}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{r.disconnect();}}),[t,u,q]);const be=()=>{R?ve(R):S?te.current&&ve(te.current):k({place:d,offset:p,elementReference:q,tooltipReference:B.current,tooltipArrowReference:K.current,strategy:h,middlewares:y}).then((e=>{ce.current&&(Object.keys(e.tooltipStyles).length&&F(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&Z(e.tooltipArrowStyles),z(e.place));}));};reactExports.useEffect((()=>{be();}),[Y,q,H,L,d,p,h,R]),reactExports.useEffect((()=>{if(!(null==I?void 0:I.current))return ()=>null;const e=new ResizeObserver((()=>{be();}));return e.observe(I.current),()=>{e.disconnect();}}),[H,null==I?void 0:I.current]),reactExports.useEffect((()=>{var e;const t=document.querySelector(`[id='${a}']`),r=[...ne,t];q&&r.includes(q)||D(null!==(e=ne[0])&&void 0!==e?e:t);}),[a,ne,q]),reactExports.useEffect((()=>()=>{X.current&&clearTimeout(X.current),J.current&&clearTimeout(J.current);}),[]),reactExports.useEffect((()=>{let e=u;if(!e&&t&&(e=`[data-tooltip-id='${t}']`),e)try{const t=Array.from(document.querySelectorAll(e));ie(t);}catch(e){ie([]);}}),[t,u]);const ge=!T&&H&&Y&&Object.keys(U).length>0;return Q?React.createElement(w,{id:t,role:"tooltip",className:s("react-tooltip",E.tooltip,E[n],o,`react-tooltip__place-${M}`,{[E.show]:ge,[E.fixed]:"fixed"===h,[E.clickable]:N}),style:{...L,...U},ref:B},H,React.createElement(w,{className:s("react-tooltip-arrow",E.arrow,l,{[E.noArrow]:x}),style:P,ref:K})):null},x=({content:t})=>React.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),N=({id:t,anchorId:o,anchorSelect:l,content:n,html:a,render:s,className:u,classNameArrow:d,variant:p="dark",place:v="top",offset:m=10,wrapper:h="div",children:f=null,events:y=["hover"],openOnClick:w=!1,positionStrategy:_="absolute",middlewares:b,delayShow:S=0,delayHide:A=0,float:k=!1,hidden:E=!1,noArrow:N=!1,clickable:O=!1,closeOnEsc:L=!1,style:R,position:$,isOpen:C,setIsOpen:H,afterShow:I,afterHide:W})=>{const[j,q]=reactExports.useState(n),[D,B]=reactExports.useState(a),[K,X]=reactExports.useState(v),[J,M]=reactExports.useState(p),[z,U]=reactExports.useState(m),[F,P]=reactExports.useState(S),[Z,Y]=reactExports.useState(A),[G,Q]=reactExports.useState(k),[V,ee]=reactExports.useState(E),[te,re]=reactExports.useState(h),[oe,le]=reactExports.useState(y),[ne,ie]=reactExports.useState(_),[ce,ae]=reactExports.useState(null),{anchorRefs:se,activeAnchor:ue}=g(t),de=e=>null==e?void 0:e.getAttributeNames().reduce(((t,r)=>{var o;if(r.startsWith("data-tooltip-")){t[r.replace(/^data-tooltip-/,"")]=null!==(o=null==e?void 0:e.getAttribute(r))&&void 0!==o?o:null;}return t}),{}),pe=e=>{const t={place:e=>{var t;X(null!==(t=e)&&void 0!==t?t:v);},content:e=>{q(null!=e?e:n);},html:e=>{B(null!=e?e:a);},variant:e=>{var t;M(null!==(t=e)&&void 0!==t?t:p);},offset:e=>{U(null===e?m:Number(e));},wrapper:e=>{var t;re(null!==(t=e)&&void 0!==t?t:h);},events:e=>{const t=null==e?void 0:e.split(" ");le(null!=t?t:y);},"position-strategy":e=>{var t;ie(null!==(t=e)&&void 0!==t?t:_);},"delay-show":e=>{P(null===e?S:Number(e));},"delay-hide":e=>{Y(null===e?A:Number(e));},float:e=>{Q(null===e?k:"true"===e);},hidden:e=>{ee(null===e?E:"true"===e);}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,r])=>{var o;null===(o=t[e])||void 0===o||o.call(t,r);}));};reactExports.useEffect((()=>{q(n);}),[n]),reactExports.useEffect((()=>{B(a);}),[a]),reactExports.useEffect((()=>{X(v);}),[v]),reactExports.useEffect((()=>{M(p);}),[p]),reactExports.useEffect((()=>{U(m);}),[m]),reactExports.useEffect((()=>{P(S);}),[S]),reactExports.useEffect((()=>{Y(A);}),[A]),reactExports.useEffect((()=>{Q(k);}),[k]),reactExports.useEffect((()=>{ee(E);}),[E]),reactExports.useEffect((()=>{ie(_);}),[_]),reactExports.useEffect((()=>{var e;const r=new Set(se);let n=l;if(!n&&t&&(n=`[data-tooltip-id='${t}']`),n)try{document.querySelectorAll(n).forEach((e=>{r.add({current:e});}));}catch(e){console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`);}const i=document.querySelector(`[id='${o}']`);if(i&&r.add({current:i}),!r.size)return ()=>null;const c=null!==(e=null!=ce?ce:i)&&void 0!==e?e:ue.current,a=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const r=de(c);pe(r);}));})),s={attributes:!0,childList:!1,subtree:!1};if(c){const e=de(c);pe(e),a.observe(c,s);}return ()=>{a.disconnect();}}),[se,ue,ce,o,l]);let ve=f;const me=reactExports.useRef(null);if(s){const t=s({content:null!=j?j:null,activeAnchor:ce});ve=t?React.createElement("div",{ref:me,className:"react-tooltip-content-wrapper"},t):null;}else j&&(ve=j);D&&(ve=React.createElement(x,{content:D}));const he={id:t,anchorId:o,anchorSelect:l,className:u,classNameArrow:d,content:ve,contentWrapperRef:me,place:K,variant:J,offset:z,wrapper:te,events:oe,openOnClick:w,positionStrategy:ne,middlewares:b,delayShow:F,delayHide:Z,float:G,hidden:V,noArrow:N,clickable:O,closeOnEsc:L,style:R,position:$,isOpen:C,setIsOpen:H,afterShow:I,afterHide:W,activeAnchor:ce,setActiveAnchor:e=>ae(e)};return React.createElement(T,{...he})};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}

// import 'react-tooltip/dist/react-tooltip.css'
// import './Tooltip.css'

// ----------------------------------------------------------------------
Tooltip.propTypes = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string
};
Tooltip.defaultProps = {
  children: PropTypes__default["default"].node
};
function Tooltip({
  children,
  className,
  ...props
}) {
  const id = `tip-${v4()}`;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: `ocu-tooltip ${className || ''}`
  }), /*#__PURE__*/React.createElement("button", {
    "data-tooltip-id": "my-tooltip",
    "data-tooltip-place": "top",
    className: "icon",
    style: {
      lineHeight: 0
    },
    id: id
  }, "?"), /*#__PURE__*/React.createElement(N, {
    anchorSelect: `#${id}`,
    className: 'tooltip-content'
  }, /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  })));
}

exports.Tooltip = Tooltip;

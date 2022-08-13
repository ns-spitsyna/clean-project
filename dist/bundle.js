/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/vue/dist/vue.runtime.esm.js":
/*!***************************************************!*\
  !*** ../node_modules/vue/dist/vue.runtime.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof __webpack_require__.g !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) {
    return t;
  });

  if (!valid && haveExpectedTypes) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType(value, type, vm) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}

var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */

function getType(fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(typeof value) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + styleValue(value, expectedType);
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + styleValue(value, receivedType) + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];

function isExplicable(value) {
  return EXPLICABLE_TYPES.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function (target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = (key in target);
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };

    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode) // #9658, #10391
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallbackRender, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes = this.$slots[name] || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }

  return eventKeyCode === undefined;
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode( // we know it's MountedComponentVNode but flow doesn't
vnode, // activeInstance in lifecycle state
parent) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
      }

      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : 0);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : 0; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        var info = "callback for watcher \"" + this.expression + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn("The computed property \"" + key + "\" is already defined as a method.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      var info = "callback for immediate watcher \"" + watcher.expression + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var entry = cache[key];

    if (entry) {
      var name = entry.name;

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var entry = cache[key];

  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;

      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance
        };
        keys.push(keyToCache); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }

        this.vnodeToCache = null;
      }
    }
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  updated: function updated() {
    this.cacheVNode();
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.14';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecessary `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue);

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./App.vue":
/*!*****************!*\
  !*** ./App.vue ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=472cff63& */ "./App.vue?vue&type=template&id=472cff63&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./App.vue?vue&type=template&id=472cff63&":
/*!************************************************!*\
  !*** ./App.vue?vue&type=template&id=472cff63& ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=472cff63& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=472cff63&");


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=472cff63&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=472cff63& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "app" } }, [
      _c("h1", [_vm._v("Ghbdtfgdfgsd")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*********************************************************************!*\
  !*** ../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./App.vue");



vue__WEBPACK_IMPORTED_MODULE_2__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
}).$mount('#app');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUFBLGdFQUFBLEdBQTJCLEtBQTNCO0FBRUEsSUFBSUEsMkNBQUosQ0FBUTtFQUNKbE8sTUFBTSxFQUFFa3pCLENBQUMsSUFBSUEsQ0FBQyxDQUFDNEMsZ0RBQUQ7QUFEVixDQUFSLEVBRUdsckIsTUFGSCxDQUVVLE1BRlYsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zdHlsZXMuc2Nzcz9iODY1Iiwid2VicGFjazovLy8uL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vQXBwLnZ1ZT84N2M5Iiwid2VicGFjazovLy8uL0FwcC52dWU/OTFiYyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjE0XG4gKiAoYykgMjAxNC0yMDIxIEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qICAqL1xuXG52YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICByZXR1cm4gdiA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gIHJldHVybiB2ID09PSBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKVxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsIGlzIGEgdmFsaWQgYXJyYXkgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KFN0cmluZyh2YWwpKTtcbiAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIChcbiAgICBpc0RlZih2YWwpICYmXG4gICAgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICApXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgIDogU3RyaW5nKHZhbClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGlucHV0IHZhbHVlIHRvIGEgbnVtYmVyIGZvciBwZXJzaXN0ZW5jZS5cbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICovXG5mdW5jdGlvbiB0b051bWJlciAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcCAoXG4gIHN0cixcbiAgZXhwZWN0c0xvd2VyQ2FzZVxuKSB7XG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XG4gICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQnLCB0cnVlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQsXG4gKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICogQnV0IHJlbW92aW5nIGl0IHdvdWxkIG1lYW4gYnJlYWtpbmcgY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpblxuICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG5cbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICByZXR1cm4gYm91bmRGblxufVxuXG5mdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmbi5iaW5kKGN0eClcbn1cblxudmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICA/IG5hdGl2ZUJpbmRcbiAgOiBwb2x5ZmlsbEJpbmQ7XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0pIHtcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKi9cbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaXNPYmplY3RBID0gaXNPYmplY3QoYSk7XG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgbG9vc2VseSBlcXVhbCB2YWx1ZSBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgU1NSX0FUVFIgPSAnZGF0YS1zZXJ2ZXItcmVuZGVyZWQnO1xuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJyxcbiAgJ3NlcnZlclByZWZldGNoJ1xuXTtcblxuLyogICovXG5cblxuXG52YXIgY29uZmlnID0gKHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAqL1xuICBwcm9kdWN0aW9uVGlwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBkZXZ0b29sc1xuICAgKi9cbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcbiAgICovXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAqL1xuICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICovXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1Ncbn0pO1xuXG4vKiAgKi9cblxuLyoqXG4gKiB1bmljb2RlIGxldHRlcnMgdXNlZCBmb3IgcGFyc2luZyBodG1sIHRhZ3MsIGNvbXBvbmVudCBuYW1lcyBhbmQgcHJvcGVydHkgcGF0aHMuXG4gKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICovXG52YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqL1xuZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qICAqL1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaW5XZWV4ID0gdHlwZW9mIFdYRW52aXJvbm1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybTtcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gKFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDApIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdhbmRyb2lkJyk7XG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xudmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG52YXIgaXNQaGFudG9tSlMgPSBVQSAmJiAvcGhhbnRvbWpzLy50ZXN0KFVBKTtcbnZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcblxudmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuaWYgKGluQnJvd3Nlcikge1xuICB0cnkge1xuICAgIHZhciBvcHRzID0ge307XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wdHMsICdwYXNzaXZlJywgKHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8yODVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdC1wYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbi8vIHRoaXMgbmVlZHMgdG8gYmUgbGF6eS1ldmFsZWQgYmVjYXVzZSB2dWUgbWF5IGJlIHJlcXVpcmVkIGJlZm9yZVxuLy8gdnVlLXNlcnZlci1yZW5kZXJlciBjYW4gc2V0IFZVRV9FTlZcbnZhciBfaXNTZXJ2ZXI7XG52YXIgaXNTZXJ2ZXJSZW5kZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChfaXNTZXJ2ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghaW5Ccm93c2VyICYmICFpbldlZXggJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGRldGVjdCBwcmVzZW5jZSBvZiB2dWUtc2VydmVyLXJlbmRlcmVyIGFuZCBhdm9pZFxuICAgICAgLy8gV2VicGFjayBzaGltbWluZyB0aGUgcHJvY2Vzc1xuICAgICAgX2lzU2VydmVyID0gZ2xvYmFsWydwcm9jZXNzJ10gJiYgZ2xvYmFsWydwcm9jZXNzJ10uZW52LlZVRV9FTlYgPT09ICdzZXJ2ZXInO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaXNTZXJ2ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9pc1NlcnZlclxufTtcblxuLy8gZGV0ZWN0IGRldnRvb2xzXG52YXIgZGV2dG9vbHMgPSBpbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBpc05hdGl2ZSAoQ3Rvcikge1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KEN0b3IudG9TdHJpbmcoKSlcbn1cblxudmFyIGhhc1N5bWJvbCA9XG4gIHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFN5bWJvbCkgJiZcbiAgdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFJlZmxlY3Qub3duS2V5cyk7XG5cbnZhciBfU2V0O1xuLyogaXN0YW5idWwgaWdub3JlIGlmICovIC8vICRmbG93LWRpc2FibGUtbGluZVxuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFNldCkpIHtcbiAgLy8gdXNlIG5hdGl2ZSBTZXQgd2hlbiBhdmFpbGFibGUuXG4gIF9TZXQgPSBTZXQ7XG59IGVsc2Uge1xuICAvLyBhIG5vbi1zdGFuZGFyZCBTZXQgcG9seWZpbGwgdGhhdCBvbmx5IHdvcmtzIHdpdGggcHJpbWl0aXZlIGtleXMuXG4gIF9TZXQgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZXQgKCkge1xuICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRba2V5XSA9PT0gdHJ1ZVxuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKGtleSkge1xuICAgICAgdGhpcy5zZXRba2V5XSA9IHRydWU7XG4gICAgfTtcbiAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIgKCkge1xuICAgICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2V0O1xuICB9KCkpO1xufVxuXG4vKiAgKi9cblxudmFyIHdhcm4gPSBub29wO1xudmFyIHRpcCA9IG5vb3A7XG52YXIgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IChub29wKTsgLy8gd29yayBhcm91bmQgZmxvdyBjaGVja1xudmFyIGZvcm1hdENvbXBvbmVudE5hbWUgPSAobm9vcCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBoYXNDb25zb2xlID0gdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgY2xhc3NpZnlSRSA9IC8oPzpefFstX10pKFxcdykvZztcbiAgdmFyIGNsYXNzaWZ5ID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoY2xhc3NpZnlSRSwgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudG9VcHBlckNhc2UoKTsgfSlcbiAgICAucmVwbGFjZSgvWy1fXS9nLCAnJyk7IH07XG5cbiAgd2FybiA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgdmFyIHRyYWNlID0gdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnO1xuXG4gICAgaWYgKGNvbmZpZy53YXJuSGFuZGxlcikge1xuICAgICAgY29uZmlnLndhcm5IYW5kbGVyLmNhbGwobnVsbCwgbXNnLCB2bSwgdHJhY2UpO1xuICAgIH0gZWxzZSBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIltWdWUgd2Fybl06IFwiICsgbXNnICsgdHJhY2UpKTtcbiAgICB9XG4gIH07XG5cbiAgdGlwID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbVnVlIHRpcF06IFwiICsgbXNnICsgKFxuICAgICAgICB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJydcbiAgICAgICkpO1xuICAgIH1cbiAgfTtcblxuICBmb3JtYXRDb21wb25lbnROYW1lID0gZnVuY3Rpb24gKHZtLCBpbmNsdWRlRmlsZSkge1xuICAgIGlmICh2bS4kcm9vdCA9PT0gdm0pIHtcbiAgICAgIHJldHVybiAnPFJvb3Q+J1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiB2bSA9PT0gJ2Z1bmN0aW9uJyAmJiB2bS5jaWQgIT0gbnVsbFxuICAgICAgPyB2bS5vcHRpb25zXG4gICAgICA6IHZtLl9pc1Z1ZVxuICAgICAgICA/IHZtLiRvcHRpb25zIHx8IHZtLmNvbnN0cnVjdG9yLm9wdGlvbnNcbiAgICAgICAgOiB2bTtcbiAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSB8fCBvcHRpb25zLl9jb21wb25lbnRUYWc7XG4gICAgdmFyIGZpbGUgPSBvcHRpb25zLl9fZmlsZTtcbiAgICBpZiAoIW5hbWUgJiYgZmlsZSkge1xuICAgICAgdmFyIG1hdGNoID0gZmlsZS5tYXRjaCgvKFteL1xcXFxdKylcXC52dWUkLyk7XG4gICAgICBuYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIChuYW1lID8gKFwiPFwiICsgKGNsYXNzaWZ5KG5hbWUpKSArIFwiPlwiKSA6IFwiPEFub255bW91cz5cIikgK1xuICAgICAgKGZpbGUgJiYgaW5jbHVkZUZpbGUgIT09IGZhbHNlID8gKFwiIGF0IFwiICsgZmlsZSkgOiAnJylcbiAgICApXG4gIH07XG5cbiAgdmFyIHJlcGVhdCA9IGZ1bmN0aW9uIChzdHIsIG4pIHtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgd2hpbGUgKG4pIHtcbiAgICAgIGlmIChuICUgMiA9PT0gMSkgeyByZXMgKz0gc3RyOyB9XG4gICAgICBpZiAobiA+IDEpIHsgc3RyICs9IHN0cjsgfVxuICAgICAgbiA+Pj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9O1xuXG4gIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSBmdW5jdGlvbiAodm0pIHtcbiAgICBpZiAodm0uX2lzVnVlICYmIHZtLiRwYXJlbnQpIHtcbiAgICAgIHZhciB0cmVlID0gW107XG4gICAgICB2YXIgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgIHdoaWxlICh2bSkge1xuICAgICAgICBpZiAodHJlZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIGxhc3QgPSB0cmVlW3RyZWUubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKGxhc3QuY29uc3RydWN0b3IgPT09IHZtLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UrKztcbiAgICAgICAgICAgIHZtID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPiAwKSB7XG4gICAgICAgICAgICB0cmVlW3RyZWUubGVuZ3RoIC0gMV0gPSBbbGFzdCwgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlXTtcbiAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyZWUucHVzaCh2bSk7XG4gICAgICAgIHZtID0gdm0uJHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnXFxuXFxuZm91bmQgaW5cXG5cXG4nICsgdHJlZVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh2bSwgaSkgeyByZXR1cm4gKFwiXCIgKyAoaSA9PT0gMCA/ICctLS0+ICcgOiByZXBlYXQoJyAnLCA1ICsgaSAqIDIpKSArIChBcnJheS5pc0FycmF5KHZtKVxuICAgICAgICAgICAgPyAoKGZvcm1hdENvbXBvbmVudE5hbWUodm1bMF0pKSArIFwiLi4uIChcIiArICh2bVsxXSkgKyBcIiByZWN1cnNpdmUgY2FsbHMpXCIpXG4gICAgICAgICAgICA6IGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSk7IH0pXG4gICAgICAgIC5qb2luKCdcXG4nKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFwiXFxuXFxuKGZvdW5kIGluIFwiICsgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiKVwiKVxuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQgPSAwO1xuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqL1xudmFyIERlcCA9IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrKztcbiAgdGhpcy5zdWJzID0gW107XG59O1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIGFkZFN1YiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIHJlbW92ZVN1YiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgRGVwLnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgLy8gb3JkZXJcbiAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4vLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsO1xudmFyIHRhcmdldFN0YWNrID0gW107XG5cbmZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICB0YXJnZXRTdGFjay5wdXNoKHRhcmdldCk7XG4gIERlcC50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIHRhcmdldFN0YWNrLnBvcCgpO1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2tbdGFyZ2V0U3RhY2subGVuZ3RoIC0gMV07XG59XG5cbi8qICAqL1xuXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGVsbSxcbiAgY29udGV4dCxcbiAgY29tcG9uZW50T3B0aW9ucyxcbiAgYXN5bmNGYWN0b3J5XG4pIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mblNjb3BlSWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzQ2xvbmVkID0gZmFsc2U7XG4gIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICB0aGlzLmFzeW5jTWV0YSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICByZXR1cm4gbm9kZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcodmFsKSlcbn1cblxuLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbi8vIHVzZWQgZm9yIHN0YXRpYyBub2RlcyBhbmQgc2xvdCBub2RlcyBiZWNhdXNlIHRoZXkgbWF5IGJlIHJldXNlZCBhY3Jvc3Ncbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIGNsb25lVk5vZGUgKHZub2RlKSB7XG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgdm5vZGUudGFnLFxuICAgIHZub2RlLmRhdGEsXG4gICAgLy8gIzc5NzVcbiAgICAvLyBjbG9uZSBjaGlsZHJlbiBhcnJheSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBpbiBjYXNlIG9mIGNsb25pbmdcbiAgICAvLyBhIGNoaWxkLlxuICAgIHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLnNsaWNlKCksXG4gICAgdm5vZGUudGV4dCxcbiAgICB2bm9kZS5lbG0sXG4gICAgdm5vZGUuY29udGV4dCxcbiAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgIHZub2RlLmFzeW5jRmFjdG9yeVxuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gIGNsb25lZC5mbkNvbnRleHQgPSB2bm9kZS5mbkNvbnRleHQ7XG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gIGNsb25lZC5hc3luY01ldGEgPSB2bm9kZS5hc3luY01ldGE7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxudmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgIHZhciBpbnNlcnRlZDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gKi9cbnZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICBzaG91bGRPYnNlcnZlID0gdmFsdWU7XG59XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBpcyBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoIHVwZGF0ZXMuXG4gKi9cbnZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICB0aGlzLnZtQ291bnQgPSAwO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgaWYgKGhhc1Byb3RvKSB7XG4gICAgICBwcm90b0F1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlBdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBhbGwgcHJvcGVydGllcyBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEob2JqLCBrZXlzW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIG9ic2VydmVBcnJheSAoaXRlbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKTtcbiAgfVxufTtcblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICovXG5mdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgYXNSb290RGF0YSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChcbiAgICBzaG91bGRPYnNlcnZlICYmXG4gICAgIWlzU2VydmVyUmVuZGVyaW5nKCkgJiZcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgfVxuICBpZiAoYXNSb290RGF0YSAmJiBvYikge1xuICAgIG9iLnZtQ291bnQrKztcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlJCQxIChcbiAgb2JqLFxuICBrZXksXG4gIHZhbCxcbiAgY3VzdG9tU2V0dGVyLFxuICBzaGFsbG93XG4pIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICB2YXIgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0O1xuICB2YXIgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0O1xuICBpZiAoKCFnZXR0ZXIgfHwgc2V0dGVyKSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFsID0gb2JqW2tleV07XG4gIH1cblxuICB2YXIgY2hpbGRPYiA9ICFzaGFsbG93ICYmIG9ic2VydmUodmFsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpO1xuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlIHx8IChuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGN1c3RvbVNldHRlcikge1xuICAgICAgICBjdXN0b21TZXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIC8vICM3OTgxOiBmb3IgYWNjZXNzb3IgcHJvcGVydGllcyB3aXRob3V0IHNldHRlclxuICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7IHJldHVybiB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKi9cbmZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3Qgc2V0IHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQubGVuZ3RoID0gTWF0aC5tYXgodGFyZ2V0Lmxlbmd0aCwga2V5KTtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSwgdmFsKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKGtleSBpbiB0YXJnZXQgJiYgIShrZXkgaW4gT2JqZWN0LnByb3RvdHlwZSkpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnYXQgcnVudGltZSAtIGRlY2xhcmUgaXQgdXBmcm9udCBpbiB0aGUgZGF0YSBvcHRpb24uJ1xuICAgICk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmICghb2IpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgZGVmaW5lUmVhY3RpdmUkJDEob2IudmFsdWUsIGtleSwgdmFsKTtcbiAgb2IuZGVwLm5vdGlmeSgpO1xuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gZGVsICh0YXJnZXQsIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3QgZGVsZXRlIHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICctIGp1c3Qgc2V0IGl0IHRvIG51bGwuJ1xuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIHRhcmdldFtrZXldO1xuICBpZiAoIW9iKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xufVxuXG4vKipcbiAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gKiB3ZSBjYW5ub3QgaW50ZXJjZXB0IGFycmF5IGVsZW1lbnQgYWNjZXNzIGxpa2UgcHJvcGVydHkgZ2V0dGVycy5cbiAqL1xuZnVuY3Rpb24gZGVwZW5kQXJyYXkgKHZhbHVlKSB7XG4gIGZvciAodmFyIGUgPSAodm9pZCAwKSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBlID0gdmFsdWVbaV07XG4gICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgIGRlcGVuZEFycmF5KGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICogdmFsdWUgaW50byB0aGUgZmluYWwgdmFsdWUuXG4gKi9cbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4vKipcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgaWYgKCF2bSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcbiAgICAgICAgJ2NyZWF0aW9uIHdpdGggdGhlIGBuZXdgIGtleXdvcmQuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRTdHJhdChwYXJlbnQsIGNoaWxkKVxuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEgKHRvLCBmcm9tKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcblxuICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgID8gUmVmbGVjdC5vd25LZXlzKGZyb20pXG4gICAgOiBPYmplY3Qua2V5cyhmcm9tKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIC8vIGluIGNhc2UgdGhlIG9iamVjdCBpcyBhbHJlYWR5IG9ic2VydmVkLi4uXG4gICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XG4gICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRvVmFsICE9PSBmcm9tVmFsICYmXG4gICAgICBpc1BsYWluT2JqZWN0KHRvVmFsKSAmJlxuICAgICAgaXNQbGFpbk9iamVjdChmcm9tVmFsKVxuICAgICkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRGF0YVxuICovXG5mdW5jdGlvbiBtZXJnZURhdGFPckZuIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7XG4gICAgICByZXR1cm4gY2hpbGRWYWxcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4gKCkge1xuICAgICAgcmV0dXJuIG1lcmdlRGF0YShcbiAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxuICAgICAgICB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nID8gcGFyZW50VmFsLmNhbGwodGhpcywgdGhpcykgOiBwYXJlbnRWYWxcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuICgpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogY2hpbGRWYWw7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IHBhcmVudFZhbDtcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICBpZiAoY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSlcbn07XG5cbi8qKlxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2sgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsXG4pIHtcbiAgdmFyIHJlcyA9IGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbDtcbiAgcmV0dXJuIHJlc1xuICAgID8gZGVkdXBlSG9va3MocmVzKVxuICAgIDogcmVzXG59XG5cbmZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkxJRkVDWUNMRV9IT09LUy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gIHN0cmF0c1tob29rXSA9IG1lcmdlSG9vaztcbn0pO1xuXG4vKipcbiAqIEFzc2V0c1xuICpcbiAqIFdoZW4gYSB2bSBpcyBwcmVzZW50IChpbnN0YW5jZSBjcmVhdGlvbiksIHdlIG5lZWQgdG8gZG9cbiAqIGEgdGhyZWUtd2F5IG1lcmdlIGJldHdlZW4gY29uc3RydWN0b3Igb3B0aW9ucywgaW5zdGFuY2VcbiAqIG9wdGlvbnMgYW5kIHBhcmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBtZXJnZUFzc2V0cyAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCk7XG4gIGlmIChjaGlsZFZhbCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgcmV0dXJuIGV4dGVuZChyZXMsIGNoaWxkVmFsKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5BU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xufSk7XG5cbi8qKlxuICogV2F0Y2hlcnMuXG4gKlxuICogV2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cbnN0cmF0cy53YXRjaCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3gncyBPYmplY3QucHJvdG90eXBlLndhdGNoLi4uXG4gIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IHBhcmVudFZhbCA9IHVuZGVmaW5lZDsgfVxuICBpZiAoY2hpbGRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IGNoaWxkVmFsID0gdW5kZWZpbmVkOyB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkVmFsKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKSB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IHt9O1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBmb3IgKHZhciBrZXkkMSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5JDFdO1xuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleSQxXTtcbiAgICBpZiAocGFyZW50ICYmICFBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IFtwYXJlbnRdO1xuICAgIH1cbiAgICByZXRba2V5JDFdID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGQpID8gY2hpbGQgOiBbY2hpbGRdO1xuICB9XG4gIHJldHVybiByZXRcbn07XG5cbi8qKlxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAqL1xuc3RyYXRzLnByb3BzID1cbnN0cmF0cy5tZXRob2RzID1cbnN0cmF0cy5pbmplY3QgPVxuc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgaWYgKGNoaWxkVmFsICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgaWYgKGNoaWxkVmFsKSB7IGV4dGVuZChyZXQsIGNoaWxkVmFsKTsgfVxuICByZXR1cm4gcmV0XG59O1xuc3RyYXRzLnByb3ZpZGUgPSBtZXJnZURhdGFPckZuO1xuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cbnZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZFxuICAgID8gcGFyZW50VmFsXG4gICAgOiBjaGlsZFZhbFxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRzIChvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoa2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbXBvbmVudE5hbWUgKG5hbWUpIHtcbiAgaWYgKCFuZXcgUmVnRXhwKChcIl5bYS16QS1aXVtcXFxcLVxcXFwuMC05X1wiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiXSokXCIpKS50ZXN0KG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGNvbXBvbmVudCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiLiBDb21wb25lbnQgbmFtZXMgJyArXG4gICAgICAnc2hvdWxkIGNvbmZvcm0gdG8gdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZSBpbiBodG1sNSBzcGVjaWZpY2F0aW9uLidcbiAgICApO1xuICB9XG4gIGlmIChpc0J1aWx0SW5UYWcobmFtZSkgfHwgY29uZmlnLmlzUmVzZXJ2ZWRUYWcobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gb3IgcmVzZXJ2ZWQgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAnaWQ6ICcgKyBuYW1lXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmICghcHJvcHMpIHsgcmV0dXJuIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgaSwgdmFsLCBuYW1lO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhbCA9IHByb3BzW2ldO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWUgPSBjYW1lbGl6ZSh2YWwpO1xuICAgICAgICByZXNbbmFtZV0gPSB7IHR5cGU6IG51bGwgfTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKCdwcm9wcyBtdXN0IGJlIHN0cmluZ3Mgd2hlbiB1c2luZyBhcnJheSBzeW50YXguJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YWwgPSBwcm9wc1trZXldO1xuICAgICAgbmFtZSA9IGNhbWVsaXplKGtleSk7XG4gICAgICByZXNbbmFtZV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyB2YWxcbiAgICAgICAgOiB7IHR5cGU6IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJwcm9wc1xcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShwcm9wcykpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYWxsIGluamVjdGlvbnMgaW50byBPYmplY3QtYmFzZWQgZm9ybWF0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUluamVjdCAob3B0aW9ucywgdm0pIHtcbiAgdmFyIGluamVjdCA9IG9wdGlvbnMuaW5qZWN0O1xuICBpZiAoIWluamVjdCkgeyByZXR1cm4gfVxuICB2YXIgbm9ybWFsaXplZCA9IG9wdGlvbnMuaW5qZWN0ID0ge307XG4gIGlmIChBcnJheS5pc0FycmF5KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgbm9ybWFsaXplZFtpbmplY3RbaV1dID0geyBmcm9tOiBpbmplY3RbaV0gfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChpbmplY3QpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGluamVjdCkge1xuICAgICAgdmFyIHZhbCA9IGluamVjdFtrZXldO1xuICAgICAgbm9ybWFsaXplZFtrZXldID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gZXh0ZW5kKHsgZnJvbToga2V5IH0sIHZhbClcbiAgICAgICAgOiB7IGZyb206IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJpbmplY3RcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUoaW5qZWN0KSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSByYXcgZnVuY3Rpb24gZGlyZWN0aXZlcyBpbnRvIG9iamVjdCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMgKG9wdGlvbnMpIHtcbiAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG4gIGlmIChkaXJzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRpcnMpIHtcbiAgICAgIHZhciBkZWYkJDEgPSBkaXJzW2tleV07XG4gICAgICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaXJzW2tleV0gPSB7IGJpbmQ6IGRlZiQkMSwgdXBkYXRlOiBkZWYkJDEgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0VHlwZSAobmFtZSwgdmFsdWUsIHZtKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIlwiICsgbmFtZSArIFwiXFxcIjogZXhwZWN0ZWQgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHZhbHVlKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIHZtXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVja0NvbXBvbmVudHMoY2hpbGQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNoaWxkID0gY2hpbGQub3B0aW9ucztcbiAgfVxuXG4gIG5vcm1hbGl6ZVByb3BzKGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZUluamVjdChjaGlsZCwgdm0pO1xuICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTtcblxuICAvLyBBcHBseSBleHRlbmRzIGFuZCBtaXhpbnMgb24gdGhlIGNoaWxkIG9wdGlvbnMsXG4gIC8vIGJ1dCBvbmx5IGlmIGl0IGlzIGEgcmF3IG9wdGlvbnMgb2JqZWN0IHRoYXQgaXNuJ3RcbiAgLy8gdGhlIHJlc3VsdCBvZiBhbm90aGVyIG1lcmdlT3B0aW9ucyBjYWxsLlxuICAvLyBPbmx5IG1lcmdlZCBvcHRpb25zIGhhcyB0aGUgX2Jhc2UgcHJvcGVydHkuXG4gIGlmICghY2hpbGQuX2Jhc2UpIHtcbiAgICBpZiAoY2hpbGQuZXh0ZW5kcykge1xuICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQuZXh0ZW5kcywgdm0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgbWVyZ2VGaWVsZChrZXkpO1xuICB9XG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgaWYgKCFoYXNPd24ocGFyZW50LCBrZXkpKSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRmllbGQgKGtleSkge1xuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICBvcHRpb25zW2tleV0gPSBzdHJhdChwYXJlbnRba2V5XSwgY2hpbGRba2V5XSwgdm0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIGFzc2V0LlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJlY2F1c2UgY2hpbGQgaW5zdGFuY2VzIG5lZWQgYWNjZXNzXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVBc3NldCAoXG4gIG9wdGlvbnMsXG4gIHR5cGUsXG4gIGlkLFxuICB3YXJuTWlzc2luZ1xuKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xuICAvLyBjaGVjayBsb2NhbCByZWdpc3RyYXRpb24gdmFyaWF0aW9ucyBmaXJzdFxuICBpZiAoaGFzT3duKGFzc2V0cywgaWQpKSB7IHJldHVybiBhc3NldHNbaWRdIH1cbiAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgY2FtZWxpemVkSWQpKSB7IHJldHVybiBhc3NldHNbY2FtZWxpemVkSWRdIH1cbiAgdmFyIFBhc2NhbENhc2VJZCA9IGNhcGl0YWxpemUoY2FtZWxpemVkSWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgUGFzY2FsQ2FzZUlkKSkgeyByZXR1cm4gYXNzZXRzW1Bhc2NhbENhc2VJZF0gfVxuICAvLyBmYWxsYmFjayB0byBwcm90b3R5cGUgY2hhaW5cbiAgdmFyIHJlcyA9IGFzc2V0c1tpZF0gfHwgYXNzZXRzW2NhbWVsaXplZElkXSB8fCBhc3NldHNbUGFzY2FsQ2FzZUlkXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xuICAgIHdhcm4oXG4gICAgICAnRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUuc2xpY2UoMCwgLTEpICsgJzogJyArIGlkLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcCAoXG4gIGtleSxcbiAgcHJvcE9wdGlvbnMsXG4gIHByb3BzRGF0YSxcbiAgdm1cbikge1xuICB2YXIgcHJvcCA9IHByb3BPcHRpb25zW2tleV07XG4gIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgdmFyIHZhbHVlID0gcHJvcHNEYXRhW2tleV07XG4gIC8vIGJvb2xlYW4gY2FzdGluZ1xuICB2YXIgYm9vbGVhbkluZGV4ID0gZ2V0VHlwZUluZGV4KEJvb2xlYW4sIHByb3AudHlwZSk7XG4gIGlmIChib29sZWFuSW5kZXggPiAtMSkge1xuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgLy8gb25seSBjYXN0IGVtcHR5IHN0cmluZyAvIHNhbWUgbmFtZSB0byBib29sZWFuIGlmXG4gICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIHZhciBzdHJpbmdJbmRleCA9IGdldFR5cGVJbmRleChTdHJpbmcsIHByb3AudHlwZSk7XG4gICAgICBpZiAoc3RyaW5nSW5kZXggPCAwIHx8IGJvb2xlYW5JbmRleCA8IHN0cmluZ0luZGV4KSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgZGVmYXVsdCB2YWx1ZVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KTtcbiAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgLy8gbWFrZSBzdXJlIHRvIG9ic2VydmUgaXQuXG4gICAgdmFyIHByZXZTaG91bGRPYnNlcnZlID0gc2hvdWxkT2JzZXJ2ZTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgb2JzZXJ2ZSh2YWx1ZSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHByZXZTaG91bGRPYnNlcnZlKTtcbiAgfVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIC8vIHNraXAgdmFsaWRhdGlvbiBmb3Igd2VleCByZWN5Y2xlLWxpc3QgY2hpbGQgY29tcG9uZW50IHByb3BzXG4gICAgIShmYWxzZSlcbiAgKSB7XG4gICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wRGVmYXVsdFZhbHVlICh2bSwgcHJvcCwga2V5KSB7XG4gIC8vIG5vIGRlZmF1bHQsIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKCFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICB2YXIgZGVmID0gcHJvcC5kZWZhdWx0O1xuICAvLyB3YXJuIGFnYWluc3Qgbm9uLWZhY3RvcnkgZGVmYXVsdHMgZm9yIE9iamVjdCAmIEFycmF5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzT2JqZWN0KGRlZikpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBrZXkgKyAnXCI6ICcgK1xuICAgICAgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgK1xuICAgICAgJ3RvIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZS4nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHRoZSByYXcgcHJvcCB2YWx1ZSB3YXMgYWxzbyB1bmRlZmluZWQgZnJvbSBwcmV2aW91cyByZW5kZXIsXG4gIC8vIHJldHVybiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdhdGNoZXIgdHJpZ2dlclxuICBpZiAodm0gJiYgdm0uJG9wdGlvbnMucHJvcHNEYXRhICYmXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhW2tleV0gPT09IHVuZGVmaW5lZCAmJlxuICAgIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgcmV0dXJuIHZtLl9wcm9wc1trZXldXG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcbiAgICA/IGRlZi5jYWxsKHZtKVxuICAgIDogZGVmXG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiBhc3NlcnRQcm9wIChcbiAgcHJvcCxcbiAgbmFtZSxcbiAgdmFsdWUsXG4gIHZtLFxuICBhYnNlbnRcbikge1xuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICB3YXJuKFxuICAgICAgJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogXCInICsgbmFtZSArICdcIicsXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdHlwZSA9IHByb3AudHlwZTtcbiAgdmFyIHZhbGlkID0gIXR5cGUgfHwgdHlwZSA9PT0gdHJ1ZTtcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldLCB2bSk7XG4gICAgICBleHBlY3RlZFR5cGVzLnB1c2goYXNzZXJ0ZWRUeXBlLmV4cGVjdGVkVHlwZSB8fCAnJyk7XG4gICAgICB2YWxpZCA9IGFzc2VydGVkVHlwZS52YWxpZDtcbiAgICB9XG4gIH1cblxuICB2YXIgaGF2ZUV4cGVjdGVkVHlwZXMgPSBleHBlY3RlZFR5cGVzLnNvbWUoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQ7IH0pO1xuICBpZiAoIXZhbGlkICYmIGhhdmVFeHBlY3RlZFR5cGVzKSB7XG4gICAgd2FybihcbiAgICAgIGdldEludmFsaWRUeXBlTWVzc2FnZShuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcyksXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHZhbGlkYXRvciA9IHByb3AudmFsaWRhdG9yO1xuICBpZiAodmFsaWRhdG9yKSB7XG4gICAgaWYgKCF2YWxpZGF0b3IodmFsdWUpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wOiBjdXN0b20gdmFsaWRhdG9yIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcIicgKyBuYW1lICsgJ1wiLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc2ltcGxlQ2hlY2tSRSA9IC9eKFN0cmluZ3xOdW1iZXJ8Qm9vbGVhbnxGdW5jdGlvbnxTeW1ib2x8QmlnSW50KSQvO1xuXG5mdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSwgdm0pIHtcbiAgdmFyIHZhbGlkO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcbiAgaWYgKHNpbXBsZUNoZWNrUkUudGVzdChleHBlY3RlZFR5cGUpKSB7XG4gICAgdmFyIHQgPSB0eXBlb2YgdmFsdWU7XG4gICAgdmFsaWQgPSB0ID09PSBleHBlY3RlZFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBmb3IgcHJpbWl0aXZlIHdyYXBwZXIgb2JqZWN0c1xuICAgIGlmICghdmFsaWQgJiYgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgdmFsaWQgPSBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdBcnJheScpIHtcbiAgICB2YWxpZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIHByb3AgdHlwZTogXCInICsgU3RyaW5nKHR5cGUpICsgJ1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yJywgdm0pO1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgfVxufVxuXG52YXIgZnVuY3Rpb25UeXBlQ2hlY2tSRSA9IC9eXFxzKmZ1bmN0aW9uIChcXHcrKS87XG5cbi8qKlxuICogVXNlIGZ1bmN0aW9uIHN0cmluZyBuYW1lIHRvIGNoZWNrIGJ1aWx0LWluIHR5cGVzLFxuICogYmVjYXVzZSBhIHNpbXBsZSBlcXVhbGl0eSBjaGVjayB3aWxsIGZhaWwgd2hlbiBydW5uaW5nXG4gKiBhY3Jvc3MgZGlmZmVyZW50IHZtcyAvIGlmcmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUgKGZuKSB7XG4gIHZhciBtYXRjaCA9IGZuICYmIGZuLnRvU3RyaW5nKCkubWF0Y2goZnVuY3Rpb25UeXBlQ2hlY2tSRSk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogJydcbn1cblxuZnVuY3Rpb24gaXNTYW1lVHlwZSAoYSwgYikge1xuICByZXR1cm4gZ2V0VHlwZShhKSA9PT0gZ2V0VHlwZShiKVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlSW5kZXggKHR5cGUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVHlwZXMpKSB7XG4gICAgcmV0dXJuIGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlcywgdHlwZSkgPyAwIDogLTFcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRUeXBlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXNbaV0sIHR5cGUpKSB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gZ2V0SW52YWxpZFR5cGVNZXNzYWdlIChuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcykge1xuICB2YXIgbWVzc2FnZSA9IFwiSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiICtcbiAgICBcIiBFeHBlY3RlZCBcIiArIChleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKCcsICcpKTtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZXNbMF07XG4gIHZhciByZWNlaXZlZFR5cGUgPSB0b1Jhd1R5cGUodmFsdWUpO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgZXhwZWN0ZWQgdmFsdWVcbiAgaWYgKFxuICAgIGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgaXNFeHBsaWNhYmxlKGV4cGVjdGVkVHlwZSkgJiZcbiAgICBpc0V4cGxpY2FibGUodHlwZW9mIHZhbHVlKSAmJlxuICAgICFpc0Jvb2xlYW4oZXhwZWN0ZWRUeXBlLCByZWNlaXZlZFR5cGUpXG4gICkge1xuICAgIG1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSBcIiArIChzdHlsZVZhbHVlKHZhbHVlLCBleHBlY3RlZFR5cGUpKTtcbiAgfVxuICBtZXNzYWdlICs9IFwiLCBnb3QgXCIgKyByZWNlaXZlZFR5cGUgKyBcIiBcIjtcbiAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IHJlY2VpdmVkIHZhbHVlXG4gIGlmIChpc0V4cGxpY2FibGUocmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCJ3aXRoIHZhbHVlIFwiICsgKHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSkpICsgXCIuXCI7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuZnVuY3Rpb24gc3R5bGVWYWx1ZSAodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09ICdTdHJpbmcnKSB7XG4gICAgcmV0dXJuIChcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ051bWJlcicpIHtcbiAgICByZXR1cm4gKFwiXCIgKyAoTnVtYmVyKHZhbHVlKSkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcIlwiICsgdmFsdWUpXG4gIH1cbn1cblxudmFyIEVYUExJQ0FCTEVfVFlQRVMgPSBbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddO1xuZnVuY3Rpb24gaXNFeHBsaWNhYmxlICh2YWx1ZSkge1xuICByZXR1cm4gRVhQTElDQUJMRV9UWVBFUy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBlbGVtOyB9KVxufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4gKCkge1xuICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gIHJldHVybiBhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0udG9Mb3dlckNhc2UoKSA9PT0gJ2Jvb2xlYW4nOyB9KVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgLy8gRGVhY3RpdmF0ZSBkZXBzIHRyYWNraW5nIHdoaWxlIHByb2Nlc3NpbmcgZXJyb3IgaGFuZGxlciB0byBhdm9pZCBwb3NzaWJsZSBpbmZpbml0ZSByZW5kZXJpbmcuXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZXgvaXNzdWVzLzE1MDVcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIGlmICh2bSkge1xuICAgICAgdmFyIGN1ciA9IHZtO1xuICAgICAgd2hpbGUgKChjdXIgPSBjdXIuJHBhcmVudCkpIHtcbiAgICAgICAgdmFyIGhvb2tzID0gY3VyLiRvcHRpb25zLmVycm9yQ2FwdHVyZWQ7XG4gICAgICAgIGlmIChob29rcykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBjYXB0dXJlID0gaG9va3NbaV0uY2FsbChjdXIsIGVyciwgdm0sIGluZm8pID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGNhcHR1cmUpIHsgcmV0dXJuIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsSGFuZGxlRXJyb3IoZSwgY3VyLCAnZXJyb3JDYXB0dXJlZCBob29rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGdsb2JhbEhhbmRsZUVycm9yKGVyciwgdm0sIGluZm8pO1xuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZVdpdGhFcnJvckhhbmRsaW5nIChcbiAgaGFuZGxlcixcbiAgY29udGV4dCxcbiAgYXJncyxcbiAgdm0sXG4gIGluZm9cbikge1xuICB2YXIgcmVzO1xuICB0cnkge1xuICAgIHJlcyA9IGFyZ3MgPyBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3MpIDogaGFuZGxlci5jYWxsKGNvbnRleHQpO1xuICAgIGlmIChyZXMgJiYgIXJlcy5faXNWdWUgJiYgaXNQcm9taXNlKHJlcykgJiYgIXJlcy5faGFuZGxlZCkge1xuICAgICAgcmVzLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyArIFwiIChQcm9taXNlL2FzeW5jKVwiKTsgfSk7XG4gICAgICAvLyBpc3N1ZSAjOTUxMVxuICAgICAgLy8gYXZvaWQgY2F0Y2ggdHJpZ2dlcmluZyBtdWx0aXBsZSB0aW1lcyB3aGVuIG5lc3RlZCBjYWxsc1xuICAgICAgcmVzLl9oYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnbG9iYWxIYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY29uZmlnLmVycm9ySGFuZGxlci5jYWxsKG51bGwsIGVyciwgdm0sIGluZm8pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gaWYgdGhlIHVzZXIgaW50ZW50aW9uYWxseSB0aHJvd3MgdGhlIG9yaWdpbmFsIGVycm9yIGluIHRoZSBoYW5kbGVyLFxuICAgICAgLy8gZG8gbm90IGxvZyBpdCB0d2ljZVxuICAgICAgaWYgKGUgIT09IGVycikge1xuICAgICAgICBsb2dFcnJvcihlLCBudWxsLCAnY29uZmlnLmVycm9ySGFuZGxlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2dFcnJvcihlcnIsIHZtLCBpbmZvKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKChcIkVycm9yIGluIFwiICsgaW5mbyArIFwiOiBcXFwiXCIgKyAoZXJyLnRvU3RyaW5nKCkpICsgXCJcXFwiXCIpLCB2bSk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKChpbkJyb3dzZXIgfHwgaW5XZWV4KSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBpc1VzaW5nTWljcm9UYXNrID0gZmFsc2U7XG5cbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBwZW5kaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQ2FsbGJhY2tzICgpIHtcbiAgcGVuZGluZyA9IGZhbHNlO1xuICB2YXIgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICBjYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb3BpZXNbaV0oKTtcbiAgfVxufVxuXG4vLyBIZXJlIHdlIGhhdmUgYXN5bmMgZGVmZXJyaW5nIHdyYXBwZXJzIHVzaW5nIG1pY3JvdGFza3MuXG4vLyBJbiAyLjUgd2UgdXNlZCAobWFjcm8pIHRhc2tzIChpbiBjb21iaW5hdGlvbiB3aXRoIG1pY3JvdGFza3MpLlxuLy8gSG93ZXZlciwgaXQgaGFzIHN1YnRsZSBwcm9ibGVtcyB3aGVuIHN0YXRlIGlzIGNoYW5nZWQgcmlnaHQgYmVmb3JlIHJlcGFpbnRcbi8vIChlLmcuICM2ODEzLCBvdXQtaW4gdHJhbnNpdGlvbnMpLlxuLy8gQWxzbywgdXNpbmcgKG1hY3JvKSB0YXNrcyBpbiBldmVudCBoYW5kbGVyIHdvdWxkIGNhdXNlIHNvbWUgd2VpcmQgYmVoYXZpb3JzXG4vLyB0aGF0IGNhbm5vdCBiZSBjaXJjdW12ZW50ZWQgKGUuZy4gIzcxMDksICM3MTUzLCAjNzU0NiwgIzc4MzQsICM4MTA5KS5cbi8vIFNvIHdlIG5vdyB1c2UgbWljcm90YXNrcyBldmVyeXdoZXJlLCBhZ2Fpbi5cbi8vIEEgbWFqb3IgZHJhd2JhY2sgb2YgdGhpcyB0cmFkZW9mZiBpcyB0aGF0IHRoZXJlIGFyZSBzb21lIHNjZW5hcmlvc1xuLy8gd2hlcmUgbWljcm90YXNrcyBoYXZlIHRvbyBoaWdoIGEgcHJpb3JpdHkgYW5kIGZpcmUgaW4gYmV0d2VlbiBzdXBwb3NlZGx5XG4vLyBzZXF1ZW50aWFsIGV2ZW50cyAoZS5nLiAjNDUyMSwgIzY2OTAsIHdoaWNoIGhhdmUgd29ya2Fyb3VuZHMpXG4vLyBvciBldmVuIGJldHdlZW4gYnViYmxpbmcgb2YgdGhlIHNhbWUgZXZlbnQgKCM2NTY2KS5cbnZhciB0aW1lckZ1bmM7XG5cbi8vIFRoZSBuZXh0VGljayBiZWhhdmlvciBsZXZlcmFnZXMgdGhlIG1pY3JvdGFzayBxdWV1ZSwgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkXG4vLyB2aWEgZWl0aGVyIG5hdGl2ZSBQcm9taXNlLnRoZW4gb3IgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11dGF0aW9uT2JzZXJ2ZXIgaGFzIHdpZGVyIHN1cHBvcnQsIGhvd2V2ZXIgaXQgaXMgc2VyaW91c2x5IGJ1Z2dlZCBpblxuLy8gVUlXZWJWaWV3IGluIGlPUyA+PSA5LjMuMyB3aGVuIHRyaWdnZXJlZCBpbiB0b3VjaCBldmVudCBoYW5kbGVycy4gSXRcbi8vIGNvbXBsZXRlbHkgc3RvcHMgd29ya2luZyBhZnRlciB0cmlnZ2VyaW5nIGEgZmV3IHRpbWVzLi4uIHNvLCBpZiBuYXRpdmVcbi8vIFByb21pc2UgaXMgYXZhaWxhYmxlLCB3ZSB3aWxsIHVzZSBpdDpcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0LCAkZmxvdy1kaXNhYmxlLWxpbmUgKi9cbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJvbWlzZSkpIHtcbiAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHAudGhlbihmbHVzaENhbGxiYWNrcyk7XG4gICAgLy8gSW4gcHJvYmxlbWF0aWMgVUlXZWJWaWV3cywgUHJvbWlzZS50aGVuIGRvZXNuJ3QgY29tcGxldGVseSBicmVhaywgYnV0XG4gICAgLy8gaXQgY2FuIGdldCBzdHVjayBpbiBhIHdlaXJkIHN0YXRlIHdoZXJlIGNhbGxiYWNrcyBhcmUgcHVzaGVkIGludG8gdGhlXG4gICAgLy8gbWljcm90YXNrIHF1ZXVlIGJ1dCB0aGUgcXVldWUgaXNuJ3QgYmVpbmcgZmx1c2hlZCwgdW50aWwgdGhlIGJyb3dzZXJcbiAgICAvLyBuZWVkcyB0byBkbyBzb21lIG90aGVyIHdvcmssIGUuZy4gaGFuZGxlIGEgdGltZXIuIFRoZXJlZm9yZSB3ZSBjYW5cbiAgICAvLyBcImZvcmNlXCIgdGhlIG1pY3JvdGFzayBxdWV1ZSB0byBiZSBmbHVzaGVkIGJ5IGFkZGluZyBhbiBlbXB0eSB0aW1lci5cbiAgICBpZiAoaXNJT1MpIHsgc2V0VGltZW91dChub29wKTsgfVxuICB9O1xuICBpc1VzaW5nTWljcm9UYXNrID0gdHJ1ZTtcbn0gZWxzZSBpZiAoIWlzSUUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXSdcbikpIHtcbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgdmFyIGNvdW50ZXIgPSAxO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gIH07XG4gIGlzVXNpbmdNaWNyb1Rhc2sgPSB0cnVlO1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShzZXRJbW1lZGlhdGUpKSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldEltbWVkaWF0ZS5cbiAgLy8gVGVjaG5pY2FsbHkgaXQgbGV2ZXJhZ2VzIHRoZSAobWFjcm8pIHRhc2sgcXVldWUsXG4gIC8vIGJ1dCBpdCBpcyBzdGlsbCBhIGJldHRlciBjaG9pY2UgdGhhbiBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW1tZWRpYXRlKGZsdXNoQ2FsbGJhY2tzKTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgdmFyIF9yZXNvbHZlO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKGN0eCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIGN0eCwgJ25leHRUaWNrJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUoY3R4KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICB0aW1lckZ1bmMoKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxudmFyIGluaXRQcm94eTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGFsbG93ZWRHbG9iYWxzID0gbWFrZU1hcChcbiAgICAnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICtcbiAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgJ01hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCxCaWdJbnQsJyArXG4gICAgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgKTtcblxuICB2YXIgd2Fybk5vblByZXNlbnQgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBvciBtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIG9uIHRoZSBpbnN0YW5jZSBidXQgXCIgK1xuICAgICAgJ3JlZmVyZW5jZWQgZHVyaW5nIHJlbmRlci4gTWFrZSBzdXJlIHRoYXQgdGhpcyBwcm9wZXJ0eSBpcyByZWFjdGl2ZSwgJyArXG4gICAgICAnZWl0aGVyIGluIHRoZSBkYXRhIG9wdGlvbiwgb3IgZm9yIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMsIGJ5ICcgK1xuICAgICAgJ2luaXRpYWxpemluZyB0aGUgcHJvcGVydHkuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvcmVhY3Rpdml0eS5odG1sI0RlY2xhcmluZy1SZWFjdGl2ZS1Qcm9wZXJ0aWVzLicsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciB3YXJuUmVzZXJ2ZWRQcmVmaXggPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgbXVzdCBiZSBhY2Nlc3NlZCB3aXRoIFxcXCIkZGF0YS5cIiArIGtleSArIFwiXFxcIiBiZWNhdXNlIFwiICtcbiAgICAgICdwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggXCIkXCIgb3IgXCJfXCIgYXJlIG5vdCBwcm94aWVkIGluIHRoZSBWdWUgaW5zdGFuY2UgdG8gJyArXG4gICAgICAncHJldmVudCBjb25mbGljdHMgd2l0aCBWdWUgaW50ZXJuYWxzLiAnICtcbiAgICAgICdTZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2FwaS8jZGF0YScsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciBoYXNQcm94eSA9XG4gICAgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm94eSk7XG5cbiAgaWYgKGhhc1Byb3h5KSB7XG4gICAgdmFyIGlzQnVpbHRJbk1vZGlmaWVyID0gbWFrZU1hcCgnc3RvcCxwcmV2ZW50LHNlbGYsY3RybCxzaGlmdCxhbHQsbWV0YSxleGFjdCcpO1xuICAgIGNvbmZpZy5rZXlDb2RlcyA9IG5ldyBQcm94eShjb25maWcua2V5Q29kZXMsIHtcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzQnVpbHRJbk1vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICB3YXJuKChcIkF2b2lkIG92ZXJ3cml0aW5nIGJ1aWx0LWluIG1vZGlmaWVyIGluIGNvbmZpZy5rZXlDb2RlczogLlwiICsga2V5KSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFzSGFuZGxlciA9IHtcbiAgICBoYXM6IGZ1bmN0aW9uIGhhcyAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHZhciBoYXMgPSBrZXkgaW4gdGFyZ2V0O1xuICAgICAgdmFyIGlzQWxsb3dlZCA9IGFsbG93ZWRHbG9iYWxzKGtleSkgfHxcbiAgICAgICAgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleS5jaGFyQXQoMCkgPT09ICdfJyAmJiAhKGtleSBpbiB0YXJnZXQuJGRhdGEpKTtcbiAgICAgIGlmICghaGFzICYmICFpc0FsbG93ZWQpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzIHx8ICFpc0FsbG93ZWRcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldEhhbmRsZXIgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXRba2V5XVxuICAgIH1cbiAgfTtcblxuICBpbml0UHJveHkgPSBmdW5jdGlvbiBpbml0UHJveHkgKHZtKSB7XG4gICAgaWYgKGhhc1Byb3h5KSB7XG4gICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggcHJveHkgaGFuZGxlciB0byB1c2VcbiAgICAgIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gICAgICB2YXIgaGFuZGxlcnMgPSBvcHRpb25zLnJlbmRlciAmJiBvcHRpb25zLnJlbmRlci5fd2l0aFN0cmlwcGVkXG4gICAgICAgID8gZ2V0SGFuZGxlclxuICAgICAgICA6IGhhc0hhbmRsZXI7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSBuZXcgUHJveHkodm0sIGhhbmRsZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHNlZW5PYmplY3RzID0gbmV3IF9TZXQoKTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwpIHtcbiAgX3RyYXZlcnNlKHZhbCwgc2Vlbk9iamVjdHMpO1xuICBzZWVuT2JqZWN0cy5jbGVhcigpO1xufVxuXG5mdW5jdGlvbiBfdHJhdmVyc2UgKHZhbCwgc2Vlbikge1xuICB2YXIgaSwga2V5cztcbiAgdmFyIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKTtcbiAgaWYgKCghaXNBICYmICFpc09iamVjdCh2YWwpKSB8fCBPYmplY3QuaXNGcm96ZW4odmFsKSB8fCB2YWwgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2YWwuX19vYl9fKSB7XG4gICAgdmFyIGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWQ7XG4gICAgaWYgKHNlZW4uaGFzKGRlcElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNlZW4uYWRkKGRlcElkKTtcbiAgfVxuICBpZiAoaXNBKSB7XG4gICAgaSA9IHZhbC5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2ldLCBzZWVuKTsgfVxuICB9IGVsc2Uge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxba2V5c1tpXV0sIHNlZW4pOyB9XG4gIH1cbn1cblxudmFyIG1hcms7XG52YXIgbWVhc3VyZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKFxuICAgIHBlcmYgJiZcbiAgICBwZXJmLm1hcmsgJiZcbiAgICBwZXJmLm1lYXN1cmUgJiZcbiAgICBwZXJmLmNsZWFyTWFya3MgJiZcbiAgICBwZXJmLmNsZWFyTWVhc3VyZXNcbiAgKSB7XG4gICAgbWFyayA9IGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHBlcmYubWFyayh0YWcpOyB9O1xuICAgIG1lYXN1cmUgPSBmdW5jdGlvbiAobmFtZSwgc3RhcnRUYWcsIGVuZFRhZykge1xuICAgICAgcGVyZi5tZWFzdXJlKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhlbmRUYWcpO1xuICAgICAgLy8gcGVyZi5jbGVhck1lYXN1cmVzKG5hbWUpXG4gICAgfTtcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIG5vcm1hbGl6ZUV2ZW50ID0gY2FjaGVkKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBwYXNzaXZlID0gbmFtZS5jaGFyQXQoMCkgPT09ICcmJztcbiAgbmFtZSA9IHBhc3NpdmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIG9uY2UkJDEgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJ34nOyAvLyBQcmVmaXhlZCBsYXN0LCBjaGVja2VkIGZpcnN0XG4gIG5hbWUgPSBvbmNlJCQxID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBjYXB0dXJlID0gbmFtZS5jaGFyQXQoMCkgPT09ICchJztcbiAgbmFtZSA9IGNhcHR1cmUgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIG9uY2U6IG9uY2UkJDEsXG4gICAgY2FwdHVyZTogY2FwdHVyZSxcbiAgICBwYXNzaXZlOiBwYXNzaXZlXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVGbkludm9rZXIgKGZucywgdm0pIHtcbiAgZnVuY3Rpb24gaW52b2tlciAoKSB7XG4gICAgdmFyIGFyZ3VtZW50cyQxID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZucyA9IGludm9rZXIuZm5zO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZucykpIHtcbiAgICAgIHZhciBjbG9uZWQgPSBmbnMuc2xpY2UoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNsb25lZFtpXSwgbnVsbCwgYXJndW1lbnRzJDEsIHZtLCBcInYtb24gaGFuZGxlclwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmV0dXJuIGhhbmRsZXIgcmV0dXJuIHZhbHVlIGZvciBzaW5nbGUgaGFuZGxlcnNcbiAgICAgIHJldHVybiBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhmbnMsIG51bGwsIGFyZ3VtZW50cywgdm0sIFwidi1vbiBoYW5kbGVyXCIpXG4gICAgfVxuICB9XG4gIGludm9rZXIuZm5zID0gZm5zO1xuICByZXR1cm4gaW52b2tlclxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0ZW5lcnMgKFxuICBvbixcbiAgb2xkT24sXG4gIGFkZCxcbiAgcmVtb3ZlJCQxLFxuICBjcmVhdGVPbmNlSGFuZGxlcixcbiAgdm1cbikge1xuICB2YXIgbmFtZSwgZGVmJCQxLCBjdXIsIG9sZCwgZXZlbnQ7XG4gIGZvciAobmFtZSBpbiBvbikge1xuICAgIGRlZiQkMSA9IGN1ciA9IG9uW25hbWVdO1xuICAgIG9sZCA9IG9sZE9uW25hbWVdO1xuICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgaWYgKGlzVW5kZWYoY3VyKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkludmFsaWQgaGFuZGxlciBmb3IgZXZlbnQgXFxcIlwiICsgKGV2ZW50Lm5hbWUpICsgXCJcXFwiOiBnb3QgXCIgKyBTdHJpbmcoY3VyKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZCkpIHtcbiAgICAgIGlmIChpc1VuZGVmKGN1ci5mbnMpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlRm5JbnZva2VyKGN1ciwgdm0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzVHJ1ZShldmVudC5vbmNlKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZU9uY2VIYW5kbGVyKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSk7XG4gICAgICB9XG4gICAgICBhZGQoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlLCBldmVudC5wYXNzaXZlLCBldmVudC5wYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAoY3VyICE9PSBvbGQpIHtcbiAgICAgIG9sZC5mbnMgPSBjdXI7XG4gICAgICBvbltuYW1lXSA9IG9sZDtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG9sZE9uKSB7XG4gICAgaWYgKGlzVW5kZWYob25bbmFtZV0pKSB7XG4gICAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgICAgcmVtb3ZlJCQxKGV2ZW50Lm5hbWUsIG9sZE9uW25hbWVdLCBldmVudC5jYXB0dXJlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG1lcmdlVk5vZGVIb29rIChkZWYsIGhvb2tLZXksIGhvb2spIHtcbiAgaWYgKGRlZiBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgZGVmID0gZGVmLmRhdGEuaG9vayB8fCAoZGVmLmRhdGEuaG9vayA9IHt9KTtcbiAgfVxuICB2YXIgaW52b2tlcjtcbiAgdmFyIG9sZEhvb2sgPSBkZWZbaG9va0tleV07XG5cbiAgZnVuY3Rpb24gd3JhcHBlZEhvb2sgKCkge1xuICAgIGhvb2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBpbXBvcnRhbnQ6IHJlbW92ZSBtZXJnZWQgaG9vayB0byBlbnN1cmUgaXQncyBjYWxsZWQgb25seSBvbmNlXG4gICAgLy8gYW5kIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICByZW1vdmUoaW52b2tlci5mbnMsIHdyYXBwZWRIb29rKTtcbiAgfVxuXG4gIGlmIChpc1VuZGVmKG9sZEhvb2spKSB7XG4gICAgLy8gbm8gZXhpc3RpbmcgaG9va1xuICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW3dyYXBwZWRIb29rXSk7XG4gIH0gZWxzZSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzRGVmKG9sZEhvb2suZm5zKSAmJiBpc1RydWUob2xkSG9vay5tZXJnZWQpKSB7XG4gICAgICAvLyBhbHJlYWR5IGEgbWVyZ2VkIGludm9rZXJcbiAgICAgIGludm9rZXIgPSBvbGRIb29rO1xuICAgICAgaW52b2tlci5mbnMucHVzaCh3cmFwcGVkSG9vayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGV4aXN0aW5nIHBsYWluIGhvb2tcbiAgICAgIGludm9rZXIgPSBjcmVhdGVGbkludm9rZXIoW29sZEhvb2ssIHdyYXBwZWRIb29rXSk7XG4gICAgfVxuICB9XG5cbiAgaW52b2tlci5tZXJnZWQgPSB0cnVlO1xuICBkZWZbaG9va0tleV0gPSBpbnZva2VyO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YSAoXG4gIGRhdGEsXG4gIEN0b3IsXG4gIHRhZ1xuKSB7XG4gIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxuICAvLyB2YWxpZGF0aW9uIGFuZCBkZWZhdWx0IHZhbHVlcyBhcmUgaGFuZGxlZCBpbiB0aGUgY2hpbGRcbiAgLy8gY29tcG9uZW50IGl0c2VsZi5cbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xuICBpZiAoaXNVbmRlZihwcm9wT3B0aW9ucykpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgcmVzID0ge307XG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gIGlmIChpc0RlZihhdHRycykgfHwgaXNEZWYocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIga2V5SW5Mb3dlckNhc2UgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSAhPT0ga2V5SW5Mb3dlckNhc2UgJiZcbiAgICAgICAgICBhdHRycyAmJiBoYXNPd24oYXR0cnMsIGtleUluTG93ZXJDYXNlKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aXAoXG4gICAgICAgICAgICBcIlByb3AgXFxcIlwiICsga2V5SW5Mb3dlckNhc2UgKyBcIlxcXCIgaXMgcGFzc2VkIHRvIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh0YWcgfHwgQ3RvcikpICsgXCIsIGJ1dCB0aGUgZGVjbGFyZWQgcHJvcCBuYW1lIGlzXCIgK1xuICAgICAgICAgICAgXCIgXFxcIlwiICsga2V5ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIGNhbWVsQ2FzZWQgXCIgK1xuICAgICAgICAgICAgXCJwcm9wcyBuZWVkIHRvIHVzZSB0aGVpciBrZWJhYi1jYXNlIGVxdWl2YWxlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIFwiICtcbiAgICAgICAgICAgIFwidGVtcGxhdGVzLiBZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyBhbHRLZXkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGVja1Byb3AocmVzLCBwcm9wcywga2V5LCBhbHRLZXksIHRydWUpIHx8XG4gICAgICBjaGVja1Byb3AocmVzLCBhdHRycywga2V5LCBhbHRLZXksIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBjaGVja1Byb3AgKFxuICByZXMsXG4gIGhhc2gsXG4gIGtleSxcbiAgYWx0S2V5LFxuICBwcmVzZXJ2ZVxuKSB7XG4gIGlmIChpc0RlZihoYXNoKSkge1xuICAgIGlmIChoYXNPd24oaGFzaCwga2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2tleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoaGFzT3duKGhhc2gsIGFsdEtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFthbHRLZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFthbHRLZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qICAqL1xuXG4vLyBUaGUgdGVtcGxhdGUgY29tcGlsZXIgYXR0ZW1wdHMgdG8gbWluaW1pemUgdGhlIG5lZWQgZm9yIG5vcm1hbGl6YXRpb24gYnlcbi8vIHN0YXRpY2FsbHkgYW5hbHl6aW5nIHRoZSB0ZW1wbGF0ZSBhdCBjb21waWxlIHRpbWUuXG4vL1xuLy8gRm9yIHBsYWluIEhUTUwgbWFya3VwLCBub3JtYWxpemF0aW9uIGNhbiBiZSBjb21wbGV0ZWx5IHNraXBwZWQgYmVjYXVzZSB0aGVcbi8vIGdlbmVyYXRlZCByZW5kZXIgZnVuY3Rpb24gaXMgZ3VhcmFudGVlZCB0byByZXR1cm4gQXJyYXk8Vk5vZGU+LiBUaGVyZSBhcmVcbi8vIHR3byBjYXNlcyB3aGVyZSBleHRyYSBub3JtYWxpemF0aW9uIGlzIG5lZWRlZDpcblxuLy8gMS4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29tcG9uZW50cyAtIGJlY2F1c2UgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuLy8gbWF5IHJldHVybiBhbiBBcnJheSBpbnN0ZWFkIG9mIGEgc2luZ2xlIHJvb3QuIEluIHRoaXMgY2FzZSwganVzdCBhIHNpbXBsZVxuLy8gbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQgLSBpZiBhbnkgY2hpbGQgaXMgYW4gQXJyYXksIHdlIGZsYXR0ZW4gdGhlIHdob2xlXG4vLyB0aGluZyB3aXRoIEFycmF5LnByb3RvdHlwZS5jb25jYXQuIEl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgb25seSAxLWxldmVsIGRlZXBcbi8vIGJlY2F1c2UgZnVuY3Rpb25hbCBjb21wb25lbnRzIGFscmVhZHkgbm9ybWFsaXplIHRoZWlyIG93biBjaGlsZHJlbi5cbmZ1bmN0aW9uIHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY2hpbGRyZW4pXG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlblxufVxuXG4vLyAyLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb25zdHJ1Y3RzIHRoYXQgYWx3YXlzIGdlbmVyYXRlZCBuZXN0ZWQgQXJyYXlzLFxuLy8gZS5nLiA8dGVtcGxhdGU+LCA8c2xvdD4sIHYtZm9yLCBvciB3aGVuIHRoZSBjaGlsZHJlbiBpcyBwcm92aWRlZCBieSB1c2VyXG4vLyB3aXRoIGhhbmQtd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zIC8gSlNYLiBJbiBzdWNoIGNhc2VzIGEgZnVsbCBub3JtYWxpemF0aW9uXG4vLyBpcyBuZWVkZWQgdG8gY2F0ZXIgdG8gYWxsIHBvc3NpYmxlIHR5cGVzIG9mIGNoaWxkcmVuIHZhbHVlcy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuIChjaGlsZHJlbikge1xuICByZXR1cm4gaXNQcmltaXRpdmUoY2hpbGRyZW4pXG4gICAgPyBbY3JlYXRlVGV4dFZOb2RlKGNoaWxkcmVuKV1cbiAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgICA/IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgICA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBpc1RleHROb2RlIChub2RlKSB7XG4gIHJldHVybiBpc0RlZihub2RlKSAmJiBpc0RlZihub2RlLnRleHQpICYmIGlzRmFsc2Uobm9kZS5pc0NvbW1lbnQpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4gKGNoaWxkcmVuLCBuZXN0ZWRJbmRleCkge1xuICB2YXIgcmVzID0gW107XG4gIHZhciBpLCBjLCBsYXN0SW5kZXgsIGxhc3Q7XG4gIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBjaGlsZHJlbltpXTtcbiAgICBpZiAoaXNVbmRlZihjKSB8fCB0eXBlb2YgYyA9PT0gJ2Jvb2xlYW4nKSB7IGNvbnRpbnVlIH1cbiAgICBsYXN0SW5kZXggPSByZXMubGVuZ3RoIC0gMTtcbiAgICBsYXN0ID0gcmVzW2xhc3RJbmRleF07XG4gICAgLy8gIG5lc3RlZFxuICAgIGlmIChBcnJheS5pc0FycmF5KGMpKSB7XG4gICAgICBpZiAoYy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGMgPSBub3JtYWxpemVBcnJheUNoaWxkcmVuKGMsICgobmVzdGVkSW5kZXggfHwgJycpICsgXCJfXCIgKyBpKSk7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgaWYgKGlzVGV4dE5vZGUoY1swXSkgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIChjWzBdKS50ZXh0KTtcbiAgICAgICAgICBjLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBjKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKGMpKSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBTU1IgaHlkcmF0aW9uIGJlY2F1c2UgdGV4dCBub2RlcyBhcmVcbiAgICAgICAgLy8gZXNzZW50aWFsbHkgbWVyZ2VkIHdoZW4gcmVuZGVyZWQgdG8gSFRNTCBzdHJpbmdzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMpO1xuICAgICAgfSBlbHNlIGlmIChjICE9PSAnJykge1xuICAgICAgICAvLyBjb252ZXJ0IHByaW1pdGl2ZSB0byB2bm9kZVxuICAgICAgICByZXMucHVzaChjcmVhdGVUZXh0Vk5vZGUoYykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNUZXh0Tm9kZShjKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYy50ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlZmF1bHQga2V5IGZvciBuZXN0ZWQgYXJyYXkgY2hpbGRyZW4gKGxpa2VseSBnZW5lcmF0ZWQgYnkgdi1mb3IpXG4gICAgICAgIGlmIChpc1RydWUoY2hpbGRyZW4uX2lzVkxpc3QpICYmXG4gICAgICAgICAgaXNEZWYoYy50YWcpICYmXG4gICAgICAgICAgaXNVbmRlZihjLmtleSkgJiZcbiAgICAgICAgICBpc0RlZihuZXN0ZWRJbmRleCkpIHtcbiAgICAgICAgICBjLmtleSA9IFwiX192bGlzdFwiICsgbmVzdGVkSW5kZXggKyBcIl9cIiArIGkgKyBcIl9fXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRQcm92aWRlICh2bSkge1xuICB2YXIgcHJvdmlkZSA9IHZtLiRvcHRpb25zLnByb3ZpZGU7XG4gIGlmIChwcm92aWRlKSB7XG4gICAgdm0uX3Byb3ZpZGVkID0gdHlwZW9mIHByb3ZpZGUgPT09ICdmdW5jdGlvbidcbiAgICAgID8gcHJvdmlkZS5jYWxsKHZtKVxuICAgICAgOiBwcm92aWRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRJbmplY3Rpb25zICh2bSkge1xuICB2YXIgcmVzdWx0ID0gcmVzb2x2ZUluamVjdCh2bS4kb3B0aW9ucy5pbmplY3QsIHZtKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGFuIGluamVjdGVkIHZhbHVlIGRpcmVjdGx5IHNpbmNlIHRoZSBjaGFuZ2VzIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcHJvdmlkZWQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiaW5qZWN0aW9uIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCBrZXksIHJlc3VsdFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUluamVjdCAoaW5qZWN0LCB2bSkge1xuICBpZiAoaW5qZWN0KSB7XG4gICAgLy8gaW5qZWN0IGlzIDphbnkgYmVjYXVzZSBmbG93IGlzIG5vdCBzbWFydCBlbm91Z2ggdG8gZmlndXJlIG91dCBjYWNoZWRcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgICAgPyBSZWZsZWN0Lm93bktleXMoaW5qZWN0KVxuICAgICAgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIC8vICM2NTc0IGluIGNhc2UgdGhlIGluamVjdCBvYmplY3QgaXMgb2JzZXJ2ZWQuLi5cbiAgICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICAgIHZhciBwcm92aWRlS2V5ID0gaW5qZWN0W2tleV0uZnJvbTtcbiAgICAgIHZhciBzb3VyY2UgPSB2bTtcbiAgICAgIHdoaWxlIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5fcHJvdmlkZWQgJiYgaGFzT3duKHNvdXJjZS5fcHJvdmlkZWQsIHByb3ZpZGVLZXkpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2UuX3Byb3ZpZGVkW3Byb3ZpZGVLZXldO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc291cmNlID0gc291cmNlLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIGluamVjdFtrZXldKSB7XG4gICAgICAgICAgdmFyIHByb3ZpZGVEZWZhdWx0ID0gaW5qZWN0W2tleV0uZGVmYXVsdDtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHR5cGVvZiBwcm92aWRlRGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBwcm92aWRlRGVmYXVsdC5jYWxsKHZtKVxuICAgICAgICAgICAgOiBwcm92aWRlRGVmYXVsdDtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybigoXCJJbmplY3Rpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIG5vdCBmb3VuZFwiKSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyByYXcgY2hpbGRyZW4gVk5vZGVzIGludG8gYSBzbG90IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVNsb3RzIChcbiAgY2hpbGRyZW4sXG4gIGNvbnRleHRcbikge1xuICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICB2YXIgc2xvdHMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICB2YXIgZGF0YSA9IGNoaWxkLmRhdGE7XG4gICAgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxuICAgIGlmIChkYXRhICYmIGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5zbG90KSB7XG4gICAgICBkZWxldGUgZGF0YS5hdHRycy5zbG90O1xuICAgIH1cbiAgICAvLyBuYW1lZCBzbG90cyBzaG91bGQgb25seSBiZSByZXNwZWN0ZWQgaWYgdGhlIHZub2RlIHdhcyByZW5kZXJlZCBpbiB0aGVcbiAgICAvLyBzYW1lIGNvbnRleHQuXG4gICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiZcbiAgICAgIGRhdGEgJiYgZGF0YS5zbG90ICE9IG51bGxcbiAgICApIHtcbiAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xuICAgICAgdmFyIHNsb3QgPSAoc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pKTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsb3QucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNBc3luY1BsYWNlaG9sZGVyIChub2RlKSB7XG4gIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICB2YXIgdm5vZGUgPSByZXMgJiYgcmVzWzBdO1xuICAgIHJldHVybiByZXMgJiYgKFxuICAgICAgIXZub2RlIHx8XG4gICAgICAocmVzLmxlbmd0aCA9PT0gMSAmJiB2bm9kZS5pc0NvbW1lbnQgJiYgIWlzQXN5bmNQbGFjZWhvbGRlcih2bm9kZSkpIC8vICM5NjU4LCAjMTAzOTFcbiAgICApID8gdW5kZWZpbmVkXG4gICAgICA6IHJlc1xuICB9O1xuICAvLyB0aGlzIGlzIGEgc2xvdCB1c2luZyB0aGUgbmV3IHYtc2xvdCBzeW50YXggd2l0aG91dCBzY29wZS4gYWx0aG91Z2ggaXQgaXNcbiAgLy8gY29tcGlsZWQgYXMgYSBzY29wZWQgc2xvdCwgcmVuZGVyIGZuIHVzZXJzIHdvdWxkIGV4cGVjdCBpdCB0byBiZSBwcmVzZW50XG4gIC8vIG9uIHRoaXMuJHNsb3RzIGJlY2F1c2UgdGhlIHVzYWdlIGlzIHNlbWFudGljYWxseSBhIG5vcm1hbCBzbG90LlxuICBpZiAoZm4ucHJveHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsU2xvdHMsIGtleSwge1xuICAgICAgZ2V0OiBub3JtYWxpemVkLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkXG59XG5cbmZ1bmN0aW9uIHByb3h5Tm9ybWFsU2xvdChzbG90cywga2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzbG90c1trZXldOyB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgdi1mb3IgbGlzdHMuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3QgKFxuICB2YWwsXG4gIHJlbmRlclxuKSB7XG4gIHZhciByZXQsIGksIGwsIGtleXMsIGtleTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtpXSwgaSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0ID0gbmV3IEFycmF5KHZhbCk7XG4gICAgZm9yIChpID0gMDsgaSA8IHZhbDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXIoaSArIDEsIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gW107XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCkpO1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaXNEZWYocmV0KSkge1xuICAgIHJldCA9IFtdO1xuICB9XG4gIChyZXQpLl9pc1ZMaXN0ID0gdHJ1ZTtcbiAgcmV0dXJuIHJldFxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIDxzbG90PlxuICovXG5mdW5jdGlvbiByZW5kZXJTbG90IChcbiAgbmFtZSxcbiAgZmFsbGJhY2tSZW5kZXIsXG4gIHByb3BzLFxuICBiaW5kT2JqZWN0XG4pIHtcbiAgdmFyIHNjb3BlZFNsb3RGbiA9IHRoaXMuJHNjb3BlZFNsb3RzW25hbWVdO1xuICB2YXIgbm9kZXM7XG4gIGlmIChzY29wZWRTbG90Rm4pIHtcbiAgICAvLyBzY29wZWQgc2xvdFxuICAgIHByb3BzID0gcHJvcHMgfHwge307XG4gICAgaWYgKGJpbmRPYmplY3QpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc09iamVjdChiaW5kT2JqZWN0KSkge1xuICAgICAgICB3YXJuKCdzbG90IHYtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0JywgdGhpcyk7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IGV4dGVuZChleHRlbmQoe30sIGJpbmRPYmplY3QpLCBwcm9wcyk7XG4gICAgfVxuICAgIG5vZGVzID1cbiAgICAgIHNjb3BlZFNsb3RGbihwcm9wcykgfHxcbiAgICAgICh0eXBlb2YgZmFsbGJhY2tSZW5kZXIgPT09ICdmdW5jdGlvbicgPyBmYWxsYmFja1JlbmRlcigpIDogZmFsbGJhY2tSZW5kZXIpO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID1cbiAgICAgIHRoaXMuJHNsb3RzW25hbWVdIHx8XG4gICAgICAodHlwZW9mIGZhbGxiYWNrUmVuZGVyID09PSAnZnVuY3Rpb24nID8gZmFsbGJhY2tSZW5kZXIoKSA6IGZhbGxiYWNrUmVuZGVyKTtcbiAgfVxuXG4gIHZhciB0YXJnZXQgPSBwcm9wcyAmJiBwcm9wcy5zbG90O1xuICBpZiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywgeyBzbG90OiB0YXJnZXQgfSwgbm9kZXMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyBmaWx0ZXJzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVGaWx0ZXIgKGlkKSB7XG4gIHJldHVybiByZXNvbHZlQXNzZXQodGhpcy4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBpZCwgdHJ1ZSkgfHwgaWRlbnRpdHlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGlzS2V5Tm90TWF0Y2ggKGV4cGVjdCwgYWN0dWFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdCkpIHtcbiAgICByZXR1cm4gZXhwZWN0LmluZGV4T2YoYWN0dWFsKSA9PT0gLTFcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXhwZWN0ICE9PSBhY3R1YWxcbiAgfVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBjaGVja2luZyBrZXlDb2RlcyBmcm9tIGNvbmZpZy5cbiAqIGV4cG9zZWQgYXMgVnVlLnByb3RvdHlwZS5fa1xuICogcGFzc2luZyBpbiBldmVudEtleU5hbWUgYXMgbGFzdCBhcmd1bWVudCBzZXBhcmF0ZWx5IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gKi9cbmZ1bmN0aW9uIGNoZWNrS2V5Q29kZXMgKFxuICBldmVudEtleUNvZGUsXG4gIGtleSxcbiAgYnVpbHRJbktleUNvZGUsXG4gIGV2ZW50S2V5TmFtZSxcbiAgYnVpbHRJbktleU5hbWVcbikge1xuICB2YXIgbWFwcGVkS2V5Q29kZSA9IGNvbmZpZy5rZXlDb2Rlc1trZXldIHx8IGJ1aWx0SW5LZXlDb2RlO1xuICBpZiAoYnVpbHRJbktleU5hbWUgJiYgZXZlbnRLZXlOYW1lICYmICFjb25maWcua2V5Q29kZXNba2V5XSkge1xuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKGJ1aWx0SW5LZXlOYW1lLCBldmVudEtleU5hbWUpXG4gIH0gZWxzZSBpZiAobWFwcGVkS2V5Q29kZSkge1xuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKG1hcHBlZEtleUNvZGUsIGV2ZW50S2V5Q29kZSlcbiAgfSBlbHNlIGlmIChldmVudEtleU5hbWUpIHtcbiAgICByZXR1cm4gaHlwaGVuYXRlKGV2ZW50S2V5TmFtZSkgIT09IGtleVxuICB9XG4gIHJldHVybiBldmVudEtleUNvZGUgPT09IHVuZGVmaW5lZFxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVjaWFsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ21vdW50ZWQnKTtcbiAgICB9XG4gICAgaWYgKHZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICBpZiAoY29udGV4dC5faXNNb3VudGVkKSB7XG4gICAgICAgIC8vIHZ1ZS1yb3V0ZXIjMTIxMlxuICAgICAgICAvLyBEdXJpbmcgdXBkYXRlcywgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCdzIGNoaWxkIGNvbXBvbmVudHMgbWF5XG4gICAgICAgIC8vIGNoYW5nZSwgc28gZGlyZWN0bHkgd2Fsa2luZyB0aGUgdHJlZSBoZXJlIG1heSBjYWxsIGFjdGl2YXRlZCBob29rc1xuICAgICAgICAvLyBvbiBpbmNvcnJlY3QgY2hpbGRyZW4uIEluc3RlYWQgd2UgcHVzaCB0aGVtIGludG8gYSBxdWV1ZSB3aGljaCB3aWxsXG4gICAgICAgIC8vIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgd2hvbGUgcGF0Y2ggcHJvY2VzcyBlbmRlZC5cbiAgICAgICAgcXVldWVBY3RpdmF0ZWRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkKSB7XG4gICAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBob29rc1RvTWVyZ2UgPSBPYmplY3Qua2V5cyhjb21wb25lbnRWTm9kZUhvb2tzKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIGlmIChpc1VuZGVmKEN0b3IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgYmFzZUN0b3IgPSBjb250ZXh0LiRvcHRpb25zLl9iYXNlO1xuXG4gIC8vIHBsYWluIG9wdGlvbnMgb2JqZWN0OiB0dXJuIGl0IGludG8gYSBjb25zdHJ1Y3RvclxuICBpZiAoaXNPYmplY3QoQ3RvcikpIHtcbiAgICBDdG9yID0gYmFzZUN0b3IuZXh0ZW5kKEN0b3IpO1xuICB9XG5cbiAgLy8gaWYgYXQgdGhpcyBzdGFnZSBpdCdzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIGFuIGFzeW5jIGNvbXBvbmVudCBmYWN0b3J5LFxuICAvLyByZWplY3QuXG4gIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKChcIkludmFsaWQgQ29tcG9uZW50IGRlZmluaXRpb246IFwiICsgKFN0cmluZyhDdG9yKSkpLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBhc3luYyBjb21wb25lbnRcbiAgdmFyIGFzeW5jRmFjdG9yeTtcbiAgaWYgKGlzVW5kZWYoQ3Rvci5jaWQpKSB7XG4gICAgYXN5bmNGYWN0b3J5ID0gQ3RvcjtcbiAgICBDdG9yID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGFzeW5jRmFjdG9yeSwgYmFzZUN0b3IpO1xuICAgIGlmIChDdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIG5vZGUgZm9yIGFzeW5jIGNvbXBvbmVudCwgd2hpY2ggaXMgcmVuZGVyZWRcbiAgICAgIC8vIGFzIGEgY29tbWVudCBub2RlIGJ1dCBwcmVzZXJ2ZXMgYWxsIHRoZSByYXcgaW5mb3JtYXRpb24gZm9yIHRoZSBub2RlLlxuICAgICAgLy8gdGhlIGluZm9ybWF0aW9uIHdpbGwgYmUgdXNlZCBmb3IgYXN5bmMgc2VydmVyLXJlbmRlcmluZyBhbmQgaHlkcmF0aW9uLlxuICAgICAgcmV0dXJuIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIoXG4gICAgICAgIGFzeW5jRmFjdG9yeSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHRhZ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gIC8vIHJlc29sdmUgY29uc3RydWN0b3Igb3B0aW9ucyBpbiBjYXNlIGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQgYWZ0ZXJcbiAgLy8gY29tcG9uZW50IGNvbnN0cnVjdG9yIGNyZWF0aW9uXG4gIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvcik7XG5cbiAgLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGRhdGEgaW50byBwcm9wcyAmIGV2ZW50c1xuICBpZiAoaXNEZWYoZGF0YS5tb2RlbCkpIHtcbiAgICB0cmFuc2Zvcm1Nb2RlbChDdG9yLm9wdGlvbnMsIGRhdGEpO1xuICB9XG5cbiAgLy8gZXh0cmFjdCBwcm9wc1xuICB2YXIgcHJvcHNEYXRhID0gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCB0YWcpO1xuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIC8vIHdlIGtub3cgaXQncyBNb3VudGVkQ29tcG9uZW50Vk5vZGUgYnV0IGZsb3cgZG9lc24ndFxuICB2bm9kZSxcbiAgLy8gYWN0aXZlSW5zdGFuY2UgaW4gbGlmZWN5Y2xlIHN0YXRlXG4gIHBhcmVudFxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pICYmIGRhdGEudGFnICE9PSAnY29tcG9uZW50Jykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlRoZSAubmF0aXZlIG1vZGlmaWVyIGZvciB2LW9uIGlzIG9ubHkgdmFsaWQgb24gY29tcG9uZW50cyBidXQgaXQgd2FzIHVzZWQgb24gPFwiICsgdGFnICsgXCI+LlwiKSxcbiAgICAgICAgICBjb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lKHRhZyksIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCghZGF0YSB8fCAhZGF0YS5wcmUpICYmIGlzRGVmKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSkge1xuICAgICAgLy8gY29tcG9uZW50XG4gICAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudChDdG9yLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbiwgdGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdW5rbm93biBvciB1bmxpc3RlZCBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gICAgICAvLyBjaGVjayBhdCBydW50aW1lIGJlY2F1c2UgaXQgbWF5IGdldCBhc3NpZ25lZCBhIG5hbWVzcGFjZSB3aGVuIGl0c1xuICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICB0YWcsIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZGlyZWN0IGNvbXBvbmVudCBvcHRpb25zIC8gY29uc3RydWN0b3JcbiAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudCh0YWcsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIGlmIChpc0RlZih2bm9kZSkpIHtcbiAgICBpZiAoaXNEZWYobnMpKSB7IGFwcGx5TlModm5vZGUsIG5zKTsgfVxuICAgIGlmIChpc0RlZihkYXRhKSkgeyByZWdpc3RlckRlZXBCaW5kaW5ncyhkYXRhKTsgfVxuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseU5TICh2bm9kZSwgbnMsIGZvcmNlKSB7XG4gIHZub2RlLm5zID0gbnM7XG4gIGlmICh2bm9kZS50YWcgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgIC8vIHVzZSBkZWZhdWx0IG5hbWVzcGFjZSBpbnNpZGUgZm9yZWlnbk9iamVjdFxuICAgIG5zID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXNEZWYodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGNoaWxkLnRhZykgJiYgKFxuICAgICAgICBpc1VuZGVmKGNoaWxkLm5zKSB8fCAoaXNUcnVlKGZvcmNlKSAmJiBjaGlsZC50YWcgIT09ICdzdmcnKSkpIHtcbiAgICAgICAgYXBwbHlOUyhjaGlsZCwgbnMsIGZvcmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gcmVmICM1MzE4XG4vLyBuZWNlc3NhcnkgdG8gZW5zdXJlIHBhcmVudCByZS1yZW5kZXIgd2hlbiBkZWVwIGJpbmRpbmdzIGxpa2UgOnN0eWxlIGFuZFxuLy8gOmNsYXNzIGFyZSB1c2VkIG9uIHNsb3Qgbm9kZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyRGVlcEJpbmRpbmdzIChkYXRhKSB7XG4gIGlmIChpc09iamVjdChkYXRhLnN0eWxlKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuc3R5bGUpO1xuICB9XG4gIGlmIChpc09iamVjdChkYXRhLmNsYXNzKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuY2xhc3MpO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UmVuZGVyICh2bSkge1xuICB2bS5fdm5vZGUgPSBudWxsOyAvLyB0aGUgcm9vdCBvZiB0aGUgY2hpbGQgdHJlZVxuICB2bS5fc3RhdGljVHJlZXMgPSBudWxsOyAvLyB2LW9uY2UgY2FjaGVkIHRyZWVzXG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gIHZhciBwYXJlbnRWbm9kZSA9IHZtLiR2bm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlOyAvLyB0aGUgcGxhY2Vob2xkZXIgbm9kZSBpbiBwYXJlbnQgdHJlZVxuICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiwgcmVuZGVyQ29udGV4dCk7XG4gIHZtLiRzY29wZWRTbG90cyA9IGVtcHR5T2JqZWN0O1xuICAvLyBiaW5kIHRoZSBjcmVhdGVFbGVtZW50IGZuIHRvIHRoaXMgaW5zdGFuY2VcbiAgLy8gc28gdGhhdCB3ZSBnZXQgcHJvcGVyIHJlbmRlciBjb250ZXh0IGluc2lkZSBpdC5cbiAgLy8gYXJncyBvcmRlcjogdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUsIGFsd2F5c05vcm1hbGl6ZVxuICAvLyBpbnRlcm5hbCB2ZXJzaW9uIGlzIHVzZWQgYnkgcmVuZGVyIGZ1bmN0aW9ucyBjb21waWxlZCBmcm9tIHRlbXBsYXRlc1xuICB2bS5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCBmYWxzZSk7IH07XG4gIC8vIG5vcm1hbGl6YXRpb24gaXMgYWx3YXlzIGFwcGxpZWQgZm9yIHRoZSBwdWJsaWMgdmVyc2lvbiwgdXNlZCBpblxuICAvLyB1c2VyLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucy5cbiAgdm0uJGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgdHJ1ZSk7IH07XG5cbiAgLy8gJGF0dHJzICYgJGxpc3RlbmVycyBhcmUgZXhwb3NlZCBmb3IgZWFzaWVyIEhPQyBjcmVhdGlvbi5cbiAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxuICB2YXIgcGFyZW50RGF0YSA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmRhdGE7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbmRlck1peGluIChWdWUpIHtcbiAgLy8gaW5zdGFsbCBydW50aW1lIGNvbnZlbmllbmNlIGhlbHBlcnNcbiAgaW5zdGFsbFJlbmRlckhlbHBlcnMoVnVlLnByb3RvdHlwZSk7XG5cbiAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gbmV4dFRpY2soZm4sIHRoaXMpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHJlZiA9IHZtLiRvcHRpb25zO1xuICAgIHZhciByZW5kZXIgPSByZWYucmVuZGVyO1xuICAgIHZhciBfcGFyZW50Vm5vZGUgPSByZWYuX3BhcmVudFZub2RlO1xuXG4gICAgaWYgKF9wYXJlbnRWbm9kZSkge1xuICAgICAgdm0uJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgIF9wYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICB2bS4kc2xvdHMsXG4gICAgICAgIHZtLiRzY29wZWRTbG90c1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgcGFyZW50IHZub2RlLiB0aGlzIGFsbG93cyByZW5kZXIgZnVuY3Rpb25zIHRvIGhhdmUgYWNjZXNzXG4gICAgLy8gdG8gdGhlIGRhdGEgb24gdGhlIHBsYWNlaG9sZGVyIG5vZGUuXG4gICAgdm0uJHZub2RlID0gX3BhcmVudFZub2RlO1xuICAgIC8vIHJlbmRlciBzZWxmXG4gICAgdmFyIHZub2RlO1xuICAgIHRyeSB7XG4gICAgICAvLyBUaGVyZSdzIG5vIG5lZWQgdG8gbWFpbnRhaW4gYSBzdGFjayBiZWNhdXNlIGFsbCByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgIC8vIHNlcGFyYXRlbHkgZnJvbSBvbmUgYW5vdGhlci4gTmVzdGVkIGNvbXBvbmVudCdzIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gd2hlbiBwYXJlbnQgY29tcG9uZW50IGlzIHBhdGNoZWQuXG4gICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSB2bTtcbiAgICAgIHZub2RlID0gcmVuZGVyLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyXCIpO1xuICAgICAgLy8gcmV0dXJuIGVycm9yIHJlbmRlciByZXN1bHQsXG4gICAgICAvLyBvciBwcmV2aW91cyB2bm9kZSB0byBwcmV2ZW50IHJlbmRlciBlcnJvciBjYXVzaW5nIGJsYW5rIGNvbXBvbmVudFxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHZtLiRvcHRpb25zLnJlbmRlckVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdm5vZGUgPSB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQsIGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyRXJyb3JcIik7XG4gICAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgcmV0dXJuZWQgYXJyYXkgY29udGFpbnMgb25seSBhIHNpbmdsZSBub2RlLCBhbGxvdyBpdFxuICAgIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSAmJiB2bm9kZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZub2RlID0gdm5vZGVbMF07XG4gICAgfVxuICAgIC8vIHJldHVybiBlbXB0eSB2bm9kZSBpbiBjYXNlIHRoZSByZW5kZXIgZnVuY3Rpb24gZXJyb3JlZCBvdXRcbiAgICBpZiAoISh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnTXVsdGlwbGUgcm9vdCBub2RlcyByZXR1cm5lZCBmcm9tIHJlbmRlciBmdW5jdGlvbi4gUmVuZGVyIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICdzaG91bGQgcmV0dXJuIGEgc2luZ2xlIHJvb3Qgbm9kZS4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICB9XG4gICAgLy8gc2V0IHBhcmVudFxuICAgIHZub2RlLnBhcmVudCA9IF9wYXJlbnRWbm9kZTtcbiAgICByZXR1cm4gdm5vZGVcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGVuc3VyZUN0b3IgKGNvbXAsIGJhc2UpIHtcbiAgaWYgKFxuICAgIGNvbXAuX19lc01vZHVsZSB8fFxuICAgIChoYXNTeW1ib2wgJiYgY29tcFtTeW1ib2wudG9TdHJpbmdUYWddID09PSAnTW9kdWxlJylcbiAgKSB7XG4gICAgY29tcCA9IGNvbXAuZGVmYXVsdDtcbiAgfVxuICByZXR1cm4gaXNPYmplY3QoY29tcClcbiAgICA/IGJhc2UuZXh0ZW5kKGNvbXApXG4gICAgOiBjb21wXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIgKFxuICBmYWN0b3J5LFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgdmFyIG5vZGUgPSBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gIG5vZGUuYXN5bmNGYWN0b3J5ID0gZmFjdG9yeTtcbiAgbm9kZS5hc3luY01ldGEgPSB7IGRhdGE6IGRhdGEsIGNvbnRleHQ6IGNvbnRleHQsIGNoaWxkcmVuOiBjaGlsZHJlbiwgdGFnOiB0YWcgfTtcbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50IChcbiAgZmFjdG9yeSxcbiAgYmFzZUN0b3Jcbikge1xuICBpZiAoaXNUcnVlKGZhY3RvcnkuZXJyb3IpICYmIGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgIHJldHVybiBmYWN0b3J5LmVycm9yQ29tcFxuICB9XG5cbiAgaWYgKGlzRGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxuXG4gIHZhciBvd25lciA9IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZTtcbiAgaWYgKG93bmVyICYmIGlzRGVmKGZhY3Rvcnkub3duZXJzKSAmJiBmYWN0b3J5Lm93bmVycy5pbmRleE9mKG93bmVyKSA9PT0gLTEpIHtcbiAgICAvLyBhbHJlYWR5IHBlbmRpbmdcbiAgICBmYWN0b3J5Lm93bmVycy5wdXNoKG93bmVyKTtcbiAgfVxuXG4gIGlmIChpc1RydWUoZmFjdG9yeS5sb2FkaW5nKSAmJiBpc0RlZihmYWN0b3J5LmxvYWRpbmdDb21wKSkge1xuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdDb21wXG4gIH1cblxuICBpZiAob3duZXIgJiYgIWlzRGVmKGZhY3Rvcnkub3duZXJzKSkge1xuICAgIHZhciBvd25lcnMgPSBmYWN0b3J5Lm93bmVycyA9IFtvd25lcl07XG4gICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgIHZhciB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgIHZhciB0aW1lclRpbWVvdXQgPSBudWxsXG5cbiAgICA7KG93bmVyKS4kb24oJ2hvb2s6ZGVzdHJveWVkJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVtb3ZlKG93bmVycywgb3duZXIpOyB9KTtcblxuICAgIHZhciBmb3JjZVJlbmRlciA9IGZ1bmN0aW9uIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb3duZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAob3duZXJzW2ldKS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKHRpbWVyTG9hZGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lckxvYWRpbmcpO1xuICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVyVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmUgPSBvbmNlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIC8vIGNhY2hlIHJlc29sdmVkXG4gICAgICBmYWN0b3J5LnJlc29sdmVkID0gZW5zdXJlQ3RvcihyZXMsIGJhc2VDdG9yKTtcbiAgICAgIC8vIGludm9rZSBjYWxsYmFja3Mgb25seSBpZiB0aGlzIGlzIG5vdCBhIHN5bmNocm9ub3VzIHJlc29sdmVcbiAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuICAgICAgaWYgKCFzeW5jKSB7XG4gICAgICAgIGZvcmNlUmVuZGVyKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcmVqZWN0ID0gb25jZShmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50OiBcIiArIChTdHJpbmcoZmFjdG9yeSkpICtcbiAgICAgICAgKHJlYXNvbiA/IChcIlxcblJlYXNvbjogXCIgKyByZWFzb24pIDogJycpXG4gICAgICApO1xuICAgICAgaWYgKGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgICAgICBmYWN0b3J5LmVycm9yID0gdHJ1ZTtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcmVzID0gZmFjdG9yeShyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgaWYgKGlzT2JqZWN0KHJlcykpIHtcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAvLyAoKSA9PiBQcm9taXNlXG4gICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2UocmVzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5lcnJvcikpIHtcbiAgICAgICAgICBmYWN0b3J5LmVycm9yQ29tcCA9IGVuc3VyZUN0b3IocmVzLmVycm9yLCBiYXNlQ3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLmxvYWRpbmcpKSB7XG4gICAgICAgICAgZmFjdG9yeS5sb2FkaW5nQ29tcCA9IGVuc3VyZUN0b3IocmVzLmxvYWRpbmcsIGJhc2VDdG9yKTtcbiAgICAgICAgICBpZiAocmVzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkgJiYgaXNVbmRlZihmYWN0b3J5LmVycm9yKSkge1xuICAgICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXIoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZXMuZGVsYXkgfHwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLnRpbWVvdXQpKSB7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICAgICAgICAgICAgICAgID8gKFwidGltZW91dCAoXCIgKyAocmVzLnRpbWVvdXQpICsgXCJtcylcIilcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN5bmMgPSBmYWxzZTtcbiAgICAvLyByZXR1cm4gaW4gY2FzZSByZXNvbHZlZCBzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ1xuICAgICAgPyBmYWN0b3J5LmxvYWRpbmdDb21wXG4gICAgICA6IGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZCAoY2hpbGRyZW4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjKSAmJiAoaXNEZWYoYy5jb21wb25lbnRPcHRpb25zKSB8fCBpc0FzeW5jUGxhY2Vob2xkZXIoYykpKSB7XG4gICAgICAgIHJldHVybiBjXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0pIHtcbiAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZtLl9oYXNIb29rRXZlbnQgPSBmYWxzZTtcbiAgLy8gaW5pdCBwYXJlbnQgYXR0YWNoZWQgZXZlbnRzXG4gIHZhciBsaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMpO1xuICB9XG59XG5cbnZhciB0YXJnZXQ7XG5cbmZ1bmN0aW9uIGFkZCAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb24oZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlJDEgKGV2ZW50LCBmbikge1xuICB0YXJnZXQuJG9mZihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPbmNlSGFuZGxlciAoZXZlbnQsIGZuKSB7XG4gIHZhciBfdGFyZ2V0ID0gdGFyZ2V0O1xuICByZXR1cm4gZnVuY3Rpb24gb25jZUhhbmRsZXIgKCkge1xuICAgIHZhciByZXMgPSBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIF90YXJnZXQuJG9mZihldmVudCwgb25jZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMgKFxuICB2bSxcbiAgbGlzdGVuZXJzLFxuICBvbGRMaXN0ZW5lcnNcbikge1xuICB0YXJnZXQgPSB2bTtcbiAgdXBkYXRlTGlzdGVuZXJzKGxpc3RlbmVycywgb2xkTGlzdGVuZXJzIHx8IHt9LCBhZGQsIHJlbW92ZSQxLCBjcmVhdGVPbmNlSGFuZGxlciwgdm0pO1xuICB0YXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGV2ZW50c01peGluIChWdWUpIHtcbiAgdmFyIGhvb2tSRSA9IC9eaG9vazovO1xuICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdm0uJG9uKGV2ZW50W2ldLCBmbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICh2bS5fZXZlbnRzW2V2ZW50XSB8fCAodm0uX2V2ZW50c1tldmVudF0gPSBbXSkpLnB1c2goZm4pO1xuICAgICAgLy8gb3B0aW1pemUgaG9vazpldmVudCBjb3N0IGJ5IHVzaW5nIGEgYm9vbGVhbiBmbGFnIG1hcmtlZCBhdCByZWdpc3RyYXRpb25cbiAgICAgIC8vIGluc3RlYWQgb2YgYSBoYXNoIGxvb2t1cFxuICAgICAgaWYgKGhvb2tSRS50ZXN0KGV2ZW50KSkge1xuICAgICAgICB2bS5faGFzSG9va0V2ZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIG9uICgpIHtcbiAgICAgIHZtLiRvZmYoZXZlbnQsIG9uKTtcbiAgICAgIGZuLmFwcGx5KHZtLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBvbi5mbiA9IGZuO1xuICAgIHZtLiRvbihldmVudCwgb24pO1xuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGFsbFxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gYXJyYXkgb2YgZXZlbnRzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpJDEgPCBsOyBpJDErKykge1xuICAgICAgICB2bS4kb2ZmKGV2ZW50W2kkMV0sIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBldmVudFxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWNicykge1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIGlmICghZm4pIHtcbiAgICAgIHZtLl9ldmVudHNbZXZlbnRdID0gbnVsbDtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBoYW5kbGVyXG4gICAgdmFyIGNiO1xuICAgIHZhciBpID0gY2JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjYiA9IGNic1tpXTtcbiAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgIGNicy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbG93ZXJDYXNlRXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGxvd2VyQ2FzZUV2ZW50ICE9PSBldmVudCAmJiB2bS5fZXZlbnRzW2xvd2VyQ2FzZUV2ZW50XSkge1xuICAgICAgICB0aXAoXG4gICAgICAgICAgXCJFdmVudCBcXFwiXCIgKyBsb3dlckNhc2VFdmVudCArIFwiXFxcIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiIGJ1dCB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgeW91IGNhbm5vdCB1c2UgXCIgK1xuICAgICAgICAgIFwidi1vbiB0byBsaXN0ZW4gdG8gY2FtZWxDYXNlIGV2ZW50cyB3aGVuIHVzaW5nIGluLURPTSB0ZW1wbGF0ZXMuIFwiICtcbiAgICAgICAgICBcIllvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIChoeXBoZW5hdGUoZXZlbnQpKSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcbiAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGluZm8gPSBcImV2ZW50IGhhbmRsZXIgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2JzW2ldLCB2bSwgYXJncywgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBhY3RpdmVJbnN0YW5jZSA9IG51bGw7XG52YXIgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUluc3RhbmNlKHZtKSB7XG4gIHZhciBwcmV2QWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZTtcbiAgYWN0aXZlSW5zdGFuY2UgPSB2bTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBhY3RpdmVJbnN0YW5jZSA9IHByZXZBY3RpdmVJbnN0YW5jZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TGlmZWN5Y2xlICh2bSkge1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuXG4gIC8vIGxvY2F0ZSBmaXJzdCBub24tYWJzdHJhY3QgcGFyZW50XG4gIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgaWYgKHBhcmVudCAmJiAhb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgIHdoaWxlIChwYXJlbnQuJG9wdGlvbnMuYWJzdHJhY3QgJiYgcGFyZW50LiRwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgICBwYXJlbnQuJGNoaWxkcmVuLnB1c2godm0pO1xuICB9XG5cbiAgdm0uJHBhcmVudCA9IHBhcmVudDtcbiAgdm0uJHJvb3QgPSBwYXJlbnQgPyBwYXJlbnQuJHJvb3QgOiB2bTtcblxuICB2bS4kY2hpbGRyZW4gPSBbXTtcbiAgdm0uJHJlZnMgPSB7fTtcblxuICB2bS5fd2F0Y2hlciA9IG51bGw7XG4gIHZtLl9pbmFjdGl2ZSA9IG51bGw7XG4gIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICB2bS5faXNNb3VudGVkID0gZmFsc2U7XG4gIHZtLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcHJldkVsID0gdm0uJGVsO1xuICAgIHZhciBwcmV2Vm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgdmFyIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSA9IHNldEFjdGl2ZUluc3RhbmNlKHZtKTtcbiAgICB2bS5fdm5vZGUgPSB2bm9kZTtcbiAgICAvLyBWdWUucHJvdG90eXBlLl9fcGF0Y2hfXyBpcyBpbmplY3RlZCBpbiBlbnRyeSBwb2ludHNcbiAgICAvLyBiYXNlZCBvbiB0aGUgcmVuZGVyaW5nIGJhY2tlbmQgdXNlZC5cbiAgICBpZiAoIXByZXZWbm9kZSkge1xuICAgICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyh2bS4kZWwsIHZub2RlLCBoeWRyYXRpbmcsIGZhbHNlIC8qIHJlbW92ZU9ubHkgKi8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cGRhdGVzXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18ocHJldlZub2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgIC8vIHVwZGF0ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmIChwcmV2RWwpIHtcbiAgICAgIHByZXZFbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSB2bTtcbiAgICB9XG4gICAgLy8gaWYgcGFyZW50IGlzIGFuIEhPQywgdXBkYXRlIGl0cyAkZWwgYXMgd2VsbFxuICAgIGlmICh2bS4kdm5vZGUgJiYgdm0uJHBhcmVudCAmJiB2bS4kdm5vZGUgPT09IHZtLiRwYXJlbnQuX3Zub2RlKSB7XG4gICAgICB2bS4kcGFyZW50LiRlbCA9IHZtLiRlbDtcbiAgICB9XG4gICAgLy8gdXBkYXRlZCBob29rIGlzIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIGFyZVxuICAgIC8vIHVwZGF0ZWQgaW4gYSBwYXJlbnQncyB1cGRhdGVkIGhvb2suXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcbiAgICAgIHZtLl93YXRjaGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVEZXN0cm95Jyk7XG4gICAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gcGFyZW50XG4gICAgdmFyIHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkICYmICF2bS4kb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgcmVtb3ZlKHBhcmVudC4kY2hpbGRyZW4sIHZtKTtcbiAgICB9XG4gICAgLy8gdGVhcmRvd24gd2F0Y2hlcnNcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcbiAgICAgIHZtLl93YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIHZhciBpID0gdm0uX3dhdGNoZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2bS5fd2F0Y2hlcnNbaV0udGVhcmRvd24oKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIHJlZmVyZW5jZSBmcm9tIGRhdGEgb2JcbiAgICAvLyBmcm96ZW4gb2JqZWN0IG1heSBub3QgaGF2ZSBvYnNlcnZlci5cbiAgICBpZiAodm0uX2RhdGEuX19vYl9fKSB7XG4gICAgICB2bS5fZGF0YS5fX29iX18udm1Db3VudC0tO1xuICAgIH1cbiAgICAvLyBjYWxsIHRoZSBsYXN0IGhvb2suLi5cbiAgICB2bS5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIGludm9rZSBkZXN0cm95IGhvb2tzIG9uIGN1cnJlbnQgcmVuZGVyZWQgdHJlZVxuICAgIHZtLl9fcGF0Y2hfXyh2bS5fdm5vZGUsIG51bGwpO1xuICAgIC8vIGZpcmUgZGVzdHJveWVkIGhvb2tcbiAgICBjYWxsSG9vayh2bSwgJ2Rlc3Ryb3llZCcpO1xuICAgIC8vIHR1cm4gb2ZmIGFsbCBpbnN0YW5jZSBsaXN0ZW5lcnMuXG4gICAgdm0uJG9mZigpO1xuICAgIC8vIHJlbW92ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gICAgLy8gcmVsZWFzZSBjaXJjdWxhciByZWZlcmVuY2UgKCM2NzU5KVxuICAgIGlmICh2bS4kdm5vZGUpIHtcbiAgICAgIHZtLiR2bm9kZS5wYXJlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gbW91bnRDb21wb25lbnQgKFxuICB2bSxcbiAgZWwsXG4gIGh5ZHJhdGluZ1xuKSB7XG4gIHZtLiRlbCA9IGVsO1xuICBpZiAoIXZtLiRvcHRpb25zLnJlbmRlcikge1xuICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5Vk5vZGU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCh2bS4kb3B0aW9ucy50ZW1wbGF0ZSAmJiB2bS4kb3B0aW9ucy50ZW1wbGF0ZS5jaGFyQXQoMCkgIT09ICcjJykgfHxcbiAgICAgICAgdm0uJG9wdGlvbnMuZWwgfHwgZWwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgJ2NvbXBpbGVyIGlzIG5vdCBhdmFpbGFibGUuIEVpdGhlciBwcmUtY29tcGlsZSB0aGUgdGVtcGxhdGVzIGludG8gJyArXG4gICAgICAgICAgJ3JlbmRlciBmdW5jdGlvbnMsIG9yIHVzZSB0aGUgY29tcGlsZXItaW5jbHVkZWQgYnVpbGQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnRmFpbGVkIHRvIG1vdW50IGNvbXBvbmVudDogdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uIG5vdCBkZWZpbmVkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xuXG4gIHZhciB1cGRhdGVDb21wb25lbnQ7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgIHVwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuYW1lID0gdm0uX25hbWU7XG4gICAgICB2YXIgaWQgPSB2bS5fdWlkO1xuICAgICAgdmFyIHN0YXJ0VGFnID0gXCJ2dWUtcGVyZi1zdGFydDpcIiArIGlkO1xuICAgICAgdmFyIGVuZFRhZyA9IFwidnVlLXBlcmYtZW5kOlwiICsgaWQ7XG5cbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgdmFyIHZub2RlID0gdm0uX3JlbmRlcigpO1xuICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyBuYW1lICsgXCIgcmVuZGVyXCIpLCBzdGFydFRhZywgZW5kVGFnKTtcblxuICAgICAgbWFyayhzdGFydFRhZyk7XG4gICAgICB2bS5fdXBkYXRlKHZub2RlLCBoeWRyYXRpbmcpO1xuICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyBuYW1lICsgXCIgcGF0Y2hcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdm0uX3VwZGF0ZSh2bS5fcmVuZGVyKCksIGh5ZHJhdGluZyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHdlIHNldCB0aGlzIHRvIHZtLl93YXRjaGVyIGluc2lkZSB0aGUgd2F0Y2hlcidzIGNvbnN0cnVjdG9yXG4gIC8vIHNpbmNlIHRoZSB3YXRjaGVyJ3MgaW5pdGlhbCBwYXRjaCBtYXkgY2FsbCAkZm9yY2VVcGRhdGUgKGUuZy4gaW5zaWRlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCdzIG1vdW50ZWQgaG9vayksIHdoaWNoIHJlbGllcyBvbiB2bS5fd2F0Y2hlciBiZWluZyBhbHJlYWR5IGRlZmluZWRcbiAgbmV3IFdhdGNoZXIodm0sIHVwZGF0ZUNvbXBvbmVudCwgbm9vcCwge1xuICAgIGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlICgpIHtcbiAgICAgIGlmICh2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgY2FsbEhvb2sodm0sICdiZWZvcmVVcGRhdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHRydWUgLyogaXNSZW5kZXJXYXRjaGVyICovKTtcbiAgaHlkcmF0aW5nID0gZmFsc2U7XG5cbiAgLy8gbWFudWFsbHkgbW91bnRlZCBpbnN0YW5jZSwgY2FsbCBtb3VudGVkIG9uIHNlbGZcbiAgLy8gbW91bnRlZCBpcyBjYWxsZWQgZm9yIHJlbmRlci1jcmVhdGVkIGNoaWxkIGNvbXBvbmVudHMgaW4gaXRzIGluc2VydGVkIGhvb2tcbiAgaWYgKHZtLiR2bm9kZSA9PSBudWxsKSB7XG4gICAgdm0uX2lzTW91bnRlZCA9IHRydWU7XG4gICAgY2FsbEhvb2sodm0sICdtb3VudGVkJyk7XG4gIH1cbiAgcmV0dXJuIHZtXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50IChcbiAgdm0sXG4gIHByb3BzRGF0YSxcbiAgbGlzdGVuZXJzLFxuICBwYXJlbnRWbm9kZSxcbiAgcmVuZGVyQ2hpbGRyZW5cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgd2hldGhlciBjb21wb25lbnQgaGFzIHNsb3QgY2hpbGRyZW5cbiAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4uXG5cbiAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGR5bmFtaWMgc2NvcGVkU2xvdHMgKGhhbmQtd3JpdHRlbiBvciBjb21waWxlZCBidXQgd2l0aFxuICAvLyBkeW5hbWljIHNsb3QgbmFtZXMpLiBTdGF0aWMgc2NvcGVkIHNsb3RzIGNvbXBpbGVkIGZyb20gdGVtcGxhdGUgaGFzIHRoZVxuICAvLyBcIiRzdGFibGVcIiBtYXJrZXIuXG4gIHZhciBuZXdTY29wZWRTbG90cyA9IHBhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHM7XG4gIHZhciBvbGRTY29wZWRTbG90cyA9IHZtLiRzY29wZWRTbG90cztcbiAgdmFyIGhhc0R5bmFtaWNTY29wZWRTbG90ID0gISEoXG4gICAgKG5ld1Njb3BlZFNsb3RzICYmICFuZXdTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChvbGRTY29wZWRTbG90cyAhPT0gZW1wdHlPYmplY3QgJiYgIW9sZFNjb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgKG5ld1Njb3BlZFNsb3RzICYmIHZtLiRzY29wZWRTbG90cy4ka2V5ICE9PSBuZXdTY29wZWRTbG90cy4ka2V5KSB8fFxuICAgICghbmV3U2NvcGVkU2xvdHMgJiYgdm0uJHNjb3BlZFNsb3RzLiRrZXkpXG4gICk7XG5cbiAgLy8gQW55IHN0YXRpYyBzbG90IGNoaWxkcmVuIGZyb20gdGhlIHBhcmVudCBtYXkgaGF2ZSBjaGFuZ2VkIGR1cmluZyBwYXJlbnQnc1xuICAvLyB1cGRhdGUuIER5bmFtaWMgc2NvcGVkIHNsb3RzIG1heSBhbHNvIGhhdmUgY2hhbmdlZC4gSW4gc3VjaCBjYXNlcywgYSBmb3JjZWRcbiAgLy8gdXBkYXRlIGlzIG5lY2Vzc2FyeSB0byBlbnN1cmUgY29ycmVjdG5lc3MuXG4gIHZhciBuZWVkc0ZvcmNlVXBkYXRlID0gISEoXG4gICAgcmVuZGVyQ2hpbGRyZW4gfHwgICAgICAgICAgICAgICAvLyBoYXMgbmV3IHN0YXRpYyBzbG90c1xuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICBoYXNEeW5hbWljU2NvcGVkU2xvdFxuICApO1xuXG4gIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICB2bS4kdm5vZGUgPSBwYXJlbnRWbm9kZTsgLy8gdXBkYXRlIHZtJ3MgcGxhY2Vob2xkZXIgbm9kZSB3aXRob3V0IHJlLXJlbmRlclxuXG4gIGlmICh2bS5fdm5vZGUpIHsgLy8gdXBkYXRlIGNoaWxkIHRyZWUncyBwYXJlbnRcbiAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gIH1cbiAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuID0gcmVuZGVyQ2hpbGRyZW47XG5cbiAgLy8gdXBkYXRlICRhdHRycyBhbmQgJGxpc3RlbmVycyBoYXNoXG4gIC8vIHRoZXNlIGFyZSBhbHNvIHJlYWN0aXZlIHNvIHRoZXkgbWF5IHRyaWdnZXIgY2hpbGQgdXBkYXRlIGlmIHRoZSBjaGlsZFxuICAvLyB1c2VkIHRoZW0gZHVyaW5nIHJlbmRlclxuICB2bS4kYXR0cnMgPSBwYXJlbnRWbm9kZS5kYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0O1xuICB2bS4kbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuXG4gIC8vIHVwZGF0ZSBwcm9wc1xuICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICB2YXIgcHJvcHMgPSB2bS5fcHJvcHM7XG4gICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgfVxuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAvLyBrZWVwIGEgY29weSBvZiByYXcgcHJvcHNEYXRhXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhID0gcHJvcHNEYXRhO1xuICB9XG5cbiAgLy8gdXBkYXRlIGxpc3RlbmVyc1xuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKTtcblxuICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICBpZiAobmVlZHNGb3JjZVVwZGF0ZSkge1xuICAgIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhyZW5kZXJDaGlsZHJlbiwgcGFyZW50Vm5vZGUuY29udGV4dCk7XG4gICAgdm0uJGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW5JbmFjdGl2ZVRyZWUgKHZtKSB7XG4gIHdoaWxlICh2bSAmJiAodm0gPSB2bS4kcGFyZW50KSkge1xuICAgIGlmICh2bS5faW5hY3RpdmUpIHsgcmV0dXJuIHRydWUgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSBlbHNlIGlmICh2bS5fZGlyZWN0SW5hY3RpdmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodm0uX2luYWN0aXZlIHx8IHZtLl9pbmFjdGl2ZSA9PT0gbnVsbCkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50ICh2bSwgZGlyZWN0KSB7XG4gIGlmIChkaXJlY3QpIHtcbiAgICB2bS5fZGlyZWN0SW5hY3RpdmUgPSB0cnVlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGlmICghdm0uX2luYWN0aXZlKSB7XG4gICAgdm0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHZtLiRjaGlsZHJlbltpXSk7XG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnZGVhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayAodm0sIGhvb2spIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHZhciBoYW5kbGVycyA9IHZtLiRvcHRpb25zW2hvb2tdO1xuICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gIGlmIChoYW5kbGVycykge1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhoYW5kbGVyc1tpXSwgdm0sIG51bGwsIHZtLCBpbmZvKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gIH1cbiAgcG9wVGFyZ2V0KCk7XG59XG5cbi8qICAqL1xuXG52YXIgTUFYX1VQREFURV9DT1VOVCA9IDEwMDtcblxudmFyIHF1ZXVlID0gW107XG52YXIgYWN0aXZhdGVkQ2hpbGRyZW4gPSBbXTtcbnZhciBoYXMgPSB7fTtcbnZhciBjaXJjdWxhciA9IHt9O1xudmFyIHdhaXRpbmcgPSBmYWxzZTtcbnZhciBmbHVzaGluZyA9IGZhbHNlO1xudmFyIGluZGV4ID0gMDtcblxuLyoqXG4gKiBSZXNldCB0aGUgc2NoZWR1bGVyJ3Mgc3RhdGUuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0U2NoZWR1bGVyU3RhdGUgKCkge1xuICBpbmRleCA9IHF1ZXVlLmxlbmd0aCA9IGFjdGl2YXRlZENoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIGhhcyA9IHt9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNpcmN1bGFyID0ge307XG4gIH1cbiAgd2FpdGluZyA9IGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSAjNjU2NiByZXF1aXJlcyBzYXZpbmcgdGhlIHRpbWVzdGFtcCB3aGVuIGV2ZW50IGxpc3RlbmVycyBhcmVcbi8vIGF0dGFjaGVkLiBIb3dldmVyLCBjYWxsaW5nIHBlcmZvcm1hbmNlLm5vdygpIGhhcyBhIHBlcmYgb3ZlcmhlYWQgZXNwZWNpYWxseVxuLy8gaWYgdGhlIHBhZ2UgaGFzIHRob3VzYW5kcyBvZiBldmVudCBsaXN0ZW5lcnMuIEluc3RlYWQsIHdlIHRha2UgYSB0aW1lc3RhbXBcbi8vIGV2ZXJ5IHRpbWUgdGhlIHNjaGVkdWxlciBmbHVzaGVzIGFuZCB1c2UgdGhhdCBmb3IgYWxsIGV2ZW50IGxpc3RlbmVyc1xuLy8gYXR0YWNoZWQgZHVyaW5nIHRoYXQgZmx1c2guXG52YXIgY3VycmVudEZsdXNoVGltZXN0YW1wID0gMDtcblxuLy8gQXN5bmMgZWRnZSBjYXNlIGZpeCByZXF1aXJlcyBzdG9yaW5nIGFuIGV2ZW50IGxpc3RlbmVyJ3MgYXR0YWNoIHRpbWVzdGFtcC5cbnZhciBnZXROb3cgPSBEYXRlLm5vdztcblxuLy8gRGV0ZXJtaW5lIHdoYXQgZXZlbnQgdGltZXN0YW1wIHRoZSBicm93c2VyIGlzIHVzaW5nLiBBbm5veWluZ2x5LCB0aGVcbi8vIHRpbWVzdGFtcCBjYW4gZWl0aGVyIGJlIGhpLXJlcyAocmVsYXRpdmUgdG8gcGFnZSBsb2FkKSBvciBsb3ctcmVzXG4vLyAocmVsYXRpdmUgdG8gVU5JWCBlcG9jaCksIHNvIGluIG9yZGVyIHRvIGNvbXBhcmUgdGltZSB3ZSBoYXZlIHRvIHVzZSB0aGVcbi8vIHNhbWUgdGltZXN0YW1wIHR5cGUgd2hlbiBzYXZpbmcgdGhlIGZsdXNoIHRpbWVzdGFtcC5cbi8vIEFsbCBJRSB2ZXJzaW9ucyB1c2UgbG93LXJlcyBldmVudCB0aW1lc3RhbXBzLCBhbmQgaGF2ZSBwcm9ibGVtYXRpYyBjbG9ja1xuLy8gaW1wbGVtZW50YXRpb25zICgjOTYzMilcbmlmIChpbkJyb3dzZXIgJiYgIWlzSUUpIHtcbiAgdmFyIHBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICBpZiAoXG4gICAgcGVyZm9ybWFuY2UgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nICYmXG4gICAgZ2V0Tm93KCkgPiBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKS50aW1lU3RhbXBcbiAgKSB7XG4gICAgLy8gaWYgdGhlIGV2ZW50IHRpbWVzdGFtcCwgYWx0aG91Z2ggZXZhbHVhdGVkIEFGVEVSIHRoZSBEYXRlLm5vdygpLCBpc1xuICAgIC8vIHNtYWxsZXIgdGhhbiBpdCwgaXQgbWVhbnMgdGhlIGV2ZW50IGlzIHVzaW5nIGEgaGktcmVzIHRpbWVzdGFtcCxcbiAgICAvLyBhbmQgd2UgbmVlZCB0byB1c2UgdGhlIGhpLXJlcyB2ZXJzaW9uIGZvciBldmVudCBsaXN0ZW5lciB0aW1lc3RhbXBzIGFzXG4gICAgLy8gd2VsbC5cbiAgICBnZXROb3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTsgfTtcbiAgfVxufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5mdW5jdGlvbiBmbHVzaFNjaGVkdWxlclF1ZXVlICgpIHtcbiAgY3VycmVudEZsdXNoVGltZXN0YW1wID0gZ2V0Tm93KCk7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgdmFyIHdhdGNoZXIsIGlkO1xuXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgLy8gMS4gQ29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZC4gKGJlY2F1c2UgcGFyZW50IGlzIGFsd2F5c1xuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgLy8gICAgdXNlciB3YXRjaGVycyBhcmUgY3JlYXRlZCBiZWZvcmUgdGhlIHJlbmRlciB3YXRjaGVyKVxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gIHF1ZXVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcblxuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHdhdGNoZXIgPSBxdWV1ZVtpbmRleF07XG4gICAgaWYgKHdhdGNoZXIuYmVmb3JlKSB7XG4gICAgICB3YXRjaGVyLmJlZm9yZSgpO1xuICAgIH1cbiAgICBpZCA9IHdhdGNoZXIuaWQ7XG4gICAgaGFzW2lkXSA9IG51bGw7XG4gICAgd2F0Y2hlci5ydW4oKTtcbiAgICAvLyBpbiBkZXYgYnVpbGQsIGNoZWNrIGFuZCBzdG9wIGNpcmN1bGFyIHVwZGF0ZXMuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaGFzW2lkXSAhPSBudWxsKSB7XG4gICAgICBjaXJjdWxhcltpZF0gPSAoY2lyY3VsYXJbaWRdIHx8IDApICsgMTtcbiAgICAgIGlmIChjaXJjdWxhcltpZF0gPiBNQVhfVVBEQVRFX0NPVU5UKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCAnICsgKFxuICAgICAgICAgICAgd2F0Y2hlci51c2VyXG4gICAgICAgICAgICAgID8gKFwiaW4gd2F0Y2hlciB3aXRoIGV4cHJlc3Npb24gXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIilcbiAgICAgICAgICAgICAgOiBcImluIGEgY29tcG9uZW50IHJlbmRlciBmdW5jdGlvbi5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgd2F0Y2hlci52bVxuICAgICAgICApO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGtlZXAgY29waWVzIG9mIHBvc3QgcXVldWVzIGJlZm9yZSByZXNldHRpbmcgc3RhdGVcbiAgdmFyIGFjdGl2YXRlZFF1ZXVlID0gYWN0aXZhdGVkQ2hpbGRyZW4uc2xpY2UoKTtcbiAgdmFyIHVwZGF0ZWRRdWV1ZSA9IHF1ZXVlLnNsaWNlKCk7XG5cbiAgcmVzZXRTY2hlZHVsZXJTdGF0ZSgpO1xuXG4gIC8vIGNhbGwgY29tcG9uZW50IHVwZGF0ZWQgYW5kIGFjdGl2YXRlZCBob29rc1xuICBjYWxsQWN0aXZhdGVkSG9va3MoYWN0aXZhdGVkUXVldWUpO1xuICBjYWxsVXBkYXRlZEhvb2tzKHVwZGF0ZWRRdWV1ZSk7XG5cbiAgLy8gZGV2dG9vbCBob29rXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZGV2dG9vbHMgJiYgY29uZmlnLmRldnRvb2xzKSB7XG4gICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVXBkYXRlZEhvb2tzIChxdWV1ZSkge1xuICB2YXIgaSA9IHF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciB3YXRjaGVyID0gcXVldWVbaV07XG4gICAgdmFyIHZtID0gd2F0Y2hlci52bTtcbiAgICBpZiAodm0uX3dhdGNoZXIgPT09IHdhdGNoZXIgJiYgdm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICBjYWxsSG9vayh2bSwgJ3VwZGF0ZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBRdWV1ZSBhIGtlcHQtYWxpdmUgY29tcG9uZW50IHRoYXQgd2FzIGFjdGl2YXRlZCBkdXJpbmcgcGF0Y2guXG4gKiBUaGUgcXVldWUgd2lsbCBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIGVudGlyZSB0cmVlIGhhcyBiZWVuIHBhdGNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50ICh2bSkge1xuICAvLyBzZXR0aW5nIF9pbmFjdGl2ZSB0byBmYWxzZSBoZXJlIHNvIHRoYXQgYSByZW5kZXIgZnVuY3Rpb24gY2FuXG4gIC8vIHJlbHkgb24gY2hlY2tpbmcgd2hldGhlciBpdCdzIGluIGFuIGluYWN0aXZlIHRyZWUgKGUuZy4gcm91dGVyLXZpZXcpXG4gIHZtLl9pbmFjdGl2ZSA9IGZhbHNlO1xuICBhY3RpdmF0ZWRDaGlsZHJlbi5wdXNoKHZtKTtcbn1cblxuZnVuY3Rpb24gY2FsbEFjdGl2YXRlZEhvb2tzIChxdWV1ZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0uX2luYWN0aXZlID0gdHJ1ZTtcbiAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KHF1ZXVlW2ldLCB0cnVlIC8qIHRydWUgKi8pO1xuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlV2F0Y2hlciAod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgaGFzW2lkXSA9IHRydWU7XG4gICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgcXVldWUucHVzaCh3YXRjaGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgYWxyZWFkeSBmbHVzaGluZywgc3BsaWNlIHRoZSB3YXRjaGVyIGJhc2VkIG9uIGl0cyBpZFxuICAgICAgLy8gaWYgYWxyZWFkeSBwYXN0IGl0cyBpZCwgaXQgd2lsbCBiZSBydW4gbmV4dCBpbW1lZGlhdGVseS5cbiAgICAgIHZhciBpID0gcXVldWUubGVuZ3RoIC0gMTtcbiAgICAgIHdoaWxlIChpID4gaW5kZXggJiYgcXVldWVbaV0uaWQgPiB3YXRjaGVyLmlkKSB7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICAgIHF1ZXVlLnNwbGljZShpICsgMSwgMCwgd2F0Y2hlcik7XG4gICAgfVxuICAgIC8vIHF1ZXVlIHRoZSBmbHVzaFxuICAgIGlmICghd2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAgICAgZmx1c2hTY2hlZHVsZXJRdWV1ZSgpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG5leHRUaWNrKGZsdXNoU2NoZWR1bGVyUXVldWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuXG5cbnZhciB1aWQkMiA9IDA7XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKi9cbnZhciBXYXRjaGVyID0gZnVuY3Rpb24gV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBjYixcbiAgb3B0aW9ucyxcbiAgaXNSZW5kZXJXYXRjaGVyXG4pIHtcbiAgdGhpcy52bSA9IHZtO1xuICBpZiAoaXNSZW5kZXJXYXRjaGVyKSB7XG4gICAgdm0uX3dhdGNoZXIgPSB0aGlzO1xuICB9XG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICAvLyBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgdGhpcy5kZWVwID0gISFvcHRpb25zLmRlZXA7XG4gICAgdGhpcy51c2VyID0gISFvcHRpb25zLnVzZXI7XG4gICAgdGhpcy5sYXp5ID0gISFvcHRpb25zLmxhenk7XG4gICAgdGhpcy5zeW5jID0gISFvcHRpb25zLnN5bmM7XG4gICAgdGhpcy5iZWZvcmUgPSBvcHRpb25zLmJlZm9yZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgfVxuICB0aGlzLmNiID0gY2I7XG4gIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW107XG4gIHRoaXMubmV3RGVwcyA9IFtdO1xuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5leHByZXNzaW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gZXhwT3JGbi50b1N0cmluZygpXG4gICAgOiAnJztcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKTtcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IG5vb3A7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHdhdGNoaW5nIHBhdGg6IFxcXCJcIiArIGV4cE9yRm4gKyBcIlxcXCIgXCIgK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpO1xufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoKSB7XG4gIHB1c2hUYXJnZXQodGhpcyk7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHZtID0gdGhpcy52bTtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodm0sIHZtKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAoXCJnZXR0ZXIgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAgIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICAgIGlmICh0aGlzLmRlZXApIHtcbiAgICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGVhbnVwRGVwcygpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufTtcblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiBhZGREZXAgKGRlcCkge1xuICB2YXIgaWQgPSBkZXAuaWQ7XG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZCk7XG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmNsZWFudXBEZXBzID0gZnVuY3Rpb24gY2xlYW51cERlcHMgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgZGVwID0gdGhpcy5kZXBzW2ldO1xuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICB9XG4gIHZhciB0bXAgPSB0aGlzLmRlcElkcztcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKCk7XG4gIHRtcCA9IHRoaXMuZGVwcztcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xuICB0aGlzLm5ld0RlcHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgICB0aGlzLnJ1bigpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY2hlZHVsZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgaXNPYmplY3QodmFsdWUpIHx8XG4gICAgICB0aGlzLmRlZXBcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIHZhciBpbmZvID0gXCJjYWxsYmFjayBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiO1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyh0aGlzLmNiLCB0aGlzLnZtLCBbdmFsdWUsIG9sZFZhbHVlXSwgdGhpcy52bSwgaW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gIHRoaXMuZGlydHkgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YnNjcmliZXIgbGlzdC5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcyk7XG4gICAgfVxuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgfTtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbDtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdO1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xuICBpZiAob3B0cy5wcm9wcykgeyBpbml0UHJvcHModm0sIG9wdHMucHJvcHMpOyB9XG4gIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG4gIH1cbiAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xuICAgIGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzICh2bSwgcHJvcHNPcHRpb25zKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9O1xuICAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgdmFyIGtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgPSBbXTtcbiAgdmFyIGlzUm9vdCA9ICF2bS4kcGFyZW50O1xuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgaWYgKCFpc1Jvb3QpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICB9XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoaHlwaGVuYXRlZEtleSkgfHxcbiAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJcXFwiXCIgKyBoeXBoZW5hdGVkS2V5ICsgXCJcXFwiIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBjb21wb25lbnQgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSb290ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhIHByb3AgZGlyZWN0bHkgc2luY2UgdGhlIHZhbHVlIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcGFyZW50IGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcIkluc3RlYWQsIHVzZSBhIGRhdGEgb3IgY29tcHV0ZWQgcHJvcGVydHkgYmFzZWQgb24gdGhlIHByb3AncyBcIiArXG4gICAgICAgICAgICBcInZhbHVlLiBQcm9wIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICAvLyBzdGF0aWMgcHJvcHMgYXJlIGFscmVhZHkgcHJveGllZCBvbiB0aGUgY29tcG9uZW50J3MgcHJvdG90eXBlXG4gICAgLy8gZHVyaW5nIFZ1ZS5leHRlbmQoKS4gV2Ugb25seSBuZWVkIHRvIHByb3h5IHByb3BzIGRlZmluZWQgYXRcbiAgICAvLyBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgcHJveHkodm0sIFwiX3Byb3BzXCIsIGtleSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wc09wdGlvbnMpIGxvb3AoIGtleSApO1xuICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICB2YXIgZGF0YSA9IHZtLiRvcHRpb25zLmRhdGE7XG4gIGRhdGEgPSB2bS5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nXG4gICAgPyBnZXREYXRhKGRhdGEsIHZtKVxuICAgIDogZGF0YSB8fCB7fTtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9O1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdkYXRhIGZ1bmN0aW9ucyBzaG91bGQgcmV0dXJuIGFuIG9iamVjdDpcXG4nICtcbiAgICAgICdodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9jb21wb25lbnRzLmh0bWwjZGF0YS1NdXN0LUJlLWEtRnVuY3Rpb24nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgdmFyIHByb3BzID0gdm0uJG9wdGlvbnMucHJvcHM7XG4gIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAobWV0aG9kcyAmJiBoYXNPd24obWV0aG9kcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgZGF0YSBwcm9wZXJ0eS5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIlRoZSBkYXRhIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlY2xhcmVkIGFzIGEgcHJvcC4gXCIgK1xuICAgICAgICBcIlVzZSBwcm9wIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC5cIixcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICBwcm94eSh2bSwgXCJfZGF0YVwiLCBrZXkpO1xuICAgIH1cbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB0cnVlIC8qIGFzUm9vdERhdGEgKi8pO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhIChkYXRhLCB2bSkge1xuICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgZGF0YSBnZXR0ZXJzXG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGF0YS5jYWxsKHZtLCB2bSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcImRhdGEoKVwiKTtcbiAgICByZXR1cm4ge31cbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG52YXIgY29tcHV0ZWRXYXRjaGVyT3B0aW9ucyA9IHsgbGF6eTogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtLCBjb21wdXRlZCkge1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgdmFyIHdhdGNoZXJzID0gdm0uX2NvbXB1dGVkV2F0Y2hlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvLyBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBqdXN0IGdldHRlcnMgZHVyaW5nIFNTUlxuICB2YXIgaXNTU1IgPSBpc1NlcnZlclJlbmRlcmluZygpO1xuXG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIHZhciB1c2VyRGVmID0gY29tcHV0ZWRba2V5XTtcbiAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZ2V0dGVyID09IG51bGwpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkdldHRlciBpcyBtaXNzaW5nIGZvciBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzU1NSKSB7XG4gICAgICAvLyBjcmVhdGUgaW50ZXJuYWwgd2F0Y2hlciBmb3IgdGhlIGNvbXB1dGVkIHByb3BlcnR5LlxuICAgICAgd2F0Y2hlcnNba2V5XSA9IG5ldyBXYXRjaGVyKFxuICAgICAgICB2bSxcbiAgICAgICAgZ2V0dGVyIHx8IG5vb3AsXG4gICAgICAgIG5vb3AsXG4gICAgICAgIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50LWRlZmluZWQgY29tcHV0ZWQgcHJvcGVydGllcyBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZVxuICAgIC8vIGNvbXBvbmVudCBwcm90b3R5cGUuIFdlIG9ubHkgbmVlZCB0byBkZWZpbmUgY29tcHV0ZWQgcHJvcGVydGllcyBkZWZpbmVkXG4gICAgLy8gYXQgaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIGRlZmluZUNvbXB1dGVkKHZtLCBrZXksIHVzZXJEZWYpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGtleSBpbiB2bS4kZGF0YSkge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGluIGRhdGEuXCIpLCB2bSk7XG4gICAgICB9IGVsc2UgaWYgKHZtLiRvcHRpb25zLnByb3BzICYmIGtleSBpbiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGFzIGEgcHJvcC5cIiksIHZtKTtcbiAgICAgIH0gZWxzZSBpZiAodm0uJG9wdGlvbnMubWV0aG9kcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMubWV0aG9kcykge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGFzIGEgbWV0aG9kLlwiKSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVDb21wdXRlZCAoXG4gIHRhcmdldCxcbiAga2V5LFxuICB1c2VyRGVmXG4pIHtcbiAgdmFyIHNob3VsZENhY2hlID0gIWlzU2VydmVyUmVuZGVyaW5nKCk7XG4gIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxuICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZik7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gIH0gZWxzZSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZi5nZXQpXG4gICAgICA6IG5vb3A7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IHVzZXJEZWYuc2V0IHx8IG5vb3A7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkR2V0dGVyIChrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdmFyIGluZm8gPSBcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiO1xuICAgICAgcHVzaFRhcmdldCgpO1xuICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2IsIHZtLCBbd2F0Y2hlci52YWx1ZV0sIHZtLCBpbmZvKTtcbiAgICAgIHBvcFRhcmdldCgpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuICgpIHtcbiAgICAgIHdhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkJDMgPSAwO1xuXG5mdW5jdGlvbiBpbml0TWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGEgdWlkXG4gICAgdm0uX3VpZCA9IHVpZCQzKys7XG5cbiAgICB2YXIgc3RhcnRUYWcsIGVuZFRhZztcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgKHZtLl91aWQpO1xuICAgICAgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICB9XG5cbiAgICAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuICAgIHZtLl9pc1Z1ZSA9IHRydWU7XG4gICAgLy8gbWVyZ2Ugb3B0aW9uc1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuX2lzQ29tcG9uZW50KSB7XG4gICAgICAvLyBvcHRpbWl6ZSBpbnRlcm5hbCBjb21wb25lbnQgaW5zdGFudGlhdGlvblxuICAgICAgLy8gc2luY2UgZHluYW1pYyBvcHRpb25zIG1lcmdpbmcgaXMgcHJldHR5IHNsb3csIGFuZCBub25lIG9mIHRoZVxuICAgICAgLy8gaW50ZXJuYWwgY29tcG9uZW50IG9wdGlvbnMgbmVlZHMgc3BlY2lhbCB0cmVhdG1lbnQuXG4gICAgICBpbml0SW50ZXJuYWxDb21wb25lbnQodm0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgICAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyh2bS5jb25zdHJ1Y3RvciksXG4gICAgICAgIG9wdGlvbnMgfHwge30sXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpbml0UHJveHkodm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gICAgLy8gZXhwb3NlIHJlYWwgc2VsZlxuICAgIHZtLl9zZWxmID0gdm07XG4gICAgaW5pdExpZmVjeWNsZSh2bSk7XG4gICAgaW5pdEV2ZW50cyh2bSk7XG4gICAgaW5pdFJlbmRlcih2bSk7XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVDcmVhdGUnKTtcbiAgICBpbml0SW5qZWN0aW9ucyh2bSk7IC8vIHJlc29sdmUgaW5qZWN0aW9ucyBiZWZvcmUgZGF0YS9wcm9wc1xuICAgIGluaXRTdGF0ZSh2bSk7XG4gICAgaW5pdFByb3ZpZGUodm0pOyAvLyByZXNvbHZlIHByb3ZpZGUgYWZ0ZXIgZGF0YS9wcm9wc1xuICAgIGNhbGxIb29rKHZtLCAnY3JlYXRlZCcpO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICAgIHZtLl9uYW1lID0gZm9ybWF0Q29tcG9uZW50TmFtZSh2bSwgZmFsc2UpO1xuICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyAodm0uX25hbWUpICsgXCIgaW5pdFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgfVxuXG4gICAgaWYgKHZtLiRvcHRpb25zLmVsKSB7XG4gICAgICB2bS4kbW91bnQodm0uJG9wdGlvbnMuZWwpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdEludGVybmFsQ29tcG9uZW50ICh2bSwgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zID0gT2JqZWN0LmNyZWF0ZSh2bS5jb25zdHJ1Y3Rvci5vcHRpb25zKTtcbiAgLy8gZG9pbmcgdGhpcyBiZWNhdXNlIGl0J3MgZmFzdGVyIHRoYW4gZHluYW1pYyBlbnVtZXJhdGlvbi5cbiAgdmFyIHBhcmVudFZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7XG4gIG9wdHMucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIG9wdHMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG5cbiAgdmFyIHZub2RlQ29tcG9uZW50T3B0aW9ucyA9IHBhcmVudFZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIG9wdHMucHJvcHNEYXRhID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnByb3BzRGF0YTtcbiAgb3B0cy5fcGFyZW50TGlzdGVuZXJzID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmxpc3RlbmVycztcbiAgb3B0cy5fcmVuZGVyQ2hpbGRyZW4gPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMuY2hpbGRyZW47XG4gIG9wdHMuX2NvbXBvbmVudFRhZyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy50YWc7XG5cbiAgaWYgKG9wdGlvbnMucmVuZGVyKSB7XG4gICAgb3B0cy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICBvcHRzLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIGlmIChDdG9yLnN1cGVyKSB7XG4gICAgdmFyIHN1cGVyT3B0aW9ucyA9IHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvci5zdXBlcik7XG4gICAgdmFyIGNhY2hlZFN1cGVyT3B0aW9ucyA9IEN0b3Iuc3VwZXJPcHRpb25zO1xuICAgIGlmIChzdXBlck9wdGlvbnMgIT09IGNhY2hlZFN1cGVyT3B0aW9ucykge1xuICAgICAgLy8gc3VwZXIgb3B0aW9uIGNoYW5nZWQsXG4gICAgICAvLyBuZWVkIHRvIHJlc29sdmUgbmV3IG9wdGlvbnMuXG4gICAgICBDdG9yLnN1cGVyT3B0aW9ucyA9IHN1cGVyT3B0aW9ucztcbiAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcbiAgICAgIHZhciBtb2RpZmllZE9wdGlvbnMgPSByZXNvbHZlTW9kaWZpZWRPcHRpb25zKEN0b3IpO1xuICAgICAgLy8gdXBkYXRlIGJhc2UgZXh0ZW5kIG9wdGlvbnNcbiAgICAgIGlmIChtb2RpZmllZE9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKEN0b3IuZXh0ZW5kT3B0aW9ucywgbW9kaWZpZWRPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoc3VwZXJPcHRpb25zLCBDdG9yLmV4dGVuZE9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbb3B0aW9ucy5uYW1lXSA9IEN0b3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNb2RpZmllZE9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG1vZGlmaWVkO1xuICB2YXIgbGF0ZXN0ID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgc2VhbGVkID0gQ3Rvci5zZWFsZWRPcHRpb25zO1xuICBmb3IgKHZhciBrZXkgaW4gbGF0ZXN0KSB7XG4gICAgaWYgKGxhdGVzdFtrZXldICE9PSBzZWFsZWRba2V5XSkge1xuICAgICAgaWYgKCFtb2RpZmllZCkgeyBtb2RpZmllZCA9IHt9OyB9XG4gICAgICBtb2RpZmllZFtrZXldID0gbGF0ZXN0W2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBtb2RpZmllZFxufVxuXG5mdW5jdGlvbiBWdWUgKG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAhKHRoaXMgaW5zdGFuY2VvZiBWdWUpXG4gICkge1xuICAgIHdhcm4oJ1Z1ZSBpcyBhIGNvbnN0cnVjdG9yIGFuZCBzaG91bGQgYmUgY2FsbGVkIHdpdGggdGhlIGBuZXdgIGtleXdvcmQnKTtcbiAgfVxuICB0aGlzLl9pbml0KG9wdGlvbnMpO1xufVxuXG5pbml0TWl4aW4oVnVlKTtcbnN0YXRlTWl4aW4oVnVlKTtcbmV2ZW50c01peGluKFZ1ZSk7XG5saWZlY3ljbGVNaXhpbihWdWUpO1xucmVuZGVyTWl4aW4oVnVlKTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRVc2UgKFZ1ZSkge1xuICBWdWUudXNlID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIHZhciBpbnN0YWxsZWRQbHVnaW5zID0gKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgfHwgKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgPSBbXSkpO1xuICAgIGlmIChpbnN0YWxsZWRQbHVnaW5zLmluZGV4T2YocGx1Z2luKSA+IC0xKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8vIGFkZGl0aW9uYWwgcGFyYW1ldGVyc1xuICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICBpZiAodHlwZW9mIHBsdWdpbi5pbnN0YWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uaW5zdGFsbC5hcHBseShwbHVnaW4sIGFyZ3MpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdE1peGluJDEgKFZ1ZSkge1xuICBWdWUubWl4aW4gPSBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCBtaXhpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRFeHRlbmQgKFZ1ZSkge1xuICAvKipcbiAgICogRWFjaCBpbnN0YW5jZSBjb25zdHJ1Y3RvciwgaW5jbHVkaW5nIFZ1ZSwgaGFzIGEgdW5pcXVlXG4gICAqIGNpZC4gVGhpcyBlbmFibGVzIHVzIHRvIGNyZWF0ZSB3cmFwcGVkIFwiY2hpbGRcbiAgICogY29uc3RydWN0b3JzXCIgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UgYW5kIGNhY2hlIHRoZW0uXG4gICAqL1xuICBWdWUuY2lkID0gMDtcbiAgdmFyIGNpZCA9IDE7XG5cbiAgLyoqXG4gICAqIENsYXNzIGluaGVyaXRhbmNlXG4gICAqL1xuICBWdWUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuZE9wdGlvbnMpIHtcbiAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgU3VwZXIgPSB0aGlzO1xuICAgIHZhciBTdXBlcklkID0gU3VwZXIuY2lkO1xuICAgIHZhciBjYWNoZWRDdG9ycyA9IGV4dGVuZE9wdGlvbnMuX0N0b3IgfHwgKGV4dGVuZE9wdGlvbnMuX0N0b3IgPSB7fSk7XG4gICAgaWYgKGNhY2hlZEN0b3JzW1N1cGVySWRdKSB7XG4gICAgICByZXR1cm4gY2FjaGVkQ3RvcnNbU3VwZXJJZF1cbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IGV4dGVuZE9wdGlvbnMubmFtZSB8fCBTdXBlci5vcHRpb25zLm5hbWU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbmFtZSkge1xuICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIHZhciBTdWIgPSBmdW5jdGlvbiBWdWVDb21wb25lbnQgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2luaXQob3B0aW9ucyk7XG4gICAgfTtcbiAgICBTdWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpO1xuICAgIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWI7XG4gICAgU3ViLmNpZCA9IGNpZCsrO1xuICAgIFN1Yi5vcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgU3VwZXIub3B0aW9ucyxcbiAgICAgIGV4dGVuZE9wdGlvbnNcbiAgICApO1xuICAgIFN1Ylsnc3VwZXInXSA9IFN1cGVyO1xuXG4gICAgLy8gRm9yIHByb3BzIGFuZCBjb21wdXRlZCBwcm9wZXJ0aWVzLCB3ZSBkZWZpbmUgdGhlIHByb3h5IGdldHRlcnMgb25cbiAgICAvLyB0aGUgVnVlIGluc3RhbmNlcyBhdCBleHRlbnNpb24gdGltZSwgb24gdGhlIGV4dGVuZGVkIHByb3RvdHlwZS4gVGhpc1xuICAgIC8vIGF2b2lkcyBPYmplY3QuZGVmaW5lUHJvcGVydHkgY2FsbHMgZm9yIGVhY2ggaW5zdGFuY2UgY3JlYXRlZC5cbiAgICBpZiAoU3ViLm9wdGlvbnMucHJvcHMpIHtcbiAgICAgIGluaXRQcm9wcyQxKFN1Yik7XG4gICAgfVxuICAgIGlmIChTdWIub3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgaW5pdENvbXB1dGVkJDEoU3ViKTtcbiAgICB9XG5cbiAgICAvLyBhbGxvdyBmdXJ0aGVyIGV4dGVuc2lvbi9taXhpbi9wbHVnaW4gdXNhZ2VcbiAgICBTdWIuZXh0ZW5kID0gU3VwZXIuZXh0ZW5kO1xuICAgIFN1Yi5taXhpbiA9IFN1cGVyLm1peGluO1xuICAgIFN1Yi51c2UgPSBTdXBlci51c2U7XG5cbiAgICAvLyBjcmVhdGUgYXNzZXQgcmVnaXN0ZXJzLCBzbyBleHRlbmRlZCBjbGFzc2VzXG4gICAgLy8gY2FuIGhhdmUgdGhlaXIgcHJpdmF0ZSBhc3NldHMgdG9vLlxuICAgIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIFN1Ylt0eXBlXSA9IFN1cGVyW3R5cGVdO1xuICAgIH0pO1xuICAgIC8vIGVuYWJsZSByZWN1cnNpdmUgc2VsZi1sb29rdXBcbiAgICBpZiAobmFtZSkge1xuICAgICAgU3ViLm9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IFN1YjtcbiAgICB9XG5cbiAgICAvLyBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBzdXBlciBvcHRpb25zIGF0IGV4dGVuc2lvbiB0aW1lLlxuICAgIC8vIGxhdGVyIGF0IGluc3RhbnRpYXRpb24gd2UgY2FuIGNoZWNrIGlmIFN1cGVyJ3Mgb3B0aW9ucyBoYXZlXG4gICAgLy8gYmVlbiB1cGRhdGVkLlxuICAgIFN1Yi5zdXBlck9wdGlvbnMgPSBTdXBlci5vcHRpb25zO1xuICAgIFN1Yi5leHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucztcbiAgICBTdWIuc2VhbGVkT3B0aW9ucyA9IGV4dGVuZCh7fSwgU3ViLm9wdGlvbnMpO1xuXG4gICAgLy8gY2FjaGUgY29uc3RydWN0b3JcbiAgICBjYWNoZWRDdG9yc1tTdXBlcklkXSA9IFN1YjtcbiAgICByZXR1cm4gU3ViXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRQcm9wcyQxIChDb21wKSB7XG4gIHZhciBwcm9wcyA9IENvbXAub3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgcHJveHkoQ29tcC5wcm90b3R5cGUsIFwiX3Byb3BzXCIsIGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkJDEgKENvbXApIHtcbiAgdmFyIGNvbXB1dGVkID0gQ29tcC5vcHRpb25zLmNvbXB1dGVkO1xuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICBkZWZpbmVDb21wdXRlZChDb21wLnByb3RvdHlwZSwga2V5LCBjb21wdXRlZFtrZXldKTtcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEFzc2V0UmVnaXN0ZXJzIChWdWUpIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhc3NldCByZWdpc3RyYXRpb24gbWV0aG9kcy5cbiAgICovXG4gIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBWdWVbdHlwZV0gPSBmdW5jdGlvbiAoXG4gICAgICBpZCxcbiAgICAgIGRlZmluaXRpb25cbiAgICApIHtcbiAgICAgIGlmICghZGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGUgPT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcgJiYgaXNQbGFpbk9iamVjdChkZWZpbml0aW9uKSkge1xuICAgICAgICAgIGRlZmluaXRpb24ubmFtZSA9IGRlZmluaXRpb24ubmFtZSB8fCBpZDtcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2RpcmVjdGl2ZScgJiYgdHlwZW9mIGRlZmluaXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkZWZpbml0aW9uID0geyBiaW5kOiBkZWZpbml0aW9uLCB1cGRhdGU6IGRlZmluaXRpb24gfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdID0gZGVmaW5pdGlvbjtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25cbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuLyogICovXG5cblxuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSAob3B0cykge1xuICByZXR1cm4gb3B0cyAmJiAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybiwgbmFtZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XG4gIHZhciBrZXlzID0ga2VlcEFsaXZlSW5zdGFuY2Uua2V5cztcbiAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgdmFyIGVudHJ5ID0gY2FjaGVba2V5XTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIHZhciBuYW1lID0gZW50cnkubmFtZTtcbiAgICAgIGlmIChuYW1lICYmICFmaWx0ZXIobmFtZSkpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGVFbnRyeSAoXG4gIGNhY2hlLFxuICBrZXksXG4gIGtleXMsXG4gIGN1cnJlbnRcbikge1xuICB2YXIgZW50cnkgPSBjYWNoZVtrZXldO1xuICBpZiAoZW50cnkgJiYgKCFjdXJyZW50IHx8IGVudHJ5LnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgZW50cnkuY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgfVxuICBjYWNoZVtrZXldID0gbnVsbDtcbiAgcmVtb3ZlKGtleXMsIGtleSk7XG59XG5cbnZhciBwYXR0ZXJuVHlwZXMgPSBbU3RyaW5nLCBSZWdFeHAsIEFycmF5XTtcblxudmFyIEtlZXBBbGl2ZSA9IHtcbiAgbmFtZTogJ2tlZXAtYWxpdmUnLFxuICBhYnN0cmFjdDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGluY2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBleGNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgbWF4OiBbU3RyaW5nLCBOdW1iZXJdXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhY2hlVk5vZGU6IGZ1bmN0aW9uIGNhY2hlVk5vZGUoKSB7XG4gICAgICB2YXIgcmVmID0gdGhpcztcbiAgICAgIHZhciBjYWNoZSA9IHJlZi5jYWNoZTtcbiAgICAgIHZhciBrZXlzID0gcmVmLmtleXM7XG4gICAgICB2YXIgdm5vZGVUb0NhY2hlID0gcmVmLnZub2RlVG9DYWNoZTtcbiAgICAgIHZhciBrZXlUb0NhY2hlID0gcmVmLmtleVRvQ2FjaGU7XG4gICAgICBpZiAodm5vZGVUb0NhY2hlKSB7XG4gICAgICAgIHZhciB0YWcgPSB2bm9kZVRvQ2FjaGUudGFnO1xuICAgICAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZVRvQ2FjaGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGVUb0NhY2hlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgICAgIGNhY2hlW2tleVRvQ2FjaGVdID0ge1xuICAgICAgICAgIG5hbWU6IGdldENvbXBvbmVudE5hbWUoY29tcG9uZW50T3B0aW9ucyksXG4gICAgICAgICAgdGFnOiB0YWcsXG4gICAgICAgICAgY29tcG9uZW50SW5zdGFuY2U6IGNvbXBvbmVudEluc3RhbmNlLFxuICAgICAgICB9O1xuICAgICAgICBrZXlzLnB1c2goa2V5VG9DYWNoZSk7XG4gICAgICAgIC8vIHBydW5lIG9sZGVzdCBlbnRyeVxuICAgICAgICBpZiAodGhpcy5tYXggJiYga2V5cy5sZW5ndGggPiBwYXJzZUludCh0aGlzLm1heCkpIHtcbiAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZub2RlVG9DYWNoZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9LFxuXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLmNhY2hlVk5vZGUoKTtcbiAgICB0aGlzLiR3YXRjaCgnaW5jbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnZXhjbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlZDogZnVuY3Rpb24gdXBkYXRlZCAoKSB7XG4gICAgdGhpcy5jYWNoZVZOb2RlKCk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHNsb3QpO1xuICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgLy8gY2hlY2sgcGF0dGVyblxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICB2YXIgaW5jbHVkZSA9IHJlZi5pbmNsdWRlO1xuICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gbm90IGluY2x1ZGVkXG4gICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgIC8vIGV4Y2x1ZGVkXG4gICAgICAgIChleGNsdWRlICYmIG5hbWUgJiYgbWF0Y2hlcyhleGNsdWRlLCBuYW1lKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgIHZhciBjYWNoZSA9IHJlZiQxLmNhY2hlO1xuICAgICAgdmFyIGtleXMgPSByZWYkMS5rZXlzO1xuICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgIC8vIHNhbWUgY29uc3RydWN0b3IgbWF5IGdldCByZWdpc3RlcmVkIGFzIGRpZmZlcmVudCBsb2NhbCBjb21wb25lbnRzXG4gICAgICAgIC8vIHNvIGNpZCBhbG9uZSBpcyBub3QgZW5vdWdoICgjMzI2OSlcbiAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgIDogdm5vZGUua2V5O1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAvLyBtYWtlIGN1cnJlbnQga2V5IGZyZXNoZXN0XG4gICAgICAgIHJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlbGF5IHNldHRpbmcgdGhlIGNhY2hlIHVudGlsIHVwZGF0ZVxuICAgICAgICB0aGlzLnZub2RlVG9DYWNoZSA9IHZub2RlO1xuICAgICAgICB0aGlzLmtleVRvQ2FjaGUgPSBrZXk7XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlIHx8IChzbG90ICYmIHNsb3RbMF0pXG4gIH1cbn07XG5cbnZhciBidWlsdEluQ29tcG9uZW50cyA9IHtcbiAgS2VlcEFsaXZlOiBLZWVwQWxpdmVcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0R2xvYmFsQVBJIChWdWUpIHtcbiAgLy8gY29uZmlnXG4gIHZhciBjb25maWdEZWYgPSB7fTtcbiAgY29uZmlnRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmZpZzsgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25maWdEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0RvIG5vdCByZXBsYWNlIHRoZSBWdWUuY29uZmlnIG9iamVjdCwgc2V0IGluZGl2aWR1YWwgZmllbGRzIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdjb25maWcnLCBjb25maWdEZWYpO1xuXG4gIC8vIGV4cG9zZWQgdXRpbCBtZXRob2RzLlxuICAvLyBOT1RFOiB0aGVzZSBhcmUgbm90IGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcHVibGljIEFQSSAtIGF2b2lkIHJlbHlpbmcgb25cbiAgLy8gdGhlbSB1bmxlc3MgeW91IGFyZSBhd2FyZSBvZiB0aGUgcmlzay5cbiAgVnVlLnV0aWwgPSB7XG4gICAgd2Fybjogd2FybixcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcbiAgICBkZWZpbmVSZWFjdGl2ZTogZGVmaW5lUmVhY3RpdmUkJDFcbiAgfTtcblxuICBWdWUuc2V0ID0gc2V0O1xuICBWdWUuZGVsZXRlID0gZGVsO1xuICBWdWUubmV4dFRpY2sgPSBuZXh0VGljaztcblxuICAvLyAyLjYgZXhwbGljaXQgb2JzZXJ2YWJsZSBBUElcbiAgVnVlLm9ic2VydmFibGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgb2JzZXJ2ZShvYmopO1xuICAgIHJldHVybiBvYmpcbiAgfTtcblxuICBWdWUub3B0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBWdWUub3B0aW9uc1t0eXBlICsgJ3MnXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIH0pO1xuXG4gIC8vIHRoaXMgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgXCJiYXNlXCIgY29uc3RydWN0b3IgdG8gZXh0ZW5kIGFsbCBwbGFpbi1vYmplY3RcbiAgLy8gY29tcG9uZW50cyB3aXRoIGluIFdlZXgncyBtdWx0aS1pbnN0YW5jZSBzY2VuYXJpb3MuXG4gIFZ1ZS5vcHRpb25zLl9iYXNlID0gVnVlO1xuXG4gIGV4dGVuZChWdWUub3B0aW9ucy5jb21wb25lbnRzLCBidWlsdEluQ29tcG9uZW50cyk7XG5cbiAgaW5pdFVzZShWdWUpO1xuICBpbml0TWl4aW4kMShWdWUpO1xuICBpbml0RXh0ZW5kKFZ1ZSk7XG4gIGluaXRBc3NldFJlZ2lzdGVycyhWdWUpO1xufVxuXG5pbml0R2xvYmFsQVBJKFZ1ZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGlzU2VydmVyJywge1xuICBnZXQ6IGlzU2VydmVyUmVuZGVyaW5nXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckc3NyQ29udGV4dCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuIHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHRcbiAgfVxufSk7XG5cbi8vIGV4cG9zZSBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCBmb3Igc3NyIHJ1bnRpbWUgaGVscGVyIGluc3RhbGxhdGlvblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ0Z1bmN0aW9uYWxSZW5kZXJDb250ZXh0Jywge1xuICB2YWx1ZTogRnVuY3Rpb25hbFJlbmRlckNvbnRleHRcbn0pO1xuXG5WdWUudmVyc2lvbiA9ICcyLjYuMTQnO1xuXG4vKiAgKi9cblxuLy8gdGhlc2UgYXJlIHJlc2VydmVkIGZvciB3ZWIgYmVjYXVzZSB0aGV5IGFyZSBkaXJlY3RseSBjb21waWxlZCBhd2F5XG4vLyBkdXJpbmcgdGVtcGxhdGUgY29tcGlsYXRpb25cbnZhciBpc1Jlc2VydmVkQXR0ciA9IG1ha2VNYXAoJ3N0eWxlLGNsYXNzJyk7XG5cbi8vIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgdXNpbmcgcHJvcHMgZm9yIGJpbmRpbmdcbnZhciBhY2NlcHRWYWx1ZSA9IG1ha2VNYXAoJ2lucHV0LHRleHRhcmVhLG9wdGlvbixzZWxlY3QscHJvZ3Jlc3MnKTtcbnZhciBtdXN0VXNlUHJvcCA9IGZ1bmN0aW9uICh0YWcsIHR5cGUsIGF0dHIpIHtcbiAgcmV0dXJuIChcbiAgICAoYXR0ciA9PT0gJ3ZhbHVlJyAmJiBhY2NlcHRWYWx1ZSh0YWcpKSAmJiB0eXBlICE9PSAnYnV0dG9uJyB8fFxuICAgIChhdHRyID09PSAnc2VsZWN0ZWQnICYmIHRhZyA9PT0gJ29wdGlvbicpIHx8XG4gICAgKGF0dHIgPT09ICdjaGVja2VkJyAmJiB0YWcgPT09ICdpbnB1dCcpIHx8XG4gICAgKGF0dHIgPT09ICdtdXRlZCcgJiYgdGFnID09PSAndmlkZW8nKVxuICApXG59O1xuXG52YXIgaXNFbnVtZXJhdGVkQXR0ciA9IG1ha2VNYXAoJ2NvbnRlbnRlZGl0YWJsZSxkcmFnZ2FibGUsc3BlbGxjaGVjaycpO1xuXG52YXIgaXNWYWxpZENvbnRlbnRFZGl0YWJsZVZhbHVlID0gbWFrZU1hcCgnZXZlbnRzLGNhcmV0LHR5cGluZyxwbGFpbnRleHQtb25seScpO1xuXG52YXIgY29udmVydEVudW1lcmF0ZWRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJ1xuICAgID8gJ2ZhbHNlJ1xuICAgIC8vIGFsbG93IGFyYml0cmFyeSBzdHJpbmcgdmFsdWUgZm9yIGNvbnRlbnRlZGl0YWJsZVxuICAgIDoga2V5ID09PSAnY29udGVudGVkaXRhYmxlJyAmJiBpc1ZhbGlkQ29udGVudEVkaXRhYmxlVmFsdWUodmFsdWUpXG4gICAgICA/IHZhbHVlXG4gICAgICA6ICd0cnVlJ1xufTtcblxudmFyIGlzQm9vbGVhbkF0dHIgPSBtYWtlTWFwKFxuICAnYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSwnICtcbiAgJ2RlZmF1bHQsZGVmYXVsdGNoZWNrZWQsZGVmYXVsdG11dGVkLGRlZmF1bHRzZWxlY3RlZCxkZWZlcixkaXNhYmxlZCwnICtcbiAgJ2VuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsJyArXG4gICdtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LCcgK1xuICAncmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNvcnRhYmxlLCcgK1xuICAndHJ1ZXNwZWVkLHR5cGVtdXN0bWF0Y2gsdmlzaWJsZSdcbik7XG5cbnZhciB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuXG52YXIgaXNYbGluayA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuYW1lLmNoYXJBdCg1KSA9PT0gJzonICYmIG5hbWUuc2xpY2UoMCwgNSkgPT09ICd4bGluaydcbn07XG5cbnZhciBnZXRYbGlua1Byb3AgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gaXNYbGluayhuYW1lKSA/IG5hbWUuc2xpY2UoNiwgbmFtZS5sZW5ndGgpIDogJydcbn07XG5cbnZhciBpc0ZhbHN5QXR0clZhbHVlID0gZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSBmYWxzZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGdlbkNsYXNzRm9yVm5vZGUgKHZub2RlKSB7XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgdmFyIGNoaWxkTm9kZSA9IHZub2RlO1xuICB3aGlsZSAoaXNEZWYoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgaWYgKGNoaWxkTm9kZSAmJiBjaGlsZE5vZGUuZGF0YSkge1xuICAgICAgZGF0YSA9IG1lcmdlQ2xhc3NEYXRhKGNoaWxkTm9kZS5kYXRhLCBkYXRhKTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKGlzRGVmKHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudCkpIHtcbiAgICBpZiAocGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShkYXRhLCBwYXJlbnROb2RlLmRhdGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVuZGVyQ2xhc3MoZGF0YS5zdGF0aWNDbGFzcywgZGF0YS5jbGFzcylcbn1cblxuZnVuY3Rpb24gbWVyZ2VDbGFzc0RhdGEgKGNoaWxkLCBwYXJlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0aWNDbGFzczogY29uY2F0KGNoaWxkLnN0YXRpY0NsYXNzLCBwYXJlbnQuc3RhdGljQ2xhc3MpLFxuICAgIGNsYXNzOiBpc0RlZihjaGlsZC5jbGFzcylcbiAgICAgID8gW2NoaWxkLmNsYXNzLCBwYXJlbnQuY2xhc3NdXG4gICAgICA6IHBhcmVudC5jbGFzc1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNsYXNzIChcbiAgc3RhdGljQ2xhc3MsXG4gIGR5bmFtaWNDbGFzc1xuKSB7XG4gIGlmIChpc0RlZihzdGF0aWNDbGFzcykgfHwgaXNEZWYoZHluYW1pY0NsYXNzKSkge1xuICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDbGFzcyAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeUFycmF5KHZhbHVlKVxuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5T2JqZWN0KHZhbHVlKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBzdHJpbmdpZmllZDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNEZWYoc3RyaW5naWZpZWQgPSBzdHJpbmdpZnlDbGFzcyh2YWx1ZVtpXSkpICYmIHN0cmluZ2lmaWVkICE9PSAnJykge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbnZhciBuYW1lc3BhY2VNYXAgPSB7XG4gIHN2ZzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgbWF0aDogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnXG59O1xuXG52YXIgaXNIVE1MVGFnID0gbWFrZU1hcChcbiAgJ2h0bWwsYm9keSxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLCcgK1xuICAnYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLCcgK1xuICAnZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsJyArXG4gICdhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnksJyArXG4gICdzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbywnICtcbiAgJ2VtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLCcgK1xuICAnY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsJyArXG4gICdidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLCcgK1xuICAnb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSwnICtcbiAgJ2RldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSwnICtcbiAgJ2NvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGUsYmxvY2txdW90ZSxpZnJhbWUsdGZvb3QnXG4pO1xuXG4vLyB0aGlzIG1hcCBpcyBpbnRlbnRpb25hbGx5IHNlbGVjdGl2ZSwgb25seSBjb3ZlcmluZyBTVkcgZWxlbWVudHMgdGhhdCBtYXlcbi8vIGNvbnRhaW4gY2hpbGQgZWxlbWVudHMuXG52YXIgaXNTVkcgPSBtYWtlTWFwKFxuICAnc3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udC1mYWNlLCcgK1xuICAnZm9yZWlnbm9iamVjdCxnLGdseXBoLGltYWdlLGxpbmUsbWFya2VyLG1hc2ssbWlzc2luZy1nbHlwaCxwYXRoLHBhdHRlcm4sJyArXG4gICdwb2x5Z29uLHBvbHlsaW5lLHJlY3Qsc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRwYXRoLHRzcGFuLHVzZSx2aWV3JyxcbiAgdHJ1ZVxuKTtcblxudmFyIGlzUmVzZXJ2ZWRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHJldHVybiBpc0hUTUxUYWcodGFnKSB8fCBpc1NWRyh0YWcpXG59O1xuXG5mdW5jdGlvbiBnZXRUYWdOYW1lc3BhY2UgKHRhZykge1xuICBpZiAoaXNTVkcodGFnKSkge1xuICAgIHJldHVybiAnc3ZnJ1xuICB9XG4gIC8vIGJhc2ljIHN1cHBvcnQgZm9yIE1hdGhNTFxuICAvLyBub3RlIGl0IGRvZXNuJ3Qgc3VwcG9ydCBvdGhlciBNYXRoTUwgZWxlbWVudHMgYmVpbmcgY29tcG9uZW50IHJvb3RzXG4gIGlmICh0YWcgPT09ICdtYXRoJykge1xuICAgIHJldHVybiAnbWF0aCdcbiAgfVxufVxuXG52YXIgdW5rbm93bkVsZW1lbnRDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBpc1Vua25vd25FbGVtZW50ICh0YWcpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAoaXNSZXNlcnZlZFRhZyh0YWcpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdGFnID0gdGFnLnRvTG93ZXJDYXNlKCk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddICE9IG51bGwpIHtcbiAgICByZXR1cm4gdW5rbm93bkVsZW1lbnRDYWNoZVt0YWddXG4gIH1cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBpZiAodGFnLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjgyMTAzNjQvMTA3MDI0NFxuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gKFxuICAgICAgZWwuY29uc3RydWN0b3IgPT09IHdpbmRvdy5IVE1MVW5rbm93bkVsZW1lbnQgfHxcbiAgICAgIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTEVsZW1lbnRcbiAgICApKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAodW5rbm93bkVsZW1lbnRDYWNoZVt0YWddID0gL0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlbC50b1N0cmluZygpKSlcbiAgfVxufVxuXG52YXIgaXNUZXh0SW5wdXRUeXBlID0gbWFrZU1hcCgndGV4dCxudW1iZXIscGFzc3dvcmQsc2VhcmNoLGVtYWlsLHRlbCx1cmwnKTtcblxuLyogICovXG5cbi8qKlxuICogUXVlcnkgYW4gZWxlbWVudCBzZWxlY3RvciBpZiBpdCdzIG5vdCBhbiBlbGVtZW50IGFscmVhZHkuXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5IChlbCkge1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ0Nhbm5vdCBmaW5kIGVsZW1lbnQ6ICcgKyBlbFxuICAgICAgKTtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZWxcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCQxICh0YWdOYW1lLCB2bm9kZSkge1xuICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgaWYgKHRhZ05hbWUgIT09ICdzZWxlY3QnKSB7XG4gICAgcmV0dXJuIGVsbVxuICB9XG4gIC8vIGZhbHNlIG9yIG51bGwgd2lsbCByZW1vdmUgdGhlIGF0dHJpYnV0ZSBidXQgdW5kZWZpbmVkIHdpbGwgbm90XG4gIGlmICh2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEuYXR0cnMgJiYgdm5vZGUuZGF0YS5hdHRycy5tdWx0aXBsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxtLnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcbiAgfVxuICByZXR1cm4gZWxtXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyAobmFtZXNwYWNlLCB0YWdOYW1lKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlTWFwW25hbWVzcGFjZV0sIHRhZ05hbWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlICh0ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50ICh0ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRleHQpXG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZSAocGFyZW50Tm9kZSwgbmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQgKG5vZGUsIGNoaWxkKSB7XG4gIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZCAobm9kZSwgY2hpbGQpIHtcbiAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHBhcmVudE5vZGUgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZVxufVxuXG5mdW5jdGlvbiBuZXh0U2libGluZyAobm9kZSkge1xuICByZXR1cm4gbm9kZS5uZXh0U2libGluZ1xufVxuXG5mdW5jdGlvbiB0YWdOYW1lIChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWVcbn1cblxuZnVuY3Rpb24gc2V0VGV4dENvbnRlbnQgKG5vZGUsIHRleHQpIHtcbiAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlU2NvcGUgKG5vZGUsIHNjb3BlSWQpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoc2NvcGVJZCwgJycpO1xufVxuXG52YXIgbm9kZU9wcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCQxLFxuICBjcmVhdGVFbGVtZW50TlM6IGNyZWF0ZUVsZW1lbnROUyxcbiAgY3JlYXRlVGV4dE5vZGU6IGNyZWF0ZVRleHROb2RlLFxuICBjcmVhdGVDb21tZW50OiBjcmVhdGVDb21tZW50LFxuICBpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG4gIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG4gIG5leHRTaWJsaW5nOiBuZXh0U2libGluZyxcbiAgdGFnTmFtZTogdGFnTmFtZSxcbiAgc2V0VGV4dENvbnRlbnQ6IHNldFRleHRDb250ZW50LFxuICBzZXRTdHlsZVNjb3BlOiBzZXRTdHlsZVNjb3BlXG59KTtcblxuLyogICovXG5cbnZhciByZWYgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlIChfLCB2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGlmIChvbGRWbm9kZS5kYXRhLnJlZiAhPT0gdm5vZGUuZGF0YS5yZWYpIHtcbiAgICAgIHJlZ2lzdGVyUmVmKG9sZFZub2RlLCB0cnVlKTtcbiAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgcmVnaXN0ZXJSZWYodm5vZGUsIHRydWUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiByZWdpc3RlclJlZiAodm5vZGUsIGlzUmVtb3ZhbCkge1xuICB2YXIga2V5ID0gdm5vZGUuZGF0YS5yZWY7XG4gIGlmICghaXNEZWYoa2V5KSkgeyByZXR1cm4gfVxuXG4gIHZhciB2bSA9IHZub2RlLmNvbnRleHQ7XG4gIHZhciByZWYgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSB8fCB2bm9kZS5lbG07XG4gIHZhciByZWZzID0gdm0uJHJlZnM7XG4gIGlmIChpc1JlbW92YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICByZW1vdmUocmVmc1trZXldLCByZWYpO1xuICAgIH0gZWxzZSBpZiAocmVmc1trZXldID09PSByZWYpIHtcbiAgICAgIHJlZnNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZub2RlLmRhdGEucmVmSW5Gb3IpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZWZzW2tleV0pKSB7XG4gICAgICAgIHJlZnNba2V5XSA9IFtyZWZdO1xuICAgICAgfSBlbHNlIGlmIChyZWZzW2tleV0uaW5kZXhPZihyZWYpIDwgMCkge1xuICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICAgcmVmc1trZXldLnB1c2gocmVmKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVmc1trZXldID0gcmVmO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFZpcnR1YWwgRE9NIHBhdGNoaW5nIGFsZ29yaXRobSBiYXNlZCBvbiBTbmFiYmRvbSBieVxuICogU2ltb24gRnJpaXMgVmluZHVtIChAcGFsZGVwaW5kKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGFsZGVwaW5kL3NuYWJiZG9tL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBtb2RpZmllZCBieSBFdmFuIFlvdSAoQHl5eDk5MDgwMylcbiAqXG4gKiBOb3QgdHlwZS1jaGVja2luZyB0aGlzIGJlY2F1c2UgdGhpcyBmaWxlIGlzIHBlcmYtY3JpdGljYWwgYW5kIHRoZSBjb3N0XG4gKiBvZiBtYWtpbmcgZmxvdyB1bmRlcnN0YW5kIGl0IGlzIG5vdCB3b3J0aCBpdC5cbiAqL1xuXG52YXIgZW1wdHlOb2RlID0gbmV3IFZOb2RlKCcnLCB7fSwgW10pO1xuXG52YXIgaG9va3MgPSBbJ2NyZWF0ZScsICdhY3RpdmF0ZScsICd1cGRhdGUnLCAncmVtb3ZlJywgJ2Rlc3Ryb3knXTtcblxuZnVuY3Rpb24gc2FtZVZub2RlIChhLCBiKSB7XG4gIHJldHVybiAoXG4gICAgYS5rZXkgPT09IGIua2V5ICYmXG4gICAgYS5hc3luY0ZhY3RvcnkgPT09IGIuYXN5bmNGYWN0b3J5ICYmIChcbiAgICAgIChcbiAgICAgICAgYS50YWcgPT09IGIudGFnICYmXG4gICAgICAgIGEuaXNDb21tZW50ID09PSBiLmlzQ29tbWVudCAmJlxuICAgICAgICBpc0RlZihhLmRhdGEpID09PSBpc0RlZihiLmRhdGEpICYmXG4gICAgICAgIHNhbWVJbnB1dFR5cGUoYSwgYilcbiAgICAgICkgfHwgKFxuICAgICAgICBpc1RydWUoYS5pc0FzeW5jUGxhY2Vob2xkZXIpICYmXG4gICAgICAgIGlzVW5kZWYoYi5hc3luY0ZhY3RvcnkuZXJyb3IpXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmZ1bmN0aW9uIHNhbWVJbnB1dFR5cGUgKGEsIGIpIHtcbiAgaWYgKGEudGFnICE9PSAnaW5wdXQnKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGk7XG4gIHZhciB0eXBlQSA9IGlzRGVmKGkgPSBhLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XG4gIHZhciB0eXBlQiA9IGlzRGVmKGkgPSBiLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XG4gIHJldHVybiB0eXBlQSA9PT0gdHlwZUIgfHwgaXNUZXh0SW5wdXRUeXBlKHR5cGVBKSAmJiBpc1RleHRJbnB1dFR5cGUodHlwZUIpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVRvT2xkSWR4IChjaGlsZHJlbiwgYmVnaW5JZHgsIGVuZElkeCkge1xuICB2YXIgaSwga2V5O1xuICB2YXIgbWFwID0ge307XG4gIGZvciAoaSA9IGJlZ2luSWR4OyBpIDw9IGVuZElkeDsgKytpKSB7XG4gICAga2V5ID0gY2hpbGRyZW5baV0ua2V5O1xuICAgIGlmIChpc0RlZihrZXkpKSB7IG1hcFtrZXldID0gaTsgfVxuICB9XG4gIHJldHVybiBtYXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0Y2hGdW5jdGlvbiAoYmFja2VuZCkge1xuICB2YXIgaSwgajtcbiAgdmFyIGNicyA9IHt9O1xuXG4gIHZhciBtb2R1bGVzID0gYmFja2VuZC5tb2R1bGVzO1xuICB2YXIgbm9kZU9wcyA9IGJhY2tlbmQubm9kZU9wcztcblxuICBmb3IgKGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyArK2kpIHtcbiAgICBjYnNbaG9va3NbaV1dID0gW107XG4gICAgZm9yIChqID0gMDsgaiA8IG1vZHVsZXMubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmIChpc0RlZihtb2R1bGVzW2pdW2hvb2tzW2ldXSkpIHtcbiAgICAgICAgY2JzW2hvb2tzW2ldXS5wdXNoKG1vZHVsZXNbal1baG9va3NbaV1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbXB0eU5vZGVBdCAoZWxtKSB7XG4gICAgcmV0dXJuIG5ldyBWTm9kZShub2RlT3BzLnRhZ05hbWUoZWxtKS50b0xvd2VyQ2FzZSgpLCB7fSwgW10sIHVuZGVmaW5lZCwgZWxtKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUm1DYiAoY2hpbGRFbG0sIGxpc3RlbmVycykge1xuICAgIGZ1bmN0aW9uIHJlbW92ZSQkMSAoKSB7XG4gICAgICBpZiAoLS1yZW1vdmUkJDEubGlzdGVuZXJzID09PSAwKSB7XG4gICAgICAgIHJlbW92ZU5vZGUoY2hpbGRFbG0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZW1vdmUkJDEubGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICAgIHJldHVybiByZW1vdmUkJDFcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU5vZGUgKGVsKSB7XG4gICAgdmFyIHBhcmVudCA9IG5vZGVPcHMucGFyZW50Tm9kZShlbCk7XG4gICAgLy8gZWxlbWVudCBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBkdWUgdG8gdi1odG1sIC8gdi10ZXh0XG4gICAgaWYgKGlzRGVmKHBhcmVudCkpIHtcbiAgICAgIG5vZGVPcHMucmVtb3ZlQ2hpbGQocGFyZW50LCBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCQkMSAodm5vZGUsIGluVlByZSkge1xuICAgIHJldHVybiAoXG4gICAgICAhaW5WUHJlICYmXG4gICAgICAhdm5vZGUubnMgJiZcbiAgICAgICEoXG4gICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMubGVuZ3RoICYmXG4gICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMuc29tZShmdW5jdGlvbiAoaWdub3JlKSB7XG4gICAgICAgICAgcmV0dXJuIGlzUmVnRXhwKGlnbm9yZSlcbiAgICAgICAgICAgID8gaWdub3JlLnRlc3Qodm5vZGUudGFnKVxuICAgICAgICAgICAgOiBpZ25vcmUgPT09IHZub2RlLnRhZ1xuICAgICAgICB9KVxuICAgICAgKSAmJlxuICAgICAgY29uZmlnLmlzVW5rbm93bkVsZW1lbnQodm5vZGUudGFnKVxuICAgIClcbiAgfVxuXG4gIHZhciBjcmVhdGluZ0VsbUluVlByZSA9IDA7XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxtIChcbiAgICB2bm9kZSxcbiAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgcGFyZW50RWxtLFxuICAgIHJlZkVsbSxcbiAgICBuZXN0ZWQsXG4gICAgb3duZXJBcnJheSxcbiAgICBpbmRleFxuICApIHtcbiAgICBpZiAoaXNEZWYodm5vZGUuZWxtKSAmJiBpc0RlZihvd25lckFycmF5KSkge1xuICAgICAgLy8gVGhpcyB2bm9kZSB3YXMgdXNlZCBpbiBhIHByZXZpb3VzIHJlbmRlciFcbiAgICAgIC8vIG5vdyBpdCdzIHVzZWQgYXMgYSBuZXcgbm9kZSwgb3ZlcndyaXRpbmcgaXRzIGVsbSB3b3VsZCBjYXVzZVxuICAgICAgLy8gcG90ZW50aWFsIHBhdGNoIGVycm9ycyBkb3duIHRoZSByb2FkIHdoZW4gaXQncyB1c2VkIGFzIGFuIGluc2VydGlvblxuICAgICAgLy8gcmVmZXJlbmNlIG5vZGUuIEluc3RlYWQsIHdlIGNsb25lIHRoZSBub2RlIG9uLWRlbWFuZCBiZWZvcmUgY3JlYXRpbmdcbiAgICAgIC8vIGFzc29jaWF0ZWQgRE9NIGVsZW1lbnQgZm9yIGl0LlxuICAgICAgdm5vZGUgPSBvd25lckFycmF5W2luZGV4XSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICAgIH1cblxuICAgIHZub2RlLmlzUm9vdEluc2VydCA9ICFuZXN0ZWQ7IC8vIGZvciB0cmFuc2l0aW9uIGVudGVyIGNoZWNrXG4gICAgaWYgKGNyZWF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgIGlmIChpc0RlZih0YWcpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnByZSkge1xuICAgICAgICAgIGNyZWF0aW5nRWxtSW5WUHJlKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGNyZWF0aW5nRWxtSW5WUHJlKSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAnVW5rbm93biBjdXN0b20gZWxlbWVudDogPCcgKyB0YWcgKyAnPiAtIGRpZCB5b3UgJyArXG4gICAgICAgICAgICAncmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBjb3JyZWN0bHk/IEZvciByZWN1cnNpdmUgY29tcG9uZW50cywgJyArXG4gICAgICAgICAgICAnbWFrZSBzdXJlIHRvIHByb3ZpZGUgdGhlIFwibmFtZVwiIG9wdGlvbi4nLFxuICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZWxtID0gdm5vZGUubnNcbiAgICAgICAgPyBub2RlT3BzLmNyZWF0ZUVsZW1lbnROUyh2bm9kZS5ucywgdGFnKVxuICAgICAgICA6IG5vZGVPcHMuY3JlYXRlRWxlbWVudCh0YWcsIHZub2RlKTtcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICB7XG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgIGNyZWF0aW5nRWxtSW5WUHJlLS07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RydWUodm5vZGUuaXNDb21tZW50KSkge1xuICAgICAgdm5vZGUuZWxtID0gbm9kZU9wcy5jcmVhdGVDb21tZW50KHZub2RlLnRleHQpO1xuICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bm9kZS5lbG0gPSBub2RlT3BzLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpO1xuICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pIHtcbiAgICB2YXIgaSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGkpKSB7XG4gICAgICB2YXIgaXNSZWFjdGl2YXRlZCA9IGlzRGVmKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSAmJiBpLmtlZXBBbGl2ZTtcbiAgICAgIGlmIChpc0RlZihpID0gaS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkge1xuICAgICAgICBpKHZub2RlLCBmYWxzZSAvKiBoeWRyYXRpbmcgKi8pO1xuICAgICAgfVxuICAgICAgLy8gYWZ0ZXIgY2FsbGluZyB0aGUgaW5pdCBob29rLCBpZiB0aGUgdm5vZGUgaXMgYSBjaGlsZCBjb21wb25lbnRcbiAgICAgIC8vIGl0IHNob3VsZCd2ZSBjcmVhdGVkIGEgY2hpbGQgaW5zdGFuY2UgYW5kIG1vdW50ZWQgaXQuIHRoZSBjaGlsZFxuICAgICAgLy8gY29tcG9uZW50IGFsc28gaGFzIHNldCB0aGUgcGxhY2Vob2xkZXIgdm5vZGUncyBlbG0uXG4gICAgICAvLyBpbiB0aGF0IGNhc2Ugd2UgY2FuIGp1c3QgcmV0dXJuIHRoZSBlbGVtZW50IGFuZCBiZSBkb25lLlxuICAgICAgaWYgKGlzRGVmKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgICAgICBpbml0Q29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgICAgIGlmIChpc1RydWUoaXNSZWFjdGl2YXRlZCkpIHtcbiAgICAgICAgICByZWFjdGl2YXRlQ29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBpZiAoaXNEZWYodm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0KSkge1xuICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2guYXBwbHkoaW5zZXJ0ZWRWbm9kZVF1ZXVlLCB2bm9kZS5kYXRhLnBlbmRpbmdJbnNlcnQpO1xuICAgICAgdm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgdm5vZGUuZWxtID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuJGVsO1xuICAgIGlmIChpc1BhdGNoYWJsZSh2bm9kZSkpIHtcbiAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgc2V0U2NvcGUodm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbXB0eSBjb21wb25lbnQgcm9vdC5cbiAgICAgIC8vIHNraXAgYWxsIGVsZW1lbnQtcmVsYXRlZCBtb2R1bGVzIGV4Y2VwdCBmb3IgcmVmICgjMzQ1NSlcbiAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbnZva2UgdGhlIGluc2VydCBob29rXG4gICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhY3RpdmF0ZUNvbXBvbmVudCAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pIHtcbiAgICB2YXIgaTtcbiAgICAvLyBoYWNrIGZvciAjNDMzOTogYSByZWFjdGl2YXRlZCBjb21wb25lbnQgd2l0aCBpbm5lciB0cmFuc2l0aW9uXG4gICAgLy8gZG9lcyBub3QgdHJpZ2dlciBiZWNhdXNlIHRoZSBpbm5lciBub2RlJ3MgY3JlYXRlZCBob29rcyBhcmUgbm90IGNhbGxlZFxuICAgIC8vIGFnYWluLiBJdCdzIG5vdCBpZGVhbCB0byBpbnZvbHZlIG1vZHVsZS1zcGVjaWZpYyBsb2dpYyBpbiBoZXJlIGJ1dFxuICAgIC8vIHRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhIGJldHRlciB3YXkgdG8gZG8gaXQuXG4gICAgdmFyIGlubmVyTm9kZSA9IHZub2RlO1xuICAgIHdoaWxlIChpbm5lck5vZGUuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgIGlubmVyTm9kZSA9IGlubmVyTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgICBpZiAoaXNEZWYoaSA9IGlubmVyTm9kZS5kYXRhKSAmJiBpc0RlZihpID0gaS50cmFuc2l0aW9uKSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLmFjdGl2YXRlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2JzLmFjdGl2YXRlW2ldKGVtcHR5Tm9kZSwgaW5uZXJOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaChpbm5lck5vZGUpO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB1bmxpa2UgYSBuZXdseSBjcmVhdGVkIGNvbXBvbmVudCxcbiAgICAvLyBhIHJlYWN0aXZhdGVkIGtlZXAtYWxpdmUgY29tcG9uZW50IGRvZXNuJ3QgaW5zZXJ0IGl0c2VsZlxuICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydCAocGFyZW50LCBlbG0sIHJlZiQkMSkge1xuICAgIGlmIChpc0RlZihwYXJlbnQpKSB7XG4gICAgICBpZiAoaXNEZWYocmVmJCQxKSkge1xuICAgICAgICBpZiAobm9kZU9wcy5wYXJlbnROb2RlKHJlZiQkMSkgPT09IHBhcmVudCkge1xuICAgICAgICAgIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudCwgZWxtLCByZWYkJDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlT3BzLmFwcGVuZENoaWxkKHBhcmVudCwgZWxtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDaGlsZHJlbiAodm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhjaGlsZHJlbik7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNyZWF0ZUVsbShjaGlsZHJlbltpXSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCB2bm9kZS5lbG0sIG51bGwsIHRydWUsIGNoaWxkcmVuLCBpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKHZub2RlLnRleHQpKSB7XG4gICAgICBub2RlT3BzLmFwcGVuZENoaWxkKHZub2RlLmVsbSwgbm9kZU9wcy5jcmVhdGVUZXh0Tm9kZShTdHJpbmcodm5vZGUudGV4dCkpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1BhdGNoYWJsZSAodm5vZGUpIHtcbiAgICB3aGlsZSAodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgIHZub2RlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgIH1cbiAgICByZXR1cm4gaXNEZWYodm5vZGUudGFnKVxuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlQ3JlYXRlSG9va3MgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytpJDEpIHtcbiAgICAgIGNicy5jcmVhdGVbaSQxXShlbXB0eU5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgaSA9IHZub2RlLmRhdGEuaG9vazsgLy8gUmV1c2UgdmFyaWFibGVcbiAgICBpZiAoaXNEZWYoaSkpIHtcbiAgICAgIGlmIChpc0RlZihpLmNyZWF0ZSkpIHsgaS5jcmVhdGUoZW1wdHlOb2RlLCB2bm9kZSk7IH1cbiAgICAgIGlmIChpc0RlZihpLmluc2VydCkpIHsgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2godm5vZGUpOyB9XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IHNjb3BlIGlkIGF0dHJpYnV0ZSBmb3Igc2NvcGVkIENTUy5cbiAgLy8gdGhpcyBpcyBpbXBsZW1lbnRlZCBhcyBhIHNwZWNpYWwgY2FzZSB0byBhdm9pZCB0aGUgb3ZlcmhlYWRcbiAgLy8gb2YgZ29pbmcgdGhyb3VnaCB0aGUgbm9ybWFsIGF0dHJpYnV0ZSBwYXRjaGluZyBwcm9jZXNzLlxuICBmdW5jdGlvbiBzZXRTY29wZSAodm5vZGUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmZuU2NvcGVJZCkpIHtcbiAgICAgIG5vZGVPcHMuc2V0U3R5bGVTY29wZSh2bm9kZS5lbG0sIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYW5jZXN0b3IgPSB2bm9kZTtcbiAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICBpZiAoaXNEZWYoaSA9IGFuY2VzdG9yLmNvbnRleHQpICYmIGlzRGVmKGkgPSBpLiRvcHRpb25zLl9zY29wZUlkKSkge1xuICAgICAgICAgIG5vZGVPcHMuc2V0U3R5bGVTY29wZSh2bm9kZS5lbG0sIGkpO1xuICAgICAgICB9XG4gICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3Igc2xvdCBjb250ZW50IHRoZXkgc2hvdWxkIGFsc28gZ2V0IHRoZSBzY29wZUlkIGZyb20gdGhlIGhvc3QgaW5zdGFuY2UuXG4gICAgaWYgKGlzRGVmKGkgPSBhY3RpdmVJbnN0YW5jZSkgJiZcbiAgICAgIGkgIT09IHZub2RlLmNvbnRleHQgJiZcbiAgICAgIGkgIT09IHZub2RlLmZuQ29udGV4dCAmJlxuICAgICAgaXNEZWYoaSA9IGkuJG9wdGlvbnMuX3Njb3BlSWQpXG4gICAgKSB7XG4gICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRWbm9kZXMgKHBhcmVudEVsbSwgcmVmRWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgIGNyZWF0ZUVsbSh2bm9kZXNbc3RhcnRJZHhdLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtLCBmYWxzZSwgdm5vZGVzLCBzdGFydElkeCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRGVzdHJveUhvb2sgKHZub2RlKSB7XG4gICAgdmFyIGksIGo7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmRlc3Ryb3kpKSB7IGkodm5vZGUpOyB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLmRlc3Ryb3kubGVuZ3RoOyArK2kpIHsgY2JzLmRlc3Ryb3lbaV0odm5vZGUpOyB9XG4gICAgfVxuICAgIGlmIChpc0RlZihpID0gdm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2opIHtcbiAgICAgICAgaW52b2tlRGVzdHJveUhvb2sodm5vZGUuY2hpbGRyZW5bal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVZub2RlcyAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgdmFyIGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGNoLnRhZykpIHtcbiAgICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGNoKTtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaCk7XG4gICAgICAgIH0gZWxzZSB7IC8vIFRleHQgbm9kZVxuICAgICAgICAgIHJlbW92ZU5vZGUoY2guZWxtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2sgKHZub2RlLCBybSkge1xuICAgIGlmIChpc0RlZihybSkgfHwgaXNEZWYodm5vZGUuZGF0YSkpIHtcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGNicy5yZW1vdmUubGVuZ3RoICsgMTtcbiAgICAgIGlmIChpc0RlZihybSkpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSBhIHJlY3Vyc2l2ZWx5IHBhc3NlZCBkb3duIHJtIGNhbGxiYWNrXG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBsaXN0ZW5lcnMgY291bnRcbiAgICAgICAgcm0ubGlzdGVuZXJzICs9IGxpc3RlbmVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRpcmVjdGx5IHJlbW92aW5nXG4gICAgICAgIHJtID0gY3JlYXRlUm1DYih2bm9kZS5lbG0sIGxpc3RlbmVycyk7XG4gICAgICB9XG4gICAgICAvLyByZWN1cnNpdmVseSBpbnZva2UgaG9va3Mgb24gY2hpbGQgY29tcG9uZW50IHJvb3Qgbm9kZVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaXNEZWYoaSA9IGkuX3Zub2RlKSAmJiBpc0RlZihpLmRhdGEpKSB7XG4gICAgICAgIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2soaSwgcm0pO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5yZW1vdmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY2JzLnJlbW92ZVtpXSh2bm9kZSwgcm0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5kYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnJlbW92ZSkpIHtcbiAgICAgICAgaSh2bm9kZSwgcm0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm0oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlTm9kZSh2bm9kZS5lbG0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuIChwYXJlbnRFbG0sIG9sZENoLCBuZXdDaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KSB7XG4gICAgdmFyIG9sZFN0YXJ0SWR4ID0gMDtcbiAgICB2YXIgbmV3U3RhcnRJZHggPSAwO1xuICAgIHZhciBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICAgIHZhciBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gICAgdmFyIG9sZEVuZFZub2RlID0gb2xkQ2hbb2xkRW5kSWR4XTtcbiAgICB2YXIgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICAgIHZhciBuZXdFbmRWbm9kZSA9IG5ld0NoW25ld0VuZElkeF07XG4gICAgdmFyIG9sZEtleVRvSWR4LCBpZHhJbk9sZCwgdm5vZGVUb01vdmUsIHJlZkVsbTtcblxuICAgIC8vIHJlbW92ZU9ubHkgaXMgYSBzcGVjaWFsIGZsYWcgdXNlZCBvbmx5IGJ5IDx0cmFuc2l0aW9uLWdyb3VwPlxuICAgIC8vIHRvIGVuc3VyZSByZW1vdmVkIGVsZW1lbnRzIHN0YXkgaW4gY29ycmVjdCByZWxhdGl2ZSBwb3NpdGlvbnNcbiAgICAvLyBkdXJpbmcgbGVhdmluZyB0cmFuc2l0aW9uc1xuICAgIHZhciBjYW5Nb3ZlID0gIXJlbW92ZU9ubHk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKG5ld0NoKTtcbiAgICB9XG5cbiAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgaWYgKGlzVW5kZWYob2xkU3RhcnRWbm9kZSkpIHtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdOyAvLyBWbm9kZSBoYXMgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkRW5kVm5vZGUpKSB7XG4gICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3RW5kSWR4KTtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7IC8vIFZub2RlIG1vdmVkIHJpZ2h0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld0VuZElkeCk7XG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCBsZWZ0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZEVuZFZub2RlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzVW5kZWYob2xkS2V5VG9JZHgpKSB7IG9sZEtleVRvSWR4ID0gY3JlYXRlS2V5VG9PbGRJZHgob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpOyB9XG4gICAgICAgIGlkeEluT2xkID0gaXNEZWYobmV3U3RhcnRWbm9kZS5rZXkpXG4gICAgICAgICAgPyBvbGRLZXlUb0lkeFtuZXdTdGFydFZub2RlLmtleV1cbiAgICAgICAgICA6IGZpbmRJZHhJbk9sZChuZXdTdGFydFZub2RlLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkgeyAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGZhbHNlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZub2RlVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgIGlmIChzYW1lVm5vZGUodm5vZGVUb01vdmUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICBwYXRjaFZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgdm5vZGVUb01vdmUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNhbWUga2V5IGJ1dCBkaWZmZXJlbnQgZWxlbWVudC4gdHJlYXQgYXMgbmV3IGVsZW1lbnRcbiAgICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGZhbHNlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgICAgcmVmRWxtID0gaXNVbmRlZihuZXdDaFtuZXdFbmRJZHggKyAxXSkgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uZWxtO1xuICAgICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgcmVmRWxtLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICB9IGVsc2UgaWYgKG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XG4gICAgICByZW1vdmVWbm9kZXMob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlS2V5cyAoY2hpbGRyZW4pIHtcbiAgICB2YXIgc2VlbktleXMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXk7XG4gICAgICBpZiAoaXNEZWYoa2V5KSkge1xuICAgICAgICBpZiAoc2VlbktleXNba2V5XSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAoXCJEdXBsaWNhdGUga2V5cyBkZXRlY3RlZDogJ1wiICsga2V5ICsgXCInLiBUaGlzIG1heSBjYXVzZSBhbiB1cGRhdGUgZXJyb3IuXCIpLFxuICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VlbktleXNba2V5XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSWR4SW5PbGQgKG5vZGUsIG9sZENoLCBzdGFydCwgZW5kKSB7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHZhciBjID0gb2xkQ2hbaV07XG4gICAgICBpZiAoaXNEZWYoYykgJiYgc2FtZVZub2RlKG5vZGUsIGMpKSB7IHJldHVybiBpIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXRjaFZub2RlIChcbiAgICBvbGRWbm9kZSxcbiAgICB2bm9kZSxcbiAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgb3duZXJBcnJheSxcbiAgICBpbmRleCxcbiAgICByZW1vdmVPbmx5XG4gICkge1xuICAgIGlmIChvbGRWbm9kZSA9PT0gdm5vZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0RlZih2bm9kZS5lbG0pICYmIGlzRGVmKG93bmVyQXJyYXkpKSB7XG4gICAgICAvLyBjbG9uZSByZXVzZWQgdm5vZGVcbiAgICAgIHZub2RlID0gb3duZXJBcnJheVtpbmRleF0gPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgICB9XG5cbiAgICB2YXIgZWxtID0gdm5vZGUuZWxtID0gb2xkVm5vZGUuZWxtO1xuXG4gICAgaWYgKGlzVHJ1ZShvbGRWbm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIpKSB7XG4gICAgICBpZiAoaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICBoeWRyYXRlKG9sZFZub2RlLmVsbSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gcmV1c2UgZWxlbWVudCBmb3Igc3RhdGljIHRyZWVzLlxuICAgIC8vIG5vdGUgd2Ugb25seSBkbyB0aGlzIGlmIHRoZSB2bm9kZSBpcyBjbG9uZWQgLVxuICAgIC8vIGlmIHRoZSBuZXcgbm9kZSBpcyBub3QgY2xvbmVkIGl0IG1lYW5zIHRoZSByZW5kZXIgZnVuY3Rpb25zIGhhdmUgYmVlblxuICAgIC8vIHJlc2V0IGJ5IHRoZSBob3QtcmVsb2FkLWFwaSBhbmQgd2UgbmVlZCB0byBkbyBhIHByb3BlciByZS1yZW5kZXIuXG4gICAgaWYgKGlzVHJ1ZSh2bm9kZS5pc1N0YXRpYykgJiZcbiAgICAgIGlzVHJ1ZShvbGRWbm9kZS5pc1N0YXRpYykgJiZcbiAgICAgIHZub2RlLmtleSA9PT0gb2xkVm5vZGUua2V5ICYmXG4gICAgICAoaXNUcnVlKHZub2RlLmlzQ2xvbmVkKSB8fCBpc1RydWUodm5vZGUuaXNPbmNlKSlcbiAgICApIHtcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnByZXBhdGNoKSkge1xuICAgICAgaShvbGRWbm9kZSwgdm5vZGUpO1xuICAgIH1cblxuICAgIHZhciBvbGRDaCA9IG9sZFZub2RlLmNoaWxkcmVuO1xuICAgIHZhciBjaCA9IHZub2RlLmNoaWxkcmVuO1xuICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc1BhdGNoYWJsZSh2bm9kZSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMudXBkYXRlLmxlbmd0aDsgKytpKSB7IGNicy51cGRhdGVbaV0ob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnVwZGF0ZSkpIHsgaShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgfVxuICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICBpZiAoaXNEZWYob2xkQ2gpICYmIGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAob2xkQ2ggIT09IGNoKSB7IHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUsIHJlbW92ZU9ubHkpOyB9XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhjaCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKSB7IG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCAnJyk7IH1cbiAgICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgY2gsIDAsIGNoLmxlbmd0aCAtIDEsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZENoKSkge1xuICAgICAgICByZW1vdmVWbm9kZXMob2xkQ2gsIDAsIG9sZENoLmxlbmd0aCAtIDEpO1xuICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkge1xuICAgICAgICBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sIHZub2RlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wb3N0cGF0Y2gpKSB7IGkob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUluc2VydEhvb2sgKHZub2RlLCBxdWV1ZSwgaW5pdGlhbCkge1xuICAgIC8vIGRlbGF5IGluc2VydCBob29rcyBmb3IgY29tcG9uZW50IHJvb3Qgbm9kZXMsIGludm9rZSB0aGVtIGFmdGVyIHRoZVxuICAgIC8vIGVsZW1lbnQgaXMgcmVhbGx5IGluc2VydGVkXG4gICAgaWYgKGlzVHJ1ZShpbml0aWFsKSAmJiBpc0RlZih2bm9kZS5wYXJlbnQpKSB7XG4gICAgICB2bm9kZS5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0ID0gcXVldWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcXVldWVbaV0uZGF0YS5ob29rLmluc2VydChxdWV1ZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGh5ZHJhdGlvbkJhaWxlZCA9IGZhbHNlO1xuICAvLyBsaXN0IG9mIG1vZHVsZXMgdGhhdCBjYW4gc2tpcCBjcmVhdGUgaG9vayBkdXJpbmcgaHlkcmF0aW9uIGJlY2F1c2UgdGhleVxuICAvLyBhcmUgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgY2xpZW50IG9yIGhhcyBubyBuZWVkIGZvciBpbml0aWFsaXphdGlvblxuICAvLyBOb3RlOiBzdHlsZSBpcyBleGNsdWRlZCBiZWNhdXNlIGl0IHJlbGllcyBvbiBpbml0aWFsIGNsb25lIGZvciBmdXR1cmVcbiAgLy8gZGVlcCB1cGRhdGVzICgjNzA2MykuXG4gIHZhciBpc1JlbmRlcmVkTW9kdWxlID0gbWFrZU1hcCgnYXR0cnMsY2xhc3Msc3RhdGljQ2xhc3Msc3RhdGljU3R5bGUsa2V5Jyk7XG5cbiAgLy8gTm90ZTogdGhpcyBpcyBhIGJyb3dzZXItb25seSBmdW5jdGlvbiBzbyB3ZSBjYW4gYXNzdW1lIGVsbXMgYXJlIERPTSBub2Rlcy5cbiAgZnVuY3Rpb24gaHlkcmF0ZSAoZWxtLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpblZQcmUpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICBpblZQcmUgPSBpblZQcmUgfHwgKGRhdGEgJiYgZGF0YS5wcmUpO1xuICAgIHZub2RlLmVsbSA9IGVsbTtcblxuICAgIGlmIChpc1RydWUodm5vZGUuaXNDb21tZW50KSAmJiBpc0RlZih2bm9kZS5hc3luY0ZhY3RvcnkpKSB7XG4gICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gYXNzZXJ0IG5vZGUgbWF0Y2hcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFhc3NlcnROb2RlTWF0Y2goZWxtLCB2bm9kZSwgaW5WUHJlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkuaW5pdCkpIHsgaSh2bm9kZSwgdHJ1ZSAvKiBoeWRyYXRpbmcgKi8pOyB9XG4gICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgICAgICAvLyBjaGlsZCBjb21wb25lbnQuIGl0IHNob3VsZCBoYXZlIGh5ZHJhdGVkIGl0cyBvd24gdHJlZS5cbiAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgIGlmIChpc0RlZihjaGlsZHJlbikpIHtcbiAgICAgICAgLy8gZW1wdHkgZWxlbWVudCwgYWxsb3cgY2xpZW50IHRvIHBpY2sgdXAgYW5kIHBvcHVsYXRlIGNoaWxkcmVuXG4gICAgICAgIGlmICghZWxtLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgIGNyZWF0ZUNoaWxkcmVuKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB2LWh0bWwgYW5kIGRvbVByb3BzOiBpbm5lckhUTUxcbiAgICAgICAgICBpZiAoaXNEZWYoaSA9IGRhdGEpICYmIGlzRGVmKGkgPSBpLmRvbVByb3BzKSAmJiBpc0RlZihpID0gaS5pbm5lckhUTUwpKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gZWxtLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAhaHlkcmF0aW9uQmFpbGVkXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGh5ZHJhdGlvbkJhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJlbnQ6ICcsIGVsbSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2ZXIgaW5uZXJIVE1MOiAnLCBpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2NsaWVudCBpbm5lckhUTUw6ICcsIGVsbS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpdGVyYXRlIGFuZCBjb21wYXJlIGNoaWxkcmVuIGxpc3RzXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW5NYXRjaCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gZWxtLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICAgIGlmICghY2hpbGROb2RlIHx8ICFoeWRyYXRlKGNoaWxkTm9kZSwgY2hpbGRyZW5baSQxXSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpblZQcmUpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5NYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgY2hpbGROb2RlIGlzIG5vdCBudWxsLCBpdCBtZWFucyB0aGUgYWN0dWFsIGNoaWxkTm9kZXMgbGlzdCBpc1xuICAgICAgICAgICAgLy8gbG9uZ2VyIHRoYW4gdGhlIHZpcnR1YWwgY2hpbGRyZW4gbGlzdC5cbiAgICAgICAgICAgIGlmICghY2hpbGRyZW5NYXRjaCB8fCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgIWh5ZHJhdGlvbkJhaWxlZFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFyZW50OiAnLCBlbG0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWlzbWF0Y2hpbmcgY2hpbGROb2RlcyB2cy4gVk5vZGVzOiAnLCBlbG0uY2hpbGROb2RlcywgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICAgIHZhciBmdWxsSW52b2tlID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgaWYgKCFpc1JlbmRlcmVkTW9kdWxlKGtleSkpIHtcbiAgICAgICAgICAgIGZ1bGxJbnZva2UgPSB0cnVlO1xuICAgICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZ1bGxJbnZva2UgJiYgZGF0YVsnY2xhc3MnXSkge1xuICAgICAgICAgIC8vIGVuc3VyZSBjb2xsZWN0aW5nIGRlcHMgZm9yIGRlZXAgY2xhc3MgYmluZGluZ3MgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgICAgdHJhdmVyc2UoZGF0YVsnY2xhc3MnXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsbS5kYXRhICE9PSB2bm9kZS50ZXh0KSB7XG4gICAgICBlbG0uZGF0YSA9IHZub2RlLnRleHQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnROb2RlTWF0Y2ggKG5vZGUsIHZub2RlLCBpblZQcmUpIHtcbiAgICBpZiAoaXNEZWYodm5vZGUudGFnKSkge1xuICAgICAgcmV0dXJuIHZub2RlLnRhZy5pbmRleE9mKCd2dWUtY29tcG9uZW50JykgPT09IDAgfHwgKFxuICAgICAgICAhaXNVbmtub3duRWxlbWVudCQkMSh2bm9kZSwgaW5WUHJlKSAmJlxuICAgICAgICB2bm9kZS50YWcudG9Mb3dlckNhc2UoKSA9PT0gKG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09ICh2bm9kZS5pc0NvbW1lbnQgPyA4IDogMylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSwgaHlkcmF0aW5nLCByZW1vdmVPbmx5KSB7XG4gICAgaWYgKGlzVW5kZWYodm5vZGUpKSB7XG4gICAgICBpZiAoaXNEZWYob2xkVm5vZGUpKSB7IGludm9rZURlc3Ryb3lIb29rKG9sZFZub2RlKTsgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGlzSW5pdGlhbFBhdGNoID0gZmFsc2U7XG4gICAgdmFyIGluc2VydGVkVm5vZGVRdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGlzVW5kZWYob2xkVm5vZGUpKSB7XG4gICAgICAvLyBlbXB0eSBtb3VudCAobGlrZWx5IGFzIGNvbXBvbmVudCksIGNyZWF0ZSBuZXcgcm9vdCBlbGVtZW50XG4gICAgICBpc0luaXRpYWxQYXRjaCA9IHRydWU7XG4gICAgICBjcmVhdGVFbG0odm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpc1JlYWxFbGVtZW50ID0gaXNEZWYob2xkVm5vZGUubm9kZVR5cGUpO1xuICAgICAgaWYgKCFpc1JlYWxFbGVtZW50ICYmIHNhbWVWbm9kZShvbGRWbm9kZSwgdm5vZGUpKSB7XG4gICAgICAgIC8vIHBhdGNoIGV4aXN0aW5nIHJvb3Qgbm9kZVxuICAgICAgICBwYXRjaFZub2RlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBudWxsLCBudWxsLCByZW1vdmVPbmx5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1JlYWxFbGVtZW50KSB7XG4gICAgICAgICAgLy8gbW91bnRpbmcgdG8gYSByZWFsIGVsZW1lbnRcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGlzIHNlcnZlci1yZW5kZXJlZCBjb250ZW50IGFuZCBpZiB3ZSBjYW4gcGVyZm9ybVxuICAgICAgICAgIC8vIGEgc3VjY2Vzc2Z1bCBoeWRyYXRpb24uXG4gICAgICAgICAgaWYgKG9sZFZub2RlLm5vZGVUeXBlID09PSAxICYmIG9sZFZub2RlLmhhc0F0dHJpYnV0ZShTU1JfQVRUUikpIHtcbiAgICAgICAgICAgIG9sZFZub2RlLnJlbW92ZUF0dHJpYnV0ZShTU1JfQVRUUik7XG4gICAgICAgICAgICBoeWRyYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNUcnVlKGh5ZHJhdGluZykpIHtcbiAgICAgICAgICAgIGlmIChoeWRyYXRlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSkge1xuICAgICAgICAgICAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHRydWUpO1xuICAgICAgICAgICAgICByZXR1cm4gb2xkVm5vZGVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgICAgICdUaGUgY2xpZW50LXNpZGUgcmVuZGVyZWQgdmlydHVhbCBET00gdHJlZSBpcyBub3QgbWF0Y2hpbmcgJyArXG4gICAgICAgICAgICAgICAgJ3NlcnZlci1yZW5kZXJlZCBjb250ZW50LiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgaW5jb3JyZWN0ICcgK1xuICAgICAgICAgICAgICAgICdIVE1MIG1hcmt1cCwgZm9yIGV4YW1wbGUgbmVzdGluZyBibG9jay1sZXZlbCBlbGVtZW50cyBpbnNpZGUgJyArXG4gICAgICAgICAgICAgICAgJzxwPiwgb3IgbWlzc2luZyA8dGJvZHk+LiBCYWlsaW5nIGh5ZHJhdGlvbiBhbmQgcGVyZm9ybWluZyAnICtcbiAgICAgICAgICAgICAgICAnZnVsbCBjbGllbnQtc2lkZSByZW5kZXIuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlaXRoZXIgbm90IHNlcnZlci1yZW5kZXJlZCwgb3IgaHlkcmF0aW9uIGZhaWxlZC5cbiAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgbm9kZSBhbmQgcmVwbGFjZSBpdFxuICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVwbGFjaW5nIGV4aXN0aW5nIGVsZW1lbnRcbiAgICAgICAgdmFyIG9sZEVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICAgICAgdmFyIHBhcmVudEVsbSA9IG5vZGVPcHMucGFyZW50Tm9kZShvbGRFbG0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgbm9kZVxuICAgICAgICBjcmVhdGVFbG0oXG4gICAgICAgICAgdm5vZGUsXG4gICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLFxuICAgICAgICAgIC8vIGV4dHJlbWVseSByYXJlIGVkZ2UgY2FzZTogZG8gbm90IGluc2VydCBpZiBvbGQgZWxlbWVudCBpcyBpbiBhXG4gICAgICAgICAgLy8gbGVhdmluZyB0cmFuc2l0aW9uLiBPbmx5IGhhcHBlbnMgd2hlbiBjb21iaW5pbmcgdHJhbnNpdGlvbiArXG4gICAgICAgICAgLy8ga2VlcC1hbGl2ZSArIEhPQ3MuICgjNDU5MClcbiAgICAgICAgICBvbGRFbG0uX2xlYXZlQ2IgPyBudWxsIDogcGFyZW50RWxtLFxuICAgICAgICAgIG5vZGVPcHMubmV4dFNpYmxpbmcob2xkRWxtKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgcGxhY2Vob2xkZXIgbm9kZSBlbGVtZW50LCByZWN1cnNpdmVseVxuICAgICAgICBpZiAoaXNEZWYodm5vZGUucGFyZW50KSkge1xuICAgICAgICAgIHZhciBhbmNlc3RvciA9IHZub2RlLnBhcmVudDtcbiAgICAgICAgICB2YXIgcGF0Y2hhYmxlID0gaXNQYXRjaGFibGUodm5vZGUpO1xuICAgICAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICBjYnMuZGVzdHJveVtpXShhbmNlc3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmNlc3Rvci5lbG0gPSB2bm9kZS5lbG07XG4gICAgICAgICAgICBpZiAocGF0Y2hhYmxlKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kkMSkge1xuICAgICAgICAgICAgICAgIGNicy5jcmVhdGVbaSQxXShlbXB0eU5vZGUsIGFuY2VzdG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyAjNjUxM1xuICAgICAgICAgICAgICAvLyBpbnZva2UgaW5zZXJ0IGhvb2tzIHRoYXQgbWF5IGhhdmUgYmVlbiBtZXJnZWQgYnkgY3JlYXRlIGhvb2tzLlxuICAgICAgICAgICAgICAvLyBlLmcuIGZvciBkaXJlY3RpdmVzIHRoYXQgdXNlcyB0aGUgXCJpbnNlcnRlZFwiIGhvb2suXG4gICAgICAgICAgICAgIHZhciBpbnNlcnQgPSBhbmNlc3Rvci5kYXRhLmhvb2suaW5zZXJ0O1xuICAgICAgICAgICAgICBpZiAoaW5zZXJ0Lm1lcmdlZCkge1xuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IGF0IGluZGV4IDEgdG8gYXZvaWQgcmUtaW52b2tpbmcgY29tcG9uZW50IG1vdW50ZWQgaG9va1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkMiA9IDE7IGkkMiA8IGluc2VydC5mbnMubGVuZ3RoOyBpJDIrKykge1xuICAgICAgICAgICAgICAgICAgaW5zZXJ0LmZuc1tpJDJdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWdpc3RlclJlZihhbmNlc3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXN0cm95IG9sZCBub2RlXG4gICAgICAgIGlmIChpc0RlZihwYXJlbnRFbG0pKSB7XG4gICAgICAgICAgcmVtb3ZlVm5vZGVzKFtvbGRWbm9kZV0sIDAsIDApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRhZykpIHtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIGlzSW5pdGlhbFBhdGNoKTtcbiAgICByZXR1cm4gdm5vZGUuZWxtXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBkaXJlY3RpdmVzID0ge1xuICBjcmVhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gIHVwZGF0ZTogdXBkYXRlRGlyZWN0aXZlcyxcbiAgZGVzdHJveTogZnVuY3Rpb24gdW5iaW5kRGlyZWN0aXZlcyAodm5vZGUpIHtcbiAgICB1cGRhdGVEaXJlY3RpdmVzKHZub2RlLCBlbXB0eU5vZGUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVEaXJlY3RpdmVzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKG9sZFZub2RlLmRhdGEuZGlyZWN0aXZlcyB8fCB2bm9kZS5kYXRhLmRpcmVjdGl2ZXMpIHtcbiAgICBfdXBkYXRlKG9sZFZub2RlLCB2bm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3VwZGF0ZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBpc0NyZWF0ZSA9IG9sZFZub2RlID09PSBlbXB0eU5vZGU7XG4gIHZhciBpc0Rlc3Ryb3kgPSB2bm9kZSA9PT0gZW1wdHlOb2RlO1xuICB2YXIgb2xkRGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMShvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMsIG9sZFZub2RlLmNvbnRleHQpO1xuICB2YXIgbmV3RGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMSh2bm9kZS5kYXRhLmRpcmVjdGl2ZXMsIHZub2RlLmNvbnRleHQpO1xuXG4gIHZhciBkaXJzV2l0aEluc2VydCA9IFtdO1xuICB2YXIgZGlyc1dpdGhQb3N0cGF0Y2ggPSBbXTtcblxuICB2YXIga2V5LCBvbGREaXIsIGRpcjtcbiAgZm9yIChrZXkgaW4gbmV3RGlycykge1xuICAgIG9sZERpciA9IG9sZERpcnNba2V5XTtcbiAgICBkaXIgPSBuZXdEaXJzW2tleV07XG4gICAgaWYgKCFvbGREaXIpIHtcbiAgICAgIC8vIG5ldyBkaXJlY3RpdmUsIGJpbmRcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAnYmluZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICBpZiAoZGlyLmRlZiAmJiBkaXIuZGVmLmluc2VydGVkKSB7XG4gICAgICAgIGRpcnNXaXRoSW5zZXJ0LnB1c2goZGlyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXhpc3RpbmcgZGlyZWN0aXZlLCB1cGRhdGVcbiAgICAgIGRpci5vbGRWYWx1ZSA9IG9sZERpci52YWx1ZTtcbiAgICAgIGRpci5vbGRBcmcgPSBvbGREaXIuYXJnO1xuICAgICAgY2FsbEhvb2skMShkaXIsICd1cGRhdGUnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgaWYgKGRpci5kZWYgJiYgZGlyLmRlZi5jb21wb25lbnRVcGRhdGVkKSB7XG4gICAgICAgIGRpcnNXaXRoUG9zdHBhdGNoLnB1c2goZGlyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyc1dpdGhJbnNlcnQubGVuZ3RoKSB7XG4gICAgdmFyIGNhbGxJbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhJbnNlcnRbaV0sICdpbnNlcnRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaXNDcmVhdGUpIHtcbiAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAnaW5zZXJ0JywgY2FsbEluc2VydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxJbnNlcnQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGlyc1dpdGhQb3N0cGF0Y2gubGVuZ3RoKSB7XG4gICAgbWVyZ2VWTm9kZUhvb2sodm5vZGUsICdwb3N0cGF0Y2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhQb3N0cGF0Y2hbaV0sICdjb21wb25lbnRVcGRhdGVkJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICghaXNDcmVhdGUpIHtcbiAgICBmb3IgKGtleSBpbiBvbGREaXJzKSB7XG4gICAgICBpZiAoIW5ld0RpcnNba2V5XSkge1xuICAgICAgICAvLyBubyBsb25nZXIgcHJlc2VudCwgdW5iaW5kXG4gICAgICAgIGNhbGxIb29rJDEob2xkRGlyc1trZXldLCAndW5iaW5kJywgb2xkVm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZW1wdHlNb2RpZmllcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzJDEgKFxuICBkaXJzLFxuICB2bVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoIWRpcnMpIHtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gcmVzXG4gIH1cbiAgdmFyIGksIGRpcjtcbiAgZm9yIChpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICBkaXIgPSBkaXJzW2ldO1xuICAgIGlmICghZGlyLm1vZGlmaWVycykge1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBkaXIubW9kaWZpZXJzID0gZW1wdHlNb2RpZmllcnM7XG4gICAgfVxuICAgIHJlc1tnZXRSYXdEaXJOYW1lKGRpcildID0gZGlyO1xuICAgIGRpci5kZWYgPSByZXNvbHZlQXNzZXQodm0uJG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyLm5hbWUsIHRydWUpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldFJhd0Rpck5hbWUgKGRpcikge1xuICByZXR1cm4gZGlyLnJhd05hbWUgfHwgKChkaXIubmFtZSkgKyBcIi5cIiArIChPYmplY3Qua2V5cyhkaXIubW9kaWZpZXJzIHx8IHt9KS5qb2luKCcuJykpKVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayQxIChkaXIsIGhvb2ssIHZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KSB7XG4gIHZhciBmbiA9IGRpci5kZWYgJiYgZGlyLmRlZltob29rXTtcbiAgaWYgKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKHZub2RlLmVsbSwgZGlyLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm5vZGUuY29udGV4dCwgKFwiZGlyZWN0aXZlIFwiICsgKGRpci5uYW1lKSArIFwiIFwiICsgaG9vayArIFwiIGhvb2tcIikpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgYmFzZU1vZHVsZXMgPSBbXG4gIHJlZixcbiAgZGlyZWN0aXZlc1xuXTtcblxuLyogICovXG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIG9wdHMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBpZiAoaXNEZWYob3B0cykgJiYgb3B0cy5DdG9yLm9wdGlvbnMuaW5oZXJpdEF0dHJzID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEuYXR0cnMpICYmIGlzVW5kZWYodm5vZGUuZGF0YS5hdHRycykpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIga2V5LCBjdXIsIG9sZDtcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgdmFyIG9sZEF0dHJzID0gb2xkVm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcbiAgdmFyIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcbiAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gIGlmIChpc0RlZihhdHRycy5fX29iX18pKSB7XG4gICAgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzID0gZXh0ZW5kKHt9LCBhdHRycyk7XG4gIH1cblxuICBmb3IgKGtleSBpbiBhdHRycykge1xuICAgIGN1ciA9IGF0dHJzW2tleV07XG4gICAgb2xkID0gb2xkQXR0cnNba2V5XTtcbiAgICBpZiAob2xkICE9PSBjdXIpIHtcbiAgICAgIHNldEF0dHIoZWxtLCBrZXksIGN1ciwgdm5vZGUuZGF0YS5wcmUpO1xuICAgIH1cbiAgfVxuICAvLyAjNDM5MTogaW4gSUU5LCBzZXR0aW5nIHR5cGUgY2FuIHJlc2V0IHZhbHVlIGZvciBpbnB1dFt0eXBlPXJhZGlvXVxuICAvLyAjNjY2NjogSUUvRWRnZSBmb3JjZXMgcHJvZ3Jlc3MgdmFsdWUgZG93biB0byAxIGJlZm9yZSBzZXR0aW5nIGEgbWF4XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoKGlzSUUgfHwgaXNFZGdlKSAmJiBhdHRycy52YWx1ZSAhPT0gb2xkQXR0cnMudmFsdWUpIHtcbiAgICBzZXRBdHRyKGVsbSwgJ3ZhbHVlJywgYXR0cnMudmFsdWUpO1xuICB9XG4gIGZvciAoa2V5IGluIG9sZEF0dHJzKSB7XG4gICAgaWYgKGlzVW5kZWYoYXR0cnNba2V5XSkpIHtcbiAgICAgIGlmIChpc1hsaW5rKGtleSkpIHtcbiAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKHhsaW5rTlMsIGdldFhsaW5rUHJvcChrZXkpKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEF0dHIgKGVsLCBrZXksIHZhbHVlLCBpc0luUHJlKSB7XG4gIGlmIChpc0luUHJlIHx8IGVsLnRhZ05hbWUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuQXR0cihrZXkpKSB7XG4gICAgLy8gc2V0IGF0dHJpYnV0ZSBmb3IgYmxhbmsgdmFsdWVcbiAgICAvLyBlLmcuIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IG9uZTwvb3B0aW9uPlxuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRlY2huaWNhbGx5IGFsbG93ZnVsbHNjcmVlbiBpcyBhIGJvb2xlYW4gYXR0cmlidXRlIGZvciA8aWZyYW1lPixcbiAgICAgIC8vIGJ1dCBGbGFzaCBleHBlY3RzIGEgdmFsdWUgb2YgXCJ0cnVlXCIgd2hlbiB1c2VkIG9uIDxlbWJlZD4gdGFnXG4gICAgICB2YWx1ZSA9IGtleSA9PT0gJ2FsbG93ZnVsbHNjcmVlbicgJiYgZWwudGFnTmFtZSA9PT0gJ0VNQkVEJ1xuICAgICAgICA/ICd0cnVlJ1xuICAgICAgICA6IGtleTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNFbnVtZXJhdGVkQXR0cihrZXkpKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGtleSwgY29udmVydEVudW1lcmF0ZWRWYWx1ZShrZXksIHZhbHVlKSk7XG4gIH0gZWxzZSBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZVNldEF0dHIgKGVsLCBrZXksIHZhbHVlKSB7XG4gIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICB9IGVsc2Uge1xuICAgIC8vICM3MTM4OiBJRTEwICYgMTEgZmlyZXMgaW5wdXQgZXZlbnQgd2hlbiBzZXR0aW5nIHBsYWNlaG9sZGVyIG9uXG4gICAgLy8gPHRleHRhcmVhPi4uLiBibG9jayB0aGUgZmlyc3QgaW5wdXQgZXZlbnQgYW5kIHJlbW92ZSB0aGUgYmxvY2tlclxuICAgIC8vIGltbWVkaWF0ZWx5LlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChcbiAgICAgIGlzSUUgJiYgIWlzSUU5ICYmXG4gICAgICBlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnICYmXG4gICAgICBrZXkgPT09ICdwbGFjZWhvbGRlcicgJiYgdmFsdWUgIT09ICcnICYmICFlbC5fX2llcGhcbiAgICApIHtcbiAgICAgIHZhciBibG9ja2VyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBibG9ja2VyKTtcbiAgICAgIH07XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGJsb2NrZXIpO1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBlbC5fX2llcGggPSB0cnVlOyAvKiBJRSBwbGFjZWhvbGRlciBwYXRjaGVkICovXG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfVxufVxuXG52YXIgYXR0cnMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlQXR0cnMsXG4gIHVwZGF0ZTogdXBkYXRlQXR0cnNcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiB1cGRhdGVDbGFzcyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcbiAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICB2YXIgb2xkRGF0YSA9IG9sZFZub2RlLmRhdGE7XG4gIGlmIChcbiAgICBpc1VuZGVmKGRhdGEuc3RhdGljQ2xhc3MpICYmXG4gICAgaXNVbmRlZihkYXRhLmNsYXNzKSAmJiAoXG4gICAgICBpc1VuZGVmKG9sZERhdGEpIHx8IChcbiAgICAgICAgaXNVbmRlZihvbGREYXRhLnN0YXRpY0NsYXNzKSAmJlxuICAgICAgICBpc1VuZGVmKG9sZERhdGEuY2xhc3MpXG4gICAgICApXG4gICAgKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBjbHMgPSBnZW5DbGFzc0ZvclZub2RlKHZub2RlKTtcblxuICAvLyBoYW5kbGUgdHJhbnNpdGlvbiBjbGFzc2VzXG4gIHZhciB0cmFuc2l0aW9uQ2xhc3MgPSBlbC5fdHJhbnNpdGlvbkNsYXNzZXM7XG4gIGlmIChpc0RlZih0cmFuc2l0aW9uQ2xhc3MpKSB7XG4gICAgY2xzID0gY29uY2F0KGNscywgc3RyaW5naWZ5Q2xhc3ModHJhbnNpdGlvbkNsYXNzKSk7XG4gIH1cblxuICAvLyBzZXQgdGhlIGNsYXNzXG4gIGlmIChjbHMgIT09IGVsLl9wcmV2Q2xhc3MpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xzKTtcbiAgICBlbC5fcHJldkNsYXNzID0gY2xzO1xuICB9XG59XG5cbnZhciBrbGFzcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVDbGFzcyxcbiAgdXBkYXRlOiB1cGRhdGVDbGFzc1xufTtcblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGluIHNvbWUgY2FzZXMsIHRoZSBldmVudCB1c2VkIGhhcyB0byBiZSBkZXRlcm1pbmVkIGF0IHJ1bnRpbWVcbi8vIHNvIHdlIHVzZWQgc29tZSByZXNlcnZlZCB0b2tlbnMgZHVyaW5nIGNvbXBpbGUuXG52YXIgUkFOR0VfVE9LRU4gPSAnX19yJztcbnZhciBDSEVDS0JPWF9SQURJT19UT0tFTiA9ICdfX2MnO1xuXG4vKiAgKi9cblxuLy8gbm9ybWFsaXplIHYtbW9kZWwgZXZlbnQgdG9rZW5zIHRoYXQgY2FuIG9ubHkgYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lLlxuLy8gaXQncyBpbXBvcnRhbnQgdG8gcGxhY2UgdGhlIGV2ZW50IGFzIHRoZSBmaXJzdCBpbiB0aGUgYXJyYXkgYmVjYXVzZVxuLy8gdGhlIHdob2xlIHBvaW50IGlzIGVuc3VyaW5nIHRoZSB2LW1vZGVsIGNhbGxiYWNrIGdldHMgY2FsbGVkIGJlZm9yZVxuLy8gdXNlci1hdHRhY2hlZCBoYW5kbGVycy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50cyAob24pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihvbltSQU5HRV9UT0tFTl0pKSB7XG4gICAgLy8gSUUgaW5wdXRbdHlwZT1yYW5nZV0gb25seSBzdXBwb3J0cyBgY2hhbmdlYCBldmVudFxuICAgIHZhciBldmVudCA9IGlzSUUgPyAnY2hhbmdlJyA6ICdpbnB1dCc7XG4gICAgb25bZXZlbnRdID0gW10uY29uY2F0KG9uW1JBTkdFX1RPS0VOXSwgb25bZXZlbnRdIHx8IFtdKTtcbiAgICBkZWxldGUgb25bUkFOR0VfVE9LRU5dO1xuICB9XG4gIC8vIFRoaXMgd2FzIG9yaWdpbmFsbHkgaW50ZW5kZWQgdG8gZml4ICM0NTIxIGJ1dCBubyBsb25nZXIgbmVjZXNzYXJ5XG4gIC8vIGFmdGVyIDIuNS4gS2VlcGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdCB3aXRoIGdlbmVyYXRlZCBjb2RlIGZyb20gPCAyLjRcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihvbltDSEVDS0JPWF9SQURJT19UT0tFTl0pKSB7XG4gICAgb24uY2hhbmdlID0gW10uY29uY2F0KG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXSwgb24uY2hhbmdlIHx8IFtdKTtcbiAgICBkZWxldGUgb25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dO1xuICB9XG59XG5cbnZhciB0YXJnZXQkMTtcblxuZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIkMSAoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQkMTsgLy8gc2F2ZSBjdXJyZW50IHRhcmdldCBlbGVtZW50IGluIGNsb3N1cmVcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICB2YXIgcmVzID0gaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZSQyKGV2ZW50LCBvbmNlSGFuZGxlciwgY2FwdHVyZSwgX3RhcmdldCk7XG4gICAgfVxuICB9XG59XG5cbi8vICM5NDQ2OiBGaXJlZm94IDw9IDUzIChpbiBwYXJ0aWN1bGFyLCBFU1IgNTIpIGhhcyBpbmNvcnJlY3QgRXZlbnQudGltZVN0YW1wXG4vLyBpbXBsZW1lbnRhdGlvbiBhbmQgZG9lcyBub3QgZmlyZSBtaWNyb3Rhc2tzIGluIGJldHdlZW4gZXZlbnQgcHJvcGFnYXRpb24sIHNvXG4vLyBzYWZlIHRvIGV4Y2x1ZGUuXG52YXIgdXNlTWljcm90YXNrRml4ID0gaXNVc2luZ01pY3JvVGFzayAmJiAhKGlzRkYgJiYgTnVtYmVyKGlzRkZbMV0pIDw9IDUzKTtcblxuZnVuY3Rpb24gYWRkJDEgKFxuICBuYW1lLFxuICBoYW5kbGVyLFxuICBjYXB0dXJlLFxuICBwYXNzaXZlXG4pIHtcbiAgLy8gYXN5bmMgZWRnZSBjYXNlICM2NTY2OiBpbm5lciBjbGljayBldmVudCB0cmlnZ2VycyBwYXRjaCwgZXZlbnQgaGFuZGxlclxuICAvLyBhdHRhY2hlZCB0byBvdXRlciBlbGVtZW50IGR1cmluZyBwYXRjaCwgYW5kIHRyaWdnZXJlZCBhZ2Fpbi4gVGhpc1xuICAvLyBoYXBwZW5zIGJlY2F1c2UgYnJvd3NlcnMgZmlyZSBtaWNyb3Rhc2sgdGlja3MgYmV0d2VlbiBldmVudCBwcm9wYWdhdGlvbi5cbiAgLy8gdGhlIHNvbHV0aW9uIGlzIHNpbXBsZTogd2Ugc2F2ZSB0aGUgdGltZXN0YW1wIHdoZW4gYSBoYW5kbGVyIGlzIGF0dGFjaGVkLFxuICAvLyBhbmQgdGhlIGhhbmRsZXIgd291bGQgb25seSBmaXJlIGlmIHRoZSBldmVudCBwYXNzZWQgdG8gaXQgd2FzIGZpcmVkXG4gIC8vIEFGVEVSIGl0IHdhcyBhdHRhY2hlZC5cbiAgaWYgKHVzZU1pY3JvdGFza0ZpeCkge1xuICAgIHZhciBhdHRhY2hlZFRpbWVzdGFtcCA9IGN1cnJlbnRGbHVzaFRpbWVzdGFtcDtcbiAgICB2YXIgb3JpZ2luYWwgPSBoYW5kbGVyO1xuICAgIGhhbmRsZXIgPSBvcmlnaW5hbC5fd3JhcHBlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vIGJ1YmJsaW5nLCBzaG91bGQgYWx3YXlzIGZpcmUuXG4gICAgICAgIC8vIHRoaXMgaXMganVzdCBhIHNhZmV0eSBuZXQgaW4gY2FzZSBldmVudC50aW1lU3RhbXAgaXMgdW5yZWxpYWJsZSBpblxuICAgICAgICAvLyBjZXJ0YWluIHdlaXJkIGVudmlyb25tZW50cy4uLlxuICAgICAgICBlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0IHx8XG4gICAgICAgIC8vIGV2ZW50IGlzIGZpcmVkIGFmdGVyIGhhbmRsZXIgYXR0YWNobWVudFxuICAgICAgICBlLnRpbWVTdGFtcCA+PSBhdHRhY2hlZFRpbWVzdGFtcCB8fFxuICAgICAgICAvLyBiYWlsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBoYXZlIGJ1Z2d5IGV2ZW50LnRpbWVTdGFtcCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgLy8gIzk0NjIgaU9TIDkgYnVnOiBldmVudC50aW1lU3RhbXAgaXMgMCBhZnRlciBoaXN0b3J5LnB1c2hTdGF0ZVxuICAgICAgICAvLyAjOTY4MSBRdFdlYkVuZ2luZSBldmVudC50aW1lU3RhbXAgaXMgbmVnYXRpdmUgdmFsdWVcbiAgICAgICAgZS50aW1lU3RhbXAgPD0gMCB8fFxuICAgICAgICAvLyAjOTQ0OCBiYWlsIGlmIGV2ZW50IGlzIGZpcmVkIGluIGFub3RoZXIgZG9jdW1lbnQgaW4gYSBtdWx0aS1wYWdlXG4gICAgICAgIC8vIGVsZWN0cm9uL253LmpzIGFwcCwgc2luY2UgZXZlbnQudGltZVN0YW1wIHdpbGwgYmUgdXNpbmcgYSBkaWZmZXJlbnRcbiAgICAgICAgLy8gc3RhcnRpbmcgcmVmZXJlbmNlXG4gICAgICAgIGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHRhcmdldCQxLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgbmFtZSxcbiAgICBoYW5kbGVyLFxuICAgIHN1cHBvcnRzUGFzc2l2ZVxuICAgICAgPyB7IGNhcHR1cmU6IGNhcHR1cmUsIHBhc3NpdmU6IHBhc3NpdmUgfVxuICAgICAgOiBjYXB0dXJlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQyIChcbiAgbmFtZSxcbiAgaGFuZGxlcixcbiAgY2FwdHVyZSxcbiAgX3RhcmdldFxuKSB7XG4gIChfdGFyZ2V0IHx8IHRhcmdldCQxKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgIG5hbWUsXG4gICAgaGFuZGxlci5fd3JhcHBlciB8fCBoYW5kbGVyLFxuICAgIGNhcHR1cmVcbiAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRE9NTGlzdGVuZXJzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5vbikgJiYgaXNVbmRlZih2bm9kZS5kYXRhLm9uKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvbiA9IHZub2RlLmRhdGEub24gfHwge307XG4gIHZhciBvbGRPbiA9IG9sZFZub2RlLmRhdGEub24gfHwge307XG4gIHRhcmdldCQxID0gdm5vZGUuZWxtO1xuICBub3JtYWxpemVFdmVudHMob24pO1xuICB1cGRhdGVMaXN0ZW5lcnMob24sIG9sZE9uLCBhZGQkMSwgcmVtb3ZlJDIsIGNyZWF0ZU9uY2VIYW5kbGVyJDEsIHZub2RlLmNvbnRleHQpO1xuICB0YXJnZXQkMSA9IHVuZGVmaW5lZDtcbn1cblxudmFyIGV2ZW50cyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVET01MaXN0ZW5lcnMsXG4gIHVwZGF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzXG59O1xuXG4vKiAgKi9cblxudmFyIHN2Z0NvbnRhaW5lcjtcblxuZnVuY3Rpb24gdXBkYXRlRE9NUHJvcHMgKG9sZFZub2RlLCB2bm9kZSkge1xuICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLmRvbVByb3BzKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEuZG9tUHJvcHMpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGtleSwgY3VyO1xuICB2YXIgZWxtID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkUHJvcHMgPSBvbGRWbm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xuICB2YXIgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xuICAvLyBjbG9uZSBvYnNlcnZlZCBvYmplY3RzLCBhcyB0aGUgdXNlciBwcm9iYWJseSB3YW50cyB0byBtdXRhdGUgaXRcbiAgaWYgKGlzRGVmKHByb3BzLl9fb2JfXykpIHtcbiAgICBwcm9wcyA9IHZub2RlLmRhdGEuZG9tUHJvcHMgPSBleHRlbmQoe30sIHByb3BzKTtcbiAgfVxuXG4gIGZvciAoa2V5IGluIG9sZFByb3BzKSB7XG4gICAgaWYgKCEoa2V5IGluIHByb3BzKSkge1xuICAgICAgZWxtW2tleV0gPSAnJztcbiAgICB9XG4gIH1cblxuICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgIGN1ciA9IHByb3BzW2tleV07XG4gICAgLy8gaWdub3JlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGhhcyB0ZXh0Q29udGVudCBvciBpbm5lckhUTUwsXG4gICAgLy8gYXMgdGhlc2Ugd2lsbCB0aHJvdyBhd2F5IGV4aXN0aW5nIERPTSBub2RlcyBhbmQgY2F1c2UgcmVtb3ZhbCBlcnJvcnNcbiAgICAvLyBvbiBzdWJzZXF1ZW50IHBhdGNoZXMgKCMzMzYwKVxuICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcgfHwga2V5ID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgaWYgKHZub2RlLmNoaWxkcmVuKSB7IHZub2RlLmNoaWxkcmVuLmxlbmd0aCA9IDA7IH1cbiAgICAgIGlmIChjdXIgPT09IG9sZFByb3BzW2tleV0pIHsgY29udGludWUgfVxuICAgICAgLy8gIzY2MDEgd29yayBhcm91bmQgQ2hyb21lIHZlcnNpb24gPD0gNTUgYnVnIHdoZXJlIHNpbmdsZSB0ZXh0Tm9kZVxuICAgICAgLy8gcmVwbGFjZWQgYnkgaW5uZXJIVE1ML3RleHRDb250ZW50IHJldGFpbnMgaXRzIHBhcmVudE5vZGUgcHJvcGVydHlcbiAgICAgIGlmIChlbG0uY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAndmFsdWUnICYmIGVsbS50YWdOYW1lICE9PSAnUFJPR1JFU1MnKSB7XG4gICAgICAvLyBzdG9yZSB2YWx1ZSBhcyBfdmFsdWUgYXMgd2VsbCBzaW5jZVxuICAgICAgLy8gbm9uLXN0cmluZyB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZFxuICAgICAgZWxtLl92YWx1ZSA9IGN1cjtcbiAgICAgIC8vIGF2b2lkIHJlc2V0dGluZyBjdXJzb3IgcG9zaXRpb24gd2hlbiB2YWx1ZSBpcyB0aGUgc2FtZVxuICAgICAgdmFyIHN0ckN1ciA9IGlzVW5kZWYoY3VyKSA/ICcnIDogU3RyaW5nKGN1cik7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlVmFsdWUoZWxtLCBzdHJDdXIpKSB7XG4gICAgICAgIGVsbS52YWx1ZSA9IHN0ckN1cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2lubmVySFRNTCcgJiYgaXNTVkcoZWxtLnRhZ05hbWUpICYmIGlzVW5kZWYoZWxtLmlubmVySFRNTCkpIHtcbiAgICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBpbm5lckhUTUwgZm9yIFNWRyBlbGVtZW50c1xuICAgICAgc3ZnQ29udGFpbmVyID0gc3ZnQ29udGFpbmVyIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3ZnQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPHN2Zz5cIiArIGN1ciArIFwiPC9zdmc+XCI7XG4gICAgICB2YXIgc3ZnID0gc3ZnQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoZWxtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChzdmcuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoc3ZnLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBza2lwIHRoZSB1cGRhdGUgaWYgb2xkIGFuZCBuZXcgVkRPTSBzdGF0ZSBpcyB0aGUgc2FtZS5cbiAgICAgIC8vIGB2YWx1ZWAgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5IGJlY2F1c2UgdGhlIERPTSB2YWx1ZSBtYXkgYmUgdGVtcG9yYXJpbHlcbiAgICAgIC8vIG91dCBvZiBzeW5jIHdpdGggVkRPTSBzdGF0ZSBkdWUgdG8gZm9jdXMsIGNvbXBvc2l0aW9uIGFuZCBtb2RpZmllcnMuXG4gICAgICAvLyBUaGlzICAjNDUyMSBieSBza2lwcGluZyB0aGUgdW5uZWNlc3NhcnkgYGNoZWNrZWRgIHVwZGF0ZS5cbiAgICAgIGN1ciAhPT0gb2xkUHJvcHNba2V5XVxuICAgICkge1xuICAgICAgLy8gc29tZSBwcm9wZXJ0eSB1cGRhdGVzIGNhbiB0aHJvd1xuICAgICAgLy8gZS5nLiBgdmFsdWVgIG9uIDxwcm9ncmVzcz4gdy8gbm9uLWZpbml0ZSB2YWx1ZVxuICAgICAgdHJ5IHtcbiAgICAgICAgZWxtW2tleV0gPSBjdXI7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxufVxuXG4vLyBjaGVjayBwbGF0Zm9ybXMvd2ViL3V0aWwvYXR0cnMuanMgYWNjZXB0VmFsdWVcblxuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVWYWx1ZSAoZWxtLCBjaGVja1ZhbCkge1xuICByZXR1cm4gKCFlbG0uY29tcG9zaW5nICYmIChcbiAgICBlbG0udGFnTmFtZSA9PT0gJ09QVElPTicgfHxcbiAgICBpc05vdEluRm9jdXNBbmREaXJ0eShlbG0sIGNoZWNrVmFsKSB8fFxuICAgIGlzRGlydHlXaXRoTW9kaWZpZXJzKGVsbSwgY2hlY2tWYWwpXG4gICkpXG59XG5cbmZ1bmN0aW9uIGlzTm90SW5Gb2N1c0FuZERpcnR5IChlbG0sIGNoZWNrVmFsKSB7XG4gIC8vIHJldHVybiB0cnVlIHdoZW4gdGV4dGJveCAoLm51bWJlciBhbmQgLnRyaW0pIGxvc2VzIGZvY3VzIGFuZCBpdHMgdmFsdWUgaXNcbiAgLy8gbm90IGVxdWFsIHRvIHRoZSB1cGRhdGVkIHZhbHVlXG4gIHZhciBub3RJbkZvY3VzID0gdHJ1ZTtcbiAgLy8gIzYxNTdcbiAgLy8gd29yayBhcm91bmQgSUUgYnVnIHdoZW4gYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW4gYW4gaWZyYW1lXG4gIHRyeSB7IG5vdEluRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbG07IH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiBub3RJbkZvY3VzICYmIGVsbS52YWx1ZSAhPT0gY2hlY2tWYWxcbn1cblxuZnVuY3Rpb24gaXNEaXJ0eVdpdGhNb2RpZmllcnMgKGVsbSwgbmV3VmFsKSB7XG4gIHZhciB2YWx1ZSA9IGVsbS52YWx1ZTtcbiAgdmFyIG1vZGlmaWVycyA9IGVsbS5fdk1vZGlmaWVyczsgLy8gaW5qZWN0ZWQgYnkgdi1tb2RlbCBydW50aW1lXG4gIGlmIChpc0RlZihtb2RpZmllcnMpKSB7XG4gICAgaWYgKG1vZGlmaWVycy5udW1iZXIpIHtcbiAgICAgIHJldHVybiB0b051bWJlcih2YWx1ZSkgIT09IHRvTnVtYmVyKG5ld1ZhbClcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVycy50cmltKSB7XG4gICAgICByZXR1cm4gdmFsdWUudHJpbSgpICE9PSBuZXdWYWwudHJpbSgpXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZSAhPT0gbmV3VmFsXG59XG5cbnZhciBkb21Qcm9wcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVET01Qcm9wcyxcbiAgdXBkYXRlOiB1cGRhdGVET01Qcm9wc1xufTtcblxuLyogICovXG5cbnZhciBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLy8gbWVyZ2Ugc3RhdGljIGFuZCBkeW5hbWljIHN0eWxlIGRhdGEgb24gdGhlIHNhbWUgdm5vZGVcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlRGF0YSAoZGF0YSkge1xuICB2YXIgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoZGF0YS5zdHlsZSk7XG4gIC8vIHN0YXRpYyBzdHlsZSBpcyBwcmUtcHJvY2Vzc2VkIGludG8gYW4gb2JqZWN0IGR1cmluZyBjb21waWxhdGlvblxuICAvLyBhbmQgaXMgYWx3YXlzIGEgZnJlc2ggb2JqZWN0LCBzbyBpdCdzIHNhZmUgdG8gbWVyZ2UgaW50byBpdFxuICByZXR1cm4gZGF0YS5zdGF0aWNTdHlsZVxuICAgID8gZXh0ZW5kKGRhdGEuc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgIDogc3R5bGVcbn1cblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICByZXR1cm4gYmluZGluZ1N0eWxlXG59XG5cbi8qKlxuICogcGFyZW50IGNvbXBvbmVudCBzdHlsZSBzaG91bGQgYmUgYWZ0ZXIgY2hpbGQnc1xuICogc28gdGhhdCBwYXJlbnQgY29tcG9uZW50J3Mgc3R5bGUgY291bGQgb3ZlcnJpZGUgaXRcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUgKHZub2RlLCBjaGVja0NoaWxkKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIHN0eWxlRGF0YTtcblxuICBpZiAoY2hlY2tDaGlsZCkge1xuICAgIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcbiAgICB3aGlsZSAoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEgJiZcbiAgICAgICAgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShjaGlsZE5vZGUuZGF0YSkpXG4gICAgICApIHtcbiAgICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YSh2bm9kZS5kYXRhKSkpIHtcbiAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICB9XG5cbiAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgd2hpbGUgKChwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHBhcmVudE5vZGUuZGF0YSAmJiAoc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVEYXRhKHBhcmVudE5vZGUuZGF0YSkpKSB7XG4gICAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgY3NzVmFyUkUgPSAvXi0tLztcbnZhciBpbXBvcnRhbnRSRSA9IC9cXHMqIWltcG9ydGFudCQvO1xudmFyIHNldFByb3AgPSBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGNzc1ZhclJFLnRlc3QobmFtZSkpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWwpO1xuICB9IGVsc2UgaWYgKGltcG9ydGFudFJFLnRlc3QodmFsKSkge1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGh5cGhlbmF0ZShuYW1lKSwgdmFsLnJlcGxhY2UoaW1wb3J0YW50UkUsICcnKSwgJ2ltcG9ydGFudCcpO1xuICB9IGVsc2Uge1xuICAgIHZhciBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZShuYW1lKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAvLyBTdXBwb3J0IHZhbHVlcyBhcnJheSBjcmVhdGVkIGJ5IGF1dG9wcmVmaXhlciwgZS5nLlxuICAgICAgLy8ge2Rpc3BsYXk6IFtcIi13ZWJraXQtYm94XCIsIFwiLW1zLWZsZXhib3hcIiwgXCJmbGV4XCJdfVxuICAgICAgLy8gU2V0IHRoZW0gb25lIGJ5IG9uZSwgYW5kIHRoZSBicm93c2VyIHdpbGwgb25seSBzZXQgdGhvc2UgaXQgY2FuIHJlY29nbml6ZVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWxbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlW25vcm1hbGl6ZWROYW1lXSA9IHZhbDtcbiAgICB9XG4gIH1cbn07XG5cbnZhciB2ZW5kb3JOYW1lcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xuXG52YXIgZW1wdHlTdHlsZTtcbnZhciBub3JtYWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHByb3ApIHtcbiAgZW1wdHlTdHlsZSA9IGVtcHR5U3R5bGUgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gIHByb3AgPSBjYW1lbGl6ZShwcm9wKTtcbiAgaWYgKHByb3AgIT09ICdmaWx0ZXInICYmIChwcm9wIGluIGVtcHR5U3R5bGUpKSB7XG4gICAgcmV0dXJuIHByb3BcbiAgfVxuICB2YXIgY2FwTmFtZSA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvck5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSB2ZW5kb3JOYW1lc1tpXSArIGNhcE5hbWU7XG4gICAgaWYgKG5hbWUgaW4gZW1wdHlTdHlsZSkge1xuICAgICAgcmV0dXJuIG5hbWVcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVTdHlsZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIG9sZERhdGEgPSBvbGRWbm9kZS5kYXRhO1xuXG4gIGlmIChpc1VuZGVmKGRhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYoZGF0YS5zdHlsZSkgJiZcbiAgICBpc1VuZGVmKG9sZERhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYob2xkRGF0YS5zdHlsZSlcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3VyLCBuYW1lO1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciBvbGRTdGF0aWNTdHlsZSA9IG9sZERhdGEuc3RhdGljU3R5bGU7XG4gIHZhciBvbGRTdHlsZUJpbmRpbmcgPSBvbGREYXRhLm5vcm1hbGl6ZWRTdHlsZSB8fCBvbGREYXRhLnN0eWxlIHx8IHt9O1xuXG4gIC8vIGlmIHN0YXRpYyBzdHlsZSBleGlzdHMsIHN0eWxlYmluZGluZyBhbHJlYWR5IG1lcmdlZCBpbnRvIGl0IHdoZW4gZG9pbmcgbm9ybWFsaXplU3R5bGVEYXRhXG4gIHZhciBvbGRTdHlsZSA9IG9sZFN0YXRpY1N0eWxlIHx8IG9sZFN0eWxlQmluZGluZztcblxuICB2YXIgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcodm5vZGUuZGF0YS5zdHlsZSkgfHwge307XG5cbiAgLy8gc3RvcmUgbm9ybWFsaXplZCBzdHlsZSB1bmRlciBhIGRpZmZlcmVudCBrZXkgZm9yIG5leHQgZGlmZlxuICAvLyBtYWtlIHN1cmUgdG8gY2xvbmUgaXQgaWYgaXQncyByZWFjdGl2ZSwgc2luY2UgdGhlIHVzZXIgbGlrZWx5IHdhbnRzXG4gIC8vIHRvIG11dGF0ZSBpdC5cbiAgdm5vZGUuZGF0YS5ub3JtYWxpemVkU3R5bGUgPSBpc0RlZihzdHlsZS5fX29iX18pXG4gICAgPyBleHRlbmQoe30sIHN0eWxlKVxuICAgIDogc3R5bGU7XG5cbiAgdmFyIG5ld1N0eWxlID0gZ2V0U3R5bGUodm5vZGUsIHRydWUpO1xuXG4gIGZvciAobmFtZSBpbiBvbGRTdHlsZSkge1xuICAgIGlmIChpc1VuZGVmKG5ld1N0eWxlW25hbWVdKSkge1xuICAgICAgc2V0UHJvcChlbCwgbmFtZSwgJycpO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gbmV3U3R5bGUpIHtcbiAgICBjdXIgPSBuZXdTdHlsZVtuYW1lXTtcbiAgICBpZiAoY3VyICE9PSBvbGRTdHlsZVtuYW1lXSkge1xuICAgICAgLy8gaWU5IHNldHRpbmcgdG8gbnVsbCBoYXMgbm8gZWZmZWN0LCBtdXN0IHVzZSBlbXB0eSBzdHJpbmdcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsIGN1ciA9PSBudWxsID8gJycgOiBjdXIpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc3R5bGUgPSB7XG4gIGNyZWF0ZTogdXBkYXRlU3R5bGUsXG4gIHVwZGF0ZTogdXBkYXRlU3R5bGVcbn07XG5cbi8qICAqL1xuXG52YXIgd2hpdGVzcGFjZVJFID0gL1xccysvO1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgfVxuICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgaWYgKGN1cikge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVUcmFuc2l0aW9uIChkZWYkJDEpIHtcbiAgaWYgKCFkZWYkJDEpIHtcbiAgICByZXR1cm5cbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgaWYgKGRlZiQkMS5jc3MgIT09IGZhbHNlKSB7XG4gICAgICBleHRlbmQocmVzLCBhdXRvQ3NzVHJhbnNpdGlvbihkZWYkJDEubmFtZSB8fCAndicpKTtcbiAgICB9XG4gICAgZXh0ZW5kKHJlcywgZGVmJCQxKTtcbiAgICByZXR1cm4gcmVzXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYXV0b0Nzc1RyYW5zaXRpb24oZGVmJCQxKVxuICB9XG59XG5cbnZhciBhdXRvQ3NzVHJhbnNpdGlvbiA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4ge1xuICAgIGVudGVyQ2xhc3M6IChuYW1lICsgXCItZW50ZXJcIiksXG4gICAgZW50ZXJUb0NsYXNzOiAobmFtZSArIFwiLWVudGVyLXRvXCIpLFxuICAgIGVudGVyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItZW50ZXItYWN0aXZlXCIpLFxuICAgIGxlYXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmVcIiksXG4gICAgbGVhdmVUb0NsYXNzOiAobmFtZSArIFwiLWxlYXZlLXRvXCIpLFxuICAgIGxlYXZlQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtYWN0aXZlXCIpXG4gIH1cbn0pO1xuXG52YXIgaGFzVHJhbnNpdGlvbiA9IGluQnJvd3NlciAmJiAhaXNJRTk7XG52YXIgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcbnZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xudmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbnZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcbmlmIChoYXNUcmFuc2l0aW9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAod2luZG93Lm9udHJhbnNpdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHRyYW5zaXRpb25Qcm9wID0gJ1dlYmtpdFRyYW5zaXRpb24nO1xuICAgIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uRW5kJztcbiAgfVxuICBpZiAod2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBhbmltYXRpb25Qcm9wID0gJ1dlYmtpdEFuaW1hdGlvbic7XG4gICAgYW5pbWF0aW9uRW5kRXZlbnQgPSAnd2Via2l0QW5pbWF0aW9uRW5kJztcbiAgfVxufVxuXG4vLyBiaW5kaW5nIHRvIHdpbmRvdyBpcyBuZWNlc3NhcnkgdG8gbWFrZSBob3QgcmVsb2FkIHdvcmsgaW4gSUUgaW4gc3RyaWN0IG1vZGVcbnZhciByYWYgPSBpbkJyb3dzZXJcbiAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIDogc2V0VGltZW91dFxuICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfTtcblxuZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xuICByYWYoZnVuY3Rpb24gKCkge1xuICAgIHJhZihmbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcbiAgdmFyIHRyYW5zaXRpb25DbGFzc2VzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzIHx8IChlbC5fdHJhbnNpdGlvbkNsYXNzZXMgPSBbXSk7XG4gIGlmICh0cmFuc2l0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XG4gICAgdHJhbnNpdGlvbkNsYXNzZXMucHVzaChjbHMpO1xuICAgIGFkZENsYXNzKGVsLCBjbHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25DbGFzcyAoZWwsIGNscykge1xuICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgcmVtb3ZlKGVsLl90cmFuc2l0aW9uQ2xhc3NlcywgY2xzKTtcbiAgfVxuICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbn1cblxuZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzIChcbiAgZWwsXG4gIGV4cGVjdGVkVHlwZSxcbiAgY2Jcbikge1xuICB2YXIgcmVmID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XG4gIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gIHZhciB0aW1lb3V0ID0gcmVmLnRpbWVvdXQ7XG4gIHZhciBwcm9wQ291bnQgPSByZWYucHJvcENvdW50O1xuICBpZiAoIXR5cGUpIHsgcmV0dXJuIGNiKCkgfVxuICB2YXIgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XG4gIHZhciBlbmRlZCA9IDA7XG4gIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xuICAgIGNiKCk7XG4gIH07XG4gIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH0sIHRpbWVvdXQgKyAxKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xufVxuXG52YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyAoZWwsIGV4cGVjdGVkVHlwZSkge1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAvLyBKU0RPTSBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gIHZhciB0cmFuc2l0aW9uRGVsYXlzID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbnMgPSAoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICB2YXIgYW5pbWF0aW9uRGVsYXlzID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0RlbGF5J10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgYW5pbWF0aW9uRHVyYXRpb25zID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgYW5pbWF0aW9uVGltZW91dCA9IGdldFRpbWVvdXQoYW5pbWF0aW9uRGVsYXlzLCBhbmltYXRpb25EdXJhdGlvbnMpO1xuXG4gIHZhciB0eXBlO1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHZhciBwcm9wQ291bnQgPSAwO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGV4cGVjdGVkVHlwZSA9PT0gVFJBTlNJVElPTikge1xuICAgIGlmICh0cmFuc2l0aW9uVGltZW91dCA+IDApIHtcbiAgICAgIHR5cGUgPSBUUkFOU0lUSU9OO1xuICAgICAgdGltZW91dCA9IHRyYW5zaXRpb25UaW1lb3V0O1xuICAgICAgcHJvcENvdW50ID0gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gQU5JTUFUSU9OKSB7XG4gICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICB0eXBlID0gQU5JTUFUSU9OO1xuICAgICAgdGltZW91dCA9IGFuaW1hdGlvblRpbWVvdXQ7XG4gICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aW1lb3V0ID0gTWF0aC5tYXgodHJhbnNpdGlvblRpbWVvdXQsIGFuaW1hdGlvblRpbWVvdXQpO1xuICAgIHR5cGUgPSB0aW1lb3V0ID4gMFxuICAgICAgPyB0cmFuc2l0aW9uVGltZW91dCA+IGFuaW1hdGlvblRpbWVvdXRcbiAgICAgICAgPyBUUkFOU0lUSU9OXG4gICAgICAgIDogQU5JTUFUSU9OXG4gICAgICA6IG51bGw7XG4gICAgcHJvcENvdW50ID0gdHlwZVxuICAgICAgPyB0eXBlID09PSBUUkFOU0lUSU9OXG4gICAgICAgID8gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGhcbiAgICAgICAgOiBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICA6IDA7XG4gIH1cbiAgdmFyIGhhc1RyYW5zZm9ybSA9XG4gICAgdHlwZSA9PT0gVFJBTlNJVElPTiAmJlxuICAgIHRyYW5zZm9ybVJFLnRlc3Qoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ1Byb3BlcnR5J10pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdGltZW91dDogdGltZW91dCxcbiAgICBwcm9wQ291bnQ6IHByb3BDb3VudCxcbiAgICBoYXNUcmFuc2Zvcm06IGhhc1RyYW5zZm9ybVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVvdXQgKGRlbGF5cywgZHVyYXRpb25zKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdoaWxlIChkZWxheXMubGVuZ3RoIDwgZHVyYXRpb25zLmxlbmd0aCkge1xuICAgIGRlbGF5cyA9IGRlbGF5cy5jb25jYXQoZGVsYXlzKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBkdXJhdGlvbnMubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgcmV0dXJuIHRvTXMoZCkgKyB0b01zKGRlbGF5c1tpXSlcbiAgfSkpXG59XG5cbi8vIE9sZCB2ZXJzaW9ucyBvZiBDaHJvbWl1bSAoYmVsb3cgNjEuMC4zMTYzLjEwMCkgZm9ybWF0cyBmbG9hdGluZyBwb2ludGVyIG51bWJlcnNcbi8vIGluIGEgbG9jYWxlLWRlcGVuZGVudCB3YXksIHVzaW5nIGEgY29tbWEgaW5zdGVhZCBvZiBhIGRvdC5cbi8vIElmIGNvbW1hIGlzIG5vdCByZXBsYWNlZCB3aXRoIGEgZG90LCB0aGUgaW5wdXQgd2lsbCBiZSByb3VuZGVkIGRvd24gKGkuZS4gYWN0aW5nXG4vLyBhcyBhIGZsb29yIGZ1bmN0aW9uKSBjYXVzaW5nIHVuZXhwZWN0ZWQgYmVoYXZpb3JzXG5mdW5jdGlvbiB0b01zIChzKSB7XG4gIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkucmVwbGFjZSgnLCcsICcuJykpICogMTAwMFxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW50ZXIgKHZub2RlLCB0b2dnbGVEaXNwbGF5KSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xuICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XG4gICAgZWwuX2xlYXZlQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBlbC5fbGVhdmVDYigpO1xuICB9XG5cbiAgdmFyIGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbih2bm9kZS5kYXRhLnRyYW5zaXRpb24pO1xuICBpZiAoaXNVbmRlZihkYXRhKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihlbC5fZW50ZXJDYikgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBjc3MgPSBkYXRhLmNzcztcbiAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XG4gIHZhciBlbnRlckNsYXNzID0gZGF0YS5lbnRlckNsYXNzO1xuICB2YXIgZW50ZXJUb0NsYXNzID0gZGF0YS5lbnRlclRvQ2xhc3M7XG4gIHZhciBlbnRlckFjdGl2ZUNsYXNzID0gZGF0YS5lbnRlckFjdGl2ZUNsYXNzO1xuICB2YXIgYXBwZWFyQ2xhc3MgPSBkYXRhLmFwcGVhckNsYXNzO1xuICB2YXIgYXBwZWFyVG9DbGFzcyA9IGRhdGEuYXBwZWFyVG9DbGFzcztcbiAgdmFyIGFwcGVhckFjdGl2ZUNsYXNzID0gZGF0YS5hcHBlYXJBY3RpdmVDbGFzcztcbiAgdmFyIGJlZm9yZUVudGVyID0gZGF0YS5iZWZvcmVFbnRlcjtcbiAgdmFyIGVudGVyID0gZGF0YS5lbnRlcjtcbiAgdmFyIGFmdGVyRW50ZXIgPSBkYXRhLmFmdGVyRW50ZXI7XG4gIHZhciBlbnRlckNhbmNlbGxlZCA9IGRhdGEuZW50ZXJDYW5jZWxsZWQ7XG4gIHZhciBiZWZvcmVBcHBlYXIgPSBkYXRhLmJlZm9yZUFwcGVhcjtcbiAgdmFyIGFwcGVhciA9IGRhdGEuYXBwZWFyO1xuICB2YXIgYWZ0ZXJBcHBlYXIgPSBkYXRhLmFmdGVyQXBwZWFyO1xuICB2YXIgYXBwZWFyQ2FuY2VsbGVkID0gZGF0YS5hcHBlYXJDYW5jZWxsZWQ7XG4gIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XG5cbiAgLy8gYWN0aXZlSW5zdGFuY2Ugd2lsbCBhbHdheXMgYmUgdGhlIDx0cmFuc2l0aW9uPiBjb21wb25lbnQgbWFuYWdpbmcgdGhpc1xuICAvLyB0cmFuc2l0aW9uLiBPbmUgZWRnZSBjYXNlIHRvIGNoZWNrIGlzIHdoZW4gdGhlIDx0cmFuc2l0aW9uPiBpcyBwbGFjZWRcbiAgLy8gYXMgdGhlIHJvb3Qgbm9kZSBvZiBhIGNoaWxkIGNvbXBvbmVudC4gSW4gdGhhdCBjYXNlIHdlIG5lZWQgdG8gY2hlY2tcbiAgLy8gPHRyYW5zaXRpb24+J3MgcGFyZW50IGZvciBhcHBlYXIgY2hlY2suXG4gIHZhciBjb250ZXh0ID0gYWN0aXZlSW5zdGFuY2U7XG4gIHZhciB0cmFuc2l0aW9uTm9kZSA9IGFjdGl2ZUluc3RhbmNlLiR2bm9kZTtcbiAgd2hpbGUgKHRyYW5zaXRpb25Ob2RlICYmIHRyYW5zaXRpb25Ob2RlLnBhcmVudCkge1xuICAgIGNvbnRleHQgPSB0cmFuc2l0aW9uTm9kZS5jb250ZXh0O1xuICAgIHRyYW5zaXRpb25Ob2RlID0gdHJhbnNpdGlvbk5vZGUucGFyZW50O1xuICB9XG5cbiAgdmFyIGlzQXBwZWFyID0gIWNvbnRleHQuX2lzTW91bnRlZCB8fCAhdm5vZGUuaXNSb290SW5zZXJ0O1xuXG4gIGlmIChpc0FwcGVhciAmJiAhYXBwZWFyICYmIGFwcGVhciAhPT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdGFydENsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQ2xhc3NcbiAgICA/IGFwcGVhckNsYXNzXG4gICAgOiBlbnRlckNsYXNzO1xuICB2YXIgYWN0aXZlQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJBY3RpdmVDbGFzc1xuICAgID8gYXBwZWFyQWN0aXZlQ2xhc3NcbiAgICA6IGVudGVyQWN0aXZlQ2xhc3M7XG4gIHZhciB0b0NsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyVG9DbGFzc1xuICAgID8gYXBwZWFyVG9DbGFzc1xuICAgIDogZW50ZXJUb0NsYXNzO1xuXG4gIHZhciBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgID8gKGJlZm9yZUFwcGVhciB8fCBiZWZvcmVFbnRlcilcbiAgICA6IGJlZm9yZUVudGVyO1xuICB2YXIgZW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/ICh0eXBlb2YgYXBwZWFyID09PSAnZnVuY3Rpb24nID8gYXBwZWFyIDogZW50ZXIpXG4gICAgOiBlbnRlcjtcbiAgdmFyIGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/IChhZnRlckFwcGVhciB8fCBhZnRlckVudGVyKVxuICAgIDogYWZ0ZXJFbnRlcjtcbiAgdmFyIGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyXG4gICAgPyAoYXBwZWFyQ2FuY2VsbGVkIHx8IGVudGVyQ2FuY2VsbGVkKVxuICAgIDogZW50ZXJDYW5jZWxsZWQ7XG5cbiAgdmFyIGV4cGxpY2l0RW50ZXJEdXJhdGlvbiA9IHRvTnVtYmVyKFxuICAgIGlzT2JqZWN0KGR1cmF0aW9uKVxuICAgICAgPyBkdXJhdGlvbi5lbnRlclxuICAgICAgOiBkdXJhdGlvblxuICApO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGV4cGxpY2l0RW50ZXJEdXJhdGlvbiAhPSBudWxsKSB7XG4gICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24sICdlbnRlcicsIHZub2RlKTtcbiAgfVxuXG4gIHZhciBleHBlY3RzQ1NTID0gY3NzICE9PSBmYWxzZSAmJiAhaXNJRTk7XG4gIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChlbnRlckhvb2spO1xuXG4gIHZhciBjYiA9IGVsLl9lbnRlckNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIH1cbiAgICAgIGVudGVyQ2FuY2VsbGVkSG9vayAmJiBlbnRlckNhbmNlbGxlZEhvb2soZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlckVudGVySG9vayAmJiBhZnRlckVudGVySG9vayhlbCk7XG4gICAgfVxuICAgIGVsLl9lbnRlckNiID0gbnVsbDtcbiAgfSk7XG5cbiAgaWYgKCF2bm9kZS5kYXRhLnNob3cpIHtcbiAgICAvLyByZW1vdmUgcGVuZGluZyBsZWF2ZSBlbGVtZW50IG9uIGVudGVyIGJ5IGluamVjdGluZyBhbiBpbnNlcnQgaG9va1xuICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAnaW5zZXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICB2YXIgcGVuZGluZ05vZGUgPSBwYXJlbnQgJiYgcGFyZW50Ll9wZW5kaW5nICYmIHBhcmVudC5fcGVuZGluZ1t2bm9kZS5rZXldO1xuICAgICAgaWYgKHBlbmRpbmdOb2RlICYmXG4gICAgICAgIHBlbmRpbmdOb2RlLnRhZyA9PT0gdm5vZGUudGFnICYmXG4gICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYlxuICAgICAgKSB7XG4gICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYigpO1xuICAgICAgfVxuICAgICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gc3RhcnQgZW50ZXIgdHJhbnNpdGlvblxuICBiZWZvcmVFbnRlckhvb2sgJiYgYmVmb3JlRW50ZXJIb29rKGVsKTtcbiAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCB0b0NsYXNzKTtcbiAgICAgICAgaWYgKCF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24pKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdEVudGVyRHVyYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICh2bm9kZS5kYXRhLnNob3cpIHtcbiAgICB0b2dnbGVEaXNwbGF5ICYmIHRvZ2dsZURpc3BsYXkoKTtcbiAgICBlbnRlckhvb2sgJiYgZW50ZXJIb29rKGVsLCBjYik7XG4gIH1cblxuICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICBjYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxlYXZlICh2bm9kZSwgcm0pIHtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuXG4gIC8vIGNhbGwgZW50ZXIgY2FsbGJhY2sgbm93XG4gIGlmIChpc0RlZihlbC5fZW50ZXJDYikpIHtcbiAgICBlbC5fZW50ZXJDYi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgIGVsLl9lbnRlckNiKCk7XG4gIH1cblxuICB2YXIgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKHZub2RlLmRhdGEudHJhbnNpdGlvbik7XG4gIGlmIChpc1VuZGVmKGRhdGEpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIHJtKClcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICB2YXIgbGVhdmVDbGFzcyA9IGRhdGEubGVhdmVDbGFzcztcbiAgdmFyIGxlYXZlVG9DbGFzcyA9IGRhdGEubGVhdmVUb0NsYXNzO1xuICB2YXIgbGVhdmVBY3RpdmVDbGFzcyA9IGRhdGEubGVhdmVBY3RpdmVDbGFzcztcbiAgdmFyIGJlZm9yZUxlYXZlID0gZGF0YS5iZWZvcmVMZWF2ZTtcbiAgdmFyIGxlYXZlID0gZGF0YS5sZWF2ZTtcbiAgdmFyIGFmdGVyTGVhdmUgPSBkYXRhLmFmdGVyTGVhdmU7XG4gIHZhciBsZWF2ZUNhbmNlbGxlZCA9IGRhdGEubGVhdmVDYW5jZWxsZWQ7XG4gIHZhciBkZWxheUxlYXZlID0gZGF0YS5kZWxheUxlYXZlO1xuICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuXG4gIHZhciBleHBlY3RzQ1NTID0gY3NzICE9PSBmYWxzZSAmJiAhaXNJRTk7XG4gIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChsZWF2ZSk7XG5cbiAgdmFyIGV4cGxpY2l0TGVhdmVEdXJhdGlvbiA9IHRvTnVtYmVyKFxuICAgIGlzT2JqZWN0KGR1cmF0aW9uKVxuICAgICAgPyBkdXJhdGlvbi5sZWF2ZVxuICAgICAgOiBkdXJhdGlvblxuICApO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGV4cGxpY2l0TGVhdmVEdXJhdGlvbikpIHtcbiAgICBjaGVja0R1cmF0aW9uKGV4cGxpY2l0TGVhdmVEdXJhdGlvbiwgJ2xlYXZlJywgdm5vZGUpO1xuICB9XG5cbiAgdmFyIGNiID0gZWwuX2xlYXZlQ2IgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLl9wZW5kaW5nKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLl9wZW5kaW5nW3Zub2RlLmtleV0gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGxlYXZlQ2FuY2VsbGVkICYmIGxlYXZlQ2FuY2VsbGVkKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm0oKTtcbiAgICAgIGFmdGVyTGVhdmUgJiYgYWZ0ZXJMZWF2ZShlbCk7XG4gICAgfVxuICAgIGVsLl9sZWF2ZUNiID0gbnVsbDtcbiAgfSk7XG5cbiAgaWYgKGRlbGF5TGVhdmUpIHtcbiAgICBkZWxheUxlYXZlKHBlcmZvcm1MZWF2ZSk7XG4gIH0gZWxzZSB7XG4gICAgcGVyZm9ybUxlYXZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtTGVhdmUgKCkge1xuICAgIC8vIHRoZSBkZWxheWVkIGxlYXZlIG1heSBoYXZlIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gcmVjb3JkIGxlYXZpbmcgZWxlbWVudFxuICAgIGlmICghdm5vZGUuZGF0YS5zaG93ICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIChlbC5wYXJlbnROb2RlLl9wZW5kaW5nIHx8IChlbC5wYXJlbnROb2RlLl9wZW5kaW5nID0ge30pKVsodm5vZGUua2V5KV0gPSB2bm9kZTtcbiAgICB9XG4gICAgYmVmb3JlTGVhdmUgJiYgYmVmb3JlTGVhdmUoZWwpO1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0TGVhdmVEdXJhdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZWF2ZSAmJiBsZWF2ZShlbCwgY2IpO1xuICAgIGlmICghZXhwZWN0c0NTUyAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gb25seSB1c2VkIGluIGRldiBtb2RlXG5mdW5jdGlvbiBjaGVja0R1cmF0aW9uICh2YWwsIG5hbWUsIHZub2RlKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykge1xuICAgIHdhcm4oXG4gICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBub3QgYSB2YWxpZCBudW1iZXIgLSBcIiArXG4gICAgICBcImdvdCBcIiArIChKU09OLnN0cmluZ2lmeSh2YWwpKSArIFwiLlwiLFxuICAgICAgdm5vZGUuY29udGV4dFxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNOYU4odmFsKSkge1xuICAgIHdhcm4oXG4gICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBOYU4gLSBcIiArXG4gICAgICAndGhlIGR1cmF0aW9uIGV4cHJlc3Npb24gbWlnaHQgYmUgaW5jb3JyZWN0LicsXG4gICAgICB2bm9kZS5jb250ZXh0XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24gKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbClcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB0cmFuc2l0aW9uIGhvb2sncyBhcmd1bWVudCBsZW5ndGguIFRoZSBob29rIG1heSBiZTpcbiAqIC0gYSBtZXJnZWQgaG9vayAoaW52b2tlcikgd2l0aCB0aGUgb3JpZ2luYWwgaW4gLmZuc1xuICogLSBhIHdyYXBwZWQgY29tcG9uZW50IG1ldGhvZCAoY2hlY2sgLl9sZW5ndGgpXG4gKiAtIGEgcGxhaW4gZnVuY3Rpb24gKC5sZW5ndGgpXG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tBcmd1bWVudHNMZW5ndGggKGZuKSB7XG4gIGlmIChpc1VuZGVmKGZuKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHZhciBpbnZva2VyRm5zID0gZm4uZm5zO1xuICBpZiAoaXNEZWYoaW52b2tlckZucykpIHtcbiAgICAvLyBpbnZva2VyXG4gICAgcmV0dXJuIGdldEhvb2tBcmd1bWVudHNMZW5ndGgoXG4gICAgICBBcnJheS5pc0FycmF5KGludm9rZXJGbnMpXG4gICAgICAgID8gaW52b2tlckZuc1swXVxuICAgICAgICA6IGludm9rZXJGbnNcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmbi5fbGVuZ3RoIHx8IGZuLmxlbmd0aCkgPiAxXG4gIH1cbn1cblxuZnVuY3Rpb24gX2VudGVyIChfLCB2bm9kZSkge1xuICBpZiAodm5vZGUuZGF0YS5zaG93ICE9PSB0cnVlKSB7XG4gICAgZW50ZXIodm5vZGUpO1xuICB9XG59XG5cbnZhciB0cmFuc2l0aW9uID0gaW5Ccm93c2VyID8ge1xuICBjcmVhdGU6IF9lbnRlcixcbiAgYWN0aXZhdGU6IF9lbnRlcixcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUkJDEgKHZub2RlLCBybSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHZub2RlLmRhdGEuc2hvdyAhPT0gdHJ1ZSkge1xuICAgICAgbGVhdmUodm5vZGUsIHJtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm0oKTtcbiAgICB9XG4gIH1cbn0gOiB7fTtcblxudmFyIHBsYXRmb3JtTW9kdWxlcyA9IFtcbiAgYXR0cnMsXG4gIGtsYXNzLFxuICBldmVudHMsXG4gIGRvbVByb3BzLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvblxuXTtcblxuLyogICovXG5cbi8vIHRoZSBkaXJlY3RpdmUgbW9kdWxlIHNob3VsZCBiZSBhcHBsaWVkIGxhc3QsIGFmdGVyIGFsbFxuLy8gYnVpbHQtaW4gbW9kdWxlcyBoYXZlIGJlZW4gYXBwbGllZC5cbnZhciBtb2R1bGVzID0gcGxhdGZvcm1Nb2R1bGVzLmNvbmNhdChiYXNlTW9kdWxlcyk7XG5cbnZhciBwYXRjaCA9IGNyZWF0ZVBhdGNoRnVuY3Rpb24oeyBub2RlT3BzOiBub2RlT3BzLCBtb2R1bGVzOiBtb2R1bGVzIH0pO1xuXG4vKipcbiAqIE5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBsaWtlIGF0dGFjaGluZ1xuICogcHJvcGVydGllcyB0byBFbGVtZW50cy5cbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmIChpc0lFOSkge1xuICAvLyBodHRwOi8vd3d3Lm1hdHRzNDExLmNvbS9wb3N0L2ludGVybmV0LWV4cGxvcmVyLTktb25pbnB1dC9cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGVsICYmIGVsLnZtb2RlbCkge1xuICAgICAgdHJpZ2dlcihlbCwgJ2lucHV0Jyk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGRpcmVjdGl2ZSA9IHtcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIGluc2VydGVkIChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIC8vICM2OTAzXG4gICAgICBpZiAob2xkVm5vZGUuZWxtICYmICFvbGRWbm9kZS5lbG0uX3ZPcHRpb25zKSB7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpcmVjdGl2ZS5jb21wb25lbnRVcGRhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgfVxuICAgICAgZWwuX3ZPcHRpb25zID0gW10ubWFwLmNhbGwoZWwub3B0aW9ucywgZ2V0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodm5vZGUudGFnID09PSAndGV4dGFyZWEnIHx8IGlzVGV4dElucHV0VHlwZShlbC50eXBlKSkge1xuICAgICAgZWwuX3ZNb2RpZmllcnMgPSBiaW5kaW5nLm1vZGlmaWVycztcbiAgICAgIGlmICghYmluZGluZy5tb2RpZmllcnMubGF6eSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0Jywgb25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgLy8gU2FmYXJpIDwgMTAuMiAmIFVJV2ViVmlldyBkb2Vzbid0IGZpcmUgY29tcG9zaXRpb25lbmQgd2hlblxuICAgICAgICAvLyBzd2l0Y2hpbmcgZm9jdXMgYmVmb3JlIGNvbmZpcm1pbmcgY29tcG9zaXRpb24gY2hvaWNlXG4gICAgICAgIC8vIHRoaXMgYWxzbyBmaXhlcyB0aGUgaXNzdWUgd2hlcmUgc29tZSBicm93c2VycyBlLmcuIGlPUyBDaHJvbWVcbiAgICAgICAgLy8gZmlyZXMgXCJjaGFuZ2VcIiBpbnN0ZWFkIG9mIFwiaW5wdXRcIiBvbiBhdXRvY29tcGxldGUuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGlzSUU5KSB7XG4gICAgICAgICAgZWwudm1vZGVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbiBjb21wb25lbnRVcGRhdGVkIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpZiAodm5vZGUudGFnID09PSAnc2VsZWN0Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgLy8gaW4gY2FzZSB0aGUgb3B0aW9ucyByZW5kZXJlZCBieSB2LWZvciBoYXZlIGNoYW5nZWQsXG4gICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHZhbHVlIGlzIG91dC1vZi1zeW5jIHdpdGggdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gICAgICAvLyBkZXRlY3Qgc3VjaCBjYXNlcyBhbmQgZmlsdGVyIG91dCB2YWx1ZXMgdGhhdCBubyBsb25nZXIgaGFzIGEgbWF0Y2hpbmdcbiAgICAgIC8vIG9wdGlvbiBpbiB0aGUgRE9NLlxuICAgICAgdmFyIHByZXZPcHRpb25zID0gZWwuX3ZPcHRpb25zO1xuICAgICAgdmFyIGN1ck9wdGlvbnMgPSBlbC5fdk9wdGlvbnMgPSBbXS5tYXAuY2FsbChlbC5vcHRpb25zLCBnZXRWYWx1ZSk7XG4gICAgICBpZiAoY3VyT3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvLCBpKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCBwcmV2T3B0aW9uc1tpXSk7IH0pKSB7XG4gICAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50IGlmXG4gICAgICAgIC8vIG5vIG1hdGNoaW5nIG9wdGlvbiBmb3VuZCBmb3IgYXQgbGVhc3Qgb25lIHZhbHVlXG4gICAgICAgIHZhciBuZWVkUmVzZXQgPSBlbC5tdWx0aXBsZVxuICAgICAgICAgID8gYmluZGluZy52YWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7IHJldHVybiBoYXNOb01hdGNoaW5nT3B0aW9uKHYsIGN1ck9wdGlvbnMpOyB9KVxuICAgICAgICAgIDogYmluZGluZy52YWx1ZSAhPT0gYmluZGluZy5vbGRWYWx1ZSAmJiBoYXNOb01hdGNoaW5nT3B0aW9uKGJpbmRpbmcudmFsdWUsIGN1ck9wdGlvbnMpO1xuICAgICAgICBpZiAobmVlZFJlc2V0KSB7XG4gICAgICAgICAgdHJpZ2dlcihlbCwgJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBzZXRTZWxlY3RlZCAoZWwsIGJpbmRpbmcsIHZtKSB7XG4gIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0lFIHx8IGlzRWRnZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYWN0dWFsbHlTZXRTZWxlY3RlZChlbCwgYmluZGluZywgdm0pO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjdHVhbGx5U2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICB2YXIgdmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICB2YXIgaXNNdWx0aXBsZSA9IGVsLm11bHRpcGxlO1xuICBpZiAoaXNNdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIjxzZWxlY3QgbXVsdGlwbGUgdi1tb2RlbD1cXFwiXCIgKyAoYmluZGluZy5leHByZXNzaW9uKSArIFwiXFxcIj4gXCIgK1xuICAgICAgXCJleHBlY3RzIGFuIEFycmF5IHZhbHVlIGZvciBpdHMgYmluZGluZywgYnV0IGdvdCBcIiArIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSksXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHNlbGVjdGVkLCBvcHRpb247XG4gIGZvciAodmFyIGkgPSAwLCBsID0gZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvcHRpb24gPSBlbC5vcHRpb25zW2ldO1xuICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICBzZWxlY3RlZCA9IGxvb3NlSW5kZXhPZih2YWx1ZSwgZ2V0VmFsdWUob3B0aW9uKSkgPiAtMTtcbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgIT09IHNlbGVjdGVkKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobG9vc2VFcXVhbChnZXRWYWx1ZShvcHRpb24pLCB2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGVsLnNlbGVjdGVkSW5kZXggIT09IGkpIHtcbiAgICAgICAgICBlbC5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFpc011bHRpcGxlKSB7XG4gICAgZWwuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc05vTWF0Y2hpbmdPcHRpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChvKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCB2YWx1ZSk7IH0pXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlIChvcHRpb24pIHtcbiAgcmV0dXJuICdfdmFsdWUnIGluIG9wdGlvblxuICAgID8gb3B0aW9uLl92YWx1ZVxuICAgIDogb3B0aW9uLnZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uQ29tcG9zaXRpb25TdGFydCAoZSkge1xuICBlLnRhcmdldC5jb21wb3NpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kIChlKSB7XG4gIC8vIHByZXZlbnQgdHJpZ2dlcmluZyBhbiBpbnB1dCBldmVudCBmb3Igbm8gcmVhc29uXG4gIGlmICghZS50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybiB9XG4gIGUudGFyZ2V0LmNvbXBvc2luZyA9IGZhbHNlO1xuICB0cmlnZ2VyKGUudGFyZ2V0LCAnaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlciAoZWwsIHR5cGUpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICBlLmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKTtcbiAgZWwuZGlzcGF0Y2hFdmVudChlKTtcbn1cblxuLyogICovXG5cbi8vIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgcG9zc2libGUgdHJhbnNpdGlvbiBkZWZpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IHJvb3RcbmZ1bmN0aW9uIGxvY2F0ZU5vZGUgKHZub2RlKSB7XG4gIHJldHVybiB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJiAoIXZub2RlLmRhdGEgfHwgIXZub2RlLmRhdGEudHJhbnNpdGlvbilcbiAgICA/IGxvY2F0ZU5vZGUodm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKVxuICAgIDogdm5vZGVcbn1cblxudmFyIHNob3cgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQgKGVsLCByZWYsIHZub2RlKSB7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICB2YXIgdHJhbnNpdGlvbiQkMSA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgIHZhciBvcmlnaW5hbERpc3BsYXkgPSBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgPVxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJycgOiBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIGlmICh2YWx1ZSAmJiB0cmFuc2l0aW9uJCQxKSB7XG4gICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IG9yaWdpbmFsRGlzcGxheTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBvcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChlbCwgcmVmLCB2bm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcbiAgICB2YXIgb2xkVmFsdWUgPSByZWYub2xkVmFsdWU7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXZhbHVlID09PSAhb2xkVmFsdWUpIHsgcmV0dXJuIH1cbiAgICB2bm9kZSA9IGxvY2F0ZU5vZGUodm5vZGUpO1xuICAgIHZhciB0cmFuc2l0aW9uJCQxID0gdm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLnRyYW5zaXRpb247XG4gICAgaWYgKHRyYW5zaXRpb24kJDEpIHtcbiAgICAgIHZub2RlLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlYXZlKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/IGVsLl9fdk9yaWdpbmFsRGlzcGxheSA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQgKFxuICAgIGVsLFxuICAgIGJpbmRpbmcsXG4gICAgdm5vZGUsXG4gICAgb2xkVm5vZGUsXG4gICAgaXNEZXN0cm95XG4gICkge1xuICAgIGlmICghaXNEZXN0cm95KSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgIH1cbiAgfVxufTtcblxudmFyIHBsYXRmb3JtRGlyZWN0aXZlcyA9IHtcbiAgbW9kZWw6IGRpcmVjdGl2ZSxcbiAgc2hvdzogc2hvd1xufTtcblxuLyogICovXG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSB7XG4gIG5hbWU6IFN0cmluZyxcbiAgYXBwZWFyOiBCb29sZWFuLFxuICBjc3M6IEJvb2xlYW4sXG4gIG1vZGU6IFN0cmluZyxcbiAgdHlwZTogU3RyaW5nLFxuICBlbnRlckNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQ2xhc3M6IFN0cmluZyxcbiAgZW50ZXJUb0NsYXNzOiBTdHJpbmcsXG4gIGxlYXZlVG9DbGFzczogU3RyaW5nLFxuICBlbnRlckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyVG9DbGFzczogU3RyaW5nLFxuICBkdXJhdGlvbjogW051bWJlciwgU3RyaW5nLCBPYmplY3RdXG59O1xuXG4vLyBpbiBjYXNlIHRoZSBjaGlsZCBpcyBhbHNvIGFuIGFic3RyYWN0IGNvbXBvbmVudCwgZS5nLiA8a2VlcC1hbGl2ZT5cbi8vIHdlIHdhbnQgdG8gcmVjdXJzaXZlbHkgcmV0cmlldmUgdGhlIHJlYWwgY29tcG9uZW50IHRvIGJlIHJlbmRlcmVkXG5mdW5jdGlvbiBnZXRSZWFsQ2hpbGQgKHZub2RlKSB7XG4gIHZhciBjb21wT3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIGlmIChjb21wT3B0aW9ucyAmJiBjb21wT3B0aW9ucy5DdG9yLm9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICByZXR1cm4gZ2V0UmVhbENoaWxkKGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoY29tcE9wdGlvbnMuY2hpbGRyZW4pKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUcmFuc2l0aW9uRGF0YSAoY29tcCkge1xuICB2YXIgZGF0YSA9IHt9O1xuICB2YXIgb3B0aW9ucyA9IGNvbXAuJG9wdGlvbnM7XG4gIC8vIHByb3BzXG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLnByb3BzRGF0YSkge1xuICAgIGRhdGFba2V5XSA9IGNvbXBba2V5XTtcbiAgfVxuICAvLyBldmVudHMuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzIGFuZCBwYXNzIHRoZW0gZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24gbWV0aG9kc1xuICB2YXIgbGlzdGVuZXJzID0gb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBmb3IgKHZhciBrZXkkMSBpbiBsaXN0ZW5lcnMpIHtcbiAgICBkYXRhW2NhbWVsaXplKGtleSQxKV0gPSBsaXN0ZW5lcnNba2V5JDFdO1xuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbmZ1bmN0aW9uIHBsYWNlaG9sZGVyIChoLCByYXdDaGlsZCkge1xuICBpZiAoL1xcZC1rZWVwLWFsaXZlJC8udGVzdChyYXdDaGlsZC50YWcpKSB7XG4gICAgcmV0dXJuIGgoJ2tlZXAtYWxpdmUnLCB7XG4gICAgICBwcm9wczogcmF3Q2hpbGQuY29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGFcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhc1BhcmVudFRyYW5zaXRpb24gKHZub2RlKSB7XG4gIHdoaWxlICgodm5vZGUgPSB2bm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHZub2RlLmRhdGEudHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTYW1lQ2hpbGQgKGNoaWxkLCBvbGRDaGlsZCkge1xuICByZXR1cm4gb2xkQ2hpbGQua2V5ID09PSBjaGlsZC5rZXkgJiYgb2xkQ2hpbGQudGFnID09PSBjaGlsZC50YWdcbn1cblxudmFyIGlzTm90VGV4dE5vZGUgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50YWcgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpOyB9O1xuXG52YXIgaXNWU2hvd0RpcmVjdGl2ZSA9IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09ICdzaG93JzsgfTtcblxudmFyIFRyYW5zaXRpb24gPSB7XG4gIG5hbWU6ICd0cmFuc2l0aW9uJyxcbiAgcHJvcHM6IHRyYW5zaXRpb25Qcm9wcyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIG91dCB0ZXh0IG5vZGVzIChwb3NzaWJsZSB3aGl0ZXNwYWNlcylcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihpc05vdFRleHROb2RlKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2FybiBtdWx0aXBsZSBlbGVtZW50c1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICc8dHJhbnNpdGlvbj4gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIHNpbmdsZSBlbGVtZW50LiBVc2UgJyArXG4gICAgICAgICc8dHJhbnNpdGlvbi1ncm91cD4gZm9yIGxpc3RzLicsXG4gICAgICAgIHRoaXMuJHBhcmVudFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgbW9kZSA9IHRoaXMubW9kZTtcblxuICAgIC8vIHdhcm4gaW52YWxpZCBtb2RlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIG1vZGUgJiYgbW9kZSAhPT0gJ2luLW91dCcgJiYgbW9kZSAhPT0gJ291dC1pbidcbiAgICApIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdpbnZhbGlkIDx0cmFuc2l0aW9uPiBtb2RlOiAnICsgbW9kZSxcbiAgICAgICAgdGhpcy4kcGFyZW50XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciByYXdDaGlsZCA9IGNoaWxkcmVuWzBdO1xuXG4gICAgLy8gaWYgdGhpcyBpcyBhIGNvbXBvbmVudCByb290IG5vZGUgYW5kIHRoZSBjb21wb25lbnQnc1xuICAgIC8vIHBhcmVudCBjb250YWluZXIgbm9kZSBhbHNvIGhhcyB0cmFuc2l0aW9uLCBza2lwLlxuICAgIGlmIChoYXNQYXJlbnRUcmFuc2l0aW9uKHRoaXMuJHZub2RlKSkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgLy8gYXBwbHkgdHJhbnNpdGlvbiBkYXRhIHRvIGNoaWxkXG4gICAgLy8gdXNlIGdldFJlYWxDaGlsZCgpIHRvIGlnbm9yZSBhYnN0cmFjdCBjb21wb25lbnRzIGUuZy4ga2VlcC1hbGl2ZVxuICAgIHZhciBjaGlsZCA9IGdldFJlYWxDaGlsZChyYXdDaGlsZCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xlYXZpbmcpIHtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgYSBrZXkgdGhhdCBpcyB1bmlxdWUgdG8gdGhlIHZub2RlIHR5cGUgYW5kIHRvIHRoaXMgdHJhbnNpdGlvblxuICAgIC8vIGNvbXBvbmVudCBpbnN0YW5jZS4gVGhpcyBrZXkgd2lsbCBiZSB1c2VkIHRvIHJlbW92ZSBwZW5kaW5nIGxlYXZpbmcgbm9kZXNcbiAgICAvLyBkdXJpbmcgZW50ZXJpbmcuXG4gICAgdmFyIGlkID0gXCJfX3RyYW5zaXRpb24tXCIgKyAodGhpcy5fdWlkKSArIFwiLVwiO1xuICAgIGNoaWxkLmtleSA9IGNoaWxkLmtleSA9PSBudWxsXG4gICAgICA/IGNoaWxkLmlzQ29tbWVudFxuICAgICAgICA/IGlkICsgJ2NvbW1lbnQnXG4gICAgICAgIDogaWQgKyBjaGlsZC50YWdcbiAgICAgIDogaXNQcmltaXRpdmUoY2hpbGQua2V5KVxuICAgICAgICA/IChTdHJpbmcoY2hpbGQua2V5KS5pbmRleE9mKGlkKSA9PT0gMCA/IGNoaWxkLmtleSA6IGlkICsgY2hpbGQua2V5KVxuICAgICAgICA6IGNoaWxkLmtleTtcblxuICAgIHZhciBkYXRhID0gKGNoaWxkLmRhdGEgfHwgKGNoaWxkLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG4gICAgdmFyIG9sZFJhd0NoaWxkID0gdGhpcy5fdm5vZGU7XG4gICAgdmFyIG9sZENoaWxkID0gZ2V0UmVhbENoaWxkKG9sZFJhd0NoaWxkKTtcblxuICAgIC8vIG1hcmsgdi1zaG93XG4gICAgLy8gc28gdGhhdCB0aGUgdHJhbnNpdGlvbiBtb2R1bGUgY2FuIGhhbmQgb3ZlciB0aGUgY29udHJvbCB0byB0aGUgZGlyZWN0aXZlXG4gICAgaWYgKGNoaWxkLmRhdGEuZGlyZWN0aXZlcyAmJiBjaGlsZC5kYXRhLmRpcmVjdGl2ZXMuc29tZShpc1ZTaG93RGlyZWN0aXZlKSkge1xuICAgICAgY2hpbGQuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvbGRDaGlsZCAmJlxuICAgICAgb2xkQ2hpbGQuZGF0YSAmJlxuICAgICAgIWlzU2FtZUNoaWxkKGNoaWxkLCBvbGRDaGlsZCkgJiZcbiAgICAgICFpc0FzeW5jUGxhY2Vob2xkZXIob2xkQ2hpbGQpICYmXG4gICAgICAvLyAjNjY4NyBjb21wb25lbnQgcm9vdCBpcyBhIGNvbW1lbnQgbm9kZVxuICAgICAgIShvbGRDaGlsZC5jb21wb25lbnRJbnN0YW5jZSAmJiBvbGRDaGlsZC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUuaXNDb21tZW50KVxuICAgICkge1xuICAgICAgLy8gcmVwbGFjZSBvbGQgY2hpbGQgdHJhbnNpdGlvbiBkYXRhIHdpdGggZnJlc2ggb25lXG4gICAgICAvLyBpbXBvcnRhbnQgZm9yIGR5bmFtaWMgdHJhbnNpdGlvbnMhXG4gICAgICB2YXIgb2xkRGF0YSA9IG9sZENoaWxkLmRhdGEudHJhbnNpdGlvbiA9IGV4dGVuZCh7fSwgZGF0YSk7XG4gICAgICAvLyBoYW5kbGUgdHJhbnNpdGlvbiBtb2RlXG4gICAgICBpZiAobW9kZSA9PT0gJ291dC1pbicpIHtcbiAgICAgICAgLy8gcmV0dXJuIHBsYWNlaG9sZGVyIG5vZGUgYW5kIHF1ZXVlIHVwZGF0ZSB3aGVuIGxlYXZlIGZpbmlzaGVzXG4gICAgICAgIHRoaXMuX2xlYXZpbmcgPSB0cnVlO1xuICAgICAgICBtZXJnZVZOb2RlSG9vayhvbGREYXRhLCAnYWZ0ZXJMZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzJDEuX2xlYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzJDEuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdpbi1vdXQnKSB7XG4gICAgICAgIGlmIChpc0FzeW5jUGxhY2Vob2xkZXIoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIG9sZFJhd0NoaWxkXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGF5ZWRMZWF2ZTtcbiAgICAgICAgdmFyIHBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uICgpIHsgZGVsYXllZExlYXZlKCk7IH07XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdhZnRlckVudGVyJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2soZGF0YSwgJ2VudGVyQ2FuY2VsbGVkJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2RlbGF5TGVhdmUnLCBmdW5jdGlvbiAobGVhdmUpIHsgZGVsYXllZExlYXZlID0gbGVhdmU7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByYXdDaGlsZFxuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHByb3BzID0gZXh0ZW5kKHtcbiAgdGFnOiBTdHJpbmcsXG4gIG1vdmVDbGFzczogU3RyaW5nXG59LCB0cmFuc2l0aW9uUHJvcHMpO1xuXG5kZWxldGUgcHJvcHMubW9kZTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IHtcbiAgcHJvcHM6IHByb3BzLFxuXG4gIGJlZm9yZU1vdW50OiBmdW5jdGlvbiBiZWZvcmVNb3VudCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdXBkYXRlID0gdGhpcy5fdXBkYXRlO1xuICAgIHRoaXMuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2UodGhpcyQxKTtcbiAgICAgIC8vIGZvcmNlIHJlbW92aW5nIHBhc3NcbiAgICAgIHRoaXMkMS5fX3BhdGNoX18oXG4gICAgICAgIHRoaXMkMS5fdm5vZGUsXG4gICAgICAgIHRoaXMkMS5rZXB0LFxuICAgICAgICBmYWxzZSwgLy8gaHlkcmF0aW5nXG4gICAgICAgIHRydWUgLy8gcmVtb3ZlT25seSAoIWltcG9ydGFudCwgYXZvaWRzIHVubmVjZXNzYXJ5IG1vdmVzKVxuICAgICAgKTtcbiAgICAgIHRoaXMkMS5fdm5vZGUgPSB0aGlzJDEua2VwdDtcbiAgICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgICAgdXBkYXRlLmNhbGwodGhpcyQxLCB2bm9kZSwgaHlkcmF0aW5nKTtcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRhZyA9IHRoaXMudGFnIHx8IHRoaXMuJHZub2RlLmRhdGEudGFnIHx8ICdzcGFuJztcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgcHJldkNoaWxkcmVuID0gdGhpcy5wcmV2Q2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgIHZhciByYXdDaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW107XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHZhciB0cmFuc2l0aW9uRGF0YSA9IGV4dHJhY3RUcmFuc2l0aW9uRGF0YSh0aGlzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gcmF3Q2hpbGRyZW5baV07XG4gICAgICBpZiAoYy50YWcpIHtcbiAgICAgICAgaWYgKGMua2V5ICE9IG51bGwgJiYgU3RyaW5nKGMua2V5KS5pbmRleE9mKCdfX3ZsaXN0JykgIT09IDApIHtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKGMpO1xuICAgICAgICAgIG1hcFtjLmtleV0gPSBjXG4gICAgICAgICAgOyhjLmRhdGEgfHwgKGMuZGF0YSA9IHt9KSkudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB2YXIgb3B0cyA9IGMuY29tcG9uZW50T3B0aW9ucztcbiAgICAgICAgICB2YXIgbmFtZSA9IG9wdHMgPyAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZyB8fCAnJykgOiBjLnRhZztcbiAgICAgICAgICB3YXJuKChcIjx0cmFuc2l0aW9uLWdyb3VwPiBjaGlsZHJlbiBtdXN0IGJlIGtleWVkOiA8XCIgKyBuYW1lICsgXCI+XCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2Q2hpbGRyZW4pIHtcbiAgICAgIHZhciBrZXB0ID0gW107XG4gICAgICB2YXIgcmVtb3ZlZCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcHJldkNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgdmFyIGMkMSA9IHByZXZDaGlsZHJlbltpJDFdO1xuICAgICAgICBjJDEuZGF0YS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbkRhdGE7XG4gICAgICAgIGMkMS5kYXRhLnBvcyA9IGMkMS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChtYXBbYyQxLmtleV0pIHtcbiAgICAgICAgICBrZXB0LnB1c2goYyQxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVkLnB1c2goYyQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5rZXB0ID0gaCh0YWcsIG51bGwsIGtlcHQpO1xuICAgICAgdGhpcy5yZW1vdmVkID0gcmVtb3ZlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIG51bGwsIGNoaWxkcmVuKVxuICB9LFxuXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uIHVwZGF0ZWQgKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuO1xuICAgIHZhciBtb3ZlQ2xhc3MgPSB0aGlzLm1vdmVDbGFzcyB8fCAoKHRoaXMubmFtZSB8fCAndicpICsgJy1tb3ZlJyk7XG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGggfHwgIXRoaXMuaGFzTW92ZShjaGlsZHJlblswXS5lbG0sIG1vdmVDbGFzcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdlIGRpdmlkZSB0aGUgd29yayBpbnRvIHRocmVlIGxvb3BzIHRvIGF2b2lkIG1peGluZyBET00gcmVhZHMgYW5kIHdyaXRlc1xuICAgIC8vIGluIGVhY2ggaXRlcmF0aW9uIC0gd2hpY2ggaGVscHMgcHJldmVudCBsYXlvdXQgdGhyYXNoaW5nLlxuICAgIGNoaWxkcmVuLmZvckVhY2goY2FsbFBlbmRpbmdDYnMpO1xuICAgIGNoaWxkcmVuLmZvckVhY2gocmVjb3JkUG9zaXRpb24pO1xuICAgIGNoaWxkcmVuLmZvckVhY2goYXBwbHlUcmFuc2xhdGlvbik7XG5cbiAgICAvLyBmb3JjZSByZWZsb3cgdG8gcHV0IGV2ZXJ5dGhpbmcgaW4gcG9zaXRpb25cbiAgICAvLyBhc3NpZ24gdG8gdGhpcyB0byBhdm9pZCBiZWluZyByZW1vdmVkIGluIHRyZWUtc2hha2luZ1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHRoaXMuX3JlZmxvdyA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgaWYgKGMuZGF0YS5tb3ZlZCkge1xuICAgICAgICB2YXIgZWwgPSBjLmVsbTtcbiAgICAgICAgdmFyIHMgPSBlbC5zdHlsZTtcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xuICAgICAgICBzLnRyYW5zZm9ybSA9IHMuV2Via2l0VHJhbnNmb3JtID0gcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIGVsLl9tb3ZlQ2IgPSBmdW5jdGlvbiBjYiAoZSkge1xuICAgICAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBlbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZSB8fCAvdHJhbnNmb3JtJC8udGVzdChlLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBjYik7XG4gICAgICAgICAgICBlbC5fbW92ZUNiID0gbnVsbDtcbiAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYXNNb3ZlOiBmdW5jdGlvbiBoYXNNb3ZlIChlbCwgbW92ZUNsYXNzKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFzVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHRoaXMuX2hhc01vdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc01vdmVcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCB3aGV0aGVyIGFuIGVsZW1lbnQgd2l0aCB0aGUgbW92ZSBjbGFzcyBhcHBsaWVkIGhhc1xuICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zLiBTaW5jZSB0aGUgZWxlbWVudCBtYXkgYmUgaW5zaWRlIGFuIGVudGVyaW5nXG4gICAgICAvLyB0cmFuc2l0aW9uIGF0IHRoaXMgdmVyeSBtb21lbnQsIHdlIG1ha2UgYSBjbG9uZSBvZiBpdCBhbmQgcmVtb3ZlXG4gICAgICAvLyBhbGwgb3RoZXIgdHJhbnNpdGlvbiBjbGFzc2VzIGFwcGxpZWQgdG8gZW5zdXJlIG9ubHkgdGhlIG1vdmUgY2xhc3NcbiAgICAgIC8vIGlzIGFwcGxpZWQuXG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUoKTtcbiAgICAgIGlmIChlbC5fdHJhbnNpdGlvbkNsYXNzZXMpIHtcbiAgICAgICAgZWwuX3RyYW5zaXRpb25DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNscykgeyByZW1vdmVDbGFzcyhjbG9uZSwgY2xzKTsgfSk7XG4gICAgICB9XG4gICAgICBhZGRDbGFzcyhjbG9uZSwgbW92ZUNsYXNzKTtcbiAgICAgIGNsb25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLiRlbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB2YXIgaW5mbyA9IGdldFRyYW5zaXRpb25JbmZvKGNsb25lKTtcbiAgICAgIHRoaXMuJGVsLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgIHJldHVybiAodGhpcy5faGFzTW92ZSA9IGluZm8uaGFzVHJhbnNmb3JtKVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gY2FsbFBlbmRpbmdDYnMgKGMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjLmVsbS5fbW92ZUNiKSB7XG4gICAgYy5lbG0uX21vdmVDYigpO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoYy5lbG0uX2VudGVyQ2IpIHtcbiAgICBjLmVsbS5fZW50ZXJDYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY29yZFBvc2l0aW9uIChjKSB7XG4gIGMuZGF0YS5uZXdQb3MgPSBjLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn1cblxuZnVuY3Rpb24gYXBwbHlUcmFuc2xhdGlvbiAoYykge1xuICB2YXIgb2xkUG9zID0gYy5kYXRhLnBvcztcbiAgdmFyIG5ld1BvcyA9IGMuZGF0YS5uZXdQb3M7XG4gIHZhciBkeCA9IG9sZFBvcy5sZWZ0IC0gbmV3UG9zLmxlZnQ7XG4gIHZhciBkeSA9IG9sZFBvcy50b3AgLSBuZXdQb3MudG9wO1xuICBpZiAoZHggfHwgZHkpIHtcbiAgICBjLmRhdGEubW92ZWQgPSB0cnVlO1xuICAgIHZhciBzID0gYy5lbG0uc3R5bGU7XG4gICAgcy50cmFuc2Zvcm0gPSBzLldlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgZHggKyBcInB4LFwiICsgZHkgKyBcInB4KVwiO1xuICAgIHMudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcbiAgfVxufVxuXG52YXIgcGxhdGZvcm1Db21wb25lbnRzID0ge1xuICBUcmFuc2l0aW9uOiBUcmFuc2l0aW9uLFxuICBUcmFuc2l0aW9uR3JvdXA6IFRyYW5zaXRpb25Hcm91cFxufTtcblxuLyogICovXG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gc3BlY2lmaWMgdXRpbHNcblZ1ZS5jb25maWcubXVzdFVzZVByb3AgPSBtdXN0VXNlUHJvcDtcblZ1ZS5jb25maWcuaXNSZXNlcnZlZFRhZyA9IGlzUmVzZXJ2ZWRUYWc7XG5WdWUuY29uZmlnLmlzUmVzZXJ2ZWRBdHRyID0gaXNSZXNlcnZlZEF0dHI7XG5WdWUuY29uZmlnLmdldFRhZ05hbWVzcGFjZSA9IGdldFRhZ05hbWVzcGFjZTtcblZ1ZS5jb25maWcuaXNVbmtub3duRWxlbWVudCA9IGlzVW5rbm93bkVsZW1lbnQ7XG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcnVudGltZSBkaXJlY3RpdmVzICYgY29tcG9uZW50c1xuZXh0ZW5kKFZ1ZS5vcHRpb25zLmRpcmVjdGl2ZXMsIHBsYXRmb3JtRGlyZWN0aXZlcyk7XG5leHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgcGxhdGZvcm1Db21wb25lbnRzKTtcblxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBwYXRjaCBmdW5jdGlvblxuVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gPSBpbkJyb3dzZXIgPyBwYXRjaCA6IG5vb3A7XG5cbi8vIHB1YmxpYyBtb3VudCBtZXRob2RcblZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24gKFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgZWwgPSBlbCAmJiBpbkJyb3dzZXIgPyBxdWVyeShlbCkgOiB1bmRlZmluZWQ7XG4gIHJldHVybiBtb3VudENvbXBvbmVudCh0aGlzLCBlbCwgaHlkcmF0aW5nKVxufTtcblxuLy8gZGV2dG9vbHMgZ2xvYmFsIGhvb2tcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoaW5Ccm93c2VyKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb25maWcuZGV2dG9vbHMpIHtcbiAgICAgIGlmIChkZXZ0b29scykge1xuICAgICAgICBkZXZ0b29scy5lbWl0KCdpbml0JywgVnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0J1xuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGVbY29uc29sZS5pbmZvID8gJ2luZm8nIDogJ2xvZyddKFxuICAgICAgICAgICdEb3dubG9hZCB0aGUgVnVlIERldnRvb2xzIGV4dGVuc2lvbiBmb3IgYSBiZXR0ZXIgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZTpcXG4nICtcbiAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1kZXZ0b29scydcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgIGNvbmZpZy5wcm9kdWN0aW9uVGlwICE9PSBmYWxzZSAmJlxuICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnXG4gICAgKSB7XG4gICAgICBjb25zb2xlW2NvbnNvbGUuaW5mbyA/ICdpbmZvJyA6ICdsb2cnXShcbiAgICAgICAgXCJZb3UgYXJlIHJ1bm5pbmcgVnVlIGluIGRldmVsb3BtZW50IG1vZGUuXFxuXCIgK1xuICAgICAgICBcIk1ha2Ugc3VyZSB0byB0dXJuIG9uIHByb2R1Y3Rpb24gbW9kZSB3aGVuIGRlcGxveWluZyBmb3IgcHJvZHVjdGlvbi5cXG5cIiArXG4gICAgICAgIFwiU2VlIG1vcmUgdGlwcyBhdCBodHRwczovL3Z1ZWpzLm9yZy9ndWlkZS9kZXBsb3ltZW50Lmh0bWxcIlxuICAgICAgKTtcbiAgICB9XG4gIH0sIDApO1xufVxuXG4vKiAgKi9cblxuZXhwb3J0IGRlZmF1bHQgVnVlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmNmZjYzJlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcY2xlYW4tcHJvamVjdFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NzJjZmY2MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NzJjZmY2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NzJjZmY2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzJjZmY2MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NzJjZmY2MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3MmNmZjYzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkdoYmR0ZmdkZmdzZFwiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlO1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICByZW5kZXI6IGggPT4gaChBcHApXHJcbn0pLiRtb3VudCgnI2FwcCcpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJlbXB0eU9iamVjdCIsIk9iamVjdCIsImZyZWV6ZSIsImlzVW5kZWYiLCJ2IiwidW5kZWZpbmVkIiwiaXNEZWYiLCJpc1RydWUiLCJpc0ZhbHNlIiwiaXNQcmltaXRpdmUiLCJ2YWx1ZSIsImlzT2JqZWN0Iiwib2JqIiwiX3RvU3RyaW5nIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJ0b1Jhd1R5cGUiLCJjYWxsIiwic2xpY2UiLCJpc1BsYWluT2JqZWN0IiwiaXNSZWdFeHAiLCJpc1ZhbGlkQXJyYXlJbmRleCIsInZhbCIsIm4iLCJwYXJzZUZsb2F0IiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwiaXNGaW5pdGUiLCJpc1Byb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJBcnJheSIsImlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9OdW1iZXIiLCJpc05hTiIsIm1ha2VNYXAiLCJzdHIiLCJleHBlY3RzTG93ZXJDYXNlIiwibWFwIiwiY3JlYXRlIiwibGlzdCIsInNwbGl0IiwiaSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiaXNCdWlsdEluVGFnIiwiaXNSZXNlcnZlZEF0dHJpYnV0ZSIsInJlbW92ZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsImtleSIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwicG9seWZpbGxCaW5kIiwiY3R4IiwiYm91bmRGbiIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbGVuZ3RoIiwibmF0aXZlQmluZCIsImJpbmQiLCJGdW5jdGlvbiIsInRvQXJyYXkiLCJzdGFydCIsInJldCIsImV4dGVuZCIsInRvIiwiX2Zyb20iLCJ0b09iamVjdCIsInJlcyIsIm5vb3AiLCJiIiwibm8iLCJpZGVudGl0eSIsImxvb3NlRXF1YWwiLCJpc09iamVjdEEiLCJpc09iamVjdEIiLCJpc0FycmF5QSIsImlzQXJyYXlCIiwiZXZlcnkiLCJlIiwiRGF0ZSIsImdldFRpbWUiLCJrZXlzQSIsImtleXMiLCJrZXlzQiIsImxvb3NlSW5kZXhPZiIsIm9uY2UiLCJjYWxsZWQiLCJTU1JfQVRUUiIsIkFTU0VUX1RZUEVTIiwiTElGRUNZQ0xFX0hPT0tTIiwiY29uZmlnIiwib3B0aW9uTWVyZ2VTdHJhdGVnaWVzIiwic2lsZW50IiwicHJvZHVjdGlvblRpcCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImRldnRvb2xzIiwicGVyZm9ybWFuY2UiLCJlcnJvckhhbmRsZXIiLCJ3YXJuSGFuZGxlciIsImlnbm9yZWRFbGVtZW50cyIsImtleUNvZGVzIiwiaXNSZXNlcnZlZFRhZyIsImlzUmVzZXJ2ZWRBdHRyIiwiaXNVbmtub3duRWxlbWVudCIsImdldFRhZ05hbWVzcGFjZSIsInBhcnNlUGxhdGZvcm1UYWdOYW1lIiwibXVzdFVzZVByb3AiLCJhc3luYyIsIl9saWZlY3ljbGVIb29rcyIsInVuaWNvZGVSZWdFeHAiLCJpc1Jlc2VydmVkIiwiY2hhckNvZGVBdCIsImRlZiIsImVudW1lcmFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiYmFpbFJFIiwiUmVnRXhwIiwic291cmNlIiwicGFyc2VQYXRoIiwicGF0aCIsInRlc3QiLCJzZWdtZW50cyIsImhhc1Byb3RvIiwiaW5Ccm93c2VyIiwid2luZG93IiwiaW5XZWV4IiwiV1hFbnZpcm9ubWVudCIsInBsYXRmb3JtIiwid2VleFBsYXRmb3JtIiwiVUEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpc0lFIiwiaXNJRTkiLCJpc0VkZ2UiLCJpc0FuZHJvaWQiLCJpc0lPUyIsImlzQ2hyb21lIiwiaXNQaGFudG9tSlMiLCJpc0ZGIiwibWF0Y2giLCJuYXRpdmVXYXRjaCIsIndhdGNoIiwic3VwcG9ydHNQYXNzaXZlIiwib3B0cyIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaXNTZXJ2ZXIiLCJpc1NlcnZlclJlbmRlcmluZyIsImdsb2JhbCIsIlZVRV9FTlYiLCJfX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiaXNOYXRpdmUiLCJDdG9yIiwiaGFzU3ltYm9sIiwiU3ltYm9sIiwiUmVmbGVjdCIsIm93bktleXMiLCJfU2V0IiwiU2V0Iiwic2V0IiwiaGFzIiwiYWRkIiwiY2xlYXIiLCJ3YXJuIiwidGlwIiwiZ2VuZXJhdGVDb21wb25lbnRUcmFjZSIsImZvcm1hdENvbXBvbmVudE5hbWUiLCJoYXNDb25zb2xlIiwiY29uc29sZSIsImNsYXNzaWZ5UkUiLCJjbGFzc2lmeSIsIm1zZyIsInZtIiwidHJhY2UiLCJlcnJvciIsImluY2x1ZGVGaWxlIiwiJHJvb3QiLCJvcHRpb25zIiwiY2lkIiwiX2lzVnVlIiwiJG9wdGlvbnMiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJfY29tcG9uZW50VGFnIiwiZmlsZSIsIl9fZmlsZSIsInJlcGVhdCIsIiRwYXJlbnQiLCJ0cmVlIiwiY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlIiwibGFzdCIsInB1c2giLCJqb2luIiwidWlkIiwiRGVwIiwiaWQiLCJzdWJzIiwiYWRkU3ViIiwic3ViIiwicmVtb3ZlU3ViIiwiZGVwZW5kIiwidGFyZ2V0IiwiYWRkRGVwIiwibm90aWZ5Iiwic29ydCIsInVwZGF0ZSIsInRhcmdldFN0YWNrIiwicHVzaFRhcmdldCIsInBvcFRhcmdldCIsInBvcCIsIlZOb2RlIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwidGV4dCIsImVsbSIsImNvbnRleHQiLCJjb21wb25lbnRPcHRpb25zIiwiYXN5bmNGYWN0b3J5IiwibnMiLCJmbkNvbnRleHQiLCJmbk9wdGlvbnMiLCJmblNjb3BlSWQiLCJjb21wb25lbnRJbnN0YW5jZSIsInBhcmVudCIsInJhdyIsImlzU3RhdGljIiwiaXNSb290SW5zZXJ0IiwiaXNDb21tZW50IiwiaXNDbG9uZWQiLCJpc09uY2UiLCJhc3luY01ldGEiLCJpc0FzeW5jUGxhY2Vob2xkZXIiLCJwcm90b3R5cGVBY2Nlc3NvcnMiLCJjaGlsZCIsImRlZmluZVByb3BlcnRpZXMiLCJjcmVhdGVFbXB0eVZOb2RlIiwibm9kZSIsImNyZWF0ZVRleHRWTm9kZSIsImNsb25lVk5vZGUiLCJ2bm9kZSIsImNsb25lZCIsImFycmF5UHJvdG8iLCJhcnJheU1ldGhvZHMiLCJtZXRob2RzVG9QYXRjaCIsImZvckVhY2giLCJtZXRob2QiLCJvcmlnaW5hbCIsIm11dGF0b3IiLCJhcmdzIiwibGVuIiwicmVzdWx0Iiwib2IiLCJfX29iX18iLCJpbnNlcnRlZCIsIm9ic2VydmVBcnJheSIsImRlcCIsImFycmF5S2V5cyIsImdldE93blByb3BlcnR5TmFtZXMiLCJzaG91bGRPYnNlcnZlIiwidG9nZ2xlT2JzZXJ2aW5nIiwiT2JzZXJ2ZXIiLCJ2bUNvdW50IiwicHJvdG9BdWdtZW50IiwiY29weUF1Z21lbnQiLCJ3YWxrIiwiZGVmaW5lUmVhY3RpdmUkJDEiLCJpdGVtcyIsIm9ic2VydmUiLCJzcmMiLCJfX3Byb3RvX18iLCJhc1Jvb3REYXRhIiwiaXNFeHRlbnNpYmxlIiwiY3VzdG9tU2V0dGVyIiwic2hhbGxvdyIsInByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwiY2hpbGRPYiIsInJlYWN0aXZlR2V0dGVyIiwiZGVwZW5kQXJyYXkiLCJyZWFjdGl2ZVNldHRlciIsIm5ld1ZhbCIsIm1heCIsImRlbCIsInN0cmF0cyIsImVsIiwicHJvcHNEYXRhIiwiZGVmYXVsdFN0cmF0IiwibWVyZ2VEYXRhIiwiZnJvbSIsInRvVmFsIiwiZnJvbVZhbCIsIm1lcmdlRGF0YU9yRm4iLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsIm1lcmdlZERhdGFGbiIsIm1lcmdlZEluc3RhbmNlRGF0YUZuIiwiaW5zdGFuY2VEYXRhIiwiZGVmYXVsdERhdGEiLCJtZXJnZUhvb2siLCJjb25jYXQiLCJkZWR1cGVIb29rcyIsImhvb2tzIiwiaG9vayIsIm1lcmdlQXNzZXRzIiwiYXNzZXJ0T2JqZWN0VHlwZSIsInR5cGUiLCJrZXkkMSIsInByb3BzIiwibWV0aG9kcyIsImluamVjdCIsImNvbXB1dGVkIiwicHJvdmlkZSIsImNoZWNrQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJ2YWxpZGF0ZUNvbXBvbmVudE5hbWUiLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZUluamVjdCIsIm5vcm1hbGl6ZWQiLCJub3JtYWxpemVEaXJlY3RpdmVzIiwiZGlycyIsImRpcmVjdGl2ZXMiLCJkZWYkJDEiLCJtZXJnZU9wdGlvbnMiLCJfYmFzZSIsImV4dGVuZHMiLCJtaXhpbnMiLCJtZXJnZUZpZWxkIiwic3RyYXQiLCJyZXNvbHZlQXNzZXQiLCJ3YXJuTWlzc2luZyIsImFzc2V0cyIsImNhbWVsaXplZElkIiwiUGFzY2FsQ2FzZUlkIiwidmFsaWRhdGVQcm9wIiwicHJvcE9wdGlvbnMiLCJwcm9wIiwiYWJzZW50IiwiYm9vbGVhbkluZGV4IiwiZ2V0VHlwZUluZGV4IiwiQm9vbGVhbiIsInN0cmluZ0luZGV4IiwiZ2V0UHJvcERlZmF1bHRWYWx1ZSIsInByZXZTaG91bGRPYnNlcnZlIiwiYXNzZXJ0UHJvcCIsImRlZmF1bHQiLCJfcHJvcHMiLCJnZXRUeXBlIiwicmVxdWlyZWQiLCJ2YWxpZCIsImV4cGVjdGVkVHlwZXMiLCJhc3NlcnRlZFR5cGUiLCJhc3NlcnRUeXBlIiwiZXhwZWN0ZWRUeXBlIiwiaGF2ZUV4cGVjdGVkVHlwZXMiLCJzb21lIiwidCIsImdldEludmFsaWRUeXBlTWVzc2FnZSIsInZhbGlkYXRvciIsInNpbXBsZUNoZWNrUkUiLCJmdW5jdGlvblR5cGVDaGVja1JFIiwiaXNTYW1lVHlwZSIsIm1lc3NhZ2UiLCJyZWNlaXZlZFR5cGUiLCJpc0V4cGxpY2FibGUiLCJpc0Jvb2xlYW4iLCJzdHlsZVZhbHVlIiwiTnVtYmVyIiwiRVhQTElDQUJMRV9UWVBFUyIsImVsZW0iLCJoYW5kbGVFcnJvciIsImVyciIsImluZm8iLCJjdXIiLCJlcnJvckNhcHR1cmVkIiwiY2FwdHVyZSIsImdsb2JhbEhhbmRsZUVycm9yIiwiaW52b2tlV2l0aEVycm9ySGFuZGxpbmciLCJoYW5kbGVyIiwiX2hhbmRsZWQiLCJsb2dFcnJvciIsImlzVXNpbmdNaWNyb1Rhc2siLCJjYWxsYmFja3MiLCJwZW5kaW5nIiwiZmx1c2hDYWxsYmFja3MiLCJjb3BpZXMiLCJ0aW1lckZ1bmMiLCJQcm9taXNlIiwicCIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiTXV0YXRpb25PYnNlcnZlciIsImNvdW50ZXIiLCJvYnNlcnZlciIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYXJhY3RlckRhdGEiLCJzZXRJbW1lZGlhdGUiLCJuZXh0VGljayIsImNiIiwiX3Jlc29sdmUiLCJpbml0UHJveHkiLCJhbGxvd2VkR2xvYmFscyIsIndhcm5Ob25QcmVzZW50Iiwid2FyblJlc2VydmVkUHJlZml4IiwiaGFzUHJveHkiLCJQcm94eSIsImlzQnVpbHRJbk1vZGlmaWVyIiwiaGFzSGFuZGxlciIsImlzQWxsb3dlZCIsIiRkYXRhIiwiZ2V0SGFuZGxlciIsImhhbmRsZXJzIiwicmVuZGVyIiwiX3dpdGhTdHJpcHBlZCIsIl9yZW5kZXJQcm94eSIsInNlZW5PYmplY3RzIiwidHJhdmVyc2UiLCJfdHJhdmVyc2UiLCJzZWVuIiwiaXNBIiwiaXNGcm96ZW4iLCJkZXBJZCIsIm1hcmsiLCJtZWFzdXJlIiwicGVyZiIsImNsZWFyTWFya3MiLCJjbGVhck1lYXN1cmVzIiwic3RhcnRUYWciLCJlbmRUYWciLCJub3JtYWxpemVFdmVudCIsInBhc3NpdmUiLCJvbmNlJCQxIiwiY3JlYXRlRm5JbnZva2VyIiwiZm5zIiwiaW52b2tlciIsImFyZ3VtZW50cyQxIiwidXBkYXRlTGlzdGVuZXJzIiwib24iLCJvbGRPbiIsInJlbW92ZSQkMSIsImNyZWF0ZU9uY2VIYW5kbGVyIiwib2xkIiwiZXZlbnQiLCJwYXJhbXMiLCJtZXJnZVZOb2RlSG9vayIsImhvb2tLZXkiLCJvbGRIb29rIiwid3JhcHBlZEhvb2siLCJtZXJnZWQiLCJleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIiwiYXR0cnMiLCJhbHRLZXkiLCJrZXlJbkxvd2VyQ2FzZSIsImNoZWNrUHJvcCIsImhhc2giLCJwcmVzZXJ2ZSIsInNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIiwibm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVBcnJheUNoaWxkcmVuIiwiaXNUZXh0Tm9kZSIsIm5lc3RlZEluZGV4IiwibGFzdEluZGV4Iiwic2hpZnQiLCJfaXNWTGlzdCIsImluaXRQcm92aWRlIiwiX3Byb3ZpZGVkIiwiaW5pdEluamVjdGlvbnMiLCJyZXNvbHZlSW5qZWN0IiwicHJvdmlkZUtleSIsInByb3ZpZGVEZWZhdWx0IiwicmVzb2x2ZVNsb3RzIiwic2xvdHMiLCJzbG90IiwibmFtZSQxIiwiaXNXaGl0ZXNwYWNlIiwibm9ybWFsaXplU2NvcGVkU2xvdHMiLCJub3JtYWxTbG90cyIsInByZXZTbG90cyIsImhhc05vcm1hbFNsb3RzIiwiaXNTdGFibGUiLCIkc3RhYmxlIiwiJGtleSIsIl9ub3JtYWxpemVkIiwiJGhhc05vcm1hbCIsIm5vcm1hbGl6ZVNjb3BlZFNsb3QiLCJrZXkkMiIsInByb3h5Tm9ybWFsU2xvdCIsInByb3h5IiwicmVuZGVyTGlzdCIsIml0ZXJhdG9yIiwibmV4dCIsImRvbmUiLCJyZW5kZXJTbG90IiwiZmFsbGJhY2tSZW5kZXIiLCJiaW5kT2JqZWN0Iiwic2NvcGVkU2xvdEZuIiwiJHNjb3BlZFNsb3RzIiwibm9kZXMiLCIkc2xvdHMiLCIkY3JlYXRlRWxlbWVudCIsInJlc29sdmVGaWx0ZXIiLCJpc0tleU5vdE1hdGNoIiwiZXhwZWN0IiwiYWN0dWFsIiwiY2hlY2tLZXlDb2RlcyIsImV2ZW50S2V5Q29kZSIsImJ1aWx0SW5LZXlDb2RlIiwiZXZlbnRLZXlOYW1lIiwiYnVpbHRJbktleU5hbWUiLCJtYXBwZWRLZXlDb2RlIiwiYmluZE9iamVjdFByb3BzIiwiYXNQcm9wIiwiaXNTeW5jIiwibG9vcCIsImRvbVByb3BzIiwiY2FtZWxpemVkS2V5IiwiaHlwaGVuYXRlZEtleSIsIiRldmVudCIsInJlbmRlclN0YXRpYyIsImlzSW5Gb3IiLCJfc3RhdGljVHJlZXMiLCJzdGF0aWNSZW5kZXJGbnMiLCJtYXJrU3RhdGljIiwibWFya09uY2UiLCJtYXJrU3RhdGljTm9kZSIsImJpbmRPYmplY3RMaXN0ZW5lcnMiLCJleGlzdGluZyIsIm91cnMiLCJyZXNvbHZlU2NvcGVkU2xvdHMiLCJoYXNEeW5hbWljS2V5cyIsImNvbnRlbnRIYXNoS2V5IiwiYmluZER5bmFtaWNLZXlzIiwiYmFzZU9iaiIsInZhbHVlcyIsInByZXBlbmRNb2RpZmllciIsInN5bWJvbCIsImluc3RhbGxSZW5kZXJIZWxwZXJzIiwiX28iLCJfbiIsIl9zIiwiX2wiLCJfdCIsIl9xIiwiX2kiLCJfbSIsIl9mIiwiX2siLCJfYiIsIl92IiwiX2UiLCJfdSIsIl9nIiwiX2QiLCJfcCIsIkZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IiwidGhpcyQxIiwiY29udGV4dFZtIiwiX29yaWdpbmFsIiwiaXNDb21waWxlZCIsIl9jb21waWxlZCIsIm5lZWROb3JtYWxpemF0aW9uIiwibGlzdGVuZXJzIiwiaW5qZWN0aW9ucyIsInNjb3BlZFNsb3RzIiwiX3Njb3BlSWQiLCJfYyIsImQiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCIsIm1lcmdlUHJvcHMiLCJyZW5kZXJDb250ZXh0IiwiY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCIsInZub2RlcyIsImNsb25lIiwiZGV2dG9vbHNNZXRhIiwiY29tcG9uZW50Vk5vZGVIb29rcyIsImluaXQiLCJoeWRyYXRpbmciLCJfaXNEZXN0cm95ZWQiLCJrZWVwQWxpdmUiLCJtb3VudGVkTm9kZSIsInByZXBhdGNoIiwiY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSIsImFjdGl2ZUluc3RhbmNlIiwiJG1vdW50Iiwib2xkVm5vZGUiLCJ1cGRhdGVDaGlsZENvbXBvbmVudCIsImluc2VydCIsIl9pc01vdW50ZWQiLCJjYWxsSG9vayIsInF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50IiwiYWN0aXZhdGVDaGlsZENvbXBvbmVudCIsImRlc3Ryb3kiLCIkZGVzdHJveSIsImRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCIsImhvb2tzVG9NZXJnZSIsImNyZWF0ZUNvbXBvbmVudCIsImJhc2VDdG9yIiwicmVzb2x2ZUFzeW5jQ29tcG9uZW50IiwiY3JlYXRlQXN5bmNQbGFjZWhvbGRlciIsInJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMiLCJtb2RlbCIsInRyYW5zZm9ybU1vZGVsIiwiZnVuY3Rpb25hbCIsIm5hdGl2ZU9uIiwiYWJzdHJhY3QiLCJpbnN0YWxsQ29tcG9uZW50SG9va3MiLCJfaXNDb21wb25lbnQiLCJfcGFyZW50Vm5vZGUiLCJpbmxpbmVUZW1wbGF0ZSIsInRvTWVyZ2UiLCJfbWVyZ2VkIiwibWVyZ2VIb29rJDEiLCJmMSIsImYyIiwiY2FsbGJhY2siLCJTSU1QTEVfTk9STUFMSVpFIiwiQUxXQVlTX05PUk1BTElaRSIsIm5vcm1hbGl6YXRpb25UeXBlIiwiYWx3YXlzTm9ybWFsaXplIiwiX2NyZWF0ZUVsZW1lbnQiLCJpcyIsIiR2bm9kZSIsInByZSIsImFwcGx5TlMiLCJyZWdpc3RlckRlZXBCaW5kaW5ncyIsImZvcmNlIiwic3R5bGUiLCJjbGFzcyIsImluaXRSZW5kZXIiLCJfdm5vZGUiLCJwYXJlbnRWbm9kZSIsIl9yZW5kZXJDaGlsZHJlbiIsInBhcmVudERhdGEiLCJpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQiLCJfcGFyZW50TGlzdGVuZXJzIiwiY3VycmVudFJlbmRlcmluZ0luc3RhbmNlIiwicmVuZGVyTWl4aW4iLCJWdWUiLCIkbmV4dFRpY2siLCJfcmVuZGVyIiwicmVmIiwicmVuZGVyRXJyb3IiLCJlbnN1cmVDdG9yIiwiY29tcCIsImJhc2UiLCJfX2VzTW9kdWxlIiwidG9TdHJpbmdUYWciLCJmYWN0b3J5IiwiZXJyb3JDb21wIiwicmVzb2x2ZWQiLCJvd25lciIsIm93bmVycyIsImxvYWRpbmciLCJsb2FkaW5nQ29tcCIsInN5bmMiLCJ0aW1lckxvYWRpbmciLCJ0aW1lclRpbWVvdXQiLCIkb24iLCJmb3JjZVJlbmRlciIsInJlbmRlckNvbXBsZXRlZCIsIiRmb3JjZVVwZGF0ZSIsImNsZWFyVGltZW91dCIsInJlamVjdCIsInJlYXNvbiIsImNvbXBvbmVudCIsImRlbGF5IiwidGltZW91dCIsImdldEZpcnN0Q29tcG9uZW50Q2hpbGQiLCJpbml0RXZlbnRzIiwiX2V2ZW50cyIsIl9oYXNIb29rRXZlbnQiLCJ1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMiLCJyZW1vdmUkMSIsIiRvZmYiLCJfdGFyZ2V0Iiwib25jZUhhbmRsZXIiLCJvbGRMaXN0ZW5lcnMiLCJldmVudHNNaXhpbiIsImhvb2tSRSIsIiRvbmNlIiwiaSQxIiwiY2JzIiwiJGVtaXQiLCJsb3dlckNhc2VFdmVudCIsInNldEFjdGl2ZUluc3RhbmNlIiwicHJldkFjdGl2ZUluc3RhbmNlIiwiaW5pdExpZmVjeWNsZSIsIiRjaGlsZHJlbiIsIiRyZWZzIiwiX3dhdGNoZXIiLCJfaW5hY3RpdmUiLCJfZGlyZWN0SW5hY3RpdmUiLCJfaXNCZWluZ0Rlc3Ryb3llZCIsImxpZmVjeWNsZU1peGluIiwiX3VwZGF0ZSIsInByZXZFbCIsIiRlbCIsInByZXZWbm9kZSIsInJlc3RvcmVBY3RpdmVJbnN0YW5jZSIsIl9fcGF0Y2hfXyIsIl9fdnVlX18iLCJ0ZWFyZG93biIsIl93YXRjaGVycyIsIl9kYXRhIiwibW91bnRDb21wb25lbnQiLCJ0ZW1wbGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsIl9uYW1lIiwiX3VpZCIsIldhdGNoZXIiLCJiZWZvcmUiLCJyZW5kZXJDaGlsZHJlbiIsIm5ld1Njb3BlZFNsb3RzIiwib2xkU2NvcGVkU2xvdHMiLCJoYXNEeW5hbWljU2NvcGVkU2xvdCIsIm5lZWRzRm9yY2VVcGRhdGUiLCIkYXR0cnMiLCIkbGlzdGVuZXJzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJpc0luSW5hY3RpdmVUcmVlIiwiZGlyZWN0IiwiaiIsIk1BWF9VUERBVEVfQ09VTlQiLCJxdWV1ZSIsImFjdGl2YXRlZENoaWxkcmVuIiwiY2lyY3VsYXIiLCJ3YWl0aW5nIiwiZmx1c2hpbmciLCJyZXNldFNjaGVkdWxlclN0YXRlIiwiY3VycmVudEZsdXNoVGltZXN0YW1wIiwiZ2V0Tm93Iiwibm93IiwiY3JlYXRlRXZlbnQiLCJ0aW1lU3RhbXAiLCJmbHVzaFNjaGVkdWxlclF1ZXVlIiwid2F0Y2hlciIsInJ1biIsInVzZXIiLCJleHByZXNzaW9uIiwiYWN0aXZhdGVkUXVldWUiLCJ1cGRhdGVkUXVldWUiLCJjYWxsQWN0aXZhdGVkSG9va3MiLCJjYWxsVXBkYXRlZEhvb2tzIiwiZW1pdCIsInF1ZXVlV2F0Y2hlciIsInVpZCQyIiwiZXhwT3JGbiIsImlzUmVuZGVyV2F0Y2hlciIsImRlZXAiLCJsYXp5IiwiYWN0aXZlIiwiZGlydHkiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImNsZWFudXBEZXBzIiwidG1wIiwib2xkVmFsdWUiLCJldmFsdWF0ZSIsInNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiIsInNvdXJjZUtleSIsInByb3h5R2V0dGVyIiwicHJveHlTZXR0ZXIiLCJpbml0U3RhdGUiLCJpbml0UHJvcHMiLCJpbml0TWV0aG9kcyIsImluaXREYXRhIiwiaW5pdENvbXB1dGVkIiwiaW5pdFdhdGNoIiwicHJvcHNPcHRpb25zIiwiaXNSb290IiwiZ2V0RGF0YSIsImNvbXB1dGVkV2F0Y2hlck9wdGlvbnMiLCJ3YXRjaGVycyIsIl9jb21wdXRlZFdhdGNoZXJzIiwiaXNTU1IiLCJ1c2VyRGVmIiwiZGVmaW5lQ29tcHV0ZWQiLCJzaG91bGRDYWNoZSIsImNyZWF0ZUNvbXB1dGVkR2V0dGVyIiwiY3JlYXRlR2V0dGVySW52b2tlciIsImNvbXB1dGVkR2V0dGVyIiwiY3JlYXRlV2F0Y2hlciIsIiR3YXRjaCIsInN0YXRlTWl4aW4iLCJkYXRhRGVmIiwicHJvcHNEZWYiLCIkc2V0IiwiJGRlbGV0ZSIsImltbWVkaWF0ZSIsInVud2F0Y2hGbiIsInVpZCQzIiwiaW5pdE1peGluIiwiX2luaXQiLCJpbml0SW50ZXJuYWxDb21wb25lbnQiLCJfc2VsZiIsInZub2RlQ29tcG9uZW50T3B0aW9ucyIsInN1cGVyIiwic3VwZXJPcHRpb25zIiwiY2FjaGVkU3VwZXJPcHRpb25zIiwibW9kaWZpZWRPcHRpb25zIiwicmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyIsImV4dGVuZE9wdGlvbnMiLCJtb2RpZmllZCIsImxhdGVzdCIsInNlYWxlZCIsInNlYWxlZE9wdGlvbnMiLCJpbml0VXNlIiwidXNlIiwicGx1Z2luIiwiaW5zdGFsbGVkUGx1Z2lucyIsIl9pbnN0YWxsZWRQbHVnaW5zIiwidW5zaGlmdCIsImluc3RhbGwiLCJpbml0TWl4aW4kMSIsIm1peGluIiwiaW5pdEV4dGVuZCIsIlN1cGVyIiwiU3VwZXJJZCIsImNhY2hlZEN0b3JzIiwiX0N0b3IiLCJTdWIiLCJWdWVDb21wb25lbnQiLCJpbml0UHJvcHMkMSIsImluaXRDb21wdXRlZCQxIiwiQ29tcCIsImluaXRBc3NldFJlZ2lzdGVycyIsImRlZmluaXRpb24iLCJnZXRDb21wb25lbnROYW1lIiwibWF0Y2hlcyIsInBhdHRlcm4iLCJwcnVuZUNhY2hlIiwia2VlcEFsaXZlSW5zdGFuY2UiLCJmaWx0ZXIiLCJlbnRyeSIsInBydW5lQ2FjaGVFbnRyeSIsImN1cnJlbnQiLCJwYXR0ZXJuVHlwZXMiLCJLZWVwQWxpdmUiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImNhY2hlVk5vZGUiLCJ2bm9kZVRvQ2FjaGUiLCJrZXlUb0NhY2hlIiwicGFyc2VJbnQiLCJjcmVhdGVkIiwiZGVzdHJveWVkIiwibW91bnRlZCIsInVwZGF0ZWQiLCJyZWYkMSIsImJ1aWx0SW5Db21wb25lbnRzIiwiaW5pdEdsb2JhbEFQSSIsImNvbmZpZ0RlZiIsInV0aWwiLCJkZWZpbmVSZWFjdGl2ZSIsImRlbGV0ZSIsIm9ic2VydmFibGUiLCJzc3JDb250ZXh0IiwidmVyc2lvbiIsImFjY2VwdFZhbHVlIiwiYXR0ciIsImlzRW51bWVyYXRlZEF0dHIiLCJpc1ZhbGlkQ29udGVudEVkaXRhYmxlVmFsdWUiLCJjb252ZXJ0RW51bWVyYXRlZFZhbHVlIiwiaXNGYWxzeUF0dHJWYWx1ZSIsImlzQm9vbGVhbkF0dHIiLCJ4bGlua05TIiwiaXNYbGluayIsImdldFhsaW5rUHJvcCIsImdlbkNsYXNzRm9yVm5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlIiwibWVyZ2VDbGFzc0RhdGEiLCJyZW5kZXJDbGFzcyIsInN0YXRpY0NsYXNzIiwiZHluYW1pY0NsYXNzIiwic3RyaW5naWZ5Q2xhc3MiLCJzdHJpbmdpZnlBcnJheSIsInN0cmluZ2lmeU9iamVjdCIsInN0cmluZ2lmaWVkIiwibmFtZXNwYWNlTWFwIiwic3ZnIiwibWF0aCIsImlzSFRNTFRhZyIsImlzU1ZHIiwidW5rbm93bkVsZW1lbnRDYWNoZSIsIkhUTUxVbmtub3duRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiaXNUZXh0SW5wdXRUeXBlIiwicXVlcnkiLCJzZWxlY3RlZCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50JDEiLCJ0YWdOYW1lIiwibXVsdGlwbGUiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lc3BhY2UiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwibmV3Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJzZXRUZXh0Q29udGVudCIsInRleHRDb250ZW50Iiwic2V0U3R5bGVTY29wZSIsInNjb3BlSWQiLCJub2RlT3BzIiwicmVnaXN0ZXJSZWYiLCJpc1JlbW92YWwiLCJyZWZzIiwicmVmSW5Gb3IiLCJlbXB0eU5vZGUiLCJzYW1lVm5vZGUiLCJzYW1lSW5wdXRUeXBlIiwidHlwZUEiLCJ0eXBlQiIsImNyZWF0ZUtleVRvT2xkSWR4IiwiYmVnaW5JZHgiLCJlbmRJZHgiLCJjcmVhdGVQYXRjaEZ1bmN0aW9uIiwiYmFja2VuZCIsIm1vZHVsZXMiLCJlbXB0eU5vZGVBdCIsImNyZWF0ZVJtQ2IiLCJjaGlsZEVsbSIsInJlbW92ZU5vZGUiLCJpc1Vua25vd25FbGVtZW50JCQxIiwiaW5WUHJlIiwiaWdub3JlIiwiY3JlYXRpbmdFbG1JblZQcmUiLCJjcmVhdGVFbG0iLCJpbnNlcnRlZFZub2RlUXVldWUiLCJwYXJlbnRFbG0iLCJyZWZFbG0iLCJuZXN0ZWQiLCJvd25lckFycmF5Iiwic2V0U2NvcGUiLCJjcmVhdGVDaGlsZHJlbiIsImludm9rZUNyZWF0ZUhvb2tzIiwiaXNSZWFjdGl2YXRlZCIsImluaXRDb21wb25lbnQiLCJyZWFjdGl2YXRlQ29tcG9uZW50IiwicGVuZGluZ0luc2VydCIsImlzUGF0Y2hhYmxlIiwiaW5uZXJOb2RlIiwidHJhbnNpdGlvbiIsImFjdGl2YXRlIiwicmVmJCQxIiwiY2hlY2tEdXBsaWNhdGVLZXlzIiwiYW5jZXN0b3IiLCJhZGRWbm9kZXMiLCJzdGFydElkeCIsImludm9rZURlc3Ryb3lIb29rIiwicmVtb3ZlVm5vZGVzIiwiY2giLCJyZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rIiwicm0iLCJ1cGRhdGVDaGlsZHJlbiIsIm9sZENoIiwibmV3Q2giLCJyZW1vdmVPbmx5Iiwib2xkU3RhcnRJZHgiLCJuZXdTdGFydElkeCIsIm9sZEVuZElkeCIsIm9sZFN0YXJ0Vm5vZGUiLCJvbGRFbmRWbm9kZSIsIm5ld0VuZElkeCIsIm5ld1N0YXJ0Vm5vZGUiLCJuZXdFbmRWbm9kZSIsIm9sZEtleVRvSWR4IiwiaWR4SW5PbGQiLCJ2bm9kZVRvTW92ZSIsImNhbk1vdmUiLCJwYXRjaFZub2RlIiwiZmluZElkeEluT2xkIiwic2VlbktleXMiLCJlbmQiLCJoeWRyYXRlIiwicG9zdHBhdGNoIiwiaW52b2tlSW5zZXJ0SG9vayIsImluaXRpYWwiLCJoeWRyYXRpb25CYWlsZWQiLCJpc1JlbmRlcmVkTW9kdWxlIiwiYXNzZXJ0Tm9kZU1hdGNoIiwiaGFzQ2hpbGROb2RlcyIsImlubmVySFRNTCIsImNoaWxkcmVuTWF0Y2giLCJmaXJzdENoaWxkIiwiY2hpbGROb2RlcyIsImZ1bGxJbnZva2UiLCJub2RlVHlwZSIsInBhdGNoIiwiaXNJbml0aWFsUGF0Y2giLCJpc1JlYWxFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwib2xkRWxtIiwiX2xlYXZlQ2IiLCJwYXRjaGFibGUiLCJpJDIiLCJ1cGRhdGVEaXJlY3RpdmVzIiwidW5iaW5kRGlyZWN0aXZlcyIsImlzQ3JlYXRlIiwiaXNEZXN0cm95Iiwib2xkRGlycyIsIm5vcm1hbGl6ZURpcmVjdGl2ZXMkMSIsIm5ld0RpcnMiLCJkaXJzV2l0aEluc2VydCIsImRpcnNXaXRoUG9zdHBhdGNoIiwib2xkRGlyIiwiZGlyIiwiY2FsbEhvb2skMSIsIm9sZEFyZyIsImFyZyIsImNvbXBvbmVudFVwZGF0ZWQiLCJjYWxsSW5zZXJ0IiwiZW1wdHlNb2RpZmllcnMiLCJtb2RpZmllcnMiLCJnZXRSYXdEaXJOYW1lIiwicmF3TmFtZSIsImJhc2VNb2R1bGVzIiwidXBkYXRlQXR0cnMiLCJpbmhlcml0QXR0cnMiLCJvbGRBdHRycyIsInNldEF0dHIiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsImlzSW5QcmUiLCJiYXNlU2V0QXR0ciIsInNldEF0dHJpYnV0ZU5TIiwiX19pZXBoIiwiYmxvY2tlciIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVDbGFzcyIsIm9sZERhdGEiLCJjbHMiLCJ0cmFuc2l0aW9uQ2xhc3MiLCJfdHJhbnNpdGlvbkNsYXNzZXMiLCJfcHJldkNsYXNzIiwia2xhc3MiLCJSQU5HRV9UT0tFTiIsIkNIRUNLQk9YX1JBRElPX1RPS0VOIiwibm9ybWFsaXplRXZlbnRzIiwiY2hhbmdlIiwidGFyZ2V0JDEiLCJjcmVhdGVPbmNlSGFuZGxlciQxIiwicmVtb3ZlJDIiLCJ1c2VNaWNyb3Rhc2tGaXgiLCJhZGQkMSIsImF0dGFjaGVkVGltZXN0YW1wIiwiX3dyYXBwZXIiLCJjdXJyZW50VGFyZ2V0Iiwib3duZXJEb2N1bWVudCIsInVwZGF0ZURPTUxpc3RlbmVycyIsImV2ZW50cyIsInN2Z0NvbnRhaW5lciIsInVwZGF0ZURPTVByb3BzIiwib2xkUHJvcHMiLCJfdmFsdWUiLCJzdHJDdXIiLCJzaG91bGRVcGRhdGVWYWx1ZSIsImNoZWNrVmFsIiwiY29tcG9zaW5nIiwiaXNOb3RJbkZvY3VzQW5kRGlydHkiLCJpc0RpcnR5V2l0aE1vZGlmaWVycyIsIm5vdEluRm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiX3ZNb2RpZmllcnMiLCJudW1iZXIiLCJ0cmltIiwicGFyc2VTdHlsZVRleHQiLCJjc3NUZXh0IiwibGlzdERlbGltaXRlciIsInByb3BlcnR5RGVsaW1pdGVyIiwibm9ybWFsaXplU3R5bGVEYXRhIiwibm9ybWFsaXplU3R5bGVCaW5kaW5nIiwic3RhdGljU3R5bGUiLCJiaW5kaW5nU3R5bGUiLCJnZXRTdHlsZSIsImNoZWNrQ2hpbGQiLCJzdHlsZURhdGEiLCJjc3NWYXJSRSIsImltcG9ydGFudFJFIiwic2V0UHJvcCIsInNldFByb3BlcnR5Iiwibm9ybWFsaXplZE5hbWUiLCJub3JtYWxpemUiLCJ2ZW5kb3JOYW1lcyIsImVtcHR5U3R5bGUiLCJjYXBOYW1lIiwidXBkYXRlU3R5bGUiLCJvbGRTdGF0aWNTdHlsZSIsIm9sZFN0eWxlQmluZGluZyIsIm5vcm1hbGl6ZWRTdHlsZSIsIm9sZFN0eWxlIiwibmV3U3R5bGUiLCJ3aGl0ZXNwYWNlUkUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwidGFyIiwicmVzb2x2ZVRyYW5zaXRpb24iLCJjc3MiLCJhdXRvQ3NzVHJhbnNpdGlvbiIsImVudGVyQ2xhc3MiLCJlbnRlclRvQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwibGVhdmVDbGFzcyIsImxlYXZlVG9DbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJoYXNUcmFuc2l0aW9uIiwiVFJBTlNJVElPTiIsIkFOSU1BVElPTiIsInRyYW5zaXRpb25Qcm9wIiwidHJhbnNpdGlvbkVuZEV2ZW50IiwiYW5pbWF0aW9uUHJvcCIsImFuaW1hdGlvbkVuZEV2ZW50Iiwib250cmFuc2l0aW9uZW5kIiwib253ZWJraXR0cmFuc2l0aW9uZW5kIiwib25hbmltYXRpb25lbmQiLCJvbndlYmtpdGFuaW1hdGlvbmVuZCIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5leHRGcmFtZSIsImFkZFRyYW5zaXRpb25DbGFzcyIsInRyYW5zaXRpb25DbGFzc2VzIiwicmVtb3ZlVHJhbnNpdGlvbkNsYXNzIiwid2hlblRyYW5zaXRpb25FbmRzIiwiZ2V0VHJhbnNpdGlvbkluZm8iLCJwcm9wQ291bnQiLCJlbmRlZCIsIm9uRW5kIiwidHJhbnNmb3JtUkUiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkRlbGF5cyIsInRyYW5zaXRpb25EdXJhdGlvbnMiLCJ0cmFuc2l0aW9uVGltZW91dCIsImdldFRpbWVvdXQiLCJhbmltYXRpb25EZWxheXMiLCJhbmltYXRpb25EdXJhdGlvbnMiLCJhbmltYXRpb25UaW1lb3V0IiwiaGFzVHJhbnNmb3JtIiwiZGVsYXlzIiwiZHVyYXRpb25zIiwidG9NcyIsInMiLCJlbnRlciIsInRvZ2dsZURpc3BsYXkiLCJjYW5jZWxsZWQiLCJfZW50ZXJDYiIsImFwcGVhckNsYXNzIiwiYXBwZWFyVG9DbGFzcyIsImFwcGVhckFjdGl2ZUNsYXNzIiwiYmVmb3JlRW50ZXIiLCJhZnRlckVudGVyIiwiZW50ZXJDYW5jZWxsZWQiLCJiZWZvcmVBcHBlYXIiLCJhcHBlYXIiLCJhZnRlckFwcGVhciIsImFwcGVhckNhbmNlbGxlZCIsImR1cmF0aW9uIiwidHJhbnNpdGlvbk5vZGUiLCJpc0FwcGVhciIsInN0YXJ0Q2xhc3MiLCJhY3RpdmVDbGFzcyIsInRvQ2xhc3MiLCJiZWZvcmVFbnRlckhvb2siLCJlbnRlckhvb2siLCJhZnRlckVudGVySG9vayIsImVudGVyQ2FuY2VsbGVkSG9vayIsImV4cGxpY2l0RW50ZXJEdXJhdGlvbiIsImNoZWNrRHVyYXRpb24iLCJleHBlY3RzQ1NTIiwidXNlcldhbnRzQ29udHJvbCIsImdldEhvb2tBcmd1bWVudHNMZW5ndGgiLCJzaG93IiwicGVuZGluZ05vZGUiLCJfcGVuZGluZyIsImlzVmFsaWREdXJhdGlvbiIsImxlYXZlIiwiYmVmb3JlTGVhdmUiLCJhZnRlckxlYXZlIiwibGVhdmVDYW5jZWxsZWQiLCJkZWxheUxlYXZlIiwiZXhwbGljaXRMZWF2ZUR1cmF0aW9uIiwicGVyZm9ybUxlYXZlIiwiaW52b2tlckZucyIsIl9lbnRlciIsInBsYXRmb3JtTW9kdWxlcyIsInZtb2RlbCIsInRyaWdnZXIiLCJkaXJlY3RpdmUiLCJiaW5kaW5nIiwiX3ZPcHRpb25zIiwic2V0U2VsZWN0ZWQiLCJnZXRWYWx1ZSIsIm9uQ29tcG9zaXRpb25TdGFydCIsIm9uQ29tcG9zaXRpb25FbmQiLCJwcmV2T3B0aW9ucyIsImN1ck9wdGlvbnMiLCJvIiwibmVlZFJlc2V0IiwiaGFzTm9NYXRjaGluZ09wdGlvbiIsImFjdHVhbGx5U2V0U2VsZWN0ZWQiLCJpc011bHRpcGxlIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJsb2NhdGVOb2RlIiwidHJhbnNpdGlvbiQkMSIsIm9yaWdpbmFsRGlzcGxheSIsIl9fdk9yaWdpbmFsRGlzcGxheSIsImRpc3BsYXkiLCJ1bmJpbmQiLCJwbGF0Zm9ybURpcmVjdGl2ZXMiLCJ0cmFuc2l0aW9uUHJvcHMiLCJtb2RlIiwiZ2V0UmVhbENoaWxkIiwiY29tcE9wdGlvbnMiLCJleHRyYWN0VHJhbnNpdGlvbkRhdGEiLCJwbGFjZWhvbGRlciIsImgiLCJyYXdDaGlsZCIsImhhc1BhcmVudFRyYW5zaXRpb24iLCJpc1NhbWVDaGlsZCIsIm9sZENoaWxkIiwiaXNOb3RUZXh0Tm9kZSIsImlzVlNob3dEaXJlY3RpdmUiLCJUcmFuc2l0aW9uIiwiX2xlYXZpbmciLCJvbGRSYXdDaGlsZCIsImRlbGF5ZWRMZWF2ZSIsIm1vdmVDbGFzcyIsIlRyYW5zaXRpb25Hcm91cCIsImJlZm9yZU1vdW50Iiwia2VwdCIsInByZXZDaGlsZHJlbiIsInJhd0NoaWxkcmVuIiwidHJhbnNpdGlvbkRhdGEiLCJyZW1vdmVkIiwiYyQxIiwicG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFzTW92ZSIsImNhbGxQZW5kaW5nQ2JzIiwicmVjb3JkUG9zaXRpb24iLCJhcHBseVRyYW5zbGF0aW9uIiwiX3JlZmxvdyIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJtb3ZlZCIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIl9tb3ZlQ2IiLCJwcm9wZXJ0eU5hbWUiLCJfaGFzTW92ZSIsImNsb25lTm9kZSIsIm5ld1BvcyIsIm9sZFBvcyIsImR4IiwibGVmdCIsImR5IiwidG9wIiwicGxhdGZvcm1Db21wb25lbnRzIiwiQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==
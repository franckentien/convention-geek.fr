/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _drawer = __webpack_require__(/*! @material/drawer */ "./node_modules/@material/drawer/index.js");

var _dialog = __webpack_require__(/*! @material/dialog */ "./node_modules/@material/dialog/index.js");

var _tabBar = __webpack_require__(/*! @material/tab-bar */ "./node_modules/@material/tab-bar/index.js");

var _snackbar = __webpack_require__(/*! @material/snackbar */ "./node_modules/@material/snackbar/index.js");

var _autoInit = __webpack_require__(/*! @material/auto-init */ "./node_modules/@material/auto-init/index.js");

var _autoInit2 = _interopRequireDefault(_autoInit);

var _textfield = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/index.js");

var _select = __webpack_require__(/*! @material/select */ "./node_modules/@material/select/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
console.log('hello world 1');

//MDCTemporaryDrawer

var drawer = new _drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.demo-menu').addEventListener('click', function () {
    drawer.open = true;
});

//MDCTabBar
var tabBar = new _tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

//In each Page
//tabBar.activateTab(2);

var dialogDom = document.querySelector('#remove-account-dialog');

if (dialogDom !== null) {
    var dialog = new _dialog.MDCDialog(dialogDom);

    dialog.listen('MDCDialog:accept', function () {

        window.location.href = document.querySelector('#remove-account-dialog-accept').value;
    });

    document.querySelector('#remove-account-dialog-button').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
    });
}

var snackbarDom = document.querySelector('.mdc-snackbar');

if (snackbarDom !== null) {

    console.log("have snakbar");
    var snackbar = new _snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));

    var dataObj = {
        message: document.querySelector('.mdc-snackbar__message').innerHTML
    };

    snackbar.show(dataObj);
}

_autoInit2.default.register('MDCTextField', _textfield.MDCTextField);
_autoInit2.default.register('MDCSelect', _select.MDCSelect);
(0, _autoInit2.default)();

//Test JS
console.log('hello world 2');

/***/ }),

/***/ "./node_modules/@material/animation/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/animation/index.js ***!
  \***************************************************/
/*! exports provided: transformStyleProperties, getCorrectEventName, getCorrectPropertyName */
/*! exports used: getCorrectEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transformStyleProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCorrectEventName; });
/* unused harmony export getCorrectPropertyName */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
let VendorPropertyMapType;

/** @const {Object<string, !VendorPropertyMapType>} */
const eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation',
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation',
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation',
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition',
  },
};

/** @const {Object<string, !VendorPropertyMapType>} */
const cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation',
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform',
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition',
  },
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return (windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function');
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return (eventType in eventTypeMap || eventType in cssPropertyMap);
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  const map = /** @type {!Object<string, !VendorPropertyMapType>} */ (
    eventType in eventTypeMap ? eventTypeMap : cssPropertyMap
  );
  const el = windowObj['document']['createElement']('div');
  let eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

const transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}




/***/ }),

/***/ "./node_modules/@material/auto-init/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/auto-init/index.js ***!
  \***************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = mdcAutoInit;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const registry = Object.create(null);

const CONSOLE_WARN = console.warn.bind(console);

function _emit(evtType, evtData, shouldBubble = false) {
  let evt;
  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble,
    });
  } else {
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  }

  document.dispatchEvent(evt);
}

/**
 * Auto-initializes all mdc components on a page.
 */
function mdcAutoInit(root = document, warn = CONSOLE_WARN) {
  const components = [];
  const nodes = root.querySelectorAll('[data-mdc-auto-init]');
  for (let i = 0, node; (node = nodes[i]); i++) {
    const ctorName = node.dataset.mdcAutoInit;
    if (!ctorName) {
      throw new Error('(mdc-auto-init) Constructor name must be given.');
    }

    const Ctor = registry[ctorName];
    if (typeof Ctor !== 'function') {
      throw new Error(
        `(mdc-auto-init) Could not find constructor in registry for ${ctorName}`);
    }

    if (node[ctorName]) {
      warn(`(mdc-auto-init) Component already initialized for ${node}. Skipping...`);
      continue;
    }

    // TODO: Should we make an eslint rule for an attachTo() static method?
    const component = Ctor.attachTo(node);
    Object.defineProperty(node, ctorName, {
      value: component,
      writable: false,
      enumerable: false,
      configurable: true,
    });
    components.push(component);
  }

  _emit('MDCAutoInit:End', {});
  return components;
}

mdcAutoInit.register = function(componentName, Ctor, warn = CONSOLE_WARN) {
  if (typeof Ctor !== 'function') {
    throw new Error(`(mdc-auto-init) Invalid Ctor value ${Ctor}. Expected function`);
  }
  if (registry[componentName]) {
    warn(
      `(mdc-auto-init) Overriding registration for ${componentName} with ${Ctor}. ` +
      `Was: ${registry[componentName]}`);
  }
  registry[componentName] = Ctor;
};

mdcAutoInit.deregister = function(componentName) {
  delete registry[componentName];
};

mdcAutoInit.deregisterAll = function() {
  Object.keys(registry).forEach(this.deregister, this);
};


/***/ }),

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);


/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);


/***/ }),

/***/ "./node_modules/@material/base/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/base/index.js ***!
  \**********************************************/
/*! exports provided: MDCFoundation, MDCComponent */
/*! exports used: MDCComponent, MDCFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(/*! ./component */ "./node_modules/@material/base/component.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/***/ }),

/***/ "./node_modules/@material/dialog/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/*! exports used: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel',
};

const strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel',
};

const numbers = {
  DIALOG_ANIMATION_TIME_MS: 120,
};




/***/ }),

/***/ "./node_modules/@material/dialog/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/dialog/foundation.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/dialog/constants.js");
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCDialogFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return ({
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      addBodyClass: (/* className: string */) => {},
      removeBodyClass: (/* className: string */) => {},
      eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
      registerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerSurfaceInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterSurfaceInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerDocumentKeydownHandler: (/* handler: EventListener */) => {},
      deregisterDocumentKeydownHandler: (/* handler: EventListener */) => {},
      notifyAccept: () => {},
      notifyCancel: () => {},
      trapFocusOnSurface: () => {},
      untrapFocusOnSurface: () => {},
      isDialog: (/* el: Element */) => /* boolean */ false,
    });
  }

  constructor(adapter) {
    super(Object.assign(MDCDialogFoundation.defaultAdapter, adapter));
    this.isOpen_ = false;
    this.componentClickHandler_ = (evt) => {
      if (this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].BACKDROP)) {
        this.cancel(true);
      }
    };
    this.dialogClickHandler_ = (evt) => this.handleDialogClick_(evt);
    this.documentKeydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this.cancel(true);
      }
    };

    this.timerId_ = 0;
    this.animationTimerEnd_ = (evt) => this.handleAnimationTimerEnd_(evt);
  };

  destroy() {
    // Ensure that dialog is cleaned up when destroyed
    if (this.isOpen_) {
      this.close();
    }
    // Final cleanup of animating class in case the timer has not completed.
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
    clearTimeout(this.timerId_);
  }

  open() {
    this.isOpen_ = true;
    this.disableScroll_();
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    clearTimeout(this.timerId_);
    this.timerId_ = setTimeout(this.animationTimerEnd_, MDCDialogFoundation.numbers.DIALOG_ANIMATION_TIME_MS);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
  }

  close() {
    this.isOpen_ = false;
    this.enableScroll_();
    this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.untrapFocusOnSurface();
    clearTimeout(this.timerId_);
    this.timerId_ = setTimeout(this.animationTimerEnd_, MDCDialogFoundation.numbers.DIALOG_ANIMATION_TIME_MS);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
  }

  isOpen() {
    return this.isOpen_;
  }

  accept(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyAccept();
    }

    this.close();
  }

  cancel(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyCancel();
    }

    this.close();
  }

  handleDialogClick_(evt) {
    const {target} = evt;
    if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACCEPT_BTN)) {
      this.accept(true);
    } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].CANCEL_BTN)) {
      this.cancel(true);
    }
  }

  handleAnimationTimerEnd_() {
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
    if (this.isOpen_) {
      this.adapter_.trapFocusOnSurface();
    }
  };

  disableScroll_() {
    this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  }

  enableScroll_() {
    this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCDialogFoundation;



/***/ }),

/***/ "./node_modules/@material/dialog/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dialog/index.js ***!
  \************************************************/
/*! exports provided: MDCDialogFoundation, util, MDCDialog */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/dialog/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/dialog/util.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util__; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










class MDCDialog extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCDialog(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  get acceptButton_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_SELECTOR);
  }

  get dialogSurface_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.DIALOG_SURFACE_SELECTOR);
  }

  initialize() {
    this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_3__util__["createFocusTrapInstance"](this.dialogSurface_, this.acceptButton_);
    this.footerBtnRipples_ = [];

    const footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
    for (let i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
      this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */](footerBtn));
    }
  }

  destroy() {
    this.footerBtnRipples_.forEach((ripple) => ripple.destroy());
    super.destroy();
  }

  show() {
    this.foundation_.open();
  }

  close() {
    this.foundation_.close();
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      registerInteractionHandler: (evt, handler) => this.root_.addEventListener(evt, handler),
      deregisterInteractionHandler: (evt, handler) => this.root_.removeEventListener(evt, handler),
      registerSurfaceInteractionHandler: (evt, handler) => this.dialogSurface_.addEventListener(evt, handler),
      deregisterSurfaceInteractionHandler: (evt, handler) => this.dialogSurface_.removeEventListener(evt, handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      notifyAccept: () => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_EVENT),
      notifyCancel: () => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CANCEL_EVENT),
      trapFocusOnSurface: () => this.focusTrap_.activate(),
      untrapFocusOnSurface: () => this.focusTrap_.deactivate(),
      isDialog: (el) => el === this.dialogSurface_,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["MDCDialog"] = MDCDialog;



/***/ }),

/***/ "./node_modules/@material/dialog/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/dialog/util.js ***!
  \***********************************************/
/*! exports provided: createFocusTrapInstance */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createFocusTrapInstance"] = createFocusTrapInstance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function createFocusTrapInstance(surfaceEl, acceptButtonEl, focusTrapFactory = __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a) {
  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true,
  });
}


/***/ }),

/***/ "./node_modules/@material/drawer/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/drawer/index.js ***!
  \************************************************/
/*! exports provided: MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, MDCPersistentDrawer, MDCPersistentDrawerFoundation, util */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/drawer/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__temporary__ = __webpack_require__(/*! ./temporary */ "./node_modules/@material/drawer/temporary/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawer", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistent__ = __webpack_require__(/*! ./persistent */ "./node_modules/@material/drawer/persistent/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawer", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawerFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["b"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_0__util__; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/***/ }),

/***/ "./node_modules/@material/drawer/persistent/constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/drawer/persistent/constants.js ***!
  \***************************************************************/
/*! exports provided: cssClasses, strings */
/*! exports used: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable_index__ = __webpack_require__(/*! ../slidable/index */ "./node_modules/@material/drawer/slidable/index.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const cssClasses = {
  ROOT: 'mdc-drawer--persistent',
  OPEN: 'mdc-drawer--open',
  ANIMATING: 'mdc-drawer--animating',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  DRAWER_SELECTOR: '.mdc-drawer--persistent .mdc-drawer__drawer',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable_index__["a" /* FOCUSABLE_ELEMENTS */],
  OPEN_EVENT: 'MDCPersistentDrawer:open',
  CLOSE_EVENT: 'MDCPersistentDrawer:close',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),

/***/ "./node_modules/@material/drawer/persistent/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/drawer/persistent/foundation.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable_index__ = __webpack_require__(/*! ../slidable/index */ "./node_modules/@material/drawer/slidable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/drawer/persistent/constants.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCPersistentDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__slidable_index__["b" /* MDCSlidableDrawerFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return Object.assign(__WEBPACK_IMPORTED_MODULE_0__slidable_index__["b" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
      isDrawer: () => false,
    });
  }

  constructor(adapter) {
    super(
      Object.assign(MDCPersistentDrawerFoundation.defaultAdapter, adapter),
      MDCPersistentDrawerFoundation.cssClasses.ROOT,
      MDCPersistentDrawerFoundation.cssClasses.ANIMATING,
      MDCPersistentDrawerFoundation.cssClasses.OPEN);
  }

  isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCPersistentDrawerFoundation;



/***/ }),

/***/ "./node_modules/@material/drawer/persistent/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/drawer/persistent/index.js ***!
  \***********************************************************/
/*! exports provided: MDCPersistentDrawerFoundation, util, MDCPersistentDrawer */
/*! exports used: MDCPersistentDrawer, MDCPersistentDrawerFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/drawer/persistent/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(/*! ../util */ "./node_modules/@material/drawer/util.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCPersistentDrawer extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCPersistentDrawer(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  // Return the drawer element inside the component.
  get drawer() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
  }

  getDefaultFoundation() {
    const {FOCUSABLE_ELEMENTS} = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
        this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]()),
      deregisterInteractionHandler: (evt, handler) =>
        this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]()),
      registerDrawerInteractionHandler: (evt, handler) =>
        this.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
        this.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler),
      registerTransitionEndHandler: (handler) =>
        this.root_.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) =>
        this.root_.removeEventListener('transitionend', handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
        __WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : `translateX(${value}px)`),
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el),
      restoreElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      notifyOpen: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.OPEN_EVENT),
      notifyClose: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CLOSE_EVENT),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCPersistentDrawer;



/***/ }),

/***/ "./node_modules/@material/drawer/slidable/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/drawer/slidable/constants.js ***!
  \*************************************************************/
/*! exports provided: FOCUSABLE_ELEMENTS */
/*! exports used: FOCUSABLE_ELEMENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const FOCUSABLE_ELEMENTS =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' +
  'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
/* harmony export (immutable) */ __webpack_exports__["a"] = FOCUSABLE_ELEMENTS;



/***/ }),

/***/ "./node_modules/@material/drawer/slidable/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/drawer/slidable/foundation.js ***!
  \**************************************************************/
/*! exports provided: MDCSlidableDrawerFoundation */
/*! exports used: MDCSlidableDrawerFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class MDCSlidableDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["b" /* MDCFoundation */] {
  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      hasClass: (/* className: string */) => {},
      hasNecessaryDom: () => /* boolean */ false,
      registerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerDrawerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterDrawerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
      registerDocumentKeydownHandler: (/* handler: EventListener */) => {},
      deregisterDocumentKeydownHandler: (/* handler: EventListener */) => {},
      setTranslateX: (/* value: number | null */) => {},
      getFocusableElements: () => /* NodeList */ {},
      saveElementTabState: (/* el: Element */) => {},
      restoreElementTabState: (/* el: Element */) => {},
      makeElementUntabbable: (/* el: Element */) => {},
      notifyOpen: () => {},
      notifyClose: () => {},
      isRtl: () => /* boolean */ false,
      getDrawerWidth: () => /* number */ 0,
    };
  }

  constructor(adapter, rootCssClass, animatingCssClass, openCssClass) {
    super(Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, adapter));

    this.rootCssClass_ = rootCssClass;
    this.animatingCssClass_ = animatingCssClass;
    this.openCssClass_ = openCssClass;

    this.transitionEndHandler_ = (evt) => this.handleTransitionEnd_(evt);

    this.inert_ = false;

    this.componentTouchStartHandler_ = (evt) => this.handleTouchStart_(evt);
    this.componentTouchMoveHandler_ = (evt) => this.handleTouchMove_(evt);
    this.componentTouchEndHandler_ = (evt) => this.handleTouchEnd_(evt);
    this.documentKeydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this.close();
      }
    };
  }

  init() {
    const ROOT = this.rootCssClass_;
    const OPEN = this.openCssClass_;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(`${ROOT} class required in root element.`);
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error(`Required DOM nodes missing in ${ROOT} component.`);
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    } else {
      this.detabinate_();
      this.isOpen_ = false;
    }

    this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
    // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
  }

  open() {
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.addClass(this.openCssClass_);
    this.retabinate_();
    // Debounce multiple calls
    if (!this.isOpen_) {
      this.adapter_.notifyOpen();
    }
    this.isOpen_ = true;
  }

  close() {
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.removeClass(this.openCssClass_);
    this.detabinate_();
    // Debounce multiple calls
    if (this.isOpen_) {
      this.adapter_.notifyClose();
    }
    this.isOpen_ = false;
  }

  isOpen() {
    return this.isOpen_;
  }

  /**
   *  Render all children of the drawer inert when it's closed.
   */
  detabinate_() {
    if (this.inert_) {
      return;
    }

    const elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        this.adapter_.saveElementTabState(elements[i]);
        this.adapter_.makeElementUntabbable(elements[i]);
      }
    }

    this.inert_ = true;
  }

  /**
   *  Make all children of the drawer tabbable again when it's open.
   */
  retabinate_() {
    if (!this.inert_) {
      return;
    }

    const elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        this.adapter_.restoreElementTabState(elements[i]);
      }
    }

    this.inert_ = false;
  }

  handleTouchStart_(evt) {
    if (!this.adapter_.hasClass(this.openCssClass_)) {
      return;
    }
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.direction_ = this.adapter_.isRtl() ? -1 : 1;
    this.drawerWidth_ = this.adapter_.getDrawerWidth();
    this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    this.currentX_ = this.startX_;

    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
  }

  handleTouchMove_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
  }

  handleTouchEnd_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.prepareForTouchEnd_();

    // Did the user close the drawer by more than 50%?
    if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
      this.close();
    } else {
      // Triggering an open here means we'll get a nice animation back to the fully open state.
      this.open();
    }
  }

  prepareForTouchEnd_() {
    cancelAnimationFrame(this.updateRaf_);
    this.adapter_.setTranslateX(null);
  }

  updateDrawer_() {
    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
    this.adapter_.setTranslateX(this.newPosition_);
  }

  get newPosition_() {
    let newPos = null;

    if (this.direction_ === 1) {
      newPos = Math.min(0, this.currentX_ - this.startX_);
    } else {
      newPos = Math.max(0, this.currentX_ - this.startX_);
    }

    return newPos;
  }

  isRootTransitioningEventTarget_() {
    // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
    // if the event target is the root event target currently transitioning.
    return false;
  }

  handleTransitionEnd_(evt) {
    if (this.isRootTransitioningEventTarget_(evt.target)) {
      this.adapter_.removeClass(this.animatingCssClass_);
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
    }
  };
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSlidableDrawerFoundation;



/***/ }),

/***/ "./node_modules/@material/drawer/slidable/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/drawer/slidable/index.js ***!
  \*********************************************************/
/*! exports provided: FOCUSABLE_ELEMENTS, MDCSlidableDrawerFoundation */
/*! exports used: FOCUSABLE_ELEMENTS, MDCSlidableDrawerFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/drawer/slidable/constants.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/drawer/slidable/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),

/***/ "./node_modules/@material/drawer/temporary/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/drawer/temporary/constants.js ***!
  \**************************************************************/
/*! exports provided: cssClasses, strings */
/*! exports used: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable_index__ = __webpack_require__(/*! ../slidable/index */ "./node_modules/@material/drawer/slidable/index.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const cssClasses = {
  ROOT: 'mdc-drawer--temporary',
  OPEN: 'mdc-drawer--open',
  ANIMATING: 'mdc-drawer--animating',
  SCROLL_LOCK: 'mdc-drawer-scroll-lock',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  DRAWER_SELECTOR: '.mdc-drawer--temporary .mdc-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable_index__["a" /* FOCUSABLE_ELEMENTS */],
  OPEN_EVENT: 'MDCTemporaryDrawer:open',
  CLOSE_EVENT: 'MDCTemporaryDrawer:close',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),

/***/ "./node_modules/@material/drawer/temporary/foundation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/drawer/temporary/foundation.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable_index__ = __webpack_require__(/*! ../slidable/index */ "./node_modules/@material/drawer/slidable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/drawer/temporary/constants.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCTemporaryDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__slidable_index__["b" /* MDCSlidableDrawerFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return Object.assign(__WEBPACK_IMPORTED_MODULE_0__slidable_index__["b" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
      addBodyClass: (/* className: string */) => {},
      removeBodyClass: (/* className: string */) => {},
      isDrawer: () => false,
      updateCssVariable: (/* value: string */) => {},
      eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
    });
  }

  constructor(adapter) {
    super(
      Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter),
      MDCTemporaryDrawerFoundation.cssClasses.ROOT,
      MDCTemporaryDrawerFoundation.cssClasses.ANIMATING,
      MDCTemporaryDrawerFoundation.cssClasses.OPEN);

    this.componentClickHandler_ = (evt) => {
      if (this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ROOT)) {
        this.close(true);
      }
    };
  }

  init() {
    super.init();

    // Make browser aware of custom property being used in this element.
    // Workaround for certain types of hard-to-reproduce heisenbugs.
    this.adapter_.updateCssVariable(0);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
  }

  destroy() {
    super.destroy();

    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.enableScroll_();
  }

  open() {
    this.disableScroll_();
    // Make sure custom property values are cleared before starting.
    this.adapter_.updateCssVariable('');

    super.open();
  }

  close() {
    // Make sure custom property values are cleared before making any changes.
    this.adapter_.updateCssVariable('');

    super.close();
  }

  prepareForTouchEnd_() {
    super.prepareForTouchEnd_();

    this.adapter_.updateCssVariable('');
  }

  updateDrawer_() {
    super.updateDrawer_();

    const newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
    this.adapter_.updateCssVariable(newOpacity);
  }

  isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  }

  handleTransitionEnd_(evt) {
    super.handleTransitionEnd_(evt);
    if (!this.isOpen_) {
      this.enableScroll_();
    }
  };

  disableScroll_() {
    this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  }

  enableScroll_() {
    this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTemporaryDrawerFoundation;



/***/ }),

/***/ "./node_modules/@material/drawer/temporary/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/drawer/temporary/index.js ***!
  \**********************************************************/
/*! exports provided: MDCTemporaryDrawerFoundation, util, MDCTemporaryDrawer */
/*! exports used: MDCTemporaryDrawer, MDCTemporaryDrawerFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/drawer/temporary/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(/*! ../util */ "./node_modules/@material/drawer/util.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCTemporaryDrawer extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCTemporaryDrawer(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /* Return the drawer element inside the component. */
  get drawer() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
  }

  getDefaultFoundation() {
    const {FOCUSABLE_ELEMENTS, OPACITY_VAR_NAME} = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
        this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]()),
      deregisterInteractionHandler: (evt, handler) =>
        this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]()),
      registerDrawerInteractionHandler: (evt, handler) =>
        this.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
        this.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler),
      registerTransitionEndHandler: (handler) => this.drawer.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) => this.drawer.removeEventListener('transitionend', handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
        __WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : `translateX(${value}px)`),
      updateCssVariable: (value) => {
        if (__WEBPACK_IMPORTED_MODULE_2__util__["supportsCssCustomProperties"]()) {
          this.root_.style.setProperty(OPACITY_VAR_NAME, value);
        }
      },
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el),
      restoreElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      notifyOpen: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.OPEN_EVENT),
      notifyClose: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CLOSE_EVENT),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTemporaryDrawer;



/***/ }),

/***/ "./node_modules/@material/drawer/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/drawer/util.js ***!
  \***********************************************/
/*! exports provided: remapEvent, getTransformPropertyName, supportsCssCustomProperties, applyPassive, saveElementTabState, restoreElementTabState */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["remapEvent"] = remapEvent;
/* harmony export (immutable) */ __webpack_exports__["getTransformPropertyName"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["supportsCssCustomProperties"] = supportsCssCustomProperties;
/* harmony export (immutable) */ __webpack_exports__["applyPassive"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["saveElementTabState"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["restoreElementTabState"] = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const TAB_DATA = 'data-mdc-tabindex';
const TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

let storedTransformPropertyName_;
let supportsPassive_;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName, globalObj = window) {
  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
    case 'touchstart':
      return 'pointerdown';
    case 'touchmove':
      return 'pointermove';
    case 'touchend':
      return 'pointerup';
    default:
      return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj = window, forceRefresh = false) {
  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    const transformPropertyName = ('transform' in el.style ? 'transform' : '-webkit-transform');
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties(globalObj = window) {
  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}


/***/ }),

/***/ "./node_modules/@material/line-ripple/adapter.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/line-ripple/adapter.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC TextField Line Ripple.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the line ripple into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCLineRippleAdapter {
  /**
   * Adds a class to the line ripple element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the line ripple element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Sets the style property with propertyName to value on the root element.
   * @param {string} propertyName
   * @param {string} value
   */
  setStyle(propertyName, value) {}

  /**
   * Registers an event listener on the line ripple element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerEventHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the line ripple element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterEventHandler(evtType, handler) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCLineRippleAdapter);


/***/ }),

/***/ "./node_modules/@material/line-ripple/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/constants.js ***!
  \*********************************************************/
/*! exports provided: cssClasses */
/*! exports used: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};




/***/ }),

/***/ "./node_modules/@material/line-ripple/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/line-ripple/foundation.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/line-ripple/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/line-ripple/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends {MDCFoundation<!MDCLineRippleAdapter>}
 * @final
 */
class MDCLineRippleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCLineRippleAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCLineRippleAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCLineRippleAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      hasClass: () => {},
      setStyle: () => {},
      registerEventHandler: () => {},
      deregisterEventHandler: () => {},
    });
  }

  /**
   * @param {!MDCLineRippleAdapter=} adapter
   */
  constructor(adapter = /** @type {!MDCLineRippleAdapter} */ ({})) {
    super(Object.assign(MDCLineRippleFoundation.defaultAdapter, adapter));

    /** @private {function(!Event): undefined} */
    this.transitionEndHandler_ = (evt) => this.handleTransitionEnd(evt);
  }

  init() {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  }

  /**
   * Activates the line ripple
   */
  activate() {
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
  }

  /**
   * Sets the center of the ripple animation to the given X coordinate.
   * @param {number} xCoordinate
   */
  setRippleCenter(xCoordinate) {
    this.adapter_.setStyle('transform-origin', `${xCoordinate}px center`);
  }

  /**
   * Deactivates the line ripple
   */
  deactivate() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
  }

  /**
   * Handles a transition end event
   * @param {!Event} evt
   */
  handleTransitionEnd(evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    const isDeactivating = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCLineRippleFoundation);


/***/ }),

/***/ "./node_modules/@material/line-ripple/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/line-ripple/index.js ***!
  \*****************************************************/
/*! exports provided: MDCLineRipple, MDCLineRippleFoundation */
/*! exports used: MDCLineRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCLineRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/line-ripple/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/line-ripple/foundation.js");
/* unused harmony reexport MDCLineRippleFoundation */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends {MDCComponent<!MDCLineRippleFoundation>}
 * @final
 */
class MDCLineRipple extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCLineRipple}
   */
  static attachTo(root) {
    return new MDCLineRipple(root);
  }

  /**
   * Activates the line ripple
   */
  activate() {
    this.foundation_.activate();
  }

  /**
   * Deactivates the line ripple
   */
  deactivate() {
    this.foundation_.deactivate();
  }

  /**
   * Sets the transform origin given a user's click location. The `rippleCenter` is the
   * x-coordinate of the middle of the ripple.
   * @param {number} xCoordinate
   */
  setRippleCenter(xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  }

  /**
   * @return {!MDCLineRippleFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](/** @type {!MDCLineRippleAdapter} */ (Object.assign({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      setStyle: (propertyName, value) => this.root_.style[propertyName] = value,
      registerEventHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
    })));
  }
}




/***/ }),

/***/ "./node_modules/@material/ripple/adapter.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/ripple/adapter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCRippleAdapter {
  /** @return {boolean} */
  browserSupportsCssVars() {}

  /** @return {boolean} */
  isUnbounded() {}

  /** @return {boolean} */
  isSurfaceActive() {}

  /** @return {boolean} */
  isSurfaceDisabled() {}

  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /** @param {!EventTarget} target */
  containsEventTarget(target) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterDocumentInteractionHandler(evtType, handler) {}

  /**
   * @param {!Function} handler
   */
  registerResizeHandler(handler) {}

  /**
   * @param {!Function} handler
   */
  deregisterResizeHandler(handler) {}

  /**
   * @param {string} varName
   * @param {?number|string} value
   */
  updateCssVariable(varName, value) {}

  /** @return {!ClientRect} */
  computeBoundingRect() {}

  /** @return {{x: number, y: number}} */
  getWindowPageOffset() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCRippleAdapter);


/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/*! exports used: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
};

const strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};

const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};




/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/ripple/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
let ActivationStateType;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
let ListenerInfoType;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
let ListenersType;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
let PointType;

// Activation events registered on the root element of each instance for activation
const ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
const POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
let activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class MDCRippleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */ {},
      isUnbounded: () => /* boolean */ {},
      isSurfaceActive: () => /* boolean */ {},
      isSurfaceDisabled: () => /* boolean */ {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      containsEventTarget: (/* target: !EventTarget */) => {},
      registerInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerDocumentInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterDocumentInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      updateCssVariable: (/* varName: string, value: string */) => {},
      computeBoundingRect: () => /* ClientRect */ {},
      getWindowPageOffset: () => /* {x: number, y: number} */ {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */ ({width: 0, height: 0});

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    this.activateHandler_ = (e) => this.activate_(e);

    /** @private {function(!Event)} */
    this.deactivateHandler_ = (e) => this.deactivate_(e);

    /** @private {function(?Event=)} */
    this.focusHandler_ = () => this.handleFocus();

    /** @private {function(?Event=)} */
    this.blurHandler_ = () => this.handleBlur();

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    this.previousActivationEvent_ = null;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */
  supportsPressRipple_() {
    return this.adapter_.browserSupportsCssVars();
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationEvent: null,
      isProgrammatic: false,
    };
  }

  /** @override */
  init() {
    const supportsPressRipple = this.supportsPressRipple_();

    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
      requestAnimationFrame(() => {
        this.adapter_.addClass(ROOT);
        if (this.adapter_.isUnbounded()) {
          this.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          this.layoutInternal_();
        }
      });
    }
  }

  /** @override */
  destroy() {
    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        const {FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
        this.adapter_.removeClass(FG_ACTIVATION);
      }

      const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
      requestAnimationFrame(() => {
        this.adapter_.removeClass(ROOT);
        this.adapter_.removeClass(UNBOUNDED);
        this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  }

  /**
   * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
   * @private
   */
  registerRootHandlers_(supportsPressRipple) {
    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach((type) => {
        this.adapter_.registerInteractionHandler(type, this.activateHandler_);
      });
      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  }

  /**
   * @param {!Event} e
   * @private
   */
  registerDeactivationHandlers_(e) {
    if (e.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach((type) => {
        this.adapter_.registerDocumentInteractionHandler(type, this.deactivateHandler_);
      });
    }
  }

  /** @private */
  deregisterRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach((type) => {
      this.adapter_.deregisterInteractionHandler(type, this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }

  /** @private */
  deregisterDeactivationHandlers_() {
    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach((type) => {
      this.adapter_.deregisterDocumentInteractionHandler(type, this.deactivateHandler_);
    });
  }

  /** @private */
  removeCssVars_() {
    const {strings} = MDCRippleFoundation;
    Object.keys(strings).forEach((k) => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const activationState = this.activationState_;
    if (activationState.isActivated) {
      return;
    }

    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    const previousActivationEvent = this.previousActivationEvent_;
    const isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );

    const hasActivatedChild =
      e && activatedTargets.length > 0 && activatedTargets.some((target) => this.adapter_.containsEventTarget(target));
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (e) {
      activatedTargets.push(/** @type {!EventTarget} */ (e.target));
      this.registerDeactivationHandlers_(e);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(() => {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  /**
   * @param {?Event} e
   * @private
   */
  checkElementMadeActive_(e) {
    return (e && e.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  activate(event = null) {
    this.activate_(event);
  }

  /** @private */
  animateActivation_() {
    const {VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END} = MDCRippleFoundation.strings;
    const {FG_DEACTIVATION, FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    const {DEACTIVATION_TIMEOUT_MS} = MDCRippleFoundation.numbers;

    this.layoutInternal_();

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {startPoint, endPoint} = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const {activationEvent, wasActivatedByPointer} = this.activationState_;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* getNormalizedEventCoords */])(
        /** @type {!Event} */ (activationEvent),
        this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize_ / 2),
      y: startPoint.y - (this.initialSize_ / 2),
    };

    const endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint, endPoint};
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    const {FG_DEACTIVATION} = MDCRippleFoundation.cssClasses;
    const {hasDeactivationUXRun, isActivated} = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const {FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  resetActivationState_() {
    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(() => this.previousActivationEvent_ = null, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  }

  /**
   * @param {?Event} e
   * @private
   */
  deactivate_(e) {
    const activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }

    const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));

    if (activationState.isProgrammatic) {
      const evtObject = null;
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(() => {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
        this.resetActivationState_();
      });
    }
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  deactivate(event = null) {
    this.deactivate_(event);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, {wasActivatedByPointer, wasElementMadeActive}) {
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();
    const maxDim = Math.max(this.frame_.height, this.frame_.width);

    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    const getBoundedRadius = () => {
      const hypotenuse = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;

    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE, VAR_LEFT, VAR_TOP, VAR_FG_SCALE,
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }

  /** @param {boolean} unbounded */
  setUnbounded(unbounded) {
    const {UNBOUNDED} = MDCRippleFoundation.cssClasses;
    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  }

  handleFocus() {
    requestAnimationFrame(() =>
      this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));
  }

  handleBlur() {
    requestAnimationFrame(() =>
      this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);


/***/ }),

/***/ "./node_modules/@material/ripple/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/ripple/index.js ***!
  \************************************************/
/*! exports provided: MDCRipple, MDCRippleFoundation, RippleCapableSurface, util */
/*! exports used: MDCRipple, MDCRippleFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* unused harmony export RippleCapableSurface */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/ripple/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* unused harmony reexport util */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class MDCRipple extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, {isUnbounded = undefined} = {}) {
    const ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */ (isUnbounded);
    }
    return ripple;
  }

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */
  static createAdapter(instance) {
    const MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* getMatchesProperty */](HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => __WEBPACK_IMPORTED_MODULE_3__util__["d" /* supportsCssVariables */](window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      containsEventTarget: (target) => instance.root_.contains(target),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded_();
  }

  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   * @private
   */
  setUnbounded_() {
    this.foundation_.setUnbounded(this.unbounded_);
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /**
   * @return {!MDCRippleFoundation}
   * @override
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
  }

  /** @override */
  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
class RippleCapableSurface {}

/** @protected {!Element} */
RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;




/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/*! exports provided: supportsCssVariables, applyPassive, getMatchesProperty, getNormalizedEventCoords */
/*! exports used: applyPassive, getMatchesProperty, getNormalizedEventCoords, supportsCssVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMatchesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNormalizedEventCoords; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj, forceRefresh = false) {
  let supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {x, y} = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
}




/***/ }),

/***/ "./node_modules/@material/select/adapter.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/select/adapter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Select. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */

class MDCSelectAdapter {
  /**
   * Adds class to root element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the root element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns true if the root element contains the given class name.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Activates the bottom line, showing a focused state.
   */
  activateBottomLine() {}

  /**
   * Deactivates the bottom line.
   */
  deactivateBottomLine() {}

  /**
   * Returns the selected value of the select element.
   * @return {string}
   */
  getValue() {}

  /**
   * Returns true if the direction of the root element is set to RTL.
   * @return {boolean}
   */
  isRtl() {}

  /**
   * Returns true if label element exists, false if it doesn't.
   * @return {boolean}
   */
  hasLabel() {}

  /**
   * Floats label determined based off of the shouldFloat argument.
   * @param {boolean} shouldFloat
   */
  floatLabel(shouldFloat) {}

  /**
   * Returns width of label in pixels, if the label exists.
   * @return {number}
   */
  getLabelWidth() {}

  /**
   * Returns true if outline element exists, false if it doesn't.
   * @return {boolean}
   */
  hasOutline() {}

  /**
   * Updates SVG Path and outline element based on the
   * label element width and RTL context, if the outline exists.
   * @param {number} labelWidth
   * @param {boolean=} isRtl
   */
  notchOutline(labelWidth, isRtl) {}

  /**
   * Closes notch in outline element, if the outline exists.
   */
  closeOutline() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCSelectAdapter);


/***/ }),

/***/ "./node_modules/@material/select/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/select/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/*! exports used: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses = {
  BOX: 'mdc-select--box',
  DISABLED: 'mdc-select--disabled',
  ROOT: 'mdc-select',
  OUTLINED: 'mdc-select--outlined',
};

/** @enum {string} */
const strings = {
  CHANGE_EVENT: 'MDCSelect:change',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  LABEL_SELECTOR: '.mdc-floating-label',
  NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
};

/** @enum {number} */
const numbers = {
  LABEL_SCALE: 0.75,
};




/***/ }),

/***/ "./node_modules/@material/select/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/select/foundation.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/select/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/constants.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCSelectAdapter>}
 * @final
 */
class MDCSelectFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["b" /* MDCFoundation */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /** @return enum {number} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
  }

  /**
   * {@see MDCSelectAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCSelectAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCSelectAdapter} */ ({
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      hasClass: (/* className: string */) => false,
      activateBottomLine: () => {},
      deactivateBottomLine: () => {},
      getValue: () => {},
      isRtl: () => false,
      hasLabel: () => false,
      floatLabel: (/* value: boolean */) => {},
      getLabelWidth: () => {},
      hasOutline: () => false,
      notchOutline: (/* labelWidth: number, isRtl: boolean */) => {},
      closeOutline: () => {},
    });
  }

  /**
   * @param {!MDCSelectAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCSelectFoundation.defaultAdapter, adapter));
  }

  /**
   * Updates the styles of the select to show the disasbled state.
   * @param {boolean} disabled
   */
  updateDisabledStyle(disabled) {
    const {DISABLED} = MDCSelectFoundation.cssClasses;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }

  /**
   * Handles value changes, via change event or programmatic updates.
   */
  handleChange() {
    const optionHasValue = this.adapter_.getValue().length > 0;
    this.adapter_.floatLabel(optionHasValue);
    this.notchOutline(optionHasValue);
  }

  /**
   * Handles focus events from root element.
   */
  handleFocus() {
    this.adapter_.floatLabel(true);
    this.notchOutline(true);
    this.adapter_.activateBottomLine();
  }

  /**
   * Handles blur events from root element.
   */
  handleBlur() {
    this.handleChange();
    this.adapter_.deactivateBottomLine();
  }

  /**
   * Opens/closes the notched outline.
   * @param {boolean} openNotch
   */
  notchOutline(openNotch) {
    if (!this.adapter_.hasOutline() || !this.adapter_.hasLabel()) {
      return;
    }

    if (openNotch) {
      const labelScale = __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].LABEL_SCALE;
      const labelWidth = this.adapter_.getLabelWidth() * labelScale;
      const isRtl = this.adapter_.isRtl();
      this.adapter_.notchOutline(labelWidth, isRtl);
    } else {
      this.adapter_.closeOutline();
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCSelectFoundation);


/***/ }),

/***/ "./node_modules/@material/select/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/select/index.js ***!
  \************************************************/
/*! exports provided: MDCSelect, MDCSelectFoundation */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelect", function() { return MDCSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_floating_label_index__ = __webpack_require__(/*! @material/floating-label/index */ "./node_modules/@material/select/node_modules/@material/floating-label/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_line_ripple_index__ = __webpack_require__(/*! @material/line-ripple/index */ "./node_modules/@material/line-ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_notched_outline_index__ = __webpack_require__(/*! @material/notched-outline/index */ "./node_modules/@material/select/node_modules/@material/notched-outline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/select/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/constants.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function() { return __WEBPACK_IMPORTED_MODULE_5__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */











/**
 * @extends MDCComponent<!MDCSelectFoundation>
 */
class MDCSelect extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /** @private {?Element} */
    this.nativeControl_;
    /** @type {?MDCRipple} */
    this.ripple;
    /** @private {?MDCLineRipple} */
    this.lineRipple_;
    /** @private {?MDCFloatingLabel} */
    this.label_;
    /** @private {?MDCNotchedOutline} */
    this.outline_;
    /** @private {!Function} */
    this.handleChange_;
    /** @private {!Function} */
    this.handleFocus_;
    /** @private {!Function} */
    this.handleBlur_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCSelect}
   */
  static attachTo(root) {
    return new MDCSelect(root);
  }

  /**
   * @return {string} The value of the select.
   */
  get value() {
    return this.nativeControl_.value;
  }

  /**
   * @param {string} value The value to set on the select.
   */
  set value(value) {
    this.nativeControl_.value = value;
    this.foundation_.handleChange();
  }

  /**
   * @return {number} The selected index of the select.
   */
  get selectedIndex() {
    return this.nativeControl_.selectedIndex;
  }

  /**
   * @param {number} selectedIndex The index of the option to be set on the select.
   */
  set selectedIndex(selectedIndex) {
    this.nativeControl_.selectedIndex = selectedIndex;
    this.foundation_.handleChange();
  }

  /**
   * @return {boolean} True if the select is disabled.
   */
  get disabled() {
    return this.nativeControl_.disabled;
  }

  /**
   * @param {boolean} disabled Sets the select disabled or enabled.
   */
  set disabled(disabled) {
    this.nativeControl_.disabled = disabled;
    this.foundation_.updateDisabledStyle(disabled);
  }

  /**
   * Recomputes the outline SVG path for the outline element.
   */
  layout() {
    const openNotch = this.nativeControl_.value.length > 0;
    this.foundation_.notchOutline(openNotch);
  }


  /**
   * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which creates a new MDCLineRipple.
   * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which creates a new MDCFloatingLabel.
   * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which creates a new MDCNotchedOutline.
   */
  initialize(
    labelFactory = (el) => new __WEBPACK_IMPORTED_MODULE_1__material_floating_label_index__["a" /* MDCFloatingLabel */](el),
    lineRippleFactory = (el) => new __WEBPACK_IMPORTED_MODULE_2__material_line_ripple_index__["a" /* MDCLineRipple */](el),
    outlineFactory = (el) => new __WEBPACK_IMPORTED_MODULE_4__material_notched_outline_index__["a" /* MDCNotchedOutline */](el)) {
    this.nativeControl_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].NATIVE_CONTROL_SELECTOR);
    const labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    const lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].LINE_RIPPLE_SELECTOR);
    if (lineRippleElement) {
      this.lineRipple_ = lineRippleFactory(lineRippleElement);
    }
    const outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].OUTLINE_SELECTOR);
    if (outlineElement) {
      this.outline_ = outlineFactory(outlineElement);
    }

    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].BOX)) {
      this.ripple = this.initRipple_();
    }
  }

  /**
   * @private
   * @return {!MDCRipple}
   */
  initRipple_() {
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["a" /* MDCRipple */].createAdapter(this), {
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler),
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["a" /* MDCRipple */](this.root_, foundation);
  }

  /**
   * Initializes the select's event listeners and internal state based
   * on the environment's state.
   */
  initialSyncWithDOM() {
    this.handleChange_ = () => this.foundation_.handleChange();
    this.handleFocus_ = () => this.foundation_.handleFocus();
    this.handleBlur_ = () => this.foundation_.handleBlur();

    this.nativeControl_.addEventListener('change', this.handleChange_);
    this.nativeControl_.addEventListener('focus', this.handleFocus_);
    this.nativeControl_.addEventListener('blur', this.handleBlur_);

    // Initially sync floating label
    this.foundation_.handleChange();

    if (this.nativeControl_.disabled) {
      this.disabled = true;
    }
  }

  destroy() {
    this.nativeControl_.removeEventListener('change', this.handleChange_);
    this.nativeControl_.removeEventListener('focus', this.handleFocus_);
    this.nativeControl_.removeEventListener('blur', this.handleBlur_);

    if (this.ripple) {
      this.ripple.destroy();
    }
    if (this.outline_) {
      this.outline_.destroy();
    }

    super.destroy();
  }

  /**
   * @return {!MDCSelectFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_5__foundation__["a" /* default */](
      /** @type {!MDCSelectAdapter} */ (Object.assign({
        addClass: (className) => this.root_.classList.add(className),
        removeClass: (className) => this.root_.classList.remove(className),
        hasClass: (className) => this.root_.classList.contains(className),
        getValue: () => this.nativeControl_.value,
        isRtl: () => window.getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
        activateBottomLine: () => {
          if (this.lineRipple_) {
            this.lineRipple_.activate();
          }
        },
        deactivateBottomLine: () => {
          if (this.lineRipple_) {
            this.lineRipple_.deactivate();
          }
        },
      },
      this.getOutlineAdapterMethods_(),
      this.getLabelAdapterMethods_())
      )
    );
  }

  /**
   * @return {!{
   *   hasOutline: function(): boolean,
   *   notchOutline: function(number, boolean): undefined,
   *   closeOutline: function(): undefined,
   * }}
   */
  getOutlineAdapterMethods_() {
    return {
      hasOutline: () => !!this.outline_,
      notchOutline: (labelWidth, isRtl) => {
        if (this.outline_) {
          this.outline_.notch(labelWidth, isRtl);
        }
      },
      closeOutline: () => {
        if (this.outline_) {
          this.outline_.closeNotch();
        }
      },
    };
  }

  /**
   * @return {!{
   *   hasLabel: function(): boolean,
   *   floatLabel: function(boolean): undefined,
   *   getLabelWidth: function(): number,
   * }}
   */
  getLabelAdapterMethods_() {
    return {
      hasLabel: () => !!this.label_,
      floatLabel: (shouldFloat) => {
        if (this.label_) {
          this.label_.float(shouldFloat);
        }
      },
      getLabelWidth: () => {
        if (this.label_) {
          return this.label_.getWidth();
        }
      },
    };
  }
}




/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/floating-label/adapter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/floating-label/adapter.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Floating Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the floating label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCFloatingLabelAdapter {
  /**
   * Adds a class to the label element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the label element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns the width of the label element.
   * @return {number}
   */
  getWidth() {}

  /**
   * Registers an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterInteractionHandler(evtType, handler) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCFloatingLabelAdapter);


/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/floating-label/constants.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/floating-label/constants.js ***!
  \******************************************************************************************/
/*! exports provided: cssClasses */
/*! exports used: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
};




/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/floating-label/foundation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/floating-label/foundation.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/select/node_modules/@material/floating-label/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/node_modules/@material/floating-label/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
 * @final
 */
class MDCFloatingLabelFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCFloatingLabelAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCFloatingLabelAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      getWidth: () => {},
      registerInteractionHandler: () => {},
      deregisterInteractionHandler: () => {},
    });
  }

  /**
   * @param {!MDCFloatingLabelAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCFloatingLabelFoundation.defaultAdapter, adapter));

    /** @private {function(!Event): undefined} */
    this.shakeAnimationEndHandler_ = () => this.handleShakeAnimationEnd_();
  }

  init() {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  }

  /**
   * Returns the width of the label element.
   * @return {number}
   */
  getWidth() {
    return this.adapter_.getWidth();
  }

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake adds shake class if true,
   * otherwise removes shake class.
   */
  shake(shouldShake) {
    const {LABEL_SHAKE} = MDCFloatingLabelFoundation.cssClasses;
    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  }

  /**
   * Styles the label to float or dock.
   * @param {boolean} shouldFloat adds float class if true, otherwise remove
   * float and shake class to dock label.
   */
  float(shouldFloat) {
    const {LABEL_FLOAT_ABOVE, LABEL_SHAKE} = MDCFloatingLabelFoundation.cssClasses;
    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  }

  /**
   * Handles an interaction event on the root element.
   */
  handleShakeAnimationEnd_() {
    const {LABEL_SHAKE} = MDCFloatingLabelFoundation.cssClasses;
    this.adapter_.removeClass(LABEL_SHAKE);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFloatingLabelFoundation);


/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/floating-label/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/floating-label/index.js ***!
  \**************************************************************************************/
/*! exports provided: MDCFloatingLabel, MDCFloatingLabelFoundation */
/*! exports used: MDCFloatingLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFloatingLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/select/node_modules/@material/floating-label/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/node_modules/@material/floating-label/foundation.js");
/* unused harmony reexport MDCFloatingLabelFoundation */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
 * @final
 */
class MDCFloatingLabel extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCFloatingLabel}
   */
  static attachTo(root) {
    return new MDCFloatingLabel(root);
  }

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake styles the label to shake by adding shake class
   * if true, otherwise will stop shaking by removing shake class.
   */
  shake(shouldShake) {
    this.foundation_.shake(shouldShake);
  }

  /**
   * Styles label to float/dock.
   * @param {boolean} shouldFloat styles the label to float by adding float class
   * if true, otherwise docks the label by removing the float class.
   */
  float(shouldFloat) {
    this.foundation_.float(shouldFloat);
  }

  /**
   * @return {number}
   */
  getWidth() {
    return this.foundation_.getWidth();
  }

  /**
   * @return {!MDCFloatingLabelFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      getWidth: () => this.root_.offsetWidth,
      registerInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
    });
  }
}




/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/notched-outline/adapter.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/notched-outline/adapter.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Notched Outline.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Notched Outline into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCNotchedOutlineAdapter {
  /**
   * Returns the width of the root element.
   * @return {number}
   */
  getWidth() {}

  /**
   * Returns the height of the root element.
   * @return {number}
   */
  getHeight() {}

  /**
   * Adds a class to the root element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the root element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Sets the "d" attribute of the outline element's SVG path.
   * @param {string} value
   */
  setOutlinePathAttr(value) {}

  /**
   * Returns the idle outline element's computed style value of the given css property `propertyName`.
   * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
   * @param {string} propertyName
   * @return {string}
   */
  getIdleOutlineStyleValue(propertyName) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCNotchedOutlineAdapter);


/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/notched-outline/constants.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/notched-outline/constants.js ***!
  \*******************************************************************************************/
/*! exports provided: cssClasses, strings */
/*! exports used: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings = {
  PATH_SELECTOR: '.mdc-notched-outline__path',
  IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle',
};

/** @enum {string} */
const cssClasses = {
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
};




/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/notched-outline/foundation.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/notched-outline/foundation.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/select/node_modules/@material/notched-outline/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
 * @final
 */
class MDCNotchedOutlineFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCNotchedOutlineAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCNotchedOutlineAdapter} */ ({
      getWidth: () => {},
      getHeight: () => {},
      addClass: () => {},
      removeClass: () => {},
      setOutlinePathAttr: () => {},
      getIdleOutlineStyleValue: () => {},
    });
  }

  /**
   * @param {!MDCNotchedOutlineAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCNotchedOutlineFoundation.defaultAdapter, adapter));
  }

  /**
   * Adds the outline notched selector and updates the notch width
   * calculated based off of notchWidth and isRtl.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   */
  notch(notchWidth, isRtl = false) {
    const {OUTLINE_NOTCHED} = MDCNotchedOutlineFoundation.cssClasses;
    this.adapter_.addClass(OUTLINE_NOTCHED);
    this.updateSvgPath_(notchWidth, isRtl);
  }

  /**
   * Removes notched outline selector to close the notch in the outline.
   */
  closeNotch() {
    const {OUTLINE_NOTCHED} = MDCNotchedOutlineFoundation.cssClasses;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
  }

  /**
   * Updates the SVG path of the focus outline element based on the notchWidth
   * and the RTL context.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   * @private
   */
  updateSvgPath_(notchWidth, isRtl) {
    // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
    const radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') ||
        this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
    const radius = parseFloat(radiusStyleValue);
    const width = this.adapter_.getWidth();
    const height = this.adapter_.getHeight();
    const cornerWidth = radius + 1.2;
    const leadingStrokeLength = Math.abs(11 - cornerWidth);
    const paddedNotchWidth = notchWidth + 8;

    // The right, bottom, and left sides of the outline follow the same SVG path.
    const pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius
      + 'v' + (height - (2 * cornerWidth))
      + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius
      + 'h' + (-width + (2 * cornerWidth))
      + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius
      + 'v' + (-height + (2 * cornerWidth))
      + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

    let path;
    if (!isRtl) {
      path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1
        + 'h' + (width - (2 * cornerWidth) - paddedNotchWidth - leadingStrokeLength)
        + pathMiddle
        + 'h' + leadingStrokeLength;
    } else {
      path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1
        + 'h' + leadingStrokeLength
        + pathMiddle
        + 'h' + (width - (2 * cornerWidth) - paddedNotchWidth - leadingStrokeLength);
    }

    this.adapter_.setOutlinePathAttr(path);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCNotchedOutlineFoundation);


/***/ }),

/***/ "./node_modules/@material/select/node_modules/@material/notched-outline/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/select/node_modules/@material/notched-outline/index.js ***!
  \***************************************************************************************/
/*! exports provided: MDCNotchedOutline, MDCNotchedOutlineFoundation */
/*! exports used: MDCNotchedOutline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCNotchedOutline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/select/node_modules/@material/notched-outline/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/node_modules/@material/notched-outline/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/node_modules/@material/notched-outline/constants.js");
/* unused harmony reexport MDCNotchedOutlineFoundation */
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */
class MDCNotchedOutline extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCNotchedOutline}
   */
  static attachTo(root) {
    return new MDCNotchedOutline(root);
  }

  /**
    * Updates outline selectors and SVG path to open notch.
    * @param {number} notchWidth The notch width in the outline.
    * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
    * will be right justified in outline path, otherwise left justified.
    */
  notch(notchWidth, isRtl) {
    this.foundation_.notch(notchWidth, isRtl);
  }

  /**
   * Updates the outline selectors to close notch and return it to idle state.
   */
  closeNotch() {
    this.foundation_.closeNotch();
  }

  /**
   * @return {!MDCNotchedOutlineFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      getWidth: () => this.root_.offsetWidth,
      getHeight: () => this.root_.offsetHeight,
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setOutlinePathAttr: (value) => {
        const path = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].PATH_SELECTOR);
        path.setAttribute('d', value);
      },
      getIdleOutlineStyleValue: (propertyName) => {
        const idleOutlineElement = this.root_.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].IDLE_OUTLINE_SELECTOR);
        return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
      },
    });
  }
}




/***/ }),

/***/ "./node_modules/@material/snackbar/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/snackbar/constants.js ***!
  \******************************************************/
/*! exports provided: cssClasses, strings, numbers */
/*! exports used: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cssClasses = {
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
  SHOW_EVENT: 'MDCSnackbar:show',
  HIDE_EVENT: 'MDCSnackbar:hide',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  MESSAGE_TIMEOUT: 2750,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),

/***/ "./node_modules/@material/snackbar/foundation.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/snackbar/foundation.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/snackbar/constants.js");
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCSnackbarFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      setAriaHidden: () => {},
      unsetAriaHidden: () => {},
      setActionAriaHidden: () => {},
      unsetActionAriaHidden: () => {},
      setActionText: (/* actionText: string */) => {},
      setMessageText: (/* message: string */) => {},
      setFocus: () => {},
      visibilityIsHidden: () => /* boolean */ false,
      registerCapturedBlurHandler: (/* handler: EventListener */) => {},
      deregisterCapturedBlurHandler: (/* handler: EventListener */) => {},
      registerVisibilityChangeHandler: (/* handler: EventListener */) => {},
      deregisterVisibilityChangeHandler: (/* handler: EventListener */) => {},
      registerCapturedInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterCapturedInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerActionClickHandler: (/* handler: EventListener */) => {},
      deregisterActionClickHandler: (/* handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
      notifyShow: () => {},
      notifyHide: () => {},
    };
  }

  get active() {
    return this.active_;
  }

  constructor(adapter) {
    super(Object.assign(MDCSnackbarFoundation.defaultAdapter, adapter));

    this.active_ = false;
    this.actionWasClicked_ = false;
    this.dismissOnAction_ = true;
    this.firstFocus_ = true;
    this.pointerDownRecognized_ = false;
    this.snackbarHasFocus_ = false;
    this.snackbarData_ = null;
    this.queue_ = [];
    this.actionClickHandler_ = () => {
      this.actionWasClicked_ = true;
      this.invokeAction_();
    };
    this.visibilitychangeHandler_ = () => {
      clearTimeout(this.timeoutId_);
      this.snackbarHasFocus_ = true;

      if (!this.adapter_.visibilityIsHidden()) {
        setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
      }
    };
    this.interactionHandler_ = (evt) => {
      if (evt.type == 'touchstart' || evt.type == 'mousedown') {
        this.pointerDownRecognized_ = true;
      }
      this.handlePossibleTabKeyboardFocus_(evt);

      if (evt.type == 'focus') {
        this.pointerDownRecognized_ = false;
      }
    };
    this.blurHandler_ = () => {
      clearTimeout(this.timeoutId_);
      this.snackbarHasFocus_ = false;
      this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
    };
  }

  init() {
    this.adapter_.registerActionClickHandler(this.actionClickHandler_);
    this.adapter_.setAriaHidden();
    this.adapter_.setActionAriaHidden();
  }

  destroy() {
    this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
    this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
      this.adapter_.deregisterCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  dismissesOnAction() {
    return this.dismissOnAction_;
  }

  setDismissOnAction(dismissOnAction) {
    this.dismissOnAction_ = !!dismissOnAction;
  }

  show(data) {
    if (!data) {
      throw new Error(
        'Please provide a data object with at least a message to display.');
    }
    if (!data.message) {
      throw new Error('Please provide a message to be displayed.');
    }
    if (data.actionHandler && !data.actionText) {
      throw new Error('Please provide action text with the handler.');
    }
    if (this.active) {
      this.queue_.push(data);
      return;
    }
    clearTimeout(this.timeoutId_);
    this.snackbarData_ = data;
    this.firstFocus_ = true;
    this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
    this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
      this.adapter_.registerCapturedInteractionHandler(evtType, this.interactionHandler_);
    });

    const {ACTIVE, MULTILINE, ACTION_ON_BOTTOM} = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];

    this.adapter_.setMessageText(this.snackbarData_.message);

    if (this.snackbarData_.multiline) {
      this.adapter_.addClass(MULTILINE);
      if (this.snackbarData_.actionOnBottom) {
        this.adapter_.addClass(ACTION_ON_BOTTOM);
      }
    }

    if (this.snackbarData_.actionHandler) {
      this.adapter_.setActionText(this.snackbarData_.actionText);
      this.actionHandler_ = this.snackbarData_.actionHandler;
      this.setActionHidden_(false);
    } else {
      this.setActionHidden_(true);
      this.actionHandler_ = null;
      this.adapter_.setActionText(null);
    }

    this.active_ = true;
    this.adapter_.addClass(ACTIVE);
    this.adapter_.unsetAriaHidden();
    this.adapter_.notifyShow();

    this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].MESSAGE_TIMEOUT);
  }

  handlePossibleTabKeyboardFocus_() {
    const hijackFocus =
      this.firstFocus_ && !this.pointerDownRecognized_;

    if (hijackFocus) {
      this.setFocusOnAction_();
    }

    this.firstFocus_ = false;
  }

  setFocusOnAction_() {
    this.adapter_.setFocus();
    this.snackbarHasFocus_ = true;
    this.firstFocus_ = false;
  }

  invokeAction_() {
    try {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    } finally {
      if (this.dismissOnAction_) {
        this.cleanup_();
      }
    }
  }

  cleanup_() {
    const allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;

    if (allowDismissal) {
      const {ACTIVE, MULTILINE, ACTION_ON_BOTTOM} = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];

      this.adapter_.removeClass(ACTIVE);

      const handler = () => {
        clearTimeout(this.timeoutId_);
        this.adapter_.deregisterTransitionEndHandler(handler);
        this.adapter_.removeClass(MULTILINE);
        this.adapter_.removeClass(ACTION_ON_BOTTOM);
        this.setActionHidden_(true);
        this.adapter_.setAriaHidden();
        this.active_ = false;
        this.snackbarHasFocus_ = false;
        this.adapter_.notifyHide();
        this.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  }

  showNext_() {
    if (!this.queue_.length) {
      return;
    }
    this.show(this.queue_.shift());
  }

  setActionHidden_(isHidden) {
    if (isHidden) {
      this.adapter_.setActionAriaHidden();
    } else {
      this.adapter_.unsetActionAriaHidden();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSnackbarFoundation;



/***/ }),

/***/ "./node_modules/@material/snackbar/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/snackbar/index.js ***!
  \**************************************************/
/*! exports provided: MDCSnackbarFoundation, MDCSnackbar */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/snackbar/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation_index__ = __webpack_require__(/*! @material/animation/index */ "./node_modules/@material/animation/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSnackbarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







class MDCSnackbar extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCSnackbar(root);
  }

  show(data) {
    this.foundation_.show(data);
  }

  getDefaultFoundation() {
    const {
      TEXT_SELECTOR,
      ACTION_BUTTON_SELECTOR,
    } = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;
    const getText = () => this.root_.querySelector(TEXT_SELECTOR);
    const getActionButton = () => this.root_.querySelector(ACTION_BUTTON_SELECTOR);

    /* eslint brace-style: "off" */
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setAriaHidden: () => this.root_.setAttribute('aria-hidden', 'true'),
      unsetAriaHidden: () => this.root_.removeAttribute('aria-hidden'),
      setActionAriaHidden: () => getActionButton().setAttribute('aria-hidden', 'true'),
      unsetActionAriaHidden: () => getActionButton().removeAttribute('aria-hidden'),
      setActionText: (text) => {getActionButton().textContent = text;},
      setMessageText: (text) => {getText().textContent = text;},
      setFocus: () => getActionButton().focus(),
      visibilityIsHidden: () => document.hidden,
      registerCapturedBlurHandler: (handler) => getActionButton().addEventListener('blur', handler, true),
      deregisterCapturedBlurHandler: (handler) => getActionButton().removeEventListener('blur', handler, true),
      registerVisibilityChangeHandler: (handler) => document.addEventListener('visibilitychange', handler),
      deregisterVisibilityChangeHandler: (handler) => document.removeEventListener('visibilitychange', handler),
      registerCapturedInteractionHandler: (evt, handler) =>
        document.body.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) =>
        document.body.removeEventListener(evt, handler, true),
      registerActionClickHandler: (handler) => getActionButton().addEventListener('click', handler),
      deregisterActionClickHandler: (handler) => getActionButton().removeEventListener('click', handler),
      registerTransitionEndHandler:
        (handler) => this.root_.addEventListener(Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a" /* getCorrectEventName */])(window, 'transitionend'), handler),
      deregisterTransitionEndHandler:
        (handler) => this.root_.removeEventListener(Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a" /* getCorrectEventName */])(window, 'transitionend'), handler),
      notifyShow: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.SHOW_EVENT),
      notifyHide: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.HIDE_EVENT),
    });
  }

  get dismissesOnAction() {
    return this.foundation_.dismissesOnAction();
  }

  set dismissesOnAction(dismissesOnAction) {
    this.foundation_.setDismissOnAction(dismissesOnAction);
  }
}
/* harmony export (immutable) */ __webpack_exports__["MDCSnackbar"] = MDCSnackbar;



/***/ }),

/***/ "./node_modules/@material/tab-bar/adapter.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/tab-bar/adapter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_tab_adapter__ = __webpack_require__(/*! @material/tab/adapter */ "./node_modules/@material/tab/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_tab_index__ = __webpack_require__(/*! @material/tab/index */ "./node_modules/@material/tab/index.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/* eslint no-unused-vars: [2, {"args": "none"}] */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * Adapter for MDC Tab Bar.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTabBarAdapter {
  /**
   * Scrolls to the given position
   * @param {number} scrollX The position to scroll to
   */
  scrollTo(scrollX) {}

  /**
   * Increments the current scroll position by the given amount
   * @param {number} scrollXIncrement The amount to increment scroll
   */
  incrementScroll(scrollXIncrement) {}

  /**
   * Returns the current scroll position
   * @return {number}
   */
  getScrollPosition() {}

  /**
   * Returns the width of the scroll content
   * @return {number}
   */
  getScrollContentWidth() {}

  /**
   * Returns the root element's offsetWidth
   * @return {number}
   */
  getOffsetWidth() {}

  /**
   * Returns if the Tab Bar language direction is RTL
   * @return {boolean}
   */
  isRTL() {}

  /**
   * Activates the tab at the given index with the given client rect
   * @param {number} index The index of the tab to activate
   * @param {!ClientRect} clientRect The client rect of the previously active Tab Indicator
   */
  activateTabAtIndex(index, clientRect) {}

  /**
   * Deactivates the tab at the given index
   * @param {number} index The index of the tab to activate
   */
  deactivateTabAtIndex(index) {}

  /**
   * Returns the client rect of the tab's indicator
   * @param {number} index The index of the tab
   * @return {!ClientRect}
   */
  getTabIndicatorClientRectAtIndex(index) {}

  /**
   * Returns the tab dimensions of the tab at the given index
   * @param {number} index The index of the tab
   * @return {!MDCTabDimensions}
   */
  getTabDimensionsAtIndex(index) {}

  /**
   * Returns the length of the tab list
   * @return {number}
   */
  getTabListLength() {}

  /**
   * Returns the index of the active tab
   * @return {number}
   */
  getActiveTabIndex() {}

  /**
   * Returns the index of the given tab
   * @param {!MDCTab} tab The tab whose index to determin
   * @return {number}
   */
  getIndexOfTab(tab) {}

  /**
   * Emits the MDCTabBar:activated event
   * @param {number} index The index of the activated tab
   */
  notifyTabActivated(index) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTabBarAdapter);


/***/ }),

/***/ "./node_modules/@material/tab-bar/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-bar/constants.js ***!
  \*****************************************************/
/*! exports provided: numbers, strings */
/*! exports used: numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

/** @enum {string} */
const strings = {
  TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
  TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
  TAB_SELECTOR: '.mdc-tab',
  END_KEY: 'End',
  HOME_KEY: 'Home',
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight',
};

/** @enum {number} */
const numbers = {
  EXTRA_SCROLL_AMOUNT: 20,
  END_KEYCODE: 35,
  HOME_KEYCODE: 36,
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
};




/***/ }),

/***/ "./node_modules/@material/tab-bar/foundation.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/tab-bar/foundation.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-bar/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-bar/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_tab_foundation__ = __webpack_require__(/*! @material/tab/foundation */ "./node_modules/@material/tab/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_tab_adapter__ = __webpack_require__(/*! @material/tab/adapter */ "./node_modules/@material/tab/adapter.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/






/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @type {Set<string>}
 */
const ACCEPTABLE_KEYS = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].END_KEY);
ACCEPTABLE_KEYS.add(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].HOME_KEY);

/**
 * @type {Map<number, string>}
 */
const KEYCODE_MAP = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this by hand
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].HOME_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].HOME_KEY);
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].END_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].END_KEY);
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].ARROW_LEFT_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_LEFT_KEY);
KEYCODE_MAP.set(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].ARROW_RIGHT_KEYCODE, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_RIGHT_KEY);

/**
 * @extends {MDCFoundation<!MDCTabBarAdapter>}
 * @final
 */
class MDCTabBarFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  /** @return enum {number} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */];
  }

  /**
   * @see MDCTabBarAdapter for typing information
   * @return {!MDCTabBarAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTabBarAdapter} */ ({
      scrollTo: () => {},
      incrementScroll: () => {},
      getScrollPosition: () => {},
      getScrollContentWidth: () => {},
      getOffsetWidth: () => {},
      isRTL: () => {},
      activateTabAtIndex: () => {},
      deactivateTabAtIndex: () => {},
      getTabIndicatorClientRectAtIndex: () => {},
      getTabDimensionsAtIndex: () => {},
      getActiveTabIndex: () => {},
      getIndexOfTab: () => {},
      getTabListLength: () => {},
      notifyTabActivated: () => {},
    });
  }

  /**
   * @param {!MDCTabBarAdapter} adapter
   * */
  constructor(adapter) {
    super(Object.assign(MDCTabBarFoundation.defaultAdapter, adapter));
  }

  init() {
    const activeIndex = this.adapter_.getActiveTabIndex();
    this.scrollIntoView(activeIndex);
  }

  /**
   * Activates the tab at the given index
   * @param {number} index
   */
  activateTab(index) {
    const previousActiveIndex = this.adapter_.getActiveTabIndex();
    if (!this.indexIsInRange_(index)) {
      return;
    }

    this.adapter_.deactivateTabAtIndex(previousActiveIndex);
    this.adapter_.activateTabAtIndex(index, this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex));
    this.scrollIntoView(index);

    // Only notify the tab activation if the index is different than the previously active index
    if (index !== previousActiveIndex) {
      this.adapter_.notifyTabActivated(index);
    }
  }

  /**
   * Handles the keydown event
   * @param {!Event} evt
   */
  handleKeyDown(evt) {
    // Get the key from the event
    const key = this.getKeyFromEvent_(evt);

    // Early exit if the event key isn't one of the keyboard navigation keys
    if (key === undefined) {
      return;
    }

    evt.preventDefault();
    this.activateTabFromKey_(key);
  }

  /**
   * Handles the MDCTab:interacted event
   * @param {!Event} evt
   */
  handleTabInteraction(evt) {
    this.activateTab(this.adapter_.getIndexOfTab(evt.detail.tab));
  }

  /**
   * Scrolls the tab at the given index into view
   * @param {number} index The tab index to make visible
   */
  scrollIntoView(index) {
    // Early exit if the index is out of range
    if (!this.indexIsInRange_(index)) {
      return;
    }

    // Always scroll to 0 if scrolling to the 0th index
    if (index === 0) {
      return this.adapter_.scrollTo(0);
    }

    // Always scroll to the max value if scrolling to the Nth index
    // MDCTabScroller.scrollTo() will never scroll past the max possible value
    if (index === this.adapter_.getTabListLength() - 1) {
      return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
    }

    if (this.isRTL_()) {
      return this.scrollIntoViewRTL_(index);
    }

    this.scrollIntoView_(index);
  }

  /**
   * Private method for activating a tab from a key
   * @param {string} key The name of the key
   * @private
   */
  activateTabFromKey_(key) {
    const isRTL = this.isRTL_();
    const maxTabIndex = this.adapter_.getTabListLength() - 1;
    const shouldGoToEnd = key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].END_KEY;
    const shouldDecrement = key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_LEFT_KEY && !isRTL || key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_RIGHT_KEY && isRTL;
    const shouldIncrement = key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_RIGHT_KEY && !isRTL || key === __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].ARROW_LEFT_KEY && isRTL;
    let tabIndex = this.adapter_.getActiveTabIndex();

    if (shouldGoToEnd) {
      tabIndex = maxTabIndex;
    } else if (shouldDecrement) {
      tabIndex -= 1;
    } else if (shouldIncrement) {
      tabIndex += 1;
    } else {
      tabIndex = 0;
    }

    if (tabIndex < 0) {
      tabIndex = maxTabIndex;
    } else if (tabIndex > maxTabIndex) {
      tabIndex = 0;
    }

    this.activateTab(tabIndex);
  }

  /**
   * Calculates the scroll increment that will make the tab at the given index visible
   * @param {number} index The index of the tab
   * @param {number} nextIndex The index of the next tab
   * @param {number} scrollPosition The current scroll position
   * @param {number} barWidth The width of the Tab Bar
   * @return {number}
   * @private
   */
  calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth) {
    const nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
    const relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
    const relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
    const leftIncrement = relativeContentRight - __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].EXTRA_SCROLL_AMOUNT;
    const rightIncrement = relativeContentLeft + __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].EXTRA_SCROLL_AMOUNT;

    if (nextIndex < index) {
      return Math.min(leftIncrement, 0);
    }

    return Math.max(rightIncrement, 0);
  }

  /**
   * Calculates the scroll increment that will make the tab at the given index visible in RTL
   * @param {number} index The index of the tab
   * @param {number} nextIndex The index of the next tab
   * @param {number} scrollPosition The current scroll position
   * @param {number} barWidth The width of the Tab Bar
   * @param {number} scrollContentWidth The width of the scroll content
   * @return {number}
   * @private
   */
  calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollContentWidth, ) {
    const nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
    const relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
    const relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
    const leftIncrement = relativeContentRight + __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].EXTRA_SCROLL_AMOUNT;
    const rightIncrement = relativeContentLeft - __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* numbers */].EXTRA_SCROLL_AMOUNT;

    if (nextIndex > index) {
      return Math.max(leftIncrement, 0);
    }

    return Math.min(rightIncrement, 0);
  }

  /**
   * Determines the index of the adjacent tab closest to either edge of the Tab Bar
   * @param {number} index The index of the tab
   * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
   * @param {number} scrollPosition The current scroll position
   * @param {number} barWidth The width of the tab bar
   * @return {number}
   * @private
   */
  findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth) {
    /**
     * Tabs are laid out in the Tab Scroller like this:
     *
     *    Scroll Position
     *    +---+
     *    |   |   Bar Width
     *    |   +-----------------------------------+
     *    |   |                                   |
     *    |   V                                   V
     *    |   +-----------------------------------+
     *    V   |             Tab Scroller          |
     *    +------------+--------------+-------------------+
     *    |    Tab     |      Tab     |        Tab        |
     *    +------------+--------------+-------------------+
     *        |                                   |
     *        +-----------------------------------+
     *
     * To determine the next adjacent index, we look at the Tab root left and
     * Tab root right, both relative to the scroll position. If the Tab root
     * left is less than 0, then we know it's out of view to the left. If the
     * Tab root right minus the bar width is greater than 0, we know the Tab is
     * out of view to the right. From there, we either increment or decrement
     * the index.
     */
    const relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
    const relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
    const relativeRootDelta = relativeRootLeft + relativeRootRight;
    const leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
    const rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;

    if (leftEdgeIsCloser) {
      return index - 1;
    }

    if (rightEdgeIsCloser) {
      return index + 1;
    }

    return -1;
  }

  /**
   * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
   * @param {number} index The index of the tab
   * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
   * @param {number} scrollPosition The current scroll position
   * @param {number} barWidth The width of the tab bar
   * @param {number} scrollContentWidth The width of the scroller content
   * @return {number}
   * @private
   */
  findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
    const rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
    const rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
    const rootDelta = rootLeft + rootRight;
    const leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
    const rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;

    if (leftEdgeIsCloser) {
      return index + 1;
    }

    if (rightEdgeIsCloser) {
      return index - 1;
    }

    return -1;
  }

  /**
   * Returns the key associated with a keydown event
   * @param {!Event} evt The keydown event
   * @return {string}
   * @private
   */
  getKeyFromEvent_(evt) {
    if (ACCEPTABLE_KEYS.has(evt.key)) {
      return evt.key;
    }

    return KEYCODE_MAP.get(evt.keyCode);
  }

  /**
   * Returns whether a given index is inclusively between the ends
   * @param {number} index The index to test
   * @private
   */
  indexIsInRange_(index) {
    return index >= 0 && index < this.adapter_.getTabListLength();
  }

  /**
   * Returns the view's RTL property
   * @return {boolean}
   * @private
   */
  isRTL_() {
    return this.adapter_.isRTL();
  }

  /**
   * Scrolls the tab at the given index into view for left-to-right useragents
   * @param {number} index The index of the tab to scroll into view
   * @private
   */
  scrollIntoView_(index) {
    const scrollPosition = this.adapter_.getScrollPosition();
    const barWidth = this.adapter_.getOffsetWidth();
    const tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
    const nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);

    if (!this.indexIsInRange_(nextIndex)) {
      return;
    }

    const scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
    this.adapter_.incrementScroll(scrollIncrement);
  }

  /**
   * Scrolls the tab at the given index into view in RTL
   * @param {number} index The tab index to make visible
   * @private
   */
  scrollIntoViewRTL_(index) {
    const scrollPosition = this.adapter_.getScrollPosition();
    const barWidth = this.adapter_.getOffsetWidth();
    const tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
    const scrollWidth = this.adapter_.getScrollContentWidth();
    const nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(
      index, tabDimensions, scrollPosition, barWidth, scrollWidth);

    if (!this.indexIsInRange_(nextIndex)) {
      return;
    }

    const scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
    this.adapter_.incrementScroll(scrollIncrement);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTabBarFoundation);


/***/ }),

/***/ "./node_modules/@material/tab-bar/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab-bar/index.js ***!
  \*************************************************/
/*! exports provided: MDCTabBar, MDCTabBarFoundation */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabBar", function() { return MDCTabBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_tab_index__ = __webpack_require__(/*! @material/tab/index */ "./node_modules/@material/tab/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_tab_scroller_index__ = __webpack_require__(/*! @material/tab-scroller/index */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-bar/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-bar/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabBarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_4__foundation__["a"]; });
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */









/**
 * @extends {MDCComponent<!MDCTabBarFoundation>}
 * @final
 */
class MDCTabBar extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);

    /** @private {!Array<!MDCTab>} */
    this.tabList_;

    /** @type {(function(!Element): !MDCTab)} */
    this.tabFactory_;

    /** @private {?MDCTabScroller} */
    this.tabScroller_;

    /** @type {(function(!Element): !MDCTabScroller)} */
    this.tabScrollerFactory_;

    /** @private {?function(?Event): undefined} */
    this.handleTabInteraction_;

    /** @private {?function(?Event): undefined} */
    this.handleKeyDown_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTabBar}
   */
  static attachTo(root) {
    return new MDCTabBar(root);
  }

  /**
   * @param {(function(!Element): !MDCTab)=} tabFactory A function which creates a new MDCTab
   * @param {(function(!Element): !MDCTabScroller)=} tabScrollerFactory A function which creates a new MDCTabScroller
   */
  initialize(
    tabFactory = (el) => new __WEBPACK_IMPORTED_MODULE_1__material_tab_index__["a" /* MDCTab */](el),
    tabScrollerFactory = (el) => new __WEBPACK_IMPORTED_MODULE_2__material_tab_scroller_index__["a" /* MDCTabScroller */](el),
  ) {
    this.tabFactory_ = tabFactory;
    this.tabScrollerFactory_ = tabScrollerFactory;

    const tabElements = [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.TAB_SELECTOR));
    this.tabList_ = tabElements.map((el) => this.tabFactory_(el));

    const tabScrollerElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.TAB_SCROLLER_SELECTOR);
    if (tabScrollerElement) {
      this.tabScroller_ = this.tabScrollerFactory_(tabScrollerElement);
    }
  }

  initialSyncWithDOM() {
    this.handleTabInteraction_ = (evt) => this.foundation_.handleTabInteraction(evt);
    this.handleKeyDown_ = (evt) => this.foundation_.handleKeyDown(evt);

    this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_1__material_tab_index__["b" /* MDCTabFoundation */].strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.root_.addEventListener('keydown', this.handleKeyDown_);
  }

  destroy() {
    super.destroy();
    this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_1__material_tab_index__["b" /* MDCTabFoundation */].strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.root_.removeEventListener('keydown', this.handleKeyDown_);
    this.tabList_.forEach((tab) => tab.destroy());
    this.tabScroller_.destroy();
  }

  /**
   * @return {!MDCTabBarFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */](
      /** @type {!MDCTabBarAdapter} */ ({
        scrollTo: (scrollX) => this.tabScroller_.scrollTo(scrollX),
        incrementScroll: (scrollXIncrement) => this.tabScroller_.incrementScroll(scrollXIncrement),
        getScrollPosition: () => this.tabScroller_.getScrollPosition(),
        getScrollContentWidth: () => this.tabScroller_.getScrollContentWidth(),
        getOffsetWidth: () => this.root_.offsetWidth,
        isRTL: () => window.getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
        activateTabAtIndex: (index, clientRect) => this.tabList_[index].activate(clientRect),
        deactivateTabAtIndex: (index) => this.tabList_[index].deactivate(),
        getTabIndicatorClientRectAtIndex: (index) => this.tabList_[index].computeIndicatorClientRect(),
        getTabDimensionsAtIndex: (index) => this.tabList_[index].computeDimensions(),
        getActiveTabIndex: () => {
          for (let i = 0; i < this.tabList_.length; i++) {
            if (this.tabList_[i].active) {
              return i;
            }
          }
          return -1;
        },
        getIndexOfTab: (tabToFind) => this.tabList_.indexOf(tabToFind),
        getTabListLength: () => this.tabList_.length,
        notifyTabActivated: (index) => this.emit(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.TAB_ACTIVATED_EVENT, {index}, true),
      })
    );
  }

  /**
   * Activates the tab at the given index
   * @param {number} index The index of the tab
   */
  activateTab(index) {
    this.foundation_.activateTab(index);
  }

  /**
   * Scrolls the tab at the given index into view
   * @param {number} index THe index of the tab
   */
  scrollIntoView(index) {
    this.foundation_.scrollIntoView(index);
  }
}




/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/adapter.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/adapter.js ***!
  \***************************************************************************************/
/*! exports provided: MDCTabScrollerAnimation, MDCTabScrollerHorizontalEdges, MDCTabScrollerAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCTabScrollerAnimation */
/* unused harmony export MDCTabScrollerHorizontalEdges */
/* unused harmony export MDCTabScrollerAdapter */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * MDCTabScrollerAnimation contains the values required for animating from the
 * current scroll position to the new scroll position. The "finalScrollPosition"
 * value represents the new scroll position while the "scrollDelta" value is the
 * corresponding transformation that is applied to the scroll content. Together,
 * they create the animation by first updating the scroll value then applying
 * the transformation and animating the transition. Both pieces are necessary
 * for the scroll animation to work. The values are used as-is by the tab
 * scroller animation method, ensuring that all logic for determining scroll
 * position or transformation is abstracted away from the animation method.
 * @typedef {{finalScrollPosition: number, scrollDelta: number}}
 */
let MDCTabScrollerAnimation;

/**
 * MDCTabScrollerHorizontalEdges represents the left and right edges of the
 * scroll content. These values vary depending on how scrolling in RTL is
 * implemented by the browser. One value is always 0 and one value is always
 * the max scrollable value as either a positive or negative integer.
 * @typedef {{left: number, right: number}}
 */
let MDCTabScrollerHorizontalEdges;

/**
 * Adapter for MDC Tab Scroller.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTabScrollerAdapter {
  /**
   * Adds the given className to the root element.
   * @param {string} className The className to add
   */
  addClass(className) {}

  /**
   * Removes the given className from the root element.
   * @param {string} className The className to remove
   */
  removeClass(className) {}

  /**
   * Adds the given className to the scroll area element.
   * @param {string} className The className to add
   */
  addScrollAreaClass(className) {}

  /**
   * Returns whether the event target matches given className.
   * @param {EventTarget} evtTarget The event target
   * @param {string} selector The selector to check
   * @return {boolean}
   */
  eventTargetMatchesSelector(evtTarget, selector) {}

  /**
   * Sets a style property of the area element to the passed value.
   * @param {string} propName The style property name to set
   * @param {string} value The style property value
   */
  setScrollAreaStyleProperty(propName, value) {}

  /**
   * Sets a style property of the content element to the passed value.
   * @param {string} propName The style property name to set
   * @param {string} value The style property value
   */
  setScrollContentStyleProperty(propName, value) {}

  /**
   * Returns the scroll content element's computed style value of the given css property `propertyName`.
   * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
   * @param {string} propertyName
   * @return {string}
   */
  getScrollContentStyleValue(propertyName) {}

  /**
   * Sets the scrollLeft value of the scroll area element to the passed value.
   * @param {number} scrollLeft The new scrollLeft value
   */
  setScrollAreaScrollLeft(scrollLeft) {}

  /**
   * Returns the scrollLeft value of the scroll area element.
   * @return {number}
   */
  getScrollAreaScrollLeft() {}

  /**
   * Returns the offsetWidth of the scroll content element.
   * @return {number}
   */
  getScrollContentOffsetWidth() {}

  /**
   * Returns the offsetWitdth of the scroll area element.
   * @return {number}
   */
  getScrollAreaOffsetWidth() {}

  /**
   * Returns the bounding client rect of the scroll area element.
   * @return {!ClientRect}
   */
  computeScrollAreaClientRect() {}

  /**
   * Returns the bounding client rect of the scroll content element.
   * @return {!ClientRect}
   */
  computeScrollContentClientRect() {}

  /**
   * Returns the height of the browser's horizontal scrollbars (in px).
   * @return {number}
   */
  computeHorizontalScrollbarHeight() {}
}




/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/constants.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/constants.js ***!
  \*****************************************************************************************/
/*! exports provided: cssClasses, strings */
/*! exports used: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/** @enum {string} */
const cssClasses = {
  ANIMATING: 'mdc-tab-scroller--animating',
  SCROLL_TEST: 'mdc-tab-scroller__test',
  SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
};

/** @enum {string} */
const strings = {
  AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
  CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content',
};




/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/foundation.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/foundation.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rtl_scroller__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rtl_default_scroller__ = __webpack_require__(/*! ./rtl-default-scroller */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-default-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rtl_negative_scroller__ = __webpack_require__(/*! ./rtl-negative-scroller */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-negative-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rtl_reverse_scroller__ = __webpack_require__(/*! ./rtl-reverse-scroller */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-reverse-scroller.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/



/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */




/**
 * @extends {MDCFoundation<!MDCTabScrollerAdapter>}
 * @final
 */
class MDCTabScrollerFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  /**
   * @see MDCTabScrollerAdapter for typing information
   * @return {!MDCTabScrollerAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTabScrollerAdapter} */ ({
      eventTargetMatchesSelector: () => {},
      addClass: () => {},
      removeClass: () => {},
      addScrollAreaClass: () => {},
      setScrollAreaStyleProperty: () => {},
      setScrollContentStyleProperty: () => {},
      getScrollContentStyleValue: () => {},
      setScrollAreaScrollLeft: () => {},
      getScrollAreaScrollLeft: () => {},
      getScrollContentOffsetWidth: () => {},
      getScrollAreaOffsetWidth: () => {},
      computeScrollAreaClientRect: () => {},
      computeScrollContentClientRect: () => {},
      computeHorizontalScrollbarHeight: () => {},
    });
  }

  /** @param {!MDCTabScrollerAdapter} adapter */
  constructor(adapter) {
    super(Object.assign(MDCTabScrollerFoundation.defaultAdapter, adapter));

    /**
     * This boolean controls whether we should handle the transitionend and interaction events during the animation.
     * @private {boolean}
     */
    this.isAnimating_ = false;

    /**
     * The MDCTabScrollerRTL instance varies per browser and allows us to encapsulate the peculiar browser behavior
     * of RTL scrolling in it's own class.
     * @private {?MDCTabScrollerRTL}
     */
    this.rtlScrollerInstance_;
  }

  init() {
    // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
    // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
    const horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
    this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
    this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
  }

  /**
   * Computes the current visual scroll position
   * @return {number}
   */
  getScrollPosition() {
    if (this.isRTL_()) {
      return this.computeCurrentScrollPositionRTL_();
    }

    const currentTranslateX = this.calculateCurrentTranslateX_();
    const scrollLeft = this.adapter_.getScrollAreaScrollLeft();
    return scrollLeft - currentTranslateX;
  }

  /**
   * Handles interaction events that occur during transition
   */
  handleInteraction() {
    // Early exit if we aren't animating
    if (!this.isAnimating_) {
      return;
    }

    // Prevent other event listeners from handling this event
    this.stopScrollAnimation_();
  }

  /**
   * Handles the transitionend event
   * @param {!Event} evt
   */
  handleTransitionEnd(evt) {
    // Early exit if we aren't animating or the event was triggered by a different element.
    if (!this.isAnimating_
      || !this.adapter_.eventTargetMatchesSelector(evt.target, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
      return;
    }

    this.isAnimating_ = false;
    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
  }

  /**
   * Increment the scroll value by the scrollXIncrement
   * @param {number} scrollXIncrement The value by which to increment the scroll position
   */
  incrementScroll(scrollXIncrement) {
    // Early exit for non-operational increment values
    if (scrollXIncrement === 0) {
      return;
    }

    if (this.isRTL_()) {
      return this.incrementScrollRTL_(scrollXIncrement);
    }

    this.incrementScroll_(scrollXIncrement);
  }

  /**
   * Scrolls to the given scrollX value
   * @param {number} scrollX
   */
  scrollTo(scrollX) {
    if (this.isRTL_()) {
      return this.scrollToRTL_(scrollX);
    }

    this.scrollTo_(scrollX);
  }

  /**
   * Returns the appropriate version of the MDCTabScrollerRTL
   * @return {!MDCTabScrollerRTL}
   */
  getRTLScroller() {
    if (!this.rtlScrollerInstance_) {
      this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
    }

    return this.rtlScrollerInstance_;
  }

  /**
   * Returns the translateX value from a CSS matrix transform function string
   * @return {number}
   * @private
   */
  calculateCurrentTranslateX_() {
    const transformValue = this.adapter_.getScrollContentStyleValue('transform');
    // Early exit if no transform is present
    if (transformValue === 'none') {
      return 0;
    }

    // The transform value comes back as a matrix transformation in the form
    // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
    // we're going to grab all the parenthesized values, strip out tx, and
    // parse it.
    const results = /\((.+)\)/.exec(transformValue)[1];
    const parts = results.split(',');
    return parseFloat(parts[4]);
  }

  /**
   * Calculates a safe scroll value that is > 0 and < the max scroll value
   * @param {number} scrollX The distance to scroll
   * @return {number}
   * @private
   */
  clampScrollValue_(scrollX) {
    const edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  }

  /**
   * @return {number}
   * @private
   */
  computeCurrentScrollPositionRTL_() {
    const translateX = this.calculateCurrentTranslateX_();
    return this.getRTLScroller().getScrollPositionRTL(translateX);
  }

  /**
   * @return {!MDCTabScrollerHorizontalEdges}
   * @private
   */
  calculateScrollEdges_() {
    const contentWidth = this.adapter_.getScrollContentOffsetWidth();
    const rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return /** @type {!MDCTabScrollerHorizontalEdges} */ ({
      left: 0,
      right: contentWidth - rootWidth,
    });
  }

  /**
   * Internal scroll method
   * @param {number} scrollX The new scroll position
   * @private
   */
  scrollTo_(scrollX) {
    const currentScrollX = this.getScrollPosition();
    const safeScrollX = this.clampScrollValue_(scrollX);
    const scrollDelta = safeScrollX - currentScrollX;
    this.animate_(/** @type {!MDCTabScrollerAnimation} */ ({
      finalScrollPosition: safeScrollX,
      scrollDelta: scrollDelta,
    }));
  }

  /**
   * Internal RTL scroll method
   * @param {number} scrollX The new scroll position
   * @private
   */
  scrollToRTL_(scrollX) {
    const animation = this.getRTLScroller().scrollToRTL(scrollX);
    this.animate_(animation);
  }

  /**
   * Internal increment scroll method
   * @param {number} scrollX The new scroll position increment
   * @private
   */
  incrementScroll_(scrollX) {
    const currentScrollX = this.getScrollPosition();
    const targetScrollX = scrollX + currentScrollX;
    const safeScrollX = this.clampScrollValue_(targetScrollX);
    const scrollDelta = safeScrollX - currentScrollX;
    this.animate_(/** @type {!MDCTabScrollerAnimation} */ ({
      finalScrollPosition: safeScrollX,
      scrollDelta: scrollDelta,
    }));
  }

  /**
   * Internal incremenet scroll RTL method
   * @param {number} scrollX The new scroll position RTL increment
   * @private
   */
  incrementScrollRTL_(scrollX) {
    const animation = this.getRTLScroller().incrementScrollRTL(scrollX);
    this.animate_(animation);
  }

  /**
   * Animates the tab scrolling
   * @param {!MDCTabScrollerAnimation} animation The animation to apply
   * @private
   */
  animate_(animation) {
    // Early exit if translateX is 0, which means there's no animation to perform
    if (animation.scrollDelta === 0) {
      return;
    }

    this.stopScrollAnimation_();
    // This animation uses the FLIP approach.
    // Read more here: https://aerotwist.com/blog/flip-your-animations/
    this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
    this.adapter_.setScrollContentStyleProperty('transform', `translateX(${animation.scrollDelta}px)`);
    // Force repaint
    this.adapter_.computeScrollAreaClientRect();

    requestAnimationFrame(() => {
      this.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
      this.adapter_.setScrollContentStyleProperty('transform', 'none');
    });

    this.isAnimating_ = true;
  }

  /**
   * Stops scroll animation
   * @private
   */
  stopScrollAnimation_() {
    this.isAnimating_ = false;
    const currentScrollPosition = this.getAnimatingScrollPosition_();
    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
    this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
  }

  /**
   * Gets the current scroll position during animation
   * @return {number}
   * @private
   */
  getAnimatingScrollPosition_() {
    const currentTranslateX = this.calculateCurrentTranslateX_();
    const scrollLeft = this.adapter_.getScrollAreaScrollLeft();
    if (this.isRTL_()) {
      return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
    }

    return scrollLeft - currentTranslateX;
  }

  /**
   * Determines the RTL Scroller to use
   * @return {!MDCTabScrollerRTL}
   * @private
   */
  rtlScrollerFactory_() {
    // Browsers have three different implementations of scrollLeft in RTL mode,
    // dependent on the browser. The behavior is based off the max LTR
    // scrollleft value and 0.
    //
    // * Default scrolling in RTL *
    //    - Left-most value: 0
    //    - Right-most value: Max LTR scrollLeft value
    //
    // * Negative scrolling in RTL *
    //    - Left-most value: Negated max LTR scrollLeft value
    //    - Right-most value: 0
    //
    // * Reverse scrolling in RTL *
    //    - Left-most value: Max LTR scrollLeft value
    //    - Right-most value: 0
    //
    // We use those principles below to determine which RTL scrollLeft
    // behavior is implemented in the current browser.
    const initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
    const newScrollLeft = this.adapter_.getScrollAreaScrollLeft();

    // If the newScrollLeft value is negative,then we know that the browser has
    // implemented negative RTL scrolling, since all other implementations have
    // only positive values.
    if (newScrollLeft < 0) {
      // Undo the scrollLeft test check
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
      return new __WEBPACK_IMPORTED_MODULE_5__rtl_negative_scroller__["a" /* default */](this.adapter_);
    }

    const rootClientRect = this.adapter_.computeScrollAreaClientRect();
    const contentClientRect = this.adapter_.computeScrollContentClientRect();
    const rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
    // Undo the scrollLeft test check
    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);

    // By calculating the clientRect of the root element and the clientRect of
    // the content element, we can determine how much the scroll value changed
    // when we performed the scrollLeft subtraction above.
    if (rightEdgeDelta === newScrollLeft) {
      return new __WEBPACK_IMPORTED_MODULE_6__rtl_reverse_scroller__["a" /* default */](this.adapter_);
    }

    return new __WEBPACK_IMPORTED_MODULE_4__rtl_default_scroller__["a" /* default */](this.adapter_);
  }

  /**
   * @return {boolean}
   * @private
   */
  isRTL_() {
    return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerFoundation);


/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/index.js ***!
  \*************************************************************************************/
/*! exports provided: MDCTabScroller, MDCTabScrollerFoundation, util */
/*! exports used: MDCTabScroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabScroller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/util.js");
/* unused harmony reexport MDCTabScrollerFoundation */
/* unused harmony reexport util */
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/







/**
 * @extends {MDCComponent<!MDCTabScrollerFoundation>}
 * @final
 */
class MDCTabScroller extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCTabScroller}
   */
  static attachTo(root) {
    return new MDCTabScroller(root);
  }

  constructor(...args) {
    super(...args);

    /** @private {?Element} */
    this.content_;

    /** @private {?Element} */
    this.area_;

    /** @private {?function(?Event): undefined} */
    this.handleInteraction_;

    /** @private {?function(!Event): undefined} */
    this.handleTransitionEnd_;
  }

  initialize() {
    this.area_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.AREA_SELECTOR);
    this.content_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CONTENT_SELECTOR);
  }

  initialSyncWithDOM() {
    this.handleInteraction_ = () => this.foundation_.handleInteraction();
    this.handleTransitionEnd_ = (evt) => this.foundation_.handleTransitionEnd(evt);

    this.area_.addEventListener('wheel', this.handleInteraction_);
    this.area_.addEventListener('touchstart', this.handleInteraction_);
    this.area_.addEventListener('pointerdown', this.handleInteraction_);
    this.area_.addEventListener('mousedown', this.handleInteraction_);
    this.area_.addEventListener('keydown', this.handleInteraction_);
    this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
  }

  destroy() {
    super.destroy();

    this.area_.removeEventListener('wheel', this.handleInteraction_);
    this.area_.removeEventListener('touchstart', this.handleInteraction_);
    this.area_.removeEventListener('pointerdown', this.handleInteraction_);
    this.area_.removeEventListener('mousedown', this.handleInteraction_);
    this.area_.removeEventListener('keydown', this.handleInteraction_);
    this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
  }

  /**
   * @return {!MDCTabScrollerFoundation}
   */
  getDefaultFoundation() {
    const adapter = /** @type {!MDCTabScrollerAdapter} */ ({
      eventTargetMatchesSelector: (evtTarget, selector) => {
        const MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* getMatchesProperty */](HTMLElement.prototype);
        return evtTarget[MATCHES](selector);
      },
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addScrollAreaClass: (className) => this.area_.classList.add(className),
      setScrollAreaStyleProperty: (prop, value) => this.area_.style.setProperty(prop, value),
      setScrollContentStyleProperty: (prop, value) => this.content_.style.setProperty(prop, value),
      getScrollContentStyleValue: (propName) => window.getComputedStyle(this.content_).getPropertyValue(propName),
      setScrollAreaScrollLeft: (scrollX) => this.area_.scrollLeft = scrollX,
      getScrollAreaScrollLeft: () => this.area_.scrollLeft,
      getScrollContentOffsetWidth: () => this.content_.offsetWidth,
      getScrollAreaOffsetWidth: () => this.area_.offsetWidth,
      computeScrollAreaClientRect: () => this.area_.getBoundingClientRect(),
      computeScrollContentClientRect: () => this.content_.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => __WEBPACK_IMPORTED_MODULE_3__util__["a" /* computeHorizontalScrollbarHeight */](document),
    });

    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](adapter);
  }

  /**
   * Returns the current visual scroll position
   * @return {number}
   */
  getScrollPosition() {
    return this.foundation_.getScrollPosition();
  }

  /**
   * Returns the width of the scroll content
   * @return {number}
   */
  getScrollContentWidth() {
    return this.content_.offsetWidth;
  }

  /**
   * Increments the scroll value by the given amount
   * @param {number} scrollXIncrement The pixel value by which to increment the scroll value
   */
  incrementScroll(scrollXIncrement) {
    this.foundation_.incrementScroll(scrollXIncrement);
  }

  /**
   * Scrolls to the given pixel position
   * @param {number} scrollX The pixel value to scroll to
   */
  scrollTo(scrollX) {
    this.foundation_.scrollTo(scrollX);
  }
}




/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-default-scroller.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-default-scroller.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/adapter.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */
class MDCTabScrollerRTLDefault extends __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__["a" /* default */] {
  /**
   * @return {number}
   */
  getScrollPositionRTL() {
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    const {right} = this.calculateScrollEdges_();
    // Scroll values on most browsers are ints instead of floats so we round
    return Math.round(right - currentScrollLeft);
  }

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   */
  scrollToRTL(scrollX) {
    const edges = this.calculateScrollEdges_();
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    const clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
    return /** @type {!MDCTabScrollerAnimation} */ ({
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft,
    });
  }

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   */
  incrementScrollRTL(scrollX) {
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    const clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
    return /** @type {!MDCTabScrollerAnimation} */ ({
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft,
    });
  }

  /**
   * @param {number} scrollX
   * @return {number}
   */
  getAnimatingScrollPosition(scrollX) {
    return scrollX;
  }

  /**
   * @return {!MDCTabScrollerHorizontalEdges}
   * @private
   */
  calculateScrollEdges_() {
    const contentWidth = this.adapter_.getScrollContentOffsetWidth();
    const rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return /** @type {!MDCTabScrollerHorizontalEdges} */ ({
      left: 0,
      right: contentWidth - rootWidth,
    });
  }

  /**
   * @param {number} scrollX
   * @return {number}
   * @private
   */
  clampScrollValue_(scrollX) {
    const edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerRTLDefault);


/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-negative-scroller.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-negative-scroller.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/adapter.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */
class MDCTabScrollerRTLNegative extends __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__["a" /* default */] {
  /**
   * @param {number} translateX The current translateX position
   * @return {number}
   */
  getScrollPositionRTL(translateX) {
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    return Math.round(translateX - currentScrollLeft);
  }

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   */
  scrollToRTL(scrollX) {
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    const clampedScrollLeft = this.clampScrollValue_(-scrollX);
    return /** @type {!MDCTabScrollerAnimation} */ ({
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft,
    });
  }

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   */
  incrementScrollRTL(scrollX) {
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    const clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
    return /** @type {!MDCTabScrollerAnimation} */ ({
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft,
    });
  }

  /**
   * @param {number} scrollX
   * @param {number} translateX
   * @return {number}
   */
  getAnimatingScrollPosition(scrollX, translateX) {
    return scrollX - translateX;
  }

  /**
   * @return {!MDCTabScrollerHorizontalEdges}
   * @private
   */
  calculateScrollEdges_() {
    const contentWidth = this.adapter_.getScrollContentOffsetWidth();
    const rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return /** @type {!MDCTabScrollerHorizontalEdges} */ ({
      left: rootWidth - contentWidth,
      right: 0,
    });
  }

  /**
   * @param {number} scrollX
   * @return {number}
   * @private
   */
  clampScrollValue_(scrollX) {
    const edges = this.calculateScrollEdges_();
    return Math.max(Math.min(edges.right, scrollX), edges.left);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerRTLNegative);


/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-reverse-scroller.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-reverse-scroller.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/adapter.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */
class MDCTabScrollerRTLReverse extends __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__["a" /* default */] {
  /**
   * @param {number} translateX
   * @return {number}
   */
  getScrollPositionRTL(translateX) {
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    // Scroll values on most browsers are ints instead of floats so we round
    return Math.round(currentScrollLeft - translateX);
  }

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   */
  scrollToRTL(scrollX) {
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    const clampedScrollLeft = this.clampScrollValue_(scrollX);
    return /** @type {!MDCTabScrollerAnimation} */ ({
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft,
    });
  }

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   */
  incrementScrollRTL(scrollX) {
    const currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    const clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
    return /** @type {!MDCTabScrollerAnimation} */ ({
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft,
    });
  }

  /**
   * @param {number} scrollX
   * @return {number}
   */
  getAnimatingScrollPosition(scrollX, translateX) {
    return scrollX + translateX;
  }

  /**
   * @return {!MDCTabScrollerHorizontalEdges}
   * @private
   */
  calculateScrollEdges_() {
    const contentWidth = this.adapter_.getScrollContentOffsetWidth();
    const rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return /** @type {!MDCTabScrollerHorizontalEdges} */ ({
      left: contentWidth - rootWidth,
      right: 0,
    });
  }

  /**
   * @param {number} scrollX
   * @return {number}
   * @private
   */
  clampScrollValue_(scrollX) {
    const edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.right, scrollX), edges.left);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerRTLReverse);


/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-scroller.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/rtl-scroller.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/adapter.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/* eslint no-unused-vars: [2, {"args": "none"}] */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @abstract
 */
class MDCTabScrollerRTL {
  /** @param {!MDCTabScrollerAdapter} adapter */
  constructor(adapter) {
    /** @private */
    this.adapter_ = adapter;
  }

  /**
   * @param {number} translateX The current translateX position
   * @return {number}
   * @abstract
   */
  getScrollPositionRTL(translateX) {}

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   * @abstract
   */
  scrollToRTL(scrollX) {}

  /**
   * @param {number} scrollX
   * @return {!MDCTabScrollerAnimation}
   * @abstract
   */
  incrementScrollRTL(scrollX) {}

  /**
   * @param {number} scrollX The current scrollX position
   * @param {number} translateX The current translateX position
   * @return {number}
   * @abstract
   */
  getAnimatingScrollPosition(scrollX, translateX) {}
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTabScrollerRTL);


/***/ }),

/***/ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/util.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/util.js ***!
  \************************************************************************************/
/*! exports provided: computeHorizontalScrollbarHeight, getMatchesProperty */
/*! exports used: computeHorizontalScrollbarHeight, getMatchesProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return computeHorizontalScrollbarHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMatchesProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-bar/node_modules/@material/tab-scroller/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 * @private {number|undefined}
 */
let horizontalScrollbarHeight_;

/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 * @param {!Document} documentObj
 * @param {boolean=} shouldCacheResult
 * @return {number}
 */
function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult = true) {
  if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
    return horizontalScrollbarHeight_;
  }

  const el = documentObj.createElement('div');
  el.classList.add(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].SCROLL_TEST);
  documentObj.body.appendChild(el);

  const horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  documentObj.body.removeChild(el);

  if (shouldCacheResult) {
    horizontalScrollbarHeight_ = horizontalScrollbarHeight;
  }
  return horizontalScrollbarHeight;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}




/***/ }),

/***/ "./node_modules/@material/tab/adapter.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/tab/adapter.js ***!
  \***********************************************/
/*! exports provided: MDCTabDimensions, MDCTabAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCTabDimensions */
/* unused harmony export MDCTabAdapter */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * MDCTabDimensions provides details about the left and right edges of the Tab
 * root element and the Tab content element. These values are used to determine
 * the visual position of the Tab with respect it's parent container.
 * @typedef {{rootLeft: number, rootRight: number, contentLeft: number, contentRight: number}}
 */
let MDCTabDimensions;

/**
 * Adapter for MDC Tab.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTabAdapter {
  /**
   * Registers an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerEventHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterEventHandler(evtType, handler) {}

  /**
   * Adds the given className to the root element.
   * @param {string} className The className to add
   */
  addClass(className) {}

  /**
   * Removes the given className from the root element.
   * @param {string} className The className to remove
   */
  removeClass(className) {}

  /**
   * Returns whether the root element has the given className.
   * @param {string} className The className to remove
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Sets the given attrName of the root element to the given value.
   * @param {string} attr The attribute name to set
   * @param {string} value The value so give the attribute
   */
  setAttr(attr, value) {}

  /**
   * Activates the indicator element.
   * @param {!ClientRect=} previousIndicatorClientRect The client rect of the previously activated indicator
   */
  activateIndicator(previousIndicatorClientRect) {}

  /** Deactivates the indicator. */
  deactivateIndicator() {}

  /**
   * Returns the client rect of the indicator.
   * @return {!ClientRect}
   */
  computeIndicatorClientRect() {}

  /**
   * Emits the MDCTab:interacted event for use by parent components
   */
  notifyInteracted() {}

  /**
   * Returns the offsetLeft value of the root element.
   * @return {number}
   */
  getOffsetLeft() {}

  /**
   * Returns the offsetWidth value of the root element.
   * @return {number}
   */
  getOffsetWidth() {}

  /**
   * Returns the offsetLeft of the content element.
   * @return {number}
   */
  getContentOffsetLeft() {}

  /**
   * Returns the offsetWidth of the content element.
   * @return {number}
   */
  getContentOffsetWidth() {}

  /**
   * Applies focus to the root element
   */
  focus() {}
}




/***/ }),

/***/ "./node_modules/@material/tab/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/tab/constants.js ***!
  \*************************************************/
/*! exports provided: cssClasses, strings */
/*! exports used: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses = {
  ACTIVE: 'mdc-tab--active',
  ANIMATING_ACTIVATE: 'mdc-tab--animating-activate',
  ANIMATING_DEACTIVATE: 'mdc-tab--animating-deactivate',
};

/** @enum {string} */
const strings = {
  ARIA_SELECTED: 'aria-selected',
  RIPPLE_SELECTOR: '.mdc-tab__ripple',
  CONTENT_SELECTOR: '.mdc-tab__content',
  TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
  TABINDEX: 'tabIndex',
  INTERACTED_EVENT: 'MDCTab:interacted',
};




/***/ }),

/***/ "./node_modules/@material/tab/foundation.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/tab/foundation.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */



/**
 * @extends {MDCFoundation<!MDCTabAdapter>}
 * @final
 */
class MDCTabFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /**
   * @see MDCTabAdapter for typing information
   * @return {!MDCTabAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTabAdapter} */ ({
      registerEventHandler: () => {},
      deregisterEventHandler: () => {},
      addClass: () => {},
      removeClass: () => {},
      hasClass: () => {},
      setAttr: () => {},
      activateIndicator: () => {},
      deactivateIndicator: () => {},
      computeIndicatorClientRect: () => {},
      notifyInteracted: () => {},
      getOffsetLeft: () => {},
      getOffsetWidth: () => {},
      getContentOffsetLeft: () => {},
      getContentOffsetWidth: () => {},
      focus: () => {},
    });
  }

  /** @param {!MDCTabAdapter} adapter */
  constructor(adapter) {
    super(Object.assign(MDCTabFoundation.defaultAdapter, adapter));

    /** @private {function(!Event): undefined} */
    this.handleTransitionEnd_ = (evt) => this.handleTransitionEnd(evt);

    /** @private {function(?Event): undefined} */
    this.handleClick_ = () => this.handleClick();
  }

  init() {
    this.adapter_.registerEventHandler('click', this.handleClick_);
  }

  /**
   * Handles the "transitionend" event
   * @param {!Event} evt A browser event
   */
  handleTransitionEnd(evt) {
    // Early exit for ripple
    if (evt.pseudoElement) {
      return;
    }
    this.adapter_.deregisterEventHandler('transitionend', this.handleTransitionEnd_);
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ANIMATING_ACTIVATE);
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ANIMATING_DEACTIVATE);
  }

  /**
   * Handles the "click" event
   */
  handleClick() {
    // It's up to the parent component to keep track of the active Tab and
    // ensure we don't activate a Tab that's already active.
    this.adapter_.notifyInteracted();
  }

  /**
   * Returns the Tab's active state
   * @return {boolean}
   */
  isActive() {
    return this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
  }

  /**
   * Activates the Tab
   * @param {!ClientRect=} previousIndicatorClientRect
   */
  activate(previousIndicatorClientRect) {
    // Early exit
    if (this.isActive()) {
      return;
    }

    this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ANIMATING_ACTIVATE);
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
    this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'true');
    this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].TABINDEX, '0');
    this.adapter_.activateIndicator(previousIndicatorClientRect);
    this.adapter_.focus();
  }

  /**
   * Deactivates the Tab
   */
  deactivate() {
    // Early exit
    if (!this.isActive()) {
      return;
    }

    this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ANIMATING_DEACTIVATE);
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
    this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'false');
    this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].TABINDEX, '-1');
    this.adapter_.deactivateIndicator();
  }

  /**
   * Returns the indicator's client rect
   * @return {!ClientRect}
   */
  computeIndicatorClientRect() {
    return this.adapter_.computeIndicatorClientRect();
  }

  /**
   * Returns the dimensions of the Tab
   * @return {!MDCTabDimensions}
   */
  computeDimensions() {
    const rootWidth = this.adapter_.getOffsetWidth();
    const rootLeft = this.adapter_.getOffsetLeft();
    const contentWidth = this.adapter_.getContentOffsetWidth();
    const contentLeft = this.adapter_.getContentOffsetLeft();

    return {
      rootLeft,
      rootRight: rootLeft + rootWidth,
      contentLeft: rootLeft + contentLeft,
      contentRight: rootLeft + contentLeft + contentWidth,
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTabFoundation);


/***/ }),

/***/ "./node_modules/@material/tab/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@material/tab/index.js ***!
  \*********************************************/
/*! exports provided: MDCTab, MDCTabFoundation */
/*! exports used: MDCTab, MDCTabFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_tab_indicator_index__ = __webpack_require__(/*! @material/tab-indicator/index */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__foundation__["a"]; });
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/* eslint-disable no-unused-vars */



/* eslint-enable no-unused-vars */



/**
 * @extends {MDCComponent<!MDCTabFoundation>}
 * @final
 */
class MDCTab extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /** @private {?MDCRipple} */
    this.ripple_;
    /** @private {?MDCTabIndicator} */
    this.tabIndicator_;
    /** @private {?Element} */
    this.content_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTab}
   */
  static attachTo(root) {
    return new MDCTab(root);
  }

  initialize(
    rippleFactory = (el, foundation) => new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */](el, foundation),
    tabIndicatorFactory = (el) => new __WEBPACK_IMPORTED_MODULE_2__material_tab_indicator_index__["a" /* MDCTabIndicator */](el)) {
    const rippleSurface = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.RIPPLE_SELECTOR);
    const rippleAdapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */].createAdapter(/** @type {!RippleCapableSurface} */ (this)), {
      addClass: (className) => rippleSurface.classList.add(className),
      removeClass: (className) => rippleSurface.classList.remove(className),
      updateCssVariable: (varName, value) => rippleSurface.style.setProperty(varName, value),
    });
    const rippleFoundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["b" /* MDCRippleFoundation */](rippleAdapter);
    this.ripple_ = rippleFactory(this.root_, rippleFoundation);

    const tabIndicatorElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.TAB_INDICATOR_SELECTOR);
    this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);

    this.content_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.CONTENT_SELECTOR);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  /**
   * @return {!MDCTabFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */](
      /** @type {!MDCTabAdapter} */ ({
        setAttr: (attr, value) => this.root_.setAttribute(attr, value),
        registerEventHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
        deregisterEventHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
        addClass: (className) => this.root_.classList.add(className),
        removeClass: (className) => this.root_.classList.remove(className),
        hasClass: (className) => this.root_.classList.contains(className),
        activateIndicator: (previousIndicatorClientRect) => this.tabIndicator_.activate(previousIndicatorClientRect),
        deactivateIndicator: () => this.tabIndicator_.deactivate(),
        computeIndicatorClientRect: () => this.tabIndicator_.computeContentClientRect(),
        notifyInteracted: () => this.emit(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.INTERACTED_EVENT, {tab: this}, true /* bubble */),
        getOffsetLeft: () => this.root_.offsetLeft,
        getOffsetWidth: () => this.root_.offsetWidth,
        getContentOffsetLeft: () => this.content_.offsetLeft,
        getContentOffsetWidth: () => this.content_.offsetWidth,
        focus: () => this.root_.focus(),
      }));
  }

  /**
   * Getter for the active state of the tab
   * @return {boolean}
   */
  get active() {
    return this.foundation_.isActive();
  }

  /**
   * Activates the tab
   * @param {!ClientRect=} computeIndicatorClientRect
   */
  activate(computeIndicatorClientRect) {
    this.foundation_.activate(computeIndicatorClientRect);
  }

  /**
   * Deactivates the tab
   */
  deactivate() {
    this.foundation_.deactivate();
  }

  /**
   * Returns the indicator's client rect
   * @return {!ClientRect}
   */
  computeIndicatorClientRect() {
    return this.foundation_.computeIndicatorClientRect();
  }

  /**
   * @return {!MDCTabDimensions}
   */
  computeDimensions() {
    return this.foundation_.computeDimensions();
  }
}




/***/ }),

/***/ "./node_modules/@material/tab/node_modules/@material/tab-indicator/adapter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material/tab/node_modules/@material/tab-indicator/adapter.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Tab Indicator.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab Indicator into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTabIndicatorAdapter {
  /**
   * Registers an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerEventHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterEventHandler(evtType, handler) {}

  /**
   * Adds the given className to the root element.
   * @param {string} className The className to add
   */
  addClass(className) {}

  /**
   * Removes the given className from the root element.
   * @param {string} className The className to remove
   */
  removeClass(className) {}

  /**
   * Returns the client rect of the content element.
   * @return {!ClientRect}
   */
  computeContentClientRect() {}

  /**
   * Sets a style property of the content element to the passed value
   * @param {string} propName The style property name to set
   * @param {string} value The style property value
   */
  setContentStyleProperty(propName, value) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTabIndicatorAdapter);


/***/ }),

/***/ "./node_modules/@material/tab/node_modules/@material/tab-indicator/constants.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material/tab/node_modules/@material/tab-indicator/constants.js ***!
  \**************************************************************************************/
/*! exports provided: cssClasses, strings */
/*! exports used: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

/** @enum {string} */
const cssClasses = {
  ACTIVE: 'mdc-tab-indicator--active',
  FADE: 'mdc-tab-indicator--fade',
  FADING_ACTIVATE: 'mdc-tab-indicator--fading-activate',
  FADING_DEACTIVATE: 'mdc-tab-indicator--fading-deactivate',
  SLIDING_ACTIVATE: 'mdc-tab-indicator--sliding-activate',
};

/** @enum {string} */
const strings = {
  CONTENT_SELECTOR: '.mdc-tab-indicator__content',
};




/***/ }),

/***/ "./node_modules/@material/tab/node_modules/@material/tab-indicator/fading-foundation.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material/tab/node_modules/@material/tab-indicator/fading-foundation.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/foundation.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/



/**
 * @extends {MDCTabIndicatorFoundation}
 * @final
 */
class MDCFadingTabIndicatorFoundation extends __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @private {function(?Event): undefined} */
    this.handleTransitionEnd_ = () => this.handleTransitionEnd();
  }

  /** Handles the transitionend event */
  handleTransitionEnd() {
    this.adapter_.deregisterEventHandler('transitionend', this.handleTransitionEnd_);
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.FADING_ACTIVATE);
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.FADING_DEACTIVATE);
  }

  activate() {
    this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.FADING_ACTIVATE);
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);
  }

  deactivate() {
    this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.FADING_DEACTIVATE);
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFadingTabIndicatorFoundation);


/***/ }),

/***/ "./node_modules/@material/tab/node_modules/@material/tab-indicator/foundation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/tab/node_modules/@material/tab-indicator/foundation.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/constants.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/





/**
 * @extends {MDCFoundation<!MDCTabIndicatorAdapter>}
 * @abstract
 */
class MDCTabIndicatorFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /**
   * @see MDCTabIndicatorAdapter for typing information
   * @return {!MDCTabIndicatorAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTabIndicatorAdapter} */ ({
      registerEventHandler: () => {},
      deregisterEventHandler: () => {},
      addClass: () => {},
      removeClass: () => {},
      computeContentClientRect: () => {},
      setContentStyleProperty: () => {},
    });
  }

  /** @param {!MDCTabIndicatorAdapter} adapter */
  constructor(adapter) {
    super(Object.assign(MDCTabIndicatorFoundation.defaultAdapter, adapter));
  }

  /** @return {!ClientRect} */
  computeContentClientRect() {
    return this.adapter_.computeContentClientRect();
  }

  /**
   * Activates the indicator
   * @param {!ClientRect=} previousIndicatorClientRect
   * @abstract
   */
  activate(previousIndicatorClientRect) {} // eslint-disable-line no-unused-vars

  /** @abstract */
  deactivate() {}
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTabIndicatorFoundation);


/***/ }),

/***/ "./node_modules/@material/tab/node_modules/@material/tab-indicator/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/tab/node_modules/@material/tab-indicator/index.js ***!
  \**********************************************************************************/
/*! exports provided: MDCTabIndicator, MDCTabIndicatorFoundation, MDCSlidingTabIndicatorFoundation, MDCFadingTabIndicatorFoundation */
/*! exports used: MDCTabIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sliding_foundation__ = __webpack_require__(/*! ./sliding-foundation */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/sliding-foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fading_foundation__ = __webpack_require__(/*! ./fading-foundation */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/fading-foundation.js");
/* unused harmony reexport MDCTabIndicatorFoundation */
/* unused harmony reexport MDCSlidingTabIndicatorFoundation */
/* unused harmony reexport MDCFadingTabIndicatorFoundation */
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/









/**
 * @extends {MDCComponent<!MDCTabIndicatorFoundation>}
 * @final
 */
class MDCTabIndicator extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCTabIndicator}
   */
  static attachTo(root) {
    return new MDCTabIndicator(root);
  }

  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /** @type {?Element} */
    this.content_;
  }

  initialize() {
    this.content_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CONTENT_SELECTOR);
  }

  /**
   * @return {!ClientRect}
   */
  computeContentClientRect() {
    return this.foundation_.computeContentClientRect();
  }

  /**
   * @return {!MDCTabIndicatorFoundation}
   */
  getDefaultFoundation() {
    const adapter = /** @type {!MDCTabIndicatorAdapter} */ (Object.assign({
      registerEventHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      computeContentClientRect: () => this.content_.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) => this.content_.style.setProperty(prop, value),
    }));

    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].cssClasses.FADE)) {
      return new __WEBPACK_IMPORTED_MODULE_4__fading_foundation__["a" /* default */](adapter);
    }

    // Default to the sliding indicator
    return new __WEBPACK_IMPORTED_MODULE_3__sliding_foundation__["a" /* default */](adapter);
  }

  /**
   * @param {!ClientRect=} previousIndicatorClientRect
   */
  activate(previousIndicatorClientRect) {
    this.foundation_.activate(previousIndicatorClientRect);
  }

  deactivate() {
    this.foundation_.deactivate();
  }
}




/***/ }),

/***/ "./node_modules/@material/tab/node_modules/@material/tab-indicator/sliding-foundation.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material/tab/node_modules/@material/tab-indicator/sliding-foundation.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab/node_modules/@material/tab-indicator/foundation.js");
/**
  * @license
  * Copyright 2018 Google Inc. All Rights Reserved.
  *
  * Licensed under the Apache License, Version 2.0 (the "License")
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/



/**
 * @extends {MDCTabIndicatorFoundation}
 * @final
 */
class MDCSlidingTabIndicatorFoundation extends __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @private {function(?Event): undefined} */
    this.handleTransitionEnd_ = () => this.handleTransitionEnd();
  }

  /** Handles the transitionend event */
  handleTransitionEnd() {
    this.adapter_.deregisterEventHandler('transitionend', this.handleTransitionEnd_);
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.SLIDING_ACTIVATE);
  }

  /** @param {!ClientRect=} previousIndicatorClientRect */
  activate(previousIndicatorClientRect) {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);

    // Early exit if no indicator is present to handle cases where an indicator
    // may be activated without a prior indicator state
    if (!previousIndicatorClientRect) {
      return;
    }

    // This animation uses the FLIP approach. You can read more about it at the link below:
    // https://aerotwist.com/blog/flip-your-animations/

    // Calculate the dimensions based on the dimensions of the previous indicator
    const currentClientRect = this.computeContentClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    this.adapter_.setContentStyleProperty('transform', `translateX(${xPosition}px) scaleX(${widthDelta})`);

    // Force repaint
    this.computeContentClientRect();

    // Add animating class and remove transformation in a new frame
    requestAnimationFrame(() => {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.SLIDING_ACTIVATE);
      this.adapter_.setContentStyleProperty('transform', '');
    });

    this.adapter_.registerEventHandler('transitionend', this.handleTransitionEnd_);
  }

  deactivate() {
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.ACTIVE);
    // We remove the animating class in deactivate in case the Tab is deactivated before the animation completes and
    // the "transitionend" handler isn't called.
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */].cssClasses.SLIDING_ACTIVATE);
    this.adapter_.deregisterEventHandler('transitionend', this.handleTransitionEnd_);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCSlidingTabIndicatorFoundation);


/***/ }),

/***/ "./node_modules/@material/textfield/adapter.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/textfield/adapter.js ***!
  \*****************************************************/
/*! exports provided: MDCTextFieldAdapter, NativeInputType, FoundationMapType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCTextFieldAdapter */
/* unused harmony export NativeInputType */
/* unused harmony export FoundationMapType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_text_foundation__ = __webpack_require__(/*! ./helper-text/foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_foundation__ = __webpack_require__(/*! ./icon/foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */



/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * @typedef {{
 *   value: string,
 *   disabled: boolean,
 *   badInput: boolean,
 *   validity: {
 *     badInput: boolean,
 *     valid: boolean,
 *   },
 * }}
 */
let NativeInputType;

/**
 * @typedef {{
 *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
 *   icon: (!MDCTextFieldIconFoundation|undefined),
 * }}
 */
let FoundationMapType;

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTextFieldAdapter {
  /**
   * Adds a class to the root Element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the root Element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns true if the root element contains the given class name.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerTextFieldInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterTextFieldInteractionHandler(type, handler) {}

  /**
   * Registers an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerInputInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterInputInteractionHandler(evtType, handler) {}

  /**
   * Registers a validation attribute change listener on the input element.
   * Handler accepts list of attribute names.
   * @param {function(!Array<string>): undefined} handler
   * @return {!MutationObserver}
   */
  registerValidationAttributeChangeHandler(handler) {}

  /**
   * Disconnects a validation attribute observer on the input element.
   * @param {!MutationObserver} observer
   */
  deregisterValidationAttributeChangeHandler(observer) {}

  /**
   * Returns an object representing the native text input element, with a
   * similar API shape. The object returned should include the value, disabled
   * and badInput properties, as well as the checkValidity() function. We never
   * alter the value within our code, however we do update the disabled
   * property, so if you choose to duck-type the return value for this method
   * in your implementation it's important to keep this in mind. Also note that
   * this method can return null, which the foundation will handle gracefully.
   * @return {?Element|?NativeInputType}
   */
  getNativeInput() {}

  /**
   * Returns true if the textfield is focused.
   * We achieve this via `document.activeElement === this.root_`.
   * @return {boolean}
   */
  isFocused() {}

  /**
   * Returns true if the direction of the root element is set to RTL.
   * @return {boolean}
   */
  isRtl() {}

  /**
   * Activates the line ripple.
   */
  activateLineRipple() {}

  /**
   * Deactivates the line ripple.
   */
  deactivateLineRipple() {}

  /**
   * Sets the transform origin of the line ripple.
   * @param {number} normalizedX
   */
  setLineRippleTransformOrigin(normalizedX) {}

  /**
   * Only implement if label exists.
   * Shakes label if shouldShake is true.
   * @param {boolean} shouldShake
   */
  shakeLabel(shouldShake) {}

  /**
   * Only implement if label exists.
   * Floats the label above the input element if shouldFloat is true.
   * @param {boolean} shouldFloat
   */
  floatLabel(shouldFloat) {}

  /**
   * Returns true if label element exists, false if it doesn't.
   * @return {boolean}
   */
  hasLabel() {}

  /**
   * Only implement if label exists.
   * Returns width of label in pixels.
   * @return {number}
   */
  getLabelWidth() {}

  /**
   * Returns true if outline element exists, false if it doesn't.
   * @return {boolean}
   */
  hasOutline() {}

  /**
   * Only implement if outline element exists.
   * Updates SVG Path and outline element based on the
   * label element width and RTL context.
   * @param {number} labelWidth
   * @param {boolean=} isRtl
   */
  notchOutline(labelWidth, isRtl) {}

  /**
   * Only implement if outline element exists.
   * Closes notch in outline element.
   */
  closeOutline() {}
}




/***/ }),

/***/ "./node_modules/@material/textfield/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/constants.js ***!
  \*******************************************************/
/*! exports provided: cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST */
/*! exports used: VALIDATION_ATTR_WHITELIST, cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VALIDATION_ATTR_WHITELIST; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
};

/** @enum {string} */
const cssClasses = {
  ROOT: 'mdc-text-field',
  UPGRADED: 'mdc-text-field--upgraded',
  DISABLED: 'mdc-text-field--disabled',
  DENSE: 'mdc-text-field--dense',
  FOCUSED: 'mdc-text-field--focused',
  INVALID: 'mdc-text-field--invalid',
  BOX: 'mdc-text-field--box',
  OUTLINED: 'mdc-text-field--outlined',
};

/** @enum {number} */
const numbers = {
  LABEL_SCALE: 0.75,
  DENSE_LABEL_SCALE: 0.923,
};

// whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
// under section: `Validation-related attributes`
const VALIDATION_ATTR_WHITELIST = [
  'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
];




/***/ }),

/***/ "./node_modules/@material/textfield/foundation.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/foundation.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_text_foundation__ = __webpack_require__(/*! ./helper-text/foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_foundation__ = __webpack_require__(/*! ./icon/foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */




/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */
class MDCTextFieldFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* cssClasses */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* strings */];
  }

  /** @return enum {string} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* numbers */];
  }

  /** @return {boolean} */
  get shouldShake() {
    return !this.isValid() && !this.isFocused_;
  }

  /** @return {boolean} */
  get shouldFloat() {
    return this.isFocused_ || !!this.getValue() || this.isBadInput_();
  }

  /**
   * {@see MDCTextFieldAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTextFieldAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      hasClass: () => {},
      registerTextFieldInteractionHandler: () => {},
      deregisterTextFieldInteractionHandler: () => {},
      registerInputInteractionHandler: () => {},
      deregisterInputInteractionHandler: () => {},
      registerValidationAttributeChangeHandler: () => {},
      deregisterValidationAttributeChangeHandler: () => {},
      getNativeInput: () => {},
      isFocused: () => {},
      isRtl: () => {},
      activateLineRipple: () => {},
      deactivateLineRipple: () => {},
      setLineRippleTransformOrigin: () => {},
      shakeLabel: () => {},
      floatLabel: () => {},
      hasLabel: () => {},
      getLabelWidth: () => {},
      hasOutline: () => {},
      notchOutline: () => {},
      closeOutline: () => {},
    });
  }

  /**
   * @param {!MDCTextFieldAdapter} adapter
   * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
   */
  constructor(adapter, foundationMap = /** @type {!FoundationMapType} */ ({})) {
    super(Object.assign(MDCTextFieldFoundation.defaultAdapter, adapter));

    /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
    this.helperText_ = foundationMap.helperText;
    /** @type {!MDCTextFieldIconFoundation|undefined} */
    this.icon_ = foundationMap.icon;

    /** @private {boolean} */
    this.isFocused_ = false;
    /** @private {boolean} */
    this.receivedUserInput_ = false;
    /** @private {boolean} */
    this.useCustomValidityChecking_ = false;
    /** @private {boolean} */
    this.isValid_ = true;
    /** @private {function(): undefined} */
    this.inputFocusHandler_ = () => this.activateFocus();
    /** @private {function(): undefined} */
    this.inputBlurHandler_ = () => this.deactivateFocus();
    /** @private {function(): undefined} */
    this.inputInputHandler_ = () => this.autoCompleteFocus();
    /** @private {function(!Event): undefined} */
    this.setPointerXOffset_ = (evt) => this.setTransformOrigin(evt);
    /** @private {function(!Event): undefined} */
    this.textFieldInteractionHandler_ = () => this.handleTextFieldInteraction();
    /** @private {function(!Array): undefined} */
    this.validationAttributeChangeHandler_ = (attributesList) => this.handleValidationAttributeChange(attributesList);

    /** @private {!MutationObserver} */
    this.validationObserver_;
  }

  init() {
    this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    // Ensure label does not collide with any pre-filled value.
    if (this.adapter_.hasLabel() && (this.getValue() || this.isBadInput_())) {
      this.adapter_.floatLabel(this.shouldFloat);
      this.notchOutline(this.shouldFloat);
    }

    if (this.adapter_.isFocused()) {
      this.inputFocusHandler_();
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach((evtType) => {
      this.adapter_.registerInputInteractionHandler(evtType, this.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach((evtType) => {
      this.adapter_.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler_);
    });
    this.validationObserver_ =
        this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
  }

  destroy() {
    this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach((evtType) => {
      this.adapter_.deregisterInputInteractionHandler(evtType, this.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach((evtType) => {
      this.adapter_.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  }

  /**
   * Handles user interactions with the Text Field.
   */
  handleTextFieldInteraction() {
    if (this.adapter_.getNativeInput().disabled) {
      return;
    }
    this.receivedUserInput_ = true;
  }

  /**
   * Handles validation attribute changes
   * @param {!Array<string>} attributesList
   */
  handleValidationAttributeChange(attributesList) {
    attributesList.some((attributeName) => {
      if (__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* VALIDATION_ATTR_WHITELIST */].indexOf(attributeName) > -1) {
        this.styleValidity_(true);
        return true;
      }
    });
  }

  /**
   * Opens/closes the notched outline.
   * @param {boolean} openNotch
   */
  notchOutline(openNotch) {
    if (!this.adapter_.hasOutline() || !this.adapter_.hasLabel()) {
      return;
    }

    if (openNotch) {
      const isDense = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* cssClasses */].DENSE);
      const labelScale = isDense ? __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* numbers */].DENSE_LABEL_SCALE : __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* numbers */].LABEL_SCALE;
      const labelWidth = this.adapter_.getLabelWidth() * labelScale;
      const isRtl = this.adapter_.isRtl();
      this.adapter_.notchOutline(labelWidth, isRtl);
    } else {
      this.adapter_.closeOutline();
    }
  }

  /**
   * Activates the text field focus state.
   */
  activateFocus() {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter_.activateLineRipple();
    this.notchOutline(this.shouldFloat);
    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(this.shouldShake);
      this.adapter_.floatLabel(this.shouldFloat);
    }
    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  }

  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   * @param {!Event} evt
   */
  setTransformOrigin(evt) {
    const targetClientRect = evt.target.getBoundingClientRect();
    const evtCoords = {x: evt.clientX, y: evt.clientY};
    const normalizedX = evtCoords.x - targetClientRect.left;
    this.adapter_.setLineRippleTransformOrigin(normalizedX);
  }

  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programatically).
   */
  autoCompleteFocus() {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  }

  /**
   * Deactivates the Text Field's focus state.
   */
  deactivateFocus() {
    this.isFocused_ = false;
    this.adapter_.deactivateLineRipple();
    const input = this.getNativeInput_();
    const shouldRemoveLabelFloat = !input.value && !this.isBadInput_();
    const isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);
    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(this.shouldShake);
      this.adapter_.floatLabel(this.shouldFloat);
      this.notchOutline(this.shouldFloat);
    }
    if (shouldRemoveLabelFloat) {
      this.receivedUserInput_ = false;
    }
  }

  /**
   * @return {string} The value of the input Element.
   */
  getValue() {
    return this.getNativeInput_().value;
  }

  /**
   * @param {string} value The value to set on the input Element.
   */
  setValue(value) {
    this.getNativeInput_().value = value;
    const isValid = this.isValid();
    this.styleValidity_(isValid);
    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(this.shouldShake);
      this.adapter_.floatLabel(this.shouldFloat);
      this.notchOutline(this.shouldFloat);
    }
  }

  /**
   * @return {boolean} If a custom validity is set, returns that value.
   *     Otherwise, returns the result of native validity checks.
   */
  isValid() {
    return this.useCustomValidityChecking_
      ? this.isValid_ : this.isNativeInputValid_();
  }

  /**
   * @param {boolean} isValid Sets the validity state of the Text Field.
   */
  setValid(isValid) {
    this.useCustomValidityChecking_ = true;
    this.isValid_ = isValid;
    // Retrieve from the getter to ensure correct logic is applied.
    isValid = this.isValid();
    this.styleValidity_(isValid);
    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(this.shouldShake);
    }
  }

  /**
   * @return {boolean} True if the Text Field is disabled.
   */
  isDisabled() {
    return this.getNativeInput_().disabled;
  }

  /**
   * @param {boolean} disabled Sets the text-field disabled or enabled.
   */
  setDisabled(disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  }

  /**
   * @param {string} content Sets the content of the helper text.
   */
  setHelperTextContent(content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  }

  /**
   * Sets the aria label of the icon.
   * @param {string} label
   */
  setIconAriaLabel(label) {
    if (this.icon_) {
      this.icon_.setAriaLabel(label);
    }
  }

  /**
   * Sets the text content of the icon.
   * @param {string} content
   */
  setIconContent(content) {
    if (this.icon_) {
      this.icon_.setContent(content);
    }
  }

  /**
   * @return {boolean} True if the Text Field input fails in converting the
   *     user-supplied value.
   * @private
   */
  isBadInput_() {
    return this.getNativeInput_().validity.badInput;
  }

  /**
   * @return {boolean} The result of native validity checking
   *     (ValidityState.valid).
   */
  isNativeInputValid_() {
    return this.getNativeInput_().validity.valid;
  }

  /**
   * Styles the component based on the validity state.
   * @param {boolean} isValid
   * @private
   */
  styleValidity_(isValid) {
    const {INVALID} = MDCTextFieldFoundation.cssClasses;
    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }
    if (this.helperText_) {
      this.helperText_.setValidity(isValid);
    }
  }

  /**
   * Styles the component based on the focused state.
   * @param {boolean} isFocused
   * @private
   */
  styleFocused_(isFocused) {
    const {FOCUSED} = MDCTextFieldFoundation.cssClasses;
    if (isFocused) {
      this.adapter_.addClass(FOCUSED);
    } else {
      this.adapter_.removeClass(FOCUSED);
    }
  }

  /**
   * Styles the component based on the disabled state.
   * @param {boolean} isDisabled
   * @private
   */
  styleDisabled_(isDisabled) {
    const {DISABLED, INVALID} = MDCTextFieldFoundation.cssClasses;
    if (isDisabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
    if (this.icon_) {
      this.icon_.setDisabled(isDisabled);
    }
  }

  /**
   * @return {!Element|!NativeInputType} The native text input from the
   * host environment, or a dummy if none exists.
   * @private
   */
  getNativeInput_() {
    return this.adapter_.getNativeInput() ||
    /** @type {!NativeInputType} */ ({
      value: '',
      disabled: false,
      validity: {
        badInput: false,
        valid: true,
      },
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTextFieldFoundation);


/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/adapter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/adapter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTextFieldHelperTextAdapter {
  /**
   * Adds a class to the helper text element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the helper text element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns whether or not the helper text element contains the given class.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Sets an attribute with a given value on the helper text element.
   * @param {string} attr
   * @param {string} value
   */
  setAttr(attr, value) {}

  /**
   * Removes an attribute from the helper text element.
   * @param {string} attr
   */
  removeAttr(attr) {}

  /**
   * Sets the text content for the helper text element.
   * @param {string} content
   */
  setContent(content) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTextFieldHelperTextAdapter);


/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/constants.js ***!
  \*******************************************************************/
/*! exports provided: strings, cssClasses */
/*! exports used: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
};

/** @enum {string} */
const cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
};




/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/foundation.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/helper-text/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
 * @final
 */
class MDCTextFieldHelperTextFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /**
   * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldHelperTextAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTextFieldHelperTextAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      hasClass: () => {},
      setAttr: () => {},
      removeAttr: () => {},
      setContent: () => {},
    });
  }

  /**
   * @param {!MDCTextFieldHelperTextAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter));
  }

  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */
  setContent(content) {
    this.adapter_.setContent(content);
  }

  /** @param {boolean} isPersistent Sets the persistency of the helper text. */
  setPersistent(isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
    }
  }

  /**
   * @param {boolean} isValidation True to make the helper text act as an
   *   error validation message.
   */
  setValidation(isValidation) {
    if (isValidation) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
    }
  }

  /** Makes the helper text visible to the screen reader. */
  showToScreenReader() {
    this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN);
  }

  /**
   * Sets the validity of the helper text based on the input validity.
   * @param {boolean} inputIsValid
   */
  setValidity(inputIsValid) {
    const helperTextIsPersistent = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
    const helperTextIsValidationMsg = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
    const validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  }

  /**
   * Hides the help text from screen readers.
   * @private
   */
  hide_() {
    this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN, 'true');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTextFieldHelperTextFoundation);


/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/index.js ***!
  \***************************************************************/
/*! exports provided: MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation */
/*! exports used: MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldHelperText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/helper-text/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
 * @final
 */
class MDCTextFieldHelperText extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCTextFieldHelperText}
   */
  static attachTo(root) {
    return new MDCTextFieldHelperText(root);
  }

  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](/** @type {!MDCTextFieldHelperTextAdapter} */ (Object.assign({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      removeAttr: (attr) => this.root_.removeAttribute(attr),
      setContent: (content) => {
        this.root_.textContent = content;
      },
    })));
  }
}




/***/ }),

/***/ "./node_modules/@material/textfield/icon/adapter.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/textfield/icon/adapter.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Icon.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the text field icon into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTextFieldIconAdapter {
  /**
   * Gets the value of an attribute on the icon element.
   * @param {string} attr
   * @return {string}
   */
  getAttr(attr) {}

  /**
   * Sets an attribute on the icon element.
   * @param {string} attr
   * @param {string} value
   */
  setAttr(attr, value) {}

  /**
   * Removes an attribute from the icon element.
   * @param {string} attr
   */
  removeAttr(attr) {}

  /**
   * Sets the text content of the icon element.
   * @param {string} content
   */
  setContent(content) {}

  /**
   * Registers an event listener on the icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
   */
  notifyIconAction() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTextFieldIconAdapter);


/***/ }),

/***/ "./node_modules/@material/textfield/icon/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/constants.js ***!
  \************************************************************/
/*! exports provided: strings */
/*! exports used: strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button',
};




/***/ }),

/***/ "./node_modules/@material/textfield/icon/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/foundation.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/icon/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
 * @final
 */
class MDCTextFieldIconFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */];
  }

  /**
   * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldIconAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTextFieldIconAdapter} */ ({
      getAttr: () => {},
      setAttr: () => {},
      removeAttr: () => {},
      setContent: () => {},
      registerInteractionHandler: () => {},
      deregisterInteractionHandler: () => {},
      notifyIconAction: () => {},
    });
  }

  /**
   * @param {!MDCTextFieldIconAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCTextFieldIconFoundation.defaultAdapter, adapter));

    /** @private {string?} */
    this.savedTabIndex_ = null;

    /** @private {function(!Event): undefined} */
    this.interactionHandler_ = (evt) => this.handleInteraction(evt);
  }

  init() {
    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

    ['click', 'keydown'].forEach((evtType) => {
      this.adapter_.registerInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  destroy() {
    ['click', 'keydown'].forEach((evtType) => {
      this.adapter_.deregisterInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  /** @param {boolean} disabled */
  setDisabled(disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].ICON_ROLE);
    }
  }

  /** @param {string} label */
  setAriaLabel(label) {
    this.adapter_.setAttr('aria-label', label);
  }

  /** @param {string} content */
  setContent(content) {
    this.adapter_.setContent(content);
  }

  /**
   * Handles an interaction event
   * @param {!Event} evt
   */
  handleInteraction(evt) {
    if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
      this.adapter_.notifyIconAction();
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTextFieldIconFoundation);


/***/ }),

/***/ "./node_modules/@material/textfield/icon/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/icon/index.js ***!
  \********************************************************/
/*! exports provided: MDCTextFieldIcon, MDCTextFieldIconFoundation */
/*! exports used: MDCTextFieldIcon, MDCTextFieldIconFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/icon/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
 * @final
 */
class MDCTextFieldIcon extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCTextFieldIcon}
   */
  static attachTo(root) {
    return new MDCTextFieldIcon(root);
  }

  /**
   * @return {!MDCTextFieldIconFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * @return {!MDCTextFieldIconFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](/** @type {!MDCTextFieldIconAdapter} */ (Object.assign({
      getAttr: (attr) => this.root_.getAttribute(attr),
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      removeAttr: (attr) => this.root_.removeAttribute(attr),
      setContent: (content) => {
        this.root_.textContent = content;
      },
      registerInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      notifyIconAction: () => this.emit(
        __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */),
    })));
  }
}




/***/ }),

/***/ "./node_modules/@material/textfield/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/textfield/index.js ***!
  \***************************************************/
/*! exports provided: MDCTextField, MDCTextFieldFoundation, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, MDCTextFieldIcon, MDCTextFieldIconFoundation */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return MDCTextField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(/*! @material/ripple/util */ "./node_modules/@material/ripple/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__ = __webpack_require__(/*! @material/line-ripple/index */ "./node_modules/@material/line-ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helper_text_index__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/@material/textfield/helper-text/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icon_index__ = __webpack_require__(/*! ./icon/index */ "./node_modules/@material/textfield/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_floating_label_index__ = __webpack_require__(/*! @material/floating-label/index */ "./node_modules/@material/textfield/node_modules/@material/floating-label/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_notched_outline_index__ = __webpack_require__(/*! @material/notched-outline/index */ "./node_modules/@material/textfield/node_modules/@material/notched-outline/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return __WEBPACK_IMPORTED_MODULE_5__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return __WEBPACK_IMPORTED_MODULE_8__icon_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return __WEBPACK_IMPORTED_MODULE_8__icon_index__["b"]; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */






/* eslint-disable no-unused-vars */





/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */
class MDCTextField extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /** @private {?Element} */
    this.input_;
    /** @type {?MDCRipple} */
    this.ripple;
    /** @private {?MDCLineRipple} */
    this.lineRipple_;
    /** @private {?MDCTextFieldHelperText} */
    this.helperText_;
    /** @private {?MDCTextFieldIcon} */
    this.icon_;
    /** @private {?MDCFloatingLabel} */
    this.label_;
    /** @private {?MDCNotchedOutline} */
    this.outline_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */
  static attachTo(root) {
    return new MDCTextField(root);
  }

  /**
   * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
   * creates a new MDCRipple.
   * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
   * creates a new MDCLineRipple.
   * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
   * creates a new MDCTextFieldHelperText.
   * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
   * creates a new MDCTextFieldIcon.
   * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
   * creates a new MDCFloatingLabel.
   * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
   * creates a new MDCNotchedOutline.
   */
  initialize(
    rippleFactory = (el, foundation) => new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */](el, foundation),
    lineRippleFactory = (el) => new __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__["a" /* MDCLineRipple */](el),
    helperTextFactory = (el) => new __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a" /* MDCTextFieldHelperText */](el),
    iconFactory = (el) => new __WEBPACK_IMPORTED_MODULE_8__icon_index__["a" /* MDCTextFieldIcon */](el),
    labelFactory = (el) => new __WEBPACK_IMPORTED_MODULE_9__material_floating_label_index__["a" /* MDCFloatingLabel */](el),
    outlineFactory = (el) => new __WEBPACK_IMPORTED_MODULE_10__material_notched_outline_index__["a" /* MDCNotchedOutline */](el)) {
    this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].INPUT_SELECTOR);
    const labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    const lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].LINE_RIPPLE_SELECTOR);
    if (lineRippleElement) {
      this.lineRipple_ = lineRippleFactory(lineRippleElement);
    }
    const outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].OUTLINE_SELECTOR);
    if (outlineElement) {
      this.outline_ = outlineFactory(outlineElement);
    }
    if (this.input_.hasAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].ARIA_CONTROLS)) {
      const helperTextElement = document.getElementById(this.input_.getAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].ARIA_CONTROLS));
      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }
    const iconElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].ICON_SELECTOR);
    if (iconElement) {
      this.icon_ = iconFactory(iconElement);
    }

    this.ripple = null;
    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* cssClasses */].BOX)) {
      const MATCHES = Object(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["b" /* getMatchesProperty */])(HTMLElement.prototype);
      const adapter =
        Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["a" /* MDCRipple */].createAdapter(/** @type {!RippleCapableSurface} */ (this)), {
          isSurfaceActive: () => this.input_[MATCHES](':active'),
          registerInteractionHandler: (type, handler) => this.input_.addEventListener(type, handler),
          deregisterInteractionHandler: (type, handler) => this.input_.removeEventListener(type, handler),
        });
      const foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["b" /* MDCRippleFoundation */](adapter);
      this.ripple = rippleFactory(this.root_, foundation);
    }
  }

  destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }
    if (this.helperText_) {
      this.helperText_.destroy();
    }
    if (this.icon_) {
      this.icon_.destroy();
    }
    if (this.label_) {
      this.label_.destroy();
    }
    if (this.outline_) {
      this.outline_.destroy();
    }
    super.destroy();
  }

  /**
   * Initiliazes the Text Field's internal state based on the environment's
   * state.
   */
  initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  }

  /**
   * @return {string} The value of the input.
   */
  get value() {
    return this.foundation_.getValue();
  }

  /**
   * @param {string} value The value to set on the input.
   */
  set value(value) {
    this.foundation_.setValue(value);
  }

  /**
   * @return {boolean} True if the Text Field is disabled.
   */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /**
   * @param {boolean} disabled Sets the Text Field disabled or enabled.
   */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /**
   * @return {boolean} valid True if the Text Field is valid.
   */
  get valid() {
    return this.foundation_.isValid();
  }

  /**
   * @param {boolean} valid Sets the Text Field valid or invalid.
   */
  set valid(valid) {
    this.foundation_.setValid(valid);
  }

  /**
   * @return {boolean} True if the Text Field is required.
   */
  get required() {
    return this.input_.required;
  }

  /**
   * @param {boolean} required Sets the Text Field to required.
   */
  set required(required) {
    this.input_.required = required;
  }

  /**
   * @return {string} The input element's validation pattern.
   */
  get pattern() {
    return this.input_.pattern;
  }

  /**
   * @param {string} pattern Sets the input element's validation pattern.
   */
  set pattern(pattern) {
    this.input_.pattern = pattern;
  }

  /**
   * @return {number} The input element's minLength.
   */
  get minLength() {
    return this.input_.minLength;
  }

  /**
   * @param {number} minLength Sets the input element's minLength.
   */
  set minLength(minLength) {
    this.input_.minLength = minLength;
  }

  /**
   * @return {number} The input element's maxLength.
   */
  get maxLength() {
    return this.input_.maxLength;
  }

  /**
   * @param {number} maxLength Sets the input element's maxLength.
   */
  set maxLength(maxLength) {
    // Chrome throws exception if maxLength is set < 0
    if (maxLength < 0) {
      this.input_.removeAttribute('maxLength');
    } else {
      this.input_.maxLength = maxLength;
    }
  }

  /**
   * @return {string} The input element's min.
   */
  get min() {
    return this.input_.min;
  }

  /**
   * @param {string} min Sets the input element's min.
   */
  set min(min) {
    this.input_.min = min;
  }

  /**
   * @return {string} The input element's max.
   */
  get max() {
    return this.input_.max;
  }

  /**
   * @param {string} max Sets the input element's max.
   */
  set max(max) {
    this.input_.max = max;
  }

  /**
   * @return {string} The input element's step.
   */
  get step() {
    return this.input_.step;
  }

  /**
   * @param {string} step Sets the input element's step.
   */
  set step(step) {
    this.input_.step = step;
  }

  /**
   * Sets the helper text element content.
   * @param {string} content
   */
  set helperTextContent(content) {
    this.foundation_.setHelperTextContent(content);
  }

  /**
   * Sets the aria label of the icon.
   * @param {string} label
   */
  set iconAriaLabel(label) {
    this.foundation_.setIconAriaLabel(label);
  }

  /**
   * Sets the text content of the icon.
   * @param {string} content
   */
  set iconContent(content) {
    this.foundation_.setIconContent(content);
  }

  /**
   * Recomputes the outline SVG path for the outline element.
   */
  layout() {
    const openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
  }

  /**
   * @return {!MDCTextFieldFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_5__foundation__["a" /* default */](
      /** @type {!MDCTextFieldAdapter} */ (Object.assign({
        addClass: (className) => this.root_.classList.add(className),
        removeClass: (className) => this.root_.classList.remove(className),
        hasClass: (className) => this.root_.classList.contains(className),
        registerTextFieldInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
        deregisterTextFieldInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
        registerValidationAttributeChangeHandler: (handler) => {
          const getAttributesList = (mutationsList) => mutationsList.map((mutation) => mutation.attributeName);
          const observer = new MutationObserver((mutationsList) => handler(getAttributesList(mutationsList)));
          const targetNode = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].INPUT_SELECTOR);
          const config = {attributes: true};
          observer.observe(targetNode, config);
          return observer;
        },
        deregisterValidationAttributeChangeHandler: (observer) => observer.disconnect(),
        isFocused: () => {
          return document.activeElement === this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* strings */].INPUT_SELECTOR);
        },
        isRtl: () => window.getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      },
      this.getInputAdapterMethods_(),
      this.getLabelAdapterMethods_(),
      this.getLineRippleAdapterMethods_(),
      this.getOutlineAdapterMethods_())),
      this.getFoundationMap_());
  }

  /**
   * @return {!{
   *   shakeLabel: function(boolean): undefined,
   *   floatLabel: function(boolean): undefined,
   *   hasLabel: function(): boolean,
   *   getLabelWidth: function(): number,
   * }}
   */
  getLabelAdapterMethods_() {
    return {
      shakeLabel: (shouldShake) => this.label_.shake(shouldShake),
      floatLabel: (shouldFloat) => this.label_.float(shouldFloat),
      hasLabel: () => !!this.label_,
      getLabelWidth: () => this.label_.getWidth(),
    };
  }

  /**
   * @return {!{
   *   activateLineRipple: function(): undefined,
   *   deactivateLineRipple: function(): undefined,
   *   setLineRippleTransformOrigin: function(number): undefined,
   * }}
   */
  getLineRippleAdapterMethods_() {
    return {
      activateLineRipple: () => {
        if (this.lineRipple_) {
          this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: () => {
        if (this.lineRipple_) {
          this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: (normalizedX) => {
        if (this.lineRipple_) {
          this.lineRipple_.setRippleCenter(normalizedX);
        }
      },
    };
  }

  /**
   * @return {!{
   *   notchOutline: function(number, boolean): undefined,
   *   hasOutline: function(): boolean,
   * }}
   */
  getOutlineAdapterMethods_() {
    return {
      notchOutline: (labelWidth, isRtl) => this.outline_.notch(labelWidth, isRtl),
      closeOutline: () => this.outline_.closeNotch(),
      hasOutline: () => !!this.outline_,
    };
  }

  /**
   * @return {!{
   *   registerInputInteractionHandler: function(string, function()): undefined,
   *   deregisterInputInteractionHandler: function(string, function()): undefined,
   *   getNativeInput: function(): ?Element,
   * }}
   */
  getInputAdapterMethods_() {
    return {
      registerInputInteractionHandler: (evtType, handler) => this.input_.addEventListener(evtType, handler),
      deregisterInputInteractionHandler: (evtType, handler) => this.input_.removeEventListener(evtType, handler),
      getNativeInput: () => this.input_,
    };
  }

  /**
   * Returns a map of all subcomponents to subfoundations.
   * @return {!FoundationMapType}
   */
  getFoundationMap_() {
    return {
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      icon: this.icon_ ? this.icon_.foundation : undefined,
    };
  }
}




/***/ }),

/***/ "./node_modules/@material/textfield/node_modules/@material/floating-label/adapter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material/textfield/node_modules/@material/floating-label/adapter.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Floating Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the floating label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCFloatingLabelAdapter {
  /**
   * Adds a class to the label element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the label element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Returns the width of the label element.
   * @return {number}
   */
  getWidth() {}

  /**
   * Registers an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterInteractionHandler(evtType, handler) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCFloatingLabelAdapter);


/***/ }),

/***/ "./node_modules/@material/textfield/node_modules/@material/floating-label/constants.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material/textfield/node_modules/@material/floating-label/constants.js ***!
  \*********************************************************************************************/
/*! exports provided: cssClasses */
/*! exports used: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
};




/***/ }),

/***/ "./node_modules/@material/textfield/node_modules/@material/floating-label/foundation.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material/textfield/node_modules/@material/floating-label/foundation.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/node_modules/@material/floating-label/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/node_modules/@material/floating-label/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
 * @final
 */
class MDCFloatingLabelFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCFloatingLabelAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCFloatingLabelAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      getWidth: () => {},
      registerInteractionHandler: () => {},
      deregisterInteractionHandler: () => {},
    });
  }

  /**
   * @param {!MDCFloatingLabelAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCFloatingLabelFoundation.defaultAdapter, adapter));

    /** @private {function(!Event): undefined} */
    this.shakeAnimationEndHandler_ = () => this.handleShakeAnimationEnd_();
  }

  init() {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  }

  /**
   * Returns the width of the label element.
   * @return {number}
   */
  getWidth() {
    return this.adapter_.getWidth();
  }

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake adds shake class if true,
   * otherwise removes shake class.
   */
  shake(shouldShake) {
    const {LABEL_SHAKE} = MDCFloatingLabelFoundation.cssClasses;
    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  }

  /**
   * Styles the label to float or dock.
   * @param {boolean} shouldFloat adds float class if true, otherwise remove
   * float and shake class to dock label.
   */
  float(shouldFloat) {
    const {LABEL_FLOAT_ABOVE, LABEL_SHAKE} = MDCFloatingLabelFoundation.cssClasses;
    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  }

  /**
   * Handles an interaction event on the root element.
   */
  handleShakeAnimationEnd_() {
    const {LABEL_SHAKE} = MDCFloatingLabelFoundation.cssClasses;
    this.adapter_.removeClass(LABEL_SHAKE);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFloatingLabelFoundation);


/***/ }),

/***/ "./node_modules/@material/textfield/node_modules/@material/floating-label/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material/textfield/node_modules/@material/floating-label/index.js ***!
  \*****************************************************************************************/
/*! exports provided: MDCFloatingLabel, MDCFloatingLabelFoundation */
/*! exports used: MDCFloatingLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFloatingLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/node_modules/@material/floating-label/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/node_modules/@material/floating-label/foundation.js");
/* unused harmony reexport MDCFloatingLabelFoundation */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
 * @final
 */
class MDCFloatingLabel extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCFloatingLabel}
   */
  static attachTo(root) {
    return new MDCFloatingLabel(root);
  }

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake styles the label to shake by adding shake class
   * if true, otherwise will stop shaking by removing shake class.
   */
  shake(shouldShake) {
    this.foundation_.shake(shouldShake);
  }

  /**
   * Styles label to float/dock.
   * @param {boolean} shouldFloat styles the label to float by adding float class
   * if true, otherwise docks the label by removing the float class.
   */
  float(shouldFloat) {
    this.foundation_.float(shouldFloat);
  }

  /**
   * @return {number}
   */
  getWidth() {
    return this.foundation_.getWidth();
  }

  /**
   * @return {!MDCFloatingLabelFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      getWidth: () => this.root_.offsetWidth,
      registerInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
    });
  }
}




/***/ }),

/***/ "./node_modules/@material/textfield/node_modules/@material/notched-outline/adapter.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@material/textfield/node_modules/@material/notched-outline/adapter.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Notched Outline.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Notched Outline into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCNotchedOutlineAdapter {
  /**
   * Returns the width of the root element.
   * @return {number}
   */
  getWidth() {}

  /**
   * Returns the height of the root element.
   * @return {number}
   */
  getHeight() {}

  /**
   * Adds a class to the root element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the root element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Sets the "d" attribute of the outline element's SVG path.
   * @param {string} value
   */
  setOutlinePathAttr(value) {}

  /**
   * Returns the idle outline element's computed style value of the given css property `propertyName`.
   * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
   * @param {string} propertyName
   * @return {string}
   */
  getIdleOutlineStyleValue(propertyName) {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCNotchedOutlineAdapter);


/***/ }),

/***/ "./node_modules/@material/textfield/node_modules/@material/notched-outline/constants.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material/textfield/node_modules/@material/notched-outline/constants.js ***!
  \**********************************************************************************************/
/*! exports provided: cssClasses, strings */
/*! exports used: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const strings = {
  PATH_SELECTOR: '.mdc-notched-outline__path',
  IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle',
};

/** @enum {string} */
const cssClasses = {
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
};




/***/ }),

/***/ "./node_modules/@material/textfield/node_modules/@material/notched-outline/foundation.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material/textfield/node_modules/@material/notched-outline/foundation.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/node_modules/@material/notched-outline/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
 * @final
 */
class MDCNotchedOutlineFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /**
   * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCNotchedOutlineAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCNotchedOutlineAdapter} */ ({
      getWidth: () => {},
      getHeight: () => {},
      addClass: () => {},
      removeClass: () => {},
      setOutlinePathAttr: () => {},
      getIdleOutlineStyleValue: () => {},
    });
  }

  /**
   * @param {!MDCNotchedOutlineAdapter} adapter
   */
  constructor(adapter) {
    super(Object.assign(MDCNotchedOutlineFoundation.defaultAdapter, adapter));
  }

  /**
   * Adds the outline notched selector and updates the notch width
   * calculated based off of notchWidth and isRtl.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   */
  notch(notchWidth, isRtl = false) {
    const {OUTLINE_NOTCHED} = MDCNotchedOutlineFoundation.cssClasses;
    this.adapter_.addClass(OUTLINE_NOTCHED);
    this.updateSvgPath_(notchWidth, isRtl);
  }

  /**
   * Removes notched outline selector to close the notch in the outline.
   */
  closeNotch() {
    const {OUTLINE_NOTCHED} = MDCNotchedOutlineFoundation.cssClasses;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
  }

  /**
   * Updates the SVG path of the focus outline element based on the notchWidth
   * and the RTL context.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   * @private
   */
  updateSvgPath_(notchWidth, isRtl) {
    // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
    const radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') ||
        this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
    const radius = parseFloat(radiusStyleValue);
    const width = this.adapter_.getWidth();
    const height = this.adapter_.getHeight();
    const cornerWidth = radius + 1.2;
    const leadingStrokeLength = Math.abs(11 - cornerWidth);
    const paddedNotchWidth = notchWidth + 8;

    // The right, bottom, and left sides of the outline follow the same SVG path.
    const pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius
      + 'v' + (height - (2 * cornerWidth))
      + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius
      + 'h' + (-width + (2 * cornerWidth))
      + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius
      + 'v' + (-height + (2 * cornerWidth))
      + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

    let path;
    if (!isRtl) {
      path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1
        + 'h' + (width - (2 * cornerWidth) - paddedNotchWidth - leadingStrokeLength)
        + pathMiddle
        + 'h' + leadingStrokeLength;
    } else {
      path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1
        + 'h' + leadingStrokeLength
        + pathMiddle
        + 'h' + (width - (2 * cornerWidth) - paddedNotchWidth - leadingStrokeLength);
    }

    this.adapter_.setOutlinePathAttr(path);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCNotchedOutlineFoundation);


/***/ }),

/***/ "./node_modules/@material/textfield/node_modules/@material/notched-outline/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material/textfield/node_modules/@material/notched-outline/index.js ***!
  \******************************************************************************************/
/*! exports provided: MDCNotchedOutline, MDCNotchedOutlineFoundation */
/*! exports used: MDCNotchedOutline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCNotchedOutline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/textfield/node_modules/@material/notched-outline/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/node_modules/@material/notched-outline/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/node_modules/@material/notched-outline/constants.js");
/* unused harmony reexport MDCNotchedOutlineFoundation */
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */
class MDCNotchedOutline extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /**
   * @param {!Element} root
   * @return {!MDCNotchedOutline}
   */
  static attachTo(root) {
    return new MDCNotchedOutline(root);
  }

  /**
    * Updates outline selectors and SVG path to open notch.
    * @param {number} notchWidth The notch width in the outline.
    * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
    * will be right justified in outline path, otherwise left justified.
    */
  notch(notchWidth, isRtl) {
    this.foundation_.notch(notchWidth, isRtl);
  }

  /**
   * Updates the outline selectors to close notch and return it to idle state.
   */
  closeNotch() {
    this.foundation_.closeNotch();
  }

  /**
   * @return {!MDCNotchedOutlineFoundation}
   */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      getWidth: () => this.root_.offsetWidth,
      getHeight: () => this.root_.offsetHeight,
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setOutlinePathAttr: (value) => {
        const path = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].PATH_SELECTOR);
        path.setAttribute('d', value);
      },
      getIdleOutlineStyleValue: (propertyName) => {
        const idleOutlineElement = this.root_.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].IDLE_OUTLINE_SELECTOR);
        return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
      },
    });
  }
}




/***/ }),

/***/ "./node_modules/focus-trap/index.js":
/*!******************************************!*\
  !*** ./node_modules/focus-trap/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var firstTabbableNode = null;
  var lastTabbableNode = null;
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;
  var tabEvent = null;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    // Ensure that the focused element doesn't capture the event that caused the focus trap activation
    setTimeout(function () {
      tryFocus(firstFocusNode());
    }, 0);
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();

    if (tabEvent) {
      readjustFocus(tabEvent);
    }
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    updateTabbableNodes();

    if (e.target.hasAttribute('tabindex') && Number(e.target.getAttribute('tabindex')) < 0) {
      return tabEvent = e;
    }

    e.preventDefault();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
    firstTabbableNode = tabbableNodes[0];
    lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
  }

  function readjustFocus(e) {
    if (e.shiftKey) return tryFocus(lastTabbableNode);

    tryFocus(firstTabbableNode);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  if (node === document.activeElement)  return;

  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;


/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable(elementDocument);

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors.join(','));

  if (options.includeContainer) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    if (
      candidateSelectors.some(function(candidateSelector) {
        return matches.call(el, candidateSelector);
      })
    ) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate, candidateIndexAttr, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndexAttr = parseInt(candidate.getAttribute('tabindex'), 10)
    candidateIndex = isNaN(candidateIndexAttr) ? candidate.tabIndex : candidateIndexAttr;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate, elementDocument)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
}

function createIsUnavailable(elementDocument) {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === elementDocument.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === elementDocument.documentElement) return false;

    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTlmZTkxY2MzYTY5YWNjN2NiY2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYXV0by1pbml0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvcGVyc2lzdGVudC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvcGVyc2lzdGVudC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3BlcnNpc3RlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvc2xpZGFibGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3NsaWRhYmxlL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvc2xpZGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvdGVtcG9yYXJ5L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci90ZW1wb3JhcnkvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci90ZW1wb3JhcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lLXJpcHBsZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lLXJpcHBsZS9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3Qvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3Qvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3Qvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbmFja2Jhci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbmFja2Jhci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc25hY2tiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1kZWZhdWx0LXNjcm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtbmVnYXRpdmUtc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1yZXZlcnNlLXNjcm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9mYWRpbmctZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL3NsaWRpbmctZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb2N1cy10cmFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImRyYXdlciIsIk1EQ1RlbXBvcmFyeURyYXdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuIiwidGFiQmFyIiwiTURDVGFiQmFyIiwiZGlhbG9nRG9tIiwiZGlhbG9nIiwiTURDRGlhbG9nIiwibGlzdGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidmFsdWUiLCJldnQiLCJsYXN0Rm9jdXNlZFRhcmdldCIsInRhcmdldCIsInNob3ciLCJzbmFja2JhckRvbSIsInNuYWNrYmFyIiwiTURDU25hY2tiYXIiLCJkYXRhT2JqIiwibWVzc2FnZSIsImlubmVySFRNTCIsImF1dG9Jbml0IiwicmVnaXN0ZXIiLCJNRENUZXh0RmllbGQiLCJNRENTZWxlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ3lEO0FBQ0U7QUFDbkQ7Ozs7Ozs7Ozs7Ozs7O0FDbkJSO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQztBQUNSOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjtBQUNyQjtBQUNBOztBQUVRO0FBQ0E7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLG1CQUFtQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQStFLE1BQU07QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLGtEQUFrRDtBQUNsRCwrQ0FBK0M7QUFDL0M7QUFDQSxtRkFBbUY7QUFDbkYscUZBQXFGO0FBQ3JGLHlGQUF5RjtBQUN6RiwyRkFBMkY7QUFDM0Ysd0VBQXdFO0FBQ3hFLDBFQUEwRTtBQUMxRSwwRUFBMEU7QUFDMUUsNEVBQTRFO0FBQzVFLHVEQUF1RDtBQUN2RCxtREFBbUQ7QUFDbkQsb0RBQW9EO0FBQ3BELHVEQUF1RDtBQUN2RCxzREFBc0Q7QUFDdEQsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7O0FBRUE7QUFDQSx1REFBdUQsS0FBSztBQUM1RDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJCO0FBQ1M7Ozs7Ozs7Ozs7Ozs7O0FDakJwQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9DO0FBQ1I7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELHNEQUFzRDtBQUN0RDtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xI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QSxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDZ0I7O0FBRWhCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRVE7Ozs7Ozs7Ozs7Ozs7QUMxRVI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDalFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOWZlOTFjYzNhNjlhY2M3Y2JjYyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL2Fzc2V0cy9jc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XHJcbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCAxJyk7XHJcblxyXG5pbXBvcnQge01EQ1RlbXBvcmFyeURyYXdlcn0gZnJvbSAnQG1hdGVyaWFsL2RyYXdlcic7XHJcbmltcG9ydCB7TURDRGlhbG9nfSBmcm9tICdAbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHtNRENUYWJCYXJ9IGZyb20gJ0BtYXRlcmlhbC90YWItYmFyJztcclxuaW1wb3J0IHtNRENTbmFja2Jhcn0gZnJvbSAnQG1hdGVyaWFsL3NuYWNrYmFyJztcclxuXHJcbi8vTURDVGVtcG9yYXJ5RHJhd2VyXHJcblxyXG52YXIgZHJhd2VyID0gbmV3IE1EQ1RlbXBvcmFyeURyYXdlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLWRyYXdlci0tdGVtcG9yYXJ5JykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVtby1tZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgZHJhd2VyLm9wZW4gPSB0cnVlO30pO1xyXG5cclxuLy9NRENUYWJCYXJcclxuY29uc3QgdGFiQmFyID0gbmV3IE1EQ1RhYkJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLXRhYi1iYXInKSk7XHJcblxyXG4vL0luIGVhY2ggUGFnZVxyXG4vL3RhYkJhci5hY3RpdmF0ZVRhYigyKTtcclxuXHJcbnZhciBkaWFsb2dEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlLWFjY291bnQtZGlhbG9nJyk7XHJcblxyXG5pZihkaWFsb2dEb20gIT09IG51bGwpe1xyXG4gICAgdmFyIGRpYWxvZyA9IG5ldyBNRENEaWFsb2coZGlhbG9nRG9tKTtcclxuXHJcbiAgICBkaWFsb2cubGlzdGVuKCdNRENEaWFsb2c6YWNjZXB0JywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZS1hY2NvdW50LWRpYWxvZy1hY2NlcHQnKS52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmUtYWNjb3VudC1kaWFsb2ctYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZGlhbG9nLmxhc3RGb2N1c2VkVGFyZ2V0ID0gZXZ0LnRhcmdldDtcclxuICAgICAgICBkaWFsb2cuc2hvdygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbnZhciBzbmFja2JhckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtc25hY2tiYXInKTtcclxuXHJcbmlmKHNuYWNrYmFyRG9tICE9PSBudWxsKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImhhdmUgc25ha2JhclwiKTtcclxuICAgIGNvbnN0IHNuYWNrYmFyID0gbmV3IE1EQ1NuYWNrYmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtc25hY2tiYXInKSk7XHJcblxyXG4gICAgY29uc3QgZGF0YU9iaiA9IHtcclxuICAgICAgICBtZXNzYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLXNuYWNrYmFyX19tZXNzYWdlJykuaW5uZXJIVE1MLFxyXG4gICAgfTtcclxuXHJcbiAgICBzbmFja2Jhci5zaG93KGRhdGFPYmopO1xyXG5cclxufVxyXG5cclxuXHJcbmltcG9ydCBhdXRvSW5pdCBmcm9tICdAbWF0ZXJpYWwvYXV0by1pbml0JztcclxuaW1wb3J0IHtNRENUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQnO1xyXG5pbXBvcnQge01EQ1NlbGVjdH0gZnJvbSAnQG1hdGVyaWFsL3NlbGVjdCdcclxuYXV0b0luaXQucmVnaXN0ZXIoJ01EQ1RleHRGaWVsZCcsIE1EQ1RleHRGaWVsZCk7XHJcbmF1dG9Jbml0LnJlZ2lzdGVyKCdNRENTZWxlY3QnLCBNRENTZWxlY3QpO1xyXG5hdXRvSW5pdCgpO1xyXG5cclxuLy9UZXN0IEpTXHJcbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCAyJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hcHAuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBub1ByZWZpeDogc3RyaW5nLFxuICogICB3ZWJraXRQcmVmaXg6IHN0cmluZyxcbiAqICAgc3R5bGVQcm9wZXJ0eTogc3RyaW5nXG4gKiB9fVxuICovXG5sZXQgVmVuZG9yUHJvcGVydHlNYXBUeXBlO1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGV2ZW50VHlwZU1hcCA9IHtcbiAgJ2FuaW1hdGlvbnN0YXJ0Jzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbmVuZCc6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbml0ZXJhdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb25lbmQnOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAndHJhbnNpdGlvbicsXG4gIH0sXG59O1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGNzc1Byb3BlcnR5TWFwID0ge1xuICAnYW5pbWF0aW9uJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gIH0sXG4gICd0cmFuc2Zvcm0nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2Zvcm0nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICB9LFxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVyU2hhcGUod2luZG93T2JqKSB7XG4gIHJldHVybiAod2luZG93T2JqWydkb2N1bWVudCddICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddID09PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBldmVudEZvdW5kSW5NYXBzKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgfHwgZXZlbnRUeXBlIGluIGNzc1Byb3BlcnR5TWFwKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcGFyYW0geyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gbWFwXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRKYXZhU2NyaXB0RXZlbnROYW1lKGV2ZW50VHlwZSwgbWFwLCBlbCkge1xuICByZXR1cm4gbWFwW2V2ZW50VHlwZV0uc3R5bGVQcm9wZXJ0eSBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgYnJvd3NlciBwcmVmaXggZm9yIENTUzMgYW5pbWF0aW9uIGV2ZW50c1xuICogYW5kIHByb3BlcnR5IG5hbWVzLlxuICogQHBhcmFtIHshT2JqZWN0fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uTmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICBpZiAoIWhhc1Byb3BlclNoYXBlKHdpbmRvd09iaikgfHwgIWV2ZW50Rm91bmRJbk1hcHMoZXZlbnRUeXBlKSkge1xuICAgIHJldHVybiBldmVudFR5cGU7XG4gIH1cblxuICBjb25zdCBtYXAgPSAvKiogQHR5cGUgeyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi8gKFxuICAgIGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgPyBldmVudFR5cGVNYXAgOiBjc3NQcm9wZXJ0eU1hcFxuICApO1xuICBjb25zdCBlbCA9IHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddKCdkaXYnKTtcbiAgbGV0IGV2ZW50TmFtZSA9ICcnO1xuXG4gIGlmIChtYXAgPT09IGV2ZW50VHlwZU1hcCkge1xuICAgIGV2ZW50TmFtZSA9IGdldEphdmFTY3JpcHRFdmVudE5hbWUoZXZlbnRUeXBlLCBtYXAsIGVsKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudE5hbWUgPSBtYXBbZXZlbnRUeXBlXS5ub1ByZWZpeCBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TmFtZTtcbn1cblxuLy8gUHVibGljIGZ1bmN0aW9ucyB0byBhY2Nlc3MgZ2V0QW5pbWF0aW9uTmFtZSgpIGZvciBKYXZhU2NyaXB0IGV2ZW50cyBvciBDU1Ncbi8vIHByb3BlcnR5IG5hbWVzLlxuXG5jb25zdCB0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMgPSBbJ3RyYW5zZm9ybScsICdXZWJraXRUcmFuc2Zvcm0nLCAnTW96VHJhbnNmb3JtJywgJ09UcmFuc2Zvcm0nLCAnTVNUcmFuc2Zvcm0nXTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuZXhwb3J0IHt0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMsIGdldENvcnJlY3RFdmVudE5hbWUsIGdldENvcnJlY3RQcm9wZXJ0eU5hbWV9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5jb25zdCByZWdpc3RyeSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmNvbnN0IENPTlNPTEVfV0FSTiA9IGNvbnNvbGUud2Fybi5iaW5kKGNvbnNvbGUpO1xuXG5mdW5jdGlvbiBfZW1pdChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0O1xuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICB9XG5cbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xufVxuXG4vKipcbiAqIEF1dG8taW5pdGlhbGl6ZXMgYWxsIG1kYyBjb21wb25lbnRzIG9uIGEgcGFnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWRjQXV0b0luaXQocm9vdCA9IGRvY3VtZW50LCB3YXJuID0gQ09OU09MRV9XQVJOKSB7XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgY29uc3Qgbm9kZXMgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1kYy1hdXRvLWluaXRdJyk7XG4gIGZvciAobGV0IGkgPSAwLCBub2RlOyAobm9kZSA9IG5vZGVzW2ldKTsgaSsrKSB7XG4gICAgY29uc3QgY3Rvck5hbWUgPSBub2RlLmRhdGFzZXQubWRjQXV0b0luaXQ7XG4gICAgaWYgKCFjdG9yTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcobWRjLWF1dG8taW5pdCkgQ29uc3RydWN0b3IgbmFtZSBtdXN0IGJlIGdpdmVuLicpO1xuICAgIH1cblxuICAgIGNvbnN0IEN0b3IgPSByZWdpc3RyeVtjdG9yTmFtZV07XG4gICAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAobWRjLWF1dG8taW5pdCkgQ291bGQgbm90IGZpbmQgY29uc3RydWN0b3IgaW4gcmVnaXN0cnkgZm9yICR7Y3Rvck5hbWV9YCk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGVbY3Rvck5hbWVdKSB7XG4gICAgICB3YXJuKGAobWRjLWF1dG8taW5pdCkgQ29tcG9uZW50IGFscmVhZHkgaW5pdGlhbGl6ZWQgZm9yICR7bm9kZX0uIFNraXBwaW5nLi4uYCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBTaG91bGQgd2UgbWFrZSBhbiBlc2xpbnQgcnVsZSBmb3IgYW4gYXR0YWNoVG8oKSBzdGF0aWMgbWV0aG9kP1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IEN0b3IuYXR0YWNoVG8obm9kZSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vZGUsIGN0b3JOYW1lLCB7XG4gICAgICB2YWx1ZTogY29tcG9uZW50LFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSk7XG4gICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gIH1cblxuICBfZW1pdCgnTURDQXV0b0luaXQ6RW5kJywge30pO1xuICByZXR1cm4gY29tcG9uZW50cztcbn1cblxubWRjQXV0b0luaXQucmVnaXN0ZXIgPSBmdW5jdGlvbihjb21wb25lbnROYW1lLCBDdG9yLCB3YXJuID0gQ09OU09MRV9XQVJOKSB7XG4gIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgKG1kYy1hdXRvLWluaXQpIEludmFsaWQgQ3RvciB2YWx1ZSAke0N0b3J9LiBFeHBlY3RlZCBmdW5jdGlvbmApO1xuICB9XG4gIGlmIChyZWdpc3RyeVtjb21wb25lbnROYW1lXSkge1xuICAgIHdhcm4oXG4gICAgICBgKG1kYy1hdXRvLWluaXQpIE92ZXJyaWRpbmcgcmVnaXN0cmF0aW9uIGZvciAke2NvbXBvbmVudE5hbWV9IHdpdGggJHtDdG9yfS4gYCArXG4gICAgICBgV2FzOiAke3JlZ2lzdHJ5W2NvbXBvbmVudE5hbWVdfWApO1xuICB9XG4gIHJlZ2lzdHJ5W2NvbXBvbmVudE5hbWVdID0gQ3Rvcjtcbn07XG5cbm1kY0F1dG9Jbml0LmRlcmVnaXN0ZXIgPSBmdW5jdGlvbihjb21wb25lbnROYW1lKSB7XG4gIGRlbGV0ZSByZWdpc3RyeVtjb21wb25lbnROYW1lXTtcbn07XG5cbm1kY0F1dG9Jbml0LmRlcmVnaXN0ZXJBbGwgPSBmdW5jdGlvbigpIHtcbiAgT2JqZWN0LmtleXMocmVnaXN0cnkpLmZvckVhY2godGhpcy5kZXJlZ2lzdGVyLCB0aGlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYXV0by1pbml0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYXV0by1pbml0L2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHtNRENGb3VuZGF0aW9uLCBNRENDb21wb25lbnR9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtZGlhbG9nJyxcbiAgT1BFTjogJ21kYy1kaWFsb2ctLW9wZW4nLFxuICBBTklNQVRJTkc6ICdtZGMtZGlhbG9nLS1hbmltYXRpbmcnLFxuICBCQUNLRFJPUDogJ21kYy1kaWFsb2dfX2JhY2tkcm9wJyxcbiAgU0NST0xMX0xPQ0s6ICdtZGMtZGlhbG9nLXNjcm9sbC1sb2NrJyxcbiAgQUNDRVBUX0JUTjogJ21kYy1kaWFsb2dfX2Zvb3Rlcl9fYnV0dG9uLS1hY2NlcHQnLFxuICBDQU5DRUxfQlROOiAnbWRjLWRpYWxvZ19fZm9vdGVyX19idXR0b24tLWNhbmNlbCcsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBPUEVOX0RJQUxPR19TRUxFQ1RPUjogJy5tZGMtZGlhbG9nLS1vcGVuJyxcbiAgRElBTE9HX1NVUkZBQ0VfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fc3VyZmFjZScsXG4gIEFDQ0VQVF9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19mb290ZXJfX2J1dHRvbi0tYWNjZXB0JyxcbiAgQUNDRVBUX0VWRU5UOiAnTURDRGlhbG9nOmFjY2VwdCcsXG4gIENBTkNFTF9FVkVOVDogJ01EQ0RpYWxvZzpjYW5jZWwnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgRElBTE9HX0FOSU1BVElPTl9USU1FX01TOiAxMjAsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TURDRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvaW5kZXgnO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1EQ0RpYWxvZ0ZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBhZGRCb2R5Q2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVCb2R5Q2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBldmVudFRhcmdldEhhc0NsYXNzOiAoLyogdGFyZ2V0OiBFdmVudFRhcmdldCwgY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IC8qIGJvb2xlYW4gKi8gZmFsc2UsXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclN1cmZhY2VJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyU3VyZmFjZUludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dDogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRLZXlkb3duSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50S2V5ZG93bkhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIG5vdGlmeUFjY2VwdDogKCkgPT4ge30sXG4gICAgICBub3RpZnlDYW5jZWw6ICgpID0+IHt9LFxuICAgICAgdHJhcEZvY3VzT25TdXJmYWNlOiAoKSA9PiB7fSxcbiAgICAgIHVudHJhcEZvY3VzT25TdXJmYWNlOiAoKSA9PiB7fSxcbiAgICAgIGlzRGlhbG9nOiAoLyogZWw6IEVsZW1lbnQgKi8pID0+IC8qIGJvb2xlYW4gKi8gZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENEaWFsb2dGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgdGhpcy5jb21wb25lbnRDbGlja0hhbmRsZXJfID0gKGV2dCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRIYXNDbGFzcyhldnQudGFyZ2V0LCBjc3NDbGFzc2VzLkJBQ0tEUk9QKSkge1xuICAgICAgICB0aGlzLmNhbmNlbCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZGlhbG9nQ2xpY2tIYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlRGlhbG9nQ2xpY2tfKGV2dCk7XG4gICAgdGhpcy5kb2N1bWVudEtleWRvd25IYW5kbGVyXyA9IChldnQpID0+IHtcbiAgICAgIGlmIChldnQua2V5ICYmIGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNhbmNlbCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy50aW1lcklkXyA9IDA7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lckVuZF8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXyhldnQpO1xuICB9O1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgZGlhbG9nIGlzIGNsZWFuZWQgdXAgd2hlbiBkZXN0cm95ZWRcbiAgICBpZiAodGhpcy5pc09wZW5fKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICAgIC8vIEZpbmFsIGNsZWFudXAgb2YgYW5pbWF0aW5nIGNsYXNzIGluIGNhc2UgdGhlIHRpbWVyIGhhcyBub3QgY29tcGxldGVkLlxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDRGlhbG9nRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJJZF8pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmlzT3Blbl8gPSB0cnVlO1xuICAgIHRoaXMuZGlzYWJsZVNjcm9sbF8oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRLZXlkb3duSGFuZGxlcih0aGlzLmRvY3VtZW50S2V5ZG93bkhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyU3VyZmFjZUludGVyYWN0aW9uSGFuZGxlcignY2xpY2snLCB0aGlzLmRpYWxvZ0NsaWNrSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2NsaWNrJywgdGhpcy5jb21wb25lbnRDbGlja0hhbmRsZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklkXyk7XG4gICAgdGhpcy50aW1lcklkXyA9IHNldFRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lckVuZF8sIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ubnVtYmVycy5ESUFMT0dfQU5JTUFUSU9OX1RJTUVfTVMpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDRGlhbG9nRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENEaWFsb2dGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICB0aGlzLmVuYWJsZVNjcm9sbF8oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJTdXJmYWNlSW50ZXJhY3Rpb25IYW5kbGVyKCdjbGljaycsIHRoaXMuZGlhbG9nQ2xpY2tIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRLZXlkb3duSGFuZGxlcih0aGlzLmRvY3VtZW50S2V5ZG93bkhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2NsaWNrJywgdGhpcy5jb21wb25lbnRDbGlja0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVudHJhcEZvY3VzT25TdXJmYWNlKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJJZF8pO1xuICAgIHRoaXMudGltZXJJZF8gPSBzZXRUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJFbmRfLCBNRENEaWFsb2dGb3VuZGF0aW9uLm51bWJlcnMuRElBTE9HX0FOSU1BVElPTl9USU1FX01TKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ0RpYWxvZ0ZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDRGlhbG9nRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmlzT3Blbl87XG4gIH1cblxuICBhY2NlcHQoc2hvdWxkTm90aWZ5KSB7XG4gICAgaWYgKHNob3VsZE5vdGlmeSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlBY2NlcHQoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjYW5jZWwoc2hvdWxkTm90aWZ5KSB7XG4gICAgaWYgKHNob3VsZE5vdGlmeSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDYW5jZWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBoYW5kbGVEaWFsb2dDbGlja18oZXZ0KSB7XG4gICAgY29uc3Qge3RhcmdldH0gPSBldnQ7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRIYXNDbGFzcyh0YXJnZXQsIGNzc0NsYXNzZXMuQUNDRVBUX0JUTikpIHtcbiAgICAgIHRoaXMuYWNjZXB0KHRydWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldEhhc0NsYXNzKHRhcmdldCwgY3NzQ2xhc3Nlcy5DQU5DRUxfQlROKSkge1xuICAgICAgdGhpcy5jYW5jZWwodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDRGlhbG9nRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gICAgaWYgKHRoaXMuaXNPcGVuXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy50cmFwRm9jdXNPblN1cmZhY2UoKTtcbiAgICB9XG4gIH07XG5cbiAgZGlzYWJsZVNjcm9sbF8oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRCb2R5Q2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExfTE9DSyk7XG4gIH1cblxuICBlbmFibGVTY3JvbGxfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge01EQ0NvbXBvbmVudH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvaW5kZXgnO1xuaW1wb3J0IHtNRENSaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnO1xuXG5pbXBvcnQgTURDRGlhbG9nRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQge01EQ0RpYWxvZ0ZvdW5kYXRpb259O1xuZXhwb3J0IHt1dGlsfTtcblxuZXhwb3J0IGNsYXNzIE1EQ0RpYWxvZyBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENEaWFsb2cocm9vdCk7XG4gIH1cblxuICBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc09wZW4oKTtcbiAgfVxuXG4gIGdldCBhY2NlcHRCdXR0b25fKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTURDRGlhbG9nRm91bmRhdGlvbi5zdHJpbmdzLkFDQ0VQVF9TRUxFQ1RPUik7XG4gIH1cblxuICBnZXQgZGlhbG9nU3VyZmFjZV8oKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENEaWFsb2dGb3VuZGF0aW9uLnN0cmluZ3MuRElBTE9HX1NVUkZBQ0VfU0VMRUNUT1IpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmZvY3VzVHJhcF8gPSB1dGlsLmNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlKHRoaXMuZGlhbG9nU3VyZmFjZV8sIHRoaXMuYWNjZXB0QnV0dG9uXyk7XG4gICAgdGhpcy5mb290ZXJCdG5SaXBwbGVzXyA9IFtdO1xuXG4gICAgY29uc3QgZm9vdGVyQnRucyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1kaWFsb2dfX2Zvb3Rlcl9fYnV0dG9uJyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGZvb3RlckJ0bjsgZm9vdGVyQnRuID0gZm9vdGVyQnRuc1tpXTsgaSsrKSB7XG4gICAgICB0aGlzLmZvb3RlckJ0blJpcHBsZXNfLnB1c2gobmV3IE1EQ1JpcHBsZShmb290ZXJCdG4pKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZm9vdGVyQnRuUmlwcGxlc18uZm9yRWFjaCgocmlwcGxlKSA9PiByaXBwbGUuZGVzdHJveSgpKTtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ub3BlbigpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZSgpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENEaWFsb2dGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGFkZEJvZHlDbGFzczogKGNsYXNzTmFtZSkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVCb2R5Q2xhc3M6IChjbGFzc05hbWUpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgZXZlbnRUYXJnZXRIYXNDbGFzczogKHRhcmdldCwgY2xhc3NOYW1lKSA9PiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKSxcbiAgICAgIHJlZ2lzdGVyU3VyZmFjZUludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4gdGhpcy5kaWFsb2dTdXJmYWNlXy5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyU3VyZmFjZUludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4gdGhpcy5kaWFsb2dTdXJmYWNlXy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciksXG4gICAgICByZWdpc3RlckRvY3VtZW50S2V5ZG93bkhhbmRsZXI6IChoYW5kbGVyKSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRLZXlkb3duSGFuZGxlcjogKGhhbmRsZXIpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKSxcbiAgICAgIG5vdGlmeUFjY2VwdDogKCkgPT4gdGhpcy5lbWl0KE1EQ0RpYWxvZ0ZvdW5kYXRpb24uc3RyaW5ncy5BQ0NFUFRfRVZFTlQpLFxuICAgICAgbm90aWZ5Q2FuY2VsOiAoKSA9PiB0aGlzLmVtaXQoTURDRGlhbG9nRm91bmRhdGlvbi5zdHJpbmdzLkNBTkNFTF9FVkVOVCksXG4gICAgICB0cmFwRm9jdXNPblN1cmZhY2U6ICgpID0+IHRoaXMuZm9jdXNUcmFwXy5hY3RpdmF0ZSgpLFxuICAgICAgdW50cmFwRm9jdXNPblN1cmZhY2U6ICgpID0+IHRoaXMuZm9jdXNUcmFwXy5kZWFjdGl2YXRlKCksXG4gICAgICBpc0RpYWxvZzogKGVsKSA9PiBlbCA9PT0gdGhpcy5kaWFsb2dTdXJmYWNlXyxcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2Uoc3VyZmFjZUVsLCBhY2NlcHRCdXR0b25FbCwgZm9jdXNUcmFwRmFjdG9yeSA9IGNyZWF0ZUZvY3VzVHJhcCkge1xuICByZXR1cm4gZm9jdXNUcmFwRmFjdG9yeShzdXJmYWNlRWwsIHtcbiAgICBpbml0aWFsRm9jdXM6IGFjY2VwdEJ1dHRvbkVsLFxuICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLFxuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy91dGlsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmV4cG9ydCB7TURDVGVtcG9yYXJ5RHJhd2VyLCBNRENUZW1wb3JhcnlEcmF3ZXJGb3VuZGF0aW9ufSBmcm9tICcuL3RlbXBvcmFyeSc7XG5leHBvcnQge01EQ1BlcnNpc3RlbnREcmF3ZXIsIE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9ufSBmcm9tICcuL3BlcnNpc3RlbnQnO1xuZXhwb3J0IHt1dGlsfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtGT0NVU0FCTEVfRUxFTUVOVFN9IGZyb20gJy4uL3NsaWRhYmxlL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtZHJhd2VyLS1wZXJzaXN0ZW50JyxcbiAgT1BFTjogJ21kYy1kcmF3ZXItLW9wZW4nLFxuICBBTklNQVRJTkc6ICdtZGMtZHJhd2VyLS1hbmltYXRpbmcnLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIERSQVdFUl9TRUxFQ1RPUjogJy5tZGMtZHJhd2VyLS1wZXJzaXN0ZW50IC5tZGMtZHJhd2VyX19kcmF3ZXInLFxuICBGT0NVU0FCTEVfRUxFTUVOVFMsXG4gIE9QRU5fRVZFTlQ6ICdNRENQZXJzaXN0ZW50RHJhd2VyOm9wZW4nLFxuICBDTE9TRV9FVkVOVDogJ01EQ1BlcnNpc3RlbnREcmF3ZXI6Y2xvc2UnLFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvcGVyc2lzdGVudC9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvcGVyc2lzdGVudC9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtNRENTbGlkYWJsZURyYXdlckZvdW5kYXRpb259IGZyb20gJy4uL3NsaWRhYmxlL2luZGV4JztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNRENQZXJzaXN0ZW50RHJhd2VyRm91bmRhdGlvbiBleHRlbmRzIE1EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oTURDU2xpZGFibGVEcmF3ZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCB7XG4gICAgICBpc0RyYXdlcjogKCkgPT4gZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSxcbiAgICAgIE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuUk9PVCxcbiAgICAgIE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HLFxuICAgICAgTURDUGVyc2lzdGVudERyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgfVxuXG4gIGlzUm9vdFRyYW5zaXRpb25pbmdFdmVudFRhcmdldF8oZWwpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5pc0RyYXdlcihlbCk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvcGVyc2lzdGVudC9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3BlcnNpc3RlbnQvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge01EQ0NvbXBvbmVudH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvaW5kZXgnO1xuaW1wb3J0IE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3V0aWwnO1xuXG5leHBvcnQge01EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9ufTtcbmV4cG9ydCB7dXRpbH07XG5cbmV4cG9ydCBjbGFzcyBNRENQZXJzaXN0ZW50RHJhd2VyIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1BlcnNpc3RlbnREcmF3ZXIocm9vdCk7XG4gIH1cblxuICBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc09wZW4oKTtcbiAgfVxuXG4gIHNldCBvcGVuKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb25fLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgZHJhd2VyIGVsZW1lbnQgaW5zaWRlIHRoZSBjb21wb25lbnQuXG4gIGdldCBkcmF3ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENQZXJzaXN0ZW50RHJhd2VyRm91bmRhdGlvbi5zdHJpbmdzLkRSQVdFUl9TRUxFQ1RPUik7XG4gIH1cblxuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICBjb25zdCB7Rk9DVVNBQkxFX0VMRU1FTlRTfSA9IE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICByZXR1cm4gbmV3IE1EQ1BlcnNpc3RlbnREcmF3ZXJGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGhhc0NsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgaGFzTmVjZXNzYXJ5RG9tOiAoKSA9PiBCb29sZWFuKHRoaXMuZHJhd2VyKSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PlxuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIodXRpbC5yZW1hcEV2ZW50KGV2dCksIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKHV0aWwucmVtYXBFdmVudChldnQpLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRHJhd2VySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PlxuICAgICAgICB0aGlzLmRyYXdlci5hZGRFdmVudExpc3RlbmVyKHV0aWwucmVtYXBFdmVudChldnQpLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJEcmF3ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+XG4gICAgICAgIHRoaXMuZHJhd2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIodXRpbC5yZW1hcEV2ZW50KGV2dCksIGhhbmRsZXIpLFxuICAgICAgcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcjogKGhhbmRsZXIpID0+XG4gICAgICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOiAoaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlciksXG4gICAgICByZWdpc3RlckRvY3VtZW50S2V5ZG93bkhhbmRsZXI6IChoYW5kbGVyKSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRLZXlkb3duSGFuZGxlcjogKGhhbmRsZXIpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKSxcbiAgICAgIGdldERyYXdlcldpZHRoOiAoKSA9PiB0aGlzLmRyYXdlci5vZmZzZXRXaWR0aCxcbiAgICAgIHNldFRyYW5zbGF0ZVg6ICh2YWx1ZSkgPT4gdGhpcy5kcmF3ZXIuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIHV0aWwuZ2V0VHJhbnNmb3JtUHJvcGVydHlOYW1lKCksIHZhbHVlID09PSBudWxsID8gbnVsbCA6IGB0cmFuc2xhdGVYKCR7dmFsdWV9cHgpYCksXG4gICAgICBnZXRGb2N1c2FibGVFbGVtZW50czogKCkgPT4gdGhpcy5kcmF3ZXIucXVlcnlTZWxlY3RvckFsbChGT0NVU0FCTEVfRUxFTUVOVFMpLFxuICAgICAgc2F2ZUVsZW1lbnRUYWJTdGF0ZTogKGVsKSA9PiB1dGlsLnNhdmVFbGVtZW50VGFiU3RhdGUoZWwpLFxuICAgICAgcmVzdG9yZUVsZW1lbnRUYWJTdGF0ZTogKGVsKSA9PiB1dGlsLnJlc3RvcmVFbGVtZW50VGFiU3RhdGUoZWwpLFxuICAgICAgbWFrZUVsZW1lbnRVbnRhYmJhYmxlOiAoZWwpID0+IGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSksXG4gICAgICBub3RpZnlPcGVuOiAoKSA9PiB0aGlzLmVtaXQoTURDUGVyc2lzdGVudERyYXdlckZvdW5kYXRpb24uc3RyaW5ncy5PUEVOX0VWRU5UKSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB0aGlzLmVtaXQoTURDUGVyc2lzdGVudERyYXdlckZvdW5kYXRpb24uc3RyaW5ncy5DTE9TRV9FVkVOVCksXG4gICAgICBpc1J0bDogKCkgPT4gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnJvb3RfKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICBpc0RyYXdlcjogKGVsKSA9PiBlbCA9PT0gdGhpcy5kcmF3ZXIsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvcGVyc2lzdGVudC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9wZXJzaXN0ZW50L2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjb25zdCBGT0NVU0FCTEVfRUxFTUVOVFMgPVxuICAnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksICcgK1xuICAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgaWZyYW1lLCBvYmplY3QsIGVtYmVkLCBbdGFiaW5kZXhdLCBbY29udGVudGVkaXRhYmxlXSc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3NsaWRhYmxlL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9zbGlkYWJsZS9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtNRENGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBNRENTbGlkYWJsZURyYXdlckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgaGFzTmVjZXNzYXJ5RG9tOiAoKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEcmF3ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnQ6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRHJhd2VySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckRvY3VtZW50S2V5ZG93bkhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBzZXRUcmFuc2xhdGVYOiAoLyogdmFsdWU6IG51bWJlciB8IG51bGwgKi8pID0+IHt9LFxuICAgICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHM6ICgpID0+IC8qIE5vZGVMaXN0ICovIHt9LFxuICAgICAgc2F2ZUVsZW1lbnRUYWJTdGF0ZTogKC8qIGVsOiBFbGVtZW50ICovKSA9PiB7fSxcbiAgICAgIHJlc3RvcmVFbGVtZW50VGFiU3RhdGU6ICgvKiBlbDogRWxlbWVudCAqLykgPT4ge30sXG4gICAgICBtYWtlRWxlbWVudFVudGFiYmFibGU6ICgvKiBlbDogRWxlbWVudCAqLykgPT4ge30sXG4gICAgICBub3RpZnlPcGVuOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7fSxcbiAgICAgIGlzUnRsOiAoKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgZ2V0RHJhd2VyV2lkdGg6ICgpID0+IC8qIG51bWJlciAqLyAwLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyLCByb290Q3NzQ2xhc3MsIGFuaW1hdGluZ0Nzc0NsYXNzLCBvcGVuQ3NzQ2xhc3MpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgdGhpcy5yb290Q3NzQ2xhc3NfID0gcm9vdENzc0NsYXNzO1xuICAgIHRoaXMuYW5pbWF0aW5nQ3NzQ2xhc3NfID0gYW5pbWF0aW5nQ3NzQ2xhc3M7XG4gICAgdGhpcy5vcGVuQ3NzQ2xhc3NfID0gb3BlbkNzc0NsYXNzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKGV2dCk7XG5cbiAgICB0aGlzLmluZXJ0XyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jb21wb25lbnRUb3VjaFN0YXJ0SGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZVRvdWNoU3RhcnRfKGV2dCk7XG4gICAgdGhpcy5jb21wb25lbnRUb3VjaE1vdmVIYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlVG91Y2hNb3ZlXyhldnQpO1xuICAgIHRoaXMuY29tcG9uZW50VG91Y2hFbmRIYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlVG91Y2hFbmRfKGV2dCk7XG4gICAgdGhpcy5kb2N1bWVudEtleWRvd25IYW5kbGVyXyA9IChldnQpID0+IHtcbiAgICAgIGlmIChldnQua2V5ICYmIGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgUk9PVCA9IHRoaXMucm9vdENzc0NsYXNzXztcbiAgICBjb25zdCBPUEVOID0gdGhpcy5vcGVuQ3NzQ2xhc3NfO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKFJPT1QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Uk9PVH0gY2xhc3MgcmVxdWlyZWQgaW4gcm9vdCBlbGVtZW50LmApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNOZWNlc3NhcnlEb20oKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlZCBET00gbm9kZXMgbWlzc2luZyBpbiAke1JPT1R9IGNvbXBvbmVudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhPUEVOKSkge1xuICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXRhYmluYXRlXygpO1xuICAgICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRyYXdlckludGVyYWN0aW9uSGFuZGxlcigndG91Y2hzdGFydCcsIHRoaXMuY29tcG9uZW50VG91Y2hTdGFydEhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCd0b3VjaG1vdmUnLCB0aGlzLmNvbXBvbmVudFRvdWNoTW92ZUhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCd0b3VjaGVuZCcsIHRoaXMuY29tcG9uZW50VG91Y2hFbmRIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRyYXdlckludGVyYWN0aW9uSGFuZGxlcigndG91Y2hzdGFydCcsIHRoaXMuY29tcG9uZW50VG91Y2hTdGFydEhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ3RvdWNobW92ZScsIHRoaXMuY29tcG9uZW50VG91Y2hNb3ZlSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigndG91Y2hlbmQnLCB0aGlzLmNvbXBvbmVudFRvdWNoRW5kSGFuZGxlcl8pO1xuICAgIC8vIERlcmVnaXN0ZXIgdGhlIGRvY3VtZW50IGtleWRvd24gaGFuZGxlciBqdXN0IGluIGNhc2UgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgd2hpbGUgdGhlIG1lbnUgaXMgb3Blbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyKHRoaXMuZG9jdW1lbnRLZXlkb3duSGFuZGxlcl8pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyVHJhbnNpdGlvbkVuZEhhbmRsZXIodGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyKHRoaXMuZG9jdW1lbnRLZXlkb3duSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3ModGhpcy5hbmltYXRpbmdDc3NDbGFzc18pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3ModGhpcy5vcGVuQ3NzQ2xhc3NfKTtcbiAgICB0aGlzLnJldGFiaW5hdGVfKCk7XG4gICAgLy8gRGVib3VuY2UgbXVsdGlwbGUgY2FsbHNcbiAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuKCk7XG4gICAgfVxuICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyKHRoaXMuZG9jdW1lbnRLZXlkb3duSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcih0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyh0aGlzLmFuaW1hdGluZ0Nzc0NsYXNzXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyh0aGlzLm9wZW5Dc3NDbGFzc18pO1xuICAgIHRoaXMuZGV0YWJpbmF0ZV8oKTtcbiAgICAvLyBEZWJvdW5jZSBtdWx0aXBsZSBjYWxsc1xuICAgIGlmICh0aGlzLmlzT3Blbl8pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmVuZGVyIGFsbCBjaGlsZHJlbiBvZiB0aGUgZHJhd2VyIGluZXJ0IHdoZW4gaXQncyBjbG9zZWQuXG4gICAqL1xuICBkZXRhYmluYXRlXygpIHtcbiAgICBpZiAodGhpcy5pbmVydF8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zYXZlRWxlbWVudFRhYlN0YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5tYWtlRWxlbWVudFVudGFiYmFibGUoZWxlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5lcnRfID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBhbGwgY2hpbGRyZW4gb2YgdGhlIGRyYXdlciB0YWJiYWJsZSBhZ2FpbiB3aGVuIGl0J3Mgb3Blbi5cbiAgICovXG4gIHJldGFiaW5hdGVfKCkge1xuICAgIGlmICghdGhpcy5pbmVydF8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZXN0b3JlRWxlbWVudFRhYlN0YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmluZXJ0XyA9IGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlVG91Y2hTdGFydF8oZXZ0KSB7XG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKHRoaXMub3BlbkNzc0NsYXNzXykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2dC5wb2ludGVyVHlwZSAmJiBldnQucG9pbnRlclR5cGUgIT09ICd0b3VjaCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRpcmVjdGlvbl8gPSB0aGlzLmFkYXB0ZXJfLmlzUnRsKCkgPyAtMSA6IDE7XG4gICAgdGhpcy5kcmF3ZXJXaWR0aF8gPSB0aGlzLmFkYXB0ZXJfLmdldERyYXdlcldpZHRoKCk7XG4gICAgdGhpcy5zdGFydFhfID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXS5wYWdlWCA6IGV2dC5wYWdlWDtcbiAgICB0aGlzLmN1cnJlbnRYXyA9IHRoaXMuc3RhcnRYXztcblxuICAgIHRoaXMudXBkYXRlUmFmXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZURyYXdlcl8uYmluZCh0aGlzKSk7XG4gIH1cblxuICBoYW5kbGVUb3VjaE1vdmVfKGV2dCkge1xuICAgIGlmIChldnQucG9pbnRlclR5cGUgJiYgZXZ0LnBvaW50ZXJUeXBlICE9PSAndG91Y2gnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50WF8gPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdLnBhZ2VYIDogZXZ0LnBhZ2VYO1xuICB9XG5cbiAgaGFuZGxlVG91Y2hFbmRfKGV2dCkge1xuICAgIGlmIChldnQucG9pbnRlclR5cGUgJiYgZXZ0LnBvaW50ZXJUeXBlICE9PSAndG91Y2gnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmVwYXJlRm9yVG91Y2hFbmRfKCk7XG5cbiAgICAvLyBEaWQgdGhlIHVzZXIgY2xvc2UgdGhlIGRyYXdlciBieSBtb3JlIHRoYW4gNTAlP1xuICAgIGlmIChNYXRoLmFicyh0aGlzLm5ld1Bvc2l0aW9uXyAvIHRoaXMuZHJhd2VyV2lkdGhfKSA+PSAwLjUpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJpZ2dlcmluZyBhbiBvcGVuIGhlcmUgbWVhbnMgd2UnbGwgZ2V0IGEgbmljZSBhbmltYXRpb24gYmFjayB0byB0aGUgZnVsbHkgb3BlbiBzdGF0ZS5cbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXBhcmVGb3JUb3VjaEVuZF8oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVSYWZfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFRyYW5zbGF0ZVgobnVsbCk7XG4gIH1cblxuICB1cGRhdGVEcmF3ZXJfKCkge1xuICAgIHRoaXMudXBkYXRlUmFmXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZURyYXdlcl8uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRUcmFuc2xhdGVYKHRoaXMubmV3UG9zaXRpb25fKTtcbiAgfVxuXG4gIGdldCBuZXdQb3NpdGlvbl8oKSB7XG4gICAgbGV0IG5ld1BvcyA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb25fID09PSAxKSB7XG4gICAgICBuZXdQb3MgPSBNYXRoLm1pbigwLCB0aGlzLmN1cnJlbnRYXyAtIHRoaXMuc3RhcnRYXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1BvcyA9IE1hdGgubWF4KDAsIHRoaXMuY3VycmVudFhfIC0gdGhpcy5zdGFydFhfKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UG9zO1xuICB9XG5cbiAgaXNSb290VHJhbnNpdGlvbmluZ0V2ZW50VGFyZ2V0XygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENTbGlkYWJsZURyYXdlckZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gdHJ1ZSBvciBmYWxzZVxuICAgIC8vIGlmIHRoZSBldmVudCB0YXJnZXQgaXMgdGhlIHJvb3QgZXZlbnQgdGFyZ2V0IGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZVRyYW5zaXRpb25FbmRfKGV2dCkge1xuICAgIGlmICh0aGlzLmlzUm9vdFRyYW5zaXRpb25pbmdFdmVudFRhcmdldF8oZXZ0LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3ModGhpcy5hbmltYXRpbmdDc3NDbGFzc18pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVHJhbnNpdGlvbkVuZEhhbmRsZXIodGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvc2xpZGFibGUvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9zbGlkYWJsZS9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCB7Rk9DVVNBQkxFX0VMRU1FTlRTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQge01EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbn0gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvc2xpZGFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvc2xpZGFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtGT0NVU0FCTEVfRUxFTUVOVFN9IGZyb20gJy4uL3NsaWRhYmxlL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtZHJhd2VyLS10ZW1wb3JhcnknLFxuICBPUEVOOiAnbWRjLWRyYXdlci0tb3BlbicsXG4gIEFOSU1BVElORzogJ21kYy1kcmF3ZXItLWFuaW1hdGluZycsXG4gIFNDUk9MTF9MT0NLOiAnbWRjLWRyYXdlci1zY3JvbGwtbG9jaycsXG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgRFJBV0VSX1NFTEVDVE9SOiAnLm1kYy1kcmF3ZXItLXRlbXBvcmFyeSAubWRjLWRyYXdlcl9fZHJhd2VyJyxcbiAgT1BBQ0lUWV9WQVJfTkFNRTogJy0tbWRjLXRlbXBvcmFyeS1kcmF3ZXItb3BhY2l0eScsXG4gIEZPQ1VTQUJMRV9FTEVNRU5UUyxcbiAgT1BFTl9FVkVOVDogJ01EQ1RlbXBvcmFyeURyYXdlcjpvcGVuJyxcbiAgQ0xPU0VfRVZFTlQ6ICdNRENUZW1wb3JhcnlEcmF3ZXI6Y2xvc2UnLFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvdGVtcG9yYXJ5L2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci90ZW1wb3JhcnkvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TURDU2xpZGFibGVEcmF3ZXJGb3VuZGF0aW9ufSBmcm9tICcuLi9zbGlkYWJsZS9pbmRleCc7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTURDVGVtcG9yYXJ5RHJhd2VyRm91bmRhdGlvbiBleHRlbmRzIE1EQ1NsaWRhYmxlRHJhd2VyRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oTURDU2xpZGFibGVEcmF3ZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCB7XG4gICAgICBhZGRCb2R5Q2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVCb2R5Q2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBpc0RyYXdlcjogKCkgPT4gZmFsc2UsXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKC8qIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgZXZlbnRUYXJnZXRIYXNDbGFzczogKC8qIHRhcmdldDogRXZlbnRUYXJnZXQsIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihNRENUZW1wb3JhcnlEcmF3ZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSxcbiAgICAgIE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5ST09ULFxuICAgICAgTURDVGVtcG9yYXJ5RHJhd2VyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyxcbiAgICAgIE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcblxuICAgIHRoaXMuY29tcG9uZW50Q2xpY2tIYW5kbGVyXyA9IChldnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0SGFzQ2xhc3MoZXZ0LnRhcmdldCwgY3NzQ2xhc3Nlcy5ST09UKSkge1xuICAgICAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKTtcblxuICAgIC8vIE1ha2UgYnJvd3NlciBhd2FyZSBvZiBjdXN0b20gcHJvcGVydHkgYmVpbmcgdXNlZCBpbiB0aGlzIGVsZW1lbnQuXG4gICAgLy8gV29ya2Fyb3VuZCBmb3IgY2VydGFpbiB0eXBlcyBvZiBoYXJkLXRvLXJlcHJvZHVjZSBoZWlzZW5idWdzLlxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoMCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignY2xpY2snLCB0aGlzLmNvbXBvbmVudENsaWNrSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2NsaWNrJywgdGhpcy5jb21wb25lbnRDbGlja0hhbmRsZXJfKTtcbiAgICB0aGlzLmVuYWJsZVNjcm9sbF8oKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsXygpO1xuICAgIC8vIE1ha2Ugc3VyZSBjdXN0b20gcHJvcGVydHkgdmFsdWVzIGFyZSBjbGVhcmVkIGJlZm9yZSBzdGFydGluZy5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKCcnKTtcblxuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIC8vIE1ha2Ugc3VyZSBjdXN0b20gcHJvcGVydHkgdmFsdWVzIGFyZSBjbGVhcmVkIGJlZm9yZSBtYWtpbmcgYW55IGNoYW5nZXMuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZSgnJyk7XG5cbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG5cbiAgcHJlcGFyZUZvclRvdWNoRW5kXygpIHtcbiAgICBzdXBlci5wcmVwYXJlRm9yVG91Y2hFbmRfKCk7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKCcnKTtcbiAgfVxuXG4gIHVwZGF0ZURyYXdlcl8oKSB7XG4gICAgc3VwZXIudXBkYXRlRHJhd2VyXygpO1xuXG4gICAgY29uc3QgbmV3T3BhY2l0eSA9IE1hdGgubWF4KDAsIDEgKyB0aGlzLmRpcmVjdGlvbl8gKiAodGhpcy5uZXdQb3NpdGlvbl8gLyB0aGlzLmRyYXdlcldpZHRoXykpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUobmV3T3BhY2l0eSk7XG4gIH1cblxuICBpc1Jvb3RUcmFuc2l0aW9uaW5nRXZlbnRUYXJnZXRfKGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaXNEcmF3ZXIoZWwpO1xuICB9XG5cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZF8oZXZ0KSB7XG4gICAgc3VwZXIuaGFuZGxlVHJhbnNpdGlvbkVuZF8oZXZ0KTtcbiAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgdGhpcy5lbmFibGVTY3JvbGxfKCk7XG4gICAgfVxuICB9O1xuXG4gIGRpc2FibGVTY3JvbGxfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuICB9XG5cbiAgZW5hYmxlU2Nyb2xsXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci90ZW1wb3JhcnkvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci90ZW1wb3JhcnkvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge01EQ0NvbXBvbmVudH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvaW5kZXgnO1xuaW1wb3J0IE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XG5cbmV4cG9ydCB7TURDVGVtcG9yYXJ5RHJhd2VyRm91bmRhdGlvbn07XG5leHBvcnQge3V0aWx9O1xuXG5leHBvcnQgY2xhc3MgTURDVGVtcG9yYXJ5RHJhd2VyIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1RlbXBvcmFyeURyYXdlcihyb290KTtcbiAgfVxuXG4gIGdldCBvcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmlzT3BlbigpO1xuICB9XG5cbiAgc2V0IG9wZW4odmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbl8ub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb25fLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyogUmV0dXJuIHRoZSBkcmF3ZXIgZWxlbWVudCBpbnNpZGUgdGhlIGNvbXBvbmVudC4gKi9cbiAgZ2V0IGRyYXdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24uc3RyaW5ncy5EUkFXRVJfU0VMRUNUT1IpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgY29uc3Qge0ZPQ1VTQUJMRV9FTEVNRU5UUywgT1BBQ0lUWV9WQVJfTkFNRX0gPSBNRENUZW1wb3JhcnlEcmF3ZXJGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICByZXR1cm4gbmV3IE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBhZGRCb2R5Q2xhc3M6IChjbGFzc05hbWUpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQm9keUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGV2ZW50VGFyZ2V0SGFzQ2xhc3M6ICh0YXJnZXQsIGNsYXNzTmFtZSkgPT4gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgaGFzTmVjZXNzYXJ5RG9tOiAoKSA9PiBCb29sZWFuKHRoaXMuZHJhd2VyKSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PlxuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIodXRpbC5yZW1hcEV2ZW50KGV2dCksIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKHV0aWwucmVtYXBFdmVudChldnQpLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRHJhd2VySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PlxuICAgICAgICB0aGlzLmRyYXdlci5hZGRFdmVudExpc3RlbmVyKHV0aWwucmVtYXBFdmVudChldnQpLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJEcmF3ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+XG4gICAgICAgIHRoaXMuZHJhd2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIodXRpbC5yZW1hcEV2ZW50KGV2dCksIGhhbmRsZXIpLFxuICAgICAgcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcjogKGhhbmRsZXIpID0+IHRoaXMuZHJhd2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcjogKGhhbmRsZXIpID0+IHRoaXMuZHJhd2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVyKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRLZXlkb3duSGFuZGxlcjogKGhhbmRsZXIpID0+IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEtleWRvd25IYW5kbGVyOiAoaGFuZGxlcikgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpLFxuICAgICAgZ2V0RHJhd2VyV2lkdGg6ICgpID0+IHRoaXMuZHJhd2VyLm9mZnNldFdpZHRoLFxuICAgICAgc2V0VHJhbnNsYXRlWDogKHZhbHVlKSA9PiB0aGlzLmRyYXdlci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgdXRpbC5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUoKSwgdmFsdWUgPT09IG51bGwgPyBudWxsIDogYHRyYW5zbGF0ZVgoJHt2YWx1ZX1weClgKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHV0aWwuc3VwcG9ydHNDc3NDdXN0b21Qcm9wZXJ0aWVzKCkpIHtcbiAgICAgICAgICB0aGlzLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KE9QQUNJVFlfVkFSX05BTUUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldEZvY3VzYWJsZUVsZW1lbnRzOiAoKSA9PiB0aGlzLmRyYXdlci5xdWVyeVNlbGVjdG9yQWxsKEZPQ1VTQUJMRV9FTEVNRU5UUyksXG4gICAgICBzYXZlRWxlbWVudFRhYlN0YXRlOiAoZWwpID0+IHV0aWwuc2F2ZUVsZW1lbnRUYWJTdGF0ZShlbCksXG4gICAgICByZXN0b3JlRWxlbWVudFRhYlN0YXRlOiAoZWwpID0+IHV0aWwucmVzdG9yZUVsZW1lbnRUYWJTdGF0ZShlbCksXG4gICAgICBtYWtlRWxlbWVudFVudGFiYmFibGU6IChlbCkgPT4gZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKSxcbiAgICAgIG5vdGlmeU9wZW46ICgpID0+IHRoaXMuZW1pdChNRENUZW1wb3JhcnlEcmF3ZXJGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTl9FVkVOVCksXG4gICAgICBub3RpZnlDbG9zZTogKCkgPT4gdGhpcy5lbWl0KE1EQ1RlbXBvcmFyeURyYXdlckZvdW5kYXRpb24uc3RyaW5ncy5DTE9TRV9FVkVOVCksXG4gICAgICBpc1J0bDogKCkgPT4gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnJvb3RfKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICBpc0RyYXdlcjogKGVsKSA9PiBlbCA9PT0gdGhpcy5kcmF3ZXIsXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kcmF3ZXIvdGVtcG9yYXJ5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3RlbXBvcmFyeS9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5jb25zdCBUQUJfREFUQSA9ICdkYXRhLW1kYy10YWJpbmRleCc7XG5jb25zdCBUQUJfREFUQV9IQU5ETEVEID0gJ2RhdGEtbWRjLXRhYmluZGV4LWhhbmRsZWQnO1xuXG5sZXQgc3RvcmVkVHJhbnNmb3JtUHJvcGVydHlOYW1lXztcbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vLyBSZW1hcCB0b3VjaCBldmVudHMgdG8gcG9pbnRlciBldmVudHMsIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0b3VjaCBldmVudHMuXG5leHBvcnQgZnVuY3Rpb24gcmVtYXBFdmVudChldmVudE5hbWUsIGdsb2JhbE9iaiA9IHdpbmRvdykge1xuICBpZiAoISgnb250b3VjaHN0YXJ0JyBpbiBnbG9iYWxPYmouZG9jdW1lbnQpKSB7XG4gICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICBjYXNlICd0b3VjaHN0YXJ0JzpcbiAgICAgIHJldHVybiAncG9pbnRlcmRvd24nO1xuICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICByZXR1cm4gJ3BvaW50ZXJtb3ZlJztcbiAgICBjYXNlICd0b3VjaGVuZCc6XG4gICAgICByZXR1cm4gJ3BvaW50ZXJ1cCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBldmVudE5hbWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50TmFtZTtcbn1cblxuLy8gQ2hvb3NlIHRoZSBjb3JyZWN0IHRyYW5zZm9ybSBwcm9wZXJ0eSB0byB1c2Ugb24gdGhlIGN1cnJlbnQgYnJvd3Nlci5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3RvcmVkVHJhbnNmb3JtUHJvcGVydHlOYW1lXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGNvbnN0IGVsID0gZ2xvYmFsT2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyYW5zZm9ybVByb3BlcnR5TmFtZSA9ICgndHJhbnNmb3JtJyBpbiBlbC5zdHlsZSA/ICd0cmFuc2Zvcm0nIDogJy13ZWJraXQtdHJhbnNmb3JtJyk7XG4gICAgc3RvcmVkVHJhbnNmb3JtUHJvcGVydHlOYW1lXyA9IHRyYW5zZm9ybVByb3BlcnR5TmFtZTtcbiAgfVxuXG4gIHJldHVybiBzdG9yZWRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfO1xufVxuXG4vLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIENTUyBwcm9wZXJ0aWVzLlxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQ3NzQ3VzdG9tUHJvcGVydGllcyhnbG9iYWxPYmogPSB3aW5kb3cpIHtcbiAgaWYgKCdDU1MnIGluIGdsb2JhbE9iaikge1xuICAgIHJldHVybiBnbG9iYWxPYmouQ1NTLnN1cHBvcnRzKCcoLS1jb2xvcjogcmVkKScpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV8gPyB7cGFzc2l2ZTogdHJ1ZX0gOiBmYWxzZTtcbn1cblxuLy8gU2F2ZSB0aGUgdGFiIHN0YXRlIGZvciBhbiBlbGVtZW50LlxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVFbGVtZW50VGFiU3RhdGUoZWwpIHtcbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShUQUJfREFUQSwgZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgfVxuICBlbC5zZXRBdHRyaWJ1dGUoVEFCX0RBVEFfSEFORExFRCwgdHJ1ZSk7XG59XG5cbi8vIFJlc3RvcmUgdGhlIHRhYiBzdGF0ZSBmb3IgYW4gZWxlbWVudCwgaWYgaXQgd2FzIHNhdmVkLlxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVFbGVtZW50VGFiU3RhdGUoZWwpIHtcbiAgLy8gT25seSBtb2RpZnkgZWxlbWVudHMgd2UndmUgYWxyZWFkeSBoYW5kbGVkLCBpbiBjYXNlIGFueXRoaW5nIHdhcyBkeW5hbWljYWxseSBhZGRlZCBzaW5jZSB3ZSBzYXZlZCBzdGF0ZS5cbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZShUQUJfREFUQV9IQU5ETEVEKSkge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoVEFCX0RBVEEpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgZWwuZ2V0QXR0cmlidXRlKFRBQl9EQVRBKSk7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoVEFCX0RBVEEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfVxuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShUQUJfREFUQV9IQU5ETEVEKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL3V0aWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUZXh0RmllbGQgTGluZSBSaXBwbGUuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgbGluZSByaXBwbGUgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0xpbmVSaXBwbGVBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgbGluZSByaXBwbGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgbGluZSByaXBwbGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHN0eWxlIHByb3BlcnR5IHdpdGggcHJvcGVydHlOYW1lIHRvIHZhbHVlIG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRTdHlsZShwcm9wZXJ0eU5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIGxpbmUgcmlwcGxlIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckV2ZW50SGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgbGluZSByaXBwbGUgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGluZVJpcHBsZUFkYXB0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvYWRhcHRlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgTElORV9SSVBQTEVfQUNUSVZFOiAnbWRjLWxpbmUtcmlwcGxlLS1hY3RpdmUnLFxuICBMSU5FX1JJUFBMRV9ERUFDVElWQVRJTkc6ICdtZGMtbGluZS1yaXBwbGUtLWRlYWN0aXZhdGluZycsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDTGluZVJpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ0xpbmVSaXBwbGVBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENMaW5lUmlwcGxlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENMaW5lUmlwcGxlQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENMaW5lUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ0xpbmVSaXBwbGVBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgc2V0U3R5bGU6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDTGluZVJpcHBsZUFkYXB0ZXI9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0gLyoqIEB0eXBlIHshTURDTGluZVJpcHBsZUFkYXB0ZXJ9ICovICh7fSkpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBsaW5lIHJpcHBsZVxuICAgKi9cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0FDVElWRSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY2VudGVyIG9mIHRoZSByaXBwbGUgYW5pbWF0aW9uIHRvIHRoZSBnaXZlbiBYIGNvb3JkaW5hdGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4Q29vcmRpbmF0ZVxuICAgKi9cbiAgc2V0UmlwcGxlQ2VudGVyKHhDb29yZGluYXRlKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndHJhbnNmb3JtLW9yaWdpbicsIGAke3hDb29yZGluYXRlfXB4IGNlbnRlcmApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBsaW5lIHJpcHBsZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICAvLyBXYWl0IGZvciB0aGUgbGluZSByaXBwbGUgdG8gYmUgZWl0aGVyIHRyYW5zcGFyZW50IG9yIG9wYXF1ZVxuICAgIC8vIGJlZm9yZSBlbWl0dGluZyB0aGUgYW5pbWF0aW9uIGVuZCBldmVudFxuICAgIGNvbnN0IGlzRGVhY3RpdmF0aW5nID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG5cbiAgICBpZiAoZXZ0LnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknKSB7XG4gICAgICBpZiAoaXNEZWFjdGl2YXRpbmcpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0FDVElWRSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lLXJpcHBsZS9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDTGluZVJpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENMaW5lUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0xpbmVSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDTGluZVJpcHBsZShyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGxpbmUgcmlwcGxlXG4gICAqL1xuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGxpbmUgcmlwcGxlXG4gICAqL1xuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRyYW5zZm9ybSBvcmlnaW4gZ2l2ZW4gYSB1c2VyJ3MgY2xpY2sgbG9jYXRpb24uIFRoZSBgcmlwcGxlQ2VudGVyYCBpcyB0aGVcbiAgICogeC1jb29yZGluYXRlIG9mIHRoZSBtaWRkbGUgb2YgdGhlIHJpcHBsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHhDb29yZGluYXRlXG4gICAqL1xuICBzZXRSaXBwbGVDZW50ZXIoeENvb3JkaW5hdGUpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFJpcHBsZUNlbnRlcih4Q29vcmRpbmF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENMaW5lUmlwcGxlRm91bmRhdGlvbigvKiogQHR5cGUgeyFNRENMaW5lUmlwcGxlQWRhcHRlcn0gKi8gKE9iamVjdC5hc3NpZ24oe1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBzZXRTdHlsZTogKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHRoaXMucm9vdF8uc3R5bGVbcHJvcGVydHlOYW1lXSA9IHZhbHVlLFxuICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgIH0pKSk7XG4gIH1cbn1cblxuZXhwb3J0IHtNRENMaW5lUmlwcGxlLCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lLXJpcHBsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJpcHBsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBDU1MgdmFyaWFibGVzXG4gKiAtIHBvc2l0aW9uXG4gKiAtIGRpbWVuc2lvbnNcbiAqIC0gc2Nyb2xsIHBvc2l0aW9uXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIHVuYm91bmRlZCwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdGF0ZXNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzVW5ib3VuZGVkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlQWN0aXZlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlRGlzYWJsZWQoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXQgKi9cbiAgY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YXJOYW1lXG4gICAqIEBwYXJhbSB7P251bWJlcnxzdHJpbmd9IHZhbHVlXG4gICAqL1xuICB1cGRhdGVDc3NWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge31cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICBnZXRXaW5kb3dQYWdlT2Zmc2V0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlQWRhcHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG4gIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbiAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBQQURESU5HOiAxMCxcbiAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtdHJhbnNsYXRlLWR1cmF0aW9uIChpLmUuIGFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtZmFkZS1vdXQtZHVyYXRpb24gKGkuZS4gZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgVEFQX0RFTEFZX01TOiAzMDAsIC8vIERlbGF5IGJldHdlZW4gdG91Y2ggYW5kIHNpbXVsYXRlZCBtb3VzZSBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldE5vcm1hbGl6ZWRFdmVudENvb3Jkc30gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBpc0FjdGl2YXRlZDogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGFjdGl2YXRpb25FdmVudDogRXZlbnQsXG4gKiAgIGlzUHJvZ3JhbW1hdGljOiAoYm9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgQWN0aXZhdGlvblN0YXRlVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBkZWFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGZvY3VzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJsdXI6IChzdHJpbmd8dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVySW5mb1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpfSAqL1xuICAgIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuZGVhY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKD9FdmVudD0pfSAqL1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlRm9jdXMoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oP0V2ZW50PSl9ICovXG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMucmVzaXplSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuXG4gICAgLyoqIEBwcml2YXRlIHt7bGVmdDogbnVtYmVyLCB0b3A6bnVtYmVyfX0gKi9cbiAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnU2NhbGVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUgez9FdmVudH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBY3RpdmF0aW9uU3RhdGVUeXBlfVxuICAgKi9cbiAgZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICBhY3RpdmF0aW9uRXZlbnQ6IG51bGwsXG4gICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG5cbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1QpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gez9FdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVfKGUpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICBjb25zdCBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGUgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gbnVsbDtcbiAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9XG4gICAgICBlICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUpIHtcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaCgvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7P0V2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKSB7XG4gICAgcmV0dXJuIChlICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7P0V2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50ID0gbnVsbCkge1xuICAgIHRoaXMuYWN0aXZhdGVfKGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhbmltYXRlQWN0aXZhdGlvbl8oKSB7XG4gICAgY29uc3Qge1ZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7REVBQ1RJVkFUSU9OX1RJTUVPVVRfTVN9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzO1xuXG4gICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgIGxldCB0cmFuc2xhdGVFbmQgPSAnJztcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICBjb25zdCB7c3RhcnRQb2ludCwgZW5kUG9pbnR9ID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCk7XG4gICAgICB0cmFuc2xhdGVTdGFydCA9IGAke3N0YXJ0UG9pbnQueH1weCwgJHtzdGFydFBvaW50Lnl9cHhgO1xuICAgICAgdHJhbnNsYXRlRW5kID0gYCR7ZW5kUG9pbnQueH1weCwgJHtlbmRQb2ludC55fXB4YDtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcblxuICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCksIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt7c3RhcnRQb2ludDogUG9pbnRUeXBlLCBlbmRQb2ludDogUG9pbnRUeXBlfX1cbiAgICovXG4gIGdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSB7XG4gICAgY29uc3Qge2FjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcblxuICAgIGxldCBzdGFydFBvaW50O1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoXG4gICAgICAgIC8qKiBAdHlwZSB7IUV2ZW50fSAqLyAoYWN0aXZhdGlvbkV2ZW50KSxcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICBzdGFydFBvaW50ID0ge1xuICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kUG9pbnQgPSB7XG4gICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnRQb2ludCwgZW5kUG9pbnR9O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpIHtcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7aGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBjb25zdCBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG5cbiAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCkge1xuICAgIGNvbnN0IHtGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gbnVsbCwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHs/RXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlYWN0aXZhdGVfKGUpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICBjb25zdCBldnRPYmplY3QgPSBudWxsO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oZXZ0T2JqZWN0LCBzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKGUsIHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gez9FdmVudD19IGV2ZW50IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICBkZWFjdGl2YXRlKGV2ZW50ID0gbnVsbCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICogQHBhcmFtIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZURlYWN0aXZhdGlvbl8oZSwge3dhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmV9KSB7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgbGF5b3V0SW50ZXJuYWxfKCkge1xuICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG5cbiAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgY29uc3QgZ2V0Qm91bmRlZFJhZGl1cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3codGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgIH07XG5cbiAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG5cbiAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gbWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFO1xuICAgIHRoaXMuZmdTY2FsZV8gPSB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcblxuICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICB1cGRhdGVMYXlvdXRDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7XG4gICAgICBWQVJfRkdfU0laRSwgVkFSX0xFRlQsIFZBUl9UT1AsIFZBUl9GR19TQ0FMRSxcbiAgICB9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgYCR7dGhpcy5pbml0aWFsU2l6ZV99cHhgKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdH1weGApO1xuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldFVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICBjb25zdCB7VU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1JpcHBsZUZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JpcHBsZUZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZSBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge3tpc1VuYm91bmRlZDogKGJvb2xlYW58dW5kZWZpbmVkKX09fSBvcHRpb25zXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCwge2lzVW5ib3VuZGVkID0gdW5kZWZpbmVkfSA9IHt9KSB7XG4gICAgY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICBpZiAoaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGlzVW5ib3VuZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQWRhcHRlcihpbnN0YW5jZSkge1xuICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiBpbnN0YW5jZS51bmJvdW5kZWQsXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IGluc3RhbmNlLnJvb3RfW01BVENIRVNdKCc6YWN0aXZlJyksXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gaW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7eDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXR9KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCB1bmJvdW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXQgdW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFVuYm91bmRlZF8oKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQodGhpcy51bmJvdW5kZWRfKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlRm91bmRhdGlvbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx7cGFzc2l2ZTogYm9vbGVhbn19XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICB9fSk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWQ7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlXyA/IHtwYXNzaXZlOiB0cnVlfSA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4geyFBcnJheTxzdHJpbmc+fVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgcmV0dXJuIFtcbiAgICAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJywgJ21hdGNoZXMnLFxuICBdLmZpbHRlcigocCkgPT4gcCBpbiBIVE1MRWxlbWVudFByb3RvdHlwZSkucG9wKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2XG4gKiBAcGFyYW0ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IHBhZ2VPZmZzZXRcbiAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldiwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICBjb25zdCB7eCwgeX0gPSBwYWdlT2Zmc2V0O1xuICBjb25zdCBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICBjb25zdCBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG5cbiAgbGV0IG5vcm1hbGl6ZWRYO1xuICBsZXQgbm9ybWFsaXplZFk7XG4gIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgaWYgKGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIG5vcm1hbGl6ZWRYID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfSBlbHNlIHtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBTZWxlY3QuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cblxuY2xhc3MgTURDU2VsZWN0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGNsYXNzIHRvIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGNvbnRhaW5zIHRoZSBnaXZlbiBjbGFzcyBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgYm90dG9tIGxpbmUsIHNob3dpbmcgYSBmb2N1c2VkIHN0YXRlLlxuICAgKi9cbiAgYWN0aXZhdGVCb3R0b21MaW5lKCkge31cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGJvdHRvbSBsaW5lLlxuICAgKi9cbiAgZGVhY3RpdmF0ZUJvdHRvbUxpbmUoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZWxlY3RlZCB2YWx1ZSBvZiB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFZhbHVlKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHJvb3QgZWxlbWVudCBpcyBzZXQgdG8gUlRMLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNSdGwoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgbGFiZWwgZWxlbWVudCBleGlzdHMsIGZhbHNlIGlmIGl0IGRvZXNuJ3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNMYWJlbCgpIHt9XG5cbiAgLyoqXG4gICAqIEZsb2F0cyBsYWJlbCBkZXRlcm1pbmVkIGJhc2VkIG9mZiBvZiB0aGUgc2hvdWxkRmxvYXQgYXJndW1lbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkRmxvYXRcbiAgICovXG4gIGZsb2F0TGFiZWwoc2hvdWxkRmxvYXQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2lkdGggb2YgbGFiZWwgaW4gcGl4ZWxzLCBpZiB0aGUgbGFiZWwgZXhpc3RzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRMYWJlbFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIG91dGxpbmUgZWxlbWVudCBleGlzdHMsIGZhbHNlIGlmIGl0IGRvZXNuJ3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNPdXRsaW5lKCkge31cblxuICAvKipcbiAgICogVXBkYXRlcyBTVkcgUGF0aCBhbmQgb3V0bGluZSBlbGVtZW50IGJhc2VkIG9uIHRoZVxuICAgKiBsYWJlbCBlbGVtZW50IHdpZHRoIGFuZCBSVEwgY29udGV4dCwgaWYgdGhlIG91dGxpbmUgZXhpc3RzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGFiZWxXaWR0aFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBpc1J0bFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgsIGlzUnRsKSB7fVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgbm90Y2ggaW4gb3V0bGluZSBlbGVtZW50LCBpZiB0aGUgb3V0bGluZSBleGlzdHMuXG4gICAqL1xuICBjbG9zZU91dGxpbmUoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTZWxlY3RBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQk9YOiAnbWRjLXNlbGVjdC0tYm94JyxcbiAgRElTQUJMRUQ6ICdtZGMtc2VsZWN0LS1kaXNhYmxlZCcsXG4gIFJPT1Q6ICdtZGMtc2VsZWN0JyxcbiAgT1VUTElORUQ6ICdtZGMtc2VsZWN0LS1vdXRsaW5lZCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIENIQU5HRV9FVkVOVDogJ01EQ1NlbGVjdDpjaGFuZ2UnLFxuICBMSU5FX1JJUFBMRV9TRUxFQ1RPUjogJy5tZGMtbGluZS1yaXBwbGUnLFxuICBMQUJFTF9TRUxFQ1RPUjogJy5tZGMtZmxvYXRpbmctbGFiZWwnLFxuICBOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUjogJy5tZGMtc2VsZWN0X19uYXRpdmUtY29udHJvbCcsXG4gIE9VVExJTkVfU0VMRUNUT1I6ICcubWRjLW5vdGNoZWQtb3V0bGluZScsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIExBQkVMX1NDQUxFOiAwLjc1LFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge01EQ0ZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2luZGV4Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgTURDU2VsZWN0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1NlbGVjdEFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1NlbGVjdEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtudW1iZXJ9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ1NlbGVjdEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0QWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1NlbGVjdEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4gZmFsc2UsXG4gICAgICBhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHt9LFxuICAgICAgZGVhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHt9LFxuICAgICAgZ2V0VmFsdWU6ICgpID0+IHt9LFxuICAgICAgaXNSdGw6ICgpID0+IGZhbHNlLFxuICAgICAgaGFzTGFiZWw6ICgpID0+IGZhbHNlLFxuICAgICAgZmxvYXRMYWJlbDogKC8qIHZhbHVlOiBib29sZWFuICovKSA9PiB7fSxcbiAgICAgIGdldExhYmVsV2lkdGg6ICgpID0+IHt9LFxuICAgICAgaGFzT3V0bGluZTogKCkgPT4gZmFsc2UsXG4gICAgICBub3RjaE91dGxpbmU6ICgvKiBsYWJlbFdpZHRoOiBudW1iZXIsIGlzUnRsOiBib29sZWFuICovKSA9PiB7fSxcbiAgICAgIGNsb3NlT3V0bGluZTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDU2VsZWN0QWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDU2VsZWN0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHN0eWxlcyBvZiB0aGUgc2VsZWN0IHRvIHNob3cgdGhlIGRpc2FzYmxlZCBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgdXBkYXRlRGlzYWJsZWRTdHlsZShkaXNhYmxlZCkge1xuICAgIGNvbnN0IHtESVNBQkxFRH0gPSBNRENTZWxlY3RGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKERJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhESVNBQkxFRCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdmFsdWUgY2hhbmdlcywgdmlhIGNoYW5nZSBldmVudCBvciBwcm9ncmFtbWF0aWMgdXBkYXRlcy5cbiAgICovXG4gIGhhbmRsZUNoYW5nZSgpIHtcbiAgICBjb25zdCBvcHRpb25IYXNWYWx1ZSA9IHRoaXMuYWRhcHRlcl8uZ2V0VmFsdWUoKS5sZW5ndGggPiAwO1xuICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbChvcHRpb25IYXNWYWx1ZSk7XG4gICAgdGhpcy5ub3RjaE91dGxpbmUob3B0aW9uSGFzVmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZm9jdXMgZXZlbnRzIGZyb20gcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRydWUpO1xuICAgIHRoaXMubm90Y2hPdXRsaW5lKHRydWUpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVCb3R0b21MaW5lKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBibHVyIGV2ZW50cyBmcm9tIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVCb3R0b21MaW5lKCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMvY2xvc2VzIHRoZSBub3RjaGVkIG91dGxpbmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3Blbk5vdGNoXG4gICAqL1xuICBub3RjaE91dGxpbmUob3Blbk5vdGNoKSB7XG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc091dGxpbmUoKSB8fCAhdGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wZW5Ob3RjaCkge1xuICAgICAgY29uc3QgbGFiZWxTY2FsZSA9IG51bWJlcnMuTEFCRUxfU0NBTEU7XG4gICAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRMYWJlbFdpZHRoKCkgKiBsYWJlbFNjYWxlO1xuICAgICAgY29uc3QgaXNSdGwgPSB0aGlzLmFkYXB0ZXJfLmlzUnRsKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGNoT3V0bGluZShsYWJlbFdpZHRoLCBpc1J0bCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VPdXRsaW5lKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NlbGVjdEZvdW5kYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge01EQ0NvbXBvbmVudH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvaW5kZXgnO1xuaW1wb3J0IHtNRENGbG9hdGluZ0xhYmVsfSBmcm9tICdAbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvaW5kZXgnO1xuaW1wb3J0IHtNRENMaW5lUmlwcGxlfSBmcm9tICdAbWF0ZXJpYWwvbGluZS1yaXBwbGUvaW5kZXgnO1xuaW1wb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnO1xuaW1wb3J0IHtNRENOb3RjaGVkT3V0bGluZX0gZnJvbSAnQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9pbmRleCc7XG5cbmltcG9ydCBNRENTZWxlY3RGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgTURDU2VsZWN0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENTZWxlY3RGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENTZWxlY3QgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgLyoqIEBwcml2YXRlIHs/RWxlbWVudH0gKi9cbiAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfO1xuICAgIC8qKiBAdHlwZSB7P01EQ1JpcHBsZX0gKi9cbiAgICB0aGlzLnJpcHBsZTtcbiAgICAvKiogQHByaXZhdGUgez9NRENMaW5lUmlwcGxlfSAqL1xuICAgIHRoaXMubGluZVJpcHBsZV87XG4gICAgLyoqIEBwcml2YXRlIHs/TURDRmxvYXRpbmdMYWJlbH0gKi9cbiAgICB0aGlzLmxhYmVsXztcbiAgICAvKiogQHByaXZhdGUgez9NRENOb3RjaGVkT3V0bGluZX0gKi9cbiAgICB0aGlzLm91dGxpbmVfO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlXztcbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmhhbmRsZUZvY3VzXztcbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmhhbmRsZUJsdXJfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ1NlbGVjdH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENTZWxlY3Qocm9vdCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIHNlbGVjdC5cbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sXy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBvbiB0aGUgc2VsZWN0LlxuICAgKi9cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5uYXRpdmVDb250cm9sXy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgc2VsZWN0ZWQgaW5kZXggb2YgdGhlIHNlbGVjdC5cbiAgICovXG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUNvbnRyb2xfLnNlbGVjdGVkSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGVkSW5kZXggVGhlIGluZGV4IG9mIHRoZSBvcHRpb24gdG8gYmUgc2V0IG9uIHRoZSBzZWxlY3QuXG4gICAqL1xuICBzZXQgc2VsZWN0ZWRJbmRleChzZWxlY3RlZEluZGV4KSB7XG4gICAgdGhpcy5uYXRpdmVDb250cm9sXy5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNlbGVjdCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVDb250cm9sXy5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkIFNldHMgdGhlIHNlbGVjdCBkaXNhYmxlZCBvciBlbmFibGVkLlxuICAgKi9cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5uYXRpdmVDb250cm9sXy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIHRoaXMuZm91bmRhdGlvbl8udXBkYXRlRGlzYWJsZWRTdHlsZShkaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogUmVjb21wdXRlcyB0aGUgb3V0bGluZSBTVkcgcGF0aCBmb3IgdGhlIG91dGxpbmUgZWxlbWVudC5cbiAgICovXG4gIGxheW91dCgpIHtcbiAgICBjb25zdCBvcGVuTm90Y2ggPSB0aGlzLm5hdGl2ZUNvbnRyb2xfLnZhbHVlLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5ub3RjaE91dGxpbmUob3Blbk5vdGNoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ0xpbmVSaXBwbGUpPX0gbGluZVJpcHBsZUZhY3RvcnkgQSBmdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IE1EQ0xpbmVSaXBwbGUuXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ0Zsb2F0aW5nTGFiZWwpPX0gbGFiZWxGYWN0b3J5IEEgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBNRENGbG9hdGluZ0xhYmVsLlxuICAgKiBAcGFyYW0geyhmdW5jdGlvbighRWxlbWVudCk6ICFNRENOb3RjaGVkT3V0bGluZSk9fSBvdXRsaW5lRmFjdG9yeSBBIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgTURDTm90Y2hlZE91dGxpbmUuXG4gICAqL1xuICBpbml0aWFsaXplKFxuICAgIGxhYmVsRmFjdG9yeSA9IChlbCkgPT4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwoZWwpLFxuICAgIGxpbmVSaXBwbGVGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDTGluZVJpcHBsZShlbCksXG4gICAgb3V0bGluZUZhY3RvcnkgPSAoZWwpID0+IG5ldyBNRENOb3RjaGVkT3V0bGluZShlbCkpIHtcbiAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTkFUSVZFX0NPTlRST0xfU0VMRUNUT1IpO1xuICAgIGNvbnN0IGxhYmVsRWxlbWVudCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxBQkVMX1NFTEVDVE9SKTtcbiAgICBpZiAobGFiZWxFbGVtZW50KSB7XG4gICAgICB0aGlzLmxhYmVsXyA9IGxhYmVsRmFjdG9yeShsYWJlbEVsZW1lbnQpO1xuICAgIH1cbiAgICBjb25zdCBsaW5lUmlwcGxlRWxlbWVudCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkxJTkVfUklQUExFX1NFTEVDVE9SKTtcbiAgICBpZiAobGluZVJpcHBsZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMubGluZVJpcHBsZV8gPSBsaW5lUmlwcGxlRmFjdG9yeShsaW5lUmlwcGxlRWxlbWVudCk7XG4gICAgfVxuICAgIGNvbnN0IG91dGxpbmVFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuT1VUTElORV9TRUxFQ1RPUik7XG4gICAgaWYgKG91dGxpbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLm91dGxpbmVfID0gb3V0bGluZUZhY3Rvcnkob3V0bGluZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkJPWCkpIHtcbiAgICAgIHRoaXMucmlwcGxlID0gdGhpcy5pbml0UmlwcGxlXygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgaW5pdFJpcHBsZV8oKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IE9iamVjdC5hc3NpZ24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcyksIHtcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5uYXRpdmVDb250cm9sXy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHRoaXMubmF0aXZlQ29udHJvbF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICB9KTtcbiAgICBjb25zdCBmb3VuZGF0aW9uID0gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGUodGhpcy5yb290XywgZm91bmRhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHNlbGVjdCdzIGV2ZW50IGxpc3RlbmVycyBhbmQgaW50ZXJuYWwgc3RhdGUgYmFzZWRcbiAgICogb24gdGhlIGVudmlyb25tZW50J3Mgc3RhdGUuXG4gICAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VfID0gKCkgPT4gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVDaGFuZ2UoKTtcbiAgICB0aGlzLmhhbmRsZUZvY3VzXyA9ICgpID0+IHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlRm9jdXMoKTtcbiAgICB0aGlzLmhhbmRsZUJsdXJfID0gKCkgPT4gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVCbHVyKCk7XG5cbiAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlXyk7XG4gICAgdGhpcy5uYXRpdmVDb250cm9sXy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXNfKTtcbiAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmhhbmRsZUJsdXJfKTtcblxuICAgIC8vIEluaXRpYWxseSBzeW5jIGZsb2F0aW5nIGxhYmVsXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVDaGFuZ2UoKTtcblxuICAgIGlmICh0aGlzLm5hdGl2ZUNvbnRyb2xfLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMubmF0aXZlQ29udHJvbF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2VfKTtcbiAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1c18pO1xuICAgIHRoaXMubmF0aXZlQ29udHJvbF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuaGFuZGxlQmx1cl8pO1xuXG4gICAgaWYgKHRoaXMucmlwcGxlKSB7XG4gICAgICB0aGlzLnJpcHBsZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm91dGxpbmVfKSB7XG4gICAgICB0aGlzLm91dGxpbmVfLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1NlbGVjdEZvdW5kYXRpb259XG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1NlbGVjdEZvdW5kYXRpb24oXG4gICAgICAvKiogQHR5cGUgeyFNRENTZWxlY3RBZGFwdGVyfSAqLyAoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgICBoYXNDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgICAgZ2V0VmFsdWU6ICgpID0+IHRoaXMubmF0aXZlQ29udHJvbF8udmFsdWUsXG4gICAgICAgIGlzUnRsOiAoKSA9PiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnJvb3RfKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICAgIGFjdGl2YXRlQm90dG9tTGluZTogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVSaXBwbGVfLmFjdGl2YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWFjdGl2YXRlQm90dG9tTGluZTogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVSaXBwbGVfLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGhpcy5nZXRPdXRsaW5lQWRhcHRlck1ldGhvZHNfKCksXG4gICAgICB0aGlzLmdldExhYmVsQWRhcHRlck1ldGhvZHNfKCkpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshe1xuICAgKiAgIGhhc091dGxpbmU6IGZ1bmN0aW9uKCk6IGJvb2xlYW4sXG4gICAqICAgbm90Y2hPdXRsaW5lOiBmdW5jdGlvbihudW1iZXIsIGJvb2xlYW4pOiB1bmRlZmluZWQsXG4gICAqICAgY2xvc2VPdXRsaW5lOiBmdW5jdGlvbigpOiB1bmRlZmluZWQsXG4gICAqIH19XG4gICAqL1xuICBnZXRPdXRsaW5lQWRhcHRlck1ldGhvZHNfKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNPdXRsaW5lOiAoKSA9PiAhIXRoaXMub3V0bGluZV8sXG4gICAgICBub3RjaE91dGxpbmU6IChsYWJlbFdpZHRoLCBpc1J0bCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vdXRsaW5lXykge1xuICAgICAgICAgIHRoaXMub3V0bGluZV8ubm90Y2gobGFiZWxXaWR0aCwgaXNSdGwpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2xvc2VPdXRsaW5lOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm91dGxpbmVfKSB7XG4gICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbG9zZU5vdGNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshe1xuICAgKiAgIGhhc0xhYmVsOiBmdW5jdGlvbigpOiBib29sZWFuLFxuICAgKiAgIGZsb2F0TGFiZWw6IGZ1bmN0aW9uKGJvb2xlYW4pOiB1bmRlZmluZWQsXG4gICAqICAgZ2V0TGFiZWxXaWR0aDogZnVuY3Rpb24oKTogbnVtYmVyLFxuICAgKiB9fVxuICAgKi9cbiAgZ2V0TGFiZWxBZGFwdGVyTWV0aG9kc18oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0xhYmVsOiAoKSA9PiAhIXRoaXMubGFiZWxfLFxuICAgICAgZmxvYXRMYWJlbDogKHNob3VsZEZsb2F0KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsXykge1xuICAgICAgICAgIHRoaXMubGFiZWxfLmZsb2F0KHNob3VsZEZsb2F0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldExhYmVsV2lkdGg6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGFiZWxfKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGFiZWxfLmdldFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQge01EQ1NlbGVjdCwgTURDU2VsZWN0Rm91bmRhdGlvbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgRmxvYXRpbmcgTGFiZWwuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgZmxvYXRpbmcgbGFiZWwgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3Qvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIExBQkVMX0ZMT0FUX0FCT1ZFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZScsXG4gIExBQkVMX1NIQUtFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1zaGFrZScsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENGbG9hdGluZ0xhYmVsQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENGbG9hdGluZ0xhYmVsQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGdldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVTaGFrZUFuaW1hdGlvbkVuZF8oKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYW5pbWF0aW9uZW5kJywgdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdhbmltYXRpb25lbmQnLCB0aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIHRoZSBsYWJlbCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5nZXRXaWR0aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgbGFiZWwgdG8gcHJvZHVjZSB0aGUgbGFiZWwgc2hha2UgZm9yIGVycm9ycy5cbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRTaGFrZSBhZGRzIHNoYWtlIGNsYXNzIGlmIHRydWUsXG4gICAqIG90aGVyd2lzZSByZW1vdmVzIHNoYWtlIGNsYXNzLlxuICAgKi9cbiAgc2hha2Uoc2hvdWxkU2hha2UpIHtcbiAgICBjb25zdCB7TEFCRUxfU0hBS0V9ID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoc2hvdWxkU2hha2UpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBmbG9hdCBvciBkb2NrLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZEZsb2F0IGFkZHMgZmxvYXQgY2xhc3MgaWYgdHJ1ZSwgb3RoZXJ3aXNlIHJlbW92ZVxuICAgKiBmbG9hdCBhbmQgc2hha2UgY2xhc3MgdG8gZG9jayBsYWJlbC5cbiAgICovXG4gIGZsb2F0KHNob3VsZEZsb2F0KSB7XG4gICAgY29uc3Qge0xBQkVMX0ZMT0FUX0FCT1ZFLCBMQUJFTF9TSEFLRX0gPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmIChzaG91bGRGbG9hdCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhMQUJFTF9GTE9BVF9BQk9WRSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfRkxPQVRfQUJPVkUpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYW4gaW50ZXJhY3Rpb24gZXZlbnQgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGhhbmRsZVNoYWtlQW5pbWF0aW9uRW5kXygpIHtcbiAgICBjb25zdCB7TEFCRUxfU0hBS0V9ID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3Qvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDRmxvYXRpbmdMYWJlbCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENGbG9hdGluZ0xhYmVsfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwocm9vdCk7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBwcm9kdWNlIHRoZSBsYWJlbCBzaGFrZSBmb3IgZXJyb3JzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFNoYWtlIHN0eWxlcyB0aGUgbGFiZWwgdG8gc2hha2UgYnkgYWRkaW5nIHNoYWtlIGNsYXNzXG4gICAqIGlmIHRydWUsIG90aGVyd2lzZSB3aWxsIHN0b3Agc2hha2luZyBieSByZW1vdmluZyBzaGFrZSBjbGFzcy5cbiAgICovXG4gIHNoYWtlKHNob3VsZFNoYWtlKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zaGFrZShzaG91bGRTaGFrZSk7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIGxhYmVsIHRvIGZsb2F0L2RvY2suXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkRmxvYXQgc3R5bGVzIHRoZSBsYWJlbCB0byBmbG9hdCBieSBhZGRpbmcgZmxvYXQgY2xhc3NcbiAgICogaWYgdHJ1ZSwgb3RoZXJ3aXNlIGRvY2tzIHRoZSBsYWJlbCBieSByZW1vdmluZyB0aGUgZmxvYXQgY2xhc3MuXG4gICAqL1xuICBmbG9hdChzaG91bGRGbG9hdCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZmxvYXQoc2hvdWxkRmxvYXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFdpZHRoKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBnZXRXaWR0aDogKCkgPT4gdGhpcy5yb290Xy5vZmZzZXRXaWR0aCxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge01EQ0Zsb2F0aW5nTGFiZWwsIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3Qvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgTm90Y2hlZCBPdXRsaW5lLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIE5vdGNoZWQgT3V0bGluZSBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEhlaWdodCgpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgXCJkXCIgYXR0cmlidXRlIG9mIHRoZSBvdXRsaW5lIGVsZW1lbnQncyBTVkcgcGF0aC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRPdXRsaW5lUGF0aEF0dHIodmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkbGUgb3V0bGluZSBlbGVtZW50J3MgY29tcHV0ZWQgc3R5bGUgdmFsdWUgb2YgdGhlIGdpdmVuIGNzcyBwcm9wZXJ0eSBgcHJvcGVydHlOYW1lYC5cbiAgICogV2UgYWNoaWV2ZSB0aGlzIHZpYSBgZ2V0Q29tcHV0ZWRTdHlsZSguLi4pLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lKWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlKHByb3BlcnR5TmFtZSkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgUEFUSF9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lX19wYXRoJyxcbiAgSURMRV9PVVRMSU5FX1NFTEVDVE9SOiAnLm1kYy1ub3RjaGVkLW91dGxpbmVfX2lkbGUnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBPVVRMSU5FX05PVENIRUQ6ICdtZGMtbm90Y2hlZC1vdXRsaW5lLS1ub3RjaGVkJyxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGdldEhlaWdodDogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRPdXRsaW5lUGF0aEF0dHI6ICgpID0+IHt9LFxuICAgICAgZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIG91dGxpbmUgbm90Y2hlZCBzZWxlY3RvciBhbmQgdXBkYXRlcyB0aGUgbm90Y2ggd2lkdGhcbiAgICogY2FsY3VsYXRlZCBiYXNlZCBvZmYgb2Ygbm90Y2hXaWR0aCBhbmQgaXNSdGwuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub3RjaFdpZHRoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzUnRsXG4gICAqL1xuICBub3RjaChub3RjaFdpZHRoLCBpc1J0bCA9IGZhbHNlKSB7XG4gICAgY29uc3Qge09VVExJTkVfTk9UQ0hFRH0gPSBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9VVExJTkVfTk9UQ0hFRCk7XG4gICAgdGhpcy51cGRhdGVTdmdQYXRoXyhub3RjaFdpZHRoLCBpc1J0bCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBub3RjaGVkIG91dGxpbmUgc2VsZWN0b3IgdG8gY2xvc2UgdGhlIG5vdGNoIGluIHRoZSBvdXRsaW5lLlxuICAgKi9cbiAgY2xvc2VOb3RjaCgpIHtcbiAgICBjb25zdCB7T1VUTElORV9OT1RDSEVEfSA9IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1VUTElORV9OT1RDSEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBTVkcgcGF0aCBvZiB0aGUgZm9jdXMgb3V0bGluZSBlbGVtZW50IGJhc2VkIG9uIHRoZSBub3RjaFdpZHRoXG4gICAqIGFuZCB0aGUgUlRMIGNvbnRleHQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub3RjaFdpZHRoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzUnRsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1cGRhdGVTdmdQYXRoXyhub3RjaFdpZHRoLCBpc1J0bCkge1xuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIGEgc3BlY2lmaWMgY29ybmVyJ3Mgc3R5bGUgYmVjYXVzZSBGaXJlZm94IGRvZXNuJ3QgcmVwb3J0IHRoZSBzdHlsZSBvbiBib3JkZXItcmFkaXVzLlxuICAgIGNvbnN0IHJhZGl1c1N0eWxlVmFsdWUgPSB0aGlzLmFkYXB0ZXJfLmdldElkbGVPdXRsaW5lU3R5bGVWYWx1ZSgnYm9yZGVyLXJhZGl1cycpIHx8XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyk7XG4gICAgY29uc3QgcmFkaXVzID0gcGFyc2VGbG9hdChyYWRpdXNTdHlsZVZhbHVlKTtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0V2lkdGgoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmdldEhlaWdodCgpO1xuICAgIGNvbnN0IGNvcm5lcldpZHRoID0gcmFkaXVzICsgMS4yO1xuICAgIGNvbnN0IGxlYWRpbmdTdHJva2VMZW5ndGggPSBNYXRoLmFicygxMSAtIGNvcm5lcldpZHRoKTtcbiAgICBjb25zdCBwYWRkZWROb3RjaFdpZHRoID0gbm90Y2hXaWR0aCArIDg7XG5cbiAgICAvLyBUaGUgcmlnaHQsIGJvdHRvbSwgYW5kIGxlZnQgc2lkZXMgb2YgdGhlIG91dGxpbmUgZm9sbG93IHRoZSBzYW1lIFNWRyBwYXRoLlxuICAgIGNvbnN0IHBhdGhNaWRkbGUgPSAnYScgKyByYWRpdXMgKyAnLCcgKyByYWRpdXMgKyAnIDAgMCAxICcgKyByYWRpdXMgKyAnLCcgKyByYWRpdXNcbiAgICAgICsgJ3YnICsgKGhlaWdodCAtICgyICogY29ybmVyV2lkdGgpKVxuICAgICAgKyAnYScgKyByYWRpdXMgKyAnLCcgKyByYWRpdXMgKyAnIDAgMCAxICcgKyAtcmFkaXVzICsgJywnICsgcmFkaXVzXG4gICAgICArICdoJyArICgtd2lkdGggKyAoMiAqIGNvcm5lcldpZHRoKSlcbiAgICAgICsgJ2EnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwIDAgMSAnICsgLXJhZGl1cyArICcsJyArIC1yYWRpdXNcbiAgICAgICsgJ3YnICsgKC1oZWlnaHQgKyAoMiAqIGNvcm5lcldpZHRoKSlcbiAgICAgICsgJ2EnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwIDAgMSAnICsgcmFkaXVzICsgJywnICsgLXJhZGl1cztcblxuICAgIGxldCBwYXRoO1xuICAgIGlmICghaXNSdGwpIHtcbiAgICAgIHBhdGggPSAnTScgKyAoY29ybmVyV2lkdGggKyBsZWFkaW5nU3Ryb2tlTGVuZ3RoICsgcGFkZGVkTm90Y2hXaWR0aCkgKyAnLCcgKyAxXG4gICAgICAgICsgJ2gnICsgKHdpZHRoIC0gKDIgKiBjb3JuZXJXaWR0aCkgLSBwYWRkZWROb3RjaFdpZHRoIC0gbGVhZGluZ1N0cm9rZUxlbmd0aClcbiAgICAgICAgKyBwYXRoTWlkZGxlXG4gICAgICAgICsgJ2gnICsgbGVhZGluZ1N0cm9rZUxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICdNJyArICh3aWR0aCAtIGNvcm5lcldpZHRoIC0gbGVhZGluZ1N0cm9rZUxlbmd0aCkgKyAnLCcgKyAxXG4gICAgICAgICsgJ2gnICsgbGVhZGluZ1N0cm9rZUxlbmd0aFxuICAgICAgICArIHBhdGhNaWRkbGVcbiAgICAgICAgKyAnaCcgKyAod2lkdGggLSAoMiAqIGNvcm5lcldpZHRoKSAtIHBhZGRlZE5vdGNoV2lkdGggLSBsZWFkaW5nU3Ryb2tlTGVuZ3RoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldE91dGxpbmVQYXRoQXR0cihwYXRoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3Qvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ05vdGNoZWRPdXRsaW5lIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ05vdGNoZWRPdXRsaW5lKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBVcGRhdGVzIG91dGxpbmUgc2VsZWN0b3JzIGFuZCBTVkcgcGF0aCB0byBvcGVuIG5vdGNoLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGNoV2lkdGggVGhlIG5vdGNoIHdpZHRoIGluIHRoZSBvdXRsaW5lLlxuICAgICogQHBhcmFtIHtib29sZWFuPX0gaXNSdGwgRGV0ZXJtaW5lcyBpZiBvdXRsaW5lIGlzIHJ0bC4gSWYgcnRsIGlzIHRydWUsIG5vdGNoXG4gICAgKiB3aWxsIGJlIHJpZ2h0IGp1c3RpZmllZCBpbiBvdXRsaW5lIHBhdGgsIG90aGVyd2lzZSBsZWZ0IGp1c3RpZmllZC5cbiAgICAqL1xuICBub3RjaChub3RjaFdpZHRoLCBpc1J0bCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubm90Y2gobm90Y2hXaWR0aCwgaXNSdGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG91dGxpbmUgc2VsZWN0b3JzIHRvIGNsb3NlIG5vdGNoIGFuZCByZXR1cm4gaXQgdG8gaWRsZSBzdGF0ZS5cbiAgICovXG4gIGNsb3NlTm90Y2goKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZU5vdGNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uKHtcbiAgICAgIGdldFdpZHRoOiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldFdpZHRoLFxuICAgICAgZ2V0SGVpZ2h0OiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldEhlaWdodCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIHNldE91dGxpbmVQYXRoQXR0cjogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5QQVRIX1NFTEVDVE9SKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlOiAocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkbGVPdXRsaW5lRWxlbWVudCA9IHRoaXMucm9vdF8ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSURMRV9PVVRMSU5FX1NFTEVDVE9SKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGlkbGVPdXRsaW5lRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge01EQ05vdGNoZWRPdXRsaW5lLCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb259O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtc25hY2tiYXInLFxuICBURVhUOiAnbWRjLXNuYWNrYmFyX190ZXh0JyxcbiAgQUNUSU9OX1dSQVBQRVI6ICdtZGMtc25hY2tiYXJfX2FjdGlvbi13cmFwcGVyJyxcbiAgQUNUSU9OX0JVVFRPTjogJ21kYy1zbmFja2Jhcl9fYWN0aW9uLWJ1dHRvbicsXG4gIEFDVElWRTogJ21kYy1zbmFja2Jhci0tYWN0aXZlJyxcbiAgTVVMVElMSU5FOiAnbWRjLXNuYWNrYmFyLS1tdWx0aWxpbmUnLFxuICBBQ1RJT05fT05fQk9UVE9NOiAnbWRjLXNuYWNrYmFyLS1hY3Rpb24tb24tYm90dG9tJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICBURVhUX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fdGV4dCcsXG4gIEFDVElPTl9XUkFQUEVSX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fYWN0aW9uLXdyYXBwZXInLFxuICBBQ1RJT05fQlVUVE9OX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fYWN0aW9uLWJ1dHRvbicsXG4gIFNIT1dfRVZFTlQ6ICdNRENTbmFja2JhcjpzaG93JyxcbiAgSElERV9FVkVOVDogJ01EQ1NuYWNrYmFyOmhpZGUnLFxufTtcblxuZXhwb3J0IGNvbnN0IG51bWJlcnMgPSB7XG4gIE1FU1NBR0VfVElNRU9VVDogMjc1MCxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc25hY2tiYXIvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc25hY2tiYXIvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7TURDRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvaW5kZXgnO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1EQ1NuYWNrYmFyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0QXJpYUhpZGRlbjogKCkgPT4ge30sXG4gICAgICB1bnNldEFyaWFIaWRkZW46ICgpID0+IHt9LFxuICAgICAgc2V0QWN0aW9uQXJpYUhpZGRlbjogKCkgPT4ge30sXG4gICAgICB1bnNldEFjdGlvbkFyaWFIaWRkZW46ICgpID0+IHt9LFxuICAgICAgc2V0QWN0aW9uVGV4dDogKC8qIGFjdGlvblRleHQ6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBzZXRNZXNzYWdlVGV4dDogKC8qIG1lc3NhZ2U6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBzZXRGb2N1czogKCkgPT4ge30sXG4gICAgICB2aXNpYmlsaXR5SXNIaWRkZW46ICgpID0+IC8qIGJvb2xlYW4gKi8gZmFsc2UsXG4gICAgICByZWdpc3RlckNhcHR1cmVkQmx1ckhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJDYXB0dXJlZEJsdXJIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclZpc2liaWxpdHlDaGFuZ2VIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyVmlzaWJpbGl0eUNoYW5nZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyQ2FwdHVyZWRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckNhcHR1cmVkSW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyQWN0aW9uQ2xpY2tIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyQWN0aW9uQ2xpY2tIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyVHJhbnNpdGlvbkVuZEhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIG5vdGlmeVNob3c6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5SGlkZTogKCkgPT4ge30sXG4gICAgfTtcbiAgfVxuXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlXztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2U7XG4gICAgdGhpcy5hY3Rpb25XYXNDbGlja2VkXyA9IGZhbHNlO1xuICAgIHRoaXMuZGlzbWlzc09uQWN0aW9uXyA9IHRydWU7XG4gICAgdGhpcy5maXJzdEZvY3VzXyA9IHRydWU7XG4gICAgdGhpcy5wb2ludGVyRG93blJlY29nbml6ZWRfID0gZmFsc2U7XG4gICAgdGhpcy5zbmFja2Jhckhhc0ZvY3VzXyA9IGZhbHNlO1xuICAgIHRoaXMuc25hY2tiYXJEYXRhXyA9IG51bGw7XG4gICAgdGhpcy5xdWV1ZV8gPSBbXTtcbiAgICB0aGlzLmFjdGlvbkNsaWNrSGFuZGxlcl8gPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGlvbldhc0NsaWNrZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW52b2tlQWN0aW9uXygpO1xuICAgIH07XG4gICAgdGhpcy52aXNpYmlsaXR5Y2hhbmdlSGFuZGxlcl8gPSAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWRfKTtcbiAgICAgIHRoaXMuc25hY2tiYXJIYXNGb2N1c18gPSB0cnVlO1xuXG4gICAgICBpZiAoIXRoaXMuYWRhcHRlcl8udmlzaWJpbGl0eUlzSGlkZGVuKCkpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLmNsZWFudXBfLmJpbmQodGhpcyksIHRoaXMuc25hY2tiYXJEYXRhXy50aW1lb3V0IHx8IG51bWJlcnMuTUVTU0FHRV9USU1FT1VUKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyA9IChldnQpID0+IHtcbiAgICAgIGlmIChldnQudHlwZSA9PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgdGhpcy5wb2ludGVyRG93blJlY29nbml6ZWRfID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlUG9zc2libGVUYWJLZXlib2FyZEZvY3VzXyhldnQpO1xuXG4gICAgICBpZiAoZXZ0LnR5cGUgPT0gJ2ZvY3VzJykge1xuICAgICAgICB0aGlzLnBvaW50ZXJEb3duUmVjb2duaXplZF8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuYmx1ckhhbmRsZXJfID0gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkXyk7XG4gICAgICB0aGlzLnNuYWNrYmFySGFzRm9jdXNfID0gZmFsc2U7XG4gICAgICB0aGlzLnRpbWVvdXRJZF8gPSBzZXRUaW1lb3V0KHRoaXMuY2xlYW51cF8uYmluZCh0aGlzKSwgdGhpcy5zbmFja2JhckRhdGFfLnRpbWVvdXQgfHwgbnVtYmVycy5NRVNTQUdFX1RJTUVPVVQpO1xuICAgIH07XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJBY3Rpb25DbGlja0hhbmRsZXIodGhpcy5hY3Rpb25DbGlja0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEFyaWFIaWRkZW4oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEFjdGlvbkFyaWFIaWRkZW4oKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyQWN0aW9uQ2xpY2tIYW5kbGVyKHRoaXMuYWN0aW9uQ2xpY2tIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyQ2FwdHVyZWRCbHVySGFuZGxlcih0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVmlzaWJpbGl0eUNoYW5nZUhhbmRsZXIodGhpcy52aXNpYmlsaXR5Y2hhbmdlSGFuZGxlcl8pO1xuICAgIFsndG91Y2hzdGFydCcsICdtb3VzZWRvd24nLCAnZm9jdXMnXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJDYXB0dXJlZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzbWlzc2VzT25BY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzbWlzc09uQWN0aW9uXztcbiAgfVxuXG4gIHNldERpc21pc3NPbkFjdGlvbihkaXNtaXNzT25BY3Rpb24pIHtcbiAgICB0aGlzLmRpc21pc3NPbkFjdGlvbl8gPSAhIWRpc21pc3NPbkFjdGlvbjtcbiAgfVxuXG4gIHNob3coZGF0YSkge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUGxlYXNlIHByb3ZpZGUgYSBkYXRhIG9iamVjdCB3aXRoIGF0IGxlYXN0IGEgbWVzc2FnZSB0byBkaXNwbGF5LicpO1xuICAgIH1cbiAgICBpZiAoIWRhdGEubWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkLicpO1xuICAgIH1cbiAgICBpZiAoZGF0YS5hY3Rpb25IYW5kbGVyICYmICFkYXRhLmFjdGlvblRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYWN0aW9uIHRleHQgd2l0aCB0aGUgaGFuZGxlci4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLnF1ZXVlXy5wdXNoKGRhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWRfKTtcbiAgICB0aGlzLnNuYWNrYmFyRGF0YV8gPSBkYXRhO1xuICAgIHRoaXMuZmlyc3RGb2N1c18gPSB0cnVlO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJWaXNpYmlsaXR5Q2hhbmdlSGFuZGxlcih0aGlzLnZpc2liaWxpdHljaGFuZ2VIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckNhcHR1cmVkQmx1ckhhbmRsZXIodGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIFsndG91Y2hzdGFydCcsICdtb3VzZWRvd24nLCAnZm9jdXMnXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyQ2FwdHVyZWRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHtBQ1RJVkUsIE1VTFRJTElORSwgQUNUSU9OX09OX0JPVFRPTX0gPSBjc3NDbGFzc2VzO1xuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRNZXNzYWdlVGV4dCh0aGlzLnNuYWNrYmFyRGF0YV8ubWVzc2FnZSk7XG5cbiAgICBpZiAodGhpcy5zbmFja2JhckRhdGFfLm11bHRpbGluZSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNVUxUSUxJTkUpO1xuICAgICAgaWYgKHRoaXMuc25hY2tiYXJEYXRhXy5hY3Rpb25PbkJvdHRvbSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEFDVElPTl9PTl9CT1RUT00pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNuYWNrYmFyRGF0YV8uYWN0aW9uSGFuZGxlcikge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBY3Rpb25UZXh0KHRoaXMuc25hY2tiYXJEYXRhXy5hY3Rpb25UZXh0KTtcbiAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcl8gPSB0aGlzLnNuYWNrYmFyRGF0YV8uYWN0aW9uSGFuZGxlcjtcbiAgICAgIHRoaXMuc2V0QWN0aW9uSGlkZGVuXyhmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QWN0aW9uSGlkZGVuXyh0cnVlKTtcbiAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcl8gPSBudWxsO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBY3Rpb25UZXh0KG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlXyA9IHRydWU7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhBQ1RJVkUpO1xuICAgIHRoaXMuYWRhcHRlcl8udW5zZXRBcmlhSGlkZGVuKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlTaG93KCk7XG5cbiAgICB0aGlzLnRpbWVvdXRJZF8gPSBzZXRUaW1lb3V0KHRoaXMuY2xlYW51cF8uYmluZCh0aGlzKSwgdGhpcy5zbmFja2JhckRhdGFfLnRpbWVvdXQgfHwgbnVtYmVycy5NRVNTQUdFX1RJTUVPVVQpO1xuICB9XG5cbiAgaGFuZGxlUG9zc2libGVUYWJLZXlib2FyZEZvY3VzXygpIHtcbiAgICBjb25zdCBoaWphY2tGb2N1cyA9XG4gICAgICB0aGlzLmZpcnN0Rm9jdXNfICYmICF0aGlzLnBvaW50ZXJEb3duUmVjb2duaXplZF87XG5cbiAgICBpZiAoaGlqYWNrRm9jdXMpIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXNPbkFjdGlvbl8oKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0Rm9jdXNfID0gZmFsc2U7XG4gIH1cblxuICBzZXRGb2N1c09uQWN0aW9uXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEZvY3VzKCk7XG4gICAgdGhpcy5zbmFja2Jhckhhc0ZvY3VzXyA9IHRydWU7XG4gICAgdGhpcy5maXJzdEZvY3VzXyA9IGZhbHNlO1xuICB9XG5cbiAgaW52b2tlQWN0aW9uXygpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmFjdGlvbkhhbmRsZXJfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3Rpb25IYW5kbGVyXygpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAodGhpcy5kaXNtaXNzT25BY3Rpb25fKSB7XG4gICAgICAgIHRoaXMuY2xlYW51cF8oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhbnVwXygpIHtcbiAgICBjb25zdCBhbGxvd0Rpc21pc3NhbCA9ICF0aGlzLnNuYWNrYmFySGFzRm9jdXNfIHx8IHRoaXMuYWN0aW9uV2FzQ2xpY2tlZF87XG5cbiAgICBpZiAoYWxsb3dEaXNtaXNzYWwpIHtcbiAgICAgIGNvbnN0IHtBQ1RJVkUsIE1VTFRJTElORSwgQUNUSU9OX09OX0JPVFRPTX0gPSBjc3NDbGFzc2VzO1xuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEFDVElWRSk7XG5cbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZF8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNVUxUSUxJTkUpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEFDVElPTl9PTl9CT1RUT00pO1xuICAgICAgICB0aGlzLnNldEFjdGlvbkhpZGRlbl8odHJ1ZSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXJpYUhpZGRlbigpO1xuICAgICAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zbmFja2Jhckhhc0ZvY3VzXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUhpZGUoKTtcbiAgICAgICAgdGhpcy5zaG93TmV4dF8oKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBzaG93TmV4dF8oKSB7XG4gICAgaWYgKCF0aGlzLnF1ZXVlXy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93KHRoaXMucXVldWVfLnNoaWZ0KCkpO1xuICB9XG5cbiAgc2V0QWN0aW9uSGlkZGVuXyhpc0hpZGRlbikge1xuICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBY3Rpb25BcmlhSGlkZGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8udW5zZXRBY3Rpb25BcmlhSGlkZGVuKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc25hY2tiYXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NuYWNrYmFyL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtNRENDb21wb25lbnR9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2luZGV4JztcbmltcG9ydCBNRENTbmFja2JhckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCB7Z2V0Q29ycmVjdEV2ZW50TmFtZX0gZnJvbSAnQG1hdGVyaWFsL2FuaW1hdGlvbi9pbmRleCc7XG5cbmV4cG9ydCB7TURDU25hY2tiYXJGb3VuZGF0aW9ufTtcblxuZXhwb3J0IGNsYXNzIE1EQ1NuYWNrYmFyIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1NuYWNrYmFyKHJvb3QpO1xuICB9XG5cbiAgc2hvdyhkYXRhKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zaG93KGRhdGEpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVEVYVF9TRUxFQ1RPUixcbiAgICAgIEFDVElPTl9CVVRUT05fU0VMRUNUT1IsXG4gICAgfSA9IE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IGdldFRleHQgPSAoKSA9PiB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoVEVYVF9TRUxFQ1RPUik7XG4gICAgY29uc3QgZ2V0QWN0aW9uQnV0dG9uID0gKCkgPT4gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKEFDVElPTl9CVVRUT05fU0VMRUNUT1IpO1xuXG4gICAgLyogZXNsaW50IGJyYWNlLXN0eWxlOiBcIm9mZlwiICovXG4gICAgcmV0dXJuIG5ldyBNRENTbmFja2JhckZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgc2V0QXJpYUhpZGRlbjogKCkgPT4gdGhpcy5yb290Xy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKSxcbiAgICAgIHVuc2V0QXJpYUhpZGRlbjogKCkgPT4gdGhpcy5yb290Xy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyksXG4gICAgICBzZXRBY3Rpb25BcmlhSGlkZGVuOiAoKSA9PiBnZXRBY3Rpb25CdXR0b24oKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKSxcbiAgICAgIHVuc2V0QWN0aW9uQXJpYUhpZGRlbjogKCkgPT4gZ2V0QWN0aW9uQnV0dG9uKCkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpLFxuICAgICAgc2V0QWN0aW9uVGV4dDogKHRleHQpID0+IHtnZXRBY3Rpb25CdXR0b24oKS50ZXh0Q29udGVudCA9IHRleHQ7fSxcbiAgICAgIHNldE1lc3NhZ2VUZXh0OiAodGV4dCkgPT4ge2dldFRleHQoKS50ZXh0Q29udGVudCA9IHRleHQ7fSxcbiAgICAgIHNldEZvY3VzOiAoKSA9PiBnZXRBY3Rpb25CdXR0b24oKS5mb2N1cygpLFxuICAgICAgdmlzaWJpbGl0eUlzSGlkZGVuOiAoKSA9PiBkb2N1bWVudC5oaWRkZW4sXG4gICAgICByZWdpc3RlckNhcHR1cmVkQmx1ckhhbmRsZXI6IChoYW5kbGVyKSA9PiBnZXRBY3Rpb25CdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlciwgdHJ1ZSksXG4gICAgICBkZXJlZ2lzdGVyQ2FwdHVyZWRCbHVySGFuZGxlcjogKGhhbmRsZXIpID0+IGdldEFjdGlvbkJ1dHRvbigpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVyLCB0cnVlKSxcbiAgICAgIHJlZ2lzdGVyVmlzaWJpbGl0eUNoYW5nZUhhbmRsZXI6IChoYW5kbGVyKSA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyVmlzaWJpbGl0eUNoYW5nZUhhbmRsZXI6IChoYW5kbGVyKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlciksXG4gICAgICByZWdpc3RlckNhcHR1cmVkSW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCB0cnVlKSxcbiAgICAgIGRlcmVnaXN0ZXJDYXB0dXJlZEludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgdHJ1ZSksXG4gICAgICByZWdpc3RlckFjdGlvbkNsaWNrSGFuZGxlcjogKGhhbmRsZXIpID0+IGdldEFjdGlvbkJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyQWN0aW9uQ2xpY2tIYW5kbGVyOiAoaGFuZGxlcikgPT4gZ2V0QWN0aW9uQnV0dG9uKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKSxcbiAgICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkVuZEhhbmRsZXI6XG4gICAgICAgIChoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3csICd0cmFuc2l0aW9uZW5kJyksIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOlxuICAgICAgICAoaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGdldENvcnJlY3RFdmVudE5hbWUod2luZG93LCAndHJhbnNpdGlvbmVuZCcpLCBoYW5kbGVyKSxcbiAgICAgIG5vdGlmeVNob3c6ICgpID0+IHRoaXMuZW1pdChNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5TSE9XX0VWRU5UKSxcbiAgICAgIG5vdGlmeUhpZGU6ICgpID0+IHRoaXMuZW1pdChNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5ISURFX0VWRU5UKSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBkaXNtaXNzZXNPbkFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5kaXNtaXNzZXNPbkFjdGlvbigpO1xuICB9XG5cbiAgc2V0IGRpc21pc3Nlc09uQWN0aW9uKGRpc21pc3Nlc09uQWN0aW9uKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREaXNtaXNzT25BY3Rpb24oZGlzbWlzc2VzT25BY3Rpb24pO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc25hY2tiYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbmFja2Jhci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJ0BtYXRlcmlhbC90YWIvYWRhcHRlcic7XG5pbXBvcnQge01EQ1RhYn0gZnJvbSAnQG1hdGVyaWFsL3RhYi9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBCYXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEJhciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiQmFyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgcG9zaXRpb24gdG8gc2Nyb2xsIHRvXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBieSB0aGUgZ2l2ZW4gYW1vdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYSW5jcmVtZW50IFRoZSBhbW91bnQgdG8gaW5jcmVtZW50IHNjcm9sbFxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3QgZWxlbWVudCdzIG9mZnNldFdpZHRoXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgVGFiIEJhciBsYW5ndWFnZSBkaXJlY3Rpb24gaXMgUlRMXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1JUTCgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB3aXRoIHRoZSBnaXZlbiBjbGllbnQgcmVjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gYWN0aXZhdGVcbiAgICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdCBUaGUgY2xpZW50IHJlY3Qgb2YgdGhlIHByZXZpb3VzbHkgYWN0aXZlIFRhYiBJbmRpY2F0b3JcbiAgICovXG4gIGFjdGl2YXRlVGFiQXRJbmRleChpbmRleCwgY2xpZW50UmVjdCkge31cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIGFjdGl2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlVGFiQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xpZW50IHJlY3Qgb2YgdGhlIHRhYidzIGluZGljYXRvclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGFiIGRpbWVuc2lvbnMgb2YgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEByZXR1cm4geyFNRENUYWJEaW1lbnNpb25zfVxuICAgKi9cbiAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3RcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0VGFiTGlzdExlbmd0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBhY3RpdmUgdGFiXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFjdGl2ZVRhYkluZGV4KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIHRhYlxuICAgKiBAcGFyYW0geyFNRENUYWJ9IHRhYiBUaGUgdGFiIHdob3NlIGluZGV4IHRvIGRldGVybWluXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEluZGV4T2ZUYWIodGFiKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgTURDVGFiQmFyOmFjdGl2YXRlZCBldmVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBhY3RpdmF0ZWQgdGFiXG4gICAqL1xuICBub3RpZnlUYWJBY3RpdmF0ZWQoaW5kZXgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkJhckFkYXB0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVEFCX0FDVElWQVRFRF9FVkVOVDogJ01EQ1RhYkJhcjphY3RpdmF0ZWQnLFxuICBUQUJfU0NST0xMRVJfU0VMRUNUT1I6ICcubWRjLXRhYi1zY3JvbGxlcicsXG4gIFRBQl9TRUxFQ1RPUjogJy5tZGMtdGFiJyxcbiAgRU5EX0tFWTogJ0VuZCcsXG4gIEhPTUVfS0VZOiAnSG9tZScsXG4gIEFSUk9XX0xFRlRfS0VZOiAnQXJyb3dMZWZ0JyxcbiAgQVJST1dfUklHSFRfS0VZOiAnQXJyb3dSaWdodCcsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIEVYVFJBX1NDUk9MTF9BTU9VTlQ6IDIwLFxuICBFTkRfS0VZQ09ERTogMzUsXG4gIEhPTUVfS0VZQ09ERTogMzYsXG4gIEFSUk9XX0xFRlRfS0VZQ09ERTogMzcsXG4gIEFSUk9XX1JJR0hUX0tFWUNPREU6IDM5LFxufTtcblxuZXhwb3J0IHtcbiAgbnVtYmVycyxcbiAgc3RyaW5ncyxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5cbmltcG9ydCB7c3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IE1EQ1RhYkJhckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBNRENUYWJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWIvZm91bmRhdGlvbic7XG5pbXBvcnQge01EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJ0BtYXRlcmlhbC90YWIvYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQHR5cGUge1NldDxzdHJpbmc+fVxuICovXG5jb25zdCBBQ0NFUFRBQkxFX0tFWVMgPSBuZXcgU2V0KCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgU2V0IHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkFSUk9XX0xFRlRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkVORF9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkhPTUVfS0VZKTtcblxuLyoqXG4gKiBAdHlwZSB7TWFwPG51bWJlciwgc3RyaW5nPn1cbiAqL1xuY29uc3QgS0VZQ09ERV9NQVAgPSBuZXcgTWFwKCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgTWFwIHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuSE9NRV9LRVlDT0RFLCBzdHJpbmdzLkhPTUVfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkVORF9LRVlDT0RFLCBzdHJpbmdzLkVORF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuQVJST1dfTEVGVF9LRVlDT0RFLCBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkFSUk9XX1JJR0hUX0tFWUNPREUsIHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiQmFyQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiQmFyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge251bWJlcn0gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiQmFyQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJCYXJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiQmFyQWRhcHRlcn0gKi8gKHtcbiAgICAgIHNjcm9sbFRvOiAoKSA9PiB7fSxcbiAgICAgIGluY3JlbWVudFNjcm9sbDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxDb250ZW50V2lkdGg6ICgpID0+IHt9LFxuICAgICAgZ2V0T2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgaXNSVEw6ICgpID0+IHt9LFxuICAgICAgYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldFRhYkRpbWVuc2lvbnNBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldEFjdGl2ZVRhYkluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldEluZGV4T2ZUYWI6ICgpID0+IHt9LFxuICAgICAgZ2V0VGFiTGlzdExlbmd0aDogKCkgPT4ge30sXG4gICAgICBub3RpZnlUYWJBY3RpdmF0ZWQ6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RhYkJhckFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICogKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGFiQmFyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0QWN0aXZlVGFiSW5kZXgoKTtcbiAgICB0aGlzLnNjcm9sbEludG9WaWV3KGFjdGl2ZUluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBhY3RpdmF0ZVRhYihpbmRleCkge1xuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZlSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEFjdGl2ZVRhYkluZGV4KCk7XG4gICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVUYWJBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVUYWJBdEluZGV4KGluZGV4LCB0aGlzLmFkYXB0ZXJfLmdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpKTtcbiAgICB0aGlzLnNjcm9sbEludG9WaWV3KGluZGV4KTtcblxuICAgIC8vIE9ubHkgbm90aWZ5IHRoZSB0YWIgYWN0aXZhdGlvbiBpZiB0aGUgaW5kZXggaXMgZGlmZmVyZW50IHRoYW4gdGhlIHByZXZpb3VzbHkgYWN0aXZlIGluZGV4XG4gICAgaWYgKGluZGV4ICE9PSBwcmV2aW91c0FjdGl2ZUluZGV4KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeVRhYkFjdGl2YXRlZChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGtleWRvd24gZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlS2V5RG93bihldnQpIHtcbiAgICAvLyBHZXQgdGhlIGtleSBmcm9tIHRoZSBldmVudFxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5RnJvbUV2ZW50XyhldnQpO1xuXG4gICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgZXZlbnQga2V5IGlzbid0IG9uZSBvZiB0aGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBrZXlzXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hY3RpdmF0ZVRhYkZyb21LZXlfKGtleSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgTURDVGFiOmludGVyYWN0ZWQgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVGFiSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgdGhpcy5hY3RpdmF0ZVRhYih0aGlzLmFkYXB0ZXJfLmdldEluZGV4T2ZUYWIoZXZ0LmRldGFpbC50YWIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlld1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIHRhYiBpbmRleCB0byBtYWtlIHZpc2libGVcbiAgICovXG4gIHNjcm9sbEludG9WaWV3KGluZGV4KSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIHJhbmdlXG4gICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgc2Nyb2xsIHRvIDAgaWYgc2Nyb2xsaW5nIHRvIHRoZSAwdGggaW5kZXhcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLnNjcm9sbFRvKDApO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyBzY3JvbGwgdG8gdGhlIG1heCB2YWx1ZSBpZiBzY3JvbGxpbmcgdG8gdGhlIE50aCBpbmRleFxuICAgIC8vIE1EQ1RhYlNjcm9sbGVyLnNjcm9sbFRvKCkgd2lsbCBuZXZlciBzY3JvbGwgcGFzdCB0aGUgbWF4IHBvc3NpYmxlIHZhbHVlXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLmFkYXB0ZXJfLmdldFRhYkxpc3RMZW5ndGgoKSAtIDEpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLnNjcm9sbFRvKHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxJbnRvVmlld1JUTF8oaW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdfKGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZCBmb3IgYWN0aXZhdGluZyBhIHRhYiBmcm9tIGEga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIG5hbWUgb2YgdGhlIGtleVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVUYWJGcm9tS2V5XyhrZXkpIHtcbiAgICBjb25zdCBpc1JUTCA9IHRoaXMuaXNSVExfKCk7XG4gICAgY29uc3QgbWF4VGFiSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldFRhYkxpc3RMZW5ndGgoKSAtIDE7XG4gICAgY29uc3Qgc2hvdWxkR29Ub0VuZCA9IGtleSA9PT0gc3RyaW5ncy5FTkRfS0VZO1xuICAgIGNvbnN0IHNob3VsZERlY3JlbWVudCA9IGtleSA9PT0gc3RyaW5ncy5BUlJPV19MRUZUX0tFWSAmJiAhaXNSVEwgfHwga2V5ID09PSBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSAmJiBpc1JUTDtcbiAgICBjb25zdCBzaG91bGRJbmNyZW1lbnQgPSBrZXkgPT09IHN0cmluZ3MuQVJST1dfUklHSFRfS0VZICYmICFpc1JUTCB8fCBrZXkgPT09IHN0cmluZ3MuQVJST1dfTEVGVF9LRVkgJiYgaXNSVEw7XG4gICAgbGV0IHRhYkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRBY3RpdmVUYWJJbmRleCgpO1xuXG4gICAgaWYgKHNob3VsZEdvVG9FbmQpIHtcbiAgICAgIHRhYkluZGV4ID0gbWF4VGFiSW5kZXg7XG4gICAgfSBlbHNlIGlmIChzaG91bGREZWNyZW1lbnQpIHtcbiAgICAgIHRhYkluZGV4IC09IDE7XG4gICAgfSBlbHNlIGlmIChzaG91bGRJbmNyZW1lbnQpIHtcbiAgICAgIHRhYkluZGV4ICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGFiSW5kZXggPCAwKSB7XG4gICAgICB0YWJJbmRleCA9IG1heFRhYkluZGV4O1xuICAgIH0gZWxzZSBpZiAodGFiSW5kZXggPiBtYXhUYWJJbmRleCkge1xuICAgICAgdGFiSW5kZXggPSAwO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVUYWIodGFiSW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHNjcm9sbCBpbmNyZW1lbnQgdGhhdCB3aWxsIG1ha2UgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdmlzaWJsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5leHRJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5leHQgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgVGFiIEJhclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgIGNvbnN0IG5leHRUYWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChuZXh0SW5kZXgpO1xuICAgIGNvbnN0IHJlbGF0aXZlQ29udGVudExlZnQgPSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgY29uc3QgcmVsYXRpdmVDb250ZW50UmlnaHQgPSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCBsZWZ0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50UmlnaHQgLSBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG4gICAgY29uc3QgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuXG4gICAgaWYgKG5leHRJbmRleCA8IGluZGV4KSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4obGVmdEluY3JlbWVudCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KHJpZ2h0SW5jcmVtZW50LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBzY3JvbGwgaW5jcmVtZW50IHRoYXQgd2lsbCBtYWtlIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IHZpc2libGUgaW4gUlRMXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV4dEluZGV4IFRoZSBpbmRleCBvZiB0aGUgbmV4dCB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBUYWIgQmFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxDb250ZW50V2lkdGggVGhlIHdpZHRoIG9mIHRoZSBzY3JvbGwgY29udGVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRSVExfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsQ29udGVudFdpZHRoLCApIHtcbiAgICBjb25zdCBuZXh0VGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRMZWZ0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gbmV4dFRhYkRpbWVuc2lvbnMuY29udGVudExlZnQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRSaWdodCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRSaWdodCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgY29uc3QgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgIGNvbnN0IHJpZ2h0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50TGVmdCAtIG51bWJlcnMuRVhUUkFfU0NST0xMX0FNT1VOVDtcblxuICAgIGlmIChuZXh0SW5kZXggPiBpbmRleCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KGxlZnRJbmNyZW1lbnQsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1pbihyaWdodEluY3JlbWVudCwgMCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0geyFNRENUYWJEaW1lbnNpb25zfSB0YWJEaW1lbnNpb25zIFRoZSBkaW1lbnNpb25zIG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSB0YWIgYmFyXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZV8oaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgIC8qKlxuICAgICAqIFRhYnMgYXJlIGxhaWQgb3V0IGluIHRoZSBUYWIgU2Nyb2xsZXIgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogICAgU2Nyb2xsIFBvc2l0aW9uXG4gICAgICogICAgKy0tLStcbiAgICAgKiAgICB8ICAgfCAgIEJhciBXaWR0aFxuICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgfCAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgKiAgICB8ICAgViAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVlxuICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgViAgIHwgICAgICAgICAgICAgVGFiIFNjcm9sbGVyICAgICAgICAgIHxcbiAgICAgKiAgICArLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgfCAgICBUYWIgICAgIHwgICAgICBUYWIgICAgIHwgICAgICAgIFRhYiAgICAgICAgfFxuICAgICAqICAgICstLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgKiAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAqICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICpcbiAgICAgKiBUbyBkZXRlcm1pbmUgdGhlIG5leHQgYWRqYWNlbnQgaW5kZXgsIHdlIGxvb2sgYXQgdGhlIFRhYiByb290IGxlZnQgYW5kXG4gICAgICogVGFiIHJvb3QgcmlnaHQsIGJvdGggcmVsYXRpdmUgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbi4gSWYgdGhlIFRhYiByb290XG4gICAgICogbGVmdCBpcyBsZXNzIHRoYW4gMCwgdGhlbiB3ZSBrbm93IGl0J3Mgb3V0IG9mIHZpZXcgdG8gdGhlIGxlZnQuIElmIHRoZVxuICAgICAqIFRhYiByb290IHJpZ2h0IG1pbnVzIHRoZSBiYXIgd2lkdGggaXMgZ3JlYXRlciB0aGFuIDAsIHdlIGtub3cgdGhlIFRhYiBpc1xuICAgICAqIG91dCBvZiB2aWV3IHRvIHRoZSByaWdodC4gRnJvbSB0aGVyZSwgd2UgZWl0aGVyIGluY3JlbWVudCBvciBkZWNyZW1lbnRcbiAgICAgKiB0aGUgaW5kZXguXG4gICAgICovXG4gICAgY29uc3QgcmVsYXRpdmVSb290TGVmdCA9IHRhYkRpbWVuc2lvbnMucm9vdExlZnQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByZWxhdGl2ZVJvb3RSaWdodCA9IHRhYkRpbWVuc2lvbnMucm9vdFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICBjb25zdCByZWxhdGl2ZVJvb3REZWx0YSA9IHJlbGF0aXZlUm9vdExlZnQgKyByZWxhdGl2ZVJvb3RSaWdodDtcbiAgICBjb25zdCBsZWZ0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290TGVmdCA8IDAgfHwgcmVsYXRpdmVSb290RGVsdGEgPCAwO1xuICAgIGNvbnN0IHJpZ2h0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290UmlnaHQgPiAwIHx8IHJlbGF0aXZlUm9vdERlbHRhID4gMDtcblxuICAgIGlmIChsZWZ0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICByZXR1cm4gaW5kZXggLSAxO1xuICAgIH1cblxuICAgIGlmIChyaWdodEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyIGluIFJUTFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHshTURDVGFiRGltZW5zaW9uc30gdGFiRGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgdGFiIGJhclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsZXIgY29udGVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmaW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VSVExfKGluZGV4LCB0YWJEaW1lbnNpb25zLCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbENvbnRlbnRXaWR0aCkge1xuICAgIGNvbnN0IHJvb3RMZWZ0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290TGVmdCAtIGJhcldpZHRoIC0gc2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3Qgcm9vdFJpZ2h0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByb290RGVsdGEgPSByb290TGVmdCArIHJvb3RSaWdodDtcbiAgICBjb25zdCBsZWZ0RWRnZUlzQ2xvc2VyID0gcm9vdExlZnQgPiAwIHx8IHJvb3REZWx0YSA+IDA7XG4gICAgY29uc3QgcmlnaHRFZGdlSXNDbG9zZXIgPSByb290UmlnaHQgPCAwIHx8IHJvb3REZWx0YSA8IDA7XG5cbiAgICBpZiAobGVmdEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFZGdlSXNDbG9zZXIpIHtcbiAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggYSBrZXlkb3duIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnQgVGhlIGtleWRvd24gZXZlbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0S2V5RnJvbUV2ZW50XyhldnQpIHtcbiAgICBpZiAoQUNDRVBUQUJMRV9LRVlTLmhhcyhldnQua2V5KSkge1xuICAgICAgcmV0dXJuIGV2dC5rZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEtFWUNPREVfTUFQLmdldChldnQua2V5Q29kZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gaW5kZXggaXMgaW5jbHVzaXZlbHkgYmV0d2VlbiB0aGUgZW5kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHRvIHRlc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluZGV4SXNJblJhbmdlXyhpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5hZGFwdGVyXy5nZXRUYWJMaXN0TGVuZ3RoKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmlldydzIFJUTCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNSVExfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmlzUlRMKCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXcgZm9yIGxlZnQtdG8tcmlnaHQgdXNlcmFnZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gc2Nyb2xsIGludG8gdmlld1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXdfKGluZGV4KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKTtcblxuICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8obmV4dEluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbEluY3JlbWVudCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpO1xuICAgIHRoaXMuYWRhcHRlcl8uaW5jcmVtZW50U2Nyb2xsKHNjcm9sbEluY3JlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXcgaW4gUlRMXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgdGFiIGluZGV4IHRvIG1ha2UgdmlzaWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXdSVExfKGluZGV4KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50V2lkdGgoKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8oXG4gICAgICBpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG5cbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKG5leHRJbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxJbmNyZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG4gICAgdGhpcy5hZGFwdGVyXy5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsSW5jcmVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJCYXJGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5cbmltcG9ydCB7TURDVGFiLCBNRENUYWJGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvdGFiL2luZGV4JztcbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJ9IGZyb20gJ0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvaW5kZXgnO1xuXG5pbXBvcnQgTURDVGFiQmFyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RhYkJhckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENUYWJCYXJGb3VuZGF0aW9uPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJCYXIgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBcnJheTwhTURDVGFiPn0gKi9cbiAgICB0aGlzLnRhYkxpc3RfO1xuXG4gICAgLyoqIEB0eXBlIHsoZnVuY3Rpb24oIUVsZW1lbnQpOiAhTURDVGFiKX0gKi9cbiAgICB0aGlzLnRhYkZhY3RvcnlfO1xuXG4gICAgLyoqIEBwcml2YXRlIHs/TURDVGFiU2Nyb2xsZXJ9ICovXG4gICAgdGhpcy50YWJTY3JvbGxlcl87XG5cbiAgICAvKiogQHR5cGUgeyhmdW5jdGlvbighRWxlbWVudCk6ICFNRENUYWJTY3JvbGxlcil9ICovXG4gICAgdGhpcy50YWJTY3JvbGxlckZhY3RvcnlfO1xuXG4gICAgLyoqIEBwcml2YXRlIHs/ZnVuY3Rpb24oP0V2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaGFuZGxlVGFiSW50ZXJhY3Rpb25fO1xuXG4gICAgLyoqIEBwcml2YXRlIHs/ZnVuY3Rpb24oP0V2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaGFuZGxlS2V5RG93bl87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDVGFiQmFyfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1RhYkJhcihyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyhmdW5jdGlvbighRWxlbWVudCk6ICFNRENUYWIpPX0gdGFiRmFjdG9yeSBBIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgTURDVGFiXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ1RhYlNjcm9sbGVyKT19IHRhYlNjcm9sbGVyRmFjdG9yeSBBIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgTURDVGFiU2Nyb2xsZXJcbiAgICovXG4gIGluaXRpYWxpemUoXG4gICAgdGFiRmFjdG9yeSA9IChlbCkgPT4gbmV3IE1EQ1RhYihlbCksXG4gICAgdGFiU2Nyb2xsZXJGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDVGFiU2Nyb2xsZXIoZWwpLFxuICApIHtcbiAgICB0aGlzLnRhYkZhY3RvcnlfID0gdGFiRmFjdG9yeTtcbiAgICB0aGlzLnRhYlNjcm9sbGVyRmFjdG9yeV8gPSB0YWJTY3JvbGxlckZhY3Rvcnk7XG5cbiAgICBjb25zdCB0YWJFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKE1EQ1RhYkJhckZvdW5kYXRpb24uc3RyaW5ncy5UQUJfU0VMRUNUT1IpKTtcbiAgICB0aGlzLnRhYkxpc3RfID0gdGFiRWxlbWVudHMubWFwKChlbCkgPT4gdGhpcy50YWJGYWN0b3J5XyhlbCkpO1xuXG4gICAgY29uc3QgdGFiU2Nyb2xsZXJFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKE1EQ1RhYkJhckZvdW5kYXRpb24uc3RyaW5ncy5UQUJfU0NST0xMRVJfU0VMRUNUT1IpO1xuICAgIGlmICh0YWJTY3JvbGxlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMudGFiU2Nyb2xsZXJfID0gdGhpcy50YWJTY3JvbGxlckZhY3RvcnlfKHRhYlNjcm9sbGVyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMuaGFuZGxlVGFiSW50ZXJhY3Rpb25fID0gKGV2dCkgPT4gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVUYWJJbnRlcmFjdGlvbihldnQpO1xuICAgIHRoaXMuaGFuZGxlS2V5RG93bl8gPSAoZXZ0KSA9PiB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleURvd24oZXZ0KTtcblxuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RFRF9FVkVOVCwgdGhpcy5oYW5kbGVUYWJJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKE1EQ1RhYkZvdW5kYXRpb24uc3RyaW5ncy5JTlRFUkFDVEVEX0VWRU5ULCB0aGlzLmhhbmRsZVRhYkludGVyYWN0aW9uXyk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duXyk7XG4gICAgdGhpcy50YWJMaXN0Xy5mb3JFYWNoKCh0YWIpID0+IHRhYi5kZXN0cm95KCkpO1xuICAgIHRoaXMudGFiU2Nyb2xsZXJfLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiQmFyRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDVGFiQmFyRm91bmRhdGlvbihcbiAgICAgIC8qKiBAdHlwZSB7IU1EQ1RhYkJhckFkYXB0ZXJ9ICovICh7XG4gICAgICAgIHNjcm9sbFRvOiAoc2Nyb2xsWCkgPT4gdGhpcy50YWJTY3JvbGxlcl8uc2Nyb2xsVG8oc2Nyb2xsWCksXG4gICAgICAgIGluY3JlbWVudFNjcm9sbDogKHNjcm9sbFhJbmNyZW1lbnQpID0+IHRoaXMudGFiU2Nyb2xsZXJfLmluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSxcbiAgICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+IHRoaXMudGFiU2Nyb2xsZXJfLmdldFNjcm9sbFBvc2l0aW9uKCksXG4gICAgICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aDogKCkgPT4gdGhpcy50YWJTY3JvbGxlcl8uZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCksXG4gICAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldFdpZHRoLFxuICAgICAgICBpc1JUTDogKCkgPT4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yb290XykuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgICBhY3RpdmF0ZVRhYkF0SW5kZXg6IChpbmRleCwgY2xpZW50UmVjdCkgPT4gdGhpcy50YWJMaXN0X1tpbmRleF0uYWN0aXZhdGUoY2xpZW50UmVjdCksXG4gICAgICAgIGRlYWN0aXZhdGVUYWJBdEluZGV4OiAoaW5kZXgpID0+IHRoaXMudGFiTGlzdF9baW5kZXhdLmRlYWN0aXZhdGUoKSxcbiAgICAgICAgZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXg6IChpbmRleCkgPT4gdGhpcy50YWJMaXN0X1tpbmRleF0uY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QoKSxcbiAgICAgICAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXg6IChpbmRleCkgPT4gdGhpcy50YWJMaXN0X1tpbmRleF0uY29tcHV0ZURpbWVuc2lvbnMoKSxcbiAgICAgICAgZ2V0QWN0aXZlVGFiSW5kZXg6ICgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiTGlzdF8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkxpc3RfW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuICAgICAgICBnZXRJbmRleE9mVGFiOiAodGFiVG9GaW5kKSA9PiB0aGlzLnRhYkxpc3RfLmluZGV4T2YodGFiVG9GaW5kKSxcbiAgICAgICAgZ2V0VGFiTGlzdExlbmd0aDogKCkgPT4gdGhpcy50YWJMaXN0Xy5sZW5ndGgsXG4gICAgICAgIG5vdGlmeVRhYkFjdGl2YXRlZDogKGluZGV4KSA9PiB0aGlzLmVtaXQoTURDVGFiQmFyRm91bmRhdGlvbi5zdHJpbmdzLlRBQl9BQ1RJVkFURURfRVZFTlQsIHtpbmRleH0sIHRydWUpLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICovXG4gIGFjdGl2YXRlVGFiKGluZGV4KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZVRhYihpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXdcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRIZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqL1xuICBzY3JvbGxJbnRvVmlldyhpbmRleCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGFiQmFyLCBNRENUYWJCYXJGb3VuZGF0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogTURDVGFiU2Nyb2xsZXJBbmltYXRpb24gY29udGFpbnMgdGhlIHZhbHVlcyByZXF1aXJlZCBmb3IgYW5pbWF0aW5nIGZyb20gdGhlXG4gKiBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB0byB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbi4gVGhlIFwiZmluYWxTY3JvbGxQb3NpdGlvblwiXG4gKiB2YWx1ZSByZXByZXNlbnRzIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIHdoaWxlIHRoZSBcInNjcm9sbERlbHRhXCIgdmFsdWUgaXMgdGhlXG4gKiBjb3JyZXNwb25kaW5nIHRyYW5zZm9ybWF0aW9uIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgc2Nyb2xsIGNvbnRlbnQuIFRvZ2V0aGVyLFxuICogdGhleSBjcmVhdGUgdGhlIGFuaW1hdGlvbiBieSBmaXJzdCB1cGRhdGluZyB0aGUgc2Nyb2xsIHZhbHVlIHRoZW4gYXBwbHlpbmdcbiAqIHRoZSB0cmFuc2Zvcm1hdGlvbiBhbmQgYW5pbWF0aW5nIHRoZSB0cmFuc2l0aW9uLiBCb3RoIHBpZWNlcyBhcmUgbmVjZXNzYXJ5XG4gKiBmb3IgdGhlIHNjcm9sbCBhbmltYXRpb24gdG8gd29yay4gVGhlIHZhbHVlcyBhcmUgdXNlZCBhcy1pcyBieSB0aGUgdGFiXG4gKiBzY3JvbGxlciBhbmltYXRpb24gbWV0aG9kLCBlbnN1cmluZyB0aGF0IGFsbCBsb2dpYyBmb3IgZGV0ZXJtaW5pbmcgc2Nyb2xsXG4gKiBwb3NpdGlvbiBvciB0cmFuc2Zvcm1hdGlvbiBpcyBhYnN0cmFjdGVkIGF3YXkgZnJvbSB0aGUgYW5pbWF0aW9uIG1ldGhvZC5cbiAqIEB0eXBlZGVmIHt7ZmluYWxTY3JvbGxQb3NpdGlvbjogbnVtYmVyLCBzY3JvbGxEZWx0YTogbnVtYmVyfX1cbiAqL1xubGV0IE1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uO1xuXG4vKipcbiAqIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzIHJlcHJlc2VudHMgdGhlIGxlZnQgYW5kIHJpZ2h0IGVkZ2VzIG9mIHRoZVxuICogc2Nyb2xsIGNvbnRlbnQuIFRoZXNlIHZhbHVlcyB2YXJ5IGRlcGVuZGluZyBvbiBob3cgc2Nyb2xsaW5nIGluIFJUTCBpc1xuICogaW1wbGVtZW50ZWQgYnkgdGhlIGJyb3dzZXIuIE9uZSB2YWx1ZSBpcyBhbHdheXMgMCBhbmQgb25lIHZhbHVlIGlzIGFsd2F5c1xuICogdGhlIG1heCBzY3JvbGxhYmxlIHZhbHVlIGFzIGVpdGhlciBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXIuXG4gKiBAdHlwZWRlZiB7e2xlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcn19XG4gKi9cbmxldCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlcztcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGFiIFNjcm9sbGVyLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRhYiAgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBjbGFzc05hbWUgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjbGFzc05hbWUgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkU2Nyb2xsQXJlYUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBldmVudCB0YXJnZXQgbWF0Y2hlcyBnaXZlbiBjbGFzc05hbWUuXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2dFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBUaGUgc2VsZWN0b3IgdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yKGV2dFRhcmdldCwgc2VsZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYXJlYSBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZSBUaGUgc3R5bGUgcHJvcGVydHkgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQXJlYVN0eWxlUHJvcGVydHkocHJvcE5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGNvbnRlbnQgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWUgVGhlIHN0eWxlIHByb3BlcnR5IG5hbWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3R5bGUgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KHByb3BOYW1lLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudCdzIGNvbXB1dGVkIHN0eWxlIHZhbHVlIG9mIHRoZSBnaXZlbiBjc3MgcHJvcGVydHkgYHByb3BlcnR5TmFtZWAuXG4gICAqIFdlIGFjaGlldmUgdGhpcyB2aWEgYGdldENvbXB1dGVkU3R5bGUoLi4uKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSlgLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlKHByb3BlcnR5TmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2Nyb2xsTGVmdCB2YWx1ZSBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsTGVmdCBUaGUgbmV3IHNjcm9sbExlZnQgdmFsdWVcbiAgICovXG4gIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbExlZnQgdmFsdWUgb2YgdGhlIHNjcm9sbCBhcmVhIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldFdpdGR0aCBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgdGhlIHNjcm9sbCBhcmVhIGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgdGhlIHNjcm9sbCBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSBicm93c2VyJ3MgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIChpbiBweCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KCkge31cbn1cblxuZXhwb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXMsIE1EQ1RhYlNjcm9sbGVyQWRhcHRlcn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFOSU1BVElORzogJ21kYy10YWItc2Nyb2xsZXItLWFuaW1hdGluZycsXG4gIFNDUk9MTF9URVNUOiAnbWRjLXRhYi1zY3JvbGxlcl9fdGVzdCcsXG4gIFNDUk9MTF9BUkVBX1NDUk9MTDogJ21kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhLS1zY3JvbGwnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBBUkVBX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhJyxcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCcsXG59O1xuXG5leHBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzLCBNRENUYWJTY3JvbGxlckFkYXB0ZXJ9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCBmcm9tICcuL3J0bC1kZWZhdWx0LXNjcm9sbGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIGZyb20gJy4vcnRsLW5lZ2F0aXZlLXNjcm9sbGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgZnJvbSAnLi9ydGwtcmV2ZXJzZS1zY3JvbGxlcic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJTY3JvbGxlckFkYXB0ZXIgZm9yIHR5cGluZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSAqLyAoe1xuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3I6ICgpID0+IHt9LFxuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBib29sZWFuIGNvbnRyb2xzIHdoZXRoZXIgd2Ugc2hvdWxkIGhhbmRsZSB0aGUgdHJhbnNpdGlvbmVuZCBhbmQgaW50ZXJhY3Rpb24gZXZlbnRzIGR1cmluZyB0aGUgYW5pbWF0aW9uLlxuICAgICAqIEBwcml2YXRlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBbmltYXRpbmdfID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgTURDVGFiU2Nyb2xsZXJSVEwgaW5zdGFuY2UgdmFyaWVzIHBlciBicm93c2VyIGFuZCBhbGxvd3MgdXMgdG8gZW5jYXBzdWxhdGUgdGhlIHBlY3VsaWFyIGJyb3dzZXIgYmVoYXZpb3JcbiAgICAgKiBvZiBSVEwgc2Nyb2xsaW5nIGluIGl0J3Mgb3duIGNsYXNzLlxuICAgICAqIEBwcml2YXRlIHs/TURDVGFiU2Nyb2xsZXJSVEx9XG4gICAgICovXG4gICAgdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gQ29tcHV0ZSBob3Jpem9udGFsIHNjcm9sbGJhciBoZWlnaHQgb24gc2Nyb2xsZXIgd2l0aCBvdmVyZmxvdyBpbml0aWFsbHkgaGlkZGVuLCB0aGVuIHVwZGF0ZSBvdmVyZmxvdyB0byBzY3JvbGxcbiAgICAvLyBhbmQgaW1tZWRpYXRlbHkgYWRqdXN0IGJvdHRvbSBtYXJnaW4gdG8gYXZvaWQgdGhlIHNjcm9sbGJhciBpbml0aWFsbHkgYXBwZWFyaW5nIGJlZm9yZSBKUyBydW5zLlxuICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScsIC1ob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRTY3JvbGxBcmVhQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuU0NST0xMX0FSRUFfU0NST0xMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY3VycmVudCB2aXN1YWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlQ3VycmVudFNjcm9sbFBvc2l0aW9uUlRMXygpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIHJldHVybiBzY3JvbGxMZWZ0IC0gY3VycmVudFRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBpbnRlcmFjdGlvbiBldmVudHMgdGhhdCBvY2N1ciBkdXJpbmcgdHJhbnNpdGlvblxuICAgKi9cbiAgaGFuZGxlSW50ZXJhY3Rpb24oKSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgb3RoZXIgZXZlbnQgbGlzdGVuZXJzIGZyb20gaGFuZGxpbmcgdGhpcyBldmVudFxuICAgIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbl8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSB0cmFuc2l0aW9uZW5kIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nIG9yIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgZGlmZmVyZW50IGVsZW1lbnQuXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nX1xuICAgICAgfHwgIXRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IoZXZ0LnRhcmdldCwgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnQgdGhlIHNjcm9sbCB2YWx1ZSBieSB0aGUgc2Nyb2xsWEluY3JlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWEluY3JlbWVudCBUaGUgdmFsdWUgYnkgd2hpY2ggdG8gaW5jcmVtZW50IHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgLy8gRWFybHkgZXhpdCBmb3Igbm9uLW9wZXJhdGlvbmFsIGluY3JlbWVudCB2YWx1ZXNcbiAgICBpZiAoc2Nyb2xsWEluY3JlbWVudCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmNyZW1lbnRTY3JvbGxSVExfKHNjcm9sbFhJbmNyZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuaW5jcmVtZW50U2Nyb2xsXyhzY3JvbGxYSW5jcmVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBzY3JvbGxYIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7XG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUlRMXyhzY3JvbGxYKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbFRvXyhzY3JvbGxYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSB2ZXJzaW9uIG9mIHRoZSBNRENUYWJTY3JvbGxlclJUTFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJSVEx9XG4gICAqL1xuICBnZXRSVExTY3JvbGxlcigpIHtcbiAgICBpZiAoIXRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8pIHtcbiAgICAgIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8gPSB0aGlzLnJ0bFNjcm9sbGVyRmFjdG9yeV8oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGVYIHZhbHVlIGZyb20gYSBDU1MgbWF0cml4IHRyYW5zZm9ybSBmdW5jdGlvbiBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCkge1xuICAgIGNvbnN0IHRyYW5zZm9ybVZhbHVlID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZSgndHJhbnNmb3JtJyk7XG4gICAgLy8gRWFybHkgZXhpdCBpZiBubyB0cmFuc2Zvcm0gaXMgcHJlc2VudFxuICAgIGlmICh0cmFuc2Zvcm1WYWx1ZSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgdHJhbnNmb3JtIHZhbHVlIGNvbWVzIGJhY2sgYXMgYSBtYXRyaXggdHJhbnNmb3JtYXRpb24gaW4gdGhlIGZvcm1cbiAgICAvLyBvZiBgbWF0cml4KGEsIGIsIGMsIGQsIHR4LCB0eSlgLiBXZSBvbmx5IGNhcmUgYWJvdXQgdHggKHRyYW5zbGF0ZVgpIHNvXG4gICAgLy8gd2UncmUgZ29pbmcgdG8gZ3JhYiBhbGwgdGhlIHBhcmVudGhlc2l6ZWQgdmFsdWVzLCBzdHJpcCBvdXQgdHgsIGFuZFxuICAgIC8vIHBhcnNlIGl0LlxuICAgIGNvbnN0IHJlc3VsdHMgPSAvXFwoKC4rKVxcKS8uZXhlYyh0cmFuc2Zvcm1WYWx1ZSlbMV07XG4gICAgY29uc3QgcGFydHMgPSByZXN1bHRzLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGFydHNbNF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgYSBzYWZlIHNjcm9sbCB2YWx1ZSB0aGF0IGlzID4gMCBhbmQgPCB0aGUgbWF4IHNjcm9sbCB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgZGlzdGFuY2UgdG8gc2Nyb2xsXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLmxlZnQsIHNjcm9sbFgpLCBlZGdlcy5yaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8oKSB7XG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5nZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxFZGdlc18oKSB7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gKi8gKHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNjcm9sbFRvXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbFggPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2FmZVNjcm9sbFggPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2FmZVNjcm9sbFggLSBjdXJyZW50U2Nyb2xsWDtcbiAgICB0aGlzLmFuaW1hdGVfKC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogc2FmZVNjcm9sbFgsXG4gICAgICBzY3JvbGxEZWx0YTogc2Nyb2xsRGVsdGEsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIFJUTCBzY3JvbGwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzY3JvbGxUb1JUTF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5zY3JvbGxUb1JUTChzY3JvbGxYKTtcbiAgICB0aGlzLmFuaW1hdGVfKGFuaW1hdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgaW5jcmVtZW50IHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gaW5jcmVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsWCA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxYID0gc2Nyb2xsWCArIGN1cnJlbnRTY3JvbGxYO1xuICAgIGNvbnN0IHNhZmVTY3JvbGxYID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyh0YXJnZXRTY3JvbGxYKTtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNhZmVTY3JvbGxYIC0gY3VycmVudFNjcm9sbFg7XG4gICAgdGhpcy5hbmltYXRlXygvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IHNhZmVTY3JvbGxYLFxuICAgICAgc2Nyb2xsRGVsdGE6IHNjcm9sbERlbHRhLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBpbmNyZW1lbmV0IHNjcm9sbCBSVEwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIFJUTCBpbmNyZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5pbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCk7XG4gICAgdGhpcy5hbmltYXRlXyhhbmltYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIHRoZSB0YWIgc2Nyb2xsaW5nXG4gICAqIEBwYXJhbSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSBhbmltYXRpb24gVGhlIGFuaW1hdGlvbiB0byBhcHBseVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZV8oYW5pbWF0aW9uKSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB0cmFuc2xhdGVYIGlzIDAsIHdoaWNoIG1lYW5zIHRoZXJlJ3Mgbm8gYW5pbWF0aW9uIHRvIHBlcmZvcm1cbiAgICBpZiAoYW5pbWF0aW9uLnNjcm9sbERlbHRhID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guXG4gICAgLy8gUmVhZCBtb3JlIGhlcmU6IGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoYW5pbWF0aW9uLmZpbmFsU2Nyb2xsUG9zaXRpb24pO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7YW5pbWF0aW9uLnNjcm9sbERlbHRhfXB4KWApO1xuICAgIC8vIEZvcmNlIHJlcGFpbnRcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgc2Nyb2xsIGFuaW1hdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RvcFNjcm9sbEFuaW1hdGlvbl8oKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwcHgpJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChjdXJyZW50U2Nyb2xsUG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyBhbmltYXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb25fKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSVExTY3JvbGxlcigpLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbExlZnQsIGN1cnJlbnRUcmFuc2xhdGVYKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsTGVmdCAtIGN1cnJlbnRUcmFuc2xhdGVYO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIFJUTCBTY3JvbGxlciB0byB1c2VcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyUlRMfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcnRsU2Nyb2xsZXJGYWN0b3J5XygpIHtcbiAgICAvLyBCcm93c2VycyBoYXZlIHRocmVlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbnMgb2Ygc2Nyb2xsTGVmdCBpbiBSVEwgbW9kZSxcbiAgICAvLyBkZXBlbmRlbnQgb24gdGhlIGJyb3dzZXIuIFRoZSBiZWhhdmlvciBpcyBiYXNlZCBvZmYgdGhlIG1heCBMVFJcbiAgICAvLyBzY3JvbGxsZWZ0IHZhbHVlIGFuZCAwLlxuICAgIC8vXG4gICAgLy8gKiBEZWZhdWx0IHNjcm9sbGluZyBpbiBSVEwgKlxuICAgIC8vICAgIC0gTGVmdC1tb3N0IHZhbHVlOiAwXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiBNYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAvL1xuICAgIC8vICogTmVnYXRpdmUgc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE5lZ2F0ZWQgbWF4IExUUiBzY3JvbGxMZWZ0IHZhbHVlXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiAwXG4gICAgLy9cbiAgICAvLyAqIFJldmVyc2Ugc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgIC8vICAgIC0gUmlnaHQtbW9zdCB2YWx1ZTogMFxuICAgIC8vXG4gICAgLy8gV2UgdXNlIHRob3NlIHByaW5jaXBsZXMgYmVsb3cgdG8gZGV0ZXJtaW5lIHdoaWNoIFJUTCBzY3JvbGxMZWZ0XG4gICAgLy8gYmVoYXZpb3IgaXMgaW1wbGVtZW50ZWQgaW4gdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAgICBjb25zdCBpbml0aWFsU2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0IC0gMSk7XG4gICAgY29uc3QgbmV3U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcblxuICAgIC8vIElmIHRoZSBuZXdTY3JvbGxMZWZ0IHZhbHVlIGlzIG5lZ2F0aXZlLHRoZW4gd2Uga25vdyB0aGF0IHRoZSBicm93c2VyIGhhc1xuICAgIC8vIGltcGxlbWVudGVkIG5lZ2F0aXZlIFJUTCBzY3JvbGxpbmcsIHNpbmNlIGFsbCBvdGhlciBpbXBsZW1lbnRhdGlvbnMgaGF2ZVxuICAgIC8vIG9ubHkgcG9zaXRpdmUgdmFsdWVzLlxuICAgIGlmIChuZXdTY3JvbGxMZWZ0IDwgMCkge1xuICAgICAgLy8gVW5kbyB0aGUgc2Nyb2xsTGVmdCB0ZXN0IGNoZWNrXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcbiAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSh0aGlzLmFkYXB0ZXJfKTtcbiAgICB9XG5cbiAgICBjb25zdCByb290Q2xpZW50UmVjdCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGVudENsaWVudFJlY3QgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHJpZ2h0RWRnZURlbHRhID0gTWF0aC5yb3VuZChjb250ZW50Q2xpZW50UmVjdC5yaWdodCAtIHJvb3RDbGllbnRSZWN0LnJpZ2h0KTtcbiAgICAvLyBVbmRvIHRoZSBzY3JvbGxMZWZ0IHRlc3QgY2hlY2tcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcblxuICAgIC8vIEJ5IGNhbGN1bGF0aW5nIHRoZSBjbGllbnRSZWN0IG9mIHRoZSByb290IGVsZW1lbnQgYW5kIHRoZSBjbGllbnRSZWN0IG9mXG4gICAgLy8gdGhlIGNvbnRlbnQgZWxlbWVudCwgd2UgY2FuIGRldGVybWluZSBob3cgbXVjaCB0aGUgc2Nyb2xsIHZhbHVlIGNoYW5nZWRcbiAgICAvLyB3aGVuIHdlIHBlcmZvcm1lZCB0aGUgc2Nyb2xsTGVmdCBzdWJ0cmFjdGlvbiBhYm92ZS5cbiAgICBpZiAocmlnaHRFZGdlRGVsdGEgPT09IG5ld1Njcm9sbExlZnQpIHtcbiAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlKHRoaXMuYWRhcHRlcl8pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0KHRoaXMuYWRhcHRlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc1JUTF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXIgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJ9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXIocm9vdCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHByaXZhdGUgez9FbGVtZW50fSAqL1xuICAgIHRoaXMuY29udGVudF87XG5cbiAgICAvKiogQHByaXZhdGUgez9FbGVtZW50fSAqL1xuICAgIHRoaXMuYXJlYV87XG5cbiAgICAvKiogQHByaXZhdGUgez9mdW5jdGlvbig/RXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl87XG5cbiAgICAvKiogQHByaXZhdGUgez9mdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXztcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5hcmVhXyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uc3RyaW5ncy5BUkVBX1NFTEVDVE9SKTtcbiAgICB0aGlzLmNvbnRlbnRfID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fID0gKCkgPT4gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVJbnRlcmFjdGlvbigpO1xuICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8gPSAoZXZ0KSA9PiB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KTtcblxuICAgIHRoaXMuYXJlYV8uYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLmhhbmRsZUludGVyYWN0aW9uXyk7XG4gICAgdGhpcy5hcmVhXy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuYXJlYV8uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUludGVyYWN0aW9uXyk7XG4gICAgdGhpcy5hcmVhXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUludGVyYWN0aW9uXyk7XG4gICAgdGhpcy5hcmVhXy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuY29udGVudF8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmFyZWFfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuYXJlYV8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fKTtcbiAgICB0aGlzLmFyZWFfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuYXJlYV8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuYXJlYV8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fKTtcbiAgICB0aGlzLmNvbnRlbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcn0gKi8gKHtcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yOiAoZXZ0VGFyZ2V0LCBzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIGV2dFRhcmdldFtNQVRDSEVTXShzZWxlY3Rvcik7XG4gICAgICB9LFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLmFyZWFfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+IHRoaXMuYXJlYV8uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUpLFxuICAgICAgc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHk6IChwcm9wLCB2YWx1ZSkgPT4gdGhpcy5jb250ZW50Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSksXG4gICAgICBnZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZTogKHByb3BOYW1lKSA9PiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbnRlbnRfKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoc2Nyb2xsWCkgPT4gdGhpcy5hcmVhXy5zY3JvbGxMZWZ0ID0gc2Nyb2xsWCxcbiAgICAgIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB0aGlzLmFyZWFfLnNjcm9sbExlZnQsXG4gICAgICBnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuY29udGVudF8ub2Zmc2V0V2lkdGgsXG4gICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuYXJlYV8ub2Zmc2V0V2lkdGgsXG4gICAgICBjb21wdXRlU2Nyb2xsQXJlYUNsaWVudFJlY3Q6ICgpID0+IHRoaXMuYXJlYV8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3Q6ICgpID0+IHRoaXMuY29udGVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogKCkgPT4gdXRpbC5jb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodChkb2N1bWVudCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZpc3VhbCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRfLm9mZnNldFdpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudHMgdGhlIHNjcm9sbCB2YWx1ZSBieSB0aGUgZ2l2ZW4gYW1vdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYSW5jcmVtZW50IFRoZSBwaXhlbCB2YWx1ZSBieSB3aGljaCB0byBpbmNyZW1lbnQgdGhlIHNjcm9sbCB2YWx1ZVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBwaXhlbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgcGl4ZWwgdmFsdWUgdG8gc2Nyb2xsIHRvXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zY3JvbGxUbyhzY3JvbGxYKTtcbiAgfVxufVxuXG5leHBvcnQge01EQ1RhYlNjcm9sbGVyLCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24sIHV0aWx9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYlNjcm9sbGVyUlRMfVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCBleHRlbmRzIE1EQ1RhYlNjcm9sbGVyUlRMIHtcbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uUlRMKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IHtyaWdodH0gPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIC8vIFNjcm9sbCB2YWx1ZXMgb24gbW9zdCBicm93c2VycyBhcmUgaW50cyBpbnN0ZWFkIG9mIGZsb2F0cyBzbyB3ZSByb3VuZFxuICAgIHJldHVybiBNYXRoLnJvdW5kKHJpZ2h0IC0gY3VycmVudFNjcm9sbExlZnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGVkZ2VzLnJpZ2h0IC0gc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhjdXJyZW50U2Nyb2xsTGVmdCAtIHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24oc2Nyb2xsWCkge1xuICAgIHJldHVybiBzY3JvbGxYO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpIHtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSAqLyAoe1xuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZWRnZXMubGVmdCwgc2Nyb2xsWCksIGVkZ2VzLnJpZ2h0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtZGVmYXVsdC1zY3JvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLWRlZmF1bHQtc2Nyb2xsZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gICogQGxpY2Vuc2VcbiAgKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAqXG4gICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgKlxuICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICpcbiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTCBmcm9tICcuL3J0bC1zY3JvbGxlcic7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVGFiU2Nyb2xsZXJSVEx9XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSBleHRlbmRzIE1EQ1RhYlNjcm9sbGVyUlRMIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYIFRoZSBjdXJyZW50IHRyYW5zbGF0ZVggcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb25SVEwodHJhbnNsYXRlWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRyYW5zbGF0ZVggLSBjdXJyZW50U2Nyb2xsTGVmdCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXygtc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhjdXJyZW50U2Nyb2xsTGVmdCAtIHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRyYW5zbGF0ZVhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24oc2Nyb2xsWCwgdHJhbnNsYXRlWCkge1xuICAgIHJldHVybiBzY3JvbGxYIC0gdHJhbnNsYXRlWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxFZGdlc18oKSB7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gKi8gKHtcbiAgICAgIGxlZnQ6IHJvb3RXaWR0aCAtIGNvbnRlbnRXaWR0aCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGVkZ2VzLnJpZ2h0LCBzY3JvbGxYKSwgZWRnZXMubGVmdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1uZWdhdGl2ZS1zY3JvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLW5lZ2F0aXZlLXNjcm9sbGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYlNjcm9sbGVyUlRMfVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSBleHRlbmRzIE1EQ1RhYlNjcm9sbGVyUlRMIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uUlRMKHRyYW5zbGF0ZVgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAvLyBTY3JvbGwgdmFsdWVzIG9uIG1vc3QgYnJvd3NlcnMgYXJlIGludHMgaW5zdGVhZCBvZiBmbG9hdHMgc28gd2Ugcm91bmRcbiAgICByZXR1cm4gTWF0aC5yb3VuZChjdXJyZW50U2Nyb2xsTGVmdCAtIHRyYW5zbGF0ZVgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY3VycmVudFNjcm9sbExlZnQgLSBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhjdXJyZW50U2Nyb2xsTGVmdCArIHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGN1cnJlbnRTY3JvbGxMZWZ0IC0gY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24oc2Nyb2xsWCwgdHJhbnNsYXRlWCkge1xuICAgIHJldHVybiBzY3JvbGxYICsgdHJhbnNsYXRlWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxFZGdlc18oKSB7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gKi8gKHtcbiAgICAgIGxlZnQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLnJpZ2h0LCBzY3JvbGxYKSwgZWRnZXMubGVmdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLXJldmVyc2Utc2Nyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1yZXZlcnNlLXNjcm9sbGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBZGFwdGVyLCBNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKiogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgY3VycmVudCBzY3JvbGxYIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYIFRoZSBjdXJyZW50IHRyYW5zbGF0ZVggcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLXNjcm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtc2Nyb2xsZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7Y3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZy5cbiAqIEBwcml2YXRlIHtudW1iZXJ8dW5kZWZpbmVkfVxuICovXG5sZXQgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF87XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhlaWdodCBvZiBicm93c2VyLXJlbmRlcmVkIGhvcml6b250YWwgc2Nyb2xsYmFycyB1c2luZyBhIHNlbGYtY3JlYXRlZCB0ZXN0IGVsZW1lbnQuXG4gKiBNYXkgcmV0dXJuIDAgKGUuZy4gb24gT1MgWCBicm93c2VycyB1bmRlciBkZWZhdWx0IGNvbmZpZ3VyYXRpb24pLlxuICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRDYWNoZVJlc3VsdFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodChkb2N1bWVudE9iaiwgc2hvdWxkQ2FjaGVSZXN1bHQgPSB0cnVlKSB7XG4gIGlmIChzaG91bGRDYWNoZVJlc3VsdCAmJiB0eXBlb2YgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfO1xuICB9XG5cbiAgY29uc3QgZWwgPSBkb2N1bWVudE9iai5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLlNDUk9MTF9URVNUKTtcbiAgZG9jdW1lbnRPYmouYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cbiAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCA9IGVsLm9mZnNldEhlaWdodCAtIGVsLmNsaWVudEhlaWdodDtcbiAgZG9jdW1lbnRPYmouYm9keS5yZW1vdmVDaGlsZChlbCk7XG5cbiAgaWYgKHNob3VsZENhY2hlUmVzdWx0KSB7XG4gICAgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF8gPSBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0O1xuICB9XG4gIHJldHVybiBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4geyFBcnJheTxzdHJpbmc+fVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgcmV0dXJuIFtcbiAgICAnbXNNYXRjaGVzU2VsZWN0b3InLCAnbWF0Y2hlcycsXG4gIF0uZmlsdGVyKChwKSA9PiBwIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKS5wb3AoKTtcbn1cblxuZXhwb3J0IHtjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCwgZ2V0TWF0Y2hlc1Byb3BlcnR5fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3V0aWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIE1EQ1RhYkRpbWVuc2lvbnMgcHJvdmlkZXMgZGV0YWlscyBhYm91dCB0aGUgbGVmdCBhbmQgcmlnaHQgZWRnZXMgb2YgdGhlIFRhYlxuICogcm9vdCBlbGVtZW50IGFuZCB0aGUgVGFiIGNvbnRlbnQgZWxlbWVudC4gVGhlc2UgdmFsdWVzIGFyZSB1c2VkIHRvIGRldGVybWluZVxuICogdGhlIHZpc3VhbCBwb3NpdGlvbiBvZiB0aGUgVGFiIHdpdGggcmVzcGVjdCBpdCdzIHBhcmVudCBjb250YWluZXIuXG4gKiBAdHlwZWRlZiB7e3Jvb3RMZWZ0OiBudW1iZXIsIHJvb3RSaWdodDogbnVtYmVyLCBjb250ZW50TGVmdDogbnVtYmVyLCBjb250ZW50UmlnaHQ6IG51bWJlcn19XG4gKi9cbmxldCBNRENUYWJEaW1lbnNpb25zO1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUYWIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiICBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiQWRhcHRlciB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRXZlbnRIYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzTmFtZSBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSByb290IGVsZW1lbnQgaGFzIHRoZSBnaXZlbiBjbGFzc05hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgZ2l2ZW4gYXR0ck5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzbyBnaXZlIHRoZSBhdHRyaWJ1dGVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5kaWNhdG9yIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3Q9fSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgVGhlIGNsaWVudCByZWN0IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2YXRlZCBpbmRpY2F0b3JcbiAgICovXG4gIGFjdGl2YXRlSW5kaWNhdG9yKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge31cblxuICAvKiogRGVhY3RpdmF0ZXMgdGhlIGluZGljYXRvci4gKi9cbiAgZGVhY3RpdmF0ZUluZGljYXRvcigpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsaWVudCByZWN0IG9mIHRoZSBpbmRpY2F0b3IuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgTURDVGFiOmludGVyYWN0ZWQgZXZlbnQgZm9yIHVzZSBieSBwYXJlbnQgY29tcG9uZW50c1xuICAgKi9cbiAgbm90aWZ5SW50ZXJhY3RlZCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldExlZnQgdmFsdWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0T2Zmc2V0TGVmdCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldFdpZHRoIHZhbHVlIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0TGVmdCBvZiB0aGUgY29udGVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRDb250ZW50T2Zmc2V0TGVmdCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldFdpZHRoIG9mIHRoZSBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldENvbnRlbnRPZmZzZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgZm9jdXMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgKi9cbiAgZm9jdXMoKSB7fVxufVxuXG5leHBvcnQge01EQ1RhYkRpbWVuc2lvbnMsIE1EQ1RhYkFkYXB0ZXJ9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQUNUSVZFOiAnbWRjLXRhYi0tYWN0aXZlJyxcbiAgQU5JTUFUSU5HX0FDVElWQVRFOiAnbWRjLXRhYi0tYW5pbWF0aW5nLWFjdGl2YXRlJyxcbiAgQU5JTUFUSU5HX0RFQUNUSVZBVEU6ICdtZGMtdGFiLS1hbmltYXRpbmctZGVhY3RpdmF0ZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfU0VMRUNURUQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgUklQUExFX1NFTEVDVE9SOiAnLm1kYy10YWJfX3JpcHBsZScsXG4gIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLXRhYl9fY29udGVudCcsXG4gIFRBQl9JTkRJQ0FUT1JfU0VMRUNUT1I6ICcubWRjLXRhYi1pbmRpY2F0b3InLFxuICBUQUJJTkRFWDogJ3RhYkluZGV4JyxcbiAgSU5URVJBQ1RFRF9FVkVOVDogJ01EQ1RhYjppbnRlcmFjdGVkJyxcbn07XG5cbmV4cG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiQWRhcHRlciwgTURDVGFiRGltZW5zaW9uc30gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuaW1wb3J0IHtcbiAgY3NzQ2xhc3NlcyxcbiAgc3RyaW5ncyxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUYWJBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJBZGFwdGVyIGZvciB0eXBpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7IU1EQ1RhYkFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJBZGFwdGVyfSAqLyAoe1xuICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVJbmRpY2F0b3I6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3Q6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5SW50ZXJhY3RlZDogKCkgPT4ge30sXG4gICAgICBnZXRPZmZzZXRMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGdldENvbnRlbnRPZmZzZXRMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBmb2N1czogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfID0gKGV2dCkgPT4gdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKD9FdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmhhbmRsZUNsaWNrXyA9ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckV2ZW50SGFuZGxlcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgXCJ0cmFuc2l0aW9uZW5kXCIgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dCBBIGJyb3dzZXIgZXZlbnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgLy8gRWFybHkgZXhpdCBmb3IgcmlwcGxlXG4gICAgaWYgKGV2dC5wc2V1ZG9FbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQUNUSVZBVEUpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRJTkdfREVBQ1RJVkFURSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgXCJjbGlja1wiIGV2ZW50XG4gICAqL1xuICBoYW5kbGVDbGljaygpIHtcbiAgICAvLyBJdCdzIHVwIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGtlZXAgdHJhY2sgb2YgdGhlIGFjdGl2ZSBUYWIgYW5kXG4gICAgLy8gZW5zdXJlIHdlIGRvbid0IGFjdGl2YXRlIGEgVGFiIHRoYXQncyBhbHJlYWR5IGFjdGl2ZS5cbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUludGVyYWN0ZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBUYWIncyBhY3RpdmUgc3RhdGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIFRhYlxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqL1xuICBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICAvLyBFYXJseSBleGl0XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQU5JTUFUSU5HX0FDVElWQVRFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAndHJ1ZScpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlRBQklOREVYLCAnMCcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVJbmRpY2F0b3IocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIFRhYlxuICAgKi9cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICAvLyBFYXJseSBleGl0XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkFOSU1BVElOR19ERUFDVElWQVRFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5UQUJJTkRFWCwgJy0xJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlSW5kaWNhdG9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kaWNhdG9yJ3MgY2xpZW50IHJlY3RcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5jb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIFRhYlxuICAgKiBAcmV0dXJuIHshTURDVGFiRGltZW5zaW9uc31cbiAgICovXG4gIGNvbXB1dGVEaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290TGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0TGVmdCgpO1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0Q29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgY29udGVudExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldENvbnRlbnRPZmZzZXRMZWZ0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm9vdExlZnQsXG4gICAgICByb290UmlnaHQ6IHJvb3RMZWZ0ICsgcm9vdFdpZHRoLFxuICAgICAgY29udGVudExlZnQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQsXG4gICAgICBjb250ZW50UmlnaHQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQgKyBjb250ZW50V2lkdGgsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZX0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCc7XG5pbXBvcnQge01EQ1RhYkluZGljYXRvciwgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvaW5kZXgnO1xuaW1wb3J0IHtNRENUYWJBZGFwdGVyLCBNRENUYWJEaW1lbnNpb25zfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5pbXBvcnQgTURDVGFiRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ1RhYkZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYiBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAvKiogQHByaXZhdGUgez9NRENSaXBwbGV9ICovXG4gICAgdGhpcy5yaXBwbGVfO1xuICAgIC8qKiBAcHJpdmF0ZSB7P01EQ1RhYkluZGljYXRvcn0gKi9cbiAgICB0aGlzLnRhYkluZGljYXRvcl87XG4gICAgLyoqIEBwcml2YXRlIHs/RWxlbWVudH0gKi9cbiAgICB0aGlzLmNvbnRlbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ1RhYn1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENUYWIocm9vdCk7XG4gIH1cblxuICBpbml0aWFsaXplKFxuICAgIHJpcHBsZUZhY3RvcnkgPSAoZWwsIGZvdW5kYXRpb24pID0+IG5ldyBNRENSaXBwbGUoZWwsIGZvdW5kYXRpb24pLFxuICAgIHRhYkluZGljYXRvckZhY3RvcnkgPSAoZWwpID0+IG5ldyBNRENUYWJJbmRpY2F0b3IoZWwpKSB7XG4gICAgY29uc3QgcmlwcGxlU3VyZmFjZSA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuUklQUExFX1NFTEVDVE9SKTtcbiAgICBjb25zdCByaXBwbGVBZGFwdGVyID0gT2JqZWN0LmFzc2lnbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcigvKiogQHR5cGUgeyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gKi8gKHRoaXMpKSwge1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHJpcHBsZVN1cmZhY2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHJpcHBsZVN1cmZhY2UuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gcmlwcGxlU3VyZmFjZS5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgfSk7XG4gICAgY29uc3QgcmlwcGxlRm91bmRhdGlvbiA9IG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKHJpcHBsZUFkYXB0ZXIpO1xuICAgIHRoaXMucmlwcGxlXyA9IHJpcHBsZUZhY3RvcnkodGhpcy5yb290XywgcmlwcGxlRm91bmRhdGlvbik7XG5cbiAgICBjb25zdCB0YWJJbmRpY2F0b3JFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKE1EQ1RhYkZvdW5kYXRpb24uc3RyaW5ncy5UQUJfSU5ESUNBVE9SX1NFTEVDVE9SKTtcbiAgICB0aGlzLnRhYkluZGljYXRvcl8gPSB0YWJJbmRpY2F0b3JGYWN0b3J5KHRhYkluZGljYXRvckVsZW1lbnQpO1xuXG4gICAgdGhpcy5jb250ZW50XyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUik7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlXy5kZXN0cm95KCk7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENUYWJGb3VuZGF0aW9uKFxuICAgICAgLyoqIEB0eXBlIHshTURDVGFiQWRhcHRlcn0gKi8gKHtcbiAgICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PiB0aGlzLnJvb3RfLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSksXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiAocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSA9PiB0aGlzLnRhYkluZGljYXRvcl8uYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSxcbiAgICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4gdGhpcy50YWJJbmRpY2F0b3JfLmRlYWN0aXZhdGUoKSxcbiAgICAgICAgY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3Q6ICgpID0+IHRoaXMudGFiSW5kaWNhdG9yXy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKSxcbiAgICAgICAgbm90aWZ5SW50ZXJhY3RlZDogKCkgPT4gdGhpcy5lbWl0KE1EQ1RhYkZvdW5kYXRpb24uc3RyaW5ncy5JTlRFUkFDVEVEX0VWRU5ULCB7dGFiOiB0aGlzfSwgdHJ1ZSAvKiBidWJibGUgKi8pLFxuICAgICAgICBnZXRPZmZzZXRMZWZ0OiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldExlZnQsXG4gICAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldFdpZHRoLFxuICAgICAgICBnZXRDb250ZW50T2Zmc2V0TGVmdDogKCkgPT4gdGhpcy5jb250ZW50Xy5vZmZzZXRMZWZ0LFxuICAgICAgICBnZXRDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuY29udGVudF8ub2Zmc2V0V2lkdGgsXG4gICAgICAgIGZvY3VzOiAoKSA9PiB0aGlzLnJvb3RfLmZvY3VzKCksXG4gICAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSB0YWJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNBY3RpdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYlxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3RcbiAgICovXG4gIGFjdGl2YXRlKGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZShjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIHRhYlxuICAgKi9cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRpY2F0b3IncyBjbGllbnQgcmVjdFxuICAgKiBAcmV0dXJuIHshQ2xpZW50UmVjdH1cbiAgICovXG4gIGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYkRpbWVuc2lvbnN9XG4gICAqL1xuICBjb21wdXRlRGltZW5zaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5jb21wdXRlRGltZW5zaW9ucygpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGFiLCBNRENUYWJGb3VuZGF0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gICogQGxpY2Vuc2VcbiAgKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAqXG4gICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgKlxuICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICpcbiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUYWIgSW5kaWNhdG9yLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRhYiBJbmRpY2F0b3IgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RhYkluZGljYXRvckFkYXB0ZXIge1xuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckV2ZW50SGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgcm9vdCBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBjbGFzc05hbWUgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjbGFzc05hbWUgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsaWVudCByZWN0IG9mIHRoZSBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBjb250ZW50IGVsZW1lbnQgdG8gdGhlIHBhc3NlZCB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWUgVGhlIHN0eWxlIHByb3BlcnR5IG5hbWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3R5bGUgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIHNldENvbnRlbnRTdHlsZVByb3BlcnR5KHByb3BOYW1lLCB2YWx1ZSkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiSW5kaWNhdG9yQWRhcHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gICogQGxpY2Vuc2VcbiAgKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAqXG4gICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgKlxuICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICpcbiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQUNUSVZFOiAnbWRjLXRhYi1pbmRpY2F0b3ItLWFjdGl2ZScsXG4gIEZBREU6ICdtZGMtdGFiLWluZGljYXRvci0tZmFkZScsXG4gIEZBRElOR19BQ1RJVkFURTogJ21kYy10YWItaW5kaWNhdG9yLS1mYWRpbmctYWN0aXZhdGUnLFxuICBGQURJTkdfREVBQ1RJVkFURTogJ21kYy10YWItaW5kaWNhdG9yLS1mYWRpbmctZGVhY3RpdmF0ZScsXG4gIFNMSURJTkdfQUNUSVZBVEU6ICdtZGMtdGFiLWluZGljYXRvci0tc2xpZGluZy1hY3RpdmF0ZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQnLFxufTtcblxuZXhwb3J0IHtcbiAgY3NzQ2xhc3NlcyxcbiAgc3RyaW5ncyxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGV4dGVuZHMgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbig/RXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyA9ICgpID0+IHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCgpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdGhlIHRyYW5zaXRpb25lbmQgZXZlbnQgKi9cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GQURJTkdfQUNUSVZBVEUpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZBRElOR19ERUFDVElWQVRFKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GQURJTkdfQUNUSVZBVEUpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GQURJTkdfREVBQ1RJVkFURSk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvZmFkaW5nLWZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZhZGluZy1mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUYWJJbmRpY2F0b3JBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RhYkluZGljYXRvckFkYXB0ZXI+fVxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIE1EQ1RhYkluZGljYXRvckFkYXB0ZXIgZm9yIHR5cGluZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYkluZGljYXRvckFkYXB0ZXJ9ICovICh7XG4gICAgICByZWdpc3RlckV2ZW50SGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluZGljYXRvclxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgLyoqIEBhYnN0cmFjdCAqL1xuICBkZWFjdGl2YXRlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gICogQGxpY2Vuc2VcbiAgKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAqXG4gICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgKlxuICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICpcbiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcblxuaW1wb3J0IE1EQ1RhYkluZGljYXRvckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbmltcG9ydCBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBmcm9tICcuL3NsaWRpbmctZm91bmRhdGlvbic7XG5pbXBvcnQgTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBmcm9tICcuL2ZhZGluZy1mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJJbmRpY2F0b3IgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDVGFiSW5kaWNhdG9yfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1RhYkluZGljYXRvcihyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAvKiogQHR5cGUgez9FbGVtZW50fSAqL1xuICAgIHRoaXMuY29udGVudF87XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuY29udGVudF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IC8qKiBAdHlwZSB7IU1EQ1RhYkluZGljYXRvckFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT4gdGhpcy5jb250ZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHNldENvbnRlbnRTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+IHRoaXMuY29udGVudF8uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUpLFxuICAgIH0pKTtcblxuICAgIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkFERSkpIHtcbiAgICAgIHJldHVybiBuZXcgTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHRoZSBzbGlkaW5nIGluZGljYXRvclxuICAgIHJldHVybiBuZXcgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24oYWRhcHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQ2xpZW50UmVjdD19IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdFxuICAgKi9cbiAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxufVxuXG5leHBvcnQge01EQ1RhYkluZGljYXRvciwgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24sIE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb259O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9ufVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGV4dGVuZHMgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbig/RXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyA9ICgpID0+IHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZCgpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdGhlIHRyYW5zaXRpb25lbmQgZXZlbnQgKi9cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5TTElESU5HX0FDVElWQVRFKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0ICovXG4gIGFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG5cbiAgICAvLyBFYXJseSBleGl0IGlmIG5vIGluZGljYXRvciBpcyBwcmVzZW50IHRvIGhhbmRsZSBjYXNlcyB3aGVyZSBhbiBpbmRpY2F0b3JcbiAgICAvLyBtYXkgYmUgYWN0aXZhdGVkIHdpdGhvdXQgYSBwcmlvciBpbmRpY2F0b3Igc3RhdGVcbiAgICBpZiAoIXByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGl0IGF0IHRoZSBsaW5rIGJlbG93OlxuICAgIC8vIGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaW1lbnNpb25zIGJhc2VkIG9uIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBwcmV2aW91cyBpbmRpY2F0b3JcbiAgICBjb25zdCBjdXJyZW50Q2xpZW50UmVjdCA9IHRoaXMuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2lkdGhEZWx0YSA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC53aWR0aCAvIGN1cnJlbnRDbGllbnRSZWN0LndpZHRoO1xuICAgIGNvbnN0IHhQb3NpdGlvbiA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC5sZWZ0IC0gY3VycmVudENsaWVudFJlY3QubGVmdDtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke3hQb3NpdGlvbn1weCkgc2NhbGVYKCR7d2lkdGhEZWx0YX0pYCk7XG5cbiAgICAvLyBGb3JjZSByZXBhaW50XG4gICAgdGhpcy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcblxuICAgIC8vIEFkZCBhbmltYXRpbmcgY2xhc3MgYW5kIHJlbW92ZSB0cmFuc2Zvcm1hdGlvbiBpbiBhIG5ldyBmcmFtZVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5TTElESU5HX0FDVElWQVRFKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsICcnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICAvLyBXZSByZW1vdmUgdGhlIGFuaW1hdGluZyBjbGFzcyBpbiBkZWFjdGl2YXRlIGluIGNhc2UgdGhlIFRhYiBpcyBkZWFjdGl2YXRlZCBiZWZvcmUgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMgYW5kXG4gICAgLy8gdGhlIFwidHJhbnNpdGlvbmVuZFwiIGhhbmRsZXIgaXNuJ3QgY2FsbGVkLlxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLlNMSURJTkdfQUNUSVZBVEUpO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3Ivc2xpZGluZy1mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9zbGlkaW5nLWZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gZnJvbSAnLi9oZWxwZXItdGV4dC9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiBmcm9tICcuL2ljb24vZm91bmRhdGlvbic7XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHZhbHVlOiBzdHJpbmcsXG4gKiAgIGRpc2FibGVkOiBib29sZWFuLFxuICogICBiYWRJbnB1dDogYm9vbGVhbixcbiAqICAgdmFsaWRpdHk6IHtcbiAqICAgICBiYWRJbnB1dDogYm9vbGVhbixcbiAqICAgICB2YWxpZDogYm9vbGVhbixcbiAqICAgfSxcbiAqIH19XG4gKi9cbmxldCBOYXRpdmVJbnB1dFR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaGVscGVyVGV4dDogKCFNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbnx1bmRlZmluZWQpLFxuICogICBpY29uOiAoIU1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9ufHVuZGVmaW5lZCksXG4gKiB9fVxuICovXG5sZXQgRm91bmRhdGlvbk1hcFR5cGU7XG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHQgRmllbGQuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGV4dCBGaWVsZCBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIHJvb3QgRWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgcm9vdCBFbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGNvbnRhaW5zIHRoZSBnaXZlbiBjbGFzcyBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSB2YWxpZGF0aW9uIGF0dHJpYnV0ZSBjaGFuZ2UgbGlzdGVuZXIgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEhhbmRsZXIgYWNjZXB0cyBsaXN0IG9mIGF0dHJpYnV0ZSBuYW1lcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbighQXJyYXk8c3RyaW5nPik6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKiBAcmV0dXJuIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICovXG4gIHJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGlzY29ubmVjdHMgYSB2YWxpZGF0aW9uIGF0dHJpYnV0ZSBvYnNlcnZlciBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gb2JzZXJ2ZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcihvYnNlcnZlcikge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuYXRpdmUgdGV4dCBpbnB1dCBlbGVtZW50LCB3aXRoIGFcbiAgICogc2ltaWxhciBBUEkgc2hhcGUuIFRoZSBvYmplY3QgcmV0dXJuZWQgc2hvdWxkIGluY2x1ZGUgdGhlIHZhbHVlLCBkaXNhYmxlZFxuICAgKiBhbmQgYmFkSW5wdXQgcHJvcGVydGllcywgYXMgd2VsbCBhcyB0aGUgY2hlY2tWYWxpZGl0eSgpIGZ1bmN0aW9uLiBXZSBuZXZlclxuICAgKiBhbHRlciB0aGUgdmFsdWUgd2l0aGluIG91ciBjb2RlLCBob3dldmVyIHdlIGRvIHVwZGF0ZSB0aGUgZGlzYWJsZWRcbiAgICogcHJvcGVydHksIHNvIGlmIHlvdSBjaG9vc2UgdG8gZHVjay10eXBlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHRoaXMgbWV0aG9kXG4gICAqIGluIHlvdXIgaW1wbGVtZW50YXRpb24gaXQncyBpbXBvcnRhbnQgdG8ga2VlcCB0aGlzIGluIG1pbmQuIEFsc28gbm90ZSB0aGF0XG4gICAqIHRoaXMgbWV0aG9kIGNhbiByZXR1cm4gbnVsbCwgd2hpY2ggdGhlIGZvdW5kYXRpb24gd2lsbCBoYW5kbGUgZ3JhY2VmdWxseS5cbiAgICogQHJldHVybiB7P0VsZW1lbnR8P05hdGl2ZUlucHV0VHlwZX1cbiAgICovXG4gIGdldE5hdGl2ZUlucHV0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0ZXh0ZmllbGQgaXMgZm9jdXNlZC5cbiAgICogV2UgYWNoaWV2ZSB0aGlzIHZpYSBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5yb290X2AuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZvY3VzZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGRpcmVjdGlvbiBvZiB0aGUgcm9vdCBlbGVtZW50IGlzIHNldCB0byBSVEwuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1J0bCgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGUuXG4gICAqL1xuICBhY3RpdmF0ZUxpbmVSaXBwbGUoKSB7fVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGUuXG4gICAqL1xuICBkZWFjdGl2YXRlTGluZVJpcHBsZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRyYW5zZm9ybSBvcmlnaW4gb2YgdGhlIGxpbmUgcmlwcGxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbm9ybWFsaXplZFhcbiAgICovXG4gIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW4obm9ybWFsaXplZFgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogU2hha2VzIGxhYmVsIGlmIHNob3VsZFNoYWtlIGlzIHRydWUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkU2hha2VcbiAgICovXG4gIHNoYWtlTGFiZWwoc2hvdWxkU2hha2UpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogRmxvYXRzIHRoZSBsYWJlbCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudCBpZiBzaG91bGRGbG9hdCBpcyB0cnVlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZEZsb2F0XG4gICAqL1xuICBmbG9hdExhYmVsKHNob3VsZEZsb2F0KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgbGFiZWwgZWxlbWVudCBleGlzdHMsIGZhbHNlIGlmIGl0IGRvZXNuJ3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNMYWJlbCgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogUmV0dXJucyB3aWR0aCBvZiBsYWJlbCBpbiBwaXhlbHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldExhYmVsV2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgb3V0bGluZSBlbGVtZW50IGV4aXN0cywgZmFsc2UgaWYgaXQgZG9lc24ndC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc091dGxpbmUoKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBvdXRsaW5lIGVsZW1lbnQgZXhpc3RzLlxuICAgKiBVcGRhdGVzIFNWRyBQYXRoIGFuZCBvdXRsaW5lIGVsZW1lbnQgYmFzZWQgb24gdGhlXG4gICAqIGxhYmVsIGVsZW1lbnQgd2lkdGggYW5kIFJUTCBjb250ZXh0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGFiZWxXaWR0aFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBpc1J0bFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgsIGlzUnRsKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBvdXRsaW5lIGVsZW1lbnQgZXhpc3RzLlxuICAgKiBDbG9zZXMgbm90Y2ggaW4gb3V0bGluZSBlbGVtZW50LlxuICAgKi9cbiAgY2xvc2VPdXRsaW5lKCkge31cbn1cblxuZXhwb3J0IHtNRENUZXh0RmllbGRBZGFwdGVyLCBOYXRpdmVJbnB1dFR5cGUsIEZvdW5kYXRpb25NYXBUeXBlfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvYWRhcHRlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfQ09OVFJPTFM6ICdhcmlhLWNvbnRyb2xzJyxcbiAgSU5QVVRfU0VMRUNUT1I6ICcubWRjLXRleHQtZmllbGRfX2lucHV0JyxcbiAgTEFCRUxfU0VMRUNUT1I6ICcubWRjLWZsb2F0aW5nLWxhYmVsJyxcbiAgSUNPTl9TRUxFQ1RPUjogJy5tZGMtdGV4dC1maWVsZF9faWNvbicsXG4gIE9VVExJTkVfU0VMRUNUT1I6ICcubWRjLW5vdGNoZWQtb3V0bGluZScsXG4gIExJTkVfUklQUExFX1NFTEVDVE9SOiAnLm1kYy1saW5lLXJpcHBsZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtdGV4dC1maWVsZCcsXG4gIFVQR1JBREVEOiAnbWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkJyxcbiAgRElTQUJMRUQ6ICdtZGMtdGV4dC1maWVsZC0tZGlzYWJsZWQnLFxuICBERU5TRTogJ21kYy10ZXh0LWZpZWxkLS1kZW5zZScsXG4gIEZPQ1VTRUQ6ICdtZGMtdGV4dC1maWVsZC0tZm9jdXNlZCcsXG4gIElOVkFMSUQ6ICdtZGMtdGV4dC1maWVsZC0taW52YWxpZCcsXG4gIEJPWDogJ21kYy10ZXh0LWZpZWxkLS1ib3gnLFxuICBPVVRMSU5FRDogJ21kYy10ZXh0LWZpZWxkLS1vdXRsaW5lZCcsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIExBQkVMX1NDQUxFOiAwLjc1LFxuICBERU5TRV9MQUJFTF9TQ0FMRTogMC45MjMsXG59O1xuXG4vLyB3aGl0ZWxpc3QgYmFzZWQgb2ZmIG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0hUTUwvSFRNTDUvQ29uc3RyYWludF92YWxpZGF0aW9uXG4vLyB1bmRlciBzZWN0aW9uOiBgVmFsaWRhdGlvbi1yZWxhdGVkIGF0dHJpYnV0ZXNgXG5jb25zdCBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNUID0gW1xuICAncGF0dGVybicsICdtaW4nLCAnbWF4JywgJ3JlcXVpcmVkJywgJ3N0ZXAnLCAnbWlubGVuZ3RoJywgJ21heGxlbmd0aCcsXG5dO1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIFZBTElEQVRJT05fQVRUUl9XSElURUxJU1R9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gZnJvbSAnLi9oZWxwZXItdGV4dC9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiBmcm9tICcuL2ljb24vZm91bmRhdGlvbic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RleHRGaWVsZEFkYXB0ZXIsIE5hdGl2ZUlucHV0VHlwZSwgRm91bmRhdGlvbk1hcFR5cGV9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIFZBTElEQVRJT05fQVRUUl9XSElURUxJU1R9IGZyb20gJy4vY29uc3RhbnRzJztcblxuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUZXh0RmllbGRBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgc2hvdWxkU2hha2UoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzVmFsaWQoKSAmJiAhdGhpcy5pc0ZvY3VzZWRfO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCBzaG91bGRGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ZvY3VzZWRfIHx8ICEhdGhpcy5nZXRWYWx1ZSgpIHx8IHRoaXMuaXNCYWRJbnB1dF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENUZXh0RmllbGRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ1RleHRGaWVsZEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICByZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICByZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBnZXROYXRpdmVJbnB1dDogKCkgPT4ge30sXG4gICAgICBpc0ZvY3VzZWQ6ICgpID0+IHt9LFxuICAgICAgaXNSdGw6ICgpID0+IHt9LFxuICAgICAgYWN0aXZhdGVMaW5lUmlwcGxlOiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVMaW5lUmlwcGxlOiAoKSA9PiB7fSxcbiAgICAgIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW46ICgpID0+IHt9LFxuICAgICAgc2hha2VMYWJlbDogKCkgPT4ge30sXG4gICAgICBmbG9hdExhYmVsOiAoKSA9PiB7fSxcbiAgICAgIGhhc0xhYmVsOiAoKSA9PiB7fSxcbiAgICAgIGdldExhYmVsV2lkdGg6ICgpID0+IHt9LFxuICAgICAgaGFzT3V0bGluZTogKCkgPT4ge30sXG4gICAgICBub3RjaE91dGxpbmU6ICgpID0+IHt9LFxuICAgICAgY2xvc2VPdXRsaW5lOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENUZXh0RmllbGRBZGFwdGVyfSBhZGFwdGVyXG4gICAqIEBwYXJhbSB7IUZvdW5kYXRpb25NYXBUeXBlPX0gZm91bmRhdGlvbk1hcCBNYXAgZnJvbSBzdWJjb21wb25lbnQgbmFtZXMgdG8gdGhlaXIgc3ViZm91bmRhdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyLCBmb3VuZGF0aW9uTWFwID0gLyoqIEB0eXBlIHshRm91bmRhdGlvbk1hcFR5cGV9ICovICh7fSkpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9ufHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmhlbHBlclRleHRfID0gZm91bmRhdGlvbk1hcC5oZWxwZXJUZXh0O1xuICAgIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9ufHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmljb25fID0gZm91bmRhdGlvbk1hcC5pY29uO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNGb2N1c2VkXyA9IGZhbHNlO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IGZhbHNlO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVzZUN1c3RvbVZhbGlkaXR5Q2hlY2tpbmdfID0gZmFsc2U7XG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNWYWxpZF8gPSB0cnVlO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oKTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5hY3RpdmF0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbigpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnB1dEJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbigpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnB1dElucHV0SGFuZGxlcl8gPSAoKSA9PiB0aGlzLmF1dG9Db21wbGV0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5zZXRQb2ludGVyWE9mZnNldF8gPSAoZXZ0KSA9PiB0aGlzLnNldFRyYW5zZm9ybU9yaWdpbihldnQpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMudGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24oKTtcbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFBcnJheSk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyXyA9IChhdHRyaWJ1dGVzTGlzdCkgPT4gdGhpcy5oYW5kbGVWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlKGF0dHJpYnV0ZXNMaXN0KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy52YWxpZGF0aW9uT2JzZXJ2ZXJfO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VUEdSQURFRCk7XG4gICAgLy8gRW5zdXJlIGxhYmVsIGRvZXMgbm90IGNvbGxpZGUgd2l0aCBhbnkgcHJlLWZpbGxlZCB2YWx1ZS5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpICYmICh0aGlzLmdldFZhbHVlKCkgfHwgdGhpcy5pc0JhZElucHV0XygpKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNGb2N1c2VkKCkpIHtcbiAgICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmlucHV0Qmx1ckhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2lucHV0JywgdGhpcy5pbnB1dElucHV0SGFuZGxlcl8pO1xuICAgIFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5zZXRQb2ludGVyWE9mZnNldF8pO1xuICAgIH0pO1xuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy50ZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLnZhbGlkYXRpb25PYnNlcnZlcl8gPVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIodGhpcy52YWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VUEdSQURFRCk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5pbnB1dEJsdXJIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2lucHV0JywgdGhpcy5pbnB1dElucHV0SGFuZGxlcl8pO1xuICAgIFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLnNldFBvaW50ZXJYT2Zmc2V0Xyk7XG4gICAgfSk7XG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMudGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIodGhpcy52YWxpZGF0aW9uT2JzZXJ2ZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHVzZXIgaW50ZXJhY3Rpb25zIHdpdGggdGhlIFRleHQgRmllbGQuXG4gICAqL1xuICBoYW5kbGVUZXh0RmllbGRJbnRlcmFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5nZXROYXRpdmVJbnB1dCgpLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVjZWl2ZWRVc2VySW5wdXRfID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHZhbGlkYXRpb24gYXR0cmlidXRlIGNoYW5nZXNcbiAgICogQHBhcmFtIHshQXJyYXk8c3RyaW5nPn0gYXR0cmlidXRlc0xpc3RcbiAgICovXG4gIGhhbmRsZVZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2UoYXR0cmlidXRlc0xpc3QpIHtcbiAgICBhdHRyaWJ1dGVzTGlzdC5zb21lKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG4gICAgICBpZiAoVkFMSURBVElPTl9BVFRSX1dISVRFTElTVC5pbmRleE9mKGF0dHJpYnV0ZU5hbWUpID4gLTEpIHtcbiAgICAgICAgdGhpcy5zdHlsZVZhbGlkaXR5Xyh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMvY2xvc2VzIHRoZSBub3RjaGVkIG91dGxpbmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3Blbk5vdGNoXG4gICAqL1xuICBub3RjaE91dGxpbmUob3Blbk5vdGNoKSB7XG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc091dGxpbmUoKSB8fCAhdGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wZW5Ob3RjaCkge1xuICAgICAgY29uc3QgaXNEZW5zZSA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5ERU5TRSk7XG4gICAgICBjb25zdCBsYWJlbFNjYWxlID0gaXNEZW5zZSA/IG51bWJlcnMuREVOU0VfTEFCRUxfU0NBTEUgOiBudW1iZXJzLkxBQkVMX1NDQUxFO1xuICAgICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGFiZWxXaWR0aCgpICogbGFiZWxTY2FsZTtcbiAgICAgIGNvbnN0IGlzUnRsID0gdGhpcy5hZGFwdGVyXy5pc1J0bCgpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RjaE91dGxpbmUobGFiZWxXaWR0aCwgaXNSdGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlT3V0bGluZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRleHQgZmllbGQgZm9jdXMgc3RhdGUuXG4gICAqL1xuICBhY3RpdmF0ZUZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkXyA9IHRydWU7XG4gICAgdGhpcy5zdHlsZUZvY3VzZWRfKHRoaXMuaXNGb2N1c2VkXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZUxpbmVSaXBwbGUoKTtcbiAgICB0aGlzLm5vdGNoT3V0bGluZSh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwodGhpcy5zaG91bGRTaGFrZSk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICB0aGlzLmhlbHBlclRleHRfLnNob3dUb1NjcmVlblJlYWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBsaW5lIHJpcHBsZSdzIHRyYW5zZm9ybSBvcmlnaW4sIHNvIHRoYXQgdGhlIGxpbmUgcmlwcGxlIGFjdGl2YXRlXG4gICAqIGFuaW1hdGlvbiB3aWxsIGFuaW1hdGUgb3V0IGZyb20gdGhlIHVzZXIncyBjbGljayBsb2NhdGlvbi5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgc2V0VHJhbnNmb3JtT3JpZ2luKGV2dCkge1xuICAgIGNvbnN0IHRhcmdldENsaWVudFJlY3QgPSBldnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGV2dENvb3JkcyA9IHt4OiBldnQuY2xpZW50WCwgeTogZXZ0LmNsaWVudFl9O1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRYID0gZXZ0Q29vcmRzLnggLSB0YXJnZXRDbGllbnRSZWN0LmxlZnQ7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luKG5vcm1hbGl6ZWRYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIFRleHQgRmllbGQncyBmb2N1cyBzdGF0ZSBpbiBjYXNlcyB3aGVuIHRoZSBpbnB1dCB2YWx1ZVxuICAgKiBjaGFuZ2VzIHdpdGhvdXQgdXNlciBpbnB1dCAoZS5nLiBwcm9ncmFtYXRpY2FsbHkpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLnJlY2VpdmVkVXNlcklucHV0Xykge1xuICAgICAgdGhpcy5hY3RpdmF0ZUZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBUZXh0IEZpZWxkJ3MgZm9jdXMgc3RhdGUuXG4gICAqL1xuICBkZWFjdGl2YXRlRm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3VzZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlTGluZVJpcHBsZSgpO1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5nZXROYXRpdmVJbnB1dF8oKTtcbiAgICBjb25zdCBzaG91bGRSZW1vdmVMYWJlbEZsb2F0ID0gIWlucHV0LnZhbHVlICYmICF0aGlzLmlzQmFkSW5wdXRfKCk7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuaXNWYWxpZCgpO1xuICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCk7XG4gICAgdGhpcy5zdHlsZUZvY3VzZWRfKHRoaXMuaXNGb2N1c2VkXyk7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgfVxuICAgIGlmIChzaG91bGRSZW1vdmVMYWJlbEZsb2F0KSB7XG4gICAgICB0aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgRWxlbWVudC5cbiAgICovXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbnB1dCBFbGVtZW50LlxuICAgKi9cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbHVlID0gdmFsdWU7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuaXNWYWxpZCgpO1xuICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCk7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IElmIGEgY3VzdG9tIHZhbGlkaXR5IGlzIHNldCwgcmV0dXJucyB0aGF0IHZhbHVlLlxuICAgKiAgICAgT3RoZXJ3aXNlLCByZXR1cm5zIHRoZSByZXN1bHQgb2YgbmF0aXZlIHZhbGlkaXR5IGNoZWNrcy5cbiAgICovXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlQ3VzdG9tVmFsaWRpdHlDaGVja2luZ19cbiAgICAgID8gdGhpcy5pc1ZhbGlkXyA6IHRoaXMuaXNOYXRpdmVJbnB1dFZhbGlkXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZCBTZXRzIHRoZSB2YWxpZGl0eSBzdGF0ZSBvZiB0aGUgVGV4dCBGaWVsZC5cbiAgICovXG4gIHNldFZhbGlkKGlzVmFsaWQpIHtcbiAgICB0aGlzLnVzZUN1c3RvbVZhbGlkaXR5Q2hlY2tpbmdfID0gdHJ1ZTtcbiAgICB0aGlzLmlzVmFsaWRfID0gaXNWYWxpZDtcbiAgICAvLyBSZXRyaWV2ZSBmcm9tIHRoZSBnZXR0ZXIgdG8gZW5zdXJlIGNvcnJlY3QgbG9naWMgaXMgYXBwbGllZC5cbiAgICBpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkKCk7XG4gICAgdGhpcy5zdHlsZVZhbGlkaXR5Xyhpc1ZhbGlkKTtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwodGhpcy5zaG91bGRTaGFrZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIFRleHQgRmllbGQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgU2V0cyB0aGUgdGV4dC1maWVsZCBkaXNhYmxlZCBvciBlbmFibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmdldE5hdGl2ZUlucHV0XygpLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5zdHlsZURpc2FibGVkXyhkaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQuXG4gICAqL1xuICBzZXRIZWxwZXJUZXh0Q29udGVudChjb250ZW50KSB7XG4gICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYXJpYSBsYWJlbCBvZiB0aGUgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG4gICAqL1xuICBzZXRJY29uQXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKHRoaXMuaWNvbl8pIHtcbiAgICAgIHRoaXMuaWNvbl8uc2V0QXJpYUxhYmVsKGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBpY29uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0SWNvbkNvbnRlbnQoY29udGVudCkge1xuICAgIGlmICh0aGlzLmljb25fKSB7XG4gICAgICB0aGlzLmljb25fLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIFRleHQgRmllbGQgaW5wdXQgZmFpbHMgaW4gY29udmVydGluZyB0aGVcbiAgICogICAgIHVzZXItc3VwcGxpZWQgdmFsdWUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0JhZElucHV0XygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS52YWxpZGl0eS5iYWRJbnB1dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUaGUgcmVzdWx0IG9mIG5hdGl2ZSB2YWxpZGl0eSBjaGVja2luZ1xuICAgKiAgICAgKFZhbGlkaXR5U3RhdGUudmFsaWQpLlxuICAgKi9cbiAgaXNOYXRpdmVJbnB1dFZhbGlkXygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVJbnB1dF8oKS52YWxpZGl0eS52YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdHlsZXMgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgdmFsaWRpdHkgc3RhdGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCkge1xuICAgIGNvbnN0IHtJTlZBTElEfSA9IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhJTlZBTElEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhJTlZBTElEKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2V0VmFsaWRpdHkoaXNWYWxpZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBmb2N1c2VkIHN0YXRlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRm9jdXNlZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3R5bGVGb2N1c2VkXyhpc0ZvY3VzZWQpIHtcbiAgICBjb25zdCB7Rk9DVVNFRH0gPSBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKGlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGT0NVU0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGT0NVU0VEKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGRpc2FibGVkIHN0YXRlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGlzYWJsZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0eWxlRGlzYWJsZWRfKGlzRGlzYWJsZWQpIHtcbiAgICBjb25zdCB7RElTQUJMRUQsIElOVkFMSUR9ID0gTURDVGV4dEZpZWxkRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKERJU0FCTEVEKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoSU5WQUxJRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRElTQUJMRUQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pY29uXykge1xuICAgICAgdGhpcy5pY29uXy5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUVsZW1lbnR8IU5hdGl2ZUlucHV0VHlwZX0gVGhlIG5hdGl2ZSB0ZXh0IGlucHV0IGZyb20gdGhlXG4gICAqIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZHVtbXkgaWYgbm9uZSBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROYXRpdmVJbnB1dF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlSW5wdXQoKSB8fFxuICAgIC8qKiBAdHlwZSB7IU5hdGl2ZUlucHV0VHlwZX0gKi8gKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIHZhbGlkaXR5OiB7XG4gICAgICAgIGJhZElucHV0OiBmYWxzZSxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEZvdW5kYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHQgRmllbGQgSGVscGVyIFRleHQuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGV4dEZpZWxkIGhlbHBlciB0ZXh0IGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgaGVscGVyIHRleHQgZWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyBhbiBhdHRyaWJ1dGUgd2l0aCBhIGdpdmVuIHZhbHVlIG9uIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqL1xuICByZW1vdmVBdHRyKGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBmb3IgdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9ISURERU46ICdhcmlhLWhpZGRlbicsXG4gIFJPTEU6ICdyb2xlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgSEVMUEVSX1RFWFRfUEVSU0lTVEVOVDogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50JyxcbiAgSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0c6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tdmFsaWRhdGlvbi1tc2cnLFxufTtcblxuZXhwb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0Q29udGVudDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBpc1BlcnNpc3RlbnQgU2V0cyB0aGUgcGVyc2lzdGVuY3kgb2YgdGhlIGhlbHBlciB0ZXh0LiAqL1xuICBzZXRQZXJzaXN0ZW50KGlzUGVyc2lzdGVudCkge1xuICAgIGlmIChpc1BlcnNpc3RlbnQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRhdGlvbiBUcnVlIHRvIG1ha2UgdGhlIGhlbHBlciB0ZXh0IGFjdCBhcyBhblxuICAgKiAgIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICovXG4gIHNldFZhbGlkYXRpb24oaXNWYWxpZGF0aW9uKSB7XG4gICAgaWYgKGlzVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgdGhlIGhlbHBlciB0ZXh0IHZpc2libGUgdG8gdGhlIHNjcmVlbiByZWFkZXIuICovXG4gIHNob3dUb1NjcmVlblJlYWRlcigpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5BUklBX0hJRERFTik7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsaWRpdHkgb2YgdGhlIGhlbHBlciB0ZXh0IGJhc2VkIG9uIHRoZSBpbnB1dCB2YWxpZGl0eS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpbnB1dElzVmFsaWRcbiAgICovXG4gIHNldFZhbGlkaXR5KGlucHV0SXNWYWxpZCkge1xuICAgIGNvbnN0IGhlbHBlclRleHRJc1BlcnNpc3RlbnQgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgY29uc3QgaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgY29uc3QgdmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSA9IGhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2cgJiYgIWlucHV0SXNWYWxpZDtcblxuICAgIGlmICh2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5ST0xFLCAnYWxlcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKHN0cmluZ3MuUk9MRSk7XG4gICAgfVxuXG4gICAgaWYgKCFoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ICYmICF2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICB0aGlzLmhpZGVfKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBoZWxwIHRleHQgZnJvbSBzY3JlZW4gcmVhZGVycy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhpZGVfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLkFSSUFfSElEREVOLCAndHJ1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcblxuaW1wb3J0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkSGVscGVyVGV4dCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRIZWxwZXJUZXh0fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHQocm9vdCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0IGZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl87XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbigvKiogQHR5cGUgeyFNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcn0gKi8gKE9iamVjdC5hc3NpZ24oe1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+IHRoaXMucm9vdF8uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcbiAgICAgIHJlbW92ZUF0dHI6IChhdHRyKSA9PiB0aGlzLnJvb3RfLnJlbW92ZUF0dHJpYnV0ZShhdHRyKSxcbiAgICAgIHNldENvbnRlbnQ6IChjb250ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucm9vdF8udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgfSxcbiAgICB9KSkpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGV4dEZpZWxkSGVscGVyVGV4dCwgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb259O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHQgRmllbGQgSWNvbi5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSB0ZXh0IGZpZWxkIGljb24gaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEljb25BZGFwdGVyIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZSBvbiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRBdHRyKGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIG9uIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0QXR0cihhdHRyLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBhdHRyaWJ1dGUgZnJvbSB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKi9cbiAgcmVtb3ZlQXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldENvbnRlbnQoY29udGVudCkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBpY29uIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgaWNvbiBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBcIk1EQ1RleHRGaWVsZDppY29uXCIgZGVub3RpbmcgYSB1c2VyIGhhcyBjbGlja2VkIHRoZSBpY29uLlxuICAgKi9cbiAgbm90aWZ5SWNvbkFjdGlvbigpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEljb25BZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIElDT05fRVZFTlQ6ICdNRENUZXh0RmllbGQ6aWNvbicsXG4gIElDT05fUk9MRTogJ2J1dHRvbicsXG59O1xuXG5leHBvcnQge3N0cmluZ3N9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7c3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRJY29uQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyfSAqLyAoe1xuICAgICAgZ2V0QXR0cjogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0Q29udGVudDogKCkgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUljb25BY3Rpb246ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtzdHJpbmc/fSAqL1xuICAgIHRoaXMuc2F2ZWRUYWJJbmRleF8gPSBudWxsO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfID0gKGV2dCkgPT4gdGhpcy5oYW5kbGVJbnRlcmFjdGlvbihldnQpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gdGhpcy5hZGFwdGVyXy5nZXRBdHRyKCd0YWJpbmRleCcpO1xuXG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBbJ2NsaWNrJywgJ2tleWRvd24nXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkICovXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYgKCF0aGlzLnNhdmVkVGFiSW5kZXhfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoJ3JvbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsIHRoaXMuc2F2ZWRUYWJJbmRleF8pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdyb2xlJywgc3RyaW5ncy5JQ09OX1JPTEUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgKi9cbiAgc2V0QXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50ICovXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGFuIGludGVyYWN0aW9uIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUludGVyYWN0aW9uKGV2dCkge1xuICAgIGlmIChldnQudHlwZSA9PT0gJ2NsaWNrJyB8fCBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJY29uQWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5cbmltcG9ydCBNRENUZXh0RmllbGRJY29uQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0NvbXBvbmVudDwhTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEljb24gZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkSWNvbn1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGRJY29uKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbn1cbiAgICovXG4gIGdldCBmb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24oLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgIGdldEF0dHI6IChhdHRyKSA9PiB0aGlzLnJvb3RfLmdldEF0dHJpYnV0ZShhdHRyKSxcbiAgICAgIHNldEF0dHI6IChhdHRyLCB2YWx1ZSkgPT4gdGhpcy5yb290Xy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxuICAgICAgcmVtb3ZlQXR0cjogKGF0dHIpID0+IHRoaXMucm9vdF8ucmVtb3ZlQXR0cmlidXRlKGF0dHIpLFxuICAgICAgc2V0Q29udGVudDogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgdGhpcy5yb290Xy50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgbm90aWZ5SWNvbkFjdGlvbjogKCkgPT4gdGhpcy5lbWl0KFxuICAgICAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5zdHJpbmdzLklDT05fRVZFTlQsIHt9IC8qIGV2dERhdGEgKi8sIHRydWUgLyogc2hvdWxkQnViYmxlICovKSxcbiAgICB9KSkpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGV4dEZpZWxkSWNvbiwgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb259O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtnZXRNYXRjaGVzUHJvcGVydHl9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCc7XG5cblxuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge01EQ1RleHRGaWVsZEFkYXB0ZXIsIEZvdW5kYXRpb25NYXBUeXBlfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ0xpbmVSaXBwbGUsIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvbGluZS1yaXBwbGUvaW5kZXgnO1xuaW1wb3J0IHtNRENUZXh0RmllbGRIZWxwZXJUZXh0LCBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbn0gZnJvbSAnLi9oZWxwZXItdGV4dC9pbmRleCc7XG5pbXBvcnQge01EQ1RleHRGaWVsZEljb24sIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9ufSBmcm9tICcuL2ljb24vaW5kZXgnO1xuaW1wb3J0IHtNRENGbG9hdGluZ0xhYmVsLCBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2luZGV4JztcbmltcG9ydCB7TURDTm90Y2hlZE91dGxpbmUsIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0NvbXBvbmVudDwhTURDVGV4dEZpZWxkRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIC8qKiBAcHJpdmF0ZSB7P0VsZW1lbnR9ICovXG4gICAgdGhpcy5pbnB1dF87XG4gICAgLyoqIEB0eXBlIHs/TURDUmlwcGxlfSAqL1xuICAgIHRoaXMucmlwcGxlO1xuICAgIC8qKiBAcHJpdmF0ZSB7P01EQ0xpbmVSaXBwbGV9ICovXG4gICAgdGhpcy5saW5lUmlwcGxlXztcbiAgICAvKiogQHByaXZhdGUgez9NRENUZXh0RmllbGRIZWxwZXJUZXh0fSAqL1xuICAgIHRoaXMuaGVscGVyVGV4dF87XG4gICAgLyoqIEBwcml2YXRlIHs/TURDVGV4dEZpZWxkSWNvbn0gKi9cbiAgICB0aGlzLmljb25fO1xuICAgIC8qKiBAcHJpdmF0ZSB7P01EQ0Zsb2F0aW5nTGFiZWx9ICovXG4gICAgdGhpcy5sYWJlbF87XG4gICAgLyoqIEBwcml2YXRlIHs/TURDTm90Y2hlZE91dGxpbmV9ICovXG4gICAgdGhpcy5vdXRsaW5lXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ1JpcHBsZSk9fSByaXBwbGVGYWN0b3J5IEEgZnVuY3Rpb24gd2hpY2hcbiAgICogY3JlYXRlcyBhIG5ldyBNRENSaXBwbGUuXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ0xpbmVSaXBwbGUpPX0gbGluZVJpcHBsZUZhY3RvcnkgQSBmdW5jdGlvbiB3aGljaFxuICAgKiBjcmVhdGVzIGEgbmV3IE1EQ0xpbmVSaXBwbGUuXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ1RleHRGaWVsZEhlbHBlclRleHQpPX0gaGVscGVyVGV4dEZhY3RvcnkgQSBmdW5jdGlvbiB3aGljaFxuICAgKiBjcmVhdGVzIGEgbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHQuXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ1RleHRGaWVsZEljb24pPX0gaWNvbkZhY3RvcnkgQSBmdW5jdGlvbiB3aGljaFxuICAgKiBjcmVhdGVzIGEgbmV3IE1EQ1RleHRGaWVsZEljb24uXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ0Zsb2F0aW5nTGFiZWwpPX0gbGFiZWxGYWN0b3J5IEEgZnVuY3Rpb24gd2hpY2hcbiAgICogY3JlYXRlcyBhIG5ldyBNRENGbG9hdGluZ0xhYmVsLlxuICAgKiBAcGFyYW0geyhmdW5jdGlvbighRWxlbWVudCk6ICFNRENOb3RjaGVkT3V0bGluZSk9fSBvdXRsaW5lRmFjdG9yeSBBIGZ1bmN0aW9uIHdoaWNoXG4gICAqIGNyZWF0ZXMgYSBuZXcgTURDTm90Y2hlZE91dGxpbmUuXG4gICAqL1xuICBpbml0aWFsaXplKFxuICAgIHJpcHBsZUZhY3RvcnkgPSAoZWwsIGZvdW5kYXRpb24pID0+IG5ldyBNRENSaXBwbGUoZWwsIGZvdW5kYXRpb24pLFxuICAgIGxpbmVSaXBwbGVGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDTGluZVJpcHBsZShlbCksXG4gICAgaGVscGVyVGV4dEZhY3RvcnkgPSAoZWwpID0+IG5ldyBNRENUZXh0RmllbGRIZWxwZXJUZXh0KGVsKSxcbiAgICBpY29uRmFjdG9yeSA9IChlbCkgPT4gbmV3IE1EQ1RleHRGaWVsZEljb24oZWwpLFxuICAgIGxhYmVsRmFjdG9yeSA9IChlbCkgPT4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwoZWwpLFxuICAgIG91dGxpbmVGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDTm90Y2hlZE91dGxpbmUoZWwpKSB7XG4gICAgdGhpcy5pbnB1dF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5JTlBVVF9TRUxFQ1RPUik7XG4gICAgY29uc3QgbGFiZWxFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTEFCRUxfU0VMRUNUT1IpO1xuICAgIGlmIChsYWJlbEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubGFiZWxfID0gbGFiZWxGYWN0b3J5KGxhYmVsRWxlbWVudCk7XG4gICAgfVxuICAgIGNvbnN0IGxpbmVSaXBwbGVFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuTElORV9SSVBQTEVfU0VMRUNUT1IpO1xuICAgIGlmIChsaW5lUmlwcGxlRWxlbWVudCkge1xuICAgICAgdGhpcy5saW5lUmlwcGxlXyA9IGxpbmVSaXBwbGVGYWN0b3J5KGxpbmVSaXBwbGVFbGVtZW50KTtcbiAgICB9XG4gICAgY29uc3Qgb3V0bGluZUVsZW1lbnQgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5PVVRMSU5FX1NFTEVDVE9SKTtcbiAgICBpZiAob3V0bGluZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMub3V0bGluZV8gPSBvdXRsaW5lRmFjdG9yeShvdXRsaW5lRWxlbWVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0Xy5oYXNBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0NPTlRST0xTKSkge1xuICAgICAgY29uc3QgaGVscGVyVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlucHV0Xy5nZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0NPTlRST0xTKSk7XG4gICAgICBpZiAoaGVscGVyVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0XyA9IGhlbHBlclRleHRGYWN0b3J5KGhlbHBlclRleHRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaWNvbkVsZW1lbnQgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5JQ09OX1NFTEVDVE9SKTtcbiAgICBpZiAoaWNvbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaWNvbl8gPSBpY29uRmFjdG9yeShpY29uRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5yaXBwbGUgPSBudWxsO1xuICAgIGlmICh0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkJPWCkpIHtcbiAgICAgIGNvbnN0IE1BVENIRVMgPSBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcbiAgICAgIGNvbnN0IGFkYXB0ZXIgPVxuICAgICAgICBPYmplY3QuYXNzaWduKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKC8qKiBAdHlwZSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSAqLyAodGhpcykpLCB7XG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB0aGlzLmlucHV0X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4gdGhpcy5pbnB1dF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSxcbiAgICAgICAgfSk7XG4gICAgICBjb25zdCBmb3VuZGF0aW9uID0gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgICB0aGlzLnJpcHBsZSA9IHJpcHBsZUZhY3RvcnkodGhpcy5yb290XywgZm91bmRhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yaXBwbGUpIHtcbiAgICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGluZVJpcHBsZV8pIHtcbiAgICAgIHRoaXMubGluZVJpcHBsZV8uZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmljb25fKSB7XG4gICAgICB0aGlzLmljb25fLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxfKSB7XG4gICAgICB0aGlzLmxhYmVsXy5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm91dGxpbmVfKSB7XG4gICAgICB0aGlzLm91dGxpbmVfLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpbGlhemVzIHRoZSBUZXh0IEZpZWxkJ3MgaW50ZXJuYWwgc3RhdGUgYmFzZWQgb24gdGhlIGVudmlyb25tZW50J3NcbiAgICogc3RhdGUuXG4gICAqL1xuICBpbml0aWFsU3luY1dpdGhEb20oKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuaW5wdXRfLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbnB1dC5cbiAgICovXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIFRleHQgRmllbGQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNEaXNhYmxlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgU2V0cyB0aGUgVGV4dCBGaWVsZCBkaXNhYmxlZCBvciBlbmFibGVkLlxuICAgKi9cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXREaXNhYmxlZChkaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdmFsaWQgVHJ1ZSBpZiB0aGUgVGV4dCBGaWVsZCBpcyB2YWxpZC5cbiAgICovXG4gIGdldCB2YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5pc1ZhbGlkKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWxpZCBTZXRzIHRoZSBUZXh0IEZpZWxkIHZhbGlkIG9yIGludmFsaWQuXG4gICAqL1xuICBzZXQgdmFsaWQodmFsaWQpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFZhbGlkKHZhbGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBUZXh0IEZpZWxkIGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0Xy5yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVpcmVkIFNldHMgdGhlIFRleHQgRmllbGQgdG8gcmVxdWlyZWQuXG4gICAqL1xuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQpIHtcbiAgICB0aGlzLmlucHV0Xy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGlucHV0IGVsZW1lbnQncyB2YWxpZGF0aW9uIHBhdHRlcm4uXG4gICAqL1xuICBnZXQgcGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dF8ucGF0dGVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgdmFsaWRhdGlvbiBwYXR0ZXJuLlxuICAgKi9cbiAgc2V0IHBhdHRlcm4ocGF0dGVybikge1xuICAgIHRoaXMuaW5wdXRfLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGlucHV0IGVsZW1lbnQncyBtaW5MZW5ndGguXG4gICAqL1xuICBnZXQgbWluTGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0Xy5taW5MZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbkxlbmd0aCBTZXRzIHRoZSBpbnB1dCBlbGVtZW50J3MgbWluTGVuZ3RoLlxuICAgKi9cbiAgc2V0IG1pbkxlbmd0aChtaW5MZW5ndGgpIHtcbiAgICB0aGlzLmlucHV0Xy5taW5MZW5ndGggPSBtaW5MZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5wdXQgZWxlbWVudCdzIG1heExlbmd0aC5cbiAgICovXG4gIGdldCBtYXhMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRfLm1heExlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4TGVuZ3RoIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBtYXhMZW5ndGguXG4gICAqL1xuICBzZXQgbWF4TGVuZ3RoKG1heExlbmd0aCkge1xuICAgIC8vIENocm9tZSB0aHJvd3MgZXhjZXB0aW9uIGlmIG1heExlbmd0aCBpcyBzZXQgPCAwXG4gICAgaWYgKG1heExlbmd0aCA8IDApIHtcbiAgICAgIHRoaXMuaW5wdXRfLnJlbW92ZUF0dHJpYnV0ZSgnbWF4TGVuZ3RoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRfLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaW5wdXQgZWxlbWVudCdzIG1pbi5cbiAgICovXG4gIGdldCBtaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRfLm1pbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWluIFNldHMgdGhlIGlucHV0IGVsZW1lbnQncyBtaW4uXG4gICAqL1xuICBzZXQgbWluKG1pbikge1xuICAgIHRoaXMuaW5wdXRfLm1pbiA9IG1pbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBpbnB1dCBlbGVtZW50J3MgbWF4LlxuICAgKi9cbiAgZ2V0IG1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dF8ubWF4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXggU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIG1heC5cbiAgICovXG4gIHNldCBtYXgobWF4KSB7XG4gICAgdGhpcy5pbnB1dF8ubWF4ID0gbWF4O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGlucHV0IGVsZW1lbnQncyBzdGVwLlxuICAgKi9cbiAgZ2V0IHN0ZXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRfLnN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ZXAgU2V0cyB0aGUgaW5wdXQgZWxlbWVudCdzIHN0ZXAuXG4gICAqL1xuICBzZXQgc3RlcChzdGVwKSB7XG4gICAgdGhpcy5pbnB1dF8uc3RlcCA9IHN0ZXA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaGVscGVyIHRleHQgZWxlbWVudCBjb250ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0IGhlbHBlclRleHRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldEhlbHBlclRleHRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc2V0IGljb25BcmlhTGFiZWwobGFiZWwpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldEljb25BcmlhTGFiZWwobGFiZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldCBpY29uQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRJY29uQ29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvbXB1dGVzIHRoZSBvdXRsaW5lIFNWRyBwYXRoIGZvciB0aGUgb3V0bGluZSBlbGVtZW50LlxuICAgKi9cbiAgbGF5b3V0KCkge1xuICAgIGNvbnN0IG9wZW5Ob3RjaCA9IHRoaXMuZm91bmRhdGlvbl8uc2hvdWxkRmxvYXQ7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5ub3RjaE91dGxpbmUob3Blbk5vdGNoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkRm91bmRhdGlvbihcbiAgICAgIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICAgIGhhc0NsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgICByZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgICAgZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgICAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBnZXRBdHRyaWJ1dGVzTGlzdCA9IChtdXRhdGlvbnNMaXN0KSA9PiBtdXRhdGlvbnNMaXN0Lm1hcCgobXV0YXRpb24pID0+IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3QpID0+IGhhbmRsZXIoZ2V0QXR0cmlidXRlc0xpc3QobXV0YXRpb25zTGlzdCkpKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSU5QVVRfU0VMRUNUT1IpO1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHthdHRyaWJ1dGVzOiB0cnVlfTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgICAgICB9LFxuICAgICAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6IChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLFxuICAgICAgICBpc0ZvY3VzZWQ6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSU5QVVRfU0VMRUNUT1IpO1xuICAgICAgICB9LFxuICAgICAgICBpc1J0bDogKCkgPT4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yb290XykuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgfSxcbiAgICAgIHRoaXMuZ2V0SW5wdXRBZGFwdGVyTWV0aG9kc18oKSxcbiAgICAgIHRoaXMuZ2V0TGFiZWxBZGFwdGVyTWV0aG9kc18oKSxcbiAgICAgIHRoaXMuZ2V0TGluZVJpcHBsZUFkYXB0ZXJNZXRob2RzXygpLFxuICAgICAgdGhpcy5nZXRPdXRsaW5lQWRhcHRlck1ldGhvZHNfKCkpKSxcbiAgICAgIHRoaXMuZ2V0Rm91bmRhdGlvbk1hcF8oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IXtcbiAgICogICBzaGFrZUxhYmVsOiBmdW5jdGlvbihib29sZWFuKTogdW5kZWZpbmVkLFxuICAgKiAgIGZsb2F0TGFiZWw6IGZ1bmN0aW9uKGJvb2xlYW4pOiB1bmRlZmluZWQsXG4gICAqICAgaGFzTGFiZWw6IGZ1bmN0aW9uKCk6IGJvb2xlYW4sXG4gICAqICAgZ2V0TGFiZWxXaWR0aDogZnVuY3Rpb24oKTogbnVtYmVyLFxuICAgKiB9fVxuICAgKi9cbiAgZ2V0TGFiZWxBZGFwdGVyTWV0aG9kc18oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYWtlTGFiZWw6IChzaG91bGRTaGFrZSkgPT4gdGhpcy5sYWJlbF8uc2hha2Uoc2hvdWxkU2hha2UpLFxuICAgICAgZmxvYXRMYWJlbDogKHNob3VsZEZsb2F0KSA9PiB0aGlzLmxhYmVsXy5mbG9hdChzaG91bGRGbG9hdCksXG4gICAgICBoYXNMYWJlbDogKCkgPT4gISF0aGlzLmxhYmVsXyxcbiAgICAgIGdldExhYmVsV2lkdGg6ICgpID0+IHRoaXMubGFiZWxfLmdldFdpZHRoKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshe1xuICAgKiAgIGFjdGl2YXRlTGluZVJpcHBsZTogZnVuY3Rpb24oKTogdW5kZWZpbmVkLFxuICAgKiAgIGRlYWN0aXZhdGVMaW5lUmlwcGxlOiBmdW5jdGlvbigpOiB1bmRlZmluZWQsXG4gICAqICAgc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbjogZnVuY3Rpb24obnVtYmVyKTogdW5kZWZpbmVkLFxuICAgKiB9fVxuICAgKi9cbiAgZ2V0TGluZVJpcHBsZUFkYXB0ZXJNZXRob2RzXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZhdGVMaW5lUmlwcGxlOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmxpbmVSaXBwbGVfKSB7XG4gICAgICAgICAgdGhpcy5saW5lUmlwcGxlXy5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUxpbmVSaXBwbGU6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGluZVJpcHBsZV8pIHtcbiAgICAgICAgICB0aGlzLmxpbmVSaXBwbGVfLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW46IChub3JtYWxpemVkWCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5saW5lUmlwcGxlXykge1xuICAgICAgICAgIHRoaXMubGluZVJpcHBsZV8uc2V0UmlwcGxlQ2VudGVyKG5vcm1hbGl6ZWRYKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyF7XG4gICAqICAgbm90Y2hPdXRsaW5lOiBmdW5jdGlvbihudW1iZXIsIGJvb2xlYW4pOiB1bmRlZmluZWQsXG4gICAqICAgaGFzT3V0bGluZTogZnVuY3Rpb24oKTogYm9vbGVhbixcbiAgICogfX1cbiAgICovXG4gIGdldE91dGxpbmVBZGFwdGVyTWV0aG9kc18oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdGNoT3V0bGluZTogKGxhYmVsV2lkdGgsIGlzUnRsKSA9PiB0aGlzLm91dGxpbmVfLm5vdGNoKGxhYmVsV2lkdGgsIGlzUnRsKSxcbiAgICAgIGNsb3NlT3V0bGluZTogKCkgPT4gdGhpcy5vdXRsaW5lXy5jbG9zZU5vdGNoKCksXG4gICAgICBoYXNPdXRsaW5lOiAoKSA9PiAhIXRoaXMub3V0bGluZV8sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshe1xuICAgKiAgIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKHN0cmluZywgZnVuY3Rpb24oKSk6IHVuZGVmaW5lZCxcbiAgICogICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKHN0cmluZywgZnVuY3Rpb24oKSk6IHVuZGVmaW5lZCxcbiAgICogICBnZXROYXRpdmVJbnB1dDogZnVuY3Rpb24oKTogP0VsZW1lbnQsXG4gICAqIH19XG4gICAqL1xuICBnZXRJbnB1dEFkYXB0ZXJNZXRob2RzXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB0aGlzLmlucHV0Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgZ2V0TmF0aXZlSW5wdXQ6ICgpID0+IHRoaXMuaW5wdXRfLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hcCBvZiBhbGwgc3ViY29tcG9uZW50cyB0byBzdWJmb3VuZGF0aW9ucy5cbiAgICogQHJldHVybiB7IUZvdW5kYXRpb25NYXBUeXBlfVxuICAgKi9cbiAgZ2V0Rm91bmRhdGlvbk1hcF8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlbHBlclRleHQ6IHRoaXMuaGVscGVyVGV4dF8gPyB0aGlzLmhlbHBlclRleHRfLmZvdW5kYXRpb24gOiB1bmRlZmluZWQsXG4gICAgICBpY29uOiB0aGlzLmljb25fID8gdGhpcy5pY29uXy5mb3VuZGF0aW9uIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHtNRENUZXh0RmllbGQsIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24sXG4gIE1EQ1RleHRGaWVsZEhlbHBlclRleHQsIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLFxuICBNRENUZXh0RmllbGRJY29uLCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgRmxvYXRpbmcgTGFiZWwuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgZmxvYXRpbmcgbGFiZWwgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIExBQkVMX0ZMT0FUX0FCT1ZFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZScsXG4gIExBQkVMX1NIQUtFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1zaGFrZScsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENGbG9hdGluZ0xhYmVsQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENGbG9hdGluZ0xhYmVsQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGdldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVTaGFrZUFuaW1hdGlvbkVuZF8oKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYW5pbWF0aW9uZW5kJywgdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdhbmltYXRpb25lbmQnLCB0aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIHRoZSBsYWJlbCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5nZXRXaWR0aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgbGFiZWwgdG8gcHJvZHVjZSB0aGUgbGFiZWwgc2hha2UgZm9yIGVycm9ycy5cbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRTaGFrZSBhZGRzIHNoYWtlIGNsYXNzIGlmIHRydWUsXG4gICAqIG90aGVyd2lzZSByZW1vdmVzIHNoYWtlIGNsYXNzLlxuICAgKi9cbiAgc2hha2Uoc2hvdWxkU2hha2UpIHtcbiAgICBjb25zdCB7TEFCRUxfU0hBS0V9ID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoc2hvdWxkU2hha2UpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBmbG9hdCBvciBkb2NrLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZEZsb2F0IGFkZHMgZmxvYXQgY2xhc3MgaWYgdHJ1ZSwgb3RoZXJ3aXNlIHJlbW92ZVxuICAgKiBmbG9hdCBhbmQgc2hha2UgY2xhc3MgdG8gZG9jayBsYWJlbC5cbiAgICovXG4gIGZsb2F0KHNob3VsZEZsb2F0KSB7XG4gICAgY29uc3Qge0xBQkVMX0ZMT0FUX0FCT1ZFLCBMQUJFTF9TSEFLRX0gPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmIChzaG91bGRGbG9hdCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhMQUJFTF9GTE9BVF9BQk9WRSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfRkxPQVRfQUJPVkUpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYW4gaW50ZXJhY3Rpb24gZXZlbnQgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGhhbmRsZVNoYWtlQW5pbWF0aW9uRW5kXygpIHtcbiAgICBjb25zdCB7TEFCRUxfU0hBS0V9ID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDRmxvYXRpbmdMYWJlbCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENGbG9hdGluZ0xhYmVsfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ0Zsb2F0aW5nTGFiZWwocm9vdCk7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBwcm9kdWNlIHRoZSBsYWJlbCBzaGFrZSBmb3IgZXJyb3JzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFNoYWtlIHN0eWxlcyB0aGUgbGFiZWwgdG8gc2hha2UgYnkgYWRkaW5nIHNoYWtlIGNsYXNzXG4gICAqIGlmIHRydWUsIG90aGVyd2lzZSB3aWxsIHN0b3Agc2hha2luZyBieSByZW1vdmluZyBzaGFrZSBjbGFzcy5cbiAgICovXG4gIHNoYWtlKHNob3VsZFNoYWtlKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zaGFrZShzaG91bGRTaGFrZSk7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIGxhYmVsIHRvIGZsb2F0L2RvY2suXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkRmxvYXQgc3R5bGVzIHRoZSBsYWJlbCB0byBmbG9hdCBieSBhZGRpbmcgZmxvYXQgY2xhc3NcbiAgICogaWYgdHJ1ZSwgb3RoZXJ3aXNlIGRvY2tzIHRoZSBsYWJlbCBieSByZW1vdmluZyB0aGUgZmxvYXQgY2xhc3MuXG4gICAqL1xuICBmbG9hdChzaG91bGRGbG9hdCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZmxvYXQoc2hvdWxkRmxvYXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFdpZHRoKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBnZXRXaWR0aDogKCkgPT4gdGhpcy5yb290Xy5vZmZzZXRXaWR0aCxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge01EQ0Zsb2F0aW5nTGFiZWwsIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgTm90Y2hlZCBPdXRsaW5lLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIE5vdGNoZWQgT3V0bGluZSBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEhlaWdodCgpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgXCJkXCIgYXR0cmlidXRlIG9mIHRoZSBvdXRsaW5lIGVsZW1lbnQncyBTVkcgcGF0aC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRPdXRsaW5lUGF0aEF0dHIodmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkbGUgb3V0bGluZSBlbGVtZW50J3MgY29tcHV0ZWQgc3R5bGUgdmFsdWUgb2YgdGhlIGdpdmVuIGNzcyBwcm9wZXJ0eSBgcHJvcGVydHlOYW1lYC5cbiAgICogV2UgYWNoaWV2ZSB0aGlzIHZpYSBgZ2V0Q29tcHV0ZWRTdHlsZSguLi4pLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lKWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlKHByb3BlcnR5TmFtZSkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgUEFUSF9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lX19wYXRoJyxcbiAgSURMRV9PVVRMSU5FX1NFTEVDVE9SOiAnLm1kYy1ub3RjaGVkLW91dGxpbmVfX2lkbGUnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBPVVRMSU5FX05PVENIRUQ6ICdtZGMtbm90Y2hlZC1vdXRsaW5lLS1ub3RjaGVkJyxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGdldEhlaWdodDogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRPdXRsaW5lUGF0aEF0dHI6ICgpID0+IHt9LFxuICAgICAgZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIG91dGxpbmUgbm90Y2hlZCBzZWxlY3RvciBhbmQgdXBkYXRlcyB0aGUgbm90Y2ggd2lkdGhcbiAgICogY2FsY3VsYXRlZCBiYXNlZCBvZmYgb2Ygbm90Y2hXaWR0aCBhbmQgaXNSdGwuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub3RjaFdpZHRoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzUnRsXG4gICAqL1xuICBub3RjaChub3RjaFdpZHRoLCBpc1J0bCA9IGZhbHNlKSB7XG4gICAgY29uc3Qge09VVExJTkVfTk9UQ0hFRH0gPSBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9VVExJTkVfTk9UQ0hFRCk7XG4gICAgdGhpcy51cGRhdGVTdmdQYXRoXyhub3RjaFdpZHRoLCBpc1J0bCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBub3RjaGVkIG91dGxpbmUgc2VsZWN0b3IgdG8gY2xvc2UgdGhlIG5vdGNoIGluIHRoZSBvdXRsaW5lLlxuICAgKi9cbiAgY2xvc2VOb3RjaCgpIHtcbiAgICBjb25zdCB7T1VUTElORV9OT1RDSEVEfSA9IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1VUTElORV9OT1RDSEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBTVkcgcGF0aCBvZiB0aGUgZm9jdXMgb3V0bGluZSBlbGVtZW50IGJhc2VkIG9uIHRoZSBub3RjaFdpZHRoXG4gICAqIGFuZCB0aGUgUlRMIGNvbnRleHQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub3RjaFdpZHRoXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGlzUnRsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1cGRhdGVTdmdQYXRoXyhub3RjaFdpZHRoLCBpc1J0bCkge1xuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIGEgc3BlY2lmaWMgY29ybmVyJ3Mgc3R5bGUgYmVjYXVzZSBGaXJlZm94IGRvZXNuJ3QgcmVwb3J0IHRoZSBzdHlsZSBvbiBib3JkZXItcmFkaXVzLlxuICAgIGNvbnN0IHJhZGl1c1N0eWxlVmFsdWUgPSB0aGlzLmFkYXB0ZXJfLmdldElkbGVPdXRsaW5lU3R5bGVWYWx1ZSgnYm9yZGVyLXJhZGl1cycpIHx8XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlKCdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyk7XG4gICAgY29uc3QgcmFkaXVzID0gcGFyc2VGbG9hdChyYWRpdXNTdHlsZVZhbHVlKTtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0V2lkdGgoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmdldEhlaWdodCgpO1xuICAgIGNvbnN0IGNvcm5lcldpZHRoID0gcmFkaXVzICsgMS4yO1xuICAgIGNvbnN0IGxlYWRpbmdTdHJva2VMZW5ndGggPSBNYXRoLmFicygxMSAtIGNvcm5lcldpZHRoKTtcbiAgICBjb25zdCBwYWRkZWROb3RjaFdpZHRoID0gbm90Y2hXaWR0aCArIDg7XG5cbiAgICAvLyBUaGUgcmlnaHQsIGJvdHRvbSwgYW5kIGxlZnQgc2lkZXMgb2YgdGhlIG91dGxpbmUgZm9sbG93IHRoZSBzYW1lIFNWRyBwYXRoLlxuICAgIGNvbnN0IHBhdGhNaWRkbGUgPSAnYScgKyByYWRpdXMgKyAnLCcgKyByYWRpdXMgKyAnIDAgMCAxICcgKyByYWRpdXMgKyAnLCcgKyByYWRpdXNcbiAgICAgICsgJ3YnICsgKGhlaWdodCAtICgyICogY29ybmVyV2lkdGgpKVxuICAgICAgKyAnYScgKyByYWRpdXMgKyAnLCcgKyByYWRpdXMgKyAnIDAgMCAxICcgKyAtcmFkaXVzICsgJywnICsgcmFkaXVzXG4gICAgICArICdoJyArICgtd2lkdGggKyAoMiAqIGNvcm5lcldpZHRoKSlcbiAgICAgICsgJ2EnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwIDAgMSAnICsgLXJhZGl1cyArICcsJyArIC1yYWRpdXNcbiAgICAgICsgJ3YnICsgKC1oZWlnaHQgKyAoMiAqIGNvcm5lcldpZHRoKSlcbiAgICAgICsgJ2EnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwIDAgMSAnICsgcmFkaXVzICsgJywnICsgLXJhZGl1cztcblxuICAgIGxldCBwYXRoO1xuICAgIGlmICghaXNSdGwpIHtcbiAgICAgIHBhdGggPSAnTScgKyAoY29ybmVyV2lkdGggKyBsZWFkaW5nU3Ryb2tlTGVuZ3RoICsgcGFkZGVkTm90Y2hXaWR0aCkgKyAnLCcgKyAxXG4gICAgICAgICsgJ2gnICsgKHdpZHRoIC0gKDIgKiBjb3JuZXJXaWR0aCkgLSBwYWRkZWROb3RjaFdpZHRoIC0gbGVhZGluZ1N0cm9rZUxlbmd0aClcbiAgICAgICAgKyBwYXRoTWlkZGxlXG4gICAgICAgICsgJ2gnICsgbGVhZGluZ1N0cm9rZUxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9ICdNJyArICh3aWR0aCAtIGNvcm5lcldpZHRoIC0gbGVhZGluZ1N0cm9rZUxlbmd0aCkgKyAnLCcgKyAxXG4gICAgICAgICsgJ2gnICsgbGVhZGluZ1N0cm9rZUxlbmd0aFxuICAgICAgICArIHBhdGhNaWRkbGVcbiAgICAgICAgKyAnaCcgKyAod2lkdGggLSAoMiAqIGNvcm5lcldpZHRoKSAtIHBhZGRlZE5vdGNoV2lkdGggLSBsZWFkaW5nU3Ryb2tlTGVuZ3RoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldE91dGxpbmVQYXRoQXR0cihwYXRoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ05vdGNoZWRPdXRsaW5lIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ05vdGNoZWRPdXRsaW5lKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBVcGRhdGVzIG91dGxpbmUgc2VsZWN0b3JzIGFuZCBTVkcgcGF0aCB0byBvcGVuIG5vdGNoLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG5vdGNoV2lkdGggVGhlIG5vdGNoIHdpZHRoIGluIHRoZSBvdXRsaW5lLlxuICAgICogQHBhcmFtIHtib29sZWFuPX0gaXNSdGwgRGV0ZXJtaW5lcyBpZiBvdXRsaW5lIGlzIHJ0bC4gSWYgcnRsIGlzIHRydWUsIG5vdGNoXG4gICAgKiB3aWxsIGJlIHJpZ2h0IGp1c3RpZmllZCBpbiBvdXRsaW5lIHBhdGgsIG90aGVyd2lzZSBsZWZ0IGp1c3RpZmllZC5cbiAgICAqL1xuICBub3RjaChub3RjaFdpZHRoLCBpc1J0bCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubm90Y2gobm90Y2hXaWR0aCwgaXNSdGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG91dGxpbmUgc2VsZWN0b3JzIHRvIGNsb3NlIG5vdGNoIGFuZCByZXR1cm4gaXQgdG8gaWRsZSBzdGF0ZS5cbiAgICovXG4gIGNsb3NlTm90Y2goKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5jbG9zZU5vdGNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uKHtcbiAgICAgIGdldFdpZHRoOiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldFdpZHRoLFxuICAgICAgZ2V0SGVpZ2h0OiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldEhlaWdodCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIHNldE91dGxpbmVQYXRoQXR0cjogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5QQVRIX1NFTEVDVE9SKTtcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZ2V0SWRsZU91dGxpbmVTdHlsZVZhbHVlOiAocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkbGVPdXRsaW5lRWxlbWVudCA9IHRoaXMucm9vdF8ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSURMRV9PVVRMSU5FX1NFTEVDVE9SKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGlkbGVPdXRsaW5lRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge01EQ05vdGNoZWRPdXRsaW5lLCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb259O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdGFiYmFibGUgPSByZXF1aXJlKCd0YWJiYWJsZScpO1xuXG52YXIgbGlzdGVuaW5nRm9jdXNUcmFwID0gbnVsbDtcblxuZnVuY3Rpb24gZm9jdXNUcmFwKGVsZW1lbnQsIHVzZXJPcHRpb25zKSB7XG4gIHZhciB0YWJiYWJsZU5vZGVzID0gW107XG4gIHZhciBmaXJzdFRhYmJhYmxlTm9kZSA9IG51bGw7XG4gIHZhciBsYXN0VGFiYmFibGVOb2RlID0gbnVsbDtcbiAgdmFyIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IG51bGw7XG4gIHZhciBhY3RpdmUgPSBmYWxzZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuICB2YXIgdGFiRXZlbnQgPSBudWxsO1xuXG4gIHZhciBjb250YWluZXIgPSAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKVxuICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KVxuICAgIDogZWxlbWVudDtcblxuICB2YXIgY29uZmlnID0gdXNlck9wdGlvbnMgfHwge307XG4gIGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSA9ICh1c2VyT3B0aW9ucyAmJiB1c2VyT3B0aW9ucy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkKVxuICAgID8gdXNlck9wdGlvbnMucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGVcbiAgICA6IHRydWU7XG4gIGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcyA9ICh1c2VyT3B0aW9ucyAmJiB1c2VyT3B0aW9ucy5lc2NhcGVEZWFjdGl2YXRlcyAhPT0gdW5kZWZpbmVkKVxuICAgID8gdXNlck9wdGlvbnMuZXNjYXBlRGVhY3RpdmF0ZXNcbiAgICA6IHRydWU7XG5cbiAgdmFyIHRyYXAgPSB7XG4gICAgYWN0aXZhdGU6IGFjdGl2YXRlLFxuICAgIGRlYWN0aXZhdGU6IGRlYWN0aXZhdGUsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIHVucGF1c2U6IHVucGF1c2UsXG4gIH07XG5cbiAgcmV0dXJuIHRyYXA7XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKGFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGRlZmF1bHRlZEFjdGl2YXRlT3B0aW9ucyA9IHtcbiAgICAgIG9uQWN0aXZhdGU6IChhY3RpdmF0ZU9wdGlvbnMgJiYgYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgPyBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkFjdGl2YXRlLFxuICAgIH07XG5cbiAgICBhY3RpdmUgPSB0cnVlO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAoZGVmYXVsdGVkQWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGUpIHtcbiAgICAgIGRlZmF1bHRlZEFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKCFhY3RpdmUpIHJldHVybjtcblxuICAgIHZhciBkZWZhdWx0ZWREZWFjdGl2YXRlT3B0aW9ucyA9IHtcbiAgICAgIHJldHVybkZvY3VzOiAoZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXMgIT09IHVuZGVmaW5lZClcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1c1xuICAgICAgICA6IGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSxcbiAgICAgIG9uRGVhY3RpdmF0ZTogKGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkRlYWN0aXZhdGUsXG4gICAgfTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKGRlZmF1bHRlZERlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgZGVmYXVsdGVkRGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRlZERlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5Rm9jdXMobm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgaWYgKHBhdXNlZCB8fCAhYWN0aXZlKSByZXR1cm47XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVucGF1c2UoKSB7XG4gICAgaWYgKCFwYXVzZWQgfHwgIWFjdGl2ZSkgcmV0dXJuO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIGFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghYWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgaWYgKGxpc3RlbmluZ0ZvY3VzVHJhcCkge1xuICAgICAgbGlzdGVuaW5nRm9jdXNUcmFwLnBhdXNlKCk7XG4gICAgfVxuICAgIGxpc3RlbmluZ0ZvY3VzVHJhcCA9IHRyYXA7XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50IHRoYXQgY2F1c2VkIHRoZSBmb2N1cyB0cmFwIGFjdGl2YXRpb25cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeUZvY3VzKGZpcnN0Rm9jdXNOb2RlKCkpO1xuICAgIH0sIDApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY2hlY2tGb2N1cywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghYWN0aXZlIHx8IGxpc3RlbmluZ0ZvY3VzVHJhcCAhPT0gdHJhcCkgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjaGVja0ZvY3VzLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgbGlzdGVuaW5nRm9jdXNUcmFwID0gbnVsbDtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7XG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25WYWx1ZSk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCByZWZlcnMgdG8gbm8ga25vd24gbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlID0gb3B0aW9uVmFsdWUoKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIGRpZCBub3QgcmV0dXJuIGEgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpcnN0Rm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKSAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBub2RlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHRhYmJhYmxlTm9kZXNbMF0gfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2FuXFwndCBoYXZlIGEgZm9jdXMtdHJhcCB3aXRob3V0IGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudCcpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50XG4gIGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24oZSkge1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMgJiYgIWNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGRlYWN0aXZhdGUoeyByZXR1cm5Gb2N1czogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcykgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0ZvY3VzKGUpIHtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIC8vIENoZWNraW5nIGZvciBhIGJsdXIgbWV0aG9kIGhlcmUgcmVzb2x2ZXMgYSBGaXJlZm94IGlzc3VlICgjMTUpXG4gICAgaWYgKHR5cGVvZiBlLnRhcmdldC5ibHVyID09PSAnZnVuY3Rpb24nKSBlLnRhcmdldC5ibHVyKCk7XG5cbiAgICBpZiAodGFiRXZlbnQpIHtcbiAgICAgIHJlYWRqdXN0Rm9jdXModGFiRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgaGFuZGxlVGFiKGUpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IGZhbHNlICYmIGlzRXNjYXBlRXZlbnQoZSkpIHtcbiAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUYWIoZSkge1xuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcblxuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykgJiYgTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSkgPCAwKSB7XG4gICAgICByZXR1cm4gdGFiRXZlbnQgPSBlO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgY3VycmVudEZvY3VzSW5kZXggPSB0YWJiYWJsZU5vZGVzLmluZGV4T2YoZS50YXJnZXQpO1xuXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZmlyc3RUYWJiYWJsZU5vZGUgfHwgdGFiYmFibGVOb2Rlcy5pbmRleE9mKGUudGFyZ2V0KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRyeUZvY3VzKGxhc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyeUZvY3VzKHRhYmJhYmxlTm9kZXNbY3VycmVudEZvY3VzSW5kZXggLSAxXSk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0ID09PSBsYXN0VGFiYmFibGVOb2RlKSByZXR1cm4gdHJ5Rm9jdXMoZmlyc3RUYWJiYWJsZU5vZGUpO1xuXG4gICAgdHJ5Rm9jdXModGFiYmFibGVOb2Rlc1tjdXJyZW50Rm9jdXNJbmRleCArIDFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lcik7XG4gICAgZmlyc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzWzBdO1xuICAgIGxhc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV07XG4gIH1cblxuICBmdW5jdGlvbiByZWFkanVzdEZvY3VzKGUpIHtcbiAgICBpZiAoZS5zaGlmdEtleSkgcmV0dXJuIHRyeUZvY3VzKGxhc3RUYWJiYWJsZU5vZGUpO1xuXG4gICAgdHJ5Rm9jdXMoZmlyc3RUYWJiYWJsZU5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufVxuXG5mdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykgcmV0dXJuO1xuICBpZiAobm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgIHJldHVybjtcblxuICBub2RlLmZvY3VzKCk7XG4gIGlmIChub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgIG5vZGUuc2VsZWN0KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb2N1c1RyYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mb2N1cy10cmFwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9mb2N1cy10cmFwL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGVsZW1lbnREb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZWw7XG4gIHZhciBiYXNpY1RhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuXG4gIC8vIEEgbm9kZSBpcyBcImF2YWlsYWJsZVwiIGlmXG4gIC8vIC0gaXQncyBjb21wdXRlZCBzdHlsZVxuICB2YXIgaXNVbmF2YWlsYWJsZSA9IGNyZWF0ZUlzVW5hdmFpbGFibGUoZWxlbWVudERvY3VtZW50KTtcblxuICB2YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ2FbaHJlZl0nLFxuICAgICd0ZXh0YXJlYScsXG4gICAgJ2J1dHRvbicsXG4gICAgJ1t0YWJpbmRleF0nLFxuICBdO1xuXG4gIHZhciBjYW5kaWRhdGVzID0gZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpKTtcblxuICBpZiAob3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxuICAgIGlmIChcbiAgICAgIGNhbmRpZGF0ZVNlbGVjdG9ycy5zb21lKGZ1bmN0aW9uKGNhbmRpZGF0ZVNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKTtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlLCBjYW5kaWRhdGVJbmRleEF0dHIsIGNhbmRpZGF0ZUluZGV4O1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGNhbmRpZGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tpXTtcbiAgICBjYW5kaWRhdGVJbmRleEF0dHIgPSBwYXJzZUludChjYW5kaWRhdGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMClcbiAgICBjYW5kaWRhdGVJbmRleCA9IGlzTmFOKGNhbmRpZGF0ZUluZGV4QXR0cikgPyBjYW5kaWRhdGUudGFiSW5kZXggOiBjYW5kaWRhdGVJbmRleEF0dHI7XG5cbiAgICBpZiAoXG4gICAgICBjYW5kaWRhdGVJbmRleCA8IDBcbiAgICAgIHx8IChjYW5kaWRhdGUudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBjYW5kaWRhdGUudHlwZSA9PT0gJ2hpZGRlbicpXG4gICAgICB8fCBjYW5kaWRhdGUuZGlzYWJsZWRcbiAgICAgIHx8IGlzVW5hdmFpbGFibGUoY2FuZGlkYXRlLCBlbGVtZW50RG9jdW1lbnQpXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2FuZGlkYXRlSW5kZXggPT09IDApIHtcbiAgICAgIGJhc2ljVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVJbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzXG4gICAgLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmluZGV4IC0gYi5pbmRleCA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xuICAgIH0pXG4gICAgLm1hcChmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gYS5ub2RlXG4gICAgfSk7XG5cbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGFiYmFibGVOb2RlcywgYmFzaWNUYWJiYWJsZXMpO1xuXG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJc1VuYXZhaWxhYmxlKGVsZW1lbnREb2N1bWVudCkge1xuICAvLyBOb2RlIGNhY2hlIG11c3QgYmUgcmVmcmVzaGVkIG9uIGV2ZXJ5IGNoZWNrLCBpbiBjYXNlXG4gIC8vIHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IGhhcyBjaGFuZ2VkXG4gIHZhciBpc09mZkNhY2hlID0gW107XG5cbiAgLy8gXCJvZmZcIiBtZWFucyBgZGlzcGxheTogbm9uZTtgLCBhcyBvcHBvc2VkIHRvIFwiaGlkZGVuXCIsXG4gIC8vIHdoaWNoIG1lYW5zIGB2aXNpYmlsaXR5OiBoaWRkZW47YC4gZ2V0Q29tcHV0ZWRTdHlsZVxuICAvLyBhY2N1cmF0ZWx5IHJlZmxlY3RzIHZpc2libGl0eSBpbiBjb250ZXh0IGJ1dCBub3RcbiAgLy8gXCJvZmZcIiBzdGF0ZSwgc28gd2UgbmVlZCB0byByZWN1cnNpdmVseSBjaGVjayBwYXJlbnRzLlxuXG4gIGZ1bmN0aW9uIGlzT2ZmKG5vZGUsIG5vZGVDb21wdXRlZFN0eWxlKSB7XG4gICAgaWYgKG5vZGUgPT09IGVsZW1lbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIEZpbmQgdGhlIGNhY2hlZCBub2RlIChBcnJheS5wcm90b3R5cGUuZmluZCBub3QgYXZhaWxhYmxlIGluIElFOSlcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gaXNPZmZDYWNoZS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlzT2ZmQ2FjaGVbaV1bMF0gPT09IG5vZGUpIHJldHVybiBpc09mZkNhY2hlW2ldWzFdO1xuICAgIH1cblxuICAgIG5vZGVDb21wdXRlZFN0eWxlID0gbm9kZUNvbXB1dGVkU3R5bGUgfHwgZWxlbWVudERvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAobm9kZUNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXN1bHQgPSBpc09mZihub2RlLnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIGlzT2ZmQ2FjaGUucHVzaChbbm9kZSwgcmVzdWx0XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGlzVW5hdmFpbGFibGUobm9kZSkge1xuICAgIGlmIChub2RlID09PSBlbGVtZW50RG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGVsZW1lbnREb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgaWYgKGlzT2ZmKG5vZGUsIGNvbXB1dGVkU3R5bGUpKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy90YWJiYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
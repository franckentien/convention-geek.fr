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


var _ripple = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/index.js");

var _index = __webpack_require__(/*! @material/top-app-bar/index */ "./node_modules/@material/top-app-bar/index.js");

var _tab = __webpack_require__(/*! @material/tab */ "./node_modules/@material/tab/index.js");

var _tabBar = __webpack_require__(/*! @material/tab-bar */ "./node_modules/@material/tab-bar/index.js");

var _toolbar = __webpack_require__(/*! @material/toolbar */ "./node_modules/@material/toolbar/index.js");

__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");

var ripple = new _ripple.MDCRipple(document.querySelector('.foo-button'));
var iconButtonRipple = new _ripple.MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

var topAppBarElement = document.querySelector('.mdc-top-app-bar');
var topAppBar = new _index.MDCTopAppBar(topAppBarElement);
var tab = new _tab.MDCTab(document.querySelector('.mdc-tab'));

var tabBar = new _tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

var toolbar = new _toolbar.MDCToolbar(document.querySelector('.mdc-toolbar'));

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
/*! exports used: MDCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(/*! ./component */ "./node_modules/@material/base/component.js");
/* unused harmony reexport MDCFoundation */
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
      startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
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
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function() { return RippleCapableSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/ripple/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util__; });
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
    const MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      containsEventTarget: (target) => instance.root_.contains(target),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]()),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]()),
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]()),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]()),
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
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchesProperty", function() { return getMatchesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_tab_scroller_index__ = __webpack_require__(/*! @material/tab-scroller/index */ "./node_modules/@material/tab-scroller/index.js");
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
    tabFactory = (el) => new __WEBPACK_IMPORTED_MODULE_1__material_tab_index__["MDCTab"](el),
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

    this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_1__material_tab_index__["MDCTabFoundation"].strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.root_.addEventListener('keydown', this.handleKeyDown_);
  }

  destroy() {
    super.destroy();
    this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_1__material_tab_index__["MDCTabFoundation"].strings.INTERACTED_EVENT, this.handleTabInteraction_);
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

/***/ "./node_modules/@material/tab-indicator/adapter.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/tab-indicator/adapter.js ***!
  \*********************************************************/
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

/***/ "./node_modules/@material/tab-indicator/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-indicator/constants.js ***!
  \***********************************************************/
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

/***/ "./node_modules/@material/tab-indicator/fading-foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/fading-foundation.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
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

/***/ "./node_modules/@material/tab-indicator/foundation.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/foundation.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-indicator/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-indicator/constants.js");
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

/***/ "./node_modules/@material/tab-indicator/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/tab-indicator/index.js ***!
  \*******************************************************/
/*! exports provided: MDCTabIndicator, MDCTabIndicatorFoundation, MDCSlidingTabIndicatorFoundation, MDCFadingTabIndicatorFoundation */
/*! exports used: MDCTabIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-indicator/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sliding_foundation__ = __webpack_require__(/*! ./sliding-foundation */ "./node_modules/@material/tab-indicator/sliding-foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fading_foundation__ = __webpack_require__(/*! ./fading-foundation */ "./node_modules/@material/tab-indicator/fading-foundation.js");
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

/***/ "./node_modules/@material/tab-indicator/sliding-foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/tab-indicator/sliding-foundation.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-indicator/foundation.js");
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

/***/ "./node_modules/@material/tab-scroller/adapter.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/adapter.js ***!
  \********************************************************/
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

/***/ "./node_modules/@material/tab-scroller/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/constants.js ***!
  \**********************************************************/
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

/***/ "./node_modules/@material/tab-scroller/foundation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/tab-scroller/foundation.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-scroller/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-scroller/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rtl_scroller__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rtl_default_scroller__ = __webpack_require__(/*! ./rtl-default-scroller */ "./node_modules/@material/tab-scroller/rtl-default-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rtl_negative_scroller__ = __webpack_require__(/*! ./rtl-negative-scroller */ "./node_modules/@material/tab-scroller/rtl-negative-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rtl_reverse_scroller__ = __webpack_require__(/*! ./rtl-reverse-scroller */ "./node_modules/@material/tab-scroller/rtl-reverse-scroller.js");
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

/***/ "./node_modules/@material/tab-scroller/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/tab-scroller/index.js ***!
  \******************************************************/
/*! exports provided: MDCTabScroller, MDCTabScrollerFoundation, util */
/*! exports used: MDCTabScroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTabScroller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-scroller/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab-scroller/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/tab-scroller/util.js");
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

/***/ "./node_modules/@material/tab-scroller/rtl-default-scroller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-default-scroller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-scroller/adapter.js");
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

/***/ "./node_modules/@material/tab-scroller/rtl-negative-scroller.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-negative-scroller.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-scroller/adapter.js");
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

/***/ "./node_modules/@material/tab-scroller/rtl-reverse-scroller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-reverse-scroller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtl_scroller__ = __webpack_require__(/*! ./rtl-scroller */ "./node_modules/@material/tab-scroller/rtl-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-scroller/adapter.js");
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

/***/ "./node_modules/@material/tab-scroller/rtl-scroller.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/tab-scroller/rtl-scroller.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab-scroller/adapter.js");
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

/***/ "./node_modules/@material/tab-scroller/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/tab-scroller/util.js ***!
  \*****************************************************/
/*! exports provided: computeHorizontalScrollbarHeight, getMatchesProperty */
/*! exports used: computeHorizontalScrollbarHeight, getMatchesProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return computeHorizontalScrollbarHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMatchesProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/tab-scroller/constants.js");
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
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTab", function() { return MDCTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_tab_indicator_index__ = __webpack_require__(/*! @material/tab-indicator/index */ "./node_modules/@material/tab-indicator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/tab/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/tab/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTabFoundation", function() { return __WEBPACK_IMPORTED_MODULE_4__foundation__["a"]; });
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
    rippleFactory = (el, foundation) => new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"](el, foundation),
    tabIndicatorFactory = (el) => new __WEBPACK_IMPORTED_MODULE_2__material_tab_indicator_index__["a" /* MDCTabIndicator */](el)) {
    const rippleSurface = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.RIPPLE_SELECTOR);
    const rippleAdapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"].createAdapter(/** @type {!RippleCapableSurface} */ (this)), {
      addClass: (className) => rippleSurface.classList.add(className),
      removeClass: (className) => rippleSurface.classList.remove(className),
      updateCssVariable: (varName, value) => rippleSurface.style.setProperty(varName, value),
    });
    const rippleFoundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRippleFoundation"](rippleAdapter);
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

/***/ "./node_modules/@material/toolbar/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/toolbar/constants.js ***!
  \*****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/*! exports used: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const cssClasses = {
  FIXED: 'mdc-toolbar--fixed',
  FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
  FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
  TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
  FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
  FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
  FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  TITLE_SELECTOR: '.mdc-toolbar__title',
  ICON_SELECTOR: '.mdc-toolbar__icon',
  FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
  CHANGE_EVENT: 'MDCToolbar:change',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  MAX_TITLE_SIZE: 2.125,
  MIN_TITLE_SIZE: 1.25,
  TOOLBAR_ROW_HEIGHT: 64,
  TOOLBAR_ROW_MOBILE_HEIGHT: 56,
  TOOLBAR_MOBILE_BREAKPOINT: 600,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),

/***/ "./node_modules/@material/toolbar/foundation.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/toolbar/foundation.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/toolbar/constants.js");
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



class MDCToolbarFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
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
    return {
      hasClass: (/* className: string */) => /* boolean */ false,
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerScrollHandler: (/* handler: EventListener */) => {},
      deregisterScrollHandler: (/* handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      getViewportWidth: () => /* number */ 0,
      getViewportScrollY: () => /* number */ 0,
      getOffsetHeight: () => /* number */ 0,
      getFirstRowElementOffsetHeight: () => /* number */ 0,
      notifyChange: (/* evtData: {flexibleExpansionRatio: number} */) => {},
      setStyle: (/* property: string, value: string */) => {},
      setStyleForTitleElement: (/* property: string, value: string */) => {},
      setStyleForFlexibleRowElement: (/* property: string, value: string */) => {},
      setStyleForFixedAdjustElement: (/* property: string, value: string */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCToolbarFoundation.defaultAdapter, adapter));
    this.resizeHandler_ = () => this.checkRowHeight_();
    this.scrollHandler_ = () => this.updateToolbarStyles_();
    this.checkRowHeightFrame_ = 0;
    this.scrollFrame_ = 0;
    this.executedLastChange_ = false;

    this.calculations_ = {
      toolbarRowHeight: 0,
      // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
      toolbarRatio: 0, // The ratio of toolbar height to row height
      flexibleExpansionRatio: 0, // The ratio of flexible space height to row height
      maxTranslateYRatio: 0, // The ratio of max toolbar move up distance to row height
      scrollThresholdRatio: 0, // The ratio of max scrollTop that we should listen to to row height
      // Derived Heights based on the above key ratios.
      toolbarHeight: 0,
      flexibleExpansionHeight: 0, // Flexible row minus toolbar height (derived)
      maxTranslateYDistance: 0, // When toolbar only fix last row (derived)
      scrollThreshold: 0,
    };
    // Toolbar fixed behavior
    // If toolbar is fixed
    this.fixed_ = false;
    // If fixed is targeted only at the last row
    this.fixedLastrow_ = false;
    // Toolbar flexible behavior
    // If the first row is flexible
    this.hasFlexibleRow_ = false;
    // If use the default behavior
    this.useFlexDefaultBehavior_ = false;
  }

  init() {
    this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
    this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
    this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);
    if (this.hasFlexibleRow_) {
      this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
    }
    this.initKeyRatio_();
    this.setKeyHeights_();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.adapter_.registerScrollHandler(this.scrollHandler_);
  }

  destroy() {
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  }

  updateAdjustElementStyles() {
    if (this.fixed_) {
      this.adapter_.setStyleForFixedAdjustElement('margin-top', `${this.calculations_.toolbarHeight}px`);
    }
  }

  getFlexibleExpansionRatio_(scrollTop) {
    // To prevent division by zero when there is no flexibleExpansionHeight
    const delta = 0.0001;
    return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
  }

  checkRowHeight_() {
    cancelAnimationFrame(this.checkRowHeightFrame_);
    this.checkRowHeightFrame_ = requestAnimationFrame(() => this.setKeyHeights_());
  }

  setKeyHeights_() {
    const newToolbarRowHeight = this.getRowHeight_();
    if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
      this.calculations_.toolbarRowHeight = newToolbarRowHeight;
      this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.flexibleExpansionHeight =
        this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.maxTranslateYDistance =
        this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.scrollThreshold =
        this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
      this.updateAdjustElementStyles();
      this.updateToolbarStyles_();
    }
  }

  updateToolbarStyles_() {
    cancelAnimationFrame(this.scrollFrame_);
    this.scrollFrame_ = requestAnimationFrame(() => {
      const scrollTop = this.adapter_.getViewportScrollY();
      const hasScrolledOutOfThreshold = this.scrolledOutOfThreshold_(scrollTop);

      if (hasScrolledOutOfThreshold && this.executedLastChange_) {
        return;
      }

      const flexibleExpansionRatio = this.getFlexibleExpansionRatio_(scrollTop);

      this.updateToolbarFlexibleState_(flexibleExpansionRatio);
      if (this.fixedLastrow_) {
        this.updateToolbarFixedState_(scrollTop);
      }
      if (this.hasFlexibleRow_) {
        this.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
      }
      this.executedLastChange_ = hasScrolledOutOfThreshold;
      this.adapter_.notifyChange({flexibleExpansionRatio: flexibleExpansionRatio});
    });
  }

  scrolledOutOfThreshold_(scrollTop) {
    return scrollTop > this.calculations_.scrollThreshold;
  }

  initKeyRatio_() {
    const toolbarRowHeight = this.getRowHeight_();
    const firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
    this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
    this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
    this.calculations_.maxTranslateYRatio =
      this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
    this.calculations_.scrollThresholdRatio =
      (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
  }

  getRowHeight_() {
    const breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
    return this.adapter_.getViewportWidth() < breakpoint ?
      MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
  }

  updateToolbarFlexibleState_(flexibleExpansionRatio) {
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    if (flexibleExpansionRatio === 1) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    } else if (flexibleExpansionRatio === 0) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    }
  }

  updateToolbarFixedState_(scrollTop) {
    const translateDistance = Math.max(0, Math.min(
      scrollTop - this.calculations_.flexibleExpansionHeight,
      this.calculations_.maxTranslateYDistance));
    this.adapter_.setStyle('transform', `translateY(${-translateDistance}px)`);

    if (translateDistance === this.calculations_.maxTranslateYDistance) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    } else {
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    }
  }

  updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
    if (this.fixed_) {
      const height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
      this.adapter_.setStyleForFlexibleRowElement('height',
        `${height + this.calculations_.toolbarRowHeight}px`);
    }
    if (this.useFlexDefaultBehavior_) {
      this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
    }
  }

  updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
    const maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
    const minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
    const currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;

    this.adapter_.setStyleForTitleElement('font-size', `${currentTitleSize}rem`);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCToolbarFoundation;



/***/ }),

/***/ "./node_modules/@material/toolbar/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@material/toolbar/index.js ***!
  \*************************************************/
/*! exports provided: MDCToolbarFoundation, MDCToolbar */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(/*! @material/base/index */ "./node_modules/@material/base/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/toolbar/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCToolbarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
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








class MDCToolbar extends __WEBPACK_IMPORTED_MODULE_0__material_base_index__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCToolbar(root);
  }

  get firstRowElement_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.FIRST_ROW_SELECTOR);
  }

  get titleElement_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.TITLE_SELECTOR);
  }

  set fixedAdjustElement(fixedAdjustElement) {
    this.fixedAdjustElement_ = fixedAdjustElement;
    this.foundation_.updateAdjustElementStyles();
  }

  get fixedAdjustElement() {
    return this.fixedAdjustElement_;
  }

  initialize() {
    this.ripples_ = [].map.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ICON_SELECTOR), (icon) => {
      const ripple = __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"].attachTo(icon);
      ripple.unbounded = true;
      return ripple;
    });
  }

  destroy() {
    this.ripples_.forEach((ripple) => {
      ripple.destroy();
    });
    super.destroy();
  }


  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      hasClass: (className) => this.root_.classList.contains(className),
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      registerScrollHandler: (handler) => window.addEventListener('scroll', handler),
      deregisterScrollHandler: (handler) => window.removeEventListener('scroll', handler),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getViewportWidth: () => window.innerWidth,
      getViewportScrollY: () => window.pageYOffset,
      getOffsetHeight: () => this.root_.offsetHeight,
      getFirstRowElementOffsetHeight: () => this.firstRowElement_.offsetHeight,
      notifyChange: (evtData) => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData),
      setStyle: (property, value) => this.root_.style.setProperty(property, value),
      setStyleForTitleElement: (property, value) => this.titleElement_.style.setProperty(property, value),
      setStyleForFlexibleRowElement: (property, value) => this.firstRowElement_.style.setProperty(property, value),
      setStyleForFixedAdjustElement: (property, value) => {
        if (this.fixedAdjustElement) {
          this.fixedAdjustElement.style.setProperty(property, value);
        }
      },
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["MDCToolbar"] = MDCToolbar;



/***/ }),

/***/ "./node_modules/@material/top-app-bar/adapter.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/top-app-bar/adapter.js ***!
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
 * Adapter for MDC Top App Bar
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Top App Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTopAppBarAdapter {
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
   * Returns true if the root Element contains the given class.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /**
   * Sets the specified inline style property on the root Element to the given value.
   * @param {string} property
   * @param {string} value
   */
  setStyle(property, value) {}

  /**
   * Gets the height of the top app bar.
   * @return {number}
   */
  getTopAppBarHeight() {}

  /**
   * Registers an event handler on the navigation icon element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerNavigationIconInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the navigation icon element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterNavigationIconInteractionHandler(type, handler) {}

  /**
   * Emits an event when the navigation icon is clicked.
   */
  notifyNavigationIconClicked() {}

  /** @param {function(!Event)} handler */
  registerScrollHandler(handler) {}

  /** @param {function(!Event)} handler */
  deregisterScrollHandler(handler) {}

  /** @param {function(!Event)} handler */
  registerResizeHandler(handler) {}

  /** @param {function(!Event)} handler */
  deregisterResizeHandler(handler) {}

  /** @return {number} */
  getViewportScrollY() {}

  /** @return {number} */
  getTotalActionItems() {}
}

/* unused harmony default export */ var _unused_webpack_default_export = (MDCTopAppBarAdapter);


/***/ }),

/***/ "./node_modules/@material/top-app-bar/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/constants.js ***!
  \*********************************************************/
/*! exports provided: strings, cssClasses, numbers */
/*! exports used: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
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
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
};

/** @enum {number} */
const numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128,
};

/** @enum {string} */
const strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title',
};




/***/ }),

/***/ "./node_modules/@material/top-app-bar/fixed/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/fixed/foundation.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ../adapter */ "./node_modules/@material/top-app-bar/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
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
 * @extends {MDCTopAppBarFoundation<!MDCFixedTopAppBarFoundation>}
 * @final
 */
class MDCFixedTopAppBarFoundation extends __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */] {
  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  constructor(adapter) {
    super(adapter);
    /** State variable for the previous scroll iteration top app bar state */
    this.wasScrolled_ = false;

    this.scrollHandler_ = () => this.fixedScrollHandler_();
  }

  init() {
    super.init();
    this.adapter_.registerScrollHandler(this.scrollHandler_);
  }

  destroy() {
    super.destroy();
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  }

  /**
   * Scroll handler for applying/removing the modifier class
   * on the fixed top app bar.
   */
  fixedScrollHandler_() {
    const currentScroll = this.adapter_.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.wasScrolled_) {
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = false;
      }
    } else {
      if (!this.wasScrolled_) {
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = true;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCFixedTopAppBarFoundation);


/***/ }),

/***/ "./node_modules/@material/top-app-bar/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/top-app-bar/foundation.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/top-app-bar/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
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
 * @extends {MDCFoundation<!MDCTopAppBarAdapter>}
 */
class MDCTopAppBarBaseFoundation extends __WEBPACK_IMPORTED_MODULE_2__material_base_foundation__["a" /* default */] {
  /** @return enum {string} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */];
  }

  /** @return enum {string} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */];
  }

  /** @return enum {number} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* numbers */];
  }

  /**
   * {@see MDCTopAppBarAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTopAppBarAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTopAppBarAdapter} */ ({
      hasClass: (/* className: string */) => {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      setStyle: (/* property: string, value: string */) => {},
      getTopAppBarHeight: () => {},
      registerNavigationIconInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterNavigationIconInteractionHandler: (/* type: string, handler: EventListener */) => {},
      notifyNavigationIconClicked: () => {},
      registerScrollHandler: (/* handler: EventListener */) => {},
      deregisterScrollHandler: (/* handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      getViewportScrollY: () => /* number */ 0,
      getTotalActionItems: () => /* number */ 0,
    });
  }

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  constructor(/** @type {!MDCTopAppBarAdapter} */ adapter) {
    super(Object.assign(MDCTopAppBarBaseFoundation.defaultAdapter, adapter));

    this.navClickHandler_ = () => this.adapter_.notifyNavigationIconClicked();
  }

  init() {
    this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
  }

  destroy() {
    this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTopAppBarBaseFoundation);


/***/ }),

/***/ "./node_modules/@material/top-app-bar/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/top-app-bar/index.js ***!
  \*****************************************************/
/*! exports provided: MDCTopAppBar, MDCTopAppBarBaseFoundation, MDCTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCShortTopAppBarFoundation */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBar", function() { return MDCTopAppBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/top-app-bar/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__ = __webpack_require__(/*! @material/ripple/index */ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fixed_foundation__ = __webpack_require__(/*! ./fixed/foundation */ "./node_modules/@material/top-app-bar/fixed/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__short_foundation__ = __webpack_require__(/*! ./short/foundation */ "./node_modules/@material/top-app-bar/short/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__standard_foundation__ = __webpack_require__(/*! ./standard/foundation */ "./node_modules/@material/top-app-bar/standard/foundation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarBaseFoundation", function() { return __WEBPACK_IMPORTED_MODULE_4__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_7__standard_foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFixedTopAppBarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_5__fixed_foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCShortTopAppBarFoundation", function() { return __WEBPACK_IMPORTED_MODULE_6__short_foundation__["a"]; });
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
 * @extends {MDCComponent<!MDCTopAppBarBaseFoundation>}
 * @final
 */
class MDCTopAppBar extends __WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* default */] {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /** @private {?Element} */
    this.navIcon_;
    /** @type {?Array<MDCRipple>} */
    this.iconRipples_;
  }

  initialize(
    rippleFactory = (el) => __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["a" /* MDCRipple */].attachTo(el)) {
    this.navIcon_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].NAVIGATION_ICON_SELECTOR);

    // Get all icons in the toolbar and instantiate the ripples
    const icons = [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ACTION_ITEM_SELECTOR));
    if (this.navIcon_) {
      icons.push(this.navIcon_);
    }

    this.iconRipples_ = icons.map((icon) => {
      const ripple = rippleFactory(icon);
      ripple.unbounded = true;
      return ripple;
    });
  }

  destroy() {
    this.iconRipples_.forEach((iconRipple) => iconRipple.destroy());
    super.destroy();
  }

  /**
   * @param {!Element} root
   * @return {!MDCTopAppBar}
   */
  static attachTo(root) {
    return new MDCTopAppBar(root);
  }

  /**
   * @return {!MDCTopAppBarBaseFoundation}
   */
  getDefaultFoundation() {
    /** @type {!MDCTopAppBarAdapter} */
    const adapter = /** @type {!MDCTopAppBarAdapter} */ (Object.assign({
      hasClass: (className) => this.root_.classList.contains(className),
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setStyle: (property, value) => this.root_.style.setProperty(property, value),
      getTopAppBarHeight: () => this.root_.clientHeight,
      registerNavigationIconInteractionHandler: (evtType, handler) => {
        if (this.navIcon_) {
          this.navIcon_.addEventListener(evtType, handler);
        }
      },
      deregisterNavigationIconInteractionHandler: (evtType, handler) => {
        if (this.navIcon_) {
          this.navIcon_.removeEventListener(evtType, handler);
        }
      },
      notifyNavigationIconClicked: () => {
        this.emit(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].NAVIGATION_EVENT, {});
      },
      registerScrollHandler: (handler) => window.addEventListener('scroll', handler),
      deregisterScrollHandler: (handler) => window.removeEventListener('scroll', handler),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getViewportScrollY: () => window.pageYOffset,
      getTotalActionItems: () =>
        this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].ACTION_ITEM_SELECTOR).length,
    })
    );

    /** @type {!MDCTopAppBarBaseFoundation} */
    let foundation;
    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].SHORT_CLASS)) {
      foundation = new __WEBPACK_IMPORTED_MODULE_6__short_foundation__["a" /* default */](adapter);
    } else if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].FIXED_CLASS)) {
      foundation = new __WEBPACK_IMPORTED_MODULE_5__fixed_foundation__["a" /* default */](adapter);
    } else {
      foundation = new __WEBPACK_IMPORTED_MODULE_7__standard_foundation__["a" /* default */](adapter);
    }

    return foundation;
  }
}




/***/ }),

/***/ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/adapter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/node_modules/@material/ripple/adapter.js ***!
  \*************************************************************************************/
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

/***/ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/constants.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/node_modules/@material/ripple/constants.js ***!
  \***************************************************************************************/
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

/***/ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/foundation.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/node_modules/@material/ripple/foundation.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/util.js");
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

/***/ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/node_modules/@material/ripple/index.js ***!
  \***********************************************************************************/
/*! exports provided: MDCRipple, MDCRippleFoundation, RippleCapableSurface, util */
/*! exports used: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* unused harmony export RippleCapableSurface */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(/*! ./adapter */ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/util.js");
/* unused harmony reexport MDCRippleFoundation */
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

/***/ "./node_modules/@material/top-app-bar/node_modules/@material/ripple/util.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/node_modules/@material/ripple/util.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/@material/top-app-bar/short/foundation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/short/foundation.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(/*! ../adapter */ "./node_modules/@material/top-app-bar/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
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
 * @extends {MDCTopAppBarBaseFoundation<!MDCShortTopAppBarFoundation>}
 * @final
 */
class MDCShortTopAppBarFoundation extends __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */] {
  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  constructor(adapter) {
    super(adapter);
    // State variable for the current top app bar state
    this.isCollapsed = false;

    this.scrollHandler_ = () => this.shortAppBarScrollHandler_();
  }

  init() {
    super.init();
    const isAlwaysCollapsed = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SHORT_COLLAPSED_CLASS);

    if (this.adapter_.getTotalActionItems() > 0) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SHORT_HAS_ACTION_ITEM_CLASS);
    }

    if (!isAlwaysCollapsed) {
      this.adapter_.registerScrollHandler(this.scrollHandler_);
      this.shortAppBarScrollHandler_();
    }
  }

  destroy() {
    super.destroy();
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  }


  /**
   * Scroll handler for applying/removing the collapsed modifier class
   * on the short top app bar.
   * @private
   */
  shortAppBarScrollHandler_() {
    const currentScroll = this.adapter_.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.isCollapsed) {
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SHORT_COLLAPSED_CLASS);
        this.isCollapsed = false;
      }
    } else {
      if (!this.isCollapsed) {
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SHORT_COLLAPSED_CLASS);
        this.isCollapsed = true;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCShortTopAppBarFoundation);


/***/ }),

/***/ "./node_modules/@material/top-app-bar/standard/foundation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/top-app-bar/standard/foundation.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(/*! ../adapter */ "./node_modules/@material/top-app-bar/adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(/*! ../foundation */ "./node_modules/@material/top-app-bar/foundation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(/*! ../constants */ "./node_modules/@material/top-app-bar/constants.js");
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





const INITIAL_VALUE = 0;
/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCTopAppBarFoundation>}
 * @final
 */
class MDCTopAppBarFoundation extends __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */] {
  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  constructor(adapter) {
    super(adapter);
    /**
     * Used for diffs of current scroll position vs previous scroll position
     * @private {number}
     */
    this.lastScrollPosition_ = this.adapter_.getViewportScrollY();

    /**
     * Used to verify when the top app bar is completely showing or completely hidden
     * @private {number}
     */
    this.topAppBarHeight_ = this.adapter_.getTopAppBarHeight();

    /**
     * wasDocked_ is used to indicate if the top app bar was docked in the previous
     * scroll handler iteration.
     * @private {boolean}
     */
    this.wasDocked_ = true;

    /**
     * isDockedShowing_ is used to indicate if the top app bar is docked in the fully
     * shown position.
     * @private {boolean}
     */
    this.isDockedShowing_ = true;

    /**
     * Variable for current scroll position of the top app bar
     * @private {number}
     */
    this.currentAppBarOffsetTop_ = 0;

    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     * @private {boolean} */
    this.isCurrentlyBeingResized_ = false;

    /**
     * The timeout that's used to throttle the resize events
     * @private {number}
     */
    this.resizeThrottleId_ = INITIAL_VALUE;

    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     * @private {number}
     */
    this.resizeDebounceId_ = INITIAL_VALUE;

    this.scrollHandler_ = () => this.topAppBarScrollHandler_();
    this.resizeHandler_ = () => this.topAppBarResizeHandler_();
  }

  init() {
    super.init();
    this.adapter_.registerScrollHandler(this.scrollHandler_);
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }

  destroy() {
    super.destroy();
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    this.adapter_.setStyle('top', '');
  }

  /**
   * Function to determine if the DOM needs to update.
   * @return {boolean}
   * @private
   */
  checkForUpdate_() {
    const offscreenBoundaryTop = -this.topAppBarHeight_;
    const hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
    const hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
    const partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;

    // If it's partially showing, it can't be docked.
    if (partiallyShowing) {
      this.wasDocked_ = false;
    } else {
      // Not previously docked and not partially showing, it's now docked.
      if (!this.wasDocked_) {
        this.wasDocked_ = true;
        return true;
      } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
        this.isDockedShowing_ = hasAnyPixelsOnscreen;
        return true;
      }
    }

    return partiallyShowing;
  }

  /**
   * Function to move the top app bar if needed.
   * @private
   */
  moveTopAppBar_() {
    if (this.checkForUpdate_()) {
      // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
      // so the top app bar doesn't show if the window resizes and the new height > the old height.
      let offset = this.currentAppBarOffsetTop_;
      if (Math.abs(offset) >= this.topAppBarHeight_) {
        offset = -__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].MAX_TOP_APP_BAR_HEIGHT;
      }

      this.adapter_.setStyle('top', offset + 'px');
    }
  }

  /**
   * Scroll handler for the default scroll behavior of the top app bar.
   * @private
   */
  topAppBarScrollHandler_() {
    const currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
    const diff = currentScrollPosition - this.lastScrollPosition_;
    this.lastScrollPosition_ = currentScrollPosition;

    // If the window is being resized the lastScrollPosition_ needs to be updated but the
    // current scroll of the top app bar should stay in the same position.
    if (!this.isCurrentlyBeingResized_) {
      this.currentAppBarOffsetTop_ -= diff;

      if (this.currentAppBarOffsetTop_ > 0) {
        this.currentAppBarOffsetTop_ = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
        this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
      }

      this.moveTopAppBar_();
    }
  }

  /**
   * Top app bar resize handler that throttle/debounce functions that execute updates.
   * @private
   */
  topAppBarResizeHandler_() {
    // Throttle resize events 10 p/s
    if (!this.resizeThrottleId_) {
      this.resizeThrottleId_ = setTimeout(() => {
        this.resizeThrottleId_ = INITIAL_VALUE;
        this.throttledResizeHandler_();
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    this.isCurrentlyBeingResized_ = true;

    if (this.resizeDebounceId_) {
      clearTimeout(this.resizeDebounceId_);
    }

    this.resizeDebounceId_ = setTimeout(() => {
      this.topAppBarScrollHandler_();
      this.isCurrentlyBeingResized_ = false;
      this.resizeDebounceId_ = INITIAL_VALUE;
    }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  }

  /**
   * Throttled function that updates the top app bar scrolled values if the
   * top app bar height changes.
   * @private
   */
  throttledResizeHandler_() {
    const currentHeight = this.adapter_.getTopAppBarHeight();
    if (this.topAppBarHeight_ !== currentHeight) {
      this.wasDocked_ = false;

      // Since the top app bar has a different height depending on the screen width, this
      // will ensure that the top app bar remains in the correct location if
      // completely hidden and a resize makes the top app bar a different height.
      this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
      this.topAppBarHeight_ = currentHeight;
    }
    this.topAppBarScrollHandler_();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MDCTopAppBarFoundation);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQ5MmY0NmE5NTdmY2EwYWIwOTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9mYWRpbmctZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL3NsaWRpbmctZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1kZWZhdWx0LXNjcm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1uZWdhdGl2ZS1zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtcmV2ZXJzZS1zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9vbGJhci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b29sYmFyL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b29sYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2ZpeGVkL2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL3Nob3J0L2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9zdGFuZGFyZC9mb3VuZGF0aW9uLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyaXBwbGUiLCJNRENSaXBwbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpY29uQnV0dG9uUmlwcGxlIiwidW5ib3VuZGVkIiwidG9wQXBwQmFyRWxlbWVudCIsInRvcEFwcEJhciIsIk1EQ1RvcEFwcEJhciIsInRhYiIsIk1EQ1RhYiIsInRhYkJhciIsIk1EQ1RhYkJhciIsInRvb2xiYXIiLCJNRENUb29sYmFyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtB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Qy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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cHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTQ5MmY0NmE5NTdmY2EwYWIwOTYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9hc3NldHMvY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xyXG5cclxuaW1wb3J0IHtNRENSaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUnO1xyXG5pbXBvcnQge01EQ1RvcEFwcEJhcn0gZnJvbSAnQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2luZGV4JztcclxuaW1wb3J0IHtNRENUYWJ9IGZyb20gJ0BtYXRlcmlhbC90YWInO1xyXG5pbXBvcnQge01EQ1RhYkJhcn0gZnJvbSAnQG1hdGVyaWFsL3RhYi1iYXInO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vLWJ1dHRvbicpKTtcclxuY29uc3QgaWNvbkJ1dHRvblJpcHBsZSA9IG5ldyBNRENSaXBwbGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1pY29uLWJ1dHRvbicpKTtcclxuaWNvbkJ1dHRvblJpcHBsZS51bmJvdW5kZWQgPSB0cnVlO1xyXG5cclxuY29uc3QgdG9wQXBwQmFyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGMtdG9wLWFwcC1iYXInKTtcclxuY29uc3QgdG9wQXBwQmFyID0gbmV3IE1EQ1RvcEFwcEJhcih0b3BBcHBCYXJFbGVtZW50KTtcclxuY29uc3QgdGFiID0gbmV3IE1EQ1RhYihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLXRhYicpKTtcclxuXHJcblxyXG5cclxuY29uc3QgdGFiQmFyID0gbmV3IE1EQ1RhYkJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLXRhYi1iYXInKSk7XHJcblxyXG5pbXBvcnQge01EQ1Rvb2xiYXJ9IGZyb20gJ0BtYXRlcmlhbC90b29sYmFyJztcclxuXHJcbmNvbnN0IHRvb2xiYXIgPSBuZXcgTURDVG9vbGJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRjLXRvb2xiYXInKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2FwcC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHtNRENGb3VuZGF0aW9uLCBNRENDb21wb25lbnR9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgUmlwcGxlLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIENTUyB2YXJpYWJsZXNcbiAqIC0gcG9zaXRpb25cbiAqIC0gZGltZW5zaW9uc1xuICogLSBzY3JvbGwgcG9zaXRpb25cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqIC0gdW5ib3VuZGVkLCBhY3RpdmUgYW5kIGRpc2FibGVkIHN0YXRlc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDUmlwcGxlQWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBicm93c2VyU3VwcG9ydHNDc3NWYXJzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNVbmJvdW5kZWQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VBY3RpdmUoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VEaXNhYmxlZCgpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldCAqL1xuICBjb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWVcbiAgICogQHBhcmFtIHs/bnVtYmVyfHN0cmluZ30gdmFsdWVcbiAgICovXG4gIHVwZGF0ZUNzc1ZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshQ2xpZW50UmVjdH0gKi9cbiAgY29tcHV0ZUJvdW5kaW5nUmVjdCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19ICovXG4gIGdldFdpbmRvd1BhZ2VPZmZzZXQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbiAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxuICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbn07XG5cbmNvbnN0IG51bWJlcnMgPSB7XG4gIFBBRERJTkc6IDEwLFxuICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS10cmFuc2xhdGUtZHVyYXRpb24gKGkuZS4gYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS1mYWRlLW91dC1kdXJhdGlvbiAoaS5lLiBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBUQVBfREVMQVlfTVM6IDMwMCwgLy8gRGVsYXkgYmV0d2VlbiB0b3VjaCBhbmQgc2ltdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Z2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzQWN0aXZhdGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgYWN0aXZhdGlvbkV2ZW50OiBFdmVudCxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZm9jdXM6IGZ1bmN0aW9uKCksXG4gKiAgIGJsdXI6IGZ1bmN0aW9uKClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lcnNUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHg6IG51bWJlcixcbiAqICAgeTogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgUG9pbnRUeXBlO1xuXG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxuY29uc3QgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93biddO1xuXG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbmNvbnN0IFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCddO1xuXG4vLyBUcmFja3MgYWN0aXZhdGlvbnMgdGhhdCBoYXZlIG9jY3VycmVkIG9uIHRoZSBjdXJyZW50IGZyYW1lLCB0byBhdm9pZCBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG4vKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqL1xubGV0IGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDUmlwcGxlQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gLyogYm9vbGVhbiAtIGNhY2hlZCAqLyB7fSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0ICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YXJOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyB7fSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IC8qIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gKi8ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUNsaWVudFJlY3R9ICovXG4gICAgdGhpcy5mcmFtZV8gPSAvKiogQHR5cGUgeyFDbGllbnRSZWN0fSAqLyAoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KX0gKi9cbiAgICB0aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5hY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5kZWFjdGl2YXRlXyhlKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oP0V2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbig/RXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7P0V2ZW50fSAqL1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogbnVsbCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcblxuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB0aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCkge1xuICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZW1vdmVDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7c3RyaW5nc30gPSBNRENSaXBwbGVGb3VuZGF0aW9uO1xuICAgIE9iamVjdC5rZXlzKHN0cmluZ3MpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChrLmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHN0cmluZ3Nba10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7P0V2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZV8oZSkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICBjb25zdCBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgIGNvbnN0IGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZSAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBlLnR5cGU7XG4gICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBlID09PSBudWxsO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IChcbiAgICAgIGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc0FjdGl2YXRlZENoaWxkID1cbiAgICAgIGUgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZSgodGFyZ2V0KSA9PiB0aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSk7XG4gICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZSkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHs/RXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpIHtcbiAgICByZXR1cm4gKGUgJiYgZS50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHs/RXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWN0aXZhdGUoZXZlbnQgPSBudWxsKSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSBudWxsLCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gez9FdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZV8oZSkge1xuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IC8qKiBAdHlwZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovIChPYmplY3QuYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpKTtcblxuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgIGNvbnN0IGV2dE9iamVjdCA9IG51bGw7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhldnRPYmplY3QsIHN0YXRlKSk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oZSwgc3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7P0V2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGRlYWN0aXZhdGUoZXZlbnQgPSBudWxsKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcGFyYW0geyFBY3RpdmF0aW9uU3RhdGVUeXBlfSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlRGVhY3RpdmF0aW9uXyhlLCB7d2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZX0pIHtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcblxuICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICBjb25zdCBnZXRCb3VuZGVkUmFkaXVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgfTtcblxuICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcblxuICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEU7XG4gICAgdGhpcy5mZ1NjYWxlXyA9IHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuXG4gICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHVwZGF0ZUxheW91dENzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFZBUl9GR19TSVpFLCBWQVJfTEVGVCwgVkFSX1RPUCwgVkFSX0ZHX1NDQUxFLFxuICAgIH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCBgJHt0aGlzLmluaXRpYWxTaXplX31weGApO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy50b3B9cHhgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0VW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIGNvbnN0IHtVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDUmlwcGxlRm91bmRhdGlvbj5cbiAqL1xuY2xhc3MgTURDUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7e2lzVW5ib3VuZGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpfT19IG9wdGlvbnNcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZX1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290LCB7aXNVbmJvdW5kZWQgPSB1bmRlZmluZWR9ID0ge30pIHtcbiAgICBjb25zdCByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgIGlmIChpc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGUudW5ib3VuZGVkID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaXNVbmJvdW5kZWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVBZGFwdGVyKGluc3RhbmNlKSB7XG4gICAgY29uc3QgTUFUQ0hFUyA9IHV0aWwuZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpLFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IGluc3RhbmNlLnVuYm91bmRlZCxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gaW5zdGFuY2Uucm9vdF9bTUFUQ0hFU10oJzphY3RpdmUnKSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiBpbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gKHt4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldH0pLFxuICAgIH07XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldCB1bmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VW5ib3VuZGVkXygpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZCh0aGlzLnVuYm91bmRlZF8pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVGb3VuZGF0aW9ufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gdGhpcy5yb290Xy5kYXRhc2V0O1xuICB9XG59XG5cbi8qKlxuICogU2VlIE1hdGVyaWFsIERlc2lnbiBzcGVjIGZvciBtb3JlIGRldGFpbHMgb24gd2hlbiB0byB1c2UgcmlwcGxlcy5cbiAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vY2hvcmVvZ3JhcGh5Lmh0bWwjY2hvcmVvZ3JhcGh5LWNyZWF0aW9uXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIFJpcHBsZUNhcGFibGVTdXJmYWNlIHt9XG5cbi8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5yb290XztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGJsZWVkcyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnVuYm91bmRlZDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGlzIGF0dGFjaGVkIHRvIGEgZGlzYWJsZWQgY29tcG9uZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUuZGlzYWJsZWQ7XG5cbmV4cG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZSwgdXRpbH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzUGFzc2l2ZV87XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICBjb25zdCBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGNvbnN0IGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgbm9kZS5yZW1vdmUoKTtcbiAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG5cbiAgY29uc3Qgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSB3aW5kb3dPYmouQ1NTICYmIHR5cGVvZiB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICBjb25zdCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpXG4gICk7XG5cbiAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICB9IGVsc2Uge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG4gIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbn1cblxuLy9cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbiAqIEBwYXJhbSB7IVdpbmRvdz19IGdsb2JhbE9ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHtwYXNzaXZlOiBib29sZWFufX1cbiAqL1xuZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8ge3Bhc3NpdmU6IHRydWV9IDogZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7IUFycmF5PHN0cmluZz59XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICByZXR1cm4gW1xuICAgICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InLCAnbWF0Y2hlcycsXG4gIF0uZmlsdGVyKChwKSA9PiBwIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKS5wb3AoKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZcbiAqIEBwYXJhbSB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gcGFnZU9mZnNldFxuICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gIGNvbnN0IHt4LCB5fSA9IHBhZ2VPZmZzZXQ7XG4gIGNvbnN0IGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcblxuICBsZXQgbm9ybWFsaXplZFg7XG4gIGxldCBub3JtYWxpemVkWTtcbiAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICBpZiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIG5vcm1hbGl6ZWRYID0gZXYucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfVxuXG4gIHJldHVybiB7eDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZfTtcbn1cblxuZXhwb3J0IHtzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlLCBnZXRNYXRjaGVzUHJvcGVydHksIGdldE5vcm1hbGl6ZWRFdmVudENvb3Jkc307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJ0BtYXRlcmlhbC90YWIvYWRhcHRlcic7XG5pbXBvcnQge01EQ1RhYn0gZnJvbSAnQG1hdGVyaWFsL3RhYi9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBCYXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEJhciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiQmFyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgcG9zaXRpb24gdG8gc2Nyb2xsIHRvXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBieSB0aGUgZ2l2ZW4gYW1vdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYSW5jcmVtZW50IFRoZSBhbW91bnQgdG8gaW5jcmVtZW50IHNjcm9sbFxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3QgZWxlbWVudCdzIG9mZnNldFdpZHRoXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgVGFiIEJhciBsYW5ndWFnZSBkaXJlY3Rpb24gaXMgUlRMXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1JUTCgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB3aXRoIHRoZSBnaXZlbiBjbGllbnQgcmVjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gYWN0aXZhdGVcbiAgICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdCBUaGUgY2xpZW50IHJlY3Qgb2YgdGhlIHByZXZpb3VzbHkgYWN0aXZlIFRhYiBJbmRpY2F0b3JcbiAgICovXG4gIGFjdGl2YXRlVGFiQXRJbmRleChpbmRleCwgY2xpZW50UmVjdCkge31cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIGFjdGl2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlVGFiQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xpZW50IHJlY3Qgb2YgdGhlIHRhYidzIGluZGljYXRvclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGFiIGRpbWVuc2lvbnMgb2YgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEByZXR1cm4geyFNRENUYWJEaW1lbnNpb25zfVxuICAgKi9cbiAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3RcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0VGFiTGlzdExlbmd0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBhY3RpdmUgdGFiXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFjdGl2ZVRhYkluZGV4KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIHRhYlxuICAgKiBAcGFyYW0geyFNRENUYWJ9IHRhYiBUaGUgdGFiIHdob3NlIGluZGV4IHRvIGRldGVybWluXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEluZGV4T2ZUYWIodGFiKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgTURDVGFiQmFyOmFjdGl2YXRlZCBldmVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBhY3RpdmF0ZWQgdGFiXG4gICAqL1xuICBub3RpZnlUYWJBY3RpdmF0ZWQoaW5kZXgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkJhckFkYXB0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVEFCX0FDVElWQVRFRF9FVkVOVDogJ01EQ1RhYkJhcjphY3RpdmF0ZWQnLFxuICBUQUJfU0NST0xMRVJfU0VMRUNUT1I6ICcubWRjLXRhYi1zY3JvbGxlcicsXG4gIFRBQl9TRUxFQ1RPUjogJy5tZGMtdGFiJyxcbiAgRU5EX0tFWTogJ0VuZCcsXG4gIEhPTUVfS0VZOiAnSG9tZScsXG4gIEFSUk9XX0xFRlRfS0VZOiAnQXJyb3dMZWZ0JyxcbiAgQVJST1dfUklHSFRfS0VZOiAnQXJyb3dSaWdodCcsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIEVYVFJBX1NDUk9MTF9BTU9VTlQ6IDIwLFxuICBFTkRfS0VZQ09ERTogMzUsXG4gIEhPTUVfS0VZQ09ERTogMzYsXG4gIEFSUk9XX0xFRlRfS0VZQ09ERTogMzcsXG4gIEFSUk9XX1JJR0hUX0tFWUNPREU6IDM5LFxufTtcblxuZXhwb3J0IHtcbiAgbnVtYmVycyxcbiAgc3RyaW5ncyxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5cbmltcG9ydCB7c3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IE1EQ1RhYkJhckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBNRENUYWJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWIvZm91bmRhdGlvbic7XG5pbXBvcnQge01EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJ0BtYXRlcmlhbC90YWIvYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQHR5cGUge1NldDxzdHJpbmc+fVxuICovXG5jb25zdCBBQ0NFUFRBQkxFX0tFWVMgPSBuZXcgU2V0KCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgU2V0IHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkFSUk9XX0xFRlRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkVORF9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkhPTUVfS0VZKTtcblxuLyoqXG4gKiBAdHlwZSB7TWFwPG51bWJlciwgc3RyaW5nPn1cbiAqL1xuY29uc3QgS0VZQ09ERV9NQVAgPSBuZXcgTWFwKCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgTWFwIHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuSE9NRV9LRVlDT0RFLCBzdHJpbmdzLkhPTUVfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkVORF9LRVlDT0RFLCBzdHJpbmdzLkVORF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuQVJST1dfTEVGVF9LRVlDT0RFLCBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkFSUk9XX1JJR0hUX0tFWUNPREUsIHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiQmFyQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiQmFyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge251bWJlcn0gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiQmFyQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJCYXJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiQmFyQWRhcHRlcn0gKi8gKHtcbiAgICAgIHNjcm9sbFRvOiAoKSA9PiB7fSxcbiAgICAgIGluY3JlbWVudFNjcm9sbDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxDb250ZW50V2lkdGg6ICgpID0+IHt9LFxuICAgICAgZ2V0T2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgaXNSVEw6ICgpID0+IHt9LFxuICAgICAgYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldFRhYkRpbWVuc2lvbnNBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldEFjdGl2ZVRhYkluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldEluZGV4T2ZUYWI6ICgpID0+IHt9LFxuICAgICAgZ2V0VGFiTGlzdExlbmd0aDogKCkgPT4ge30sXG4gICAgICBub3RpZnlUYWJBY3RpdmF0ZWQ6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RhYkJhckFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICogKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGFiQmFyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0QWN0aXZlVGFiSW5kZXgoKTtcbiAgICB0aGlzLnNjcm9sbEludG9WaWV3KGFjdGl2ZUluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBhY3RpdmF0ZVRhYihpbmRleCkge1xuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZlSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEFjdGl2ZVRhYkluZGV4KCk7XG4gICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVUYWJBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVUYWJBdEluZGV4KGluZGV4LCB0aGlzLmFkYXB0ZXJfLmdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpKTtcbiAgICB0aGlzLnNjcm9sbEludG9WaWV3KGluZGV4KTtcblxuICAgIC8vIE9ubHkgbm90aWZ5IHRoZSB0YWIgYWN0aXZhdGlvbiBpZiB0aGUgaW5kZXggaXMgZGlmZmVyZW50IHRoYW4gdGhlIHByZXZpb3VzbHkgYWN0aXZlIGluZGV4XG4gICAgaWYgKGluZGV4ICE9PSBwcmV2aW91c0FjdGl2ZUluZGV4KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeVRhYkFjdGl2YXRlZChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGtleWRvd24gZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlS2V5RG93bihldnQpIHtcbiAgICAvLyBHZXQgdGhlIGtleSBmcm9tIHRoZSBldmVudFxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5RnJvbUV2ZW50XyhldnQpO1xuXG4gICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgZXZlbnQga2V5IGlzbid0IG9uZSBvZiB0aGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBrZXlzXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hY3RpdmF0ZVRhYkZyb21LZXlfKGtleSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgTURDVGFiOmludGVyYWN0ZWQgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVGFiSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgdGhpcy5hY3RpdmF0ZVRhYih0aGlzLmFkYXB0ZXJfLmdldEluZGV4T2ZUYWIoZXZ0LmRldGFpbC50YWIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlld1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIHRhYiBpbmRleCB0byBtYWtlIHZpc2libGVcbiAgICovXG4gIHNjcm9sbEludG9WaWV3KGluZGV4KSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIHJhbmdlXG4gICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgc2Nyb2xsIHRvIDAgaWYgc2Nyb2xsaW5nIHRvIHRoZSAwdGggaW5kZXhcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLnNjcm9sbFRvKDApO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyBzY3JvbGwgdG8gdGhlIG1heCB2YWx1ZSBpZiBzY3JvbGxpbmcgdG8gdGhlIE50aCBpbmRleFxuICAgIC8vIE1EQ1RhYlNjcm9sbGVyLnNjcm9sbFRvKCkgd2lsbCBuZXZlciBzY3JvbGwgcGFzdCB0aGUgbWF4IHBvc3NpYmxlIHZhbHVlXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLmFkYXB0ZXJfLmdldFRhYkxpc3RMZW5ndGgoKSAtIDEpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLnNjcm9sbFRvKHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxJbnRvVmlld1JUTF8oaW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdfKGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZCBmb3IgYWN0aXZhdGluZyBhIHRhYiBmcm9tIGEga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIG5hbWUgb2YgdGhlIGtleVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVUYWJGcm9tS2V5XyhrZXkpIHtcbiAgICBjb25zdCBpc1JUTCA9IHRoaXMuaXNSVExfKCk7XG4gICAgY29uc3QgbWF4VGFiSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldFRhYkxpc3RMZW5ndGgoKSAtIDE7XG4gICAgY29uc3Qgc2hvdWxkR29Ub0VuZCA9IGtleSA9PT0gc3RyaW5ncy5FTkRfS0VZO1xuICAgIGNvbnN0IHNob3VsZERlY3JlbWVudCA9IGtleSA9PT0gc3RyaW5ncy5BUlJPV19MRUZUX0tFWSAmJiAhaXNSVEwgfHwga2V5ID09PSBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSAmJiBpc1JUTDtcbiAgICBjb25zdCBzaG91bGRJbmNyZW1lbnQgPSBrZXkgPT09IHN0cmluZ3MuQVJST1dfUklHSFRfS0VZICYmICFpc1JUTCB8fCBrZXkgPT09IHN0cmluZ3MuQVJST1dfTEVGVF9LRVkgJiYgaXNSVEw7XG4gICAgbGV0IHRhYkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRBY3RpdmVUYWJJbmRleCgpO1xuXG4gICAgaWYgKHNob3VsZEdvVG9FbmQpIHtcbiAgICAgIHRhYkluZGV4ID0gbWF4VGFiSW5kZXg7XG4gICAgfSBlbHNlIGlmIChzaG91bGREZWNyZW1lbnQpIHtcbiAgICAgIHRhYkluZGV4IC09IDE7XG4gICAgfSBlbHNlIGlmIChzaG91bGRJbmNyZW1lbnQpIHtcbiAgICAgIHRhYkluZGV4ICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYkluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGFiSW5kZXggPCAwKSB7XG4gICAgICB0YWJJbmRleCA9IG1heFRhYkluZGV4O1xuICAgIH0gZWxzZSBpZiAodGFiSW5kZXggPiBtYXhUYWJJbmRleCkge1xuICAgICAgdGFiSW5kZXggPSAwO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVUYWIodGFiSW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHNjcm9sbCBpbmNyZW1lbnQgdGhhdCB3aWxsIG1ha2UgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdmlzaWJsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5leHRJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5leHQgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgVGFiIEJhclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgIGNvbnN0IG5leHRUYWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChuZXh0SW5kZXgpO1xuICAgIGNvbnN0IHJlbGF0aXZlQ29udGVudExlZnQgPSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgY29uc3QgcmVsYXRpdmVDb250ZW50UmlnaHQgPSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCBsZWZ0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50UmlnaHQgLSBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG4gICAgY29uc3QgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuXG4gICAgaWYgKG5leHRJbmRleCA8IGluZGV4KSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4obGVmdEluY3JlbWVudCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KHJpZ2h0SW5jcmVtZW50LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBzY3JvbGwgaW5jcmVtZW50IHRoYXQgd2lsbCBtYWtlIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IHZpc2libGUgaW4gUlRMXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV4dEluZGV4IFRoZSBpbmRleCBvZiB0aGUgbmV4dCB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBUYWIgQmFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxDb250ZW50V2lkdGggVGhlIHdpZHRoIG9mIHRoZSBzY3JvbGwgY29udGVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRSVExfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsQ29udGVudFdpZHRoLCApIHtcbiAgICBjb25zdCBuZXh0VGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRMZWZ0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gbmV4dFRhYkRpbWVuc2lvbnMuY29udGVudExlZnQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRSaWdodCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRSaWdodCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgY29uc3QgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgIGNvbnN0IHJpZ2h0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50TGVmdCAtIG51bWJlcnMuRVhUUkFfU0NST0xMX0FNT1VOVDtcblxuICAgIGlmIChuZXh0SW5kZXggPiBpbmRleCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KGxlZnRJbmNyZW1lbnQsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1pbihyaWdodEluY3JlbWVudCwgMCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0geyFNRENUYWJEaW1lbnNpb25zfSB0YWJEaW1lbnNpb25zIFRoZSBkaW1lbnNpb25zIG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSB0YWIgYmFyXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZV8oaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgIC8qKlxuICAgICAqIFRhYnMgYXJlIGxhaWQgb3V0IGluIHRoZSBUYWIgU2Nyb2xsZXIgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogICAgU2Nyb2xsIFBvc2l0aW9uXG4gICAgICogICAgKy0tLStcbiAgICAgKiAgICB8ICAgfCAgIEJhciBXaWR0aFxuICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgfCAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgKiAgICB8ICAgViAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVlxuICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgViAgIHwgICAgICAgICAgICAgVGFiIFNjcm9sbGVyICAgICAgICAgIHxcbiAgICAgKiAgICArLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgfCAgICBUYWIgICAgIHwgICAgICBUYWIgICAgIHwgICAgICAgIFRhYiAgICAgICAgfFxuICAgICAqICAgICstLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgKiAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAqICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICpcbiAgICAgKiBUbyBkZXRlcm1pbmUgdGhlIG5leHQgYWRqYWNlbnQgaW5kZXgsIHdlIGxvb2sgYXQgdGhlIFRhYiByb290IGxlZnQgYW5kXG4gICAgICogVGFiIHJvb3QgcmlnaHQsIGJvdGggcmVsYXRpdmUgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbi4gSWYgdGhlIFRhYiByb290XG4gICAgICogbGVmdCBpcyBsZXNzIHRoYW4gMCwgdGhlbiB3ZSBrbm93IGl0J3Mgb3V0IG9mIHZpZXcgdG8gdGhlIGxlZnQuIElmIHRoZVxuICAgICAqIFRhYiByb290IHJpZ2h0IG1pbnVzIHRoZSBiYXIgd2lkdGggaXMgZ3JlYXRlciB0aGFuIDAsIHdlIGtub3cgdGhlIFRhYiBpc1xuICAgICAqIG91dCBvZiB2aWV3IHRvIHRoZSByaWdodC4gRnJvbSB0aGVyZSwgd2UgZWl0aGVyIGluY3JlbWVudCBvciBkZWNyZW1lbnRcbiAgICAgKiB0aGUgaW5kZXguXG4gICAgICovXG4gICAgY29uc3QgcmVsYXRpdmVSb290TGVmdCA9IHRhYkRpbWVuc2lvbnMucm9vdExlZnQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByZWxhdGl2ZVJvb3RSaWdodCA9IHRhYkRpbWVuc2lvbnMucm9vdFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICBjb25zdCByZWxhdGl2ZVJvb3REZWx0YSA9IHJlbGF0aXZlUm9vdExlZnQgKyByZWxhdGl2ZVJvb3RSaWdodDtcbiAgICBjb25zdCBsZWZ0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290TGVmdCA8IDAgfHwgcmVsYXRpdmVSb290RGVsdGEgPCAwO1xuICAgIGNvbnN0IHJpZ2h0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290UmlnaHQgPiAwIHx8IHJlbGF0aXZlUm9vdERlbHRhID4gMDtcblxuICAgIGlmIChsZWZ0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICByZXR1cm4gaW5kZXggLSAxO1xuICAgIH1cblxuICAgIGlmIChyaWdodEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyIGluIFJUTFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHshTURDVGFiRGltZW5zaW9uc30gdGFiRGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgdGFiIGJhclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsZXIgY29udGVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmaW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VSVExfKGluZGV4LCB0YWJEaW1lbnNpb25zLCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbENvbnRlbnRXaWR0aCkge1xuICAgIGNvbnN0IHJvb3RMZWZ0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290TGVmdCAtIGJhcldpZHRoIC0gc2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3Qgcm9vdFJpZ2h0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByb290RGVsdGEgPSByb290TGVmdCArIHJvb3RSaWdodDtcbiAgICBjb25zdCBsZWZ0RWRnZUlzQ2xvc2VyID0gcm9vdExlZnQgPiAwIHx8IHJvb3REZWx0YSA+IDA7XG4gICAgY29uc3QgcmlnaHRFZGdlSXNDbG9zZXIgPSByb290UmlnaHQgPCAwIHx8IHJvb3REZWx0YSA8IDA7XG5cbiAgICBpZiAobGVmdEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFZGdlSXNDbG9zZXIpIHtcbiAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggYSBrZXlkb3duIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnQgVGhlIGtleWRvd24gZXZlbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0S2V5RnJvbUV2ZW50XyhldnQpIHtcbiAgICBpZiAoQUNDRVBUQUJMRV9LRVlTLmhhcyhldnQua2V5KSkge1xuICAgICAgcmV0dXJuIGV2dC5rZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEtFWUNPREVfTUFQLmdldChldnQua2V5Q29kZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gaW5kZXggaXMgaW5jbHVzaXZlbHkgYmV0d2VlbiB0aGUgZW5kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHRvIHRlc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluZGV4SXNJblJhbmdlXyhpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5hZGFwdGVyXy5nZXRUYWJMaXN0TGVuZ3RoKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmlldydzIFJUTCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNSVExfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmlzUlRMKCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXcgZm9yIGxlZnQtdG8tcmlnaHQgdXNlcmFnZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gc2Nyb2xsIGludG8gdmlld1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXdfKGluZGV4KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKTtcblxuICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8obmV4dEluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbEluY3JlbWVudCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpO1xuICAgIHRoaXMuYWRhcHRlcl8uaW5jcmVtZW50U2Nyb2xsKHNjcm9sbEluY3JlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXcgaW4gUlRMXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgdGFiIGluZGV4IHRvIG1ha2UgdmlzaWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXdSVExfKGluZGV4KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50V2lkdGgoKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8oXG4gICAgICBpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG5cbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKG5leHRJbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxJbmNyZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG4gICAgdGhpcy5hZGFwdGVyXy5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsSW5jcmVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJCYXJGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5cbmltcG9ydCB7TURDVGFiLCBNRENUYWJGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvdGFiL2luZGV4JztcbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJ9IGZyb20gJ0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvaW5kZXgnO1xuXG5pbXBvcnQgTURDVGFiQmFyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RhYkJhckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENUYWJCYXJGb3VuZGF0aW9uPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJCYXIgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBcnJheTwhTURDVGFiPn0gKi9cbiAgICB0aGlzLnRhYkxpc3RfO1xuXG4gICAgLyoqIEB0eXBlIHsoZnVuY3Rpb24oIUVsZW1lbnQpOiAhTURDVGFiKX0gKi9cbiAgICB0aGlzLnRhYkZhY3RvcnlfO1xuXG4gICAgLyoqIEBwcml2YXRlIHs/TURDVGFiU2Nyb2xsZXJ9ICovXG4gICAgdGhpcy50YWJTY3JvbGxlcl87XG5cbiAgICAvKiogQHR5cGUgeyhmdW5jdGlvbighRWxlbWVudCk6ICFNRENUYWJTY3JvbGxlcil9ICovXG4gICAgdGhpcy50YWJTY3JvbGxlckZhY3RvcnlfO1xuXG4gICAgLyoqIEBwcml2YXRlIHs/ZnVuY3Rpb24oP0V2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaGFuZGxlVGFiSW50ZXJhY3Rpb25fO1xuXG4gICAgLyoqIEBwcml2YXRlIHs/ZnVuY3Rpb24oP0V2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaGFuZGxlS2V5RG93bl87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDVGFiQmFyfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1RhYkJhcihyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyhmdW5jdGlvbighRWxlbWVudCk6ICFNRENUYWIpPX0gdGFiRmFjdG9yeSBBIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgTURDVGFiXG4gICAqIEBwYXJhbSB7KGZ1bmN0aW9uKCFFbGVtZW50KTogIU1EQ1RhYlNjcm9sbGVyKT19IHRhYlNjcm9sbGVyRmFjdG9yeSBBIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgTURDVGFiU2Nyb2xsZXJcbiAgICovXG4gIGluaXRpYWxpemUoXG4gICAgdGFiRmFjdG9yeSA9IChlbCkgPT4gbmV3IE1EQ1RhYihlbCksXG4gICAgdGFiU2Nyb2xsZXJGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDVGFiU2Nyb2xsZXIoZWwpLFxuICApIHtcbiAgICB0aGlzLnRhYkZhY3RvcnlfID0gdGFiRmFjdG9yeTtcbiAgICB0aGlzLnRhYlNjcm9sbGVyRmFjdG9yeV8gPSB0YWJTY3JvbGxlckZhY3Rvcnk7XG5cbiAgICBjb25zdCB0YWJFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKE1EQ1RhYkJhckZvdW5kYXRpb24uc3RyaW5ncy5UQUJfU0VMRUNUT1IpKTtcbiAgICB0aGlzLnRhYkxpc3RfID0gdGFiRWxlbWVudHMubWFwKChlbCkgPT4gdGhpcy50YWJGYWN0b3J5XyhlbCkpO1xuXG4gICAgY29uc3QgdGFiU2Nyb2xsZXJFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKE1EQ1RhYkJhckZvdW5kYXRpb24uc3RyaW5ncy5UQUJfU0NST0xMRVJfU0VMRUNUT1IpO1xuICAgIGlmICh0YWJTY3JvbGxlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMudGFiU2Nyb2xsZXJfID0gdGhpcy50YWJTY3JvbGxlckZhY3RvcnlfKHRhYlNjcm9sbGVyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMuaGFuZGxlVGFiSW50ZXJhY3Rpb25fID0gKGV2dCkgPT4gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVUYWJJbnRlcmFjdGlvbihldnQpO1xuICAgIHRoaXMuaGFuZGxlS2V5RG93bl8gPSAoZXZ0KSA9PiB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleURvd24oZXZ0KTtcblxuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RFRF9FVkVOVCwgdGhpcy5oYW5kbGVUYWJJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKE1EQ1RhYkZvdW5kYXRpb24uc3RyaW5ncy5JTlRFUkFDVEVEX0VWRU5ULCB0aGlzLmhhbmRsZVRhYkludGVyYWN0aW9uXyk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duXyk7XG4gICAgdGhpcy50YWJMaXN0Xy5mb3JFYWNoKCh0YWIpID0+IHRhYi5kZXN0cm95KCkpO1xuICAgIHRoaXMudGFiU2Nyb2xsZXJfLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiQmFyRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDVGFiQmFyRm91bmRhdGlvbihcbiAgICAgIC8qKiBAdHlwZSB7IU1EQ1RhYkJhckFkYXB0ZXJ9ICovICh7XG4gICAgICAgIHNjcm9sbFRvOiAoc2Nyb2xsWCkgPT4gdGhpcy50YWJTY3JvbGxlcl8uc2Nyb2xsVG8oc2Nyb2xsWCksXG4gICAgICAgIGluY3JlbWVudFNjcm9sbDogKHNjcm9sbFhJbmNyZW1lbnQpID0+IHRoaXMudGFiU2Nyb2xsZXJfLmluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSxcbiAgICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+IHRoaXMudGFiU2Nyb2xsZXJfLmdldFNjcm9sbFBvc2l0aW9uKCksXG4gICAgICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aDogKCkgPT4gdGhpcy50YWJTY3JvbGxlcl8uZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCksXG4gICAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldFdpZHRoLFxuICAgICAgICBpc1JUTDogKCkgPT4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5yb290XykuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgICBhY3RpdmF0ZVRhYkF0SW5kZXg6IChpbmRleCwgY2xpZW50UmVjdCkgPT4gdGhpcy50YWJMaXN0X1tpbmRleF0uYWN0aXZhdGUoY2xpZW50UmVjdCksXG4gICAgICAgIGRlYWN0aXZhdGVUYWJBdEluZGV4OiAoaW5kZXgpID0+IHRoaXMudGFiTGlzdF9baW5kZXhdLmRlYWN0aXZhdGUoKSxcbiAgICAgICAgZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXg6IChpbmRleCkgPT4gdGhpcy50YWJMaXN0X1tpbmRleF0uY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QoKSxcbiAgICAgICAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXg6IChpbmRleCkgPT4gdGhpcy50YWJMaXN0X1tpbmRleF0uY29tcHV0ZURpbWVuc2lvbnMoKSxcbiAgICAgICAgZ2V0QWN0aXZlVGFiSW5kZXg6ICgpID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiTGlzdF8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkxpc3RfW2ldLmFjdGl2ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuICAgICAgICBnZXRJbmRleE9mVGFiOiAodGFiVG9GaW5kKSA9PiB0aGlzLnRhYkxpc3RfLmluZGV4T2YodGFiVG9GaW5kKSxcbiAgICAgICAgZ2V0VGFiTGlzdExlbmd0aDogKCkgPT4gdGhpcy50YWJMaXN0Xy5sZW5ndGgsXG4gICAgICAgIG5vdGlmeVRhYkFjdGl2YXRlZDogKGluZGV4KSA9PiB0aGlzLmVtaXQoTURDVGFiQmFyRm91bmRhdGlvbi5zdHJpbmdzLlRBQl9BQ1RJVkFURURfRVZFTlQsIHtpbmRleH0sIHRydWUpLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICovXG4gIGFjdGl2YXRlVGFiKGluZGV4KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZVRhYihpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXdcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRIZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqL1xuICBzY3JvbGxJbnRvVmlldyhpbmRleCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGFiQmFyLCBNRENUYWJCYXJGb3VuZGF0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBJbmRpY2F0b3IuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEluZGljYXRvciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiSW5kaWNhdG9yQWRhcHRlciB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRXZlbnRIYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzTmFtZSBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xpZW50IHJlY3Qgb2YgdGhlIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlQ29udGVudENsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGNvbnRlbnQgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZSBUaGUgc3R5bGUgcHJvcGVydHkgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc2V0Q29udGVudFN0eWxlUHJvcGVydHkocHJvcE5hbWUsIHZhbHVlKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJJbmRpY2F0b3JBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvYWRhcHRlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvYWRhcHRlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBBQ1RJVkU6ICdtZGMtdGFiLWluZGljYXRvci0tYWN0aXZlJyxcbiAgRkFERTogJ21kYy10YWItaW5kaWNhdG9yLS1mYWRlJyxcbiAgRkFESU5HX0FDVElWQVRFOiAnbWRjLXRhYi1pbmRpY2F0b3ItLWZhZGluZy1hY3RpdmF0ZScsXG4gIEZBRElOR19ERUFDVElWQVRFOiAnbWRjLXRhYi1pbmRpY2F0b3ItLWZhZGluZy1kZWFjdGl2YXRlJyxcbiAgU0xJRElOR19BQ1RJVkFURTogJ21kYy10YWItaW5kaWNhdG9yLS1zbGlkaW5nLWFjdGl2YXRlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCcsXG59O1xuXG5leHBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9ufVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gZXh0ZW5kcyBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKD9FdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfID0gKCkgPT4gdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kKCk7XG4gIH1cblxuICAvKiogSGFuZGxlcyB0aGUgdHJhbnNpdGlvbmVuZCBldmVudCAqL1xuICBoYW5kbGVUcmFuc2l0aW9uRW5kKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZBRElOR19BQ1RJVkFURSk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkFESU5HX0RFQUNUSVZBVEUpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZBRElOR19BQ1RJVkFURSk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZBRElOR19ERUFDVElWQVRFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9mYWRpbmctZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvZmFkaW5nLWZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gICogQGxpY2Vuc2VcbiAgKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAqXG4gICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgKlxuICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICpcbiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RhYkluZGljYXRvckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiSW5kaWNhdG9yQWRhcHRlcj59XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiSW5kaWNhdG9yQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJJbmRpY2F0b3JBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gKi8gKHtcbiAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJFdmVudEhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0OiAoKSA9PiB7fSxcbiAgICAgIHNldENvbnRlbnRTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0geyFNRENUYWJJbmRpY2F0b3JBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshQ2xpZW50UmVjdH0gKi9cbiAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5kaWNhdG9yXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3Q9fSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3RcbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuICAvKiogQGFic3RyYWN0ICovXG4gIGRlYWN0aXZhdGUoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDVGFiSW5kaWNhdG9yQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuaW1wb3J0IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGZyb20gJy4vc2xpZGluZy1mb3VuZGF0aW9uJztcbmltcG9ydCBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGZyb20gJy4vZmFkaW5nLWZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYkluZGljYXRvciBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENUYWJJbmRpY2F0b3J9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDVGFiSW5kaWNhdG9yKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIC8qKiBAdHlwZSB7P0VsZW1lbnR9ICovXG4gICAgdGhpcy5jb250ZW50XztcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5jb250ZW50XyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUik7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlQ29udGVudENsaWVudFJlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYkluZGljYXRvckZvdW5kYXRpb259XG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gLyoqIEB0eXBlIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gKi8gKE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0OiAoKSA9PiB0aGlzLmNvbnRlbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2V0Q29udGVudFN0eWxlUHJvcGVydHk6IChwcm9wLCB2YWx1ZSkgPT4gdGhpcy5jb250ZW50Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSksXG4gICAgfSkpO1xuXG4gICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GQURFKSkge1xuICAgICAgcmV0dXJuIG5ldyBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gdGhlIHNsaWRpbmcgaW5kaWNhdG9yXG4gICAgcmV0dXJuIG5ldyBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqL1xuICBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGFiSW5kaWNhdG9yLCBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLCBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gICogQGxpY2Vuc2VcbiAgKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAqXG4gICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgKlxuICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICpcbiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYkluZGljYXRvckZvdW5kYXRpb259XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gZXh0ZW5kcyBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKD9FdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfID0gKCkgPT4gdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kKCk7XG4gIH1cblxuICAvKiogSGFuZGxlcyB0aGUgdHJhbnNpdGlvbmVuZCBldmVudCAqL1xuICBoYW5kbGVUcmFuc2l0aW9uRW5kKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLlNMSURJTkdfQUNUSVZBVEUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7IUNsaWVudFJlY3Q9fSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgKi9cbiAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcblxuICAgIC8vIEVhcmx5IGV4aXQgaWYgbm8gaW5kaWNhdG9yIGlzIHByZXNlbnQgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIGFuIGluZGljYXRvclxuICAgIC8vIG1heSBiZSBhY3RpdmF0ZWQgd2l0aG91dCBhIHByaW9yIGluZGljYXRvciBzdGF0ZVxuICAgIGlmICghcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhpcyBhbmltYXRpb24gdXNlcyB0aGUgRkxJUCBhcHByb2FjaC4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgaXQgYXQgdGhlIGxpbmsgYmVsb3c6XG4gICAgLy8gaHR0cHM6Ly9hZXJvdHdpc3QuY29tL2Jsb2cvZmxpcC15b3VyLWFuaW1hdGlvbnMvXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHByZXZpb3VzIGluZGljYXRvclxuICAgIGNvbnN0IGN1cnJlbnRDbGllbnRSZWN0ID0gdGhpcy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aWR0aERlbHRhID0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0LndpZHRoIC8gY3VycmVudENsaWVudFJlY3Qud2lkdGg7XG4gICAgY29uc3QgeFBvc2l0aW9uID0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0LmxlZnQgLSBjdXJyZW50Q2xpZW50UmVjdC5sZWZ0O1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7eFBvc2l0aW9ufXB4KSBzY2FsZVgoJHt3aWR0aERlbHRhfSlgKTtcblxuICAgIC8vIEZvcmNlIHJlcGFpbnRcbiAgICB0aGlzLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuXG4gICAgLy8gQWRkIGFuaW1hdGluZyBjbGFzcyBhbmQgcmVtb3ZlIHRyYW5zZm9ybWF0aW9uIGluIGEgbmV3IGZyYW1lXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLlNMSURJTkdfQUNUSVZBVEUpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgIC8vIFdlIHJlbW92ZSB0aGUgYW5pbWF0aW5nIGNsYXNzIGluIGRlYWN0aXZhdGUgaW4gY2FzZSB0aGUgVGFiIGlzIGRlYWN0aXZhdGVkIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlcyBhbmRcbiAgICAvLyB0aGUgXCJ0cmFuc2l0aW9uZW5kXCIgaGFuZGxlciBpc24ndCBjYWxsZWQuXG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuU0xJRElOR19BQ1RJVkFURSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9zbGlkaW5nLWZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL3NsaWRpbmctZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogTURDVGFiU2Nyb2xsZXJBbmltYXRpb24gY29udGFpbnMgdGhlIHZhbHVlcyByZXF1aXJlZCBmb3IgYW5pbWF0aW5nIGZyb20gdGhlXG4gKiBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB0byB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbi4gVGhlIFwiZmluYWxTY3JvbGxQb3NpdGlvblwiXG4gKiB2YWx1ZSByZXByZXNlbnRzIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIHdoaWxlIHRoZSBcInNjcm9sbERlbHRhXCIgdmFsdWUgaXMgdGhlXG4gKiBjb3JyZXNwb25kaW5nIHRyYW5zZm9ybWF0aW9uIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgc2Nyb2xsIGNvbnRlbnQuIFRvZ2V0aGVyLFxuICogdGhleSBjcmVhdGUgdGhlIGFuaW1hdGlvbiBieSBmaXJzdCB1cGRhdGluZyB0aGUgc2Nyb2xsIHZhbHVlIHRoZW4gYXBwbHlpbmdcbiAqIHRoZSB0cmFuc2Zvcm1hdGlvbiBhbmQgYW5pbWF0aW5nIHRoZSB0cmFuc2l0aW9uLiBCb3RoIHBpZWNlcyBhcmUgbmVjZXNzYXJ5XG4gKiBmb3IgdGhlIHNjcm9sbCBhbmltYXRpb24gdG8gd29yay4gVGhlIHZhbHVlcyBhcmUgdXNlZCBhcy1pcyBieSB0aGUgdGFiXG4gKiBzY3JvbGxlciBhbmltYXRpb24gbWV0aG9kLCBlbnN1cmluZyB0aGF0IGFsbCBsb2dpYyBmb3IgZGV0ZXJtaW5pbmcgc2Nyb2xsXG4gKiBwb3NpdGlvbiBvciB0cmFuc2Zvcm1hdGlvbiBpcyBhYnN0cmFjdGVkIGF3YXkgZnJvbSB0aGUgYW5pbWF0aW9uIG1ldGhvZC5cbiAqIEB0eXBlZGVmIHt7ZmluYWxTY3JvbGxQb3NpdGlvbjogbnVtYmVyLCBzY3JvbGxEZWx0YTogbnVtYmVyfX1cbiAqL1xubGV0IE1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uO1xuXG4vKipcbiAqIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzIHJlcHJlc2VudHMgdGhlIGxlZnQgYW5kIHJpZ2h0IGVkZ2VzIG9mIHRoZVxuICogc2Nyb2xsIGNvbnRlbnQuIFRoZXNlIHZhbHVlcyB2YXJ5IGRlcGVuZGluZyBvbiBob3cgc2Nyb2xsaW5nIGluIFJUTCBpc1xuICogaW1wbGVtZW50ZWQgYnkgdGhlIGJyb3dzZXIuIE9uZSB2YWx1ZSBpcyBhbHdheXMgMCBhbmQgb25lIHZhbHVlIGlzIGFsd2F5c1xuICogdGhlIG1heCBzY3JvbGxhYmxlIHZhbHVlIGFzIGVpdGhlciBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXIuXG4gKiBAdHlwZWRlZiB7e2xlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcn19XG4gKi9cbmxldCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlcztcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGFiIFNjcm9sbGVyLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRhYiAgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBjbGFzc05hbWUgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjbGFzc05hbWUgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkU2Nyb2xsQXJlYUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBldmVudCB0YXJnZXQgbWF0Y2hlcyBnaXZlbiBjbGFzc05hbWUuXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2dFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBUaGUgc2VsZWN0b3IgdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yKGV2dFRhcmdldCwgc2VsZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYXJlYSBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZSBUaGUgc3R5bGUgcHJvcGVydHkgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQXJlYVN0eWxlUHJvcGVydHkocHJvcE5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGNvbnRlbnQgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWUgVGhlIHN0eWxlIHByb3BlcnR5IG5hbWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3R5bGUgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KHByb3BOYW1lLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudCdzIGNvbXB1dGVkIHN0eWxlIHZhbHVlIG9mIHRoZSBnaXZlbiBjc3MgcHJvcGVydHkgYHByb3BlcnR5TmFtZWAuXG4gICAqIFdlIGFjaGlldmUgdGhpcyB2aWEgYGdldENvbXB1dGVkU3R5bGUoLi4uKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSlgLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlKHByb3BlcnR5TmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2Nyb2xsTGVmdCB2YWx1ZSBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsTGVmdCBUaGUgbmV3IHNjcm9sbExlZnQgdmFsdWVcbiAgICovXG4gIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbExlZnQgdmFsdWUgb2YgdGhlIHNjcm9sbCBhcmVhIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldFdpdGR0aCBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgdGhlIHNjcm9sbCBhcmVhIGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgdGhlIHNjcm9sbCBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSBicm93c2VyJ3MgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIChpbiBweCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KCkge31cbn1cblxuZXhwb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXMsIE1EQ1RhYlNjcm9sbGVyQWRhcHRlcn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvYWRhcHRlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBBTklNQVRJTkc6ICdtZGMtdGFiLXNjcm9sbGVyLS1hbmltYXRpbmcnLFxuICBTQ1JPTExfVEVTVDogJ21kYy10YWItc2Nyb2xsZXJfX3Rlc3QnLFxuICBTQ1JPTExfQVJFQV9TQ1JPTEw6ICdtZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYS0tc2Nyb2xsJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJFQV9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYScsXG4gIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnQnLFxufTtcblxuZXhwb3J0IHtcbiAgY3NzQ2xhc3NlcyxcbiAgc3RyaW5ncyxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gICogQGxpY2Vuc2VcbiAgKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAqXG4gICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgKlxuICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICpcbiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXMsIE1EQ1RhYlNjcm9sbGVyQWRhcHRlcn0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTCBmcm9tICcuL3J0bC1zY3JvbGxlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0IGZyb20gJy4vcnRsLWRlZmF1bHQtc2Nyb2xsZXInO1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUgZnJvbSAnLi9ydGwtbmVnYXRpdmUtc2Nyb2xsZXInO1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSBmcm9tICcuL3J0bC1yZXZlcnNlLXNjcm9sbGVyJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiU2Nyb2xsZXJBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIE1EQ1RhYlNjcm9sbGVyQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFkYXB0ZXJ9ICovICh7XG4gICAgICBldmVudFRhcmdldE1hdGNoZXNTZWxlY3RvcjogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBhZGRTY3JvbGxBcmVhQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgc2V0U2Nyb2xsQXJlYVN0eWxlUHJvcGVydHk6ICgpID0+IHt9LFxuICAgICAgc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHk6ICgpID0+IHt9LFxuICAgICAgZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWU6ICgpID0+IHt9LFxuICAgICAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBjb21wdXRlU2Nyb2xsQXJlYUNsaWVudFJlY3Q6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0OiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0OiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0geyFNRENUYWJTY3JvbGxlckFkYXB0ZXJ9IGFkYXB0ZXIgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGJvb2xlYW4gY29udHJvbHMgd2hldGhlciB3ZSBzaG91bGQgaGFuZGxlIHRoZSB0cmFuc2l0aW9uZW5kIGFuZCBpbnRlcmFjdGlvbiBldmVudHMgZHVyaW5nIHRoZSBhbmltYXRpb24uXG4gICAgICogQHByaXZhdGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBNRENUYWJTY3JvbGxlclJUTCBpbnN0YW5jZSB2YXJpZXMgcGVyIGJyb3dzZXIgYW5kIGFsbG93cyB1cyB0byBlbmNhcHN1bGF0ZSB0aGUgcGVjdWxpYXIgYnJvd3NlciBiZWhhdmlvclxuICAgICAqIG9mIFJUTCBzY3JvbGxpbmcgaW4gaXQncyBvd24gY2xhc3MuXG4gICAgICogQHByaXZhdGUgez9NRENUYWJTY3JvbGxlclJUTH1cbiAgICAgKi9cbiAgICB0aGlzLnJ0bFNjcm9sbGVySW5zdGFuY2VfO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBDb21wdXRlIGhvcml6b250YWwgc2Nyb2xsYmFyIGhlaWdodCBvbiBzY3JvbGxlciB3aXRoIG92ZXJmbG93IGluaXRpYWxseSBoaWRkZW4sIHRoZW4gdXBkYXRlIG92ZXJmbG93IHRvIHNjcm9sbFxuICAgIC8vIGFuZCBpbW1lZGlhdGVseSBhZGp1c3QgYm90dG9tIG1hcmdpbiB0byBhdm9pZCB0aGUgc2Nyb2xsYmFyIGluaXRpYWxseSBhcHBlYXJpbmcgYmVmb3JlIEpTIHJ1bnMuXG4gICAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJywgLWhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgKyAncHgnKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZFNjcm9sbEFyZWFDbGFzcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5TQ1JPTExfQVJFQV9TQ1JPTEwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBjdXJyZW50IHZpc3VhbCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVDdXJyZW50U2Nyb2xsUG9zaXRpb25SVExfKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZVggPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXygpO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgcmV0dXJuIHNjcm9sbExlZnQgLSBjdXJyZW50VHJhbnNsYXRlWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGludGVyYWN0aW9uIGV2ZW50cyB0aGF0IG9jY3VyIGR1cmluZyB0cmFuc2l0aW9uXG4gICAqL1xuICBoYW5kbGVJbnRlcmFjdGlvbigpIHtcbiAgICAvLyBFYXJseSBleGl0IGlmIHdlIGFyZW4ndCBhbmltYXRpbmdcbiAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmdfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBvdGhlciBldmVudCBsaXN0ZW5lcnMgZnJvbSBoYW5kbGluZyB0aGlzIGV2ZW50XG4gICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIHRyYW5zaXRpb25lbmQgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICAvLyBFYXJseSBleGl0IGlmIHdlIGFyZW4ndCBhbmltYXRpbmcgb3IgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBkaWZmZXJlbnQgZWxlbWVudC5cbiAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmdfXG4gICAgICB8fCAhdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXNTZWxlY3RvcihldnQudGFyZ2V0LCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uc3RyaW5ncy5DT05URU5UX1NFTEVDVE9SKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNBbmltYXRpbmdfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudCB0aGUgc2Nyb2xsIHZhbHVlIGJ5IHRoZSBzY3JvbGxYSW5jcmVtZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYSW5jcmVtZW50IFRoZSB2YWx1ZSBieSB3aGljaCB0byBpbmNyZW1lbnQgdGhlIHNjcm9sbCBwb3NpdGlvblxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICAvLyBFYXJseSBleGl0IGZvciBub24tb3BlcmF0aW9uYWwgaW5jcmVtZW50IHZhbHVlc1xuICAgIGlmIChzY3JvbGxYSW5jcmVtZW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmluY3JlbWVudFNjcm9sbFJUTF8oc2Nyb2xsWEluY3JlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbmNyZW1lbnRTY3JvbGxfKHNjcm9sbFhJbmNyZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdG8gdGhlIGdpdmVuIHNjcm9sbFggdmFsdWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICovXG4gIHNjcm9sbFRvKHNjcm9sbFgpIHtcbiAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG9SVExfKHNjcm9sbFgpO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsVG9fKHNjcm9sbFgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIHZlcnNpb24gb2YgdGhlIE1EQ1RhYlNjcm9sbGVyUlRMXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlclJUTH1cbiAgICovXG4gIGdldFJUTFNjcm9sbGVyKCkge1xuICAgIGlmICghdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXykge1xuICAgICAgdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXyA9IHRoaXMucnRsU2Nyb2xsZXJGYWN0b3J5XygpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJ0bFNjcm9sbGVySW5zdGFuY2VfO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRyYW5zbGF0ZVggdmFsdWUgZnJvbSBhIENTUyBtYXRyaXggdHJhbnNmb3JtIGZ1bmN0aW9uIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtVmFsdWUgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlKCd0cmFuc2Zvcm0nKTtcbiAgICAvLyBFYXJseSBleGl0IGlmIG5vIHRyYW5zZm9ybSBpcyBwcmVzZW50XG4gICAgaWYgKHRyYW5zZm9ybVZhbHVlID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIFRoZSB0cmFuc2Zvcm0gdmFsdWUgY29tZXMgYmFjayBhcyBhIG1hdHJpeCB0cmFuc2Zvcm1hdGlvbiBpbiB0aGUgZm9ybVxuICAgIC8vIG9mIGBtYXRyaXgoYSwgYiwgYywgZCwgdHgsIHR5KWAuIFdlIG9ubHkgY2FyZSBhYm91dCB0eCAodHJhbnNsYXRlWCkgc29cbiAgICAvLyB3ZSdyZSBnb2luZyB0byBncmFiIGFsbCB0aGUgcGFyZW50aGVzaXplZCB2YWx1ZXMsIHN0cmlwIG91dCB0eCwgYW5kXG4gICAgLy8gcGFyc2UgaXQuXG4gICAgY29uc3QgcmVzdWx0cyA9IC9cXCgoLispXFwpLy5leGVjKHRyYW5zZm9ybVZhbHVlKVsxXTtcbiAgICBjb25zdCBwYXJ0cyA9IHJlc3VsdHMuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwYXJ0c1s0XSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBhIHNhZmUgc2Nyb2xsIHZhbHVlIHRoYXQgaXMgPiAwIGFuZCA8IHRoZSBtYXggc2Nyb2xsIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBkaXN0YW5jZSB0byBzY3JvbGxcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZWRnZXMubGVmdCwgc2Nyb2xsWCksIGVkZ2VzLnJpZ2h0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb21wdXRlQ3VycmVudFNjcm9sbFBvc2l0aW9uUlRMXygpIHtcbiAgICBjb25zdCB0cmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICByZXR1cm4gdGhpcy5nZXRSVExTY3JvbGxlcigpLmdldFNjcm9sbFBvc2l0aW9uUlRMKHRyYW5zbGF0ZVgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpIHtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSAqLyAoe1xuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgc2Nyb2xsIG1ldGhvZFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgbmV3IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsVG9fKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsWCA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCBzYWZlU2Nyb2xsWCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCk7XG4gICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBzYWZlU2Nyb2xsWCAtIGN1cnJlbnRTY3JvbGxYO1xuICAgIHRoaXMuYW5pbWF0ZV8oLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBzYWZlU2Nyb2xsWCxcbiAgICAgIHNjcm9sbERlbHRhOiBzY3JvbGxEZWx0YSxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgUlRMIHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNjcm9sbFRvUlRMXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5nZXRSVExTY3JvbGxlcigpLnNjcm9sbFRvUlRMKHNjcm9sbFgpO1xuICAgIHRoaXMuYW5pbWF0ZV8oYW5pbWF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBpbmNyZW1lbnQgc2Nyb2xsIG1ldGhvZFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgbmV3IHNjcm9sbCBwb3NpdGlvbiBpbmNyZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxYID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIGNvbnN0IHRhcmdldFNjcm9sbFggPSBzY3JvbGxYICsgY3VycmVudFNjcm9sbFg7XG4gICAgY29uc3Qgc2FmZVNjcm9sbFggPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHRhcmdldFNjcm9sbFgpO1xuICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2FmZVNjcm9sbFggLSBjdXJyZW50U2Nyb2xsWDtcbiAgICB0aGlzLmFuaW1hdGVfKC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogc2FmZVNjcm9sbFgsXG4gICAgICBzY3JvbGxEZWx0YTogc2Nyb2xsRGVsdGEsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIGluY3JlbWVuZXQgc2Nyb2xsIFJUTCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gUlRMIGluY3JlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsUlRMXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5nZXRSVExTY3JvbGxlcigpLmluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKTtcbiAgICB0aGlzLmFuaW1hdGVfKGFuaW1hdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0ZXMgdGhlIHRhYiBzY3JvbGxpbmdcbiAgICogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259IGFuaW1hdGlvbiBUaGUgYW5pbWF0aW9uIHRvIGFwcGx5XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlXyhhbmltYXRpb24pIHtcbiAgICAvLyBFYXJseSBleGl0IGlmIHRyYW5zbGF0ZVggaXMgMCwgd2hpY2ggbWVhbnMgdGhlcmUncyBubyBhbmltYXRpb24gdG8gcGVyZm9ybVxuICAgIGlmIChhbmltYXRpb24uc2Nyb2xsRGVsdGEgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3BTY3JvbGxBbmltYXRpb25fKCk7XG4gICAgLy8gVGhpcyBhbmltYXRpb24gdXNlcyB0aGUgRkxJUCBhcHByb2FjaC5cbiAgICAvLyBSZWFkIG1vcmUgaGVyZTogaHR0cHM6Ly9hZXJvdHdpc3QuY29tL2Jsb2cvZmxpcC15b3VyLWFuaW1hdGlvbnMvXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChhbmltYXRpb24uZmluYWxTY3JvbGxQb3NpdGlvbik7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHthbmltYXRpb24uc2Nyb2xsRGVsdGF9cHgpYCk7XG4gICAgLy8gRm9yY2UgcmVwYWludFxuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNBbmltYXRpbmdfID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBzY3JvbGwgYW5pbWF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdG9wU2Nyb2xsQW5pbWF0aW9uXygpIHtcbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IHRoaXMuZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb25fKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDBweCknKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGxQb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbl8oKSB7XG4gICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZVggPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXygpO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFJUTFNjcm9sbGVyKCkuZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24oc2Nyb2xsTGVmdCwgY3VycmVudFRyYW5zbGF0ZVgpO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JvbGxMZWZ0IC0gY3VycmVudFRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgUlRMIFNjcm9sbGVyIHRvIHVzZVxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJSVEx9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBydGxTY3JvbGxlckZhY3RvcnlfKCkge1xuICAgIC8vIEJyb3dzZXJzIGhhdmUgdGhyZWUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9ucyBvZiBzY3JvbGxMZWZ0IGluIFJUTCBtb2RlLFxuICAgIC8vIGRlcGVuZGVudCBvbiB0aGUgYnJvd3Nlci4gVGhlIGJlaGF2aW9yIGlzIGJhc2VkIG9mZiB0aGUgbWF4IExUUlxuICAgIC8vIHNjcm9sbGxlZnQgdmFsdWUgYW5kIDAuXG4gICAgLy9cbiAgICAvLyAqIERlZmF1bHQgc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IDBcbiAgICAvLyAgICAtIFJpZ2h0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgIC8vXG4gICAgLy8gKiBOZWdhdGl2ZSBzY3JvbGxpbmcgaW4gUlRMICpcbiAgICAvLyAgICAtIExlZnQtbW9zdCB2YWx1ZTogTmVnYXRlZCBtYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAvLyAgICAtIFJpZ2h0LW1vc3QgdmFsdWU6IDBcbiAgICAvL1xuICAgIC8vICogUmV2ZXJzZSBzY3JvbGxpbmcgaW4gUlRMICpcbiAgICAvLyAgICAtIExlZnQtbW9zdCB2YWx1ZTogTWF4IExUUiBzY3JvbGxMZWZ0IHZhbHVlXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiAwXG4gICAgLy9cbiAgICAvLyBXZSB1c2UgdGhvc2UgcHJpbmNpcGxlcyBiZWxvdyB0byBkZXRlcm1pbmUgd2hpY2ggUlRMIHNjcm9sbExlZnRcbiAgICAvLyBiZWhhdmlvciBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgY3VycmVudCBicm93c2VyLlxuICAgIGNvbnN0IGluaXRpYWxTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoaW5pdGlhbFNjcm9sbExlZnQgLSAxKTtcbiAgICBjb25zdCBuZXdTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuXG4gICAgLy8gSWYgdGhlIG5ld1Njcm9sbExlZnQgdmFsdWUgaXMgbmVnYXRpdmUsdGhlbiB3ZSBrbm93IHRoYXQgdGhlIGJyb3dzZXIgaGFzXG4gICAgLy8gaW1wbGVtZW50ZWQgbmVnYXRpdmUgUlRMIHNjcm9sbGluZywgc2luY2UgYWxsIG90aGVyIGltcGxlbWVudGF0aW9ucyBoYXZlXG4gICAgLy8gb25seSBwb3NpdGl2ZSB2YWx1ZXMuXG4gICAgaWYgKG5ld1Njcm9sbExlZnQgPCAwKSB7XG4gICAgICAvLyBVbmRvIHRoZSBzY3JvbGxMZWZ0IHRlc3QgY2hlY2tcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoaW5pdGlhbFNjcm9sbExlZnQpO1xuICAgICAgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlKHRoaXMuYWRhcHRlcl8pO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3RDbGllbnRSZWN0ID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlU2Nyb2xsQXJlYUNsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250ZW50Q2xpZW50UmVjdCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcmlnaHRFZGdlRGVsdGEgPSBNYXRoLnJvdW5kKGNvbnRlbnRDbGllbnRSZWN0LnJpZ2h0IC0gcm9vdENsaWVudFJlY3QucmlnaHQpO1xuICAgIC8vIFVuZG8gdGhlIHNjcm9sbExlZnQgdGVzdCBjaGVja1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoaW5pdGlhbFNjcm9sbExlZnQpO1xuXG4gICAgLy8gQnkgY2FsY3VsYXRpbmcgdGhlIGNsaWVudFJlY3Qgb2YgdGhlIHJvb3QgZWxlbWVudCBhbmQgdGhlIGNsaWVudFJlY3Qgb2ZcbiAgICAvLyB0aGUgY29udGVudCBlbGVtZW50LCB3ZSBjYW4gZGV0ZXJtaW5lIGhvdyBtdWNoIHRoZSBzY3JvbGwgdmFsdWUgY2hhbmdlZFxuICAgIC8vIHdoZW4gd2UgcGVyZm9ybWVkIHRoZSBzY3JvbGxMZWZ0IHN1YnRyYWN0aW9uIGFib3ZlLlxuICAgIGlmIChyaWdodEVkZ2VEZWx0YSA9PT0gbmV3U2Nyb2xsTGVmdCkge1xuICAgICAgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UodGhpcy5hZGFwdGVyXyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQodGhpcy5hZGFwdGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzUlRMXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXIgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJ9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXIocm9vdCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHByaXZhdGUgez9FbGVtZW50fSAqL1xuICAgIHRoaXMuY29udGVudF87XG5cbiAgICAvKiogQHByaXZhdGUgez9FbGVtZW50fSAqL1xuICAgIHRoaXMuYXJlYV87XG5cbiAgICAvKiogQHByaXZhdGUgez9mdW5jdGlvbig/RXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl87XG5cbiAgICAvKiogQHByaXZhdGUgez9mdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXztcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5hcmVhXyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uc3RyaW5ncy5BUkVBX1NFTEVDVE9SKTtcbiAgICB0aGlzLmNvbnRlbnRfID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fID0gKCkgPT4gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVJbnRlcmFjdGlvbigpO1xuICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8gPSAoZXZ0KSA9PiB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KTtcblxuICAgIHRoaXMuYXJlYV8uYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLmhhbmRsZUludGVyYWN0aW9uXyk7XG4gICAgdGhpcy5hcmVhXy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuYXJlYV8uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUludGVyYWN0aW9uXyk7XG4gICAgdGhpcy5hcmVhXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUludGVyYWN0aW9uXyk7XG4gICAgdGhpcy5hcmVhXy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuY29udGVudF8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmFyZWFfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuYXJlYV8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fKTtcbiAgICB0aGlzLmFyZWFfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuYXJlYV8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbl8pO1xuICAgIHRoaXMuYXJlYV8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25fKTtcbiAgICB0aGlzLmNvbnRlbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgY29uc3QgYWRhcHRlciA9IC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcn0gKi8gKHtcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yOiAoZXZ0VGFyZ2V0LCBzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIGV2dFRhcmdldFtNQVRDSEVTXShzZWxlY3Rvcik7XG4gICAgICB9LFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLmFyZWFfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+IHRoaXMuYXJlYV8uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUpLFxuICAgICAgc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHk6IChwcm9wLCB2YWx1ZSkgPT4gdGhpcy5jb250ZW50Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSksXG4gICAgICBnZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZTogKHByb3BOYW1lKSA9PiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbnRlbnRfKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoc2Nyb2xsWCkgPT4gdGhpcy5hcmVhXy5zY3JvbGxMZWZ0ID0gc2Nyb2xsWCxcbiAgICAgIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB0aGlzLmFyZWFfLnNjcm9sbExlZnQsXG4gICAgICBnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuY29udGVudF8ub2Zmc2V0V2lkdGgsXG4gICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuYXJlYV8ub2Zmc2V0V2lkdGgsXG4gICAgICBjb21wdXRlU2Nyb2xsQXJlYUNsaWVudFJlY3Q6ICgpID0+IHRoaXMuYXJlYV8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3Q6ICgpID0+IHRoaXMuY29udGVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogKCkgPT4gdXRpbC5jb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodChkb2N1bWVudCksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZpc3VhbCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRfLm9mZnNldFdpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudHMgdGhlIHNjcm9sbCB2YWx1ZSBieSB0aGUgZ2l2ZW4gYW1vdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYSW5jcmVtZW50IFRoZSBwaXhlbCB2YWx1ZSBieSB3aGljaCB0byBpbmNyZW1lbnQgdGhlIHNjcm9sbCB2YWx1ZVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBwaXhlbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgcGl4ZWwgdmFsdWUgdG8gc2Nyb2xsIHRvXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zY3JvbGxUbyhzY3JvbGxYKTtcbiAgfVxufVxuXG5leHBvcnQge01EQ1RhYlNjcm9sbGVyLCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24sIHV0aWx9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMIGZyb20gJy4vcnRsLXNjcm9sbGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJTY3JvbGxlclJUTH1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQgZXh0ZW5kcyBNRENUYWJTY3JvbGxlclJUTCB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCB7cmlnaHR9ID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICAvLyBTY3JvbGwgdmFsdWVzIG9uIG1vc3QgYnJvd3NlcnMgYXJlIGludHMgaW5zdGVhZCBvZiBmbG9hdHMgc28gd2Ugcm91bmRcbiAgICByZXR1cm4gTWF0aC5yb3VuZChyaWdodCAtIGN1cnJlbnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBzY3JvbGxUb1JUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhlZGdlcy5yaWdodCAtIHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgpIHtcbiAgICByZXR1cm4gc2Nyb2xsWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxFZGdlc18oKSB7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gKi8gKHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLmxlZnQsIHNjcm9sbFgpLCBlZGdlcy5yaWdodCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtZGVmYXVsdC1zY3JvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtZGVmYXVsdC1zY3JvbGxlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMIGZyb20gJy4vcnRsLXNjcm9sbGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJTY3JvbGxlclJUTH1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIGV4dGVuZHMgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRyYW5zbGF0ZVggVGhlIGN1cnJlbnQgdHJhbnNsYXRlWCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodHJhbnNsYXRlWCAtIGN1cnJlbnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBzY3JvbGxUb1JUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKC1zY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxYLCB0cmFuc2xhdGVYKSB7XG4gICAgcmV0dXJuIHNjcm9sbFggLSB0cmFuc2xhdGVYO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpIHtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSAqLyAoe1xuICAgICAgbGVmdDogcm9vdFdpZHRoIC0gY29udGVudFdpZHRoLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oZWRnZXMucmlnaHQsIHNjcm9sbFgpLCBlZGdlcy5sZWZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtbmVnYXRpdmUtc2Nyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLW5lZ2F0aXZlLXNjcm9sbGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICAqIEBsaWNlbnNlXG4gICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgKlxuICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICpcbiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAqXG4gICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYlNjcm9sbGVyUlRMfVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSBleHRlbmRzIE1EQ1RhYlNjcm9sbGVyUlRMIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uUlRMKHRyYW5zbGF0ZVgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAvLyBTY3JvbGwgdmFsdWVzIG9uIG1vc3QgYnJvd3NlcnMgYXJlIGludHMgaW5zdGVhZCBvZiBmbG9hdHMgc28gd2Ugcm91bmRcbiAgICByZXR1cm4gTWF0aC5yb3VuZChjdXJyZW50U2Nyb2xsTGVmdCAtIHRyYW5zbGF0ZVgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY3VycmVudFNjcm9sbExlZnQgLSBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhjdXJyZW50U2Nyb2xsTGVmdCArIHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGN1cnJlbnRTY3JvbGxMZWZ0IC0gY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24oc2Nyb2xsWCwgdHJhbnNsYXRlWCkge1xuICAgIHJldHVybiBzY3JvbGxYICsgdHJhbnNsYXRlWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxFZGdlc18oKSB7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gKi8gKHtcbiAgICAgIGxlZnQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLnJpZ2h0LCBzY3JvbGxYKSwgZWRnZXMubGVmdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtcmV2ZXJzZS1zY3JvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtcmV2ZXJzZS1zY3JvbGxlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAgKiBAbGljZW5zZVxuICAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICpcbiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAqXG4gICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgKlxuICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYlNjcm9sbGVyQWRhcHRlciwgTURDVGFiU2Nyb2xsZXJBbmltYXRpb259IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMIHtcbiAgLyoqIEBwYXJhbSB7IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRyYW5zbGF0ZVggVGhlIGN1cnJlbnQgdHJhbnNsYXRlWCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb25SVEwodHJhbnNsYXRlWCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIGN1cnJlbnQgc2Nyb2xsWCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxYLCB0cmFuc2xhdGVYKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLXNjcm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1zY3JvbGxlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nLlxuICogQHByaXZhdGUge251bWJlcnx1bmRlZmluZWR9XG4gKi9cbmxldCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGVpZ2h0IG9mIGJyb3dzZXItcmVuZGVyZWQgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIHVzaW5nIGEgc2VsZi1jcmVhdGVkIHRlc3QgZWxlbWVudC5cbiAqIE1heSByZXR1cm4gMCAoZS5nLiBvbiBPUyBYIGJyb3dzZXJzIHVuZGVyIGRlZmF1bHQgY29uZmlndXJhdGlvbikuXG4gKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZENhY2hlUmVzdWx0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50T2JqLCBzaG91bGRDYWNoZVJlc3VsdCA9IHRydWUpIHtcbiAgaWYgKHNob3VsZENhY2hlUmVzdWx0ICYmIHR5cGVvZiBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF87XG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50T2JqLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuU0NST0xMX1RFU1QpO1xuICBkb2N1bWVudE9iai5ib2R5LmFwcGVuZENoaWxkKGVsKTtcblxuICBjb25zdCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xuICBkb2N1bWVudE9iai5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcblxuICBpZiAoc2hvdWxkQ2FjaGVSZXN1bHQpIHtcbiAgICBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyA9IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7IUFycmF5PHN0cmluZz59XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICByZXR1cm4gW1xuICAgICdtc01hdGNoZXNTZWxlY3RvcicsICdtYXRjaGVzJyxcbiAgXS5maWx0ZXIoKHApID0+IHAgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpLnBvcCgpO1xufVxuXG5leHBvcnQge2NvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0LCBnZXRNYXRjaGVzUHJvcGVydHl9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3V0aWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIE1EQ1RhYkRpbWVuc2lvbnMgcHJvdmlkZXMgZGV0YWlscyBhYm91dCB0aGUgbGVmdCBhbmQgcmlnaHQgZWRnZXMgb2YgdGhlIFRhYlxuICogcm9vdCBlbGVtZW50IGFuZCB0aGUgVGFiIGNvbnRlbnQgZWxlbWVudC4gVGhlc2UgdmFsdWVzIGFyZSB1c2VkIHRvIGRldGVybWluZVxuICogdGhlIHZpc3VhbCBwb3NpdGlvbiBvZiB0aGUgVGFiIHdpdGggcmVzcGVjdCBpdCdzIHBhcmVudCBjb250YWluZXIuXG4gKiBAdHlwZWRlZiB7e3Jvb3RMZWZ0OiBudW1iZXIsIHJvb3RSaWdodDogbnVtYmVyLCBjb250ZW50TGVmdDogbnVtYmVyLCBjb250ZW50UmlnaHQ6IG51bWJlcn19XG4gKi9cbmxldCBNRENUYWJEaW1lbnNpb25zO1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUYWIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiICBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiQWRhcHRlciB7XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRXZlbnRIYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzTmFtZSBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSByb290IGVsZW1lbnQgaGFzIHRoZSBnaXZlbiBjbGFzc05hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgZ2l2ZW4gYXR0ck5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzbyBnaXZlIHRoZSBhdHRyaWJ1dGVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5kaWNhdG9yIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3Q9fSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgVGhlIGNsaWVudCByZWN0IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2YXRlZCBpbmRpY2F0b3JcbiAgICovXG4gIGFjdGl2YXRlSW5kaWNhdG9yKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge31cblxuICAvKiogRGVhY3RpdmF0ZXMgdGhlIGluZGljYXRvci4gKi9cbiAgZGVhY3RpdmF0ZUluZGljYXRvcigpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsaWVudCByZWN0IG9mIHRoZSBpbmRpY2F0b3IuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgTURDVGFiOmludGVyYWN0ZWQgZXZlbnQgZm9yIHVzZSBieSBwYXJlbnQgY29tcG9uZW50c1xuICAgKi9cbiAgbm90aWZ5SW50ZXJhY3RlZCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldExlZnQgdmFsdWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0T2Zmc2V0TGVmdCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldFdpZHRoIHZhbHVlIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0TGVmdCBvZiB0aGUgY29udGVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRDb250ZW50T2Zmc2V0TGVmdCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldFdpZHRoIG9mIHRoZSBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldENvbnRlbnRPZmZzZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgZm9jdXMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgKi9cbiAgZm9jdXMoKSB7fVxufVxuXG5leHBvcnQge01EQ1RhYkRpbWVuc2lvbnMsIE1EQ1RhYkFkYXB0ZXJ9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQUNUSVZFOiAnbWRjLXRhYi0tYWN0aXZlJyxcbiAgQU5JTUFUSU5HX0FDVElWQVRFOiAnbWRjLXRhYi0tYW5pbWF0aW5nLWFjdGl2YXRlJyxcbiAgQU5JTUFUSU5HX0RFQUNUSVZBVEU6ICdtZGMtdGFiLS1hbmltYXRpbmctZGVhY3RpdmF0ZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfU0VMRUNURUQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgUklQUExFX1NFTEVDVE9SOiAnLm1kYy10YWJfX3JpcHBsZScsXG4gIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLXRhYl9fY29udGVudCcsXG4gIFRBQl9JTkRJQ0FUT1JfU0VMRUNUT1I6ICcubWRjLXRhYi1pbmRpY2F0b3InLFxuICBUQUJJTkRFWDogJ3RhYkluZGV4JyxcbiAgSU5URVJBQ1RFRF9FVkVOVDogJ01EQ1RhYjppbnRlcmFjdGVkJyxcbn07XG5cbmV4cG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiQWRhcHRlciwgTURDVGFiRGltZW5zaW9uc30gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuaW1wb3J0IHtcbiAgY3NzQ2xhc3NlcyxcbiAgc3RyaW5ncyxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUYWJBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJBZGFwdGVyIGZvciB0eXBpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7IU1EQ1RhYkFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJBZGFwdGVyfSAqLyAoe1xuICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVJbmRpY2F0b3I6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3Q6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5SW50ZXJhY3RlZDogKCkgPT4ge30sXG4gICAgICBnZXRPZmZzZXRMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGdldENvbnRlbnRPZmZzZXRMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBmb2N1czogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfID0gKGV2dCkgPT4gdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKD9FdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmhhbmRsZUNsaWNrXyA9ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckV2ZW50SGFuZGxlcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgXCJ0cmFuc2l0aW9uZW5kXCIgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dCBBIGJyb3dzZXIgZXZlbnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgLy8gRWFybHkgZXhpdCBmb3IgcmlwcGxlXG4gICAgaWYgKGV2dC5wc2V1ZG9FbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQUNUSVZBVEUpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRJTkdfREVBQ1RJVkFURSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgXCJjbGlja1wiIGV2ZW50XG4gICAqL1xuICBoYW5kbGVDbGljaygpIHtcbiAgICAvLyBJdCdzIHVwIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGtlZXAgdHJhY2sgb2YgdGhlIGFjdGl2ZSBUYWIgYW5kXG4gICAgLy8gZW5zdXJlIHdlIGRvbid0IGFjdGl2YXRlIGEgVGFiIHRoYXQncyBhbHJlYWR5IGFjdGl2ZS5cbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUludGVyYWN0ZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBUYWIncyBhY3RpdmUgc3RhdGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIFRhYlxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqL1xuICBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICAvLyBFYXJseSBleGl0XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQU5JTUFUSU5HX0FDVElWQVRFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAndHJ1ZScpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlRBQklOREVYLCAnMCcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVJbmRpY2F0b3IocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIFRhYlxuICAgKi9cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICAvLyBFYXJseSBleGl0XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkFOSU1BVElOR19ERUFDVElWQVRFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5UQUJJTkRFWCwgJy0xJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlSW5kaWNhdG9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kaWNhdG9yJ3MgY2xpZW50IHJlY3RcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5jb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIFRhYlxuICAgKiBAcmV0dXJuIHshTURDVGFiRGltZW5zaW9uc31cbiAgICovXG4gIGNvbXB1dGVEaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290TGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0TGVmdCgpO1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0Q29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgY29udGVudExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldENvbnRlbnRPZmZzZXRMZWZ0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm9vdExlZnQsXG4gICAgICByb290UmlnaHQ6IHJvb3RMZWZ0ICsgcm9vdFdpZHRoLFxuICAgICAgY29udGVudExlZnQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQsXG4gICAgICBjb250ZW50UmlnaHQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQgKyBjb250ZW50V2lkdGgsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZX0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCc7XG5pbXBvcnQge01EQ1RhYkluZGljYXRvciwgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbn0gZnJvbSAnQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvaW5kZXgnO1xuaW1wb3J0IHtNRENUYWJBZGFwdGVyLCBNRENUYWJEaW1lbnNpb25zfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5pbXBvcnQgTURDVGFiRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ1RhYkZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYiBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAvKiogQHByaXZhdGUgez9NRENSaXBwbGV9ICovXG4gICAgdGhpcy5yaXBwbGVfO1xuICAgIC8qKiBAcHJpdmF0ZSB7P01EQ1RhYkluZGljYXRvcn0gKi9cbiAgICB0aGlzLnRhYkluZGljYXRvcl87XG4gICAgLyoqIEBwcml2YXRlIHs/RWxlbWVudH0gKi9cbiAgICB0aGlzLmNvbnRlbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ1RhYn1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENUYWIocm9vdCk7XG4gIH1cblxuICBpbml0aWFsaXplKFxuICAgIHJpcHBsZUZhY3RvcnkgPSAoZWwsIGZvdW5kYXRpb24pID0+IG5ldyBNRENSaXBwbGUoZWwsIGZvdW5kYXRpb24pLFxuICAgIHRhYkluZGljYXRvckZhY3RvcnkgPSAoZWwpID0+IG5ldyBNRENUYWJJbmRpY2F0b3IoZWwpKSB7XG4gICAgY29uc3QgcmlwcGxlU3VyZmFjZSA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuUklQUExFX1NFTEVDVE9SKTtcbiAgICBjb25zdCByaXBwbGVBZGFwdGVyID0gT2JqZWN0LmFzc2lnbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcigvKiogQHR5cGUgeyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gKi8gKHRoaXMpKSwge1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHJpcHBsZVN1cmZhY2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHJpcHBsZVN1cmZhY2UuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gcmlwcGxlU3VyZmFjZS5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgfSk7XG4gICAgY29uc3QgcmlwcGxlRm91bmRhdGlvbiA9IG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKHJpcHBsZUFkYXB0ZXIpO1xuICAgIHRoaXMucmlwcGxlXyA9IHJpcHBsZUZhY3RvcnkodGhpcy5yb290XywgcmlwcGxlRm91bmRhdGlvbik7XG5cbiAgICBjb25zdCB0YWJJbmRpY2F0b3JFbGVtZW50ID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKE1EQ1RhYkZvdW5kYXRpb24uc3RyaW5ncy5UQUJfSU5ESUNBVE9SX1NFTEVDVE9SKTtcbiAgICB0aGlzLnRhYkluZGljYXRvcl8gPSB0YWJJbmRpY2F0b3JGYWN0b3J5KHRhYkluZGljYXRvckVsZW1lbnQpO1xuXG4gICAgdGhpcy5jb250ZW50XyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUik7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlXy5kZXN0cm95KCk7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENUYWJGb3VuZGF0aW9uKFxuICAgICAgLyoqIEB0eXBlIHshTURDVGFiQWRhcHRlcn0gKi8gKHtcbiAgICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PiB0aGlzLnJvb3RfLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSksXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiAocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSA9PiB0aGlzLnRhYkluZGljYXRvcl8uYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSxcbiAgICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4gdGhpcy50YWJJbmRpY2F0b3JfLmRlYWN0aXZhdGUoKSxcbiAgICAgICAgY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3Q6ICgpID0+IHRoaXMudGFiSW5kaWNhdG9yXy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKSxcbiAgICAgICAgbm90aWZ5SW50ZXJhY3RlZDogKCkgPT4gdGhpcy5lbWl0KE1EQ1RhYkZvdW5kYXRpb24uc3RyaW5ncy5JTlRFUkFDVEVEX0VWRU5ULCB7dGFiOiB0aGlzfSwgdHJ1ZSAvKiBidWJibGUgKi8pLFxuICAgICAgICBnZXRPZmZzZXRMZWZ0OiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldExlZnQsXG4gICAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLnJvb3RfLm9mZnNldFdpZHRoLFxuICAgICAgICBnZXRDb250ZW50T2Zmc2V0TGVmdDogKCkgPT4gdGhpcy5jb250ZW50Xy5vZmZzZXRMZWZ0LFxuICAgICAgICBnZXRDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuY29udGVudF8ub2Zmc2V0V2lkdGgsXG4gICAgICAgIGZvY3VzOiAoKSA9PiB0aGlzLnJvb3RfLmZvY3VzKCksXG4gICAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSB0YWJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uaXNBY3RpdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYlxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3RcbiAgICovXG4gIGFjdGl2YXRlKGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZShjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIHRhYlxuICAgKi9cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRpY2F0b3IncyBjbGllbnQgcmVjdFxuICAgKiBAcmV0dXJuIHshQ2xpZW50UmVjdH1cbiAgICovXG4gIGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYkRpbWVuc2lvbnN9XG4gICAqL1xuICBjb21wdXRlRGltZW5zaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5jb21wdXRlRGltZW5zaW9ucygpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGFiLCBNRENUYWJGb3VuZGF0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEZJWEVEOiAnbWRjLXRvb2xiYXItLWZpeGVkJyxcbiAgRklYRURfTEFTVFJPVzogJ21kYy10b29sYmFyLS1maXhlZC1sYXN0cm93LW9ubHknLFxuICBGSVhFRF9BVF9MQVNUX1JPVzogJ21kYy10b29sYmFyLS1maXhlZC1hdC1sYXN0LXJvdycsXG4gIFRPT0xCQVJfUk9XX0ZMRVhJQkxFOiAnbWRjLXRvb2xiYXItLWZsZXhpYmxlJyxcbiAgRkxFWElCTEVfREVGQVVMVF9CRUhBVklPUjogJ21kYy10b29sYmFyLS1mbGV4aWJsZS1kZWZhdWx0LWJlaGF2aW9yJyxcbiAgRkxFWElCTEVfTUFYOiAnbWRjLXRvb2xiYXItLWZsZXhpYmxlLXNwYWNlLW1heGltaXplZCcsXG4gIEZMRVhJQkxFX01JTjogJ21kYy10b29sYmFyLS1mbGV4aWJsZS1zcGFjZS1taW5pbWl6ZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIFRJVExFX1NFTEVDVE9SOiAnLm1kYy10b29sYmFyX190aXRsZScsXG4gIElDT05fU0VMRUNUT1I6ICcubWRjLXRvb2xiYXJfX2ljb24nLFxuICBGSVJTVF9ST1dfU0VMRUNUT1I6ICcubWRjLXRvb2xiYXJfX3JvdzpmaXJzdC1jaGlsZCcsXG4gIENIQU5HRV9FVkVOVDogJ01EQ1Rvb2xiYXI6Y2hhbmdlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBudW1iZXJzID0ge1xuICBNQVhfVElUTEVfU0laRTogMi4xMjUsXG4gIE1JTl9USVRMRV9TSVpFOiAxLjI1LFxuICBUT09MQkFSX1JPV19IRUlHSFQ6IDY0LFxuICBUT09MQkFSX1JPV19NT0JJTEVfSEVJR0hUOiA1NixcbiAgVE9PTEJBUl9NT0JJTEVfQlJFQUtQT0lOVDogNjAwLFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b29sYmFyL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3Rvb2xiYXIvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNRENUb29sYmFyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclNjcm9sbEhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGdldFZpZXdwb3J0V2lkdGg6ICgpID0+IC8qIG51bWJlciAqLyAwLFxuICAgICAgZ2V0Vmlld3BvcnRTY3JvbGxZOiAoKSA9PiAvKiBudW1iZXIgKi8gMCxcbiAgICAgIGdldE9mZnNldEhlaWdodDogKCkgPT4gLyogbnVtYmVyICovIDAsXG4gICAgICBnZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQ6ICgpID0+IC8qIG51bWJlciAqLyAwLFxuICAgICAgbm90aWZ5Q2hhbmdlOiAoLyogZXZ0RGF0YToge2ZsZXhpYmxlRXhwYW5zaW9uUmF0aW86IG51bWJlcn0gKi8pID0+IHt9LFxuICAgICAgc2V0U3R5bGU6ICgvKiBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHNldFN0eWxlRm9yVGl0bGVFbGVtZW50OiAoLyogcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBzZXRTdHlsZUZvckZsZXhpYmxlUm93RWxlbWVudDogKC8qIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0U3R5bGVGb3JGaXhlZEFkanVzdEVsZW1lbnQ6ICgvKiBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVG9vbGJhckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5jaGVja1Jvd0hlaWdodF8oKTtcbiAgICB0aGlzLnNjcm9sbEhhbmRsZXJfID0gKCkgPT4gdGhpcy51cGRhdGVUb29sYmFyU3R5bGVzXygpO1xuICAgIHRoaXMuY2hlY2tSb3dIZWlnaHRGcmFtZV8gPSAwO1xuICAgIHRoaXMuc2Nyb2xsRnJhbWVfID0gMDtcbiAgICB0aGlzLmV4ZWN1dGVkTGFzdENoYW5nZV8gPSBmYWxzZTtcblxuICAgIHRoaXMuY2FsY3VsYXRpb25zXyA9IHtcbiAgICAgIHRvb2xiYXJSb3dIZWlnaHQ6IDAsXG4gICAgICAvLyBDYWxjdWxhdGVkIEhlaWdodCByYXRpby4gV2UgdXNlIHJhdGlvIHRvIGNhbGN1bGF0ZSBjb3JyZXNwb25kaW5nIGhlaWdodHMgaW4gcmVzaXplIGV2ZW50LlxuICAgICAgdG9vbGJhclJhdGlvOiAwLCAvLyBUaGUgcmF0aW8gb2YgdG9vbGJhciBoZWlnaHQgdG8gcm93IGhlaWdodFxuICAgICAgZmxleGlibGVFeHBhbnNpb25SYXRpbzogMCwgLy8gVGhlIHJhdGlvIG9mIGZsZXhpYmxlIHNwYWNlIGhlaWdodCB0byByb3cgaGVpZ2h0XG4gICAgICBtYXhUcmFuc2xhdGVZUmF0aW86IDAsIC8vIFRoZSByYXRpbyBvZiBtYXggdG9vbGJhciBtb3ZlIHVwIGRpc3RhbmNlIHRvIHJvdyBoZWlnaHRcbiAgICAgIHNjcm9sbFRocmVzaG9sZFJhdGlvOiAwLCAvLyBUaGUgcmF0aW8gb2YgbWF4IHNjcm9sbFRvcCB0aGF0IHdlIHNob3VsZCBsaXN0ZW4gdG8gdG8gcm93IGhlaWdodFxuICAgICAgLy8gRGVyaXZlZCBIZWlnaHRzIGJhc2VkIG9uIHRoZSBhYm92ZSBrZXkgcmF0aW9zLlxuICAgICAgdG9vbGJhckhlaWdodDogMCxcbiAgICAgIGZsZXhpYmxlRXhwYW5zaW9uSGVpZ2h0OiAwLCAvLyBGbGV4aWJsZSByb3cgbWludXMgdG9vbGJhciBoZWlnaHQgKGRlcml2ZWQpXG4gICAgICBtYXhUcmFuc2xhdGVZRGlzdGFuY2U6IDAsIC8vIFdoZW4gdG9vbGJhciBvbmx5IGZpeCBsYXN0IHJvdyAoZGVyaXZlZClcbiAgICAgIHNjcm9sbFRocmVzaG9sZDogMCxcbiAgICB9O1xuICAgIC8vIFRvb2xiYXIgZml4ZWQgYmVoYXZpb3JcbiAgICAvLyBJZiB0b29sYmFyIGlzIGZpeGVkXG4gICAgdGhpcy5maXhlZF8gPSBmYWxzZTtcbiAgICAvLyBJZiBmaXhlZCBpcyB0YXJnZXRlZCBvbmx5IGF0IHRoZSBsYXN0IHJvd1xuICAgIHRoaXMuZml4ZWRMYXN0cm93XyA9IGZhbHNlO1xuICAgIC8vIFRvb2xiYXIgZmxleGlibGUgYmVoYXZpb3JcbiAgICAvLyBJZiB0aGUgZmlyc3Qgcm93IGlzIGZsZXhpYmxlXG4gICAgdGhpcy5oYXNGbGV4aWJsZVJvd18gPSBmYWxzZTtcbiAgICAvLyBJZiB1c2UgdGhlIGRlZmF1bHQgYmVoYXZpb3JcbiAgICB0aGlzLnVzZUZsZXhEZWZhdWx0QmVoYXZpb3JfID0gZmFsc2U7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZml4ZWRfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZJWEVEKTtcbiAgICB0aGlzLmZpeGVkTGFzdHJvd18gPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRklYRURfTEFTVFJPVykgJiB0aGlzLmZpeGVkXztcbiAgICB0aGlzLmhhc0ZsZXhpYmxlUm93XyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5UT09MQkFSX1JPV19GTEVYSUJMRSk7XG4gICAgaWYgKHRoaXMuaGFzRmxleGlibGVSb3dfKSB7XG4gICAgICB0aGlzLnVzZUZsZXhEZWZhdWx0QmVoYXZpb3JfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZMRVhJQkxFX0RFRkFVTFRfQkVIQVZJT1IpO1xuICAgIH1cbiAgICB0aGlzLmluaXRLZXlSYXRpb18oKTtcbiAgICB0aGlzLnNldEtleUhlaWdodHNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclNjcm9sbEhhbmRsZXIodGhpcy5zY3JvbGxIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcih0aGlzLnNjcm9sbEhhbmRsZXJfKTtcbiAgfVxuXG4gIHVwZGF0ZUFkanVzdEVsZW1lbnRTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuZml4ZWRfKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlRm9yRml4ZWRBZGp1c3RFbGVtZW50KCdtYXJnaW4tdG9wJywgYCR7dGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJIZWlnaHR9cHhgKTtcbiAgICB9XG4gIH1cblxuICBnZXRGbGV4aWJsZUV4cGFuc2lvblJhdGlvXyhzY3JvbGxUb3ApIHtcbiAgICAvLyBUbyBwcmV2ZW50IGRpdmlzaW9uIGJ5IHplcm8gd2hlbiB0aGVyZSBpcyBubyBmbGV4aWJsZUV4cGFuc2lvbkhlaWdodFxuICAgIGNvbnN0IGRlbHRhID0gMC4wMDAxO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCAxIC0gc2Nyb2xsVG9wIC8gKHRoaXMuY2FsY3VsYXRpb25zXy5mbGV4aWJsZUV4cGFuc2lvbkhlaWdodCArIGRlbHRhKSk7XG4gIH1cblxuICBjaGVja1Jvd0hlaWdodF8oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5jaGVja1Jvd0hlaWdodEZyYW1lXyk7XG4gICAgdGhpcy5jaGVja1Jvd0hlaWdodEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnNldEtleUhlaWdodHNfKCkpO1xuICB9XG5cbiAgc2V0S2V5SGVpZ2h0c18oKSB7XG4gICAgY29uc3QgbmV3VG9vbGJhclJvd0hlaWdodCA9IHRoaXMuZ2V0Um93SGVpZ2h0XygpO1xuICAgIGlmIChuZXdUb29sYmFyUm93SGVpZ2h0ICE9PSB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHQgPSBuZXdUb29sYmFyUm93SGVpZ2h0O1xuICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJIZWlnaHQgPSB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJhdGlvICogdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHQ7XG4gICAgICB0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25IZWlnaHQgPVxuICAgICAgICB0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25SYXRpbyAqIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUm93SGVpZ2h0O1xuICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLm1heFRyYW5zbGF0ZVlEaXN0YW5jZSA9XG4gICAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5tYXhUcmFuc2xhdGVZUmF0aW8gKiB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodDtcbiAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5zY3JvbGxUaHJlc2hvbGQgPVxuICAgICAgICB0aGlzLmNhbGN1bGF0aW9uc18uc2Nyb2xsVGhyZXNob2xkUmF0aW8gKiB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodDtcbiAgICAgIHRoaXMudXBkYXRlQWRqdXN0RWxlbWVudFN0eWxlcygpO1xuICAgICAgdGhpcy51cGRhdGVUb29sYmFyU3R5bGVzXygpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRvb2xiYXJTdHlsZXNfKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsRnJhbWVfKTtcbiAgICB0aGlzLnNjcm9sbEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuICAgICAgY29uc3QgaGFzU2Nyb2xsZWRPdXRPZlRocmVzaG9sZCA9IHRoaXMuc2Nyb2xsZWRPdXRPZlRocmVzaG9sZF8oc2Nyb2xsVG9wKTtcblxuICAgICAgaWYgKGhhc1Njcm9sbGVkT3V0T2ZUaHJlc2hvbGQgJiYgdGhpcy5leGVjdXRlZExhc3RDaGFuZ2VfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxleGlibGVFeHBhbnNpb25SYXRpbyA9IHRoaXMuZ2V0RmxleGlibGVFeHBhbnNpb25SYXRpb18oc2Nyb2xsVG9wKTtcblxuICAgICAgdGhpcy51cGRhdGVUb29sYmFyRmxleGlibGVTdGF0ZV8oZmxleGlibGVFeHBhbnNpb25SYXRpbyk7XG4gICAgICBpZiAodGhpcy5maXhlZExhc3Ryb3dfKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVG9vbGJhckZpeGVkU3RhdGVfKHNjcm9sbFRvcCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oYXNGbGV4aWJsZVJvd18pIHtcbiAgICAgICAgdGhpcy51cGRhdGVGbGV4aWJsZVJvd0VsZW1lbnRTdHlsZXNfKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8pO1xuICAgICAgfVxuICAgICAgdGhpcy5leGVjdXRlZExhc3RDaGFuZ2VfID0gaGFzU2Nyb2xsZWRPdXRPZlRocmVzaG9sZDtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2hhbmdlKHtmbGV4aWJsZUV4cGFuc2lvblJhdGlvOiBmbGV4aWJsZUV4cGFuc2lvblJhdGlvfSk7XG4gICAgfSk7XG4gIH1cblxuICBzY3JvbGxlZE91dE9mVGhyZXNob2xkXyhzY3JvbGxUb3ApIHtcbiAgICByZXR1cm4gc2Nyb2xsVG9wID4gdGhpcy5jYWxjdWxhdGlvbnNfLnNjcm9sbFRocmVzaG9sZDtcbiAgfVxuXG4gIGluaXRLZXlSYXRpb18oKSB7XG4gICAgY29uc3QgdG9vbGJhclJvd0hlaWdodCA9IHRoaXMuZ2V0Um93SGVpZ2h0XygpO1xuICAgIGNvbnN0IGZpcnN0Um93TWF4UmF0aW8gPSB0aGlzLmFkYXB0ZXJfLmdldEZpcnN0Um93RWxlbWVudE9mZnNldEhlaWdodCgpIC8gdG9vbGJhclJvd0hlaWdodDtcbiAgICB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJhdGlvID0gdGhpcy5hZGFwdGVyXy5nZXRPZmZzZXRIZWlnaHQoKSAvIHRvb2xiYXJSb3dIZWlnaHQ7XG4gICAgdGhpcy5jYWxjdWxhdGlvbnNfLmZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gPSBmaXJzdFJvd01heFJhdGlvIC0gMTtcbiAgICB0aGlzLmNhbGN1bGF0aW9uc18ubWF4VHJhbnNsYXRlWVJhdGlvID1cbiAgICAgIHRoaXMuZml4ZWRMYXN0cm93XyA/IHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUmF0aW8gLSBmaXJzdFJvd01heFJhdGlvIDogMDtcbiAgICB0aGlzLmNhbGN1bGF0aW9uc18uc2Nyb2xsVGhyZXNob2xkUmF0aW8gPVxuICAgICAgKHRoaXMuZml4ZWRMYXN0cm93XyA/IHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUmF0aW8gOiBmaXJzdFJvd01heFJhdGlvKSAtIDE7XG4gIH1cblxuICBnZXRSb3dIZWlnaHRfKCkge1xuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBNRENUb29sYmFyRm91bmRhdGlvbi5udW1iZXJzLlRPT0xCQVJfTU9CSUxFX0JSRUFLUE9JTlQ7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRXaWR0aCgpIDwgYnJlYWtwb2ludCA/XG4gICAgICBNRENUb29sYmFyRm91bmRhdGlvbi5udW1iZXJzLlRPT0xCQVJfUk9XX01PQklMRV9IRUlHSFQgOiBNRENUb29sYmFyRm91bmRhdGlvbi5udW1iZXJzLlRPT0xCQVJfUk9XX0hFSUdIVDtcbiAgfVxuXG4gIHVwZGF0ZVRvb2xiYXJGbGV4aWJsZVN0YXRlXyhmbGV4aWJsZUV4cGFuc2lvblJhdGlvKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZMRVhJQkxFX01BWCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZMRVhJQkxFX01JTik7XG4gICAgaWYgKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gPT09IDEpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GTEVYSUJMRV9NQVgpO1xuICAgIH0gZWxzZSBpZiAoZmxleGlibGVFeHBhbnNpb25SYXRpbyA9PT0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZMRVhJQkxFX01JTik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVG9vbGJhckZpeGVkU3RhdGVfKHNjcm9sbFRvcCkge1xuICAgIGNvbnN0IHRyYW5zbGF0ZURpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oXG4gICAgICBzY3JvbGxUb3AgLSB0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25IZWlnaHQsXG4gICAgICB0aGlzLmNhbGN1bGF0aW9uc18ubWF4VHJhbnNsYXRlWURpc3RhbmNlKSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHstdHJhbnNsYXRlRGlzdGFuY2V9cHgpYCk7XG5cbiAgICBpZiAodHJhbnNsYXRlRGlzdGFuY2UgPT09IHRoaXMuY2FsY3VsYXRpb25zXy5tYXhUcmFuc2xhdGVZRGlzdGFuY2UpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GSVhFRF9BVF9MQVNUX1JPVyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GSVhFRF9BVF9MQVNUX1JPVyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmxleGlibGVSb3dFbGVtZW50U3R5bGVzXyhmbGV4aWJsZUV4cGFuc2lvblJhdGlvKSB7XG4gICAgaWYgKHRoaXMuZml4ZWRfKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25IZWlnaHQgKiBmbGV4aWJsZUV4cGFuc2lvblJhdGlvO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZUZvckZsZXhpYmxlUm93RWxlbWVudCgnaGVpZ2h0JyxcbiAgICAgICAgYCR7aGVpZ2h0ICsgdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHR9cHhgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudXNlRmxleERlZmF1bHRCZWhhdmlvcl8pIHtcbiAgICAgIHRoaXMudXBkYXRlRWxlbWVudFN0eWxlc0RlZmF1bHRCZWhhdmlvcl8oZmxleGlibGVFeHBhbnNpb25SYXRpbyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRWxlbWVudFN0eWxlc0RlZmF1bHRCZWhhdmlvcl8oZmxleGlibGVFeHBhbnNpb25SYXRpbykge1xuICAgIGNvbnN0IG1heFRpdGxlU2l6ZSA9IE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLm51bWJlcnMuTUFYX1RJVExFX1NJWkU7XG4gICAgY29uc3QgbWluVGl0bGVTaXplID0gTURDVG9vbGJhckZvdW5kYXRpb24ubnVtYmVycy5NSU5fVElUTEVfU0laRTtcbiAgICBjb25zdCBjdXJyZW50VGl0bGVTaXplID0gKG1heFRpdGxlU2l6ZSAtIG1pblRpdGxlU2l6ZSkgKiBmbGV4aWJsZUV4cGFuc2lvblJhdGlvICsgbWluVGl0bGVTaXplO1xuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZUZvclRpdGxlRWxlbWVudCgnZm9udC1zaXplJywgYCR7Y3VycmVudFRpdGxlU2l6ZX1yZW1gKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3Rvb2xiYXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3Rvb2xiYXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge01EQ0NvbXBvbmVudH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvaW5kZXgnO1xuaW1wb3J0IHtNRENSaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnO1xuXG5pbXBvcnQgTURDVG9vbGJhckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuZXhwb3J0IHtNRENUb29sYmFyRm91bmRhdGlvbn07XG5cbmV4cG9ydCBjbGFzcyBNRENUb29sYmFyIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1Rvb2xiYXIocm9vdCk7XG4gIH1cblxuICBnZXQgZmlyc3RSb3dFbGVtZW50XygpIHtcbiAgICByZXR1cm4gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLnN0cmluZ3MuRklSU1RfUk9XX1NFTEVDVE9SKTtcbiAgfVxuXG4gIGdldCB0aXRsZUVsZW1lbnRfKCkge1xuICAgIHJldHVybiB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTURDVG9vbGJhckZvdW5kYXRpb24uc3RyaW5ncy5USVRMRV9TRUxFQ1RPUik7XG4gIH1cblxuICBzZXQgZml4ZWRBZGp1c3RFbGVtZW50KGZpeGVkQWRqdXN0RWxlbWVudCkge1xuICAgIHRoaXMuZml4ZWRBZGp1c3RFbGVtZW50XyA9IGZpeGVkQWRqdXN0RWxlbWVudDtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnVwZGF0ZUFkanVzdEVsZW1lbnRTdHlsZXMoKTtcbiAgfVxuXG4gIGdldCBmaXhlZEFkanVzdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWRBZGp1c3RFbGVtZW50XztcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5yaXBwbGVzXyA9IFtdLm1hcC5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChNRENUb29sYmFyRm91bmRhdGlvbi5zdHJpbmdzLklDT05fU0VMRUNUT1IpLCAoaWNvbikgPT4ge1xuICAgICAgY29uc3QgcmlwcGxlID0gTURDUmlwcGxlLmF0dGFjaFRvKGljb24pO1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZXNfLmZvckVhY2goKHJpcHBsZSkgPT4ge1xuICAgICAgcmlwcGxlLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDVG9vbGJhckZvdW5kYXRpb24oe1xuICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICByZWdpc3RlclNjcm9sbEhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZ2V0Vmlld3BvcnRXaWR0aDogKCkgPT4gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBnZXRWaWV3cG9ydFNjcm9sbFk6ICgpID0+IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgIGdldE9mZnNldEhlaWdodDogKCkgPT4gdGhpcy5yb290Xy5vZmZzZXRIZWlnaHQsXG4gICAgICBnZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQ6ICgpID0+IHRoaXMuZmlyc3RSb3dFbGVtZW50Xy5vZmZzZXRIZWlnaHQsXG4gICAgICBub3RpZnlDaGFuZ2U6IChldnREYXRhKSA9PiB0aGlzLmVtaXQoTURDVG9vbGJhckZvdW5kYXRpb24uc3RyaW5ncy5DSEFOR0VfRVZFTlQsIGV2dERhdGEpLFxuICAgICAgc2V0U3R5bGU6IChwcm9wZXJ0eSwgdmFsdWUpID0+IHRoaXMucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKSxcbiAgICAgIHNldFN0eWxlRm9yVGl0bGVFbGVtZW50OiAocHJvcGVydHksIHZhbHVlKSA9PiB0aGlzLnRpdGxlRWxlbWVudF8uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKSxcbiAgICAgIHNldFN0eWxlRm9yRmxleGlibGVSb3dFbGVtZW50OiAocHJvcGVydHksIHZhbHVlKSA9PiB0aGlzLmZpcnN0Um93RWxlbWVudF8uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKSxcbiAgICAgIHNldFN0eWxlRm9yRml4ZWRBZGp1c3RFbGVtZW50OiAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmZpeGVkQWRqdXN0RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuZml4ZWRBZGp1c3RFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b29sYmFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9vbGJhci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRvcCBBcHAgQmFyXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVG9wIEFwcCBCYXIgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RvcEFwcEJhckFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSByb290IEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIHJvb3QgRWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJvb3QgRWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgc3BlY2lmaWVkIGlubGluZSBzdHlsZSBwcm9wZXJ0eSBvbiB0aGUgcm9vdCBFbGVtZW50IHRvIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0U3R5bGUocHJvcGVydHksIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHRvcCBhcHAgYmFyLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRUb3BBcHBCYXJIZWlnaHQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlciBvbiB0aGUgbmF2aWdhdGlvbiBpY29uIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIG5hdmlnYXRpb24gaWNvbiBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIG5hdmlnYXRpb24gaWNvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgbm90aWZ5TmF2aWdhdGlvbkljb25DbGlja2VkKCkge31cblxuICAvKiogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpfSBoYW5kbGVyICovXG4gIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCl9IGhhbmRsZXIgKi9cbiAgZGVyZWdpc3RlclNjcm9sbEhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKiogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpfSBoYW5kbGVyICovXG4gIHJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCl9IGhhbmRsZXIgKi9cbiAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKiogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRWaWV3cG9ydFNjcm9sbFkoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldFRvdGFsQWN0aW9uSXRlbXMoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUb3BBcHBCYXJBZGFwdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2FkYXB0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEZJWEVEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1maXhlZCcsXG4gIEZJWEVEX1NDUk9MTEVEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1maXhlZC1zY3JvbGxlZCcsXG4gIFNIT1JUX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydCcsXG4gIFNIT1JUX0hBU19BQ1RJT05fSVRFTV9DTEFTUzogJ21kYy10b3AtYXBwLWJhci0tc2hvcnQtaGFzLWFjdGlvbi1pdGVtJyxcbiAgU0hPUlRfQ09MTEFQU0VEX0NMQVNTOiAnbWRjLXRvcC1hcHAtYmFyLS1zaG9ydC1jb2xsYXBzZWQnLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICBERUJPVU5DRV9USFJPVFRMRV9SRVNJWkVfVElNRV9NUzogMTAwLFxuICBNQVhfVE9QX0FQUF9CQVJfSEVJR0hUOiAxMjgsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFDVElPTl9JVEVNX1NFTEVDVE9SOiAnLm1kYy10b3AtYXBwLWJhcl9fYWN0aW9uLWl0ZW0nLFxuICBOQVZJR0FUSU9OX0VWRU5UOiAnTURDVG9wQXBwQmFyOm5hdicsXG4gIE5BVklHQVRJT05fSUNPTl9TRUxFQ1RPUjogJy5tZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbicsXG4gIFJPT1RfU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyJyxcbiAgVElUTEVfU0VMRUNUT1I6ICcubWRjLXRvcC1hcHAtYmFyX190aXRsZScsXG59O1xuXG5leHBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXMsIG51bWJlcnN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2NvbnN0YW50cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtjc3NDbGFzc2VzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IE1EQ1RvcEFwcEJhckFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlcic7XG5pbXBvcnQgTURDVG9wQXBwQmFyRm91bmRhdGlvbiBmcm9tICcuLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVG9wQXBwQmFyRm91bmRhdGlvbjwhTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24gZXh0ZW5kcyBNRENUb3BBcHBCYXJGb3VuZGF0aW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RvcEFwcEJhckFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihhZGFwdGVyKTtcbiAgICAvKiogU3RhdGUgdmFyaWFibGUgZm9yIHRoZSBwcmV2aW91cyBzY3JvbGwgaXRlcmF0aW9uIHRvcCBhcHAgYmFyIHN0YXRlICovXG4gICAgdGhpcy53YXNTY3JvbGxlZF8gPSBmYWxzZTtcblxuICAgIHRoaXMuc2Nyb2xsSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmZpeGVkU2Nyb2xsSGFuZGxlcl8oKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgc3VwZXIuaW5pdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJTY3JvbGxIYW5kbGVyKHRoaXMuc2Nyb2xsSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcih0aGlzLnNjcm9sbEhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgaGFuZGxlciBmb3IgYXBwbHlpbmcvcmVtb3ZpbmcgdGhlIG1vZGlmaWVyIGNsYXNzXG4gICAqIG9uIHRoZSBmaXhlZCB0b3AgYXBwIGJhci5cbiAgICovXG4gIGZpeGVkU2Nyb2xsSGFuZGxlcl8oKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbCA9IHRoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCk7XG5cbiAgICBpZiAoY3VycmVudFNjcm9sbCA8PSAwKSB7XG4gICAgICBpZiAodGhpcy53YXNTY3JvbGxlZF8pIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkZJWEVEX1NDUk9MTEVEX0NMQVNTKTtcbiAgICAgICAgdGhpcy53YXNTY3JvbGxlZF8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLndhc1Njcm9sbGVkXykge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuRklYRURfU0NST0xMRURfQ0xBU1MpO1xuICAgICAgICB0aGlzLndhc1Njcm9sbGVkXyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9maXhlZC9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvZml4ZWQvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgTURDVG9wQXBwQmFyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RvcEFwcEJhckFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7bnVtYmVyfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDVG9wQXBwQmFyQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENUb3BBcHBCYXJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVG9wQXBwQmFyQWRhcHRlcn0gKi8gKHtcbiAgICAgIGhhc0NsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHNldFN0eWxlOiAoLyogcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBnZXRUb3BBcHBCYXJIZWlnaHQ6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJOYXZpZ2F0aW9uSWNvbkludGVyYWN0aW9uSGFuZGxlcjogKC8qIHR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyTmF2aWdhdGlvbkljb25JbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiB0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgbm90aWZ5TmF2aWdhdGlvbkljb25DbGlja2VkOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclNjcm9sbEhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGdldFZpZXdwb3J0U2Nyb2xsWTogKCkgPT4gLyogbnVtYmVyICovIDAsXG4gICAgICBnZXRUb3RhbEFjdGlvbkl0ZW1zOiAoKSA9PiAvKiBudW1iZXIgKi8gMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENUb3BBcHBCYXJBZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcigvKiogQHR5cGUgeyFNRENUb3BBcHBCYXJBZGFwdGVyfSAqLyBhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgdGhpcy5uYXZDbGlja0hhbmRsZXJfID0gKCkgPT4gdGhpcy5hZGFwdGVyXy5ub3RpZnlOYXZpZ2F0aW9uSWNvbkNsaWNrZWQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyKCdjbGljaycsIHRoaXMubmF2Q2xpY2tIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyKCdjbGljaycsIHRoaXMubmF2Q2xpY2tIYW5kbGVyXyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBNRENUb3BBcHBCYXJBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQge01EQ1JpcHBsZX0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCc7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0ZpeGVkVG9wQXBwQmFyRm91bmRhdGlvbiBmcm9tICcuL2ZpeGVkL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiBmcm9tICcuL3Nob3J0L2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gZnJvbSAnLi9zdGFuZGFyZC9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDQ29tcG9uZW50PCFNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVG9wQXBwQmFyIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIC8qKiBAcHJpdmF0ZSB7P0VsZW1lbnR9ICovXG4gICAgdGhpcy5uYXZJY29uXztcbiAgICAvKiogQHR5cGUgez9BcnJheTxNRENSaXBwbGU+fSAqL1xuICAgIHRoaXMuaWNvblJpcHBsZXNfO1xuICB9XG5cbiAgaW5pdGlhbGl6ZShcbiAgICByaXBwbGVGYWN0b3J5ID0gKGVsKSA9PiBNRENSaXBwbGUuYXR0YWNoVG8oZWwpKSB7XG4gICAgdGhpcy5uYXZJY29uXyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLk5BVklHQVRJT05fSUNPTl9TRUxFQ1RPUik7XG5cbiAgICAvLyBHZXQgYWxsIGljb25zIGluIHRoZSB0b29sYmFyIGFuZCBpbnN0YW50aWF0ZSB0aGUgcmlwcGxlc1xuICAgIGNvbnN0IGljb25zID0gW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BQ1RJT05fSVRFTV9TRUxFQ1RPUikpO1xuICAgIGlmICh0aGlzLm5hdkljb25fKSB7XG4gICAgICBpY29ucy5wdXNoKHRoaXMubmF2SWNvbl8pO1xuICAgIH1cblxuICAgIHRoaXMuaWNvblJpcHBsZXNfID0gaWNvbnMubWFwKChpY29uKSA9PiB7XG4gICAgICBjb25zdCByaXBwbGUgPSByaXBwbGVGYWN0b3J5KGljb24pO1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmljb25SaXBwbGVzXy5mb3JFYWNoKChpY29uUmlwcGxlKSA9PiBpY29uUmlwcGxlLmRlc3Ryb3koKSk7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ1RvcEFwcEJhcn1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENUb3BBcHBCYXIocm9vdCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9ufVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLyoqIEB0eXBlIHshTURDVG9wQXBwQmFyQWRhcHRlcn0gKi9cbiAgICBjb25zdCBhZGFwdGVyID0gLyoqIEB0eXBlIHshTURDVG9wQXBwQmFyQWRhcHRlcn0gKi8gKE9iamVjdC5hc3NpZ24oe1xuICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBzZXRTdHlsZTogKHByb3BlcnR5LCB2YWx1ZSkgPT4gdGhpcy5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpLFxuICAgICAgZ2V0VG9wQXBwQmFySGVpZ2h0OiAoKSA9PiB0aGlzLnJvb3RfLmNsaWVudEhlaWdodCxcbiAgICAgIHJlZ2lzdGVyTmF2aWdhdGlvbkljb25JbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm5hdkljb25fKSB7XG4gICAgICAgICAgdGhpcy5uYXZJY29uXy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVyZWdpc3Rlck5hdmlnYXRpb25JY29uSW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5uYXZJY29uXykge1xuICAgICAgICAgIHRoaXMubmF2SWNvbl8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGlmeU5hdmlnYXRpb25JY29uQ2xpY2tlZDogKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoc3RyaW5ncy5OQVZJR0FUSU9OX0VWRU5ULCB7fSk7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJTY3JvbGxIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclNjcm9sbEhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciksXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGdldFZpZXdwb3J0U2Nyb2xsWTogKCkgPT4gd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgZ2V0VG90YWxBY3Rpb25JdGVtczogKCkgPT5cbiAgICAgICAgdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQUNUSU9OX0lURU1fU0VMRUNUT1IpLmxlbmd0aCxcbiAgICB9KVxuICAgICk7XG5cbiAgICAvKiogQHR5cGUgeyFNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbn0gKi9cbiAgICBsZXQgZm91bmRhdGlvbjtcbiAgICBpZiAodGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5TSE9SVF9DTEFTUykpIHtcbiAgICAgIGZvdW5kYXRpb24gPSBuZXcgTURDU2hvcnRUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5GSVhFRF9DTEFTUykpIHtcbiAgICAgIGZvdW5kYXRpb24gPSBuZXcgTURDRml4ZWRUb3BBcHBCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZGF0aW9uID0gbmV3IE1EQ1RvcEFwcEJhckZvdW5kYXRpb24oYWRhcHRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kYXRpb247XG4gIH1cbn1cblxuZXhwb3J0IHtNRENUb3BBcHBCYXIsIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uLFxuICBNRENUb3BBcHBCYXJGb3VuZGF0aW9uLCBNRENGaXhlZFRvcEFwcEJhckZvdW5kYXRpb24sXG4gIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJpcHBsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBDU1MgdmFyaWFibGVzXG4gKiAtIHBvc2l0aW9uXG4gKiAtIGRpbWVuc2lvbnNcbiAqIC0gc2Nyb2xsIHBvc2l0aW9uXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIHVuYm91bmRlZCwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdGF0ZXNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzVW5ib3VuZGVkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlQWN0aXZlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlRGlzYWJsZWQoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXQgKi9cbiAgY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YXJOYW1lXG4gICAqIEBwYXJhbSB7P251bWJlcnxzdHJpbmd9IHZhbHVlXG4gICAqL1xuICB1cGRhdGVDc3NWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge31cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICBnZXRXaW5kb3dQYWdlT2Zmc2V0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlQWRhcHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Z2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzQWN0aXZhdGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgYWN0aXZhdGlvbkV2ZW50OiBFdmVudCxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZm9jdXM6IGZ1bmN0aW9uKCksXG4gKiAgIGJsdXI6IGZ1bmN0aW9uKClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lcnNUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHg6IG51bWJlcixcbiAqICAgeTogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgUG9pbnRUeXBlO1xuXG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxuY29uc3QgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93biddO1xuXG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbmNvbnN0IFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCddO1xuXG4vLyBUcmFja3MgYWN0aXZhdGlvbnMgdGhhdCBoYXZlIG9jY3VycmVkIG9uIHRoZSBjdXJyZW50IGZyYW1lLCB0byBhdm9pZCBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG4vKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqL1xubGV0IGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDUmlwcGxlQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gLyogYm9vbGVhbiAtIGNhY2hlZCAqLyB7fSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0ICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YXJOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyB7fSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IC8qIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gKi8ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUNsaWVudFJlY3R9ICovXG4gICAgdGhpcy5mcmFtZV8gPSAvKiogQHR5cGUgeyFDbGllbnRSZWN0fSAqLyAoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KX0gKi9cbiAgICB0aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5hY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5kZWFjdGl2YXRlXyhlKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oP0V2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbig/RXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7P0V2ZW50fSAqL1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogbnVsbCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcblxuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB0aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCkge1xuICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZW1vdmVDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7c3RyaW5nc30gPSBNRENSaXBwbGVGb3VuZGF0aW9uO1xuICAgIE9iamVjdC5rZXlzKHN0cmluZ3MpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChrLmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHN0cmluZ3Nba10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7P0V2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZV8oZSkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICBjb25zdCBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgIGNvbnN0IGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZSAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBlLnR5cGU7XG4gICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBlID09PSBudWxsO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IChcbiAgICAgIGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc0FjdGl2YXRlZENoaWxkID1cbiAgICAgIGUgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZSgodGFyZ2V0KSA9PiB0aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSk7XG4gICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZSkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHs/RXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpIHtcbiAgICByZXR1cm4gKGUgJiYgZS50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHs/RXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWN0aXZhdGUoZXZlbnQgPSBudWxsKSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSBudWxsLCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gez9FdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZV8oZSkge1xuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IC8qKiBAdHlwZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovIChPYmplY3QuYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpKTtcblxuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgIGNvbnN0IGV2dE9iamVjdCA9IG51bGw7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhldnRPYmplY3QsIHN0YXRlKSk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oZSwgc3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7P0V2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGRlYWN0aXZhdGUoZXZlbnQgPSBudWxsKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcGFyYW0geyFBY3RpdmF0aW9uU3RhdGVUeXBlfSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlRGVhY3RpdmF0aW9uXyhlLCB7d2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZX0pIHtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcblxuICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICBjb25zdCBnZXRCb3VuZGVkUmFkaXVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgfTtcblxuICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcblxuICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEU7XG4gICAgdGhpcy5mZ1NjYWxlXyA9IHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuXG4gICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHVwZGF0ZUxheW91dENzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFZBUl9GR19TSVpFLCBWQVJfTEVGVCwgVkFSX1RPUCwgVkFSX0ZHX1NDQUxFLFxuICAgIH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCBgJHt0aGlzLmluaXRpYWxTaXplX31weGApO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy50b3B9cHhgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0VW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIGNvbnN0IHtVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1JpcHBsZUZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JpcHBsZUZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZSBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge3tpc1VuYm91bmRlZDogKGJvb2xlYW58dW5kZWZpbmVkKX09fSBvcHRpb25zXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCwge2lzVW5ib3VuZGVkID0gdW5kZWZpbmVkfSA9IHt9KSB7XG4gICAgY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICBpZiAoaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGlzVW5ib3VuZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQWRhcHRlcihpbnN0YW5jZSkge1xuICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiBpbnN0YW5jZS51bmJvdW5kZWQsXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IGluc3RhbmNlLnJvb3RfW01BVENIRVNdKCc6YWN0aXZlJyksXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gaW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7eDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXR9KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCB1bmJvdW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXQgdW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFVuYm91bmRlZF8oKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQodGhpcy51bmJvdW5kZWRfKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlRm91bmRhdGlvbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gIGNvbnN0IGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgY29uc3QgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICBub2RlLnJlbW92ZSgpO1xuICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgbGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cblxuICBjb25zdCBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IHdpbmRvd09iai5DU1MgJiYgdHlwZW9mIHdpbmRvd09iai5DU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gd2luZG93T2JqLkNTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gIGNvbnN0IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJylcbiAgKTtcblxuICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gIH0gZWxzZSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xufVxuXG4vL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58e3Bhc3NpdmU6IGJvb2xlYW59fVxuICovXG5mdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV8gPyB7cGFzc2l2ZTogdHJ1ZX0gOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IEhUTUxFbGVtZW50UHJvdG90eXBlXG4gKiBAcmV0dXJuIHshQXJyYXk8c3RyaW5nPn1cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIHJldHVybiBbXG4gICAgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvcicsICdtYXRjaGVzJyxcbiAgXS5maWx0ZXIoKHApID0+IHAgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpLnBvcCgpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBub3JtYWxpemVkWCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gIH0gZWxzZSB7XG4gICAgbm9ybWFsaXplZFggPSBldi5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9XG5cbiAgcmV0dXJuIHt4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFl9O1xufVxuXG5leHBvcnQge3N1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUsIGdldE1hdGNoZXNQcm9wZXJ0eSwgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ1RvcEFwcEJhckFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlcic7XG5pbXBvcnQgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24gZnJvbSAnLi4vZm91bmRhdGlvbic7XG5pbXBvcnQge2Nzc0NsYXNzZXN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uPCFNRENTaG9ydFRvcEFwcEJhckZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbiBleHRlbmRzIE1EQ1RvcEFwcEJhckJhc2VGb3VuZGF0aW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RvcEFwcEJhckFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihhZGFwdGVyKTtcbiAgICAvLyBTdGF0ZSB2YXJpYWJsZSBmb3IgdGhlIGN1cnJlbnQgdG9wIGFwcCBiYXIgc3RhdGVcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNjcm9sbEhhbmRsZXJfID0gKCkgPT4gdGhpcy5zaG9ydEFwcEJhclNjcm9sbEhhbmRsZXJfKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKTtcbiAgICBjb25zdCBpc0Fsd2F5c0NvbGxhcHNlZCA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9DT0xMQVBTRURfQ0xBU1MpO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0VG90YWxBY3Rpb25JdGVtcygpID4gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNIT1JUX0hBU19BQ1RJT05fSVRFTV9DTEFTUyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Fsd2F5c0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclNjcm9sbEhhbmRsZXIodGhpcy5zY3JvbGxIYW5kbGVyXyk7XG4gICAgICB0aGlzLnNob3J0QXBwQmFyU2Nyb2xsSGFuZGxlcl8oKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJTY3JvbGxIYW5kbGVyKHRoaXMuc2Nyb2xsSGFuZGxlcl8pO1xuICB9XG5cblxuICAvKipcbiAgICogU2Nyb2xsIGhhbmRsZXIgZm9yIGFwcGx5aW5nL3JlbW92aW5nIHRoZSBjb2xsYXBzZWQgbW9kaWZpZXIgY2xhc3NcbiAgICogb24gdGhlIHNob3J0IHRvcCBhcHAgYmFyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2hvcnRBcHBCYXJTY3JvbGxIYW5kbGVyXygpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gdGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKTtcblxuICAgIGlmIChjdXJyZW50U2Nyb2xsIDw9IDApIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TSE9SVF9DT0xMQVBTRURfQ0xBU1MpO1xuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU0hPUlRfQ09MTEFQU0VEX0NMQVNTKTtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1Nob3J0VG9wQXBwQmFyRm91bmRhdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9zaG9ydC9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9wLWFwcC1iYXIvc2hvcnQvZm91bmRhdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IE1EQ1RvcEFwcEJhckFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlcic7XG5pbXBvcnQgTURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb24gZnJvbSAnLi4vZm91bmRhdGlvbic7XG5pbXBvcnQge251bWJlcnN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IElOSVRJQUxfVkFMVUUgPSAwO1xuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVG9wQXBwQmFyQmFzZUZvdW5kYXRpb248IU1EQ1RvcEFwcEJhckZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RvcEFwcEJhckZvdW5kYXRpb24gZXh0ZW5kcyBNRENUb3BBcHBCYXJCYXNlRm91bmRhdGlvbiB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENUb3BBcHBCYXJBZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoYWRhcHRlcik7XG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgZGlmZnMgb2YgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gdnMgcHJldmlvdXMgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICogQHByaXZhdGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl8gPSB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byB2ZXJpZnkgd2hlbiB0aGUgdG9wIGFwcCBiYXIgaXMgY29tcGxldGVseSBzaG93aW5nIG9yIGNvbXBsZXRlbHkgaGlkZGVuXG4gICAgICogQHByaXZhdGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnRvcEFwcEJhckhlaWdodF8gPSB0aGlzLmFkYXB0ZXJfLmdldFRvcEFwcEJhckhlaWdodCgpO1xuXG4gICAgLyoqXG4gICAgICogd2FzRG9ja2VkXyBpcyB1c2VkIHRvIGluZGljYXRlIGlmIHRoZSB0b3AgYXBwIGJhciB3YXMgZG9ja2VkIGluIHRoZSBwcmV2aW91c1xuICAgICAqIHNjcm9sbCBoYW5kbGVyIGl0ZXJhdGlvbi5cbiAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLndhc0RvY2tlZF8gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogaXNEb2NrZWRTaG93aW5nXyBpcyB1c2VkIHRvIGluZGljYXRlIGlmIHRoZSB0b3AgYXBwIGJhciBpcyBkb2NrZWQgaW4gdGhlIGZ1bGx5XG4gICAgICogc2hvd24gcG9zaXRpb24uXG4gICAgICogQHByaXZhdGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0RvY2tlZFNob3dpbmdfID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFZhcmlhYmxlIGZvciBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgdG9wIGFwcCBiYXJcbiAgICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAwO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byBwcmV2ZW50IHRoZSB0b3AgYXBwIGJhciBmcm9tIGJlaW5nIHNjcm9sbGVkIG91dCBvZiB2aWV3IGR1cmluZyByZXNpemUgZXZlbnRzXG4gICAgICogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lb3V0IHRoYXQncyB1c2VkIHRvIHRocm90dGxlIHRoZSByZXNpemUgZXZlbnRzXG4gICAgICogQHByaXZhdGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlc2l6ZVRocm90dGxlSWRfID0gSU5JVElBTF9WQUxVRTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lb3V0IHRoYXQncyB1c2VkIHRvIGRlYm91bmNlIHRvZ2dsaW5nIHRoZSBpc0N1cnJlbnRseUJlaW5nUmVzaXplZF8gdmFyaWFibGUgYWZ0ZXIgYSByZXNpemVcbiAgICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVzaXplRGVib3VuY2VJZF8gPSBJTklUSUFMX1ZBTFVFO1xuXG4gICAgdGhpcy5zY3JvbGxIYW5kbGVyXyA9ICgpID0+IHRoaXMudG9wQXBwQmFyU2Nyb2xsSGFuZGxlcl8oKTtcbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy50b3BBcHBCYXJSZXNpemVIYW5kbGVyXygpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclNjcm9sbEhhbmRsZXIodGhpcy5zY3JvbGxIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJTY3JvbGxIYW5kbGVyKHRoaXMuc2Nyb2xsSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndG9wJywgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiB0aGUgRE9NIG5lZWRzIHRvIHVwZGF0ZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRm9yVXBkYXRlXygpIHtcbiAgICBjb25zdCBvZmZzY3JlZW5Cb3VuZGFyeVRvcCA9IC10aGlzLnRvcEFwcEJhckhlaWdodF87XG4gICAgY29uc3QgaGFzQW55UGl4ZWxzT2Zmc2NyZWVuID0gdGhpcy5jdXJyZW50QXBwQmFyT2Zmc2V0VG9wXyA8IDA7XG4gICAgY29uc3QgaGFzQW55UGl4ZWxzT25zY3JlZW4gPSB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID4gb2Zmc2NyZWVuQm91bmRhcnlUb3A7XG4gICAgY29uc3QgcGFydGlhbGx5U2hvd2luZyA9IGhhc0FueVBpeGVsc09mZnNjcmVlbiAmJiBoYXNBbnlQaXhlbHNPbnNjcmVlbjtcblxuICAgIC8vIElmIGl0J3MgcGFydGlhbGx5IHNob3dpbmcsIGl0IGNhbid0IGJlIGRvY2tlZC5cbiAgICBpZiAocGFydGlhbGx5U2hvd2luZykge1xuICAgICAgdGhpcy53YXNEb2NrZWRfID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vdCBwcmV2aW91c2x5IGRvY2tlZCBhbmQgbm90IHBhcnRpYWxseSBzaG93aW5nLCBpdCdzIG5vdyBkb2NrZWQuXG4gICAgICBpZiAoIXRoaXMud2FzRG9ja2VkXykge1xuICAgICAgICB0aGlzLndhc0RvY2tlZF8gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RvY2tlZFNob3dpbmdfICE9PSBoYXNBbnlQaXhlbHNPbnNjcmVlbikge1xuICAgICAgICB0aGlzLmlzRG9ja2VkU2hvd2luZ18gPSBoYXNBbnlQaXhlbHNPbnNjcmVlbjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRpYWxseVNob3dpbmc7XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gbW92ZSB0aGUgdG9wIGFwcCBiYXIgaWYgbmVlZGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbW92ZVRvcEFwcEJhcl8oKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tGb3JVcGRhdGVfKCkpIHtcbiAgICAgIC8vIE9uY2UgdGhlIHRvcCBhcHAgYmFyIGlzIGZ1bGx5IGhpZGRlbiB3ZSB1c2UgdGhlIG1heCBwb3RlbnRpYWwgdG9wIGFwcCBiYXIgaGVpZ2h0IGFzIG91ciBvZmZzZXRcbiAgICAgIC8vIHNvIHRoZSB0b3AgYXBwIGJhciBkb2Vzbid0IHNob3cgaWYgdGhlIHdpbmRvdyByZXNpemVzIGFuZCB0aGUgbmV3IGhlaWdodCA+IHRoZSBvbGQgaGVpZ2h0LlxuICAgICAgbGV0IG9mZnNldCA9IHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF87XG4gICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0KSA+PSB0aGlzLnRvcEFwcEJhckhlaWdodF8pIHtcbiAgICAgICAgb2Zmc2V0ID0gLW51bWJlcnMuTUFYX1RPUF9BUFBfQkFSX0hFSUdIVDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndG9wJywgb2Zmc2V0ICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbCBoYW5kbGVyIGZvciB0aGUgZGVmYXVsdCBzY3JvbGwgYmVoYXZpb3Igb2YgdGhlIHRvcCBhcHAgYmFyLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdG9wQXBwQmFyU2Nyb2xsSGFuZGxlcl8oKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gTWF0aC5tYXgodGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKSwgMCk7XG4gICAgY29uc3QgZGlmZiA9IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiAtIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uXztcbiAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbl8gPSBjdXJyZW50U2Nyb2xsUG9zaXRpb247XG5cbiAgICAvLyBJZiB0aGUgd2luZG93IGlzIGJlaW5nIHJlc2l6ZWQgdGhlIGxhc3RTY3JvbGxQb3NpdGlvbl8gbmVlZHMgdG8gYmUgdXBkYXRlZCBidXQgdGhlXG4gICAgLy8gY3VycmVudCBzY3JvbGwgb2YgdGhlIHRvcCBhcHAgYmFyIHNob3VsZCBzdGF5IGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICAgIGlmICghdGhpcy5pc0N1cnJlbnRseUJlaW5nUmVzaXplZF8pIHtcbiAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gLT0gZGlmZjtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPiAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gPSAwO1xuICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyh0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfKSA+IHRoaXMudG9wQXBwQmFySGVpZ2h0Xykge1xuICAgICAgICB0aGlzLmN1cnJlbnRBcHBCYXJPZmZzZXRUb3BfID0gLXRoaXMudG9wQXBwQmFySGVpZ2h0XztcbiAgICAgIH1cblxuICAgICAgdGhpcy5tb3ZlVG9wQXBwQmFyXygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb3AgYXBwIGJhciByZXNpemUgaGFuZGxlciB0aGF0IHRocm90dGxlL2RlYm91bmNlIGZ1bmN0aW9ucyB0aGF0IGV4ZWN1dGUgdXBkYXRlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRvcEFwcEJhclJlc2l6ZUhhbmRsZXJfKCkge1xuICAgIC8vIFRocm90dGxlIHJlc2l6ZSBldmVudHMgMTAgcC9zXG4gICAgaWYgKCF0aGlzLnJlc2l6ZVRocm90dGxlSWRfKSB7XG4gICAgICB0aGlzLnJlc2l6ZVRocm90dGxlSWRfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzaXplVGhyb3R0bGVJZF8gPSBJTklUSUFMX1ZBTFVFO1xuICAgICAgICB0aGlzLnRocm90dGxlZFJlc2l6ZUhhbmRsZXJfKCk7XG4gICAgICB9LCBudW1iZXJzLkRFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQ3VycmVudGx5QmVpbmdSZXNpemVkXyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yZXNpemVEZWJvdW5jZUlkXykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplRGVib3VuY2VJZF8pO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplRGVib3VuY2VJZF8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudG9wQXBwQmFyU2Nyb2xsSGFuZGxlcl8oKTtcbiAgICAgIHRoaXMuaXNDdXJyZW50bHlCZWluZ1Jlc2l6ZWRfID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc2l6ZURlYm91bmNlSWRfID0gSU5JVElBTF9WQUxVRTtcbiAgICB9LCBudW1iZXJzLkRFQk9VTkNFX1RIUk9UVExFX1JFU0laRV9USU1FX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvdHRsZWQgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHRoZSB0b3AgYXBwIGJhciBzY3JvbGxlZCB2YWx1ZXMgaWYgdGhlXG4gICAqIHRvcCBhcHAgYmFyIGhlaWdodCBjaGFuZ2VzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhyb3R0bGVkUmVzaXplSGFuZGxlcl8oKSB7XG4gICAgY29uc3QgY3VycmVudEhlaWdodCA9IHRoaXMuYWRhcHRlcl8uZ2V0VG9wQXBwQmFySGVpZ2h0KCk7XG4gICAgaWYgKHRoaXMudG9wQXBwQmFySGVpZ2h0XyAhPT0gY3VycmVudEhlaWdodCkge1xuICAgICAgdGhpcy53YXNEb2NrZWRfID0gZmFsc2U7XG5cbiAgICAgIC8vIFNpbmNlIHRoZSB0b3AgYXBwIGJhciBoYXMgYSBkaWZmZXJlbnQgaGVpZ2h0IGRlcGVuZGluZyBvbiB0aGUgc2NyZWVuIHdpZHRoLCB0aGlzXG4gICAgICAvLyB3aWxsIGVuc3VyZSB0aGF0IHRoZSB0b3AgYXBwIGJhciByZW1haW5zIGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uIGlmXG4gICAgICAvLyBjb21wbGV0ZWx5IGhpZGRlbiBhbmQgYSByZXNpemUgbWFrZXMgdGhlIHRvcCBhcHAgYmFyIGEgZGlmZmVyZW50IGhlaWdodC5cbiAgICAgIHRoaXMuY3VycmVudEFwcEJhck9mZnNldFRvcF8gLT0gdGhpcy50b3BBcHBCYXJIZWlnaHRfIC0gY3VycmVudEhlaWdodDtcbiAgICAgIHRoaXMudG9wQXBwQmFySGVpZ2h0XyA9IGN1cnJlbnRIZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMudG9wQXBwQmFyU2Nyb2xsSGFuZGxlcl8oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUb3BBcHBCYXJGb3VuZGF0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RvcC1hcHAtYmFyL3N0YW5kYXJkL2ZvdW5kYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b3AtYXBwLWJhci9zdGFuZGFyZC9mb3VuZGF0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
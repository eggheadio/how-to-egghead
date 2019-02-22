webpackHotUpdate(5,{

/***/ "./components/Breakpoints.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mq; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");


var breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  tallPhone: '(max-width: 360px) and (min-height: 740px)'
};
var mq = Object.keys(breakpoints).reduce(function (accumulator, label) {
  var prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
  var suffix = typeof breakpoints[label] === 'string' ? '' : 'px';

  accumulator[label] = function (cls) {
    return (
      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_1_emotion__["css"])("@media (", prefix + breakpoints[label] + suffix, "){", cls, ";}")
    );
  };

  return accumulator;
}, {});

/***/ }),

/***/ "./components/CodeStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("\n.hljs-comment,\n  .hljs-quote {\n    color: #969896;\n  }\n\n  /* Tomorrow Red */\n  .hljs-variable,\n  .hljs-template-variable,\n  .hljs-tag,\n  .hljs-name,\n  .hljs-selector-id,\n  .hljs-selector-class,\n  .hljs-regexp,\n  .hljs-deletion {\n    color: #cc6666;\n  }\n\n  /* Tomorrow Orange */\n  .hljs-number,\n  .hljs-built_in,\n  .hljs-builtin-name,\n  .hljs-literal,\n  .hljs-type,\n  .hljs-params,\n  .hljs-meta,\n  .hljs-link {\n    color: #de935f;\n  }\n\n  /* Tomorrow Yellow */\n  .hljs-attribute {\n    color: #f0c674;\n  }\n\n  /* Tomorrow Green */\n  .hljs-string,\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-addition {\n    color: #b5bd68;\n  }\n\n  /* Tomorrow Blue */\n  .hljs-title,\n  .hljs-section {\n    color: #81a2be;\n  }\n\n  /* Tomorrow Purple */\n  .hljs-keyword,\n  .hljs-selector-tag {\n    color: #b294bb;\n  }\n\n  .hljs {\n    display: block;\n    overflow-x: auto;\n    background: #1d1f21;\n    color: #c5c8c6;\n    padding: 0.5em;\n  }\n\n  .hljs-emphasis {\n    font-style: italic;\n  }\n\n  .hljs-strong {\n    font-weight: bold;\n  }\n");

/***/ }),

/***/ "./components/Colors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var Color = {
  instructorPrimary: '#F16156',
  reviewerPrimary: '#E8A304',
  secondary: 'rgba(0,0,0,0.5)'
};

/***/ }),

/***/ "./components/Eggo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/components/Eggo.js";

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "198.8px",
    height: "220.4px",
    viewBox: "-100 90.6 198.8 220.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st0",
    d: "M-0.9,108.3c37.4,0,67.8,80.4,67.8,117.9s-30.3,67.8-67.8,67.8s-67.8-30.3-67.8-67.8S-38.3,108.3-0.9,108.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M85.1,173.2l-27.6,9.8c0,0,4.3,13,4.3,13.1c0,0.1,27.5-3.5,27.5-3.5L85.1,173.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M-86.8,173.2l27.6,9.8c0,0-4.3,13-4.3,13.1c0,0.1-27.5-3.5-27.5-3.5L-86.8,173.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st2",
    d: "M-29.3,170.9c6.9,0.1,8.5,5.9,8.7,7.3c0.8,4.1,1.5,9.1,1.7,14.2c0,1.4-0.1,2.7-0.4,4c-0.3-3.4-0.8-6.7-1.4-9.6 c-0.3-1.4-1.8-7.2-8.7-7.3c-4.2-0.1-17.7,0.4-31,2.4c1-3,2-6.1,3.1-9.1C-44.9,171.2-33.2,170.8-29.3,170.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st2",
    d: "M66.8,223.1c-24.4-1.3-45.3-9-50-11.9c-3.7-1.8-8.3-5.5-9.7-14.8c-0.9,10.2,1,19.6,10.6,24.2 c0.7,0.4,19.1,9.5,48.8,11.1c0.2-1.9,0.2-3.7,0.2-5.6C66.8,225.1,66.8,224.1,66.8,223.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st2",
    d: "M-68.4,223.1c24.4-1.3,45.3-9,50-11.9c3.7-1.8,8.3-5.5,9.7-14.8c0.9,10.2-1,19.6-10.6,24.2 c-0.7,0.4-19.1,9.5-48.8,11.1c-0.2-1.9-0.2-3.7-0.2-5.6C-68.5,225.1-68.5,224.1-68.4,223.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st2",
    d: "M27.5,170.9c-6.9,0.1-8.5,5.9-8.7,7.3c-0.8,4.1-1.5,9.1-1.7,14.2c0,1.4,0.1,2.7,0.4,4c0.3-3.4,0.8-6.7,1.4-9.6 c0.3-1.4,1.8-7.2,8.7-7.3c4.2-0.1,17.7,0.4,31,2.4c-1-3-2-6.1-3.1-9.1C43.1,171.2,31.4,170.8,27.5,170.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st3",
    d: "M-60.1,163.5c6.6-16.1,14.6-30.1,23.1-40.4c11.5-13.9,23.7-21,36.2-21c12.5,0,24.7,7.1,36.2,21 c8.5,10.3,16.5,24.2,23.1,40.4l0.3,0.8l-0.8-0.1c-2.3-0.3-4.3-0.5-6.6-0.8l-0.3,0l-0.1-0.3c-7.5-17.5-20.3-40.3-36.8-49.8 c-5-2.9-10-4.3-15-4.3s-10,1.5-15,4.3c-16.5,9.5-29.2,32.3-36.8,49.8l-0.1,0.3l-0.3,0c-2.4,0.3-4.3,0.5-6.6,0.8l-0.8,0.1 L-60.1,163.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st3",
    d: "M67.5,214.7c-1.8,0-3.7-0.1-5.5-0.2l-0.6,0l-0.1-0.6c-1.6-12.8-5.3-27.9-10.5-42.3l-0.4-1.1l1.1,0.1 c2.1,0.3,4.1,0.6,6.1,0.9l0.4,0.1l0.1,0.4c4.9,14.4,8.4,29.3,9.9,41.9l0.1,0.8L67.5,214.7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M61.5,182.1c-1-3.4-2.1-6.8-3.2-10.1l-0.1-0.4l-0.4-0.1c-1.9-0.3-4-0.6-6.1-0.9l-1.1-0.1l0.4,1.1 c1.1,3.2,2.2,6.4,3.2,9.7C57.7,181.6,59.7,181.9,61.5,182.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st3",
    d: "M-69.5,213.6c1.5-12.6,5-27.5,9.9-41.9l0.1-0.4l0.4-0.1c1.9-0.3,4-0.6,6.1-0.9l1.1-0.1l-0.4,1.1 c-5.1,14.5-8.8,29.5-10.5,42.3l-0.1,0.6l-0.6,0c-1.8,0.1-3.7,0.2-5.5,0.2l-0.8,0L-69.5,213.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M-59,171.2l-0.4,0.1l-0.1,0.4c-1.1,3.4-2.2,6.8-3.2,10.2c3.4-0.4,4.4-0.4,7.3-0.7c1-3.3,2.1-6.6,3.3-9.9 l0.4-1.1l-1.1,0.1C-55,170.6-57.1,170.9-59,171.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st3",
    d: "M-0.9,300c-10.1,0-20-2-29.3-6c-9-3.9-17.1-9.5-23.9-16.5c-6.8-7-12-15.2-15.6-24.2c-3.7-9.5-5.4-19.6-5-30.1 l0-0.5l0.5,0c2.4-0.1,4.1-0.1,5.8-0.2l0.5,0l0,0.5c-0.4,9.7,1.1,18.7,4.5,27.5c3.2,8.3,8,15.7,14.1,22.2 c6.2,6.5,13.5,11.5,21.7,15.1c8.4,3.7,17.4,5.5,26.7,5.5c9.2,0,18.2-1.9,26.6-5.5c8.2-3.6,15.5-8.6,21.7-15.1 c6.2-6.4,10.9-13.9,14.1-22.1c3.4-8.8,4.9-17.8,4.5-27.5l0-0.5l0.5,0c2.4,0.1,4,0.2,5.8,0.2l0.5,0l0,0.5 c0.4,10.5-1.3,20.6-5.1,30.1c-3.6,9.1-8.8,17.2-15.6,24.3c-6.8,7.1-14.9,12.6-23.9,16.5C19.1,297.9,9.3,300-0.9,300z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M-67.7,231.8c-0.2-2.9-0.3-5.8-0.2-8.9l0-0.5l-0.5,0c-1.7,0.1-3.4,0.2-5.8,0.2l-0.5,0l0,0.5 c-0.1,3,0,6,0.2,8.9l0.2,0C-72,231.9-69.8,231.9-67.7,231.8L-67.7,231.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M72.9,222.6l-0.5,0c-1.7,0-3.4-0.1-5.8-0.2l-0.5,0l0,0.5c0.1,3,0.1,5.9-0.2,8.8l6.8,0.3 c0.2-2.9,0.3-5.9,0.2-8.9L72.9,222.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    className: "st1",
    d: "M76.7,224c-14.9,0-29-1.8-41.8-5.3c-6.5-1.7-12.5-4-17.1-6.2l-0.1-0.1c-11.5-5.5-12-16.6-10.9-26.6 c0.3-2.5-0.7-5.9-3.3-7.7c-1.3-0.8-2.7-1.3-4.2-1.3c-1.5,0-3,0.4-4.2,1.3c-2.7,1.8-3.6,5.1-3.3,7.7c1.1,10.1,0.6,21.1-10.9,26.7 l-0.1,0.1c-4.6,2.2-10.7,4.5-17.1,6.2c-12.9,3.5-27,5.3-41.8,5.3h-0.1c-5.8,0-10.9-4-12.4-9.7c-2.2-8.5-5.1-21.1-5.4-33 c-0.1-4.8,2.6-9.1,6.9-11.1c15.9-7.1,48-9.7,61.8-9.5c5,0.1,9.4,1.9,12.7,5.3c4.7-2.1,9.4-3.2,14-3.2c4.6,0,9.3,1.1,14,3.2 c2.3-2.4,6.4-5.2,12.7-5.3c8.2-0.1,43.6,1.4,61.8,9.5c4.4,1.9,7.1,6.3,6.9,11c-0.3,11.9-3.3,24.6-5.4,33 C87.7,220,82.6,224,76.7,224L76.7,224z M27.6,171.4c-6.7,0.1-8,5.7-8.2,6.9c-0.6,3.4-1.4,8.6-1.7,14.2c-0.1,5.4,1.9,9.2,5.8,11.1 c14.5,6.5,31.4,9.7,51.6,9.8c1.6,0,3-1,3.3-2.6c1.9-7.5,4.5-18.7,4.8-28.9c0-1-0.5-1.9-1.4-2.3C67.9,173.3,38.4,171.2,27.6,171.4z M-83.4,179.5c-0.9,0.4-1.5,1.3-1.4,2.3c0.3,10.2,2.9,21.4,4.8,28.9c0.4,1.5,1.8,2.6,3.3,2.6c20.2-0.1,37.1-3.3,51.7-9.8 c3.9-1.9,5.8-5.6,5.8-11.1c-0.2-4.3-0.8-9.3-1.7-14.2c-0.2-1.1-1.6-6.8-8.2-6.9C-35.6,171.3-67.8,172.5-83.4,179.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  })));
});

/***/ }),

/***/ "./components/GlobalStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Breakpoints__ = __webpack_require__("./components/Breakpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Colors__ = __webpack_require__("./components/Colors.js");



/* harmony default export */ __webpack_exports__["a"] = ("\n    html, body {\n        margin: 0;\n        padding: 0;\n        background: white;\n        font-family: 'nimbus-sans', Helvetica, Arial, sans-serif;\n        ".concat(__WEBPACK_IMPORTED_MODULE_1__Breakpoints__["a" /* mq */].medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["css"])("font-size:1.125rem;line-height:1.625rem;")), ";\n        ").concat(__WEBPACK_IMPORTED_MODULE_1__Breakpoints__["a" /* mq */].large(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["css"])("font-size:1.08rem;line-height:1.625rem;")), ";\n        font-size: 1rem;\n        line-height: 1.43rem;\n        color: hsl(0, 0%, 10%);\n        font-weight: 400;\n      }\n      h1, h2, h3, h4 {\n        font-family: 'nimbus-sans', Helvetica, Arial, sans-serif;\n        color: hsl(0, 0%, 0%);\n        font-weight: 300;\n      }\n      h1 {\n        font-size: 2rem;\n        ").concat(__WEBPACK_IMPORTED_MODULE_1__Breakpoints__["a" /* mq */].medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["css"])("font-size:3rem;padding-bottom:1rem;")), ";\n      }\n      \n      h2 {\n        font-size: 1.75rem;\n        margin: 4rem 0 1rem 0;\n        ").concat(__WEBPACK_IMPORTED_MODULE_1__Breakpoints__["a" /* mq */].medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["css"])("font-size:2.5rem;margin:2rem 0 1rem 0;line-height:3.35rem;")), ";\n        line-height: 2rem;\n        font-weight: 500;\n        position: relative;\n        z-index: 999;\n        }\n      h3 {\n        font-size: 1.5rem;\n        margin: 2.5rem 0 1rem 0;\n        ").concat(__WEBPACK_IMPORTED_MODULE_1__Breakpoints__["a" /* mq */].medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["css"])("font-size:1.75rem;margin:4.5rem 0 1rem 0;")), ";\n        line-height: 1.5rem;\n        font-weight: 500;\n        color: rgba(0,0,0,0.85);\n      }\n      h4 {\n        font-size: 1.2rem;\n        text-transform: uppercase;\n        margin: 6.5rem 0 1rem 0;\n        letter-spacing: 3px;\n      }\n      img {\n        max-width: 98%;\n        height: auto;\n        padding: 1rem 0;\n        ").concat(__WEBPACK_IMPORTED_MODULE_1__Breakpoints__["a" /* mq */].medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["css"])("padding:1.5rem 0;")), ";\n      }\n      pre {\n        background: #fafafa;\n        padding: 25px;\n        overflow-wrap: break-word;\n        word-break: break-all;\n        max-width: 200px;\n        overflow-x: auto;\n        ").concat(__WEBPACK_IMPORTED_MODULE_1__Breakpoints__["a" /* mq */].medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["css"])("max-width:800px;")), ";\n      }\n      pre > code {\n        overflow-wrap: break-word;\n        word-break: break-all;\n        max-width: 800px;\n      }\n      strong {\n        font-weight: 600;\n      }\n      \n      p {\n      font-weight: 200;\n      color: rgba(0,0,0,0.95);\n      }\n      \n      p > a {\n      overflow-wrap: break-word;\n      word-break: break-all;\n      -ms-hyphens: auto;\n      -moz-hyphens: auto;\n      -webkit-hyphens: auto;\n      hyphens: auto;\n      }\n      a {\n      text-decoration: none;\n      transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n      :hover {\n        text-decoration: none;\n        text-decoration-color: inherit;\n        transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n      }\n      }\n      p > code {\n      word-break: break-all;\n      }\n      ul > li {\n      font-weight: 200;\n      color: rgba(0,0,0,0.85);\n      margin-left: 1.2rem;\n      ").concat(__WEBPACK_IMPORTED_MODULE_1__Breakpoints__["a" /* mq */].medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_0_emotion__["css"])("padding:0.4rem 0;")), "\n      padding: 0.3rem 0;\n      }\n      strong {\n       font-weight: 500;\n      }\n      blockquote {\n      color: rgba(0,0,0,0.85);\n      font-style: italic;\n      margin: 0;\n      padding: 0 0 0 1rem;\n      display: block;\n      border-left: 2px solid rgba(0,0,0,0.1);\n      }\n      ul {\n      padding: 0;\n      /* list-style: none; */\n      }\n      ol {\n      margin-left: 0;\n      list-style-type: decimal;\n      }\n      ol, ol li {\n      margin-left: 0;\n      padding-left: 0;\n      padding: 0.3rem 0;\n      }\n      ol {\n      margin-left: 1.2rem;\n      }\n      /*  li::before {\n      content: '\u2022 ';\n      color: rgba(0,0,0,0.75);\n      margin-right: 0.35rem;\n      }  */\n"));

/***/ }),

/***/ "./components/InstructorGuide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instructor_guide_docs__ = __webpack_require__("./instructor-guide/docs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Breakpoints__ = __webpack_require__("./components/Breakpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Colors__ = __webpack_require__("./components/Colors.js");
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/components/InstructorGuide.js";








/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;justify-content:center;align-items:center;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_3__instructor_guide_docs__["a" /* default */].map(function (_ref, index) {
    var chapter = _ref.chapter,
        title = _ref.title,
        chapterSlug = _ref.slug;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: title,
      className:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("margin-top:-120px;padding-bottom:6rem;flex-direction:column;justify-content:center;align-items:center;"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 1.25rem;", __WEBPACK_IMPORTED_MODULE_5__components_Breakpoints__["a" /* mq */].small(
      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:0 2rem;")), ";", __WEBPACK_IMPORTED_MODULE_5__components_Breakpoints__["a" /* mq */].large(
      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:0 4rem;")), ";"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
      id: chapterSlug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DocsWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    })), chapter.map(function (_ref2) {
      var component = _ref2.component,
          slug = _ref2.slug,
          title = _ref2.title;
      var Doc = component;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
        id: slug,
        key: slug,
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("margin-top:2rem;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 1.5rem 0 1.5rem;", __WEBPACK_IMPORTED_MODULE_5__components_Breakpoints__["a" /* mq */].small(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:0.5 2rem;margin-top:0;")), ";", __WEBPACK_IMPORTED_MODULE_5__components_Breakpoints__["a" /* mq */].large(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:1.5rem 4rem;")), ";"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DocsWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Doc, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }));
    }));
  }));
});
var DocsWrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])("div", {
  target: "ezqxgny0"
})("max-width:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow-wrap:break-word;word-wrap:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;h1{font-weight:300;font-size:2.35rem;margin-bottom:3.5rem;", __WEBPACK_IMPORTED_MODULE_5__components_Breakpoints__["a" /* mq */].medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("font-size:3.5rem;")), ";", __WEBPACK_IMPORTED_MODULE_5__components_Breakpoints__["a" /* mq */].large(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("font-size:3rem;")), ";color:", __WEBPACK_IMPORTED_MODULE_6__components_Colors__["a" /* Color */].instructorPrimary, ";}p > a{color:", __WEBPACK_IMPORTED_MODULE_6__components_Colors__["a" /* Color */].instructorPrimary, ";}a{color:", __WEBPACK_IMPORTED_MODULE_6__components_Colors__["a" /* Color */].instructorPrimary, ";}a:visited{color:", __WEBPACK_IMPORTED_MODULE_6__components_Colors__["a" /* Color */].instructorPrimary, ";}");
var Divider =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])("hr", {
  target: "ezqxgny1"
})("opacity:0.2;background:black;height:1px;border:0;width:100%;margin-top:2rem;margin-bottom:1rem;", __WEBPACK_IMPORTED_MODULE_5__components_Breakpoints__["a" /* mq */].small(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("margin-top:4rem;margin-bottom:0;")), ";");

/***/ }),

/***/ "./components/ToC.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instructor_guide_docs__ = __webpack_require__("./instructor-guide/docs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reviewer_guide_docs__ = __webpack_require__("./reviewer-guide/docs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_scrollspy__ = __webpack_require__("./node_modules/react-scrollspy/lib/Scrollspy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_scrollspy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_scrollspy__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/components/ToC.js";








var breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  tallPhone: '(max-width: 360px) and (min-height: 740px)'
};
var mq = Object.keys(breakpoints).reduce(function (accumulator, label) {
  var prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
  var suffix = typeof breakpoints[label] === 'string' ? '' : 'px';

  accumulator[label] = function (cls) {
    return (
      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("@media (", prefix + breakpoints[label] + suffix, "){", cls, ";}")
    );
  };

  return accumulator;
}, {});
var Anchor =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])("span", {
  target: "ew1l4fs0"
})("text-decoration:none;color:rgba(0,0,0,0.55);cursor:pointer;transition:all 250ms ease;&:hover{color:rgba(0,0,0,1);transition:all 250ms ease;}");
var ChapterAnchor =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])(Anchor, {
  target: "ew1l4fs1"
})("font-size:0.85rem;padding-top:1rem;text-transform:uppercase;opacity:0.7;");
var Color = {
  instructorPrimary: '#F16156',
  reviewerPrimary: '#E8A304',
  secondary: ''
};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$Instructor = _ref.Instructor,
      Instructor = _ref$Instructor === void 0 ? false : _ref$Instructor;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("position:fixed;overflow-y:scroll;padding:2rem;transition:all 250ms ease;margin-left:0;background-color:white;box-shadow:0 10px 50px -10px rgba(0,0,0,0.15);", mq.large(
    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("position:fixed;top:0;height:100vh;padding:2rem 2rem;overflow-y:scroll;height:inherit;background-color:#fafafa;width:auto;box-shadow:none;")), ";::-webkit-scrollbar{width:0px;}::-webkit-scrollbar-track{background-color:#fafafa;}::-webkit-scrollbar-thumb{background-color:#f1f1f1;}"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, Instructor ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;left:0;top:0;height:100vh;width:230px;h4{margin:0;}a{font-size:0.85rem;text-decoration:none;}& >:last-child{padding-bottom:6rem;", mq.medium(
    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding-bottom:6rem;")), ";}& >:first-child{margin-top:0;padding:0;}& >:nth-child(3){margin-top:0;padding:0;}& >:nth-child(2){display:none;visibility:hidden;)}"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_3__instructor_guide_docs__["a" /* default */].map(function (_ref2, index) {
    var chapter = _ref2.chapter,
        chapterTitle = _ref2.title,
        chapterSlug = _ref2.slug;
    return chapter.map(function (_ref3, index) {
      var title = _ref3.title,
          slug = _ref3.slug;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        key: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, index === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "#".concat(chapterSlug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChapterAnchor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, chapterTitle)) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#".concat(slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_scrollspy___default.a, {
        offset: 0,
        items: ["".concat(slug)],
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:0;margin:0;transition:all 250ms ease;"),
        currentClassName:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("color:rgba(0,0,0,0.9);transition:all 250ms ease;opacity:1;::before{content:'';position:absolute;width:10px;height:3px;margin-top:12px;left:0;background-color:", Instructor ? "".concat(Color.instructorPrimary) : "".concat(Color.reviewerPrimary), ";}"),
        scrolledPastClassName:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("color:yellow;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Anchor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, title))));
    });
  })) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;left:0;top:0;height:100vh;width:230px;h4{margin:0;}a{font-size:0.85rem;text-decoration:none;}& >:last-child{margin-bottom:6rem;", mq.medium(
    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("margin-bottom:6rem;")), ";}& >:first-child{margin-top:0;padding:0;}& >:nth-child(3){margin-top:0;padding:0;}& >:nth-child(2){display:none;visibility:hidden;)}"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, __WEBPACK_IMPORTED_MODULE_4__reviewer_guide_docs__["a" /* default */].map(function (_ref4, index) {
    var chapter = _ref4.chapter,
        chapterTitle = _ref4.title,
        chapterSlug = _ref4.slug;
    return chapter.map(function (_ref5, index) {
      var title = _ref5.title,
          slug = _ref5.slug;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        key: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, index === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "#".concat(chapterSlug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChapterAnchor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, chapterTitle)) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#".concat(slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_scrollspy___default.a, {
        offset: 0,
        items: ["".concat(slug)],
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:0;margin:0;transition:all 250ms ease;"),
        currentClassName:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("color:rgba(0,0,0,0.9);transition:all 250ms ease;opacity:1;::before{content:'';position:absolute;width:10px;height:3px;margin-top:12px;left:0;background-color:", Instructor ? "".concat(Color.instructorPrimary) : "".concat(Color.reviewerPrimary), ";}"),
        scrolledPastClassName:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("color:yellow;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Anchor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, title))));
    });
  }))));
});

/***/ }),

/***/ "./instructor-guide/docs/00-What-is-egghead.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/00-What-is-egghead.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "What is egghead?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "egghead.io is a community where web developers learn from each other through short lessons and courses teaching the tools of our trade."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Our instructors hail from every continent but Antartica. (That\u2019s next.) egghead instructors are platform-agnostic, learning-enthusiastic, and badass by definition, however they define it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "egghead was created by a small team of web developers who know how essential it is to keep learning. There\u2019s always a new tool or framework to figure out. We made egghead so the experts\u2014that is, anyone with a skill\u2014can create a lesson to share their knowledge with people who need it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_5998CB8F4ACAE04353DF55D78578CAC9F495218C5B780DCB121ECA0E8390328B_1530529136099_file.png",
      "alt": "01_sharing_knowledge"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Have 10 spare minutes? You can learn a skill."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Have a skill? You can be an instructor (and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "/#getting-paid"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "get paid"), " for it)."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "What are lessons like?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "egghead lessons are bite-sized, practice-ready video tutorials for busy web developers."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Every egghead lesson consists of a single screencast that\u2019s 1\u201310 minutes long. You\u2019ll record your screen as you talk through ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#create-your-code-example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "a code example"), ", just like you\u2019re explaining how you solved a problem to a coworker. The goal of each lesson is to give learners a specific piece of knowledge they can use right away."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "There\u2019s an art to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#how-to-instruct"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "teaching concepts as an egghead instructor"), ", but you don\u2019t need to be nervous. Or shy. Just be yourself, no matter who you are or what your lesson is about. Just be sure to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#edit-your-lesson"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "edit out"), " the \u201Cumm\u201Ds and \u201Cuhh\u201Ds."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "What makes egghead different?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "We believe variety is the spice of learning. No two people learn the same way, so no one person can be the de facto teacher of anything. You\u2019ll find two, sometimes three egghead lessons covering the very same topic. If one lesson doesn\u2019t offer a breakthrough moment for a learner, we bet another will."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_5998CB8F4ACAE04353DF55D78578CAC9F495218C5B780DCB121ECA0E8390328B_1530529160184_file.png",
      "alt": "02_diverse_instructors"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "So if your dream ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#what-if-a-lesson-already-exists"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "topic is already taken"), ", it\u2019s not taken at all. Go ahead, press record, and share what you know from your perspective."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Who should be an instructor?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "You should be an instructor. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://paper.dropbox.com/doc/01-Why-be-an-instructor-u68jBYc1Ly1F5wWoi4jXT"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Here\u2019s why.")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "How do I get started?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "If we sent you an invitation, we\u2019re so glad you\u2019re learning more. If you haven\u2019t accepted yet, sign up right here right now. After you finish reading this guide and know egghead style like the back of your hand, you\u2019ll record a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#create-your-30-second-lesson"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "30-second lesson snippet"), " that we\u2019ll help you shape into your first published lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "If we ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "haven\u2019t"), " sent you an invitation, we\u2019re equally glad to see you. You can audition by ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#create-your-30-second-lesson"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "recording a 30-second lesson snippet"), ". (No pressure, deep breath.) Read through this guide, hit record, and introduce us to your skills and way of doing things."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#create-your-30-second-lesson"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "More on creating and uploading your 30-second videos")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "No more questions?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Great! We have more answers anyway."));
});

/***/ }),

/***/ "./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/01-Why-be-an-instructor.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/01-Why-be-an-instructor.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Why be an instructor?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "We get it. The last thing you need is another commitment. (You probably see the word \u201Ccommit\u201D in your sleep.) Good news: egghead instructors have zero obligations. It\u2019s a lowkey side hustle that can seriously pay off."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "You get paid"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "egghead instructors ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#getting-paid"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "get paid"), " every time someone watches one of your published lessons. More accurately, we pay you monthly based on your views for the preceding month. We market our content quite a bit, but feel free to share your lessons wid\xB5ely."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_12F044CEE45D0F4D2D29675E09CDBFF3658A88B44F244372E9483DF7DAEBE7CC_1530529694287_file.png",
      "alt": "03_eggo_raining_money"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "The more content you publish, the more money you\u2019re likely to make. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#getting-paid"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "More on payment"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "You\u2019re an expert"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "You heard us! You\u2019re an expert. egghead instructors aren\u2019t necessarily senior developers or technology directors (though some are). They\u2019re just people who love writing code. You\u2019re an expert when you share knowledge other people are looking for. So share it!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Cement your knowledge"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Explaining something helps you understand it better. If you\u2019re learning a new skill or framework, there\u2019s no better way to nail it than to record yourself talking about it (and re-record and edit until the holes in your logic disappear). Pop quiz yourself and make some money while you\u2019re at it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Make career moves"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "egghead instructor looks \uD83D\uDC4D on a resume. Published lessons are portfolio gold. egghead gives you a platform\u2014and all you need to do is give your knowledge a voice. We\u2019ll amplify it for you."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_12F044CEE45D0F4D2D29675E09CDBFF3658A88B44F244372E9483DF7DAEBE7CC_1530529734101_file.png",
      "alt": "04_career_advancement"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Get egghead.io access for life"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Here\u2019s a serious perk: Every egghead instructor gets a lifetime membership to egghead.io with access to all of our premium lessons and courses. That\u2019s a lot of learning to do, with lots more to come."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Work with good people"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "You should always do your due diligence before partnering with any organization. But we give you our word: egghead is a low-key company whose sole focus is making web developers better at what they do."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Most of us at egghead HQ are developers too, so we know how busy you are. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#meeting-your-coach"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "We\u2019ll support you"), ", we won\u2019t give you deadlines (seriously\u2014you produce content only when you want to), and we\u2019ll ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#getting-paid"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "pay you"), " fairly and quickly. Honestly, egghead is the company we always wanted to work with, so we created it for ourselves and for all the smart, badass developers out there."));
});

/***/ }),

/***/ "./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/02-Joining-Slack.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/02-Joining-Slack.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Joining Slack"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_84C94660750D9DC6D746B8A16B4EEF8773037FF7C40B1F1779FA68D2FBEDCA06_1530529776845_file.png",
      "alt": "05_slack_eggos"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Slack is where we communicate."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Once you\u2019ve ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://egghead.io/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "signed up"), " for egghead and created your instructor profile, you\u2019ll receive an invitation to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#egghead-on-slack"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "our Slack channel"), ". That\u2019s where you can meet other instructors from all over the world, talk shop, and get all the support you need from the egghead team. As an instructor, you have access to the egghead Slack for life. Bring your best emoji game."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_84C94660750D9DC6D746B8A16B4EEF8773037FF7C40B1F1779FA68D2FBEDCA06_1530529798285_file.png",
      "alt": "06_emoji_lineup"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Right when you join Slack, we\u2019ll create your private instructor channel. That\u2019s where we\u2019ll share feedback with you, hash out lesson ideas, and answer any questions you have."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "When in doubt, Slack!"));
});

/***/ }),

/***/ "./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/03-Meeting-your-coach.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/03-Meeting-your-coach.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Meeting your coach"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Your success as an instructor is the #1 priority at egghead\u2014and we know success doesn\u2019t come without support. You\u2019ll need some guidance to create the world-class screencasts our members expect. That\u2019s why we pair you with an egghead coach right when you start."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Your coach is a seasoned instructor who will help you nail egghead style through ongoing support, feedback, and brainstorming. Got questions? #ask! Big stuff, little stuff, rough drafts, fire away."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://media.giphy.com/media/PAYR5Ar3XpJJu/giphy.gif",
      "alt": "07_coach_gif"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Slack with your coach to:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Brainstorm ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#what-should-you-teach"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "lesson ideas")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Solidify the theme, scope, and goals of a code example"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Get a second pair of eyes before uploading screencasts"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Talk through feedback"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Get answers on administrative stuff like contracts, equipment, etc."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Even after you\u2019ve published a few lessons, your coach is available whenever you need them."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Plus, you can reach out to egghead's founders John Lindquist (@john) and Joel Hooks (@joel) with any questions or concerns. John and Joel are 100% dedicated to you and the rest of the egghead instructors. Slack us!"));
});

/***/ }),

/***/ "./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/04-Create-your-30-second-lesson.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/04-Create-your-30-second-lesson.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Create your 30-second lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "We want to help new instructors get the hang of egghead style as fast as possible. We know you won\u2019t nail it right away\u2014that\u2019s okay! That\u2019s expected!\u2014so instead of creating an entire lesson, we ask you to record a 30-second video first. That snippet will tell us plenty, and we\u2019ll be able to give you feedback on your ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#create-your-code-example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "code example"), ", ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#how-to-instruct"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "instruction style"), ", and the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://paper.dropbox.com/folder/show/04-Screencasting-tips-e.1gg8YzoPEhbTkrhvQwJ2zz3VfffmW8lGwgJoc5jCIvamKrIozeHB"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "technical stuff"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_9838C555F24EB65660F8595157C5BEE00A2628AF3D89A31309BA4CB5DEE58428_1530530122820_file.png",
      "alt": "08_30second_lesson"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "What we're looking for"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Don't be too concerned about subject matter, audio, or video quality at this point. You want to dial in your:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#how-to-instruct"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "basic instruction style")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#create-your-code-example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "code example")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#prepare-your-screen-for-recording"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "screen dimensions")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#prepare-your-screen-for-recording"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "font sizes")), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_9838C555F24EB65660F8595157C5BEE00A2628AF3D89A31309BA4CB5DEE58428_1530530162355_file.png",
      "alt": "09_lesson_basics"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Our ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://paper.dropbox.com/folder/show/04-Screencasting-tips-e.1gg8YzoPEhbTkrhvQwJ2zz3VfffmW8lGwgJoc5jCIvamKrIozeHB"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "technical guide"), " has you all the details you need to confidently press record. Think you have it figured out? Share a screenshot of your screen setup on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#egghead-on-slack"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Slack"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Pick a topic"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "...but of course, you\u2019ll need to cover something specific. Since your video isn't intended for publication, keep it simple. No need to solve the internet just to impress us! Just pick a topic other web developers would find interesting, in the language of your choice. Python, Ruby, Rust, whatever you\u2019re feeling."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "[Illustration: brainstorming]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Some quick ideas:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch1_s4_icon-bracket.png",
      "alt": "Bracket"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), "  Adding elements to an array"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch1_s4_icon-star.png",
      "alt": "Star"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), " Using variables in JavaScript template strings"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch1_s4_icon-equals.png",
      "alt": "Equals"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), " Centering elements in a div"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Need help? Hit us up in your private ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#egghead-on-slack"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Slack channel"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Start with the code"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_9838C555F24EB65660F8595157C5BEE00A2628AF3D89A31309BA4CB5DEE58428_1530530275859_file.png",
      "alt": "11_start_with_code"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Before you record your clip, create your ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#create-your-code-example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "example"), ": a before and after of your concept explained in code. You might provide the code in two states with a small diff explaining at a glance what your 30 seconds will teach. For simple topics, the before might be a blank screen\u2014totally fine."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Need a gut check? Share your code on Slack using a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#sharing-your-code"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Github gist"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Hit record"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "You've got a topic. You've got the code. Your screen is setup and ready to go."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Now, you need to record your screen as you take your code from its start state to its ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "finished"), " state. Be efficient! 30 seconds goes by fast."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Don't worry about it. Don't edit it. Don't fuss over it. Just let it start the conversation."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Share your recording on egghead.io"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "You can upload your video by submitting an application on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://egghead.io"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "egghead.io"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch1_s4_invitation.png",
      "alt": "gold_invitation"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "If we invited you to be an egghead instructor,"), " you\u2019ll then finish your egghead registration and be prompted to join Slack if you haven\u2019t already."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "We hope you\u2019ll turn this snippet into your first published lesson, or you might start fresh with a whole new topic. Either way, you\u2019ll come out of this exercise understanding the advantages to recording in small chunks with a tight feedback loop. And then you\u2019ll be ready to record for real."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_9838C555F24EB65660F8595157C5BEE00A2628AF3D89A31309BA4CB5DEE58428_1530530391607_file.png",
      "alt": "13_audition_stage"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "If we didn\u2019t send you an invitation,"), " welcome! We\u2019re thrilled you want to join our team of instructors. After you\u2019ve uploaded your video to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://egghead.io/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "egghead.io"), ", we\u2019ll review it. If we like the direction your video is headed in, we\u2019ll send you an invitation."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Pro tip: You\u2019ll have a better chance of submitting a \uD83D\uDC4D 30-second video and getting invited to egghead if you read this whole guide. So keep reading! Then show us what you got!"));
});

/***/ }),

/***/ "./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/05-Getting-feedback-on-your-video.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/05-Getting-feedback-on-your-video.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Getting feedback on your video"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Think of your 30-second video as a very rough draft. It won\u2019t be perfect\u2014and it shouldn\u2019t be! It\u2019s a gut check to see how we can help steer you toward egghead style."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Questions? Just #ask."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "We\u2019re here to help you. Before you record your video, use your private Slack channel to fire over any questions or works in progress, like:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#what-should-you-teach"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Lesson ideas")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "."), " We can help you brainstorm or fine-tune an idea you have. (Chances are, we\u2019ll suggest you scale back the scope of your example. Your lesson should cover one topic and one topic only. No more, no less.)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#write-the-title-and-summary"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Your lesson title and summary")), ". These should be concise and hyper-focused. Before you write any code, make sure you\u2019ve chiseled your lesson idea until it\u2019s simple and able to be tackled in a short video."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#create-your-code-example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "A draft of your code example")), ". Share it over screen sharing technology with your coach on Slack. Walk them through the steps it took to create the example, and think through any changes your coach suggests."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "We\u2019re all about supportive, ongoing feedback at egghead, so when you\u2019re ready to press record, you\u2019re ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "really"), " ready."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://media1.giphy.com/media/111ebonMs90YLu/giphy.gif",
      "alt": "An illustration would work here too 🙂"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Feedback"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Before you upload your video (if we\u2019ve invited you to be an instructor) or tweet it at ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://twitter.com/eggheadio"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "@eggheadio"), " (if you\u2019re auditioning), ask yourself:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Is my screen set to 1280x720 (720p)? (In HiDPI, if possible?)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Is my code example easy to understand?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Did I guide the viewer\u2019s eyes with the mouse?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Did I use those 30 seconds to share useful insights?"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "We\u2019ll use those questions to guide our feedback, which we\u2019ll share with you over Slack."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "After that, we may go through a few rounds of rerecording and feedback until we feel you\u2019re ready to go off and record your first lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Remember: We want you to succeed. We want you to absolutely crush it. Feedback\u2014especially right when you start with egghead\u2014will help you get there."));
});

/***/ }),

/***/ "./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/06-Receiving-your-equipment.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/06-Receiving-your-equipment.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Receiving your equipment"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "If you\u2019re looking at your laptop and wondering how you\u2019ll juke the microphone settings to create professional-quality sound quality...no need. We got you!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Once you've created a draft lesson that is ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "almost"), " ready to be published, we\u2019ll ship you a case packed with audio recording toys. With our compliments, of course."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "[Image: Case full of goodies]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "You\u2019ll get:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "K & M 23150-500-55 Tabletop Microphone Stand with 5/8\" Threaded Connector and Mini Boom Arm"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Shure BETA 87A Microphone"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Shock Mount to attach the mic to the stand"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Shure X2U XLR-to-USB Signal Adapter"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "1 XLR Cable to connect the Microphone to the USB Interface"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Badass by Kathy Sierra"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Our ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#set-up-your-audio"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "technical guide"), " covers setup and how each item works."));
});

/***/ }),

/***/ "./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/07-Getting-paid.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/07-Getting-paid.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Getting paid"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Yes! egghead instructors make money! You receive royalties for all the views your lessons and courses get."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "How much you get paid can range from \"lunch money\" to \"paying the bills!\", and primarily varies with the quality and quantity of what you publish. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#why-create-a-course"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Courses"), " take the most effort, but they also make the most money. Even a single lesson can net you rewarding royalties for a long time; with a keyword-rich summary and title, a lesson can surface in search engine results years after it\u2019s published."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "[Illustration: Money]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "The best way to make money is to produce interesting, useful content. Quantity is good, but quality is better. Good content sells itself."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "We don't produce sponsored content or run ads on a regular basis. It\u2019s all about eyeballs. \uD83D\uDC40"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "How royalties work"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Royalties are paid at the beginning of the month, and reflect how many 30-second segments viewers watched in the previous month. We use PayPal or direct deposit to distribute royalties."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://media2.giphy.com/media/BZhxwIs7as5ngfbVSN/giphy.gif",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "The amount you\u2019re paid depends on the overall gross subscription revenue, and how many 30-second segments were watched in total. We use this basic algorithm in Ruby:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "egghead_monthly_revenue "), " ( your_segments / total_segments ) ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, " royalty_percent")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch1_s2_royaltycrown.png",
      "alt": "royalty_crown"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "When you start making one-off lessons, the royalties will be small. But stick with it, keep producing, and your monthly royalties could hit four figures. Cha-ching."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Make more money with courses"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "After you\u2019ve made a few standalone lessons and gotten the hang of egghead, you\u2019ll probably put on your entrepreneurial thinking cap. How can you leverage your new skills to make the cash flow?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Courses are the bread and butter of egghead.io"), ". Developers looking to learn want curated chunks of information, and we\u2019ve found that they\u2019re willing to pay for it. Grouped lessons are more likely to be found and watched than one-off lessons, making their royalties far greater than those of standalone lessons."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_5039938F092F55E0495D77B9A65DAF41A0665506BE0DA505220FAFB13AF54251_1530308382885_image.png",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "You won\u2019t be crafting courses right out of the gate, but stick with it. The payoff is worth it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Keeping it up"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Ongoing income is the best. But it takes ongoing work."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Many people create a lesson or two, then stop. There are a variety of reasons people stop making lessons:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Way too freaking busy!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "It just isn't for me."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "It's hard AF."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "I can't think of what to record."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "The money\u2019s not coming fast enough."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://media.giphy.com/media/D3ggX9iWqOHza/giphy.gif",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "One of our primary motivations for creating egghead was to help smart humans get reliable recurring income by sharing their knowledge. This kind of income can change how you think of employment. If you're making $1,000 a month from some content you made a year ago, what can that do for you? That's rent! (Unless you live in the Bay Area or NYC\u2014sorry!) egghead royalties could be the difference between staying in a high-paying gig you hate and taking a position you truly love with an organization that can't afford talent of your caliber. How great would that be?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch1_s7_piggybank.png",
      "alt": "piggy_bank"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Hopefully you\u2019re already in that position, but if not, we want to help you get there. We're totally obsessed, and will do everything we can to support and amplify our instructors. We're in this to have a job that we love, work with amazing, diverse people across the globe, and help people improve their lives by learning how to develop software."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "If you want to create a sustainable passive income stream by creating useful learning content for fellow developers, stick with us. We\u2019ll make it happen for you."));
});

/***/ }),

/***/ "./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_Why_be_an_instructor_md__ = __webpack_require__("./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/01-Why-be-an-instructor.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_Joining_Slack_md__ = __webpack_require__("./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/02-Joining-Slack.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_Meeting_your_coach_md__ = __webpack_require__("./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/03-Meeting-your-coach.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__04_Create_your_30_second_lesson_md__ = __webpack_require__("./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/04-Create-your-30-second-lesson.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__05_Getting_feedback_on_your_video_md__ = __webpack_require__("./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/05-Getting-feedback-on-your-video.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__06_Receiving_your_equipment_md__ = __webpack_require__("./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/06-Receiving-your-equipment.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__07_Getting_paid_md__ = __webpack_require__("./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/07-Getting-paid.md");







/* harmony default export */ __webpack_exports__["a"] = ([{
  component: __WEBPACK_IMPORTED_MODULE_0__01_Why_be_an_instructor_md__["a" /* default */],
  title: "Why Be an Instructor",
  slug: "why-be-an-instructor"
}, {
  component: __WEBPACK_IMPORTED_MODULE_1__02_Joining_Slack_md__["a" /* default */],
  title: "Joining Slack",
  slug: "joining-slack"
}, {
  component: __WEBPACK_IMPORTED_MODULE_2__03_Meeting_your_coach_md__["a" /* default */],
  title: "Meeting Your Coach",
  slug: "meeting-your-coach"
}, {
  component: __WEBPACK_IMPORTED_MODULE_3__04_Create_your_30_second_lesson_md__["a" /* default */],
  title: "Create your 30 second lesson",
  slug: "create-your-30-second-lesson"
}, {
  component: __WEBPACK_IMPORTED_MODULE_4__05_Getting_feedback_on_your_video_md__["a" /* default */],
  title: "Getting Feedback on Your Video",
  slug: "getting-feedback-on-your-video"
}, {
  component: __WEBPACK_IMPORTED_MODULE_5__06_Receiving_your_equipment_md__["a" /* default */],
  title: "Receiving Your Equipment",
  slug: "receiving-your-equipment"
}, {
  component: __WEBPACK_IMPORTED_MODULE_6__07_Getting_paid_md__["a" /* default */],
  title: "Getting Paid",
  slug: "getting-paid"
}]);

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/01-What-makes-a-great-lesson.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/01-What-makes-a-great-lesson.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "What makes a great lesson?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Illustration note: instead of links to lessons, embed the the videos.")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Imagine calling a coworker over to your desk to show them something cool you just learned. Would you make a slide deck? Use star-dissolve transitions? Nah, you\u2019d just dive right in."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "That\u2019s what egghead learners want you to do. They\u2019re looking for concise, efficient information that respects their time and shows them how to do something. Nothing fancy, just badass."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "In the spirit of show, don\u2019t tell, this free course by egghead cofounder John Lindquist shows what makes a great lesson: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/courses/record-badass-screencasts-for-egghead-io"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Record Badass Screencasts for egghead")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "It\u2019s focused"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "An egghead lesson discusses a single topic. Don\u2019t stray\u2014stay on point and be concise."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Learners should walk away with a better understanding of the concept covered in the lesson. In just a few minutes, they should increase their vocabulary and learn through a high-quality example."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "John Lindquist - Stay on topic")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.dropbox.com/s/2p6opnh0qn8r9ao/egghead-stay-on-topic.mp4?dl=0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "https://www.dropbox.com/s/2p6opnh0qn8r9ao/egghead-stay-on-topic.mp4?dl=0")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Its title and summary are precise"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Writing concise titles and summaries is the best way to narrow the scope of your lesson so it\u2019s hyper-focused on a single topic. (They\u2019re also the best way to cash\u2014and we mean cash\u2014in on search terms. Mentioning relevant technologies = SEO = \uD83D\uDCB0)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Your summary should quickly tell learners what they\u2019ll gain from your lesson. You could start by writing, \u201CIn this lesson, you will learn to...\u201D One or two sentences are \uD83D\uDC4C"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Your title is the summary of your summary. It should finish the thought, \u201CHow do I...\u201D"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#write-the-title-and-summary"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "More on writing titles and summaries")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "The code example is simple and effective"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#create-your-code-example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "The code example"), " is arguably the most important part of a lesson. The learner should be able to look at the difference between the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "before"), " and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "after"), " code to understand how you\u2019ve applied the concept in the lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "If your example is airtight, it will do the instructing for you. Your narration will just serve to support it. Use the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#the-show-your-work-trick"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "\u201Cshow your work\u201D trick"), " to see if you\u2019ve shown enough."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "John Lindquist - Show then maybe explain")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.dropbox.com/s/5fxdwvnttkxb2lr/egghead-show-then-maybe-explain.mp4?dl=0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "https://www.dropbox.com/s/5fxdwvnttkxb2lr/egghead-show-then-maybe-explain.mp4?dl=0")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "It cuts intros, outros, and stage-setting"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "No"), " \u201Chi, my name is.\u201D ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "No"), " \u201Cin the previous lesson we learned about...\u201D Each lesson should exist on its own without any stage-setting\u2014just like this video:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.youtube.com/watch?v=CT_OJZCYncA&"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "https://www.youtube.com/watch?v=CT_OJZCYncA&")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "This video doesn't talk about the chicken recipe it covered for the dinner course. It doesn\u2019t explain why you may need a cheesecake-stuffed cookie cake. (Attending a party? Stress-baking?) It doesn\u2019t explain what sugar, cookie dough, and ovens are for the .00001% of the population that don\u2019t already know. It just jumps right in."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "When creating your lessons, assume your viewers have working knowledge of the topics covered or will pause the video to learn on their own time. Don\u2019t waste time in your lesson reinventing the wheel (or explaining what wheels are and why they\u2019re helpful)."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "John Lindquist - Avoid intros and outros")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.dropbox.com/s/6x6o608fwiwv28b/egghead-avoid-intros-and-outros.mp4?dl=0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "https://www.dropbox.com/s/6x6o608fwiwv28b/egghead-avoid-intros-and-outros.mp4?dl=0")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "It guides the eyes"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Your audience is trying to follow what you're saying. It's crucial that you keep them with you by guiding their eyes."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Highlight the area of the screen you're teaching. Use the mouse to select/click/drag or anything that creates a sense of movement to tell them \"You should be looking here!\" Remember, this is a video, they're here for the movement, so keep it movin'!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "John Lindquist - Guide their eyes")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.dropbox.com/s/izvlyf41j6kk6kw/egghead-guide-their-eyes.mp4?dl=0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "https://www.dropbox.com/s/izvlyf41j6kk6kw/egghead-guide-their-eyes.mp4?dl=0")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Slack us!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Still foggy on egghead style? Your coach (and the rest of us at egghead HQ) are here to clear the air. #ask!"));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/02-What-should-you-teach.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/02-What-should-you-teach.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "What should you teach?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Quick! Come up with an idea!"), " Unfortunately, it doesn\u2019t work that way."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "As with writing or drawing, instructing about ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "anything"), " can be daunting. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Anything"), " is too big a concept to wrap your head around. That\u2019s why we need prompts."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Tell someone with writer\u2019s block, \u201CDescribe your favorite food.\u201D An hour later they\u2019ll have an essay on cheeseburgers. Tell an artist, \u201CDraw a cheeseburger,\u201D and they\u2019ll draw you a cheeseburger good enough to eat (and write about)."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch2_s2_cheeseburger.png",
      "alt": "cheeseburger"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "The same goes for egghead lessons. Give yourself a prompt. Make it small and specific."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Finding ideas"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "You\u2019re surrounded by inspiring ideas for your next lesson. A few places to look:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch2_s2_icon-slack.png",
      "alt": "slack_icon"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "#egghead-lesson-ideas"), ". The egghead Slack is a great resource when you\u2019re stuck. This channel was specifically created to help get you out of a creative jam. Hop in and see if anyone has ideas to spare\u2014@joel usually comes through."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch2_s2_icon-os.png",
      "alt": "os_icon"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Open-source projects"), ". If you work on an open-source project, contribute to one, or even just have a favorite open-source tool, you can often find great themes for a lesson in the work being done."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch2_s2_icon-trello.png",
      "alt": "trello_icon"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Trello cards and dev Slack channels"), ". What particular problems are other developers solving, and how? There\u2019s a lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch2_s2_icon-stacko.png",
      "alt": "stackoverflow_icon"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Stack Overflow"), ". This is a trove of pain from which to develop useful examples. A quick search reveals questions and answers that would make excellent lesson topics."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Problems you\u2019ve solved"), ". What web development challenge did you recently figure out? Tell learners how you did it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch2_s2_icon-notes.png",
      "alt": "notes_icon"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Your own education"), ". Are you learning something cool right now? The best way to solidify what you learn is to teach it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Plain old Googling is helpful, too. Type something like \u201CLaravel how do I\u201D and Google will autofill with popular search items. Lesson idea gold!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Be super-specific"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "How do I think of good lesson ideas?")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "You just answered your own question. Use the phrase \u201CHow do I\u201D to zero in on a specific topic to cover."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "\u201CHow do I...debug angular applications with Chrome DevTools\u201D")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Or..."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "\u201CHow do i...update ref attributes in React components\u201D")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Two lessons ready to record!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "But beware\u2014this trick could lead to some overly ambitious ideas, like:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "\u201CHow do I build an app with Ruby\u201D")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "You\u2019ll need a few days to cover that one. Think much smaller, and dive into a topic you can thoroughly cover in a few minutes, like:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "\u201CHow do I create a component with React on Rails?\u201D"), " That can be a lesson. In fact, it ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/lessons/react-creating-a-component-with-react-on-rails"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "is")), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/lessons/react-creating-a-component-with-react-on-rails"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "a lesson"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Write it and code it"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Think you have your lesson topic? Great! Now you need to stress test your topic to see if it\u2019s focused enough."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "[Image: Something like detailing a car...showing very precise work.]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Create these three supporting materials:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#write-the-title-and-summary"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Your lesson title")), ". Use that \u201CHow do I\u201D trick. Does it work for your topic? Does your title cover one thing clearly\u2014and can you cover that thing in a short amount of time? Then you\u2019re good."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#write-the-title-and-summary"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Your lesson summary")), ". If it\u2019s too long or requires a lot of detail to summarize, you might need to reduce the lesson\u2019s scope."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#create-your-code-example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "The code example")), " you\u2019ll use to demonstrate the lesson concept. It should be easy to run with very few simple steps. If it requires several steps and screens\u2014and if you anticipate needing to give a lot of background and contextual information to explain those steps\u2014tighten your scope."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "Think of these items as the outline you\u2019d create before writing a school essay. If that outline gets too long and ambitious, you need to reel in the scope a bit."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "That lesson already exists? Do it anyway!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "We have zero qualms about repeating topics. Actually, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#what-if-a-lesson-already-exists"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "we encourage it"), ". No one knows exactly what you know or phrases things in your particular way. What\u2019s your take? Tell us! Tell everybody."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Slack us!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Truly stuck? #ask us for a jumpstart, or come up with some ideas and we\u2019ll pare them down."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Remember: Think small. Don\u2019t explain how to build the internet. Just a small corner of it."));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/03-What-if-a-lesson-already-exists.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/03-What-if-a-lesson-already-exists.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "What if a lesson already exists?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Do you have a great lesson idea, but someone else got to it first? Make that lesson anyway."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Boy, egghead.io sure has too many lessons on the fundamentals of React!"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "This was said by nobody, ever. We firmly believe that hard topics need the fundamentals covered by good examples. A lot of them. It helps people learn!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Learning in layers"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "At egghead, we want to cover concepts in layers. We want to tuck our members in under cotton, wool, and down and help them fully and completely understand complex concepts one bite-sized lesson at a time."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "[Image: peeling an onion \u2191; or many voices singing together \u2193]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Having one \u201Cexpert\u201D rule a concept only gives learners a one-sided, one-dimensional understanding of it. Imagine if only one songwriter in the history of music had written a love song, and all the other songwriters had said, \u201COh, that concept has been covered before.\u201D We\u2019d be robbed of so many musical love stories, and the essential soundtrack to our own."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "So what\u2019s your take on the concept? It\u2019s an essential layer. Add it to the mix."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Diversity on both sides of learning"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "One of the things that makes egghead different from other learn-to-code services is how much we prioritize our instructors\u2019 diversity. Our instructors live on six continents\u2014Antarctica, you\u2019re next!\u2014and they all have different backgrounds, perspectives, and approaches to coding. That\u2019s awesome!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "[Illustration: diversity on egghead]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Our instructors\u2019 diversity also reflects the learners who watch our lessons. One instructor\u2019s way of explaining a concept might not break through to someone, but another instructor\u2019s might. It\u2019s all about the code example you create, your unique turns of phrase, the you that ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "you"), " bring to it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Beginners are experts, too!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Even if you\u2019re relatively new to a concept, your perspective is important. There\u2019s no replacing the beginner\u2019s mindset\u2014when concepts are new and exciting, when you see them with fresh eyes and clarity."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "So even if someone more \u201Cexperienced\u201D has made a lesson about that concept, make your lesson anyway. Other beginners might learn better from you than the seasoned veteran."));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/04-Write-the-title-and-summary.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/04-Write-the-title-and-summary.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Write the title and summary"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Naming things is hard. Naming things is vital."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Giving your lesson a solid title and summary ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "before you hit record"), " helps you define the scope of your lesson. With strong titles and summaries, you also make your content more useful and meaningful to the thousands of developers who will watch it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Narrow your scope"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "There are thousands of lessons on egghead that learners find via site and Google search. The best way for them to find your lesson is with a robust, descriptive title."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "[Image or gif of someone writing]"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Let's walk through the process of choosing your subject matter, then writing your title and summary."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Start with an idea:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "\u201CI've been working with React a lot lately. Something interesting about React components and their lifecycle methods that fire at particular times?\"")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "That\u2019s a cool concept. You might quickly think of something like this for a title:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "React Component Lifecycle Methods"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "That\u2019s a tempting title! But it's too broad for a bite-sized lesson. Let's narrow the topic down:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "\"Reading about lifecycle methods in the React docs, I've noticed that"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "*componentWillReceiveProps*"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "isn't as clear as some of the others.\"")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Now we have a target!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Summarize the concept"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Continuing to drill down on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "componentWillReceiveProps"), ", we can write a quick summary of what the viewer can expect:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "In this lesson, you will learn to dynamically update a React component's state based on the properties that are passed into it. We will take a look at the React component componentWillReceiveProps lifecycle method, and how to use it effectively."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "That\u2019s a strong, succinct concept that you can reasonably cover in a few minutes. \u2705"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Write your title (the summary of your summary)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Here's a trick to coming up with a good title: Think \"How do I...\" and then summarize your summary."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "You wouldn't say \"How do I... react component lifecycle methods: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "componentWillReceiveProps."), " \u201D"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Instead, you would say something like \"How do I... use ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "componentWillReceiveProps"), " to manage react component state?\u201D"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Use componentWillReceiveProps to Manage React Component State"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "That\u2019s a strong, specific title that tells learners what to expect from the lesson. People watch screencasts to solve specific problems and learn specific things, and good descriptions help them find the answers they\u2019re looking for."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "So our title and summary are:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Use componentWillReceiveProps to Manage React Component State"), "\nIn this lesson, you will learn to dynamically update a React component's state based on the properties that are passed into it. We will take a look at the React component ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "componentWillReceiveProps"), " lifecycle method, and how to use it effectively."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "\u2705\u2705"));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/05-Create-your-code-example.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/05-Create-your-code-example.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Create your code example"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "The code example shows your concept in action. It\u2019s the foundation of your lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "A good example is simple and focused on one ultra-specific concept. After watching your lesson, the learner will have access to the code in Plunker to play around with, so your example should be easy to run with in just a few simple steps without in-depth knowledge of a specific domain."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "What should your example look like?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Your code example will almost definitely have two different states: a start and a finish."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "The ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "start"), " state could either be:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "a blank screen, if you\u2019re starting from scratch"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "a structured shell that you add to"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "The ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "finished"), " state will reflect the concept that you\u2019ve just explained."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "[Gif: showing the transition from start to finish]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "The difference between ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "start"), " and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "finish"), " directly defines the scope and complexity of the lesson. If you can\u2019t get to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "finish"), " in under 10 minutes or without using complex steps, you should probably ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#write-the-title-and-summary"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "revisit your title and summary"), " and scale back a bit. Don\u2019t try to boil the ocean!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "If there\u2019s more you want to cover..."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "There\u2019s always more to learn. Always. We can\u2019t teach it all, and we especially can\u2019t teach everything in a single lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "If you\u2019re an experienced egghead instructor with a few published lessons and you want to keep expanding on your example, it might be time to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#why-create-a-course"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "create a course"), ". With courses, one example is used as a connective thread throughout several lessons. Courses are a great challenge, and they often make you more money. \uD83D\uDCB0"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Your code embedded"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Every egghead lesson page has a spot for the viewer to find the relevant code. Depending on the lesson\u2019s context, the code may be linked to a GitHub repo/gist, or embedded from one of several popular \u201Ccode playground\u201D sites like Plunker and CodeSandbox."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://d2mxuefqeaa7sj.cloudfront.net/s_FB80B93EA5483EF54DAB0268844B493769DF019BC960CACAD8BB1ACB631CA4F4_1530482993783_image.png",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Embedded examples let learners play around with your code to apply what they\u2019ve just learned. It\u2019s a good reminder: Though your lesson may feel like a performance, it exists to help other web developers learn. For more information, check out Sharing your code."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Slack us!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Need help with Plunker or want a second pair of eyes on your example? Share it with your coach on Slack. They\u2019ve seen hundreds of examples\u2014some extraordinary, some ehh\u2014so don\u2019t be self-conscious about your coding skills. Your coach will kindly point out anything to fix or ways to tighten your scope."));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/06-How-to-instruct.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/06-How-to-instruct.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "How to instruct"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Once you\u2019ve nailed your title, summary, and code example, it\u2019s time to figure out what you\u2019re going to say."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "The \u201Cinstructor\u201D title can feel daunting. Don\u2019t let it! If you\u2019ve ever shown someone how to do something, you\u2019re an experienced instructor."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Speak to support the code"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "In your lesson, you should show first (with your code) then maybe explain (with your voice). Your narration is quite simply the explanation of the changes you\u2019re making to your code as you take it from its ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "start"), " state to its ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "finished"), " state."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "You won\u2019t be asking questions that teachers typically do, like \u201CWhat themes can we draw from this?\u201D You will simply relay information, explain how and why you did what, and let the learners soak it in. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Keep it simple and focused on the code.")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Write a script or outline"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Your narration should sound casual but informed, like you\u2019re showing something to a coworker. Some instructors find it helpful to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "write out a script"), " beforehand so they\u2019re never in doubt of what to say. It\u2019s a great way to cut the \u201Cumm\u201Ds and \u201Cuhh\u201Ds and make your explanation as tight as possible."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "[Illustration: bullet points on paper]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "If you\u2019d rather sound more conversational, less scripted, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "write out an outline"), ". We\u2019re talking bullet points\u2014the keywords you want to say, the points you want to hit. This approach may require you to edit a few seconds of dead air here and there, but the published narration will sound polished."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Do a dress rehearsal"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Have you ever conducted a workshop? Talked at a conference? Presented to your sixth grade class? You know how essential it is to practice your talk before showtime."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "[ Illustration: speaking aloud ]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Same with egghead lessons. Before you hit record, explain your code example to yourself. Out loud. Enunciate! Be confident! Believe you\u2019re the most qualified instructor in the history of egghead!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "You\u2019ll probably trip over your words. You might realize you know how to do something but not how to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "articulate"), " it. That\u2019s okay\u2014write notes to yourself and put your knowledge into words."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "When it\u2019s time to record, you\u2019ll be more than ready."));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/07-Speak-concisely.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/07-Speak-concisely.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Speak concisely"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "By now, you know the drill: egghead lessons are short and to the point. That goes for the videos, which should be 1\u201310 minutes long. It also goes for your narration. Less is more."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Consider this example:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Hello! Before we get started using Webpack you are going to need to install node. We are going to visit this URL and find the link to install it. Now we press \"download\" and we should get a file. We can now open that file and extract its contents. Now that node is installed, we can use npm to install webpack globally. Great. Now that webpack is installed globally, we can use it! Open up Sublime or your favorite editor to start working on the config."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Holy backstory! If you think back to our ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#what-makes-a-great-lesson"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "cheesecake-stuffed cookie cake example"), ", we don't have to explain or justify each step in the instruction. We can assume we\u2019re delivering content to smart, capable humans who can fill in some blanks. We have to. There\u2019s instructing to do, and the clock is ticking."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "[Image: A cheesecake-stuffed cookie cake]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Without the over-instruction, we have a much more concise, energetic start to the lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "We've got node already installed. Use npm to install webpack. Now run init and open the config to edit it."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Note how active those sentences are: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "install webpack. Run init. Open the config"), ". Those are instructions."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "How much personality can we bring to our lessons?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Bring all your charm and favorite idioms to your narration ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "as long as they support your code example"), ". That\u2019s what egghead learners come to see: good code. Use the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#the-show-your-work-trick"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "\u201Cshow your work\u201D trick"), " to determine if you should talk less, code more."));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/08-The-show-your-work-trick.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/08-The-show-your-work-trick.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "The \u201Cshow your work\u201D trick"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "egghead lessons are concise by definition, but there\u2019s another reason to keep your lessons sharply defined."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Too many ideas in one lesson means you\u2019re glossing over concepts. Let\u2019s say you mention \u201Ccondition X could crash your app\u201D because you want to cover your bases, yet you don\u2019t take the time to really get into that subject. All you\u2019ve accomplished is alarming your audience without giving them any solution."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Show, don\u2019t tell"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Show your work!"), " You probably heard this when your high school math teacher forced you to write out the steps to a solution to get full credit for your answer."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "[Image: math problem supported by written steps]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "It applies to coding instruction, too. The simple act of typing something out, highlighting a block with your mouse, or logging something in the console makes concepts infinitely more approachable."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "If a user sees you walk through those steps, they gain confidence that they can do it, too. If they only hear you ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "talking"), " about concepts, they can\u2019t readily tie the concepts back to the code. Worse yet, they might stop paying attention altogether."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Watch on mute"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Here\u2019s the trick: Turn off your audio and watch your lesson without sound."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "It should be obvious from the visuals what you\u2019re teaching. You may notice periods of 5+ seconds where nothing is happening. \u201CNothing\u201D usually means you\u2019re getting off-topic and thought it would be tough to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "show"), " what you\u2019re talking about. When you catch a section of \u201Cnothing,\u201D write down the topic you weren\u2019t showing. Save it for another lesson!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "[ Gif: Screen with very active mouse.]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://www.cat-gifs.com/w3/CAT-GIF-Funny-Cat-watching-the-mouse-cursor-on-PC-monitor.gif",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "With this one trick, you\u2019ll quickly turn one lesson with a lot of tangents into a focused, concise lesson about one topic. Or if you\u2019re interested in creating a course, those tangents could each be a separate lesson."));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/09-Record-and-upload-your-lesson.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/09-Record-and-upload-your-lesson.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Record and upload your lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Now that you know how to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://paper.dropbox.com/doc/07-Speak-concisely-v5Rk1EjXfhwrri6cRuPGA"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "be concise"), ", ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#how-to-instruct"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "narrate your lesson"), ", and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#the-show-your-work-trick"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "show your work"), ", it\u2019s time to record for real."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Recording your screencast"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "We\u2019ve put together an entire Technical Guide to help you ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "record"), " your screencasts. Find out how to:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#prepare-your-screen-for-recording"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Prepare your screen for recording")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#set-up-your-audio"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Set up your audio equipment")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "https://paper.dropbox.com/doc/03-Record-your-lesson-5sBpHCVOxhPhlZYEVxrhY"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Record and edit your lesson")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#sharing-your-code"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Set up and share your code")), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Okay, that handles the specifics of recording. But the word ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "record"), " is so...official. What if you mess up?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Make mistakes!"), " Your video isn't a live presentation. Mistakes and restarts are fine. Sometimes you need to cough, kids run through, a train rolls by. Edit it out later."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://media1.giphy.com/media/3oKIPoAP1wLvewc7QI/giphy.gif",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Stumbling? Rambling? ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Pause and think it through."), " Pauses are SO easy to edit out."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Slow down"), ". Newbie instructors tend to rush through their lessons. Be slow and deliberate so learners can follow what you\u2019re saying. Slowing down also helps your mouse keep up with your voice."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "If you want a second pair of eyes before uploading your lesson, reach out to your coach on Slack. Or go ahead and upload, and you\u2019ll get feedback after that. Remember, we\u2019re here to support you and help you succeed!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Upload your lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "When your draft is complete, upload it to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "egghead.io"), ". When you upload any lesson video, it\u2019s automatically processed to make sure its audio is in stereo, the resolution is as expected, and that it\u2019s uploaded to the appropriate storage channels."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "[ Image: Screenshot of lesson being uploaded]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "You\u2019ll almost certainly get feedback, \u2757", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "strong",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "which isn\u2019t the same as criticism")), "\u2757 . Your coach knows exactly what we\u2019re looking for and how to tweak lessons to get there. As you go through the editing process, ask your coach to screen share with you so you can get some guidance for the first pass. This can save you hours of trying to figure things out on your own! \uD83D\uDE42"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Feedback in hand, you\u2019ll be able to edit and update your video. When your coach gives you a thumbs up, you can update your lesson video for final review and publication."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Sometimes this can take a few minutes. If an hour goes by and your lesson video still isn\u2019t visible, let us know!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Lesson review and approval"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Once you complete all the above steps, your lesson will be reviewed for approval. Reviewing means an experienced egghead instructor\u2014someone other than your coach\u2014will watch your lesson and provide feedback. It\u2019s not uncommon that your lesson will require a couple of updates. Just record the required changes and replace the lesson\u2019s video on egghead."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Then we publish! \uD83C\uDF7E"));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/10-When-well-publish-your-lesson.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/02-Creating-lessons/10-When-well-publish-your-lesson.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "When we\u2019ll publish your lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "You\u2019ve made it to the finish line. Hooray!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Once you\u2019ve uploaded your lesson and gotten the official thumbs up, your lesson enters egghead\u2019s lesson publishing queue."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "[ Image: publishing queue ]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "The queue automatically publishes lessons from top to bottom. We publish several times per week and sometimes daily, depending on how many lessons are in the queue. This way, we make sure we\u2019re keeping our subscribers happy with a steady stream of great content."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "New instructors"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Lucky you\u2014we move new instructors\u2019 lessons to the top of the queue. This gives you a quick win after going through the process of recording your 30-second sample, making edits, recording your lesson for real, making ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "more"), " edits, and finally getting that coveted approval."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "You\u2019ve come a long way. Celebrate!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Experienced instructors"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "When an instructor has 12 published lessons, they gain the ability to review, approve, and publish their own content! Hot damn!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "We trust you to make sure the quality of your lesson is high. You can still ask for review if you want it, or you can simply add your lesson to the publishing queue by approving it like a baller."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Sharing your lesson on social media"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "After publishing, lessons are added to egghead\u2019s social media sharing queue. This drives a lot of eyeballs to our lessons\u2014our Twitter account has over 45,000 followers."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "[ Image: tweet announcing a new lesson ]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "That\u2019s it!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "You did it. You\u2019re a published instructor."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Ready to do it all again?"));
});

/***/ }),

/***/ "./instructor-guide/docs/02-Creating-lessons/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_What_makes_a_great_lesson_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/01-What-makes-a-great-lesson.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_What_should_you_teach_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/02-What-should-you-teach.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_What_if_a_lesson_already_exists_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/03-What-if-a-lesson-already-exists.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__04_Write_the_title_and_summary_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/04-Write-the-title-and-summary.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__05_Create_your_code_example_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/05-Create-your-code-example.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__06_How_to_instruct_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/06-How-to-instruct.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__07_Speak_concisely_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/07-Speak-concisely.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__08_The_show_your_work_trick_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/08-The-show-your-work-trick.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__09_Record_and_upload_your_lesson_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/09-Record-and-upload-your-lesson.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__10_When_well_publish_your_lesson_md__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/10-When-well-publish-your-lesson.md");










/* harmony default export */ __webpack_exports__["a"] = ([{
  component: __WEBPACK_IMPORTED_MODULE_0__01_What_makes_a_great_lesson_md__["a" /* default */],
  title: "What Makes a Great Lesson",
  slug: "what-makes-a-great-lesson"
}, {
  component: __WEBPACK_IMPORTED_MODULE_1__02_What_should_you_teach_md__["a" /* default */],
  title: "What Should You Teach",
  slug: "what-should-you-teach"
}, {
  component: __WEBPACK_IMPORTED_MODULE_2__03_What_if_a_lesson_already_exists_md__["a" /* default */],
  title: "What if a Lesson Already Exists",
  slug: "what-if-a-lesson-already-exists"
}, {
  component: __WEBPACK_IMPORTED_MODULE_3__04_Write_the_title_and_summary_md__["a" /* default */],
  title: "Write the Title and Summary",
  slug: "write-the-title-and-summary"
}, {
  component: __WEBPACK_IMPORTED_MODULE_4__05_Create_your_code_example_md__["a" /* default */],
  title: "Create Your Code Example",
  slug: "create-your-code-example"
}, {
  component: __WEBPACK_IMPORTED_MODULE_5__06_How_to_instruct_md__["a" /* default */],
  title: "How to Instruct",
  slug: "how-to-instruct"
}, {
  component: __WEBPACK_IMPORTED_MODULE_6__07_Speak_concisely_md__["a" /* default */],
  title: "Speak Concisely",
  slug: "speak-concisely"
}, {
  component: __WEBPACK_IMPORTED_MODULE_7__08_The_show_your_work_trick_md__["a" /* default */],
  title: "The Show Your Work Trick",
  slug: "the-show-your-work-trick"
}, {
  component: __WEBPACK_IMPORTED_MODULE_8__09_Record_and_upload_your_lesson_md__["a" /* default */],
  title: "Record and Upload Your Lesson",
  slug: "record-and-upload-your-lesson"
}, {
  component: __WEBPACK_IMPORTED_MODULE_9__10_When_well_publish_your_lesson_md__["a" /* default */],
  title: "When We'll Publish Your Lesson",
  slug: "when-well-publish-your-lesson"
}]);

/***/ }),

/***/ "./instructor-guide/docs/03-Creating-Courses/01-Why-create-a-course.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/03-Creating-Courses/01-Why-create-a-course.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Why create a course"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Courses are the bread and butter of egghead."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "A course is a composed set of bite-sized lessons. The course itself should be bite-sized, covering a single topic in depth through a sequence of individual lessons."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "The lessons in a course can be enjoyed and understood solo\u2014but together, those lessons allow learners to follow a collective thread and understand a topic in much more depth."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "[Image: screenshot of a course ]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "A course will include:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "a robust summary that can include links to pre-requisites and other resources"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "a list of all the other lessons in the course"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "course notes in the form of a GitBook the community can build together"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "an \"enhanced transcript\" that assembles all of the transcripts for a course into a usable document that allows the learner to read the entire course as a book"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "the code for each lesson representing its current state, with a readme describing how to execute the code if it isn't embedded."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "individual lesson summaries with links, etc."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "If that sounds like a lot of work, that\u2019s because it ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "is"), ". Each lesson takes a lot of effort, so a course amounts to the effort for all the lessons you need to create, and then a little more."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "But the payoff is worth it. Why?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "egghead members love them"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Humans love curated knowledge. They want to learn a topic in depth, but at a pace that works for them."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "[ Some illustration of curated knowledge? ]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "egghead courses give hungry learners a sequence to follow, with the promise of greater understanding at the end of ~8\u201312 lessons. We\u2019ve found that developers are willing to sit down and watch courses\u2014and pay for them."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Which brings us to our next point..."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "You make more money!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "No two ways about it, courses get more eyeballs than individual lessons. It just makes sense: When you publish courses, you publish several lessons at a time. That\u2019s more content and more chances for views."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "[Illustration: $$$$]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Not only that: Learners often watch those lessons consecutively. (Obviously. That\u2019s what a course is meant for.)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Once your course is published, it can continue to create a passive revenue stream for you. Learners will keep watching, and the royalties will keep coming in."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "You want to do more with your code"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "When you\u2019re going through the process of crafting a lesson\u2014creating your ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#create-your-code-example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "code example"), " and using the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#the-show-your-work-trick"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "\u201Cshow your work\u201D trick"), "\u2014you might need to cut out some cool information. Either because it\u2019s off-topic, or because it widens the scope of your lesson way beyond 10 minutes."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Never fear, courses are here."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Turn that excess info into a string of lessons, and you\u2019ll have yourself a course. A course will take one code example and use a few different diffs to show different concepts. If you\u2019re feeling hamstrung by the bite-sized nature of individual lessons, courses give you a little more room to play and showcase what you know."));
});

/***/ }),

/***/ "./instructor-guide/docs/03-Creating-Courses/02-How-to-structure-your-course.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/03-Creating-Courses/02-How-to-structure-your-course.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "How to structure your course"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "There are several types of egghead courses. The most important aspects of a course are tight focus and high-quality examples. If you have those two things, the style doesn't matter."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "But it always helps to have a plan, and you might benefit from having a set format to guide you. These course types are excellent places to start."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Documentation"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "[Illustration: a piece of paper?]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "This type of course is a straightforward presentation of the documentation for a library, framework, or tool. Dan Abramov's ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/courses/getting-started-with-redux"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "popular course on Redux"), " is a great example."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "A documentation presentation doesn't mean you simply read the docs to the student. Instead, take the docs and present them with high-quality examples."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Project-based"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "[project-based illustration]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Another favorite is a project-based approach. In this case, the course amounts to a project that the student will build from start to finish."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Our cofounder John Lindquist did this with his ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/courses/build-redux-style-applications-with-angular-rxjs-and-ngrx-store"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Build Redux Style Applications course"), ", using Angular, RxJS, and ngrx/store as its bases."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Cookbook"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "[cookbook illustration]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "You can also present a series of problems and solutions in the \"cookbook\" style. A typical recipe will include some common (or maybe not-so-common) problems, and then provide an example solution for the problem using the tool the cookbook is discussing."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Trevor D. Miller's ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/courses/react-testing-cookbook"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "React Testing Cookbook"), " course is a solid example of this approach."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "You decide!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "[Illustration: brainstorming]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "You're smart and creative, and definitely not limited to any of these course types. If you've got an idea for a new way to structure your course, let's hear it!"));
});

/***/ }),

/***/ "./instructor-guide/docs/03-Creating-Courses/03-Write-your-course-proposal.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/03-Creating-Courses/03-Write-your-course-proposal.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Write your course proposal"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Before you start producing your egghead course, we ask you to write and submit a course proposal."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "For you, the proposal defines your intent for the course, and gives you a chance to craft great titles for the course and its lessons to guide your work."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "For us at egghead, your proposal lets us think more deeply about the content and structure of the course to make sure it\u2019s solidly planned and delivers a ton of value to your learners."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "How to structure your proposal"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Here\u2019s a perfect ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://docs.google.com/document/d/1goXtI_zmSfXTgaimrxIss356DoedPRt5MMAySs1f-bE/edit"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "example of a course proposal"), ", and here's ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://docs.google.com/document/d/1x5_UehD9mM2jeCtlqEZFy3epDLLmbgBBGCow5fDRNCc/edit#"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "a blank template"), " for you to use."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\uD83D\uDD25  We strongly prefer you create your proposal in Google Docs. \uD83D\uDD25  It\u2019s the easiest way for us to collaboratively make comments and edits to help you make your proposal perfect."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "The proposal should consist of 4 parts:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "User story"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Goals"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Summary"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "List of lessons"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Let\u2019s look at each of these in more detail."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "The user story"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Your course proposal starts with a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "user story"), ". This is similar to the agile software practice of writing a story to describe ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "who"), ", ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "what"), ", and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "why"), " we\u2019re creating this thing."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "[Image: Someone building something]"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "For example:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "As a developer, I want to build applications with React and Redux so I can create applications that aren't littered with state."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "This short exercise helps you think like your learners to define what challenge(s) your course will help them solve."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Goals"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "The second section of your proposal lists your goals for the course."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "What am I trying to teach?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Why am I teaching it?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "What knowledge should the learner walk away with?"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Summary"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "The course summary is one paragraph (or two short paragraphs) that describes the course, the technology you\u2019ll cover, and what will be learned."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Here\u2019s the summary from the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://docs.google.com/document/d/1goXtI_zmSfXTgaimrxIss356DoedPRt5MMAySs1f-bE/edit#"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "example we shared"), ":"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "In this course we will build an image gallery application that connects to the Flickr API to load its data. We are going to start from an empty directory, and build the application incrementally, discussing the problems that we might encounter along the way. The image gallery is a simple application, but even the simplest applications need to deal with application state. We will use Redux to help us with that aspect of the image gallery. For asynchronous communication, we will learn about redux-saga, a wonderful library that uses JavaScript generator functions to make complex async application \u201Cside effects\u201D a pleasure to construct."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Keep in mind that your approved summary will be presented along with the course on egghead.io, so only include content in your proposal that you\u2019d want to publish. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#write-the-title-and-summary"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "These guidelines"), " will help you write a succinct and successful summary."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "List of lessons"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Finally, the course lists each lesson in the course, including the titles and summaries for each lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "There\u2019s ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#write-the-title-and-summary"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "an art to writing a lesson title"), ". By now, instructors should know how to write them. For a refresher, they should be concise and follow the \"how do I...\" format. The ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#write-the-title-and-summary"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "lesson summary"), " should be just that: a summary of the technology covered and the goals for the lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "For example:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "blockquote",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Load data with redux-saga effects from an API in React"), " \u2013 redux-saga makes loading data from a remote API in a Redux-enabled React application very simple. In this lesson, we will create a saga that connects to the Flickr API and loads data for an image gallery component."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Sharing your proposal"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Your coach will, first of all, be psyched that you\u2019re ready to take the plunge into courses. Share your proposal with then on Slack. Did we mention that Google Docs is the way to go?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "Now hop to it."));
});

/***/ }),

/***/ "./instructor-guide/docs/03-Creating-Courses/04-Your-course-code-example.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/03-Creating-Courses/04-Your-course-code-example.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Your course code example"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "A course typically has one code example that acts as a connecting thread through the course. You\u2019ll build on it from lesson to lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "As soon as your course proposal is approved, you should start building your code example ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#sharing-your-code"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "in a tool like Plunker"), ". The best format of your code example will depend on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://paper.dropbox.com/doc/02-How-to-structure-your-course-YfYDW8HSjx7DsAEShXc4X"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "the style of your course"), ". As always, #ask your coach for guidance and a second pair of eyes as you build."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "[Gif: code being built]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Sharing your code"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "For each lesson in a course, you\u2019ll provide your code example in its finished state below the video so learners can explore the code on their own."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://next.plnkr.co/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Plunker"), " is our favorite tool for ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#sharing-your-code#q=how%20to%20structure"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "creating and delivering our examples"), ". We also enjoy ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://codesandbox.io/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "CodeSandbox"), ". If they won\u2019t work for the code you\u2019re building, you can use a GitHub repository to store the code example. GitHub repo examples will provide a branch for each lesson, where the branch is the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "finished"), " state of the given lesson. If your course is the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://paper.dropbox.com/doc/02-How-to-structure-your-course-YfYDW8HSjx7DsAEShXc4X"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\"cookbook\" style"), " and uses GitHub, you can just have folders in a single repo for each example."));
});

/***/ }),

/***/ "./instructor-guide/docs/03-Creating-Courses/05-Record-your-course.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/03-Creating-Courses/05-Record-your-course.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Record your course"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "With all the prep you've already done for your course, a lot of the hard work is behind you."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Once your proposal has been reviewed and approved, you can spend some time ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "iterating your lesson plans on paper"), " and building a solid curriculum that will be useful for thousands of developers for years to come!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch3_s5_buildingcourse.png",
      "alt": "building_a_course"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "When you\u2019re ready, record your lessons and upload them one by one as they\u2019re finished."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "[Screenshot: Upload button?]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "And you know what? That\u2019s all recording a course is: recording individual lessons that the egghead team will bundle together on egghead.io. By now, you\u2019re an expert lesson-creator, but feel free to read our ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://paper.dropbox.com/doc/03-Record-your-lesson-5sBpHCVOxhPhlZYEVxrhY"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "guidelines to recording lessons"), " should you need a refresher."));
});

/***/ }),

/***/ "./instructor-guide/docs/03-Creating-Courses/06-Create-your-course-overview.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/03-Creating-Courses/06-Create-your-course-overview.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Create your course overview"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "When your course is \"lesson complete,\" it's time to record a course overview. Guess what: It\u2019s another lesson! But a lesson that serves as the trailer for your course."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Here\u2019s a great example of an overview, from the course ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/courses/advanced-react-component-patterns"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Advanced React Component Patterns"), " by Kent C. Dodds:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Kent C. Dodds - Introducing Advanced React Component Patterns")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.dropbox.com/s/r6lu0h49v9sbfh3/01-egghead-react-introducing-advanced-react-component-patterns.mp4?dl=0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "https://www.dropbox.com/s/r6lu0h49v9sbfh3/01-egghead-react-introducing-advanced-react-component-patterns.mp4?dl=0")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Here\u2019s what Kent did so well:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "He ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "explained"), " the what, why, and how of the course. In under 2 minutes, you get a very good sense of the learning to come."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "He ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "showed \u201Cscenes\u201D"), " from the lessons including some of the meatier elements covered in the course. It\u2019s like a movie trailer: You\u2019ll laugh, you\u2019ll cry, you\u2019ll learn."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "He ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "showed excitement"), " for the course. It's a bit of a sales pitch\u2014much like the course proposal you created a while ago, but this time for learners\u2019 approval."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "[ Gif: giving the thumbs up ]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Creating your course overview is the perfect way to conclude your production of the course. You get to stitch together \u201Cbest-of\u201D clips showing your instruction skills at work, act as your course\u2019s hype person, and publish a publicly accessible video (all course overviews are public) that will look great in your portfolio."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Oh and, hey! Congratulations on publishing your first course! \uD83C\uDF7E"));
});

/***/ }),

/***/ "./instructor-guide/docs/03-Creating-Courses/07-Maintain-your-course.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/03-Creating-Courses/07-Maintain-your-course.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Maintain your course"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Ever heard of \"JavaScript fatigue\"? \uD83D\uDE2B"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Well, it affects egghead.io courses. Video is a tough format, and because libraries move at a brisk pace and forward progress is always happening\u2014which is great!\u2014egghead content producers have some specific challenges in keeping courses current and usable."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Updates from our review team"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Our egghead content team works hard to keep your course as viable as possible, as long as possible. Every day, they review courses on egghead.io to confirm the code and examples are relevant and still work."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "[ Illustration: QAing\u2014something like this, but more fun ]"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh5.googleusercontent.com/DOu4jQBDloo8qDy6C7GnImChI7LBJQSZ88KsSDhK-BGBMcO98SP3Df86Jp0dYvOiM2_rsy6nju8wvaI8_gH3Uj3OdOUuouAf_qw6F4Yw1gjSqSwLIcejTnAsY-mA6Ch6C5oPGnOC",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Same with our lessons. The content team reviews lessons to confirm they still function with the latest versions of the tools they cover. When updates are needed, our team updates the code and attaches version labels to help students understand the differences between the lesson video and the code."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "When it\u2019s time for big changes"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Time marches on. Libraries and frameworks get updated. Sometimes, that means courses become outdated or irrelevant. (This is why we created egghead in the first place\u2014to help developers learn quickly because things change ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "all the time"), ".)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "If this is the case for your course, the content team will notify you so you can update the lessons on your end. That is, if you want to. But we must say, it's definitely in your best interest to keep your course updated, especially right when progress happens. There\u2019s no better time to stake your claim to knowledge. Relevance pays off. \uD83D\uDCB0"));
});

/***/ }),

/***/ "./instructor-guide/docs/03-Creating-Courses/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_Why_create_a_course_md__ = __webpack_require__("./instructor-guide/docs/03-Creating-Courses/01-Why-create-a-course.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_How_to_structure_your_course_md__ = __webpack_require__("./instructor-guide/docs/03-Creating-Courses/02-How-to-structure-your-course.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_Write_your_course_proposal_md__ = __webpack_require__("./instructor-guide/docs/03-Creating-Courses/03-Write-your-course-proposal.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__04_Your_course_code_example_md__ = __webpack_require__("./instructor-guide/docs/03-Creating-Courses/04-Your-course-code-example.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__05_Record_your_course_md__ = __webpack_require__("./instructor-guide/docs/03-Creating-Courses/05-Record-your-course.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__06_Create_your_course_overview_md__ = __webpack_require__("./instructor-guide/docs/03-Creating-Courses/06-Create-your-course-overview.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__07_Maintain_your_course_md__ = __webpack_require__("./instructor-guide/docs/03-Creating-Courses/07-Maintain-your-course.md");







/* harmony default export */ __webpack_exports__["a"] = ([{
  component: __WEBPACK_IMPORTED_MODULE_0__01_Why_create_a_course_md__["a" /* default */],
  title: "Why Create a Course",
  slug: "why-create-a-course"
}, {
  component: __WEBPACK_IMPORTED_MODULE_1__02_How_to_structure_your_course_md__["a" /* default */],
  title: "How to Structure Your Course",
  slug: "how-to-structure-your-course"
}, {
  component: __WEBPACK_IMPORTED_MODULE_2__03_Write_your_course_proposal_md__["a" /* default */],
  title: "Write Your Course Proposal",
  slug: "write-your-course-proposal"
}, {
  component: __WEBPACK_IMPORTED_MODULE_3__04_Your_course_code_example_md__["a" /* default */],
  title: "Your Course Code Example",
  slug: "your-course-code-example"
}, {
  component: __WEBPACK_IMPORTED_MODULE_4__05_Record_your_course_md__["a" /* default */],
  title: "Record Your Course",
  slug: "record-your-course"
}, {
  component: __WEBPACK_IMPORTED_MODULE_5__06_Create_your_course_overview_md__["a" /* default */],
  title: "Create Your Course Overview",
  slug: "create-your-course-overview"
}, {
  component: __WEBPACK_IMPORTED_MODULE_6__07_Maintain_your_course_md__["a" /* default */],
  title: "Maintain Your Course",
  slug: "maintain-your-course"
}]);

/***/ }),

/***/ "./instructor-guide/docs/04-Screencasting-tips/01-Prepare-your-screen-for-recording.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/04-Screencasting-tips/01-Prepare-your-screen-for-recording.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Prepare your screen for recording"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Success on egghead comes down to mechanics"), ". This guide will help you nail the technical aspects of presentation and accessibility, so you can present lessons that are visually clear and accessible for all learners and devices."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Screencasting isn\u2019t easy. It\u2019s a difficult skill to nail\u2014and on top of that, we\u2019re very picky about the screencasts we publish on egghead.io. We can\u2019t publish screencasts with small fonts, blurry text, and low-contrast color schemes that distract from learning. While egghead screencasts are diverse, they must also share a sameness of quality and presentation."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/lessons/tools-remove-distractions?play=true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Video: Remove distractions")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Always remember accessibility."), " A wide range of people will access your lessons on a variety of devices of varying quality. Maximizing the legibility of the code you present helps all learners absorb the information to the best of their abilities."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Set your settings"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Before you do anything else, adopt these settings:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "1280x720 (720p)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "16:9 aspect ratio"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Stereo audio (", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "#set-up-your-audio"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "you\u2019ll set up your audio next"), ")"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "For best results, use HiDPI mode on your monitor"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "We deliver content at 720p (1280x720 in pixels). We want this to be a crisp and legible output for the viewer, whether they\u2019re expanding lessons fullscreen on a 65\" TV screen or watching them on the bus."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/lessons/tools-prepare-to-record-screen-resolution-and-mic-check?play=true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "This video"), " shows you how to prepare the screen and mic to do just that"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "HiDPI mode\u2014also known broadly as DPI scaling, or Retina display on Macs\u2014doubles each pixel, allowing for highly readable text on very high-resolution screens. Use it if possible!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh3.googleusercontent.com/rMZ4R1qkndexRllRnPZxX1LwwlXyQ-pEd9FzJFqOLuyg-ly7ciad5X57pRjji2GhYL9CBaEpfocx3u0OQoC_2-tj1HqixMVmu3SGk0hKtp7ZCwn351_c9M4UXLXs7ECdzfLSb-K4",
      "alt": "Image courtesy of designmodo.com"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "DPI scaling on Windows"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "On Windows, we've had success boosting the code fonts to max out the screen. Aspect ratio is key here, so set your screen to the highest 16x9 resolution and kick the fonts up."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Using DPI scaling features is helpful\u2014you can scale the OS chrome and make UI more legible."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://www.eizoglobal.com/support/compatibility/dpi_scaling_settings_windows/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "This article"), " can tell you more about pixel scaling on Windows."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Access HiDPI mode on macOS"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "On Mac, you\u2019ll get the best results if you record at ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "1280x720(HiDPI) mode"), ". This resolution is achievable on 27\" monitors and Retina MBPs. It effectively gives you a visible resolution of 1280x720, but it\u2019s extremely crisp and readable on phones and tablets."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "This mode is \"hidden\" by default. You can achieve it on a Mac with a software tool that exposes the option, like the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "RDM tool"), ". On Retina MacBooks, the option works automatically. For external monitors, or non-Retina Macs, follow these instructions to enable HiDPI mode:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh5.googleusercontent.com/IzTyjUaF9aGg3L1yGjJQ_qMtL7SzlX-r_zJaF4A6iFMipGXhtFt_jJlpn16oDEj3QdTiOIOnmW6h2WIv1jO3PQrzfIxxYbloXcnncNjTFGpCre1ieaTTgMYKiRxAGFHJRH3Lst0r",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Another application that works well is ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://www.madrau.com/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "SwitchRezX")), ". It's shareware and requires a fee. If you can't use this mode, recording at normal ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "1280x720"), " or ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "2560x1440"), " are workable substitutes."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "By constraining to this small window, you can fill the screen effectively for coding screencasts. The most import thing to get correct is the aspect ratio. We don't want to present with any black bars around the screen. We want to give the user maximum code visibility at all times."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Screen and code layout"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "The code is the champion of an egghead.io screencast, so it must be comfortably readable for all learners."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Maximum space:"), " Give your code maximum horizontal space by using an 80- or 120-character \"column\" for the code and bumping the font size up to fit."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Padding:"), " Allow some padding for the top and bottom of the recording window, which could get cut off by Player Chrome. For instance, if you're recording the terminal, commands toward the bottom might not be visible. You don\u2019t want to frustrate or distract your viewers."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "3-column layout:"), " We will typically work in a 3-column layout, with the editor taking up 2/3s and a browser on the right side in the remaining 1/3 of the screen. You might prefer to flip back and forth between the browser and the editor\u2014up to you!"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh5.googleusercontent.com/yFu1UkYEzFM_zbwuf6kxZU5WuUwc_zhkaJY6uDSwk32Tega5Mj6rNukMByPiNZseZVyQgxPcRVsB07yh5R6IkiBUHnkm4mtAB9XOGJ4wt3qX0ZYcKw1kTVp0VJ-qNb9wJyctddH4",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "We prefer this 2:1 ratio of code:example. It will look something like:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh5.googleusercontent.com/uKXJLKCjIN0VsNGGKt8TmUfm_wwUrtBIJcUMYWFMWxbyN2B-zc_NvvWetSZDZ8a3oSj9fby0mwXDt26a5FNz1eC3U8ad48JaO0oiwYB8rey9DB3yJBITT0O6Y-FFSIi9cwsZk1S5",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Notice that the code's font size has been increased to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "maximize the space available.")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Place your ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "example on the right"), ", occupying 1/3rd of the screen. Consider that your example will need to fit in that space when you\u2019re creating it. Choose a simple example with a minimally responsive layout, and you\u2019ll be just fine."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "In some cases, the example is replaced by a terminal, or a terminal window shares the right column with the example. In this latter case, the terminal window would be on the bottom-right section of your screen."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Remember that your lesson viewers are here to see the code. Make it the starring feature!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "Command line prompt"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "If you will be showing your command line, we suggest using a minimal prompt to reduce distractions. This example prompt works well for screencasting:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh3.googleusercontent.com/TouVkaQl8WDHTdHxr-u8PiALhO8MVjuOm1m05dtK6k8s2BPbcNDJe6pPH7Q0YXpVBUE0gH5ykLFbYq5VXGghJ---2FrdBhnRi5iGUQSA3Cdfxa2ohb-GfOXIGrTq0S1FKOVsD1wd",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "You can use this one by updating your ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "~/.bashrc"), " or ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "~/.zshrc"), " with the following:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-built_in"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "export"), " PS1=", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-string"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "\"\n[e[32m]W\n[e[m][e[34m]\\$[e[m]\""))), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "Note: If you\u2019re on Mac and using Bash, you also need to add a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "~/.bash_profile"), " with this:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "source $HOME/.bashrc")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "This tells Mac to load your ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "~/.bashrc"), " when loading a terminal emulator."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "Now that your screen is ready to record, sound up. Time to get your audio ready."));
});

/***/ }),

/***/ "./instructor-guide/docs/04-Screencasting-tips/02-Set-up-your-audio.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/04-Screencasting-tips/02-Set-up-your-audio.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Set up your audio"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Good audio starts with quality gear. Your laptop\u2019s built-in microphone sounds decent, but we want you to sound way better than decent."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "When you become an egghead instructor, we hook you up! As soon as you have a draft lesson almost ready to publish, we\u2019ll send you a waterproof Pelican case full of professional-grade audio recording equipment. \uD83D\uDCEC"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "[Image: Case]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Here\u2019s what you\u2019ll be getting:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "K & M 23150-500-55 tabletop microphone stand with 5/8\" threaded connector and mini boom arm"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Shure BETA 87A microphone"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Shock mount to attach the mic to the stand"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Shure X2U XLR-to-USB signal adapter"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "1 XLR cable to connect the microphone to the USB interface"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Badass by Kathy Sierra (to inspire your great ideas)"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "[Image: Contents of case]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Let\u2019s go through each piece of equipment and explain how you\u2019ll use it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Microphone boom"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "[Image: Microphone boom]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "The boom is a stand for your mic. Booms can range in size and shape. (Action movies require bigger booms than egghead lessons.) This is a very nice, sturdy boom from Germany that folds down for easy storage in the case."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "The microphone"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "[Image: Microphone]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Obviously an important piece of equipment! The ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Shure BETA 87a"), " is a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://blog.shure.com/multi-pattern-microphones-what-where-and-how/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "supercardioid"), " mic, which refers to how it picks up sound: It\u2019s forgiving and blocks out ambient noise."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "You can go crazy with mics, spending a huge amount for a smidge better sound quality. You might not use this mic to record a #1 banger, but it still fits into the \"sounds very good\" column. \uD83D\uDC4D"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Positioning of the mic is important. You should be 2\u20136 inches away for optimal volume levels. For extra credit, here are loads more positioning tips:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "[Image: Microphone settings]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "(We don\u2019t really give out extra credit, but you might sound ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "slightly"), " better.)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Shock mount (right)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "[Image: Shock mount + USB audio interface]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "This little piece connects to the boom, and the microphone slides into it before being attached to the XLR cable. It will dampen any footsteps or other vibrations that might be picked up through the stand to the mic. (You\u2019ll most likely be sitting down, but who knows what your kids or roommates are up to.)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "USB audio interface (left)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "The mic we\u2019re giving you is built for professional audio applications, not necessarily for capturing audio on a computer. This interface connects the mic to your computer, and converts XLR analog signal into 1s and 0s for the computer to store. It has an XLR input (from the mic) and a USB output (to the computer)."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Note:\n\u26A1\uFE0F The 48v power button needs to be on!\n\u26A1\uFE0F Turn the gain up!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "XLR cable"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "XLR is a plug used in professional audio applications. It isn't completely necessary since the pre-amp will plug directly into the microphone, but play around and see if it makes your sound more stable."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "[Image: XLR cable]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Your final setup should look something like this:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "[Image: Finished product]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Check audio input levels"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "Once your gear is set up, you'll need to check the audio input levels to make sure your gain is set properly. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/lessons/tools-prepare-to-record-screen-resolution-and-mic-check?play=true"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "Here\u2019s a lesson to help you")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Ta-da! You\u2019re ready to record."));
});

/***/ }),

/***/ "./instructor-guide/docs/04-Screencasting-tips/03-Record-your-lesson.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/04-Screencasting-tips/03-Record-your-lesson.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Record your lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Screencasting is one of those iceberg-like tasks: 90% of the work is behind the scenes. Only 10% is visible."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch4_s3_iceberg.png",
      "alt": "iceberg"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Recording your screencast is that 10%. You\u2019ve put tons of thought and time into your lesson scope, code example, and points you want to cover. What distinguishes your success in this final stage is high-quality technical tools. (And careful editing\u2014that\u2019s next.)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Video capture"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "egghead.io instructors are provided with whatever software licenses you need. Just #ask!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "On Windows"), ", the best option for video capture and editing is ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.techsmith.com/video-editor.html"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Camtasia"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "On a Mac"), ", the best options are ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.telestream.net/screenflow/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "ScreenFlow"), " and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.techsmith.com/video-editor.html"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Camtasia"), ". Both provide editing features. We tend to prefer ScreenFlow for its standalone simplicity, as Joe Maddalone shows in the video show below, but the decision is completely yours."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.youtube.com/watch?v=3nlJ_wP9dPE&&index=5&list=PL219naRJXQKbQJ60WxsuGfTFv7_fvna51"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "https://www.youtube.com/watch?v=3nlJ_wP9dPE&&index=5&list=PL219naRJXQKbQJ60WxsuGfTFv7_fvna51")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Capturing audio"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "There are three ways to record your screencasts. Each is completely \uD83D\uDC4C"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "All at once"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Audio first, video second"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Video first, audio second"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "All at once"), " is arguably the simplest approach\u2014just type and record the screen. You don't have to think about the video and audio separately. You just have to think about them at the same time, which might be a lot to ask. Give it a try and see how it feels to you!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Audio first"), " means you play back the audio and record your video to match. The trick here is remembering what is said when, so your mouse is ready to move where it needs to."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Video first"), " means you narrate over video playback. It can be challenging to sync and get a natural feeling with narration. Like most things, it takes practice."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "For more on audio, see our guide to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#set-up-your-audio"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "audio setup"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Record one thought at a time"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "While you\u2019re recording, do your editing-self a favor: Record in short, high-quality chunks, one thought at a time."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Think of your lesson as a series of paragraphs that take 20 seconds to record. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Between each, take a pause"), ". Doing this will help you avoid intense editing to move audio and video snippets around as you build your quilt-like final product."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://media.giphy.com/media/GJycRLp6zYGFq/giphy.gif",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "When you record in chunks, you get better short takes. (You\u2019re not trying to set a record for the longest unedited take here.) By pausing between each section, you can visibly see where you need to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "#edit-your-lesson"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "ripple delete"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Need an example? Watch John Lindquist show how to record one thought at a time."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "John Lindquist - Record One Thought at a Time")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.dropbox.com/s/cyy9swbl3ga38kd/egghead-record-one-thought-at-a-time.mp4?dl=0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "https://www.dropbox.com/s/cyy9swbl3ga38kd/egghead-record-one-thought-at-a-time.mp4?dl=0")));
});

/***/ }),

/***/ "./instructor-guide/docs/04-Screencasting-tips/04-Edit-your-lesson.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/04-Screencasting-tips/04-Edit-your-lesson.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Edit your lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Editing is your lesson\u2019s critical last stop between you and your audience. It\u2019s your quality filter."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Ripple delete"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "\u26A1\uFE0FRipple delete is your greatest ally. \u26A1\uFE0F It\u2019s basically deleting the bad parts, a chunk of seconds at a time\u2014like that tangent you go on, that five-second period where you stammer over a word, and those dozens of \u201Cumm\u201Ds and \u201Clike\u201Ds you had no idea you said so often. Ripple delete couldn\u2019t be easier or more essential, and it\u2019s available in both Camtasia and Screenflow. \uD83D\uDE4C"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "In the egghead lesson shown below, John Lindquist shows how he uses ripple delete to trim a video from 7:28 to 2:17. Yes, really."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "John Lindquist - Edit with Ripple Delete")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.dropbox.com/s/a5ahcas02qtxu99/egghead-edit-with-ripple-delete.mp4?dl=0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "https://www.dropbox.com/s/a5ahcas02qtxu99/egghead-edit-with-ripple-delete.mp4?dl=0")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Editing with Premiere"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "In time, you can \uD83D\uDCA5 kick it up a notch \uD83D\uDCA5 with more sophisticated editing software like Adobe Premiere. Premiere has some significant advantages, but it also has a steep learning curve. We recommend starting simple, and leveling up to a non-linear editing system like Premiere later. If you\u2019re interested, see how some of our advanced instructors use Premiere:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "https://www.youtube.com/watch?v=_YqhKP-yZzo&index=1&list=PL219naRJXQKbQJ60WxsuGfTFv7_fvna51"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Editing with John Lindquist")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "https://www.youtube.com/watch?v=faINApx4-4g&list=PL219naRJXQKbQJ60WxsuGfTFv7_fvna51&index=2"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Going through the process with JS Leonard")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "li",
    props: {
      "href": "https://www.youtube.com/watch?v=faINApx4-4g&list=PL219naRJXQKbQJ60WxsuGfTFv7_fvna51&index=2"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Voiceover and editing with Joel Hooks")), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "The easiest way to edit is to capture it well"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "In traditional videography, \u201Cin-camera editing\u201D refers to the idea of capturing content so well, it doesn\u2019t need to be edited much at all."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "[Gif: something about perfection]")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Your first few lessons will feel like a major effort to produce because you have to consider so many different things. You\u2019re teaching complex concepts (web development) and learning complex concepts (screencasting) at the same time."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Believe us: You\u2019ll get better. And better. And better. Just keep practicing and keep recording."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Need help or advice? Please, #ask! You aren\u2019t the first person to do this or struggle at it. Your coach and the other friendly folks on Slack were all in your shoes once, and now we\u2019re here to help you succeed."));
});

/***/ }),

/***/ "./instructor-guide/docs/04-Screencasting-tips/05-Sharing-your-code.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/04-Screencasting-tips/05-Sharing-your-code.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Sharing your code"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Playing around with code is critical to becoming a better web developer."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "For every egghead lesson, we provide a concise, organized, readable code example below the lesson video in a runnable embed, using Plunker or a similar service. That way, egghead members can jump in right away."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Note: You should always record in a local environment using your favorite text editor, and then repurpose your code using Plunker or your service of choice. You do you!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Using Plunker"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Plunker allows us to embed even fairly complex apps as runnable examples, perfect for our learners to run with. There are two ways to use it:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "You\u2019ll typically use ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Plunker\u2019s public UI"), " and set up your code example there. For standalone lessons, feel free to just do this. It works great."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Plunker also supports loading your code ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "directly into the embed via Github"), ". This is an amazing feature that allows us to version control the examples presented to the user. egghead can then handle maintenance on your examples and keep them updated and supported for a much longer time. :muscle:"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Much as we love Plunker, there are cases where it just won\u2019t work. In those cases, simply link to a GitHub repository."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Link a Plunker embed to a GitHub repo"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Linking a GitHub repository to Plunker is fairly simple and involves configuring the Plunker embed url. We start with ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://embed.plnkr.co/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "https://embed.plnkr.co/"), " , which is the base embed url. To link to Github we configure the url by adding:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "`", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://embed.plnkr.co/github/%7Bprofile-name%7D/%7Brepository%7D/%7Bbranch%7D%60%60"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "https://embed.plnkr.co/github/{profile-name}/{repository}/{branch}", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, ""))), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "{branch}"), " can be replaced with ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "{tag|sha1}"), " depending on how your repo is set up. If your repo is set up with an example in individual folders, you can add that ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "/path"), " to the embed url."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/eggheadio-projects/nlp-in-javascript-with-natural"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Here\u2019s an example Github repo"), ", which is divided into one folder per lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh4.googleusercontent.com/BN85gMdmTnjYqHeoEwsHzjtXWp-ihYBBQULZI4C6tz0jmyhGGTjnkHwEOiYqTMn3w28D7bvq9Lvgixz5QdBtQM8mfs7V1vfOgYiRQIaahBfd22lcHBqEqARyqgWhzPib478Gmgz2",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Additional Plunker embed config"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "URL parameters can be added to affect how the embed presents itself. The most-used feature is showing specific files (the default being the index and preview). Add ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "?show="), " to the end of the url with the various filenames separated by commas."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-building")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "You\u2019ll see a complex example of this ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-building-an-instant-search-with-angular-2-combining-observables-with-flatmap?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "here"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "If you want to go wild, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://ggoodman.gitbooks.io/plunker/content/embed.html"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "this gist documents"), " quite a few additional parameters you can use."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Build complex apps in Plunker"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Before you go any further, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "stop!"), " You don\u2019t need to build apps in Plunker. egghead will do this for you. Just hit up @zac in Slack and we\u2019ll get to it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "...but if you\u2019re the DIY type, this is actually pretty cool."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Plunker itself doesn\u2019t support the node file system\u2014import and export statements in Plunker will not work. But it is possible to create an in-browser Typescript compiler. This is usually required for Angular lesson examples. Doing this takes a bit of set up, so hang in there!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Here\u2019s what you do."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "1)"), " Install jspm on your local machine if it isn\u2019t already. It\u2019s  an auto-configure systemjs tool:\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "$ npm i -g jspm@beta")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "2)"), " Run in whatever dir pleases you:\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "$ jspm init")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "3)"), " Select all the defaults given to you. Then run:\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "$ jspm i npm:{package_you_want_to_install}"), "\nFor instance: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "jspm i npm:data.task"), " This will give a verbose working example of the config file needed to achieve in-browser compiling."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "4)"), " After init is done, this is the barebones .html page you will need:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh3.googleusercontent.com/QfBRAe4xp95hUC9bSIhOaSanvInun0erAoUtjBQTdZ9AldfSC_-aOj-2nv1gbCf28B3MXmQK46WI0ABJCBbP8FBwjY2F-c8nmWOr79KsqIWWw5QaD2TsX4-nWEbXUGBEeJGZd1aE",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "5)"), " You then need to create an ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "app.js"), " file in the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "src"), " directory ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "src/app.js"), " . This file will contain the code you want to run. Any packages that are installed using\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "jspm i npm:{package_you_want_to_install}"), " will create a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "jspm_packages/npm/{package_you_want_to_install}@1.2.3.json"), " file."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "6)"), " \u26A1\uFE0F Copy those contents. \u26A1\uFE0F\nThe content will be placed in your ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "SystemJS.config"), " under the packages property as the package you installed. For instance:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh5.googleusercontent.com/8j8p214IkMmQBkcdc9Y8m4ctaHcRfZGMksRnYHJ3IOa0y0okvb6TE0gVjZu-8a0qL_S_XRFnayxS1ID9yEh_EYuIbum_Arlwriy9sFeIaCLiausO2wqcFmUwFnFPeLLo9V5_Y4T9",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "7)"), " Jspm will also give you a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "jspm.config.js"), " file: Copy this file, with some slight modifications."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://lh5.googleusercontent.com/Vyby8a90s6HEJspKmtAsyx6rzK_G0t1lUUtehzkc_3S-7e6QealWhI-yuSpP8IAf65BGyGOTG73BbStHeuna8SI9OmRU6xjZnEcbfqdK6xhUpiZ4AK_3gVRdRFe0AqNk32fFGDsn",
      "alt": null
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "Note that the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "\"baseURL\":"), " property was changed from ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "/"), " to a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, ".")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Also note that\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "\"systemjs-babel-build\": \"npm:systemjs-plugin-babel/systemjs-babel-browser.js"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "line was added under the"), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "map"), " property (nested in the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "devConfig"), " property)."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "8)"), " For Plunker apps, just add this script tag (in ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "index.html"), " ): ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "<scriptsrc=\"https://unpkg.com/systemjs@0.19.41/dist/system.src.js\"></script>")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "9)"), " Then the two ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, "SystemJS.config"), " objects can be added in their own script. Now you\u2019re good to go!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "Here\u2019s ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://embed.plnkr.co/UxkIoIK9PEkaupwTInDE?show=script.js,preview"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "one last example of a Plunker embed"), " to send you on your way."));
});

/***/ }),

/***/ "./instructor-guide/docs/04-Screencasting-tips/06-Host-a-demo-REST-API.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/04-Screencasting-tips/06-Host-a-demo-REST-API.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Host a demo REST API"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Want data to play around with in your next egghead lesson?"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "egghead co-founder and instructor extraordinaire John Lindquist set us up with a REST API using ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://swapi.co/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "swapi"), " (The Star Wars API) and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/johnlindquist/swapi-json-server"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "json-server"), ". As long as you don\u2019t openly endorse or promote swapi (or Star Wars), you\u2019ll have no issues with copyrights."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "If you don\u2019t have a need for any special configurations, you can spin up the server using ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/zkat/npx"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "npx"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "npx ships with the latest versions of npm, so you probably already have it installed."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "$ npx https://github.com/johnlindquist/swapi-json-server"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "// --> http://localhost:3000")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "\uD83D\uDCA5 Presto. You\u2019re now running a REST API using Star Wars data. \uD83D\uDCA5"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Build custom data for egghead lessons"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Of course, you have endless options for building a REST API."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "If your data needs to be unique for the lesson you\u2019re crafting (there\u2019s a lesson for that!), John shows us ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "how to generate a large dataset of JSON data")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "100 random people"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "If 100 random people is enough for your data set, grab this gist: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://gist.github.com/johnlindquist/3a7d28dbf231c476d62dd3f481d7b1c5"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "100 people in JSON format"), "."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Serve JSON locally"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "json-server"), " will serve any JSON file we have ready."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "$ npm i -g json-server")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "$ json-server {data.json}")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "You're good to go."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Host a REST API"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Zeit's ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://zeit.co/now"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "now"), " feature is a great way to host any application needing it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "You can use the now  command with an app John set up:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "$ npm i -g now"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "$ now https://github.com/johnlindquist/swapi-json-server")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "If this is your first time using now, there will be a small amount of setup, but overall it's a breeze."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "There\u2019s a lesson for that, too. Check out ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://egghead.io/courses/deploy-web-apps-with-zeit-now"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Deploy Web Apps with Zeit Now"), " for an in-depth look at ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "now"), ". Watch it right now!"));
});

/***/ }),

/***/ "./instructor-guide/docs/04-Screencasting-tips/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_Prepare_your_screen_for_recording_md__ = __webpack_require__("./instructor-guide/docs/04-Screencasting-tips/01-Prepare-your-screen-for-recording.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_Set_up_your_audio_md__ = __webpack_require__("./instructor-guide/docs/04-Screencasting-tips/02-Set-up-your-audio.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_Record_your_lesson_md__ = __webpack_require__("./instructor-guide/docs/04-Screencasting-tips/03-Record-your-lesson.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__04_Edit_your_lesson_md__ = __webpack_require__("./instructor-guide/docs/04-Screencasting-tips/04-Edit-your-lesson.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__05_Sharing_your_code_md__ = __webpack_require__("./instructor-guide/docs/04-Screencasting-tips/05-Sharing-your-code.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__06_Host_a_demo_REST_API_md__ = __webpack_require__("./instructor-guide/docs/04-Screencasting-tips/06-Host-a-demo-REST-API.md");






/* harmony default export */ __webpack_exports__["a"] = ([{
  component: __WEBPACK_IMPORTED_MODULE_0__01_Prepare_your_screen_for_recording_md__["a" /* default */],
  title: "Prepare Your Screen for Recording",
  slug: "prepare-your-screen-for-recording"
}, {
  component: __WEBPACK_IMPORTED_MODULE_1__02_Set_up_your_audio_md__["a" /* default */],
  title: "Set Up Your Audio",
  slug: "set-up-your-audio"
}, {
  component: __WEBPACK_IMPORTED_MODULE_2__03_Record_your_lesson_md__["a" /* default */],
  title: "Record Your Lesson",
  slug: "record-your-lesson"
}, {
  component: __WEBPACK_IMPORTED_MODULE_3__04_Edit_your_lesson_md__["a" /* default */],
  title: "Edit Your Lesson",
  slug: "edit-your-lesson"
}, {
  component: __WEBPACK_IMPORTED_MODULE_4__05_Sharing_your_code_md__["a" /* default */],
  title: "Sharing Your Code",
  slug: "sharing-your-code"
}, {
  component: __WEBPACK_IMPORTED_MODULE_5__06_Host_a_demo_REST_API_md__["a" /* default */],
  title: "Host a Demo REST API",
  slug: "host-a-demo-rest-api"
}]);

/***/ }),

/***/ "./instructor-guide/docs/05-odds-and-ends/01-egghead-on-Slack.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/05-odds-and-ends/01-egghead-on-Slack.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "egghead on Slack"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Slack is where egghead communicates."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "There\u2019s a Slack channel for almost every element of egghead. Some channels are specific to instructors and lesson creation. Some are just for fun. All are meant to keep you connected to the egghead community and help you become the best instructor you can be."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "If you ever need anything, #ask!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Your private instructor channel"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Right when you get started on egghead, we\u2019ll set up a private channel for you. Here, you can work with your coach and other top-tier instructors to nail egghead style and get your first lesson published. Feel free to ask any questions, brainstorm ideas for your first lessons and courses, and share drafts. We\u2019re here to help."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "#egghead-chat"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "This is the \"water cooler\" channel, where basically anything goes (within the general code of conduct, of course). Many egghead instructors are freelancers or work at home, so this gives us a place to socialize and talk about programming and industry stuff. It is noisy, so you might be compelled to mute this channel, but it\u2019s always here when you need it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "#egghead-instructors"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Creating bite-sized code videos is an art form. This is where we discuss it. This channel is a great place to solicit feedback from other instructors and the wider egghead team about your latest lesson ideas, course proposals, and drafts. We've got an amazing group of experienced instructors who are happy to help you. It\u2019s a great community, and you should lean on it whenever you need to."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "#egghead-publishing-queue"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "This is where egghead\u2019s publishing activity is announced by bots. When a lesson is uploaded, or a course/lesson is published, it\u2019s automatically announced in this channel. Keep an eye on it from time to time to see what\u2019s coming down the pike."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "#egghead-lesson-ideas"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "There are so many things to teach about in the world of web development. When we see something interesting or get a request, it gets dropped in here. If you can't think of anything to record a lesson about, ask in here with @joel . There\u2019s always something to teach! \uD83D\uDE42"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Etcetera"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "We've got other channels for specific topics like music & tv, fitness, functional programming, and podcasts. Surprise surprise, egghead instructors are passionate people."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Like most Slack groups, members are welcome to make public and private channels, DM with anyone, litter every channel with emoji and gifs, and even add integrations. Use your good judgment, and if you have any questions, please feel free to #ask."));
});

/***/ }),

/***/ "./instructor-guide/docs/05-odds-and-ends/02-Our-contributor-agreement.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/instructor-guide/docs/05-odds-and-ends/02-Our-contributor-agreement.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Our contributor agreement"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "/instructor-guide/illos/ch5_s1_signingcontract.png",
      "alt": "eggo_signing_contract"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "egghead has a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://docs.google.com/document/d/17jNT6R6SNb9OVYSnpTDqevMh80XZ8Gu3VeYoLZck0v4/edit"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "standard contributor agreement"), " that we provide to all instructors. The agreement protects egghead from any mischief you might cause; leaves all ownership rights to you, the creator; and lays out the terms for payment. You sign it, we sign it, we shake on it."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "We like to maintain respectful, easygoing, rewarding relationships with our contributors. This agreement allows everyone to happily work together for years on end."));
});

/***/ }),

/***/ "./instructor-guide/docs/05-odds-and-ends/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_egghead_on_Slack_md__ = __webpack_require__("./instructor-guide/docs/05-odds-and-ends/01-egghead-on-Slack.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_Our_contributor_agreement_md__ = __webpack_require__("./instructor-guide/docs/05-odds-and-ends/02-Our-contributor-agreement.md");


/* harmony default export */ __webpack_exports__["a"] = ([{
  component: __WEBPACK_IMPORTED_MODULE_0__01_egghead_on_Slack_md__["a" /* default */],
  title: "egghead on Slack",
  slug: "egghead-on-slack"
}, {
  component: __WEBPACK_IMPORTED_MODULE_1__02_Our_contributor_agreement_md__["a" /* default */],
  title: "Our Contributer Agreement",
  slug: "our-contributer-agreement"
}]);

/***/ }),

/***/ "./instructor-guide/docs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__00_What_is_egghead_md__ = __webpack_require__("./instructor-guide/docs/00-What-is-egghead.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__01_Getting_started_as_an_egghead_instructor__ = __webpack_require__("./instructor-guide/docs/01-Getting-started-as-an-egghead-instructor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__02_Creating_lessons__ = __webpack_require__("./instructor-guide/docs/02-Creating-lessons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__03_Creating_Courses__ = __webpack_require__("./instructor-guide/docs/03-Creating-Courses/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__04_Screencasting_tips__ = __webpack_require__("./instructor-guide/docs/04-Screencasting-tips/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__05_odds_and_ends__ = __webpack_require__("./instructor-guide/docs/05-odds-and-ends/index.js");






/* harmony default export */ __webpack_exports__["a"] = ([{
  title: "",
  slug: "",
  chapter: [{
    component: __WEBPACK_IMPORTED_MODULE_0__00_What_is_egghead_md__["a" /* default */],
    title: "What is egghead",
    slug: "what-is-egghead"
  }]
}, {
  title: "Getting Started",
  slug: "getting-started",
  chapter: __WEBPACK_IMPORTED_MODULE_1__01_Getting_started_as_an_egghead_instructor__["a" /* default */]
}, {
  title: "Creating Lessons",
  slug: "creating-lessons",
  chapter: __WEBPACK_IMPORTED_MODULE_2__02_Creating_lessons__["a" /* default */]
}, {
  title: "Creating Courses",
  slug: "creating-courses",
  chapter: __WEBPACK_IMPORTED_MODULE_3__03_Creating_Courses__["a" /* default */]
}, {
  title: "Screencasting Tips",
  slug: "screencasting-tips",
  chapter: __WEBPACK_IMPORTED_MODULE_4__04_Screencasting_tips__["a" /* default */]
}, {
  title: "Odds and Ends",
  slug: "odds-and-ends",
  chapter: __WEBPACK_IMPORTED_MODULE_5__05_odds_and_ends__["a" /* default */]
}]); // [
//   {
//     component: WhatIsEgghead,
//     title: "What is egghead",
//     slug: "what-is-egghead"
//   },
//   {
//     component: WhyBeAnInstructor,
//     title: "Why Be An Instructor?",
//     slug: "why-be-an-instructor"
//   }
// ]

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_memoize__ = __webpack_require__("./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
var index = Object(__WEBPACK_IMPORTED_MODULE_0__emotion_memoize__["a" /* default */])(reactPropsRegex.test.bind(reactPropsRegex));

/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdxTag = __webpack_require__("./node_modules/@mdx-js/tag/dist/mdx-tag.js");

Object.defineProperty(exports, 'MDXTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxTag).default;
  }
});

var _mdxProvider = __webpack_require__("./node_modules/@mdx-js/tag/dist/mdx-provider.js");

Object.defineProperty(exports, 'MDXProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/mdx-provider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDXComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _React$createContext = _react2.default.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var withMDXComponents = function withMDXComponents(Component) {
  return function (_ref) {
    var components = _ref.components,
        props = _objectWithoutProperties(_ref, ['components']);

    return _react2.default.createElement(
      Consumer,
      null,
      function (contextComponents) {
        return _react2.default.createElement(Component, _extends({ components: components || contextComponents }, props));
      }
    );
  };
};

exports.withMDXComponents = withMDXComponents;
var MDXProvider = function MDXProvider(_ref2) {
  var components = _ref2.components,
      children = _ref2.children;
  return _react2.default.createElement(
    Provider,
    { value: components },
    children
  );
};

MDXProvider.propTypes = {
  components: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = MDXProvider;

/***/ }),

/***/ "./node_modules/@mdx-js/tag/dist/mdx-tag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mdxProvider = __webpack_require__("./node_modules/@mdx-js/tag/dist/mdx-provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  inlineCode: 'code',
  wrapper: 'div'
};

var MDXTag = function MDXTag(props) {
  var name = props.name,
      parentName = props.parentName,
      _props$props = props.props,
      childProps = _props$props === undefined ? {} : _props$props,
      children = props.children,
      _props$components = props.components,
      components = _props$components === undefined ? {} : _props$components,
      Layout = props.Layout;

  var Component = components[parentName + '.' + name] || components[name] || defaults[name] || name;

  if (Layout) {
    return _react2.default.createElement(
      Layout,
      { components: components },
      _react2.default.createElement(
        Component,
        childProps,
        children
      )
    );
  }

  return _react2.default.createElement(
    Component,
    childProps,
    children
  );
};

exports.default = (0, _mdxProvider.withMDXComponents)(MDXTag);

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/create-emotion-styled/dist/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_is_prop_valid__ = __webpack_require__("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var channel = '__EMOTION_THEMING__';

// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

var _contextTypes;
var contextTypes = (_contextTypes = {}, _contextTypes[channel] = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object, _contextTypes);

function setTheme(theme) {
  this.setState({
    theme: theme
  });
}
var testPickPropsOnStringTag = __WEBPACK_IMPORTED_MODULE_1__emotion_is_prop_valid__["a" /* default */];
var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};
var testAlwaysTrue = function testAlwaysTrue() {
  return true;
};
var pickAssign = function pickAssign(testFn, target) {
  var i = 2;
  var length = arguments.length;

  for (; i < length; i++) {
    var source = arguments[i];

    var _key = void 0;

    for (_key in source) {
      if (testFn(_key)) {
        target[_key] = source[_key];
      }
    }
  }

  return target;
};

var warnedAboutExtractStatic = false;

function createEmotionStyled(emotion, view) {
  var _createStyled = function createStyled(tag, options) {
    if (true) {
      if (tag === undefined) {
        throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
      }
    }

    var staticClassName;
    var identifierName;
    var stableClassName;
    var shouldForwardProp;

    if (options !== undefined) {
      staticClassName = options.e;
      identifierName = options.label;
      stableClassName = options.target;
      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
        options.shouldForwardProp(propName);
      } : options.shouldForwardProp;
    }

    var isReal = tag.__emotion_real === tag;
    var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;

    if (typeof shouldForwardProp !== 'function') {
      shouldForwardProp = typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase() ? testPickPropsOnStringTag : testPickPropsOnComponent;
    }

    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (staticClassName === undefined) {
        if (args[0] == null || args[0].raw === undefined) {
          styles.push.apply(styles, args);
        } else {
          styles.push(args[0][0]);
          var len = args.length;
          var i = 1;

          for (; i < len; i++) {
            styles.push(args[i], args[0][i]);
          }
        }
      } else if ("development" !== 'production' && !warnedAboutExtractStatic) {
        console.warn('extractStatic is deprecated and will be removed in emotion@10. We recommend disabling extractStatic or using other libraries like linaria or css-literal-loader');
        warnedAboutExtractStatic = true;
      }

      var Styled =
      /*#__PURE__*/
      function (_view$Component) {
        _inheritsLoose(Styled, _view$Component);

        function Styled() {
          return _view$Component.apply(this, arguments) || this;
        }

        var _proto = Styled.prototype;

        _proto.componentWillMount = function componentWillMount() {
          if (this.context[channel] !== undefined) {
            this.unsubscribe = this.context[channel].subscribe(setTheme.bind(this));
          }
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          if (this.unsubscribe !== undefined) {
            this.context[channel].unsubscribe(this.unsubscribe);
          }
        };

        _proto.render = function render() {
          var props = this.props,
              state = this.state;
          this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
            theme: state !== null && state.theme || props.theme || {}
          });
          var className = '';
          var classInterpolations = [];

          if (props.className) {
            if (staticClassName === undefined) {
              className += emotion.getRegisteredStyles(classInterpolations, props.className);
            } else {
              className += props.className + " ";
            }
          }

          if (staticClassName === undefined) {
            className += emotion.css.apply(this, styles.concat(classInterpolations));
          } else {
            className += staticClassName;
          }

          if (stableClassName !== undefined) {
            className += " " + stableClassName;
          }

          return view.createElement(baseTag, // $FlowFixMe
          pickAssign(shouldForwardProp, {}, props, {
            className: className,
            ref: props.innerRef
          }));
        };

        return Styled;
      }(view.Component);

      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";

      if (tag.defaultProps !== undefined) {
        // $FlowFixMe
        Styled.defaultProps = tag.defaultProps;
      }

      Styled.contextTypes = contextTypes;
      Styled.__emotion_styles = styles;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_real = Styled;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if ("development" !== 'production' && stableClassName === undefined) {
            return 'NO_COMPONENT_SELECTOR';
          } // $FlowFixMe


          return "." + stableClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return _createStyled(nextTag, nextOptions !== undefined ? // $FlowFixMe
        pickAssign(testAlwaysTrue, {}, options, nextOptions) : options).apply(void 0, styles);
      };

      return Styled;
    };
  };

  if ("development" !== 'production' && typeof Proxy !== 'undefined') {
    _createStyled = new Proxy(_createStyled, {
      get: function get(target, property) {
        switch (property) {
          // react-hot-loader tries to access this stuff
          case '__proto__':
          case 'name':
          case 'prototype':
          case 'displayName':
            {
              return target[property];
            }

          default:
            {
              throw new Error("You're trying to use the styled shorthand without babel-plugin-emotion." + ("\nPlease install and setup babel-plugin-emotion or use the function call syntax(`styled('" + property + "')` instead of `styled." + property + "`)"));
            }
        }
      }
    });
  }

  return _createStyled;
}

/* harmony default export */ __webpack_exports__["a"] = (createEmotionStyled);


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _stringify = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _router = _interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link(props) {
    var _ref;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf.default)(Link)).call.apply(_ref, [this, props].concat(rest)));
    _this.linkClicked = _this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));

    _this.formatUrls(props);

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: "linkClicked",
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;
      var href = (0, _url.resolve)(pathname, this.href);

      _router.default.prefetch(href);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: "formatUrls",
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof2.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof2.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var href = this.href,
          as = this.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

exports.default = Link;
Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (0, _propTypesExact.default)({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  })
});

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$applicationCache: true,
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-emotion/dist/index.esm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["hydrate"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["injectGlobal"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_emotion_styled__ = __webpack_require__("./node_modules/create-emotion-styled/dist/index.esm.js");





var index = Object(__WEBPACK_IMPORTED_MODULE_2_create_emotion_styled__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_emotion__, __WEBPACK_IMPORTED_MODULE_0_react___default.a);

/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),

/***/ "./node_modules/react-ga/dist/react-ga.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("./node_modules/react/index.js"), __webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types")) : factory(root["react"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warn;
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().

function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testModeAPI = exports.OutboundLink = exports.plugin = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.initialize = initialize;
exports.ga = ga;
exports.set = set;
exports.send = send;
exports.pageview = pageview;
exports.modalview = modalview;
exports.timing = timing;
exports.event = event;
exports.exception = exception;
exports.outboundLink = outboundLink;

var _format2 = __webpack_require__(3);

var _format3 = _interopRequireDefault(_format2);

var _removeLeadingSlash = __webpack_require__(6);

var _removeLeadingSlash2 = _interopRequireDefault(_removeLeadingSlash);

var _trim = __webpack_require__(1);

var _trim2 = _interopRequireDefault(_trim);

var _loadGA = __webpack_require__(7);

var _loadGA2 = _interopRequireDefault(_loadGA);

var _warn = __webpack_require__(0);

var _warn2 = _interopRequireDefault(_warn);

var _log = __webpack_require__(8);

var _log2 = _interopRequireDefault(_log);

var _testModeAPI = __webpack_require__(9);

var _testModeAPI2 = _interopRequireDefault(_testModeAPI);

var _OutboundLink = __webpack_require__(10);

var _OutboundLink2 = _interopRequireDefault(_OutboundLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * React Google Analytics Module
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * @package react-ga
                                                                                                                                                                                                     * @author  Adam Lofting <adam@mozillafoundation.org>
                                                                                                                                                                                                     *          Atul Varma <atul@mozillafoundation.org>
                                                                                                                                                                                                     */

/**
 * Utilities
 */


var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _testModeAPI2.default.ga.apply(_testModeAPI2.default, arguments);
  if (!window.ga) return (0, _warn2.default)('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return (0, _format3.default)(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];
  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      (0, _warn2.default)('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(undefined, args);
    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(undefined, _toConsumableArray([name + '.' + command].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    (0, _warn2.default)('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (typeof window === 'undefined') {
      return false;
    }

    (0, _loadGA2.default)(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
        (0, _warn2.default)('All configs must be an object');
        return;
      }
      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }
  return true;
}

/**
 * ga:
 * Returns the original GA object.
 */
function ga() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(undefined, args);
    if (_debug) {
      (0, _log2.default)('called ga(\'arguments\');');
      (0, _log2.default)('with arguments: ' + JSON.stringify(args));
    }
  }

  return window.ga;
}

/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    (0, _warn2.default)('`fieldsObject` is required in .set()');
    return;
  }

  if ((typeof fieldsObject === 'undefined' ? 'undefined' : _typeof(fieldsObject)) !== 'object') {
    (0, _warn2.default)('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    (0, _warn2.default)('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    (0, _log2.default)('called ga(\'set\', fieldsObject);');
    (0, _log2.default)('with fieldsObject: ' + JSON.stringify(fieldsObject));
  }
}

/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);
  if (_debug) {
    (0, _log2.default)('called ga(\'send\', fieldObject);');
    (0, _log2.default)('with fieldObject: ' + JSON.stringify(fieldObject));
    (0, _log2.default)('with trackers: ' + JSON.stringify(trackerNames));
  }
}

/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */
function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    (0, _warn2.default)('path is required in .pageview()');
    return;
  }

  var path = (0, _trim2.default)(rawPath);
  if (path === '') {
    (0, _warn2.default)('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};
  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _extends({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      (0, _log2.default)('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';
      if (title) {
        extraLog = ' and title: ' + title;
      }
      (0, _log2.default)('with path: ' + path + extraLog);
    }
  }
}

/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    (0, _warn2.default)('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = (0, _removeLeadingSlash2.default)((0, _trim2.default)(rawModalName));

  if (modalName === '') {
    (0, _warn2.default)('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = '/modal/' + modalName;
    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      (0, _log2.default)('called ga(\'send\', \'pageview\', path);');
      (0, _log2.default)('with path: ' + path);
    }
  }
}

/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments[1];

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      (0, _warn2.default)('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    }

    // Required Fields
    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}

/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var trackerNames = arguments[1];

  var category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ['category', 'action', 'label', 'value', 'nonInteraction', 'transport']);

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      (0, _warn2.default)('args.category AND args.action are required in event()');
      return;
    }

    // Required Fields
    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    };

    // Optional Fields
    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        (0, _warn2.default)('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        (0, _warn2.default)('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        (0, _warn2.default)('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          (0, _warn2.default)('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });

    // Send to GA
    send(fieldObject, trackerNames);
  }
}

/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */
function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    };

    // Optional Fields
    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        (0, _warn2.default)('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    }

    // Send to GA
    send(fieldObject, trackerNames);
  }
}

var plugin = exports.plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        (0, _warn2.default)('`name` is required in .require()');
        return;
      }

      var name = (0, _trim2.default)(rawName);
      if (name === '') {
        (0, _warn2.default)('`name` cannot be an empty string in .require()');
        return;
      }

      // Optional Fields
      if (options) {
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
          (0, _warn2.default)('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          (0, _warn2.default)('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          (0, _log2.default)('called ga(\'require\', \'' + name + '\', ' + JSON.stringify(options));
        }
      } else {
        ga('require', name);

        if (_debug) {
          (0, _log2.default)('called ga(\'require\', \'' + name + '\');');
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload = void 0;
    var actionType = void 0;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        (0, _warn2.default)('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        (0, _warn2.default)('Expected `action` arg to be a String.');
      } else {
        var command = pluginName + ':' + action;
        payload = payload || null;
        if (actionType && payload) {
          ga(command, actionType, payload);
          if (_debug) {
            (0, _log2.default)('called ga(\'' + command + '\');');
            (0, _log2.default)('actionType: "' + actionType + '" with payload: ' + JSON.stringify(payload));
          }
        } else if (payload) {
          ga(command, payload);
          if (_debug) {
            (0, _log2.default)('called ga(\'' + command + '\');');
            (0, _log2.default)('with payload: ' + JSON.stringify(payload));
          }
        } else {
          ga(command);
          if (_debug) {
            (0, _log2.default)('called ga(\'' + command + '\');');
          }
        }
      }
    }
  }
};

/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */
function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    (0, _warn2.default)('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      (0, _warn2.default)('args.label is required in outboundLink()');
      return;
    }

    // Required Fields
    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };

    var safetyCallbackCalled = false;
    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;

      hitCallback();
    };

    // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data

    // register safety net timeout:
    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);
      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA;

    // Send to GA
    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}

_OutboundLink2.default.origTrackLink = _OutboundLink2.default.trackLink;
_OutboundLink2.default.trackLink = outboundLink;
var OutboundLink = exports.OutboundLink = _OutboundLink2.default;
var testModeAPI = exports.testModeAPI = _testModeAPI2.default;

exports.default = {
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  OutboundLink: OutboundLink,
  testModeAPI: _testModeAPI2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

var _mightBeEmail = __webpack_require__(4);

var _mightBeEmail2 = _interopRequireDefault(_mightBeEmail);

var _toTitleCase = __webpack_require__(5);

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _warn = __webpack_require__(0);

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redacted = 'REDACTED (Potential Email Address)';

function format(s, titleCase) {
  if ((0, _mightBeEmail2.default)(s)) {
    (0, _warn2.default)('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return (0, _toTitleCase2.default)(s);
  }

  return s;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mightBeEmail;
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return (/[^@]+@[^@]+/.test(s)
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toTitleCase;

var _trim = __webpack_require__(1);

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i; /**
                                                                                                * To Title Case 2.1 - http://individed.com/code/to-title-case/
                                                                                                * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
                                                                                                * https://github.com/gouch/to-title-case
                                                                                                */

function toTitleCase(string) {
  return (0, _trim2.default)(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeLeadingSlash;
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/
  /* eslint-disable */
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', options && options.gaAddress ? options.gaAddress : 'https://www.google-analytics.com/analytics.js', 'ga');
  /* eslint-enable */
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var gaCalls = exports.gaCalls = [];

exports.default = {
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push([].concat(args));
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warn = __webpack_require__(0);

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink = function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OutboundLink.__proto__ || Object.getPrototypeOf(OutboundLink)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick;

      var eventMeta = { label: eventLabel };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        });
      } else {
        OutboundLink.trackLink(eventMeta, function () {});
      }

      if (onClick) {
        onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OutboundLink, [{
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props, {
        href: this.props.to,
        onClick: this.handleClick
      });
      delete props.eventLabel;
      return _react2.default.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(_react.Component);

OutboundLink.propTypes = {
  eventLabel: _propTypes2.default.string.isRequired,
  target: _propTypes2.default.string,
  to: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
OutboundLink.defaultProps = {
  target: null,
  to: null,
  onClick: null
};

OutboundLink.trackLink = function () {
  (0, _warn2.default)('ga tracking not enabled');
};

exports.default = OutboundLink;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/react-scrollspy/lib/Scrollspy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _throttle = __webpack_require__("./node_modules/react-scrollspy/lib/throttle.js");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEqualArray(a, b) {
  return a.length === b.length && a.every(function (item, index) {
    return item === b[index];
  });
}

var Scrollspy = function (_React$Component) {
  (0, _inherits3.default)(Scrollspy, _React$Component);
  (0, _createClass3.default)(Scrollspy, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        items: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
        currentClassName: _propTypes2.default.string.isRequired,
        scrolledPastClassName: _propTypes2.default.string,
        style: _propTypes2.default.object,
        componentTag: _propTypes2.default.string,
        offset: _propTypes2.default.number,
        rootEl: _propTypes2.default.string,
        onUpdate: _propTypes2.default.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        items: [],
        currentClassName: '',
        style: {},
        componentTag: 'ul',
        offset: 0,
        onUpdate: function onUpdate() {}
      };
    }
  }]);

  function Scrollspy(props) {
    (0, _classCallCheck3.default)(this, Scrollspy);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Scrollspy.__proto__ || (0, _getPrototypeOf2.default)(Scrollspy)).call(this, props));

    _this.state = {
      targetItems: [],
      inViewState: [],
      isScrolledPast: []

      // manually bind as ES6 does not apply this
      // auto binding as React.createClass does
    };_this._handleSpy = _this._handleSpy.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Scrollspy, [{
    key: '_initSpyTarget',
    value: function _initSpyTarget(items) {
      var targetItems = items.map(function (item) {

        return document.getElementById(item);
      });

      return targetItems;
    }

    // https://github.com/makotot/react-scrollspy/pull/45

  }, {
    key: '_fillArray',
    value: function _fillArray(array, val) {
      var newArray = [];

      for (var i = 0, max = array.length; i < max; i++) {
        newArray[i] = val;
      }

      return newArray;
    }
  }, {
    key: '_isScrolled',
    value: function _isScrolled() {
      return this._getScrollDimension().scrollTop > 0;
    }
  }, {
    key: '_getScrollDimension',
    value: function _getScrollDimension() {
      var doc = document;
      var rootEl = this.props.rootEl;

      var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
      var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;

      return {
        scrollTop: scrollTop,
        scrollHeight: scrollHeight
      };
    }
  }, {
    key: '_getElemsViewState',
    value: function _getElemsViewState(targets) {
      var elemsInView = [];
      var elemsOutView = [];
      var viewStatusList = [];

      var targetItems = targets ? targets : this.state.targetItems;

      var hasInViewAlready = false;

      for (var i = 0, max = targetItems.length; i < max; i++) {
        var currentContent = targetItems[i];
        var isInView = hasInViewAlready ? false : this._isInView(currentContent);

        if (isInView) {
          hasInViewAlready = true;
          elemsInView.push(currentContent);
        } else {
          elemsOutView.push(currentContent);
        }

        var isLastItem = i === max - 1;
        var isScrolled = this._isScrolled();

        // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769
        var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

        if (isLastShortItemAtBottom) {
          elemsOutView.pop();
          elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray3.default)(elemsInView));
          elemsInView = [currentContent];
          viewStatusList = this._fillArray(viewStatusList, false);
          isInView = true;
        }

        viewStatusList.push(isInView);
      }

      return {
        inView: elemsInView,
        outView: elemsOutView,
        viewStatusList: viewStatusList,
        scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
      };
    }
  }, {
    key: '_isInView',
    value: function _isInView(el) {
      if (!el) {
        return false;
      }

      var _props = this.props,
          rootEl = _props.rootEl,
          offset = _props.offset;

      var rootRect = void 0;

      if (rootEl) {
        rootRect = document.querySelector(rootEl).getBoundingClientRect();
      }

      var rect = el.getBoundingClientRect();
      var winH = rootEl ? rootRect.height : window.innerHeight;

      var _getScrollDimension2 = this._getScrollDimension(),
          scrollTop = _getScrollDimension2.scrollTop;

      var scrollBottom = scrollTop + winH;
      var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
      var elBottom = elTop + el.offsetHeight;

      return elTop < scrollBottom && elBottom > scrollTop;
    }
  }, {
    key: '_isAtBottom',
    value: function _isAtBottom() {
      var rootEl = this.props.rootEl;

      var _getScrollDimension3 = this._getScrollDimension(),
          scrollTop = _getScrollDimension3.scrollTop,
          scrollHeight = _getScrollDimension3.scrollHeight;

      var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
      var scrolledToBottom = scrollTop + winH >= scrollHeight;

      return scrolledToBottom;
    }
  }, {
    key: '_getScrolledPast',
    value: function _getScrolledPast(viewStatusList) {
      if (!viewStatusList.some(function (item) {
        return item;
      })) {
        return viewStatusList;
      }

      var hasFoundInView = false;

      var scrolledPastItems = viewStatusList.map(function (item) {
        if (item && !hasFoundInView) {
          hasFoundInView = true;

          return false;
        }

        return !hasFoundInView;
      });

      return scrolledPastItems;
    }
  }, {
    key: '_spy',
    value: function _spy(targets) {
      var _this2 = this;

      var elemensViewState = this._getElemsViewState(targets);
      var currentStatuses = this.state.inViewState;

      this.setState({
        inViewState: elemensViewState.viewStatusList,
        isScrolledPast: elemensViewState.scrolledPast
      }, function () {
        _this2._update(currentStatuses);
      });
    }
  }, {
    key: '_update',
    value: function _update(prevStatuses) {
      if (isEqualArray(this.state.inViewState, prevStatuses)) {
        return;
      }

      this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
    }
  }, {
    key: '_handleSpy',
    value: function _handleSpy() {
      (0, _throttle2.default)(this._spy(), 100);
    }
  }, {
    key: '_initFromProps',
    value: function _initFromProps() {
      var targetItems = this._initSpyTarget(this.props.items);

      this.setState({
        targetItems: targetItems
      });

      this._spy(targetItems);
    }
  }, {
    key: 'offEvent',
    value: function offEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;

      el.removeEventListener('scroll', this._handleSpy);
    }
  }, {
    key: 'onEvent',
    value: function onEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;

      el.addEventListener('scroll', this._handleSpy);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._initFromProps();
      this.onEvent();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.offEvent();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this._initFromProps();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var Tag = this.props.componentTag;
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          scrolledPastClassName = _props2.scrolledPastClassName,
          style = _props2.style;

      var counter = 0;
      var items = _react2.default.Children.map(children, function (child, idx) {
        var _classNames;

        if (!child) {
          return null;
        }

        var ChildTag = child.type;
        var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
        var childClass = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, '' + child.props.className, child.props.className), (0, _defineProperty3.default)(_classNames, '' + _this3.props.currentClassName, _this3.state.inViewState[idx]), (0, _defineProperty3.default)(_classNames, '' + _this3.props.scrolledPastClassName, isScrolledPast), _classNames));

        return _react2.default.createElement(
          ChildTag,
          (0, _extends3.default)({}, child.props, { className: childClass, key: counter++ }),
          child.props.children
        );
      });

      var itemClass = (0, _classnames2.default)((0, _defineProperty3.default)({}, '' + className, className));

      return _react2.default.createElement(
        Tag,
        { className: itemClass, style: style },
        items
      );
    }
  }]);
  return Scrollspy;
}(_react2.default.Component);

exports.default = Scrollspy;

/***/ }),

/***/ "./node_modules/react-scrollspy/lib/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var throttle = function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var last = void 0;
  var timer = void 0;

  return function () {
    var now = +new Date();
    var timePassed = !!last && now < last + threshold;

    if (timePassed) {
      clearTimeout(timer);

      timer = setTimeout(function () {
        last = now;
        fn();
      }, threshold);
    } else {
      last = now;
      fn();
    }
  };
};

exports.default = throttle;

/***/ }),

/***/ "./pages/reviewers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dist_lib_utils__ = __webpack_require__("./node_modules/next/dist/lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dist_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_dist_lib_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Eggo__ = __webpack_require__("./components/Eggo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_InstructorGuide__ = __webpack_require__("./components/InstructorGuide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_GlobalStyles__ = __webpack_require__("./components/GlobalStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Colors__ = __webpack_require__("./components/Colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CodeStyles__ = __webpack_require__("./components/CodeStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ToC__ = __webpack_require__("./components/ToC.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Breakpoints__ = __webpack_require__("./components/Breakpoints.js");
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/pages/reviewers.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var ReactGA;

if (process.browser) {
  ReactGA = __webpack_require__("./node_modules/react-ga/dist/react-ga.js"); // eslint-disable-line global-require
}

if (typeof window !== 'undefined') {
  Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["b" /* hydrate */])(window.__NEXT_DATA__.ids);
}

Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["c" /* injectGlobal */])(__WEBPACK_IMPORTED_MODULE_7__components_GlobalStyles__["a" /* default */], " ", __WEBPACK_IMPORTED_MODULE_9__components_CodeStyles__["a" /* default */]);

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    if (process.browser) {
      ReactGA.initialize('UA-36512724-5');
    }

    _this.state = {
      isToggleOn: true,
      isDesktop: false // This binding is necessary to make `this` work in the callback

    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.updatePredicate = _this.updatePredicate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = window.location.pathname;
      ReactGA.set({
        page: page
      });
      ReactGA.pageview(page);
      this.updatePredicate();
      window.addEventListener('resize', this.updatePredicate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updatePredicate);
    }
  }, {
    key: "updatePredicate",
    value: function updatePredicate() {
      this.setState({
        isDesktop: window.innerWidth > 768
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (prevState) {
        return {
          isToggleOn: !prevState.isToggleOn
        };
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState(function (prevState) {
        return {
          isToggleOn: true
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isDesktop = this.state.isDesktop;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "How to egghead \u2014 Instructor 101 Guide"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/static/safari-pinned-tab.svg",
        color: "#5bbad5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "IIrF63zU-1tJ9wTakA176fZd_hNrbW1QD_5oticuUv0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "Learn how to egghead like a pro.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#da532c",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "msapplication-config",
        content: "/static/browserconfig.xml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:image",
        content: "/static/og-image.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:image:width",
        content: "279",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:image:height",
        content: "279",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:title",
        content: "Learn how to egghead like a pro.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:description",
        content: "Instructor 101 Guide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:url",
        content: "https://learnreduxwithdanabramov.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start;", __WEBPACK_IMPORTED_MODULE_11__components_Breakpoints__["a" /* mq */].large(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("flex-direction:row;")), ";"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("z-index:9999;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("z-index:1000;transition:all 500ms cubic-bezier(0.785,0.135,0.15,0.86);"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("z-index:1000;transition:all 500ms cubic-bezier(0.785,0.135,0.15,0.86);", this.state.isToggleOn ? "\n              position: absolute;\n              left: -320px;\n              " : "\n              position: absolute;\n              left: 0px;\n              ", ";"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ToC__["a" /* default */], {
        Instructor: true,
        Expanded: this.state.isToggleOn && true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.handleClick,
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])(__WEBPACK_IMPORTED_MODULE_11__components_Breakpoints__["a" /* mq */].large(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("background-color:white;")), ";background-color:white;:hover{background-color:#F0F0F0;}cursor:pointer;position:fixed;z-index:1000;width:40px;height:40px;display:flex;padding-top:3px;justify-content:center;align-items:center;background:white;border:0;left:0;outline:transparent;transition:all 500ms cubic-bezier(0.785,0.135,0.15,0.86);margin-top:1rem;", __WEBPACK_IMPORTED_MODULE_11__components_Breakpoints__["a" /* mq */].medium(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])(this.state.isToggleOn ? "margin-left: 1rem;" : "margin-left: 280px;", ";")), " ", this.state.isToggleOn ? "margin-left: 1rem;" : "margin-left: 230px;", " ", this.state.isToggleOn ? "\n                border: 1px solid #eee;\n                ::before {\n                  content: '';\n                  position: absolute;\n                  width: 20px;\n                  height: 1px;\n                  margin-top: -5px;\n                  background: #747474;\n                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n                }\n                ::after {\n                  content: '';\n                  position: absolute;\n                  width: 20px;\n                  height: 1px;\n                  margin-top: 5px;\n                  background: #747474;\n                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n                }\n                " : "\n                border: 1px solid #fafafa;\n                ::before {\n                  content: '';\n                  position: absolute;\n                  width: 15px;\n                  height: 1px;\n                 \n                  background: #747474;\n                  transform: rotate(-180deg);\n                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n                }\n                ::after {\n                  content: '';\n                  position: absolute;\n                  width: 15px;\n                  height: 1px;\n                  \n                  background: #747474;\n                  transform: rotate(180deg);\n                  transition: all 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n                }\n                "),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;justify-content:center;align-items:center;transition:all 500ms cubic-bezier(0.785,0.135,0.15,0.86);", __WEBPACK_IMPORTED_MODULE_11__components_Breakpoints__["a" /* mq */].large(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])(this.state.isToggleOn ? "width: 100vw;" : "width: 100vw;", ";")), ";"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("h1{color:", __WEBPACK_IMPORTED_MODULE_8__components_Colors__["a" /* Color */].instructorPrimary, ";font-weight:500;}white-space:nowrap;", __WEBPACK_IMPORTED_MODULE_11__components_Breakpoints__["a" /* mq */].medium(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:3rem 2rem;flex-direction:column;text-align:center;margin-bottom:5rem;")), ";", __WEBPACK_IMPORTED_MODULE_11__components_Breakpoints__["a" /* mq */].large(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:5rem 3rem;margin-bottom:5rem;flex-direction:row;justify-content:space-between;text-align:left;")), ";margin-bottom:3rem;text-align:center;display:flex;padding:6rem 0 3rem 0;flex-direction:column;align-items:center;justify-content:center;position:relative;z-index:999;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("margin:0;padding:0;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, "Instructor 101 Guide")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "../static/eggoInstructor.png",
        alt: "How to egghead - 101 Instructor Guide",
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])(__WEBPACK_IMPORTED_MODULE_11__components_Breakpoints__["a" /* mq */].medium(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("max-width:45%;")), ";max-width:70%;height:auto;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_InstructorGuide__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      })))));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/reviewers")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reviewer-guide/docs/00-Introduction.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/reviewer-guide/docs/00-Introduction.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Overview"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "egghead.io content must be constantly reviewed to ensure that it is up to date so that members are delivered learning materials that help them meet their personal and professional goals."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "To accomplish this, humans must watch the lesson videos, follow the instructions, and make the code work. Often the content in the video will become out of date because of the nature of software. New versions are released constantly. In addition to video content, we provide and maintain text based code content with the lessons. Unlike the videos, this code content can be updated and maintained by a lesson reviewer."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Standard operating procedures:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ol",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Watch the lesson video."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Review the lesson code for consistency with the video."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Update the lesson code to latest versions of the main libraries/tools that are central to the lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Note any major differences (add code comments as required)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "If discrepancies are major, seek a second opinion."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "If issues can\u2019t be salvaged, add a warning on the lesson (errata) and notify review team lead for next steps."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "For a detailed description of what you need to do click this link \u2014> +Review egghead.io Content "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Build Strong Context"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "In addition to these steps, we want to ensure that the lessons have strong titles, meaningful tags associated with them, have a transcript, and maintain the software versions presented to the user."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "We want the support copy (titles and description) to add context to the lesson so that the lesson can stay laser focused on a single topic. The ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://instructor.egghead.io/guide/02-Creating-Lessons/04-what-should-I-teach.html#clearly-summarize-the-lessons"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "egghead.io instructor guide"), " defines exactly what we want from a description. The guide in general is great for understanding what we want from lessons. "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Review Documents"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "When the review is complete, notes should be compiled into a lesson review report including any links to updated code and recommendations. When these notes have been reviewed and approved, the lesson will be updated accordingly."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "A large portion of the content on egghead.io is in courses. Courses consist of a series of individual lessons, so for the most part, reviewing a course is a repetition of the steps above for the individual lessons. As with individual lesson review, a course review will produce a report that will be shared with the review team lead for feedback before implementing any changes."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "An example template can be found here: +Review Template "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Tools for Reviewing"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "While specific knowledge of the frameworks and libraries being taught on egghead isn\u2019t required, a working knowledge of basic programming concepts is required. The majority of our lessons are aimed at JavaScript developers, and we don\u2019t cater to beginners. "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "We utilize git extensively, so a working knowledge of the tool is required. Generally speaking we will use Github. Git is used to maintain transcripts and lesson code."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "We also use several \u201Clive\u201D code tools. Plunker is the primary tool we use for the purpose of displaying working code examples in the browser."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "For help installing the various tools involved in the review process you can follow +Prerequisites to Content Excellence "));
});

/***/ }),

/***/ "./reviewer-guide/docs/01-Review/00-review-101.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/reviewer-guide/docs/01-Review/00-review-101.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Review 101"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Video training content goes stale. egghead.io should be as up to date as possible when it comes to content. Because of the nature of video we need to monitor each lesson on multiple levels."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Lesson Video"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "An excellent coding screencast will focus on core concepts and have the ability to remain \u201Cevergreen\u201D through minor revisions of the library that it is demonstrating. We need to continue to monitor this to make sure that it is the case."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "When differences exist we can take several courses of action:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "update the code sample and use comments in the code to notify the user that it has changed from the video"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Annotate the lesson\u2019s page to tell the student what is wrong with the lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Replace the lesson video/code with an updated version"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "mark the lesson as obsolete/deprecated"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "record a new version (vs replacement)"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Identify Change(s) in a Framework or Library"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "JavaScript frameworks are constantly changing and updating. A lot of the time this is not an issue for our lessons. Patch updates to software shouldn't break existing code."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "However, when ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Major"), " or ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Minor"), " changes occur in a framework this can cause previous versions of the software to break. "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "You need to identify these ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Breaking Changes"), " and keep them in mind when watching the video."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Each framework or library will have a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "CHANGELOG.md"), " that will record the changes of that specific framework. (", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/facebook/react/blob/master/CHANGELOG.md"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "link to example"), ") Usually found on the respective frameworks github page."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Most frameworks use Semantic Versioning (", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "http://semver.org/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "semver"), ") to keep track of updates. We are mostly interested in ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Major"), " and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Minor")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Under each new version, there will be a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Breaking Changes"), " section that is where you will see what exactly will break any lesson examples that egghead might have."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "New features are also tracked in a frameworks ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "CHANGELOG.md"), " and should be noted down for possible lesson ideas in the future."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Update Lesson Code Sample"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "This is the most common action taken by the reviewer. The lesson code sample should reflect the current version(s) for the libraries it is demonstrating (libraries are updated often!). The sample code can correct for minor differences in the code demonstrated in the lesson video, noting with comments when this has been done."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Annotate the lesson page"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "When there is some significant breaking difference in the lesson video and code sample, we can create a notification to be displayed prominently on the lesson page. This notification comes in the form of an ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "errata"), " which is shown below:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/01-title-lessons/00-errata-example.png",
      "alt": "Errata Example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Replace the lesson video/code"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "If the lesson still has significant value conceptually, we can re-record the lesson and produce an updated code sample. We want to do this for popular lessons and maintain our SEO."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Make a note of why you think the lesson needs to be re-recorded in the review document."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Mark as obsolete"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Like Annotation above, but ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "more deadly"), "! :skull:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Record a new lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Sometimes we will want to record a new lesson that presents the underlying concept with the updated version instead of replacing it in-place"));
});

/***/ }),

/***/ "./reviewer-guide/docs/01-Review/01-title-lessons.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/reviewer-guide/docs/01-Review/01-title-lessons.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Title a egghead.io lesson"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "[How Do I\u2026]", " Standard"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "The title of the video needs to reflect the question that is answered in the video.  Finishing the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "How do I\u2026"), " question is a great way to accomplish this and is the standard for our lessons."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "This is a standard that we have adopted recently so many of our older lessons and courses do not have this standard applied and need to be updated accordingly."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Another way to think about the title of a video is that it is the summary of the description (of the video). If the summary answers the question the title proposes, you are on the right track."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "90 character limit")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Search Engine Optimization (SEO)"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Our titles are also one of the main resources we use for exposing our content to the internet. We want to include the technology that the lesson is covering in the title."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Here's a list of lesson title examples and how we updated the titles to our new standard."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Old Title"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Filters"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Observables are almost like Functions"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Creation operator: of()"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Understand Elm\u2019s Bool Type"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Updated Title"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Filter Input in AngularJS"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Return Multiple Values with Observables in RxJS"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Deliver Synchronous Values with the RxJS of() Operator"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Pattern Match Expressions with Elm\u2019s Boolean Type"), "\n"));
});

/***/ }),

/***/ "./reviewer-guide/docs/01-Review/02-review-template.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/reviewer-guide/docs/01-Review/02-review-template.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Review Template"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Review Author:\nDate of Review:\nTranscripts Enhanced? (Y / N):\nLink to Course:\n")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Course Notes:\n")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Breaking Changes Between Video and Latest Version:\n")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Ideas for Potential Lessons:\n")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h4",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Lesson Title \u2192 Updated Title"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, " Notes:\n Summary:\n Updated Description:\n Link to Plunker:\n Changes Made in Code:\n")));
});

/***/ }),

/***/ "./reviewer-guide/docs/01-Review/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__00_review_101_md__ = __webpack_require__("./reviewer-guide/docs/01-Review/00-review-101.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__01_title_lessons_md__ = __webpack_require__("./reviewer-guide/docs/01-Review/01-title-lessons.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__02_review_template_md__ = __webpack_require__("./reviewer-guide/docs/01-Review/02-review-template.md");



/* harmony default export */ __webpack_exports__["a"] = ([{
  component: __WEBPACK_IMPORTED_MODULE_0__00_review_101_md__["a" /* default */],
  title: "Review 101",
  slug: "review-101"
}, {
  component: __WEBPACK_IMPORTED_MODULE_1__01_title_lessons_md__["a" /* default */],
  title: "Title Lessons",
  slug: "title-lessons"
}, {
  component: __WEBPACK_IMPORTED_MODULE_2__02_review_template_md__["a" /* default */],
  title: "Review Template",
  slug: "review-template"
}]);

/***/ }),

/***/ "./reviewer-guide/docs/02-Update-Code/00-set-up-github.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/reviewer-guide/docs/02-Update-Code/00-set-up-github.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Set Up the Existing Github Repo Locally"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "*These steps require a working knowledge of git and interacting with github, if you need a tutorial watch: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "em",
    props: {
      "href": "https://egghead.io/courses/practical-git-for-everyday-professional-use"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Practical Git for Everyday Professional Use"))), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "You'll need to locate the lesson code on the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/eggheadio-projects"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "eggheadio-projects"), " in github. This can be done using the url ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "slug"), " found on the course page of a given course:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/00-find-course-url-slug.png",
      "alt": "course url slug"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Copy the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "slug"), " into the github search bar to find the corresponding repository."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/00-find-corresponding-repository.png",
      "alt": "corresponding repository"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Navigate into the repository and get the link to clone the repository."), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/00-copy-link-to-clone-repo.png",
      "alt": "corresponding repository"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Navigate to your terminal"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Create a directory where the egghead repositories can live (e.g. a folder on your Desktop)."), "\n"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Run:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    props: {
      "className": "hljs language-bash"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "$ git ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "span",
    components: components,
    parentName: "code",
    props: {
      "className": "hljs-built_in"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "clone"), " link-you-copied-from-github")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Now you are finally ready to update the code example."));
});

/***/ }),

/***/ "./reviewer-guide/docs/02-Update-Code/01-update-plunker.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/reviewer-guide/docs/02-Update-Code/01-update-plunker.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Update Plunker"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "If you're here, you've determined that the lesson code in the current video you are reviewing needs to be updated."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Note which lesson this is in the Review Document but go ahead and update the example."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Our plunker examples load through github. This means we will need to check that the updated code will work in plunker then update the code found in github."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Update the Code"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "The code examples are found underneath the video discription in the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "code"), " tab of the lesson\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/01-plunker-code-example.png",
      "alt": "Code Example"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Step 1"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/01-navigate-to-index.png",
      "alt": "Navigate to index.html"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Step 2"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/01-note-version.png",
      "alt": "Note the version"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "In step 2 you\u2019re also going to note the name of the framework, which is found right after the version number. Copy it but leave off the extension. So copy rxjs but leave of the .js in our case."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Step 3")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/01-use-unpkg.png",
      "alt": "Navigate to unkpg"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "You\u2019ll then type in your search bar ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "unpkg.com/"), " then you\u2019ll paste in the framework you just copied, you\u2019ll then type in a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "/"), " and hit enter."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Step 4"), " "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/01-Click-the-framework+js-link.png",
      "alt": "click the framework + JS link"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Note that the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "bundle"), " file will often be named ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "umd"), " or ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "dist"), " but should contain the correct file regardless."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Step 5")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/01-test-functionality-plnkr.gif",
      "alt": "Test the functionality of the app"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Step 6"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/01-update-the-cdn-plnkr.gif",
      "alt": "Replace the cdn"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Final Step")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/01-verify-the-app-works-plnkr.gif",
      "alt": "Verify the app works"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })));
});

/***/ }),

/***/ "./reviewer-guide/docs/02-Update-Code/02-build-plnkr-embed-link.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/reviewer-guide/docs/02-Update-Code/02-build-plnkr-embed-link.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Linking to Plunker"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Plunker has a public UI, but we primary use its embeds. The first is the typical approach, where you use the public UI and setup your example code there. This is very functional, and will work just fine. This has been done for some stand-alone lessons on eggheadio."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Plunker also supports loading the code for examples directly into the embed via Github \uD83D\uDE33 This is an amazing feature as it allows us to version control the examples that are presented to the user. This means that we (egghead) can handle maintenance on the code examples and keep them updated and supported for a much longer time. This is critical for course content!"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Link a Plunker embed to a Github repo"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Linking a Github repository to plunker is fairly simple and involves configuring the plunker embed url. We start with ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "https://embed.plnkr.co/"), ", which is the base embed url. To link to Github we configure the url by adding:"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "https://embed.plnkr.co/github/{profile-name}/{repository}/{branch} \n")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Note:"), " We have to load our embeds through ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "https"), " (instead of ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "http"), ") or the embed won't load on egghead."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "{branch} can be replaced with {tag|sha1} depending on how your repo is set up. If your repo is set up with an example in individual folders, you can add that /path to the embed url."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://github.com/eggheadio-projects/nlp-in-javascript-with-natural"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Click here to see an example repo"), ". This is divided into a folder per lesson."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Additional Plunker embed config"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "URL parameters can be added to affect how the embed presents itself. The most used feature is showing specific files (the default being the index and preview). Add ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "?show="), " to the end of the url with the various filenames separated via commas."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-building-an-instant-search-with-angular-2-combining-observables-with-flatmap?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview\n")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Notice the additional parameters appended to the end of the link."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "pre",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "code",
    components: components,
    parentName: "pre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview\n")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "?preview=plnkr.html"), " allows us to set the preview panel to display the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "plnkr.hmtl"), " page that we made instead of ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "index.html"), " which would be the default case."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "&show=src%2Fapp%2Fapp.component.ts,preview"), " tells plunker to show the file ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "src/app/app.component.ts"), " as well as run the code in the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "inlineCode",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "preview"), " pane."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "We specify which file we want shown to the viewer on load as often times the instructors will work on a single."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "An complex example of this is shown ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://embed.plnkr.co/github/eggheadio-projects/egghead-wikipedia-demo/angular-2-building-an-instant-search-with-angular-2-combining-observables-with-flatmap?preview=plnkr.html&show=src%2Fapp%2Fapp.component.ts,preview"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "here"), ". There are quite a few additional parameters that can be used which are all documented in this ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://ggoodman.gitbooks.io/plunker/content/embed.html"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "gist"), "."));
});

/***/ }),

/***/ "./reviewer-guide/docs/02-Update-Code/03-update-jsbin.md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__("./node_modules/@mdx-js/tag/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/reviewer-guide/docs/02-Update-Code/03-update-jsbin.md";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var components = _ref.components;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Update a JSBin Code Example"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "The new standard for our code examples is to use plunker. If you are here, that means you found a rogue lesson that is still using JSBin."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Note which lesson this is in the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Review Document"), " but go ahead and update the example."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "This process requires that you are logged in with eggheadio JSBin credentials. If you don't already have this, request it. \uD83D\uDE04"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Watch the Video"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "First thing\u2019s first, you have to watch the egghead video that you are tasked with reviewing."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-watch-the-video.png",
      "alt": "Watch the video"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "There are a few things you need to keep in mind while you watch the video"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "ol",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Pay attention to the code in the video, does it match the example code down bellow? "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Pay attention to how the resulting app works at the end of the video"), "\n"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "After watching the video and keeping these things in mind you are next going to check out the example code below the video."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-example-code.png",
      "alt": "Example Code"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "First you\u2019re going to update the example code to the latest version of the framework used."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Let\u2019s see how this is done."), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Update JS Bin"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Step 1")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-switch-to-html-tab.png",
      "alt": "Switch to HTML tab"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Step 2")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-locate-script-tags.png",
      "alt": "Switch to HTML tab"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "In step 2 you\u2019re also going to note the name of the framework, which is found right after the version number. Copy it but leave off the extension. So copy angular but leave of the .js in our case. "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Step 3")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-use-unpkg.png",
      "alt": "Navigate to unkpg"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "You\u2019ll then type in your search bar unpkg.com/  then you\u2019ll paste in the framework you just copied, you\u2019ll then type in a / and hit enter"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "Step 4")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-Click-the-framework+js-link.png",
      "alt": "Navigate to unkpg"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Then you\u2019ll copy the url! "), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Return to the lesson page"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Step 5")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-click-this-link.png",
      "alt": "Navigate to unkpg"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "Step 6"), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-test-the-app.gif",
      "alt": "Test the App"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Step 7")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-update-the-cdn.gif",
      "alt": "Update the Cdn"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Final Step")), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "../images/02-Update-Code/03-verify-the-app-works.gif",
      "alt": "Update the Cdn"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })), "\n", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Paste the url to the JSBin in the Review document."));
});

/***/ }),

/***/ "./reviewer-guide/docs/02-Update-Code/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__00_set_up_github_md__ = __webpack_require__("./reviewer-guide/docs/02-Update-Code/00-set-up-github.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__01_update_plunker_md__ = __webpack_require__("./reviewer-guide/docs/02-Update-Code/01-update-plunker.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__02_build_plnkr_embed_link_md__ = __webpack_require__("./reviewer-guide/docs/02-Update-Code/02-build-plnkr-embed-link.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__03_update_jsbin_md__ = __webpack_require__("./reviewer-guide/docs/02-Update-Code/03-update-jsbin.md");




/* harmony default export */ __webpack_exports__["a"] = ([{
  component: __WEBPACK_IMPORTED_MODULE_0__00_set_up_github_md__["a" /* default */],
  title: "Set Up Github",
  slug: "set-up-github"
}, {
  component: __WEBPACK_IMPORTED_MODULE_1__01_update_plunker_md__["a" /* default */],
  title: "Update Plunker",
  slug: "update-plunker"
}, {
  component: __WEBPACK_IMPORTED_MODULE_2__02_build_plnkr_embed_link_md__["a" /* default */],
  title: "Build Plnkr Embed Link",
  slug: "build-plnkr-embed-link"
}, {
  component: __WEBPACK_IMPORTED_MODULE_3__03_update_jsbin_md__["a" /* default */],
  title: "Review Template",
  slug: "review-template"
}]);

/***/ }),

/***/ "./reviewer-guide/docs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__00_Introduction_md__ = __webpack_require__("./reviewer-guide/docs/00-Introduction.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__01_Review__ = __webpack_require__("./reviewer-guide/docs/01-Review/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__02_Update_Code__ = __webpack_require__("./reviewer-guide/docs/02-Update-Code/index.js");



/* harmony default export */ __webpack_exports__["a"] = ([{
  title: "",
  slug: "",
  background: 'white',
  color: 'black',
  chapter: [{
    component: __WEBPACK_IMPORTED_MODULE_0__00_Introduction_md__["a" /* default */],
    title: "Introduction",
    slug: "introduction"
  }]
}, {
  title: "Review",
  slug: "review",
  chapter: __WEBPACK_IMPORTED_MODULE_1__01_Review__["a" /* default */],
  background: 'white',
  color: 'black'
}, {
  title: "Update Code",
  slug: "update-code",
  chapter: __WEBPACK_IMPORTED_MODULE_2__02_Update_Code__["a" /* default */],
  background: 'white',
  color: 'black'
}]);

/***/ })

})
//# sourceMappingURL=5.0bb59ecbede436ae2470.hot-update.js.map
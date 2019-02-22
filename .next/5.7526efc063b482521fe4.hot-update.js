webpackHotUpdate(5,{

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
  var _ref$instructor = _ref.instructor,
      instructor = _ref$instructor === void 0 ? false : _ref$instructor;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("position:fixed;overflow-y:scroll;padding:2rem;transition:all 250ms ease;margin-left:0;background-color:white;box-shadow:0 10px 50px -10px rgba(0,0,0,0.15);", mq.large(
    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("position:fixed;top:0;height:100vh;padding:2rem 2rem;overflow-y:scroll;height:inherit;background-color:#fafafa;width:auto;box-shadow:none;")), ";::-webkit-scrollbar{width:0px;}::-webkit-scrollbar-track{background-color:#fafafa;}::-webkit-scrollbar-thumb{background-color:#f1f1f1;}"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, instructor ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;left:0;top:0;height:100vh;width:230px;h4{margin:0;}a{font-size:0.85rem;text-decoration:none;}& >:last-child{padding-bottom:6rem;", mq.medium(
    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding-bottom:6rem;")), ";}& >:first-child{margin-top:0;padding:0;}& >:nth-child(3){margin-top:0;padding:0;}& >:nth-child(2){display:none;visibility:hidden;)}"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
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
          lineNumber: 126
        }
      }, index === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "#".concat(chapterSlug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChapterAnchor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, chapterTitle)) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#".concat(slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
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
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("color:rgba(0,0,0,0.9);transition:all 250ms ease;opacity:1;::before{content:'';position:absolute;width:10px;height:3px;margin-top:12px;left:0;background-color:", instructor ? "".concat(Color.instructorPrimary) : "".concat(Color.reviewerPrimary), ";}"),
        scrolledPastClassName:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("color:yellow;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Anchor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
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
      lineNumber: 167
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
          lineNumber: 205
        }
      }, index === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "#".concat(chapterSlug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChapterAnchor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, chapterTitle)) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#".concat(slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
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
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("color:rgba(0,0,0,0.9);transition:all 250ms ease;opacity:1;::before{content:'';position:absolute;width:10px;height:3px;margin-top:12px;left:0;background-color:", instructor ? "".concat(Color.instructorPrimary) : "".concat(Color.reviewerPrimary), ";}"),
        scrolledPastClassName:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("color:yellow;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Anchor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, title))));
    });
  }))));
});

/***/ })

})
//# sourceMappingURL=5.7526efc063b482521fe4.hot-update.js.map
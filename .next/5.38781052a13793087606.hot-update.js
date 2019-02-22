webpackHotUpdate(5,{

/***/ "./components/InstructorGuide.js":
false,

/***/ "./components/ReviewersGuide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviewer_guide_docs__ = __webpack_require__("./reviewer-guide/docs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
var _jsxFileName = "/Users/joel/Code/egghead/how-to-egghead/components/ReviewersGuide.js";






var Color = {
  instructorPrimary: '#F16156',
  reviewerPrimary: '#E8A304',
  secondary: 'rgba(0,0,0,0.5)'
};
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
var DocsWrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])("div", {
  target: "ej2s8sg0"
})("max-width:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow-wrap:break-word;word-wrap:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;h4:first-child{display:none;visibility:hidden;}h1{font-weight:300;font-size:2.35rem;margin-bottom:3.5rem;", mq.medium(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("font-size:3.5rem;")), ";", mq.large(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("font-size:3rem;")), ";color:", Color.reviewerPrimary, ";}p > a{color:", Color.reviewerPrimary, ";}a{color:", Color.reviewerPrimary, ";}a:visited{color:", Color.reviewerPrimary, ";}");
var Divider =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])("hr", {
  target: "ej2s8sg1"
})("opacity:0.2;background:black;height:1px;border:0;width:100%;margin-top:2rem;margin-bottom:1rem;", mq.small(
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("margin-top:4rem;margin-bottom:0;")), ";");
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;justify-content:center;align-items:center;"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_3__reviewer_guide_docs__["a" /* default */].map(function (_ref, index) {
    var chapter = _ref.chapter,
        title = _ref.title,
        slug = _ref.slug;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: title,
      className:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("margin-top:-120px;padding-bottom:6rem;flex-direction:column;justify-content:center;align-items:center;"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className:
      /*#__PURE__*/

      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 1.25rem;", mq.small(
      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:0 2rem;")), ";", mq.large(
      /*#__PURE__*/
      Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:0 4rem;")), ";"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DocsWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      }
    }, title))), chapter.map(function (_ref2) {
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
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("margin-top:2rem;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 1.5rem 0 1.5rem;", mq.small(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:0.5 2rem;margin-top:0;")), ";", mq.large(
        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("padding:1.5rem 4rem;")), ";"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DocsWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Doc, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }));
    }));
  }));
});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ReviewersGuide__ = __webpack_require__("./components/ReviewersGuide.js");
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
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ReviewersGuide__["a" /* default */], {
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

/***/ })

})
//# sourceMappingURL=5.38781052a13793087606.hot-update.js.map
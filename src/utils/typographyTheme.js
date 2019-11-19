"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
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

var _grayPercentage = require("gray-percentage");

var _grayPercentage2 = _interopRequireDefault(_grayPercentage);

var _typographyBreakpointConstants = require("typography-breakpoint-constants");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var theme = {
  title: "HowToEgghead",
  baseFontSize: "22px",
  baseLineHeight: 1.78,
  googleFonts: [
    {
      name: "Lora",
      styles: ["700"]
    },
    {
      name: "Merriweather",
      styles: ["300", "300i", "400", "400i", "500", "500i", "700", "700i"]
    }
  ],
  headerFontFamily: ["Lora", "serif"],
  bodyFontFamily: ["Merriweather", "Georgia", "serif"],
  bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  breakpoints: {
    "@media screen and (max-width:799px)": {
      // any valid media query.
      //scaleRatio: 2.5, // Override the default scale
      baseFontSize: "15px"
    },
    "@media screen and (min-width:800px)": {
      // any valid media query.
      scaleRatio: 2.5, // Override the default scale
      baseFontSize: "17px"
    }
  },
  overrideStyles: function overrideStyles(_ref, options) {
    var _ref2;

    var adjustFontSizeTo = _ref.adjustFontSizeTo,
      scale = _ref.scale,
      rhythm = _ref.rhythm;
    return (
      (_ref2 = {
        a: {
          color: "#FF2D55",
          textDecoration: "none"
        },
        "a:hover,a:active": {
          textDecoration: "underline"
        },
        blockquote: _extends({}, scale(1 / 5), {
          color: (0, _grayPercentage2.default)(41),
          fontStyle: "italic",
          paddingLeft: rhythm(13 / 16),
          marginLeft: 0,
          borderLeft:
            rhythm(3 / 16) + " solid " + (0, _grayPercentage2.default)(80)
        }),
        "blockquote > :last-child": {
          marginBottom: 0
        },
        "blockquote cite": _extends(
          {},
          adjustFontSizeTo(options.baseFontSize),
          {
            color: options.bodyColor,
            fontWeight: options.bodyWeight
          }
        ),
        "blockquote cite:before": {
          content: '"— "'
        },
        ul: {
          listStyle: "disc"
        },
        "ul,ol": {
          marginLeft: 0
        }
      }),
      _defineProperty(
        _ref2,
        _typographyBreakpointConstants.MOBILE_MEDIA_QUERY,
        {
          "ul,ol": {
            marginLeft: rhythm(1)
          },
          blockquote: {
            marginLeft: rhythm(-3 / 4),
            marginRight: 0,
            paddingLeft: rhythm(9 / 16)
          }
        }
      ),
      _defineProperty(
        _ref2,
        _typographyBreakpointConstants.TABLET_MEDIA_QUERY,
        {
          h1: _extends({}, scale(5 / 5))
        }
      ),
      _defineProperty(_ref2, "h1,h2,h3,h4,h5,h6", {
        marginTop: rhythm(2)
      }),
      _defineProperty(
        _ref2,
        "h1",
        _extends({}, scale(6 / 5), {
          letterSpacing: "-2px"
        })
      ),
      _defineProperty(_ref2, "h6", {
        fontStyle: "italic"
      }),
      _ref2
    );
  }
};

exports.default = theme;

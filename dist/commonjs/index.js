"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenteredText = void 0;
Object.defineProperty(exports, "RTNCenteredText", {
  enumerable: true,
  get: function () {
    return _RTNCenteredTextNativeComponent.default;
  }
});
var _RTNCenteredTextNativeComponent = _interopRequireDefault(require("./RTNCenteredTextNativeComponent"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CenteredText = ({
  text
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RTNCenteredTextNativeComponent.default, {
    text: text
  });
};
exports.CenteredText = CenteredText;
//# sourceMappingURL=index.js.map
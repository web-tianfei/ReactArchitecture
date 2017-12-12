webpackJsonp([1],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(87);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(88);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(89);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(90);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(54);

var _reactRouterDom = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var One = function (_Component) {
	(0, _inherits3.default)(One, _Component);

	function One(props) {
		(0, _classCallCheck3.default)(this, One);
		return (0, _possibleConstructorReturn3.default)(this, (One.__proto__ || Object.getPrototypeOf(One)).call(this, props));
	}

	(0, _createClass3.default)(One, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'\u8FD9\u4E2A\u662F11'
				),
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/two' },
					'go two'
				)
			);
		}
	}]);
	return One;
}(_react.Component);

// const One = () => (
// 	<div><h1>111111111111</h1></div>
// );

exports.default = One;

/***/ })

});
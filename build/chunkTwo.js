webpackJsonp([0],{

/***/ 185:
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

// const Two = () => (
// 	<div><h1>2222222222222</h1></div>
// );

var Two = function (_Component) {
	(0, _inherits3.default)(Two, _Component);

	function Two(props) {
		(0, _classCallCheck3.default)(this, Two);
		return (0, _possibleConstructorReturn3.default)(this, (Two.__proto__ || Object.getPrototypeOf(Two)).call(this, props));
	}

	(0, _createClass3.default)(Two, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'\u8FD9\u4E2A\u662F222'
				),
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/one' },
					'go one'
				)
			);
		}
	}]);
	return Two;
}(_react.Component);

exports.default = Two;

/***/ })

});
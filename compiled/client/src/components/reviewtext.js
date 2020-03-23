'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var textStyle = {
  'lineHeight': '1.5'
};

var ReviewText = function (_React$Component) {
  _inherits(ReviewText, _React$Component);

  function ReviewText(props) {
    _classCallCheck(this, ReviewText);

    return _possibleConstructorReturn(this, (ReviewText.__proto__ || Object.getPrototypeOf(ReviewText)).call(this, props));
  }

  _createClass(ReviewText, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: textStyle },
        this.props.reviews.text
      );
    }
  }]);

  return ReviewText;
}(_react2.default.Component);

exports.default = ReviewText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXd0ZXh0LmpzeCJdLCJuYW1lcyI6WyJ0ZXh0U3R5bGUiLCJSZXZpZXdUZXh0IiwicHJvcHMiLCJyZXZpZXdzIiwidGV4dCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZO0FBQ2QsZ0JBQWM7QUFEQSxDQUFoQjs7SUFJTUMsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsS0FEVztBQUdsQjs7Ozs2QkFFUTtBQUNQLGFBQVE7QUFBQTtBQUFBLFVBQUssT0FBT0YsU0FBWjtBQUNMLGFBQUtFLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkM7QUFEZCxPQUFSO0FBR0Q7Ozs7RUFWc0JDLGdCQUFNQyxTOztrQkFhaEJMLFUiLCJmaWxlIjoicmV2aWV3dGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmxldCB0ZXh0U3R5bGUgPSB7XG4gICdsaW5lSGVpZ2h0JzogJzEuNSdcbn1cblxuY2xhc3MgUmV2aWV3VGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICB7dGhpcy5wcm9wcy5yZXZpZXdzLnRleHR9XG4gICAgPC9kaXY+KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld1RleHQ7Il19
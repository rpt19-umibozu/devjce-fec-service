'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _review = require('./review.jsx');

var _review2 = _interopRequireDefault(_review);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var divStyle = {
  'fontFamily': 'Roboto',
  'display': 'grid',
  'gridTemplateColumns': '1fr 1fr',
  'gridTemplateRows': '1fr'
};

var Reviews = function (_React$Component) {
  _inherits(Reviews, _React$Component);

  function Reviews(props) {
    _classCallCheck(this, Reviews);

    return _possibleConstructorReturn(this, (Reviews.__proto__ || Object.getPrototypeOf(Reviews)).call(this, props));
  }

  _createClass(Reviews, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: divStyle },
        this.props.reviews.length > 0 && this.props.reviews[0].reviews.map(function (item, index) {
          return _react2.default.createElement(_review2.default, { key: index, reviews: item });
        })
      );
    }
  }]);

  return Reviews;
}(_react2.default.Component);

exports.default = Reviews;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXdzLmpzeCJdLCJuYW1lcyI6WyJkaXZTdHlsZSIsIlJldmlld3MiLCJwcm9wcyIsInJldmlld3MiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxXQUFXO0FBQ2IsZ0JBQWMsUUFERDtBQUViLGFBQVcsTUFGRTtBQUdiLHlCQUF1QixTQUhWO0FBSWIsc0JBQW9CO0FBSlAsQ0FBZjs7SUFPTUMsTzs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2R0FDWEEsS0FEVztBQUdsQjs7Ozs2QkFFUTtBQUNQLGFBQVE7QUFBQTtBQUFBLFVBQUssT0FBT0YsUUFBWjtBQUNMLGFBQUtFLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsTUFBbkIsR0FBNEIsQ0FBNUIsSUFDRCxLQUFLRixLQUFMLENBQVdDLE9BQVgsQ0FBbUIsQ0FBbkIsRUFBc0JBLE9BQXRCLENBQThCRSxHQUE5QixDQUFrQyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDbkQsaUJBQU8sOEJBQUMsZ0JBQUQsSUFBUSxLQUFLQSxLQUFiLEVBQW9CLFNBQVNELElBQTdCLEdBQVA7QUFDQyxTQUZEO0FBRk0sT0FBUjtBQU1EOzs7O0VBYm1CRSxnQkFBTUMsUzs7a0JBZ0JiUixPIiwiZmlsZSI6InJldmlld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Jldmlldy5qc3gnO1xuXG5sZXQgZGl2U3R5bGUgPSB7XG4gICdmb250RmFtaWx5JzogJ1JvYm90bycsXG4gICdkaXNwbGF5JzogJ2dyaWQnLFxuICAnZ3JpZFRlbXBsYXRlQ29sdW1ucyc6ICcxZnIgMWZyJyxcbiAgJ2dyaWRUZW1wbGF0ZVJvd3MnOiAnMWZyJyxcbn1cblxuY2xhc3MgUmV2aWV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e2RpdlN0eWxlfT5cbiAgICAgIHt0aGlzLnByb3BzLnJldmlld3MubGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5wcm9wcy5yZXZpZXdzWzBdLnJldmlld3MubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxSZXZpZXcga2V5PXtpbmRleH0gcmV2aWV3cz17aXRlbX0gLz5cbiAgICAgIH0pfVxuICAgIDwvZGl2PilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzOyJdfQ==
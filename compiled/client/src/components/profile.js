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

var divStyle = {
  'fontFamily': 'Roboto',
  'textAlign': 'justify',
  'display': 'grid',
  'gridTemplateColumns': '1fr 5fr',
  'gridTemplateRows': '1fr'
};

var imgStyle = {
  'borderRadius': '50%',
  'height': '60px',
  'width': '60px'
};

var dateStyle = {
  'color': 'grey',
  'fontSize': '14px'
};

var textStyle = {
  'position': 'relative',
  'top': '14px',
  'lineHeight': '1.3'
};

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: divStyle },
        _react2.default.createElement('img', { src: this.props.reviews.avatar, style: imgStyle }),
        _react2.default.createElement(
          'div',
          { style: textStyle },
          _react2.default.createElement(
            'b',
            null,
            this.props.reviews.username.split(' ')[0]
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { style: dateStyle },
            this.props.reviews.date
          )
        )
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

exports.default = Profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9wcm9maWxlLmpzeCJdLCJuYW1lcyI6WyJkaXZTdHlsZSIsImltZ1N0eWxlIiwiZGF0ZVN0eWxlIiwidGV4dFN0eWxlIiwiUHJvZmlsZSIsInByb3BzIiwicmV2aWV3cyIsImF2YXRhciIsInVzZXJuYW1lIiwic3BsaXQiLCJkYXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFdBQVc7QUFDYixnQkFBYyxRQUREO0FBRWIsZUFBYSxTQUZBO0FBR2IsYUFBVyxNQUhFO0FBSWIseUJBQXVCLFNBSlY7QUFLYixzQkFBb0I7QUFMUCxDQUFmOztBQVFBLElBQUlDLFdBQVc7QUFDYixrQkFBZ0IsS0FESDtBQUViLFlBQVUsTUFGRztBQUdiLFdBQVM7QUFISSxDQUFmOztBQU1BLElBQUlDLFlBQVk7QUFDZCxXQUFTLE1BREs7QUFFZCxjQUFZO0FBRkUsQ0FBaEI7O0FBS0EsSUFBSUMsWUFBWTtBQUNkLGNBQVksVUFERTtBQUVkLFNBQU8sTUFGTztBQUdkLGdCQUFjO0FBSEEsQ0FBaEI7O0lBTU1DLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7QUFHbEI7Ozs7NkJBRVE7QUFDUCxhQUFRO0FBQUE7QUFBQSxVQUFLLE9BQU9MLFFBQVo7QUFDTiwrQ0FBSyxLQUFLLEtBQUtLLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsTUFBN0IsRUFBcUMsT0FBT04sUUFBNUMsR0FETTtBQUVOO0FBQUE7QUFBQSxZQUFLLE9BQU9FLFNBQVo7QUFBdUI7QUFBQTtBQUFBO0FBQUksaUJBQUtFLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkUsUUFBbkIsQ0FBNEJDLEtBQTVCLENBQWtDLEdBQWxDLEVBQXVDLENBQXZDO0FBQUosV0FBdkI7QUFDQSxtREFEQTtBQUVBO0FBQUE7QUFBQSxjQUFLLE9BQU9QLFNBQVo7QUFBd0IsaUJBQUtHLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkk7QUFBM0M7QUFGQTtBQUZNLE9BQVI7QUFNRDs7OztFQWJtQkMsZ0JBQU1DLFM7O2tCQWdCYlIsTyIsImZpbGUiOiJwcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IGRpdlN0eWxlID0ge1xuICAnZm9udEZhbWlseSc6ICdSb2JvdG8nLFxuICAndGV4dEFsaWduJzogJ2p1c3RpZnknLFxuICAnZGlzcGxheSc6ICdncmlkJyxcbiAgJ2dyaWRUZW1wbGF0ZUNvbHVtbnMnOiAnMWZyIDVmcicsXG4gICdncmlkVGVtcGxhdGVSb3dzJzogJzFmcidcbn1cblxubGV0IGltZ1N0eWxlID0ge1xuICAnYm9yZGVyUmFkaXVzJzogJzUwJScsXG4gICdoZWlnaHQnOiAnNjBweCcsXG4gICd3aWR0aCc6ICc2MHB4J1xufVxuXG5sZXQgZGF0ZVN0eWxlID0ge1xuICAnY29sb3InOiAnZ3JleScsXG4gICdmb250U2l6ZSc6ICcxNHB4J1xufVxuXG5sZXQgdGV4dFN0eWxlID0ge1xuICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAndG9wJzogJzE0cHgnLFxuICAnbGluZUhlaWdodCc6ICcxLjMnXG59XG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXtkaXZTdHlsZX0+XG4gICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5yZXZpZXdzLmF2YXRhcn0gc3R5bGU9e2ltZ1N0eWxlfT48L2ltZz5cbiAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+PGI+e3RoaXMucHJvcHMucmV2aWV3cy51c2VybmFtZS5zcGxpdCgnICcpWzBdfTwvYj5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGRpdiBzdHlsZT17ZGF0ZVN0eWxlfT57dGhpcy5wcm9wcy5yZXZpZXdzLmRhdGV9PC9kaXY+PC9kaXY+XG4gICAgPC9kaXY+KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il19
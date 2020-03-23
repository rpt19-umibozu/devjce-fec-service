'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reviewtext = require('./reviewtext.jsx');

var _reviewtext2 = _interopRequireDefault(_reviewtext);

var _profile = require('./profile.jsx');

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var divStyle = {
  'fontFamily': 'Roboto',
  'padding': '20px',
  'position': 'relative',
  'right': '10px'
};

var Review = function (_React$Component) {
  _inherits(Review, _React$Component);

  function Review(props) {
    _classCallCheck(this, Review);

    return _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));
  }

  _createClass(Review, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: divStyle },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_profile2.default, { reviews: this.props.reviews }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_reviewtext2.default, { reviews: this.props.reviews })
        ),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Review;
}(_react2.default.Component);

exports.default = Review;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXcuanN4Il0sIm5hbWVzIjpbImRpdlN0eWxlIiwiUmV2aWV3IiwicHJvcHMiLCJyZXZpZXdzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxXQUFXO0FBQ2IsZ0JBQWMsUUFERDtBQUViLGFBQVcsTUFGRTtBQUdiLGNBQVksVUFIQztBQUliLFdBQVM7QUFKSSxDQUFmOztJQU9NQyxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXO0FBR2xCOzs7OzZCQUVRO0FBQ1AsYUFBUTtBQUFBO0FBQUEsVUFBSyxPQUFPRixRQUFaO0FBQ047QUFBQTtBQUFBO0FBQUssd0NBQUMsaUJBQUQsSUFBUyxTQUFTLEtBQUtFLEtBQUwsQ0FBV0MsT0FBN0IsR0FBTDtBQUNBLG1EQURBO0FBRUEsd0NBQUMsb0JBQUQsSUFBWSxTQUFTLEtBQUtELEtBQUwsQ0FBV0MsT0FBaEM7QUFGQSxTQURNO0FBSU47QUFKTSxPQUFSO0FBTUQ7Ozs7RUFia0JDLGdCQUFNQyxTOztrQkFnQlpKLE0iLCJmaWxlIjoicmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXZpZXdUZXh0IGZyb20gJy4vcmV2aWV3dGV4dC5qc3gnO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9wcm9maWxlLmpzeCc7XG5cbmxldCBkaXZTdHlsZSA9IHtcbiAgJ2ZvbnRGYW1pbHknOiAnUm9ib3RvJyxcbiAgJ3BhZGRpbmcnOiAnMjBweCcsXG4gICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICdyaWdodCc6ICcxMHB4J1xufVxuXG5jbGFzcyBSZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXtkaXZTdHlsZX0+XG4gICAgICA8ZGl2PjxQcm9maWxlIHJldmlld3M9e3RoaXMucHJvcHMucmV2aWV3c30vPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8UmV2aWV3VGV4dCByZXZpZXdzPXt0aGlzLnByb3BzLnJldmlld3N9Lz48L2Rpdj5cbiAgICAgIDxicj48L2JyPlxuICAgIDwvZGl2PilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7Il19
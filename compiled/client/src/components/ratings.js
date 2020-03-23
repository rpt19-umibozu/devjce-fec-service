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
  'display': 'grid',
  'gridTemplateColumns': '1fr 1fr',
  'gridTemplateRows': '1fr 1fr 1fr'
};

var borderStyle = {
  'borderBottom': 'solid',
  'borderBottomWidth': '50%',
  'position': 'relative',
  'bottom': '10px',
  'left': '150px',
  'paddingLeft': '100px',
  'color': 'grey'
};

var numStyle = {
  'position': 'relative',
  'left': '100px',
  'display': 'inLine',
  'fontSize': '12px',
  'padding': '10px'
};

var breakStyle = {
  'padding': '7px'
};

var Ratings = function (_React$Component) {
  _inherits(Ratings, _React$Component);

  function Ratings(props) {
    _classCallCheck(this, Ratings);

    return _possibleConstructorReturn(this, (Ratings.__proto__ || Object.getPrototypeOf(Ratings)).call(this, props));
  }

  _createClass(Ratings, [{
    key: 'border',
    value: function border(value, attr) {
      console.log(((+this.attrScore(value, attr) * 20).toFixed(0) + '%').toString());
      return {
        'borderBottom': 'solid',
        'borderBottomWidth': '50%',
        'position': 'relative',
        'bottom': '10px',
        'left': '45px',
        'right': '105px',
        'paddingLeft': ((+this.attrScore(value, attr) * 20 + 5).toFixed(0) + 'px').toString(),
        'color': 'black'
      };
    }
  }, {
    key: 'attrScore',
    value: function attrScore(value, attr) {
      if (value.length === 0) {
        return 0;
      }
      var helperScore = 0;
      var reviews = value[0].reviews;
      // console.log('value of reviews', reviews.length);
      for (var i = 0; i < reviews.length; i++) {
        var scores = reviews[i].scores[0];
        // console.log(scores);
        helperScore += +scores[attr];
      }
      return helperScore / reviews.length;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: divStyle },
        _react2.default.createElement(
          'div',
          { style: breakStyle },
          'Cleanliness\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0',
          _react2.default.createElement('span', { style: borderStyle }),
          ' ',
          _react2.default.createElement('span', { style: this.border(this.props.reviews, 'cleanliness') }),
          _react2.default.createElement(
            'div',
            { style: numStyle },
            this.attrScore(this.props.reviews, 'cleanliness').toFixed(1)
          )
        ),
        _react2.default.createElement(
          'div',
          { style: breakStyle },
          'Accuracy\xA0\xA0',
          _react2.default.createElement('span', { style: borderStyle }),
          ' ',
          _react2.default.createElement('span', { style: this.border(this.props.reviews, 'accuracy') }),
          _react2.default.createElement(
            'div',
            { style: numStyle },
            this.attrScore(this.props.reviews, 'accuracy').toFixed(1)
          )
        ),
        _react2.default.createElement(
          'div',
          { style: breakStyle },
          'Communication',
          _react2.default.createElement('span', { style: borderStyle }),
          ' ',
          _react2.default.createElement('span', { style: this.border(this.props.reviews, 'communication') }),
          _react2.default.createElement(
            'div',
            { style: numStyle },
            this.attrScore(this.props.reviews, 'communication').toFixed(1)
          )
        ),
        _react2.default.createElement(
          'div',
          { style: breakStyle },
          'Location\xA0\xA0',
          _react2.default.createElement('span', { style: borderStyle }),
          ' ',
          _react2.default.createElement('span', { style: this.border(this.props.reviews, 'location') }),
          _react2.default.createElement(
            'div',
            { style: numStyle },
            this.attrScore(this.props.reviews, 'location').toFixed(1)
          )
        ),
        _react2.default.createElement(
          'div',
          { style: breakStyle },
          'Check-In\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0',
          _react2.default.createElement('span', { style: borderStyle }),
          ' ',
          _react2.default.createElement('span', { style: this.border(this.props.reviews, 'checkin') }),
          _react2.default.createElement(
            'div',
            { style: numStyle },
            this.attrScore(this.props.reviews, 'checkin').toFixed(1)
          )
        ),
        _react2.default.createElement(
          'div',
          { style: breakStyle },
          'Value\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0',
          _react2.default.createElement('span', { style: borderStyle }),
          ' ',
          _react2.default.createElement('span', { style: this.border(this.props.reviews, 'value') }),
          _react2.default.createElement(
            'div',
            { style: numStyle },
            this.attrScore(this.props.reviews, 'value').toFixed(1)
          )
        )
      );
    }
  }]);

  return Ratings;
}(_react2.default.Component);

exports.default = Ratings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yYXRpbmdzLmpzeCJdLCJuYW1lcyI6WyJkaXZTdHlsZSIsImJvcmRlclN0eWxlIiwibnVtU3R5bGUiLCJicmVha1N0eWxlIiwiUmF0aW5ncyIsInByb3BzIiwidmFsdWUiLCJhdHRyIiwiY29uc29sZSIsImxvZyIsImF0dHJTY29yZSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImxlbmd0aCIsImhlbHBlclNjb3JlIiwicmV2aWV3cyIsImkiLCJzY29yZXMiLCJib3JkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsV0FBVztBQUNiLGdCQUFjLFFBREQ7QUFFYixhQUFXLE1BRkU7QUFHYix5QkFBdUIsU0FIVjtBQUliLHNCQUFvQjtBQUpQLENBQWY7O0FBT0EsSUFBSUMsY0FBYztBQUNoQixrQkFBZ0IsT0FEQTtBQUVoQix1QkFBcUIsS0FGTDtBQUdoQixjQUFZLFVBSEk7QUFJaEIsWUFBVSxNQUpNO0FBS2hCLFVBQVEsT0FMUTtBQU1oQixpQkFBZSxPQU5DO0FBT2hCLFdBQVM7QUFQTyxDQUFsQjs7QUFVQSxJQUFJQyxXQUFXO0FBQ2IsY0FBWSxVQURDO0FBRWIsVUFBUSxPQUZLO0FBR2IsYUFBVyxRQUhFO0FBSWIsY0FBWSxNQUpDO0FBS2IsYUFBVztBQUxFLENBQWY7O0FBUUEsSUFBSUMsYUFBYTtBQUNmLGFBQVc7QUFESSxDQUFqQjs7SUFJTUMsTzs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2R0FDWEEsS0FEVztBQUdsQjs7OzsyQkFFTUMsSyxFQUFPQyxJLEVBQU07QUFDbEJDLGNBQVFDLEdBQVIsQ0FBWSxDQUFDLENBQUMsQ0FBQyxLQUFLQyxTQUFMLENBQWVKLEtBQWYsRUFBc0JDLElBQXRCLENBQUQsR0FBK0IsRUFBaEMsRUFBb0NJLE9BQXBDLENBQTRDLENBQTVDLElBQWlELEdBQWxE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QyxDQUFELENBQWlESixPQUFqRCxDQUF5RCxDQUF6RDtBQUF2QjtBQUEvSSxTQUpNO0FBS047QUFBQTtBQUFBLFlBQUssT0FBT1IsVUFBWjtBQUFBO0FBQThHLGtEQUFNLE9BQU9GLFdBQWIsR0FBOUc7QUFBQTtBQUFnSixrREFBTSxPQUFPLEtBQUtpQixNQUFMLENBQVksS0FBS2IsS0FBTCxDQUFXVSxPQUF2QixFQUFnQyxTQUFoQyxDQUFiLEdBQWhKO0FBQWdOO0FBQUE7QUFBQSxjQUFLLE9BQU9iLFFBQVo7QUFBd0IsaUJBQUtRLFNBQUwsQ0FBZSxLQUFLTCxLQUFMLENBQVdVLE9BQTFCLEVBQW1DLFNBQW5DLENBQUQsQ0FBZ0RKLE9BQWhELENBQXdELENBQXhEO0FBQXZCO0FBQWhOLFNBTE07QUFNTjtBQUFBO0FBQUEsWUFBSyxPQUFPUixVQUFaO0FBQUE7QUFBNkUsa0RBQU0sT0FBT0YsV0FBYixHQUE3RTtBQUFBO0FBQStHLGtEQUFNLE9BQU8sS0FBS2lCLE1BQUwsQ0FBWSxLQUFLYixLQUFMLENBQVdVLE9BQXZCLEVBQWdDLE9BQWhDLENBQWIsR0FBL0c7QUFBNks7QUFBQTtBQUFBLGNBQUssT0FBT2IsUUFBWjtBQUF3QixpQkFBS1EsU0FBTCxDQUFlLEtBQUtMLEtBQUwsQ0FBV1UsT0FBMUIsRUFBbUMsT0FBbkMsQ0FBRCxDQUE4Q0osT0FBOUMsQ0FBc0QsQ0FBdEQ7QUFBdkI7QUFBN0s7QUFOTSxPQUFSO0FBUUQ7Ozs7RUE1Q21CUSxnQkFBTUMsUzs7a0JBK0NiaEIsTyIsImZpbGUiOiJyYXRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IGRpdlN0eWxlID0ge1xuICAnZm9udEZhbWlseSc6ICdSb2JvdG8nLFxuICAnZGlzcGxheSc6ICdncmlkJyxcbiAgJ2dyaWRUZW1wbGF0ZUNvbHVtbnMnOiAnMWZyIDFmcicsXG4gICdncmlkVGVtcGxhdGVSb3dzJzogJzFmciAxZnIgMWZyJyxcbn1cblxubGV0IGJvcmRlclN0eWxlID0ge1xuICAnYm9yZGVyQm90dG9tJzogJ3NvbGlkJyxcbiAgJ2JvcmRlckJvdHRvbVdpZHRoJzogJzUwJScsXG4gICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICdib3R0b20nOiAnMTBweCcsXG4gICdsZWZ0JzogJzE1MHB4JyxcbiAgJ3BhZGRpbmdMZWZ0JzogJzEwMHB4JyxcbiAgJ2NvbG9yJzogJ2dyZXknLFxufVxuXG5sZXQgbnVtU3R5bGUgPSB7XG4gICdwb3NpdGlvbic6ICdyZWxhdGl2ZScsXG4gICdsZWZ0JzogJzEwMHB4JyxcbiAgJ2Rpc3BsYXknOiAnaW5MaW5lJyxcbiAgJ2ZvbnRTaXplJzogJzEycHgnLFxuICAncGFkZGluZyc6ICcxMHB4J1xufVxuXG5sZXQgYnJlYWtTdHlsZSA9IHtcbiAgJ3BhZGRpbmcnOiAnN3B4J1xufVxuXG5jbGFzcyBSYXRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICB9XG5cbiAgYm9yZGVyKHZhbHVlLCBhdHRyKSB7XG4gICAgY29uc29sZS5sb2coKCgrdGhpcy5hdHRyU2NvcmUodmFsdWUsIGF0dHIpICogMjApLnRvRml4ZWQoMCkgKyAnJScpLnRvU3RyaW5nKCkpXG4gICAgcmV0dXJuIHtcbiAgICAgICdib3JkZXJCb3R0b20nOiAnc29saWQnLFxuICAgICAgJ2JvcmRlckJvdHRvbVdpZHRoJzogJzUwJScsXG4gICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnLFxuICAgICAgJ2JvdHRvbSc6ICcxMHB4JyxcbiAgICAgICdsZWZ0JzogJzQ1cHgnLFxuICAgICAgJ3JpZ2h0JzogJzEwNXB4JyxcbiAgICAgICdwYWRkaW5nTGVmdCc6ICgoKCt0aGlzLmF0dHJTY29yZSh2YWx1ZSwgYXR0cikgKiAyMCkgKyA1KS50b0ZpeGVkKDApICsgJ3B4JykudG9TdHJpbmcoKSxcbiAgICAgICdjb2xvcic6ICdibGFjaycsXG4gICAgfVxuICB9XG5cbiAgYXR0clNjb3JlKHZhbHVlLCBhdHRyKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGxldCBoZWxwZXJTY29yZSA9IDA7XG4gICAgbGV0IHJldmlld3MgPSB2YWx1ZVswXS5yZXZpZXdzO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWx1ZSBvZiByZXZpZXdzJywgcmV2aWV3cy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNjb3JlcyA9IHJldmlld3NbaV0uc2NvcmVzWzBdO1xuICAgICAgLy8gY29uc29sZS5sb2coc2NvcmVzKTtcbiAgICAgIGhlbHBlclNjb3JlICs9ICtzY29yZXNbYXR0cl07XG4gICAgfVxuICAgIHJldHVybiAoaGVscGVyU2NvcmUgLyByZXZpZXdzLmxlbmd0aCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXtkaXZTdHlsZX0+XG4gICAgICA8ZGl2IHN0eWxlPXticmVha1N0eWxlfT5DbGVhbmxpbmVzcyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxzcGFuIHN0eWxlPXtib3JkZXJTdHlsZX0+PC9zcGFuPiA8c3BhbiBzdHlsZT17dGhpcy5ib3JkZXIodGhpcy5wcm9wcy5yZXZpZXdzLCAnY2xlYW5saW5lc3MnKX0+PC9zcGFuPjxkaXYgc3R5bGU9e251bVN0eWxlfT57KHRoaXMuYXR0clNjb3JlKHRoaXMucHJvcHMucmV2aWV3cywgJ2NsZWFubGluZXNzJykpLnRvRml4ZWQoMSl9PC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXticmVha1N0eWxlfT5BY2N1cmFjeSZuYnNwOyZuYnNwOzxzcGFuIHN0eWxlPXtib3JkZXJTdHlsZX0+PC9zcGFuPiA8c3BhbiBzdHlsZT17dGhpcy5ib3JkZXIodGhpcy5wcm9wcy5yZXZpZXdzLCAnYWNjdXJhY3knKX0+PC9zcGFuPjxkaXYgc3R5bGU9e251bVN0eWxlfT57KHRoaXMuYXR0clNjb3JlKHRoaXMucHJvcHMucmV2aWV3cywgJ2FjY3VyYWN5JykpLnRvRml4ZWQoMSl9PC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXticmVha1N0eWxlfT5Db21tdW5pY2F0aW9uPHNwYW4gc3R5bGU9e2JvcmRlclN0eWxlfT48L3NwYW4+IDxzcGFuIHN0eWxlPXt0aGlzLmJvcmRlcih0aGlzLnByb3BzLnJldmlld3MsICdjb21tdW5pY2F0aW9uJyl9Pjwvc3Bhbj48ZGl2IHN0eWxlPXtudW1TdHlsZX0+eyh0aGlzLmF0dHJTY29yZSh0aGlzLnByb3BzLnJldmlld3MsICdjb21tdW5pY2F0aW9uJykpLnRvRml4ZWQoMSl9PC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXticmVha1N0eWxlfT5Mb2NhdGlvbiZuYnNwOyZuYnNwOzxzcGFuIHN0eWxlPXtib3JkZXJTdHlsZX0+PC9zcGFuPiA8c3BhbiBzdHlsZT17dGhpcy5ib3JkZXIodGhpcy5wcm9wcy5yZXZpZXdzLCAnbG9jYXRpb24nKX0+PC9zcGFuPjxkaXYgc3R5bGU9e251bVN0eWxlfT57KHRoaXMuYXR0clNjb3JlKHRoaXMucHJvcHMucmV2aWV3cywgJ2xvY2F0aW9uJykpLnRvRml4ZWQoMSl9PC9kaXY+PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXticmVha1N0eWxlfT5DaGVjay1JbiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxzcGFuIHN0eWxlPXtib3JkZXJTdHlsZX0+PC9zcGFuPiA8c3BhbiBzdHlsZT17dGhpcy5ib3JkZXIodGhpcy5wcm9wcy5yZXZpZXdzLCAnY2hlY2tpbicpfT48L3NwYW4+PGRpdiBzdHlsZT17bnVtU3R5bGV9PnsodGhpcy5hdHRyU2NvcmUodGhpcy5wcm9wcy5yZXZpZXdzLCAnY2hlY2tpbicpKS50b0ZpeGVkKDEpfTwvZGl2PjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17YnJlYWtTdHlsZX0+VmFsdWUmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8c3BhbiBzdHlsZT17Ym9yZGVyU3R5bGV9Pjwvc3Bhbj4gPHNwYW4gc3R5bGU9e3RoaXMuYm9yZGVyKHRoaXMucHJvcHMucmV2aWV3cywgJ3ZhbHVlJyl9Pjwvc3Bhbj48ZGl2IHN0eWxlPXtudW1TdHlsZX0+eyh0aGlzLmF0dHJTY29yZSh0aGlzLnByb3BzLnJldmlld3MsICd2YWx1ZScpKS50b0ZpeGVkKDEpfTwvZGl2PjwvZGl2PlxuICAgIDwvZGl2PilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdzOyJdfQ==
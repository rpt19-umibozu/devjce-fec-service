'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _airbnb_star = require('!file-loader!../../../airbnb_star.png');

var _airbnb_star2 = _interopRequireDefault(_airbnb_star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var divStyle = {
  'fontFamily': 'Roboto',
  'fontSize': '18px',
  'fontWeight': 'bold'
};

var imgStyle = {
  'width': '23px',
  'height': '23px',
  'position': 'relative',
  'top': '4px'
};

var Score = function (_React$Component) {
  _inherits(Score, _React$Component);

  function Score(props) {
    _classCallCheck(this, Score);

    return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, props));
  }

  _createClass(Score, [{
    key: 'score',
    value: function score(value) {
      if (value.length === 0) {
        return 0;
      }
      var finalScore = 0;
      var helperScore = 0;
      var reviews = value[0].reviews;
      // console.log('value of reviews', reviews.length);
      for (var i = 0; i < reviews.length; i++) {
        var scores = reviews[i].scores[0];
        // console.log(scores);

        helperScore += +scores.cleanliness;
        helperScore += +scores.communication;
        helperScore += +scores.checkin;
        helperScore += +scores.accuracy;
        helperScore += +scores.location;
        helperScore += +scores.value;

        finalScore += helperScore / 6;
        helperScore = 0;
      }
      return finalScore / reviews.length;
    }
  }, {
    key: 'totalReviews',
    value: function totalReviews(value) {
      if (value.length === 0) {
        return 0;
      } else {
        return value[0].reviews.length;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: divStyle },
        _react2.default.createElement('img', { src: _airbnb_star2.default, alt: 'Star', style: imgStyle }),
        ' ',
        this.score(this.props.reviews).toFixed(2),
        '    (',
        this.totalReviews(this.props.reviews),
        ' reviews)'
      );
    }
  }]);

  return Score;
}(_react2.default.Component);

_react2.default.createElement('img', { src: _airbnb_star2.default, alt: 'Star' });

exports.default = Score;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9zY29yZS5qc3giXSwibmFtZXMiOlsiZGl2U3R5bGUiLCJpbWdTdHlsZSIsIlNjb3JlIiwicHJvcHMiLCJ2YWx1ZSIsImxlbmd0aCIsImZpbmFsU2NvcmUiLCJoZWxwZXJTY29yZSIsInJldmlld3MiLCJpIiwic2NvcmVzIiwiY2xlYW5saW5lc3MiLCJjb21tdW5pY2F0aW9uIiwiY2hlY2tpbiIsImFjY3VyYWN5IiwibG9jYXRpb24iLCJzdGFyIiwic2NvcmUiLCJ0b0ZpeGVkIiwidG90YWxSZXZpZXdzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsV0FBVztBQUNiLGdCQUFjLFFBREQ7QUFFYixjQUFZLE1BRkM7QUFHYixnQkFBYztBQUhELENBQWY7O0FBTUEsSUFBSUMsV0FBVztBQUNiLFdBQVMsTUFESTtBQUViLFlBQVUsTUFGRztBQUdiLGNBQVksVUFIQztBQUliLFNBQU87QUFKTSxDQUFmOztJQU9NQyxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNYQSxLQURXO0FBR2xCOzs7OzBCQUVLQyxLLEVBQU87QUFDWCxVQUFJQSxNQUFNQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGVBQU8sQ0FBUDtBQUNEO0FBQ0QsVUFBSUMsYUFBYSxDQUFqQjtBQUNBLFVBQUlDLGNBQWMsQ0FBbEI7QUFDQSxVQUFJQyxVQUFVSixNQUFNLENBQU4sRUFBU0ksT0FBdkI7QUFDQTtBQUNBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxRQUFRSCxNQUE1QixFQUFvQ0ksR0FBcEMsRUFBeUM7QUFDdkMsWUFBSUMsU0FBU0YsUUFBUUMsQ0FBUixFQUFXQyxNQUFYLENBQWtCLENBQWxCLENBQWI7QUFDQTs7QUFFQUgsdUJBQWUsQ0FBQ0csT0FBT0MsV0FBdkI7QUFDQUosdUJBQWUsQ0FBQ0csT0FBT0UsYUFBdkI7QUFDQUwsdUJBQWUsQ0FBQ0csT0FBT0csT0FBdkI7QUFDQU4sdUJBQWUsQ0FBQ0csT0FBT0ksUUFBdkI7QUFDQVAsdUJBQWUsQ0FBQ0csT0FBT0ssUUFBdkI7QUFDQVIsdUJBQWUsQ0FBQ0csT0FBT04sS0FBdkI7O0FBRUFFLHNCQUFlQyxjQUFjLENBQTdCO0FBQ0FBLHNCQUFjLENBQWQ7QUFDRDtBQUNELGFBQVFELGFBQWFFLFFBQVFILE1BQTdCO0FBQ0Q7OztpQ0FFWUQsSyxFQUFPO0FBQ2xCLFVBQUlBLE1BQU1DLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsZUFBTyxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0QsTUFBTSxDQUFOLEVBQVNJLE9BQVQsQ0FBaUJILE1BQXhCO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsYUFBUTtBQUFBO0FBQUEsVUFBSyxPQUFPTCxRQUFaO0FBQ04sK0NBQUssS0FBS2dCLHFCQUFWLEVBQWdCLEtBQUksTUFBcEIsRUFBMkIsT0FBT2YsUUFBbEMsR0FETTtBQUFBO0FBQzJDLGFBQUtnQixLQUFMLENBQVcsS0FBS2QsS0FBTCxDQUFXSyxPQUF0QixDQUFELENBQWlDVSxPQUFqQyxDQUF5QyxDQUF6QyxDQUQxQztBQUFBO0FBQzRGLGFBQUtDLFlBQUwsQ0FBa0IsS0FBS2hCLEtBQUwsQ0FBV0ssT0FBN0IsQ0FENUY7QUFBQTtBQUFBLE9BQVI7QUFHRDs7OztFQTNDaUJZLGdCQUFNQyxTOztBQThDMUIsdUNBQUssS0FBS0wscUJBQVYsRUFBZ0IsS0FBSSxNQUFwQjs7a0JBRWVkLEsiLCJmaWxlIjoic2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0YXIgZnJvbSAnIWZpbGUtbG9hZGVyIS4uLy4uLy4uL2FpcmJuYl9zdGFyLnBuZyc7XG5cbmxldCBkaXZTdHlsZSA9IHtcbiAgJ2ZvbnRGYW1pbHknOiAnUm9ib3RvJyxcbiAgJ2ZvbnRTaXplJzogJzE4cHgnLFxuICAnZm9udFdlaWdodCc6ICdib2xkJ1xufVxuXG5sZXQgaW1nU3R5bGUgPSB7XG4gICd3aWR0aCc6ICcyM3B4JyxcbiAgJ2hlaWdodCc6ICcyM3B4JyxcbiAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyxcbiAgJ3RvcCc6ICc0cHgnXG59XG5cbmNsYXNzIFNjb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICB9XG5cbiAgc2NvcmUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IGZpbmFsU2NvcmUgPSAwO1xuICAgIGxldCBoZWxwZXJTY29yZSA9IDA7XG4gICAgbGV0IHJldmlld3MgPSB2YWx1ZVswXS5yZXZpZXdzO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWx1ZSBvZiByZXZpZXdzJywgcmV2aWV3cy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNjb3JlcyA9IHJldmlld3NbaV0uc2NvcmVzWzBdO1xuICAgICAgLy8gY29uc29sZS5sb2coc2NvcmVzKTtcblxuICAgICAgaGVscGVyU2NvcmUgKz0gK3Njb3Jlcy5jbGVhbmxpbmVzcztcbiAgICAgIGhlbHBlclNjb3JlICs9ICtzY29yZXMuY29tbXVuaWNhdGlvbjtcbiAgICAgIGhlbHBlclNjb3JlICs9ICtzY29yZXMuY2hlY2tpbjtcbiAgICAgIGhlbHBlclNjb3JlICs9ICtzY29yZXMuYWNjdXJhY3k7XG4gICAgICBoZWxwZXJTY29yZSArPSArc2NvcmVzLmxvY2F0aW9uO1xuICAgICAgaGVscGVyU2NvcmUgKz0gK3Njb3Jlcy52YWx1ZTtcblxuICAgICAgZmluYWxTY29yZSArPSAoaGVscGVyU2NvcmUgLyA2KTtcbiAgICAgIGhlbHBlclNjb3JlID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIChmaW5hbFNjb3JlIC8gcmV2aWV3cy5sZW5ndGgpO1xuICB9XG5cbiAgdG90YWxSZXZpZXdzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVswXS5yZXZpZXdzLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2IHN0eWxlPXtkaXZTdHlsZX0+XG4gICAgICA8aW1nIHNyYz17c3Rhcn0gYWx0PSdTdGFyJyBzdHlsZT17aW1nU3R5bGV9IC8+IHsodGhpcy5zY29yZSh0aGlzLnByb3BzLnJldmlld3MpKS50b0ZpeGVkKDIpfSAgICAoe3RoaXMudG90YWxSZXZpZXdzKHRoaXMucHJvcHMucmV2aWV3cyl9IHJldmlld3MpXG4gICAgPC9kaXY+KVxuICB9XG59XG5cbjxpbWcgc3JjPXtzdGFyfSBhbHQ9J1N0YXInIC8+XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlOyJdfQ==
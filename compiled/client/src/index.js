'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _score = require('./components/score.jsx');

var _score2 = _interopRequireDefault(_score);

var _ratings = require('./components/ratings.jsx');

var _ratings2 = _interopRequireDefault(_ratings);

var _reviews = require('./components/reviews.jsx');

var _reviews2 = _interopRequireDefault(_reviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      id: 10001,
      reviews: [],
      dataLoaded: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var url = window.location.href;
      var listingId = void 0;
      if (url.split.length) {
        listingId = url.split('/').pop();
      } else {
        listingId = '10001';
      }
      _jquery2.default.ajax({
        type: 'GET',
        url: "http://127.0.0.1:3004/listing",
        data: { data: listingId },
        dataType: 'text',
        success: function success(results) {
          var state = JSON.parse(results);
          _this2.setState(function () {
            return { reviews: state };
          });
        },
        error: function error() {
          console.log('error in onload API call');
        }
      });
    }

    // componentDidUpdate() {
    //   this.isLoaded();
    // }

    // handleChange(e) {
    //   e.preventDefault();
    //   let value = e.target.value;
    //   this.setState(() => ({id: value}));
    // }

    // isLoaded() {
    //   if (this.state.isLoaded === false && this.state.reviews !== []) {
    //     this.setState(() => ({dataLoaded: true}));
    //   }
    // }


  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_score2.default, { reviews: this.state.reviews }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_ratings2.default, { reviews: this.state.reviews }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_reviews2.default, { reviews: this.state.reviews })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJpZCIsInJldmlld3MiLCJkYXRhTG9hZGVkIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibGlzdGluZ0lkIiwic3BsaXQiLCJsZW5ndGgiLCJwb3AiLCIkIiwiYWpheCIsInR5cGUiLCJkYXRhIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzdWx0cyIsIkpTT04iLCJwYXJzZSIsInNldFN0YXRlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxVQUFJLEtBRE87QUFFWEMsZUFBUyxFQUZFO0FBR1hDLGtCQUFZO0FBSEQsS0FBYjtBQUZpQjtBQU9sQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEIsVUFBSUMsTUFBTUMsT0FBT0MsUUFBUCxDQUFnQkMsSUFBMUI7QUFDQSxVQUFJQyxrQkFBSjtBQUNBLFVBQUlKLElBQUlLLEtBQUosQ0FBVUMsTUFBZCxFQUFzQjtBQUNwQkYsb0JBQVlKLElBQUlLLEtBQUosQ0FBVSxHQUFWLEVBQWVFLEdBQWYsRUFBWjtBQUNELE9BRkQsTUFFTztBQUNMSCxvQkFBWSxPQUFaO0FBQ0Q7QUFDREksdUJBQUVDLElBQUYsQ0FBTztBQUNMQyxjQUFNLEtBREQ7QUFFTFYsYUFBSywrQkFGQTtBQUdMVyxjQUFNLEVBQUNBLE1BQU1QLFNBQVAsRUFIRDtBQUlMUSxrQkFBVSxNQUpMO0FBS0xDLGlCQUFTLGlCQUFDQyxPQUFELEVBQWE7QUFDcEIsY0FBSWxCLFFBQVFtQixLQUFLQyxLQUFMLENBQVdGLE9BQVgsQ0FBWjtBQUNBLGlCQUFLRyxRQUFMLENBQWM7QUFBQSxtQkFBTyxFQUFDbkIsU0FBU0YsS0FBVixFQUFQO0FBQUEsV0FBZDtBQUNELFNBUkk7QUFTTHNCLGVBQU8saUJBQU07QUFDWEMsa0JBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNEO0FBWEksT0FBUDtBQWFEOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzZCQUdPO0FBQ1AsYUFBUTtBQUFBO0FBQUE7QUFNTixzQ0FBQyxlQUFELElBQU8sU0FBUyxLQUFLeEIsS0FBTCxDQUFXRSxPQUEzQixHQU5NO0FBT04saURBUE07QUFRTixzQ0FBQyxpQkFBRCxJQUFTLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxPQUE3QixHQVJNO0FBU04saURBVE07QUFVTixzQ0FBQyxpQkFBRCxJQUFTLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxPQUE3QjtBQVZNLE9BQVI7QUFZRDs7OztFQS9EaUJ1QixnQkFBTUMsUzs7QUFrRXhCQyxtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTY29yZSBmcm9tICcuL2NvbXBvbmVudHMvc2NvcmUuanN4JztcbmltcG9ydCBSYXRpbmdzIGZyb20gJy4vY29tcG9uZW50cy9yYXRpbmdzLmpzeCc7XG5pbXBvcnQgUmV2aWV3cyBmcm9tICcuL2NvbXBvbmVudHMvcmV2aWV3cy5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IDEwMDAxLFxuICAgICAgcmV2aWV3czogW10sXG4gICAgICBkYXRhTG9hZGVkOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbGV0IGxpc3RpbmdJZDtcbiAgICBpZiAodXJsLnNwbGl0Lmxlbmd0aCkge1xuICAgICAgbGlzdGluZ0lkID0gdXJsLnNwbGl0KCcvJykucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RpbmdJZCA9ICcxMDAwMSc7XG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHVybDogXCJodHRwOi8vMTI3LjAuMC4xOjMwMDQvbGlzdGluZ1wiLFxuICAgICAgZGF0YToge2RhdGE6IGxpc3RpbmdJZH0sXG4gICAgICBkYXRhVHlwZTogJ3RleHQnLFxuICAgICAgc3VjY2VzczogKHJlc3VsdHMpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gSlNPTi5wYXJzZShyZXN1bHRzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe3Jldmlld3M6IHN0YXRlfSkpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBvbmxvYWQgQVBJIGNhbGwnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgLy8gICB0aGlzLmlzTG9hZGVkKCk7XG4gIC8vIH1cblxuICAvLyBoYW5kbGVDaGFuZ2UoZSkge1xuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgLy8gICB0aGlzLnNldFN0YXRlKCgpID0+ICh7aWQ6IHZhbHVlfSkpO1xuICAvLyB9XG5cbiAgLy8gaXNMb2FkZWQoKSB7XG4gIC8vICAgaWYgKHRoaXMuc3RhdGUuaXNMb2FkZWQgPT09IGZhbHNlICYmIHRoaXMuc3RhdGUucmV2aWV3cyAhPT0gW10pIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtkYXRhTG9hZGVkOiB0cnVlfSkpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG5cbnJlbmRlcigpIHtcbiAgcmV0dXJuICg8ZGl2PlxuICAgIHsvKiA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSl9PlxuICAgICAge3RoaXMuc3RhdGUuZGF0YUxvYWRlZCA9PT0gdHJ1ZSA/IHRoaXMuc3RhdGUucmV2aWV3cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0+SXRlbToge2l0ZW0uaWR9PC9vcHRpb24+XG4gICAgICB9KTogPG9wdGlvbj5Mb2FkaW5nLi4uPC9vcHRpb24+fVxuICAgIDwvc2VsZWN0PiAqL31cbiAgICA8U2NvcmUgcmV2aWV3cz17dGhpcy5zdGF0ZS5yZXZpZXdzfSAvPlxuICAgIDxicj48L2JyPlxuICAgIDxSYXRpbmdzIHJldmlld3M9e3RoaXMuc3RhdGUucmV2aWV3c30gLz5cbiAgICA8YnI+PC9icj5cbiAgICA8UmV2aWV3cyByZXZpZXdzPXt0aGlzLnN0YXRlLnJldmlld3N9IC8+XG4gIDwvZGl2Pilcbn1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19
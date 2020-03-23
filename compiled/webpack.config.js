'use strict';

var path = require('path');
var source_dir = path.join(__dirname, '/client/src');
var public_dir = path.join(__dirname, '/public');

module.exports = {
  entry: source_dir + '/index.jsx',
  output: {
    filename: 'bundle.js',
    path: '' + public_dir,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      include: source_dir,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      }
    }]
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwic291cmNlX2RpciIsImpvaW4iLCJfX2Rpcm5hbWUiLCJwdWJsaWNfZGlyIiwibW9kdWxlIiwiZXhwb3J0cyIsImVudHJ5Iiwib3V0cHV0IiwiZmlsZW5hbWUiLCJsaWJyYXJ5VGFyZ2V0IiwicnVsZXMiLCJ0ZXN0IiwiaW5jbHVkZSIsInVzZSIsImxvYWRlciIsIm9wdGlvbnMiLCJwcmVzZXRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQU9DLFFBQVEsTUFBUixDQUFYO0FBQ0EsSUFBSUMsYUFBYUYsS0FBS0csSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWpCO0FBQ0EsSUFBSUMsYUFBYUwsS0FBS0csSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFNBQXJCLENBQWpCOztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFNBQVVOLFVBQVYsZUFEZTtBQUVmTyxVQUFRO0FBQ05DLHlCQURNO0FBRU5WLGVBQVNLLFVBRkg7QUFHTk0sbUJBQWU7QUFIVCxHQUZPO0FBT2ZMLFVBQVE7QUFDTk0sV0FBTyxDQUNMO0FBQ0VDLFlBQU0sUUFEUjtBQUVFQyxlQUFTWixVQUZYO0FBR0VhLFdBQUs7QUFDSEMsZ0JBQVEsY0FETDtBQUVIQyxpQkFBUztBQUNQQyxtQkFBUyxDQUFDLHFCQUFELEVBQXdCLG1CQUF4QjtBQURGO0FBRk47QUFIUCxLQURLO0FBREQ7QUFQTyxDQUFqQiIsImZpbGUiOiJ3ZWJwYWNrLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xubGV0IHNvdXJjZV9kaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnL2NsaWVudC9zcmMnKTtcbmxldCBwdWJsaWNfZGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy9wdWJsaWMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5OiBgJHtzb3VyY2VfZGlyfS9pbmRleC5qc3hgLFxuICBvdXRwdXQ6IHtcbiAgICBmaWxlbmFtZTogYGJ1bmRsZS5qc2AsXG4gICAgcGF0aDogYCR7cHVibGljX2Rpcn1gLFxuICAgIGxpYnJhcnlUYXJnZXQ6ICdjb21tb25qczInLFxuICB9LFxuICBtb2R1bGU6IHtcbiAgICBydWxlczogW1xuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFwuanN4Py8sXG4gICAgICAgIGluY2x1ZGU6IHNvdXJjZV9kaXIsXG4gICAgICAgIHVzZToge1xuICAgICAgICAgIGxvYWRlcjogJ2JhYmVsLWxvYWRlcicsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgcHJlc2V0czogW1wiQGJhYmVsL3ByZXNldC1yZWFjdFwiLCBcIkBiYWJlbC9wcmVzZXQtZW52XCJdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9XG59OyJdfQ==
'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/abreviews'); //127.0.0.1:27017

//check for DB connection...can be removed once DB is validated
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connection established');
});

var reviewsSchema = mongoose.Schema({
  id: Number,
  name: String,
  reviews: [{
    username: String,
    date: String,
    text: String,
    avatar: String,
    scores: [{
      cleanliness: Number,
      communication: Number,
      checkin: Number,
      accuracy: Number,
      location: Number,
      value: Number
    }]
  }]
});

var Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports.Reviews = Reviews;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImNvbm5lY3QiLCJkYiIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJvbmNlIiwibG9nIiwicmV2aWV3c1NjaGVtYSIsIlNjaGVtYSIsImlkIiwiTnVtYmVyIiwibmFtZSIsIlN0cmluZyIsInJldmlld3MiLCJ1c2VybmFtZSIsImRhdGUiLCJ0ZXh0IiwiYXZhdGFyIiwic2NvcmVzIiwiY2xlYW5saW5lc3MiLCJjb21tdW5pY2F0aW9uIiwiY2hlY2tpbiIsImFjY3VyYWN5IiwibG9jYXRpb24iLCJ2YWx1ZSIsIlJldmlld3MiLCJtb2RlbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCO0FBQ0FELFNBQVNFLE9BQVQsQ0FBaUIsK0JBQWpCLEUsQ0FBbUQ7O0FBRW5EO0FBQ0EsSUFBSUMsS0FBS0gsU0FBU0ksVUFBbEI7QUFDQUQsR0FBR0UsRUFBSCxDQUFNLE9BQU4sRUFBZUMsUUFBUUMsS0FBUixDQUFjQyxJQUFkLENBQW1CRixPQUFuQixFQUE0QixtQkFBNUIsQ0FBZjtBQUNBSCxHQUFHTSxJQUFILENBQVEsTUFBUixFQUFnQixZQUFXO0FBQ3pCSCxVQUFRSSxHQUFSLENBQVksd0JBQVo7QUFDRCxDQUZEOztBQUlBLElBQUlDLGdCQUFnQlgsU0FBU1ksTUFBVCxDQUFnQjtBQUNsQ0MsTUFBSUMsTUFEOEI7QUFFbENDLFFBQU1DLE1BRjRCO0FBR2xDQyxXQUFTLENBQ1A7QUFDRUMsY0FBVUYsTUFEWjtBQUVFRyxVQUFNSCxNQUZSO0FBR0VJLFVBQU1KLE1BSFI7QUFJRUssWUFBUUwsTUFKVjtBQUtFTSxZQUFRLENBQ047QUFDRUMsbUJBQWFULE1BRGY7QUFFRVUscUJBQWVWLE1BRmpCO0FBR0VXLGVBQVNYLE1BSFg7QUFJRVksZ0JBQVVaLE1BSlo7QUFLRWEsZ0JBQVViLE1BTFo7QUFNRWMsYUFBT2Q7QUFOVCxLQURNO0FBTFYsR0FETztBQUh5QixDQUFoQixDQUFwQjs7QUF1QkEsSUFBSWUsVUFBVTdCLFNBQVM4QixLQUFULENBQWUsU0FBZixFQUEwQm5CLGFBQTFCLENBQWQ7O0FBRUFvQixPQUFPQyxPQUFQLENBQWVILE9BQWYsR0FBeUJBLE9BQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9hYnJldmlld3MnKTsgLy8xMjcuMC4wLjE6MjcwMTdcblxuLy9jaGVjayBmb3IgREIgY29ubmVjdGlvbi4uLmNhbiBiZSByZW1vdmVkIG9uY2UgREIgaXMgdmFsaWRhdGVkXG52YXIgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uZWN0aW9uIGVycm9yOicpKTtcbmRiLm9uY2UoJ29wZW4nLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2Nvbm5lY3Rpb24gZXN0YWJsaXNoZWQnKTtcbn0pO1xuXG5sZXQgcmV2aWV3c1NjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGlkOiBOdW1iZXIsXG4gIG5hbWU6IFN0cmluZyxcbiAgcmV2aWV3czogW1xuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBTdHJpbmcsXG4gICAgICBkYXRlOiBTdHJpbmcsXG4gICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICBhdmF0YXI6IFN0cmluZyxcbiAgICAgIHNjb3JlczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xlYW5saW5lc3M6IE51bWJlcixcbiAgICAgICAgICBjb21tdW5pY2F0aW9uOiBOdW1iZXIsXG4gICAgICAgICAgY2hlY2tpbjogTnVtYmVyLFxuICAgICAgICAgIGFjY3VyYWN5OiBOdW1iZXIsXG4gICAgICAgICAgbG9jYXRpb246IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogTnVtYmVyXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG59KTtcblxubGV0IFJldmlld3MgPSBtb25nb29zZS5tb2RlbCgnUmV2aWV3cycsIHJldmlld3NTY2hlbWEpO1xuXG5tb2R1bGUuZXhwb3J0cy5SZXZpZXdzID0gUmV2aWV3czsiXX0=
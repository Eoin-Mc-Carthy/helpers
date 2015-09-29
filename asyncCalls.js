var queue = function(q, self) {
  (q == false) || (function next(call) {
    (q.length) ? call(next.bind(null, q.shift().bind(self))) : call();
  })(q.shift().bind(self));
};


// eg

var call1 = function(callback) {
  setTimeout(function() {
    console.log("asyn function call. this has properties " + Object.keys(this));
    this.x /= 2;
    callback();
  }.bind(this), 1000);
};

var call2 = function(callback) {

  console.log(this.x);
};

queue([call1, call1, call2], {x: 16, y: 5});
queue([]); // no errors

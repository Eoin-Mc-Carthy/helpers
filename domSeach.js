var dH = (function() {
  var classes = {};
  var ids = {};
  var tags = {};

  var findByClass = function(className, elem) {
    if (elem)
      return Array.prototype.slice.call(elem.getElementsByClassName(className));
    if (!classes[className]) {
      classes[className] =
        Array.prototype.slice.call(document.getElementsByClassName(className));
    }
    return classes[className];
  };

  var findById = function(className, elem) {
    if (elem)
      elem.getElementById(className);
    if (!ids[className]) ids[className] = document.getElementById(className);
    return ids[className];
  };

  var findByTag = function(tagName, elem) {
    if (elem)
      return Array.prototype.slice.call(elem.getElementsByTagName(tagName));
    if (!tags[tagName]) {
      tags[tagName] =
        Array.prototype.slice.call(document.getElementsByTagName(tagName));
    }
    return tags[tagName];
  };

  var reset = function() {
    classes = {};
    ids = {};
    tags = {};
  };

  return {
    findById : findById,
    findByTag : findByTag,
    findByClass : findByClass,
    getInnerData: getInnerData
  };
}());

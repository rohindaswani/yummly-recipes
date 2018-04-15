var hideElements = function(nodes) {
  Array.from(nodes).forEach(function (node) {
    node.addEventListener("click", function (e) {
      var iCards = e.target.querySelector('ul.ingredients');
      iCards.classList.toggle('hide');
    })
  });
};

var randomizeCollection = function (items) {
  for (var i = items.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    var temp = items[i];
    items[i] = items[rand];
    items[rand] = temp;
  }
  return items;
};

var sortCollection = function (list, orderBy) {
  var nodes = list.children;
  nodes = orderBy(Array.prototype.slice.call(nodes));
  for (var i = 0; i < nodes.length; i++) {
    list.appendChild(nodes[i]);
  }
};

var sortOn = function (selector) {
  return function(items) {
    return items.sort(function (a, b) {
      var a = a.querySelector(selector).textContent;
      var b = b.querySelector(selector).textContent;
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
  }
};
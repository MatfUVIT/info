
/*
In object literal, the get or set notation for properties allows you to specify 
a function to be run when the property is read or written. 

You can also add such a property to an existing object, for example a prototype, 
using the Object.defineProperty function 
(which we previously used to create nonenumerable properties)
*/

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function () {
  return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};
Object.defineProperty(TextCell.prototype, "heightProp", {
  get: function() { return this.text.length; }
});

var cell = new TextCell("no\nway");
console.log(cell.heightProp);
// → 2

cell.heightProp = 100;
console.log(cell.heightProp);
// → 2



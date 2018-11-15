/*
 Convenient alternative is to declare an object (conventionally named exports) and add 
 properties to that whenever we are defining something that needs to be exported. 
 
 In the following example, the module function takes its interface object as an argument, 
 allowing code outside of the function to create it and store it in a variable. 
 
 Note: Outside of a function, this refers to the global scope object.
*/
(function (exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

  exports.name = function (number) {
    return names[number];
  };
  exports.number = function (name) {
    return names.indexOf(name);
  };
})(this.daniTeku = {});

console.log(daniTeku.name(daniTeku.number("Saturday")));
// → Saturday


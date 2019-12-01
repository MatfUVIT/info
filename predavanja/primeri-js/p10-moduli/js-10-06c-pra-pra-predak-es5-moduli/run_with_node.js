// load dependencies
require("./code/load")("code/ancestry.js", "code/calculation.js");

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);

/*
The following example program tries to convert a whole number to a string in any base 
(decimal, binary, and so on) by repeatedly picking out the last digit and then dividing 
the number to get rid of this digit. 

But the insane output that it currently produces suggests that it has a bug.
*/
"use strict";
function numberToString(n, base) {
  var result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}

console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…
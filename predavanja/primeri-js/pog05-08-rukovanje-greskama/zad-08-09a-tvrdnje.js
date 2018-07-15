/*
Assertions are a tool to do basic sanity checking for programmer errors. 

Consider this helper function, assert:
*/
"use strict";

function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "empty array in lastElement");
  return array[array.length - 1];
}

/*
This provides a compact way to enforce expectations, helpfully blowing up 
the program if the stated condition does not hold. 

For instance, the lastElement function, which fetches the last element from 
an array, would return undefined on empty arrays if the assertion was omitted. 

Fetching the last element from an empty array does not make much sense, so it 
is almost certainly a programmer error to do so.

Assertions are a way to make sure mistakes cause failures at the point of the 
mistake, rather than silently producing nonsense values that may go on to cause 
trouble in an unrelated part of the system.
*/
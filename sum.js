/** Returns sum of a and b or throws TypeError */
function sum(a,b) {
  if(typeof a !== "number" || typeof b !== "number") {
    throw new TypeError();
  }
  return a + b;
}

module.exports = sum;

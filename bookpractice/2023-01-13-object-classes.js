function range(from, to) {
  let r = Object.create(range.methods);
  r.from = from;
  r.to = to;
  return r;
}

range.methods = {
  includes(x) { return this.from <= x && x <= this.to; },

  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  // Return a string representation of the range
  toString() {return "(" + this.from + "..." + this.to + ")";}

};


let r = range(4,99);
r.includes(5);
const z = r.toString()
console.log(z) 
let F = function() {}; // This is a function object.
let p = F.prototype;
let c = p.constructor;
console.log(c === F);
// let o1 = Object.create({x:1, y:2});
// z = o1.x + o1.y

//  let o2 = Object.create(null);    // create an object that doesn't inherit anything. it doesn't even inherit toString().
// console.log(o2);

// Create an ordinary empty object
// let o3 = Object.create(Object.prototype);
// console.log(o3);

// Guard against potential modifications:
// let o = {x: "don't change this value"};
// library.function(Object.create(o));

let book = {
  "main title": "JavaScript",
  "sub-title": "The Definitive Guide",
  for: "all audiences",
  author: {
    firstname: "David",
    surname: "Flanagan"
  }
}

let surname = undefined;
if (book) {
  if (book.author) {
    surname = book.author.surname;
  }
}
surname = book && book.author && book.author.surname;


let author = book.author;
book.edition = 7;
book["main title"] = "ECMAScript";
author = book["author"];
author.surname = "alexa"
console.log(author);


//console.log(book.author);
// console.log(book["main title"])
// console.log(book["for"])

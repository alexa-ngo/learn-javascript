import { Circle } from "./slow";

import("./slow.js").then(Circle =>
  let newCircle = Circle.area())
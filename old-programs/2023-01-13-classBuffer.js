class Buffer {
  #size = 7;
  get stealth() { return this.#size; }
}

alexaSize = new Buffer();
console.log(alexaSize.stealth);
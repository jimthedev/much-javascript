function toTheMoon(x, y) {
  return Math.max(x, y);
}

console.assert(toTheMoon(5, 4)===5);
console.assert(toTheMoon(4, 5)===5);

function soLow(x, y) {
  return Math.min(x, y);
}

console.assert(soLow(5, 4)===4);
console.assert(soLow(4, 5)===4);

function muchOrder (x, y) {
  return [Math.max(x, y), Math.min(x, y)];
}

console.assert(muchOrder(5, 4)[0]===5);
console.assert(muchOrder(5, 4)[1]===4);

console.assert(muchOrder(4, 5)[0]===5);
console.assert(muchOrder(4, 5)[1]===4);

function areaDeclaration(width, height) {
  return width * height;
}

const areaExpression = function (width, height) {
  return width * height;
}

const areaArrow = (width, height) => width * height;

console.log(areaDeclaration(17, 5));
console.log(areaExpression(23, 7));
console.log(areaArrow(34, 17));

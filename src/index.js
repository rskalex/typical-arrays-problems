
exports.min = function min (array) {
  if (array.length === 0) {
    return 0;
  }
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (array.length === 0) {
    return 0;
  }
  return Math.mam.apply(null, array);
}

exports.avg = function avg (array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum / array.length; 
}

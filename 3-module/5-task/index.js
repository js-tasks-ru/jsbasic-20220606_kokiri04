function getMinMax(str) {
  let result = str
  .split(" ")
  .map(item => +item)
  .filter( function(v){return !(v !== v);});
  
  let minmax = {min: Math.min(...result),
  max: Math.max(...result)}

return minmax

}

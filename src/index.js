/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  const lengh = preferences.length;
  let newarr = new Array();
  let newarrn = new Array();
  let sumarray = 0;
  let x = 0;
  let y = 0;
  let z = 0;
  // console.log(preferences);
  if (lengh < 3) return sumarray;
  else if (lengh === 3) {
    x = preferences[0];
    y = preferences[1];
    z = preferences[2];
    if (z === 1)  {
      sumarray++;
    }
    return sumarray;
  }
  // console.log("mass: "+ preferences);
  for (let i = 0; i < lengh; i++) {
    let flag = true;
    x = preferences[i]; 
    y = preferences[x - 1];
    z = preferences[y - 1];
    if ((x === y) || (y === z) || (x == y == z) || (newarr[i] === preferences[i]) || (x === 0)) flag = false; 
    
    // console.log(" x: "+ x + " y: " + y + " z: " + z + " i " + i);
    if ((z === i + 1) && (flag === true)) {
      newarr[i] = x;
      newarr[x - 1] = y;
      newarr[y - 1] = z;
      newarrn[i] = i;
      newarrn[x - 1] = x - 1;
      newarrn[y - 1] = y - 1;
      sumarray = sumarray + 1;
      // console.log("newarr: " + newarr);
      // console.log("newarn: " + newarrn);
      // console.log("sum: " + sumarray);
      
      // i += 2;
    }  
  }
  return sumarray;
};

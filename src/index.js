function countPFromFact(number, p) {
  let numOfP = 0;
  let p0 = p;
	
  while (p0 <= number) {
  	numOfP += Math.floor(number/p0);
	p0 *= p;
  }

  console.log(numOfP);
  
  return numOfP;
}

function factorisationNum(number) {
  let obj = {};
  let p = 2;

  let j = 1;

  do {
    if (number % p === 0) {
      obj[p] = j;
      j++;
      number = number / p;
    }
	else {
	  j = 1;
  	  p++;
	}
  }
  while (p <= number);
  return obj;
}

module.exports = function getZerosCount(number, base) {
  // your implementation
  let factors = [];
  let obj = factorisationNum(base);
  for(let i in obj) {
    factors.push( Math.floor(countPFromFact(number, +i)/obj[i]) );
  }
  return Math.min.apply(null, factors);
}
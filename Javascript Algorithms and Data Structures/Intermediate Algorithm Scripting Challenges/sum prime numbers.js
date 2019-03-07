function sumPrimes(num) {

    // Sieve of Eratosthenes implemented from: https://www.sitepoint.com/community/t/javascript-homework-help-sieve-of-eratosthenes/305437/4

    //Create and populate number array
    var numbers = [];
    for (var i = 0; i <= num; i++) {
      numbers.push(true);
    }

    //Remove multiples of prime numbers
    for (var i = 2; i <= num; i++) {
      for (var j = i * i; j <= num; j += i) {
        numbers[j] = false;
      }
    }

    //Create and populate array of prime numbers
    var primes = [];
    for (var i = 2; i <= num; i++) {
      if (numbers[i]) {
        primes.push(i);
      }
    }

    return primes.reduce((a, b) => a + b, 0);
}

console.log(sumPrimes(977));

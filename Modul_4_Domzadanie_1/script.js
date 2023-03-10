// Задание от 07_03_2023
// Задача 1 -------------------------------------------
function minNumberOfTwo(num_1, num_2) {
  if (num_1 >= num_2) {
    if (num_1 > num_2) { return num_2 } 
      else { return 'Числа равны' }
  } else {
      return num_1    
  }
}
console.log(minNumberOfTwo(8,0))

// Задача 2 -------------------------------------------
function numberMaxToMin(num_3, num_4) {
  let nMin = num_3, nMax = num_4
  if (num_3 > num_4) {
    nMax = num_3
    nMin = num_4
  }
  for(let i = nMax; i >= nMin; i--) {
    if (i % 2 == 0) {console.log(i)}
  }
}
numberMaxToMin(40,30)

// Задача 3 -------------------------------------------
function power(base, exponent = 2) {
  let result = base
  for(let i = 1; i < exponent; i++){
    result *= base  
  }
  console.log(result)
}
power(15)

// Задача 4 -------------------------------------------
function numberSum(num_5) {
  let result = 0
  for(let i = 1; i <= num_5; i++) {
    result += i
  }
  console.log(result)
}
numberSum(10)

// Задача 5 -------------------------------------------
function evenOdd(n, m) {
  let sumEven = 0, sumOdd = 0
  let n_min = n, n_max = m
  if (n > m) { 
    n_min = m
    n_max = n
  }
  for ( i = n_min; i <= n_max; i++ ) {
    if( i % 2 == 0) {
      sumEven += i
    } else {
      sumOdd += i
    }
  }
  console.log(sumEven)
  console.log(sumOdd)  
}
evenOdd(1,5)

// Задача 6 -------------------------------------------
function maxString(arrayString) {
  if (arrayString.length != 0) {
    let str = ''
    for(i = 0; i < arrayString.length; i++) {
      if (arrayString[i].length > str.length) {
        str = arrayString[i]       
      }
    }
    return str
  } 
  return null 
}  
const c = ['aaaa','bbb','cccc','dddd']
const v = []
console.log(maxString(v))

const printPattern = (num) => {
  let result = ''
  // segitiga reversed
  for (let i = 1; i <= num; i++) {

    for (let j = 1; j < i; j++) {
      result += ' '
    }
    for (let k = i; k <= num; k++) {
      result += '* '
    }
    result += '\n'
  }
  
  // segitiga bawah
  for (let i = num - 1; i >= 1; i--) {

    for (let j = 1; j < i; j++) {
      result += ' '
    }

    for (let k = i; k <= num; k++) {
      result += '* '
    }
    result += '\n'
  }
  
  console.log(result)
}
const num = 5
printPattern(num)
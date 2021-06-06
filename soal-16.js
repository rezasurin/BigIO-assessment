
// const printPattern = (num) => {
//   let result = ''
//   let counter = 0
//   // segitiga kiri
//   for (let i = 1; i <= num; i++) {
//     for (let j = 0; j < i; j++) {
//       counter++
//       result += `${counter}`
//     }
//     result += '\n'
//     counter = 0
//   }
//   // segitiga bawah
//   for (let i = 1; i <= num - 1; i++) {
//     for (let j = 0; j < num - i; j++) {
//       counter++
//       result += `${counter}`
//     }
//     result += '\n'
//     counter = 0
//   }
//   console.log(result)
// }

const printPattern = (num) => {
  let result = ''
  let counter = 0
  // bagian atas
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
     counter++
      result += `${counter}`
    }
    for (let j = 0; j < (num - i) * 2 - 1; j++) {
      result += ' '
    }
    for (let j = i + 1 ; j > 0; j--) {
      result += `${counter}`
     counter--
    }
    result += '\n'
    counter = 0
  }
  // bagian bawah
  for (let i = num - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      counter++
      result += `${counter}`
    }
    for (let j = (num - i) * 2 - 1; j > 0; j--) {
      result += ' '
    }
    for (let j = num + 1; j > num - i; j--) {
      result += `${counter}`
      counter--
    }
    result += '\n'
    counter = 0
  }

  console.log(result)
}


const num = 5
printPattern(num)
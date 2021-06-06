// const inputWord = process.argv.slice(2)
const wordAndPalindrome = (str) => {
  let output = ''
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i]
  }
  console.log(str.join('')+output)
}

const inputWord = ['P', 'H', 'O', 'B', 'I', 'A']
wordAndPalindrome(inputWord)

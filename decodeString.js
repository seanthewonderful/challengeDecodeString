// Write your code below this line

function decode(str) {
    let num = parseInt(str.charAt(0))
    let char = ''
    for(i=1; i<str.length; i++){
        let newChar = str.charCodeAt(i)+num
        let charL = String.fromCharCode(newChar)
        char += charL
    }
    return char
}
console.log(decode('2abc'))


// const sentence = 'abcdefg.';

// const index = 3;

// console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`)

//Other answers

// const decoder = (str) =>{
//     decoded = ''
//     let first = Number(str[0])
//     for(i = 1; i <= str.length -1; i++){
//         let charCode = (str.charCodeAt(i)+first)
//         let decodedLetter = (String.fromCharCode(charCode))
//         decoded += decodedLetter
//     }return decoded
// }


const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let temp = ''
  return tutorials.map(function (tutorial){
    temp = tutorial.split(" ").map(function(word){return upperCased(word)})
    let sentence = ''
    for(const word of temp){
      sentence = sentence.concat(`${word} `);  
    }
    return sentence.slice(0, sentence.length-1)
  })
}
let sub = ''
function upperCased(keyWord){
  sub = keyWord.charAt(0).toUpperCase().concat(keyWord.slice(1))
  return sub
}
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
  return tutorials.map(tutorial => {
    let split = tutorial.split(" ")
    let capSplit = split.map(word => word[0].toUpperCase() + word.slice(1))
    let cased = capSplit.join(" ")
    return cased
  })
}

// const titleCased = 
// tutorials.map(function (tutorials) {
//   return Object.assign({}, tutorials, 
//     {
//       word.charAt(0).toUpperCase() + AudioWorkletNode.slice(1)
//     })
// })
// function titleCase(tutorials) {
//   return tutorials.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
// titleCase(tutorials)

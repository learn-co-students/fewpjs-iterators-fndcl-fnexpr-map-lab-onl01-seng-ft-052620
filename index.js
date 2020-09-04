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
  // console.log('TESTING', arg)
  // tutorials.map(function(tutorial) {
  //   tutorial.toLowerCase().split(' ').map(function(word) {
  //     return (word.charAt(0).toUpperCase() + word.slice(1));
  //   })
// })
tutorials.map((tutorial) => {
  let testToken = tutorial.split(' ')
  let capTestToken = testToken.map((word) => {
    word.charAt(0).toUpperCase() + word.slice(1)
  })
  let response = capTestToken.join(' ')
  console.log(response)
  // tutorial.toLowerCase().split(' ').map(function(word) {
  //   console.log((word.charAt(0).toUpperCase()));
  // })
  // return tutorials
})}

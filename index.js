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

// const titleCased = () => {
//   return tutorials.map(function(tutorial) {
//     return tutorial.split(" ").map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1)
//     }).join(" ")
//   })


  const titleCased = () => {
    return tutorials.map(tutorial => {
      let str = tutorial.split(" ");
      let result = str.map(title =>
        title.charAt(0).toUpperCase() + title.slice(1)
        )
        return result.join(" ");
    })

}

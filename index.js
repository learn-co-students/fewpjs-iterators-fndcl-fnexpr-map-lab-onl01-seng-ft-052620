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
  const titlecased_titles = tutorials.map(tutorial => titleCase(tutorial))
  return titlecased_titles
}

function titleCase(t){
  const t_array = t.split(" ")
  const new_array = t_array.map(word => titleCasify(word))
  const titlecased_title = new_array.join(" ")
  return titlecased_title
}


function titleCasify(word){
  const first_letter_cap = word.charAt(0).toUpperCase()
  const rest_of_word = word.slice(1, word.length)
  const titlecased_word = first_letter_cap + rest_of_word
  return titlecased_word
}

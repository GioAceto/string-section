function stringIncludes(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return true
    }
  }

  return false
}

function countLetter(haystack, needle) {
  let count = 0

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) count++
  }

  return count
}



function camelCase(sentence) {
  const arr = sentence.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase()
    const letters = arr[i].split('')

    letters[0] = letters[0].toUpperCase()

    arr[i] = letters.join('')
    arr[0] = arr[0].toLowerCase()
  }

  return arr.join('')
}

module.exports = {
  stringIncludes,
  countLetter,
  camelCase,
}

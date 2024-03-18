// Closure compiler - JSDOC
/**
 * @param {string} string
 * @returns {string} 
 */

const uncompress = (s) => {
  let result = ""
  let start = 0
  let end = 0
  while (end < s.length) {
    if ( /[a-z]/.test(s[end]) ) { // char = "alpha"    
      let char = s[end]
      let integer = Number(s.slice(start, end) )
      result += char.repeat(integer)
      end += 1
      start = end  
    } else { // char = "integer"
      end += 1
    }
  }
  console.log(result)
  return result
};

console.log(uncompress('2c3a1t'))
module.exports = uncompress;

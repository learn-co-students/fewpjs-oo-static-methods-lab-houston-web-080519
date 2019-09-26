class Formatter {
  static capitalize(string) {
    let capitalLetter = string.charAt( 0 ).toUpperCase() 
    let happyEnding = string.slice( 1 )
    let newString = capitalLetter + happyEnding 
    return newString
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g,'')
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let i = 0; i < arrayOfWords.length; i++ ) {
      if (i == 0) {
        result.push( this.capitalize( arrayOfWords[i] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[i] ) ) {
          result.push(arrayOfWords[i])
        } else {
          result.push(this.capitalize(arrayOfWords[i]))
        }
      }

    }
    return result.join( " " );
  }
}
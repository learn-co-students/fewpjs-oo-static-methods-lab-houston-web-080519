console.log("loaded");

class Formatter {
  //add static methods here
  static capitalize(someString) {
    return someString.replace(/^./, someString[0].toUpperCase());
  }

  static sanitize(someString) {
    return someString.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(someString) {
    let noCaps = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    let stringArray = someString.split(" ");
    let finalArray = [];
    console.log(stringArray);
    let newString = new String();
    for (let i = 0; i < stringArray.length; i++) {
      if (i == 0) {
        finalArray.push(this.capitalize(stringArray[i]));
      } else {
        if (noCaps.includes(stringArray[i])) {
          finalArray.push(stringArray[i]);
        } else {
          finalArray.push(this.capitalize(stringArray[i]));
        }
      }
    }
    return finalArray.join(" ");
  }
}

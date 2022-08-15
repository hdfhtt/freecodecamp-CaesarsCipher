function rot13(str) {
  // A is 65
  // Z is 90

  let result = String()

  for (let i in str) {
    let x = str.charCodeAt(i)
    let y

    if (x >= 65 && x <= 90) {
      if (x > 77) {
        y = x - 13
      } else {
        y = x + 13
      }
    } else {
      y = x
    }

    result = result.concat(String.fromCharCode(y))
  }

  return result
}

rot13('SERR CVMMN!')

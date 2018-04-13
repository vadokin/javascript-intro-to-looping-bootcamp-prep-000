function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop${i === 1 ? '' : 's' }`)
    }
  }
}

// function forLoop(array) {
//   for (var i = 0; i < 25; i++) {
//     if (i === 1) {
//       array.push(`I am ${i} strange loop${i === 1 ? '' : 's' }`)
//     }
//   }
// }

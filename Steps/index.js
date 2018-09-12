// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

// RECURSIVE SOLUTION:

// function steps(n, row = 0, stair = '') {
//   if (n === 0) {
//     return;
//   }
//
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }
//
//   const add = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair + add);
// }

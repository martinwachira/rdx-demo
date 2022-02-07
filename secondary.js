// import First from "./test-leet2.js";
// import Second from "./test-leet3.js";

// First();
// Second();

// console.log("sdhfshkf");

/** ------------------------------------------------------------------------ */

/**
 * Grading method
 */
const grades = [73, 67, 38, 33];

function gradding(grades) {
  // Write your code here
  for (var i = 0; i < grades.length; i++) {
    let m = 0;
    if (grades[i] >= 38) {
      m = Math.ceil(grades[i] / 5) * 5;
      if (m - grades[i] < 3) {
        console.log("Pass", (grades[i] = m));
      } else {
        console.log("Pass", grades[i]);
      }
    } else {
      console.log("Fail", grades[i]);
    }
  }
  return grades;
}

gradding(grades);

/** ------------------------------------------------------------------------ */

/**
 * There is a large pile of socks that must be paired by color.
 * Given an array of integers representing the color of each sock,
 * determine how many pairs of socks with matching colors there are.
 */

const ar = [1, 2, 3, 4, 2, 3, 2, 2, 2, 1, 5, 6, 7, 5, 6, 7];
const n = 9;
function sockMerchant(n, ar) {
  let x = 0;
  let counts = [];
  let newAr = [];

  for (let i = 0; i < ar.length; i++) {
    x = ar[i];
    counts[x] = counts[x] >= 1 ? counts[x] + 1 : 1
//     if (counts[x] >= 1) {
//       counts[x] = counts[x] + 1;
//     } else {
//       counts[x] = 1;
//     }
    if (counts[x] % 2 === 0) {
      newAr.push(x);
    }
  }
  console.log("newAr =", newAr, "-- length of newAr =", newAr.length);
  return newAr.length;
}

sockMerchant(n, ar);

/** ------------------------------------------------------------------------ */

import First from "./test-leet2.js";
import Second from "./test-leet3.js";

First();
Second();

// console.log("sdhfshkf");

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

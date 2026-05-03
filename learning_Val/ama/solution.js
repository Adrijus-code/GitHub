function solution(d, s) {
  let book = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };
  if (!Number.isInteger(d) || d < 1 || d > 5) {
    console.log("D must be an integer and between 1-5");
    return;
  } else if (!book.hasOwnProperty(s)) {
    console.log("S must be between one and five");
    return;
  }

  return d * book[s];
}

console.log(solution(5, "five"));
console.log(solution(6, "five"));
console.log(solution(3, "six"));
console.log(solution(3.4, "two"));

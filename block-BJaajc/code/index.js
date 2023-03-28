function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(str) {
  if (typeof str === "string") {
    str = str.toLowerCase();
  }
  else {
    str = String(str)
  }
  let length = str.length;
  let mid = Math.floor(length / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function getCircumference(r) {
  let circumference =  Math.round(2 * Math.PI * r);

  return `The circumference is ${circumference}`;
}

getCircumference(12);

// Create a function called `getArea`:

function getArea(r) {
  let area = Math.PI * r * r;
   area = area.toFixed(2)
  return `The area is ${area}`;
}

getArea(12);

module.exports = { fullName, isPalindrome, getCircumference, getArea };

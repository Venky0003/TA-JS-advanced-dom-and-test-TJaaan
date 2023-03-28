const {
  fullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require('./index.js');

test('FullName is Arya Stark', () => {
  expect(fullName('Arya', 'Stark')).toMatch('Arya Stark');
});

const nameArr = ['Jon', 'Snow'];

test('FullName is Jon Snow', () => {
  expect(fullName(nameArr[0], nameArr[1])).toMatch('Jon Snow');
});

test('FullName is Robb Stark', () => {
  expect(fullName('Robb', 'Stark').toLowerCase()).toContain('stark');
});

test('FullName not to be Arya Stark', () => {
  expect(fullName('Sansa', 'Stark')).not.toBe('Stark');
});

test('FullName not to Equal Arya Stark', () => {
  expect(fullName('Tyriopn', 'Lannister')).not.toEqual('Stark');
});

test('FullName not to contain Stark', () => {
  expect(fullName('Robert', 'Baratheon')).not.toContain('Stark');
});

// isPalindrome

test('check value is palindrome or not Madam, true', () => {
  expect(isPalindrome('Madam')).toEqual(true);
});

test('check value is palindrome or not Naman, true', () => {
  expect(isPalindrome('Naman')).toEqual(true);
});

test('check value is palindrome or not 1221, true', () => {
  expect(isPalindrome(1221)).toBe(true);
});

test('check value is palindrome or not Aman, false', () => {
  expect(isPalindrome('Aman')).not.toBe(true);
});

test('check value is palindrome or not 1234, false', () => {
  expect(isPalindrome(1234)).toEqual(false);
});

test('check value is palindrome or not tent, false', () => {
  expect(isPalindrome('tent')).not.toEqual(true);
});

//getCircumference

test('expected radius 12 and circumference is 75', () => {
  expect(getCircumference(12)).toBe('The circumference is 75');
});

test('expected radius 12 and circumference is 13', () => {
  expect(getCircumference(2)).toEqual('The circumference is 13');
});

test('expected radius 9 and circumference is 57', () => {
  expect(getCircumference(9)).toEqual('The circumference is 57');
});

test('expected radius 3 and circumference is not 19', () => {
  expect(getCircumference(3)).not.toEqual('The circumference is 18');
});

test('expected radius 130 and circumference is not 817', () => {
  expect(getCircumference(130)).not.toBe('The circumference is 816');
});

test('expected radius 30 and circumference is not 189', () => {
  expect(getCircumference(30)).not.toEqual('The circumference is 189');
});

test('expect radius 12 and total area is 452.39', () =>{
  expect(getArea(12)).toBe('The area is 452.39');
});

test('expect radius 3 and total area is 28.27', () =>{
  expect(getArea(3)).toEqual('The area is 28.27');
});

test('expect radius 3 and total area is 28.27', () =>{
  expect(getArea(3)).toEqual('The area is 28.27');
});

test('expect radius 2.5 and total area is not 19.60', () =>{
  expect(getArea(2.5)).not.toEqual('The area is 19.60');
});

test('expect radius 2.5 and total area is not 19.60', () =>{
  expect(getArea(2.5)).not.toEqual('The area is 19.60');
});

test('expect radius 6 and total area is not 108', () =>{
  expect(getArea(6)).not.toBe('The area is 108');
});
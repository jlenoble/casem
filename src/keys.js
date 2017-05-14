const characters = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 'EXE', 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
  70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
];

const keyCodes = {};

characters.forEach((character, i) => {
  keyCodes[character] = i;
});

export function getCharacter (keyCode) {
  const character = characters[keyCode];
  if (!character) {
    throw new Error('No character defined for key code', keyCode);
  }
  return character;
}

export function getKeyCode (character) {
  const keyCode = keyCodes[character];
  if (!character) {
    throw new Error('No key code found for character', character);
  }
  return keyCode;
}

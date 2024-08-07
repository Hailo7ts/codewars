/**
 * Fake Binary
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 
 * and above with '1'. Return the resulting string. Note: input will never be an empty string
 * 
 * P: a string of numbers
 * R: a sting of numbers as a 1 or 0
 * E:assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
 * assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
 * assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
 * P:
 */

const fakeBin=(x) => x.split('').map(num => num < 5 ? num = '0': num = '1').join('')
Array = require('../index');


test('finding the index of num 2 in an array', () => {
    expect([0, 1, 2].indexOf(2)).toBe(2);
});

test('finding the index of letter c in an array', () => {
    expect(['a', 'b', 'c'].indexOf('c')).toBe(2);
});
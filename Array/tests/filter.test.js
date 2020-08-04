Array = require('../index')

test('finding even numbers on an array', () => {
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(n => n % 2 === 0)).toStrictEqual([2, 4, 6, 8, 10]);
});

test('finding vowels on an array', () => {
    const vowels = ['a', 'e', 'i'];
    expect(['a', 'c', 'f', 'g', 'h', 'j', 'k', 'u', 'p', 'e'].filter(letter => vowels.includes(letter))).toStrictEqual(['a', 'e']);
});
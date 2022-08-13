const randomNumber = () => Math.floor(Math.random() * 100);

const uperCase = (phrase) => phrase.toUpperCase();

const firstLetter = (phrase) => [...phrase][0];

const joinWords = (a, b) => a.concat(b);

module.exports = { randomNumber, uperCase, firstLetter, joinWords };

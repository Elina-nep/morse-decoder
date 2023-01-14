const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let string = ''
    if (expr.length < 10) return '0'
    for (let i = 0; i < expr.length; i += 10) {
        let letter = '';
        let bitLetter = expr.slice(i, i + 10);
        if (bitLetter === '**********') {
            string += ' ';
            continue;
        }
        for (let j = 0; j < bitLetter.length; j += 2) {
            let symbol = bitLetter.slice(j, j + 2)
            letter += ((symbol == '00') ? '' : (symbol == '10' ? '.' : '-'));
        }
        string += MORSE_TABLE[letter];
    }
    return string;
}

module.exports = {
    decode
}
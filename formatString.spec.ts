import { FormatString } from './formatString';

describe('FormatString function', () => {
    test('If it receives a string containing characters A-Z or a-z, it must return those characters', () => {
        const firstSentence = 'HELLO';
        const secondSentence = 'hello';
        const thirdSentence = 'Hello';
        const sentenceNotAllowed = '##Hello';

        expect(FormatString(firstSentence)).toBe(firstSentence);
        expect(FormatString(secondSentence)).toBe(secondSentence);
        expect(FormatString(thirdSentence)).toBe(thirdSentence);
        expect(FormatString(sentenceNotAllowed)).toBe('Hello');
    });

    test('If it receives a string containing characters from 0-9, it must return those characters', () => {
        const firstSentence = 'Hello1234';
        const sentenceNotAllowed = '##Hello1234!!!';

        expect(FormatString(firstSentence)).toBe(firstSentence);
        expect(FormatString(sentenceNotAllowed)).toBe(firstSentence);
    });

    test('If it receives a string containing characters -, _ and spaces, it must return those characters', () => {
        const sentence = 'h-e-l-l-o w_o_r_l_d';
        const sentenceNotAllowed = '***h-e-l-l-o w_o_r_l_d***';

        expect(FormatString(sentence)).toBe(sentence);
        expect(FormatString(sentenceNotAllowed)).toBe(sentence);
    });

    test('If it receives a string containing Ñ or ñ characters, it must not return those characters', () => {
        const sentence = 'HelloÑñ';

        expect(FormatString(sentence)).toBe('Hello');
    });

    test('If it receives a string that does not contain any A-Z, a-z, 0-9, -, _ or space characters, it must return the string "ERROR"', () => {
        const errorMessage = 'ERROR';
        const sentenceNotAllowed = '*#%&/()';

        expect(FormatString(sentenceNotAllowed)).toBe(errorMessage);
    });
});
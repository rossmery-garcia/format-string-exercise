export function FormatString(sentence: string): string {
    let result = [];

    let i = 0;
    let j = 0;

    while(i < sentence.length) {
        if(
            (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) || //-- (A-Z)
            (sentence.charCodeAt(i) >= 97 && sentence.charCodeAt(i) <= 122) || //-- (a-z)
            (sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(i) <= 57) || //-- (0-9)
            sentence.charCodeAt(i) == 32 || //-- space
            sentence.charCodeAt(i) == 45 || //-- (-)
            sentence.charCodeAt(i) == 95 //-- (_)
        ) {
            result[j] = sentence[i];
            j += 1;
        }
        
        i += 1;
    }

    return j == 0 ? 'ERROR' : result.join('');
}

export function FormatStringV2(sentence: string): string {
    let result: string[] | string = [];

    let i = 0;

    while(i < sentence.length) {
        if(
            (sentence[i] >= 'A' && sentence[i] <= 'Z') ||
            (sentence[i] >= 'a' && sentence[i] <= 'z') ||
            (sentence[i] >= '0' && sentence[i] <= '9') ||
            sentence[i] == ' ' ||
            sentence[i] == '-' ||
            sentence[i] == '_'
        ) {
            result = [...result, sentence[i]];
        }
        
        i += 1;
    }

    return result.length == 0 ? 'ERROR' : result.join('');
}
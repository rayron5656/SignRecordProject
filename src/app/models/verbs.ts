export function makeVerbVars(baseVerb : string) : string {
    if(baseVerb.length < 2) return "";
    const verbVars = [];
    var stringToReturn = '';
    const baseVerbLength = baseVerb.length;
    const baseVerbLastChar = baseVerb[baseVerbLength - 1];
    const baseVerbLastCharIsVowel = isVowel(baseVerbLastChar);
    const baseVerbLastCharIsY = baseVerbLastChar === 'y';
    const baseVerbLastCharIsE = baseVerbLastChar === 'e';
    const baseVerbLastCharIsH = baseVerbLastChar === 'h';
    const baseVerbLastCharIsConsonant = !baseVerbLastCharIsVowel && !baseVerbLastCharIsY && !baseVerbLastCharIsE && !baseVerbLastCharIsH;
    // make variations 
    if (baseVerbLastCharIsVowel) {
        console.log('vowel');
        verbVars.push(baseVerb + 's');
        verbVars.push(baseVerb + 'ed');
        verbVars.push(baseVerb + 'ing');
        verbVars.push('to '+baseVerb );

    }
    if (baseVerbLastCharIsY) {
        console.log('y');
        verbVars.push(baseVerb.substring(0, baseVerbLength - 1) + 'ies');
        verbVars.push(baseVerb.substring(0, baseVerbLength - 1) + 'ied');
        verbVars.push(baseVerb + 'ing');
        verbVars.push('to '+baseVerb );
    }
    if (baseVerbLastCharIsE) {
        console.log('e');
        verbVars.push(baseVerb + 's');
        verbVars.push(baseVerb + 'd');
        verbVars.push(baseVerb.substring(0, baseVerbLength - 1) + 'ing');
        verbVars.push('to '+baseVerb );

    }
    if (baseVerbLastCharIsH) {
        console.log('h');
        verbVars.push(baseVerb + 'es');
        verbVars.push(baseVerb + 'ed');
        verbVars.push(baseVerb + 'ing');
        verbVars.push('to '+baseVerb );
    }
    if (baseVerbLastCharIsConsonant) {
        console.log('consonant');
        verbVars.push(baseVerb + 's');
        verbVars.push(baseVerb  + 'ed');
        verbVars.push(baseVerb  + 'ing');
        verbVars.push('to '+baseVerb );

    }
    verbVars.push(baseVerb);
    // make string to return
    for (let i = 0; i < verbVars.length; i++) {
        if( i === verbVars.length - 1){
            stringToReturn += verbVars[i];
        }
        else {
            stringToReturn += verbVars[i] + ',';
        }
    }
    return stringToReturn;

} 

function isVowel(baseVerbLastChar: string) {
    return baseVerbLastChar === 'a' || baseVerbLastChar === 'i' || baseVerbLastChar === 'o' || baseVerbLastChar === 'u' ;

}

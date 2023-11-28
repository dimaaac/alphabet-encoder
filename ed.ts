// --------------------------------
// ED - Encoder Decoder All-in-one
//               -
// Made in TypeScript, with true 
// love.
// --------------------------------

function encode(text: string): string {
    let encodedResult = "";
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (char.match(/[a-zA-Z]/)) {
            // Convert the character to its position in the alphabet
            let position = char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            encodedResult += position + ' ';
        } else {
            // Keep non-alphabetic characters unchanged
            encodedResult += char;
        }
    }
    return encodedResult.trim();
}

function decode(encodedText: string): string {
    let decodedResult = "";
    let positions = encodedText.split(' ');
    for (let i = 0; i < positions.length; i++) {
        let position = positions[i];
        if (/^\d+$/.test(position)) {
            // Convert the position back to the corresponding letter
            let letter = String.fromCharCode(parseInt(position) + 'A'.charCodeAt(0) - 1);
            decodedResult += letter;
        } else {
            // Keep non-digit characters unchanged
            decodedResult += position;
        }
    }
    return decodedResult;
}

// Example usage
let textToEncode: string = "HELLO"; // modify "HELLO"
let encodedText: string = encode(textToEncode);
console.log("Encoded:", encodedText);

let decodedText: string = decode(encodedText);
console.log("Decoded:", decodedText);

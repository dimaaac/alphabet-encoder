// --------------------------------
// ED - Interactive Encorder/Decoder
//               -
// Made in TypeScript, with true 
// love. yes once again,
//                         ^bydima
// --------------------------------

function encode(text) {
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

function decode(encodedText) {
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

// Interactive usage
let choice = prompt("chooose an oper-ation: (1) encod, (2) decod");
if (choice === "1") {
    let textToEncode = prompt("entah da text to encod:");
    let encodedText = encode(textToEncode);
    console.log("encoded bitch:", encodedText);
} else if (choice === "2") {
    let encodedText = prompt("entah the motherfuxkin encoded code to decode:");
    let decodedText = decode(encodedText);
    console.log("decoded the encoded code:", decodedText);
} else {
    console.log("r u stupid motherfuxker? do u hav nuclear dibil desease? enter 1 or 2 nex time");
}

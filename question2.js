// Write a simple encryption function
// that takes a sentence and prints out zeros and ones as follows:
// for each word, if the length of the word is divisible by 3 print 0 else print 1.

function encryptText(text) {

    let textArray = text.split(" ")
    let message = "";

    for (let i = 0; i < textArray.length; i++) {

        if (textArray[i].length % 3 == 0) {
            message += 0;
        } else {
            message += 1;
        }
    }
    return message;
}

console.log(encryptText("How are you?")); // this must print 001
console.log(encryptText("The quick brown fox jumps over the lazy dog")); // this must print 011011010

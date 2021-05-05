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

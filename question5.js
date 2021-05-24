const findCommonLettersInWords = (words) => {
    let CommonLetter = [];
    for (let indexFirstWord = 0; indexFirstWord < words[0].length; indexFirstWord++) {
        for (let indexRestWords = 1; indexRestWords < words.length; indexRestWords++) {
            if (!words[indexRestWords].includes(words[0][indexFirstWord])) {
                break
            }
            CommonLetter.push(words[0][indexFirstWord]);
        }
    }
    if (CommonLetter.length < words.length ) {
        CommonLetter = ['']
    } else {
        for (let k = 0; k < CommonLetter.length-1; k++) {
            if(CommonLetter[k] == CommonLetter[k+1]){
                return CommonLetter=[CommonLetter[k]]
            }
        }
    }


    return CommonLetter;
}


console.log(findCommonLettersInWords(["Saleem", "Soda", "Khaled"])); // output: ['a']
console.log(findCommonLettersInWords(["Pepsi", "Kitkat", "Oreo"])); // output: []

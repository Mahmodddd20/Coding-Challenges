function splitString(str) {
    let resultArray = [];
    let tempString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            resultArray.push(tempString.trim());
            tempString = "";
        }
        tempString += str[i];
    }
    resultArray.push(tempString.trim());

    return resultArray;
}

function ReverseString(text) {
    let list = splitString(text);
    let result = [];
    for (let i = list.length; i >= 0; i--) {
        result.push(list[i]);
    }

    return result.join(" ");
}

console.log(ReverseString("How are you?"));
console.log(ReverseString("This is me"));

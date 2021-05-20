function ReverseString(text) {

    let list = text.split(" ");
    let result = [];
    for (let i = list.length; i >= 0; i--) {
        result.push(list[i]);
    }
    return result.join(" ");
}

console.log(ReverseString("How are you?"));
console.log(ReverseString("This is me"));

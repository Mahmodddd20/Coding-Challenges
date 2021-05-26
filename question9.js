const firstRow = "qwertyuiop";
const secondRow = "asdfghjkl";
const thirdRow = "zxcvbnm";

function whichRow(string) {
    if (firstRow.includes(string[0])) {
        return firstRow;
    } else if (secondRow.includes(string[0])) {
        return secondRow;
    } else if (thirdRow.includes(string[0])) {
        return thirdRow;
    }
}

function findWords(list) {
    let result = [];

    for (let i = 0; i < list.length; i++) {
        let word = list[i].toLowerCase();
        let row = whichRow(word);
        let temp = "";

        for (let j = 0; j < word.length; j++) {
            if (!row.includes(word[j])) {
                temp = "";
                break;
            }
            temp += word[j]
        }
        if (temp.length > 0) {
            result.push(list[i]);
        }
    }
    return result;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

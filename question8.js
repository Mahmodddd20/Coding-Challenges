function autoComplete(list) {

    list = list.sort();
    let listIgnoredCase = list.map(function (value) {
        return value.toLowerCase();
    });

    const prompt = require('prompt-sync')();
    const search = prompt('search for: ');

    let result = [];
    for (let i = 0; i < list.length; i++) {
        let word = listIgnoredCase[i];
        if (word.includes(search)) {
            result.push(list[i]);
        }
    }
    return result;
}

console.log(autoComplete(["Saleem", "Salim", "Salih"]));

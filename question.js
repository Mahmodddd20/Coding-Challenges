function printLikes(users) {
    let message = "";

    if (users.length == 0) {
        return;
    }

    if (users.length == 1) {
        message = users[0];
    }

    if (users.length == 2) {
        message = users[0] + " and " + users[1];
    }

    if (users.length > 2) {
        message = users[0] + ", " + users[1] + " and " + (users.length - 2) + " others like your post";
    }

    console.log(message);
}


printLikes(['Saleem', 'Osama']) // Saleem and Osama
printLikes(['Saleem', 'Ameer', 'Khaled', 'Ahmed']) // Saleem, Ameer, and 2 others like your post
printLikes(['Fatima']) // Fatima
printLikes([]) //
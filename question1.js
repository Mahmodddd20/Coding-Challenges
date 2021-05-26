// When you post a message on Facebook,
// depending on the number of people who like your post,
// Facebook displays different information.
// If no one likes your post, it doesn’t display anything.
// If only one person likes your post, it displays: the user name
// If two people like your post, it displays: [Friend 1] and [Friend 2]
// If more than two people like your post, it displays:
// [friend 1], [friend 2], and [number of other people] others like your post.
//
// Write a function that accepts a list of user names.
// Display a message based on the above pattern.
//
// Input: [‘Saleem’, ‘Osama’]
// Output: Saleem and Osama
// Input: [‘Saleem’, ‘Ameer’, ‘Khaled’, ‘Ahmed’]
// Output: Saleem, Ameer, and 2 others like your post

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
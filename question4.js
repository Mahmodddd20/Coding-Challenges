// Design a cinema seats booking system.
// The cinema hall seats are designed to be in a V shape.
// So the first line has the largest number of seats
// and the last line of the hall contains the least amount of seats.
// The booking must be in order from the first line till the end (rule of the cinema).
// Each line will have fewer seats compared to the front one by 1 seat.
// So if the first line has 3 seats then the second line contains 2
// and the last one contains 1 only.Write a function that takes two arguments:
// the number of seats available in the first line,
// the second argument is the number of registered visitors in the hall.
// Print out the percentage of seats booking from the actual total seat numbers.
// Input: 7, 7
// Output: 25%
// Explanation:
// The first line in the hall contains 7 seats,
// which means we have 28 seats in total in that hall.
// Then the percentage of the booked seats is 7 * 100 / 28 = 25
// Input: 10, 20
// Output: 36%

const calculateSeatsBookingPercentage = (firstRowSeatsNumber, bookedSeats) => {
    let message;

    if (firstRowSeatsNumber == 0) {
        message = "The firstRowSeatsNumber must be > 0";
        return message;
    }

    function calculateNumberOfSeats(num) {
        for (let i = num - 1; i >= 1; i--) {
            num += i;
        }
        return num;
    }

    let allSeats = calculateNumberOfSeats(firstRowSeatsNumber);
    let percentageOfSeatsBooking = (bookedSeats * 100) / allSeats;
    percentageOfSeatsBooking = Math.floor(percentageOfSeatsBooking);

    message = percentageOfSeatsBooking + "%";

    return message;
}

console.log(calculateSeatsBookingPercentage(7, 7)); // output: 25%
console.log(calculateSeatsBookingPercentage(10, 20)); // output: 36%
console.log(calculateSeatsBookingPercentage(0, 7)); // output: The firstRowSeatsNumber must be > 0

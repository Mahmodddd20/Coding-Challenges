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

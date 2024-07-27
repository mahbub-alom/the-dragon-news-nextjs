export function showCurrentDate() {
    const today = new Date();
    
    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Array of month names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Get the current day of the week
    const dayName = weekdays[today.getDay()];
    
    // Get the current month
    const monthName = months[today.getMonth()];
    
    // Get the current date
    const date = today.getDate();
    
    // Get the current year
    const year = today.getFullYear();
    
    // Format the string to display
    const formattedDate = `${dayName}, ${monthName} ${date}, ${year}`;
    
    return formattedDate;
    // Display the formatted date
    // console.log(formattedDate);
}

// Call the function to display the date
// showCurrentDate();

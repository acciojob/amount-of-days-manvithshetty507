//your JS code here. If required.
const year = prompt('Enter a year')

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366; 
    }
    return 365; 
}

alert(isLeapYear(year))
/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE


function daysUntilDate(dob) {
  var today = new Date();
  var bday = dob.split('/').join(" ")

  var month = today.getMonth();
  var day = today.getDate();
  var year = today.getFullYear();

  bday = bday.slice(0,bday.length-4) + "2016";

  today = month + " " + day + " " + year;

  console.log(today);
  console.log(bday);

  var tomm = new Date(bday);
  console.log(tomm);

  var diff = today - bday;
  return diff;
}

daysUntilDate("05/18/1992");

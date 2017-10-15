//Set variables based on the element id'slet userChoise = document.querySelector('#form')
let form = document.querySelector('#userChoise')
let button = document.querySelector('#button')

//Declare variables
//Set array values to false
let seats = [, false, false, false, false, false, false, false, false, false, false];
let firstclass = 1;
let economy = 6;
let client = 0;

//Creating a function bookingSeat
//Using while loop
let bookingSeat =() => {
    if (client <= 10) //setting condition to 10 seats
        while ((firstclass != 0) && (economy != 0)) {
            userChoise = parseInt(document.getElementById("form").userChoise.value);
            //setting conditin for first class
            if (userChoise == 1) {
                if (firstclass <= 5 && seats[firstclass] == 0) {
                    var check = window.confirm("You are booked in first class, seat " + firstclass + ".  Would you like to make another booking?");
                    if (check) {
                        seats[firstclass] - 1 //remove seat from first firstclass
                        ++client; //add client to variable
                        ++firstclass; //add seat for first class
                        return check 
                    }
                    else {
                        window.alert("Flight leaves in 3 hours");
                        break;
                    }
                }
                else if (firstclass > 5 && economy <= 10) {
                    var conf = window.confirm("First class is full. Would you like a seat in the economy class?");

                    if (conf) {
                        window.confirm("You are booked in economy class, seat " + economy + ".  Would you like to make another booking?");
                        seats[economy] - 1; //remove seat from economy class
                        ++client; //add client to variable
                        ++economy; //add seat for economy class
                        return conf
                    }
                    else {
                        window.alert("Flight leaves in 3 hours");
                        break;
                    }
                } // end else if (condition)                    
            } // end if
            //setting condition for economy class
            else if (userChoise == 2) {
                if (economy <= 10 && seats[economy] == 0) {
                    var check = window.confirm("You are booked in economy class, seat " + economy + ".  Would you like to make another booking?");
                    if (check)
                    seats[economy] - 1;
                    ++client;
                    ++economy;
                    return check
                }

                else if (economy > 10 && firstclass <= 5) {
                    var conf = window.confirm("Economy is full. Would like a seat in first class?");
                        if (conf) {
                        window.confirm("You are booked in first class, seat " + firstclass + ".  Would you like to make another booking?");
                        seats[firstclass] - 1;
                        ++client;
                        ++firstclass;
                        return conf
                    }
                    else {
                        window.alert("Flight leaves in 3 hours");
                    }
                } else if (economy > 10 && firstclass > 5) {
                    window.confirm("Sorry, we are fully booked.")
                    break;
                }
            }
        } // end of first if
}// end function

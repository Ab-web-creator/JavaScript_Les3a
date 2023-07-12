// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

/* Task 1 */
// Write a function called getEmailDomain that expects an email address
// and returns the domain name. A domain name is what comes after the @ in the address

function getEmailDomain (emailAddress) {
    const startOfTheDomain = emailAddress.indexOf("@");
    const domainName = emailAddress.slice(startOfTheDomain + 1);
    return domainName;
}

    console.log(getEmailDomain("n.eeken@novi-education.nl"));
    console.log(getEmailDomain("t.mellink@novi.nl"));
    console.log(getEmailDomain("a.wiersma@outlook.com"));


// ---- Expected outcomes:
// getEmailDomain("n.eeken@novi-education.nl") returns novi-education.nl
// getEmailDomain("t.mellink@novi.nl") returns novi.nl
// getEmailDomain("a.wiersma@outlook.com") returns outlook.com




/* Exercise 2 */
// Write a function called typeOfEmail that expects an email address.
// The function checks whether the email address has a novi domain (Medewerker), a novi-education domain (Student),
// or external domain (such as gmail or outlook)

function typeOfEmail(emailAddress) {
    if (emailAddress.includes("@novi-education.nl")) {
        return "Student";
    }
    else if (emailAddress.includes("@novi.nl")) {
        return "Medewerker";
    } else {
        return "External";
    }
}

    console.log(typeOfEmail("n.eeken@novi-education.nl"));
    console.log(typeOfEmail("t.mellink@novi.nl"));
    console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
    console.log(typeOfEmail("a.wiersma@outlook.com"));
    console.log(typeOfEmail("abekeasian@gmail.com"));

// ---- Expected outcomes:
// typeOfEmail("n.eeken@novi-education.nl") returns "Student"
// typeOfEmail("t.mellink@novi.nl") returns "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") returns returns "External" <-- this one should work too!
// typeOfEmail("a.wiersma@outlook.com") returns "External"



/* Command 3 */
// Write a function called checkEmailValidity that expects an email address and checks if the email address is valid.
// The function returned true or false, depending on the outcome.
// An email address is valid when:
// * It contains an @
// * There is no , in it
// * None . in occurs as the very last character (so hotmail.com is valid, just like outlook.nl, but outlooknl. is not)

function checkEmailValidity(email) {
    if (!email.includes('@') || email.includes(',') || email.endsWith('.')) {
        return false;
    } else {
        return true;
    }
}


console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("n.eeken@novi,nl"));



// ---- Expected outcomes:
// checkEmailValidity("n.eeken@novi.nl") returns true - because @ and dot are in the right place
// checkEmailValidity("tessmellink@novi.nl") returns true - because @ and period are in the right place
// checkEmailValidity("n.eekenanovi.nl") returns false - because no @
// checkEmailValidity("n.eeken@novinl.") returns false - because the period cannot be last
// checkEmailValidity("tessmellink@novi,nl") returns false - because it contains a comma


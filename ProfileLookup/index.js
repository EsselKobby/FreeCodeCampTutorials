// Sample contacts array
var contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"]
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"]
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    // Loop through the contacts array
    for (var i = 0; i < contacts.length; i++) {
        // Check if the firstName matches the given name
        if (contacts[i].firstName === name) {
            // Check if the property exists in the contact
            if (contacts[i].hasOwnProperty(prop)) {
                // Return the value of the property
                return contacts[i][prop];
            } else {
                // If the property does not exist, return "No such property"
                return "No such property";
            }
        }
    }
    // If no matching name is found, return "No such contact"
    return "No such contact";
}

// Running the test cases
console.log(lookUpProfile("Kristian", "lastName")); // Should return "Vos"
console.log(lookUpProfile("Sherlock", "likes")); // Should return ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes")); // Should return an array
console.log(lookUpProfile("Bob", "number")); // Should return "No such contact"
console.log(lookUpProfile("Bob", "potato")); // Should return "No such contact"
console.log(lookUpProfile("Akira", "address")); // Should return "No such property"

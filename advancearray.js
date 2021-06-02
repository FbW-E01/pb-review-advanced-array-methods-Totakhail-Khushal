



// Use advanced array methods for all of these(forEach, map, etc.).You might have to search for an appropriate method to use on MDN.



// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.

const personsData = [


    { number: 001, name: "Wassily Kandinsky", url: "https://en.wikipedia.org/wiki/Wassily_Kandinsky" },
    { number: 002, name: "John Smith", url: "https://John.smith.com" },
    { number: 003, name: "Stefan stolz ", url: "https://stefanstolz.com" },
    { number: 004, name: "Khushal Totakhail", url: "www.khushaltotakhail.com" },
    { number: 005, name: "Albert Alberto", url: "www.albert alberto.com" },
    { number: 006, name: "Razia Sultana", url: "https://raziasultana.com" },
    { number: 007, name: "Hamid Hamdan", url: "www.habimd hamdan.com" },
    { number: 008, name: "Be Svendsen", url: "https://Be Svendsen.de" },
    { number: 009, name: "charles", url: "https://charlets.de" },
    { number: 010, name: "Alex chapper", url: "https://Alex chapperde" },

]
// console.log(persons);
console.log("Q- 1");


// 2. Then based on the array, create a new array that contains just the names.

function justNames(personsData) {
    console.log(personsData.name);
}
console.log("Q- 2");


personsData.forEach(justNames)


console.log("===================================================================");

// 3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL.Otherwise, print "Invalid URL for" and the value of the name property.

function url(personsData) {
    // console.log(personsData.url);
    if (personsData.url.startsWith("https")) {

        console.log(personsData.url);
    } else {
        console.log("invalid URL for", personsData.name);
    }

}
console.log("Q- 3");

personsData.forEach(url);

console.log("=================================================================");




// 4. Sort the array to a random order.

personsData.sort(function () {
    return Math.round(Math.random() * 9) - 5;
    //  console.log(this.number);
});
console.log("Q- 4");

console.log(personsData);


console.log("========================================================");

// 5. Sort the array based on the "number" property, with the lowest number first.

const personsInfo = [

    { number: 01, name: "Wassily Kandinsky", url: "https://en.wikipedia.org/wiki/Wassily_Kandinsky" },
    { number: 02, name: "John Smith", url: "https://John.smith.com" },
    { number: 03, name: "Stefan stolz ", url: "https://stefanstolz.com" },
    { number: 04, name: "Khushal Totakhail", url: "www.khushaltotakhail.com" },
    { number: 05, name: "Albert Alberto", url: "https://albert alberto.com" },
    { number: 06, name: "Razia Sultana", url: "https://raziasultana.com" },
    { number: 07, name: "Hamid Hamdan", url: "www.habimd hamdan.com" },
    { number: 08, name: "Be Svendsen", url: "https://Be Svendsen.de" },
    { number: 09, name: "charles", url: "https://charlets.de" },
    { number: 10, name: "Alex chapper", url: "https://Alex chapperde" },


];
personsInfo.sort(function (a, b) {
    return a.number - b.number
})
const min = personsInfo[0],
    max = personsInfo[personsInfo.length - 1]


console.log("Q- 5");

console.log(min);


console.log("======================================================================");




// 6. Sort the array based on the "number" property, with the highest number first.


personsInfo.sort(function (a, b) {
    return a.number - b.number
})
const minimum = personsInfo[0],
    maximum = personsInfo[personsInfo.length - 1]


console.log("Q- 6");

console.log(maximum);




// function findHighestNumber(number) {
//     let inputs = number.filter((value, i) => number.indexOf(value) === i)
//     let maximum = Math.max(...number);
//     let min = Math.min(...number);

//     return +(-min);
// }
// console.log(maximum);


console.log("====================================================================");


// 7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string`" and "`.
const nameSorted = personsInfo.map(function (a) {
    return a.name;
})
nameSorted.join(", ");
const stringArray = nameSorted.toString();
const splitComma = stringArray.replace("charles,", " charles and ");

console.log("Q- 7");

console.log(splitComma);
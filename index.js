const myInformation = require("./information");
const cowsay = require("cowsay");

const message = `I am ${myInformation.name}, wilder in ${myInformation.campus}, and I love coding!`;

console.log(cowsay.say({ text: message, T: "U" }));

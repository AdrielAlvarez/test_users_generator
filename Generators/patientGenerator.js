// const dateGen = require("./dateGenerator")

function genPatient(e) {
    let arr=[];
    let firstName = "Training_" + e.maleFirstName[Math.floor(Math.random() * 31)];
    let last = e.lastName[Math.floor(Math.random() * 31)];
    let genderType = 0 == Math.floor(Math.random() * 2) ? "Male" : "Female";
    let email = `${firstName}${last}_training_@${e.emailDomain[[Math.floor(Math.random() * 5)]]}`;
    let DOB = dateGenerator(1940,1960);
    letpersonAddress = e.address[Math.floor(Math.random() * 300)];

    arr.push(firstName,last,genderType,email,DOB);
    return arr;

}
// module.exports = genPatientArr
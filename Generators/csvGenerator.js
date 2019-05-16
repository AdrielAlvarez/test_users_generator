// const DATA = require("./rawTrainingData.json");
// const genPatient = require("./patientGenerator");
const leads = [["firstName", "lastName", "gender", "email", "dob", "address"]];
function genCsv(num){
    for (let i = 0; i < num; i++) {
        let currentArr = genPatient(DATA);
        leads.push(currentArr);
    }
    let csvContent = "data:text/csv;charset=utf-8," + leads.map(e => e.join(",")).join("\n");
    let encodedUri = encodeURI(csvContent);
    return encodedUri
}
// module.exports = genCsv

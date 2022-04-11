let Ganesh = {
    Name: "Ganeh Murmu",
    Age: 21,
    "Roll Number": 2009015,
    "Registration Number": 20030440013,
    Address: {
        State: "Jharkhand",
        City: "Jamshedpur",
        Village: "Matigora (Sitadanga)",
        District: "East Singhbhum",
        "Pin Code": 832111
    },
    Subjects: ["DBMS", "OS", "CS", "FLAT", "DM" ],
    Greet: function() {
        console.log("Hello Everyone");
    }
}

console.log(Ganesh.Name);
console.log(Ganesh.Address.State);
console.log(Ganesh.Subjects[2]);
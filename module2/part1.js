let Ganesh = {
    Name: "Ganeh Murmu",
    Address: {
        State: "Jharkhand",
        City: "Jamshedpur",
        Village: "Matigora (Sitadanga)",
        District: "East Singhbhum",
        "Pin Code": 832111
    },
}

console.log("Object before modification");
console.log(Ganesh);

Ganesh.Address.City = "Ranchi";

console.log("Object after modification");
console.log(Ganesh);


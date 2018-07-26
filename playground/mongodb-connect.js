const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log("Error: Could not connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");
    db.collection('Todos').insertOne({
        name: "Jordan",
        age: 25
    }, (err, result) => {
        if(err) {
            return console.log("Error: Could not insert todo", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Products').insertOne({
        name: "Chair",
        price: 60
    }, (err, result) => {
        if(err) {
            return console.log("Error: Could not insert todo", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});
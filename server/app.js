var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient
,   assert = require('assert');


var fronthelperdb;

app.use(bodyParser.json())
app.post('/login', (req, res) => {
    res.set('Access-Control-Allow-Origin','*');
 
    var user = req.body.phone;
    var pwd = req.body.password;
   
    var users = fronthelperdb.collection('users');
    users.find({username:user, password:pwd}, {name:1}).toArray((err,results)=>{
        if (err)
            return res.status(500).send(err);
        
        if (results.length == 0)
            return res.status(401).send("username or password don't exist")
        else
            return res.status(200).send(results[0]);
    });
})

app.listen(3000, ()=>{
    var url = 'mongodb://localhost:27017/fronthelper';
    MongoClient.connect(url, (err, db) =>{
        assert.equal(null, err);
        fronthelperdb = db;
        console.log("Listening on 3000, and db connected")
    })
});


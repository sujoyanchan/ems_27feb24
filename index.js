const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/save', (req, res) => {
    const url = 'mongodb+srv://root:AOINeKdnaADyEv4U@cluster0.cefigcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(url);
    const db = client.db('emsmerndb');
    const coll = db.collection('employee');
    const record = { '_id': req.body.id, 'name': req.body.name, 'salary': req.body.salary };
    coll.insertOne(record)
        .then(result => res.send(result))
        .catch(error => res.send(error));

})

app.get('/read', (req, res) => {
    const url = 'mongodb+srv://root:AOINeKdnaADyEv4U@cluster0.cefigcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(url);
    const db = client.db('emsmerndb');
    const coll = db.collection('employee');
    coll.find({}).toArray()
        .then(result => res.send(result))
        .catch(error => res.send(error));

})

app.put('/modify', (req, res) => {
    const url = 'mongodb+srv://root:AOINeKdnaADyEv4U@cluster0.cefigcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(url);
    const db = client.db('emsmerndb');
    const coll = db.collection('employee');
    coll.updateOne({ '_id': req.body.id }, { '$set': { 'name': req.body.name, 'salary': req.body.salary } })
        .then(result => res.send(result))
        .catch(error => res.send(error));

})

app.delete('/remove', (req, res) => {
    const url = 'mongodb+srv://root:AOINeKdnaADyEv4U@cluster0.cefigcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(url);
    const db = client.db('emsmerndb');
    const coll = db.collection('employee');
    coll.deleteOne({ '_id': req.body.id })
        .then(result => res.send(result))
        .catch(error => res.send(error));

})

app.listen(9000, () => { console.log('server ready @ 9000'); });

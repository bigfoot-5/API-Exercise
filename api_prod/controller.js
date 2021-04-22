'use strict';

var properties = require('../package.json');
// var distance = require('../service/distance');
// var products = require('../products.json');
var productModel = require('../api_prod/products.js');
var users= [100,200,300]
const MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost/EmployeeDB';
var str = "";
var controllers = {
//    about: function(req, res) {
//        var abs = properties;
//        var aboutInfo = {
//            name: properties.name,
//            version: properties.version,
//            main: properties.main
//        }
//        res.json(aboutInfo);
//    },
//    getDistance: function(req, res) {
//            distance.find(req, res, function(err, dist) {
//                if (err)
//                    res.send(err);
//                res.json(dist);
//            });
//        },
// //    getEmployee: function(req, res) {
//         var MongoClient = require('mongodb').MongoClient;
//         var url = "mongodb://localhost:27017/";
//         var myobj = { name: "Company Inc", address: "Highway 37" };
//         MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         dbo.collection("customers").insertOne(myobj, function(err, res) {
//             if (err) throw err;
//             res.send(myobj);
//             console.log("1 document inserted");
//             db.close();
//     });

//     });
// }, 
    getItems:  function (req,res){
          const products = productModel.find({});
            try {
                res.send(products);
            } catch (error) {
                res.status(500).send(error);
            }              
    }, 

module.exports = controllers;



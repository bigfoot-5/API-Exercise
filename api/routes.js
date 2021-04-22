'use strict';

const controller = require('./controller'); 
var productModel = require('../api/products.js');
module.exports = function(app) {
   app.route('/rest/v1/products')
        .get(controller.getItems);
   app.route('/rest/v1/users/:userid/cart')
        .put(controller.putItems); 
   app.route('/rest/v1/users/:userid/cart')
        .get(controller.retrieve);      

//    app.post("/rest/v1/products", (request, response) => {
//         const products = new productModel(request.body);

//         try {
//              products.save(
//                 {
//                 productId: "12445dsd234",
//                 category: "Modile",
//                 productName: "Samsung",
//                 productModel: "GalaxyNote",
//                 price: 700,
//                 availableQuantity: 10
//                 },
//             );
//             response.send(products);
//         } catch (error) {
//             response.status(500).send(error);
//         }
//         });     
//    app.route('/UserCart/PUT')
//         .get(controller.putItem);
//    app.route('/UserCart/GET')
//         .get(controller.getItem);                        
};
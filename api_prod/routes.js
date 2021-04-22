'use strict';

const controller = require('./controller'); 
var productModel = require('../api_prod/products.js');
module.exports = function(app) { 
   app.route('/rest/v1/products')
        .get(controller.getItems);                              
};
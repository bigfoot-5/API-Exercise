const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
//mongoose.connect('mongodb://localhost/subscribers',{useNewUrlParser: true});
app.use(express.json());
var microservice = prompt("to run products enter 1, else enter 0","");
const routes_client = require('./api/routes');
const routes_product = require('./api_prod/routes');
if(microservice==1){
   routes_product(app);
}
else{
   routes_client(app);
}
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});

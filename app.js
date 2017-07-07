var settings = require('./settings.json')
var express = require('express');
var logger = require ('morgan');
var path = require('path');

//Domular Classes
const DomularDevice = require('./domular-class.js');

let devices = new Array();

var wwwServer = express();

console.log(settings);
init();

function init() {
    let root = path.join(__dirname, settings.www.root);
    
    wwwServer.use(logger('short'));
    wwwServer.use(express.static(root));
    wwwServer.listen(settings.www.port);
}

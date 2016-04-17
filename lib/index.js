// --------------------
// bluebird2 module
// --------------------

// load bluebird
var Bluebird = require('bluebird'),
    makeBluebird = require('bluebird/js/main/promise');

// export Bluebird
module.exports = Bluebird;

// add clone method
// returns a new instance of Bluebird
var clone = function() {
    var Bluebird = makeBluebird();
    Bluebird.clone = clone;
    return Bluebird;
};

Bluebird.clone = clone;

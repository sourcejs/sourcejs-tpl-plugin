// NodeJS module. Included automatically from app.js.
// Can expose some APIs and configure ExpressJS routes

var someModule = require('some-module');

global.app.get('/plugin/api', someModule(req, res));
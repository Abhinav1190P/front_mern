const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/api/', 
        { target: 'https://deploy-server1.herokuapp.com/' }
    ));
}
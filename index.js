var hapi = require('hapi');

var server = new hapi.Server();

var config = {
  host : 'localhost',
  port : '8080'
};

server.connection({
  host: config.host,
  port: config.port
});

//about page - route
server.route({
  method:'GET',
  path: '/about',
  handler: function(request, response){
    var content = '';
    content += '<p>This is the about page. Click here to <a href="./">homepage</a></p>';
    content += '<p>Current route: <em>/about</em></p>';
    response(content);
  }
});

//index page - route
server.route({
  method:'GET',
  path: '/',
  handler: function(request, response){
    var content = '';
    content += '<p>Welcome to homepage. Click here for <a href="./about">about page</a></p>';
    content += '<p>Current route: <em>/</em></p>';
    response(content);
  }
});

console.log('Server has started at http://'+ config.host + ':' + config.port);
server.start();

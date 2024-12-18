import jsonServer from 'json-server'
const server = jsonServer.create();
const router = jsonServer.router("jobs.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port);
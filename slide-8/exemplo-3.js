import { createServer } from 'node:http';
const server = createServer((_request, response) => {
    // Simulates CPU intensive work
    let iteration = 1e7;
    while (iteration > 0) {
        iteration--;
    }
    console.log(`Handling request from ${process.pid}`)
    response.end(`Hello from ${process.pid}\n`)
});
server.listen(8080, () => console.log(`Started at ${process.pid}`));
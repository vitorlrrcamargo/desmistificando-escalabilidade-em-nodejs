import { createServer } from 'node:http';
import { cpus } from 'node:os';
import cluster from 'node:cluster';
if (cluster.isPrimary) {
    const availableCpus = cpus();
    console.log(`Clustering to ${availableCpus.length} processes`);
    for (const _ of availableCpus) {
        cluster.fork();
    }
} else {
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
}
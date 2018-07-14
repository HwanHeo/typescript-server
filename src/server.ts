import http from 'http';
import express from 'express';

export class Server {
    app: express.Application;
    
    constructor() {
        this.app = express();        
    }
}

const server: Server = new Server();

http.createServer(server.app).listen(3000, () => {    
    console.log('App is running in the Background');
});

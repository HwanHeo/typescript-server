import * as express from 'express';

export class Server {
    app: express.Application;
    
    constructor() {
        this.app = express();
    }
}
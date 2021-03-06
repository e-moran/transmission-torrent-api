import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/apiRoutes';

class App {
    public app: express.Application;
    public apiRoutes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.apiRoutes.routes(this.app);
    }

    private config() {
        // support application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;

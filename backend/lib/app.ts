import * as express from "express";
import * as bodyParser from "body-parser";
import { PeopleRoute } from "./routes/PeopleRoute";
import * as mongoose from "mongoose";
import * as cors from "cors";

class App {

    public app: express.Application;
    public peopleRoute: PeopleRoute = new PeopleRoute();
    public mongoUrl: string = 'mongodb://mongo:27017/peopleDB';

    constructor() {
        this.app = express();
        this.config();
        this.peopleRoute.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors())
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true});        
    }

}

export default new App().app;
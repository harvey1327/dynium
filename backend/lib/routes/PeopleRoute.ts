import {Request, Response} from "express";
import { PeopleController } from "../controllers/PeopleController";

export class PeopleRoute {   
    private peopleController: PeopleController = new PeopleController();
    
    public routes(app): void { 

        app.route('/people').get((req: Request, res: Response) => {
            if(typeof req.query.name === 'string'){
                this.peopleController.getPeopleByName(req.query.name, res)
            }
        })

        app.route('/people/all').get((req: Request, res: Response) => {
            this.peopleController.getAllPeople(req, res)
        })
        
        app.route('/people').post((req: Request, res: Response) => {
            this.peopleController.addNewPeople(req.body["people"], res)
        })
    }
}
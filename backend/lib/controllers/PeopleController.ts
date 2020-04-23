import People, { IPeople } from '../models/People';
import { Response, Request } from 'express';

export class PeopleController{

    public addNewPeople (people: IPeople[], res: Response) {
        People.insertMany(people, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        })
    }

    public getPeopleByName (name: string, res: Response) {
        People.find({"name": { $regex: '.*' + name + '.*', $options: "i" }}, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

    public getAllPeople (req: Request, res: Response) {
        People.find({}, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

}
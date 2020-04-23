import * as mongoose from 'mongoose';

export interface IPeople extends mongoose.Document {
    name: string;
    species: string;
    height: number;
}

const PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is missing'
    },
    species: {
        type: String,
        required: 'species is missing'
    },
    height: {
        type: Number,
        required: 'height is missing'      
    }
});

export default mongoose.model<IPeople>('People', PeopleSchema);
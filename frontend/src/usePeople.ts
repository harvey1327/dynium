import {useCallback, useState} from "react";
import {getPeople} from "./getPeople";

export interface Person {
    _v: number;
    _id: string;
    name: string;
    species: string;
    height: number;
}

export const usePeople = () => {
    const [people, setPeople] = useState<Person[]>()

    const update = useCallback(
        async (name: string) => {
            const request = await getPeople(name);
            if(request.ok){
                setPeople(await request.json())
            }
        }
    , [])

    return {people, update}
}
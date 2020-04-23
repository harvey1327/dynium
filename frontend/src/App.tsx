import React from 'react';
import {usePeople} from "./usePeople";

export const App = () => {

    const { people, update } = usePeople()

  const onKeyUp = (e: any) => update(e.target.value)
    const data = people?.map(({name, species, height}) => (
            <div key={name}>
                <span>Name: {name}, </span>
                <span>Species: {species}, </span>
                <span>Height: {height}</span>
            </div>
        ))

  return (
      <div>
          <input type="text" placeholder="search" onKeyUp={onKeyUp}/>
          {data}
      </div>
  )
}

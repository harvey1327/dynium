export const getPeople = (name: string) =>
    fetch(`http://localhost:4000/people?name=${name}`, {
        method: 'GET',
    });
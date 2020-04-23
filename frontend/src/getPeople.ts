export const getPeople = (name: string) =>
    fetch(`http://backend:4000/people?name=${name}`, {
        method: 'GET',
    });
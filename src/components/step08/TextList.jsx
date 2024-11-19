import React from 'react';

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

function TextList(props) {
    const listItems = people.map((k) => {
        return <li>{k}</li>
    });
    console.log(listItems)
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default TextList;
import React from 'react';

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
}, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
}, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];

// 리스트 렌더링에서는 반드시 유일한 값을 갖는 key가 필요하다.
function TextList2(props) {
    const listItems = people.map((k) => {
        return <li key={k.id}>{k.name}</li>
    });

    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default TextList2;
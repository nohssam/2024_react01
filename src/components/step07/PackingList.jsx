import React from 'react';
import Item from './Item';

function PackingList(props) {
    return (
        <section>
            <h1> 조건부 렌더링 </h1>
            <ul>
                <Item
                    isPacked={true}
                    name="고길동"
                />
                <Item
                    isPacked={false}
                    name="둘리"
                />
                <Item
                    isPacked={true}
                    name="희동이"
                />
            </ul>
        </section>
    );
}

export default PackingList 
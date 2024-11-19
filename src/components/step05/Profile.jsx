import React from 'react';
import Avatar from './Avatar';

function Profile() {
    return (
        <div className='App'>
            <ul>
                <li><Avatar
                    size={100}
                    person={{ name: 'hong', imageId: 'YfeOqp2' }}
                /></li>

                <li><Avatar
                    size={80}
                    person={{ name: 'park', imageId: 'OKS67lh' }}
                /></li>
                <li><Avatar
                    size={60}
                    person={{ name: 'Lee', imageId: '1bX5QH6' }}
                /></li>
            </ul>
        </div >
    );
}

export default Profile;
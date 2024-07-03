import React from 'react';
import UserFavoriteFoods from './UserFavoriteFoods';
import UserUsername from './UserUsername';

export default function UserProfile() {
    return (
        <div id="user-profile">
            <UserUsername />
            <div>
                <span>Email: </span>
                <span>example@gmaol.com</span>
            </div>
            <UserFavoriteFoods />
        </div>
    )
}

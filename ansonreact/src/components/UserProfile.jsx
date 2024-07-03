import React from 'react';
import UserFavoriteFoods from './UserFavoriteFoods';

export default function UserProfile() {
  return (
        <div id="user-profile">
            <div>
                <span>Email: </span>
                <span>example@gmaol.com</span>
            </div>
            <UserFavoriteFoods />
        </div>
    )
}

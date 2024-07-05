// import React from 'react';
import PropTypes from 'prop-types';
import UserFavoriteFoods from './UserFavoriteFoods';
import UserUsername from './UserUsername';

export default function UserProfile(props) {
    return (
        <>
            <UserUsername username={props.username} />
            <div>
                <span>Email: </span>
                <span>example@gmaol.com</span>
                <br/>
                <span>Age: </span>
                <span>{props.age}</span>
            </div>
            <UserFavoriteFoods />
        </>
    )
}
UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}
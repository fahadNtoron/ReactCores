import React from 'react';

const SingleF = ({friend}) => {
    console.log(friend)
    console.log(friend.name)
    const {name, email} = friend;
    console.log(name)
    return (
        <div>
            <h4>Name:{name}</h4>
            <p>Email: {email} </p>
        </div>
    );
};

export default SingleF;
import React from 'react';
import { useLoaderData } from 'react-router';

const userDetails = () => {
    const userData = useLoaderData();
    console.log(userData);
    return (
        <div>
            
        </div>
    );
};

export default userDetails;
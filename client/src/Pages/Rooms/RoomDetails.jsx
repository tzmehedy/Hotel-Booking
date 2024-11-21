import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
    const roomDetailsInfo = useLoaderData()

    return (
        <div className='mt-20'>
            <h1>{roomDetailsInfo.category}</h1>
        </div>
    );
};

export default RoomDetails;
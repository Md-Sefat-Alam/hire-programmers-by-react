import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './LoadProgrammers.css'

const LoadProgrammers = () => {
    const [programmers, setProgrammers] = useState([]);
    useEffect(() => {
        fetch('./programmersData.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, [])


    return (
        <div className='programmer-wrap'>
            {
                programmers.map(programmer => {
                    return (
                        <Cart key={programmer.id} programmer={programmer} />
                    )
                })
            }
        </div>
    );
};

export default LoadProgrammers;
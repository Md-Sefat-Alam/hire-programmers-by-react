import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './LoadProgrammers.css'

const LoadProgrammers = (props) => {
    const [programmers, setProgrammers] = useState([]);
    useEffect(() => {
        fetch('./programmersData.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, [])

    let [filterData, setFilterData] = useState([])
    const [filterDataAll, setFilterDataAll] = useState([]);

    const cartClickSelect = (selectData) => {
        if (filterData.includes(selectData.id)) {
            console.log('already added');
        } else {
            setFilterData([...filterData, selectData.id]);
            setFilterDataAll([...filterDataAll, selectData])
        }
    };
    useEffect(() => {
        props.cartClickSelect(filterDataAll)
    }, [filterData])


    return (
        <div className='programmer-wrap'>
            {
                programmers.map(programmer => {
                    return (
                        <Cart key={programmer.id} programmer={programmer} cartClickSelect={cartClickSelect} />
                    )
                })
            }
        </div>
    );
};

export default LoadProgrammers;
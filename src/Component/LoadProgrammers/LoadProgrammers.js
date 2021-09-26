import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './LoadProgrammers.css'

const LoadProgrammers = (props) => {
    // load programmers data
    const [programmers, setProgrammers] = useState([]);
    useEffect(() => {
        fetch('./programmersData.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, [])

    // use state for unique selection by id
    let [filterData, setFilterData] = useState([])

    // this state for set all data to an array
    const [filterDataAll, setFilterDataAll] = useState([]);

    // unique selection
    const cartClickSelect = (selectData) => {
        if (filterData.includes(selectData.id)) {
            console.log('already added');
        } else {
            setFilterData([...filterData, selectData.id]);
            setFilterDataAll([...filterDataAll, selectData])
        }
    };
    // send data cartClickSelect(filterDataAll) for showing data
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
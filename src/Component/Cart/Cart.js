import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { id, name, job, profession, salary, experience, rating, totalProjectCount, teamWorkAbility, img, } = props.programmer;
    // const [] = props.programmer.programmingLanguages
    // links

    return (
        <div className='cart'>
            <div className='cartTop'>
                <div className='cartTop_links'>
                    <div className="cart_left">
                        <p><span>{id}</span></p>
                    </div>
                    <div className="cart_right">
                        <p>ratings: {rating}</p>
                        <p>links: </p>
                    </div>
                </div>
                <div className='cartTop_img'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className='cartBottom'>
                <h3>{name}</h3>
                <h5 className="cart_profession">({profession})</h5>
                <h5 className='cart_job'>Work at: <span>{job}</span></h5>
                <p>Experience: <span>{experience}</span> years</p>
                <p>Salary: <span>{salary}</span></p>
                <p>Total Project Count: <span>{totalProjectCount}</span></p>
                <p>Team Work Ability: <span>{(teamWorkAbility) ? 'Yes' : 'NO'}</span></p>

            </div>
            <div className='cart_selection'>
                <button>See More..</button>
                <button>Select</button>
            </div>
        </div>
    );
};

export default Cart;
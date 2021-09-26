import React from 'react';
import { getRatingStars } from '../../utilities/rating';
import './Cart.css'

const Cart = (props) => {
    const { id, name, job, profession, salary, experience, rating, totalProjectCount, teamWorkAbility, img, } = props.programmer;
    // const [] = props.programmer.programmingLanguages
    const { web, git, fb, linkedin, mail, youtube } = props.programmer.links
    const links = [];
    // dynamic links with icon
    if (web || git || fb || linkedin || mail || youtube) {
        if (web) {
            links.push(<a href={web} rel='noreferrer' style={{ textDecoration: 'none', color: 'black', padding: '3px' }} target='_blank'><i class="fas fa-globe"></i></a>)
        }
        if (git) {
            links.push(<a href={git} rel='noreferrer' style={{ textDecoration: 'none', color: 'black', padding: '3px' }} target='_blank'><i class="fab fa-github"></i></a>)
        }
        if (fb) {
            links.push(<a href={fb} rel='noreferrer' style={{ textDecoration: 'none', color: '#4267B2', padding: '3px' }} target='_blank'><i class="fab fa-facebook-square"></i></a>)
        }
        if (linkedin) {
            links.push(<a href={linkedin} rel='noreferrer' style={{ textDecoration: 'none', color: '#2867B2', padding: '3px' }} target='_blank'><i class="fab fa-linkedin"></i></a>)
        }
        if (mail) {
            links.push(<a href={mail} rel='noreferrer' style={{ textDecoration: 'none', color: 'green', padding: '3px' }} target='_blank'><i class="far fa-envelope"></i></a>)
        }
        if (youtube) {
            links.push(<a href={youtube} rel='noreferrer' style={{ textDecoration: 'none', color: '#FF0000', padding: '3px' }} target='_blank'><i class="fab fa-youtube-square"></i></a>)
        }
    }

    return (
        <div className='cart'>
            {/* cart er uporer part picture and links */}
            <div className='cartTop'>
                <div className='cartTop_links'>
                    <div className="cart_left">
                        <p><span>{id}</span></p>
                    </div>
                    <div className="cart_right">
                        {getRatingStars(rating)}
                        <p className='cart_links'>
                            {links}
                        </p>
                    </div>
                </div>
                <div className='cartTop_img'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            {/* cart er another details */}
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
                {/* see more button not work */}
                <button>See More..</button>
                <button onClick={() => props.cartClickSelect({ id, name, img, salary })}>Select</button>
            </div>
        </div>
    );
};

export default Cart;
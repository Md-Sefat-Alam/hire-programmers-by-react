import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='siteTitle'>
                <h1>Hire <span>Programmers</span></h1>
                <span className='hints'>just select your choise we will contact you :)</span>
            </div>
            <div className='enterBudget'>
                <input placeholder='Enter Your Budget' type="" />
                <i class="fas fa-dollar-sign"></i>
                {/* <i class="fas fa-search"></i> */}
            </div>
            <div className='selectedPersion'>
                <i class="far fa-handshake">
                    <span>12</span>
                </i>

            </div>
        </div>
    );
};


/* 
<i class="fas fa-id-card"></i>
*/
export default Header;
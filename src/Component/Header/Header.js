import React from 'react';
import { useState } from 'react';
import './Header.css'

const Header = (props) => {
    const programmers = props.selectedProg;
    let total = 0;
    // total salary
    programmers.map(data => total += data.salary);

    let [budgetPrice, setBudgetPrice] = useState(500000);

    // get input field data
    function budget(event) {
        setBudgetPrice(event.target.value)
        console.log(budgetPrice)
        return;
    }

    return (
        <div>
            <div className='header'>
                {/* site name */}
                <div className='siteTitle'>
                    <h1>Hire <span>Programmers</span></h1>
                    <span className='hints'>just select your choise we will contact you :)</span>
                </div>
                {/* input field for enter budget and show it */}
                <div className='enterBudget'>
                    <h3>Budget: {budgetPrice} TK</h3>
                    <input onChange={budget} defaultValue='500000' placeholder='Enter Your Budget' type="number" />
                    <i class="fas fa-dollar-sign"></i>
                    {/* <i class="fas fa-search"></i> */}
                </div>
                {/* total salary show and selected programmars show on drop down list */}
                <div className='selectionPart'>
                    <div className='selectedPersion'>
                        <i class="far fa-handshake">
                            <span>{programmers.length}</span>

                            <div className='dropdownMenu'>
                                <ul>
                                    {
                                        programmers.map(data => {
                                            return (
                                                <li>
                                                    <div className='dropdown_wrap'>
                                                        <div className='dropdown_img'><img width="60px" src={data.img} alt="" /></div>
                                                        <div>
                                                            <div className='dropdown_name'><h4>{data.name}</h4></div>
                                                            <div className="dropdown_salary"><h4>Salary: {data.salary}</h4></div>
                                                        </div>
                                                    </div>
                                                    <div className="deSelect">
                                                        X
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </i>
                    </div>
                    {/* show total salary */}
                    <div className='salaryShow'>
                        <h3>Total: {total} TK</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Header;
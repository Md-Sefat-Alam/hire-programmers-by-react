import React from 'react';
import './Header.css'

const Header = (props) => {
    const programmers = props.selectedProg;
    // console.log(programmers);
    // const { id, name, img, salary } = { ...programmers }
    // console.log({ ...programmers })
    let total = 0;
    programmers.map(data => total += data.salary);

    return (
        <div>
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
                    <div className='salaryShow'>
                        <h3>Total: {total}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};


/* 
<i class="fas fa-id-card"></i>
*/
export default Header;